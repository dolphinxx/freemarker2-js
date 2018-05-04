/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateHashModel } from './TemplateHashModel';
import { TemplateModelException } from './TemplateModelException';
import { TemplateCollectionModel } from './TemplateCollectionModel';

/**
 * "extended hash" template language data type; extends {link TemplateHashModel} by allowing
 * iterating through its keys and values. Consider implementing the modern variation of this,
 * {link TemplateHashModelEx2}, which allows the more efficient listing of key-value pairs.
 * 
 * <p>In templates they are used like hashes, but these will also work (among others):
 * {@code myExtHash?size}, {@code myExtHash?keys}, {@code myExtHash?values}, {@code <#list myMap as k, v>}.
 * <p>
 * see DefaultMapAdapter
 * see SimpleHash
 * @class
 */
export interface TemplateHashModelEx extends TemplateHashModel {
    /**
     * @return {number} the number of key/value mappings in the hash.
     */
    size() : number;

    /**
     * @return {*} a collection containing the keys in the hash. Every element of
     * the returned collection must implement the {link TemplateScalarModel}
     * (as the keys of hashes are always strings).
     */
    keys() : TemplateCollectionModel;

    /**
     * @return {*} a collection containing the values in the hash. The elements of the
     * returned collection can be any kind of {link TemplateModel}-s.
     */
    values() : TemplateCollectionModel;
}


var __Function = Function;
