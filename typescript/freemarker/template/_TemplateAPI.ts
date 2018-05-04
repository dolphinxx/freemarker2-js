/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { CacheStorage } from '../cache/CacheStorage';
import { TemplateLoader } from '../cache/TemplateLoader';
import { TemplateLookupStrategy } from '../cache/TemplateLookupStrategy';
import { TemplateNameFormat } from '../cache/TemplateNameFormat';
import { Expression } from '../core/Expression';
import { OutputFormat } from '../core/OutputFormat';
import { TemplateObject } from '../core/TemplateObject';
import { NullArgumentException } from './utility/NullArgumentException';
import { Version } from './Version';
import { Configuration } from './Configuration';
import { Template } from './Template';
import { DefaultObjectWrapperBuilder } from './DefaultObjectWrapperBuilder';
import { TemplateExceptionHandler } from './TemplateExceptionHandler';
import { AttemptExceptionReporter } from './AttemptExceptionReporter';
import { TemplateException } from './TemplateException';

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * This class is to work around the lack of module system in Java, i.e., so that other FreeMarker packages can
 * access things inside this package that users shouldn't.
 * @class
 */
export class _TemplateAPI {
    public static VERSION_INT_2_3_0 : number; public static VERSION_INT_2_3_0_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_0 == null) _TemplateAPI.VERSION_INT_2_3_0 = Configuration.VERSION_2_3_0_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_0; };

    public static VERSION_INT_2_3_19 : number; public static VERSION_INT_2_3_19_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_19 == null) _TemplateAPI.VERSION_INT_2_3_19 = Configuration.VERSION_2_3_19_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_19; };

    public static VERSION_INT_2_3_20 : number; public static VERSION_INT_2_3_20_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_20 == null) _TemplateAPI.VERSION_INT_2_3_20 = Configuration.VERSION_2_3_20_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_20; };

    public static VERSION_INT_2_3_21 : number; public static VERSION_INT_2_3_21_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_21 == null) _TemplateAPI.VERSION_INT_2_3_21 = Configuration.VERSION_2_3_21_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_21; };

    public static VERSION_INT_2_3_22 : number; public static VERSION_INT_2_3_22_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_22 == null) _TemplateAPI.VERSION_INT_2_3_22 = Configuration.VERSION_2_3_22_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_22; };

    public static VERSION_INT_2_3_23 : number; public static VERSION_INT_2_3_23_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_23 == null) _TemplateAPI.VERSION_INT_2_3_23 = Configuration.VERSION_2_3_23_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_23; };

    public static VERSION_INT_2_3_24 : number; public static VERSION_INT_2_3_24_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_24 == null) _TemplateAPI.VERSION_INT_2_3_24 = Configuration.VERSION_2_3_24_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_24; };

    public static VERSION_INT_2_3_25 : number; public static VERSION_INT_2_3_25_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_25 == null) _TemplateAPI.VERSION_INT_2_3_25 = Configuration.VERSION_2_3_25_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_25; };

    public static VERSION_INT_2_3_26 : number; public static VERSION_INT_2_3_26_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_26 == null) _TemplateAPI.VERSION_INT_2_3_26 = Configuration.VERSION_2_3_26_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_26; };

    public static VERSION_INT_2_3_27 : number; public static VERSION_INT_2_3_27_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_27 == null) _TemplateAPI.VERSION_INT_2_3_27 = Configuration.VERSION_2_3_27_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_27; };

    public static VERSION_INT_2_3_28 : number; public static VERSION_INT_2_3_28_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_28 == null) _TemplateAPI.VERSION_INT_2_3_28 = Configuration.VERSION_2_3_28_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_28; };

    public static VERSION_INT_2_3_29 : number; public static VERSION_INT_2_3_29_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_3_29 == null) _TemplateAPI.VERSION_INT_2_3_29 = Configuration.VERSION_2_3_29_$LI$().intValue(); return _TemplateAPI.VERSION_INT_2_3_29; };

    public static VERSION_INT_2_4_0 : number; public static VERSION_INT_2_4_0_$LI$() : number { if(_TemplateAPI.VERSION_INT_2_4_0 == null) _TemplateAPI.VERSION_INT_2_4_0 = Version.intValueFor(2, 4, 0); return _TemplateAPI.VERSION_INT_2_4_0; };

    public static checkVersionNotNullAndSupported(incompatibleImprovements : Version) {
        NullArgumentException.check$java_lang_String$java_lang_Object("incompatibleImprovements", incompatibleImprovements);
        let iciV : number = incompatibleImprovements.intValue();
        if(iciV > Configuration.getVersion().intValue()) {
            throw Object.defineProperty(new Error("The FreeMarker version requested by \"incompatibleImprovements\" was " + incompatibleImprovements + ", but the installed FreeMarker version is only " + Configuration.getVersion() + ". You may need to upgrade FreeMarker in your project."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(iciV < _TemplateAPI.VERSION_INT_2_3_0_$LI$()) {
            throw Object.defineProperty(new Error("\"incompatibleImprovements\" must be at least 2.3.0."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }

    public static getTemplateLanguageVersionAsInt$freemarker_core_TemplateObject(to : TemplateObject) : number {
        return _TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_template_Template(to.getTemplate());
    }

    public static getTemplateLanguageVersionAsInt(to? : any) : any {
        if(((to != null && to instanceof <any>TemplateObject) || to === null)) {
            return <any>_TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_core_TemplateObject(to);
        } else if(((to != null && to instanceof <any>Template) || to === null)) {
            return <any>_TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_template_Template(to);
        } else throw new Error('invalid overload');
    }

    public static getTemplateLanguageVersionAsInt$freemarker_template_Template(t : Template) : number {
        return t.getTemplateLanguageVersion().intValue();
    }

    /**
     * For unit testing only
     */
    public static DefaultObjectWrapperFactory_clearInstanceCache() {
        DefaultObjectWrapperBuilder.clearInstanceCache();
    }

    public static getDefaultTemplateExceptionHandler(incompatibleImprovements : Version) : TemplateExceptionHandler {
        return Configuration.getDefaultTemplateExceptionHandler(incompatibleImprovements);
    }

    public static getDefaultAttemptExceptionReporter(incompatibleImprovements : Version) : AttemptExceptionReporter {
        return Configuration.getDefaultAttemptExceptionReporter(incompatibleImprovements);
    }

    public static getDefaultLogTemplateExceptions(incompatibleImprovements : Version) : boolean {
        return Configuration.getDefaultLogTemplateExceptions(incompatibleImprovements);
    }

    public static getDefaultWrapUncheckedExceptions(incompatibleImprovements : Version) : boolean {
        return Configuration.getDefaultWrapUncheckedExceptions(incompatibleImprovements);
    }

    public static createDefaultTemplateLoader(incompatibleImprovements : Version) : TemplateLoader {
        return Configuration.createDefaultTemplateLoader(incompatibleImprovements);
    }

    public static createDefaultCacheStorage(incompatibleImprovements : Version) : CacheStorage {
        return Configuration.createDefaultCacheStorage$freemarker_template_Version(incompatibleImprovements);
    }

    public static getDefaultTemplateLookupStrategy(incompatibleImprovements : Version) : TemplateLookupStrategy {
        return Configuration.getDefaultTemplateLookupStrategy(incompatibleImprovements);
    }

    public static getDefaultTemplateNameFormat(incompatibleImprovements : Version) : TemplateNameFormat {
        return Configuration.getDefaultTemplateNameFormat(incompatibleImprovements);
    }

    /**
     * [2.4] getSettingNames() becomes to public; remove this.
     * @param {Configuration} cfg
     * @param {boolean} camelCase
     * @return {Set}
     */
    public static getConfigurationSettingNames(cfg : Configuration, camelCase : boolean) : Array<any> {
        return cfg.getSettingNames(camelCase);
    }

    public static setAutoEscaping(t : Template, autoEscaping : boolean) {
        t.setAutoEscaping(autoEscaping);
    }

    public static setOutputFormat(t : Template, outputFormat : OutputFormat) {
        t.setOutputFormat(outputFormat);
    }

    public static validateAutoEscapingPolicyValue(autoEscaping : number) {
        if(autoEscaping !== Configuration.ENABLE_IF_DEFAULT_AUTO_ESCAPING_POLICY && autoEscaping !== Configuration.ENABLE_IF_SUPPORTED_AUTO_ESCAPING_POLICY && autoEscaping !== Configuration.DISABLE_AUTO_ESCAPING_POLICY) {
            throw Object.defineProperty(new Error("\"auto_escaping\" can only be set to one of these: Configuration.ENABLE_AUTO_ESCAPING_IF_DEFAULT, or Configuration.ENABLE_AUTO_ESCAPING_IF_SUPPORTEDor Configuration.DISABLE_AUTO_ESCAPING"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }

    public static validateNamingConventionValue(namingConvention : number) {
        if(namingConvention !== Configuration.AUTO_DETECT_NAMING_CONVENTION && namingConvention !== Configuration.LEGACY_NAMING_CONVENTION && namingConvention !== Configuration.CAMEL_CASE_NAMING_CONVENTION) {
            throw Object.defineProperty(new Error("\"naming_convention\" can only be set to one of these: Configuration.AUTO_DETECT_NAMING_CONVENTION, or Configuration.LEGACY_NAMING_CONVENTIONor Configuration.CAMEL_CASE_NAMING_CONVENTION"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }

    public static valideTagSyntaxValue(tagSyntax : number) {
        if(tagSyntax !== Configuration.AUTO_DETECT_TAG_SYNTAX && tagSyntax !== Configuration.SQUARE_BRACKET_TAG_SYNTAX && tagSyntax !== Configuration.ANGLE_BRACKET_TAG_SYNTAX) {
            throw Object.defineProperty(new Error("\"tag_syntax\" can only be set to one of these: Configuration.AUTO_DETECT_TAG_SYNTAX, Configuration.ANGLE_BRACKET_TAG_SYNTAX, or Configuration.SQUARE_BRACKET_TAG_SYNTAX"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }

    public static valideInterpolationSyntaxValue(interpolationSyntax : number) {
        if(interpolationSyntax !== Configuration.LEGACY_INTERPOLATION_SYNTAX && interpolationSyntax !== Configuration.DOLLAR_INTERPOLATION_SYNTAX && interpolationSyntax !== Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX) {
            throw Object.defineProperty(new Error("\"interpolation_syntax\" can only be set to one of these: Configuration.LEGACY_INTERPOLATION_SYNTAX, Configuration.DOLLAR_INTERPOLATION_SYNTAX, or Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }

    public static getBlamedExpression(e : TemplateException) : Expression {
        return e.getBlamedExpression();
    }

    public static getDefaultLocale() : string {
        return Configuration.getDefaultLocale();
    }

    public static getDefaultTimeZone() : string {
        return Configuration.getDefaultTimeZone();
    }

    public static setPreventStrippings(conf : Configuration, preventStrippings : boolean) {
        conf.setPreventStrippings(preventStrippings);
    }
}
_TemplateAPI["__class"] = "freemarker.template._TemplateAPI";



var __Function = Function;

_TemplateAPI.VERSION_INT_2_4_0_$LI$();

_TemplateAPI.VERSION_INT_2_3_29_$LI$();

_TemplateAPI.VERSION_INT_2_3_28_$LI$();

_TemplateAPI.VERSION_INT_2_3_27_$LI$();

_TemplateAPI.VERSION_INT_2_3_26_$LI$();

_TemplateAPI.VERSION_INT_2_3_25_$LI$();

_TemplateAPI.VERSION_INT_2_3_24_$LI$();

_TemplateAPI.VERSION_INT_2_3_23_$LI$();

_TemplateAPI.VERSION_INT_2_3_22_$LI$();

_TemplateAPI.VERSION_INT_2_3_21_$LI$();

_TemplateAPI.VERSION_INT_2_3_20_$LI$();

_TemplateAPI.VERSION_INT_2_3_19_$LI$();

_TemplateAPI.VERSION_INT_2_3_0_$LI$();
