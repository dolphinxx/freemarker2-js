/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {AdapterTemplateModel} from '../template/AdapterTemplateModel';
import {SimpleDate} from '../template/SimpleDate';
import {SimpleScalar} from '../template/SimpleScalar';
import {TemplateDateModel} from '../template/TemplateDateModel';
import {TemplateMethodModelEx} from '../template/TemplateMethodModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {DateUtil} from '../template/utility/DateUtil';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {EvalUtil} from './EvalUtil';
import {BuiltInForDate} from './BuiltInForDate';
import {_TemplateModelException} from './_TemplateModelException';
import {_DelayedJQuote} from './_DelayedJQuote';
import {_MessageUtil} from './_MessageUtil';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';

/**
 * A holder for built-ins that operate exclusively on date left-hand values.
 * @class
 */
export class BuiltInsForDates {
    constructor() {
    }
}
BuiltInsForDates["__class"] = "freemarker.core.BuiltInsForDates";


export namespace BuiltInsForDates {

    export class dateType_if_unknownBI extends BuiltIn {
        dateType : number;

        constructor(dateType : number) {
            super();
            if(this.dateType===undefined) this.dateType = 0;
            this.dateType = dateType;
        }

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateDateModel")) {
                let tdm : TemplateDateModel = <TemplateDateModel><any>model;
                let tdmDateType : number = tdm.getDateType();
                if(tdmDateType !== TemplateDateModel.UNKNOWN) {
                    return tdm;
                }
                return new SimpleDate(EvalUtil.modelToDate(tdm, this.target), this.dateType);
            } else {
                throw BuiltInForDate.newNonDateException(env, model, this.target);
            }
        }

        calculateResult(date : Date, dateType : number, env : /*Environment*/any) : TemplateModel {
            return null;
        }
    }
    dateType_if_unknownBI["__class"] = "freemarker.core.BuiltInsForDates.dateType_if_unknownBI";
    dateType_if_unknownBI["__interfaces"] = ["java.lang.Cloneable"];



    export abstract class AbstractISOBI extends BuiltInForDate {
        showOffset : boolean;

        accuracy : number;

        constructor(showOffset : boolean, accuracy : number) {
            super();
            if(this.showOffset===undefined) this.showOffset = null;
            if(this.accuracy===undefined) this.accuracy = 0;
            this.showOffset = showOffset;
            this.accuracy = accuracy;
        }

        checkDateTypeNotUnknown(dateType : number) {
            if(dateType === TemplateDateModel.UNKNOWN) {
                throw new _MiscTemplateException(new _ErrorDescriptionBuilder("The value of the following has unknown date type, but ?", this.key, " needs a value where it\'s known if it\'s a date (no time part), time, or date-time value:").blame(this.target).tip$java_lang_String(_MessageUtil.UNKNOWN_DATE_TYPE_ERROR_TIP));
            }
        }

        shouldShowOffset(date : Date, dateType : number, env : /*Environment*/any) : boolean {
            if(dateType === TemplateDateModel.DATE) {
                return false;
            } else if(this.showOffset != null) {
                return this.showOffset;
            } else {
                return !((date != null && date instanceof <any>Time) && _TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_core_TemplateObject(this) >= _TemplateAPI.VERSION_INT_2_3_21_$LI$());
            }
        }
    }
    AbstractISOBI["__class"] = "freemarker.core.BuiltInsForDates.AbstractISOBI";
    AbstractISOBI["__interfaces"] = ["java.lang.Cloneable"];



    /**
     * Implements {@code ?iso(timeZone)}.
     * @extends BuiltInsForDates.AbstractISOBI
     * @class
     */
    export class iso_BI extends BuiltInsForDates.AbstractISOBI {
        constructor(showOffset : boolean, accuracy : number) {
            super(showOffset, accuracy);
        }

        /**
         * 
         * @param {Date} date
         * @param {number} dateType
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(date : Date, dateType : number, env : /*Environment*/any) : TemplateModel {
            this.checkDateTypeNotUnknown(dateType);
            return new iso_BI.Result(this, date, dateType, env);
        }
    }
    iso_BI["__class"] = "freemarker.core.BuiltInsForDates.iso_BI";
    iso_BI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace iso_BI {

        export class Result implements TemplateMethodModelEx {
            public __parent: any;
            date : Date;

            dateType : number;

            env : Environment;

            constructor(__parent: any, date : Date, dateType : number, env : /*Environment*/any) {
                this.__parent = __parent;
                if(this.date===undefined) this.date = null;
                if(this.dateType===undefined) this.dateType = 0;
                if(this.env===undefined) this.env = null;
                this.date = date;
                this.dateType = dateType;
                this.env = env;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                let tzArgTM : TemplateModel = <TemplateModel><any>/* get */args[0];
                let tzArg : string;
                let adaptedObj : any;
                if((tzArgTM != null && (tzArgTM["__interfaces"] != null && tzArgTM["__interfaces"].indexOf("freemarker.template.AdapterTemplateModel") >= 0 || tzArgTM.constructor != null && tzArgTM.constructor["__interfaces"] != null && tzArgTM.constructor["__interfaces"].indexOf("freemarker.template.AdapterTemplateModel") >= 0)) && (typeof (adaptedObj = (<AdapterTemplateModel><any>tzArgTM).getAdaptedObject(String)) === 'string')) {
                    tzArg = <string>adaptedObj;
                } else if(tzArgTM != null && (tzArgTM["__interfaces"] != null && tzArgTM["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || tzArgTM.constructor != null && tzArgTM.constructor["__interfaces"] != null && tzArgTM.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
                    let tzName : string = EvalUtil.modelToString(<TemplateScalarModel><any>tzArgTM, null, null);
                    try {
                        tzArg = DateUtil.getTimeZone(tzName);
                    } catch(e) {
                        throw new _TemplateModelException("The time zone string specified for ?", this.__parent.key, "(...) is not recognized as a valid time zone name: ", new _DelayedJQuote(tzName));
                    }
                } else {
                    throw _MessageUtil.newMethodArgUnexpectedTypeException("?" + this.__parent.key, 0, "string or java.util.TimeZone", tzArgTM);
                }
                return new SimpleScalar(DateUtil.dateToISO8601String(this.date, this.dateType !== TemplateDateModel.TIME, this.dateType !== TemplateDateModel.DATE, this.__parent.shouldShowOffset(this.date, this.dateType, this.env), this.__parent.accuracy, tzArg, this.env.getISOBuiltInCalendarFactory()));
            }
        }
        Result["__class"] = "freemarker.core.BuiltInsForDates.iso_BI.Result";
        Result["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    /**
     * Implements {@code ?iso_utc} and {@code ?iso_local} variants, but not
     * {@code ?iso(timeZone)}.
     * @extends BuiltInsForDates.AbstractISOBI
     * @class
     */
    export class iso_utc_or_local_BI extends BuiltInsForDates.AbstractISOBI {
        useUTC : boolean;

        constructor(showOffset : boolean, accuracy : number, useUTC : boolean) {
            super(showOffset, accuracy);
            if(this.useUTC===undefined) this.useUTC = false;
            this.useUTC = useUTC;
        }

        /**
         * 
         * @param {Date} date
         * @param {number} dateType
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(date : Date, dateType : number, env : /*Environment*/any) : TemplateModel {
            this.checkDateTypeNotUnknown(dateType);
            return new SimpleScalar(DateUtil.dateToISO8601String(date, dateType !== TemplateDateModel.TIME, dateType !== TemplateDateModel.DATE, this.shouldShowOffset(date, dateType, env), this.accuracy, this.useUTC?DateUtil.UTC_$LI$():env.shouldUseSQLDTTZ((<any>date.constructor))?env.getSQLDateAndTimeTimeZone():env.getTimeZone(), env.getISOBuiltInCalendarFactory()));
        }
    }
    iso_utc_or_local_BI["__class"] = "freemarker.core.BuiltInsForDates.iso_utc_or_local_BI";
    iso_utc_or_local_BI["__interfaces"] = ["java.lang.Cloneable"];


}



