/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {UnrecognizedTimeZoneException} from './UnrecognizedTimeZoneException';
import {NullArgumentException} from './NullArgumentException';
import {StringBuilder} from '../../../java/lang/StringBuilder';
import {Pattern} from "../../../java/util/regex/Pattern";

/**
 * Date and time related utilities.
 * @class
 */
export class DateUtil {
    /**
     * Show hours (24h); always 2 digits, like {@code 00}, {@code 05}, etc.
     */
    public static ACCURACY_HOURS : number = 4;

    /**
     * Show hours and minutes (even if minutes is 00).
     */
    public static ACCURACY_MINUTES : number = 5;

    /**
     * Show hours, minutes and seconds (even if seconds is 00).
     */
    public static ACCURACY_SECONDS : number = 6;

    /**
     * Show hours, minutes and seconds and up to 3 fraction second digits, without trailing 0-s in the fraction part.
     */
    public static ACCURACY_MILLISECONDS : number = 7;

    /**
     * Show hours, minutes and seconds and exactly 3 fraction second digits (even if it's 000)
     */
    public static ACCURACY_MILLISECONDS_FORCED : number = 8;

    public static UTC : string; public static UTC_$LI$() : string { if(DateUtil.UTC == null) DateUtil.UTC = /* getTimeZone */"UTC"; return DateUtil.UTC; };

    static REGEX_XS_TIME_ZONE : string = "Z|(?:[-+][0-9]{2}:[0-9]{2})";

    static REGEX_ISO8601_BASIC_TIME_ZONE : string = "Z|(?:[-+][0-9]{2}(?:[0-9]{2})?)";

    static REGEX_ISO8601_EXTENDED_TIME_ZONE : string = "Z|(?:[-+][0-9]{2}(?::[0-9]{2})?)";

    static REGEX_XS_OPTIONAL_TIME_ZONE : string; public static REGEX_XS_OPTIONAL_TIME_ZONE_$LI$() : string { if(DateUtil.REGEX_XS_OPTIONAL_TIME_ZONE == null) DateUtil.REGEX_XS_OPTIONAL_TIME_ZONE = "(" + DateUtil.REGEX_XS_TIME_ZONE + ")?"; return DateUtil.REGEX_XS_OPTIONAL_TIME_ZONE; };

    static REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE : string; public static REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE_$LI$() : string { if(DateUtil.REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE == null) DateUtil.REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE = "(" + DateUtil.REGEX_ISO8601_BASIC_TIME_ZONE + ")?"; return DateUtil.REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE; };

    static REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE : string; public static REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE_$LI$() : string { if(DateUtil.REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE == null) DateUtil.REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE = "(" + DateUtil.REGEX_ISO8601_EXTENDED_TIME_ZONE + ")?"; return DateUtil.REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE; };

    static REGEX_XS_DATE_BASE : string = "(-?[0-9]+)-([0-9]{2})-([0-9]{2})";

    static REGEX_ISO8601_BASIC_DATE_BASE : string = "(-?[0-9]{4,}?)([0-9]{2})([0-9]{2})";

    static REGEX_ISO8601_EXTENDED_DATE_BASE : string = "(-?[0-9]{4,})-([0-9]{2})-([0-9]{2})";

    static REGEX_XS_TIME_BASE : string = "([0-9]{2}):([0-9]{2}):([0-9]{2})(?:\\.([0-9]+))?";

    static REGEX_ISO8601_BASIC_TIME_BASE : string = "([0-9]{2})(?:([0-9]{2})(?:([0-9]{2})(?:[\\.,]([0-9]+))?)?)?";

    static REGEX_ISO8601_EXTENDED_TIME_BASE : string = "([0-9]{2})(?::([0-9]{2})(?::([0-9]{2})(?:[\\.,]([0-9]+))?)?)?";

    static PATTERN_XS_DATE : Pattern; public static PATTERN_XS_DATE_$LI$() : Pattern { if(DateUtil.PATTERN_XS_DATE == null) DateUtil.PATTERN_XS_DATE = Pattern.compile(DateUtil.REGEX_XS_DATE_BASE + DateUtil.REGEX_XS_OPTIONAL_TIME_ZONE_$LI$()); return DateUtil.PATTERN_XS_DATE; };

    static PATTERN_ISO8601_BASIC_DATE : Pattern; public static PATTERN_ISO8601_BASIC_DATE_$LI$() : Pattern { if(DateUtil.PATTERN_ISO8601_BASIC_DATE == null) DateUtil.PATTERN_ISO8601_BASIC_DATE = Pattern.compile(DateUtil.REGEX_ISO8601_BASIC_DATE_BASE); return DateUtil.PATTERN_ISO8601_BASIC_DATE; };

    static PATTERN_ISO8601_EXTENDED_DATE : Pattern; public static PATTERN_ISO8601_EXTENDED_DATE_$LI$() : Pattern { if(DateUtil.PATTERN_ISO8601_EXTENDED_DATE == null) DateUtil.PATTERN_ISO8601_EXTENDED_DATE = Pattern.compile(DateUtil.REGEX_ISO8601_EXTENDED_DATE_BASE); return DateUtil.PATTERN_ISO8601_EXTENDED_DATE; };

