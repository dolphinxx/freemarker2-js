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
const UnformattableValueException = require("../../../dist/freemarker/core/UnformattableValueException").UnformattableValueException;
const TemplateFormatUtil = require("../../../dist/freemarker/core/TemplateFormatUtil").TemplateFormatUtil;
const InvalidFormatParametersException = require("../../../dist/freemarker/core/InvalidFormatParametersException").InvalidFormatParametersException;
const StringUtil = require("../../../dist/freemarker/template/utility/StringUtil").StringUtil;
const NumberUtil = require("../../../dist/freemarker/template/utility/NumberUtil").NumberUtil;
const ArithmeticException = require("../../../dist/java/lang/ArithmeticException").ArithmeticException;
const BaseNTemplateNumberFormatFactory = (function (_super) {
    __extends(BaseNTemplateNumberFormatFactory, _super);

    function BaseNTemplateNumberFormatFactory() {
        return _super.call(this) || this;
    }

    BaseNTemplateNumberFormatFactory.prototype.get = function (params, locale, env) {
        let fallbackFormat;
        {
            let barIdx = params.indexOf('|');
            if (barIdx !== -1) {
                let fallbackFormatStr = params.substring(barIdx + 1);
                params = params.substring(0, barIdx);
                try {
                    fallbackFormat = env.getTemplateNumberFormat(fallbackFormatStr, locale);
                } catch (e) {
                    throw new InvalidFormatParametersException(
                        "Couldn't get the fallback number format (specified after the \"|\"), "
                        + StringUtil.jQuote(fallbackFormatStr) + ". Reason: " + e.getMessage(),
                        e);
                }
            } else {
                fallbackFormat = null;
            }
        }

        let base;
        try {
            base = parseInt(params);
        } catch (e) {
            if (params.length === 0) {
                throw new InvalidFormatParametersException(
                    "A format parameter is required to specify the numerical system base.");
            }
            throw new InvalidFormatParametersException(
                "The format paramter must be an integer, but was (shown quoted): "
                + StringUtil.jQuote(params));
        }
        if (base < 2) {
            throw new InvalidFormatParametersException("A base must be at least 2.");
        }
        return new BaseNTemplateNumberFormat(base, fallbackFormat);
    };
    return BaseNTemplateNumberFormatFactory;
}(TemplateNumberFormatFactory_1.TemplateNumberFormatFactory));
exports.BaseNTemplateNumberFormatFactory = BaseNTemplateNumberFormatFactory;
BaseNTemplateNumberFormatFactory["__class"] = "freemarker.core.BaseNTemplateNumberFormatFactory";
BaseNTemplateNumberFormatFactory.INSTANCE = new BaseNTemplateNumberFormatFactory();
exports.BaseNTemplateNumberFormatFactory = BaseNTemplateNumberFormatFactory;

const BaseNTemplateNumberFormat = (function (_super) {
    __extends(BaseNTemplateNumberFormat, _super);

    function BaseNTemplateNumberFormat(base, fallbackFormat) {
        this.fallbackFormat = fallbackFormat;
        this.base = base;
        return _super.call(this) || this;
    }

    BaseNTemplateNumberFormat.prototype.formatToPlainText = function (numberModel) {
        let n = TemplateFormatUtil.getNonNullNumber(numberModel);
        try {
            return Number(NumberUtil.toIntExact(n)).toString(this.base);
        } catch (e) {
            if(e instanceof ArithmeticException) {
                if (this.fallbackFormat == null) {
                    throw new UnformattableValueException(
                        n + " doesn't fit into an int, and there was no fallback format "
                        + "specified.");
                } else {
                    return this.fallbackFormat.formatToPlainText(numberModel);
                }
            }
            throw e;
        }
    };
    BaseNTemplateNumberFormat.prototype.isLocaleBound = function () {
        return false;
    };
    BaseNTemplateNumberFormat.prototype.getDescription = function () {
        return 'base ' + this.base;
    };
    return BaseNTemplateNumberFormat;
}(TemplateNumberFormat_1.TemplateNumberFormat));
exports.BaseNTemplateNumberFormat = BaseNTemplateNumberFormat;
BaseNTemplateNumberFormat["__class"] = "freemarker.core.BaseNTemplateNumberFormat";