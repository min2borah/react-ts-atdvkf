import { validateElementRules } from './rule-engine.js';

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
// ruleEngine.ValidateScenario( {
//     "scenarioUniqueCode": "e65e4f91-be13-4641-bf94-94f6c5d67c8d",
//     "name": "Base2",
//     "description": "",
//     "state": 1,
//     "orderIndex": 1,
//     "rules": [{
//       "ruleCode": "4339c8ac-1491-42c2-bfe0-550758d0f5b3",
//       "name": "",
//       "isToApplyFilters": false,
//       "filters": null,
//       "ruleConditions": {
//         "conditions": {
//           "all": [{
//             "fact": "article-fact",
//             "operator": "lessThanCurrentDate",
//             "value": "2022-11-01T16:17:59Z",
//             "path": "",
//             "dataSource": "article_field",
//             "articleField": "",
//             "conditionId": "c09R5ww"
//           }]
//         },
//         "event": {
//           "type": "true"
//         }
//       },
//       "creationDate": "10/28/2022 15:18:31",
//       "lastUpdateDate": "11/03/2022 07:28:28"
//     }],
//     "templates": [{
//       "name": "",
//       "device": "VIP Standard",
//       "applicationType": "CONTENT_ON_DEMAND",
//       "width": 1280,
//       "height": 720,
//       "orientation": 0,
//       "templateUniqueCode": "1521c85c-9fe6-4057-957f-87a8faf74bd1",
//       "creationDate": "10/28/2022 15:19:18",
//       "lastUpdateDate": "10/28/2022 15:19:17"
//     }, {
//       "name": "",
//       "device": "LN0290BN@R_007",
//       "applicationType": "ESL",
//       "width": 384,
//       "height": 168,
//       "orientation": 0,
//       "templateUniqueCode": "df49db4d-a8cc-4e8f-bffd-59385f8b5972",
//       "creationDate": "11/02/2022 17:12:13",
//       "lastUpdateDate": "11/02/2022 17:12:12"
//     }, {
//       "name": "",
//       "device": "VIP Custom Resolution",
//       "applicationType": "CONTENT_ON_DEMAND",
//       "width": 1024,
//       "height": 768,
//       "orientation": 0,
//       "templateUniqueCode": "ddce8753-e51a-4475-bcf9-33325be19ccd",
//       "creationDate": "11/04/2022 17:05:22",
//       "lastUpdateDate": "11/04/2022 17:05:22"
//     }],
//     "creationDate": "10/28/2022 15:18:31",
//     "lastUpdateDate": "11/03/2022 07:28:28"
//   } ,null ,[])

export const runtest = () => {
  validateElementRules(previewJson, articleJson)
    .then((resultJson) => {})
    .catch((err) => {
      console.log(err);
    });
};
