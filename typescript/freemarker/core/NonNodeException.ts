/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../template/TemplateModel';
import { TemplateNodeModel } from '../template/TemplateNodeModel';
import { UnexpectedTypeException } from './UnexpectedTypeException';
import { Environment } from './Environment';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';
import { Expression } from './Expression';
import { InvalidReferenceException } from './InvalidReferenceException';

/**
 * Indicates that a {link TemplateNodeModel} value was expected, but the value had a different type.
 * 
 * @since 2.3.21
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonNodeException extends UnexpectedTypeException {
    static EXPECTED_TYPES : Array<any>; public static EXPECTED_TYPES_$LI$() : Array { if(NonNodeException.EXPECTED_TYPES == null) NonNodeException.EXPECTED_TYPES = ["freemarker.template.TemplateNodeModel"]; return NonNodeException.EXPECTED_TYPES; };

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof tip === 'string') || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(blamed, model, "node", NonNodeException.EXPECTED_TYPES_$LI$(), tip, env);
            (<any>Object).setPrototypeOf(this, NonNodeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(typeof tip[0] === 'string'))) || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, "node", NonNodeException.EXPECTED_TYPES_$LI$(), tips, env);
            (<any>Object).setPrototypeOf(this, NonNodeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Environment) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            super(blamed, model, "node", NonNodeException.EXPECTED_TYPES_$LI$(), env);
            (<any>Object).setPrototypeOf(this, NonNodeException.prototype);
        } else if(((typeof blamed === 'string') || blamed === null) && ((model != null && model instanceof <any>Environment) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonNodeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonNodeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, "Expecting node value here");
            (<any>Object).setPrototypeOf(this, NonNodeException.prototype);
        } else throw new Error('invalid overload');
    }
}
NonNodeException["__class"] = "freemarker.core.NonNodeException";
NonNodeException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;

NonNodeException.EXPECTED_TYPES_$LI$();
