/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ModelFactory} from '../util/ModelFactory';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateNumberModel} from '../../template/TemplateNumberModel';
import {BeanModel} from './BeanModel';
import {BeansWrapper} from './BeansWrapper';

/**
 * Creates a new model that wraps the specified number object.
 * 
 * @param {Number} number  the number object to wrap into a model.
 * @param {BeansWrapper} wrapper the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 * @extends BeanModel
 */
export class NumberModel extends BeanModel implements TemplateNumberModel {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(NumberModel.FACTORY == null) NumberModel.FACTORY = new NumberModel.NumberModel$0(); return NumberModel.FACTORY; };

    public constructor(number : number, wrapper : BeansWrapper) {
        super(number, wrapper);
    }

    public getAsNumber() : number {
        return <number>this.object;
    }
}
NumberModel["__class"] = "freemarker.ext.beans.NumberModel";
NumberModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateNumberModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace NumberModel {

    export class NumberModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new NumberModel(<number>object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    NumberModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





NumberModel.FACTORY_$LI$();
