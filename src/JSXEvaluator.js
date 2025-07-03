const GLOBAL_ENV = typeof window === "undefined" ? globalThis : window;

export default class JSXEvaluator {
  constructor(context = {}) {
    this.context = context;
    this.expressionCache = new WeakMap();
  }

  evaluate(node) {
    if (!node || !node.type) {
      return {
        binding: () => undefined,
        isReactive: false,
        type: "static",
      };
    }

    if (this.isJSXNode(node)) {
      return {
        binding: () => node,
        isReactive: false,
        type: "static",
      };
    }

    if (this.expressionCache.has(node)) {
      return this.expressionCache.get(node);
    }

    const isReactive = this.containsSignal(node);

    const binding = this.createBinding(node);

    const result = {
      binding,
      isReactive,
      type: isReactive ? "reactive" : "static",
    };

    this.expressionCache.set(node, result);
    return result;
  }

  createBinding(node) {
    switch (node.type) {
      case "StringLiteral":
        return () => node.value;
      case "NumericLiteral":
        return () => node.value;
      case "BooleanLiteral":
        return () => node.value;
      case "NullLiteral":
        return () => null;
      case "UndefinedLiteral":
        return () => undefined;

      case "Identifier":
        return this.handleIdentifier(node);

      case "MemberExpression":
      case "OptionalMemberExpression":
        return this.handleMemberExpression(node);

      case "CallExpression":
        return this.handleCallExpression(node);
      case "OptionalCallExpression":
        return this.handleOptionalCallExpression(node);

      case "ConditionalExpression":
        return this.handleConditionalExpression(node);
      case "LogicalExpression":
        return this.handleLogicalExpression(node);

      case "UnaryExpression":
        return this.handleUnaryExpression(node);
      case "BinaryExpression":
        return this.handleBinaryExpression(node);
      case "AssignmentExpression":
        return this.handleAssignmentExpression(node);
      case "UpdateExpression":
        return this.handleUpdateExpression(node);

      case "ObjectExpression":
        return this.handleObjectExpression(node);
      case "ArrayExpression":
        return this.handleArrayExpression(node);
      case "SpreadElement":
        return this.handleSpreadElement(node);

      case "ArrowFunctionExpression":
      case "FunctionExpression":
      case "ArrowFunction":
        return this.handleArrowFunctionExpression(node);
      case "FunctionDeclaration":
        return this.handleFunctionDeclaration(node);

      case "TemplateLiteral":
        return this.handleTemplateLiteral(node);
      case "TaggedTemplateExpression":
        return this.handleTaggedTemplateExpression(node);

      case "ParenthesisExpression":
      case "ParenthesizedExpression":
        return this.evaluate(node.expression).binding;
      case "SequenceExpression":
        return this.handleSequenceExpression(node);
      case "ThisExpression":
        return () => this.context.this || this;
      case "NewExpression":
        return this.handleNewExpression(node);

      case "BlockStatement":
        return this.handleBlockStatement(node);
      case "ExpressionStatement":
        return () => this.evaluate(node.expression).binding();
      case "ReturnStatement":
        return node.argument
          ? this.evaluate(node.argument).binding
          : () => undefined;

      case "JSXExpressionContainer":
        return this.evaluate(node.expression).binding;

      case "JSXEmptyExpression":
        return () => "";

      case "JSXText":
        return () => node.value;

      default:
        if (
          node.type &&
          (node.type.toLowerCase().includes("function") ||
            node.type.toLowerCase().includes("arrow") ||
            (node.params && node.body))
        ) {
          return this.handleArrowFunctionExpression(node);
        } else {
          return () => undefined;
        }
    }
  }

