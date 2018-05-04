/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Template } from '../template/Template';
import { TemplateException } from '../template/TemplateException';
import { TemplateHashModelEx } from '../template/TemplateHashModelEx';
import { TemplateHashModelEx2 } from '../template/TemplateHashModelEx2';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { StringUtil } from '../template/utility/StringUtil';
import { Macro } from './Macro';
import { TemplateObject } from './TemplateObject';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { Expression } from './Expression';
import { NumberLiteral } from './NumberLiteral';
import { StringLiteral } from './StringLiteral';
import { BooleanLiteral } from './BooleanLiteral';
import { ListLiteral } from './ListLiteral';
import { HashLiteral } from './HashLiteral';
import { Identifier } from './Identifier';
import { Dot } from './Dot';
import { DynamicKeyName } from './DynamicKeyName';
import { MethodCall } from './MethodCall';
import { BuiltIn } from './BuiltIn';
import { ExistsExpression } from './ExistsExpression';
import { ParentheticalExpression } from './ParentheticalExpression';
import { _TemplateModelException } from './_TemplateModelException';
import { _DelayedAOrAn } from './_DelayedAOrAn';
import { _DelayedFTLTypeDescription } from './_DelayedFTLTypeDescription';
import { Environment } from './Environment';
import { _MiscTemplateException } from './_MiscTemplateException';
import { UnknownDateTypeFormattingUnsupportedException } from './UnknownDateTypeFormattingUnsupportedException';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';
import { TemplateDateFormat } from './TemplateDateFormat';
import { TemplateValueFormatException } from './TemplateValueFormatException';
import { _DelayedJQuote } from './_DelayedJQuote';
import { TemplateNumberFormat } from './TemplateNumberFormat';
import { _DelayedShortClassName } from './_DelayedShortClassName';
import { Character } from '../../java/lang/Character';

/**
 * Used internally only, might changes without notice!
 * Utilities for creating error messages (and other messages).
 * @class
 */
export class _MessageUtil {
    static UNKNOWN_DATE_TO_STRING_ERROR_MESSAGE : string = "Can\'t convert the date-like value to string because it isn\'t known if it\'s a date (no time part), time or date-time value.";

    static UNKNOWN_DATE_PARSING_ERROR_MESSAGE : string = "Can\'t parse the string to date-like value because it isn\'t known if it\'s desired result should be a date (no time part), a time, or a date-time value.";

    static UNKNOWN_DATE_TYPE_ERROR_TIP : string = "Use ?date, ?time, or ?datetime to tell FreeMarker the exact type.";

    static UNKNOWN_DATE_TO_STRING_TIPS : Array<any>; public static UNKNOWN_DATE_TO_STRING_TIPS_$LI$() : Array { if(_MessageUtil.UNKNOWN_DATE_TO_STRING_TIPS == null) _MessageUtil.UNKNOWN_DATE_TO_STRING_TIPS = [_MessageUtil.UNKNOWN_DATE_TYPE_ERROR_TIP, "If you need a particular format only once, use ?string(pattern), like ?string(\'dd.MM.yyyy HH:mm:ss\'), to specify which fields to display. "]; return _MessageUtil.UNKNOWN_DATE_TO_STRING_TIPS; };

    static EMBEDDED_MESSAGE_BEGIN : string = "---begin-message---\n";

    static EMBEDDED_MESSAGE_END : string = "\n---end-message---";

    constructor() {
    }

    public static formatLocationForSimpleParsingError$freemarker_template_Template$int$int(template : Template, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$freemarker_template_Template$int$int("in", template, line, column);
    }

