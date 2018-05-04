import {Writer} from './Writer';
import {PrintStream} from "./PrintStream";
import {_SecurityUtils} from "../../org/apache/freemarker/core/util/_SecurityUtils";
import {OutputStream} from "./OutputStream";
import {OutputStreamWriter} from "./OutputStreamWriter";
import {BufferedWriter} from "./BufferedWriter";
import construct = Reflect.construct;
import {IOException} from "./IOException";
import {UnsupportedOperationException} from "../lang/UnsupportedOperationException";

export class PrintWriter extends Writer {

    /**
     * The underlying character-output stream of this
     * <code>PrintWriter</code>.
     *
     * @since 1.2
     */
    protected out: Writer;

    private autoFlush: boolean;
    private trouble: boolean = false;
    // private formatter:Formatter;TODO
    private psOut: PrintStream = null;

    /**
     * Line separator string.  This is the value of the line.separator
     * property at the moment that the stream was created.
     */
    private lineSeparator: string;

    /**
     * Creates a new PrintWriter.
     *
     * @param  out        A character-output stream
     * @param  autoFlush  A boolean; if true, the <tt>println</tt>,
     *                    <tt>printf</tt>, or <tt>format</tt> methods will
     *                    flush the output buffer
     */
    public constructor(out: Writer | OutputStream, autoFlush?: boolean) {
        super((out instanceof OutputStream) ? new BufferedWriter(new OutputStreamWriter(out)) : <Writer>out);
        this.out = super.lock;
        if (out instanceof PrintStream) {
            this.psOut = <PrintStream> out;
        }
        this.autoFlush = autoFlush;
        this.lineSeparator = _SecurityUtils.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
    }

// /**
//  * Creates a new PrintWriter, without automatic line flushing, with the
//  * specified file name.  This convenience constructor creates the necessary
//  * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
//  * which will encode characters using the {@linkplain
//  * java.nio.charset.Charset#defaultCharset() default charset} for this
//  * instance of the Java virtual machine.
//  *
//  * @param  fileName
//  *         The name of the file to use as the destination of this writer.
//  *         If the file exists then it will be truncated to zero size;
//  *         otherwise, a new file will be created.  The output will be
//  *         written to the file and is buffered.
//  *
//  * @throws  FileNotFoundException
//  *          If the given string does not denote an existing, writable
//  *          regular file and a new regular file of that name cannot be
//  *          created, or if some other error occurs while opening or
//  *          creating the file
//  *
//  * @throws  SecurityException
//  *          If a security manager is present and {@link
//     *          SecurityManager#checkWrite checkWrite(fileName)} denies write
//  *          access to the file
//  *
//  * @since  1.5
//  */
// public constructor(String fileName) throws FileNotFoundException {
//     this(new BufferedWriter(new OutputStreamWriter(new FileOutputStream(fileName))),
//         false);
// }
//
// /* Private constructor */
// private PrintWriter(Charset charset, File file)
// throws FileNotFoundException
// {
//     this(new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), charset)),
//         false);
// }
//
// /**
//  * Creates a new PrintWriter, without automatic line flushing, with the
//  * specified file name and charset.  This convenience constructor creates
//  * the necessary intermediate {@link java.io.OutputStreamWriter
//      * OutputStreamWriter}, which will encode characters using the provided
//  * charset.
//  *
//  * @param  fileName
//  *         The name of the file to use as the destination of this writer.
//  *         If the file exists then it will be truncated to zero size;
//  *         otherwise, a new file will be created.  The output will be
//  *         written to the file and is buffered.
//  *
//  * @param  csn
//  *         The name of a supported {@linkplain java.nio.charset.Charset
//      *         charset}
//  *
//  * @throws  FileNotFoundException
//  *          If the given string does not denote an existing, writable
//  *          regular file and a new regular file of that name cannot be
//  *          created, or if some other error occurs while opening or
//  *          creating the file
//  *
//  * @throws  SecurityException
//  *          If a security manager is present and {@link
//     *          SecurityManager#checkWrite checkWrite(fileName)} denies write
//  *          access to the file
//  *
//  * @throws  UnsupportedEncodingException
//  *          If the named charset is not supported
//  *
//  * @since  1.5
//  */
// public PrintWriter(String fileName, String csn)
// throws FileNotFoundException, UnsupportedEncodingException
// {
//     this(toCharset(csn), new File(fileName));
// }
//
// /**
//  * Creates a new PrintWriter, without automatic line flushing, with the
//  * specified file.  This convenience constructor creates the necessary
//  * intermediate {@link java.io.OutputStreamWriter OutputStreamWriter},
//  * which will encode characters using the {@linkplain
//  * java.nio.charset.Charset#defaultCharset() default charset} for this
//  * instance of the Java virtual machine.
//  *
//  * @param  file
//  *         The file to use as the destination of this writer.  If the file
//  *         exists then it will be truncated to zero size; otherwise, a new
//  *         file will be created.  The output will be written to the file
//  *         and is buffered.
//  *
//  * @throws  FileNotFoundException
//  *          If the given file object does not denote an existing, writable
//  *          regular file and a new regular file of that name cannot be
//  *          created, or if some other error occurs while opening or
//  *          creating the file
//  *
//  * @throws  SecurityException
//  *          If a security manager is present and {@link
//     *          SecurityManager#checkWrite checkWrite(file.getPath())}
//  *          denies write access to the file
//  *
//  * @since  1.5
//  */
// public PrintWriter(File file) throws FileNotFoundException {
//     this(new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file))),
//         false);
// }
//
// /**
//  * Creates a new PrintWriter, without automatic line flushing, with the
//  * specified file and charset.  This convenience constructor creates the
//  * necessary intermediate {@link java.io.OutputStreamWriter
//      * OutputStreamWriter}, which will encode characters using the provided
//  * charset.
//  *
//  * @param  file
//  *         The file to use as the destination of this writer.  If the file
//  *         exists then it will be truncated to zero size; otherwise, a new
//  *         file will be created.  The output will be written to the file
//  *         and is buffered.
//  *
//  * @param  csn
//  *         The name of a supported {@linkplain java.nio.charset.Charset
//      *         charset}
//  *
//  * @throws  FileNotFoundException
//  *          If the given file object does not denote an existing, writable
//  *          regular file and a new regular file of that name cannot be
//  *          created, or if some other error occurs while opening or
//  *          creating the file
//  *
//  * @throws  SecurityException
//  *          If a security manager is present and {@link
//     *          SecurityManager#checkWrite checkWrite(file.getPath())}
//  *          denies write access to the file
//  *
//  * @throws  UnsupportedEncodingException
//  *          If the named charset is not supported
//  *
//  * @since  1.5
//  */
// public PrintWriter(File file, String csn)
// throws FileNotFoundException, UnsupportedEncodingException
// {
//     this(toCharset(csn), file);
// }

