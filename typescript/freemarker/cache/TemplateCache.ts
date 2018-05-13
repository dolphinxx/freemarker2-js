/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BugException} from '../core/BugException';
import {Environment} from '../core/Environment';
import {TemplateConfiguration} from '../core/TemplateConfiguration';
import {Logger} from '../log/Logger';
import {Configuration} from '../template/Configuration';
import {MalformedTemplateNameException} from '../template/MalformedTemplateNameException';
import {Template} from '../template/Template';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {NullArgumentException} from '../template/utility/NullArgumentException';
import {StringUtil} from '../template/utility/StringUtil';
import {UndeclaredThrowableException} from '../template/utility/UndeclaredThrowableException';
import {Reader} from '../../java/io/Reader';
import {StringWriter} from '../../java/io/StringWriter';
import {TemplateLoader} from './TemplateLoader';
import {CacheStorage} from './CacheStorage';
import {TemplateLookupStrategy} from './TemplateLookupStrategy';
import {TemplateNameFormat} from './TemplateNameFormat';
import {TemplateConfigurationFactory} from './TemplateConfigurationFactory';
import {ConcurrentCacheStorage} from './ConcurrentCacheStorage';
import {TemplateLookupResult} from './TemplateLookupResult';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {Boolean} from '../../java/lang/Boolean';
import {TemplateLookupContext} from './TemplateLookupContext';
import {StringTokenizer} from "../../java/util/StringTokenizer";
import {ClassUtil} from "../template/utility/ClassUtil";
import {Locale} from "../../java/util/Locale";

/**
 * @param {*} templateLoader         The {link TemplateLoader} to use. Can be {@code null}, though then every request will result in
 * {link TemplateNotFoundException}.
 * @param {*} cacheStorage           The {link CacheStorage} to use. Can't be {@code null}.
 * @param {TemplateLookupStrategy} templateLookupStrategy The {link TemplateLookupStrategy} to use. Can't be {@code null}.
 * @param {TemplateNameFormat} templateNameFormat     The {link TemplateNameFormat} to use. Can't be {@code null}.
 * @param {TemplateConfigurationFactory} templateConfigurations The {link TemplateConfigurationFactory} to use. Can be {@code null} (then all templates will use the
 * settings coming from the {link Configuration} as is).
 * @param {Configuration} config                 The {link Configuration} this cache will be used for. Can be {@code null} for backward compatibility,
 * as it can be set with {link #setConfiguration(Configuration)} later.
 * @since 2.3.24
 * @class
 */
export class TemplateCache {
    /**
     * The default template update delay; see {link Configuration#setTemplateUpdateDelayMilliseconds(long)}.
     *
     * @since 2.3.23
     */
    public static DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS: number = 5000;

    static ASTERISKSTR: string = "*";

    static ASTERISK: string = '*';

    static SLASH: string = '/';

    static LOCALE_PART_SEPARATOR: string = "_";

    static LOG: Logger;

    public static LOG_$LI$(): Logger {
        if (TemplateCache.LOG == null) TemplateCache.LOG = Logger.getLogger("freemarker.cache");
        return TemplateCache.LOG;
    };

    /**
     * Maybe {@code null}.
     */
    /*private*/
    templateLoader: TemplateLoader;

    /**
     * Here we keep our cached templates
     */
    /*private*/
    storage: CacheStorage;

    /*private*/
    templateLookupStrategy: TemplateLookupStrategy;

    /*private*/
    templateNameFormat: TemplateNameFormat;

    /*private*/
    templateConfigurations: TemplateConfigurationFactory;

    /*private*/
    isStorageConcurrent: boolean;

    /**
     * {link Configuration#setTemplateUpdateDelayMilliseconds(long)}
     */
    /*private*/
    updateDelay: number = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;

    /**
     * {link Configuration#setLocalizedLookup(boolean)}
     */
    /*private*/
    localizedLookup: boolean = true;

    /*private*/
    config: Configuration;

