/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {OutputFormat} from './OutputFormat';

/**
 * Represents the plain text output format (MIME type "text/plain", name "plainText"). This format doesn't support
 * escaping. This format doesn't allow mixing in template output values of other output formats.
 * <p>
 * <p>
 * The main difference from {link UndefinedOutputFormat} is that this format doesn't allow inserting values of another
 * output format into itself (unless they can be converted to plain text), while {link UndefinedOutputFormat} would
 * just insert the foreign "markup" as is. Also, this format has {"text/plain"} MIME type, while
 * {link UndefinedOutputFormat} has {@code null}.
 * 
 * @since 2.3.24
 * @extends OutputFormat
 * @class
 */
export class PlainTextOutputFormat extends OutputFormat {
    public static INSTANCE : PlainTextOutputFormat; public static INSTANCE_$LI$() : PlainTextOutputFormat { if(PlainTextOutputFormat.INSTANCE == null) PlainTextOutputFormat.INSTANCE = new PlainTextOutputFormat(); return PlainTextOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {boolean}
     */
    public isOutputFormatMixingAllowed() : boolean {
        return false;
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "plainText";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return "text/plain";
    }
}
PlainTextOutputFormat["__class"] = "freemarker.core.PlainTextOutputFormat";





PlainTextOutputFormat.INSTANCE_$LI$();
