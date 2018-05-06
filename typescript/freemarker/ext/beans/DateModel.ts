/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ModelFactory} from '../util/ModelFactory';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {TemplateDateModel} from '../../template/TemplateDateModel';
import {TemplateModel} from '../../template/TemplateModel';
import {BeanModel} from './BeanModel';
import {BeansWrapper} from './BeansWrapper';

/**
 * Creates a new model that wraps the specified date object.
 * 
 * @param {Date} date    the date object to wrap into a model.
 * @param {BeansWrapper} wrapper the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 * @extends BeanModel
 */
export class DateModel extends BeanModel implements TemplateDateModel {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(DateModel.FACTORY == null) DateModel.FACTORY = new DateModel.DateModel$0(); return DateModel.FACTORY; };

    /*private*/ type : number;

    public constructor(date : Date, wrapper : BeansWrapper) {
        super(date, wrapper);
        if(this.type===undefined) this.type = 0;
        if(date != null && date instanceof <any>Date) {
            this.type = TemplateDateModel.DATE;
        } else if(date != null && date instanceof <any>Time) {
            this.type = TemplateDateModel.TIME;
        } else if(date != null && date instanceof <any>Timestamp) {
            this.type = TemplateDateModel.DATETIME;
        } else {
            this.type = wrapper.getDefaultDateType();
        }
    }

    public getAsDate() : Date {
        return <Date>this.object;
    }

    public getDateType() : number {
        return this.type;
    }
}
DateModel["__class"] = "freemarker.ext.beans.DateModel";
DateModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateDateModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace DateModel {

    export class DateModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new DateModel(<Date>object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    DateModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





DateModel.FACTORY_$LI$();
