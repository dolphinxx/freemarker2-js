/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { _DelayedConversionToString } from './_DelayedConversionToString';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {TemplateException} exception
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedGetMessageWithoutStackTop extends _DelayedConversionToString {
    public constructor(exception : TemplateException) {
        super(exception);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        return (<TemplateException>obj).getMessageWithoutStackTop();
    }
}
_DelayedGetMessageWithoutStackTop["__class"] = "freemarker.core._DelayedGetMessageWithoutStackTop";



var __Function = Function;
