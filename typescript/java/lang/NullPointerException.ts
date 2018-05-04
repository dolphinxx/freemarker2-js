/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {RuntimeException} from './RuntimeException';

/**
 * See <a
 * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/NullPointerException.html">the
 * official Java API doc</a> for details.
 * @param {string} message
 * @class
 * @extends java.lang.RuntimeException
 */
export class NullPointerException extends RuntimeException {
    public constructor(message?: any) {
        if (((typeof message === 'string') || message === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message);
            (<any>Object).setPrototypeOf(this, NullPointerException.prototype);
        } else if (message === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            (<any>Object).setPrototypeOf(this, NullPointerException.prototype);
        } else throw new Error('invalid overload');
    }

    createError(msg: string): any {
        return <any>(new TypeError(msg));
    }
}

NullPointerException["__class"] = "java.lang.NullPointerException";
NullPointerException["__interfaces"] = ["java.io.Serializable"];