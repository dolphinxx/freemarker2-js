/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {JsUtils} from "./JsUtils";
import {Coercions} from "./Coercions";

/**
 * Hashcode caching for strings.
 * @class
 */
export class StringHashCache {
    /**
     * The "old" cache; it will be dumped when front is full.
     */
    static back: any;

    public static back_$LI$(): any {
        if (StringHashCache.back == null) StringHashCache.back = StringHashCache.createNativeObject();
        return StringHashCache.back;
    };

    /**
     * Tracks the number of entries in front.
     */
    static count: number = 0;

    /**
     * The "new" cache; it will become back when it becomes full.
     */
    static front: any;

    public static front_$LI$(): any {
        if (StringHashCache.front == null) StringHashCache.front = StringHashCache.createNativeObject();
        return StringHashCache.front;
    };

    /**
     * Pulled this number out of thin air.
     */
    static MAX_CACHE: number = 256;

    public static getHashCode(str: string): number {
        let key: string = ":" + str;
        let result: any = StringHashCache.getProperty(StringHashCache.front_$LI$(), key);
        if (!JsUtils.isUndefined(result)) {
            return StringHashCache.unsafeCastToInt(result);
        }
        result = StringHashCache.getProperty(StringHashCache.back_$LI$(), key);
        let hashCode: number = JsUtils.isUndefined(result) ? StringHashCache.compute(str) : StringHashCache.unsafeCastToInt(result);
        StringHashCache.increment();
        JsUtils.setIntProperty(StringHashCache.front_$LI$(), key, hashCode);
        return hashCode;
    }

    /*private*/
    static compute(str: string): number {
        let hashCode: number = 0;
        let n: number = str.length;
        let nBatch: number = n - 4;
        let i: number = 0;
        while ((i < nBatch)) {
            hashCode = (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(str.charAt(i + 3)) + 31 * ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(str.charAt(i + 2)) + 31 * ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(str.charAt(i + 1)) + 31 * ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(str.charAt(i)) + 31 * hashCode)));
            hashCode = Coercions.ensureInt(hashCode);
            i += 4;
        }
        ;
        while ((i < n)) {
            hashCode = hashCode * 31 + (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(str.charAt(i++));
        }
        ;
        hashCode = Coercions.ensureInt(hashCode);
        return hashCode;
    }

    /*private*/
    static increment() {
        if (StringHashCache.count === StringHashCache.MAX_CACHE) {
            StringHashCache.back = StringHashCache.front;
            StringHashCache.front = StringHashCache.createNativeObject();
            StringHashCache.count = 0;
        }
        ++StringHashCache.count;
    }

    /*private*/
    static getProperty(map: any, key: string): any {
        return <any>(map[key]);
    }

    /*private*/
    static createNativeObject(): any {
        return <any>({});
    }

    /*private*/
    static unsafeCastToInt(o: any): number {
        return <any>(o);
    }
}

StringHashCache["__class"] = "javaemul.internal.StringHashCache";

StringHashCache.front_$LI$();

StringHashCache.back_$LI$();
