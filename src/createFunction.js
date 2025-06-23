//@ts-nocheck
import convertJSXToTemplateParts from "./convertJSXToTemplateParts.js";

const GLOBAL_ENV = typeof window === "undefined" ? globalThis : window;
const FALSY_VALUES_FOR_JSX = new Set([false, null, undefined]);
const HTML_ESCAPE_MAP = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escapeHtml = (str) => {
  return String(str).replace(/[&<>"']/g, (char) => HTML_ESCAPE_MAP[char]);
};

const createArgFunctions = (args, context) => {
  return args ? args.map((arg) => createFunction(arg, context)) : [];
};

const executeArgFunctions = (argFunctions) => {
  return argFunctions.map((fn) => fn());
};

const findFunction = (name, context) => {
  if (context && name in context) {
    return context[name];
  }
  return GLOBAL_ENV[name];
};

const callFunction = (fn, args, warnMessage) => {
  if (typeof fn === "function") {
    return fn.apply(null, args);
  }
  if (fn !== undefined) {
    return fn;
  }
  if (warnMessage) {
    console.warn(warnMessage);
  }
};

function handleCallExpression(node, context) {
  const handlers = {
    Identifier: () => handleSimpleFunctionCall(node, context),
    MemberExpression: () => handleMethodCall(node, context),
    ArrowFunctionExpression: () => handleImmediateArrowFunction(node, context),
    default: () => handleComplexCall(node, context),
  };

  return (handlers[node.callee.type] || handlers.default)();
}

function handleSimpleFunctionCall(node, context) {
  const functionName = node.callee.value;
  const argFunctions = createArgFunctions(node.arguments, context);

  return () => {
    const args = executeArgFunctions(argFunctions);
    const fn = findFunction(functionName, context);
    return callFunction(fn, args, `函數 "${functionName}" 不存在`);
  };
}

function handleMethodCall(node, context) {
  const methodFn = createFunction(node.callee, context);
  const argFunctions = createArgFunctions(node.arguments, context);

  return () => {
    const method = methodFn();
    const args = executeArgFunctions(argFunctions);
    return callFunction(method, args, "試圖調用非函數: " + method);
  };
}

function handleComplexCall(node, context) {
  const calleeFn = createFunction(node.callee, context);
  const argFunctions = createArgFunctions(node.arguments, context);

  return () => {
    const fn = calleeFn();
    const args = executeArgFunctions(argFunctions);
    return callFunction(fn, args, "試圖調用非函數: " + fn);
  };
}

function handleImmediateArrowFunction(node, context) {
  const arrowFn = createFunction(node.callee, context);
  const argFunctions = createArgFunctions(node.arguments, context);

  return () => {
    const fn = arrowFn();
    const args = executeArgFunctions(argFunctions);

    if (typeof fn === "function") {
      try {
        return fn.apply(null, args);
      } catch (error) {
        console.warn("立即調用箭頭函數失敗:", error);
      }
    }
    return undefined;
  };
}

const getProperty = (obj, property, context) => {
  if (property.type === "Identifier") {
    const prop = obj[property.value];
    return typeof prop === "function" ? prop.bind(obj) : prop;
  }

  const propertyName = createFunction(property, context)();
  const prop = obj[propertyName];
  return typeof prop === "function" ? prop.bind(obj) : prop;
};

function handleIdentifier(node, context) {
  const variableName = node.value;

  return () => {
    const value = findFunction(variableName, context);

    if (typeof value === "function") {
      return (event) => value(event);
    }

    if (
      value === undefined &&
      !(variableName in (context || {})) &&
      !(variableName in GLOBAL_ENV)
    ) {
      console.warn(`變數 "${variableName}" 不存在`);
    }

    return value;
  };
}

function handleMemberExpression(node, context) {
  const objectFn = createFunction(node.object, context);
  return () => {
    const obj = objectFn();
    return obj == null ? undefined : getProperty(obj, node.property, context);
  };
}

function handleOptionalMemberExpression(node, context) {
  const objectFn = createFunction(node.object, context);
  return () => {
    const obj = objectFn();
    return obj == null ? undefined : getProperty(obj, node.property, context);
  };
}

function handleOptionalCallExpression(node, context) {
  const calleeFn = createFunction(node.callee, context);
  const argFunctions = createArgFunctions(node.arguments, context);

  return () => {
    const fn = calleeFn();
    if (fn == null) return undefined;

    const args = executeArgFunctions(argFunctions);

    if (typeof fn === "function") {
      try {
        return fn(...args);
      } catch (error) {
        console.warn("可選調用失敗:", error);
      }
    }
    return undefined;
  };
}

function handleConditionalExpression(node, context) {
  const testFn = createFunction(node.test, context);
  const consequentFn = createFunction(node.consequent, context);
  const alternateFn = createFunction(node.alternate, context);

  return () => (testFn() ? consequentFn() : alternateFn());
}

const createLiteralHandler = (value) => () => value;

function handleRegExpLiteral(node) {
  const pattern = node.pattern;
  const flags = node.flags || "";

  return () => {
    try {
      return new RegExp(pattern, flags);
    } catch (error) {
      console.warn("正則表達式建立失敗:", error);
      return null;
    }
  };
}

const ATTR_PATTERN = /\s+([a-zA-Z][a-zA-Z0-9-]*)\s*=\s*$/;
const ATTR_REMOVE_PATTERN = /\s+[a-zA-Z][a-zA-Z0-9-]*\s*=\s*$/;

function handleJSXElement(node, context) {
  return () => {
    const sequence = convertJSXToTemplateParts(node);
    let html = "";

    for (const item of sequence) {
      if (item.type === "static") {
        html += item.content;
        continue;
      }

      const value = createFunction(item.expression, context)();
      const attrMatch = html.match(ATTR_PATTERN);

      if (attrMatch) {
        const attrName = attrMatch[1];

        const isEventAttr =
          attrName.startsWith("on") && typeof value === "function";
        const isFalsyAttr = value == null || value === "" || value === false;

        if (isEventAttr) {
          html = html.replace(ATTR_REMOVE_PATTERN, "");
          const eventType = attrName.slice(2).toLowerCase();

          const uniqueId =
            Date.now().toString(36) + Math.random().toString(36).substr(2);
          const functionName = `__jsx_${eventType}_${uniqueId}`;

          if (typeof window !== "undefined") {
            if (!window.__jsxEventHandlers) {
              window.__jsxEventHandlers = {};
            }
            window.__jsxEventHandlers[functionName] = value;
          }

          html += ` data-jsx-event="${eventType}:${functionName}"`;
        } else if (isFalsyAttr) {
          html = html.replace(ATTR_REMOVE_PATTERN, "");
        } else {
          html += `"${escapeHtml(value)}"`;
        }
      } else if (value != null && typeof value !== "function") {
        html += escapeHtml(value);
      }
    }

    return html;
  };
}

function handleUnaryExpression(node, context) {
  const argumentFn = createFunction(node.argument, context);
  const { operator } = node;

  const operators = {
    "!": (v) => !v,
    "-": (v) => -v,
    "+": (v) => +v,
    "~": (v) => ~v,
    typeof: (v) => typeof v,
    void: () => undefined,
    delete: () => true,
  };

  return () => {
    const value = argumentFn();
    const operation = operators[operator];

    if (operation) {
      return operation(value);
    }

    console.warn(`不支援的一元運算符: ${operator}`);
    return value;
  };
}

function handleUpdateExpression(node, context) {
  const argumentFn = createFunction(node.argument, context);
  const { operator, prefix } = node;

  return () => {
    const value = Number(argumentFn());

    if (operator === "++") {
      return prefix ? value + 1 : value;
    }
    if (operator === "--") {
      return prefix ? value - 1 : value;
    }

    console.warn(`不支援的更新運算符: ${operator}`);
    return value;
  };
}

function handleObjectExpression(node, context) {
  const propertyFunctions = node.properties
    .filter((prop) => prop.type === "ObjectProperty")
    .map((prop) => ({
      keyFn:
        prop.key.type === "Identifier"
          ? () => prop.key.value
          : createFunction(prop.key, context),
      valueFn: createFunction(prop.value, context),
    }));

  return () => {
    const obj = {};
    propertyFunctions.forEach(({ keyFn, valueFn }) => {
      obj[keyFn()] = valueFn();
    });
    return obj;
  };
}

function handleArrayExpression(node, context) {
  const elementFunctions = node.elements.map((element) => {
    if (!element) return () => undefined;

    if (element.spread !== undefined && element.expression) {
      return createFunction(element.expression, context);
    }

    return element.type ? createFunction(element, context) : () => undefined;
  });

  return () => elementFunctions.map((fn) => fn());
}

function handleArrowFunctionExpression(node, context) {
  const paramNames = node.params
    .map((param) => {
      if (param.type === "Identifier") return param.value;
      if (
        param.type === "RestElement" &&
        param.argument.type === "Identifier"
      ) {
        return param.argument.value;
      }
      return null;
    })
    .filter(Boolean);

  return () =>
    function (...args) {
      const newContext = { ...context };
      paramNames.forEach((paramName, index) => {
        newContext[paramName] = args[index];
      });

      try {
        return createFunction(node.body, newContext)();
      } catch (error) {
        console.warn("執行箭頭函數時出錯:", error);
        return "";
      }
    };
}

function handleLogicalExpression(node, context) {
  const leftFn = createFunction(node.left, context);
  const rightFn = createFunction(node.right, context);
  const { operator } = node;

  return () => {
    const left = leftFn();

    switch (operator) {
      case "&&":
        return !left && FALSY_VALUES_FOR_JSX.has(left)
          ? ""
          : left
          ? rightFn()
          : left;
      case "||":
        return left || rightFn();
      case "??":
        return left != null ? left : rightFn();
      default:
        console.warn(`不支援的邏輯運算符: ${operator}`);
        return undefined;
    }
  };
}

function handleTemplateLiteral(node, context) {
  const quasisFunctions = node.quasis.map((quasi) => {
    const value =
      quasi.value?.raw || quasi.value?.cooked || quasi.raw || quasi.value || "";
    return () => value;
  });
  const expressionFunctions = node.expressions.map((expr) =>
    createFunction(expr, context)
  );

  return () => {
    let result = "";
    for (let i = 0; i < quasisFunctions.length; i++) {
      result += quasisFunctions[i]();
      if (i < expressionFunctions.length) {
        const value = expressionFunctions[i]();
        result += value != null ? String(value) : "";
      }
    }
    return result;
  };
}

function handleBinaryExpression(node, context) {
  const leftFn = createFunction(node.left, context);
  const rightFn = createFunction(node.right, context);
  const { operator } = node;

  const operators = {
    "+": (l, r) => l + r,
    "-": (l, r) => l - r,
    "*": (l, r) => l * r,
    "/": (l, r) => l / r,
    "%": (l, r) => l % r,
    "**": (l, r) => l ** r,
    "===": (l, r) => l === r,
    "!==": (l, r) => l !== r,
    "==": (l, r) => l == r,
    "!=": (l, r) => l != r,
    ">": (l, r) => l > r,
    "<": (l, r) => l < r,
    ">=": (l, r) => l >= r,
    "<=": (l, r) => l <= r,
    "&&": (l, r) => l && r,
    "||": (l, r) => l || r,
    "&": (l, r) => l & r,
    "|": (l, r) => l | r,
    "^": (l, r) => l ^ r,
    "<<": (l, r) => l << r,
    ">>": (l, r) => l >> r,
    ">>>": (l, r) => l >>> r,
    in: (l, r) => l in r,
    instanceof: (l, r) => l instanceof r,
  };

  return () => {
    const left = leftFn();
    const right = rightFn();
    const operation = operators[operator];

    if (operation) {
      return operation(left, right);
    }

    console.warn(`不支援的二元運算符: ${operator}`);
    return undefined;
  };
}

function handleAssignmentExpression(node, context) {
  const leftFn = createFunction(node.left, context);
  const rightFn = createFunction(node.right, context);
  const { operator } = node;

  return () => {
    const rightValue = rightFn();

    if (operator === "=") return rightValue;

    const leftValue = leftFn();
    const operations = {
      "+=": () => leftValue + rightValue,
      "-=": () => leftValue - rightValue,
      "*=": () => leftValue * rightValue,
      "/=": () => leftValue / rightValue,
      "%=": () => leftValue % rightValue,
    };

    return operations[operator] ? operations[operator]() : rightValue;
  };
}

function handleSequenceExpression(node, context) {
  const expressionFunctions = node.expressions.map((expr) =>
    createFunction(expr, context)
  );
  return () => {
    let result;
    expressionFunctions.forEach((fn) => {
      result = fn();
    });
    return result;
  };
}

function handleNewExpression(node, context) {
  const calleeFn = createFunction(node.callee, context);
  const argFunctions = createArgFunctions(node.arguments, context);

  return () => {
    const Constructor = calleeFn();
    const args = executeArgFunctions(argFunctions);

    if (typeof Constructor === "function") {
      try {
        return new Constructor(...args);
      } catch (error) {
        console.warn("建構函數調用失敗:", error);
        return undefined;
      }
    }

    console.warn("試圖使用 new 操作符調用非函數:", Constructor);
    return undefined;
  };
}

const expressionHandlers = {
  CallExpression: handleCallExpression,
  OptionalCallExpression: handleOptionalCallExpression,
  Identifier: handleIdentifier,
  MemberExpression: handleMemberExpression,
  OptionalMemberExpression: handleOptionalMemberExpression,

  ConditionalExpression: handleConditionalExpression,
  LogicalExpression: handleLogicalExpression,

  StringLiteral: (node) => createLiteralHandler(node.value),
  NumericLiteral: (node) => createLiteralHandler(node.value),
  BooleanLiteral: (node) => createLiteralHandler(node.value),
  NullLiteral: () => createLiteralHandler(null),
  UndefinedLiteral: () => createLiteralHandler(undefined),
  RegExpLiteral: handleRegExpLiteral,

  JSXEmptyExpression: () => createLiteralHandler(""),
  JSXElement: handleJSXElement,

  UnaryExpression: handleUnaryExpression,
  UpdateExpression: handleUpdateExpression,
  BinaryExpression: handleBinaryExpression,
  AssignmentExpression: handleAssignmentExpression,

  ParenthesisExpression: (node, context) =>
    createFunction(node.expression, context),
  SequenceExpression: handleSequenceExpression,

  ObjectExpression: handleObjectExpression,
  ArrayExpression: handleArrayExpression,
  SpreadElement: (node, context) => {
    const argumentFn = createFunction(node.argument, context);
    return () => {
      const value = argumentFn();
      return Array.isArray(value) ? value : [value];
    };
  },
  RestElement: (node, context) => {
    const argumentFn = createFunction(node.argument, context);
    return () => {
      const value = argumentFn();
      return Array.isArray(value) ? value : [value];
    };
  },

  ArrowFunctionExpression: handleArrowFunctionExpression,
  NewExpression: handleNewExpression,

  TemplateLiteral: handleTemplateLiteral,

  BlockStatement: (node, context) => {
    const statementFunctions = node.body.map((stmt) =>
      createFunction(stmt, context)
    );
    return () => {
      let result;
      statementFunctions.forEach((fn) => {
        result = fn();
      });
      return result;
    };
  },
  ReturnStatement: (node, context) => {
    return node.argument
      ? createFunction(node.argument, context)
      : () => undefined;
  },
  ExpressionStatement: (node, context) =>
    createFunction(node.expression, context),

  ThisExpression: (node, context) => () =>
    context?.this || context || globalThis,
};

export default function createFunction(expressionNode, context) {
  if (!expressionNode.type && expressionNode.expression) {
    return createFunction(expressionNode.expression, context);
  }

  const handler = expressionHandlers[expressionNode.type];

  if (!handler) {
    console.error("不支援的表達式:", expressionNode);
    throw new Error(`不支援的表達式類型：${expressionNode.type}`);
  }

  return handler(expressionNode, context);
}