    public constructor(templateLoader?: any, cacheStorage?: any, templateLookupStrategy?: any, templateNameFormat?: any, templateConfigurations?: any, config?: any) {
        if (arguments.length === 6) {
            let __args = Array.prototype.slice.call(arguments);
            if (this.templateLoader === undefined) this.templateLoader = null;
            if (this.storage === undefined) this.storage = null;
            if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
            if (this.templateNameFormat === undefined) this.templateNameFormat = null;
            if (this.templateConfigurations === undefined) this.templateConfigurations = null;
            if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
            if (this.config === undefined) this.config = null;
            this.updateDelay = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;
            this.localizedLookup = true;
            if (this.templateLoader === undefined) this.templateLoader = null;
            if (this.storage === undefined) this.storage = null;
            if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
            if (this.templateNameFormat === undefined) this.templateNameFormat = null;
            if (this.templateConfigurations === undefined) this.templateConfigurations = null;
            if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
            if (this.config === undefined) this.config = null;
            (() => {
                this.templateLoader = templateLoader;
                NullArgumentException.check$java_lang_String$java_lang_Object("cacheStorage", cacheStorage);
                this.storage = cacheStorage;
                this.isStorageConcurrent = (cacheStorage != null && (cacheStorage["__interfaces"] != null && cacheStorage["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0 || cacheStorage.constructor != null && cacheStorage.constructor["__interfaces"] != null && cacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0)) && (<ConcurrentCacheStorage><any>cacheStorage).isConcurrent();
                NullArgumentException.check$java_lang_String$java_lang_Object("templateLookupStrategy", templateLookupStrategy);
                this.templateLookupStrategy = templateLookupStrategy;
                NullArgumentException.check$java_lang_String$java_lang_Object("templateNameFormat", templateNameFormat);
                this.templateNameFormat = templateNameFormat;
                this.templateConfigurations = templateConfigurations;
                this.config = config;
            })();
        } else if (arguments.length === 5) {
            let __args = Array.prototype.slice.call(arguments);
            let config: any = __args[4];
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateConfigurations: any = null;
                if (this.templateLoader === undefined) this.templateLoader = null;
                if (this.storage === undefined) this.storage = null;
                if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                if (this.config === undefined) this.config = null;
                this.updateDelay = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;
                this.localizedLookup = true;
                if (this.templateLoader === undefined) this.templateLoader = null;
                if (this.storage === undefined) this.storage = null;
                if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                if (this.config === undefined) this.config = null;
                (() => {
                    this.templateLoader = templateLoader;
                    NullArgumentException.check$java_lang_String$java_lang_Object("cacheStorage", cacheStorage);
                    this.storage = cacheStorage;
                    this.isStorageConcurrent = (cacheStorage != null && (cacheStorage["__interfaces"] != null && cacheStorage["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0 || cacheStorage.constructor != null && cacheStorage.constructor["__interfaces"] != null && cacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0)) && (<ConcurrentCacheStorage><any>cacheStorage).isConcurrent();
                    NullArgumentException.check$java_lang_String$java_lang_Object("templateLookupStrategy", templateLookupStrategy);
                    this.templateLookupStrategy = templateLookupStrategy;
                    NullArgumentException.check$java_lang_String$java_lang_Object("templateNameFormat", templateNameFormat);
                    this.templateNameFormat = templateNameFormat;
                    this.templateConfigurations = templateConfigurations;
                    this.config = config;
                })();
            }
        } else if (arguments.length === 3) {
            let __args = Array.prototype.slice.call(arguments);
            let config: any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateLookupStrategy: any = _TemplateAPI.getDefaultTemplateLookupStrategy(Configuration.VERSION_2_3_0_$LI$());
                let templateNameFormat: any = _TemplateAPI.getDefaultTemplateNameFormat(Configuration.VERSION_2_3_0_$LI$());
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateConfigurations: any = null;
                    if (this.templateLoader === undefined) this.templateLoader = null;
                    if (this.storage === undefined) this.storage = null;
                    if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                    if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                    if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                    if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                    if (this.config === undefined) this.config = null;
                    this.updateDelay = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;
                    this.localizedLookup = true;
                    if (this.templateLoader === undefined) this.templateLoader = null;
                    if (this.storage === undefined) this.storage = null;
                    if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                    if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                    if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                    if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                    if (this.config === undefined) this.config = null;
                    (() => {
                        this.templateLoader = templateLoader;
                        NullArgumentException.check$java_lang_String$java_lang_Object("cacheStorage", cacheStorage);
                        this.storage = cacheStorage;
                        this.isStorageConcurrent = (cacheStorage != null && (cacheStorage["__interfaces"] != null && cacheStorage["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0 || cacheStorage.constructor != null && cacheStorage.constructor["__interfaces"] != null && cacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0)) && (<ConcurrentCacheStorage><any>cacheStorage).isConcurrent();
                        NullArgumentException.check$java_lang_String$java_lang_Object("templateLookupStrategy", templateLookupStrategy);
                        this.templateLookupStrategy = templateLookupStrategy;
                        NullArgumentException.check$java_lang_String$java_lang_Object("templateNameFormat", templateNameFormat);
                        this.templateNameFormat = templateNameFormat;
                        this.templateConfigurations = templateConfigurations;
                        this.config = config;
                    })();
                }
            }
        } else if (arguments.length === 2 && ClassUtil.isAssignableFrom(cacheStorage, "freemarker.cache.CacheStorage")) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let config: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateLookupStrategy: any = _TemplateAPI.getDefaultTemplateLookupStrategy(Configuration.VERSION_2_3_0_$LI$());
                    let templateNameFormat: any = _TemplateAPI.getDefaultTemplateNameFormat(Configuration.VERSION_2_3_0_$LI$());
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let templateConfigurations: any = null;
                        if (this.templateLoader === undefined) this.templateLoader = null;
                        if (this.storage === undefined) this.storage = null;
                        if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                        if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                        if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                        if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                        if (this.config === undefined) this.config = null;
                        this.updateDelay = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;
                        this.localizedLookup = true;
                        if (this.templateLoader === undefined) this.templateLoader = null;
                        if (this.storage === undefined) this.storage = null;
                        if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                        if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                        if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                        if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                        if (this.config === undefined) this.config = null;
                        (() => {
                            this.templateLoader = templateLoader;
                            NullArgumentException.check$java_lang_String$java_lang_Object("cacheStorage", cacheStorage);
                            this.storage = cacheStorage;
                            this.isStorageConcurrent = (cacheStorage != null && (cacheStorage["__interfaces"] != null && cacheStorage["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0 || cacheStorage.constructor != null && cacheStorage.constructor["__interfaces"] != null && cacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0)) && (<ConcurrentCacheStorage><any>cacheStorage).isConcurrent();
                            NullArgumentException.check$java_lang_String$java_lang_Object("templateLookupStrategy", templateLookupStrategy);
                            this.templateLookupStrategy = templateLookupStrategy;
                            NullArgumentException.check$java_lang_String$java_lang_Object("templateNameFormat", templateNameFormat);
                            this.templateNameFormat = templateNameFormat;
                            this.templateConfigurations = templateConfigurations;
                            this.config = config;
                        })();
                    }
                }
            }
        } else if (arguments.length === 2 && ClassUtil.isAssignableFrom(cacheStorage, 'freemarker.template.Configuration')) {
            let __args = Array.prototype.slice.call(arguments);
            let config: any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cacheStorage: any = _TemplateAPI.createDefaultCacheStorage(Configuration.VERSION_2_3_0_$LI$());
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateLookupStrategy: any = _TemplateAPI.getDefaultTemplateLookupStrategy(Configuration.VERSION_2_3_0_$LI$());
                    let templateNameFormat: any = _TemplateAPI.getDefaultTemplateNameFormat(Configuration.VERSION_2_3_0_$LI$());
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let templateConfigurations: any = null;
                        if (this.templateLoader === undefined) this.templateLoader = null;
                        if (this.storage === undefined) this.storage = null;
                        if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                        if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                        if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                        if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                        if (this.config === undefined) this.config = null;
                        this.updateDelay = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;
                        this.localizedLookup = true;
                        if (this.templateLoader === undefined) this.templateLoader = null;
                        if (this.storage === undefined) this.storage = null;
                        if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                        if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                        if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                        if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                        if (this.config === undefined) this.config = null;
                        (() => {
                            this.templateLoader = templateLoader;
                            NullArgumentException.check$java_lang_String$java_lang_Object("cacheStorage", cacheStorage);
                            this.storage = cacheStorage;
                            this.isStorageConcurrent = (cacheStorage != null && (cacheStorage["__interfaces"] != null && cacheStorage["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0 || cacheStorage.constructor != null && cacheStorage.constructor["__interfaces"] != null && cacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0)) && (<ConcurrentCacheStorage><any>cacheStorage).isConcurrent();
                            NullArgumentException.check$java_lang_String$java_lang_Object("templateLookupStrategy", templateLookupStrategy);
                            this.templateLookupStrategy = templateLookupStrategy;
                            NullArgumentException.check$java_lang_String$java_lang_Object("templateNameFormat", templateNameFormat);
                            this.templateNameFormat = templateNameFormat;
                            this.templateConfigurations = templateConfigurations;
                            this.config = config;
                        })();
                    }
                }
            }
        } else if (arguments.length === 1) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let config: any = <Configuration>null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cacheStorage: any = _TemplateAPI.createDefaultCacheStorage(Configuration.VERSION_2_3_0_$LI$());
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let templateLookupStrategy: any = _TemplateAPI.getDefaultTemplateLookupStrategy(Configuration.VERSION_2_3_0_$LI$());
                        let templateNameFormat: any = _TemplateAPI.getDefaultTemplateNameFormat(Configuration.VERSION_2_3_0_$LI$());
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let templateConfigurations: any = null;
                            if (this.templateLoader === undefined) this.templateLoader = null;
                            if (this.storage === undefined) this.storage = null;
                            if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                            if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                            if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                            if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                            if (this.config === undefined) this.config = null;
                            this.updateDelay = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;
                            this.localizedLookup = true;
                            if (this.templateLoader === undefined) this.templateLoader = null;
                            if (this.storage === undefined) this.storage = null;
                            if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                            if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                            if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                            if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                            if (this.config === undefined) this.config = null;
                            (() => {
                                this.templateLoader = templateLoader;
                                NullArgumentException.check$java_lang_String$java_lang_Object("cacheStorage", cacheStorage);
                                this.storage = cacheStorage;
                                this.isStorageConcurrent = (cacheStorage != null && (cacheStorage["__interfaces"] != null && cacheStorage["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0 || cacheStorage.constructor != null && cacheStorage.constructor["__interfaces"] != null && cacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0)) && (<ConcurrentCacheStorage><any>cacheStorage).isConcurrent();
                                NullArgumentException.check$java_lang_String$java_lang_Object("templateLookupStrategy", templateLookupStrategy);
                                this.templateLookupStrategy = templateLookupStrategy;
                                NullArgumentException.check$java_lang_String$java_lang_Object("templateNameFormat", templateNameFormat);
                                this.templateNameFormat = templateNameFormat;
                                this.templateConfigurations = templateConfigurations;
                                this.config = config;
                            })();
                        }
                    }
                }
            }
        } else if (arguments.length === 0) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateLoader: any = _TemplateAPI.createDefaultTemplateLoader(Configuration.VERSION_2_3_0_$LI$());
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let config: any = <Configuration>null;
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let cacheStorage: any = _TemplateAPI.createDefaultCacheStorage(Configuration.VERSION_2_3_0_$LI$());
                        {
                            let __args = Array.prototype.slice.call(arguments);
                            let templateLookupStrategy: any = _TemplateAPI.getDefaultTemplateLookupStrategy(Configuration.VERSION_2_3_0_$LI$());
                            let templateNameFormat: any = _TemplateAPI.getDefaultTemplateNameFormat(Configuration.VERSION_2_3_0_$LI$());
                            {
                                let __args = Array.prototype.slice.call(arguments);
                                let templateConfigurations: any = null;
                                if (this.templateLoader === undefined) this.templateLoader = null;
                                if (this.storage === undefined) this.storage = null;
                                if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                                if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                                if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                                if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                                if (this.config === undefined) this.config = null;
                                this.updateDelay = TemplateCache.DEFAULT_TEMPLATE_UPDATE_DELAY_MILLIS;
                                this.localizedLookup = true;
                                if (this.templateLoader === undefined) this.templateLoader = null;
                                if (this.storage === undefined) this.storage = null;
                                if (this.templateLookupStrategy === undefined) this.templateLookupStrategy = null;
                                if (this.templateNameFormat === undefined) this.templateNameFormat = null;
                                if (this.templateConfigurations === undefined) this.templateConfigurations = null;
                                if (this.isStorageConcurrent === undefined) this.isStorageConcurrent = false;
                                if (this.config === undefined) this.config = null;
                                (() => {
                                    this.templateLoader = templateLoader;
                                    NullArgumentException.check$java_lang_String$java_lang_Object("cacheStorage", cacheStorage);
                                    this.storage = cacheStorage;
                                    this.isStorageConcurrent = (cacheStorage != null && (cacheStorage["__interfaces"] != null && cacheStorage["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0 || cacheStorage.constructor != null && cacheStorage.constructor["__interfaces"] != null && cacheStorage.constructor["__interfaces"].indexOf("freemarker.cache.ConcurrentCacheStorage") >= 0)) && (<ConcurrentCacheStorage><any>cacheStorage).isConcurrent();
                                    NullArgumentException.check$java_lang_String$java_lang_Object("templateLookupStrategy", templateLookupStrategy);
                                    this.templateLookupStrategy = templateLookupStrategy;
                                    NullArgumentException.check$java_lang_String$java_lang_Object("templateNameFormat", templateNameFormat);
                                    this.templateNameFormat = templateNameFormat;
                                    this.templateConfigurations = templateConfigurations;
                                    this.config = config;
                                })();
                            }
                        }
                    }
                }
            }
        } else throw new Error('invalid overload');
    }

    /**
     * Sets the configuration object to which this cache belongs. This
     * method is called by the configuration itself to establish the
     * relation, and should not be called by users.
     *
     * @deprecated Use the {link #TemplateCache(TemplateLoader, CacheStorage, Configuration)} constructor.
     * @param {Configuration} config
     */
    public setConfiguration(config: Configuration) {
        this.config = config;
        this.clear();
    }

    public getTemplateLoader(): TemplateLoader {
        return this.templateLoader;
    }

    public getCacheStorage(): CacheStorage {
        return this.storage;
    }

    /**
     * @since 2.3.22
     * @return {TemplateLookupStrategy}
     */
    public getTemplateLookupStrategy(): TemplateLookupStrategy {
        return this.templateLookupStrategy;
    }

    /**
     * @since 2.3.22
     * @return {TemplateNameFormat}
     */
    public getTemplateNameFormat(): TemplateNameFormat {
        return this.templateNameFormat;
    }

    /**
     * @since 2.3.24
     * @return {TemplateConfigurationFactory}
     */
    public getTemplateConfigurations(): TemplateConfigurationFactory {
        return this.templateConfigurations;
    }

    public getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name: string, locale: Locale, customLookupCondition: any, encoding: string, parseAsFTL: boolean): TemplateCache.MaybeMissingTemplate {
        NullArgumentException.check$java_lang_String$java_lang_Object("name", name);
        NullArgumentException.check$java_lang_String$java_lang_Object("locale", locale);
        NullArgumentException.check$java_lang_String$java_lang_Object("encoding", encoding);
        try {
            name = this.templateNameFormat.normalizeRootBasedName(name);
        } catch (e) {
            if(!(e instanceof MalformedTemplateNameException)) {
                throw e;
            }
            if (this.templateNameFormat !== TemplateNameFormat.DEFAULT_2_3_0_$LI$() || this.config.getIncompatibleImprovements().intValue() >= /*_TemplateAPI.VERSION_INT_2_4_0_$LI$()*/2004000) {
                throw e;
            }
            return new TemplateCache.MaybeMissingTemplate(null, e);
        }
        if (this.templateLoader == null) {
            return new TemplateCache.MaybeMissingTemplate(name, "The TemplateLoader was null.");
        }
        let template: Template = this.getTemplateInternal(name, locale, customLookupCondition, encoding, parseAsFTL);
        return template != null ? new TemplateCache.MaybeMissingTemplate(template) : new TemplateCache.MaybeMissingTemplate(name, <string>null);
    }

    /**
     * Retrieves the template with the given name (and according the specified further parameters) from the template
     * cache, loading it into the cache first if it's missing/staled.
     * <p>
     * <p>
     * All parameters must be non-{@code null}, except {@code customLookupCondition}. For the meaning of the parameters
     * see {link Configuration#getTemplate(String, Locale, String, boolean)}.
     *
     * @return {TemplateCache.MaybeMissingTemplate} A {link MaybeMissingTemplate} object that contains the {link Template}, or a
     * {link MaybeMissingTemplate} object that contains {@code null} as the {link Template} and information
     * about the missing template. The return value itself is never {@code null}. Note that exceptions occurring
     * during template loading will not be classified as a missing template, so they will cause an exception to
     * be thrown by this method instead of returning a {link MaybeMissingTemplate}. The idea is that having a
     * missing template is normal (not exceptional), providing that the backing storage mechanism could indeed
     * check that it's missing.
     * @throws MalformedTemplateNameException If the {@code name} was malformed according the current {link TemplateNameFormat}. However, if the
     * {link TemplateNameFormat} is {link TemplateNameFormat#DEFAULT_2_3_0} and
     * {link Configuration#getIncompatibleImprovements()} is less than 2.4.0, then instead of throwing this
     * exception, a {link MaybeMissingTemplate} will be returned, similarly as if the template were missing
     * (the {link MaybeMissingTemplate#getMissingTemplateReason()} will describe the real error).
     * @throws IOException                    If reading the template has failed from a reason other than the template is missing. This method
     * should never be a {link TemplateNotFoundException}, as that condition is indicated in the return
     * value.
     * @since 2.3.22
     * @param {String} name
     * @param {Locale} locale
     * @param {Object} customLookupCondition
     * @param {String} encoding
     * @param {boolean} parseAsFTL
     */
    public getTemplate(name?: any, locale?: any, customLookupCondition?: any, encoding?: any, parseAsFTL?: any): any {
        if (((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((customLookupCondition != null) || customLookupCondition === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof parseAsFTL === 'boolean') || parseAsFTL === null)) {
            return <any>this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, customLookupCondition, encoding, parseAsFTL);
        } else if (((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((typeof customLookupCondition === 'string') || customLookupCondition === null) && ((typeof encoding === 'boolean') || encoding === null) && parseAsFTL === undefined) {
            return <any>this.getTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean(name, locale, customLookupCondition, encoding);
        } else throw new Error('invalid overload');
    }

    public getTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean(name: string, locale: Locale, encoding: string, parseAsFTL: boolean): Template {
        return this.getTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, null, encoding, parseAsFTL).getTemplate();
    }

    /**
     * Returns the deprecated default template loader of FreeMarker 2.3.0.
     *
     * @deprecated The {link TemplateLoader} should be always specified by the constructor caller.
     * @return {*}
     */
    static createLegacyDefaultTemplateLoader(): TemplateLoader {
        return _TemplateAPI.createDefaultTemplateLoader(Configuration.VERSION_2_3_0_$LI$());
    }

    getTemplateInternal(name: string, locale: Locale, customLookupCondition: any, encoding: string, parseAsFTL: boolean): Template {
        let debug: boolean = TemplateCache.LOG_$LI$().isDebugEnabled();
        let debugName: string = debug ? this.buildDebugName(name, locale, customLookupCondition, encoding, parseAsFTL) : null;
        let tk: TemplateCache.TemplateKey = new TemplateCache.TemplateKey(name, locale, customLookupCondition, encoding, parseAsFTL);
        let cachedTemplate: TemplateCache.CachedTemplate;
        if (this.isStorageConcurrent) {
            cachedTemplate = <TemplateCache.CachedTemplate>this.storage.get(tk);
        } else {
            {
                cachedTemplate = <TemplateCache.CachedTemplate>this.storage.get(tk);
            }
        }
        let now: number = /* currentTimeMillis */Date.now();
        let lastModified: number = -1;
        let rethrown: boolean = false;
        let newLookupResult: TemplateLookupResult = null;
        try {
            if (cachedTemplate != null) {
                if (now - cachedTemplate.lastChecked < this.updateDelay) {
                    if (debug) {
                        TemplateCache.LOG_$LI$().debug$java_lang_String(debugName + " cached copy not yet stale; using cached.");
                    }
                    let t: any = cachedTemplate.templateOrException;
                    if ((t != null && t instanceof <any>Template) || t == null) {
                        return <Template>t;
                    } else if (t != null && (t["__classes"] && t["__classes"].indexOf("java.lang.RuntimeException") >= 0) || t != null && t instanceof <any>Error) {
                        this.throwLoadFailedException(<Error>t);
                    } else if (t != null && (t["__classes"] && t["__classes"].indexOf("java.io.IOException") >= 0)) {
                        rethrown = true;
                        this.throwLoadFailedException(<Error>t);
                    }
                    throw new BugException("t is " + /* getName */(c => c["__class"] ? c["__class"] : c["name"])((<any>t.constructor)));
                }
                cachedTemplate = cachedTemplate.cloneCachedTemplate();
                cachedTemplate.lastChecked = now;
                newLookupResult = this.lookupTemplate(name, locale, customLookupCondition);
                if (!newLookupResult.isPositive()) {
                    if (debug) {
                        TemplateCache.LOG_$LI$().debug$java_lang_String(debugName + " no source found.");
                    }
                    this.storeNegativeLookup(tk, cachedTemplate, null);
                    return null;
                }
                let newLookupResultSource: any = newLookupResult.getTemplateSource();
                lastModified = this.templateLoader.getLastModified(newLookupResultSource);
                let lastModifiedNotChanged: boolean = lastModified === cachedTemplate.lastModified;
                let sourceEquals: boolean = /* equals */(<any>((o1: any, o2: any) => {
                    if (o1 && o1.equals) {
                        return o1.equals(o2);
                    } else {
                        return o1 === o2;
                    }
                })(newLookupResultSource, cachedTemplate.source));
                if (lastModifiedNotChanged && sourceEquals) {
                    if (debug) {
                        TemplateCache.LOG_$LI$().debug$java_lang_String(debugName + ": using cached since " + newLookupResultSource + " hasn\'t changed.");
                    }
                    this.storeCached(tk, cachedTemplate);
                    return <Template>cachedTemplate.templateOrException;
                } else if (debug) {
                    if (!sourceEquals) {
                        TemplateCache.LOG_$LI$().debug$java_lang_String("Updating source because: sourceEquals=" + sourceEquals + ", newlyFoundSource=" + StringUtil.jQuoteNoXSS$java_lang_Object(newLookupResultSource) + ", cached.source=" + StringUtil.jQuoteNoXSS$java_lang_Object(cachedTemplate.source));
                    } else if (!lastModifiedNotChanged) {
                        TemplateCache.LOG_$LI$().debug$java_lang_String("Updating source because: lastModifiedNotChanged=" + lastModifiedNotChanged + ", cached.lastModified=" + cachedTemplate.lastModified + " != source.lastModified=" + lastModified);
                    }
                }
            } else {
                if (debug) {
                    TemplateCache.LOG_$LI$().debug$java_lang_String("Couldn\'t find template in cache for " + debugName + "; will try to load it.");
                }
                cachedTemplate = new TemplateCache.CachedTemplate();
                cachedTemplate.lastChecked = now;
                newLookupResult = this.lookupTemplate(name, locale, customLookupCondition);
                if (!newLookupResult.isPositive()) {
                    this.storeNegativeLookup(tk, cachedTemplate, null);
                    return null;
                }
                cachedTemplate.lastModified = lastModified = Number.MIN_VALUE;
            }
            let source: any = newLookupResult.getTemplateSource();
            cachedTemplate.source = source;
            if (debug) {
                TemplateCache.LOG_$LI$().debug$java_lang_String("Loading template for " + debugName + " from " + StringUtil.jQuoteNoXSS$java_lang_Object(source));
            }
            lastModified = lastModified === Number.MIN_VALUE ? this.templateLoader.getLastModified(source) : lastModified;
            let template: Template = this.loadTemplate(this.templateLoader, source, name, newLookupResult.getTemplateSourceName(), locale, customLookupCondition, encoding, parseAsFTL);
            cachedTemplate.templateOrException = template;
            cachedTemplate.lastModified = lastModified;
            this.storeCached(tk, cachedTemplate);
            return template;
        } catch (__e) {
            let e: Error = <Error>__e;
            if (!rethrown) {
                this.storeNegativeLookup(tk, cachedTemplate, e);
            }
            throw e;
        } finally {
            if (newLookupResult != null && newLookupResult.isPositive()) {
                this.templateLoader.closeTemplateSource(newLookupResult.getTemplateSource());
            }
        }
    }

    static INIT_CAUSE: Function;

    public static INIT_CAUSE_$LI$(): Function {
        if (TemplateCache.INIT_CAUSE == null) TemplateCache.INIT_CAUSE = TemplateCache.getInitCauseMethod();
        return TemplateCache.INIT_CAUSE;
    };

    static getInitCauseMethod(): Function {
        // try {
        //     return /* getMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })("java.lang.Throwable","initCause");
        // } catch(e) {
        //     return null;
        // }
        return null;
    }

    /**
     * Creates an {link IOException} that has a cause exception.
     * @param {String} message
     * @param {Error} cause
     * @return {Error}
     * @private
     */
    newIOException(message: string, cause: Error): Error {
        if (cause == null) {
            return Object.defineProperty(new Error(message), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.io.IOException', 'java.lang.Object', 'java.lang.Exception']
            });
        }
        let ioe: Error;
        if (TemplateCache.INIT_CAUSE_$LI$() != null) {
            ioe = Object.defineProperty(new Error(message), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.io.IOException', 'java.lang.Object', 'java.lang.Exception']
            });
            // try {
                /* invoke */
                TemplateCache.INIT_CAUSE_$LI$().apply(ioe, [cause]);
            // } catch (__e) {
            //     if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.RuntimeException") >= 0) || __e != null && __e instanceof <any>Error) {
            //         let ex: Error = <Error>__e;
            //         throw ex;
            //
            //     }
            //     if (__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
            //         let ex: Error = <Error>__e;
            //         throw new UndeclaredThrowableException(ex);
            //
            //     }
            // }
        } else {
            ioe = Object.defineProperty(new Error(message + "\nCaused by: " + /* getName */(c => c["__class"] ? c["__class"] : c["name"])((<any>cause.constructor)) + ": " + cause.message), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.io.IOException', 'java.lang.Object', 'java.lang.Exception']
            });
        }
        return ioe;
    }

    throwLoadFailedException(e: Error) {
        throw this.newIOException("There was an error loading the template on an earlier attempt; see cause exception.", e);
    }

    storeNegativeLookup(tk: TemplateCache.TemplateKey, cachedTemplate: TemplateCache.CachedTemplate, e: Error) {
        cachedTemplate.templateOrException = e;
        cachedTemplate.source = null;
        cachedTemplate.lastModified = 0;
        this.storeCached(tk, cachedTemplate);
    }

    storeCached(tk: TemplateCache.TemplateKey, cachedTemplate: TemplateCache.CachedTemplate) {
        if (this.isStorageConcurrent) {
            this.storage.put(tk, cachedTemplate);
        } else {
            {
                this.storage.put(tk, cachedTemplate);
            }
        }
    }

    loadTemplate(templateLoader: TemplateLoader, source: any, name: string, sourceName: string, locale: Locale, customLookupCondition: any, initialEncoding: string, parseAsFTL: boolean): Template {
        let tc: TemplateConfiguration;
        try {
            tc = this.templateConfigurations != null ? this.templateConfigurations.get(sourceName, source) : null;
        } catch (e) {
            if(ClassUtil.isAssignableFrom(e, 'freemarker.cache.TemplateConfigurationFactoryException')) {
                throw this.newIOException("Error while getting TemplateConfiguration; see cause exception.", e);
            }
            throw e;
        }
        if (tc != null) {
            if (tc.isEncodingSet()) {
                initialEncoding = tc.getEncoding();
            }
            if (tc.isLocaleSet()) {
                locale = tc.getLocale();
            }
        }
        let template: Template;
        {
            if (parseAsFTL) {
                // try {
                let reader: Reader = templateLoader.getReader(source, initialEncoding);
                try {
                    template = new Template(name, sourceName, reader, this.config, tc, initialEncoding);
                } finally {
                    reader.close();
                }
                // } catch(wee) {
                //     let actualEncoding : string = wee.getTemplateSpecifiedEncoding();
                //     if(TemplateCache.LOG_$LI$().isDebugEnabled()) {
                //         TemplateCache.LOG_$LI$().debug$java_lang_String("Initial encoding \"" + initialEncoding + "\" was incorrect, re-reading with \"" + actualEncoding + "\". Template: " + sourceName);
                //     }
                //     let reader : Reader = templateLoader.getReader(source, actualEncoding);
                //     try {
                //         template = new Template(name, sourceName, reader, this.config, tc, actualEncoding);
                //     } finally {
                //         reader.close();
                //     }
                // }
            } else {
                let sw: StringWriter = new StringWriter();
                let buf: string[] = (s => {
                    let a = [];
                    while (s-- > 0) a.push(null);
                    return a;
                })(4096);
                let reader: Reader = templateLoader.getReader(source, initialEncoding);
                try {
                    fetchChars: while ((true)) {
                        let charsRead: number = reader.read(buf);
                        if (charsRead > 0) {
                            sw.write(buf, 0, charsRead);
                        } else if (charsRead < 0) {
                            break fetchChars;
                        }
                    }
                } finally {
                    reader.close();
                }
                template = Template.getPlainTextTemplate$java_lang_String$java_lang_String$java_lang_String$freemarker_template_Configuration(name, sourceName, sw.toString(), this.config);
                template.setEncoding(initialEncoding);
            }
        }
        if (tc != null) {
            tc.apply(template);
        }
        template.setLocale(locale);
        template.setCustomLookupCondition(customLookupCondition);
        return template;
    }

    /**
     * Gets the delay in milliseconds between checking for newer versions of a
     * template source.
     *
     * @return {number} the current value of the delay
     */
    public getDelay(): number {
        {
            return this.updateDelay;
        }
    }

    /**
     * Sets the delay in milliseconds between checking for newer versions of a
     * template sources.
     *
     * @param {number} delay the new value of the delay
     */
    public setDelay(delay: number) {
        {
            this.updateDelay = delay;
        }
    }

    /**
     * Returns if localized template lookup is enabled or not.
     * @return {boolean}
     */
    public getLocalizedLookup(): boolean {
        {
            return this.localizedLookup;
        }
    }

    /**
     * Setis if localized template lookup is enabled or not.
     * @param {boolean} localizedLookup
     */
    public setLocalizedLookup(localizedLookup: boolean) {
        {
            if (this.localizedLookup !== localizedLookup) {
                this.localizedLookup = localizedLookup;
                this.clear();
            }
        }
    }

    /**
     * Removes all entries from the cache, forcing reloading of templates
     * on subsequent {link #getTemplate(String, Locale, String, boolean)}
     * calls. If the configured template loader is
     * {link StatefulTemplateLoader stateful}, then its
     * {link StatefulTemplateLoader#resetState()} method is invoked as well.
     */
    public clear() {
    }

    public removeTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean(name: string, locale: Locale, encoding: string, parse: boolean) {
        this.removeTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, null, encoding, parse);
    }

    public removeTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name: string, locale: Locale, customLookupCondition: any, encoding: string, parse: boolean) {
        if (name == null) {
            throw Object.defineProperty(new Error("Argument \"name\" can\'t be null"), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception']
            });
        }
        if (locale == null) {
            throw Object.defineProperty(new Error("Argument \"locale\" can\'t be null"), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception']
            });
        }
        if (encoding == null) {
            throw Object.defineProperty(new Error("Argument \"encoding\" can\'t be null"), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception']
            });
        }
        name = this.templateNameFormat.normalizeRootBasedName(name);
        if (name != null && this.templateLoader != null) {
            let debug: boolean = TemplateCache.LOG_$LI$().isDebugEnabled();
            let debugName: string = debug ? this.buildDebugName(name, locale, customLookupCondition, encoding, parse) : null;
            let tk: TemplateCache.TemplateKey = new TemplateCache.TemplateKey(name, locale, customLookupCondition, encoding, parse);
            if (this.isStorageConcurrent) {
                this.storage.remove(tk);
            } else {
                {
                    this.storage.remove(tk);
                }
            }
            if (debug) {
                TemplateCache.LOG_$LI$().debug$java_lang_String(debugName + " was removed from the cache, if it was there");
            }
        }
    }

    /**
     * Removes an entry from the cache, hence forcing the re-loading of it when it's next time requested. (It doesn't
     * delete the template file itself.) This is to give the application finer control over cache updating than
     * {link #setDelay(long)} alone does.
     * <p>
     * For the meaning of the parameters, see
     * {link Configuration#getTemplate(String, Locale, Object, String, boolean, boolean)}
     * @param {String} name
     * @param {Locale} locale
     * @param {Object} customLookupCondition
     * @param {String} encoding
     * @param {boolean} parse
     */
    public removeTemplate(name?: any, locale?: any, customLookupCondition?: any, encoding?: any, parse?: any): any {
        if (((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((customLookupCondition != null) || customLookupCondition === null) && ((typeof encoding === 'string') || encoding === null) && ((typeof parse === 'boolean') || parse === null)) {
            return <any>this.removeTemplate$java_lang_String$java_util_Locale$java_lang_Object$java_lang_String$boolean(name, locale, customLookupCondition, encoding, parse);
        } else if (((typeof name === 'string') || name === null) && ((typeof locale === 'string') || locale === null) && ((typeof customLookupCondition === 'string') || customLookupCondition === null) && ((typeof encoding === 'boolean') || encoding === null) && parse === undefined) {
            return <any>this.removeTemplate$java_lang_String$java_util_Locale$java_lang_String$boolean(name, locale, customLookupCondition, encoding);
        } else throw new Error('invalid overload');
    }

    buildDebugName(name: string, locale: Locale, customLookupCondition: any, encoding: string, parse: boolean): string {
        return StringUtil.jQuoteNoXSS$java_lang_Object(name) + "(" + StringUtil.jQuoteNoXSS$java_lang_Object(locale) + (customLookupCondition != null ? ", cond=" + StringUtil.jQuoteNoXSS$java_lang_Object(customLookupCondition) : "") + ", " + encoding + (parse ? ", parsed)" : ", unparsed]");
    }

    /**
     * @throws IllegalArgumentException If the {@code baseName} or {@code targetName} is malformed according the {link TemplateNameFormat}
     * in use.
     * @deprecated Use {link Environment#toFullTemplateName(String, String)} instead, as that can throw
     * {link MalformedTemplateNameException}, and is on a more logical place anyway.
     * @param {Environment} env
     * @param {String} baseName
     * @param {String} targetName
     * @return {String}
     */
    public static getFullTemplatePath(env: /*Environment*/any, baseName: string, targetName: string): string {
        try {
            return env.toFullTemplateName(baseName, targetName);
        } catch (e) {
            throw Object.defineProperty(new Error(e.message), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception']
            });
        }
    }

    lookupTemplate(name: string, locale: Locale, customLookupCondition: any): TemplateLookupResult {
        let lookupResult: TemplateLookupResult = this.templateLookupStrategy.lookup(new TemplateCache.TemplateCacheTemplateLookupContext(this, name, locale, customLookupCondition));
        if (lookupResult == null) {
            throw Object.defineProperty(new Error("Lookup result shouldn\'t be null"), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.NullPointerException', 'java.lang.Exception']
            });
        }
        return lookupResult;
    }

    lookupTemplateWithAcquisitionStrategy(path: string): TemplateLookupResult {
        let asterisk: number = path.indexOf(TemplateCache.ASTERISK);
        if (asterisk === -1) {
            return TemplateLookupResult.from(path, this.findTemplateSource(path));
        }
        let tok: StringTokenizer = new StringTokenizer(path, "/");
        let lastAsterisk: number = -1;
        let tokpath: Array<any> = <any>([]);
        while ((tok.hasMoreTokens())) {
            let pathToken: string = tok.nextToken();
            if (/* equals */(<any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                    return o1.equals(o2);
                } else {
                    return o1 === o2;
                }
            })(pathToken, TemplateCache.ASTERISKSTR))) {
                if (lastAsterisk !== -1) {
                    /* remove */
                    tokpath.splice(lastAsterisk, 1);
                }
                lastAsterisk = /* size */(<number>tokpath.length);
            }
            /* add */
            (tokpath.push(pathToken) > 0);
        }
        if (lastAsterisk === -1) {
            return TemplateLookupResult.from(path, this.findTemplateSource(path));
        }
        let basePath: string = this.concatPath(tokpath, 0, lastAsterisk);
        let resourcePath: string = this.concatPath(tokpath, lastAsterisk + 1, /* size */(<number>tokpath.length));
        if (/* endsWith */((str, searchString) => {
            let pos = str.length - searchString.length;
            let lastIndex = str.indexOf(searchString, pos);
            return lastIndex !== -1 && lastIndex === pos;
        })(resourcePath, "/")) {
            resourcePath = resourcePath.substring(0, resourcePath.length - 1);
        }
        let buf: StringBuilder = new StringBuilder("").append(basePath);
        let l: number = basePath.length;
        for (; ;) {
            let fullPath: string = buf.append(resourcePath).toString();
            let templateSource: any = this.findTemplateSource(fullPath);
            if (templateSource != null) {
                return TemplateLookupResult.from(fullPath, templateSource);
            }
            if (l === 0) {
                return TemplateLookupResult.createNegativeResult();
            }
            l = basePath.lastIndexOf(TemplateCache.SLASH, l - 2) + 1;
            buf.setLength(l);
        }
    }

    findTemplateSource(path: string): any {
        let result: any = this.templateLoader.findTemplateSource(path);
        if (TemplateCache.LOG_$LI$().isDebugEnabled()) {
            TemplateCache.LOG_$LI$().debug$java_lang_String("TemplateLoader.findTemplateSource(" + StringUtil.jQuote$java_lang_Object(path) + "): " + (result == null ? "Not found" : "Found"));
        }
        return this.modifyForConfIcI(result);
    }

    /**
     * If IcI >= 2.3.21, sets {link URLTemplateSource#setUseCaches(boolean)} to {@code false} for sources that come
     * from a {link TemplateLoader} where {link URLConnection} cache usage wasn't set explicitly.
     * @param {Object} templateSource
     * @return {Object}
     * @private
     */
    modifyForConfIcI(templateSource: any): any {
        if (templateSource == null) return null;
        if (this.config.getIncompatibleImprovements().intValue() < /*_TemplateAPI.VERSION_INT_2_3_21_$LI$()*/2003021) {
            return templateSource;
        }
        return templateSource;
    }

    concatPath(path: Array<any>, from: number, to: number): string {
        let buf: StringBuilder = new StringBuilder("");
        for (let i: number = from; i < to; ++i) {
            buf.append(/* get */path[i]).append('/');
        }
        return buf.toString();
    }
}

