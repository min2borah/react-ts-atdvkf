import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson ={
  "width": 296,
  "height": 128,
  "fonts": [],
  "pages": [
    {
      "id": "lsJSuYM0ED",
      "children": [
        {
          "id": "CScE5FSHfE",
          "type": "text",
          "name": "text-1",
          "opacity": 1,
          "custom": {
            "verticalAlign": "top-new",
            "version": 2,
            "dataSource": "article_field",
            "articleField": null,
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "article-fact",
                        "operator": "greaterThanDays",
                        "value": "3",
                        "path": "$.importFields['stopDate']",
                        "dataSource": "article_field",
                        "articleField": {
                          "name": "stopDate",
                          "parent": "importFields",
                          "subTitle": "importFields",
                          "dataType": 4,
                          "aliasName": "stopDate",
                          "dbPath": "importFields.stopDate"
                        },
                        "articleIndex": null,
                        "conditionId": "huJErzcxXWpMAmwGflGRH",
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
                    "actionId": "S1LE4ZrNQo3unZVtvEiCa"
                  }
                ],
                "isToHideElement": true,
                "ruleName": "test",
                "ruleId": "rule_1787833418175",
                "elementId": "CScE5FSHfE",
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
          "x": 38.36915807560139,
          "y": 33.07525773195876,
          "width": 148,
          "height": 16,
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
          "text": "Body text",
          "placeholder": "",
          "fontSize": 12,
          "fontFamily": "Roboto",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "textTransform": "none",
          "fill": "black",
          "align": "center",
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0,
          "backgroundEnabled": false,
          "backgroundColor": "#7ED321",
          "backgroundOpacity": 1,
          "backgroundCornerRadius": 0.5,
          "backgroundPadding": 0.5,
          "curveEnabled": false,
          "curvePower": 0.5
        }
      ],
      "width": "auto",
      "height": "auto",
      "background": "white",
      "bleed": 0,
      "custom": {
        "pageType": "DYNAMIC",
        "eslPageIndex": 1,
        "accessibility": {
          "isEnabled": true,
          "params": []
        }
      },
      "duration": 5000
    }
  ],
  "audios": [],
  "unit": "px",
  "dpi": 72,
  "custom": {
    "sourceMap": {
      "img_1": "data:image/svg+xml;base64,CiAgICA8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiPgogICAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtMC42MzE2ODc0MjY0NjEyNTQ1Ij4KICAgICAgPHBhdGggZD0iTSAxNTAgMCBMIDE5NC4wODM4OTM5MjE5MzU1IDg5LjMyMzcyNTQyMTg3ODk1IEwgMjkyLjY1ODQ3NzQ0NDI3MyAxMDMuNjQ3NDUwODQzNzU3ODggTCAyMjEuMzI5MjM4NzIyMTM2NTIgMTczLjE3NjI3NDU3ODEyMTA1IEwgMjM4LjE2Nzc4Nzg0Mzg3MSAyNzEuMzUyNTQ5MTU2MjQyMSBMIDE1MCAyMjUgTCA2MS44MzIyMTIxNTYxMjkwNDYgMjcxLjM1MjU0OTE1NjI0MjE2IEwgNzguNjcwNzYxMjc3ODYzNDkgMTczLjE3NjI3NDU3ODEyMTA4IEwgNy4zNDE1MjI1NTU3MjY5NTQgMTAzLjY0NzQ1MDg0Mzc1NzkyIEwgMTA1LjkxNjEwNjA3ODA2NDUgODkuMzIzNzI1NDIxODc4OTUgWiIgLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgoKICA8IS0tIFBhdGggZm9yIHRoZSBmaWxsIC0tPgogIDxwYXRoIGQ9Ik0gMTUwIDAgTCAxOTQuMDgzODkzOTIxOTM1NSA4OS4zMjM3MjU0MjE4Nzg5NSBMIDI5Mi42NTg0Nzc0NDQyNzMgMTAzLjY0NzQ1MDg0Mzc1Nzg4IEwgMjIxLjMyOTIzODcyMjEzNjUyIDE3My4xNzYyNzQ1NzgxMjEwNSBMIDIzOC4xNjc3ODc4NDM4NzEgMjcxLjM1MjU0OTE1NjI0MjEgTCAxNTAgMjI1IEwgNjEuODMyMjEyMTU2MTI5MDQ2IDI3MS4zNTI1NDkxNTYyNDIxNiBMIDc4LjY3MDc2MTI3Nzg2MzQ5IDE3My4xNzYyNzQ1NzgxMjEwOCBMIDcuMzQxNTIyNTU1NzI2OTU0IDEwMy42NDc0NTA4NDM3NTc5MiBMIDEwNS45MTYxMDYwNzgwNjQ1IDg5LjMyMzcyNTQyMTg3ODk1IFoiIGZpbGw9IiM2QjkwRjAiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiLz4KCiAgPCEtLSBQYXRoIGZvciB0aGUgc3Ryb2tlLCBjbGlwcGVkIGJ5IHRoZSBzdGFyIHBhdGggLS0+CiAgPHBhdGggZD0iTSAxNTAgMCBMIDE5NC4wODM4OTM5MjE5MzU1IDg5LjMyMzcyNTQyMTg3ODk1IEwgMjkyLjY1ODQ3NzQ0NDI3MyAxMDMuNjQ3NDUwODQzNzU3ODggTCAyMjEuMzI5MjM4NzIyMTM2NTIgMTczLjE3NjI3NDU3ODEyMTA1IEwgMjM4LjE2Nzc4Nzg0Mzg3MSAyNzEuMzUyNTQ5MTU2MjQyMSBMIDE1MCAyMjUgTCA2MS44MzIyMTIxNTYxMjkwNDYgMjcxLjM1MjU0OTE1NjI0MjE2IEwgNzguNjcwNzYxMjc3ODYzNDkgMTczLjE3NjI3NDU3ODEyMTA4IEwgNy4zNDE1MjI1NTU3MjY5NTQgMTAzLjY0NzQ1MDg0Mzc1NzkyIEwgMTA1LjkxNjEwNjA3ODA2NDUgODkuMzIzNzI1NDIxODc4OTUgWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMGMwYzBjIiBzdHJva2Utd2lkdGg9IjAiIGNsaXAtcGF0aD0idXJsKCNjbGlwLTAuNjMxNjg3NDI2NDYxMjU0NSkiIHRyYW5zZm9ybT0ic2NhbGUoMSwgMSkiIHN0cm9rZS1kYXNoYXJyYXk9IiIvPgogICAgPC9zdmc+CiAg",
      "img_2": "data:image/webp;base64,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",
      "img_3": "data:image/webp;base64,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"
    }
  },
  "schemaVersion": 2
};

