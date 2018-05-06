/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ObjectWrapper} from '../template/ObjectWrapper';
import {SimpleNumber} from '../template/SimpleNumber';
import {SimpleScalar} from '../template/SimpleScalar';
import {SimpleSequence} from '../template/SimpleSequence';
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateMethodModel} from '../template/TemplateMethodModel';
import {TemplateMethodModelEx} from '../template/TemplateMethodModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelException} from '../template/TemplateModelException';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {StringUtil} from '../template/utility/StringUtil';
import {BuiltInForString} from './BuiltInForString';
import {Environment} from './Environment';
import {Character} from '../../java/lang/Character';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {BuiltIn} from './BuiltIn';
import {RegexpHelper} from './RegexpHelper';
import {_TemplateModelException} from './_TemplateModelException';
import {_MessageUtil} from './_MessageUtil';

export class BuiltInsForStringsBasic {
    constructor() {
    }
}
BuiltInsForStringsBasic["__class"] = "freemarker.core.BuiltInsForStringsBasic";


export namespace BuiltInsForStringsBasic {

    export class cap_firstBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            let i : number = 0;
            let ln : number = s.length;
            while((i < ln && Character.isWhitespace(s.charAt(i)))) {
                i++;
            }
            if(i < ln) {
                let b : StringBuilder = new StringBuilder(s);
                b.setCharAt(i, Character.toUpperCase(s.charAt(i)));
                s = b.toString();
            }
            return new SimpleScalar(s);
        }

        constructor() {
            super();
        }
    }
    cap_firstBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.cap_firstBI";
    cap_firstBI["__interfaces"] = ["java.lang.Cloneable"];



    export class capitalizeBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new SimpleScalar(StringUtil.capitalize(s));
        }

        constructor() {
            super();
        }
    }
    capitalizeBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.capitalizeBI";
    capitalizeBI["__interfaces"] = ["java.lang.Cloneable"];



    export class chop_linebreakBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new SimpleScalar(StringUtil.chomp(s));
        }

        constructor() {
            super();
        }
    }
    chop_linebreakBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.chop_linebreakBI";
    chop_linebreakBI["__interfaces"] = ["java.lang.Cloneable"];



    export class containsBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            return new containsBI.BIMethod(this, this.target.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment$java_lang_String(env, "For sequences/collections (lists and such) use \"?seq_contains\" instead."));
        }

        constructor() {
            super();
        }
    }
    containsBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.containsBI";
    containsBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace containsBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                return this.s.indexOf(this.__parent.getStringMethodArg(args, 0)) !== -1?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.containsBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class ends_withBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new ends_withBI.BIMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    ends_withBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.ends_withBI";
    ends_withBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace ends_withBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                return /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(this.s, this.__parent.getStringMethodArg(args, 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.ends_withBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class ensure_ends_withBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new ensure_ends_withBI.BIMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    ensure_ends_withBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.ensure_ends_withBI";
    ensure_ends_withBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace ensure_ends_withBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                let suffix : string = this.__parent.getStringMethodArg(args, 0);
                return new SimpleScalar(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(this.s, suffix)?this.s:this.s + suffix);
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.ensure_ends_withBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class ensure_starts_withBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new ensure_starts_withBI.BIMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    ensure_starts_withBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.ensure_starts_withBI";
    ensure_starts_withBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace ensure_starts_withBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1, 3);
                let checkedPrefix : string = this.__parent.getStringMethodArg(args, 0);
                let startsWithPrefix : boolean;
                let addedPrefix : string;
                if(/* size */(<number>args.length) > 1) {
                    addedPrefix = this.__parent.getStringMethodArg(args, 1);
                    let flags : number = /* size */(<number>args.length) > 2?RegexpHelper.parseFlagString(this.__parent.getStringMethodArg(args, 2)):RegexpHelper.RE_FLAG_REGEXP;
                    if((flags & RegexpHelper.RE_FLAG_REGEXP) === 0) {
                        RegexpHelper.checkOnlyHasNonRegexpFlags(this.__parent.key, flags, true);
                        if((flags & RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$()) === 0) {
                            startsWithPrefix = /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(this.s, checkedPrefix);
                        } else {
                            startsWithPrefix = /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(this.s.toLowerCase(), checkedPrefix.toLowerCase());
                        }
                    } else {
                        let pattern : Pattern = RegexpHelper.getPattern(checkedPrefix, (<number>flags|0));
                        let matcher : Matcher = pattern.matcher(this.s);
                        startsWithPrefix = matcher.lookingAt();
                    }
                } else {
                    startsWithPrefix = /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(this.s, checkedPrefix);
                    addedPrefix = checkedPrefix;
                }
                return new SimpleScalar(startsWithPrefix?this.s:addedPrefix + this.s);
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.ensure_starts_withBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class index_ofBI extends BuiltIn {
        findLast : boolean;

        constructor(findLast : boolean) {
            super();
            if(this.findLast===undefined) this.findLast = false;
            this.findLast = findLast;
        }

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            return new index_ofBI.BIMethod(this, this.target.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment$java_lang_String(env, "For sequences/collections (lists and such) use \"?seq_index_of\" instead."));
        }
    }
    index_ofBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.index_ofBI";
    index_ofBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace index_ofBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let subStr : string = this.__parent.getStringMethodArg(args, 0);
                if(argCnt > 1) {
                    let startIdx : number = /* intValue */(this.__parent.getNumberMethodArg(args, 1)|0);
                    return new SimpleNumber(this.__parent.findLast?this.s.lastIndexOf(subStr, startIdx):this.s.indexOf(subStr, startIdx));
                } else {
                    return new SimpleNumber(this.__parent.findLast?this.s.lastIndexOf(subStr):this.s.indexOf(subStr));
                }
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.index_ofBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class keep_afterBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new keep_afterBI.KeepAfterMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    keep_afterBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_afterBI";
    keep_afterBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace keep_afterBI {

        export class KeepAfterMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let separatorString : string = this.__parent.getStringMethodArg(args, 0);
                let flags : number = argCnt > 1?RegexpHelper.parseFlagString(this.__parent.getStringMethodArg(args, 1)):0;
                let startIndex : number;
                if((flags & RegexpHelper.RE_FLAG_REGEXP) === 0) {
                    RegexpHelper.checkOnlyHasNonRegexpFlags(this.__parent.key, flags, true);
                    if((flags & RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$()) === 0) {
                        startIndex = this.s.indexOf(separatorString);
                    } else {
                        startIndex = this.s.toLowerCase().indexOf(separatorString.toLowerCase());
                    }
                    if(startIndex >= 0) {
                        startIndex += separatorString.length;
                    }
                } else {
                    let pattern : Pattern = RegexpHelper.getPattern(separatorString, (<number>flags|0));
                    let matcher : Matcher = pattern.matcher(this.s);
                    if(matcher.find()) {
                        startIndex = matcher.end();
                    } else {
                        startIndex = -1;
                    }
                }
                return startIndex === -1?TemplateScalarModel.EMPTY_STRING:new SimpleScalar(this.s.substring(startIndex));
            }
        }
        KeepAfterMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_afterBI.KeepAfterMethod";
        KeepAfterMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class keep_after_lastBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new keep_after_lastBI.KeepAfterMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    keep_after_lastBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_after_lastBI";
    keep_after_lastBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace keep_after_lastBI {

        export class KeepAfterMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let separatorString : string = this.__parent.getStringMethodArg(args, 0);
                let flags : number = argCnt > 1?RegexpHelper.parseFlagString(this.__parent.getStringMethodArg(args, 1)):0;
                let startIndex : number;
                if((flags & RegexpHelper.RE_FLAG_REGEXP) === 0) {
                    RegexpHelper.checkOnlyHasNonRegexpFlags(this.__parent.key, flags, true);
                    if((flags & RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$()) === 0) {
                        startIndex = this.s.lastIndexOf(separatorString);
                    } else {
                        startIndex = this.s.toLowerCase().lastIndexOf(separatorString.toLowerCase());
                    }
                    if(startIndex >= 0) {
                        startIndex += separatorString.length;
                    }
                } else {
                    if(separatorString.length === 0) {
                        startIndex = this.s.length;
                    } else {
                        let pattern : Pattern = RegexpHelper.getPattern(separatorString, (<number>flags|0));
                        let matcher : Matcher = pattern.matcher(this.s);
                        if(matcher.find()) {
                            startIndex = matcher.end();
                            while((matcher.find(matcher.start() + 1))) {
                                startIndex = matcher.end();
                            }
                        } else {
                            startIndex = -1;
                        }
                    }
                }
                return startIndex === -1?TemplateScalarModel.EMPTY_STRING:new SimpleScalar(this.s.substring(startIndex));
            }
        }
        KeepAfterMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_after_lastBI.KeepAfterMethod";
        KeepAfterMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class keep_beforeBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new keep_beforeBI.KeepUntilMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    keep_beforeBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_beforeBI";
    keep_beforeBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace keep_beforeBI {

        export class KeepUntilMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let separatorString : string = this.__parent.getStringMethodArg(args, 0);
                let flags : number = argCnt > 1?RegexpHelper.parseFlagString(this.__parent.getStringMethodArg(args, 1)):0;
                let stopIndex : number;
                if((flags & RegexpHelper.RE_FLAG_REGEXP) === 0) {
                    RegexpHelper.checkOnlyHasNonRegexpFlags(this.__parent.key, flags, true);
                    if((flags & RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$()) === 0) {
                        stopIndex = this.s.indexOf(separatorString);
                    } else {
                        stopIndex = this.s.toLowerCase().indexOf(separatorString.toLowerCase());
                    }
                } else {
                    let pattern : Pattern = RegexpHelper.getPattern(separatorString, (<number>flags|0));
                    let matcher : Matcher = pattern.matcher(this.s);
                    if(matcher.find()) {
                        stopIndex = matcher.start();
                    } else {
                        stopIndex = -1;
                    }
                }
                return stopIndex === -1?new SimpleScalar(this.s):new SimpleScalar(this.s.substring(0, stopIndex));
            }
        }
        KeepUntilMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_beforeBI.KeepUntilMethod";
        KeepUntilMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class keep_before_lastBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new keep_before_lastBI.KeepUntilMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    keep_before_lastBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_before_lastBI";
    keep_before_lastBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace keep_before_lastBI {

        export class KeepUntilMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let separatorString : string = this.__parent.getStringMethodArg(args, 0);
                let flags : number = argCnt > 1?RegexpHelper.parseFlagString(this.__parent.getStringMethodArg(args, 1)):0;
                let stopIndex : number;
                if((flags & RegexpHelper.RE_FLAG_REGEXP) === 0) {
                    RegexpHelper.checkOnlyHasNonRegexpFlags(this.__parent.key, flags, true);
                    if((flags & RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$()) === 0) {
                        stopIndex = this.s.lastIndexOf(separatorString);
                    } else {
                        stopIndex = this.s.toLowerCase().lastIndexOf(separatorString.toLowerCase());
                    }
                } else {
                    if(separatorString.length === 0) {
                        stopIndex = this.s.length;
                    } else {
                        let pattern : Pattern = RegexpHelper.getPattern(separatorString, (<number>flags|0));
                        let matcher : Matcher = pattern.matcher(this.s);
                        if(matcher.find()) {
                            stopIndex = matcher.start();
                            while((matcher.find(stopIndex + 1))) {
                                stopIndex = matcher.start();
                            }
                        } else {
                            stopIndex = -1;
                        }
                    }
                }
                return stopIndex === -1?new SimpleScalar(this.s):new SimpleScalar(this.s.substring(0, stopIndex));
            }
        }
        KeepUntilMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.keep_before_lastBI.KeepUntilMethod";
        KeepUntilMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class lengthBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new SimpleNumber(s.length);
        }

        constructor() {
            super();
        }
    }
    lengthBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.lengthBI";
    lengthBI["__interfaces"] = ["java.lang.Cloneable"];



    export class lower_caseBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new SimpleScalar(/* toLowerCase */s.toLowerCase());
        }

        constructor() {
            super();
        }
    }
    lower_caseBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.lower_caseBI";
    lower_caseBI["__interfaces"] = ["java.lang.Cloneable"];



    export class padBI extends BuiltInForString {
        leftPadder : boolean;

        constructor(leftPadder : boolean) {
            super();
            if(this.leftPadder===undefined) this.leftPadder = false;
            this.leftPadder = leftPadder;
        }

        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new padBI.BIMethod(this, s);
        }
    }
    padBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.padBI";
    padBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace padBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let width : number = /* intValue */(this.__parent.getNumberMethodArg(args, 0)|0);
                if(argCnt > 1) {
                    let filling : string = this.__parent.getStringMethodArg(args, 1);
                    try {
                        return new SimpleScalar(this.__parent.leftPadder?StringUtil.leftPad$java_lang_String$int$java_lang_String(this.s, width, filling):StringUtil.rightPad$java_lang_String$int$java_lang_String(this.s, width, filling));
                    } catch(e) {
                        if(filling.length === 0) {
                            throw new _TemplateModelException("?", this.__parent.key, "(...) argument #2 can\'t be a 0-length string.");
                        } else {
                            throw new _TemplateModelException(e, "?", this.__parent.key, "(...) failed: ", e);
                        }
                    }
                } else {
                    return new SimpleScalar(this.__parent.leftPadder?StringUtil.leftPad$java_lang_String$int(this.s, width):StringUtil.rightPad$java_lang_String$int(this.s, width));
                }
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.padBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class remove_beginningBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new remove_beginningBI.BIMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    remove_beginningBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.remove_beginningBI";
    remove_beginningBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace remove_beginningBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                let prefix : string = this.__parent.getStringMethodArg(args, 0);
                return new SimpleScalar(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(this.s, prefix)?this.s.substring(prefix.length):this.s);
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.remove_beginningBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class remove_endingBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new remove_endingBI.BIMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    remove_endingBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.remove_endingBI";
    remove_endingBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace remove_endingBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                let suffix : string = this.__parent.getStringMethodArg(args, 0);
                return new SimpleScalar(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(this.s, suffix)?this.s.substring(0, this.s.length - suffix.length):this.s);
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.remove_endingBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class split_BI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new split_BI.SplitMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    split_BI["__class"] = "freemarker.core.BuiltInsForStringsBasic.split_BI";
    split_BI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace split_BI {

        export class SplitMethod implements TemplateMethodModel {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let splitString : string = <string>/* get */args[0];
                let flags : number = argCnt > 1?RegexpHelper.parseFlagString(<string>/* get */args[1]):0;
                let result : Array<any> = null;
                if((flags & RegexpHelper.RE_FLAG_REGEXP) === 0) {
                    RegexpHelper.checkNonRegexpFlags(this.__parent.key, flags);
                    result = StringUtil.split$java_lang_String$java_lang_String$boolean(this.s, splitString, (flags & RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$()) !== 0);
                } else {
                    let pattern : Pattern = RegexpHelper.getPattern(splitString, (<number>flags|0));
                    result = pattern.split(this.s);
                }
                return ObjectWrapper.DEFAULT_WRAPPER['wrap$java_lang_Object'](result);
            }
        }
        SplitMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.split_BI.SplitMethod";
        SplitMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateModel"];


    }


    export class starts_withBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new starts_withBI.BIMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    starts_withBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.starts_withBI";
    starts_withBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace starts_withBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                return /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(this.s, this.__parent.getStringMethodArg(args, 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForStringsBasic.starts_withBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class substringBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new substringBI.substringBI$0(this, s);
        }

        constructor() {
            super();
        }
    }
    substringBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.substringBI";
    substringBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace substringBI {

        export class substringBI$0 implements TemplateMethodModelEx {
            public __parent: any;
            public exec(args : Array<any>) : any {
                let argCount : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCount, 1, 2);
                let beginIdx : number = /* intValue */(this.__parent.getNumberMethodArg(args, 0)|0);
                let len : number = this.s.length;
                if(beginIdx < 0) {
                    throw this.newIndexLessThan0Exception(0, beginIdx);
                } else if(beginIdx > len) {
                    throw this.newIndexGreaterThanLengthException(0, beginIdx, len);
                }
                if(argCount > 1) {
                    let endIdx : number = /* intValue */(this.__parent.getNumberMethodArg(args, 1)|0);
                    if(endIdx < 0) {
                        throw this.newIndexLessThan0Exception(1, endIdx);
                    } else if(endIdx > len) {
                        throw this.newIndexGreaterThanLengthException(1, endIdx, len);
                    }
                    if(beginIdx > endIdx) {
                        throw _MessageUtil.newMethodArgsInvalidValueException("?" + this.__parent.key, "The begin index argument, ", beginIdx, ", shouldn\'t be greater than the end index argument, ", endIdx, ".");
                    }
                    return new SimpleScalar(this.s.substring(beginIdx, endIdx));
                } else {
                    return new SimpleScalar(this.s.substring(beginIdx));
                }
            }

            newIndexGreaterThanLengthException(argIdx : number, idx : number, len : number) : TemplateModelException {
                return _MessageUtil.newMethodArgInvalidValueException("?" + this.__parent.key, argIdx, "The index mustn\'t be greater than the length of the string, ", len, ", but it was ", idx, ".");
            }

            newIndexLessThan0Exception(argIdx : number, idx : number) : TemplateModelException {
                return _MessageUtil.newMethodArgInvalidValueException("?" + this.__parent.key, argIdx, "The index must be at least 0, but was ", idx, ".");
            }

            constructor(__parent: any, private s: any) {
                this.__parent = __parent;
            }
        }
        substringBI$0["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class trimBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new SimpleScalar(s.trim());
        }

        constructor() {
            super();
        }
    }
    trimBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.trimBI";
    trimBI["__interfaces"] = ["java.lang.Cloneable"];



    export class uncap_firstBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            let i : number = 0;
            let ln : number = s.length;
            while((i < ln && Character.isWhitespace(s.charAt(i)))) {
                i++;
            }
            if(i < ln) {
                let b : StringBuilder = new StringBuilder(s);
                b.setCharAt(i, Character.toLowerCase(s.charAt(i)));
                s = b.toString();
            }
            return new SimpleScalar(s);
        }

        constructor() {
            super();
        }
    }
    uncap_firstBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.uncap_firstBI";
    uncap_firstBI["__interfaces"] = ["java.lang.Cloneable"];



    export class upper_caseBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new SimpleScalar(/* toUpperCase */s.toUpperCase());
        }

        constructor() {
            super();
        }
    }
    upper_caseBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.upper_caseBI";
    upper_caseBI["__interfaces"] = ["java.lang.Cloneable"];



    export class word_listBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            let result : SimpleSequence = new SimpleSequence();
            let st : StringTokenizer = new StringTokenizer(s);
            while((st.hasMoreTokens())) {
                result.add$java_lang_Object(st.nextToken());
            }
            return result;
        }

        constructor() {
            super();
        }
    }
    word_listBI["__class"] = "freemarker.core.BuiltInsForStringsBasic.word_listBI";
    word_listBI["__interfaces"] = ["java.lang.Cloneable"];


}



