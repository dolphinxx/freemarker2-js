/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {InputStream} from '../../java/io/InputStream';
import {Boolean} from '../../java/lang/Boolean';
import {Character} from '../../java/lang/Character';
import {Set} from '../../java/util/Set';
import {Map} from '../../java/util/Map';
import {List} from "../../java/util/List";
import {ClassUtil} from "../template/utility/ClassUtil";
import {_MiscTemplateException} from "./_MiscTemplateException";
import {Locale} from "../../java/util/Locale";

/**
 * Creates a new instance. Normally you do not need to use this constructor,
 * as you don't use <code>Configurable</code> directly, but its subclasses.
 * @param {Configurable} parent
 * @class
 */
export class Configurable {
    static C_TRUE_FALSE : string = "true,false";

    static NULL : string = "null";

    static DEFAULT : string = "default";

    static DEFAULT_2_3_0 : string = "default_2_3_0";

    static JVM_DEFAULT : string = "JVM default";

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static LOCALE_KEY_SNAKE_CASE : string = "locale";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static LOCALE_KEY_CAMEL_CASE : string = "locale";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static LOCALE_KEY : string; public static LOCALE_KEY_$LI$() : string { if(Configurable.LOCALE_KEY == null) Configurable.LOCALE_KEY = Configurable.LOCALE_KEY_SNAKE_CASE; return Configurable.LOCALE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static NUMBER_FORMAT_KEY_SNAKE_CASE : string = "number_format";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static NUMBER_FORMAT_KEY_CAMEL_CASE : string = "numberFormat";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static NUMBER_FORMAT_KEY : string; public static NUMBER_FORMAT_KEY_$LI$() : string { if(Configurable.NUMBER_FORMAT_KEY == null) Configurable.NUMBER_FORMAT_KEY = Configurable.NUMBER_FORMAT_KEY_SNAKE_CASE; return Configurable.NUMBER_FORMAT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static CUSTOM_NUMBER_FORMATS_KEY_SNAKE_CASE : string = "custom_number_formats";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static CUSTOM_NUMBER_FORMATS_KEY_CAMEL_CASE : string = "customNumberFormats";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static CUSTOM_NUMBER_FORMATS_KEY : string; public static CUSTOM_NUMBER_FORMATS_KEY_$LI$() : string { if(Configurable.CUSTOM_NUMBER_FORMATS_KEY == null) Configurable.CUSTOM_NUMBER_FORMATS_KEY = Configurable.CUSTOM_NUMBER_FORMATS_KEY_SNAKE_CASE; return Configurable.CUSTOM_NUMBER_FORMATS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TIME_FORMAT_KEY_SNAKE_CASE : string = "time_format";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TIME_FORMAT_KEY_CAMEL_CASE : string = "timeFormat";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TIME_FORMAT_KEY : string; public static TIME_FORMAT_KEY_$LI$() : string { if(Configurable.TIME_FORMAT_KEY == null) Configurable.TIME_FORMAT_KEY = Configurable.TIME_FORMAT_KEY_SNAKE_CASE; return Configurable.TIME_FORMAT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static DATE_FORMAT_KEY_SNAKE_CASE : string = "date_format";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static DATE_FORMAT_KEY_CAMEL_CASE : string = "dateFormat";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static DATE_FORMAT_KEY : string; public static DATE_FORMAT_KEY_$LI$() : string { if(Configurable.DATE_FORMAT_KEY == null) Configurable.DATE_FORMAT_KEY = Configurable.DATE_FORMAT_KEY_SNAKE_CASE; return Configurable.DATE_FORMAT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static CUSTOM_DATE_FORMATS_KEY_SNAKE_CASE : string = "custom_date_formats";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static CUSTOM_DATE_FORMATS_KEY_CAMEL_CASE : string = "customDateFormats";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static CUSTOM_DATE_FORMATS_KEY : string; public static CUSTOM_DATE_FORMATS_KEY_$LI$() : string { if(Configurable.CUSTOM_DATE_FORMATS_KEY == null) Configurable.CUSTOM_DATE_FORMATS_KEY = Configurable.CUSTOM_DATE_FORMATS_KEY_SNAKE_CASE; return Configurable.CUSTOM_DATE_FORMATS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static DATETIME_FORMAT_KEY_SNAKE_CASE : string = "datetime_format";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static DATETIME_FORMAT_KEY_CAMEL_CASE : string = "datetimeFormat";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static DATETIME_FORMAT_KEY : string; public static DATETIME_FORMAT_KEY_$LI$() : string { if(Configurable.DATETIME_FORMAT_KEY == null) Configurable.DATETIME_FORMAT_KEY = Configurable.DATETIME_FORMAT_KEY_SNAKE_CASE; return Configurable.DATETIME_FORMAT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TIME_ZONE_KEY_SNAKE_CASE : string = "time_zone";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TIME_ZONE_KEY_CAMEL_CASE : string = "timeZone";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TIME_ZONE_KEY : string; public static TIME_ZONE_KEY_$LI$() : string { if(Configurable.TIME_ZONE_KEY == null) Configurable.TIME_ZONE_KEY = Configurable.TIME_ZONE_KEY_SNAKE_CASE; return Configurable.TIME_ZONE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static SQL_DATE_AND_TIME_TIME_ZONE_KEY_SNAKE_CASE : string = "sql_date_and_time_time_zone";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static SQL_DATE_AND_TIME_TIME_ZONE_KEY_CAMEL_CASE : string = "sqlDateAndTimeTimeZone";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static SQL_DATE_AND_TIME_TIME_ZONE_KEY : string; public static SQL_DATE_AND_TIME_TIME_ZONE_KEY_$LI$() : string { if(Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY == null) Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY = Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_SNAKE_CASE; return Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static CLASSIC_COMPATIBLE_KEY_SNAKE_CASE : string = "classic_compatible";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static CLASSIC_COMPATIBLE_KEY_CAMEL_CASE : string = "classicCompatible";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static CLASSIC_COMPATIBLE_KEY : string; public static CLASSIC_COMPATIBLE_KEY_$LI$() : string { if(Configurable.CLASSIC_COMPATIBLE_KEY == null) Configurable.CLASSIC_COMPATIBLE_KEY = Configurable.CLASSIC_COMPATIBLE_KEY_SNAKE_CASE; return Configurable.CLASSIC_COMPATIBLE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_EXCEPTION_HANDLER_KEY_SNAKE_CASE : string = "template_exception_handler";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static TEMPLATE_EXCEPTION_HANDLER_KEY_CAMEL_CASE : string = "templateExceptionHandler";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static TEMPLATE_EXCEPTION_HANDLER_KEY : string; public static TEMPLATE_EXCEPTION_HANDLER_KEY_$LI$() : string { if(Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY == null) Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY = Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_SNAKE_CASE; return Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.27
     */
    public static ATTEMPT_EXCEPTION_REPORTER_KEY_SNAKE_CASE : string = "attempt_exception_reporter";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.27
     */
    public static ATTEMPT_EXCEPTION_REPORTER_KEY_CAMEL_CASE : string = "attemptExceptionReporter";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static ATTEMPT_EXCEPTION_REPORTER_KEY : string; public static ATTEMPT_EXCEPTION_REPORTER_KEY_$LI$() : string { if(Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY == null) Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY = Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY_SNAKE_CASE; return Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static ARITHMETIC_ENGINE_KEY_SNAKE_CASE : string = "arithmetic_engine";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static ARITHMETIC_ENGINE_KEY_CAMEL_CASE : string = "arithmeticEngine";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static ARITHMETIC_ENGINE_KEY : string; public static ARITHMETIC_ENGINE_KEY_$LI$() : string { if(Configurable.ARITHMETIC_ENGINE_KEY == null) Configurable.ARITHMETIC_ENGINE_KEY = Configurable.ARITHMETIC_ENGINE_KEY_SNAKE_CASE; return Configurable.ARITHMETIC_ENGINE_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static OBJECT_WRAPPER_KEY_SNAKE_CASE : string = "object_wrapper";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static OBJECT_WRAPPER_KEY_CAMEL_CASE : string = "objectWrapper";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static OBJECT_WRAPPER_KEY : string; public static OBJECT_WRAPPER_KEY_$LI$() : string { if(Configurable.OBJECT_WRAPPER_KEY == null) Configurable.OBJECT_WRAPPER_KEY = Configurable.OBJECT_WRAPPER_KEY_SNAKE_CASE; return Configurable.OBJECT_WRAPPER_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static BOOLEAN_FORMAT_KEY_SNAKE_CASE : string = "boolean_format";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static BOOLEAN_FORMAT_KEY_CAMEL_CASE : string = "booleanFormat";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static BOOLEAN_FORMAT_KEY : string; public static BOOLEAN_FORMAT_KEY_$LI$() : string { if(Configurable.BOOLEAN_FORMAT_KEY == null) Configurable.BOOLEAN_FORMAT_KEY = Configurable.BOOLEAN_FORMAT_KEY_SNAKE_CASE; return Configurable.BOOLEAN_FORMAT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static OUTPUT_ENCODING_KEY_SNAKE_CASE : string = "output_encoding";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static OUTPUT_ENCODING_KEY_CAMEL_CASE : string = "outputEncoding";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static OUTPUT_ENCODING_KEY : string; public static OUTPUT_ENCODING_KEY_$LI$() : string { if(Configurable.OUTPUT_ENCODING_KEY == null) Configurable.OUTPUT_ENCODING_KEY = Configurable.OUTPUT_ENCODING_KEY_SNAKE_CASE; return Configurable.OUTPUT_ENCODING_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static URL_ESCAPING_CHARSET_KEY_SNAKE_CASE : string = "url_escaping_charset";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static URL_ESCAPING_CHARSET_KEY_CAMEL_CASE : string = "urlEscapingCharset";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static URL_ESCAPING_CHARSET_KEY : string; public static URL_ESCAPING_CHARSET_KEY_$LI$() : string { if(Configurable.URL_ESCAPING_CHARSET_KEY == null) Configurable.URL_ESCAPING_CHARSET_KEY = Configurable.URL_ESCAPING_CHARSET_KEY_SNAKE_CASE; return Configurable.URL_ESCAPING_CHARSET_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static STRICT_BEAN_MODELS_KEY_SNAKE_CASE : string = "strict_bean_models";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static STRICT_BEAN_MODELS_KEY_CAMEL_CASE : string = "strictBeanModels";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints. @since 2.3.22
     */
    public static STRICT_BEAN_MODELS_KEY : string; public static STRICT_BEAN_MODELS_KEY_$LI$() : string { if(Configurable.STRICT_BEAN_MODELS_KEY == null) Configurable.STRICT_BEAN_MODELS_KEY = Configurable.STRICT_BEAN_MODELS_KEY_SNAKE_CASE; return Configurable.STRICT_BEAN_MODELS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static AUTO_FLUSH_KEY_SNAKE_CASE : string = "auto_flush";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static AUTO_FLUSH_KEY_CAMEL_CASE : string = "autoFlush";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints. @since 2.3.17
     */
    public static AUTO_FLUSH_KEY : string; public static AUTO_FLUSH_KEY_$LI$() : string { if(Configurable.AUTO_FLUSH_KEY == null) Configurable.AUTO_FLUSH_KEY = Configurable.AUTO_FLUSH_KEY_SNAKE_CASE; return Configurable.AUTO_FLUSH_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static NEW_BUILTIN_CLASS_RESOLVER_KEY_SNAKE_CASE : string = "new_builtin_class_resolver";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static NEW_BUILTIN_CLASS_RESOLVER_KEY_CAMEL_CASE : string = "newBuiltinClassResolver";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints. @since 2.3.17
     */
    public static NEW_BUILTIN_CLASS_RESOLVER_KEY : string; public static NEW_BUILTIN_CLASS_RESOLVER_KEY_$LI$() : string { if(Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY == null) Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY = Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_SNAKE_CASE; return Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static SHOW_ERROR_TIPS_KEY_SNAKE_CASE : string = "show_error_tips";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static SHOW_ERROR_TIPS_KEY_CAMEL_CASE : string = "showErrorTips";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints. @since 2.3.21
     */
    public static SHOW_ERROR_TIPS_KEY : string; public static SHOW_ERROR_TIPS_KEY_$LI$() : string { if(Configurable.SHOW_ERROR_TIPS_KEY == null) Configurable.SHOW_ERROR_TIPS_KEY = Configurable.SHOW_ERROR_TIPS_KEY_SNAKE_CASE; return Configurable.SHOW_ERROR_TIPS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static API_BUILTIN_ENABLED_KEY_SNAKE_CASE : string = "api_builtin_enabled";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static API_BUILTIN_ENABLED_KEY_CAMEL_CASE : string = "apiBuiltinEnabled";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints. @since 2.3.22
     */
    public static API_BUILTIN_ENABLED_KEY : string; public static API_BUILTIN_ENABLED_KEY_$LI$() : string { if(Configurable.API_BUILTIN_ENABLED_KEY == null) Configurable.API_BUILTIN_ENABLED_KEY = Configurable.API_BUILTIN_ENABLED_KEY_SNAKE_CASE; return Configurable.API_BUILTIN_ENABLED_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.23
     */
    public static LOG_TEMPLATE_EXCEPTIONS_KEY_SNAKE_CASE : string = "log_template_exceptions";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.23
     */
    public static LOG_TEMPLATE_EXCEPTIONS_KEY_CAMEL_CASE : string = "logTemplateExceptions";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints. @since 2.3.22
     */
    public static LOG_TEMPLATE_EXCEPTIONS_KEY : string; public static LOG_TEMPLATE_EXCEPTIONS_KEY_$LI$() : string { if(Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY == null) Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY = Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_SNAKE_CASE; return Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.27
     */
    public static WRAP_UNCHECKED_EXCEPTIONS_KEY_SNAKE_CASE : string = "wrap_unchecked_exceptions";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.27
     */
    public static WRAP_UNCHECKED_EXCEPTIONS_KEY_CAMEL_CASE : string = "wrapUncheckedExceptions";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints. @since 2.3.27
     */
    public static WRAP_UNCHECKED_EXCEPTIONS_KEY : string; public static WRAP_UNCHECKED_EXCEPTIONS_KEY_$LI$() : string { if(Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY == null) Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY = Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY_SNAKE_CASE; return Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.25
     */
    public static LAZY_IMPORTS_KEY_SNAKE_CASE : string = "lazy_imports";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.25
     */
    public static LAZY_IMPORTS_KEY_CAMEL_CASE : string = "lazyImports";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static LAZY_IMPORTS_KEY : string; public static LAZY_IMPORTS_KEY_$LI$() : string { if(Configurable.LAZY_IMPORTS_KEY == null) Configurable.LAZY_IMPORTS_KEY = Configurable.LAZY_IMPORTS_KEY_SNAKE_CASE; return Configurable.LAZY_IMPORTS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.25
     */
    public static LAZY_AUTO_IMPORTS_KEY_SNAKE_CASE : string = "lazy_auto_imports";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.25
     */
    public static LAZY_AUTO_IMPORTS_KEY_CAMEL_CASE : string = "lazyAutoImports";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static LAZY_AUTO_IMPORTS_KEY : string; public static LAZY_AUTO_IMPORTS_KEY_$LI$() : string { if(Configurable.LAZY_AUTO_IMPORTS_KEY == null) Configurable.LAZY_AUTO_IMPORTS_KEY = Configurable.LAZY_AUTO_IMPORTS_KEY_SNAKE_CASE; return Configurable.LAZY_AUTO_IMPORTS_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.25
     */
    public static AUTO_IMPORT_KEY_SNAKE_CASE : string = "auto_import";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.25
     */
    public static AUTO_IMPORT_KEY_CAMEL_CASE : string = "autoImport";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static AUTO_IMPORT_KEY : string; public static AUTO_IMPORT_KEY_$LI$() : string { if(Configurable.AUTO_IMPORT_KEY == null) Configurable.AUTO_IMPORT_KEY = Configurable.AUTO_IMPORT_KEY_SNAKE_CASE; return Configurable.AUTO_IMPORT_KEY; };

    /**
     * Legacy, snake case ({@code like_this}) variation of the setting name. @since 2.3.25
     */
    public static AUTO_INCLUDE_KEY_SNAKE_CASE : string = "auto_include";

    /**
     * Modern, camel case ({@code likeThis}) variation of the setting name. @since 2.3.25
     */
    public static AUTO_INCLUDE_KEY_CAMEL_CASE : string = "autoInclude";

    /**
     * Alias to the {@code ..._SNAKE_CASE} variation due to backward compatibility constraints.
     */
    public static AUTO_INCLUDE_KEY : string; public static AUTO_INCLUDE_KEY_$LI$() : string { if(Configurable.AUTO_INCLUDE_KEY == null) Configurable.AUTO_INCLUDE_KEY = Configurable.AUTO_INCLUDE_KEY_SNAKE_CASE; return Configurable.AUTO_INCLUDE_KEY; };

    /**
     * @deprecated Use {link #STRICT_BEAN_MODELS_KEY} instead.
     */
    public static STRICT_BEAN_MODELS : string; public static STRICT_BEAN_MODELS_$LI$() : string { if(Configurable.STRICT_BEAN_MODELS == null) Configurable.STRICT_BEAN_MODELS = Configurable.STRICT_BEAN_MODELS_KEY_$LI$(); return Configurable.STRICT_BEAN_MODELS; };

    static SETTING_NAMES_SNAKE_CASE : Array<any>; public static SETTING_NAMES_SNAKE_CASE_$LI$() : Array<any> { if(Configurable.SETTING_NAMES_SNAKE_CASE == null) Configurable.SETTING_NAMES_SNAKE_CASE = [Configurable.API_BUILTIN_ENABLED_KEY_SNAKE_CASE, Configurable.ARITHMETIC_ENGINE_KEY_SNAKE_CASE, Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY_SNAKE_CASE, Configurable.AUTO_FLUSH_KEY_SNAKE_CASE, Configurable.AUTO_IMPORT_KEY_SNAKE_CASE, Configurable.AUTO_INCLUDE_KEY_SNAKE_CASE, Configurable.BOOLEAN_FORMAT_KEY_SNAKE_CASE, Configurable.CLASSIC_COMPATIBLE_KEY_SNAKE_CASE, Configurable.CUSTOM_DATE_FORMATS_KEY_SNAKE_CASE, Configurable.CUSTOM_NUMBER_FORMATS_KEY_SNAKE_CASE, Configurable.DATE_FORMAT_KEY_SNAKE_CASE, Configurable.DATETIME_FORMAT_KEY_SNAKE_CASE, Configurable.LAZY_AUTO_IMPORTS_KEY_SNAKE_CASE, Configurable.LAZY_IMPORTS_KEY_SNAKE_CASE, Configurable.LOCALE_KEY_SNAKE_CASE, Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_SNAKE_CASE, Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_SNAKE_CASE, Configurable.NUMBER_FORMAT_KEY_SNAKE_CASE, Configurable.OBJECT_WRAPPER_KEY_SNAKE_CASE, Configurable.OUTPUT_ENCODING_KEY_SNAKE_CASE, Configurable.SHOW_ERROR_TIPS_KEY_SNAKE_CASE, Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_SNAKE_CASE, Configurable.STRICT_BEAN_MODELS_KEY_$LI$(), Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_SNAKE_CASE, Configurable.TIME_FORMAT_KEY_SNAKE_CASE, Configurable.TIME_ZONE_KEY_SNAKE_CASE, Configurable.URL_ESCAPING_CHARSET_KEY_SNAKE_CASE, Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY_SNAKE_CASE]; return Configurable.SETTING_NAMES_SNAKE_CASE; };

    static SETTING_NAMES_CAMEL_CASE : Array<any>; public static SETTING_NAMES_CAMEL_CASE_$LI$() : Array<any> { if(Configurable.SETTING_NAMES_CAMEL_CASE == null) Configurable.SETTING_NAMES_CAMEL_CASE = [Configurable.API_BUILTIN_ENABLED_KEY_CAMEL_CASE, Configurable.ARITHMETIC_ENGINE_KEY_CAMEL_CASE, Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY_CAMEL_CASE, Configurable.AUTO_FLUSH_KEY_CAMEL_CASE, Configurable.AUTO_IMPORT_KEY_CAMEL_CASE, Configurable.AUTO_INCLUDE_KEY_CAMEL_CASE, Configurable.BOOLEAN_FORMAT_KEY_CAMEL_CASE, Configurable.CLASSIC_COMPATIBLE_KEY_CAMEL_CASE, Configurable.CUSTOM_DATE_FORMATS_KEY_CAMEL_CASE, Configurable.CUSTOM_NUMBER_FORMATS_KEY_CAMEL_CASE, Configurable.DATE_FORMAT_KEY_CAMEL_CASE, Configurable.DATETIME_FORMAT_KEY_CAMEL_CASE, Configurable.LAZY_AUTO_IMPORTS_KEY_CAMEL_CASE, Configurable.LAZY_IMPORTS_KEY_CAMEL_CASE, Configurable.LOCALE_KEY_CAMEL_CASE, Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_CAMEL_CASE, Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_CAMEL_CASE, Configurable.NUMBER_FORMAT_KEY_CAMEL_CASE, Configurable.OBJECT_WRAPPER_KEY_CAMEL_CASE, Configurable.OUTPUT_ENCODING_KEY_CAMEL_CASE, Configurable.SHOW_ERROR_TIPS_KEY_CAMEL_CASE, Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_CAMEL_CASE, Configurable.STRICT_BEAN_MODELS_KEY_CAMEL_CASE, Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_CAMEL_CASE, Configurable.TIME_FORMAT_KEY_CAMEL_CASE, Configurable.TIME_ZONE_KEY_CAMEL_CASE, Configurable.URL_ESCAPING_CHARSET_KEY_CAMEL_CASE, Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY_CAMEL_CASE]; return Configurable.SETTING_NAMES_CAMEL_CASE; };

    /*private*/ parent : Configurable;

    /*private*/ properties : Map<any, any>;

    /*private*/ customAttributes : Map<any, any>;

    /*private*/ locale : Locale;

    /*private*/ numberFormat : string;

    /*private*/ timeFormat : string;

    /*private*/ dateFormat : string;

    /*private*/ dateTimeFormat : string;

    /*private*/ timeZone : string;

    /*private*/ sqlDataAndTimeTimeZone : string;

    /*private*/ sqlDataAndTimeTimeZoneSet : boolean;

    /*private*/ booleanFormat : string;

    /*private*/ trueStringValue : string;

    /*private*/ falseStringValue : string;

    /*private*/ classicCompatible : number;

    /*private*/ templateExceptionHandler : /*TemplateExceptionHandler*/any;

    /*private*/ attemptExceptionReporter : /*AttemptExceptionReporter*/any;

    /*private*/ arithmeticEngine : /*ArithmeticEngine*/any;

    /*private*/ objectWrapper : /*ObjectWrapper*/any;

    /*private*/ outputEncoding : string;

    /*private*/ outputEncodingSet : boolean;

    /*private*/ urlEscapingCharset : string;

    /*private*/ urlEscapingCharsetSet : boolean;

    /*private*/ autoFlush : boolean;

    /*private*/ newBuiltinClassResolver : /*TemplateClassResolver*/any;

    /*private*/ showErrorTips : boolean;

    /*private*/ apiBuiltinEnabled : boolean;

    /*private*/ logTemplateExceptions : boolean;

    /*private*/ wrapUncheckedExceptions : boolean;

    /*private*/ customDateFormats : Map<any, any>;

    /*private*/ customNumberFormats : Map<any, any>;

    /*private*/ autoImports : Map<any, any>;

    /*private*/ autoIncludes : List<any>;

    /*private*/ lazyImports : boolean;

    /*private*/ lazyAutoImports : boolean;

    /*private*/ lazyAutoImportsSet : boolean;

    public constructor(incompatibleImprovements? : any) {
        const _TemplateAPI = require('../template/_TemplateAPI')._TemplateAPI;
        const ArithmeticEngine = require('../core/ArithmeticEngine').ArithmeticEngine;
        const TemplateClassResolver = require('../core/TemplateClassResolver').TemplateClassResolver;
        if(((ClassUtil.isInstanceOf(incompatibleImprovements, 'freemarker.template.Version')) || incompatibleImprovements === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.parent===undefined) this.parent = null;
            if(this.properties===undefined) this.properties = null;
            if(this.customAttributes===undefined) this.customAttributes = null;
            if(this.locale===undefined) this.locale = null;
            if(this.numberFormat===undefined) this.numberFormat = null;
            if(this.timeFormat===undefined) this.timeFormat = null;
            if(this.dateFormat===undefined) this.dateFormat = null;
            if(this.dateTimeFormat===undefined) this.dateTimeFormat = null;
            if(this.timeZone===undefined) this.timeZone = null;
            if(this.sqlDataAndTimeTimeZone===undefined) this.sqlDataAndTimeTimeZone = null;
            if(this.sqlDataAndTimeTimeZoneSet===undefined) this.sqlDataAndTimeTimeZoneSet = false;
            if(this.booleanFormat===undefined) this.booleanFormat = null;
            if(this.trueStringValue===undefined) this.trueStringValue = null;
            if(this.falseStringValue===undefined) this.falseStringValue = null;
            if(this.classicCompatible===undefined) this.classicCompatible = null;
            if(this.templateExceptionHandler===undefined) this.templateExceptionHandler = null;
            if(this.attemptExceptionReporter===undefined) this.attemptExceptionReporter = null;
            if(this.arithmeticEngine===undefined) this.arithmeticEngine = null;
            if(this.objectWrapper===undefined) this.objectWrapper = null;
            if(this.outputEncoding===undefined) this.outputEncoding = null;
            if(this.outputEncodingSet===undefined) this.outputEncodingSet = false;
            if(this.urlEscapingCharset===undefined) this.urlEscapingCharset = null;
            if(this.urlEscapingCharsetSet===undefined) this.urlEscapingCharsetSet = false;
            if(this.autoFlush===undefined) this.autoFlush = null;
            if(this.newBuiltinClassResolver===undefined) this.newBuiltinClassResolver = null;
            if(this.showErrorTips===undefined) this.showErrorTips = null;
            if(this.apiBuiltinEnabled===undefined) this.apiBuiltinEnabled = null;
            if(this.logTemplateExceptions===undefined) this.logTemplateExceptions = null;
            if(this.wrapUncheckedExceptions===undefined) this.wrapUncheckedExceptions = null;
            if(this.customDateFormats===undefined) this.customDateFormats = null;
            if(this.customNumberFormats===undefined) this.customNumberFormats = null;
            if(this.autoImports===undefined) this.autoImports = null;
            if(this.autoIncludes===undefined) this.autoIncludes = null;
            if(this.lazyImports===undefined) this.lazyImports = null;
            if(this.lazyAutoImports===undefined) this.lazyAutoImports = null;
            if(this.lazyAutoImportsSet===undefined) this.lazyAutoImportsSet = false;
            if(this.parent===undefined) this.parent = null;
            if(this.properties===undefined) this.properties = null;
            if(this.customAttributes===undefined) this.customAttributes = null;
            if(this.locale===undefined) this.locale = null;
            if(this.numberFormat===undefined) this.numberFormat = null;
            if(this.timeFormat===undefined) this.timeFormat = null;
            if(this.dateFormat===undefined) this.dateFormat = null;
            if(this.dateTimeFormat===undefined) this.dateTimeFormat = null;
            if(this.timeZone===undefined) this.timeZone = null;
            if(this.sqlDataAndTimeTimeZone===undefined) this.sqlDataAndTimeTimeZone = null;
            if(this.sqlDataAndTimeTimeZoneSet===undefined) this.sqlDataAndTimeTimeZoneSet = false;
            if(this.booleanFormat===undefined) this.booleanFormat = null;
            if(this.trueStringValue===undefined) this.trueStringValue = null;
            if(this.falseStringValue===undefined) this.falseStringValue = null;
            if(this.classicCompatible===undefined) this.classicCompatible = null;
            if(this.templateExceptionHandler===undefined) this.templateExceptionHandler = null;
            if(this.attemptExceptionReporter===undefined) this.attemptExceptionReporter = null;
            if(this.arithmeticEngine===undefined) this.arithmeticEngine = null;
            if(this.objectWrapper===undefined) this.objectWrapper = null;
            if(this.outputEncoding===undefined) this.outputEncoding = null;
            if(this.outputEncodingSet===undefined) this.outputEncodingSet = false;
            if(this.urlEscapingCharset===undefined) this.urlEscapingCharset = null;
            if(this.urlEscapingCharsetSet===undefined) this.urlEscapingCharsetSet = false;
            if(this.autoFlush===undefined) this.autoFlush = null;
            if(this.newBuiltinClassResolver===undefined) this.newBuiltinClassResolver = null;
            if(this.showErrorTips===undefined) this.showErrorTips = null;
            if(this.apiBuiltinEnabled===undefined) this.apiBuiltinEnabled = null;
            if(this.logTemplateExceptions===undefined) this.logTemplateExceptions = null;
            if(this.wrapUncheckedExceptions===undefined) this.wrapUncheckedExceptions = null;
            if(this.customDateFormats===undefined) this.customDateFormats = null;
            if(this.customNumberFormats===undefined) this.customNumberFormats = null;
            if(this.autoImports===undefined) this.autoImports = null;
            if(this.autoIncludes===undefined) this.autoIncludes = null;
            if(this.lazyImports===undefined) this.lazyImports = null;
            if(this.lazyAutoImports===undefined) this.lazyAutoImports = null;
            if(this.lazyAutoImportsSet===undefined) this.lazyAutoImportsSet = false;
            (() => {
                _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
                this.parent = null;
                this.properties = new Map<any, any>();
                this.locale = _TemplateAPI.getDefaultLocale();
                /* setProperty */this.properties.set(Configurable.LOCALE_KEY_$LI$(), this.locale);
                this.timeZone = _TemplateAPI.getDefaultTimeZone();
                /* setProperty */this.properties.set(Configurable.TIME_ZONE_KEY_$LI$(), /* getID */this.timeZone);
                this.sqlDataAndTimeTimeZone = null;
                /* setProperty */this.properties.set(Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_$LI$(), /* valueOf */String(this.sqlDataAndTimeTimeZone));
                this.numberFormat = "number";
                /* setProperty */this.properties.set(Configurable.NUMBER_FORMAT_KEY_$LI$(), this.numberFormat);
                this.timeFormat = "";
                /* setProperty */this.properties.set(Configurable.TIME_FORMAT_KEY_$LI$(), this.timeFormat);
                this.dateFormat = "";
                /* setProperty */this.properties.set(Configurable.DATE_FORMAT_KEY_$LI$(), this.dateFormat);
                this.dateTimeFormat = "";
                /* setProperty */this.properties.set(Configurable.DATETIME_FORMAT_KEY_$LI$(), this.dateTimeFormat);
                this.classicCompatible = 0;
                /* setProperty */this.properties.set(Configurable.CLASSIC_COMPATIBLE_KEY_$LI$(), this.classicCompatible.toString());
                this.templateExceptionHandler = _TemplateAPI.getDefaultTemplateExceptionHandler(incompatibleImprovements);
                /* setProperty */this.properties.set(Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.templateExceptionHandler.constructor)));
                this.wrapUncheckedExceptions = _TemplateAPI.getDefaultWrapUncheckedExceptions(incompatibleImprovements);
                this.attemptExceptionReporter = _TemplateAPI.getDefaultAttemptExceptionReporter(incompatibleImprovements);
                this.arithmeticEngine = ArithmeticEngine.BIGDECIMAL_ENGINE_$LI$();
                /* setProperty */this.properties.set(Configurable.ARITHMETIC_ENGINE_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.arithmeticEngine.constructor)));
                this.objectWrapper = (require('../template/Configuration').Configuration).getDefaultObjectWrapper(incompatibleImprovements);
                this.autoFlush = true;
                /* setProperty */this.properties.set(Configurable.AUTO_FLUSH_KEY_$LI$(), Boolean.toString());
                this.newBuiltinClassResolver = TemplateClassResolver.UNRESTRICTED_RESOLVER;
                /* setProperty */this.properties.set(Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.newBuiltinClassResolver.constructor)));
                this.showErrorTips = true;
                /* setProperty */this.properties.set(Configurable.SHOW_ERROR_TIPS_KEY_$LI$(), Boolean.toString());
                this.apiBuiltinEnabled = false;
                /* setProperty */this.properties.set(Configurable.API_BUILTIN_ENABLED_KEY_$LI$(), Boolean.toString());
                this.logTemplateExceptions = _TemplateAPI.getDefaultLogTemplateExceptions(incompatibleImprovements);
                /* setProperty */this.properties.set(Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_$LI$(), Boolean.toString());
                this.setBooleanFormat(Configurable.C_TRUE_FALSE);
                this.customAttributes = <any>(new Map<any, any>());
                this.customDateFormats = /* emptyMap */new Map<any, any>();
                this.customNumberFormats = /* emptyMap */new Map<any, any>();
                this.lazyImports = false;
                this.lazyAutoImportsSet = true;
                this.initAutoImportsMap();
                this.initAutoIncludesList();
            })();
        } else if(((incompatibleImprovements != null && incompatibleImprovements instanceof <any>Configurable) || incompatibleImprovements === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let parent : any = __args[0];
            if(this.parent===undefined) this.parent = null;
            if(this.properties===undefined) this.properties = null;
            if(this.customAttributes===undefined) this.customAttributes = null;
            if(this.locale===undefined) this.locale = null;
            if(this.numberFormat===undefined) this.numberFormat = null;
            if(this.timeFormat===undefined) this.timeFormat = null;
            if(this.dateFormat===undefined) this.dateFormat = null;
            if(this.dateTimeFormat===undefined) this.dateTimeFormat = null;
            if(this.timeZone===undefined) this.timeZone = null;
            if(this.sqlDataAndTimeTimeZone===undefined) this.sqlDataAndTimeTimeZone = null;
            if(this.sqlDataAndTimeTimeZoneSet===undefined) this.sqlDataAndTimeTimeZoneSet = false;
            if(this.booleanFormat===undefined) this.booleanFormat = null;
            if(this.trueStringValue===undefined) this.trueStringValue = null;
            if(this.falseStringValue===undefined) this.falseStringValue = null;
            if(this.classicCompatible===undefined) this.classicCompatible = null;
            if(this.templateExceptionHandler===undefined) this.templateExceptionHandler = null;
            if(this.attemptExceptionReporter===undefined) this.attemptExceptionReporter = null;
            if(this.arithmeticEngine===undefined) this.arithmeticEngine = null;
            if(this.objectWrapper===undefined) this.objectWrapper = null;
            if(this.outputEncoding===undefined) this.outputEncoding = null;
            if(this.outputEncodingSet===undefined) this.outputEncodingSet = false;
            if(this.urlEscapingCharset===undefined) this.urlEscapingCharset = null;
            if(this.urlEscapingCharsetSet===undefined) this.urlEscapingCharsetSet = false;
            if(this.autoFlush===undefined) this.autoFlush = null;
            if(this.newBuiltinClassResolver===undefined) this.newBuiltinClassResolver = null;
            if(this.showErrorTips===undefined) this.showErrorTips = null;
            if(this.apiBuiltinEnabled===undefined) this.apiBuiltinEnabled = null;
            if(this.logTemplateExceptions===undefined) this.logTemplateExceptions = null;
            if(this.wrapUncheckedExceptions===undefined) this.wrapUncheckedExceptions = null;
            if(this.customDateFormats===undefined) this.customDateFormats = null;
            if(this.customNumberFormats===undefined) this.customNumberFormats = null;
            if(this.autoImports===undefined) this.autoImports = null;
            if(this.autoIncludes===undefined) this.autoIncludes = null;
            if(this.lazyImports===undefined) this.lazyImports = null;
            if(this.lazyAutoImports===undefined) this.lazyAutoImports = null;
            if(this.lazyAutoImportsSet===undefined) this.lazyAutoImportsSet = false;
            if(this.parent===undefined) this.parent = null;
            if(this.properties===undefined) this.properties = null;
            if(this.customAttributes===undefined) this.customAttributes = null;
            if(this.locale===undefined) this.locale = null;
            if(this.numberFormat===undefined) this.numberFormat = null;
            if(this.timeFormat===undefined) this.timeFormat = null;
            if(this.dateFormat===undefined) this.dateFormat = null;
            if(this.dateTimeFormat===undefined) this.dateTimeFormat = null;
            if(this.timeZone===undefined) this.timeZone = null;
            if(this.sqlDataAndTimeTimeZone===undefined) this.sqlDataAndTimeTimeZone = null;
            if(this.sqlDataAndTimeTimeZoneSet===undefined) this.sqlDataAndTimeTimeZoneSet = false;
            if(this.booleanFormat===undefined) this.booleanFormat = null;
            if(this.trueStringValue===undefined) this.trueStringValue = null;
            if(this.falseStringValue===undefined) this.falseStringValue = null;
            if(this.classicCompatible===undefined) this.classicCompatible = null;
            if(this.templateExceptionHandler===undefined) this.templateExceptionHandler = null;
            if(this.attemptExceptionReporter===undefined) this.attemptExceptionReporter = null;
            if(this.arithmeticEngine===undefined) this.arithmeticEngine = null;
            if(this.objectWrapper===undefined) this.objectWrapper = null;
            if(this.outputEncoding===undefined) this.outputEncoding = null;
            if(this.outputEncodingSet===undefined) this.outputEncodingSet = false;
            if(this.urlEscapingCharset===undefined) this.urlEscapingCharset = null;
            if(this.urlEscapingCharsetSet===undefined) this.urlEscapingCharsetSet = false;
            if(this.autoFlush===undefined) this.autoFlush = null;
            if(this.newBuiltinClassResolver===undefined) this.newBuiltinClassResolver = null;
            if(this.showErrorTips===undefined) this.showErrorTips = null;
            if(this.apiBuiltinEnabled===undefined) this.apiBuiltinEnabled = null;
            if(this.logTemplateExceptions===undefined) this.logTemplateExceptions = null;
            if(this.wrapUncheckedExceptions===undefined) this.wrapUncheckedExceptions = null;
            if(this.customDateFormats===undefined) this.customDateFormats = null;
            if(this.customNumberFormats===undefined) this.customNumberFormats = null;
            if(this.autoImports===undefined) this.autoImports = null;
            if(this.autoIncludes===undefined) this.autoIncludes = null;
            if(this.lazyImports===undefined) this.lazyImports = null;
            if(this.lazyAutoImports===undefined) this.lazyAutoImports = null;
            if(this.lazyAutoImportsSet===undefined) this.lazyAutoImportsSet = false;
            (() => {
                this.parent = parent;
                this.properties = new Map<any, any>(parent.properties);
                this.customAttributes = <any>(new Map<any, any>());
            })();
        } else if(incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let incompatibleImprovements : any = (require('../template/Configuration').Configuration).DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$();
                if(this.parent===undefined) this.parent = null;
                if(this.properties===undefined) this.properties = null;
                if(this.customAttributes===undefined) this.customAttributes = null;
                if(this.locale===undefined) this.locale = null;
                if(this.numberFormat===undefined) this.numberFormat = null;
                if(this.timeFormat===undefined) this.timeFormat = null;
                if(this.dateFormat===undefined) this.dateFormat = null;
                if(this.dateTimeFormat===undefined) this.dateTimeFormat = null;
                if(this.timeZone===undefined) this.timeZone = null;
                if(this.sqlDataAndTimeTimeZone===undefined) this.sqlDataAndTimeTimeZone = null;
                if(this.sqlDataAndTimeTimeZoneSet===undefined) this.sqlDataAndTimeTimeZoneSet = false;
                if(this.booleanFormat===undefined) this.booleanFormat = null;
                if(this.trueStringValue===undefined) this.trueStringValue = null;
                if(this.falseStringValue===undefined) this.falseStringValue = null;
                if(this.classicCompatible===undefined) this.classicCompatible = null;
                if(this.templateExceptionHandler===undefined) this.templateExceptionHandler = null;
                if(this.attemptExceptionReporter===undefined) this.attemptExceptionReporter = null;
                if(this.arithmeticEngine===undefined) this.arithmeticEngine = null;
                if(this.objectWrapper===undefined) this.objectWrapper = null;
                if(this.outputEncoding===undefined) this.outputEncoding = null;
                if(this.outputEncodingSet===undefined) this.outputEncodingSet = false;
                if(this.urlEscapingCharset===undefined) this.urlEscapingCharset = null;
                if(this.urlEscapingCharsetSet===undefined) this.urlEscapingCharsetSet = false;
                if(this.autoFlush===undefined) this.autoFlush = null;
                if(this.newBuiltinClassResolver===undefined) this.newBuiltinClassResolver = null;
                if(this.showErrorTips===undefined) this.showErrorTips = null;
                if(this.apiBuiltinEnabled===undefined) this.apiBuiltinEnabled = null;
                if(this.logTemplateExceptions===undefined) this.logTemplateExceptions = null;
                if(this.wrapUncheckedExceptions===undefined) this.wrapUncheckedExceptions = null;
                if(this.customDateFormats===undefined) this.customDateFormats = null;
                if(this.customNumberFormats===undefined) this.customNumberFormats = null;
                if(this.autoImports===undefined) this.autoImports = null;
                if(this.autoIncludes===undefined) this.autoIncludes = null;
                if(this.lazyImports===undefined) this.lazyImports = null;
                if(this.lazyAutoImports===undefined) this.lazyAutoImports = null;
                if(this.lazyAutoImportsSet===undefined) this.lazyAutoImportsSet = false;
                if(this.parent===undefined) this.parent = null;
                if(this.properties===undefined) this.properties = null;
                if(this.customAttributes===undefined) this.customAttributes = null;
                if(this.locale===undefined) this.locale = null;
                if(this.numberFormat===undefined) this.numberFormat = null;
                if(this.timeFormat===undefined) this.timeFormat = null;
                if(this.dateFormat===undefined) this.dateFormat = null;
                if(this.dateTimeFormat===undefined) this.dateTimeFormat = null;
                if(this.timeZone===undefined) this.timeZone = null;
                if(this.sqlDataAndTimeTimeZone===undefined) this.sqlDataAndTimeTimeZone = null;
                if(this.sqlDataAndTimeTimeZoneSet===undefined) this.sqlDataAndTimeTimeZoneSet = false;
                if(this.booleanFormat===undefined) this.booleanFormat = null;
                if(this.trueStringValue===undefined) this.trueStringValue = null;
                if(this.falseStringValue===undefined) this.falseStringValue = null;
                if(this.classicCompatible===undefined) this.classicCompatible = null;
                if(this.templateExceptionHandler===undefined) this.templateExceptionHandler = null;
                if(this.attemptExceptionReporter===undefined) this.attemptExceptionReporter = null;
                if(this.arithmeticEngine===undefined) this.arithmeticEngine = null;
                if(this.objectWrapper===undefined) this.objectWrapper = null;
                if(this.outputEncoding===undefined) this.outputEncoding = null;
                if(this.outputEncodingSet===undefined) this.outputEncodingSet = false;
                if(this.urlEscapingCharset===undefined) this.urlEscapingCharset = null;
                if(this.urlEscapingCharsetSet===undefined) this.urlEscapingCharsetSet = false;
                if(this.autoFlush===undefined) this.autoFlush = null;
                if(this.newBuiltinClassResolver===undefined) this.newBuiltinClassResolver = null;
                if(this.showErrorTips===undefined) this.showErrorTips = null;
                if(this.apiBuiltinEnabled===undefined) this.apiBuiltinEnabled = null;
                if(this.logTemplateExceptions===undefined) this.logTemplateExceptions = null;
                if(this.wrapUncheckedExceptions===undefined) this.wrapUncheckedExceptions = null;
                if(this.customDateFormats===undefined) this.customDateFormats = null;
                if(this.customNumberFormats===undefined) this.customNumberFormats = null;
                if(this.autoImports===undefined) this.autoImports = null;
                if(this.autoIncludes===undefined) this.autoIncludes = null;
                if(this.lazyImports===undefined) this.lazyImports = null;
                if(this.lazyAutoImports===undefined) this.lazyAutoImports = null;
                if(this.lazyAutoImportsSet===undefined) this.lazyAutoImportsSet = false;
                (() => {
                    _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
                    this.parent = null;
                    this.properties = new Map<any, any>();
                    this.locale = _TemplateAPI.getDefaultLocale();
                    /* setProperty */this.properties.set(Configurable.LOCALE_KEY_$LI$(), this.locale);
                    this.timeZone = _TemplateAPI.getDefaultTimeZone();
                    /* setProperty */this.properties.set(Configurable.TIME_ZONE_KEY_$LI$(), /* getID */this.timeZone);
                    this.sqlDataAndTimeTimeZone = null;
                    /* setProperty */this.properties.set(Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_$LI$(), /* valueOf */String(this.sqlDataAndTimeTimeZone).toString());
                    this.numberFormat = "number";
                    /* setProperty */this.properties.set(Configurable.NUMBER_FORMAT_KEY_$LI$(), this.numberFormat);
                    this.timeFormat = "";
                    /* setProperty */this.properties.set(Configurable.TIME_FORMAT_KEY_$LI$(), this.timeFormat);
                    this.dateFormat = "";
                    /* setProperty */this.properties.set(Configurable.DATE_FORMAT_KEY_$LI$(), this.dateFormat);
                    this.dateTimeFormat = "";
                    /* setProperty */this.properties.set(Configurable.DATETIME_FORMAT_KEY_$LI$(), this.dateTimeFormat);
                    this.classicCompatible = 0;
                    /* setProperty */this.properties.set(Configurable.CLASSIC_COMPATIBLE_KEY_$LI$(), this.classicCompatible.toString());
                    this.templateExceptionHandler = _TemplateAPI.getDefaultTemplateExceptionHandler(incompatibleImprovements);
                    /* setProperty */this.properties.set(Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.templateExceptionHandler.constructor)));
                    this.wrapUncheckedExceptions = _TemplateAPI.getDefaultWrapUncheckedExceptions(incompatibleImprovements);
                    this.attemptExceptionReporter = _TemplateAPI.getDefaultAttemptExceptionReporter(incompatibleImprovements);
                    this.arithmeticEngine = ArithmeticEngine.BIGDECIMAL_ENGINE_$LI$();
                    /* setProperty */this.properties.set(Configurable.ARITHMETIC_ENGINE_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.arithmeticEngine.constructor)));
                    this.objectWrapper = (require('../template/Configuration').Configuration).getDefaultObjectWrapper(incompatibleImprovements);
                    this.autoFlush = true;
                    /* setProperty */this.properties.set(Configurable.AUTO_FLUSH_KEY_$LI$(), Boolean.toString());
                    this.newBuiltinClassResolver = TemplateClassResolver.UNRESTRICTED_RESOLVER;
                    /* setProperty */this.properties.set(Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.newBuiltinClassResolver.constructor)));
                    this.showErrorTips = true;
                    /* setProperty */this.properties.set(Configurable.SHOW_ERROR_TIPS_KEY_$LI$(), Boolean.toString());
                    this.apiBuiltinEnabled = false;
                    /* setProperty */this.properties.set(Configurable.API_BUILTIN_ENABLED_KEY_$LI$(), Boolean.toString());
                    this.logTemplateExceptions = _TemplateAPI.getDefaultLogTemplateExceptions(incompatibleImprovements);
                    /* setProperty */this.properties.set(Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_$LI$(), Boolean.toString());
                    this.setBooleanFormat(Configurable.C_TRUE_FALSE);
                    this.customAttributes = <any>(new Map<any, any>());
                    this.customDateFormats = /* emptyMap */new Map<any, any>();
                    this.customNumberFormats = /* emptyMap */new Map<any, any>();
                    this.lazyImports = false;
                    this.lazyAutoImportsSet = true;
                    this.initAutoImportsMap();
                    this.initAutoIncludesList();
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @return {Object}
     */
    clone() : any {
        let copy : Configurable = <Configurable>/* clone *//* clone */((o:any) => { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; })(this);
        if(this.properties != null) {
            copy.properties = new Map<any, any>(this.properties);
        }
        if(this.customAttributes != null) {
            copy.customAttributes = new Map(this.customAttributes);
        }
        if(this.autoImports != null) {
            copy.autoImports = new Map(this.autoImports);
        }
        if(this.autoIncludes != null) {
            copy.autoIncludes = this.autoIncludes.clone();
        }
        return copy;
    }

    /**
     * Returns the parent {link Configurable} object of this object. The parent stores the default setting values for
     * this {link Configurable}. For example, the parent of a {link freemarker.template.Template} object is a
     * {link Configuration} object, so values not specified on {link Template}-level are get from the
     * {link Configuration} object.
     * <p>
     * <p>
     * Note on the parent of {link Environment}: If you set {link Configuration#setIncompatibleImprovements(Version)
     * incompatible_improvements} to at least 2.3.22, it will be always the "main" {link Template}, that is, the
     * template for whose processing the {link Environment} was created. With lower {@code incompatible_improvements},
     * the current parent can temporary change <em>during template execution</em>, for example when your are inside an
     * {@code #include}-d template (among others). Thus, don't build on which {link Template} the parent of
     * {link Environment} is during template execution, unless you set {@code incompatible_improvements} to 2.3.22 or
     * higher.
     * 
     * @return {Configurable} The parent {link Configurable} object, or {@code null} if this is the root {link Configurable} object
     * (i.e, if it's the {link Configuration} object).
     */
    public getParent() : Configurable {
        return this.parent;
    }

    /**
     * Reparenting support. This is used by Environment when it includes a
     * template - the included template becomes the parent configurable during
     * its evaluation.
     * @param {Configurable} parent
     */
    setParent(parent : Configurable) {
        this.parent = parent;
    }

    /**
     * Toggles the "Classic Compatible" mode. For a comprehensive description
     * of this mode, see {link #isClassicCompatible()}.
     * @param {boolean} classicCompatibility
     */
    public setClassicCompatible(classicCompatibility : boolean) {
        this.classicCompatible = classicCompatibility?1:0;
        /* setProperty */this.properties.set(Configurable.CLASSIC_COMPATIBLE_KEY_$LI$(), this.classicCompatibilityIntToString(this.classicCompatible));
    }

    /**
     * Same as {link #setClassicCompatible(boolean)}, but allows some extra values.
     * 
     * @param {number} classicCompatibility {@code 0} means {@code false}, {@code 1} means {@code true},
     * {@code 2} means {@code true} but with emulating bugs in early 2.x classic-compatibility mode. Currently
     * {@code 2} affects how booleans are converted to string; with {@code 1} it's always {@code "true"}/{@code ""},
     * but with {@code 2} it's {@code "true"}/{@code "false"} for values wrapped by {link BeansWrapper} as then
     * {link Boolean#toString()} prevails. Note that {@code someBoolean?string} will always consistently format the
     * boolean according the {@code boolean_format} setting, just like in FreeMarker 2.3 and later.
     */
    public setClassicCompatibleAsInt(classicCompatibility : number) {
        if(classicCompatibility < 0 || classicCompatibility > 2) {
            throw Object.defineProperty(new Error("Unsupported \"classicCompatibility\": " + classicCompatibility), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.classicCompatible = classicCompatibility;
    }

    classicCompatibilityIntToString(i : number) : string {
        const MiscUtil = require('./MiscUtil').MiscUtil;
        if(i == null) return null; else if(i === 0) return MiscUtil.C_FALSE; else if(i === 1) return MiscUtil.C_TRUE; else return i.toString();
    }

    /**
     * Returns whether the engine runs in the "Classic Compatibile" mode.
     * When this mode is active, the engine behavior is altered in following
     * way: (these resemble the behavior of the 1.7.x line of FreeMarker engine,
     * now named "FreeMarker Classic", hence the name).
     * <ul>
     * <li>handle undefined expressions gracefully. Namely when an expression
     * "expr" evaluates to null:
     * <ul>
     * <li>
     * in <tt>&lt;assign varname=expr&gt;</tt> directive,
     * or in <tt>${expr}</tt> directive,
     * or in <tt>otherexpr == expr</tt>,
     * or in <tt>otherexpr != expr</tt>,
     * or in <tt>hash[expr]</tt>,
     * or in <tt>expr[keyOrIndex]</tt> (since 2.3.20),
     * or in <tt>expr.key</tt> (since 2.3.20),
     * then it's treated as empty string.
     * </li>
     * <li>as argument of <tt>&lt;list expr as item&gt;</tt> or
     * <tt>&lt;foreach item in expr&gt;</tt>, the loop body is not executed
     * (as if it were a 0-length list)
     * </li>
     * <li>as argument of <tt>&lt;if&gt;</tt> directive, or on other places where a
     * boolean expression is expected, it's treated as false
     * </li>
     * </ul>
     * </li>
     * <li>Non-boolean models are accepted in <tt>&lt;if&gt;</tt> directive,
     * or as operands of logical operators. "Empty" models (zero-length string,
     * empty sequence or hash) are evaluated as false, all others are evaluated as
     * true.</li>
     * <li>When boolean value is treated as a string (i.e. output in
     * <tt>${...}</tt> directive, or concatenated with other string), true
     * values are converted to string "true", false values are converted to
     * empty string. Except, if the value of the setting is <tt>2</tt>, it will be
     * formatted according the <tt>boolean_format</tt> setting, just like in
     * 2.3.20 and later.
     * </li>
     * <li>Scalar models supplied to <tt>&lt;list&gt;</tt> and
     * <tt>&lt;foreach&gt;</tt> are treated as a one-element list consisting
     * of the passed model.
     * </li>
     * <li>Paths parameter of <tt>&lt;include&gt;</tt> will be interpreted as
     * absolute path.
     * </li>
     * </ul>
     * In all other aspects, the engine is a 2.1 engine even in compatibility
     * mode - you don't lose any of the new functionality by enabling it.
     * @return {boolean}
     */
    public isClassicCompatible() : boolean {
        return this.classicCompatible != null?this.classicCompatible !== 0:this.parent.isClassicCompatible();
    }

    public getClassicCompatibleAsInt() : number {
        return this.classicCompatible != null?this.classicCompatible:this.parent.getClassicCompatibleAsInt();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isClassicCompatibleSet() : boolean {
        return this.classicCompatible != null;
    }

    /**
     * Sets the locale used for number and date formatting (among others), also the locale used for searching
     * localized template variations when no locale was explicitly requested. On the {link Configuration} level it
     * defaults to the default locale of system (of the JVM), for server-side application usually you should set it
     * explicitly in the {link Configuration} to use the preferred locale of your application instead.
     * <p>
     * see Configuration#getTemplate(String, Locale)
     * @param {Locale} locale
     */
    public setLocale(locale : Locale) {
        (require('../template/utility/NullArgumentException').NullArgumentException).check$java_lang_String$java_lang_Object("locale", locale);
        this.locale = locale;
        /* setProperty */this.properties.set(Configurable.LOCALE_KEY_$LI$(), locale.toString());
    }

    /**
     * Getter pair of {link #setLocale(Locale)}. Not {@code null}.
     * @return {Locale}
     */
    public getLocale() : Locale {
        if(this.locale != null) {
            return this.locale;
        }
        if(this.parent) {
            return this.parent.getLocale();
        }
        return null;
        // return this.locale != null?this.locale:this.parent.getLocale();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isLocaleSet() : boolean {
        return this.locale != null;
    }

    /**
     * Sets the time zone to use when formatting date/time values.
     * Defaults to the system time zone ({link TimeZone#getDefault()}), regardless of the "locale" FreeMarker setting,
     * so in a server application you probably want to set it explicitly in the {link Environment} to match the
     * preferred time zone of target audience (like the Web page visitor).
     * 
     * <p>If you or the templates set the time zone, you should probably also set
     * {link #setSQLDateAndTimeTimeZone(TimeZone)}!
     * <p>
     * see #setSQLDateAndTimeTimeZone(TimeZone)
     * @param {TimeZone} timeZone
     */
    public setTimeZone(timeZone : string) {
        this.timeZone = timeZone;
        /* setProperty */this.properties.set(Configurable.TIME_ZONE_KEY_$LI$(), /* getID */timeZone);
    }

    /**
     * The getter pair of {link #setTimeZone(TimeZone)}.
     * @return {TimeZone}
     */
    public getTimeZone() : string {
        return this.timeZone != null?this.timeZone:this.parent.getTimeZone();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isTimeZoneSet() : boolean {
        return this.timeZone != null;
    }

    /**
     * Sets the time zone used when dealing with {link java.sql.Date java.sql.Date} and
     * {link java.sql.Time java.sql.Time} values. It defaults to {@code null} for backward compatibility, but in most
     * applications this should be set to the JVM default time zone (server default time zone), because that's what
     * most JDBC drivers will use when constructing the {link java.sql.Date java.sql.Date} and
     * {link java.sql.Time java.sql.Time} values. If this setting is {@code null}, FreeMarker will use the value of
     * ({link #getTimeZone()}) for {link java.sql.Date java.sql.Date} and {link java.sql.Time java.sql.Time} values,
     * which often gives bad results.
     * 
     * <p>This setting doesn't influence the formatting of other kind of values (like of
     * {link java.sql.Timestamp java.sql.Timestamp} or plain {link java.util.Date java.util.Date} values).
     * 
     * <p>To decide what value you need, a few things has to be understood:
     * <ul>
     * <li>Date-only and time-only values in SQL-oriented databases usually store calendar and clock field
     * values directly (year, month, day, or hour, minute, seconds (with decimals)), as opposed to a set of points
     * on the physical time line. Thus, unlike SQL timestamps, these values usually aren't meant to be shown
     * differently depending on the time zone of the audience.
     * 
     * <li>When a JDBC query has to return a date-only or time-only value, it has to convert it to a point on the
     * physical time line, because that's what {link java.util.Date} and its subclasses store (milliseconds since
     * the epoch). Obviously, this is impossible to do. So JDBC just chooses a physical time which, when rendered
     * <em>with the JVM default time zone</em>, will give the same field values as those stored
     * in the database. (Actually, you can give JDBC a calendar, and so it can use other time zones too, but most
     * application won't care using those overloads.) For example, assume that the system time zone is GMT+02:00.
     * Then, 2014-07-12 in the database will be translated to physical time 2014-07-11 22:00:00 UTC, because that
     * rendered in GMT+02:00 gives 2014-07-12 00:00:00. Similarly, 11:57:00 in the database will be translated to
     * physical time 1970-01-01 09:57:00 UTC. Thus, the physical time stored in the returned value depends on the
     * default system time zone of the JDBC client, not just on the content of the database. (This used to be the
     * default behavior of ORM-s, like Hibernate, too.)
     * 
     * <li>The value of the {@code time_zone} FreeMarker configuration setting sets the time zone used for the
     * template output. For example, when a web page visitor has a preferred time zone, the web application framework
     * may calls {link Environment#setTimeZone(TimeZone)} with that time zone. Thus, the visitor will
     * see {link java.sql.Timestamp java.sql.Timestamp} and plain {link java.util.Date java.util.Date} values as
     * they look in his own time zone. While
     * this is desirable for those types, as they meant to represent physical points on the time line, this is not
     * necessarily desirable for date-only and time-only values. When {@code sql_date_and_time_time_zone} is
     * {@code null}, {@code time_zone} is used for rendering all kind of date/time/dateTime values, including
     * {link java.sql.Date java.sql.Date} and {link java.sql.Time java.sql.Time}, and then if, for example,
     * {@code time_zone} is GMT+00:00, the
     * values from the earlier examples will be shown as 2014-07-11 (one day off) and 09:57:00 (2 hours off). While
     * those are the time zone correct renderings, those values are probably meant to be shown "as is".
     * 
     * <li>You may wonder why this setting isn't simply "SQL time zone", that is, why's this time zone not applied to
     * {link java.sql.Timestamp java.sql.Timestamp} values as well. Timestamps in databases refer to a point on
     * the physical time line, and thus doesn't have the inherent problem of date-only and time-only values.
     * FreeMarker assumes that the JDBC driver converts time stamps coming from the database so that they store
     * the distance from the epoch (1970-01-01 00:00:00 UTC), as requested by the {link java.util.Date} API.
     * Then time stamps can be safely rendered in different time zones, and thus need no special treatment.
     * </ul>
     * 
     * @param {TimeZone} tz Maybe {@code null}, in which case {link java.sql.Date java.sql.Date} and
     * {link java.sql.Time java.sql.Time} values will be formatted in the time zone returned by
     * {link #getTimeZone()}.
     * (Note that since {@code null} is an allowed value for this setting, it will not cause
     * {link #getSQLDateAndTimeTimeZone()} to fall back to the parent configuration.)
     * <p>
     * see #setTimeZone(TimeZone)
     * @since 2.3.21
     */
    public setSQLDateAndTimeTimeZone(tz : string) {
        this.sqlDataAndTimeTimeZone = tz;
        this.sqlDataAndTimeTimeZoneSet = true;
        /* setProperty */this.properties.set(Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_$LI$(), tz != null?/* getID */tz:"null");
    }

    /**
     * The getter pair of {link #setSQLDateAndTimeTimeZone(TimeZone)}.
     * 
     * @return {TimeZone} {@code null} if the value of {link #getTimeZone()} should be used for formatting
     * {link java.sql.Date java.sql.Date} and {link java.sql.Time java.sql.Time} values, otherwise the time zone
     * that should be used to format the values of those two types.
     * @since 2.3.21
     */
    public getSQLDateAndTimeTimeZone() : string {
        return this.sqlDataAndTimeTimeZoneSet?this.sqlDataAndTimeTimeZone:(this.parent != null?this.parent.getSQLDateAndTimeTimeZone():null);
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isSQLDateAndTimeTimeZoneSet() : boolean {
        return this.sqlDataAndTimeTimeZoneSet;
    }

    /**
     * Sets the default number format used to convert numbers to strings. Currently, this is one of these:
     * <ul>
     * <li>{@code "number"}: The number format returned by {link NumberFormat#getNumberInstance(Locale)}</li>
     * <li>{@code "currency"}: The number format returned by {link NumberFormat#getCurrencyInstance(Locale)}</li>
     * <li>{@code "percent"}: The number format returned by {link NumberFormat#getPercentInstance(Locale)}</li>
     * <li>{@code "computer"}: The number format used by FTL's {@code c} built-in (like in {@code someNumber?c}).</li>
     * <li>{link java.text.DecimalFormat} pattern (like {@code "0.##"}). This syntax is extended by FreeMarker
     * so that you can specify options like the rounding mode and the symbols used after a 2nd semicolon. For
     * example, {@code ",000;; roundingMode=halfUp groupingSeparator=_"} will format numbers like {@code ",000"}
     * would, but with half-up rounding mode, and {@code _} as the group separator. See more about "extended Java
     * decimal format" in the FreeMarker Manual.
     * </li>
     * <li>If the string starts with {@code @} character followed by a letter then it's interpreted as a custom number
     * format, but only if either {link Configuration#getIncompatibleImprovements()} is at least 2.3.24, or
     * there's any custom formats defined (even if custom date/time/dateTime format). The format of a such string
     * is <code>"@<i>name</i>"</code> or <code>"@<i>name</i> <i>parameters</i>"</code>, where
     * <code><i>name</i></code> is the key in the {link Map} set by {link #setCustomNumberFormats(Map)}, and
     * <code><i>parameters</i></code> is parsed by the custom {link TemplateNumberFormat}.
     * </li>
     * </ul>
     * 
     * 
     * <p>Defaults to <tt>"number"</tt>.
     * @param {String} numberFormat
     */
    public setNumberFormat(numberFormat : string) {
        this.numberFormat = numberFormat;
        /* setProperty */this.properties.set(Configurable.NUMBER_FORMAT_KEY_$LI$(), numberFormat);
    }

    /**
     * Getter pair of {link #setNumberFormat(String)}.
     * @return {String}
     */
    public getNumberFormat() : string {
        return this.numberFormat != null?this.numberFormat:this.parent.getNumberFormat();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isNumberFormatSet() : boolean {
        return this.numberFormat != null;
    }

    /**
     * Getter pair of {link #setCustomNumberFormats(Map)}; do not modify the returned {link Map}! To be consistent
     * with other setting getters, if this setting was set directly on this {link Configurable} object, this simply
     * returns that value, otherwise it returns the value from the parent {link Configurable}. So beware, the returned
     * value doesn't reflect the {link Map} key granularity fallback logic that FreeMarker actually uses for this
     * setting (for that, use {link #getCustomNumberFormat(String)}). The returned value isn't a snapshot; it may or
     * may not shows the changes later made to this setting on this {link Configurable} level (but usually it's well
     * defined if until what point settings are possibly modified).
     * <p>
     * <p>
     * The return value is never {@code null}; called on the {link Configuration} (top) level, it defaults to an empty
     * {link Map}.
     * <p>
     * see #getCustomNumberFormatsWithoutFallback()
     * 
     * @since 2.3.24
     * @return {Map}
     */
    public getCustomNumberFormats() : Map<any, any> {
        return this.customNumberFormats == null?this.parent.getCustomNumberFormats():this.customNumberFormats;
    }

    /**
     * Like {link #getCustomNumberFormats()}, but doesn't fall back to the parent {link Configurable}.
     * 
     * @since 2.3.25
     * @return {Map}
     */
    public getCustomNumberFormatsWithoutFallback() : Map<any, any> {
        return this.customNumberFormats;
    }

    /**
     * Associates names with formatter factories, which then can be referred by the {link #setNumberFormat(String)
     * number_format} setting with values starting with <code>@<i>name</i></code>. Beware, if you specify any custom
     * formats here, an initial {@code @} followed by a letter will have special meaning in number/date/time/datetime
     * format strings, even if {link Configuration#getIncompatibleImprovements() incompatible_improvements} is less
     * than 2.3.24 (starting with {link Configuration#getIncompatibleImprovements() incompatible_improvements} 2.3.24
     * {@code @} always has special meaning).
     * 
     * @param {Map} customNumberFormats Can't be {@code null}. The name must start with an UNICODE letter, and can only contain UNICODE
     * letters and digits (not {@code _}).
     * @since 2.3.24
     */
    public setCustomNumberFormats(customNumberFormats : Map<any, any>) {
        this.validateFormatNames(customNumberFormats.keySet());
        this.customNumberFormats = customNumberFormats;
    }

    validateFormatNames(keySet : Set<any>) {
        for(let index129=0; index129 < keySet.size(); index129++) {
            let name = keySet[index129];
            {
                if(name.length === 0) {
                    throw Object.defineProperty(new Error("Format names can\'t be 0 length"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                let firstChar : string = name.charAt(0);
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '@'.charCodeAt(0)) {
                    throw Object.defineProperty(new Error("Format names can\'t start with \'@\'. \'@\' is only used when referring to them from format strings. In: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                if(!Character.isLetter(firstChar)) {
                    throw Object.defineProperty(new Error("Format name must start with letter: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                for(let i : number = 1; i < name.length; i++) {
                    if(!Character.isLetterOrDigit(name.charAt(i))) {
                        throw Object.defineProperty(new Error("Format name can only contain letters and digits: " + name), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                }
            }
        }
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isCustomNumberFormatsSet() : boolean {
        return this.customNumberFormats != null;
    }

    /**
     * Gets the custom name format registered for the name.
     * 
     * @since 2.3.24
     * @param {String} name
     * @return {TemplateNumberFormatFactory}
     */
    public getCustomNumberFormat(name : string) : /*TemplateNumberFormatFactory*/any {
        let r : /*TemplateNumberFormatFactory*/any;
        if(this.customNumberFormats != null) {
            r = /* get */this.customNumberFormats.get(name);
            if(r != null) {
                return r;
            }
        }
        return this.parent != null?this.parent.getCustomNumberFormat(name):null;
    }

    /**
     * Tells if this configurable object or its parent defines any custom formats.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public hasCustomFormats() : boolean {
        return this.customNumberFormats != null && !/* isEmpty */(Object.keys(this.customNumberFormats).length == 0) || this.customDateFormats != null && !/* isEmpty */(Object.keys(this.customDateFormats).length == 0) || this.getParent() != null && this.getParent().hasCustomFormats();
    }

    /**
     * The string value for the boolean {@code true} and {@code false} values, intended for human audience (not for a
     * computer language), separated with comma. For example, {@code "yes,no"}. Note that white-space is significant,
     * so {@code "yes, no"} is WRONG (unless you want that leading space before "no").
     * 
     * <p>For backward compatibility the default is {@code "true,false"}, but using that value is denied for automatic
     * boolean-to-string conversion (like <code>${myBoolean}</code> will fail with it), only {@code myBool?string} will
     * allow it, which is deprecated since FreeMarker 2.3.20.
     * 
     * <p>Note that automatic boolean-to-string conversion only exists since FreeMarker 2.3.20. Earlier this setting
     * only influenced the result of {@code myBool?string}.
     * @param {String} booleanFormat
     */
    public setBooleanFormat(booleanFormat : string) {
        let commaIdx : number = booleanFormat.indexOf(',');
        if(commaIdx === -1) {
            throw Object.defineProperty(new Error("Setting value must be a string that contains two comma-separated values for true and false, respectively."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.booleanFormat = booleanFormat;
        /* setProperty */this.properties.set(Configurable.BOOLEAN_FORMAT_KEY_$LI$(), booleanFormat);
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(booleanFormat,Configurable.C_TRUE_FALSE))) {
            this.trueStringValue = null;
            this.falseStringValue = null;
        } else {
            this.trueStringValue = booleanFormat.substring(0, commaIdx);
            this.falseStringValue = booleanFormat.substring(commaIdx + 1);
        }
    }

    /**
     * The getter pair of {link #setBooleanFormat(String)}.
     * @return {String}
     */
    public getBooleanFormat() : string {
        return this.booleanFormat != null?this.booleanFormat:this.parent.getBooleanFormat();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isBooleanFormatSet() : boolean {
        return this.booleanFormat != null;
    }

    formatBoolean(value : boolean, fallbackToTrueFalse : boolean) : string {
        const MiscUtil = require('./MiscUtil').MiscUtil;
        const _MiscTemplateException = require('./_MiscTemplateException')._MiscTemplateException;
        if(value) {
            let s : string = this.getTrueStringValue();
            if(s == null) {
                if(fallbackToTrueFalse) {
                    return MiscUtil.C_TRUE;
                } else {
                    throw new _MiscTemplateException(this.getNullBooleanFormatErrorDescription());
                }
            } else {
                return s;
            }
        } else {
            let s : string = this.getFalseStringValue();
            if(s == null) {
                if(fallbackToTrueFalse) {
                    return MiscUtil.C_FALSE;
                } else {
                    throw new _MiscTemplateException(this.getNullBooleanFormatErrorDescription());
                }
            } else {
                return s;
            }
        }
    }

    getNullBooleanFormatErrorDescription() : /*_ErrorDescriptionBuilder*/any {
        return (o => o.tips.apply(o, ["If you just want \"true\"/\"false\" result as you are generting computer-language output, use \"?c\", like ${myBool?c}.", "You can write myBool?string(\'yes\', \'no\') and like to specify boolean formatting in place."].concat(<any[]>["If you need the same two values on most places, the programmers should set the \"", Configurable.BOOLEAN_FORMAT_KEY_$LI$(), "\" setting to something like \"yes,no\"."])))(new (require('./_ErrorDescriptionBuilder')._ErrorDescriptionBuilder)(["Can\'t convert boolean to string automatically, because the \"", Configurable.BOOLEAN_FORMAT_KEY_$LI$(), "\" setting was ", new (require('./_DelayedJQuote')._DelayedJQuote)(this.getBooleanFormat()), (/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getBooleanFormat(),Configurable.C_TRUE_FALSE))?", which is the legacy default computer-language format, and hence isn\'t accepted.":".")]));
    }

    /**
     * Returns the string to which {@code true} is converted to for human audience, or {@code null} if automatic
     * coercion to string is not allowed. The default value is {@code null}.
     * 
     * <p>This value is deduced from the {@code "boolean_format"} setting.
     * Confusingly, for backward compatibility (at least until 2.4) that defaults to {@code "true,false"}, yet this
     * defaults to {@code null}. That's so because {@code "true,false"} is treated exceptionally, as that default is a
     * historical mistake in FreeMarker, since it targets computer language output, not human writing. Thus it's
     * ignored.
     * 
     * @since 2.3.20
     * @return {String}
     */
    getTrueStringValue() : string {
        return this.booleanFormat != null?this.trueStringValue:(this.parent != null?this.parent.getTrueStringValue():null);
    }

    /**
     * Same as {link #getTrueStringValue()} but with {@code false}.
     * 
     * @since 2.3.20
     * @return {String}
     */
    getFalseStringValue() : string {
        return this.booleanFormat != null?this.falseStringValue:(this.parent != null?this.parent.getFalseStringValue():null);
    }

    /**
     * Sets the format used to convert {link java.util.Date}-s that are time (no date part) values to string-s, also
     * the format that {@code someString?time} will use to parse strings.
     * 
     * <p>For the possible values see {link #setDateTimeFormat(String)}.
     * 
     * <p>Defaults to {@code ""}, which is equivalent to {@code "medium"}.
     * @param {String} timeFormat
     */
    public setTimeFormat(timeFormat : string) {
        this.timeFormat = timeFormat;
        /* setProperty */this.properties.set(Configurable.TIME_FORMAT_KEY_$LI$(), timeFormat);
    }

    /**
     * The getter pair of {link #setTimeFormat(String)}.
     * @return {String}
     */
    public getTimeFormat() : string {
        return this.timeFormat != null?this.timeFormat:this.parent.getTimeFormat();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isTimeFormatSet() : boolean {
        return this.timeFormat != null;
    }

    /**
     * Sets the format used to convert {link java.util.Date}-s that are date-only (no time part) values to string-s,
     * also the format that {@code someString?date} will use to parse strings.
     * 
     * <p>For the possible values see {link #setDateTimeFormat(String)}.
     * 
     * <p>Defaults to {@code ""} which is equivalent to {@code "medium"}.
     * @param {String} dateFormat
     */
    public setDateFormat(dateFormat : string) {
        this.dateFormat = dateFormat;
        /* setProperty */this.properties.set(Configurable.DATE_FORMAT_KEY_$LI$(), dateFormat);
    }

    /**
     * The getter pair of {link #setDateFormat(String)}.
     * @return {String}
     */
    public getDateFormat() : string {
        return this.dateFormat != null?this.dateFormat:this.parent.getDateFormat();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isDateFormatSet() : boolean {
        return this.dateFormat != null;
    }

    /**
     * Sets the format used to convert {link java.util.Date}-s that are date-time (timestamp) values to string-s,
     * also the format that {@code someString?datetime} will use to parse strings.
     * 
     * <p>The possible setting values are (the quotation marks aren't part of the value itself):
     * 
     * <ul>
     * <li><p>Patterns accepted by Java's {link SimpleDateFormat}, for example {@code "dd.MM.yyyy HH:mm:ss"} (where
     * {@code HH} means 24 hours format) or {@code "MM/dd/yyyy hh:mm:ss a"} (where {@code a} prints AM or PM, if
     * the current language is English).
     * 
     * <li><p>{@code "xs"} for XML Schema format, or {@code "iso"} for ISO 8601:2004 format.
     * These formats allow various additional options, separated with space, like in
     * {@code "iso m nz"} (or with {@code _}, like in {@code "iso_m_nz"}; this is useful in a case like
     * {@code lastModified?string.iso_m_nz}). The options and their meanings are:
     * 
     * <ul>
     * <li><p>Accuracy options:<br>
     * {@code ms} = Milliseconds, always shown with all 3 digits, even if it's all 0-s.
     * Example: {@code 13:45:05.800}<br>
     * {@code s} = Seconds (fraction seconds are dropped even if non-0), like {@code 13:45:05}<br>
     * {@code m} = Minutes, like {@code 13:45}. This isn't allowed for "xs".<br>
     * {@code h} = Hours, like {@code 13}. This isn't allowed for "xs".<br>
     * Neither = Up to millisecond accuracy, but trailing millisecond 0-s are removed, also the whole
     * milliseconds part if it would be 0 otherwise. Example: {@code 13:45:05.8}
     * 
     * <li><p>Time zone offset visibility options:<br>
     * {@code fz} = "Force Zone", always show time zone offset (even for for
     * {link java.sql.Date java.sql.Date} and {link java.sql.Time java.sql.Time} values).
     * But, because ISO 8601 doesn't allow for dates (means date without time of the day) to
     * show the zone offset, this option will have no effect in the case of {@code "iso"} with
     * dates.<br>
     * {@code nz} = "No Zone", never show time zone offset<br>
     * Neither = always show time zone offset, except for {link java.sql.Date java.sql.Date}
     * and {link java.sql.Time java.sql.Time}, and for {@code "iso"} date values.
     * 
     * <li><p>Time zone options:<br>
     * {@code u} = Use UTC instead of what the {@code time_zone} setting suggests. However,
     * {link java.sql.Date java.sql.Date} and {link java.sql.Time java.sql.Time} aren't affected
     * by this (see {link #setSQLDateAndTimeTimeZone(TimeZone)} to understand why)<br>
     * {@code fu} = "Force UTC", that is, use UTC instead of what the {@code time_zone} or the
     * {@code sql_date_and_time_time_zone} setting suggests. This also effects
     * {link java.sql.Date java.sql.Date} and {link java.sql.Time java.sql.Time} values<br>
     * Neither = Use the time zone suggested by the {@code time_zone} or the
     * {@code sql_date_and_time_time_zone} configuration setting ({link #setTimeZone(TimeZone)} and
     * {link #setSQLDateAndTimeTimeZone(TimeZone)}).
     * </ul>
     * 
     * <p>The options can be specified in any order.</p>
     * 
     * <p>Options from the same category are mutually exclusive, like using {@code m} and {@code s}
     * together is an error.
     * 
     * <p>The accuracy and time zone offset visibility options don't influence parsing, only formatting.
     * For example, even if you use "iso m nz", "2012-01-01T15:30:05.125+01" will be parsed successfully and with
     * milliseconds accuracy.
     * The time zone options (like "u") influence what time zone is chosen only when parsing a string that doesn't
     * contain time zone offset.
     * 
     * <p>Parsing with {@code "iso"} understands both extend format and basic format, like
     * {@code 20141225T235018}. It doesn't, however, support the parsing of all kind of ISO 8601 strings: if
     * there's a date part, it must use year, month and day of the month values (not week of the year), and the
     * day can't be omitted.
     * 
     * <p>The output of {@code "iso"} is deliberately so that it's also a good representation of the value with
     * XML Schema format, except for 0 and negative years, where it's impossible. Also note that the time zone
     * offset is omitted for date values in the {@code "iso"} format, while it's preserved for the {@code "xs"}
     * format.
     * 
     * <li><p>{@code "short"}, {@code "medium"}, {@code "long"}, or {@code "full"}, which that has locale-dependent
     * meaning defined by the Java platform (see in the documentation of {link java.text.DateFormat}).
     * For date-time values, you can specify the length of the date and time part independently, be separating
     * them with {@code _}, like {@code "short_medium"}. ({@code "medium"} means
     * {@code "medium_medium"} for date-time values.)
     * 
     * <li><p>Anything that starts with {@code "@"} followed by a letter is interpreted as a custom
     * date/time/dateTime format, but only if either {link Configuration#getIncompatibleImprovements()}
     * is at least 2.3.24, or there's any custom formats defined (even if custom number format). The format of
     * such string is <code>"@<i>name</i>"</code> or <code>"@<i>name</i> <i>parameters</i>"</code>, where
     * <code><i>name</i></code> is the key in the {link Map} set by {link #setCustomDateFormats(Map)}, and
     * <code><i>parameters</i></code> is parsed by the custom number format.
     * 
     * </ul>
     * 
     * <p>Defaults to {@code ""}, which is equivalent to {@code "medium_medium"}.
     * @param {String} dateTimeFormat
     */
    public setDateTimeFormat(dateTimeFormat : string) {
        this.dateTimeFormat = dateTimeFormat;
        /* setProperty */this.properties.set(Configurable.DATETIME_FORMAT_KEY_$LI$(), dateTimeFormat);
    }

    /**
     * The getter pair of {link #setDateTimeFormat(String)}.
     * @return {String}
     */
    public getDateTimeFormat() : string {
        return this.dateTimeFormat != null?this.dateTimeFormat:this.parent.getDateTimeFormat();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isDateTimeFormatSet() : boolean {
        return this.dateTimeFormat != null;
    }

    /**
     * Getter pair of {link #setCustomDateFormats(Map)}; do not modify the returned {link Map}! To be consistent with
     * other setting getters, if this setting was set directly on this {link Configurable} object, this simply returns
     * that value, otherwise it returns the value from the parent {link Configurable}. So beware, the returned value
     * doesn't reflect the {link Map} key granularity fallback logic that FreeMarker actually uses for this setting
     * (for that, use {link #getCustomDateFormat(String)}). The returned value isn't a snapshot; it may or may not
     * shows the changes later made to this setting on this {link Configurable} level (but usually it's well defined if
     * until what point settings are possibly modified).
     * <p>
     * <p>
     * The return value is never {@code null}; called on the {link Configuration} (top) level, it defaults to an empty
     * {link Map}.
     * <p>
     * see #getCustomDateFormatsWithoutFallback()
     * 
     * @since 2.3.24
     * @return {Map}
     */
    public getCustomDateFormats() : Map<any, any> {
        return this.customDateFormats == null?this.parent.getCustomDateFormats():this.customDateFormats;
    }

    /**
     * Like {link #getCustomDateFormats()}, but doesn't fall back to the parent {link Configurable}, nor does it
     * provide a non-{@code null} default when called as the method of a {link Configuration}.
     * 
     * @since 2.3.25
     * @return {Map}
     */
    public getCustomDateFormatsWithoutFallback() : Map<any, any> {
        return this.customDateFormats;
    }

    /**
     * Associates names with formatter factories, which then can be referred by the {link #setDateTimeFormat(String)
     * date_format}, {link #setDateTimeFormat(String) time_format}, and {link #setDateTimeFormat(String)
     * datetime_format} settings with values starting with <code>@<i>name</i></code>. Beware, if you specify any custom
     * formats here, an initial {@code @} followed by a letter will have special meaning in number/date/time/datetime
     * format strings, even if {link Configuration#getIncompatibleImprovements() incompatible_improvements} is less
     * than 2.3.24 (starting with {link Configuration#getIncompatibleImprovements() incompatible_improvements} 2.3.24
     * {@code @} always has special meaning).
     * 
     * @param {Map} customDateFormats Can't be {@code null}. The name must start with an UNICODE letter, and can only contain UNICODE
     * letters and digits.
     * @since 2.3.24
     */
    public setCustomDateFormats(customDateFormats : Map<any, any>) {
        this.validateFormatNames(customDateFormats.keySet());
        this.customDateFormats = customDateFormats;
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isCustomDateFormatsSet() : boolean {
        return this.customDateFormats != null;
    }

    /**
     * Gets the custom name format registered for the name.
     * 
     * @since 2.3.24
     * @param {String} name
     * @return {TemplateDateFormatFactory}
     */
    public getCustomDateFormat(name : string) : /*TemplateDateFormatFactory*/any {
        let r : /*TemplateDateFormatFactory*/any;
        if(this.customDateFormats != null) {
            r = /* get */this.customDateFormats.get(name);
            if(r != null) {
                return r;
            }
        }
        return this.parent != null?this.parent.getCustomDateFormat(name):null;
    }

    /**
     * Sets the exception handler used to handle exceptions occurring inside templates.
     * The default is {link TemplateExceptionHandler#DEBUG_HANDLER}. The recommended values are:
     * 
     * <ul>
     * <li>In production systems: {link TemplateExceptionHandler#RETHROW_HANDLER}
     * <li>During development of HTML templates: {link TemplateExceptionHandler#HTML_DEBUG_HANDLER}
     * <li>During development of non-HTML templates: {link TemplateExceptionHandler#DEBUG_HANDLER}
     * </ul>
     * 
     * <p>All of these will let the exception propagate further, so that you can catch it around
     * {link Template#process(Object, Writer)} for example. The difference is in what they print on the output before
     * they do that.
     * 
     * <p>Note that the {link TemplateExceptionHandler} is not meant to be used for generating HTTP error pages.
     * Neither is it meant to be used to roll back the printed output. These should be solved outside template
     * processing when the exception raises from {link Template#process(Object, Writer) Template.process}.
     * {link TemplateExceptionHandler} meant to be used if you want to include special content <em>in</em> the template
     * output, or if you want to suppress certain exceptions. If you suppress an exception, and the
     * {link Environment#getLogTemplateExceptions()} returns {@code false}, then it's the responsibility of the
     * {link TemplateExceptionHandler} to log the exception (if you want it to be logged).
     * <p>
     * see #setLogTemplateExceptions(boolean)
     * see #setAttemptExceptionReporter(AttemptExceptionReporter)
     * @param {*} templateExceptionHandler
     */
    public setTemplateExceptionHandler(templateExceptionHandler : /*TemplateExceptionHandler*/any) {
        this.templateExceptionHandler = templateExceptionHandler;
        /* setProperty */this.properties.set(Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>templateExceptionHandler.constructor)));
    }

    /**
     * The getter pair of {link #setTemplateExceptionHandler(TemplateExceptionHandler)}.
     * @return {*}
     */
    public getTemplateExceptionHandler() : /*TemplateExceptionHandler*/any {
        return this.templateExceptionHandler != null?this.templateExceptionHandler:this.parent.getTemplateExceptionHandler();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isTemplateExceptionHandlerSet() : boolean {
        return this.templateExceptionHandler != null;
    }

    /**
     * Specifies how exceptions handled (and hence suppressed) by an {@code #attempt} blocks will be logged or otherwise
     * reported. The default value is {link AttemptExceptionReporter#LOG_ERROR_REPORTER}.
     * 
     * <p>Note that {@code #attempt} is not supposed to be a general purpose error handler mechanism, like {@code try}
     * is in Java. It's for decreasing the impact of unexpected errors, by making it possible that only part of the
     * page is going down, instead of the whole page. But it's still an error, something that someone should fix. So the
     * error should be reported, not just ignored in a custom {link AttemptExceptionReporter}-s.
     * 
     * <p>The {link AttemptExceptionReporter} is invoked regardless of the value of the
     * {link #setLogTemplateExceptions(boolean) log_template_exceptions} setting.
     * The {link AttemptExceptionReporter} is not invoked if the {link TemplateExceptionHandler} has suppressed the
     * exception.
     * 
     * @since 2.3.27
     * @param {*} attemptExceptionReporter
     */
    public setAttemptExceptionReporter(attemptExceptionReporter : /*AttemptExceptionReporter*/any) {
        this.attemptExceptionReporter = attemptExceptionReporter;
    }

    /**
     * The getter pair of {link #setAttemptExceptionReporter(AttemptExceptionReporter)}.
     * 
     * @since 2.3.27
     * @return {*}
     */
    public getAttemptExceptionReporter() : /*AttemptExceptionReporter*/any {
        return this.attemptExceptionReporter != null?this.attemptExceptionReporter:this.parent.getAttemptExceptionReporter();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.27
     * @return {boolean}
     */
    public isAttemptExceptionReporterSet() : boolean {
        return this.attemptExceptionReporter != null;
    }

    /**
     * Sets the arithmetic engine used to perform arithmetic operations.
     * The default is {link ArithmeticEngine#BIGDECIMAL_ENGINE}.
     * @param {ArithmeticEngine} arithmeticEngine
     */
    public setArithmeticEngine(arithmeticEngine : /*ArithmeticEngine*/any) {
        this.arithmeticEngine = arithmeticEngine;
        /* setProperty */this.properties.set(Configurable.ARITHMETIC_ENGINE_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>arithmeticEngine.constructor)));
    }

    /**
     * The getter pair of {link #setArithmeticEngine(ArithmeticEngine)}.
     * @return {ArithmeticEngine}
     */
    public getArithmeticEngine() : /*ArithmeticEngine*/any {
        return this.arithmeticEngine != null?this.arithmeticEngine:this.parent.getArithmeticEngine();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isArithmeticEngineSet() : boolean {
        return this.arithmeticEngine != null;
    }

    /**
     * Sets the object wrapper used to wrap objects to {link TemplateModel}-s.
     * The default is {link ObjectWrapper#DEFAULT_WRAPPER}.
     * @param {*} objectWrapper
     */
    public setObjectWrapper(objectWrapper : /*ObjectWrapper*/any) {
        this.objectWrapper = objectWrapper;
        /* setProperty */this.properties.set(Configurable.OBJECT_WRAPPER_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>objectWrapper.constructor)));
    }

    /**
     * The getter pair of {link #setObjectWrapper(ObjectWrapper)}.
     * @return {*}
     */
    public getObjectWrapper() : /*ObjectWrapper*/any {
        return this.objectWrapper != null?this.objectWrapper:this.parent.getObjectWrapper();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isObjectWrapperSet() : boolean {
        return this.objectWrapper != null;
    }

    /**
     * Informs FreeMarker about the charset used for the output. As FreeMarker outputs character stream (not
     * byte stream), it's not aware of the output charset unless the software that encloses it tells it
     * with this setting. Some templates may use FreeMarker features that require this information.
     * Setting this to {@code null} means that the output encoding is not known.
     * 
     * <p>Defaults to {@code null} (unknown).
     * @param {String} outputEncoding
     */
    public setOutputEncoding(outputEncoding : string) {
        this.outputEncoding = outputEncoding;
        if(outputEncoding != null) {
            /* setProperty */this.properties.set(Configurable.OUTPUT_ENCODING_KEY_$LI$(), outputEncoding);
        } else {
            /* remove */this.properties.delete(Configurable.OUTPUT_ENCODING_KEY_$LI$());
        }
        this.outputEncodingSet = true;
    }

    public getOutputEncoding() : string {
        return this.outputEncodingSet?this.outputEncoding:(this.parent != null?this.parent.getOutputEncoding():null);
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isOutputEncodingSet() : boolean {
        return this.outputEncodingSet;
    }

    /**
     * Sets the URL escaping (URL encoding, percentage encoding) charset. If {@code null}, the output encoding
     * ({link #setOutputEncoding(String)}) will be used for URL escaping.
     * <p>
     * Defaults to {@code null}.
     * @param {String} urlEscapingCharset
     */
    public setURLEscapingCharset(urlEscapingCharset : string) {
        this.urlEscapingCharset = urlEscapingCharset;
        if(urlEscapingCharset != null) {
            /* setProperty */this.properties.set(Configurable.URL_ESCAPING_CHARSET_KEY_$LI$(), urlEscapingCharset);
        } else {
            /* remove */this.properties.delete(Configurable.URL_ESCAPING_CHARSET_KEY_$LI$());
        }
        this.urlEscapingCharsetSet = true;
    }

    public getURLEscapingCharset() : string {
        return this.urlEscapingCharsetSet?this.urlEscapingCharset:(this.parent != null?this.parent.getURLEscapingCharset():null);
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isURLEscapingCharsetSet() : boolean {
        return this.urlEscapingCharsetSet;
    }

    /**
     * Sets the {link TemplateClassResolver} that is used when the
     * <code>new</code> built-in is called in a template. That is, when
     * a template contains the <code>"com.example.SomeClassName"?new</code>
     * expression, this object will be called to resolve the
     * <code>"com.example.SomeClassName"</code> string to a class. The default
     * value is {link TemplateClassResolver#UNRESTRICTED_RESOLVER} in
     * FreeMarker 2.3.x, and {link TemplateClassResolver#SAFER_RESOLVER}
     * starting from FreeMarker 2.4.0. If you allow users to upload templates,
     * it's important to use a custom restrictive {link TemplateClassResolver}.
     * 
     * @since 2.3.17
     * @param {*} newBuiltinClassResolver
     */
    public setNewBuiltinClassResolver(newBuiltinClassResolver : /*TemplateClassResolver*/any) {
        this.newBuiltinClassResolver = newBuiltinClassResolver;
        /* setProperty */this.properties.set(Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_$LI$(), /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>newBuiltinClassResolver.constructor)));
    }

    /**
     * Retrieves the {link TemplateClassResolver} used
     * to resolve classes when "SomeClassName"?new is called in a template.
     * 
     * @since 2.3.17
     * @return {*}
     */
    public getNewBuiltinClassResolver() : /*TemplateClassResolver*/any {
        return this.newBuiltinClassResolver != null?this.newBuiltinClassResolver:this.parent.getNewBuiltinClassResolver();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isNewBuiltinClassResolverSet() : boolean {
        return this.newBuiltinClassResolver != null;
    }

    /**
     * Sets whether the output {link Writer} is automatically flushed at
     * the end of {link Template#process(Object, Writer)} (and its
     * overloads). The default is {@code true}.
     * 
     * <p>Using {@code false} is needed for example when a Web page is composed
     * from several boxes (like portlets, GUI panels, etc.) that aren't inserted
     * with <tt>#include</tt> (or with similar directives) into a master
     * FreeMarker template, rather they are all processed with a separate
     * {link Template#process(Object, Writer)} call. In a such scenario the
     * automatic flushes would commit the HTTP response after each box, hence
     * interfering with full-page buffering, and also possibly decreasing
     * performance with too frequent and too early response buffer flushes.
     * 
     * @since 2.3.17
     * @param {boolean} autoFlush
     */
    public setAutoFlush(autoFlush : boolean) {
        this.autoFlush = autoFlush;
        /* setProperty */this.properties.set(Configurable.AUTO_FLUSH_KEY_$LI$(), /* valueOf */String(autoFlush).toString());
    }

    /**
     * See {link #setAutoFlush(boolean)}
     * 
     * @since 2.3.17
     * @return {boolean}
     */
    public getAutoFlush() : boolean {
        return this.autoFlush != null?this.autoFlush:(this.parent == null || this.parent.getAutoFlush());
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isAutoFlushSet() : boolean {
        return this.autoFlush != null;
    }

    /**
     * Sets if tips should be shown in error messages of errors arising during template processing.
     * The default is {@code true}.
     * 
     * @since 2.3.21
     * @param {boolean} showTips
     */
    public setShowErrorTips(showTips : boolean) {
        this.showErrorTips = showTips;
        /* setProperty */this.properties.set(Configurable.SHOW_ERROR_TIPS_KEY_$LI$(), /* valueOf */String(showTips).toString());
    }

    /**
     * See {link #setShowErrorTips(boolean)}
     * 
     * @since 2.3.21
     * @return {boolean}
     */
    public getShowErrorTips() : boolean {
        return this.showErrorTips != null?this.showErrorTips:(this.parent == null || this.parent.getShowErrorTips());
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isShowErrorTipsSet() : boolean {
        return this.showErrorTips != null;
    }

    /**
     * Specifies if {@code ?api} can be used in templates. Defaults to {@code false} so that updating FreeMarker won't
     * decrease the security of existing applications.
     * 
     * @since 2.3.22
     * @param {boolean} value
     */
    public setAPIBuiltinEnabled(value : boolean) {
        this.apiBuiltinEnabled = value;
        /* setProperty */this.properties.set(Configurable.API_BUILTIN_ENABLED_KEY_$LI$(), /* valueOf */String(value).toString());
    }

    /**
     * See {link #setAPIBuiltinEnabled(boolean)}
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public isAPIBuiltinEnabled() : boolean {
        return this.apiBuiltinEnabled != null?this.apiBuiltinEnabled:(this.parent != null && this.parent.isAPIBuiltinEnabled());
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isAPIBuiltinEnabledSet() : boolean {
        return this.apiBuiltinEnabled != null;
    }

    /**
     * Specifies if {link TemplateException}-s thrown by template processing are logged by FreeMarker or not. The
     * default is {@code true} for backward compatibility, but that results in logging the exception twice in properly
     * written applications, because there the {link TemplateException} thrown by the public FreeMarker API is also
     * logged by the caller (even if only as the cause exception of a higher level exception). Hence, in modern
     * applications it should be set to {@code false}. Note that this setting has no effect on the logging of exceptions
     * caught by {@code #attempt}; by default those are always logged as errors (because those exceptions won't bubble
     * up to the API caller), however, that can be changed with the {link
     * #setAttemptExceptionReporter(AttemptExceptionReporter) attempt_exception_reporter} setting.
     * 
     * @since 2.3.22
     * @param {boolean} value
     */
    public setLogTemplateExceptions(value : boolean) {
        this.logTemplateExceptions = value;
        /* setProperty */this.properties.set(Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_$LI$(), /* valueOf */String(value).toString());
    }

    /**
     * See {link #setLogTemplateExceptions(boolean)}
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public getLogTemplateExceptions() : boolean {
        return this.logTemplateExceptions != null?this.logTemplateExceptions:(this.parent == null || this.parent.getLogTemplateExceptions());
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isLogTemplateExceptionsSet() : boolean {
        return this.logTemplateExceptions != null;
    }

    /**
     * Specifies if unchecked exceptions thrown during expression evaluation or during executing custom directives (and
     * transform) will be wrapped into {link TemplateException}-s, or will bubble up to the caller of
     * {link Template#process(Object, Writer, ObjectWrapper)} as is. The default is {@code false} for backward
     * compatibility (as some applications catch certain unchecked exceptions thrown by the template processing to do
     * something special), but the recommended value is {@code true}.
     * When this is {@code true}, the unchecked exceptions will be wrapped into a {link TemplateException}-s, thus the
     * exception will include the location in the template (not
     * just the Java stack trace). Another consequence of the wrapping is that the {link TemplateExceptionHandler} will
     * be invoked for the exception (as that only handles {link TemplateException}-s, it wasn't invoked for unchecked
     * exceptions). When this setting is {@code false}, unchecked exception will be thrown by
     * {link Template#process(Object, Writer, ObjectWrapper)}.
     * Note that plain Java methods called from templates aren't user defined {link TemplateMethodModel}-s, and have
     * always wrapped the thrown exception into {link TemplateException}, regardless of this setting.
     * 
     * @since 2.3.27
     * @param {boolean} wrapUncheckedExceptions
     */
    public setWrapUncheckedExceptions(wrapUncheckedExceptions : boolean) {
        this.wrapUncheckedExceptions = wrapUncheckedExceptions;
    }

    /**
     * The getter pair of {link #setWrapUncheckedExceptions(boolean)}.
     * 
     * @since 2.3.27
     * @return {boolean}
     */
    public getWrapUncheckedExceptions() : boolean {
        return this.wrapUncheckedExceptions != null?this.wrapUncheckedExceptions:(this.parent != null && this.parent.getWrapUncheckedExceptions());
    }

    /**
     * @since 2.3.27
     * @return {boolean}
     */
    public isWrapUncheckedExceptionsSet() : boolean {
        return this.wrapUncheckedExceptions != null;
    }

    /**
     * The getter pair of {link #setLazyImports(boolean)}.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public getLazyImports() : boolean {
        return this.lazyImports != null?this.lazyImports:this.parent.getLazyImports();
    }

    /**
     * Specifies if {@code <#import ...>} (and {link Environment#importLib(String, String)}) should delay the loading
     * and processing of the imported templates until the content of the imported namespace is actually accessed. This
     * makes the overhead of <em>unused</em> imports negligible. Note that turning on lazy importing isn't entirely
     * transparent, as accessing global variables (usually created with {@code <#global ...=...>}) that should be
     * created by the imported template won't trigger the loading and processing of the lazily imported template
     * (because globals aren't accessed through the namespace variable), so the global variable will just be missing.
     * In general, you lose the strict control over when the namespace initializing code in the imported template will
     * be executed, though it shouldn't mater for most well designed imported templates.
     * Another drawback is that importing a missing or otherwise broken template will be successful, and the problem
     * will remain hidden until (and if) the namespace content is actually used. Note that the namespace initializing
     * code will run with the same {linkplain Configurable#getLocale() locale} as it was at the point of the
     * {@code <#import ...>} call (other settings won't be handled specially like that).
     * <p>
     * <p>
     * The default is {@code false} (and thus imports are eager) for backward compatibility, which can cause
     * perceivable overhead if you have many imports and only a few of them is actually used.
     * <p>
     * <p>
     * This setting also affects {linkplain #setAutoImports(Map) auto-imports}, unless you have set a non-{@code null}
     * value with {link #setLazyAutoImports(Boolean)}.
     * <p>
     * see #setLazyAutoImports(Boolean)
     * 
     * @since 2.3.25
     * @param {boolean} lazyImports
     */
    public setLazyImports(lazyImports : boolean) {
        this.lazyImports = lazyImports;
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public isLazyImportsSet() : boolean {
        return this.lazyImports != null;
    }

    /**
     * The getter pair of {link #setLazyAutoImports(Boolean)}.
     * 
     * @since 2.3.25
     * @return {Boolean}
     */
    public getLazyAutoImports() : boolean {
        return this.lazyAutoImportsSet?this.lazyAutoImports:this.parent.getLazyAutoImports();
    }

    /**
     * Specifies if {linkplain #setAutoImports(Map) auto-imports} will be
     * {link #setLazyImports(boolean) lazy imports}. This is useful to make the overhead of <em>unused</em>
     * auto-imports negligible. If this is set to {@code null}, {link #getLazyImports()} specifies the behavior of
     * auto-imports too. The default value is {@code null}.
     * 
     * @since 2.3.25
     * @param {Boolean} lazyAutoImports
     */
    public setLazyAutoImports(lazyAutoImports : boolean) {
        this.lazyAutoImports = lazyAutoImports;
        this.lazyAutoImportsSet = true;
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public isLazyAutoImportsSet() : boolean {
        return this.lazyAutoImportsSet;
    }

    /**
     * Adds an invisible <code>#import <i>templateName</i> as <i>namespaceVarName</i></code> at the beginning of the
     * main template (that's the top-level template that wasn't included/imported from another template). While it only
     * affects the main template directly, as the imports will create a global variable there, the imports will be
     * visible from the further imported templates too (note that {link Configuration#getIncompatibleImprovements()}
     * set to 2.3.24 fixes a rarely surfacing bug with that).
     * <p>
     * <p>
     * It's recommended to set the {@code lazy_auto_imports} setting ({link Configuration#setLazyAutoImports(Boolean)})
     * to {@code true} when using this, so that auto-imports that are unused in a template won't degrade performance by
     * unnecessary loading and initializing the imported library.
     * <p>
     * <p>
     * If the imports aren't lazy, the order of the imports will be the same as the order in which they were added with
     * this method. (Calling this method with an already added {@code namespaceVarName} will move that to the end
     * of the auto-import order.)
     * <p>
     * <p>
     * The auto-import is added directly to the {link Configurable} on which this method is called (not to the parents
     * or children), but when the main template is processed, the auto-imports are collected from all the
     * {link Configurable} levels, in parent-to-child order: {link Configuration}, {link Template} (the main
     * template), {link Environment}. If the same {@code namespaceVarName} occurs on multiple levels, the one on the
     * child level is used, and the clashing import from the parent level is skipped.
     * 
     * <p>If there are also auto-includes (see {link #addAutoInclude(String)}), those will be executed after
     * the auto-imports.
     * <p>
     * see #setAutoImports(Map)
     * @param {String} namespaceVarName
     * @param {String} templateName
     */
    public addAutoImport(namespaceVarName : string, templateName : string) {
        {
            if(this.autoImports == null) {
                this.initAutoImportsMap();
            } else {
                /* remove */this.autoImports.delete(namespaceVarName);
            }
            /* put */this.autoImports.set(namespaceVarName, templateName);
        }
    }

    initAutoImportsMap() {
        this.autoImports = <any>(new Map<any, any>());
    }

    /**
     * Removes an auto-import from this {link Configurable} level (not from the parents or children);
     * see {link #addAutoImport(String, String)}. Does nothing if the auto-import doesn't exist.
     * @param {String} namespaceVarName
     */
    public removeAutoImport(namespaceVarName : string) {
        {
            if(this.autoImports != null) {
                /* remove */this.autoImports.delete(namespaceVarName);
            }
        }
    }

    /**
     * Removes all auto-imports, then calls {link #addAutoImport(String, String)} for each {link Map}-entry (the entry
     * key is the {@code namespaceVarName}). The order of the auto-imports will be the same as {link Map#keySet()}
     * returns the keys (but the order of imports doesn't mater for properly designed libraries anyway).
     * 
     * @param {Map} map Maps the namespace variable names to the template names; not {@code null}
     */
    public setAutoImports(map : Map<any, any>) {
        {
            if(this.autoImports != null) {
                /* clear */(<any>this.autoImports).clear();
            }
            {
                let array131 = /* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>(<Map<any, any>><any>map));
                for(let index130=0; index130 < array131.length; index130++) {
                    let entry = array131[index130];
                    {
                        let key : any = entry.getKey();
                        if(!(typeof key === 'string')) {
                            throw Object.defineProperty(new Error("Key in Map wasn\'t a String, but a(n) " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>key.constructor)) + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                        }
                        let value : any = entry.getValue();
                        if(!(typeof value === 'string')) {
                            throw Object.defineProperty(new Error("Value in Map wasn\'t a String, but a(n) " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>value.constructor)) + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                        }
                        this.addAutoImport(<string>key, <string>value);
                    }
                }
            }
        }
    }

    /**
     * Getter pair of {link #setAutoImports(Map)}; do not modify the returned {link Map}! To be consistent with other
     * setting getters, if this setting was set directly on this {link Configurable} object, this simply returns that
     * value, otherwise it returns the value from the parent {link Configurable}. So beware, the returned value doesn't
     * reflect the {link Map} key granularity fallback logic that FreeMarker actually uses for this setting. The
     * returned value is not the same {link Map} object that was set with {link #setAutoImports(Map)}, only its
     * content is the same. The returned value isn't a snapshot; it may or may not shows the changes later made to this
     * setting on this {link Configurable} level (but usually it's well defined if until what point settings are
     * possibly modified).
     * <p>
     * <p>
     * The return value is never {@code null}; called on the {link Configuration} (top) level, it defaults to an empty
     * {link Map}.
     * <p>
     * see #getAutoImportsWithoutFallback()
     * 
     * @since 2.3.25
     * @return {Map}
     */
    public getAutoImports() : Map<any, any> {
        return this.autoImports != null?this.autoImports:this.parent.getAutoImports();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public isAutoImportsSet() : boolean {
        return this.autoImports != null;
    }

    /**
     * Like {link #getAutoImports()}, but doesn't fall back to the parent {link Configurable} (and so it can be
     * {@code null}).
     * 
     * @since 2.3.25
     * @return {Map}
     */
    public getAutoImportsWithoutFallback() : Map<any, any> {
        return this.autoImports;
    }

    public addAutoInclude(templateName : string, keepDuplicate : boolean = false) {
        {
            if(this.autoIncludes == null) {
                this.initAutoIncludesList();
            } else {
                if(!keepDuplicate) {
                    /* remove */(a => { let index = a.indexOf(templateName); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.autoIncludes);
                }
            }
            /* add */(this.autoIncludes.push(templateName)>0);
        }
    }

    initAutoIncludesList() {
        this.autoIncludes = <any>([]);
    }

    /**
     * Removes all auto-includes, then calls {link #addAutoInclude(String)} for each {link List} items.
     * 
     * <p>Before {linkplain Configuration#Configuration(Version) incompatible improvements} 2.3.25 it doesn't filter
     * out duplicates from the list if this method was called on a {link Configuration} instance.
     * @param {List} templateNames
     */
    public setAutoIncludes(templateNames : Array<any>) {
        {
            if(this.autoIncludes != null) {
                /* clear */(this.autoIncludes.length = 0);
            }
            for(let index132=0; index132 < templateNames.length; index132++) {
                let templateName = templateNames[index132];
                {
                    if(!(typeof templateName === 'string')) {
                        throw Object.defineProperty(new Error("List items must be String-s."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    this.addAutoInclude(<string>templateName, (ClassUtil.isInstanceOf(this, 'freemarker.template.Configuration')) && (</*Configuration*/any>this).getIncompatibleImprovements().intValue() < /*_TemplateAPI.VERSION_INT_2_3_25_$LI$()*/2003025);
                }
            }
        }
    }

    /**
     * Getter pair of {link #setAutoIncludes(List)}; do not modify the returned {link List}! To be consistent with
     * other setting getters, if this setting was set directly on this {link Configurable} object, this simply returns
     * that value, otherwise it returns the value from the parent {link Configurable}. So beware, the returned value
     * doesn't reflect the {link List} concatenation logic that FreeMarker actually uses for this setting. The returned
     * value is not the same {link List} object that was set with {link #setAutoIncludes(List)}, only its content is
     * the same (except that duplicate are removed). The returned value isn't a snapshot; it may or may not shows the
     * changes later made to this setting on this {link Configurable} level (but usually it's well defined if until
     * what point settings are possibly modified).
     * <p>
     * <p>
     * The return value is never {@code null}; called on the {link Configuration} (top) level, it defaults to an empty
     * {link List}.
     * <p>
     * see #getAutoIncludesWithoutFallback()
     * 
     * @since 2.3.25
     * @return {List}
     */
    public getAutoIncludes() : List<any> {
        return this.autoIncludes != null?this.autoIncludes:this.parent.getAutoIncludes();
    }

    /**
     * Tells if this setting is set directly in this object or its value is coming from the {link #getParent() parent}.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public isAutoIncludesSet() : boolean {
        return this.autoIncludes != null;
    }

    /**
     * Like {link #getAutoIncludes()}, but doesn't fall back to the parent {link Configurable} (and so it can be
     * {@code null}).
     * 
     * @since 2.3.25
     * @return {List}
     */
    public getAutoIncludesWithoutFallback() : List<any> {
        return this.autoIncludes;
    }

    /**
     * Removes the auto-include from this {link Configurable} level (not from the parents or children); see
     * {link #addAutoInclude(String)}. Does nothing if the template is not there.
     * @param {String} templateName
     */
    public removeAutoInclude(templateName : string) {
        {
            if(this.autoIncludes != null) {
                /* remove */(a => { let index = a.indexOf(templateName); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.autoIncludes);
            }
        }
    }

    static ALLOWED_CLASSES_SNAKE_CASE : string = "allowed_classes";

    static TRUSTED_TEMPLATES_SNAKE_CASE : string = "trusted_templates";

    static ALLOWED_CLASSES_CAMEL_CASE : string = "allowedClasses";

    static TRUSTED_TEMPLATES_CAMEL_CASE : string = "trustedTemplates";

    /**
     * Sets a FreeMarker setting by a name and string value. If you can configure FreeMarker directly with Java (or
     * other programming language), you should use the dedicated setter methods instead (like
     * {link #setObjectWrapper(ObjectWrapper)}. This meant to be used only when you get settings from somewhere
     * as {link String}-{link String} name-value pairs (typically, as a {link Properties} object). Below you find an
     * overview of the settings available.
     * 
     * <p>Note: As of FreeMarker 2.3.23, setting names can be written in camel case too. For example, instead of
     * {@code date_format} you can also use {@code dateFormat}. It's likely that camel case will become to the
     * recommended convention in the future.
     * 
     * <p>The list of settings commonly supported in all {link Configurable} subclasses:
     * <ul>
     * <li><p>{@code "locale"}:
     * See {link #setLocale(Locale)}.
     * <br>String value: local codes with the usual format in Java, such as {@code "en_US"}, or since 2.3.26,
     * "JVM default" (ignoring case) to use the default locale of the Java environment.
     * 
     * <li><p>{@code "classic_compatible"}:
     * See {link #setClassicCompatible(boolean)} and {link Configurable#setClassicCompatibleAsInt(int)}.
     * <br>String value: {@code "true"}, {@code "false"}, also since 2.3.20 {@code 0} or {@code 1} or {@code 2}.
     * (Also accepts {@code "yes"}, {@code "no"}, {@code "t"}, {@code "f"}, {@code "y"}, {@code "n"}.)
     * Case insensitive.
     * 
     * <li><p>{@code "custom_number_formats"}: See {link #setCustomNumberFormats(Map)}.
     * <br>String value: Interpreted as an <a href="#fm_obe">object builder expression</a>.
     * <br>Example: <code>{ "hex": com.example.HexTemplateNumberFormatFactory,
     * "gps": com.example.GPSTemplateNumberFormatFactory }</code>
     * 
     * <li><p>{@code "custom_date_formats"}: See {link #setCustomDateFormats(Map)}.
     * <br>String value: Interpreted as an <a href="#fm_obe">object builder expression</a>.
     * <br>Example: <code>{ "trade": com.example.TradeTemplateDateFormatFactory,
     * "log": com.example.LogTemplateDateFormatFactory }</code>
     * 
     * <li><p>{@code "template_exception_handler"}:
     * See {link #setTemplateExceptionHandler(TemplateExceptionHandler)}.
     * <br>String value: If the value contains dot, then it's interpreted as an <a href="#fm_obe">object builder
     * expression</a>.
     * If the value does not contain dot, then it must be one of these predefined values (case insensitive):
     * {@code "rethrow"} (means {link TemplateExceptionHandler#RETHROW_HANDLER}),
     * {@code "debug"} (means {link TemplateExceptionHandler#DEBUG_HANDLER}),
     * {@code "html_debug"} (means {link TemplateExceptionHandler#HTML_DEBUG_HANDLER}),
     * {@code "ignore"} (means {link TemplateExceptionHandler#IGNORE_HANDLER}), or
     * {@code "default"} (only allowed for {link Configuration} instances) for the default value.
     * 
     * <li><p>{@code "attempt_exception_reporter"}:
     * See {link #setAttemptExceptionReporter(AttemptExceptionReporter)}.
     * <br>String value: If the value contains dot, then it's interpreted as an <a href="#fm_obe">object builder
     * expression</a>.
     * If the value does not contain dot, then it must be one of these predefined values (case insensitive):
     * {@code "log_error"} (means {link AttemptExceptionReporter#LOG_ERROR_REPORTER}),
     * {@code "log_warn"} (means {link AttemptExceptionReporter#LOG_WARN_REPORTER}), or
     * {@code "default"} (only allowed for {link Configuration} instances) for the default value.
     * 
     * <li><p>{@code "arithmetic_engine"}:
     * See {link #setArithmeticEngine(ArithmeticEngine)}.
     * <br>String value: If the value contains dot, then it's interpreted as an <a href="#fm_obe">object builder
     * expression</a>.
     * If the value does not contain dot,
     * then it must be one of these special values (case insensitive):
     * {@code "bigdecimal"}, {@code "conservative"}.
     * 
     * <li><p>{@code "object_wrapper"}:
     * See {link #setObjectWrapper(ObjectWrapper)}.
     * <br>String value: If the value contains dot, then it's interpreted as an <a href="#fm_obe">object builder
     * expression</a>, with the addition that {link BeansWrapper}, {link DefaultObjectWrapper} and
     * {link SimpleObjectWrapper} can be referred without package name. For example, these strings are valid
     * values: {@code "DefaultObjectWrapper(2.3.21, forceLegacyNonListCollections=false, iterableSupport=true)"},
     * {@code "BeansWrapper(2.3.21, simpleMapWrapper=true)"}.
     * <br>If the value does not contain dot, then it must be one of these special values (case insensitive):
     * {@code "default"} means the default of {link Configuration} (the default depends on the
     * {@code Configuration#Configuration(Version) incompatible_improvements}, but a bug existed in 2.3.21 where
     * that was ignored),
     * {@code "default_2_3_0"} (means the deprecated {link ObjectWrapper#DEFAULT_WRAPPER})
     * {@code "simple"} (means the deprecated {link ObjectWrapper#SIMPLE_WRAPPER}),
     * {@code "beans"} (means the deprecated {link BeansWrapper#BEANS_WRAPPER}
     * or {link BeansWrapperBuilder#build()}),
     * {@code "jython"} (means {link freemarker.ext.jython.JythonWrapper#DEFAULT_WRAPPER})
     * 
     * <li><p>{@code "number_format"}: See {link #setNumberFormat(String)}.
     * 
     * <li><p>{@code "boolean_format"}: See {link #setBooleanFormat(String)} .
     * 
     * <li><p>{@code "date_format", "time_format", "datetime_format"}:
     * See {link #setDateFormat(String)}, {link #setTimeFormat(String)}, {link #setDateTimeFormat(String)}.
     * 
     * <li><p>{@code "time_zone"}:
     * See {link #setTimeZone(TimeZone)}.
     * <br>String value: With the format as {link TimeZone#getTimeZone} defines it. Also, since 2.3.21
     * {@code "JVM default"} can be used that will be replaced with the actual JVM default time zone when
     * {link #setSetting(String, String)} is called.
     * For example {@code "GMT-8:00"} or {@code "America/Los_Angeles"}
     * <br>If you set this setting, consider setting {@code sql_date_and_time_time_zone}
     * too (see below)!
     * 
     * <li><p>{@code sql_date_and_time_time_zone}:
     * See {link #setSQLDateAndTimeTimeZone(TimeZone)}.
     * Since 2.3.21.
     * <br>String value: With the format as {link TimeZone#getTimeZone} defines it. Also, {@code "JVM default"}
     * can be used that will be replaced with the actual JVM default time zone when
     * {link #setSetting(String, String)} is called. Also {@code "null"} can be used, which has the same effect
     * as {link #setSQLDateAndTimeTimeZone(TimeZone) setSQLDateAndTimeTimeZone(null)}.
     * 
     * <li><p>{@code "output_encoding"}:
     * See {link #setOutputEncoding(String)}.
     * 
     * <li><p>{@code "url_escaping_charset"}:
     * See {link #setURLEscapingCharset(String)}.
     * 
     * <li><p>{@code "auto_flush"}:
     * See {link #setAutoFlush(boolean)}.
     * Since 2.3.17.
     * <br>String value: {@code "true"}, {@code "false"}, {@code "y"},  etc.
     * 
     * <li><p>{@code "auto_import"}:
     * See {link Configuration#setAutoImports(Map)}
     * <br>String value is something like:
     * <br>{@code /lib/form.ftl as f, /lib/widget as w, "/lib/odd name.ftl" as odd}
     * 
     * <li><p>{@code "auto_include"}: Sets the list of auto-includes.
     * See {link Configuration#setAutoIncludes(List)}
     * <br>String value is something like:
     * <br>{@code /include/common.ftl, "/include/evil name.ftl"}
     * 
     * <li><p>{@code "lazy_auto_imports"}:
     * See {link Configuration#setLazyAutoImports(Boolean)}.
     * <br>String value: {@code "true"}, {@code "false"} (also the equivalents: {@code "yes"}, {@code "no"},
     * {@code "t"}, {@code "f"}, {@code "y"}, {@code "n"}), case insensitive. Also can be {@code "null"}.
     * 
     * <li><p>{@code "lazy_imports"}:
     * See {link Configuration#setLazyImports(boolean)}.
     * <br>String value: {@code "true"}, {@code "false"} (also the equivalents: {@code "yes"}, {@code "no"},
     * {@code "t"}, {@code "f"}, {@code "y"}, {@code "n"}), case insensitive.
     * 
     * <li><p>{@code "new_builtin_class_resolver"}:
     * See {link #setNewBuiltinClassResolver(TemplateClassResolver)}.
     * Since 2.3.17.
     * The value must be one of these (ignore the quotation marks):
     * <ol>
     * <li><p>{@code "unrestricted"}:
     * Use {link TemplateClassResolver#UNRESTRICTED_RESOLVER}
     * <li><p>{@code "safer"}:
     * Use {link TemplateClassResolver#SAFER_RESOLVER}
     * <li><p>{@code "allows_nothing"} (or {@code "allowsNothing"}):
     * Use {link TemplateClassResolver#ALLOWS_NOTHING_RESOLVER}
     * <li><p>Something that contains colon will use
     * {link OptInTemplateClassResolver} and is expected to
     * store comma separated values (possibly quoted) segmented
     * with {@code "allowed_classes:"} (or {@code "allowedClasses:"}) and/or
     * {@code "trusted_templates:"} (or {@code "trustedTemplates:"}). Examples of valid values:
     * <p>
     * <table style="width: auto; border-collapse: collapse" border="1"
     * summary="trusted_template value examples">
     * <tr>
     * <th>Setting value
     * <th>Meaning
     * <tr>
     * <td>
     * {@code allowed_classes: com.example.C1, com.example.C2,
     * trusted_templates: lib/*, safe.ftl}
     * <td>
     * Only allow instantiating the {@code com.example.C1} and
     * {@code com.example.C2} classes. But, allow templates
     * within the {@code lib/} directory (like
     * {@code lib/foo/bar.ftl}) and template {@code safe.ftl}
     * (that does not match {@code foo/safe.ftl}, only
     * exactly {@code safe.ftl}) to instantiate anything
     * that {link TemplateClassResolver#SAFER_RESOLVER} allows.
     * <tr>
     * <td>
     * {@code allowed_classes: com.example.C1, com.example.C2}
     * <td>Only allow instantiating the {@code com.example.C1} and
     * {@code com.example.C2} classes. There are no
     * trusted templates.
     * <tr>
     * <td>
     * {@code trusted_templates: lib/*, safe.ftl}
     * <td>
     * Do not allow instantiating any classes, except in
     * templates inside {@code lib/} or in template
     * {@code safe.ftl}.
     * </table>
     * 
     * <p>For more details see {link OptInTemplateClassResolver}.
     * 
     * <li><p>Otherwise if the value contains dot, it's interpreted as an <a href="#fm_obe">object builder
     * expression</a>.
     * </ol>
     * 
     * <li><p>{@code "show_error_tips"}:
     * See {link #setShowErrorTips(boolean)}.
     * Since 2.3.21.
     * <br>String value: {@code "true"}, {@code "false"}, {@code "y"},  etc.
     * 
     * <li><p>{@code api_builtin_enabled}:
     * See {link #setAPIBuiltinEnabled(boolean)}.
     * Since 2.3.22.
     * <br>String value: {@code "true"}, {@code "false"}, {@code "y"},  etc.
     * 
     * </ul>
     * 
     * <p>{link Configuration} (a subclass of {link Configurable}) also understands these:</p>
     * <ul>
     * <li><p>{@code "auto_escaping"}:
     * See {link Configuration#setAutoEscapingPolicy(int)}
     * <br>String value: {@code "enable_if_default"} or {@code "enableIfDefault"} for
     * {link Configuration#ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY},
     * {@code "enable_if_supported"} or {@code "enableIfSupported"} for
     * {link Configuration#ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY}
     * {@code "disable"} for {link Configuration#DISABLE_AUTO_ESCAPING_POLICY}.
     * 
     * <li><p>{@code "default_encoding"}:
     * See {link Configuration#setDefaultEncoding(String)}; since 2.3.26 also accepts value "JVM default"
     * (not case sensitive) to set the Java environment default value.
     * <br>As the default value is the system default, which can change
     * from one server to another, <b>you should always set this!</b>
     * 
     * <li><p>{@code "localized_lookup"}:
     * See {link Configuration#setLocalizedLookup}.
     * <br>String value: {@code "true"}, {@code "false"} (also the equivalents: {@code "yes"}, {@code "no"},
     * {@code "t"}, {@code "f"}, {@code "y"}, {@code "n"}).
     * Case insensitive.
     * 
     * <li><p>{@code "output_format"}:
     * See {link Configuration#setOutputFormat(OutputFormat)}.
     * <br>String value: {@code "default"} (case insensitive) for the default, or an
     * <a href="#fm_obe">object builder expression</a> that gives an {link OutputFormat}, for example
     * {@code HTMLOutputFormat} or {@code XMLOutputFormat}.
     * 
     * <li><p>{@code "registered_custom_output_formats"}:
     * See {link Configuration#setRegisteredCustomOutputFormats(Collection)}.
     * <br>String value: an <a href="#fm_obe">object builder expression</a> that gives a {link List} of
     * {link OutputFormat}-s.
     * Example: {@code [com.example.MyOutputFormat(), com.example.MyOtherOutputFormat()]}
     * 
     * <li><p>{@code "strict_syntax"}:
     * See {link Configuration#setStrictSyntaxMode}. Deprecated.
     * <br>String value: {@code "true"}, {@code "false"}, {@code yes}, etc.
     * 
     * <li><p>{@code "whitespace_stripping"}:
     * See {link Configuration#setWhitespaceStripping}.
     * <br>String value: {@code "true"}, {@code "false"}, {@code yes}, etc.
     * 
     * <li><p>{@code "cache_storage"}:
     * See {link Configuration#setCacheStorage}.
     * <br>String value: If the value contains dot, then it's interpreted as an <a href="#fm_obe">object builder
     * expression</a>.
     * If the value does not contain dot,
     * then a {link freemarker.cache.MruCacheStorage} will be used with the
     * maximum strong and soft sizes specified with the setting value. Examples
     * of valid setting values:
     * 
     * <table style="width: auto; border-collapse: collapse" border="1" summary="cache_storage value examples">
     * <tr><th>Setting value<th>max. strong size<th>max. soft size
     * <tr><td>{@code "strong:50, soft:500"}<td>50<td>500
     * <tr><td>{@code "strong:100, soft"}<td>100<td>{@code Integer.MAX_VALUE}
     * <tr><td>{@code "strong:100"}<td>100<td>0
     * <tr><td>{@code "soft:100"}<td>0<td>100
     * <tr><td>{@code "strong"}<td>{@code Integer.MAX_VALUE}<td>0
     * <tr><td>{@code "soft"}<td>0<td>{@code Integer.MAX_VALUE}
     * </table>
     * 
     * <p>The value is not case sensitive. The order of <tt>soft</tt> and <tt>strong</tt>
     * entries is not significant.
     * 
     * <li><p>{@code "template_update_delay"}:
     * Template update delay in <b>seconds</b> (not in milliseconds) if no unit is specified; see
     * {link Configuration#setTemplateUpdateDelayMilliseconds(long)} for more.
     * <br>String value: Valid positive integer, optionally followed by a time unit (recommended). The default
     * unit is seconds. It's strongly recommended to specify the unit for clarity, like in "500 ms" or "30 s".
     * Supported units are: "s" (seconds), "ms" (milliseconds), "m" (minutes), "h" (hours). The whitespace between
     * the unit and the number is optional. Units are only supported since 2.3.23.
     * 
     * <li><p>{@code "tag_syntax"}:
     * See {link Configuration#setTagSyntax(int)}.
     * <br>String value: Must be one of
     * {@code "auto_detect"}, {@code "angle_bracket"}, and {@code "square_bracket"} (like {@code [#if x]}).
     * <br>Note that setting the {@code "tagSyntax"} to {@code "square_bracket"} does <em>not</em> change
     * <code>${x}</code> to {@code [=...]}; that's <em>interpolation</em> syntax, so use the
     * {@code "interpolation_syntax"} setting for that, not this setting.
     * 
     * <li><p>{@code "interpolation_syntax"} (since 2.3.28):
     * See {link Configuration#setInterpolationSyntax(int)}.
     * <br>String value: Must be one of
     * {@code "legacy"}, {@code "dollar"}, and {@code "square_bracket"} (like {@code [=x]}).
     * <br>Note that setting the {@code "interpolation_syntax"} to {@code "square_bracket"} does <em>not</em>
     * change {@code <#if x>} to {@code [#if x]}; that's <em>tag</em> syntax, so use the
     * {@code "tag_syntax"} setting for that, not this setting.
     * 
     * <li><p>{@code "naming_convention"}:
     * See {link Configuration#setNamingConvention(int)}.
     * <br>String value: Must be one of
     * {@code "auto_detect"}, {@code "legacy"}, and {@code "camel_case"}.
     * 
     * <li><p>{@code "incompatible_improvements"}:
     * See {link Configuration#setIncompatibleImprovements(Version)}.
     * <br>String value: version number like {@code 2.3.20}.
     * 
     * <li><p>{@code "incompatible_enhancements"}:
     * See: {link Configuration#setIncompatibleEnhancements(String)}.
     * This setting name is deprecated, use {@code "incompatible_improvements"} instead.
     * 
     * <li><p>{@code "recognize_standard_file_extensions"}:
     * See {link Configuration#setRecognizeStandardFileExtensions(boolean)}.
     * <br>String value: {@code "default"} (case insensitive) for the default, or {@code "true"}, {@code "false"},
     * {@code yes}, etc.
     * 
     * <li><p>{@code "template_configurations"}:
     * See: {link Configuration#setTemplateConfigurations(freemarker.cache.TemplateConfigurationFactory)}.
     * <br>String value: Interpreted as an <a href="#fm_obe">object builder expression</a>,
     * can be {@code null}.
     * 
     * <li><p>{@code "template_loader"}:
     * See: {link Configuration#setTemplateLoader(TemplateLoader)}.
     * <br>String value: {@code "default"} (case insensitive) for the default, or else interpreted as an
     * <a href="#fm_obe">object builder expression</a>. {@code "null"} is also allowed since 2.3.26.
     * 
     * <li><p>{@code "template_lookup_strategy"}:
     * See: {link Configuration#setTemplateLookupStrategy(freemarker.cache.TemplateLookupStrategy)}.
     * <br>String value: {@code "default"} (case insensitive) for the default, or else interpreted as an
     * <a href="#fm_obe">object builder expression</a>.
     * 
     * <li><p>{@code "template_name_format"}:
     * See: {link Configuration#setTemplateNameFormat(freemarker.cache.TemplateNameFormat)}.
     * <br>String value: {@code "default"} (case insensitive) for the default, {@code "default_2_3_0"}
     * for {link freemarker.cache.TemplateNameFormat#DEFAULT_2_3_0}, {@code "default_2_4_0"} for
     * {link freemarker.cache.TemplateNameFormat#DEFAULT_2_4_0}.
     * </ul>
     * 
     * <p><a name="fm_obe"></a>Regarding <em>object builder expressions</em> (used by the setting values where it was
     * indicated):
     * <ul>
     * <li><p>Before FreeMarker 2.3.21 it had to be a fully qualified class name, and nothing else.</li>
     * <li><p>Since 2.3.21, the generic syntax is:
     * <tt><i>className</i>(<i>constrArg1</i>, <i>constrArg2</i>, ... <i>constrArgN</i>,
     * <i>propName1</i>=<i>propValue1</i>, <i>propName2</i>=<i>propValue2</i>, ...
     * <i>propNameN</i>=<i>propValueN</i>)</tt>,
     * where
     * <tt><i>className</i></tt> is the fully qualified class name of the instance to create (except if we have
     * builder class or <tt>INSTANCE</tt> field around, but see that later),
     * <tt><i>constrArg</i></tt>-s are the values of constructor arguments,
     * and <tt><i>propName</i>=<i>propValue</i></tt>-s set JavaBean properties (like <tt>x=1</tt> means
     * <tt>setX(1)</tt>) on the created instance. You can have any number of constructor arguments and property
     * setters, including 0. Constructor arguments must precede any property setters.
     * </li>
     * <li>
     * Example: <tt>com.example.MyObjectWrapper(1, 2, exposeFields=true, cacheSize=5000)</tt> is nearly
     * equivalent with this Java code:
     * <tt>obj = new com.example.MyObjectWrapper(1, 2); obj.setExposeFields(true); obj.setCacheSize(5000);</tt>
     * </li>
     * <li>
     * <p>If you have no constructor arguments and property setters, and the <tt><i>className</i></tt> class has
     * a public static {@code INSTANCE} field, the value of that filed will be the value of the expression, and
     * the constructor won't be called. Note that if you use the backward compatible
     * syntax, where these's no parenthesis after the class name, then it will not look for {@code INSTANCE}.
     * </li>
     * <li>
     * <p>If there exists a class named <tt><i>className</i>Builder</tt>, then that class will be instantiated
     * instead with the given constructor arguments, and the JavaBean properties of that builder instance will be
     * set. After that, the public <tt>build()</tt> method of the instance will be called, whose return value
     * will be the value of the whole expression. (The builder class and the <tt>build()</tt> method is simply
     * found by name, there's no special interface to implement.) Note that if you use the backward compatible
     * syntax, where these's no parenthesis after the class name, then it will not look for builder class. Note
     * that if you have a builder class, you don't actually need a <tt><i>className</i></tt> class (since 2.3.24);
     * after all, <tt><i>className</i>Builder.build()</tt> can return any kind of object.
     * </li>
     * <li>
     * <p>Currently, the values of arguments and properties can only be one of these:
     * <ul>
     * <li>A numerical literal, like {@code 123} or {@code -1.5}. The value will be automatically converted to
     * the type of the target (just like in FTL). However, a target type is only available if the number will
     * be a parameter to a method or constructor, not when it's a value (or key) in a {@code List} or
     * {@code Map} literal. Thus in the last case the type of number will be like in Java language, like
     * {@code 1} is an {@code int}, and {@code 1.0} is a {@code double}, and {@code 1.0f} is a {@code float},
     * etc. In all cases, the standard Java type postfixes can be used ("f", "d", "l"), plus "bd" for
     * {@code BigDecimal} and "bi" for {@code BigInteger}.</li>
     * <li>A boolean literal: {@code true} or {@code false}
     * <li>The null literal: {@code null}
     * <li>A string literal with FTL syntax, except that  it can't contain <tt>${...}</tt>-s and
     * <tt>#{...}</tt>-s. Examples: {@code "Line 1\nLine 2"} or {@code r"C:\temp"}.
     * <li>A list literal (since 2.3.24) with FTL-like syntax, for example {@code [ 'foo', 2, true ]}.
     * If the parameter is expected to be array, the list will be automatically converted to array.
     * The list items can be any kind of expression, like even object builder expressions.
     * <li>A map literal (since 2.3.24) with FTL-like syntax, for example <code>{ 'foo': 2, 'bar': true }</code>.
     * The keys and values can be any kind of expression, like even object builder expressions.
     * The resulting Java object will be a {link Map} that keeps the item order ({link LinkedHashMap} as
     * of this writing).
     * <li>A reference to a public static filed, like {@code Configuration.AUTO_DETECT_TAG_SYNTAX} or
     * {@code com.example.MyClass.MY_CONSTANT}.
     * <li>An object builder expression. That is, object builder expressions can be nested into each other.
     * </ul>
     * </li>
     * <li>
     * The same kind of expression as for parameters can also be used as top-level expressions (though it's
     * rarely useful, apart from using {@code null}).
     * </li>
     * <li>
     * <p>The top-level object builder expressions may omit {@code ()}. In that case, for backward compatibility,
     * the {@code INSTANCE} field and the builder class is not searched, so the instance will be always
     * created with its parameterless constructor. (This behavior will possibly change in 2.4.) The {@code ()}
     * can't be omitted for nested expressions.
     * </li>
     * <li>
     * <p>The following classes can be referred to with simple (unqualified) name instead of fully qualified name:
     * {link DefaultObjectWrapper}, {link BeansWrapper}, {link SimpleObjectWrapper}, {link Locale},
     * {link TemplateConfiguration}, {link PathGlobMatcher}, {link FileNameGlobMatcher}, {link PathRegexMatcher},
     * {link AndMatcher}, {link OrMatcher}, {link NotMatcher}, {link ConditionalTemplateConfigurationFactory},
     * {link MergingTemplateConfigurationFactory}, {link FirstMatchTemplateConfigurationFactory},
     * {link HTMLOutputFormat}, {link XMLOutputFormat}, {link RTFOutputFormat}, {link PlainTextOutputFormat},
     * {link UndefinedOutputFormat}, {link Configuration}.
     * </li>
     * <li>
     * <p>{link TimeZone} objects can be created like {@code TimeZone("UTC")}, despite that there's no a such
     * constructor (since 2.3.24).
     * </li>
     * <li>
     * <p>The classes and methods that the expression meant to access must be all public.
     * </li>
     * </ul>
     * 
     * @param {String} name  the name of the setting.
     * @param {String} value the string that describes the new value of the setting.
     * @throws UnknownSettingException if the name is wrong.
     * @throws TemplateException       if the new value of the setting can't be set for any other reasons.
     */
    public setSetting(name : string, value : string) {
        const Configuration = require('../template/Configuration').Configuration;
        const StringUtil = require('../template/utility/StringUtil').StringUtil;
        const TemplateExceptionHandler = require('../template/TemplateExceptionHandler').TemplateExceptionHandler;
        const _ObjectBuilderSettingEvaluator = require('../core/_ObjectBuilderSettingEvaluator')._ObjectBuilderSettingEvaluator;
        const _CoreAPI = require('../core/_CoreAPI')._CoreAPI;
        const TemplateNumberFormatFactory = require('../core/TemplateNumberFormatFactory').TemplateNumberFormatFactory;
        const TemplateDateFormatFactory = require('../core/TemplateDateFormatFactory').TemplateDateFormatFactory;
        const _SettingEvaluationEnvironment = require('../core/_SettingEvaluationEnvironment')._SettingEvaluationEnvironment;
        const AttemptExceptionReporter = require('../template/AttemptExceptionReporter').AttemptExceptionReporter;
        const ArithmeticEngine = require('../core/ArithmeticEngine').ArithmeticEngine;
        const SimpleObjectWrapper = require('../template/SimpleObjectWrapper').SimpleObjectWrapper;
        const BeansWrapper = require('../ext/beans/BeansWrapper').BeansWrapper;
        let unknown : boolean = false;
        try {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.LOCALE_KEY_$LI$(),name))) {
                if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(Configurable.JVM_DEFAULT, value)) {
                    this.setLocale(/* getDefault */(global.DEFAULT_LOCALE));
                } else {
                    this.setLocale(StringUtil.deduceLocale(value));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.NUMBER_FORMAT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.NUMBER_FORMAT_KEY_CAMEL_CASE,name))) {
                this.setNumberFormat(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.CUSTOM_NUMBER_FORMATS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.CUSTOM_NUMBER_FORMATS_KEY_CAMEL_CASE,name))) {
                let map : Map<any, any> = <Map<any, any>><any>_ObjectBuilderSettingEvaluator.eval(value, "java.util.Map", false, _SettingEvaluationEnvironment.getCurrent());
                _CoreAPI.checkSettingValueItemsType("Map keys", String, /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>map));
                _CoreAPI.checkSettingValueItemsType("Map values", TemplateNumberFormatFactory, /* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>map));
                this.setCustomNumberFormats(map);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.TIME_FORMAT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.TIME_FORMAT_KEY_CAMEL_CASE,name))) {
                this.setTimeFormat(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.DATE_FORMAT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.DATE_FORMAT_KEY_CAMEL_CASE,name))) {
                this.setDateFormat(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.DATETIME_FORMAT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.DATETIME_FORMAT_KEY_CAMEL_CASE,name))) {
                this.setDateTimeFormat(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.CUSTOM_DATE_FORMATS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.CUSTOM_DATE_FORMATS_KEY_CAMEL_CASE,name))) {
                let map : Map<any, any> = <Map<any, any>><any>_ObjectBuilderSettingEvaluator.eval(value, "java.util.Map", false, _SettingEvaluationEnvironment.getCurrent());
                _CoreAPI.checkSettingValueItemsType("Map keys", String, /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>map));
                _CoreAPI.checkSettingValueItemsType("Map values", TemplateDateFormatFactory, /* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>map));
                this.setCustomDateFormats(map);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.TIME_ZONE_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.TIME_ZONE_KEY_CAMEL_CASE,name))) {
                this.setTimeZone(this.parseTimeZoneSettingValue(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_CAMEL_CASE,name))) {
                this.setSQLDateAndTimeTimeZone(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,"null"))?null:this.parseTimeZoneSettingValue(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.CLASSIC_COMPATIBLE_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.CLASSIC_COMPATIBLE_KEY_CAMEL_CASE,name))) {
                let firstChar : string;
                if(value != null && value.length > 0) {
                    firstChar = value.charAt(0);
                } else {
                    firstChar = String.fromCharCode(0);
                }
                if(Character.isDigit(firstChar) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '+'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '-'.charCodeAt(0)) {
                    this.setClassicCompatibleAsInt(/* parseInt */parseInt(value));
                } else {
                    this.setClassicCompatible(value != null && StringUtil.getYesNo(value));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_CAMEL_CASE,name))) {
                if(value.indexOf('.') === -1) {
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("debug", value)) {
                        this.setTemplateExceptionHandler(TemplateExceptionHandler.DEBUG_HANDLER);
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("html_debug", value) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("htmlDebug",value))) {
                        this.setTemplateExceptionHandler(TemplateExceptionHandler.HTML_DEBUG_HANDLER);
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("ignore", value)) {
                        this.setTemplateExceptionHandler(TemplateExceptionHandler.IGNORE_HANDLER);
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("rethrow", value)) {
                        this.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(Configurable.DEFAULT, value) && (this != null && this instanceof <any>Configuration)) {
                        (</*Configuration*/any>this).unsetTemplateExceptionHandler();
                    } else {
                        throw this.invalidSettingValueException(name, value);
                    }
                } else {
                    this.setTemplateExceptionHandler(/*<TemplateExceptionHandler>*/<any>_ObjectBuilderSettingEvaluator.eval(value, "freemarker.template.TemplateExceptionHandler", false, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY_CAMEL_CASE,name))) {
                if(value.indexOf('.') === -1) {
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("log_error", value) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("logError",value))) {
                        this.setAttemptExceptionReporter(AttemptExceptionReporter.LOG_ERROR_REPORTER);
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("log_warn", value) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("logWarn",value))) {
                        this.setAttemptExceptionReporter(AttemptExceptionReporter.LOG_WARN_REPORTER);
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(Configurable.DEFAULT, value) && (ClassUtil.isInstanceOf(this, 'freemarker.template.Config'))) {
                        (</*Configuration*/any>this).unsetAttemptExceptionReporter();
                    } else {
                        throw this.invalidSettingValueException(name, value);
                    }
                } else {
                    this.setAttemptExceptionReporter(/*<AttemptExceptionReporter>*/<any>_ObjectBuilderSettingEvaluator.eval(value, "freemarker.template.AttemptExceptionReporter", false, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.ARITHMETIC_ENGINE_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.ARITHMETIC_ENGINE_KEY_CAMEL_CASE,name))) {
                if(value.indexOf('.') === -1) {
                    if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("bigdecimal", value)) {
                        this.setArithmeticEngine(ArithmeticEngine.BIGDECIMAL_ENGINE_$LI$());
                    } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("conservative", value)) {
                        this.setArithmeticEngine(ArithmeticEngine.CONSERVATIVE_ENGINE_$LI$());
                    } else {
                        throw this.invalidSettingValueException(name, value);
                    }
                } else {
                    this.setArithmeticEngine(</*ArithmeticEngine*/any>_ObjectBuilderSettingEvaluator.eval(value, ArithmeticEngine, false, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.OBJECT_WRAPPER_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.OBJECT_WRAPPER_KEY_CAMEL_CASE,name))) {
                if((Configurable.DEFAULT.toUpperCase() === value.toUpperCase())) {
                    if(this != null && this instanceof <any>Configuration) {
                        (</*Configuration*/any>this).unsetObjectWrapper();
                    } else {
                        this.setObjectWrapper(Configuration.getDefaultObjectWrapper(Configuration.VERSION_2_3_0_$LI$()));
                    }
                } else if(Configurable.DEFAULT_2_3_0.toUpperCase() === value.toUpperCase()) {
                    this.setObjectWrapper(Configuration.getDefaultObjectWrapper(Configuration.VERSION_2_3_0_$LI$()));
                } else if("simple".toUpperCase() === value.toUpperCase()) {
                    this.setObjectWrapper(new SimpleObjectWrapper());
                } else if("beans".toUpperCase() === value.toUpperCase()) {
                    this.setObjectWrapper(new BeansWrapper());
                } else {
                    this.setObjectWrapper(/*<ObjectWrapper>*/<any>_ObjectBuilderSettingEvaluator.eval(value, "freemarker.template.ObjectWrapper", false, _SettingEvaluationEnvironment.getCurrent()));
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.BOOLEAN_FORMAT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.BOOLEAN_FORMAT_KEY_CAMEL_CASE,name))) {
                this.setBooleanFormat(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.OUTPUT_ENCODING_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.OUTPUT_ENCODING_KEY_CAMEL_CASE,name))) {
                this.setOutputEncoding(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.URL_ESCAPING_CHARSET_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.URL_ESCAPING_CHARSET_KEY_CAMEL_CASE,name))) {
                this.setURLEscapingCharset(value);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.STRICT_BEAN_MODELS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.STRICT_BEAN_MODELS_KEY_CAMEL_CASE,name))) {
                this.setStrictBeanModels(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.AUTO_FLUSH_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.AUTO_FLUSH_KEY_CAMEL_CASE,name))) {
                this.setAutoFlush(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.SHOW_ERROR_TIPS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.SHOW_ERROR_TIPS_KEY_CAMEL_CASE,name))) {
                this.setShowErrorTips(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.API_BUILTIN_ENABLED_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.API_BUILTIN_ENABLED_KEY_CAMEL_CASE,name))) {
                this.setAPIBuiltinEnabled(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_CAMEL_CASE,name))) {
                const TemplateClassResolver = require('./TemplateClassResolver').TemplateClassResolver;
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("unrestricted",value))) {
                    this.setNewBuiltinClassResolver(TemplateClassResolver.UNRESTRICTED_RESOLVER);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("safer",value))) {
                    this.setNewBuiltinClassResolver(TemplateClassResolver.SAFER_RESOLVER);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("allows_nothing",value)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("allowsNothing",value))) {
                    this.setNewBuiltinClassResolver(TemplateClassResolver.ALLOWS_NOTHING_RESOLVER);
                } else if(value.indexOf(":") !== -1) {
                    let segments : Array<any> = this.parseAsSegmentedList(value);
                    let allowedClasses : Array<any> = null;
                    let trustedTemplates : Array<any> = null;
                    for(let i : number = 0; i < /* size */(<number>segments.length); i++) {
                        let kv : Configurable.KeyValuePair = <Configurable.KeyValuePair>/* get */segments[i];
                        let segmentKey : string = <string>kv.getKey();
                        let segmentValue : Array<any> = <Array<any>><any>kv.getValue();
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(segmentKey,Configurable.ALLOWED_CLASSES_SNAKE_CASE)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(segmentKey,Configurable.ALLOWED_CLASSES_CAMEL_CASE))) {
                            allowedClasses = <any>(segmentValue.slice(0));
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(segmentKey,Configurable.TRUSTED_TEMPLATES_SNAKE_CASE)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(segmentKey,Configurable.TRUSTED_TEMPLATES_CAMEL_CASE))) {
                            trustedTemplates = segmentValue;
                        } else {
                            throw new (require('./ParseException').ParseException)("Unrecognized list segment key: " + StringUtil.jQuote$java_lang_Object(segmentKey) + ". Supported keys are: \"" + Configurable.ALLOWED_CLASSES_SNAKE_CASE + "\", \"" + Configurable.ALLOWED_CLASSES_CAMEL_CASE + "\", \"" + Configurable.TRUSTED_TEMPLATES_SNAKE_CASE + "\", \"" + Configurable.TRUSTED_TEMPLATES_CAMEL_CASE + "\". ", 0, 0);
                        }
                    }
                    this.setNewBuiltinClassResolver(new (require('./OptInTemplateClassResolver').OptInTemplateClassResolver)(allowedClasses, trustedTemplates));
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("allow_nothing",value))) {
                    throw Object.defineProperty(new Error("The correct value would be: allows_nothing"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("allowNothing",value))) {
                    throw Object.defineProperty(new Error("The correct value would be: allowsNothing"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                } else if(value.indexOf('.') !== -1) {
                    this.setNewBuiltinClassResolver(/*<TemplateClassResolver>*/<any>_ObjectBuilderSettingEvaluator.eval(value, "freemarker.core.TemplateClassResolver", false, _SettingEvaluationEnvironment.getCurrent()));
                } else {
                    throw this.invalidSettingValueException(name, value);
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_CAMEL_CASE,name))) {
                this.setLogTemplateExceptions(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY_CAMEL_CASE,name))) {
                this.setWrapUncheckedExceptions(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.LAZY_AUTO_IMPORTS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.LAZY_AUTO_IMPORTS_KEY_CAMEL_CASE,name))) {
                this.setLazyAutoImports(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,Configurable.NULL))?null:StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.LAZY_IMPORTS_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.LAZY_IMPORTS_KEY_CAMEL_CASE,name))) {
                this.setLazyImports(StringUtil.getYesNo(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.AUTO_INCLUDE_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.AUTO_INCLUDE_KEY_CAMEL_CASE,name))) {
                this.setAutoIncludes(this.parseAsList(value));
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.AUTO_IMPORT_KEY_SNAKE_CASE,name)) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(Configurable.AUTO_IMPORT_KEY_CAMEL_CASE,name))) {
                this.setAutoImports(this.parseAsImportList(value));
            } else {
                unknown = true;
            }
        } catch(e) {
            throw this.settingValueAssignmentException(name, value, e);
        }
        if(unknown) {
            throw this.unknownSettingException(name);
        }
    }

    /**
     * Returns the valid setting names that aren't {link Configuration}-only.
     * 
     * @param {boolean} camelCase If we want the setting names with camel case naming convention, or with snake case (legacy) naming
     * convention.
     * <p>
     * see Configuration#getSettingNames(boolean)
     * @since 2.3.24
     * @return {Set}
     */
    public getSettingNames(camelCase : boolean) : Set<any> {
        const _SortedArraySet = require('./_SortedArraySet')._SortedArraySet;
        return new _SortedArraySet(camelCase?Configurable.SETTING_NAMES_CAMEL_CASE_$LI$():Configurable.SETTING_NAMES_SNAKE_CASE_$LI$());
    }

    parseTimeZoneSettingValue(value : string) : string {
        let tz : string;
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(Configurable.JVM_DEFAULT, value)) {
            tz = /* getDefault */"UTC";
        } else {
            tz = /* getTimeZone */value;
        }
        return tz;
    }

    /**
     * @deprecated Set this on the {link ObjectWrapper} itself.
     * @param {boolean} strict
     */
    public setStrictBeanModels(strict : boolean) {
        const BeansWrapper = require('../ext/beans/BeansWrapper').BeansWrapper;
        if(!(this.objectWrapper != null && this.objectWrapper instanceof <any>BeansWrapper)) {
            throw Object.defineProperty(new Error("The value of the " + Configurable.OBJECT_WRAPPER_KEY_$LI$() + " setting isn\'t a " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(BeansWrapper) + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        (/*<BeansWrapper>*/<any>this.objectWrapper).setStrict(strict);
    }

    /**
     * Returns the textual representation of a setting.
     * 
     * @param {String} key the setting key. Can be any of standard <tt>XXX_KEY</tt>
     * constants, or a custom key.
     * @deprecated It's not possible in general to convert setting values to string,
     * and thus it's impossible to ensure that {link #setSetting(String, String)} will work with
     * the returned value correctly.
     * @return {String}
     */
    public getSetting(key : string) : string {
        return /* getProperty */this.properties.get(key);
    }

    /**
     * This meant to return the String-to-String <code>Map</code> of the
     * settings. So it actually should return a <code>Properties</code> object,
     * but it doesn't by mistake. The returned <code>Map</code> is read-only,
     * but it will reflect the further configuration changes (aliasing effect).
     * 
     * @deprecated This method was always defective, and certainly it always
     * will be. Don't use it. (Simply, it's hardly possible in general to
     * convert setting values to text in a way that ensures that
     * {link #setSettings(Properties)} will work with them correctly.)
     * @return {Map}
     */
    public getSettings() : Map<any, any> {
        return this.properties;
    }

    getEnvironment() : /*Environment*/any {
        const Environment = require('./Environment').Environment;
        return (ClassUtil.isInstanceOf(this, 'freemarker.core.Environment'))?</*Environment*/any>this:Environment.getCurrentEnvironment();
    }

    /**
     * Creates the exception that should be thrown when a setting name isn't recognized.
     * @param {String} name
     * @return {TemplateException}
     */
    unknownSettingException(name : string) : /*TemplateException*/any {
        return new Configurable.UnknownSettingException(this.getEnvironment(), name, this.getCorrectedNameForUnknownSetting(name));
    }

    /**
     * @param {String} name The wrong name
     * @return {String} The corrected name, or {@code null} if there's no known correction
     * @since 2.3.21
     */
    getCorrectedNameForUnknownSetting(name : string) : string {
        return null;
    }

    /**
     * @since 2.3.21
     * @param {String} name
     * @param {String} value
     * @param {Error} cause
     * @return {TemplateException}
     */
    settingValueAssignmentException(name : string, value : string, cause : Error) : /*TemplateException*/any {
        return new Configurable.SettingValueAssignmentException(this.getEnvironment(), name, value, cause);
    }

    invalidSettingValueException(name : string, value : string) : /*TemplateException*/any {
        return new (require('./_MiscTemplateException')._MiscTemplateException)(this.getEnvironment(), "Invalid value for setting ", new (require('./_DelayedJQuote')._DelayedJQuote)(name), ": ", new (require('./_DelayedJQuote')._DelayedJQuote)(value));
    }

    public setSettings$java_util_Properties(props : Map<any, any>) {
        const _SettingEvaluationEnvironment = (require('./_SettingEvaluationEnvironment')._SettingEvaluationEnvironment);
        let prevEnv : /*_SettingEvaluationEnvironment*/any = _SettingEvaluationEnvironment.startScope();
        try {
            for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>props)); it.hasNext(); ) {
                let key : string = <string>it.next();
                this.setSetting(key, /* getProperty */props.get(key).trim());
            }
        } finally {
            _SettingEvaluationEnvironment.endScope(prevEnv);
        }
    }

    /**
     * Set the settings stored in a <code>Properties</code> object.
     * 
     * @throws TemplateException if the <code>Properties</code> object contains
     * invalid keys, or invalid setting values, or any other error occurs
     * while changing the settings.
     * @param {Properties} props
     */
    public setSettings(props? : any) : any {
        if(((props != null && (props instanceof Map)) || props === null)) {
            return <any>this.setSettings$java_util_Properties(props);
        } else if(((props != null && props instanceof <any>InputStream) || props === null)) {
            return <any>this.setSettings$java_io_InputStream(props);
        } else throw new Error('invalid overload');
    }

    public setSettings$java_io_InputStream(propsIn : InputStream) {
        // let p : Map<any, any> = new Map<any, any>();
        // p.load(propsIn);
        // this.setSettings$java_util_Properties(p);
        throw new Error();
    }

    setCustomAttribute$java_lang_Object$java_lang_Object(key : any, value : any) {
        {
            /* put */this.customAttributes.set(key, value);
        }
    }

    public getCustomAttribute$java_lang_Object$freemarker_core_CustomAttribute(key : any, attr : /*CustomAttribute*/any) : any {
        {
            let o : any = /* get */this.customAttributes.get(key);
            if(o == null && !/* containsKey */this.customAttributes.has(key)) {
                o = attr.create();
                /* put */this.customAttributes.set(key, o);
            }
            return o;
        }
    }

    /**
     * Internal entry point for getting unnamed custom attributes.
     * <p>
     * see CustomAttribute
     * @param {Object} key
     * @param {CustomAttribute} attr
     * @return {Object}
     */
    public getCustomAttribute(key? : any, attr? : any) : any {
        if(((key != null) || key === null) && ((ClassUtil.isInstanceOf(attr, 'freemarker.core.CustomAttribute')) || attr === null)) {
            return <any>this.getCustomAttribute$java_lang_Object$freemarker_core_CustomAttribute(key, attr);
        } else if(((typeof key === 'string') || key === null) && attr === undefined) {
            return <any>this.getCustomAttribute$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    isCustomAttributeSet(key : any) : boolean {
        return /* containsKey */this.customAttributes.has(key);
    }

    /**
     * For internal usage only, copies the custom attributes set directly on this objects into another
     * {link Configurable}. The target {link Configurable} is assumed to be not seen be other thread than the current
     * one yet. (That is, the operation is not synchronized on the target {link Configurable}, only on the source
     * {link Configurable})
     * 
     * @since 2.3.24
     * @param {Configurable} target
     * @param {boolean} overwriteExisting
     */
    copyDirectCustomAttributes(target : Configurable, overwriteExisting : boolean) {
        {
            {
                let array134 = /* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>this.customAttributes);
                for(let index133=0; index133 < array134.length; index133++) {
                    let custAttrEnt = array134[index133];
                    {
                        let custAttrKey : any = custAttrEnt.getKey();
                        if(overwriteExisting || !target.isCustomAttributeSet(custAttrKey)) {
                            if(typeof custAttrKey === 'string') {
                                target.setCustomAttribute$java_lang_Object$java_lang_Object(<string>custAttrKey, custAttrEnt.getValue());
                            } else {
                                target.setCustomAttribute$java_lang_Object$java_lang_Object(custAttrKey, custAttrEnt.getValue());
                            }
                        }
                    }
                }
            }
        }
    }

    public setCustomAttribute$java_lang_String$java_lang_Object(name : string, value : any) {
        {
            /* put */this.customAttributes.set(name, value);
        }
    }

    /**
     * Sets a named custom attribute for this configurable.
     * 
     * @param {String} name  the name of the custom attribute
     * @param {Object} value the value of the custom attribute. You can set the value to
     * null, however note that there is a semantic difference between an
     * attribute set to null and an attribute that is not present, see
     * {link #removeCustomAttribute(String)}.
     */
    public setCustomAttribute(name? : any, value? : any) : any {
        if(((typeof name === 'string') || name === null) && ((value != null) || value === null)) {
            return <any>this.setCustomAttribute$java_lang_String$java_lang_Object(name, value);
        } else if(((name != null) || name === null) && ((value != null) || value === null)) {
            return <any>this.setCustomAttribute$java_lang_Object$java_lang_Object(name, value);
        } else throw new Error('invalid overload');
    }

    /**
     * Returns an array with names of all custom attributes defined directly
     * on this configurable. (That is, it doesn't contain the names of custom attributes
     * defined indirectly on its parent configurables.) The returned array is never null,
     * but can be zero-length.
     * The order of elements in the returned array is not defined and can change
     * between invocations.
     * @return {Array}
     */
    public getCustomAttributeNames() : Array<any> {
        {
            let names : Array<any> = <any>(/* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.customAttributes).slice(0));
            for(let iter : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(names); iter.hasNext(); ) {
                if(!(typeof iter.next() === 'string')) {
                    iter.remove();
                }
            }
            return <Array<any>>/* toArray */names.slice(0);
        }
    }

    /**
     * Removes a named custom attribute for this configurable. Note that this
     * is different than setting the custom attribute value to null. If you
     * set the value to null, {link #getCustomAttribute(String)} will return
     * null, while if you remove the attribute, it will return the value of
     * the attribute in the parent configurable (if there is a parent
     * configurable, that is).
     * 
     * @param {String} name the name of the custom attribute
     */
    public removeCustomAttribute(name : string) {
        {
            /* remove */this.customAttributes.delete(name);
        }
    }

    public getCustomAttribute$java_lang_String(name : string) : any {
        let retval : any;
        {
            retval = /* get */this.customAttributes.get(name);
            if(retval == null && /* containsKey */this.customAttributes.has(name)) {
                return null;
            }
        }
        if(retval == null && this.parent != null) {
            return this.parent.getCustomAttribute$java_lang_String(name);
        }
        return retval;
    }

    /**
     * Executes the auto-imports and auto-includes for the main template of this environment.
     * This is not meant to be called or overridden by code outside of FreeMarker.
     * @param {Environment} env
     */
    doAutoImportsAndIncludes(env : /*Environment*/any) {
        if(this.parent != null) this.parent.doAutoImportsAndIncludes(env);
    }

    parseAsList(text : string) : Array<any> {
        return new Configurable.SettingStringParser(text).parseAsList();
    }

    parseAsSegmentedList(text : string) : Array<any> {
        return new Configurable.SettingStringParser(text).parseAsSegmentedList();
    }

    parseAsImportList(text : string) : Map<any, any> {
        return new Configurable.SettingStringParser(text).parseAsImportList();
    }
}
Configurable["__class"] = "freemarker.core.Configurable";


export namespace Configurable {

    /**
     * The setting name was not recognized.
     * @extends _MiscTemplateException
     * @class
     */
    export class UnknownSettingException extends _MiscTemplateException {
        constructor(env : /*Environment*/any, name : string, correctedName : string) {
            super(env, "Unknown FreeMarker configuration setting: ", new (require('./_DelayedJQuote')._DelayedJQuote)(name), correctedName == null?"":[". You may meant: ", new (require('./_DelayedJQuote')._DelayedJQuote)(correctedName)]);
            (<any>Object).setPrototypeOf(this, UnknownSettingException.prototype);
        }
    }
    UnknownSettingException["__class"] = "freemarker.core.Configurable.UnknownSettingException";
    UnknownSettingException["__interfaces"] = ["java.io.Serializable"];



    /**
     * The setting name was recognized, but its value couldn't be parsed or the setting couldn't be set for some
     * other reason. This exception always has a cause exception.
     * 
     * @since 2.3.21
     * @extends _MiscTemplateException
     * @class
     */
    export class SettingValueAssignmentException extends _MiscTemplateException {
        constructor(env : /*Environment*/any, name : string, value : string, cause : Error) {
            super(cause, env, "Failed to set FreeMarker configuration setting ", new (require('./_DelayedJQuote')._DelayedJQuote)(name), " to value ", new (require('./_DelayedJQuote')._DelayedJQuote)(value), "; see cause exception.");
            (<any>Object).setPrototypeOf(this, SettingValueAssignmentException.prototype);
        }
    }
    SettingValueAssignmentException["__class"] = "freemarker.core.Configurable.SettingValueAssignmentException";
    SettingValueAssignmentException["__interfaces"] = ["java.io.Serializable"];



    export class KeyValuePair {
        key : any;

        value : any;

        constructor(key : any, value : any) {
            if(this.key===undefined) this.key = null;
            if(this.value===undefined) this.value = null;
            this.key = key;
            this.value = value;
        }

        getKey() : any {
            return this.key;
        }

        getValue() : any {
            return this.value;
        }
    }
    KeyValuePair["__class"] = "freemarker.core.Configurable.KeyValuePair";


    /**
     * Helper class for parsing setting values given with string.
     * @class
     */
    export class SettingStringParser {
        text : string;

        p : number;

        ln : number;

        constructor(text : string) {
            if(this.text===undefined) this.text = null;
            if(this.p===undefined) this.p = 0;
            if(this.ln===undefined) this.ln = 0;
            this.text = text;
            this.p = 0;
            this.ln = text.length;
        }

        parseAsSegmentedList() : Array<any> {
            let segments : Array<any> = <any>([]);
            let currentSegment : Array<any> = null;
            let c : string;
            while((true)) {
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) break;
                let item : string = this.fetchStringValue();
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ':'.charCodeAt(0)) {
                    currentSegment = <any>([]);
                    /* add */(segments.push(new Configurable.KeyValuePair(item, currentSegment))>0);
                } else {
                    if(currentSegment == null) {
                        throw new (require('./ParseException').ParseException)("The very first list item must be followed by \":\" so it will be the key for the following sub-list.", 0, 0);
                    }
                    /* add */(currentSegment.push(item)>0);
                }
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) break;
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ','.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ':'.charCodeAt(0)) throw new (require('./ParseException').ParseException)("Expected \",\" or \":\" or the end of text but found \"" + c + "\"", 0, 0);
                this.p++;
            }
            return segments;
        }

        parseAsList() : Array<any> {
            let c : string;
            let seq : Array<any> = <any>([]);
            while((true)) {
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) break;
                /* add */(seq.push(this.fetchStringValue())>0);
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) break;
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ','.charCodeAt(0)) throw new (require('./ParseException').ParseException)("Expected \",\" or the end of text but found \"" + c + "\"", 0, 0);
                this.p++;
            }
            return seq;
        }

        parseAsImportList() : Map<any, any> {
            const ParseException = (require('./ParseException').ParseException)
            let c : string;
            let map : Map<any, any> = <any>(new Map<any, any>());
            while((true)) {
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) break;
                let lib : string = this.fetchStringValue();
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) throw new ParseException("Unexpected end of text: expected \"as\"", 0, 0);
                let s : string = this.fetchKeyword();
                if(!/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "as")) throw new ParseException("Expected \"as\", but found " + (require('../template/utility/StringUtil').StringUtil).jQuote$java_lang_Object(s), 0, 0);
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) throw new ParseException("Unexpected end of text: expected gate hash name", 0, 0);
                let ns : string = this.fetchStringValue();
                /* put */map.set(ns, lib);
                c = this.skipWS();
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) break;
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ','.charCodeAt(0)) throw new ParseException("Expected \",\" or the end of text but found \"" + c + "\"", 0, 0);
                this.p++;
            }
            return map;
        }

        fetchStringValue() : string {
            let w : string = this.fetchWord();
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(w, "\'") || /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(w, "\"")) {
                w = w.substring(1, w.length - 1);
            }
            return (require('../template/utility/StringUtil').StringUtil).FTLStringLiteralDec(w);
        }

        fetchKeyword() : string {
            let w : string = this.fetchWord();
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(w, "\'") || /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(w, "\"")) {
                throw new (require('./ParseException').ParseException)("Keyword expected, but a string value found: " + w, 0, 0);
            }
            return w;
        }

        skipWS() : string {
            let c : string;
            while((this.p < this.ln)) {
                c = this.text.charAt(this.p);
                if(!Character.isWhitespace(c)) return c;
                this.p++;
            }
            return ' ';
        }

        fetchWord() : string {
            const ParseException = (require('./ParseException').ParseException);
            if(this.p === this.ln) throw new ParseException("Unexpeced end of text", 0, 0);
            let c : string = this.text.charAt(this.p);
            let b : number = this.p;
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\''.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0)) {
                let escaped : boolean = false;
                let q : string = c;
                this.p++;
                while((this.p < this.ln)) {
                    c = this.text.charAt(this.p);
                    if(!escaped) {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                            escaped = true;
                        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(q)) {
                            break;
                        }
                    } else {
                        escaped = false;
                    }
                    this.p++;
                }
                if(this.p === this.ln) {
                    throw new ParseException("Missing " + q, 0, 0);
                }
                this.p++;
                return this.text.substring(b, this.p);
            } else {
                do {
                    c = this.text.charAt(this.p);
                    if(!(Character.isLetterOrDigit(c) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '/'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '.'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '-'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '!'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '*'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '?'.charCodeAt(0))) break;
                    this.p++;
                } while((this.p < this.ln));
                if(b === this.p) {
                    throw new ParseException("Unexpected character: " + c, 0, 0);
                } else {
                    return this.text.substring(b, this.p);
                }
            }
        }
    }
    SettingStringParser["__class"] = "freemarker.core.Configurable.SettingStringParser";

}




