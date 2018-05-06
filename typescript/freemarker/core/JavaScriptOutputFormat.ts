/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {OutputFormat} from './OutputFormat';

/**
 * Represents the JavaScript output format (MIME type "application/javascript", name "JavaScript"). This format doesn't
 * support escaping.
 * 
 * @since 2.3.24
 * @extends OutputFormat
 * @class
 */
export class JavaScriptOutputFormat extends OutputFormat {
    /**
     * The only instance (singleton) of this {link OutputFormat}.
     */
    public static INSTANCE : JavaScriptOutputFormat; public static INSTANCE_$LI$() : JavaScriptOutputFormat { if(JavaScriptOutputFormat.INSTANCE == null) JavaScriptOutputFormat.INSTANCE = new JavaScriptOutputFormat(); return JavaScriptOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "JavaScript";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return "application/javascript";
    }

    /**
     * 
     * @return {boolean}
     */
    public isOutputFormatMixingAllowed() : boolean {
        return false;
    }
}
JavaScriptOutputFormat["__class"] = "freemarker.core.JavaScriptOutputFormat";





JavaScriptOutputFormat.INSTANCE_$LI$();
