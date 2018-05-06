/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../template/Configuration';
import {Version} from '../template/Version';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {NullArgumentException} from '../template/utility/NullArgumentException';
import {Configurable} from './Configurable';
import {ParserConfiguration} from './ParserConfiguration';
import {OutputFormat} from './OutputFormat';
import {Map} from '../../java/util/Map';
import {List} from "../../java/util/List";

/**
 * Creates a new instance. The parent will be {link Configuration#getDefaultConfiguration()} initially, but it will
 * be changed to the real parent {link Configuration} when this object is added to the {link Configuration}. (It's
 * not allowed to add the same instance to multiple {link Configuration}-s).
 * @class
 * @extends Configurable
 */
export class TemplateConfiguration extends Configurable implements ParserConfiguration {
    /*private*/ parentConfigurationSet : boolean;

    /*private*/ tagSyntax : number;

    /*private*/ interpolationSyntax : number;

    /*private*/ namingConvention : number;

    /*private*/ whitespaceStripping : boolean;

    /*private*/ strictSyntaxMode : boolean;

    /*private*/ autoEscapingPolicy : number;

    /*private*/ recognizeStandardFileExtensions : boolean;

    /*private*/ outputFormat : OutputFormat;

    /*private*/ encoding : string;

    /*private*/ tabSize : number;

    public constructor() {
        super(Configuration.getDefaultConfiguration());
        if(this.parentConfigurationSet===undefined) this.parentConfigurationSet = false;
        if(this.tagSyntax===undefined) this.tagSyntax = null;
        if(this.interpolationSyntax===undefined) this.interpolationSyntax = null;
        if(this.namingConvention===undefined) this.namingConvention = null;
        if(this.whitespaceStripping===undefined) this.whitespaceStripping = null;
        if(this.strictSyntaxMode===undefined) this.strictSyntaxMode = null;
        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = null;
        if(this.recognizeStandardFileExtensions===undefined) this.recognizeStandardFileExtensions = null;
        if(this.outputFormat===undefined) this.outputFormat = null;
        if(this.encoding===undefined) this.encoding = null;
        if(this.tabSize===undefined) this.tabSize = null;
    }

