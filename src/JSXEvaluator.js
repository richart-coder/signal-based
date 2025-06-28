const GLOBAL_ENV = typeof window === "undefined" ? globalThis : window;

export default class JSXEvaluator {
  constructor(context = {}) {
    this.context = context;
    this.compiledElements = new WeakMap();
    this.expressionCache = new WeakMap();
  }

  evaluate(node) {
    if (!node || !node.type) {
      return () => undefined;
    }

    if (this.expressionCache.has(node)) {
      return this.expressionCache.get(node);
    }

    let result;

    switch (node.type) {
      case "StringLiteral":
        result = () => node.value;
        break;
      case "NumericLiteral":
        result = () => node.value;
        break;
      case "BooleanLiteral":
        result = () => node.value;
        break;
      case "NullLiteral":
        result = () => null;
        break;
      case "UndefinedLiteral":
        result = () => undefined;
        break;

      case "Identifier":
        result = this.handleIdentifier(node);
        break;

      case "MemberExpression":
      case "OptionalMemberExpression":
        result = this.handleMemberExpression(node);
        break;

      case "CallExpression":
        result = this.handleCallExpression(node);
        break;
      case "OptionalCallExpression":
        result = this.handleOptionalCallExpression(node);
        break;

      case "ConditionalExpression":
        result = this.handleConditionalExpression(node);
        break;
      case "LogicalExpression":
        result = this.handleLogicalExpression(node);
        break;

      case "JSXElement":
        result = this.handleJSXElement(node);
        break;
      case "JSXEmptyExpression":
        result = () => "";
        break;
      case "JSXFragment":
        result = this.handleJSXFragment(node);
        break;
      case "JSXText":
        result = () => node.value;
        break;
      case "JSXExpressionContainer":
        result = this.evaluate(node.expression);
        break;

      case "UnaryExpression":
        result = this.handleUnaryExpression(node);
        break;
      case "BinaryExpression":
        result = this.handleBinaryExpression(node);
        break;
      case "AssignmentExpression":
        result = this.handleAssignmentExpression(node);
        break;
      case "UpdateExpression":
        result = this.handleUpdateExpression(node);
        break;

      case "ObjectExpression":
        result = this.handleObjectExpression(node);
        break;
      case "ArrayExpression":
        result = this.handleArrayExpression(node);
        break;
      case "SpreadElement":
        result = this.handleSpreadElement(node);
        break;

      case "ArrowFunctionExpression":
      case "FunctionExpression":
      case "ArrowFunction":
        result = this.handleArrowFunctionExpression(node);
        break;
      case "FunctionDeclaration":
        result = this.handleFunctionDeclaration(node);
        break;

      case "TemplateLiteral":
        result = this.handleTemplateLiteral(node);
        break;
      case "TaggedTemplateExpression":
        result = this.handleTaggedTemplateExpression(node);
        break;

      case "ParenthesisExpression":
      case "ParenthesizedExpression":
        result = this.evaluate(node.expression);
        break;
      case "SequenceExpression":
        result = this.handleSequenceExpression(node);
        break;
      case "ThisExpression":
        result = () => this.context.this || this;
        break;
      case "NewExpression":
        result = this.handleNewExpression(node);
        break;

      case "BlockStatement":
        result = this.handleBlockStatement(node);
        break;
      case "ExpressionStatement":
        result = () => this.evaluate(node.expression)();
        break;
      case "ReturnStatement":
        result = node.argument ? this.evaluate(node.argument) : () => undefined;
        break;

      default:
        if (
          node.type &&
          (node.type.toLowerCase().includes("function") ||
            node.type.toLowerCase().includes("arrow") ||
            (node.params && node.body))
        ) {
          result = this.handleArrowFunctionExpression(node);
        } else {
          result = () => undefined;
        }
    }

    this.expressionCache.set(node, result);
    return result;
  }

