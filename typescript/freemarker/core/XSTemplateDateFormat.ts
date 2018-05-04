/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { DateUtil } from '../template/utility/DateUtil';
import { ISOLikeTemplateDateFormat } from './ISOLikeTemplateDateFormat';
import { ISOLikeTemplateDateFormatFactory } from './ISOLikeTemplateDateFormatFactory';
import { Environment } from './Environment';
import { UnknownDateTypeFormattingUnsupportedException } from './UnknownDateTypeFormattingUnsupportedException';
import { InvalidFormatParametersException } from './InvalidFormatParametersException';
import { TemplateDateModel } from '../template/TemplateDateModel';

/**
 * XML Schema format.
 * @extends ISOLikeTemplateDateFormat
 * @class
 */
export class XSTemplateDateFormat extends ISOLikeTemplateDateFormat {
    constructor(settingValue : string, parsingStart : number, dateType : number, zonelessInput : boolean, timeZone : string, factory : ISOLikeTemplateDateFormatFactory, env : Environment) {
        super(settingValue, parsingStart, dateType, zonelessInput, timeZone, factory, env);
    }

    public format$java_util_Date$boolean$boolean$boolean$int$java_util_TimeZone$freemarker_template_utility_DateUtil_DateToISO8601CalendarFactory(date : Date, datePart : boolean, timePart : boolean, offsetPart : boolean, accuracy : number, timeZone : string, calendarFactory : DateUtil.DateToISO8601CalendarFactory) : string {
        return DateUtil.dateToXSString(date, datePart, timePart, offsetPart, accuracy, timeZone, calendarFactory);
    }

    /**
     * 
     * @param {Date} date
     * @param {boolean} datePart
     * @param {boolean} timePart
     * @param {boolean} offsetPart
     * @param {number} accuracy
     * @param {TimeZone} timeZone
     * @param {*} calendarFactory
     * @return {String}
     */
    public format(date? : any, datePart? : any, timePart? : any, offsetPart? : any, accuracy? : any, timeZone? : any, calendarFactory? : any) : any {
        if(((date != null && date instanceof <any>Date) || date === null) && ((typeof datePart === 'boolean') || datePart === null) && ((typeof timePart === 'boolean') || timePart === null) && ((typeof offsetPart === 'boolean') || offsetPart === null) && ((typeof accuracy === 'number') || accuracy === null) && ((typeof timeZone === 'string') || timeZone === null) && ((calendarFactory != null && (calendarFactory["__interfaces"] != null && calendarFactory["__interfaces"].indexOf("freemarker.template.utility.DateUtil.DateToISO8601CalendarFactory") >= 0 || calendarFactory.constructor != null && calendarFactory.constructor["__interfaces"] != null && calendarFactory.constructor["__interfaces"].indexOf("freemarker.template.utility.DateUtil.DateToISO8601CalendarFactory") >= 0)) || calendarFactory === null)) {
            return <any>this.format$java_util_Date$boolean$boolean$boolean$int$java_util_TimeZone$freemarker_template_utility_DateUtil_DateToISO8601CalendarFactory(date, datePart, timePart, offsetPart, accuracy, timeZone, calendarFactory);
        } else if(((date != null && (date["__interfaces"] != null && date["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || date.constructor != null && date.constructor["__interfaces"] != null && date.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) || date === null) && datePart === undefined && timePart === undefined && offsetPart === undefined && accuracy === undefined && timeZone === undefined && calendarFactory === undefined) {
            return <any>this.format$freemarker_template_TemplateDateModel(date);
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {String} s
     * @param {TimeZone} tz
     * @param {*} calToDateConverter
     * @return {Date}
     */
    parseDate(s : string, tz : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        return DateUtil.parseXSDate(s, tz, calToDateConverter);
    }

    /**
     * 
     * @param {String} s
     * @param {TimeZone} tz
     * @param {*} calToDateConverter
     * @return {Date}
     */
    parseTime(s : string, tz : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        return DateUtil.parseXSTime(s, tz, calToDateConverter);
    }

    /**
     * 
     * @param {String} s
     * @param {TimeZone} tz
     * @param {*} calToDateConverter
     * @return {Date}
     */
    parseDateTime(s : string, tz : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        return DateUtil.parseXSDateTime(s, tz, calToDateConverter);
    }

    /**
     * 
     * @return {String}
     */
    getDateDescription() : string {
        return "W3C XML Schema date";
    }

    /**
     * 
     * @return {String}
     */
    getTimeDescription() : string {
        return "W3C XML Schema time";
    }

    /**
     * 
     * @return {String}
     */
    getDateTimeDescription() : string {
        return "W3C XML Schema dateTime";
    }

    /**
     * 
     * @return {boolean}
     */
    isXSMode() : boolean {
        return true;
    }
}
XSTemplateDateFormat["__class"] = "freemarker.core.XSTemplateDateFormat";



var __Function = Function;
