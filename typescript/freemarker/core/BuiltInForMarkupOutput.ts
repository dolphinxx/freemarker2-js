/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {TemplateMarkupOutputModel} from './TemplateMarkupOutputModel';
import {NonMarkupOutputException} from './NonMarkupOutputException';
import {ClassUtil} from "../template/utility/ClassUtil";

export abstract class BuiltInForMarkupOutput extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(!(model != null && ClassUtil.isAssignableFrom(model, "freemarker.core.TemplateMarkupOutputModel"))) {
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




