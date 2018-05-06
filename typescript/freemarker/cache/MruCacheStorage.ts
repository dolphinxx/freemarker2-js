/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CacheStorageWithGetSize} from './CacheStorageWithGetSize';

/**
 * Creates a new MRU cache storage with specified maximum cache sizes. Each
 * cache size can vary between 0 and {link Integer#MAX_VALUE}.
 * 
 * @param {number} strongSizeLimit the maximum number of strongly referenced templates; when exceeded, the entry used
 * the least recently will be moved into the soft cache.
 * @param {number} softSizeLimit   the maximum number of softly referenced templates; when exceeded, the entry used
 * the least recently will be discarded.
 * @class
 */
export class MruCacheStorage implements CacheStorageWithGetSize {
    /*private*/ strongHead : MruCacheStorage.MruEntry = new MruCacheStorage.MruEntry();

    /*private*/ softHead : MruCacheStorage.MruEntry = new MruCacheStorage.MruEntry();

    /*private*/ map : Map<any, any> = <any>(new Map<any, any>());

    /*private*/ refQueue : ReferenceQueue = <any>(new ReferenceQueue());

    /*private*/ strongSizeLimit : number;

    /*private*/ softSizeLimit : number;

    /*private*/ strongSize : number = 0;

    /*private*/ softSize : number = 0;