    /**
     * Same as {link #setParentConfiguration(Configuration)}.
     * @param {Configurable} cfg
     */
    setParent(cfg : Configurable) {
        NullArgumentException.check$java_lang_String$java_lang_Object("cfg", cfg);
        if(!(cfg != null && cfg instanceof <any>Configuration)) {
            throw Object.defineProperty(new Error("The parent of a TemplateConfiguration can only be a Configuration"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(this.parentConfigurationSet) {
            if(this.getParent() !== cfg) {
                throw Object.defineProperty(new Error("This TemplateConfiguration is already associated with a different Configuration instance."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            return;
        }
        if((<Configuration>cfg).getIncompatibleImprovements().intValue() < /*_TemplateAPI.VERSION_INT_2_3_22_$LI$()*/2003022 && this.hasAnyConfigurableSet()) {
            throw Object.defineProperty(new Error("This TemplateConfiguration can\'t be associated to a Configuration that has incompatibleImprovements less than 2.3.22, because it changes non-parser settings."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        super.setParent(cfg);
        this.parentConfigurationSet = true;
    }

    /**
     * Associates this instance with a {link Configuration}; usually you don't call this, as it's called internally
     * when this instance is added to a {link Configuration}. This method can be called only once (except with the same
     * {link Configuration} parameter again, as that changes nothing anyway).
     * 
     * @throws IllegalArgumentException if the argument is {@code null} or not a {link Configuration}
     * @throws IllegalStateException    if this object is already associated to a different {link Configuration} object,
     * or if the {@code Configuration} has {@code #getIncompatibleImprovements()} less than 2.3.22 and
     * this object tries to change any non-parser settings
     * @param {Configuration} cfg
     */
    public setParentConfiguration(cfg : Configuration) {
        this.setParent(cfg);
    }

    /**
     * Returns the parent {link Configuration}, or {@code null} if none was associated yet.
     * @return {Configuration}
     */
    public getParentConfiguration() : Configuration {
        return this.parentConfigurationSet?<Configuration>this.getParent():null;
    }

    /*private*/ getNonNullParentConfiguration() : Configuration {
        this.checkParentConfigurationSet();
        return <Configuration>this.getParent();
    }

    /**
     * Set all settings in this {link TemplateConfiguration} that were set in the parameter
     * {link TemplateConfiguration}, possibly overwriting the earlier value in this object. (A setting is said to be
     * set in a {link TemplateConfiguration} if it was explicitly set via a setter method, as opposed to be inherited.)
     * @param {TemplateConfiguration} tc
     */
    public merge(tc : TemplateConfiguration) {
        if(tc.isAPIBuiltinEnabledSet()) {
            this.setAPIBuiltinEnabled(tc.isAPIBuiltinEnabled());
        }
        if(tc.isArithmeticEngineSet()) {
            this.setArithmeticEngine(tc.getArithmeticEngine());
        }
        if(tc.isAutoEscapingPolicySet()) {
            this.setAutoEscapingPolicy(tc.getAutoEscapingPolicy());
        }
        if(tc.isAutoFlushSet()) {
            this.setAutoFlush(tc.getAutoFlush());
        }
        if(tc.isBooleanFormatSet()) {
            this.setBooleanFormat(tc.getBooleanFormat());
        }
        if(tc.isClassicCompatibleSet()) {
            this.setClassicCompatibleAsInt(tc.getClassicCompatibleAsInt());
        }
        if(tc.isCustomDateFormatsSet()) {
            this.setCustomDateFormats(this.mergeMaps(this.getCustomDateFormats(), tc.getCustomDateFormats(), false));
        }
        if(tc.isCustomNumberFormatsSet()) {
            this.setCustomNumberFormats(this.mergeMaps(this.getCustomNumberFormats(), tc.getCustomNumberFormats(), false));
        }
        if(tc.isDateFormatSet()) {
            this.setDateFormat(tc.getDateFormat());
        }
        if(tc.isDateTimeFormatSet()) {
            this.setDateTimeFormat(tc.getDateTimeFormat());
        }
        if(tc.isEncodingSet()) {
            this.setEncoding(tc.getEncoding());
        }
        if(tc.isLocaleSet()) {
            this.setLocale(tc.getLocale());
        }
        if(tc.isLogTemplateExceptionsSet()) {
            this.setLogTemplateExceptions(tc.getLogTemplateExceptions());
        }
        if(tc.isWrapUncheckedExceptionsSet()) {
            this.setWrapUncheckedExceptions(tc.getWrapUncheckedExceptions());
        }
        if(tc.isNamingConventionSet()) {
            this.setNamingConvention(tc.getNamingConvention());
        }
        if(tc.isNewBuiltinClassResolverSet()) {
            this.setNewBuiltinClassResolver(tc.getNewBuiltinClassResolver());
        }
        if(tc.isNumberFormatSet()) {
            this.setNumberFormat(tc.getNumberFormat());
        }
        if(tc.isObjectWrapperSet()) {
            this.setObjectWrapper(tc.getObjectWrapper());
        }
        if(tc.isOutputEncodingSet()) {
            this.setOutputEncoding(tc.getOutputEncoding());
        }
        if(tc.isOutputFormatSet()) {
            this.setOutputFormat(tc.getOutputFormat());
        }
        if(tc.isRecognizeStandardFileExtensionsSet()) {
            this.setRecognizeStandardFileExtensions(tc.getRecognizeStandardFileExtensions());
        }
        if(tc.isShowErrorTipsSet()) {
            this.setShowErrorTips(tc.getShowErrorTips());
        }
        if(tc.isSQLDateAndTimeTimeZoneSet()) {
            this.setSQLDateAndTimeTimeZone(tc.getSQLDateAndTimeTimeZone());
        }
        if(tc.isStrictSyntaxModeSet()) {
            this.setStrictSyntaxMode(tc.getStrictSyntaxMode());
        }
        if(tc.isTagSyntaxSet()) {
            this.setTagSyntax(tc.getTagSyntax());
        }
        if(tc.isInterpolationSyntaxSet()) {
            this.setInterpolationSyntax(tc.getInterpolationSyntax());
        }
        if(tc.isTemplateExceptionHandlerSet()) {
            this.setTemplateExceptionHandler(tc.getTemplateExceptionHandler());
        }
        if(tc.isAttemptExceptionReporterSet()) {
            this.setAttemptExceptionReporter(tc.getAttemptExceptionReporter());
        }
        if(tc.isTimeFormatSet()) {
            this.setTimeFormat(tc.getTimeFormat());
        }
        if(tc.isTimeZoneSet()) {
            this.setTimeZone(tc.getTimeZone());
        }
        if(tc.isURLEscapingCharsetSet()) {
            this.setURLEscapingCharset(tc.getURLEscapingCharset());
        }
        if(tc.isWhitespaceStrippingSet()) {
            this.setWhitespaceStripping(tc.getWhitespaceStripping());
        }
        if(tc.isTabSizeSet()) {
            this.setTabSize(tc.getTabSize());
        }
        if(tc.isLazyImportsSet()) {
            this.setLazyImports(tc.getLazyImports());
        }
        if(tc.isLazyAutoImportsSet()) {
            this.setLazyAutoImports(tc.getLazyAutoImports());
        }
        if(tc.isAutoImportsSet()) {
            this.setAutoImports(this.mergeMaps(this.getAutoImportsWithoutFallback(), tc.getAutoImportsWithoutFallback(), true));
        }
        if(tc.isAutoIncludesSet()) {
            this.setAutoIncludes(this.mergeLists(this.getAutoIncludesWithoutFallback(), tc.getAutoIncludesWithoutFallback()));
        }
        tc.copyDirectCustomAttributes(this, true);
    }

    /**
     * Sets those settings of the {link Template} which aren't yet set in the {link Template} and are set in this
     * {link TemplateConfiguration}, leaves the other settings as is. A setting is said to be set in a
     * {link TemplateConfiguration} or {link Template} if it was explicitly set via a setter method on that object, as
     * opposed to be inherited from the {link Configuration}.
     * <p>
     * <p>
     * Note that this method doesn't deal with settings that influence the parser, as those are already baked in at this
     * point via the {link ParserConfiguration}.
     * <p>
     * <p>
     * Note that the {@code encoding} setting of the {link Template} counts as unset if it's {@code null},
     * even if {@code null} was set via {link Template#setEncoding(String)}.
     * 
     * @throws IllegalStateException If the parent configuration wasn't yet set.
     * @param {Template} template
     */
    public apply(template : /*Template*/any) {
        let cfg : Configuration = this.getNonNullParentConfiguration();
        if(template.getConfiguration() !== cfg) {
            throw Object.defineProperty(new Error("The argument Template doesn\'t belong to the same Configuration as the TemplateConfiguration"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(this.isAPIBuiltinEnabledSet() && !template.isAPIBuiltinEnabledSet()) {
            template.setAPIBuiltinEnabled(this.isAPIBuiltinEnabled());
        }
        if(this.isArithmeticEngineSet() && !template.isArithmeticEngineSet()) {
            template.setArithmeticEngine(this.getArithmeticEngine());
        }
        if(this.isAutoFlushSet() && !template.isAutoFlushSet()) {
            template.setAutoFlush(this.getAutoFlush());
        }
        if(this.isBooleanFormatSet() && !template.isBooleanFormatSet()) {
            template.setBooleanFormat(this.getBooleanFormat());
        }
        if(this.isClassicCompatibleSet() && !template.isClassicCompatibleSet()) {
            template.setClassicCompatibleAsInt(this.getClassicCompatibleAsInt());
        }
        if(this.isCustomDateFormatsSet()) {
            template.setCustomDateFormats(this.mergeMaps(this.getCustomDateFormats(), template.getCustomDateFormatsWithoutFallback(), false));
        }
        if(this.isCustomNumberFormatsSet()) {
            template.setCustomNumberFormats(this.mergeMaps(this.getCustomNumberFormats(), template.getCustomNumberFormatsWithoutFallback(), false));
        }
        if(this.isDateFormatSet() && !template.isDateFormatSet()) {
            template.setDateFormat(this.getDateFormat());
        }
        if(this.isDateTimeFormatSet() && !template.isDateTimeFormatSet()) {
            template.setDateTimeFormat(this.getDateTimeFormat());
        }
        if(this.isEncodingSet() && template.getEncoding() == null) {
            template.setEncoding(this.getEncoding());
        }
        if(this.isLocaleSet() && !template.isLocaleSet()) {
            template.setLocale(this.getLocale());
        }
        if(this.isLogTemplateExceptionsSet() && !template.isLogTemplateExceptionsSet()) {
            template.setLogTemplateExceptions(this.getLogTemplateExceptions());
        }
        if(this.isWrapUncheckedExceptionsSet() && !template.isWrapUncheckedExceptionsSet()) {
            template.setWrapUncheckedExceptions(this.getWrapUncheckedExceptions());
        }
        if(this.isNewBuiltinClassResolverSet() && !template.isNewBuiltinClassResolverSet()) {
            template.setNewBuiltinClassResolver(this.getNewBuiltinClassResolver());
        }
        if(this.isNumberFormatSet() && !template.isNumberFormatSet()) {
            template.setNumberFormat(this.getNumberFormat());
        }
        if(this.isObjectWrapperSet() && !template.isObjectWrapperSet()) {
            template.setObjectWrapper(this.getObjectWrapper());
        }
        if(this.isOutputEncodingSet() && !template.isOutputEncodingSet()) {
            template.setOutputEncoding(this.getOutputEncoding());
        }
        if(this.isShowErrorTipsSet() && !template.isShowErrorTipsSet()) {
            template.setShowErrorTips(this.getShowErrorTips());
        }
        if(this.isSQLDateAndTimeTimeZoneSet() && !template.isSQLDateAndTimeTimeZoneSet()) {
            template.setSQLDateAndTimeTimeZone(this.getSQLDateAndTimeTimeZone());
        }
        if(this.isTemplateExceptionHandlerSet() && !template.isTemplateExceptionHandlerSet()) {
            template.setTemplateExceptionHandler(this.getTemplateExceptionHandler());
        }
        if(this.isAttemptExceptionReporterSet() && !template.isAttemptExceptionReporterSet()) {
            template.setAttemptExceptionReporter(this.getAttemptExceptionReporter());
        }
        if(this.isTimeFormatSet() && !template.isTimeFormatSet()) {
            template.setTimeFormat(this.getTimeFormat());
        }
        if(this.isTimeZoneSet() && !template.isTimeZoneSet()) {
            template.setTimeZone(this.getTimeZone());
        }
        if(this.isURLEscapingCharsetSet() && !template.isURLEscapingCharsetSet()) {
            template.setURLEscapingCharset(this.getURLEscapingCharset());
        }
        if(this.isLazyImportsSet() && !template.isLazyImportsSet()) {
            template.setLazyImports(this.getLazyImports());
        }
        if(this.isLazyAutoImportsSet() && !template.isLazyAutoImportsSet()) {
            template.setLazyAutoImports(this.getLazyAutoImports());
        }
        if(this.isAutoImportsSet()) {
            template.setAutoImports(this.mergeMaps(this.getAutoImports(), template.getAutoImportsWithoutFallback(), true));
        }
        if(this.isAutoIncludesSet()) {
            template.setAutoIncludes(this.mergeLists(this.getAutoIncludes(), template.getAutoIncludesWithoutFallback()));
        }
        this.copyDirectCustomAttributes(template, false);
    }

    /**
     * See {link Configuration#setTagSyntax(int)}.
     * @param {number} tagSyntax
     */
    public setTagSyntax(tagSyntax : number) {
        _TemplateAPI.valideTagSyntaxValue(tagSyntax);
        this.tagSyntax = tagSyntax;
    }

    /**
     * The getter pair of {link #setTagSyntax(int)}.
     * @return {number}
     */
    public getTagSyntax() : number {
        return this.tagSyntax != null?this.tagSyntax:this.getNonNullParentConfiguration().getTagSyntax();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isTagSyntaxSet() : boolean {
        return this.tagSyntax != null;
    }

    /**
     * See {link Configuration#setInterpolationSyntax(int)}.
     * @param {number} interpolationSyntax
     */
    public setInterpolationSyntax(interpolationSyntax : number) {
        _TemplateAPI.valideInterpolationSyntaxValue(interpolationSyntax);
        this.interpolationSyntax = interpolationSyntax;
    }

    /**
     * The getter pair of {link #setInterpolationSyntax(int)}.
     * @return {number}
     */
    public getInterpolationSyntax() : number {
        return this.interpolationSyntax != null?this.interpolationSyntax:this.getNonNullParentConfiguration().getInterpolationSyntax();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isInterpolationSyntaxSet() : boolean {
        return this.interpolationSyntax != null;
    }

    /**
     * See {link Configuration#setNamingConvention(int)}.
     * @param {number} namingConvention
     */
    public setNamingConvention(namingConvention : number) {
        _TemplateAPI.validateNamingConventionValue(namingConvention);
        this.namingConvention = namingConvention;
    }

    /**
     * The getter pair of {link #setNamingConvention(int)}.
     * @return {number}
     */
    public getNamingConvention() : number {
        return this.namingConvention != null?this.namingConvention:this.getNonNullParentConfiguration().getNamingConvention();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isNamingConventionSet() : boolean {
        return this.namingConvention != null;
    }

    /**
     * See {link Configuration#setWhitespaceStripping(boolean)}.
     * @param {boolean} whitespaceStripping
     */
    public setWhitespaceStripping(whitespaceStripping : boolean) {
        this.whitespaceStripping = whitespaceStripping;
    }

    /**
     * The getter pair of {link #getWhitespaceStripping()}.
     * @return {boolean}
     */
    public getWhitespaceStripping() : boolean {
        return this.whitespaceStripping != null?this.whitespaceStripping:this.getNonNullParentConfiguration().getWhitespaceStripping();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isWhitespaceStrippingSet() : boolean {
        return this.whitespaceStripping != null;
    }

    /**
     * Sets the output format of the template; see {link Configuration#setAutoEscapingPolicy(int)} for more.
     * @param {number} autoEscapingPolicy
     */
    public setAutoEscapingPolicy(autoEscapingPolicy : number) {
        _TemplateAPI.validateAutoEscapingPolicyValue(autoEscapingPolicy);
        this.autoEscapingPolicy = autoEscapingPolicy;
    }

    /**
     * The getter pair of {link #setAutoEscapingPolicy(int)}.
     * @return {number}
     */
    public getAutoEscapingPolicy() : number {
        return this.autoEscapingPolicy != null?this.autoEscapingPolicy:this.getNonNullParentConfiguration().getAutoEscapingPolicy();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isAutoEscapingPolicySet() : boolean {
        return this.autoEscapingPolicy != null;
    }

    /**
     * Sets the output format of the template; see {link Configuration#setOutputFormat(OutputFormat)} for more.
     * @param {OutputFormat} outputFormat
     */
    public setOutputFormat(outputFormat : OutputFormat) {
        NullArgumentException.check$java_lang_String$java_lang_Object("outputFormat", outputFormat);
        this.outputFormat = outputFormat;
    }

    /**
     * The getter pair of {link #setOutputFormat(OutputFormat)}.
     * @return {OutputFormat}
     */
    public getOutputFormat() : OutputFormat {
        return this.outputFormat != null?this.outputFormat:this.getNonNullParentConfiguration().getOutputFormat();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isOutputFormatSet() : boolean {
        return this.outputFormat != null;
    }

    /**
     * See {link Configuration#setRecognizeStandardFileExtensions(boolean)}.
     * @param {boolean} recognizeStandardFileExtensions
     */
    public setRecognizeStandardFileExtensions(recognizeStandardFileExtensions : boolean) {
        this.recognizeStandardFileExtensions = recognizeStandardFileExtensions;
    }

    /**
     * Getter pair of {link #setRecognizeStandardFileExtensions(boolean)}.
     * @return {boolean}
     */
    public getRecognizeStandardFileExtensions() : boolean {
        return this.recognizeStandardFileExtensions != null?this.recognizeStandardFileExtensions:this.getNonNullParentConfiguration().getRecognizeStandardFileExtensions();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isRecognizeStandardFileExtensionsSet() : boolean {
        return this.recognizeStandardFileExtensions != null;
    }

    /**
     * See {link Configuration#setStrictSyntaxMode(boolean)}.
     * @param {boolean} strictSyntaxMode
     */
    public setStrictSyntaxMode(strictSyntaxMode : boolean) {
        this.strictSyntaxMode = strictSyntaxMode;
    }

    /**
     * The getter pair of {link #setStrictSyntaxMode(boolean)}.
     * @return {boolean}
     */
    public getStrictSyntaxMode() : boolean {
        return this.strictSyntaxMode != null?this.strictSyntaxMode:this.getNonNullParentConfiguration().getStrictSyntaxMode();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * @return {boolean}
     */
    public isStrictSyntaxModeSet() : boolean {
        return this.strictSyntaxMode != null;
    }

    /**
     * 
     * @param {boolean} strict
     */
    public setStrictBeanModels(strict : boolean) {
        throw Object.defineProperty(new Error("Setting strictBeanModels on " + /* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))(TemplateConfiguration) + " level isn\'t supported."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    public getEncoding() : string {
        return this.encoding != null?this.encoding:this.getNonNullParentConfiguration().getDefaultEncoding();
    }

    /**
     * When the standard template loading/caching mechanism is used, this forces the charset used for reading the
     * template "file", overriding everything but the encoding coming from the {@code #ftl} header. This setting
     * overrides the locale-specific encodings set via {link Configuration#setEncoding(java.util.Locale, String)}. It
     * also overrides the {@code encoding} parameter of {link Configuration#getTemplate(String, String)} (and of its
     * overloads) and the {@code encoding} parameter of the {@code #include} directive. This works like that because
     * specifying the encoding where you are requesting the template is error prone and deprecated.
     * <p>
     * <p>
     * If you are developing your own template loading/caching mechanism instead of the standard one, note that the
     * above behavior is not guaranteed by this class alone; you have to ensure it. Also, read the note on
     * {@code encoding} in the documentation of {link #apply(Template)}.
     * @param {String} encoding
     */
    public setEncoding(encoding : string) {
        NullArgumentException.check$java_lang_String$java_lang_Object("encoding", encoding);
        this.encoding = encoding;
    }

    public isEncodingSet() : boolean {
        return this.encoding != null;
    }

    /**
     * See {link Configuration#setTabSize(int)}.
     * 
     * @since 2.3.25
     * @param {number} tabSize
     */
    public setTabSize(tabSize : number) {
        this.tabSize = tabSize;
    }

    /**
     * Getter pair of {link #setTabSize(int)}.
     * 
     * @since 2.3.25
     * @return {number}
     */
    public getTabSize() : number {
        return this.tabSize != null?this.tabSize:this.getNonNullParentConfiguration().getTabSize();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public isTabSizeSet() : boolean {
        return this.tabSize != null;
    }

    /**
     * Returns {link Configuration#getIncompatibleImprovements()} from the parent {link Configuration}. This mostly
     * just exist to satisfy the {link ParserConfiguration} interface.
     * 
     * @throws IllegalStateException If the parent configuration wasn't yet set.
     * @return {Version}
     */
    public getIncompatibleImprovements() : Version {
        return this.getNonNullParentConfiguration().getIncompatibleImprovements();
    }

    /*private*/ checkParentConfigurationSet() {
        if(!this.parentConfigurationSet) {
            throw Object.defineProperty(new Error("The TemplateConfiguration wasn\'t associated with a Configuration yet."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /*private*/ hasAnyConfigurableSet() : boolean {
        return this.isAPIBuiltinEnabledSet() || this.isArithmeticEngineSet() || this.isAutoFlushSet() || this.isAutoImportsSet() || this.isAutoIncludesSet() || this.isBooleanFormatSet() || this.isClassicCompatibleSet() || this.isCustomDateFormatsSet() || this.isCustomNumberFormatsSet() || this.isDateFormatSet() || this.isDateTimeFormatSet() || this.isLazyImportsSet() || this.isLazyAutoImportsSet() || this.isLocaleSet() || this.isLogTemplateExceptionsSet() || this.isWrapUncheckedExceptionsSet() || this.isNewBuiltinClassResolverSet() || this.isNumberFormatSet() || this.isObjectWrapperSet() || this.isOutputEncodingSet() || this.isShowErrorTipsSet() || this.isSQLDateAndTimeTimeZoneSet() || this.isTemplateExceptionHandlerSet() || this.isAttemptExceptionReporterSet() || this.isTimeFormatSet() || this.isTimeZoneSet() || this.isURLEscapingCharsetSet();
    }

    /*private*/ mergeMaps(m1 : Map<any, any>, m2 : Map<any, any>, overwriteUpdatesOrder : boolean) : Map<any, any> {
        if(m1 == null) return m2;
        if(m2 == null) return m1;
        if(/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>m1)) return m2;
        if(/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>m2)) return m1;
        let mergedM : Map<any, any> = <any>(new Map<any, any>());
        mergedM.putAll(m1);
        {
            let array142 = /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>m2);
            for(let index141=0; index141 < array142.length; index141++) {
                let m2Key = array142[index141];
                {
                    /* remove */mergedM.delete(m2Key);
                }
            }
        }
        mergedM.putAll(m2);
        return mergedM;
    }

    /*private*/ mergeLists(list1 : List<any>, list2 : List<any>) : List<any> {
        if(list1 == null) return list2;
        if(list2 == null) return list1;
        if(/* isEmpty */(list1.length == 0)) return list2;
        if(/* isEmpty */(list2.length == 0)) return list1;
        let mergedList : List<any> = new List();

        mergedList.addAll(list1);
        mergedList.addAll(list2);
        return mergedList;
    }
}
TemplateConfiguration["__class"] = "freemarker.core.TemplateConfiguration";
TemplateConfiguration["__interfaces"] = ["freemarker.core.ParserConfiguration"];