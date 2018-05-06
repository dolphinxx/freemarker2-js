/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../template/Configuration';
import {StringUtil} from '../template/utility/StringUtil';
import {Writer} from '../../java/io/Writer';
import {Interpolation} from './Interpolation';
import {Expression} from './Expression';
import {OutputFormat} from './OutputFormat';
import {MarkupOutputFormat} from './MarkupOutputFormat';
import {TemplateElement} from './TemplateElement';
import {Environment} from './Environment';
import {TemplateMarkupOutputModel} from './TemplateMarkupOutputModel';
import {_TemplateModelException} from './_TemplateModelException';
import {_DelayedToString} from './_DelayedToString';
import {EvalUtil} from './EvalUtil';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * An interpolation like <code>${exp}</code> or {@code [=exp]}. The class name is the remnant of old times, but as
 * some users are using the package-visible AST API, it wasn't renamed.
 * <p>
 * see NumericalOutput
 * @extends Interpolation
 * @class
 */
export class DollarVariable extends Interpolation {
    /*private*/ expression : Expression;

    /**
     * For {@code #escape x as ...} (legacy auto-escaping)
     */
    /*private*/ escapedExpression : Expression;

    /**
     * For OutputFormat-based auto-escaping
     */
    /*private*/ outputFormat : OutputFormat;

    /*private*/ markupOutputFormat : MarkupOutputFormat<any>;

    /*private*/ autoEscape : boolean;

    constructor(expression : Expression, escapedExpression : Expression, outputFormat : OutputFormat, autoEscape : boolean) {
        super();
        if(this.expression===undefined) this.expression = null;
        if(this.escapedExpression===undefined) this.escapedExpression = null;
        if(this.outputFormat===undefined) this.outputFormat = null;
        if(this.markupOutputFormat===undefined) this.markupOutputFormat = null;
        if(this.autoEscape===undefined) this.autoEscape = false;
        this.expression = expression;
        this.escapedExpression = escapedExpression;
        this.outputFormat = outputFormat;
        this.markupOutputFormat = <MarkupOutputFormat<any>>((outputFormat != null && outputFormat instanceof <any>MarkupOutputFormat)?outputFormat:null);
        this.autoEscape = autoEscape;
    }

    /**
     * Outputs the string value of the enclosed expression.
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let moOrStr : any = this.calculateInterpolatedStringOrMarkup(env);
        let out : Writer = env.getOut();
        if(typeof moOrStr === 'string') {
            let s : string = <string>moOrStr;
            if(this.autoEscape) {
                this.markupOutputFormat.output$java_lang_String$java_io_Writer(s, out);
            } else {
                out.write(s);
            }
        } else {
            let mo : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>moOrStr;
            let moOF : MarkupOutputFormat<any> = mo.getOutputFormat();
            if(moOF !== this.outputFormat && !this.outputFormat.isOutputFormatMixingAllowed()) {
                let srcPlainText : string;
                srcPlainText = moOF.getSourcePlainText(mo);
                if(srcPlainText == null) {
                    throw new _TemplateModelException(this.escapedExpression, "The value to print is in ", new _DelayedToString(moOF), " format, which differs from the current output format, ", new _DelayedToString(this.outputFormat), ". Format conversion wasn\'t possible.");
                }
                if(this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat) {
                    (<MarkupOutputFormat<any>>this.outputFormat).output$java_lang_String$java_io_Writer(srcPlainText, out);
                } else {
                    out.write(srcPlainText);
                }
            } else {
                moOF.output(mo, out);
            }
        }
        return null;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Object}
     */
    calculateInterpolatedStringOrMarkup(env : /*Environment*/any) : any {
        return EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(this.escapedExpression.eval(env), this.escapedExpression, null, env);
    }

    public dump$boolean$boolean(canonical : boolean, inStringLiteral : boolean) : string {
        let sb : StringBuilder = new StringBuilder("");
        let syntax : number = this.getTemplate().getInterpolationSyntax();
        sb.append(syntax !== Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX?"${":"[=");
        let exprCF : string = this.expression.getCanonicalForm();
        sb.append(inStringLiteral?StringUtil.FTLStringLiteralEnc$java_lang_String$char(exprCF, '\"'):exprCF);
        sb.append(syntax !== Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX?"}":"]");
        if(!canonical && this.expression !== this.escapedExpression) {
            sb.append(" auto-escaped");
        }
        return sb.toString();
    }

    /**
     * 
     * @param {boolean} canonical
     * @param {boolean} inStringLiteral
     * @return {String}
     */
    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && ((typeof inStringLiteral === 'boolean') || inStringLiteral === null)) {
            return <any>this.dump$boolean$boolean(canonical, inStringLiteral);
        } else if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "${...}";
    }

    /**
     * 
     * @return {boolean}
     */
    heedsOpeningWhitespace() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    heedsTrailingWhitespace() : boolean {
        return true;
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return this.expression;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return ParameterRole.CONTENT_$LI$();
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
DollarVariable["__class"] = "freemarker.core.DollarVariable";