    /** Checks to make sure that the stream has not been closed */
    private ensureOpen() {
        if (this.out == null)
            throw new IOException("Stream closed");
    }

    /**
     * Flushes the stream.
     * @see #checkError()
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

    /**
     * Closes the stream and releases any system resources associated
     * with it. Closing a previously closed stream has no effect.
     *
     * @see #checkError()
     */
    public close() {
        try {

            if (this.out == null)
                return;
            this.out.close();
            this.out = null;
        }
        catch (x) {
            this.trouble = true;
        }
    }

    /**
     * Flushes the stream if it's not closed and checks its error state.
     *
     * @return <code>true</code> if the print stream has encountered an error,
     *          either on the underlying output stream or during a format
     *          conversion.
     */
    public checkError(): boolean {
        if (this.out != null) {
            this.flush();
        }
        if (this.out instanceof PrintWriter) {
            let pw: PrintWriter = <PrintWriter> this.out;
            return pw.checkError();
        } else if (this.psOut != null) {
            return this.psOut.checkError();
        }
        return this.trouble;
    }

    /**
     * Indicates that an error has occurred.
     *
     * <p> This method will cause subsequent invocations of {@link
        * #checkError()} to return <tt>true</tt> until {@link
        * #clearError()} is invoked.
     */
    protected setError() {
        this.trouble = true;
    }

    /**
     * Clears the error state of this stream.
     *
     * <p> This method will cause subsequent invocations of {@link
        * #checkError()} to return <tt>false</tt> until another write
     * operation fails and invokes {@link #setError()}.
     *
     * @since 1.6
     */
    protected clearError() {
        this.trouble = false;
    }

