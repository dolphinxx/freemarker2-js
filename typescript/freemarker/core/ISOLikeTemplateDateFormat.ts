/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { DateUtil } from '../template/utility/DateUtil';
import { StringUtil } from '../template/utility/StringUtil';
import { TemplateDateFormat } from './TemplateDateFormat';
import { ISOLikeTemplateDateFormatFactory } from './ISOLikeTemplateDateFormatFactory';
import { Environment } from './Environment';
import { Boolean } from '../../java/lang/Boolean';
import { InvalidFormatParametersException } from './InvalidFormatParametersException';
import { UnknownDateTypeFormattingUnsupportedException } from './UnknownDateTypeFormattingUnsupportedException';
import { TemplateFormatUtil } from './TemplateFormatUtil';
import { UnparsableValueException } from './UnparsableValueException';
import { BugException } from './BugException';

/**
 * @param {String} formatString The value of the ..._format setting, like "iso nz".
 * @param {number} parsingStart The index of the char in the {@code settingValue} that directly after the prefix that has
 * indicated the exact formatter class (like "iso" or "xs")
 * @param {number} dateType
 * @param {boolean} zonelessInput
 * @param {TimeZone} timeZone
 * @param {ISOLikeTemplateDateFormatFactory} factory
 * @param {Environment} env
 * @class
 * @extends TemplateDateFormat
 */
export abstract class ISOLikeTemplateDateFormat extends TemplateDateFormat {
    static XS_LESS_THAN_SECONDS_ACCURACY_ERROR_MESSAGE : string = "Less than seconds accuracy isn\'t allowed by the XML Schema format";

    /*private*/ factory : ISOLikeTemplateDateFormatFactory;

    /*private*/ env : Environment;

    dateType : number;

    zonelessInput : boolean;

    timeZone : string;

    forceUTC : boolean;

    showZoneOffset : boolean;

    accuracy : number;

