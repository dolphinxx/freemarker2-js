/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from '../template/utility/StringUtil';
import {TemplateDateFormatFactory} from './TemplateDateFormatFactory';
import {TemplateDateFormat} from './TemplateDateFormat';
import {Environment} from './Environment';
import {TemplateFormatUtil} from './TemplateFormatUtil';
import {_CoreLocaleUtils} from './_CoreLocaleUtils';
import {AliasTargetTemplateValueFormatException} from './AliasTargetTemplateValueFormatException';

/**
 * @param {String} defaultTargetFormatString    The format string this format will be an alias to if there's no locale-specific format string for the
 * requested locale in {@code localizedTargetFormatStrings}
 * @param {Map} localizedTargetFormatStrings Maps {link Locale}-s to format strings. If the desired locale doesn't occur in the map, a less
 * specific locale is tried, repeatedly until only the language part remains. For example, if locale is
 * {@code new Locale("en", "US", "Linux")}, then these keys will be attempted untol a match is found, in
 * this order: {@code new Locale("en", "US", "Linux")}, {@code new Locale("en", "US")},
 * {@code new Locale("en")}. If there's still no matching key, the value of the
 * {@code targetFormatString} will be used.
 * @class
 * @extends TemplateDateFormatFactory
 */
export class AliasTemplateDateFormatFactory extends TemplateDateFormatFactory {
    /*private*/ defaultTargetFormatString : string;

    /*private*/ localizedTargetFormatStrings : Map<any, any>;

    public constructor(defaultTargetFormatString? : any, localizedTargetFormatStrings? : any) {
        if(((typeof defaultTargetFormatString === 'string') || defaultTargetFormatString === null) && ((localizedTargetFormatStrings != null && (localizedTargetFormatStrings instanceof Map)) || localizedTargetFormatStrings === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.defaultTargetFormatString===undefined) this.defaultTargetFormatString = null;
            if(this.localizedTargetFormatStrings===undefined) this.localizedTargetFormatStrings = null;
            if(this.defaultTargetFormatString===undefined) this.defaultTargetFormatString = null;
            if(this.localizedTargetFormatStrings===undefined) this.localizedTargetFormatStrings = null;
            (() => {
                this.defaultTargetFormatString = defaultTargetFormatString;
                this.localizedTargetFormatStrings = localizedTargetFormatStrings;
            })();
        } else if(((typeof defaultTargetFormatString === 'string') || defaultTargetFormatString === null) && localizedTargetFormatStrings === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let targetFormatString : any = __args[0];
            super();
            if(this.defaultTargetFormatString===undefined) this.defaultTargetFormatString = null;
            if(this.localizedTargetFormatStrings===undefined) this.localizedTargetFormatStrings = null;
            if(this.defaultTargetFormatString===undefined) this.defaultTargetFormatString = null;
            if(this.localizedTargetFormatStrings===undefined) this.localizedTargetFormatStrings = null;
            (() => {
                this.defaultTargetFormatString = targetFormatString;
                this.localizedTargetFormatStrings = null;
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {String} params
     * @param {number} dateType
     * @param {Locale} locale
     * @param {TimeZone} timeZone
     * @param {boolean} zonelessInput
     * @param {Environment} env
     * @return {TemplateDateFormat}
     */
    public get(params : string, dateType : number, locale : string, timeZone : string, zonelessInput : boolean, env : /*Environment*/any) : TemplateDateFormat {
        TemplateFormatUtil.checkHasNoParameters(params);
        try {
            let targetFormatString : string;
            if(this.localizedTargetFormatStrings != null) {
                let lookupLocale : string = locale;
                targetFormatString = /* get */this.localizedTargetFormatStrings.get(lookupLocale);
                while((targetFormatString == null && (lookupLocale = _CoreLocaleUtils.getLessSpecificLocale(lookupLocale)) != null)) {
                    targetFormatString = /* get */this.localizedTargetFormatStrings.get(lookupLocale);
                }
            } else {
                targetFormatString = null;
            }
            if(targetFormatString == null) {
                targetFormatString = this.defaultTargetFormatString;
            }
            return env.getTemplateDateFormat$java_lang_String$int$java_util_Locale$java_util_TimeZone$boolean(targetFormatString, dateType, locale, timeZone, zonelessInput);
        } catch(e) {
            throw new AliasTargetTemplateValueFormatException("Failed to create format based on target format string,  " + StringUtil.jQuote$java_lang_Object(params) + ". Reason given: " + e.message, e);
        }
    }
}
AliasTemplateDateFormatFactory["__class"] = "freemarker.core.AliasTemplateDateFormatFactory";



