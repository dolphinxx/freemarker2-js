/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateValueFormatException } from './TemplateValueFormatException';

/**
 * Thrown when the content of the string that should be parsed by the {link TemplateValueFormat} doesn't match what the
 * format expects.
 * 
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends TemplateValueFormatException
 */
export class UnparsableValueException extends TemplateValueFormatException {
    public constructor(message : string, cause : Error = null) {
        super(message, cause);
        (<any>Object).setPrototypeOf(this, UnparsableValueException.prototype);
    }
}
UnparsableValueException["__class"] = "freemarker.core.UnparsableValueException";
UnparsableValueException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
