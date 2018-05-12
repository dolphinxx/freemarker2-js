import {DateFormat} from "./DateFormat";
///<reference path="../../moment-jdateformatparser.d.ts" />
import * as moment from 'moment';
import {Locale} from "../util/Locale";
require('moment-jdateformatparser');

export class SimpleDateFormat extends DateFormat {
    private pattern:string;
    private javaPattern:string;
    private locale:Locale;

    public constructor(pattern:string, locale?:Locale) {
        super();
        if(locale === undefined) {
            locale = new Locale(global.DEFAULT_LOCALE);
        }
        this.javaPattern = pattern;
        this.pattern = moment().toMomentFormatString(pattern);
        this.locale = locale;

    }

    public format(date: Date): string {
        return moment(date).locale(this.locale.getLanguage()).format(this.pattern);
    }

    public parse(text:string):Date {
        return moment(text, this.pattern).toDate();
    }

    public toPattern():string {
        return this.javaPattern;
    }
}