  handleIdentifier(node) {
    const variableName = node.value;
    return () => {
      try {
        if (this.context.hasOwnProperty(variableName)) {
          return this.context[variableName];
        }

        if (GLOBAL_ENV.hasOwnProperty(variableName)) {
          return GLOBAL_ENV[variableName];
        }

        return undefined;
      } catch (error) {
        return undefined;
      }
    };
  }

  handleMemberExpression(node) {
    const objectFn = this.evaluate(node.object);
    const propertyKey = node.computed
      ? this.evaluate(node.property)
      : () => node.property.value;

    return () => {
      try {
        const obj = objectFn();

        if (obj == null) return;

        const key =
          typeof propertyKey === "function" ? propertyKey() : propertyKey;
        const prop = obj[key];

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
    const calleeFn = this.evaluate(node.callee);

    const argFunctions = node.arguments
      ? node.arguments.map((arg) => {
          if (arg.type === "SpreadElement") {
            return {
              isSpread: true,
              fn: this.evaluate(arg.argument),
            };
          }
          if (arg.spread !== undefined) {
            const actualArg = arg.expression || arg;
            return {
              isSpread: arg.spread,
              fn: this.evaluate(actualArg),
            };
          }

          return {
            isSpread: false,
            fn: this.evaluate(arg),
          };
        })
      : [];

    return () => {
      try {
        const callee = calleeFn();

        if (typeof callee !== "function") return;

        const args = [];
        for (let i = 0; i < argFunctions.length; i++) {
          const { isSpread, fn } = argFunctions[i];

          try {
            const argValue = fn();

            if (isSpread && Array.isArray(argValue)) {
              args.push(...argValue);
            } else {
              args.push(argValue);
            }
          } catch (error) {}
        }

        const result = callee(...args);
        return result;
      } catch (error) {
        return;
      }
    };
  }

  handleOptionalCallExpression(node) {
    const calleeFn = this.evaluate(node.callee);
    const argFunctions = node.arguments
      ? node.arguments.map((arg) => this.evaluate(arg))
      : [];

    return () => {
      try {
        const callee = calleeFn();
        if (typeof callee !== "function") return;

        const args = argFunctions.map((fn) => {
          try {
            return fn();
          } catch (error) {
            return;
          }
        });

        return callee(...args);
      } catch (error) {
        return;
      }
    };
  }

  handleConditionalExpression(node) {
    const testFn = this.evaluate(node.test);
    const consequentFn = this.evaluate(node.consequent);
    const alternateFn = this.evaluate(node.alternate);

    return () => {
      try {
        return testFn() ? consequentFn() : alternateFn();
      } catch (error) {
        return;
      }
    };
  }

  handleLogicalExpression(node) {
    const leftFn = this.evaluate(node.left);
    const rightFn = this.evaluate(node.right);

    return () => {
      try {
        const leftValue = leftFn();
        switch (node.operator) {
          case "&&":
            return leftValue && rightFn();
          case "||":
            return leftValue || rightFn();
          case "??":
            return leftValue ?? rightFn();
          default:
            return false;
        }
      } catch (error) {
        return false;
      }
    };
  }

  handleJSXElement(node) {
    if (this.compiledElements.has(node)) {
      return this.compiledElements.get(node);
    }

    const template = this.compileJSXTemplate(node);

    const elementFactory = () => {
      const result = this.createElementFromTemplate(template);

      const jsxObject = {
        ...node,
        _boundContext: this.context,
        _compiled: result,
      };

      return jsxObject;
    };

    this.compiledElements.set(node, elementFactory);
    return elementFactory;
  }

  handleJSXFragment(node) {
    return () => {
      const children = node.children
        .map((child) => {
          try {
            if (child.type === "JSXElement") {
              return this.evaluate(child)();
            } else if (child.type === "JSXExpressionContainer") {
              return this.evaluate(child.expression)();
            } else if (child.type === "JSXText") {
              return child.value.trim();
            }
            return null;
          } catch (error) {
            return null;
          }
        })
        .filter(Boolean);

      return {
        type: "JSXFragment",
        children: children,
      };
    };
  }

  compileJSXTemplate(node) {
    return {
      type: "jsx-template",
      tagName: node.opening.name.value,
      props: this.compileProps(node.opening.attributes),
      children: this.compileChildren(node.children),
      _original: node,
    };
  }

  compileProps(attributes) {
    const props = {
      static: {},
      dynamic: {},
      events: {},
    };

    attributes.forEach((attr) => {
      try {
        const name = attr.name.value;

        if (attr.value?.type === "JSXExpressionContainer") {
          const binding = this.evaluate(attr.value.expression);

          if (name.startsWith("on")) {
            props.events[name.slice(2).toLowerCase()] = binding;
          } else {
            props.dynamic[name] = binding;
          }
        } else if (attr.value?.type === "StringLiteral") {
          props.static[name] = attr.value.value;
        } else if (!attr.value) {
          props.static[name] = "";
        }
      } catch (error) {}
    });

    return props;
  }

  compileChildren(children) {
    return children
      .map((child) => {
        try {
          if (child.type === "JSXText") {
            const value = child.value.trim();
            return value
              ? {
                  type: "text",
                  value: value,
                }
              : null;
          } else if (child.type === "JSXExpressionContainer") {
            return {
              type: "expression",
              binding: this.evaluate(child.expression),
            };
          } else if (child.type === "JSXElement") {
            return this.compileJSXTemplate(child);
          }
          return null;
        } catch (error) {
          return null;
        }
      })
      .filter(Boolean);
  }

  createElementFromTemplate(template) {
    const element = document.createElement(template.tagName);

    Object.entries(template.props.static).forEach(([name, value]) => {
      element.setAttribute(name, value);
    });

    const dynamicBindings = Object.entries(template.props.dynamic).map(
      ([name, binding]) => ({
        type: "attribute",
        element,
        name,
        binding,
      })
    );

    Object.entries(template.props.events).forEach(([event, binding]) => {
      try {
        const handler = binding();
        if (typeof handler === "function") {
          element.addEventListener(event, handler);
        }
      } catch (error) {}
    });

    const childBindings = [];
    template.children.forEach((child, index) => {
      try {
        if (child.type === "text") {
          if (child.value) {
            element.appendChild(document.createTextNode(child.value));
          }
        } else if (child.type === "expression") {
          const anchor = document.createComment(`child-${index}`);
          element.appendChild(anchor);
          childBindings.push({
            type: "content",
            anchor,
            binding: child.binding,
          });
        } else if (child.type === "jsx-template") {
          const childResult = this.createElementFromTemplate(child);
          element.appendChild(childResult.element);
          childBindings.push(...childResult.bindings);
        }
      } catch (error) {}
    });

    return {
      element,
      bindings: [...dynamicBindings, ...childBindings],
    };
  }

  handleUnaryExpression(node) {
    const argumentFn = this.evaluate(node.argument);
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
        const value = argumentFn();
        const operation = operators[node.operator];
        return operation ? operation(value) : value;
      } catch (error) {
        return;
      }
    };
  }

