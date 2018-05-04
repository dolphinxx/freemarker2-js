/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { StringUtil } from '../template/utility/StringUtil';
import { Writer } from '../../java/io/Writer';
import { CommonMarkupOutputFormat } from './CommonMarkupOutputFormat';
import { TemplateXHTMLOutputModel } from './TemplateXHTMLOutputModel';

/**
 * Represents the XML output format (MIME type "application/xhtml+xml", name "XHTML"). This format escapes by default
 * (via {link StringUtil#XHTMLEnc(String)}). The {@code ?xml} built-in silently bypasses template output values of the
 * type produced by this output format ({link TemplateXHTMLOutputModel}).
 * 
 * @since 2.3.24
 * @extends CommonMarkupOutputFormat
 * @class
 */
export class XHTMLOutputFormat extends CommonMarkupOutputFormat<TemplateXHTMLOutputModel> {
    /**
     * The only instance (singleton) of this {link OutputFormat}.
     */
    public static INSTANCE : XHTMLOutputFormat; public static INSTANCE_$LI$() : XHTMLOutputFormat { if(XHTMLOutputFormat.INSTANCE == null) XHTMLOutputFormat.INSTANCE = new XHTMLOutputFormat(); return XHTMLOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "XHTML";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return "application/xhtml+xml";
    }

    public output$java_lang_String$java_io_Writer(textToEsc : string, out : Writer) {
        StringUtil.XHTMLEnc$java_lang_String$java_io_Writer(textToEsc, out);
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
        return StringUtil.XHTMLEnc$java_lang_String(plainTextContent);
    }

    /**
     * 
     * @param {String} builtInName
     * @return {boolean}
     */
    public isLegacyBuiltInBypassed(builtInName : string) : boolean {
        return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(builtInName,"html")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(builtInName,"xml")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(builtInName,"xhtml"));
    }

    /**
     * 
     * @param {String} plainTextContent
     * @param {String} markupContent
     * @return {TemplateXHTMLOutputModel}
     */
    newTemplateMarkupOutputModel(plainTextContent : string, markupContent : string) : TemplateXHTMLOutputModel {
        return new TemplateXHTMLOutputModel(plainTextContent, markupContent);
    }
}
XHTMLOutputFormat["__class"] = "freemarker.core.XHTMLOutputFormat";



var __Function = Function;

XHTMLOutputFormat.INSTANCE_$LI$();
