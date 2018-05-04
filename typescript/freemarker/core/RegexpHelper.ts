/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { MruCacheStorage } from '../cache/MruCacheStorage';
import { Logger } from '../log/Logger';
import { TemplateModelException } from '../template/TemplateModelException';
import { StringUtil } from '../template/utility/StringUtil';
import { _TemplateModelException } from './_TemplateModelException';
import { _DelayedGetMessage } from './_DelayedGetMessage';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';

/**
 * Helper for language features (like built-ins) that use regular expressions.
 * @class
 */
export class RegexpHelper {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(RegexpHelper.LOG == null) RegexpHelper.LOG = Logger.getLogger("freemarker.runtime"); return RegexpHelper.LOG; };

    static flagWarningsEnabled : boolean; public static flagWarningsEnabled_$LI$() : boolean { if(RegexpHelper.flagWarningsEnabled == null) RegexpHelper.flagWarningsEnabled = RegexpHelper.LOG_$LI$().isWarnEnabled(); return RegexpHelper.flagWarningsEnabled; };

    static MAX_FLAG_WARNINGS_LOGGED : number = 25;

    static flagWarningsCntSync : any; public static flagWarningsCntSync_$LI$() : any { if(RegexpHelper.flagWarningsCntSync == null) RegexpHelper.flagWarningsCntSync = <any>new Object(); return RegexpHelper.flagWarningsCntSync; };

    static flagWarningsCnt : number = 0;

    static patternCache : MruCacheStorage; public static patternCache_$LI$() : MruCacheStorage { if(RegexpHelper.patternCache == null) RegexpHelper.patternCache = new MruCacheStorage(50, 150); return RegexpHelper.patternCache; };

    static intFlagToLong(flag : number) : number {
        return flag & 65535;
    }

    static RE_FLAG_CASE_INSENSITIVE : number; public static RE_FLAG_CASE_INSENSITIVE_$LI$() : number { if(RegexpHelper.RE_FLAG_CASE_INSENSITIVE == null) RegexpHelper.RE_FLAG_CASE_INSENSITIVE = RegexpHelper.intFlagToLong(Pattern.CASE_INSENSITIVE); return RegexpHelper.RE_FLAG_CASE_INSENSITIVE; };

    static RE_FLAG_MULTILINE : number; public static RE_FLAG_MULTILINE_$LI$() : number { if(RegexpHelper.RE_FLAG_MULTILINE == null) RegexpHelper.RE_FLAG_MULTILINE = RegexpHelper.intFlagToLong(Pattern.MULTILINE); return RegexpHelper.RE_FLAG_MULTILINE; };

    static RE_FLAG_COMMENTS : number; public static RE_FLAG_COMMENTS_$LI$() : number { if(RegexpHelper.RE_FLAG_COMMENTS == null) RegexpHelper.RE_FLAG_COMMENTS = RegexpHelper.intFlagToLong(Pattern.COMMENTS); return RegexpHelper.RE_FLAG_COMMENTS; };

    static RE_FLAG_DOTALL : number; public static RE_FLAG_DOTALL_$LI$() : number { if(RegexpHelper.RE_FLAG_DOTALL == null) RegexpHelper.RE_FLAG_DOTALL = RegexpHelper.intFlagToLong(Pattern.DOTALL); return RegexpHelper.RE_FLAG_DOTALL; };

    static RE_FLAG_REGEXP : number = 4294967296;

    static RE_FLAG_FIRST_ONLY : number = 8589934592;

    constructor() {
    }

    static getPattern(patternString : string, flags : number) : Pattern {
        let patternKey : RegexpHelper.PatternCacheKey = new RegexpHelper.PatternCacheKey(patternString, flags);
        let result : Pattern;
        {
            result = <Pattern>RegexpHelper.patternCache_$LI$().get(patternKey);
        };
        if(result != null) {
            return result;
        }
        try {
            result = Pattern.compile(patternString, flags);
        } catch(e) {
            throw new _TemplateModelException(e, "Malformed regular expression: ", new _DelayedGetMessage(e));
        };
        {
            RegexpHelper.patternCache_$LI$().put(patternKey, result);
        };
        return result;
    }

    static parseFlagString(flagString : string) : number {
        let flags : number = 0;
        for(let i : number = 0; i < flagString.length; i++) {
            let c : string = flagString.charAt(i);
            switch((c).charCodeAt(0)) {
            case 105 /* 'i' */:
                flags |= RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$();
                break;
            case 109 /* 'm' */:
                flags |= RegexpHelper.RE_FLAG_MULTILINE_$LI$();
                break;
            case 99 /* 'c' */:
                flags |= RegexpHelper.RE_FLAG_COMMENTS_$LI$();
                break;
            case 115 /* 's' */:
                flags |= RegexpHelper.RE_FLAG_DOTALL_$LI$();
                break;
            case 114 /* 'r' */:
                flags |= RegexpHelper.RE_FLAG_REGEXP;
                break;
            case 102 /* 'f' */:
                flags |= RegexpHelper.RE_FLAG_FIRST_ONLY;
                break;
            default:
                if(RegexpHelper.flagWarningsEnabled_$LI$()) {
                    RegexpHelper.logFlagWarning("Unrecognized regular expression flag: " + StringUtil.jQuote$java_lang_Object(/* valueOf */new String(c).toString()) + ".");
                }
            }
        };
        return flags;
    }

    /**
     * Logs flag warning for a limited number of times. This is used to prevent
     * log flooding.
     * @param {String} message
     */
    static logFlagWarning(message : string) {
        if(!RegexpHelper.flagWarningsEnabled_$LI$()) return;
        let cnt : number;
        {
            cnt = RegexpHelper.flagWarningsCnt;
            if(cnt < RegexpHelper.MAX_FLAG_WARNINGS_LOGGED) {
                RegexpHelper.flagWarningsCnt++;
            } else {
                RegexpHelper.flagWarningsEnabled = false;
                return;
            }
        };
        message += " This will be an error in some later FreeMarker version!";
        if(cnt + 1 === RegexpHelper.MAX_FLAG_WARNINGS_LOGGED) {
            message += " [Will not log more regular expression flag problems until restart!]";
        }
        RegexpHelper.LOG_$LI$().warn$java_lang_String(message);
    }

    static checkNonRegexpFlags(biName : string, flags : number) {
        RegexpHelper.checkOnlyHasNonRegexpFlags(biName, flags, false);
    }

    static checkOnlyHasNonRegexpFlags(biName : string, flags : number, strict : boolean) {
        if(!strict && !RegexpHelper.flagWarningsEnabled_$LI$()) return;
        let flag : string;
        if((flags & RegexpHelper.RE_FLAG_MULTILINE_$LI$()) !== 0) {
            flag = "m";
        } else if((flags & RegexpHelper.RE_FLAG_DOTALL_$LI$()) !== 0) {
            flag = "s";
        } else if((flags & RegexpHelper.RE_FLAG_COMMENTS_$LI$()) !== 0) {
            flag = "c";
        } else {
            return;
        }
        let msg : Array<any> = ["?", biName, " doesn\'t support the \"", flag, "\" flag without the \"r\" flag."];
        if(strict) {
            throw <any>new (__Function.prototype.bind.apply(_TemplateModelException, [null].concat(<any[]>msg)));
        } else {
            RegexpHelper.logFlagWarning(<any>new (__Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>msg))).toString());
        }
    }
}
RegexpHelper["__class"] = "freemarker.core.RegexpHelper";


