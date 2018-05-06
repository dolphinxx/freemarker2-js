/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {PrintWriter} from '../../java/io/PrintWriter';
import {StackTraceWriter} from './StackTraceWriter';
import {TemplateException} from './TemplateException';

export class PrintWriterStackTraceWriter implements StackTraceWriter {
    /*private*/ out : PrintWriter;

    public constructor(out : PrintWriter) {
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
            (<TemplateException>exception).printStandardStackTrace$java_io_PrintWriter(this.out);
        } else {
            console.error(exception.message, exception);
        }
    }
}
PrintWriterStackTraceWriter["__class"] = "freemarker.template.PrintWriterStackTraceWriter";
PrintWriterStackTraceWriter["__interfaces"] = ["freemarker.template.StackTraceWriter"];





