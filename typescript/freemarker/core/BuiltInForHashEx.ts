/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateHashModelEx} from '../template/TemplateHashModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {NonExtendedHashException} from './NonExtendedHashException';
import {InvalidReferenceException} from './InvalidReferenceException';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';

export abstract class BuiltInForHashEx extends BuiltIn {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateHashModelEx")) {
            return this.calculateResult(<TemplateHashModelEx><any>model, env);
        }
        throw new NonExtendedHashException(this.target, model, env);
    }

    abstract calculateResult(hashExModel : TemplateHashModelEx, env : /*Environment*/any) : TemplateModel;

    newNullPropertyException(propertyName : string, tm : TemplateModel, env : /*Environment*/any) : InvalidReferenceException {
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




