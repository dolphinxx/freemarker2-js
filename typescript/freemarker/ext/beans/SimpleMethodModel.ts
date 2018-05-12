/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_DelayedFTLTypeDescription} from '../../core/_DelayedFTLTypeDescription';
import {_DelayedToString} from '../../core/_DelayedToString';
import {_ErrorDescriptionBuilder} from '../../core/_ErrorDescriptionBuilder';
import {_TemplateModelException} from '../../core/_TemplateModelException';
import {_UnexpectedTypeErrorExplainerTemplateModel} from '../../core/_UnexpectedTypeErrorExplainerTemplateModel';
import {SimpleNumber} from '../../template/SimpleNumber';
import {TemplateMethodModelEx} from '../../template/TemplateMethodModelEx';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelException} from '../../template/TemplateModelException';
import {TemplateSequenceModel} from '../../template/TemplateSequenceModel';
import {SimpleMethod} from './SimpleMethod';
import {BeansWrapper} from './BeansWrapper';
import {_MethodUtil} from './_MethodUtil';
import {Character} from '../../../java/lang/Character';

/**
 * A class that will wrap a reflected method call into a
 * {link freemarker.template.TemplateMethodModel} interface.
 * It is used by {link BeanModel} to wrap reflected method calls
 * for non-overloaded methods.
 * @extends SimpleMethod
 * @class
 */
export class SimpleMethodModel extends SimpleMethod implements TemplateMethodModelEx, TemplateSequenceModel, _UnexpectedTypeErrorExplainerTemplateModel {
    /*private*/ object : any;

    /*private*/ wrapper : BeansWrapper;

    constructor(object : any, method : Function, argTypes : Array<any>, wrapper : BeansWrapper) {
        super(method, argTypes);
        if(this.object===undefined) this.object = null;
        if(this.wrapper===undefined) this.wrapper = null;
        this.object = object;
        this.wrapper = wrapper;
    }

    /**
     * Invokes the method, passing it the arguments from the list.
     * @param {List} arguments
     * @return {Object}
     */
    public exec(__arguments : Array<any>) : any {
        try {
            return this.wrapper.invokeMethod(this.object, <Function><any>this.getMember(), this.unwrapArguments$java_util_List$freemarker_ext_beans_BeansWrapper(__arguments, this.wrapper));
        } catch(__e) {
            if(__e != null && __e instanceof <any>TemplateModelException) {
                let e : TemplateModelException = <TemplateModelException>__e;
                throw e;

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                let e : Error = <Error>__e;
                throw _MethodUtil.newInvocationTemplateModelException$java_lang_Object$java_lang_reflect_Member$java_lang_Throwable(this.object, this.getMember(), e);

            }
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
        throw new _TemplateModelException(new _ErrorDescriptionBuilder(["Getting the number of items or listing the items is not supported on this ", new _DelayedFTLTypeDescription(this), " value, because this value wraps the following Java method, not a real listable value: ", new _DelayedToString(this.getMember())]).tips("Maybe you should to call this method first and then do something with its return value.", "obj.someMethod(i) and obj.someMethod[i] does the same for this method, hence it\'s a \"+sequence\"."));
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return this.getMember().toString();
    }

    /**
     * Implementation of experimental interface; don't use it, no backward compatibility guarantee!
     * @param {Array} expectedClasses
     * @return {Array}
     */
    public explainTypeError(expectedClasses : Array<any>) : Array<any> {
        let member : Member = this.getMember();
        if(!(member != null && (member instanceof Function))) {
            return null;
        }
        let m : Function = <Function><any>member;
        let returnType : any = m.getReturnType();
        if(returnType == null || returnType === /*void*/undefined || returnType === "java.lang.Void") {
            return null;
        }
        let mName : string = /* getName */m.name;
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(mName, "get") && mName.length > 3 && Character.isUpperCase(mName.charAt(3)) && (m.getParameterTypes().length === 0)) {
            return ["Maybe using obj.something instead of obj.getSomething will yield the desired value."];
        } else if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(mName, "is") && mName.length > 2 && Character.isUpperCase(mName.charAt(2)) && (m.getParameterTypes().length === 0)) {
            return ["Maybe using obj.something instead of obj.isSomething will yield the desired value."];
        } else {
            return ["Maybe using obj.something(", (m.getParameterTypes().length !== 0?"params":""), ") instead of obj.something will yield the desired value"];
        }
    }
}
SimpleMethodModel["__class"] = "freemarker.ext.beans.SimpleMethodModel";
SimpleMethodModel["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateMethodModelEx","freemarker.core._UnexpectedTypeErrorExplainerTemplateModel","freemarker.template.TemplateModel"];





