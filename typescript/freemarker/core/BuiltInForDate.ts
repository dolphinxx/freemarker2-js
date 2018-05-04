/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { EvalUtil } from './EvalUtil';
import { InvalidReferenceException } from './InvalidReferenceException';
import { NonDateException } from './NonDateException';

export abstract class BuiltInForDate extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) {
            let tdm : TemplateDateModel = <TemplateDateModel><any>model;
            return this.calculateResult(EvalUtil.modelToDate(tdm, this.target), tdm.getDateType(), env);
        } else {
            throw BuiltInForDate.newNonDateException(env, model, this.target);
        }
    }

    /**
     * Override this to implement the built-in.
     * @param {Date} date
     * @param {number} dateType
     * @param {Environment} env
     * @return {*}
     */
    abstract calculateResult(date : Date, dateType : number, env : Environment) : TemplateModel;

    static newNonDateException(env : Environment, model : TemplateModel, target : Expression) : TemplateException {
        let e : TemplateException;
        if(model == null) {
            e = InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(target, env);
        } else {
            e = new NonDateException(target, model, "date", env);
        }
        return e;
    }

    constructor() {
        super();
    }
}
BuiltInForDate["__class"] = "freemarker.core.BuiltInForDate";
BuiltInForDate["__interfaces"] = ["java.lang.Cloneable"];