var articleJson = [
  {
    companyUniqueCode: '7a79df55-f2cf-4847-9d0a-42e051f41f96',
    shopUniqueCode: '1b2524f3-9e4c-4922-9979-41a1af339c9d',
    masterCode: 'NIP_00000700',
    creationDate: '2024-06-03T14:41:14.098Z',
    lastImportDate: '2026-06-18T07:55:44.024Z',
    codes: [
      {
        creationDate: '2024-06-03T14:41:13.992Z',
        lastImportDate: '2026-06-18T07:55:43.845Z',
        code: '8029404010998',
        isPrimary: true,
      },
    ],
    importFields: {
      masterCode: 'NIP_00000700',
      reorderCode: '8029404010998',
      itemDescription1: 'Leggerine Segale e Frumento',
      itemDescription2: 'Leggerine Segale e Frumento',
      note: '',
      stock: 2,
      reorderLevel: null,
      itemsOrdered: null,
      unitMeasure: 'Pcs',
      size: null,
      vat: null,
      brand: 'Sapori e Piaceri',
      category1: 'Showroom',
      category2: 'Showroom',
      category3: 'Showroom',
      updateDate: null,
      startDate: null,
      stopDate: '2026-08-27T13:34:23Z',
      available: 1,
      status: null,
      visible: 3,
      price: 1.15,
      unitPrice: 1.15,
      listPrice: 1.15,
      unitListPrice: 1.15,
      price1: null,
      price2: null,
      price3: null,
      price4: null,
      price5: null,
      discount: null,
      promo: 0,
      freeField00: '',
      freeField01: '',
      freeField02: '',
      freeField03: '',
      freeField04: '',
      freeField05: '',
      freeField06: '',
      freeField07: '',
      freeField08: '',
      freeField09: '',
      freeField10: '',
      freeField11: '',
      freeField12: '',
      freeField13: '',
      freeField14: '',
      freeField15: '',
      freeField16: '',
      freeField17: '',
      freeField18: '',
      freeField19: '',
      eanCode: '8029404010998',
    },
    instoreFields: {
      'it-IT': {
        locale: 'it-IT',
        isPrimary: true,
        data: {
          presentation: 'https://nicolisproject.com/',
          ingredients:
            "Gli ingredienti di questo prodotto sono: farina integrale di segale, frumento e di mais, malto d'orzo sale.",
          allergens: 'latticini',
          free002: '62g',
          free003: '1g',
          free004: '1,7g',
          free005: '0,30g',
          free006: '15g',
          free007: '10g',
          free008: '0,63g',
          imageFull:
            'https://appassets.androidplatform.net/assets/demo_templates/images/product_images/NIP_00000700.png',
        },
      },
    },
    externalData: null,
    systemData: {
      hash: {
        importFields: 1943921670,
        codes: -1627167927,
        instoreFields: -925159167,
      },
      importFieldsLastChangeDate: '2026-06-18T07:55:44.024Z',
      instoreFieldsLastChangeDate: '2026-06-30T10:46:15.232Z',
    },
    id: '665dd60d6202053130161983',
  },
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
