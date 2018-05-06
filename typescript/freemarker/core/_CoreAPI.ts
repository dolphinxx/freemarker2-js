/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../template/Configuration';
import {TemplateDirectiveBody} from '../template/TemplateDirectiveBody';
import {TemplateException} from '../template/TemplateException';
import {TemplateModelException} from '../template/TemplateModelException';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {ClassUtil} from '../template/utility/ClassUtil';
import {Writer} from '../../java/io/Writer';
import {BuiltIn} from './BuiltIn';
import {TemplateElement} from './TemplateElement';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ThreadInterruptionSupportTemplatePostProcessor} from './ThreadInterruptionSupportTemplatePostProcessor';
import {NestedContentNotSupportedException} from './NestedContentNotSupportedException';
import {TextBlock} from './TextBlock';
import {_TemplateModelException} from './_TemplateModelException';
import {FMParser} from './FMParser';
import {Set} from '../../java/util/Set';

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * This class is to work around the lack of module system in Java, i.e., so that other FreeMarker packages can
 * access things inside this package that users shouldn't.
 * @class
 */
export class _CoreAPI {
    static __static_initialized: boolean = false;

    static __static_initialize() {
        if (!_CoreAPI.__static_initialized) {
            _CoreAPI.__static_initialized = true;
            _CoreAPI.__static_initializer_0();
        }
    }

    public static ERROR_MESSAGE_HR: string = "----";

    constructor() {
    }

    /*private*/
    static addName$java_util_Set$java_util_Set$java_util_Set$java_lang_String(allNames: Set<any>, lcNames: Set<any>, ccNames: Set<any>, commonName: string) {
        allNames.add(commonName);
        lcNames.add(commonName);
        ccNames.add(commonName);
    }

    public static addName$java_util_Set$java_util_Set$java_util_Set$java_lang_String$java_lang_String(allNames: Set<any>, lcNames: Set<any>, ccNames: Set<any>, lcName: string, ccName: string) {
        allNames.add(lcName);
        allNames.add(ccName);
        lcNames.add(lcName);
        ccNames.add(ccName);
    }

    public static addName(allNames: Set<any>, lcNames: Set<any>, ccNames: Set<any>, lcName: string, ccName?: string): any {
        if (ccName !== undefined) {
            return <any>_CoreAPI.addName$java_util_Set$java_util_Set$java_util_Set$java_lang_String$java_lang_String(allNames, lcNames, ccNames, lcName, ccName);
        } else {
            return <any>_CoreAPI.addName$java_util_Set$java_util_Set$java_util_Set$java_lang_String(allNames, lcNames, ccNames, lcName);
        }
    }

    public static ALL_BUILT_IN_DIRECTIVE_NAMES: Set<any>;

    public static ALL_BUILT_IN_DIRECTIVE_NAMES_$LI$(): Set<any> {
        _CoreAPI.__static_initialize();
        return _CoreAPI.ALL_BUILT_IN_DIRECTIVE_NAMES;
    };

    public static LEGACY_BUILT_IN_DIRECTIVE_NAMES: Set<any>;

    public static LEGACY_BUILT_IN_DIRECTIVE_NAMES_$LI$(): Set<any> {
        _CoreAPI.__static_initialize();
        return _CoreAPI.LEGACY_BUILT_IN_DIRECTIVE_NAMES;
    };

    public static CAMEL_CASE_BUILT_IN_DIRECTIVE_NAMES: Set<any>;

    public static CAMEL_CASE_BUILT_IN_DIRECTIVE_NAMES_$LI$(): Set<any> {
        _CoreAPI.__static_initialize();
        return _CoreAPI.CAMEL_CASE_BUILT_IN_DIRECTIVE_NAMES;
    };

