/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateNameFormat} from '../cache/TemplateNameFormat';
import {_CacheAPI} from '../cache/_CacheAPI';
import {BeansWrapper} from '../ext/beans/BeansWrapper';
import {Logger} from '../log/Logger';
import {Configuration} from '../template/Configuration';
import {KeyValuePairIterator} from '../template/KeyValuePairIterator';
import {ObjectWrapper} from '../template/ObjectWrapper';
import {SimpleHash} from '../template/SimpleHash';
import {SimpleSequence} from '../template/SimpleSequence';
import {Template} from '../template/Template';
import {TemplateCollectionModel} from '../template/TemplateCollectionModel';
import {TemplateDateModel} from '../template/TemplateDateModel';
import {TemplateDirectiveBody} from '../template/TemplateDirectiveBody';
import {TemplateDirectiveModel} from '../template/TemplateDirectiveModel';
import {TemplateException} from '../template/TemplateException';
import {TemplateExceptionHandler} from '../template/TemplateExceptionHandler';
import {TemplateHashModel} from '../template/TemplateHashModel';
import {TemplateHashModelEx} from '../template/TemplateHashModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelException} from '../template/TemplateModelException';
import {TemplateModelIterator} from '../template/TemplateModelIterator';
import {TemplateNodeModel} from '../template/TemplateNodeModel';
import {TemplateNumberModel} from '../template/TemplateNumberModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {TemplateTransformModel} from '../template/TemplateTransformModel';
import {TransformControl} from '../template/TransformControl';
import {DateUtil} from '../template/utility/DateUtil';
import {NullWriter} from '../template/utility/NullWriter';
import {StringUtil} from '../template/utility/StringUtil';
import {UndeclaredThrowableException} from '../template/utility/UndeclaredThrowableException';
import {PrintWriter} from '../../java/io/PrintWriter';
import {StringWriter} from '../../java/io/StringWriter';
import {Writer} from '../../java/io/Writer';
import {Configurable} from './Configurable';
import {TemplateElement} from './TemplateElement';
import {TemplateNumberFormat} from './TemplateNumberFormat';
import {TemplateDateFormat} from './TemplateDateFormat';
import {Macro} from './Macro';
import {LocalContextStack} from './LocalContextStack';
import {DirectiveCallPlace} from './DirectiveCallPlace';
import {UnifiedCall} from './UnifiedCall';
import {LocalContext} from './LocalContext';
import {FlowControlException} from './FlowControlException';
import {EvalUtil} from './EvalUtil';
import {_MiscTemplateException} from './_MiscTemplateException';
import {AttemptBlock} from './AttemptBlock';
import {RecoveryBlock} from './RecoveryBlock';
import {BodyInstruction} from './BodyInstruction';
import {TemplateObject} from './TemplateObject';
import {IteratorBlock} from './IteratorBlock';
import {_DelayedJQuote} from './_DelayedJQuote';
import {ReturnInstruction} from './ReturnInstruction';
import {Expression} from './Expression';
import {_DelayedToString} from './_DelayedToString';
import {_TemplateModelException} from './_TemplateModelException';
import {StopException} from './StopException';
import {TemplateValueFormatException} from './TemplateValueFormatException';
import {_MessageUtil} from './_MessageUtil';
import {BackwardCompatibleTemplateNumberFormat} from './BackwardCompatibleTemplateNumberFormat';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Character} from '../../java/lang/Character';
import {TemplateNumberFormatFactory} from './TemplateNumberFormatFactory';
import {UndefinedCustomFormatException} from './UndefinedCustomFormatException';
import {JavaTemplateNumberFormatFactory} from './JavaTemplateNumberFormatFactory';
import {UnknownDateTypeFormattingUnsupportedException} from './UnknownDateTypeFormattingUnsupportedException';
import {Identifier} from './Identifier';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {Entry} from "../../java/util/Entry";
import {Map} from "../../java/util/Map";
import {List} from "../../java/util/List";
import {IdentityHashMap} from "../ext/util/IdentityHashMap";
import {ClassUtil} from "../template/utility/ClassUtil";
import {Collator} from "../../java/text/Collator";
import {Locale} from "../../java/util/Locale";

/**
 * Object that represents the runtime environment during template processing. For every invocation of a
 * <tt>Template.process()</tt> method, a new instance of this object is created, and then discarded when
 * <tt>process()</tt> returns. This object stores the set of temporary variables created by the template, the value of
 * settings set by the template, the reference to the data model root, etc. Everything that is needed to fulfill the
 * template processing job.
 * <p>
 * <p>
 * Data models that need to access the <tt>Environment</tt> object that represents the template processing on the
 * current thread can use the {link #getCurrentEnvironment()} method.
 * <p>
 * <p>
 * If you need to modify or read this object before or after the <tt>process</tt> call, use
 * {link Template#createProcessingEnvironment(Object rootMap, Writer out, ObjectWrapper wrapper)}
 * @param {Template} template
 * @param {*} rootDataModel
 * @param {Writer} out
 * @class
 * @extends Configurable
 */
