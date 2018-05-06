/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateException} from '../template/TemplateException';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * {link TemplateException}-s that don't fit into any category that warrant its own class. In fact, this was added
 * because the API of {link TemplateException} is too simple for the purposes of the core, but it can't be
 * extended without breaking backward compatibility and exposing internals.
 * @param {Expression} blamed
 * @param {Error} cause
 * @param {Environment} env
 * @param {Array} descriptionParts
 * @class
 * @extends TemplateException
 */
export class _MiscTemplateException extends TemplateException {
    public constructor(blamed? : any, cause? : any, env? : any, ...descriptionParts : any[]) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env,'freemarker.core.Environment')) || env === null) && ((descriptionParts != null && descriptionParts instanceof <any>Array && (descriptionParts.length==0 || descriptionParts[0] == null ||(descriptionParts[0] != null))) || descriptionParts === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(cause, env, blamed, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))).blame(blamed));
            (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env,'freemarker.core.Environment')) || env === null) && ((typeof descriptionParts === 'string') || descriptionParts === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[3];
            super(cause, env, blamed, new _ErrorDescriptionBuilder(description).blame(blamed));
            (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause,'freemarker.core.Environment')) || cause === null) && ((typeof env === 'string') || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            let description : any = __args[2];
            super(description, cause, env);
            (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause,'freemarker.core.Environment')) || cause === null) && ((env != null && env instanceof <any>_ErrorDescriptionBuilder) || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            let description : any = __args[2];
            super(cause, env, null, description);
            (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause,'freemarker.core.Environment')) || cause === null) && ((env != null && env instanceof <any>Array && (env.length==0 || env[0] == null ||(env[0] != null))) || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            let descriptionParts : any[] = __args[2];
            super(cause, env, null, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))));
            (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((ClassUtil.isInstanceOf(cause,'freemarker.core.Environment')) || cause === null) && ((env != null && env instanceof <any>Array && (env.length==0 || env[0] == null ||(env[0] != null))) || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[1];
            let descriptionParts : any[] = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super(cause, env, blamed, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))).blame(blamed));
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
            }
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((ClassUtil.isInstanceOf(cause,'freemarker.core.Environment')) || cause === null) && ((typeof env === 'string') || env === null) && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[1];
            let description : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super(cause, env, blamed, new _ErrorDescriptionBuilder(description).blame(blamed));
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
            }
        } else if(((ClassUtil.isInstanceOf(blamed,'freemarker.core.Environment')) || blamed === null) && ((typeof cause === 'string') || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(description, env);
            (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((typeof cause === 'string') || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let description : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                super(description, cause, env);
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
            }
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((ClassUtil.isInstanceOf(cause,'freemarker.core.Environment')) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let description : any = <string>null;
                super(description, cause, env);
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
            }
        } else if(((ClassUtil.isInstanceOf(blamed,'freemarker.core.Environment')) || blamed === null) && ((cause != null && cause instanceof <any>_ErrorDescriptionBuilder) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super(cause, env, null, description);
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
            }
        } else if(((ClassUtil.isInstanceOf(blamed,'freemarker.core.Environment')) || blamed === null) && ((cause != null && cause instanceof <any>Array && (cause.length==0 || cause[0] == null ||(cause[0] != null))) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let descriptionParts : any[] = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = <Error>null;
                super(cause, env, null, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))));
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
            }
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && ((cause != null && cause instanceof <any>Array && (cause.length==0 || cause[0] == null ||(cause[0] != null))) || cause === null) && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let descriptionParts : any[] = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                super(cause, env, null, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))));
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
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
                    super(cause, env, blamed, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))).blame(blamed));
                    (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
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
                    super(cause, env, blamed, new _ErrorDescriptionBuilder(description).blame(blamed));
                    (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
                }
            }
        } else if(((typeof blamed === 'string') || blamed === null) && cause === undefined && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            super(description, null);
            (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
        } else if(((blamed != null && (blamed["__classes"] && blamed["__classes"].indexOf("java.lang.Throwable") >= 0) || blamed != null && blamed instanceof <any>Error) || blamed === null) && cause === undefined && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                let description : any = <string>null;
                super(description, cause, env);
                (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
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
                    super(cause, env, null, description);
                    (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
                }
            }
        } else if(((blamed != null && blamed instanceof <any>Array && (blamed.length==0 || blamed[0] == null ||(blamed[0] != null))) || blamed === null) && cause === undefined && env === undefined && descriptionParts === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let descriptionParts : any[] = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let env : any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause : any = <Error>null;
                    super(cause, env, null, <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>descriptionParts))));
                    (<any>Object).setPrototypeOf(this, _MiscTemplateException.prototype);
                }
            }
        } else throw new Error('invalid overload');
    }
}
_MiscTemplateException["__class"] = "freemarker.core._MiscTemplateException";
_MiscTemplateException["__interfaces"] = ["java.io.Serializable"];





