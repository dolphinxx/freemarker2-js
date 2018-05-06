/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {UnformattableValueException} from './UnformattableValueException';
import {_MessageUtil} from './_MessageUtil';

/**
 * Thrown when a {link TemplateDateModel} can't be formatted because its type is {link TemplateDateModel#UNKNOWN}.
 * 
 * @since 2.3.24
 * @class
 * @extends UnformattableValueException
 */
export class UnknownDateTypeFormattingUnsupportedException extends UnformattableValueException {
    public constructor() {
        super(_MessageUtil.UNKNOWN_DATE_TO_STRING_ERROR_MESSAGE);
        (<any>Object).setPrototypeOf(this, UnknownDateTypeFormattingUnsupportedException.prototype);
    }
}
UnknownDateTypeFormattingUnsupportedException["__class"] = "freemarker.core.UnknownDateTypeFormattingUnsupportedException";
UnknownDateTypeFormattingUnsupportedException["__interfaces"] = ["java.io.Serializable"];





