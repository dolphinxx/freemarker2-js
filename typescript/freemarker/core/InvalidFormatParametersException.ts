/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {InvalidFormatStringException} from './InvalidFormatStringException';

/**
 * Used when creating {link TemplateDateFormat}-s and {link TemplateNumberFormat}-s to indicate that the parameters
 * part of the format string (like some kind of pattern) is malformed.
 * 
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends InvalidFormatStringException
 */
export class InvalidFormatParametersException extends InvalidFormatStringException {
    public constructor(message : string, cause : Error = null) {
        super(message, cause);
        (<any>Object).setPrototypeOf(this, InvalidFormatParametersException.prototype);
    }
}
InvalidFormatParametersException["__class"] = "freemarker.core.InvalidFormatParametersException";
InvalidFormatParametersException["__interfaces"] = ["java.io.Serializable"];





