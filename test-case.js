import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson = {
  width: 800,
  height: 1280,
  fonts: [],
  pages: [
    {
      id: 'TnCU0f48zL',
      children: [
        {
          id: 'zq1yKis71R',
          type: 'image',
          name: '',
          opacity: 1,
          animations: [],
          visible: true,
          selectable: true,
          removable: true,
          alwaysOnTop: false,
          showInExport: true,
          x: 0,
          y: 0,
          width: 800,
          height: 1280,
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
          src: 'https://images.unsplash.com/photo-1679678691006-0ad24fecb769?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTY5OTZ8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4MjAwMTA3Mg&ixlib=rb-4.0.3&q=80&w=1080',
          cropX: 0,
          cropY: 0,
          cropWidth: 1,
          cropHeight: 1,
          cornerRadius: 0,
          flipX: false,
          flipY: false,
          clipSrc: '',
          borderColor: 'black',
          borderSize: 0,
          keepRatio: false,
        },
      ],
      width: 'auto',
      height: 'auto',
      background: 'white',
      bleed: 0,
      custom: {
        rules: [
          {
            ruleConditions: {
              conditions: {
                all: [
                  {
                    fact: 'article-fact',
                    operator: 'currentDateInBetweenDate',
                    value:
                      '2023-04-19T00:00:00.000Z#,#2023-04-21T23:59:59.000Z',
                    path: '',
                    dataSource: 'date_time',
                    articleField: null,
                    articleIndex: null,
                    conditionId: 'cMx60xM',
                  },
                ],
              },
              event: {
                type: 'true',
              },
            },
            ruleActions: [
              {
                elementField: '',
                actionType: 'Plain Text',
                actionField: {
                  path: '',
                  articleField: '',
                  dataSource: 'article_field',
                  articleIndex: null,
                },
                actionValue: '',
                prefixValue: '',
                sufixValue: '',
                substringRange: '',
                color: 'rgba(255,255,255,1)',
                actionId: 'ac6SFD5',
              },
            ],
            isToHideElement: false,
            ruleName: '',
            ruleId: 'page_rule_1682003003469',
            elementId: 'TnCU0f48zL',
            isToApplyFactFilters: false,
            isToApplyActionFilters: false,
            factFilters: [],
            actionFilters: [],
          },
        ],
      },
    },
    {
      id: 'zcZxwrcGwC',
      children: [
        {
          id: 'KLNWlP63Hr',
          type: 'image',
          name: '',
          opacity: 1,
          animations: [],
          visible: true,
          selectable: true,
          removable: true,
          alwaysOnTop: false,
          showInExport: true,
          x: 200,
          y: 340,
          width: 400,
          height: 600,
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
          src: 'https://images.unsplash.com/photo-1681914984703-f8c49628bb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTY5OTZ8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4MjAwMjg4Ng&ixlib=rb-4.0.3&q=80&w=1080',
          cropX: 0,
          cropY: 0,
          cropWidth: 1,
          cropHeight: 1,
          cornerRadius: 0,
          flipX: false,
          flipY: false,
          clipSrc: '',
          borderColor: 'black',
          borderSize: 0,
          keepRatio: false,
        },
      ],
      width: 'auto',
      height: 'auto',
      background: 'white',
      bleed: 0,
      custom: {
        rules: [
          {
            ruleConditions: {
              conditions: {
                all: [
                  {
                    fact: 'article-fact',
                    operator: 'currentDateNotInBetweenDate',
                    value:
                      '2023-04-19T00:00:00.000Z#,#2023-04-21T23:59:59.000Z',
                    path: '',
                    dataSource: 'date_time',
                    articleField: null,
                    articleIndex: null,
                    conditionId: 'cMx60xM',
                  },
                ],
              },
              event: {
                type: 'true',
              },
            },
            ruleActions: [
              {
                elementField: '',
                actionType: 'Plain Text',
                actionField: {
                  path: '',
                  articleField: '',
                  dataSource: 'article_field',
                  articleIndex: null,
                },
                actionValue: '',
                prefixValue: '',
                sufixValue: '',
                substringRange: '',
                color: 'rgba(255,255,255,1)',
                actionId: 'ac6SFD5',
              },
            ],
            isToHideElement: false,
            ruleName: '',
            ruleId: 'page_rule_1682003031812',
            elementId: 'zcZxwrcGwC',
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
  validatePageRules(previewJson, articleJson, tags)
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
