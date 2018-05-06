/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {UnformattableValueException} from './UnformattableValueException';
import {_MessageUtil} from './_MessageUtil';

/**
 * Thrown when a string can't be parsed to {link TemplateDateModel}, because the provided target type is
 * {link TemplateDateModel#UNKNOWN}.
 * 
 * @since 2.3.24
 * @class
 * @extends UnformattableValueException
 */
export class UnknownDateTypeParsingUnsupportedException extends UnformattableValueException {
    public constructor() {
        super(_MessageUtil.UNKNOWN_DATE_PARSING_ERROR_MESSAGE);
        (<any>Object).setPrototypeOf(this, UnknownDateTypeParsingUnsupportedException.prototype);
    }
}
UnknownDateTypeParsingUnsupportedException["__class"] = "freemarker.core.UnknownDateTypeParsingUnsupportedException";
UnknownDateTypeParsingUnsupportedException["__interfaces"] = ["java.io.Serializable"];





