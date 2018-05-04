/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
    import {OutputStream} from './OutputStream';
    import {IOException} from './IOException';
    /**
     * Constructs a new {@code FilterOutputStream} with {@code out} as its
     * target stream.
     * 
     * @param {java.io.OutputStream} out
     * the target stream that this stream writes to.
     * @class
     * @extends java.io.OutputStream
     */
    export class FilterOutputStream extends OutputStream {
        /**
         * The target output stream for this filter stream.
         */
        out : OutputStream;

        public constructor(out : OutputStream) {
            super();
            this.out = null;
            this.out = out;
        }

        /**
         * Closes this stream. This implementation closes the target stream.
         * 
         * @throws IOException
         * if an error occurs attempting to close this stream.
         */
        public close() {
            let thrown : Error = null;
            try {
                this.flush();
            } catch(e) {
                thrown = e;
            };
            try {
                this.out.close();
            } catch(e) {
                if(thrown == null) {
                    thrown = e;
                }
            };
            if(thrown != null) {
                throw new IOException(thrown);
            }
        }

        /**
         * Ensures that all pending data is sent out to the target stream. This
         * implementation flushes the target stream.
         * 
         * @throws IOException
         * if an error occurs attempting to flush this stream.
         */
        public flush() {
            this.out.flush();
        }

        public write$byte_A$int$int(buffer : number[], offset : number, length : number) {
            // java.io.IOUtils.checkOffsetAndCount$byte_A$int$int(buffer, offset, length);
            for(let i : number = 0; i < length; i++) {
                this.write$int(buffer[offset + i]);
            };
        }

        /**
         * Writes {@code count} bytes from the byte array {@code buffer} starting at
         * {@code offset} to the target stream.
         * 
         * @param {Array} buffer
         * the buffer to write.
         * @param {number} offset
         * the index of the first byte in {@code buffer} to write.
         * @param {number} length
         * the number of bytes in {@code buffer} to write.
         * @throws IndexOutOfBoundsException
         * if {@code offset < 0} or {@code count < 0}, or if
         * {@code offset + count} is bigger than the length of
         * {@code buffer}.
         * @throws IOException
         * if an I/O error occurs while writing to this stream.
         */
        public write(buffer? : any, offset? : any, length? : any) : any {
            if(((buffer != null && buffer instanceof <any>Array && (buffer.length==0 || buffer[0] == null ||(typeof buffer[0] === 'number'))) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof length === 'number') || length === null)) {
                return <any>this.write$byte_A$int$int(buffer, offset, length);
            } else if(((buffer != null && buffer instanceof <any>Array && (buffer.length==0 || buffer[0] == null ||(typeof buffer[0] === 'number'))) || buffer === null) && offset === undefined && length === undefined) {
                return <any>this.write$byte_A(buffer);
            } else if(((typeof buffer === 'number') || buffer === null) && offset === undefined && length === undefined) {
                return <any>this.write$int(buffer);
            } else throw new Error('invalid overload');
        }

        public write$int(oneByte : number) {
            this.out.write$int(oneByte);
        }
    }
    FilterOutputStream["__class"] = "java.io.FilterOutputStream";
    FilterOutputStream["__interfaces"] = ["java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];



