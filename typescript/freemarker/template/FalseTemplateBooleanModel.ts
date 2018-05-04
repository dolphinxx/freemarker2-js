/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SerializableTemplateBooleanModel } from './SerializableTemplateBooleanModel';
import { TemplateBooleanModel } from './TemplateBooleanModel';

/**
 * Used for the {link TemplateBooleanModel#TRUE} singleton.
 * @class
 */
export class FalseTemplateBooleanModel implements SerializableTemplateBooleanModel {
    public getAsBoolean() : boolean {
        return false;
    }

    /*private*/ readResolve() : any {
        return TemplateBooleanModel.FALSE;
    }

    constructor() {
    }
}
FalseTemplateBooleanModel["__class"] = "freemarker.template.FalseTemplateBooleanModel";
FalseTemplateBooleanModel["__interfaces"] = ["freemarker.template.SerializableTemplateBooleanModel","freemarker.template.TemplateBooleanModel","freemarker.template.TemplateModel","java.io.Serializable"];




var __Function = Function;
