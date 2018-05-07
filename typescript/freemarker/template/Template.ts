/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BugException} from '../core/BugException';
import {Configurable} from '../core/Configurable';
import {FMParser} from '../core/FMParser';
import {LibraryLoad} from '../core/LibraryLoad';
import {OutputFormat} from '../core/OutputFormat';
import {ParseException} from '../core/ParseException';
import {ParserConfiguration} from '../core/ParserConfiguration';
import {TemplateElement} from '../core/TemplateElement';
import {TextBlock} from '../core/TextBlock';
import {_CoreAPI} from '../core/_CoreAPI';
import {BufferedReader} from '../../java/io/BufferedReader';
import {Reader} from '../../java/io/Reader';
import {StringReader} from '../../java/io/StringReader';
import {StringWriter} from '../../java/io/StringWriter';
import {Writer} from '../../java/io/Writer';
import {Version} from './Version';
import {Configuration} from './Configuration';
import {_TemplateAPI} from './_TemplateAPI';
import {TemplateException} from './TemplateException';
import {ObjectWrapper} from './ObjectWrapper';
import {TemplateNodeModel} from './TemplateNodeModel';
import {TemplateHashModel} from './TemplateHashModel';
import {SimpleHash} from './SimpleHash';
import {TemplateModel} from './TemplateModel';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {PrintStream} from "../../java/io/PrintStream";
import {FilterReader} from "../../java/io/FilterReader";
import {Map} from "../../java/util/Map";
import {TokenMgrError} from "../core/TokenMgrError";

/**
 * Same as {link #Template(String, String, Reader, Configuration, String)}, but also specifies a
 * {link TemplateConfiguration}. This is mostly meant to be used by FreeMarker internally, but advanced users might
 * still find this useful.
 * 
 * @param {*} customParserConfiguration Overrides the parsing related configuration settings of the {link Configuration} parameter; can be
 * {@code null}. This is useful as the {link Configuration} is normally a singleton shared by all
 * templates, and so it's not good for specifying template-specific settings. (While {link Template}
 * itself has methods to specify settings just for that template, those don't influence the parsing, and
 * you only have opportunity to call them after the parsing anyway.) This objects is often a
 * {link TemplateConfiguration} whose parent is the {link Configuration} parameter, and then it
 * practically just overrides some of the parser settings, as the others are inherited from the
 * {link Configuration}. Note that if this is a {link TemplateConfiguration}, you will also want to
 * call {link TemplateConfiguration#apply(Template)} on the resulting {link Template} so that
 * {link Configurable} settings will be set too, because this constructor only uses it as a
 * {link ParserConfiguration}.
 * @param {String} encoding                  Same as in {link #Template(String, String, Reader, Configuration, String)}. When it's non-{@code
 * null}, it overrides the value coming from the {link TemplateConfiguration#getEncoding()} method of
 * the {@code templateConfiguration} parameter.
 * @since 2.3.24
 * @param {String} name
 * @param {String} sourceName
 * @param {Reader} reader
 * @param {Configuration} cfg
 * @class
 * @extends Configurable
 */
export class Template extends Configurable {
    public static DEFAULT_NAMESPACE_PREFIX : string = "D";

    public static NO_NS_PREFIX : string = "N";

    static READER_BUFFER_SIZE : number = 4096;

    /*private*/ macros : Map<any, any>;

    /*private*/ imports : Array<any>;

    /*private*/ rootElement : TemplateElement;

    /*private*/ encoding : string;

    /*private*/ defaultNS : string;

    /*private*/ customLookupCondition : any;

    /*private*/ interpolationSyntax : number;

    /*private*/ actualTagSyntax : number;

    /*private*/ actualNamingConvention : number;

    /*private*/ autoEscaping : boolean;

    /*private*/ outputFormat : OutputFormat;

    /*private*/ name : string;

    /*private*/ sourceName : string;

    /*private*/ lines : Array<any>;

    /*private*/ parserConfiguration : ParserConfiguration;

    /*private*/ prefixToNamespaceURILookup : Map<any, any>;

    /*private*/ namespaceURIToPrefixLookup : Map<any, any>;

    /*private*/ templateLanguageVersion : Version;

    static toNonNull(cfg : Configuration) : Configuration {
        return cfg != null?cfg:Configuration.getDefaultConfiguration();
    }

