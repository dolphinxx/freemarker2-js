/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {System} from '../../../java/lang/System';
import {Entry} from "../../../java/util/Entry";
import {Set} from "../../../java/util/Set";
import {Map} from "../../../java/util/Map";

/**
 * Constructs a new, empty map with the specified initial
 * capacity and the specified load factor.
 * 
 * @param {number} initialCapacity the initial capacity of the IdentityHashMap.
 * @param {number} loadFactor      the load factor of the IdentityHashMap
 * @throws IllegalArgumentException if the initial capacity is less
 * than zero, or if the load factor is nonpositive.
 * @class
 * @extends AbstractMap
 */
export class IdentityHashMap {
    public static serialVersionUID : number = 362498820763181265;

    /**
     * The hash table data.
     */
    /*private*/ table : Entry<any, any>[];

    /**
     * The total number of mappings in the hash table.
     */
    /*private*/ count : number;

    /**
     * The table is rehashed when its size exceeds this threshold.  (The
     * value of this field is (int)(capacity * loadFactor).)
     */
    /*private*/ threshold : number;

    /**
     * The load factor for the hashtable.
     */
    /*private*/ __loadFactor : number;

    /**
     * The number of times this IdentityHashMap has been structurally modified
     * Structural modifications are those that change the number of mappings in
     * the IdentityHashMap or otherwise modify its internal structure (e.g.,
     * rehash).  This field is used to make iterators on Collection-views of
     * the IdentityHashMap fail-fast.  (See ConcurrentModificationException).
     */
    /*private*/ modCount : number = 0;

