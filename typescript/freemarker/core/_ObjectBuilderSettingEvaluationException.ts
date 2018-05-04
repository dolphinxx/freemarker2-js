/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { StringUtil } from '../template/utility/StringUtil';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * Thrown by {link _ObjectBuilderSettingEvaluator}.
 * @param {String} expected
 * @param {String} src
 * @param {number} location
 * @class
 * @extends Error
 */
export class _ObjectBuilderSettingEvaluationException extends Error {
    public constructor(expected? : any, src? : any, location? : any) {
        if(((typeof expected === 'string') || expected === null) && ((typeof src === 'string') || src === null) && ((typeof location === 'number') || location === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super("Expression syntax error: Expected a(n) " + expected + ", but " + (location < src.length?"found character " + StringUtil.jQuote$java_lang_Object("" + src.charAt(location)) + " at position " + (location + 1) + ".":"the end of the parsed string was reached.")); this.message="Expression syntax error: Expected a(n) " + expected + ", but " + (location < src.length?"found character " + StringUtil.jQuote$java_lang_Object("" + src.charAt(location)) + " at position " + (location + 1) + ".":"the end of the parsed string was reached.");
            (<any>Object).setPrototypeOf(this, _ObjectBuilderSettingEvaluationException.prototype);
        } else if(((typeof expected === 'string') || expected === null) && ((src != null && (src["__classes"] && src["__classes"].indexOf("java.lang.Throwable") >= 0) || src != null && src instanceof <any>Error) || src === null) && location === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let message : any = __args[0];
            let cause : any = __args[1];
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, _ObjectBuilderSettingEvaluationException.prototype);
        } else if(((typeof expected === 'string') || expected === null) && src === undefined && location === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let message : any = __args[0];
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, _ObjectBuilderSettingEvaluationException.prototype);
        } else throw new Error('invalid overload');
    }
}
_ObjectBuilderSettingEvaluationException["__class"] = "freemarker.core._ObjectBuilderSettingEvaluationException";
_ObjectBuilderSettingEvaluationException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
