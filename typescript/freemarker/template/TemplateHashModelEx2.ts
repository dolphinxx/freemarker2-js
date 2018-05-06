/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateHashModelEx} from './TemplateHashModelEx';
import {KeyValuePairIterator} from './KeyValuePairIterator';

/**
 * Adds key-value pair listing capability to {link TemplateHashModelEx}. While in many cases that can also be achieved
 * with {link #keys()} and then {link #get(String)}, that has some problems. One is that {link #get(String)} only
 * accepts string keys, while {link #keys()} can return non-string keys too. The other is that calling {link #keys()}
 * and then {link #get(String)} for each key can be slower than listing the key-value pairs in one go.
 * 
 * @since 2.3.25
 * @class
 */
export interface TemplateHashModelEx2 extends TemplateHashModelEx {
    /**
     * @return {*} The iterator that walks through the key-value pairs in the hash. Not {@code null}.
     */
    keyValuePairIterator() : KeyValuePairIterator;
}



