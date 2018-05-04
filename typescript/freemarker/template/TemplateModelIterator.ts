/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';

/**
 * Used to iterate over a set of template models <em>once</em>; usually returned from
 * {link TemplateCollectionModel#iterator()}. Note that it's not a {link TemplateModel}.
 * @class
 */
export interface TemplateModelIterator {
    /**
     * Returns the next model.
     * 
     * @throws TemplateModelException if the next model can not be retrieved
     * (i.e. because the iterator is exhausted).
     * @return {*}
     */
    next() : TemplateModel;

    /**
     * @return {boolean} whether there are any more items to iterate over.
     */
    hasNext() : boolean;
}


var __Function = Function;
