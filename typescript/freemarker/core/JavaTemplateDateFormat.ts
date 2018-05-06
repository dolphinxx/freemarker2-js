/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateDateModel} from '../template/TemplateDateModel';
import {TemplateDateFormat} from './TemplateDateFormat';
import {TemplateFormatUtil} from './TemplateFormatUtil';
import {UnparsableValueException} from './UnparsableValueException';

/**
 * Java {link DateFormat}-based format.
 * @param {DateFormat} javaDateFormat
 * @class
 * @extends TemplateDateFormat
 */
export class JavaTemplateDateFormat extends TemplateDateFormat {
    /*private*/ javaDateFormat : DateFormat;

    public constructor(javaDateFormat : DateFormat) {
        super();
        if(this.javaDateFormat===undefined) this.javaDateFormat = null;
        this.javaDateFormat = javaDateFormat;
    }

    /**
     * 
     * @param {*} dateModel
     * @return {String}
     */
    public formatToPlainText(dateModel : TemplateDateModel) : string {
        return this.javaDateFormat.format(TemplateFormatUtil.getNonNullDate(dateModel));
    }

    /**
     * 
     * @param {String} s
     * @param {number} dateType
     * @return {Date}
     */
    public parse(s : string, dateType : number) : Date {
        try {
            return this.javaDateFormat.parse(s);
        } catch(e) {
            throw new UnparsableValueException(e.message, e);
        }
    }

    /**
     * 
     * @return {String}
     */
    public getDescription() : string {
        return (this.javaDateFormat != null && this.javaDateFormat instanceof <any>SimpleDateFormat)?(<SimpleDateFormat>this.javaDateFormat).toPattern():this.javaDateFormat.toString();
    }

    /**
     * 
     * @return {boolean}
     */
    public isLocaleBound() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    public isTimeZoneBound() : boolean {
        return true;
    }
}
JavaTemplateDateFormat["__class"] = "freemarker.core.JavaTemplateDateFormat";




