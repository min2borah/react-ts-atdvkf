import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson = {
  width: 1280,
  height: 720,
  fonts: [],
  pages: [
    {
      id: 'yQvpqavG4K',
      children: [
        {
          id: 'vAlY_DmcBw',
          type: 'text',
          name: '',
          opacity: 1,
          custom: {
            rules: [
              {
                ruleConditions: {
                  conditions: {
                    all: [
                      {
                        fact: 'article-fact',
                        operator: 'cus_equal',
                        value: 'true',
                        path: "$.importFields['promo']",
                        dataSource: 'article_field',
                        articleField: {
                          name: 'promo',
                          parent: 'importFields',
                          subTitle: 'importFields',
                          dataType: 5,
                          aliasName: 'promo',
                          dbPath: 'importFields.promo',
                        },
                        articleIndex: null,
                        conditionId: 'RYtbtMRobNUtpduOoztB9',
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
                    elementField: 'text',
                    actionType: 'Plain Text',
                    actionField: {
                      path: "importFields['itemDescription1']",
                      articleField: {
                        name: 'itemDescription1',
                        parent: 'importFields',
                        subTitle: 'importFields',
                        dataType: 1,
                        aliasName: 'itemDescription1',
                        dbPath: 'importFields.itemDescription1',
                      },
                      dataSource: 'article_field',
                      articleIndex: null,
                    },
                    actionValue: 'ON',
                    prefixValue: '',
                    sufixValue: '',
                    substringRange: '',
                    color: 'rgba(255,255,255,1)',
                    actionId: 'l2fbH9R57x68Ahz-0iHrw',
                    separator: '',
                    multiValueActions: [],
                  },
                ],
                isToHideElement: false,
                ruleName: 'show ON',
                ruleId: 'rule_1709887903286',
                elementId: 'vAlY_DmcBw',
                isToApplyFactFilters: false,
                isToApplyActionFilters: false,
                factFilters: [],
                actionFilters: [],
              },
              {
                ruleConditions: {
                  conditions: {
                    all: [
                      {
                        fact: 'article-fact',
                        operator: 'cus_equal',
                        value: 'false',
                        path: "$.importFields['promo']",
                        dataSource: 'article_field',
                        articleField: {
                          name: 'promo',
                          parent: 'importFields',
                          subTitle: 'importFields',
                          dataType: 5,
                          aliasName: 'promo',
                          dbPath: 'importFields.promo',
                        },
                        articleIndex: null,
                        conditionId: 'jg4x6JOvkfVF2ULoCymo9',
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
                    elementField: 'text',
                    actionType: 'Plain Text',
                    actionField: {
                      path: "importFields['masterCode']",
                      articleField: {
                        name: 'masterCode',
                        parent: 'importFields',
                        subTitle: 'importFields',
                        dataType: 1,
                        aliasName: 'masterCode',
                        dbPath: 'importFields.masterCode',
                      },
                      dataSource: 'article_field',
                      articleIndex: null,
                    },
                    actionValue: 'OFF',
                    prefixValue: '',
                    sufixValue: '',
                    substringRange: '',
                    color: 'rgba(255,255,255,1)',
                    actionId: 'q5cfwdG79KDzX6OI7tMq7',
                    separator: '',
                    multiValueActions: [],
                  },
                ],
                isToHideElement: false,
                ruleName: 'show OFF',
                ruleId: 'rule_1709887931964',
                elementId: 'vAlY_DmcBw',
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
          x: 320,
          y: 346,
          width: 640,
          height: 33,
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
          text: 'Body text',
          placeholder: '',
          fontSize: 25.925925925925927,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'center',
          verticalAlign: 'top',
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
          id: 'vY1tCf8qFf',
          type: 'text',
          name: '',
          opacity: 1,
          custom: {
            name: 'promo',
            dataSource: 'article_field',
            articleField: {
              name: 'promo',
              parent: 'importFields',
              subTitle: 'importFields',
              dataType: 5,
              aliasName: 'promo',
            },
          },
          visible: true,
          selectable: true,
          removable: true,
          alwaysOnTop: false,
          showInExport: true,
          x: 204.89114658925985,
          y: 92.9521044992743,
          width: 640,
          height: 33,
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
          text: 'promo',
          placeholder: '',
          fontSize: 25.925925925925927,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          fill: 'black',
          align: 'center',
          verticalAlign: 'top',
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
      },
      duration: 5000,
    },
  ],
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
  calorie: 230,
  allergens: { pesce: true, soia: true, uova: true },
  theme: true,
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
