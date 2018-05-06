/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateException} from '../template/TemplateException';
import {PrintWriter} from '../../java/io/PrintWriter';
import {ClassUtil} from "../template/utility/ClassUtil";
import {PrintStream} from "../../java/io/PrintStream";

/**
 * This exception is thrown when a <tt>#stop</tt> directive is encountered.
 * @extends TemplateException
 * @class
 */
export class StopException extends TemplateException {
    public constructor(env? : any, s? : any) {
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((typeof s === 'string') || s === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(s, env);
            (<any>Object).setPrototypeOf(this, StopException.prototype);
        } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && s === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super(env);
            (<any>Object).setPrototypeOf(this, StopException.prototype);
        } else throw new Error('invalid overload');
    }

    public printStackTrace$java_io_PrintWriter(pw : PrintWriter) {
        {
            let msg : string = this.message;
            pw.print("Encountered stop instruction");
            if(msg != null && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(msg,""))) {
                pw.println("\nCause given: " + msg);
            } else pw.println();
            console.error(super.message);
        }
    }

    /**
     * 
     * @param {PrintWriter} pw
     */
    public printStackTrace(pw? : any) : any {
        if(((pw != null && pw instanceof <any>PrintWriter) || pw === null)) {
            return <any>this.printStackTrace$java_io_PrintWriter(pw);
        } else if(((pw != null && pw instanceof <any>PrintStream) || pw === null)) {
            return <any>this.printStackTrace$java_io_PrintStream(pw);
        } else throw new Error('invalid overload');
    }

    public printStackTrace$java_io_PrintStream(ps : PrintStream) {
        {
            let msg : string = this.message;
            ps.print("Encountered stop instruction");
            if(msg != null && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(msg,""))) {
                ps.println("\nCause given: " + msg);
            } else ps.println();
            console.error(super.message);
        }
    }
}
StopException["__class"] = "freemarker.core.StopException";
StopException["__interfaces"] = ["java.io.Serializable"];