Configurable.SETTING_NAMES_CAMEL_CASE_$LI$();

Configurable.SETTING_NAMES_SNAKE_CASE_$LI$();

Configurable.STRICT_BEAN_MODELS_$LI$();

Configurable.AUTO_INCLUDE_KEY_$LI$();

Configurable.AUTO_IMPORT_KEY_$LI$();

Configurable.LAZY_AUTO_IMPORTS_KEY_$LI$();

Configurable.LAZY_IMPORTS_KEY_$LI$();

Configurable.WRAP_UNCHECKED_EXCEPTIONS_KEY_$LI$();

Configurable.LOG_TEMPLATE_EXCEPTIONS_KEY_$LI$();

Configurable.API_BUILTIN_ENABLED_KEY_$LI$();

Configurable.SHOW_ERROR_TIPS_KEY_$LI$();

Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_$LI$();

Configurable.AUTO_FLUSH_KEY_$LI$();

Configurable.STRICT_BEAN_MODELS_KEY_$LI$();

Configurable.URL_ESCAPING_CHARSET_KEY_$LI$();

Configurable.OUTPUT_ENCODING_KEY_$LI$();

Configurable.BOOLEAN_FORMAT_KEY_$LI$();

Configurable.OBJECT_WRAPPER_KEY_$LI$();

Configurable.ARITHMETIC_ENGINE_KEY_$LI$();

Configurable.ATTEMPT_EXCEPTION_REPORTER_KEY_$LI$();

Configurable.TEMPLATE_EXCEPTION_HANDLER_KEY_$LI$();

Configurable.CLASSIC_COMPATIBLE_KEY_$LI$();

Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_$LI$();

Configurable.TIME_ZONE_KEY_$LI$();

Configurable.DATETIME_FORMAT_KEY_$LI$();

Configurable.CUSTOM_DATE_FORMATS_KEY_$LI$();

Configurable.DATE_FORMAT_KEY_$LI$();

Configurable.TIME_FORMAT_KEY_$LI$();

Configurable.CUSTOM_NUMBER_FORMATS_KEY_$LI$();

Configurable.NUMBER_FORMAT_KEY_$LI$();

Configurable.LOCALE_KEY_$LI$();
