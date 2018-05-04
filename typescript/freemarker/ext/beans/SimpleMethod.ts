/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateMarkupOutputModel } from '../../core/TemplateMarkupOutputModel';
import { _DelayedFTLTypeDescription } from '../../core/_DelayedFTLTypeDescription';
import { _DelayedOrdinal } from '../../core/_DelayedOrdinal';
import { _ErrorDescriptionBuilder } from '../../core/_ErrorDescriptionBuilder';
import { _TemplateModelException } from '../../core/_TemplateModelException';
import { ObjectWrapperAndUnwrapper } from '../../template/ObjectWrapperAndUnwrapper';
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelException } from '../../template/TemplateModelException';
import { ClassUtil } from '../../template/utility/ClassUtil';
import { BeansWrapper } from './BeansWrapper';
import { _MethodUtil } from './_MethodUtil';

/**
 * This class is used for as a base for non-overloaded method models and for constructors.
 * (For overloaded methods and constructors see {link OverloadedMethods}.)
 * @class
 */
export class SimpleMethod {
    static MARKUP_OUTPUT_TO_STRING_TIP : string = "A markup output value can be converted to markup string like value?markup_string. But consider if the Java method whose argument it will be can handle markup strings properly.";

    /*private*/ member : Member;

    /*private*/ argTypes : Array<any>;

    constructor(member : Member, argTypes : Array) {
        if(this.member===undefined) this.member = null;
        if(this.argTypes===undefined) this.argTypes = null;
        this.member = member;
        this.argTypes = argTypes;
    }

    unwrapArguments$java_util_List$freemarker_ext_beans_BeansWrapper(__arguments : Array<any>, wrapper : BeansWrapper) : Array {
        if(__arguments == null) {
            __arguments = Collections.EMPTY_LIST;
        }
        let isVarArg : boolean = _MethodUtil.isVarargs(this.member);
        let typesLen : number = this.argTypes.length;
        if(isVarArg) {
            if(typesLen - 1 > /* size */(<number>__arguments.length)) {
                throw new _TemplateModelException(_MethodUtil.invocationErrorMessageStart$java_lang_reflect_Member(this.member), " takes at least ", typesLen - 1, typesLen - 1 === 1?" argument":" arguments", ", but ", /* size */(<number>__arguments.length), " was given.");
            }
        } else if(typesLen !== /* size */(<number>__arguments.length)) {
            throw new _TemplateModelException(_MethodUtil.invocationErrorMessageStart$java_lang_reflect_Member(this.member), " takes ", typesLen, typesLen === 1?" argument":" arguments", ", but ", /* size */(<number>__arguments.length), " was given.");
        }
        let args : Array<any> = this.unwrapArguments$java_util_List$java_lang_Class_A$boolean$freemarker_ext_beans_BeansWrapper(__arguments, this.argTypes, isVarArg, wrapper);
        return args;
    }

