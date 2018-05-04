/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _DelayedConversionToString } from './_DelayedConversionToString';
import { TemplateObject } from './TemplateObject';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {TemplateObject} obj
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedGetCanonicalForm extends _DelayedConversionToString {
    public constructor(obj : TemplateObject) {
        super(obj);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        try {
            return (<TemplateObject>obj).getCanonicalForm();
        } catch(e) {
            return "{Error getting canonical form}";
        };
    }
}
_DelayedGetCanonicalForm["__class"] = "freemarker.core._DelayedGetCanonicalForm";



var __Function = Function;
