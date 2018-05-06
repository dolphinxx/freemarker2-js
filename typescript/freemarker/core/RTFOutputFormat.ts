/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from '../template/utility/StringUtil';
import {Writer} from '../../java/io/Writer';
import {CommonMarkupOutputFormat} from './CommonMarkupOutputFormat';
import {TemplateRTFOutputModel} from './TemplateRTFOutputModel';

/**
 * Represents the Rich Text Format output format (MIME type "application/rtf", name "RTF"). This format escapes by
 * default (via {link StringUtil#RTFEnc(String)}). The {@code ?rtf} built-in silently bypasses template output values
 * of the type produced by this output format ({link TemplateRTFOutputModel}).
 * 
 * @since 2.3.24
 * @extends CommonMarkupOutputFormat
 * @class
 */
export class RTFOutputFormat extends CommonMarkupOutputFormat<TemplateRTFOutputModel> {
    /**
     * The only instance (singleton) of this {link OutputFormat}.
     */
    public static INSTANCE : RTFOutputFormat; public static INSTANCE_$LI$() : RTFOutputFormat { if(RTFOutputFormat.INSTANCE == null) RTFOutputFormat.INSTANCE = new RTFOutputFormat(); return RTFOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "RTF";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return "application/rtf";
    }

    public output$java_lang_String$java_io_Writer(textToEsc : string, out : Writer) {
        StringUtil.RTFEnc$java_lang_String$java_io_Writer(textToEsc, out);
    }

    /**
     * 
     * @param {String} textToEsc
     * @param {Writer} out
     */
    public output(textToEsc? : any, out? : any) : any {
        if(((typeof textToEsc === 'string') || textToEsc === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>this.output$java_lang_String$java_io_Writer(textToEsc, out);
        } else if(((textToEsc != null) || textToEsc === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            super.output(textToEsc, out);
        } else if(((textToEsc != null) || textToEsc === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>this.output$freemarker_core_TemplateMarkupOutputModel$java_io_Writer(textToEsc, out);
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {String} plainTextContent
     * @return {String}
     */
    public escapePlainText(plainTextContent : string) : string {
        return StringUtil.RTFEnc$java_lang_String(plainTextContent);
    }

    /**
     * 
     * @param {String} builtInName
     * @return {boolean}
     */
    public isLegacyBuiltInBypassed(builtInName : string) : boolean {
        return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(builtInName,"rtf"));
    }

    /**
     * 
     * @param {String} plainTextContent
     * @param {String} markupContent
     * @return {TemplateRTFOutputModel}
     */
    newTemplateMarkupOutputModel(plainTextContent : string, markupContent : string) : TemplateRTFOutputModel {
        return new TemplateRTFOutputModel(plainTextContent, markupContent);
    }
}
RTFOutputFormat["__class"] = "freemarker.core.RTFOutputFormat";





RTFOutputFormat.INSTANCE_$LI$();
