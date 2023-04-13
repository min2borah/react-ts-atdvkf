import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson = {
  width: 296,
  height: 152,
  fonts: [],
  pages: [
    {
      id: 'TnCU0f48zL',
      children: [
        {
          id: 'iuxUb2kz8O',
          type: 'text',
          name: '',
          opacity: 1,
          animations: [],
          visible: true,
          selectable: true,
          removable: true,
          alwaysOnTop: false,
          showInExport: true,
          x: 50.18632410882897,
          y: 25.332634217950385,
          width: 105,
          height: 16,
          rotation: 0,
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          shadowEnabled: false,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'black',
          shadowOpacity: 1,
          draggable: true,
          resizable: true,
          contentEditable: true,
          styleEditable: true,
          text: 'x - 50',
          placeholder: '',
          fontSize: 12,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'left',
          verticalAlign: 'middle',
          strokeWidth: 0,
          stroke: 'black',
          lineHeight: 1.2,
          letterSpacing: 0,
          backgroundEnabled: false,
          backgroundColor: '#7ED321',
          backgroundOpacity: 1,
          backgroundCornerRadius: 0.5,
          backgroundPadding: 0.5,
        },
        {
          id: 's9SeWwDs1g',
          type: 'text',
          name: '',
          opacity: 1,
          animations: [],
          visible: true,
          selectable: true,
          removable: true,
          alwaysOnTop: false,
          showInExport: true,
          x: 99.95952719557971,
          y: 65.35616807304203,
          width: 105,
          height: 16,
          rotation: 0,
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          shadowEnabled: false,
          shadowBlur: 5,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowColor: 'black',
          shadowOpacity: 1,
          draggable: true,
          resizable: true,
          contentEditable: true,
          styleEditable: true,
          text: 'x - 100',
          placeholder: '',
          fontSize: 12,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'left',
          verticalAlign: 'middle',
          strokeWidth: 0,
          stroke: 'black',
          lineHeight: 1.2,
          letterSpacing: 0,
          backgroundEnabled: false,
          backgroundColor: '#7ED321',
          backgroundOpacity: 1,
          backgroundCornerRadius: 0.5,
          backgroundPadding: 0.5,
        },
      ],
      width: 'auto',
      height: 'auto',
      background: 'white',
      bleed: 0,
      custom: {
        pageType: 'DYNAMIC',
        eslPageIndex: 1,
        groups: [
          {
            id: 'group_1679320304119',
            name: 'g1',
            elements: ['iuxUb2kz8O', 's9SeWwDs1g'],
            rules: [
              {
                ruleConditions: {
                  conditions: {
                    any: [
                      {
                        fact: 'article-fact',
                        operator: 'cus_equal',
                        value: true,
                        path: "$.importFields['promo']",
                        dataSource: 'article_field',
                        articleField: {
                          name: 'promo',
                          parent: 'importFields',
                          subTitle: 'importFields',
                          dataType: 5,
                          dbPath: 'importFields.promo',
                        },
                        conditionId: 'Wt_G9Zb',
                      },
                    ],
                  },
                  event: { type: 'true' },
                },
                ruleActions: [
                  {
                    elementField: 'x',
                    actionType: 'Plain Text',
                    actionField: {
                      path: '',
                      articleField: '',
                      dataSource: 'article_field',
                    },
                    actionValue: '75',
                    prefixValue: '',
                    sufixValue: '',
                    substringRange: '',
                    color: 'rgba(255,255,255,1)',
                    actionId: '-1kGoO5',
                  },
                ],
                isToHideElement: false,
                ruleName: 'r1',
                ruleId: 'rule_1679320304119',
                isToApplyFactFilters: false,
                isToApplyActionFilters: false,
                factFilters: [],
                actionFilters: [],
              },
            ],
          },
        ],
        update: 1679320304119,
        rules: [
          {
            ruleConditions: {
              conditions: {
                all: [
                  {
                    fact: 'article-fact',
                    operator: 'DeviceTagNotContain',
                    value: 'Macelleria',
                    path: '',
                    dataSource: 'Device Tag',
                    articleField: '',
                    conditionId: 'MVPkKef',
                  },
                ],
              },
              event: { type: 'true' },
            },
            ruleActions: [
              {
                elementField: '',
                actionType: 'Plain Text',
                actionField: {
                  path: '',
                  articleField: '',
                  dataSource: 'article_field',
                },
                actionValue: '',
                prefixValue: '',
                sufixValue: '',
                substringRange: '',
                color: 'rgba(255,255,255,1)',
                actionId: 'MrARQp8',
              },
            ],
            isToHideElement: true,
            ruleName: '',
            ruleId: 'page_rule_1681197060479',
            elementId: 'TnCU0f48zL',
            isToApplyFactFilters: false,
            isToApplyActionFilters: false,
            factFilters: [],
            actionFilters: [],
          },
        ],
      },
    },
  ],
  unit: 'px',
  dpi: 72,
};