TemplateCache["__class"] = "freemarker.cache.TemplateCache";


export namespace TemplateCache {

    /**
     * This class holds a (name, locale) pair and is used as the key in
     * the cached templates map.
     * @class
     */
    export class TemplateKey {
        name: string;

        locale: Locale;

        customLookupCondition: any;

        encoding: string;

        parse: boolean;

        constructor(name: string, locale: Locale, customLookupCondition: any, encoding: string, parse: boolean) {
            if (this.name === undefined) this.name = null;
            if (this.locale === undefined) this.locale = null;
            if (this.customLookupCondition === undefined) this.customLookupCondition = null;
            if (this.encoding === undefined) this.encoding = null;
            if (this.parse === undefined) this.parse = false;
            this.name = name;
            this.locale = locale;
            this.customLookupCondition = customLookupCondition;
            this.encoding = encoding;
            this.parse = parse;
        }

        /**
         *
         * @param {Object} o
         * @return {boolean}
         */
        public equals(o: any): boolean {
            if (o != null && o instanceof <any>TemplateCache.TemplateKey) {
                let tk: TemplateCache.TemplateKey = <TemplateCache.TemplateKey>o;
                return this.parse === tk.parse && /* equals */(<any>((o1: any, o2: any) => {
                    if (o1 && o1.equals) {
                        return o1.equals(o2);
                    } else {
                        return o1 === o2;
                    }
                })(this.name, tk.name)) && this.locale.equals(tk.locale) && this.nullSafeEquals(this.customLookupCondition, tk.customLookupCondition) && /* equals */(<any>((o1: any, o2: any) => {
                    if (o1 && o1.equals) {
                        return o1.equals(o2);
                    } else {
                        return o1 === o2;
                    }
                })(this.encoding, tk.encoding));
            }
            return false;
        }

