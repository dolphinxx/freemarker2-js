/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {StringHashCache} from "./StringHashCache";
import {JsUtils} from "./JsUtils";

/**
 * Contains logics for calculating hash codes in JavaScript.
 * @class
 */
export class HashCodes {
    static sNextHashId: number = 0;

    static HASH_CODE_PROPERTY: string = "$H";

    public static hashCodeForString(s: string): number {
        return StringHashCache.getHashCode(s);
    }

    public static getIdentityHashCode(o: any): number {
        if (o == null) {
            return 0;
        }
        return (typeof o === 'string') ? HashCodes.hashCodeForString(JsUtils.unsafeCastToString(o)) : HashCodes.getObjectIdentityHashCode(o);
    }

    public static getObjectIdentityHashCode(o: any): number {
        if ((o)[HashCodes.HASH_CODE_PROPERTY] != null) {
            return <any>((o)[HashCodes.HASH_CODE_PROPERTY]);
        } else {
            return <any>((o)[HashCodes.HASH_CODE_PROPERTY] = HashCodes.getNextHashId());
        }
    }

    /**
     * Called from JSNI. Do not change this implementation without updating:
     * <ul>
     * <li>{@link com.google.gwt.user.client.rpc.impl.SerializerBase}</li>
     * </ul>
     * @return {number}
     * @private
     */

    /*private*/
    static getNextHashId(): number {
        return ++HashCodes.sNextHashId;
    }
}

HashCodes["__class"] = "javaemul.internal.HashCodes";