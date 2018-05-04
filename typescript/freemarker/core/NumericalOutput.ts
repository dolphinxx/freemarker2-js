/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { StringUtil } from '../template/utility/StringUtil';
import { Writer } from '../../java/io/Writer';
import { Interpolation } from './Interpolation';
import { Expression } from './Expression';
import { MarkupOutputFormat } from './MarkupOutputFormat';
import { TemplateElement } from './TemplateElement';
import { Environment } from './Environment';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { ParameterRole } from './ParameterRole';

/**
 * An interpolation like <code>#{numericalExp; format}</code>; it's deprecated, but still supported. The class name is
 * the remnant of old times, but as some users are using the package-visible AST API, it wasn't renamed.
 * <p>
 * see DollarVariable
 * @extends Interpolation
 * @class
 */
export class NumericalOutput extends Interpolation {
    /*private*/ expression : Expression;

    /*private*/ hasFormat : boolean;

    /*private*/ minFracDigits : number;

    /*private*/ maxFracDigits : number;

    /**
     * For OutputFormat-based auto-escaping
     */
    /*private*/ autoEscapeOutputFormat : MarkupOutputFormat<any>;

    /*private*/ formatCache : NumericalOutput.FormatHolder;

    public constructor(expression? : any, minFracDigits? : any, maxFracDigits? : any, autoEscapeOutputFormat? : any) {
        if(((expression != null && expression instanceof <any>Expression) || expression === null) && ((typeof minFracDigits === 'number') || minFracDigits === null) && ((typeof maxFracDigits === 'number') || maxFracDigits === null) && ((autoEscapeOutputFormat != null && autoEscapeOutputFormat instanceof <any>MarkupOutputFormat) || autoEscapeOutputFormat === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.expression===undefined) this.expression = null;
            if(this.hasFormat===undefined) this.hasFormat = false;
            if(this.minFracDigits===undefined) this.minFracDigits = 0;
            if(this.maxFracDigits===undefined) this.maxFracDigits = 0;
            if(this.autoEscapeOutputFormat===undefined) this.autoEscapeOutputFormat = null;
            if(this.formatCache===undefined) this.formatCache = null;
            if(this.expression===undefined) this.expression = null;
            if(this.hasFormat===undefined) this.hasFormat = false;
            if(this.minFracDigits===undefined) this.minFracDigits = 0;
            if(this.maxFracDigits===undefined) this.maxFracDigits = 0;
            if(this.autoEscapeOutputFormat===undefined) this.autoEscapeOutputFormat = null;
            if(this.formatCache===undefined) this.formatCache = null;
            (() => {
                this.expression = expression;
                this.hasFormat = true;
                this.minFracDigits = minFracDigits;
                this.maxFracDigits = maxFracDigits;
                this.autoEscapeOutputFormat = autoEscapeOutputFormat;
            })();
        } else if(((expression != null && expression instanceof <any>Expression) || expression === null) && ((minFracDigits != null && minFracDigits instanceof <any>MarkupOutputFormat) || minFracDigits === null) && maxFracDigits === undefined && autoEscapeOutputFormat === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let autoEscapeOutputFormat : any = __args[1];
            super();
            if(this.expression===undefined) this.expression = null;
            if(this.hasFormat===undefined) this.hasFormat = false;
            if(this.minFracDigits===undefined) this.minFracDigits = 0;
            if(this.maxFracDigits===undefined) this.maxFracDigits = 0;
            if(this.autoEscapeOutputFormat===undefined) this.autoEscapeOutputFormat = null;
            if(this.formatCache===undefined) this.formatCache = null;
            if(this.expression===undefined) this.expression = null;
            if(this.hasFormat===undefined) this.hasFormat = false;
            if(this.minFracDigits===undefined) this.minFracDigits = 0;
            if(this.maxFracDigits===undefined) this.maxFracDigits = 0;
            if(this.autoEscapeOutputFormat===undefined) this.autoEscapeOutputFormat = null;
            if(this.formatCache===undefined) this.formatCache = null;
            (() => {
                this.expression = expression;
                this.hasFormat = false;
                this.minFracDigits = 0;
                this.maxFracDigits = 0;
                this.autoEscapeOutputFormat = autoEscapeOutputFormat;
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let s : string = this.calculateInterpolatedStringOrMarkup(env);
        let out : Writer = env.getOut();
        if(this.autoEscapeOutputFormat != null) {
            this.autoEscapeOutputFormat.output$java_lang_String$java_io_Writer(s, out);
        } else {
            out.write(s);
        }
        return null;
    }

    /**
     * 
     * @param {Environment} env
     * @return {String}
     */
    calculateInterpolatedStringOrMarkup(env : Environment) : string {
        let num : number = this.expression.evalToNumber(env);
        let fmth : NumericalOutput.FormatHolder = this.formatCache;
        if(fmth == null || !fmth.locale.equals(env.getLocale())) {
            {
                fmth = this.formatCache;
                if(fmth == null || !fmth.locale.equals(env.getLocale())) {
                    let fmt : NumberFormat = NumberFormat.getNumberInstance(env.getLocale());
                    if(this.hasFormat) {
                        fmt.setMinimumFractionDigits(this.minFracDigits);
                        fmt.setMaximumFractionDigits(this.maxFracDigits);
                    } else {
                        fmt.setMinimumFractionDigits(0);
                        fmt.setMaximumFractionDigits(50);
                    }
                    fmt.setGroupingUsed(false);
                    this.formatCache = new NumericalOutput.FormatHolder(fmt, env.getLocale());
                    fmth = this.formatCache;
                }
            };
        }
        let s : string = fmth.format.format(num);
        return s;
    }

    public dump$boolean$boolean(canonical : boolean, inStringLiteral : boolean) : string {
        let buf : StringBuilder = new StringBuilder("#{");
        let exprCF : string = this.expression.getCanonicalForm();
        buf.append(inStringLiteral?StringUtil.FTLStringLiteralEnc$java_lang_String$char(exprCF, '\"'):exprCF);
        if(this.hasFormat) {
            buf.append(" ; ");
            buf.append("m");
            buf.append(this.minFracDigits);
            buf.append("M");
            buf.append(this.maxFracDigits);
        }
        buf.append("}");
        return buf.toString();
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
        return "#{...}";
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
        return 3;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.expression;
        case 1:
            return this.hasFormat?this.minFracDigits:null;
        case 2:
            return this.hasFormat?this.maxFracDigits:null;
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        switch((idx)) {
        case 0:
            return ParameterRole.CONTENT_$LI$();
        case 1:
            return ParameterRole.MINIMUM_DECIMALS_$LI$();
        case 2:
            return ParameterRole.MAXIMUM_DECIMALS_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
NumericalOutput["__class"] = "freemarker.core.NumericalOutput";


export namespace NumericalOutput {

    export class FormatHolder {
        format : NumberFormat;

        locale : string;

        constructor(format : NumberFormat, locale : string) {
            if(this.format===undefined) this.format = null;
            if(this.locale===undefined) this.locale = null;
            this.format = format;
            this.locale = locale;
        }
    }
    FormatHolder["__class"] = "freemarker.core.NumericalOutput.FormatHolder";

}



var __Function = Function;
