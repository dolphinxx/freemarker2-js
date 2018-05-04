/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleScalar } from '../template/SimpleScalar';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { BuiltInForMarkupOutput } from './BuiltInForMarkupOutput';
import { TemplateMarkupOutputModel } from './TemplateMarkupOutputModel';
import { MarkupOutputFormat } from './MarkupOutputFormat';

/**
 * A holder for builtins that operate exclusively on markup output left-hand value.
 * @class
 */
export class BuiltInsForMarkupOutputs {}
BuiltInsForMarkupOutputs["__class"] = "freemarker.core.BuiltInsForMarkupOutputs";


export namespace BuiltInsForMarkupOutputs {

    export class markup_stringBI extends BuiltInForMarkupOutput {
        /**
         * 
         * @param {*} model
         * @return {*}
         */
        calculateResult(model : TemplateMarkupOutputModel<any>) : TemplateModel {
            return new SimpleScalar(model.getOutputFormat().getMarkupString(model));
        }

        constructor() {
            super();
        }
    }
    markup_stringBI["__class"] = "freemarker.core.BuiltInsForMarkupOutputs.markup_stringBI";
    markup_stringBI["__interfaces"] = ["java.lang.Cloneable"];


}



