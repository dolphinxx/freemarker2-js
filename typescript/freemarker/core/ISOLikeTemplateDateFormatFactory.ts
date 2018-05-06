/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateDateFormatFactory} from './TemplateDateFormatFactory';
import {DateUtil} from '../template/utility/DateUtil';

export abstract class ISOLikeTemplateDateFormatFactory extends TemplateDateFormatFactory {
    static DATE_TO_CAL_CONVERTER_KEY : any; public static DATE_TO_CAL_CONVERTER_KEY_$LI$() : any { if(ISOLikeTemplateDateFormatFactory.DATE_TO_CAL_CONVERTER_KEY == null) ISOLikeTemplateDateFormatFactory.DATE_TO_CAL_CONVERTER_KEY = <any>new Object(); return ISOLikeTemplateDateFormatFactory.DATE_TO_CAL_CONVERTER_KEY; };

    static CAL_TO_DATE_CONVERTER_KEY : any; public static CAL_TO_DATE_CONVERTER_KEY_$LI$() : any { if(ISOLikeTemplateDateFormatFactory.CAL_TO_DATE_CONVERTER_KEY == null) ISOLikeTemplateDateFormatFactory.CAL_TO_DATE_CONVERTER_KEY = <any>new Object(); return ISOLikeTemplateDateFormatFactory.CAL_TO_DATE_CONVERTER_KEY; };

    constructor() {
        super();
    }

    public getISOBuiltInCalendar(env : /*Environment*/any) : DateUtil.DateToISO8601CalendarFactory {
        let r : DateUtil.DateToISO8601CalendarFactory = <DateUtil.DateToISO8601CalendarFactory><any>env.getCustomState(ISOLikeTemplateDateFormatFactory.DATE_TO_CAL_CONVERTER_KEY_$LI$());
        if(r == null) {
            r = new DateUtil.TrivialDateToISO8601CalendarFactory();
            env.setCustomState(ISOLikeTemplateDateFormatFactory.DATE_TO_CAL_CONVERTER_KEY_$LI$(), r);
        }
        return r;
    }

    public getCalendarFieldsToDateCalculator(env : /*Environment*/any) : DateUtil.CalendarFieldsToDateConverter {
        let r : DateUtil.CalendarFieldsToDateConverter = <DateUtil.CalendarFieldsToDateConverter><any>env.getCustomState(ISOLikeTemplateDateFormatFactory.CAL_TO_DATE_CONVERTER_KEY_$LI$());
        if(r == null) {
            r = new DateUtil.TrivialCalendarFieldsToDateConverter();
            env.setCustomState(ISOLikeTemplateDateFormatFactory.CAL_TO_DATE_CONVERTER_KEY_$LI$(), r);
        }
        return r;
    }
}
ISOLikeTemplateDateFormatFactory["__class"] = "freemarker.core.ISOLikeTemplateDateFormatFactory";





ISOLikeTemplateDateFormatFactory.CAL_TO_DATE_CONVERTER_KEY_$LI$();

ISOLikeTemplateDateFormatFactory.DATE_TO_CAL_CONVERTER_KEY_$LI$();
