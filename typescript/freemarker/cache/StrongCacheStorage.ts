/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ConcurrentCacheStorage} from './ConcurrentCacheStorage';
import {CacheStorageWithGetSize} from './CacheStorageWithGetSize';

/**
 * Strong cache storage is a cache storage that simply wraps a {link Map}. It holds a strong reference to all objects
 * it was passed, therefore prevents the cache from being purged during garbage collection. This class is always
 * thread-safe since 2.3.24, before that if we are running on Java 5 or later.
 * <p>
 * see freemarker.template.Configuration#setCacheStorage(CacheStorage)
 * @class
 */
export class StrongCacheStorage implements ConcurrentCacheStorage, CacheStorageWithGetSize {
    /*private*/ map : Map<any, any> = <any>(<Map>new Map());

    /**
     * Always returns {@code true}.
     * @return {boolean}
     */
    public isConcurrent() : boolean {
        return true;
    }

    public get(key : any) : any {
        return /* get */this.map.get(key);
    }

    public put(key : any, value : any) {
        /* put */this.map.set(key, value);
    }

    public remove(key : any) {
        /* remove */this.map.delete(key);
    }

    /**
     * Returns a close approximation of the number of cache entries.
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getSize() : number {
        return /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.map);
    }

    public clear() {
        /* clear */(<any>this.map).clear();
    }

    constructor() {
    }
}
StrongCacheStorage["__class"] = "freemarker.cache.StrongCacheStorage";
StrongCacheStorage["__interfaces"] = ["freemarker.cache.ConcurrentCacheStorage","freemarker.cache.CacheStorage","freemarker.cache.CacheStorageWithGetSize"];




