/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Exception} from "../../java/lang/Exception";

/**
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends Error
 */
export class UnregisteredOutputFormatException extends Exception {
    public constructor(message : string, cause : Error = null) {
        super(message); this.message=message;
        (<any>Object).setPrototypeOf(this, UnregisteredOutputFormatException.prototype);
    }
}
UnregisteredOutputFormatException["__class"] = "freemarker.core.UnregisteredOutputFormatException";
UnregisteredOutputFormatException["__interfaces"] = ["java.io.Serializable"];





