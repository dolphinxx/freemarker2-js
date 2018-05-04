import {Writer} from "./Writer";
import {IllegalArgumentException} from "../lang/IllegalArgumentException";
import {_SecurityUtils} from "../../org/apache/freemarker/core/util/_SecurityUtils";
import {IOException} from "./IOException";
import {IndexOutOfBoundsException} from "../lang/IndexOutOfBoundsException";
import {System} from "../lang/System";

export class BufferedWriter extends Writer {

    private out: Writer;

    private cb: string[];
    private nChars: number;
    private nextChar: number;

    private static defaultCharBufferSize: number = 8192;

    /**
     * Line separator string.  This is the value of the line.separator
     * property at the moment that the stream was created.
     */
    private lineSeparator: string;

    /**
     * Creates a new buffered character-output stream that uses an output
     * buffer of the given size.
     *
     * @param  out  A Writer
     * @param  sz   Output-buffer size, a positive integer
     *
     * @exception  IllegalArgumentException  If {@code sz <= 0}
     */
    public constructor(out: Writer, sz?: number) {
        super(out);
        if (sz === undefined) {
            sz = BufferedWriter.defaultCharBufferSize;
        }
        if (sz <= 0)
            throw new IllegalArgumentException("Buffer size <= 0");
        this.out = out;
        this.cb = new Array[sz];
        this.nChars = sz;
        this.nextChar = 0;

        this.lineSeparator = _SecurityUtils.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
    }

    /** Checks to make sure that the stream has not been closed */
    private ensureOpen(): void {
        if (this.out == null)
            throw new IOException("Stream closed");
    }

    /**
     * Flushes the output buffer to the underlying character stream, without
     * flushing the stream itself.  This method is non-private only so that it
     * may be invoked by PrintStream.
     */
    flushBuffer(): void {
        this.ensureOpen();
        if (this.nextChar == 0)
            return;
        this.out.write(this.cb, 0, this.nextChar);
        this.nextChar = 0;
    }

    /**
     * Writes a single character.
     *
     * @exception  IOException  If an I/O error occurs
     */
    public write$int(c: number): void {
        this.ensureOpen();
        if (this.nextChar >= this.nChars)
            this.flushBuffer();
        this.cb[this.nextChar++] = String.fromCharCode(c);
    }

    /**
     * Our own little min method, to avoid loading java.lang.Math if we've run
     * out of file descriptors and we're trying to print a stack trace.
     */
    private min(a: number, b: number): number {
        if (a < b) return a;
        return b;
    }

    /**
     * Writes a portion of an array of characters.
     *
     * <p> Ordinarily this method stores characters from the given array into
     * this stream's buffer, flushing the buffer to the underlying stream as
     * needed.  If the requested length is at least as large as the buffer,
     * however, then this method will flush the buffer and write the characters
     * directly to the underlying stream.  Thus redundant
     * <code>BufferedWriter</code>s will not copy data unnecessarily.
     *
     * @param  cbuf  A character array
     * @param  off   Offset from which to start reading characters
     * @param  len   Number of characters to write
     *
     * @exception  IOException  If an I/O error occurs
     */
    public write$char_A$int$int(cbuf: string[], off: number, len: number) {
        this.ensureOpen();
        if ((off < 0) || (off > cbuf.length) || (len < 0) ||
            ((off + len) > cbuf.length) || ((off + len) < 0)) {
            throw new IndexOutOfBoundsException();
        } else if (len == 0) {
            return;
        }

        if (len >= this.nChars) {
            /* If the request length exceeds the size of the output buffer,
               flush the buffer and then write the data directly.  In this
               way buffered streams will cascade harmlessly. */
            this.flushBuffer();
            this.out.write(cbuf, off, len);
            return;
        }

        let b: number = off, t: number = off + len;
        while (b < t) {
            let d: number = this.min(this.nChars - this.nextChar, t - b);
            System.arraycopy(cbuf, b, this.cb, this.nextChar, d);
            b += d;
            this.nextChar += d;
            if (this.nextChar >= this.nChars)
                this.flushBuffer();
        }
    }

    /**
     * Writes a portion of a String.
     *
     * <p> If the value of the <tt>len</tt> parameter is negative then no
     * characters are written.  This is contrary to the specification of this
     * method in the {@linkplain java.io.Writer#write(java.lang.String,int,int)
     * superclass}, which requires that an {@link IndexOutOfBoundsException} be
     * thrown.
     *
     * @param  s     String to be written
     * @param  off   Offset from which to start reading characters
     * @param  len   Number of characters to be written
     *
     * @exception  IOException  If an I/O error occurs
     */
    public write$java_lang_String$int$int(s: string, off: number, len: number) {
        this.ensureOpen();

        let b: number = off, t: number = off + len;
        while (b < t) {
            let d: number = this.min(this.nChars - this.nextChar, t - b);
            // s.getChars(b, b + d, this.cb, this.nextChar);
            System.arraycopy(s.split(''), b, this.cb, this.nextChar, d);
            b += d;
            this.nextChar += d;
            if (this.nextChar >= this.nChars)
                this.flushBuffer();
        }
    }

    /**
     * Writes a line separator.  The line separator string is defined by the
     * system property <tt>line.separator</tt>, and is not necessarily a single
     * newline ('\n') character.
     *
     * @exception  IOException  If an I/O error occurs
     */
    public newLine() {
        this.write(this.lineSeparator);
    }

    /**
     * Flushes the stream.
     *
     * @exception  IOException  If an I/O error occurs
     */
    public flush() {
        this.flushBuffer();
        this.out.flush();
    }

    public close() {
        if (this.out == null) {
            return;
        }
        try {
            this.flushBuffer();
        } finally {
            this.out.close();
            this.out = null;
            this.cb = null;
        }
    }
}
