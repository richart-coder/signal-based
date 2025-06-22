import linearSplit from "./linearSplit.js";
import createFunction from "./createFunction.js";

const booleanAttrSet = new Set([
  "disabled",
  "checked",
  "selected",
  "hidden",
  "readonly",
]);

const BINDING_PATTERNS = {
  REACT_EVENT: /\s+(on[A-Z][a-zA-Z]*)\s*=\s*$/,
  ATTR: /\s+([a-zA-Z][a-zA-Z0-9-]*)\s*=\s*$/,
  TEXT_END: />[\s]*$/,
};

function detectBindingType(templateSoFar) {
  const context = templateSoFar.slice(-200);

  const reactEventMatch = context.match(BINDING_PATTERNS.REACT_EVENT);
  if (reactEventMatch) {
    return { type: "event", name: reactEventMatch[1] };
  }

  const attrMatch = context.match(BINDING_PATTERNS.ATTR);
  if (attrMatch) {
    return {
      type: "attr",
      name: attrMatch[1] === "className" ? "class" : attrMatch[1],
    };
  }

  return { type: "text" };
}

export default function generateReactiveTemplate(input, { context, effect }) {
  const merged = Array.isArray(input) ? input : linearSplit(input);

  let template = "";
  const dynamicBindings = [];
  let bindingIndex = 0;

  merged.forEach((item) => {
    if (item.type === "static") {
      template += item.content;
    } else {
      const bindingInfo = detectBindingType(template);
      const bindingId = `binding-${bindingIndex}`;

      switch (bindingInfo.type) {
        case "attr":
          template += `"{{ATTR_${bindingIndex}}}"`;
          break;
        case "event":
          template += `"{{EVENT_${bindingIndex}}}"`;
          break;
        default:
          template += `<!--TEXT_${bindingIndex}-->`;
      }

      dynamicBindings.push({
        id: bindingId,
        index: bindingIndex,
        info: bindingInfo,
        binding: createFunction(item.expression, context),
      });
      bindingIndex++;
    }
  });

  const { processedTemplate, elementBindings, textBindingsToProcess } =
    processBindings(template, dynamicBindings);

  return {
    mount(container) {
      container.innerHTML = processedTemplate;
      applyElementBindings(elementBindings, container, effect);
      applyTextBindings(container, textBindingsToProcess, effect, context);
      applyJSXEventBindings(container, context);
    },
  };
}

function processBindings(template, dynamicBindings) {
  const elementBindings = new Map();
  const textBindingsToProcess = [];
  let processedTemplate = template;
  let elementCounter = 0;
  const elementIdMap = new Map();

  dynamicBindings.forEach(({ index, info, binding }) => {
    if (info.type === "text") {
      textBindingsToProcess.push({ index, info, binding });
      return;
    }

    const result = processElementBinding({
      index,
      info,
      processedTemplate,
      elementCounter,
      elementIdMap,
    });

    processedTemplate = result.processedTemplate;
    elementCounter = result.elementCounter;

    if (!elementBindings.has(result.elementId)) {
      elementBindings.set(result.elementId, []);
    }
    elementBindings.get(result.elementId).push({
      type: info.type,
      info,
      binding,
    });
  });

  return { processedTemplate, elementBindings, textBindingsToProcess };
}

const processElementBinding = ({
  index,
  info,
  processedTemplate,
  elementCounter,
  elementIdMap,
}) => {
  let elementId;
  let updatedTemplate;

  if (info.type === "event") {
    const eventAttrPattern = new RegExp(
      `\\s+${info.name}\\s*=\\s*"{{EVENT_${index}}}"`
    );

    const matchIndex = processedTemplate.search(eventAttrPattern);
    if (matchIndex === -1) {
      console.warn(`未找到事件屬性模式: ${info.name}`);
      return { elementId: null, processedTemplate, elementCounter };
    }

    const beforeEventAttr = processedTemplate.substring(0, matchIndex);
    const elementPosition = beforeEventAttr.lastIndexOf("<");

    elementId = getOrCreateElementId(
      elementPosition,
      elementIdMap,
      elementCounter++
    );

    const hasDataElementId = processedTemplate.includes(
      `data-element-id="${elementId}"`
    );

    updatedTemplate = processedTemplate.replace(
      eventAttrPattern,
      hasDataElementId ? "" : ` data-element-id="${elementId}"`
    );
  } else {
    const oldPattern = `"{{ATTR_${index}}}"`;
    const patternIndex = processedTemplate.indexOf(oldPattern);

    if (patternIndex === -1) {
      console.warn(`未找到屬性模式: ${oldPattern}`);
      return { elementId: null, processedTemplate, elementCounter };
    }

    const templateUpToHere = processedTemplate.substring(0, patternIndex);
    const elementPosition = templateUpToHere.lastIndexOf("<");

    elementId = getOrCreateElementId(
      elementPosition,
      elementIdMap,
      elementCounter++
    );

    const hasDataElementId = processedTemplate.includes(
      `data-element-id="${elementId}"`
    );
    const newPattern = hasDataElementId
      ? '""'
      : `"" data-element-id="${elementId}"`;

    updatedTemplate = processedTemplate.replace(oldPattern, newPattern);
  }

  return { elementId, processedTemplate: updatedTemplate, elementCounter };
};

function getOrCreateElementId(position, elementIdMap, counter) {
  if (elementIdMap.has(position)) {
    return elementIdMap.get(position);
  }

  const elementId = `element-${counter}`;
  elementIdMap.set(position, elementId);
  return elementId;
}

