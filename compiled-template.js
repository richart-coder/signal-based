
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
        "start": 7091,
        "end": 7107
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 7091,
          "end": 7105
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
        "start": 7142,
        "end": 7159
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 7142,
          "end": 7157
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
        "start": 7194,
        "end": 7214
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 7194,
          "end": 7212
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
        "start": 7450,
        "end": 7470
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 7450,
          "end": 7468
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
        "start": 7627,
        "end": 7746
      },
      "expressions": [
        {
          "type": "CallExpression",
          "span": {
            "start": 7722,
            "end": 7742
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 7722,
              "end": 7740
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
            "start": 7628,
            "end": 7720
          },
          "tail": false,
          "cooked": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: ",
          "raw": "background-color: #2563eb; height: 8px; border-radius: 9999px; transition: all 0.3s; width: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 7743,
            "end": 7745
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
        "start": 8176,
        "end": 8189
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 8176,
          "end": 8187
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
        "start": 8210,
        "end": 8228
      },
      "ctxt": 1,
      "value": "handleNewTodoInput",
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
        "start": 8358,
        "end": 8376
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 8358,
          "end": 8374
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
        "start": 8398,
        "end": 8418
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
        "start": 8773,
        "end": 8786
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
        "start": 8808,
        "end": 8829
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 8808,
          "end": 8827
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
        "start": 9086,
        "end": 9333
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 9186,
            "end": 9226
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 9186,
              "end": 9204
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 9186,
                "end": 9194
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 9186,
                  "end": 9192
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
                "start": 9199,
                "end": 9204
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 9207,
              "end": 9216
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 9219,
              "end": 9226
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 9262,
            "end": 9302
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 9262,
              "end": 9280
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 9262,
                "end": 9270
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 9262,
                  "end": 9268
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
                "start": 9275,
                "end": 9280
              },
              "value": "all",
              "raw": "\"all\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 9283,
              "end": 9290
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 9293,
              "end": 9302
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
            "start": 9087,
            "end": 9171
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 9238,
            "end": 9247
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 9314,
            "end": 9332
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
        "start": 9354,
        "end": 9374
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
        "start": 9454,
        "end": 9707
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 9554,
            "end": 9597
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 9554,
              "end": 9575
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 9554,
                "end": 9562
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 9554,
                  "end": 9560
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
                "start": 9567,
                "end": 9575
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 9578,
              "end": 9587
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 9590,
              "end": 9597
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 9633,
            "end": 9676
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 9633,
              "end": 9654
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 9633,
                "end": 9641
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 9633,
                  "end": 9639
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
                "start": 9646,
                "end": 9654
              },
              "value": "active",
              "raw": "\"active\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 9657,
              "end": 9664
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 9667,
              "end": 9676
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
            "start": 9455,
            "end": 9539
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 9609,
            "end": 9618
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 9688,
            "end": 9706
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
        "start": 9728,
        "end": 9751
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
        "start": 9784,
        "end": 9801
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 9784,
          "end": 9799
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
        "start": 9854,
        "end": 10113
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 9954,
            "end": 10000
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 9954,
              "end": 9978
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 9954,
                "end": 9962
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 9954,
                  "end": 9960
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
                "start": 9967,
                "end": 9978
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 9981,
              "end": 9990
            },
            "value": "#2563eb",
            "raw": "\"#2563eb\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 9993,
              "end": 10000
            },
            "value": "white",
            "raw": "\"white\""
          }
        },
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 10036,
            "end": 10082
          },
          "test": {
            "type": "BinaryExpression",
            "span": {
              "start": 10036,
              "end": 10060
            },
            "operator": "===",
            "left": {
              "type": "CallExpression",
              "span": {
                "start": 10036,
                "end": 10044
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 10036,
                  "end": 10042
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
                "start": 10049,
                "end": 10060
              },
              "value": "completed",
              "raw": "\"completed\""
            }
          },
          "consequent": {
            "type": "StringLiteral",
            "span": {
              "start": 10063,
              "end": 10070
            },
            "value": "white",
            "raw": "\"white\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 10073,
              "end": 10082
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
            "start": 9855,
            "end": 9939
          },
          "tail": false,
          "cooked": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
          "raw": "padding: 8px 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 10012,
            "end": 10021
          },
          "tail": false,
          "cooked": "; color: ",
          "raw": "; color: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 10094,
            "end": 10112
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
        "start": 10134,
        "end": 10160
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
        "start": 10193,
        "end": 10213
      },
      "ctxt": 0,
      "callee": {
        "type": "Identifier",
        "span": {
          "start": 10193,
          "end": 10211
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
        "start": 10276,
        "end": 10460
      },
      "expressions": [
        {
          "type": "ConditionalExpression",
          "span": {
            "start": 10299,
            "end": 10337
          },
          "test": {
            "type": "CallExpression",
            "span": {
              "start": 10299,
              "end": 10318
            },
            "ctxt": 0,
            "callee": {
              "type": "Identifier",
              "span": {
                "start": 10299,
                "end": 10316
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
              "start": 10321,
              "end": 10328
            },
            "value": "block",
            "raw": "\"block\""
          },
          "alternate": {
            "type": "StringLiteral",
            "span": {
              "start": 10331,
              "end": 10337
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
            "start": 10277,
            "end": 10286
          },
          "tail": false,
          "cooked": "display: ",
          "raw": "display: "
        },
        {
          "type": "TemplateElement",
          "span": {
            "start": 10347,
            "end": 10459
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
        "start": 10479,
        "end": 10499
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
        "start": 10635,
        "end": 12644
      },
      "test": {
        "type": "CallExpression",
        "span": {
          "start": 10635,
          "end": 10648
        },
        "ctxt": 0,
        "callee": {
          "type": "Identifier",
          "span": {
            "start": 10635,
            "end": 10646
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
          "start": 10651,
          "end": 10884
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 10661,
            "end": 10876
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 10662,
                "end": 10665
              },
              "ctxt": 1,
              "value": "div",
              "optional": false
            },
            "span": {
              "start": 10661,
              "end": 10725
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 10666,
                  "end": 10724
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 10666,
                    "end": 10671
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 10672,
                    "end": 10724
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
                "start": 10725,
                "end": 10736
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 10736,
                "end": 10782
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 10737,
                    "end": 10738
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 10736,
                  "end": 10764
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 10739,
                      "end": 10763
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 10739,
                        "end": 10744
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 10745,
                        "end": 10763
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
                    "start": 10764,
                    "end": 10770
                  },
                  "value": "沒有",
                  "raw": "沒有"
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 10770,
                    "end": 10772
                  },
                  "expression": {
                    "type": "JSXEmptyExpression",
                    "span": {
                      "start": 10771,
                      "end": 10771
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 10772,
                    "end": 10778
                  },
                  "value": "事項",
                  "raw": "事項"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 10778,
                  "end": 10782
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 10780,
                    "end": 10781
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
                "start": 10782,
                "end": 10793
              },
              "value": "\n          ",
              "raw": "\n          "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 10793,
                "end": 10861
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 10794,
                    "end": 10795
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 10793,
                  "end": 10821
                },
                "attributes": [
                  {
                    "type": "JSXAttribute",
                    "span": {
                      "start": 10796,
                      "end": 10820
                    },
                    "name": {
                      "type": "Identifier",
                      "span": {
                        "start": 10796,
                        "end": 10801
                      },
                      "value": "style"
                    },
                    "value": {
                      "type": "StringLiteral",
                      "span": {
                        "start": 10802,
                        "end": 10820
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
                    "start": 10821,
                    "end": 10857
                  },
                  "value": "新增一個待辦事項開始吧！",
                  "raw": "新增一個待辦事項開始吧！"
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 10857,
                  "end": 10861
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 10859,
                    "end": 10860
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
                "start": 10861,
                "end": 10870
              },
              "value": "\n        ",
              "raw": "\n        "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 10870,
              "end": 10876
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 10872,
                "end": 10875
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
          "start": 10887,
          "end": 12644
        },
        "expression": {
          "type": "CallExpression",
          "span": {
            "start": 10897,
            "end": 12636
          },
          "ctxt": 0,
          "callee": {
            "type": "MemberExpression",
            "span": {
              "start": 10897,
              "end": 10916
            },
            "object": {
              "type": "CallExpression",
              "span": {
                "start": 10897,
                "end": 10912
              },
              "ctxt": 0,
              "callee": {
                "type": "Identifier",
                "span": {
                  "start": 10897,
                  "end": 10910
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
                "start": 10913,
                "end": 10916
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
                  "start": 10917,
                  "end": 12635
                },
                "ctxt": 0,
                "params": [
                  {
                    "type": "Identifier",
                    "span": {
                      "start": 10918,
                      "end": 10922
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
                    "start": 10927,
                    "end": 12635
                  },
                  "expression": {
                    "type": "JSXElement",
                    "span": {
                      "start": 10939,
                      "end": 12625
                    },
                    "opening": {
                      "type": "JSXOpeningElement",
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 10940,
                          "end": 10943
                        },
                        "ctxt": 1,
                        "value": "div",
                        "optional": false
                      },
                      "span": {
                        "start": 10939,
                        "end": 11190
                      },
                      "attributes": [
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 10956,
                            "end": 10969
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 10956,
                              "end": 10959
                            },
                            "value": "key"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 10960,
                              "end": 10969
                            },
                            "expression": {
                              "type": "MemberExpression",
                              "span": {
                                "start": 10961,
                                "end": 10968
                              },
                              "object": {
                                "type": "Identifier",
                                "span": {
                                  "start": 10961,
                                  "end": 10965
                                },
                                "ctxt": 3,
                                "value": "todo",
                                "optional": false
                              },
                              "property": {
                                "type": "Identifier",
                                "span": {
                                  "start": 10966,
                                  "end": 10968
                                },
                                "value": "id"
                              }
                            }
                          }
                        },
                        {
                          "type": "JSXAttribute",
                          "span": {
                            "start": 10982,
                            "end": 11178
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 10982,
                              "end": 10987
                            },
                            "value": "style"
                          },
                          "value": {
                            "type": "JSXExpressionContainer",
                            "span": {
                              "start": 10988,
                              "end": 11178
                            },
                            "expression": {
                              "type": "TemplateLiteral",
                              "span": {
                                "start": 10989,
                                "end": 11177
                              },
                              "expressions": [
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 11087,
                                    "end": 11123
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 11087,
                                      "end": 11101
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 11087,
                                        "end": 11091
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 11092,
                                        "end": 11101
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 11104,
                                      "end": 11113
                                    },
                                    "value": "#f9fafb",
                                    "raw": "\"#f9fafb\""
                                  },
                                  "alternate": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 11116,
                                      "end": 11123
                                    },
                                    "value": "white",
                                    "raw": "\"white\""
                                  }
                                },
                                {
                                  "type": "ConditionalExpression",
                                  "span": {
                                    "start": 11150,
                                    "end": 11174
                                  },
                                  "test": {
                                    "type": "MemberExpression",
                                    "span": {
                                      "start": 11150,
                                      "end": 11164
                                    },
                                    "object": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 11150,
                                        "end": 11154
                                      },
                                      "ctxt": 3,
                                      "value": "todo",
                                      "optional": false
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "span": {
                                        "start": 11155,
                                        "end": 11164
                                      },
                                      "value": "completed"
                                    }
                                  },
                                  "consequent": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 11167,
                                      "end": 11170
                                    },
                                    "value": 0.7,
                                    "raw": "0.7"
                                  },
                                  "alternate": {
                                    "type": "NumericLiteral",
                                    "span": {
                                      "start": 11173,
                                      "end": 11174
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
                                    "start": 10990,
                                    "end": 11070
                                  },
                                  "tail": false,
                                  "cooked": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: ",
                                  "raw": "padding: 16px; border: 1px solid #d1d5db; border-radius: 8px; background-color: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 11137,
                                    "end": 11148
                                  },
                                  "tail": false,
                                  "cooked": "; opacity: ",
                                  "raw": "; opacity: "
                                },
                                {
                                  "type": "TemplateElement",
                                  "span": {
                                    "start": 11175,
                                    "end": 11176
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
                          "start": 11190,
                          "end": 11203
                        },
                        "value": "\n            ",
                        "raw": "\n            "
                      },
                      {
                        "type": "JSXElement",
                        "span": {
                          "start": 11203,
                          "end": 12608
                        },
                        "opening": {
                          "type": "JSXOpeningElement",
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 11204,
                              "end": 11207
                            },
                            "ctxt": 1,
                            "value": "div",
                            "optional": false
                          },
                          "span": {
                            "start": 11203,
                            "end": 11263
                          },
                          "attributes": [
                            {
                              "type": "JSXAttribute",
                              "span": {
                                "start": 11208,
                                "end": 11262
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 11208,
                                  "end": 11213
                                },
                                "value": "style"
                              },
                              "value": {
                                "type": "StringLiteral",
                                "span": {
                                  "start": 11214,
                                  "end": 11262
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
                              "start": 11263,
                              "end": 11278
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 11278,
                              "end": 11434
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 11279,
                                  "end": 11284
                                },
                                "ctxt": 1,
                                "value": "input",
                                "optional": false
                              },
                              "span": {
                                "start": 11278,
                                "end": 11434
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 11301,
                                    "end": 11316
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11301,
                                      "end": 11305
                                    },
                                    "value": "type"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 11306,
                                      "end": 11316
                                    },
                                    "value": "checkbox",
                                    "raw": "\"checkbox\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 11333,
                                    "end": 11357
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11333,
                                      "end": 11340
                                    },
                                    "value": "checked"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 11341,
                                      "end": 11357
                                    },
                                    "expression": {
                                      "type": "MemberExpression",
                                      "span": {
                                        "start": 11342,
                                        "end": 11356
                                      },
                                      "object": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 11342,
                                          "end": 11346
                                        },
                                        "ctxt": 3,
                                        "value": "todo",
                                        "optional": false
                                      },
                                      "property": {
                                        "type": "Identifier",
                                        "span": {
                                          "start": 11347,
                                          "end": 11356
                                        },
                                        "value": "completed"
                                      }
                                    }
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 11374,
                                    "end": 11417
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11374,
                                      "end": 11382
                                    },
                                    "value": "onChange"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 11383,
                                      "end": 11417
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 11384,
                                        "end": 11416
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 11390,
                                          "end": 11416
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 11390,
                                            "end": 11407
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
                                                "start": 11408,
                                                "end": 11415
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 11408,
                                                  "end": 11412
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 11413,
                                                  "end": 11415
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
                              "start": 11434,
                              "end": 11449
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 11449,
                              "end": 11703
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 11450,
                                  "end": 11454
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 11449,
                                "end": 11653
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 11471,
                                    "end": 11637
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11471,
                                      "end": 11476
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 11477,
                                      "end": 11637
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 11478,
                                        "end": 11636
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 11526,
                                            "end": 11566
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 11526,
                                              "end": 11540
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 11526,
                                                "end": 11530
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 11531,
                                                "end": 11540
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 11543,
                                              "end": 11557
                                            },
                                            "value": "line-through",
                                            "raw": "\"line-through\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 11560,
                                              "end": 11566
                                            },
                                            "value": "none",
                                            "raw": "\"none\""
                                          }
                                        },
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 11595,
                                            "end": 11633
                                          },
                                          "test": {
                                            "type": "MemberExpression",
                                            "span": {
                                              "start": 11595,
                                              "end": 11609
                                            },
                                            "object": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 11595,
                                                "end": 11599
                                              },
                                              "ctxt": 3,
                                              "value": "todo",
                                              "optional": false
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "span": {
                                                "start": 11600,
                                                "end": 11609
                                              },
                                              "value": "completed"
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 11612,
                                              "end": 11621
                                            },
                                            "value": "#6b7280",
                                            "raw": "\"#6b7280\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 11624,
                                              "end": 11633
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
                                            "start": 11479,
                                            "end": 11505
                                          },
                                          "tail": false,
                                          "cooked": "flex: 1; text-decoration: ",
                                          "raw": "flex: 1; text-decoration: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 11584,
                                            "end": 11593
                                          },
                                          "tail": false,
                                          "cooked": "; color: ",
                                          "raw": "; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 11634,
                                            "end": 11635
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
                                  "start": 11653,
                                  "end": 11670
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 11670,
                                  "end": 11681
                                },
                                "expression": {
                                  "type": "MemberExpression",
                                  "span": {
                                    "start": 11671,
                                    "end": 11680
                                  },
                                  "object": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11671,
                                      "end": 11675
                                    },
                                    "ctxt": 3,
                                    "value": "todo",
                                    "optional": false
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11676,
                                      "end": 11680
                                    },
                                    "value": "text"
                                  }
                                }
                              },
                              {
                                "type": "JSXText",
                                "span": {
                                  "start": 11681,
                                  "end": 11696
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 11696,
                                "end": 11703
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 11698,
                                  "end": 11702
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
                              "start": 11703,
                              "end": 11718
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 11718,
                              "end": 11996
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 11719,
                                  "end": 11723
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 11718,
                                "end": 11925
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 11740,
                                    "end": 11909
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11740,
                                      "end": 11745
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 11746,
                                      "end": 11909
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 11747,
                                        "end": 11908
                                      },
                                      "expressions": [
                                        {
                                          "type": "CallExpression",
                                          "span": {
                                            "start": 11824,
                                            "end": 11891
                                          },
                                          "ctxt": 0,
                                          "callee": {
                                            "type": "Identifier",
                                            "span": {
                                              "start": 11824,
                                              "end": 11840
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
                                                  "start": 11860,
                                                  "end": 11873
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 11860,
                                                    "end": 11864
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 11865,
                                                    "end": 11873
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
                                            "start": 11748,
                                            "end": 11822
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: ",
                                          "raw": "font-size: 12px; padding: 2px 8px; border-radius: 12px; background-color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 11892,
                                            "end": 11907
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
                                  "start": 11925,
                                  "end": 11942
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 11942,
                                  "end": 11974
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 11943,
                                    "end": 11973
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 11943,
                                      "end": 11958
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
                                          "start": 11959,
                                          "end": 11972
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 11959,
                                            "end": 11963
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 11964,
                                            "end": 11972
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
                                  "start": 11974,
                                  "end": 11989
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 11989,
                                "end": 11996
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 11991,
                                  "end": 11995
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
                              "start": 11996,
                              "end": 12011
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 12011,
                              "end": 12294
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 12012,
                                  "end": 12016
                                },
                                "ctxt": 1,
                                "value": "span",
                                "optional": false
                              },
                              "span": {
                                "start": 12011,
                                "end": 12229
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 12033,
                                    "end": 12213
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 12033,
                                      "end": 12038
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 12039,
                                      "end": 12213
                                    },
                                    "expression": {
                                      "type": "TemplateLiteral",
                                      "span": {
                                        "start": 12040,
                                        "end": 12212
                                      },
                                      "expressions": [
                                        {
                                          "type": "ConditionalExpression",
                                          "span": {
                                            "start": 12086,
                                            "end": 12192
                                          },
                                          "test": {
                                            "type": "BinaryExpression",
                                            "span": {
                                              "start": 12086,
                                              "end": 12128
                                            },
                                            "operator": "&&",
                                            "left": {
                                              "type": "CallExpression",
                                              "span": {
                                                "start": 12086,
                                                "end": 12109
                                              },
                                              "ctxt": 0,
                                              "callee": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 12086,
                                                  "end": 12095
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
                                                      "start": 12096,
                                                      "end": 12108
                                                    },
                                                    "object": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 12096,
                                                        "end": 12100
                                                      },
                                                      "ctxt": 3,
                                                      "value": "todo",
                                                      "optional": false
                                                    },
                                                    "property": {
                                                      "type": "Identifier",
                                                      "span": {
                                                        "start": 12101,
                                                        "end": 12108
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
                                                "start": 12113,
                                                "end": 12128
                                              },
                                              "operator": "!",
                                              "argument": {
                                                "type": "MemberExpression",
                                                "span": {
                                                  "start": 12114,
                                                  "end": 12128
                                                },
                                                "object": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 12114,
                                                    "end": 12118
                                                  },
                                                  "ctxt": 3,
                                                  "value": "todo",
                                                  "optional": false
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "span": {
                                                    "start": 12119,
                                                    "end": 12128
                                                  },
                                                  "value": "completed"
                                                }
                                              }
                                            }
                                          },
                                          "consequent": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 12151,
                                              "end": 12160
                                            },
                                            "value": "#dc2626",
                                            "raw": "\"#dc2626\""
                                          },
                                          "alternate": {
                                            "type": "StringLiteral",
                                            "span": {
                                              "start": 12183,
                                              "end": 12192
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
                                            "start": 12041,
                                            "end": 12065
                                          },
                                          "tail": false,
                                          "cooked": "font-size: 12px; color: ",
                                          "raw": "font-size: 12px; color: "
                                        },
                                        {
                                          "type": "TemplateElement",
                                          "span": {
                                            "start": 12210,
                                            "end": 12211
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
                                  "start": 12229,
                                  "end": 12246
                                },
                                "value": "\n                ",
                                "raw": "\n                "
                              },
                              {
                                "type": "JSXExpressionContainer",
                                "span": {
                                  "start": 12246,
                                  "end": 12272
                                },
                                "expression": {
                                  "type": "CallExpression",
                                  "span": {
                                    "start": 12247,
                                    "end": 12271
                                  },
                                  "ctxt": 0,
                                  "callee": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 12247,
                                      "end": 12257
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
                                          "start": 12258,
                                          "end": 12270
                                        },
                                        "object": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 12258,
                                            "end": 12262
                                          },
                                          "ctxt": 3,
                                          "value": "todo",
                                          "optional": false
                                        },
                                        "property": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 12263,
                                            "end": 12270
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
                                  "start": 12272,
                                  "end": 12287
                                },
                                "value": "\n              ",
                                "raw": "\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 12287,
                                "end": 12294
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 12289,
                                  "end": 12293
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
                              "start": 12294,
                              "end": 12309
                            },
                            "value": "\n              ",
                            "raw": "\n              "
                          },
                          {
                            "type": "JSXElement",
                            "span": {
                              "start": 12309,
                              "end": 12589
                            },
                            "opening": {
                              "type": "JSXOpeningElement",
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 12310,
                                  "end": 12316
                                },
                                "ctxt": 1,
                                "value": "button",
                                "optional": false
                              },
                              "span": {
                                "start": 12309,
                                "end": 12542
                              },
                              "attributes": [
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 12333,
                                    "end": 12467
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 12333,
                                      "end": 12338
                                    },
                                    "value": "style"
                                  },
                                  "value": {
                                    "type": "StringLiteral",
                                    "span": {
                                      "start": 12339,
                                      "end": 12467
                                    },
                                    "value": "padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;",
                                    "raw": "\"padding: 4px 8px; background-color: #dc2626; color: white; border-radius: 4px; border: none; cursor: pointer; font-size: 12px;\""
                                  }
                                },
                                {
                                  "type": "JSXAttribute",
                                  "span": {
                                    "start": 12484,
                                    "end": 12526
                                  },
                                  "name": {
                                    "type": "Identifier",
                                    "span": {
                                      "start": 12484,
                                      "end": 12491
                                    },
                                    "value": "onClick"
                                  },
                                  "value": {
                                    "type": "JSXExpressionContainer",
                                    "span": {
                                      "start": 12492,
                                      "end": 12526
                                    },
                                    "expression": {
                                      "type": "ArrowFunctionExpression",
                                      "span": {
                                        "start": 12493,
                                        "end": 12525
                                      },
                                      "ctxt": 0,
                                      "params": [],
                                      "body": {
                                        "type": "CallExpression",
                                        "span": {
                                          "start": 12499,
                                          "end": 12525
                                        },
                                        "ctxt": 0,
                                        "callee": {
                                          "type": "Identifier",
                                          "span": {
                                            "start": 12499,
                                            "end": 12516
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
                                                "start": 12517,
                                                "end": 12524
                                              },
                                              "object": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 12517,
                                                  "end": 12521
                                                },
                                                "ctxt": 3,
                                                "value": "todo",
                                                "optional": false
                                              },
                                              "property": {
                                                "type": "Identifier",
                                                "span": {
                                                  "start": 12522,
                                                  "end": 12524
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
                                  "start": 12542,
                                  "end": 12580
                                },
                                "value": "\n                刪除\n              ",
                                "raw": "\n                刪除\n              "
                              }
                            ],
                            "closing": {
                              "type": "JSXClosingElement",
                              "span": {
                                "start": 12580,
                                "end": 12589
                              },
                              "name": {
                                "type": "Identifier",
                                "span": {
                                  "start": 12582,
                                  "end": 12588
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
                              "start": 12589,
                              "end": 12602
                            },
                            "value": "\n            ",
                            "raw": "\n            "
                          }
                        ],
                        "closing": {
                          "type": "JSXClosingElement",
                          "span": {
                            "start": 12602,
                            "end": 12608
                          },
                          "name": {
                            "type": "Identifier",
                            "span": {
                              "start": 12604,
                              "end": 12607
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
                          "start": 12608,
                          "end": 12619
                        },
                        "value": "\n          ",
                        "raw": "\n          "
                      }
                    ],
                    "closing": {
                      "type": "JSXClosingElement",
                      "span": {
                        "start": 12619,
                        "end": 12625
                      },
                      "name": {
                        "type": "Identifier",
                        "span": {
                          "start": 12621,
                          "end": 12624
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
        "start": 12663,
        "end": 13123
      },
      "operator": "&&",
      "left": {
        "type": "BinaryExpression",
        "span": {
          "start": 12663,
          "end": 12683
        },
        "operator": ">",
        "left": {
          "type": "CallExpression",
          "span": {
            "start": 12663,
            "end": 12679
          },
          "ctxt": 0,
          "callee": {
            "type": "Identifier",
            "span": {
              "start": 12663,
              "end": 12677
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
            "start": 12682,
            "end": 12683
          },
          "value": 0,
          "raw": "0"
        }
      },
      "right": {
        "type": "ParenthesisExpression",
        "span": {
          "start": 12687,
          "end": 13123
        },
        "expression": {
          "type": "JSXElement",
          "span": {
            "start": 12695,
            "end": 13117
          },
          "opening": {
            "type": "JSXOpeningElement",
            "name": {
              "type": "Identifier",
              "span": {
                "start": 12696,
                "end": 12702
              },
              "ctxt": 1,
              "value": "footer",
              "optional": false
            },
            "span": {
              "start": 12695,
              "end": 12832
            },
            "attributes": [
              {
                "type": "JSXAttribute",
                "span": {
                  "start": 12703,
                  "end": 12831
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 12703,
                    "end": 12708
                  },
                  "value": "style"
                },
                "value": {
                  "type": "StringLiteral",
                  "span": {
                    "start": 12709,
                    "end": 12831
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
                "start": 12832,
                "end": 12841
              },
              "value": "\n        ",
              "raw": "\n        "
            },
            {
              "type": "JSXElement",
              "span": {
                "start": 12841,
                "end": 13101
              },
              "opening": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 12842,
                    "end": 12843
                  },
                  "ctxt": 1,
                  "value": "p",
                  "optional": false
                },
                "span": {
                  "start": 12841,
                  "end": 12844
                },
                "attributes": [],
                "selfClosing": false,
                "typeArguments": null
              },
              "children": [
                {
                  "type": "JSXText",
                  "span": {
                    "start": 12844,
                    "end": 12862
                  },
                  "value": "\n          總共 ",
                  "raw": "\n          總共 "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 12862,
                    "end": 12880
                  },
                  "expression": {
                    "type": "CallExpression",
                    "span": {
                      "start": 12863,
                      "end": 12879
                    },
                    "ctxt": 0,
                    "callee": {
                      "type": "Identifier",
                      "span": {
                        "start": 12863,
                        "end": 12877
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
                    "start": 12880,
                    "end": 12901
                  },
                  "value": " 個事項\n          ",
                  "raw": " 個事項\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 12901,
                    "end": 12977
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 12902,
                      "end": 12976
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 12902,
                        "end": 12923
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 12902,
                          "end": 12919
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 12902,
                            "end": 12917
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
                          "start": 12922,
                          "end": 12923
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 12926,
                        "end": 12971
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 12939,
                            "end": 12956
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 12939,
                              "end": 12954
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
                            "start": 12927,
                            "end": 12937
                          },
                          "tail": false,
                          "cooked": "，還有 ",
                          "raw": "，還有 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 12957,
                            "end": 12970
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
                        "start": 12974,
                        "end": 12976
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 12977,
                    "end": 12988
                  },
                  "value": "\n          ",
                  "raw": "\n          "
                },
                {
                  "type": "JSXExpressionContainer",
                  "span": {
                    "start": 12988,
                    "end": 13088
                  },
                  "expression": {
                    "type": "ConditionalExpression",
                    "span": {
                      "start": 12989,
                      "end": 13087
                    },
                    "test": {
                      "type": "BinaryExpression",
                      "span": {
                        "start": 12989,
                        "end": 13013
                      },
                      "operator": ">",
                      "left": {
                        "type": "CallExpression",
                        "span": {
                          "start": 12989,
                          "end": 13009
                        },
                        "ctxt": 0,
                        "callee": {
                          "type": "Identifier",
                          "span": {
                            "start": 12989,
                            "end": 13007
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
                          "start": 13012,
                          "end": 13013
                        },
                        "value": 0,
                        "raw": "0"
                      }
                    },
                    "consequent": {
                      "type": "TemplateLiteral",
                      "span": {
                        "start": 13028,
                        "end": 13070
                      },
                      "expressions": [
                        {
                          "type": "CallExpression",
                          "span": {
                            "start": 13044,
                            "end": 13064
                          },
                          "ctxt": 0,
                          "callee": {
                            "type": "Identifier",
                            "span": {
                              "start": 13044,
                              "end": 13062
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
                            "start": 13029,
                            "end": 13042
                          },
                          "tail": false,
                          "cooked": "，已完成 ",
                          "raw": "，已完成 "
                        },
                        {
                          "type": "TemplateElement",
                          "span": {
                            "start": 13065,
                            "end": 13069
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
                        "start": 13085,
                        "end": 13087
                      },
                      "value": "",
                      "raw": "\"\""
                    }
                  }
                },
                {
                  "type": "JSXText",
                  "span": {
                    "start": 13088,
                    "end": 13097
                  },
                  "value": "\n        ",
                  "raw": "\n        "
                }
              ],
              "closing": {
                "type": "JSXClosingElement",
                "span": {
                  "start": 13097,
                  "end": 13101
                },
                "name": {
                  "type": "Identifier",
                  "span": {
                    "start": 13099,
                    "end": 13100
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
                "start": 13101,
                "end": 13108
              },
              "value": "\n      ",
              "raw": "\n      "
            }
          ],
          "closing": {
            "type": "JSXClosingElement",
            "span": {
              "start": 13108,
              "end": 13117
            },
            "name": {
              "type": "Identifier",
              "span": {
                "start": 13110,
                "end": 13116
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
export const lastCompiled = 1750726303141;
