/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleNumber} from '../../template/SimpleNumber';
import {TemplateMethodModelEx} from '../../template/TemplateMethodModelEx';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelException} from '../../template/TemplateModelException';
import {TemplateSequenceModel} from '../../template/TemplateSequenceModel';
import {OverloadedMethods} from './OverloadedMethods';
import {BeansWrapper} from './BeansWrapper';
import {MemberAndArguments} from './MemberAndArguments';
import {_MethodUtil} from './_MethodUtil';

/**
 * Wraps a set of same-name overloaded methods behind {link freemarker.template.TemplateMethodModel} interface,
 * like if it was a single method, chooses among them behind the scenes on call-time based on the argument values.
 * @class
 */
export class OverloadedMethodsModel implements TemplateMethodModelEx, TemplateSequenceModel {
    /*private*/ object : any;

    /*private*/ overloadedMethods : OverloadedMethods;

    /*private*/ wrapper : BeansWrapper;

    constructor(object : any, overloadedMethods : OverloadedMethods, wrapper : BeansWrapper) {
        if(this.object===undefined) this.object = null;
        if(this.overloadedMethods===undefined) this.overloadedMethods = null;
        if(this.wrapper===undefined) this.wrapper = null;
        this.object = object;
        this.overloadedMethods = overloadedMethods;
        this.wrapper = wrapper;
    }

    /**
     * Invokes the method, passing it the arguments from the list. The actual
     * method to call from several overloaded methods will be chosen based
     * on the classes of the arguments.
     * 
     * @throws TemplateModelException if the method cannot be chosen
     * unambiguously.
     * @param {List} arguments
     * @return {Object}
     */
    public exec(__arguments : Array<any>) : any {
        let maa : MemberAndArguments = this.overloadedMethods.getMemberAndArguments(__arguments, this.wrapper);
        try {
            return maa.invokeMethod(this.wrapper, this.object);
        } catch(e) {
            if(e != null && e instanceof <any>TemplateModelException) throw <TemplateModelException>e;
            throw _MethodUtil.newInvocationTemplateModelException$java_lang_Object$freemarker_ext_beans_CallableMemberDescriptor$java_lang_Throwable(this.object, maa.getCallableMemberDescriptor(), e);
        }
    }

    public get(s? : any) : any {
        if(((typeof s === 'number') || s === null)) {
            return <any>this.get$int(s);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        return <TemplateModel><any>this.exec(/* singletonList */[new SimpleNumber(index)]);
    }

    public size() : number {
        throw new TemplateModelException("?size is unsupported for " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor)));
    }
}
OverloadedMethodsModel["__class"] = "freemarker.ext.beans.OverloadedMethodsModel";
OverloadedMethodsModel["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];





