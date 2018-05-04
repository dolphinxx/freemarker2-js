/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _UnmodifiableSet } from './_UnmodifiableSet';
import { _ArrayIterator } from './_ArrayIterator';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Array} array
 * @class
 * @extends _UnmodifiableSet
 */
export class _SortedArraySet<E> extends _UnmodifiableSet<E> {
    /*private*/ array : E[];

    public constructor(array : E[]) {
        super();
        if(this.array===undefined) this.array = null;
        this.array = array;
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return this.array.length;
    }

    /**
     * 
     * @param {Object} o
     * @return {boolean}
     */
    public contains(o : any) : boolean {
        return Arrays.binarySearch(this.array, o) >= 0;
    }

    /**
     * 
     * @return {Iterator}
     */
    public iterator() : Iterator {
        return new _ArrayIterator(this.array);
    }

    /**
     * 
     * @param {*} o
     * @return {boolean}
     */
    public add(o : E) : boolean {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {Object} o
     * @return {boolean}
     */
    public remove(o : any) : boolean {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {Collection} c
     * @return {boolean}
     */
    public addAll(c : Collection) : boolean {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {Collection} c
     * @return {boolean}
     */
    public removeAll(c : Collection) : boolean {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {Collection} c
     * @return {boolean}
     */
    public retainAll(c : Collection) : boolean {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     */
    public clear() {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
_SortedArraySet["__class"] = "freemarker.core._SortedArraySet";
_SortedArraySet["__interfaces"] = ["java.util.Collection","java.util.Set","java.lang.Iterable"];




var __Function = Function;