    public constructor(formatString : string, parsingStart : number, dateType : number, zonelessInput : boolean, timeZone : string, factory : ISOLikeTemplateDateFormatFactory, env : Environment) {
        super();
        if(this.factory===undefined) this.factory = null;
        if(this.env===undefined) this.env = null;
        if(this.dateType===undefined) this.dateType = 0;
        if(this.zonelessInput===undefined) this.zonelessInput = false;
        if(this.timeZone===undefined) this.timeZone = null;
        if(this.forceUTC===undefined) this.forceUTC = null;
        if(this.showZoneOffset===undefined) this.showZoneOffset = null;
        if(this.accuracy===undefined) this.accuracy = 0;
        this.factory = factory;
        this.env = env;
        if(dateType === TemplateDateModel.UNKNOWN) {
            throw new UnknownDateTypeFormattingUnsupportedException();
        }
        this.dateType = dateType;
        this.zonelessInput = zonelessInput;
        let ln : number = formatString.length;
        let afterSeparator : boolean = false;
        let i : number = parsingStart;
        let accuracy : number = DateUtil.ACCURACY_MILLISECONDS;
        let showZoneOffset : boolean = null;
        let forceUTC : boolean = false;
        while((i < ln)) {
            let c : string = formatString.charAt(i++);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0)) {
                afterSeparator = true;
            } else {
                if(!afterSeparator) {
                    throw new InvalidFormatParametersException("Missing space or \"_\" before \"" + c + "\" (at char pos. " + i + ").");
                }
                switch((c).charCodeAt(0)) {
                case 104 /* 'h' */:
                case 109 /* 'm' */:
                case 115 /* 's' */:
                    if(accuracy !== DateUtil.ACCURACY_MILLISECONDS) {
                        throw new InvalidFormatParametersException("Character \"" + c + "\" is unexpected as accuracy was already specified earlier (at char pos. " + i + ").");
                    }
                    switch((c).charCodeAt(0)) {
                    case 104 /* 'h' */:
                        if(this.isXSMode()) {
                            throw new InvalidFormatParametersException(ISOLikeTemplateDateFormat.XS_LESS_THAN_SECONDS_ACCURACY_ERROR_MESSAGE);
                        }
                        accuracy = DateUtil.ACCURACY_HOURS;
                        break;
                    case 109 /* 'm' */:
                        if(i < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(formatString.charAt(i)) == 's'.charCodeAt(0)) {
                            i++;
                            accuracy = DateUtil.ACCURACY_MILLISECONDS_FORCED;
                        } else {
                            if(this.isXSMode()) {
                                throw new InvalidFormatParametersException(ISOLikeTemplateDateFormat.XS_LESS_THAN_SECONDS_ACCURACY_ERROR_MESSAGE);
                            }
                            accuracy = DateUtil.ACCURACY_MINUTES;
                        }
                        break;
                    case 115 /* 's' */:
                        accuracy = DateUtil.ACCURACY_SECONDS;
                        break;
                    }
                    break;
                case 102 /* 'f' */:
                    if(i < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(formatString.charAt(i)) == 'u'.charCodeAt(0)) {
                        this.checkForceUTCNotSet(forceUTC);
                        i++;
                        forceUTC = true;
                        break;
                    }
                case 110 /* 'n' */:
                    if(showZoneOffset != null) {
                        throw new InvalidFormatParametersException("Character \"" + c + "\" is unexpected as zone offset visibility was already specified earlier. (at char pos. " + i + ").");
                    }
                    switch((c).charCodeAt(0)) {
                    case 110 /* 'n' */:
                        if(i < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(formatString.charAt(i)) == 'z'.charCodeAt(0)) {
                            i++;
                            showZoneOffset = false;
                        } else {
                            throw new InvalidFormatParametersException("\"n\" must be followed by \"z\" (at char pos. " + i + ").");
                        }
                        break;
                    case 102 /* 'f' */:
                        if(i < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(formatString.charAt(i)) == 'z'.charCodeAt(0)) {
                            i++;
                            showZoneOffset = true;
                        } else {
                            throw new InvalidFormatParametersException("\"f\" must be followed by \"z\" (at char pos. " + i + ").");
                        }
                        break;
                    }
                    break;
                case 117 /* 'u' */:
                    this.checkForceUTCNotSet(forceUTC);
                    forceUTC = null;
                    break;
                default:
                    throw new InvalidFormatParametersException("Unexpected character, " + StringUtil.jQuote$java_lang_Object(/* valueOf */new String(c).toString()) + ". Expected the beginning of one of: h, m, s, ms, nz, fz, u (at char pos. " + i + ").");
                }
                afterSeparator = false;
            }
        };
        this.accuracy = accuracy;
        this.showZoneOffset = showZoneOffset;
        this.forceUTC = forceUTC;
        this.timeZone = timeZone;
    }

    /*private*/ checkForceUTCNotSet(fourceUTC : boolean) {
        if(fourceUTC !== false) {
            throw new InvalidFormatParametersException("The UTC usage option was already set earlier.");
        }
    }

    /**
     * 
     * @param {*} dateModel
     * @return {String}
     */
    public formatToPlainText(dateModel : TemplateDateModel) : string {
        let date : Date = TemplateFormatUtil.getNonNullDate(dateModel);
        return this.format$java_util_Date$boolean$boolean$boolean$int$java_util_TimeZone$freemarker_template_utility_DateUtil_DateToISO8601CalendarFactory(date, this.dateType !== TemplateDateModel.TIME, this.dateType !== TemplateDateModel.DATE, this.showZoneOffset == null?!this.zonelessInput:this.showZoneOffset, this.accuracy, (this.forceUTC == null?!this.zonelessInput:this.forceUTC)?DateUtil.UTC_$LI$():this.timeZone, this.factory.getISOBuiltInCalendar(this.env));
    }

    public format$java_util_Date$boolean$boolean$boolean$int$java_util_TimeZone$freemarker_template_utility_DateUtil_DateToISO8601CalendarFactory(date : Date, datePart : boolean, timePart : boolean, offsetPart : boolean, accuracy : number, timeZone : string, calendarFactory : DateUtil.DateToISO8601CalendarFactory) : string { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

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
     * @param {number} dateType
     * @return {Date}
     */
    public parse(s : string, dateType : number) : Date {
        let calToDateConverter : DateUtil.CalendarFieldsToDateConverter = this.factory.getCalendarFieldsToDateCalculator(this.env);
        let tz : string = this.forceUTC !== false?DateUtil.UTC_$LI$():this.timeZone;
        try {
            if(dateType === TemplateDateModel.DATE) {
                return this.parseDate(s, tz, calToDateConverter);
            } else if(dateType === TemplateDateModel.TIME) {
                return this.parseTime(s, tz, calToDateConverter);
            } else if(dateType === TemplateDateModel.DATETIME) {
                return this.parseDateTime(s, tz, calToDateConverter);
            } else {
                throw new BugException("Unexpected date type: " + dateType);
            }
        } catch(e) {
            throw new UnparsableValueException(e.message, e);
        };
    }

    abstract parseDate(s : string, tz : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date;

    abstract parseTime(s : string, tz : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date;

    abstract parseDateTime(s : string, tz : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date;

    /**
     * 
     * @return {String}
     */
    public getDescription() : string {
        switch((this.dateType)) {
        case TemplateDateModel.DATE:
            return this.getDateDescription();
        case TemplateDateModel.TIME:
            return this.getTimeDescription();
        case TemplateDateModel.DATETIME:
            return this.getDateTimeDescription();
        default:
            return "<error: wrong format dateType>";
        }
    }

    abstract getDateDescription() : string;

    abstract getTimeDescription() : string;

    abstract getDateTimeDescription() : string;

    /**
     * 
     * @return {boolean}
     */
    public isLocaleBound() : boolean {
        return false;
    }

    /**
     * 
     * @return {boolean}
     */
    public isTimeZoneBound() : boolean {
        return true;
    }

    abstract isXSMode() : boolean;
}
ISOLikeTemplateDateFormat["__class"] = "freemarker.core.ISOLikeTemplateDateFormat";



var __Function = Function;
