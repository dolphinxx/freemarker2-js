/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Similar to {link NonPrimitiveArrayBackedReadOnlyList}, but uses reflection so that it works with primitive arrays
 * too.
 * @extends AbstractList
 * @class
 */
export class PrimtiveArrayBackedReadOnlyList {
    /*private*/ array : any;

    constructor(array : any) {
        if(this.array===undefined) this.array = null;
        this.array = array;
    }

    /**
     * 
     * @param {number} index
     * @return {Object}
     */
    public get(index : number) : any {
        return /* get */this.array[index];
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return /* getLength */this.array.length;
    }
}
PrimtiveArrayBackedReadOnlyList["__class"] = "freemarker.ext.beans.PrimtiveArrayBackedReadOnlyList";
PrimtiveArrayBackedReadOnlyList["__interfaces"] = ["java.util.List","java.util.Collection","java.lang.Iterable"];




var __Function = Function;
