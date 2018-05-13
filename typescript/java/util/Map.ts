import {Set} from './Set';
import {Entry} from "./Entry";
import {Iterator as _Iterator} from "./Iterator";
import {Iterable as _Iterable} from "../lang/Iterable";
import {HashCodes} from "../../javaemul/internal/HashCodes";
import * as isPlainObject from 'is-plain-object';

export class Map<K = any, V = any> implements _Iterable<Entry<K, V>>, Iterable<Entry<K, V>> {
    keys: Array<K>;
    valueArray: Array<V>;

    public constructor(map?: Map<K, V>) {
        if (map !== undefined) {
            this.keys = map.keys.slice(0);
            this.valueArray = map.valueArray.slice(0);
            return;
        }
        this.keys = [];
        this.valueArray = [];
    }

    /**
     * Returns the number of key-value mappings in this map.  If the
     * map contains more than <tt>Integer.MAX_VALUE</tt> elements, returns
     * <tt>Integer.MAX_VALUE</tt>.
     *
     * @return the number of key-value mappings in this map
     */
    public size(): number {
        return this.keys.length;
    }

    /**
     * Returns <tt>true</tt> if this map contains no key-value mappings.
     *
     * @return <tt>true</tt> if this map contains no key-value mappings
     */
    public isEmpty(): boolean {
        return this.keys.length === 0;
    }

    /**
     * Returns <tt>true</tt> if this map contains a mapping for the specified
     * key.  More formally, returns <tt>true</tt> if and only if
     * this map contains a mapping for a key <tt>k</tt> such that
     * <tt>(key==null ? k==null : key.equals(k))</tt>.  (There can be
     * at most one such mapping.)
     *
     * @param key key whose presence in this map is to be tested
     * @return <tt>true</tt> if this map contains a mapping for the specified
     *         key
     * @throws ClassCastException if the key is of an inappropriate type for
     *         this map
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if the specified key is null and this map
     *         does not permit null keys
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     */
    public containsKey(key: any): boolean {
        return this.keys.indexOf(key) !== -1;
    }

    public has(key: any): boolean {
        return this.containsKey(key);
    }

    /**
     * Returns <tt>true</tt> if this map maps one or more keys to the
     * specified value.  More formally, returns <tt>true</tt> if and only if
     * this map contains at least one mapping to a value <tt>v</tt> such that
     * <tt>(value==null ? v==null : value.equals(v))</tt>.  This operation
     * will probably require time linear in the map size for most
     * implementations of the <tt>Map</tt> interface.
     *
     * @param value value whose presence in this map is to be tested
     * @return <tt>true</tt> if this map maps one or more keys to the
     *         specified value
     * @throws ClassCastException if the value is of an inappropriate type for
     *         this map
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if the specified value is null and this
     *         map does not permit null values
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     */
    public containsValue(value: any): boolean {
        return this.valueArray.indexOf(value) != -1;
    }