  containsSignal(node) {
    if (!node || !node.type) return false;

    switch (node.type) {
      case "StringLiteral":
      case "NumericLiteral":
      case "BooleanLiteral":
      case "NullLiteral":
      case "UndefinedLiteral":
      case "JSXEmptyExpression":
      case "JSXText":
        return false;

      case "Identifier":
        const value = this.context[node.value];
        const result = this.isSignalValue(value);

        return result;

      case "MemberExpression":
      case "OptionalMemberExpression":
        const objectHasSignal = this.containsSignal(node.object);

        if (objectHasSignal) {
          return true;
        }

        if (node.computed) {
          const propertyHasSignal = this.containsSignal(node.property);

          if (propertyHasSignal) {
            return true;
          }
        }

        try {
          const objectBinding = this.createBinding(node.object);
          const obj = objectBinding();

          if (obj != null) {
            const key = node.computed
              ? this.createBinding(node.property)()
              : node.property.value;
            const prop = obj[key];

            if (this.isSignalValue(prop)) {
              return true;
            }
          }

          return false;
        } catch (error) {}

      case "CallExpression":
      case "OptionalCallExpression":
        const calleeContainsSignal = this.containsSignal(node.callee);

        const argsContainSignal =
          node.arguments &&
          node.arguments.some((arg) => this.containsSignal(arg));

        if (node.callee.type === "Identifier" && !calleeContainsSignal) {
          return argsContainSignal;
        }

        const callResult = calleeContainsSignal || argsContainSignal;
        return callResult;

      case "ConditionalExpression":
        return (
          this.containsSignal(node.test) ||
          this.containsSignal(node.consequent) ||
          this.containsSignal(node.alternate)
        );

      case "LogicalExpression":
      case "BinaryExpression":
        return (
          this.containsSignal(node.left) || this.containsSignal(node.right)
        );

      case "UnaryExpression":
        return this.containsSignal(node.argument);

      case "AssignmentExpression":
        return this.containsSignal(node.right);

      case "UpdateExpression":
        return this.containsSignal(node.argument);

      case "ObjectExpression":
        return (
          node.properties &&
          node.properties.some(
            (prop) =>
              prop.type === "ObjectProperty" &&
              (this.containsSignal(prop.key) || this.containsSignal(prop.value))
          )
        );

      case "ArrayExpression":
        return (
          node.elements &&
          node.elements.some(
            (element) => element && this.containsSignal(element)
          )
        );

      case "SpreadElement":
        return this.containsSignal(node.argument);

      case "TemplateLiteral":
        return (
          node.expressions &&
          node.expressions.some((expr) => this.containsSignal(expr))
        );

      case "TaggedTemplateExpression":
        return this.containsSignal(node.tag) || this.containsSignal(node.quasi);

      case "SequenceExpression":
        return (
          node.expressions &&
          node.expressions.some((expr) => this.containsSignal(expr))
        );

      case "NewExpression":
        return (
          this.containsSignal(node.callee) ||
          (node.arguments &&
            node.arguments.some((arg) => this.containsSignal(arg)))
        );

      case "ParenthesisExpression":
      case "ParenthesizedExpression":
        return this.containsSignal(node.expression);

      case "JSXExpressionContainer":
        return this.containsSignal(node.expression);

      default:
        return false;
    }
  }

  isJSXNode(node) {
    return node.type === "JSXElement" || node.type === "JSXFragment";
  }

  isSignalValue(value) {
    return value && typeof value === "function" && value.isSignal === true;
  }

  handleIdentifier(node) {
    const variableName = node.value;
    return () => {
      try {
        let value;

        if (this.context.hasOwnProperty(variableName)) {
          value = this.context[variableName];
        } else if (GLOBAL_ENV.hasOwnProperty(variableName)) {
          value = GLOBAL_ENV[variableName];
        } else {
          return undefined;
        }

        if (this.isSignalValue(value)) {
          return value();
        }

        return value;
      } catch (error) {
        return undefined;
      }
    };
  }

