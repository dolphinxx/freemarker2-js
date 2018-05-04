/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateHashModelEx } from '../template/TemplateHashModelEx';
import { TemplateModel } from '../template/TemplateModel';
import { UnexpectedTypeException } from './UnexpectedTypeException';
import { Environment } from './Environment';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';
import { Expression } from './Expression';
import { InvalidReferenceException } from './InvalidReferenceException';

/**
 * Indicates that a {link TemplateHashModelEx} value was expected, but the value had a different type.
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonExtendedHashException extends UnexpectedTypeException {
    static EXPECTED_TYPES : Array<any>; public static EXPECTED_TYPES_$LI$() : Array { if(NonExtendedHashException.EXPECTED_TYPES == null) NonExtendedHashException.EXPECTED_TYPES = ["freemarker.template.TemplateHashModelEx"]; return NonExtendedHashException.EXPECTED_TYPES; };

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof tip === 'string') || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(blamed, model, "extended hash", NonExtendedHashException.EXPECTED_TYPES_$LI$(), tip, env);
            (<any>Object).setPrototypeOf(this, NonExtendedHashException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(typeof tip[0] === 'string'))) || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, "extended hash", NonExtendedHashException.EXPECTED_TYPES_$LI$(), tips, env);
            (<any>Object).setPrototypeOf(this, NonExtendedHashException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Environment) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            super(blamed, model, "extended hash", NonExtendedHashException.EXPECTED_TYPES_$LI$(), env);
            (<any>Object).setPrototypeOf(this, NonExtendedHashException.prototype);
        } else if(((typeof blamed === 'string') || blamed === null) && ((model != null && model instanceof <any>Environment) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonExtendedHashException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonExtendedHashException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, "Expecting extended hash value here");
            (<any>Object).setPrototypeOf(this, NonExtendedHashException.prototype);
        } else throw new Error('invalid overload');
    }
}
NonExtendedHashException["__class"] = "freemarker.core.NonExtendedHashException";
NonExtendedHashException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;

NonExtendedHashException.EXPECTED_TYPES_$LI$();
