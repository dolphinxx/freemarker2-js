/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {NonSequenceException} from './NonSequenceException';

export abstract class BuiltInForSequence extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(!(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))) {
            throw new NonSequenceException(this.target, model, env);
        }
        return this.calculateResult(<TemplateSequenceModel><any>model);
    }

    abstract calculateResult(tsm : TemplateSequenceModel) : TemplateModel;

    constructor() {
        super();
    }
}
BuiltInForSequence["__class"] = "freemarker.core.BuiltInForSequence";
BuiltInForSequence["__interfaces"] = ["java.lang.Cloneable"];




