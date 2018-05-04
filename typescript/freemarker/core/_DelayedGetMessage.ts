/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _DelayedConversionToString } from './_DelayedConversionToString';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Error} exception
 * @class
 * @extends _DelayedConversionToString
 */
export class _DelayedGetMessage extends _DelayedConversionToString {
    public constructor(exception : Error) {
        super(exception);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        let message : string = (<Error>obj).message;
        return message == null || message.length === 0?"[No exception message]":message;
    }
}
_DelayedGetMessage["__class"] = "freemarker.core._DelayedGetMessage";



var __Function = Function;