    public constructor(name? : any, sourceName? : any, reader? : any, cfg? : any, customParserConfiguration? : any, encoding? : any) {
        if(((typeof name === 'string') || name === null) && ((typeof sourceName === 'string') || sourceName === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null) && ((customParserConfiguration != null && (customParserConfiguration["__interfaces"] != null && customParserConfiguration["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0 || customParserConfiguration.constructor != null && customParserConfiguration.constructor["__interfaces"] != null && customParserConfiguration.constructor["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0)) || customParserConfiguration === null) && ((typeof encoding === 'string') || encoding === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                super(Template.toNonNull(cfg));
                if(this.rootElement===undefined) this.rootElement = null;
                if(this.encoding===undefined) this.encoding = null;
                if(this.defaultNS===undefined) this.defaultNS = null;
                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.name===undefined) this.name = null;
                if(this.sourceName===undefined) this.sourceName = null;
                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                this.macros = <any>(new Map<any, any>());
                this.imports = <any>([]);
                this.lines = <any>([]);
                this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                if(this.rootElement===undefined) this.rootElement = null;
                if(this.encoding===undefined) this.encoding = null;
                if(this.defaultNS===undefined) this.defaultNS = null;
                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.name===undefined) this.name = null;
                if(this.sourceName===undefined) this.sourceName = null;
                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                (() => {
                    this.name = name;
                    this.sourceName = sourceName;
                    this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                    this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                })();
            }
            (() => {
                this.setEncoding(encoding);
                let ltbReader : Template.LineTableBuilder;
                try {
                    let actualParserConfiguration : ParserConfiguration = this.getParserConfiguration();
                    if(!(reader != null && reader instanceof <any>BufferedReader) && !(reader != null && reader instanceof <any>StringReader)) {
                        reader = new BufferedReader(reader, Template.READER_BUFFER_SIZE);
                    }
                    ltbReader = (() => { let __o : any = new Template.LineTableBuilder(this, reader, actualParserConfiguration); __o.__delegate = new Template.LineTableBuilder(this, reader, actualParserConfiguration); return __o; })();
                    reader = ltbReader;
                    try {
                        let parser : FMParser = new FMParser(this, reader, actualParserConfiguration);
                        if(cfg != null) {
                            _CoreAPI.setPreventStrippings(parser, cfg.getPreventStrippings());
                        }
                        try {
                            this.rootElement = parser.Root();
                        } catch(exc) {
                            if(!ltbReader.hasFailure()) {
                                throw exc;
                            }
                            this.rootElement = null;
                        }
                        this.actualTagSyntax = parser._getLastTagSyntax();
                        this.interpolationSyntax = actualParserConfiguration.getInterpolationSyntax();
                        this.actualNamingConvention = parser._getLastNamingConvention();
                    } catch(exc) {
                        if(exc instanceof TokenMgrError) {
                            exc = exc.toParseException(this);
                        }
                        throw exc;
                    }
                } catch(e) {
                    ParseException.prototype.setTemplateName.apply(e, [this.getSourceName()]);
                    throw e;
                } finally {
                    reader.close();
                }
                ltbReader.throwFailure();
            })();
        } else if(((typeof name === 'string') || name === null) && ((typeof sourceName === 'string') || sourceName === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null) && ((typeof customParserConfiguration === 'string') || customParserConfiguration === null) && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let encoding : any = __args[4];
            {
                let __args = Array.prototype.slice.call(arguments);
                let customParserConfiguration : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    super(Template.toNonNull(cfg));
                    if(this.rootElement===undefined) this.rootElement = null;
                    if(this.encoding===undefined) this.encoding = null;
                    if(this.defaultNS===undefined) this.defaultNS = null;
                    if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                    if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                    if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                    if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                    if(this.autoEscaping===undefined) this.autoEscaping = false;
                    if(this.outputFormat===undefined) this.outputFormat = null;
                    if(this.name===undefined) this.name = null;
                    if(this.sourceName===undefined) this.sourceName = null;
                    if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                    if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                    this.macros = <any>(new Map<any, any>());
                    this.imports = <any>([]);
                    this.lines = <any>([]);
                    this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                    this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                    if(this.rootElement===undefined) this.rootElement = null;
                    if(this.encoding===undefined) this.encoding = null;
                    if(this.defaultNS===undefined) this.defaultNS = null;
                    if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                    if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                    if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                    if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                    if(this.autoEscaping===undefined) this.autoEscaping = false;
                    if(this.outputFormat===undefined) this.outputFormat = null;
                    if(this.name===undefined) this.name = null;
                    if(this.sourceName===undefined) this.sourceName = null;
                    if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                    if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                    (() => {
                        this.name = name;
                        this.sourceName = sourceName;
                        this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                        this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                    })();
                }
                (() => {
                    this.setEncoding(encoding);
                    let ltbReader : Template.LineTableBuilder;
                    try {
                        let actualParserConfiguration : ParserConfiguration = this.getParserConfiguration();
                        if(!(reader != null && reader instanceof <any>BufferedReader) && !(reader != null && reader instanceof <any>StringReader)) {
                            reader = new BufferedReader(reader, Template.READER_BUFFER_SIZE);
                        }
                        ltbReader = (() => { let __o : any = new Template.LineTableBuilder(this, reader, actualParserConfiguration); __o.__delegate = new Template.LineTableBuilder(this, reader, actualParserConfiguration); return __o; })();
                        reader = ltbReader;
                        try {
                            let parser : FMParser = new FMParser(this, reader, actualParserConfiguration);
                            if(cfg != null) {
                                _CoreAPI.setPreventStrippings(parser, cfg.getPreventStrippings());
                            }
                            try {
                                this.rootElement = parser.Root();
                            } catch(exc) {
                                if(!ltbReader.hasFailure()) {
                                    throw exc;
                                }
                                this.rootElement = null;
                            }
                            this.actualTagSyntax = parser._getLastTagSyntax();
                            this.interpolationSyntax = actualParserConfiguration.getInterpolationSyntax();
                            this.actualNamingConvention = parser._getLastNamingConvention();
                        } catch(exc) {
                            throw exc.toParseException(this);
                        }
                    } catch(e) {
                        e.setTemplateName(this.getSourceName());
                        throw e;
                    } finally {
                        reader.close();
                    }
                    ltbReader.throwFailure();
                })();
            }
        } else if(((typeof name === 'string') || name === null) && ((typeof sourceName === 'string') || sourceName === null) && ((reader != null && reader instanceof <any>Configuration) || reader === null) && ((cfg != null && (cfg["__interfaces"] != null && cfg["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0 || cfg.constructor != null && cfg.constructor["__interfaces"] != null && cfg.constructor["__interfaces"].indexOf("freemarker.core.ParserConfiguration") >= 0)) || cfg === null) && customParserConfiguration === undefined && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cfg : any = __args[2];
            let customParserConfiguration : any = __args[3];
            super(Template.toNonNull(cfg));
            if(this.rootElement===undefined) this.rootElement = null;
            if(this.encoding===undefined) this.encoding = null;
            if(this.defaultNS===undefined) this.defaultNS = null;
            if(this.customLookupCondition===undefined) this.customLookupCondition = null;
            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
            if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
            if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.name===undefined) this.name = null;
            if(this.sourceName===undefined) this.sourceName = null;
            if(this.parserConfiguration===undefined) this.parserConfiguration = null;
            if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
            this.macros = <any>(new Map<any, any>());
            this.imports = <any>([]);
            this.lines = <any>([]);
            this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
            this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
            if(this.rootElement===undefined) this.rootElement = null;
            if(this.encoding===undefined) this.encoding = null;
            if(this.defaultNS===undefined) this.defaultNS = null;
            if(this.customLookupCondition===undefined) this.customLookupCondition = null;
            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
            if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
            if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
            if(this.autoEscaping===undefined) this.autoEscaping = false;
            if(this.outputFormat===undefined) this.outputFormat = null;
            if(this.name===undefined) this.name = null;
            if(this.sourceName===undefined) this.sourceName = null;
            if(this.parserConfiguration===undefined) this.parserConfiguration = null;
            if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
            (() => {
                this.name = name;
                this.sourceName = sourceName;
                this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
            })();
        } else if(((typeof name === 'string') || name === null) && ((sourceName != null && sourceName instanceof <any>Reader) || sourceName === null) && ((reader != null && reader instanceof <any>Configuration) || reader === null) && ((typeof cfg === 'string') || cfg === null) && customParserConfiguration === undefined && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let reader : any = __args[1];
            let cfg : any = __args[2];
            let encoding : any = __args[3];
            {
                let __args = Array.prototype.slice.call(arguments);
                let sourceName : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let customParserConfiguration : any = null;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        super(Template.toNonNull(cfg));
                        if(this.rootElement===undefined) this.rootElement = null;
                        if(this.encoding===undefined) this.encoding = null;
                        if(this.defaultNS===undefined) this.defaultNS = null;
                        if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                        if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                        if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                        if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                        if(this.outputFormat===undefined) this.outputFormat = null;
                        if(this.name===undefined) this.name = null;
                        if(this.sourceName===undefined) this.sourceName = null;
                        if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                        if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                        this.macros = <any>(new Map<any, any>());
                        this.imports = <any>([]);
                        this.lines = <any>([]);
                        this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                        this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                        if(this.rootElement===undefined) this.rootElement = null;
                        if(this.encoding===undefined) this.encoding = null;
                        if(this.defaultNS===undefined) this.defaultNS = null;
                        if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                        if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                        if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                        if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                        if(this.outputFormat===undefined) this.outputFormat = null;
                        if(this.name===undefined) this.name = null;
                        if(this.sourceName===undefined) this.sourceName = null;
                        if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                        if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                        (() => {
                            this.name = name;
                            this.sourceName = sourceName;
                            this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                            this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                        })();
                    }
                    (() => {
                        this.setEncoding(encoding);
                        let ltbReader : Template.LineTableBuilder;
                        try {
                            let actualParserConfiguration : ParserConfiguration = this.getParserConfiguration();
                            if(!(reader != null && reader instanceof <any>BufferedReader) && !(reader != null && reader instanceof <any>StringReader)) {
                                reader = new BufferedReader(reader, Template.READER_BUFFER_SIZE);
                            }
                            ltbReader = (() => { let __o : any = new Template.LineTableBuilder(this, reader, actualParserConfiguration); __o.__delegate = new Template.LineTableBuilder(this, reader, actualParserConfiguration); return __o; })();
                            reader = ltbReader;
                            try {
                                let parser : FMParser = new FMParser(this, reader, actualParserConfiguration);
                                if(cfg != null) {
                                    _CoreAPI.setPreventStrippings(parser, cfg.getPreventStrippings());
                                }
                                try {
                                    this.rootElement = parser.Root();
                                } catch(exc) {
                                    if(!ltbReader.hasFailure()) {
                                        throw exc;
                                    }
                                    this.rootElement = null;
                                }
                                this.actualTagSyntax = parser._getLastTagSyntax();
                                this.interpolationSyntax = actualParserConfiguration.getInterpolationSyntax();
                                this.actualNamingConvention = parser._getLastNamingConvention();
                            } catch(exc) {
                                throw exc.toParseException(this);
                            }
                        } catch(e) {
                            e.setTemplateName(this.getSourceName());
                            throw e;
                        } finally {
                            reader.close();
                        }
                        ltbReader.throwFailure();
                        this.namespaceURIToPrefixLookup = this.namespaceURIToPrefixLookup;
                        this.prefixToNamespaceURILookup = this.prefixToNamespaceURILookup;
                    })();
                }
            }
        } else if(((typeof name === 'string') || name === null) && ((typeof sourceName === 'string') || sourceName === null) && ((reader != null && reader instanceof <any>Reader) || reader === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null) && customParserConfiguration === undefined && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let encoding : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let customParserConfiguration : any = null;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        super(Template.toNonNull(cfg));
                        if(this.rootElement===undefined) this.rootElement = null;
                        if(this.encoding===undefined) this.encoding = null;
                        if(this.defaultNS===undefined) this.defaultNS = null;
                        if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                        if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                        if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                        if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                        if(this.outputFormat===undefined) this.outputFormat = null;
                        if(this.name===undefined) this.name = null;
                        if(this.sourceName===undefined) this.sourceName = null;
                        if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                        if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                        this.macros = <any>(new Map<any, any>());
                        this.imports = <any>([]);
                        this.lines = <any>([]);
                        this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                        this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                        if(this.rootElement===undefined) this.rootElement = null;
                        if(this.encoding===undefined) this.encoding = null;
                        if(this.defaultNS===undefined) this.defaultNS = null;
                        if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                        if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                        if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                        if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                        if(this.autoEscaping===undefined) this.autoEscaping = false;
                        if(this.outputFormat===undefined) this.outputFormat = null;
                        if(this.name===undefined) this.name = null;
                        if(this.sourceName===undefined) this.sourceName = null;
                        if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                        if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                        (() => {
                            this.name = name;
                            this.sourceName = sourceName;
                            this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                            this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                        })();
                    }
                    (() => {
                        this.setEncoding(encoding);
                        let ltbReader : Template.LineTableBuilder;
                        try {
                            let actualParserConfiguration : ParserConfiguration = this.getParserConfiguration();
                            if(!(reader != null && reader instanceof <any>BufferedReader) && !(reader != null && reader instanceof <any>StringReader)) {
                                reader = new BufferedReader(reader, Template.READER_BUFFER_SIZE);
                            }
                            ltbReader = (() => { let __o : any = new Template.LineTableBuilder(this, reader, actualParserConfiguration); __o.__delegate = new Template.LineTableBuilder(this, reader, actualParserConfiguration); return __o; })();
                            reader = ltbReader;
                            try {
                                let parser : FMParser = new FMParser(this, reader, actualParserConfiguration);
                                if(cfg != null) {
                                    _CoreAPI.setPreventStrippings(parser, cfg.getPreventStrippings());
                                }
                                try {
                                    this.rootElement = parser.Root();
                                } catch(exc) {
                                    if(!ltbReader.hasFailure()) {
                                        throw exc;
                                    }
                                    this.rootElement = null;
                                }
                                this.actualTagSyntax = parser._getLastTagSyntax();
                                this.interpolationSyntax = actualParserConfiguration.getInterpolationSyntax();
                                this.actualNamingConvention = parser._getLastNamingConvention();
                            } catch(exc) {
                                throw exc.toParseException(this);
                            }
                        } catch(e) {
                            e.setTemplateName(this.getSourceName());
                            throw e;
                        } finally {
                            reader.close();
                        }
                        ltbReader.throwFailure();
                    })();
                }
            }
        } else if(((typeof name === 'string') || name === null) && ((sourceName != null && sourceName instanceof <any>Reader) || sourceName === null) && ((reader != null && reader instanceof <any>Configuration) || reader === null) && cfg === undefined && customParserConfiguration === undefined && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let reader : any = __args[1];
            let cfg : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let sourceName : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let encoding : any = null;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let customParserConfiguration : any = null;
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            super(Template.toNonNull(cfg));
                            if(this.rootElement===undefined) this.rootElement = null;
                            if(this.encoding===undefined) this.encoding = null;
                            if(this.defaultNS===undefined) this.defaultNS = null;
                            if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                            if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                            if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                            if(this.autoEscaping===undefined) this.autoEscaping = false;
                            if(this.outputFormat===undefined) this.outputFormat = null;
                            if(this.name===undefined) this.name = null;
                            if(this.sourceName===undefined) this.sourceName = null;
                            if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                            if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                            this.macros = <any>(new Map<any, any>());
                            this.imports = <any>([]);
                            this.lines = <any>([]);
                            this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                            this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                            if(this.rootElement===undefined) this.rootElement = null;
                            if(this.encoding===undefined) this.encoding = null;
                            if(this.defaultNS===undefined) this.defaultNS = null;
                            if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                            if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                            if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                            if(this.autoEscaping===undefined) this.autoEscaping = false;
                            if(this.outputFormat===undefined) this.outputFormat = null;
                            if(this.name===undefined) this.name = null;
                            if(this.sourceName===undefined) this.sourceName = null;
                            if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                            if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                            (() => {
                                this.name = name;
                                this.sourceName = sourceName;
                                this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                                this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                            })();
                        }
                        (() => {
                            this.setEncoding(encoding);
                            let ltbReader : Template.LineTableBuilder;
                            try {
                                let actualParserConfiguration : ParserConfiguration = this.getParserConfiguration();
                                if(!(reader != null && reader instanceof <any>BufferedReader) && !(reader != null && reader instanceof <any>StringReader)) {
                                    reader = new BufferedReader(reader, Template.READER_BUFFER_SIZE);
                                }
                                ltbReader = (() => { let __o : any = new Template.LineTableBuilder(this, reader, actualParserConfiguration); __o.__delegate = new Template.LineTableBuilder(this, reader, actualParserConfiguration); return __o; })();
                                reader = ltbReader;
                                try {
                                    let parser : FMParser = new FMParser(this, reader, actualParserConfiguration);
                                    if(cfg != null) {
                                        _CoreAPI.setPreventStrippings(parser, cfg.getPreventStrippings());
                                    }
                                    try {
                                        this.rootElement = parser.Root();
                                    } catch(exc) {
                                        if(!ltbReader.hasFailure()) {
                                            throw exc;
                                        }
                                        this.rootElement = null;
                                    }
                                    this.actualTagSyntax = parser._getLastTagSyntax();
                                    this.interpolationSyntax = actualParserConfiguration.getInterpolationSyntax();
                                    this.actualNamingConvention = parser._getLastNamingConvention();
                                } catch(exc) {
                                    throw exc.toParseException(this);
                                }
                            } catch(e) {
                                e.setTemplateName(this.getSourceName());
                                throw e;
                            } finally {
                                reader.close();
                            }
                            ltbReader.throwFailure();
                        })();
                    }
                }
            }
        } else if(((typeof name === 'string') || name === null) && ((typeof sourceName === 'string') || sourceName === null) && ((reader != null && reader instanceof <any>Configuration) || reader === null) && cfg === undefined && customParserConfiguration === undefined && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let sourceCode : any = __args[1];
            let cfg : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let reader : any = new StringReader(sourceCode);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let sourceName : any = null;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let encoding : any = null;
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let customParserConfiguration : any = null;
                            {
                                let __args = Array.prototype.slice.call(arguments);
                                super(Template.toNonNull(cfg));
                                if(this.rootElement===undefined) this.rootElement = null;
                                if(this.encoding===undefined) this.encoding = null;
                                if(this.defaultNS===undefined) this.defaultNS = null;
                                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                                if(this.autoEscaping===undefined) this.autoEscaping = false;
                                if(this.outputFormat===undefined) this.outputFormat = null;
                                if(this.name===undefined) this.name = null;
                                if(this.sourceName===undefined) this.sourceName = null;
                                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                                this.macros = <any>(new Map<any, any>());
                                this.imports = <any>([]);
                                this.lines = <any>([]);
                                this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                                this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                                if(this.rootElement===undefined) this.rootElement = null;
                                if(this.encoding===undefined) this.encoding = null;
                                if(this.defaultNS===undefined) this.defaultNS = null;
                                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                                if(this.autoEscaping===undefined) this.autoEscaping = false;
                                if(this.outputFormat===undefined) this.outputFormat = null;
                                if(this.name===undefined) this.name = null;
                                if(this.sourceName===undefined) this.sourceName = null;
                                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                                (() => {
                                    this.name = name;
                                    this.sourceName = sourceName;
                                    this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                                    this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                                })();
                            }
                            (() => {
                                this.setEncoding(encoding);
                                let ltbReader : Template.LineTableBuilder;
                                try {
                                    let actualParserConfiguration : ParserConfiguration = this.getParserConfiguration();
                                    if(!(reader != null && reader instanceof <any>BufferedReader) && !(reader != null && reader instanceof <any>StringReader)) {
                                        reader = new BufferedReader(reader, Template.READER_BUFFER_SIZE);
                                    }
                                    ltbReader = (() => { let __o : any = new Template.LineTableBuilder(this, reader, actualParserConfiguration); __o.__delegate = new Template.LineTableBuilder(this, reader, actualParserConfiguration); return __o; })();
                                    reader = ltbReader;
                                    try {
                                        let parser : FMParser = new FMParser(this, reader, actualParserConfiguration);
                                        if(cfg != null) {
                                            _CoreAPI.setPreventStrippings(parser, cfg.getPreventStrippings());
                                        }
                                        try {
                                            this.rootElement = parser.Root();
                                        } catch(exc) {
                                            if(!ltbReader.hasFailure()) {
                                                throw exc;
                                            }
                                            this.rootElement = null;
                                        }
                                        this.actualTagSyntax = parser._getLastTagSyntax();
                                        this.interpolationSyntax = actualParserConfiguration.getInterpolationSyntax();
                                        this.actualNamingConvention = parser._getLastNamingConvention();
                                    } catch(exc) {
                                        throw exc.toParseException(this);
                                    }
                                } catch(e) {
                                    e.setTemplateName(this.getSourceName());
                                    throw e;
                                } finally {
                                    reader.close();
                                }
                                ltbReader.throwFailure();
                            })();
                        }
                    }
                }
            }
        } else if(((typeof name === 'string') || name === null) && ((sourceName != null && sourceName instanceof <any>TemplateElement) || sourceName === null) && ((reader != null && reader instanceof <any>Configuration) || reader === null) && cfg === undefined && customParserConfiguration === undefined && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let root : any = __args[1];
            let cfg : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let sourceName : any = null;
                let customParserConfiguration : any = <ParserConfiguration><any>null;
                super(Template.toNonNull(cfg));
                if(this.rootElement===undefined) this.rootElement = null;
                if(this.encoding===undefined) this.encoding = null;
                if(this.defaultNS===undefined) this.defaultNS = null;
                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.name===undefined) this.name = null;
                if(this.sourceName===undefined) this.sourceName = null;
                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                this.macros = <any>(new Map<any, any>());
                this.imports = <any>([]);
                this.lines = <any>([]);
                this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                if(this.rootElement===undefined) this.rootElement = null;
                if(this.encoding===undefined) this.encoding = null;
                if(this.defaultNS===undefined) this.defaultNS = null;
                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                if(this.autoEscaping===undefined) this.autoEscaping = false;
                if(this.outputFormat===undefined) this.outputFormat = null;
                if(this.name===undefined) this.name = null;
                if(this.sourceName===undefined) this.sourceName = null;
                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                (() => {
                    this.name = name;
                    this.sourceName = sourceName;
                    this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                    this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                })();
            }
            (() => {
                this.rootElement = root;
            })();
        } else if(((typeof name === 'string') || name === null) && ((sourceName != null && sourceName instanceof <any>Reader) || sourceName === null) && reader === undefined && cfg === undefined && customParserConfiguration === undefined && encoding === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let reader : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cfg : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let sourceName : any = null;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let encoding : any = null;
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let customParserConfiguration : any = null;
                            {
                                let __args = Array.prototype.slice.call(arguments);
                                super(Template.toNonNull(cfg));
                                if(this.rootElement===undefined) this.rootElement = null;
                                if(this.encoding===undefined) this.encoding = null;
                                if(this.defaultNS===undefined) this.defaultNS = null;
                                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                                if(this.autoEscaping===undefined) this.autoEscaping = false;
                                if(this.outputFormat===undefined) this.outputFormat = null;
                                if(this.name===undefined) this.name = null;
                                if(this.sourceName===undefined) this.sourceName = null;
                                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                                this.macros = <any>(new Map<any, any>());
                                this.imports = <any>([]);
                                this.lines = <any>([]);
                                this.prefixToNamespaceURILookup = <any>(new Map<any, any>());
                                this.namespaceURIToPrefixLookup = <any>(new Map<any, any>());
                                if(this.rootElement===undefined) this.rootElement = null;
                                if(this.encoding===undefined) this.encoding = null;
                                if(this.defaultNS===undefined) this.defaultNS = null;
                                if(this.customLookupCondition===undefined) this.customLookupCondition = null;
                                if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
                                if(this.actualTagSyntax===undefined) this.actualTagSyntax = 0;
                                if(this.actualNamingConvention===undefined) this.actualNamingConvention = 0;
                                if(this.autoEscaping===undefined) this.autoEscaping = false;
                                if(this.outputFormat===undefined) this.outputFormat = null;
                                if(this.name===undefined) this.name = null;
                                if(this.sourceName===undefined) this.sourceName = null;
                                if(this.parserConfiguration===undefined) this.parserConfiguration = null;
                                if(this.templateLanguageVersion===undefined) this.templateLanguageVersion = null;
                                (() => {
                                    this.name = name;
                                    this.sourceName = sourceName;
                                    this.templateLanguageVersion = Template.normalizeTemplateLanguageVersion(Template.toNonNull(cfg).getIncompatibleImprovements());
                                    this.parserConfiguration = customParserConfiguration != null?customParserConfiguration:this.getConfiguration();
                                })();
                            }
                            (() => {
                                this.setEncoding(encoding);
                                let ltbReader : Template.LineTableBuilder;
                                try {
                                    let actualParserConfiguration : ParserConfiguration = this.getParserConfiguration();
                                    if(!(reader != null && reader instanceof <any>BufferedReader) && !(reader != null && reader instanceof <any>StringReader)) {
                                        reader = new BufferedReader(reader, Template.READER_BUFFER_SIZE);
                                    }
                                    ltbReader = (() => { let __o : any = new Template.LineTableBuilder(this, reader, actualParserConfiguration); __o.__delegate = new Template.LineTableBuilder(this, reader, actualParserConfiguration); return __o; })();
                                    reader = ltbReader;
                                    try {
                                        let parser : FMParser = new FMParser(this, reader, actualParserConfiguration);
                                        if(cfg != null) {
                                            _CoreAPI.setPreventStrippings(parser, cfg.getPreventStrippings());
                                        }
                                        try {
                                            this.rootElement = parser.Root();
                                        } catch(exc) {
                                            if(!ltbReader.hasFailure()) {
                                                throw exc;
                                            }
                                            this.rootElement = null;
                                        }
                                        this.actualTagSyntax = parser._getLastTagSyntax();
                                        this.interpolationSyntax = actualParserConfiguration.getInterpolationSyntax();
                                        this.actualNamingConvention = parser._getLastNamingConvention();
                                    } catch(exc) {
                                        throw exc.toParseException(this);
                                    }
                                } catch(e) {
                                    e.setTemplateName(this.getSourceName());
                                    throw e;
                                } finally {
                                    reader.close();
                                }
                                ltbReader.throwFailure();
                            })();
                        }
                    }
                }
            }
        } else throw new Error('invalid overload');
    }

    public static getPlainTextTemplate$java_lang_String$java_lang_String$freemarker_template_Configuration(name : string, content : string, config : Configuration) : Template {
        return Template.getPlainTextTemplate$java_lang_String$java_lang_String$java_lang_String$freemarker_template_Configuration(name, null, content, config);
    }

    public static getPlainTextTemplate$java_lang_String$java_lang_String$java_lang_String$freemarker_template_Configuration(name : string, sourceName : string, content : string, config : Configuration) : Template {
        let template : Template;
        try {
            template = new Template(name, sourceName, new StringReader("X"), config);
        } catch(e) {
            throw new BugException("Plain text template creation failed", e);
        }
        _CoreAPI.replaceText(<TextBlock>template.rootElement, content);
        return template;
    }

    /**
     * Creates (not "get"-s) a {link Template} that only contains a single block of static text, no dynamic content.
     * 
     * @param {String} name       See {link #getName} for more details.
     * @param {String} sourceName See {link #getSourceName} for more details. If {@code null}, it will be the same as the {@code name}.
     * @param {String} content    the block of text that this template represents
     * @param {Configuration} config     the configuration to which this template belongs
     * @since 2.3.22
     * @return {Template}
     */
    public static getPlainTextTemplate(name? : any, sourceName? : any, content? : any, config? : any) : any {
        if(((typeof name === 'string') || name === null) && ((typeof sourceName === 'string') || sourceName === null) && ((typeof content === 'string') || content === null) && ((config != null && config instanceof <any>Configuration) || config === null)) {
            return <any>Template.getPlainTextTemplate$java_lang_String$java_lang_String$java_lang_String$freemarker_template_Configuration(name, sourceName, content, config);
        } else if(((typeof name === 'string') || name === null) && ((typeof sourceName === 'string') || sourceName === null) && ((content != null && content instanceof <any>Configuration) || content === null) && config === undefined) {
            return <any>Template.getPlainTextTemplate$java_lang_String$java_lang_String$freemarker_template_Configuration(name, sourceName, content);
        } else throw new Error('invalid overload');
    }

    static normalizeTemplateLanguageVersion(incompatibleImprovements : Version) : Version {
        _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
        let v : number = incompatibleImprovements.intValue();
        if(v < /*_TemplateAPI.VERSION_INT_2_3_19_$LI$()*/2003019) {
            return Configuration.VERSION_2_3_0_$LI$();
        } else if(v > /*_TemplateAPI.VERSION_INT_2_3_21_$LI$()*/2003021) {
            return Configuration.VERSION_2_3_21_$LI$();
        } else {
            return incompatibleImprovements;
        }
    }

    public process$java_lang_Object$java_io_Writer(dataModel : any, out : Writer) {
        this.createProcessingEnvironment$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel, out, null).process();
    }

    public process$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper$freemarker_template_TemplateNodeModel(dataModel : any, out : Writer, wrapper : ObjectWrapper, rootNode : TemplateNodeModel) {
        let env : any = this.createProcessingEnvironment$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel, out, wrapper);
        if(rootNode != null) {
            env.setCurrentVisitorNode(rootNode);
        }
        env.process();
    }

    /**
     * Like {link #process(Object, Writer)}, but also sets a (XML-)node to be recursively processed by the template.
     * That node is accessed in the template with <tt>.node</tt>, <tt>#recurse</tt>, etc. See the
     * <a href="https://freemarker.apache.org/docs/xgui_declarative.html" target="_blank">Declarative XML Processing</a> as a
     * typical example of recursive node processing.
     * 
     * @param {*} rootNode The root node for recursive processing or {@code null}.
     * @throws TemplateException if an exception occurs during template processing
     * @throws IOException       if an I/O exception occurs during writing to the writer.
     * @param {Object} dataModel
     * @param {Writer} out
     * @param {*} wrapper
     */
    public process(dataModel? : any, out? : any, wrapper? : any, rootNode? : any) : any {
        if(((dataModel != null) || dataModel === null) && ((out != null && out instanceof <any>Writer) || out === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null) && ((rootNode != null && (rootNode["__interfaces"] != null && rootNode["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0 || rootNode.constructor != null && rootNode.constructor["__interfaces"] != null && rootNode.constructor["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0)) || rootNode === null)) {
            return <any>this.process$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper$freemarker_template_TemplateNodeModel(dataModel, out, wrapper, rootNode);
        } else if(((dataModel != null) || dataModel === null) && ((out != null && out instanceof <any>Writer) || out === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null) && rootNode === undefined) {
            return <any>this.process$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel, out, wrapper);
        } else if(((dataModel != null) || dataModel === null) && ((out != null && out instanceof <any>Writer) || out === null) && wrapper === undefined && rootNode === undefined) {
            return <any>this.process$java_lang_Object$java_io_Writer(dataModel, out);
        } else throw new Error('invalid overload');
    }

    public process$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel : any, out : Writer, wrapper : ObjectWrapper) {
        this.createProcessingEnvironment$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel, out, wrapper).process();
    }

    public createProcessingEnvironment$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel : any, out : Writer, wrapper : ObjectWrapper) : any {
        let dataModelHash : TemplateHashModel;
        if(dataModel != null && (dataModel["__interfaces"] != null && dataModel["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || dataModel.constructor != null && dataModel.constructor["__interfaces"] != null && dataModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) {
            dataModelHash = <TemplateHashModel><any>dataModel;
        } else {
            if(wrapper == null) {
                wrapper = this.getObjectWrapper();
            }
            if(dataModel == null) {
                dataModelHash = new SimpleHash(wrapper);
            } else {
                let wrappedDataModel : TemplateModel = wrapper['wrap$java_lang_Object'](dataModel);
                if(wrappedDataModel != null && (wrappedDataModel["__interfaces"] != null && wrappedDataModel["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || wrappedDataModel.constructor != null && wrappedDataModel.constructor["__interfaces"] != null && wrappedDataModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) {
                    dataModelHash = <TemplateHashModel><any>wrappedDataModel;
                } else if(wrappedDataModel == null) {
                    throw Object.defineProperty(new Error(/* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>wrapper.constructor)) + " converted " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>dataModel.constructor)) + " to null."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                } else {
                    throw Object.defineProperty(new Error(/* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>wrapper.constructor)) + " didn\'t convert " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>dataModel.constructor)) + " to a TemplateHashModel. Generally, you want to use a Map<String, Object> or a JavaBean as the root-map (aka. data-model) parameter. The Map key-s or JavaBean property names will be the variable names in the template."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
            }
        }
        return new (require('../core/Environment'))(this, dataModelHash, out);
    }

    /**
     * Creates a {link freemarker.core.Environment Environment} object, using this template, the data-model provided as
     * parameter. You have to call {link Environment#process()} on the return value to set off the actual rendering.
     * 
     * <p>Use this method if you want to do some special initialization on the {link Environment} before template
     * processing, or if you want to read the {link Environment} after template processing. Otherwise using
     * {link Template#process(Object, Writer)} is simpler.
     * 
     * <p>Example:
     * 
     * <pre>
     * Environment env = myTemplate.createProcessingEnvironment(root, out, null);
     * env.process();</pre>
     * 
     * <p>The above is equivalent with this:
     * 
     * <pre>
     * myTemplate.process(root, out);</pre>
     * 
     * <p>But with <tt>createProcessingEnvironment</tt>, you can manipulate the environment
     * before and after the processing:
     * 
     * <pre>
     * Environment env = myTemplate.createProcessingEnvironment(root, out);
     * 
     * env.setLocale(myUsersPreferredLocale);
     * env.setTimeZone(myUsersPreferredTimezone);
     * 
     * env.process();  // output is rendered here
     * 
     * TemplateModel x = env.getVariable("x");  // read back a variable set by the template</pre>
     * 
     * @param {Object} dataModel the holder of the variables visible from all templates; see {link #process(Object, Writer)} for
     * more details.
     * @param {*} wrapper   The {link ObjectWrapper} to use to wrap objects into {link TemplateModel}
     * instances. Normally you left it {@code null}, in which case {link Configurable#getObjectWrapper()} will be
     * used.
     * @param {Writer} out       The {link Writer} where the output of the template will go; see {link #process(Object, Writer)} for
     * more details.
     * @return {Environment} the {link Environment} object created for processing. Call {link Environment#process()} to process the
     * template.
     * @throws TemplateException if an exception occurs while setting up the Environment object.
     */
    public createProcessingEnvironment(dataModel? : any, out? : any, wrapper? : any) : any {
        if(((dataModel != null) || dataModel === null) && ((out != null && out instanceof <any>Writer) || out === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null)) {
            return <any>this.createProcessingEnvironment$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel, out, wrapper);
        } else if(((dataModel != null) || dataModel === null) && ((out != null && out instanceof <any>Writer) || out === null) && wrapper === undefined) {
            return <any>this.createProcessingEnvironment$java_lang_Object$java_io_Writer(dataModel, out);
        } else throw new Error('invalid overload');
    }

    public createProcessingEnvironment$java_lang_Object$java_io_Writer(dataModel : any, out : Writer) : any {
        return this.createProcessingEnvironment$java_lang_Object$java_io_Writer$freemarker_template_ObjectWrapper(dataModel, out, null);
    }

    /**
     * Returns a string representing the raw template
     * text in canonical form.
     * @return {String}
     */
    public toString() : string {
        let sw : StringWriter = new StringWriter();
        try {
            this.dump$java_io_Writer(sw);
        } catch(ioe) {
            throw Object.defineProperty(new Error(ioe.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return sw.toString();
    }

    /**
     * The usually path-like (or URL-like) identifier of the template, or possibly {@code null} for non-stored
     * templates. It usually looks like a relative UN*X path; it should use {@code /}, not {@code \}, and shouldn't
     * start with {@code /} (but there are no hard guarantees). It's not a real path in a file-system, it's just a name
     * that a {link TemplateLoader} used to load the backing resource (in simple cases; actually that name is
     * {link #getSourceName()}, but see it there). Or, it can also be a name that was never used to load the template
     * (directly created with {link #Template(String, Reader, Configuration)}). Even if the templates are stored
     * straightforwardly in files, this is relative to the base directory of the {link TemplateLoader}. So it really
     * could be anything, except that it has importance in these situations:
     * 
     * <p>
     * Relative paths to other templates in this template will be resolved relatively to the directory part of this.
     * Like if the template name is {@code "foo/this.ftl"}, then {@code <#include "other.ftl">} gets the template with
     * name {@code "foo/other.ftl"}.
     * </p>
     * 
     * <p>
     * You should not use this name to indicate error locations, or to find the actual templates in general, because
     * localized lookup, acquisition and other lookup strategies can transform names before they get to the
     * {link TemplateLoader} (the template storage) mechanism. Use {link #getSourceName()} for these purposes.
     * </p>
     * <p>
     * <p>
     * Some frameworks use URL-like template names like {@code "someSchema://foo/bar.ftl"}. FreeMarker understands this
     * notation, so an absolute path like {@code "/baaz.ftl"} in that template will be resolved too
     * {@code "someSchema://baaz.ftl"}.
     * @return {String}
     */
    public getName() : string {
        return this.name;
    }

    /**
     * The name that was actually used to load this template from the {link TemplateLoader} (or from other custom
     * storage mechanism). This is what should be shown in error messages as the error location. This is usually the
     * same as {link #getName()}, except when localized lookup, template acquisition ({@code *} step in the name), or
     * other {link TemplateLookupStrategy} transforms the requested name ({link #getName()}) to a different final
     * {link TemplateLoader}-level name. For example, when you get a template with name {@code "foo.ftl"} then because
     * of localized lookup, it's possible that something like {@code "foo_en.ftl"} will be loaded behind the scenes.
     * While the template name will be still the same as the requested template name ({@code "foo.ftl"}), errors should
     * point to {@code "foo_de.ftl"}. Note that relative paths are always resolved relatively to the {@code name}, not
     * to the {@code sourceName}.
     * 
     * @since 2.3.22
     * @return {String}
     */
    public getSourceName() : string {
        return this.sourceName != null?this.sourceName:this.getName();
    }

    /**
     * Returns the Configuration object associated with this template.
     * @return {Configuration}
     */
    public getConfiguration() : Configuration {
        return <Configuration>this.getParent();
    }

    /**
     * Returns the {link ParserConfiguration} that was used for parsing this template. This is most often the same
     * object as {link #getConfiguration()}, but sometimes it's a {link TemplateConfiguration}, or something else.
     * It's never {@code null}.
     * 
     * @since 2.3.24
     * @return {*}
     */
    public getParserConfiguration() : ParserConfiguration {
        return this.parserConfiguration;
    }

    /**
     * Return the template language (FTL) version used by this template.
     * For now (2.3.21) this is the same as {link Configuration#getIncompatibleImprovements()}, except
     * that it's normalized to the lowest version where the template language was changed.
     * @return {Version}
     */
    getTemplateLanguageVersion() : Version {
        return this.templateLanguageVersion;
    }

    /**
     * @param {String} encoding The encoding that was used to read this template. When this template {@code #include}-s or
     * {@code #import}-s another template, by default it will use this encoding for those. For backward
     * compatibility, this can be {@code null}, which will unset this setting.
     * @deprecated Should only be used internally, and might will be removed later.
     */
    public setEncoding(encoding : string) {
        this.encoding = encoding;
    }

    /**
     * The encoding that was (allegedly) used to read this template; also the the default character encoding used for
     * reading files included from this template. Possibly {@code null}, in which case you are supposed to use
     * {link Configuration#getEncoding(Locale)}.
     * @return {String}
     */
    public getEncoding() : string {
        return this.encoding;
    }

    /**
     * Gets the custom lookup condition with which this template was found. See the {@code customLookupCondition}
     * parameter of {link Configuration#getTemplate(String, java.util.Locale, Object, String, boolean, boolean)} for
     * more explanation.
     * 
     * @since 2.3.22
     * @return {Object}
     */
    public getCustomLookupCondition() : any {
        return this.customLookupCondition;
    }

    /**
     * Mostly only used internally; setter pair of {link #getCustomLookupCondition()}. This meant to be called directly
     * after instantiating the template with its constructor, after a successfull lookup that used this condition. So
     * this should only be called from code that deals with creating new {@code Template} objects, like from
     * {link TemplateCache}.
     * 
     * @since 2.3.22
     * @param {Object} customLookupCondition
     */
    public setCustomLookupCondition(customLookupCondition : any) {
        this.customLookupCondition = customLookupCondition;
    }

    /**
     * Returns the tag syntax the parser has chosen for this template. If the syntax could be determined, it's
     * {link Configuration#SQUARE_BRACKET_TAG_SYNTAX} or {link Configuration#ANGLE_BRACKET_TAG_SYNTAX}. If the syntax
     * couldn't be determined (like because there was no tags in the template, or it was a plain text template), this
     * returns whatever the default is in the current configuration, so it's maybe
     * {link Configuration#AUTO_DETECT_TAG_SYNTAX}.
     * <p>
     * see Configuration#setTagSyntax(int)
     * 
     * @since 2.3.20
     * @return {number}
     */
    public getActualTagSyntax() : number {
        return this.actualTagSyntax;
    }

    /**
     * Returns the interpolation syntax the parser has used for this template. Because the interpolation syntax is
     * never auto-detected, it's not called "getActualInterpolationSyntax" (unlike {link #getActualTagSyntax()}).
     * 
     * @return {number} A constant like {link Configuration#LEGACY_INTERPOLATION_SYNTAX},
     * {link Configuration#DOLLAR_INTERPOLATION_SYNTAX}, or
     * {link Configuration#SQUARE_BRACKET_INTERPOLATION_SYNTAX}.
     * <p>
     * see Configuration#setInterpolationSyntax(int)
     * @since 2.3.28
     */
    public getInterpolationSyntax() : number {
        return this.interpolationSyntax;
    }

    /**
     * Returns the naming convention the parser has chosen for this template. If it could be determined, it's
     * {link Configuration#LEGACY_NAMING_CONVENTION} or {link Configuration#CAMEL_CASE_NAMING_CONVENTION}. If it
     * couldn't be determined (like because there no identifier that's part of the template language was used where
     * the naming convention matters), this returns whatever the default is in the current configuration, so it's maybe
     * {link Configuration#AUTO_DETECT_TAG_SYNTAX}.
     * <p>
     * see Configuration#setNamingConvention(int)
     * 
     * @since 2.3.23
     * @return {number}
     */
    public getActualNamingConvention() : number {
        return this.actualNamingConvention;
    }

    /**
     * Returns the output format (see {link Configuration#setOutputFormat(OutputFormat)}) used for this template.
     * The output format of a template can come from various places, in order of increasing priority:
     * {link Configuration#getOutputFormat()}, {link ParserConfiguration#getOutputFormat()} (which is usually
     * provided by {link Configuration#getTemplateConfigurations()}) and the {@code #ftl} header's {@code output_format}
     * option in the template.
     * 
     * @since 2.3.24
     * @return {OutputFormat}
     */
    public getOutputFormat() : OutputFormat {
        return this.outputFormat;
    }

    /**
     * Meant to be called by the parser only.
     * @param {OutputFormat} outputFormat
     */
    setOutputFormat(outputFormat : OutputFormat) {
        this.outputFormat = outputFormat;
    }

    /**
     * Returns if the template actually uses auto-escaping (see {link Configuration#setAutoEscapingPolicy(int)}). This value
     * is decided by the parser based on the actual {link OutputFormat}, and the auto-escaping enums, in order of
     * increasing priority: {link Configuration#getAutoEscapingPolicy()}, {link ParserConfiguration#getAutoEscapingPolicy()}
     * (which is usually provided by {link Configuration#getTemplateConfigurations()}), and finally on the {@code #ftl}
     * header's {@code auto_esc} option in the template.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public getAutoEscaping() : boolean {
        return this.autoEscaping;
    }

    /**
     * Meant to be called by the parser only.
     * @param {boolean} autoEscaping
     */
    setAutoEscaping(autoEscaping : boolean) {
        this.autoEscaping = autoEscaping;
    }

    public dump$java_io_PrintStream(ps : PrintStream) {
        ps.print(this.rootElement.getCanonicalForm());
    }

    /**
     * Dump the raw template in canonical form.
     * @param {PrintStream} ps
     */
    public dump(ps? : any) : any {
        if(((ps != null && ps instanceof <any>PrintStream) || ps === null)) {
            return <any>this.dump$java_io_PrintStream(ps);
        } else if(((ps != null && ps instanceof <any>Writer) || ps === null)) {
            return <any>this.dump$java_io_Writer(ps);
        } else throw new Error('invalid overload');
    }

    public dump$java_io_Writer(out : Writer) {
        out.write(this.rootElement.getCanonicalForm());
    }

    /**
     * Called by code internally to maintain a table of macros
     * 
     * @deprecated Should only be used internally, and might will be removed later.
     * @param {Macro} macro
     */
    public addMacro(macro : any/*Macro*/) {
        /* put */this.macros.set(macro.getName(), macro);
    }

    /**
     * Called by code internally to maintain a list of imports
     * 
     * @deprecated Should only be used internally, and might will be removed later.
     * @param {LibraryLoad} ll
     */
    public addImport(ll : LibraryLoad) {
        /* add */(this.imports.push(ll)>0);
    }

    /**
     * Returns the template source at the location specified by the coordinates given, or {@code null} if unavailable.
     * A strange legacy in the behavior of this method is that it replaces tab characters with spaces according the
     * value of {link Template#getParserConfiguration()}/{link ParserConfiguration#getTabSize()} (which usually
     * comes from {link Configuration#getTabSize()}), because tab characters move the column number with more than
     * 1 in error messages. However, if you set the tab size to 1, this method leaves the tab characters as is.
     * 
     * @param {number} beginColumn the first column of the requested source, 1-based
     * @param {number} beginLine   the first line of the requested source, 1-based
     * @param {number} endColumn   the last column of the requested source, 1-based
     * @param {number} endLine     the last line of the requested source, 1-based
     * <p>
     * see freemarker.core.TemplateObject#getSource()
     * @return {String}
     */
    public getSource(beginColumn : number, beginLine : number, endColumn : number, endLine : number) : string {
        if(beginLine < 1 || endLine < 1) return null;
        --beginLine;
        --beginColumn;
        --endColumn;
        --endLine;
        let buf : StringBuilder = new StringBuilder("");
        for(let i : number = beginLine; i <= endLine; i++) {
            if(i < /* size */(<number>this.lines.length)) {
                buf.append(/* get */this.lines[i]);
            }
        }
        let lastLineLength : number = /* get */this.lines[endLine].toString().length;
        let trailingCharsToDelete : number = lastLineLength - endColumn - 1;
        buf.delete(0, beginColumn);
        buf.delete(buf.length() - trailingCharsToDelete, buf.length());
        return buf.toString();
    }

    /**
     * @deprecated Should only be used internally, and might will be removed later.
     * @return {TemplateElement}
     */
    public getRootTreeNode() : TemplateElement {
        return this.rootElement;
    }

    /**
     * @deprecated Should only be used internally, and might will be removed later.
     * @return {Map}
     */
    public getMacros() : Map<any, any> {
        return this.macros;
    }

    /**
     * @deprecated Should only be used internally, and might will be removed later.
     * @return {List}
     */
    public getImports() : Array<any> {
        return this.imports;
    }

    /**
     * This is used internally.
     * 
     * @deprecated Should only be used internally, and might will be removed later.
     * @param {String} prefix
     * @param {String} nsURI
     */
    public addPrefixNSMapping(prefix : string, nsURI : string) {
        if(nsURI.length === 0) {
            throw Object.defineProperty(new Error("Cannot map empty string URI"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(prefix.length === 0) {
            throw Object.defineProperty(new Error("Cannot map empty string prefix"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(prefix,Template.NO_NS_PREFIX))) {
            throw Object.defineProperty(new Error("The prefix: " + prefix + " cannot be registered, it\'s reserved for special internal use."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(/* containsKey */this.prefixToNamespaceURILookup.has(prefix)) {
            throw Object.defineProperty(new Error("The prefix: \'" + prefix + "\' was repeated. This is illegal."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(/* containsKey */this.namespaceURIToPrefixLookup.has(nsURI)) {
            throw Object.defineProperty(new Error("The namespace URI: " + nsURI + " cannot be mapped to 2 different prefixes."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(prefix,Template.DEFAULT_NAMESPACE_PREFIX))) {
            this.defaultNS = nsURI;
        } else {
            /* put */this.prefixToNamespaceURILookup.set(prefix, nsURI);
            /* put */this.namespaceURIToPrefixLookup.set(nsURI, prefix);
        }
    }

    public getDefaultNS() : string {
        return this.defaultNS;
    }

    /**
     * @return {String} the NamespaceUri mapped to this prefix in this template. (Or null if there is none.)
     * @param {String} prefix
     */
    public getNamespaceForPrefix(prefix : string) : string {
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(prefix,""))) {
            return this.defaultNS == null?"":this.defaultNS;
        }
        return <string>/* get */this.prefixToNamespaceURILookup.get(prefix);
    }

    /**
     * @return {String} the prefix mapped to this nsURI in this template. (Or null if there is none.)
     * @param {String} nsURI
     */
    public getPrefixForNamespace(nsURI : string) : string {
        if(nsURI == null) {
            return null;
        }
        if(nsURI.length === 0) {
            return this.defaultNS == null?"":Template.NO_NS_PREFIX;
        }
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nsURI,this.defaultNS))) {
            return "";
        }
        return <string>/* get */this.namespaceURIToPrefixLookup.get(nsURI);
    }

    /**
     * @return {String} the prefixed name, based on the ns_prefixes defined
     * in this template's header for the local name and node namespace
     * passed in as parameters.
     * @param {String} localName
     * @param {String} nsURI
     */
    public getPrefixedName(localName : string, nsURI : string) : string {
        if(nsURI == null || nsURI.length === 0) {
            if(this.defaultNS != null) {
                return Template.NO_NS_PREFIX + ":" + localName;
            } else {
                return localName;
            }
        }
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nsURI,this.defaultNS))) {
            return localName;
        }
        let prefix : string = this.getPrefixForNamespace(nsURI);
        if(prefix == null) {
            return null;
        }
        return prefix + ":" + localName;
    }

    /**
     * @return {List} an array of the {link TemplateElement}s containing the given column and line numbers.
     * @deprecated Should only be used internally, and might will be removed later.
     * @param {number} column
     * @param {number} line
     */
    public containingElements(column : number, line : number) : Array<any> {
        let elements : Array<any> = <any>([]);
        let element : TemplateElement = this.rootElement;
        mainloop: while((element.contains(column, line))) {
            /* add */(elements.push(element)>0);
            for(let enumeration : any = element.children(); enumeration.hasMoreElements(); ) {
                let elem : TemplateElement = <TemplateElement>enumeration.nextElement();
                if(elem.contains(column, line)) {
                    element = elem;
                    continue mainloop;
                }
            }
            break;
        }
        return /* isEmpty */(elements.length == 0)?null:elements;
    }
}
Template["__class"] = "freemarker.template.Template";


export namespace Template {

    /**
     * Reader that builds up the line table info for us, and also helps in working around JavaCC's exception
     * suppression.
     * @extends FilterReader
     * @class
     */
    export class LineTableBuilder extends FilterReader{
        public __parent: Template;
        tabSize : number;

        lineBuf : StringBuilder;

        lastChar : number;

        closed : boolean;

        /**
         * Needed to work around JavaCC behavior where it silently treats any errors as EOF.
         */
        failure : Error;

        constructor(__parent: Template, r : Reader, parserConfiguration : ParserConfiguration) {
            super(r);
            this.__parent = __parent;
            if(this.tabSize===undefined) this.tabSize = 0;
            this.lineBuf = new StringBuilder("");
            if(this.lastChar===undefined) this.lastChar = 0;
            if(this.closed===undefined) this.closed = false;
            if(this.failure===undefined) this.failure = null;
            this.tabSize = parserConfiguration.getTabSize();
        }

        public hasFailure() : boolean {
            return this.failure != null;
        }

        public throwFailure() {
            if(this.failure != null) {
                if(this.failure != null && (this.failure["__classes"] && this.failure["__classes"].indexOf("java.io.IOException") >= 0)) {
                    throw <Error>this.failure;
                }
                if(this.failure != null && (this.failure["__classes"] && this.failure["__classes"].indexOf("java.lang.RuntimeException") >= 0) || this.failure != null && this.failure instanceof <any>Error) {
                    throw <Error>this.failure;
                }
                throw Object.defineProperty(new Error(this.failure.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.reflect.UndeclaredThrowableException','java.lang.Exception'] });
            }
        }

        public read$() : number {
            try {
                let c : number = this.reader.read();
                this.handleChar(c);
                return c;
            } catch(e) {
                throw this.rememberException(e);
            }
        }

        rememberException(e : Error) : Error {
            if(!this.closed) {
                this.failure = e;
            }
            if(e != null && (e["__classes"] && e["__classes"].indexOf("java.io.IOException") >= 0)) {
                return <Error>e;
            }
            if(e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.RuntimeException") >= 0) || e != null && e instanceof <any>Error) {
                throw <Error>e;
            }
            throw Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.reflect.UndeclaredThrowableException','java.lang.Exception'] });
        }

        public read$char_A$int$int(cbuf : string[], off : number, len : number) : number {
            try {
                let numchars : number = this.reader.read(cbuf, off, len);
                for(let i : number = off; i < off + numchars; i++) {
                    let c : string = cbuf[i];
                    this.handleChar((c).charCodeAt(0));
                }
                return numchars;
            } catch(e) {
                throw this.rememberException(e);
            }
        }

        /**
         * 
         * @param {Array} cbuf
         * @param {number} off
         * @param {number} len
         * @return {number}
         */
        public read(cbuf? : any, off? : any, len? : any) : any {
            if(((cbuf != null && cbuf instanceof <any>Array && (cbuf.length==0 || cbuf[0] == null ||(typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.read$char_A$int$int(cbuf, off, len);
            } else if(cbuf === undefined && off === undefined && len === undefined) {
                return <any>this.read$();
            } else throw new Error('invalid overload');
        }

        /**
         * 
         */
        public close() {
            if(this.lineBuf.length() > 0) {
                /* add */(this.__parent.lines.push(this.lineBuf.toString())>0);
                this.lineBuf.setLength(0);
            }
            super.close();
            this.closed = true;
        }

        handleChar(c : number) {
            if(c == '\n'.charCodeAt(0) || c == '\r'.charCodeAt(0)) {
                if(this.lastChar == '\r'.charCodeAt(0) && c == '\n'.charCodeAt(0)) {
                    let lastIndex : number = /* size */(<number>this.__parent.lines.length) - 1;
                    let lastLine : string = <string>/* get */this.__parent.lines[lastIndex];
                    /* set */(this.__parent.lines[lastIndex] = lastLine + '\n');
                } else {
                    this.lineBuf.append(String.fromCharCode(c));
                    /* add */(this.__parent.lines.push(this.lineBuf.toString())>0);
                    this.lineBuf.setLength(0);
                }
            } else if(c == '\t'.charCodeAt(0) && this.tabSize !== 1) {
                let numSpaces : number = this.tabSize - (this.lineBuf.length() % this.tabSize);
                for(let i : number = 0; i < numSpaces; i++) {
                    this.lineBuf.append(' ');
                }
            } else {
                this.lineBuf.append(String.fromCharCode(c));
            }
            this.lastChar = c;
        }
    }
    LineTableBuilder["__class"] = "freemarker.template.Template.LineTableBuilder";
    LineTableBuilder["__interfaces"] = ["java.io.Closeable","java.lang.Readable","java.lang.AutoCloseable"];



    /**
     * @since 2.3.22
     * @param {String} templateSpecifiedEncoding
     * @param {String} constructorSpecifiedEncoding
     * @class
     * @extends ParseException
     */
    export class WrongEncodingException extends ParseException {
        static serialVersionUID : number = 1;

        /**
         * @deprecated Use {link #getTemplateSpecifiedEncoding()} instead.
         */
        public specifiedEncoding : string;

        constructorSpecifiedEncoding : string;

        public constructor(templateSpecifiedEncoding? : any, constructorSpecifiedEncoding? : any) {
            if(((typeof templateSpecifiedEncoding === 'string') || templateSpecifiedEncoding === null) && ((typeof constructorSpecifiedEncoding === 'string') || constructorSpecifiedEncoding === null)) {
                let __args = Array.prototype.slice.call(arguments);
                super();
                if(this.specifiedEncoding===undefined) this.specifiedEncoding = null;
                if(this.constructorSpecifiedEncoding===undefined) this.constructorSpecifiedEncoding = null;
                (<any>Object).setPrototypeOf(this, WrongEncodingException.prototype);
                if(this.specifiedEncoding===undefined) this.specifiedEncoding = null;
                if(this.constructorSpecifiedEncoding===undefined) this.constructorSpecifiedEncoding = null;
                (() => {
                    this.specifiedEncoding = templateSpecifiedEncoding;
                    this.constructorSpecifiedEncoding = constructorSpecifiedEncoding;
                })();
            } else if(((typeof templateSpecifiedEncoding === 'string') || templateSpecifiedEncoding === null) && constructorSpecifiedEncoding === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let constructorSpecifiedEncoding : any = null;
                    super();
                    if(this.specifiedEncoding===undefined) this.specifiedEncoding = null;
                    if(this.constructorSpecifiedEncoding===undefined) this.constructorSpecifiedEncoding = null;
                    (<any>Object).setPrototypeOf(this, WrongEncodingException.prototype);
                    if(this.specifiedEncoding===undefined) this.specifiedEncoding = null;
                    if(this.constructorSpecifiedEncoding===undefined) this.constructorSpecifiedEncoding = null;
                    (() => {
                        this.specifiedEncoding = templateSpecifiedEncoding;
                        this.constructorSpecifiedEncoding = constructorSpecifiedEncoding;
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @return {String}
         */
        public getMessage() : string {
            return "Encoding specified inside the template (" + this.specifiedEncoding + ") doesn\'t match the encoding specified for the Template constructor" + (this.constructorSpecifiedEncoding != null?" (" + this.constructorSpecifiedEncoding + ").":".");
        }

        /**
         * @since 2.3.22
         * @return {String}
         */
        public getTemplateSpecifiedEncoding() : string {
            return this.specifiedEncoding;
        }

        /**
         * @since 2.3.22
         * @return {String}
         */
        public getConstructorSpecifiedEncoding() : string {
            return this.constructorSpecifiedEncoding;
        }
    }
    WrongEncodingException["__class"] = "freemarker.template.Template.WrongEncodingException";
    WrongEncodingException["__interfaces"] = ["freemarker.core.FMParserConstants","java.io.Serializable"];


}