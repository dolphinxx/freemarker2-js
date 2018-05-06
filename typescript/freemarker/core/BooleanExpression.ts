/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateModel} from '../template/TemplateModel';
import {Expression} from './Expression';
import {Environment} from './Environment';

export abstract class BooleanExpression extends Expression {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        return this.evalToBoolean$freemarker_core_Environment(env)?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
    }
}
BooleanExpression["__class"] = "freemarker.core.BooleanExpression";



