/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * @since 2.3.22
 * @param {String} message
 * @param {Error} t
 * @class
 * @extends Error
 */
export class UndeclaredThrowableException extends Error {
    public constructor(message? : any, t? : any) {
        if(((typeof message === 'string') || message === null) && ((t != null && (t["__classes"] && t["__classes"].indexOf("java.lang.Throwable") >= 0) || t != null && t instanceof <any>Error) || t === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, UndeclaredThrowableException.prototype);
        } else if(((message != null && (message["__classes"] && message["__classes"].indexOf("java.lang.Throwable") >= 0) || message != null && message instanceof <any>Error) || message === null) && t === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let t : any = __args[0];
            super(t); this.message=t;
            (<any>Object).setPrototypeOf(this, UndeclaredThrowableException.prototype);
        } else throw new Error('invalid overload');
    }

    public getUndeclaredThrowable() : Error {
        return (<Error>null);
    }
}
UndeclaredThrowableException["__class"] = "freemarker.template.utility.UndeclaredThrowableException";
UndeclaredThrowableException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
