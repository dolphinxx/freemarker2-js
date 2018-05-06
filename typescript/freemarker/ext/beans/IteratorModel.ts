/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateCollectionModel} from '../../template/TemplateCollectionModel';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelException} from '../../template/TemplateModelException';
import {TemplateModelIterator} from '../../template/TemplateModelIterator';
import {BeanModel} from './BeanModel';
import {BeansWrapper} from './BeansWrapper';

/**
 * Creates a new model that wraps the specified iterator object.
 * 
 * @param {Iterator} iterator the iterator object to wrap into a model.
 * @param {BeansWrapper} wrapper  the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 * @extends BeanModel
 */
export class IteratorModel extends BeanModel implements TemplateModelIterator, TemplateCollectionModel {
    /*private*/ accessed : boolean = false;

    public constructor(iterator : any, wrapper : BeansWrapper) {
        super(iterator, wrapper);
    }

    /**
     * This allows the iterator to be used in a <tt>&lt;#list&gt;</tt> block.
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
     * Calls underlying {link Iterator#hasNext()}.
     * @return {boolean}
     */
    public hasNext() : boolean {
        return (<any><any>this.object).hasNext();
    }

    /**
     * Calls underlying {link Iterator#next()} and wraps the result.
     * @return {*}
     */
    public next() : TemplateModel {
        try {
            return this.wrap((<any><any>this.object).next());
        } catch(e) {
            throw new TemplateModelException("No more elements in the iterator.", e);
        }
    }

    /**
     * Returns {link Iterator#hasNext()}. Therefore, an
     * iterator that has no more element evaluates to false, and an
     * iterator that has further elements evaluates to true.
     * @return {boolean}
     */
    public getAsBoolean() : boolean {
        return this.hasNext();
    }
}
IteratorModel["__class"] = "freemarker.ext.beans.IteratorModel";
IteratorModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModelIterator","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];





