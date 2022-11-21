import { validateElementRules, validateScenarioRules } from './rule-engine.js';

var previewJson = {
  width: 1024,
  height: 768,
  fonts: [],
  pages: [
    {
      id: 'TnCU0f48zL',
      children: [
        {
          "id": "ND_09IxrKk",
          "type": "text",
          "name": "",
          "x": 256,
          "y": 321.5,
          "rotation": 0,
          "opacity": 1,
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
          "custom": {
            "articleField": null,
            "dataSource": "pim_data",
            "rules": [
              {
                "ruleConditions": {
                  "conditions": {
                    "all": [
                      {
                        "fact": "article-fact",
                        "operator": "cus_greaterThanInclusive",
                        "value": "2",
                        "path": "$.externalData['PIM'].data['en-US']['vino']['txt_AlcoholContent']",
                        "dataSource": "pim_data",
                        "articleField": {
                          "name": "txt_AlcoholContent",
                          "parent": "vino",
                          "subTitle": "vino"
                        },
                        "conditionId": "r8NlfZA"
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
                    "actionType": "Article Value",
                    "actionField": {
                      "path": "externalData['PIM'].data['en-US']['vino']['txt_AlcoholContent']",
                      "articleField": {
                        "name": "txt_AlcoholContent",
                        "parent": "vino",
                        "subTitle": "vino"
                      },
                      "dataSource": "pim_data"
                    },
                    "actionValue": "",
                    "prefixValue": "",
                    "sufixValue": "",
                    "substringRange": "",
                    "color": "rgba(255,255,255,1)",
                    "actionId": "zH54Nh7"
                  }
                ],
                "isToHideElement": false,
                "ruleName": "rul 1",
                "ruleId": "rule_1668688617878",
                "elementId": "ND_09IxrKk",
                "isToApplyFactFilters": false,
                "isToApplyActionFilters": false,
                "factFilters": [],
                "actionFilters": []
              }
            ]
          },
          "visible": true,
          "draggable": true,
          "selectable": true,
          "contentEditable": true,
          "styleEditable": true,
          "alwaysOnTop": false,
          "showInExport": true,
          "text": "CIAO",
          "placeholder": "",
          "fontSize": 125,
          "fontFamily": "Roboto",
          "fontStyle": "normal",
          "fontWeight": "normal",
          "textDecoration": "",
          "fill": "black",
          "align": "center",
          "width": 512,
          "height": 151,
          "verticalAlign": "top",
          "strokeWidth": 0,
          "stroke": "black",
          "lineHeight": 1.2,
          "letterSpacing": 0
        }
      ],
      width: 'auto',
      height: 'auto',
      background: 'white',
      bleed: 0,
    },
  ],
  unit: 'px',
  dpi: 72,
};

var articleJson = {
  CompanyUniqueCode: '00000000-0000-0000-0000-000000000000',
  ShopUniqueCode: 'cdfb76da-969e-4807-a324-d6ec36667b10',
  MasterCode: 'NIP_00000330',
  CreationDate: '2022-09-14T15:28:57.077Z',
  LastImportDate: '2022-09-14T15:29:00.09Z',
  Codes: [
    {
      CreationDate: '2022-09-14T15:28:55.978Z',
      LastImportDate: '2022-09-14T15:28:55.978Z',
      Code: '8000037000679',
      IsPrimary: true,
    },
  ],
  importFields: {
    masterCode: 'NIP_00000330',
    eanCode: '8000037000679',
    reorderCode: '',
    itemDescription1: 'Valdobbiadene Prosecco Superiore',
    itemDescription2: 'Valdobbiadene Prosecco Superiore',
    note: '',
    stock: 2,
    reorderLevel: 1.7976931348623157e308,
    itemsOrdered: 1.7976931348623157e308,
    unitMeasure: 'Pcs',
    size: 1.7976931348623157e308,
    vat: 1.7976931348623157e308,
    brand: 'Valdobbiadene',
    category1: '',
    category2: 'Wine',
    category3: '',
    updateDate: '9999-12-31T23:59:59.9999999Z',
    startDate: '9999-12-31T23:59:59.9999999Z',
    stopDate: '2022-12-31T00:00:00Z',
    available: 1,
    status: 2147483647,
    visible: 0,
    price: 7.84,
    unitPrice: 7.84,
    listPrice: 8.25,
    unitListPrice: 8.25,
    price1: 1.7976931348623157e308,
    price2: 8.25,
    price3: 1.7976931348623157e308,
    price4: 8.25,
    price5: 1.7976931348623157e308,
    discount: 5,
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
  },
  instoreFields: {
    'it-it': {
      locale: 'it-it',
      isPrimary: true,
      data: {
        description: 'Valdobbiadene Prosecco Superiore',
        imageWide: '',
        videoProduct: '',
        imageFull: 'NIP_00000330.png',
        thumbnailImage: 'tmb_NIP_00000330.png',
        wineTypes: 'Frizzante',
        wineFoodPairings:
          'pesce, piatti vegetariani, antipasti, salumi e formaggi',
        wineGrapes: 'glera',
        wineCountry: 'Italia',
        wineRegion: 'Veneto',
        wineStyle: 'Vini bianchi di corposità media',
        wineTastingNotes: 'frutti, erbe, agrumi',
        wineAppellation: 'D.O.C.',
        wineAlcoholContent: '11',
        wineColor: 'Giallo Paglierino',
        imageBrand: '',
        imageBlueprint: '',
        imageFree00: '2022-10-27T13:34:55.434Z',
        imageFree01: '',
        imageFree02: '',
        imageFree03: '',
        imageFree04: '',
        imagePortrait: '',
        videoProductPortrait: '',
        imageStrip60: '',
        videoProductStrip60: '',
        imageStrip90: '',
        videoProductStrip90: '',
      },
    },
  },
  externalData: {
    PIM: {
        version: 3,
        data: {
            'it-IT' : {
                locale: "it-IT",
                isPrimary: false,
                data: {
                    vino: {
                        age: "2323fsv "
                    },
                    wine: {
                        "productDescription": "ghrtre",
                        "ingredents": "sregwe"
                    }
                }
            },
            'en-US': {
                locale: "en-US",
                isPrimary: true,
                data: {
                    vino: {
                        age: "dasgsdf",
                        txt_DescrizioneVino: "df",
                        txt_StatoOrigine: "sdfgsdf",
                        txt_RegioneOrigine: "dasgf",
                        txt_AlcoholContent: 23,
                        rdb_ColoreVino: "keyColoreRosato",
                        cmb_AbbinamentoCiboVino: [
                            "keySecondi",
                            "keyDessert"
                        ]
                    },
                    allergeni: {
                        chk_Molluschi: true,
                        chk_Lupini: true
                    },
                    wine: {
                        productDescription: "srthret",
                        ingredents: "dfsg"
                    }
                }
            },
            'fr-FR': {
                locale: "fr-FR",
                isPrimary: false,
                data: {
                    wine: {
                        productDescription: "ghnyjutyu",
                        ingredents: "sg"
                    }
                }
            }
        }
    }
  },
  systemData: {
    Hash: {
      codes: 1922533703,
      importFields: 98121395,
      instoreFields: 1197890734,
    },
    ImportFieldsLastChangeDate: '2022-09-14T15:29:00.09Z',
    InstoreFieldsLastChangeDate: '2022-09-15T09:37:45.985Z',
  },
  Id: '6321f33c830105063be2d9c3',
};

var scenario =  {
  "scenarioUniqueCode": "dc042c0b-72b7-46fe-8de6-f717f2b4ea50",
  "name": "BASE",
  "description": "",
  "state": 1,
  "orderIndex": 1,
  "rules": [
      {
          "ruleCode": "bf57c215-48a9-4e7b-8c54-19c2f474119b",
          "name": "",
          "isToApplyFilters": false,
          "filters": null,
          "ruleConditions": {
              "conditions": {
                  "all": [
                      {
                          "fact": "article-fact",
                          "operator": "greaterThanCurrentDate",
                          "value": "2022-10-17T15:12:21Z",
                          "path": "",
                          "dataSource": "article_field",
                          "articleField": "",
                          "conditionId": "nB0LF_3"
                      }
                  ]
              },
              "event": {
                  "type": "true"
              }
          },
          "creationDate": "10/26/2022 15:28:36",
          "lastUpdateDate": "11/21/2022 07:58:04"
      }
  ],
  "templates": [
      {
          "name": "",
          "device": "VIP Standard",
          "applicationType": "CONTENT_ON_DEMAND",
          "width": 1280,
          "height": 720,
          "orientation": 0,
          "templateUniqueCode": "88f13f15-e948-42db-b0ac-0149a07028d1",
          "creationDate": "10/26/2022 15:28:43",
          "lastUpdateDate": "10/26/2022 15:28:43"
      },
      {
          "name": "",
          "device": "VIP Custom Resolution",
          "applicationType": "CONTENT_ON_DEMAND",
          "width": 1024,
          "height": 768,
          "orientation": 0,
          "templateUniqueCode": "fbd63fa8-f963-44f1-84b6-f21314d3909d",
          "creationDate": "10/26/2022 15:44:27",
          "lastUpdateDate": "10/26/2022 15:44:27"
      },
      {
          "name": "",
          "device": "LN0290BN@R_007",
          "applicationType": "ESL",
          "width": 384,
          "height": 168,
          "orientation": 0,
          "templateUniqueCode": "7c25059f-435d-468f-83e5-ad0deccfa0c4",
          "creationDate": "10/31/2022 06:21:34",
          "lastUpdateDate": "10/31/2022 06:21:33"
      },
      {
          "name": "",
          "device": "LN0266BN@R_004",
          "applicationType": "ESL",
          "width": 360,
          "height": 184,
          "orientation": 0,
          "templateUniqueCode": "fd0b79d2-e538-443b-b348-b0c4cd44d8e5",
          "creationDate": "11/02/2022 14:47:04",
          "lastUpdateDate": "11/02/2022 14:47:04"
      },
      {
          "name": "",
          "device": "LN0420BN@R_009",
          "applicationType": "ESL",
          "width": 400,
          "height": 300,
          "orientation": 0,
          "templateUniqueCode": "ceeebbd1-373b-4266-a038-4160f93d619f",
          "creationDate": "11/02/2022 15:32:35",
          "lastUpdateDate": "11/02/2022 15:32:35"
      },
      {
          "name": "",
          "device": "VIP Standard",
          "applicationType": "SLIDE_SHOW",
          "width": 1280,
          "height": 720,
          "orientation": 0,
          "templateUniqueCode": "07c04384-3eef-4aea-b00d-7ac213d0d99a",
          "creationDate": "11/03/2022 07:54:35",
          "lastUpdateDate": "11/03/2022 07:54:34"
      }
  ],
  "creationDate": "10/26/2022 15:28:36",
  "lastUpdateDate": "11/21/2022 07:58:04"
}

export const runPreviewtest = () => {
  validateElementRules(previewJson, articleJson)
    .then((resultJson) => {})
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