export class Environment extends Configurable {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!Environment.__static_initialized) { Environment.__static_initialized = true; /*Environment.__static_initializer_0();*/ } }

    static threadEnv :any = null;

    static LOG : Logger; public static LOG_$LI$() : Logger { Environment.__static_initialize(); if(Environment.LOG == null) Environment.LOG = Logger.getLogger("freemarker.runtime"); return Environment.LOG; };

    static ATTEMPT_LOGGER : Logger; public static ATTEMPT_LOGGER_$LI$() : Logger { Environment.__static_initialize(); if(Environment.ATTEMPT_LOGGER == null) Environment.ATTEMPT_LOGGER = Logger.getLogger("freemarker.runtime.attempt"); return Environment.ATTEMPT_LOGGER; };

    // static C_NUMBER_FORMAT : DecimalFormat; public static C_NUMBER_FORMAT_$LI$() : DecimalFormat { Environment.__static_initialize(); if(Environment.C_NUMBER_FORMAT == null) Environment.C_NUMBER_FORMAT = new DecimalFormat("0.################", new DecimalFormatSymbols(string.US)); return Environment.C_NUMBER_FORMAT; };

    // static __static_initializer_0() {
    //     Environment.C_NUMBER_FORMAT_$LI$().setGroupingUsed(false);
    //     Environment.C_NUMBER_FORMAT_$LI$().setDecimalSeparatorAlwaysShown(false);
    // }

    /*private*/ configuration : Configuration;

    /*private*/ incompatibleImprovementsGE2328 : boolean;

    /*private*/ rootDataModel : TemplateHashModel;

    /*private*/ instructionStack : TemplateElement[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(16);

    /*private*/ instructionStackSize : number = 0;

    /*private*/ recoveredErrorStack : Array<any> = <any>([]);

    /*private*/ cachedTemplateNumberFormat : TemplateNumberFormat;

    /*private*/ cachedTemplateNumberFormats : Map<any, any>;

    /**
     * Stores the date/time/date-time formatters that are used when no format is explicitly given at the place of
     * formatting. That is, in situations like ${lastModified} or even ${lastModified?date}, but not in situations like
     * ${lastModified?string.iso}.
     * <p>
     * <p>
     * The index of the array is calculated from what kind of formatter we want (see
     * {link #getTemplateDateFormatCacheArrayIndex(int, boolean, boolean)}):<br>
     * Zoned input: 0: U, 1: T, 2: D, 3: DT<br>
     * Zoneless input: 4: U, 5: T, 6: D, 7: DT<br>
     * SQL D T TZ + Zoned input: 8: U, 9: T, 10: D, 11: DT<br>
     * SQL D T TZ + Zoneless input: 12: U, 13: T, 14: D, 15: DT
     * <p>
     * <p>
     * This is a lazily filled cache. It starts out as {@code null}, then when first needed the array will be created.
     * The array elements also start out as {@code null}-s, and they are filled as the particular kind of formatter is
     * first needed.
     */
    /*private*/ cachedTempDateFormatArray : TemplateDateFormat[];

    /**
     * Similar to {link #cachedTempDateFormatArray}, but used when a formatting string was specified.
     */
    /*private*/ cachedTempDateFormatsByFmtStrArray : Array<any>;

    static CACHED_TDFS_ZONELESS_INPUT_OFFS : number = 4;

    static CACHED_TDFS_SQL_D_T_TZ_OFFS : number; public static CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$() : number { Environment.__static_initialize(); if(Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS == null) Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS = Environment.CACHED_TDFS_ZONELESS_INPUT_OFFS * 2; return Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS; };

    static CACHED_TDFS_LENGTH : number; public static CACHED_TDFS_LENGTH_$LI$() : number { Environment.__static_initialize(); if(Environment.CACHED_TDFS_LENGTH == null) Environment.CACHED_TDFS_LENGTH = Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$() * 2; return Environment.CACHED_TDFS_LENGTH; };

    /**
     * Caches the result of {link #isSQLDateAndTimeTimeZoneSameAsNormal()}.
     */
    /*private*/ cachedSQLDateAndTimeTimeZoneSameAsNormal : boolean;

    /*private*/ cNumberFormat : /*NumberFormat*/any;

    /**
     * Used by the "iso_" built-ins to accelerate formatting.
     * <p>
     * see #getISOBuiltInCalendarFactory()
     */
    /*private*/ isoBuiltInCalendarFactory : DateUtil.DateToISO8601CalendarFactory;

    /*private*/ cachedCollator : any;

    /*private*/ out : Writer;

    /*private*/ currentMacroContext : Macro.Context;

    /*private*/ localContextStack : LocalContextStack;

    /*private*/ mainNamespace : Environment.Namespace;

    /*private*/ currentNamespace : Environment.Namespace;

    /*private*/ globalNamespace : Environment.Namespace;

    /*private*/ loadedLibs : Map<any, any>;

    /*private*/ legacyParent : Configurable;

    /*private*/ inAttemptBlock : boolean;

    /*private*/ lastThrowable : any;

    /*private*/ lastReturnValue : TemplateModel;

    /*private*/ macroToNamespaceLookup : Map<any, any> = <any>(new Map<any, any>());

    /*private*/ currentVisitorNode : TemplateNodeModel;

    /*private*/ nodeNamespaces : TemplateSequenceModel;

    /*private*/ nodeNamespaceIndex : number;

    /*private*/ currentNodeName : string;

    /*private*/ currentNodeNS : string;

    /*private*/ cachedURLEscapingCharset : string;

    /*private*/ cachedURLEscapingCharsetSet : boolean;

    /*private*/ fastInvalidReferenceExceptions : boolean;

    /**
     * Retrieves the environment object associated with the current thread, or {@code null} if there's no template
     * processing going on in this thread. Data model implementations that need access to the environment can call this
     * method to obtain the environment object that represents the template processing that is currently running on the
     * current thread.
     * @return {Environment}
     */
    public static getCurrentEnvironment() : Environment {
        return <Environment>Environment.threadEnv;
    }

    static setCurrentEnvironment(env : /*Environment*/any) {
        Environment.threadEnv = env;
    }

    public constructor(template : Template, rootDataModel : TemplateHashModel, out : Writer) {
        super(template);
        if(this.configuration===undefined) this.configuration = null;
        if(this.incompatibleImprovementsGE2328===undefined) this.incompatibleImprovementsGE2328 = false;
        if(this.rootDataModel===undefined) this.rootDataModel = null;
        if(this.cachedTemplateNumberFormat===undefined) this.cachedTemplateNumberFormat = null;
        if(this.cachedTemplateNumberFormats===undefined) this.cachedTemplateNumberFormats = null;
        if(this.cachedTempDateFormatArray===undefined) this.cachedTempDateFormatArray = null;
        if(this.cachedTempDateFormatsByFmtStrArray===undefined) this.cachedTempDateFormatsByFmtStrArray = null;
        if(this.cachedSQLDateAndTimeTimeZoneSameAsNormal===undefined) this.cachedSQLDateAndTimeTimeZoneSameAsNormal = null;
        if(this.cNumberFormat===undefined) this.cNumberFormat = null;
        if(this.isoBuiltInCalendarFactory===undefined) this.isoBuiltInCalendarFactory = null;
        if(this.cachedCollator===undefined) this.cachedCollator = null;
        if(this.out===undefined) this.out = null;
        if(this.currentMacroContext===undefined) this.currentMacroContext = null;
        if(this.localContextStack===undefined) this.localContextStack = null;
        if(this.mainNamespace===undefined) this.mainNamespace = null;
        if(this.currentNamespace===undefined) this.currentNamespace = null;
        if(this.globalNamespace===undefined) this.globalNamespace = null;
        if(this.loadedLibs===undefined) this.loadedLibs = null;
        if(this.legacyParent===undefined) this.legacyParent = null;
        if(this.inAttemptBlock===undefined) this.inAttemptBlock = false;
        if(this.lastThrowable===undefined) this.lastThrowable = null;
        if(this.lastReturnValue===undefined) this.lastReturnValue = null;
        if(this.currentVisitorNode===undefined) this.currentVisitorNode = null;
        if(this.nodeNamespaces===undefined) this.nodeNamespaces = null;
        if(this.nodeNamespaceIndex===undefined) this.nodeNamespaceIndex = 0;
        if(this.currentNodeName===undefined) this.currentNodeName = null;
        if(this.currentNodeNS===undefined) this.currentNodeNS = null;
        if(this.cachedURLEscapingCharset===undefined) this.cachedURLEscapingCharset = null;
        if(this.cachedURLEscapingCharsetSet===undefined) this.cachedURLEscapingCharsetSet = false;
        if(this.fastInvalidReferenceExceptions===undefined) this.fastInvalidReferenceExceptions = false;
        if(this.customStateVariables===undefined) this.customStateVariables = null;
        this.configuration = template.getConfiguration();
        this.incompatibleImprovementsGE2328 = this.configuration.getIncompatibleImprovements().intValue() >= /*_TemplateAPI.VERSION_INT_2_3_28_$LI$()*/2003028;
        this.globalNamespace = new Environment.Namespace(this, null);
        this.currentNamespace = this.mainNamespace = new Environment.Namespace(this, template);
        this.out = out;
        this.rootDataModel = rootDataModel;
        this.importMacros(template);
    }

    /**
     * Despite its name it just returns {link #getParent()}. If {link Configuration#getIncompatibleImprovements()} is
     * at least 2.3.22, then that will be the same as {link #getMainTemplate()}. Otherwise the returned value follows
     * the {link Environment} parent switchings that occur at {@code #include}/{@code #import} and {@code #nested}
     * directive calls, that is, it's not very meaningful outside FreeMarker internals.
     * 
     * @deprecated Use {link #getMainTemplate()} instead (or {link #getCurrentNamespace()} and then
     * {link Namespace#getTemplate()}); the value returned by this method is often not what you expect when
     * it comes to macro/function invocations.
     * @return {Template}
     */
    public getTemplate() : Template {
        return <Template>this.getParent();
    }

    /**
     * Returns the same value as pre-IcI 2.3.22 getTemplate() did.
     * @return {Template}
     */
    getTemplate230() : Template {
        let legacyParent : Template = <Template>this.legacyParent;
        return legacyParent != null?legacyParent:this.getTemplate();
    }

    /**
     * Returns the topmost {link Template}, with other words, the one for which this {link Environment} was created.
     * That template will never change, like {@code #include} or macro calls don't change it. This method never returns
     * {@code null}.
     * <p>
     * see #getCurrentNamespace()
     * 
     * @since 2.3.22
     * @return {Template}
     */
    public getMainTemplate() : Template {
        return this.mainNamespace.getTemplate();
    }

    /**
     * Returns the {link Template} that we are "lexically" inside at the moment. This template will change when
     * entering an {@code #include} or calling a macro or function in another template, or returning to yet another
     * template with {@code #nested}. When you are calling a directive that's implemented in Java or a Java method
     * from a template, the current template will be the last current template, not {@code null}. This method never
     * returns {@code null}.
     * <p>
     * see #getMainTemplate()
     * see #getCurrentNamespace()
     * 
     * @since 2.3.23
     * @return {Template}
     */
    public getCurrentTemplate() : Template {
        let ln : number = this.instructionStackSize;
        return ln === 0?this.getMainTemplate():this.instructionStack[ln - 1].getTemplate();
    }

    /**
     * Gets the currently executing <em>custom</em> directive's call place information, or {@code null} if there's no
     * executing custom directive. This currently only works for calls made from templates with the {@code <@...>}
     * syntax. This should only be called from the {link TemplateDirectiveModel} that was invoked with {@code <@...>},
     * otherwise its return value is not defined by this API (it's usually {@code null}).
     * 
     * @since 2.3.22
     * @return {*}
     */
    public getCurrentDirectiveCallPlace() : DirectiveCallPlace {
        let ln : number = this.instructionStackSize;
        if(ln === 0) return null;
        let te : TemplateElement = this.instructionStack[ln - 1];
        if(te != null && te instanceof <any>UnifiedCall) return <UnifiedCall>te;
        if((te != null && te instanceof <any>Macro) && ln > 1 && (this.instructionStack[ln - 2] != null && this.instructionStack[ln - 2] instanceof <any>UnifiedCall)) {
            return <UnifiedCall>this.instructionStack[ln - 2];
        }
        return null;
    }

    /**
     * Deletes cached values that meant to be valid only during a single template execution.
     * @private
     */
    clearCachedValues() {
        this.cachedTemplateNumberFormats = null;
        this.cachedTemplateNumberFormat = null;
        this.cachedTempDateFormatArray = null;
        this.cachedTempDateFormatsByFmtStrArray = null;
        this.cachedCollator = null;
        this.cachedURLEscapingCharset = null;
        this.cachedURLEscapingCharsetSet = false;
    }

    /**
     * Processes the template to which this environment belongs to.
     */
    public process() {
        let savedEnv : any = Environment.threadEnv;
        Environment.threadEnv = this;
        try {
            this.clearCachedValues();
            try {
                this.doAutoImportsAndIncludes(this);
                this.visit$freemarker_core_TemplateElement(this.getTemplate().getRootTreeNode());
                if(this.getAutoFlush()) {
                    this.out.flush();
                }
            } finally {
                this.clearCachedValues();
            }
        } finally {
            Environment.threadEnv = savedEnv;
        }
    }

    visit$freemarker_core_TemplateElement(element : TemplateElement) {
        this.pushElement(element);
        try {
            let templateElementsToVisit : TemplateElement[] = element.accept(this);
            if(templateElementsToVisit != null) {
                for(let index135=0; index135 < templateElementsToVisit.length; index135++) {
                    let el = templateElementsToVisit[index135];
                    {
                        if(el == null) {
                            break;
                        }
                        this.visit$freemarker_core_TemplateElement(el);
                    }
                }
            }
        } catch(te) {
            if(te instanceof TemplateException) {
                this.handleTemplateException(te);
                return;
            }
            throw te;
        } finally {
            this.popElement();
        }
    }

    visit$freemarker_core_TemplateElement_A(elementBuffer : TemplateElement[]) {
        if(elementBuffer == null) {
            return;
        }
        for(let index136=0; index136 < elementBuffer.length; index136++) {
            let element = elementBuffer[index136];
            {
                if(element == null) {
                    break;
                }
                this.pushElement(element);
                try {
                    let templateElementsToVisit : TemplateElement[] = element.accept(this);
                    if(templateElementsToVisit != null) {
                        for(let index137=0; index137 < templateElementsToVisit.length; index137++) {
                            let el = templateElementsToVisit[index137];
                            {
                                if(el == null) {
                                    break;
                                }
                                this.visit$freemarker_core_TemplateElement(el);
                            }
                        }
                    }
                } catch(te) {
                    if(te instanceof TemplateException) {
                        this.handleTemplateException(te);
                        return;
                    }
                    throw te;
                } finally {
                    this.popElement();
                }
            }
        }
    }

    visit$freemarker_core_TemplateElement_A$java_io_Writer(elementBuffer : TemplateElement[], out : Writer) {
        let prevOut : Writer = this.out;
        this.out = out;
        try {
            this.visit$freemarker_core_TemplateElement_A(elementBuffer);
        } finally {
            this.out = prevOut;
        }
    }

    replaceTopElement(element : TemplateElement) : TemplateElement {
        return this.instructionStack[this.instructionStackSize - 1] = element;
    }

    static NO_OUT_ARGS : TemplateModel[]; public static NO_OUT_ARGS_$LI$() : TemplateModel[] { Environment.__static_initialize(); if(Environment.NO_OUT_ARGS == null) Environment.NO_OUT_ARGS = []; return Environment.NO_OUT_ARGS; };

    public visit$freemarker_core_TemplateElement$freemarker_template_TemplateDirectiveModel$java_util_Map$java_util_List(element : TemplateElement, directiveModel : TemplateDirectiveModel, args : Map<any, any>, bodyParameterNames : Array<any>) {
        this.visit$freemarker_core_TemplateElement_A$freemarker_template_TemplateDirectiveModel$java_util_Map$java_util_List([element], directiveModel, args, bodyParameterNames);
    }

    /**
     * @deprecated Should be internal API
     * @param {TemplateElement} element
     * @param {*} directiveModel
     * @param {Map} args
     * @param {List} bodyParameterNames
     */
    public visit(element? : any, directiveModel? : any, args? : any, bodyParameterNames? : any) : any {
        if(((element != null && element instanceof <any>TemplateElement) || element === null) && ((directiveModel != null && (directiveModel["__interfaces"] != null && directiveModel["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0 || directiveModel.constructor != null && directiveModel.constructor["__interfaces"] != null && directiveModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0)) || directiveModel === null) && ((args != null && (args instanceof Map)) || args === null) && ((bodyParameterNames != null && (bodyParameterNames instanceof Array)) || bodyParameterNames === null)) {
            return <any>this.visit$freemarker_core_TemplateElement$freemarker_template_TemplateDirectiveModel$java_util_Map$java_util_List(element, directiveModel, args, bodyParameterNames);
        } else if(((element != null && element instanceof <any>Array && (element.length==0 || element[0] == null ||(element[0] != null && element[0] instanceof <any>TemplateElement))) || element === null) && ((directiveModel != null && (directiveModel["__interfaces"] != null && directiveModel["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0 || directiveModel.constructor != null && directiveModel.constructor["__interfaces"] != null && directiveModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0)) || directiveModel === null) && ((args != null && (args instanceof Map)) || args === null) && ((bodyParameterNames != null && (bodyParameterNames instanceof Array)) || bodyParameterNames === null)) {
            return <any>this.visit$freemarker_core_TemplateElement_A$freemarker_template_TemplateDirectiveModel$java_util_Map$java_util_List(element, directiveModel, args, bodyParameterNames);
        } else if(((element != null && element instanceof <any>Array && (element.length==0 || element[0] == null ||(element[0] != null && element[0] instanceof <any>TemplateElement))) || element === null) && ((directiveModel != null && directiveModel instanceof <any>Writer) || directiveModel === null) && args === undefined && bodyParameterNames === undefined) {
            return <any>this.visit$freemarker_core_TemplateElement_A$java_io_Writer(element, directiveModel);
        } else if(((element != null && element instanceof <any>TemplateElement) || element === null) && directiveModel === undefined && args === undefined && bodyParameterNames === undefined) {
            return <any>this.visit$freemarker_core_TemplateElement(element);
        } else if(((element != null && element instanceof <any>Array && (element.length==0 || element[0] == null ||(element[0] != null && element[0] instanceof <any>TemplateElement))) || element === null) && directiveModel === undefined && args === undefined && bodyParameterNames === undefined) {
            return <any>this.visit$freemarker_core_TemplateElement_A(element);
        } else throw new Error('invalid overload');
    }

    visit$freemarker_core_TemplateElement_A$freemarker_template_TemplateDirectiveModel$java_util_Map$java_util_List(childBuffer : TemplateElement[], directiveModel : TemplateDirectiveModel, args : Map<any, any>, bodyParameterNames : Array<any>) {
        let nested : TemplateDirectiveBody;
        if(childBuffer == null) {
            nested = null;
        } else {
            nested = new Environment.NestedElementTemplateDirectiveBody(this, childBuffer);
        }
        let outArgs : TemplateModel[];
        if(bodyParameterNames == null || /* isEmpty */(bodyParameterNames.length == 0)) {
            outArgs = Environment.NO_OUT_ARGS_$LI$();
        } else {
            outArgs = (s => { let a=[]; while(s-->0) a.push(null); return a; })(/* size */(<number>bodyParameterNames.length));
        }
        if(outArgs.length > 0) {
            this.pushLocalContext(new Environment.Environment$0(this, bodyParameterNames, outArgs));
        }
        try {
            directiveModel.execute(this, args, outArgs, nested);
        } catch(__e) {
            if(__e != null && __e instanceof <any>FlowControlException) {
                let e : FlowControlException = <FlowControlException>__e;
                throw e;

            }
            if(__e != null && __e instanceof <any>TemplateException) {
                let e : TemplateException = <TemplateException>__e;
                throw e;

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.io.IOException") >= 0)) {
                let e : Error = <Error>__e;
                throw e;

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                let e : Error = <Error>__e;
                if(EvalUtil.shouldWrapUncheckedException(e, this)) {
                    throw new _MiscTemplateException(e, this, "Directive has thrown an unchecked exception; see the cause exception.");
                } else if(e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.RuntimeException") >= 0) || e != null && e instanceof <any>Error) {
                    throw <Error>e;
                } else {
                    throw new UndeclaredThrowableException(e);
                }

            }
        } finally {
            if(outArgs.length > 0) {
                this.localContextStack.pop();
            }
        }
    }

    /**
     * "Visit" the template element, passing the output through a TemplateTransformModel
     * 
     * @param {Array} elementBuffer the element to visit through a transform; might contains trailing {@code null}-s
     * @param {*} transform     the transform to pass the element output through
     * @param {Map} args          optional arguments fed to the transform
     */
    visitAndTransform(elementBuffer : TemplateElement[], transform : TemplateTransformModel, args : Map<any, any>) {
        try {
            let tw : Writer = transform.getWriter(this.out, args);
            if(tw == null) tw = Environment.EMPTY_BODY_WRITER_$LI$();
            let tc : TransformControl = (tw != null && (tw["__interfaces"] != null && tw["__interfaces"].indexOf("freemarker.template.TransformControl") >= 0 || tw.constructor != null && tw.constructor["__interfaces"] != null && tw.constructor["__interfaces"].indexOf("freemarker.template.TransformControl") >= 0))?<TransformControl><any>tw:null;
            let prevOut : Writer = this.out;
            this.out = tw;
            try {
                if(tc == null || tc.onStart() !== TransformControl.SKIP_BODY) {
                    do {
                        this.visit$freemarker_core_TemplateElement_A(elementBuffer);
                    } while((tc != null && tc.afterBody() === TransformControl.REPEAT_EVALUATION));
                }
            } catch(t) {
                try {
                    if(tc != null && !((t != null && t instanceof <any>FlowControlException) && this.getConfiguration().getIncompatibleImprovements().intValue() >= /*_TemplateAPI.VERSION_INT_2_3_27_$LI$()*/2003027)) {
                        tc.onError(t);
                    } else {
                        throw t;
                    }
                } catch(__e) {
                    if(__e != null && __e instanceof <any>TemplateException) {
                        let e : TemplateException = <TemplateException>__e;
                        throw e;

                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.io.IOException") >= 0)) {
                        let e : Error = <Error>__e;
                        throw e;

                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Error") >= 0) || __e != null && __e instanceof <any>Error) {
                        let e : Error = <Error>__e;
                        throw e;

                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Throwable") >= 0) || __e != null && __e instanceof <any>Error) {
                        let e : Error = <Error>__e;
                        if(EvalUtil.shouldWrapUncheckedException(e, this)) {
                            throw new _MiscTemplateException(e, this, "Transform has thrown an unchecked exception; see the cause exception.");
                        } else if(e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.RuntimeException") >= 0) || e != null && e instanceof <any>Error) {
                            throw <Error>e;
                        } else {
                            throw new UndeclaredThrowableException(e);
                        }

                    }
                }
            } finally {
                this.out = prevOut;
                if(prevOut !== tw) {
                    tw.close();
                }
            }
        } catch(te) {
            if(te instanceof TemplateException) {
                this.handleTemplateException(te);
                return;
            }
            throw te;
        }
    }

    /**
     * Visit a block using buffering/recovery
     * @param {AttemptBlock} attemptBlock
     * @param {TemplateElement} attemptedSection
     * @param {RecoveryBlock} recoverySection
     */
    visitAttemptRecover(attemptBlock : AttemptBlock, attemptedSection : TemplateElement, recoverySection : RecoveryBlock) {
        let prevOut : Writer = this.out;
        let sw : StringWriter = new StringWriter();
        this.out = sw;
        let thrownException : TemplateException = null;
        let lastFIRE : boolean = this.setFastInvalidReferenceExceptions(false);
        let lastInAttemptBlock : boolean = this.inAttemptBlock;
        try {
            this.inAttemptBlock = true;
            this.visit$freemarker_core_TemplateElement(attemptedSection);
        } catch(te) {
            thrownException = te;
        } finally {
            this.inAttemptBlock = lastInAttemptBlock;
            this.setFastInvalidReferenceExceptions(lastFIRE);
            this.out = prevOut;
        }
        if(thrownException != null) {
            if(Environment.ATTEMPT_LOGGER_$LI$().isDebugEnabled()) {
                Environment.ATTEMPT_LOGGER_$LI$().debug$java_lang_String$java_lang_Throwable("Error in attempt block " + attemptBlock.getStartLocationQuoted(), thrownException);
            }
            try {
                /* add */(this.recoveredErrorStack.push(thrownException)>0);
                this.visit$freemarker_core_TemplateElement(recoverySection);
            } finally {
                /* remove */this.recoveredErrorStack.splice(/* size */(<number>this.recoveredErrorStack.length) - 1, 1);
            }
        } else {
            this.out.write(sw.toString());
        }
    }

    getCurrentRecoveredErrorMessage() : string {
        if(/* isEmpty */(this.recoveredErrorStack.length == 0)) {
            throw new _MiscTemplateException(this, ".error is not available outside of a #recover block");
        }
        return (<Error>/* get */this.recoveredErrorStack[/* size */(<number>this.recoveredErrorStack.length) - 1]).message;
    }

    /**
     * Tells if we are inside an <tt>#attempt</tt> block (but before <tt>#recover</tt>). This can be useful for
     * {link TemplateExceptionHandler}-s, as then they may don't want to print the error to the output, as
     * <tt>#attempt</tt> will roll it back anyway.
     * 
     * @since 2.3.20
     * @return {boolean}
     */
    public isInAttemptBlock() : boolean {
        return this.inAttemptBlock;
    }

    /**
     * Used for {@code #nested}.
     * @param {BodyInstruction.Context} bodyCtx
     */
    invokeNestedContent(bodyCtx : BodyInstruction.Context) {
        let invokingMacroContext : Macro.Context = this.getCurrentMacroContext();
        let prevLocalContextStack : LocalContextStack = this.localContextStack;
        let callPlace : TemplateObject = invokingMacroContext.callPlace;
        let nestedContentBuffer : TemplateElement[] = (callPlace != null && callPlace instanceof <any>TemplateElement)?(<TemplateElement>callPlace).getChildBuffer():null;
        if(nestedContentBuffer != null) {
            this.currentMacroContext = invokingMacroContext.prevMacroContext;
            this.currentNamespace = invokingMacroContext.nestedContentNamespace;
            let prevParent : Configurable;
            let parentReplacementOn : boolean = this.isBeforeIcI2322();
            prevParent = this.getParent();
            if(parentReplacementOn) {
                this.setParent(this.currentNamespace.getTemplate());
            } else {
                this.legacyParent = this.currentNamespace.getTemplate();
            }
            this.localContextStack = invokingMacroContext.prevLocalContextStack;
            if(invokingMacroContext.nestedContentParameterNames != null) {
                this.pushLocalContext(bodyCtx);
            }
            try {
                this.visit$freemarker_core_TemplateElement_A(nestedContentBuffer);
            } finally {
                if(invokingMacroContext.nestedContentParameterNames != null) {
                    this.localContextStack.pop();
                }
                this.currentMacroContext = invokingMacroContext;
                this.currentNamespace = this.getMacroNamespace(invokingMacroContext.getMacro());
                if(parentReplacementOn) {
                    this.setParent(prevParent);
                } else {
                    this.legacyParent = prevParent;
                }
                this.localContextStack = prevLocalContextStack;
            }
        }
    }

    /**
     * "visit" an IteratorBlock
     * @param {IteratorBlock.IterationContext} ictxt
     * @return {boolean}
     */
    visitIteratorBlock(ictxt : IteratorBlock.IterationContext) : boolean {
        this.pushLocalContext(ictxt);
        try {
            return ictxt.accept(this);
        } catch(te) {
            if(te instanceof TemplateException) {
                this.handleTemplateException(te);
                return true;
            }
            throw te;
        } finally {
            this.localContextStack.pop();
        }
    }

    /**
     * Used for {@code #visit} and {@code #recurse}.
     * @param {*} node
     * @param {*} namespaces
     */
    invokeNodeHandlerFor(node : TemplateNodeModel, namespaces : TemplateSequenceModel) {
        if(this.nodeNamespaces == null) {
            let ss : SimpleSequence = new SimpleSequence(1);
            ss.add$java_lang_Object(this.currentNamespace);
            this.nodeNamespaces = ss;
        }
        let prevNodeNamespaceIndex : number = this.nodeNamespaceIndex;
        let prevNodeName : string = this.currentNodeName;
        let prevNodeNS : string = this.currentNodeNS;
        let prevNodeNamespaces : TemplateSequenceModel = this.nodeNamespaces;
        let prevVisitorNode : TemplateNodeModel = this.currentVisitorNode;
        this.currentVisitorNode = node;
        if(namespaces != null) {
            this.nodeNamespaces = namespaces;
        }
        try {
            let macroOrTransform : TemplateModel = this.getNodeProcessor$freemarker_template_TemplateNodeModel(node);
            if(macroOrTransform != null && macroOrTransform instanceof <any>Macro) {
                this.invoke(<Macro><any>macroOrTransform, null, null, null, null);
            } else if(macroOrTransform != null && (macroOrTransform["__interfaces"] != null && macroOrTransform["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || macroOrTransform.constructor != null && macroOrTransform.constructor["__interfaces"] != null && macroOrTransform.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0)) {
                this.visitAndTransform(null, <TemplateTransformModel><any>macroOrTransform, null);
            } else {
                let nodeType : string = node.getNodeType();
                if(nodeType != null) {
                    if((/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nodeType,"text")) && (node != null && (node["__interfaces"] != null && node["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || node.constructor != null && node.constructor["__interfaces"] != null && node.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)))) {
                        this.out.write((<TemplateScalarModel><any>node).getAsString());
                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nodeType,"document"))) {
                        this.recurse(node, namespaces);
                    } else if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nodeType,"pi")) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nodeType,"comment")) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nodeType,"document_type"))) {
                        throw <any>new (Function.prototype.bind.apply(_MiscTemplateException, [null, this].concat(<any[]>this.noNodeHandlerDefinedDescription(node, node.getNodeNamespace(), nodeType))));
                    }
                } else {
                    throw <any>new (Function.prototype.bind.apply(_MiscTemplateException, [null, this].concat(<any[]>this.noNodeHandlerDefinedDescription(node, node.getNodeNamespace(), "default"))));
                }
            }
        } finally {
            this.currentVisitorNode = prevVisitorNode;
            this.nodeNamespaceIndex = prevNodeNamespaceIndex;
            this.currentNodeName = prevNodeName;
            this.currentNodeNS = prevNodeNS;
            this.nodeNamespaces = prevNodeNamespaces;
        }
    }

    noNodeHandlerDefinedDescription(node : TemplateNodeModel, ns : string, nodeType : string) : Array<any> {
        let nsPrefix : string;
        if(ns != null) {
            if(ns.length > 0) {
                nsPrefix = " and namespace ";
            } else {
                nsPrefix = " and no namespace";
            }
        } else {
            nsPrefix = "";
            ns = "";
        }
        return ["No macro or directive is defined for node named ", new _DelayedJQuote(node.getNodeName()), nsPrefix, ns, ", and there is no fallback handler called @", nodeType, " either."];
    }

    fallback() {
        let macroOrTransform : TemplateModel = this.getNodeProcessor$java_lang_String$java_lang_String$int(this.currentNodeName, this.currentNodeNS, this.nodeNamespaceIndex);
        if(macroOrTransform != null && macroOrTransform instanceof <any>Macro) {
            this.invoke(<Macro><any>macroOrTransform, null, null, null, null);
        } else if(macroOrTransform != null && (macroOrTransform["__interfaces"] != null && macroOrTransform["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || macroOrTransform.constructor != null && macroOrTransform.constructor["__interfaces"] != null && macroOrTransform.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0)) {
            this.visitAndTransform(null, <TemplateTransformModel><any>macroOrTransform, null);
        }
    }

    /**
     * Calls the macro or function with the given arguments and nested block.
     * @param {Macro} macro
     * @param {Map} namedArgs
     * @param {List} positionalArgs
     * @param {List} bodyParameterNames
     * @param {TemplateObject} callPlace
     */
    invoke(macro : Macro, namedArgs : Map<any, any>, positionalArgs : Array<any>, bodyParameterNames : Array<any>, callPlace : TemplateObject) {
        if(macro === Macro.DO_NOTHING_MACRO_$LI$()) {
            return;
        }
        let elementPushed : boolean;
        if(!this.incompatibleImprovementsGE2328) {
            this.pushElement(macro);
            elementPushed = true;
        } else {
            elementPushed = false;
        }
        try {
            let macroCtx : Macro.Context = new Macro.Context(macro, this, callPlace, bodyParameterNames);
            this.setMacroContextLocalsFromArguments(macroCtx, macro, namedArgs, positionalArgs);
            if(!elementPushed) {
                this.pushElement(macro);
                elementPushed = true;
            }
            let prevMacroCtx : Macro.Context = this.currentMacroContext;
            this.currentMacroContext = macroCtx;
            let prevLocalContextStack : LocalContextStack = this.localContextStack;
            this.localContextStack = null;
            let prevNamespace : Environment.Namespace = this.currentNamespace;
            this.currentNamespace = <Environment.Namespace>/* get */this.macroToNamespaceLookup.get(macro);
            try {
                macroCtx.sanityCheck(this);
                this.visit$freemarker_core_TemplateElement_A(macro.getChildBuffer());
            } catch(__e) {
                if(__e != null && __e instanceof <any>ReturnInstruction.Return) {
                    let re : ReturnInstruction.Return = <ReturnInstruction.Return>__e;

                }
                if(__e != null && __e instanceof <any>TemplateException) {
                    let te : TemplateException = <TemplateException>__e;
                    this.handleTemplateException(te);

                }
            } finally {
                this.currentMacroContext = prevMacroCtx;
                this.localContextStack = prevLocalContextStack;
                this.currentNamespace = prevNamespace;
            }
        } finally {
            if(elementPushed) {
                this.popElement();
            }
        }
    }

    /**
     * Sets the local variables corresponding to the macro call arguments in the macro context.
     * @param {Macro.Context} macroCtx
     * @param {Macro} macro
     * @param {Map} namedArgs
     * @param {List} positionalArgs
     * @private
     */
    setMacroContextLocalsFromArguments(macroCtx : Macro.Context, macro : Macro, namedArgs : Map<any, any>, positionalArgs : Array<any>) {
        let catchAllParamName : string = macro.getCatchAll();
        if(namedArgs != null) {
            let catchAllParamValue : SimpleHash;
            if(catchAllParamName != null) {
                catchAllParamValue = new SimpleHash(<ObjectWrapper><any>null);
                macroCtx.setLocalVar(catchAllParamName, catchAllParamValue);
            } else {
                catchAllParamValue = null;
            }
            for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>namedArgs)); it.hasNext(); ) {
                let argNameAndValExp : Entry<any, any> = <Entry<any, any>><any>it.next();
                let argName : string = <string>argNameAndValExp.getKey();
                let isArgNameDeclared : boolean = macro.hasArgNamed(argName);
                if(isArgNameDeclared || catchAllParamName != null) {
                    let argValueExp : Expression = <Expression>argNameAndValExp.getValue();
                    let argValue : TemplateModel = argValueExp.eval(this);
                    if(isArgNameDeclared) {
                        macroCtx.setLocalVar(argName, argValue);
                    } else {
                        catchAllParamValue.put$java_lang_String$java_lang_Object(argName, argValue);
                    }
                } else {
                    throw new _MiscTemplateException(this, (macro.isFunction()?"Function ":"Macro "), new _DelayedJQuote(macro.getName()), " has no parameter with name ", new _DelayedJQuote(argName), ".");
                }
            }
        } else if(positionalArgs != null) {
            let catchAllParamValue : SimpleSequence;
            if(catchAllParamName != null) {
                catchAllParamValue = new SimpleSequence(<ObjectWrapper><any>null);
                macroCtx.setLocalVar(catchAllParamName, catchAllParamValue);
            } else {
                catchAllParamValue = null;
            }
            let argNames : Array<any> = macro.getArgumentNamesInternal();
            let argsCnt : number = /* size */(<number>positionalArgs.length);
            if(argNames.length < argsCnt && catchAllParamName == null) {
                throw new _MiscTemplateException(this, (macro.isFunction()?"Function ":"Macro "), new _DelayedJQuote(macro.getName()), " only accepts ", new _DelayedToString(argNames.length), " parameters, but got ", new _DelayedToString(argsCnt), ".");
            }
            for(let i : number = 0; i < argsCnt; i++) {
                let argValueExp : Expression = <Expression>/* get */positionalArgs[i];
                let argValue : TemplateModel = argValueExp.eval(this);
                try {
                    if(i < argNames.length) {
                        let argName : string = argNames[i];
                        macroCtx.setLocalVar(argName, argValue);
                    } else {
                        catchAllParamValue.add$java_lang_Object(argValue);
                    }
                } catch(re) {
                    throw new _MiscTemplateException(re, this);
                }
            }
        }
    }

    /**
     * Defines the given macro in the current namespace (doesn't call it).
     * @param {Macro} macro
     */
    visitMacroDef(macro : Macro) {
        /* put */this.macroToNamespaceLookup.set(macro, this.currentNamespace);
        this.currentNamespace.put$java_lang_String$java_lang_Object(macro.getName(), macro);
    }

    getMacroNamespace(macro : Macro) : Environment.Namespace {
        return <Environment.Namespace>/* get */this.macroToNamespaceLookup.get(macro);
    }

    recurse(node : TemplateNodeModel, namespaces : TemplateSequenceModel) {
        if(node == null) {
            node = this.getCurrentVisitorNode();
            if(node == null) {
                throw new _TemplateModelException("The target node of recursion is missing or null.");
            }
        }
        let children : TemplateSequenceModel = node.getChildNodes();
        if(children == null) {
            return;
        }
        let size : number = children.size();
        for(let i : number = 0; i < size; i++) {
            let child : TemplateNodeModel = <TemplateNodeModel><any>children.get(i);
            if(child != null) {
                this.invokeNodeHandlerFor(child, namespaces);
            }
        }
    }

    getCurrentMacroContext() : Macro.Context {
        return this.currentMacroContext;
    }

    handleTemplateException(templateException : TemplateException) {
        if((templateException != null && templateException instanceof <any>TemplateModelException) && (<TemplateModelException>templateException).getReplaceWithCause() && ((<Error>null) != null && (<Error>null) instanceof <any>TemplateException)) {
            templateException = <TemplateException>(null);
        }
        if(this.lastThrowable === templateException) {
            throw templateException;
        }
        this.lastThrowable = templateException;
        if(this.getLogTemplateExceptions() && Environment.LOG_$LI$().isErrorEnabled() && !this.isInAttemptBlock()) {
            Environment.LOG_$LI$().error$java_lang_String$java_lang_Throwable("Error executing FreeMarker template", templateException);
        }
        try {
            if(templateException != null && templateException instanceof <any>StopException) {
                throw templateException;
            }
            this.getTemplateExceptionHandler().handleTemplateException(templateException, this, this.out);
        } catch(e) {
            if(this.isInAttemptBlock()) {
                this.getAttemptExceptionReporter().report(templateException, this);
            }
            throw e;
        }
    }

    /**
     * 
     * @param {*} templateExceptionHandler
     */
    public setTemplateExceptionHandler(templateExceptionHandler : TemplateExceptionHandler) {
        super.setTemplateExceptionHandler(templateExceptionHandler);
        this.lastThrowable = null;
    }

    /**
     * 
     * @param {Locale} locale
     */
    public setLocale(locale : Locale) {
        let prevLocale : Locale = this.getLocale();
        super.setLocale(locale);
        if(locale !== prevLocale) {
            this.cachedTemplateNumberFormats = null;
            if(this.cachedTemplateNumberFormat != null && this.cachedTemplateNumberFormat.isLocaleBound()) {
                this.cachedTemplateNumberFormat = null;
            }
            if(this.cachedTempDateFormatArray != null) {
                for(let i : number = 0; i < Environment.CACHED_TDFS_LENGTH_$LI$(); i++) {
                    let f : TemplateDateFormat = this.cachedTempDateFormatArray[i];
                    if(f != null && f.isLocaleBound()) {
                        this.cachedTempDateFormatArray[i] = null;
                    }
                }
            }
            this.cachedTempDateFormatsByFmtStrArray = null;
            this.cachedCollator = null;
        }
    }

    /**
     * 
     * @param {TimeZone} timeZone
     */
    public setTimeZone(timeZone : string) {
        let prevTimeZone : string = this.getTimeZone();
        super.setTimeZone(timeZone);
        if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(timeZone,prevTimeZone))) {
            if(this.cachedTempDateFormatArray != null) {
                for(let i : number = 0; i < Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$(); i++) {
                    let f : TemplateDateFormat = this.cachedTempDateFormatArray[i];
                    if(f != null && f.isTimeZoneBound()) {
                        this.cachedTempDateFormatArray[i] = null;
                    }
                }
            }
            if(this.cachedTempDateFormatsByFmtStrArray != null) {
                for(let i : number = 0; i < Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$(); i++) {
                    this.cachedTempDateFormatsByFmtStrArray[i] = null;
                }
            }
            this.cachedSQLDateAndTimeTimeZoneSameAsNormal = null;
        }
    }

    /**
     * 
     * @param {TimeZone} timeZone
     */
    public setSQLDateAndTimeTimeZone(timeZone : string) {
        let prevTimeZone : string = this.getSQLDateAndTimeTimeZone();
        super.setSQLDateAndTimeTimeZone(timeZone);
        if(!Environment.nullSafeEquals(timeZone, prevTimeZone)) {
            if(this.cachedTempDateFormatArray != null) {
                for(let i : number = Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$(); i < Environment.CACHED_TDFS_LENGTH_$LI$(); i++) {
                    let format : TemplateDateFormat = this.cachedTempDateFormatArray[i];
                    if(format != null && format.isTimeZoneBound()) {
                        this.cachedTempDateFormatArray[i] = null;
                    }
                }
            }
            if(this.cachedTempDateFormatsByFmtStrArray != null) {
                for(let i : number = Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$(); i < Environment.CACHED_TDFS_LENGTH_$LI$(); i++) {
                    this.cachedTempDateFormatsByFmtStrArray[i] = null;
                }
            }
            this.cachedSQLDateAndTimeTimeZoneSameAsNormal = null;
        }
    }

    static nullSafeEquals(o1 : any, o2 : any) : boolean {
        if(o1 === o2) return true;
        if(o1 == null || o2 == null) return false;
        return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(o1,o2));
    }

    /**
     * Tells if the same concrete time zone is used for SQL date-only and time-only values as for other
     * date/time/date-time values.
     * @return {boolean}
     */
    isSQLDateAndTimeTimeZoneSameAsNormal() : boolean {
        if(this.cachedSQLDateAndTimeTimeZoneSameAsNormal == null) {
            this.cachedSQLDateAndTimeTimeZoneSameAsNormal = this.getSQLDateAndTimeTimeZone() == null || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getSQLDateAndTimeTimeZone(),this.getTimeZone()));
        }
        return this.cachedSQLDateAndTimeTimeZoneSameAsNormal;
    }

    /**
     * 
     * @param {String} urlEscapingCharset
     */
    public setURLEscapingCharset(urlEscapingCharset : string) {
        this.cachedURLEscapingCharsetSet = false;
        super.setURLEscapingCharset(urlEscapingCharset);
    }

    /**
     * 
     * @param {String} outputEncoding
     */
    public setOutputEncoding(outputEncoding : string) {
        this.cachedURLEscapingCharsetSet = false;
        super.setOutputEncoding(outputEncoding);
    }

    /**
     * Returns the name of the charset that should be used for URL encoding. This will be <code>null</code> if the
     * information is not available. The function caches the return value, so it's quick to call it repeatedly.
     * @return {String}
     */
    getEffectiveURLEscapingCharset() : string {
        if(!this.cachedURLEscapingCharsetSet) {
            this.cachedURLEscapingCharset = this.getURLEscapingCharset();
            if(this.cachedURLEscapingCharset == null) {
                this.cachedURLEscapingCharset = this.getOutputEncoding();
            }
            this.cachedURLEscapingCharsetSet = true;
        }
        return this.cachedURLEscapingCharset;
    }

    getCollator() : any {
        if(this.cachedCollator == null) {
            this.cachedCollator = Collator.getInstance()/* getInstance *//*((o1, o2) => o1.toString().localeCompare(o2.toString()))*/;
        }
        return this.cachedCollator;
    }

    /**
     * Compares two {link TemplateModel}-s according the rules of the FTL "==" operator.
     * 
     * @since 2.3.20
     * @param {*} leftValue
     * @param {*} rightValue
     * @return {boolean}
     */
    public applyEqualsOperator(leftValue : TemplateModel, rightValue : TemplateModel) : boolean {
        return EvalUtil.compare$freemarker_template_TemplateModel$int$freemarker_template_TemplateModel$freemarker_core_Environment(leftValue, EvalUtil.CMP_OP_EQUALS, rightValue, this);
    }

    /**
     * Compares two {link TemplateModel}-s according the rules of the FTL "==" operator, except that if the two types
     * are incompatible, they are treated as non-equal instead of throwing an exception. Comparing dates of different
     * types (date-only VS time-only VS date-time) will still throw an exception, however.
     * 
     * @since 2.3.20
     * @param {*} leftValue
     * @param {*} rightValue
     * @return {boolean}
     */
    public applyEqualsOperatorLenient(leftValue : TemplateModel, rightValue : TemplateModel) : boolean {
        return EvalUtil.compareLenient(leftValue, EvalUtil.CMP_OP_EQUALS, rightValue, this);
    }

    /**
     * Compares two {link TemplateModel}-s according the rules of the FTL "&lt;" operator.
     * 
     * @since 2.3.20
     * @param {*} leftValue
     * @param {*} rightValue
     * @return {boolean}
     */
    public applyLessThanOperator(leftValue : TemplateModel, rightValue : TemplateModel) : boolean {
        return EvalUtil.compare$freemarker_template_TemplateModel$int$freemarker_template_TemplateModel$freemarker_core_Environment(leftValue, EvalUtil.CMP_OP_LESS_THAN, rightValue, this);
    }

    /**
     * Compares two {link TemplateModel}-s according the rules of the FTL "&lt;" operator.
     * 
     * @since 2.3.20
     * @param {*} leftValue
     * @param {*} rightValue
     * @return {boolean}
     */
    public applyLessThanOrEqualsOperator(leftValue : TemplateModel, rightValue : TemplateModel) : boolean {
        return EvalUtil.compare$freemarker_template_TemplateModel$int$freemarker_template_TemplateModel$freemarker_core_Environment(leftValue, EvalUtil.CMP_OP_LESS_THAN_EQUALS, rightValue, this);
    }

    /**
     * Compares two {link TemplateModel}-s according the rules of the FTL "&gt;" operator.
     * 
     * @since 2.3.20
     * @param {*} leftValue
     * @param {*} rightValue
     * @return {boolean}
     */
    public applyGreaterThanOperator(leftValue : TemplateModel, rightValue : TemplateModel) : boolean {
        return EvalUtil.compare$freemarker_template_TemplateModel$int$freemarker_template_TemplateModel$freemarker_core_Environment(leftValue, EvalUtil.CMP_OP_GREATER_THAN, rightValue, this);
    }

    /**
     * Compares two {link TemplateModel}-s according the rules of the FTL "&gt;=" operator.
     * 
     * @since 2.3.20
     * @param {*} leftValue
     * @param {*} rightValue
     * @return {boolean}
     */
    public applyWithGreaterThanOrEqualsOperator(leftValue : TemplateModel, rightValue : TemplateModel) : boolean {
        return EvalUtil.compare$freemarker_template_TemplateModel$int$freemarker_template_TemplateModel$freemarker_core_Environment(leftValue, EvalUtil.CMP_OP_GREATER_THAN_EQUALS, rightValue, this);
    }

    public setOut(out : Writer) {
        this.out = out;
    }

    public getOut() : Writer {
        return this.out;
    }

    /**
     * 
     * @param {String} formatName
     */
    public setNumberFormat(formatName : string) {
        super.setNumberFormat(formatName);
        this.cachedTemplateNumberFormat = null;
    }

    formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_Expression$boolean(number : TemplateNumberModel, exp : Expression, useTempModelExc : boolean) : string {
        return this.formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_TemplateNumberFormat$freemarker_core_Expression$boolean(number, this.getTemplateNumberFormat$freemarker_core_Expression$boolean(exp, useTempModelExc), exp, useTempModelExc);
    }

    public formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_TemplateNumberFormat$freemarker_core_Expression$boolean(number : TemplateNumberModel, format : TemplateNumberFormat, exp : Expression, useTempModelExc : boolean) : string {
        try {
            return EvalUtil.assertFormatResultNotNull$java_lang_String(format.formatToPlainText(number));
        } catch(e) {
            throw _MessageUtil.newCantFormatNumberException(format, exp, e, useTempModelExc);
        }
    }

    /**
     * Format number with the number format specified as the parameter, with the current locale.
     * 
     * @param {Expression} exp The blamed expression if an error occurs; it's only needed for better error messages
     * @param {*} number
     * @param {TemplateNumberFormat} format
     * @param {boolean} useTempModelExc
     * @return {String}
     */
    public formatNumberToPlainText(number? : any, format? : any, exp? : any, useTempModelExc? : any) : any {
        if(((number != null && (number["__interfaces"] != null && number["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || number.constructor != null && number.constructor["__interfaces"] != null && number.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) || number === null) && ((format != null && format instanceof <any>TemplateNumberFormat) || format === null) && ((exp != null && exp instanceof <any>Expression) || exp === null) && ((typeof useTempModelExc === 'boolean') || useTempModelExc === null)) {
            return <any>this.formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_TemplateNumberFormat$freemarker_core_Expression$boolean(number, format, exp, useTempModelExc);
        } else if(((typeof number === 'number') || number === null) && ((format != null && format instanceof <any>BackwardCompatibleTemplateNumberFormat) || format === null) && ((exp != null && exp instanceof <any>Expression) || exp === null) && useTempModelExc === undefined) {
            return <any>this.formatNumberToPlainText$java_lang_Number$freemarker_core_BackwardCompatibleTemplateNumberFormat$freemarker_core_Expression(number, format, exp);
        } else if(((number != null && (number["__interfaces"] != null && number["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || number.constructor != null && number.constructor["__interfaces"] != null && number.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) || number === null) && ((format != null && format instanceof <any>Expression) || format === null) && ((typeof exp === 'boolean') || exp === null) && useTempModelExc === undefined) {
            return <any>this.formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_Expression$boolean(number, format, exp);
        } else throw new Error('invalid overload');
    }

    formatNumberToPlainText$java_lang_Number$freemarker_core_BackwardCompatibleTemplateNumberFormat$freemarker_core_Expression(number : number, format : BackwardCompatibleTemplateNumberFormat, exp : Expression) : string {
        try {
            return format.format$java_lang_Number(number);
        } catch(e) {
            throw new _MiscTemplateException(exp, e, this, "Failed to format number with ", new _DelayedJQuote(format.getDescription()), ": ", e.message);
        }
    }

    public getTemplateNumberFormat$() : TemplateNumberFormat {
        let format : TemplateNumberFormat = this.cachedTemplateNumberFormat;
        if(format == null) {
            format = this.getTemplateNumberFormat$java_lang_String$boolean(this.getNumberFormat(), false);
            this.cachedTemplateNumberFormat = format;
        }
        return format;
    }

    public getTemplateNumberFormat$java_lang_String(formatString : string) : TemplateNumberFormat {
        return this.getTemplateNumberFormat$java_lang_String$boolean(formatString, true);
    }

    public getTemplateNumberFormat$java_lang_String$java_util_Locale(formatString : string, locale : Locale) : TemplateNumberFormat {
        if(locale.equals(this.getLocale())) {
            this.getTemplateNumberFormat$java_lang_String(formatString);
        }
        return this.getTemplateNumberFormatWithoutCache(formatString, locale);
    }

    getTemplateNumberFormat$freemarker_core_Expression$boolean(exp : Expression, useTempModelExc : boolean) : TemplateNumberFormat {
        let format : TemplateNumberFormat;
        try {
            format = this.getTemplateNumberFormat();
        } catch(e) {
            let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(["Failed to get number format object for the current number format string, ", new _DelayedJQuote(this.getNumberFormat()), ": ", e.message]).blame(exp);
            throw useTempModelExc?new _TemplateModelException(e, this, desc):new _MiscTemplateException(e, this, desc);
        }
        return format;
    }

    public getTemplateNumberFormat$java_lang_String$freemarker_core_Expression$boolean(formatString : string, exp : Expression, useTempModelExc : boolean) : TemplateNumberFormat {
        let format : TemplateNumberFormat;
        try {
            format = this.getTemplateNumberFormat$java_lang_String(formatString);
        } catch(e) {
            let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(["Failed to get number format object for the ", new _DelayedJQuote(formatString), " number format string: ", e.message]).blame(exp);
            throw useTempModelExc?new _TemplateModelException(e, this, desc):new _MiscTemplateException(e, this, desc);
        }
        return format;
    }

    /**
     * Convenience wrapper around {link #getTemplateNumberFormat(String)} to be called during expression evaluation.
     * 
     * @param {Expression} exp The blamed expression if an error occurs; it's only needed for better error messages
     * @param {String} formatString
     * @param {boolean} useTempModelExc
     * @return {TemplateNumberFormat}
     */
    public getTemplateNumberFormat(formatString? : any, exp? : any, useTempModelExc? : any) : any {
        if(((typeof formatString === 'string') || formatString === null) && ((exp != null && exp instanceof <any>Expression) || exp === null) && ((typeof useTempModelExc === 'boolean') || useTempModelExc === null)) {
            return <any>this.getTemplateNumberFormat$java_lang_String$freemarker_core_Expression$boolean(formatString, exp, useTempModelExc);
        } else if(((typeof formatString === 'string') || formatString === null) && ((exp instanceof Locale) || exp === null) && useTempModelExc === undefined) {
            return <any>this.getTemplateNumberFormat$java_lang_String$java_util_Locale(formatString, exp);
        } else if(((formatString != null && formatString instanceof <any>Expression) || formatString === null) && ((typeof exp === 'boolean') || exp === null) && useTempModelExc === undefined) {
            return <any>this.getTemplateNumberFormat$freemarker_core_Expression$boolean(formatString, exp);
        } else if(((typeof formatString === 'string') || formatString === null) && ((typeof exp === 'boolean') || exp === null) && useTempModelExc === undefined) {
            return <any>this.getTemplateNumberFormat$java_lang_String$boolean(formatString, exp);
        } else if(((typeof formatString === 'string') || formatString === null) && exp === undefined && useTempModelExc === undefined) {
            return <any>this.getTemplateNumberFormat$java_lang_String(formatString);
        } else if(formatString === undefined && exp === undefined && useTempModelExc === undefined) {
            return <any>this.getTemplateNumberFormat$();
        } else throw new Error('invalid overload');
    }

    getTemplateNumberFormat$java_lang_String$boolean(formatString : string, cacheResult : boolean) : TemplateNumberFormat {
        if(this.cachedTemplateNumberFormats == null) {
            if(cacheResult) {
                this.cachedTemplateNumberFormats = <any>(new Map<any, any>());
            }
        } else {
            let format : TemplateNumberFormat = /* get */this.cachedTemplateNumberFormats.get(formatString);
            if(format != null) {
                return format;
            }
        }
        let format : TemplateNumberFormat = this.getTemplateNumberFormatWithoutCache(formatString, this.getLocale());
        if(cacheResult) {
            /* put */this.cachedTemplateNumberFormats.set(formatString, format);
        }
        return format;
    }

    /**
     * Returns the {link TemplateNumberFormat} for the given parameters without using the {link Environment}-level
     * cache. Of course, the {link TemplateNumberFormatFactory} involved might still uses its own cache.
     * 
     * @param {String} formatString Not {@code null}
     * @param {Locale} locale       Not {@code null}
     * @return {TemplateNumberFormat}
     * @private
     */
    getTemplateNumberFormatWithoutCache(formatString : string, locale : Locale) : TemplateNumberFormat {
        let formatStringLen : number = formatString.length;
        if(formatStringLen > 1 && formatString.charAt(0) === '@' && (this.isIcI2324OrLater() || this.hasCustomFormats()) && Character.isLetter(formatString.charAt(1))) {
            let name : string;
            let params : string;
            {
                let endIdx : number;
                findParamsStart: for(endIdx = 1; endIdx < formatStringLen; endIdx++) {
                    let c : string = formatString.charAt(endIdx);
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0)) {
                        break findParamsStart;
                    }
                }
                name = formatString.substring(1, endIdx);
                params = endIdx < formatStringLen?formatString.substring(endIdx + 1):"";
            }
            let formatFactory : TemplateNumberFormatFactory = this.getCustomNumberFormat(name);
            if(formatFactory == null) {
                throw new UndefinedCustomFormatException("No custom number format was defined with name " + StringUtil.jQuote$java_lang_Object(name));
            }
            return formatFactory.get(params, locale, this);
        } else {
            return JavaTemplateNumberFormatFactory.INSTANCE_$LI$().get(formatString, locale, this);
        }
    }

    /**
     * Returns the {link NumberFormat} used for the <tt>c</tt> built-in. This is always US English
     * <code>"0.################"</code>, without grouping and without superfluous decimal separator.
     * @return {NumberFormat}
     */
    public getCNumberFormat() : /*NumberFormat*/any {
        // if(this.cNumberFormat == null) {
        //     this.cNumberFormat = </*DecimalFormat*/any>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(Environment.C_NUMBER_FORMAT_$LI$());
        // }
        // return this.cNumberFormat;
        throw new Error();
    }

    /**
     * 
     * @param {String} timeFormat
     */
    public setTimeFormat(timeFormat : string) {
        let prevTimeFormat : string = this.getTimeFormat();
        super.setTimeFormat(timeFormat);
        if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(timeFormat,prevTimeFormat))) {
            if(this.cachedTempDateFormatArray != null) {
                for(let i : number = 0; i < Environment.CACHED_TDFS_LENGTH_$LI$(); i += Environment.CACHED_TDFS_ZONELESS_INPUT_OFFS) {
                    this.cachedTempDateFormatArray[i + TemplateDateModel.TIME] = null;
                }
            }
        }
    }

    /**
     * 
     * @param {String} dateFormat
     */
    public setDateFormat(dateFormat : string) {
        let prevDateFormat : string = this.getDateFormat();
        super.setDateFormat(dateFormat);
        if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dateFormat,prevDateFormat))) {
            if(this.cachedTempDateFormatArray != null) {
                for(let i : number = 0; i < Environment.CACHED_TDFS_LENGTH_$LI$(); i += Environment.CACHED_TDFS_ZONELESS_INPUT_OFFS) {
                    this.cachedTempDateFormatArray[i + TemplateDateModel.DATE] = null;
                }
            }
        }
    }

    /**
     * 
     * @param {String} dateTimeFormat
     */
    public setDateTimeFormat(dateTimeFormat : string) {
        let prevDateTimeFormat : string = this.getDateTimeFormat();
        super.setDateTimeFormat(dateTimeFormat);
        if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dateTimeFormat,prevDateTimeFormat))) {
            if(this.cachedTempDateFormatArray != null) {
                for(let i : number = 0; i < Environment.CACHED_TDFS_LENGTH_$LI$(); i += Environment.CACHED_TDFS_ZONELESS_INPUT_OFFS) {
                    this.cachedTempDateFormatArray[i + TemplateDateModel.DATETIME] = null;
                }
            }
        }
    }

    public getConfiguration() : Configuration {
        return this.configuration;
    }

    getLastReturnValue() : TemplateModel {
        return this.lastReturnValue;
    }

    setLastReturnValue(lastReturnValue : TemplateModel) {
        this.lastReturnValue = lastReturnValue;
    }

    clearLastReturnValue() {
        this.lastReturnValue = null;
    }

    formatDateToPlainText$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(tdm : TemplateDateModel, tdmSourceExpr : Expression, useTempModelExc : boolean) : string {
        let format : TemplateDateFormat = this.getTemplateDateFormat$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(tdm, tdmSourceExpr, useTempModelExc);
        try {
            return EvalUtil.assertFormatResultNotNull$java_lang_String(format.formatToPlainText(tdm));
        } catch(e) {
            throw _MessageUtil.newCantFormatDateException(format, tdmSourceExpr, e, useTempModelExc);
        }
    }

    public formatDateToPlainText$freemarker_template_TemplateDateModel$java_lang_String$freemarker_core_Expression$freemarker_core_Expression$boolean(tdm : TemplateDateModel, formatString : string, blamedDateSourceExp : Expression, blamedFormatterExp : Expression, useTempModelExc : boolean) : string {
        let date : Date = EvalUtil.modelToDate(tdm, blamedDateSourceExp);
        let format : TemplateDateFormat = this.getTemplateDateFormat$java_lang_String$int$java_lang_Class$freemarker_core_Expression$freemarker_core_Expression$boolean(formatString, tdm.getDateType(), (<any>date.constructor), blamedDateSourceExp, blamedFormatterExp, useTempModelExc);
        try {
            return EvalUtil.assertFormatResultNotNull$java_lang_String(format.formatToPlainText(tdm));
        } catch(e) {
            throw _MessageUtil.newCantFormatDateException(format, blamedDateSourceExp, e, useTempModelExc);
        }
    }

    /**
     * @param {Expression} blamedDateSourceExp The blamed expression if an error occurs; only used for error messages.
     * @param {Expression} blamedFormatterExp  The blamed expression if an error occurs; only used for error messages.
     * @param {*} tdm
     * @param {String} formatString
     * @param {boolean} useTempModelExc
     * @return {String}
     */
    public formatDateToPlainText(tdm? : any, formatString? : any, blamedDateSourceExp? : any, blamedFormatterExp? : any, useTempModelExc? : any) : any {
        if(((tdm != null && (tdm["__interfaces"] != null && tdm["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || tdm.constructor != null && tdm.constructor["__interfaces"] != null && tdm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) || tdm === null) && ((typeof formatString === 'string') || formatString === null) && ((blamedDateSourceExp != null && blamedDateSourceExp instanceof <any>Expression) || blamedDateSourceExp === null) && ((blamedFormatterExp != null && blamedFormatterExp instanceof <any>Expression) || blamedFormatterExp === null) && ((typeof useTempModelExc === 'boolean') || useTempModelExc === null)) {
            return <any>this.formatDateToPlainText$freemarker_template_TemplateDateModel$java_lang_String$freemarker_core_Expression$freemarker_core_Expression$boolean(tdm, formatString, blamedDateSourceExp, blamedFormatterExp, useTempModelExc);
        } else if(((tdm != null && (tdm["__interfaces"] != null && tdm["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || tdm.constructor != null && tdm.constructor["__interfaces"] != null && tdm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) || tdm === null) && ((formatString != null && formatString instanceof <any>Expression) || formatString === null) && ((typeof blamedDateSourceExp === 'boolean') || blamedDateSourceExp === null) && blamedFormatterExp === undefined && useTempModelExc === undefined) {
            return <any>this.formatDateToPlainText$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(tdm, formatString, blamedDateSourceExp);
        } else throw new Error('invalid overload');
    }

    public getTemplateDateFormat$int$java_lang_Class(dateType : number, dateClass : any) : TemplateDateFormat {
        let isSQLDateOrTime : boolean = Environment.isSQLDateOrTimeClass(dateClass);
        return this.getTemplateDateFormat$int$boolean$boolean(dateType, this.shouldUseSQLDTTimeZone(isSQLDateOrTime), isSQLDateOrTime);
    }

    public getTemplateDateFormat$java_lang_String$int$java_lang_Class(formatString : string, dateType : number, dateClass : any) : TemplateDateFormat {
        let isSQLDateOrTime : boolean = Environment.isSQLDateOrTimeClass(dateClass);
        return this.getTemplateDateFormat$java_lang_String$int$boolean$boolean$boolean(formatString, dateType, this.shouldUseSQLDTTimeZone(isSQLDateOrTime), isSQLDateOrTime, true);
    }

    public getTemplateDateFormat$java_lang_String$int$java_lang_Class$java_util_Locale(formatString : string, dateType : number, dateClass : any, locale : Locale) : TemplateDateFormat {
        let isSQLDateOrTime : boolean = Environment.isSQLDateOrTimeClass(dateClass);
        let useSQLDTTZ : boolean = this.shouldUseSQLDTTimeZone(isSQLDateOrTime);
        return this.getTemplateDateFormat$java_lang_String$int$java_util_Locale$java_util_TimeZone$boolean(formatString, dateType, locale, useSQLDTTZ?this.getSQLDateAndTimeTimeZone():this.getTimeZone(), isSQLDateOrTime);
    }

    public getTemplateDateFormat$java_lang_String$int$java_lang_Class$java_util_Locale$java_util_TimeZone$java_util_TimeZone(formatString : string, dateType : number, dateClass : any, locale : Locale, timeZone : string, sqlDateAndTimeTimeZone : string) : TemplateDateFormat {
        let isSQLDateOrTime : boolean = Environment.isSQLDateOrTimeClass(dateClass);
        let useSQLDTTZ : boolean = this.shouldUseSQLDTTimeZone(isSQLDateOrTime);
        return this.getTemplateDateFormat$java_lang_String$int$java_util_Locale$java_util_TimeZone$boolean(formatString, dateType, locale, useSQLDTTZ?sqlDateAndTimeTimeZone:timeZone, isSQLDateOrTime);
    }

    /**
     * Like {link #getTemplateDateFormat(String, int, Class)}, but allows you to use a different locale and time zone
     * than the current one. If you want to use the current locale and time zone, use
     * {link #getTemplateDateFormat(String, int, Class)} instead.
     * <p>
     * <p>
     * Performance notes regarding the locale and time zone parameters of
     * {link #getTemplateDateFormat(String, int, Locale, TimeZone, boolean)} apply.
     * 
     * @param {TimeZone} timeZone               The {link TimeZone} used if {@code dateClass} is not an SQL date-only or time-only type. Can't be
     * {@code null}.
     * @param {TimeZone} sqlDateAndTimeTimeZone The {link TimeZone} used if {@code dateClass} is an SQL date-only or time-only type. Can't be
     * {@code null}.
     * <p>
     * see #getTemplateDateFormat(String, int, Class)
     * @since 2.4
     * @param {String} formatString
     * @param {number} dateType
     * @param {*} dateClass
     * @param {Locale} locale
     * @return {TemplateDateFormat}
     */
    public getTemplateDateFormat(formatString? : any, dateType? : any, dateClass? : any, locale? : any, timeZone? : any, sqlDateAndTimeTimeZone? : any) : any {
        if(((typeof formatString === 'string') || formatString === null) && ((typeof dateType === 'number') || dateType === null) && ((dateClass != null) || dateClass === null) && ((typeof locale === 'string') || locale === null) && ((typeof timeZone === 'string') || timeZone === null) && ((typeof sqlDateAndTimeTimeZone === 'string') || sqlDateAndTimeTimeZone === null)) {
            return <any>this.getTemplateDateFormat$java_lang_String$int$java_lang_Class$java_util_Locale$java_util_TimeZone$java_util_TimeZone(formatString, dateType, dateClass, locale, timeZone, sqlDateAndTimeTimeZone);
        } else if(((typeof formatString === 'string') || formatString === null) && ((typeof dateType === 'number') || dateType === null) && ((dateClass != null) || dateClass === null) && ((locale != null && locale instanceof <any>Expression) || locale === null) && ((timeZone != null && timeZone instanceof <any>Expression) || timeZone === null) && ((typeof sqlDateAndTimeTimeZone === 'boolean') || sqlDateAndTimeTimeZone === null)) {
            return <any>this.getTemplateDateFormat$java_lang_String$int$java_lang_Class$freemarker_core_Expression$freemarker_core_Expression$boolean(formatString, dateType, dateClass, locale, timeZone, sqlDateAndTimeTimeZone);
        } else if(((typeof formatString === 'string') || formatString === null) && ((typeof dateType === 'number') || dateType === null) && ((typeof dateClass === 'string') || dateClass === null) && ((typeof locale === 'string') || locale === null) && ((typeof timeZone === 'boolean') || timeZone === null) && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$java_lang_String$int$java_util_Locale$java_util_TimeZone$boolean(formatString, dateType, dateClass, locale, timeZone);
        } else if(((typeof formatString === 'string') || formatString === null) && ((typeof dateType === 'number') || dateType === null) && ((typeof dateClass === 'boolean') || dateClass === null) && ((typeof locale === 'boolean') || locale === null) && ((typeof timeZone === 'boolean') || timeZone === null) && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$java_lang_String$int$boolean$boolean$boolean(formatString, dateType, dateClass, locale, timeZone);
        } else if(((typeof formatString === 'string') || formatString === null) && ((typeof dateType === 'number') || dateType === null) && ((dateClass != null) || dateClass === null) && ((typeof locale === 'string') || locale === null) && timeZone === undefined && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$java_lang_String$int$java_lang_Class$java_util_Locale(formatString, dateType, dateClass, locale);
        } else if(((typeof formatString === 'number') || formatString === null) && ((dateType != null) || dateType === null) && ((dateClass != null && dateClass instanceof <any>Expression) || dateClass === null) && ((typeof locale === 'boolean') || locale === null) && timeZone === undefined && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$int$java_lang_Class$freemarker_core_Expression$boolean(formatString, dateType, dateClass, locale);
        } else if(((formatString != null && (formatString["__interfaces"] != null && formatString["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || formatString.constructor != null && formatString.constructor["__interfaces"] != null && formatString.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) || formatString === null) && ((dateType != null && dateType instanceof <any>Expression) || dateType === null) && ((typeof dateClass === 'boolean') || dateClass === null) && locale === undefined && timeZone === undefined && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(formatString, dateType, dateClass);
        } else if(((typeof formatString === 'string') || formatString === null) && ((typeof dateType === 'number') || dateType === null) && ((dateClass != null) || dateClass === null) && locale === undefined && timeZone === undefined && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$java_lang_String$int$java_lang_Class(formatString, dateType, dateClass);
        } else if(((typeof formatString === 'number') || formatString === null) && ((typeof dateType === 'boolean') || dateType === null) && ((typeof dateClass === 'boolean') || dateClass === null) && locale === undefined && timeZone === undefined && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$int$boolean$boolean(formatString, dateType, dateClass);
        } else if(((typeof formatString === 'number') || formatString === null) && ((dateType != null) || dateType === null) && dateClass === undefined && locale === undefined && timeZone === undefined && sqlDateAndTimeTimeZone === undefined) {
            return <any>this.getTemplateDateFormat$int$java_lang_Class(formatString, dateType);
        } else throw new Error('invalid overload');
    }

    public getTemplateDateFormat$java_lang_String$int$java_util_Locale$java_util_TimeZone$boolean(formatString : string, dateType : number, locale : Locale, timeZone : string, zonelessInput : boolean) : TemplateDateFormat {
        let currentLocale : Locale = this.getLocale();
        if(locale.equals(currentLocale)) {
            let equalCurrentTZ : number;
            let currentTimeZone : string = this.getTimeZone();
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(timeZone,currentTimeZone))) {
                equalCurrentTZ = 1;
            } else {
                let currentSQLDTTimeZone : string = this.getSQLDateAndTimeTimeZone();
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(timeZone,currentSQLDTTimeZone))) {
                    equalCurrentTZ = 2;
                } else {
                    equalCurrentTZ = 0;
                }
            }
            if(equalCurrentTZ !== 0) {
                return this.getTemplateDateFormat$java_lang_String$int$boolean$boolean$boolean(formatString, dateType, equalCurrentTZ === 2, zonelessInput, true);
            }
        }
        return this.getTemplateDateFormatWithoutCache(formatString, dateType, locale, timeZone, zonelessInput);
    }

    getTemplateDateFormat$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(tdm : TemplateDateModel, tdmSourceExpr : Expression, useTempModelExc : boolean) : TemplateDateFormat {
        let date : Date = EvalUtil.modelToDate(tdm, tdmSourceExpr);
        let format : TemplateDateFormat = this.getTemplateDateFormat$int$java_lang_Class$freemarker_core_Expression$boolean(tdm.getDateType(), (<any>date.constructor), tdmSourceExpr, useTempModelExc);
        return format;
    }

    getTemplateDateFormat$int$java_lang_Class$freemarker_core_Expression$boolean(dateType : number, dateClass : any, blamedDateSourceExp : Expression, useTempModelExc : boolean) : TemplateDateFormat {
        try {
            return this.getTemplateDateFormat$int$java_lang_Class(dateType, dateClass);
        } catch(__e) {
            if(__e != null && __e instanceof <any>UnknownDateTypeFormattingUnsupportedException) {
                let e : UnknownDateTypeFormattingUnsupportedException = <UnknownDateTypeFormattingUnsupportedException>__e;
                throw _MessageUtil.newCantFormatUnknownTypeDateException(blamedDateSourceExp, e);

            }
            if(__e != null && __e instanceof <any>TemplateValueFormatException) {
                let e : TemplateValueFormatException = <TemplateValueFormatException>__e;
                let settingName : string;
                let settingValue : string;
                switch((dateType)) {
                case TemplateDateModel.TIME:
                    settingName = Configurable.TIME_FORMAT_KEY_$LI$();
                    settingValue = this.getTimeFormat();
                    break;
                case TemplateDateModel.DATE:
                    settingName = Configurable.DATE_FORMAT_KEY_$LI$();
                    settingValue = this.getDateFormat();
                    break;
                case TemplateDateModel.DATETIME:
                    settingName = Configurable.DATETIME_FORMAT_KEY_$LI$();
                    settingValue = this.getDateTimeFormat();
                    break;
                default:
                    settingName = "???";
                    settingValue = "???";
                }
                let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(["The value of the \"", settingName, "\" FreeMarker configuration setting is a malformed date/time/datetime format string: ", new _DelayedJQuote(settingValue), ". Reason given: ", e.message]);
                throw useTempModelExc?new _TemplateModelException(e, desc):new _MiscTemplateException(e, desc);

            }
        }
    }

    getTemplateDateFormat$java_lang_String$int$java_lang_Class$freemarker_core_Expression$freemarker_core_Expression$boolean(formatString : string, dateType : number, dateClass : any, blamedDateSourceExp : Expression, blamedFormatterExp : Expression, useTempModelExc : boolean) : TemplateDateFormat {
        try {
            return this.getTemplateDateFormat$java_lang_String$int$java_lang_Class(formatString, dateType, dateClass);
        } catch(__e) {
            if(__e != null && __e instanceof <any>UnknownDateTypeFormattingUnsupportedException) {
                let e : UnknownDateTypeFormattingUnsupportedException = <UnknownDateTypeFormattingUnsupportedException>__e;
                throw _MessageUtil.newCantFormatUnknownTypeDateException(blamedDateSourceExp, e);

            }
            if(__e != null && __e instanceof <any>TemplateValueFormatException) {
                let e : TemplateValueFormatException = <TemplateValueFormatException>__e;
                let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(["Can\'t create date/time/datetime format based on format string ", new _DelayedJQuote(formatString), ". Reason given: ", e.message]).blame(blamedFormatterExp);
                throw useTempModelExc?new _TemplateModelException(e, desc):new _MiscTemplateException(e, desc);

            }
        }
    }

    getTemplateDateFormat$int$boolean$boolean(dateType : number, useSQLDTTZ : boolean, zonelessInput : boolean) : /*TemplateDateFormat*/any {
        if(dateType === TemplateDateModel.UNKNOWN) {
            throw new UnknownDateTypeFormattingUnsupportedException();
        }
        let cacheIdx : number = this.getTemplateDateFormatCacheArrayIndex(dateType, zonelessInput, useSQLDTTZ);
        let cachedTemplateDateFormats : /*TemplateDateFormat*/any[] = this.cachedTempDateFormatArray;
        if(cachedTemplateDateFormats == null) {
            cachedTemplateDateFormats = (s => { let a=[]; while(s-->0) a.push(null); return a; })(Environment.CACHED_TDFS_LENGTH_$LI$());
            this.cachedTempDateFormatArray = cachedTemplateDateFormats;
        }
        let format : TemplateDateFormat = cachedTemplateDateFormats[cacheIdx];
        if(format == null) {
            let formatString : string;
            switch((dateType)) {
            case TemplateDateModel.TIME:
                formatString = this.getTimeFormat();
                break;
            case TemplateDateModel.DATE:
                formatString = this.getDateFormat();
                break;
            case TemplateDateModel.DATETIME:
                formatString = this.getDateTimeFormat();
                break;
            default:
                throw Object.defineProperty(new Error("Invalid date type enum: " + dateType), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
            format = this.getTemplateDateFormat$java_lang_String$int$boolean$boolean$boolean(formatString, dateType, useSQLDTTZ, zonelessInput, false);
            cachedTemplateDateFormats[cacheIdx] = format;
        }
        return format;
    }

    getTemplateDateFormat$java_lang_String$int$boolean$boolean$boolean(formatString : string, dateType : number, useSQLDTTimeZone : boolean, zonelessInput : boolean, cacheResult : boolean) : TemplateDateFormat {
        let cachedFormatsByFormatString : Map<any, any>;
        readFromCache: do {
            let cachedTempDateFormatsByFmtStrArray : Array<any> = this.cachedTempDateFormatsByFmtStrArray;
            if(cachedTempDateFormatsByFmtStrArray == null) {
                if(cacheResult) {
                    cachedTempDateFormatsByFmtStrArray = (s => { let a=[]; while(s-->0) a.push(null); return a; })(Environment.CACHED_TDFS_LENGTH_$LI$());
                    this.cachedTempDateFormatsByFmtStrArray = cachedTempDateFormatsByFmtStrArray;
                } else {
                    cachedFormatsByFormatString = null;
                    break readFromCache;
                }
            }
            let format : TemplateDateFormat;
            {
                let cacheArrIdx : number = this.getTemplateDateFormatCacheArrayIndex(dateType, zonelessInput, useSQLDTTimeZone);
                cachedFormatsByFormatString = cachedTempDateFormatsByFmtStrArray[cacheArrIdx];
                if(cachedFormatsByFormatString == null) {
                    if(cacheResult) {
                        cachedFormatsByFormatString = <any>(new Map<any, any>());
                        cachedTempDateFormatsByFmtStrArray[cacheArrIdx] = cachedFormatsByFormatString;
                        format = null;
                    } else {
                        break readFromCache;
                    }
                } else {
                    format = /* get */cachedFormatsByFormatString.get(formatString);
                }
            }
            if(format != null) {
                return format;
            }
        } while((false));
        let format : TemplateDateFormat = this.getTemplateDateFormatWithoutCache(formatString, dateType, this.getLocale(), useSQLDTTimeZone?this.getSQLDateAndTimeTimeZone():this.getTimeZone(), zonelessInput);
        if(cacheResult) {
            /* put */cachedFormatsByFormatString.set(formatString, format);
        }
        return format;
    }

    /**
     * Returns the {link TemplateDateFormat} for the given parameters without using the {link Environment}-level
     * cache. Of course, the {link TemplateDateFormatFactory} involved might still uses its own cache, which can be
     * global (class-loader-level) or {link Environment}-level.
     * 
     * @param {String} formatString  See the similar parameter of {link TemplateDateFormatFactory#get}
     * @param {number} dateType      See the similar parameter of {link TemplateDateFormatFactory#get}
     * @param {boolean} zonelessInput See the similar parameter of {link TemplateDateFormatFactory#get}
     * @param {Locale} locale
     * @param {TimeZone} timeZone
     * @return {TemplateDateFormat}
     * @private
     */
    getTemplateDateFormatWithoutCache(formatString : string, dateType : number, locale : Locale, timeZone : string, zonelessInput : boolean) : TemplateDateFormat {
        let formatStringLen : number = formatString.length;
        let formatParams : string;
        let formatFactory : /*TemplateDateFormatFactory*/any;
        let firstChar : string = formatStringLen !== 0?formatString.charAt(0):String.fromCharCode(0);
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == 'x'.charCodeAt(0) && formatStringLen > 1 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(formatString.charAt(1)) == 's'.charCodeAt(0)) {
            formatFactory = (require('./XSTemplateDateFormatFactory').XSTemplateDateFormatFactory).INSTANCE_$LI$();
            formatParams = formatString;
        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == 'i'.charCodeAt(0) && formatStringLen > 2 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(formatString.charAt(1)) == 's'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(formatString.charAt(2)) == 'o'.charCodeAt(0)) {
            formatFactory = (require('./ISOTemplateDateFormatFactory').ISOTemplateDateFormatFactory).INSTANCE_$LI$();
            formatParams = formatString;
        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '@'.charCodeAt(0) && formatStringLen > 1 && (this.isIcI2324OrLater() || this.hasCustomFormats()) && Character.isLetter(formatString.charAt(1))) {
            let name : string;
            {
                let endIdx : number;
                findParamsStart: for(endIdx = 1; endIdx < formatStringLen; endIdx++) {
                    let c : string = formatString.charAt(endIdx);
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0)) {
                        break findParamsStart;
                    }
                }
                name = formatString.substring(1, endIdx);
                formatParams = endIdx < formatStringLen?formatString.substring(endIdx + 1):"";
            }
            formatFactory = this.getCustomDateFormat(name);
            if(formatFactory == null) {
                throw new UndefinedCustomFormatException("No custom date format was defined with name " + StringUtil.jQuote$java_lang_Object(name));
            }
        } else {
            formatParams = formatString;
            formatFactory = (require('./JavaTemplateDateFormatFactory').JavaTemplateDateFormatFactory).INSTANCE_$LI$();
        }
        return formatFactory.get(formatParams, dateType, locale, timeZone, zonelessInput, this);
    }

    shouldUseSQLDTTZ(dateClass : any) : boolean {
        return dateClass !== Date && !this.isSQLDateAndTimeTimeZoneSameAsNormal() && Environment.isSQLDateOrTimeClass(dateClass);
    }

    shouldUseSQLDTTimeZone(sqlDateOrTime : boolean) : boolean {
        return sqlDateOrTime && !this.isSQLDateAndTimeTimeZoneSameAsNormal();
    }

    /**
     * Tells if the given class is or is subclass of {link java.sql.Date} or {link java.sql.Time}.
     * @param {*} dateClass
     * @return {boolean}
     * @private
     */
    static isSQLDateOrTimeClass(dateClass : any) : boolean {
        // return dateClass !== java.util.Date && (dateClass === java.sql.Date || dateClass === Time || (dateClass !== Timestamp && (java.sql.Date.isAssignableFrom(dateClass) || Time.isAssignableFrom(dateClass))));
        return false;
    }

    getTemplateDateFormatCacheArrayIndex(dateType : number, zonelessInput : boolean, sqlDTTZ : boolean) : number {
        return dateType + (zonelessInput?Environment.CACHED_TDFS_ZONELESS_INPUT_OFFS:0) + (sqlDTTZ?Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$():0);
    }

    /**
     * Returns the {link DateToISO8601CalendarFactory} used by the the "iso_" built-ins. Be careful when using this; it
     * should only by used with
     * {link DateUtil#dateToISO8601String(Date, boolean, boolean, boolean, int, TimeZone, DateToISO8601CalendarFactory)}
     * and {link DateUtil#dateToXSString(Date, boolean, boolean, boolean, int, TimeZone, DateToISO8601CalendarFactory)}
     * .
     * @return {*}
     */
    getISOBuiltInCalendarFactory() : DateUtil.DateToISO8601CalendarFactory {
        if(this.isoBuiltInCalendarFactory == null) {
            this.isoBuiltInCalendarFactory = new DateUtil.TrivialDateToISO8601CalendarFactory();
        }
        return this.isoBuiltInCalendarFactory;
    }

    getTransform(exp : Expression) : TemplateTransformModel {
        let ttm : TemplateTransformModel = null;
        let tm : TemplateModel = exp.eval(this);
        if(tm != null && ClassUtil.isAssignableFrom(tm, "freemarker.template.TemplateTransformModel")) {
            ttm = <TemplateTransformModel><any>tm;
        } else if(exp != null && exp instanceof <any>Identifier) {
            tm = this.configuration.getSharedVariable(exp.toString());
            if(tm != null && ClassUtil.isAssignableFrom(tm, "freemarker.template.TemplateTransformModel")) {
                ttm = <TemplateTransformModel><any>tm;
            }
        }
        return ttm;
    }

    /**
     * Returns the loop or macro local variable corresponding to this variable name. Possibly null. (Note that the
     * misnomer is kept for backward compatibility: loop variables are not local variables according to our
     * terminology.)
     * @param {String} name
     * @return {*}
     */
    public getLocalVariable(name : string) : TemplateModel {
        if(this.localContextStack != null) {
            for(let i : number = this.localContextStack.size() - 1; i >= 0; i--) {
                let lc : LocalContext = this.localContextStack.get(i);
                let tm : TemplateModel = lc.getLocalVariable(name);
                if(tm != null) {
                    return tm;
                }
            }
        }
        return this.currentMacroContext == null?null:this.currentMacroContext.getLocalVariable(name);
    }

    /**
     * Returns the variable that is visible in this context, or {@code null} if the variable is not found. This is the
     * correspondent to an FTL top-level variable reading expression. That is, it tries to find the the variable in this
     * order:
     * <ol>
     * <li>An loop variable (if we're in a loop or user defined directive body) such as foo_has_next
     * <li>A local variable (if we're in a macro)
     * <li>A variable defined in the current namespace (say, via &lt;#assign ...&gt;)
     * <li>A variable defined globally (say, via &lt;#global ....&gt;)
     * <li>Variable in the data model:
     * <ol>
     * <li>A variable in the root hash that was exposed to this rendering environment in the Template.process(...) call
     * <li>A shared variable set in the configuration via a call to Configuration.setSharedVariable(...)
     * </ol>
     * </li>
     * </ol>
     * @param {String} name
     * @return {*}
     */
    public getVariable(name : string) : TemplateModel {
        let result : TemplateModel = this.getLocalVariable(name);
        if(result == null) {
            result = this.currentNamespace.get$java_lang_String(name);
        }
        if(result == null) {
            result = this.getGlobalVariable(name);
        }
        return result;
    }

    /**
     * Returns the globally visible variable of the given name (or null). This is correspondent to FTL
     * <code>.globals.<i>name</i></code>. This will first look at variables that were assigned globally via: &lt;#global
     * ...&gt; and then at the data model exposed to the template.
     * @param {String} name
     * @return {*}
     */
    public getGlobalVariable(name : string) : TemplateModel {
        let result : TemplateModel = this.globalNamespace.get$java_lang_String(name);
        if(result == null) {
            result = this.rootDataModel.get(name);
        }
        if(result == null) {
            result = this.configuration.getSharedVariable(name);
        }
        return result;
    }

    /**
     * Sets a variable that is visible globally. This is correspondent to FTL
     * <code>&lt;#global <i>name</i>=<i>model</i>&gt;</code>. This can be considered a convenient shorthand for:
     * getGlobalNamespace().put(name, model)
     * @param {String} name
     * @param {*} model
     */
    public setGlobalVariable(name : string, model : TemplateModel) {
        this.globalNamespace.put$java_lang_String$java_lang_Object(name, model);
    }

    /**
     * Sets a variable in the current namespace. This is correspondent to FTL
     * <code>&lt;#assign <i>name</i>=<i>model</i>&gt;</code>. This can be considered a convenient shorthand for:
     * getCurrentNamespace().put(name, model)
     * @param {String} name
     * @param {*} model
     */
    public setVariable(name : string, model : TemplateModel) {
        this.currentNamespace.put$java_lang_String$java_lang_Object(name, model);
    }

    /**
     * Sets a local variable (one effective only during a macro invocation). This is correspondent to FTL
     * <code>&lt;#local <i>name</i>=<i>model</i>&gt;</code>.
     * 
     * @param {String} name  the identifier of the variable
     * @param {*} model the value of the variable.
     * @throws IllegalStateException if the environment is not executing a macro body.
     */
    public setLocalVariable(name : string, model : TemplateModel) {
        if(this.currentMacroContext == null) {
            throw Object.defineProperty(new Error("Not executing macro body"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        this.currentMacroContext.setLocalVar(name, model);
    }

    /**
     * Returns a set of variable names that are known at the time of call. This includes names of all shared variables
     * in the {link Configuration}, names of all global variables that were assigned during the template processing,
     * names of all variables in the current name-space, names of all local variables and loop variables. If the passed
     * root data model implements the {link TemplateHashModelEx} interface, then all names it retrieves through a call
     * to {link TemplateHashModelEx#keys()} method are returned as well. The method returns a new Set object on each
     * call that is completely disconnected from the Environment. That is, modifying the set will have no effect on the
     * Environment object.
     * @return {Set}
     */
    public getKnownVariableNames() : Array<any> {
        let set : Array<any> = this.configuration.getSharedVariableNames();
        if(this.rootDataModel != null && (this.rootDataModel["__interfaces"] != null && this.rootDataModel["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || this.rootDataModel.constructor != null && this.rootDataModel.constructor["__interfaces"] != null && this.rootDataModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0)) {
            let rootNames : TemplateModelIterator = (<TemplateHashModelEx><any>this.rootDataModel).keys().iterator();
            while((rootNames.hasNext())) {
                /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(set, (<TemplateScalarModel><any>rootNames.next()).getAsString());
            }
        }
        for(let tmi : TemplateModelIterator = this.globalNamespace.keys().iterator(); tmi.hasNext(); ) {
            /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(set, (<TemplateScalarModel><any>tmi.next()).getAsString());
        }
        for(let tmi : TemplateModelIterator = this.currentNamespace.keys().iterator(); tmi.hasNext(); ) {
            /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(set, (<TemplateScalarModel><any>tmi.next()).getAsString());
        }
        if(this.currentMacroContext != null) {
            /* addAll */((l1, l2) => l1.push.apply(l1, l2))(set, this.currentMacroContext.getLocalVariableNames());
        }
        if(this.localContextStack != null) {
            for(let i : number = this.localContextStack.size() - 1; i >= 0; i--) {
                let lc : LocalContext = this.localContextStack.get(i);
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(set, lc.getLocalVariableNames());
            }
        }
        return set;
    }

    /**
     * Prints the current FTL stack trace. Useful for debugging. {link TemplateException}s incorporate this information
     * in their stack traces.
     * @param {PrintWriter} pw
     */
    public outputInstructionStack(pw : PrintWriter) {
        Environment.outputInstructionStack(this.getInstructionStackSnapshot(), false, pw);
        pw.flush();
    }

    static TERSE_MODE_INSTRUCTION_STACK_TRACE_LIMIT : number = 10;

    /**
     * Prints an FTL stack trace based on a stack trace snapshot.
     * 
     * @param {Writer} w If it's a {link PrintWriter}, {link PrintWriter#println()} will be used for line-breaks.
     * see #getInstructionStackSnapshot()
     * @since 2.3.21
     * @param {Array} instructionStackSnapshot
     * @param {boolean} terseMode
     */
    static outputInstructionStack(instructionStackSnapshot : TemplateElement[], terseMode : boolean, w : Writer) {
        let pw : PrintWriter = <PrintWriter>((w != null && w instanceof <any>PrintWriter)?w:null);
        try {
            if(instructionStackSnapshot != null) {
                let totalFrames : number = instructionStackSnapshot.length;
                let framesToPrint : number = terseMode?(totalFrames <= Environment.TERSE_MODE_INSTRUCTION_STACK_TRACE_LIMIT?totalFrames:Environment.TERSE_MODE_INSTRUCTION_STACK_TRACE_LIMIT - 1):totalFrames;
                let hideNestringRelatedFrames : boolean = terseMode && framesToPrint < totalFrames;
                let nestingRelatedFramesHidden : number = 0;
                let trailingFramesHidden : number = 0;
                let framesPrinted : number = 0;
                for(let frameIdx : number = 0; frameIdx < totalFrames; frameIdx++) {
                    let stackEl : TemplateElement = instructionStackSnapshot[frameIdx];
                    let nestingRelatedElement : boolean = (frameIdx > 0 && (stackEl != null && stackEl instanceof <any>BodyInstruction)) || (frameIdx > 1 && (instructionStackSnapshot[frameIdx - 1] != null && instructionStackSnapshot[frameIdx - 1] instanceof <any>BodyInstruction));
                    if(framesPrinted < framesToPrint) {
                        if(!nestingRelatedElement || !hideNestringRelatedFrames) {
                            w.write(frameIdx === 0?"\t- Failed at: ":(nestingRelatedElement?"\t~ Reached through: ":"\t- Reached through: "));
                            w.write(Environment.instructionStackItemToString(stackEl));
                            if(pw != null) pw.println(); else w.write('\n');
                            framesPrinted++;
                        } else {
                            nestingRelatedFramesHidden++;
                        }
                    } else {
                        trailingFramesHidden++;
                    }
                }
                let hadClosingNotes : boolean = false;
                if(trailingFramesHidden > 0) {
                    w.write("\t... (Had ");
                    w.write(/* valueOf */new String(trailingFramesHidden + nestingRelatedFramesHidden).toString());
                    w.write(" more, hidden for tersenes)");
                    hadClosingNotes = true;
                }
                if(nestingRelatedFramesHidden > 0) {
                    if(hadClosingNotes) {
                        w.write(' ');
                    } else {
                        w.write('\t');
                    }
                    w.write("(Hidden " + nestingRelatedFramesHidden + " \"~\" lines for terseness)");
                    if(pw != null) pw.println(); else w.write('\n');
                    hadClosingNotes = true;
                }
                if(hadClosingNotes) {
                    if(pw != null) pw.println(); else w.write('\n');
                }
            } else {
                w.write("(The stack was empty)");
                if(pw != null) pw.println(); else w.write('\n');
            }
        } catch(e) {
            Environment.LOG_$LI$().error$java_lang_String$java_lang_Throwable("Failed to print FTL stack trace", e);
        }
    }

    /**
     * Returns the snapshot of what would be printed as FTL stack trace.
     * 
     * @since 2.3.20
     * @return {Array}
     */
    getInstructionStackSnapshot() : TemplateElement[] {
        let requiredLength : number = 0;
        let ln : number = this.instructionStackSize;
        for(let i : number = 0; i < ln; i++) {
            let stackEl : TemplateElement = this.instructionStack[i];
            if(i === ln - 1 || stackEl.isShownInStackTrace()) {
                requiredLength++;
            }
        }
        if(requiredLength === 0) return null;
        let result : TemplateElement[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(requiredLength);
        let dstIdx : number = requiredLength - 1;
        for(let i : number = 0; i < ln; i++) {
            let stackEl : TemplateElement = this.instructionStack[i];
            if(i === ln - 1 || stackEl.isShownInStackTrace()) {
                result[dstIdx--] = stackEl;
            }
        }
        return result;
    }

    static instructionStackItemToString(stackEl : TemplateElement) : string {
        let sb : StringBuilder = new StringBuilder("");
        Environment.appendInstructionStackItem(stackEl, sb);
        return sb.toString();
    }

    static appendInstructionStackItem(stackEl : TemplateElement, sb : StringBuilder) {
        sb.append(_MessageUtil.shorten(stackEl.getDescription(), 40));
        sb.append("  [");
        let enclosingMacro : Macro = Environment.getEnclosingMacro(stackEl);
        if(enclosingMacro != null) {
            sb.append(_MessageUtil.formatLocationForEvaluationError$freemarker_core_Macro$int$int(enclosingMacro, stackEl.beginLine, stackEl.beginColumn));
        } else {
            sb.append(_MessageUtil.formatLocationForEvaluationError$freemarker_template_Template$int$int(stackEl.getTemplate(), stackEl.beginLine, stackEl.beginColumn));
        }
        sb.append("]");
    }

    static getEnclosingMacro(stackEl : TemplateElement) : Macro {
        while((stackEl != null)) {
            if(stackEl != null && stackEl instanceof <any>Macro) return <Macro>stackEl;
            stackEl = stackEl.getParentElement();
        }
        return null;
    }

    pushLocalContext(localContext : LocalContext) {
        if(this.localContextStack == null) {
            this.localContextStack = new LocalContextStack();
        }
        this.localContextStack.push(localContext);
    }

    getLocalContextStack() : LocalContextStack {
        return this.localContextStack;
    }

    /**
     * Returns the name-space for the name if exists, or null.
     * 
     * @param {String} name the template path that you have used with the <code>import</code> directive or
     * {link #importLib(String, String)} call, in normalized form. That is, the path must be an absolute
     * path, and it must not contain "/../" or "/./". The leading "/" is optional.
     * @return {Environment.Namespace}
     */
    public getNamespace(name : string) : Environment.Namespace {
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(name, "/")) name = name.substring(1);
        if(this.loadedLibs != null) {
            return /* get */this.loadedLibs.get(name);
        } else {
            return null;
        }
    }

    /**
     * Returns the main namespace. This corresponds to the FTL {@code .main} hash.
     * @return {Environment.Namespace}
     */
    public getMainNamespace() : Environment.Namespace {
        return this.mainNamespace;
    }

    /**
     * Returns the current namespace. This corresponds to the FTL {@code .namespace} hash. Initially, the current name
     * space is the main namespace, but when inside an {@code #import}-ed template, it will change to the namespace of
     * that import. Note that {@code #include} doesn't affect the namespace, so if you are in an {@code #import}-ed
     * template and then from there do an {@code #include}, the current namespace will remain the namespace of the
     * {@code #import}.
     * @return {Environment.Namespace}
     */
    public getCurrentNamespace() : Environment.Namespace {
        return this.currentNamespace;
    }

    /**
     * Returns the name-space that contains the globally visible non-data-model variables (usually created with
     * {@code &lt;#global ...&gt;}).
     * @return {Environment.Namespace}
     */
    public getGlobalNamespace() : Environment.Namespace {
        return this.globalNamespace;
    }

    /**
     * Returns a view of the data-model (also known as the template context in some other template engines)
     * that falls back to {linkplain Configuration#setSharedVariable(String, TemplateModel) shared variables}.
     * @return {*}
     */
    public getDataModel() : TemplateHashModel {
        return (this.rootDataModel != null && (this.rootDataModel["__interfaces"] != null && this.rootDataModel["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || this.rootDataModel.constructor != null && this.rootDataModel.constructor["__interfaces"] != null && this.rootDataModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0))?new Environment.Environment$1(this):new Environment.Environment$2(this);
    }

    /**
     * Returns the read-only hash of globally visible variables. This is the correspondent of FTL <code>.globals</code>
     * hash. That is, you see the variables created with <code>&lt;#global ...&gt;</code>, and the variables of the
     * data-model. To create new global variables, use {link #setGlobalVariable setGlobalVariable}.
     * @return {*}
     */
    public getGlobalVariables() : TemplateHashModel {
        return new Environment.Environment$3(this);
    }

    pushElement(element : TemplateElement) {
        let newSize : number = ++this.instructionStackSize;
        let instructionStack : TemplateElement[] = this.instructionStack;
        if(newSize > instructionStack.length) {
            let newInstructionStack : TemplateElement[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(newSize * 2);
            for(let i : number = 0; i < instructionStack.length; i++) {
                newInstructionStack[i] = instructionStack[i];
            }
            instructionStack = newInstructionStack;
            this.instructionStack = instructionStack;
        }
        instructionStack[newSize - 1] = element;
    }

    popElement() {
        this.instructionStackSize--;
    }

    replaceElementStackTop(instr : TemplateElement) {
        this.instructionStack[this.instructionStackSize - 1] = instr;
    }

    public getCurrentVisitorNode() : TemplateNodeModel {
        return this.currentVisitorNode;
    }

    /**
     * sets TemplateNodeModel as the current visitor node. <tt>.current_node</tt>
     * @param {*} node
     */
    public setCurrentVisitorNode(node : TemplateNodeModel) {
        this.currentVisitorNode = node;
    }

    getNodeProcessor$freemarker_template_TemplateNodeModel(node : TemplateNodeModel) : TemplateModel {
        let nodeName : string = node.getNodeName();
        if(nodeName == null) {
            throw new _MiscTemplateException(this, "Node name is null.");
        }
        let result : TemplateModel = this.getNodeProcessor$java_lang_String$java_lang_String$int(nodeName, node.getNodeNamespace(), 0);
        if(result == null) {
            let type : string = node.getNodeType();
            if(type == null) {
                type = "default";
            }
            result = this.getNodeProcessor$java_lang_String$java_lang_String$int("@" + type, null, 0);
        }
        return result;
    }

    getNodeProcessor$java_lang_String$java_lang_String$int(nodeName : string, nsURI : string, startIndex : number) : TemplateModel {
        let result : TemplateModel = null;
        let i : number;
        let size : number = this.nodeNamespaces.size();
        for(i = startIndex; i < size; i++) {
            let ns : Environment.Namespace = null;
            try {
                ns = <Environment.Namespace><any>this.nodeNamespaces.get(i);
            } catch(cce) {
                throw new _MiscTemplateException(this, "A \"using\" clause should contain a sequence of namespaces or strings that indicate the location of importable macro libraries.");
            }
            result = this.getNodeProcessor$freemarker_core_Environment_Namespace$java_lang_String$java_lang_String(ns, nodeName, nsURI);
            if(result != null) break;
        }
        if(result != null) {
            this.nodeNamespaceIndex = i + 1;
            this.currentNodeName = nodeName;
            this.currentNodeNS = nsURI;
        }
        return result;
    }

    public getNodeProcessor$freemarker_core_Environment_Namespace$java_lang_String$java_lang_String(ns : Environment.Namespace, localName : string, nsURI : string) : TemplateModel {
        let result : TemplateModel = null;
        if(nsURI == null) {
            result = ns.get$java_lang_String(localName);
            if(!(result != null && result instanceof <any>Macro) && !(result != null && (result["__interfaces"] != null && result["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || result.constructor != null && result.constructor["__interfaces"] != null && result.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0))) {
                result = null;
            }
        } else {
            let template : Template = ns.getTemplate();
            let prefix : string = template.getPrefixForNamespace(nsURI);
            if(prefix == null) {
                return null;
            }
            if(prefix.length > 0) {
                result = ns.get$java_lang_String(prefix + ":" + localName);
                if(!(result != null && result instanceof <any>Macro) && !(result != null && (result["__interfaces"] != null && result["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || result.constructor != null && result.constructor["__interfaces"] != null && result.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0))) {
                    result = null;
                }
            } else {
                if(nsURI.length === 0) {
                    result = ns.get$java_lang_String(Template.NO_NS_PREFIX + ":" + localName);
                    if(!(result != null && result instanceof <any>Macro) && !(result != null && (result["__interfaces"] != null && result["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || result.constructor != null && result.constructor["__interfaces"] != null && result.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0))) {
                        result = null;
                    }
                }
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nsURI,template.getDefaultNS()))) {
                    result = ns.get$java_lang_String(Template.DEFAULT_NAMESPACE_PREFIX + ":" + localName);
                    if(!(result != null && result instanceof <any>Macro) && !(result != null && (result["__interfaces"] != null && result["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || result.constructor != null && result.constructor["__interfaces"] != null && result.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0))) {
                        result = null;
                    }
                }
                if(result == null) {
                    result = ns.get$java_lang_String(localName);
                    if(!(result != null && result instanceof <any>Macro) && !(result != null && (result["__interfaces"] != null && result["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || result.constructor != null && result.constructor["__interfaces"] != null && result.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0))) {
                        result = null;
                    }
                }
            }
        }
        return result;
    }

    public getNodeProcessor(ns? : any, localName? : any, nsURI? : any) : any {
        if(((ClassUtil.isInstanceOf(ns, 'freemarker.core.Environment.Namespace')) || ns === null) && ((typeof localName === 'string') || localName === null) && ((typeof nsURI === 'string') || nsURI === null)) {
            return <any>this.getNodeProcessor$freemarker_core_Environment_Namespace$java_lang_String$java_lang_String(ns, localName, nsURI);
        } else if(((typeof ns === 'string') || ns === null) && ((typeof localName === 'string') || localName === null) && ((typeof nsURI === 'number') || nsURI === null)) {
            return <any>this.getNodeProcessor$java_lang_String$java_lang_String$int(ns, localName, nsURI);
        } else if(((ns != null && (ns["__interfaces"] != null && ns["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0 || ns.constructor != null && ns.constructor["__interfaces"] != null && ns.constructor["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0)) || ns === null) && localName === undefined && nsURI === undefined) {
            return <any>this.getNodeProcessor$freemarker_template_TemplateNodeModel(ns);
        } else throw new Error('invalid overload');
    }

    public include$java_lang_String$java_lang_String$boolean(name : string, encoding : string, parse : boolean) {
        this.include$freemarker_template_Template(this.getTemplateForInclusion(name, encoding, parse));
    }

    /**
     * Emulates <code>include</code> directive, except that <code>name</code> must be template root relative.
     * <p>
     * <p>
     * It's the same as <code>include(getTemplateForInclusion(name, encoding, parse))</code>. But, you may want to
     * separately call these two methods, so you can determine the source of exceptions more precisely, and thus achieve
     * more intelligent error handling.
     * <p>
     * see #getTemplateForInclusion(String name, String encoding, boolean parse)
     * see #include(Template includedTemplate)
     * @param {String} name
     * @param {String} encoding
     * @param {boolean} parse
     */
    public include(name? : any, encoding? : any, parse? : any) : any {
        if(((typeof name === 'string') || name === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof parse === 'boolean') || parse === null)) {
            return <any>this.include$java_lang_String$java_lang_String$boolean(name, encoding, parse);
        } else if(((name != null && name instanceof <any>Template) || name === null) && encoding === undefined && parse === undefined) {
            return <any>this.include$freemarker_template_Template(name);
        } else throw new Error('invalid overload');
    }

    public getTemplateForInclusion(name : string, encoding : string, parseAsFTL : boolean, ignoreMissing : boolean = false) : Template {
        return this.configuration.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, this.getLocale(), this.getIncludedTemplateCustomLookupCondition(), encoding != null?encoding:this.getIncludedTemplateEncoding(), parseAsFTL, ignoreMissing);
    }

    getIncludedTemplateCustomLookupCondition() : any {
        return this.getTemplate().getCustomLookupCondition();
    }

    getIncludedTemplateEncoding() : string {
        let encoding : string;
        encoding = this.getTemplate().getEncoding();
        if(encoding == null) {
            encoding = this.configuration.getEncoding(this.getLocale());
        }
        return encoding;
    }

    public include$freemarker_template_Template(includedTemplate : Template) {
        let prevTemplate : Template;
        let parentReplacementOn : boolean = this.isBeforeIcI2322();
        prevTemplate = this.getTemplate();
        if(parentReplacementOn) {
            this.setParent(includedTemplate);
        } else {
            this.legacyParent = includedTemplate;
        }
        this.importMacros(includedTemplate);
        try {
            this.visit$freemarker_core_TemplateElement(includedTemplate.getRootTreeNode());
        } finally {
            if(parentReplacementOn) {
                this.setParent(prevTemplate);
            } else {
                this.legacyParent = prevTemplate;
            }
        }
    }

    public importLib$java_lang_String$java_lang_String(templateName : string, targetNsVarName : string) : Environment.Namespace {
        return this.importLib$java_lang_String$java_lang_String$boolean(templateName, targetNsVarName, this.getLazyImports());
    }

    public importLib$freemarker_template_Template$java_lang_String(loadedTemplate : Template, targetNsVarName : string) : Environment.Namespace {
        return this.importLib$java_lang_String$freemarker_template_Template$java_lang_String(null, loadedTemplate, targetNsVarName);
    }

    public importLib$java_lang_String$java_lang_String$boolean(templateName : string, targetNsVarName : string, lazy : boolean) : Environment.Namespace {
        return lazy?this.importLib$java_lang_String$freemarker_template_Template$java_lang_String(templateName, null, targetNsVarName):this.importLib$java_lang_String$freemarker_template_Template$java_lang_String(null, this.getTemplateForImporting(templateName), targetNsVarName);
    }

    /**
     * Gets a template for importing; used with {link #importLib(Template importedTemplate, String namespace)}. The
     * advantage over simply using <code>config.getTemplate(...)</code> is that it chooses the encoding as the
     * <code>import</code> directive does.
     * 
     * @param {String} name the name of the template, relatively to the template root directory (not the to the directory of the
     * currently executing template file!). (Note that you can use
     * {link freemarker.cache.TemplateCache#getFullTemplatePath} to convert paths to template root relative
     * paths.)
     * @return {Template}
     */
    public getTemplateForImporting(name : string) : Template {
        return this.getTemplateForInclusion(name, null, true);
    }

    public importLib$java_lang_String$freemarker_template_Template$java_lang_String(templateName : string, loadedTemplate : Template, targetNsVarName : string) : Environment.Namespace {
        let lazyImport : boolean;
        if(loadedTemplate != null) {
            lazyImport = false;
            templateName = loadedTemplate.getName();
        } else {
            lazyImport = true;
            let tnf : TemplateNameFormat = this.getConfiguration().getTemplateNameFormat();
            templateName = _CacheAPI.normalizeRootBasedName(tnf, templateName);
        }
        if(this.loadedLibs == null) {
            this.loadedLibs = <any>(new Map<any, any>());
        }
        let existingNamespace : Environment.Namespace = /* get */this.loadedLibs.get(templateName);
        if(existingNamespace != null) {
            if(targetNsVarName != null) {
                this.setVariable(targetNsVarName, existingNamespace);
                if(this.isIcI2324OrLater() && this.currentNamespace === this.mainNamespace) {
                    this.globalNamespace.put$java_lang_String$java_lang_Object(targetNsVarName, existingNamespace);
                }
            }
            if(!lazyImport && (ClassUtil.isInstanceOf(existingNamespace, 'freemarker.core.Environment.LazilyInitializedNamespace'))) {
                (</*Environment.LazilyInitializedNamespace*/any>existingNamespace).ensureInitializedTME();
            }
        } else {
            let newNamespace : /*Environment.Namespace*/any = lazyImport?new Environment.LazilyInitializedNamespace(this, templateName):new Environment.Namespace(this, loadedTemplate);
            /* put */this.loadedLibs.set(templateName, newNamespace);
            if(targetNsVarName != null) {
                this.setVariable(targetNsVarName, newNamespace);
                if(this.currentNamespace === this.mainNamespace) {
                    this.globalNamespace.put$java_lang_String$java_lang_Object(targetNsVarName, newNamespace);
                }
            }
            if(!lazyImport) {
                this.initializeImportLibNamespace(newNamespace, loadedTemplate);
            }
        }
        return /* get */this.loadedLibs.get(templateName);
    }

    /**
     * @param {String} templateName   Ignored if {@code loadedTemaplate} is set (so we do eager import), otherwise it can't be {@code null}.
     * Assumed to be template root directory relative (not relative to the current template).
     * @param {Template} loadedTemplate {@code null} exactly if we want a lazy import
     * @param {String} targetNsVarName
     * @return {Environment.Namespace}
     * @private
     */
    public importLib(templateName? : any, loadedTemplate? : any, targetNsVarName? : any) : any {
        if(((typeof templateName === 'string') || templateName === null) && ((loadedTemplate != null && loadedTemplate instanceof <any>Template) || loadedTemplate === null) && ((typeof targetNsVarName === 'string') || targetNsVarName === null)) {
            return <any>this.importLib$java_lang_String$freemarker_template_Template$java_lang_String(templateName, loadedTemplate, targetNsVarName);
        } else if(((typeof templateName === 'string') || templateName === null) && ((typeof loadedTemplate === 'string') || loadedTemplate === null) && ((typeof targetNsVarName === 'boolean') || targetNsVarName === null)) {
            return <any>this.importLib$java_lang_String$java_lang_String$boolean(templateName, loadedTemplate, targetNsVarName);
        } else if(((typeof templateName === 'string') || templateName === null) && ((typeof loadedTemplate === 'string') || loadedTemplate === null) && targetNsVarName === undefined) {
            return <any>this.importLib$java_lang_String$java_lang_String(templateName, loadedTemplate);
        } else if(((templateName != null && templateName instanceof <any>Template) || templateName === null) && ((typeof loadedTemplate === 'string') || loadedTemplate === null) && targetNsVarName === undefined) {
            return <any>this.importLib$freemarker_template_Template$java_lang_String(templateName, loadedTemplate);
        } else throw new Error('invalid overload');
    }

    initializeImportLibNamespace(newNamespace : Environment.Namespace, loadedTemplate : Template) {
        let prevNamespace : Environment.Namespace = this.currentNamespace;
        this.currentNamespace = newNamespace;
        let prevOut : Writer = this.out;
        this.out = NullWriter.INSTANCE_$LI$();
        try {
            this.include$freemarker_template_Template(loadedTemplate);
        } finally {
            this.out = prevOut;
            this.currentNamespace = prevNamespace;
        }
    }

    /**
     * Resolves a reference to a template (like the one used in {@code #include} or {@code #import}), assuming a base
     * name. This gives a root based, even if non-normalized and possibly non-absolute (but then relative to the root)
     * template name, that could be used for {link Configuration#getTemplate(String)}. This is mostly used when a
     * template refers to another template.
     * <p>
     * If you need to guarantee that the result is also an absolute path, then apply
     * {link #rootBasedToAbsoluteTemplateName(String)} on it.
     * 
     * @param {String} baseName   The name to which relative {@code targetName}-s are relative to. Maybe {@code null} (happens when
     * resolving names in nameless templates), which means that the base is the root "directory", and so the
     * {@code targetName} is returned without change. Assuming {link TemplateNameFormat#DEFAULT_2_3_0} or
     * {link TemplateNameFormat#DEFAULT_2_4_0}, the rules are as follows. If you want to specify a base
     * directory here, it must end with {@code "/"}. If it doesn't end with {@code "/"}, it's parent
     * directory will be used as the base path. Might starts with a scheme part (like {@code "foo://"}, or
     * with {link TemplateNameFormat#DEFAULT_2_4_0} even just with {@code "foo:"}).
     * @param {String} targetName The name of the template, which is either a relative or absolute name. Assuming
     * {link TemplateNameFormat#DEFAULT_2_3_0} or {link TemplateNameFormat#DEFAULT_2_4_0}, the rules are as
     * follows. If it starts with {@code "/"} or contains a scheme part separator ({@code "://"}, also, with
     * {link TemplateNameFormat#DEFAULT_2_4_0} a {@code ":"} with no {@code "/"} anywhere before it) then
     * it's an absolute name, otherwise it's a relative path. Relative paths are interpreted relatively to
     * the {@code baseName}. Absolute names are simply returned as is, ignoring the {@code baseName}, except,
     * when the {@code baseName} has scheme part while the {@code targetName} doesn't have, then the schema
     * of the {@code baseName} is prepended to the {@code targetName}.
     * @since 2.3.22
     * @return {String}
     */
    public toFullTemplateName(baseName : string, targetName : string) : string {
        if(this.isClassicCompatible() || baseName == null) {
            return targetName;
        }
        return _CacheAPI.toRootBasedName(this.configuration.getTemplateNameFormat(), baseName, targetName);
    }

    /**
     * Converts a root based name (a name that's either relative to the root, or is absolute), which are typically used
     * by the API (such as for {link Configuration#getTemplate(String)}), to an absolute name, which can be safely
     * passed to {@code <#include path>} and such, as it won't be misinterpreted to be relative to the directory of the
     * template. For example, {@code "foo/bar.ftl"} is converted to {@code "/foo/bar.ftl"}, while {@code "/foo/bar"} or
     * {@code "foo://bar/baz"} remains as is, as they are already absolute names (see {link TemplateNameFormat} for
     * more about the format of names).
     * <p>
     * <p>
     * You only need this if the template name will be passed to {@code <#include name>}, {@code <#import name>},
     * {@code .get_optional_template(name)} or a similar construct in a template, otherwise using non-absolute root
     * based names is fine.
     * 
     * @since 2.3.28
     * @param {String} rootBasedName
     * @return {String}
     */
    public rootBasedToAbsoluteTemplateName(rootBasedName : string) : string {
        return _CacheAPI.rootBasedNameToAbsoluteName(this.configuration.getTemplateNameFormat(), rootBasedName);
    }

    renderElementToString(te : TemplateElement) : string {
        let prevOut : Writer = this.out;
        try {
            let sw : StringWriter = new StringWriter();
            this.out = sw;
            this.visit$freemarker_core_TemplateElement(te);
            return sw.toString();
        } finally {
            this.out = prevOut;
        }
    }

    importMacros(template : Template) {
        template.getMacros().values().forEach(item => {
            this.visitMacroDef(<Macro>item);
        });
        // for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>template.getMacros())); it.hasNext(); ) {
        //     this.visitMacroDef(<Macro>it.next());
        // }
    }

    /**
     * @return {String} the namespace URI registered for this prefix, or null. This is based on the mappings registered in the
     * current namespace.
     * @param {String} prefix
     */
    public getNamespaceForPrefix(prefix : string) : string {
        return this.currentNamespace.getTemplate().getNamespaceForPrefix(prefix);
    }

    public getPrefixForNamespace(nsURI : string) : string {
        return this.currentNamespace.getTemplate().getPrefixForNamespace(nsURI);
    }

    /**
     * @return {String} the default node namespace for the current FTL namespace
     */
    public getDefaultNS() : string {
        return this.currentNamespace.getTemplate().getDefaultNS();
    }

    /**
     * A hook that Jython uses.
     * @param {String} key
     * @return {Object}
     */
    public __getitem__(key : string) : any {
        return BeansWrapper.getDefaultInstance().unwrap$freemarker_template_TemplateModel(this.getVariable(key));
    }

    /**
     * A hook that Jython uses.
     * @param {String} key
     * @param {Object} o
     */
    public __setitem__(key : string, o : any) {
        this.setGlobalVariable(key, this.getObjectWrapper()['wrap$java_lang_Object'](o));
    }

    /*private*/ customStateVariables : IdentityHashMap;

    /**
     * Returns the value of a custom state variable, or {@code null} if it's missing; see
     * {link #setCustomState(Object, Object)} for more.
     * 
     * @since 2.3.24
     * @param {Object} identityKey
     * @return {Object}
     */
    public getCustomState(identityKey : any) : any {
        if(this.customStateVariables == null) {
            return null;
        }
        return this.customStateVariables.get(identityKey);
    }

    /**
     * Sets the value of a custom state variable. Custom state variables meant to be used by
     * {link TemplateNumberFormatFactory}-es, {link TemplateDateFormatFactory}-es, and similar user-implementable,
     * pluggable objects, which want to maintain an {link Environment}-scoped state (such as a cache).
     * 
     * @param {Object} identityKey The key that identifies the variable, by its object identity (not by {link Object#equals(Object)}).
     * This should be something like a {@code private static final Object CUSTOM_STATE_KEY = new Object();}
     * in the class that needs this state variable.
     * @param {Object} value       The value of the variable. Can be anything, even {@code null}.
     * @return {Object} The previous value of the variable, or {@code null} if the variable didn't exist.
     * @since 2.3.24
     */
    public setCustomState(identityKey : any, value : any) : any {
        let customStateVariables : IdentityHashMap = this.customStateVariables;
        if(customStateVariables == null) {
            customStateVariables = <any>(new IdentityHashMap());
            this.customStateVariables = customStateVariables;
        }
        return customStateVariables.put(identityKey, value);
    }

    static EMPTY_BODY_WRITER : Writer; public static EMPTY_BODY_WRITER_$LI$() : Writer { Environment.__static_initialize(); if(Environment.EMPTY_BODY_WRITER == null) Environment.EMPTY_BODY_WRITER = new Environment.EmptyBodyWriter(); return Environment.EMPTY_BODY_WRITER; };

    isBeforeIcI2322() : boolean {
        return this.configuration.getIncompatibleImprovements().intValue() < /*_TemplateAPI.VERSION_INT_2_3_22_$LI$()*/2003022;
    }

    isIcI2324OrLater() : boolean {
        return this.configuration.getIncompatibleImprovements().intValue() >= /*_TemplateAPI.VERSION_INT_2_3_24_$LI$()*/2003024;
    }

    /**
     * See {link #setFastInvalidReferenceExceptions(boolean)}.
     * @return {boolean}
     */
    getFastInvalidReferenceExceptions() : boolean {
        return this.fastInvalidReferenceExceptions;
    }

    /**
     * Sets if for invalid references {link InvalidReferenceException#FAST_INSTANCE} should be thrown, or a new
     * {link InvalidReferenceException}. The "fast" instance is used if we know that the error will be handled so that
     * its message will not be logged or shown anywhere.
     * @param {boolean} b
     * @return {boolean}
     */
    setFastInvalidReferenceExceptions(b : boolean) : boolean {
        let res : boolean = this.fastInvalidReferenceExceptions;
        this.fastInvalidReferenceExceptions = b;
        return res;
    }
}
Environment["__class"] = "freemarker.core.Environment";


export namespace Environment {

    export class NestedElementTemplateDirectiveBody implements TemplateDirectiveBody {
        public __parent: any;
        childBuffer : TemplateElement[];

        constructor(__parent: any, childBuffer : TemplateElement[]) {
            this.__parent = __parent;
            if(this.childBuffer===undefined) this.childBuffer = null;
            this.childBuffer = childBuffer;
        }

        public render(newOut : Writer) {
            let prevOut : Writer = this.__parent.out;
            this.__parent.out = newOut;
            try {
                this.__parent.visit(this.childBuffer);
            } finally {
                this.__parent.out = prevOut;
            }
        }

        getChildrenBuffer() : TemplateElement[] {
            return this.childBuffer;
        }
    }
    NestedElementTemplateDirectiveBody["__class"] = "freemarker.core.Environment.NestedElementTemplateDirectiveBody";
    NestedElementTemplateDirectiveBody["__interfaces"] = ["freemarker.template.TemplateDirectiveBody"];



    export class Namespace extends SimpleHash {
        public __parent: Environment;
        template : Template;

        public constructor(__parent: Environment, template? : any) {
            if(((template != null && template instanceof <any>Template) || template === null)) {
                let __args = Array.prototype.slice.call(arguments, [1]);
                super();
                if(this.template===undefined) this.template = null;
                this.__parent = __parent;
                if(this.template===undefined) this.template = null;
                (() => {
                    this.template = template;
                })();
            } else if(template === undefined) {
                let __args = Array.prototype.slice.call(arguments, [1]);
                super();
                if(this.template===undefined) this.template = null;
                this.__parent = __parent;
                if(this.template===undefined) this.template = null;
                (() => {
                    this.template = this.getTemplate();
                })();
            } else throw new Error('invalid overload');
        }

        /**
         * @return {Template} the Template object with which this Namespace is associated.
         */
        public getTemplate() : Template {
            return this.template == null?this.__parent.getTemplate():this.template;
        }

        setTemplate(template : Template) {
            this.template = template;
        }
    }
    Namespace["__class"] = "freemarker.core.Environment.Namespace";
    Namespace["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","java.io.Serializable"];



    export enum InitializationStatus {
        UNINITIALIZED, INITIALIZING, INITIALIZED, FAILED
    }

    export class LazilyInitializedNamespace extends Environment.Namespace {
        public __parent: any;
        templateName : string;

        locale : Locale;

        encoding : string;

        customLookupCondition : any;

        status : Environment.InitializationStatus;

        constructor(__parent: any, templateName : string) {
            super(__parent, null);
            this.__parent = __parent;
            if(this.templateName===undefined) this.templateName = null;
            if(this.locale===undefined) this.locale = null;
            if(this.encoding===undefined) this.encoding = null;
            if(this.customLookupCondition===undefined) this.customLookupCondition = null;
            this.status = Environment.InitializationStatus.UNINITIALIZED;
            this.templateName = templateName;
            this.locale = __parent.getLocale();
            this.encoding = __parent.getIncludedTemplateEncoding();
            this.customLookupCondition = __parent.getIncludedTemplateCustomLookupCondition();
        }

        ensureInitializedTME() {
            if(this.status !== Environment.InitializationStatus.INITIALIZED && this.status !== Environment.InitializationStatus.INITIALIZING) {
                if(this.status === Environment.InitializationStatus.FAILED) {
                    throw new TemplateModelException("Lazy initialization of the imported namespace for " + StringUtil.jQuote$java_lang_Object(this.templateName) + " has already failed earlier; won\'t retry it.");
                }
                try {
                    this.status = Environment.InitializationStatus.INITIALIZING;
                    this.initialize();
                    this.status = Environment.InitializationStatus.INITIALIZED;
                } catch(e) {
                    throw new TemplateModelException("Lazy initialization of the imported namespace for " + StringUtil.jQuote$java_lang_Object(this.templateName) + " has failed; see cause exception", e);
                } finally {
                    if(this.status !== Environment.InitializationStatus.INITIALIZED) {
                        this.status = Environment.InitializationStatus.FAILED;
                    }
                }
            }
        }

        ensureInitializedRTE() {
            try {
                this.ensureInitializedTME();
            } catch(e) {
                throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        initialize() {
            this.setTemplate(this.__parent.configuration.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(this.templateName, this.locale, this.customLookupCondition, this.encoding, true, false));
            let lastLocale : string = this.__parent.getLocale();
            try {
                this.__parent.setLocale(this.locale);
                this.__parent.initializeImportLibNamespace(this, this.getTemplate());
            } finally {
                this.__parent.setLocale(lastLocale);
            }
        }

        /**
         * 
         * @param {Map} map
         * @return {Map}
         */
        copyMap(map : Map<any, any>) : Map<any, any> {
            this.ensureInitializedRTE();
            return super.copyMap(map);
        }

        /**
         * 
         * @return {Template}
         */
        public getTemplate() : Template {
            this.ensureInitializedRTE();
            return super.getTemplate();
        }

        public put$java_lang_String$java_lang_Object(key : string, value : any) {
            this.ensureInitializedRTE();
            super.put$java_lang_String$java_lang_Object(key, value);
        }

        public put$java_lang_String$boolean(key : string, b : boolean) {
            this.ensureInitializedRTE();
            super.put$java_lang_String$java_lang_Object(key, b);
        }

        /**
         * 
         * @param {String} key
         * @param {boolean} b
         */
        public put(key? : any, b? : any) : any {
            if(((typeof key === 'string') || key === null) && ((typeof b === 'boolean') || b === null)) {
                return <any>this.put$java_lang_String$boolean(key, b);
            } else if(((typeof key === 'string') || key === null) && ((b != null) || b === null)) {
                return <any>this.put$java_lang_String$java_lang_Object(key, b);
            } else throw new Error('invalid overload');
        }

        public get$java_lang_String(key : string) : TemplateModel {
            this.ensureInitializedTME();
            return super.get$java_lang_String(key);
        }

        /**
         * 
         * @param {String} key
         * @return {*}
         */
        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>this.get$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {String} key
         * @return {boolean}
         */
        public containsKey(key : string) : boolean {
            this.ensureInitializedRTE();
            return super.containsKey(key);
        }

        /**
         * 
         * @param {String} key
         */
        public remove(key : string) {
            this.ensureInitializedRTE();
            super.remove(key);
        }

        /**
         * 
         * @param {Map} m
         */
        public putAll(m : Map<any, any>) {
            this.ensureInitializedRTE();
            super.putAll(m);
        }

        /**
         * 
         * @return {Map}
         */
        public toMap() : Map<any, any> {
            this.ensureInitializedTME();
            return super.toMap();
        }

        /**
         * 
         * @return {String}
         */
        public toString() : string {
            this.ensureInitializedRTE();
            return super.toString();
        }

        /**
         * 
         * @return {number}
         */
        public size() : number {
            this.ensureInitializedRTE();
            return super.size();
        }

        /**
         * 
         * @return {boolean}
         */
        public isEmpty() : boolean {
            this.ensureInitializedRTE();
            return super.isEmpty();
        }

        /**
         * 
         * @return {*}
         */
        public keys() : TemplateCollectionModel {
            this.ensureInitializedRTE();
            return super.keys();
        }

        /**
         * 
         * @return {*}
         */
        public values() : TemplateCollectionModel {
            this.ensureInitializedRTE();
            return super.values();
        }

        /**
         * 
         * @return {*}
         */
        public keyValuePairIterator() : KeyValuePairIterator {
            this.ensureInitializedRTE();
            return super.keyValuePairIterator();
        }
    }
    LazilyInitializedNamespace["__class"] = "freemarker.core.Environment.LazilyInitializedNamespace";
    LazilyInitializedNamespace["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","java.io.Serializable"];



    export class Environment$0 implements LocalContext {
        public __parent: any;
        public getLocalVariable(name : string) : TemplateModel {
            let index : number = this.bodyParameterNames.indexOf(name);
            return index !== -1?this.outArgs[index]:null;
        }

        public getLocalVariableNames() : Array<any> {
            return this.bodyParameterNames;
        }

        constructor(__parent: any, private bodyParameterNames: any, private outArgs: any) {
            this.__parent = __parent;
        }
    }
    Environment$0["__interfaces"] = ["freemarker.core.LocalContext"];



    export class Environment$1 implements TemplateHashModelEx {
        public __parent: any;
        public isEmpty() : boolean {
            return false;
        }

        public get$java_lang_String(key : string) : TemplateModel {
            let value : TemplateModel = this.__parent.rootDataModel.get(key);
            return value != null?value:this.__parent.configuration.getSharedVariable(key);
        }

        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>this.get$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        public values() : TemplateCollectionModel {
            return (<TemplateHashModelEx><any>this.__parent.rootDataModel).values();
        }

        public keys() : TemplateCollectionModel {
            return (<TemplateHashModelEx><any>this.__parent.rootDataModel).keys();
        }

        public size() : number {
            return (<TemplateHashModelEx><any>this.__parent.rootDataModel).size();
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Environment$1["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel"];



    export class Environment$2 implements TemplateHashModel {
        public __parent: any;
        public isEmpty() : boolean {
            return false;
        }

        public get$java_lang_String(key : string) : TemplateModel {
            let value : TemplateModel = this.__parent.rootDataModel.get(key);
            return value != null?value:this.__parent.configuration.getSharedVariable(key);
        }

        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>this.get$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Environment$2["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];



    export class Environment$3 implements TemplateHashModel {
        public __parent: any;
        public isEmpty() : boolean {
            return false;
        }

        public get$java_lang_String(key : string) : TemplateModel {
            let result : TemplateModel = this.__parent.globalNamespace.get$java_lang_String(key);
            if(result == null) {
                result = this.__parent.rootDataModel.get(key);
            }
            if(result == null) {
                result = this.__parent.configuration.getSharedVariable(key);
            }
            return result;
        }

        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>this.get$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    Environment$3["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];



    export class EmptyBodyWriter extends Writer{
        /**
         * 
         * @param {Array} cbuf
         * @param {number} off
         * @param {number} len
         */
        public write(cbuf : string[], off : number, len : number) {
            if(len > 0) {
                throw Object.defineProperty(new Error("This transform does not allow nested content."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.io.IOException','java.lang.Object','java.lang.Exception'] });
            }
        }

        /**
         * 
         */
        public flush() {
        }

        /**
         * 
         */
        public close() {
        }

        constructor() {
            super();
        }
    }
    EmptyBodyWriter["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];


}





Environment.EMPTY_BODY_WRITER_$LI$();

Environment.NO_OUT_ARGS_$LI$();

Environment.CACHED_TDFS_LENGTH_$LI$();

Environment.CACHED_TDFS_SQL_D_T_TZ_OFFS_$LI$();

// Environment.C_NUMBER_FORMAT_$LI$();

Environment.ATTEMPT_LOGGER_$LI$();

Environment.LOG_$LI$();

// Environment.threadEnv_$LI$();

Environment.__static_initialize();
