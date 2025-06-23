//@ts-nocheck
export default function convertJSXToTemplateParts(ast) {
  const sequence = [];

  function processOpeningElement(openingElement) {
    const tagName = openingElement.name.value;
    let content = `<${tagName}`;

    if (openingElement.attributes?.length > 0) {
      for (const attr of openingElement.attributes) {
        if (attr.type !== "JSXAttribute") continue;

        const attrName = attr.name.value;
        if (!attrName) continue;

        if (!attr.value) {
          content += ` ${attrName}`;
        } else if (attr.value.type === "StringLiteral") {
          content += ` ${attrName}="${attr.value.value}"`;
        } else if (attr.value.type === "JSXExpressionContainer") {
          content += ` ${attrName}=`;

          sequence.push(
            { type: "static", content },
            {
              type: "dynamic",
              expression: attr.value.expression,
            }
          );

          content = "";
        }
      }
    }

    content += ">";
    if (content) {
      sequence.push({ type: "static", content });
    }
  }

  function processClosingElement(tagName) {
    sequence.push({ type: "static", content: `</${tagName}>` });
  }

  function processText(node) {
    const text = node.value?.trim();
    if (text) {
      sequence.push({ type: "static", content: text });
    }
  }

  function processExpression(expression) {
    sequence.push({
      type: "dynamic",
      expression: expression,
    });
  }

  function traverse(node) {
    if (!node || typeof node !== "object") return;

    switch (node.type) {
      case "JSXElement":
        processOpeningElement(node.opening);

        node.children?.forEach(traverse);
        if (!node.opening.selfClosing && node.closing) {
          processClosingElement(node.opening.name.value);
        }
        break;

      case "JSXText":
        processText(node);
        break;

      case "JSXExpressionContainer":
        processExpression(node.expression);
        break;

      case "ExpressionStatement":
        traverse(node.expression);
        break;

      case "Module":
        node.body?.forEach(traverse);
        break;

      default:
        Object.values(node).forEach((child) => {
          if (Array.isArray(child)) {
            child.forEach(traverse);
          } else if (child?.type) {
            traverse(child);
          }
        });
    }
  }

  traverse(ast);
  return sequence;
}
