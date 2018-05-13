/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
/**
 * See <a
 * href="http://java.sun.com/j2se/1.5.0/docs/api/java/lang/Exception.html">the
 * official Java API doc</a> for details.
 * @param {string} message
 * @param {java.lang.Throwable} cause
 * @class
 * @extends java.lang.Throwable
 */
export class Exception {
    public message:string;
    public cause:any;
    public constructor(message?: any, cause?: any, enableSuppression?: any, writableStackTrace?: any) {
        if(arguments.length == 0) {
            return;
        }
        if(arguments.length === 1) {
            if(typeof arguments[0] === 'string') {
                this.message = arguments[0];
            }else {
                this.cause = arguments[0];
            }
            return;
        }
        if(arguments.length === 2) {
            this.message = arguments[0];
            this.cause = arguments[1];
            return;
        }
        // if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof <any>Error) || cause === null) && ((typeof enableSuppression === 'boolean') || enableSuppression === null) && ((typeof writableStackTrace === 'boolean') || writableStackTrace === null)) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     this.message = message;
        //     (<any>Object).setPrototypeOf(this, Exception.prototype);
        // } else if (((typeof message === 'string') || message === null) && ((cause != null && cause instanceof <any>Error) || cause === null) && enableSuppression === undefined && writableStackTrace === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     this.message = message;
        //     (<any>Object).setPrototypeOf(this, Exception.prototype);
        // } else if (((typeof message === 'string') || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     this.message = message;
        //     (<any>Object).setPrototypeOf(this, Exception.prototype);
        // } else if (((message != null && message instanceof <any>Error) || message === null) && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let cause: any = __args[0];
        //     this.message = cause;
        //     (<any>Object).setPrototypeOf(this, Exception.prototype);
        // } else if (message === undefined && cause === undefined && enableSuppression === undefined && writableStackTrace === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     (<any>Object).setPrototypeOf(this, Exception.prototype);
        // } else throw new Error('invalid overload');
    }
}

Exception["__class"] = "java.lang.Exception";
Exception["__interfaces"] = ["java.io.Serializable"];