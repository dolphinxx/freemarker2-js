/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Superclass of all value format objects; objects that convert values to strings, or parse strings.
 * 
 * @since 2.3.24
 * @class
 */
export abstract class TemplateValueFormat {
    /**
     * Meant to be used in error messages to tell what format the parsed string didn't fit.
     * @return {String}
     */
    public abstract getDescription() : string;
}
TemplateValueFormat["__class"] = "freemarker.core.TemplateValueFormat";



var __Function = Function;
