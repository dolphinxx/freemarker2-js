/**
 * modified from java.io.StringWriter
 * @param {number} initialSize
 * @class
 */
import {Writer} from "./Writer";

export class StringWriter extends Writer{
    /*private*/
    buf: string;

    public constructor(initialSize?: any) {
        super();
        if (((typeof initialSize === 'number') || initialSize === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                this.buf = null;
                this.buf = null;
                (() => {
                    this.buf = "";
                })();
            }
        } else if (initialSize === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            this.buf = null;
            this.buf = null;
            (() => {
                this.buf = "";
            })();
        } else throw new Error('invalid overload');
    }

    public write$int(c: number) {
        this.buf += String.fromCharCode(c);
    }

    public write$char_A$int$int(cbuf: string[], off: number, len: number) {
        if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)) {
            throw new Error();
        } else if (len === 0) {
            return;
        }
        this.buf += cbuf.join('').substr(off, len);
    }

    public write(cbuf?: any, off?: any, len?: any): any {
        if (((cbuf != null && cbuf instanceof <any>Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.write$char_A$int$int(cbuf, off, len);
        } else if (((typeof cbuf === 'string') || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.write$java_lang_String$int$int(cbuf, off, len);
        } else if (((typeof cbuf === 'string') || cbuf === null) && off === undefined && len === undefined) {
            return <any>this.write$java_lang_String(cbuf);
        } else if (((cbuf != null && cbuf instanceof <any>Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && off === undefined && len === undefined) {
            return <any>this.write$char_A(cbuf);
        } else if (((typeof cbuf === 'number') || cbuf === null) && off === undefined && len === undefined) {
            return <any>this.write$int(cbuf);
        } else throw new Error('invalid overload');
    }

    public write$java_lang_String(str: string) {
        this.buf += str;
    }

    public write$java_lang_String$int$int(str: string, off: number, len: number) {
        this.buf += str.substring(off, off + len);
    }

    public append(csq?: any, start?: any, end?: any): any {
        if (((typeof csq === 'string') || csq === null) && start === undefined && end === undefined) {
            return <any>this.append$char(csq);
        } else throw new Error('invalid overload');
    }

    public append$char(c: string): StringWriter {
        this.write$int((c).charCodeAt(0));
        return this;
    }

    /**
     * Return the buffer's current value as a string.
     * @return {string}
     */
    public toString(): string {
        return this.buf;
    }

    /**
     * Flush the stream.
     */
    public flush() {
    }

    /**
     * Closing a <tt>Writer</tt> has no effect. The methods in this
     * class can be called after the stream has been closed without generating
     * an <tt>IOException</tt>.
     */
    public close() {
    }

    public print(str: string) {
        this.write$java_lang_String(str);
    }

    public println$() {
        this.write$int(('\n').charCodeAt(0));
    }

    public println$java_lang_String(str: string) {
        this.write$java_lang_String(str);
        this.write$int(('\n').charCodeAt(0));
    }

    public println(str?: any): any {
        if (((typeof str === 'string') || str === null)) {
            return <any>this.println$java_lang_String(str);
        } else if (str === undefined) {
            return <any>this.println$();
        } else throw new Error('invalid overload');
    }

    public write$char_A(cbuf: string[]) {
        this.write$java_lang_String(cbuf.join(''));
    }
}

StringWriter["__class"] = "java.io.StringWriter";



