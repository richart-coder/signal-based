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

class DynamicContentManager {
  constructor(anchor, parentElement, compileElementFn, context) {
    this.anchor = anchor;
    this.parentElement = parentElement;
    this.compileElement = compileElementFn;
    this.context = context;

    this.elementCache = new Map();
    this.currentItems = [];
    this.currentKeys = [];
  }

  update(newValue) {
    const newItems = this.normalize(newValue);

    const newKeys = newItems.map((item, index) =>
      this.generateKey(item, index)
    );

    const diff = this.calculateDiff(
      this.currentKeys,
      newKeys,
      this.currentItems,
      newItems
    );

    this.applyChanges(diff);

    this.currentItems = newItems;
    this.currentKeys = newKeys;
  }

  normalize(value) {
    if (FALSY_VALUES.has(value)) return [];

    if (Array.isArray(value)) {
      return value.filter((item) => !FALSY_VALUES.has(item));
    }

    return [value];
  }

  generateKey(item, index) {
    if (typeof item === "object" && item?.type === "JSXElement") {
      const keyAttr = item.opening?.attributes?.find(
        (a) => a.name.value === "key"
      );

      if (keyAttr?.value?.type === "JSXExpressionContainer") {
        try {
          const evaluator = new JSXEvaluator(
            item._boundContext || this.context
          );
          const result = evaluator.evaluate(keyAttr.value.expression);
          const keyVal = result.binding();
          return keyVal != null ? String(keyVal) : `auto-${index}`;
        } catch {
          return `auto-${index}`;
        }
      }

      if (keyAttr?.value?.type === "StringLiteral") {
        return keyAttr.value.value;
      }

      return `jsx-${this.hashContent(item)}`;
    }

    if (typeof item === "string" || typeof item === "number") {
      // 對於純文本/數字內容，使用更智能的key策略
      const content = String(item);

      // 如果是純數字或包含數字的字符串，使用類型作為key
      if (/^[\d.,\s$€¥£]+$/.test(content)) {
        return `number-content-${index}`;
      }
      // 如果包含購物車圖標等固定模式
      else if (content.includes("🛒") || content.includes("結帳")) {
        return `checkout-button-${index}`;
      }
      // 其他文本內容
      else {
        return `content-${item}`;
      }
    }

    return `auto-${index}`;
  }

  hashContent(obj) {
    return JSON.stringify(obj).slice(0, 8);
  }

  calculateDiff(oldKeys, newKeys, oldItems, newItems) {
    const toRemove = [];
    const toAdd = [];
    const toUpdate = [];
    const toMove = [];

    oldKeys.forEach((key, index) => {
      if (!newKeys.includes(key)) {
        toRemove.push({ key, index });
      }
    });

    newKeys.forEach((key, newIndex) => {
      const oldIndex = oldKeys.indexOf(key);

      if (oldIndex === -1) {
        toAdd.push({
          key,
          item: newItems[newIndex],
          index: newIndex,
        });
      } else {
        if (this.shouldUpdateContent(oldItems[oldIndex], newItems[newIndex])) {
          toUpdate.push({
            key,
            oldItem: oldItems[oldIndex],
            newItem: newItems[newIndex],
            index: newIndex,
          });
        }

        if (oldIndex !== newIndex) {
          toMove.push({
            key,
            from: oldIndex,
            to: newIndex,
          });
        }
      }
    });

    return { toRemove, toAdd, toUpdate, toMove };
  }

