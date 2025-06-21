
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
        "start": 422,
        "end": 429
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 422,
          "end": 427
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
        "start": 459,
        "end": 466
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 459,
          "end": 464
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
        "start": 504,
        "end": 515
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
        "start": 551,
        "end": 563
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 551,
          "end": 561
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
        "start": 575,
        "end": 587
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 575,
          "end": 585
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
        "start": 597,
        "end": 609
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 597,
          "end": 607
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
        "start": 644,
        "end": 655
      },
      "ctxt": 1,
      "value": "handleClick",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">Toggle Input12</button><p>Status:"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 697,
        "end": 712
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 697,
          "end": 710
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
export const lastCompiled = 1750497319677;
