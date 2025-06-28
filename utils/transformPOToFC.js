function processTernaryWithPipe(expression) {
  const questionIndex = expression.indexOf("?");
  const colonIndex = expression.lastIndexOf(":");

  if (questionIndex === -1 || colonIndex === -1) {
    return expression;
  }

  const condition = expression.slice(0, questionIndex).trim();
  const trueBranch = expression.slice(questionIndex + 1, colonIndex).trim();
  const falseBranch = expression.slice(colonIndex + 1).trim();

  const processedTrue = trueBranch.includes("|>")
    ? processPipeExpression(trueBranch)
    : trueBranch;

  const processedFalse = falseBranch.includes("|>")
    ? processPipeExpression(falseBranch)
    : falseBranch;

  return `${condition} ? (${processedTrue}) : (${processedFalse})`;
}

function processPipeExpression(expression) {
  const parts = expression.split(/\s*\|>\s*/);
  if (parts.length < 2) return expression;

  return parts.reduce((acc, part, index) => {
    if (index === 0) {
      return part.trim();
    } else {
      return `${part.trim()}(${acc})`;
    }
  });
}

export default function transformPOToFC(code) {
  return code.replace(/{([^{}]+)}/g, (match, content) => {
    if (
      content.includes("?") &&
      content.includes(":") &&
      content.includes("|>")
    ) {
      return `{${processTernaryWithPipe(content)}}`;
    }

    if (content.includes("|>")) {
      return `{${processPipeExpression(content)}}`;
    }

    return match;
  });
}
