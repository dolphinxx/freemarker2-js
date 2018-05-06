/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_DelayedConversionToString} from './_DelayedConversionToString';
import {StringBuilder} from '../../java/lang/StringBuilder';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Array} items
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedJoinWithComma extends _DelayedConversionToString {
    public constructor(items : Array) {
        super(items);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        let items : Array<any> = <Array>obj;
        let totalLength : number = 0;
        for(let i : number = 0; i < items.length; i++) {
            if(i !== 0) totalLength += 2;
            totalLength += items[i].length;
        }
        let sb : StringBuilder = new StringBuilder("");
        for(let i : number = 0; i < items.length; i++) {
            if(i !== 0) sb.append(", ");
            sb.append(items[i]);
        }
        return sb.toString();
    }
}
_DelayedJoinWithComma["__class"] = "freemarker.core._DelayedJoinWithComma";