    static PATTERN_XS_TIME : Pattern; public static PATTERN_XS_TIME_$LI$() : Pattern { if(DateUtil.PATTERN_XS_TIME == null) DateUtil.PATTERN_XS_TIME = Pattern.compile(DateUtil.REGEX_XS_TIME_BASE + DateUtil.REGEX_XS_OPTIONAL_TIME_ZONE_$LI$()); return DateUtil.PATTERN_XS_TIME; };

    static PATTERN_ISO8601_BASIC_TIME : Pattern; public static PATTERN_ISO8601_BASIC_TIME_$LI$() : Pattern { if(DateUtil.PATTERN_ISO8601_BASIC_TIME == null) DateUtil.PATTERN_ISO8601_BASIC_TIME = Pattern.compile(DateUtil.REGEX_ISO8601_BASIC_TIME_BASE + DateUtil.REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE_$LI$()); return DateUtil.PATTERN_ISO8601_BASIC_TIME; };

    static PATTERN_ISO8601_EXTENDED_TIME : Pattern; public static PATTERN_ISO8601_EXTENDED_TIME_$LI$() : Pattern { if(DateUtil.PATTERN_ISO8601_EXTENDED_TIME == null) DateUtil.PATTERN_ISO8601_EXTENDED_TIME = Pattern.compile(DateUtil.REGEX_ISO8601_EXTENDED_TIME_BASE + DateUtil.REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE_$LI$()); return DateUtil.PATTERN_ISO8601_EXTENDED_TIME; };

    static PATTERN_XS_DATE_TIME : Pattern; public static PATTERN_XS_DATE_TIME_$LI$() : Pattern { if(DateUtil.PATTERN_XS_DATE_TIME == null) DateUtil.PATTERN_XS_DATE_TIME = Pattern.compile(DateUtil.REGEX_XS_DATE_BASE + "T" + DateUtil.REGEX_XS_TIME_BASE + DateUtil.REGEX_XS_OPTIONAL_TIME_ZONE_$LI$()); return DateUtil.PATTERN_XS_DATE_TIME; };

    static PATTERN_ISO8601_BASIC_DATE_TIME : Pattern; public static PATTERN_ISO8601_BASIC_DATE_TIME_$LI$() : Pattern { if(DateUtil.PATTERN_ISO8601_BASIC_DATE_TIME == null) DateUtil.PATTERN_ISO8601_BASIC_DATE_TIME = Pattern.compile(DateUtil.REGEX_ISO8601_BASIC_DATE_BASE + "T" + DateUtil.REGEX_ISO8601_BASIC_TIME_BASE + DateUtil.REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE_$LI$()); return DateUtil.PATTERN_ISO8601_BASIC_DATE_TIME; };

    static PATTERN_ISO8601_EXTENDED_DATE_TIME : Pattern; public static PATTERN_ISO8601_EXTENDED_DATE_TIME_$LI$() : Pattern { if(DateUtil.PATTERN_ISO8601_EXTENDED_DATE_TIME == null) DateUtil.PATTERN_ISO8601_EXTENDED_DATE_TIME = Pattern.compile(DateUtil.REGEX_ISO8601_EXTENDED_DATE_BASE + "T" + DateUtil.REGEX_ISO8601_EXTENDED_TIME_BASE + DateUtil.REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE_$LI$()); return DateUtil.PATTERN_ISO8601_EXTENDED_DATE_TIME; };

    static PATTERN_XS_TIME_ZONE : Pattern; public static PATTERN_XS_TIME_ZONE_$LI$() : Pattern { if(DateUtil.PATTERN_XS_TIME_ZONE == null) DateUtil.PATTERN_XS_TIME_ZONE = Pattern.compile(DateUtil.REGEX_XS_TIME_ZONE); return DateUtil.PATTERN_XS_TIME_ZONE; };

    static MSG_YEAR_0_NOT_ALLOWED : string = "Year 0 is not allowed in XML schema dates. BC 1 is -1, AD 1 is 1.";

    constructor() {
    }

