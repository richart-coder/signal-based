const booleanAttrSet = new Set([
  "disabled",
  "checked",
  "selected",
  "hidden",
  "readonly",
]);

function detectBindingType(templateSoFar) {
  const context = templateSoFar.slice(-200);

  const reactEventMatch = context.match(/\s+(on[A-Z][a-zA-Z]*)\s*=\s*$/);
  if (reactEventMatch) {
    return {
      type: "event",
      name: reactEventMatch[1],
    };
  }

  const attrMatch = context.match(/\s+([a-zA-Z][a-zA-Z0-9-]*)\s*=\s*$/);
  if (attrMatch) {
    return {
      type: "attr",
      name: attrMatch[1] === "className" ? "class" : attrMatch[1],
    };
  }

  if (context.match(/>[\s]*$/)) {
    return { type: "text" };
  }

  return { type: "text" };
}

function createFunction(expressionNode, context) {
  if (expressionNode.type === "CallExpression") {
    const functionName = expressionNode.callee.value;
    return () => {
      if (context && functionName in context) {
        return context[functionName]();
      }
      const env = typeof window === "undefined" ? globalThis : window;
      const result = env[functionName]?.();
      if (result == undefined && !(functionName in env)) {
        console.warn(`函數 "${functionName}" 不存在`);
      }
      return result;
    };
  }

  if (expressionNode.type === "Identifier") {
    const functionName = expressionNode.value;
    return () => {
      if (context && functionName in context) {
        return context[functionName];
      }
      const env = typeof window === "undefined" ? globalThis : window;
      const result = env[functionName];
      if (result == undefined && !(functionName in env)) {
        console.warn(`函數 "${functionName}" 不存在`);
      }
      return result;
    };
  }

  if (expressionNode.type === "ConditionalExpression") {
    const testFn = createFunction(expressionNode.test, context);
    const consequentFn = createFunction(expressionNode.consequent, context);
    const alternateFn = createFunction(expressionNode.alternate, context);
    return () => {
      const testResult = testFn();
      return testResult ? consequentFn() : alternateFn();
    };
  }

  if (expressionNode.type === "StringLiteral") {
    const value = expressionNode.value;
    return () => value;
  }

  if (expressionNode.type === "NumericLiteral") {
    const value = expressionNode.value;
    return () => value;
  }

  if (expressionNode.type === "BooleanLiteral") {
    const value = expressionNode.value;
    return () => value;
  }

  if (expressionNode.type === "JSXEmptyExpression") {
    return () => "";
  }

  if (expressionNode.type === "BinaryExpression") {
    const leftFn = createFunction(expressionNode.left, context);
    const rightFn = createFunction(expressionNode.right, context);
    const operator = expressionNode.operator;

    return () => {
      const left = leftFn();
      const right = rightFn();

      switch (operator) {
        case "+":
          return left + right;
        case "-":
          return left - right;
        case "*":
          return left * right;
        case "/":
          return left / right;
        case "%":
          return left % right;
        case "===":
          return left === right;
        case "!==":
          return left !== right;
        case "==":
          return left == right;
        case "!=":
          return left != right;
        case ">":
          return left > right;
        case "<":
          return left < right;
        case ">=":
          return left >= right;
        case "<=":
          return left <= right;
        case "&&":
          return left && right;
        case "||":
          return left || right;
        default:
          console.warn(`不支援的二元運算符: ${operator}`);
          return undefined;
      }
    };
  }

  console.error("不支援的表達式:", expressionNode);
  throw new Error(`不支援的表達式類型：${expressionNode.type}`);
}