        nullSafeEquals(o1: any, o2: any): boolean {
            return o1 != null ? (o2 != null && /* equals */(<any>((o1: any, o2: any) => {
                if (o1 && o1.equals) {
                    return o1.equals(o2);
                } else {
                    return o1 === o2;
                }
            })(o1, o2))) : o2 == null;
        }

        /**
         *
         * @return {number}
         */
        public hashCode(): number {
            return /* hashCode */(<any>((o: any) => {
                if (o.hashCode) {
                    return o.hashCode();
                } else {
                    return o.toString();
                }
            })(this.name)) ^ /* hashCode */(<any>((o: any) => {
                if (o.hashCode) {
                    return o.hashCode();
                } else {
                    return o.toString();
                }
            })(this.locale)) ^ /* hashCode */(<any>((o: any) => {
                if (o.hashCode) {
                    return o.hashCode();
                } else {
                    return o.toString();
                }
            })(this.encoding)) ^ (this.customLookupCondition != null ? /* hashCode */(<any>((o: any) => {
                if (o.hashCode) {
                    return o.hashCode();
                } else {
                    return o.toString();
                }
            })(this.customLookupCondition)) : 0) ^ new Boolean(this.parse).hashCode();
        }
    }

    TemplateKey["__class"] = "freemarker.cache.TemplateCache.TemplateKey";


