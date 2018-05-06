/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Logger} from '../log/Logger';
import {TemplateDateFormatFactory} from './TemplateDateFormatFactory';
import {TemplateDateFormat} from './TemplateDateFormat';
import {JavaTemplateDateFormat} from './JavaTemplateDateFormat';
import {Map} from '../../java/util/Map';

export class JavaTemplateDateFormatFactory extends TemplateDateFormatFactory {
    static INSTANCE : JavaTemplateDateFormatFactory; public static INSTANCE_$LI$() : JavaTemplateDateFormatFactory { if(JavaTemplateDateFormatFactory.INSTANCE == null) JavaTemplateDateFormatFactory.INSTANCE = new JavaTemplateDateFormatFactory(); return JavaTemplateDateFormatFactory.INSTANCE; };

    static LOG : Logger; public static LOG_$LI$() : Logger { if(JavaTemplateDateFormatFactory.LOG == null) JavaTemplateDateFormatFactory.LOG = Logger.getLogger("freemarker.runtime"); return JavaTemplateDateFormatFactory.LOG; };

    static GLOBAL_FORMAT_CACHE : Map<any, any> = new Map<any, any>();

    static LEAK_ALERT_DATE_FORMAT_CACHE_SIZE : number = 1024;

    constructor() {
        super();
    }

    /**
     * @param {boolean} zonelessInput Has no effect in this implementation.
     * @param {String} params
     * @param {number} dateType
     * @param {Locale} locale
     * @param {TimeZone} timeZone
     * @param {Environment} env
     * @return {TemplateDateFormat}
     */
    public get(params : string, dateType : number, locale : string, timeZone : string, zonelessInput : boolean, env : /*Environment*/any) : TemplateDateFormat {
        return new JavaTemplateDateFormat(this.getJavaDateFormat(dateType, params, locale, timeZone));
    }

    /**
     * Returns a "private" copy (not in the global cache) for the given format.
     * @param {number} dateType
     * @param {String} nameOrPattern
     * @param {Locale} locale
     * @param {TimeZone} timeZone
     * @return {DateFormat}
     * @private
     */
    getJavaDateFormat(dateType : number, nameOrPattern : string, locale : string, timeZone : string) : /*DateFormat*/any {
        // let cacheKey : JavaTemplateDateFormatFactory.CacheKey = new JavaTemplateDateFormatFactory.CacheKey(dateType, nameOrPattern, locale, timeZone);
        // let jFormat : DateFormat;
        // jFormat = /* get */JavaTemplateDateFormatFactory.GLOBAL_FORMAT_CACHE_$LI$().get(cacheKey);
        // if(jFormat == null) {
        //     let tok : StringTokenizer = new StringTokenizer(nameOrPattern, "_");
        //     let tok1Style : number = tok.hasMoreTokens()?this.parseDateStyleToken(tok.nextToken()):DateFormat.DEFAULT;
        //     if(tok1Style !== -1) {
        //         switch((dateType)) {
        //         case TemplateDateModel.UNKNOWN:
        //             {
        //                 throw new UnknownDateTypeFormattingUnsupportedException();
        //             };
        //         case TemplateDateModel.TIME:
        //             {
        //                 jFormat = DateFormat.getTimeInstance(tok1Style, cacheKey.locale);
        //                 break;
        //             };
        //         case TemplateDateModel.DATE:
        //             {
        //                 jFormat = DateFormat.getDateInstance(tok1Style, cacheKey.locale);
        //                 break;
        //             };
        //         case TemplateDateModel.DATETIME:
        //             {
        //                 let tok2Style : number = tok.hasMoreTokens()?this.parseDateStyleToken(tok.nextToken()):tok1Style;
        //                 if(tok2Style !== -1) {
        //                     jFormat = DateFormat.getDateTimeInstance(tok1Style, tok2Style, cacheKey.locale);
        //                 }
        //                 break;
        //             };
        //         }
        //     }
        //     if(jFormat == null) {
        //         try {
        //             jFormat = new SimpleDateFormat(nameOrPattern, cacheKey.locale);
        //         } catch(e) {
        //             let msg : string = e.message;
        //             throw new InvalidFormatParametersException(msg != null?msg:"Invalid SimpleDateFormat pattern", e);
        //         };
        //     }
        //     jFormat.setTimeZone(cacheKey.timeZone);
        //     if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>JavaTemplateDateFormatFactory.GLOBAL_FORMAT_CACHE_$LI$()) >= JavaTemplateDateFormatFactory.LEAK_ALERT_DATE_FORMAT_CACHE_SIZE) {
        //         let triggered : boolean = false;
        //         {
        //             if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>JavaTemplateDateFormatFactory.GLOBAL_FORMAT_CACHE_$LI$()) >= JavaTemplateDateFormatFactory.LEAK_ALERT_DATE_FORMAT_CACHE_SIZE) {
        //                 triggered = true;
        //                 /* clear */(<any>JavaTemplateDateFormatFactory.GLOBAL_FORMAT_CACHE_$LI$()).clear();
        //             }
        //         };
        //         if(triggered) {
        //             JavaTemplateDateFormatFactory.LOG_$LI$().warn$java_lang_String("Global Java DateFormat cache has exceeded " + JavaTemplateDateFormatFactory.LEAK_ALERT_DATE_FORMAT_CACHE_SIZE + " entries => cache flushed. Typical cause: Some template generates high variety of format pattern strings.");
        //         }
        //     }
        //     let prevJFormat : DateFormat = JavaTemplateDateFormatFactory.GLOBAL_FORMAT_CACHE_$LI$().putIfAbsent(cacheKey, jFormat);
        //     if(prevJFormat != null) {
        //         jFormat = prevJFormat;
        //     }
        // }
        // return <DateFormat>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(jFormat);
        throw new Error();
    }

