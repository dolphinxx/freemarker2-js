/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { StringUtil } from '../template/utility/StringUtil';
import { _DelayedConversionToString } from './_DelayedConversionToString';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Object} object
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedJQuote extends _DelayedConversionToString {
    public constructor(object : any) {
        super(object);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        return StringUtil.jQuote$java_lang_Object(_ErrorDescriptionBuilder.toString$java_lang_Object(obj));
    }
}
_DelayedJQuote["__class"] = "freemarker.core._DelayedJQuote";



var __Function = Function;
