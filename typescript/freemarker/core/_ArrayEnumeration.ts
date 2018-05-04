/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Array} array
 * @param {number} size
 * @class
 */
export class _ArrayEnumeration {
    /*private*/ array : Array<any>;

    /*private*/ size : number;

    /*private*/ nextIndex : number;

    public constructor(array : Array, size : number) {
        if(this.array===undefined) this.array = null;
        if(this.size===undefined) this.size = 0;
        if(this.nextIndex===undefined) this.nextIndex = 0;
        this.array = array;
        this.size = size;
        this.nextIndex = 0;
    }

    public hasMoreElements() : boolean {
        return this.nextIndex < this.size;
    }

    public nextElement() : any {
        if(this.nextIndex >= this.size) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.NoSuchElementException','java.lang.Exception'] });
        }
        return this.array[this.nextIndex++];
    }
}
_ArrayEnumeration["__class"] = "freemarker.core._ArrayEnumeration";
_ArrayEnumeration["__interfaces"] = ["java.util.Enumeration"];




var __Function = Function;
