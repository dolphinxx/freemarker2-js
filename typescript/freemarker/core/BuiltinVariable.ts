/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateException} from '../template/TemplateException';
import {TemplateModel} from '../template/TemplateModel';
import {StringUtil} from '../template/utility/StringUtil';
import {Expression} from './Expression';
import {Token} from './Token';
import {ParseException} from './ParseException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_CoreStringUtils} from './_CoreStringUtils';
import {_MiscTemplateException} from './_MiscTemplateException';
import {ParameterRole} from './ParameterRole';
import {TemplateHashModel} from "../template/TemplateHashModel";

/**
 * A reference to a built-in identifier, such as .root
 * @extends Expression
 * @class
 */
export class BuiltinVariable extends Expression {
    static TEMPLATE_NAME_CC : string = "templateName";

    static TEMPLATE_NAME : string = "template_name";

    static MAIN_TEMPLATE_NAME_CC : string = "mainTemplateName";

    static MAIN_TEMPLATE_NAME : string = "main_template_name";

    static CURRENT_TEMPLATE_NAME_CC : string = "currentTemplateName";

    static CURRENT_TEMPLATE_NAME : string = "current_template_name";

    static NAMESPACE : string = "namespace";

    static MAIN : string = "main";

    static GLOBALS : string = "globals";

    static LOCALS : string = "locals";

    static DATA_MODEL_CC : string = "dataModel";

    static DATA_MODEL : string = "data_model";

    static LANG : string = "lang";

    static LOCALE : string = "locale";

    static LOCALE_OBJECT_CC : string = "localeObject";

    static LOCALE_OBJECT : string = "locale_object";

    static CURRENT_NODE_CC : string = "currentNode";

    static CURRENT_NODE : string = "current_node";

    static NODE : string = "node";

    static PASS : string = "pass";

    static VARS : string = "vars";

    static VERSION : string = "version";

    static INCOMPATIBLE_IMPROVEMENTS_CC : string = "incompatibleImprovements";

    static INCOMPATIBLE_IMPROVEMENTS : string = "incompatible_improvements";

    static ERROR : string = "error";

    static OUTPUT_ENCODING_CC : string = "outputEncoding";

    static OUTPUT_ENCODING : string = "output_encoding";

    static OUTPUT_FORMAT_CC : string = "outputFormat";

    static OUTPUT_FORMAT : string = "output_format";

    static AUTO_ESC_CC : string = "autoEsc";

    static AUTO_ESC : string = "auto_esc";

    static URL_ESCAPING_CHARSET_CC : string = "urlEscapingCharset";

    static URL_ESCAPING_CHARSET : string = "url_escaping_charset";

    static NOW : string = "now";

    static GET_OPTIONAL_TEMPLATE : string = "get_optional_template";

    static GET_OPTIONAL_TEMPLATE_CC : string = "getOptionalTemplate";

    static CALLER_TEMPLATE_NAME : string = "caller_template_name";

    static CALLER_TEMPLATE_NAME_CC : string = "callerTemplateName";

    static SPEC_VAR_NAMES : Array<any>; public static SPEC_VAR_NAMES_$LI$() : Array<any> { if(BuiltinVariable.SPEC_VAR_NAMES == null) BuiltinVariable.SPEC_VAR_NAMES = [BuiltinVariable.AUTO_ESC_CC, BuiltinVariable.AUTO_ESC, BuiltinVariable.CALLER_TEMPLATE_NAME_CC, BuiltinVariable.CALLER_TEMPLATE_NAME, BuiltinVariable.CURRENT_NODE_CC, BuiltinVariable.CURRENT_TEMPLATE_NAME_CC, BuiltinVariable.CURRENT_NODE, BuiltinVariable.CURRENT_TEMPLATE_NAME, BuiltinVariable.DATA_MODEL_CC, BuiltinVariable.DATA_MODEL, BuiltinVariable.ERROR, BuiltinVariable.GET_OPTIONAL_TEMPLATE_CC, BuiltinVariable.GET_OPTIONAL_TEMPLATE, BuiltinVariable.GLOBALS, BuiltinVariable.INCOMPATIBLE_IMPROVEMENTS_CC, BuiltinVariable.INCOMPATIBLE_IMPROVEMENTS, BuiltinVariable.LANG, BuiltinVariable.LOCALE, BuiltinVariable.LOCALE_OBJECT_CC, BuiltinVariable.LOCALE_OBJECT, BuiltinVariable.LOCALS, BuiltinVariable.MAIN, BuiltinVariable.MAIN_TEMPLATE_NAME_CC, BuiltinVariable.MAIN_TEMPLATE_NAME, BuiltinVariable.NAMESPACE, BuiltinVariable.NODE, BuiltinVariable.NOW, BuiltinVariable.OUTPUT_ENCODING_CC, BuiltinVariable.OUTPUT_FORMAT_CC, BuiltinVariable.OUTPUT_ENCODING, BuiltinVariable.OUTPUT_FORMAT, BuiltinVariable.PASS, BuiltinVariable.TEMPLATE_NAME_CC, BuiltinVariable.TEMPLATE_NAME, BuiltinVariable.URL_ESCAPING_CHARSET_CC, BuiltinVariable.URL_ESCAPING_CHARSET, BuiltinVariable.VARS, BuiltinVariable.VERSION]; return BuiltinVariable.SPEC_VAR_NAMES; };

