
export const compiledTemplate = [
  {
    "type": "static",
    "content": "<div style=\"max-width: 800px; margin: 0 auto; padding: 24px; background-color: #f9fafb; min-height: 100vh;\"><div style=\"background-color: white; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); padding: 24px;\"><header style=\"margin-bottom: 24px;\"><h1 style=\"font-size: 24px; font-weight: bold; color: #374151; margin-bottom: 8px;\">Todo 應用程式</h1><div style=\"display: flex; align-items: center; gap: 16px; font-size: 14px; color: #6b7280;\"><span>總共:"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 27177,
        "end": 27193
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 27177,
          "end": 27191
        },
        "ctxt": 1,
        "value": "totalTodoCount",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</span><span>待完成:"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 27228,
        "end": 27245
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 27228,
          "end": 27243
        },
        "ctxt": 1,
        "value": "activeTodoCount",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</span><span>已完成:"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 27280,
        "end": 27300
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 27280,
          "end": 27298
        },
        "ctxt": 1,
        "value": "completedTodoCount",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</span></div><div style=\"margin-top: 16px;\"><div style=\"display: flex; justify-content: space-between; font-size: 14px; color: #6b7280; margin-bottom: 4px;\"><span>完成進度</span><span>"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 27536,
        "end": 27556
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 27536,
          "end": 27554
        },
        "ctxt": 1,
        "value": "progressPercentage",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "%</span></div><div style=\"width: 100%; background-color: #e5e7eb; border-radius: 9999px; height: 8px;\"><div style="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "TemplateLiteral",
      "span": {
        "start": 27713,
        "end": 27832
      },
      "expressions": [
        {
          "type": "CallExpression",
          "span": {
            "start": 27808,
            "end": 27828
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 27808,
              "end": 27826
            },
            "ctxt": 1,
            "value": "progressPercentage",
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        }
      ],
      "quasis": [
        {
          "type": "TemplateElement",
          "span": {
            "start": 27714,
            "end": 27806
          },
          "tail": false,
          "cooked": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: ",
          "raw": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 27829,
            "end": 27831
          },
          "tail": true,
          "cooked": "%;",
          "raw": "%;"
        }
      ]
    }
  },
  {
    "type": "static",
    "content": "></div></div></div></header><div style=\"margin-bottom: 24px; padding: 16px; background-color: #f9fafb; border-radius: 8px;\"><div style=\"display: flex; gap: 12px; margin-bottom: 12px;\"><input type=\"text\" style=\"flex: 1; padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px;\" placeholder=\"輸入新的待辦事項...\" value="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 28262,
        "end": 28275
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 28262,
          "end": 28273
        },
        "ctxt": 1,
        "value": "newTodoText",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": " onInput="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 28296,
        "end": 28314
      },
      "ctxt": 1,
      "value": "handleNewTodoInput",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": " onKeyPress="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 28338,
        "end": 28359
      },
      "ctxt": 1,
      "value": "handleNewTodoKeyPress",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": "><select style=\"padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px;\" value="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 28489,
        "end": 28507
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 28489,
          "end": 28505
        },
        "ctxt": 1,
        "value": "selectedPriority",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": " onChange="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 28529,
        "end": 28549
      },
      "ctxt": 1,
      "value": "handlePriorityChange",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": "><option value=\"low\">低優先級</option><option value=\"medium\">中優先 級</option><option value=\"high\">高優先級</option></select><button style=\"padding: 8px 24px; background-color: #2563eb; color: white; border-radius: 8px; border: none; cursor: pointer;\" onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 28904,
        "end": 28917
      },
      "ctxt": 1,
      "value": "handleAddTodo",
      "optional": false
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
        "start": 28939,
        "end": 28960
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 28939,
          "end": 28958
        },
        "ctxt": 1,
        "value": "isAddButtonDisabled",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": ">新增</button></div></div><div style=\"display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;\"><div style=\"display: flex; gap: 8px;\"><button style="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "TemplateLiteral",
      "span": {
        "start": 29217,
        "end": 29464
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 29317,
            "end": 29357
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 29317,
              "end": 29335
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 29317,
                "end": 29325
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 29317,
                  "end": 29323
                },
                "ctxt": 1,
                "value": "filter",
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "right": {
              "type": "StringLiteral",
              "span": {
                "start": 29330,
                "end": 29335
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 29338,
              "end": 29347
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 29350,
              "end": 29357
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 29393,
            "end": 29433
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 29393,
              "end": 29411
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 29393,
                "end": 29401
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 29393,
                  "end": 29399
                },
                "ctxt": 1,
                "value": "filter",
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "right": {
              "type": "StringLiteral",
              "span": {
                "start": 29406,
                "end": 29411
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 29414,
              "end": 29421
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 29424,
              "end": 29433
            },
            "value": "#374151",
            "raw": "\"#374151\""
          }
        }
      ],
      "quasis": [
        {
          "type": "TemplateElement",
          "span": {
            "start": 29218,
            "end": 29302
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 29369,
            "end": 29378
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 29445,
            "end": 29463
          },
          "tail": true,
          "cooked": "; cursor: pointer;",
          "raw": "; cursor: pointer;"
        }
      ]
    }
  },
  {
    "type": "static",
    "content": " onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 29485,
        "end": 29505
      },
      "ctxt": 1,
      "value": "handleFilterAllClick",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">全部</button><button style="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "TemplateLiteral",
      "span": {
        "start": 29585,
        "end": 29838
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 29685,
            "end": 29728
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 29685,
              "end": 29706
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 29685,
                "end": 29693
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 29685,
                  "end": 29691
                },
                "ctxt": 1,
                "value": "filter",
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "right": {
              "type": "StringLiteral",
              "span": {
                "start": 29698,
                "end": 29706
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 29709,
              "end": 29718
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 29721,
              "end": 29728
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 29764,
            "end": 29807
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 29764,
              "end": 29785
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 29764,
                "end": 29772
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 29764,
                  "end": 29770
                },
                "ctxt": 1,
                "value": "filter",
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "right": {
              "type": "StringLiteral",
              "span": {
                "start": 29777,
                "end": 29785
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 29788,
              "end": 29795
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 29798,
              "end": 29807
            },
            "value": "#374151",
            "raw": "\"#374151\""
          }
        }
      ],
      "quasis": [
        {
          "type": "TemplateElement",
          "span": {
            "start": 29586,
            "end": 29670
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 29740,
            "end": 29749
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 29819,
            "end": 29837
          },
          "tail": true,
          "cooked": "; cursor: pointer;",
          "raw": "; cursor: pointer;"
        }
      ]
    }
  },
  {
    "type": "static",
    "content": " onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 29859,
        "end": 29882
      },
      "ctxt": 1,
      "value": "handleFilterActiveClick",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">待完成"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 29915,
        "end": 29932
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 29915,
          "end": 29930
        },
        "ctxt": 1,
        "value": "activeTodoCount",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</button><button style="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "TemplateLiteral",
      "span": {
        "start": 29985,
        "end": 30244
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 30085,
            "end": 30131
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 30085,
              "end": 30109
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 30085,
                "end": 30093
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 30085,
                  "end": 30091
                },
                "ctxt": 1,
                "value": "filter",
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "right": {
              "type": "StringLiteral",
              "span": {
                "start": 30098,
                "end": 30109
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 30112,
              "end": 30121
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 30124,
              "end": 30131
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 30167,
            "end": 30213
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 30167,
              "end": 30191
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 30167,
                "end": 30175
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 30167,
                  "end": 30173
                },
                "ctxt": 1,
                "value": "filter",
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "right": {
              "type": "StringLiteral",
              "span": {
                "start": 30180,
                "end": 30191
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 30194,
              "end": 30201
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 30204,
              "end": 30213
            },
            "value": "#374151",
            "raw": "\"#374151\""
          }
        }
      ],
      "quasis": [
        {
          "type": "TemplateElement",
          "span": {
            "start": 29986,
            "end": 30070
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 30143,
            "end": 30152
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 30225,
            "end": 30243
          },
          "tail": true,
          "cooked": "; cursor: pointer;",
          "raw": "; cursor: pointer;"
        }
      ]
    }
  },
  {
    "type": "static",
    "content": " onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 30265,
        "end": 30291
      },
      "ctxt": 1,
      "value": "handleFilterCompletedClick",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">已完成"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "CallExpression",
      "span": {
        "start": 30324,
        "end": 30344
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 30324,
          "end": 30342
        },
        "ctxt": 1,
        "value": "completedTodoCount",
        "optional": false
      },
      "arguments": [],
      "typeArguments": null
    }
  },
  {
    "type": "static",
    "content": "</button></div><button style="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "TemplateLiteral",
      "span": {
        "start": 30407,
        "end": 30591
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 30430,
            "end": 30468
          },
          "test": {
            "type": "CallExpression",
            "span": {
              "start": 30430,
              "end": 30449
            },
            "ctxt": 0,
            "callee": {
              "type": "Identifier",
              "span": {
                "start": 30430,
                "end": 30447
              },
              "ctxt": 1,
              "value": "hasCompletedTodos",
              "optional": false
            },
            "arguments": [],
            "typeArguments": null
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 30452,
              "end": 30459
            },
            "value": "block",
            "raw": "\"block\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 30462,
              "end": 30468
            },
            "value": "none",
            "raw": "\"none\""
          }
        }
      ],
      "quasis": [
        {
          "type": "TemplateElement",
          "span": {
            "start": 30408,
            "end": 30417
          },
          "tail": false,
          "cooked": "display: ",
          "raw": "display: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 30478,
            "end": 30590
          },
          "tail": true,
          "cooked": "; padding: 8px 16px; background-color: #dc2626; color: white; border-radius: 8px; border: none; cursor: pointer;",
          "raw": "; padding: 8px 16px; background-color: #dc2626; color: white; border-radius: 8px; border: none; cursor: pointer;"
        }
      ]
    }
  },
  {
    "type": "static",
    "content": " onClick="
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "Identifier",
      "span": {
        "start": 30610,
        "end": 30630
      },
      "ctxt": 1,
      "value": "handleClearCompleted",
      "optional": false
    }
  },
  {
    "type": "static",
    "content": ">清除已完成</button></div><div style=\"display: flex; flex-direction: column; gap: 8px;\">"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "ConditionalExpression",
      "span": {
        "start": 30766,
        "end": 32775
      },
      "test": {
        "type": "CallExpression",
        "span": {
          "start": 30766,
          "end": 30779
        },
        "ctxt": 0,
        "callee": {
          "type": "Identifier",
          "span": {
            "start": 30766,
            "end": 30777
          },
          "ctxt": 1,
          "value": "isEmptyList",
          "optional": false
        },
        "arguments": [],
        "typeArguments": null
      },
      "consequent": {
        "type": "ParenthesisExpression",
        "span": {
          "start": 30782,
          "end": 31015
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 30792,
            "end": 31007
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 30793,
                "end": 30796
              },
              "ctxt": 1,
              "value": "div",
              "optional": false
            },
            "span": {
              "start": 30792,
              "end": 30856
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 30797,
                  "end": 30855
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 30797,
                    "end": 30802
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 30803,
                    "end": 30855
                  },
                  "value": "text-align: center; padding: 32px; color: #6b7280;",
                  "raw": "\"text-align: center; padding: 32px; color: #6b7280;\""
                }
              }
            ],
            "selfClosing": false,
            "typeArguments": null
          },
          "children": [
            {
              "type": "JSXText",
              "span": {
                "start": 30856,
                "end": 30867
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 30867,
                "end": 30913
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 30868,
                    "end": 30869
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 30867,
                  "end": 30895
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 30870,
                      "end": 30894
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 30870,
                        "end": 30875
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 30876,
                        "end": 30894
                      },
                      "value": "font-size: 18px;",
                      "raw": "\"font-size: 18px;\""
                    }
                  }
                ],
                "selfClosing": false,
                "typeArguments": null
              },
              "children": [
                {
                  "type": "JSXText",
                  "span": {
                    "start": 30895,
                    "end": 30901
                  },
                  "value": "沒有",
                  "raw": "沒有"
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 30901,
                    "end": 30903
                  },
                  "expression": {
                    "type": "JSXEmptyExpression",
                    "span": {
                      "start": 30902,
                      "end": 30902
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 30903,
                    "end": 30909
                  },
                  "value": "事項",
                  "raw": "事項"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 30909,
                  "end": 30913
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 30911,
                    "end": 30912
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                }
              }
            },
            {
              "type": "JSXText",
              "span": {
                "start": 30913,
                "end": 30924
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 30924,
                "end": 30992
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 30925,
                    "end": 30926
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 30924,
                  "end": 30952
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 30927,
                      "end": 30951
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 30927,
                        "end": 30932
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 30933,
                        "end": 30951
                      },
                      "value": "font-size: 14px;",
                      "raw": "\"font-size: 14px;\""
                    }
                  }
                ],
                "selfClosing": false,
                "typeArguments": null
              },
              "children": [
                {
                  "type": "JSXText",
                  "span": {
                    "start": 30952,
                    "end": 30988
                  },
                  "value": "新增一個待辦事項開始吧！",
                  "raw": "新增一個待辦事項開始吧！"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 30988,
                  "end": 30992
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 30990,
                    "end": 30991
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                }
              }
            },
            {
              "type": "JSXText",
              "span": {
                "start": 30992,
                "end": 31001
              },
              "value": "\n        ",
              "raw": "\n        "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 31001,
              "end": 31007
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 31003,
                "end": 31006
              },
              "ctxt": 1,
              "value": "div",
              "optional": false
            }
          }
        }
      },
      "alternate": {
        "type": "ParenthesisExpression",
        "span": {
          "start": 31018,
          "end": 32775
        },
        "expression": {
          "type": "CallExpression",
          "span": {
            "start": 31028,
            "end": 32767
          },
          "ctxt": 0,
          "callee": {
            "type": "MemberExpression",
            "span": {
              "start": 31028,
              "end": 31047
            },
            "object": {
              "type": "CallExpression",
              "span": {
                "start": 31028,
                "end": 31043
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 31028,
                  "end": 31041
                },
                "ctxt": 1,
                "value": "filteredTodos",
                "optional": false
              },
              "arguments": [],
              "typeArguments": null
            },
            "property": {
              "type": "Identifier",
              "span": {
                "start": 31044,
                "end": 31047
              },
              "value": "map"
            }
          },
          "arguments": [
            {
              "spread": null,
              "expression": {
                "type": "ArrowFunctionExpression",
                "span": {
                  "start": 31048,
                  "end": 32766
                },
                "ctxt": 0,
                "params": [
                  {
                    "type": "Identifier",
                    "span": {
                      "start": 31049,
                      "end": 31053
                    },
                    "ctxt": 3,
                    "value": "todo",
                    "optional": false,
                    "typeAnnotation": null
                  }
                ],
                "body": {
                  "type": "ParenthesisExpression",
                  "span": {
                    "start": 31058,
                    "end": 32766
                  },
                  "expression": {
                    "type": "JSXElement",
                    "span": {
                      "start": 31070,
                      "end": 32756
                    },
                    "opening": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 31071,
                          "end": 31074
                        },
                        "ctxt": 1,
                        "value": "div",
                        "optional": false
                      },
                      "span": {
                        "start": 31070,
                        "end": 31321
                      },
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 31087,
                            "end": 31100
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 31087,
                              "end": 31090
                            },
                            "value": "key"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 31091,
                              "end": 31100
                            },
                            "expression": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 31092,
                                "end": 31099
                              },
                              "object": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31092,
                                  "end": 31096
                                },
                                "ctxt": 3,
                                "value": "todo",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31097,
                                  "end": 31099
                                },
                                "value": "id"
                              }
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 31113,
                            "end": 31309
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 31113,
                              "end": 31118
                            },
                            "value": "style"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 31119,
                              "end": 31309
                            },
                            "expression": {
                              "type": "TemplateLiteral",
                              "span": {
                                "start": 31120,
                                "end": 31308
                              },
                              "expressions": [
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 31218,
                                    "end": 31254
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 31218,
                                      "end": 31232
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 31218,
                                        "end": 31222
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 31223,
                                        "end": 31232
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 31235,
                                      "end": 31244
                                    },
                                    "value": "#f9fafb",
                                    "raw": "\"#f9fafb\""
                                  },
                                  "alternate": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 31247,
                                      "end": 31254
                                    },
                                    "value": "white",
                                    "raw": "\"white\""
                                  }
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 31281,
                                    "end": 31305
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 31281,
                                      "end": 31295
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 31281,
                                        "end": 31285
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 31286,
                                        "end": 31295
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 31298,
                                      "end": 31301
                                    },
                                    "value": 0.7,
                                    "raw": "0.7"
                                  },
                                  "alternate": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 31304,
                                      "end": 31305
                                    },
                                    "value": 1,
                                    "raw": "1"
                                  }
                                }
                              ],
                              "quasis": [
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 31121,
                                    "end": 31201
                                  },
                                  "tail": false,
                                  "cooked": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
                                  "raw": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 31268,
                                    "end": 31279
                                  },
                                  "tail": false,
                                  "cooked": "; opacity: ",
                                  "raw": "; opacity: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 31306,
                                    "end": 31307
                                  },
                                  "tail": true,
                                  "cooked": ";",
                                  "raw": ";"
                                }
                              ]
                            }
                          }
                        }
                      ],
                      "selfClosing": false,
                      "typeArguments": null
                    },
                    "children": [
                      {
                        "type": "JSXText",
                        "span": {
                          "start": 31321,
                          "end": 31334
                        },
                        "value": "\n            ",
                        "raw": "\n            "
                      },
                      {
                        "type": "JSXElement",
                        "span": {
                          "start": 31334,
                          "end": 32739
                        },
                        "opening": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 31335,
                              "end": 31338
                            },
                            "ctxt": 1,
                            "value": "div",
                            "optional": false
                          },
                          "span": {
                            "start": 31334,
                            "end": 31394
                          },
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "span": {
                                "start": 31339,
                                "end": 31393
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31339,
                                  "end": 31344
                                },
                                "value": "style"
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 31345,
                                  "end": 31393
                                },
                                "value": "display: flex; align-items: center; gap: 12px;",
                                "raw": "\"display: flex; align-items: center; gap: 12px;\""
                              }
                            }
                          ],
                          "selfClosing": false,
                          "typeArguments": null
                        },
                        "children": [
                          {
                            "type": "JSXText",
                            "span": {
                              "start": 31394,
                              "end": 31409
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 31409,
                              "end": 31565
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31410,
                                  "end": 31415
                                },
                                "ctxt": 1,
                                "value": "input",
                                "optional": false
                              },
                              "span": {
                                "start": 31409,
                                "end": 31565
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 31432,
                                    "end": 31447
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 31432,
                                      "end": 31436
                                    },
                                    "value": "type"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 31437,
                                      "end": 31447
                                    },
                                    "value": "checkbox",
                                    "raw": "\"checkbox\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 31464,
                                    "end": 31488
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 31464,
                                      "end": 31471
                                    },
                                    "value": "checked"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 31472,
                                      "end": 31488
                                    },
                                    "expression": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 31473,
                                        "end": 31487
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 31473,
                                          "end": 31477
                                        },
                                        "ctxt": 3,
                                        "value": "todo",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 31478,
                                          "end": 31487
                                        },
                                        "value": "completed"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 31505,
                                    "end": 31548
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 31505,
                                      "end": 31513
                                    },
                                    "value": "onChange"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 31514,
                                      "end": 31548
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 31515,
                                        "end": 31547
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 31521,
                                          "end": 31547
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 31521,
                                            "end": 31538
                                          },
                                          "ctxt": 1,
                                          "value": "handleToggleClick",
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "spread": null,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "span": {
                                                "start": 31539,
                                                "end": 31546
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 31539,
                                                  "end": 31543
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 31544,
                                                  "end": 31546
                                                },
                                                "value": "id"
                                              }
                                            }
                                          }
                                        ],
                                        "typeArguments": null
                                      },
                                      "async": false,
                                      "generator": false,
                                      "typeParameters": null,
                                      "returnType": null
                                    }
                                  }
                                }
                              ],
                              "selfClosing": true,
                              "typeArguments": null
                            },
                            "children": [],
                            "closing": null
                          },
                          {
                            "type": "JSXText",
                            "span": {
                              "start": 31565,
                              "end": 31580
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 31580,
                              "end": 31834
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31581,
                                  "end": 31585
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 31580,
                                "end": 31784
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 31602,
                                    "end": 31768
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 31602,
                                      "end": 31607
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 31608,
                                      "end": 31768
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 31609,
                                        "end": 31767
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 31657,
                                            "end": 31697
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 31657,
                                              "end": 31671
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 31657,
                                                "end": 31661
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 31662,
                                                "end": 31671
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 31674,
                                              "end": 31688
                                            },
                                            "value": "line-through",
                                            "raw": "\"line-through\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 31691,
                                              "end": 31697
                                            },
                                            "value": "none",
                                            "raw": "\"none\""
                                          }
                                        },
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 31726,
                                            "end": 31764
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 31726,
                                              "end": 31740
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 31726,
                                                "end": 31730
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 31731,
                                                "end": 31740
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 31743,
                                              "end": 31752
                                            },
                                            "value": "#6b7280",
                                            "raw": "\"#6b7280\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 31755,
                                              "end": 31764
                                            },
                                            "value": "#374151",
                                            "raw": "\"#374151\""
                                          }
                                        }
                                      ],
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 31610,
                                            "end": 31636
                                          },
                                          "tail": false,
                                          "cooked": "flex: 1; text-decoration: ",
                                          "raw": "flex: 1; text-decoration: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 31715,
                                            "end": 31724
                                          },
                                          "tail": false,
                                          "cooked": "; color: ",
                                          "raw": "; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 31765,
                                            "end": 31766
                                          },
                                          "tail": true,
                                          "cooked": ";",
                                          "raw": ";"
                                        }
                                      ]
                                    }
                                  }
                                }
                              ],
                              "selfClosing": false,
                              "typeArguments": null
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 31784,
                                  "end": 31801
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 31801,
                                  "end": 31812
                                },
                                "expression": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 31802,
                                    "end": 31811
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 31802,
                                      "end": 31806
                                    },
                                    "ctxt": 3,
                                    "value": "todo",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 31807,
                                      "end": 31811
                                    },
                                    "value": "text"
                                  }
                                }
                              },
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 31812,
                                  "end": 31827
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 31827,
                                "end": 31834
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31829,
                                  "end": 31833
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "JSXText",
                            "span": {
                              "start": 31834,
                              "end": 31849
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 31849,
                              "end": 32127
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 31850,
                                  "end": 31854
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 31849,
                                "end": 32056
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 31871,
                                    "end": 32040
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 31871,
                                      "end": 31876
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 31877,
                                      "end": 32040
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 31878,
                                        "end": 32039
                                      },
                                      "expressions": [
                                        {
                                          "type": "CallExpression",
                                          "span": {
                                            "start": 31955,
                                            "end": 32022
                                          },
                                          "ctxt": 0,
                                          "callee": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 31955,
                                              "end": 31971
                                            },
                                            "ctxt": 1,
                                            "value": "getPriorityColor",
                                            "optional": false
                                          },
                                          "arguments": [
                                            {
                                              "spread": null,
                                              "expression": {
                                                "type": "MemberExpression",
                                                "span": {
                                                  "start": 31991,
                                                  "end": 32004
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 31991,
                                                    "end": 31995
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 31996,
                                                    "end": 32004
                                                  },
                                                  "value": "priority"
                                                }
                                              }
                                            }
                                          ],
                                          "typeArguments": null
                                        }
                                      ],
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 31879,
                                            "end": 31953
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: ",
                                          "raw": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 32023,
                                            "end": 32038
                                          },
                                          "tail": true,
                                          "cooked": "; color: white;",
                                          "raw": "; color: white;"
                                        }
                                      ]
                                    }
                                  }
                                }
                              ],
                              "selfClosing": false,
                              "typeArguments": null
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 32056,
                                  "end": 32073
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 32073,
                                  "end": 32105
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 32074,
                                    "end": 32104
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 32074,
                                      "end": 32089
                                    },
                                    "ctxt": 1,
                                    "value": "getPriorityText",
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "span": {
                                          "start": 32090,
                                          "end": 32103
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 32090,
                                            "end": 32094
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 32095,
                                            "end": 32103
                                          },
                                          "value": "priority"
                                        }
                                      }
                                    }
                                  ],
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 32105,
                                  "end": 32120
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 32120,
                                "end": 32127
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 32122,
                                  "end": 32126
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "JSXText",
                            "span": {
                              "start": 32127,
                              "end": 32142
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 32142,
                              "end": 32425
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 32143,
                                  "end": 32147
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 32142,
                                "end": 32360
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 32164,
                                    "end": 32344
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 32164,
                                      "end": 32169
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 32170,
                                      "end": 32344
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 32171,
                                        "end": 32343
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 32217,
                                            "end": 32323
                                          },
                                          "test": {
                                            "type": "BinaryExpression",
                                            "span": {
                                              "start": 32217,
                                              "end": 32259
                                            },
                                            "operator": "&&",
                                            "left": {
                                              "type": "CallExpression",
                                              "span": {
                                                "start": 32217,
                                                "end": 32240
                                              },
                                              "ctxt": 0,
                                              "callee": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 32217,
                                                  "end": 32226
                                                },
                                                "ctxt": 1,
                                                "value": "isOverdue",
                                                "optional": false
                                              },
                                              "arguments": [
                                                {
                                                  "spread": null,
                                                  "expression": {
                                                    "type": "MemberExpression",
                                                    "span": {
                                                      "start": 32227,
                                                      "end": 32239
                                                    },
                                                    "object": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 32227,
                                                        "end": 32231
                                                      },
                                                      "ctxt": 3,
                                                      "value": "todo",
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 32232,
                                                        "end": 32239
                                                      },
                                                      "value": "dueDate"
                                                    }
                                                  }
                                                }
                                              ],
                                              "typeArguments": null
                                            },
                                            "right": {
                                              "type": "UnaryExpression",
                                              "span": {
                                                "start": 32244,
                                                "end": 32259
                                              },
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "span": {
                                                  "start": 32245,
                                                  "end": 32259
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 32245,
                                                    "end": 32249
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 32250,
                                                    "end": 32259
                                                  },
                                                  "value": "completed"
                                                }
                                              }
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 32282,
                                              "end": 32291
                                            },
                                            "value": "#dc2626",
                                            "raw": "\"#dc2626\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 32314,
                                              "end": 32323
                                            },
                                            "value": "#6b7280",
                                            "raw": "\"#6b7280\""
                                          }
                                        }
                                      ],
                                      "quasis": [
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 32172,
                                            "end": 32196
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; color: ",
                                          "raw": "font-size: 12px; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 32341,
                                            "end": 32342
                                          },
                                          "tail": true,
                                          "cooked": ";",
                                          "raw": ";"
                                        }
                                      ]
                                    }
                                  }
                                }
                              ],
                              "selfClosing": false,
                              "typeArguments": null
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 32360,
                                  "end": 32377
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 32377,
                                  "end": 32403
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 32378,
                                    "end": 32402
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 32378,
                                      "end": 32388
                                    },
                                    "ctxt": 1,
                                    "value": "formatDate",
                                    "optional": false
                                  },
                                  "arguments": [
                                    {
                                      "spread": null,
                                      "expression": {
                                        "type": "MemberExpression",
                                        "span": {
                                          "start": 32389,
                                          "end": 32401
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 32389,
                                            "end": 32393
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 32394,
                                            "end": 32401
                                          },
                                          "value": "dueDate"
                                        }
                                      }
                                    }
                                  ],
                                  "typeArguments": null
                                }
                              },
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 32403,
                                  "end": 32418
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 32418,
                                "end": 32425
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 32420,
                                  "end": 32424
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "JSXText",
                            "span": {
                              "start": 32425,
                              "end": 32440
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 32440,
                              "end": 32720
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 32441,
                                  "end": 32447
                                },
                                "ctxt": 1,
                                "value": "button",
                                "optional": false
                              },
                              "span": {
                                "start": 32440,
                                "end": 32673
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 32464,
                                    "end": 32598
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 32464,
                                      "end": 32469
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 32470,
                                      "end": 32598
                                    },
                                    "value": "padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;",
                                    "raw": "\"padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 32615,
                                    "end": 32657
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 32615,
                                      "end": 32622
                                    },
                                    "value": "onClick"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 32623,
                                      "end": 32657
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 32624,
                                        "end": 32656
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 32630,
                                          "end": 32656
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 32630,
                                            "end": 32647
                                          },
                                          "ctxt": 1,
                                          "value": "handleDeleteClick",
                                          "optional": false
                                        },
                                        "arguments": [
                                          {
                                            "spread": null,
                                            "expression": {
                                              "type": "MemberExpression",
                                              "span": {
                                                "start": 32648,
                                                "end": 32655
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 32648,
                                                  "end": 32652
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 32653,
                                                  "end": 32655
                                                },
                                                "value": "id"
                                              }
                                            }
                                          }
                                        ],
                                        "typeArguments": null
                                      },
                                      "async": false,
                                      "generator": false,
                                      "typeParameters": null,
                                      "returnType": null
                                    }
                                  }
                                }
                              ],
                              "selfClosing": false,
                              "typeArguments": null
                            },
                            "children": [
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 32673,
                                  "end": 32711
                                },
                                "value": "\n                刪除\n              ",
                                "raw": "\n                刪除\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 32711,
                                "end": 32720
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 32713,
                                  "end": 32719
                                },
                                "ctxt": 1,
                                "value": "button",
                                "optional": false
                              }
                            }
                          },
                          {
                            "type": "JSXText",
                            "span": {
                              "start": 32720,
                              "end": 32733
                            },
                            "value": "\n            ",
                            "raw": "\n            "
                          }
                        ],
                        "closing": {
                          "type": "JSXClosingElement",
                          "span": {
                            "start": 32733,
                            "end": 32739
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 32735,
                              "end": 32738
                            },
                            "ctxt": 1,
                            "value": "div",
                            "optional": false
                          }
                        }
                      },
                      {
                        "type": "JSXText",
                        "span": {
                          "start": 32739,
                          "end": 32750
                        },
                        "value": "\n          ",
                        "raw": "\n          "
                      }
                    ],
                    "closing": {
                      "type": "JSXClosingElement",
                      "span": {
                        "start": 32750,
                        "end": 32756
                      },
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 32752,
                          "end": 32755
                        },
                        "ctxt": 1,
                        "value": "div",
                        "optional": false
                      }
                    }
                  }
                },
                "async": false,
                "generator": false,
                "typeParameters": null,
                "returnType": null
              }
            }
          ],
          "typeArguments": null
        }
      }
    }
  },
  {
    "type": "static",
    "content": "</div>"
  },
  {
    "type": "dynamic",
    "expression": {
      "type": "BinaryExpression",
      "span": {
        "start": 32794,
        "end": 33254
      },
      "operator": "&&",
      "left": {
        "type": "BinaryExpression",
        "span": {
          "start": 32794,
          "end": 32814
        },
        "operator": ">",
        "left": {
          "type": "CallExpression",
          "span": {
            "start": 32794,
            "end": 32810
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 32794,
              "end": 32808
            },
            "ctxt": 1,
            "value": "totalTodoCount",
            "optional": false
          },
          "arguments": [],
          "typeArguments": null
        },
        "right": {
          "type": "NumericLiteral",
          "span": {
            "start": 32813,
            "end": 32814
          },
          "value": 0,
          "raw": "0"
        }
      },
      "right": {
        "type": "ParenthesisExpression",
        "span": {
          "start": 32818,
          "end": 33254
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 32826,
            "end": 33248
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 32827,
                "end": 32833
              },
              "ctxt": 1,
              "value": "footer",
              "optional": false
            },
            "span": {
              "start": 32826,
              "end": 32963
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 32834,
                  "end": 32962
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 32834,
                    "end": 32839
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 32840,
                    "end": 32962
                  },
                  "value": "margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 14px; color: #6b7280;",
                  "raw": "\"margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; text-align: center; font-size: 14px; color: #6b7280;\""
                }
              }
            ],
            "selfClosing": false,
            "typeArguments": null
          },
          "children": [
            {
              "type": "JSXText",
              "span": {
                "start": 32963,
                "end": 32972
              },
              "value": "\n        ",
              "raw": "\n        "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 32972,
                "end": 33232
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 32973,
                    "end": 32974
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 32972,
                  "end": 32975
                },
                "attributes": [],
                "selfClosing": false,
                "typeArguments": null
              },
              "children": [
                {
                  "type": "JSXText",
                  "span": {
                    "start": 32975,
                    "end": 32993
                  },
                  "value": "\n          總共 ",
                  "raw": "\n          總共 "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 32993,
                    "end": 33011
                  },
                  "expression": {
                    "type": "CallExpression",
                    "span": {
                      "start": 32994,
                      "end": 33010
                    },
                    "ctxt": 0,
                    "callee": {
                      "type": "Identifier",
                      "span": {
                        "start": 32994,
                        "end": 33008
                      },
                      "ctxt": 1,
                      "value": "totalTodoCount",
                      "optional": false
                    },
                    "arguments": [],
                    "typeArguments": null
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 33011,
                    "end": 33032
                  },
                  "value": " 個事項\n          ",
                  "raw": " 個事項\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 33032,
                    "end": 33108
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 33033,
                      "end": 33107
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 33033,
                        "end": 33054
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 33033,
                          "end": 33050
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 33033,
                            "end": 33048
                          },
                          "ctxt": 1,
                          "value": "activeTodoCount",
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "span": {
                          "start": 33053,
                          "end": 33054
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 33057,
                        "end": 33102
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 33070,
                            "end": 33087
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 33070,
                              "end": 33085
                            },
                            "ctxt": 1,
                            "value": "activeTodoCount",
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 33058,
                            "end": 33068
                          },
                          "tail": false,
                          "cooked": "，還有 ",
                          "raw": "，還有 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 33088,
                            "end": 33101
                          },
                          "tail": true,
                          "cooked": " 個待完成",
                          "raw": " 個待完成"
                        }
                      ]
                    },
                    "alternate": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 33105,
                        "end": 33107
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 33108,
                    "end": 33119
                  },
                  "value": "\n          ",
                  "raw": "\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 33119,
                    "end": 33219
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 33120,
                      "end": 33218
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 33120,
                        "end": 33144
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 33120,
                          "end": 33140
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 33120,
                            "end": 33138
                          },
                          "ctxt": 1,
                          "value": "completedTodoCount",
                          "optional": false
                        },
                        "arguments": [],
                        "typeArguments": null
                      },
                      "right": {
                        "type": "NumericLiteral",
                        "span": {
                          "start": 33143,
                          "end": 33144
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 33159,
                        "end": 33201
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 33175,
                            "end": 33195
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 33175,
                              "end": 33193
                            },
                            "ctxt": 1,
                            "value": "completedTodoCount",
                            "optional": false
                          },
                          "arguments": [],
                          "typeArguments": null
                        }
                      ],
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 33160,
                            "end": 33173
                          },
                          "tail": false,
                          "cooked": "，已完成 ",
                          "raw": "，已完成 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 33196,
                            "end": 33200
                          },
                          "tail": true,
                          "cooked": " 個",
                          "raw": " 個"
                        }
                      ]
                    },
                    "alternate": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 33216,
                        "end": 33218
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 33219,
                    "end": 33228
                  },
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 33228,
                  "end": 33232
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 33230,
                    "end": 33231
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                }
              }
            },
            {
              "type": "JSXText",
              "span": {
                "start": 33232,
                "end": 33239
              },
              "value": "\n      ",
              "raw": "\n      "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 33239,
              "end": 33248
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 33241,
                "end": 33247
              },
              "ctxt": 1,
              "value": "footer",
              "optional": false
            }
          }
        }
      }
    }
  },
  {
    "type": "static",
    "content": "</div></div>"
  }
];
export const lastCompiled = 1750651227751;
