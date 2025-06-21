
export const compiledTemplate = [
  {
    "type": "static",
    "content": "<div className=\"container\"><h1>"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 4927,
        "end": 4934
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 4927,
          "end": 4932
        },
        "ctxt": 1,
        "value": "title",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</h1><div><p>Count:"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 4964,
        "end": 4971
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 4964,
          "end": 4969
        },
        "ctxt": 1,
        "value": "count",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</p><input type=\"text\" onInput="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 5009,
        "end": 5020
      },
      "ctxt": 1,
      "value": "handleInput",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": " placeholder=\"type here...\" value="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 5056,
        "end": 5068
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 5056,
          "end": 5066
        },
        "ctxt": 1,
        "value": "inputValue",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": " disabled="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 5080,
        "end": 5092
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 5080,
          "end": 5090
        },
        "ctxt": 1,
        "value": "isDisabled",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": ">"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 5102,
        "end": 5114
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 5102,
          "end": 5112
        },
        "ctxt": 1,
        "value": "inputValue",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "<br><button onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 5149,
        "end": 5160
      },
      "ctxt": 1,
      "value": "handleClick",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">Toggle Input</button><p>Status:"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 5200,
        "end": 5215
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 5200,
          "end": 5213
        },
        "ctxt": 1,
        "value": "getToggleText",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</p></div></div>"
  }
];
export const lastCompiled = 1750486879067;