    static __static_initializer_0() {
        let allNames: Set<any> = new Set<any>();
        let lcNames: Set<any> = new Set<any>();
        let ccNames: Set<any> = new Set<any>();
        _CoreAPI.addName(allNames, lcNames, ccNames, "assign");
        _CoreAPI.addName(allNames, lcNames, ccNames, "attempt");
        _CoreAPI.addName(allNames, lcNames, ccNames, "autoesc", "autoEsc");
        _CoreAPI.addName(allNames, lcNames, ccNames, "break");
        _CoreAPI.addName(allNames, lcNames, ccNames, "call");
        _CoreAPI.addName(allNames, lcNames, ccNames, "case");
        _CoreAPI.addName(allNames, lcNames, ccNames, "comment");
        _CoreAPI.addName(allNames, lcNames, ccNames, "compress");
        _CoreAPI.addName(allNames, lcNames, ccNames, "continue");
        _CoreAPI.addName(allNames, lcNames, ccNames, "default");
        _CoreAPI.addName(allNames, lcNames, ccNames, "else");
        _CoreAPI.addName(allNames, lcNames, ccNames, "elseif", "elseIf");
        _CoreAPI.addName(allNames, lcNames, ccNames, "escape");
        _CoreAPI.addName(allNames, lcNames, ccNames, "fallback");
        _CoreAPI.addName(allNames, lcNames, ccNames, "flush");
        _CoreAPI.addName(allNames, lcNames, ccNames, "foreach", "forEach");
        _CoreAPI.addName(allNames, lcNames, ccNames, "ftl");
        _CoreAPI.addName(allNames, lcNames, ccNames, "function");
        _CoreAPI.addName(allNames, lcNames, ccNames, "global");
        _CoreAPI.addName(allNames, lcNames, ccNames, "if");
        _CoreAPI.addName(allNames, lcNames, ccNames, "import");
        _CoreAPI.addName(allNames, lcNames, ccNames, "include");
        _CoreAPI.addName(allNames, lcNames, ccNames, "items");
        _CoreAPI.addName(allNames, lcNames, ccNames, "list");
        _CoreAPI.addName(allNames, lcNames, ccNames, "local");
        _CoreAPI.addName(allNames, lcNames, ccNames, "lt");
        _CoreAPI.addName(allNames, lcNames, ccNames, "macro");
        _CoreAPI.addName(allNames, lcNames, ccNames, "nested");
        _CoreAPI.addName(allNames, lcNames, ccNames, "noautoesc", "noAutoEsc");
        _CoreAPI.addName(allNames, lcNames, ccNames, "noescape", "noEscape");
        _CoreAPI.addName(allNames, lcNames, ccNames, "noparse", "noParse");
        _CoreAPI.addName(allNames, lcNames, ccNames, "nt");
        _CoreAPI.addName(allNames, lcNames, ccNames, "outputformat", "outputFormat");
        _CoreAPI.addName(allNames, lcNames, ccNames, "recover");
        _CoreAPI.addName(allNames, lcNames, ccNames, "recurse");
        _CoreAPI.addName(allNames, lcNames, ccNames, "return");
        _CoreAPI.addName(allNames, lcNames, ccNames, "rt");
        _CoreAPI.addName(allNames, lcNames, ccNames, "sep");
        _CoreAPI.addName(allNames, lcNames, ccNames, "setting");
        _CoreAPI.addName(allNames, lcNames, ccNames, "stop");
        _CoreAPI.addName(allNames, lcNames, ccNames, "switch");
        _CoreAPI.addName(allNames, lcNames, ccNames, "t");
        _CoreAPI.addName(allNames, lcNames, ccNames, "transform");
        _CoreAPI.addName(allNames, lcNames, ccNames, "visit");
        _CoreAPI.ALL_BUILT_IN_DIRECTIVE_NAMES = /* unmodifiableSet */allNames;
        _CoreAPI.LEGACY_BUILT_IN_DIRECTIVE_NAMES = /* unmodifiableSet */lcNames;
        _CoreAPI.CAMEL_CASE_BUILT_IN_DIRECTIVE_NAMES = /* unmodifiableSet */ccNames;
    }

