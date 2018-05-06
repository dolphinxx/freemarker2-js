/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
    import {Appendable} from '../lang/Appendable';
    import {Closeable} from './Closeable';
    import {Flushable} from "./Flushable";
import {NullPointerException} from "../lang/NullPointerException";

/**
     * JSweet implementation.
     * @class
     */
    export abstract class Writer implements Appendable, Closeable, Flushable {
        /*private*/ writeBuffer : string[];

        static WRITE_BUFFER_SIZE : number = 1024;

        protected lock : any;

        public constructor(lock? : any) {
            if(((lock != null) || lock === null)) {
                let __args = Array.prototype.slice.call(arguments);
                this.writeBuffer = null;
                this.lock = null;
                this.writeBuffer = null;
                this.lock = null;
                (() => {
                    if(lock == null) {
                        throw new NullPointerException();
                    }
                    this.lock = lock;
                })();
            } else if(lock === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                this.writeBuffer = null;
                this.lock = null;
                this.writeBuffer = null;
                this.lock = null;
                (() => {
                    this.lock = this;
                })();
            } else throw new Error('invalid overload');
        }

        public write$int(c : number) {
            {
                if(this.writeBuffer == null) {
                    this.writeBuffer = new Array(Writer.WRITE_BUFFER_SIZE);
                }
                this.writeBuffer[0] = String.fromCharCode(c);
                this.write$char_A$int$int(this.writeBuffer, 0, 1);
            };
        }

        public write$char_A(cbuf : string[]) {
            this.write$char_A$int$int(cbuf, 0, cbuf.length);
        }

        public write$char_A$int$int(cbuf : string[], off : number, len : number) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

        public write$java_lang_String(str : string) {
            this.write$java_lang_String$int$int(str, 0, str.length);
        }

        public write$java_lang_String$int$int(str : string, off : number, len : number) {
            {
                let cbuf : string[];
                if(len <= Writer.WRITE_BUFFER_SIZE) {
                    if(this.writeBuffer == null) {
                        this.writeBuffer = new Array(Writer.WRITE_BUFFER_SIZE);
                    }
                    cbuf = this.writeBuffer;
                } else {
                    cbuf = new Array(len);
                }
                /* getChars */((a, s, e, d, l) => { d.splice.apply(d, [l, e-s].concat(<any>a.substring(s, e).split(''))); })(str, off, (off + len), cbuf, 0);
                this.write$char_A$int$int(cbuf, 0, len);
            };
        }

        public write(str? : any, off? : any, len? : any) : any {
            if(((typeof str === 'string') || str === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.write$java_lang_String$int$int(str, off, len);
            } else if(((str != null && str instanceof <any>Array && (str.length==0 || str[0] == null ||(typeof str[0] === 'string'))) || str === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.write$char_A$int$int(str, off, len);
            } else if(((str != null && str instanceof <any>Array && (str.length==0 || str[0] == null ||(typeof str[0] === 'string'))) || str === null) && off === undefined && len === undefined) {
                return <any>this.write$char_A(str);
            } else if(((typeof str === 'string') || str === null) && off === undefined && len === undefined) {
                return <any>this.write$java_lang_String(str);
            } else if(((typeof str === 'number') || str === null) && off === undefined && len === undefined) {
                return <any>this.write$int(str);
            } else throw new Error('invalid overload');
        }

        public append$java_lang_CharSequence(csq : any) : Writer {
            if(csq == null) this.write$java_lang_String("null"); else this.write$java_lang_String(csq.toString());
            return this;
        }

        public append$java_lang_CharSequence$int$int(csq : any, start : number, end : number) : Writer {
            let cs : any = (csq == null?"null":csq);
            this.write$java_lang_String(/* subSequence */cs.substring(start, end).toString());
            return this;
        }

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
            this.write$int((c).charCodeAt(0));
            return this;
        }

        public abstract flush();

        public abstract close();
    }
    Writer["__class"] = "java.io.Writer";
    Writer["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];