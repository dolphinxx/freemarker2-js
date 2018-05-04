/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Template } from '../template/Template';
import { TemplateException } from '../template/TemplateException';
import { ClassUtil } from '../template/utility/ClassUtil';
import { Execute } from '../template/utility/Execute';
import { ObjectConstructor } from '../template/utility/ObjectConstructor';
import { Environment } from './Environment';
import { _MiscTemplateException } from './_MiscTemplateException';
import { _MessageUtil } from './_MessageUtil';

/**
 * Used by built-ins and other template language features that get a class
 * based on a string. This can be handy both for implementing security
 * restrictions and for working around local class-loader issues.
 * <p>
 * The implementation should be thread-safe, unless an
 * instance is always only used in a single {link Environment} object.
 * <p>
 * see Configurable#setNewBuiltinClassResolver(TemplateClassResolver)
 * 
 * @since 2.3.17
 * @class
 */
export interface TemplateClassResolver {
    /**
     * Gets a {link Class} based on the class name.
     * 
     * @param {String} className the full-qualified class name
     * @param {Environment} env       the environment in which the template executes
     * @param {Template} template  the template where the operation that require the
     * class resolution resides in. This is <code>null</code> if the
     * call doesn't come from a template.
     * @throws TemplateException if the class can't be found or shouldn't be
     * accessed from a template for security reasons.
     * @return {*}
     */
    resolve(className : string, env : Environment, template : Template) : any;
}

export namespace TemplateClassResolver {

    /**
     * Simply calls {link ClassUtil#forName(String)}.
     */
    export let UNRESTRICTED_RESOLVER : TemplateClassResolver = new TemplateClassResolver.TemplateClassResolver$0();

    /**
     * Same as {link #UNRESTRICTED_RESOLVER}, except that it doesn't allow
     * resolving {link ObjectConstructor} and {link Execute} and {@code freemarker.template.utility.JythonRuntime}.
     */
    export let SAFER_RESOLVER : TemplateClassResolver = new TemplateClassResolver.TemplateClassResolver$1();

    /**
     * Doesn't allow resolving any classes.
     */
    export let ALLOWS_NOTHING_RESOLVER : TemplateClassResolver = new TemplateClassResolver.TemplateClassResolver$2();
}


export namespace TemplateClassResolver {

    export class TemplateClassResolver$0 implements TemplateClassResolver {
        public resolve(className : string, env : Environment, template : Template) : any {
            try {
                return ClassUtil.forName(className);
            } catch(e) {
                throw new _MiscTemplateException(e, env);
            };
        }

        constructor() {
        }
    }
    TemplateClassResolver$0["__interfaces"] = ["freemarker.core.TemplateClassResolver"];



    export class TemplateClassResolver$1 implements TemplateClassResolver {
        public resolve(className : string, env : Environment, template : Template) : any {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(className,/* getName */(c => c["__class"]?c["__class"]:c["name"])(ObjectConstructor))) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(className,/* getName */(c => c["__class"]?c["__class"]:c["name"])(Execute))) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(className,"freemarker.template.utility.JythonRuntime"))) {
                throw _MessageUtil.newInstantiatingClassNotAllowedException(className, env);
            }
            try {
                return ClassUtil.forName(className);
            } catch(e) {
                throw new _MiscTemplateException(e, env);
            };
        }

        constructor() {
        }
    }
    TemplateClassResolver$1["__interfaces"] = ["freemarker.core.TemplateClassResolver"];



    export class TemplateClassResolver$2 implements TemplateClassResolver {
        public resolve(className : string, env : Environment, template : Template) : any {
            throw _MessageUtil.newInstantiatingClassNotAllowedException(className, env);
        }

        constructor() {
        }
    }
    TemplateClassResolver$2["__interfaces"] = ["freemarker.core.TemplateClassResolver"];


}



var __Function = Function;
