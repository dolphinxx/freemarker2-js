/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateCollectionModel} from '../../template/TemplateCollectionModel';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelException} from '../../template/TemplateModelException';
import {TemplateModelIterator} from '../../template/TemplateModelIterator';
import {BeanModel} from './BeanModel';
import {BeansWrapper} from './BeansWrapper';

/**
 * Creates a new model that wraps the specified enumeration object.
 * 
 * @param {Enumeration} enumeration the enumeration object to wrap into a model.
 * @param {BeansWrapper} wrapper     the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 * @extends BeanModel
 */
export class EnumerationModel extends BeanModel implements TemplateModelIterator, TemplateCollectionModel {
    /*private*/ accessed : boolean = false;

    public constructor(enumeration : any, wrapper : BeansWrapper) {
        super(enumeration, wrapper);
    }

    /**
     * This allows the enumeration to be used in a <tt>&lt;#list&gt;</tt> block.
     * 
     * @return {*} "this"
     */
    public iterator() : TemplateModelIterator {
        {
            if(this.accessed) {
                throw new TemplateModelException("This collection is stateful and can not be iterated over the second time.");
            }
            this.accessed = true;
        }
        return this;
    }

    /**
     * Calls underlying {link Enumeration#nextElement()}.
     * @return {boolean}
     */
    public hasNext() : boolean {
        return (<any><any>this.object).hasMoreElements();
    }

    /**
     * Calls underlying {link Enumeration#nextElement()} and wraps the result.
     * @return {*}
     */
    public next() : TemplateModel {
        try {
            return this.wrap((<any><any>this.object).nextElement());
        } catch(e) {
            throw new TemplateModelException("No more elements in the enumeration.");
        }
    }

    /**
     * Returns {link Enumeration#hasMoreElements()}. Therefore, an
     * enumeration that has no more element evaluates to false, and an
     * enumeration that has further elements evaluates to true.
     * @return {boolean}
     */
    public getAsBoolean() : boolean {
        return this.hasNext();
    }
}
EnumerationModel["__class"] = "freemarker.ext.beans.EnumerationModel";
EnumerationModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModelIterator","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];





