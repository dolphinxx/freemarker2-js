/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { MarkupOutputFormat } from './MarkupOutputFormat';
import { Environment } from './Environment';
import { TemplateMarkupOutputModel } from './TemplateMarkupOutputModel';
import { MarkupOutputFormatBoundBuiltIn } from './MarkupOutputFormatBoundBuiltIn';
import { Expression } from './Expression';
import { EvalUtil } from './EvalUtil';
import { _TemplateModelException } from './_TemplateModelException';
import { _DelayedToString } from './_DelayedToString';

export class BuiltInsForOutputFormatRelated {}
BuiltInsForOutputFormatRelated["__class"] = "freemarker.core.BuiltInsForOutputFormatRelated";


export namespace BuiltInsForOutputFormatRelated {

    export abstract class AbstractConverterBI extends MarkupOutputFormatBoundBuiltIn {
        calculateResult$freemarker_core_Environment(env : Environment) : TemplateModel {
            let lhoTM : TemplateModel = this.target.eval(env);
            let lhoMOOrStr : any = EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(lhoTM, this.target, null, env);
            let contextOF : MarkupOutputFormat<any> = this.outputFormat;
            if(typeof lhoMOOrStr === 'string') {
                return this.calculateResult$java_lang_String$freemarker_core_MarkupOutputFormat$freemarker_core_Environment(<string>lhoMOOrStr, contextOF, env);
            } else {
                let lhoMO : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>lhoMOOrStr;
                let lhoOF : MarkupOutputFormat<any> = lhoMO.getOutputFormat();
                if(lhoOF === contextOF || contextOF.isOutputFormatMixingAllowed()) {
                    return lhoMO;
                } else {
                    let lhoPlainTtext : string = lhoOF.getSourcePlainText(lhoMO);
                    if(lhoPlainTtext == null) {
                        throw new _TemplateModelException(this.target, "The left side operand of ?", this.key, " is in ", new _DelayedToString(lhoOF), " format, which differs from the current output format, ", new _DelayedToString(contextOF), ". Conversion wasn\'t possible.");
                    }
                    return contextOF.fromPlainTextByEscaping(lhoPlainTtext);
                }
            }
        }

        public calculateResult$java_lang_String$freemarker_core_MarkupOutputFormat$freemarker_core_Environment(lho : string, outputFormat : MarkupOutputFormat<any>, env : Environment) : TemplateModel { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

        public calculateResult(lho? : any, outputFormat? : any, env? : any) : any {
            if(((typeof lho === 'string') || lho === null) && ((outputFormat != null && outputFormat instanceof <any>MarkupOutputFormat) || outputFormat === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
                return <any>this.calculateResult$java_lang_String$freemarker_core_MarkupOutputFormat$freemarker_core_Environment(lho, outputFormat, env);
            } else if(((lho != null && lho instanceof <any>Environment) || lho === null) && outputFormat === undefined && env === undefined) {
                return <any>this.calculateResult$freemarker_core_Environment(lho);
            } else throw new Error('invalid overload');
        }

        constructor() {
            super();
        }
    }
    AbstractConverterBI["__class"] = "freemarker.core.BuiltInsForOutputFormatRelated.AbstractConverterBI";
    AbstractConverterBI["__interfaces"] = ["java.lang.Cloneable"];



    export class no_escBI extends BuiltInsForOutputFormatRelated.AbstractConverterBI {
        public calculateResult$java_lang_String$freemarker_core_MarkupOutputFormat$freemarker_core_Environment(lho : string, outputFormat : MarkupOutputFormat<any>, env : Environment) : TemplateModel {
            return outputFormat.fromMarkup(lho);
        }

        /**
         * 
         * @param {String} lho
         * @param {MarkupOutputFormat} outputFormat
         * @param {Environment} env
         * @return {*}
         */
        public calculateResult(lho? : any, outputFormat? : any, env? : any) : any {
            if(((typeof lho === 'string') || lho === null) && ((outputFormat != null && outputFormat instanceof <any>MarkupOutputFormat) || outputFormat === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
                return <any>this.calculateResult$java_lang_String$freemarker_core_MarkupOutputFormat$freemarker_core_Environment(lho, outputFormat, env);
            } else if(((lho != null && lho instanceof <any>Environment) || lho === null) && outputFormat === undefined && env === undefined) {
                return <any>this.calculateResult$freemarker_core_Environment(lho);
            } else throw new Error('invalid overload');
        }

        constructor() {
            super();
        }
    }
    no_escBI["__class"] = "freemarker.core.BuiltInsForOutputFormatRelated.no_escBI";
    no_escBI["__interfaces"] = ["java.lang.Cloneable"];



    export class escBI extends BuiltInsForOutputFormatRelated.AbstractConverterBI {
        public calculateResult$java_lang_String$freemarker_core_MarkupOutputFormat$freemarker_core_Environment(lho : string, outputFormat : MarkupOutputFormat<any>, env : Environment) : TemplateModel {
            return outputFormat.fromPlainTextByEscaping(lho);
        }

        /**
         * 
         * @param {String} lho
         * @param {MarkupOutputFormat} outputFormat
         * @param {Environment} env
         * @return {*}
         */
        public calculateResult(lho? : any, outputFormat? : any, env? : any) : any {
            if(((typeof lho === 'string') || lho === null) && ((outputFormat != null && outputFormat instanceof <any>MarkupOutputFormat) || outputFormat === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
                return <any>this.calculateResult$java_lang_String$freemarker_core_MarkupOutputFormat$freemarker_core_Environment(lho, outputFormat, env);
            } else if(((lho != null && lho instanceof <any>Environment) || lho === null) && outputFormat === undefined && env === undefined) {
                return <any>this.calculateResult$freemarker_core_Environment(lho);
            } else throw new Error('invalid overload');
        }

        constructor() {
            super();
        }
    }
    escBI["__class"] = "freemarker.core.BuiltInsForOutputFormatRelated.escBI";
    escBI["__interfaces"] = ["java.lang.Cloneable"];


}



