/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateLookupResult} from './TemplateLookupResult';
import {TemplateLookupContext} from './TemplateLookupContext';

/**
 * Finds the {link TemplateLoader}-level (storage-level) template source for the template name with which the template
 * was requested (as in {link Configuration#getTemplate(String)}). This usually means trying various
 * {link TemplateLoader}-level template names (so called source names; see also {link Template#getSourceName()}) that
 * were deduced from the requested name. Trying a name usually means calling
 * {link TemplateLookupContext#lookupWithAcquisitionStrategy(String)} with it and checking the value of
 * {link TemplateLookupResult#isPositive()}.
 * <p>
 * <p>
 * Before you write your own lookup strategy, know that:
 * <ul>
 * <li>A template lookup strategy meant to operate solely with template names, not with {link TemplateLoader}-s
 * directly. Basically, it's a mapping between the template names that templates and API-s like
 * {link Configuration#getTemplate(String)} see, and those that the underlying {link TemplateLoader} sees.
 * <li>A template lookup strategy doesn't influence the template's name ({link Template#getName()}), which is the
 * normalized form of the template name as it was requested (with {link Configuration#getTemplate(String)}, etc.). It
 * only influences the so called source name of the template ({link Template#getSourceName()}). The template's name is
 * used as the basis for resolving relative inclusions/imports in the template. The source name is pretty much only used
 * in error messages as error location, and of course, to actually load the template "file".
 * <li>Understand the impact of the last point if your template lookup strategy fiddles not only with the file name part
 * of the template name, but also with the directory part. For example, one may want to map "foo.ftl" to "en/foo.ftl",
 * "fr/foo.ftl", etc. That's legal, but the result is kind of like if you had several root directories ("en/", "fr/",
 * etc.) that are layered over each other to form a single merged directory. (This is what's desirable in typical
 * applications, yet it can be confusing.)
 * </ul>
 * <p>
 * see Configuration#setTemplateLookupStrategy(TemplateLookupStrategy)
 * 
 * @since 2.3.22
 * @class
 */
export abstract class TemplateLookupStrategy {
    /**
     * <p>
     * The default lookup strategy of FreeMarker.
     * <p>
     * <p>
     * Through an example: Assuming localized lookup is enabled and that a template is requested for the name
     * {@code example.ftl} and {@code Locale("es", "ES", "Traditional_WIN")}, it will try the following template names,
     * in this order: {@code "foo_en_AU_Traditional_WIN.ftl"}, {@code "foo_en_AU_Traditional.ftl"},
     * {@code "foo_en_AU.ftl"}, {@code "foo_en.ftl"}, {@code "foo.ftl"}. It stops at the first variation where it finds
     * a template. (If the template name contains "*" steps, finding the template for the attempted localized variation
     * happens with the template acquisition mechanism.) If localized lookup is disabled, it won't try to add any locale
     * strings, so it just looks for {@code "foo.ftl"}.
     * <p>
     * <p>
     * The generation of the localized name variation with the default lookup strategy, happens like this: It removes
     * the file extension (the part starting with the <em>last</em> dot), then appends {link Locale#toString()} after
     * it, and puts back the extension. Then it starts to remove the parts from the end of the locale, considering
     * {@code "_"} as the separator between the parts. It won't remove parts that are not part of the locale string
     * (like if the requested template name is {@code foo_bar.ftl}, it won't remove the {@code "_bar"}).
     */
    public static DEFAULT_2_3_0 : TemplateLookupStrategy; public static DEFAULT_2_3_0_$LI$() : TemplateLookupStrategy { if(TemplateLookupStrategy.DEFAULT_2_3_0 == null) TemplateLookupStrategy.DEFAULT_2_3_0 = new TemplateLookupStrategy.Default020300(); return TemplateLookupStrategy.DEFAULT_2_3_0; };

    /**
     * Finds the template source that matches the template name, locale (if not {@code null}) and other parameters
     * specified in the {link TemplateLookupContext}. See also the class-level {link TemplateLookupStrategy}
     * documentation to understand lookup strategies more.
     * 
     * @param {TemplateLookupContext} ctx Contains the parameters for which the matching template need to be found, and operations that
     * are needed to implement the strategy. Some of the important input parameters are:
     * {link TemplateLookupContext#getTemplateName()}, {link TemplateLookupContext#getTemplateLocale()}.
     * The most important operations are {link TemplateLookupContext#lookupWithAcquisitionStrategy(String)}
     * and {link TemplateLookupContext#createNegativeLookupResult()}. (Note that you deliberately can't
     * use {link TemplateLoader}-s directly to implement lookup.)
     * @return {TemplateLookupResult} Usually the return value of {link TemplateLookupContext#lookupWithAcquisitionStrategy(String)}, or
     * {@code TemplateLookupContext#createNegativeLookupResult()} if no matching template exists. Can't be
     * {@code null}.
     */
    public abstract lookup(ctx : TemplateLookupContext) : TemplateLookupResult;
}
TemplateLookupStrategy["__class"] = "freemarker.cache.TemplateLookupStrategy";


export namespace TemplateLookupStrategy {

    export class Default020300 extends TemplateLookupStrategy {
        /**
         * 
         * @param {TemplateLookupContext} ctx
         * @return {TemplateLookupResult}
         */
        public lookup(ctx : TemplateLookupContext) : TemplateLookupResult {
            return ctx.lookupWithLocalizedThenAcquisitionStrategy(ctx.getTemplateName(), ctx.getTemplateLocale());
        }

        /**
         * 
         * @return {String}
         */
        public toString() : string {
            return "TemplateLookupStrategy.DEFAULT_2_3_0";
        }

        constructor() {
            super();
        }
    }
    Default020300["__class"] = "freemarker.cache.TemplateLookupStrategy.Default020300";

}




TemplateLookupStrategy.DEFAULT_2_3_0_$LI$();
