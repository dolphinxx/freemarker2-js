/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Locale} from "../../java/util/Locale";

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * This class is to work around the lack of module system in Java, i.e., so that other FreeMarker packages can
 * access things inside this package that users shouldn't.
 * @class
 */
export class _CoreLocaleUtils {
    /**
     * Returns a locale that's one less specific, or {@code null} if there's no less specific locale.
     * @param {Locale} locale
     * @return {Locale}
     */
    public static getLessSpecificLocale(locale : Locale) : Locale {
        let country : string = locale.getCountry();
        if(locale.getVariant().length !== 0) {
            let language : string = locale.getLanguage();
            return country != null?new Locale(language, country):new Locale(language, null);
        }
        if(country.length !== 0) {
            return new Locale(locale.getLanguage(), null);
        }
        return null;
    }
}
_CoreLocaleUtils["__class"] = "freemarker.core._CoreLocaleUtils";




