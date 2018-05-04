/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */


import {AutoCloseable} from '../lang/AutoCloseable';

/**
 * An {@code AutoCloseable} whose close method may throw an {@link IOException}.
 * @class
 */
export interface Closeable extends AutoCloseable {
    /**
     * Closes the object and release any system resources it holds.
     *
     * <p>Although only the first call has any effect, it is safe to call close
     * multiple times on the same object. This is more lenient than the
     * overridden {@code AutoCloseable.close()}, which may be called at most
     * once.
     */
    close();
}