    /**
     * Returns the time zone object for the name (or ID). This differs from
     * {link TimeZone#getTimeZone(String)} in that the latest returns GMT
     * if it doesn't recognize the name, while this throws an
     * {link UnrecognizedTimeZoneException}.
     * 
     * @throws UnrecognizedTimeZoneException If the time zone name wasn't understood
     * @param {String} name
     * @return {TimeZone}
     */
    public static getTimeZone(name : string) : string {
        if(DateUtil.isGMTish(name)) {
            if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(name, "UTC")) {
                return DateUtil.UTC_$LI$();
            }
            return /* getTimeZone */name;
        }
        let tz : string = /* getTimeZone */name;
        if(DateUtil.isGMTish(/* getID */tz)) {
            throw new UnrecognizedTimeZoneException(name);
        }
        return tz;
    }

    /**
     * Tells if a offset or time zone is GMT. GMT is a fuzzy term, it used to
     * referred both to UTC and UT1.
     * @param {String} name
     * @return {boolean}
     * @private
     */
    static isGMTish(name : string) : boolean {
        if(name.length < 3) {
            return false;
        }
        let c1 : string = name.charAt(0);
        let c2 : string = name.charAt(1);
        let c3 : string = name.charAt(2);
        if(!(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c1) == 'G'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c1) == 'g'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c2) == 'M'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c2) == 'm'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c3) == 'T'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c3) == 't'.charCodeAt(0))) && !(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c1) == 'U'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c1) == 'u'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c2) == 'T'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c2) == 't'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c3) == 'C'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c3) == 'c'.charCodeAt(0))) && !(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c1) == 'U'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c1) == 'u'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c2) == 'T'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c2) == 't'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c3) == '1'.charCodeAt(0)))) {
            return false;
        }
        if(name.length === 3) {
            return true;
        }
        let offset : string = name.substring(3);
        if(offset.startsWith("+")) {
            return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(offset,"+0")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(offset,"+00")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(offset,"+00:00"));
        } else {
            return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(offset,"-0")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(offset,"-00")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(offset,"-00:00"));
        }
    }

    /**
     * Format a date, time or dateTime with one of the ISO 8601 extended
     * formats that is also compatible with the XML Schema format (as far as you
     * don't have dates in the BC era). Examples of possible outputs:
     * {@code "2005-11-27T15:30:00+02:00"}, {@code "2005-11-27"},
     * {@code "15:30:00Z"}. Note the {@code ":00"} in the time zone offset;
     * this is not required by ISO 8601, but included for compatibility with
     * the XML Schema format. Regarding the B.C. issue, those dates will be
     * one year off when read back according the XML Schema format, because of a
     * mismatch between that format and ISO 8601:2000 Second Edition.
     * 
     * <p>This method is thread-safe.
     * 
     * @param {Date} date            the date to convert to ISO 8601 string
     * @param {boolean} datePart        whether the date part (year, month, day) will be included
     * or not
     * @param {boolean} timePart        whether the time part (hours, minutes, seconds,
     * milliseconds) will be included or not
     * @param {boolean} offsetPart      whether the time zone offset part will be included or
     * not. This will be shown as an offset to UTC (examples:
     * {@code "+01"}, {@code "-02"}, {@code "+04:30"}) or as {@code "Z"}
     * for UTC (and for UT1 and for GMT+00, since the Java platform
     * doesn't really care about the difference).
     * Note that this can't be {@code true} when {@code timePart} is
     * {@code false}, because ISO 8601 (2004) doesn't mention such
     * patterns.
     * @param {number} accuracy        tells which parts of the date/time to drop. The
     * {@code datePart} and {@code timePart} parameters are stronger than
     * this. Note that when {link #ACCURACY_MILLISECONDS} is specified,
     * the milliseconds part will be displayed as fraction seconds
     * (like {@code "15:30.00.25"}) with the minimum number of
     * digits needed to show the milliseconds without precision lose.
     * Thus, if the milliseconds happen to be exactly 0, no fraction
     * seconds will be shown at all.
     * @param {TimeZone} timeZone        the time zone in which the date/time will be shown. (You
     * may find {link DateUtil#UTC} handy here.) Note
     * that although date-only formats has no time zone offset part,
     * the result still depends on the time zone, as days start and end
     * at different points on the time line in different zones.
     * @param {*} calendarFactory the factory that will create the calendar used
     * internally for calculations. The point of this parameter is that
     * creating a new calendar is relatively expensive, so it's desirable
     * to reuse calendars and only set their time and zone. (This was
     * tested on Sun JDK 1.6 x86 Win, where it gave 2x-3x speedup.)
     * @return {String}
     */
    public static dateToISO8601String(date : Date, datePart : boolean, timePart : boolean, offsetPart : boolean, accuracy : number, timeZone : string, calendarFactory : DateUtil.DateToISO8601CalendarFactory) : string {
        return DateUtil.dateToString(date, datePart, timePart, offsetPart, accuracy, timeZone, false, calendarFactory);
    }

    /**
     * Same as {link #dateToISO8601String}, but gives XML Schema compliant format.
     * @param {Date} date
     * @param {boolean} datePart
     * @param {boolean} timePart
     * @param {boolean} offsetPart
     * @param {number} accuracy
     * @param {TimeZone} timeZone
     * @param {*} calendarFactory
     * @return {String}
     */
    public static dateToXSString(date : Date, datePart : boolean, timePart : boolean, offsetPart : boolean, accuracy : number, timeZone : string, calendarFactory : DateUtil.DateToISO8601CalendarFactory) : string {
        return DateUtil.dateToString(date, datePart, timePart, offsetPart, accuracy, timeZone, true, calendarFactory);
    }

    static dateToString(date : Date, datePart : boolean, timePart : boolean, offsetPart : boolean, accuracy : number, timeZone : string, xsMode : boolean, calendarFactory : DateUtil.DateToISO8601CalendarFactory) : string {
        if(!xsMode && !timePart && offsetPart) {
            throw Object.defineProperty(new Error("ISO 8601:2004 doesn\'t specify any formats where the offset is shown but the time isn\'t."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(timeZone == null) {
            timeZone = DateUtil.UTC_$LI$();
        }
        let cal : Date = calendarFactory.get(timeZone, date);
        let maxLength : number;
        if(!timePart) {
            maxLength = 10 + (xsMode?6:0);
        } else {
            if(!datePart) {
                maxLength = 12 + 6;
            } else {
                maxLength = 10 + 1 + 12 + 6;
            }
        }
        let res : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(maxLength);
        let dstIdx : number = 0;
        if(datePart) {
            let x : number = /* get */(d => d["UTC"]?d.getUTCFullYear():d.getFullYear())(cal);
            if(x > 0 /*&& cal.get(Date.ERA) === Date.BC*/) {
                x = -x + (xsMode?0:1);
            }
            if(x >= 0 && x < 9999) {
                res[dstIdx++] = String.fromCharCode(('0'.charCodeAt(0) + (x / 1000|0)));
                res[dstIdx++] = String.fromCharCode(('0'.charCodeAt(0) + (x % 1000 / 100|0)));
                res[dstIdx++] = String.fromCharCode(('0'.charCodeAt(0) + (x % 100 / 10|0)));
                res[dstIdx++] = String.fromCharCode(('0'.charCodeAt(0) + x % 10));
            } else {
                let yearString : string = /* valueOf */new String(x).toString();
                maxLength = maxLength - 4 + yearString.length;
                res = (s => { let a=[]; while(s-->0) a.push(null); return a; })(maxLength);
                for(let i : number = 0; i < yearString.length; i++) {
                    res[dstIdx++] = yearString.charAt(i);
                };
            }
            res[dstIdx++] = '-';
            x = /* get */(d => d["UTC"]?d.getUTCMonth():d.getMonth())(cal) + 1;
            dstIdx = DateUtil.append00(res, dstIdx, x);
            res[dstIdx++] = '-';
            x = /* get */(d => d["UTC"]?d.getUTCDate():d.getDate())(cal);
            dstIdx = DateUtil.append00(res, dstIdx, x);
            if(timePart) {
                res[dstIdx++] = 'T';
            }
        }
        if(timePart) {
            let x : number = /* get */(d => d["UTC"]?d.getUTCHours():d.getHours())(cal);
            dstIdx = DateUtil.append00(res, dstIdx, x);
            if(accuracy >= DateUtil.ACCURACY_MINUTES) {
                res[dstIdx++] = ':';
                x = /* get */(d => d["UTC"]?d.getUTCMinutes():d.getMinutes())(cal);
                dstIdx = DateUtil.append00(res, dstIdx, x);
                if(accuracy >= DateUtil.ACCURACY_SECONDS) {
                    res[dstIdx++] = ':';
                    x = /* get */(d => d["UTC"]?d.getUTCSeconds():d.getSeconds())(cal);
                    dstIdx = DateUtil.append00(res, dstIdx, x);
                    if(accuracy >= DateUtil.ACCURACY_MILLISECONDS) {
                        x = /* get */(d => d["UTC"]?d.getUTCMilliseconds():d.getMilliseconds())(cal);
                        let forcedDigits : number = accuracy === DateUtil.ACCURACY_MILLISECONDS_FORCED?3:0;
                        if(x !== 0 || forcedDigits !== 0) {
                            if(x > 999) {
                                throw Object.defineProperty(new Error("Calendar.MILLISECOND > 999"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                            }
                            res[dstIdx++] = '.';
                            do {
                                res[dstIdx++] = String.fromCharCode(('0'.charCodeAt(0) + ((x / 100|0))));
                                forcedDigits--;
                                x = x % 100 * 10;
                            } while((x !== 0 || forcedDigits > 0));
                        }
                    }
                }
            }
        }
        if(offsetPart) {
            if(timeZone === DateUtil.UTC_$LI$()) {
                res[dstIdx++] = 'Z';
            } else {
                let dt : number = /*timeZone.getOffset(date.getTime())*/date.getTimezoneOffset();
                let positive : boolean;
                if(dt < 0) {
                    positive = false;
                    dt = -dt;
                } else {
                    positive = true;
                }
                dt /= 1000;
                let offS : number = dt % 60;
                dt /= 60;
                let offM : number = dt % 60;
                dt /= 60;
                let offH : number = dt;
                if(offS === 0 && offM === 0 && offH === 0) {
                    res[dstIdx++] = 'Z';
                } else {
                    res[dstIdx++] = positive?'+':'-';
                    dstIdx = DateUtil.append00(res, dstIdx, offH);
                    res[dstIdx++] = ':';
                    dstIdx = DateUtil.append00(res, dstIdx, offM);
                    if(offS !== 0) {
                        res[dstIdx++] = ':';
                        dstIdx = DateUtil.append00(res, dstIdx, offS);
                    }
                }
            }
        }
        return res.join('').substr(0, dstIdx);
    }

    /**
     * Appends a number between 0 and 99 padded to 2 digits.
     * @param {Array} res
     * @param {number} dstIdx
     * @param {number} x
     * @return {number}
     * @private
     */
    static append00(res : string[], dstIdx : number, x : number) : number {
        res[dstIdx++] = String.fromCharCode(('0'.charCodeAt(0) + (x / 10|0)));
        res[dstIdx++] = String.fromCharCode(('0'.charCodeAt(0) + x % 10));
        return dstIdx;
    }

    /**
     * Parses an W3C XML Schema date string (not time or date-time).
     * Unlike in ISO 8601:2000 Second Edition, year -1 means B.C 1, and year 0 is invalid.
     * 
     * @param {String} dateStr            the string to parse.
     * @param {TimeZone} defaultTimeZone    used if the date doesn't specify the
     * time zone offset explicitly. Can't be {@code null}.
     * @param {*} calToDateConverter Used internally to calculate the result from the calendar field values.
     * If you don't have a such object around, you can just use
     * {@code new }{link TrivialCalendarFieldsToDateConverter}{@code ()}.
     * @throws DateParseException if the date is malformed, or if the time
     * zone offset is unspecified and the {@code defaultTimeZone} is
     * {@code null}.
     * @return {Date}
     */
    public static parseXSDate(dateStr : string, defaultTimeZone : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        let m : /*Matcher*/any = DateUtil.PATTERN_XS_DATE_$LI$().matcher(dateStr);
        if(!m.matches()) {
            throw new DateUtil.DateParseException("The value didn\'t match the expected pattern: " + DateUtil.PATTERN_XS_DATE_$LI$());
        }
        return DateUtil.parseDate_parseMatcher(m, defaultTimeZone, true, calToDateConverter);
    }

    /**
     * Same as {link #parseXSDate(String, TimeZone, CalendarFieldsToDateConverter)}, but for ISO 8601 dates.
     * @param {String} dateStr
     * @param {TimeZone} defaultTimeZone
     * @param {*} calToDateConverter
     * @return {Date}
     */
    public static parseISO8601Date(dateStr : string, defaultTimeZone : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        let m : /*Matcher*/any = DateUtil.PATTERN_ISO8601_EXTENDED_DATE_$LI$().matcher(dateStr);
        if(!m.matches()) {
            m = DateUtil.PATTERN_ISO8601_BASIC_DATE_$LI$().matcher(dateStr);
            if(!m.matches()) {
                throw new DateUtil.DateParseException("The value didn\'t match the expected pattern: " + DateUtil.PATTERN_ISO8601_EXTENDED_DATE_$LI$() + " or " + DateUtil.PATTERN_ISO8601_BASIC_DATE_$LI$());
            }
        }
        return DateUtil.parseDate_parseMatcher(m, defaultTimeZone, false, calToDateConverter);
    }

    static parseDate_parseMatcher(m : /*Matcher*/any, defaultTZ : string, xsMode : boolean, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        NullArgumentException.check$java_lang_String$java_lang_Object("defaultTZ", defaultTZ);
        try {
            let year : number = DateUtil.groupToInt(m.group(1), "year", Number.MIN_VALUE, Number.MAX_VALUE);
            // let era : number;
            if(year <= 0) {
                // era = Date.BC;
                year = -year + (xsMode?0:1);
                if(year === 0) {
                    throw new DateUtil.DateParseException(DateUtil.MSG_YEAR_0_NOT_ALLOWED);
                }
            } else {
                // era = Date.AD;
            }
            let month : number = DateUtil.groupToInt(m.group(2), "month", 1, 12) - 1;
            let day : number = DateUtil.groupToInt(m.group(3), "day-of-month", 1, 31);
            let tz : string = xsMode?DateUtil.parseMatchingTimeZone(m.group(4), defaultTZ):defaultTZ;
            return calToDateConverter.calculate(/*era*/-1, year, month, day, 0, 0, 0, 0, false, tz);
        } catch(e) {
            throw new DateUtil.DateParseException("Date calculation faliure. Probably the date is formally correct, but refers to an unexistent date (like February 30).");
        }
    }

    /**
     * Parses an W3C XML Schema time string (not date or date-time).
     * If the time string doesn't specify the time zone offset explicitly,
     * the value of the {@code defaultTZ} paramter will be used.
     * @param {String} timeStr
     * @param {TimeZone} defaultTZ
     * @param {*} calToDateConverter
     * @return {Date}
     */
    public static parseXSTime(timeStr : string, defaultTZ : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        let m : /*Matcher*/any = DateUtil.PATTERN_XS_TIME_$LI$().matcher(timeStr);
        if(!m.matches()) {
            throw new DateUtil.DateParseException("The value didn\'t match the expected pattern: " + DateUtil.PATTERN_XS_TIME_$LI$());
        }
        return DateUtil.parseTime_parseMatcher(m, defaultTZ, calToDateConverter);
    }

    /**
     * Same as {link #parseXSTime(String, TimeZone, CalendarFieldsToDateConverter)} but for ISO 8601 times.
     * @param {String} timeStr
     * @param {TimeZone} defaultTZ
     * @param {*} calToDateConverter
     * @return {Date}
     */
    public static parseISO8601Time(timeStr : string, defaultTZ : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        let m : /*Matcher*/any = DateUtil.PATTERN_ISO8601_EXTENDED_TIME_$LI$().matcher(timeStr);
        if(!m.matches()) {
            m = DateUtil.PATTERN_ISO8601_BASIC_TIME_$LI$().matcher(timeStr);
            if(!m.matches()) {
                throw new DateUtil.DateParseException("The value didn\'t match the expected pattern: " + DateUtil.PATTERN_ISO8601_EXTENDED_TIME_$LI$() + " or " + DateUtil.PATTERN_ISO8601_BASIC_TIME_$LI$());
            }
        }
        return DateUtil.parseTime_parseMatcher(m, defaultTZ, calToDateConverter);
    }

    static parseTime_parseMatcher(m : /*Matcher*/any, defaultTZ : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        NullArgumentException.check$java_lang_String$java_lang_Object("defaultTZ", defaultTZ);
        try {
            let hours : number = DateUtil.groupToInt(m.group(1), "hour-of-day", 0, 24);
            let hourWas24 : boolean;
            if(hours === 24) {
                hours = 0;
                hourWas24 = true;
            } else {
                hourWas24 = false;
            }
            let minutesStr : string = m.group(2);
            let minutes : number = minutesStr != null?DateUtil.groupToInt(minutesStr, "minute", 0, 59):0;
            let secsStr : string = m.group(3);
            let secs : number = secsStr != null?DateUtil.groupToInt(secsStr, "second", 0, 60):0;
            let millisecs : number = DateUtil.groupToMillisecond(m.group(4));
            let tz : string = DateUtil.parseMatchingTimeZone(m.group(5), defaultTZ);
            let day : number;
            if(hourWas24) {
                if(minutes === 0 && secs === 0 && millisecs === 0) {
                    day = 2;
                } else {
                    throw new DateUtil.DateParseException("Hour 24 is only allowed in the case of midnight.");
                }
            } else {
                day = 1;
            }
            return calToDateConverter.calculate(/*Date.AD*/-1, 1970, 0, day, hours, minutes, secs, millisecs, false, tz);
        } catch(e) {
            throw new DateUtil.DateParseException("Unexpected time calculation faliure.");
        }
    }

    /**
     * Parses an W3C XML Schema date-time string (not date or time).
     * Unlike in ISO 8601:2000 Second Edition, year -1 means B.C 1, and year 0 is invalid.
     * 
     * @param {String} dateTimeStr the string to parse.
     * @param {TimeZone} defaultTZ   used if the dateTime doesn't specify the
     * time zone offset explicitly. Can't be {@code null}.
     * @throws DateParseException if the dateTime is malformed.
     * @param {*} calToDateConverter
     * @return {Date}
     */
    public static parseXSDateTime(dateTimeStr : string, defaultTZ : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        let m : /*Matcher*/any = DateUtil.PATTERN_XS_DATE_TIME_$LI$().matcher(dateTimeStr);
        if(!m.matches()) {
            throw new DateUtil.DateParseException("The value didn\'t match the expected pattern: " + DateUtil.PATTERN_XS_DATE_TIME_$LI$());
        }
        return DateUtil.parseDateTime_parseMatcher(m, defaultTZ, true, calToDateConverter);
    }

    /**
     * Same as {link #parseXSDateTime(String, TimeZone, CalendarFieldsToDateConverter)} but for ISO 8601 format.
     * @param {String} dateTimeStr
     * @param {TimeZone} defaultTZ
     * @param {*} calToDateConverter
     * @return {Date}
     */
    public static parseISO8601DateTime(dateTimeStr : string, defaultTZ : string, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        let m : /*Matcher*/any = DateUtil.PATTERN_ISO8601_EXTENDED_DATE_TIME_$LI$().matcher(dateTimeStr);
        if(!m.matches()) {
            m = DateUtil.PATTERN_ISO8601_BASIC_DATE_TIME_$LI$().matcher(dateTimeStr);
            if(!m.matches()) {
                throw new DateUtil.DateParseException("The value (" + dateTimeStr + ") didn\'t match the expected pattern: " + DateUtil.PATTERN_ISO8601_EXTENDED_DATE_TIME_$LI$() + " or " + DateUtil.PATTERN_ISO8601_BASIC_DATE_TIME_$LI$());
            }
        }
        return DateUtil.parseDateTime_parseMatcher(m, defaultTZ, false, calToDateConverter);
    }

    static parseDateTime_parseMatcher(m : /*Matcher*/any, defaultTZ : string, xsMode : boolean, calToDateConverter : DateUtil.CalendarFieldsToDateConverter) : Date {
        NullArgumentException.check$java_lang_String$java_lang_Object("defaultTZ", defaultTZ);
        try {
            let year : number = DateUtil.groupToInt(m.group(1), "year", Number.MIN_VALUE, Number.MAX_VALUE);
            // let era : number;
            if(year <= 0) {
                // era = Date.BC;
                year = -year + (xsMode?0:1);
                if(year === 0) {
                    throw new DateUtil.DateParseException(DateUtil.MSG_YEAR_0_NOT_ALLOWED);
                }
            } else {
                // era = Date.AD;
            }
            let month : number = DateUtil.groupToInt(m.group(2), "month", 1, 12) - 1;
            let day : number = DateUtil.groupToInt(m.group(3), "day-of-month", 1, 31);
            let hours : number = DateUtil.groupToInt(m.group(4), "hour-of-day", 0, 24);
            let hourWas24 : boolean;
            if(hours === 24) {
                hours = 0;
                hourWas24 = true;
            } else {
                hourWas24 = false;
            }
            let minutesStr : string = m.group(5);
            let minutes : number = minutesStr != null?DateUtil.groupToInt(minutesStr, "minute", 0, 59):0;
            let secsStr : string = m.group(6);
            let secs : number = secsStr != null?DateUtil.groupToInt(secsStr, "second", 0, 60):0;
            let millisecs : number = DateUtil.groupToMillisecond(m.group(7));
            let tz : string = DateUtil.parseMatchingTimeZone(m.group(8), defaultTZ);
            if(hourWas24) {
                if(minutes !== 0 || secs !== 0 || millisecs !== 0) {
                    throw new DateUtil.DateParseException("Hour 24 is only allowed in the case of midnight.");
                }
            }
            return calToDateConverter.calculate(-1, year, month, day, hours, minutes, secs, millisecs, hourWas24, tz);
        } catch(e) {
            throw new DateUtil.DateParseException("Date-time calculation faliure. Probably the date-time is formally correct, but refers to an unexistent date-time (like February 30).");
        }
    }

    /**
     * Parses the time zone part from a W3C XML Schema date/time/dateTime.
     * 
     * @throws DateParseException if the zone is malformed.
     * @param {String} timeZoneStr
     * @return {TimeZone}
     */
    public static parseXSTimeZone(timeZoneStr : string) : string {
        let m : /*Matcher*/any = DateUtil.PATTERN_XS_TIME_ZONE_$LI$().matcher(timeZoneStr);
        if(!m.matches()) {
            throw new DateUtil.DateParseException("The time zone offset didn\'t match the expected pattern: " + DateUtil.PATTERN_XS_TIME_ZONE_$LI$());
        }
        return DateUtil.parseMatchingTimeZone(timeZoneStr, null);
    }

    static groupToInt(g : string, gName : string, min : number, max : number) : number {
        if(g == null) {
            throw new DateUtil.DateParseException("The " + gName + " part is missing.");
        }
        let start : number;
        let negative : boolean;
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(g, "-")) {
            negative = true;
            start = 1;
        } else {
            negative = false;
            start = 0;
        }
        while((start < g.length - 1 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(g.charAt(start)) == '0'.charCodeAt(0))) {
            start++;
        }
        if(start !== 0) {
            g = g.substring(start);
        }
        try {
            let r : number = /* parseInt */parseInt(g);
            if(negative) {
                r = -r;
            }
            if(r < min) {
                throw new DateUtil.DateParseException("The " + gName + " part must be at least " + min + ".");
            }
            if(r > max) {
                throw new DateUtil.DateParseException("The " + gName + " part can\'t be more than " + max + ".");
            }
            return r;
        } catch(e) {
            throw new DateUtil.DateParseException("The " + gName + " part is a malformed integer.");
        }
    }

    static parseMatchingTimeZone(s : string, defaultZone : string) : string {
        if(s == null) {
            return defaultZone;
        }
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"Z"))) {
            return DateUtil.UTC_$LI$();
        }
        let sb : StringBuilder = new StringBuilder("");
        sb.append("GMT");
        sb.append(s.charAt(0));
        let h : string = s.substring(1, 3);
        DateUtil.groupToInt(h, "offset-hours", 0, 23);
        sb.append(h);
        let m : string;
        let ln : number = s.length;
        if(ln > 3) {
            let startIdx : number = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(3)) == ':'.charCodeAt(0)?4:3;
            m = s.substring(startIdx, startIdx + 2);
            DateUtil.groupToInt(m, "offset-minutes", 0, 59);
            sb.append(':');
            sb.append(m);
        }
        return /* getTimeZone */sb.toString();
    }

    static groupToMillisecond(g : string) : number {
        if(g == null) {
            return 0;
        }
        if(g.length > 3) {
            g = g.substring(0, 3);
        }
        let i : number = DateUtil.groupToInt(g, "partial-seconds", 0, Number.MAX_VALUE);
        return g.length === 1?i * 100:(g.length === 2?i * 10:i);
    }
}
DateUtil["__class"] = "freemarker.template.utility.DateUtil";


