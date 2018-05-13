/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Logger} from '../log/Logger';
import {TemplateNumberFormatFactory} from './TemplateNumberFormatFactory';
import {TemplateNumberFormat} from './TemplateNumberFormat';
import {Map} from "../../java/util/Map";
import {JavaTemplateNumberFormat} from "./JavaTemplateNumberFormat";
import {DecimalFormat} from "../../java/text/DecimalFormat";
import {Locale} from "../../java/util/Locale";

/**
 * Deals with {link TemplateNumberFormat}-s that just wrap a Java {link NumberFormat}.
 * @extends TemplateNumberFormatFactory
 * @class
 */
export class JavaTemplateNumberFormatFactory extends TemplateNumberFormatFactory {
    static INSTANCE : JavaTemplateNumberFormatFactory; public static INSTANCE_$LI$() : JavaTemplateNumberFormatFactory { if(JavaTemplateNumberFormatFactory.INSTANCE == null) JavaTemplateNumberFormatFactory.INSTANCE = new JavaTemplateNumberFormatFactory(); return JavaTemplateNumberFormatFactory.INSTANCE; };

    static LOG : Logger; public static LOG_$LI$() : Logger { if(JavaTemplateNumberFormatFactory.LOG == null) JavaTemplateNumberFormatFactory.LOG = Logger.getLogger("freemarker.runtime"); return JavaTemplateNumberFormatFactory.LOG; };

    static GLOBAL_FORMAT_CACHE : Map<any, any> = new Map();

    static LEAK_ALERT_NUMBER_FORMAT_CACHE_SIZE : number = 1024;

    constructor() {
        super();
    }

    /**
     * 
     * @param {String} params
     * @param {Locale} locale
     * @param {Environment} env
     * @return {TemplateNumberFormat}
     */
    public get(params : string, locale : Locale, env : /*Environment*/any) : TemplateNumberFormat {
        // let cacheKey : JavaTemplateNumberFormatFactory.CacheKey = new JavaTemplateNumberFormatFactory.CacheKey(params, locale);
        // let jFormat : /*NumberFormat*/any = /* get */JavaTemplateNumberFormatFactory.GLOBAL_FORMAT_CACHE_$LI$().get(cacheKey);
        // if(jFormat == null) {
        //     if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("number",params))) {
        //         jFormat = NumberFormat.getNumberInstance(locale);
        //     } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("currency",params))) {
        //         jFormat = NumberFormat.getCurrencyInstance(locale);
        //     } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("percent",params))) {
        //         jFormat = NumberFormat.getPercentInstance(locale);
        //     } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("computer",params))) {
        //         jFormat = env.getCNumberFormat();
        //     } else {
        //         try {
        //             jFormat = ExtendedDecimalFormatParser.parse(params, locale);
        //         } catch(e) {
        //             let msg : string = e.message;
        //             throw new InvalidFormatParametersException(msg != null?msg:"Invalid DecimalFormat pattern", e);
        //         };
        //     }
        //     if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>JavaTemplateNumberFormatFactory.GLOBAL_FORMAT_CACHE_$LI$()) >= JavaTemplateNumberFormatFactory.LEAK_ALERT_NUMBER_FORMAT_CACHE_SIZE) {
        //         let triggered : boolean = false;
        //         {
        //             if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>JavaTemplateNumberFormatFactory.GLOBAL_FORMAT_CACHE_$LI$()) >= JavaTemplateNumberFormatFactory.LEAK_ALERT_NUMBER_FORMAT_CACHE_SIZE) {
        //                 triggered = true;
        //                 /* clear */(<any>JavaTemplateNumberFormatFactory.GLOBAL_FORMAT_CACHE_$LI$()).clear();
        //             }
        //         };
        //         if(triggered) {
        //             JavaTemplateNumberFormatFactory.LOG_$LI$().warn$java_lang_String("Global Java NumberFormat cache has exceeded " + JavaTemplateNumberFormatFactory.LEAK_ALERT_NUMBER_FORMAT_CACHE_SIZE + " entries => cache flushed. Typical cause: Some template generates high variety of format pattern strings.");
        //         }
        //     }
        //     let prevJFormat : NumberFormat = JavaTemplateNumberFormatFactory.GLOBAL_FORMAT_CACHE_$LI$().putIfAbsent(cacheKey, jFormat);
        //     if(prevJFormat != null) {
        //         jFormat = prevJFormat;
        //     }
        // }
        // jFormat = <NumberFormat>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(jFormat);
        // return new JavaTemplateNumberFormat(jFormat, params);
       return new JavaTemplateNumberFormat(new DecimalFormat(), params);
    }
}
JavaTemplateNumberFormatFactory["__class"] = "freemarker.core.JavaTemplateNumberFormatFactory";


export namespace JavaTemplateNumberFormatFactory {

    export class CacheKey {
        pattern : string;

        locale : Locale;

        constructor(pattern : string, locale : Locale) {
            if(this.pattern===undefined) this.pattern = null;
            if(this.locale===undefined) this.locale = null;
            this.pattern = pattern;
            this.locale = locale;
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public equals(o : any) : boolean {
            if(o != null && o instanceof <any>JavaTemplateNumberFormatFactory.CacheKey) {
                let fk : JavaTemplateNumberFormatFactory.CacheKey = <JavaTemplateNumberFormatFactory.CacheKey>o;
                return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(fk.pattern,this.pattern)) && fk.locale.equals(this.locale);
            }
            return false;
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.pattern)) ^ /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.locale));
        }
    }
    CacheKey["__class"] = "freemarker.core.JavaTemplateNumberFormatFactory.CacheKey";

}
JavaTemplateNumberFormatFactory.LOG_$LI$();

JavaTemplateNumberFormatFactory.INSTANCE_$LI$();
