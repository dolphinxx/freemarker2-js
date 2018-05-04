/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Configuration } from '../template/Configuration';
import { SimpleScalar } from '../template/SimpleScalar';
import { TemplateMethodModel } from '../template/TemplateMethodModel';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { _TemplateAPI } from '../template/_TemplateAPI';
import { StringUtil } from '../template/utility/StringUtil';
import { BuiltInForLegacyEscaping } from './BuiltInForLegacyEscaping';
import { ICIChainMember } from './ICIChainMember';
import { Environment } from './Environment';
import { BuiltInForString } from './BuiltInForString';
import { BuiltIn } from './BuiltIn';
import { _TemplateModelException } from './_TemplateModelException';

export class BuiltInsForStringsEncoding {
    constructor() {
    }
}
BuiltInsForStringsEncoding["__class"] = "freemarker.core.BuiltInsForStringsEncoding";


export namespace BuiltInsForStringsEncoding {

    export class htmlBI extends BuiltInForLegacyEscaping implements ICIChainMember {
        prevICIObj : htmlBI.BIBeforeICI2d3d20 = new htmlBI.BIBeforeICI2d3d20();

        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new SimpleScalar(StringUtil.XHTMLEnc$java_lang_String(s));
        }

        public getMinimumICIVersion() : number {
            return _TemplateAPI.VERSION_INT_2_3_20_$LI$();
        }

        public getPreviousICIChainMember() : any {
            return this.prevICIObj;
        }

