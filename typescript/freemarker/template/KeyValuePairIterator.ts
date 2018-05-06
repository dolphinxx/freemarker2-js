/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {KeyValuePair} from './KeyValuePair';

/**
 * Iterates over the key-value pairs in a hash. This is very similar to an {link Iterator}, but has a fixed item
 * type, can throw {link TemplateModelException}-s, and has no {@code remove()} method.
 * 
 * @since 2.3.25
 * @class
 */
export interface KeyValuePairIterator {
    /**
     * Similar to {link Iterator#hasNext()}.
     * @return {boolean}
     */
    hasNext() : boolean;

    /**
     * Similar to {link Iterator#next()}.
     * 
     * @return {*} Not {@code null}
     * @throws NoSuchElementException
     */
    next() : KeyValuePair;
}



