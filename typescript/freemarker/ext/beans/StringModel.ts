/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ModelFactory} from '../util/ModelFactory';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateScalarModel} from '../../template/TemplateScalarModel';
import {BeanModel} from './BeanModel';
import {BeansWrapper} from './BeansWrapper';

/**
 * Creates a new model that wraps the specified object with BeanModel + scalar
 * functionality.
 * 
 * @param {Object} object  the object to wrap into a model.
 * @param {BeansWrapper} wrapper the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 * @extends BeanModel
 */
export class StringModel extends BeanModel implements TemplateScalarModel {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(StringModel.FACTORY == null) StringModel.FACTORY = new StringModel.StringModel$0(); return StringModel.FACTORY; };

    public constructor(object : any, wrapper : BeansWrapper) {
        super(object, wrapper);
    }

    /**
     * Returns the result of calling {link Object#toString()} on the wrapped
     * object.
     * @return {String}
     */
    public getAsString() : string {
        return this.object.toString();
    }
}
StringModel["__class"] = "freemarker.ext.beans.StringModel";
StringModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace StringModel {

    export class StringModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new StringModel(object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    StringModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





StringModel.FACTORY_$LI$();
