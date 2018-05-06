/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';

/**
 * A key-value pair in a hash; used for {link KeyValuePairIterator}.
 * 
 * @since 2.3.25
 * @class
 */
export interface KeyValuePair {
    /**
     * @return {*} Any type of {link TemplateModel}, maybe {@code null} (if the hash entry key is {@code null}).
     */
    getKey() : TemplateModel;

    /**
     * @return {*} Any type of {link TemplateModel}, maybe {@code null} (if the hash entry value is {@code null}).
     */
    getValue() : TemplateModel;
}



