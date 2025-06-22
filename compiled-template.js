
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
        "start": 80495,
        "end": 80511
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 80495,
          "end": 80509
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
        "start": 80546,
        "end": 80563
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 80546,
          "end": 80561
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
        "start": 80598,
        "end": 80618
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 80598,
          "end": 80616
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
        "start": 80854,
        "end": 80874
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 80854,
          "end": 80872
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
        "start": 81031,
        "end": 81150
      },
      "expressions": [
        {
          "type": "CallExpression",
          "span": {
            "start": 81126,
            "end": 81146
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 81126,
              "end": 81144
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
            "start": 81032,
            "end": 81124
          },
          "tail": false,
          "cooked": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: ",
          "raw": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 81147,
            "end": 81149
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
        "start": 81580,
        "end": 81593
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 81580,
          "end": 81591
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
        "start": 81614,
        "end": 81632
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
        "start": 81656,
        "end": 81677
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
        "start": 81807,
        "end": 81825
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 81807,
          "end": 81823
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
        "start": 81847,
        "end": 81867
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
        "start": 82222,
        "end": 82235
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
        "start": 82257,
        "end": 82278
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 82257,
          "end": 82276
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
        "start": 82535,
        "end": 82782
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 82635,
            "end": 82675
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 82635,
              "end": 82653
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 82635,
                "end": 82643
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 82635,
                  "end": 82641
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
                "start": 82648,
                "end": 82653
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 82656,
              "end": 82665
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 82668,
              "end": 82675
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 82711,
            "end": 82751
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 82711,
              "end": 82729
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 82711,
                "end": 82719
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 82711,
                  "end": 82717
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
                "start": 82724,
                "end": 82729
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 82732,
              "end": 82739
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 82742,
              "end": 82751
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
            "start": 82536,
            "end": 82620
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 82687,
            "end": 82696
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 82763,
            "end": 82781
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
        "start": 82803,
        "end": 82823
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
        "start": 82903,
        "end": 83156
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 83003,
            "end": 83046
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 83003,
              "end": 83024
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 83003,
                "end": 83011
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 83003,
                  "end": 83009
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
                "start": 83016,
                "end": 83024
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 83027,
              "end": 83036
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 83039,
              "end": 83046
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 83082,
            "end": 83125
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 83082,
              "end": 83103
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 83082,
                "end": 83090
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 83082,
                  "end": 83088
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
                "start": 83095,
                "end": 83103
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 83106,
              "end": 83113
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 83116,
              "end": 83125
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
            "start": 82904,
            "end": 82988
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 83058,
            "end": 83067
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 83137,
            "end": 83155
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
        "start": 83177,
        "end": 83200
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
        "start": 83233,
        "end": 83250
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 83233,
          "end": 83248
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
        "start": 83303,
        "end": 83562
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 83403,
            "end": 83449
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 83403,
              "end": 83427
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 83403,
                "end": 83411
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 83403,
                  "end": 83409
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
                "start": 83416,
                "end": 83427
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 83430,
              "end": 83439
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 83442,
              "end": 83449
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 83485,
            "end": 83531
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 83485,
              "end": 83509
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 83485,
                "end": 83493
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 83485,
                  "end": 83491
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
                "start": 83498,
                "end": 83509
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 83512,
              "end": 83519
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 83522,
              "end": 83531
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
            "start": 83304,
            "end": 83388
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 83461,
            "end": 83470
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 83543,
            "end": 83561
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
        "start": 83583,
        "end": 83609
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
        "start": 83642,
        "end": 83662
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 83642,
          "end": 83660
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
        "start": 83725,
        "end": 83909
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 83748,
            "end": 83786
          },
          "test": {
            "type": "CallExpression",
            "span": {
              "start": 83748,
              "end": 83767
            },
            "ctxt": 0,
            "callee": {
              "type": "Identifier",
              "span": {
                "start": 83748,
                "end": 83765
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
              "start": 83770,
              "end": 83777
            },
            "value": "block",
            "raw": "\"block\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 83780,
              "end": 83786
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
            "start": 83726,
            "end": 83735
          },
          "tail": false,
          "cooked": "display: ",
          "raw": "display: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 83796,
            "end": 83908
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
        "start": 83928,
        "end": 83948
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
        "start": 84084,
        "end": 86093
      },
      "test": {
        "type": "CallExpression",
        "span": {
          "start": 84084,
          "end": 84097
        },
        "ctxt": 0,
        "callee": {
          "type": "Identifier",
          "span": {
            "start": 84084,
            "end": 84095
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
          "start": 84100,
          "end": 84333
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 84110,
            "end": 84325
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 84111,
                "end": 84114
              },
              "ctxt": 1,
              "value": "div",
              "optional": false
            },
            "span": {
              "start": 84110,
              "end": 84174
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 84115,
                  "end": 84173
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 84115,
                    "end": 84120
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 84121,
                    "end": 84173
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
                "start": 84174,
                "end": 84185
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 84185,
                "end": 84231
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 84186,
                    "end": 84187
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 84185,
                  "end": 84213
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 84188,
                      "end": 84212
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 84188,
                        "end": 84193
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 84194,
                        "end": 84212
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
                    "start": 84213,
                    "end": 84219
                  },
                  "value": "沒有",
                  "raw": "沒有"
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 84219,
                    "end": 84221
                  },
                  "expression": {
                    "type": "JSXEmptyExpression",
                    "span": {
                      "start": 84220,
                      "end": 84220
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 84221,
                    "end": 84227
                  },
                  "value": "事項",
                  "raw": "事項"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 84227,
                  "end": 84231
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 84229,
                    "end": 84230
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
                "start": 84231,
                "end": 84242
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 84242,
                "end": 84310
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 84243,
                    "end": 84244
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 84242,
                  "end": 84270
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 84245,
                      "end": 84269
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 84245,
                        "end": 84250
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 84251,
                        "end": 84269
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
                    "start": 84270,
                    "end": 84306
                  },
                  "value": "新增一個待辦事項開始吧！",
                  "raw": "新增一個待辦事項開始吧！"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 84306,
                  "end": 84310
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 84308,
                    "end": 84309
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
                "start": 84310,
                "end": 84319
              },
              "value": "\n        ",
              "raw": "\n        "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 84319,
              "end": 84325
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 84321,
                "end": 84324
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
          "start": 84336,
          "end": 86093
        },
        "expression": {
          "type": "CallExpression",
          "span": {
            "start": 84346,
            "end": 86085
          },
          "ctxt": 0,
          "callee": {
            "type": "MemberExpression",
            "span": {
              "start": 84346,
              "end": 84365
            },
            "object": {
              "type": "CallExpression",
              "span": {
                "start": 84346,
                "end": 84361
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 84346,
                  "end": 84359
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
                "start": 84362,
                "end": 84365
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
                  "start": 84366,
                  "end": 86084
                },
                "ctxt": 0,
                "params": [
                  {
                    "type": "Identifier",
                    "span": {
                      "start": 84367,
                      "end": 84371
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
                    "start": 84376,
                    "end": 86084
                  },
                  "expression": {
                    "type": "JSXElement",
                    "span": {
                      "start": 84388,
                      "end": 86074
                    },
                    "opening": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 84389,
                          "end": 84392
                        },
                        "ctxt": 1,
                        "value": "div",
                        "optional": false
                      },
                      "span": {
                        "start": 84388,
                        "end": 84639
                      },
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 84405,
                            "end": 84418
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 84405,
                              "end": 84408
                            },
                            "value": "key"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 84409,
                              "end": 84418
                            },
                            "expression": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 84410,
                                "end": 84417
                              },
                              "object": {
                                "type": "Identifier",
                                "span": {
                                  "start": 84410,
                                  "end": 84414
                                },
                                "ctxt": 3,
                                "value": "todo",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 84415,
                                  "end": 84417
                                },
                                "value": "id"
                              }
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 84431,
                            "end": 84627
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 84431,
                              "end": 84436
                            },
                            "value": "style"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 84437,
                              "end": 84627
                            },
                            "expression": {
                              "type": "TemplateLiteral",
                              "span": {
                                "start": 84438,
                                "end": 84626
                              },
                              "expressions": [
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 84536,
                                    "end": 84572
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 84536,
                                      "end": 84550
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 84536,
                                        "end": 84540
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 84541,
                                        "end": 84550
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 84553,
                                      "end": 84562
                                    },
                                    "value": "#f9fafb",
                                    "raw": "\"#f9fafb\""
                                  },
                                  "alternate": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 84565,
                                      "end": 84572
                                    },
                                    "value": "white",
                                    "raw": "\"white\""
                                  }
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 84599,
                                    "end": 84623
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 84599,
                                      "end": 84613
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 84599,
                                        "end": 84603
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 84604,
                                        "end": 84613
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 84616,
                                      "end": 84619
                                    },
                                    "value": 0.7,
                                    "raw": "0.7"
                                  },
                                  "alternate": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 84622,
                                      "end": 84623
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
                                    "start": 84439,
                                    "end": 84519
                                  },
                                  "tail": false,
                                  "cooked": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
                                  "raw": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 84586,
                                    "end": 84597
                                  },
                                  "tail": false,
                                  "cooked": "; opacity: ",
                                  "raw": "; opacity: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 84624,
                                    "end": 84625
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
                          "start": 84639,
                          "end": 84652
                        },
                        "value": "\n            ",
                        "raw": "\n            "
                      },
                      {
                        "type": "JSXElement",
                        "span": {
                          "start": 84652,
                          "end": 86057
                        },
                        "opening": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 84653,
                              "end": 84656
                            },
                            "ctxt": 1,
                            "value": "div",
                            "optional": false
                          },
                          "span": {
                            "start": 84652,
                            "end": 84712
                          },
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "span": {
                                "start": 84657,
                                "end": 84711
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 84657,
                                  "end": 84662
                                },
                                "value": "style"
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 84663,
                                  "end": 84711
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
                              "start": 84712,
                              "end": 84727
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 84727,
                              "end": 84883
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 84728,
                                  "end": 84733
                                },
                                "ctxt": 1,
                                "value": "input",
                                "optional": false
                              },
                              "span": {
                                "start": 84727,
                                "end": 84883
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 84750,
                                    "end": 84765
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 84750,
                                      "end": 84754
                                    },
                                    "value": "type"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 84755,
                                      "end": 84765
                                    },
                                    "value": "checkbox",
                                    "raw": "\"checkbox\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 84782,
                                    "end": 84806
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 84782,
                                      "end": 84789
                                    },
                                    "value": "checked"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 84790,
                                      "end": 84806
                                    },
                                    "expression": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 84791,
                                        "end": 84805
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 84791,
                                          "end": 84795
                                        },
                                        "ctxt": 3,
                                        "value": "todo",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 84796,
                                          "end": 84805
                                        },
                                        "value": "completed"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 84823,
                                    "end": 84866
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 84823,
                                      "end": 84831
                                    },
                                    "value": "onChange"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 84832,
                                      "end": 84866
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 84833,
                                        "end": 84865
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 84839,
                                          "end": 84865
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 84839,
                                            "end": 84856
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
                                                "start": 84857,
                                                "end": 84864
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 84857,
                                                  "end": 84861
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 84862,
                                                  "end": 84864
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
                              "start": 84883,
                              "end": 84898
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 84898,
                              "end": 85152
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 84899,
                                  "end": 84903
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 84898,
                                "end": 85102
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 84920,
                                    "end": 85086
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 84920,
                                      "end": 84925
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 84926,
                                      "end": 85086
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 84927,
                                        "end": 85085
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 84975,
                                            "end": 85015
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 84975,
                                              "end": 84989
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 84975,
                                                "end": 84979
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 84980,
                                                "end": 84989
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 84992,
                                              "end": 85006
                                            },
                                            "value": "line-through",
                                            "raw": "\"line-through\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 85009,
                                              "end": 85015
                                            },
                                            "value": "none",
                                            "raw": "\"none\""
                                          }
                                        },
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 85044,
                                            "end": 85082
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 85044,
                                              "end": 85058
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 85044,
                                                "end": 85048
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 85049,
                                                "end": 85058
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 85061,
                                              "end": 85070
                                            },
                                            "value": "#6b7280",
                                            "raw": "\"#6b7280\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 85073,
                                              "end": 85082
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
                                            "start": 84928,
                                            "end": 84954
                                          },
                                          "tail": false,
                                          "cooked": "flex: 1; text-decoration: ",
                                          "raw": "flex: 1; text-decoration: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 85033,
                                            "end": 85042
                                          },
                                          "tail": false,
                                          "cooked": "; color: ",
                                          "raw": "; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 85083,
                                            "end": 85084
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
                                  "start": 85102,
                                  "end": 85119
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 85119,
                                  "end": 85130
                                },
                                "expression": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 85120,
                                    "end": 85129
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85120,
                                      "end": 85124
                                    },
                                    "ctxt": 3,
                                    "value": "todo",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85125,
                                      "end": 85129
                                    },
                                    "value": "text"
                                  }
                                }
                              },
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 85130,
                                  "end": 85145
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 85145,
                                "end": 85152
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 85147,
                                  "end": 85151
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
                              "start": 85152,
                              "end": 85167
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 85167,
                              "end": 85445
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 85168,
                                  "end": 85172
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 85167,
                                "end": 85374
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 85189,
                                    "end": 85358
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85189,
                                      "end": 85194
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 85195,
                                      "end": 85358
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 85196,
                                        "end": 85357
                                      },
                                      "expressions": [
                                        {
                                          "type": "CallExpression",
                                          "span": {
                                            "start": 85273,
                                            "end": 85340
                                          },
                                          "ctxt": 0,
                                          "callee": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 85273,
                                              "end": 85289
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
                                                  "start": 85309,
                                                  "end": 85322
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 85309,
                                                    "end": 85313
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 85314,
                                                    "end": 85322
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
                                            "start": 85197,
                                            "end": 85271
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: ",
                                          "raw": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 85341,
                                            "end": 85356
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
                                  "start": 85374,
                                  "end": 85391
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 85391,
                                  "end": 85423
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 85392,
                                    "end": 85422
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85392,
                                      "end": 85407
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
                                          "start": 85408,
                                          "end": 85421
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 85408,
                                            "end": 85412
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 85413,
                                            "end": 85421
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
                                  "start": 85423,
                                  "end": 85438
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 85438,
                                "end": 85445
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 85440,
                                  "end": 85444
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
                              "start": 85445,
                              "end": 85460
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 85460,
                              "end": 85743
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 85461,
                                  "end": 85465
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 85460,
                                "end": 85678
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 85482,
                                    "end": 85662
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85482,
                                      "end": 85487
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 85488,
                                      "end": 85662
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 85489,
                                        "end": 85661
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 85535,
                                            "end": 85641
                                          },
                                          "test": {
                                            "type": "BinaryExpression",
                                            "span": {
                                              "start": 85535,
                                              "end": 85577
                                            },
                                            "operator": "&&",
                                            "left": {
                                              "type": "CallExpression",
                                              "span": {
                                                "start": 85535,
                                                "end": 85558
                                              },
                                              "ctxt": 0,
                                              "callee": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 85535,
                                                  "end": 85544
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
                                                      "start": 85545,
                                                      "end": 85557
                                                    },
                                                    "object": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 85545,
                                                        "end": 85549
                                                      },
                                                      "ctxt": 3,
                                                      "value": "todo",
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 85550,
                                                        "end": 85557
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
                                                "start": 85562,
                                                "end": 85577
                                              },
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "span": {
                                                  "start": 85563,
                                                  "end": 85577
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 85563,
                                                    "end": 85567
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 85568,
                                                    "end": 85577
                                                  },
                                                  "value": "completed"
                                                }
                                              }
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 85600,
                                              "end": 85609
                                            },
                                            "value": "#dc2626",
                                            "raw": "\"#dc2626\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 85632,
                                              "end": 85641
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
                                            "start": 85490,
                                            "end": 85514
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; color: ",
                                          "raw": "font-size: 12px; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 85659,
                                            "end": 85660
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
                                  "start": 85678,
                                  "end": 85695
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 85695,
                                  "end": 85721
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 85696,
                                    "end": 85720
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85696,
                                      "end": 85706
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
                                          "start": 85707,
                                          "end": 85719
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 85707,
                                            "end": 85711
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 85712,
                                            "end": 85719
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
                                  "start": 85721,
                                  "end": 85736
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 85736,
                                "end": 85743
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 85738,
                                  "end": 85742
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
                              "start": 85743,
                              "end": 85758
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 85758,
                              "end": 86038
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 85759,
                                  "end": 85765
                                },
                                "ctxt": 1,
                                "value": "button",
                                "optional": false
                              },
                              "span": {
                                "start": 85758,
                                "end": 85991
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 85782,
                                    "end": 85916
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85782,
                                      "end": 85787
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 85788,
                                      "end": 85916
                                    },
                                    "value": "padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;",
                                    "raw": "\"padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 85933,
                                    "end": 85975
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 85933,
                                      "end": 85940
                                    },
                                    "value": "onClick"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 85941,
                                      "end": 85975
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 85942,
                                        "end": 85974
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 85948,
                                          "end": 85974
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 85948,
                                            "end": 85965
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
                                                "start": 85966,
                                                "end": 85973
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 85966,
                                                  "end": 85970
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 85971,
                                                  "end": 85973
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
                                  "start": 85991,
                                  "end": 86029
                                },
                                "value": "\n                刪除\n              ",
                                "raw": "\n                刪除\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 86029,
                                "end": 86038
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 86031,
                                  "end": 86037
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
                              "start": 86038,
                              "end": 86051
                            },
                            "value": "\n            ",
                            "raw": "\n            "
                          }
                        ],
                        "closing": {
                          "type": "JSXClosingElement",
                          "span": {
                            "start": 86051,
                            "end": 86057
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 86053,
                              "end": 86056
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
                          "start": 86057,
                          "end": 86068
                        },
                        "value": "\n          ",
                        "raw": "\n          "
                      }
                    ],
                    "closing": {
                      "type": "JSXClosingElement",
                      "span": {
                        "start": 86068,
                        "end": 86074
                      },
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 86070,
                          "end": 86073
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
        "start": 86112,
        "end": 86572
      },
      "operator": "&&",
      "left": {
        "type": "BinaryExpression",
        "span": {
          "start": 86112,
          "end": 86132
        },
        "operator": ">",
        "left": {
          "type": "CallExpression",
          "span": {
            "start": 86112,
            "end": 86128
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 86112,
              "end": 86126
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
            "start": 86131,
            "end": 86132
          },
          "value": 0,
          "raw": "0"
        }
      },
      "right": {
        "type": "ParenthesisExpression",
        "span": {
          "start": 86136,
          "end": 86572
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 86144,
            "end": 86566
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 86145,
                "end": 86151
              },
              "ctxt": 1,
              "value": "footer",
              "optional": false
            },
            "span": {
              "start": 86144,
              "end": 86281
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 86152,
                  "end": 86280
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 86152,
                    "end": 86157
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 86158,
                    "end": 86280
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
                "start": 86281,
                "end": 86290
              },
              "value": "\n        ",
              "raw": "\n        "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 86290,
                "end": 86550
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 86291,
                    "end": 86292
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 86290,
                  "end": 86293
                },
                "attributes": [],
                "selfClosing": false,
                "typeArguments": null
              },
              "children": [
                {
                  "type": "JSXText",
                  "span": {
                    "start": 86293,
                    "end": 86311
                  },
                  "value": "\n          總共 ",
                  "raw": "\n          總共 "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 86311,
                    "end": 86329
                  },
                  "expression": {
                    "type": "CallExpression",
                    "span": {
                      "start": 86312,
                      "end": 86328
                    },
                    "ctxt": 0,
                    "callee": {
                      "type": "Identifier",
                      "span": {
                        "start": 86312,
                        "end": 86326
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
                    "start": 86329,
                    "end": 86350
                  },
                  "value": " 個事項\n          ",
                  "raw": " 個事項\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 86350,
                    "end": 86426
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 86351,
                      "end": 86425
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 86351,
                        "end": 86372
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 86351,
                          "end": 86368
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 86351,
                            "end": 86366
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
                          "start": 86371,
                          "end": 86372
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 86375,
                        "end": 86420
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 86388,
                            "end": 86405
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 86388,
                              "end": 86403
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
                            "start": 86376,
                            "end": 86386
                          },
                          "tail": false,
                          "cooked": "，還有 ",
                          "raw": "，還有 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 86406,
                            "end": 86419
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
                        "start": 86423,
                        "end": 86425
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 86426,
                    "end": 86437
                  },
                  "value": "\n          ",
                  "raw": "\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 86437,
                    "end": 86537
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 86438,
                      "end": 86536
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 86438,
                        "end": 86462
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 86438,
                          "end": 86458
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 86438,
                            "end": 86456
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
                          "start": 86461,
                          "end": 86462
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 86477,
                        "end": 86519
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 86493,
                            "end": 86513
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 86493,
                              "end": 86511
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
                            "start": 86478,
                            "end": 86491
                          },
                          "tail": false,
                          "cooked": "，已完成 ",
                          "raw": "，已完成 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 86514,
                            "end": 86518
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
                        "start": 86534,
                        "end": 86536
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 86537,
                    "end": 86546
                  },
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 86546,
                  "end": 86550
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 86548,
                    "end": 86549
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
                "start": 86550,
                "end": 86557
              },
              "value": "\n      ",
              "raw": "\n      "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 86557,
              "end": 86566
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 86559,
                "end": 86565
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
export const lastCompiled = 1750588661698;