    /*
     * Exception-catching, synchronized output operations,
     * which also implement the write() methods of Writer
     */

    /**
     * Writes a single character.
     * @param c int specifying a character to be written.
     */
    public write$int(c: number) {
        try {
            this.ensureOpen();
            this.out.write(c);
        } catch (x) {
            this.trouble = true;
        }
    }

    /**
     * Writes A Portion of an array of characters.
     * @param buf Array of characters
     * @param off Offset from which to start writing characters
     * @param len Number of characters to write
     */
    public write$char_A$int$int(buf: string[], off: number, len: number) {
        try {
            this.ensureOpen();
            this.out.write(buf, off, len);
        }
        catch (x) {
            this.trouble = true;
        }
    }

    /**
     * Writes an array of characters.  This method cannot be inherited from the
     * Writer class because it must suppress I/O exceptions.
     * @param buf Array of characters to be written
     */
    public write$char_A(buf: string[]) {
        this.write$char_A$int$int(buf, 0, buf.length);
    }

    /**
     * Writes a portion of a string.
     * @param s A String
     * @param off Offset from which to start writing characters
     * @param len Number of characters to write
     */
    public write$java_lang_String$int$int(s: string, off: number, len: number) {
        try {
            this.ensureOpen();
            this.out.write(s, off, len);
        } catch (x) {
            this.trouble = true;
        }
    }

    /**
     * Writes a string.  This method cannot be inherited from the Writer class
     * because it must suppress I/O exceptions.
     * @param s String to be written
     */
    public write$java_lang_String(s: string) {
        this.write$java_lang_String$int$int(s, 0, s.length);
    }

    private newLine() {
        try {
            this.ensureOpen();
            this.out.write(this.lineSeparator);
            if (this.autoFlush)
                this.out.flush();
        } catch (x) {
            this.trouble = true;
        }
    }

    /* Methods that do not terminate lines */

    /**
     * Prints a boolean value.  The string produced by <code>{@link
        * java.lang.String#valueOf(boolean)}</code> is translated into bytes
     * according to the platform's default character encoding, and these bytes
     * are written in exactly the manner of the <code>{@link
        * #write(int)}</code> method.
     *
     * @param      b   The <code>boolean</code> to be printed
     */
    public print$boolean(b: boolean) {
        this.write$java_lang_String(b ? "true" : "false");
    }

    /**
     * Prints a character.  The character is translated into one or more bytes
     * according to the platform's default character encoding, and these bytes
     * are written in exactly the manner of the <code>{@link
        * #write(int)}</code> method.
     *
     * @param      c   The <code>char</code> to be printed
     */
    public print$char(c: string) {
        this.write$java_lang_String(c);
    }

    public print$number(i: number) {
        this.write$java_lang_String(i + '');
    }

    /**
     * Prints an integer.  The string produced by <code>{@link
        * java.lang.String#valueOf(int)}</code> is translated into bytes according
     * to the platform's default character encoding, and these bytes are
     * written in exactly the manner of the <code>{@link #write(int)}</code>
     * method.
     *
     * @param      i   The <code>int</code> to be printed
     * @see        java.lang.Integer#toString(int)
     */
    public print$int(i: number) {
        this.print$number(i);
    }

    /**
     * Prints a long integer.  The string produced by <code>{@link
        * java.lang.String#valueOf(long)}</code> is translated into bytes
     * according to the platform's default character encoding, and these bytes
     * are written in exactly the manner of the <code>{@link #write(int)}</code>
     * method.
     *
     * @param      l   The <code>long</code> to be printed
     * @see        java.lang.Long#toString(long)
     */
    public print$long(l: number) {
        this.print$number(l);
    }

    /**
     * Prints a floating-point number.  The string produced by <code>{@link
        * java.lang.String#valueOf(float)}</code> is translated into bytes
     * according to the platform's default character encoding, and these bytes
     * are written in exactly the manner of the <code>{@link #write(int)}</code>
     * method.
     *
     * @param      f   The <code>float</code> to be printed
     * @see        java.lang.Float#toString(float)
     */
    public print$float(f: number) {
        this.print$number(f);
    }

