/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Provides utilities to perform operations on Arrays.
 * @class
 */
export class ArrayHelper {
    public static ARRAY_PROCESS_BATCH_SIZE: number = 10000;

    public static clone<T>(array: T[], fromIndex: number, toIndex: number): T[] {
        let result: any = ArrayHelper.unsafeClone(array, fromIndex, toIndex);
        return result;
    }

    /**
     * Unlike clone, this method returns a copy of the array that is not type
     * marked. This is only safe for temp arrays as returned array will not do
     * any type checks.
     * @param {*} array
     * @param {number} fromIndex
     * @param {number} toIndex
     * @return {Array}
     */
    public static unsafeClone(array: any, fromIndex: number, toIndex: number): any[] {
        return (<Array<any>>array).slice(fromIndex, toIndex);
    }

    public static createFrom<T>(array: T[], length: number): T[] {
        let result: any = ArrayHelper.createNativeArray(length);
        return result;
    }

    /*private*/
    static createNativeArray(length: number): any {
        return <any>(new Array<any>(length));
    }

    public static getLength(array: any): number {
        return (<number>(<Array<any>>array).length | 0);
    }

    public static setLength(array: any, length: number) {
        (<Array<any>>array).length = length;
    }

    public static removeFrom(array: any, index: number, deleteCount: number) {
        (<Array<any>>array).splice(index, deleteCount);
    }

    public static insertTo$java_lang_Object$int$java_lang_Object(array: any, index: number, value: any) {
        (<Array<any>>array).splice(index, 0, value);
    }

    public static insertTo$java_lang_Object$int$java_lang_Object_A(array: any, index: number, values: any[]) {
        ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int$boolean(values, 0, array, index, values.length, false);
    }

    public static insertTo(array?: any, index?: any, values?: any): any {
        if (((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null && values instanceof <any>Array && (values.length == 0 || values[0] == null || (values[0] != null))) || values === null)) {
            return <any>ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object_A(array, index, values);
        } else if (((array != null) || array === null) && ((typeof index === 'number') || index === null) && ((values != null) || values === null)) {
            return <any>ArrayHelper.insertTo$java_lang_Object$int$java_lang_Object(array, index, values);
        } else throw new Error('invalid overload');
    }

    public static copy$java_lang_Object$int$java_lang_Object$int$int(array: any, srcOfs: number, dest: any, destOfs: number, len: number) {
        ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int$boolean(array, srcOfs, dest, destOfs, len, true);
    }

    public static copy$java_lang_Object$int$java_lang_Object$int$int$boolean(src: any, srcOfs: number, dest: any, destOfs: number, len: number, overwrite: boolean) {
        if (src === dest) {
            src = ArrayHelper.unsafeClone(src, srcOfs, srcOfs + len);
            srcOfs = 0;
        }
        for (let batchStart: number = srcOfs, end: number = srcOfs + len; batchStart < end;) {
            let batchEnd: number = Math.min(batchStart + ArrayHelper.ARRAY_PROCESS_BATCH_SIZE, end);
            len = batchEnd - batchStart;
            ArrayHelper.applySplice(dest, destOfs, overwrite ? len : 0, ArrayHelper.unsafeClone(src, batchStart, batchEnd));
            batchStart = batchEnd;
            destOfs += len;
        }
        ;
    }

    public static copy(src?: any, srcOfs?: any, dest?: any, destOfs?: any, len?: any, overwrite?: any): any {
        if (((src != null) || src === null) && ((typeof srcOfs === 'number') || srcOfs === null) && ((dest != null) || dest === null) && ((typeof destOfs === 'number') || destOfs === null) && ((typeof len === 'number') || len === null) && ((typeof overwrite === 'boolean') || overwrite === null)) {
            return <any>ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int$boolean(src, srcOfs, dest, destOfs, len, overwrite);
        } else if (((src != null) || src === null) && ((typeof srcOfs === 'number') || srcOfs === null) && ((dest != null) || dest === null) && ((typeof destOfs === 'number') || destOfs === null) && ((typeof len === 'number') || len === null) && overwrite === undefined) {
            return <any>ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int(src, srcOfs, dest, destOfs, len);
        } else throw new Error('invalid overload');
    }

    /*private*/
    static applySplice(arrayObject: any, index: number, deleteCount: number, arrayToAdd: any) {
        Array.prototype.splice.apply(arrayObject, [index, deleteCount].concat(arrayToAdd));
    }
}

ArrayHelper["__class"] = "javaemul.internal.ArrayHelper";
