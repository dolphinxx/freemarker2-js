/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateDirectiveBody} from '../template/TemplateDirectiveBody';
import {TemplateException} from '../template/TemplateException';
import {StringUtil} from '../template/utility/StringUtil';
import {Environment} from './Environment';
import {TemplateElement} from './TemplateElement';
import {ThreadInterruptionSupportTemplatePostProcessor} from './ThreadInterruptionSupportTemplatePostProcessor';

/**
 * [2.4] Should become public somehow; this is more intelligent than a {@code null} check, for example, when the body
 * only contains a thread interruption check, it treats it as valid. Indicates that the directive shouldn't have
 * nested content, but it had. This will probably become public when the directive/method stuff was reworked.
 * @extends TemplateException
 * @class
 */
export class NestedContentNotSupportedException extends TemplateException {
    public static check(body : TemplateDirectiveBody) {
        if(body == null) {
            return;
        }
        if(ClassUtil.isInstanceOf(body, 'freemarker.core.Environment').NestedElementTemplateDirectiveBody) {
            let tes : TemplateElement[] = (<Environment.NestedElementTemplateDirectiveBody><any>body).getChildrenBuffer();
            if(tes == null || tes.length === 0 || (tes[0] != null && tes[0] instanceof <any>ThreadInterruptionSupportTemplatePostProcessor.ThreadInterruptionCheck) && (tes.length === 1 || tes[1] == null)) {
                return;
            }
        }
        throw new NestedContentNotSupportedException(Environment.getCurrentEnvironment());
    }

    public constructor(description? : any, cause? : any, env? : any) {
        if(((typeof description === 'string') || description === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Exception") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super("Nested content (body) not supported." + (description != null?" " + StringUtil.jQuote$java_lang_Object(description):""), cause, env);
            (<any>Object).setPrototypeOf(this, NestedContentNotSupportedException.prototype);
        } else if(((description != null && (description["__classes"] && description["__classes"].indexOf("java.lang.Exception") >= 0) || description != null && description instanceof <any>Error) || description === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause : any = __args[0];
            let env : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let description : any = null;
                super("Nested content (body) not supported." + (description != null?" " + StringUtil.jQuote$java_lang_Object(description):""), cause, env);
                (<any>Object).setPrototypeOf(this, NestedContentNotSupportedException.prototype);
            }
        } else if(((typeof description === 'string') || description === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.core.Environment')) || cause === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause : any = null;
                super("Nested content (body) not supported." + (description != null?" " + StringUtil.jQuote$java_lang_Object(description):""), cause, env);
                (<any>Object).setPrototypeOf(this, NestedContentNotSupportedException.prototype);
            }
        } else if(((ClassUtil.isInstanceOf(description, 'freemarker.core.Environment')) || description === null) && cause === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let description : any = null;
                let cause : any = null;
                super("Nested content (body) not supported." + (description != null?" " + StringUtil.jQuote$java_lang_Object(description):""), cause, env);
                (<any>Object).setPrototypeOf(this, NestedContentNotSupportedException.prototype);
            }
        } else throw new Error('invalid overload');
    }
}
NestedContentNotSupportedException["__class"] = "freemarker.core.NestedContentNotSupportedException";
NestedContentNotSupportedException["__interfaces"] = ["java.io.Serializable"];





