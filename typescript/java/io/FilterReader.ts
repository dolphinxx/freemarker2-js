/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {Reader} from './Reader';

/**
 * JSweet implementation.
 * @class
 */
export abstract class FilterReader extends Reader {
    reader: Reader;

    public constructor(reader: Reader) {
        super(reader);
        this.reader = reader;
    }

    public read$(): number {
        return this.reader.read$();
    }

    public read$char_A$int$int(cbuf : string[], off : number, len : number) : number {
        return this.reader.read$char_A$int$int(cbuf, off, len);
    }

    /**
     * Reads characters into a portion of an array.
     *
     * @exception  IOException  If an I/O error occurs
     */
    public read(cbuf: any, off: number, len: number): number {
        return this.reader.read(cbuf, off, len);
    }

    public skip(n: number): number {
        return this.reader.skip(n);
    }

    public ready(): boolean {
        return this.reader.ready();
    }

    public markSupported(): boolean {
        return this.reader.markSupported();
    }

    public mark(readAheadLimit: number) {
        this.reader.mark(readAheadLimit);
    }

    public reset() {
        this.reader.reset();
    }

    public close() {
        this.reader.close();
    }
}

Reader["__class"] = "java.io.FilterReader";
Reader["__interfaces"] = ["java.io.Closeable", "java.lang.AutoCloseable"];