/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CacheStorage} from '../cache/CacheStorage';
import {FileTemplateLoader} from '../cache/FileTemplateLoader';
import {MruCacheStorage} from '../cache/MruCacheStorage';
import {SoftCacheStorage} from '../cache/SoftCacheStorage';
import {TemplateCache} from '../cache/TemplateCache';
import {TemplateConfigurationFactory} from '../cache/TemplateConfigurationFactory';
import {TemplateLoader} from '../cache/TemplateLoader';
import {TemplateLookupStrategy} from '../cache/TemplateLookupStrategy';
import {TemplateNameFormat} from '../cache/TemplateNameFormat';
import {BugException} from '../core/BugException';
import {CSSOutputFormat} from '../core/CSSOutputFormat';
import {CombinedMarkupOutputFormat} from '../core/CombinedMarkupOutputFormat';
import {Configurable} from '../core/Configurable';
import {Environment} from '../core/Environment';
import {HTMLOutputFormat} from '../core/HTMLOutputFormat';
import {JSONOutputFormat} from '../core/JSONOutputFormat';
import {JavaScriptOutputFormat} from '../core/JavaScriptOutputFormat';
import {MarkupOutputFormat} from '../core/MarkupOutputFormat';
import {OutputFormat} from '../core/OutputFormat';
import {ParseException} from '../core/ParseException';
import {ParserConfiguration} from '../core/ParserConfiguration';
import {PlainTextOutputFormat} from '../core/PlainTextOutputFormat';
import {RTFOutputFormat} from '../core/RTFOutputFormat';
import {UndefinedOutputFormat} from '../core/UndefinedOutputFormat';
import {UnregisteredOutputFormatException} from '../core/UnregisteredOutputFormatException';
import {XHTMLOutputFormat} from '../core/XHTMLOutputFormat';
import {XMLOutputFormat} from '../core/XMLOutputFormat';
import {_CoreAPI} from '../core/_CoreAPI';
import {_DelayedJQuote} from '../core/_DelayedJQuote';
import {_MiscTemplateException} from '../core/_MiscTemplateException';
import {_ObjectBuilderSettingEvaluator} from '../core/_ObjectBuilderSettingEvaluator';
import {_SettingEvaluationEnvironment} from '../core/_SettingEvaluationEnvironment';
import {_SortedArraySet} from '../core/_SortedArraySet';
import {_UnmodifiableCompositeSet} from '../core/_UnmodifiableCompositeSet';
import {Logger} from '../log/Logger';
import {CaptureOutput} from './utility/CaptureOutput';
import {ClassUtil} from './utility/ClassUtil';
import {HtmlEscape} from './utility/HtmlEscape';
import {NormalizeNewlines} from './utility/NormalizeNewlines';
import {NullArgumentException} from './utility/NullArgumentException';
import {SecurityUtilities} from './utility/SecurityUtilities';
import {StandardCompress} from './utility/StandardCompress';
import {StringUtil} from './utility/StringUtil';
import {XmlEscape} from './utility/XmlEscape';
import {Version} from './Version';
import {Boolean} from '../../java/lang/Boolean';
import {_TemplateAPI} from './_TemplateAPI';
import {TemplateExceptionHandler} from './TemplateExceptionHandler';
import {AttemptExceptionReporter} from './AttemptExceptionReporter';
import {ObjectWrapper} from './ObjectWrapper';
import {TemplateModelException} from './TemplateModelException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {Character} from '../../java/lang/Character';
import {Template} from './Template';
import {TemplateNotFoundException} from './TemplateNotFoundException';
import {MalformedTemplateNameException} from './MalformedTemplateNameException';
import {TemplateModel} from './TemplateModel';
import {TemplateHashModelEx} from './TemplateHashModelEx';
import {TemplateModelIterator} from './TemplateModelIterator';
import {TemplateScalarModel} from './TemplateScalarModel';
import {DefaultObjectWrapperBuilder} from './DefaultObjectWrapperBuilder';

/**
 * Creates a new instance and sets which of the non-backward-compatible bugfixes/improvements should be enabled.
 * Note that the specified versions corresponds to the {@code incompatible_improvements} configuration setting, and
 * can be changed later, with {link #setIncompatibleImprovements(Version)} for example.
 * 
 * <p><b>About the "incompatible improvements" setting</b>
 * 
 * <p>This setting value is the FreeMarker version number where the not 100% backward compatible bug fixes and
 * improvements that you want to enable were already implemented. In new projects you should set this to the fixed
 * FreeMarker version that you start the development with. In older projects it's also usually better to keep
 * this high, however you should check the changes activated (find them below), especially if not only the 3rd
 * version number (the micro version) of {@code incompatibleImprovements} is increased. Generally, as far as you
 * only increase the last version number of this setting, the changes are low risk. The default value is 2.3.0 to
 * maximize backward compatibility, but that value isn't recommended.
 * 
 * <p>Bugfixes and improvements that are fully backward compatible, also those that are important security fixes,
 * are enabled regardless of the incompatible improvements setting.
 * 
 * <p>Do NOT ever use {link #getVersion()} to set the "incompatible improvements". Always use a fixed value, like
 * {link #VERSION_2_3_28}. Otherwise your application can break as you upgrade FreeMarker.
 * 
 * <p>An important consequence of setting this setting is that now your application will check if the stated minimum
 * FreeMarker version requirement is met. Like if you set this setting to 2.3.22, but accidentally the application
 * is deployed with FreeMarker 2.3.21, then FreeMarker will fail, telling that a higher version is required. After
 * all, the fixes/improvements you have requested aren't available on a lower version.
 * 
 * <p>Note that as FreeMarker's minor (2nd) or major (1st) version number increments, it's possible that emulating
 * some of the old bugs will become unsupported, that is, even if you set this setting to a low value, it silently
 * wont bring back the old behavior anymore. Information about that will be present here.
 * 
 * <p>Currently the effects of this setting are:
 * <ul>
 * <li><p>
 * 2.3.0: This is the lowest supported value, the version used in very old projects. This is the default in the
 * FreeMarker 2.3.x series (the one used by the deprecated {link #Configuration()} constructor) for maximum
 * backward compatibility.
 * </li>
 * <li><p>
 * 2.3.19 (or higher): Bug fix: Wrong {@code #} tags were printed as static text instead of
 * causing parsing error when there was no correct {@code #} or {@code @} tag earlier in the
 * same template.
 * </li>
 * <li><p>
 * 2.3.20 (or higher): {@code ?html} will escape apostrophe-quotes just like {@code ?xhtml} does. Utilizing
 * this is highly recommended, because otherwise if interpolations are used inside attribute values that use
 * apostrophe-quotation (<tt>&lt;foo bar='${val}'&gt;</tt>) instead of plain quotation mark
 * (<tt>&lt;foo bar="${val}"&gt;</tt>), they might produce HTML/XML that's not well-formed. Note that
 * {@code ?html} didn't do this because long ago there was no cross-browser way of doing this, but it's not a
 * concern anymore.
 * </li>
 * <li><p>
 * 2.3.21 (or higher):
 * <ul>
 * <li><p>
 * The <em>default</em> of the {@code object_wrapper} setting ({link #getObjectWrapper()}) changes from
 * {link ObjectWrapper#DEFAULT_WRAPPER} to another almost identical {link DefaultObjectWrapper} singleton,
 * returned by {link DefaultObjectWrapperBuilder#build()}. The new default object wrapper's
 * "incompatible improvements" version is set to the same as of the {link Configuration}.
 * See {link BeansWrapper#BeansWrapper(Version)} for further details. Furthermore, the new default
 * object wrapper doesn't allow changing its settings; setter methods throw {link IllegalStateException}).
 * (If anything tries to call setters on the old default in your application, that's a dangerous bug that
 * won't remain hidden now. As the old default is a singleton too, potentially shared by independently
 * developed components, most of them expects the out-of-the-box behavior from it (and the others are
 * necessarily buggy). Also, then concurrency glitches can occur (and even pollute the class introspection
 * cache) because the singleton is modified after publishing to other threads.)
 * Furthermore the new default object wrapper shares class introspection cache with other
 * {link BeansWrapper}-s created with {link BeansWrapperBuilder}, which has an impact as
 * {link BeansWrapper#clearClassIntrospecitonCache()} will be disallowed; see more about it there.
 * </li>
 * <li><p>
 * The {@code ?iso_...} built-ins won't show the time zone offset for {link java.sql.Time} values anymore,
 * because most databases store time values that aren't in any time zone, but just store hour, minute,
 * second, and decimal second field values. If you still want to show the offset (like for PostgreSQL
 * "time with time zone" columns you should), you can force showing the time zone offset by using
 * {@code myTime?string.iso_fz} (and its other variants).
 * </li>
 * <li><p>{@code ?is_enumerable} correctly returns {@code false} for Java methods get from Java objects that
 * are wrapped with {link BeansWrapper} and its subclasses, like {link DefaultObjectWrapper}. Although
 * method values implement {link TemplateSequenceModel} (because of a historical design quirk in
 * {link BeansWrapper}), trying to {@code #list} them will cause error, hence they aren't enumerable.
 * </li>
 * <li><p>
 * {@code ?c} will return {@code "INF"}, {@code "-INF"} and {@code "NaN"} for positive/negative infinity
 * and IEEE floating point Not-a-Number, respectively. These are the XML Schema compatible representations
 * of these special values. Earlier it has returned what {link DecimalFormat} did with US locale, none of
 * which was understood by any (common) computer language.
 * </li>
 * <li><p>
 * FTL hash literals that repeat keys now only have the key once with {@code ?keys}, and only has the last
 * value associated to that key with {@code ?values}. This is consistent with the behavior of
 * {@code hash[key]} and how maps work in Java.
 * </li>
 * <li><p>In most cases (where FreeMarker is able to do that), for {link TemplateLoader}-s that use
 * {link URLConnection}, {@code URLConnection#setUseCaches(boolean)} will called with {@code false},
 * so that only FreeMarker will do caching, not the URL scheme's handler.
 * See {link URLTemplateLoader#setURLConnectionUsesCaches(Boolean)} for more details.
 * </li>
 * <li><p>
 * The default of the {@code template_loader} setting ({link Configuration#getTemplateLoader()}) changes
 * to {@code null}, which means that FreeMarker will not find any templates. Earlier
 * the default was a {link FileTemplateLoader} that used the current directory as the root. This was
 * dangerous and fragile as you usually don't have good control over what the current directory will be.
 * Luckily, the old default almost never looked for the templates at the right place
 * anyway, so pretty much all applications had to set the {@code template_loader} setting, so it's unlikely
 * that changing the default breaks your application.
 * </li>
 * <li><p>
 * Right-unlimited ranges become readable (like listable), so {@code <#list 1.. as i>...</#list>} works.
 * Earlier they were only usable for slicing (like {@code hits[10..]}).
 * </li>
 * <li><p>
 * Empty ranges return {link Constants#EMPTY_SEQUENCE} instead of an empty {link SimpleSequence}. This
 * is in theory backward compatible, as the API only promises to give something that implements
 * {link TemplateSequenceModel}.
 * </li>
 * <li><p>
 * Unclosed comments ({@code <#-- ...}) and {@code #noparse}-s won't be silently closed at the end of
 * template anymore, but cause a parsing error instead.
 * </li>
 * </ul>
 * </li>
 * <li><p>
 * 2.3.22 (or higher):
 * <ul>
 * <li><p>
 * {link DefaultObjectWrapper} has some substantial changes with {@code incompatibleImprovements} 2.3.22;
 * check them out at {link DefaultObjectWrapper#DefaultObjectWrapper(Version)}. It's important to know
 * that if you set the {@code object_wrapper} setting (to an other value than {@code "default"}), rather
 * than leaving it on its default value, the {@code object_wrapper} won't inherit the
 * {@code incompatibleImprovements} of the {link Configuration}. In that case, if you want the 2.3.22
 * improvements of {link DefaultObjectWrapper}, you have to set it in the {link DefaultObjectWrapper}
 * object itself too! (Note that it's OK to use a {link DefaultObjectWrapper} with a different
 * {@code incompatibleImprovements} version number than that of the {link Configuration}, if that's
 * really what you want.)
 * </li>
 * <li><p>
 * In templates, {@code .template_name} will <em>always</em> return the main (top level) template's name.
 * It won't be affected by {@code #include} and {@code #nested} anymore. This is unintended, a bug with
 * {@code incompatible_improvement} 2.3.22 (a consequence of the lower level fixing described in the next
 * point). The old behavior of {@code .template_name} is restored if you set
 * {@code incompatible_improvement} to 2.3.23 (while {link Configurable#getParent()}) of
 * {link Environment} keeps the changed behavior shown in the next point).
 * </li>
 * <li><p>
 * {@code #include} and {@code #nested} doesn't change the parent {link Template} (see
 * {link Configurable#getParent()}) of the {link Environment} anymore to the {link Template} that's
 * included or whose namespace {@code #nested} "returns" to. Thus, the parent of {link Environment} will
 * be now always the main {link Template}. (The main {link Template} is the {link Template} whose
 * {@code process} or {@code createProcessingEnvironment} method was called to initiate the output
 * generation.) Note that apart from the effect on FTL's {@code .template_name} (see
 * previous point), this should only matter if you have set settings directly on {link Template} objects,
 * and almost nobody does that. Also note that macro calls have never changed the {link Environment}
 * parent to the {link Template} that contains the macro definition, so this mechanism was always broken.
 * As now we consistently never change the parent, the behavior when calling macros didn't change.
 * </li>
 * <li><p>
 * When using {@code freemarker.ext.servlet.FreemarkerServlet}:
 * <ul>
 * <li>
 * <p>When using custom JSP tag libraries: Fixes bug where some kind of
 * values, when put into the JSP <em>page</em> scope (via {@code #global} or via the JSP
 * {@code PageContext} API) and later read back with the JSP {@code PageContext} API (typically in a
 * custom JSP tag), might come back as FreeMarker {link TemplateModel} objects instead of as objects
 * with a standard Java type. Other Servlet scopes aren't affected. It's highly unlikely that
 * something expects the presence of this bug. The affected values are of the FTL types listed below,
 * and to trigger the bug, they either had to be created directly in the template (like as an FTL
 * literal or with {@code ?date}/{@code time}/{@code datetime}), or you had to use
 * {link DefaultObjectWrapper} or {link SimpleObjectWrapper} (or a subclass of them):
 * 
 * <ul>
 * <li>FTL date/time/date-time values may came back as {link SimpleDate}-s, now they come back as
 * {link java.util.Date java.util.Date}-s instead.</li>
 * 
 * <li>FTL sequence values may came back as {link SimpleSequence}-s, now they come back as
 * {link java.util.List}-s as expected. This at least stands assuming that the
 * {link Configuration#setSetting(String, String) object_wrapper} configuration setting is a
 * subclass of {link BeansWrapper} (such as {link DefaultObjectWrapper}, which is the default),
 * but that's practically always the case in applications that use FreeMarker's JSP extension
 * (otherwise it can still work, but it depends on the quality and capabilities of the
 * {link ObjectWrapper} implementation).</li>
 * 
 * <li>FTL hash values may came back as {link SimpleHash}-es, now they come back as
 * {link java.util.Map}-s as expected (again, assuming that the object wrapper is a subclass of
 * {link BeansWrapper}, like preferably {link DefaultObjectWrapper}, which is also the default).
 * </li>
 * 
 * <li>FTL collection values may came back as {link SimpleCollection}-s, now they come back as
 * {link java.util.Collection}-s as expected (again, assuming that the object wrapper is a subclass
 * of {link BeansWrapper}, like preferably {link DefaultObjectWrapper}).</li>
 * </ul>
 * </li>
 * <li><p>
 * Initial {@code "["} in the {@code TemplatePath} init-param
 * has special meaning; it's used for specifying multiple comma separated locations, like in
 * {@code <param-value>[ WEB-INF/templates, classpath:com/example/myapp/templates ]</param-value>}
 * </li>
 * <li><p>
 * Initial <tt>"{"</tt> in the {@code TemplatePath} init-param is reserved for future purposes, and
 * thus will throw exception.
 * </li>
 * </ul>
 * </li>
 * </ul>
 * </li>
 * <li><p>
 * 2.3.23 (or higher):
 * <ul>
 * <li><p>
 * Fixed a loophole in the implementation of the long existing parse-time rule that says that
 * {@code #break}, in the FTL source code itself, must occur nested inside a breakable directive, such as
 * {@code #list} or {@code #switch}. This check could be circumvented with {@code #macro} or
 * {@code #function}, like this:
 * {@code <#list 1..1 as x><#macro callMeLater><#break></#macro></#list><@callMeLater />}.
 * After activating this fix, this will be a parse time error.
 * </li>
 * <li><p>
 * If you have used {@code incompatible_improvements} 2.3.22 earlier, know that there the behavior of the
 * {@code .template_name} special variable used in templates was accidentally altered, but now it's
 * restored to be backward compatible with 2.3.0. (Ironically, the restored legacy behavior itself is
 * broken when it comes to macro invocations, we just keep it for backward compatibility. If you need fixed
 * behavior, use {@code .current_template_name} or {@code .main_template_name} instead.)
 * </li>
 * </ul>
 * </li>
 * <li><p>
 * 2.3.24 (or higher):
 * <ul>
 * <li><p>
 * The default of the
 * {link #setRecognizeStandardFileExtensions(boolean) recognize_standard_file_extensions}
 * setting changes to {@code true}, which means that templates whose name ends with {@code ".ftlh"} or
 * {@code ".ftlx"} will automatically get {link HTMLOutputFormat#INSTANCE} or
 * {link XMLOutputFormat#INSTANCE} output format respectively, in both cases with
 * {link #ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY} {link #setAutoEscapingPolicy(int) auto_escaping_policy}.
 * These "file" extensions aren't case sensitive.
 * </li>
 * <li><p>
 * In number format and date format strings (like in the {@code number_format} setting, or in templates in
 * {@code n?string("0.##")}), an initial {@code '@'} has special meaning; they refer to a custom format
 * with the name given after the {@code @} (see: {link #setCustomNumberFormats(Map)},
 * {link #setCustomDateFormats(Map)}, {link #setNumberFormat(String)}, and {link #setDateTimeFormat}).
 * If the custom format doesn't exist, that will be an error. To have a literal {@code @} as the first
 * character in the output, it has to be written as {@code @@}. Again, all this only applies to the very
 * first character of the format string, so {@code @} characters elsewhere must not be doubled. Also, if
 * there are any custom formats defined, initial {@code '@'} will have the new meaning regardless of
 * the value of the {@code incompatible_improvements} setting. So you don't need to set the
 * {@code incompatible_improvements} only to use custom formats.
 * </li>
 * <li><p>
 * Expressions inside interpolations that were inside <em>string literal expressions</em>
 * (not <code>${...}</code>-s in general), like in <code>&lt;#assign s="Hello ${name}!"&gt;</code>, has
 * always used {@code incompatbileImprovement}-s 0 (2.3.0 in effect). Now it's fixed.
 * </li>
 * <li><p>
 * {link DefaultObjectWrapper} has some minor changes with {@code incompatibleImprovements} 2.3.24;
 * check them out at {link DefaultObjectWrapper#DefaultObjectWrapper(Version)}. It's important to know
 * that if you set the {@code object_wrapper} setting (to an other value than {@code "default"}), rather
 * than leaving it on its default value, the {@code object_wrapper} won't inherit the
 * {@code incompatibleImprovements} of the {link Configuration}. In that case, if you want the 2.3.24
 * improvements of {link DefaultObjectWrapper}, you have to set it in the {link DefaultObjectWrapper}
 * object itself too! (Note that it's OK to use a {link DefaultObjectWrapper} with a different
 * {@code incompatibleImprovements} version number than that of the {link Configuration}, if that's
 * really what you want.)
 * </li>
 * <li><p>
 * Fixed bug: The {@code #import} directive meant to copy the library variable into a global variable if
 * it's executed in the main namespace, but that haven't happened when the imported template was already
 * imported earlier in another namespace.
 * </li>
 * <li><p>
 * {@code ?is_sequence} doesn't return {@code true} for Java methods wrapped by {link BeansWrapper} and
 * its subclasses (most notably {link DefaultObjectWrapper}) anymore, as they only implement the
 * {@code [index]} operator, but not {@code ?size}, which causes {@code <#list ...>} to fail among others.
 * (They shouldn't implement either, but this is historical heritage.)
 * </ul>
 * </li>
 * <li><p>
 * 2.3.25 (or higher):
 * <ul>
 * <li><p>
 * When calling {link Configurable#setAutoIncludes(List)} on a {link Configuration}, it filters out
 * duplicates from the list, similarly as repeatedly calling {link Configurable#addAutoInclude(String)}
 * would, hence avoiding repeated inclusions. Calling {link Configurable#setAutoIncludes(List)} on other
 * {link Configurable}-s always do this filtering regardless of the incompatible improvements setting.
 * </ul>
 * </li>
 * <li><p>
 * 2.3.26 (or higher):
 * <ul>
 * <li><p>
 * {link BeansWrapper} and {link DefaultObjectWrapper} now exposes Java 8 default methods (and the bean
 * properties they define); see {link BeansWrapper#BeansWrapper(Version)}.
 * </ul>
 * </li>
 * <li><p>
 * 2.3.27 (or higher):
 * <ul>
 * <li><p>
 * {link BeansWrapper} and {link DefaultObjectWrapper} now prefers the non-indexed JavaBean property
 * read method over the indexed read method when Java 8 exposes both;
 * see {link BeansWrapper#BeansWrapper(Version)}.
 * <li><p>
 * The following unchecked exceptions (but not their subclasses) will be wrapped into
 * {link TemplateException}-s when thrown during evaluating expressions or calling directives:
 * {link NullPointerException}, {link ClassCastException}, {link IndexOutOfBoundsException}, and
 * {link InvocationTargetException}. The goal of this is the same as of setting
 * {link #setWrapUncheckedExceptions(boolean) wrap_unchecked_exceptions} to {@code true} (see more there),
 * but this is more backward compatible, as it avoids wrapping unchecked exceptions that the calling
 * application is likely to catch specifically (like application-specific unchecked exceptions).
 * <li><p>
 * When the {link Writer} returned by {link TemplateTransformModel#getWriter(Writer, Map)} implements
 * {link TransformControl}, exceptions that are used internally by FreeMarker for flow control (for
 * {@code <#return>}, {@code <#break>}, etc.) won't be passed to
 * {link TransformControl#onError(Throwable)} anymore. Earlier, if {@code onError} didn't rethrow the
 * exception (though almost all implementation does), you couldn't use said directives inside the
 * transformed block. It's very unlikely that user code is affected by this, partially because these aren't
 * commonly implemented interfaces (especially not {link TransformControl}), and because it's unlikely
 * that templates utilize the the bug that's not fixed.
 * </ul>
 * </li>
 * <li><p>
 * 2.3.28 (or higher):
 * <ul>
 * <li><p>When calling a macro or function (things defined in a template, not directly in Java) and the
 * argument list contains {@code .current_template_name}, now it will correctly evaluate to the template
 * that contains the call, rather than to the template that contains the macro or function definition.
 * (Of course, the parameter default value expression is still evaluated in the context of the called
 * macro or function.) Similarly, {@code .macro_caller_template_name} (which itself was added in 2.3.28),
 * when used in a macro call argument, won't be incorrectly evaluated in the context of the called macro.
 * <li><p>Fixed legacy parser glitch where a tag can be closed with an illegal {@code ]} (when it's not part
 * of an expression) despite that the tag syntax is set to angle brackets. For example {@code <#if x]}
 * worked just like {@code <#if x>}. Note that it doesn't affect the legal usage of {@code ]}, like
 * {@code <#if x[0]>} works correctly without this fix as well.
 * </ul>
 * </li>
 * </ul>
 * 
 * @throws IllegalArgumentException If {@code incompatibleImmprovements} refers to a version that wasn't released yet when the currently
 * used FreeMarker version was released, or is less than 2.3.0, or is {@code null}.
 * @since 2.3.21
 * @param {Version} incompatibleImprovements
 * @class
 * @extends Configurable
 */