export namespace DateUtil {

    /**
     * Used internally by {link DateUtil}; don't use its implementations for
     * anything else.
     * @class
     */
    export interface DateToISO8601CalendarFactory {
        /**
         * Returns a {link GregorianCalendar} with the desired time zone and
         * time and US locale. The returned calendar is used as read-only.
         * It must be guaranteed that within a thread the instance returned last time
         * is not in use anymore when this method is called again.
         * @param {TimeZone} tz
         * @param {Date} date
         * @return {GregorianCalendar}
         */
        get(tz : string, date : Date) : Date;
    }

    /**
     * Used internally by {link DateUtil}; don't use its implementations for anything else.
     * @class
     */
    export interface CalendarFieldsToDateConverter {
        /**
         * Calculates the {link Date} from the specified calendar fields.
         * @param {number} era
         * @param {number} year
         * @param {number} month
         * @param {number} day
         * @param {number} hours
         * @param {number} minutes
         * @param {number} secs
         * @param {number} millisecs
         * @param {boolean} addOneDay
         * @param {TimeZone} tz
         * @return {Date}
         */
        calculate(era : number, year : number, month : number, day : number, hours : number, minutes : number, secs : number, millisecs : number, addOneDay : boolean, tz : string) : Date;
    }

    /**
     * Non-thread-safe factory that hard-references a calendar internally.
     * @class
     */
    export class TrivialDateToISO8601CalendarFactory implements DateUtil.DateToISO8601CalendarFactory {
        calendar : Date;

