/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
 import {Writer} from './Writer';
import {OutputStream} from "./OutputStream";
import {NullPointerException} from "../lang/NullPointerException";
    /**
     * JSweet implementation (partial).
     * 
     * TODO: actual support of charsets.
     * @param {java.io.OutputStream} out
     * @param {string} charsetName
     * @class
     * @extends java.io.Writer
     */
    export class OutputStreamWriter extends Writer {
        /*private*/ out : OutputStream;

        public constructor(out? : any, charsetName? : any) {
            if(((out != null && out instanceof <any>OutputStream) || out === null) && ((typeof charsetName === 'string') || charsetName === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super(out);
                this.out = null;
                this.out = null;
                (() => {
                    if(charsetName == null) throw new NullPointerException("charsetName");
                    this.out = out;
                })();
            } else if(((out != null && out instanceof <any>OutputStream) || out === null) && ((charsetName != null && charsetName instanceof <any>Charset) || charsetName === null)) {
                let __args = Array.prototype.slice.call(arguments);
                let cs : any = __args[1];
                super(out);
                this.out = null;
                this.out = null;
                (() => {
                    if(cs == null) throw new NullPointerException("charset");
                    this.out = out;
                })();
            } else if(((out != null && out instanceof <any>OutputStream) || out === null) && charsetName === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                super(out);
                this.out = null;
                this.out = null;
                (() => {
                    this.out = out;
                })();
            } else throw new Error('invalid overload');
        }

        flushBuffer() {
            this.out.flush();
        }

        public write$int(c : number) {
            this.out.write$int(c);
        }

        public write$char_A$int$int(cbuf : string[], off : number, len : number) {
            let buf : number[] = <any>((<any>cbuf));
            this.out.write$byte_A$int$int(buf, off, len);
        }

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

        public write$java_lang_String$int$int(str : string, off : number, len : number) {
            this.out.write$byte_A$int$int(/* getBytes */(str).split('').map(s => s.charCodeAt(0)), off, len);
        }

        public flush() {
            this.out.flush();
        }

        public close() {
            this.out.close();
        }
    }
    OutputStreamWriter["__class"] = "java.io.OutputStreamWriter";
    OutputStreamWriter["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];