    /**
     * Prints a double-precision floating-point number.  The string produced by
     * <code>{@link java.lang.String#valueOf(double)}</code> is translated into
     * bytes according to the platform's default character encoding, and these
     * bytes are written in exactly the manner of the <code>{@link
        * #write(int)}</code> method.
     *
     * @param      d   The <code>double</code> to be printed
     * @see        java.lang.Double#toString(double)
     */
    public print$double(d: number) {
        this.print$number(d);
    }

    /**
     * Prints an array of characters.  The characters are converted into bytes
     * according to the platform's default character encoding, and these bytes
     * are written in exactly the manner of the <code>{@link #write(int)}</code>
     * method.
     *
     * @param      s   The array of chars to be printed
     *
     * @throws  NullPointerException  If <code>s</code> is <code>null</code>
     */
    public print$char_A(s: string[]) {
        this.write$char_A(s);
    }

    /**
     * Prints a string.  If the argument is <code>null</code> then the string
     * <code>"null"</code> is printed.  Otherwise, the string's characters are
     * converted into bytes according to the platform's default character
     * encoding, and these bytes are written in exactly the manner of the
     * <code>{@link #write(int)}</code> method.
     *
     * @param      s   The <code>String</code> to be printed
     */
    public print$java_lang_String(s: string) {
        if (s == null) {
            s = "null";
        }
        this.write$java_lang_String(s);
    }

    /**
     * Prints an object.  The string produced by the <code>{@link
        * java.lang.String#valueOf(Object)}</code> method is translated into bytes
     * according to the platform's default character encoding, and these bytes
     * are written in exactly the manner of the <code>{@link #write(int)}</code>
     * method.
     *
     * @param      obj   The <code>Object</code> to be printed
     * @see        java.lang.Object#toString()
     */
    public print$java_lang_Object(obj: any) {
        this.write$java_lang_String(String(obj));
    }

    public print(obj: any) {
        if (typeof obj === 'number') {
            this.print$number(<number>obj);
            return;
        }
        if (typeof obj === 'string') {
            this.print$java_lang_String(<string>obj);
            return;
        }
        if (Array.isArray(obj)) {
            this.print$char_A(<Array<string>>obj);
            return;
        }
        this.print$java_lang_Object(obj);
    }

    /* Methods that do terminate lines */

    /**
     * Prints a boolean value and then terminates the line.  This method behaves
     * as though it invokes <code>{@link #print(boolean)}</code> and then
     * <code>{@link #println()}</code>.
     *
     * @param x the <code>boolean</code> value to be printed
     */
    public println(x?: any) {
        if (x !== undefined) {
            this.print(x);
        }
        this.newLine();
    }

    /**
     * A convenience method to write a formatted string to this writer using
     * the specified format string and arguments.  If automatic flushing is
     * enabled, calls to this method will flush the output buffer.
     *
     * <p> An invocation of this method of the form <tt>out.printf(format,
     * args)</tt> behaves in exactly the same way as the invocation
     *
     * <pre>
     *     out.format(format, args) </pre>
     *
     * @param  format
     *         A format string as described in <a
     *         href="../util/Formatter.html#syntax">Format string syntax</a>.
     *
     * @param  args
     *         Arguments referenced by the format specifiers in the format
     *         string.  If there are more arguments than format specifiers, the
     *         extra arguments are ignored.  The number of arguments is
     *         variable and may be zero.  The maximum number of arguments is
     *         limited by the maximum dimension of a Java array as defined by
     *         <cite>The Java&trade; Virtual Machine Specification</cite>.
     *         The behaviour on a
     *         <tt>null</tt> argument depends on the <a
     *         href="../util/Formatter.html#syntax">conversion</a>.
     *
     * @throws  java.util.IllegalFormatException
     *          If a format string contains an illegal syntax, a format
     *          specifier that is incompatible with the given arguments,
     *          insufficient arguments given the format string, or other
     *          illegal conditions.  For specification of all possible
     *          formatting errors, see the <a
     *          href="../util/Formatter.html#detail">Details</a> section of the
     *          formatter class specification.
     *
     * @throws  NullPointerException
     *          If the <tt>format</tt> is <tt>null</tt>
     *
     * @return  This writer
     *
     * @since  1.5
     */
    public printf(format: string, ...args: any[]): PrintWriter {
        throw new UnsupportedOperationException();
    }

