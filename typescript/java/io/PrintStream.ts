/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {FilterOutputStream} from './FilterOutputStream';
import {OutputStream} from "./OutputStream";
import {BufferedWriter} from "./BufferedWriter";
import {OutputStreamWriter} from "./OutputStreamWriter";
import {IOException} from "./IOException";

/**
 * @skip
 * @param {java.io.OutputStream} out
 * @class
 * @extends java.io.FilterOutputStream
 */
export class PrintStream extends FilterOutputStream {
    private autoFlush: boolean;
    private trouble: boolean = false;
    // private Formatter formatter;
    /**
     * Track both the text- and character-output streams, so that their buffers
     * can be flushed without flushing the entire stream.
     */
    private textOut: BufferedWriter;
    private charOut: OutputStreamWriter;

    public constructor(out: OutputStream, autoFlush?: boolean) {
        super(out);
        this.autoFlush = autoFlush === undefined ? false : autoFlush;
    }

    /** Check to make sure that the stream has not been closed */
    private ensureOpen(): void {
        if (this.out == null)
            throw new IOException("Stream closed");
    }

    /**
     * Flushes the stream.  This is done by writing any buffered output bytes to
     * the underlying output stream and then flushing that stream.
     *
     * @see        java.io.OutputStream#flush()
     */
    public flush() {
        try {
            this.ensureOpen();
            this.out.flush();
        }
        catch (x) {
            this.trouble = true;
        }
    }

    private closing: boolean = false;

    /* To avoid recursive closing */

    /**
     * Closes the stream.  This is done by flushing the stream and then closing
     * the underlying output stream.
     *
     * @see        java.io.OutputStream#close()
     */
    public close() {
        if (!this.closing) {
            this.closing = true;
            try {
                this.textOut.close();
                this.out.close();
            }
            catch (x) {
                this.trouble = true;
            }
            this.textOut = null;
            this.charOut = null;
            this.out = null;
        }
    }

    /**
     * Flushes the stream and checks its error state. The internal error state
     * is set to <code>true</code> when the underlying output stream throws an
     * <code>IOException</code> other than <code>InterruptedIOException</code>,
     * and when the <code>setError</code> method is invoked.  If an operation
     * on the underlying output stream throws an
     * <code>InterruptedIOException</code>, then the <code>PrintStream</code>
     * converts the exception back into an interrupt by doing:
     * <pre>
     *     Thread.currentThread().interrupt();
     * </pre>
     * or the equivalent.
     *
     * @return <code>true</code> if and only if this stream has encountered an
     *         <code>IOException</code> other than
     *         <code>InterruptedIOException</code>, or the
     *         <code>setError</code> method has been invoked
     */
    public checkError(): boolean {
        if (this.out != null)
            this.flush();
        if (this.out instanceof PrintStream) {
            let ps: PrintStream = <PrintStream> this.out;
            return ps.checkError();
        }
        return this.trouble;
    }

    /**
     * Sets the error state of the stream to <code>true</code>.
     *
     * <p> This method will cause subsequent invocations of {@link
        * #checkError()} to return <tt>true</tt> until {@link
        * #clearError()} is invoked.
     *
     * @since JDK1.1
     */
    protected setError(): void {
        this.trouble = true;
    }

    /**
     * Clears the internal error state of this stream.
     *
     * <p> This method will cause subsequent invocations of {@link
        * #checkError()} to return <tt>false</tt> until another write
     * operation fails and invokes {@link #setError()}.
     *
     * @since 1.6
     */
    protected clearError(): void {
        this.trouble = false;
    }

    /**
     * Writes the specified byte to this stream.  If the byte is a newline and
     * automatic flushing is enabled then the <code>flush</code> method will be
     * invoked.
     *
     * <p> Note that the byte is written as given; to write a character that
     * will be translated according to the platform's default character
     * encoding, use the <code>print(char)</code> or <code>println(char)</code>
     * methods.
     *
     * @param  b  The byte to be written
     * @see #print(char)
     * @see #println(char)
     */
    public write$int(b: number): void {
        try {
            this.ensureOpen();
            this.out.write(b);
            if ((b == '\n'.charCodeAt(0)) && this.autoFlush)
                this.out.flush();
        }
        catch (x) {
            this.trouble = true;
        }
    }

    /**
     * Writes <code>len</code> bytes from the specified byte array starting at
     * offset <code>off</code> to this stream.  If automatic flushing is
     * enabled then the <code>flush</code> method will be invoked.
     *
     * <p> Note that the bytes will be written as given; to write characters
     * that will be translated according to the platform's default character
     * encoding, use the <code>print(char)</code> or <code>println(char)</code>
     * methods.
     *
     * @param  buf   A byte array
     * @param  off   Offset from which to start taking bytes
     * @param  len   Number of bytes to write
     */
    public write$byte_A$int$int(buf: number[], off: number, len: number): void {
        try {
            this.ensureOpen();
            this.out.write(buf, off, len);
            if (this.autoFlush)
                this.out.flush();
        }
        catch (x) {
            this.trouble = true;
        }
    }

