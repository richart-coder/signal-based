
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
        "start": 107819,
        "end": 107835
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 107819,
          "end": 107833
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
        "start": 107870,
        "end": 107887
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 107870,
          "end": 107885
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
        "start": 107922,
        "end": 107942
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 107922,
          "end": 107940
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
        "start": 108178,
        "end": 108198
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 108178,
          "end": 108196
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
        "start": 108355,
        "end": 108474
      },
      "expressions": [
        {
          "type": "CallExpression",
          "span": {
            "start": 108450,
            "end": 108470
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 108450,
              "end": 108468
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
            "start": 108356,
            "end": 108448
          },
          "tail": false,
          "cooked": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: ",
          "raw": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 108471,
            "end": 108473
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
        "start": 108904,
        "end": 108917
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 108904,
          "end": 108915
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
        "start": 108938,
        "end": 108956
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
        "start": 108980,
        "end": 109001
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
        "start": 109131,
        "end": 109149
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 109131,
          "end": 109147
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
        "start": 109171,
        "end": 109191
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
        "start": 109546,
        "end": 109559
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
        "start": 109581,
        "end": 109602
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 109581,
          "end": 109600
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
        "start": 109859,
        "end": 110106
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 109959,
            "end": 109999
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 109959,
              "end": 109977
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 109959,
                "end": 109967
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 109959,
                  "end": 109965
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
                "start": 109972,
                "end": 109977
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 109980,
              "end": 109989
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 109992,
              "end": 109999
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 110035,
            "end": 110075
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 110035,
              "end": 110053
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 110035,
                "end": 110043
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 110035,
                  "end": 110041
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
                "start": 110048,
                "end": 110053
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 110056,
              "end": 110063
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 110066,
              "end": 110075
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
            "start": 109860,
            "end": 109944
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 110011,
            "end": 110020
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 110087,
            "end": 110105
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
        "start": 110127,
        "end": 110147
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
        "start": 110227,
        "end": 110480
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 110327,
            "end": 110370
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 110327,
              "end": 110348
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 110327,
                "end": 110335
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 110327,
                  "end": 110333
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
                "start": 110340,
                "end": 110348
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 110351,
              "end": 110360
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 110363,
              "end": 110370
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 110406,
            "end": 110449
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 110406,
              "end": 110427
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 110406,
                "end": 110414
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 110406,
                  "end": 110412
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
                "start": 110419,
                "end": 110427
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 110430,
              "end": 110437
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 110440,
              "end": 110449
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
            "start": 110228,
            "end": 110312
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 110382,
            "end": 110391
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 110461,
            "end": 110479
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
        "start": 110501,
        "end": 110524
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
        "start": 110557,
        "end": 110574
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 110557,
          "end": 110572
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
        "start": 110627,
        "end": 110886
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 110727,
            "end": 110773
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 110727,
              "end": 110751
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 110727,
                "end": 110735
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 110727,
                  "end": 110733
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
                "start": 110740,
                "end": 110751
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 110754,
              "end": 110763
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 110766,
              "end": 110773
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 110809,
            "end": 110855
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 110809,
              "end": 110833
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 110809,
                "end": 110817
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 110809,
                  "end": 110815
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
                "start": 110822,
                "end": 110833
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 110836,
              "end": 110843
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 110846,
              "end": 110855
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
            "start": 110628,
            "end": 110712
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 110785,
            "end": 110794
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 110867,
            "end": 110885
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
        "start": 110907,
        "end": 110933
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
        "start": 110966,
        "end": 110986
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 110966,
          "end": 110984
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
        "start": 111049,
        "end": 111233
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 111072,
            "end": 111110
          },
          "test": {
            "type": "CallExpression",
            "span": {
              "start": 111072,
              "end": 111091
            },
            "ctxt": 0,
            "callee": {
              "type": "Identifier",
              "span": {
                "start": 111072,
                "end": 111089
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
              "start": 111094,
              "end": 111101
            },
            "value": "block",
            "raw": "\"block\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 111104,
              "end": 111110
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
            "start": 111050,
            "end": 111059
          },
          "tail": false,
          "cooked": "display: ",
          "raw": "display: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 111120,
            "end": 111232
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
        "start": 111252,
        "end": 111272
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
        "start": 111408,
        "end": 113417
      },
      "test": {
        "type": "CallExpression",
        "span": {
          "start": 111408,
          "end": 111421
        },
        "ctxt": 0,
        "callee": {
          "type": "Identifier",
          "span": {
            "start": 111408,
            "end": 111419
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
          "start": 111424,
          "end": 111657
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 111434,
            "end": 111649
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 111435,
                "end": 111438
              },
              "ctxt": 1,
              "value": "div",
              "optional": false
            },
            "span": {
              "start": 111434,
              "end": 111498
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 111439,
                  "end": 111497
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 111439,
                    "end": 111444
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 111445,
                    "end": 111497
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
                "start": 111498,
                "end": 111509
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 111509,
                "end": 111555
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 111510,
                    "end": 111511
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 111509,
                  "end": 111537
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 111512,
                      "end": 111536
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 111512,
                        "end": 111517
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 111518,
                        "end": 111536
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
                    "start": 111537,
                    "end": 111543
                  },
                  "value": "沒有",
                  "raw": "沒有"
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 111543,
                    "end": 111545
                  },
                  "expression": {
                    "type": "JSXEmptyExpression",
                    "span": {
                      "start": 111544,
                      "end": 111544
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 111545,
                    "end": 111551
                  },
                  "value": "事項",
                  "raw": "事項"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 111551,
                  "end": 111555
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 111553,
                    "end": 111554
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
                "start": 111555,
                "end": 111566
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 111566,
                "end": 111634
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 111567,
                    "end": 111568
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 111566,
                  "end": 111594
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 111569,
                      "end": 111593
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 111569,
                        "end": 111574
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 111575,
                        "end": 111593
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
                    "start": 111594,
                    "end": 111630
                  },
                  "value": "新增一個待辦事項開始吧！",
                  "raw": "新增一個待辦事項開始吧！"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 111630,
                  "end": 111634
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 111632,
                    "end": 111633
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
                "start": 111634,
                "end": 111643
              },
              "value": "\n        ",
              "raw": "\n        "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 111643,
              "end": 111649
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 111645,
                "end": 111648
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
          "start": 111660,
          "end": 113417
        },
        "expression": {
          "type": "CallExpression",
          "span": {
            "start": 111670,
            "end": 113409
          },
          "ctxt": 0,
          "callee": {
            "type": "MemberExpression",
            "span": {
              "start": 111670,
              "end": 111689
            },
            "object": {
              "type": "CallExpression",
              "span": {
                "start": 111670,
                "end": 111685
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 111670,
                  "end": 111683
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
                "start": 111686,
                "end": 111689
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
                  "start": 111690,
                  "end": 113408
                },
                "ctxt": 0,
                "params": [
                  {
                    "type": "Identifier",
                    "span": {
                      "start": 111691,
                      "end": 111695
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
                    "start": 111700,
                    "end": 113408
                  },
                  "expression": {
                    "type": "JSXElement",
                    "span": {
                      "start": 111712,
                      "end": 113398
                    },
                    "opening": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 111713,
                          "end": 111716
                        },
                        "ctxt": 1,
                        "value": "div",
                        "optional": false
                      },
                      "span": {
                        "start": 111712,
                        "end": 111963
                      },
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 111729,
                            "end": 111742
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 111729,
                              "end": 111732
                            },
                            "value": "key"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 111733,
                              "end": 111742
                            },
                            "expression": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 111734,
                                "end": 111741
                              },
                              "object": {
                                "type": "Identifier",
                                "span": {
                                  "start": 111734,
                                  "end": 111738
                                },
                                "ctxt": 3,
                                "value": "todo",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 111739,
                                  "end": 111741
                                },
                                "value": "id"
                              }
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 111755,
                            "end": 111951
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 111755,
                              "end": 111760
                            },
                            "value": "style"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 111761,
                              "end": 111951
                            },
                            "expression": {
                              "type": "TemplateLiteral",
                              "span": {
                                "start": 111762,
                                "end": 111950
                              },
                              "expressions": [
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 111860,
                                    "end": 111896
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 111860,
                                      "end": 111874
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 111860,
                                        "end": 111864
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 111865,
                                        "end": 111874
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 111877,
                                      "end": 111886
                                    },
                                    "value": "#f9fafb",
                                    "raw": "\"#f9fafb\""
                                  },
                                  "alternate": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 111889,
                                      "end": 111896
                                    },
                                    "value": "white",
                                    "raw": "\"white\""
                                  }
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 111923,
                                    "end": 111947
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 111923,
                                      "end": 111937
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 111923,
                                        "end": 111927
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 111928,
                                        "end": 111937
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 111940,
                                      "end": 111943
                                    },
                                    "value": 0.7,
                                    "raw": "0.7"
                                  },
                                  "alternate": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 111946,
                                      "end": 111947
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
                                    "start": 111763,
                                    "end": 111843
                                  },
                                  "tail": false,
                                  "cooked": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
                                  "raw": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 111910,
                                    "end": 111921
                                  },
                                  "tail": false,
                                  "cooked": "; opacity: ",
                                  "raw": "; opacity: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 111948,
                                    "end": 111949
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
                          "start": 111963,
                          "end": 111976
                        },
                        "value": "\n            ",
                        "raw": "\n            "
                      },
                      {
                        "type": "JSXElement",
                        "span": {
                          "start": 111976,
                          "end": 113381
                        },
                        "opening": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 111977,
                              "end": 111980
                            },
                            "ctxt": 1,
                            "value": "div",
                            "optional": false
                          },
                          "span": {
                            "start": 111976,
                            "end": 112036
                          },
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "span": {
                                "start": 111981,
                                "end": 112035
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 111981,
                                  "end": 111986
                                },
                                "value": "style"
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 111987,
                                  "end": 112035
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
                              "start": 112036,
                              "end": 112051
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 112051,
                              "end": 112207
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 112052,
                                  "end": 112057
                                },
                                "ctxt": 1,
                                "value": "input",
                                "optional": false
                              },
                              "span": {
                                "start": 112051,
                                "end": 112207
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 112074,
                                    "end": 112089
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112074,
                                      "end": 112078
                                    },
                                    "value": "type"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 112079,
                                      "end": 112089
                                    },
                                    "value": "checkbox",
                                    "raw": "\"checkbox\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 112106,
                                    "end": 112130
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112106,
                                      "end": 112113
                                    },
                                    "value": "checked"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 112114,
                                      "end": 112130
                                    },
                                    "expression": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 112115,
                                        "end": 112129
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 112115,
                                          "end": 112119
                                        },
                                        "ctxt": 3,
                                        "value": "todo",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 112120,
                                          "end": 112129
                                        },
                                        "value": "completed"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 112147,
                                    "end": 112190
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112147,
                                      "end": 112155
                                    },
                                    "value": "onChange"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 112156,
                                      "end": 112190
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 112157,
                                        "end": 112189
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 112163,
                                          "end": 112189
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 112163,
                                            "end": 112180
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
                                                "start": 112181,
                                                "end": 112188
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 112181,
                                                  "end": 112185
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 112186,
                                                  "end": 112188
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
                              "start": 112207,
                              "end": 112222
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 112222,
                              "end": 112476
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 112223,
                                  "end": 112227
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 112222,
                                "end": 112426
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 112244,
                                    "end": 112410
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112244,
                                      "end": 112249
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 112250,
                                      "end": 112410
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 112251,
                                        "end": 112409
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 112299,
                                            "end": 112339
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 112299,
                                              "end": 112313
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 112299,
                                                "end": 112303
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 112304,
                                                "end": 112313
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 112316,
                                              "end": 112330
                                            },
                                            "value": "line-through",
                                            "raw": "\"line-through\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 112333,
                                              "end": 112339
                                            },
                                            "value": "none",
                                            "raw": "\"none\""
                                          }
                                        },
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 112368,
                                            "end": 112406
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 112368,
                                              "end": 112382
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 112368,
                                                "end": 112372
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 112373,
                                                "end": 112382
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 112385,
                                              "end": 112394
                                            },
                                            "value": "#6b7280",
                                            "raw": "\"#6b7280\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 112397,
                                              "end": 112406
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
                                            "start": 112252,
                                            "end": 112278
                                          },
                                          "tail": false,
                                          "cooked": "flex: 1; text-decoration: ",
                                          "raw": "flex: 1; text-decoration: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 112357,
                                            "end": 112366
                                          },
                                          "tail": false,
                                          "cooked": "; color: ",
                                          "raw": "; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 112407,
                                            "end": 112408
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
                                  "start": 112426,
                                  "end": 112443
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 112443,
                                  "end": 112454
                                },
                                "expression": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 112444,
                                    "end": 112453
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112444,
                                      "end": 112448
                                    },
                                    "ctxt": 3,
                                    "value": "todo",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112449,
                                      "end": 112453
                                    },
                                    "value": "text"
                                  }
                                }
                              },
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 112454,
                                  "end": 112469
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 112469,
                                "end": 112476
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 112471,
                                  "end": 112475
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
                              "start": 112476,
                              "end": 112491
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 112491,
                              "end": 112769
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 112492,
                                  "end": 112496
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 112491,
                                "end": 112698
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 112513,
                                    "end": 112682
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112513,
                                      "end": 112518
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 112519,
                                      "end": 112682
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 112520,
                                        "end": 112681
                                      },
                                      "expressions": [
                                        {
                                          "type": "CallExpression",
                                          "span": {
                                            "start": 112597,
                                            "end": 112664
                                          },
                                          "ctxt": 0,
                                          "callee": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 112597,
                                              "end": 112613
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
                                                  "start": 112633,
                                                  "end": 112646
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 112633,
                                                    "end": 112637
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 112638,
                                                    "end": 112646
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
                                            "start": 112521,
                                            "end": 112595
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: ",
                                          "raw": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 112665,
                                            "end": 112680
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
                                  "start": 112698,
                                  "end": 112715
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 112715,
                                  "end": 112747
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 112716,
                                    "end": 112746
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112716,
                                      "end": 112731
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
                                          "start": 112732,
                                          "end": 112745
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 112732,
                                            "end": 112736
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 112737,
                                            "end": 112745
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
                                  "start": 112747,
                                  "end": 112762
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 112762,
                                "end": 112769
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 112764,
                                  "end": 112768
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
                              "start": 112769,
                              "end": 112784
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 112784,
                              "end": 113067
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 112785,
                                  "end": 112789
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 112784,
                                "end": 113002
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 112806,
                                    "end": 112986
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 112806,
                                      "end": 112811
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 112812,
                                      "end": 112986
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 112813,
                                        "end": 112985
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 112859,
                                            "end": 112965
                                          },
                                          "test": {
                                            "type": "BinaryExpression",
                                            "span": {
                                              "start": 112859,
                                              "end": 112901
                                            },
                                            "operator": "&&",
                                            "left": {
                                              "type": "CallExpression",
                                              "span": {
                                                "start": 112859,
                                                "end": 112882
                                              },
                                              "ctxt": 0,
                                              "callee": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 112859,
                                                  "end": 112868
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
                                                      "start": 112869,
                                                      "end": 112881
                                                    },
                                                    "object": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 112869,
                                                        "end": 112873
                                                      },
                                                      "ctxt": 3,
                                                      "value": "todo",
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 112874,
                                                        "end": 112881
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
                                                "start": 112886,
                                                "end": 112901
                                              },
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "span": {
                                                  "start": 112887,
                                                  "end": 112901
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 112887,
                                                    "end": 112891
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 112892,
                                                    "end": 112901
                                                  },
                                                  "value": "completed"
                                                }
                                              }
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 112924,
                                              "end": 112933
                                            },
                                            "value": "#dc2626",
                                            "raw": "\"#dc2626\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 112956,
                                              "end": 112965
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
                                            "start": 112814,
                                            "end": 112838
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; color: ",
                                          "raw": "font-size: 12px; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 112983,
                                            "end": 112984
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
                                  "start": 113002,
                                  "end": 113019
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 113019,
                                  "end": 113045
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 113020,
                                    "end": 113044
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 113020,
                                      "end": 113030
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
                                          "start": 113031,
                                          "end": 113043
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 113031,
                                            "end": 113035
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 113036,
                                            "end": 113043
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
                                  "start": 113045,
                                  "end": 113060
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 113060,
                                "end": 113067
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 113062,
                                  "end": 113066
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
                              "start": 113067,
                              "end": 113082
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 113082,
                              "end": 113362
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 113083,
                                  "end": 113089
                                },
                                "ctxt": 1,
                                "value": "button",
                                "optional": false
                              },
                              "span": {
                                "start": 113082,
                                "end": 113315
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 113106,
                                    "end": 113240
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 113106,
                                      "end": 113111
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 113112,
                                      "end": 113240
                                    },
                                    "value": "padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;",
                                    "raw": "\"padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 113257,
                                    "end": 113299
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 113257,
                                      "end": 113264
                                    },
                                    "value": "onClick"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 113265,
                                      "end": 113299
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 113266,
                                        "end": 113298
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 113272,
                                          "end": 113298
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 113272,
                                            "end": 113289
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
                                                "start": 113290,
                                                "end": 113297
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 113290,
                                                  "end": 113294
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 113295,
                                                  "end": 113297
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
                                  "start": 113315,
                                  "end": 113353
                                },
                                "value": "\n                刪除\n              ",
                                "raw": "\n                刪除\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 113353,
                                "end": 113362
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 113355,
                                  "end": 113361
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
                              "start": 113362,
                              "end": 113375
                            },
                            "value": "\n            ",
                            "raw": "\n            "
                          }
                        ],
                        "closing": {
                          "type": "JSXClosingElement",
                          "span": {
                            "start": 113375,
                            "end": 113381
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 113377,
                              "end": 113380
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
                          "start": 113381,
                          "end": 113392
                        },
                        "value": "\n          ",
                        "raw": "\n          "
                      }
                    ],
                    "closing": {
                      "type": "JSXClosingElement",
                      "span": {
                        "start": 113392,
                        "end": 113398
                      },
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 113394,
                          "end": 113397
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
        "start": 113436,
        "end": 113896
      },
      "operator": "&&",
      "left": {
        "type": "BinaryExpression",
        "span": {
          "start": 113436,
          "end": 113456
        },
        "operator": ">",
        "left": {
          "type": "CallExpression",
          "span": {
            "start": 113436,
            "end": 113452
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 113436,
              "end": 113450
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
            "start": 113455,
            "end": 113456
          },
          "value": 0,
          "raw": "0"
        }
      },
      "right": {
        "type": "ParenthesisExpression",
        "span": {
          "start": 113460,
          "end": 113896
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 113468,
            "end": 113890
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 113469,
                "end": 113475
              },
              "ctxt": 1,
              "value": "footer",
              "optional": false
            },
            "span": {
              "start": 113468,
              "end": 113605
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 113476,
                  "end": 113604
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 113476,
                    "end": 113481
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 113482,
                    "end": 113604
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
                "start": 113605,
                "end": 113614
              },
              "value": "\n        ",
              "raw": "\n        "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 113614,
                "end": 113874
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 113615,
                    "end": 113616
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 113614,
                  "end": 113617
                },
                "attributes": [],
                "selfClosing": false,
                "typeArguments": null
              },
              "children": [
                {
                  "type": "JSXText",
                  "span": {
                    "start": 113617,
                    "end": 113635
                  },
                  "value": "\n          總共 ",
                  "raw": "\n          總共 "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 113635,
                    "end": 113653
                  },
                  "expression": {
                    "type": "CallExpression",
                    "span": {
                      "start": 113636,
                      "end": 113652
                    },
                    "ctxt": 0,
                    "callee": {
                      "type": "Identifier",
                      "span": {
                        "start": 113636,
                        "end": 113650
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
                    "start": 113653,
                    "end": 113674
                  },
                  "value": " 個事項\n          ",
                  "raw": " 個事項\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 113674,
                    "end": 113750
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 113675,
                      "end": 113749
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 113675,
                        "end": 113696
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 113675,
                          "end": 113692
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 113675,
                            "end": 113690
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
                          "start": 113695,
                          "end": 113696
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 113699,
                        "end": 113744
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 113712,
                            "end": 113729
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 113712,
                              "end": 113727
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
                            "start": 113700,
                            "end": 113710
                          },
                          "tail": false,
                          "cooked": "，還有 ",
                          "raw": "，還有 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 113730,
                            "end": 113743
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
                        "start": 113747,
                        "end": 113749
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 113750,
                    "end": 113761
                  },
                  "value": "\n          ",
                  "raw": "\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 113761,
                    "end": 113861
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 113762,
                      "end": 113860
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 113762,
                        "end": 113786
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 113762,
                          "end": 113782
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 113762,
                            "end": 113780
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
                          "start": 113785,
                          "end": 113786
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 113801,
                        "end": 113843
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 113817,
                            "end": 113837
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 113817,
                              "end": 113835
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
                            "start": 113802,
                            "end": 113815
                          },
                          "tail": false,
                          "cooked": "，已完成 ",
                          "raw": "，已完成 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 113838,
                            "end": 113842
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
                        "start": 113858,
                        "end": 113860
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 113861,
                    "end": 113870
                  },
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 113870,
                  "end": 113874
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 113872,
                    "end": 113873
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
                "start": 113874,
                "end": 113881
              },
              "value": "\n      ",
              "raw": "\n      "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 113881,
              "end": 113890
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 113883,
                "end": 113889
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
export const lastCompiled = 1750592250077;
