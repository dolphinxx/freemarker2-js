/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {Reader} from "./Reader";
import {IllegalArgumentException} from "../lang/IllegalArgumentException";
import {IOException} from "./IOException";
import {System} from "../lang/System";
import {IndexOutOfBoundsException} from "../lang/IndexOutOfBoundsException";
import {StringBuilder} from "../lang/StringBuilder";

/**
 * JSweet implementation.
 * @param {Reader} in
 * @param {number} sz
 * @class
 * @extends Reader
 */
export class BufferedReader extends Reader {
    /*private*/
    in: Reader;

    /*private*/
    cb: string[];

    /*private*/
    nChars: number;

    /*private*/
    nextChar: number;

    static INVALIDATED: number = -2;

    static UNMARKED: number = -1;

    /*private*/
    markedChar: number;

    /*private*/
    readAheadLimit: number;

    /*private*/
    skipLF: boolean;

    /*private*/
    markedSkipLF: boolean;

    static defaultCharBufferSize: number = 8192;

    static defaultExpectedLineLength: number = 80;

    public constructor(__in?: any, sz?: any) {
        if (((__in != null && __in instanceof <any>Reader) || __in === null) && ((typeof sz === 'number') || sz === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(__in);
            this.in = null;
            this.cb = null;
            this.nChars = 0;
            this.nextChar = 0;
            this.markedChar = 0;
            this.readAheadLimit = 0;
            this.skipLF = false;
            this.markedSkipLF = false;
            this.in = null;
            this.cb = null;
            this.nChars = 0;
            this.nextChar = 0;
            this.markedChar = 0;
            this.readAheadLimit = 0;
            this.skipLF = false;
            this.markedSkipLF = false;
            (() => {
                this.markedChar = BufferedReader.UNMARKED;
                this.readAheadLimit = 0;
                this.skipLF = false;
                this.markedSkipLF = false;
                if (sz <= 0) throw new IllegalArgumentException("Buffer size <= 0");
                this.in = __in;
                this.cb = new Array(sz);
                this.nextChar = this.nChars = 0;
            })();
        } else if (((__in != null && __in instanceof <any>Reader) || __in === null) && sz === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let sz: any = BufferedReader.defaultCharBufferSize;
                super(__in);
                this.in = null;
                this.cb = null;
                this.nChars = 0;
                this.nextChar = 0;
                this.markedChar = 0;
                this.readAheadLimit = 0;
                this.skipLF = false;
                this.markedSkipLF = false;
                this.in = null;
                this.cb = null;
                this.nChars = 0;
                this.nextChar = 0;
                this.markedChar = 0;
                this.readAheadLimit = 0;
                this.skipLF = false;
                this.markedSkipLF = false;
                (() => {
                    this.markedChar = BufferedReader.UNMARKED;
                    this.readAheadLimit = 0;
                    this.skipLF = false;
                    this.markedSkipLF = false;
                    if (sz <= 0) throw new IllegalArgumentException("Buffer size <= 0");
                    this.in = __in;
                    this.cb = new Array(sz);
                    this.nextChar = this.nChars = 0;
                })();
            }
        } else throw new Error('invalid overload');
    }

    /*private*/
    ensureOpen() {
        if (this.in == null) throw new IOException("Stream closed");
    }

    /*private*/
    fill() {
        let dst: number;
        if (this.markedChar <= BufferedReader.UNMARKED) {
            dst = 0;
        } else {
            let delta: number = this.nextChar - this.markedChar;
            if (delta >= this.readAheadLimit) {
                this.markedChar = BufferedReader.INVALIDATED;
                this.readAheadLimit = 0;
                dst = 0;
            } else {
                if (this.readAheadLimit <= this.cb.length) {
                    System.arraycopy(this.cb, this.markedChar, this.cb, 0, delta);
                    this.markedChar = 0;
                    dst = delta;
                } else {
                    let ncb: string[] = new Array(this.readAheadLimit);
                    System.arraycopy(this.cb, this.markedChar, ncb, 0, delta);
                    this.cb = ncb;
                    this.markedChar = 0;
                    dst = delta;
                }
                this.nextChar = this.nChars = delta;
            }
        }
        let n: number;
        do {
            n = this.in.read$char_A$int$int(this.cb, dst, this.cb.length - dst);
        } while ((n === 0));
        if (n > 0) {
            this.nChars = dst + n;
            this.nextChar = dst;
        }
    }

