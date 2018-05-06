/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Writer} from '../../java/io/Writer';
import {CommonTemplateMarkupOutputModel} from './CommonTemplateMarkupOutputModel';
import {MarkupOutputFormat} from './MarkupOutputFormat';

/**
 * Common superclass for implementing {link MarkupOutputFormat}-s that use a {link CommonTemplateMarkupOutputModel}
 * subclass.
 * 
 * @since 2.3.24
 * @extends MarkupOutputFormat
 * @class
 */
export abstract class CommonMarkupOutputFormat<MO extends CommonTemplateMarkupOutputModel<any>> extends MarkupOutputFormat<MO> {
    constructor() {
        super();
    }

    /**
     * 
     * @param {String} textToEsc
     * @return {CommonTemplateMarkupOutputModel}
     */
    public fromPlainTextByEscaping(textToEsc : string) : MO {
        return this.newTemplateMarkupOutputModel(textToEsc, null);
    }

    /**
     * 
     * @param {String} markupText
     * @return {CommonTemplateMarkupOutputModel}
     */
    public fromMarkup(markupText : string) : MO {
        return this.newTemplateMarkupOutputModel(null, markupText);
    }

    public output$freemarker_core_CommonTemplateMarkupOutputModel$java_io_Writer(mo : MO, out : Writer) {
        let mc : string = mo.getMarkupContent();
        if(mc != null) {
            out.write(mc);
        } else {
            this.output$java_lang_String$java_io_Writer(mo.getPlainTextContent(), out);
        }
    }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @param {Writer} out
     */
    public output(mo? : any, out? : any) : any {
        if(((mo != null) || mo === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>this.output$freemarker_core_CommonTemplateMarkupOutputModel$java_io_Writer(mo, out);
        } else if(((typeof mo === 'string') || mo === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>this.output$java_lang_String$java_io_Writer(mo, out);
        } else if(((mo != null) || mo === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>this.output$freemarker_core_TemplateMarkupOutputModel$java_io_Writer(mo, out);
        } else throw new Error('invalid overload');
    }

    public output$java_lang_String$java_io_Writer(textToEsc : string, out : Writer) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    public getSourcePlainText$freemarker_core_CommonTemplateMarkupOutputModel(mo : MO) : string {
        return mo.getPlainTextContent();
    }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @return {String}
     */
    public getSourcePlainText(mo? : any) : any {
        if(((mo != null) || mo === null)) {
            return <any>this.getSourcePlainText$freemarker_core_CommonTemplateMarkupOutputModel(mo);
        } else if(((mo != null) || mo === null)) {
            return <any>this.getSourcePlainText$freemarker_core_TemplateMarkupOutputModel(mo);
        } else throw new Error('invalid overload');
    }

    public getMarkupString$freemarker_core_CommonTemplateMarkupOutputModel(mo : MO) : string {
        let mc : string = mo.getMarkupContent();
        if(mc != null) {
            return mc;
        }
        mc = this.escapePlainText(mo.getPlainTextContent());
        mo.setMarkupContet(mc);
        return mc;
    }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @return {String}
     */
    public getMarkupString(mo? : any) : any {
        if(((mo != null) || mo === null)) {
            return <any>this.getMarkupString$freemarker_core_CommonTemplateMarkupOutputModel(mo);
        } else if(((mo != null) || mo === null)) {
            return <any>this.getMarkupString$freemarker_core_TemplateMarkupOutputModel(mo);
        } else throw new Error('invalid overload');
    }

    public concat$freemarker_core_CommonTemplateMarkupOutputModel$freemarker_core_CommonTemplateMarkupOutputModel(mo1 : MO, mo2 : MO) : MO {
        let pc1 : string = mo1.getPlainTextContent();
        let mc1 : string = mo1.getMarkupContent();
        let pc2 : string = mo2.getPlainTextContent();
        let mc2 : string = mo2.getMarkupContent();
        let pc3 : string = pc1 != null && pc2 != null?pc1 + pc2:null;
        let mc3 : string = mc1 != null && mc2 != null?mc1 + mc2:null;
        if(pc3 != null || mc3 != null) {
            return this.newTemplateMarkupOutputModel(pc3, mc3);
        }
        if(pc1 != null) {
            return this.newTemplateMarkupOutputModel(null, this.getMarkupString(mo1) + mc2);
        } else {
            return this.newTemplateMarkupOutputModel(null, mc1 + this.getMarkupString(mo2));
        }
    }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo1
     * @param {CommonTemplateMarkupOutputModel} mo2
     * @return {CommonTemplateMarkupOutputModel}
     */
    public concat(mo1? : any, mo2? : any) : any {
        if(((mo1 != null) || mo1 === null) && ((mo2 != null) || mo2 === null)) {
            return <any>this.concat$freemarker_core_CommonTemplateMarkupOutputModel$freemarker_core_CommonTemplateMarkupOutputModel(mo1, mo2);
        } else if(((mo1 != null) || mo1 === null) && ((mo2 != null) || mo2 === null)) {
            return <any>this.concat$freemarker_core_TemplateMarkupOutputModel$freemarker_core_TemplateMarkupOutputModel(mo1, mo2);
        } else throw new Error('invalid overload');
    }

    public isEmpty$freemarker_core_CommonTemplateMarkupOutputModel(mo : MO) : boolean {
        let s : string = mo.getPlainTextContent();
        if(s != null) {
            return s.length === 0;
        }
        return mo.getMarkupContent().length === 0;
    }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @return {boolean}
     */
    public isEmpty(mo? : any) : any {
        if(((mo != null) || mo === null)) {
            return <any>this.isEmpty$freemarker_core_CommonTemplateMarkupOutputModel(mo);
        } else if(((mo != null) || mo === null)) {
            return <any>this.isEmpty$freemarker_core_TemplateMarkupOutputModel(mo);
        } else throw new Error('invalid overload');
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
     * @return {boolean}
     */
    public isAutoEscapedByDefault() : boolean {
        return true;
    }

    /**
     * Creates a new {link CommonTemplateMarkupOutputModel} that's bound to this {link OutputFormat} instance.
     * @param {String} plainTextContent
     * @param {String} markupContent
     * @return {CommonTemplateMarkupOutputModel}
     */
    abstract newTemplateMarkupOutputModel(plainTextContent : string, markupContent : string) : MO;
}
CommonMarkupOutputFormat["__class"] = "freemarker.core.CommonMarkupOutputFormat";



