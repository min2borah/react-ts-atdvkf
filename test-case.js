import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson = {
  "width": 400,
  "height": 600,
  "fonts": [],
  "pages": [
    {
      "id": "TnCU0f48zL",
      "children": [
        {
          "id": "ujUtzIh4n1",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": {
              "name": "itemDescription1",
              "aliasName": "itemDescription1",
              "parent": "importFields",
              "subTitle": "importFields",
              "dataType": 1
            }
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 22.00000000000003,
          "y": 273.58968764800727,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 4.999999999999995,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Brioss Albicocca e Cereali",
          "placeholder": "",
          "fontSize": 35,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.02,
          "letterSpacing": 0,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "QkbVA87n_L",
          "type": "text",
          "name": "text-2",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": {
              "name": "brand",
              "aliasName": "brand",
              "parent": "importFields",
              "subTitle": "importFields",
              "dataType": 1
            }
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 80,
          "y": 358.58968764800636,
          "width": 191,
          "height": 24,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "FERRERO",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "center",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "ImRH1jTBk4",
          "type": "custom_image",
          "name": "custom_image-1",
          "opacity": 1,
          "custom": {
            "articleField": {
              "parent": "instoreFields",
              "name": "imageFull",
              "aliasName": "imageFull",
              "subTitle": "instoreFields",
              "dataType": 1
            },
            "dataSource": "article_field",
            "name": "article_image"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 27.000000000001506,
          "y": 52.00000000000001,
          "width": 293,
          "height": 180,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "backgroundColor": "transparent",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0
        }
      ],
      "width": 350,
      "height": 400,
      "background": "white",
      "bleed": 0,
      "duration": 5000
    },
    {
      "id": "MpkF7UP4cQ",
      "children": [
        {
          "id": "4WrqHuxtwt",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "rO5wNvlMGFojt4MPtTq1B",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(209,4,30,1)",
                    "actionId": "XZRH8MXXerz2qydaDyV5z"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "no_allerg",
                "ruleId": "rule_1769624583689",
                "elementId": "4WrqHuxtwt",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0,
          "y": 0,
          "width": 349.9999999999994,
          "height": 234,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "Xv7OTASylv",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "p2gj9hKgEgdRNl70Wna9U",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "ZGU8VEIr2xj2o7uwr-Y42"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "no_allerg",
                "ruleId": "rule_1769624647954",
                "elementId": "Xv7OTASylv",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "iDLXuQp9cG",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 60.250000000000455,
          "y": 123.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "CaHKFK5-1u",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 201.74999999999974,
          "y": 123.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "d4cmyWCKr6",
          "type": "image",
          "name": "image-2",
          "opacity": 1,
          "custom": {
            "name": "glutine-no-allergen",
            "imageName": "glutine-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "tK63glqVYBUJQAPGk9ajU",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "j3Rqk7_VQdWCfy4VbaE78"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "non_allg_glutine",
                "ruleId": "rule_1769710313114",
                "elementId": "8bAm3Mp4n5",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 80.59740110549531,
          "y": 138.3542387394141,
          "width": 47.34221259493244,
          "height": 56.308540737912104,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=ff0ee74883514fe295f9c81c60d75c38.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 0.9999999999999993,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "IJFpIFeczl",
          "type": "image",
          "name": "image-3",
          "opacity": 1,
          "custom": {
            "imageName": "glutine-allergen.png",
            "imageSize": 6,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "name": "glutine-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 80.59740110549605,
          "y": 138,
          "width": 47.34221259493184,
          "height": 56.30854073791135,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=c148f9f57e004f2ebe827dca026d9101.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 0.9999999999999998,
          "cropHeight": 0.9999999999999997,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "qTgZTL0Drc",
          "type": "image",
          "name": "image-5",
          "opacity": 1,
          "custom": {
            "imageName": "uova-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "vTev2Eq3Kka-1yAIegOKQ",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "fi0uAV52syydc1-G6vqqt"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_non_allg",
                "ruleId": "rule_1769710842095",
                "elementId": "vZ3wZFva7A",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 221,
          "y": 142,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0026dd4557cb49d8b6314360d4cc6063.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "P6RVRs9xlo",
          "type": "image",
          "name": "image-4",
          "opacity": 1,
          "custom": {
            "imageName": "uova-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.80899026277524,
          "y": 141.99999999999898,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10fe96ad4c6741cab0125f4cc91f575c.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 0.9999999999999994,
          "cropHeight": 0.9999999999999994,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 234,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00030004",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "YmvTaoFCyiX4dJur0oQ7y",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "MpkF7UP4cQ",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "glutine_selected",
            "elements": [
              "iDLXuQp9cG",
              "GefnmQNqrS",
              "IJFpIFeczl"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "u9EQCwOdFIKceT4M0z-2w",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "tCCDXLqEx7M4b1peMxc1Z"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "glutine_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769625636781",
            "name": "uova_selected",
            "elements": [
              "CaHKFK5-1u",
              "ZhRZdFpI2L",
              "XFq6ksm1i1",
              "P6RVRs9xlo"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "Tq1B4O_HuLWvkFozgmqRi",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "iP2V593TeZALxYwwaOQmW"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_uova",
                "ruleId": "rule_1769625636781",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "eP8pHiB1erXw7isUVC37n",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1769710013791
      },
      "duration": 5000
    },
    {
      "id": "Gw4rOIfXxc",
      "children": [
        {
          "id": "2uTFUu8XHF",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "rO5wNvlMGFojt4MPtTq1B",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(209,4,30,1)",
                    "actionId": "XZRH8MXXerz2qydaDyV5z"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "no_allerg",
                "ruleId": "rule_1769624583689",
                "elementId": "4WrqHuxtwt",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0,
          "y": 0,
          "width": 349.9999999999994,
          "height": 234,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "RZc2gfvuul",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "p2gj9hKgEgdRNl70Wna9U",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "ZGU8VEIr2xj2o7uwr-Y42"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "no_allerg",
                "ruleId": "rule_1769624647954",
                "elementId": "Xv7OTASylv",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "6zKt8UJlh9",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 60.250000000000455,
          "y": 123.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "lxY-CKUGld",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 201.74999999999974,
          "y": 123.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "iibgNtJ10F",
          "type": "image",
          "name": "image-6",
          "opacity": 1,
          "custom": {
            "imageName": "soia-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000045,
          "y": 143.99999999999903,
          "width": 50,
          "height": 47,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10ff4689dbb841aaa0c6636116dd156b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999997,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "SlNaCigiRY",
          "type": "image",
          "name": "image-7",
          "opacity": 1,
          "custom": {
            "imageName": "soia-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "6vYjw_fhJYWSWLIzKuF8A",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "xVqPs_97mUwhIkkR7JOjl"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_allergen",
                "ruleId": "rule_1783436650819",
                "elementId": "SlNaCigiRY",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000045,
          "y": 143.5425774529105,
          "width": 50,
          "height": 47,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=920564a63817452099337954174ba80a.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "644O5zh2XP",
          "type": "image",
          "name": "image-8",
          "opacity": 1,
          "custom": {
            "imageName": "guscio-allergen.png",
            "imageSize": 7,
            "imageWidth": 144,
            "imageHeight": 159,
            "imageType": "image/png",
            "name": "guscio-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.7499999999996,
          "y": 139.54257745291048,
          "width": 50,
          "height": 55,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=5b3588d940b9401996950b8dee843f35.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999988,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "St0gYHKG8m",
          "type": "image",
          "name": "image-9",
          "opacity": 1,
          "custom": {
            "imageName": "guscio.png",
            "imageSize": 1,
            "imageWidth": 144,
            "imageHeight": 159,
            "imageType": "image/png",
            "name": "guscio",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "frutta guscio",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "GyaLiX9qjGglc6kkb2ZRD",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "7t3w_LOYtl9CGpls4G5fk"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "frutta_guscio_allergen",
                "ruleId": "rule_1783436922542",
                "elementId": "St0gYHKG8m",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.74999999999977,
          "y": 139.5425774529105,
          "width": 50,
          "height": 55,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=f954045c0b094a5f9a4bfb9f1682ac78.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 234,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000714",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "25g-_pKF1w84olFwxTUB7",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "Gw4rOIfXxc",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "soia_selected",
            "elements": [
              "6zKt8UJlh9",
              null,
              "kn10OYv3GD",
              "iibgNtJ10F"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "ziwR1QI6A3gu1bUt2CIKB",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "1_WLhZEeAWuLg4qfRGsjX"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769625636781",
            "name": "frutta_gusico_selected",
            "elements": [
              "lxY-CKUGld",
              null,
              null,
              "TWlh0t5CzZ",
              "644O5zh2XP"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "frutta guscio",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "7xJl-r7gGJHe8t5stkwBu",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "4CTOA0mZNHqDTMX-_2cl4"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "frutta_guscio_allg",
                "ruleId": "rule_1769625636781",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "eP8pHiB1erXw7isUVC37n",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783436822188
      },
      "duration": 5000
    },
    {
      "id": "3t7bVDgLjh",
      "children": [
        {
          "id": "04TLj8cwMy",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "IOOuClOLK4lb6HSe3M3Og",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "0qwJutd7hTyOXzp2ve6kV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "04TLj8cwMy",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0,
          "y": 0,
          "width": 349.9999999999994,
          "height": 340,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "6p6j3cLN9k",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "ABqNdjoEpjfMuM1IK46kn",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "ebi2fLe4JsECiTp4nIVOV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "6p6j3cLN9k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "lqRkfBlsht",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 60.250000000000455,
          "y": 232.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "tlZpXqtqFB",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 201.74999999999974,
          "y": 232.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "mVSinGpQhA",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23.00000000000003,
          "y": 122.88796664235826,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "n0T1sp8Fpf",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 132,
          "y": 122.88796664235821,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "h9cQtyHYuv",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 241.0000000000001,
          "y": 122.88796664235824,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "3aOTEax0Np",
          "type": "image",
          "name": "image-4",
          "opacity": 1,
          "custom": {
            "imageName": "glutine-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "name": "glutine-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "zwJpQb7PJGM9EQgL96k9_",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "cxbr26AatxNWT48zSA3ma"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "non_allg_glutine",
                "ruleId": "rule_1769711125254",
                "elementId": "3aOTEax0Np",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 43.47612378284654,
          "y": 138.88796664235826,
          "width": 47,
          "height": 56,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=ff0ee74883514fe295f9c81c60d75c38.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "f4aG7rvVFA",
          "type": "image",
          "name": "image-5",
          "opacity": 1,
          "custom": {
            "imageName": "glutine-allergen.png",
            "imageSize": 6,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "name": "glutine-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 43,
          "y": 139,
          "width": 47,
          "height": 56,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=c148f9f57e004f2ebe827dca026d9101.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "X6Y9V8seCo",
          "type": "image",
          "name": "image-6",
          "opacity": 1,
          "custom": {
            "imageName": "uova-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "2yf0FCxVNtvrKffVgJt_F",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "3TIdz5mz9-i1JnmDBf0pm"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "uova_selected",
                "ruleId": "rule_1769711689429",
                "elementId": "X6Y9V8seCo",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.24999999999977,
          "y": 250.5425774529105,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0026dd4557cb49d8b6314360d4cc6063.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "vCoGRp52f3",
          "type": "image",
          "name": "image-7",
          "opacity": 1,
          "custom": {
            "imageName": "uova-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220,
          "y": 251,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10fe96ad4c6741cab0125f4cc91f575c.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "6XrRnkyB6k",
          "type": "image",
          "name": "image-8",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "fQRD1LxXz7CtChlFY5RwD",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "E5SoFdpHs7W-F39lZOdIe"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "latt_sele",
                "ruleId": "rule_1769711858484",
                "elementId": "6XrRnkyB6k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000048,
          "y": 251.54257745291056,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=bf08f69d84814dd18b798a711a2771e5.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "IwSnoIRxpV",
          "type": "image",
          "name": "image-9",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000048,
          "y": 252,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=f85ac046e770423bb386117c71c8b89d.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "KghsoC056V",
          "type": "image",
          "name": "image-10",
          "opacity": 1,
          "custom": {
            "imageName": "guscio.png",
            "imageSize": 1,
            "imageWidth": 144,
            "imageHeight": 159,
            "imageType": "image/png",
            "name": "nuts-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "frutta guscio",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "6ldLWfrJVnQ7JJyxgkC6P",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "AP8QZh2APxReSwQvSFZsQ"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "nuts_not _allgr",
                "ruleId": "rule_1769712094365",
                "elementId": "KghsoC056V",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "mOG5nzPd9d2Rt9bYNqaBW",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150.05656231059865,
          "y": 139.45828755128585,
          "width": 49.88687537880293,
          "height": 55.08342489742822,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=f954045c0b094a5f9a4bfb9f1682ac78.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999998,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "BePQyrkk5j",
          "type": "image",
          "name": "image-11",
          "opacity": 1,
          "custom": {
            "imageName": "guscio-allergen.png",
            "imageSize": 7,
            "imageWidth": 144,
            "imageHeight": 159,
            "imageType": "image/png",
            "name": "nuts-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150,
          "y": 139,
          "width": 49.80973816972954,
          "height": 54.998252562409704,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=5b3588d940b9401996950b8dee843f35.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "1XOS4_fIG4",
          "type": "image",
          "name": "image-12",
          "opacity": 1,
          "custom": {
            "imageName": "soia-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "BrKbdb5ZSg2agYJnLZJrD",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "6roxHMSFkUoOBUNBxB3h1"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_allergen",
                "ruleId": "rule_1783435257295",
                "elementId": "1XOS4_fIG4",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 259.78673989830986,
          "y": 142.8422402598659,
          "width": 50.42652020338039,
          "height": 47.31377204267787,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=920564a63817452099337954174ba80a.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999992,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "TwqtlpRuuX",
          "type": "image",
          "name": "image-13",
          "opacity": 1,
          "custom": {
            "imageName": "soia-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 260,
          "y": 143,
          "width": 50,
          "height": 47,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10ff4689dbb841aaa0c6636116dd156b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 340,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00030005",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "URPWf_DIpmVNgFRlclNoE",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "3t7bVDgLjh",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "glutine_selected",
            "elements": [
              "AqH9rVsFmz",
              "KmwJQ5LTg1",
              "f4aG7rvVFA",
              "mVSinGpQhA"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "3R2BCHUgfB1AvV7xfdkIs",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "buNbNCyVKa6PMQ-ZWfU6-"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "glutine_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769625636781",
            "name": "uova_selected",
            "elements": [
              "tlZpXqtqFB",
              "eOfTwgbn8u",
              "Na1p8b659H",
              "vCoGRp52f3"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "8gq5MZ_tZ7pq_BHI68AjN",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "v7TX_UoCZi4xF23i9b5jl"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_uova",
                "ruleId": "rule_1769625636781",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "eP8pHiB1erXw7isUVC37n",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666564190",
            "name": "lattcini_selected",
            "elements": [
              "Luximnb4O3",
              "DMv3t4_A8v",
              "lqRkfBlsht",
              "IwSnoIRxpV"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "W82BF-R3hhkFlSQKo5c0s",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "k1Lfb0WDzJvUmrJgX9z_1"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_milk",
                "ruleId": "rule_1769666564190",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "2aJm_StU6K6r6dAPFhEdv",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666719389",
            "name": "nuts_selected",
            "elements": [
              "X3R-TpAef_",
              "n0T1sp8Fpf",
              "KPaQUOvF_b",
              "BePQyrkk5j"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "frutta guscio",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "p6RqXHwZPJbpybi7fz24G",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "eJ7UTQ7zyUaq4VAGALXM8"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_nuts",
                "ruleId": "rule_1769666719389",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666904980",
            "name": "soia_selected",
            "elements": [
              "h9cQtyHYuv",
              "Am2Us4fGbr",
              "o7I0SCHFd2",
              "TwqtlpRuuX"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "OciYqkCaCigIVYkCtU36c",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "_Ffghi16OxBL8biH2c1ji"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_soia",
                "ruleId": "rule_1769666904980",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1769712234364
      },
      "duration": 5000
    },
    {
      "id": "4FAP870YN9",
      "children": [
        {
          "id": "KqSdeHCF9E",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "IOOuClOLK4lb6HSe3M3Og",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "0qwJutd7hTyOXzp2ve6kV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "04TLj8cwMy",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0,
          "y": 0,
          "width": 349.9999999999994,
          "height": 250,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "kN24Tf8jWf",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "ABqNdjoEpjfMuM1IK46kn",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "ebi2fLe4JsECiTp4nIVOV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "6p6j3cLN9k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "pRHT5_3aGK",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 22.99999999999997,
          "y": 122.99999999999991,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "9vXJPyp1Hz",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 132,
          "y": 122.88796664235821,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "S6DnBwvl6i",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 241.0000000000001,
          "y": 122.88796664235824,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "FjaAefolyJ",
          "type": "image",
          "name": "image-6",
          "opacity": 1,
          "custom": {
            "imageName": "uova-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "CE20nsyPF2t6-kIvvSbPS",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "imM4HXbjs1LBm9dA06lAR"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "uova_selected",
                "ruleId": "rule_1769711689429",
                "elementId": "FjaAefolyJ",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 41.5,
          "y": 141.5000000000001,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0026dd4557cb49d8b6314360d4cc6063.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "rv6xJCHyfe",
          "type": "image",
          "name": "image-7",
          "opacity": 1,
          "custom": {
            "imageName": "uova-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 41.25000000000023,
          "y": 141.9574225470896,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10fe96ad4c6741cab0125f4cc91f575c.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "7qNP8TYlYJ",
          "type": "image",
          "name": "image-12",
          "opacity": 1,
          "custom": {
            "imageName": "soia-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "lOEuOYddQXQWtLgAkTz1k",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "tVNpJsPIT1HyZQdLF0qAW"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_allergen",
                "ruleId": "rule_1783435257295",
                "elementId": "7qNP8TYlYJ",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 259.78673989830986,
          "y": 142.8422402598659,
          "width": 50.42652020338039,
          "height": 47.31377204267787,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=920564a63817452099337954174ba80a.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999992,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "sogLq5eRV8",
          "type": "image",
          "name": "image-13",
          "opacity": 1,
          "custom": {
            "imageName": "soia-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 260,
          "y": 143,
          "width": 50,
          "height": 47,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10ff4689dbb841aaa0c6636116dd156b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "s9xekVT79G",
          "type": "image",
          "name": "image-8",
          "opacity": 1,
          "custom": {
            "imageName": "senape-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "senape_red"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 151.00000000000017,
          "y": 142.1166779159031,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0e79c0b4e5b4413fb6446a996587fcd1.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "audkup6Cdo",
          "type": "image",
          "name": "image-9",
          "opacity": 1,
          "custom": {
            "imageName": "senape.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "senape_gray",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "senape",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "Rq758ayXVreEFKiduu3vm",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "jhsY3HLmiSw9X8XEhyNok"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "senape_allergen",
                "ruleId": "rule_1783437855950",
                "elementId": "audkup6Cdo",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "KDF3g7BPGlQabhoK9WyB9",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150.9999999999999,
          "y": 141.65925536881338,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=927ba9d8bd9f40a7bda0478c774c7b1b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 250,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000990",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "KhjPBmjxsxSfywm3NXc3V",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "4FAP870YN9",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625636781",
            "name": "uova_selected",
            "elements": [
              "pRHT5_3aGK",
              null,
              null,
              "rv6xJCHyfe"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "8SCJ-KfZ1w635bYqzIgii",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "BYu48exn1JxCXCYwRm_OW"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_uova",
                "ruleId": "rule_1769625636781",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "eP8pHiB1erXw7isUVC37n",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666719389",
            "name": "senape_selected",
            "elements": [
              null,
              "9vXJPyp1Hz",
              null,
              "EOWqHJynN3",
              "s9xekVT79G"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "senape",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "jO1riR2i9gB9T76ORvWYR",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "zz85rfDK6B07fSfiVq_yp"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_senape",
                "ruleId": "rule_1769666719389",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666904980",
            "name": "soia_selected",
            "elements": [
              "S6DnBwvl6i",
              null,
              null,
              "sogLq5eRV8"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "4NUUnOERayitzD0HtmYYP",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "1mIMh2hQs0y2OCbzd_JJ2"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_soia",
                "ruleId": "rule_1769666904980",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783438254387
      },
      "duration": 5000
    },
    {
      "id": "GQFI6hb-w8",
      "children": [
        {
          "id": "HVMh0zhA3-",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "IOOuClOLK4lb6HSe3M3Og",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "0qwJutd7hTyOXzp2ve6kV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "04TLj8cwMy",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 6.252776074688886e-13,
          "y": 2.267306282604946e-13,
          "width": 349.9999999999994,
          "height": 250,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "uEQHF3HTfo",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "ABqNdjoEpjfMuM1IK46kn",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "ebi2fLe4JsECiTp4nIVOV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "6p6j3cLN9k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "9hBN-3FdWG",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 131.99999999999997,
          "y": 122.99999999999991,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "36FSPEdupr",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23.00000000000003,
          "y": 122.88796664235826,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "RM7QE1KL6c",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 241.0000000000001,
          "y": 122.88796664235824,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "-uBiiOFUzR",
          "type": "image",
          "name": "image-4",
          "opacity": 1,
          "custom": {
            "imageName": "glutine-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "name": "glutine-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "zwJpQb7PJGM9EQgL96k9_",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "cxbr26AatxNWT48zSA3ma"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "non_allg_glutine",
                "ruleId": "rule_1769711125254",
                "elementId": "3aOTEax0Np",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 43.47612378284654,
          "y": 138.88796664235826,
          "width": 47,
          "height": 56,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=ff0ee74883514fe295f9c81c60d75c38.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "jLI3iILV-3",
          "type": "image",
          "name": "image-5",
          "opacity": 1,
          "custom": {
            "imageName": "glutine-allergen.png",
            "imageSize": 6,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "name": "glutine-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 43,
          "y": 139,
          "width": 47,
          "height": 56,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=c148f9f57e004f2ebe827dca026d9101.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "U1IA6Dcn8p",
          "type": "image",
          "name": "image-6",
          "opacity": 1,
          "custom": {
            "imageName": "uova-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "2yf0FCxVNtvrKffVgJt_F",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "3TIdz5mz9-i1JnmDBf0pm"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "uova_selected",
                "ruleId": "rule_1769711689429",
                "elementId": "X6Y9V8seCo",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150.4999999999999,
          "y": 141.5,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0026dd4557cb49d8b6314360d4cc6063.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "gvgSWl1SIh",
          "type": "image",
          "name": "image-7",
          "opacity": 1,
          "custom": {
            "imageName": "uova-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150.25000000000023,
          "y": 141.9574225470896,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10fe96ad4c6741cab0125f4cc91f575c.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "VYEBoOyDSI",
          "type": "image",
          "name": "image-8",
          "opacity": 1,
          "custom": {
            "imageName": "senape-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "senape-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 260.00000000000017,
          "y": 142.4574225470896,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0e79c0b4e5b4413fb6446a996587fcd1.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "Ge7J7CicUk",
          "type": "image",
          "name": "image-9",
          "opacity": 1,
          "custom": {
            "imageName": "senape.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "senape",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "senape",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "gd3_pG6i0dNdWKdNn7hkQ",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "yc7bY5NvoPYm1H8Pjcvax"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "senape_allergen",
                "ruleId": "rule_1783437855950",
                "elementId": "Ge7J7CicUk",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "KDF3g7BPGlQabhoK9WyB9",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 260,
          "y": 142,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=927ba9d8bd9f40a7bda0478c774c7b1b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 250,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000992",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "orn1EKUamov2bDgIgN8ZH",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "GQFI6hb-w8",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "glutine_selected",
            "elements": [
              null,
              null,
              "jLI3iILV-3",
              "36FSPEdupr"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "3R2BCHUgfB1AvV7xfdkIs",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "buNbNCyVKa6PMQ-ZWfU6-"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "glutine_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769625636781",
            "name": "uova_selected",
            "elements": [
              "9hBN-3FdWG",
              null,
              null,
              "gvgSWl1SIh"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "8gq5MZ_tZ7pq_BHI68AjN",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "v7TX_UoCZi4xF23i9b5jl"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_uova",
                "ruleId": "rule_1769625636781",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "eP8pHiB1erXw7isUVC37n",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666904980",
            "name": "senape_selected",
            "elements": [
              "RM7QE1KL6c",
              null,
              null,
              "voDc41oOFo",
              "VYEBoOyDSI"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "senape",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "9s4luFDOKzsLSuQN5rXCY",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "A_-Ole6t6t0EEnx39075c"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_senape",
                "ruleId": "rule_1769666904980",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783438203675
      },
      "duration": 5000
    },
    {
      "id": "Vanvb1fwpz",
      "children": [
        {
          "id": "yqRrdPPTW7",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "IOOuClOLK4lb6HSe3M3Og",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "0qwJutd7hTyOXzp2ve6kV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "04TLj8cwMy",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0,
          "y": 0,
          "width": 349.9999999999994,
          "height": 340,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "nRwCnUy9Nh",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "ABqNdjoEpjfMuM1IK46kn",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "ebi2fLe4JsECiTp4nIVOV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "6p6j3cLN9k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "koJSnMBJnO",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 60.250000000000455,
          "y": 232.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "LA4ZyhXaK8",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 201.74999999999974,
          "y": 232.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "px9G8qnBJs",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 60.250000000000455,
          "y": 122.88796664235821,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "ZcEU7i0n-X",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 201.74999999999966,
          "y": 122.49912628120487,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "tWnI0J78YX",
          "type": "image",
          "name": "image-6",
          "opacity": 1,
          "custom": {
            "imageName": "uova-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "2yf0FCxVNtvrKffVgJt_F",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "3TIdz5mz9-i1JnmDBf0pm"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "uova_selected",
                "ruleId": "rule_1769711689429",
                "elementId": "X6Y9V8seCo",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.24999999999977,
          "y": 250.5425774529105,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0026dd4557cb49d8b6314360d4cc6063.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "hruAidQmi7",
          "type": "image",
          "name": "image-7",
          "opacity": 1,
          "custom": {
            "imageName": "uova-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220,
          "y": 251,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10fe96ad4c6741cab0125f4cc91f575c.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "0trulHQqYt",
          "type": "image",
          "name": "image-8",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "fQRD1LxXz7CtChlFY5RwD",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "E5SoFdpHs7W-F39lZOdIe"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "latt_sele",
                "ruleId": "rule_1769711858484",
                "elementId": "6XrRnkyB6k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000048,
          "y": 251.54257745291056,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=bf08f69d84814dd18b798a711a2771e5.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "45SL7BTtsr",
          "type": "image",
          "name": "image-9",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000048,
          "y": 252,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=f85ac046e770423bb386117c71c8b89d.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "qqOl3t7RrE",
          "type": "image",
          "name": "image-10",
          "opacity": 1,
          "custom": {
            "imageName": "guscio.png",
            "imageSize": 1,
            "imageWidth": 144,
            "imageHeight": 159,
            "imageType": "image/png",
            "name": "nuts-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "frutta guscio",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "6ldLWfrJVnQ7JJyxgkC6P",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "AP8QZh2APxReSwQvSFZsQ"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "nuts_not _allgr",
                "ruleId": "rule_1769712094365",
                "elementId": "KghsoC056V",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "mOG5nzPd9d2Rt9bYNqaBW",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 78.3065623105991,
          "y": 139.4582875512858,
          "width": 49.88687537880293,
          "height": 55.08342489742822,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=f954045c0b094a5f9a4bfb9f1682ac78.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999998,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "uffUMG6lZ1",
          "type": "image",
          "name": "image-11",
          "opacity": 1,
          "custom": {
            "imageName": "guscio-allergen.png",
            "imageSize": 7,
            "imageWidth": 144,
            "imageHeight": 159,
            "imageType": "image/png",
            "name": "nuts-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 78.25000000000023,
          "y": 139,
          "width": 49.80973816972954,
          "height": 54.998252562409704,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=5b3588d940b9401996950b8dee843f35.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "YpdKAquEFY",
          "type": "image",
          "name": "image-12",
          "opacity": 1,
          "custom": {
            "imageName": "soia-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "BrKbdb5ZSg2agYJnLZJrD",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "6roxHMSFkUoOBUNBxB3h1"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_allergen",
                "ruleId": "rule_1783435257295",
                "elementId": "1XOS4_fIG4",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.5367398983094,
          "y": 142.4533998987124,
          "width": 50.42652020338039,
          "height": 47.31377204267787,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=920564a63817452099337954174ba80a.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999992,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "EtpraDsyHP",
          "type": "image",
          "name": "image-13",
          "opacity": 1,
          "custom": {
            "imageName": "soia-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.74999999999966,
          "y": 142.6111596388464,
          "width": 50,
          "height": 47,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10ff4689dbb841aaa0c6636116dd156b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 340,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000705",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "z2WR3RZ5qegtkF894KfmE",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "Vanvb1fwpz",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625636781",
            "name": "uova_selected",
            "elements": [
              "LA4ZyhXaK8",
              null,
              null,
              "hruAidQmi7"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "8gq5MZ_tZ7pq_BHI68AjN",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "v7TX_UoCZi4xF23i9b5jl"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_uova",
                "ruleId": "rule_1769625636781",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "eP8pHiB1erXw7isUVC37n",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666564190",
            "name": "lattcini_selected",
            "elements": [
              null,
              null,
              "koJSnMBJnO",
              "45SL7BTtsr"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "W82BF-R3hhkFlSQKo5c0s",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "k1Lfb0WDzJvUmrJgX9z_1"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_milk",
                "ruleId": "rule_1769666564190",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "2aJm_StU6K6r6dAPFhEdv",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666719389",
            "name": "nuts_selected",
            "elements": [
              null,
              "px9G8qnBJs",
              null,
              "uffUMG6lZ1"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "frutta guscio",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "p6RqXHwZPJbpybi7fz24G",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "eJ7UTQ7zyUaq4VAGALXM8"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_nuts",
                "ruleId": "rule_1769666719389",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666904980",
            "name": "soia_selected",
            "elements": [
              "ZcEU7i0n-X",
              null,
              null,
              "EtpraDsyHP"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "OciYqkCaCigIVYkCtU36c",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "_Ffghi16OxBL8biH2c1ji"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_soia",
                "ruleId": "rule_1769666904980",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783437050683
      },
      "duration": 5000
    },
    {
      "id": "QtkP1W6ygt",
      "children": [
        {
          "id": "5xlZARpCWK",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "IOOuClOLK4lb6HSe3M3Og",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "0qwJutd7hTyOXzp2ve6kV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "04TLj8cwMy",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0,
          "y": 0,
          "width": 349.9999999999994,
          "height": 340,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "razQgM_f6o",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine,latticini,uova,frutta guscio,soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "ABqNdjoEpjfMuM1IK46kn",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "ebi2fLe4JsECiTp4nIVOV"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "6p6j3cLN9k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "_vERWK8ljn",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 60.250000000000455,
          "y": 232.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "ibLSi21dBi",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 201.74999999999974,
          "y": 232.04257745291048,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "bz8i_4eIcR",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 60.250000000000455,
          "y": 122.88796664235821,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "q6OuFrBHro",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 201.74999999999966,
          "y": 122.49912628120487,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "Lq1zdfqYi7",
          "type": "image",
          "name": "image-6",
          "opacity": 1,
          "custom": {
            "imageName": "uova-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "2yf0FCxVNtvrKffVgJt_F",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "3TIdz5mz9-i1JnmDBf0pm"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "uova_selected",
                "ruleId": "rule_1769711689429",
                "elementId": "X6Y9V8seCo",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.24999999999977,
          "y": 250.5425774529105,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0026dd4557cb49d8b6314360d4cc6063.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "Lvv-ySgh00",
          "type": "image",
          "name": "image-7",
          "opacity": 1,
          "custom": {
            "imageName": "uova-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220,
          "y": 251,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10fe96ad4c6741cab0125f4cc91f575c.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "-c_sxp_qf0",
          "type": "image",
          "name": "image-8",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "fQRD1LxXz7CtChlFY5RwD",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "E5SoFdpHs7W-F39lZOdIe"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "latt_sele",
                "ruleId": "rule_1769711858484",
                "elementId": "6XrRnkyB6k",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000048,
          "y": 251.54257745291056,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=bf08f69d84814dd18b798a711a2771e5.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "nNugcjCM5z",
          "type": "image",
          "name": "image-9",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000048,
          "y": 252,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=f85ac046e770423bb386117c71c8b89d.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "pob9G1OLMW",
          "type": "image",
          "name": "image-12",
          "opacity": 1,
          "custom": {
            "imageName": "soia-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "BrKbdb5ZSg2agYJnLZJrD",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "6roxHMSFkUoOBUNBxB3h1"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_allergen",
                "ruleId": "rule_1783435257295",
                "elementId": "1XOS4_fIG4",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.5367398983094,
          "y": 142.4533998987124,
          "width": 50.42652020338039,
          "height": 47.31377204267787,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=920564a63817452099337954174ba80a.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 0.9999999999999992,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "W2yKEE_k2X",
          "type": "image",
          "name": "image-13",
          "opacity": 1,
          "custom": {
            "imageName": "soia-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 220.74999999999966,
          "y": 142.6111596388464,
          "width": 50,
          "height": 47,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10ff4689dbb841aaa0c6636116dd156b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "4N_Z6TnvxA",
          "type": "image",
          "name": "image-14",
          "opacity": 1,
          "custom": {
            "imageName": "senape-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "senape-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79.25000000000048,
          "y": 141.11028592005133,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0e79c0b4e5b4413fb6446a996587fcd1.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 0.9999999999999994,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "GaDT3MV3fa",
          "type": "image",
          "name": "image-15",
          "opacity": 1,
          "custom": {
            "imageName": "senape.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "senape",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "senape",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "gd3_pG6i0dNdWKdNn7hkQ",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "yc7bY5NvoPYm1H8Pjcvax"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "senape_allergen",
                "ruleId": "rule_1783437454664",
                "elementId": "GaDT3MV3fa",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 79,
          "y": 141,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=927ba9d8bd9f40a7bda0478c774c7b1b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 340,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000991",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "VjMMcxqgB75RcEobxxeco",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "QtkP1W6ygt",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625636781",
            "name": "uova_selected",
            "elements": [
              "ibLSi21dBi",
              null,
              null,
              "Lvv-ySgh00"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "8gq5MZ_tZ7pq_BHI68AjN",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "v7TX_UoCZi4xF23i9b5jl"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_uova",
                "ruleId": "rule_1769625636781",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "eP8pHiB1erXw7isUVC37n",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666564190",
            "name": "lattcini_selected",
            "elements": [
              null,
              null,
              "_vERWK8ljn",
              "nNugcjCM5z"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "W82BF-R3hhkFlSQKo5c0s",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "k1Lfb0WDzJvUmrJgX9z_1"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_milk",
                "ruleId": "rule_1769666564190",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "2aJm_StU6K6r6dAPFhEdv",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666719389",
            "name": "senape_selected",
            "elements": [
              null,
              "bz8i_4eIcR",
              null,
              "I-oDCDzYLr",
              "4N_Z6TnvxA"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "senape",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "oRZQk_r_P6DMAG0EnwQrn",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "mZY-cvZOgsAxrXjusspyi"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_senape",
                "ruleId": "rule_1769666719389",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          {
            "id": "group_1769666904980",
            "name": "soia_selected",
            "elements": [
              "q6OuFrBHro",
              null,
              null,
              "W2yKEE_k2X"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "OciYqkCaCigIVYkCtU36c",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "_Ffghi16OxBL8biH2c1ji"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "user_allg_soia",
                "ruleId": "rule_1769666904980",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783437479523
      },
      "duration": 5000
    },
    {
      "id": "ceUwkMNfkE",
      "children": [
        {
          "id": "6reu2WJZby",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "cF_KLbQosTI4PiDXTTGQd",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "caeiZ-GVdj_4REAhRmuls"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "6reu2WJZby",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -3e-28,
          "y": 2.23352725741709e-13,
          "width": 349.9999999999994,
          "height": 239.5650031376951,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "AqmM08noeb",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "zveccp9eZLYQZxD3csMmF",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "PevF-GXTlV5UzndoKDAh9"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "AqmM08noeb",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "mJ_L3D6Se6",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 130.9999999999997,
          "y": 126.42824020265269,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "CbKUfga_i2",
          "type": "image",
          "name": "image-4",
          "opacity": 1,
          "custom": {
            "imageName": "glutine-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "name": "glutine-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "qsdafjB_tvZ0sK6g0P8Pj",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "f4EUaQeB27SbPh5CP03K4"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "non_allg_glutine",
                "ruleId": "rule_1769711125254",
                "elementId": "CbKUfga_i2",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 151.4761237828462,
          "y": 142.42824020265277,
          "width": 47,
          "height": 56,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=ff0ee74883514fe295f9c81c60d75c38.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "MtCjZtoBIU",
          "type": "image",
          "name": "image-5",
          "opacity": 1,
          "custom": {
            "imageName": "glutine-allergen.png",
            "imageSize": 6,
            "imageWidth": 132,
            "imageHeight": 157,
            "imageType": "image/png",
            "name": "glutine_allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150.99999999999977,
          "y": 142.54027356029445,
          "width": 47,
          "height": 56,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=c148f9f57e004f2ebe827dca026d9101.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 240,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00030007",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "g24n-irHN5_iChU7Qn-Mz",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "ceUwkMNfkE",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "glutine_selected",
            "elements": [
              "vQOPKxqYPK",
              null,
              "kDKOWI1hlO",
              "GJxEZNIs_y",
              "eglrnq8MQ_",
              "MtCjZtoBIU",
              "mJ_L3D6Se6"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "ycmEf8dchGFEaEZ982UZw",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "dHRHTyIW9VASbXp8VXH91"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "glutine_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1769712451133
      },
      "duration": 5000
    },
    {
      "id": "Bk6j_xwjga",
      "children": [
        {
          "id": "fALmXovh_s",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "cF_KLbQosTI4PiDXTTGQd",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "caeiZ-GVdj_4REAhRmuls"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "6reu2WJZby",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -3e-28,
          "y": 2.23352725741709e-13,
          "width": 349.9999999999994,
          "height": 239.5650031376951,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "1Zn-9dmmYR",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "go7XWUnD2dq_3fghYPgXa",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "-XRFSi-xCt7f6rye5uLw3"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "1Zn-9dmmYR",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "t6jshtPY2N",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 130.9999999999997,
          "y": 126.42824020265269,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "A11Fp8oNQb",
          "type": "image",
          "name": "image-1",
          "opacity": 1,
          "custom": {
            "imageName": "soia-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 149.67465627358166,
          "y": 145.7279176939144,
          "width": 52.650687452836586,
          "height": 49.4006450174764,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10ff4689dbb841aaa0c6636116dd156b.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 0.9999999999999976,
          "cropHeight": 0.9999999999999997,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "rl7ySx6RLw",
          "type": "image",
          "name": "image-2",
          "opacity": 1,
          "custom": {
            "imageName": "soia-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 152,
            "imageType": "image/png",
            "name": "soia-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "dkSqOwHUMFoAv11MIRsti",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "IXcl_SIaD1fE8WwNmb7uB"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_allergen",
                "ruleId": "rule_1783435389842",
                "elementId": "rl7ySx6RLw",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "rk8xhjXGJkKwfxDOVyrLu",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150,
          "y": 146,
          "width": 53,
          "height": 49,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=920564a63817452099337954174ba80a.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 240,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "any": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000702",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "yaAX6zqhIwuCOQzhRc5pY",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000703",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "V2xx4ikLVcwF3OXE9W-sw",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000707",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "-d6ews-sSeScBKapxfYzx",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000715",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "tNfy_x69ZX3psH0bM_K0U",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "Bk6j_xwjga",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "soia_selected",
            "elements": [
              null,
              null,
              null,
              null,
              null,
              "BM35NSdj9N",
              "t6jshtPY2N",
              "ltTFNqjLxP",
              "A11Fp8oNQb"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "soia",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "x9cLLxKrSQliGJNBT2KRg",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "Sn1wY8cSGDkW26LRYKVG4"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "soia_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783435100443
      },
      "duration": 5000
    },
    {
      "id": "l8wpxvfQCC",
      "children": [
        {
          "id": "Vt09xuGlv_",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "cF_KLbQosTI4PiDXTTGQd",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "caeiZ-GVdj_4REAhRmuls"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "6reu2WJZby",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -3e-28,
          "y": 2.23352725741709e-13,
          "width": 349.9999999999994,
          "height": 239.5650031376951,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "Ivnr9FjitN",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "zveccp9eZLYQZxD3csMmF",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "PevF-GXTlV5UzndoKDAh9"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "AqmM08noeb",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "XKFS4TBzw4",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 130.9999999999997,
          "y": 126.42824020265269,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "7PT87xRtKu",
          "type": "image",
          "name": "image-1",
          "opacity": 1,
          "custom": {
            "imageName": "uova-allergen.png",
            "imageSize": 5,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150.50000000000006,
          "y": 144.92824020265272,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=10fe96ad4c6741cab0125f4cc91f575c.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 0.9999999999999998,
          "cropHeight": 0.9999999999999984,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "kZPaPOpbUb",
          "type": "image",
          "name": "image-2",
          "opacity": 1,
          "custom": {
            "imageName": "uova-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 163,
            "imageType": "image/png",
            "name": "uova-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "IN7ZscO5T9OLLiGDpbhk5",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "WcLTBTcZTM8njE-vUmuil"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "uova_allergen",
                "ruleId": "rule_1783435732965",
                "elementId": "kZPaPOpbUb",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 150.5,
          "y": 144.92824020265266,
          "width": 51,
          "height": 51,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=0026dd4557cb49d8b6314360d4cc6063.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 240,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "any": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000989",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "qd-6Ohp4kRUU9GePV8Ifs",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000988",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "kBPYZsgiKP7XAjEGA7U3b",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "l8wpxvfQCC",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "uova_selected",
            "elements": [
              null,
              null,
              null,
              null,
              null,
              null,
              "XKFS4TBzw4",
              null,
              "XD7yfzx-vP",
              "7PT87xRtKu"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "uova",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "kp5IMsvqbjn_QughHm9UV",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "M7pI35uocD_vNC11Q38Jj"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "uova_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783435754905
      },
      "duration": 5000
    },
    {
      "id": "6c-9oo5O2R",
      "children": [
        {
          "id": "w5WHqZh5el",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "glutine",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "cF_KLbQosTI4PiDXTTGQd",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "colorsReplace",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(208,2,27,1)",
                    "actionId": "caeiZ-GVdj_4REAhRmuls"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624583689",
                "elementId": "6reu2WJZby",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -3e-28,
          "y": 2.23352725741709e-13,
          "width": 349.9999999999994,
          "height": 239.5650031376951,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "1EDg9g70B0",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "ArrayContainsAnyOfSubArray",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "6ohN6HkQXQ8TGLnK6CX1e",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "text",
                    "actionType": "Plain Text",
                    "actionField": {
                      "path": "",
                      "articleField": "",
                      "dataSource": "article_field",
                      "articleIndex": null
                    },
                    "actionValue": "Allergens detected based on your preferences",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "5iX4z1Z11FZRUlkzuPJpk"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "allerg_detected",
                "ruleId": "rule_1769624647954",
                "elementId": "1EDg9g70B0",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "DnvcxUmwid4pWAr2uvnYn",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "Ms1T9wBCwi",
          "type": "svg",
          "name": "svg-2",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 130.9999999999997,
          "y": 126.42824020265269,
          "width": 88,
          "height": 88,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC4xNzEwODcwMjA1Nzg1Mzk3NSI+CiAgICAgIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIC8+CiAgICA8L2NsaXBQYXRoPgogIDwvZGVmcz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgZmlsbCAtLT4KICA8cGF0aCBkPSJNIDE1MCAxNTAgbSAtMTUwLCAwIGEgMTUwLDE1MCAwIDEsMCAzMDAsMCBhIDE1MCwxNTAgMCAxLDAgLTMwMCwwIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzBjMGMwYyIgc3Ryb2tlLXdpZHRoPSIwIiBjbGlwLXBhdGg9InVybCgjY2xpcC0wLjE3MTA4NzAyMDU3ODUzOTc1KSIgdHJhbnNmb3JtPSJzY2FsZSgxLCAxKSIgc3Ryb2tlLWRhc2hhcnJheT0iIi8+CiAgICA8L3N2Zz4KICA=",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,255,255,1)"
          }
        },
        {
          "id": "5mXCEMJr4g",
          "type": "image",
          "name": "image-1",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-allergen.png",
            "imageSize": 6,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-allergen"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 149.9999999999999,
          "y": 145.42824020265266,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=f85ac046e770423bb386117c71c8b89d.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 0.9999999999999991,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        },
        {
          "id": "rU6ENcglN1",
          "type": "image",
          "name": "image-2",
          "opacity": 1,
          "custom": {
            "imageName": "latticini-no-allergen.png",
            "imageSize": 1,
            "imageWidth": 162,
            "imageHeight": 162,
            "imageType": "image/png",
            "name": "latticini-no-allergen",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_contains",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "cu6YhpZecP4Rv5r8CCDJm",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "U4PtpntF9os5VJaOeFU8N"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "latte_allergen",
                "ruleId": "rule_1783436049245",
                "elementId": "rU6ENcglN1",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 149.9999999999999,
          "y": 145.42824020265266,
          "width": 50,
          "height": 50,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "/api/pimmultimedia/ImageStorage/GetFileByName?fileName=bf08f69d84814dd18b798a711a2771e5.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89&shopUniqueCode=cdfb76da-969e-4807-a324-d6ec36667b10",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "cornerRadius": 0,
          "flipX": false,
          "flipY": false,
          "clipSrc": "",
          "borderColor": "black",
          "borderSize": 0,
          "keepRatio": false,
          "stretchEnabled": false
        }
      ],
      "width": 350,
      "height": 240,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "all": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000700",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "7opIX1YgQy3iL_arKrCIV",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "6c-9oo5O2R",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [
          {
            "id": "group_1769625052924",
            "name": "latticini_selected",
            "elements": [
              null,
              null,
              null,
              null,
              null,
              null,
              "Ms1T9wBCwi",
              null,
              null,
              "0A4xitFXaT",
              "5mXCEMJr4g"
            ],
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "any": [
                      {
                        "fact": "user-data-fact",
                        "operator": "cus_doesNotContain",
                        "value": "latticini",
                        "path": "$.allergen",
                        "dataSource": "user_data",
                        "articleField": {
                          "name": "allergen",
                          "aliasName": "allergen",
                          "parent": "",
                          "subTitle": "",
                          "dataType": 11,
                          "options": [
                            {
                              "value": "glutine",
                              "label": "glutine"
                            },
                            {
                              "value": "latticini",
                              "label": "latticini"
                            },
                            {
                              "value": "uova",
                              "label": "uova"
                            },
                            {
                              "value": "sesamo",
                              "label": "sesamo"
                            },
                            {
                              "value": "frutta guscio",
                              "label": "frutta guscio"
                            },
                            {
                              "value": "soia",
                              "label": "soia"
                            },
                            {
                              "value": "arachidi",
                              "label": "arachidi"
                            },
                            {
                              "value": "lupini",
                              "label": "lupini"
                            },
                            {
                              "value": "senape",
                              "label": "senape"
                            },
                            {
                              "value": "sedano",
                              "label": "sedano"
                            },
                            {
                              "value": "solfiti",
                              "label": "solfiti"
                            },
                            {
                              "value": "molluschi",
                              "label": "molluschi"
                            },
                            {
                              "value": "crostacei",
                              "label": "crostacei"
                            },
                            {
                              "value": "pesce",
                              "label": "pesce"
                            }
                          ],
                          "title": "Allergens",
                          "id": "a9dd0ad2-37e6-41d6-a7b6-d310004e0574",
                          "dbPath": "allergen"
                        },
                        "articleIndex": null,
                        "conditionId": "Redb3jJcypfcfCxjV5vLQ",
                        "articleFieldComparisonValue": null
                      }
                    ]
                  },
                  "event": {
                    "type": "true"
                  }
                },
                "ruleActions": [
                  {
                    "elementField": "",
                    "actionType": "Plain Text",
                    "actionField": {
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
                    "actionId": "kQeU2hJ9jcBdzgqgGmBUp"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "latticini_sel",
                "ruleId": "rule_1769625052924",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [
                  {
                    "filterId": "nx5RqHygH1TK9wfDs3J5i",
                    "articleIndex": null
                  }
                ],
                "actionFilters": []
              }
            ]
          }
        ],
        "update": 1783436085261
      },
      "duration": 5000
    },
    {
      "id": "RYi5kYAFMC",
      "children": [
        {
          "id": "AK-MCo6NRN",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "custom": {
            "name": "background",
            "rules": []
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0,
          "y": 0,
          "width": 349.9999999999994,
          "height": 150,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI2NzgzNzkyOTUwNjc4Ij4KICAgICAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiAvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CgogIDwhLS0gUGF0aCBmb3IgdGhlIGZpbGwgLS0+CiAgPHBhdGggZD0iTSAwIDAgTCAzMDAgMCBMIDMwMCAzMDAgTCAwIDMwMCBaIiBmaWxsPSIjNkI5MEYwIiB0cmFuc2Zvcm09InNjYWxlKDEsIDEpIi8+CgogIDwhLS0gUGF0aCBmb3IgdGhlIHN0cm9rZSwgY2xpcHBlZCBieSB0aGUgc3RhciBwYXRoIC0tPgogIDxwYXRoIGQ9Ik0gMCAwIEwgMzAwIDAgTCAzMDAgMzAwIEwgMCAzMDAgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNjc4Mzc5Mjk1MDY3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(120,183,42,1)"
          }
        },
        {
          "id": "uNrETSpjny",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "rules": []
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 23,
          "y": 32,
          "width": 306,
          "height": 85,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "No allergens you selected were found",
          "placeholder": "",
          "fontSize": 26,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(255,255,255,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.02,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        }
      ],
      "width": 350,
      "height": 150,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "rules": [
          {
            "ruleConditions": {
              "conditions": {
                "any": [
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00030006",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "Ele-r1jZxZ-eGeFxmcj7O",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000701",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "UOH_2jEmTQ2YkRcNL2Q_A",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000706",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "iRts2Hv1TAzg6W8H0pb6b",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000713",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "LVXSzrjyw1I38ugWbhAit",
                    "articleFieldComparisonValue": null
                  },
                  {
                    "fact": "article-fact",
                    "operator": "cus_equal",
                    "value": "NIP_00000717",
                    "path": "$.importFields['masterCode']",
                    "dataSource": "article_field",
                    "articleField": {
                      "name": "masterCode",
                      "aliasName": "masterCode",
                      "parent": "importFields",
                      "subTitle": "importFields",
                      "dataType": 1,
                      "dbPath": "importFields.masterCode"
                    },
                    "articleIndex": null,
                    "conditionId": "n3_Z1jD_YrJCRx8wxLH8I",
                    "articleFieldComparisonValue": null
                  }
                ]
              },
              "event": {
                "type": "true"
              }
            },
            "ruleActions": [
              {
                "elementField": "",
                "actionType": "Plain Text",
                "actionField": {
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
                "actionId": "xsNGtUe4w7PxVi5xAyVOv"
              }
            ],
            "isToHideElement": false,
            "ruleName": "",
            "ruleId": "page_rule_1769616897063",
            "elementId": "RYi5kYAFMC",
            "isToApplyFactFilters": false,
            "isToApplyActionFilters": false,
            "factFilters": [],
            "actionFilters": []
          }
        ],
        "groups": [],
        "update": 1769689437844
      },
      "duration": 5000
    },
    {
      "id": "CKRWkwPG7Q",
      "children": [
        {
          "id": "U1Aj7XF8ew",
          "type": "text",
          "name": "text-6",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 44.70078088892358,
          "y": 20.00000000000026,
          "width": 259,
          "height": 30,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 4.9999999999999805,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Nutritional Information",
          "placeholder": "",
          "fontSize": 24,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "center",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.04,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "9vJ6j7qEAs",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "articleField": null,
            "dataSource": "article_field"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 16.99999999999881,
          "y": 82.99999999999999,
          "width": 150,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.257889577277543,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Average Values",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(122,122,133,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.08,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "0grqHod7X2",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 223,
          "y": 82.99999999999974,
          "width": 111,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.257889577277541,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Per 100g",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "right",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.08,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "X7IgEz5QLD",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 17.000000000000952,
          "y": 140.99999999999994,
          "width": 100,
          "height": 23.000000000000004,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.248320882302258,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Energy",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "justify",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "vxisJGCDaP",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "articleField": {
              "parent": "instoreFields",
              "name": "free001",
              "aliasName": "free001",
              "subTitle": "instoreFields",
              "dataType": 1
            },
            "dataSource": "article_field"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 174.40156177784746,
          "y": 140.999999999999,
          "width": 161,
          "height": 23.000000000000558,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.248320882302253,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "1767kJ / 422 kcal",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "right",
          "verticalAlign": "middle",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "rD5IPiWpCw",
          "type": "text",
          "name": "text-5",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 35.569672108570074,
          "y": 180.07994032102204,
          "width": 111,
          "height": 18,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 4.990900631484683,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "HIGH IN CALORIES",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "tGoOhnb1x4",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 17,
          "y": 182.69829535435795,
          "width": 10.73053220667176,
          "height": 10.730532206671759,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {
            "natural": {
              "intensity": 1
            }
          },
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI1NjIyODIyMDE2OTc4Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNTYyMjgyMjAxNjk3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,0,0,1)"
          }
        },
        {
          "id": "HMlkeYtH6A",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 17.00000000000012,
          "y": 221.09368732458506,
          "width": 150,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.248320882302269,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Fats",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "DsHzyd7iIH",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": {
              "name": "free004",
              "aliasName": "free004",
              "parent": "instoreFields",
              "subTitle": "instoreFields",
              "dataType": 1
            }
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 223.00000000000105,
          "y": 221.0936873245854,
          "width": 111,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.248320882302261,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "21 g",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "right",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "h_wFy8Z2OG",
          "type": "text",
          "name": "text-5",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 36,
          "y": 260.32620048056947,
          "width": 150,
          "height": 18,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 4.9909006314846955,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "HIGH IN CALORIES",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "FMWfm_R3ft",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 17.00000000000108,
          "y": 300.44232017585836,
          "width": 216,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.248320882302251,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Saturated Fatty Acid",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "__ZtwW5Wcn",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": {
              "name": "free005",
              "aliasName": "free005",
              "parent": "instoreFields",
              "subTitle": "instoreFields",
              "dataType": 1
            }
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 223.0000000000013,
          "y": 300.4423201758586,
          "width": 111,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.248320882302264,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "8,7 g",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "right",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "8a77hQrLZb",
          "type": "text",
          "name": "text-5",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 34.56967210856968,
          "y": 339.19504751408635,
          "width": 150,
          "height": 18,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 4.9909006314846955,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "HIGH IN CALORIES",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "KUn-K5nCdN",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 16.84632610188413,
          "y": 342.84050382541346,
          "width": 10.676329650690903,
          "height": 10.676329650690894,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI1NjIyODIyMDE2OTc4Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNTYyMjgyMjAxNjk3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,164,27,1)"
          }
        },
        {
          "id": "79u4vRpeJ6",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 16.88092957583048,
          "y": 379.54374416757827,
          "width": 150,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.2483208823022585,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Carbohydrates",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "6Wt9dozPh9",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": {
              "name": "free002",
              "aliasName": "free002",
              "parent": "instoreFields",
              "subTitle": "instoreFields",
              "dataType": 1
            }
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 222.58828404205508,
          "y": 379.54374416757804,
          "width": 110,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.248320882302261,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "47 g",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(122,122,133,1)",
          "align": "right",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "dETDjyPiVc",
          "type": "text",
          "name": "text-5",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 35.56785223486719,
          "y": 418.8370114839621,
          "width": 150,
          "height": 18,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 4.9909006314846955,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "HIGH IN CALORIES",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "Qt1fJcS64d",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 17.259416832647247,
          "y": 422.8834842605365,
          "width": 10.750096023731501,
          "height": 10.750096023731539,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI1NjIyODIyMDE2OTc4Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNTYyMjgyMjAxNjk3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,0,0,1)"
          }
        },
        {
          "id": "lF5z6uDIja",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 19.21732670748966,
          "y": 459.6054969530321,
          "width": 150,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.2578895772775445,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Sugar",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "eMyhReboXG",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": {
              "name": "free003",
              "aliasName": "free003",
              "parent": "instoreFields",
              "subTitle": "instoreFields",
              "dataType": 1
            }
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 222.001730663447,
          "y": 459.605496953032,
          "width": 110,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.257889577277546,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "25 g",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "right",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "u8DxXNQRn6",
          "type": "text",
          "name": "text-5",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 35.00173066344803,
          "y": 498.43597352170093,
          "width": 150,
          "height": 18,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "HIGH IN CALORIES",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "BsZDWf2EGR",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 16.259416832648057,
          "y": 501.06092550983556,
          "width": 10.75009602373063,
          "height": 10.750096023730618,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI1NjIyODIyMDE2OTc4Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNTYyMjgyMjAxNjk3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,0,0,1)"
          }
        },
        {
          "id": "hsSlHYyMQ2",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 18.259416832648274,
          "y": 538.4451150172038,
          "width": 150,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.257889577277544,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Protein",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "PAB0sv6rtG",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": {
              "name": "free007",
              "aliasName": "free007",
              "parent": "instoreFields",
              "subTitle": "instoreFields",
              "dataType": 1
            }
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 222.5882840420549,
          "y": 538.4451150172046,
          "width": 110,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.257889577277546,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "9,4 g",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "right",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "R3KRZlXUCI",
          "type": "text",
          "name": "text-5",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 35.01507589634332,
          "y": 577.2755915858731,
          "width": 150,
          "height": 18,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "HIGH IN CALORIES",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "xrSRNR2HkI",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 16.259416832647247,
          "y": 580.9005435740081,
          "width": 10.750096023730611,
          "height": 10.750096023730599,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI1NjIyODIyMDE2OTc4Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNTYyMjgyMjAxNjk3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(86,167,64,1)"
          }
        },
        {
          "id": "dtlQ-yOl1l",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 18.001730663447837,
          "y": 618.6248889217079,
          "width": 150,
          "height": 23.046279393426104,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.257889577277544,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "Salt",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(122,122,133,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "lct6EyVjtb",
          "type": "text",
          "name": "text-4",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "articleField": {
              "parent": "instoreFields",
              "name": "free008",
              "aliasName": "free008",
              "subTitle": "instoreFields",
              "dataType": 1
            },
            "dataSource": "article_field"
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 222.001730663447,
          "y": 618.6248889217077,
          "width": 110,
          "height": 23,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
          "shadowEnabled": false,
          "shadowBlur": 5.257889577277546,
          "shadowOffsetX": 0,
          "shadowOffsetY": 0,
          "shadowColor": "black",
          "shadowOpacity": 1,
          "draggable": true,
          "resizable": true,
          "contentEditable": true,
          "styleEditable": true,
          "text": "0,240 g",
          "placeholder": "",
          "fontSize": 18,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "right",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.05,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "KPqWtoJGv2",
          "type": "text",
          "name": "text-5",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2
          },
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 35.554531288609894,
          "y": 657.1688605315545,
          "width": 150,
          "height": 18,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "text": "HIGH IN CALORIES",
          "placeholder": "",
          "fontSize": 14,
          "fontFamily": "AccordAlt_Light",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "rgba(112,111,112,1)",
          "align": "left",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0.06,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        },
        {
          "id": "8ymyNpmrt-",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 16.259416832647247,
          "y": 660.7938125196881,
          "width": 10.750096023731599,
          "height": 10.750096023731608,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI1NjIyODIyMDE2OTc4Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNTYyMjgyMjAxNjk3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(86,167,64,1)"
          }
        },
        {
          "id": "E0w9uuhj4k",
          "type": "svg",
          "name": "svg-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 17,
          "y": 263.96093437723385,
          "width": 10.730532206671683,
          "height": 10.730532206671734,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "src": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC43MDI1NjIyODIyMDE2OTc4Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDE1MCBtIC0xNTAsIDAgYSAxNTAsMTUwIDAgMSwwIDMwMCwwIGEgMTUwLDE1MCAwIDEsMCAtMzAwLDAiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMTUwIG0gLTE1MCwgMCBhIDE1MCwxNTAgMCAxLDAgMzAwLDAgYSAxNTAsMTUwIDAgMSwwIC0zMDAsMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNzAyNTYyMjgyMjAxNjk3OCkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
          "maskSrc": "",
          "cropX": 0,
          "cropY": 0,
          "cropWidth": 1,
          "cropHeight": 1,
          "keepRatio": false,
          "stretchEnabled": true,
          "flipX": false,
          "flipY": false,
          "borderColor": "black",
          "borderSize": 0,
          "cornerRadius": 0,
          "colorsReplace": {
            "#6B90F0": "rgba(255,164,27,1)"
          }
        },
        {
          "id": "v_Z2OkKob6",
          "type": "line",
          "name": "line-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": 0.4015617778476859,
          "y": 210.06416278397788,
          "width": 349.9999999999999,
          "height": 1,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "color": "rgba(216,216,216,1)",
          "dash": [],
          "startHead": "",
          "endHead": ""
        },
        {
          "id": "rqm1RcQ7Sy",
          "type": "line",
          "name": "line-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -5.6843418860808e-14,
          "y": 289.84257934389734,
          "width": 350.4015617778473,
          "height": 1,
          "rotation": -9.2947302440492e-15,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "color": "rgba(216,216,216,1)",
          "dash": [],
          "startHead": "",
          "endHead": ""
        },
        {
          "id": "Irvxsw7tbA",
          "type": "line",
          "name": "line-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -0.5984382221523106,
          "y": 368.69504751408664,
          "width": 349.9999999999999,
          "height": 1,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "color": "rgba(216,216,216,1)",
          "dash": [],
          "startHead": "",
          "endHead": ""
        },
        {
          "id": "_f-VKrK2DD",
          "type": "line",
          "name": "line-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -0.5984382221523106,
          "y": 448.33701148396216,
          "width": 349.9999999999999,
          "height": 1,
          "rotation": -9.3053942680533e-15,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "color": "rgba(216,216,216,1)",
          "dash": [],
          "startHead": "",
          "endHead": ""
        },
        {
          "id": "HEOWtba6lN",
          "type": "line",
          "name": "line-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -1.0000000000000533,
          "y": 527.9111266149424,
          "width": 350.4015617778473,
          "height": 1,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "color": "rgba(216,216,216,1)",
          "dash": [],
          "startHead": "",
          "endHead": ""
        },
        {
          "id": "SANagyl2Qt",
          "type": "line",
          "name": "line-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -0.5984382221526516,
          "y": 607.3583709365901,
          "width": 350,
          "height": 1,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "color": "rgba(216,216,216,1)",
          "dash": [],
          "startHead": "",
          "endHead": ""
        },
        {
          "id": "r6zw88HqzF",
          "type": "line",
          "name": "line-1",
          "opacity": 1,
          "visible": true,
          "selectable": true,
          "removable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "x": -5.6843418860808e-14,
          "y": 124.45044260294358,
          "width": 349.9999999999999,
          "height": 1,
          "rotation": 0,
          "animations": [],
          "blurEnabled": false,
          "blurRadius": 10,
          "brightnessEnabled": false,
          "brightness": 0,
          "sepiaEnabled": false,
          "grayscaleEnabled": false,
          "filters": {},
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
          "color": "rgba(216,216,216,1)",
          "dash": [],
          "startHead": "",
          "endHead": ""
        }
      ],
      "width": 350,
      "height": 687,
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC"
      },
      "duration": 5000
    }
  ],
  "audios": [],
  "unit": "px",
  "dpi": 72,
  "schemaVersion": 2
};

var articleJson = [
  {
    "companyUniqueCode": "7a79df55-f2cf-4847-9d0a-42e051f41f96",
    "shopUniqueCode": "1b2524f3-9e4c-4922-9979-41a1af339c9d",
    "masterCode": "NIP_00000700",
    "creationDate": "2024-06-03T14:41:14.098Z",
    "lastImportDate": "2026-06-18T07:55:44.024Z",
    "codes":
    [
        {
            "creationDate": "2024-06-03T14:41:13.992Z",
            "lastImportDate": "2026-06-18T07:55:43.845Z",
            "code": "8029404010998",
            "isPrimary": true
        }
    ],
    "importFields":
    {
        "masterCode": "NIP_00000700",
        "reorderCode": "8029404010998",
        "itemDescription1": "Leggerine Segale e Frumento",
        "itemDescription2": "Leggerine Segale e Frumento",
        "note": "",
        "stock": 2,
        "reorderLevel": null,
        "itemsOrdered": null,
        "unitMeasure": "Pcs",
        "size": null,
        "vat": null,
        "brand": "Sapori e Piaceri",
        "category1": "Showroom",
        "category2": "Showroom",
        "category3": "Showroom",
        "updateDate": null,
        "startDate": null,
        "stopDate": null,
        "available": 1,
        "status": null,
        "visible": 3,
        "price": 1.15,
        "unitPrice": 1.15,
        "listPrice": 1.15,
        "unitListPrice": 1.15,
        "price1": null,
        "price2": null,
        "price3": null,
        "price4": null,
        "price5": null,
        "discount": null,
        "promo": 0,
        "freeField00": "",
        "freeField01": "",
        "freeField02": "",
        "freeField03": "",
        "freeField04": "",
        "freeField05": "",
        "freeField06": "",
        "freeField07": "",
        "freeField08": "",
        "freeField09": "",
        "freeField10": "",
        "freeField11": "",
        "freeField12": "",
        "freeField13": "",
        "freeField14": "",
        "freeField15": "",
        "freeField16": "",
        "freeField17": "",
        "freeField18": "",
        "freeField19": "",
        "eanCode": "8029404010998"
    },
    "instoreFields":
    {
        "it-IT":
        {
            "locale": "it-IT",
            "isPrimary": true,
            "data":
            {
                "presentation": "https://nicolisproject.com/",
                "ingredients": "Gli ingredienti di questo prodotto sono: farina integrale di segale, frumento e di mais, malto d'orzo sale.",
                "allergens": "latticini",
                "free002": "62g",
                "free003": "1g",
                "free004": "1,7g",
                "free005": "0,30g",
                "free006": "15g",
                "free007": "10g",
                "free008": "0,63g",
                "imageFull": "https://appassets.androidplatform.net/assets/demo_templates/images/product_images/NIP_00000700.png"
            }
        }
    },
    "externalData": null,
    "systemData":
    {
        "hash":
        {
            "importFields": 1943921670,
            "codes": -1627167927,
            "instoreFields": -925159167
        },
        "importFieldsLastChangeDate": "2026-06-18T07:55:44.024Z",
        "instoreFieldsLastChangeDate": "2026-06-30T10:46:15.232Z"
    },
    "id": "665dd60d6202053130161983"
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

var userData = {
  txt_name: '',
  txt_description: '',
  num_calori: '',
  selc_allergy: '',
  bit_is_promo: '',
  Price_test: 100,
};

var tags = ['Tag1', 'Tag2', 'Macelleria'];

export const runPreviewtest = () => {
  validatePageRules(
    previewJson,
    articleJson,
    tags,
    'vip',
    'Europe/Rome',
    null,
    userData
  )
    .then((pageJson) => {
      console.log('page result... ', pageJson);
      validateElementRules(
        pageJson,
        articleJson,
        tags,
        'vip',
        'Europe/Rome',
        null,
        'it',
        userData
      )
        .then((elemJson) => {
          console.log('element result... ', elemJson);
        })
        .catch((err) => {
          console.log(err);
        });
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
