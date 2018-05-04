/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModelException } from '../../template/TemplateModelException';

/**
 * An exception thrown when there is an attempt to access
 * an invalid bean property when we are in a "strict bean" mode
 * @param {String} description
 * @class
 * @extends TemplateModelException
 */
export class InvalidPropertyException extends TemplateModelException {
    public constructor(description : string) {
        super(description);
        (<any>Object).setPrototypeOf(this, InvalidPropertyException.prototype);
    }
}
InvalidPropertyException["__class"] = "freemarker.ext.beans.InvalidPropertyException";
InvalidPropertyException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
