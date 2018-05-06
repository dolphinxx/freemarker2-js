/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Environment} from '../core/Environment';
import {TemplateScalarModel} from './TemplateScalarModel';

/**
 * An abstract base class for scalars that vary by locale.
 * Here is a silly usage example.
 * <code>
 * TemplateScalarModel localizedYes = new LocalizedString() {
 * public String getLocalizedString(java.util.Locale locale) {
 * String lang = locale.getLanguage();
 * if "fr".equals(lang)
 * return "oui";
 * else if "de".equals(lang)
 * return "sí";
 * else
 * return "yes";
 * }
 * };
 * </code>
 * @class
 */
export abstract class LocalizedString implements TemplateScalarModel {
    public getAsString() : string {
        let env : Environment = Environment.getCurrentEnvironment();
        let locale : string = env.getLocale();
        return this.getLocalizedString(locale);
    }

    public abstract getLocalizedString(locale : string) : string;

    constructor() {
    }
}
LocalizedString["__class"] = "freemarker.template.LocalizedString";
LocalizedString["__interfaces"] = ["freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];