  shouldUpdateContent(oldItem, newItem) {
    if (typeof oldItem !== typeof newItem) return true;

    if (typeof oldItem !== "object" || oldItem === null) {
      return oldItem !== newItem;
    }

    if (oldItem?.type === "JSXElement" && newItem?.type === "JSXElement") {
      const oldTag = oldItem.opening?.name?.value;
      const newTag = newItem.opening?.name?.value;
      if (oldTag !== newTag) return true;

      const oldAttrs = oldItem.opening?.attributes || [];
      const newAttrs = newItem.opening?.attributes || [];
      if (oldAttrs.length !== newAttrs.length) return true;

      for (let i = 0; i < oldAttrs.length; i++) {
        const oldAttr = oldAttrs[i];
        const newAttr = newAttrs[i];
        if (
          oldAttr?.name?.value !== newAttr?.name?.value ||
          oldAttr?.value?.value !== newAttr?.value?.value
        ) {
          return true;
        }
      }

      const oldChildren = oldItem.children || [];
      const newChildren = newItem.children || [];
      if (oldChildren.length !== newChildren.length) return true;

      for (let i = 0; i < oldChildren.length; i++) {
        const oldChild = oldChildren[i];
        const newChild = newChildren[i];
        if (oldChild?.type !== newChild?.type) return true;
      }

      return false;
    }

    return true;
  }

  applyChanges(diff) {
    diff.toRemove.forEach(({ key }) => {
      const cached = this.elementCache.get(key);
      if (cached) {
        if (cached.dispose) cached.dispose();

        if (cached.element.parentNode) {
          cached.element.parentNode.removeChild(cached.element);
        }

        this.elementCache.delete(key);
      }
    });

    diff.toAdd.forEach(({ key, item, index }) => {
      const { element, dispose } = this.createElement(item);
      this.elementCache.set(key, { element, dispose });
      this.insertElementAt(element, index);
    });

    diff.toUpdate.forEach(({ key, newItem }) => {
      const cached = this.elementCache.get(key);
      if (cached) {
        if (cached.dispose) cached.dispose();

        const { element: newElement, dispose: newDispose } =
          this.createElement(newItem);

        if (cached.element.parentNode) {
          cached.element.parentNode.replaceChild(newElement, cached.element);
        }

        this.elementCache.set(key, {
          element: newElement,
          dispose: newDispose,
        });
      }
    });

    diff.toMove.forEach(({ key, to }) => {
      const cached = this.elementCache.get(key);
      if (cached) {
        this.moveElementTo(cached.element, to);
      }
    });
  }

  createElement(item) {
    let element;
    let dispose = null;

    if (typeof item === "object" && item?.type === "JSXElement") {
      element = this.compileElement(item, item._boundContext || this.context);

      dispose = () => {
        if (element._effectCleanups) {
          element._effectCleanups.forEach((cleanup) => cleanup());
          element._effectCleanups = [];
        }

        this.cleanupElementEffects(element);
      };
    } else if (typeof item === "string" && item.includes("<")) {
      const temp = document.createElement("template");
      temp.innerHTML = item;
      const nodes = Array.from(temp.content.childNodes);

      if (nodes.length === 1) {
        element = nodes[0];
      } else {
        element = document.createDocumentFragment();
        nodes.forEach((node) => element.appendChild(node));
      }
    } else {
      element = document.createTextNode(String(item));
    }

    if (element.nodeType === Node.ELEMENT_NODE) {
      element._dynamic = true;
    }

    return { element, dispose };
  }

  cleanupElementEffects(element) {
    if (element.nodeType !== Node.ELEMENT_NODE) return;

    if (element._effectCleanups) {
      element._effectCleanups.forEach((cleanup) => cleanup());
      element._effectCleanups = [];
    }

    if (element._dynamicContentManager) {
      element._dynamicContentManager.cleanup();
      element._dynamicContentManager = null;
    }

    Array.from(element.children).forEach((child) => {
      this.cleanupElementEffects(child);
    });
  }

  updateElement(element, newItem) {
    if (element.nodeType === Node.TEXT_NODE) {
      element.textContent = String(newItem);
      return element;
    }

    if (typeof newItem === "object" && newItem?.type === "JSXElement") {
      this.cleanupElementEffects(element);
      const newElement = this.compileElement(
        newItem,
        newItem._boundContext || this.context
      );
      if (element.parentNode) {
        element.parentNode.replaceChild(newElement, element);
      }
      return newElement;
    }

    return element;
  }