    public constructor(strongSizeLimit : number, softSizeLimit : number) {
        (() => {
            this.softHead.linkAfter(this.strongHead);
        })();
        if(this.strongSizeLimit===undefined) this.strongSizeLimit = 0;
        if(this.softSizeLimit===undefined) this.softSizeLimit = 0;
        if(strongSizeLimit < 0) throw Object.defineProperty(new Error("strongSizeLimit < 0"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        if(softSizeLimit < 0) throw Object.defineProperty(new Error("softSizeLimit < 0"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        this.strongSizeLimit = strongSizeLimit;
        this.softSizeLimit = softSizeLimit;
    }

    public get(key : any) : any {
        this.removeClearedReferences();
        let entry : MruCacheStorage.MruEntry = <MruCacheStorage.MruEntry>/* get */this.map.get(key);
        if(entry == null) {
            return null;
        }
        this.relinkEntryAfterStrongHead(entry, null);
        let value : any = entry.getValue();
        if(value != null && value instanceof <any>MruCacheStorage.MruReference) {
            return (<MruCacheStorage.MruReference>value).get();
        }
        return value;
    }

    public put(key : any, value : any) {
        this.removeClearedReferences();
        let entry : MruCacheStorage.MruEntry = <MruCacheStorage.MruEntry>/* get */this.map.get(key);
        if(entry == null) {
            entry = new MruCacheStorage.MruEntry(key, value);
            /* put */this.map.set(key, entry);
            this.linkAfterStrongHead(entry);
        } else {
            this.relinkEntryAfterStrongHead(entry, value);
        }
    }

    public remove(key : any) {
        this.removeClearedReferences();
        this.removeInternal(key);
    }

    removeInternal(key : any) {
        let entry : MruCacheStorage.MruEntry = <MruCacheStorage.MruEntry>/* remove */this.map.delete(key);
        if(entry != null) {
            this.unlinkEntryAndInspectIfSoft(entry);
        }
    }

    public clear() {
        this.strongHead.makeHead();
        this.softHead.linkAfter(this.strongHead);
        /* clear */(<any>this.map).clear();
        this.strongSize = this.softSize = 0;
        while((this.refQueue.poll() != null)) ;
    }

    relinkEntryAfterStrongHead(entry : MruCacheStorage.MruEntry, newValue : any) {
        if(this.unlinkEntryAndInspectIfSoft(entry) && newValue == null) {
            let mref : MruCacheStorage.MruReference = <MruCacheStorage.MruReference>entry.getValue();
            let strongValue : any = mref.get();
            if(strongValue != null) {
                entry.setValue(strongValue);
                this.linkAfterStrongHead(entry);
            } else {
                /* remove */this.map.delete(mref.getKey());
            }
        } else {
            if(newValue != null) {
                entry.setValue(newValue);
            }
            this.linkAfterStrongHead(entry);
        }
    }

    linkAfterStrongHead(entry : MruCacheStorage.MruEntry) {
        entry.linkAfter(this.strongHead);
        if(this.strongSize === this.strongSizeLimit) {
            let lruStrong : MruCacheStorage.MruEntry = this.softHead.getPrevious();
            if(lruStrong !== this.strongHead) {
                lruStrong.unlink();
                if(this.softSizeLimit > 0) {
                    lruStrong.linkAfter(this.softHead);
                    lruStrong.setValue((() => { let __o : any = new MruCacheStorage.MruReference(lruStrong, this.refQueue); __o.__delegate = new MruCacheStorage.MruReference(lruStrong, this.refQueue); return __o; })());
                    if(this.softSize === this.softSizeLimit) {
                        let lruSoft : MruCacheStorage.MruEntry = this.strongHead.getPrevious();
                        lruSoft.unlink();
                        /* remove */this.map.delete(lruSoft.getKey());
                    } else {
                        ++this.softSize;
                    }
                } else {
                    /* remove */this.map.delete(lruStrong.getKey());
                }
            }
        } else {
            ++this.strongSize;
        }
    }

    unlinkEntryAndInspectIfSoft(entry : MruCacheStorage.MruEntry) : boolean {
        entry.unlink();
        if(entry.getValue() != null && entry.getValue() instanceof <any>MruCacheStorage.MruReference) {
            --this.softSize;
            return true;
        } else {
            --this.strongSize;
            return false;
        }
    }

    removeClearedReferences() {
        for(; ; ) {
            let ref : MruCacheStorage.MruReference = <MruCacheStorage.MruReference>this.refQueue.poll();
            if(ref == null) {
                break;
            }
            this.removeInternal(ref.getKey());
        }
    }

    /**
     * Returns the configured upper limit of the number of strong cache entries.
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getStrongSizeLimit() : number {
        return this.strongSizeLimit;
    }

    /**
     * Returns the configured upper limit of the number of soft cache entries.
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getSoftSizeLimit() : number {
        return this.softSizeLimit;
    }

    /**
     * Returns the <em>current</em> number of strong cache entries.
     * <p>
     * see #getStrongSizeLimit()
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getStrongSize() : number {
        return this.strongSize;
    }

    /**
     * Returns a close approximation of the <em>current</em> number of soft cache entries.
     * <p>
     * see #getSoftSizeLimit()
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getSoftSize() : number {
        this.removeClearedReferences();
        return this.softSize;
    }

    /**
     * Returns a close approximation of the current number of cache entries.
     * <p>
     * see #getStrongSize()
     * see #getSoftSize()
     * 
     * @since 2.3.21
     * @return {number}
     */
    public getSize() : number {
        return this.getSoftSize() + this.getStrongSize();
    }
}
MruCacheStorage["__class"] = "freemarker.cache.MruCacheStorage";
MruCacheStorage["__interfaces"] = ["freemarker.cache.CacheStorage","freemarker.cache.CacheStorageWithGetSize"];



export namespace MruCacheStorage {

    export class MruEntry {
        prev : MruCacheStorage.MruEntry;

        next : MruCacheStorage.MruEntry;

        key : any;

        value : any;

        public constructor(key? : any, value? : any) {
            if(((key != null) || key === null) && ((value != null) || value === null)) {
                let __args = Array.prototype.slice.call(arguments);
                if(this.prev===undefined) this.prev = null;
                if(this.next===undefined) this.next = null;
                if(this.key===undefined) this.key = null;
                if(this.value===undefined) this.value = null;
                if(this.prev===undefined) this.prev = null;
                if(this.next===undefined) this.next = null;
                if(this.key===undefined) this.key = null;
                if(this.value===undefined) this.value = null;
                (() => {
                    this.key = key;
                    this.value = value;
                })();
            } else if(key === undefined && value === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                if(this.prev===undefined) this.prev = null;
                if(this.next===undefined) this.next = null;
                if(this.key===undefined) this.key = null;
                if(this.value===undefined) this.value = null;
                if(this.prev===undefined) this.prev = null;
                if(this.next===undefined) this.next = null;
                if(this.key===undefined) this.key = null;
                if(this.value===undefined) this.value = null;
                (() => {
                    this.makeHead();
                    this.key = this.value = null;
                })();
            } else throw new Error('invalid overload');
        }

        getKey() : any {
            return this.key;
        }

        getValue() : any {
            return this.value;
        }

        setValue(value : any) {
            this.value = value;
        }

        getPrevious() : MruCacheStorage.MruEntry {
            return this.prev;
        }

        linkAfter(entry : MruCacheStorage.MruEntry) {
            this.next = entry.next;
            entry.next = this;
            this.prev = entry;
            this.next.prev = this;
        }

        unlink() {
            this.next.prev = this.prev;
            this.prev.next = this.next;
            this.prev = null;
            this.next = null;
        }

        makeHead() {
            this.prev = this.next = this;
        }
    }
    MruEntry["__class"] = "freemarker.cache.MruCacheStorage.MruEntry";


    export class MruReference {
        key : any;

        constructor(entry : MruCacheStorage.MruEntry, queue : ReferenceQueue) {
            if(this.key===undefined) this.key = null;
            this.key = entry.getKey();
        }

        getKey() : any {
            return this.key;
        }
    }
    MruReference["__class"] = "freemarker.cache.MruCacheStorage.MruReference";

}



