/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateValueFormat } from './TemplateValueFormat';
import { TemplateValueFormatException } from './TemplateValueFormatException';

/**
 * Represents a date/time/dateTime format; used in templates for formatting and parsing with that format. This is
 * similar to Java's {link DateFormat}, but made to fit the requirements of FreeMarker. Also, it makes easier to define
 * formats that can't be represented with Java's existing {link DateFormat} implementations.
 * <p>
 * <p>
 * Implementations need not be thread-safe if the {link TemplateNumberFormatFactory} doesn't recycle them among
 * different {link Environment}-s. As far as FreeMarker's concerned, instances are bound to a single
 * {link Environment}, and {link Environment}-s are thread-local objects.
 * 
 * @since 2.3.24
 * @class
 * @extends TemplateValueFormat
 */
export abstract class TemplateDateFormat extends TemplateValueFormat {
    /**
     * @param {*} dateModel The date/time/dateTime to format; not {@code null}. Most implementations will just work with the return value of
     * {link TemplateDateModel#getAsDate()}, but some may format differently depending on the properties of
     * a custom {link TemplateDateModel} implementation.
     * @return {String} The date/time/dateTime as text, with no escaping (like no HTML escaping); can't be {@code null}.
     * @throws TemplateValueFormatException When a problem occurs during the formatting of the value. Notable subclass:
     * {link UnknownDateTypeFormattingUnsupportedException}
     * @throws TemplateModelException       Exception thrown by the {@code dateModel} object when calling its methods.
     */
    public abstract formatToPlainText(dateModel : TemplateDateModel) : string;

    public format(date? : any, datePart? : any, timePart? : any, offsetPart? : any, accuracy? : any, timeZone? : any, calendarFactory? : any) : any {
        if(((date != null && (date["__interfaces"] != null && date["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || date.constructor != null && date.constructor["__interfaces"] != null && date.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) || date === null) && datePart === undefined && timePart === undefined && offsetPart === undefined && accuracy === undefined && timeZone === undefined && calendarFactory === undefined) {
            return <any>this.format$freemarker_template_TemplateDateModel(date);
        } else throw new Error('invalid overload');
    }

    public format$freemarker_template_TemplateDateModel(dateModel : TemplateDateModel) : any {
        return this.formatToPlainText(dateModel);
    }

    /**
     * Parsers a string to date/time/datetime, according to this format. Some format implementations may throw
     * {link ParsingNotSupportedException} here.
     * 
     * @param {String} s        The string to parse
     * @param {number} dateType The expected date type of the result. Not all {link TemplateDateFormat}-s will care about this;
     * though those who return a {link TemplateDateModel} instead of {link Date} often will. When strings
     * are parsed via {@code ?date}, {@code ?time}, or {@code ?datetime}, then this parameter is
     * {link TemplateDateModel#DATE}, {link TemplateDateModel#TIME}, or {link TemplateDateModel#DATETIME},
     * respectively. This parameter rarely if ever {link TemplateDateModel#UNKNOWN}, but the implementation
     * that cares about this parameter should be prepared for that. If nothing else, it should throw
     * {link UnknownDateTypeParsingUnsupportedException} then.
     * @return {Object} The interpretation of the text either as a {link Date} or {link TemplateDateModel}. Typically, a
     * {link Date}. {link TemplateDateModel} is used if you have to attach some application-specific
     * meta-information thats also extracted during {link #formatToPlainText(TemplateDateModel)} (so if you format
     * something and then parse it, you get back an equivalent result). It can't be {@code null}. Known issue
     * (at least in FTL 2): {@code ?date}/{@code ?time}/{@code ?datetime}, when not invoked as a method, can't
     * return the {link TemplateDateModel}, only the {link Date} from inside it, hence the additional
     * application-specific meta-info will be lost.
     */
    public abstract parse(s : string, dateType : number) : any;

    /**
     * Tells if this formatter should be re-created if the locale changes.
     * @return {boolean}
     */
    public abstract isLocaleBound() : boolean;

    /**
     * Tells if this formatter should be re-created if the time zone changes. Currently always {@code true}.
     * @return {boolean}
     */
    public abstract isTimeZoneBound() : boolean;
}
TemplateDateFormat["__class"] = "freemarker.core.TemplateDateFormat";



var __Function = Function;