export namespace RegexpHelper {

    export class PatternCacheKey {
        patternString : string;

        flags : number;

        __hashCode : number;

        public constructor(patternString : string, flags : number) {
            if(this.patternString===undefined) this.patternString = null;
            if(this.flags===undefined) this.flags = 0;
            if(this.__hashCode===undefined) this.__hashCode = 0;
            this.patternString = patternString;
            this.flags = flags;
            this.__hashCode = /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(patternString)) + 31 * flags;
        }

        /**
         * 
         * @param {Object} that
         * @return {boolean}
         */
        public equals(that : any) : boolean {
            if(that != null && that instanceof <any>RegexpHelper.PatternCacheKey) {
                let thatPCK : RegexpHelper.PatternCacheKey = <RegexpHelper.PatternCacheKey>that;
                return thatPCK.flags === this.flags && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(thatPCK.patternString,this.patternString));
            } else {
                return false;
            }
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return this.__hashCode;
        }
    }
    PatternCacheKey["__class"] = "freemarker.core.RegexpHelper.PatternCacheKey";

}



var __Function = Function;

RegexpHelper.RE_FLAG_DOTALL_$LI$();

RegexpHelper.RE_FLAG_COMMENTS_$LI$();

RegexpHelper.RE_FLAG_MULTILINE_$LI$();

RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$();

RegexpHelper.patternCache_$LI$();

RegexpHelper.flagWarningsCntSync_$LI$();

RegexpHelper.flagWarningsEnabled_$LI$();

RegexpHelper.LOG_$LI$();
