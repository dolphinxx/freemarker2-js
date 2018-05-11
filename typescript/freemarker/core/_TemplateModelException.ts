/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelException} from '../template/TemplateModelException';
import {ClassUtil} from '../template/utility/ClassUtil';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';

export class _TemplateModelException extends TemplateModelException {
    public constructor(blamed? : any, cause? : any, env? : any, ...descriptionParts : any[]) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((descriptionParts != null && descriptionParts instanceof <any>Array && (descriptionParts.length==0 || descriptionParts[0] == null ||(descriptionParts[0] != null))) || descriptionParts === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(cause, env, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))).blame(blamed), true);
            (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((typeof descriptionParts === 'string') || descriptionParts === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[3];
            super(cause, env, new _ErrorDescriptionBuilder(description).blame(blamed), true);
            (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && ((typeof env === 'string') || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            let description : any = __args[2];
            super(cause, env, description, true);
            (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && ((env != null && env instanceof <any>_ErrorDescriptionBuilder) || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            let description : any = __args[2];
            super(cause, env, description, true);
            (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && ((env != null && env instanceof <any>Array && (env.length==0 || env[0] == null ||(env[0] != null))) || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            let descriptionParts : any[] = __args[2];
            super(cause, env, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))), true);
            (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && ((env != null && env instanceof <any>Array && (env.length==0 || env[0] == null ||(env[0] != null))) || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[1];
            let descriptionParts : any[] = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super(cause, env, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))).blame(blamed), true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && ((typeof env === 'string') || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[1];
            let description : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super(cause, env, new _ErrorDescriptionBuilder(description).blame(blamed), true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((typeof cause === 'string') || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let description : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                super(cause, env, description, true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((typeof cause === 'string') || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = <Error>null;
                super(cause, env, description, true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let description : any = <string>null;
                super(cause, env, description, true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((cause != null && cause instanceof <any>_ErrorDescriptionBuilder) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super(cause, env, description, true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((cause != null && cause instanceof <any>Array && (cause.length==0 || cause[0] == null ||(cause[0] != null))) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let descriptionParts : any[] = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = <Error>null;
                super(cause, env, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))), true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((cause != null && cause instanceof <any>Array && (cause.length==0 || cause[0] == null ||(cause[0] != null))) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let descriptionParts : any[] = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                super(cause, env, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))), true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((cause != null && cause instanceof <any>Array && (cause.length==0 || cause[0] == null ||(cause[0] != null))) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let descriptionParts : any[] = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause : any = null;
                    super(cause, env, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))).blame(blamed), true);
                    (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
                }
            }
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((typeof cause === 'string') || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause : any = null;
                    super(cause, env, new _ErrorDescriptionBuilder(description).blame(blamed), true);
                    (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
                }
            }
        } else if(((typeof blamed === 'string') || blamed === null) && cause === undefined && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            super(description);
            (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && cause === undefined && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                let description : any = <string>null;
                super(cause, env, description, true);
                (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
            }
        } else if(((blamed != null && blamed instanceof <any>_ErrorDescriptionBuilder) || blamed === null) && cause === undefined && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause : any = null;
                    super(cause, env, description, true);
                    (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
                }
            }
        } else if(((blamed != null && blamed instanceof <any>Array && (blamed.length==0 || blamed[0] == null ||(blamed[0] != null))) || blamed === null) && cause === undefined && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let descriptionParts : any[] = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = /*<Environment>*/null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause : any = <Error>null;
                    super(cause, env, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))), true);
                    (<any>Object).setPrototypeOf(this, _TemplateModelException.prototype);
                }
            }
        } else throw new Error('invalid overload');
    }

    static modelHasStoredNullDescription(expected : any, model : TemplateModel) : Array<any> {
        return ["The FreeMarker value exists, but has nothing inside it; the TemplateModel object (class: ", /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>model.constructor)), ") has returned a null", (expected != null?[" instead of a ", ClassUtil.getShortClassName(expected)]:""), ". This is possibly a bug in the non-FreeMarker code that builds the data-model."];
    }
}
_TemplateModelException["__class"] = "freemarker.core._TemplateModelException";
_TemplateModelException["__interfaces"] = ["java.io.Serializable"];