        lastlySetTimeZone : string;

        public get(tz : string, date : Date) : Date {
            // if(this.calendar == null) {
            //     this.calendar = <Date>new Date(tz, string.US);
            //     this.calendar.setGregorianChange(new Date(Number.MIN_VALUE));
            // } else {
            //     if(this.lastlySetTimeZone !== tz) {
            //         this.calendar.setTimeZone(tz);
            //         this.lastlySetTimeZone = tz;
            //     }
            // }
            if(this.calendar == null) {
                this.calendar = new Date();
            }
            /* setTime */this.calendar.setTime(date.getTime());
            return this.calendar;
        }

        constructor() {
            if(this.calendar===undefined) this.calendar = null;
            if(this.lastlySetTimeZone===undefined) this.lastlySetTimeZone = null;
        }
    }
    TrivialDateToISO8601CalendarFactory["__class"] = "freemarker.template.utility.DateUtil.TrivialDateToISO8601CalendarFactory";
    TrivialDateToISO8601CalendarFactory["__interfaces"] = ["freemarker.template.utility.DateUtil.DateToISO8601CalendarFactory"];



    /**
     * Non-thread-safe implementation that hard-references a calendar internally.
     * @class
     */
    export class TrivialCalendarFieldsToDateConverter implements DateUtil.CalendarFieldsToDateConverter {
        calendar : Date;

