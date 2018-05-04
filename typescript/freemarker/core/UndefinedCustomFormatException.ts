/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { InvalidFormatStringException } from './InvalidFormatStringException';

/**
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends InvalidFormatStringException
 */
export class UndefinedCustomFormatException extends InvalidFormatStringException {
    public constructor(message? : any, cause? : any) {
        if(((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message, cause);
            (<any>Object).setPrototypeOf(this, UndefinedCustomFormatException.prototype);
        } else if(((typeof message === 'string') || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super(message);
            (<any>Object).setPrototypeOf(this, UndefinedCustomFormatException.prototype);
        } else throw new Error('invalid overload');
    }
}
UndefinedCustomFormatException["__class"] = "freemarker.core.UndefinedCustomFormatException";
UndefinedCustomFormatException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
