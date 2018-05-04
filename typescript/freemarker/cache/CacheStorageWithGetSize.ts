/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { CacheStorage } from './CacheStorage';

/**
 * A cache storage that has a {@code getSize()} method for returning the current number of cache entries.
 * 
 * @since 2.3.21
 * @class
 */
export interface CacheStorageWithGetSize extends CacheStorage {
    /**
     * Returns the current number of cache entries. This is intended to be used for monitoring. Note that depending on
     * the implementation, the cost of this operation is not necessary trivial, although calling it a few times per
     * minute should not be a problem.
     * @return {number}
     */
    getSize() : number;
}


