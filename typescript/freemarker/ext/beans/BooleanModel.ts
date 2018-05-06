/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateBooleanModel} from '../../template/TemplateBooleanModel';
import {BeanModel} from './BeanModel';
import {Boolean} from '../../../java/lang/Boolean';
import {BeansWrapper} from './BeansWrapper';

/**
 * <p>A class that will wrap instances of {link java.lang.Boolean} into a
 * {link TemplateBooleanModel}.
 * @param {Boolean} bool
 * @param {BeansWrapper} wrapper
 * @class
 * @extends BeanModel
 */
export class BooleanModel extends BeanModel implements TemplateBooleanModel {
    /*private*/ value : boolean;

    public constructor(bool : boolean, wrapper : BeansWrapper) {
        super(bool, wrapper, false);
        if(this.value===undefined) this.value = false;
        this.value = bool;
    }

    public getAsBoolean() : boolean {
        return this.value;
    }
}
BooleanModel["__class"] = "freemarker.ext.beans.BooleanModel";
BooleanModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateBooleanModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];