const applyElementBindings = (elementBindings, container, effect) => {
  elementBindings.forEach((bindings, elementId) => {
    const element = container.querySelector(`[data-element-id="${elementId}"]`);
    if (!element) return;

    element.removeAttribute("data-element-id");

    bindings.forEach(({ type, info, binding }) => {
      if (type === "attr") {
        effect(watchAttr(element, info, binding));
      } else if (type === "event") {
        applyEventBinding(element, info, binding);
      }
    });
  });
};

const watchAttr = (element, info, binding) => {
  const { name: attrName } = info;
  const isInput = element.tagName === "INPUT";
  const isSelect = element.tagName === "SELECT";
  const isBooleanAttr = booleanAttrSet.has(attrName);
  const isValueAttr = attrName === "value";

  return () => {
    const value = binding();

    if (value == null || value === false) {
      element.removeAttribute(attrName);

      if ((isInput || isSelect) && isValueAttr) {
        element.value = "";
      }
      return;
    }

    const attrValue = isBooleanAttr ? "" : String(value);
    const shouldSetAttribute = isBooleanAttr ? value : true;

    if (shouldSetAttribute) {
      element.setAttribute(attrName, attrValue);

      if ((isInput || isSelect) && isValueAttr) {
        element.value = attrValue;
      }
    }
  };
};

const applyEventBinding = (element, info, binding) => {
  const eventName = info.name;
  const actualEventName = eventName.startsWith("on")
    ? eventName.slice(2).toLowerCase()
    : eventName.toLowerCase();

  [eventName, eventName.toLowerCase(), actualEventName].forEach((name) => {
    element.removeAttribute(name);
    element[name] = null;
  });

  const handler = binding();
  if (typeof handler !== "function") {
    console.warn(`❌ 事件處理器不是函數: ${typeof handler}`);
    return;
  }

  const wrappedHandler = (event) => {
    try {
      return handler(event);
    } catch (error) {
      console.error("❌ 事件處理錯誤:", error);
    }
  };

  element.addEventListener(actualEventName, wrappedHandler);

  setTimeout(() => {
    [eventName, eventName.toLowerCase(), actualEventName].forEach((name) => {
      element.removeAttribute(name);
    });
  }, 0);
};

const traverseComment = (container) => {
  const walker = document.createTreeWalker(
    container,
    NodeFilter.SHOW_COMMENT,
    null
  );

  const commentMap = new Map();
  let comment;

  while ((comment = walker.nextNode())) {
    const match = comment.textContent?.match(/^TEXT_(\d+)$/);
    if (match) {
      commentMap.set(parseInt(match[1], 10), comment);
    }
  }

  return commentMap;
};

const HTML_TAG_PATTERN = /<\s*([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>/;
const FALSY_VALUES = new Set([false, null, undefined, ""]);

const isValidHTML = (str) => {
  return (
    typeof str === "string" && str.includes("<") && HTML_TAG_PATTERN.test(str)
  );
};

const isEqual = (a, b) => Object.is(a, b);

const watchChildren = (elNode, binding, context) => {
  let previousValue = null;
  let managedNodes = [];

  const clearManagedNodes = () => {
    if (managedNodes.length === 0) return;

    managedNodes.forEach((node) => {
      if (node?.parentNode === elNode) {
        elNode.removeChild(node);
      }
    });
    managedNodes = [];
  };

  const createNodesFromValue = (value) => {
    if (FALSY_VALUES.has(value)) return [];

    const nodes = [];
    const items = Array.isArray(value) ? value : [value];

    items.forEach((item) => {
      if (FALSY_VALUES.has(item)) return;

      if (isValidHTML(item)) {
        const template = document.createElement("template");
        template.innerHTML = item;
        Array.from(template.content.childNodes).forEach((child) => {
          nodes.push(child);
        });
      } else {
        const textContent = String(item);
        if (textContent) {
          nodes.push(document.createTextNode(textContent));
        }
      }
    });

    return nodes;
  };

  return () => {
    const value = binding();

    if (isEqual(value, previousValue)) return;

    clearManagedNodes();

    const newNodes = createNodesFromValue(value);

    if (newNodes.length > 0) {
      const fragment = document.createDocumentFragment();
      newNodes.forEach((node) => {
        fragment.appendChild(node);
        managedNodes.push(node);
      });
      elNode.appendChild(fragment);

      if (context) {
        applyJSXEventBindings(elNode, context);
      }
    }

    previousValue = value;
  };
};

const applyTextBindings = (
  container,
  textBindingsToProcess,
  effect,
  context
) => {
  if (textBindingsToProcess.length === 0) return;

  const commentMap = traverseComment(container);

  textBindingsToProcess.forEach(({ index, binding }) => {
    const comment = commentMap.get(index);
    if (comment) {
      effect(watchChildren(comment.parentNode, binding, context));
    }
  });
};

function applyJSXEventBindings(container, context) {
  container.querySelectorAll("[data-jsx-event]").forEach((element) => {
    const eventData = element.getAttribute("data-jsx-event");
    const [eventType, functionName] = eventData.split(":");

    let handler = null;

    if (functionName.startsWith("__jsx_")) {
      const globalEnv =
        typeof window !== "undefined"
          ? window
          : typeof global !== "undefined"
          ? global
          : {};

      if (globalEnv.__jsxEventHandlers?.[functionName]) {
        handler = globalEnv.__jsxEventHandlers[functionName];

        delete globalEnv.__jsxEventHandlers[functionName];
      }
    } else if (context?.[functionName]) {
      handler = context[functionName];
    }

    if (handler && typeof handler === "function") {
      element.addEventListener(eventType, handler);
      element.removeAttribute("data-jsx-event");
    }
  });
}
