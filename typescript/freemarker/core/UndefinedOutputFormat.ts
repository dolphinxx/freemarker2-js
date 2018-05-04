/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { OutputFormat } from './OutputFormat';

/**
 * Represents the output format used when the template output format is undecided. This is the default output format if
 * FreeMarker can't select anything more specific (see
 * {link Configuration#setTemplateConfigurations(freemarker.cache.TemplateConfigurationFactory)}). This format doesn't
 * support auto-escaping ({link Configuration#setAutoEscapingPolicy(int)}). It will print
 * {link TemplateMarkupOutputModel}-s as is (doesn't try to convert them).
 * <p>
 * see PlainTextOutputFormat
 * 
 * @since 2.3.24
 * @extends OutputFormat
 * @class
 */
export class UndefinedOutputFormat extends OutputFormat {
    public static INSTANCE : UndefinedOutputFormat; public static INSTANCE_$LI$() : UndefinedOutputFormat { if(UndefinedOutputFormat.INSTANCE == null) UndefinedOutputFormat.INSTANCE = new UndefinedOutputFormat(); return UndefinedOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {boolean}
     */
    public isOutputFormatMixingAllowed() : boolean {
        return true;
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "undefined";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return null;
    }
}
UndefinedOutputFormat["__class"] = "freemarker.core.UndefinedOutputFormat";



var __Function = Function;

UndefinedOutputFormat.INSTANCE_$LI$();
