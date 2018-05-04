/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ISOLikeTemplateDateFormatFactory } from './ISOLikeTemplateDateFormatFactory';
import { TemplateDateFormat } from './TemplateDateFormat';
import { Environment } from './Environment';
import { UnknownDateTypeFormattingUnsupportedException } from './UnknownDateTypeFormattingUnsupportedException';
import { InvalidFormatParametersException } from './InvalidFormatParametersException';
import { XSTemplateDateFormat } from './XSTemplateDateFormat';

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
    public get(params : string, dateType : number, locale : string, timeZone : string, zonelessInput : boolean, env : Environment) : TemplateDateFormat {
        return new XSTemplateDateFormat(params, 2, dateType, zonelessInput, timeZone, this, env);
    }
}
XSTemplateDateFormatFactory["__class"] = "freemarker.core.XSTemplateDateFormatFactory";



var __Function = Function;

XSTemplateDateFormatFactory.INSTANCE_$LI$();
