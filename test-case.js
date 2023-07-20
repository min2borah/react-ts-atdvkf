import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson = {
  "width": 1280,
  "height": 720,
  "fonts":
  [],
  "pages":
  [
      {
          "id": "DI1uZN9ATy",
          "children":
          [
              {
                  "id": "-AiAahDxy7",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "topLeftPromoBackground"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 0,
                  "y": 3.559760198519368E-13,
                  "width": 1075.1050908036925,
                  "height": 60.346598202824154,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(229,1,2,1)"
                  }
              },
              {
                  "id": "YFyRly-G5P",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "promoLeftText"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 45.49422336328684,
                  "y": 10.973299101412474,
                  "width": 244.41591786338827,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "PROMOZIONE",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "RHaVIM7nxI",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "articlePriceSymbol"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 589.9999999999995,
                  "y": 250.29743749513096,
                  "width": 120,
                  "height": 145,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 120,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(226,1,10,1)",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "xzhQue4B3M",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "articleQunatityDesc"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 603.6613272311206,
                  "y": 419.54674982093997,
                  "width": 35,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "al",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "_yQZvH3Wc0",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "articleUnitPrice",
                      "articleField":
                      {
                          "name": "price2",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 3
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format currency (€)"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_in",
                                              "value": "5,6,7,8",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "eaGS3-T"
                                          },
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_equal",
                                              "value": true,
                                              "path": "$.importFields['promo']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "promo",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 5,
                                                  "dbPath": "importFields.promo"
                                              },
                                              "conditionId": "v8dh9iq"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "text",
                                      "actionType": "Article Value",
                                      "actionField":
                                      {
                                          "path": "importFields['price4']",
                                          "articleField":
                                          {
                                              "name": "price4",
                                              "parent": "importFields",
                                              "subTitle": "importFields",
                                              "dataType": 3,
                                              "dbPath": "importFields.price4"
                                          },
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "OiSKExP"
                                  }
                              ],
                              "isToHideElement": false,
                              "ruleName": "Price4 Visible 5,6,7,8",
                              "ruleId": "rule_1680020303480",
                              "elementId": "_yQZvH3Wc0",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": true,
                              "factFilters":
                              [],
                              "actionFilters":
                              [
                                  {
                                      "filterId": "2EtZ70g",
                                      "articleField":
                                      {
                                          "name": "price4",
                                          "parent": "importFields",
                                          "subTitle": "importFields",
                                          "dataType": 3,
                                          "dbPath": "importFields.price4"
                                      },
                                      "path": "importFields['price4']",
                                      "dataSource": "article_field",
                                      "function": "Format currency (€)"
                                  }
                              ]
                          }
                      ]
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 589.9999999999995,
                  "y": 444.9467498209402,
                  "width": 72,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "4,60",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "vwXcTCWmXV",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "articleDiscountDesc"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 850.6961456019772,
                  "y": 269.50550490812407,
                  "width": 243,
                  "height": 91,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "sconto",
                  "placeholder": "",
                  "fontSize": 75,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "J-yoEAtzRU",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 808.0513340520573,
                  "y": 357.60806741298813,
                  "width": 324.24326058550315,
                  "height": 143.3861531271909,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBzdHJva2U9InJnYmEoOTgsIDE5NywgMjU1LCAxKSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)",
                      "rgba(98, 197, 255, 1)": "rgba(229,1,2,1)"
                  }
              },
              {
                  "id": "GuRctpfPG8",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 852.2482782367532,
                  "y": 357.608067412985,
                  "width": 231.23908721236995,
                  "height": 143.38615312719043,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)"
                  }
              },
              {
                  "id": "Yaa9wc4mEa",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "articleField":
                      {
                          "name": "UnitMeasure",
                          "parent": "importFields",
                          "subTitle": "importFields"
                      },
                      "dataSource": "article_field",
                      "name": "UnitMeasure"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 651.004210337365,
                  "y": 419.54674982093997,
                  "width": 55,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "Kg",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "400gMQQWsu",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "€"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 666.5042103273643,
                  "y": 444.9467498209403,
                  "width": 24,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "EGlAHkiUcL",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "promoRightText"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 295.85280531827,
                  "y": 10.173299101412695,
                  "width": 112,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "fino al  ",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "8FQwHAJlaV",
                  "type": "custom_price_text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "decimalSuperScript": true,
                      "filters":
                      [
                          "Format currency (€)"
                      ],
                      "articleField":
                      {
                          "name": "price1",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 3
                      },
                      "dataSource": "article_field",
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_in",
                                              "value": "5,6,8",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "RqhiU3X"
                                          },
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_equal",
                                              "value": true,
                                              "path": "$.importFields['promo']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "promo",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 5,
                                                  "dbPath": "importFields.promo"
                                              },
                                              "conditionId": "dhaKSNh"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "text",
                                      "actionType": "Article Value",
                                      "actionField":
                                      {
                                          "path": "importFields['price2']",
                                          "articleField":
                                          {
                                              "name": "price2",
                                              "parent": "importFields",
                                              "subTitle": "importFields",
                                              "dataType": 3,
                                              "dbPath": "importFields.price2"
                                          },
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "4gN8Uu8"
                                  }
                              ],
                              "isToHideElement": false,
                              "ruleName": "Price2 Visible 5,6,8",
                              "ruleId": "rule_1680020259585",
                              "elementId": "8FQwHAJlaV",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": true,
                              "factFilters":
                              [],
                              "actionFilters":
                              [
                                  {
                                      "filterId": "_lL7Qgi",
                                      "articleField":
                                      {
                                          "name": "price2",
                                          "parent": "importFields",
                                          "subTitle": "importFields",
                                          "dataType": 3,
                                          "dbPath": "importFields.price2"
                                      },
                                      "path": "importFields['price2']",
                                      "dataSource": "article_field",
                                      "function": "Format currency (€)"
                                  }
                              ]
                          },
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_in",
                                              "value": "7",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "gDSKZ-5"
                                          },
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_equal",
                                              "value": true,
                                              "path": "$.importFields['promo']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "promo",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 5,
                                                  "dbPath": "importFields.promo"
                                              },
                                              "conditionId": "LcdJJs7"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "text",
                                      "actionType": "Article Value",
                                      "actionField":
                                      {
                                          "path": "importFields['price3']",
                                          "articleField":
                                          {
                                              "name": "price3",
                                              "parent": "importFields",
                                              "subTitle": "importFields",
                                              "dataType": 3,
                                              "dbPath": "importFields.price3"
                                          },
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "1I18dCs"
                                  }
                              ],
                              "isToHideElement": false,
                              "ruleName": "Visible 7",
                              "ruleId": "rule_1689839838273",
                              "elementId": "8FQwHAJlaV",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": true,
                              "factFilters":
                              [],
                              "actionFilters":
                              [
                                  {
                                      "filterId": "_lL7Qgi",
                                      "articleField":
                                      {
                                          "name": "price3",
                                          "parent": "importFields",
                                          "subTitle": "importFields",
                                          "dataType": 3,
                                          "dbPath": "importFields.price3"
                                      },
                                      "path": "importFields['price3']",
                                      "dataSource": "article_field",
                                      "function": "Format currency (€)"
                                  }
                              ]
                          }
                      ],
                      "name": "Prezzo vendita"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 0.9999999999995767,
                  "y": 232.90995810515687,
                  "width": 589,
                  "height": 331,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "fill": "rgba(226,1,10,1)",
                  "text": "8.00",
                  "fontSize": 278,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "lineHeight": 1,
                  "letterSpacing": 0,
                  "verticalAlign": "middle",
                  "align": "right",
                  "backgroundColor": "transparent",
                  "decimalSuperScript": false
              },
              {
                  "id": "v_f6ezmJgd",
                  "type": "custom_text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "multiLine": true,
                      "articleField":
                      {
                          "name": "itemDescription1",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 1
                      },
                      "dataSource": "article_field",
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 40.52029296130952,
                  "y": 60.909958105156605,
                  "width": 1210,
                  "height": 172,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "fill": "black",
                  "text": "PROSECCO FRIZ. CORMONS ",
                  "fontSize": 92,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "lineHeight": 1,
                  "letterSpacing": 0,
                  "backgroundColor": "transparent",
                  "verticalAlign": "middle",
                  "align": "center"
              },
              {
                  "id": "1eGwYuavxa",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 862.0485704113014,
                  "y": 263.2509184127178,
                  "width": 244,
                  "height": 91.00000000000504,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "anzichè",
                  "placeholder": "",
                  "fontSize": 70,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "pRhb5-OOWc",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "",
                      "articleField":
                      {
                          "name": "listPrice",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 3
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format currency (€)"
                      ]
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 792.9567094439162,
                  "y": 347.58001196328445,
                  "width": 235,
                  "height": 131.6422873253089,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "0,80",
                  "placeholder": "",
                  "fontSize": 78,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": " line-through",
                  "fill": "rgba(0,0,0,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "4-xEIZwwrY",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1027.9567094439158,
                  "y": 354.901155625939,
                  "width": 120,
                  "height": 117,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 96,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "2vDCh4dwxR",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 859.3181403792435,
                  "y": 265.2260566192578,
                  "width": 264,
                  "height": 91.00000000000759,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "risparmi",
                  "placeholder": "",
                  "fontSize": 70,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "WNAPQv738H",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "",
                      "articleField":
                      {
                          "name": "price3",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 3
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format currency (€)"
                      ]
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 765.8807975960949,
                  "y": 343.30446249563136,
                  "width": 260,
                  "height": 131.6422873253089,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "0,80",
                  "placeholder": "",
                  "fontSize": 78,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(0,0,0,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "Pw_HP07n9A",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1039.318140404245,
                  "y": 350.6256061582868,
                  "width": 96,
                  "height": 117,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 96,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "eCOfEMibPz",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 849.6886905064522,
                  "y": 264.76146815432594,
                  "width": 243,
                  "height": 91,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "offerta",
                  "placeholder": "",
                  "fontSize": 75,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "6qLVDszVvT",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 805.4917463217566,
                  "y": 357.3640306591982,
                  "width": 324.24326058550315,
                  "height": 143.3861531271909,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBzdHJva2U9InJnYmEoOTgsIDE5NywgMjU1LCAxKSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)",
                      "rgba(98, 197, 255, 1)": "rgba(229,1,2,1)"
                  }
              },
              {
                  "id": "dGkmMo0K9v",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 849.6886905064522,
                  "y": 357.3640306591951,
                  "width": 231.23908721236995,
                  "height": 143.38615312719043,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)"
                  }
              },
              {
                  "id": "VSbzld5L7t",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "",
                      "articleField":
                      {
                          "name": "freeField00",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 1
                      },
                      "dataSource": "article_field"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 845.3843908253027,
                  "y": 369.05352215568263,
                  "width": 235,
                  "height": 137.4997254483136,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "MxN",
                  "placeholder": "",
                  "fontSize": 110,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(0,0,0,1)",
                  "align": "center",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "qrz1m5FDWp",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 0.9999999999998102,
                  "y": -0.19999999999979123,
                  "width": 1075.1050908036923,
                  "height": 61.109958105156736,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(120,183,42,1)"
                  }
              },
              {
                  "id": "nm8turgCNP",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 45.49422336328681,
                  "y": 5.973299101412396,
                  "width": 195,
                  "height": 48.99999999999998,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "PER SOCI",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "rmkOUSOE9H",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "articleField":
                      {
                          "name": "StopDate",
                          "parent": "importFields",
                          "subTitle": "importFields"
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format Date (DD Month)"
                      ],
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 402.0623990397501,
                  "y": 10.87329910141225,
                  "width": 228,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "25 Mese",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "zLfeW9Hjtj",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 295.79646237112695,
                  "y": 10.073299101412516,
                  "width": 112,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "fino al  ",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "WPgoTSAZX-",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 867.9429437024224,
                  "y": 273.52316904941705,
                  "width": 244,
                  "height": 91.00000000000504,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "anzichè",
                  "placeholder": "",
                  "fontSize": 70,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "_qlxY-oXnu",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "",
                      "articleField":
                      {
                          "name": "listPrice",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 3
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format currency (€)"
                      ]
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 800.3246760578173,
                  "y": 364.5231690494221,
                  "width": 235,
                  "height": 131.6422873253089,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "0,80",
                  "placeholder": "",
                  "fontSize": 78,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": " line-through",
                  "fill": "rgba(0,0,0,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "S5uwOW-e2r",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1035.3246760578172,
                  "y": 371.84431271207666,
                  "width": 120,
                  "height": 117,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 96,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "bu6gnW9ggo",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": -1.465738261676023E-13,
                  "y": -0.19999999999978563,
                  "width": 1076.105090803692,
                  "height": 61.109958105156736,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(120,183,42,1)"
                  }
              },
              {
                  "id": "ErgWqvI_d0",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 44.49422336328681,
                  "y": 5.973299101412394,
                  "width": 195,
                  "height": 48.99999999999998,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "PER SOCI",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "w75CgcQqav",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "articleField":
                      {
                          "name": "StopDate",
                          "parent": "importFields",
                          "subTitle": "importFields"
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format Date (DD Month)"
                      ],
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 401.0623990397501,
                  "y": 10.87329910141225,
                  "width": 228,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "25 Mese",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "ckg4biOGxs",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 294.79646237112695,
                  "y": 10.073299101412516,
                  "width": 112,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "fino al  ",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "liZ4Uo-NIV",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 852.4702138132297,
                  "y": 277.29743749512716,
                  "width": 264,
                  "height": 91.00000000000759,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "risparmi",
                  "placeholder": "",
                  "fontSize": 70,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "D_Z7CvLzDa",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "",
                      "articleField":
                      {
                          "name": "price5",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 3
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format currency (€)"
                      ]
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 747.0328710050799,
                  "y": 363.78651004567615,
                  "width": 260,
                  "height": 131.6422873253089,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "0,80",
                  "placeholder": "",
                  "fontSize": 78,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(0,0,0,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "BnJid2o7u6",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1020.4702138132297,
                  "y": 371.1076537083313,
                  "width": 96,
                  "height": 117,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 96,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "3zKSe8XuMX",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": -2.110383052853944E-13,
                  "y": -0.19999999999978474,
                  "width": 1076.105090803692,
                  "height": 61.109958105156736,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(120,183,42,1)"
                  }
              },
              {
                  "id": "ua_o9US3ks",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 44.49422336328681,
                  "y": 5.973299101412394,
                  "width": 195,
                  "height": 48.99999999999998,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "PER SOCI",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "p0gheRguH3",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "articleField":
                      {
                          "name": "StopDate",
                          "parent": "importFields",
                          "subTitle": "importFields"
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format Date (DD Month)"
                      ],
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 401.0623990397501,
                  "y": 10.87329910141225,
                  "width": 228,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "25 Mese",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "kjGOKIyIpF",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 294.79646237112695,
                  "y": 10.073299101412516,
                  "width": 112,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "fino al  ",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "SNIWKtZC_x",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 846.2416593892164,
                  "y": 266.83090763694423,
                  "width": 243,
                  "height": 91,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "sconto",
                  "placeholder": "",
                  "fontSize": 75,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "eEMDg_kGZd",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 805.6200291014648,
                  "y": 357.8309076369473,
                  "width": 324.24326058550315,
                  "height": 143.3861531271909,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBzdHJva2U9InJnYmEoOTgsIDE5NywgMjU1LCAxKSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)",
                      "rgba(98, 197, 255, 1)": "rgba(120,183,42,1)"
                  }
              },
              {
                  "id": "1jaz2ySUY1",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 849.8169732861604,
                  "y": 357.83090763694423,
                  "width": 231.23908721236995,
                  "height": 143.38615312719043,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)"
                  }
              },
              {
                  "id": "jngUirpsmm",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "Sconto %",
                      "articleField":
                      {
                          "name": "freeField07",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 1
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Take Integer Part"
                      ]
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 826.7580666706914,
                  "y": 368.4787390341154,
                  "width": 175,
                  "height": 142.03506030022237,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "50",
                  "placeholder": "",
                  "fontSize": 94,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(0,0,0,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "PdptcaXe_Z",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1007.5870159478399,
                  "y": 365.5137993343379,
                  "width": 120,
                  "height": 145,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "%",
                  "placeholder": "",
                  "fontSize": 120,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "AXOeDhYRrB",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": -2.050931977436011E-13,
                  "y": -0.19999999999979032,
                  "width": 1076.105090803693,
                  "height": 61.109958105156736,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(120,183,42,1)"
                  }
              },
              {
                  "id": "KAlontyrbn",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 40.52029296130978,
                  "y": 6.473299101412437,
                  "width": 195,
                  "height": 48.99999999999998,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "PER SOCI",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "coq2b0tarf",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 294.79646237112695,
                  "y": 10.073299101412516,
                  "width": 112,
                  "height": 40,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "fino al  ",
                  "placeholder": "",
                  "fontSize": 32,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(255,255,255,1)",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "ukBFJngXQP",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 848.0735641077126,
                  "y": 266.80739560029883,
                  "width": 243,
                  "height": 91,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "offerta",
                  "placeholder": "",
                  "fontSize": 75,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "KPfOKS0Qtf",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 806.0687664680091,
                  "y": 357.8073956002988,
                  "width": 324.24326058550315,
                  "height": 143.3861531271909,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBzdHJva2U9InJnYmEoOTgsIDE5NywgMjU1LCAxKSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)",
                      "rgba(98, 197, 255, 1)": "rgba(120,183,42,1)"
                  }
              },
              {
                  "id": "VKuYW80Z8T",
                  "type": "svg",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 850.2657106527055,
                  "y": 357.8073956002959,
                  "width": 231.23908721236995,
                  "height": 143.38615312719043,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==",
                  "maskSrc": "",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 1,
                  "cropHeight": 1,
                  "keepRatio": false,
                  "flipX": false,
                  "flipY": false,
                  "borderColor": "black",
                  "borderSize": 0,
                  "cornerRadius": 0,
                  "colorsReplace":
                  {
                      "rgb(0, 161, 255)": "rgba(248,234,30,1)"
                  }
              },
              {
                  "id": "xHCODPb_sz",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "",
                      "articleField":
                      {
                          "name": "freeField00",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 1
                      },
                      "dataSource": "article_field"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 848.38525425889,
                  "y": 369.4968870967832,
                  "width": 235,
                  "height": 137.4997254483136,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "MxN",
                  "placeholder": "",
                  "fontSize": 110,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(0,0,0,1)",
                  "align": "center",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "6N1FNJDkjC",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 949.4517115313166,
                  "y": 250.97669633477534,
                  "width": 121,
                  "height": 145,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 120,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(226,1,10,1)",
                  "align": "left",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "cGmIpYQBIh",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 963.1130387624379,
                  "y": 420.22600866058434,
                  "width": 36,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "al",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "StVn4BHZzE",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "",
                      "articleField":
                      {
                          "name": "UnitPrice",
                          "parent": "importFields",
                          "subTitle": "importFields"
                      },
                      "dataSource": "article_field",
                      "filters":
                      [
                          "Format currency (€)"
                      ],
                      "rules":
                      []
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 949.4517115313166,
                  "y": 445.62600866058443,
                  "width": 73,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "4,60",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "right",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "5E6mLOyJWJ",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "articleField":
                      {
                          "name": "UnitMeasure",
                          "parent": "importFields",
                          "subTitle": "importFields"
                      },
                      "dataSource": "article_field",
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1010.4559218686821,
                  "y": 420.22600866058434,
                  "width": 56,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "Kg",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "m2mAhoQxnu",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1025.9559218586812,
                  "y": 445.62600866058443,
                  "width": 25,
                  "height": 30,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "€",
                  "placeholder": "",
                  "fontSize": 24,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "left",
                  "verticalAlign": "top",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "YFVACJZbn5",
                  "type": "custom_price_text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "decimalSuperScript": true,
                      "filters":
                      [
                          "Format currency (€)"
                      ],
                      "articleField":
                      {
                          "name": "price1",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 3
                      },
                      "dataSource": "article_field",
                      "rules":
                      [],
                      "name": "Prezzo vendita"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 65.7330469752656,
                  "y": 233.5892169447959,
                  "width": 884,
                  "height": 331,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "fill": "rgba(226,1,10,1)",
                  "text": "8.00",
                  "fontSize": 314,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "lineHeight": 1,
                  "letterSpacing": 0,
                  "verticalAlign": "middle",
                  "align": "right",
                  "backgroundColor": "transparent",
                  "decimalSuperScript": false
              },
              {
                  "id": "0UOO0X-cvT",
                  "type": "custom_text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "articleField":
                      {
                          "name": "freeField06",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 1
                      },
                      "dataSource": "article_field",
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "Length ===",
                                              "value": "0",
                                              "path": "$.importFields['freeField06']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "freeField06",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 1,
                                                  "dbPath": "importFields.freeField06"
                                              },
                                              "articleIndex": null,
                                              "conditionId": "yED4Drv"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field",
                                          "articleIndex": null
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "tfGUSvp"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "Discount",
                              "ruleId": "rule_1689837249542",
                              "elementId": "0UOO0X-cvT",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ],
                      "name": "Sconto %"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 835.9479053081773,
                  "y": 372.30114397658303,
                  "width": 186,
                  "height": 114,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "fill": "black",
                  "text": "Text",
                  "fontSize": 104,
                  "fontFamily": "Alata",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "lineHeight": 1,
                  "letterSpacing": 0,
                  "backgroundColor": "transparent",
                  "verticalAlign": "middle",
                  "align": "right"
              },
              {
                  "id": "PyZoP87NaW",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1010.6020282035652,
                  "y": 377.0467498209399,
                  "width": 95,
                  "height": 115,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "%",
                  "placeholder": "",
                  "fontSize": 95,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "normal",
                  "textDecoration": "",
                  "fill": "black",
                  "align": "center",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "cyc5-a8fq9",
                  "type": "image",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "Logo"
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 1113.6196206615537,
                  "y": 4.1158399783743915,
                  "width": 136.90067230975106,
                  "height": 55.672940072632166,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "/api/pimmultimedia/ImageStorage/GetImageFile?imageUniqueCode=ed83f39d-308d-46ac-b2bb-49c8235a4e81&applicationType=APP_VARIANT_VIP&companyUniqueCode=b8895f89-6d61-4ada-8df2-8e4e94e9f553",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 0.9999999999999981,
                  "cropHeight": 0.9999999999999993,
                  "cornerRadius": 0,
                  "flipX": false,
                  "flipY": false,
                  "clipSrc": "",
                  "borderColor": "black",
                  "borderSize": 0,
                  "keepRatio": false
              },
              {
                  "id": "qnarVw6Ihb",
                  "type": "custom_text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": "Stop Date",
                      "dataSource": "article_field",
                      "articleField":
                      {
                          "name": "freeField17",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 1
                      },
                      "filters":
                      [
                          "Format Date (DD Month)"
                      ]
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 409.79646238113213,
                  "y": 5.9523100146903305,
                  "width": 337,
                  "height": 50,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "fill": "rgba(252,252,252,1)",
                  "text": "",
                  "fontSize": 50,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "lineHeight": 1,
                  "letterSpacing": 0,
                  "backgroundColor": "transparent",
                  "verticalAlign": "middle",
                  "align": "left"
              }
          ],
          "width": "auto",
          "height": "auto",
          "background": "white",
          "bleed": 0,
          "custom":
          {
              "rules":
              [
                  {
                      "ruleConditions":
                      {
                          "conditions":
                          {
                              "all":
                              [
                                  {
                                      "fact": "article-fact",
                                      "operator": "isEmpty",
                                      "value": "",
                                      "path": "$.instoreFields['it-IT']['data']['imageFull']",
                                      "dataSource": "article_field",
                                      "articleField":
                                      {
                                          "name": "imageFull",
                                          "parent": "instoreFields",
                                          "subTitle": "instoreFields",
                                          "dataType": 1,
                                          "dbPath": "instoreFields.it-IT.data.imageFull"
                                      },
                                      "conditionId": "WG_cO4i"
                                  }
                              ]
                          },
                          "event":
                          {
                              "type": "true"
                          }
                      },
                      "ruleActions":
                      [
                          {
                              "elementField": "",
                              "actionType": "Plain Text",
                              "actionField":
                              {
                                  "path": "",
                                  "articleField": "",
                                  "dataSource": "article_field"
                              },
                              "actionValue": "",
                              "prefixValue": "",
                              "sufixValue": "",
                              "substringRange": "",
                              "color": "rgba(255,255,255,1)",
                              "actionId": "sGtQE1Q"
                          }
                      ],
                      "isToHideElement": false,
                      "ruleName": "",
                      "ruleId": "page_rule_1666966459740",
                      "elementId": "DI1uZN9ATy",
                      "isToApplyFactFilters": false,
                      "isToApplyActionFilters": false,
                      "factFilters":
                      [],
                      "actionFilters":
                      []
                  }
              ],
              "name": "NO IMAGE",
              "groups":
              [
                  {
                      "id": "group_1678723803050",
                      "name": "ScontoPercentuale",
                      "elements":
                      [
                          "vwXcTCWmXV",
                          "J-yoEAtzRU",
                          "GuRctpfPG8",
                          "Oif6RZshOG",
                          "0RZMwJHrK8",
                          "0UOO0X-cvT",
                          "PyZoP87NaW"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "3",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "MdnYKvZ"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "SFy3_Cq"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "ScontoPercentuale",
                              "ruleId": "rule_1678723803050",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [
                                  {
                                      "filterId": "7gl7nuz"
                                  }
                              ],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678724045857",
                      "name": "TagliaPrezzo",
                      "elements":
                      [
                          "1eGwYuavxa",
                          "pRhb5-OOWc",
                          "4-xEIZwwrY"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "1",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "l767x61"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "r44KYH0"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "TagliaPrezzo",
                              "ruleId": "rule_1678724045857",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678724229025",
                      "name": "ScontoAValore",
                      "elements":
                      [
                          "2vDCh4dwxR",
                          "WNAPQv738H",
                          "Pw_HP07n9A"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "2",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "8Du3fX3"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "VI5NvRz"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "ScontoAValore",
                              "ruleId": "rule_1678724229025",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678724425456",
                      "name": "ScontoMxN",
                      "elements":
                      [
                          "eCOfEMibPz",
                          "6qLVDszVvT",
                          "dGkmMo0K9v",
                          "VSbzld5L7t"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "4",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "sfUsqHm"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "9vRQLJp"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "ScontoMxN",
                              "ruleId": "rule_1678724425456",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678877582367",
                      "name": "PerSociTaglioPrezzo",
                      "elements":
                      [
                          "qrz1m5FDWp",
                          "nm8turgCNP",
                          "rmkOUSOE9H",
                          "zLfeW9Hjtj",
                          "WPgoTSAZX-",
                          "_qlxY-oXnu",
                          "S5uwOW-e2r"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "5",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "9vj9K5M"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "MKgMLWj"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "PerSociTaglioPrezzo",
                              "ruleId": "rule_1678877582367",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678878403391",
                      "name": "PerSociScontoAValore",
                      "elements":
                      [
                          "bu6gnW9ggo",
                          "ErgWqvI_d0",
                          "w75CgcQqav",
                          "ckg4biOGxs",
                          "liZ4Uo-NIV",
                          "D_Z7CvLzDa",
                          "BnJid2o7u6"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "6",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "2z0dOGQ"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "QSzHDKI"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "PerSociScontoAValore",
                              "ruleId": "rule_1678878403391",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678878585208",
                      "name": "PerSociScontoPercentuale",
                      "elements":
                      [
                          "3zKSe8XuMX",
                          "ua_o9US3ks",
                          "p0gheRguH3",
                          "kjGOKIyIpF",
                          "SNIWKtZC_x",
                          "eEMDg_kGZd",
                          "1jaz2ySUY1",
                          "jngUirpsmm",
                          "PdptcaXe_Z"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "7",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "PIfsRXd"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "-acW3NG"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "PerSociScontoPercentuale",
                              "ruleId": "rule_1678878585208",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678878849301",
                      "name": "PerSociMxN",
                      "elements":
                      [
                          "AXOeDhYRrB",
                          "KAlontyrbn",
                          "-yo9sdOL0F",
                          "coq2b0tarf",
                          "ukBFJngXQP",
                          "KPfOKS0Qtf",
                          "VKuYW80Z8T",
                          "xHCODPb_sz"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "8",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "FevPhof"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "h4lEgQm"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "PerSociMxN",
                              "ruleId": "rule_1678878849301",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1678879586259",
                      "name": "PriceAreaPromo",
                      "elements":
                      [
                          "RHaVIM7nxI",
                          "xzhQue4B3M",
                          "_yQZvH3Wc0",
                          "Yaa9wc4mEa",
                          "400gMQQWsu",
                          "8FQwHAJlaV"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "any":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_equal",
                                              "value": false,
                                              "path": "$.importFields['promo']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "promo",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 5,
                                                  "dbPath": "importFields.promo"
                                              },
                                              "conditionId": "KPiRxS-"
                                          },
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_equal",
                                              "value": "0",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "KIK-w8q"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "TfJd9xo"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "PriceAreaPromo",
                              "ruleId": "rule_1678879586259",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1679911046559",
                      "name": "PriceAreaNoPromo",
                      "elements":
                      [
                          "6N1FNJDkjC",
                          "cGmIpYQBIh",
                          "StVn4BHZzE",
                          "5E6mLOyJWJ",
                          "m2mAhoQxnu",
                          "YFVACJZbn5"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "any":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "",
                                              "path": "$.importFields['promo']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "promo",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 5,
                                                  "dbPath": "importFields.promo"
                                              },
                                              "conditionId": "cNUtIaM"
                                          },
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_notEqual",
                                              "value": "0",
                                              "path": "$.importFields['visible']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "visible",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 2,
                                                  "dbPath": "importFields.visible"
                                              },
                                              "conditionId": "pvqG3BE"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "jJP3rDY"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "PriceAreaNoPromo",
                              "ruleId": "rule_1679911046559",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  },
                  {
                      "id": "group_1680190071465",
                      "name": "StopDateGroup",
                      "elements":
                      [
                          "Z-uFfn7Dv4",
                          "EGlAHkiUcL",
                          "qnarVw6Ihb"
                      ],
                      "rules":
                      [
                          {
                              "ruleConditions":
                              {
                                  "conditions":
                                  {
                                      "all":
                                      [
                                          {
                                              "fact": "article-fact",
                                              "operator": "cus_equal",
                                              "value": false,
                                              "path": "$.importFields['promo']",
                                              "dataSource": "article_field",
                                              "articleField":
                                              {
                                                  "name": "promo",
                                                  "parent": "importFields",
                                                  "subTitle": "importFields",
                                                  "dataType": 5,
                                                  "dbPath": "importFields.promo"
                                              },
                                              "conditionId": "tjCdDsO"
                                          }
                                      ]
                                  },
                                  "event":
                                  {
                                      "type": "true"
                                  }
                              },
                              "ruleActions":
                              [
                                  {
                                      "elementField": "",
                                      "actionType": "Plain Text",
                                      "actionField":
                                      {
                                          "path": "",
                                          "articleField": "",
                                          "dataSource": "article_field"
                                      },
                                      "actionValue": "",
                                      "prefixValue": "",
                                      "sufixValue": "",
                                      "substringRange": "",
                                      "color": "rgba(255,255,255,1)",
                                      "actionId": "G_Etphg"
                                  }
                              ],
                              "isToHideElement": true,
                              "ruleName": "StopDateGroup",
                              "ruleId": "rule_1680190071465",
                              "isToApplyFactFilters": false,
                              "isToApplyActionFilters": false,
                              "factFilters":
                              [],
                              "actionFilters":
                              []
                          }
                      ]
                  }
              ],
              "update": 1680190071465
          },
          "duration": 15000
      },
      {
          "id": "eGrmad_C8V",
          "children":
          [
              {
                  "id": "ALrzkbSq1J",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 4.44089209850063E-14,
                  "y": 327.1569401316168,
                  "width": 1280,
                  "height": 95.56391034617235,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "BUONA SPESA",
                  "placeholder": "",
                  "fontSize": 50,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(227,1,10,1)",
                  "align": "center",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "A4o8uNzazs",
                  "type": "image",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 448.1224820227801,
                  "y": 122.35935867230071,
                  "width": 383.75502555245146,
                  "height": 156.06037705799716,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "/api/pimmultimedia/ImageStorage/GetImageFile?imageUniqueCode=ed83f39d-308d-46ac-b2bb-49c8235a4e81&applicationType=APP_VARIANT_VIP&companyUniqueCode=b8895f89-6d61-4ada-8df2-8e4e94e9f553",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 0.9999999999999979,
                  "cropHeight": 0.9999999999999993,
                  "cornerRadius": 0,
                  "flipX": false,
                  "flipY": false,
                  "clipSrc": "",
                  "borderColor": "black",
                  "borderSize": 0,
                  "keepRatio": false
              }
          ],
          "width": "auto",
          "height": "auto",
          "background": "white",
          "bleed": 0,
          "custom":
          {
              "pageType": "STATIC",
              "pageSubType": "NO_DATA",
              "name": "Articolo NON Trovato"
          },
          "duration": 15000
      },
      {
          "id": "Tcnvq2MLxt",
          "children":
          [
              {
                  "id": "5ma1GBcb99",
                  "type": "text",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 4.2632564145606E-14,
                  "y": 374.1569401316168,
                  "width": 1280,
                  "height": 95.56391034617235,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "text": "BUONA SPESA",
                  "placeholder": "",
                  "fontSize": 50,
                  "fontFamily": "Roboto",
                  "fontStyle": "normal",
                  "fontWeight": "bold",
                  "textDecoration": "",
                  "fill": "rgba(227,1,10,1)",
                  "align": "center",
                  "verticalAlign": "middle",
                  "strokeWidth": 0,
                  "stroke": "black",
                  "lineHeight": 1.2,
                  "letterSpacing": 0,
                  "backgroundEnabled": false,
                  "backgroundColor": "#7ED321",
                  "backgroundOpacity": 1,
                  "backgroundCornerRadius": 0.5,
                  "backgroundPadding": 0.5
              },
              {
                  "id": "uno0Rb9Xg-",
                  "type": "image",
                  "name": "",
                  "opacity": 1,
                  "animations":
                  [],
                  "custom":
                  {
                      "name": ""
                  },
                  "visible": true,
                  "selectable": true,
                  "removable": true,
                  "alwaysOnTop": false,
                  "showInExport": true,
                  "x": 449.1224924247691,
                  "y": 172.3593586723016,
                  "width": 383.75502555245146,
                  "height": 156.06037705799716,
                  "rotation": 0,
                  "blurEnabled": false,
                  "blurRadius": 10,
                  "brightnessEnabled": false,
                  "brightness": 0,
                  "sepiaEnabled": false,
                  "grayscaleEnabled": false,
                  "shadowEnabled": false,
                  "shadowBlur": 5,
                  "shadowOffsetX": 0,
                  "shadowOffsetY": 0,
                  "shadowColor": "black",
                  "shadowOpacity": 1,
                  "draggable": true,
                  "resizable": true,
                  "contentEditable": true,
                  "styleEditable": true,
                  "src": "/api/pimmultimedia/ImageStorage/GetImageFile?imageUniqueCode=ed83f39d-308d-46ac-b2bb-49c8235a4e81&applicationType=APP_VARIANT_VIP&companyUniqueCode=b8895f89-6d61-4ada-8df2-8e4e94e9f553",
                  "cropX": 0,
                  "cropY": 0,
                  "cropWidth": 0.9999999999999979,
                  "cropHeight": 0.9999999999999993,
                  "cornerRadius": 0,
                  "flipX": false,
                  "flipY": false,
                  "clipSrc": "",
                  "borderColor": "black",
                  "borderSize": 0,
                  "keepRatio": false
              }
          ],
          "width": "auto",
          "height": "auto",
          "background": "white",
          "bleed": 0,
          "custom":
          {
              "pageType": "STATIC",
              "pageSubType": "NO_NETWORK"
          },
          "duration": 15000
      }
  ],
  "unit": "px",
  "dpi": 72
};

var articleJson = [
   
  {
     "companyUniqueCode": "b8895f89-6d61-4ada-8df2-8e4e94e9f553",
     "shopUniqueCode": "c8e48dec-d8a4-4f8b-af15-40bec444a117",
     "masterCode": "1004455923005",
     "creationDate": "2023-06-12T09:08:02.362Z",
     "lastImportDate": "2023-07-17T18:15:14.719Z",
     "codes": [
         {
             "creationDate": "2023-06-12T09:08:02.24Z",
             "lastImportDate": "2023-07-17T18:15:13.816Z",
             "code": "8007425002154",
             "isPrimary": true
         }
     ],
     "importFields": {
         "masterCode": "1004455923005",
         "eanCode": "8007425002154",
         "reorderCode": "CALAFORTE MAREMMA DOC FRES75CL",
         "itemDescription1": "CALAFORTE MAREMMA DOC FRES75CL",
         "itemDescription2": "",
         "note": "",
         "stock": null,
         "reorderLevel": null,
         "itemsOrdered": null,
         "unitMeasure": "L",
         "size": 750,
         "vat": 22,
         "brand": "",
         "category1": "VINI TIPICI",
         "category2": "ROSSI",
         "category3": "ROSSI",
         "updateDate": "2023-07-17T00:00:00Z",
         "startDate": null,
         "stopDate": null,
         "available": 0,
         "status": 3,
         "visible": 7,
         "price": 8.2,
         "unitPrice": 10.93,
         "listPrice": 8.2,
         "unitListPrice": 10.93,
         "price1": 8.2,
         "price2": 10.93,
         "price3": 4.92,
         "price4": 6.56,
         "price5": null,
         "discount": null,
         "promo": 1,
         "freeField00": "03",
         "freeField01": "",
         "freeField02": "",
         "freeField03": "",
         "freeField04": "",
         "freeField05": "",
         "freeField06": "",
         "freeField07": "40",
         "freeField08": "6",
         "freeField09": "1",
         "freeField10": "0",
         "freeField11": "0",
         "freeField12": "W",
         "freeField13": "096",
         "freeField14": "Pz",
         "freeField15": "SOCI SISTEMA 16-31LUG - VINI TIPICI (94PDV+A+TDM)",
         "freeField16": "15-07-2023",
         "freeField17": "31-07-2023",
         "freeField18": "3",
         "freeField19": "40"
     },
     "instoreFields": null,
     "externalData": null,
     "systemData": {
         "hash": {
             "importFields": -1888767278,
             "codes": 1242711333
         },
         "importFieldsLastChangeDate": "2023-07-17T18:15:14.719Z",
         "instoreFieldsLastChangeDate": "0001-01-01T00:00:00Z"
     },
     "id": "6486e072b347c0216bba6dd1"
 }
];

var scenario = {
  scenarioUniqueCode: '43ebdbc0-acea-481e-b4b4-aac1fb0e1901',
  name: 'easter',
  description: 'test',
  state: 1,
  orderIndex: 2,
  rules: [
    {
      ruleCode: 'cee276a4-5274-4822-b09f-a268a29bfc32',
      name: 'easter',
      isToApplyFilters: false,
      filters: null,
      ruleConditions: {
        conditions: {
          all: [
            {
              fact: 'article-fact',
              operator: 'currentDateInBetweenDate',
              value: '2023-03-25T18:30:00.000Z#,#2023-04-15T11:56:02.000Z',
              path: '',
              dataSource: 'date_time',
              articleField: '',
              conditionId: 'egStQiw',
            },
          ],
        },
        event: {
          type: 'true',
        },
      },
      creationDate: '04/13/2023 11:58:34',
      lastUpdateDate: '04/13/2023 11:58:34',
    },
  ],
  templates: [
    {
      name: '',
      device: 'Tablet',
      applicationType: 'CONTENT_ON_DEMAND',
      width: 1280,
      height: 800,
      orientation: 0,
      templateUniqueCode: '5dbc3079-c7c0-4fa5-a6f0-2db9807850ba',
      creationDate: '04/13/2023 11:58:40',
      lastUpdateDate: '04/13/2023 11:58:40',
    },
  ],
  creationDate: '04/13/2023 11:58:34',
  lastUpdateDate: '04/13/2023 11:58:34',
};

var tags = ['Tag1', 'Tag2', 'Macelleria'];

export const runPreviewtest = () => {
  validateElementRules(previewJson, articleJson, tags, "vip","Europe/Rome")
    .then((resultJson) => {
      console.log(resultJson);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const runScenariotest = () => {
  validateScenarioRules(scenario, null, null)
    .then((resultJson) => {
      console.log(resultJson);
    })
    .catch((err) => {
      console.log(err);
    }); 
    
};