    /**
     * This class holds the cached template and associated information
     * (the source object, and the last-checked and last-modified timestamps).
     * It is used as the value in the cached templates map. Note: this class
     * is Serializable to allow custom 3rd party CacheStorage implementations
     * to serialize/replicate them (see tracker issue #1926150); FreeMarker
     * code itself doesn't rely on its serializability.
     * @class
     */
    export class CachedTemplate {
        static serialVersionUID: number = 1;

        templateOrException: any;

        source: any;

        lastChecked: number;

        lastModified: number;

        public cloneCachedTemplate(): TemplateCache.CachedTemplate {
            try {
                return <TemplateCache.CachedTemplate>/* clone *//* clone */((o: any) => {
                    let clone = Object.create(o);
                    for (let p in o) {
                        if (o.hasOwnProperty(p)) clone[p] = o[p];
                    }
                    return clone;
                })(this);
            } catch (e) {
                throw new UndeclaredThrowableException(e);
            }
        }

        constructor() {
            if (this.templateOrException === undefined) this.templateOrException = null;
            if (this.source === undefined) this.source = null;
            if (this.lastChecked === undefined) this.lastChecked = 0;
            if (this.lastModified === undefined) this.lastModified = 0;
        }
    }

    CachedTemplate["__class"] = "freemarker.cache.TemplateCache.CachedTemplate";
    CachedTemplate["__interfaces"] = ["java.lang.Cloneable", "java.io.Serializable"];


