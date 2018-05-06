/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Set} from "../../java/util/Set";

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @class
 * @extends AbstractSet
 */
export abstract class _UnmodifiableSet<E> extends Set<E>{
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
        if(this.contains(o)) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return false;
    }

    /**
     * 
     */
    public clear() {
        if(!this.isEmpty()) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    constructor() {
        super();
    }
}
_UnmodifiableSet["__class"] = "freemarker.core._UnmodifiableSet";
_UnmodifiableSet["__interfaces"] = ["java.util.Collection","java.util.Set","java.lang.Iterable"];





