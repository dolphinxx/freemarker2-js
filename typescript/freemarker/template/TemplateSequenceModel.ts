/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';

/**
 * "sequence" template language data type; an object that contains other objects accessible through an integer 0-based
 * index.
 * <p>
 * <p>
 * Used in templates like: {@code mySeq[index]}, {@code <#list mySeq as i>...</#list>}, {@code mySeq?size}, etc.
 * <p>
 * see TemplateCollectionModel
 * @class
 */
export interface TemplateSequenceModel extends TemplateModel {
    get(s? : any) : any;

    /**
     * @return {number} the number of items in the list.
     */
    size() : number;
}



