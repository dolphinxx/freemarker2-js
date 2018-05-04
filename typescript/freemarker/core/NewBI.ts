/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BeanModel } from '../ext/beans/BeanModel';
import { BeansWrapper } from '../ext/beans/BeansWrapper';
import { ObjectWrapper } from '../template/ObjectWrapper';
import { Template } from '../template/Template';
import { TemplateException } from '../template/TemplateException';
import { TemplateMethodModelEx } from '../template/TemplateMethodModelEx';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { TemplateClassResolver } from './TemplateClassResolver';
import { _MiscTemplateException } from './_MiscTemplateException';

/**
 * A built-in that allows us to instantiate an instance of a java class.
 * Usage is something like: <tt>&lt;#assign foobar = "foo.bar.MyClass"?new()></tt>;
 * @extends BuiltIn
 * @class
 */
export class NewBI extends BuiltIn {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!NewBI.__static_initialized) { NewBI.__static_initialized = true; NewBI.__static_initializer_0(); } }

    static JYTHON_MODEL_CLASS : any; public static JYTHON_MODEL_CLASS_$LI$() : any { NewBI.__static_initialize(); return NewBI.JYTHON_MODEL_CLASS; };

    static __static_initializer_0() {
        try {
            NewBI.JYTHON_MODEL_CLASS = /* forName */eval("freemarker.ext.jython.JythonModel".split('.').slice(-1)[0]);
        } catch(e) {
            NewBI.JYTHON_MODEL_CLASS = null;
        };
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        return new NewBI.ConstructorFunction(this, this.target.evalAndCoerceToPlainText$freemarker_core_Environment(env), env, this.target.getTemplate());
    }

    constructor() {
        super();
    }
}
NewBI["__class"] = "freemarker.core.NewBI";
NewBI["__interfaces"] = ["java.lang.Cloneable"];



export namespace NewBI {

    export class ConstructorFunction implements TemplateMethodModelEx {
        public __parent: any;
        cl : any;

        env : Environment;

        public constructor(__parent: any, classname : string, env : Environment, template : Template) {
            this.__parent = __parent;
            if(this.cl===undefined) this.cl = null;
            if(this.env===undefined) this.env = null;
            this.env = env;
            this.cl = env.getNewBuiltinClassResolver().resolve(classname, env, template);
            if(!"freemarker.template.TemplateModel".isAssignableFrom(this.cl)) {
                throw new _MiscTemplateException(__parent, env, "Class ", /* getName */(c => c["__class"]?c["__class"]:c["name"])(this.cl), " does not implement freemarker.template.TemplateModel");
            }
            if(BeanModel.isAssignableFrom(this.cl)) {
                throw new _MiscTemplateException(__parent, env, "Bean Models cannot be instantiated using the ?", __parent.key, " built-in");
            }
            if(NewBI.JYTHON_MODEL_CLASS_$LI$() != null && NewBI.JYTHON_MODEL_CLASS_$LI$().isAssignableFrom(this.cl)) {
                throw new _MiscTemplateException(__parent, env, "Jython Models cannot be instantiated using the ?", __parent.key, " built-in");
            }
        }

        public exec(__arguments : Array<any>) : any {
            let ow : ObjectWrapper = this.env.getObjectWrapper();
            let bw : BeansWrapper = (ow != null && ow instanceof <any>BeansWrapper)?<BeansWrapper><any>ow:BeansWrapper.getDefaultInstance();
            return bw.newInstance(this.cl, __arguments);
        }
    }
    ConstructorFunction["__class"] = "freemarker.core.NewBI.ConstructorFunction";
    ConstructorFunction["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


}



var __Function = Function;

NewBI.JYTHON_MODEL_CLASS_$LI$();

NewBI.__static_initialize();
