/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Thrown when {link Configuration#getTemplate(String)} (or similar) doesn't find a template.
 * This extends {link FileNotFoundException} for backward compatibility, but in fact has nothing to do with files, as
 * FreeMarker can load templates from many other sources.
 * 
 * @since 2.3.22
 * <p>
 * see MalformedTemplateNameException
 * see Configuration#getTemplate(String)
 * @param {String} templateName
 * @param {Object} customLookupCondition
 * @param {String} message
 * @class
 * @extends Error
 */
export class TemplateNotFoundException {
    /*private*/ templateName : string;

    /*private*/ customLookupCondition : any;

    public constructor(templateName : string, customLookupCondition : any, message : string) {
        (<any>Object).setPrototypeOf(this, TemplateNotFoundException.prototype);
        if(this.templateName===undefined) this.templateName = null;
        if(this.customLookupCondition===undefined) this.customLookupCondition = null;
        this.templateName = templateName;
        this.customLookupCondition = customLookupCondition;
    }

    /**
     * The name (path) of the template that wasn't found.
     * @return {String}
     */
    public getTemplateName() : string {
        return this.templateName;
    }

    /**
     * The custom lookup condition with which the template was requested, or {@code null} if there's no such condition.
     * See the {@code customLookupCondition} parameter of
     * {link Configuration#getTemplate(String, java.util.Locale, Object, String, boolean, boolean)}.
     * @return {Object}
     */
    public getCustomLookupCondition() : any {
        return this.customLookupCondition;
    }
}
TemplateNotFoundException["__class"] = "freemarker.template.TemplateNotFoundException";
TemplateNotFoundException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
