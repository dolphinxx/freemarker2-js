/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../template/Configuration';
import {SimpleScalar} from '../template/SimpleScalar';
import {Template} from '../template/Template';
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateCollectionModel} from '../template/TemplateCollectionModel';
import {TemplateHashModelEx} from '../template/TemplateHashModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelIterator} from '../template/TemplateModelIterator';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {Version} from '../template/Version';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {ClassUtil} from '../template/utility/ClassUtil';
import {CollectionUtils} from '../template/utility/CollectionUtils';
import {DeepUnwrap} from '../template/utility/DeepUnwrap';
import {NullArgumentException} from '../template/utility/NullArgumentException';
import {StringUtil} from '../template/utility/StringUtil';
import {Reader} from '../../java/io/Reader';
import {StringReader} from '../../java/io/StringReader';
import {FMParserConstants} from './FMParserConstants';
import {OutputFormat} from './OutputFormat';
import {ParserConfiguration} from './ParserConfiguration';
import {SimpleCharStream} from './SimpleCharStream';
import {FMParserTokenManager} from './FMParserTokenManager';
import {LegacyConstructorParserConfiguration} from './LegacyConstructorParserConfiguration';
import {Token} from './Token';
import {HTMLOutputFormat} from './HTMLOutputFormat';
import {XMLOutputFormat} from './XMLOutputFormat';
import {UnregisteredOutputFormatException} from './UnregisteredOutputFormatException';
import {BugException} from './BugException';
import {MarkupOutputFormat} from './MarkupOutputFormat';
import {Expression} from './Expression';
import {ParseException} from './ParseException';
import {StringLiteral} from './StringLiteral';
import {NumberLiteral} from './NumberLiteral';
import {BooleanLiteral} from './BooleanLiteral';
import {HashLiteral} from './HashLiteral';
import {ListLiteral} from './ListLiteral';
import {EscapeBlock} from './EscapeBlock';
import {MethodCall} from './MethodCall';
import {Identifier} from './Identifier';
import {BuiltinVariable} from './BuiltinVariable';
import {ParentheticalExpression} from './ParentheticalExpression';
import {NotExpression} from './NotExpression';
import {UnaryPlusMinusExpression} from './UnaryPlusMinusExpression';
import {AddConcatExpression} from './AddConcatExpression';
import {ArithmeticExpression} from './ArithmeticExpression';
import {ComparisonExpression} from './ComparisonExpression';
import {Range} from './Range';
import {AndExpression} from './AndExpression';
import {OrExpression} from './OrExpression';
import {DefaultToExpression} from './DefaultToExpression';
import {ExistsExpression} from './ExistsExpression';
import {BuiltIn} from './BuiltIn';
import {SpecialBuiltIn} from './SpecialBuiltIn';
import {BuiltInForLoopVariable} from './BuiltInForLoopVariable';
import {BuiltInBannedWhenAutoEscaping} from './BuiltInBannedWhenAutoEscaping';
import {MarkupOutputFormatBoundBuiltIn} from './MarkupOutputFormatBoundBuiltIn';
import {OutputFormatBoundBuiltIn} from './OutputFormatBoundBuiltIn';
import {BuiltInWithParseTimeParameters} from './BuiltInWithParseTimeParameters';
import {Character} from '../../java/lang/Character';
import {Dot} from './Dot';
import {DynamicKeyName} from './DynamicKeyName';
import {DollarVariable} from './DollarVariable';
import {NonStringException} from './NonStringException';
import {NumericalOutput} from './NumericalOutput';
import {TemplateElement} from './TemplateElement';
import {TemplateElements} from './TemplateElements';
import {IfBlock} from './IfBlock';
import {ConditionalBlock} from './ConditionalBlock';
import {AttemptBlock} from './AttemptBlock';
import {RecoveryBlock} from './RecoveryBlock';
import {ElseOfList} from './ElseOfList';
import {IteratorBlock} from './IteratorBlock';
import {ListElseContainer} from './ListElseContainer';
import {Items} from './Items';
import {Sep} from './Sep';
import {VisitNode} from './VisitNode';
import {RecurseNode} from './RecurseNode';
import {FallbackInstruction} from './FallbackInstruction';
import {BreakInstruction} from './BreakInstruction';
import {ContinueInstruction} from './ContinueInstruction';
import {ReturnInstruction} from './ReturnInstruction';
import {StopInstruction} from './StopInstruction';
import {BodyInstruction} from './BodyInstruction';
import {FlushInstruction} from './FlushInstruction';
import {TrimInstruction} from './TrimInstruction';
import {Assignment} from './Assignment';
import {AssignmentInstruction} from './AssignmentInstruction';
import {BlockAssignment} from './BlockAssignment';
import {Include} from './Include';
import {LibraryLoad} from './LibraryLoad';
import {Macro} from './Macro';
import {CompressedBlock} from './CompressedBlock';
import {UnifiedCall} from './UnifiedCall';
import {Comment} from './Comment';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {TextBlock} from './TextBlock';
import {TransformBlock} from './TransformBlock';
import {SwitchBlock} from './SwitchBlock';
import {MixedContent} from './MixedContent';
import {Case} from './Case';
import {NoEscapeBlock} from './NoEscapeBlock';
import {OutputFormatBlock} from './OutputFormatBlock';
import {CombinedMarkupOutputFormat} from './CombinedMarkupOutputFormat';
import {AutoEscBlock} from './AutoEscBlock';
import {NoAutoEscBlock} from './NoAutoEscBlock';
import {PropertySetting} from './PropertySetting';
import {Interpolation} from './Interpolation';
import {InputStream} from '../../java/io/InputStream';
import {StringTokenizer} from "../../java/util/StringTokenizer";
import {Map} from "../../java/util/Map";
import {List} from "../../java/util/List";

/**
 * @Deprecated This is an internal API of FreeMarker; will be changed in 2.4.
 * @param {Template} template
 * @param {Reader} reader
 * @param {boolean} strictSyntaxMode
 * @param {boolean} whitespaceStripping
 * @param {number} tagSyntax
 * @param {number} namingConvention
 * @param {number} incompatibleImprovements
 * @class
 */
