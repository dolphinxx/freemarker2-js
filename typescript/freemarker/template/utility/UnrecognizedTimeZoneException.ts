/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { StringUtil } from './StringUtil';

/**
 * Indicates that the time zone name is not recognized.
 * @param {String} timeZoneName
 * @class
 * @extends Error
 */
export class UnrecognizedTimeZoneException extends Error {
    /*private*/ timeZoneName : string;

    public constructor(timeZoneName : string) {
        super("Unrecognized time zone: " + StringUtil.jQuote$java_lang_Object(timeZoneName)); this.message="Unrecognized time zone: " + StringUtil.jQuote$java_lang_Object(timeZoneName);
        (<any>Object).setPrototypeOf(this, UnrecognizedTimeZoneException.prototype);
        if(this.timeZoneName===undefined) this.timeZoneName = null;
        this.timeZoneName = timeZoneName;
    }

    public getTimeZoneName() : string {
        return this.timeZoneName;
    }
}
UnrecognizedTimeZoneException["__class"] = "freemarker.template.utility.UnrecognizedTimeZoneException";
UnrecognizedTimeZoneException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
