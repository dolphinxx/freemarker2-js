/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
    import {Closeable} from './Closeable';
    import {Flushable} from './Flushable';
    /**
     * Default constructor.
     * @class
     */
    export abstract class OutputStream implements Closeable, Flushable {
        public constructor() {
        }

        /**
         * Closes this stream. Implementations of this method should free any
         * resources used by the stream. This implementation does nothing.
         * 
         * @throws IOException
         * if an error occurs while closing this stream.
         */
        public close() {
        }

        /**
         * Flushes this stream. Implementations of this method should ensure that
         * any buffered data is written out. This implementation does nothing.
         * 
         * @throws IOException
         * if an error occurs while flushing this stream.
         */
        public flush() {
        }

        public write$byte_A(buffer : number[]) {
            this.write$byte_A$int$int(buffer, 0, buffer.length);
        }

        public write$byte_A$int$int(buffer : number[], offset : number, count : number) {
            for(let i : number = offset; i < offset + count; i++) {
                this.write$int(buffer[i]);
            };
        }

        /**
         * Writes {@code count} bytes from the byte array {@code buffer} starting at
         * position {@code offset} to this stream.
         * 
         * @param {Array} buffer
         * the buffer to be written.
         * @param {number} offset
         * the start position in {@code buffer} from where to get bytes.
         * @param {number} count
         * the number of bytes from {@code buffer} to write to this
         * stream.
         * @throws IOException
         * if an error occurs while writing to this stream.
         * @throws IndexOutOfBoundsException
         * if {@code offset < 0} or {@code count < 0}, or if
         * {@code offset + count} is bigger than the length of
         * {@code buffer}.
         */
        public write(buffer? : any, offset? : any, count? : any) : any {
            if(((buffer != null && buffer instanceof <any>Array && (buffer.length==0 || buffer[0] == null ||(typeof buffer[0] === 'number'))) || buffer === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
                return <any>this.write$byte_A$int$int(buffer, offset, count);
            } else if(((buffer != null && buffer instanceof <any>Array && (buffer.length==0 || buffer[0] == null ||(typeof buffer[0] === 'number'))) || buffer === null) && offset === undefined && count === undefined) {
                return <any>this.write$byte_A(buffer);
            } else if(((typeof buffer === 'number') || buffer === null) && offset === undefined && count === undefined) {
                return <any>this.write$int(buffer);
            } else throw new Error('invalid overload');
        }

        public write$int(oneByte : number) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }
    }
    OutputStream["__class"] = "java.io.OutputStream";
    OutputStream["__interfaces"] = ["java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];


