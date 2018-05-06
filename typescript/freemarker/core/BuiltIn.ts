/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateDateModel} from '../template/TemplateDateModel';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelException} from '../template/TemplateModelException';
import {DateUtil} from '../template/utility/DateUtil';
import {StringUtil} from '../template/utility/StringUtil';
import {Expression} from './Expression';
import {Set} from '../../java/util/Set';
import {Token} from './Token';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_CoreStringUtils} from './_CoreStringUtils';
import {ICIChainMember} from './ICIChainMember';
import {_MessageUtil} from './_MessageUtil';
import {ParameterRole} from './ParameterRole';
import {Map} from "../../java/util/Map";
import {List} from "../../java/util/List";

/**
 * The {@code ?} operator used for things like {@code foo?upper_case}.
 * @extends Expression
 * @class
 */
export abstract class BuiltIn extends Expression {
    target : Expression;

    key : string;

    static CAMEL_CASE_NAMES : Set<any> = new Set();

    static SNAKE_CASE_NAMES : Set<any> = new Set();

    static NUMBER_OF_BIS : number = 268;

    static BUILT_INS_BY_NAME : Map<any, any> = new Map();

    static __static_initializer_0() {
        BuiltIn.putBINames("abs");
        BuiltIn.putBINames("absolute_template_name", "absoluteTemplateName");
        BuiltIn.putBINames("ancestors");
        BuiltIn.putBINames("api");
        BuiltIn.putBINames("boolean");
        BuiltIn.putBINames("byte");
        BuiltIn.putBINames("c");
        BuiltIn.putBINames("cap_first", "capFirst");
        BuiltIn.putBINames("capitalize");
        BuiltIn.putBINames("ceiling");
        BuiltIn.putBINames("children");
        BuiltIn.putBINames("chop_linebreak", "chopLinebreak");
        BuiltIn.putBINames("contains");
        BuiltIn.putBINames("date");
        BuiltIn.putBINames("date_if_unknown", "dateIfUnknown");
        BuiltIn.putBINames("datetime");
        BuiltIn.putBINames("datetime_if_unknown", "datetimeIfUnknown");
        BuiltIn.putBINames("default");
        BuiltIn.putBINames("double");
        BuiltIn.putBINames("ends_with", "endsWith");
        BuiltIn.putBINames("ensure_ends_with", "ensureEndsWith");
        BuiltIn.putBINames("ensure_starts_with", "ensureStartsWith");
        BuiltIn.putBINames("esc");
        BuiltIn.putBINames("eval");
        BuiltIn.putBINames("exists");
        BuiltIn.putBINames("first");
        BuiltIn.putBINames("float");
        BuiltIn.putBINames("floor");
        BuiltIn.putBINames("chunk");
        BuiltIn.putBINames("counter");
        BuiltIn.putBINames("item_cycle", "itemCycle");
        BuiltIn.putBINames("has_api", "hasApi");
        BuiltIn.putBINames("has_content", "hasContent");
        BuiltIn.putBINames("has_next", "hasNext");
        BuiltIn.putBINames("html");
        BuiltIn.putBINames("if_exists", "ifExists");
        BuiltIn.putBINames("index");
        BuiltIn.putBINames("index_of", "indexOf");
        BuiltIn.putBINames("int");
        BuiltIn.putBINames("interpret");
        BuiltIn.putBINames("is_boolean", "isBoolean");
        BuiltIn.putBINames("is_collection", "isCollection");
        BuiltIn.putBINames("is_collection_ex", "isCollectionEx");
        BuiltIn.putBINames("is_date", "isDate");
        BuiltIn.putBINames("is_date_like", "isDateLike");
        BuiltIn.putBINames("is_date_only", "isDateOnly");
        BuiltIn.putBINames("is_even_item", "isEvenItem");
        BuiltIn.putBINames("is_first", "isFirst");
        BuiltIn.putBINames("is_last", "isLast");
        BuiltIn.putBINames("is_unknown_date_like", "isUnknownDateLike");
        BuiltIn.putBINames("is_datetime", "isDatetime");
        BuiltIn.putBINames("is_directive", "isDirective");
        BuiltIn.putBINames("is_enumerable", "isEnumerable");
        BuiltIn.putBINames("is_hash_ex", "isHashEx");
        BuiltIn.putBINames("is_hash", "isHash");
        BuiltIn.putBINames("is_infinite", "isInfinite");
        BuiltIn.putBINames("is_indexable", "isIndexable");
        BuiltIn.putBINames("is_macro", "isMacro");
        BuiltIn.putBINames("is_markup_output", "isMarkupOutput");
        BuiltIn.putBINames("is_method", "isMethod");
        BuiltIn.putBINames("is_nan", "isNan");
        BuiltIn.putBINames("is_node", "isNode");
        BuiltIn.putBINames("is_number", "isNumber");
        BuiltIn.putBINames("is_odd_item", "isOddItem");
        BuiltIn.putBINames("is_sequence", "isSequence");
        BuiltIn.putBINames("is_string", "isString");
        BuiltIn.putBINames("is_time", "isTime");
        BuiltIn.putBINames("is_transform", "isTransform");
        BuiltIn.putBINames("iso_utc", "isoUtc");
        BuiltIn.putBINames("iso_utc_fz", "isoUtcFZ");
        BuiltIn.putBINames("iso_utc_nz", "isoUtcNZ");
        BuiltIn.putBINames("iso_utc_ms", "isoUtcMs");
        BuiltIn.putBINames("iso_utc_ms_nz", "isoUtcMsNZ");
        BuiltIn.putBINames("iso_utc_m", "isoUtcM");
        BuiltIn.putBINames("iso_utc_m_nz", "isoUtcMNZ");
        BuiltIn.putBINames("iso_utc_h", "isoUtcH");
        BuiltIn.putBINames("iso_utc_h_nz", "isoUtcHNZ");
        BuiltIn.putBINames("iso_local", "isoLocal");
        BuiltIn.putBINames("iso_local_nz", "isoLocalNZ");
        BuiltIn.putBINames("iso_local_ms", "isoLocalMs");
        BuiltIn.putBINames("iso_local_ms_nz", "isoLocalMsNZ");
        BuiltIn.putBINames("iso_local_m", "isoLocalM");
        BuiltIn.putBINames("iso_local_m_nz", "isoLocalMNZ");
        BuiltIn.putBINames("iso_local_h", "isoLocalH");
        BuiltIn.putBINames("iso_local_h_nz", "isoLocalHNZ");
        BuiltIn.putBINames("iso");
        BuiltIn.putBINames("iso_nz", "isoNZ");
        BuiltIn.putBINames("iso_ms", "isoMs");
        BuiltIn.putBINames("iso_ms_nz", "isoMsNZ");
        BuiltIn.putBINames("iso_m", "isoM");
        BuiltIn.putBINames("iso_m_nz", "isoMNZ");
        BuiltIn.putBINames("iso_h", "isoH");
        BuiltIn.putBINames("iso_h_nz", "isoHNZ");
        BuiltIn.putBINames("j_string", "jString");
        BuiltIn.putBINames("join");
        BuiltIn.putBINames("js_string", "jsString");
        BuiltIn.putBINames("json_string", "jsonString");
        BuiltIn.putBINames("keep_after", "keepAfter");
        BuiltIn.putBINames("keep_before", "keepBefore");
        BuiltIn.putBINames("keep_after_last", "keepAfterLast");
        BuiltIn.putBINames("keep_before_last", "keepBeforeLast");
        BuiltIn.putBINames("keys");
        BuiltIn.putBINames("last_index_of", "lastIndexOf");
        BuiltIn.putBINames("last");
        BuiltIn.putBINames("left_pad", "leftPad");
        BuiltIn.putBINames("length");
        BuiltIn.putBINames("long");
        BuiltIn.putBINames("lower_abc", "lowerAbc");
        BuiltIn.putBINames("lower_case", "lowerCase");
        BuiltIn.putBINames("namespace");
        BuiltIn.putBINames("new");
        BuiltIn.putBINames("markup_string", "markupString");
        BuiltIn.putBINames("node_name", "nodeName");
        BuiltIn.putBINames("node_namespace", "nodeNamespace");
        BuiltIn.putBINames("node_type", "nodeType");
        BuiltIn.putBINames("no_esc", "noEsc");
        BuiltIn.putBINames("max");
        BuiltIn.putBINames("min");
        BuiltIn.putBINames("number");
        BuiltIn.putBINames("number_to_date", "numberToDate");
        BuiltIn.putBINames("number_to_time", "numberToTime");
        BuiltIn.putBINames("number_to_datetime", "numberToDatetime");
        BuiltIn.putBINames("parent");
        BuiltIn.putBINames("previous_sibling", "previousSibling");
        BuiltIn.putBINames("next_sibling", "nextSibling");
        BuiltIn.putBINames("item_parity", "itemParity");
        BuiltIn.putBINames("item_parity_cap", "itemParityCap");
        BuiltIn.putBINames("reverse");
        BuiltIn.putBINames("right_pad", "rightPad");
        BuiltIn.putBINames("root");
        BuiltIn.putBINames("round");
        BuiltIn.putBINames("remove_ending", "removeEnding");
        BuiltIn.putBINames("remove_beginning", "removeBeginning");
        BuiltIn.putBINames("rtf");
        BuiltIn.putBINames("seq_contains", "seqContains");
        BuiltIn.putBINames("seq_index_of", "seqIndexOf");
        BuiltIn.putBINames("seq_last_index_of", "seqLastIndexOf");
        BuiltIn.putBINames("sequence");
        BuiltIn.putBINames("short");
        BuiltIn.putBINames("size");
        BuiltIn.putBINames("sort_by", "sortBy");
        BuiltIn.putBINames("sort");
        BuiltIn.putBINames("split");
        BuiltIn.putBINames("switch");
        BuiltIn.putBINames("starts_with", "startsWith");
        BuiltIn.putBINames("string");
        BuiltIn.putBINames("substring");
        BuiltIn.putBINames("then");
        BuiltIn.putBINames("time");
        BuiltIn.putBINames("time_if_unknown", "timeIfUnknown");
        BuiltIn.putBINames("trim");
        BuiltIn.putBINames("uncap_first", "uncapFirst");
        BuiltIn.putBINames("upper_abc", "upperAbc");
        BuiltIn.putBINames("upper_case", "upperCase");
        BuiltIn.putBINames("url");
        BuiltIn.putBINames("url_path", "urlPath");
        BuiltIn.putBINames("values");
        BuiltIn.putBINames("web_safe", "webSafe");
        BuiltIn.putBINames("word_list", "wordList");
        BuiltIn.putBINames("xhtml");
        BuiltIn.putBINames("xml");
        BuiltIn.putBINames("matches");
        BuiltIn.putBINames("groups");
        BuiltIn.putBINames("replace");
    }

