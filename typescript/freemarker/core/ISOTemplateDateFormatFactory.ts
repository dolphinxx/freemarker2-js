/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ISOLikeTemplateDateFormatFactory} from './ISOLikeTemplateDateFormatFactory';
import {TemplateDateFormat} from './TemplateDateFormat';
import {ISOTemplateDateFormat} from './ISOTemplateDateFormat';

export class ISOTemplateDateFormatFactory extends ISOLikeTemplateDateFormatFactory {
    static INSTANCE : ISOTemplateDateFormatFactory; public static INSTANCE_$LI$() : ISOTemplateDateFormatFactory { if(ISOTemplateDateFormatFactory.INSTANCE == null) ISOTemplateDateFormatFactory.INSTANCE = new ISOTemplateDateFormatFactory(); return ISOTemplateDateFormatFactory.INSTANCE; };

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
    public get(params : string, dateType : number, locale : string, timeZone : string, zonelessInput : boolean, env : /*Environment*/any) : TemplateDateFormat {
        return new ISOTemplateDateFormat(params, 3, dateType, zonelessInput, timeZone, this, env);
    }
}
ISOTemplateDateFormatFactory["__class"] = "freemarker.core.ISOTemplateDateFormatFactory";





ISOTemplateDateFormatFactory.INSTANCE_$LI$();
