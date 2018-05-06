/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {BuiltIn} from './BuiltIn';

export abstract class BuiltInForNumber extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
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




