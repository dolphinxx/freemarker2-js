/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';

export abstract class BuiltInForNumber extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        return this.calculateResult(this.target.modelToNumber(model, env), model);
    }

    abstract calculateResult(num : number, model : TemplateModel) : TemplateModel;

    constructor() {
        super();
    }
}
BuiltInForNumber["__class"] = "freemarker.core.BuiltInForNumber";
BuiltInForNumber["__interfaces"] = ["java.lang.Cloneable"];




