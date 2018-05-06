/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CollectionUtils} from '../template/utility/CollectionUtils';
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {Environment} from './Environment';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';

/**
 * Indicates that a {link TemplateSequenceModel} value was expected, but the value had a different type.
 * 
 * @since 2.3.21
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonSequenceException extends UnexpectedTypeException {
    static EXPECTED_TYPES : Array<any>; public static EXPECTED_TYPES_$LI$() : Array<any> { if(NonSequenceException.EXPECTED_TYPES == null) NonSequenceException.EXPECTED_TYPES = ["freemarker.template.TemplateSequenceModel"]; return NonSequenceException.EXPECTED_TYPES; };

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof tip === 'string') || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let tips : any = [tip];
                super(blamed, model, "sequence", NonSequenceException.EXPECTED_TYPES_$LI$(), tips, env);
                (<any>Object).setPrototypeOf(this, NonSequenceException.prototype);
            }
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(tip[0] != null))) || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, "sequence", NonSequenceException.EXPECTED_TYPES_$LI$(), tips, env);
            (<any>Object).setPrototypeOf(this, NonSequenceException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((ClassUtil.isInstanceOf(tip, 'freemarker.core.Environment')) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let tips : any = CollectionUtils.EMPTY_OBJECT_ARRAY_$LI$();
                super(blamed, model, "sequence", NonSequenceException.EXPECTED_TYPES_$LI$(), tips, env);
                (<any>Object).setPrototypeOf(this, NonSequenceException.prototype);
            }
        } else if(((typeof blamed === 'string') || blamed === null) && ((ClassUtil.isInstanceOf(model, 'freemarker.core.Environment')) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonSequenceException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonSequenceException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, "Expecting sequence value here");
            (<any>Object).setPrototypeOf(this, NonSequenceException.prototype);
        } else throw new Error('invalid overload');
    }
}
NonSequenceException["__class"] = "freemarker.core.NonSequenceException";
NonSequenceException["__interfaces"] = ["java.io.Serializable"];






NonSequenceException.EXPECTED_TYPES_$LI$();
