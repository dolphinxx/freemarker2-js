/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateValueFormatFactory} from './TemplateValueFormatFactory';
import {TemplateNumberFormat} from './TemplateNumberFormat';
import {TemplateValueFormatException} from './TemplateValueFormatException';
import {Locale} from "../../java/util/Locale";

/**
 * Factory for a certain kind of number formatting ({link TemplateNumberFormat}). Usually a singleton (one-per-VM or
 * one-per-{link Configuration}), and so must be thread-safe.
 * <p>
 * see Configurable#setCustomNumberFormats(java.util.Map)
 * 
 * @since 2.3.24
 * @class
 * @extends TemplateValueFormatFactory
 */
export abstract class TemplateNumberFormatFactory extends TemplateValueFormatFactory {
    /**
     * Returns a formatter for the given parameters.
     * <p>
     * <p>
     * The returned formatter can be a new instance or a reused (cached) instance. Note that {link Environment} itself
     * caches the returned instances, though that cache is lost with the {link Environment} (i.e., when the top-level
     * template execution ends), also it might flushes lot of entries if the locale or time zone is changed during
     * template execution. So caching on the factory level is still useful, unless creating the formatters is
     * sufficiently cheap.
     * 
     * @param {String} params The string that further describes how the format should look. For example, when the
     * {link Configurable#getNumberFormat() numberFormat} is {@code "@fooBar 1, 2"}, then it will be
     * {@code "1, 2"} (and {@code "@fooBar"} selects the factory). The format of this string is up to the
     * {link TemplateNumberFormatFactory} implementation. Not {@code null}, often an empty string.
     * @param {Locale} locale The locale to format for. Not {@code null}. The resulting format must be bound to this locale
     * forever (i.e. locale changes in the {link Environment} must not be followed).
     * @param {Environment} env    The runtime environment from which the formatting was called. This is mostly meant to be used for
     * {link Environment#setCustomState(Object, Object)}/{link Environment#getCustomState(Object)}.
     * @throws TemplateValueFormatException if any problem occurs while parsing/getting the format. Notable subclasses:
     * {link InvalidFormatParametersException} if the {@code params} is malformed.
     * @return {TemplateNumberFormat}
     */
    public abstract get(params : string, locale : Locale, env : /*Environment*/any) : TemplateNumberFormat;
}
TemplateNumberFormatFactory["__class"] = "freemarker.core.TemplateNumberFormatFactory";




