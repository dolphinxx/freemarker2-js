/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {Closeable} from "./Closeable";
import {IOException} from "./IOException";

/**
 * This constructor does nothing. It is provided for signature
 * compatibility.
 * @class
 * @extends *
 */
export abstract class InputStream implements Closeable {
    /**
     * Size of the temporary buffer used when skipping bytes with {@link skip(long)}.
     */
    static MAX_SKIP_BUFFER_SIZE: number = 4096;

    public constructor() {
    }

    /**
     * Returns an estimated number of bytes that can be read or skipped without blocking for more
     * input.
     *
     * <p>Note that this method provides such a weak guarantee that it is not very useful in
     * practice.
     *
     * <p>Firstly, the guarantee is "without blocking for more input" rather than "without
     * blocking": a read may still block waiting for I/O to complete&nbsp;&mdash; the guarantee is
     * merely that it won't have to wait indefinitely for data to be written. The result of this
     * method should not be used as a license to do I/O on a thread that shouldn't be blocked.
     *
     * <p>Secondly, the result is a
     * conservative estimate and may be significantly smaller than the actual number of bytes
     * available. In particular, an implementation that always returns 0 would be correct.
     * In general, callers should only use this method if they'd be satisfied with
     * treating the result as a boolean yes or no answer to the question "is there definitely
     * data ready?".
     *
     * <p>Thirdly, the fact that a given number of bytes is "available" does not guarantee that a
     * read or skip will actually read or skip that many bytes: they may read or skip fewer.
     *
     * <p>It is particularly important to realize that you <i>must not</i> use this method to
     * size a container and assume that you can read the entirety of the stream without needing
     * to resize the container. Such callers should probably write everything they read to a
     * {@link ByteArrayOutputStream} and convert that to a byte array. Alternatively, if you're
     * reading from a file, {@link File#length} returns the current length of the file (though
     * assuming the file's length can't change may be incorrect, reading a file is inherently
     * racy).
     *
     * <p>The default implementation of this method in {@code InputStream} always returns 0.
     * Subclasses should override this method if they are able to indicate the number of bytes
     * available.
     *
     * @return {number} the estimated number of bytes available
     * @throws IOException if this stream is closed or an error occurs
     */
    public available(): number {
        return 0;
    }

    /**
     * Closes this stream. Concrete implementations of this class should free
     * any resources during close. This implementation does nothing.
     *
     * @throws IOException
     * if an error occurs while closing this stream.
     */
    public close() {
    }

    /**
     * Sets a mark position in this InputStream. The parameter {@code readlimit}
     * indicates how many bytes can be read before the mark is invalidated.
     * Sending {@code reset()} will reposition the stream back to the marked
     * position provided {@code readLimit} has not been surpassed.
     * <p>
     * This default implementation does nothing and concrete subclasses must
     * provide their own implementation.
     *
     * @param {number} readlimit
     * the number of bytes that can be read from this stream before
     * the mark is invalidated.
     * @see #markSupported()
     * @see #reset()
     */
    public mark(readlimit: number) {
    }

    /**
     * Indicates whether this stream supports the {@code mark()} and
     * {@code reset()} methods. The default implementation returns {@code false}.
     *
     * @return {boolean} always {@code false}.
     * @see #mark(int)
     * @see #reset()
     */
    public markSupported(): boolean {
        return false;
    }

