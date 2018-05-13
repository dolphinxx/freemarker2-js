const AliasTemplateDateFormatFactory = require("../../../dist/freemarker/core/AliasTemplateDateFormatFactory").AliasTemplateDateFormatFactory;
const AliasTemplateNumberFormatFactory = require("../../../dist/freemarker/core/AliasTemplateNumberFormatFactory").AliasTemplateNumberFormatFactory;
const UnitAwareTemplateNumberFormatFactory = require("./UnitAwareTemplateNumberFormatFactory").UnitAwareTemplateNumberFormatFactory;
const UnitAwareTemplateNumberModel = require("./UnitAwareTemplateNumberModel").UnitAwareTemplateNumberModel;
const BaseNTemplateNumberFormatFactory = require("../core/BaseNTemplateNumberFormatFactory").BaseNTemplateNumberFormatFactory;
const Map = require('../../../dist/java/util/Map').Map;
const test = new (require('./ExamplesTest').ExamplesTest)();
test.test('aliases1', () => {
    const cfg = test.getConfiguration();

    const customNumberFormats
        = new Map();
    customNumberFormats.put("price", new AliasTemplateNumberFormatFactory(",000.00"));
    customNumberFormats.put("weight", new AliasTemplateNumberFormatFactory("0.##;; roundingMode=halfUp"));
    cfg.setCustomNumberFormats(customNumberFormats);

    const customDateFormats
        = new Map();
    customDateFormats.put("fileDate", new AliasTemplateDateFormatFactory("dd/MMM/yy hh:mm a"));
    customDateFormats.put("logEventTime", new AliasTemplateDateFormatFactory("iso ms u"));
    cfg.setCustomDateFormats(customDateFormats);

    test.addToDataModel("p", 10000);
    test.addToDataModel("w", 10.305/*BigDecimal*/);
    test.addToDataModel("fd", new Date(1450904944213));
    test.addToDataModel("let", new Date(1450904944213));

    test.assertOutputForNamed("CustomFormatsExample-alias1.ftlh");
});

test.test('aliases2', () => {
    const cfg = test.getConfiguration();

    const customNumberFormats
        = new Map();
    customNumberFormats.put("base", BaseNTemplateNumberFormatFactory.INSTANCE);
    customNumberFormats.put("oct", new AliasTemplateNumberFormatFactory("@base 8"));
    cfg.setCustomNumberFormats(customNumberFormats);

    test.assertOutputForNamed("CustomFormatsExample-alias2.ftlh");
});

test.test('modelAware', () => {
    const cfg = test.getConfiguration();

    const customNumberFormats
        = new Map();
    customNumberFormats.put("ua", UnitAwareTemplateNumberFormatFactory.INSTANCE);
    cfg.setCustomNumberFormats(customNumberFormats);
    cfg.setNumberFormat("@ua 0.####;; roundingMode=halfUp");

    test.addToDataModel("weight", new UnitAwareTemplateNumberModel(1.5, "kg"));

    test.assertOutputForNamed("CustomFormatsExample-modelAware.ftlh");
});