  handleMemberExpression(node) {
    const objectResult = this.evaluate(node.object);
    const propertyKey = node.computed
      ? this.evaluate(node.property)
      : { binding: () => node.property.value };

    return () => {
      try {
        const obj = objectResult.binding();

        if (obj == null) return;

        const key = propertyKey.binding();
        const prop = obj[key];

        if (this.isSignalValue(prop)) {
          return prop();
        }

        if (typeof prop === "function") {
          return prop.bind(obj);
        }

        return prop;
      } catch (error) {
        return;
      }
    };
  }

  handleCallExpression(node) {
    const calleeResult = this.evaluate(node.callee);

    const argResults = node.arguments
      ? node.arguments.map((arg) => {
          if (arg.type === "SpreadElement") {
            return {
              isSpread: true,
              result: this.evaluate(arg.argument),
            };
          }
          if (arg.spread !== undefined) {
            const actualArg = arg.expression || arg;
            return {
              isSpread: arg.spread,
              result: this.evaluate(actualArg),
            };
          }

          return {
            isSpread: false,
            result: this.evaluate(arg),
          };
        })
      : [];

    return () => {
      try {
        const callee = calleeResult.binding();

        if (typeof callee !== "function") return;

        const args = [];
        for (let i = 0; i < argResults.length; i++) {
          const { isSpread, result } = argResults[i];

          try {
            const argValue = result.binding();

            if (isSpread && Array.isArray(argValue)) {
              args.push(...argValue);
            } else {
              args.push(argValue);
            }
          } catch (error) {}
        }

        const result = callee(...args);

        if (this.isSignalValue(result)) {
          return result();
        }

        return result;
      } catch (error) {
        return;
      }
    };
  }

  handleOptionalCallExpression(node) {
    const calleeResult = this.evaluate(node.callee);
    const argResults = node.arguments
      ? node.arguments.map((arg) => this.evaluate(arg))
      : [];

    return () => {
      try {
        const callee = calleeResult.binding();
        if (typeof callee !== "function") return;

        const args = argResults.map((result) => {
          try {
            return result.binding();
          } catch (error) {
            return;
          }
        });

        const result = callee(...args);

        if (this.isSignalValue(result)) {
          return result();
        }

        return result;
      } catch (error) {
        return;
      }
    };
  }

  handleConditionalExpression(node) {
    const testResult = this.evaluate(node.test);
    const consequentResult = this.evaluate(node.consequent);
    const alternateResult = this.evaluate(node.alternate);

    return () => {
      try {
        const testValue = testResult.binding();
        const result = testValue
          ? consequentResult.binding()
          : alternateResult.binding();
        return result;
      } catch {
        return;
      }
    };
  }

  handleLogicalExpression(node) {
    const leftResult = this.evaluate(node.left);
    const rightResult = this.evaluate(node.right);

    return () => {
      try {
        const leftValue = leftResult.binding();
        switch (node.operator) {
          case "&&":
            return leftValue && rightResult.binding();
          case "||":
            return leftValue || rightResult.binding();
          case "??":
            return leftValue ?? rightResult.binding();
          default:
            return false;
        }
      } catch (error) {
        return false;
      }
    };
  }

  handleUnaryExpression(node) {
    const argumentResult = this.evaluate(node.argument);
    const operators = {
      "!": (v) => !v,
      "-": (v) => -v,
      "+": (v) => +v,
      "~": (v) => ~v,
      typeof: (v) => typeof v,
      void: () => undefined,
    };

    return () => {
      try {
        const value = argumentResult.binding();
        const operation = operators[node.operator];
        return operation ? operation(value) : value;
      } catch (error) {
        return;
      }
    };
  }

