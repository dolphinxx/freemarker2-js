/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {TemplateNodeModel} from '../template/TemplateNodeModel';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {NonNodeException} from './NonNodeException';

export abstract class BuiltInForNode extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0)) {
            return this.calculateResult(<TemplateNodeModel><any>model, env);
        } else {
            throw new NonNodeException(this.target, model, env);
        }
    }

    abstract calculateResult(nodeModel : TemplateNodeModel, env : /*Environment*/any) : TemplateModel;

    constructor() {
        super();
    }
}
BuiltInForNode["__class"] = "freemarker.core.BuiltInForNode";
BuiltInForNode["__interfaces"] = ["java.lang.Cloneable"];




