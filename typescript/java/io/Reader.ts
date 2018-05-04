/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {Closeable} from './Closeable';
import {IllegalArgumentException} from "../lang/IllegalArgumentException";
import {IOException} from "./IOException";
import {NullPointerException} from "../lang/NullPointerException";

/**
 * JSweet implementation.
 * @class
 */
export abstract class Reader implements Closeable {
    lock: any;

    public constructor(lock?: any) {
        if (((lock != null) || lock === null)) {
            let __args = Array.prototype.slice.call(arguments);
            this.lock = null;
            this.skipBuffer = null;
            this.lock = null;
            (() => {
                if (lock == null) {
                    throw new NullPointerException();
                }
                this.lock = lock;
            })();
        } else if (lock === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            this.lock = null;
            this.skipBuffer = null;
            this.lock = null;
            (() => {
                this.lock = this;
            })();
        } else throw new Error('invalid overload');
    }

    public read$(): number {
        let cb: string[] = new Array(1);
        if (this.read$char_A$int$int(cb, 0, 1) === -1) return -1; else return (cb[0]).charCodeAt(0);
    }

    public read$char_A(cbuf: string[]): number {
        return this.read$char_A$int$int(cbuf, 0, cbuf.length);
    }

    public read$char_A$int$int(cbuf: string[], off: number, len: number): number {
        throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
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

    /**
     * Maximum skip-buffer size
     */
    static maxSkipBufferSize: number = 8192;

    /**
     * Skip buffer, null until allocated
     */
    /*private*/
    skipBuffer: string[] = null;

    public skip(n: number): number {
        if (n < 0) throw new IllegalArgumentException("skip value is negative");
        let nn: number = (<number>Math.min(n, Reader.maxSkipBufferSize) | 0);
        if ((this.skipBuffer == null) || (this.skipBuffer.length < nn)) this.skipBuffer = new Array(nn);
        let r: number = n;
        while ((r > 0)) {
            let nc: number = this.read$char_A$int$int(this.skipBuffer, 0, (<number>Math.min(r, nn) | 0));
            if (nc === -1) break;
            r -= nc;
        }
        ;
        return n - r;
    }

    public ready(): boolean {
        return false;
    }

    public markSupported(): boolean {
        return false;
    }

    public mark(readAheadLimit: number) {
        throw new IOException("mark() not supported");
    }

    public reset() {
        throw new IOException("reset() not supported");
    }

    public abstract close();
}

Reader["__class"] = "java.io.Reader";
Reader["__interfaces"] = ["java.io.Closeable", "java.lang.AutoCloseable"];



