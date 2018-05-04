/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Array} array
 * @class
 */
export class _ArrayIterator {
    /*private*/ array : Array<any>;

    /*private*/ nextIndex : number;

    public constructor(array : Array) {
        if(this.array===undefined) this.array = null;
        if(this.nextIndex===undefined) this.nextIndex = 0;
        this.array = array;
        this.nextIndex = 0;
    }

    public hasNext() : boolean {
        return this.nextIndex < this.array.length;
    }

    public next() : any {
        if(this.nextIndex >= this.array.length) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.NoSuchElementException','java.lang.Exception'] });
        }
        return this.array[this.nextIndex++];
    }

    public remove() {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
_ArrayIterator["__class"] = "freemarker.core._ArrayIterator";
_ArrayIterator["__interfaces"] = ["java.util.Iterator"];




var __Function = Function;