  handleBinaryExpression(node) {
    const leftResult = this.evaluate(node.left);
    const rightResult = this.evaluate(node.right);

    if (node.operator === "&&") {
      return () => {
        try {
          const leftValue = leftResult.binding();
          return leftValue && rightResult.binding();
        } catch (error) {
          return false;
        }
      };
    }

    if (node.operator === "||") {
      return () => {
        try {
          const leftValue = leftResult.binding();
          return leftValue || rightResult.binding();
        } catch (error) {
          return false;
        }
      };
    }

    const operators = {
      "+": (l, r) => l + r,
      "-": (l, r) => l - r,
      "*": (l, r) => l * r,
      "/": (l, r) => l / r,
      "%": (l, r) => l % r,
      "===": (l, r) => l === r,
      "!==": (l, r) => l !== r,
      "==": (l, r) => l == r,
      "!=": (l, r) => l != r,
      ">": (l, r) => l > r,
      "<": (l, r) => l < r,
      ">=": (l, r) => l >= r,
      "<=": (l, r) => l <= r,
      "|": (l, r) => l | r,
      "&": (l, r) => l & r,
      "^": (l, r) => l ^ r,
      "<<": (l, r) => l << r,
      ">>": (l, r) => l >> r,
      ">>>": (l, r) => l >>> r,
    };

    return () => {
      try {
        const left = leftResult.binding();
        const right = rightResult.binding();
        const operation = operators[node.operator];
        return operation ? operation(left, right) : undefined;
      } catch (error) {
        return;
      }
    };
  }

  handleAssignmentExpression(node) {
    const rightResult = this.evaluate(node.right);
    return () => {
      try {
        return rightResult.binding();
      } catch (error) {
        return;
      }
    };
  }

  handleUpdateExpression(node) {
    const argumentResult = this.evaluate(node.argument);

    return () => {
      try {
        const current = argumentResult.binding();
        switch (node.operator) {
          case "++":
            return node.prefix ? current + 1 : current;
          case "--":
            return node.prefix ? current - 1 : current;
          default:
            return current;
        }
      } catch (error) {
        return;
      }
    };
  }

  handleObjectExpression(node) {
    const propertyResults = node.properties
      .filter((prop) => prop.type === "ObjectProperty")
      .map((prop) => ({
        keyResult:
          prop.key.type === "Identifier" && !prop.computed
            ? { binding: () => prop.key.value }
            : this.evaluate(prop.key),
        valueResult: this.evaluate(prop.value),
      }));

    return () => {
      try {
        const obj = {};
        propertyResults.forEach(({ keyResult, valueResult }) => {
          try {
            const key = keyResult.binding();
            const value = valueResult.binding();
            obj[key] = value;
          } catch (error) {}
        });
        return obj;
      } catch (error) {
        return {};
      }
    };
  }

  handleArrayExpression(node) {
    const elementResults = node.elements.map((element) => {
      if (!element || !element.type) {
        return { binding: () => undefined };
      }
      return this.evaluate(element);
    });

    return () => {
      try {
        return elementResults.map((result) => {
          try {
            return result.binding();
          } catch (error) {
            return;
          }
        });
      } catch (error) {
        return [];
      }
    };
  }

  handleSpreadElement(node) {
    const argumentResult = this.evaluate(node.argument);

    return () => {
      try {
        const value = argumentResult.binding();

        if (Array.isArray(value)) {
          return value;
        }

        if (typeof value === "function") {
          return value;
        }

        return [value];
      } catch (error) {
        return [];
      }
    };
  }

  handleArrowFunctionExpression(node) {
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

    return () => {
      const arrowFn = (...args) => {
        try {
          const newContext = { ...this.context };
          paramNames.forEach((paramName, index) => {
            newContext[paramName] = args[index];
          });

          const evaluator = new JSXEvaluator(newContext);
          let result;

          if (this.isJSXNode(node.body)) {
            return { ...node.body, _boundContext: newContext };
          } else if (node.body.type === "ParenthesisExpression") {
            const innerExpression = node.body.expression;
            if (this.isJSXNode(innerExpression)) {
              return { ...innerExpression, _boundContext: newContext };
            } else {
              const exprResult = evaluator.evaluate(innerExpression);
              result = exprResult.binding();
            }
          } else if (node.body.type === "BlockStatement") {
            const bodyResult = evaluator.evaluate(node.body);
            result = bodyResult.binding();
          } else {
            const bodyResult = evaluator.evaluate(node.body);
            result = bodyResult.binding();
          }

          if (result && typeof result === "object" && this.isJSXNode(result)) {
            return { ...result, _boundContext: newContext };
          }

          if (this.isSignalValue(result)) {
            return result();
          }

          return result;
        } catch (error) {
          console.error("ArrowFunction execution error:", error);
          return;
        }
      };

      return arrowFn;
    };
  }

