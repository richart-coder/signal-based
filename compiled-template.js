
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
        "start": 520,
        "end": 536
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 520,
          "end": 534
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
        "start": 571,
        "end": 588
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 571,
          "end": 586
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
        "start": 623,
        "end": 643
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 623,
          "end": 641
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
        "start": 879,
        "end": 899
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 879,
          "end": 897
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
        "start": 1056,
        "end": 1175
      },
      "expressions": [
        {
          "type": "CallExpression",
          "span": {
            "start": 1151,
            "end": 1171
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 1151,
              "end": 1169
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
            "start": 1057,
            "end": 1149
          },
          "tail": false,
          "cooked": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: ",
          "raw": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 1172,
            "end": 1174
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
        "start": 1605,
        "end": 1618
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 1605,
          "end": 1616
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
        "start": 1639,
        "end": 1657
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
        "start": 1681,
        "end": 1702
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
        "start": 1832,
        "end": 1850
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 1832,
          "end": 1848
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
        "start": 1872,
        "end": 1892
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
        "start": 2247,
        "end": 2260
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
        "start": 2282,
        "end": 2303
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 2282,
          "end": 2301
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
        "start": 2560,
        "end": 2807
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 2660,
            "end": 2700
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 2660,
              "end": 2678
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 2660,
                "end": 2668
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 2660,
                  "end": 2666
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
                "start": 2673,
                "end": 2678
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 2681,
              "end": 2690
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 2693,
              "end": 2700
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 2736,
            "end": 2776
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 2736,
              "end": 2754
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 2736,
                "end": 2744
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 2736,
                  "end": 2742
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
                "start": 2749,
                "end": 2754
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 2757,
              "end": 2764
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 2767,
              "end": 2776
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
            "start": 2561,
            "end": 2645
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 2712,
            "end": 2721
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 2788,
            "end": 2806
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
        "start": 2828,
        "end": 2848
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
        "start": 2928,
        "end": 3181
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 3028,
            "end": 3071
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 3028,
              "end": 3049
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 3028,
                "end": 3036
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 3028,
                  "end": 3034
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
                "start": 3041,
                "end": 3049
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 3052,
              "end": 3061
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 3064,
              "end": 3071
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 3107,
            "end": 3150
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 3107,
              "end": 3128
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 3107,
                "end": 3115
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 3107,
                  "end": 3113
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
                "start": 3120,
                "end": 3128
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 3131,
              "end": 3138
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 3141,
              "end": 3150
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
            "start": 2929,
            "end": 3013
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 3083,
            "end": 3092
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 3162,
            "end": 3180
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
        "start": 3202,
        "end": 3225
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
        "start": 3258,
        "end": 3275
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 3258,
          "end": 3273
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
        "start": 3328,
        "end": 3587
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 3428,
            "end": 3474
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 3428,
              "end": 3452
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 3428,
                "end": 3436
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 3428,
                  "end": 3434
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
                "start": 3441,
                "end": 3452
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 3455,
              "end": 3464
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 3467,
              "end": 3474
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 3510,
            "end": 3556
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 3510,
              "end": 3534
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 3510,
                "end": 3518
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 3510,
                  "end": 3516
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
                "start": 3523,
                "end": 3534
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 3537,
              "end": 3544
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 3547,
              "end": 3556
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
            "start": 3329,
            "end": 3413
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 3486,
            "end": 3495
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 3568,
            "end": 3586
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
        "start": 3608,
        "end": 3634
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
        "start": 3667,
        "end": 3687
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 3667,
          "end": 3685
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
        "start": 3750,
        "end": 3934
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 3773,
            "end": 3811
          },
          "test": {
            "type": "CallExpression",
            "span": {
              "start": 3773,
              "end": 3792
            },
            "ctxt": 0,
            "callee": {
              "type": "Identifier",
              "span": {
                "start": 3773,
                "end": 3790
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
              "start": 3795,
              "end": 3802
            },
            "value": "block",
            "raw": "\"block\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 3805,
              "end": 3811
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
            "start": 3751,
            "end": 3760
          },
          "tail": false,
          "cooked": "display: ",
          "raw": "display: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 3821,
            "end": 3933
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
        "start": 3953,
        "end": 3973
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
        "start": 4109,
        "end": 6118
      },
      "test": {
        "type": "CallExpression",
        "span": {
          "start": 4109,
          "end": 4122
        },
        "ctxt": 0,
        "callee": {
          "type": "Identifier",
          "span": {
            "start": 4109,
            "end": 4120
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
          "start": 4125,
          "end": 4358
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 4135,
            "end": 4350
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 4136,
                "end": 4139
              },
              "ctxt": 1,
              "value": "div",
              "optional": false
            },
            "span": {
              "start": 4135,
              "end": 4199
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 4140,
                  "end": 4198
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 4140,
                    "end": 4145
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 4146,
                    "end": 4198
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
                "start": 4199,
                "end": 4210
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 4210,
                "end": 4256
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 4211,
                    "end": 4212
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 4210,
                  "end": 4238
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 4213,
                      "end": 4237
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 4213,
                        "end": 4218
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 4219,
                        "end": 4237
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
                    "start": 4238,
                    "end": 4244
                  },
                  "value": "沒有",
                  "raw": "沒有"
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 4244,
                    "end": 4246
                  },
                  "expression": {
                    "type": "JSXEmptyExpression",
                    "span": {
                      "start": 4245,
                      "end": 4245
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 4246,
                    "end": 4252
                  },
                  "value": "事項",
                  "raw": "事項"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 4252,
                  "end": 4256
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 4254,
                    "end": 4255
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
                "start": 4256,
                "end": 4267
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 4267,
                "end": 4335
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 4268,
                    "end": 4269
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 4267,
                  "end": 4295
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 4270,
                      "end": 4294
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 4270,
                        "end": 4275
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 4276,
                        "end": 4294
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
                    "start": 4295,
                    "end": 4331
                  },
                  "value": "新增一個待辦事項開始吧！",
                  "raw": "新增一個待辦事項開始吧！"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 4331,
                  "end": 4335
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 4333,
                    "end": 4334
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
                "start": 4335,
                "end": 4344
              },
              "value": "\n        ",
              "raw": "\n        "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 4344,
              "end": 4350
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 4346,
                "end": 4349
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
          "start": 4361,
          "end": 6118
        },
        "expression": {
          "type": "CallExpression",
          "span": {
            "start": 4371,
            "end": 6110
          },
          "ctxt": 0,
          "callee": {
            "type": "MemberExpression",
            "span": {
              "start": 4371,
              "end": 4390
            },
            "object": {
              "type": "CallExpression",
              "span": {
                "start": 4371,
                "end": 4386
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 4371,
                  "end": 4384
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
                "start": 4387,
                "end": 4390
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
                  "start": 4391,
                  "end": 6109
                },
                "ctxt": 0,
                "params": [
                  {
                    "type": "Identifier",
                    "span": {
                      "start": 4392,
                      "end": 4396
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
                    "start": 4401,
                    "end": 6109
                  },
                  "expression": {
                    "type": "JSXElement",
                    "span": {
                      "start": 4413,
                      "end": 6099
                    },
                    "opening": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 4414,
                          "end": 4417
                        },
                        "ctxt": 1,
                        "value": "div",
                        "optional": false
                      },
                      "span": {
                        "start": 4413,
                        "end": 4664
                      },
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 4430,
                            "end": 4443
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 4430,
                              "end": 4433
                            },
                            "value": "key"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 4434,
                              "end": 4443
                            },
                            "expression": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 4435,
                                "end": 4442
                              },
                              "object": {
                                "type": "Identifier",
                                "span": {
                                  "start": 4435,
                                  "end": 4439
                                },
                                "ctxt": 3,
                                "value": "todo",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 4440,
                                  "end": 4442
                                },
                                "value": "id"
                              }
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 4456,
                            "end": 4652
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 4456,
                              "end": 4461
                            },
                            "value": "style"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 4462,
                              "end": 4652
                            },
                            "expression": {
                              "type": "TemplateLiteral",
                              "span": {
                                "start": 4463,
                                "end": 4651
                              },
                              "expressions": [
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 4561,
                                    "end": 4597
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 4561,
                                      "end": 4575
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 4561,
                                        "end": 4565
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 4566,
                                        "end": 4575
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 4578,
                                      "end": 4587
                                    },
                                    "value": "#f9fafb",
                                    "raw": "\"#f9fafb\""
                                  },
                                  "alternate": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 4590,
                                      "end": 4597
                                    },
                                    "value": "white",
                                    "raw": "\"white\""
                                  }
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 4624,
                                    "end": 4648
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 4624,
                                      "end": 4638
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 4624,
                                        "end": 4628
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 4629,
                                        "end": 4638
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 4641,
                                      "end": 4644
                                    },
                                    "value": 0.7,
                                    "raw": "0.7"
                                  },
                                  "alternate": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 4647,
                                      "end": 4648
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
                                    "start": 4464,
                                    "end": 4544
                                  },
                                  "tail": false,
                                  "cooked": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
                                  "raw": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 4611,
                                    "end": 4622
                                  },
                                  "tail": false,
                                  "cooked": "; opacity: ",
                                  "raw": "; opacity: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 4649,
                                    "end": 4650
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
                          "start": 4664,
                          "end": 4677
                        },
                        "value": "\n            ",
                        "raw": "\n            "
                      },
                      {
                        "type": "JSXElement",
                        "span": {
                          "start": 4677,
                          "end": 6082
                        },
                        "opening": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 4678,
                              "end": 4681
                            },
                            "ctxt": 1,
                            "value": "div",
                            "optional": false
                          },
                          "span": {
                            "start": 4677,
                            "end": 4737
                          },
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "span": {
                                "start": 4682,
                                "end": 4736
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 4682,
                                  "end": 4687
                                },
                                "value": "style"
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 4688,
                                  "end": 4736
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
                              "start": 4737,
                              "end": 4752
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 4752,
                              "end": 4908
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 4753,
                                  "end": 4758
                                },
                                "ctxt": 1,
                                "value": "input",
                                "optional": false
                              },
                              "span": {
                                "start": 4752,
                                "end": 4908
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 4775,
                                    "end": 4790
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 4775,
                                      "end": 4779
                                    },
                                    "value": "type"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 4780,
                                      "end": 4790
                                    },
                                    "value": "checkbox",
                                    "raw": "\"checkbox\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 4807,
                                    "end": 4831
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 4807,
                                      "end": 4814
                                    },
                                    "value": "checked"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 4815,
                                      "end": 4831
                                    },
                                    "expression": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 4816,
                                        "end": 4830
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 4816,
                                          "end": 4820
                                        },
                                        "ctxt": 3,
                                        "value": "todo",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 4821,
                                          "end": 4830
                                        },
                                        "value": "completed"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 4848,
                                    "end": 4891
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 4848,
                                      "end": 4856
                                    },
                                    "value": "onChange"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 4857,
                                      "end": 4891
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 4858,
                                        "end": 4890
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 4864,
                                          "end": 4890
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 4864,
                                            "end": 4881
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
                                                "start": 4882,
                                                "end": 4889
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 4882,
                                                  "end": 4886
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 4887,
                                                  "end": 4889
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
                              "start": 4908,
                              "end": 4923
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 4923,
                              "end": 5177
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 4924,
                                  "end": 4928
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 4923,
                                "end": 5127
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 4945,
                                    "end": 5111
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 4945,
                                      "end": 4950
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 4951,
                                      "end": 5111
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 4952,
                                        "end": 5110
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 5000,
                                            "end": 5040
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 5000,
                                              "end": 5014
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 5000,
                                                "end": 5004
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 5005,
                                                "end": 5014
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 5017,
                                              "end": 5031
                                            },
                                            "value": "line-through",
                                            "raw": "\"line-through\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 5034,
                                              "end": 5040
                                            },
                                            "value": "none",
                                            "raw": "\"none\""
                                          }
                                        },
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 5069,
                                            "end": 5107
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 5069,
                                              "end": 5083
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 5069,
                                                "end": 5073
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 5074,
                                                "end": 5083
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 5086,
                                              "end": 5095
                                            },
                                            "value": "#6b7280",
                                            "raw": "\"#6b7280\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 5098,
                                              "end": 5107
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
                                            "start": 4953,
                                            "end": 4979
                                          },
                                          "tail": false,
                                          "cooked": "flex: 1; text-decoration: ",
                                          "raw": "flex: 1; text-decoration: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 5058,
                                            "end": 5067
                                          },
                                          "tail": false,
                                          "cooked": "; color: ",
                                          "raw": "; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 5108,
                                            "end": 5109
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
                                  "start": 5127,
                                  "end": 5144
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 5144,
                                  "end": 5155
                                },
                                "expression": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 5145,
                                    "end": 5154
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5145,
                                      "end": 5149
                                    },
                                    "ctxt": 3,
                                    "value": "todo",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5150,
                                      "end": 5154
                                    },
                                    "value": "text"
                                  }
                                }
                              },
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 5155,
                                  "end": 5170
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 5170,
                                "end": 5177
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 5172,
                                  "end": 5176
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
                              "start": 5177,
                              "end": 5192
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 5192,
                              "end": 5470
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 5193,
                                  "end": 5197
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 5192,
                                "end": 5399
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 5214,
                                    "end": 5383
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5214,
                                      "end": 5219
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 5220,
                                      "end": 5383
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 5221,
                                        "end": 5382
                                      },
                                      "expressions": [
                                        {
                                          "type": "CallExpression",
                                          "span": {
                                            "start": 5298,
                                            "end": 5365
                                          },
                                          "ctxt": 0,
                                          "callee": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 5298,
                                              "end": 5314
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
                                                  "start": 5334,
                                                  "end": 5347
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 5334,
                                                    "end": 5338
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 5339,
                                                    "end": 5347
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
                                            "start": 5222,
                                            "end": 5296
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: ",
                                          "raw": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 5366,
                                            "end": 5381
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
                                  "start": 5399,
                                  "end": 5416
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 5416,
                                  "end": 5448
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 5417,
                                    "end": 5447
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5417,
                                      "end": 5432
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
                                          "start": 5433,
                                          "end": 5446
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 5433,
                                            "end": 5437
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 5438,
                                            "end": 5446
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
                                  "start": 5448,
                                  "end": 5463
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 5463,
                                "end": 5470
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 5465,
                                  "end": 5469
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
                              "start": 5470,
                              "end": 5485
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 5485,
                              "end": 5768
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 5486,
                                  "end": 5490
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 5485,
                                "end": 5703
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 5507,
                                    "end": 5687
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5507,
                                      "end": 5512
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 5513,
                                      "end": 5687
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 5514,
                                        "end": 5686
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 5560,
                                            "end": 5666
                                          },
                                          "test": {
                                            "type": "BinaryExpression",
                                            "span": {
                                              "start": 5560,
                                              "end": 5602
                                            },
                                            "operator": "&&",
                                            "left": {
                                              "type": "CallExpression",
                                              "span": {
                                                "start": 5560,
                                                "end": 5583
                                              },
                                              "ctxt": 0,
                                              "callee": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 5560,
                                                  "end": 5569
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
                                                      "start": 5570,
                                                      "end": 5582
                                                    },
                                                    "object": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 5570,
                                                        "end": 5574
                                                      },
                                                      "ctxt": 3,
                                                      "value": "todo",
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 5575,
                                                        "end": 5582
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
                                                "start": 5587,
                                                "end": 5602
                                              },
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "span": {
                                                  "start": 5588,
                                                  "end": 5602
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 5588,
                                                    "end": 5592
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 5593,
                                                    "end": 5602
                                                  },
                                                  "value": "completed"
                                                }
                                              }
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 5625,
                                              "end": 5634
                                            },
                                            "value": "#dc2626",
                                            "raw": "\"#dc2626\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 5657,
                                              "end": 5666
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
                                            "start": 5515,
                                            "end": 5539
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; color: ",
                                          "raw": "font-size: 12px; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 5684,
                                            "end": 5685
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
                                  "start": 5703,
                                  "end": 5720
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 5720,
                                  "end": 5746
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 5721,
                                    "end": 5745
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5721,
                                      "end": 5731
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
                                          "start": 5732,
                                          "end": 5744
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 5732,
                                            "end": 5736
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 5737,
                                            "end": 5744
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
                                  "start": 5746,
                                  "end": 5761
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 5761,
                                "end": 5768
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 5763,
                                  "end": 5767
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
                              "start": 5768,
                              "end": 5783
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 5783,
                              "end": 6063
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 5784,
                                  "end": 5790
                                },
                                "ctxt": 1,
                                "value": "button",
                                "optional": false
                              },
                              "span": {
                                "start": 5783,
                                "end": 6016
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 5807,
                                    "end": 5941
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5807,
                                      "end": 5812
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 5813,
                                      "end": 5941
                                    },
                                    "value": "padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;",
                                    "raw": "\"padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 5958,
                                    "end": 6000
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 5958,
                                      "end": 5965
                                    },
                                    "value": "onClick"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 5966,
                                      "end": 6000
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 5967,
                                        "end": 5999
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 5973,
                                          "end": 5999
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 5973,
                                            "end": 5990
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
                                                "start": 5991,
                                                "end": 5998
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 5991,
                                                  "end": 5995
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 5996,
                                                  "end": 5998
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
                                  "start": 6016,
                                  "end": 6054
                                },
                                "value": "\n                刪除\n              ",
                                "raw": "\n                刪除\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 6054,
                                "end": 6063
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 6056,
                                  "end": 6062
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
                              "start": 6063,
                              "end": 6076
                            },
                            "value": "\n            ",
                            "raw": "\n            "
                          }
                        ],
                        "closing": {
                          "type": "JSXClosingElement",
                          "span": {
                            "start": 6076,
                            "end": 6082
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 6078,
                              "end": 6081
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
                          "start": 6082,
                          "end": 6093
                        },
                        "value": "\n          ",
                        "raw": "\n          "
                      }
                    ],
                    "closing": {
                      "type": "JSXClosingElement",
                      "span": {
                        "start": 6093,
                        "end": 6099
                      },
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 6095,
                          "end": 6098
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
        "start": 6137,
        "end": 6597
      },
      "operator": "&&",
      "left": {
        "type": "BinaryExpression",
        "span": {
          "start": 6137,
          "end": 6157
        },
        "operator": ">",
        "left": {
          "type": "CallExpression",
          "span": {
            "start": 6137,
            "end": 6153
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 6137,
              "end": 6151
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
            "start": 6156,
            "end": 6157
          },
          "value": 0,
          "raw": "0"
        }
      },
      "right": {
        "type": "ParenthesisExpression",
        "span": {
          "start": 6161,
          "end": 6597
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 6169,
            "end": 6591
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 6170,
                "end": 6176
              },
              "ctxt": 1,
              "value": "footer",
              "optional": false
            },
            "span": {
              "start": 6169,
              "end": 6306
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 6177,
                  "end": 6305
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 6177,
                    "end": 6182
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 6183,
                    "end": 6305
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
                "start": 6306,
                "end": 6315
              },
              "value": "\n        ",
              "raw": "\n        "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 6315,
                "end": 6575
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 6316,
                    "end": 6317
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 6315,
                  "end": 6318
                },
                "attributes": [],
                "selfClosing": false,
                "typeArguments": null
              },
              "children": [
                {
                  "type": "JSXText",
                  "span": {
                    "start": 6318,
                    "end": 6336
                  },
                  "value": "\n          總共 ",
                  "raw": "\n          總共 "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 6336,
                    "end": 6354
                  },
                  "expression": {
                    "type": "CallExpression",
                    "span": {
                      "start": 6337,
                      "end": 6353
                    },
                    "ctxt": 0,
                    "callee": {
                      "type": "Identifier",
                      "span": {
                        "start": 6337,
                        "end": 6351
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
                    "start": 6354,
                    "end": 6375
                  },
                  "value": " 個事項\n          ",
                  "raw": " 個事項\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 6375,
                    "end": 6451
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 6376,
                      "end": 6450
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 6376,
                        "end": 6397
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 6376,
                          "end": 6393
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 6376,
                            "end": 6391
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
                          "start": 6396,
                          "end": 6397
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 6400,
                        "end": 6445
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 6413,
                            "end": 6430
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 6413,
                              "end": 6428
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
                            "start": 6401,
                            "end": 6411
                          },
                          "tail": false,
                          "cooked": "，還有 ",
                          "raw": "，還有 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 6431,
                            "end": 6444
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
                        "start": 6448,
                        "end": 6450
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 6451,
                    "end": 6462
                  },
                  "value": "\n          ",
                  "raw": "\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 6462,
                    "end": 6562
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 6463,
                      "end": 6561
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 6463,
                        "end": 6487
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 6463,
                          "end": 6483
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 6463,
                            "end": 6481
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
                          "start": 6486,
                          "end": 6487
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 6502,
                        "end": 6544
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 6518,
                            "end": 6538
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 6518,
                              "end": 6536
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
                            "start": 6503,
                            "end": 6516
                          },
                          "tail": false,
                          "cooked": "，已完成 ",
                          "raw": "，已完成 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 6539,
                            "end": 6543
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
                        "start": 6559,
                        "end": 6561
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 6562,
                    "end": 6571
                  },
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 6571,
                  "end": 6575
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 6573,
                    "end": 6574
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
                "start": 6575,
                "end": 6582
              },
              "value": "\n      ",
              "raw": "\n      "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 6582,
              "end": 6591
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 6584,
                "end": 6590
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
export const lastCompiled = 1750641251901;
