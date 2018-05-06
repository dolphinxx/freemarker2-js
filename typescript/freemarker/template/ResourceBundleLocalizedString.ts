/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {LocalizedString} from './LocalizedString';
import {TemplateModelException} from './TemplateModelException';

/**
 * @param {String} resourceBundleLookupKey The lookup key for the resource bundle
 * @param {String} resourceKey             the specific resource (assumed to be a string) to fish out of the resource bundle
 * @class
 * @extends LocalizedString
 */
export class ResourceBundleLocalizedString extends LocalizedString {
    /*private*/ resourceKey : string;

    /*private*/ resourceBundleLookupKey : string;

    public constructor(resourceBundleLookupKey : string, resourceKey : string) {
        super();
        if(this.resourceKey===undefined) this.resourceKey = null;
        if(this.resourceBundleLookupKey===undefined) this.resourceBundleLookupKey = null;
        this.resourceBundleLookupKey = resourceBundleLookupKey;
        this.resourceKey = resourceKey;
    }

    /**
     * 
     * @param {Locale} locale
     * @return {String}
     */
    public getLocalizedString(locale : string) : string {
        try {
            let rb : ResourceBundle = ResourceBundle.getBundle(this.resourceBundleLookupKey, locale);
            return rb.getString(this.resourceKey);
        } catch(mre) {
            throw new TemplateModelException("missing resource", mre);
        }
    }
}
ResourceBundleLocalizedString["__class"] = "freemarker.template.ResourceBundleLocalizedString";
ResourceBundleLocalizedString["__interfaces"] = ["freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];