        constructor() {
            super();
        }
    }
    htmlBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.htmlBI";
    htmlBI["__interfaces"] = ["java.lang.Cloneable","freemarker.core.ICIChainMember"];



    export namespace htmlBI {

        export class BIBeforeICI2d3d20 extends BuiltInForLegacyEscaping {
            /**
             * 
             * @param {String} s
             * @param {Environment} env
             * @return {*}
             */
            calculateResult(s : string, env : Environment) : TemplateModel {
                return new SimpleScalar(StringUtil.HTMLEnc(s));
            }

            constructor() {
                super();
            }
        }
        BIBeforeICI2d3d20["__class"] = "freemarker.core.BuiltInsForStringsEncoding.htmlBI.BIBeforeICI2d3d20";
        BIBeforeICI2d3d20["__interfaces"] = ["java.lang.Cloneable"];


    }


    export class j_stringBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new SimpleScalar(StringUtil.javaStringEnc(s));
        }

        constructor() {
            super();
        }
    }
    j_stringBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.j_stringBI";
    j_stringBI["__interfaces"] = ["java.lang.Cloneable"];



    export class js_stringBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new SimpleScalar(StringUtil.javaScriptStringEnc(s));
        }

        constructor() {
            super();
        }
    }
    js_stringBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.js_stringBI";
    js_stringBI["__interfaces"] = ["java.lang.Cloneable"];



    export class json_stringBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new SimpleScalar(StringUtil.jsonStringEnc(s));
        }

        constructor() {
            super();
        }
    }
    json_stringBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.json_stringBI";
    json_stringBI["__interfaces"] = ["java.lang.Cloneable"];



    export class rtfBI extends BuiltInForLegacyEscaping {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new SimpleScalar(StringUtil.RTFEnc$java_lang_String(s));
        }

        constructor() {
            super();
        }
    }
    rtfBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.rtfBI";
    rtfBI["__interfaces"] = ["java.lang.Cloneable"];



    export class xhtmlBI extends BuiltInForLegacyEscaping {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new SimpleScalar(StringUtil.XHTMLEnc$java_lang_String(s));
        }

        constructor() {
            super();
        }
    }
    xhtmlBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.xhtmlBI";
    xhtmlBI["__interfaces"] = ["java.lang.Cloneable"];



    export class xmlBI extends BuiltInForLegacyEscaping {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new SimpleScalar(StringUtil.XMLEnc$java_lang_String(s));
        }

        constructor() {
            super();
        }
    }
    xmlBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.xmlBI";
    xmlBI["__interfaces"] = ["java.lang.Cloneable"];



    export abstract class AbstractUrlBIResult implements TemplateScalarModel, TemplateMethodModel {
        parent : BuiltIn;

        targetAsString : string;

        env : Environment;

        cachedResult : string;

        constructor(parent : BuiltIn, target : string, env : Environment) {
            if(this.parent===undefined) this.parent = null;
            if(this.targetAsString===undefined) this.targetAsString = null;
            if(this.env===undefined) this.env = null;
            if(this.cachedResult===undefined) this.cachedResult = null;
            this.parent = parent;
            this.targetAsString = target;
            this.env = env;
        }

        abstract encodeWithCharset(cs : string) : string;

        public exec(args : Array<any>) : any {
            this.parent.checkMethodArgCount$int$int(/* size */(<number>args.length), 1);
            try {
                return new SimpleScalar(this.encodeWithCharset(<string>/* get */args[0]));
            } catch(e) {
                throw new _TemplateModelException(e, "Failed to execute URL encoding.");
            };
        }

        public getAsString() : string {
            if(this.cachedResult == null) {
                let cs : string = this.env.getEffectiveURLEscapingCharset();
                if(cs == null) {
                    throw new _TemplateModelException("To do URL encoding, the framework that encloses FreeMarker must specify the \"", Configuration.OUTPUT_ENCODING_KEY_$LI$(), "\" setting or the \"", Configuration.URL_ESCAPING_CHARSET_KEY_$LI$(), "\" setting, so ask the programmers to set them. Or, as a last chance, you can set the url_encoding_charset setting in the template, e.g. <#setting ", Configuration.URL_ESCAPING_CHARSET_KEY_$LI$(), "=\'ISO-8859-1\'>, or give the charset explicitly to the built-in, e.g. foo?url(\'ISO-8859-1\').");
                }
                try {
                    this.cachedResult = this.encodeWithCharset(cs);
                } catch(e) {
                    throw new _TemplateModelException(e, "Failed to execute URL encoding.");
                };
            }
            return this.cachedResult;
        }
    }
    AbstractUrlBIResult["__class"] = "freemarker.core.BuiltInsForStringsEncoding.AbstractUrlBIResult";
    AbstractUrlBIResult["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];



    export class urlBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new urlBI.UrlBIResult(this, s, env);
        }

        constructor() {
            super();
        }
    }
    urlBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.urlBI";
    urlBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace urlBI {

        export class UrlBIResult extends BuiltInsForStringsEncoding.AbstractUrlBIResult {
            constructor(parent : BuiltIn, target : string, env : Environment) {
                super(parent, target, env);
            }

            /**
             * 
             * @param {String} cs
             * @return {String}
             */
            encodeWithCharset(cs : string) : string {
                return StringUtil.URLEnc$java_lang_String$java_lang_String(this.targetAsString, cs);
            }
        }
        UrlBIResult["__class"] = "freemarker.core.BuiltInsForStringsEncoding.urlBI.UrlBIResult";
        UrlBIResult["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];


    }


    export class urlPathBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new urlPathBI.UrlPathBIResult(this, s, env);
        }

        constructor() {
            super();
        }
    }
    urlPathBI["__class"] = "freemarker.core.BuiltInsForStringsEncoding.urlPathBI";
    urlPathBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace urlPathBI {

        export class UrlPathBIResult extends BuiltInsForStringsEncoding.AbstractUrlBIResult {
            constructor(parent : BuiltIn, target : string, env : Environment) {
                super(parent, target, env);
            }

            /**
             * 
             * @param {String} cs
             * @return {String}
             */
            encodeWithCharset(cs : string) : string {
                return StringUtil.URLPathEnc(this.targetAsString, cs);
            }
        }
        UrlPathBIResult["__class"] = "freemarker.core.BuiltInsForStringsEncoding.urlPathBI.UrlPathBIResult";
        UrlPathBIResult["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];


    }

}



