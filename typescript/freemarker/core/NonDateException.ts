/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateModel } from '../template/TemplateModel';
import { UnexpectedTypeException } from './UnexpectedTypeException';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { InvalidReferenceException } from './InvalidReferenceException';

/**
 * Indicates that a {link TemplateDateModel} value was expected, but the value had a different type.
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonDateException extends UnexpectedTypeException {
    static EXPECTED_TYPES : Array<any>; public static EXPECTED_TYPES_$LI$() : Array { if(NonDateException.EXPECTED_TYPES == null) NonDateException.EXPECTED_TYPES = ["freemarker.template.TemplateDateModel"]; return NonDateException.EXPECTED_TYPES; };

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof tip === 'string') || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(blamed, model, "date/time", NonDateException.EXPECTED_TYPES_$LI$(), tip, env);
            (<any>Object).setPrototypeOf(this, NonDateException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(typeof tip[0] === 'string'))) || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, "date/time", NonDateException.EXPECTED_TYPES_$LI$(), tips, env);
            (<any>Object).setPrototypeOf(this, NonDateException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Environment) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            super(blamed, model, "date/time", NonDateException.EXPECTED_TYPES_$LI$(), env);
            (<any>Object).setPrototypeOf(this, NonDateException.prototype);
        } else if(((typeof blamed === 'string') || blamed === null) && ((model != null && model instanceof <any>Environment) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonDateException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, "Expecting date/time value here");
            (<any>Object).setPrototypeOf(this, NonDateException.prototype);
        } else throw new Error('invalid overload');
    }
}
NonDateException["__class"] = "freemarker.core.NonDateException";
NonDateException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;

NonDateException.EXPECTED_TYPES_$LI$();
