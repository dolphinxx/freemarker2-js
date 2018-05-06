/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SerializableTemplateBooleanModel} from './SerializableTemplateBooleanModel';
import {TemplateBooleanModel} from './TemplateBooleanModel';

/**
 * Used for the {link TemplateBooleanModel#FALSE} singleton.
 * @class
 */
export class TrueTemplateBooleanModel implements SerializableTemplateBooleanModel {
    public getAsBoolean() : boolean {
        return true;
    }

    /*private*/ readResolve() : any {
        return TemplateBooleanModel.TRUE;
    }

    constructor() {
    }
}
TrueTemplateBooleanModel["__class"] = "freemarker.template.TrueTemplateBooleanModel";
TrueTemplateBooleanModel["__interfaces"] = ["freemarker.template.SerializableTemplateBooleanModel","freemarker.template.TemplateBooleanModel","freemarker.template.TemplateModel","java.io.Serializable"];





