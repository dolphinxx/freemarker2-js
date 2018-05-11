/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';

/**
 * "boolean" template language data type; same as in Java; either {@code true} or {@code false}.
 * <p>
 * <p>
 * Objects of this type should be immutable, that is, calling {link #getAsBoolean()} should always return the same
 * value as for the first time.
 * @class
 */
export interface TemplateBooleanModel extends TemplateModel {
    /**
     * @return {boolean} whether to interpret this object as true or false in a boolean context
     */
    getAsBoolean(): boolean;
}

export interface SerializableTemplateBooleanModel extends TemplateBooleanModel {}

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

export namespace TemplateBooleanModel {

    /**
     * A singleton object to represent boolean false
     */
    export let FALSE: TemplateBooleanModel = new FalseTemplateBooleanModel();

    /**
     * A singleton object to represent boolean true
     */
    export let TRUE: TemplateBooleanModel = new TrueTemplateBooleanModel();
}