    public static putBINames(nameSnakeCase:string, nameCamelCase?:string) {
        BuiltIn.SNAKE_CASE_NAMES.add(nameSnakeCase);
        if(nameCamelCase !== undefined) {
            BuiltIn.CAMEL_CASE_NAMES.add(nameCamelCase);
        }
    }

    /*private*/ static putBI$java_lang_String$freemarker_core_BuiltIn(name : string, bi : BuiltIn) {
        /* put */BuiltIn.BUILT_INS_BY_NAME.set(name, bi);
        BuiltIn.SNAKE_CASE_NAMES.add(name);
        BuiltIn.CAMEL_CASE_NAMES.add(name);
    }

    public static putBI$java_lang_String$java_lang_String$freemarker_core_BuiltIn(nameSnakeCase : string, nameCamelCase : string, bi : BuiltIn) {
        /* put */BuiltIn.BUILT_INS_BY_NAME.set(nameSnakeCase, bi);
        /* put */BuiltIn.BUILT_INS_BY_NAME.set(nameCamelCase, bi);
        BuiltIn.SNAKE_CASE_NAMES.add(nameSnakeCase);
        BuiltIn.CAMEL_CASE_NAMES.add(nameCamelCase);
    }

    public static putBI(nameSnakeCase? : any, nameCamelCase? : any, bi? : any) : any {
        if(((typeof nameSnakeCase === 'string') || nameSnakeCase === null) && ((typeof nameCamelCase === 'string') || nameCamelCase === null) && ((bi != null && bi instanceof <any>BuiltIn) || bi === null)) {
            return <any>BuiltIn.putBI$java_lang_String$java_lang_String$freemarker_core_BuiltIn(nameSnakeCase, nameCamelCase, bi);
        } else if(((typeof nameSnakeCase === 'string') || nameSnakeCase === null) && ((nameCamelCase != null && nameCamelCase instanceof <any>BuiltIn) || nameCamelCase === null) && bi === undefined) {
            return <any>BuiltIn.putBI$java_lang_String$freemarker_core_BuiltIn(nameSnakeCase, nameCamelCase);
        } else throw new Error('invalid overload');
    }

