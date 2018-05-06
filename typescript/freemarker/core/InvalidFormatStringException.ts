/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateValueFormatException} from './TemplateValueFormatException';

/**
 * Used when creating {link TemplateDateFormat}-s and {link TemplateNumberFormat}-s to indicate that the format
 * string (like the value of the {@code dateFormat} setting) is malformed.
 * 
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends TemplateValueFormatException
 */
export abstract class InvalidFormatStringException extends TemplateValueFormatException {
    public constructor(message : string, cause : Error = null) {
        super(message, cause);
        (<any>Object).setPrototypeOf(this, InvalidFormatStringException.prototype);
    }
}
InvalidFormatStringException["__class"] = "freemarker.core.InvalidFormatStringException";
InvalidFormatStringException["__interfaces"] = ["java.io.Serializable"];





