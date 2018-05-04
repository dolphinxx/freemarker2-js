/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { TemplateMarkupOutputModel } from './TemplateMarkupOutputModel';
import { NonMarkupOutputException } from './NonMarkupOutputException';

export abstract class BuiltInForMarkupOutput extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(!(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0))) {
            throw new NonMarkupOutputException(this.target, model, env);
        }
        return this.calculateResult(<TemplateMarkupOutputModel<any>><any>model);
    }

    abstract calculateResult(model : TemplateMarkupOutputModel<any>) : TemplateModel;

    constructor() {
        super();
    }
}
BuiltInForMarkupOutput["__class"] = "freemarker.core.BuiltInForMarkupOutput";
BuiltInForMarkupOutput["__interfaces"] = ["java.lang.Cloneable"];




