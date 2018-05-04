/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Exception that's not really an exception, just used for flow control.
 * @extends Error
 * @class
 */
export class FlowControlException extends Error {
    public constructor(message? : any) {
        if(((typeof message === 'string') || message === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, FlowControlException.prototype);
        } else if(message === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            (<any>Object).setPrototypeOf(this, FlowControlException.prototype);
        } else throw new Error('invalid overload');
    }
}
FlowControlException["__class"] = "freemarker.core.FlowControlException";
FlowControlException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
