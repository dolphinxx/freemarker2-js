/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * Indicates that a {link TemplateBooleanModel} value was expected, but the value had a different type.
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonBooleanException extends UnexpectedTypeException {
    static EXPECTED_TYPES : Array<any>; public static EXPECTED_TYPES_$LI$() : Array<any> { if(NonBooleanException.EXPECTED_TYPES == null) NonBooleanException.EXPECTED_TYPES = ["freemarker.template.TemplateBooleanModel"]; return NonBooleanException.EXPECTED_TYPES; };

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof tip === 'string') || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(blamed, model, "boolean", NonBooleanException.EXPECTED_TYPES_$LI$(), tip, env);
            (<any>Object).setPrototypeOf(this, NonBooleanException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(typeof tip[0] === 'string'))) || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, "boolean", NonBooleanException.EXPECTED_TYPES_$LI$(), tips, env);
            (<any>Object).setPrototypeOf(this, NonBooleanException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((ClassUtil.isInstanceOf(tip, 'freemarker.core.Environment')) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            super(blamed, model, "boolean", NonBooleanException.EXPECTED_TYPES_$LI$(), env);
            (<any>Object).setPrototypeOf(this, NonBooleanException.prototype);
        } else if(((typeof blamed === 'string') || blamed === null) && ((ClassUtil.isInstanceOf(model, 'freemarker.core.Environment')) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonBooleanException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonBooleanException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, "Expecting boolean value here");
            (<any>Object).setPrototypeOf(this, NonBooleanException.prototype);
        } else throw new Error('invalid overload');
    }
}
NonBooleanException["__class"] = "freemarker.core.NonBooleanException";
NonBooleanException["__interfaces"] = ["java.io.Serializable"];






NonBooleanException.EXPECTED_TYPES_$LI$();
