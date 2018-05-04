/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {RuntimeException} from "./RuntimeException";

/**
 * See <a
 * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IndexOutOfBoundsException.html">the
 * official Java API doc</a> for details.
 * @param {string} message
 * @class
 * @extends java.lang.RuntimeException
 */
export class IndexOutOfBoundsException extends RuntimeException {
    public constructor(message?: any) {
        if (((typeof message === 'string') || message === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message);
            (<any>Object).setPrototypeOf(this, IndexOutOfBoundsException.prototype);
        } else if (message === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            (<any>Object).setPrototypeOf(this, IndexOutOfBoundsException.prototype);
        } else throw new Error('invalid overload');
    }
}

IndexOutOfBoundsException["__class"] = "java.lang.IndexOutOfBoundsException";
IndexOutOfBoundsException["__interfaces"] = ["java.io.Serializable"];