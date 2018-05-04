/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateNodeModelEx } from '../template/TemplateNodeModelEx';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { NonExtendedNodeException } from './NonExtendedNodeException';

export abstract class BuiltInForNodeEx extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNodeModelEx") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNodeModelEx") >= 0)) {
            return this.calculateResult(<TemplateNodeModelEx><any>model, env);
        } else {
            throw new NonExtendedNodeException(this.target, model, env);
        }
    }

    abstract calculateResult(nodeModel : TemplateNodeModelEx, env : Environment) : TemplateModel;

    constructor() {
        super();
    }
}
BuiltInForNodeEx["__class"] = "freemarker.core.BuiltInForNodeEx";
BuiltInForNodeEx["__interfaces"] = ["java.lang.Cloneable"];




