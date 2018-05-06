/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from '../template/utility/StringUtil';
import {Writer} from '../../java/io/Writer';
import {CommonMarkupOutputFormat} from './CommonMarkupOutputFormat';
import {TemplateHTMLOutputModel} from './TemplateHTMLOutputModel';

/**
 * Represents the HTML output format (MIME type "text/html", name "HTML"). This format escapes by default (via
 * {link StringUtil#XHTMLEnc(String)}). The {@code ?html}, {@code ?xhtml} and {@code ?xml} built-ins silently bypass
 * template output values of the type produced by this output format ({link TemplateHTMLOutputModel}).
 * 
 * @since 2.3.24
 * @extends CommonMarkupOutputFormat
 * @class
 */
export class HTMLOutputFormat extends CommonMarkupOutputFormat<TemplateHTMLOutputModel> {
    /**
     * The only instance (singleton) of this {link OutputFormat}.
     */
    public static INSTANCE : HTMLOutputFormat; public static INSTANCE_$LI$() : HTMLOutputFormat { if(HTMLOutputFormat.INSTANCE == null) HTMLOutputFormat.INSTANCE = new HTMLOutputFormat(); return HTMLOutputFormat.INSTANCE; };

    constructor() {
        super();
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return "HTML";
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return "text/html";
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
     * @return {TemplateHTMLOutputModel}
     */
    newTemplateMarkupOutputModel(plainTextContent : string, markupContent : string) : TemplateHTMLOutputModel {
        return new TemplateHTMLOutputModel(plainTextContent, markupContent);
    }
}
HTMLOutputFormat["__class"] = "freemarker.core.HTMLOutputFormat";





HTMLOutputFormat.INSTANCE_$LI$();