    /**
     * Writes a formatted string to this writer using the specified format
     * string and arguments.  If automatic flushing is enabled, calls to this
     * method will flush the output buffer.
     *
     * <p> The locale always used is the one returned by {@link
        * java.util.Locale#getDefault() Locale.getDefault()}, regardless of any
     * previous invocations of other formatting methods on this object.
     *
     * @param  format
     *         A format string as described in <a
     *         href="../util/Formatter.html#syntax">Format string syntax</a>.
     *
     * @param  args
     *         Arguments referenced by the format specifiers in the format
     *         string.  If there are more arguments than format specifiers, the
     *         extra arguments are ignored.  The number of arguments is
     *         variable and may be zero.  The maximum number of arguments is
     *         limited by the maximum dimension of a Java array as defined by
     *         <cite>The Java&trade; Virtual Machine Specification</cite>.
     *         The behaviour on a
     *         <tt>null</tt> argument depends on the <a
     *         href="../util/Formatter.html#syntax">conversion</a>.
     *
     * @throws  java.util.IllegalFormatException
     *          If a format string contains an illegal syntax, a format
     *          specifier that is incompatible with the given arguments,
     *          insufficient arguments given the format string, or other
     *          illegal conditions.  For specification of all possible
     *          formatting errors, see the <a
     *          href="../util/Formatter.html#detail">Details</a> section of the
     *          Formatter class specification.
     *
     * @throws  NullPointerException
     *          If the <tt>format</tt> is <tt>null</tt>
     *
     * @return  This writer
     *
     * @since  1.5
     */
    public format(args: any[]): PrintWriter {
        throw new UnsupportedOperationException();
    }

    /**
     * Appends the specified character sequence to this writer.
     *
     * <p> An invocation of this method of the form <tt>out.append(csq)</tt>
     * behaves in exactly the same way as the invocation
     *
     * <pre>
     *     out.write(csq.toString()) </pre>
     *
     * <p> Depending on the specification of <tt>toString</tt> for the
     * character sequence <tt>csq</tt>, the entire sequence may not be
     * appended. For instance, invoking the <tt>toString</tt> method of a
     * character buffer will return a subsequence whose content depends upon
     * the buffer's position and limit.
     *
     * @param  csq
     *         The character sequence to append.  If <tt>csq</tt> is
     *         <tt>null</tt>, then the four characters <tt>"null"</tt> are
     *         appended to this writer.
     *
     * @return  This writer
     *
     * @since  1.5
     */
    public append$java_lang_CharSequence(csq: string): PrintWriter {
        if (csq == null)
            this.write("null");
        else
            this.write(csq);
        return this;
    }

    /**
     * Appends a subsequence of the specified character sequence to this writer.
     *
     * <p> An invocation of this method of the form <tt>out.append(csq, start,
     * end)</tt> when <tt>csq</tt> is not <tt>null</tt>, behaves in
     * exactly the same way as the invocation
     *
     * <pre>
     *     out.write(csq.subSequence(start, end).toString()) </pre>
     *
     * @param  csq
     *         The character sequence from which a subsequence will be
     *         appended.  If <tt>csq</tt> is <tt>null</tt>, then characters
     *         will be appended as if <tt>csq</tt> contained the four
     *         characters <tt>"null"</tt>.
     *
     * @param  start
     *         The index of the first character in the subsequence
     *
     * @param  end
     *         The index of the character following the last character in the
     *         subsequence
     *
     * @return  This writer
     *
     * @throws  IndexOutOfBoundsException
     *          If <tt>start</tt> or <tt>end</tt> are negative, <tt>start</tt>
     *          is greater than <tt>end</tt>, or <tt>end</tt> is greater than
     *          <tt>csq.length()</tt>
     *
     * @since  1.5
     */
    public append$java_lang_CharSequence$int$int(csq: string, start: number, end: number): PrintWriter {
        let cs: string = (csq == null ? "null" : csq);
        this.write(cs.substring(start, end));
        return this;
    }

    /**
     * Appends the specified character to this writer.
     *
     * <p> An invocation of this method of the form <tt>out.append(c)</tt>
     * behaves in exactly the same way as the invocation
     *
     * <pre>
     *     out.write(c) </pre>
     *
     * @param  c
     *         The 16-bit character to append
     *
     * @return  This writer
     *
     * @since 1.5
     */
    public append$char(c: string): PrintWriter {
        this.write$int(c.charCodeAt(0));
        return this;
    }
}