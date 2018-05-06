/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';

/**
 * "boolean" template language data type; same as in Java; either {@code true} or {@code false}.
 * <p>
 * <p>
 * Objects of this type should be immutable, that is, calling {link #getAsBoolean()} should always return the same
 * value as for the first time.
 * @class
 */
export interface TemplateBooleanModel extends TemplateModel {
    /**
     * @return {boolean} whether to interpret this object as true or false in a boolean context
     */
    getAsBoolean(): boolean;
}

export namespace TemplateBooleanModel {

    /**
     * A singleton object to represent boolean false
     */
    export let FALSE: TemplateBooleanModel = {getAsBoolean: () => false};

    /**
     * A singleton object to represent boolean true
     */
    export let TRUE: TemplateBooleanModel = {getAsBoolean: () => true};
}