  handleFunctionDeclaration(node) {
    const paramNames = node.params
      .map((param) => {
        if (param.type === "Identifier") return param.value;
        return null;
      })
      .filter(Boolean);

    return () => {
      const fn = (...args) => {
        try {
          const newContext = { ...this.context };
          paramNames.forEach((paramName, index) => {
            newContext[paramName] = args[index];
          });

          const evaluator = new JSXEvaluator(newContext);
          const bodyResult = evaluator.evaluate(node.body);
          const result = bodyResult.binding();

          if (this.isSignalValue(result)) {
            return result();
          }

          return result;
        } catch (error) {
          return undefined;
        }
      };

      if (node.id && node.id.value) {
        this.context[node.id.value] = fn;
      }

      return fn;
    };
  }

  handleTemplateLiteral(node) {
    const quasisFunctions = node.quasis.map((quasi) => {
      const value =
        quasi.cooked || quasi.value?.cooked || quasi.value?.raw || "";
      return () => value;
    });
    const expressionResults = node.expressions.map((expr) =>
      this.evaluate(expr)
    );

    return () => {
      try {
        let result = "";
        for (let i = 0; i < quasisFunctions.length; i++) {
          result += quasisFunctions[i]();
          if (i < expressionResults.length) {
            const exprValue = expressionResults[i].binding();
            result += exprValue != null ? String(exprValue) : "";
          }
        }
        return result;
      } catch (error) {
        return "";
      }
    };
  }

  handleTaggedTemplateExpression(node) {
    const tagResult = this.evaluate(node.tag);
    const templateResult = this.evaluate(node.quasi);

    return () => {
      try {
        const tag = tagResult.binding();
        const template = templateResult.binding();

        if (typeof tag === "function") {
          const result = tag(template);

          if (this.isSignalValue(result)) {
            return result();
          }

          return result;
        }
        return template;
      } catch (error) {
        return "";
      }
    };
  }

  handleSequenceExpression(node) {
    const expressionResults = node.expressions.map((expr) =>
      this.evaluate(expr)
    );

    return () => {
      try {
        let result;
        expressionResults.forEach((evalResult) => {
          result = evalResult.binding();
        });

        if (this.isSignalValue(result)) {
          return result();
        }

        return result;
      } catch (error) {
        return;
      }
    };
  }

  handleNewExpression(node) {
    const calleeResult = this.evaluate(node.callee);
    const argResults = node.arguments
      ? node.arguments.map((arg) => this.evaluate(arg))
      : [];

    return () => {
      try {
        const Constructor = calleeResult.binding();
        const args = argResults.map((result) => {
          try {
            return result.binding();
          } catch (error) {
            return;
          }
        });

        if (typeof Constructor === "function") {
          const result = new Constructor(...args);

          if (this.isSignalValue(result)) {
            return result();
          }

          return result;
        }
        throw new Error("Constructor is not a function");
      } catch (error) {
        return;
      }
    };
  }

  handleBlockStatement(node) {
    const statementResults = node.body.map((stmt) => this.evaluate(stmt));

    return () => {
      try {
        let result;
        statementResults.forEach((evalResult) => {
          result = evalResult.binding();
        });

        if (this.isSignalValue(result)) {
          return result();
        }

        return result;
      } catch (error) {
        return;
      }
    };
  }
}
