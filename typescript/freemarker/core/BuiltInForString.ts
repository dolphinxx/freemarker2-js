/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';

export abstract class BuiltInForString extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        return this.calculateResult(BuiltInForString.getTargetString(this.target, env), env);
    }

    abstract calculateResult(s : string, env : Environment) : TemplateModel;

    static getTargetString(target : Expression, env : Environment) : string {
        return target.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment(env);
    }

    constructor() {
        super();
    }
}
BuiltInForString["__class"] = "freemarker.core.BuiltInForString";
BuiltInForString["__interfaces"] = ["java.lang.Cloneable"];




