/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * An unexpected state was reached that is certainly caused by a bug in FreeMarker.
 * 
 * @since 2.3.21
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends Error
 */
export class BugException extends Error {
    static COMMON_MESSAGE : string = "A bug was detected in FreeMarker; please report it with stack-trace";

    public constructor(message? : any, cause? : any) {
        if(((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(BugException.COMMON_MESSAGE + ": " + message); this.message=BugException.COMMON_MESSAGE + ": " + message;
            (<any>Object).setPrototypeOf(this, BugException.prototype);
        } else if(((typeof message === 'string') || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super(BugException.COMMON_MESSAGE + ": " + message); this.message=BugException.COMMON_MESSAGE + ": " + message;
                (<any>Object).setPrototypeOf(this, BugException.prototype);
            }
        } else if(((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Throwable") >= 0) || message != null && message instanceof <any>Error) || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            super(BugException.COMMON_MESSAGE); this.message=BugException.COMMON_MESSAGE;
            (<any>Object).setPrototypeOf(this, BugException.prototype);
        } else if(((typeof message === 'number') || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let value : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let message : any = /* valueOf */new String(value).toString();
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause : any = null;
                    super(BugException.COMMON_MESSAGE + ": " + message); this.message=BugException.COMMON_MESSAGE + ": " + message;
                    (<any>Object).setPrototypeOf(this, BugException.prototype);
                }
            }
        } else if(message === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = <Error>null;
                super(BugException.COMMON_MESSAGE); this.message=BugException.COMMON_MESSAGE;
                (<any>Object).setPrototypeOf(this, BugException.prototype);
            }
        } else throw new Error('invalid overload');
    }
}
BugException["__class"] = "freemarker.core.BugException";
BugException["__interfaces"] = ["java.io.Serializable"];




