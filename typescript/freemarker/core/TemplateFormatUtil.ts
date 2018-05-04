/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { InvalidFormatParametersException } from './InvalidFormatParametersException';
import { EvalUtil } from './EvalUtil';

/**
 * Utility classes for implementing {link TemplateValueFormat}-s.
 * 
 * @since 2.3.24
 * @class
 */
export class TemplateFormatUtil {
    constructor() {
    }

    public static checkHasNoParameters(params : string) {
        if(params.length !== 0) {
            throw new InvalidFormatParametersException("This number format doesn\'t support any parameters.");
        }
    }

    /**
     * Utility method to extract the {link Number} from an {link TemplateNumberModel}, and throws
     * {link TemplateModelException} with a standard error message if that's {@code null}. {link TemplateNumberModel}
     * that store {@code null} are in principle not allowed, and so are considered to be bugs in the
     * {link ObjectWrapper} or {link TemplateNumberModel} implementation.
     * @param {*} numberModel
     * @return {Number}
     */
    public static getNonNullNumber(numberModel : TemplateNumberModel) : number {
        let number : number = numberModel.getAsNumber();
        if(number == null) {
            throw EvalUtil.newModelHasStoredNullException(Number, numberModel, null);
        }
        return number;
    }

    /**
     * Utility method to extract the {link Date} from an {link TemplateDateModel}, and throw
     * {link TemplateModelException} with a standard error message if that's {@code null}. {link TemplateDateModel}
     * that store {@code null} are in principle not allowed, and so are considered to be bugs in the
     * {link ObjectWrapper} or {link TemplateNumberModel} implementation.
     * @param {*} dateModel
     * @return {Date}
     */
    public static getNonNullDate(dateModel : TemplateDateModel) : Date {
        let date : Date = dateModel.getAsDate();
        if(date == null) {
            throw EvalUtil.newModelHasStoredNullException(Date, dateModel, null);
        }
        return date;
    }
}
TemplateFormatUtil["__class"] = "freemarker.core.TemplateFormatUtil";



var __Function = Function;
