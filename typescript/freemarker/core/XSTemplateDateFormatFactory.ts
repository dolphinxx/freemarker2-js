/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ISOLikeTemplateDateFormatFactory} from './ISOLikeTemplateDateFormatFactory';
import {TemplateDateFormat} from './TemplateDateFormat';
import {XSTemplateDateFormat} from './XSTemplateDateFormat';
import {Locale} from "../../java/util/Locale";

export class XSTemplateDateFormatFactory extends ISOLikeTemplateDateFormatFactory {
    static INSTANCE : XSTemplateDateFormatFactory; public static INSTANCE_$LI$() : XSTemplateDateFormatFactory { if(XSTemplateDateFormatFactory.INSTANCE == null) XSTemplateDateFormatFactory.INSTANCE = new XSTemplateDateFormatFactory(); return XSTemplateDateFormatFactory.INSTANCE; };

    constructor() {
        super();
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
    public get(params : string, dateType : number, locale : Locale, timeZone : string, zonelessInput : boolean, env : /*Environment*/any) : TemplateDateFormat {
        return new XSTemplateDateFormat(params, 2, dateType, zonelessInput, timeZone, this, env);
    }
}
XSTemplateDateFormatFactory["__class"] = "freemarker.core.XSTemplateDateFormatFactory";





XSTemplateDateFormatFactory.INSTANCE_$LI$();
