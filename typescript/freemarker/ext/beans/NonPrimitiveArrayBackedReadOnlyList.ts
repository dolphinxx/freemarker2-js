/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
export class NonPrimitiveArrayBackedReadOnlyList {
    /*private*/ array : Array<any>;

    constructor(array : Array) {
        if(this.array===undefined) this.array = null;
        this.array = array;
    }

    /**
     * 
     * @param {number} index
     * @return {Object}
     */
    public get(index : number) : any {
        return this.array[index];
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return this.array.length;
    }
}
NonPrimitiveArrayBackedReadOnlyList["__class"] = "freemarker.ext.beans.NonPrimitiveArrayBackedReadOnlyList";
NonPrimitiveArrayBackedReadOnlyList["__interfaces"] = ["java.util.List","java.util.Collection","java.lang.Iterable"];





