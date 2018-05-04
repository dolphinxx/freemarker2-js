/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Configuration } from '../template/Configuration';
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { DateUtil } from '../template/utility/DateUtil';
import { StringUtil } from '../template/utility/StringUtil';
import { Expression } from './Expression';
import { BuiltInsForNumbers } from './BuiltInsForNumbers';
import { BuiltInsForStringsMisc } from './BuiltInsForStringsMisc';
import { BuiltInsForNodes } from './BuiltInsForNodes';
import { BuiltInsForMultipleTypes } from './BuiltInsForMultipleTypes';
import { BuiltInsForStringsBasic } from './BuiltInsForStringsBasic';
import { BuiltInsForDates } from './BuiltInsForDates';
import { BuiltInsForExistenceHandling } from './BuiltInsForExistenceHandling';
import { BuiltInsForOutputFormatRelated } from './BuiltInsForOutputFormatRelated';
import { BuiltInsForSequences } from './BuiltInsForSequences';
import { BuiltInsForLoopVariables } from './BuiltInsForLoopVariables';
import { BuiltInsForStringsEncoding } from './BuiltInsForStringsEncoding';
import { Interpret } from './Interpret';
import { Boolean } from '../../java/lang/Boolean';
import { BuiltInsForHashes } from './BuiltInsForHashes';
import { NewBI } from './NewBI';
import { BuiltInsForMarkupOutputs } from './BuiltInsForMarkupOutputs';
import { BuiltInsWithParseTimeParameters } from './BuiltInsWithParseTimeParameters';
import { BuiltInsForStringsRegexp } from './BuiltInsForStringsRegexp';
import { Token } from './Token';
import { FMParserTokenManager } from './FMParserTokenManager';
import { ParseException } from './ParseException';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { Version } from '../template/Version';
import { _CoreStringUtils } from './_CoreStringUtils';
import { ICIChainMember } from './ICIChainMember';
import { _MessageUtil } from './_MessageUtil';
import { EvalUtil } from './EvalUtil';
import { ParameterRole } from './ParameterRole';

/**
 * The {@code ?} operator used for things like {@code foo?upper_case}.
 * @extends Expression
 * @class
 */
