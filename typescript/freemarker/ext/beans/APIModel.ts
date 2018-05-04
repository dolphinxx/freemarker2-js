/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BeanModel } from './BeanModel';
import { BeansWrapper } from './BeansWrapper';

/**
 * Exposes the Java API (and properties) of an object.
 * <p>
 * <p>
 * Notes:
 * <ul>
 * <li>The exposing level is inherited from the {link BeansWrapper}</li>
 * <li>But methods will always shadow properties and fields with identical name, regardless of {link BeansWrapper}
 * settings</li>
 * </ul>
 * 
 * @since 2.3.22
 * @extends BeanModel
 * @class
 */
export class APIModel extends BeanModel {
    constructor(object : any, wrapper : BeansWrapper) {
        super(object, wrapper, false);
    }

    isMethodsShadowItems() : boolean {
        return true;
    }
}
APIModel["__class"] = "freemarker.ext.beans.APIModel";
APIModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];




var __Function = Function;