var articleJson = {
  companyUniqueCode: '00000000-0000-0000-0000-000000000000',
  shopUniqueCode: '7b1624ed-4473-47e8-9481-5534f47b208b',
  masterCode: 'NIP_00000301',
  creationDate: '2022-10-28T13:48:47.643Z',
  lastImportDate: '2022-10-28T13:48:47.734Z',
  codes: [
    {
      creationDate: '2022-10-28T13:48:47.483Z',
      lastImportDate: '2022-10-28T13:48:47.483Z',
      code: '8002010002427',
      isPrimary: true,
    },
  ],
  importFields: {
    masterCode: 'NIP_00000301',
    eanCode: '8002010002427',
    reorderCode: '8000013025917',
    itemDescription1: "Rapitala Nero D'Avola",
    itemDescription2: "Rapitala Nero D'Avola",
    note: '',
    stock: 2,
    reorderLevel: null,
    itemsOrdered: null,
    unitMeasure: 'Pcs',
    size: null,
    vat: null,
    brand: 'Rapitala',
    category1: 'ALCOLICI',
    category2: 'VINO',
    category3: 'VINI ROSSI CLASSICI',
    updateDate: null,
    startDate: null,
    stopDate: null,
    available: 1,
    status: null,
    visible: 3,
    price: 6.48,
    unitPrice: 6.48,
    listPrice: 7.2,
    unitListPrice: 7.2,
    price1: null,
    price2: null,
    price3: null,
    price4: null,
    price5: null,
    discount: 10,
    promo: 1,
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
        description: "Rapitala Nero D'Avola",
        imageWide: '',
        videoProduct: '',
        imageFull: 'NIP_00000301.png',
        thumbnailImage: 'tmb_NIP_00000301.png',
        wineTypes: 'Rosso',
        wineFoodPairings: 'carne, primi e risotti',
        wineGrapes: "nero d'avola",
        wineCountry: 'Italia',
        wineRegion: 'Sicilia',
        wineStyle: 'Vini rossi corposi',
        wineTastingNotes: 'frutti rossi, bacche nere, erbe aromatiche',
        wineAppellation: 'I.G.T.',
        wineAlcoholContent: '13.5',
        wineColor: 'Rosso Rubino',
        imageBrand: '',
        imageBlueprint: '',
        imageFree00: '',
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
  externalData: null,
  systemData: {
    hash: {
      codes: 393502885,
      importFields: 548087810,
      instoreFields: 1297759859,
    },
    importFieldsLastChangeDate: '2022-10-28T13:48:47.734Z',
    instoreFieldsLastChangeDate: '2022-11-02T17:06:07.896Z',
    externalDataLastChangeDate: '0001-01-01T00:00:00',
  },
  id: '635bddbf3c0ac8e7fe6da324',
};

var scenario = {
  "scenarioUniqueCode": "43ebdbc0-acea-481e-b4b4-aac1fb0e1901",
  "name": "easter",
  "description": "test",
  "state": 1,
  "orderIndex": 2,
  "rules": [
      {
          "ruleCode": "cee276a4-5274-4822-b09f-a268a29bfc32",
          "name": "easter",
          "isToApplyFilters": false,
          "filters": null,
          "ruleConditions": {
              "conditions": {
                  "all": [
                      {
                          "fact": "article-fact",
                          "operator": "currentDateInBetweenDate",
                          "value": "2023-03-25T18:30:00.000Z#,#2023-04-15T11:56:02.000Z",
                          "path": "",
                          "dataSource": "date_time",
                          "articleField": "",
                          "conditionId": "egStQiw"
                      }
                  ]
              },
              "event": {
                  "type": "true"
              }
          },
          "creationDate": "04/13/2023 11:58:34",
          "lastUpdateDate": "04/13/2023 11:58:34"
      }
  ],
  "templates": [
      {
          "name": "",
          "device": "Tablet",
          "applicationType": "CONTENT_ON_DEMAND",
          "width": 1280,
          "height": 800,
          "orientation": 0,
          "templateUniqueCode": "5dbc3079-c7c0-4fa5-a6f0-2db9807850ba",
          "creationDate": "04/13/2023 11:58:40",
          "lastUpdateDate": "04/13/2023 11:58:40"
      }
  ],
  "creationDate": "04/13/2023 11:58:34",
  "lastUpdateDate": "04/13/2023 11:58:34"
};

var tags = ['Tag1', 'Tag2', 'Macelleria'];

export const runPreviewtest = () => {
  validateGroupRules(previewJson, articleJson, tags)
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
