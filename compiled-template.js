
export const compiledTemplate = [
  {
    "type": "static",
    "content": "<div><button onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 87343,
        "end": 87358
      },
      "ctxt": 1,
      "value": "handleDecrement",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">-</button><span>"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 87380,
        "end": 87387
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 87380,
          "end": 87385
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
    "content": "</span><button onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 87415,
        "end": 87430
      },
      "ctxt": 1,
      "value": "handleIncrement",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">+</button></div>"
  }
];
export const lastCompiled = 1750590787926;