export abstract class BuiltIn extends Expression {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!BuiltIn.__static_initialized) { BuiltIn.__static_initialized = true; BuiltIn.__static_initializer_0(); } }

    target : Expression;

    key : string;

    static CAMEL_CASE_NAMES : Set; public static CAMEL_CASE_NAMES_$LI$() : Set { BuiltIn.__static_initialize(); if(BuiltIn.CAMEL_CASE_NAMES == null) BuiltIn.CAMEL_CASE_NAMES = <any>([]); return BuiltIn.CAMEL_CASE_NAMES; };

    static SNAKE_CASE_NAMES : Set; public static SNAKE_CASE_NAMES_$LI$() : Set { BuiltIn.__static_initialize(); if(BuiltIn.SNAKE_CASE_NAMES == null) BuiltIn.SNAKE_CASE_NAMES = <any>([]); return BuiltIn.SNAKE_CASE_NAMES; };

    static NUMBER_OF_BIS : number = 268;

    static BUILT_INS_BY_NAME : HashMap; public static BUILT_INS_BY_NAME_$LI$() : HashMap { BuiltIn.__static_initialize(); if(BuiltIn.BUILT_INS_BY_NAME == null) BuiltIn.BUILT_INS_BY_NAME = <any>(new Map<any, any>()); return BuiltIn.BUILT_INS_BY_NAME; };

    static __static_initializer_0() {
        BuiltIn.putBI("abs", new BuiltInsForNumbers.absBI());
        BuiltIn.putBI("absolute_template_name", "absoluteTemplateName", new BuiltInsForStringsMisc.absolute_template_nameBI());
        BuiltIn.putBI("ancestors", new BuiltInsForNodes.ancestorsBI());
        BuiltIn.putBI("api", new BuiltInsForMultipleTypes.apiBI());
        BuiltIn.putBI("boolean", new BuiltInsForStringsMisc.booleanBI());
        BuiltIn.putBI("byte", new BuiltInsForNumbers.byteBI());
        BuiltIn.putBI("c", new BuiltInsForMultipleTypes.cBI());
        BuiltIn.putBI("cap_first", "capFirst", new BuiltInsForStringsBasic.cap_firstBI());
        BuiltIn.putBI("capitalize", new BuiltInsForStringsBasic.capitalizeBI());
        BuiltIn.putBI("ceiling", new BuiltInsForNumbers.ceilingBI());
        BuiltIn.putBI("children", new BuiltInsForNodes.childrenBI());
        BuiltIn.putBI("chop_linebreak", "chopLinebreak", new BuiltInsForStringsBasic.chop_linebreakBI());
        BuiltIn.putBI("contains", new BuiltInsForStringsBasic.containsBI());
        BuiltIn.putBI("date", new BuiltInsForMultipleTypes.dateBI(TemplateDateModel.DATE));
        BuiltIn.putBI("date_if_unknown", "dateIfUnknown", new BuiltInsForDates.dateType_if_unknownBI(TemplateDateModel.DATE));
        BuiltIn.putBI("datetime", new BuiltInsForMultipleTypes.dateBI(TemplateDateModel.DATETIME));
        BuiltIn.putBI("datetime_if_unknown", "datetimeIfUnknown", new BuiltInsForDates.dateType_if_unknownBI(TemplateDateModel.DATETIME));
        BuiltIn.putBI("default", new BuiltInsForExistenceHandling.defaultBI());
        BuiltIn.putBI("double", new BuiltInsForNumbers.doubleBI());
        BuiltIn.putBI("ends_with", "endsWith", new BuiltInsForStringsBasic.ends_withBI());
        BuiltIn.putBI("ensure_ends_with", "ensureEndsWith", new BuiltInsForStringsBasic.ensure_ends_withBI());
        BuiltIn.putBI("ensure_starts_with", "ensureStartsWith", new BuiltInsForStringsBasic.ensure_starts_withBI());
        BuiltIn.putBI("esc", new BuiltInsForOutputFormatRelated.escBI());
        BuiltIn.putBI("eval", new BuiltInsForStringsMisc.evalBI());
        BuiltIn.putBI("exists", new BuiltInsForExistenceHandling.existsBI());
        BuiltIn.putBI("first", new BuiltInsForSequences.firstBI());
        BuiltIn.putBI("float", new BuiltInsForNumbers.floatBI());
        BuiltIn.putBI("floor", new BuiltInsForNumbers.floorBI());
        BuiltIn.putBI("chunk", new BuiltInsForSequences.chunkBI());
        BuiltIn.putBI("counter", new BuiltInsForLoopVariables.counterBI());
        BuiltIn.putBI("item_cycle", "itemCycle", new BuiltInsForLoopVariables.item_cycleBI());
        BuiltIn.putBI("has_api", "hasApi", new BuiltInsForMultipleTypes.has_apiBI());
        BuiltIn.putBI("has_content", "hasContent", new BuiltInsForExistenceHandling.has_contentBI());
        BuiltIn.putBI("has_next", "hasNext", new BuiltInsForLoopVariables.has_nextBI());
        BuiltIn.putBI("html", new BuiltInsForStringsEncoding.htmlBI());
        BuiltIn.putBI("if_exists", "ifExists", new BuiltInsForExistenceHandling.if_existsBI());
        BuiltIn.putBI("index", new BuiltInsForLoopVariables.indexBI());
        BuiltIn.putBI("index_of", "indexOf", new BuiltInsForStringsBasic.index_ofBI(false));
        BuiltIn.putBI("int", new BuiltInsForNumbers.intBI());
        BuiltIn.putBI("interpret", new Interpret());
        BuiltIn.putBI("is_boolean", "isBoolean", new BuiltInsForMultipleTypes.is_booleanBI());
        BuiltIn.putBI("is_collection", "isCollection", new BuiltInsForMultipleTypes.is_collectionBI());
        BuiltIn.putBI("is_collection_ex", "isCollectionEx", new BuiltInsForMultipleTypes.is_collection_exBI());
        let bi : BuiltInsForMultipleTypes.is_dateLikeBI = new BuiltInsForMultipleTypes.is_dateLikeBI();
        BuiltIn.putBI("is_date", "isDate", bi);
        BuiltIn.putBI("is_date_like", "isDateLike", bi);
        BuiltIn.putBI("is_date_only", "isDateOnly", new BuiltInsForMultipleTypes.is_dateOfTypeBI(TemplateDateModel.DATE));
        BuiltIn.putBI("is_even_item", "isEvenItem", new BuiltInsForLoopVariables.is_even_itemBI());
        BuiltIn.putBI("is_first", "isFirst", new BuiltInsForLoopVariables.is_firstBI());
        BuiltIn.putBI("is_last", "isLast", new BuiltInsForLoopVariables.is_lastBI());
        BuiltIn.putBI("is_unknown_date_like", "isUnknownDateLike", new BuiltInsForMultipleTypes.is_dateOfTypeBI(TemplateDateModel.UNKNOWN));
        BuiltIn.putBI("is_datetime", "isDatetime", new BuiltInsForMultipleTypes.is_dateOfTypeBI(TemplateDateModel.DATETIME));
        BuiltIn.putBI("is_directive", "isDirective", new BuiltInsForMultipleTypes.is_directiveBI());
        BuiltIn.putBI("is_enumerable", "isEnumerable", new BuiltInsForMultipleTypes.is_enumerableBI());
        BuiltIn.putBI("is_hash_ex", "isHashEx", new BuiltInsForMultipleTypes.is_hash_exBI());
        BuiltIn.putBI("is_hash", "isHash", new BuiltInsForMultipleTypes.is_hashBI());
        BuiltIn.putBI("is_infinite", "isInfinite", new BuiltInsForNumbers.is_infiniteBI());
        BuiltIn.putBI("is_indexable", "isIndexable", new BuiltInsForMultipleTypes.is_indexableBI());
        BuiltIn.putBI("is_macro", "isMacro", new BuiltInsForMultipleTypes.is_macroBI());
        BuiltIn.putBI("is_markup_output", "isMarkupOutput", new BuiltInsForMultipleTypes.is_markup_outputBI());
        BuiltIn.putBI("is_method", "isMethod", new BuiltInsForMultipleTypes.is_methodBI());
        BuiltIn.putBI("is_nan", "isNan", new BuiltInsForNumbers.is_nanBI());
        BuiltIn.putBI("is_node", "isNode", new BuiltInsForMultipleTypes.is_nodeBI());
        BuiltIn.putBI("is_number", "isNumber", new BuiltInsForMultipleTypes.is_numberBI());
        BuiltIn.putBI("is_odd_item", "isOddItem", new BuiltInsForLoopVariables.is_odd_itemBI());
        BuiltIn.putBI("is_sequence", "isSequence", new BuiltInsForMultipleTypes.is_sequenceBI());
        BuiltIn.putBI("is_string", "isString", new BuiltInsForMultipleTypes.is_stringBI());
        BuiltIn.putBI("is_time", "isTime", new BuiltInsForMultipleTypes.is_dateOfTypeBI(TemplateDateModel.TIME));
        BuiltIn.putBI("is_transform", "isTransform", new BuiltInsForMultipleTypes.is_transformBI());
        BuiltIn.putBI("iso_utc", "isoUtc", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_SECONDS, true));
        BuiltIn.putBI("iso_utc_fz", "isoUtcFZ", new BuiltInsForDates.iso_utc_or_local_BI(true, DateUtil.ACCURACY_SECONDS, true));
        BuiltIn.putBI("iso_utc_nz", "isoUtcNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_SECONDS, true));
        BuiltIn.putBI("iso_utc_ms", "isoUtcMs", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_MILLISECONDS, true));
        BuiltIn.putBI("iso_utc_ms_nz", "isoUtcMsNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_MILLISECONDS, true));
        BuiltIn.putBI("iso_utc_m", "isoUtcM", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_MINUTES, true));
        BuiltIn.putBI("iso_utc_m_nz", "isoUtcMNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_MINUTES, true));
        BuiltIn.putBI("iso_utc_h", "isoUtcH", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_HOURS, true));
        BuiltIn.putBI("iso_utc_h_nz", "isoUtcHNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_HOURS, true));
        BuiltIn.putBI("iso_local", "isoLocal", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_SECONDS, false));
        BuiltIn.putBI("iso_local_nz", "isoLocalNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_SECONDS, false));
        BuiltIn.putBI("iso_local_ms", "isoLocalMs", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_MILLISECONDS, false));
        BuiltIn.putBI("iso_local_ms_nz", "isoLocalMsNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_MILLISECONDS, false));
        BuiltIn.putBI("iso_local_m", "isoLocalM", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_MINUTES, false));
        BuiltIn.putBI("iso_local_m_nz", "isoLocalMNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_MINUTES, false));
        BuiltIn.putBI("iso_local_h", "isoLocalH", new BuiltInsForDates.iso_utc_or_local_BI(null, DateUtil.ACCURACY_HOURS, false));
        BuiltIn.putBI("iso_local_h_nz", "isoLocalHNZ", new BuiltInsForDates.iso_utc_or_local_BI(false, DateUtil.ACCURACY_HOURS, false));
        BuiltIn.putBI("iso", new BuiltInsForDates.iso_BI(null, DateUtil.ACCURACY_SECONDS));
        BuiltIn.putBI("iso_nz", "isoNZ", new BuiltInsForDates.iso_BI(false, DateUtil.ACCURACY_SECONDS));
        BuiltIn.putBI("iso_ms", "isoMs", new BuiltInsForDates.iso_BI(null, DateUtil.ACCURACY_MILLISECONDS));
        BuiltIn.putBI("iso_ms_nz", "isoMsNZ", new BuiltInsForDates.iso_BI(false, DateUtil.ACCURACY_MILLISECONDS));
        BuiltIn.putBI("iso_m", "isoM", new BuiltInsForDates.iso_BI(null, DateUtil.ACCURACY_MINUTES));
        BuiltIn.putBI("iso_m_nz", "isoMNZ", new BuiltInsForDates.iso_BI(false, DateUtil.ACCURACY_MINUTES));
        BuiltIn.putBI("iso_h", "isoH", new BuiltInsForDates.iso_BI(null, DateUtil.ACCURACY_HOURS));
        BuiltIn.putBI("iso_h_nz", "isoHNZ", new BuiltInsForDates.iso_BI(false, DateUtil.ACCURACY_HOURS));
        BuiltIn.putBI("j_string", "jString", new BuiltInsForStringsEncoding.j_stringBI());
        BuiltIn.putBI("join", new BuiltInsForSequences.joinBI());
        BuiltIn.putBI("js_string", "jsString", new BuiltInsForStringsEncoding.js_stringBI());
        BuiltIn.putBI("json_string", "jsonString", new BuiltInsForStringsEncoding.json_stringBI());
        BuiltIn.putBI("keep_after", "keepAfter", new BuiltInsForStringsBasic.keep_afterBI());
        BuiltIn.putBI("keep_before", "keepBefore", new BuiltInsForStringsBasic.keep_beforeBI());
        BuiltIn.putBI("keep_after_last", "keepAfterLast", new BuiltInsForStringsBasic.keep_after_lastBI());
        BuiltIn.putBI("keep_before_last", "keepBeforeLast", new BuiltInsForStringsBasic.keep_before_lastBI());
        BuiltIn.putBI("keys", new BuiltInsForHashes.keysBI());
        BuiltIn.putBI("last_index_of", "lastIndexOf", new BuiltInsForStringsBasic.index_ofBI(true));
        BuiltIn.putBI("last", new BuiltInsForSequences.lastBI());
        BuiltIn.putBI("left_pad", "leftPad", new BuiltInsForStringsBasic.padBI(true));
        BuiltIn.putBI("length", new BuiltInsForStringsBasic.lengthBI());
        BuiltIn.putBI("long", new BuiltInsForNumbers.longBI());
        BuiltIn.putBI("lower_abc", "lowerAbc", new BuiltInsForNumbers.lower_abcBI());
        BuiltIn.putBI("lower_case", "lowerCase", new BuiltInsForStringsBasic.lower_caseBI());
        BuiltIn.putBI("namespace", new BuiltInsForMultipleTypes.namespaceBI());
        BuiltIn.putBI("new", new NewBI());
        BuiltIn.putBI("markup_string", "markupString", new BuiltInsForMarkupOutputs.markup_stringBI());
        BuiltIn.putBI("node_name", "nodeName", new BuiltInsForNodes.node_nameBI());
        BuiltIn.putBI("node_namespace", "nodeNamespace", new BuiltInsForNodes.node_namespaceBI());
        BuiltIn.putBI("node_type", "nodeType", new BuiltInsForNodes.node_typeBI());
        BuiltIn.putBI("no_esc", "noEsc", new BuiltInsForOutputFormatRelated.no_escBI());
        BuiltIn.putBI("max", new BuiltInsForSequences.maxBI());
        BuiltIn.putBI("min", new BuiltInsForSequences.minBI());
        BuiltIn.putBI("number", new BuiltInsForStringsMisc.numberBI());
        BuiltIn.putBI("number_to_date", "numberToDate", new BuiltInsForNumbers.number_to_dateBI(TemplateDateModel.DATE));
        BuiltIn.putBI("number_to_time", "numberToTime", new BuiltInsForNumbers.number_to_dateBI(TemplateDateModel.TIME));
        BuiltIn.putBI("number_to_datetime", "numberToDatetime", new BuiltInsForNumbers.number_to_dateBI(TemplateDateModel.DATETIME));
        BuiltIn.putBI("parent", new BuiltInsForNodes.parentBI());
        BuiltIn.putBI("previous_sibling", "previousSibling", new BuiltInsForNodes.previousSiblingBI());
        BuiltIn.putBI("next_sibling", "nextSibling", new BuiltInsForNodes.nextSiblingBI());
        BuiltIn.putBI("item_parity", "itemParity", new BuiltInsForLoopVariables.item_parityBI());
        BuiltIn.putBI("item_parity_cap", "itemParityCap", new BuiltInsForLoopVariables.item_parity_capBI());
        BuiltIn.putBI("reverse", new BuiltInsForSequences.reverseBI());
        BuiltIn.putBI("right_pad", "rightPad", new BuiltInsForStringsBasic.padBI(false));
        BuiltIn.putBI("root", new BuiltInsForNodes.rootBI());
        BuiltIn.putBI("round", new BuiltInsForNumbers.roundBI());
        BuiltIn.putBI("remove_ending", "removeEnding", new BuiltInsForStringsBasic.remove_endingBI());
        BuiltIn.putBI("remove_beginning", "removeBeginning", new BuiltInsForStringsBasic.remove_beginningBI());
        BuiltIn.putBI("rtf", new BuiltInsForStringsEncoding.rtfBI());
        BuiltIn.putBI("seq_contains", "seqContains", new BuiltInsForSequences.seq_containsBI());
        BuiltIn.putBI("seq_index_of", "seqIndexOf", new BuiltInsForSequences.seq_index_ofBI(true));
        BuiltIn.putBI("seq_last_index_of", "seqLastIndexOf", new BuiltInsForSequences.seq_index_ofBI(false));
        BuiltIn.putBI("sequence", new BuiltInsForSequences.sequenceBI());
        BuiltIn.putBI("short", new BuiltInsForNumbers.shortBI());
        BuiltIn.putBI("size", new BuiltInsForMultipleTypes.sizeBI());
        BuiltIn.putBI("sort_by", "sortBy", new BuiltInsForSequences.sort_byBI());
        BuiltIn.putBI("sort", new BuiltInsForSequences.sortBI());
        BuiltIn.putBI("split", new BuiltInsForStringsBasic.split_BI());
        BuiltIn.putBI("switch", new BuiltInsWithParseTimeParameters.switch_BI());
        BuiltIn.putBI("starts_with", "startsWith", new BuiltInsForStringsBasic.starts_withBI());
        BuiltIn.putBI("string", new BuiltInsForMultipleTypes.stringBI());
        BuiltIn.putBI("substring", new BuiltInsForStringsBasic.substringBI());
        BuiltIn.putBI("then", new BuiltInsWithParseTimeParameters.then_BI());
        BuiltIn.putBI("time", new BuiltInsForMultipleTypes.dateBI(TemplateDateModel.TIME));
        BuiltIn.putBI("time_if_unknown", "timeIfUnknown", new BuiltInsForDates.dateType_if_unknownBI(TemplateDateModel.TIME));
        BuiltIn.putBI("trim", new BuiltInsForStringsBasic.trimBI());
        BuiltIn.putBI("uncap_first", "uncapFirst", new BuiltInsForStringsBasic.uncap_firstBI());
        BuiltIn.putBI("upper_abc", "upperAbc", new BuiltInsForNumbers.upper_abcBI());
        BuiltIn.putBI("upper_case", "upperCase", new BuiltInsForStringsBasic.upper_caseBI());
        BuiltIn.putBI("url", new BuiltInsForStringsEncoding.urlBI());
        BuiltIn.putBI("url_path", "urlPath", new BuiltInsForStringsEncoding.urlPathBI());
        BuiltIn.putBI("values", new BuiltInsForHashes.valuesBI());
        BuiltIn.putBI("web_safe", "webSafe", /* get */BuiltIn.BUILT_INS_BY_NAME_$LI$().get("html"));
        BuiltIn.putBI("word_list", "wordList", new BuiltInsForStringsBasic.word_listBI());
        BuiltIn.putBI("xhtml", new BuiltInsForStringsEncoding.xhtmlBI());
        BuiltIn.putBI("xml", new BuiltInsForStringsEncoding.xmlBI());
        BuiltIn.putBI("matches", new BuiltInsForStringsRegexp.matchesBI());
        BuiltIn.putBI("groups", new BuiltInsForStringsRegexp.groupsBI());
        BuiltIn.putBI("replace", new BuiltInsForStringsRegexp.replace_reBI());
        if(BuiltIn.NUMBER_OF_BIS < /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>BuiltIn.BUILT_INS_BY_NAME_$LI$())) {
            throw Object.defineProperty(new Error("Update NUMBER_OF_BIS! Should be: " + /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>BuiltIn.BUILT_INS_BY_NAME_$LI$())), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object','java.lang.AssertionError'] });
        }
    }

    /*private*/ static putBI$java_lang_String$freemarker_core_BuiltIn(name : string, bi : BuiltIn) {
        /* put */BuiltIn.BUILT_INS_BY_NAME_$LI$().set(name, bi);
        /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(BuiltIn.SNAKE_CASE_NAMES_$LI$(), name);
        /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(BuiltIn.CAMEL_CASE_NAMES_$LI$(), name);
    }

    public static putBI$java_lang_String$java_lang_String$freemarker_core_BuiltIn(nameSnakeCase : string, nameCamelCase : string, bi : BuiltIn) {
        /* put */BuiltIn.BUILT_INS_BY_NAME_$LI$().set(nameSnakeCase, bi);
        /* put */BuiltIn.BUILT_INS_BY_NAME_$LI$().set(nameCamelCase, bi);
        /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(BuiltIn.SNAKE_CASE_NAMES_$LI$(), nameSnakeCase);
        /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(BuiltIn.CAMEL_CASE_NAMES_$LI$(), nameCamelCase);
    }

    public static putBI(nameSnakeCase? : any, nameCamelCase? : any, bi? : any) : any {
        if(((typeof nameSnakeCase === 'string') || nameSnakeCase === null) && ((typeof nameCamelCase === 'string') || nameCamelCase === null) && ((bi != null && bi instanceof <any>BuiltIn) || bi === null)) {
            return <any>BuiltIn.putBI$java_lang_String$java_lang_String$freemarker_core_BuiltIn(nameSnakeCase, nameCamelCase, bi);
        } else if(((typeof nameSnakeCase === 'string') || nameSnakeCase === null) && ((nameCamelCase != null && nameCamelCase instanceof <any>BuiltIn) || nameCamelCase === null) && bi === undefined) {
            return <any>BuiltIn.putBI$java_lang_String$freemarker_core_BuiltIn(nameSnakeCase, nameCamelCase);
        } else throw new Error('invalid overload');
    }

    /**
     * @param {Expression} target Left-hand-operand expression
     * @param {Token} keyTk  Built-in name token
     * @param {number} incompatibleImprovements
     * @param {FMParserTokenManager} tokenManager
     * @return {BuiltIn}
     */
    static newBuiltIn(incompatibleImprovements : number, target : Expression, keyTk : Token, tokenManager : FMParserTokenManager) : BuiltIn {
        let key : string = keyTk.image;
        let bi : BuiltIn = /* get */BuiltIn.BUILT_INS_BY_NAME_$LI$().get(key);
        if(bi == null) {
            let buf : StringBuilder = new StringBuilder("Unknown built-in: ").append(StringUtil.jQuote$java_lang_Object(key)).append(". ");
            buf.append("Help (latest version): https://freemarker.apache.org/docs/ref_builtins.html; you\'re using FreeMarker ").append(Configuration.getVersion()).append(".\nThe alphabetical list of built-ins:");
            let names : Array<any> = <any>([]);
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(names, /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>BuiltIn.BUILT_INS_BY_NAME_$LI$()));
            /* sort */names.sort();
            let lastLetter : string = String.fromCharCode(0);
            let shownNamingConvention : number;
            {
                let namingConvention : number = tokenManager.namingConvention;
                shownNamingConvention = namingConvention !== Configuration.AUTO_DETECT_NAMING_CONVENTION?namingConvention:Configuration.LEGACY_NAMING_CONVENTION;
            };
            let first : boolean = true;
            for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(names); it.hasNext(); ) {
                let correctName : string = <string>it.next();
                let correctNameNamingConvetion : number = _CoreStringUtils.getIdentifierNamingConvention(correctName);
                if(shownNamingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION?correctNameNamingConvetion !== Configuration.LEGACY_NAMING_CONVENTION:correctNameNamingConvetion !== Configuration.CAMEL_CASE_NAMING_CONVENTION) {
                    if(first) {
                        first = false;
                    } else {
                        buf.append(", ");
                    }
                    let firstChar : string = correctName.charAt(0);
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) != (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastLetter)) {
                        lastLetter = firstChar;
                        buf.append('\n');
                    }
                    buf.append(correctName);
                }
            };
            throw new ParseException(buf.toString(), null, keyTk);
        }
        while(((bi != null && (bi["__interfaces"] != null && bi["__interfaces"].indexOf("freemarker.core.ICIChainMember") >= 0 || bi.constructor != null && bi.constructor["__interfaces"] != null && bi.constructor["__interfaces"].indexOf("freemarker.core.ICIChainMember") >= 0)) && incompatibleImprovements < (<ICIChainMember><any>bi).getMinimumICIVersion())) {
            bi = <BuiltIn>(<ICIChainMember><any>bi).getPreviousICIChainMember();
        };
        try {
            bi = <BuiltIn>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(bi);
        } catch(e) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.VirtualMachineError','java.lang.InternalError','java.lang.Error','java.lang.Object'] });
        };
        bi.key = key;
        bi.target = target;
        return bi;
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.target.getCanonicalForm() + "?" + this.key;
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "?" + this.key;
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return false;
    }

    checkMethodArgCount$java_util_List$int(args : Array<any>, expectedCnt : number) {
        this.checkMethodArgCount$int$int(/* size */(<number>args.length), expectedCnt);
    }

    checkMethodArgCount$int$int(argCnt : number, expectedCnt : number) {
        if(argCnt !== expectedCnt) {
            throw _MessageUtil.newArgCntError$java_lang_String$int$int("?" + this.key, argCnt, expectedCnt);
        }
    }

    public checkMethodArgCount$java_util_List$int$int(args : Array<any>, minCnt : number, maxCnt : number) {
        this.checkMethodArgCount$int$int$int(/* size */(<number>args.length), minCnt, maxCnt);
    }

    public checkMethodArgCount(args? : any, minCnt? : any, maxCnt? : any) : any {
        if(((args != null && (args instanceof Array)) || args === null) && ((typeof minCnt === 'number') || minCnt === null) && ((typeof maxCnt === 'number') || maxCnt === null)) {
            return <any>this.checkMethodArgCount$java_util_List$int$int(args, minCnt, maxCnt);
        } else if(((typeof args === 'number') || args === null) && ((typeof minCnt === 'number') || minCnt === null) && ((typeof maxCnt === 'number') || maxCnt === null)) {
            return <any>this.checkMethodArgCount$int$int$int(args, minCnt, maxCnt);
        } else if(((args != null && (args instanceof Array)) || args === null) && ((typeof minCnt === 'number') || minCnt === null) && maxCnt === undefined) {
            return <any>this.checkMethodArgCount$java_util_List$int(args, minCnt);
        } else if(((typeof args === 'number') || args === null) && ((typeof minCnt === 'number') || minCnt === null) && maxCnt === undefined) {
            return <any>this.checkMethodArgCount$int$int(args, minCnt);
        } else throw new Error('invalid overload');
    }

    checkMethodArgCount$int$int$int(argCnt : number, minCnt : number, maxCnt : number) {
        if(argCnt < minCnt || argCnt > maxCnt) {
            throw _MessageUtil.newArgCntError$java_lang_String$int$int$int("?" + this.key, argCnt, minCnt, maxCnt);
        }
    }

    /**
     * Same as {link #getStringMethodArg}, but checks if {@code args} is big enough, and returns {@code null} if it
     * isn't.
     * @param {List} args
     * @param {number} argIdx
     * @return {String}
     */
    getOptStringMethodArg(args : Array<any>, argIdx : number) : string {
        return /* size */(<number>args.length) > argIdx?this.getStringMethodArg(args, argIdx):null;
    }

    /**
     * Gets a method argument and checks if it's a string; it does NOT check if {@code args} is big enough.
     * @param {List} args
     * @param {number} argIdx
     * @return {String}
     */
    getStringMethodArg(args : Array<any>, argIdx : number) : string {
        let arg : TemplateModel = <TemplateModel><any>/* get */args[argIdx];
        if(!(arg != null && (arg["__interfaces"] != null && arg["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || arg.constructor != null && arg.constructor["__interfaces"] != null && arg.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
            throw _MessageUtil.newMethodArgMustBeStringException("?" + this.key, argIdx, arg);
        } else {
            return EvalUtil.modelToString(<TemplateScalarModel><any>arg, null, null);
        }
    }

    /**
     * Gets a method argument and checks if it's a number; it does NOT check if {@code args} is big enough.
     * @param {List} args
     * @param {number} argIdx
     * @return {Number}
     */
    getNumberMethodArg(args : Array<any>, argIdx : number) : number {
        let arg : TemplateModel = <TemplateModel><any>/* get */args[argIdx];
        if(!(arg != null && (arg["__interfaces"] != null && arg["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || arg.constructor != null && arg.constructor["__interfaces"] != null && arg.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0))) {
            throw _MessageUtil.newMethodArgMustBeNumberException("?" + this.key, argIdx, arg);
        } else {
            return EvalUtil.modelToNumber(<TemplateNumberModel><any>arg, null);
        }
    }

    newMethodArgInvalidValueException(argIdx : number, details : Array) : TemplateModelException {
        return _MessageUtil.newMethodArgInvalidValueException.apply(null, ["?" + this.key, argIdx].concat(<any[]>details));
    }

    newMethodArgsInvalidValueException(details : Array) : TemplateModelException {
        return _MessageUtil.newMethodArgsInvalidValueException.apply(null, ["?" + this.key].concat(<any[]>details));
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        try {
            let clone : BuiltIn = <BuiltIn>/* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this);
            clone.target = this.target.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState);
            return clone;
        } catch(e) {
            throw Object.defineProperty(new Error("Internal error: " + e), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        };
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 2;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.target;
        case 1:
            return this.key;
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
            return ParameterRole.LEFT_HAND_OPERAND_$LI$();
        case 1:
            return ParameterRole.RIGHT_HAND_OPERAND_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    constructor() {
        super();
        if(this.target===undefined) this.target = null;
        if(this.key===undefined) this.key = null;
    }
}
BuiltIn["__class"] = "freemarker.core.BuiltIn";
BuiltIn["__interfaces"] = ["java.lang.Cloneable"];





BuiltIn.BUILT_INS_BY_NAME_$LI$();

BuiltIn.SNAKE_CASE_NAMES_$LI$();

BuiltIn.CAMEL_CASE_NAMES_$LI$();

BuiltIn.__static_initialize();