        lastlySetTimeZone : string;

        public calculate(era : number, year : number, month : number, day : number, hours : number, minutes : number, secs : number, millisecs : number, addOneDay : boolean, tz : string) : Date {
            // if(this.calendar == null) {
            //     this.calendar = <Date>new Date(tz, string.US);
            //     this.calendar.setLenient(false);
            //     this.calendar.setGregorianChange(new Date(Number.MIN_VALUE));
            // } else {
            //     if(this.lastlySetTimeZone !== tz) {
            //         this.calendar.setTimeZone(tz);
            //         this.lastlySetTimeZone = tz;
            //     }
            // }
            if(this.calendar == null) {
                this.calendar = new Date();
            }
            // this.calendar.set(Date.ERA, era);
            /* set */((d, p) => d["UTC"]?d.setUTCFullYear(p):d.setFullYear(p))(this.calendar, year);
            /* set */((d, p) => d["UTC"]?d.setUTCMonth(p):d.setMonth(p))(this.calendar, month);
            /* set */((d, p) => d["UTC"]?d.setUTCDate(p):d.setDate(p))(this.calendar, day);
            /* set */((d, p) => d["UTC"]?d.setUTCHours(p):d.setHours(p))(this.calendar, hours);
            /* set */((d, p) => d["UTC"]?d.setUTCMinutes(p):d.setMinutes(p))(this.calendar, minutes);
            /* set */((d, p) => d["UTC"]?d.setUTCSeconds(p):d.setSeconds(p))(this.calendar, secs);
            /* set */((d, p) => d["UTC"]?d.setUTCMilliseconds(p):d.setMilliseconds(p))(this.calendar, millisecs);
            if(addOneDay) {
                this.calendar.setDate(this.calendar.getDate() + 1);
                // this.calendar.add(Date.DAY_OF_MONTH, 1);
            }
            return /* getTime */(new Date(this.calendar.getTime()));
        }

