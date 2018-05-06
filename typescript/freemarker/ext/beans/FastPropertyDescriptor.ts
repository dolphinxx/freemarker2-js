/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Used instead of {link PropertyDescriptor}, because the methods of that are synchronized.
 * 
 * @since 2.3.27
 * @param {Method} readMethod
 * @param {Method} indexedReadMethod
 * @class
 */
export class FastPropertyDescriptor {
    /*private*/ readMethod : Function;

    /*private*/ indexedReadMethod : Function;

    public constructor(readMethod : Function, indexedReadMethod : Function) {
        if(this.readMethod===undefined) this.readMethod = null;
        if(this.indexedReadMethod===undefined) this.indexedReadMethod = null;
        this.readMethod = readMethod;
        this.indexedReadMethod = indexedReadMethod;
    }

    public getReadMethod() : Function {
        return this.readMethod;
    }

    public getIndexedReadMethod() : Function {
        return this.indexedReadMethod;
    }
}
FastPropertyDescriptor["__class"] = "freemarker.ext.beans.FastPropertyDescriptor";




