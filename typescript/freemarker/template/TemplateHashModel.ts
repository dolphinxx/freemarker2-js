/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';

/**
 * "hash" template language data type: an object that contains other objects accessible through string keys
 * (sub-variable names). It, in itself, doesn't support listing the keys or values ({link TemplateHashModelEx} does).
 * 
 * <p>In templates they are used like {@code myHash.myKey} or {@code myHash[myDynamicKey]}.
 * @class
 */
export interface TemplateHashModel extends TemplateModel {
    /**
     * Gets a <tt>TemplateModel</tt> from the hash.
     * 
     * @param {String} key the name by which the <tt>TemplateModel</tt>
     * is identified in the template.
     * @return {*} the <tt>TemplateModel</tt> referred to by the key,
     * or null if not found.
     */
    get(key? : any) : any;

    isEmpty() : boolean;
}


var __Function = Function;