    /**
     * Returns the value to which the specified key is mapped,
     * or {@code null} if this map contains no mapping for the key.
     *
     * <p>More formally, if this map contains a mapping from a key
     * {@code k} to a value {@code v} such that {@code (key==null ? k==null :
     * key.equals(k))}, then this method returns {@code v}; otherwise
     * it returns {@code null}.  (There can be at most one such mapping.)
     *
     * <p>If this map permits null values, then a return value of
     * {@code null} does not <i>necessarily</i> indicate that the map
     * contains no mapping for the key; it's also possible that the map
     * explicitly maps the key to {@code null}.  The {@link #containsKey
     * containsKey} operation may be used to distinguish these two cases.
     *
     * @param key the key whose associated value is to be returned
     * @return the value to which the specified key is mapped, or
     *         {@code null} if this map contains no mapping for the key
     * @throws ClassCastException if the key is of an inappropriate type for
     *         this map
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if the specified key is null and this map
     *         does not permit null keys
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     */
    public get(key: any): V {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return null;
        }
        return this.valueArray[index];
    }

    // Modification Operations

    /**
     * Associates the specified value with the specified key in this map
     * (optional operation).  If the map previously contained a mapping for
     * the key, the old value is replaced by the specified value.  (A map
     * <tt>m</tt> is said to contain a mapping for a key <tt>k</tt> if and only
     * if {@link #containsKey(Object) m.containsKey(k)} would return
     * <tt>true</tt>.)
     *
     * @param key key with which the specified value is to be associated
     * @param value value to be associated with the specified key
     * @return the previous value associated with <tt>key</tt>, or
     *         <tt>null</tt> if there was no mapping for <tt>key</tt>.
     *         (A <tt>null</tt> return can also indicate that the map
     *         previously associated <tt>null</tt> with <tt>key</tt>,
     *         if the implementation supports <tt>null</tt> values.)
     * @throws UnsupportedOperationException if the <tt>put</tt> operation
     *         is not supported by this map
     * @throws ClassCastException if the class of the specified key or value
     *         prevents it from being stored in this map
     * @throws NullPointerException if the specified key or value is null
     *         and this map does not permit null keys or values
     * @throws IllegalArgumentException if some property of the specified key
     *         or value prevents it from being stored in this map
     */
    public put(key: K, value: V): V {
        const prev: V = this.get(key);
        if (prev !== null) {
            this.valueArray.splice(this.keys.indexOf(key), 1, value);
        } else {
            this.keys.push(key);
            this.valueArray.push(value);
        }
        return prev;
    }

    public set(key: K, value: V): V {
        return this.put(key, value);
    }

    /**
     * Removes the mapping for a key from this map if it is present
     * (optional operation).   More formally, if this map contains a mapping
     * from key <tt>k</tt> to value <tt>v</tt> such that
     * <code>(key==null ?  k==null : key.equals(k))</code>, that mapping
     * is removed.  (The map can contain at most one such mapping.)
     *
     * <p>Returns the value to which this map previously associated the key,
     * or <tt>null</tt> if the map contained no mapping for the key.
     *
     * <p>If this map permits null values, then a return value of
     * <tt>null</tt> does not <i>necessarily</i> indicate that the map
     * contained no mapping for the key; it's also possible that the map
     * explicitly mapped the key to <tt>null</tt>.
     *
     * <p>The map will not contain a mapping for the specified key once the
     * call returns.
     *
     * @param key key whose mapping is to be removed from the map
     * @return the previous value associated with <tt>key</tt>, or
     *         <tt>null</tt> if there was no mapping for <tt>key</tt>.
     * @throws UnsupportedOperationException if the <tt>remove</tt> operation
     *         is not supported by this map
     * @throws ClassCastException if the key is of an inappropriate type for
     *         this map
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     * @throws NullPointerException if the specified key is null and this
     *         map does not permit null keys
     * (<a href="{@docRoot}/java/util/Collection.html#optional-restrictions">optional</a>)
     */
    public remove(key: K): V {
        const index = this.keys.indexOf(key);
        if (index === -1) {
            return null;
        }
        const prev = this.valueArray[index];
        this.keys.splice(index, 1);
        this.valueArray.splice(index, 1);
        return prev;
    }

    public delete(key: K): V {
        return this.remove(key);
    }

    // Bulk Operations

    /**
     * Copies all of the mappings from the specified map to this map
     * (optional operation).  The effect of this call is equivalent to that
     * of calling {@link #put(Object,Object) put(k, v)} on this map once
     * for each mapping from key <tt>k</tt> to value <tt>v</tt> in the
     * specified map.  The behavior of this operation is undefined if the
     * specified map is modified while the operation is in progress.
     *
     * @param m mappings to be stored in this map
     * @throws UnsupportedOperationException if the <tt>putAll</tt> operation
     *         is not supported by this map
     * @throws ClassCastException if the class of a key or value in the
     *         specified map prevents it from being stored in this map
     * @throws NullPointerException if the specified map is null, or if
     *         this map does not permit null keys or values, and the
     *         specified map contains null keys or values
     * @throws IllegalArgumentException if some property of a key or value in
     *         the specified map prevents it from being stored in this map
     */
    public putAll(m: Map<K, V>): void {
        m.forEach((entry: Entry<K, V>) => {
            this.put(entry.getKey(), entry.getValue());
        });
    }

    /**
     * Removes all of the mappings from this map (optional operation).
     * The map will be empty after this call returns.
     *
     * @throws UnsupportedOperationException if the <tt>clear</tt> operation
     *         is not supported by this map
     */
    public clear(): void {
        this.keys = [];
        this.valueArray = [];
    }


    // Views

    /**
     * Returns a {@link Set} view of the keys contained in this map.
     * The set is backed by the map, so changes to the map are
     * reflected in the set, and vice-versa.  If the map is modified
     * while an iteration over the set is in progress (except through
     * the iterator's own <tt>remove</tt> operation), the results of
     * the iteration are undefined.  The set supports element removal,
     * which removes the corresponding mapping from the map, via the
     * <tt>Iterator.remove</tt>, <tt>Set.remove</tt>,
     * <tt>removeAll</tt>, <tt>retainAll</tt>, and <tt>clear</tt>
     * operations.  It does not support the <tt>add</tt> or <tt>addAll</tt>
     * operations.
     *
     * @return a set view of the keys contained in this map
     */
    public keySet(): Set<K> {
        return new Set<K>(this.keys);
    }

    /**
     * Returns a {@link Collection} view of the values contained in this map.
     * The collection is backed by the map, so changes to the map are
     * reflected in the collection, and vice-versa.  If the map is
     * modified while an iteration over the collection is in progress
     * (except through the iterator's own <tt>remove</tt> operation),
     * the results of the iteration are undefined.  The collection
     * supports element removal, which removes the corresponding
     * mapping from the map, via the <tt>Iterator.remove</tt>,
     * <tt>Collection.remove</tt>, <tt>removeAll</tt>,
     * <tt>retainAll</tt> and <tt>clear</tt> operations.  It does not
     * support the <tt>add</tt> or <tt>addAll</tt> operations.
     *
     * @return a collection view of the values contained in this map
     */
    public values(): Array<V> {
        return this.valueArray;
    }

    /**
     * Returns a {@link Set} view of the mappings contained in this map.
     * The set is backed by the map, so changes to the map are
     * reflected in the set, and vice-versa.  If the map is modified
     * while an iteration over the set is in progress (except through
     * the iterator's own <tt>remove</tt> operation, or through the
     * <tt>setValue</tt> operation on a map entry returned by the
     * iterator) the results of the iteration are undefined.  The set
     * supports element removal, which removes the corresponding
     * mapping from the map, via the <tt>Iterator.remove</tt>,
     * <tt>Set.remove</tt>, <tt>removeAll</tt>, <tt>retainAll</tt> and
     * <tt>clear</tt> operations.  It does not support the
     * <tt>add</tt> or <tt>addAll</tt> operations.
     *
     * @return a set view of the mappings contained in this map
     */
    public entrySet(): Set<Entry<K, V>> {
        const entries: Array<Entry<K, V>> = [];
        let current: Entry<K, V> = null;
        for (let i = 0; i < this.keys.length; i++) {
            const entry = new Entry(null, this.keys[i], this.valueArray[i], current);
            entries.push(entry);
            current = entry;
        }
        return new Set(entries);
    }

    // Comparison and hashing

    /**
     * Compares the specified object with this map for equality.  Returns
     * <tt>true</tt> if the given object is also a map and the two maps
     * represent the same mappings.  More formally, two maps <tt>m1</tt> and
     * <tt>m2</tt> represent the same mappings if
     * <tt>m1.entrySet().equals(m2.entrySet())</tt>.  This ensures that the
     * <tt>equals</tt> method works properly across different implementations
     * of the <tt>Map</tt> interface.
     *
     * @param o object to be compared for equality with this map
     * @return <tt>true</tt> if the specified object is equal to this map
     */
    public equals(o: any): boolean {
        if (!(o instanceof Map)) {
            return false;
        }
        const m = <Map<any, any>>o;
        if (this.keys.length !== m.keys.length || this.valueArray.length !== m.valueArray.length) {
            return false;
        }
        for (let i = 0; i < this.keys.length; i++) {
            if (this.keys[i] !== m.keys[i] || this.valueArray[i] !== m.valueArray[i]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Returns the hash code value for this map.  The hash code of a map is
     * defined to be the sum of the hash codes of each entry in the map's
     * <tt>entrySet()</tt> view.  This ensures that <tt>m1.equals(m2)</tt>
     * implies that <tt>m1.hashCode()==m2.hashCode()</tt> for any two maps
     * <tt>m1</tt> and <tt>m2</tt>, as required by the general contract of
     * {@link Object#hashCode}.
     *
     * @return the hash code value for this map
     * @see Map.Entry#hashCode()
     * @see Object#equals(Object)
     * @see #equals(Object)
     */
    public hashCode(): number {
        return HashCodes.getObjectIdentityHashCode(this);
    }

    /**
     * Performs the given action for each entry in this map until all entries
     * have been processed or the action throws an exception.   Unless
     * otherwise specified by the implementing class, actions are performed in
     * the order of entry set iteration (if an iteration order is specified.)
     * Exceptions thrown by the action are relayed to the caller.
     *
     * @implSpec
     * The default implementation is equivalent to, for this {@code map}:
     * <pre> {@code
     * for (Map.Entry<K, V> entry : map.entrySet())
     *     action.accept(entry.getKey(), entry.getValue());
     * }</pre>
     *
     * The default implementation makes no guarantees about synchronization
     * or atomicity properties of this method. Any implementation providing
     * atomicity guarantees must override this method and document its
     * concurrency properties.
     *
     * @param action The action to be performed for each entry
     * @throws NullPointerException if the specified action is null
     * @throws ConcurrentModificationException if an entry is found to be
     * removed during iteration
     * @since 1.8
     */
    public forEach(action: Function): void {
        for (let i = 0; i < this.keys.length; i++) {
            action(new Entry(this.keys[i], this.valueArray[i]));
        }
    }

    public iterator(): Map.MapIterator<K, V> {
        return new Map.MapIterator(this);
    }

    [Symbol.iterator]() {
        const it = this.iterator();
        return {
            next: () => {
                if (it.hasNext()) {
                    return {value: it.next(), done: false};
                } else {
                    it.cursor = 0;
                    return {value: null, done: true};
                }
            }
        }
    }

    public static fromObject(obj: Object, deep?: boolean): Map<any, any> {
        const result = new Map();
        if (obj == null) {
            return result;
        }
        for (let o in obj) {
            if (obj.hasOwnProperty(o)) {
                if (deep && isPlainObject(obj[o])) {
                    result.put(o, Map.fromObject(obj[o], true));
                } else {
                    result.put(o, obj[o]);
                }
            }
        }
        return result;
    }
}

export namespace Map {
    export class MapIterator<K, V> implements _Iterator<Entry<K, V>>, Iterable<Entry<K, V>> {
        cursor: number = 0;
        private map: Map<K, V>;

        public constructor(map: Map<K, V>) {
            this.map = map;
        }

        /**
         * Returns {@code true} if the iteration has more elements.
         * (In other words, returns {@code true} if {@link #next} would
         * return an element rather than throwing an exception.)
         *
         * @return {@code true} if the iteration has more elements
         */
        public hasNext(): boolean {
            return this.cursor < this.map.size();
        }

        /**
         * Returns the next element in the iteration.
         *
         * @return the next element in the iteration
         * @throws NoSuchElementException if the iteration has no more elements
         */
        public next(): Entry<K, V> {
            this.cursor += 1;
            return new Entry(this.map.keys[this.cursor], this.map.valueArray[this.cursor]);
        }

        /**
         * Removes from the underlying collection the last element returned
         * by this iterator (optional operation).  This method can be called
         * only once per call to {@link #next}.  The behavior of an iterator
         * is unspecified if the underlying collection is modified while the
         * iteration is in progress in any way other than by calling this
         * method.
         *
         * @implSpec
         * The default implementation throws an instance of
         * {@link UnsupportedOperationException} and performs no other action.
         *
         * @throws UnsupportedOperationException if the {@code remove}
         *         operation is not supported by this iterator
         *
         * @throws IllegalStateException if the {@code next} method has not
         *         yet been called, or the {@code remove} method has already
         *         been called after the last call to the {@code next}
         *         method
         */
        public remove(): void {
            this.map.remove(this.map.keys[this.cursor]);
            this.cursor -= 1;
        }

        /**
         * Performs the given action for each remaining element until all elements
         * have been processed or the action throws an exception.  Actions are
         * performed in the order of iteration, if that order is specified.
         * Exceptions thrown by the action are relayed to the caller.
         *
         * @implSpec
         * <p>The default implementation behaves as if:
         * <pre>{@code
         *     while (hasNext())
     *         action.accept(next());
     * }</pre>
         *
         * @param action The action to be performed for each element
         * @throws NullPointerException if the specified action is null
         * @since 1.8
         */
        public forEachRemaining(action: Function): void {
            while (this.hasNext())
                action.call(this.next());
        }

        [Symbol.iterator]() {
            return {
                next: () => {
                    if (this.hasNext()) {
                        return {value: this.next(), done: false};
                    } else {
                        this.cursor = 0;
                        return {value: null, done: true};
                    }
                }
            }
        }
    }
}

Map['__class'] = 'java.util.Map';