/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { BackwardCompatibleTemplateNumberFormat } from './BackwardCompatibleTemplateNumberFormat';
import { UnformattableValueException } from './UnformattableValueException';
import { TemplateFormatUtil } from './TemplateFormatUtil';

export class JavaTemplateNumberFormat extends BackwardCompatibleTemplateNumberFormat {
    /*private*/ formatString : string;

    /*private*/ javaNumberFormat : NumberFormat;

    public constructor(javaNumberFormat : NumberFormat, formatString : string) {
        super();
        if(this.formatString===undefined) this.formatString = null;
        if(this.javaNumberFormat===undefined) this.javaNumberFormat = null;
        this.formatString = formatString;
        this.javaNumberFormat = javaNumberFormat;
    }

    /**
     * 
     * @param {*} numberModel
     * @return {String}
     */
    public formatToPlainText(numberModel : TemplateNumberModel) : string {
        let number : number = TemplateFormatUtil.getNonNullNumber(numberModel);
        return this.format$java_lang_Number(number);
    }

    /**
     * 
     * @return {boolean}
     */
    public isLocaleBound() : boolean {
        return true;
    }

    public format$java_lang_Number(number : number) : string {
        try {
            return this.javaNumberFormat.format(number);
        } catch(e) {
            throw new UnformattableValueException("This format can\'t format the " + number + " number. Reason: " + e.message, e);
        };
    }

    /**
     * 
     * @param {Number} number
     * @return {String}
     */
    public format(number? : any) : any {
        if(((typeof number === 'number') || number === null)) {
            return <any>this.format$java_lang_Number(number);
        } else if(((number != null && (number["__interfaces"] != null && number["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || number.constructor != null && number.constructor["__interfaces"] != null && number.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) || number === null)) {
            super.format(number);
        } else throw new Error('invalid overload');
    }

    public getJavaNumberFormat() : NumberFormat {
        return this.javaNumberFormat;
    }

    /**
     * 
     * @return {String}
     */
    public getDescription() : string {
        return this.formatString;
    }
}
JavaTemplateNumberFormat["__class"] = "freemarker.core.JavaTemplateNumberFormat";



var __Function = Function;
