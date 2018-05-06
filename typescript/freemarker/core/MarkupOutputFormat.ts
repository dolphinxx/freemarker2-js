/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Writer} from '../../java/io/Writer';
import {TemplateMarkupOutputModel} from './TemplateMarkupOutputModel';
import {OutputFormat} from './OutputFormat';

/**
 * Superclass of {link OutputFormat}-s that represent a "markup" format, which is any format where certain character
 * sequences have special meaning and thus may need escaping. (Escaping is important for FreeMarker, as typically it has
 * to insert non-markup text from the data-model into the output markup. See also:
 * {link Configuration#setOutputFormat(OutputFormat)}.)
 * <p>
 * <p>
 * A {link MarkupOutputFormat} subclass always has a corresponding {link TemplateMarkupOutputModel} subclass pair
 * (like {link HTMLOutputFormat} has {link TemplateHTMLOutputModel}). The {link OutputFormat} implements the
 * operations related to {link TemplateMarkupOutputModel} objects of that kind, while the
 * {link TemplateMarkupOutputModel} only encapsulates the data (the actual markup or text).
 * <p>
 * <p>
 * To implement a custom output format, you may want to extend {link CommonMarkupOutputFormat}.
 * 
 * @param <MO> The {link TemplateMarkupOutputModel} class this output format can deal with.
 * @since 2.3.24
 * @extends OutputFormat
 * @class
 */
export abstract class MarkupOutputFormat<MO extends TemplateMarkupOutputModel<any>> extends OutputFormat {
    constructor() {
        super();
    }

    /**
     * Converts a {link String} that's assumed to be plain text to {link TemplateMarkupOutputModel}, by escaping any
     * special characters in the plain text. This corresponds to {@code ?esc}, or, to outputting with auto-escaping if
     * that wasn't using {link #output(String, Writer)} as an optimization.
     * <p>
     * see #escapePlainText(String)
     * see #getSourcePlainText(TemplateMarkupOutputModel)
     * @param {String} textToEsc
     * @return {*}
     */
    public abstract fromPlainTextByEscaping(textToEsc : string) : MO;

    /**
     * Wraps a {link String} that's already markup to {link TemplateMarkupOutputModel} interface, to indicate its
     * format. This corresponds to {@code ?noEsc}. (This methods is allowed to throw {link TemplateModelException} if
     * the parameter markup text is malformed, but it's unlikely that an implementation chooses to parse the parameter
     * until, and if ever, that becomes necessary.)
     * <p>
     * see #getMarkupString(TemplateMarkupOutputModel)
     * @param {String} markupText
     * @return {*}
     */
    public abstract fromMarkup(markupText : string) : MO;

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @param {Writer} out
     */
    public output(mo? : any, out? : any) : any {
        if(((mo != null) || mo === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>this.output$freemarker_core_TemplateMarkupOutputModel$java_io_Writer(mo, out);
        } else if(((typeof mo === 'string') || mo === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>this.output$java_lang_String$java_io_Writer(mo, out);
        } else throw new Error('invalid overload');
    }

    public output$freemarker_core_TemplateMarkupOutputModel$java_io_Writer(mo : MO, out : Writer) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    public output$java_lang_String$java_io_Writer(textToEsc : string, out : Writer) { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @return {String}
     */
    public getSourcePlainText(mo? : any) : any {
        if(((mo != null) || mo === null)) {
            return <any>this.getSourcePlainText$freemarker_core_TemplateMarkupOutputModel(mo);
        } else throw new Error('invalid overload');
    }

    public getSourcePlainText$freemarker_core_TemplateMarkupOutputModel(mo : MO) : string { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @return {String}
     */
    public getMarkupString(mo? : any) : any {
        if(((mo != null) || mo === null)) {
            return <any>this.getMarkupString$freemarker_core_TemplateMarkupOutputModel(mo);
        } else throw new Error('invalid overload');
    }

    public getMarkupString$freemarker_core_TemplateMarkupOutputModel(mo : MO) : string { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo1
     * @param {CommonTemplateMarkupOutputModel} mo2
     * @return {CommonTemplateMarkupOutputModel}
     */
    public concat(mo1? : any, mo2? : any) : any {
        if(((mo1 != null) || mo1 === null) && ((mo2 != null) || mo2 === null)) {
            return <any>this.concat$freemarker_core_TemplateMarkupOutputModel$freemarker_core_TemplateMarkupOutputModel(mo1, mo2);
        } else throw new Error('invalid overload');
    }

    public concat$freemarker_core_TemplateMarkupOutputModel$freemarker_core_TemplateMarkupOutputModel(mo1 : MO, mo2 : MO) : MO { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    /**
     * Should give the same result as {link #fromPlainTextByEscaping(String)} and then
     * {link #getMarkupString(TemplateMarkupOutputModel)}, but the implementation may uses a more efficient solution.
     * @param {String} plainTextContent
     * @return {String}
     */
    public abstract escapePlainText(plainTextContent : string) : string;

    /**
     * 
     * @param {CommonTemplateMarkupOutputModel} mo
     * @return {boolean}
     */
    public isEmpty(mo? : any) : any {
        if(((mo != null) || mo === null)) {
            return <any>this.isEmpty$freemarker_core_TemplateMarkupOutputModel(mo);
        } else throw new Error('invalid overload');
    }

    public isEmpty$freemarker_core_TemplateMarkupOutputModel(mo : MO) : boolean { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    /**
     * Tells if a string built-in that can't handle a {link TemplateMarkupOutputModel} left hand operand can bypass
     * this object as is. A typical such case would be when a {link TemplateHTMLOutputModel} of "HTML" format bypasses
     * {@code ?html}.
     * @param {String} builtInName
     * @return {boolean}
     */
    public abstract isLegacyBuiltInBypassed(builtInName : string) : boolean;

    /**
     * Tells if by default auto-escaping should be on for this format. It should be {@code true} if you need to escape
     * on most of the places where you insert values.
     * <p>
     * see Configuration#setAutoEscapingPolicy(int)
     * @return {boolean}
     */
    public abstract isAutoEscapedByDefault() : boolean;
}
MarkupOutputFormat["__class"] = "freemarker.core.MarkupOutputFormat";




