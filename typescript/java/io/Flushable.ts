/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Defines an interface for classes that can (or need to) be flushed, typically
 * before some output processing is considered to be finished and the object
 * gets closed.
 * @class
 */
export interface Flushable {
    /**
     * Flushes the object by writing out any buffered data to the underlying
     * output.
     *
     * @throws IOException
     * if there are any issues writing the data.
     */
    flush();
}

