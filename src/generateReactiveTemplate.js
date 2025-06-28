import JSXEvaluator from "./JSXEvaluator.js";
import { effect } from "../signal.js";

const BOOLEAN_ATTRS = new Set([
  "disabled",
  "checked",
  "selected",
  "hidden",
  "readonly",
]);

const ATTR_MAP = new Map([
  ["className", "class"],
  ["htmlFor", "for"],
]);

const FALSY_VALUES = new Set([null, undefined, false, ""]);

export default function generateReactiveTemplate(jsxAST, context) {
  function createBinding(expression, ctx) {
    const evaluator = new JSXEvaluator(ctx);
    return evaluator.evaluate(expression);
  }

  function setAttr(el, name, value, syncProp = true) {
    if (BOOLEAN_ATTRS.has(name)) {
      if (value) el.setAttribute(name, "");
      else el.removeAttribute(name);
      if (syncProp) el[name] = !!value;
    } else {
      if (value != null && value !== false) {
        el.setAttribute(name, value);
        if (syncProp) el[name] = value;
      } else {
        el.removeAttribute(name);
        if (syncProp) el[name] = null;
      }
    }
  }

  function compileElement(node, ctx = context) {
    const tag = node.opening.name.value;
    const el = document.createElement(tag);

    node.opening.attributes.forEach((attr) => {
      const attrName = ATTR_MAP.get(attr.name.value) ?? attr.name.value;

      if (attr.value?.type === "JSXExpressionContainer") {
        const binding = createBinding(attr.value.expression, ctx);

        if (attrName.startsWith("on")) {
          const eventName = attrName.slice(2).toLowerCase();
          const handler = (e) => {
            const fn = binding();
            if (typeof fn === "function") fn(e);
          };
          el.addEventListener(eventName, handler);
          if (!el._handlers) el._handlers = {};
          el._handlers[eventName] = handler;
        } else {
          effect(() => {
            const val = binding();
            queueMicrotask(() => setAttr(el, attrName, val));
          });
        }
      } else if (attr.value?.type === "StringLiteral") {
        setAttr(el, attrName, attr.value.value);
      } else if (!attr.value) {
        setAttr(el, attrName, "");
      }
    });

    node.children.forEach((child) => {
      if (child.type === "JSXText") {
        const text = child.value.trim();
        if (text) el.appendChild(document.createTextNode(text));
      } else if (child.type === "JSXExpressionContainer") {
        const binding = createBinding(child.expression, ctx);
        const initialVal = binding();

        if (typeof initialVal === "string" || typeof initialVal === "number") {
          const textNode = document.createTextNode(String(initialVal));
          el.appendChild(textNode);
          effect(() => {
            textNode.textContent = String(binding());
          });
        } else {
          const anchor = document.createComment("dynamic");
          el.appendChild(anchor);

          let prevVal = null;
          let currentNodes = null;
          const itemNodes = new Map();

          effect(() => {
            const val = binding();
            if (Array.isArray(val)) {
              if (!Array.isArray(prevVal)) clearNodesAfter(anchor);
              renderList(val, anchor, itemNodes, prevVal);
              prevVal = val.slice();
            } else {
              if (Array.isArray(prevVal)) itemNodes.clear();
              const nodes = renderNode(val);
              if (shouldUpdate(currentNodes, nodes, val, prevVal)) {
                clearNodesAfter(anchor);
                insertNodes(nodes, anchor, el);
                currentNodes = nodes;
                prevVal = val;
              } else {
                prevVal = val;
              }
            }
          });
        }
      } else if (child.type === "JSXElement") {
        const childEl = compileElement(child, ctx);
        el.appendChild(childEl);
      }
    });

    return el;
  }

  function renderNode(val) {
    if (FALSY_VALUES.has(val)) return [];
    if (Array.isArray(val)) return val.flatMap(renderNode);
    if (typeof val === "object" && val?.type === "JSXElement") {
      return [compileElement(val, val._boundContext || context)];
    }
    if (typeof val === "string" && val.includes("<")) {
      const temp = document.createElement("template");
      temp.innerHTML = val;
      return Array.from(temp.content.childNodes);
    }
    return [document.createTextNode(String(val))];
  }

  function shouldUpdate(currNodes, newNodes, currVal, prevVal) {
    if (currNodes === null) return true;
    if (typeof currVal !== typeof prevVal) return true;

    if (
      typeof currVal === "object" &&
      currVal &&
      prevVal &&
      currVal.type === "JSXElement" &&
      prevVal.type === "JSXElement"
    ) {
      return currVal.opening?.name?.value !== prevVal.opening?.name?.value;
    }
    return currVal !== prevVal;
  }

  function renderList(items, anchor, itemNodes, prevItems) {
    const keys = new Set(items.map(getKey));
    itemNodes.forEach((nodeInfo, key) => {
      if (!keys.has(key)) {
        nodeInfo.cleanup?.forEach((fn) => fn());
        nodeInfo.element.parentNode?.removeChild(nodeInfo.element);
        itemNodes.delete(key);
      }
    });

    items.forEach((item, idx) => {
      const key = getKey(item, idx);
      const isNew = !itemNodes.has(key);

      if (isNew) {
        const el = createItem(item);
        itemNodes.set(key, { element: el, cleanup: [] });
        insertAt(el, anchor, idx);
      } else {
        const nodeInfo = itemNodes.get(key);
        if (!updateItem(nodeInfo.element, item)) {
          nodeInfo.element.parentNode?.removeChild(nodeInfo.element);
          const el = createItem(item);
          itemNodes.set(key, { element: el, cleanup: [] });
          insertAt(el, anchor, idx);
        } else {
          if (getPosition(nodeInfo.element, anchor) !== idx) {
            insertAt(nodeInfo.element, anchor, idx);
          }
        }
      }
    });
  }

  function getKey(item, idx) {
    if (typeof item === "object" && item?.type === "JSXElement") {
      const keyAttr = item.opening?.attributes?.find(
        (a) => a.name.value === "key"
      );
      if (keyAttr?.value?.type === "JSXExpressionContainer") {
        const ctx = item._boundContext || context;
        const binding = new JSXEvaluator(ctx).evaluate(
          keyAttr.value.expression
        );
        const keyVal = binding();
        return keyVal != null ? String(keyVal) : `index-${idx}`;
      }
      if (keyAttr?.value?.type === "StringLiteral") return keyAttr.value.value;
    }
    if (item?._boundContext?.todo?.id)
      return String(item._boundContext.todo.id);
    return `index-${idx}`;
  }

  function createItem(item) {
    if (typeof item === "object" && item?.type === "JSXElement") {
      return compileElement(item, item._boundContext || context);
    }
    return document.createTextNode(String(item));
  }

  function updateItem(el, item) {
    if (typeof item === "object" && item?.type === "JSXElement") {
      rebindHandlers(el, item, item._boundContext || context);
      return true;
    }
    return false;
  }

  function rebindHandlers(el, jsxItem, ctx) {
    jsxItem.opening?.attributes?.forEach((attr) => {
      const attrName = ATTR_MAP.get(attr.name.value) ?? attr.name.value;
      if (
        attrName.startsWith("on") &&
        attr.value?.type === "JSXExpressionContainer"
      ) {
        const eventName = attrName.slice(2).toLowerCase();
        const oldHandler = el._handlers?.[eventName];
        if (oldHandler) el.removeEventListener(eventName, oldHandler);

        const binding = new JSXEvaluator(ctx).evaluate(attr.value.expression);
        const newHandler = (e) => {
          const fn = binding();
          if (typeof fn === "function") fn(e);
        };
        el.addEventListener(eventName, newHandler);
        if (!el._handlers) el._handlers = {};
        el._handlers[eventName] = newHandler;
      }
    });

    jsxItem.children?.forEach((child, i) => {
      if (child.type === "JSXElement" && el.children[i]) {
        rebindHandlers(el.children[i], child, ctx);
      }
    });
  }

  function insertAt(el, anchor, idx) {
    el._dynamic = true;
    let sibling = anchor.nextSibling;
    let pos = 0;
    while (sibling && sibling._dynamic && pos < idx) {
      sibling = sibling.nextSibling;
      pos++;
    }
    anchor.parentNode.insertBefore(el, sibling);
  }

  function getPosition(el, anchor) {
    let curr = anchor.nextSibling;
    let pos = 0;
    while (curr && curr !== el) {
      if (curr._dynamic) pos++;
      curr = curr.nextSibling;
    }
    return curr === el ? pos : -1;
  }

  function clearNodesAfter(anchor) {
    let next = anchor.nextSibling;
    while (next && next._dynamic) {
      const toRemove = next;
      next = next.nextSibling;
      toRemove.parentNode?.removeChild(toRemove);
    }
  }

  function insertNodes(nodes, anchor, parent) {
    nodes.forEach((node) => {
      node._dynamic = true;
      parent.insertBefore(node, anchor.nextSibling);
    });
  }

  function compileModule(ast) {
    if (ast.type === "Module" && ast.body?.length > 0) {
      const stmt = ast.body[0];
      if (
        stmt.type === "ExpressionStatement" &&
        stmt.expression?.type === "JSXElement"
      ) {
        return compileElement(stmt.expression);
      }
    }
    if (ast.type === "JSXElement") return compileElement(ast);
    throw new Error(`Invalid AST type: ${ast.type}`);
  }

  return {
    mount(container) {
      const root = compileModule(jsxAST);
      container.appendChild(root);
    },
    cleanup(container) {
      container.innerHTML = "";
    },
  };
}
