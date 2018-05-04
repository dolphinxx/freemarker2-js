/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {RuntimeException} from './RuntimeException';

/**
 * See <a
 * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/IllegalArgumentException.html">the
 * official Java API doc</a> for details.
 * @param {string} message
 * @param {java.lang.Throwable} cause
 * @class
 * @extends java.lang.RuntimeException
 */
export class IllegalArgumentException extends RuntimeException {
    public constructor(message?: any, cause?: any) {
        if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message, cause);
            (<any>Object).setPrototypeOf(this, IllegalArgumentException.prototype);
        } else if (((typeof message === 'string') || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super(message);
            (<any>Object).setPrototypeOf(this, IllegalArgumentException.prototype);
        } else if (((message != null && message instanceof <any>Error) || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause: any = __args[0];
            super(cause);
            (<any>Object).setPrototypeOf(this, IllegalArgumentException.prototype);
        } else if (message === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            (<any>Object).setPrototypeOf(this, IllegalArgumentException.prototype);
        } else throw new Error('invalid overload');
    }
}

IllegalArgumentException["__class"] = "java.lang.IllegalArgumentException";
IllegalArgumentException["__interfaces"] = ["java.io.Serializable"];