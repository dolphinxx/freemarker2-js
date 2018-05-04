/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { NullArgumentException } from '../template/utility/NullArgumentException';
import { SpecialBuiltIn } from './SpecialBuiltIn';
import { MarkupOutputFormat } from './MarkupOutputFormat';
import { Environment } from './Environment';

export abstract class MarkupOutputFormatBoundBuiltIn extends SpecialBuiltIn {
    outputFormat : MarkupOutputFormat<any>;

    bindToMarkupOutputFormat(outputFormat : MarkupOutputFormat<any>) {
        NullArgumentException.check$java_lang_Object(outputFormat);
        this.outputFormat = outputFormat;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        if(this.outputFormat == null) {
            throw Object.defineProperty(new Error("outputFormat was null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
        }
        return this.calculateResult$freemarker_core_Environment(env);
    }

    /**
     * 
     * @param {String} lho
     * @param {MarkupOutputFormat} outputFormat
     * @param {Environment} env
     * @return {*}
     */
    public calculateResult(lho? : any, outputFormat? : any, env? : any) : any {
        if(((lho != null && lho instanceof <any>Environment) || lho === null) && outputFormat === undefined && env === undefined) {
            return <any>this.calculateResult$freemarker_core_Environment(lho);
        } else throw new Error('invalid overload');
    }

    calculateResult$freemarker_core_Environment(env : Environment) : TemplateModel { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    constructor() {
        super();
        if(this.outputFormat===undefined) this.outputFormat = null;
    }
}
MarkupOutputFormatBoundBuiltIn["__class"] = "freemarker.core.MarkupOutputFormatBoundBuiltIn";
MarkupOutputFormatBoundBuiltIn["__interfaces"] = ["java.lang.Cloneable"];




var __Function = Function;
