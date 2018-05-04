/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Cache storage abstracts away the storage aspects of a cache - associating
 * an object with a key, retrieval and removal via the key. It is actually a
 * small subset of the {link java.util.Map} interface.
 * The implementations can be coded in a non-threadsafe manner as the natural
 * user of the cache storage, {link TemplateCache} does the necessary
 * synchronization.
 * <p>
 * see freemarker.template.Configuration#setCacheStorage(CacheStorage)
 * @class
 */
export interface CacheStorage {
    get(key : any) : any;

    put(key : any, value : any);

    remove(key : any);

    clear();
}


