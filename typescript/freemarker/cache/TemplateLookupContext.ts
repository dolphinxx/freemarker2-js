/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateLookupResult} from './TemplateLookupResult';
import {Locale} from "../../java/util/Locale";

/**
 * Used as the parameter of {link TemplateLookupStrategy#lookup(TemplateLookupContext)}.
 * You can't create instances of this, only receive them from FreeMarker.
 * 
 * @since 2.3.22
 * @class
 */
export abstract class TemplateLookupContext {
    /*private*/ templateName : string;

    /*private*/ templateLocale : Locale;

    /*private*/ customLookupCondition : any;

    /**
     * Finds the template source based on its <em>normalized</em> name; handles {@code *} steps (so called acquisition),
     * otherwise it just calls {link TemplateLoader#findTemplateSource(String)}.
     * 
     * @param {String} templateName Must be a normalized name, like {@code "foo/bar/baaz.ftl"}. A name is not normalized when, among
     * others, it starts with {@code /}, or contains {@code .} or {@code ..} path steps, or it uses
     * backslash ({@code \}) instead of {@code /}. A normalized name might contains "*" path steps
     * (acquisition).
     * @return {TemplateLookupResult} The result of the lookup. Not {@code null}; check {link TemplateLookupResult#isPositive()} to see if the
     * lookup has found anything.
     */
    public abstract lookupWithAcquisitionStrategy(templateName : string) : TemplateLookupResult;

    /**
     * Finds the template source based on its <em>normalized</em> name; tries localized variations going from most
     * specific to less specific, and for each variation it delegates to {link #lookupWithAcquisitionStrategy(String)}.
     * If {@code templateLocale} is {@code null} (typically, because {link Configuration#getLocalizedLookup()} is
     * {@code false})), then it's the same as calling {link #lookupWithAcquisitionStrategy(String)} directly. This is
     * the default strategy of FreeMarker (at least in 2.3.x), so for more information, see
     * {link TemplateLookupStrategy#DEFAULT_2_3_0}.
     * @param {String} templateName
     * @param {Locale} templateLocale
     * @return {TemplateLookupResult}
     */
    public abstract lookupWithLocalizedThenAcquisitionStrategy(templateName : string, templateLocale : string) : TemplateLookupResult;

    constructor(templateName : string, templateLocale : Locale, customLookupCondition : any) {
        if(this.templateName===undefined) this.templateName = null;
        if(this.templateLocale===undefined) this.templateLocale = null;
        if(this.customLookupCondition===undefined) this.customLookupCondition = null;
        this.templateName = templateName;
        this.templateLocale = templateLocale;
        this.customLookupCondition = customLookupCondition;
    }

    /**
     * The normalized name (path) of the template (relatively to the {link TemplateLoader}). Not {@code null}.
     * @return {String}
     */
    public getTemplateName() : string {
        return this.templateName;
    }

    /**
     * {@code null} if localized lookup is disabled (see {link Configuration#getLocalizedLookup()}), otherwise the
     * locale requested.
     * @return {Locale}
     */
    public getTemplateLocale() : Locale {
        return this.templateLocale;
    }

    /**
     * Returns the value of the {@code customLookupCondition} parameter of
     * {link Configuration#getTemplate(String, Locale, Object, String, boolean, boolean)}; see requirements there, such
     * as having a proper {link Object#equals(Object)} and {link Object#hashCode()} method. The interpretation of this
     * value is up to the custom {link TemplateLookupStrategy}. Usually, it's used similarly to as the default lookup
     * strategy uses {link #getTemplateLocale()}, that is, to look for a template variation that satisfies the
     * condition, and then maybe fall back to more generic template if that's missing.
     * @return {Object}
     */
    public getCustomLookupCondition() : any {
        return this.customLookupCondition;
    }

    /**
     * Creates a not-found lookup result that then can be used as the return value of
     * {link TemplateLookupStrategy#lookup(TemplateLookupContext)}. (In the current implementation it just always
     * returns the same static singleton, but that might need to change in the future.)
     * @return {TemplateLookupResult}
     */
    public createNegativeLookupResult() : TemplateLookupResult {
        return TemplateLookupResult.createNegativeResult();
    }
}
TemplateLookupContext["__class"] = "freemarker.cache.TemplateLookupContext";



