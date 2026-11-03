import {
  ValidatePreviewRules,
  ValidatePagesRules,
  ValidateScenario,
} from './index.js';

var previewJson = {
  width: 1024,
  height: 768,
  fonts: [],
  pages: [
    {
      id: 'TnCU0f48zL',
      children: [
        {
          id: 'vQL-ERns-s',
          type: 'text',
          name: 'text-1',
          opacity: 1,
          custom: {
            verticalAlign: 'top-new',
            version: 2,
            rules: [
              {
                ruleConditions: {
                  conditions: {
                    all: [
                      {
                        fact: 'article-fact',
                        operator: 'cus_greaterThan',
                        value: '1',
                        path: "$.importFields['price']",
                        dataSource: 'article_field',
                        articleField: {
                          name: 'price',
                          aliasName: 'price',
                          parent: 'importFields',
                          subTitle: 'importFields',
                          dataType: 3,
                          dbPath: 'importFields.price',
                        },
                        articleIndex: null,
                        conditionId: '_E3ZFrc9fdjc-FMA9D72l',
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
                    actionType: 'Article Value',
                    actionField: {
                      path: "importFields['price']",
                      articleField: {
                        name: 'price',
                        aliasName: 'price',
                        parent: 'importFields',
                        subTitle: 'importFields',
                        dataType: 3,
                        dbPath: 'importFields.price',
                      },
                      dataSource: 'article_field',
                      articleIndex: null,
                    },
                    actionValue: '',
                    prefixValue: '',
                    sufixValue: '',
                    substringRange: '',
                    color: 'rgba(255,255,255,1)',
                    actionId: 'iVXL4ildYsNpHmR1-Lxq6',
                    separator: '',
                    multiValueActions: [],
                  },
                ],
                isToHideElement: false,
                ruleName: 'test',
                ruleId: 'rule_1793686531664',
                elementId: 'vQL-ERns-s',
                isToApplyFactFilters: false,
                isToApplyActionFilters: true,
                factFilters: [],
                actionFilters: [
                  {
                    filterId: 'ewx64qqwDObjdS-GACvvi',
                    articleIndex: null,
                    dataSource: 'article_field',
                    path: "importFields['price']",
                    articleField: {
                      name: 'price',
                      aliasName: 'price',
                      parent: 'importFields',
                      subTitle: 'importFields',
                      dataType: 3,
                      dbPath: 'importFields.price',
                    },
                    function: 'Format currency (€)',
                  },
                ],
              },
            ],
          },
          visible: true,
          selectable: true,
          removable: true,
          alwaysOnTop: false,
          showInExport: true,
          x: 256,
          y: 369,
          width: 512,
          height: 31,
          rotation: 0,
          animations: [],
          blurEnabled: false,
          blurRadius: 10,
          brightnessEnabled: false,
          brightness: 0,
          sepiaEnabled: false,
          grayscaleEnabled: false,
          filters: {},
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
          fontSize: 24.88888888888889,
          fontFamily: 'Roboto',
          fontStyle: 'normal',
          fontWeight: 'normal',
          textDecoration: '',
          textTransform: 'none',
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
          curveEnabled: false,
          curvePower: 0.5,
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
  schemaVersion: 2,
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
  ValidatePreviewRules(
    previewJson,
    articleJson,
    tags,
    'vip',
    'Europe/Rome',
    null,
    userData
  )
    .then((pageJson) => {
      console.log('final result... ', pageJson);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const runScenariotest = () => {
  ValidateScenario(scenario, null, null)
    .then((resultJson) => {
      console.log(resultJson);
    })
    .catch((err) => {
      console.log(err);
    });
};