export class Configuration extends Configurable implements ParserConfiguration {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!Configuration.__static_initialized) { Configuration.__static_initialized = true; Configuration.__static_initializer_0(); Configuration.__static_initializer_1(); Configuration.__static_initializer_2(); } }

    static CACHE_LOG : Logger; public static CACHE_LOG_$LI$() : Logger { Configuration.__static_initialize(); if(Configuration.CACHE_LOG == null) Configuration.CACHE_LOG = Logger.getLogger("freemarker.cache"); return Configuration.CACHE_LOG; };

    static VERSION_PROPERTIES_PATH : string = "/freemarker/version.properties";

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static DEFAULT_ENCODING_KEY_SNAKE_CASE : string = "default_encoding";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static DEFAULT_ENCODING_KEY_CAMEL_CASE : string = "defaultEncoding";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static DEFAULT_ENCODING_KEY : string; public static DEFAULT_ENCODING_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.DEFAULT_ENCODING_KEY == null) Configuration.DEFAULT_ENCODING_KEY = Configuration.DEFAULT_ENCODING_KEY_SNAKE_CASE; return Configuration.DEFAULT_ENCODING_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static LOCALIZED_LOOKUP_KEY_SNAKE_CASE : string = "localized_lookup";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static LOCALIZED_LOOKUP_KEY_CAMEL_CASE : string = "localizedLookup";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static LOCALIZED_LOOKUP_KEY : string; public static LOCALIZED_LOOKUP_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.LOCALIZED_LOOKUP_KEY == null) Configuration.LOCALIZED_LOOKUP_KEY = Configuration.LOCALIZED_LOOKUP_KEY_SNAKE_CASE; return Configuration.LOCALIZED_LOOKUP_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static STRICT_SYNTAX_KEY_SNAKE_CASE : string = "strict_syntax";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static STRICT_SYNTAX_KEY_CAMEL_CASE : string = "strictSyntax";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static STRICT_SYNTAX_KEY : string; public static STRICT_SYNTAX_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.STRICT_SYNTAX_KEY == null) Configuration.STRICT_SYNTAX_KEY = Configuration.STRICT_SYNTAX_KEY_SNAKE_CASE; return Configuration.STRICT_SYNTAX_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static WHITESPACE_STRIPPING_KEY_SNAKE_CASE : string = "whitespace_stripping";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static WHITESPACE_STRIPPING_KEY_CAMEL_CASE : string = "whitespaceStripping";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static WHITESPACE_STRIPPING_KEY : string; public static WHITESPACE_STRIPPING_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.WHITESPACE_STRIPPING_KEY == null) Configuration.WHITESPACE_STRIPPING_KEY = Configuration.WHITESPACE_STRIPPING_KEY_SNAKE_CASE; return Configuration.WHITESPACE_STRIPPING_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.24
     */
    public static OUTPUT_FORMAT_KEY_SNAKE_CASE : string = "output_format";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.24
     */
    public static OUTPUT_FORMAT_KEY_CAMEL_CASE : string = "outputFormat";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static OUTPUT_FORMAT_KEY : string; public static OUTPUT_FORMAT_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.OUTPUT_FORMAT_KEY == null) Configuration.OUTPUT_FORMAT_KEY = Configuration.OUTPUT_FORMAT_KEY_SNAKE_CASE; return Configuration.OUTPUT_FORMAT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.24
     */
    public static RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_SNAKE_CASE : string = "recognize_standard_file_extensions";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.24
     */
    public static RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_CAMEL_CASE : string = "recognizeStandardFileExtensions";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY : string; public static RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY == null) Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY = Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_SNAKE_CASE; return Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.24
     */
    public static REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_SNAKE_CASE : string = "registered_custom_output_formats";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.24
     */
    public static REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_CAMEL_CASE : string = "registeredCustomOutputFormats";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY : string; public static REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY == null) Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY = Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_SNAKE_CASE; return Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.24
     */
    public static AUTO_ESCAPING_POLICY_KEY_SNAKE_CASE : string = "auto_escaping_policy";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.24
     */
    public static AUTO_ESCAPING_POLICY_KEY_CAMEL_CASE : string = "autoEscapingPolicy";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static AUTO_ESCAPING_POLICY_KEY : string; public static AUTO_ESCAPING_POLICY_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.AUTO_ESCAPING_POLICY_KEY == null) Configuration.AUTO_ESCAPING_POLICY_KEY = Configuration.AUTO_ESCAPING_POLICY_KEY_SNAKE_CASE; return Configuration.AUTO_ESCAPING_POLICY_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static CACHE_STORAGE_KEY_SNAKE_CASE : string = "cache_storage";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static CACHE_STORAGE_KEY_CAMEL_CASE : string = "cacheStorage";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static CACHE_STORAGE_KEY : string; public static CACHE_STORAGE_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.CACHE_STORAGE_KEY == null) Configuration.CACHE_STORAGE_KEY = Configuration.CACHE_STORAGE_KEY_SNAKE_CASE; return Configuration.CACHE_STORAGE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_UPDATE_DELAY_KEY_SNAKE_CASE : string = "template_update_delay";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_UPDATE_DELAY_KEY_CAMEL_CASE : string = "templateUpdateDelay";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TEMPLATE_UPDATE_DELAY_KEY : string; public static TEMPLATE_UPDATE_DELAY_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.TEMPLATE_UPDATE_DELAY_KEY == null) Configuration.TEMPLATE_UPDATE_DELAY_KEY = Configuration.TEMPLATE_UPDATE_DELAY_KEY_SNAKE_CASE; return Configuration.TEMPLATE_UPDATE_DELAY_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     * 
     * @deprecated Use {link Configurable#AUTO_IMPORT_KEY_SNAKE_CASE} instead.
     */
    public static AUTO_IMPORT_KEY_SNAKE_CASE : string = "auto_import";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     * 
     * @deprecated Use {link Configurable#AUTO_IMPORT_KEY_CAMEL_CASE} instead.
     */
    public static AUTO_IMPORT_KEY_CAMEL_CASE : string = "autoImport";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     * 
     * @deprecated Use {link Configurable#AUTO_IMPORT_KEY_SNAKE_CASE} instead.
     */
    public static AUTO_IMPORT_KEY : string; public static AUTO_IMPORT_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.AUTO_IMPORT_KEY == null) Configuration.AUTO_IMPORT_KEY = Configuration.AUTO_IMPORT_KEY_SNAKE_CASE; return Configuration.AUTO_IMPORT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static AUTO_INCLUDE_KEY_SNAKE_CASE : string = "auto_include";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static AUTO_INCLUDE_KEY_CAMEL_CASE : string = "autoInclude";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static AUTO_INCLUDE_KEY : string; public static AUTO_INCLUDE_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.AUTO_INCLUDE_KEY == null) Configuration.AUTO_INCLUDE_KEY = Configuration.AUTO_INCLUDE_KEY_SNAKE_CASE; return Configuration.AUTO_INCLUDE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TAG_SYNTAX_KEY_SNAKE_CASE : string = "tag_syntax";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TAG_SYNTAX_KEY_CAMEL_CASE : string = "tagSyntax";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TAG_SYNTAX_KEY : string; public static TAG_SYNTAX_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.TAG_SYNTAX_KEY == null) Configuration.TAG_SYNTAX_KEY = Configuration.TAG_SYNTAX_KEY_SNAKE_CASE; return Configuration.TAG_SYNTAX_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.28
     */
    public static INTERPOLATION_SYNTAX_KEY_SNAKE_CASE : string = "interpolation_syntax";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.28
     */
    public static INTERPOLATION_SYNTAX_KEY_CAMEL_CASE : string = "interpolationSyntax";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static INTERPOLATION_SYNTAX_KEY : string; public static INTERPOLATION_SYNTAX_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.INTERPOLATION_SYNTAX_KEY == null) Configuration.INTERPOLATION_SYNTAX_KEY = Configuration.INTERPOLATION_SYNTAX_KEY_SNAKE_CASE; return Configuration.INTERPOLATION_SYNTAX_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static NAMING_CONVENTION_KEY_SNAKE_CASE : string = "naming_convention";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static NAMING_CONVENTION_KEY_CAMEL_CASE : string = "namingConvention";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static NAMING_CONVENTION_KEY : string; public static NAMING_CONVENTION_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.NAMING_CONVENTION_KEY == null) Configuration.NAMING_CONVENTION_KEY = Configuration.NAMING_CONVENTION_KEY_SNAKE_CASE; return Configuration.NAMING_CONVENTION_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.25
     */
    public static TAB_SIZE_KEY_SNAKE_CASE : string = "tab_size";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.25
     */
    public static TAB_SIZE_KEY_CAMEL_CASE : string = "tabSize";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation. @since 2.3.25
     */
    public static TAB_SIZE_KEY : string; public static TAB_SIZE_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.TAB_SIZE_KEY == null) Configuration.TAB_SIZE_KEY = Configuration.TAB_SIZE_KEY_SNAKE_CASE; return Configuration.TAB_SIZE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_LOADER_KEY_SNAKE_CASE : string = "template_loader";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_LOADER_KEY_CAMEL_CASE : string = "templateLoader";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TEMPLATE_LOADER_KEY : string; public static TEMPLATE_LOADER_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.TEMPLATE_LOADER_KEY == null) Configuration.TEMPLATE_LOADER_KEY = Configuration.TEMPLATE_LOADER_KEY_SNAKE_CASE; return Configuration.TEMPLATE_LOADER_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_LOOKUP_STRATEGY_KEY_SNAKE_CASE : string = "template_lookup_strategy";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_LOOKUP_STRATEGY_KEY_CAMEL_CASE : string = "templateLookupStrategy";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TEMPLATE_LOOKUP_STRATEGY_KEY : string; public static TEMPLATE_LOOKUP_STRATEGY_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY == null) Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY = Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY_SNAKE_CASE; return Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_NAME_FORMAT_KEY_SNAKE_CASE : string = "template_name_format";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_NAME_FORMAT_KEY_CAMEL_CASE : string = "templateNameFormat";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TEMPLATE_NAME_FORMAT_KEY : string; public static TEMPLATE_NAME_FORMAT_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.TEMPLATE_NAME_FORMAT_KEY == null) Configuration.TEMPLATE_NAME_FORMAT_KEY = Configuration.TEMPLATE_NAME_FORMAT_KEY_SNAKE_CASE; return Configuration.TEMPLATE_NAME_FORMAT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.24
     */
    public static TEMPLATE_CONFIGURATIONS_KEY_SNAKE_CASE : string = "template_configurations";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.24
     */
    public static TEMPLATE_CONFIGURATIONS_KEY_CAMEL_CASE : string = "templateConfigurations";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation. @since 2.3.24
     */
    public static TEMPLATE_CONFIGURATIONS_KEY : string; public static TEMPLATE_CONFIGURATIONS_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.TEMPLATE_CONFIGURATIONS_KEY == null) Configuration.TEMPLATE_CONFIGURATIONS_KEY = Configuration.TEMPLATE_CONFIGURATIONS_KEY_SNAKE_CASE; return Configuration.TEMPLATE_CONFIGURATIONS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static INCOMPATIBLE_IMPROVEMENTS_KEY_SNAKE_CASE : string = "incompatible_improvements";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static INCOMPATIBLE_IMPROVEMENTS_KEY_CAMEL_CASE : string = "incompatibleImprovements";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static INCOMPATIBLE_IMPROVEMENTS_KEY : string; public static INCOMPATIBLE_IMPROVEMENTS_KEY_$LI$() : string { Configuration.__static_initialize(); if(Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY == null) Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY = Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY_SNAKE_CASE; return Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY; };

    /**
     * @deprecated Use {link #INCOMPATIBLE_IMPROVEMENTS_KEY} instead.
     */
    public static INCOMPATIBLE_IMPROVEMENTS : string; public static INCOMPATIBLE_IMPROVEMENTS_$LI$() : string { Configuration.__static_initialize(); if(Configuration.INCOMPATIBLE_IMPROVEMENTS == null) Configuration.INCOMPATIBLE_IMPROVEMENTS = Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY_SNAKE_CASE; return Configuration.INCOMPATIBLE_IMPROVEMENTS; };

    /**
     * @deprecated Use {link #INCOMPATIBLE_IMPROVEMENTS_KEY} instead.
     */
    public static INCOMPATIBLE_ENHANCEMENTS : string = "incompatible_enhancements";

    static __freemarker_template_Configuration_SETTING_NAMES_SNAKE_CASE : Array<any>; public static __freemarker_template_Configuration_SETTING_NAMES_SNAKE_CASE_$LI$() : Array { Configuration.__static_initialize(); if(Configuration.__freemarker_template_Configuration_SETTING_NAMES_SNAKE_CASE == null) Configuration.__freemarker_template_Configuration_SETTING_NAMES_SNAKE_CASE = [Configuration.AUTO_ESCAPING_POLICY_KEY_SNAKE_CASE, Configuration.CACHE_STORAGE_KEY_SNAKE_CASE, Configuration.DEFAULT_ENCODING_KEY_SNAKE_CASE, Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY_SNAKE_CASE, Configuration.INTERPOLATION_SYNTAX_KEY_SNAKE_CASE, Configuration.LOCALIZED_LOOKUP_KEY_SNAKE_CASE, Configuration.NAMING_CONVENTION_KEY_SNAKE_CASE, Configuration.OUTPUT_FORMAT_KEY_SNAKE_CASE, Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_SNAKE_CASE, Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_SNAKE_CASE, Configuration.STRICT_SYNTAX_KEY_SNAKE_CASE, Configuration.TAB_SIZE_KEY_SNAKE_CASE, Configuration.TAG_SYNTAX_KEY_SNAKE_CASE, Configuration.TEMPLATE_CONFIGURATIONS_KEY_SNAKE_CASE, Configuration.TEMPLATE_LOADER_KEY_SNAKE_CASE, Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY_SNAKE_CASE, Configuration.TEMPLATE_NAME_FORMAT_KEY_SNAKE_CASE, Configuration.TEMPLATE_UPDATE_DELAY_KEY_SNAKE_CASE, Configuration.WHITESPACE_STRIPPING_KEY_SNAKE_CASE]; return Configuration.__freemarker_template_Configuration_SETTING_NAMES_SNAKE_CASE; };

    static __freemarker_template_Configuration_SETTING_NAMES_CAMEL_CASE : Array<any>; public static __freemarker_template_Configuration_SETTING_NAMES_CAMEL_CASE_$LI$() : Array { Configuration.__static_initialize(); if(Configuration.__freemarker_template_Configuration_SETTING_NAMES_CAMEL_CASE == null) Configuration.__freemarker_template_Configuration_SETTING_NAMES_CAMEL_CASE = [Configuration.AUTO_ESCAPING_POLICY_KEY_CAMEL_CASE, Configuration.CACHE_STORAGE_KEY_CAMEL_CASE, Configuration.DEFAULT_ENCODING_KEY_CAMEL_CASE, Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY_CAMEL_CASE, Configuration.INTERPOLATION_SYNTAX_KEY_CAMEL_CASE, Configuration.LOCALIZED_LOOKUP_KEY_CAMEL_CASE, Configuration.NAMING_CONVENTION_KEY_CAMEL_CASE, Configuration.OUTPUT_FORMAT_KEY_CAMEL_CASE, Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_CAMEL_CASE, Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_CAMEL_CASE, Configuration.STRICT_SYNTAX_KEY_CAMEL_CASE, Configuration.TAB_SIZE_KEY_CAMEL_CASE, Configuration.TAG_SYNTAX_KEY_CAMEL_CASE, Configuration.TEMPLATE_CONFIGURATIONS_KEY_CAMEL_CASE, Configuration.TEMPLATE_LOADER_KEY_CAMEL_CASE, Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY_CAMEL_CASE, Configuration.TEMPLATE_NAME_FORMAT_KEY_CAMEL_CASE, Configuration.TEMPLATE_UPDATE_DELAY_KEY_CAMEL_CASE, Configuration.WHITESPACE_STRIPPING_KEY_CAMEL_CASE]; return Configuration.__freemarker_template_Configuration_SETTING_NAMES_CAMEL_CASE; };

    static STANDARD_OUTPUT_FORMATS : Map<any, any>; public static STANDARD_OUTPUT_FORMATS_$LI$() : Map { Configuration.__static_initialize(); return Configuration.STANDARD_OUTPUT_FORMATS; };

    static __static_initializer_0() {
        Configuration.STANDARD_OUTPUT_FORMATS = <any>(new Map<any, any>());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(UndefinedOutputFormat.INSTANCE_$LI$().getName(), UndefinedOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(HTMLOutputFormat.INSTANCE_$LI$().getName(), HTMLOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(XHTMLOutputFormat.INSTANCE_$LI$().getName(), XHTMLOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(XMLOutputFormat.INSTANCE_$LI$().getName(), XMLOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(RTFOutputFormat.INSTANCE_$LI$().getName(), RTFOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(PlainTextOutputFormat.INSTANCE_$LI$().getName(), PlainTextOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(CSSOutputFormat.INSTANCE_$LI$().getName(), CSSOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(JavaScriptOutputFormat.INSTANCE_$LI$().getName(), JavaScriptOutputFormat.INSTANCE_$LI$());
        /* put */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().set(JSONOutputFormat.INSTANCE_$LI$().getName(), JSONOutputFormat.INSTANCE_$LI$());
    }

    /**
     * The parser decides between {link #ANGLE_BRACKET_TAG_SYNTAX} and {link #SQUARE_BRACKET_TAG_SYNTAX} based on the
     * first tag (like {@code [#if x]} or {@code <#if x>}) it mets. Note that {@code [=...]} is <em>not</em> a tag, but
     * an interpolation, so it's not used for tag syntax auto-detection.
     */
    public static AUTO_DETECT_TAG_SYNTAX : number = 0;

    /**
     * For example {@code <#if x><@foo /></#if>}
     */
    public static ANGLE_BRACKET_TAG_SYNTAX : number = 1;

    /**
     * For example {@code [#if x][@foo /][/#if]}.
     * It does <em>not</em> change <code>${x}</code> to {@code [=x]}; that's square bracket <em>interpolation</em>
     * syntax ({link #SQUARE_BRACKET_INTERPOLATION_SYNTAX}).
     */
    public static SQUARE_BRACKET_TAG_SYNTAX : number = 2;

    /**
     * <code>${expression}</code> and the deprecated <code>#{expression; numFormat}</code> @since 2.3.28
     */
    public static LEGACY_INTERPOLATION_SYNTAX : number = 20;

    /**
     * <code>${expression}</code> only (not <code>#{expression; numFormat}</code>) @since 2.3.28
     */
    public static DOLLAR_INTERPOLATION_SYNTAX : number = 21;

    /**
     * <code>[=expression]</code> instead of <code>${expression}</code>.
     * It does <em>not</em> change {@code <#if x>} to {@code [#if x]}; that's square bracket <em>tag</em> syntax
     * ({link #SQUARE_BRACKET_TAG_SYNTAX}).
     * 
     * @since 2.3.28
     */
    public static SQUARE_BRACKET_INTERPOLATION_SYNTAX : number = 22;

    public static AUTO_DETECT_NAMING_CONVENTION : number = 10;

    public static LEGACY_NAMING_CONVENTION : number = 11;

    public static CAMEL_CASE_NAMING_CONVENTION : number = 12;

    /**
     * Don't enable auto-escaping, regardless of what the {link OutputFormat} is. Note that a {@code
     * <#ftl auto_esc=true>} in the template will override this.
     */
    public static DISABLE_AUTO_ESCAPING_POLICY : number = 20;

    /**
     * Enable auto-escaping if the output format supports it and {link MarkupOutputFormat#isAutoEscapedByDefault()} is
     * {@code true}.
     */
    public static ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY : number = 21;

    /**
     * Enable auto-escaping if the {link OutputFormat} supports it.
     */
    public static ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY : number = 22;

    /**
     * FreeMarker version 2.3.0 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_0 : Version; public static VERSION_2_3_0_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_0 == null) Configuration.VERSION_2_3_0 = new Version(2, 3, 0); return Configuration.VERSION_2_3_0; };

    /**
     * FreeMarker version 2.3.19 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_19 : Version; public static VERSION_2_3_19_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_19 == null) Configuration.VERSION_2_3_19 = new Version(2, 3, 19); return Configuration.VERSION_2_3_19; };

    /**
     * FreeMarker version 2.3.20 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_20 : Version; public static VERSION_2_3_20_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_20 == null) Configuration.VERSION_2_3_20 = new Version(2, 3, 20); return Configuration.VERSION_2_3_20; };

    /**
     * FreeMarker version 2.3.21 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_21 : Version; public static VERSION_2_3_21_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_21 == null) Configuration.VERSION_2_3_21 = new Version(2, 3, 21); return Configuration.VERSION_2_3_21; };

    /**
     * FreeMarker version 2.3.22 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_22 : Version; public static VERSION_2_3_22_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_22 == null) Configuration.VERSION_2_3_22 = new Version(2, 3, 22); return Configuration.VERSION_2_3_22; };

    /**
     * FreeMarker version 2.3.23 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_23 : Version; public static VERSION_2_3_23_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_23 == null) Configuration.VERSION_2_3_23 = new Version(2, 3, 23); return Configuration.VERSION_2_3_23; };

    /**
     * FreeMarker version 2.3.24 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_24 : Version; public static VERSION_2_3_24_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_24 == null) Configuration.VERSION_2_3_24 = new Version(2, 3, 24); return Configuration.VERSION_2_3_24; };

    /**
     * FreeMarker version 2.3.25 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_25 : Version; public static VERSION_2_3_25_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_25 == null) Configuration.VERSION_2_3_25 = new Version(2, 3, 25); return Configuration.VERSION_2_3_25; };

    /**
     * FreeMarker version 2.3.26 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_26 : Version; public static VERSION_2_3_26_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_26 == null) Configuration.VERSION_2_3_26 = new Version(2, 3, 26); return Configuration.VERSION_2_3_26; };

    /**
     * FreeMarker version 2.3.27 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_27 : Version; public static VERSION_2_3_27_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_27 == null) Configuration.VERSION_2_3_27 = new Version(2, 3, 27); return Configuration.VERSION_2_3_27; };

    /**
     * FreeMarker version 2.3.28 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_28 : Version; public static VERSION_2_3_28_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_28 == null) Configuration.VERSION_2_3_28 = new Version(2, 3, 28); return Configuration.VERSION_2_3_28; };

    /**
     * FreeMarker version 2.3.29 (an {link #Configuration(Version) incompatible improvements break-point})
     */
    public static VERSION_2_3_29 : Version; public static VERSION_2_3_29_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.VERSION_2_3_29 == null) Configuration.VERSION_2_3_29 = new Version(2, 3, 29); return Configuration.VERSION_2_3_29; };

    /**
     * The default of {link #getIncompatibleImprovements()}, currently {link #VERSION_2_3_0}.
     */
    public static DEFAULT_INCOMPATIBLE_IMPROVEMENTS : Version; public static DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$() : Version { Configuration.__static_initialize(); if(Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS == null) Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS = Configuration.VERSION_2_3_0_$LI$(); return Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS; };

    /**
     * @deprecated Use {link #DEFAULT_INCOMPATIBLE_IMPROVEMENTS} instead.
     */
    public static DEFAULT_INCOMPATIBLE_ENHANCEMENTS : string; public static DEFAULT_INCOMPATIBLE_ENHANCEMENTS_$LI$() : string { Configuration.__static_initialize(); if(Configuration.DEFAULT_INCOMPATIBLE_ENHANCEMENTS == null) Configuration.DEFAULT_INCOMPATIBLE_ENHANCEMENTS = Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$().toString(); return Configuration.DEFAULT_INCOMPATIBLE_ENHANCEMENTS; };

    /**
     * @deprecated Use {link #DEFAULT_INCOMPATIBLE_IMPROVEMENTS} instead.
     */
    public static PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS : number; public static PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS_$LI$() : number { Configuration.__static_initialize(); if(Configuration.PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS == null) Configuration.PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS = Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$().intValue(); return Configuration.PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS; };

    static __freemarker_template_Configuration_NULL : string = "null";

    static __freemarker_template_Configuration_DEFAULT : string = "default";

    static __freemarker_template_Configuration_JVM_DEFAULT : string = "JVM default";

    static VERSION : Version; public static VERSION_$LI$() : Version { Configuration.__static_initialize(); return Configuration.VERSION; };

    static __static_initializer_1() {
        try {
            let props : Map<any, any> = ClassUtil.loadProperties(Configuration, Configuration.VERSION_PROPERTIES_PATH);
            let versionString : string = Configuration.getRequiredVersionProperty(props, "version");
            let buildDate : Date;
            {
                let buildDateStr : string = Configuration.getRequiredVersionProperty(props, "buildTimestamp");
                if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(buildDateStr, "Z")) {
                    buildDateStr = buildDateStr.substring(0, buildDateStr.length - 1) + "+0000";
                }
                try {
                    buildDate = new SimpleDateFormat("yyyy-MM-dd\'T\'HH:mm:ssZ", string.US).parse(buildDateStr);
                } catch(e) {
                    buildDate = null;
                };
            };
            let gaeCompliant : boolean = Boolean.valueOf(Configuration.getRequiredVersionProperty(props, "isGAECompliant"));
            Configuration.VERSION = new Version(versionString, gaeCompliant, buildDate);
        } catch(e) {
            throw Object.defineProperty(new Error("Failed to load and parse " + Configuration.VERSION_PROPERTIES_PATH), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        };
    }

    static FM_24_DETECTION_CLASS_NAME : string = "freemarker.core._2_4_OrLaterMarker";

    static FM_24_DETECTED : boolean; public static FM_24_DETECTED_$LI$() : boolean { Configuration.__static_initialize(); return Configuration.FM_24_DETECTED; };

    static __static_initializer_2() {
        let fm24detected : boolean;
        try {
            /* forName */eval(Configuration.FM_24_DETECTION_CLASS_NAME.split('.').slice(-1)[0]);
            fm24detected = true;
        } catch(__e) {
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0)) {
                let e : Error = <Error>__e;
                fm24detected = false;

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.LinkageError") >= 0)) {
                let e : Error = <Error>__e;
                fm24detected = true;

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Throwable") >= 0) || __e != null && __e instanceof <any>Error) {
                let e : Error = <Error>__e;
                fm24detected = false;

            }
        };
        Configuration.FM_24_DETECTED = fm24detected;
    }

    static defaultConfigLock : any; public static defaultConfigLock_$LI$() : any { Configuration.__static_initialize(); if(Configuration.defaultConfigLock == null) Configuration.defaultConfigLock = <any>new Object(); return Configuration.defaultConfigLock; };

    static defaultConfig : Configuration; public static defaultConfig_$LI$() : Configuration { Configuration.__static_initialize(); return Configuration.defaultConfig; };

    /*private*/ strictSyntax : boolean;

    /*private*/ localizedLookup : boolean;

    /*private*/ whitespaceStripping : boolean;

    /*private*/ autoEscapingPolicy : number;

    /*private*/ outputFormat : OutputFormat;

    /*private*/ outputFormatExplicitlySet : boolean;

    /*private*/ recognizeStandardFileExtensions : boolean;

    /*private*/ registeredCustomOutputFormats : Map<any, any>;

    /*private*/ incompatibleImprovements : Version;

    /*private*/ tagSyntax : number;

    /*private*/ interpolationSyntax : number;

    /*private*/ namingConvention : number;

    /*private*/ tabSize : number;

    /*private*/ preventStrippings : boolean;

    /*private*/ cache : TemplateCache;

    /*private*/ templateLoaderExplicitlySet : boolean;

    /*private*/ templateLookupStrategyExplicitlySet : boolean;

    /*private*/ templateNameFormatExplicitlySet : boolean;

    /*private*/ cacheStorageExplicitlySet : boolean;

    /*private*/ objectWrapperExplicitlySet : boolean;

    /*private*/ templateExceptionHandlerExplicitlySet : boolean;

    /*private*/ attemptExceptionReporterExplicitlySet : boolean;

    /*private*/ logTemplateExceptionsExplicitlySet : boolean;

    /*private*/ wrapUncheckedExceptionsExplicitlySet : boolean;

    /*private*/ localeExplicitlySet : boolean;

    /*private*/ defaultEncodingExplicitlySet : boolean;

    /*private*/ timeZoneExplicitlySet : boolean;

    /*private*/ sharedVariables : Map<any, any>;

    /**
     * Needed so that it doesn't mater in what order do you call {link #setSharedVaribles(Map)}
     * and {link #setObjectWrapper(ObjectWrapper)}. When the user configures FreeMarker from Spring XML, he has no
     * control over the order, so it has to work on both ways.
     */
    /*private*/ rewrappableSharedVariables : Map<any, any>;

    /*private*/ defaultEncoding : string;

    /*private*/ localeToCharsetMap : Map<any, any>;

    public constructor(incompatibleImprovements? : any) {
        if(((incompatibleImprovements != null && incompatibleImprovements instanceof <any>Version) || incompatibleImprovements === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(incompatibleImprovements);
            if(this.outputFormatExplicitlySet===undefined) this.outputFormatExplicitlySet = false;
            if(this.recognizeStandardFileExtensions===undefined) this.recognizeStandardFileExtensions = null;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.cache===undefined) this.cache = null;
            if(this.templateLoaderExplicitlySet===undefined) this.templateLoaderExplicitlySet = false;
            if(this.templateLookupStrategyExplicitlySet===undefined) this.templateLookupStrategyExplicitlySet = false;
            if(this.templateNameFormatExplicitlySet===undefined) this.templateNameFormatExplicitlySet = false;
            if(this.cacheStorageExplicitlySet===undefined) this.cacheStorageExplicitlySet = false;
            if(this.objectWrapperExplicitlySet===undefined) this.objectWrapperExplicitlySet = false;
            if(this.templateExceptionHandlerExplicitlySet===undefined) this.templateExceptionHandlerExplicitlySet = false;
            if(this.attemptExceptionReporterExplicitlySet===undefined) this.attemptExceptionReporterExplicitlySet = false;
            if(this.logTemplateExceptionsExplicitlySet===undefined) this.logTemplateExceptionsExplicitlySet = false;
            if(this.wrapUncheckedExceptionsExplicitlySet===undefined) this.wrapUncheckedExceptionsExplicitlySet = false;
            if(this.localeExplicitlySet===undefined) this.localeExplicitlySet = false;
            if(this.defaultEncodingExplicitlySet===undefined) this.defaultEncodingExplicitlySet = false;
            if(this.timeZoneExplicitlySet===undefined) this.timeZoneExplicitlySet = false;
            this.strictSyntax = true;
            this.localizedLookup = true;
            this.whitespaceStripping = true;
            this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
            this.outputFormat = UndefinedOutputFormat.INSTANCE_$LI$();
            this.registeredCustomOutputFormats = /* emptyMap */new Map<any, any>();
            this.tagSyntax = Configuration.ANGLE_BRACKET_TAG_SYNTAX;
            this.interpolationSyntax = Configuration.LEGACY_INTERPOLATION_SYNTAX;
            this.namingConvention = Configuration.AUTO_DETECT_NAMING_CONVENTION;
            this.tabSize = 8;
            this.sharedVariables = <any>(new Map<any, any>());
            this.rewrappableSharedVariables = null;
            this.defaultEncoding = Configuration.getDefaultDefaultEncoding();
            this.localeToCharsetMap = <any>(<Map>new Map());
            if(this.outputFormatExplicitlySet===undefined) this.outputFormatExplicitlySet = false;
            if(this.recognizeStandardFileExtensions===undefined) this.recognizeStandardFileExtensions = null;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
            if(this.preventStrippings===undefined) this.preventStrippings = false;
            if(this.cache===undefined) this.cache = null;
            if(this.templateLoaderExplicitlySet===undefined) this.templateLoaderExplicitlySet = false;
            if(this.templateLookupStrategyExplicitlySet===undefined) this.templateLookupStrategyExplicitlySet = false;
            if(this.templateNameFormatExplicitlySet===undefined) this.templateNameFormatExplicitlySet = false;
            if(this.cacheStorageExplicitlySet===undefined) this.cacheStorageExplicitlySet = false;
            if(this.objectWrapperExplicitlySet===undefined) this.objectWrapperExplicitlySet = false;
            if(this.templateExceptionHandlerExplicitlySet===undefined) this.templateExceptionHandlerExplicitlySet = false;
            if(this.attemptExceptionReporterExplicitlySet===undefined) this.attemptExceptionReporterExplicitlySet = false;
            if(this.logTemplateExceptionsExplicitlySet===undefined) this.logTemplateExceptionsExplicitlySet = false;
            if(this.wrapUncheckedExceptionsExplicitlySet===undefined) this.wrapUncheckedExceptionsExplicitlySet = false;
            if(this.localeExplicitlySet===undefined) this.localeExplicitlySet = false;
            if(this.defaultEncodingExplicitlySet===undefined) this.defaultEncodingExplicitlySet = false;
            if(this.timeZoneExplicitlySet===undefined) this.timeZoneExplicitlySet = false;
            (() => {
                Configuration.checkFreeMarkerVersionClash();
                NullArgumentException.check$java_lang_String$java_lang_Object("incompatibleImprovements", incompatibleImprovements);
                this.incompatibleImprovements = incompatibleImprovements;
                this.createTemplateCache();
                this.loadBuiltInSharedVariables();
            })();
        } else if(incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let incompatibleImprovements : any = Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$();
                super(incompatibleImprovements);
                if(this.outputFormatExplicitlySet===undefined) this.outputFormatExplicitlySet = false;
                if(this.recognizeStandardFileExtensions===undefined) this.recognizeStandardFileExtensions = null;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
                if(this.preventStrippings===undefined) this.preventStrippings = false;
                if(this.cache===undefined) this.cache = null;
                if(this.templateLoaderExplicitlySet===undefined) this.templateLoaderExplicitlySet = false;
                if(this.templateLookupStrategyExplicitlySet===undefined) this.templateLookupStrategyExplicitlySet = false;
                if(this.templateNameFormatExplicitlySet===undefined) this.templateNameFormatExplicitlySet = false;
                if(this.cacheStorageExplicitlySet===undefined) this.cacheStorageExplicitlySet = false;
                if(this.objectWrapperExplicitlySet===undefined) this.objectWrapperExplicitlySet = false;
                if(this.templateExceptionHandlerExplicitlySet===undefined) this.templateExceptionHandlerExplicitlySet = false;
                if(this.attemptExceptionReporterExplicitlySet===undefined) this.attemptExceptionReporterExplicitlySet = false;
                if(this.logTemplateExceptionsExplicitlySet===undefined) this.logTemplateExceptionsExplicitlySet = false;
                if(this.wrapUncheckedExceptionsExplicitlySet===undefined) this.wrapUncheckedExceptionsExplicitlySet = false;
                if(this.localeExplicitlySet===undefined) this.localeExplicitlySet = false;
                if(this.defaultEncodingExplicitlySet===undefined) this.defaultEncodingExplicitlySet = false;
                if(this.timeZoneExplicitlySet===undefined) this.timeZoneExplicitlySet = false;
                this.strictSyntax = true;
                this.localizedLookup = true;
                this.whitespaceStripping = true;
                this.autoEscapingPolicy = Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY;
                this.outputFormat = UndefinedOutputFormat.INSTANCE_$LI$();
                this.registeredCustomOutputFormats = /* emptyMap */new Map<any, any>();
                this.tagSyntax = Configuration.ANGLE_BRACKET_TAG_SYNTAX;
                this.interpolationSyntax = Configuration.LEGACY_INTERPOLATION_SYNTAX;
                this.namingConvention = Configuration.AUTO_DETECT_NAMING_CONVENTION;
                this.tabSize = 8;
                this.sharedVariables = <any>(new Map<any, any>());
                this.rewrappableSharedVariables = null;
                this.defaultEncoding = Configuration.getDefaultDefaultEncoding();
                this.localeToCharsetMap = <any>(<Map>new Map());
                if(this.outputFormatExplicitlySet===undefined) this.outputFormatExplicitlySet = false;
                if(this.recognizeStandardFileExtensions===undefined) this.recognizeStandardFileExtensions = null;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
                if(this.preventStrippings===undefined) this.preventStrippings = false;
                if(this.cache===undefined) this.cache = null;
                if(this.templateLoaderExplicitlySet===undefined) this.templateLoaderExplicitlySet = false;
                if(this.templateLookupStrategyExplicitlySet===undefined) this.templateLookupStrategyExplicitlySet = false;
                if(this.templateNameFormatExplicitlySet===undefined) this.templateNameFormatExplicitlySet = false;
                if(this.cacheStorageExplicitlySet===undefined) this.cacheStorageExplicitlySet = false;
                if(this.objectWrapperExplicitlySet===undefined) this.objectWrapperExplicitlySet = false;
                if(this.templateExceptionHandlerExplicitlySet===undefined) this.templateExceptionHandlerExplicitlySet = false;
                if(this.attemptExceptionReporterExplicitlySet===undefined) this.attemptExceptionReporterExplicitlySet = false;
                if(this.logTemplateExceptionsExplicitlySet===undefined) this.logTemplateExceptionsExplicitlySet = false;
                if(this.wrapUncheckedExceptionsExplicitlySet===undefined) this.wrapUncheckedExceptionsExplicitlySet = false;
                if(this.localeExplicitlySet===undefined) this.localeExplicitlySet = false;
                if(this.defaultEncodingExplicitlySet===undefined) this.defaultEncodingExplicitlySet = false;
                if(this.timeZoneExplicitlySet===undefined) this.timeZoneExplicitlySet = false;
                (() => {
                    Configuration.checkFreeMarkerVersionClash();
                    NullArgumentException.check$java_lang_String$java_lang_Object("incompatibleImprovements", incompatibleImprovements);
                    this.incompatibleImprovements = incompatibleImprovements;
                    this.createTemplateCache();
                    this.loadBuiltInSharedVariables();
                })();
            }
        } else throw new Error('invalid overload');
    }

    static checkFreeMarkerVersionClash() {
        if(Configuration.FM_24_DETECTED_$LI$()) {
            throw Object.defineProperty(new Error("Clashing FreeMarker versions (" + Configuration.VERSION_$LI$() + " and some post-2.3.x) detected: found post-2.3.x class " + Configuration.FM_24_DETECTION_CLASS_NAME + ". You probably have two different freemarker.jar-s in the classpath."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    createTemplateCache() {
        this.cache = new TemplateCache(this.getDefaultTemplateLoader(), this.getDefaultCacheStorage(), this.getDefaultTemplateLookupStrategy(), this.getDefaultTemplateNameFormat(), null, this);
        this.cache.clear();
        this.cache.setDelay(5000);
    }

    recreateTemplateCacheWith(loader : TemplateLoader, storage : CacheStorage, templateLookupStrategy : TemplateLookupStrategy, templateNameFormat : TemplateNameFormat, templateConfigurations : TemplateConfigurationFactory) {
        let oldCache : TemplateCache = this.cache;
        this.cache = new TemplateCache(loader, storage, templateLookupStrategy, templateNameFormat, templateConfigurations, this);
        this.cache.clear();
        this.cache.setDelay(oldCache.getDelay());
        this.cache.setLocalizedLookup(this.localizedLookup);
    }

    recreateTemplateCache() {
        this.recreateTemplateCacheWith(this.cache.getTemplateLoader(), this.cache.getCacheStorage(), this.cache.getTemplateLookupStrategy(), this.cache.getTemplateNameFormat(), this.getTemplateConfigurations());
    }

    getDefaultTemplateLoader() : TemplateLoader {
        return Configuration.createDefaultTemplateLoader(this.getIncompatibleImprovements(), this.getTemplateLoader());
    }

    public static createDefaultTemplateLoader(incompatibleImprovements : Version, existingTemplateLoader : TemplateLoader = null) : TemplateLoader {
        if(incompatibleImprovements.intValue() < _TemplateAPI.VERSION_INT_2_3_21_$LI$()) {
            if(existingTemplateLoader != null && existingTemplateLoader instanceof <any>Configuration.LegacyDefaultFileTemplateLoader) {
                return existingTemplateLoader;
            }
            try {
                return new Configuration.LegacyDefaultFileTemplateLoader();
            } catch(e) {
                Configuration.CACHE_LOG_$LI$().warn$java_lang_String$java_lang_Throwable("Couldn\'t create legacy default TemplateLoader which accesses the current directory. (Use new Configuration(Configuration.VERSION_2_3_21) or higher to avoid this.)", e);
                return null;
            };
        } else {
            return null;
        }
    }

    getDefaultTemplateLookupStrategy() : TemplateLookupStrategy {
        return Configuration.getDefaultTemplateLookupStrategy(this.getIncompatibleImprovements());
    }

    static getDefaultTemplateLookupStrategy(incompatibleImprovements : Version) : TemplateLookupStrategy {
        return TemplateLookupStrategy.DEFAULT_2_3_0_$LI$();
    }

    getDefaultTemplateNameFormat() : TemplateNameFormat {
        return Configuration.getDefaultTemplateNameFormat(this.getIncompatibleImprovements());
    }

    static getDefaultTemplateNameFormat(incompatibleImprovements : Version) : TemplateNameFormat {
        return TemplateNameFormat.DEFAULT_2_3_0_$LI$();
    }

    getDefaultCacheStorage() : CacheStorage {
        return Configuration.createDefaultCacheStorage$freemarker_template_Version$freemarker_cache_CacheStorage(this.getIncompatibleImprovements(), this.getCacheStorage());
    }

    public static createDefaultCacheStorage$freemarker_template_Version$freemarker_cache_CacheStorage(incompatibleImprovements : Version, existingCacheStorage : CacheStorage) : CacheStorage {
        if(existingCacheStorage != null && existingCacheStorage instanceof <any>Configuration.DefaultSoftCacheStorage) {
            return existingCacheStorage;
        }
        return new Configuration.DefaultSoftCacheStorage();
    }

    public static createDefaultCacheStorage(incompatibleImprovements? : any, existingCacheStorage? : any) : any {
        if(((incompatibleImprovements != null && incompatibleImprovements instanceof <any>Version) || incompatibleImprovements === null) && ((existingCacheStorage != null && (existingCacheStorage["__interfaces"] != null && existingCacheStorage["__interfaces"].indexOf("freemarker.cache.CacheStorage") >= 0 || existingCacheStorage.constructor != null && existingCacheStorage.constructor["__interfaces"] != null && existingCacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.CacheStorage") >= 0)) || existingCacheStorage === null)) {
            return <any>Configuration.createDefaultCacheStorage$freemarker_template_Version$freemarker_cache_CacheStorage(incompatibleImprovements, existingCacheStorage);
        } else if(((incompatibleImprovements != null && incompatibleImprovements instanceof <any>Version) || incompatibleImprovements === null) && existingCacheStorage === undefined) {
            return <any>Configuration.createDefaultCacheStorage$freemarker_template_Version(incompatibleImprovements);
        } else throw new Error('invalid overload');
    }

    static createDefaultCacheStorage$freemarker_template_Version(incompatibleImprovements : Version) : CacheStorage {
        return Configuration.createDefaultCacheStorage$freemarker_template_Version$freemarker_cache_CacheStorage(incompatibleImprovements, null);
    }

    getDefaultTemplateExceptionHandler() : TemplateExceptionHandler {
        return Configuration.getDefaultTemplateExceptionHandler(this.getIncompatibleImprovements());
    }

    getDefaultAttemptExceptionReporter() : AttemptExceptionReporter {
        return Configuration.getDefaultAttemptExceptionReporter(this.getIncompatibleImprovements());
    }

    getDefaultLogTemplateExceptions() : boolean {
        return Configuration.getDefaultLogTemplateExceptions(this.getIncompatibleImprovements());
    }

    getDefaultWrapUncheckedExceptions() : boolean {
        return Configuration.getDefaultWrapUncheckedExceptions(this.getIncompatibleImprovements());
    }

    getDefaultObjectWrapper() : ObjectWrapper {
        return Configuration.getDefaultObjectWrapper(this.getIncompatibleImprovements());
    }

    static getDefaultTemplateExceptionHandler(incompatibleImprovements : Version) : TemplateExceptionHandler {
        return TemplateExceptionHandler.DEBUG_HANDLER;
    }

    static getDefaultAttemptExceptionReporter(incompatibleImprovements : Version) : AttemptExceptionReporter {
        return AttemptExceptionReporter.LOG_ERROR_REPORTER;
    }

    static getDefaultLogTemplateExceptions(incompatibleImprovements : Version) : boolean {
        return true;
    }

    static getDefaultWrapUncheckedExceptions(incompatibleImprovements : Version) : boolean {
        return false;
    }

    /**
     * 
     * @return {Object}
     */
    public clone() : any {
        try {
            let copy : Configuration = <Configuration>/* clone *//* clone */((o:any) => { if(super.clone!=undefined) { return super.clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this);
            copy.sharedVariables = <any>(new Map<any, any>());
            copy.localeToCharsetMap = <any>(<Map>new Map(this.localeToCharsetMap));
            copy.recreateTemplateCacheWith(this.cache.getTemplateLoader(), this.cache.getCacheStorage(), this.cache.getTemplateLookupStrategy(), this.cache.getTemplateNameFormat(), this.cache.getTemplateConfigurations());
            return copy;
        } catch(e) {
            throw new BugException("Cloning failed", e);
        };
    }

    loadBuiltInSharedVariables() {
        /* put */this.sharedVariables.set("capture_output", new CaptureOutput());
        /* put */this.sharedVariables.set("compress", StandardCompress.INSTANCE_$LI$());
        /* put */this.sharedVariables.set("html_escape", new HtmlEscape());
        /* put */this.sharedVariables.set("normalize_newlines", new NormalizeNewlines());
        /* put */this.sharedVariables.set("xml_escape", new XmlEscape());
    }

    /**
     * Loads a preset language-to-encoding map, similarly as if you have called
     * {link #clearEncodingMap()} and then did multiple {link #setEncoding(Locale, String)} calls.
     * It assumes the usual character encodings for most languages.
     * The previous content of the encoding map will be lost.
     * This default map currently contains the following mappings:
     * 
     * <table style="width: auto; border-collapse: collapse" border="1" summary="preset language to encoding mapping">
     * <tr><td>ar</td><td>ISO-8859-6</td></tr>
     * <tr><td>be</td><td>ISO-8859-5</td></tr>
     * <tr><td>bg</td><td>ISO-8859-5</td></tr>
     * <tr><td>ca</td><td>ISO-8859-1</td></tr>
     * <tr><td>cs</td><td>ISO-8859-2</td></tr>
     * <tr><td>da</td><td>ISO-8859-1</td></tr>
     * <tr><td>de</td><td>ISO-8859-1</td></tr>
     * <tr><td>el</td><td>ISO-8859-7</td></tr>
     * <tr><td>en</td><td>ISO-8859-1</td></tr>
     * <tr><td>es</td><td>ISO-8859-1</td></tr>
     * <tr><td>et</td><td>ISO-8859-1</td></tr>
     * <tr><td>fi</td><td>ISO-8859-1</td></tr>
     * <tr><td>fr</td><td>ISO-8859-1</td></tr>
     * <tr><td>hr</td><td>ISO-8859-2</td></tr>
     * <tr><td>hu</td><td>ISO-8859-2</td></tr>
     * <tr><td>is</td><td>ISO-8859-1</td></tr>
     * <tr><td>it</td><td>ISO-8859-1</td></tr>
     * <tr><td>iw</td><td>ISO-8859-8</td></tr>
     * <tr><td>ja</td><td>Shift_JIS</td></tr>
     * <tr><td>ko</td><td>EUC-KR</td></tr>
     * <tr><td>lt</td><td>ISO-8859-2</td></tr>
     * <tr><td>lv</td><td>ISO-8859-2</td></tr>
     * <tr><td>mk</td><td>ISO-8859-5</td></tr>
     * <tr><td>nl</td><td>ISO-8859-1</td></tr>
     * <tr><td>no</td><td>ISO-8859-1</td></tr>
     * <tr><td>pl</td><td>ISO-8859-2</td></tr>
     * <tr><td>pt</td><td>ISO-8859-1</td></tr>
     * <tr><td>ro</td><td>ISO-8859-2</td></tr>
     * <tr><td>ru</td><td>ISO-8859-5</td></tr>
     * <tr><td>sh</td><td>ISO-8859-5</td></tr>
     * <tr><td>sk</td><td>ISO-8859-2</td></tr>
     * <tr><td>sl</td><td>ISO-8859-2</td></tr>
     * <tr><td>sq</td><td>ISO-8859-2</td></tr>
     * <tr><td>sr</td><td>ISO-8859-5</td></tr>
     * <tr><td>sv</td><td>ISO-8859-1</td></tr>
     * <tr><td>tr</td><td>ISO-8859-9</td></tr>
     * <tr><td>uk</td><td>ISO-8859-5</td></tr>
     * <tr><td>zh</td><td>GB2312</td></tr>
     * <tr><td>zh_TW</td><td>Big5</td></tr>
     * </table>
     * <p>
     * see #clearEncodingMap()
     * see #setEncoding(Locale, String)
     * see #setDefaultEncoding(String)
     */
    public loadBuiltInEncodingMap() {
        /* clear */(<any>this.localeToCharsetMap).clear();
        /* put */this.localeToCharsetMap.set("ar", "ISO-8859-6");
        /* put */this.localeToCharsetMap.set("be", "ISO-8859-5");
        /* put */this.localeToCharsetMap.set("bg", "ISO-8859-5");
        /* put */this.localeToCharsetMap.set("ca", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("cs", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("da", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("de", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("el", "ISO-8859-7");
        /* put */this.localeToCharsetMap.set("en", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("es", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("et", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("fi", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("fr", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("hr", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("hu", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("is", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("it", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("iw", "ISO-8859-8");
        /* put */this.localeToCharsetMap.set("ja", "Shift_JIS");
        /* put */this.localeToCharsetMap.set("ko", "EUC-KR");
        /* put */this.localeToCharsetMap.set("lt", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("lv", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("mk", "ISO-8859-5");
        /* put */this.localeToCharsetMap.set("nl", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("no", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("pl", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("pt", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("ro", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("ru", "ISO-8859-5");
        /* put */this.localeToCharsetMap.set("sh", "ISO-8859-5");
        /* put */this.localeToCharsetMap.set("sk", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("sl", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("sq", "ISO-8859-2");
        /* put */this.localeToCharsetMap.set("sr", "ISO-8859-5");
        /* put */this.localeToCharsetMap.set("sv", "ISO-8859-1");
        /* put */this.localeToCharsetMap.set("tr", "ISO-8859-9");
        /* put */this.localeToCharsetMap.set("uk", "ISO-8859-5");
        /* put */this.localeToCharsetMap.set("zh", "GB2312");
        /* put */this.localeToCharsetMap.set("zh_TW", "Big5");
    }

    /**
     * Clears language-to-encoding map.
     * see #loadBuiltInEncodingMap
     * see #setEncoding
     */
    public clearEncodingMap() {
        /* clear */(<any>this.localeToCharsetMap).clear();
    }

    /**
     * Returns the default (singleton) Configuration object. Note that you can
     * create as many separate configurations as you wish; this global instance
     * is provided for convenience, or when you have no reason to use a separate
     * instance.
     * 
     * @deprecated The usage of the static singleton (the "default")
     * {link Configuration} instance can easily cause erroneous, unpredictable
     * behavior. This is because multiple independent software components may use
     * FreeMarker internally inside the same application, so they will interfere
     * because of the common {link Configuration} instance. Each such component
     * should use its own private {link Configuration} object instead, that it
     * typically creates with <code>new Configuration()</code> when the component
     * is initialized.
     * @return {Configuration}
     */
    public static getDefaultConfiguration() : Configuration {
        let defaultConfig : Configuration = Configuration.defaultConfig_$LI$();
        if(defaultConfig == null) {
            {
                defaultConfig = Configuration.defaultConfig_$LI$();
                if(defaultConfig == null) {
                    defaultConfig = new Configuration();
                    Configuration.defaultConfig = defaultConfig;
                }
            };
        }
        return defaultConfig;
    }

    /**
     * Sets the Configuration object that will be retrieved from future calls
     * to {link #getDefaultConfiguration()}.
     * 
     * @deprecated Using the "default" {link Configuration} instance can
     * easily lead to erroneous, unpredictable behaviour.
     * See more {link Configuration#getDefaultConfiguration() here...}.
     * @param {Configuration} config
     */
    public static setDefaultConfiguration(config : Configuration) {
        {
            Configuration.defaultConfig = config;
        };
    }

    /**
     * Sets a {link TemplateLoader} that is used to look up and load templates;
     * as a side effect the template cache will be emptied (unless the new and the old values are the same).
     * By providing your own {link TemplateLoader} implementation, you can load templates from whatever kind of
     * storages, like from relational databases, NoSQL-storages, etc.
     * 
     * <p>Convenience methods exists to install commonly used loaders, instead of using this method:
     * {link #setClassForTemplateLoading(Class, String)},
     * {link #setClassLoaderForTemplateLoading(ClassLoader, String)},
     * {link #setDirectoryForTemplateLoading(File)}, and
     * {link #setServletContextForTemplateLoading(Object, String)}.
     * 
     * <p>You can chain several {link TemplateLoader}-s together with {link MultiTemplateLoader}.
     * 
     * <p>Default value: You should always set the template loader instead of relying on the default value.
     * (But if you still care what it is, before "incompatible improvements" 2.3.21 it's a {link FileTemplateLoader}
     * that uses the current directory as its root; as it's hard tell what that directory will be, it's not very useful
     * and dangerous. Starting with "incompatible improvements" 2.3.21 the default is {@code null}.)
     * @param {*} templateLoader
     */
    public setTemplateLoader(templateLoader : TemplateLoader) {
        {
            if(this.cache.getTemplateLoader() !== templateLoader) {
                this.recreateTemplateCacheWith(templateLoader, this.cache.getCacheStorage(), this.cache.getTemplateLookupStrategy(), this.cache.getTemplateNameFormat(), this.cache.getTemplateConfigurations());
            }
            this.templateLoaderExplicitlySet = true;
        };
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isTemplateLoaderExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.22
     */
    public unsetTemplateLoader() {
        if(this.templateLoaderExplicitlySet) {
            this.setTemplateLoader(this.getDefaultTemplateLoader());
            this.templateLoaderExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setTemplateLoader(TemplateLoader)} (or equivalent) was already called on this instance.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isTemplateLoaderExplicitlySet() : boolean {
        return this.templateLoaderExplicitlySet;
    }

    /**
     * The getter pair of {link #setTemplateLoader(TemplateLoader)}.
     * @return {*}
     */
    public getTemplateLoader() : TemplateLoader {
        if(this.cache == null) {
            return null;
        }
        return this.cache.getTemplateLoader();
    }

    /**
     * Sets the {link TemplateLookupStrategy} that is used to look up templates based on the requested name; as a side
     * effect the template cache will be emptied. The default value is {link TemplateLookupStrategy#DEFAULT_2_3_0}.
     * 
     * @since 2.3.22
     * @param {TemplateLookupStrategy} templateLookupStrategy
     */
    public setTemplateLookupStrategy(templateLookupStrategy : TemplateLookupStrategy) {
        if(this.cache.getTemplateLookupStrategy() !== templateLookupStrategy) {
            this.recreateTemplateCacheWith(this.cache.getTemplateLoader(), this.cache.getCacheStorage(), templateLookupStrategy, this.cache.getTemplateNameFormat(), this.cache.getTemplateConfigurations());
        }
        this.templateLookupStrategyExplicitlySet = true;
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isTemplateLookupStrategyExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.22
     */
    public unsetTemplateLookupStrategy() {
        if(this.templateLookupStrategyExplicitlySet) {
            this.setTemplateLookupStrategy(this.getDefaultTemplateLookupStrategy());
            this.templateLookupStrategyExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setTemplateLookupStrategy(TemplateLookupStrategy)} (or equivalent) was already called on this
     * instance.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isTemplateLookupStrategyExplicitlySet() : boolean {
        return this.templateLookupStrategyExplicitlySet;
    }

    /**
     * The getter pair of {link #setTemplateLookupStrategy(TemplateLookupStrategy)}.
     * @return {TemplateLookupStrategy}
     */
    public getTemplateLookupStrategy() : TemplateLookupStrategy {
        if(this.cache == null) {
            return null;
        }
        return this.cache.getTemplateLookupStrategy();
    }

    /**
     * Sets the template name format used. The default is {link TemplateNameFormat#DEFAULT_2_3_0}, while the
     * recommended value for new projects is {link TemplateNameFormat#DEFAULT_2_4_0}.
     * 
     * @since 2.3.22
     * @param {TemplateNameFormat} templateNameFormat
     */
    public setTemplateNameFormat(templateNameFormat : TemplateNameFormat) {
        if(this.cache.getTemplateNameFormat() !== templateNameFormat) {
            this.recreateTemplateCacheWith(this.cache.getTemplateLoader(), this.cache.getCacheStorage(), this.cache.getTemplateLookupStrategy(), templateNameFormat, this.cache.getTemplateConfigurations());
        }
        this.templateNameFormatExplicitlySet = true;
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isTemplateNameFormatExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.22
     */
    public unsetTemplateNameFormat() {
        if(this.templateNameFormatExplicitlySet) {
            this.setTemplateNameFormat(this.getDefaultTemplateNameFormat());
            this.templateNameFormatExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setTemplateNameFormat(TemplateNameFormat)} (or equivalent) was already called on this instance.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isTemplateNameFormatExplicitlySet() : boolean {
        return this.templateNameFormatExplicitlySet;
    }

    /**
     * The getter pair of {link #setTemplateNameFormat(TemplateNameFormat)}.
     * @return {TemplateNameFormat}
     */
    public getTemplateNameFormat() : TemplateNameFormat {
        if(this.cache == null) {
            return null;
        }
        return this.cache.getTemplateNameFormat();
    }

    /**
     * Sets a {link TemplateConfigurationFactory} that will configure individual templates where their settings differ
     * from those coming from the common {link Configuration} object. A typical use case for that is specifying the
     * {link TemplateConfiguration#setOutputFormat(OutputFormat) outputFormat} for templates based on their file
     * extension or parent directory.
     * <p>
     * <p>
     * Note that the settings suggested by standard file extensions are stronger than that you set here. See
     * {link #setRecognizeStandardFileExtensions(boolean)} for more information about standard file extensions.
     * 
     * <p>See "Template configurations" in the FreeMarker Manual for examples.
     * 
     * @since 2.3.24
     * @param {TemplateConfigurationFactory} templateConfigurations
     */
    public setTemplateConfigurations(templateConfigurations : TemplateConfigurationFactory) {
        if(this.cache.getTemplateConfigurations() !== templateConfigurations) {
            if(templateConfigurations != null) {
                templateConfigurations.setConfiguration(this);
            }
            this.recreateTemplateCacheWith(this.cache.getTemplateLoader(), this.cache.getCacheStorage(), this.cache.getTemplateLookupStrategy(), this.cache.getTemplateNameFormat(), templateConfigurations);
        }
    }

    /**
     * The getter pair of {link #setTemplateConfigurations(TemplateConfigurationFactory)}.
     * @return {TemplateConfigurationFactory}
     */
    public getTemplateConfigurations() : TemplateConfigurationFactory {
        if(this.cache == null) {
            return null;
        }
        return this.cache.getTemplateConfigurations();
    }

    /**
     * Sets the {link CacheStorage} used for caching {link Template}-s;
     * the earlier content of the template cache will be dropt.
     * <p>
     * The default is a {link SoftCacheStorage}. If the total size of the {link Template}
     * objects is significant but most templates are used rarely, using a
     * {link MruCacheStorage} instead might be advisable. If you don't want caching at
     * all, use {link freemarker.cache.NullCacheStorage} (you can't use {@code null}).
     * 
     * <p>Note that setting the cache storage will re-create the template cache, so
     * all its content will be lost.
     * @param {*} cacheStorage
     */
    public setCacheStorage(cacheStorage : CacheStorage) {
        {
            if(this.getCacheStorage() !== cacheStorage) {
                this.recreateTemplateCacheWith(this.cache.getTemplateLoader(), cacheStorage, this.cache.getTemplateLookupStrategy(), this.cache.getTemplateNameFormat(), this.cache.getTemplateConfigurations());
            }
            this.cacheStorageExplicitlySet = true;
        };
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isCacheStorageExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.22
     */
    public unsetCacheStorage() {
        if(this.cacheStorageExplicitlySet) {
            this.setCacheStorage(this.getDefaultCacheStorage());
            this.cacheStorageExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setCacheStorage(CacheStorage)} (or equivalent) was already called on this instance.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isCacheStorageExplicitlySet() : boolean {
        return this.cacheStorageExplicitlySet;
    }

    /**
     * The getter pair of {link #setCacheStorage(CacheStorage)}.
     * 
     * @since 2.3.20
     * @return {*}
     */
    public getCacheStorage() : CacheStorage {
        {
            if(this.cache == null) {
                return null;
            }
            return this.cache.getCacheStorage();
        };
    }

    /**
     * Sets the file system directory from which to load templates. This is equivalent to
     * {@code setTemplateLoader(new FileTemplateLoader(dir))}, so see
     * {link FileTemplateLoader#FileTemplateLoader(File)} for more details.
     * <p>
     * <p>
     * Note that FreeMarker can load templates from non-file-system sources too. See
     * {link #setTemplateLoader(TemplateLoader)} from more details.
     * <p>
     * <p>
     * Note that this shouldn't be used for loading templates that are coming from a WAR; use
     * {link #setServletContextForTemplateLoading(Object, String)} then. Servlet containers might not unpack the WAR
     * file, in which case you clearly can't access the contained files via {link File}. Even if the WAR is unpacked,
     * the servlet container might not expose the location as a {link File}.
     * {link #setServletContextForTemplateLoading(Object, String)} on the other hand will work in all these cases.
     * @param {File} dir
     */
    public setDirectoryForTemplateLoading(dir : File) {
        let tl : TemplateLoader = this.getTemplateLoader();
        if(tl != null && tl instanceof <any>FileTemplateLoader) {
            let path : string = (<FileTemplateLoader><any>tl).baseDir.getCanonicalPath();
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(path,dir.getCanonicalPath()))) return;
        }
        this.setTemplateLoader(new FileTemplateLoader(dir));
    }

    /**
     * Sets the servlet context from which to load templates.
     * This is equivalent to {@code setTemplateLoader(new WebappTemplateLoader(sctxt, path))}
     * or {@code setTemplateLoader(new WebappTemplateLoader(sctxt))} if {@code path} was
     * {@code null}, so see {@code freemarker.cache.WebappTemplateLoader} for more details.
     * 
     * @param {Object} servletContext the {@code javax.servlet.ServletContext} object. (The declared type is {link Object}
     * to prevent class loading error when using FreeMarker in an environment where
     * there's no servlet classes available.)
     * @param {String} path           the path relative to the ServletContext.
     * <p>
     * see #setTemplateLoader(TemplateLoader)
     */
    public setServletContextForTemplateLoading(servletContext : any, path : string) {
        try {
            let webappTemplateLoaderClass : any = ClassUtil.forName("freemarker.cache.WebappTemplateLoader");
            let servletContextClass : any = ClassUtil.forName("javax.servlet.ServletContext");
            let constructorParamTypes : Array<any>;
            let constructorParams : Array<any>;
            if(path == null) {
                constructorParamTypes = [servletContextClass];
                constructorParams = [servletContext];
            } else {
                constructorParamTypes = [servletContextClass, String];
                constructorParams = [servletContext, path];
            }
            this.setTemplateLoader(<TemplateLoader><any>(o => o.newInstance.apply(o, constructorParams))((o => o.getConstructor.apply(o, constructorParamTypes))(webappTemplateLoaderClass)));
        } catch(e) {
            throw new BugException(e);
        };
    }

    /**
     * Sets the time in seconds that must elapse before checking whether there is a newer version of a template "file"
     * than the cached one.
     * <p>
     * <p>
     * Historical note: Despite what the API documentation said earlier, this method is <em>not</em> thread-safe. While
     * it works well on most hardware, it's not guaranteed that FreeMarker will see the update in all threads, and
     * theoretically it's also possible that it will see a value that's a binary mixture of the new and the old one.
     * 
     * @deprecated Use {link #setTemplateUpdateDelayMilliseconds(long)} instead, because the time granularity of this method
     * is often misunderstood to be milliseconds.
     * @param {number} seconds
     */
    public setTemplateUpdateDelay(seconds : number) {
        this.cache.setDelay(1000 * seconds);
    }

    /**
     * Sets the time in milliseconds that must elapse before checking whether there is a newer version of a template
     * "file" than the cached one. Defaults to 5000 ms.
     * <p>
     * <p>
     * When you get a template via {link #getTemplate(String)} (or some of its overloads). FreeMarker will try to get
     * the template from the template cache. If the template is found, and at least this amount of time was elapsed
     * since the template last modification date was checked, FreeMarker will re-check the last modification date (this
     * could mean I/O), possibly reloading the template and updating the cache as a consequence (can mean even more
     * I/O). The {link #getTemplate(String)} (or some of its overloads) call will only return after this all is
     * done, so it will return the fresh template.
     * 
     * @since 2.3.23
     * @param {number} millis
     */
    public setTemplateUpdateDelayMilliseconds(millis : number) {
        this.cache.setDelay(millis);
    }

    /**
     * The getter pair of {link #setTemplateUpdateDelayMilliseconds(long)}.
     * 
     * @since 2.3.23
     * @return {number}
     */
    public getTemplateUpdateDelayMilliseconds() : number {
        return this.cache.getDelay();
    }

    /**
     * Sets whether directives such as {@code if}, {@code else}, etc must be written as {@code #if}, {@code #else}, etc.
     * Defaults to {@code true}.
     * 
     * <p>When this is {@code true},
     * any tag not starting with &lt;# or &lt;/# or &lt;@ or &lt;/@ is considered as plain text
     * and will go to the output as is. Tag starting with &lt;# or &lt;/# must
     * be valid FTL tag, or else the template is invalid (i.e. &lt;#noSuchDirective&gt;
     * is an error).
     * 
     * @deprecated Only {@code true} (the default) value will be supported sometimes in the future.
     * @param {boolean} b
     */
    public setStrictSyntaxMode(b : boolean) {
        this.strictSyntax = b;
    }

    /**
     * 
     * @param {*} objectWrapper
     */
    public setObjectWrapper(objectWrapper : ObjectWrapper) {
        let prevObjectWrapper : ObjectWrapper = this.getObjectWrapper();
        super.setObjectWrapper(objectWrapper);
        this.objectWrapperExplicitlySet = true;
        if(objectWrapper !== prevObjectWrapper) {
            try {
                this.setSharedVariablesFromRewrappableSharedVariables();
            } catch(e) {
                throw Object.defineProperty(new Error("Failed to re-wrap earliearly set shared variables with the newly set object wrapper"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            };
        }
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isObjectWrapperExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.22
     */
    public unsetObjectWrapper() {
        if(this.objectWrapperExplicitlySet) {
            this.setObjectWrapper(this.getDefaultObjectWrapper());
            this.objectWrapperExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setObjectWrapper(ObjectWrapper)} (or equivalent) was already called on this instance.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isObjectWrapperExplicitlySet() : boolean {
        return this.objectWrapperExplicitlySet;
    }

    /**
     * 
     * @param {Locale} locale
     */
    public setLocale(locale : string) {
        super.setLocale(locale);
        this.localeExplicitlySet = true;
    }

    /**
     * Resets the setting to its default, as if it was never set.
     * 
     * @since 2.3.26
     */
    public unsetLocale() {
        if(this.localeExplicitlySet) {
            this.setLocale(Configuration.getDefaultLocale());
            this.localeExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setLocale(Locale)} (or equivalent) was already called on this instance, or it just holds the
     * default value.
     * 
     * @since 2.3.26
     * @return {boolean}
     */
    public isLocaleExplicitlySet() : boolean {
        return this.localeExplicitlySet;
    }

    static getDefaultLocale() : string {
        return /* getDefault */(globals.DEFAULT_LOCALE);
    }

    /**
     * 
     * @param {TimeZone} timeZone
     */
    public setTimeZone(timeZone : string) {
        super.setTimeZone(timeZone);
        this.timeZoneExplicitlySet = true;
    }

    /**
     * Resets the setting to its default, as if it was never set.
     * 
     * @since 2.3.26
     */
    public unsetTimeZone() {
        if(this.timeZoneExplicitlySet) {
            this.setTimeZone(Configuration.getDefaultTimeZone());
            this.timeZoneExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setTimeZone(TimeZone)} (or equivalent) was already called on this instance, or it just holds the
     * default value.
     * 
     * @since 2.3.26
     * @return {boolean}
     */
    public isTimeZoneExplicitlySet() : boolean {
        return this.timeZoneExplicitlySet;
    }

    static getDefaultTimeZone() : string {
        return /* getDefault */"UTC";
    }

    /**
     * 
     * @param {*} templateExceptionHandler
     */
    public setTemplateExceptionHandler(templateExceptionHandler : TemplateExceptionHandler) {
        super.setTemplateExceptionHandler(templateExceptionHandler);
        this.templateExceptionHandlerExplicitlySet = true;
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isTemplateExceptionHandlerExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.22
     */
    public unsetTemplateExceptionHandler() {
        if(this.templateExceptionHandlerExplicitlySet) {
            this.setTemplateExceptionHandler(this.getDefaultTemplateExceptionHandler());
            this.templateExceptionHandlerExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setTemplateExceptionHandler(TemplateExceptionHandler)} (or equivalent) was already called on
     * this instance.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isTemplateExceptionHandlerExplicitlySet() : boolean {
        return this.templateExceptionHandlerExplicitlySet;
    }

    /**
     * 
     * @param {*} attemptExceptionReporter
     */
    public setAttemptExceptionReporter(attemptExceptionReporter : AttemptExceptionReporter) {
        super.setAttemptExceptionReporter(attemptExceptionReporter);
        this.attemptExceptionReporterExplicitlySet = true;
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isAttemptExceptionReporterExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.27
     */
    public unsetAttemptExceptionReporter() {
        if(this.attemptExceptionReporterExplicitlySet) {
            this.setAttemptExceptionReporter(this.getDefaultAttemptExceptionReporter());
            this.attemptExceptionReporterExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setAttemptExceptionReporter(AttemptExceptionReporter)} (or equivalent) was already called on
     * this instance.
     * 
     * @since 2.3.27
     * @return {boolean}
     */
    public isAttemptExceptionReporterExplicitlySet() : boolean {
        return this.attemptExceptionReporterExplicitlySet;
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2.3.22
     * @param {boolean} value
     */
    public setLogTemplateExceptions(value : boolean) {
        super.setLogTemplateExceptions(value);
        this.logTemplateExceptionsExplicitlySet = true;
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isTemplateExceptionHandlerExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.22
     */
    public unsetLogTemplateExceptions() {
        if(this.logTemplateExceptionsExplicitlySet) {
            this.setLogTemplateExceptions(this.getDefaultLogTemplateExceptions());
            this.logTemplateExceptionsExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setLogTemplateExceptions(boolean)} (or equivalent) was already called on this instance.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isLogTemplateExceptionsExplicitlySet() : boolean {
        return this.logTemplateExceptionsExplicitlySet;
    }

    /**
     * {@inheritDoc}
     * 
     * @since 2.3.27
     * @param {boolean} value
     */
    public setWrapUncheckedExceptions(value : boolean) {
        super.setWrapUncheckedExceptions(value);
        this.wrapUncheckedExceptionsExplicitlySet = true;
    }

    /**
     * @since 2.3.27
     */
    public unsetWrapUncheckedExceptions() {
        if(this.wrapUncheckedExceptionsExplicitlySet) {
            this.setWrapUncheckedExceptions(this.getDefaultWrapUncheckedExceptions());
            this.wrapUncheckedExceptionsExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setWrapUncheckedExceptions} (or equivalent) was already called on this instance.
     * 
     * @since 2.3.27
     * @return {boolean}
     */
    public isWrapUncheckedExceptionsExplicitlySet() : boolean {
        return this.wrapUncheckedExceptionsExplicitlySet;
    }

    /**
     * The getter pair of {link #setStrictSyntaxMode}.
     * @return {boolean}
     */
    public getStrictSyntaxMode() : boolean {
        return this.strictSyntax;
    }

    /**
     * Use {link #Configuration(Version)} instead if possible; see the meaning of the parameter there.
     * 
     * <p>Do NOT ever use {link #getVersion()} to set the "incompatible improvements". Always use a fixed value, like
     * {link #VERSION_2_3_28}. Otherwise your application can break as you upgrade FreeMarker.
     * 
     * <p>If the default value of a setting depends on the {@code incompatibleImprovements} and the value of that setting
     * was never set in this {link Configuration} object through the public API, its value will be set to the default
     * value appropriate for the new {@code incompatibleImprovements}. (This adjustment of a setting value doesn't
     * count as setting that setting, so setting {@code incompatibleImprovements} for multiple times also works as
     * expected.) Note that if the {@code template_loader} have to be changed because of this, the template cache will
     * be emptied.
     * 
     * @throws IllegalArgumentException If {@code incompatibleImmprovements} refers to a version that wasn't released yet when the currently
     * used FreeMarker version was released, or is less than 2.3.0, or is {@code null}.
     * @since 2.3.20
     * @param {Version} incompatibleImprovements
     */
    public setIncompatibleImprovements(incompatibleImprovements : Version) {
        _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
        if(!this.incompatibleImprovements.equals(incompatibleImprovements)) {
            this.incompatibleImprovements = incompatibleImprovements;
            if(!this.templateLoaderExplicitlySet) {
                this.templateLoaderExplicitlySet = true;
                this.unsetTemplateLoader();
            }
            if(!this.templateLookupStrategyExplicitlySet) {
                this.templateLookupStrategyExplicitlySet = true;
                this.unsetTemplateLookupStrategy();
            }
            if(!this.templateNameFormatExplicitlySet) {
                this.templateNameFormatExplicitlySet = true;
                this.unsetTemplateNameFormat();
            }
            if(!this.cacheStorageExplicitlySet) {
                this.cacheStorageExplicitlySet = true;
                this.unsetCacheStorage();
            }
            if(!this.templateExceptionHandlerExplicitlySet) {
                this.templateExceptionHandlerExplicitlySet = true;
                this.unsetTemplateExceptionHandler();
            }
            if(!this.attemptExceptionReporterExplicitlySet) {
                this.attemptExceptionReporterExplicitlySet = true;
                this.unsetAttemptExceptionReporter();
            }
            if(!this.logTemplateExceptionsExplicitlySet) {
                this.logTemplateExceptionsExplicitlySet = true;
                this.unsetLogTemplateExceptions();
            }
            if(!this.wrapUncheckedExceptionsExplicitlySet) {
                this.wrapUncheckedExceptionsExplicitlySet = true;
                this.unsetWrapUncheckedExceptions();
            }
            if(!this.objectWrapperExplicitlySet) {
                this.objectWrapperExplicitlySet = true;
                this.unsetObjectWrapper();
            }
            this.recreateTemplateCache();
        }
    }

    /**
     * see #setIncompatibleImprovements(Version)
     * 
     * @return {Version} Never {@code null}.
     * @since 2.3.20
     */
    public getIncompatibleImprovements() : Version {
        return this.incompatibleImprovements;
    }

    /**
     * @deprecated Use {link #Configuration(Version)}, or
     * as last chance, {link #setIncompatibleImprovements(Version)} instead.
     * @param {String} version
     */
    public setIncompatibleEnhancements(version : string) {
        this.setIncompatibleImprovements(new Version(version));
    }

    /**
     * @deprecated Use {link #getIncompatibleImprovements()} instead.
     * @return {String}
     */
    public getIncompatibleEnhancements() : string {
        return this.incompatibleImprovements.toString();
    }

    /**
     * @deprecated Use {link #getIncompatibleImprovements()} instead.
     * @return {number}
     */
    public getParsedIncompatibleEnhancements() : number {
        return this.getIncompatibleImprovements().intValue();
    }

    /**
     * Sets whether the FTL parser will try to remove
     * superfluous white-space around certain FTL tags.
     * @param {boolean} b
     */
    public setWhitespaceStripping(b : boolean) {
        this.whitespaceStripping = b;
    }

    /**
     * Gets whether the FTL parser will try to remove
     * superfluous white-space around certain FTL tags.
     * <p>
     * see #setWhitespaceStripping
     * @return {boolean}
     */
    public getWhitespaceStripping() : boolean {
        return this.whitespaceStripping;
    }

    /**
     * Sets when auto-escaping should be enabled depending on the current {linkplain OutputFormat output format};
     * default is {link #ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY}.
     * 
     * <p>Note that the default output format, {link UndefinedOutputFormat}, is a non-escaping format, so there
     * auto-escaping will be off.
     * 
     * <p>Note that the templates can turn auto-escaping on/off locally with directives like
     * {@code <#ftl auto_esc=...>}, {@code <#autoesc>...</#autoesc>}, and {@code <#noautoesc>...</#noautoesc>}, which
     * are ignoring the auto-escaping policy.
     * 
     * <p><b>About auto-escaping</b></p>
     * <p>
     * <p>
     * Auto-escaping has significance when a value is printed with <code>${...}</code> (or <code>#{...}</code>). If
     * auto-escaping is on, FreeMarker will assume that the value is plain text (as opposed to markup or some kind of
     * rich text), so it will escape it according the current output format (see {link #setOutputFormat(OutputFormat)}
     * and {link TemplateConfiguration#setOutputFormat(OutputFormat)}). If auto-escaping is off, FreeMarker will assume
     * that the string value is already in the output format, so it prints it as is to the output.
     * 
     * <p>Further notes on auto-escaping:
     * <ul>
     * <li>When printing numbers, dates, and other kind of non-string values with <code>${...}</code>, they will be
     * first converted to string (according the formatting settings and locale), then they are escaped just like
     * string values.
     * <li>When printing {link TemplateMarkupOutputModel}-s, they aren't escaped again (they are already escaped).
     * <li>Auto-escaping doesn't do anything if the current output format isn't an {link MarkupOutputFormat}.
     * That's the case for the default output format, {link UndefinedOutputFormat}, and also for
     * {link PlainTextOutputFormat}.
     * <li>The output format inside a string literal expression is always {link PlainTextOutputFormat}
     * (regardless of the output format of the containing template), which is a non-escaping format. Thus for
     * example, with <code>&lt;#assign s = "foo${bar}"&gt;</code>, {@code bar} will always get into {@code s}
     * without escaping, but with <code>&lt;#assign s&gt;foo${bar}&lt;#assign&gt;</code> it may will be escaped.
     * </ul>
     * 
     * <p>Note that what you set here is just a default, which can be overridden for individual templates via
     * {link #setTemplateConfigurations(TemplateConfigurationFactory)}. This setting is also overridden by the standard file
     * extensions; see them at {link #setRecognizeStandardFileExtensions(boolean)}.
     * 
     * @param {number} autoEscapingPolicy One of the {link #ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY},
     * {link #ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY}, and {link #DISABLE_AUTO_ESCAPING_POLICY} constants.
     * <p>
     * see TemplateConfiguration#setAutoEscapingPolicy(int)
     * see Configuration#setOutputFormat(OutputFormat)
     * see TemplateConfiguration#setOutputFormat(OutputFormat)
     * @since 2.3.24
     */
    public setAutoEscapingPolicy(autoEscapingPolicy : number) {
        _TemplateAPI.validateAutoEscapingPolicyValue(autoEscapingPolicy);
        let prevAutoEscaping : number = this.getAutoEscapingPolicy();
        this.autoEscapingPolicy = autoEscapingPolicy;
        if(prevAutoEscaping !== autoEscapingPolicy) {
            this.clearTemplateCache();
        }
    }

    /**
     * Getter pair of {link #setAutoEscapingPolicy(int)}
     * 
     * @since 2.3.24
     * @return {number}
     */
    public getAutoEscapingPolicy() : number {
        return this.autoEscapingPolicy;
    }

    /**
     * Sets the default output format. Usually, you should leave this on its default, which is
     * {link UndefinedOutputFormat#INSTANCE}, and then use standard file extensions like "ftlh" (for HTML) or "ftlx"
     * (for XML) and ensure that {link #setRecognizeStandardFileExtensions(boolean)} is {@code true} (see more there).
     * Where you can't use the standard extensions, templates still can be associated to output formats with
     * patterns matching their name (their path) using {link #setTemplateConfigurations(TemplateConfigurationFactory)}.
     * But if all templates will have the same output format, you may use {link #setOutputFormat(OutputFormat)} after
     * all, to a value like {link HTMLOutputFormat#INSTANCE}, {link XMLOutputFormat#INSTANCE}, etc. Also note
     * that templates can specify their own output format like {@code
     * <#ftl output_format="HTML">}, which overrides any configuration settings.
     * <p>
     * <p>
     * The output format is mostly important because of auto-escaping (see {link #setAutoEscapingPolicy(int)}), but
     * maybe also used by the embedding application to set the HTTP response MIME type, etc.
     * <p>
     * see #setRegisteredCustomOutputFormats(Collection)
     * see #setTemplateConfigurations(TemplateConfigurationFactory)
     * see #setRecognizeStandardFileExtensions(boolean)
     * see #setAutoEscapingPolicy(int)
     * 
     * @since 2.3.24
     * @param {OutputFormat} outputFormat
     */
    public setOutputFormat(outputFormat : OutputFormat) {
        if(outputFormat == null) {
            throw new NullArgumentException("outputFormat", "You may meant: " + /* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))(UndefinedOutputFormat) + ".INSTANCE");
        }
        let prevOutputFormat : OutputFormat = this.getOutputFormat();
        this.outputFormat = outputFormat;
        this.outputFormatExplicitlySet = true;
        if(prevOutputFormat !== outputFormat) {
            this.clearTemplateCache();
        }
    }

    public getOutputFormat$() : OutputFormat {
        return this.outputFormat;
    }

    /**
     * Tells if {link #setOutputFormat(OutputFormat)} (or equivalent) was already called on this instance.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isOutputFormatExplicitlySet() : boolean {
        return this.outputFormatExplicitlySet;
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isOutputFormatExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.24
     */
    public unsetOutputFormat() {
        this.outputFormat = UndefinedOutputFormat.INSTANCE_$LI$();
        this.outputFormatExplicitlySet = false;
    }

    public getOutputFormat$java_lang_String(name : string) : OutputFormat {
        if(name.length === 0) {
            throw Object.defineProperty(new Error("0-length format name"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(name.charAt(name.length - 1)) == '}'.charCodeAt(0)) {
            let openBrcIdx : number = name.indexOf('{');
            if(openBrcIdx === -1) {
                throw Object.defineProperty(new Error("Missing opening \'{\' in: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
            let outerOF : MarkupOutputFormat<any> = this.getMarkupOutputFormatForCombined(name.substring(0, openBrcIdx));
            let innerOF : MarkupOutputFormat<any> = this.getMarkupOutputFormatForCombined(name.substring(openBrcIdx + 1, name.length - 1));
            return new CombinedMarkupOutputFormat(name, outerOF, innerOF);
        } else {
            let custOF : OutputFormat = /* get */this.registeredCustomOutputFormats.get(name);
            if(custOF != null) {
                return custOF;
            }
            let stdOF : OutputFormat = /* get */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().get(name);
            if(stdOF == null) {
                let sb : StringBuilder = new StringBuilder("");
                sb.append("Unregistered output format name, ");
                sb.append(StringUtil.jQuote$java_lang_Object(name));
                sb.append(". The output formats registered in the Configuration are: ");
                let registeredNames : Set = <any>([]);
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(registeredNames, /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>Configuration.STANDARD_OUTPUT_FORMATS_$LI$()));
                /* addAll */((l1, l2) => l1.push.apply(l1, l2))(registeredNames, /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.registeredCustomOutputFormats));
                let first : boolean = true;
                for(let index169=0; index169 < registeredNames.length; index169++) {
                    let registeredName = registeredNames[index169];
                    {
                        if(first) {
                            first = false;
                        } else {
                            sb.append(", ");
                        }
                        sb.append(StringUtil.jQuote$java_lang_Object(registeredName));
                    }
                }
                throw new UnregisteredOutputFormatException(sb.toString());
            }
            return stdOF;
        }
    }

    /**
     * Returns the output format for a name.
     * 
     * @param {String} name Either the name of the output format as it was registered with
     * {link Configuration#setRegisteredCustomOutputFormats(Collection)}, or a combined output format name.
     * A combined output format is created ad-hoc from the registered formats. For example, if you need RTF
     * embedded into HTML, the name will be <code>HTML{RTF}</code>, where "HTML" and "RTF" refer to the
     * existing formats. This logic can be used recursively, so for example <code>XML{HTML{RTF}}</code> is
     * also valid.
     * @return {OutputFormat} Not {@code null}.
     * @throws UnregisteredOutputFormatException If there's no output format registered with the given name.
     * @throws IllegalArgumentException          If the usage of <code>{</code> and <code>}</code> in the name is syntactically wrong, or if not all
     * {link OutputFormat}-s are {link MarkupOutputFormat}-s in the <code>...{...}</code> expression.
     * @since 2.3.24
     */
    public getOutputFormat(name? : any) : any {
        if(((typeof name === 'string') || name === null)) {
            return <any>this.getOutputFormat$java_lang_String(name);
        } else if(name === undefined) {
            return <any>this.getOutputFormat$();
        } else throw new Error('invalid overload');
    }

    getMarkupOutputFormatForCombined(outerName : string) : MarkupOutputFormat<any> {
        let of : OutputFormat = this.getOutputFormat$java_lang_String(outerName);
        if(!(of != null && of instanceof <any>MarkupOutputFormat)) {
            throw Object.defineProperty(new Error("The \"" + outerName + "\" output format can\'t be used in ...{...} expression, because it\'s not a markup format."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        let outerOF : MarkupOutputFormat<any> = <MarkupOutputFormat<any>>of;
        return outerOF;
    }

    /**
     * Sets the custom output formats that can be referred by their unique name ({link OutputFormat#getName()}) from
     * templates. Names are also used to look up the {link OutputFormat} for standard file extensions; see them at
     * {link #setRecognizeStandardFileExtensions(boolean)}.
     * <p>
     * <p>
     * When there's a clash between a custom output format name and a standard output format name, the custom format
     * will win, thus you can override the meaning of standard output format names. Except, it's not allowed to override
     * {link UndefinedOutputFormat} and {link PlainTextOutputFormat}.
     * <p>
     * <p>
     * The default value is an empty collection.
     * 
     * @param {Collection} registeredCustomOutputFormats The collection of the {link OutputFormat}-s, each must be different and has a unique name (
     * {link OutputFormat#getName()}) within this collection.
     * @throws IllegalArgumentException When multiple different {link OutputFormat}-s have the same name in the parameter collection. When
     * the same {link OutputFormat} object occurs for multiple times in the collection. If an
     * {link OutputFormat} name is 0 long. If an {link OutputFormat} name doesn't start with letter or
     * digit. If an {link OutputFormat} name contains {@code '+'} or <code>'{'</code> or <code>'}'</code>.
     * If an {link OutputFormat} name equals to {link UndefinedOutputFormat#getName()} or
     * {link PlainTextOutputFormat#getName()}.
     * @since 2.3.24
     */
    public setRegisteredCustomOutputFormats(registeredCustomOutputFormats : Collection) {
        NullArgumentException.check$java_lang_Object(registeredCustomOutputFormats);
        let m : Map<any, any> = <any>(new Map<any, any>());
        for(let index170=0; index170 < registeredCustomOutputFormats.length; index170++) {
            let outputFormat = registeredCustomOutputFormats[index170];
            {
                let name : string = outputFormat.getName();
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,UndefinedOutputFormat.INSTANCE_$LI$().getName()))) {
                    throw Object.defineProperty(new Error("The \"" + name + "\" output format can\'t be redefined"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,PlainTextOutputFormat.INSTANCE_$LI$().getName()))) {
                    throw Object.defineProperty(new Error("The \"" + name + "\" output format can\'t be redefined"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if(name.length === 0) {
                    throw Object.defineProperty(new Error("The output format name can\'t be 0 long"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if(!Character.isLetterOrDigit(name.charAt(0))) {
                    throw Object.defineProperty(new Error("The output format name must start with letter or digit: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if(name.indexOf('+') !== -1) {
                    throw Object.defineProperty(new Error("The output format name can\'t contain \"+\" character: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if(name.indexOf('{') !== -1) {
                    throw Object.defineProperty(new Error("The output format name can\'t contain \"{\" character: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if(name.indexOf('}') !== -1) {
                    throw Object.defineProperty(new Error("The output format name can\'t contain \"}\" character: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                let replaced : OutputFormat = /* put */m.set(outputFormat.getName(), outputFormat);
                if(replaced != null) {
                    if(replaced === outputFormat) {
                        throw Object.defineProperty(new Error("Duplicate output format in the collection: " + outputFormat), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    throw Object.defineProperty(new Error("Clashing output format names between " + replaced + " and " + outputFormat + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
            }
        }
        this.registeredCustomOutputFormats = Collections.unmodifiableMap<any, any>(m);
        this.clearTemplateCache();
    }

    /**
     * Getter pair of {link #setRegisteredCustomOutputFormats(Collection)}.
     * 
     * @since 2.3.24
     * @return {Collection}
     */
    public getRegisteredCustomOutputFormats() : Collection {
        return /* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>this.registeredCustomOutputFormats);
    }

    /**
     * Sets if the "file" extension part of the source name ({link Template#getSourceName()}) will influence certain
     * parsing settings. For backward compatibility, it defaults to {@code false} if
     * {link #getIncompatibleImprovements()} is less than 2.3.24. Starting from {@code incompatibleImprovements}
     * 2.3.24, it defaults to {@code true}, so the following standard file extensions take their effect:
     * 
     * <ul>
     * <li>{@code ftlh}: Sets {link TemplateConfiguration#setOutputFormat(OutputFormat) outputFormat} to
     * {@code "HTML"} (i.e., {link HTMLOutputFormat#INSTANCE}, unless the {@code "HTML"} name is overridden by
     * {link #setRegisteredCustomOutputFormats(Collection)}) and
     * {link TemplateConfiguration#setAutoEscapingPolicy(int) autoEscapingPolicy} to
     * {link #ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY}.
     * <li>{@code ftlx}: Sets {link TemplateConfiguration#setOutputFormat(OutputFormat) outputFormat} to
     * {@code "XML"} (i.e., {link XMLOutputFormat#INSTANCE}, unless the {@code "XML"} name is overridden by
     * {link #setRegisteredCustomOutputFormats(Collection)}) and
     * {link TemplateConfiguration#setAutoEscapingPolicy(int) autoEscapingPolicy} to
     * {link #ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY}.
     * </ul>
     * 
     * <p>These file extensions are not case sensitive. The file extension is the part after the last dot in the source
     * name. If the source name contains no dot, then it has no file extension.
     * 
     * <p>The settings activated by these file extensions override the setting values dictated by
     * {link #setTemplateConfigurations(TemplateConfigurationFactory)}.
     * @param {boolean} recognizeStandardFileExtensions
     */
    public setRecognizeStandardFileExtensions(recognizeStandardFileExtensions : boolean) {
        let prevEffectiveValue : boolean = this.getRecognizeStandardFileExtensions();
        this.recognizeStandardFileExtensions = recognizeStandardFileExtensions;
        if(prevEffectiveValue !== recognizeStandardFileExtensions) {
            this.clearTemplateCache();
        }
    }

    /**
     * Resets the setting to its default, as if it was never set. This means that when you change the
     * {@code incompatibe_improvements} setting later, the default will also change as appropriate. Also
     * {link #isRecognizeStandardFileExtensionsExplicitlySet()} will return {@code false}.
     * 
     * @since 2.3.24
     */
    public unsetRecognizeStandardFileExtensions() {
        if(this.recognizeStandardFileExtensions != null) {
            this.recognizeStandardFileExtensions = null;
        }
    }

    /**
     * Tells if {link #setRecognizeStandardFileExtensions(boolean)} (or equivalent) was already called on this
     * instance.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isRecognizeStandardFileExtensionsExplicitlySet() : boolean {
        return this.recognizeStandardFileExtensions != null;
    }

    /**
     * Getter pair of {link #setRecognizeStandardFileExtensions(boolean)}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public getRecognizeStandardFileExtensions() : boolean {
        return this.recognizeStandardFileExtensions == null?this.incompatibleImprovements.intValue() >= _TemplateAPI.VERSION_INT_2_3_24_$LI$():this.recognizeStandardFileExtensions;
    }

    /**
     * Determines the tag syntax (like {@code <#if x>} VS {@code [#if x]}) of the template files
     * that has no {@code #ftl} header to decide that. Don't confuse this with the interpolation syntax
     * ({link #setInterpolationSyntax(int)}); they are independent.
     * 
     * <p>The {@code tagSyntax} parameter must be one of:
     * <ul>
     * <li>{link Configuration#AUTO_DETECT_TAG_SYNTAX}:
     * Use the syntax of the first FreeMarker tag (can be anything, like <tt>#list</tt>,
     * <tt>#include</tt>, user defined, etc.)
     * <li>{link Configuration#ANGLE_BRACKET_TAG_SYNTAX}:
     * Use the angle bracket tag syntax (the normal syntax), like {@code <#include ...>}
     * <li>{link Configuration#SQUARE_BRACKET_TAG_SYNTAX}:
     * Use the square bracket tag syntax, like {@code [#include ...]}. Note that this does <em>not</em> change
     * <code>${x}</code> to {@code [=...]}; that's <em>interpolation</em> syntax, so use
     * {link #setInterpolationSyntax(int)} for that.
     * </ul>
     * 
     * <p>In FreeMarker 2.3.x {link Configuration#ANGLE_BRACKET_TAG_SYNTAX} is the
     * default for better backward compatibility. Starting from 2.4.x {link
     * Configuration#AUTO_DETECT_TAG_SYNTAX} is the default, so it's recommended to use
     * that even for 2.3.x.
     * 
     * <p>This setting is ignored for the templates that have {@code ftl} directive in
     * it. For those templates the syntax used for the {@code ftl} directive determines
     * the syntax.
     * <p>
     * see #setInterpolationSyntax(int)
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
        return this.tagSyntax;
    }

    /**
     * Determines the interpolation syntax (like <code>${x}</code> VS <code>[=x]</code>) of the template files. Don't
     * confuse this with the tag syntax ({link #setTagSyntax(int)}); they are independent.
     * <p>
     * <p>
     * The {@code interpolationSyntax} parameter must be one of {link Configuration#LEGACY_INTERPOLATION_SYNTAX},
     * {link Configuration#DOLLAR_INTERPOLATION_SYNTAX}, and {link Configuration#SQUARE_BRACKET_INTERPOLATION_SYNTAX}.
     * Note that {link Configuration#SQUARE_BRACKET_INTERPOLATION_SYNTAX} does <em>not</em> change {@code <#if x>} to
     * {@code [#if x]}; that's <em>tag</em> syntax, so use {link #setTagSyntax(int)} for that.
     * <p>
     * see #setTagSyntax(int)
     * 
     * @since 2.3.28
     * @param {number} interpolationSyntax
     */
    public setInterpolationSyntax(interpolationSyntax : number) {
        _TemplateAPI.valideInterpolationSyntaxValue(interpolationSyntax);
        this.interpolationSyntax = interpolationSyntax;
    }

    /**
     * The getter pair of {link #setInterpolationSyntax(int)}.
     * 
     * @since 2.3.28
     * @return {number}
     */
    public getInterpolationSyntax() : number {
        return this.interpolationSyntax;
    }

    /**
     * Sets the naming convention used for the identifiers that are part of the template language. The available naming
     * conventions are legacy (directive (tag) names are all-lower-case {@code likethis}, others are snake case
     * {@code like_this}), and camel case ({@code likeThis}). The default is auto-detect, which detects the naming
     * convention used and enforces that same naming convention for the whole template.
     * <p>
     * <p>
     * This setting doesn't influence what naming convention is used for the setting names outside templates. Also, it
     * won't ever convert the names of user-defined things, like of data-model members, or the names of user defined
     * macros/functions. It only influences the names of the built-in directives ({@code #elseIf} VS {@code elseif}),
     * built-ins ({@code ?upper_case} VS {@code ?upperCase} ), special variables ({@code .data_model} VS
     * {@code .dataModel}).
     * <p>
     * <p>
     * Which convention to use: FreeMarker prior to 2.3.23 has only supported
     * {link Configuration#LEGACY_NAMING_CONVENTION}, so that's how most templates and examples out there are written
     * as of 2015. But as templates today are mostly written by programmers and often access Java API-s which already
     * use camel case, {link Configuration#CAMEL_CASE_NAMING_CONVENTION} is the recommended option for most projects.
     * However, it's no necessary to make a application-wide decision; see auto-detection below.
     * <p>
     * <p>
     * FreeMarker will decide the naming convention automatically for each template individually when this setting is
     * set to {link #AUTO_DETECT_NAMING_CONVENTION} (which is the default). The naming convention of a template is
     * decided when the first core (non-user-defined) identifier is met during parsing (not during processing) where the
     * naming convention is relevant (like for {@code s?upperCase} or {@code s?upper_case} it's relevant, but for
     * {@code s?length} it isn't). At that point, the naming convention of the template is decided, and any later core
     * identifier that uses a different convention will be a parsing error. As the naming convention is decided per
     * template, it's not a problem if a template and the other template it {@code #include}-s/{@code #import} uses a
     * different convention.
     * <p>
     * <p>
     * FreeMarker always enforces the same naming convention to be used consistently within the same template "file".
     * Additionally, when this setting is set to non-{link #AUTO_DETECT_NAMING_CONVENTION}, the selected naming
     * convention is enforced on all templates. Thus such a setup can be used to enforce an application-wide naming
     * convention.
     * <p>
     * <p>
     * Non-strict tags (a long deprecated syntax from FreeMarker 1, activated via {link #setStrictSyntaxMode(boolean)})
     * are only recognized as FTL tags when they are using the {link Configuration#LEGACY_NAMING_CONVENTION} syntax,
     * regardless of this setting. As they aren't exempt from the naming convention consistency enforcement, generally,
     * you can't use strict {link Configuration#CAMEL_CASE_NAMING_CONVENTION} tags mixed with non-strict tags.
     * 
     * @param {number} namingConvention One of the {link #AUTO_DETECT_NAMING_CONVENTION} or {link #LEGACY_NAMING_CONVENTION}
     * {link #CAMEL_CASE_NAMING_CONVENTION}.
     * @throws IllegalArgumentException If the parameter isn't one of the valid constants.
     * @since 2.3.23
     */
    public setNamingConvention(namingConvention : number) {
        _TemplateAPI.validateNamingConventionValue(namingConvention);
        this.namingConvention = namingConvention;
    }

    /**
     * The getter pair of {link #setNamingConvention(int)}.
     * 
     * @since 2.3.23
     * @return {number}
     */
    public getNamingConvention() : number {
        return this.namingConvention;
    }

    /**
     * Sets the assumed display width of the tab character (ASCII 9), which influences the column number shown in error
     * messages (or the column number you get through other API-s). So for example if the users edit templates in an
     * editor where the tab width is set to 4, you should set this to 4 so that the column numbers printed by FreeMarker
     * will match the column number shown in the editor. This setting doesn't affect the output of templates, as a tab
     * in the template will remain a tab in the output too. If you set this setting to 1, then tab characters will be
     * kept in the return value of {link Template#getSource(int, int, int, int)}, otherwise they will be replaced with
     * the appropriate number of spaces.
     * 
     * @param {number} tabSize At least 1, at most 256.
     * @since 2.3.25
     */
    public setTabSize(tabSize : number) {
        if(tabSize < 1) {
            throw Object.defineProperty(new Error("\"tabSize\" must be at least 1, but was " + tabSize), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(tabSize > 256) {
            throw Object.defineProperty(new Error("\"tabSize\" can\'t be more than 256, but was " + tabSize), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.tabSize = tabSize;
    }

    /**
     * The getter pair of {link #setTabSize(int)}.
     * 
     * @since 2.3.25
     * @return {number}
     */
    public getTabSize() : number {
        return this.tabSize;
    }

    /**
     * Getter pair of {link #setPreventStrippings(boolean)}.
     * 
     * @since 2.3.27
     * @return {boolean}
     */
    getPreventStrippings() : boolean {
        return this.preventStrippings;
    }

    /**
     * Used internally; added for the FreeMarker 2 to FreeMarker 3 converter, prevents the stripping/removal of AST
     * nodes so that the source code can be fully reproduced from the AST.
     * 
     * @since 2.3.27
     * @param {boolean} preventStrippings
     */
    setPreventStrippings(preventStrippings : boolean) {
        this.preventStrippings = preventStrippings;
    }

    public getTemplate$java_lang_String(name : string) : Template {
        return this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, null, null, null, true, false);
    }

    public getTemplate$java_lang_String$java_util_Locale(name : string, locale : string) : Template {
        return this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, locale, null, null, true, false);
    }

    public getTemplate$java_lang_String$java_lang_String(name : string, encoding : string) : Template {
        return this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, null, null, encoding, true, false);
    }

    public getTemplate$java_lang_String$java_util_Locale$java_lang_String(name : string, locale : string, encoding : string) : Template {
        return this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, locale, null, encoding, true, false);
    }

    public getTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean(name : string, locale : string, encoding : string, parseAsFTL : boolean) : Template {
        return this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, locale, null, encoding, parseAsFTL, false);
    }

    public getTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean$boolean(name : string, locale : string, encoding : string, parseAsFTL : boolean, ignoreMissing : boolean) : Template {
        return this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, locale, null, encoding, parseAsFTL, ignoreMissing);
    }

    public getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name : string, locale : string, customLookupCondition : any, encoding : string, parseAsFTL : boolean, ignoreMissing : boolean) : Template {
        if(locale == null) {
            locale = this.getLocale();
        }
        if(encoding == null) {
            encoding = this.getEncoding(locale);
        }
        let maybeTemp : TemplateCache.MaybeMissingTemplate = this.cache.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, customLookupCondition, encoding, parseAsFTL);
        let temp : Template = maybeTemp.getTemplate();
        if(temp == null) {
            if(ignoreMissing) {
                return null;
            }
            let tl : TemplateLoader = this.getTemplateLoader();
            let msg : string;
            if(tl == null) {
                msg = "Don\'t know where to load template " + StringUtil.jQuote$java_lang_Object(name) + " from because the \"template_loader\" FreeMarker setting wasn\'t set (Configuration.setTemplateLoader), so it\'s null.";
            } else {
                let missingTempNormName : string = maybeTemp.getMissingTemplateNormalizedName();
                let missingTempReason : string = maybeTemp.getMissingTemplateReason();
                let templateLookupStrategy : TemplateLookupStrategy = this.getTemplateLookupStrategy();
                msg = "Template not found for name " + StringUtil.jQuote$java_lang_Object(name) + (missingTempNormName != null && name != null && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.removeInitialSlash(name),missingTempNormName))?" (normalized: " + StringUtil.jQuote$java_lang_Object(missingTempNormName) + ")":"") + (customLookupCondition != null?" and custom lookup condition " + StringUtil.jQuote$java_lang_Object(customLookupCondition):"") + "." + (missingTempReason != null?"\nReason given: " + this.ensureSentenceIsClosed(missingTempReason):"") + "\nThe name was interpreted by this TemplateLoader: " + StringUtil.tryToString(tl) + "." + (!this.isKnownNonConfusingLookupStrategy(templateLookupStrategy)?"\n(Before that, the name was possibly changed by this lookup strategy: " + StringUtil.tryToString(templateLookupStrategy) + ".)":"") + (!this.templateLoaderExplicitlySet?"\nWarning: The \"template_loader\" FreeMarker setting wasn\'t set (Configuration.setTemplateLoader), and using the default value is most certainly not intended and dangerous, and can be the cause of this error.":"") + (missingTempReason == null && name.indexOf('\\') !== -1?"\nWarning: The name contains backslash (\"\\\") instead of slash (\"/\"); template names should use slash only.":"");
            }
            let normName : string = maybeTemp.getMissingTemplateNormalizedName();
            throw new TemplateNotFoundException(normName != null?normName:name, customLookupCondition, msg);
        }
        return temp;
    }

    /**
     * Retrieves the template with the given name (and according the specified further parameters) from the template
     * cache, loading it into the cache first if it's missing/staled.
     * <p>
     * <p>
     * This method is thread-safe.
     * <p>
     * <p>
     * See {link Configuration} for an example of basic usage.
     * 
     * @param {String} name                  The name or path of the template, which is not a real path, but interpreted inside the current
     * {link TemplateLoader}. Can't be {@code null}. The exact syntax of the name depends on the underlying
     * {link TemplateLoader}, but the cache makes some assumptions. First, the name is expected to be a
     * hierarchical path, with path components separated by a slash character (not with backslash!). The path
     * (the name) given here must <em>not</em> begin with slash; it's always interpreted relative to the
     * "template root directory". Then, the {@code ..} and {@code .} path meta-elements will be resolved. For
     * example, if the name is {@code a/../b/./c.ftl}, then it will be simplified to {@code b/c.ftl}. The
     * rules regarding this are the same as with conventional UN*X paths. The path must not reach outside the
     * template root directory, that is, it can't be something like {@code "../templates/my.ftl"} (not even
     * if this path happens to be equivalent with {@code "/my.ftl"}). Furthermore, the path is allowed to
     * contain at most one path element whose name is {@code *} (asterisk). This path meta-element triggers
     * the <i>acquisition mechanism</i>. If the template is not found in the location described by the
     * concatenation of the path left to the asterisk (called base path) and the part to the right of the
     * asterisk (called resource path), the cache will attempt to remove the rightmost path component from
     * the base path ("go up one directory") and concatenate that with the resource path. The process is
     * repeated until either a template is found, or the base path is completely exhausted.
     * @param {Locale} locale                The requested locale of the template. This is what {link Template#getLocale()} on the resulting
     * {link Template} will return (unless it's overridden via {link #getTemplateConfigurations()}). This
     * parameter can be {@code null} since 2.3.22, in which case it defaults to
     * {link Configuration#getLocale()} (note that {link Template#getLocale()} will give the default value,
     * not {@code null}). This parameter also drives localized template lookup. Assuming that you have
     * specified {@code en_US} as the locale and {@code myTemplate.ftl} as the name of the template, and the
     * default {link TemplateLookupStrategy} is used and
     * {@code #setLocalizedLookup(boolean) localized_lookup} is {@code true}, FreeMarker will first try to
     * retrieve {@code myTemplate_en_US.html}, then {@code myTemplate.en.ftl}, and finally
     * {@code myTemplate.ftl}. Note that that the template's locale will be {@code en_US} even if it only
     * finds {@code myTemplate.ftl}. Note that when the {@code locale} setting is overridden with a
     * {link TemplateConfiguration} provided by {link #getTemplateConfigurations()}, that overrides the
     * value specified here, but only after the localized lookup, that is, it modifies the template
     * found by the localized lookup.
     * @param {Object} customLookupCondition This value can be used by a custom {link TemplateLookupStrategy}; has no effect with the default one.
     * Can be {@code null} (though it's up to the custom {link TemplateLookupStrategy} if it allows that).
     * This object will be used as part of the cache key, so it must to have a proper
     * {link Object#equals(Object)} and {link Object#hashCode()} method. It also should have reasonable
     * {link Object#toString()}, as it's possibly quoted in error messages. The expected type is up to the
     * custom {link TemplateLookupStrategy}. See also:
     * {link TemplateLookupContext#getCustomLookupCondition()}.
     * @param {String} encoding              Deprecated mechanism, {@code null} is the recommended; the charset used to interpret the template
     * source code bytes (if it's read from a binary source). Can be {@code null} since 2.3.22, in which case
     * it will default to {link Configuration#getEncoding(Locale)} where {@code Locale} is the
     * {@code locale} parameter (when {@code locale} was {@code null} too, the its default value is used
     * instead). Why is this deprecated: It doesn't make sense to get the <em>same</em> template with
     * different encodings, hence, it's error prone to specify the encoding where you get the template.
     * Instead, if you have template "files" with different charsets, you should use
     * {link #setTemplateConfigurations(TemplateConfigurationFactory)}, where you can associate encodings to
     * individual templates based on their names (like which "directory" are they in, what's their file
     * extension, etc.). The encoding associated with the templates that way overrides the encoding that you
     * specify here.
     * @param {boolean} parseAsFTL            If {@code true}, the loaded template is parsed and interpreted normally, as a regular FreeMarker
     * template. If {@code false}, the loaded template is treated as a static text, so <code>${...}</code>,
     * {@code <#...>} etc. will not have special meaning in it.
     * @param {boolean} ignoreMissing         If {@code true}, the method won't throw {link TemplateNotFoundException} if the template doesn't
     * exist, instead it returns {@code null}. Other kind of exceptions won't be suppressed.
     * @return {Template} the requested template; maybe {@code null} when the {@code ignoreMissing} parameter is {@code true}.
     * @throws TemplateNotFoundException      If the template could not be found. Note that this exception extends {link IOException}.
     * @throws MalformedTemplateNameException If the template name given was in violation with the {link TemplateNameFormat} in use. Note that
     * this exception extends {link IOException}.
     * @throws ParseException                 (extends <code>IOException</code>) if the template is syntactically bad. Note that this exception
     * extends {link IOException}.
     * @throws IOException                    If there was some other problem with reading the template "file". Note that the other exceptions
     * extend {link IOException}, so this should be catched the last.
     * @since 2.3.22
     */
    public getTemplate(name? : any, locale? : any, customLookupCondition? : any, encoding? : any, parseAsFTL? : any, ignoreMissing? : any) : any {
        if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((customLookupCondition != null) || customLookupCondition === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof parseAsFTL === 'boolean') || parseAsFTL === null) && ((typeof ignoreMissing === 'boolean') || ignoreMissing === null)) {
            return <any>this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean$boolean(name, locale, customLookupCondition, encoding, parseAsFTL, ignoreMissing);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((typeof customLookupCondition === 'string') || customLookupCondition === null) && ((typeof encoding === 'boolean') || encoding === null) && ((typeof parseAsFTL === 'boolean') || parseAsFTL === null) && ignoreMissing === undefined) {
            return <any>this.getTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean$boolean(name, locale, customLookupCondition, encoding, parseAsFTL);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((typeof customLookupCondition === 'string') || customLookupCondition === null) && ((typeof encoding === 'boolean') || encoding === null) && parseAsFTL === undefined && ignoreMissing === undefined) {
            return <any>this.getTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean(name, locale, customLookupCondition, encoding);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((typeof customLookupCondition === 'string') || customLookupCondition === null) && encoding === undefined && parseAsFTL === undefined && ignoreMissing === undefined) {
            return <any>this.getTemplate$java_lang_String$java_util_Locale$java_lang_String(name, locale, customLookupCondition);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && customLookupCondition === undefined && encoding === undefined && parseAsFTL === undefined && ignoreMissing === undefined) {
            return <any>this.getTemplate$java_lang_String$java_util_Locale(name, locale);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && customLookupCondition === undefined && encoding === undefined && parseAsFTL === undefined && ignoreMissing === undefined) {
            return <any>this.getTemplate$java_lang_String$java_lang_String(name, locale);
        } else if(((typeof name === 'string') || name === null) && locale === undefined && customLookupCondition === undefined && encoding === undefined && parseAsFTL === undefined && ignoreMissing === undefined) {
            return <any>this.getTemplate$java_lang_String(name);
        } else throw new Error('invalid overload');
    }

    isKnownNonConfusingLookupStrategy(templateLookupStrategy : TemplateLookupStrategy) : boolean {
        return templateLookupStrategy === TemplateLookupStrategy.DEFAULT_2_3_0_$LI$();
    }

    removeInitialSlash(name : string) : string {
        return /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(name, "/")?name.substring(1):name;
    }

    ensureSentenceIsClosed(s : string) : string {
        if(s == null || s.length === 0) {
            return s;
        }
        let lastChar : string = s.charAt(s.length - 1);
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) == '.'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) == '!'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) == '?'.charCodeAt(0)?s:s + ".";
    }

    /**
     * Sets the charset used for decoding byte sequences to character sequences when
     * reading template files in a locale for which no explicit encoding
     * was specified via {link #setEncoding(Locale, String)}. Note that by default there is no locale specified for
     * any locale, so the default encoding is always in effect.
     * 
     * <p>Defaults to the default system encoding, which can change from one server to
     * another, so <b>you should always set this setting</b>. If you don't know what charset your should chose,
     * {@code "UTF-8"} is usually a good choice.
     * 
     * <p>Note that individual templates may specify their own charset by starting with
     * <tt>&lt;#ftl encoding="..."&gt;</tt>
     * 
     * @param {String} encoding The name of the charset, such as {@code "UTF-8"} or {@code "ISO-8859-1"}
     */
    public setDefaultEncoding(encoding : string) {
        this.defaultEncoding = encoding;
        this.defaultEncodingExplicitlySet = true;
    }

    /**
     * Gets the default encoding for converting bytes to characters when
     * reading template files in a locale for which no explicit encoding
     * was specified. Defaults to the default system encoding.
     * @return {String}
     */
    public getDefaultEncoding() : string {
        return this.defaultEncoding;
    }

    /**
     * Resets the setting to its default, as if it was never set.
     * 
     * @since 2.3.26
     */
    public unsetDefaultEncoding() {
        if(this.defaultEncodingExplicitlySet) {
            this.setDefaultEncoding(Configuration.getDefaultDefaultEncoding());
            this.defaultEncodingExplicitlySet = false;
        }
    }

    /**
     * Tells if {link #setDefaultEncoding(String)} (or equivalent) was already called on this instance, or it just holds the
     * default value.
     * 
     * @since 2.3.26
     * @return {boolean}
     */
    public isDefaultEncodingExplicitlySet() : boolean {
        return this.defaultEncodingExplicitlySet;
    }

    static getDefaultDefaultEncoding() : string {
        return Configuration.getJVMDefaultEncoding();
    }

    static getJVMDefaultEncoding() : string {
        return SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("file.encoding", "utf-8");
    }

    /**
     * Gets the preferred character encoding for the given locale, or the
     * default encoding if no encoding is set explicitly for the specified
     * locale. You can associate encodings with locales using
     * {link #setEncoding(Locale, String)} or {link #loadBuiltInEncodingMap()}.
     * 
     * @param {Locale} locale Shouldn't be {@code null}, though for backward compatibility it's accepted when the locale to
     * encoding {link Map} (see earlier) is empty.
     * @return {String}
     */
    public getEncoding(locale : string) : string {
        if(/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.localeToCharsetMap)) {
            return this.defaultEncoding;
        } else {
            NullArgumentException.check$java_lang_String$java_lang_Object("locale", locale);
            let charset : string = <string>/* get */this.localeToCharsetMap.get(locale.toString());
            if(charset == null) {
                if(locale.getVariant().length > 0) {
                    let l : string = <string>new String(locale.getLanguage(), locale.getCountry());
                    charset = <string>/* get */this.localeToCharsetMap.get(l.toString());
                    if(charset != null) {
                        /* put */this.localeToCharsetMap.set(locale.toString(), charset);
                    }
                }
                charset = <string>/* get */this.localeToCharsetMap.get(locale.getLanguage());
                if(charset != null) {
                    /* put */this.localeToCharsetMap.set(locale.toString(), charset);
                }
            }
            return charset != null?charset:this.defaultEncoding;
        }
    }

    /**
     * Sets the character set encoding to use for templates of
     * a given locale. If there is no explicit encoding set for some
     * locale, then the default encoding will be used, what you can
     * set with {link #setDefaultEncoding}.
     * <p>
     * see #clearEncodingMap
     * see #loadBuiltInEncodingMap
     * @param {Locale} locale
     * @param {String} encoding
     */
    public setEncoding(locale : string, encoding : string) {
        /* put */this.localeToCharsetMap.set(locale.toString(), encoding);
    }

    public setSharedVariable$java_lang_String$freemarker_template_TemplateModel(name : string, tm : TemplateModel) {
        let replaced : any = /* put */this.sharedVariables.set(name, tm);
        if(replaced != null && this.rewrappableSharedVariables != null) {
            /* remove */this.rewrappableSharedVariables.delete(name);
        }
    }

    /**
     * Adds a shared variable to the configuration.
     * Shared sharedVariables are sharedVariables that are visible
     * as top-level sharedVariables for all templates which use this
     * configuration, if the data model does not contain a
     * variable with the same name.
     * 
     * <p>Never use <tt>TemplateModel</tt> implementation that is not thread-safe for shared sharedVariables,
     * if the configuration is used by multiple threads! It is the typical situation for Servlet based Web sites.
     * 
     * <p>This method is <b>not</b> thread safe; use it with the same restrictions as those that modify setting values.
     * 
     * @param {String} name the name used to access the data object from your template.
     * If a shared variable with this name already exists, it will replace
     * that.
     * <p>
     * see #setAllSharedVariables
     * see #setSharedVariable(String,Object)
     * @param {*} tm
     */
    public setSharedVariable(name? : any, tm? : any) : any {
        if(((typeof name === 'string') || name === null) && ((tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || tm === null)) {
            return <any>this.setSharedVariable$java_lang_String$freemarker_template_TemplateModel(name, tm);
        } else if(((typeof name === 'string') || name === null) && ((tm != null) || tm === null)) {
            return <any>this.setSharedVariable$java_lang_String$java_lang_Object(name, tm);
        } else throw new Error('invalid overload');
    }

    /**
     * Returns the set containing the names of all defined shared sharedVariables.
     * The method returns a new Set object on each call that is completely
     * disconnected from the Configuration. That is, modifying the set will have
     * no effect on the Configuration object.
     * @return {Set}
     */
    public getSharedVariableNames() : Array<any> {
        return <any>(/* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.sharedVariables).slice(0));
    }

    public setSharedVariable$java_lang_String$java_lang_Object(name : string, value : any) {
        this.setSharedVariable$java_lang_String$freemarker_template_TemplateModel(name, this.getObjectWrapper()['wrap$java_lang_Object'](value));
    }

    /**
     * Replaces all shared variables (removes all previously added ones).
     * 
     * <p>The values in the map can be {link TemplateModel}-s or plain Java objects which will be immediately converted
     * to {link TemplateModel} with the {link ObjectWrapper} returned by {link #getObjectWrapper()}. If
     * {link #setObjectWrapper(ObjectWrapper)} is called later, this conversion will be re-applied. Thus, ignoring some
     * extra resource usage, it doesn't mater if in what order are {link #setObjectWrapper(ObjectWrapper)} and
     * {link #setSharedVaribles(Map)} called. This is essential when you don't have control over the order in which
     * the setters are called.
     * 
     * <p>The values in the map must be thread safe, if you are running templates from multiple threads with
     * this configuration. This means that both the plain Java object and the {link TemplateModel}-s created from them
     * by the {link ObjectWrapper} must be thread safe. (The standard {link ObjectWrapper}-s of FreeMarker create
     * thread safe {link TemplateModel}-s.) The {link Map} itself need not be thread-safe.
     * 
     * <p>This setter method has no getter pair because of the tricky relation ship with
     * {link #setSharedVariable(String, Object)}.
     * 
     * @throws TemplateModelException If some of the variables couldn't be wrapped via {link #getObjectWrapper()}.
     * @since 2.3.21
     * @param {Map} map
     */
    public setSharedVaribles(map : Map<any, any>) {
        this.rewrappableSharedVariables = <any>(new Map<any, any>());
        /* clear */(<any>this.sharedVariables).clear();
        this.setSharedVariablesFromRewrappableSharedVariables();
    }

    setSharedVariablesFromRewrappableSharedVariables() {
        if(this.rewrappableSharedVariables == null) return;
        for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>this.rewrappableSharedVariables)); it.hasNext(); ) {
            let ent : Entry = <Entry><any>it.next();
            let name : string = <string>ent.getKey();
            let value : any = ent.getValue();
            let valueAsTM : TemplateModel;
            if(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) {
                valueAsTM = <TemplateModel><any>value;
            } else {
                valueAsTM = this.getObjectWrapper()['wrap$java_lang_Object'](value);
            }
            /* put */this.sharedVariables.set(name, valueAsTM);
        };
    }

    /**
     * Adds all object in the hash as shared variable to the configuration; it's like doing several
     * {link #setSharedVariable(String, Object)} calls, one for each hash entry. It doesn't remove the already added
     * shared variable before doing this.
     * 
     * <p>Never use <tt>TemplateModel</tt> implementation that is not thread-safe for shared shared variable values,
     * if the configuration is used by multiple threads! It is the typical situation for Servlet based Web sites.
     * 
     * <p>This method is <b>not</b> thread safe; use it with the same restrictions as those that modify setting values.
     * 
     * @param {*} hash a hash model whose objects will be copied to the
     * configuration with same names as they are given in the hash.
     * If a shared variable with these names already exist, it will be replaced
     * with those from the map.
     * <p>
     * see #setSharedVaribles(Map)
     * see #setSharedVariable(String,Object)
     * see #setSharedVariable(String,TemplateModel)
     */
    public setAllSharedVariables(hash : TemplateHashModelEx) {
        let keys : TemplateModelIterator = hash.keys().iterator();
        let values : TemplateModelIterator = hash.values().iterator();
        while((keys.hasNext())) {
            this.setSharedVariable$java_lang_String$freemarker_template_TemplateModel((<TemplateScalarModel><any>keys.next()).getAsString(), values.next());
        };
    }

    /**
     * Gets a shared variable. Shared sharedVariables are sharedVariables that are
     * available to all templates. When a template is processed, and an identifier
     * is undefined in the data model, a shared variable object with the same identifier
     * is then looked up in the configuration. There are several predefined sharedVariables
     * that are always available through this method, see the FreeMarker manual
     * for a comprehensive list of them.
     * <p>
     * see #setSharedVariable(String,Object)
     * see #setSharedVariable(String,TemplateModel)
     * see #setAllSharedVariables
     * @param {String} name
     * @return {*}
     */
    public getSharedVariable(name : string) : TemplateModel {
        return <TemplateModel><any>/* get */this.sharedVariables.get(name);
    }

    /**
     * Removes all shared sharedVariables, except the predefined ones (compress, html_escape, etc.).
     */
    public clearSharedVariables() {
        /* clear */(<any>this.sharedVariables).clear();
        this.loadBuiltInSharedVariables();
    }

    /**
     * Removes all entries from the template cache, thus forcing reloading of templates
     * on subsequent <code>getTemplate</code> calls.
     * 
     * <p>This method is thread-safe and can be called while the engine processes templates.
     */
    public clearTemplateCache() {
        this.cache.clear();
    }

    public removeTemplateFromCache$java_lang_String(name : string) {
        let loc : string = this.getLocale();
        this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, loc, null, this.getEncoding(loc), true);
    }

    public removeTemplateFromCache$java_lang_String$java_util_Locale(name : string, locale : string) {
        this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, null, this.getEncoding(locale), true);
    }

    public removeTemplateFromCache$java_lang_String$java_lang_String(name : string, encoding : string) {
        this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, this.getLocale(), null, encoding, true);
    }

    public removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_String(name : string, locale : string, encoding : string) {
        this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, null, encoding, true);
    }

    public removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_String$boolean(name : string, locale : string, encoding : string, parse : boolean) {
        this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, null, encoding, parse);
    }

    public removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name : string, locale : string, customLookupCondition : any, encoding : string, parse : boolean) {
        this.cache.removeTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, customLookupCondition, encoding, parse);
    }

    /**
     * Removes a template from the template cache, hence forcing the re-loading
     * of it when it's next time requested. This is to give the application
     * finer control over cache updating than {link #setTemplateUpdateDelay(int)}
     * alone does.
     * 
     * <p>For the meaning of the parameters, see
     * {link #getTemplate(String, Locale, Object, String, boolean, boolean)}.
     * 
     * <p>This method is thread-safe and can be called while the engine processes templates.
     * 
     * @since 2.3.28
     * @param {String} name
     * @param {Locale} locale
     * @param {Object} customLookupCondition
     * @param {String} encoding
     * @param {boolean} parse
     */
    public removeTemplateFromCache(name? : any, locale? : any, customLookupCondition? : any, encoding? : any, parse? : any) : any {
        if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((customLookupCondition != null) || customLookupCondition === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof parse === 'boolean') || parse === null)) {
            return <any>this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, customLookupCondition, encoding, parse);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((typeof customLookupCondition === 'string') || customLookupCondition === null) && ((typeof encoding === 'boolean') || encoding === null) && parse === undefined) {
            return <any>this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_String$boolean(name, locale, customLookupCondition, encoding);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((typeof customLookupCondition === 'string') || customLookupCondition === null) && encoding === undefined && parse === undefined) {
            return <any>this.removeTemplateFromCache$java_lang_String$java_util_Locale$java_lang_String(name, locale, customLookupCondition);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && customLookupCondition === undefined && encoding === undefined && parse === undefined) {
            return <any>this.removeTemplateFromCache$java_lang_String$java_util_Locale(name, locale);
        } else if(((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && customLookupCondition === undefined && encoding === undefined && parse === undefined) {
            return <any>this.removeTemplateFromCache$java_lang_String$java_lang_String(name, locale);
        } else if(((typeof name === 'string') || name === null) && locale === undefined && customLookupCondition === undefined && encoding === undefined && parse === undefined) {
            return <any>this.removeTemplateFromCache$java_lang_String(name);
        } else throw new Error('invalid overload');
    }

    /**
     * The getter pair of {link #setLocalizedLookup(boolean)}.
     * 
     * <p>This method is thread-safe and can be called while the engine works.
     * @return {boolean}
     */
    public getLocalizedLookup() : boolean {
        return this.cache.getLocalizedLookup();
    }

    /**
     * Enables/disables localized template lookup. Enabled by default.
     * <p>
     * <p>
     * With the default {link TemplateLookupStrategy}, localized lookup works like this: Let's say your locale setting
     * is {@code Locale("en", "AU")}, and you call {link Configuration#getTemplate(String) cfg.getTemplate("foo.ftl")}.
     * Then FreeMarker will look for the template under these names, stopping at the first that exists:
     * {@code "foo_en_AU.ftl"}, {@code "foo_en.ftl"}, {@code "foo.ftl"}. See the description of the default value at
     * {link #setTemplateLookupStrategy(TemplateLookupStrategy)} for a more details. If you need to generate different
     * template names, use {link #setTemplateLookupStrategy(TemplateLookupStrategy)} with your custom
     * {link TemplateLookupStrategy}.
     * 
     * <p>Note that changing the value of this setting causes the template cache to be emptied so that old lookup
     * results won't be reused (since 2.3.22).
     * <p>
     * <p>
     * Historical note: Despite what the API documentation said earlier, this method is <em>not</em> thread-safe. While
     * setting it can't cause any serious problems, and in fact it works well on most hardware, it's not guaranteed that
     * FreeMarker will see the update in all threads.
     * @param {boolean} localizedLookup
     */
    public setLocalizedLookup(localizedLookup : boolean) {
        this.localizedLookup = localizedLookup;
        this.cache.setLocalizedLookup(localizedLookup);
    }

    /**
     * 
     * @param {String} name
     * @param {String} value
     */
    public setSetting(name : string, value : string) {
        let unknown : boolean = false;
        try {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("TemplateUpdateInterval", name)) {
                name = Configuration.TEMPLATE_UPDATE_DELAY_KEY_$LI$();
            } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("DefaultEncoding", name)) {
                name = Configuration.DEFAULT_ENCODING_KEY_$LI$();
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.DEFAULT_ENCODING_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.DEFAULT_ENCODING_KEY_CAMEL_CASE,name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(Configuration.__freemarker_template_Configuration_JVM_DEFAULT, value)) {
                    this.setDefaultEncoding(Configuration.getJVMDefaultEncoding());
                } else {
                    this.setDefaultEncoding(value);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.LOCALIZED_LOOKUP_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.LOCALIZED_LOOKUP_KEY_CAMEL_CASE,name))) {
                this.setLocalizedLookup(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.STRICT_SYNTAX_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.STRICT_SYNTAX_KEY_CAMEL_CASE,name))) {
                this.setStrictSyntaxMode(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.WHITESPACE_STRIPPING_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.WHITESPACE_STRIPPING_KEY_CAMEL_CASE,name))) {
                this.setWhitespaceStripping(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.AUTO_ESCAPING_POLICY_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.AUTO_ESCAPING_POLICY_KEY_CAMEL_CASE,name))) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("enable_if_default",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("enableIfDefault",value))) {
                    this.setAutoEscapingPolicy(Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("enable_if_supported",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("enableIfSupported",value))) {
                    this.setAutoEscapingPolicy(Configuration.ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("disable",value))) {
                    this.setAutoEscapingPolicy(Configuration.DISABLE_AUTO_ESCAPING_POLICY);
                } else {
                    throw this.invalidSettingValueException(name, value);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.OUTPUT_FORMAT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.OUTPUT_FORMAT_KEY_CAMEL_CASE,name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, Configuration.__freemarker_template_Configuration_DEFAULT)) {
                    this.unsetOutputFormat();
                } else {
                    let stdOF : OutputFormat = /* get */Configuration.STANDARD_OUTPUT_FORMATS_$LI$().get(value);
                    this.setOutputFormat(stdOF != null?stdOF:<OutputFormat>_ObjectBuilderSettingEvaluator.eval(value, OutputFormat, true, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_CAMEL_CASE,name))) {
                let list : Array<any> = <Array<any>><any>_ObjectBuilderSettingEvaluator.eval(value, "java.util.List", true, _SettingEvaluationEnvironment.getCurrent());
                for(let index171=0; index171 < list.length; index171++) {
                    let item = list[index171];
                    {
                        if(!(item != null && item instanceof <any>OutputFormat)) {
                            throw new _MiscTemplateException(this.getEnvironment(), "Invalid value for setting ", new _DelayedJQuote(name), ": List items must be " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(OutputFormat) + " instances, in: ", value);
                        }
                    }
                }
                this.setRegisteredCustomOutputFormats(list);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_CAMEL_CASE,name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, Configuration.__freemarker_template_Configuration_DEFAULT)) {
                    this.unsetRecognizeStandardFileExtensions();
                } else {
                    this.setRecognizeStandardFileExtensions(StringUtil.getYesNo(value));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.CACHE_STORAGE_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.CACHE_STORAGE_KEY_CAMEL_CASE,name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, Configuration.__freemarker_template_Configuration_DEFAULT)) {
                    this.unsetCacheStorage();
                }
                if(value.indexOf('.') === -1) {
                    let strongSize : number = 0;
                    let softSize : number = 0;
                    let map : Map<any, any> = StringUtil.parseNameValuePairList(value, /* valueOf */new String(Number.MAX_VALUE).toString());
                    let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>map));
                    while((it.hasNext())) {
                        let ent : Entry = <Entry><any>it.next();
                        let pname : string = <string>ent.getKey();
                        let pvalue : number;
                        try {
                            pvalue = /* parseInt */parseInt(<string>ent.getValue());
                        } catch(e) {
                            throw this.invalidSettingValueException(name, value);
                        };
                        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("soft", pname)) {
                            softSize = pvalue;
                        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("strong", pname)) {
                            strongSize = pvalue;
                        } else {
                            throw this.invalidSettingValueException(name, value);
                        }
                    };
                    if(softSize === 0 && strongSize === 0) {
                        throw this.invalidSettingValueException(name, value);
                    }
                    this.setCacheStorage(new MruCacheStorage(strongSize, softSize));
                } else {
                    this.setCacheStorage(<CacheStorage><any>_ObjectBuilderSettingEvaluator.eval(value, "freemarker.cache.CacheStorage", false, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_UPDATE_DELAY_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_UPDATE_DELAY_KEY_CAMEL_CASE,name))) {
                let multipier : number;
                let valueWithoutUnit : string;
                if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(value, "ms")) {
                    multipier = 1;
                    valueWithoutUnit = this.rightTrim(value.substring(0, value.length - 2));
                } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(value, "s")) {
                    multipier = 1000;
                    valueWithoutUnit = this.rightTrim(value.substring(0, value.length - 1));
                } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(value, "m")) {
                    multipier = 1000 * 60;
                    valueWithoutUnit = this.rightTrim(value.substring(0, value.length - 1));
                } else if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(value, "h")) {
                    multipier = 1000 * 60 * 60;
                    valueWithoutUnit = this.rightTrim(value.substring(0, value.length - 1));
                } else {
                    multipier = 1000;
                    valueWithoutUnit = value;
                }
                this.setTemplateUpdateDelayMilliseconds(/* parseInt */parseInt(valueWithoutUnit) * multipier);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TAG_SYNTAX_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TAG_SYNTAX_KEY_CAMEL_CASE,name))) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("auto_detect",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("autoDetect",value))) {
                    this.setTagSyntax(Configuration.AUTO_DETECT_TAG_SYNTAX);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("angle_bracket",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("angleBracket",value))) {
                    this.setTagSyntax(Configuration.ANGLE_BRACKET_TAG_SYNTAX);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("square_bracket",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("squareBracket",value))) {
                    this.setTagSyntax(Configuration.SQUARE_BRACKET_TAG_SYNTAX);
                } else {
                    throw this.invalidSettingValueException(name, value);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.INTERPOLATION_SYNTAX_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.INTERPOLATION_SYNTAX_KEY_CAMEL_CASE,name))) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("legacy",value))) {
                    this.setInterpolationSyntax(Configuration.LEGACY_INTERPOLATION_SYNTAX);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("dollar",value))) {
                    this.setInterpolationSyntax(Configuration.DOLLAR_INTERPOLATION_SYNTAX);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("square_bracket",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("squareBracket",value))) {
                    this.setInterpolationSyntax(Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX);
                } else {
                    throw this.invalidSettingValueException(name, value);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.NAMING_CONVENTION_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.NAMING_CONVENTION_KEY_CAMEL_CASE,name))) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("auto_detect",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("autoDetect",value))) {
                    this.setNamingConvention(Configuration.AUTO_DETECT_NAMING_CONVENTION);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("legacy",value))) {
                    this.setNamingConvention(Configuration.LEGACY_NAMING_CONVENTION);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("camel_case",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("camelCase",value))) {
                    this.setNamingConvention(Configuration.CAMEL_CASE_NAMING_CONVENTION);
                } else {
                    throw this.invalidSettingValueException(name, value);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TAB_SIZE_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TAB_SIZE_KEY_CAMEL_CASE,name))) {
                this.setTabSize(/* parseInt */parseInt(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY_CAMEL_CASE,name))) {
                this.setIncompatibleImprovements(new Version(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.INCOMPATIBLE_ENHANCEMENTS,name))) {
                this.setIncompatibleEnhancements(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_LOADER_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_LOADER_KEY_CAMEL_CASE,name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, Configuration.__freemarker_template_Configuration_DEFAULT)) {
                    this.unsetTemplateLoader();
                } else {
                    this.setTemplateLoader(<TemplateLoader><any>_ObjectBuilderSettingEvaluator.eval(value, "freemarker.cache.TemplateLoader", true, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY_CAMEL_CASE,name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, Configuration.__freemarker_template_Configuration_DEFAULT)) {
                    this.unsetTemplateLookupStrategy();
                } else {
                    this.setTemplateLookupStrategy(<TemplateLookupStrategy>_ObjectBuilderSettingEvaluator.eval(value, TemplateLookupStrategy, false, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_NAME_FORMAT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_NAME_FORMAT_KEY_CAMEL_CASE,name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, Configuration.__freemarker_template_Configuration_DEFAULT)) {
                    this.unsetTemplateNameFormat();
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, "default_2_3_0")) {
                    this.setTemplateNameFormat(TemplateNameFormat.DEFAULT_2_3_0_$LI$());
                } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(value, "default_2_4_0")) {
                    this.setTemplateNameFormat(TemplateNameFormat.DEFAULT_2_4_0_$LI$());
                } else {
                    throw this.invalidSettingValueException(name, value);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_CONFIGURATIONS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configuration.TEMPLATE_CONFIGURATIONS_KEY_CAMEL_CASE,name))) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,Configuration.__freemarker_template_Configuration_NULL))) {
                    this.setTemplateConfigurations(null);
                } else {
                    this.setTemplateConfigurations(<TemplateConfigurationFactory>_ObjectBuilderSettingEvaluator.eval(value, TemplateConfigurationFactory, false, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else {
                unknown = true;
            }
        } catch(e) {
            throw this.settingValueAssignmentException(name, value, e);
        };
        if(unknown) {
            super.setSetting(name, value);
        }
    }

    rightTrim(s : string) : string {
        let ln : number = s.length;
        while((ln > 0 && Character.isWhitespace(s.charAt(ln - 1)))) {
            ln--;
        };
        return s.substring(0, ln);
    }

    /**
     * Returns the valid {link Configuration} setting names. Naturally, this includes the {link Configurable} setting
     * names too.
     * 
     * @param {boolean} camelCase If we want the setting names with camel case naming convention, or with snake case (legacy) naming
     * convention.
     * <p>
     * see Configurable#getSettingNames(boolean)
     * @since 2.3.24
     * @return {Set}
     */
    public getSettingNames(camelCase : boolean) : Set {
        return <any>(new _UnmodifiableCompositeSet<string>(super.getSettingNames(camelCase), <any>(new _SortedArraySet<string>(camelCase?Configuration.__freemarker_template_Configuration_SETTING_NAMES_CAMEL_CASE_$LI$():Configuration.__freemarker_template_Configuration_SETTING_NAMES_SNAKE_CASE_$LI$()))));
    }

    /**
     * 
     * @param {String} name
     * @return {String}
     */
    getCorrectedNameForUnknownSetting(name : string) : string {
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("encoding",name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("charset",name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("default_charset",name))) {
            return Configuration.DEFAULT_ENCODING_KEY_$LI$();
        }
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("defaultCharset",name))) {
            return Configuration.DEFAULT_ENCODING_KEY_CAMEL_CASE;
        }
        return super.getCorrectedNameForUnknownSetting(name);
    }

    /**
     * 
     * @param {Environment} env
     */
    doAutoImportsAndIncludes(env : Environment) {
        let t : Template = env.getMainTemplate();
        this.doAutoImports(env, t);
        this.doAutoIncludes(env, t);
    }

    doAutoImports(env : Environment, t : Template) {
        let envAutoImports : Map<any, any> = env.getAutoImportsWithoutFallback();
        let tAutoImports : Map<any, any> = t.getAutoImportsWithoutFallback();
        let lazyAutoImports : boolean = env.getLazyAutoImports() != null?env.getLazyAutoImports():env.getLazyImports();
        {
            let array173 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(this.getAutoImportsWithoutFallback());
            for(let index172=0; index172 < array173.length; index172++) {
                let autoImport = array173[index172];
                {
                    let nsVarName : string = autoImport.getKey();
                    if((tAutoImports == null || !/* containsKey */tAutoImports.has(nsVarName)) && (envAutoImports == null || !/* containsKey */envAutoImports.has(nsVarName))) {
                        env.importLib$java_lang_String$java_lang_String$boolean(autoImport.getValue(), nsVarName, lazyAutoImports);
                    }
                }
            }
        }
        if(tAutoImports != null) {
            {
                let array175 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(tAutoImports);
                for(let index174=0; index174 < array175.length; index174++) {
                    let autoImport = array175[index174];
                    {
                        let nsVarName : string = autoImport.getKey();
                        if(envAutoImports == null || !/* containsKey */envAutoImports.has(nsVarName)) {
                            env.importLib$java_lang_String$java_lang_String$boolean(autoImport.getValue(), nsVarName, lazyAutoImports);
                        }
                    }
                }
            }
        }
        if(envAutoImports != null) {
            {
                let array177 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(envAutoImports);
                for(let index176=0; index176 < array177.length; index176++) {
                    let autoImport = array177[index176];
                    {
                        let nsVarName : string = autoImport.getKey();
                        env.importLib$java_lang_String$java_lang_String$boolean(autoImport.getValue(), nsVarName, lazyAutoImports);
                    }
                }
            }
        }
    }

    doAutoIncludes(env : Environment, t : Template) {
        let tAutoIncludes : List = t.getAutoIncludesWithoutFallback();
        let envAutoIncludes : List = env.getAutoIncludesWithoutFallback();
        {
            let array179 = this.getAutoIncludesWithoutFallback();
            for(let index178=0; index178 < array179.length; index178++) {
                let templateName = array179[index178];
                {
                    if((tAutoIncludes == null || !/* contains */(tAutoIncludes.indexOf(<any>(templateName)) >= 0)) && (envAutoIncludes == null || !/* contains */(envAutoIncludes.indexOf(<any>(templateName)) >= 0))) {
                        env.include$freemarker_template_Template(this.getTemplate$java_lang_String$java_util_Locale(templateName, env.getLocale()));
                    }
                }
            }
        }
        if(tAutoIncludes != null) {
            for(let index180=0; index180 < tAutoIncludes.length; index180++) {
                let templateName = tAutoIncludes[index180];
                {
                    if(envAutoIncludes == null || !/* contains */(envAutoIncludes.indexOf(<any>(templateName)) >= 0)) {
                        env.include$freemarker_template_Template(this.getTemplate$java_lang_String$java_util_Locale(templateName, env.getLocale()));
                    }
                }
            }
        }
        if(envAutoIncludes != null) {
            for(let index181=0; index181 < envAutoIncludes.length; index181++) {
                let templateName = envAutoIncludes[index181];
                {
                    env.include$freemarker_template_Template(this.getTemplate$java_lang_String$java_util_Locale(templateName, env.getLocale()));
                }
            }
        }
    }

    /**
     * Returns FreeMarker version number string.
     * 
     * @deprecated Use {link #getVersion()} instead.
     * @return {String}
     */
    public static getVersionNumber() : string {
        return Configuration.VERSION_$LI$().toString();
    }

    /**
     * Returns FreeMarker version information, most importantly the major.minor.micro version numbers;
     * do NOT use this as the value of the {@code incompatible_improvements} setting (as the parameter to
     * {link Configuration#Configuration(Version)}), as then your application can break when you upgrade FreeMarker!
     * Use a constant value, like {link #VERSION_2_3_28}, to protect your application from fixes/changes that aren't
     * entirely backward compatible. Fixes and features that are backward compatible are always enabled.
     * <p>
     * On FreeMarker version numbering rules:
     * <ul>
     * <li>For final/stable releases the version number is like major.minor.micro, like 2.3.19. (Historically,
     * when micro was 0 the version strings was like major.minor instead of the proper major.minor.0, but that's
     * not like that anymore.)
     * <li>When only the micro version is increased, compatibility with previous versions with the same
     * major.minor is kept. Thus <tt>freemarker.jar</tt> can be replaced in an existing application without
     * breaking it.</li>
     * <li>For non-final/unstable versions (that almost nobody uses), the format is:
     * <ul>
     * <li>Starting from 2.3.20: major.minor.micro-extraInfo, like
     * 2.3.20-nightly_20130506T123456Z, 2.4.0-RC01. The major.minor.micro
     * always indicates the target we move towards, so 2.3.20-nightly or 2.3.20-M01 is
     * after 2.3.19 and will eventually become to 2.3.20. "PRE", "M" and "RC" (uppercase!) means
     * "preview", "milestone" and "release candidate" respectively, and is always followed by a 2 digit
     * 0-padded counter, like M03 is the 3rd milestone release of a given major.minor.micro.</li>
     * <li>Before 2.3.20: The extraInfo wasn't preceded by a "-".
     * Instead of "nightly" there was "mod", where the major.minor.micro part has indicated where
     * are we coming from, so 2.3.19mod (read as: 2.3.19 modified) was after 2.3.19 but before 2.3.20.
     * Also, "pre" and "rc" was lowercase, and was followd by a number without 0-padding.</li>
     * </ul>
     * </ul>
     * 
     * @since 2.3.20
     * @return {Version}
     */
    public static getVersion() : Version {
        return Configuration.VERSION_$LI$();
    }

    /**
     * Returns the default object wrapper for a given "incompatible_improvements" version.
     * <p>
     * see #setIncompatibleImprovements(Version)
     * 
     * @since 2.3.21
     * @param {Version} incompatibleImprovements
     * @return {*}
     */
    public static getDefaultObjectWrapper(incompatibleImprovements : Version) : ObjectWrapper {
        if(incompatibleImprovements.intValue() < _TemplateAPI.VERSION_INT_2_3_21_$LI$()) {
            return ObjectWrapper.DEFAULT_WRAPPER;
        } else {
            return new DefaultObjectWrapperBuilder(incompatibleImprovements).build();
        }
    }

    public getSupportedBuiltInNames$() : Array<any> {
        return this.getSupportedBuiltInNames$int(this.getNamingConvention());
    }

    public getSupportedBuiltInNames$int(namingConvention : number) : Set {
        return _CoreAPI.getSupportedBuiltInNames(namingConvention);
    }

    /**
     * Returns the names of the supported "built-ins". These are the ({@code expr?builtin_name}-like things). As of this
     * writing, this information doesn't depend on the configuration options, so it could be a static method, but
     * to be future-proof, it's an instance method.
     * 
     * @param {number} namingConvention One of {link #AUTO_DETECT_NAMING_CONVENTION}, {link #LEGACY_NAMING_CONVENTION}, and
     * {link #CAMEL_CASE_NAMING_CONVENTION}. If it's {link #AUTO_DETECT_NAMING_CONVENTION} then the union
     * of the names in all the naming conventions is returned.
     * @since 2.3.24
     * @return {Set}
     */
    public getSupportedBuiltInNames(namingConvention? : any) : any {
        if(((typeof namingConvention === 'number') || namingConvention === null)) {
            return <any>this.getSupportedBuiltInNames$int(namingConvention);
        } else if(namingConvention === undefined) {
            return <any>this.getSupportedBuiltInNames$();
        } else throw new Error('invalid overload');
    }

    public getSupportedBuiltInDirectiveNames$() : Array<any> {
        return this.getSupportedBuiltInDirectiveNames$int(this.getNamingConvention());
    }

    public getSupportedBuiltInDirectiveNames$int(namingConvention : number) : Set {
        if(namingConvention === Configuration.AUTO_DETECT_NAMING_CONVENTION) {
            return _CoreAPI.ALL_BUILT_IN_DIRECTIVE_NAMES_$LI$();
        } else if(namingConvention === Configuration.LEGACY_NAMING_CONVENTION) {
            return _CoreAPI.LEGACY_BUILT_IN_DIRECTIVE_NAMES_$LI$();
        } else if(namingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION) {
            return _CoreAPI.CAMEL_CASE_BUILT_IN_DIRECTIVE_NAMES_$LI$();
        } else {
            throw Object.defineProperty(new Error("Unsupported naming convention constant: " + namingConvention), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }

    /**
     * Returns the names of the directives that are predefined by FreeMarker. These are the things that you call like
     * <tt>&lt;#directiveName ...&gt;</tt>.
     * 
     * @param {number} namingConvention One of {link #AUTO_DETECT_NAMING_CONVENTION}, {link #LEGACY_NAMING_CONVENTION}, and
     * {link #CAMEL_CASE_NAMING_CONVENTION}. If it's {link #AUTO_DETECT_NAMING_CONVENTION} then the union
     * of the names in all the naming conventions is returned.
     * @since 2.3.24
     * @return {Set}
     */
    public getSupportedBuiltInDirectiveNames(namingConvention? : any) : any {
        if(((typeof namingConvention === 'number') || namingConvention === null)) {
            return <any>this.getSupportedBuiltInDirectiveNames$int(namingConvention);
        } else if(namingConvention === undefined) {
            return <any>this.getSupportedBuiltInDirectiveNames$();
        } else throw new Error('invalid overload');
    }

    static getRequiredVersionProperty(vp : Map, properyName : string) : string {
        let s : string = /* getProperty */vp.get(properyName);
        if(s == null) {
            throw Object.defineProperty(new Error("Version file is corrupt: \"" + properyName + "\" property is missing."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return s;
    }
}
Configuration["__class"] = "freemarker.template.Configuration";
Configuration["__interfaces"] = ["java.lang.Cloneable","freemarker.core.ParserConfiguration"];



export namespace Configuration {

    export class LegacyDefaultFileTemplateLoader extends FileTemplateLoader {
        public constructor() {
            super();
        }
    }
    LegacyDefaultFileTemplateLoader["__class"] = "freemarker.template.Configuration.LegacyDefaultFileTemplateLoader";
    LegacyDefaultFileTemplateLoader["__interfaces"] = ["freemarker.cache.TemplateLoader"];



    export class DefaultSoftCacheStorage extends SoftCacheStorage {
        constructor() {
            super();
        }
    }
    DefaultSoftCacheStorage["__class"] = "freemarker.template.Configuration.DefaultSoftCacheStorage";
    DefaultSoftCacheStorage["__interfaces"] = ["freemarker.cache.ConcurrentCacheStorage","freemarker.cache.CacheStorage","freemarker.cache.CacheStorageWithGetSize"];


}



var __Function = Function;

Configuration.defaultConfig_$LI$();

Configuration.defaultConfigLock_$LI$();

Configuration.FM_24_DETECTED_$LI$();

Configuration.VERSION_$LI$();

Configuration.PARSED_DEFAULT_INCOMPATIBLE_ENHANCEMENTS_$LI$();

Configuration.DEFAULT_INCOMPATIBLE_ENHANCEMENTS_$LI$();

Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$();

Configuration.VERSION_2_3_29_$LI$();

Configuration.VERSION_2_3_28_$LI$();

Configuration.VERSION_2_3_27_$LI$();

Configuration.VERSION_2_3_26_$LI$();

Configuration.VERSION_2_3_25_$LI$();

Configuration.VERSION_2_3_24_$LI$();

Configuration.VERSION_2_3_23_$LI$();

Configuration.VERSION_2_3_22_$LI$();

Configuration.VERSION_2_3_21_$LI$();

Configuration.VERSION_2_3_20_$LI$();

Configuration.VERSION_2_3_19_$LI$();

Configuration.VERSION_2_3_0_$LI$();

Configuration.STANDARD_OUTPUT_FORMATS_$LI$();

Configuration.__freemarker_template_Configuration_SETTING_NAMES_CAMEL_CASE_$LI$();

Configuration.__freemarker_template_Configuration_SETTING_NAMES_SNAKE_CASE_$LI$();

Configuration.INCOMPATIBLE_IMPROVEMENTS_$LI$();

Configuration.INCOMPATIBLE_IMPROVEMENTS_KEY_$LI$();

Configuration.TEMPLATE_CONFIGURATIONS_KEY_$LI$();

Configuration.TEMPLATE_NAME_FORMAT_KEY_$LI$();

Configuration.TEMPLATE_LOOKUP_STRATEGY_KEY_$LI$();

Configuration.TEMPLATE_LOADER_KEY_$LI$();

Configuration.TAB_SIZE_KEY_$LI$();

Configuration.NAMING_CONVENTION_KEY_$LI$();

Configuration.INTERPOLATION_SYNTAX_KEY_$LI$();

Configuration.TAG_SYNTAX_KEY_$LI$();

Configuration.AUTO_INCLUDE_KEY_$LI$();

Configuration.AUTO_IMPORT_KEY_$LI$();

Configuration.TEMPLATE_UPDATE_DELAY_KEY_$LI$();

Configuration.CACHE_STORAGE_KEY_$LI$();

Configuration.AUTO_ESCAPING_POLICY_KEY_$LI$();

Configuration.REGISTERED_CUSTOM_OUTPUT_FORMATS_KEY_$LI$();

Configuration.RECOGNIZE_STANDARD_FILE_EXTENSIONS_KEY_$LI$();

Configuration.OUTPUT_FORMAT_KEY_$LI$();

Configuration.WHITESPACE_STRIPPING_KEY_$LI$();

Configuration.STRICT_SYNTAX_KEY_$LI$();

Configuration.LOCALIZED_LOOKUP_KEY_$LI$();

Configuration.DEFAULT_ENCODING_KEY_$LI$();

Configuration.CACHE_LOG_$LI$();

Configuration.__static_initialize();