    public read$(): number {
        {
            this.ensureOpen();
            for (; ;) {
                if (this.nextChar >= this.nChars) {
                    this.fill();
                    if (this.nextChar >= this.nChars) return -1;
                }
                if (this.skipLF) {
                    this.skipLF = false;
                    if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(this.cb[this.nextChar]) == '\n'.charCodeAt(0)) {
                        this.nextChar++;
                        continue;
                    }
                }
                return (this.cb[this.nextChar++]).charCodeAt(0);
            }
            ;
        }
        ;
    }

    /*private*/
    read1(cbuf: string[], off: number, len: number): number {
        if (this.nextChar >= this.nChars) {
            if (len >= this.cb.length && this.markedChar <= BufferedReader.UNMARKED && !this.skipLF) {
                return this.in.read$char_A$int$int(cbuf, off, len);
            }
            this.fill();
        }
        if (this.nextChar >= this.nChars) return -1;
        if (this.skipLF) {
            this.skipLF = false;
            if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(this.cb[this.nextChar]) == '\n'.charCodeAt(0)) {
                this.nextChar++;
                if (this.nextChar >= this.nChars) this.fill();
                if (this.nextChar >= this.nChars) return -1;
            }
        }
        let n: number = Math.min(len, this.nChars - this.nextChar);
        System.arraycopy(this.cb, this.nextChar, cbuf, off, n);
        this.nextChar += n;
        return n;
    }

    public read$char_A$int$int(cbuf: string[], off: number, len: number): number {
        {
            this.ensureOpen();
            if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)) {
                throw new IndexOutOfBoundsException();
            } else if (len === 0) {
                return 0;
            }
            let n: number = this.read1(cbuf, off, len);
            if (n <= 0) return n;
            while (((n < len) && this.in.ready())) {
                let n1: number = this.read1(cbuf, off + n, len - n);
                if (n1 <= 0) break;
                n += n1;
            }
            ;
            return n;
        }
        ;
    }

    public read(cbuf?: any, off?: any, len?: any): any {
        if (((cbuf != null && cbuf instanceof <any>Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.read$char_A$int$int(cbuf, off, len);
        } else if (((cbuf != null && cbuf instanceof <any>Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && off === undefined && len === undefined) {
            return <any>this.read$char_A(cbuf);
        } else if (cbuf === undefined && off === undefined && len === undefined) {
            return <any>this.read$();
        } else throw new Error('invalid overload');
    }

    public readLine$boolean(ignoreLF: boolean): string {
        let s: StringBuilder = null;
        let startChar: number;
        {
            this.ensureOpen();
            let omitLF: boolean = ignoreLF || this.skipLF;
            for (; ;) {
                if (this.nextChar >= this.nChars) this.fill();
                if (this.nextChar >= this.nChars) {
                    if (s != null && s.length() > 0) return s.toString(); else return null;
                }
                let eol: boolean = false;
                let c: string = String.fromCharCode(0);
                let i: number;
                if (omitLF && ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(this.cb[this.nextChar]) == '\n'.charCodeAt(0))) this.nextChar++;
                this.skipLF = false;
                omitLF = false;
                charLoop: for (i = this.nextChar; i < this.nChars; i++) {
                    c = this.cb[i];
                    if (((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) || ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) == '\r'.charCodeAt(0))) {
                        eol = true;
                        break charLoop;
                    }
                }
                ;
                startChar = this.nextChar;
                this.nextChar = i;
                if (eol) {
                    let str: string;
                    if (s == null) {
                        str = <string>((str, index, len) => str.substring(index, index + len))((this.cb).join(''), startChar, i - startChar);
                    } else {
                        s.append$char_A$int$int(this.cb, startChar, i - startChar);
                        str = s.toString();
                    }
                    this.nextChar++;
                    if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                        this.skipLF = true;
                    }
                    return str;
                }
                if (s == null) s = new StringBuilder(BufferedReader.defaultExpectedLineLength);
                s.append$char_A$int$int(this.cb, startChar, i - startChar);
            }
            ;
        }
        ;
    }

    public readLine(ignoreLF?: any): any {
        if (((typeof ignoreLF === 'boolean') || ignoreLF === null)) {
            return <any>this.readLine$boolean(ignoreLF);
        } else if (ignoreLF === undefined) {
            return <any>this.readLine$();
        } else throw new Error('invalid overload');
    }

    public readLine$(): string {
        return this.readLine$boolean(false);
    }

    public skip(n: number): number {
        if (n < 0) {
            throw new IllegalArgumentException("skip value is negative");
        }
        {
            this.ensureOpen();
            let r: number = n;
            while ((r > 0)) {
                if (this.nextChar >= this.nChars) this.fill();
                if (this.nextChar >= this.nChars) break;
                if (this.skipLF) {
                    this.skipLF = false;
                    if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(this.cb[this.nextChar]) == '\n'.charCodeAt(0)) {
                        this.nextChar++;
                    }
                }
                let d: number = this.nChars - this.nextChar;
                if (r <= d) {
                    this.nextChar += r;
                    r = 0;
                    break;
                } else {
                    r -= d;
                    this.nextChar = this.nChars;
                }
            }
            ;
            return n - r;
        }
        ;
    }

    public ready(): boolean {
        this.ensureOpen();
        if (this.skipLF) {
            if (this.nextChar >= this.nChars && this.in.ready()) {
                this.fill();
            }
            if (this.nextChar < this.nChars) {
                if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(this.cb[this.nextChar]) == '\n'.charCodeAt(0)) this.nextChar++;
                this.skipLF = false;
            }
        }
        return (this.nextChar < this.nChars) || this.in.ready();
    }

    public markSupported(): boolean {
        return true;
    }

    public mark(readAheadLimit: number) {
        if (readAheadLimit < 0) {
            throw new IllegalArgumentException("Read-ahead limit < 0");
        }
        this.ensureOpen();
        this.readAheadLimit = readAheadLimit;
        this.markedChar = this.nextChar;
        this.markedSkipLF = this.skipLF;
    }

    public reset() {
        this.ensureOpen();
        if (this.markedChar < 0) throw new IOException((this.markedChar === BufferedReader.INVALIDATED) ? "Mark invalid" : "Stream not marked");
        this.nextChar = this.markedChar;
        this.skipLF = this.markedSkipLF;
    }

    public close() {
        if (this.in == null) return;
        try {
            this.in.close();
        } finally {
            this.in = null;
            this.cb = null;
        }
        ;
    }
}

BufferedReader["__class"] = "java.io.BufferedReader";
BufferedReader["__interfaces"] = ["java.io.Closeable", "java.lang.AutoCloseable"];