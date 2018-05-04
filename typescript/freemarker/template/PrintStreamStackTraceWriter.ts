/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { StackTraceWriter } from './StackTraceWriter';
import { TemplateException } from './TemplateException';
import {PrintStream} from "../../java/io/PrintStream";

export class PrintStreamStackTraceWriter implements StackTraceWriter {
    /*private*/ out : PrintStream;

    public constructor(out : PrintStream) {
        if(this.out===undefined) this.out = null;
        this.out = out;
    }

    public print(obj : any) {
        this.out.print(obj);
    }

    public println$java_lang_Object(obj : any) {
        this.out.println(obj);
    }

    public println(obj? : any) : any {
        if(((obj != null) || obj === null)) {
            return <any>this.println$java_lang_Object(obj);
        } else if(obj === undefined) {
            return <any>this.println$();
        } else throw new Error('invalid overload');
    }

    public println$() {
        this.out.println();
    }

    public printStandardStackTrace(exception : Error) {
        if(exception != null && exception instanceof <any>TemplateException) {
            (<TemplateException>exception).printStandardStackTrace$java_io_PrintStream(this.out);
        } else {
            console.error(exception.message, exception);
        }
    }
}
PrintStreamStackTraceWriter["__class"] = "freemarker.template.PrintStreamStackTraceWriter";
PrintStreamStackTraceWriter["__interfaces"] = ["freemarker.template.StackTraceWriter"];




var __Function = Function;
