/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';
import {SimpleScalar} from './SimpleScalar';

/**
 * "string" template language data-type; like in Java, an unmodifiable UNICODE character sequence.
 * (The name of this interface should be {@code TemplateStringModel}. The misnomer is inherited from the
 * old times, when this was the only single-value type in FreeMarker.)
 * When a template has to print a value of this class, it will assume that it stores plain text (not HTML, XML, etc.),
 * and thus it will be possibly auto-escaped. To avoid that, use the appropriate {link TemplateMarkupOutputModel}
 * instead.
 * @class
 */
export interface TemplateScalarModel extends TemplateModel {
    /**
     * Returns the {link String} representation of this model. Returning {@code null} is illegal, and may cause
     * exception in the calling code. (Except, in classic-compatible mode the engine will convert {@code null} into
     * empty string.)
     * @return {String}
     */
    getAsString() : string;
}

export namespace TemplateScalarModel {

    /**
     * A constant value to use as the empty string.
     */
    export let EMPTY_STRING : TemplateModel = new SimpleScalar("");
}