    export class TemplateCacheTemplateLookupContext extends TemplateLookupContext {
        public __parent: any;

        constructor(__parent: any, templateName: string, templateLocale: Locale, customLookupCondition: any) {
            super(templateName, __parent.localizedLookup ? templateLocale : null, customLookupCondition);
            this.__parent = __parent;
        }

        /**
         *
         * @param {String} name
         * @return {TemplateLookupResult}
         */
        public lookupWithAcquisitionStrategy(name: string): TemplateLookupResult {
            if (name.startsWith("/")) {
                throw Object.defineProperty(new Error("Non-normalized name, starts with \"/\": " + name), '__classes', {
                    configurable: true,
                    value: ['java.lang.Throwable', 'java.lang.Object', 'java.lang.RuntimeException', 'java.lang.IllegalArgumentException', 'java.lang.Exception']
                });
            }
            return this.__parent.lookupTemplateWithAcquisitionStrategy(name);
        }

        /**
         *
         * @param {String} templateName
         * @param {Locale} templateLocale
         * @return {TemplateLookupResult}
         */
        public lookupWithLocalizedThenAcquisitionStrategy(templateName: string, templateLocale: string): TemplateLookupResult {
            if (templateLocale == null) {
                return this.lookupWithAcquisitionStrategy(templateName);
            }
            let lastDot: number = templateName.lastIndexOf('.');
            let prefix: string = lastDot === -1 ? templateName : templateName.substring(0, lastDot);
            let suffix: string = lastDot === -1 ? "" : templateName.substring(lastDot);
            let localeName: string = TemplateCache.LOCALE_PART_SEPARATOR + templateLocale.toString();
            let buf: StringBuilder = new StringBuilder("");
            buf.append(prefix);
            tryLocaleNameVariations: while ((true)) {
                buf.setLength(prefix.length);
                let path: string = buf.append(localeName).append(suffix).toString();
                let lookupResult: TemplateLookupResult = this.lookupWithAcquisitionStrategy(path);
                if (lookupResult.isPositive()) {
                    return lookupResult;
                }
                let lastUnderscore: number = localeName.lastIndexOf('_');
                if (lastUnderscore === -1) {
                    break tryLocaleNameVariations;
                }
                localeName = localeName.substring(0, lastUnderscore);
            }
            return this.createNegativeLookupResult();
        }
    }

