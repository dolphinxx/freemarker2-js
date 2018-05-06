/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateValueFormatException} from './TemplateValueFormatException';

/**
 * Thrown when the {link TemplateValueFormat} doesn't support parsing, and parsing was invoked.
 * 
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends TemplateValueFormatException
 */
export class ParsingNotSupportedException extends TemplateValueFormatException {
    public constructor(message : string, cause : Error = null) {
        super(message, cause);
        (<any>Object).setPrototypeOf(this, ParsingNotSupportedException.prototype);
    }
}
ParsingNotSupportedException["__class"] = "freemarker.core.ParsingNotSupportedException";
ParsingNotSupportedException["__interfaces"] = ["java.io.Serializable"];