export class FMParser implements FMParserConstants {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!FMParser.__static_initialized) { FMParser.__static_initialized = true; FMParser.__static_initializer_0(); } }

    static ITERATOR_BLOCK_KIND_LIST : number = 0;

    static ITERATOR_BLOCK_KIND_FOREACH : number = 1;

    static ITERATOR_BLOCK_KIND_ITEMS : number = 2;

    static ITERATOR_BLOCK_KIND_USER_DIRECTIVE : number = 3;

    /*private*/ template : Template;

    /*private*/ stripWhitespace : boolean;

    /*private*/ stripText : boolean;

    /*private*/ preventStrippings : boolean;

    /*private*/ incompatibleImprovements : number;

    /*private*/ outputFormat : OutputFormat;

    /*private*/ autoEscapingPolicy : number;

    /*private*/ autoEscaping : boolean;

    /*private*/ pCfg : ParserConfiguration;

    /**
     * Keeps track of #list and #foreach nesting.
     */
    /*private*/ iteratorBlockContexts : List;

    /**
     * Keeps track of the nesting depth of directives that support #break.
     */
    /*private*/ breakableDirectiveNesting : number;

    /**
     * Keeps track of the nesting depth of directives that support #continue.
     */
    /*private*/ continuableDirectiveNesting : number;

    /*private*/ inMacro : boolean;

    /*private*/ inFunction : boolean;

    /*private*/ escapes : Array<any> = <any>([]);

    /*private*/ mixedContentNesting : number;

    /**
     * Create an FM expression parser using a string.
     * 
     * @Deprecated This is an internal API of FreeMarker; can be removed any time.
     * @param {String} s
     * @return {FMParser}
     */
    public static createExpressionParser(s : string) : FMParser {
        let scs : SimpleCharStream = new SimpleCharStream(new StringReader(s), 1, 1, s.length);
        let token_source : FMParserTokenManager = new FMParserTokenManager(scs);
        token_source.SwitchTo(FMParserConstants.FM_EXPRESSION);
        let parser : FMParser = new FMParser(token_source);
        token_source.setParser(parser);
        return parser;
    }

    static dummyTemplate() : Template {
        try {
            return new Template(null, new StringReader(""), Configuration.getDefaultConfiguration());
        } catch(e) {
            throw Object.defineProperty(new Error("Failed to create dummy template"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    public constructor(template? : any, reader? : any, strictSyntaxMode? : any, whitespaceStripping? : any, tagSyntax? : any, namingConvention? : any, incompatibleImprovements? : any) {
        if(((template != null && template instanceof <any>Template) || template === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((typeof strictSyntaxMode === 'boolean') || strictSyntaxMode === null) && ((typeof whitespaceStripping === 'boolean') || whitespaceStripping === null) && ((typeof tagSyntax === 'number') || tagSyntax === null) && ((typeof namingConvention === 'number') || namingConvention === null) && ((typeof incompatibleImprovements === 'number') || incompatibleImprovements === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let pCfg : any = new LegacyConstructorParserConfiguration(strictSyntaxMode, whitespaceStripping, tagSyntax, Configuration.LEGACY_INTERPOLATION_SYNTAX, namingConvention, __args[0] != null?__args[0].getParserConfiguration().getAutoEscapingPolicy():Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY, __args[0] != null?__args[0].getParserConfiguration().getOutputFormat():null, __args[0] != null?__args[0].getParserConfiguration().getRecognizeStandardFileExtensions():null, __args[0] != null?__args[0].getParserConfiguration().getTabSize():null, new Version(incompatibleImprovements), __args[0] != null?__args[0].getArithmeticEngine():null);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let newTemplate : any = true;
                    let tkMan : any = FMParser.readerToTokenManager(reader, pCfg);
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let tm : any = tkMan;
                        if(this.template===undefined) this.template = null;
                        if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                        if(this.stripText===undefined) this.stripText = false;
                        if(this.preventStrippings===undefined) this.preventStrippings = false;
                        if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                        if(this.outputFormat===undefined) this.outputFormat = null;
                        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                        if(this.pCfg===undefined) this.pCfg = null;
                        if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                        if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                        if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                        if(this.inMacro===undefined) this.inMacro = false;
                        if(this.inFunction===undefined) this.inFunction = false;
                        if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                        if(this.token_source===undefined) this.token_source = null;
                        if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                        if(this.token===undefined) this.token = null;
                        if(this.jj_nt===undefined) this.jj_nt = null;
                        if(this.jj_ntk===undefined) this.jj_ntk = 0;
                        if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                        if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                        if(this.jj_la===undefined) this.jj_la = 0;
                        if(this.jj_gen===undefined) this.jj_gen = 0;
                        if(this.jj_expentry===undefined) this.jj_expentry = null;
                        if(this.jj_endpos===undefined) this.jj_endpos = 0;
                        this.escapes = <any>([]);
                        this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                        this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                        this.jj_rescan = false;
                        this.jj_gc = 0;
                        this.jj_ls = new FMParser.LookaheadSuccess();
                        this.jj_expentries = <any>([]);
                        this.jj_kind = -1;
                        this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                        if(this.template===undefined) this.template = null;
                        if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                        if(this.stripText===undefined) this.stripText = false;
                        if(this.preventStrippings===undefined) this.preventStrippings = false;
                        if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                        if(this.outputFormat===undefined) this.outputFormat = null;
                        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                        if(this.pCfg===undefined) this.pCfg = null;
                        if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                        if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                        if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                        if(this.inMacro===undefined) this.inMacro = false;
                        if(this.inFunction===undefined) this.inFunction = false;
                        if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                        if(this.token_source===undefined) this.token_source = null;
                        if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                        if(this.token===undefined) this.token = null;
                        if(this.jj_nt===undefined) this.jj_nt = null;
                        if(this.jj_ntk===undefined) this.jj_ntk = 0;
                        if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                        if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                        if(this.jj_la===undefined) this.jj_la = 0;
                        if(this.jj_gen===undefined) this.jj_gen = 0;
                        if(this.jj_expentry===undefined) this.jj_expentry = null;
                        if(this.jj_endpos===undefined) this.jj_endpos = 0;
                        (() => {
                            this.token_source = tm;
                            this.token = new Token();
                            this.jj_ntk = -1;
                            this.jj_gen = 0;
                            for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                            for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                        })();
                    }
                    (() => {
                        NullArgumentException.check$java_lang_Object(pCfg);
                        this.pCfg = pCfg;
                        NullArgumentException.check$java_lang_Object(template);
                        this.template = template;
                        if(pCfg != null && pCfg instanceof <any>LegacyConstructorParserConfiguration) {
                            let lpCfg : LegacyConstructorParserConfiguration = <LegacyConstructorParserConfiguration><any>pCfg;
                            lpCfg.setArithmeticEngineIfNotSet(template.getArithmeticEngine());
                            lpCfg.setAutoEscapingPolicyIfNotSet(template.getConfiguration().getAutoEscapingPolicy());
                            lpCfg.setOutputFormatIfNotSet(template.getOutputFormat());
                            lpCfg.setRecognizeStandardFileExtensionsIfNotSet(template.getParserConfiguration().getRecognizeStandardFileExtensions());
                            lpCfg.setTabSizeIfNotSet(template.getParserConfiguration().getTabSize());
                        }
                        let incompatibleImprovements : number = pCfg.getIncompatibleImprovements().intValue();
                        this.token_source.incompatibleImprovements = incompatibleImprovements;
                        this.incompatibleImprovements = incompatibleImprovements;
                        {
                            let outputFormatFromExt : OutputFormat;
                            if(!pCfg.getRecognizeStandardFileExtensions() || (outputFormatFromExt = this.getFormatFromStdFileExt()) == null) {
                                this.autoEscapingPolicy = pCfg.getAutoEscapingPolicy();
                                this.outputFormat = pCfg.getOutputFormat();
                            } else {
                                this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                                this.outputFormat = outputFormatFromExt;
                            }
                        }
                        this.recalculateAutoEscapingField();
                        this.token_source.setParser(this);
                        this.token_source.strictSyntaxMode = pCfg.getStrictSyntaxMode();
                        let tagSyntax : number = pCfg.getTagSyntax();
                        switch((tagSyntax)) {
                        case Configuration.AUTO_DETECT_TAG_SYNTAX:
                            this.token_source.autodetectTagSyntax = true;
                            break;
                        case Configuration.ANGLE_BRACKET_TAG_SYNTAX:
                            this.token_source.squBracTagSyntax = false;
                            break;
                        case Configuration.SQUARE_BRACKET_TAG_SYNTAX:
                            this.token_source.squBracTagSyntax = true;
                            break;
                        default:
                            throw Object.defineProperty(new Error("Illegal argument for tagSyntax: " + tagSyntax), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                        }
                        this.token_source.interpolationSyntax = pCfg.getInterpolationSyntax();
                        let namingConvention : number = pCfg.getNamingConvention();
                        switch((namingConvention)) {
                        case Configuration.AUTO_DETECT_NAMING_CONVENTION:
                        case Configuration.CAMEL_CASE_NAMING_CONVENTION:
                        case Configuration.LEGACY_NAMING_CONVENTION:
                            this.token_source.initialNamingConvention = namingConvention;
                            this.token_source.namingConvention = namingConvention;
                            break;
                        default:
                            throw Object.defineProperty(new Error("Illegal argument for namingConvention: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                        }
                        this.stripWhitespace = pCfg.getWhitespaceStripping();
                        if(newTemplate) {
                            _TemplateAPI.setAutoEscaping(template, this.autoEscaping);
                            _TemplateAPI.setOutputFormat(template, this.outputFormat);
                        }
                    })();
                }
            }
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((typeof strictSyntaxMode === 'boolean') || strictSyntaxMode === null) && ((typeof whitespaceStripping === 'boolean') || whitespaceStripping === null) && ((typeof tagSyntax === 'number') || tagSyntax === null) && ((typeof namingConvention === 'number') || namingConvention === null) && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let stripWhitespace : any = __args[3];
            let incompatibleImprovements : any = __args[5];
            {
                let __args = Array.prototype.slice.call(arguments);
                let whitespaceStripping : any = stripWhitespace;
                let namingConvention : any = Configuration.AUTO_DETECT_NAMING_CONVENTION;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let pCfg : any = new LegacyConstructorParserConfiguration(strictSyntaxMode, whitespaceStripping, tagSyntax, Configuration.LEGACY_INTERPOLATION_SYNTAX, namingConvention, __args[0] != null?__args[0].getParserConfiguration().getAutoEscapingPolicy():Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY, __args[0] != null?__args[0].getParserConfiguration().getOutputFormat():null, __args[0] != null?__args[0].getParserConfiguration().getRecognizeStandardFileExtensions():null, __args[0] != null?__args[0].getParserConfiguration().getTabSize():null, new Version(incompatibleImprovements), __args[0] != null?__args[0].getArithmeticEngine():null);
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let newTemplate : any = true;
                        let tkMan : any = FMParser.readerToTokenManager(reader, pCfg);
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let tm : any = tkMan;
                            if(this.template===undefined) this.template = null;
                            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                            if(this.stripText===undefined) this.stripText = false;
                            if(this.preventStrippings===undefined) this.preventStrippings = false;
                            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                            if(this.outputFormat===undefined) this.outputFormat = null;
                            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                            if(this.autoEscaping===undefined) this.autoEscaping = false;
                            if(this.pCfg===undefined) this.pCfg = null;
                            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                            if(this.inMacro===undefined) this.inMacro = false;
                            if(this.inFunction===undefined) this.inFunction = false;
                            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                            if(this.token_source===undefined) this.token_source = null;
                            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                            if(this.token===undefined) this.token = null;
                            if(this.jj_nt===undefined) this.jj_nt = null;
                            if(this.jj_ntk===undefined) this.jj_ntk = 0;
                            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                            if(this.jj_la===undefined) this.jj_la = 0;
                            if(this.jj_gen===undefined) this.jj_gen = 0;
                            if(this.jj_expentry===undefined) this.jj_expentry = null;
                            if(this.jj_endpos===undefined) this.jj_endpos = 0;
                            this.escapes = <any>([]);
                            this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                            this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                            this.jj_rescan = false;
                            this.jj_gc = 0;
                            this.jj_ls = new FMParser.LookaheadSuccess();
                            this.jj_expentries = <any>([]);
                            this.jj_kind = -1;
                            this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                            if(this.template===undefined) this.template = null;
                            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                            if(this.stripText===undefined) this.stripText = false;
                            if(this.preventStrippings===undefined) this.preventStrippings = false;
                            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                            if(this.outputFormat===undefined) this.outputFormat = null;
                            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                            if(this.autoEscaping===undefined) this.autoEscaping = false;
                            if(this.pCfg===undefined) this.pCfg = null;
                            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                            if(this.inMacro===undefined) this.inMacro = false;
                            if(this.inFunction===undefined) this.inFunction = false;
                            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                            if(this.token_source===undefined) this.token_source = null;
                            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                            if(this.token===undefined) this.token = null;
                            if(this.jj_nt===undefined) this.jj_nt = null;
                            if(this.jj_ntk===undefined) this.jj_ntk = 0;
                            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                            if(this.jj_la===undefined) this.jj_la = 0;
                            if(this.jj_gen===undefined) this.jj_gen = 0;
                            if(this.jj_expentry===undefined) this.jj_expentry = null;
                            if(this.jj_endpos===undefined) this.jj_endpos = 0;
                            (() => {
                                this.token_source = tm;
                                this.token = new Token();
                                this.jj_ntk = -1;
                                this.jj_gen = 0;
                                for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                                for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                            })();
                        }
                        (() => {
                            NullArgumentException.check$java_lang_Object(pCfg);
                            this.pCfg = pCfg;
                            NullArgumentException.check$java_lang_Object(template);
                            this.template = template;
                            if(pCfg != null && pCfg instanceof <any>LegacyConstructorParserConfiguration) {
                                let lpCfg : LegacyConstructorParserConfiguration = <LegacyConstructorParserConfiguration><any>pCfg;
                                lpCfg.setArithmeticEngineIfNotSet(template.getArithmeticEngine());
                                lpCfg.setAutoEscapingPolicyIfNotSet(template.getConfiguration().getAutoEscapingPolicy());
                                lpCfg.setOutputFormatIfNotSet(template.getOutputFormat());
                                lpCfg.setRecognizeStandardFileExtensionsIfNotSet(template.getParserConfiguration().getRecognizeStandardFileExtensions());
                                lpCfg.setTabSizeIfNotSet(template.getParserConfiguration().getTabSize());
                            }
                            let incompatibleImprovements : number = pCfg.getIncompatibleImprovements().intValue();
                            this.token_source.incompatibleImprovements = incompatibleImprovements;
                            this.incompatibleImprovements = incompatibleImprovements;
                            {
                                let outputFormatFromExt : OutputFormat;
                                if(!pCfg.getRecognizeStandardFileExtensions() || (outputFormatFromExt = this.getFormatFromStdFileExt()) == null) {
                                    this.autoEscapingPolicy = pCfg.getAutoEscapingPolicy();
                                    this.outputFormat = pCfg.getOutputFormat();
                                } else {
                                    this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                                    this.outputFormat = outputFormatFromExt;
                                }
                            }
                            this.recalculateAutoEscapingField();
                            this.token_source.setParser(this);
                            this.token_source.strictSyntaxMode = pCfg.getStrictSyntaxMode();
                            let tagSyntax : number = pCfg.getTagSyntax();
                            switch((tagSyntax)) {
                            case Configuration.AUTO_DETECT_TAG_SYNTAX:
                                this.token_source.autodetectTagSyntax = true;
                                break;
                            case Configuration.ANGLE_BRACKET_TAG_SYNTAX:
                                this.token_source.squBracTagSyntax = false;
                                break;
                            case Configuration.SQUARE_BRACKET_TAG_SYNTAX:
                                this.token_source.squBracTagSyntax = true;
                                break;
                            default:
                                throw Object.defineProperty(new Error("Illegal argument for tagSyntax: " + tagSyntax), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                            }
                            this.token_source.interpolationSyntax = pCfg.getInterpolationSyntax();
                            let namingConvention : number = pCfg.getNamingConvention();
                            switch((namingConvention)) {
                            case Configuration.AUTO_DETECT_NAMING_CONVENTION:
                            case Configuration.CAMEL_CASE_NAMING_CONVENTION:
                            case Configuration.LEGACY_NAMING_CONVENTION:
                                this.token_source.initialNamingConvention = namingConvention;
                                this.token_source.namingConvention = namingConvention;
                                break;
                            default:
                                throw Object.defineProperty(new Error("Illegal argument for namingConvention: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                            }
                            this.stripWhitespace = pCfg.getWhitespaceStripping();
                            if(newTemplate) {
                                _TemplateAPI.setAutoEscaping(template, this.autoEscaping);
                                _TemplateAPI.setOutputFormat(template, this.outputFormat);
                            }
                        })();
                    }
                }
            }
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((typeof strictSyntaxMode === 'boolean') || strictSyntaxMode === null) && ((typeof whitespaceStripping === 'boolean') || whitespaceStripping === null) && ((typeof tagSyntax === 'number') || tagSyntax === null) && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let stripWhitespace : any = __args[3];
            {
                let __args = Array.prototype.slice.call(arguments);
                let incompatibleImprovements : any = Configuration.PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS_$LI$();
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let whitespaceStripping : any = stripWhitespace;
                    let namingConvention : any = Configuration.AUTO_DETECT_NAMING_CONVENTION;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let pCfg : any = new LegacyConstructorParserConfiguration(strictSyntaxMode, whitespaceStripping, tagSyntax, Configuration.LEGACY_INTERPOLATION_SYNTAX, namingConvention, __args[0] != null?__args[0].getParserConfiguration().getAutoEscapingPolicy():Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY, __args[0] != null?__args[0].getParserConfiguration().getOutputFormat():null, __args[0] != null?__args[0].getParserConfiguration().getRecognizeStandardFileExtensions():null, __args[0] != null?__args[0].getParserConfiguration().getTabSize():null, new Version(incompatibleImprovements), __args[0] != null?__args[0].getArithmeticEngine():null);
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let newTemplate : any = true;
                            let tkMan : any = FMParser.readerToTokenManager(reader, pCfg);
                            {
                                let __args = Array.prototype.slice.call(arguments);
                                let tm : any = tkMan;
                                if(this.template===undefined) this.template = null;
                                if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                                if(this.stripText===undefined) this.stripText = false;
                                if(this.preventStrippings===undefined) this.preventStrippings = false;
                                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                                if(this.outputFormat===undefined) this.outputFormat = null;
                                if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                                if(this.autoEscaping===undefined) this.autoEscaping = false;
                                if(this.pCfg===undefined) this.pCfg = null;
                                if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                                if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                                if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                                if(this.inMacro===undefined) this.inMacro = false;
                                if(this.inFunction===undefined) this.inFunction = false;
                                if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                                if(this.token_source===undefined) this.token_source = null;
                                if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                                if(this.token===undefined) this.token = null;
                                if(this.jj_nt===undefined) this.jj_nt = null;
                                if(this.jj_ntk===undefined) this.jj_ntk = 0;
                                if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                                if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                                if(this.jj_la===undefined) this.jj_la = 0;
                                if(this.jj_gen===undefined) this.jj_gen = 0;
                                if(this.jj_expentry===undefined) this.jj_expentry = null;
                                if(this.jj_endpos===undefined) this.jj_endpos = 0;
                                this.escapes = <any>([]);
                                this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                                this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                                this.jj_rescan = false;
                                this.jj_gc = 0;
                                this.jj_ls = new FMParser.LookaheadSuccess();
                                this.jj_expentries = <any>([]);
                                this.jj_kind = -1;
                                this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                                if(this.template===undefined) this.template = null;
                                if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                                if(this.stripText===undefined) this.stripText = false;
                                if(this.preventStrippings===undefined) this.preventStrippings = false;
                                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                                if(this.outputFormat===undefined) this.outputFormat = null;
                                if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                                if(this.autoEscaping===undefined) this.autoEscaping = false;
                                if(this.pCfg===undefined) this.pCfg = null;
                                if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                                if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                                if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                                if(this.inMacro===undefined) this.inMacro = false;
                                if(this.inFunction===undefined) this.inFunction = false;
                                if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                                if(this.token_source===undefined) this.token_source = null;
                                if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                                if(this.token===undefined) this.token = null;
                                if(this.jj_nt===undefined) this.jj_nt = null;
                                if(this.jj_ntk===undefined) this.jj_ntk = 0;
                                if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                                if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                                if(this.jj_la===undefined) this.jj_la = 0;
                                if(this.jj_gen===undefined) this.jj_gen = 0;
                                if(this.jj_expentry===undefined) this.jj_expentry = null;
                                if(this.jj_endpos===undefined) this.jj_endpos = 0;
                                (() => {
                                    this.token_source = tm;
                                    this.token = new Token();
                                    this.jj_ntk = -1;
                                    this.jj_gen = 0;
                                    for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                                    for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                                })();
                            }
                            (() => {
                                NullArgumentException.check$java_lang_Object(pCfg);
                                this.pCfg = pCfg;
                                NullArgumentException.check$java_lang_Object(template);
                                this.template = template;
                                if(pCfg != null && pCfg instanceof <any>LegacyConstructorParserConfiguration) {
                                    let lpCfg : LegacyConstructorParserConfiguration = <LegacyConstructorParserConfiguration><any>pCfg;
                                    lpCfg.setArithmeticEngineIfNotSet(template.getArithmeticEngine());
                                    lpCfg.setAutoEscapingPolicyIfNotSet(template.getConfiguration().getAutoEscapingPolicy());
                                    lpCfg.setOutputFormatIfNotSet(template.getOutputFormat());
                                    lpCfg.setRecognizeStandardFileExtensionsIfNotSet(template.getParserConfiguration().getRecognizeStandardFileExtensions());
                                    lpCfg.setTabSizeIfNotSet(template.getParserConfiguration().getTabSize());
                                }
                                let incompatibleImprovements : number = pCfg.getIncompatibleImprovements().intValue();
                                this.token_source.incompatibleImprovements = incompatibleImprovements;
                                this.incompatibleImprovements = incompatibleImprovements;
                                {
                                    let outputFormatFromExt : OutputFormat;
                                    if(!pCfg.getRecognizeStandardFileExtensions() || (outputFormatFromExt = this.getFormatFromStdFileExt()) == null) {
                                        this.autoEscapingPolicy = pCfg.getAutoEscapingPolicy();
                                        this.outputFormat = pCfg.getOutputFormat();
                                    } else {
                                        this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                                        this.outputFormat = outputFormatFromExt;
                                    }
                                }
                                this.recalculateAutoEscapingField();
                                this.token_source.setParser(this);
                                this.token_source.strictSyntaxMode = pCfg.getStrictSyntaxMode();
                                let tagSyntax : number = pCfg.getTagSyntax();
                                switch((tagSyntax)) {
                                case Configuration.AUTO_DETECT_TAG_SYNTAX:
                                    this.token_source.autodetectTagSyntax = true;
                                    break;
                                case Configuration.ANGLE_BRACKET_TAG_SYNTAX:
                                    this.token_source.squBracTagSyntax = false;
                                    break;
                                case Configuration.SQUARE_BRACKET_TAG_SYNTAX:
                                    this.token_source.squBracTagSyntax = true;
                                    break;
                                default:
                                    throw Object.defineProperty(new Error("Illegal argument for tagSyntax: " + tagSyntax), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                }
                                this.token_source.interpolationSyntax = pCfg.getInterpolationSyntax();
                                let namingConvention : number = pCfg.getNamingConvention();
                                switch((namingConvention)) {
                                case Configuration.AUTO_DETECT_NAMING_CONVENTION:
                                case Configuration.CAMEL_CASE_NAMING_CONVENTION:
                                case Configuration.LEGACY_NAMING_CONVENTION:
                                    this.token_source.initialNamingConvention = namingConvention;
                                    this.token_source.namingConvention = namingConvention;
                                    break;
                                default:
                                    throw Object.defineProperty(new Error("Illegal argument for namingConvention: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                }
                                this.stripWhitespace = pCfg.getWhitespaceStripping();
                                if(newTemplate) {
                                    _TemplateAPI.setAutoEscaping(template, this.autoEscaping);
                                    _TemplateAPI.setOutputFormat(template, this.outputFormat);
                                }
                            })();
                        }
                    }
                }
            }
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((typeof strictSyntaxMode === 'boolean') || strictSyntaxMode === null) && ((typeof whitespaceStripping === 'boolean') || whitespaceStripping === null) && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let stripWhitespace : any = __args[3];
            {
                let __args = Array.prototype.slice.call(arguments);
                let tagSyntax : any = Configuration.AUTO_DETECT_TAG_SYNTAX;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let incompatibleImprovements : any = Configuration.PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS_$LI$();
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let whitespaceStripping : any = stripWhitespace;
                        let namingConvention : any = Configuration.AUTO_DETECT_NAMING_CONVENTION;
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let pCfg : any = new LegacyConstructorParserConfiguration(strictSyntaxMode, whitespaceStripping, tagSyntax, Configuration.LEGACY_INTERPOLATION_SYNTAX, namingConvention, __args[0] != null?__args[0].getParserConfiguration().getAutoEscapingPolicy():Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY, __args[0] != null?__args[0].getParserConfiguration().getOutputFormat():null, __args[0] != null?__args[0].getParserConfiguration().getRecognizeStandardFileExtensions():null, __args[0] != null?__args[0].getParserConfiguration().getTabSize():null, new Version(incompatibleImprovements), __args[0] != null?__args[0].getArithmeticEngine():null);
                            {
                                let __args = Array.prototype.slice.call(arguments);
                                let newTemplate : any = true;
                                let tkMan : any = FMParser.readerToTokenManager(reader, pCfg);
                                {
                                    let __args = Array.prototype.slice.call(arguments);
                                    let tm : any = tkMan;
                                    if(this.template===undefined) this.template = null;
                                    if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                                    if(this.stripText===undefined) this.stripText = false;
                                    if(this.preventStrippings===undefined) this.preventStrippings = false;
                                    if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                                    if(this.outputFormat===undefined) this.outputFormat = null;
                                    if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                                    if(this.autoEscaping===undefined) this.autoEscaping = false;
                                    if(this.pCfg===undefined) this.pCfg = null;
                                    if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                                    if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                                    if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                                    if(this.inMacro===undefined) this.inMacro = false;
                                    if(this.inFunction===undefined) this.inFunction = false;
                                    if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                                    if(this.token_source===undefined) this.token_source = null;
                                    if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                                    if(this.token===undefined) this.token = null;
                                    if(this.jj_nt===undefined) this.jj_nt = null;
                                    if(this.jj_ntk===undefined) this.jj_ntk = 0;
                                    if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                                    if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                                    if(this.jj_la===undefined) this.jj_la = 0;
                                    if(this.jj_gen===undefined) this.jj_gen = 0;
                                    if(this.jj_expentry===undefined) this.jj_expentry = null;
                                    if(this.jj_endpos===undefined) this.jj_endpos = 0;
                                    this.escapes = <any>([]);
                                    this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                                    this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                                    this.jj_rescan = false;
                                    this.jj_gc = 0;
                                    this.jj_ls = new FMParser.LookaheadSuccess();
                                    this.jj_expentries = <any>([]);
                                    this.jj_kind = -1;
                                    this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                                    if(this.template===undefined) this.template = null;
                                    if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                                    if(this.stripText===undefined) this.stripText = false;
                                    if(this.preventStrippings===undefined) this.preventStrippings = false;
                                    if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                                    if(this.outputFormat===undefined) this.outputFormat = null;
                                    if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                                    if(this.autoEscaping===undefined) this.autoEscaping = false;
                                    if(this.pCfg===undefined) this.pCfg = null;
                                    if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                                    if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                                    if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                                    if(this.inMacro===undefined) this.inMacro = false;
                                    if(this.inFunction===undefined) this.inFunction = false;
                                    if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                                    if(this.token_source===undefined) this.token_source = null;
                                    if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                                    if(this.token===undefined) this.token = null;
                                    if(this.jj_nt===undefined) this.jj_nt = null;
                                    if(this.jj_ntk===undefined) this.jj_ntk = 0;
                                    if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                                    if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                                    if(this.jj_la===undefined) this.jj_la = 0;
                                    if(this.jj_gen===undefined) this.jj_gen = 0;
                                    if(this.jj_expentry===undefined) this.jj_expentry = null;
                                    if(this.jj_endpos===undefined) this.jj_endpos = 0;
                                    (() => {
                                        this.token_source = tm;
                                        this.token = new Token();
                                        this.jj_ntk = -1;
                                        this.jj_gen = 0;
                                        for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                                        for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                                    })();
                                }
                                (() => {
                                    NullArgumentException.check$java_lang_Object(pCfg);
                                    this.pCfg = pCfg;
                                    NullArgumentException.check$java_lang_Object(template);
                                    this.template = template;
                                    if(pCfg != null && pCfg instanceof <any>LegacyConstructorParserConfiguration) {
                                        let lpCfg : LegacyConstructorParserConfiguration = <LegacyConstructorParserConfiguration><any>pCfg;
                                        lpCfg.setArithmeticEngineIfNotSet(template.getArithmeticEngine());
                                        lpCfg.setAutoEscapingPolicyIfNotSet(template.getConfiguration().getAutoEscapingPolicy());
                                        lpCfg.setOutputFormatIfNotSet(template.getOutputFormat());
                                        lpCfg.setRecognizeStandardFileExtensionsIfNotSet(template.getParserConfiguration().getRecognizeStandardFileExtensions());
                                        lpCfg.setTabSizeIfNotSet(template.getParserConfiguration().getTabSize());
                                    }
                                    let incompatibleImprovements : number = pCfg.getIncompatibleImprovements().intValue();
                                    this.token_source.incompatibleImprovements = incompatibleImprovements;
                                    this.incompatibleImprovements = incompatibleImprovements;
                                    {
                                        let outputFormatFromExt : OutputFormat;
                                        if(!pCfg.getRecognizeStandardFileExtensions() || (outputFormatFromExt = this.getFormatFromStdFileExt()) == null) {
                                            this.autoEscapingPolicy = pCfg.getAutoEscapingPolicy();
                                            this.outputFormat = pCfg.getOutputFormat();
                                        } else {
                                            this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                                            this.outputFormat = outputFormatFromExt;
                                        }
                                    }
                                    this.recalculateAutoEscapingField();
                                    this.token_source.setParser(this);
                                    this.token_source.strictSyntaxMode = pCfg.getStrictSyntaxMode();
                                    let tagSyntax : number = pCfg.getTagSyntax();
                                    switch((tagSyntax)) {
                                    case Configuration.AUTO_DETECT_TAG_SYNTAX:
                                        this.token_source.autodetectTagSyntax = true;
                                        break;
                                    case Configuration.ANGLE_BRACKET_TAG_SYNTAX:
                                        this.token_source.squBracTagSyntax = false;
                                        break;
                                    case Configuration.SQUARE_BRACKET_TAG_SYNTAX:
                                        this.token_source.squBracTagSyntax = true;
                                        break;
                                    default:
                                        throw Object.defineProperty(new Error("Illegal argument for tagSyntax: " + tagSyntax), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                    }
                                    this.token_source.interpolationSyntax = pCfg.getInterpolationSyntax();
                                    let namingConvention : number = pCfg.getNamingConvention();
                                    switch((namingConvention)) {
                                    case Configuration.AUTO_DETECT_NAMING_CONVENTION:
                                    case Configuration.CAMEL_CASE_NAMING_CONVENTION:
                                    case Configuration.LEGACY_NAMING_CONVENTION:
                                        this.token_source.initialNamingConvention = namingConvention;
                                        this.token_source.namingConvention = namingConvention;
                                        break;
                                    default:
                                        throw Object.defineProperty(new Error("Illegal argument for namingConvention: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                    }
                                    this.stripWhitespace = pCfg.getWhitespaceStripping();
                                    if(newTemplate) {
                                        _TemplateAPI.setAutoEscaping(template, this.autoEscaping);
                                        _TemplateAPI.setOutputFormat(template, this.outputFormat);
                                    }
                                })();
                            }
                        }
                    }
                }
            }
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((typeof reader === 'boolean') || reader === null) && ((strictSyntaxMode != null && strictSyntaxMode instanceof <any>FMParserTokenManager) || strictSyntaxMode === null) && ((whitespaceStripping != null && (whitespaceStripping["__interfaces"] != null && whitespaceStripping["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0 || whitespaceStripping.constructor != null && whitespaceStripping.constructor["__interfaces"] != null && whitespaceStripping.constructor["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0)) || whitespaceStripping === null) && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let newTemplate : any = __args[1];
            let tkMan : any = __args[2];
            let pCfg : any = __args[3];
            {
                let __args = Array.prototype.slice.call(arguments);
                let tm : any = tkMan;
                if(this.template===undefined) this.template = null;
                if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                if(this.stripText===undefined) this.stripText = false;
                if(this.preventStrippings===undefined) this.preventStrippings = false;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.pCfg===undefined) this.pCfg = null;
                if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                if(this.inMacro===undefined) this.inMacro = false;
                if(this.inFunction===undefined) this.inFunction = false;
                if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                if(this.token_source===undefined) this.token_source = null;
                if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                if(this.token===undefined) this.token = null;
                if(this.jj_nt===undefined) this.jj_nt = null;
                if(this.jj_ntk===undefined) this.jj_ntk = 0;
                if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                if(this.jj_la===undefined) this.jj_la = 0;
                if(this.jj_gen===undefined) this.jj_gen = 0;
                if(this.jj_expentry===undefined) this.jj_expentry = null;
                if(this.jj_endpos===undefined) this.jj_endpos = 0;
                this.escapes = <any>([]);
                this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                this.jj_rescan = false;
                this.jj_gc = 0;
                this.jj_ls = new FMParser.LookaheadSuccess();
                this.jj_expentries = <any>([]);
                this.jj_kind = -1;
                this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                if(this.template===undefined) this.template = null;
                if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                if(this.stripText===undefined) this.stripText = false;
                if(this.preventStrippings===undefined) this.preventStrippings = false;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.pCfg===undefined) this.pCfg = null;
                if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                if(this.inMacro===undefined) this.inMacro = false;
                if(this.inFunction===undefined) this.inFunction = false;
                if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                if(this.token_source===undefined) this.token_source = null;
                if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                if(this.token===undefined) this.token = null;
                if(this.jj_nt===undefined) this.jj_nt = null;
                if(this.jj_ntk===undefined) this.jj_ntk = 0;
                if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                if(this.jj_la===undefined) this.jj_la = 0;
                if(this.jj_gen===undefined) this.jj_gen = 0;
                if(this.jj_expentry===undefined) this.jj_expentry = null;
                if(this.jj_endpos===undefined) this.jj_endpos = 0;
                (() => {
                    this.token_source = tm;
                    this.token = new Token();
                    this.jj_ntk = -1;
                    this.jj_gen = 0;
                    for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                    for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                })();
            }
            (() => {
                NullArgumentException.check$java_lang_Object(pCfg);
                this.pCfg = pCfg;
                NullArgumentException.check$java_lang_Object(template);
                this.template = template;
                if(pCfg != null && pCfg instanceof <any>LegacyConstructorParserConfiguration) {
                    let lpCfg : LegacyConstructorParserConfiguration = <LegacyConstructorParserConfiguration><any>pCfg;
                    lpCfg.setArithmeticEngineIfNotSet(template.getArithmeticEngine());
                    lpCfg.setAutoEscapingPolicyIfNotSet(template.getConfiguration().getAutoEscapingPolicy());
                    lpCfg.setOutputFormatIfNotSet(template.getOutputFormat());
                    lpCfg.setRecognizeStandardFileExtensionsIfNotSet(template.getParserConfiguration().getRecognizeStandardFileExtensions());
                    lpCfg.setTabSizeIfNotSet(template.getParserConfiguration().getTabSize());
                }
                let incompatibleImprovements : number = pCfg.getIncompatibleImprovements().intValue();
                this.token_source.incompatibleImprovements = incompatibleImprovements;
                this.incompatibleImprovements = incompatibleImprovements;
                {
                    let outputFormatFromExt : OutputFormat;
                    if(!pCfg.getRecognizeStandardFileExtensions() || (outputFormatFromExt = this.getFormatFromStdFileExt()) == null) {
                        this.autoEscapingPolicy = pCfg.getAutoEscapingPolicy();
                        this.outputFormat = pCfg.getOutputFormat();
                    } else {
                        this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                        this.outputFormat = outputFormatFromExt;
                    }
                }
                this.recalculateAutoEscapingField();
                this.token_source.setParser(this);
                this.token_source.strictSyntaxMode = pCfg.getStrictSyntaxMode();
                let tagSyntax : number = pCfg.getTagSyntax();
                switch((tagSyntax)) {
                case Configuration.AUTO_DETECT_TAG_SYNTAX:
                    this.token_source.autodetectTagSyntax = true;
                    break;
                case Configuration.ANGLE_BRACKET_TAG_SYNTAX:
                    this.token_source.squBracTagSyntax = false;
                    break;
                case Configuration.SQUARE_BRACKET_TAG_SYNTAX:
                    this.token_source.squBracTagSyntax = true;
                    break;
                default:
                    throw Object.defineProperty(new Error("Illegal argument for tagSyntax: " + tagSyntax), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                this.token_source.interpolationSyntax = pCfg.getInterpolationSyntax();
                let namingConvention : number = pCfg.getNamingConvention();
                switch((namingConvention)) {
                case Configuration.AUTO_DETECT_NAMING_CONVENTION:
                case Configuration.CAMEL_CASE_NAMING_CONVENTION:
                case Configuration.LEGACY_NAMING_CONVENTION:
                    this.token_source.initialNamingConvention = namingConvention;
                    this.token_source.namingConvention = namingConvention;
                    break;
                default:
                    throw Object.defineProperty(new Error("Illegal argument for namingConvention: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                this.stripWhitespace = pCfg.getWhitespaceStripping();
                if(newTemplate) {
                    _TemplateAPI.setAutoEscaping(template, this.autoEscaping);
                    _TemplateAPI.setOutputFormat(template, this.outputFormat);
                }
            })();
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((strictSyntaxMode != null && (strictSyntaxMode["__interfaces"] != null && strictSyntaxMode["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0 || strictSyntaxMode.constructor != null && strictSyntaxMode.constructor["__interfaces"] != null && strictSyntaxMode.constructor["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0)) || strictSyntaxMode === null) && whitespaceStripping === undefined && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let pCfg : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let newTemplate : any = true;
                let tkMan : any = FMParser.readerToTokenManager(reader, pCfg);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let tm : any = tkMan;
                    if(this.template===undefined) this.template = null;
                    if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                    if(this.stripText===undefined) this.stripText = false;
                    if(this.preventStrippings===undefined) this.preventStrippings = false;
                    if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                    if(this.outputFormat===undefined) this.outputFormat = null;
                    if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                    if(this.autoEscaping===undefined) this.autoEscaping = false;
                    if(this.pCfg===undefined) this.pCfg = null;
                    if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                    if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                    if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                    if(this.inMacro===undefined) this.inMacro = false;
                    if(this.inFunction===undefined) this.inFunction = false;
                    if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                    if(this.token_source===undefined) this.token_source = null;
                    if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                    if(this.token===undefined) this.token = null;
                    if(this.jj_nt===undefined) this.jj_nt = null;
                    if(this.jj_ntk===undefined) this.jj_ntk = 0;
                    if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                    if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                    if(this.jj_la===undefined) this.jj_la = 0;
                    if(this.jj_gen===undefined) this.jj_gen = 0;
                    if(this.jj_expentry===undefined) this.jj_expentry = null;
                    if(this.jj_endpos===undefined) this.jj_endpos = 0;
                    this.escapes = <any>([]);
                    this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                    this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                    this.jj_rescan = false;
                    this.jj_gc = 0;
                    this.jj_ls = new FMParser.LookaheadSuccess();
                    this.jj_expentries = <any>([]);
                    this.jj_kind = -1;
                    this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                    if(this.template===undefined) this.template = null;
                    if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                    if(this.stripText===undefined) this.stripText = false;
                    if(this.preventStrippings===undefined) this.preventStrippings = false;
                    if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                    if(this.outputFormat===undefined) this.outputFormat = null;
                    if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                    if(this.autoEscaping===undefined) this.autoEscaping = false;
                    if(this.pCfg===undefined) this.pCfg = null;
                    if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                    if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                    if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                    if(this.inMacro===undefined) this.inMacro = false;
                    if(this.inFunction===undefined) this.inFunction = false;
                    if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                    if(this.token_source===undefined) this.token_source = null;
                    if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                    if(this.token===undefined) this.token = null;
                    if(this.jj_nt===undefined) this.jj_nt = null;
                    if(this.jj_ntk===undefined) this.jj_ntk = 0;
                    if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                    if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                    if(this.jj_la===undefined) this.jj_la = 0;
                    if(this.jj_gen===undefined) this.jj_gen = 0;
                    if(this.jj_expentry===undefined) this.jj_expentry = null;
                    if(this.jj_endpos===undefined) this.jj_endpos = 0;
                    (() => {
                        this.token_source = tm;
                        this.token = new Token();
                        this.jj_ntk = -1;
                        this.jj_gen = 0;
                        for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                        for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                    })();
                }
                (() => {
                    NullArgumentException.check$java_lang_Object(pCfg);
                    this.pCfg = pCfg;
                    NullArgumentException.check$java_lang_Object(template);
                    this.template = template;
                    if(pCfg != null && pCfg instanceof <any>LegacyConstructorParserConfiguration) {
                        let lpCfg : LegacyConstructorParserConfiguration = <LegacyConstructorParserConfiguration><any>pCfg;
                        lpCfg.setArithmeticEngineIfNotSet(template.getArithmeticEngine());
                        lpCfg.setAutoEscapingPolicyIfNotSet(template.getConfiguration().getAutoEscapingPolicy());
                        lpCfg.setOutputFormatIfNotSet(template.getOutputFormat());
                        lpCfg.setRecognizeStandardFileExtensionsIfNotSet(template.getParserConfiguration().getRecognizeStandardFileExtensions());
                        lpCfg.setTabSizeIfNotSet(template.getParserConfiguration().getTabSize());
                    }
                    let incompatibleImprovements : number = pCfg.getIncompatibleImprovements().intValue();
                    this.token_source.incompatibleImprovements = incompatibleImprovements;
                    this.incompatibleImprovements = incompatibleImprovements;
                    {
                        let outputFormatFromExt : OutputFormat;
                        if(!pCfg.getRecognizeStandardFileExtensions() || (outputFormatFromExt = this.getFormatFromStdFileExt()) == null) {
                            this.autoEscapingPolicy = pCfg.getAutoEscapingPolicy();
                            this.outputFormat = pCfg.getOutputFormat();
                        } else {
                            this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                            this.outputFormat = outputFormatFromExt;
                        }
                    }
                    this.recalculateAutoEscapingField();
                    this.token_source.setParser(this);
                    this.token_source.strictSyntaxMode = pCfg.getStrictSyntaxMode();
                    let tagSyntax : number = pCfg.getTagSyntax();
                    switch((tagSyntax)) {
                    case Configuration.AUTO_DETECT_TAG_SYNTAX:
                        this.token_source.autodetectTagSyntax = true;
                        break;
                    case Configuration.ANGLE_BRACKET_TAG_SYNTAX:
                        this.token_source.squBracTagSyntax = false;
                        break;
                    case Configuration.SQUARE_BRACKET_TAG_SYNTAX:
                        this.token_source.squBracTagSyntax = true;
                        break;
                    default:
                        throw Object.defineProperty(new Error("Illegal argument for tagSyntax: " + tagSyntax), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    this.token_source.interpolationSyntax = pCfg.getInterpolationSyntax();
                    let namingConvention : number = pCfg.getNamingConvention();
                    switch((namingConvention)) {
                    case Configuration.AUTO_DETECT_NAMING_CONVENTION:
                    case Configuration.CAMEL_CASE_NAMING_CONVENTION:
                    case Configuration.LEGACY_NAMING_CONVENTION:
                        this.token_source.initialNamingConvention = namingConvention;
                        this.token_source.namingConvention = namingConvention;
                        break;
                    default:
                        throw Object.defineProperty(new Error("Illegal argument for namingConvention: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    this.stripWhitespace = pCfg.getWhitespaceStripping();
                    if(newTemplate) {
                        _TemplateAPI.setAutoEscaping(template, this.autoEscaping);
                        _TemplateAPI.setOutputFormat(template, this.outputFormat);
                    }
                })();
            }
        } else if(((template != null && template instanceof <any>InputStream) || template === null) && ((typeof reader === 'string') || reader === null) && strictSyntaxMode === undefined && whitespaceStripping === undefined && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let stream : any = __args[0];
            let encoding : any = __args[1];
            if(this.template===undefined) this.template = null;
            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
            if(this.stripText===undefined) this.stripText = false;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.pCfg===undefined) this.pCfg = null;
            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
            if(this.inMacro===undefined) this.inMacro = false;
            if(this.inFunction===undefined) this.inFunction = false;
            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
            if(this.token_source===undefined) this.token_source = null;
            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
            if(this.token===undefined) this.token = null;
            if(this.jj_nt===undefined) this.jj_nt = null;
            if(this.jj_ntk===undefined) this.jj_ntk = 0;
            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
            if(this.jj_la===undefined) this.jj_la = 0;
            if(this.jj_gen===undefined) this.jj_gen = 0;
            if(this.jj_expentry===undefined) this.jj_expentry = null;
            if(this.jj_endpos===undefined) this.jj_endpos = 0;
            this.escapes = <any>([]);
            this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
            this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
            this.jj_rescan = false;
            this.jj_gc = 0;
            this.jj_ls = new FMParser.LookaheadSuccess();
            this.jj_expentries = <any>([]);
            this.jj_kind = -1;
            this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
            if(this.template===undefined) this.template = null;
            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
            if(this.stripText===undefined) this.stripText = false;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.pCfg===undefined) this.pCfg = null;
            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
            if(this.inMacro===undefined) this.inMacro = false;
            if(this.inFunction===undefined) this.inFunction = false;
            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
            if(this.token_source===undefined) this.token_source = null;
            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
            if(this.token===undefined) this.token = null;
            if(this.jj_nt===undefined) this.jj_nt = null;
            if(this.jj_ntk===undefined) this.jj_ntk = 0;
            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
            if(this.jj_la===undefined) this.jj_la = 0;
            if(this.jj_gen===undefined) this.jj_gen = 0;
            if(this.jj_expentry===undefined) this.jj_expentry = null;
            if(this.jj_endpos===undefined) this.jj_endpos = 0;
            (() => {
                try {
                    this.jj_input_stream = new SimpleCharStream(stream, encoding, 1, 1);
                } catch(e) {
                    throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                }
                this.token_source = new FMParserTokenManager(this.jj_input_stream);
                this.token = new Token();
                this.jj_ntk = -1;
                this.jj_gen = 0;
                for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
            })();
        } else if(((typeof template === 'string') || template === null) && reader === undefined && strictSyntaxMode === undefined && whitespaceStripping === undefined && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let template : any = FMParser.dummyTemplate();
                let reader : any = new StringReader(__args[0]);
                let strictSyntaxMode : any = true;
                let stripWhitespace : any = true;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let tagSyntax : any = Configuration.AUTO_DETECT_TAG_SYNTAX;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let incompatibleImprovements : any = Configuration.PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS_$LI$();
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let whitespaceStripping : any = stripWhitespace;
                            let namingConvention : any = Configuration.AUTO_DETECT_NAMING_CONVENTION;
                            {
                                let __args = Array.prototype.slice.call(arguments);
                                let pCfg : any = new LegacyConstructorParserConfiguration(strictSyntaxMode, whitespaceStripping, tagSyntax, Configuration.LEGACY_INTERPOLATION_SYNTAX, namingConvention, __args[0] != null?__args[0].getParserConfiguration().getAutoEscapingPolicy():Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY, __args[0] != null?__args[0].getParserConfiguration().getOutputFormat():null, __args[0] != null?__args[0].getParserConfiguration().getRecognizeStandardFileExtensions():null, __args[0] != null?__args[0].getParserConfiguration().getTabSize():null, new Version(incompatibleImprovements), __args[0] != null?__args[0].getArithmeticEngine():null);
                                {
                                    let __args = Array.prototype.slice.call(arguments);
                                    let newTemplate : any = true;
                                    let tkMan : any = FMParser.readerToTokenManager(reader, pCfg);
                                    {
                                        let __args = Array.prototype.slice.call(arguments);
                                        let tm : any = tkMan;
                                        if(this.template===undefined) this.template = null;
                                        if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                                        if(this.stripText===undefined) this.stripText = false;
                                        if(this.preventStrippings===undefined) this.preventStrippings = false;
                                        if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                                        if(this.outputFormat===undefined) this.outputFormat = null;
                                        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                                        if(this.pCfg===undefined) this.pCfg = null;
                                        if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                                        if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                                        if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                                        if(this.inMacro===undefined) this.inMacro = false;
                                        if(this.inFunction===undefined) this.inFunction = false;
                                        if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                                        if(this.token_source===undefined) this.token_source = null;
                                        if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                                        if(this.token===undefined) this.token = null;
                                        if(this.jj_nt===undefined) this.jj_nt = null;
                                        if(this.jj_ntk===undefined) this.jj_ntk = 0;
                                        if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                                        if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                                        if(this.jj_la===undefined) this.jj_la = 0;
                                        if(this.jj_gen===undefined) this.jj_gen = 0;
                                        if(this.jj_expentry===undefined) this.jj_expentry = null;
                                        if(this.jj_endpos===undefined) this.jj_endpos = 0;
                                        this.escapes = <any>([]);
                                        this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                                        this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                                        this.jj_rescan = false;
                                        this.jj_gc = 0;
                                        this.jj_ls = new FMParser.LookaheadSuccess();
                                        this.jj_expentries = <any>([]);
                                        this.jj_kind = -1;
                                        this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                                        if(this.template===undefined) this.template = null;
                                        if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                                        if(this.stripText===undefined) this.stripText = false;
                                        if(this.preventStrippings===undefined) this.preventStrippings = false;
                                        if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                                        if(this.outputFormat===undefined) this.outputFormat = null;
                                        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                                        if(this.pCfg===undefined) this.pCfg = null;
                                        if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                                        if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                                        if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                                        if(this.inMacro===undefined) this.inMacro = false;
                                        if(this.inFunction===undefined) this.inFunction = false;
                                        if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                                        if(this.token_source===undefined) this.token_source = null;
                                        if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                                        if(this.token===undefined) this.token = null;
                                        if(this.jj_nt===undefined) this.jj_nt = null;
                                        if(this.jj_ntk===undefined) this.jj_ntk = 0;
                                        if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                                        if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                                        if(this.jj_la===undefined) this.jj_la = 0;
                                        if(this.jj_gen===undefined) this.jj_gen = 0;
                                        if(this.jj_expentry===undefined) this.jj_expentry = null;
                                        if(this.jj_endpos===undefined) this.jj_endpos = 0;
                                        (() => {
                                            this.token_source = tm;
                                            this.token = new Token();
                                            this.jj_ntk = -1;
                                            this.jj_gen = 0;
                                            for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                                            for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                                        })();
                                    }
                                    (() => {
                                        NullArgumentException.check$java_lang_Object(pCfg);
                                        this.pCfg = pCfg;
                                        NullArgumentException.check$java_lang_Object(template);
                                        this.template = template;
                                        if(pCfg != null && pCfg instanceof <any>LegacyConstructorParserConfiguration) {
                                            let lpCfg : LegacyConstructorParserConfiguration = <LegacyConstructorParserConfiguration><any>pCfg;
                                            lpCfg.setArithmeticEngineIfNotSet(template.getArithmeticEngine());
                                            lpCfg.setAutoEscapingPolicyIfNotSet(template.getConfiguration().getAutoEscapingPolicy());
                                            lpCfg.setOutputFormatIfNotSet(template.getOutputFormat());
                                            lpCfg.setRecognizeStandardFileExtensionsIfNotSet(template.getParserConfiguration().getRecognizeStandardFileExtensions());
                                            lpCfg.setTabSizeIfNotSet(template.getParserConfiguration().getTabSize());
                                        }
                                        let incompatibleImprovements : number = pCfg.getIncompatibleImprovements().intValue();
                                        this.token_source.incompatibleImprovements = incompatibleImprovements;
                                        this.incompatibleImprovements = incompatibleImprovements;
                                        {
                                            let outputFormatFromExt : OutputFormat;
                                            if(!pCfg.getRecognizeStandardFileExtensions() || (outputFormatFromExt = this.getFormatFromStdFileExt()) == null) {
                                                this.autoEscapingPolicy = pCfg.getAutoEscapingPolicy();
                                                this.outputFormat = pCfg.getOutputFormat();
                                            } else {
                                                this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                                                this.outputFormat = outputFormatFromExt;
                                            }
                                        }
                                        this.recalculateAutoEscapingField();
                                        this.token_source.setParser(this);
                                        this.token_source.strictSyntaxMode = pCfg.getStrictSyntaxMode();
                                        let tagSyntax : number = pCfg.getTagSyntax();
                                        switch((tagSyntax)) {
                                        case Configuration.AUTO_DETECT_TAG_SYNTAX:
                                            this.token_source.autodetectTagSyntax = true;
                                            break;
                                        case Configuration.ANGLE_BRACKET_TAG_SYNTAX:
                                            this.token_source.squBracTagSyntax = false;
                                            break;
                                        case Configuration.SQUARE_BRACKET_TAG_SYNTAX:
                                            this.token_source.squBracTagSyntax = true;
                                            break;
                                        default:
                                            throw Object.defineProperty(new Error("Illegal argument for tagSyntax: " + tagSyntax), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                        }
                                        this.token_source.interpolationSyntax = pCfg.getInterpolationSyntax();
                                        let namingConvention : number = pCfg.getNamingConvention();
                                        switch((namingConvention)) {
                                        case Configuration.AUTO_DETECT_NAMING_CONVENTION:
                                        case Configuration.CAMEL_CASE_NAMING_CONVENTION:
                                        case Configuration.LEGACY_NAMING_CONVENTION:
                                            this.token_source.initialNamingConvention = namingConvention;
                                            this.token_source.namingConvention = namingConvention;
                                            break;
                                        default:
                                            throw Object.defineProperty(new Error("Illegal argument for namingConvention: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                        }
                                        this.stripWhitespace = pCfg.getWhitespaceStripping();
                                        if(newTemplate) {
                                            _TemplateAPI.setAutoEscaping(template, this.autoEscaping);
                                            _TemplateAPI.setOutputFormat(template, this.outputFormat);
                                        }
                                    })();
                                }
                            }
                        }
                    }
                }
            }
        } else if(((template != null && template instanceof <any>InputStream) || template === null) && reader === undefined && strictSyntaxMode === undefined && whitespaceStripping === undefined && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let stream : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let encoding : any = null;
                if(this.template===undefined) this.template = null;
                if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                if(this.stripText===undefined) this.stripText = false;
                if(this.preventStrippings===undefined) this.preventStrippings = false;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.pCfg===undefined) this.pCfg = null;
                if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                if(this.inMacro===undefined) this.inMacro = false;
                if(this.inFunction===undefined) this.inFunction = false;
                if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                if(this.token_source===undefined) this.token_source = null;
                if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                if(this.token===undefined) this.token = null;
                if(this.jj_nt===undefined) this.jj_nt = null;
                if(this.jj_ntk===undefined) this.jj_ntk = 0;
                if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                if(this.jj_la===undefined) this.jj_la = 0;
                if(this.jj_gen===undefined) this.jj_gen = 0;
                if(this.jj_expentry===undefined) this.jj_expentry = null;
                if(this.jj_endpos===undefined) this.jj_endpos = 0;
                this.escapes = <any>([]);
                this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
                this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
                this.jj_rescan = false;
                this.jj_gc = 0;
                this.jj_ls = new FMParser.LookaheadSuccess();
                this.jj_expentries = <any>([]);
                this.jj_kind = -1;
                this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
                if(this.template===undefined) this.template = null;
                if(this.stripWhitespace===undefined) this.stripWhitespace = false;
                if(this.stripText===undefined) this.stripText = false;
                if(this.preventStrippings===undefined) this.preventStrippings = false;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.pCfg===undefined) this.pCfg = null;
                if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
                if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
                if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
                if(this.inMacro===undefined) this.inMacro = false;
                if(this.inFunction===undefined) this.inFunction = false;
                if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
                if(this.token_source===undefined) this.token_source = null;
                if(this.jj_input_stream===undefined) this.jj_input_stream = null;
                if(this.token===undefined) this.token = null;
                if(this.jj_nt===undefined) this.jj_nt = null;
                if(this.jj_ntk===undefined) this.jj_ntk = 0;
                if(this.jj_scanpos===undefined) this.jj_scanpos = null;
                if(this.jj_lastpos===undefined) this.jj_lastpos = null;
                if(this.jj_la===undefined) this.jj_la = 0;
                if(this.jj_gen===undefined) this.jj_gen = 0;
                if(this.jj_expentry===undefined) this.jj_expentry = null;
                if(this.jj_endpos===undefined) this.jj_endpos = 0;
                (() => {
                    try {
                        this.jj_input_stream = new SimpleCharStream(stream, encoding, 1, 1);
                    } catch(e) {
                        throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                    }
                    this.token_source = new FMParserTokenManager(this.jj_input_stream);
                    this.token = new Token();
                    this.jj_ntk = -1;
                    this.jj_gen = 0;
                    for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                    for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
                })();
            }
        } else if(((template != null && template instanceof <any>Reader) || template === null) && reader === undefined && strictSyntaxMode === undefined && whitespaceStripping === undefined && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let stream : any = __args[0];
            if(this.template===undefined) this.template = null;
            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
            if(this.stripText===undefined) this.stripText = false;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.pCfg===undefined) this.pCfg = null;
            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
            if(this.inMacro===undefined) this.inMacro = false;
            if(this.inFunction===undefined) this.inFunction = false;
            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
            if(this.token_source===undefined) this.token_source = null;
            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
            if(this.token===undefined) this.token = null;
            if(this.jj_nt===undefined) this.jj_nt = null;
            if(this.jj_ntk===undefined) this.jj_ntk = 0;
            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
            if(this.jj_la===undefined) this.jj_la = 0;
            if(this.jj_gen===undefined) this.jj_gen = 0;
            if(this.jj_expentry===undefined) this.jj_expentry = null;
            if(this.jj_endpos===undefined) this.jj_endpos = 0;
            this.escapes = <any>([]);
            this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
            this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
            this.jj_rescan = false;
            this.jj_gc = 0;
            this.jj_ls = new FMParser.LookaheadSuccess();
            this.jj_expentries = <any>([]);
            this.jj_kind = -1;
            this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
            if(this.template===undefined) this.template = null;
            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
            if(this.stripText===undefined) this.stripText = false;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.pCfg===undefined) this.pCfg = null;
            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
            if(this.inMacro===undefined) this.inMacro = false;
            if(this.inFunction===undefined) this.inFunction = false;
            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
            if(this.token_source===undefined) this.token_source = null;
            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
            if(this.token===undefined) this.token = null;
            if(this.jj_nt===undefined) this.jj_nt = null;
            if(this.jj_ntk===undefined) this.jj_ntk = 0;
            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
            if(this.jj_la===undefined) this.jj_la = 0;
            if(this.jj_gen===undefined) this.jj_gen = 0;
            if(this.jj_expentry===undefined) this.jj_expentry = null;
            if(this.jj_endpos===undefined) this.jj_endpos = 0;
            (() => {
                this.jj_input_stream = new SimpleCharStream(stream, 1, 1);
                this.token_source = new FMParserTokenManager(this.jj_input_stream);
                this.token = new Token();
                this.jj_ntk = -1;
                this.jj_gen = 0;
                for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
            })();
        } else if(((template != null && template instanceof <any>FMParserTokenManager) || template === null) && reader === undefined && strictSyntaxMode === undefined && whitespaceStripping === undefined && tagSyntax === undefined && namingConvention === undefined && incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let tm : any = __args[0];
            if(this.template===undefined) this.template = null;
            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
            if(this.stripText===undefined) this.stripText = false;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.pCfg===undefined) this.pCfg = null;
            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
            if(this.inMacro===undefined) this.inMacro = false;
            if(this.inFunction===undefined) this.inFunction = false;
            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
            if(this.token_source===undefined) this.token_source = null;
            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
            if(this.token===undefined) this.token = null;
            if(this.jj_nt===undefined) this.jj_nt = null;
            if(this.jj_ntk===undefined) this.jj_ntk = 0;
            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
            if(this.jj_la===undefined) this.jj_la = 0;
            if(this.jj_gen===undefined) this.jj_gen = 0;
            if(this.jj_expentry===undefined) this.jj_expentry = null;
            if(this.jj_endpos===undefined) this.jj_endpos = 0;
            this.escapes = <any>([]);
            this.jj_la1 = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);
            this.jj_2_rtns = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);
            this.jj_rescan = false;
            this.jj_gc = 0;
            this.jj_ls = new FMParser.LookaheadSuccess();
            this.jj_expentries = <any>([]);
            this.jj_kind = -1;
            this.jj_lasttokens = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);
            if(this.template===undefined) this.template = null;
            if(this.stripWhitespace===undefined) this.stripWhitespace = false;
            if(this.stripText===undefined) this.stripText = false;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.pCfg===undefined) this.pCfg = null;
            if(this.iteratorBlockContexts===undefined) this.iteratorBlockContexts = null;
            if(this.breakableDirectiveNesting===undefined) this.breakableDirectiveNesting = 0;
            if(this.continuableDirectiveNesting===undefined) this.continuableDirectiveNesting = 0;
            if(this.inMacro===undefined) this.inMacro = false;
            if(this.inFunction===undefined) this.inFunction = false;
            if(this.mixedContentNesting===undefined) this.mixedContentNesting = 0;
            if(this.token_source===undefined) this.token_source = null;
            if(this.jj_input_stream===undefined) this.jj_input_stream = null;
            if(this.token===undefined) this.token = null;
            if(this.jj_nt===undefined) this.jj_nt = null;
            if(this.jj_ntk===undefined) this.jj_ntk = 0;
            if(this.jj_scanpos===undefined) this.jj_scanpos = null;
            if(this.jj_lastpos===undefined) this.jj_lastpos = null;
            if(this.jj_la===undefined) this.jj_la = 0;
            if(this.jj_gen===undefined) this.jj_gen = 0;
            if(this.jj_expentry===undefined) this.jj_expentry = null;
            if(this.jj_endpos===undefined) this.jj_endpos = 0;
            (() => {
                this.token_source = tm;
                this.token = new Token();
                this.jj_ntk = -1;
                this.jj_gen = 0;
                for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
                for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
            })();
        } else throw new Error('invalid overload');
    }

    static readerToTokenManager(reader : Reader, pCfg : ParserConfiguration) : FMParserTokenManager {
        let simpleCharStream : SimpleCharStream = new SimpleCharStream(reader, 1, 1);
        simpleCharStream.setTabSize(pCfg.getTabSize());
        return new FMParserTokenManager(simpleCharStream);
    }

    setupStringLiteralMode(parentParser : FMParser, outputFormat : OutputFormat) {
        let parentTokenSource : FMParserTokenManager = parentParser.token_source;
        this.token_source.initialNamingConvention = parentTokenSource.initialNamingConvention;
        this.token_source.namingConvention = parentTokenSource.namingConvention;
        this.token_source.namingConventionEstabilisher = parentTokenSource.namingConventionEstabilisher;
        this.token_source.SwitchTo(FMParserConstants.NO_DIRECTIVE);
        this.outputFormat = outputFormat;
        this.recalculateAutoEscapingField();
        if(this.incompatibleImprovements < /*_TemplateAPI.VERSION_INT_2_3_24_$LI$()*/2003024) {
            this.incompatibleImprovements = /*_TemplateAPI.VERSION_INT_2_3_0_$LI$()*/2003000;
        }
        this.iteratorBlockContexts = parentParser.iteratorBlockContexts;
    }

    tearDownStringLiteralMode(parentParser : FMParser) {
        let parentTokenSource : FMParserTokenManager = parentParser.token_source;
        parentTokenSource.namingConvention = this.token_source.namingConvention;
        parentTokenSource.namingConventionEstabilisher = this.token_source.namingConventionEstabilisher;
    }

    /**
     * Used when we need to recreate the source code from the AST (such as for the FM2 to FM3 converter).
     * @param {boolean} preventStrippings
     */
    setPreventStrippings(preventStrippings : boolean) {
        this.preventStrippings = preventStrippings;
    }

    getFormatFromStdFileExt() : OutputFormat {
        let sourceName : string = this.template.getSourceName();
        if(sourceName == null) {
            return null;
        }
        let ln : number = sourceName.length;
        if(ln < 5) return null;
        let c : string = sourceName.charAt(ln - 5);
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '.'.charCodeAt(0)) return null;
        c = sourceName.charAt(ln - 4);
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != 'f'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != 'F'.charCodeAt(0)) return null;
        c = sourceName.charAt(ln - 3);
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != 't'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != 'T'.charCodeAt(0)) return null;
        c = sourceName.charAt(ln - 2);
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != 'l'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != 'L'.charCodeAt(0)) return null;
        c = sourceName.charAt(ln - 1);
        try {
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 'h'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 'H'.charCodeAt(0)) {
                return this.template.getConfiguration().getOutputFormat$java_lang_String(HTMLOutputFormat.INSTANCE_$LI$().getName());
            }
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 'x'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 'X'.charCodeAt(0)) {
                return this.template.getConfiguration().getOutputFormat$java_lang_String(XMLOutputFormat.INSTANCE_$LI$().getName());
            }
        } catch(e) {
            throw new BugException("Unregistered std format", e);
        }
        return null;
    }

    /**
     * Updates the {link #autoEscaping} field based on the {link #autoEscapingPolicy} and {link #outputFormat} fields.
     * @private
     */
    recalculateAutoEscapingField() {
        if(this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat) {
            if(this.autoEscapingPolicy === Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY) {
                this.autoEscaping = (<MarkupOutputFormat<any>>this.outputFormat).isAutoEscapedByDefault();
            } else if(this.autoEscapingPolicy === Configuration.ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY) {
                this.autoEscaping = true;
            } else if(this.autoEscapingPolicy === Configuration.DISABLE_AUTO_ESCAPING_POLICY) {
                this.autoEscaping = false;
            } else {
                throw Object.defineProperty(new Error("Unhandled autoEscaping ENUM: " + this.autoEscapingPolicy), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        } else {
            this.autoEscaping = false;
        }
    }

    getMarkupOutputFormat() : MarkupOutputFormat<any> {
        return (this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat)?<MarkupOutputFormat<any>>this.outputFormat:null;
    }

    /**
     * Don't use it, unless you are developing FreeMarker itself.
     * @return {number}
     */
    public _getLastTagSyntax() : number {
        return this.token_source.squBracTagSyntax?Configuration.SQUARE_BRACKET_TAG_SYNTAX:Configuration.ANGLE_BRACKET_TAG_SYNTAX;
    }

    /**
     * Don't use it, unless you are developing FreeMarker itself.
     * The naming convention used by this template; if it couldn't be detected so far, it will be the most probable one.
     * This could be used for formatting error messages, but not for anything serious.
     * @return {number}
     */
    public _getLastNamingConvention() : number {
        return this.token_source.namingConvention;
    }

    /**
     * Throw an exception if the expression passed in is a String Literal
     * @param {Expression} exp
     * @param {String} expected
     * @private
     */
    notStringLiteral(exp : Expression, expected : string) {
        if(exp != null && exp instanceof <any>StringLiteral) {
            throw new ParseException("Found string literal: " + exp + ". Expecting: " + expected, exp);
        }
    }

    /**
     * Throw an exception if the expression passed in is a Number Literal
     * @param {Expression} exp
     * @param {String} expected
     * @private
     */
    notNumberLiteral(exp : Expression, expected : string) {
        if(exp != null && exp instanceof <any>NumberLiteral) {
            throw new ParseException("Found number literal: " + exp.getCanonicalForm() + ". Expecting " + expected, exp);
        }
    }

    /**
     * Throw an exception if the expression passed in is a boolean Literal
     * @param {Expression} exp
     * @param {String} expected
     * @private
     */
    notBooleanLiteral(exp : Expression, expected : string) {
        if(exp != null && exp instanceof <any>BooleanLiteral) {
            throw new ParseException("Found: " + exp.getCanonicalForm() + ". Expecting " + expected, exp);
        }
    }

    /**
     * Throw an exception if the expression passed in is a Hash Literal
     * @param {Expression} exp
     * @param {String} expected
     * @private
     */
    notHashLiteral(exp : Expression, expected : string) {
        if(exp != null && exp instanceof <any>HashLiteral) {
            throw new ParseException("Found hash literal: " + exp.getCanonicalForm() + ". Expecting " + expected, exp);
        }
    }

    /**
     * Throw an exception if the expression passed in is a List Literal
     * @param {Expression} exp
     * @param {String} expected
     * @private
     */
    notListLiteral(exp : Expression, expected : string) {
        if(exp != null && exp instanceof <any>ListLiteral) {
            throw new ParseException("Found list literal: " + exp.getCanonicalForm() + ". Expecting " + expected, exp);
        }
    }

    /**
     * Throw an exception if the expression passed in is a literal other than of the numerical type
     * @param {Expression} exp
     * @private
     */
    numberLiteralOnly(exp : Expression) {
        this.notStringLiteral(exp, "number");
        this.notListLiteral(exp, "number");
        this.notHashLiteral(exp, "number");
        this.notBooleanLiteral(exp, "number");
    }

    /**
     * Throw an exception if the expression passed in is not a string.
     * @param {Expression} exp
     * @private
     */
    stringLiteralOnly(exp : Expression) {
        this.notNumberLiteral(exp, "string");
        this.notListLiteral(exp, "string");
        this.notHashLiteral(exp, "string");
        this.notBooleanLiteral(exp, "string");
    }

    /**
     * Throw an exception if the expression passed in is a literal other than of the boolean type
     * @param {Expression} exp
     * @private
     */
    booleanLiteralOnly(exp : Expression) {
        this.notStringLiteral(exp, "boolean (true/false)");
        this.notListLiteral(exp, "boolean (true/false)");
        this.notHashLiteral(exp, "boolean (true/false)");
        this.notNumberLiteral(exp, "boolean (true/false)");
    }

    escapedExpression(exp : Expression) : Expression {
        if(!/* isEmpty */(this.escapes.length == 0)) {
            return (<EscapeBlock>this.escapes[0]).doEscape(exp);
        } else {
            return exp;
        }
    }

    getBoolean(exp : Expression, legacyCompat : boolean) : boolean {
        let tm : TemplateModel = null;
        try {
            tm = exp.eval(null);
        } catch(e) {
            throw new ParseException(e.message + "\nCould not evaluate expression: " + exp.getCanonicalForm(), exp, e);
        }
        if(tm != null && ClassUtil.isAssignableFrom(tm, "freemarker.template.TemplateBooleanModel")) {
            try {
                return (<TemplateBooleanModel><any>tm).getAsBoolean();
            } catch(tme) {
            }
        }
        if(legacyCompat && (tm != null && ClassUtil.isAssignableFrom(tm, "freemarker.template.TemplateScalarModel"))) {
            try {
                return StringUtil.getYesNo((<TemplateScalarModel><any>tm).getAsString());
            } catch(e) {
                throw new ParseException(e.message + "\nExpecting boolean (true/false), found: " + exp.getCanonicalForm(), exp);
            }
        }
        throw new ParseException("Expecting boolean (true/false) parameter", exp);
    }

    checkCurrentOutputFormatCanEscape(start : Token) {
        if(!(this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat)) {
            throw new ParseException("The current output format can\'t do escaping: " + this.outputFormat, this.template, start);
        }
    }

    pushIteratorBlockContext() : FMParser.ParserIteratorBlockContext {
        if(this.iteratorBlockContexts == null) {
            this.iteratorBlockContexts = <any>([]);
        }
        let newCtx : FMParser.ParserIteratorBlockContext = new FMParser.ParserIteratorBlockContext();
        /* add */(this.iteratorBlockContexts.push(newCtx)>0);
        return newCtx;
    }

    popIteratorBlockContext() {
        /* remove */this.iteratorBlockContexts.splice(/* size */(<number>this.iteratorBlockContexts.length) - 1, 1);
    }

    peekIteratorBlockContext() : FMParser.ParserIteratorBlockContext {
        let size : number = this.iteratorBlockContexts != null?/* size */(<number>this.iteratorBlockContexts.length):0;
        return size !== 0?/* get */this.iteratorBlockContexts[size - 1]:null;
    }

    checkLoopVariableBuiltInLHO(loopVarName : string, lhoExp : Expression, biName : Token) {
        let size : number = this.iteratorBlockContexts != null?/* size */(<number>this.iteratorBlockContexts.length):0;
        for(let i : number = size - 1; i >= 0; i--) {
            let ctx : FMParser.ParserIteratorBlockContext = /* get */this.iteratorBlockContexts[i];
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(loopVarName,ctx.loopVarName)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(loopVarName,ctx.loopVar2Name))) {
                if(ctx.kind === FMParser.ITERATOR_BLOCK_KIND_USER_DIRECTIVE) {
                    throw new ParseException("The left hand operand of ?" + biName.image + " can\'t be the loop variable of an user defined directive: " + loopVarName, lhoExp);
                }
                return;
            }
        }
        throw new ParseException("The left hand operand of ?" + biName.image + " must be a loop variable, but there\'s no loop variable in scope with this name: " + loopVarName, lhoExp);
    }

    forEachDirectiveSymbol() : string {
        return this.token_source.namingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION?"#forEach":"#foreach";
    }

    /**
     * This is the same as OrExpression, since
     * the OR is the operator with the lowest
     * precedence.
     * @return {Expression}
     */
    public Expression() : Expression {
        let exp : Expression;
        exp = this.OrExpression();
        {
            if("" != null) return exp;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Should be called HighestPrecedenceExpression.
     * Deals with the operators that have the highest precedence. Also deals with `exp!default` and `exp!`, due to parser
     * tricks needed because of the last.
     * @return {Expression}
     */
    public PrimaryExpression() : Expression {
        let exp : Expression;
        exp = this.AtomicExpression();
        label_1: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 99 /* DOT */:
            case 103 /* BUILT_IN */:
            case 104 /* EXISTS */:
            case 128 /* EXCLAM */:
            case 132 /* OPEN_BRACKET */:
            case 134 /* OPEN_PAREN */:
            case 152 /* TERMINATING_EXCLAM */:
                {
                    break;
                }
                default:
                this.jj_la1[0] = this.jj_gen;
                break label_1;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 99 /* DOT */:
                {
                    exp = this.DotVariable(exp);
                    break;
                }
                case 132 /* OPEN_BRACKET */:
                {
                    exp = this.DynamicKey(exp);
                    break;
                }
                case 134 /* OPEN_PAREN */:
                {
                    exp = this.MethodArgs(exp);
                    break;
                }
                case 103 /* BUILT_IN */:
                {
                    exp = this.BuiltIn(exp);
                    break;
                }
                case 128 /* EXCLAM */:
            case 152 /* TERMINATING_EXCLAM */:
                {
                    exp = this.DefaultTo(exp);
                    break;
                }
                case 104 /* EXISTS */:
                {
                    exp = this.Exists(exp);
                    break;
                }
                default:
                this.jj_la1[1] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
        }
        {
            if("" != null) return exp;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Lowest level expression, a literal, a variable,
     * or a possibly more complex expression bounded
     * by parentheses.
     * @return {Expression}
     */
    public AtomicExpression() : Expression {
        let exp : Expression;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 97 /* INTEGER */:
        case 98 /* DECIMAL */:
            {
                exp = this.NumberLiteral();
                break;
            }
            case 136 /* OPENING_CURLY_BRACKET */:
            {
                exp = this.HashLiteral();
                break;
            }
            case 93 /* STRING_LITERAL */:
        case 94 /* RAW_STRING */:
            {
                exp = this.StringLiteral(true);
                break;
            }
            case 95 /* FALSE */:
        case 96 /* TRUE */:
            {
                exp = this.BooleanLiteral();
                break;
            }
            case 132 /* OPEN_BRACKET */:
            {
                exp = this.ListLiteral();
                break;
            }
            case 141 /* ID */:
            {
                exp = this.Identifier();
                break;
            }
            case 134 /* OPEN_PAREN */:
            {
                exp = this.Parenthesis();
                break;
            }
            case 99 /* DOT */:
            {
                exp = this.BuiltinVariable();
                break;
            }
            default:
            this.jj_la1[2] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        {
            if("" != null) return exp;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Parenthesis() : Expression {
        let exp : Expression;
        let result : Expression;
        let start : Token;
        let end : Token;
        start = this.jj_consume_token(FMParserConstants.OPEN_PAREN);
        exp = this.Expression();
        end = this.jj_consume_token(FMParserConstants.CLOSE_PAREN);
        result = new ParentheticalExpression(exp);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Should be called UnaryPrefixExpression.
     * A primary expression preceded by zero or more unary prefix operators.
     * @return {Expression}
     */
    public UnaryExpression() : Expression {
        let exp : Expression;
        let result : Expression;
        let haveNot : boolean = false;
        let t : Token = null;
        let start : Token = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 119 /* PLUS */:
        case 120 /* MINUS */:
            {
                result = this.UnaryPlusMinusExpression();
                break;
            }
            case 128 /* EXCLAM */:
            {
                result = this.NotExpression();
                break;
            }
            case 93 /* STRING_LITERAL */:
        case 94 /* RAW_STRING */:
        case 95 /* FALSE */:
        case 96 /* TRUE */:
        case 97 /* INTEGER */:
        case 98 /* DECIMAL */:
        case 99 /* DOT */:
        case 132 /* OPEN_BRACKET */:
        case 134 /* OPEN_PAREN */:
        case 136 /* OPENING_CURLY_BRACKET */:
        case 141 /* ID */:
            {
                result = this.PrimaryExpression();
                break;
            }
            default:
            this.jj_la1[3] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public NotExpression() : Expression {
        let t : Token;
        let exp : Expression;
        let result : Expression = null;
        let nots : Array<any> = <any>([]);
        label_2: while((true)) {
            t = this.jj_consume_token(FMParserConstants.EXCLAM);
            /* add */(nots.push(t)>0);
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 128 /* EXCLAM */:
                {
                    break;
                }
                default:
                this.jj_la1[4] = this.jj_gen;
                break label_2;
            }
        }
        exp = this.PrimaryExpression();
        for(let i : number = 0; i < /* size */(<number>nots.length); i++) {
            result = new NotExpression(exp);
            let tok : Token = <Token>/* get */nots[/* size */(<number>nots.length) - i - 1];
            result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_TemplateObject(this.template, tok, exp);
            exp = result;
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public UnaryPlusMinusExpression() : Expression {
        let exp : Expression;
        let result : Expression;
        let isMinus : boolean = false;
        let t : Token;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 119 /* PLUS */:
            {
                t = this.jj_consume_token(FMParserConstants.PLUS);
                break;
            }
            case 120 /* MINUS */:
            {
                t = this.jj_consume_token(FMParserConstants.MINUS);
                isMinus = true;
                break;
            }
            default:
            this.jj_la1[5] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        exp = this.PrimaryExpression();
        result = new UnaryPlusMinusExpression(exp, isMinus);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_TemplateObject(this.template, t, exp);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public AdditiveExpression() : Expression {
        let lhs : Expression;
        let rhs : Expression;
        let result : Expression;
        let plus : boolean;
        lhs = this.MultiplicativeExpression();
        result = lhs;
        label_3: while((true)) {
            if(this.jj_2_1(2147483647)) {
            } else {
                break label_3;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 119 /* PLUS */:
                {
                    this.jj_consume_token(FMParserConstants.PLUS);
                    plus = true;
                    break;
                }
                case 120 /* MINUS */:
                {
                    this.jj_consume_token(FMParserConstants.MINUS);
                    plus = false;
                    break;
                }
                default:
                this.jj_la1[6] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            rhs = this.MultiplicativeExpression();
            if(plus) {
                result = new AddConcatExpression(lhs, rhs);
            } else {
                this.numberLiteralOnly(lhs);
                this.numberLiteralOnly(rhs);
                result = new ArithmeticExpression(lhs, rhs, ArithmeticExpression.TYPE_SUBSTRACTION);
            }
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, lhs, rhs);
            lhs = result;
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * A unary prefix expression followed by zero or more
     * unary prefix expressions with operators in between.
     * @return {Expression}
     */
    public MultiplicativeExpression() : Expression {
        let lhs : Expression;
        let rhs : Expression;
        let result : Expression;
        let operation : number = ArithmeticExpression.TYPE_MULTIPLICATION;
        lhs = this.UnaryExpression();
        result = lhs;
        label_4: while((true)) {
            if(this.jj_2_2(2147483647)) {
            } else {
                break label_4;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 121 /* TIMES */:
                {
                    this.jj_consume_token(FMParserConstants.TIMES);
                    operation = ArithmeticExpression.TYPE_MULTIPLICATION;
                    break;
                }
                case 124 /* DIVIDE */:
                {
                    this.jj_consume_token(FMParserConstants.DIVIDE);
                    operation = ArithmeticExpression.TYPE_DIVISION;
                    break;
                }
                case 125 /* PERCENT */:
                {
                    this.jj_consume_token(FMParserConstants.PERCENT);
                    operation = ArithmeticExpression.TYPE_MODULO;
                    break;
                }
                default:
                this.jj_la1[7] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            rhs = this.UnaryExpression();
            this.numberLiteralOnly(lhs);
            this.numberLiteralOnly(rhs);
            result = new ArithmeticExpression(lhs, rhs, operation);
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, lhs, rhs);
            lhs = result;
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public EqualityExpression() : Expression {
        let lhs : Expression;
        let rhs : Expression;
        let result : Expression;
        let t : Token;
        lhs = this.RelationalExpression();
        result = lhs;
        if(this.jj_2_3(2147483647)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 107 /* NOT_EQUALS */:
                {
                    t = this.jj_consume_token(FMParserConstants.NOT_EQUALS);
                    break;
                }
                case 105 /* EQUALS */:
                {
                    t = this.jj_consume_token(FMParserConstants.EQUALS);
                    break;
                }
                case 106 /* DOUBLE_EQUALS */:
                {
                    t = this.jj_consume_token(FMParserConstants.DOUBLE_EQUALS);
                    break;
                }
                default:
                this.jj_la1[8] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            rhs = this.RelationalExpression();
            this.notHashLiteral(lhs, "string");
            this.notHashLiteral(rhs, "string");
            this.notListLiteral(lhs, "string");
            this.notListLiteral(rhs, "string");
            result = new ComparisonExpression(lhs, rhs, t.image);
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, lhs, rhs);
        } else {
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public RelationalExpression() : Expression {
        let lhs : Expression;
        let rhs : Expression;
        let result : Expression;
        let t : Token;
        lhs = this.RangeExpression();
        result = lhs;
        if(this.jj_2_4(2147483647)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 150 /* NATURAL_GTE */:
                {
                    t = this.jj_consume_token(FMParserConstants.NATURAL_GTE);
                    break;
                }
                case 118 /* ESCAPED_GTE */:
                {
                    t = this.jj_consume_token(FMParserConstants.ESCAPED_GTE);
                    break;
                }
                case 149 /* NATURAL_GT */:
                {
                    t = this.jj_consume_token(FMParserConstants.NATURAL_GT);
                    break;
                }
                case 117 /* ESCAPED_GT */:
                {
                    t = this.jj_consume_token(FMParserConstants.ESCAPED_GT);
                    break;
                }
                case 116 /* LESS_THAN_EQUALS */:
                {
                    t = this.jj_consume_token(FMParserConstants.LESS_THAN_EQUALS);
                    break;
                }
                case 115 /* LESS_THAN */:
                {
                    t = this.jj_consume_token(FMParserConstants.LESS_THAN);
                    break;
                }
                default:
                this.jj_la1[9] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            rhs = this.RangeExpression();
            this.notHashLiteral(lhs, "number");
            this.notHashLiteral(rhs, "number");
            this.notListLiteral(lhs, "number");
            this.notListLiteral(rhs, "number");
            this.notStringLiteral(lhs, "number");
            this.notStringLiteral(rhs, "number");
            result = new ComparisonExpression(lhs, rhs, t.image);
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, lhs, rhs);
        } else {
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public RangeExpression() : Expression {
        let lhs : Expression;
        let rhs : Expression = null;
        let result : Expression;
        let endType : number;
        let dotDot : Token = null;
        lhs = this.AdditiveExpression();
        result = lhs;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 100 /* DOT_DOT */:
        case 101 /* DOT_DOT_LESS */:
        case 102 /* DOT_DOT_ASTERISK */:
            {
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 101 /* DOT_DOT_LESS */:
                case 102 /* DOT_DOT_ASTERISK */:
                    {
                        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                        case 101 /* DOT_DOT_LESS */:
                            {
                                this.jj_consume_token(FMParserConstants.DOT_DOT_LESS);
                                endType = Range.END_EXCLUSIVE;
                                break;
                            }
                            case 102 /* DOT_DOT_ASTERISK */:
                            {
                                this.jj_consume_token(FMParserConstants.DOT_DOT_ASTERISK);
                                endType = Range.END_SIZE_LIMITED;
                                break;
                            }
                            default:
                            this.jj_la1[10] = this.jj_gen;
                            this.jj_consume_token(-1);
                            throw new ParseException();
                        }
                        rhs = this.AdditiveExpression();
                        break;
                    }
                    case 100 /* DOT_DOT */:
                    {
                        dotDot = this.jj_consume_token(FMParserConstants.DOT_DOT);
                        endType = Range.END_UNBOUND;
                        if(this.jj_2_5(2147483647)) {
                            rhs = this.AdditiveExpression();
                            endType = Range.END_INCLUSIVE;
                        } else {
                        }
                        break;
                    }
                    default:
                    this.jj_la1[11] = this.jj_gen;
                    this.jj_consume_token(-1);
                    throw new ParseException();
                }
                this.numberLiteralOnly(lhs);
                if(rhs != null) {
                    this.numberLiteralOnly(rhs);
                }
                let range : Range = new Range(lhs, rhs, endType);
                if(rhs != null) {
                    range.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, lhs, rhs);
                } else {
                    range.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, lhs, dotDot);
                }
                result = range;
                break;
            }
            default:
            this.jj_la1[12] = this.jj_gen;
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public AndExpression() : Expression {
        let lhs : Expression;
        let rhs : Expression;
        let result : Expression;
        lhs = this.EqualityExpression();
        result = lhs;
        label_5: while((true)) {
            if(this.jj_2_6(2147483647)) {
            } else {
                break label_5;
            }
            this.jj_consume_token(FMParserConstants.AND);
            rhs = this.EqualityExpression();
            this.booleanLiteralOnly(lhs);
            this.booleanLiteralOnly(rhs);
            result = new AndExpression(lhs, rhs);
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, lhs, rhs);
            lhs = result;
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public OrExpression() : Expression {
        let lhs : Expression;
        let rhs : Expression;
        let result : Expression;
        lhs = this.AndExpression();
        result = lhs;
        label_6: while((true)) {
            if(this.jj_2_7(2147483647)) {
            } else {
                break label_6;
            }
            this.jj_consume_token(FMParserConstants.OR);
            rhs = this.AndExpression();
            this.booleanLiteralOnly(lhs);
            this.booleanLiteralOnly(rhs);
            result = new OrExpression(lhs, rhs);
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, lhs, rhs);
            lhs = result;
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public ListLiteral() : ListLiteral {
        let values : Array<any> = <any>([]);
        let begin : Token;
        let end : Token;
        begin = this.jj_consume_token(FMParserConstants.OPEN_BRACKET);
        values = this.PositionalArgs();
        end = this.jj_consume_token(FMParserConstants.CLOSE_BRACKET);
        let result : ListLiteral = new ListLiteral(values);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, begin, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public NumberLiteral() : Expression {
        let op : Token = null;
        let t : Token;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 97 /* INTEGER */:
            {
                t = this.jj_consume_token(FMParserConstants.INTEGER);
                break;
            }
            case 98 /* DECIMAL */:
            {
                t = this.jj_consume_token(FMParserConstants.DECIMAL);
                break;
            }
            default:
            this.jj_la1[13] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        let s : string = t.image;
        let result : Expression = new NumberLiteral(this.pCfg.getArithmeticEngine().toNumber(s));
        let startToken : Token = (op != null)?op:t;
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, startToken, t);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Identifier() : Identifier {
        let t : Token;
        t = this.jj_consume_token(FMParserConstants.ID);
        let id : Identifier = new Identifier(t.image);
        id.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, t);
        {
            if("" != null) return id;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public IdentifierOrStringLiteral() : Expression {
        let exp : Expression;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 141 /* ID */:
            {
                exp = this.Identifier();
                break;
            }
            case 93 /* STRING_LITERAL */:
        case 94 /* RAW_STRING */:
            {
                exp = this.StringLiteral(false);
                break;
            }
            default:
            this.jj_la1[14] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        {
            if("" != null) return exp;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public BuiltinVariable() : BuiltinVariable {
        let dot : Token;
        let name : Token;
        dot = this.jj_consume_token(FMParserConstants.DOT);
        name = this.jj_consume_token(FMParserConstants.ID);
        let result : BuiltinVariable = null;
        this.token_source.checkNamingConvention$freemarker_core_Token(name);
        let parseTimeValue : TemplateModel;
        let nameStr : string = name.image;
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nameStr,BuiltinVariable.OUTPUT_FORMAT)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nameStr,BuiltinVariable.OUTPUT_FORMAT_CC))) {
            parseTimeValue = new SimpleScalar(this.outputFormat.getName());
        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nameStr,BuiltinVariable.AUTO_ESC)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nameStr,BuiltinVariable.AUTO_ESC_CC))) {
            parseTimeValue = this.autoEscaping?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        } else {
            parseTimeValue = null;
        }
        result = new BuiltinVariable(name, this.token_source, parseTimeValue);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, dot, name);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public DefaultTo(exp : Expression) : Expression {
        let rhs : Expression = null;
        let t : Token;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 152 /* TERMINATING_EXCLAM */:
            {
                t = this.jj_consume_token(FMParserConstants.TERMINATING_EXCLAM);
                break;
            }
            case 128 /* EXCLAM */:
            {
                t = this.jj_consume_token(FMParserConstants.EXCLAM);
                if(this.jj_2_8(2147483647)) {
                    rhs = this.Expression();
                } else {
                }
                break;
            }
            default:
            this.jj_la1[15] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        let result : DefaultToExpression = new DefaultToExpression(exp, rhs);
        if(rhs == null) {
            result.setLocation$freemarker_template_Template$int$int$int$int(this.template, exp.beginColumn, exp.beginLine, t.beginColumn, t.beginLine);
        } else {
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, exp, rhs);
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Exists(exp : Expression) : Expression {
        let t : Token;
        t = this.jj_consume_token(FMParserConstants.EXISTS);
        let result : ExistsExpression = new ExistsExpression(exp);
        result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, exp, t);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public BuiltIn(lhoExp : Expression) : Expression {
        let t : Token = null;
        let result : BuiltIn;
        let args : Array<any> = null;
        let openParen : Token;
        let closeParen : Token;
        this.jj_consume_token(FMParserConstants.BUILT_IN);
        t = this.jj_consume_token(FMParserConstants.ID);
        this.token_source.checkNamingConvention$freemarker_core_Token(t);
        result = BuiltIn.newBuiltIn(this.incompatibleImprovements, lhoExp, t, this.token_source);
        result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, lhoExp, t);
        if(!(result != null && result instanceof <any>SpecialBuiltIn)) {
            {
                if("" != null) return result;
            }
        }
        if(result != null && result instanceof <any>BuiltInForLoopVariable) {
            if(!(lhoExp != null && lhoExp instanceof <any>Identifier)) {
                {
                    if(true) throw new ParseException("Expression used as the left hand operand of ?" + t.image + " must be a simple loop variable name.", lhoExp);
                }
            }
            let loopVarName : string = (<Identifier>lhoExp).getName();
            this.checkLoopVariableBuiltInLHO(loopVarName, lhoExp, t);
            (<BuiltInForLoopVariable>result).bindToLoopVariable(loopVarName);
            {
                if("" != null) return result;
            }
        }
        if(result != null && result instanceof <any>BuiltInBannedWhenAutoEscaping) {
            if((this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat) && this.autoEscaping) {
                {
                    if(true) throw new ParseException("Using ?" + t.image + " (legacy escaping) is not allowed when auto-escaping is on with a markup output format (" + this.outputFormat.getName() + "), to avoid double-escaping mistakes.", this.template, t);
                }
            }
            {
                if("" != null) return result;
            }
        }
        if(result != null && result instanceof <any>MarkupOutputFormatBoundBuiltIn) {
            if(!(this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat)) {
                {
                    if(true) throw new ParseException("?" + t.image + " can\'t be used here, as the current output format isn\'t a markup (escaping) format: " + this.outputFormat, this.template, t);
                }
            }
            (<MarkupOutputFormatBoundBuiltIn>result).bindToMarkupOutputFormat(<MarkupOutputFormat<any>>this.outputFormat);
            {
                if("" != null) return result;
            }
        }
        if(result != null && result instanceof <any>OutputFormatBoundBuiltIn) {
            (<OutputFormatBoundBuiltIn>result).bindToOutputFormat(this.outputFormat, this.autoEscapingPolicy);
            {
                if("" != null) return result;
            }
        }
        if(result != null && result instanceof <any>BuiltInWithParseTimeParameters) {
            openParen = this.jj_consume_token(FMParserConstants.OPEN_PAREN);
            args = this.PositionalArgs();
            closeParen = this.jj_consume_token(FMParserConstants.CLOSE_PAREN);
            result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, lhoExp, closeParen);
            (<BuiltInWithParseTimeParameters>result).bindToParameters(args, openParen, closeParen);
            {
                if("" != null) return result;
            }
        } else {
        }
        {
            /*if(true) */throw Object.defineProperty(new Error("Unhandled " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(SpecialBuiltIn) + " subclass: " + (<any>result.constructor)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object','java.lang.AssertionError'] });
        }
        // throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * production for when a key is specified by <DOT> + keyname
     * @param {Expression} exp
     * @return {Expression}
     */
    public DotVariable(exp : Expression) : Expression {
        let t : Token;
        this.jj_consume_token(FMParserConstants.DOT);
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 141 /* ID */:
            {
                t = this.jj_consume_token(FMParserConstants.ID);
                break;
            }
            case 121 /* TIMES */:
            {
                t = this.jj_consume_token(FMParserConstants.TIMES);
                break;
            }
            case 122 /* DOUBLE_STAR */:
            {
                t = this.jj_consume_token(FMParserConstants.DOUBLE_STAR);
                break;
            }
            case 95 /* FALSE */:
        case 96 /* TRUE */:
        case 115 /* LESS_THAN */:
        case 116 /* LESS_THAN_EQUALS */:
        case 117 /* ESCAPED_GT */:
        case 118 /* ESCAPED_GTE */:
        case 138 /* IN */:
        case 139 /* AS */:
        case 140 /* USING */:
            {
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 115 /* LESS_THAN */:
                    {
                        t = this.jj_consume_token(FMParserConstants.LESS_THAN);
                        break;
                    }
                    case 116 /* LESS_THAN_EQUALS */:
                    {
                        t = this.jj_consume_token(FMParserConstants.LESS_THAN_EQUALS);
                        break;
                    }
                    case 117 /* ESCAPED_GT */:
                    {
                        t = this.jj_consume_token(FMParserConstants.ESCAPED_GT);
                        break;
                    }
                    case 118 /* ESCAPED_GTE */:
                    {
                        t = this.jj_consume_token(FMParserConstants.ESCAPED_GTE);
                        break;
                    }
                    case 95 /* FALSE */:
                    {
                        t = this.jj_consume_token(FMParserConstants.FALSE);
                        break;
                    }
                    case 96 /* TRUE */:
                    {
                        t = this.jj_consume_token(FMParserConstants.TRUE);
                        break;
                    }
                    case 138 /* IN */:
                    {
                        t = this.jj_consume_token(FMParserConstants.IN);
                        break;
                    }
                    case 139 /* AS */:
                    {
                        t = this.jj_consume_token(FMParserConstants.AS);
                        break;
                    }
                    case 140 /* USING */:
                    {
                        t = this.jj_consume_token(FMParserConstants.USING);
                        break;
                    }
                    default:
                    this.jj_la1[16] = this.jj_gen;
                    this.jj_consume_token(-1);
                    throw new ParseException();
                }
                if(!Character.isLetter(t.image.charAt(0))) {
                    {
                        if(true) throw new ParseException(t.image + " is not a valid identifier.", this.template, t);
                    }
                }
                break;
            }
            default:
            this.jj_la1[17] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        this.notListLiteral(exp, "hash");
        this.notStringLiteral(exp, "hash");
        this.notBooleanLiteral(exp, "hash");
        let dot : Dot = new Dot(exp, t.image);
        dot.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, exp, t);
        {
            if("" != null) return dot;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * production for when the key is specified
     * in brackets.
     * @param {Expression} exp
     * @return {Expression}
     */
    public DynamicKey(exp : Expression) : Expression {
        let arg : Expression;
        let t : Token;
        this.jj_consume_token(FMParserConstants.OPEN_BRACKET);
        arg = this.Expression();
        t = this.jj_consume_token(FMParserConstants.CLOSE_BRACKET);
        this.notBooleanLiteral(exp, "list or hash");
        this.notNumberLiteral(exp, "list or hash");
        let dkn : DynamicKeyName = new DynamicKeyName(exp, arg);
        dkn.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, exp, t);
        {
            if("" != null) return dkn;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * production for an arglist part of a method invocation.
     * @param {Expression} exp
     * @return {MethodCall}
     */
    public MethodArgs(exp : Expression) : MethodCall {
        let args : Array<any> = <any>([]);
        let end : Token;
        this.jj_consume_token(FMParserConstants.OPEN_PAREN);
        args = this.PositionalArgs();
        end = this.jj_consume_token(FMParserConstants.CLOSE_PAREN);
        let result : MethodCall = new MethodCall(exp, args);
        result.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, exp, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public StringLiteral(interpolate : boolean) : StringLiteral {
        let t : Token;
        let raw : boolean = false;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 93 /* STRING_LITERAL */:
            {
                t = this.jj_consume_token(FMParserConstants.STRING_LITERAL);
                break;
            }
            case 94 /* RAW_STRING */:
            {
                t = this.jj_consume_token(FMParserConstants.RAW_STRING);
                raw = true;
                break;
            }
            default:
            this.jj_la1[18] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        let s : string;
        if(raw) {
            s = t.image.substring(2, t.image.length - 1);
        } else {
            try {
                s = StringUtil.FTLStringLiteralDec(t.image.substring(1, t.image.length - 1));
            } catch(pe) {
                pe.lineNumber = t.beginLine;
                pe.columnNumber = t.beginColumn;
                pe.endLineNumber = t.endLine;
                pe.endColumnNumber = t.endColumn;
                {
                    if(true) throw pe;
                }
            }
        }
        let result : StringLiteral = new StringLiteral(s);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, t);
        if(interpolate && !raw) {
            let interpolationSyntax : number = this.pCfg.getInterpolationSyntax();
            if((interpolationSyntax === Configuration.LEGACY_INTERPOLATION_SYNTAX || interpolationSyntax === Configuration.DOLLAR_INTERPOLATION_SYNTAX) && t.image.indexOf("${") !== -1 || interpolationSyntax === Configuration.LEGACY_INTERPOLATION_SYNTAX && t.image.indexOf("#{") !== -1 || interpolationSyntax === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX && t.image.indexOf("[=") !== -1) {
                result.parseValue(this, this.outputFormat);
            }
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public BooleanLiteral() : Expression {
        let t : Token;
        let result : Expression;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 95 /* FALSE */:
            {
                t = this.jj_consume_token(FMParserConstants.FALSE);
                result = new BooleanLiteral(false);
                break;
            }
            case 96 /* TRUE */:
            {
                t = this.jj_consume_token(FMParserConstants.TRUE);
                result = new BooleanLiteral(true);
                break;
            }
            default:
            this.jj_la1[19] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, t);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public HashLiteral() : HashLiteral {
        let begin : Token;
        let end : Token;
        let key : Expression;
        let value : Expression;
        let keys : Array<any> = <any>([]);
        let values : Array<any> = <any>([]);
        begin = this.jj_consume_token(FMParserConstants.OPENING_CURLY_BRACKET);
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 93 /* STRING_LITERAL */:
        case 94 /* RAW_STRING */:
        case 95 /* FALSE */:
        case 96 /* TRUE */:
        case 97 /* INTEGER */:
        case 98 /* DECIMAL */:
        case 99 /* DOT */:
        case 119 /* PLUS */:
        case 120 /* MINUS */:
        case 128 /* EXCLAM */:
        case 132 /* OPEN_BRACKET */:
        case 134 /* OPEN_PAREN */:
        case 136 /* OPENING_CURLY_BRACKET */:
        case 141 /* ID */:
            {
                key = this.Expression();
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 129 /* COMMA */:
                    {
                        this.jj_consume_token(FMParserConstants.COMMA);
                        break;
                    }
                    case 131 /* COLON */:
                    {
                        this.jj_consume_token(FMParserConstants.COLON);
                        break;
                    }
                    default:
                    this.jj_la1[20] = this.jj_gen;
                    this.jj_consume_token(-1);
                    throw new ParseException();
                }
                value = this.Expression();
                this.stringLiteralOnly(key);
                /* add */(keys.push(key)>0);
                /* add */(values.push(value)>0);
                label_7: while((true)) {
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 129 /* COMMA */:
                        {
                            break;
                        }
                        default:
                        this.jj_la1[21] = this.jj_gen;
                        break label_7;
                    }
                    this.jj_consume_token(FMParserConstants.COMMA);
                    key = this.Expression();
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 129 /* COMMA */:
                        {
                            this.jj_consume_token(FMParserConstants.COMMA);
                            break;
                        }
                        case 131 /* COLON */:
                        {
                            this.jj_consume_token(FMParserConstants.COLON);
                            break;
                        }
                        default:
                        this.jj_la1[22] = this.jj_gen;
                        this.jj_consume_token(-1);
                        throw new ParseException();
                    }
                    value = this.Expression();
                    this.stringLiteralOnly(key);
                    /* add */(keys.push(key)>0);
                    /* add */(values.push(value)>0);
                }
                break;
            }
            default:
            this.jj_la1[23] = this.jj_gen;
        }
        end = this.jj_consume_token(FMParserConstants.CLOSING_CURLY_BRACKET);
        let result : HashLiteral = new HashLiteral(keys, values);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, begin, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * A production representing the ${...} or [=...] that outputs a variable; should be called NormalInterpolation.
     * @return {DollarVariable}
     */
    public StringOutput() : DollarVariable {
        let exp : Expression;
        let begin : Token;
        let end : Token;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            {
                begin = this.jj_consume_token(FMParserConstants.DOLLAR_INTERPOLATION_OPENING);
                exp = this.Expression();
                end = this.jj_consume_token(FMParserConstants.CLOSING_CURLY_BRACKET);
                break;
            }
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
            {
                begin = this.jj_consume_token(FMParserConstants.SQUARE_BRACKET_INTERPOLATION_OPENING);
                exp = this.Expression();
                end = this.jj_consume_token(FMParserConstants.CLOSE_BRACKET);
                break;
            }
            default:
            this.jj_la1[24] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        this.notHashLiteral(exp, NonStringException.STRING_COERCABLE_TYPES_DESC);
        this.notListLiteral(exp, NonStringException.STRING_COERCABLE_TYPES_DESC);
        let result : DollarVariable = new DollarVariable(exp, this.escapedExpression(exp), this.outputFormat, this.autoEscaping);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, begin, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Should be called NumericalInterpolation
     * @return {NumericalOutput}
     */
    public NumericalOutput() : NumericalOutput {
        let exp : Expression;
        let fmt : Token = null;
        let begin : Token;
        let end : Token;
        begin = this.jj_consume_token(FMParserConstants.HASH_INTERPOLATION_OPENING);
        exp = this.Expression();
        this.numberLiteralOnly(exp);
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 130 /* SEMICOLON */:
            {
                this.jj_consume_token(FMParserConstants.SEMICOLON);
                fmt = this.jj_consume_token(FMParserConstants.ID);
                break;
            }
            default:
            this.jj_la1[25] = this.jj_gen;
        }
        end = this.jj_consume_token(FMParserConstants.CLOSING_CURLY_BRACKET);
        let autoEscOF : MarkupOutputFormat<any> = this.autoEscaping && (this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat)?<MarkupOutputFormat<any>>this.outputFormat:null;
        let result : NumericalOutput;
        if(fmt != null) {
            let minFrac : number = -1;
            let maxFrac : number = -1;
            let st : StringTokenizer = new StringTokenizer(fmt.image, "mM", true);
            let type : string = '-';
            while((st.hasMoreTokens())) {
                let token : string = st.nextToken();
                try {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(type) != '-'.charCodeAt(0)) {
                        switch((type).charCodeAt(0)) {
                        case 109 /* 'm' */:
                            if(minFrac !== -1) {
                                if(true) throw new ParseException("Invalid formatting string", this.template, fmt);
                            }
                            minFrac = /* parseInt */parseInt(token);
                            break;
                        case 77 /* 'M' */:
                            if(maxFrac !== -1) {
                                if(true) throw new ParseException("Invalid formatting string", this.template, fmt);
                            }
                            maxFrac = /* parseInt */parseInt(token);
                            break;
                        default:
                            {
                                if(true) throw new ParseException("Invalid formatting string", this.template, fmt);
                            }
                        }
                        type = '-';
                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(token,"m"))) {
                        type = 'm';
                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(token,"M"))) {
                        type = 'M';
                    } else {
                        {
                            if(true) throw new ParseException();
                        }
                    }
                } catch(__e) {
                    if(__e != null && __e instanceof <any>ParseException) {
                        let e : ParseException = <ParseException>__e;
                        {
                            if(true) throw new ParseException("Invalid format specifier " + fmt.image, this.template, fmt);
                        }
                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NumberFormatException") >= 0)) {
                        let e : Error = <Error>__e;
                        {
                            if(true) throw new ParseException("Invalid number in the format specifier " + fmt.image, this.template, fmt);
                        }
                    }
                }
            }
            if(maxFrac === -1) {
                if(minFrac === -1) {
                    {
                        if(true) throw new ParseException("Invalid format specification, at least one of m and M must be specified!", this.template, fmt);
                    }
                }
                maxFrac = minFrac;
            } else if(minFrac === -1) {
                minFrac = 0;
            }
            if(minFrac > maxFrac) {
                {
                    if(true) throw new ParseException("Invalid format specification, min cannot be greater than max!", this.template, fmt);
                }
            }
            if(minFrac > 50 || maxFrac > 50) {
                {
                    if(true) throw new ParseException("Cannot specify more than 50 fraction digits", this.template, fmt);
                }
            }
            result = new NumericalOutput(exp, minFrac, maxFrac, autoEscOF);
        } else {
            result = new NumericalOutput(exp, autoEscOF);
        }
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, begin, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public If() : TemplateElement {
        let start : Token;
        let end : Token;
        let t : Token;
        let condition : Expression;
        let children : TemplateElements;
        let ifBlock : IfBlock;
        let cblock : ConditionalBlock;
        start = this.jj_consume_token(FMParserConstants.IF);
        condition = this.Expression();
        end = this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        children = this.MixedContentElements();
        cblock = new ConditionalBlock(condition, children, ConditionalBlock.TYPE_IF);
        cblock.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(this.template, start, end, children);
        ifBlock = new IfBlock(cblock);
        label_8: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 9 /* ELSE_IF */:
                {
                    break;
                }
                default:
                this.jj_la1[26] = this.jj_gen;
                break label_8;
            }
            t = this.jj_consume_token(FMParserConstants.ELSE_IF);
            condition = this.Expression();
            end = this.LooseDirectiveEnd();
            children = this.MixedContentElements();
            cblock = new ConditionalBlock(condition, children, ConditionalBlock.TYPE_ELSE_IF);
            cblock.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(this.template, t, end, children);
            ifBlock.addBlock(cblock);
        }
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 54 /* ELSE */:
            {
                t = this.jj_consume_token(FMParserConstants.ELSE);
                children = this.MixedContentElements();
                cblock = new ConditionalBlock(null, children, ConditionalBlock.TYPE_ELSE);
                cblock.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(this.template, t, t, children);
                ifBlock.addBlock(cblock);
                break;
            }
            default:
            this.jj_la1[27] = this.jj_gen;
        }
        end = this.jj_consume_token(FMParserConstants.END_IF);
        ifBlock.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return ifBlock;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Attempt() : AttemptBlock {
        let start : Token;
        let end : Token;
        let children : TemplateElements;
        let recoveryBlock : RecoveryBlock;
        start = this.jj_consume_token(FMParserConstants.ATTEMPT);
        children = this.MixedContentElements();
        recoveryBlock = this.Recover();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 40 /* END_RECOVER */:
            {
                end = this.jj_consume_token(FMParserConstants.END_RECOVER);
                break;
            }
            case 41 /* END_ATTEMPT */:
            {
                end = this.jj_consume_token(FMParserConstants.END_ATTEMPT);
                break;
            }
            default:
            this.jj_la1[28] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        let result : AttemptBlock = new AttemptBlock(children, recoveryBlock);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Recover() : RecoveryBlock {
        let start : Token;
        let children : TemplateElements;
        start = this.jj_consume_token(FMParserConstants.RECOVER);
        children = this.MixedContentElements();
        let result : RecoveryBlock = new RecoveryBlock(children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(this.template, start, start, children);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public List() : TemplateElement {
        let exp : Expression;
        let loopVar : Token = null;
        let loopVar2 : Token = null;
        let start : Token;
        let end : Token;
        let childrendBeforeElse : TemplateElements;
        let elseOfList : ElseOfList = null;
        let iterCtx : FMParser.ParserIteratorBlockContext;
        start = this.jj_consume_token(FMParserConstants.LIST);
        exp = this.Expression();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 139 /* AS */:
            {
                this.jj_consume_token(FMParserConstants.AS);
                loopVar = this.jj_consume_token(FMParserConstants.ID);
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 129 /* COMMA */:
                    {
                        this.jj_consume_token(FMParserConstants.COMMA);
                        loopVar2 = this.jj_consume_token(FMParserConstants.ID);
                        break;
                    }
                    default:
                    this.jj_la1[29] = this.jj_gen;
                }
                break;
            }
            default:
            this.jj_la1[30] = this.jj_gen;
        }
        this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        iterCtx = this.pushIteratorBlockContext();
        if(loopVar != null) {
            iterCtx.loopVarName = loopVar.image;
            this.breakableDirectiveNesting++;
            this.continuableDirectiveNesting++;
            if(loopVar2 != null) {
                iterCtx.loopVar2Name = loopVar2.image;
                iterCtx.hashListing = true;
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(iterCtx.loopVar2Name,iterCtx.loopVarName))) {
                    {
                        if(true) throw new ParseException("The key and value loop variable names must differ, but both were: " + iterCtx.loopVarName, this.template, start);
                    }
                }
            }
        }
        childrendBeforeElse = this.MixedContentElements();
        if(loopVar != null) {
            this.breakableDirectiveNesting--;
            this.continuableDirectiveNesting--;
        } else if(iterCtx.kind !== FMParser.ITERATOR_BLOCK_KIND_ITEMS) {
            {
                if(true) throw new ParseException("#list must have either \"as loopVar\" parameter or nested #items that belongs to it.", this.template, start);
            }
        }
        this.popIteratorBlockContext();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 54 /* ELSE */:
            {
                elseOfList = this.ElseOfList();
                break;
            }
            default:
            this.jj_la1[31] = this.jj_gen;
        }
        end = this.jj_consume_token(FMParserConstants.END_LIST);
        let list : IteratorBlock = new IteratorBlock(exp, loopVar != null?loopVar.image:null, loopVar2 != null?loopVar2.image:null, childrendBeforeElse, iterCtx.hashListing, false);
        list.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        let result : TemplateElement;
        if(elseOfList == null) {
            result = list;
        } else {
            result = new ListElseContainer(list, elseOfList);
            result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public ElseOfList() : ElseOfList {
        let start : Token;
        let children : TemplateElements;
        start = this.jj_consume_token(FMParserConstants.ELSE);
        children = this.MixedContentElements();
        let result : ElseOfList = new ElseOfList(children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(this.template, start, start, children);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public ForEach() : IteratorBlock {
        let exp : Expression;
        let loopVar : Token;
        let start : Token;
        let end : Token;
        let children : TemplateElements;
        start = this.jj_consume_token(FMParserConstants.FOREACH);
        loopVar = this.jj_consume_token(FMParserConstants.ID);
        this.jj_consume_token(FMParserConstants.IN);
        exp = this.Expression();
        this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        let iterCtx : FMParser.ParserIteratorBlockContext = this.pushIteratorBlockContext();
        iterCtx.loopVarName = loopVar.image;
        iterCtx.kind = FMParser.ITERATOR_BLOCK_KIND_FOREACH;
        this.breakableDirectiveNesting++;
        this.continuableDirectiveNesting++;
        children = this.MixedContentElements();
        end = this.jj_consume_token(FMParserConstants.END_FOREACH);
        this.breakableDirectiveNesting--;
        this.continuableDirectiveNesting--;
        this.popIteratorBlockContext();
        let result : IteratorBlock = new IteratorBlock(exp, loopVar.image, null, children, false, true);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Items() : Items {
        let loopVar : Token;
        let loopVar2 : Token = null;
        let start : Token;
        let end : Token;
        let children : TemplateElements;
        let iterCtx : FMParser.ParserIteratorBlockContext;
        start = this.jj_consume_token(FMParserConstants.ITEMS);
        loopVar = this.jj_consume_token(FMParserConstants.ID);
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 129 /* COMMA */:
            {
                this.jj_consume_token(FMParserConstants.COMMA);
                loopVar2 = this.jj_consume_token(FMParserConstants.ID);
                break;
            }
            default:
            this.jj_la1[32] = this.jj_gen;
        }
        this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        iterCtx = this.peekIteratorBlockContext();
        if(iterCtx == null) {
            {
                if(true) throw new ParseException("#items must be inside a #list block.", this.template, start);
            }
        }
        if(iterCtx.loopVarName != null) {
            let msg : string;
            if(iterCtx.kind === FMParser.ITERATOR_BLOCK_KIND_FOREACH) {
                msg = this.forEachDirectiveSymbol() + " doesn\'t support nested #items.";
            } else if(iterCtx.kind === FMParser.ITERATOR_BLOCK_KIND_ITEMS) {
                msg = "Can\'t nest #items into each other when they belong to the same #list.";
            } else {
                msg = "The parent #list of the #items must not have \"as loopVar\" parameter.";
            }
            {
                if(true) throw new ParseException(msg, this.template, start);
            }
        }
        iterCtx.kind = FMParser.ITERATOR_BLOCK_KIND_ITEMS;
        iterCtx.loopVarName = loopVar.image;
        if(loopVar2 != null) {
            iterCtx.loopVar2Name = loopVar2.image;
            iterCtx.hashListing = true;
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(iterCtx.loopVar2Name,iterCtx.loopVarName))) {
                {
                    if(true) throw new ParseException("The key and value loop variable names must differ, but both were: " + iterCtx.loopVarName, this.template, start);
                }
            }
        }
        this.breakableDirectiveNesting++;
        this.continuableDirectiveNesting++;
        children = this.MixedContentElements();
        end = this.jj_consume_token(FMParserConstants.END_ITEMS);
        this.breakableDirectiveNesting--;
        this.continuableDirectiveNesting--;
        iterCtx.loopVarName = null;
        iterCtx.loopVar2Name = null;
        let result : Items = new Items(loopVar.image, loopVar2 != null?loopVar2.image:null, children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Sep() : Sep {
        let loopVar : Token;
        let start : Token;
        let end : Token = null;
        let children : TemplateElements;
        start = this.jj_consume_token(FMParserConstants.SEP);
        if(this.peekIteratorBlockContext() == null) {
            {
                if(true) throw new ParseException("#sep must be inside a #list (or " + this.forEachDirectiveSymbol() + ") block.", this.template, start);
            }
        }
        children = this.MixedContentElements();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 39 /* END_SEP */:
            {
                end = this.jj_consume_token(FMParserConstants.END_SEP);
                break;
            }
            default:
            this.jj_la1[33] = this.jj_gen;
        }
        let result : Sep = new Sep(children);
        if(end != null) {
            result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        } else {
            result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(this.template, start, start, children);
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Visit() : VisitNode {
        let start : Token;
        let end : Token;
        let targetNode : Expression;
        let namespaces : Expression = null;
        start = this.jj_consume_token(FMParserConstants.VISIT);
        targetNode = this.Expression();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 140 /* USING */:
            {
                this.jj_consume_token(FMParserConstants.USING);
                namespaces = this.Expression();
                break;
            }
            default:
            this.jj_la1[34] = this.jj_gen;
        }
        end = this.LooseDirectiveEnd();
        let result : VisitNode = new VisitNode(targetNode, namespaces);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Recurse() : RecurseNode {
        let start : Token;
        let end : Token = null;
        let node : Expression = null;
        let namespaces : Expression = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 67 /* SIMPLE_RECURSE */:
            {
                start = this.jj_consume_token(FMParserConstants.SIMPLE_RECURSE);
                break;
            }
            case 68 /* RECURSE */:
            {
                start = this.jj_consume_token(FMParserConstants.RECURSE);
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 93 /* STRING_LITERAL */:
                case 94 /* RAW_STRING */:
                case 95 /* FALSE */:
                case 96 /* TRUE */:
                case 97 /* INTEGER */:
                case 98 /* DECIMAL */:
                case 99 /* DOT */:
                case 119 /* PLUS */:
                case 120 /* MINUS */:
                case 128 /* EXCLAM */:
                case 132 /* OPEN_BRACKET */:
                case 134 /* OPEN_PAREN */:
                case 136 /* OPENING_CURLY_BRACKET */:
                case 141 /* ID */:
                    {
                        node = this.Expression();
                        break;
                    }
                    default:
                    this.jj_la1[35] = this.jj_gen;
                }
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 140 /* USING */:
                    {
                        this.jj_consume_token(FMParserConstants.USING);
                        namespaces = this.Expression();
                        break;
                    }
                    default:
                    this.jj_la1[36] = this.jj_gen;
                }
                end = this.LooseDirectiveEnd();
                break;
            }
            default:
            this.jj_la1[37] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        if(end == null) end = start;
        let result : RecurseNode = new RecurseNode(node, namespaces);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public FallBack() : FallbackInstruction {
        let tok : Token;
        tok = this.jj_consume_token(FMParserConstants.FALLBACK);
        if(!this.inMacro) {
            {
                if(true) throw new ParseException("Cannot fall back outside a macro.", this.template, tok);
            }
        }
        let result : FallbackInstruction = new FallbackInstruction();
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, tok, tok);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Production used to break out of a loop or a switch block.
     * @return {BreakInstruction}
     */
    public Break() : BreakInstruction {
        let start : Token;
        start = this.jj_consume_token(FMParserConstants.BREAK);
        if(this.breakableDirectiveNesting < 1) {
            {
                if(true) throw new ParseException(start.image + " must be nested inside a directive that supports it:  #list with \"as\", #items, #switch (or the deprecated " + this.forEachDirectiveSymbol() + ")", this.template, start);
            }
        }
        let result : BreakInstruction = new BreakInstruction();
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, start);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Production used to skip an iteration in a loop.
     * @return {ContinueInstruction}
     */
    public Continue() : ContinueInstruction {
        let start : Token;
        start = this.jj_consume_token(FMParserConstants.CONTINUE);
        if(this.continuableDirectiveNesting < 1) {
            {
                if(true) throw new ParseException(start.image + " must be nested inside a directive that supports it:  #list with \"as\", #items (or the deprecated " + this.forEachDirectiveSymbol() + ")", this.template, start);
            }
        }
        let result : ContinueInstruction = new ContinueInstruction();
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, start);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Production used to jump out of a macro.
     * The stop instruction terminates the rendering of the template.
     * @return {ReturnInstruction}
     */
    public Return() : ReturnInstruction {
        let start : Token;
        let end : Token = null;
        let exp : Expression = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 57 /* SIMPLE_RETURN */:
            {
                start = this.jj_consume_token(FMParserConstants.SIMPLE_RETURN);
                end = start;
                break;
            }
            case 26 /* RETURN */:
            {
                start = this.jj_consume_token(FMParserConstants.RETURN);
                exp = this.Expression();
                end = this.LooseDirectiveEnd();
                break;
            }
            default:
            this.jj_la1[38] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        if(this.inMacro) {
            if(exp != null) {
                {
                    if(true) throw new ParseException("A macro cannot return a value", this.template, start);
                }
            }
        } else if(this.inFunction) {
            if(exp == null) {
                {
                    if(true) throw new ParseException("A function must return a value", this.template, start);
                }
            }
        } else {
            if(exp == null) {
                {
                    if(true) throw new ParseException("A return instruction can only occur inside a macro or function", this.template, start);
                }
            }
        }
        let result : ReturnInstruction = new ReturnInstruction(exp);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Stop() : StopInstruction {
        let start : Token = null;
        let exp : Expression = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 58 /* HALT */:
            {
                start = this.jj_consume_token(FMParserConstants.HALT);
                break;
            }
            case 25 /* STOP */:
            {
                start = this.jj_consume_token(FMParserConstants.STOP);
                exp = this.Expression();
                this.LooseDirectiveEnd();
                break;
            }
            default:
            this.jj_la1[39] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        let result : StopInstruction = new StopInstruction(exp);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, start);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Nested() : TemplateElement {
        let t : Token;
        let end : Token;
        let bodyParameters : Array<any>;
        let result : BodyInstruction = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 65 /* SIMPLE_NESTED */:
            {
                t = this.jj_consume_token(FMParserConstants.SIMPLE_NESTED);
                result = new BodyInstruction(null);
                result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, t);
                break;
            }
            case 66 /* NESTED */:
            {
                t = this.jj_consume_token(FMParserConstants.NESTED);
                bodyParameters = this.PositionalArgs();
                end = this.LooseDirectiveEnd();
                result = new BodyInstruction(bodyParameters);
                result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, end);
                break;
            }
            default:
            this.jj_la1[40] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        if(!this.inMacro) {
            {
                if(true) throw new ParseException("Cannot use a " + t.image + " instruction outside a macro.", this.template, t);
            }
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Flush() : TemplateElement {
        let t : Token;
        t = this.jj_consume_token(FMParserConstants.FLUSH);
        let result : FlushInstruction = new FlushInstruction();
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, t);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Trim() : TemplateElement {
        let t : Token;
        let result : TrimInstruction = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 60 /* TRIM */:
            {
                t = this.jj_consume_token(FMParserConstants.TRIM);
                result = new TrimInstruction(true, true);
                break;
            }
            case 61 /* LTRIM */:
            {
                t = this.jj_consume_token(FMParserConstants.LTRIM);
                result = new TrimInstruction(true, false);
                break;
            }
            case 62 /* RTRIM */:
            {
                t = this.jj_consume_token(FMParserConstants.RTRIM);
                result = new TrimInstruction(false, true);
                break;
            }
            case 63 /* NOTRIM */:
            {
                t = this.jj_consume_token(FMParserConstants.NOTRIM);
                result = new TrimInstruction(false, false);
                break;
            }
            default:
            this.jj_la1[41] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, t);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Assign() : TemplateElement {
        let start : Token;
        let end : Token;
        let scope : number;
        let id : Token = null;
        let equalsOp : Token;
        let nameExp : Expression;
        let exp : Expression;
        let nsExp : Expression = null;
        let varName : string;
        let assignments : Array<any> = <any>([]);
        let ass : Assignment;
        let children : TemplateElements;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 16 /* ASSIGN */:
            {
                start = this.jj_consume_token(FMParserConstants.ASSIGN);
                scope = Assignment.NAMESPACE;
                break;
            }
            case 17 /* GLOBALASSIGN */:
            {
                start = this.jj_consume_token(FMParserConstants.GLOBALASSIGN);
                scope = Assignment.GLOBAL;
                break;
            }
            case 18 /* LOCALASSIGN */:
            {
                start = this.jj_consume_token(FMParserConstants.LOCALASSIGN);
                scope = Assignment.LOCAL;
                scope = Assignment.LOCAL;
                if(!this.inMacro && !this.inFunction) {
                    {
                        if(true) throw new ParseException("Local variable assigned outside a macro.", this.template, start);
                    }
                }
                break;
            }
            default:
            this.jj_la1[42] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        nameExp = this.IdentifierOrStringLiteral();
        varName = (nameExp != null && nameExp instanceof <any>StringLiteral)?(<StringLiteral>nameExp).getAsString():(<Identifier>nameExp).getName();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 105 /* EQUALS */:
        case 108 /* PLUS_EQUALS */:
        case 109 /* MINUS_EQUALS */:
        case 110 /* TIMES_EQUALS */:
        case 111 /* DIV_EQUALS */:
        case 112 /* MOD_EQUALS */:
        case 113 /* PLUS_PLUS */:
        case 114 /* MINUS_MINUS */:
            {
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 105 /* EQUALS */:
                case 108 /* PLUS_EQUALS */:
                case 109 /* MINUS_EQUALS */:
                case 110 /* TIMES_EQUALS */:
                case 111 /* DIV_EQUALS */:
                case 112 /* MOD_EQUALS */:
                    {
                        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                        case 105 /* EQUALS */:
                            {
                                this.jj_consume_token(FMParserConstants.EQUALS);
                                break;
                            }
                            case 108 /* PLUS_EQUALS */:
                            {
                                this.jj_consume_token(FMParserConstants.PLUS_EQUALS);
                                break;
                            }
                            case 109 /* MINUS_EQUALS */:
                            {
                                this.jj_consume_token(FMParserConstants.MINUS_EQUALS);
                                break;
                            }
                            case 110 /* TIMES_EQUALS */:
                            {
                                this.jj_consume_token(FMParserConstants.TIMES_EQUALS);
                                break;
                            }
                            case 111 /* DIV_EQUALS */:
                            {
                                this.jj_consume_token(FMParserConstants.DIV_EQUALS);
                                break;
                            }
                            case 112 /* MOD_EQUALS */:
                            {
                                this.jj_consume_token(FMParserConstants.MOD_EQUALS);
                                break;
                            }
                            default:
                            this.jj_la1[43] = this.jj_gen;
                            this.jj_consume_token(-1);
                            throw new ParseException();
                        }
                        equalsOp = this.token;
                        exp = this.Expression();
                        break;
                    }
                    case 113 /* PLUS_PLUS */:
                case 114 /* MINUS_MINUS */:
                    {
                        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                        case 113 /* PLUS_PLUS */:
                            {
                                this.jj_consume_token(FMParserConstants.PLUS_PLUS);
                                break;
                            }
                            case 114 /* MINUS_MINUS */:
                            {
                                this.jj_consume_token(FMParserConstants.MINUS_MINUS);
                                break;
                            }
                            default:
                            this.jj_la1[44] = this.jj_gen;
                            this.jj_consume_token(-1);
                            throw new ParseException();
                        }
                        equalsOp = this.token;
                        exp = null;
                        break;
                    }
                    default:
                    this.jj_la1[45] = this.jj_gen;
                    this.jj_consume_token(-1);
                    throw new ParseException();
                }
                ass = new Assignment(varName, equalsOp.kind, exp, scope);
                if(exp != null) {
                    ass.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, nameExp, exp);
                } else {
                    ass.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, nameExp, equalsOp);
                }
                /* add */(assignments.push(ass)>0);
                label_9: while((true)) {
                    if(this.jj_2_9(2147483647)) {
                    } else {
                        break label_9;
                    }
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 129 /* COMMA */:
                        {
                            this.jj_consume_token(FMParserConstants.COMMA);
                            break;
                        }
                        default:
                        this.jj_la1[46] = this.jj_gen;
                    }
                    nameExp = this.IdentifierOrStringLiteral();
                    varName = (nameExp != null && nameExp instanceof <any>StringLiteral)?(<StringLiteral>nameExp).getAsString():(<Identifier>nameExp).getName();
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 105 /* EQUALS */:
                    case 108 /* PLUS_EQUALS */:
                    case 109 /* MINUS_EQUALS */:
                    case 110 /* TIMES_EQUALS */:
                    case 111 /* DIV_EQUALS */:
                    case 112 /* MOD_EQUALS */:
                        {
                            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                            case 105 /* EQUALS */:
                                {
                                    this.jj_consume_token(FMParserConstants.EQUALS);
                                    break;
                                }
                                case 108 /* PLUS_EQUALS */:
                                {
                                    this.jj_consume_token(FMParserConstants.PLUS_EQUALS);
                                    break;
                                }
                                case 109 /* MINUS_EQUALS */:
                                {
                                    this.jj_consume_token(FMParserConstants.MINUS_EQUALS);
                                    break;
                                }
                                case 110 /* TIMES_EQUALS */:
                                {
                                    this.jj_consume_token(FMParserConstants.TIMES_EQUALS);
                                    break;
                                }
                                case 111 /* DIV_EQUALS */:
                                {
                                    this.jj_consume_token(FMParserConstants.DIV_EQUALS);
                                    break;
                                }
                                case 112 /* MOD_EQUALS */:
                                {
                                    this.jj_consume_token(FMParserConstants.MOD_EQUALS);
                                    break;
                                }
                                default:
                                this.jj_la1[47] = this.jj_gen;
                                this.jj_consume_token(-1);
                                throw new ParseException();
                            }
                            equalsOp = this.token;
                            exp = this.Expression();
                            break;
                        }
                        case 113 /* PLUS_PLUS */:
                    case 114 /* MINUS_MINUS */:
                        {
                            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                            case 113 /* PLUS_PLUS */:
                                {
                                    this.jj_consume_token(FMParserConstants.PLUS_PLUS);
                                    break;
                                }
                                case 114 /* MINUS_MINUS */:
                                {
                                    this.jj_consume_token(FMParserConstants.MINUS_MINUS);
                                    break;
                                }
                                default:
                                this.jj_la1[48] = this.jj_gen;
                                this.jj_consume_token(-1);
                                throw new ParseException();
                            }
                            equalsOp = this.token;
                            exp = null;
                            break;
                        }
                        default:
                        this.jj_la1[49] = this.jj_gen;
                        this.jj_consume_token(-1);
                        throw new ParseException();
                    }
                    ass = new Assignment(varName, equalsOp.kind, exp, scope);
                    if(exp != null) {
                        ass.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, nameExp, exp);
                    } else {
                        ass.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(this.template, nameExp, equalsOp);
                    }
                    /* add */(assignments.push(ass)>0);
                }
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 138 /* IN */:
                    {
                        id = this.jj_consume_token(FMParserConstants.IN);
                        nsExp = this.Expression();
                        if(scope !== Assignment.NAMESPACE) {
                            {
                                if(true) throw new ParseException("Cannot assign to namespace here.", this.template, id);
                            }
                        }
                        break;
                    }
                    default:
                    this.jj_la1[50] = this.jj_gen;
                }
                end = this.LooseDirectiveEnd();
                if(/* size */(<number>assignments.length) === 1) {
                    let a : Assignment = <Assignment>/* get */assignments[0];
                    a.setNamespaceExp(nsExp);
                    a.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
                    {
                        if("" != null) return a;
                    }
                } else {
                    let ai : AssignmentInstruction = new AssignmentInstruction(scope);
                    for(let i : number = 0; i < /* size */(<number>assignments.length); i++) {
                        ai.addAssignment(<Assignment>/* get */assignments[i]);
                    }
                    ai.setNamespaceExp(nsExp);
                    ai.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
                    {
                        if("" != null) return ai;
                    }
                }
                break;
            }
            case 138 /* IN */:
        case 147 /* DIRECTIVE_END */:
            {
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 138 /* IN */:
                    {
                        id = this.jj_consume_token(FMParserConstants.IN);
                        nsExp = this.Expression();
                        if(scope !== Assignment.NAMESPACE) {
                            {
                                if(true) throw new ParseException("Cannot assign to namespace here.", this.template, id);
                            }
                        }
                        break;
                    }
                    default:
                    this.jj_la1[51] = this.jj_gen;
                }
                this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
                children = this.MixedContentElements();
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 43 /* END_LOCAL */:
                    {
                        end = this.jj_consume_token(FMParserConstants.END_LOCAL);
                        if(scope !== Assignment.LOCAL) {
                            {
                                if(true) throw new ParseException("Mismatched assignment tags.", this.template, end);
                            }
                        }
                        break;
                    }
                    case 45 /* END_ASSIGN */:
                    {
                        end = this.jj_consume_token(FMParserConstants.END_ASSIGN);
                        if(scope !== Assignment.NAMESPACE) {
                            {
                                if(true) throw new ParseException("Mismatched assignment tags.", this.template, end);
                            }
                        }
                        break;
                    }
                    case 44 /* END_GLOBAL */:
                    {
                        end = this.jj_consume_token(FMParserConstants.END_GLOBAL);
                        if(scope !== Assignment.GLOBAL) {
                            if(true) throw new ParseException("Mismatched assignment tags", this.template, end);
                        }
                        break;
                    }
                    default:
                    this.jj_la1[52] = this.jj_gen;
                    this.jj_consume_token(-1);
                    throw new ParseException();
                }
                let ba : BlockAssignment = new BlockAssignment(children, varName, scope, nsExp, this.getMarkupOutputFormat());
                ba.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
                {
                    if("" != null) return ba;
                }
                break;
            }
            default:
            this.jj_la1[53] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Include() : Include {
        let nameExp : Expression;
        let att : Token;
        let start : Token;
        let end : Token;
        let exp : Expression;
        let parseExp : Expression = null;
        let encodingExp : Expression = null;
        let ignoreMissingExp : Expression = null;
        start = this.jj_consume_token(FMParserConstants._INCLUDE);
        nameExp = this.Expression();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 130 /* SEMICOLON */:
            {
                this.jj_consume_token(FMParserConstants.SEMICOLON);
                break;
            }
            default:
            this.jj_la1[54] = this.jj_gen;
        }
        label_10: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 141 /* ID */:
                {
                    break;
                }
                default:
                this.jj_la1[55] = this.jj_gen;
                break label_10;
            }
            att = this.jj_consume_token(FMParserConstants.ID);
            this.jj_consume_token(FMParserConstants.EQUALS);
            exp = this.Expression();
            let attString : string = att.image;
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(attString, "parse")) {
                parseExp = exp;
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(attString, "encoding")) {
                encodingExp = exp;
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(attString, "ignore_missing") || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(attString,"ignoreMissing"))) {
                this.token_source.checkNamingConvention$freemarker_core_Token(att);
                ignoreMissingExp = exp;
            } else {
                let correctedName : string = /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(attString,"ignoreMissing"))?"ignore_missing":null;
                {
                    if(true) throw new ParseException("Unsupported named #include parameter: \"" + attString + "\". Supported parameters are: \"parse\", \"encoding\", \"ignore_missing\"." + (correctedName == null?"":" Supporting camelCase parameter names is planned for FreeMarker 2.4.0; check if an update is available, and if it indeed supports camel case."), this.template, att);
                }
            }
        }
        end = this.LooseDirectiveEnd();
        let result : Include = new Include(this.template, nameExp, encodingExp, parseExp, ignoreMissingExp);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Import() : LibraryLoad {
        let start : Token;
        let end : Token;
        let ns : Token;
        let nameExp : Expression;
        start = this.jj_consume_token(FMParserConstants.IMPORT);
        nameExp = this.Expression();
        this.jj_consume_token(FMParserConstants.AS);
        ns = this.jj_consume_token(FMParserConstants.ID);
        end = this.LooseDirectiveEnd();
        let result : LibraryLoad = new LibraryLoad(this.template, nameExp, ns.image);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        this.template.addImport(result);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Macro() : Macro {
        let arg : Token;
        let start : Token;
        let end : Token;
        let nameExp : Expression;
        let name : string;
        let argNames : Array<any> = <any>([]);
        let args : Map<any, any> = <any>(new Map<any, any>());
        let defNames : Array<any> = <any>([]);
        let defValue : Expression = null;
        let lastIteratorBlockContexts : List<any>;
        let lastBreakableDirectiveNesting : number;
        let lastContiunableDirectiveNesting : number;
        let children : TemplateElements;
        let isFunction : boolean = false;
        let hasDefaults : boolean = false;
        let isCatchAll : boolean = false;
        let catchAll : string = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 22 /* MACRO */:
            {
                start = this.jj_consume_token(FMParserConstants.MACRO);
                break;
            }
            case 21 /* FUNCTION */:
            {
                start = this.jj_consume_token(FMParserConstants.FUNCTION);
                isFunction = true;
                break;
            }
            default:
            this.jj_la1[56] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        if(this.inMacro || this.inFunction) {
            {
                if(true) throw new ParseException("Macro or function definitions can\'t be nested into each other.", this.template, start);
            }
        }
        if(isFunction) this.inFunction = true; else this.inMacro = true;
        nameExp = this.IdentifierOrStringLiteral();
        name = (nameExp != null && nameExp instanceof <any>StringLiteral)?(<StringLiteral>nameExp).getAsString():(<Identifier>nameExp).getName();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 134 /* OPEN_PAREN */:
            {
                this.jj_consume_token(FMParserConstants.OPEN_PAREN);
                break;
            }
            default:
            this.jj_la1[57] = this.jj_gen;
        }
        label_11: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 141 /* ID */:
                {
                    break;
                }
                default:
                this.jj_la1[58] = this.jj_gen;
                break label_11;
            }
            arg = this.jj_consume_token(FMParserConstants.ID);
            defValue = null;
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 123 /* ELLIPSIS */:
                {
                    this.jj_consume_token(FMParserConstants.ELLIPSIS);
                    isCatchAll = true;
                    break;
                }
                default:
                this.jj_la1[59] = this.jj_gen;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 105 /* EQUALS */:
                {
                    this.jj_consume_token(FMParserConstants.EQUALS);
                    defValue = this.Expression();
                    /* add */(defNames.push(arg.image)>0);
                    hasDefaults = true;
                    break;
                }
                default:
                this.jj_la1[60] = this.jj_gen;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 129 /* COMMA */:
                {
                    this.jj_consume_token(FMParserConstants.COMMA);
                    break;
                }
                default:
                this.jj_la1[61] = this.jj_gen;
            }
            if(catchAll != null) {
                {
                    if(true) throw new ParseException("There may only be one \"catch-all\" parameter in a macro declaration, and it must be the last parameter.", this.template, arg);
                }
            }
            if(isCatchAll) {
                if(defValue != null) {
                    {
                        if(true) throw new ParseException("\"Catch-all\" macro parameter may not have a default value.", this.template, arg);
                    }
                }
                catchAll = arg.image;
            } else {
                /* add */(argNames.push(arg.image)>0);
                if(hasDefaults && defValue == null) {
                    {
                        if(true) throw new ParseException("In a macro declaration, parameters without a default value must all occur before the parameters with default values.", this.template, arg);
                    }
                }
                /* put */args.set(arg.image, defValue);
            }
        }
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 135 /* CLOSE_PAREN */:
            {
                this.jj_consume_token(FMParserConstants.CLOSE_PAREN);
                break;
            }
            default:
            this.jj_la1[62] = this.jj_gen;
        }
        this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        lastIteratorBlockContexts = this.iteratorBlockContexts;
        this.iteratorBlockContexts = null;
        if(this.incompatibleImprovements >= /*_TemplateAPI.VERSION_INT_2_3_23_$LI$()*/2003023) {
            lastBreakableDirectiveNesting = this.breakableDirectiveNesting;
            lastContiunableDirectiveNesting = this.continuableDirectiveNesting;
            this.breakableDirectiveNesting = 0;
            this.continuableDirectiveNesting = 0;
        } else {
            lastBreakableDirectiveNesting = 0;
            lastContiunableDirectiveNesting = 0;
        }
        children = this.MixedContentElements();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 47 /* END_MACRO */:
            {
                end = this.jj_consume_token(FMParserConstants.END_MACRO);
                if(isFunction) {
                    if(true) throw new ParseException("Expected function end tag here.", this.template, end);
                }
                break;
            }
            case 46 /* END_FUNCTION */:
            {
                end = this.jj_consume_token(FMParserConstants.END_FUNCTION);
                if(!isFunction) {
                    if(true) throw new ParseException("Expected macro end tag here.", this.template, end);
                }
                break;
            }
            default:
            this.jj_la1[63] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        this.iteratorBlockContexts = lastIteratorBlockContexts;
        if(this.incompatibleImprovements >= /*_TemplateAPI.VERSION_INT_2_3_23_$LI$()*/2003023) {
            this.breakableDirectiveNesting = lastBreakableDirectiveNesting;
            this.continuableDirectiveNesting = lastContiunableDirectiveNesting;
        }
        this.inMacro = this.inFunction = false;
        let result : Macro = new Macro(name, argNames, args, catchAll, isFunction, children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        this.template.addMacro(result);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Compress() : CompressedBlock {
        let children : TemplateElements;
        let start : Token;
        let end : Token;
        start = this.jj_consume_token(FMParserConstants.COMPRESS);
        children = this.MixedContentElements();
        end = this.jj_consume_token(FMParserConstants.END_COMPRESS);
        let cb : CompressedBlock = new CompressedBlock(children);
        cb.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return cb;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public UnifiedMacroTransform() : TemplateElement {
        let start : Token = null;
        let end : Token;
        let t : Token;
        let namedArgs : Map<any, any> = null;
        let positionalArgs : Array<any> = null;
        let bodyParameters : Array<any> = null;
        let startTagNameExp : Expression;
        let children : TemplateElements;
        let exp : Expression;
        let pushedCtxCount : number = 0;
        start = this.jj_consume_token(FMParserConstants.UNIFIED_CALL);
        exp = this.Expression();
        if((exp != null && exp instanceof <any>Identifier) || ((exp != null && exp instanceof <any>Dot) && (<Dot>exp).onlyHasIdentifiers())) {
            startTagNameExp = exp;
        } else {
            startTagNameExp = null;
        }
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 151 /* TERMINATING_WHITESPACE */:
            {
                this.jj_consume_token(FMParserConstants.TERMINATING_WHITESPACE);
                break;
            }
            default:
            this.jj_la1[64] = this.jj_gen;
        }
        if(this.jj_2_10(2147483647)) {
            namedArgs = this.NamedArgs();
        } else {
            positionalArgs = this.PositionalArgs();
        }
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 130 /* SEMICOLON */:
            {
                this.jj_consume_token(FMParserConstants.SEMICOLON);
                bodyParameters = <any>([]);
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 141 /* ID */:
                case 151 /* TERMINATING_WHITESPACE */:
                    {
                        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                        case 151 /* TERMINATING_WHITESPACE */:
                            {
                                this.jj_consume_token(FMParserConstants.TERMINATING_WHITESPACE);
                                break;
                            }
                            default:
                            this.jj_la1[65] = this.jj_gen;
                        }
                        t = this.jj_consume_token(FMParserConstants.ID);
                        /* add */(bodyParameters.push(t.image)>0);
                        label_12: while((true)) {
                            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                            case 129 /* COMMA */:
                            case 151 /* TERMINATING_WHITESPACE */:
                                {
                                    break;
                                }
                                default:
                                this.jj_la1[66] = this.jj_gen;
                                break label_12;
                            }
                            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                            case 151 /* TERMINATING_WHITESPACE */:
                                {
                                    this.jj_consume_token(FMParserConstants.TERMINATING_WHITESPACE);
                                    break;
                                }
                                default:
                                this.jj_la1[67] = this.jj_gen;
                            }
                            this.jj_consume_token(FMParserConstants.COMMA);
                            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                            case 151 /* TERMINATING_WHITESPACE */:
                                {
                                    this.jj_consume_token(FMParserConstants.TERMINATING_WHITESPACE);
                                    break;
                                }
                                default:
                                this.jj_la1[68] = this.jj_gen;
                            }
                            t = this.jj_consume_token(FMParserConstants.ID);
                            /* add */(bodyParameters.push(t.image)>0);
                        }
                        break;
                    }
                    default:
                    this.jj_la1[69] = this.jj_gen;
                }
                break;
            }
            default:
            this.jj_la1[70] = this.jj_gen;
        }
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 148 /* EMPTY_DIRECTIVE_END */:
            {
                end = this.jj_consume_token(FMParserConstants.EMPTY_DIRECTIVE_END);
                children = TemplateElements.EMPTY_$LI$();
                break;
            }
            case 147 /* DIRECTIVE_END */:
            {
                this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
                if(bodyParameters != null && this.iteratorBlockContexts != null && !/* isEmpty */(this.iteratorBlockContexts.length == 0)) {
                    let ctxsLen : number = /* size */(<number>this.iteratorBlockContexts.length);
                    let bodyParsLen : number = /* size */(<number>bodyParameters.length);
                    for(let bodyParIdx : number = 0; bodyParIdx < bodyParsLen; bodyParIdx++) {
                        let bodyParName : string = <string>/* get */bodyParameters[bodyParIdx];
                        walkCtxSack: for(let ctxIdx : number = ctxsLen - 1; ctxIdx >= 0; ctxIdx--) {
                            let ctx : FMParser.ParserIteratorBlockContext = /* get */this.iteratorBlockContexts[ctxIdx];
                            if(ctx.loopVarName != null && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ctx.loopVarName,bodyParName))) {
                                if(ctx.kind !== FMParser.ITERATOR_BLOCK_KIND_USER_DIRECTIVE) {
                                    let shadowingCtx : FMParser.ParserIteratorBlockContext = this.pushIteratorBlockContext();
                                    shadowingCtx.loopVarName = bodyParName;
                                    shadowingCtx.kind = FMParser.ITERATOR_BLOCK_KIND_USER_DIRECTIVE;
                                    pushedCtxCount++;
                                }
                                break walkCtxSack;
                            }
                        }
                    }
                }
                children = this.MixedContentElements();
                end = this.jj_consume_token(FMParserConstants.UNIFIED_CALL_END);
                for(let i : number = 0; i < pushedCtxCount; i++) {
                    this.popIteratorBlockContext();
                }
                let endTagName : string = end.image.substring(3, end.image.length - 1).trim();
                if(endTagName.length > 0) {
                    if(startTagNameExp == null) {
                        {
                            if(true) throw new ParseException("Expecting </@>", this.template, end);
                        }
                    } else {
                        let startTagName : string = startTagNameExp.getCanonicalForm();
                        if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(endTagName,startTagName))) {
                            {
                                if(true) throw new ParseException("Expecting </@> or </@" + startTagName + ">", this.template, end);
                            }
                        }
                    }
                }
                break;
            }
            default:
            this.jj_la1[71] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        let result : TemplateElement = (positionalArgs != null)?new UnifiedCall(exp, positionalArgs, children, bodyParameters):new UnifiedCall(exp, namedArgs, children, bodyParameters);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Call() : TemplateElement {
        let start : Token;
        let end : Token;
        let id : Token;
        let namedArgs : Map<any, any> = null;
        let positionalArgs : Array<any> = null;
        let macroName : Identifier = null;
        start = this.jj_consume_token(FMParserConstants.CALL);
        id = this.jj_consume_token(FMParserConstants.ID);
        macroName = new Identifier(id.image);
        macroName.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, id, id);
        if(this.jj_2_12(2147483647)) {
            namedArgs = this.NamedArgs();
        } else {
            if(this.jj_2_11(2147483647)) {
                this.jj_consume_token(FMParserConstants.OPEN_PAREN);
            } else {
            }
            positionalArgs = this.PositionalArgs();
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 135 /* CLOSE_PAREN */:
                {
                    this.jj_consume_token(FMParserConstants.CLOSE_PAREN);
                    break;
                }
                default:
                this.jj_la1[72] = this.jj_gen;
            }
        }
        end = this.LooseDirectiveEnd();
        let result : UnifiedCall = null;
        if(positionalArgs != null) {
            result = new UnifiedCall(macroName, positionalArgs, TemplateElements.EMPTY_$LI$(), null);
        } else {
            result = new UnifiedCall(macroName, namedArgs, TemplateElements.EMPTY_$LI$(), null);
        }
        result.legacySyntax = true;
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public NamedArgs() : Map<any, any> {
        let result : Map<any, any> = <any>(new Map<any, any>());
        let t : Token;
        let exp : Expression;
        label_13: while((true)) {
            t = this.jj_consume_token(FMParserConstants.ID);
            this.jj_consume_token(FMParserConstants.EQUALS);
            this.token_source.SwitchTo(FMParserConstants.NAMED_PARAMETER_EXPRESSION);
            this.token_source.inInvocation = true;
            exp = this.Expression();
            /* put */result.set(t.image, exp);
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 141 /* ID */:
                {
                    break;
                }
                default:
                this.jj_la1[73] = this.jj_gen;
                break label_13;
            }
        }
        this.token_source.inInvocation = false;
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public PositionalArgs() : Array<any> {
        let result : Array<any> = <any>([]);
        let arg : Expression;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 93 /* STRING_LITERAL */:
        case 94 /* RAW_STRING */:
        case 95 /* FALSE */:
        case 96 /* TRUE */:
        case 97 /* INTEGER */:
        case 98 /* DECIMAL */:
        case 99 /* DOT */:
        case 119 /* PLUS */:
        case 120 /* MINUS */:
        case 128 /* EXCLAM */:
        case 132 /* OPEN_BRACKET */:
        case 134 /* OPEN_PAREN */:
        case 136 /* OPENING_CURLY_BRACKET */:
        case 141 /* ID */:
            {
                arg = this.Expression();
                /* add */(result.push(arg)>0);
                label_14: while((true)) {
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 93 /* STRING_LITERAL */:
                    case 94 /* RAW_STRING */:
                    case 95 /* FALSE */:
                    case 96 /* TRUE */:
                    case 97 /* INTEGER */:
                    case 98 /* DECIMAL */:
                    case 99 /* DOT */:
                    case 119 /* PLUS */:
                    case 120 /* MINUS */:
                    case 128 /* EXCLAM */:
                    case 129 /* COMMA */:
                    case 132 /* OPEN_BRACKET */:
                    case 134 /* OPEN_PAREN */:
                    case 136 /* OPENING_CURLY_BRACKET */:
                    case 141 /* ID */:
                        {
                            break;
                        }
                        default:
                        this.jj_la1[74] = this.jj_gen;
                        break label_14;
                    }
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 129 /* COMMA */:
                        {
                            this.jj_consume_token(FMParserConstants.COMMA);
                            break;
                        }
                        default:
                        this.jj_la1[75] = this.jj_gen;
                    }
                    arg = this.Expression();
                    /* add */(result.push(arg)>0);
                }
                break;
            }
            default:
            this.jj_la1[76] = this.jj_gen;
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Comment() : Comment {
        let start : Token;
        let end : Token;
        let buf : StringBuilder = new StringBuilder("");
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 33 /* COMMENT */:
            {
                start = this.jj_consume_token(FMParserConstants.COMMENT);
                break;
            }
            case 34 /* TERSE_COMMENT */:
            {
                start = this.jj_consume_token(FMParserConstants.TERSE_COMMENT);
                break;
            }
            default:
            this.jj_la1[77] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        end = this.UnparsedContent(start, buf);
        let result : Comment = new Comment(buf.toString());
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public NoParse() : TextBlock {
        let start : Token;
        let end : Token;
        let buf : StringBuilder = new StringBuilder("");
        start = this.jj_consume_token(FMParserConstants.NOPARSE);
        end = this.UnparsedContent(start, buf);
        let result : TextBlock = new TextBlock(buf.toString(), true);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Transform() : TransformBlock {
        let start : Token;
        let end : Token;
        let argName : Token;
        let exp : Expression;
        let argExp : Expression;
        let children : TemplateElements = null;
        let args : Map<any, any> = null;
        start = this.jj_consume_token(FMParserConstants.TRANSFORM);
        exp = this.Expression();
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 130 /* SEMICOLON */:
            {
                this.jj_consume_token(FMParserConstants.SEMICOLON);
                break;
            }
            default:
            this.jj_la1[78] = this.jj_gen;
        }
        label_15: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 141 /* ID */:
                {
                    break;
                }
                default:
                this.jj_la1[79] = this.jj_gen;
                break label_15;
            }
            argName = this.jj_consume_token(FMParserConstants.ID);
            this.jj_consume_token(FMParserConstants.EQUALS);
            argExp = this.Expression();
            if(args == null) args = <any>(new Map<any, any>());
            /* put */args.set(argName.image, argExp);
        }
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 148 /* EMPTY_DIRECTIVE_END */:
            {
                end = this.jj_consume_token(FMParserConstants.EMPTY_DIRECTIVE_END);
                break;
            }
            case 147 /* DIRECTIVE_END */:
            {
                this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
                children = this.MixedContentElements();
                end = this.jj_consume_token(FMParserConstants.END_TRANSFORM);
                break;
            }
            default:
            this.jj_la1[80] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        let result : TransformBlock = new TransformBlock(exp, args, children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Switch() : SwitchBlock {
        let switchBlock : SwitchBlock;
        let ignoredSectionBeforeFirstCase : MixedContent = null;
        let caseIns : Case;
        let switchExp : Expression;
        let start : Token;
        let end : Token;
        let defaultFound : boolean = false;
        start = this.jj_consume_token(FMParserConstants.SWITCH);
        switchExp = this.Expression();
        this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 33 /* COMMENT */:
        case 34 /* TERSE_COMMENT */:
        case 79 /* STATIC_TEXT_WS */:
            {
                ignoredSectionBeforeFirstCase = this.WhitespaceAndComments();
                break;
            }
            default:
            this.jj_la1[81] = this.jj_gen;
        }
        this.breakableDirectiveNesting++;
        switchBlock = new SwitchBlock(switchExp, ignoredSectionBeforeFirstCase);
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 15 /* CASE */:
        case 64 /* DEFAUL */:
            {
                label_16: while((true)) {
                    caseIns = this.Case();
                    if(caseIns.condition == null) {
                        if(defaultFound) {
                            {
                                if(true) throw new ParseException("You can only have one default case in a switch statement", this.template, start);
                            }
                        }
                        defaultFound = true;
                    }
                    switchBlock.addCase(caseIns);
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 15 /* CASE */:
                    case 64 /* DEFAUL */:
                        {
                            break;
                        }
                        default:
                        this.jj_la1[82] = this.jj_gen;
                        break label_16;
                    }
                }
                switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                case 79 /* STATIC_TEXT_WS */:
                    {
                        this.jj_consume_token(FMParserConstants.STATIC_TEXT_WS);
                        break;
                    }
                    default:
                    this.jj_la1[83] = this.jj_gen;
                }
                break;
            }
            default:
            this.jj_la1[84] = this.jj_gen;
        }
        end = this.jj_consume_token(FMParserConstants.END_SWITCH);
        this.breakableDirectiveNesting--;
        switchBlock.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return switchBlock;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Case() : Case {
        let exp : Expression;
        let children : TemplateElements;
        let start : Token;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 15 /* CASE */:
            {
                start = this.jj_consume_token(FMParserConstants.CASE);
                exp = this.Expression();
                this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
                break;
            }
            case 64 /* DEFAUL */:
            {
                start = this.jj_consume_token(FMParserConstants.DEFAUL);
                exp = null;
                break;
            }
            default:
            this.jj_la1[85] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        children = this.MixedContentElements();
        let result : Case = new Case(exp, children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(this.template, start, start, children);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Escape() : EscapeBlock {
        let variable : Token;
        let start : Token;
        let end : Token;
        let escapeExpr : Expression;
        let children : TemplateElements;
        start = this.jj_consume_token(FMParserConstants.ESCAPE);
        if((this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat) && this.autoEscaping) {
            {
                if(true) throw new ParseException("Using the \"escape\" directive (legacy escaping) is not allowed when auto-escaping is on with a markup output format (" + this.outputFormat.getName() + "), to avoid confusion and double-escaping mistakes.", this.template, start);
            }
        }
        variable = this.jj_consume_token(FMParserConstants.ID);
        this.jj_consume_token(FMParserConstants.AS);
        escapeExpr = this.Expression();
        this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        let result : EscapeBlock = new EscapeBlock(variable.image, escapeExpr, this.escapedExpression(escapeExpr));
        /* addFirst */this.escapes.unshift(result);
        children = this.MixedContentElements();
        result.setContent(children);
        this.escapes./*removeFirst()*/shift();
        end = this.jj_consume_token(FMParserConstants.END_ESCAPE);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public NoEscape() : NoEscapeBlock {
        let start : Token;
        let end : Token;
        let children : TemplateElements;
        start = this.jj_consume_token(FMParserConstants.NOESCAPE);
        if(/* isEmpty */(this.escapes.length == 0)) {
            {
                if(true) throw new ParseException("#noescape with no matching #escape encountered.", this.template, start);
            }
        }
        let escape : any = this.escapes.shift();
        children = this.MixedContentElements();
        end = this.jj_consume_token(FMParserConstants.END_NOESCAPE);
        /* addFirst */this.escapes.unshift(escape);
        let result : NoEscapeBlock = new NoEscapeBlock(children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public OutputFormat() : OutputFormatBlock {
        let start : Token;
        let end : Token;
        let paramExp : Expression;
        let children : TemplateElements;
        let lastOutputFormat : OutputFormat;
        start = this.jj_consume_token(FMParserConstants.OUTPUTFORMAT);
        paramExp = this.Expression();
        this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
        if(!paramExp.isLiteral()) {
            {
                if(true) throw new ParseException("Parameter expression must be parse-time evaluable (constant): " + paramExp.getCanonicalForm(), paramExp);
            }
        }
        let paramTM : TemplateModel;
        try {
            paramTM = paramExp.eval(null);
        } catch(e) {
            {
                if(true) throw new ParseException("Could not evaluate expression (on parse-time): " + paramExp.getCanonicalForm() + "\nUnderlying cause: " + e, paramExp, e);
            }
        }
        let paramStr : string;
        if(paramTM != null && (paramTM["__interfaces"] != null && paramTM["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || paramTM.constructor != null && paramTM.constructor["__interfaces"] != null && paramTM.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
            try {
                paramStr = (<TemplateScalarModel><any>paramTM).getAsString();
            } catch(e) {
                {
                    if(true) throw new ParseException("Could not evaluate expression (on parse-time): " + paramExp.getCanonicalForm() + "\nUnderlying cause: " + e, paramExp, e);
                }
            }
        } else {
            {
                if(true) throw new ParseException("Parameter must be a string, but was: " + ClassUtil.getFTLTypeDescription(paramTM), paramExp);
            }
        }
        lastOutputFormat = this.outputFormat;
        try {
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(paramStr, "{")) {
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(paramStr, "}")) {
                    {
                        if(true) throw new ParseException("Output format name that starts with \'{\' must end with \'}\': " + paramStr, this.template, start);
                    }
                }
                let innerOutputFormat : OutputFormat = this.template.getConfiguration().getOutputFormat$java_lang_String(paramStr.substring(1, paramStr.length - 1));
                if(!(innerOutputFormat != null && innerOutputFormat instanceof <any>MarkupOutputFormat)) {
                    {
                        if(true) throw new ParseException("The output format inside the {...} must be a markup format, but was: " + innerOutputFormat, this.template, start);
                    }
                }
                if(!(this.outputFormat != null && this.outputFormat instanceof <any>MarkupOutputFormat)) {
                    {
                        if(true) throw new ParseException("The current output format must be a markup format when using {...}, but was: " + this.outputFormat, this.template, start);
                    }
                }
                this.outputFormat = new CombinedMarkupOutputFormat(<MarkupOutputFormat<any>>this.outputFormat, <MarkupOutputFormat<any>>innerOutputFormat);
            } else {
                this.outputFormat = this.template.getConfiguration().getOutputFormat$java_lang_String(paramStr);
            }
            this.recalculateAutoEscapingField();
        } catch(__e) {
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalArgumentException") >= 0)) {
                let e : Error = <Error>__e;
                {
                    if(true) throw new ParseException("Invalid format name: " + e.message, this.template, start, (<Error>null));
                }
            }
            if(__e != null && __e instanceof <any>UnregisteredOutputFormatException) {
                let e : UnregisteredOutputFormatException = <UnregisteredOutputFormatException>__e;
                {
                    if(true) throw new ParseException(e.message, this.template, start, (<Error>null));
                }
            }
        }
        children = this.MixedContentElements();
        end = this.jj_consume_token(FMParserConstants.END_OUTPUTFORMAT);
        let result : OutputFormatBlock = new OutputFormatBlock(children, paramExp);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        this.outputFormat = lastOutputFormat;
        this.recalculateAutoEscapingField();
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public AutoEsc() : AutoEscBlock {
        let start : Token;
        let end : Token;
        let children : TemplateElements;
        let lastAutoEscapingPolicy : number;
        start = this.jj_consume_token(FMParserConstants.AUTOESC);
        this.checkCurrentOutputFormatCanEscape(start);
        lastAutoEscapingPolicy = this.autoEscapingPolicy;
        this.autoEscapingPolicy = Configuration.ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY;
        this.recalculateAutoEscapingField();
        children = this.MixedContentElements();
        end = this.jj_consume_token(FMParserConstants.END_AUTOESC);
        let result : AutoEscBlock = new AutoEscBlock(children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        this.autoEscapingPolicy = lastAutoEscapingPolicy;
        this.recalculateAutoEscapingField();
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public NoAutoEsc() : NoAutoEscBlock {
        let start : Token;
        let end : Token;
        let children : TemplateElements;
        let lastAutoEscapingPolicy : number;
        start = this.jj_consume_token(FMParserConstants.NOAUTOESC);
        lastAutoEscapingPolicy = this.autoEscapingPolicy;
        this.autoEscapingPolicy = Configuration.DISABLE_AUTO_ESCAPING_POLICY;
        this.recalculateAutoEscapingField();
        children = this.MixedContentElements();
        end = this.jj_consume_token(FMParserConstants.END_NOAUTOESC);
        let result : NoAutoEscBlock = new NoAutoEscBlock(children);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        this.autoEscapingPolicy = lastAutoEscapingPolicy;
        this.recalculateAutoEscapingField();
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Production to terminate potentially empty elements. Either a ">" or "/>"
     * @return {Token}
     */
    public LooseDirectiveEnd() : Token {
        let t : Token;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 147 /* DIRECTIVE_END */:
            {
                t = this.jj_consume_token(FMParserConstants.DIRECTIVE_END);
                break;
            }
            case 148 /* EMPTY_DIRECTIVE_END */:
            {
                t = this.jj_consume_token(FMParserConstants.EMPTY_DIRECTIVE_END);
                break;
            }
            default:
            this.jj_la1[86] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        {
            if("" != null) return t;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public Setting() : PropertySetting {
        let start : Token;
        let end : Token;
        let key : Token;
        let value : Expression;
        start = this.jj_consume_token(FMParserConstants.SETTING);
        key = this.jj_consume_token(FMParserConstants.ID);
        this.jj_consume_token(FMParserConstants.EQUALS);
        value = this.Expression();
        end = this.LooseDirectiveEnd();
        this.token_source.checkNamingConvention$freemarker_core_Token(key);
        let result : PropertySetting = new PropertySetting(key, this.token_source, value, this.template.getConfiguration());
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, end);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * A production for FreeMarker directives.
     * @return {TemplateElement}
     */
    public FreemarkerDirective() : TemplateElement {
        let tp : TemplateElement;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 8 /* IF */:
            {
                tp = this.If();
                break;
            }
            case 10 /* LIST */:
            {
                tp = this.List();
                break;
            }
            case 13 /* FOREACH */:
            {
                tp = this.ForEach();
                break;
            }
            case 16 /* ASSIGN */:
        case 17 /* GLOBALASSIGN */:
        case 18 /* LOCALASSIGN */:
            {
                tp = this.Assign();
                break;
            }
            case 19 /* _INCLUDE */:
            {
                tp = this.Include();
                break;
            }
            case 20 /* IMPORT */:
            {
                tp = this.Import();
                break;
            }
            case 21 /* FUNCTION */:
        case 22 /* MACRO */:
            {
                tp = this.Macro();
                break;
            }
            case 32 /* COMPRESS */:
            {
                tp = this.Compress();
                break;
            }
            case 74 /* UNIFIED_CALL */:
            {
                tp = this.UnifiedMacroTransform();
                break;
            }
            case 11 /* ITEMS */:
            {
                tp = this.Items();
                break;
            }
            case 12 /* SEP */:
            {
                tp = this.Sep();
                break;
            }
            case 27 /* CALL */:
            {
                tp = this.Call();
                break;
            }
            case 33 /* COMMENT */:
        case 34 /* TERSE_COMMENT */:
            {
                tp = this.Comment();
                break;
            }
            case 35 /* NOPARSE */:
            {
                tp = this.NoParse();
                break;
            }
            case 23 /* TRANSFORM */:
            {
                tp = this.Transform();
                break;
            }
            case 14 /* SWITCH */:
            {
                tp = this.Switch();
                break;
            }
            case 28 /* SETTING */:
            {
                tp = this.Setting();
                break;
            }
            case 55 /* BREAK */:
            {
                tp = this.Break();
                break;
            }
            case 56 /* CONTINUE */:
            {
                tp = this.Continue();
                break;
            }
            case 26 /* RETURN */:
        case 57 /* SIMPLE_RETURN */:
            {
                tp = this.Return();
                break;
            }
            case 25 /* STOP */:
        case 58 /* HALT */:
            {
                tp = this.Stop();
                break;
            }
            case 59 /* FLUSH */:
            {
                tp = this.Flush();
                break;
            }
            case 60 /* TRIM */:
        case 61 /* LTRIM */:
        case 62 /* RTRIM */:
        case 63 /* NOTRIM */:
            {
                tp = this.Trim();
                break;
            }
            case 65 /* SIMPLE_NESTED */:
        case 66 /* NESTED */:
            {
                tp = this.Nested();
                break;
            }
            case 70 /* ESCAPE */:
            {
                tp = this.Escape();
                break;
            }
            case 72 /* NOESCAPE */:
            {
                tp = this.NoEscape();
                break;
            }
            case 24 /* VISIT */:
            {
                tp = this.Visit();
                break;
            }
            case 67 /* SIMPLE_RECURSE */:
        case 68 /* RECURSE */:
            {
                tp = this.Recurse();
                break;
            }
            case 69 /* FALLBACK */:
            {
                tp = this.FallBack();
                break;
            }
            case 6 /* ATTEMPT */:
            {
                tp = this.Attempt();
                break;
            }
            case 29 /* OUTPUTFORMAT */:
            {
                tp = this.OutputFormat();
                break;
            }
            case 30 /* AUTOESC */:
            {
                tp = this.AutoEsc();
                break;
            }
            case 31 /* NOAUTOESC */:
            {
                tp = this.NoAutoEsc();
                break;
            }
            default:
            this.jj_la1[87] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
        {
            if("" != null) return tp;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Production for a block of raw text
     * i.e. text that contains no
     * FreeMarker directives.
     * @return {TextBlock}
     */
    public PCData() : TextBlock {
        let buf : StringBuilder = new StringBuilder("");
        let t : Token = null;
        let start : Token = null;
        let prevToken : Token = null;
        label_17: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
                {
                    t = this.jj_consume_token(FMParserConstants.STATIC_TEXT_WS);
                    break;
                }
                case 80 /* STATIC_TEXT_NON_WS */:
                {
                    t = this.jj_consume_token(FMParserConstants.STATIC_TEXT_NON_WS);
                    break;
                }
                case 81 /* STATIC_TEXT_FALSE_ALARM */:
                {
                    t = this.jj_consume_token(FMParserConstants.STATIC_TEXT_FALSE_ALARM);
                    break;
                }
                default:
                this.jj_la1[88] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            buf.append(t.image);
            if(start == null) start = t;
            if(prevToken != null) prevToken.next = null;
            prevToken = t;
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
                {
                    break;
                }
                default:
                this.jj_la1[89] = this.jj_gen;
                break label_17;
            }
        }
        if(this.stripText && this.mixedContentNesting === 1 && !this.preventStrippings) {
            if("" != null) return null;
        }
        let result : TextBlock = new TextBlock(buf.toString(), false);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, start, t);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public WhitespaceText() : TextBlock {
        let t : Token = null;
        let start : Token = null;
        t = this.jj_consume_token(FMParserConstants.STATIC_TEXT_WS);
        if(this.stripText && this.mixedContentNesting === 1 && !this.preventStrippings) {
            if("" != null) return null;
        }
        let result : TextBlock = new TextBlock(t.image, false);
        result.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(this.template, t, t);
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Production for dealing with unparsed content,
     * i.e. what is inside a comment or noparse tag.
     * It returns the ending token. The content
     * of the tag is put in buf.
     * @param {Token} start
     * @param {StringBuilder} buf
     * @return {Token}
     */
    public UnparsedContent(start : Token, buf : StringBuilder) : Token {
        let t : Token;
        label_18: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 155 /* KEEP_GOING */:
                {
                    t = this.jj_consume_token(FMParserConstants.KEEP_GOING);
                    break;
                }
                case 154 /* MAYBE_END */:
                {
                    t = this.jj_consume_token(FMParserConstants.MAYBE_END);
                    break;
                }
                case 153 /* TERSE_COMMENT_END */:
                {
                    t = this.jj_consume_token(FMParserConstants.TERSE_COMMENT_END);
                    break;
                }
                case 156 /* LONE_LESS_THAN_OR_DASH */:
                {
                    t = this.jj_consume_token(FMParserConstants.LONE_LESS_THAN_OR_DASH);
                    break;
                }
                default:
                this.jj_la1[90] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            buf.append(t.image);
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 153 /* TERSE_COMMENT_END */:
            case 154 /* MAYBE_END */:
            case 155 /* KEEP_GOING */:
            case 156 /* LONE_LESS_THAN_OR_DASH */:
                {
                    break;
                }
                default:
                this.jj_la1[91] = this.jj_gen;
                break label_18;
            }
        }
        buf.setLength(buf.length() - t.image.length);
        if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(t.image, ";") && _TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_template_Template(this.template) >= /*_TemplateAPI.VERSION_INT_2_3_21_$LI$()*/2003021) {
            {
                if(true) throw new ParseException("Unclosed \"" + start.image + "\"", this.template, start);
            }
        }
        {
            if("" != null) return t;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public MixedContentElements() : TemplateElements {
        let childBuffer : TemplateElement[] = null;
        let childCount : number = 0;
        let elem : TemplateElement;
        this.mixedContentNesting++;
        label_19: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 6 /* ATTEMPT */:
            case 8 /* IF */:
            case 10 /* LIST */:
            case 11 /* ITEMS */:
            case 12 /* SEP */:
            case 13 /* FOREACH */:
            case 14 /* SWITCH */:
            case 16 /* ASSIGN */:
            case 17 /* GLOBALASSIGN */:
            case 18 /* LOCALASSIGN */:
            case 19 /* _INCLUDE */:
            case 20 /* IMPORT */:
            case 21 /* FUNCTION */:
            case 22 /* MACRO */:
            case 23 /* TRANSFORM */:
            case 24 /* VISIT */:
            case 25 /* STOP */:
            case 26 /* RETURN */:
            case 27 /* CALL */:
            case 28 /* SETTING */:
            case 29 /* OUTPUTFORMAT */:
            case 30 /* AUTOESC */:
            case 31 /* NOAUTOESC */:
            case 32 /* COMPRESS */:
            case 33 /* COMMENT */:
            case 34 /* TERSE_COMMENT */:
            case 35 /* NOPARSE */:
            case 55 /* BREAK */:
            case 56 /* CONTINUE */:
            case 57 /* SIMPLE_RETURN */:
            case 58 /* HALT */:
            case 59 /* FLUSH */:
            case 60 /* TRIM */:
            case 61 /* LTRIM */:
            case 62 /* RTRIM */:
            case 63 /* NOTRIM */:
            case 65 /* SIMPLE_NESTED */:
            case 66 /* NESTED */:
            case 67 /* SIMPLE_RECURSE */:
            case 68 /* RECURSE */:
            case 69 /* FALLBACK */:
            case 70 /* ESCAPE */:
            case 72 /* NOESCAPE */:
            case 74 /* UNIFIED_CALL */:
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
            case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 83 /* HASH_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    break;
                }
                default:
                this.jj_la1[92] = this.jj_gen;
                break label_19;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
                {
                    elem = this.PCData();
                    break;
                }
                case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    elem = this.StringOutput();
                    break;
                }
                case 83 /* HASH_INTERPOLATION_OPENING */:
                {
                    elem = this.NumericalOutput();
                    break;
                }
                case 6 /* ATTEMPT */:
            case 8 /* IF */:
            case 10 /* LIST */:
            case 11 /* ITEMS */:
            case 12 /* SEP */:
            case 13 /* FOREACH */:
            case 14 /* SWITCH */:
            case 16 /* ASSIGN */:
            case 17 /* GLOBALASSIGN */:
            case 18 /* LOCALASSIGN */:
            case 19 /* _INCLUDE */:
            case 20 /* IMPORT */:
            case 21 /* FUNCTION */:
            case 22 /* MACRO */:
            case 23 /* TRANSFORM */:
            case 24 /* VISIT */:
            case 25 /* STOP */:
            case 26 /* RETURN */:
            case 27 /* CALL */:
            case 28 /* SETTING */:
            case 29 /* OUTPUTFORMAT */:
            case 30 /* AUTOESC */:
            case 31 /* NOAUTOESC */:
            case 32 /* COMPRESS */:
            case 33 /* COMMENT */:
            case 34 /* TERSE_COMMENT */:
            case 35 /* NOPARSE */:
            case 55 /* BREAK */:
            case 56 /* CONTINUE */:
            case 57 /* SIMPLE_RETURN */:
            case 58 /* HALT */:
            case 59 /* FLUSH */:
            case 60 /* TRIM */:
            case 61 /* LTRIM */:
            case 62 /* RTRIM */:
            case 63 /* NOTRIM */:
            case 65 /* SIMPLE_NESTED */:
            case 66 /* NESTED */:
            case 67 /* SIMPLE_RECURSE */:
            case 68 /* RECURSE */:
            case 69 /* FALLBACK */:
            case 70 /* ESCAPE */:
            case 72 /* NOESCAPE */:
            case 74 /* UNIFIED_CALL */:
                {
                    elem = this.FreemarkerDirective();
                    break;
                }
                default:
                this.jj_la1[93] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            if(elem != null) {
                childCount++;
                if(childBuffer == null) {
                    childBuffer = (s => { let a=[]; while(s-->0) a.push(null); return a; })(16);
                } else if(childBuffer.length < childCount) {
                    let newChildBuffer : TemplateElement[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(childCount * 2);
                    for(let i : number = 0; i < childBuffer.length; i++) {
                        newChildBuffer[i] = childBuffer[i];
                    }
                    childBuffer = newChildBuffer;
                }
                childBuffer[childCount - 1] = elem;
            }
        }
        this.mixedContentNesting--;
        {
            if("" != null) return childBuffer != null?new TemplateElements(childBuffer, childCount):TemplateElements.EMPTY_$LI$();
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Not used anymore; kept for backward compatibility.
     * 
     * @deprecated Use {link #MixedContentElements} instead.
     * @return {MixedContent}
     */
    public MixedContent() : MixedContent {
        let mixedContent : MixedContent = new MixedContent();
        let elem : TemplateElement;
        let begin : TemplateElement = null;
        this.mixedContentNesting++;
        label_20: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
                {
                    elem = this.PCData();
                    break;
                }
                case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    elem = this.StringOutput();
                    break;
                }
                case 83 /* HASH_INTERPOLATION_OPENING */:
                {
                    elem = this.NumericalOutput();
                    break;
                }
                case 6 /* ATTEMPT */:
            case 8 /* IF */:
            case 10 /* LIST */:
            case 11 /* ITEMS */:
            case 12 /* SEP */:
            case 13 /* FOREACH */:
            case 14 /* SWITCH */:
            case 16 /* ASSIGN */:
            case 17 /* GLOBALASSIGN */:
            case 18 /* LOCALASSIGN */:
            case 19 /* _INCLUDE */:
            case 20 /* IMPORT */:
            case 21 /* FUNCTION */:
            case 22 /* MACRO */:
            case 23 /* TRANSFORM */:
            case 24 /* VISIT */:
            case 25 /* STOP */:
            case 26 /* RETURN */:
            case 27 /* CALL */:
            case 28 /* SETTING */:
            case 29 /* OUTPUTFORMAT */:
            case 30 /* AUTOESC */:
            case 31 /* NOAUTOESC */:
            case 32 /* COMPRESS */:
            case 33 /* COMMENT */:
            case 34 /* TERSE_COMMENT */:
            case 35 /* NOPARSE */:
            case 55 /* BREAK */:
            case 56 /* CONTINUE */:
            case 57 /* SIMPLE_RETURN */:
            case 58 /* HALT */:
            case 59 /* FLUSH */:
            case 60 /* TRIM */:
            case 61 /* LTRIM */:
            case 62 /* RTRIM */:
            case 63 /* NOTRIM */:
            case 65 /* SIMPLE_NESTED */:
            case 66 /* NESTED */:
            case 67 /* SIMPLE_RECURSE */:
            case 68 /* RECURSE */:
            case 69 /* FALLBACK */:
            case 70 /* ESCAPE */:
            case 72 /* NOESCAPE */:
            case 74 /* UNIFIED_CALL */:
                {
                    elem = this.FreemarkerDirective();
                    break;
                }
                default:
                this.jj_la1[94] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            if(begin == null) {
                begin = elem;
            }
            mixedContent.addElement$freemarker_core_TemplateElement(elem);
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 6 /* ATTEMPT */:
            case 8 /* IF */:
            case 10 /* LIST */:
            case 11 /* ITEMS */:
            case 12 /* SEP */:
            case 13 /* FOREACH */:
            case 14 /* SWITCH */:
            case 16 /* ASSIGN */:
            case 17 /* GLOBALASSIGN */:
            case 18 /* LOCALASSIGN */:
            case 19 /* _INCLUDE */:
            case 20 /* IMPORT */:
            case 21 /* FUNCTION */:
            case 22 /* MACRO */:
            case 23 /* TRANSFORM */:
            case 24 /* VISIT */:
            case 25 /* STOP */:
            case 26 /* RETURN */:
            case 27 /* CALL */:
            case 28 /* SETTING */:
            case 29 /* OUTPUTFORMAT */:
            case 30 /* AUTOESC */:
            case 31 /* NOAUTOESC */:
            case 32 /* COMPRESS */:
            case 33 /* COMMENT */:
            case 34 /* TERSE_COMMENT */:
            case 35 /* NOPARSE */:
            case 55 /* BREAK */:
            case 56 /* CONTINUE */:
            case 57 /* SIMPLE_RETURN */:
            case 58 /* HALT */:
            case 59 /* FLUSH */:
            case 60 /* TRIM */:
            case 61 /* LTRIM */:
            case 62 /* RTRIM */:
            case 63 /* NOTRIM */:
            case 65 /* SIMPLE_NESTED */:
            case 66 /* NESTED */:
            case 67 /* SIMPLE_RECURSE */:
            case 68 /* RECURSE */:
            case 69 /* FALLBACK */:
            case 70 /* ESCAPE */:
            case 72 /* NOESCAPE */:
            case 74 /* UNIFIED_CALL */:
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
            case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 83 /* HASH_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    break;
                }
                default:
                this.jj_la1[95] = this.jj_gen;
                break label_20;
            }
        }
        this.mixedContentNesting--;
        mixedContent.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, begin, elem);
        {
            if("" != null) return mixedContent;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Not used anymore; kept for backward compatibility.
     * 
     * <p>A production for a block of optional content.
     * Returns an empty Text block if there is no
     * content.
     * 
     * @deprecated Use {link #MixedContentElements} instead.
     * @return {TemplateElement}
     */
    public OptionalBlock() : TemplateElement {
        let tp : TemplateElement = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 6 /* ATTEMPT */:
        case 8 /* IF */:
        case 10 /* LIST */:
        case 11 /* ITEMS */:
        case 12 /* SEP */:
        case 13 /* FOREACH */:
        case 14 /* SWITCH */:
        case 16 /* ASSIGN */:
        case 17 /* GLOBALASSIGN */:
        case 18 /* LOCALASSIGN */:
        case 19 /* _INCLUDE */:
        case 20 /* IMPORT */:
        case 21 /* FUNCTION */:
        case 22 /* MACRO */:
        case 23 /* TRANSFORM */:
        case 24 /* VISIT */:
        case 25 /* STOP */:
        case 26 /* RETURN */:
        case 27 /* CALL */:
        case 28 /* SETTING */:
        case 29 /* OUTPUTFORMAT */:
        case 30 /* AUTOESC */:
        case 31 /* NOAUTOESC */:
        case 32 /* COMPRESS */:
        case 33 /* COMMENT */:
        case 34 /* TERSE_COMMENT */:
        case 35 /* NOPARSE */:
        case 55 /* BREAK */:
        case 56 /* CONTINUE */:
        case 57 /* SIMPLE_RETURN */:
        case 58 /* HALT */:
        case 59 /* FLUSH */:
        case 60 /* TRIM */:
        case 61 /* LTRIM */:
        case 62 /* RTRIM */:
        case 63 /* NOTRIM */:
        case 65 /* SIMPLE_NESTED */:
        case 66 /* NESTED */:
        case 67 /* SIMPLE_RECURSE */:
        case 68 /* RECURSE */:
        case 69 /* FALLBACK */:
        case 70 /* ESCAPE */:
        case 72 /* NOESCAPE */:
        case 74 /* UNIFIED_CALL */:
        case 79 /* STATIC_TEXT_WS */:
        case 80 /* STATIC_TEXT_NON_WS */:
        case 81 /* STATIC_TEXT_FALSE_ALARM */:
        case 82 /* DOLLAR_INTERPOLATION_OPENING */:
        case 83 /* HASH_INTERPOLATION_OPENING */:
        case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
            {
                tp = this.MixedContent();
                break;
            }
            default:
            this.jj_la1[96] = this.jj_gen;
        }
        {
            if("" != null) return tp != null?tp:new TextBlock(CollectionUtils.EMPTY_CHAR_ARRAY_$LI$(), false);
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * A production freemarker text that may contain
     * ${...} and #{...} but no directives.
     * @return {TemplateElement}
     */
    public FreeMarkerText() : TemplateElement {
        let nodes : MixedContent = new MixedContent();
        let elem : TemplateElement;
        let begin : TemplateElement = null;
        label_21: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
                {
                    elem = this.PCData();
                    break;
                }
                case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    elem = this.StringOutput();
                    break;
                }
                case 83 /* HASH_INTERPOLATION_OPENING */:
                {
                    elem = this.NumericalOutput();
                    break;
                }
                default:
                this.jj_la1[97] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            if(begin == null) {
                begin = elem;
            }
            nodes.addChild$freemarker_core_TemplateElement(elem);
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
            case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 83 /* HASH_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    break;
                }
                default:
                this.jj_la1[98] = this.jj_gen;
                break label_21;
            }
        }
        nodes.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, begin, elem);
        {
            if("" != null) return nodes;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * To be used between tags that in theory has nothing between, such between #switch and the first #case.
     * @return {MixedContent}
     */
    public WhitespaceAndComments() : MixedContent {
        let nodes : MixedContent = new MixedContent();
        let elem : TemplateElement;
        let begin : TemplateElement = null;
        label_22: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
                {
                    elem = this.WhitespaceText();
                    break;
                }
                case 33 /* COMMENT */:
            case 34 /* TERSE_COMMENT */:
                {
                    elem = this.Comment();
                    break;
                }
                default:
                this.jj_la1[99] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
            if(elem != null) {
                if(begin == null) {
                    begin = elem;
                }
                nodes.addChild$freemarker_core_TemplateElement(elem);
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 33 /* COMMENT */:
            case 34 /* TERSE_COMMENT */:
            case 79 /* STATIC_TEXT_WS */:
                {
                    break;
                }
                default:
                this.jj_la1[100] = this.jj_gen;
                break label_22;
            }
        }
        if(begin == null || this.stripWhitespace && !this.preventStrippings && nodes.getChildCount() === 1 && (nodes.getChild(0) != null && nodes.getChild(0) instanceof <any>TextBlock)) {
            {
                if("" != null) return null;
            }
        }
        nodes.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.template, begin, elem);
        {
            if("" != null) return nodes;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    public HeaderElement() {
        let key : Token;
        let exp : Expression = null;
        let autoEscRequester : Token = null;
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 79 /* STATIC_TEXT_WS */:
            {
                this.jj_consume_token(FMParserConstants.STATIC_TEXT_WS);
                break;
            }
            default:
            this.jj_la1[101] = this.jj_gen;
        }
        switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
        case 77 /* TRIVIAL_FTL_HEADER */:
            {
                this.jj_consume_token(FMParserConstants.TRIVIAL_FTL_HEADER);
                break;
            }
            case 76 /* FTL_HEADER */:
            {
                this.jj_consume_token(FMParserConstants.FTL_HEADER);
                label_23: while((true)) {
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 141 /* ID */:
                        {
                            break;
                        }
                        default:
                        this.jj_la1[102] = this.jj_gen;
                        break label_23;
                    }
                    key = this.jj_consume_token(FMParserConstants.ID);
                    this.jj_consume_token(FMParserConstants.EQUALS);
                    exp = this.Expression();
                    this.token_source.checkNamingConvention$freemarker_core_Token(key);
                    let ks : string = key.image;
                    let value : TemplateModel = null;
                    try {
                        value = exp.eval(null);
                    } catch(e) {
                        {
                            if(true) throw new ParseException("Could not evaluate expression (on parse-time): " + exp.getCanonicalForm() + " \nUnderlying cause: " + e, exp, e);
                        }
                    }
                    let vs : string = null;
                    if(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
                        try {
                            vs = (<TemplateScalarModel><any>exp).getAsString();
                        } catch(tme) {
                        }
                    }
                    if(this.template != null) {
                        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "encoding")) {
                            if(vs == null) {
                                {
                                    if(true) throw new ParseException("Expected a string constant for \"" + ks + "\".", exp);
                                }
                            }
                            let encoding : string = this.template.getEncoding();
                            if(encoding != null && !/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(encoding, vs)) {
                                {
                                    if(true) throw new Template.WrongEncodingException(vs, encoding);
                                }
                            }
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "STRIP_WHITESPACE") || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"stripWhitespace"))) {
                            this.stripWhitespace = this.getBoolean(exp, true);
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "STRIP_TEXT") || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"stripText"))) {
                            this.stripText = this.getBoolean(exp, true);
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "STRICT_SYNTAX") || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"strictSyntax"))) {
                            this.token_source.strictSyntaxMode = this.getBoolean(exp, true);
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "auto_esc") || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"autoEsc"))) {
                            if(this.getBoolean(exp, false)) {
                                autoEscRequester = key;
                                this.autoEscapingPolicy = Configuration.ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY;
                            } else {
                                this.autoEscapingPolicy = Configuration.DISABLE_AUTO_ESCAPING_POLICY;
                            }
                            this.recalculateAutoEscapingField();
                            _TemplateAPI.setAutoEscaping(this.template, this.autoEscaping);
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "output_format") || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"outputFormat"))) {
                            if(vs == null) {
                                {
                                    if(true) throw new ParseException("Expected a string constant for \"" + ks + "\".", exp);
                                }
                            }
                            try {
                                this.outputFormat = this.template.getConfiguration().getOutputFormat$java_lang_String(vs);
                            } catch(__e) {
                                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalArgumentException") >= 0)) {
                                    let e : Error = <Error>__e;
                                    {
                                        if(true) throw new ParseException("Invalid format name: " + e.message, exp, (<Error>null));
                                    }
                                }
                                if(__e != null && __e instanceof <any>UnregisteredOutputFormatException) {
                                    let e : UnregisteredOutputFormatException = <UnregisteredOutputFormatException>__e;
                                    {
                                        if(true) throw new ParseException(e.message, exp, (<Error>null));
                                    }
                                }
                            }
                            this.recalculateAutoEscapingField();
                            _TemplateAPI.setOutputFormat(this.template, this.outputFormat);
                            _TemplateAPI.setAutoEscaping(this.template, this.autoEscaping);
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "ns_prefixes") || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"nsPrefixes"))) {
                            if(!(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0))) {
                                {
                                    if(true) throw new ParseException("Expecting a hash of prefixes to namespace URI\'s.", exp);
                                }
                            }
                            let prefixMap : TemplateHashModelEx = <TemplateHashModelEx><any>value;
                            try {
                                let keys : TemplateCollectionModel = prefixMap.keys();
                                for(let it : TemplateModelIterator = keys.iterator(); it.hasNext(); ) {
                                    let prefix : string = (<TemplateScalarModel><any>it.next()).getAsString();
                                    let valueModel : TemplateModel = prefixMap['get$java_lang_String'](prefix);
                                    if(!(valueModel != null && (valueModel["__interfaces"] != null && valueModel["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || valueModel.constructor != null && valueModel.constructor["__interfaces"] != null && valueModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                                        {
                                            if(true) throw new ParseException("Non-string value in prefix to namespace hash.", exp);
                                        }
                                    }
                                    let nsURI : string = (<TemplateScalarModel><any>valueModel).getAsString();
                                    try {
                                        this.template.addPrefixNSMapping(prefix, nsURI);
                                    } catch(iae) {
                                        {
                                            if(true) throw new ParseException(iae.message, exp);
                                        }
                                    }
                                }
                            } catch(tme) {
                            }
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(ks, "attributes")) {
                            if(!(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0))) {
                                {
                                    if(true) throw new ParseException("Expecting a hash of attribute names to values.", exp);
                                }
                            }
                            let attributeMap : TemplateHashModelEx = <TemplateHashModelEx><any>value;
                            try {
                                let keys : TemplateCollectionModel = attributeMap.keys();
                                for(let it : TemplateModelIterator = keys.iterator(); it.hasNext(); ) {
                                    let attName : string = (<TemplateScalarModel><any>it.next()).getAsString();
                                    let attValue : any = DeepUnwrap.unwrap$freemarker_template_TemplateModel(attributeMap['get$java_lang_String'](attName));
                                    this.template.setCustomAttribute$java_lang_Object$java_lang_Object(attName, attValue);
                                }
                            } catch(tme) {
                            }
                        } else {
                            let correctName : string;
                            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"charset"))) {
                                correctName = "encoding";
                            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"xmlns"))) {
                                correctName = this.token_source.namingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION?"nsPrefixes":"ns_prefixes";
                            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"auto_escape")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"auto_escaping")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"autoesc"))) {
                                correctName = "auto_esc";
                            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"autoEscape")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ks,"autoEscaping"))) {
                                correctName = "autoEsc";
                            } else {
                                correctName = null;
                            }
                            {
                                if(true) throw new ParseException("Unknown FTL header parameter: " + key.image + (correctName == null?"":". You may meant: " + correctName), this.template, key);
                            }
                        }
                    }
                }
                if(autoEscRequester != null) {
                    this.checkCurrentOutputFormatCanEscape(autoEscRequester);
                }
                this.LooseDirectiveEnd();
                break;
            }
            default:
            this.jj_la1[103] = this.jj_gen;
            this.jj_consume_token(-1);
            throw new ParseException();
        }
    }

    public ParamList() : Map<any, any> {
        let id : Identifier;
        let exp : Expression;
        let result : Map<any, any> = <any>(new Map<any, any>());
        label_24: while((true)) {
            id = this.Identifier();
            this.jj_consume_token(FMParserConstants.EQUALS);
            exp = this.Expression();
            /* put */result.set(id.toString(), exp);
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 129 /* COMMA */:
                {
                    this.jj_consume_token(FMParserConstants.COMMA);
                    break;
                }
                default:
                this.jj_la1[104] = this.jj_gen;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 141 /* ID */:
                {
                    break;
                }
                default:
                this.jj_la1[105] = this.jj_gen;
                break label_24;
            }
        }
        {
            if("" != null) return result;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Parses the already un-escaped content of a string literal (input must not include the quotation marks).
     * 
     * @return {List} A {link List} of {link String}-s and {link Interpolation}-s.
     */
    public StaticTextAndInterpolations() : List {
        let t : Token;
        let interpolation : Interpolation;
        let staticTextCollector : StringBuilder = null;
        let parts : List = new List();
        label_25: while((true)) {
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
            case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 83 /* HASH_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    break;
                }
                default:
                this.jj_la1[106] = this.jj_gen;
                break label_25;
            }
            switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
            case 79 /* STATIC_TEXT_WS */:
            case 80 /* STATIC_TEXT_NON_WS */:
            case 81 /* STATIC_TEXT_FALSE_ALARM */:
                {
                    switch(((this.jj_ntk === -1)?this.jj_ntk_f():this.jj_ntk)) {
                    case 79 /* STATIC_TEXT_WS */:
                        {
                            t = this.jj_consume_token(FMParserConstants.STATIC_TEXT_WS);
                            break;
                        }
                        case 80 /* STATIC_TEXT_NON_WS */:
                        {
                            t = this.jj_consume_token(FMParserConstants.STATIC_TEXT_NON_WS);
                            break;
                        }
                        case 81 /* STATIC_TEXT_FALSE_ALARM */:
                        {
                            t = this.jj_consume_token(FMParserConstants.STATIC_TEXT_FALSE_ALARM);
                            break;
                        }
                        default:
                        this.jj_la1[107] = this.jj_gen;
                        this.jj_consume_token(-1);
                        throw new ParseException();
                    }
                    let s : string = t.image;
                    if(s.length !== 0) {
                        if(staticTextCollector == null) {
                            staticTextCollector = new StringBuilder(t.image);
                        } else {
                            staticTextCollector.append(t.image);
                        }
                    }
                    break;
                }
                case 82 /* DOLLAR_INTERPOLATION_OPENING */:
            case 83 /* HASH_INTERPOLATION_OPENING */:
            case 84 /* SQUARE_BRACKET_INTERPOLATION_OPENING */:
                {
                    if(this.jj_2_13(2147483647)) {
                        interpolation = this.StringOutput();
                    } else if(this.jj_2_14(2147483647)) {
                        interpolation = this.NumericalOutput();
                    } else {
                        this.jj_consume_token(-1);
                        throw new ParseException();
                    }
                    if(staticTextCollector != null) {
                        /* add */(parts.push(staticTextCollector.toString())>0);
                        staticTextCollector.setLength(0);
                    }
                    /* add */(parts.push(interpolation)>0);
                    break;
                }
                default:
                this.jj_la1[108] = this.jj_gen;
                this.jj_consume_token(-1);
                throw new ParseException();
            }
        }
        if(staticTextCollector != null && staticTextCollector.length() !== 0) {
            /* add */(parts.push(staticTextCollector.toString())>0);
        }
        // parts.trimToSize();
        {
            if("" != null) return parts;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    /**
     * Root production to be used when parsing
     * an entire file.
     * @return {TemplateElement}
     */
    public Root() : TemplateElement {
        let children : TemplateElements;
        if(this.jj_2_15(2147483647)) {
            this.HeaderElement();
        } else {
        }
        children = this.MixedContentElements();
        this.jj_consume_token(0);
        let root : TemplateElement = children.asSingleElement();
        root.setFieldsForRootElement();
        if(!this.preventStrippings) {
            root = root.postParseCleanup(this.stripWhitespace);
        }
        root.setFieldsForRootElement();
        {
            if("" != null) return root;
        }
        throw Object.defineProperty(new Error("Missing return statement in function"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
    }

    jj_2_1(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_1();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(0, xla);
        }
    }

    jj_2_2(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_2();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(1, xla);
        }
    }

    jj_2_3(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_3();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(2, xla);
        }
    }

    jj_2_4(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_4();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(3, xla);
        }
    }

    jj_2_5(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_5();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(4, xla);
        }
    }

    jj_2_6(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_6();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(5, xla);
        }
    }

    jj_2_7(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_7();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(6, xla);
        }
    }

    jj_2_8(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_8();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(7, xla);
        }
    }

    jj_2_9(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_9();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(8, xla);
        }
    }

    jj_2_10(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_10();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(9, xla);
        }
    }

    jj_2_11(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_11();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(10, xla);
        }
    }

    jj_2_12(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_12();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(11, xla);
        }
    }

    jj_2_13(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_13();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(12, xla);
        }
    }

    jj_2_14(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_14();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(13, xla);
        }
    }

    jj_2_15(xla : number) : boolean {
        this.jj_la = xla;
        this.jj_lastpos = this.jj_scanpos = this.token;
        try {
            return !this.jj_3_15();
        } catch(ls) {
            return true;
        } finally {
            this.jj_save(14, xla);
        }
    }

    jj_3R_60() : boolean {
        return this.jj_3R_75();
    }

    jj_3R_59() : boolean {
        return this.jj_3R_74();
    }

    jj_3R_58() : boolean {
        return this.jj_3R_73();
    }

    jj_3R_57() : boolean {
        return this.jj_3R_72();
    }

    jj_3_3() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(107)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(105)) {
                this.jj_scanpos = xsp;
                return this.jj_scan_token(106);
            }
        }
        return false;
    }

    jj_3R_92() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(115)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(116)) {
                this.jj_scanpos = xsp;
                if(this.jj_scan_token(117)) {
                    this.jj_scanpos = xsp;
                    if(this.jj_scan_token(118)) {
                        this.jj_scanpos = xsp;
                        if(this.jj_scan_token(95)) {
                            this.jj_scanpos = xsp;
                            if(this.jj_scan_token(96)) {
                                this.jj_scanpos = xsp;
                                if(this.jj_scan_token(138)) {
                                    this.jj_scanpos = xsp;
                                    if(this.jj_scan_token(139)) {
                                        this.jj_scanpos = xsp;
                                        return this.jj_scan_token(140);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    jj_3R_56() : boolean {
        return this.jj_3R_71();
    }

    jj_3R_76() : boolean {
        return this.jj_scan_token(FMParserConstants.ID);
    }

    jj_3R_52() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_56()) {
            this.jj_scanpos = xsp;
            if(this.jj_3R_57()) {
                this.jj_scanpos = xsp;
                if(this.jj_3R_58()) {
                    this.jj_scanpos = xsp;
                    if(this.jj_3R_59()) {
                        this.jj_scanpos = xsp;
                        if(this.jj_3R_60()) {
                            this.jj_scanpos = xsp;
                            if(this.jj_3R_61()) {
                                this.jj_scanpos = xsp;
                                if(this.jj_3R_62()) {
                                    this.jj_scanpos = xsp;
                                    return this.jj_3R_63();
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    jj_3_14() : boolean {
        return this.jj_scan_token(FMParserConstants.HASH_INTERPOLATION_OPENING);
    }

    jj_3R_49() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(107)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(105)) {
                this.jj_scanpos = xsp;
                if(this.jj_scan_token(106)) return true;
            }
        }
        return this.jj_3R_48();
    }

    jj_3R_79() : boolean {
        if(this.jj_scan_token(FMParserConstants.DOT)) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(141)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(121)) {
                this.jj_scanpos = xsp;
                if(this.jj_scan_token(122)) {
                    this.jj_scanpos = xsp;
                    return this.jj_3R_92();
                }
            }
        }
        return false;
    }

    jj_3_13() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(82)) {
            this.jj_scanpos = xsp;
            return this.jj_scan_token(84);
        }
        return false;
    }

    jj_3R_43() : boolean {
        if(this.jj_3R_48()) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_49()) this.jj_scanpos = xsp;
        return false;
    }

    jj_3R_69() : boolean {
        return this.jj_3R_84();
    }

    jj_3_11() : boolean {
        return this.jj_scan_token(FMParserConstants.OPEN_PAREN);
    }

    jj_3R_68() : boolean {
        return this.jj_3R_83();
    }

    jj_3R_71() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(97)) {
            this.jj_scanpos = xsp;
            return this.jj_scan_token(98);
        }
        return false;
    }

    jj_3R_67() : boolean {
        return this.jj_3R_82();
    }

    jj_3R_66() : boolean {
        return this.jj_3R_81();
    }

    jj_3R_65() : boolean {
        return this.jj_3R_80();
    }

    jj_3R_42() : boolean {
        return this.jj_scan_token(FMParserConstants.PERCENT);
    }

    jj_3R_53() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_64()) {
            this.jj_scanpos = xsp;
            if(this.jj_3R_65()) {
                this.jj_scanpos = xsp;
                if(this.jj_3R_66()) {
                    this.jj_scanpos = xsp;
                    if(this.jj_3R_67()) {
                        this.jj_scanpos = xsp;
                        if(this.jj_3R_68()) {
                            this.jj_scanpos = xsp;
                            return this.jj_3R_69();
                        }
                    }
                }
            }
        }
        return false;
    }

    jj_3R_64() : boolean {
        return this.jj_3R_79();
    }

    jj_3R_41() : boolean {
        return this.jj_scan_token(FMParserConstants.DIVIDE);
    }

    jj_3_12() : boolean {
        if(this.jj_scan_token(FMParserConstants.ID)) return true;
        return this.jj_scan_token(FMParserConstants.EQUALS);
    }

    jj_3R_40() : boolean {
        return this.jj_scan_token(FMParserConstants.TIMES);
    }

    jj_3R_98() : boolean {
        if(this.jj_scan_token(FMParserConstants.COMMA)) return true;
        if(this.jj_3R_27()) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(129)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(131)) return true;
        }
        return this.jj_3R_27();
    }

    jj_3_2() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(121)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(124)) {
                this.jj_scanpos = xsp;
                return this.jj_scan_token(125);
            }
        }
        return false;
    }

    jj_3R_93() : boolean {
        if(this.jj_scan_token(FMParserConstants.OPEN_PAREN)) return true;
        if(this.jj_3R_91()) return true;
        return this.jj_scan_token(FMParserConstants.CLOSE_PAREN);
    }

    jj_3R_47() : boolean {
        if(this.jj_3R_52()) return true;
        let xsp : Token;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_53()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return false;
    }

    jj_3R_75() : boolean {
        if(this.jj_scan_token(FMParserConstants.OPEN_BRACKET)) return true;
        if(this.jj_3R_91()) return true;
        return this.jj_scan_token(FMParserConstants.CLOSE_BRACKET);
    }

    jj_3R_32() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_40()) {
            this.jj_scanpos = xsp;
            if(this.jj_3R_41()) {
                this.jj_scanpos = xsp;
                if(this.jj_3R_42()) return true;
            }
        }
        return this.jj_3R_31();
    }

    jj_3_7() : boolean {
        return this.jj_scan_token(FMParserConstants.OR);
    }

    jj_3R_87() : boolean {
        if(this.jj_3R_27()) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(129)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(131)) return true;
        }
        if(this.jj_3R_27()) return true;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_98()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return false;
    }

    jj_3R_28() : boolean {
        if(this.jj_3R_31()) return true;
        let xsp : Token;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_32()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return false;
    }

    jj_3R_27() : boolean {
        return this.jj_3R_30();
    }

    jj_3R_72() : boolean {
        if(this.jj_scan_token(FMParserConstants.OPENING_CURLY_BRACKET)) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_87()) this.jj_scanpos = xsp;
        return this.jj_scan_token(FMParserConstants.CLOSING_CURLY_BRACKET);
    }

    jj_3R_36() : boolean {
        if(this.jj_scan_token(FMParserConstants.OR)) return true;
        return this.jj_3R_35();
    }

    jj_3R_30() : boolean {
        if(this.jj_3R_35()) return true;
        let xsp : Token;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_36()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return false;
    }

    jj_3_9() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(129)) this.jj_scanpos = xsp;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(141)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(93)) return true;
        }
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(105)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(108)) {
                this.jj_scanpos = xsp;
                if(this.jj_scan_token(109)) {
                    this.jj_scanpos = xsp;
                    if(this.jj_scan_token(110)) {
                        this.jj_scanpos = xsp;
                        if(this.jj_scan_token(111)) {
                            this.jj_scanpos = xsp;
                            if(this.jj_scan_token(112)) {
                                this.jj_scanpos = xsp;
                                if(this.jj_scan_token(113)) {
                                    this.jj_scanpos = xsp;
                                    return this.jj_scan_token(114);
                                }
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    jj_3R_90() : boolean {
        return this.jj_scan_token(FMParserConstants.TRUE);
    }

    jj_3R_89() : boolean {
        return this.jj_scan_token(FMParserConstants.FALSE);
    }

    jj_3_6() : boolean {
        return this.jj_scan_token(FMParserConstants.AND);
    }

    jj_3R_34() : boolean {
        return this.jj_scan_token(FMParserConstants.MINUS);
    }

    jj_3R_33() : boolean {
        return this.jj_scan_token(FMParserConstants.PLUS);
    }

    jj_3R_74() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_89()) {
            this.jj_scanpos = xsp;
            return this.jj_3R_90();
        }
        return false;
    }

    jj_3_1() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(119)) {
            this.jj_scanpos = xsp;
            return this.jj_scan_token(120);
        }
        return false;
    }

    jj_3R_44() : boolean {
        if(this.jj_scan_token(FMParserConstants.AND)) return true;
        return this.jj_3R_43();
    }

    jj_3R_29() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_33()) {
            this.jj_scanpos = xsp;
            if(this.jj_3R_34()) return true;
        }
        return this.jj_3R_28();
    }

    jj_3R_35() : boolean {
        if(this.jj_3R_43()) return true;
        let xsp : Token;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_44()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return false;
    }

    jj_3R_26() : boolean {
        if(this.jj_3R_28()) return true;
        let xsp : Token;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_29()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return false;
    }

    jj_3R_82() : boolean {
        if(this.jj_scan_token(FMParserConstants.BUILT_IN)) return true;
        if(this.jj_scan_token(FMParserConstants.ID)) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_93()) this.jj_scanpos = xsp;
        return false;
    }

    jj_3_5() : boolean {
        return this.jj_3R_26();
    }

    jj_3R_50() : boolean {
        return this.jj_scan_token(FMParserConstants.MINUS);
    }

    jj_3R_97() : boolean {
        return this.jj_3R_26();
    }

    jj_3R_45() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(119)) {
            this.jj_scanpos = xsp;
            if(this.jj_3R_50()) return true;
        }
        return this.jj_3R_47();
    }

    jj_3R_84() : boolean {
        return this.jj_scan_token(FMParserConstants.EXISTS);
    }

    jj_3_8() : boolean {
        return this.jj_3R_27();
    }

    jj_3R_88() : boolean {
        return this.jj_scan_token(FMParserConstants.RAW_STRING);
    }

    jj_3R_96() : boolean {
        return this.jj_scan_token(FMParserConstants.DOT_DOT_ASTERISK);
    }

    jj_3R_95() : boolean {
        return this.jj_scan_token(FMParserConstants.DOT_DOT_LESS);
    }

    jj_3R_86() : boolean {
        if(this.jj_scan_token(FMParserConstants.DOT_DOT)) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_97()) this.jj_scanpos = xsp;
        return false;
    }

    jj_3R_73() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(93)) {
            this.jj_scanpos = xsp;
            return this.jj_3R_88();
        }
        return false;
    }

    jj_3_10() : boolean {
        if(this.jj_scan_token(FMParserConstants.ID)) return true;
        return this.jj_scan_token(FMParserConstants.EQUALS);
    }

    jj_3R_100() : boolean {
        return this.jj_3R_27();
    }

    jj_3R_85() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_95()) {
            this.jj_scanpos = xsp;
            if(this.jj_3R_96()) return true;
        }
        return this.jj_3R_26();
    }

    jj_3R_51() : boolean {
        return this.jj_scan_token(FMParserConstants.EXCLAM);
    }

    jj_3R_94() : boolean {
        if(this.jj_scan_token(FMParserConstants.EXCLAM)) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_100()) this.jj_scanpos = xsp;
        return false;
    }

    jj_3R_46() : boolean {
        let xsp : Token;
        if(this.jj_3R_51()) return true;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_51()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return this.jj_3R_47();
    }

    jj_3R_70() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_85()) {
            this.jj_scanpos = xsp;
            return this.jj_3R_86();
        }
        return false;
    }

    jj_3R_81() : boolean {
        if(this.jj_scan_token(FMParserConstants.OPEN_PAREN)) return true;
        if(this.jj_3R_91()) return true;
        return this.jj_scan_token(FMParserConstants.CLOSE_PAREN);
    }

    jj_3R_54() : boolean {
        if(this.jj_3R_26()) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_70()) this.jj_scanpos = xsp;
        return false;
    }

    jj_3R_83() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(152)) {
            this.jj_scanpos = xsp;
            return this.jj_3R_94();
        }
        return false;
    }

    jj_3R_39() : boolean {
        return this.jj_3R_47();
    }

    jj_3R_38() : boolean {
        return this.jj_3R_46();
    }

    jj_3R_37() : boolean {
        return this.jj_3R_45();
    }

    jj_3R_31() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_37()) {
            this.jj_scanpos = xsp;
            if(this.jj_3R_38()) {
                this.jj_scanpos = xsp;
                return this.jj_3R_39();
            }
        }
        return false;
    }

    jj_3R_80() : boolean {
        if(this.jj_scan_token(FMParserConstants.OPEN_BRACKET)) return true;
        if(this.jj_3R_27()) return true;
        return this.jj_scan_token(FMParserConstants.CLOSE_BRACKET);
    }

    jj_3_4() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(150)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(118)) {
                this.jj_scanpos = xsp;
                if(this.jj_scan_token(149)) {
                    this.jj_scanpos = xsp;
                    if(this.jj_scan_token(117)) {
                        this.jj_scanpos = xsp;
                        if(this.jj_scan_token(116)) {
                            this.jj_scanpos = xsp;
                            if(this.jj_scan_token(116)) {
                                this.jj_scanpos = xsp;
                                return this.jj_scan_token(115);
                            }
                        }
                    }
                }
            }
        }
        return false;
    }

    jj_3R_78() : boolean {
        if(this.jj_scan_token(FMParserConstants.DOT)) return true;
        return this.jj_scan_token(FMParserConstants.ID);
    }

    jj_3R_101() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(129)) this.jj_scanpos = xsp;
        return this.jj_3R_27();
    }

    jj_3R_77() : boolean {
        if(this.jj_scan_token(FMParserConstants.OPEN_PAREN)) return true;
        if(this.jj_3R_27()) return true;
        return this.jj_scan_token(FMParserConstants.CLOSE_PAREN);
    }

    jj_3R_55() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(150)) {
            this.jj_scanpos = xsp;
            if(this.jj_scan_token(118)) {
                this.jj_scanpos = xsp;
                if(this.jj_scan_token(149)) {
                    this.jj_scanpos = xsp;
                    if(this.jj_scan_token(117)) {
                        this.jj_scanpos = xsp;
                        if(this.jj_scan_token(116)) {
                            this.jj_scanpos = xsp;
                            if(this.jj_scan_token(115)) return true;
                        }
                    }
                }
            }
        }
        return this.jj_3R_54();
    }

    jj_3R_99() : boolean {
        if(this.jj_3R_27()) return true;
        let xsp : Token;
        while((true)) {
            xsp = this.jj_scanpos;
            if(this.jj_3R_101()) {
                this.jj_scanpos = xsp;
                break;
            }
        }
        return false;
    }

    jj_3_15() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(79)) this.jj_scanpos = xsp;
        xsp = this.jj_scanpos;
        if(this.jj_scan_token(77)) {
            this.jj_scanpos = xsp;
            return this.jj_scan_token(76);
        }
        return false;
    }

    jj_3R_48() : boolean {
        if(this.jj_3R_54()) return true;
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_55()) this.jj_scanpos = xsp;
        return false;
    }

    jj_3R_91() : boolean {
        let xsp : Token;
        xsp = this.jj_scanpos;
        if(this.jj_3R_99()) this.jj_scanpos = xsp;
        return false;
    }

    jj_3R_63() : boolean {
        return this.jj_3R_78();
    }

    jj_3R_62() : boolean {
        return this.jj_3R_77();
    }

    jj_3R_61() : boolean {
        return this.jj_3R_76();
    }

    /**
     * Generated Token Manager.
     */
    public token_source : FMParserTokenManager;

    jj_input_stream : SimpleCharStream;

    /**
     * Current token.
     */
    public token : Token;

    /**
     * Next token.
     */
    public jj_nt : Token;

    /*private*/ jj_ntk : number;

    /*private*/ jj_scanpos : Token;

    /*private*/ jj_lastpos : Token;

    /*private*/ jj_la : number;

    /*private*/ jj_gen : number;

    /*private*/ jj_la1 : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(109);

    static jj_la1_0 : number[]; public static jj_la1_0_$LI$() : number[] { FMParser.__static_initialize(); return FMParser.jj_la1_0; };

    static jj_la1_1 : number[]; public static jj_la1_1_$LI$() : number[] { FMParser.__static_initialize(); return FMParser.jj_la1_1; };

    static jj_la1_2 : number[]; public static jj_la1_2_$LI$() : number[] { FMParser.__static_initialize(); return FMParser.jj_la1_2; };

    static jj_la1_3 : number[]; public static jj_la1_3_$LI$() : number[] { FMParser.__static_initialize(); return FMParser.jj_la1_3; };

    static jj_la1_4 : number[]; public static jj_la1_4_$LI$() : number[] { FMParser.__static_initialize(); return FMParser.jj_la1_4; };

    static __static_initializer_0() {
        FMParser.jj_la1_init_0();
        FMParser.jj_la1_init_1();
        FMParser.jj_la1_init_2();
        FMParser.jj_la1_init_3();
        FMParser.jj_la1_init_4();
    }

    static jj_la1_init_0() {
        FMParser.jj_la1_0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 512, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67108864, 33554432, 0, 0, 458752, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6291456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 32768, 0, 32768, 32768, 0, -33472, 0, 0, 0, 0, -33472, -33472, -33472, -33472, -33472, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    static jj_la1_init_1() {
        FMParser.jj_la1_1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4194304, 768, 0, 0, 4194304, 0, 128, 0, 0, 0, 0, 33554432, 67108864, 0, -268435456, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14336, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 49152, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 6, 0, 0, 0, 0, 0, -8388593, 0, 0, 0, 0, -8388593, -8388593, -8388593, -8388593, -8388593, 0, 0, 6, 6, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    static jj_la1_init_2() {
        FMParser.jj_la1_2 = [0, 0, -536870912, -536870912, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1610612736, 0, -2147483648, -2147483648, 1610612736, -2147483648, 0, 0, 0, -536870912, 1310720, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -536870912, 0, 24, 0, 0, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -536870912, 0, -536870912, 0, 0, 0, 0, 32768, 1, 32768, 1, 1, 0, 1406, 229376, 229376, 0, 0, 2065790, 2065790, 2065790, 2065790, 2065790, 2064384, 2064384, 32768, 32768, 32768, 0, 12288, 0, 0, 2064384, 229376, 2064384];
    }

    static jj_la1_init_3() {
        FMParser.jj_la1_3 = [392, 392, 15, 25165839, 0, 25165824, 25165824, 838860800, 3584, 7864320, 96, 112, 112, 6, 0, 0, 7864321, 108527617, 0, 1, 0, 0, 0, 25165839, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25165839, 0, 0, 0, 0, 0, 0, 0, 127488, 393216, 520704, 0, 127488, 393216, 520704, 0, 0, 0, 520704, 0, 0, 0, 0, 0, 134217728, 512, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25165839, 0, 25165839, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    static jj_la1_init_4() {
        FMParser.jj_la1_4 = [16777297, 16777297, 8528, 8529, 1, 0, 0, 0, 0, 6291456, 0, 0, 0, 0, 8192, 16777217, 7168, 15360, 0, 0, 10, 2, 10, 8529, 0, 4, 0, 0, 0, 2, 2048, 0, 2, 0, 4096, 8529, 4096, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1024, 1024, 0, 525312, 4, 8192, 0, 64, 8192, 0, 0, 2, 128, 0, 8388608, 8388608, 8388610, 8388608, 8388608, 8396800, 4, 1572864, 128, 8192, 8531, 2, 8529, 0, 4, 8192, 1572864, 0, 0, 0, 0, 0, 1572864, 0, 0, 0, 503316480, 503316480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8192, 0, 2, 8192, 0, 0, 0];
    }

    /*private*/ jj_2_rtns : FMParser.JJCalls[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(15);

    /*private*/ jj_rescan : boolean = false;

    /*private*/ jj_gc : number = 0;

    public ReInit$java_io_InputStream(stream : InputStream) {
        this.ReInit$java_io_InputStream$java_lang_String(stream, null);
    }

    public ReInit$java_io_InputStream$java_lang_String(stream : InputStream, encoding : string) {
        try {
            this.jj_input_stream.ReInit$java_io_InputStream$java_lang_String$int$int(stream, encoding, 1, 1);
        } catch(e) {
            throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        this.token_source.ReInit$freemarker_core_SimpleCharStream(this.jj_input_stream);
        this.token = new Token();
        this.jj_ntk = -1;
        this.jj_gen = 0;
        for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
        for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
    }

    /**
     * Reinitialise.
     * @param {InputStream} stream
     * @param {String} encoding
     */
    public ReInit(stream? : any, encoding? : any) : any {
        if(((stream != null && stream instanceof <any>InputStream) || stream === null) && ((typeof encoding === 'string') || encoding === null)) {
            return <any>this.ReInit$java_io_InputStream$java_lang_String(stream, encoding);
        } else if(((stream != null && stream instanceof <any>InputStream) || stream === null) && encoding === undefined) {
            return <any>this.ReInit$java_io_InputStream(stream);
        } else if(((stream != null && stream instanceof <any>Reader) || stream === null) && encoding === undefined) {
            return <any>this.ReInit$java_io_Reader(stream);
        } else if(((stream != null && stream instanceof <any>FMParserTokenManager) || stream === null) && encoding === undefined) {
            return <any>this.ReInit$freemarker_core_FMParserTokenManager(stream);
        } else throw new Error('invalid overload');
    }

    public ReInit$java_io_Reader(stream : Reader) {
        if(this.jj_input_stream == null) {
            this.jj_input_stream = new SimpleCharStream(stream, 1, 1);
        } else {
            this.jj_input_stream.ReInit$java_io_Reader$int$int(stream, 1, 1);
        }
        if(this.token_source == null) {
            this.token_source = new FMParserTokenManager(this.jj_input_stream);
        }
        this.token_source.ReInit$freemarker_core_SimpleCharStream(this.jj_input_stream);
        this.token = new Token();
        this.jj_ntk = -1;
        this.jj_gen = 0;
        for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
        for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
    }

    public ReInit$freemarker_core_FMParserTokenManager(tm : FMParserTokenManager) {
        this.token_source = tm;
        this.token = new Token();
        this.jj_ntk = -1;
        this.jj_gen = 0;
        for(let i : number = 0; i < 109; i++) this.jj_la1[i] = -1;
        for(let i : number = 0; i < this.jj_2_rtns.length; i++) this.jj_2_rtns[i] = new FMParser.JJCalls();
    }

    jj_consume_token(kind : number) : Token {
        let oldToken : Token;
        if((oldToken = this.token).next != null) this.token = this.token.next; else this.token = this.token.next = this.token_source.getNextToken();
        this.jj_ntk = -1;
        if(this.token.kind === kind) {
            this.jj_gen++;
            if(++this.jj_gc > 100) {
                this.jj_gc = 0;
                for(let i : number = 0; i < this.jj_2_rtns.length; i++) {
                    let c : FMParser.JJCalls = this.jj_2_rtns[i];
                    while((c != null)) {
                        if(c.gen < this.jj_gen) c.first = null;
                        c = c.next;
                    }
                }
            }
            return this.token;
        }
        this.token = oldToken;
        this.jj_kind = kind;
        throw this.generateParseException();
    }

    /*private*/ jj_ls : FMParser.LookaheadSuccess = new FMParser.LookaheadSuccess();

    jj_scan_token(kind : number) : boolean {
        if(this.jj_scanpos === this.jj_lastpos) {
            this.jj_la--;
            if(this.jj_scanpos.next == null) {
                this.jj_lastpos = this.jj_scanpos = this.jj_scanpos.next = this.token_source.getNextToken();
            } else {
                this.jj_lastpos = this.jj_scanpos = this.jj_scanpos.next;
            }
        } else {
            this.jj_scanpos = this.jj_scanpos.next;
        }
        if(this.jj_rescan) {
            let i : number = 0;
            let tok : Token = this.token;
            while((tok != null && tok !== this.jj_scanpos)) {
                i++;
                tok = tok.next;
            }
            if(tok != null) this.jj_add_error_token(kind, i);
        }
        if(this.jj_scanpos.kind !== kind) return true;
        if(this.jj_la === 0 && this.jj_scanpos === this.jj_lastpos) throw this.jj_ls;
        return false;
    }

    /**
     * Get the next Token.
     * @return {Token}
     */
    public getNextToken() : Token {
        if(this.token.next != null) this.token = this.token.next; else this.token = this.token.next = this.token_source.getNextToken();
        this.jj_ntk = -1;
        this.jj_gen++;
        return this.token;
    }

    /**
     * Get the specific Token.
     * @param {number} index
     * @return {Token}
     */
    public getToken(index : number) : Token {
        let t : Token = this.token;
        for(let i : number = 0; i < index; i++) {
            if(t.next != null) t = t.next; else t = t.next = this.token_source.getNextToken();
        }
        return t;
    }

    jj_ntk_f() : number {
        if((this.jj_nt = this.token.next) == null) return (this.jj_ntk = (this.token.next = this.token_source.getNextToken()).kind); else return (this.jj_ntk = this.jj_nt.kind);
    }

    /*private*/ jj_expentries : List = <any>([]);

    /*private*/ jj_expentry : number[];

    /*private*/ jj_kind : number = -1;

    /*private*/ jj_lasttokens : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(100);

    /*private*/ jj_endpos : number;

    jj_add_error_token(kind : number, pos : number) {
        if(pos >= 100) {
            return;
        }
        if(pos === this.jj_endpos + 1) {
            this.jj_lasttokens[this.jj_endpos++] = kind;
        } else if(this.jj_endpos !== 0) {
            this.jj_expentry = (s => { let a=[]; while(s-->0) a.push(0); return a; })(this.jj_endpos);
            for(let i : number = 0; i < this.jj_endpos; i++) {
                this.jj_expentry[i] = this.jj_lasttokens[i];
            }
            for(let index138=0; index138 < this.jj_expentries.length; index138++) {
                let oldentry = this.jj_expentries[index138];
                {
                    if(oldentry.length === this.jj_expentry.length) {
                        let isMatched : boolean = true;
                        for(let i : number = 0; i < this.jj_expentry.length; i++) {
                            if(oldentry[i] !== this.jj_expentry[i]) {
                                isMatched = false;
                                break;
                            }
                        }
                        if(isMatched) {
                            /* add */(this.jj_expentries.push(this.jj_expentry)>0);
                            break;
                        }
                    }
                }
            }
            if(pos !== 0) {
                this.jj_lasttokens[(this.jj_endpos = pos) - 1] = kind;
            }
        }
    }

    /**
     * Generate ParseException.
     * @return {ParseException}
     */
    public generateParseException() : ParseException {
        /* clear */(this.jj_expentries.length = 0);
        let la1tokens : boolean[] = (s => { let a=[]; while(s-->0) a.push(false); return a; })(157);
        if(this.jj_kind >= 0) {
            la1tokens[this.jj_kind] = true;
            this.jj_kind = -1;
        }
        for(let i : number = 0; i < 109; i++) {
            if(this.jj_la1[i] === this.jj_gen) {
                for(let j : number = 0; j < 32; j++) {
                    if((FMParser.jj_la1_0_$LI$()[i] & (1 << j)) !== 0) {
                        la1tokens[j] = true;
                    }
                    if((FMParser.jj_la1_1_$LI$()[i] & (1 << j)) !== 0) {
                        la1tokens[32 + j] = true;
                    }
                    if((FMParser.jj_la1_2_$LI$()[i] & (1 << j)) !== 0) {
                        la1tokens[64 + j] = true;
                    }
                    if((FMParser.jj_la1_3_$LI$()[i] & (1 << j)) !== 0) {
                        la1tokens[96 + j] = true;
                    }
                    if((FMParser.jj_la1_4_$LI$()[i] & (1 << j)) !== 0) {
                        la1tokens[128 + j] = true;
                    }
                }
            }
        }
        for(let i : number = 0; i < 157; i++) {
            if(la1tokens[i]) {
                this.jj_expentry = [0];
                this.jj_expentry[0] = i;
                /* add */(this.jj_expentries.push(this.jj_expentry)>0);
            }
        }
        this.jj_endpos = 0;
        this.jj_rescan_token();
        this.jj_add_error_token(0, 0);
        let exptokseq : number[][] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(/* size */(<number>this.jj_expentries.length));
        for(let i : number = 0; i < /* size */(<number>this.jj_expentries.length); i++) {
            exptokseq[i] = /* get */this.jj_expentries[i];
        }
        return new ParseException(this.token, exptokseq, FMParserConstants.tokenImage);
    }

    /**
     * Enable tracing.
     */
    public enable_tracing() {
    }

    /**
     * Disable tracing.
     */
    public disable_tracing() {
    }

    jj_rescan_token() {
        this.jj_rescan = true;
        for(let i : number = 0; i < 15; i++) {
            try {
                let p : FMParser.JJCalls = this.jj_2_rtns[i];
                do {
                    if(p.gen > this.jj_gen) {
                        this.jj_la = p.arg;
                        this.jj_lastpos = this.jj_scanpos = p.first;
                        switch((i)) {
                        case 0:
                            this.jj_3_1();
                            break;
                        case 1:
                            this.jj_3_2();
                            break;
                        case 2:
                            this.jj_3_3();
                            break;
                        case 3:
                            this.jj_3_4();
                            break;
                        case 4:
                            this.jj_3_5();
                            break;
                        case 5:
                            this.jj_3_6();
                            break;
                        case 6:
                            this.jj_3_7();
                            break;
                        case 7:
                            this.jj_3_8();
                            break;
                        case 8:
                            this.jj_3_9();
                            break;
                        case 9:
                            this.jj_3_10();
                            break;
                        case 10:
                            this.jj_3_11();
                            break;
                        case 11:
                            this.jj_3_12();
                            break;
                        case 12:
                            this.jj_3_13();
                            break;
                        case 13:
                            this.jj_3_14();
                            break;
                        case 14:
                            this.jj_3_15();
                            break;
                        }
                    }
                    p = p.next;
                } while((p != null));
            } catch(ls) {
            }
        }
        this.jj_rescan = false;
    }

    jj_save(index : number, xla : number) {
        let p : FMParser.JJCalls = this.jj_2_rtns[index];
        while((p.gen > this.jj_gen)) {
            if(p.next == null) {
                p = p.next = new FMParser.JJCalls();
                break;
            }
            p = p.next;
        }
        p.gen = this.jj_gen + xla - this.jj_la;
        p.first = this.token;
        p.arg = xla;
    }
}
FMParser["__class"] = "freemarker.core.FMParser";
FMParser["__interfaces"] = ["freemarker.core.FMParserConstants"];



export namespace FMParser {

    export class ParserIteratorBlockContext {
        /**
         * loopVarName in <#list ... as loopVarName> or <#items as loopVarName>; null after we left the nested
         * block of #list or #items, respectively.
         */
        loopVarName : string;

        /**
         * loopVar1Name in <#list ... as k, loopVar2Name> or <#items as k, loopVar2Name>; null after we left the nested
         * block of #list or #items, respectively.
         */
        loopVar2Name : string;

        /**
         * See the ITERATOR_BLOCK_KIND_... costants.
         */
        kind : number;

        /**
         * Is this a key-value pair listing? When there's a nested #items, it's only set there.
         */
        hashListing : boolean;

        constructor() {
            if(this.loopVarName===undefined) this.loopVarName = null;
            if(this.loopVar2Name===undefined) this.loopVar2Name = null;
            if(this.kind===undefined) this.kind = 0;
            if(this.hashListing===undefined) this.hashListing = false;
        }
    }
    ParserIteratorBlockContext["__class"] = "freemarker.core.FMParser.ParserIteratorBlockContext";


    export class LookaheadSuccess extends Error {
        constructor() {
            super();
            (<any>Object).setPrototypeOf(this, LookaheadSuccess.prototype);
        }
    }
    LookaheadSuccess["__class"] = "freemarker.core.FMParser.LookaheadSuccess";
    LookaheadSuccess["__interfaces"] = ["java.io.Serializable"];



    export class JJCalls {
        gen : number;

        first : Token;

        arg : number;

        next : FMParser.JJCalls;

        constructor() {
            if(this.gen===undefined) this.gen = 0;
            if(this.first===undefined) this.first = null;
            if(this.arg===undefined) this.arg = 0;
            if(this.next===undefined) this.next = null;
        }
    }
    JJCalls["__class"] = "freemarker.core.FMParser.JJCalls";

}





FMParser.jj_la1_4_$LI$();

FMParser.jj_la1_3_$LI$();

FMParser.jj_la1_2_$LI$();

FMParser.jj_la1_1_$LI$();

FMParser.jj_la1_0_$LI$();

FMParser.__static_initialize();