    public static formatLocationForSimpleParsingError(template? : any, line? : any, column? : any) : any {
        if(((template != null && template instanceof <any>Template) || template === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocationForSimpleParsingError$freemarker_template_Template$int$int(template, line, column);
        } else if(((typeof template === 'string') || template === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocationForSimpleParsingError$java_lang_String$int$int(template, line, column);
        } else throw new Error('invalid overload');
    }

    static formatLocationForSimpleParsingError$java_lang_String$int$int(templateSourceName : string, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$java_lang_String$int$int("in", templateSourceName, line, column);
    }

    public static formatLocationForDependentParsingError$freemarker_template_Template$int$int(template : Template, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$freemarker_template_Template$int$int("on", template, line, column);
    }

    public static formatLocationForDependentParsingError(template? : any, line? : any, column? : any) : any {
        if(((template != null && template instanceof <any>Template) || template === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocationForDependentParsingError$freemarker_template_Template$int$int(template, line, column);
        } else if(((typeof template === 'string') || template === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocationForDependentParsingError$java_lang_String$int$int(template, line, column);
        } else throw new Error('invalid overload');
    }

    static formatLocationForDependentParsingError$java_lang_String$int$int(templateSourceName : string, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$java_lang_String$int$int("on", templateSourceName, line, column);
    }

    public static formatLocationForEvaluationError$freemarker_template_Template$int$int(template : Template, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$freemarker_template_Template$int$int("at", template, line, column);
    }

    public static formatLocationForEvaluationError(template? : any, line? : any, column? : any) : any {
        if(((template != null && template instanceof <any>Template) || template === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocationForEvaluationError$freemarker_template_Template$int$int(template, line, column);
        } else if(((template != null && template instanceof <any>Macro) || template === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocationForEvaluationError$freemarker_core_Macro$int$int(template, line, column);
        } else if(((typeof template === 'string') || template === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocationForEvaluationError$java_lang_String$int$int(template, line, column);
        } else throw new Error('invalid overload');
    }

    static formatLocationForEvaluationError$freemarker_core_Macro$int$int(macro : Macro, line : number, column : number) : string {
        let t : Template = macro.getTemplate();
        return _MessageUtil.formatLocation$java_lang_String$java_lang_String$java_lang_String$boolean$int$int("at", t != null?t.getSourceName():null, macro.getName(), macro.isFunction(), line, column);
    }

    static formatLocationForEvaluationError$java_lang_String$int$int(templateSourceName : string, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$java_lang_String$int$int("at", templateSourceName, line, column);
    }

    /*private*/ static formatLocation$java_lang_String$freemarker_template_Template$int$int(preposition : string, template : Template, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$java_lang_String$int$int(preposition, template != null?template.getSourceName():null, line, column);
    }

    /*private*/ static formatLocation$java_lang_String$java_lang_String$int$int(preposition : string, templateSourceName : string, line : number, column : number) : string {
        return _MessageUtil.formatLocation$java_lang_String$java_lang_String$java_lang_String$boolean$int$int(preposition, templateSourceName, null, false, line, column);
    }

    public static formatLocation$java_lang_String$java_lang_String$java_lang_String$boolean$int$int(preposition : string, templateSourceName : string, macroOrFuncName : string, isFunction : boolean, line : number, column : number) : string {
        let templateDesc : string;
        if(line < 0) {
            templateDesc = "?eval-ed string";
            macroOrFuncName = null;
        } else {
            templateDesc = templateSourceName != null?"template " + StringUtil.jQuoteNoXSS$java_lang_Object(templateSourceName):"nameless template";
        }
        return "in " + templateDesc + (macroOrFuncName != null?" in " + (isFunction?"function ":"macro ") + StringUtil.jQuote$java_lang_Object(macroOrFuncName):"") + " " + preposition + " " + _MessageUtil.formatPosition(line, column);
    }

    public static formatLocation(preposition? : any, templateSourceName? : any, macroOrFuncName? : any, isFunction? : any, line? : any, column? : any) : any {
        if(((typeof preposition === 'string') || preposition === null) && ((typeof templateSourceName === 'string') || templateSourceName === null) && ((typeof macroOrFuncName === 'string') || macroOrFuncName === null) && ((typeof isFunction === 'boolean') || isFunction === null) && ((typeof line === 'number') || line === null) && ((typeof column === 'number') || column === null)) {
            return <any>_MessageUtil.formatLocation$java_lang_String$java_lang_String$java_lang_String$boolean$int$int(preposition, templateSourceName, macroOrFuncName, isFunction, line, column);
        } else if(((typeof preposition === 'string') || preposition === null) && ((templateSourceName != null && templateSourceName instanceof <any>Template) || templateSourceName === null) && ((typeof macroOrFuncName === 'number') || macroOrFuncName === null) && ((typeof isFunction === 'number') || isFunction === null) && line === undefined && column === undefined) {
            return <any>_MessageUtil.formatLocation$java_lang_String$freemarker_template_Template$int$int(preposition, templateSourceName, macroOrFuncName, isFunction);
        } else if(((typeof preposition === 'string') || preposition === null) && ((typeof templateSourceName === 'string') || templateSourceName === null) && ((typeof macroOrFuncName === 'number') || macroOrFuncName === null) && ((typeof isFunction === 'number') || isFunction === null) && line === undefined && column === undefined) {
            return <any>_MessageUtil.formatLocation$java_lang_String$java_lang_String$int$int(preposition, templateSourceName, macroOrFuncName, isFunction);
        } else throw new Error('invalid overload');
    }

    static formatPosition(line : number, column : number) : string {
        return "line " + (line >= 0?line:line - (TemplateObject.RUNTIME_EVAL_LINE_DISPLACEMENT - 1)) + ", column " + column;
    }

    /**
     * Returns a single line string that is no longer than {@code maxLength}.
     * If will truncate the string at line-breaks too.
     * The truncation is always signaled with a a {@code "..."} at the end of the result string.
     * @param {String} s
     * @param {number} maxLength
     * @return {String}
     */
    public static shorten(s : string, maxLength : number) : string {
        if(maxLength < 5) maxLength = 5;
        let isTruncated : boolean = false;
        let brIdx : number = s.indexOf('\n');
        if(brIdx !== -1) {
            s = s.substring(0, brIdx);
            isTruncated = true;
        }
        brIdx = s.indexOf('\r');
        if(brIdx !== -1) {
            s = s.substring(0, brIdx);
            isTruncated = true;
        }
        if(s.length > maxLength) {
            s = s.substring(0, maxLength - 3);
            isTruncated = true;
        }
        if(!isTruncated) {
            return s;
        } else {
            if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, ".")) {
                if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, "..")) {
                    if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, "...")) {
                        return s;
                    } else {
                        return s + ".";
                    }
                } else {
                    return s + "..";
                }
            } else {
                return s + "...";
            }
        }
    }

    public static appendExpressionAsUntearable(sb : StringBuilder, argExp : Expression) : StringBuilder {
        let needParen : boolean = !(argExp != null && argExp instanceof <any>NumberLiteral) && !(argExp != null && argExp instanceof <any>StringLiteral) && !(argExp != null && argExp instanceof <any>BooleanLiteral) && !(argExp != null && argExp instanceof <any>ListLiteral) && !(argExp != null && argExp instanceof <any>HashLiteral) && !(argExp != null && argExp instanceof <any>Identifier) && !(argExp != null && argExp instanceof <any>Dot) && !(argExp != null && argExp instanceof <any>DynamicKeyName) && !(argExp != null && argExp instanceof <any>MethodCall) && !(argExp != null && argExp instanceof <any>BuiltIn) && !(argExp != null && argExp instanceof <any>ExistsExpression) && !(argExp != null && argExp instanceof <any>ParentheticalExpression);
        if(needParen) sb.append('(');
        sb.append(argExp.getCanonicalForm());
        if(needParen) sb.append(')');
        return sb;
    }

    public static newArgCntError$java_lang_String$int$int(methodName : string, argCnt : number, expectedCnt : number) : TemplateModelException {
        return _MessageUtil.newArgCntError$java_lang_String$int$int$int(methodName, argCnt, expectedCnt, expectedCnt);
    }

    public static newArgCntError$java_lang_String$int$int$int(methodName : string, argCnt : number, minCnt : number, maxCnt : number) : TemplateModelException {
        let desc : Array<any> = <any>([]);
        /* add */(desc.push(methodName)>0);
        /* add */(desc.push("(")>0);
        if(maxCnt !== 0) /* add */(desc.push("...")>0);
        /* add */(desc.push(") expects ")>0);
        if(minCnt === maxCnt) {
            if(maxCnt === 0) {
                /* add */(desc.push("no")>0);
            } else {
                /* add */(desc.push(maxCnt)>0);
            }
        } else if(maxCnt - minCnt === 1) {
            /* add */(desc.push(minCnt)>0);
            /* add */(desc.push(" or ")>0);
            /* add */(desc.push(maxCnt)>0);
        } else {
            /* add */(desc.push(minCnt)>0);
            if(maxCnt !== Number.MAX_VALUE) {
                /* add */(desc.push(" to ")>0);
                /* add */(desc.push(maxCnt)>0);
            } else {
                /* add */(desc.push(" or more (unlimited)")>0);
            }
        }
        /* add */(desc.push(" argument")>0);
        if(maxCnt > 1) /* add */(desc.push("s")>0);
        /* add */(desc.push(" but has received ")>0);
        if(argCnt === 0) {
            /* add */(desc.push("none")>0);
        } else {
            /* add */(desc.push(argCnt)>0);
        }
        /* add */(desc.push(".")>0);
        return <any>new (__Function.prototype.bind.apply(_TemplateModelException, [null].concat(<any[]>/* toArray */desc.slice(0))));
    }

    public static newArgCntError(methodName? : any, argCnt? : any, minCnt? : any, maxCnt? : any) : any {
        if(((typeof methodName === 'string') || methodName === null) && ((typeof argCnt === 'number') || argCnt === null) && ((typeof minCnt === 'number') || minCnt === null) && ((typeof maxCnt === 'number') || maxCnt === null)) {
            return <any>_MessageUtil.newArgCntError$java_lang_String$int$int$int(methodName, argCnt, minCnt, maxCnt);
        } else if(((typeof methodName === 'string') || methodName === null) && ((typeof argCnt === 'number') || argCnt === null) && ((typeof minCnt === 'number') || minCnt === null) && maxCnt === undefined) {
            return <any>_MessageUtil.newArgCntError$java_lang_String$int$int(methodName, argCnt, minCnt);
        } else throw new Error('invalid overload');
    }

    public static newMethodArgMustBeStringException(methodName : string, argIdx : number, arg : TemplateModel) : TemplateModelException {
        return _MessageUtil.newMethodArgUnexpectedTypeException(methodName, argIdx, "string", arg);
    }

    public static newMethodArgMustBeNumberException(methodName : string, argIdx : number, arg : TemplateModel) : TemplateModelException {
        return _MessageUtil.newMethodArgUnexpectedTypeException(methodName, argIdx, "number", arg);
    }

    public static newMethodArgMustBeBooleanException(methodName : string, argIdx : number, arg : TemplateModel) : TemplateModelException {
        return _MessageUtil.newMethodArgUnexpectedTypeException(methodName, argIdx, "boolean", arg);
    }

    public static newMethodArgMustBeExtendedHashException(methodName : string, argIdx : number, arg : TemplateModel) : TemplateModelException {
        return _MessageUtil.newMethodArgUnexpectedTypeException(methodName, argIdx, "extended hash", arg);
    }

    public static newMethodArgMustBeSequenceException(methodName : string, argIdx : number, arg : TemplateModel) : TemplateModelException {
        return _MessageUtil.newMethodArgUnexpectedTypeException(methodName, argIdx, "sequence", arg);
    }

    public static newMethodArgMustBeSequenceOrCollectionException(methodName : string, argIdx : number, arg : TemplateModel) : TemplateModelException {
        return _MessageUtil.newMethodArgUnexpectedTypeException(methodName, argIdx, "sequence or collection", arg);
    }

    public static newMethodArgUnexpectedTypeException(methodName : string, argIdx : number, expectedType : string, arg : TemplateModel) : TemplateModelException {
        return new _TemplateModelException(methodName, "(...) expects ", new _DelayedAOrAn(expectedType), " as argument #", argIdx + 1, ", but received ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(arg)), ".");
    }

    /**
     * The type of the argument was good, but it's value wasn't.
     * @param {String} methodName
     * @param {number} argIdx
     * @param {Array} details
     * @return {TemplateModelException}
     */
    public static newMethodArgInvalidValueException(methodName : string, argIdx : number, ...details : Array) : TemplateModelException {
        return <any>new (__Function.prototype.bind.apply(_TemplateModelException, [null, methodName, "(...) argument #", argIdx + 1, " had invalid value: "].concat(<any[]>details)));
    }

    /**
     * The type of the argument was good, but the values of two or more arguments are inconsistent with each other.
     * @param {String} methodName
     * @param {Array} details
     * @return {TemplateModelException}
     */
    public static newMethodArgsInvalidValueException(methodName : string, ...details : Array) : TemplateModelException {
        return <any>new (__Function.prototype.bind.apply(_TemplateModelException, [null, methodName, "(...) arguments have invalid value: "].concat(<any[]>details)));
    }

    public static newInstantiatingClassNotAllowedException(className : string, env : Environment) : TemplateException {
        return new _MiscTemplateException(env, "Instantiating ", className, " is not allowed in the template for security reasons.");
    }

    public static newCantFormatUnknownTypeDateException(dateSourceExpr : Expression, cause : UnknownDateTypeFormattingUnsupportedException) : _TemplateModelException {
        return new _TemplateModelException(cause, null, (o => o.tips.apply(o, _MessageUtil.UNKNOWN_DATE_TO_STRING_TIPS_$LI$()))(new _ErrorDescriptionBuilder(_MessageUtil.UNKNOWN_DATE_TO_STRING_ERROR_MESSAGE).blame(dateSourceExpr)));
    }

    public static newCantFormatDateException(format : TemplateDateFormat, dataSrcExp : Expression, e : TemplateValueFormatException, useTempModelExc : boolean) : TemplateException {
        let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder("Failed to format date/time/datetime with format ", new _DelayedJQuote(format.getDescription()), ": ", e.message).blame(dataSrcExp);
        return useTempModelExc?new _TemplateModelException(e, null, desc):new _MiscTemplateException(e, null, desc);
    }

    public static newCantFormatNumberException(format : TemplateNumberFormat, dataSrcExp : Expression, e : TemplateValueFormatException, useTempModelExc : boolean) : TemplateException {
        let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder("Failed to format number with format ", new _DelayedJQuote(format.getDescription()), ": ", e.message).blame(dataSrcExp);
        return useTempModelExc?new _TemplateModelException(e, null, desc):new _MiscTemplateException(e, null, desc);
    }

    public static newKeyValuePairListingNonStringKeyExceptionMessage(key : TemplateModel, listedHashEx : TemplateHashModelEx) : TemplateModelException {
        return new _TemplateModelException(new _ErrorDescriptionBuilder("When listing key-value pairs of traditional hash implementations, all keys must be strings, but one of them was ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(key)), ".").tip("The listed value\'s TemplateModel class was ", new _DelayedShortClassName((<any>listedHashEx.constructor)), ", which doesn\'t implement ", new _DelayedShortClassName("freemarker.template.TemplateHashModelEx2"), ", which leads to this restriction."));
    }

    /**
     * @return {String} "a" or "an" or "a(n)" (or "" for empty string) for an FTL type name
     * @param {String} s
     */
    public static getAOrAn(s : string) : string {
        if(s == null) return null;
        if(s.length === 0) return "";
        let fc : string = Character.toLowerCase(s.charAt(0));
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fc) == 'a'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fc) == 'e'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fc) == 'i'.charCodeAt(0)) {
            return "an";
        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fc) == 'h'.charCodeAt(0)) {
            let ls : string = s.toLowerCase();
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(ls, "has") || /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(ls, "hi")) {
                return "a";
            } else if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(ls, "ht")) {
                return "an";
            } else {
                return "a(n)";
            }
        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fc) == 'u'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fc) == 'o'.charCodeAt(0)) {
            return "a(n)";
        } else {
            let sc : string = (s.length > 1)?s.charAt(1):'\u0000';
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fc) == 'x'.charCodeAt(0) && !((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sc) == 'a'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sc) == 'e'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sc) == 'i'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sc) == 'a'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sc) == 'o'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sc) == 'u'.charCodeAt(0))) {
                return "an";
            } else {
                return "a";
            }
        }
    }
}
_MessageUtil["__class"] = "freemarker.core._MessageUtil";



var __Function = Function;

_MessageUtil.UNKNOWN_DATE_TO_STRING_TIPS_$LI$();
