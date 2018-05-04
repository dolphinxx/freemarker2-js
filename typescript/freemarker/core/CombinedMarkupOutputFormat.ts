/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModelException } from '../template/TemplateModelException';
import { Writer } from '../../java/io/Writer';
import { CommonMarkupOutputFormat } from './CommonMarkupOutputFormat';
import { TemplateCombinedMarkupOutputModel } from './TemplateCombinedMarkupOutputModel';
import { MarkupOutputFormat } from './MarkupOutputFormat';

/**
 * @param {String} name Maybe {@code null}, in which case it defaults to
 * <code>outer.getName() + "{" + inner.getName() + "}"</code>.
 * @param {MarkupOutputFormat} outer
 * @param {MarkupOutputFormat} inner
 * @class
 * @extends CommonMarkupOutputFormat
 */
export class CombinedMarkupOutputFormat extends CommonMarkupOutputFormat<TemplateCombinedMarkupOutputModel> {
    /*private*/ name : string;

    /*private*/ outer : MarkupOutputFormat<any>;

    /*private*/ inner : MarkupOutputFormat<any>;

    public constructor(name? : any, outer? : any, inner? : any) {
        if(((typeof name === 'string') || name === null) && ((outer != null && outer instanceof <any>MarkupOutputFormat) || outer === null) && ((inner != null && inner instanceof <any>MarkupOutputFormat) || inner === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.name===undefined) this.name = null;
            if(this.outer===undefined) this.outer = null;
            if(this.inner===undefined) this.inner = null;
            if(this.name===undefined) this.name = null;
            if(this.outer===undefined) this.outer = null;
            if(this.inner===undefined) this.inner = null;
            (() => {
                this.name = name != null?null:outer.getName() + "{" + inner.getName() + "}";
                this.outer = outer;
                this.inner = inner;
            })();
        } else if(((name != null && name instanceof <any>MarkupOutputFormat) || name === null) && ((outer != null && outer instanceof <any>MarkupOutputFormat) || outer === null) && inner === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let outer : any = __args[0];
            let inner : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let name : any = null;
                super();
                if(this.name===undefined) this.name = null;
                if(this.outer===undefined) this.outer = null;
                if(this.inner===undefined) this.inner = null;
                if(this.name===undefined) this.name = null;
                if(this.outer===undefined) this.outer = null;
                if(this.inner===undefined) this.inner = null;
                (() => {
                    this.name = name != null?null:outer.getName() + "{" + inner.getName() + "}";
                    this.outer = outer;
                    this.inner = inner;
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @return {String}
     */
    public getName() : string {
        return this.name;
    }

    /**
     * 
     * @return {String}
     */
    public getMimeType() : string {
        return this.outer.getMimeType();
    }

    public output$java_lang_String$java_io_Writer(textToEsc : string, out : Writer) {
        this.outer.output$java_lang_String$java_io_Writer(this.inner.escapePlainText(textToEsc), out);
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
        return this.outer.escapePlainText(this.inner.escapePlainText(plainTextContent));
    }

    /**
     * 
     * @param {String} builtInName
     * @return {boolean}
     */
    public isLegacyBuiltInBypassed(builtInName : string) : boolean {
        return this.outer.isLegacyBuiltInBypassed(builtInName);
    }

    /**
     * 
     * @return {boolean}
     */
    public isAutoEscapedByDefault() : boolean {
        return this.outer.isAutoEscapedByDefault();
    }

    /**
     * 
     * @return {boolean}
     */
    public isOutputFormatMixingAllowed() : boolean {
        return this.outer.isOutputFormatMixingAllowed();
    }

    public getOuterOutputFormat() : MarkupOutputFormat<any> {
        return this.outer;
    }

    public getInnerOutputFormat() : MarkupOutputFormat<any> {
        return this.inner;
    }

    /**
     * 
     * @param {String} plainTextContent
     * @param {String} markupContent
     * @return {TemplateCombinedMarkupOutputModel}
     */
    newTemplateMarkupOutputModel(plainTextContent : string, markupContent : string) : TemplateCombinedMarkupOutputModel {
        return new TemplateCombinedMarkupOutputModel(plainTextContent, markupContent, this);
    }
}
CombinedMarkupOutputFormat["__class"] = "freemarker.core.CombinedMarkupOutputFormat";