        constructor() {
            if(this.calendar===undefined) this.calendar = null;
            if(this.lastlySetTimeZone===undefined) this.lastlySetTimeZone = null;
        }
    }
    TrivialCalendarFieldsToDateConverter["__class"] = "freemarker.template.utility.DateUtil.TrivialCalendarFieldsToDateConverter";
    TrivialCalendarFieldsToDateConverter["__interfaces"] = ["freemarker.template.utility.DateUtil.CalendarFieldsToDateConverter"];



    export class DateParseException {
        public constructor(message : string) {
            (<any>Object).setPrototypeOf(this, DateParseException.prototype);
        }
    }
    DateParseException["__class"] = "freemarker.template.utility.DateUtil.DateParseException";
    DateParseException["__interfaces"] = ["java.io.Serializable"];


}





DateUtil.PATTERN_XS_TIME_ZONE_$LI$();

DateUtil.PATTERN_ISO8601_EXTENDED_DATE_TIME_$LI$();

DateUtil.PATTERN_ISO8601_BASIC_DATE_TIME_$LI$();

DateUtil.PATTERN_XS_DATE_TIME_$LI$();

DateUtil.PATTERN_ISO8601_EXTENDED_TIME_$LI$();

DateUtil.PATTERN_ISO8601_BASIC_TIME_$LI$();

DateUtil.PATTERN_XS_TIME_$LI$();

DateUtil.PATTERN_ISO8601_EXTENDED_DATE_$LI$();

DateUtil.PATTERN_ISO8601_BASIC_DATE_$LI$();

DateUtil.PATTERN_XS_DATE_$LI$();

DateUtil.REGEX_ISO8601_EXTENDED_OPTIONAL_TIME_ZONE_$LI$();

DateUtil.REGEX_ISO8601_BASIC_OPTIONAL_TIME_ZONE_$LI$();

DateUtil.REGEX_XS_OPTIONAL_TIME_ZONE_$LI$();

DateUtil.UTC_$LI$();
