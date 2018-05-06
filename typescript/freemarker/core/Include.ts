/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Template} from '../template/Template';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {StringUtil} from '../template/utility/StringUtil';
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {ParseException} from './ParseException';
import {BugException} from './BugException';
import {StringLiteral} from './StringLiteral';
import {Environment} from './Environment';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_DelayedJQuote} from './_DelayedJQuote';
import {EvalUtil} from './EvalUtil';
import {_DelayedGetMessage} from './_DelayedGetMessage';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * An instruction that gets another template
 * and processes it within the current template.
 * @extends TemplateElement
 * @class
 */
export class Include extends TemplateElement {
    /*private*/ includedTemplateNameExp : Expression;

    /*private*/ encodingExp : Expression;

    /*private*/ parseExp : Expression;

    /*private*/ ignoreMissingExp : Expression;

    /*private*/ encoding : string;

    /*private*/ parse : boolean;

    /*private*/ ignoreMissingExpPrecalcedValue : boolean;

    constructor(template : Template, includedTemplatePathExp : Expression, encodingExp : Expression, parseExp : Expression, ignoreMissingExp : Expression) {
        super();
        if(this.includedTemplateNameExp===undefined) this.includedTemplateNameExp = null;
        if(this.encodingExp===undefined) this.encodingExp = null;
        if(this.parseExp===undefined) this.parseExp = null;
        if(this.ignoreMissingExp===undefined) this.ignoreMissingExp = null;
        if(this.encoding===undefined) this.encoding = null;
        if(this.parse===undefined) this.parse = null;
        if(this.ignoreMissingExpPrecalcedValue===undefined) this.ignoreMissingExpPrecalcedValue = null;
        this.includedTemplateNameExp = includedTemplatePathExp;
        this.encodingExp = encodingExp;
        if(encodingExp == null) {
            this.encoding = null;
        } else {
            if(encodingExp.isLiteral()) {
                try {
                    let tm : TemplateModel = encodingExp.eval(null);
                    if(!(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                        throw new ParseException("Expected a string as the value of the \"encoding\" argument", encodingExp);
                    }
                    this.encoding = (<TemplateScalarModel><any>tm).getAsString();
                } catch(e) {
                    throw new BugException(e);
                }
            } else {
                this.encoding = null;
            }
        }
        this.parseExp = parseExp;
        if(parseExp == null) {
            this.parse = true;
        } else {
            if(parseExp.isLiteral()) {
                try {
                    if(parseExp != null && parseExp instanceof <any>StringLiteral) {
                        this.parse = StringUtil.getYesNo(parseExp.evalAndCoerceToPlainText$freemarker_core_Environment(null));
                    } else {
                        try {
                            this.parse = parseExp.evalToBoolean$freemarker_template_Configuration(template.getConfiguration());
                        } catch(e) {
                            throw new ParseException("Expected a boolean or string as the value of the parse attribute", parseExp, e);
                        }
                    }
                } catch(e) {
                    throw new BugException(e);
                }
            } else {
                this.parse = null;
            }
        }
        this.ignoreMissingExp = ignoreMissingExp;
        if(ignoreMissingExp != null && ignoreMissingExp.isLiteral()) {
            try {
                try {
                    this.ignoreMissingExpPrecalcedValue = ignoreMissingExp.evalToBoolean$freemarker_template_Configuration(template.getConfiguration());
                } catch(e) {
                    throw new ParseException("Expected a boolean as the value of the \"ignore_missing\" attribute", ignoreMissingExp, e);
                }
            } catch(e) {
                throw new BugException(e);
            }
        } else {
            this.ignoreMissingExpPrecalcedValue = null;
        }
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let includedTemplateName : string = this.includedTemplateNameExp.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        let fullIncludedTemplateName : string;
        try {
            fullIncludedTemplateName = env.toFullTemplateName(this.getTemplate().getName(), includedTemplateName);
        } catch(e) {
            throw new _MiscTemplateException(e, env, "Malformed template name ", new _DelayedJQuote(e.getTemplateName()), ":\n", e.getMalformednessDescription());
        }
        let encoding : string = this.encoding != null?this.encoding:(this.encodingExp != null?this.encodingExp.evalAndCoerceToPlainText$freemarker_core_Environment(env):null);
        let parse : boolean;
        if(this.parse != null) {
            parse = this.parse;
        } else {
            let tm : TemplateModel = this.parseExp.eval(env);
            if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
                parse = this.getYesNo(this.parseExp, EvalUtil.modelToString(<TemplateScalarModel><any>tm, this.parseExp, env));
            } else {
                parse = this.parseExp.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment(tm, env);
            }
        }
        let ignoreMissing : boolean;
        if(this.ignoreMissingExpPrecalcedValue != null) {
            ignoreMissing = this.ignoreMissingExpPrecalcedValue;
        } else if(this.ignoreMissingExp != null) {
            ignoreMissing = this.ignoreMissingExp.evalToBoolean$freemarker_core_Environment(env);
        } else {
            ignoreMissing = false;
        }
        let includedTemplate : Template;
        try {
            includedTemplate = env.getTemplateForInclusion(fullIncludedTemplateName, encoding, parse, ignoreMissing);
        } catch(e) {
            throw new _MiscTemplateException(e, env, "Template inclusion failed (for parameter value ", new _DelayedJQuote(includedTemplateName), "):\n", new _DelayedGetMessage(e));
        }
        if(includedTemplate != null) {
            env.include$freemarker_template_Template(includedTemplate);
        }
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @param {boolean} inStringLiteral
     * @return {String}
     */
    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    dump$boolean(canonical : boolean) : string {
        let buf : StringBuilder = new StringBuilder("");
        if(canonical) buf.append('<');
        buf.append(this.getNodeTypeSymbol());
        buf.append(' ');
        buf.append(this.includedTemplateNameExp.getCanonicalForm());
        if(this.encodingExp != null) {
            buf.append(" encoding=").append(this.encodingExp.getCanonicalForm());
        }
        if(this.parseExp != null) {
            buf.append(" parse=").append(this.parseExp.getCanonicalForm());
        }
        if(this.ignoreMissingExp != null) {
            buf.append(" ignore_missing=").append(this.ignoreMissingExp.getCanonicalForm());
        }
        if(canonical) buf.append("/>");
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#include";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 4;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.includedTemplateNameExp;
        case 1:
            return this.parseExp;
        case 2:
            return this.encodingExp;
        case 3:
            return this.ignoreMissingExp;
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
            return ParameterRole.TEMPLATE_NAME_$LI$();
        case 1:
            return ParameterRole.PARSE_PARAMETER_$LI$();
        case 2:
            return ParameterRole.ENCODING_PARAMETER_$LI$();
        case 3:
            return ParameterRole.IGNORE_MISSING_PARAMETER_$LI$();
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

    /*private*/ getYesNo(exp : Expression, s : string) : boolean {
        try {
            return StringUtil.getYesNo(s);
        } catch(iae) {
            throw new _MiscTemplateException(exp, "Value must be boolean (or one of these strings: \"n\", \"no\", \"f\", \"false\", \"y\", \"yes\", \"t\", \"true\"), but it was ", new _DelayedJQuote(s), ".");
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
        return true;
    }
}
Include["__class"] = "freemarker.core.Include";




