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

  return {
    mount(container) {
      const elementBindings = new Map();

      let processedTemplate = template;

      let elementCounter = 0;
      const elementIdMap = new Map();

      dynamicBindings.forEach(({ index, info, binding }) => {
        if (info.type === "attr") {
          const oldPattern = `"{{ATTR_${index}}}"`;

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
          processedTemplate = processedTemplate.replace(oldPattern, newPattern);

          if (!elementBindings.has(elementId)) {
            elementBindings.set(elementId, []);
          }
          elementBindings.get(elementId).push({ type: "attr", info, binding });
        } else if (info.type === "event") {
          const oldPattern = `"{{EVENT_${index}}}"`;

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
          processedTemplate = processedTemplate.replace(oldPattern, newPattern);

          if (!elementBindings.has(elementId)) {
            elementBindings.set(elementId, []);
          }
          elementBindings.get(elementId).push({ type: "event", info, binding });
        }
      });

      container.innerHTML = processedTemplate;

      elementBindings.forEach((bindings, elementId) => {
        const element = container.querySelector(
          `[data-element-id="${elementId}"]`
        );

        if (element) {
          element.removeAttribute("data-element-id");

          bindings.forEach(({ type, info, binding }) => {
            if (type === "attr") {
              const attrName = info.name;

              if (effect) {
                effect(() => {
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
                });
              } else {
                console.warn("❌ effect 函數不存在");
              }
            } else if (type === "event") {
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
            }
          });
        }
      });

      dynamicBindings.forEach(({ index, info, binding }) => {
        if (info.type === "text") {
          const walker = document.createTreeWalker(
            container,
            NodeFilter.SHOW_COMMENT,
            null
          );

          let comment;
          while ((comment = walker.nextNode())) {
            if (comment.textContent === `TEXT_${index}`) {
              const textNode = document.createTextNode("");
              comment.parentNode?.replaceChild(textNode, comment);

              if (effect) {
                effect(() => {
                  const value = binding();
                  textNode.textContent = value ?? "";
                });
              }
              break;
            }
          }
        }
      });
    },
  };
}
