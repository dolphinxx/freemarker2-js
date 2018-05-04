/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateNumberFormat } from './TemplateNumberFormat';
import { UnformattableValueException } from './UnformattableValueException';
import { TemplateNumberModel } from '../template/TemplateNumberModel';

/**
 * Only exists for emulating pre-2.3.24-IcI {@code ?string} behavior.
 * 
 * @since 2.3.24
 * @extends TemplateNumberFormat
 * @class
 */
export abstract class BackwardCompatibleTemplateNumberFormat extends TemplateNumberFormat {
    public format(numberModel? : any) : any {
        if(((numberModel != null && (numberModel["__interfaces"] != null && numberModel["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || numberModel.constructor != null && numberModel.constructor["__interfaces"] != null && numberModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) || numberModel === null)) {
            super.format(numberModel);
        } else if(((typeof numberModel === 'number') || numberModel === null)) {
            return <any>this.format$java_lang_Number(numberModel);
        } else throw new Error('invalid overload');
    }

    format$java_lang_Number(number : number) : string { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }
}
BackwardCompatibleTemplateNumberFormat["__class"] = "freemarker.core.BackwardCompatibleTemplateNumberFormat";



