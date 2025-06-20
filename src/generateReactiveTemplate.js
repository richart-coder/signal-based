function cleanupTempAttrs(container) {
  const tempElements = container.querySelectorAll(
    '[class*="data-attr-"], [class*="data-event-"]'
  );
  tempElements.forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (
        attr.name.startsWith("data-attr-") ||
        attr.name.startsWith("data-event-")
      ) {
        el.removeAttribute(attr.name);
      }
    });
  });
}

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

function applyBinding(element, bindingInfo, binding, effect) {
  switch (bindingInfo.type) {
    case "event":
      const eventName = bindingInfo.name.startsWith("on")
        ? bindingInfo.name.slice(2).toLowerCase()
        : bindingInfo.name.toLowerCase();

      const handler = binding();
      const targetElement = element.parentElement;

      if (typeof handler === "function" && targetElement) {
        targetElement.addEventListener(eventName, (event) => {
          handler(event);
        });
      } else {
        console.error("❌ 事件綁定失敗:", typeof handler, targetElement);
      }
      break;

    case "attr":
      const { name } = bindingInfo;
      const targetAttrElement = element.parentElement;

      if (!targetAttrElement) {
        console.error("❌ 找不到目標元素");
        break;
      }

      effect(() => {
        const value = binding();

        if (
          ["disabled", "checked", "selected", "hidden", "readonly"].includes(
            name
          )
        ) {
          if (value) {
            targetAttrElement.setAttribute(name, "");
          } else {
            targetAttrElement.removeAttribute(name);
          }
        } else {
          if (value != null && value !== false) {
            targetAttrElement.setAttribute(name, String(value));
          } else {
            targetAttrElement.removeAttribute(name);
          }
        }
      });
      break;

    case "text":
    default:
      const textNode = document.createTextNode("");
      element.parentNode.replaceChild(textNode, element);

      effect(() => {
        const value = binding();
        textNode.textContent = value ?? "";
      });
      break;
  }
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
      const bindingId = `${bindingInfo.type}-${bindingIndex}`;

      if (bindingInfo.type === "attr") {
        template = template.replace(/\s+[a-zA-Z][a-zA-Z0-9-]*\s*=\s*$/, "");
        template += ` data-attr-${bindingIndex}="placeholder"><span data-binding="${bindingId}"></span`;
      } else if (bindingInfo.type === "event") {
        template = template.replace(/\s+on[A-Z][a-zA-Z]*\s*=\s*$/, "");
        template += ` data-event-${bindingIndex}="placeholder"><span data-binding="${bindingId}"></span`;
      } else {
        template += `<span data-binding="${bindingId}"></span>`;
      }

      dynamicBindings.push({
        id: bindingId,
        info: bindingInfo,
        binding: createFunction(item.expression, context),
      });
      bindingIndex++;
    }
  });

  return {
    mount(container) {
      container.innerHTML = template;
      dynamicBindings.forEach(({ id, info, binding }) => {
        const bindingElement = container.querySelector(
          `[data-binding="${id}"]`
        );

        if (bindingElement && effect) {
          applyBinding(bindingElement, info, binding, effect);
        } else {
          console.warn("找不到綁定元素:", id);
        }

        cleanupTempAttrs(container);
      });
    },
  };
}
