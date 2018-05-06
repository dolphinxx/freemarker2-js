/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Writer} from '../../../java/io/Writer';

/**
 * A {link Writer} that simply drops what it gets.
 * 
 * @since 2.3.20
 * @extends Writer
 * @class
 */
export class NullWriter extends Writer{
    public static INSTANCE : NullWriter; public static INSTANCE_$LI$() : NullWriter { if(NullWriter.INSTANCE == null) NullWriter.INSTANCE = (() => { let __o : any = new NullWriter(); __o.__delegate = new NullWriter(); return __o; })(); return NullWriter.INSTANCE; };

    constructor() {
        super();
    }

    public write$char_A$int$int(cbuf : string[], off : number, len : number) {
    }

    /**
     * 
     * @param {Array} cbuf
     * @param {number} off
     * @param {number} len
     */
    public write(cbuf? : any, off? : any, len? : any) : any {
        if(((cbuf != null && cbuf instanceof <any>Array && (cbuf.length==0 || cbuf[0] == null ||(typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.write$char_A$int$int(cbuf, off, len);
        } else if(((typeof cbuf === 'string') || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.write$java_lang_String$int$int(cbuf, off, len);
        } else if(((cbuf != null && cbuf instanceof <any>Array && (cbuf.length==0 || cbuf[0] == null ||(typeof cbuf[0] === 'string'))) || cbuf === null) && off === undefined && len === undefined) {
            return <any>this.write$char_A(cbuf);
        } else if(((typeof cbuf === 'string') || cbuf === null) && off === undefined && len === undefined) {
            return <any>this.write$java_lang_String(cbuf);
        } else if(((typeof cbuf === 'number') || cbuf === null) && off === undefined && len === undefined) {
            return <any>this.write$int(cbuf);
        } else throw new Error('invalid overload');
    }

    /**
     * 
     */
    public flush() {
    }

    /**
     * 
     */
    public close() {
    }

    public write$int(c : number) {
    }

    public write$char_A(cbuf : string[]) {
    }

    public write$java_lang_String(str : string) {
    }

    public write$java_lang_String$int$int(str : string, off : number, len : number) {
    }

    public append$java_lang_CharSequence(csq : any) : Writer {
        return this;
    }

    public append$java_lang_CharSequence$int$int(csq : any, start : number, end : number) : Writer {
        return this;
    }

    /**
     * 
     * @param {CharSequence} csq
     * @param {number} start
     * @param {number} end
     * @return {Writer}
     */
    public append(csq? : any, start? : any, end? : any) : any {
        if(((csq != null && (csq["__interfaces"] != null && csq["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || csq.constructor != null && csq.constructor["__interfaces"] != null && csq.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof csq === "string")) || csq === null) && ((typeof start === 'number') || start === null) && ((typeof end === 'number') || end === null)) {
            return <any>this.append$java_lang_CharSequence$int$int(csq, start, end);
        } else if(((csq != null && (csq["__interfaces"] != null && csq["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || csq.constructor != null && csq.constructor["__interfaces"] != null && csq.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof csq === "string")) || csq === null) && start === undefined && end === undefined) {
            return <any>this.append$java_lang_CharSequence(csq);
        } else if(((typeof csq === 'string') || csq === null) && start === undefined && end === undefined) {
            return <any>this.append$char(csq);
        } else throw new Error('invalid overload');
    }

    public append$char(c : string) : Writer {
        return this;
    }
}
NullWriter["__class"] = "freemarker.template.utility.NullWriter";
NullWriter["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];






NullWriter.INSTANCE_$LI$();
