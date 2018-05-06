/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';

/**
 * "date", "time" and "date-time" template language data types: corresponds to {link java.util.Date}. Contrary to Java,
 * FreeMarker distinguishes date (no time part), time and date-time values.
 * <p>
 * <p>
 * Objects of this type should be immutable, that is, calling {link #getAsDate()} and {link #getDateType()} should
 * always return the same value as for the first time.
 * @class
 */
export interface TemplateDateModel extends TemplateModel {
    /**
     * Returns the date value. The return value must not be {@code null}.
     * @return {Date}
     */
    getAsDate() : Date;

    /**
     * Returns the type of the date. It can be any of {link #TIME},
     * {link #DATE}, or {link #DATETIME}.
     * @return {number}
     */
    getDateType() : number;
}

export namespace TemplateDateModel {

    /**
     * It is not known whether the date represents a date, a time, or a date-time value.
     * This often leads to exceptions in templates due to ambiguities it causes, so avoid it if possible.
     */
    export let UNKNOWN : number = 0;

    /**
     * The date model represents a time value (no date part).
     */
    export let TIME : number = 1;

    /**
     * The date model represents a date value (no time part).
     */
    export let DATE : number = 2;

    /**
     * The date model represents a date-time value (also known as timestamp).
     */
    export let DATETIME : number = 3;

    export let TYPE_NAMES : Array<any> = /* unmodifiableList *//* asList */["UNKNOWN", "TIME", "DATE", "DATETIME"].slice(0);
}




