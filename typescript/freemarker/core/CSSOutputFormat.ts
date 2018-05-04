/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { OutputFormat } from './OutputFormat';

/**
 * Represents the CSS output format (MIME type "text/css", name "CSS"). This format doesn't support escaping.
 * 
 * @since 2.3.24
 * @extends OutputFormat
 * @class
 */
export class CSSOutputFormat extends OutputFormat {
    /**
     * The only instance (singleton) of this {link OutputFormat}.
     */
    public static INSTANCE : CSSOutputFormat; public static INSTANCE_$LI$() : CSSOutputFormat { if(CSSOutputFormat.INSTANCE == null) CSSOutputFormat.INSTANCE = new CSSOutputFormat(); return CSSOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "CSS";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return "text/css";
    }

    /**
     * 
     * @return {boolean}
     */
    public isOutputFormatMixingAllowed() : boolean {
        return false;
    }
}
CSSOutputFormat["__class"] = "freemarker.core.CSSOutputFormat";




CSSOutputFormat.INSTANCE_$LI$();
