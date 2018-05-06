/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {NullArgumentException} from '../template/utility/NullArgumentException';
import {SpecialBuiltIn} from './SpecialBuiltIn';
import {OutputFormat} from './OutputFormat';
import {Environment} from './Environment';

export abstract class OutputFormatBoundBuiltIn extends SpecialBuiltIn {
    outputFormat : OutputFormat;

    autoEscapingPolicy : number;

    bindToOutputFormat(outputFormat : OutputFormat, autoEscapingPolicy : number) {
        NullArgumentException.check$java_lang_Object(outputFormat);
        this.outputFormat = outputFormat;
        this.autoEscapingPolicy = autoEscapingPolicy;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        if(this.outputFormat == null) {
            throw Object.defineProperty(new Error("outputFormat was null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
        }
        return this.calculateResult$freemarker_core_Environment(env);
    }

    public calculateResult(s? : any, env? : any) : any {
        if(((ClassUtil.isInstanceOf(s, 'freemarker.core.Environment')) || s === null) && env === undefined) {
            return <any>this.calculateResult$freemarker_core_Environment(s);
        } else throw new Error('invalid overload');
    }

    calculateResult$freemarker_core_Environment(env : /*Environment*/any) : TemplateModel { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    constructor() {
        super();
        if(this.outputFormat===undefined) this.outputFormat = null;
        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = 0;
    }
}
OutputFormatBoundBuiltIn["__class"] = "freemarker.core.OutputFormatBoundBuiltIn";
OutputFormatBoundBuiltIn["__interfaces"] = ["java.lang.Cloneable"];





