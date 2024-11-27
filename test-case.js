import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson = {
  width: 500,
  height: 500,
  fonts: [],
  pages: [
    {
      id: 'TnCU0f48zL',
      children: [
        {
          id: 'ZjiILAV5yn',
          type: 'image',
          name: '',
          opacity: 1,
          custom: {
            imageName: 'molluschi.png',
            imageSize: 2,
            imageWidth: 54,
            imageHeight: 49,
            imageType: 'image/png',
            rules: [
              {
                ruleConditions: {
                  conditions: {
                    all: [
                      {
                        fact: 'user-data-fact',
                        operator: 'cus_lessThanInclusive',
                        value: '100',
                        path: '$.price_test',
                        dataSource: 'user_data',
                        articleField: {
                          name: 'Price_test',
                          aliasName: 'Price_test',
                          parent: '',
                          subTitle: '',
                          dataType: 2,
                          options: null,
                          title: 'Price Test',
                          id: '1f31ae62-d147-4b9e-832c-b5697cfe99a4',
                          dbPath: 'price_test',
                        },
                        articleIndex: null,
                        conditionId: 'VRWlxy5VzPC4DRefHeMFf',
                        articleFieldComparisonValue: null,
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
                    actionId: 'ZS486qLsbz8kTtnOxzZ7f',
                  },
                ],
                isToHideElement: true,
                ruleName: 'www',
                ruleId: 'rule_1727342817935',
                elementId: 'ZjiILAV5yn',
                isToApplyFactFilters: false,
                isToApplyActionFilters: false,
                factFilters: [],
                actionFilters: [],
              },
            ],
          },
          visible: true,
          selectable: true,
          removable: true,
          alwaysOnTop: false,
          showInExport: true,
          x: 54.49015428932563,
          y: 88.63877781306617,
          width: 54,
          height: 49,
          rotation: 0,
          animations: [],
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
          src: '/api/pimmultimedia/ImageStorage/GetFileByName?fileName=103370c82e26449cb9e9d074c39bfa47.png&applicationType=APP_VARIANT_VIP&companyUniqueCode=2fc67e32-2cae-4966-a118-86e93678dd89',
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
      duration: 5000,
    },
  ],
  audios: [],
  unit: 'px',
  dpi: 72,
};

var articleJson = [
  {
    companyUniqueCode: 'b8895f89-6d61-4ada-8df2-8e4e94e9f553',
    shopUniqueCode: 'c8e48dec-d8a4-4f8b-af15-40bec444a117',
    masterCode: '1004455923005',
    creationDate: '2023-06-12T09:08:02.362Z',
    lastImportDate: '2023-07-17T18:15:14.719Z',
    codes: [
      {
        creationDate: '2023-06-12T09:08:02.24Z',
        lastImportDate: '2023-07-17T18:15:13.816Z',
        code: '8007425002154',
        isPrimary: true,
      },
    ],
    importFields: {
      masterCode: '1004455923005',
      eanCode: '8007425002154',
      reorderCode: 'CALAFORTE MAREMMA DOC FRES75CL',
      itemDescription1: 'CALAFORTE MAREMMA DOC FRES75CL',
      itemDescription2: '',
      note: '',
      stock: 470,
      reorderLevel: null,
      itemsOrdered: null,
      unitMeasure: 'L',
      size: 750,
      vat: 22,
      brand: '',
      category1: 'VINI TIPICI',
      category2: 'ROSSI',
      category3: 'ROSSI',
      updateDate: '2023-07-17T00:00:00Z',
      startDate: null,
      stopDate: '30-07-2023',
      available: 0,
      status: 3,
      visible: 7,
      price: 8.2,
      unitPrice: 10.93,
      listPrice: 8.2,
      unitListPrice: 10.93,
      price1: 8.2,
      price2: 10.93,
      price3: 4.92,
      price4: 6.56,
      price5: null,
      discount: null,
      promo: 0,
      freeField00: '03',
      freeField01: '',
      freeField02: '',
      freeField03: '',
      freeField04: '',
      freeField05: '',
      freeField06: '',
      freeField07: '40',
      freeField08: '6',
      freeField09: '1',
      freeField10: '0',
      freeField11: '0',
      freeField12: 'W',
      freeField13: '096',
      freeField14: 'Pz',
      freeField15: 'SOCI SISTEMA 16-31LUG - VINI TIPICI (94PDV+A+TDM)',
      freeField16: '15-07-2023',
      freeField17: '31-07-2023',
      freeField18: '3',
      freeField19: '40',
    },
    instoreFields: null,
    externalData: null,
    systemData: {
      hash: {
        importFields: -1888767278,
        codes: 1242711333,
      },
      importFieldsLastChangeDate: '2023-07-17T18:15:14.719Z',
      instoreFieldsLastChangeDate: '0001-01-01T00:00:00Z',
    },
    id: '6486e072b347c0216bba6dd1',
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
