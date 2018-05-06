/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {OutputFormat} from './OutputFormat';

/**
 * Represents the JSON output format (MIME type "application/json", name "JSON"). This format doesn't support escaping.
 * 
 * @since 2.3.24
 * @extends OutputFormat
 * @class
 */
export class JSONOutputFormat extends OutputFormat {
    /**
     * The only instance (singleton) of this {link OutputFormat}.
     */
    public static INSTANCE : JSONOutputFormat; public static INSTANCE_$LI$() : JSONOutputFormat { if(JSONOutputFormat.INSTANCE == null) JSONOutputFormat.INSTANCE = new JSONOutputFormat(); return JSONOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "JSON";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return "application/json";
    }

    /**
     * 
     * @return {boolean}
     */
    public isOutputFormatMixingAllowed() : boolean {
        return false;
    }
}
JSONOutputFormat["__class"] = "freemarker.core.JSONOutputFormat";





JSONOutputFormat.INSTANCE_$LI$();
