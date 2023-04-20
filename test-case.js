import {
  validateElementRules,
  validateScenarioRules,
  validatePageRules,
  validateGroupRules,
} from './rule-engine.js';

var previewJson ={"width":1280,"height":720,"fonts":[],"pages":[{"id":"p-SD7kgkwy","children":[{"id":"v0Z2Tat6dI","type":"svg","name":"","opacity":1,"animations":[],"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":-2.399724905425783e-13,"y":355.17647058823326,"width":1280.0000000000002,"height":364.82352941176543,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMiIgeT0iMiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiBzdHJva2U9InJnYmEoOTgsIDE5NywgMjU1LCAxKSIgc3Ryb2tlLXdpZHRoPSI0IiBmaWxsPSJub25lIiAvPjwvc3ZnPg==","maskSrc":"","cropX":0,"cropY":0,"cropWidth":1,"cropHeight":1,"keepRatio":false,"flipX":false,"flipY":false,"borderColor":"black","borderSize":0,"cornerRadius":0,"colorsReplace":{}},{"id":"9Ug1uRL-JY","type":"text","name":"","opacity":1,"animations":[],"custom":{"articleIndex":1,"articleField":{"name":"itemDescription1","parent":"importFields","subTitle":"importFields","dataType":1},"dataSource":"article_field"},"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":45.47058822529444,"y":86.61764705882271,"width":612,"height":220.52941176470583,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"text":"Item1","placeholder":"","fontSize":32,"fontFamily":"Roboto","fontStyle":"normal","fontWeight":"normal","textDecoration":"","fill":"black","align":"center","verticalAlign":"middle","strokeWidth":0,"stroke":"black","lineHeight":1.2,"letterSpacing":0,"backgroundEnabled":false,"backgroundColor":"#7ED321","backgroundOpacity":1,"backgroundCornerRadius":0.5,"backgroundPadding":0.5},{"id":"qQeqiD53mW","type":"text","name":"","opacity":1,"animations":[],"custom":{"articleIndex":2,"articleField":{"name":"itemDescription1","parent":"importFields","subTitle":"importFields","dataType":1},"dataSource":"article_field"},"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":766.9999999999999,"y":80.44057976458308,"width":479,"height":232.35353788247514,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"text":"Item 2","placeholder":"","fontSize":32,"fontFamily":"Roboto","fontStyle":"normal","fontWeight":"normal","textDecoration":"","fill":"black","align":"center","verticalAlign":"middle","strokeWidth":0,"stroke":"black","lineHeight":1.2,"letterSpacing":0,"backgroundEnabled":false,"backgroundColor":"#7ED321","backgroundOpacity":1,"backgroundCornerRadius":0.5,"backgroundPadding":0.5},{"id":"5VvZ0H7CB1","type":"text","name":"","opacity":1,"animations":[],"custom":{"articleIndex":3,"articleField":{"name":"itemDescription1","parent":"importFields","subTitle":"importFields","dataType":1},"dataSource":"article_field"},"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":393.0588235194122,"y":457.02484789311353,"width":549,"height":187.53397563629605,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"text":"Item 3","placeholder":"","fontSize":32,"fontFamily":"Roboto","fontStyle":"normal","fontWeight":"normal","textDecoration":"","fill":"black","align":"center","verticalAlign":"middle","strokeWidth":0,"stroke":"black","lineHeight":1.2,"letterSpacing":0,"backgroundEnabled":false,"backgroundColor":"#7ED321","backgroundOpacity":1,"backgroundCornerRadius":0.5,"backgroundPadding":0.5}],"width":"auto","height":"auto","background":"white","bleed":0,"custom":{"rules":[{"ruleConditions":{"conditions":{"all":[{"fact":"article-fact","operator":"currentDateInBetweenDate","value":"2023-04-20T00:00:00.000Z#,#2023-05-12T23:59:59.000Z","path":"","dataSource":"date_time","articleField":null,"conditionId":"YfnTyl8"}]},"event":{"type":"true"}},"ruleActions":[{"elementField":"","actionType":"Plain Text","actionField":{"path":"","articleField":"","dataSource":"article_field"},"actionValue":"","prefixValue":"","sufixValue":"","substringRange":"","color":"rgba(255,255,255,1)","actionId":"VoCiWae"}],"isToHideElement":false,"ruleName":"","ruleId":"page_rule_1681908509341","elementId":"p-SD7kgkwy","isToApplyFactFilters":false,"isToApplyActionFilters":false,"factFilters":[],"actionFilters":[]}],"name":"clone_NO PROMO","articleCount":"3"}},{"id":"4ZBMBuy9sC","children":[{"id":"OhbwtlIm9Y","type":"svg","name":"","opacity":1,"animations":[],"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":-2.5072771171825376e-14,"y":-2.1135097560014204e-13,"width":675.1764705882356,"height":355.1764705882354,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==","maskSrc":"","cropX":0,"cropY":0,"cropWidth":1,"cropHeight":1,"keepRatio":false,"flipX":false,"flipY":false,"borderColor":"black","borderSize":0,"cornerRadius":0,"colorsReplace":{"rgb(0, 161, 255)":"rgba(226,236,241,1)"}},{"id":"qp8Eb72wkG","type":"svg","name":"","opacity":1,"animations":[],"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":675.1764705882356,"y":-2.9842794901924077e-13,"width":604.8235294117644,"height":355.1764705882354,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"src":"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MCA2MCI+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBmaWxsPSJyZ2IoMCwgMTYxLCAyNTUpIiAvPjwvc3ZnPg==","maskSrc":"","cropX":0,"cropY":0,"cropWidth":1,"cropHeight":1,"keepRatio":false,"flipX":false,"flipY":false,"borderColor":"black","borderSize":0,"cornerRadius":0,"colorsReplace":{"rgb(0, 161, 255)":"rgba(65,117,5,1)"}},{"id":"fK5bk8tqAm","type":"text","name":"","opacity":1,"animations":[],"custom":{"articleIndex":1,"articleField":{"name":"itemDescription1","parent":"importFields","subTitle":"importFields","dataType":1},"dataSource":"article_field"},"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":45.47058822529444,"y":86.61764705882271,"width":612,"height":220.52941176470583,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"text":"Item1","placeholder":"","fontSize":32,"fontFamily":"Roboto","fontStyle":"normal","fontWeight":"normal","textDecoration":"","fill":"black","align":"center","verticalAlign":"middle","strokeWidth":0,"stroke":"black","lineHeight":1.2,"letterSpacing":0,"backgroundEnabled":false,"backgroundColor":"#7ED321","backgroundOpacity":1,"backgroundCornerRadius":0.5,"backgroundPadding":0.5},{"id":"aupnMZRGRU","type":"text","name":"","opacity":1,"animations":[],"custom":{"articleIndex":2,"articleField":{"name":"itemDescription1","parent":"importFields","subTitle":"importFields","dataType":1},"dataSource":"article_field"},"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":766.9999999999999,"y":80.44057976458308,"width":479,"height":232.35353788247514,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"text":"Item 2","placeholder":"","fontSize":32,"fontFamily":"Roboto","fontStyle":"normal","fontWeight":"normal","textDecoration":"","fill":"black","align":"center","verticalAlign":"middle","strokeWidth":0,"stroke":"black","lineHeight":1.2,"letterSpacing":0,"backgroundEnabled":false,"backgroundColor":"#7ED321","backgroundOpacity":1,"backgroundCornerRadius":0.5,"backgroundPadding":0.5},{"id":"vtGXOHanCi","type":"text","name":"","opacity":1,"animations":[],"custom":{"articleIndex":3,"articleField":{"name":"itemDescription1","parent":"importFields","subTitle":"importFields","dataType":1},"dataSource":"article_field"},"visible":true,"selectable":true,"removable":true,"alwaysOnTop":false,"showInExport":true,"x":393.0588235194122,"y":457.02484789311353,"width":549,"height":187.53397563629605,"rotation":0,"blurEnabled":false,"blurRadius":10,"brightnessEnabled":false,"brightness":0,"sepiaEnabled":false,"grayscaleEnabled":false,"shadowEnabled":false,"shadowBlur":5,"shadowOffsetX":0,"shadowOffsetY":0,"shadowColor":"black","shadowOpacity":1,"draggable":true,"resizable":true,"contentEditable":true,"styleEditable":true,"text":"Item 3","placeholder":"","fontSize":32,"fontFamily":"Roboto","fontStyle":"normal","fontWeight":"normal","textDecoration":"","fill":"black","align":"center","verticalAlign":"middle","strokeWidth":0,"stroke":"black","lineHeight":1.2,"letterSpacing":0,"backgroundEnabled":false,"backgroundColor":"#7ED321","backgroundOpacity":1,"backgroundCornerRadius":0.5,"backgroundPadding":0.5}],"width":"auto","height":"auto","background":"white","bleed":0,"custom":{"rules":[{"ruleConditions":{"conditions":{"all":[{"fact":"article-fact","operator":"currentDateNotInBetweenDate","value":"2023-04-20T00:00:00.000Z#,#2023-05-12T23:59:59.000Z","path":"","dataSource":"date_time","articleField":null,"conditionId":"YfnTyl8"}]},"event":{"type":"true"}},"ruleActions":[{"elementField":"","actionType":"Plain Text","actionField":{"path":"","articleField":"","dataSource":"article_field"},"actionValue":"","prefixValue":"","sufixValue":"","substringRange":"","color":"rgba(255,255,255,1)","actionId":"VoCiWae"}],"isToHideElement":false,"ruleName":"","ruleId":"page_rule_1681908539813","elementId":"4ZBMBuy9sC","isToApplyFactFilters":false,"isToApplyActionFilters":false,"factFilters":[],"actionFilters":[]}],"name":"clone_clone_NO PROMO","articleCount":"3"}}],"unit":"px","dpi":72};

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
