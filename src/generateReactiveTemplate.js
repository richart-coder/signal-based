function createFunction(expressionNode, context) {
  if (expressionNode.type === "CallExpression") {
    const functionName = expressionNode.callee.value;

    return () => {
      const env = typeof window === "undefined" ? globalThis : window;
      const result = env[functionName]?.();
      if (context && functionName in context) {
        return context[functionName]();
      }
      if (result == undefined && !(functionName in env)) {
        console.warn(`函數 "${functionName}" 不存在`);
      }

      return result;
    };
  }

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
      template += `<span data-binding="${bindingIndex}"></span>`;
      dynamicBindings.push({
        index: bindingIndex,
        binding: createFunction(item.expression, context),
      });
      bindingIndex++;
    }
  });

  return {
    mount(container) {
      container.innerHTML = template;

      dynamicBindings.forEach(({ index, binding }) => {
        const bindingElement = container.querySelector(
          `[data-binding="${index}"]`
        );

        if (bindingElement) {
          const textNode = document.createTextNode("");
          bindingElement.appendChild(textNode);
          if (effect) {
            effect(() => {
              const value = binding();
              textNode.textContent = value ?? "";
            });
          }
        }
      });
    },
  };
}