  handleBinaryExpression(node) {
    const leftFn = this.evaluate(node.left);
    const rightFn = this.evaluate(node.right);

    if (node.operator === "&&") {
      return () => {
        try {
          const leftValue = leftFn();
          return leftValue && rightFn();
        } catch (error) {
          return false;
        }
      };
    }

    if (node.operator === "||") {
      return () => {
        try {
          const leftValue = leftFn();
          return leftValue || rightFn();
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
        const left = leftFn();
        const right = rightFn();
        const operation = operators[node.operator];
        return operation ? operation(left, right) : undefined;
      } catch (error) {
        return;
      }
    };
  }

  handleAssignmentExpression(node) {
    const rightFn = this.evaluate(node.right);
    return () => {
      try {
        return rightFn();
      } catch (error) {
        return;
      }
    };
  }

  handleUpdateExpression(node) {
    const argumentFn = this.evaluate(node.argument);

    return () => {
      try {
        const current = argumentFn();
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
    const propertyFunctions = node.properties
      .filter((prop) => prop.type === "ObjectProperty")
      .map((prop) => ({
        keyFn:
          prop.key.type === "Identifier" && !prop.computed
            ? () => prop.key.value
            : this.evaluate(prop.key),
        valueFn: this.evaluate(prop.value),
      }));

    return () => {
      try {
        const obj = {};
        propertyFunctions.forEach(({ keyFn, valueFn }) => {
          try {
            const key = keyFn();
            const value = valueFn();
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
    const elementFunctions = node.elements.map((element) => {
      if (!element || !element.type) {
        return () => undefined;
      }
      return this.evaluate(element);
    });

    return () => {
      try {
        return elementFunctions.map((fn) => {
          try {
            return fn();
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
    const argumentFn = this.evaluate(node.argument);

    return () => {
      try {
        const value = argumentFn();

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

          if (node.body.type === "JSXElement") {
            const jsxFactory = evaluator.evaluate(node.body);
            result = jsxFactory();
          } else if (node.body.type === "ParenthesisExpression") {
            const innerExpression = node.body.expression;
            if (innerExpression.type === "JSXElement") {
              const jsxFactory = evaluator.evaluate(innerExpression);
              result = jsxFactory();
            } else {
              const exprFn = evaluator.evaluate(innerExpression);
              result = typeof exprFn === "function" ? exprFn() : exprFn;
            }
          } else if (node.body.type === "BlockStatement") {
            const bodyFn = evaluator.evaluate(node.body);
            result = bodyFn();
          } else {
            const bodyFn = evaluator.evaluate(node.body);
            if (typeof bodyFn === "function") {
              result = bodyFn();
            } else {
              result = bodyFn;
            }
          }

          return result;
        } catch (error) {
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
          const bodyFn = evaluator.evaluate(node.body);
          return bodyFn();
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
    const expressionFunctions = node.expressions.map((expr) =>
      this.evaluate(expr)
    );

    return () => {
      try {
        let result = "";
        for (let i = 0; i < quasisFunctions.length; i++) {
          result += quasisFunctions[i]();
          if (i < expressionFunctions.length) {
            const exprValue = expressionFunctions[i]();
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
    const tagFn = this.evaluate(node.tag);
    const templateFn = this.evaluate(node.quasi);

    return () => {
      try {
        const tag = tagFn();
        const template = templateFn();

        if (typeof tag === "function") {
          return tag(template);
        }
        return template;
      } catch (error) {
        return "";
      }
    };
  }

  handleSequenceExpression(node) {
    const expressionFunctions = node.expressions.map((expr) =>
      this.evaluate(expr)
    );

    return () => {
      try {
        let result;
        expressionFunctions.forEach((fn) => {
          result = fn();
        });
        return result;
      } catch (error) {
        return;
      }
    };
  }

  handleNewExpression(node) {
    const calleeFn = this.evaluate(node.callee);
    const argFunctions = node.arguments
      ? node.arguments.map((arg) => this.evaluate(arg))
      : [];

    return () => {
      try {
        const Constructor = calleeFn();
        const args = argFunctions.map((fn) => {
          try {
            return fn();
          } catch (error) {
            return;
          }
        });

        if (typeof Constructor === "function") {
          return new Constructor(...args);
        }
        throw new Error("Constructor is not a function");
      } catch (error) {
        return;
      }
    };
  }

  handleBlockStatement(node) {
    const statementFns = node.body.map((stmt) => this.evaluate(stmt));

    return () => {
      try {
        let result;
        statementFns.forEach((fn) => {
          result = fn();
        });
        return result;
      } catch (error) {
        return;
      }
    };
  }
}