    /*private*/ name : string;

    /*private*/ parseTimeValue : TemplateModel;

    constructor(nameTk : Token, tokenManager : /*FMParserTokenManager*/any, parseTimeValue : TemplateModel) {
        super();
        const Configuration = require('../template/Configuration').Configuration;
        if(this.name===undefined) this.name = null;
        if(this.parseTimeValue===undefined) this.parseTimeValue = null;
        let name : string = nameTk.image;
        this.parseTimeValue = parseTimeValue;
        if(BuiltinVariable.SPEC_VAR_NAMES_$LI$().indexOf(name) !== -1) {
            let sb : StringBuilder = new StringBuilder("");
            sb.append("Unknown special variable name: ");
            sb.append(StringUtil.jQuote$java_lang_Object(name)).append(".");
            let shownNamingConvention : number;
            {
                let namingConvention : number = tokenManager.namingConvention;
                shownNamingConvention = namingConvention !== Configuration.AUTO_DETECT_NAMING_CONVENTION?namingConvention:Configuration.LEGACY_NAMING_CONVENTION;
            }
            {
                let correctName : string;
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"auto_escape")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"auto_escaping")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"autoesc"))) {
                    correctName = "auto_esc";
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"autoEscape")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"autoEscaping"))) {
                    correctName = "autoEsc";
                } else {
                    correctName = null;
                }
                if(correctName != null) {
                    sb.append(" You may meant: ");
                    sb.append(StringUtil.jQuote$java_lang_Object(correctName)).append(".");
                }
            }
            sb.append("\nThe allowed special variable names are: ");
            let first : boolean = true;
            for(let i : number = 0; i < BuiltinVariable.SPEC_VAR_NAMES_$LI$().length; i++) {
                let correctName : string = BuiltinVariable.SPEC_VAR_NAMES_$LI$()[i];
                let correctNameNamingConvetion : number = _CoreStringUtils.getIdentifierNamingConvention(correctName);
                if(shownNamingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION?correctNameNamingConvetion !== Configuration.LEGACY_NAMING_CONVENTION:correctNameNamingConvetion !== Configuration.CAMEL_CASE_NAMING_CONVENTION) {
                    if(first) {
                        first = false;
                    } else {
                        sb.append(", ");
                    }
                    sb.append(correctName);
                }
            }
            throw new ParseException(sb.toString(), null, nameTk);
        }
        this.name = name;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        if(this.parseTimeValue != null) {
            return this.parseTimeValue;
        }
        if(this.name === BuiltinVariable.NAMESPACE) {
            return env.getCurrentNamespace();
        }
        if(this.name === BuiltinVariable.MAIN) {
            return env.getMainNamespace();
        }
        if(this.name === BuiltinVariable.GLOBALS) {
            return env.getGlobalVariables();
        }
        if(this.name === BuiltinVariable.LOCALS) {
            let ctx : /*Macro.Context*/any = env.getCurrentMacroContext();
            return ctx == null?null:ctx.getLocals();
        }
        if(this.name === BuiltinVariable.DATA_MODEL || this.name === BuiltinVariable.DATA_MODEL_CC) {
            return env.getDataModel();
        }
        if(this.name === BuiltinVariable.VARS) {
            return new BuiltinVariable.VarsHash(env);
        }
        const SimpleScalar = require('../template/SimpleScalar').SimpleScalar;
        if(this.name === BuiltinVariable.LOCALE) {
            return new SimpleScalar(env.getLocale().toString());
        }
        if(this.name === BuiltinVariable.LOCALE_OBJECT || this.name === BuiltinVariable.LOCALE_OBJECT_CC) {
            return env.getObjectWrapper()['wrap$java_lang_Object'](env.getLocale());
        }
        if(this.name === BuiltinVariable.LANG) {
            return new SimpleScalar(env.getLocale().getLanguage());
        }
        if(this.name === BuiltinVariable.CURRENT_NODE || this.name === BuiltinVariable.NODE || this.name === BuiltinVariable.CURRENT_NODE_CC) {
            return env.getCurrentVisitorNode();
        }
        if(this.name === BuiltinVariable.TEMPLATE_NAME || this.name === BuiltinVariable.TEMPLATE_NAME_CC) {
            return (env.getConfiguration().getIncompatibleImprovements().intValue() >= /*_TemplateAPI.VERSION_INT_2_3_23_$LI$()*/2003023)?new SimpleScalar(env.getTemplate230().getName()):new SimpleScalar(env.getTemplate().getName());
        }
        if(this.name === BuiltinVariable.MAIN_TEMPLATE_NAME || this.name === BuiltinVariable.MAIN_TEMPLATE_NAME_CC) {
            return SimpleScalar.newInstanceOrNull(env.getMainTemplate().getName());
        }
        if(this.name === BuiltinVariable.CURRENT_TEMPLATE_NAME || this.name === BuiltinVariable.CURRENT_TEMPLATE_NAME_CC) {
            return SimpleScalar.newInstanceOrNull(env.getCurrentTemplate().getName());
        }
        if(this.name === BuiltinVariable.PASS) {
            return (require('./Macro').Macro).DO_NOTHING_MACRO_$LI$();
        }
        if(this.name === BuiltinVariable.OUTPUT_ENCODING || this.name === BuiltinVariable.OUTPUT_ENCODING_CC) {
            let s : string = env.getOutputEncoding();
            return SimpleScalar.newInstanceOrNull(s);
        }
        if(this.name === BuiltinVariable.URL_ESCAPING_CHARSET || this.name === BuiltinVariable.URL_ESCAPING_CHARSET_CC) {
            let s : string = env.getURLEscapingCharset();
            return SimpleScalar.newInstanceOrNull(s);
        }
        if(this.name === BuiltinVariable.ERROR) {
            return new SimpleScalar(env.getCurrentRecoveredErrorMessage());
        }
        if(this.name === BuiltinVariable.NOW) {
            return new (require('../template/SimpleDate').SimpleDate)(new Date(), (require('../template/TemplateDateModel').TemplateDateModel).DATETIME);
        }
        if(this.name === BuiltinVariable.VERSION) {
            return new SimpleScalar((require('../template/Configuration').Configuration).getVersionNumber());
        }
        if(this.name === BuiltinVariable.INCOMPATIBLE_IMPROVEMENTS || this.name === BuiltinVariable.INCOMPATIBLE_IMPROVEMENTS_CC) {
            return new SimpleScalar(env.getConfiguration().getIncompatibleImprovements().toString());
        }
        if(this.name === BuiltinVariable.GET_OPTIONAL_TEMPLATE) {
            return (require('../core/GetOptionalTemplateMethod').GetOptionalTemplateMethod).INSTANCE_$LI$();
        }
        if(this.name === BuiltinVariable.GET_OPTIONAL_TEMPLATE_CC) {
            return (require('../core/GetOptionalTemplateMethod').GetOptionalTemplateMethod).INSTANCE_CC_$LI$();
        }
        if(this.name === BuiltinVariable.CALLER_TEMPLATE_NAME || this.name === BuiltinVariable.CALLER_TEMPLATE_NAME_CC) {
            let ctx : /*Macro.Context*/any = env.getCurrentMacroContext();
            if(ctx == null) {
                throw new TemplateException("Can\'t get ." + this.name + " here, as there\'s no macro or function (that\'s implemented in the template) call in context.", env);
            }
            let callPlace : /*TemplateObject*/any = ctx.callPlace;
            let name : string = callPlace != null?callPlace.getTemplate().getName():null;
            return name != null?new SimpleScalar(name):(require('../template/TemplateScalarModel').TemplateScalarModel).EMPTY_STRING;
        }
        throw new _MiscTemplateException(this, "Invalid special variable: ", this.name);
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return "." + this.name;
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return "." + this.name;
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.getCanonicalForm();
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return false;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return this;
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 0;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
BuiltinVariable["__class"] = "freemarker.core.BuiltinVariable";


export namespace BuiltinVariable {

    export class VarsHash implements TemplateHashModel {
        env : /*Environment*/any;

        constructor(env : /*Environment*/any) {
            if(this.env===undefined) this.env = null;
            this.env = env;
        }

        public get(key : string) : TemplateModel {
            return this.env.getVariable(key);
        }

        public isEmpty() : boolean {
            return false;
        }
    }
    VarsHash["__class"] = "freemarker.core.BuiltinVariable.VarsHash";
    VarsHash["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];


}




BuiltinVariable.SPEC_VAR_NAMES_$LI$();
