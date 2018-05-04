/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { EmptyMap } from '../EmptyMap';

/**
 * Implementation of missing JDK 1.3 collection features for JDK 1.2
 * 
 * @deprecated Not needed anymore, as FreeMarker now requires higher than Java 1.3
 * @class
 */
export class Collections12 {
    public static EMPTY_MAP : Map<any, any>; public static EMPTY_MAP_$LI$() : Map<any, any> { if(Collections12.EMPTY_MAP == null) Collections12.EMPTY_MAP = new EmptyMap(); return Collections12.EMPTY_MAP; };

    constructor() {
    }

    public static singletonMap(key : any, value : any) : Map<any, any> {
        return /* singletonMap */(k => { let o = {entries: [{getKey: function() { return this.key }, getValue: function() { return this.value },key:k, value:value}]}; return o; })(key);
    }

    public static singletonList(o : any) : Array<any> {
        return /* singletonList */[o];
    }
}
Collections12["__class"] = "freemarker.template.utility.Collections12";



var __Function = Function;

Collections12.EMPTY_MAP_$LI$();
