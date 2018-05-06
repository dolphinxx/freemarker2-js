/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_DelayedConversionToString} from './_DelayedConversionToString';
import {_MessageUtil} from './_MessageUtil';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Object} object
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedAOrAn extends _DelayedConversionToString {
    public constructor(object : any) {
        super(object);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        let s : string = obj.toString();
        return _MessageUtil.getAOrAn(s) + " " + s;
    }
}
_DelayedAOrAn["__class"] = "freemarker.core._DelayedAOrAn";