    public constructor(initialCapacity? : any, loadFactor? : any) {
        if(((typeof initialCapacity === 'number') || initialCapacity === null) && ((typeof loadFactor === 'number') || loadFactor === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.table===undefined) this.table = null;
            if(this.count===undefined) this.count = 0;
            if(this.threshold===undefined) this.threshold = 0;
            if(this.__loadFactor===undefined) this.__loadFactor = 0;
            this.modCount = 0;
            this.__keySet = null;
            this.__entrySet = null;
            this.__values = null;
            if(this.table===undefined) this.table = null;
            if(this.count===undefined) this.count = 0;
            if(this.threshold===undefined) this.threshold = 0;
            if(this.__loadFactor===undefined) this.__loadFactor = 0;
            (() => {
                if(initialCapacity < 0) throw Object.defineProperty(new Error("Illegal Initial Capacity: " + initialCapacity), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                if(loadFactor <= 0 || /* isNaN */isNaN(loadFactor)) throw Object.defineProperty(new Error("Illegal Load factor: " + loadFactor), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                if(initialCapacity === 0) initialCapacity = 1;
                this.__loadFactor = loadFactor;
                this.table = (s => { let a=[]; while(s-->0) a.push(null); return a; })(initialCapacity);
                this.threshold = (<number>((<any>Math).fround(initialCapacity * loadFactor))|0);
            })();
        } else if(((initialCapacity != null && (initialCapacity instanceof Map)) || initialCapacity === null) && loadFactor === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let t : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let initialCapacity : any = Math.max(2 * /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>t), 11);
                let loadFactor : any = 0.75;
                if(this.table===undefined) this.table = null;
                if(this.count===undefined) this.count = 0;
                if(this.threshold===undefined) this.threshold = 0;
                if(this.__loadFactor===undefined) this.__loadFactor = 0;
                this.modCount = 0;
                this.__keySet = null;
                this.__entrySet = null;
                this.__values = null;
                if(this.table===undefined) this.table = null;
                if(this.count===undefined) this.count = 0;
                if(this.threshold===undefined) this.threshold = 0;
                if(this.__loadFactor===undefined) this.__loadFactor = 0;
                (() => {
                    if(initialCapacity < 0) throw Object.defineProperty(new Error("Illegal Initial Capacity: " + initialCapacity), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    if(loadFactor <= 0 || /* isNaN */isNaN(loadFactor)) throw Object.defineProperty(new Error("Illegal Load factor: " + loadFactor), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    if(initialCapacity === 0) initialCapacity = 1;
                    this.__loadFactor = loadFactor;
                    this.table = (s => { let a=[]; while(s-->0) a.push(null); return a; })(initialCapacity);
                    this.threshold = (<number>((<any>Math).fround(initialCapacity * loadFactor))|0);
                })();
            }
            (() => {
                this.putAll(t);
            })();
        } else if(((typeof initialCapacity === 'number') || initialCapacity === null) && loadFactor === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let loadFactor : any = 0.75;
                if(this.table===undefined) this.table = null;
                if(this.count===undefined) this.count = 0;
                if(this.threshold===undefined) this.threshold = 0;
                if(this.__loadFactor===undefined) this.__loadFactor = 0;
                this.modCount = 0;
                this.__keySet = null;
                this.__entrySet = null;
                this.__values = null;
                if(this.table===undefined) this.table = null;
                if(this.count===undefined) this.count = 0;
                if(this.threshold===undefined) this.threshold = 0;
                if(this.__loadFactor===undefined) this.__loadFactor = 0;
                (() => {
                    if(initialCapacity < 0) throw Object.defineProperty(new Error("Illegal Initial Capacity: " + initialCapacity), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    if(loadFactor <= 0 || /* isNaN */isNaN(loadFactor)) throw Object.defineProperty(new Error("Illegal Load factor: " + loadFactor), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    if(initialCapacity === 0) initialCapacity = 1;
                    this.__loadFactor = loadFactor;
                    this.table = (s => { let a=[]; while(s-->0) a.push(null); return a; })(initialCapacity);
                    this.threshold = (<number>((<any>Math).fround(initialCapacity * loadFactor))|0);
                })();
            }
        } else if(initialCapacity === undefined && loadFactor === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let initialCapacity : any = 11;
                let loadFactor : any = 0.75;
                if(this.table===undefined) this.table = null;
                if(this.count===undefined) this.count = 0;
                if(this.threshold===undefined) this.threshold = 0;
                if(this.__loadFactor===undefined) this.__loadFactor = 0;
                this.modCount = 0;
                this.__keySet = null;
                this.__entrySet = null;
                this.__values = null;
                if(this.table===undefined) this.table = null;
                if(this.count===undefined) this.count = 0;
                if(this.threshold===undefined) this.threshold = 0;
                if(this.__loadFactor===undefined) this.__loadFactor = 0;
                (() => {
                    if(initialCapacity < 0) throw Object.defineProperty(new Error("Illegal Initial Capacity: " + initialCapacity), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    if(loadFactor <= 0 || /* isNaN */isNaN(loadFactor)) throw Object.defineProperty(new Error("Illegal Load factor: " + loadFactor), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    if(initialCapacity === 0) initialCapacity = 1;
                    this.__loadFactor = loadFactor;
                    this.table = (s => { let a=[]; while(s-->0) a.push(null); return a; })(initialCapacity);
                    this.threshold = (<number>((<any>Math).fround(initialCapacity * loadFactor))|0);
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * Returns the number of key-value mappings in this map.
     * 
     * @return {number} the number of key-value mappings in this map.
     */
    public size() : number {
        return this.count;
    }

    /**
     * Returns <tt>true</tt> if this map contains no key-value mappings.
     * 
     * @return {boolean} <tt>true</tt> if this map contains no key-value mappings.
     */
    public isEmpty() : boolean {
        return this.count === 0;
    }

    /**
     * Returns <tt>true</tt> if this map maps one or more keys to the
     * specified value.
     * 
     * @param {Object} value value whose presence in this map is to be tested.
     * @return {boolean} <tt>true</tt> if this map maps one or more keys to the
     * specified value.
     */
    public containsValue(value : any) : boolean {
        let tab : Entry<any, any>[] = this.table;
        if(value == null) {
            for (let i: number = tab.length; i-- > 0;) for (let e: Entry<any, any> = tab[i]; e != null; e = e.next) if (e.value == null) return true;
        } else {
            for (let i: number = tab.length; i-- > 0;) for (let e: Entry<any, any> = tab[i]; e != null; e = e.next) if (/* equals */(<any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                    return o1.equals(o2);
                } else {
                    return o1 === o2;
                }
            })(value, e.value))) return true;
        }
        return false;
    }

    /**
     * Returns <tt>true</tt> if this map contains a mapping for the specified
     * key.
     * 
     * @param {Object} key key whose presence in this Map is to be tested.
     * @return {boolean} <tt>true</tt> if this map contains a mapping for the specified
     * key.
     */
    public containsKey(key : any) : boolean {
        let tab : Entry<any, any>[] = this.table;
        if(key != null) {
            let hash : number = System.identityHashCode(key);
            let index : number = (hash & 2147483647) % tab.length;
            for (let e: Entry<any, any> = tab[index]; e != null; e = e.next) if (e.hash === hash && key === e.key) return true;
        } else {
            for (let e: Entry<any, any> = tab[0]; e != null; e = e.next) if (e.key == null) return true;
        }
        return false;
    }

    /**
     * Returns the value to which this map maps the specified key.  Returns
     * <tt>null</tt> if the map contains no mapping for this key.  A return
     * value of <tt>null</tt> does not <i>necessarily</i> indicate that the
     * map contains no mapping for the key; it's also possible that the map
     * explicitly maps the key to <tt>null</tt>.  The <tt>containsKey</tt>
     * operation may be used to distinguish these two cases.
     * 
     * @param {Object} key key whose associated value is to be returned.
     * @return {Object} the value to which this map maps the specified key.
     */
    public get(key : any) : any {
        let tab : Entry<any, any>[] = this.table;
        if(key != null) {
            let hash : number = System.identityHashCode(key);
            let index : number = (hash & 2147483647) % tab.length;
            for (let e: Entry<any, any> = tab[index]; e != null; e = e.next) if ((e.hash === hash) && key === e.key) return e.value;
        } else {
            for (let e: Entry<any, any> = tab[0]; e != null; e = e.next) if (e.key == null) return e.value;
        }
        return null;
    }

    /**
     * Rehashes the contents of this map into a new <tt>IdentityHashMap</tt> instance
     * with a larger capacity. This method is called automatically when the
     * number of keys in this map exceeds its capacity and load factor.
     * @private
     */
    rehash() {
        let oldCapacity : number = this.table.length;
        let oldMap : Entry<any, any>[] = this.table;
        let newCapacity : number = oldCapacity * 2 + 1;
        let newMap : Entry<any, any>[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(newCapacity);
        this.modCount++;
        this.threshold = (<number>((<any>Math).fround(newCapacity * this.__loadFactor))|0);
        this.table = newMap;
        for(let i : number = oldCapacity; i-- > 0; ) {
            for(let old : Entry<any, any> = oldMap[i]; old != null; ) {
                let e : Entry<any, any> = old;
                old = old.next;
                let index : number = (e.hash & 2147483647) % newCapacity;
                e.next = newMap[index];
                newMap[index] = e;
            }
        }
    }

    /**
     * Associates the specified value with the specified key in this map.
     * If the map previously contained a mapping for this key, the old
     * value is replaced.
     * 
     * @param {Object} key   key with which the specified value is to be associated.
     * @param {Object} value value to be associated with the specified key.
     * @return {Object} previous value associated with specified key, or <tt>null</tt>
     * if there was no mapping for key.  A <tt>null</tt> return can
     * also indicate that the IdentityHashMap previously associated
     * <tt>null</tt> with the specified key.
     */
    public put(key : any, value : any) : any {
        let tab : Entry<any, any>[] = this.table;
        let hash : number = 0;
        let index : number = 0;
        if(key != null) {
            hash = System.identityHashCode(key);
            index = (hash & 2147483647) % tab.length;
            for(let e : Entry<any, any> = tab[index]; e != null; e = e.next) {
                if((e.hash === hash) && key === e.key) {
                    let old : any = e.value;
                    e.value = value;
                    return old;
                }
            }
        } else {
            for(let e : Entry<any, any> = tab[0]; e != null; e = e.next) {
                if(e.key == null) {
                    let old : any = e.value;
                    e.value = value;
                    return old;
                }
            }
        }
        this.modCount++;
        if(this.count >= this.threshold) {
            this.rehash();
            tab = this.table;
            index = (hash & 2147483647) % tab.length;
        }
        let e : Entry<any, any> = new Entry<any, any>(hash, key, value, tab[index]);
        tab[index] = e;
        this.count++;
        return null;
    }

    /**
     * Removes the mapping for this key from this map if present.
     * 
     * @param {Object} key key whose mapping is to be removed from the map.
     * @return {Object} previous value associated with specified key, or <tt>null</tt>
     * if there was no mapping for key.  A <tt>null</tt> return can
     * also indicate that the map previously associated <tt>null</tt>
     * with the specified key.
     */
    public remove(key : any) : any {
        let tab : Entry<any, any>[] = this.table;
        if(key != null) {
            let hash : number = System.identityHashCode(key);
            let index : number = (hash & 2147483647) % tab.length;
            for(let e : Entry<any, any> = tab[index], prev : Entry<any, any> = null; e != null; prev = e, e = e.next) {
                if((e.hash === hash) && key === e.key) {
                    this.modCount++;
                    if(prev != null) prev.next = e.next; else tab[index] = e.next;
                    this.count--;
                    let oldValue : any = e.value;
                    e.value = null;
                    return oldValue;
                }
            }
        } else {
            for(let e : Entry<any, any> = tab[0], prev : Entry<any, any> = null; e != null; prev = e, e = e.next) {
                if(e.key == null) {
                    this.modCount++;
                    if(prev != null) prev.next = e.next; else tab[0] = e.next;
                    this.count--;
                    let oldValue : any = e.value;
                    e.value = null;
                    return oldValue;
                }
            }
        }
        return null;
    }

    /**
     * Copies all of the mappings from the specified map to this one.
     * <p>
     * These mappings replace any mappings that this map had for any of the
     * keys currently in the specified Map.
     * 
     * @param {Map} t Mappings to be stored in this map.
     */
    public putAll(t : Map<any, any>) {
        let i : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>t));
        while((i.hasNext())) {
            let e : Entry<any, any> = <Entry<any, any>><any>i.next();
            this.put(e.getKey(), e.getValue());
        }
    }

    /**
     * Removes all mappings from this map.
     */
    public clear() {
        let tab : Entry<any, any>[] = this.table;
        this.modCount++;
        for(let index : number = tab.length; --index >= 0; ) tab[index] = null;
        this.count = 0;
    }

    /**
     * Returns a shallow copy of this <tt>IdentityHashMap</tt> instance: the keys and
     * values themselves are not cloned.
     * 
     * @return {Object} a shallow copy of this map.
     */
    public clone() : any {
        // try {
        //     let t : IdentityHashMap = <IdentityHashMap>/* clone */(m => { if(m.entries==null) m.entries=[]; let c = {entries: []}; for(let i=0;i<m.entries.length;i++) { let k = m.entries[i].key, v = m.entries[i].value; c.entries[i] = {key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}; } return c; })(super);
        //     t.table = (s => { let a=[]; while(s-->0) a.push(null); return a; })(this.table.length);
        //     for(let i : number = this.table.length; i-- > 0; ) {
        //         t.table[i] = (this.table[i] != null)?<Entry<any, any>>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this.table[i]):null;
        //     };
        //     t.__keySet = null;
        //     t.__entrySet = null;
        //     t.__values = null;
        //     t.modCount = 0;
        //     return t;
        // } catch(e) {
        //     throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.VirtualMachineError','java.lang.InternalError','java.lang.Error','java.lang.Object'] });
        // };
        throw new Error();
    }

    /*private*/ __keySet : Set<any> = null;

    /*private*/ __entrySet : Set<Entry<any, any>> = null;

    /*private*/ __values : Array<any> = null;

    /**
     * Returns a set view of the keys contained in this map.  The set is
     * backed by the map, so changes to the map are reflected in the set, and
     * vice versa.  The set supports element removal, which removes the
     * corresponding mapping from this map, via the <tt>Iterator.remove</tt>,
     * <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt>, and
     * <tt>clear</tt> operations.  It does not support the <tt>add</tt> or
     * <tt>addAll</tt> operations.
     * 
     * @return {Set} a set view of the keys contained in this map.
     */
    public keySet() : Set<Entry<any, any>> {
        if(this.__keySet == null) {
            this.__keySet = new IdentityHashMap.IdentityHashMap$0(this);
        }
        return this.__keySet;
    }

    /**
     * Returns a collection view of the values contained in this map.  The
     * collection is backed by the map, so changes to the map are reflected in
     * the collection, and vice versa.  The collection supports element
     * removal, which removes the corresponding mapping from this map, via the
     * <tt>Iterator.remove</tt>, <tt>Collection.remove</tt>,
     * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt> operations.
     * It does not support the <tt>add</tt> or <tt>addAll</tt> operations.
     * 
     * @return {Collection} a collection view of the values contained in this map.
     */
    public values() : Array<any> {
        if(this.__values == null) {
            this.__values = new IdentityHashMap.IdentityHashMap$1(this);
        }
        return this.__values;
    }

    /**
     * Returns a collection view of the mappings contained in this map.  Each
     * element in the returned collection is a <tt>Map.Entry</tt>.  The
     * collection is backed by the map, so changes to the map are reflected in
     * the collection, and vice versa.  The collection supports element
     * removal, which removes the corresponding mapping from the map, via the
     * <tt>Iterator.remove</tt>, <tt>Collection.remove</tt>,
     * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt> operations.
     * It does not support the <tt>add</tt> or <tt>addAll</tt> operations.
     * 
     * @return {Set} a collection view of the mappings contained in this map.
     * see java.util.Map.Entry
     */
    public entrySet() : Set<Entry<any, any>> {
        if(this.__entrySet == null) {
            this.__entrySet = new IdentityHashMap.IdentityHashMap$2(this);
        }
        return this.__entrySet;
    }

    getHashIterator(type : number) : any {
        if(this.count === 0) {
            return IdentityHashMap.emptyHashIterator_$LI$();
        } else {
            return new IdentityHashMap.HashIterator(this, type);
        }
    }

    static KEYS : number = 0;

    static VALUES : number = 1;

    static ENTRIES : number = 2;

    static emptyHashIterator : IdentityHashMap.EmptyHashIterator; public static emptyHashIterator_$LI$() : IdentityHashMap.EmptyHashIterator { if(IdentityHashMap.emptyHashIterator == null) IdentityHashMap.emptyHashIterator = new IdentityHashMap.EmptyHashIterator(); return IdentityHashMap.emptyHashIterator; };

    /**
     * Save the state of the <tt>IdentityHashMap</tt> instance to a stream (i.e.,
     * serialize it).
     * 
     * @serialData The <i>capacity</i> of the IdentityHashMap (the length of the
     * bucket array) is emitted (int), followed  by the
     * <i>size</i> of the IdentityHashMap (the number of key-value
     * mappings), followed by the key (Object) and value (Object)
     * for each key-value mapping represented by the IdentityHashMap
     * The key-value mappings are emitted in no particular order.
     * @param {ObjectOutputStream} s
     * @private
     */
    writeObject(s : any/*ObjectOutputStream*/) {
        s.defaultWriteObject();
        s.writeInt(this.table.length);
        s.writeInt(this.count);
        for(let index : number = this.table.length - 1; index >= 0; index--) {
            let entry : Entry<any, any> = this.table[index];
            while((entry != null)) {
                s.writeObject(entry.key);
                s.writeObject(entry.value);
                entry = entry.next;
            }
        }
    }

    /**
     * Reconstitute the <tt>IdentityHashMap</tt> instance from a stream (i.e.,
     * deserialize it).
     * @param {ObjectInputStream} s
     * @private
     */
    readObject(s : any/*ObjectInputStream*/) {
        s.defaultReadObject();
        let numBuckets : number = s.readInt();
        this.table = (s => { let a=[]; while(s-->0) a.push(null); return a; })(numBuckets);
        let size : number = s.readInt();
        for(let i : number = 0; i < size; i++) {
            let key : any = s.readObject();
            let value : any = s.readObject();
            this.put(key, value);
        }
    }

    capacity() : number {
        return this.table.length;
    }

    loadFactor() : number {
        return this.__loadFactor;
    }
}
IdentityHashMap["__class"] = "freemarker.ext.util.IdentityHashMap";
IdentityHashMap["__interfaces"] = ["java.lang.Cloneable","java.util.Map","java.io.Serializable"];



export namespace IdentityHashMap {
    export class EmptyHashIterator {
        constructor() {
        }

        public hasNext() : boolean {
            return false;
        }

        public next() : any {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.NoSuchElementException','java.lang.Exception'] });
        }

        public remove() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
    EmptyHashIterator["__class"] = "freemarker.ext.util.IdentityHashMap.EmptyHashIterator";
    EmptyHashIterator["__interfaces"] = ["java.util.Iterator"];



    export class HashIterator {
        public __parent: any;
        table : Entry<any, any>[];

        index : number;

        entry : Entry<any, any>;

        lastReturned : Entry<any, any>;

        type : number;

        /**
         * The modCount value that the iterator believes that the backing
         * List should have.  If this expectation is violated, the iterator
         * has detected concurrent modification.
         */
        expectedModCount : number;

        constructor(__parent: any, type : number) {
            this.__parent = __parent;
            this.table = this.table;
            this.index = this.table.length;
            this.entry = null;
            this.lastReturned = null;
            if(this.type===undefined) this.type = 0;
            this.expectedModCount = __parent.modCount;
            this.type = type;
        }

        public hasNext() : boolean {
            let e : Entry<any, any> = this.entry;
            let i : number = this.index;
            let t : Entry<any, any>[] = this.table;
            while((e == null && i > 0)) e = t[--i];
            this.entry = e;
            this.index = i;
            return e != null;
        }

        public next() : any {
            if(this.__parent.modCount !== this.expectedModCount) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.ConcurrentModificationException','java.lang.Exception'] });
            let et : Entry<any, any> = this.entry;
            let i : number = this.index;
            let t : Entry<any, any>[] = this.table;
            while((et == null && i > 0)) et = t[--i];
            this.entry = et;
            this.index = i;
            if(et != null) {
                let e : Entry<any, any> = this.lastReturned = this.entry;
                this.entry = e.next;
                return this.type === IdentityHashMap.KEYS?e.key:(this.type === IdentityHashMap.VALUES?e.value:e);
            }
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.NoSuchElementException','java.lang.Exception'] });
        }

        public remove() {
            if(this.lastReturned == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            if(this.__parent.modCount !== this.expectedModCount) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.ConcurrentModificationException','java.lang.Exception'] });
            let tab : Entry<any, any>[] = this.table;
            let index : number = (this.lastReturned.hash & 2147483647) % tab.length;
            for(let e : Entry<any, any> = tab[index], prev : Entry<any, any> = null; e != null; prev = e, e = e.next) {
                if(e === this.lastReturned) {
                    this.__parent.modCount++;
                    this.expectedModCount++;
                    if(prev == null) tab[index] = e.next; else prev.next = e.next;
                    this.__parent.count--;
                    this.lastReturned = null;
                    return;
                }
            }
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.ConcurrentModificationException','java.lang.Exception'] });
        }
    }
    HashIterator["__class"] = "freemarker.ext.util.IdentityHashMap.HashIterator";
    HashIterator["__interfaces"] = ["java.util.Iterator"];



    export class IdentityHashMap$0 extends Set<Entry<any, any>>{
        public __parent: any;
        /**
         * 
         * @return {Iterator}
         */
        public iterator() : any {
            return this.__parent.getHashIterator(IdentityHashMap.KEYS);
        }

        /**
         * 
         * @return {number}
         */
        public size() : number {
            return this.__parent.count;
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public contains(o : any) : boolean {
            return this.__parent.containsKey(o);
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public remove(o : any) : boolean {
            let oldSize : number = this.__parent.count;
            /* remove */(<any>this.__parent).__delegate.delete(o);
            return this.__parent.count !== oldSize;
        }

        /**
         * 
         */
        public clear() {
            /* clear */(<any>(<any>this.__parent).__delegate).clear();
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    IdentityHashMap$0["__interfaces"] = ["java.util.Collection","java.util.Set","java.lang.Iterable"];



    export class IdentityHashMap$1 extends Array{
        public __parent: any;
        /**
         * 
         * @return {Iterator}
         */
        public iterator() : any {
            return this.__parent.getHashIterator(IdentityHashMap.VALUES);
        }

        /**
         * 
         * @return {number}
         */
        public size() : number {
            return this.__parent.count;
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public contains(o : any) : boolean {
            return this.__parent.containsValue(o);
        }

        /**
         * 
         */
        public clear() {
            /* clear */(<any>(<any>this.__parent).__delegate).clear();
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    IdentityHashMap$1["__interfaces"] = ["java.util.Collection","java.lang.Iterable"];



    export class IdentityHashMap$2 extends Set<Entry<any, any>>{
        public __parent: any;
        /**
         * 
         * @return {Iterator}
         */
        public iterator() : any {
            return this.__parent.getHashIterator(IdentityHashMap.ENTRIES);
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public contains(o : any) : boolean {
            if(!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0))) return false;
            let entry : Entry<any, any> = <Entry<any, any>><any>o;
            let key : any = entry.getKey();
            let tab : Entry<any, any>[] = this.__parent.table;
            let hash : number = (key == null?0:System.identityHashCode(key));
            let index : number = (hash & 2147483647) % tab.length;
            for (let e: Entry<any, any> = tab[index]; e != null; e = e.next) if (e.hash === hash && e.equals(entry)) return true;
            return false;
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public remove(o : any) : boolean {
            if(!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0))) return false;
            let entry : Entry<any, any> = <Entry<any, any>><any>o;
            let key : any = entry.getKey();
            let tab : Entry<any, any>[] = this.__parent.table;
            let hash : number = (key == null?0:System.identityHashCode(key));
            let index : number = (hash & 2147483647) % tab.length;
            for(let e : Entry<any, any> = tab[index], prev : Entry<any, any> = null; e != null; prev = e, e = e.next) {
                if(e.hash === hash && e.equals(entry)) {
                    this.__parent.modCount++;
                    if(prev != null) prev.next = e.next; else tab[index] = e.next;
                    this.__parent.count--;
                    e.value = null;
                    return true;
                }
            }
            return false;
        }

        /**
         * 
         * @return {number}
         */
        public size() : number {
            return this.__parent.count;
        }

        /**
         * 
         */
        public clear() {
            /* clear */(<any>(<any>this.__parent).__delegate).clear();
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    IdentityHashMap$2["__interfaces"] = ["java.util.Collection","java.util.Set","java.lang.Iterable"];


}





IdentityHashMap.emptyHashIterator_$LI$();
