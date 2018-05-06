/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateValueFormatException} from './TemplateValueFormatException';

/**
 * Thrown when a {link TemplateModel} can't be formatted because of the value/properties of it are outside of that the
 * {link TemplateValueFormat} supports. For example, a formatter may not support dates before year 1, or can't format
 * NaN. The most often used subclass is {link UnknownDateTypeFormattingUnsupportedException}.
 * 
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends TemplateValueFormatException
 */
export class UnformattableValueException extends TemplateValueFormatException {
    public constructor(message? : any, cause? : any) {
        if(((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message, cause);
            (<any>Object).setPrototypeOf(this, UnformattableValueException.prototype);
        } else if(((typeof message === 'string') || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super(message);
            (<any>Object).setPrototypeOf(this, UnformattableValueException.prototype);
        } else throw new Error('invalid overload');
    }
}
UnformattableValueException["__class"] = "freemarker.core.UnformattableValueException";
UnformattableValueException["__interfaces"] = ["java.io.Serializable"];