    TemplateCacheTemplateLookupContext["__class"] = "freemarker.cache.TemplateCache.TemplateCacheTemplateLookupContext";


    /**
     * Used for the return value of {link TemplateCache#getTemplate(String, Locale, Object, String, boolean)}.
     *
     * @since 2.3.22
     * @class
     */
    export class MaybeMissingTemplate {
        template: Template;

        missingTemplateNormalizedName: string;

        missingTemplateReason: string;

        missingTemplateCauseException: MalformedTemplateNameException;

        public constructor(normalizedName?: any, missingTemplateCauseException?: any) {
            if(arguments.length === 1) {
                this.template = <Template>arguments[0];
                return;
            }
            this.missingTemplateNormalizedName = normalizedName;
            if(typeof arguments[1] === 'string') {
                this.missingTemplateReason = <string>arguments[1];
            } else {
                this.missingTemplateCauseException = <MalformedTemplateNameException>arguments[1];
            }
        }

        /**
         * The {link Template} if it wasn't missing, otherwise {@code null}.
         * @return {Template}
         */
        public getTemplate(): Template {
            return this.template;
        }

        /**
         * When the template was missing, this <em>possibly</em> contains the explanation, or {@code null}. If the
         * template wasn't missing (i.e., when {link #getTemplate()} return non-{@code null}) this is always
         * {@code null}.
         * @return {String}
         */
        public getMissingTemplateReason(): string {
            return this.missingTemplateReason != null ? this.missingTemplateReason : (this.missingTemplateCauseException != null ? this.missingTemplateCauseException.getMalformednessDescription() : null);
        }

        /**
         * When the template was missing, this <em>possibly</em> contains its normalized name. If the template wasn't
         * missing (i.e., when {link #getTemplate()} return non-{@code null}) this is always {@code null}. When the
         * template is missing, it will be {@code null} for example if the normalization itself was unsuccessful.
         * @return {String}
         */
        public getMissingTemplateNormalizedName(): string {
            return this.missingTemplateNormalizedName;
        }
    }

    MaybeMissingTemplate["__class"] = "freemarker.cache.TemplateCache.MaybeMissingTemplate";

}


TemplateCache.INIT_CAUSE_$LI$();

TemplateCache.LOG_$LI$();
