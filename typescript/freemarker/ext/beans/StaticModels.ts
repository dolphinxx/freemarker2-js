/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../../template/TemplateModel';
import {ClassBasedModelFactory} from './ClassBasedModelFactory';
import {BeansWrapper} from './BeansWrapper';
import {StaticModel} from './StaticModel';

/**
 * Utility class for instantiating {link StaticModel} instances from
 * templates. If your template's data model contains an instance of
 * StaticModels (named, say <tt>StaticModels</tt>), then you can
 * instantiate an arbitrary StaticModel using get syntax (i.e.
 * <tt>StaticModels["java.lang.System"].currentTimeMillis()</tt>).
 * @extends ClassBasedModelFactory
 * @class
 */
export class StaticModels extends ClassBasedModelFactory {
    constructor(wrapper : BeansWrapper) {
        super(wrapper);
    }

    /**
     * 
     * @param {*} clazz
     * @return {*}
     */
    createModel(clazz : any) : TemplateModel {
        return new StaticModel(clazz, this.getWrapper());
    }
}
StaticModels["__class"] = "freemarker.ext.beans.StaticModels";
StaticModels["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];





