"use strict";
exports.__esModule = true;
const UnitAwareTemplateNumberModel = (function () {
    function UniAwareTemplateNumberModel(value, unit) {
        this.value = value;
        this.unit = unit;
        return this;
    }
    UniAwareTemplateNumberModel.prototype.getAsNumber = function () {
        return this.value;
    };
    UniAwareTemplateNumberModel.prototype.getUnit = function() {
        return this.unit;
    };
    return UniAwareTemplateNumberModel;
}());
exports.UnitAwareTemplateNumberModel = UnitAwareTemplateNumberModel;
UnitAwareTemplateNumberModel["__class"] = "freemarker.manual.UnitAwareTemplateNumberModel";
UnitAwareTemplateNumberModel["__interfaces"] = ["freemarker.template.TemplateNumberModel", "freemarker.template.TemplateModel"];