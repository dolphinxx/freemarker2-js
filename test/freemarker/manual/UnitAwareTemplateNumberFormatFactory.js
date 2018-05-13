"use strict";
const __extends = (this && this.__extends) || (function () {
    const extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
const TemplateNumberFormatFactory_1 = require("../../../dist/freemarker/core/TemplateNumberFormatFactory");
const TemplateNumberFormat_1 = require("../../../dist/freemarker/core/TemplateNumberFormat");
const UnitAwareTemplateNumberModel = require("./UnitAwareTemplateNumberModel").UnitAwareTemplateNumberModel;
const UnitAwareTemplateNumberFormatFactory = (function (_super) {
    __extends(UnitAwareTemplateNumberFormatFactory, _super);

    function UnitAwareTemplateNumberFormatFactory() {
        return _super.call(this) || this;
    }

    UnitAwareTemplateNumberFormatFactory.prototype.get = function (params, locale, env) {
        return new UnitAwareNumberFormat(env.getTemplateNumberFormat(params, locale));
    };
    return UnitAwareTemplateNumberFormatFactory;
}(TemplateNumberFormatFactory_1.TemplateNumberFormatFactory));
exports.UnitAwareTemplateNumberFormatFactory = UnitAwareTemplateNumberFormatFactory;
UnitAwareTemplateNumberFormatFactory["__class"] = "freemarker.manual.UnitAwareTemplateNumberFormatFactory";
UnitAwareTemplateNumberFormatFactory.INSTANCE = new UnitAwareTemplateNumberFormatFactory();
exports.UnitAwareTemplateNumberFormatFactory = UnitAwareTemplateNumberFormatFactory;

const UnitAwareNumberFormat = (function (_super) {
    __extends(UnitAwareNumberFormat, _super);

    function UnitAwareNumberFormat(innerFormat) {
        this.innerFormat = innerFormat;
        return _super.call(this) || this;
    }

    UnitAwareNumberFormat.prototype.formatToPlainText = function (numberModel) {
        const innerResult = this.innerFormat.formatToPlainText(numberModel);
        return numberModel instanceof UnitAwareTemplateNumberModel
            ? innerResult + " " + numberModel.getUnit()
            : innerResult;
    };
    UnitAwareNumberFormat.prototype.isLocaleBound = function () {
        return this.innerFormat.isLocaleBound();
    };
    UnitAwareNumberFormat.prototype.getDescription = function () {
        return "unit-aware " + this.innerFormat.getDescription();
    };
    return UnitAwareNumberFormat;
}(TemplateNumberFormat_1.TemplateNumberFormat));
exports.UnitAwareNumberFormat = UnitAwareNumberFormat;
UnitAwareNumberFormat["__class"] = "freemarker.manual.UnitAwareNumberFormat";