    public read$(): number {
        throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)');
    }

    public read$byte_A(buffer: number[]): number {
        // javaemul.internal.InternalPreconditions.checkNotNull(buffer);
        return this.read$byte_A$int$int(buffer, 0, buffer.length);
    }

    public read$byte_A$int$int(buffer: number[], byteOffset: number, byteCount: number): number {
        // java.io.IOUtils.checkOffsetAndCount$byte_A$int$int(buffer, byteOffset, byteCount);
        for (let i: number = 0; i < byteCount; ++i) {
            let c: number;
            try {
                if ((c = this.read()) === -1) {
                    return i === 0 ? -1 : i;
                }
            } catch (e) {
                if (i !== 0) {
                    return i;
                }
                throw e;
            }
            ;
            buffer[byteOffset + i] = (<number>c | 0);
        }
        ;
        return byteCount;
    }

    /**
     * Reads up to {@code byteCount} bytes from this stream and stores them in
     * the byte array {@code buffer} starting at {@code byteOffset}.
     * Returns the number of bytes actually read or -1 if the end of the stream
     * has been reached.
     *
     * @throws IndexOutOfBoundsException
     * if {@code byteOffset < 0 || byteCount < 0 || byteOffset + byteCount > buffer.length}.
     * @throws IOException
     * if the stream is closed or another IOException occurs.
     * @param {Array} buffer
     * @param {number} byteOffset
     * @param {number} byteCount
     * @return {number}
     */
    public read(buffer?: any, byteOffset?: any, byteCount?: any): any {
        if (((buffer != null && buffer instanceof <any>Array && (buffer.length == 0 || buffer[0] == null || (typeof buffer[0] === 'number'))) || buffer === null) && ((typeof byteOffset === 'number') || byteOffset === null) && ((typeof byteCount === 'number') || byteCount === null)) {
            return <any>this.read$byte_A$int$int(buffer, byteOffset, byteCount);
        } else if (((buffer != null && buffer instanceof <any>Array && (buffer.length == 0 || buffer[0] == null || (typeof buffer[0] === 'number'))) || buffer === null) && byteOffset === undefined && byteCount === undefined) {
            return <any>this.read$byte_A(buffer);
        } else if (buffer === undefined && byteOffset === undefined && byteCount === undefined) {
            return <any>this.read$();
        } else throw new Error('invalid overload');
    }

    /**
     * Resets this stream to the last marked location. Throws an
     * {@code IOException} if the number of bytes read since the mark has been
     * set is greater than the limit provided to {@code mark}, or if no mark
     * has been set.
     * <p>
     * This implementation always throws an {@code IOException} and concrete
     * subclasses should provide the proper implementation.
     *
     * @throws IOException
     * if this stream is closed or another IOException occurs.
     */
    public reset() {
        throw new IOException();
    }

    /**
     * Skips at most {@code byteCount} bytes in this stream. The number of actual
     * bytes skipped may be anywhere between 0 and {@code byteCount}. If
     * {@code byteCount} is negative, this method does nothing and returns 0, but
     * some subclasses may throw.
     *
     * <p>Note the "at most" in the description of this method: this method may
     * choose to skip fewer bytes than requested. Callers should <i>always</i>
     * check the return value.
     *
     * <p>This default implementation reads bytes into a temporary buffer. Concrete
     * subclasses should provide their own implementation.
     *
     * @return {number} the number of bytes actually skipped.
     * @throws IOException if this stream is closed or another IOException
     * occurs.
     * @param {number} byteCount
     */
    public skip(byteCount: number): number {
        if (byteCount <= 0) {
            return 0;
        }
        let bSize: number = (<number>Math.min(InputStream.MAX_SKIP_BUFFER_SIZE, byteCount) | 0);
        let b: number[] = (s => {
            let a = [];
            while (s-- > 0) a.push(0);
            return a;
        })(bSize);
        let skipped: number = 0;
        while ((skipped < byteCount)) {
            let toRead: number = (<number>Math.min(byteCount - skipped, b.length) | 0);
            let readCount: number = this.read$byte_A$int$int(b, 0, toRead);
            if (readCount === -1) {
                break;
            }
            skipped += readCount;
            if (readCount < toRead) {
                break;
            }
        }
        ;
        return skipped;
    }
}

InputStream["__class"] = "java.io.InputStream";
InputStream["__interfaces"] = ["java.io.Closeable", "java.lang.AutoCloseable"];