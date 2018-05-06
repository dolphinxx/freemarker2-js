/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CacheStorage} from './CacheStorage';

/**
 * An optional interface for cache storage that knows whether it can be
 * concurrently accessible without synchronization.
 * @class
 */
export interface ConcurrentCacheStorage extends CacheStorage {
    /**
     * Returns true if this instance of cache storage is concurrently
     * accessible from multiple threads without synchronization.
     * 
     * @return {boolean} true if this instance of cache storage is concurrently
     * accessible from multiple threads without synchronization.
     */
    isConcurrent() : boolean;
}