    public unwrapArguments$java_util_List$java_lang_Class_A$boolean$freemarker_ext_beans_BeansWrapper(args : Array<any>, argTypes : Array, isVarargs : boolean, w : BeansWrapper) : Array {
        if(args == null) return null;
        let typesLen : number = argTypes.length;
        let argsLen : number = /* size */(<number>args.length);
        let unwrappedArgs : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(typesLen);
        let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(args);
        let normalArgCnt : number = isVarargs?typesLen - 1:typesLen;
        let argIdx : number = 0;
        while((argIdx < normalArgCnt)) {
            let argType : any = argTypes[argIdx];
            let argVal : TemplateModel = <TemplateModel><any>it.next();
            let unwrappedArgVal : any = w.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(argVal, argType);
            if(unwrappedArgVal === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
                throw this.createArgumentTypeMismarchException(argIdx, argVal, argType);
            }
            if(unwrappedArgVal == null && /* isPrimitive */(argType === <any>'__erasedPrimitiveType__')) {
                throw this.createNullToPrimitiveArgumentException(argIdx, argType);
            }
            unwrappedArgs[argIdx++] = unwrappedArgVal;
        };
        if(isVarargs) {
            let varargType : any = argTypes[typesLen - 1];
            let varargItemType : any = varargType.getComponentType();
            if(!it.hasNext()) {
                unwrappedArgs[argIdx++] = /* newInstance */new Array<any>(0);
            } else {
                let argVal : TemplateModel = <TemplateModel><any>it.next();
                let unwrappedArgVal : any;
                if(argsLen - argIdx === 1 && (unwrappedArgVal = w.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(argVal, varargType)) !== ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
                    unwrappedArgs[argIdx++] = unwrappedArgVal;
                } else {
                    let varargArrayLen : number = argsLen - argIdx;
                    let varargArray : any = /* newInstance */new Array<any>(varargArrayLen);
                    for(let varargIdx : number = 0; varargIdx < varargArrayLen; varargIdx++) {
                        let varargVal : TemplateModel = <TemplateModel><any>(varargIdx === 0?argVal:it.next());
                        let unwrappedVarargVal : any = w.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(varargVal, varargItemType);
                        if(unwrappedVarargVal === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
                            throw this.createArgumentTypeMismarchException(argIdx + varargIdx, varargVal, varargItemType);
                        }
                        if(unwrappedVarargVal == null && /* isPrimitive */(varargItemType === <any>'__erasedPrimitiveType__')) {
                            throw this.createNullToPrimitiveArgumentException(argIdx + varargIdx, varargItemType);
                        }
                        /* set */(varargArray[varargIdx]=varargIdx);
                    };
                    unwrappedArgs[argIdx++] = varargArray<any>;
                }
            }
        }
        return unwrappedArgs;
    }

    public unwrapArguments(args? : any, argTypes? : any, isVarargs? : any, w? : any) : any {
        if(((args != null && (args instanceof Array)) || args === null) && ((argTypes != null && argTypes instanceof <any>Array && (argTypes.length==0 || argTypes[0] == null ||(argTypes[0] != null))) || argTypes === null) && ((typeof isVarargs === 'boolean') || isVarargs === null) && ((w != null && w instanceof <any>BeansWrapper) || w === null)) {
            return <any>this.unwrapArguments$java_util_List$java_lang_Class_A$boolean$freemarker_ext_beans_BeansWrapper(args, argTypes, isVarargs, w);
        } else if(((args != null && (args instanceof Array)) || args === null) && ((argTypes != null && argTypes instanceof <any>BeansWrapper) || argTypes === null) && isVarargs === undefined && w === undefined) {
            return <any>this.unwrapArguments$java_util_List$freemarker_ext_beans_BeansWrapper(args, argTypes);
        } else throw new Error('invalid overload');
    }

    /*private*/ createArgumentTypeMismarchException(argIdx : number, argVal : TemplateModel, targetType : any) : TemplateModelException {
        let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(_MethodUtil.invocationErrorMessageStart$java_lang_reflect_Member(this.member), " couldn\'t be called: Can\'t convert the ", new _DelayedOrdinal(argIdx + 1), " argument\'s value to the target Java type, ", ClassUtil.getShortClassName(targetType), ". The type of the actual value was: ", new _DelayedFTLTypeDescription(argVal));
        if((argVal != null && (argVal["__interfaces"] != null && argVal["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0 || argVal.constructor != null && argVal.constructor["__interfaces"] != null && argVal.constructor["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0)) && (targetType.isAssignableFrom(String))) {
            desc.tip$java_lang_String(SimpleMethod.MARKUP_OUTPUT_TO_STRING_TIP);
        }
        return new _TemplateModelException(desc);
    }

    /*private*/ createNullToPrimitiveArgumentException(argIdx : number, targetType : any) : TemplateModelException {
        return new _TemplateModelException(_MethodUtil.invocationErrorMessageStart$java_lang_reflect_Member(this.member), " couldn\'t be called: The value of the ", new _DelayedOrdinal(argIdx + 1), " argument was null, but the target Java parameter type (", ClassUtil.getShortClassName(targetType), ") is primitive and so can\'t store null.");
    }

    getMember() : Member {
        return this.member;
    }
}
SimpleMethod["__class"] = "freemarker.ext.beans.SimpleMethod";



var __Function = Function;