  insertElementAt(element, index) {
    let targetSibling = this.anchor.nextSibling;
    let currentIndex = 0;

    while (targetSibling && targetSibling._dynamic && currentIndex < index) {
      targetSibling = targetSibling.nextSibling;
      currentIndex++;
    }

    this.parentElement.insertBefore(element, targetSibling);
  }

  moveElementTo(element, targetIndex) {
    element.parentNode?.removeChild(element);

    this.insertElementAt(element, targetIndex);
  }

  cleanup() {
    this.elementCache.forEach(({ element, dispose }) => {
      if (dispose) dispose();
      if (element.parentNode) {
        element.parentNode.removeChild(element);
      }
    });

    this.elementCache.clear();
    this.currentItems = [];
    this.currentKeys = [];
  }
}

export default function generateReactiveTemplate(jsxAST, context) {
  function createEvaluator(ctx) {
    return new JSXEvaluator(ctx);
  }

  function setAttr(el, name, value, syncProp = true) {
    const attrName = ATTR_MAP.get(name) ?? name;
    if (BOOLEAN_ATTRS.has(attrName)) {
      if (value) el.setAttribute(attrName, "");
      else el.removeAttribute(attrName);
      if (syncProp) el[attrName] = !!value;
    } else {
      if (value != null && value !== false) {
        el.setAttribute(attrName, value);
        if (syncProp) el[attrName] = value;
      } else {
        el.removeAttribute(attrName);
        if (syncProp) el[attrName] = null;
      }
    }
  }

  function compileElement(node, ctx = context) {
    const tag = node.opening.name.value;
    const el = document.createElement(tag);

    const evaluator = createEvaluator(ctx);

    el._effectCleanups = [];

    node.opening.attributes.forEach((attr) => {
      const attrName = ATTR_MAP.get(attr.name.value) ?? attr.name.value;

      if (attr.value?.type === "JSXExpressionContainer") {
        const result = evaluator.evaluate(attr.value.expression);

        if (attrName.startsWith("on")) {
          const eventName = attrName.slice(2).toLowerCase();
          const handler = (e) => {
            const fn = result.binding();
            if (typeof fn === "function") fn(e);
          };
          el.addEventListener(eventName, handler);
          if (!el._handlers) el._handlers = {};
          el._handlers[eventName] = handler;
        } else if (result.isReactive) {
          const cleanup = effect(() => {
            const val = result.binding();

            queueMicrotask(() => setAttr(el, attrName, val));
          });
          el._effectCleanups.push(cleanup);
        } else {
          const val = result.binding();
          setAttr(el, attrName, val);
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
        const result = evaluator.evaluate(child.expression);

        const anchor = document.createComment("dynamic");
        el.appendChild(anchor);

        const contentManager = new DynamicContentManager(
          anchor,
          el,
          compileElement,
          ctx
        );

        if (result.isReactive) {
          const cleanup = effect(() => {
            const val = result.binding();
            contentManager.update(val);
          });
          el._effectCleanups.push(cleanup);
        } else {
          const val = result.binding();
          contentManager.update(val);
        }

        el._dynamicContentManager = contentManager;
      } else if (child.type === "JSXElement") {
        const childEl = compileElement(child, ctx);
        el.appendChild(childEl);
      }
    });

    return el;
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
    throw new Error(`無效的 AST 類型: ${ast.type}`);
  }

  return {
    mount(container) {
      const root = compileModule(jsxAST);
      container.appendChild(root);
    },
    cleanup(container) {
      const elementsWithEffects = container.querySelectorAll("*");
      elementsWithEffects.forEach((el) => {
        if (el._effectCleanups) {
          el._effectCleanups.forEach((cleanup) => cleanup());
          el._effectCleanups = [];
        }

        if (el._dynamicContentManager) {
          el._dynamicContentManager.cleanup();
          el._dynamicContentManager = null;
        }
      });

      container.innerHTML = "";
    },
  };
}
