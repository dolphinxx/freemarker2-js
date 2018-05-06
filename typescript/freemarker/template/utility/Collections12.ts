/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Map} from "../../../java/util/Map";

/**
 * Implementation of missing JDK 1.3 collection features for JDK 1.2
 * 
 * @deprecated Not needed anymore, as FreeMarker now requires higher than Java 1.3
 * @class
 */
export class Collections12 {
    public static EMPTY_MAP : Map<any, any> = new Map();

    constructor() {
    }

    public static singletonMap(key : any, value : any) : Map<any, any> {
        const result:Map = new Map();
        result.put(key, value);
        return result;
    }

    public static singletonList(o : any) : Array<any> {
        return /* singletonList */[o];
    }
}
Collections12["__class"] = "freemarker.template.utility.Collections12";