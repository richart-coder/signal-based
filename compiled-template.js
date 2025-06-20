export const compiledTemplate = [
  {
    type: "static",
    content: "<div className=",
  },
  {
    type: "dynamic",
    expression: {
      type: "CallExpression",
      span: {
        start: 650,
        end: 660,
      },
      ctxt: 0,
      callee: {
        type: "Identifier",
        span: {
          start: 650,
          end: 658,
        },
        ctxt: 1,
        value: "getClass",
        optional: false,
      },
      arguments: [],
      typeArguments: null,
    },
  },
  {
    type: "static",
    content: "><h1>",
  },
  {
    type: "dynamic",
    expression: {
      type: "CallExpression",
      span: {
        start: 670,
        end: 680,
      },
      ctxt: 0,
      callee: {
        type: "Identifier",
        span: {
          start: 670,
          end: 678,
        },
        ctxt: 1,
        value: "getTitle",
        optional: false,
      },
      arguments: [],
      typeArguments: null,
    },
  },
  {
    type: "static",
    content: "</h1><div><p>Count:",
  },
  {
    type: "dynamic",
    expression: {
      type: "CallExpression",
      span: {
        start: 710,
        end: 717,
      },
      ctxt: 0,
      callee: {
        type: "Identifier",
        span: {
          start: 710,
          end: 715,
        },
        ctxt: 1,
        value: "count",
        optional: false,
      },
      arguments: [],
      typeArguments: null,
    },
  },
  {
    type: "static",
    content: '</p><input type="text" value=',
  },
  {
    type: "dynamic",
    expression: {
      type: "CallExpression",
      span: {
        start: 753,
        end: 763,
      },
      ctxt: 0,
      callee: {
        type: "Identifier",
        span: {
          start: 753,
          end: 761,
        },
        ctxt: 1,
        value: "getValue",
        optional: false,
      },
      arguments: [],
      typeArguments: null,
    },
  },
  {
    type: "static",
    content: " disabled=",
  },
  {
    type: "dynamic",
    expression: {
      type: "CallExpression",
      span: {
        start: 775,
        end: 792,
      },
      ctxt: 0,
      callee: {
        type: "Identifier",
        span: {
          start: 775,
          end: 790,
        },
        ctxt: 1,
        value: "isInputDisabled",
        optional: false,
      },
      arguments: [],
      typeArguments: null,
    },
  },
  {
    type: "static",
    content: "></input><br></br><button onClick=",
  },
  {
    type: "dynamic",
    expression: {
      type: "Identifier",
      span: {
        start: 829,
        end: 840,
      },
      ctxt: 1,
      value: "handleClick",
      optional: false,
    },
  },
  {
    type: "static",
    content: ">Toggle Input</button><p>Status:",
  },
  {
    type: "dynamic",
    expression: {
      type: "CallExpression",
      span: {
        start: 880,
        end: 897,
      },
      ctxt: 0,
      callee: {
        type: "Identifier",
        span: {
          start: 880,
          end: 895,
        },
        ctxt: 1,
        value: "isInputDisabled",
        optional: false,
      },
      arguments: [],
      typeArguments: null,
    },
  },
  {
    type: "static",
    content: "</p></div></div>",
  },
];
export const lastCompiled = 1750417388812;