    /**
     * Returns the names of the currently supported "built-ins" ({@code expr?builtin_name}-like things).
     *
     * @param {number} namingConvention One of {link Configuration#AUTO_DETECT_NAMING_CONVENTION},
     * {link Configuration#LEGACY_NAMING_CONVENTION}, and
     * {link Configuration#CAMEL_CASE_NAMING_CONVENTION}. If it's
     * {link Configuration#AUTO_DETECT_NAMING_CONVENTION} then the union of the names in all the naming
     * conventions is returned.
     * @return {Set}
     */
    public static getSupportedBuiltInNames(namingConvention: number): Set<any> {
        let names: Set<any>;
        if (namingConvention === Configuration.AUTO_DETECT_NAMING_CONVENTION) {
            names = BuiltIn.BUILT_INS_BY_NAME.keySet();
        } else if (namingConvention === Configuration.LEGACY_NAMING_CONVENTION) {
            names = BuiltIn.SNAKE_CASE_NAMES;
        } else if (namingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION) {
            names = BuiltIn.CAMEL_CASE_NAMES;
        } else {
            throw Object.defineProperty(new Error("Unsupported naming convention constant: " + namingConvention), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception']
            });
        }
        return /* unmodifiableSet */names;
    }

    public static appendInstructionStackItem(stackEl: TemplateElement, sb: StringBuilder) {
        (require('./Environment').Environment).appendInstructionStackItem(stackEl, sb);
    }

    public static getInstructionStackSnapshot(env: /*Environment*/any): TemplateElement[] {
        return env.getInstructionStackSnapshot();
    }

    public static outputInstructionStack(instructionStackSnapshot: TemplateElement[], terseMode: boolean, pw: Writer) {
        (require('./Environment').Environment).outputInstructionStack(instructionStackSnapshot, terseMode, pw);
    }

    /**
     * ATTENTION: This is used by https://github.com/kenshoo/freemarker-online. Don't break backward
     * compatibility without updating that project too!
     * @param {Template} template
     */
    public static addThreadInterruptedChecks(template: /*Template*/any) {
        try {
            new ThreadInterruptionSupportTemplatePostProcessor().postProcess(template);
        } catch (e) {
            throw Object.defineProperty(new Error("Template post-processing failed"), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.Exception']
            });
        }
    }

    public static checkHasNoNestedContent(body: TemplateDirectiveBody) {
        NestedContentNotSupportedException.check(body);
    }

    public static replaceText(textBlock: TextBlock, text: string) {
        textBlock.replaceText(text);
    }

    /**
     * @throws IllegalArgumentException if the type of the some of the values isn't as expected
     * @param {String} somethingsSentenceStart
     * @param {*} expectedClass
     * @param {Collection} values
     */
    public static checkSettingValueItemsType(somethingsSentenceStart: string, expectedClass: any, values: Array<any>) {
        if (values == null) return;
        for (let index144 = 0; index144 < values.length; index144++) {
            let value = values[index144];
            {
                if (!/* isInstance */((c: any, o: any) => {
                    if (typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if (typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c);
                })(expectedClass, value)) {
                    throw Object.defineProperty(new Error(somethingsSentenceStart + " must be instances of " + ClassUtil.getShortClassName(expectedClass) + ", but one of them was a(n) " + ClassUtil.getShortClassNameOfObject(value) + "."), '__classes', {
                        configurable: true,
                        value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception']
                    });
                }
            }
        }
    }

    /**
     * The work around the problematic cases where we should throw a {link TemplateException}, but we are inside
     * a {link TemplateModel} method and so we can only throw {link TemplateModelException}-s.
     * @param {String} modelOpMsg
     * @param {TemplateException} e
     * @return {TemplateModelException}
     */
    public static ensureIsTemplateModelException(modelOpMsg: string, e: TemplateException): TemplateModelException {
        if (e != null && e instanceof <any>TemplateModelException) {
            return <TemplateModelException>e;
        } else {
            return new _TemplateModelException(_TemplateAPI.getBlamedExpression(e), (<Error>null), e.getEnvironment(), modelOpMsg);
        }
    }

    public static getParentElement(te: TemplateElement): TemplateElement {
        return te.getParentElement();
    }

    public static getChildElement(te: TemplateElement, index: number): TemplateElement {
        return te.getChild(index);
    }

    public static setPreventStrippings(parser: FMParser, preventStrippings: boolean) {
        parser.setPreventStrippings(preventStrippings);
    }
}

_CoreAPI["__class"] = "freemarker.core._CoreAPI";




_CoreAPI.CAMEL_CASE_BUILT_IN_DIRECTIVE_NAMES_$LI$();

_CoreAPI.LEGACY_BUILT_IN_DIRECTIVE_NAMES_$LI$();

_CoreAPI.ALL_BUILT_IN_DIRECTIVE_NAMES_$LI$();

_CoreAPI.__static_initialize();
