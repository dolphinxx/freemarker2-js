/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../template/Configuration';
import {Template} from '../template/Template';
import {Environment} from './Environment';
import {Configurable} from './Configurable';
import {TemplateConfiguration} from './TemplateConfiguration';
import {BugException} from './BugException';

/**
 * Creates a new custom attribute with the specified scope
 * 
 * @param {number} scope one of <tt>SCOPE_</tt> constants.
 * @class
 */
export class CustomAttribute {
    /**
     * Constant used in the constructor specifying that this attribute is {link Environment}-scoped.
     */
    public static SCOPE_ENVIRONMENT : number = 0;

    /**
     * Constant used in the constructor specifying that this attribute is {link Template}-scoped.
     */
    public static SCOPE_TEMPLATE : number = 1;

    /**
     * Constant used in the constructor specifying that this attribute is {link Configuration}-scoped.
     */
    public static SCOPE_CONFIGURATION : number = 2;

    /*private*/ key : any = <any>new Object();

    /*private*/ scope : number;

    public constructor(scope : number) {
        if(this.scope===undefined) this.scope = 0;
        if(scope !== CustomAttribute.SCOPE_ENVIRONMENT && scope !== CustomAttribute.SCOPE_TEMPLATE && scope !== CustomAttribute.SCOPE_CONFIGURATION) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.scope = scope;
    }

    /**
     * This method is invoked when {link #get()} is invoked without
     * {link #set(Object)} being invoked before it to define the value in the
     * current scope. Override it to create the attribute value on-demand.
     * 
     * @return {Object} the initial value for the custom attribute. By default returns null.
     */
    create() : any {
        return null;
    }

    public get$freemarker_core_Environment(env : /*Environment*/any) : any {
        return this.getScopeConfigurable(env).getCustomAttribute$java_lang_Object$freemarker_core_CustomAttribute(this.key, this);
    }

