export default function linearSplit(ast) {
  const sequence = [];

  function traverse(node) {
    if (!node || typeof node !== "object") return;

    switch (node.type) {
      case "JSXElement":
        const tagName = node.opening?.name?.value;
        if (tagName) {
          sequence.push({ type: "static", content: `<${tagName}>` });
        }

        if (node.children && Array.isArray(node.children)) {
          node.children.forEach(traverse);
        }

        if (tagName) {
          sequence.push({ type: "static", content: `</${tagName}>` });
        }
        break;

      case "JSXText":
        if (node.value && node.value.trim()) {
          sequence.push({
            type: "static",
            content: node.value.trim(),
          });
        }
        break;

      case "JSXExpressionContainer":
        sequence.push({
          type: "dynamic",
          expression: node.expression,
        });
        break;

      case "ExpressionStatement":
        if (node.expression) {
          traverse(node.expression);
        }
        break;

      case "Module":
        if (node.body && Array.isArray(node.body)) {
          node.body.forEach(traverse);
        }
        break;

      default:
        for (const key in node) {
          const child = node[key];
          if (Array.isArray(child)) {
            child.forEach(traverse);
          } else if (child && typeof child === "object" && child.type) {
            traverse(child);
          }
        }
    }
  }

  traverse(ast);
  return sequence;
}
