/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateValueFormatException} from './TemplateValueFormatException';

/**
 * Can't create a template format that the template format refers to (typically thrown by alias template formats).
 * 
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends TemplateValueFormatException
 */
export class AliasTargetTemplateValueFormatException extends TemplateValueFormatException {
    public constructor(message? : any, cause? : any) {
        if(((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message, cause);
            (<any>Object).setPrototypeOf(this, AliasTargetTemplateValueFormatException.prototype);
        } else if(((typeof message === 'string') || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super(message);
            (<any>Object).setPrototypeOf(this, AliasTargetTemplateValueFormatException.prototype);
        } else throw new Error('invalid overload');
    }
}
AliasTargetTemplateValueFormatException["__class"] = "freemarker.core.AliasTargetTemplateValueFormatException";
AliasTargetTemplateValueFormatException["__interfaces"] = ["java.io.Serializable"];