    static getBuiltInByName(name: string): BuiltIn {
        switch (name) {
            case "abs":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).absBI();
            case "absolute_template_name":
                return new (require('./BuiltInsForStringsMisc').BuiltInsForStringsMisc).absolute_template_nameBI();
            case "absoluteTemplateName":
                return new (require('./BuiltInsForStringsMisc').BuiltInsForStringsMisc).absolute_template_nameBI();
            case "ancestors":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).ancestorsBI();
            case "api":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).apiBI();
            case "boolean":
                return new (require('./BuiltInsForStringsMisc').BuiltInsForStringsMisc).booleanBI();
            case "byte":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).byteBI();
            case "c":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).cBI();
            case "cap_first":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).cap_firstBI();
            case "capFirst":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).cap_firstBI();
            case "capitalize":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).capitalizeBI();
            case "ceiling":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).ceilingBI();
            case "children":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).childrenBI();
            case "chop_linebreak":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).chop_linebreakBI();
            case "chopLinebreak":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).chop_linebreakBI();
            case "contains":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).containsBI();
            case "date":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).dateBI(TemplateDateModel.DATE);
            case "date_if_unknown":
                return new (require('./BuiltInsForDates').BuiltInsForDates).dateType_if_unknownBI(TemplateDateModel.DATE);
            case "dateIfUnknown":
                return new (require('./BuiltInsForDates').BuiltInsForDates).dateType_if_unknownBI(TemplateDateModel.DATE);
            case "datetime":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).dateBI(TemplateDateModel.DATETIME);
            case "datetime_if_unknown":
                return new (require('./BuiltInsForDates').BuiltInsForDates).dateType_if_unknownBI(TemplateDateModel.DATETIME);
            case "datetimeIfUnknown":
                return new (require('./BuiltInsForDates').BuiltInsForDates).dateType_if_unknownBI(TemplateDateModel.DATETIME);
            case "default":
                return new (require('./BuiltInsForExistenceHandling').BuiltInsForExistenceHandling).defaultBI();
            case "double":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).doubleBI();
            case "ends_with":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).ends_withBI();
            case "endsWith":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).ends_withBI();
            case "ensure_ends_with":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).ensure_ends_withBI();
            case "ensureEndsWith":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).ensure_ends_withBI();
            case "ensure_starts_with":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).ensure_starts_withBI();
            case "ensureStartsWith":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).ensure_starts_withBI();
            case "esc":
                return new (require('./BuiltInsForOutputFormatRelated').BuiltInsForOutputFormatRelated).escBI();
            case "eval":
                return new (require('./BuiltInsForStringsMisc').BuiltInsForStringsMisc).evalBI();
            case "exists":
                return new (require('./BuiltInsForExistenceHandling').BuiltInsForExistenceHandling).existsBI();
            case "first":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).firstBI();
            case "float":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).floatBI();
            case "floor":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).floorBI();
            case "chunk":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).chunkBI();
            case "counter":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).counterBI();
            case "item_cycle":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).item_cycleBI();
            case "itemCycle":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).item_cycleBI();
            case "has_api":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).has_apiBI();
            case "hasApi":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).has_apiBI();
            case "has_content":
                return new (require('./BuiltInsForExistenceHandling').BuiltInsForExistenceHandling).has_contentBI();
            case "hasContent":
                return new (require('./BuiltInsForExistenceHandling').BuiltInsForExistenceHandling).has_contentBI();
            case "has_next":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).has_nextBI();
            case "hasNext":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).has_nextBI();
            case "html":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).htmlBI();
            case "if_exists":
                return new (require('./BuiltInsForExistenceHandling').BuiltInsForExistenceHandling).if_existsBI();
            case "ifExists":
                return new (require('./BuiltInsForExistenceHandling').BuiltInsForExistenceHandling).if_existsBI();
            case "index":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).indexBI();
            case "index_of":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).index_ofBI(false);
            case "indexOf":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).index_ofBI(false);
            case "int":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).intBI();
            case "interpret":
                return new (require('./Interpret').Interpret)();
            case "is_boolean":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_booleanBI();
            case "isBoolean":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_booleanBI();
            case "is_collection":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_collectionBI();
            case "isCollection":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_collectionBI();
            case "is_collection_ex":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_collection_exBI();
            case "isCollectionEx":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_collection_exBI();
            case "is_date":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateLikeBI();
            case "isDate":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateLikeBI();
            case "is_date_like":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateLikeBI();
            case "isDateLike":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateLikeBI();
            case "is_date_only":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.DATE);
            case "isDateOnly":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.DATE);
            case "is_even_item":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_even_itemBI();
            case "isEvenItem":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_even_itemBI();
            case "is_first":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_firstBI();
            case "isFirst":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_firstBI();
            case "is_last":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_lastBI();
            case "isLast":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_lastBI();
            case "is_unknown_date_like":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.UNKNOWN);
            case "isUnknownDateLike":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.UNKNOWN);
            case "is_datetime":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.DATETIME);
            case "isDatetime":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.DATETIME);
            case "is_directive":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_directiveBI();
            case "isDirective":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_directiveBI();
            case "is_enumerable":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_enumerableBI();
            case "isEnumerable":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_enumerableBI();
            case "is_hash_ex":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_hash_exBI();
            case "isHashEx":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_hash_exBI();
            case "is_hash":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_hashBI();
            case "isHash":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_hashBI();
            case "is_infinite":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).is_infiniteBI();
            case "isInfinite":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).is_infiniteBI();
            case "is_indexable":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_indexableBI();
            case "isIndexable":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_indexableBI();
            case "is_macro":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_macroBI();
            case "isMacro":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_macroBI();
            case "is_markup_output":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_markup_outputBI();
            case "isMarkupOutput":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_markup_outputBI();
            case "is_method":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_methodBI();
            case "isMethod":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_methodBI();
            case "is_nan":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).is_nanBI();
            case "isNan":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).is_nanBI();
            case "is_node":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_nodeBI();
            case "isNode":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_nodeBI();
            case "is_number":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_numberBI();
            case "isNumber":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_numberBI();
            case "is_odd_item":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_odd_itemBI();
            case "isOddItem":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).is_odd_itemBI();
            case "is_sequence":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_sequenceBI();
            case "isSequence":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_sequenceBI();
            case "is_string":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_stringBI();
            case "isString":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_stringBI();
            case "is_time":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.TIME);
            case "isTime":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_dateOfTypeBI(TemplateDateModel.TIME);
            case "is_transform":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_transformBI();
            case "isTransform":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).is_transformBI();
            case "iso_utc":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_SECONDS, true);
            case "isoUtc":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_SECONDS, true);
            case "iso_utc_fz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(true, DateUtil.ACCURACY_SECONDS, true);
            case "isoUtcFZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(true, DateUtil.ACCURACY_SECONDS, true);
            case "iso_utc_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_SECONDS, true);
            case "isoUtcNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_SECONDS, true);
            case "iso_utc_ms":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MILLISECONDS, true);
            case "isoUtcMs":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MILLISECONDS, true);
            case "iso_utc_ms_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MILLISECONDS, true);
            case "isoUtcMsNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MILLISECONDS, true);
            case "iso_utc_m":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MINUTES, true);
            case "isoUtcM":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MINUTES, true);
            case "iso_utc_m_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MINUTES, true);
            case "isoUtcMNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MINUTES, true);
            case "iso_utc_h":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_HOURS, true);
            case "isoUtcH":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_HOURS, true);
            case "iso_utc_h_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_HOURS, true);
            case "isoUtcHNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_HOURS, true);
            case "iso_local":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_SECONDS, false);
            case "isoLocal":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_SECONDS, false);
            case "iso_local_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_SECONDS, false);
            case "isoLocalNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_SECONDS, false);
            case "iso_local_ms":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MILLISECONDS, false);
            case "isoLocalMs":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MILLISECONDS, false);
            case "iso_local_ms_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MILLISECONDS, false);
            case "isoLocalMsNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MILLISECONDS, false);
            case "iso_local_m":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MINUTES, false);
            case "isoLocalM":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_MINUTES, false);
            case "iso_local_m_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MINUTES, false);
            case "isoLocalMNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_MINUTES, false);
            case "iso_local_h":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_HOURS, false);
            case "isoLocalH":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(null, DateUtil.ACCURACY_HOURS, false);
            case "iso_local_h_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_HOURS, false);
            case "isoLocalHNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_utc_or_local_BI(false, DateUtil.ACCURACY_HOURS, false);
            case "iso":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(null, DateUtil.ACCURACY_SECONDS);
            case "iso_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_SECONDS);
            case "isoNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_SECONDS);
            case "iso_ms":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(null, DateUtil.ACCURACY_MILLISECONDS);
            case "isoMs":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(null, DateUtil.ACCURACY_MILLISECONDS);
            case "iso_ms_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_MILLISECONDS);
            case "isoMsNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_MILLISECONDS);
            case "iso_m":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(null, DateUtil.ACCURACY_MINUTES);
            case "isoM":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(null, DateUtil.ACCURACY_MINUTES);
            case "iso_m_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_MINUTES);
            case "isoMNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_MINUTES);
            case "iso_h":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(null, DateUtil.ACCURACY_HOURS);
            case "isoH":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(null, DateUtil.ACCURACY_HOURS);
            case "iso_h_nz":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_HOURS);
            case "isoHNZ":
                return new (require('./BuiltInsForDates').BuiltInsForDates).iso_BI(false, DateUtil.ACCURACY_HOURS);
            case "j_string":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).j_stringBI();
            case "jString":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).j_stringBI();
            case "join":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).joinBI();
            case "js_string":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).js_stringBI();
            case "jsString":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).js_stringBI();
            case "json_string":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).json_stringBI();
            case "jsonString":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).json_stringBI();
            case "keep_after":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_afterBI();
            case "keepAfter":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_afterBI();
            case "keep_before":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_beforeBI();
            case "keepBefore":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_beforeBI();
            case "keep_after_last":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_after_lastBI();
            case "keepAfterLast":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_after_lastBI();
            case "keep_before_last":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_before_lastBI();
            case "keepBeforeLast":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).keep_before_lastBI();
            case "keys":
                return new (require('./BuiltInsForHashes').BuiltInsForHashes).keysBI();
            case "last_index_of":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).index_ofBI(true);
            case "lastIndexOf":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).index_ofBI(true);
            case "last":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).lastBI();
            case "left_pad":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).padBI(true);
            case "leftPad":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).padBI(true);
            case "length":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).lengthBI();
            case "long":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).longBI();
            case "lower_abc":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).lower_abcBI();
            case "lowerAbc":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).lower_abcBI();
            case "lower_case":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).lower_caseBI();
            case "lowerCase":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).lower_caseBI();
            case "namespace":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).namespaceBI();
            case "new":
                return new (require('./NewBI').NewBI)();
            case "markup_string":
                return new (require('./BuiltInsForMarkupOutputs').BuiltInsForMarkupOutputs).markup_stringBI();
            case "markupString":
                return new (require('./BuiltInsForMarkupOutputs').BuiltInsForMarkupOutputs).markup_stringBI();
            case "node_name":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).node_nameBI();
            case "nodeName":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).node_nameBI();
            case "node_namespace":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).node_namespaceBI();
            case "nodeNamespace":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).node_namespaceBI();
            case "node_type":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).node_typeBI();
            case "nodeType":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).node_typeBI();
            case "no_esc":
                return new (require('./BuiltInsForOutputFormatRelated').BuiltInsForOutputFormatRelated).no_escBI();
            case "noEsc":
                return new (require('./BuiltInsForOutputFormatRelated').BuiltInsForOutputFormatRelated).no_escBI();
            case "max":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).maxBI();
            case "min":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).minBI();
            case "number":
                return new (require('./BuiltInsForStringsMisc').BuiltInsForStringsMisc).numberBI();
            case "number_to_date":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).number_to_dateBI(TemplateDateModel.DATE);
            case "numberToDate":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).number_to_dateBI(TemplateDateModel.DATE);
            case "number_to_time":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).number_to_dateBI(TemplateDateModel.TIME);
            case "numberToTime":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).number_to_dateBI(TemplateDateModel.TIME);
            case "number_to_datetime":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).number_to_dateBI(TemplateDateModel.DATETIME);
            case "numberToDatetime":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).number_to_dateBI(TemplateDateModel.DATETIME);
            case "parent":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).parentBI();
            case "previous_sibling":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).previousSiblingBI();
            case "previousSibling":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).previousSiblingBI();
            case "next_sibling":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).nextSiblingBI();
            case "nextSibling":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).nextSiblingBI();
            case "item_parity":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).item_parityBI();
            case "itemParity":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).item_parityBI();
            case "item_parity_cap":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).item_parity_capBI();
            case "itemParityCap":
                return new (require('./BuiltInsForLoopVariables').BuiltInsForLoopVariables).item_parity_capBI();
            case "reverse":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).reverseBI();
            case "right_pad":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).padBI(false);
            case "rightPad":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).padBI(false);
            case "root":
                return new (require('./BuiltInsForNodes').BuiltInsForNodes).rootBI();
            case "round":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).roundBI();
            case "remove_ending":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).remove_endingBI();
            case "removeEnding":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).remove_endingBI();
            case "remove_beginning":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).remove_beginningBI();
            case "removeBeginning":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).remove_beginningBI();
            case "rtf":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).rtfBI();
            case "seq_contains":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).seq_containsBI();
            case "seqContains":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).seq_containsBI();
            case "seq_index_of":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).seq_index_ofBI(true);
            case "seqIndexOf":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).seq_index_ofBI(true);
            case "seq_last_index_of":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).seq_index_ofBI(false);
            case "seqLastIndexOf":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).seq_index_ofBI(false);
            case "sequence":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).sequenceBI();
            case "short":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).shortBI();
            case "size":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).sizeBI();
            case "sort_by":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).sort_byBI();
            case "sortBy":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).sort_byBI();
            case "sort":
                return new (require('./BuiltInsForSequences').BuiltInsForSequences).sortBI();
            case "split":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).split_BI();
            case "switch":
                return new (require('./BuiltInsWithParseTimeParameters').BuiltInsWithParseTimeParameters).switch_BI();
            case "starts_with":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).starts_withBI();
            case "startsWith":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).starts_withBI();
            case "string":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).stringBI();
            case "substring":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).substringBI();
            case "then":
                return new (require('./BuiltInsWithParseTimeParameters').BuiltInsWithParseTimeParameters).then_BI();
            case "time":
                return new (require('./BuiltInsForMultipleTypes').BuiltInsForMultipleTypes).dateBI(TemplateDateModel.TIME);
            case "time_if_unknown":
                return new (require('./BuiltInsForDates').BuiltInsForDates).dateType_if_unknownBI(TemplateDateModel.TIME);
            case "timeIfUnknown":
                return new (require('./BuiltInsForDates').BuiltInsForDates).dateType_if_unknownBI(TemplateDateModel.TIME);
            case "trim":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).trimBI();
            case "uncap_first":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).uncap_firstBI();
            case "uncapFirst":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).uncap_firstBI();
            case "upper_abc":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).upper_abcBI();
            case "upperAbc":
                return new (require('./BuiltInsForNumbers').BuiltInsForNumbers).upper_abcBI();
            case "upper_case":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).upper_caseBI();
            case "upperCase":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).upper_caseBI();
            case "url":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).urlBI();
            case "url_path":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).urlPathBI();
            case "urlPath":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).urlPathBI();
            case "values":
                return new (require('./BuiltInsForHashes').BuiltInsForHashes).valuesBI();
            case "web_safe":
                return /* get */BuiltIn.BUILT_INS_BY_NAME.get("html");
            case "webSafe":
                return /* get */BuiltIn.BUILT_INS_BY_NAME.get("html");
            case "word_list":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).word_listBI();
            case "wordList":
                return new (require('./BuiltInsForStringsBasic').BuiltInsForStringsBasic).word_listBI();
            case "xhtml":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).xhtmlBI();
            case "xml":
                return new (require('./BuiltInsForStringsEncoding').BuiltInsForStringsEncoding).xmlBI();
            case "matches":
                return new (require('./BuiltInsForStringsRegexp').BuiltInsForStringsRegexp).matchesBI();
            case "groups":
                return new (require('./BuiltInsForStringsRegexp').BuiltInsForStringsRegexp).groupsBI();
            case "replace":
                return new (require('./BuiltInsForStringsRegexp').BuiltInsForStringsRegexp).replace_reBI();
        }
        return null;
    }

    /**
     * @param {Expression} target Left-hand-operand expression
     * @param {Token} keyTk  Built-in name token
     * @param {number} incompatibleImprovements
     * @param {FMParserTokenManager} tokenManager
     * @return {BuiltIn}
     */
    static newBuiltIn(incompatibleImprovements : number, target : Expression, keyTk : Token, tokenManager : /*FMParserTokenManager*/any) : BuiltIn {
        const Configuration = require('../template/Configuration').Configuration;
        let key : string = keyTk.image;
        let bi : BuiltIn = BuiltIn.getBuiltInByName(key);
        if(bi == null) {
            let buf : StringBuilder = new StringBuilder("Unknown built-in: ").append(StringUtil.jQuote$java_lang_Object(key)).append(". ");
            buf.append("Help (latest version): https://freemarker.apache.org/docs/ref_builtins.html; you\'re using FreeMarker ").append(Configuration.getVersion()).append(".\nThe alphabetical list of built-ins:");
            let names : List<any> = new List<any>();
            names.addAll(BuiltIn.BUILT_INS_BY_NAME.keySet());
            /* sort */names.sort();
            let lastLetter : string = String.fromCharCode(0);
            let shownNamingConvention : number;
            {
                let namingConvention : number = tokenManager.namingConvention;
                shownNamingConvention = namingConvention !== Configuration.AUTO_DETECT_NAMING_CONVENTION?namingConvention:Configuration.LEGACY_NAMING_CONVENTION;
            }
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
            }
            throw new (require('./ParseException').ParseException)(buf.toString(), null, keyTk);
        }
        while(((bi != null && (bi["__interfaces"] != null && bi["__interfaces"].indexOf("freemarker.core.ICIChainMember") >= 0 || bi.constructor != null && bi.constructor["__interfaces"] != null && bi.constructor["__interfaces"].indexOf("freemarker.core.ICIChainMember") >= 0)) && incompatibleImprovements < (<ICIChainMember><any>bi).getMinimumICIVersion())) {
            bi = <BuiltIn>(<ICIChainMember><any>bi).getPreviousICIChainMember();
        }
        try {
            bi = <BuiltIn>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(bi);
        } catch(e) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.VirtualMachineError','java.lang.InternalError','java.lang.Error','java.lang.Object'] });
        }
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
        if(arguments.length === 2) {
            if(typeof arguments[0] === 'number') {
                return this.checkMethodArgCount$int$int(<number>arguments[0], <number>arguments[1]);
            }
            return this.checkMethodArgCount$java_util_List$int(<Array<any>>arguments[0], <number>arguments[1]);
        }
        if(typeof arguments[0] === 'number') {
            return this.checkMethodArgCount$int$int$int(<number>arguments[0], <number>arguments[1], <number>arguments[2]);
        }
        return this.checkMethodArgCount$java_util_List$int$int(<Array<any>>arguments[0], <number>arguments[1], <number>arguments[2]);
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
            return (require('./EvalUtil').EvalUtil).modelToString(/*<TemplateScalarModel>*/<any>arg, null, null);
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
            return (require('./EvalUtil').EvalUtil).modelToNumber(/*<TemplateNumberModel>*/<any>arg, null);
        }
    }

    newMethodArgInvalidValueException(argIdx : number, details : Array<any>) : TemplateModelException {
        return _MessageUtil.newMethodArgInvalidValueException.apply(null, ["?" + this.key, argIdx].concat(<any[]>details));
    }

    newMethodArgsInvalidValueException(details : Array<any>) : TemplateModelException {
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
        }
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
            return ParameterRole.LEFT_HAND_OPERAND;
        case 1:
            return ParameterRole.RIGHT_HAND_OPERAND;
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