    /*
     * The following private methods on the text- and character-output streams
     * always flush the stream buffers, so that writes to the underlying byte
     * stream occur as promptly as with the original PrintStream.
     */

    private write$char_A(buf: string[]): void {
        try {
            this.ensureOpen();
            this.textOut.write(buf);
            this.textOut.flushBuffer();
            this.charOut.flushBuffer();
            if (this.autoFlush) {
                for (let i: number = 0; i < buf.length; i++)
                    if (buf[i] == '\n')
                        this.out.flush();
            }
        }
        catch (x) {
            this.trouble = true;
        }
    }

    private write$java_lang_String(s: string): void {
        try {
            this.ensureOpen();
            this.textOut.write(s);
            this.textOut.flushBuffer();
            this.charOut.flushBuffer();
            if (this.autoFlush && (s.indexOf('\n') >= 0))
                this.out.flush();
        }
        catch (x) {
            this.trouble = true;
        }
    }

    private write$number(s: number): void {
        this.write$java_lang_String(s + '');
    }

    private newLine(): void {
        try {
            this.ensureOpen();
            this.textOut.newLine();
            this.textOut.flushBuffer();
            this.charOut.flushBuffer();
            if (this.autoFlush)
                this.out.flush();
        }
        catch (x) {
            this.trouble = true;
        }
    }


    public print$boolean(x: boolean) {
        this.write$java_lang_String(x ? "true" : "false");
    }

    public print$char(x: string) {
        this.write$java_lang_String(x);
    }

    public print$char_A(x: string[]) {
        this.write$char_A(x);
    }

    public print(x?: any): any {
        if (((x != null && x instanceof <any>Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null)) {
            return <any>this.print$char_A(x);
        } else if (((typeof x === 'string') || x === null)) {
            return <any>this.print$java_lang_String(x);
        } else if (((typeof x === 'boolean') || x === null)) {
            return <any>this.print$boolean(x);
        } else if (((typeof x === 'string') || x === null)) {
            return <any>this.print$char(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.print$int(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.print$long(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.print$float(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.print$double(x);
        } else if (((x != null) || x === null)) {
            return <any>this.print$java_lang_Object(x);
        } else throw new Error('invalid overload');
    }

    public print$double(x: number) {
        this.write$number(x);
    }

    public print$float(x: number) {
        this.write$number(x);
    }

    public print$int(x: number) {
        this.write$number(x);
    }

    public print$long(x: number) {
        this.write$number(x);
    }

    public print$java_lang_Object(x: any) {
        this.write$java_lang_String(String(x));
    }

    public print$java_lang_String(s: string) {
        this.write$java_lang_String(s);
    }

    public println$() {
        this.newLine();
    }

    public println$boolean(x: boolean) {
        this.print$boolean(x);
        this.newLine();
    }

    public println$char(x: string) {
        this.print$char(x);
        this.newLine();
    }

    public println$char_A(x: string[]) {
        this.print$char_A(x);
        this.newLine();
    }

    public println(x?: any): any {
        if (((x != null && x instanceof <any>Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null)) {
            return <any>this.println$char_A(x);
        } else if (((typeof x === 'string') || x === null)) {
            return <any>this.println$java_lang_String(x);
        } else if (((typeof x === 'boolean') || x === null)) {
            return <any>this.println$boolean(x);
        } else if (((typeof x === 'string') || x === null)) {
            return <any>this.println$char(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.println$int(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.println$long(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.println$float(x);
        } else if (((typeof x === 'number') || x === null)) {
            return <any>this.println$double(x);
        } else if (((x != null) || x === null)) {
            return <any>this.println$java_lang_Object(x);
        } else if (x === undefined) {
            return <any>this.println$();
        } else throw new Error('invalid overload');
    }

    public println$double(x: number) {
        this.print$double(x);
        this.newLine();
    }

    public println$float(x: number) {
        this.print$float(x);
        this.newLine();
    }

    public println$int(x: number) {
        this.print$int(x);
        this.newLine();
    }

    public println$long(x: number) {
        this.print$long(x);
        this.newLine();
    }

    public println$java_lang_Object(x: any) {
        this.print$java_lang_Object(x);
        this.newLine();
    }

    public println$java_lang_String(s: string) {
        this.print$java_lang_String(s);
        this.newLine();
    }
}

PrintStream["__class"] = "java.io.PrintStream";
PrintStream["__superclass"] = FilterOutputStream["__class"];
PrintStream["__interfaces"] = ["java.io.Closeable", "java.lang.AutoCloseable", "java.io.Flushable"];