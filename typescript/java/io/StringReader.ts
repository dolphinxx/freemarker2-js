import {Reader} from './Reader';

/**
 * Creates a new string reader.
 *
 * @param {string} s String providing the character stream.
 * @class
 */
export class StringReader extends Reader {
    /*private*/
    str: string;

    /*private*/
    length: number;

    /*private*/
    next: number = 0;

    /*private*/
    __mark: number = 0;

    public constructor(s: string) {
        super();
        this.str = null;
        this.length = 0;
        this.str = s;
        this.length = s.length;
    }

    /**
     * Check to make sure that the stream has not been closed
     * @private
     */

    /*private*/
    ensureOpen() {
        if (this.str == null) throw new Error("Stream closed");
    }

    public read$(): number {
        this.ensureOpen();
        if (this.next >= this.length) return -1;
        return (this.str.charAt(this.next++)).charCodeAt(0);
    }

    public read$char_A$int$int(cbuf: string[], off: number, len: number): number {
        this.ensureOpen();
        if ((off < 0) || (off > cbuf.length) || (len < 0) || ((off + len) > cbuf.length) || ((off + len) < 0)) {
            throw new Error();
        } else if (len === 0) {
            return 0;
        }
        if (this.next >= this.length) return -1;
        let n: number = this.length - this.next;
        if (n > len) {
            n = len;
        }
        /* getChars */
        ((a, s, e, d, l) => {
            d.splice.apply(d, [l, e - s].concat(<any>a.substring(s, e).split('')));
        })(this.str, this.next, this.next + n, cbuf, off);
        this.next += n;
        return n;
    }

    /**
     * Reads characters into a portion of an array.
     *
     * @param {Array} cbuf Destination buffer
     * @param {number} off  Offset at which to start writing characters
     * @param {number} len  Maximum number of characters to read
     * @return {number} The number of characters read, or -1 if the end of the
     * stream has been reached
     */
    public read(cbuf?: any, off?: any, len?: any): any {
        if (((cbuf != null && cbuf instanceof <any>Array && (cbuf.length == 0 || cbuf[0] == null || (typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.read$char_A$int$int(cbuf, off, len);
        } else if (cbuf === undefined && off === undefined && len === undefined) {
            return <any>this.read$();
        } else throw new Error('invalid overload');
    }

    /**
     * Skips the specified number of characters in the stream. Returns
     * the number of characters that were skipped.
     *
     * <p>The <code>ns</code> parameter may be negative, even though the
     * <code>skip</code> method of the {@link java.io.Reader} superclass throws
     * an exception in this case. Negative values of <code>ns</code> cause the
     * stream to skip backwards. Negative return values indicate a skip
     * backwards. It is not possible to skip backwards past the beginning of
     * the string.
     *
     * <p>If the entire string has been read or skipped, then this method has
     * no effect and always returns 0.
     * @param {number} ns
     * @return {number}
     */
    public skip(ns: number): number {
        this.ensureOpen();
        if (this.next >= this.length) return 0;
        let n: number = this.length - this.next;
        if (n > ns) {
            n = ns;
        }
        if (n < -this.next) {
            n = -this.next;
        }
        this.next += n;
        return n;
    }

    /**
     * Tells whether this stream is ready to be read.
     *
     * @return {boolean} True if the next read() is guaranteed not to block for input
     */
    public ready(): boolean {
        this.ensureOpen();
        return true;
    }

    /**
     * Tells whether this stream supports the mark() operation, which it does.
     * @return {boolean}
     */
    public markSupported(): boolean {
        return true;
    }

    /**
     * Marks the present position in the stream.  Subsequent calls to reset()
     * will reposition the stream to this point.
     *
     * @param {number} readAheadLimit Limit on the number of characters that may be
     * read while still preserving the mark.  Because
     * the stream's input comes from a string, there
     * is no actual limit, so this argument must not
     * be negative, but is otherwise ignored.
     * @throws Error If {@code readAheadLimit < 0}
     */
    public mark(readAheadLimit: number) {
        if (readAheadLimit < 0) {
            throw new Error("Read-ahead limit < 0");
        }
        this.ensureOpen();
        this.__mark = this.next;
    }

    /**
     * Resets the stream to the most recent mark, or to the beginning of the
     * string if it has never been marked.
     */
    public reset() {
        this.ensureOpen();
        this.next = this.__mark;
    }

    /**
     * Closes the stream and releases any system resources associated with
     * it. Once the stream has been closed, further read(),
     * ready(), mark(), or reset() invocations will throw an IOException.
     * Closing a previously closed stream has no effect.
     */
    public close() {
        this.str = null;
    }

    public getString(): string {
        return this.str;
    }

    public readLine(): string {
        let result: string = "";
        let c: string;
        while (((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))((c = String.fromCharCode(this.read()))) != -1)) {
            if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) == '\n'.charCodeAt(0) || (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                break;
            }
            result += c;
        }
        ;
        return result;
    }
}

StringReader["__class"] = "java.io.StringReader";