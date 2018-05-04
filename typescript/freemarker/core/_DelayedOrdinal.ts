/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _DelayedConversionToString } from './_DelayedConversionToString';

/**
 * 1 to "1st", 2 to "2nd", etc.
 * @param {Object} object
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedOrdinal extends _DelayedConversionToString {
    public constructor(object : any) {
        super(object);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        if(typeof obj === 'number') {
            let n : number = /* longValue */(<number>obj);
            if(n % 10 === 1 && n % 100 !== 11) {
                return n + "st";
            } else if(n % 10 === 2 && n % 100 !== 12) {
                return n + "nd";
            } else if(n % 10 === 3 && n % 100 !== 13) {
                return n + "rd";
            } else {
                return n + "th";
            }
        } else {
            return "" + obj;
        }
    }
}
_DelayedOrdinal["__class"] = "freemarker.core._DelayedOrdinal";



var __Function = Function;
