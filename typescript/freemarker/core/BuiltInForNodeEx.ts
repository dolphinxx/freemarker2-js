/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {TemplateNodeModelEx} from '../template/TemplateNodeModelEx';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {NonExtendedNodeException} from './NonExtendedNodeException';

export abstract class BuiltInForNodeEx extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateNodeModelEx")) {
            return this.calculateResult(<TemplateNodeModelEx><any>model, env);
        } else {
            throw new NonExtendedNodeException(this.target, model, env);
        }
    }

    abstract calculateResult(nodeModel : TemplateNodeModelEx, env : /*Environment*/any) : TemplateModel;

    constructor() {
        super();
    }
}
BuiltInForNodeEx["__class"] = "freemarker.core.BuiltInForNodeEx";
BuiltInForNodeEx["__interfaces"] = ["java.lang.Cloneable"];