export default function generateReactiveTemplate(merged, { context, effect }) {
  let template = "";
  const dynamicBindings = [];
  let bindingIndex = 0;

  merged.forEach((item) => {
    if (item.type === "static") {
      template += item.content;
    } else {
      const bindingInfo = detectBindingType(template);
      const bindingId = `binding-${bindingIndex}`;

      if (bindingInfo.type === "attr") {
        template += `"{{ATTR_${bindingIndex}}}"`;
      } else if (bindingInfo.type === "event") {
        template += `"{{EVENT_${bindingIndex}}}"`;
      } else {
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
  const textBindingsToProcess = [];
  const { processedTemplate, elementBindings } = (() => {
    const elementBindings = new Map();
    let processedTemplate = template;
    let elementCounter = 0;
    const elementIdMap = new Map();

    dynamicBindings.forEach(({ index, info, binding }) => {
      switch (info.type) {
        case "attr":
        case "event":
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
          break;
        case "text":
          textBindingsToProcess.push({ index, info, binding });
          break;
      }
    });

    return { processedTemplate, elementBindings };
  })();
  return {
    mount(container) {
      container.innerHTML = processedTemplate;

      applyElementBindings(elementBindings, container, effect);
      applyTextBindings(container, textBindingsToProcess, effect);
    },
  };
}

const processElementBinding = ({
  index,
  info,
  processedTemplate,
  elementCounter,
  elementIdMap,
}) => {
  const patternType = info.type === "attr" ? "ATTR" : "EVENT";
  const oldPattern = `"{{${patternType}_${index}}}"`;

  const templateUpToHere = processedTemplate.substring(
    0,
    processedTemplate.indexOf(oldPattern)
  );
  const elementPosition = templateUpToHere.lastIndexOf("<");

  let elementId;
  if (elementIdMap.has(elementPosition)) {
    elementId = elementIdMap.get(elementPosition);
  } else {
    elementId = `element-${elementCounter++}`;
    elementIdMap.set(elementPosition, elementId);
  }

  const newPattern = `"" data-element-id="${elementId}"`;
  const updatedTemplate = processedTemplate.replace(oldPattern, newPattern);

  return {
    elementId,
    processedTemplate: updatedTemplate,
    elementCounter,
  };
};

const applyElementBindings = (elementBindings, container, effect) => {
  elementBindings.forEach((bindings, elementId) => {
    const element = container.querySelector(`[data-element-id="${elementId}"]`);

    if (element) {
      element.removeAttribute("data-element-id");

      bindings.forEach(({ type, info, binding }) => {
        switch (type) {
          case "attr":
            effect(watchAttr(element, info, binding));
            break;
          case "event":
            applyEventBinding(element, info, binding);
            break;
        }
      });
    }
  });
};

const watchAttr = (element, info, binding) => {
  const attrName = info.name;

  return () => {
    const value = binding();
    const isBooleanAttr = booleanAttrSet.has(attrName);
    const shouldSetAttribute = isBooleanAttr
      ? value
      : value != null && value !== false;
    const attrValue = isBooleanAttr ? "" : String(value);

    if (shouldSetAttribute) {
      element.setAttribute(attrName, attrValue);
    } else {
      element.removeAttribute(attrName);
    }
  };
};

const applyEventBinding = (element, info, binding) => {
  const eventName = info.name;
  const actualEventName = eventName.startsWith("on")
    ? eventName.slice(2).toLowerCase()
    : eventName.toLowerCase();

  const handler = binding();
  if (typeof handler === "function") {
    element.addEventListener(actualEventName, handler);
    element.removeAttribute(eventName);
  } else {
    console.warn(`❌ 事件處理器不是函數: ${typeof handler}`);
  }
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
      const index = parseInt(match[1], 10);
      commentMap.set(index, comment);
    }
  }
  return commentMap;
};

const watchText = (textNode, binding) => {
  return () => {
    const value = binding();
    textNode.textContent = value ?? "";
  };
};
const applyTextBindings = (container, textBindingsToProcess, effect) => {
  if (textBindingsToProcess.length === 0) return;
  const commentMap = traverseComment(container);

  textBindingsToProcess.forEach(({ index, _, binding }) => {
    const comment = commentMap.get(index);
    if (comment) {
      const textNode = document.createTextNode("");
      comment.parentNode?.replaceChild(textNode, comment);
      effect(watchText(textNode, binding));
    }
  });
};