    /**
     * Gets the attribute from the appropriate scope that's accessible through the specified {link Environment}. If
     * the attribute has {link #SCOPE_ENVIRONMENT} scope, it will be get from the given {link Environment} directly.
     * If the attribute has {link #SCOPE_TEMPLATE} scope, it will be get from the parent of the given
     * {link Environment} (that is, in {link Environment#getParent()}) directly). If the attribute has
     * {link #SCOPE_CONFIGURATION} scope, it will be get from {link Environment#getConfiguration()}.
     * 
     * @return {Object} The new value of the attribute (possibly {@code null}), or {@code null} if the attribute doesn't exist.
     * @throws NullPointerException If {@code env} is null
     * @since 2.3.22
     * @param {Environment} env
     */
    public get(env? : any) : any {
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            return <any>this.get$freemarker_core_Environment(env);
        } else if(((env != null && env instanceof <any>Template) || env === null)) {
            return <any>this.get$freemarker_template_Template(env);
        } else if(((env != null && env instanceof <any>TemplateConfiguration) || env === null)) {
            return <any>this.get$freemarker_core_TemplateConfiguration(env);
        } else if(((env != null && env instanceof <any>Configuration) || env === null)) {
            return <any>this.get$freemarker_template_Configuration(env);
        } else if(env === undefined) {
            return <any>this.get$();
        } else throw new Error('invalid overload');
    }

    public get$() : any {
        return this.getScopeConfigurable(this.getRequiredCurrentEnvironment()).getCustomAttribute$java_lang_Object$freemarker_core_CustomAttribute(this.key, this);
    }

    public get$freemarker_template_Template(template : Template) : any {
        if(this.scope !== CustomAttribute.SCOPE_TEMPLATE) {
            throw Object.defineProperty(new Error("This is not a template-scope attribute"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return (<Configurable>template).getCustomAttribute$java_lang_Object$freemarker_core_CustomAttribute(this.key, this);
    }

    public get$freemarker_core_TemplateConfiguration(templateConfiguration : TemplateConfiguration) : any {
        if(this.scope !== CustomAttribute.SCOPE_TEMPLATE) {
            throw Object.defineProperty(new Error("This is not a template-scope attribute"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return templateConfiguration.getCustomAttribute$java_lang_Object$freemarker_core_CustomAttribute(this.key, this);
    }

    public get$freemarker_template_Configuration(cfg : Configuration) : any {
        if(this.scope !== CustomAttribute.SCOPE_CONFIGURATION) {
            throw Object.defineProperty(new Error("This is not a template-scope attribute"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return (<Configurable>cfg).getCustomAttribute$java_lang_Object$freemarker_core_CustomAttribute(this.key, this);
    }

    public set$java_lang_Object$freemarker_core_Environment(value : any, env : /*Environment*/any) {
        this.getScopeConfigurable(env).setCustomAttribute$java_lang_Object$java_lang_Object(this.key, value);
    }

    /**
     * Sets the attribute inside the appropriate scope that's accessible through the specified {link Environment}. If
     * the attribute has {link #SCOPE_ENVIRONMENT} scope, it will be set in the given {link Environment} directly. If
     * the attribute has {link #SCOPE_TEMPLATE} scope, it will be set in the parent of the given {link Environment}
     * (that is, in {link Environment#getParent()}) directly). If the attribute has {link #SCOPE_CONFIGURATION} scope,
     * it will be set in {link Environment#getConfiguration()}.
     * 
     * @param {Object} value The new value of the attribute. Can be {@code null}.
     * @throws NullPointerException If {@code env} is null
     * @since 2.3.22
     * @param {Environment} env
     */
    public set(value? : any, env? : any) : any {
        if(((value != null) || value === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            return <any>this.set$java_lang_Object$freemarker_core_Environment(value, env);
        } else if(((value != null) || value === null) && ((env != null && env instanceof <any>Template) || env === null)) {
            return <any>this.set$java_lang_Object$freemarker_template_Template(value, env);
        } else if(((value != null) || value === null) && ((env != null && env instanceof <any>TemplateConfiguration) || env === null)) {
            return <any>this.set$java_lang_Object$freemarker_core_TemplateConfiguration(value, env);
        } else if(((value != null) || value === null) && ((env != null && env instanceof <any>Configuration) || env === null)) {
            return <any>this.set$java_lang_Object$freemarker_template_Configuration(value, env);
        } else if(((value != null) || value === null) && env === undefined) {
            return <any>this.set$java_lang_Object(value);
        } else throw new Error('invalid overload');
    }

    public set$java_lang_Object(value : any) {
        this.getScopeConfigurable(this.getRequiredCurrentEnvironment()).setCustomAttribute$java_lang_Object$java_lang_Object(this.key, value);
    }

    public set$java_lang_Object$freemarker_template_Template(value : any, template : Template) {
        if(this.scope !== CustomAttribute.SCOPE_TEMPLATE) {
            throw Object.defineProperty(new Error("This is not a template-scope attribute"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        (<Configurable>template).setCustomAttribute$java_lang_Object$java_lang_Object(this.key, value);
    }

    public set$java_lang_Object$freemarker_core_TemplateConfiguration(value : any, templateConfiguration : TemplateConfiguration) {
        if(this.scope !== CustomAttribute.SCOPE_TEMPLATE) {
            throw Object.defineProperty(new Error("This is not a template-scope attribute"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        templateConfiguration.setCustomAttribute$java_lang_Object$java_lang_Object(this.key, value);
    }

    public set$java_lang_Object$freemarker_template_Configuration(value : any, cfg : Configuration) {
        if(this.scope !== CustomAttribute.SCOPE_CONFIGURATION) {
            throw Object.defineProperty(new Error("This is not a configuration-scope attribute"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        (<Configurable>cfg).setCustomAttribute$java_lang_Object$java_lang_Object(this.key, value);
    }

    /*private*/ getRequiredCurrentEnvironment() : Environment {
        let c : Environment = Environment.getCurrentEnvironment();
        if(c == null) {
            throw Object.defineProperty(new Error("No current environment"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return c;
    }

    /*private*/ getScopeConfigurable(env : /*Environment*/any) : Configurable {
        switch((this.scope)) {
        case 0 /* SCOPE_ENVIRONMENT */:
            return env;
        case 1 /* SCOPE_TEMPLATE */:
            return env.getParent();
        case 2 /* SCOPE_CONFIGURATION */:
            return env.getParent().getParent();
        default:
            throw new BugException();
        }
    }
}
CustomAttribute["__class"] = "freemarker.core.CustomAttribute";



