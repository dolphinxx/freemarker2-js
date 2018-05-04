/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateHashModelEx } from '../template/TemplateHashModelEx';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { NonExtendedHashException } from './NonExtendedHashException';
import { InvalidReferenceException } from './InvalidReferenceException';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';

export abstract class BuiltInForHashEx extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0)) {
            return this.calculateResult(<TemplateHashModelEx><any>model, env);
        }
        throw new NonExtendedHashException(this.target, model, env);
    }

    abstract calculateResult(hashExModel : TemplateHashModelEx, env : Environment) : TemplateModel;

    newNullPropertyException(propertyName : string, tm : TemplateModel, env : Environment) : InvalidReferenceException {
        if(env.getFastInvalidReferenceExceptions()) {
            return InvalidReferenceException.FAST_INSTANCE_$LI$();
        } else {
            return new InvalidReferenceException(new _ErrorDescriptionBuilder("The exteneded hash (of class ", /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>tm.constructor)), ") has returned null for its \"", propertyName, "\" property. This is maybe a bug. The extended hash was returned by this expression:").blame(this.target), env, this);
        }
    }

    constructor() {
        super();
    }
}
BuiltInForHashEx["__class"] = "freemarker.core.BuiltInForHashEx";
BuiltInForHashEx["__interfaces"] = ["java.lang.Cloneable"];




