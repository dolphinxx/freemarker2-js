/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {Environment} from './Environment';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * Indicates that a {link TemplateScalarModel} value was expected (or maybe something that can be automatically coerced
 * to that), but the value had a different type.
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonStringException extends UnexpectedTypeException {
    static STRING_COERCABLE_TYPES_DESC : string = "string or something automatically convertible to string (number, date or boolean)";

    static STRING_COERCABLE_TYPES : Array<any>; public static STRING_COERCABLE_TYPES_$LI$() : Array<any> { if(NonStringException.STRING_COERCABLE_TYPES == null) NonStringException.STRING_COERCABLE_TYPES = ["freemarker.template.TemplateScalarModel", "freemarker.template.TemplateNumberModel", "freemarker.template.TemplateDateModel", "freemarker.template.TemplateBooleanModel"]; return NonStringException.STRING_COERCABLE_TYPES; };

    static DEFAULT_DESCRIPTION : string; public static DEFAULT_DESCRIPTION_$LI$() : string { if(NonStringException.DEFAULT_DESCRIPTION == null) NonStringException.DEFAULT_DESCRIPTION = "Expecting " + NonStringException.STRING_COERCABLE_TYPES_DESC + " value here"; return NonStringException.DEFAULT_DESCRIPTION; };

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof tip === 'string') || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(blamed, model, NonStringException.STRING_COERCABLE_TYPES_DESC, NonStringException.STRING_COERCABLE_TYPES_$LI$(), tip, env);
            (<any>Object).setPrototypeOf(this, NonStringException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(typeof tip[0] === 'string'))) || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, NonStringException.STRING_COERCABLE_TYPES_DESC, NonStringException.STRING_COERCABLE_TYPES_$LI$(), tips, env);
            (<any>Object).setPrototypeOf(this, NonStringException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((ClassUtil.isInstanceOf(tip, 'freemarker.core.Environment')) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            super(blamed, model, NonStringException.STRING_COERCABLE_TYPES_DESC, NonStringException.STRING_COERCABLE_TYPES_$LI$(), env);
            (<any>Object).setPrototypeOf(this, NonStringException.prototype);
        } else if(((typeof blamed === 'string') || blamed === null) && ((ClassUtil.isInstanceOf(model, 'freemarker.core.Environment')) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonStringException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonStringException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, NonStringException.DEFAULT_DESCRIPTION_$LI$());
            (<any>Object).setPrototypeOf(this, NonStringException.prototype);
        } else throw new Error('invalid overload');
    }
}
NonStringException["__class"] = "freemarker.core.NonStringException";
NonStringException["__interfaces"] = ["java.io.Serializable"];






NonStringException.DEFAULT_DESCRIPTION_$LI$();

NonStringException.STRING_COERCABLE_TYPES_$LI$();
