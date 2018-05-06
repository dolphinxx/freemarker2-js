/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {ClassUtil} from '../template/utility/ClassUtil';
import {_DelayedConversionToString} from './_DelayedConversionToString';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {*} tm
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedFTLTypeDescription extends _DelayedConversionToString {
    public constructor(tm : TemplateModel) {
        super(tm);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        return ClassUtil.getFTLTypeDescription(<TemplateModel><any>obj);
    }
}
_DelayedFTLTypeDescription["__class"] = "freemarker.core._DelayedFTLTypeDescription";




