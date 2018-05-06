/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateCollectionModel} from './TemplateCollectionModel';

/**
 * "collection" template language data type: Adds size/emptiness querybility to
 * {link TemplateCollectionModel}. The added extra operations are provided by all Java {link Collection}-s, and this
 * interface was added to make that accessible for templates too.
 * 
 * @since 2.3.22
 * @class
 */
export interface TemplateCollectionModelEx extends TemplateCollectionModel {
    /**
     * Returns the number items in this collection, or {link Integer#MAX_VALUE}, if there are more than
     * {link Integer#MAX_VALUE} items.
     * @return {number}
     */
    size() : number;

    /**
     * Returns if the collection contains any elements. This differs from {@code size() != 0} only in that the exact
     * number of items need not be calculated.
     * @return {boolean}
     */
    isEmpty() : boolean;
}