    parseDateStyleToken(token : string) : number {
        // if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("short",token))) {
        //     return DateFormat.SHORT;
        // }
        // if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("medium",token))) {
        //     return DateFormat.MEDIUM;
        // }
        // if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("long",token))) {
        //     return DateFormat.LONG;
        // }
        // if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("full",token))) {
        //     return DateFormat.FULL;
        // }
        // return -1;
        throw new Error();
    }
}
JavaTemplateDateFormatFactory["__class"] = "freemarker.core.JavaTemplateDateFormatFactory";


// export namespace JavaTemplateDateFormatFactory {
//
//     export class CacheKey {
//         dateType : number;
//
//         pattern : string;
//
//         locale : string;
//
//         timeZone : string;
//
//         constructor(dateType : number, pattern : string, locale : string, timeZone : string) {
//             if(this.dateType===undefined) this.dateType = 0;
//             if(this.pattern===undefined) this.pattern = null;
//             if(this.locale===undefined) this.locale = null;
//             if(this.timeZone===undefined) this.timeZone = null;
//             this.dateType = dateType;
//             this.pattern = pattern;
//             this.locale = locale;
//             this.timeZone = timeZone;
//         }
//
//         /**
//          *
//          * @param {Object} o
//          * @return {boolean}
//          */
//         public equals(o : any) : boolean {
//             if(o != null && o instanceof <any>JavaTemplateDateFormatFactory.CacheKey) {
//                 let fk : JavaTemplateDateFormatFactory.CacheKey = <JavaTemplateDateFormatFactory.CacheKey>o;
//                 return this.dateType === fk.dateType && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(fk.pattern,this.pattern)) && fk.locale.equals(this.locale) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(fk.timeZone,this.timeZone));
//             }
//             return false;
//         }
//
//         /**
//          *
//          * @return {number}
//          */
//         public hashCode() : number {
//             return this.dateType ^ /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.pattern)) ^ /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.locale)) ^ /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.timeZone));
//         }
//     }
//     CacheKey["__class"] = "freemarker.core.JavaTemplateDateFormatFactory.CacheKey";
//
// }





JavaTemplateDateFormatFactory.LOG_$LI$();

JavaTemplateDateFormatFactory.INSTANCE_$LI$();
