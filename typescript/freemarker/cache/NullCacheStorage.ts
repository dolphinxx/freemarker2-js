/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ConcurrentCacheStorage} from './ConcurrentCacheStorage';
import {CacheStorageWithGetSize} from './CacheStorageWithGetSize';

/**
 * A cache storage that doesn't store anything. Use this if you
 * don't want caching.
 * <p>
 * see freemarker.template.Configuration#setCacheStorage(CacheStorage)
 * 
 * @since 2.3.17
 * @class
 */
export class NullCacheStorage implements ConcurrentCacheStorage, CacheStorageWithGetSize {
    /**
     * @since 2.3.22
     */
    public static INSTANCE : NullCacheStorage; public static INSTANCE_$LI$() : NullCacheStorage { if(NullCacheStorage.INSTANCE == null) NullCacheStorage.INSTANCE = new NullCacheStorage(); return NullCacheStorage.INSTANCE; };

    public isConcurrent() : boolean {
        return true;
    }

    public get(key : any) : any {
        return null;
    }

    public put(key : any, value : any) {
    }

    public remove(key : any) {
    }

    public clear() {
    }

    /**
     * Always returns 0.
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getSize() : number {
        return 0;
    }

    constructor() {
    }
}
NullCacheStorage["__class"] = "freemarker.cache.NullCacheStorage";
NullCacheStorage["__interfaces"] = ["freemarker.cache.ConcurrentCacheStorage","freemarker.cache.CacheStorage","freemarker.cache.CacheStorageWithGetSize"];





NullCacheStorage.INSTANCE_$LI$();
