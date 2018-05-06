/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {UndeclaredThrowableException} from '../template/utility/UndeclaredThrowableException';
import {ConcurrentCacheStorage} from './ConcurrentCacheStorage';
import {CacheStorageWithGetSize} from './CacheStorageWithGetSize';

/**
 * Soft cache storage is a cache storage that uses {link SoftReference} objects to hold the objects it was passed,
 * therefore allows the garbage collector to purge the cache when it determines that it wants to free up memory. This
 * class is thread-safe to the extent that its underlying map is. The parameterless constructor uses a thread-safe map
 * since 2.3.24 or Java 5.
 * <p>
 * see freemarker.template.Configuration#setCacheStorage(CacheStorage)
 * @param {Map} backingMap
 * @class
 */
export class SoftCacheStorage implements ConcurrentCacheStorage, CacheStorageWithGetSize {
    static atomicRemove : Function; public static atomicRemove_$LI$() : Function { if(SoftCacheStorage.atomicRemove == null) SoftCacheStorage.atomicRemove = SoftCacheStorage.getAtomicRemoveMethod(); return SoftCacheStorage.atomicRemove; };

    /*private*/ queue : ReferenceQueue = <any>(new ReferenceQueue());

    /*private*/ map : Map<any, any>;

    /*private*/ concurrent : boolean;

    /**
     * Returns true if the underlying Map is a {@code ConcurrentMap}.
     * @return {boolean}
     */
    public isConcurrent() : boolean {
        return this.concurrent;
    }

    public constructor(backingMap? : any) {
        if(((backingMap != null && (backingMap instanceof Map)) || backingMap === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.map===undefined) this.map = null;
            if(this.concurrent===undefined) this.concurrent = false;
            this.queue = <any>(new ReferenceQueue());
            if(this.map===undefined) this.map = null;
            if(this.concurrent===undefined) this.concurrent = false;
            (() => {
                this.map = backingMap;
                this.concurrent = (this.map != null && (this.map instanceof Map));
            })();
        } else if(backingMap === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let backingMap : any = <Map>new Map();
                if(this.map===undefined) this.map = null;
                if(this.concurrent===undefined) this.concurrent = false;
                this.queue = <any>(new ReferenceQueue());
                if(this.map===undefined) this.map = null;
                if(this.concurrent===undefined) this.concurrent = false;
                (() => {
                    this.map = backingMap;
                    this.concurrent = (this.map != null && (this.map instanceof Map));
                })();
            }
        } else throw new Error('invalid overload');
    }

    public get(key : any) : any {
        this.processQueue();
        let ref : Reference = <Reference>/* get */this.map.get(key);
        return ref == null?null:ref.get();
    }

    public put(key : any, value : any) {
        this.processQueue();
        /* put */this.map.set(key, (() => { let __o : any = new SoftCacheStorage.SoftValueReference(key, value, this.queue); __o.__delegate = new SoftCacheStorage.SoftValueReference(key, value, this.queue); return __o; })());
    }

    public remove(key : any) {
        this.processQueue();
        /* remove */this.map.delete(key);
    }

    public clear() {
        /* clear */(<any>this.map).clear();
        this.processQueue();
    }

    /**
     * Returns a close approximation of the number of cache entries.
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getSize() : number {
        this.processQueue();
        return /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.map);
    }

    processQueue() {
        for(; ; ) {
            let ref : SoftCacheStorage.SoftValueReference = <SoftCacheStorage.SoftValueReference>this.queue.poll();
            if(ref == null) {
                return;
            }
            let key : any = ref.getKey();
            if(this.concurrent) {
                try {
                    /* invoke */SoftCacheStorage.atomicRemove_$LI$().fn.apply(this.map, [key, ref]);
                } catch(__e) {
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
                        let e : Error = <Error>__e;
                        throw new UndeclaredThrowableException(e);

                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.reflect.InvocationTargetException") >= 0)) {
                        let e : Error = <Error>__e;
                        throw new UndeclaredThrowableException(e);

                    }
                }
            } else if(/* get */this.map.get(key) === ref) {
                /* remove */this.map.delete(key);
            }
        }
    }

    static getAtomicRemoveMethod() : Function {
        try {
            return /* getMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })(/* forName */eval("java.util.concurrent.ConcurrentMap".split('.').slice(-1)[0]),"remove");
        } catch(__e) {
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0)) {
                let e : Error = <Error>__e;
                return null;

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NoSuchMethodException") >= 0)) {
                let e : Error = <Error>__e;
                throw new UndeclaredThrowableException(e);

            }
        }
    }
}
SoftCacheStorage["__class"] = "freemarker.cache.SoftCacheStorage";
SoftCacheStorage["__interfaces"] = ["freemarker.cache.ConcurrentCacheStorage","freemarker.cache.CacheStorage","freemarker.cache.CacheStorageWithGetSize"];



export namespace SoftCacheStorage {

    export class SoftValueReference {
        key : any;

        constructor(key : any, value : any, queue : ReferenceQueue) {
            if(this.key===undefined) this.key = null;
            this.key = key;
        }

        getKey() : any {
            return this.key;
        }
    }
    SoftValueReference["__class"] = "freemarker.cache.SoftCacheStorage.SoftValueReference";

}




SoftCacheStorage.atomicRemove_$LI$();
