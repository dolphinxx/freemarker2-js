/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { NullArgumentException } from '../template/utility/NullArgumentException';

/**
 * The return value of {link TemplateLookupStrategy#lookup(TemplateLookupContext)} and similar lookup methods. You
 * usually get one from {link TemplateLookupContext#lookupWithAcquisitionStrategy(String)} or
 * {link TemplateLookupContext#createNegativeLookupResult()}; you can't create instances of this directly.
 * 
 * @since 2.3.22
 * @class
 */
export abstract class TemplateLookupResult {
    /**
     * Used internally to get a not-found result (currently just a static singleton).
     * @return {TemplateLookupResult}
     */
    static createNegativeResult() : TemplateLookupResult {
        return TemplateLookupResult.NegativeTemplateLookupResult.INSTANCE_$LI$();
    }

    /**
     * Used internally to create the appropriate kind of result from the parameters.
     * @param {String} templateSourceName
     * @param {Object} templateSource
     * @return {TemplateLookupResult}
     */
    static from(templateSourceName : string, templateSource : any) : TemplateLookupResult {
        return templateSource != null?new TemplateLookupResult.PositiveTemplateLookupResult(templateSourceName, templateSource):TemplateLookupResult.createNegativeResult();
    }

    constructor() {
    }

    /**
     * The source name of the template found (see {link Template#getSourceName()}), or {@code null} if
     * {link #isPositive()} is {@code false}.
     * @return {String}
     */
    public abstract getTemplateSourceName() : string;

    /**
     * Tells if the lookup has found a matching template.
     * @return {boolean}
     */
    public abstract isPositive() : boolean;

    /**
     * Used internally to extract the {link TemplateLoader} source; {@code null} if
     * {link #isPositive()} is {@code false}.
     * @return {Object}
     */
    abstract getTemplateSource() : any;
}
TemplateLookupResult["__class"] = "freemarker.cache.TemplateLookupResult";


export namespace TemplateLookupResult {

    export class PositiveTemplateLookupResult extends TemplateLookupResult {
        templateSourceName : string;

        templateSource : any;

        constructor(templateSourceName : string, templateSource : any) {
            super();
            if(this.templateSourceName===undefined) this.templateSourceName = null;
            if(this.templateSource===undefined) this.templateSource = null;
            NullArgumentException.check$java_lang_String$java_lang_Object("templateName", templateSourceName);
            NullArgumentException.check$java_lang_String$java_lang_Object("templateSource", templateSource);
            if(templateSource != null && templateSource instanceof <any>TemplateLookupResult) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
            this.templateSourceName = templateSourceName;
            this.templateSource = templateSource;
        }

        /**
         * 
         * @return {String}
         */
        public getTemplateSourceName() : string {
            return this.templateSourceName;
        }

        /**
         * 
         * @return {Object}
         */
        getTemplateSource() : any {
            return this.templateSource;
        }

        /**
         * 
         * @return {boolean}
         */
        public isPositive() : boolean {
            return true;
        }
    }
    PositiveTemplateLookupResult["__class"] = "freemarker.cache.TemplateLookupResult.PositiveTemplateLookupResult";


    export class NegativeTemplateLookupResult extends TemplateLookupResult {
        static INSTANCE : TemplateLookupResult.NegativeTemplateLookupResult; public static INSTANCE_$LI$() : TemplateLookupResult.NegativeTemplateLookupResult { if(NegativeTemplateLookupResult.INSTANCE == null) NegativeTemplateLookupResult.INSTANCE = new TemplateLookupResult.NegativeTemplateLookupResult(); return NegativeTemplateLookupResult.INSTANCE; };

        constructor() {
            super();
        }

        /**
         * 
         * @return {String}
         */
        public getTemplateSourceName() : string {
            return null;
        }

        /**
         * 
         * @return {Object}
         */
        getTemplateSource() : any {
            return null;
        }

        /**
         * 
         * @return {boolean}
         */
        public isPositive() : boolean {
            return false;
        }
    }
    NegativeTemplateLookupResult["__class"] = "freemarker.cache.TemplateLookupResult.NegativeTemplateLookupResult";

}




TemplateLookupResult.NegativeTemplateLookupResult.INSTANCE_$LI$();
