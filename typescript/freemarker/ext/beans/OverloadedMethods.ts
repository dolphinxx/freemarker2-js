/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_DelayedConversionToString} from '../../core/_DelayedConversionToString';
import {_ErrorDescriptionBuilder} from '../../core/_ErrorDescriptionBuilder';
import {_TemplateModelException} from '../../core/_TemplateModelException';
import {TemplateModel} from '../../template/TemplateModel';
import {ClassUtil} from '../../template/utility/ClassUtil';
import {OverloadedMethodsSubset} from './OverloadedMethodsSubset';
import {OverloadedFixArgsMethods} from './OverloadedFixArgsMethods';
import {ReflectionCallableMemberDescriptor} from './ReflectionCallableMemberDescriptor';
import {OverloadedVarArgsMethods} from './OverloadedVarArgsMethods';
import {MemberAndArguments} from './MemberAndArguments';
import {BeansWrapper} from './BeansWrapper';
import {MaybeEmptyMemberAndArguments} from './MaybeEmptyMemberAndArguments';
import {EmptyMemberAndArguments} from './EmptyMemberAndArguments';
import {StringBuilder} from '../../../java/lang/StringBuilder';
import {CallableMemberDescriptor} from './CallableMemberDescriptor';
import {SimpleMethodModel} from './SimpleMethodModel';

/**
 * Used instead of {link java.lang.reflect.Method} or {link java.lang.reflect.Constructor} for overloaded methods and
 * constructors.
 * 
 * <p>After the initialization with the {link #addMethod(Method)} and {link #addConstructor(Constructor)} calls are
 * done, the instance must be thread-safe. Before that, it's the responsibility of the caller of those methods to
 * ensure that the object is properly publishing to other threads.
 * @class
 */
export class OverloadedMethods {
    /*private*/ fixArgMethods : OverloadedMethodsSubset;

    /*private*/ varargMethods : OverloadedMethodsSubset;

    /*private*/ bugfixed : boolean;

    constructor(bugfixed : boolean) {
        if(this.fixArgMethods===undefined) this.fixArgMethods = null;
        if(this.varargMethods===undefined) this.varargMethods = null;
        if(this.bugfixed===undefined) this.bugfixed = false;
        this.bugfixed = bugfixed;
        this.fixArgMethods = new OverloadedFixArgsMethods(bugfixed);
    }

    addMethod(method : Function) {
        let paramTypes : Array<any> = method.getParameterTypes();
        this.addCallableMemberDescriptor(new ReflectionCallableMemberDescriptor(method, paramTypes));
    }

    addConstructor(constr : Constructor) {
        let paramTypes : Array<any> = constr.getParameterTypes();
        this.addCallableMemberDescriptor(new ReflectionCallableMemberDescriptor(constr, paramTypes));
    }

    addCallableMemberDescriptor(memberDesc : ReflectionCallableMemberDescriptor) {
        this.fixArgMethods.addCallableMemberDescriptor(memberDesc);
        if(memberDesc.isVarargs()) {
            if(this.varargMethods == null) {
                this.varargMethods = new OverloadedVarArgsMethods(this.bugfixed);
            }
            this.varargMethods.addCallableMemberDescriptor(memberDesc);
        }
    }

    getMemberAndArguments(tmArgs : Array<any>, unwrapper : BeansWrapper) : MemberAndArguments {
        let fixArgsRes : MaybeEmptyMemberAndArguments = this.fixArgMethods.getMemberAndArguments(tmArgs, unwrapper);
        if(fixArgsRes != null && fixArgsRes instanceof <any>MemberAndArguments) {
            return <MemberAndArguments>fixArgsRes;
        }
        let varargsRes : MaybeEmptyMemberAndArguments;
        if(this.varargMethods != null) {
            varargsRes = this.varargMethods.getMemberAndArguments(tmArgs, unwrapper);
            if(varargsRes != null && varargsRes instanceof <any>MemberAndArguments) {
                return <MemberAndArguments>varargsRes;
            }
        } else {
            varargsRes = null;
        }
        let edb : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(this.toCompositeErrorMessage(<EmptyMemberAndArguments>fixArgsRes, <EmptyMemberAndArguments>varargsRes, tmArgs), "\nThe matching overload was searched among these members:\n", this.memberListToString());
        if(!this.bugfixed) {
            edb.tip$java_lang_String("You seem to use BeansWrapper with incompatibleImprovements set below 2.3.21. If you think this error is unfounded, enabling 2.3.21 fixes may helps. See version history for more.");
        }
        this.addMarkupBITipAfterNoNoMarchIfApplicable(edb, tmArgs);
        throw new _TemplateModelException(edb);
    }

    toCompositeErrorMessage(fixArgsEmptyRes : EmptyMemberAndArguments, varargsEmptyRes : EmptyMemberAndArguments, tmArgs : Array<any>) : Array<any> {
        let argsErrorMsg : Array<any>;
        if(varargsEmptyRes != null) {
            if(fixArgsEmptyRes == null || fixArgsEmptyRes.isNumberOfArgumentsWrong()) {
                argsErrorMsg = this.toErrorMessage(varargsEmptyRes, tmArgs);
            } else {
                argsErrorMsg = ["When trying to call the non-varargs overloads:\n", this.toErrorMessage(fixArgsEmptyRes, tmArgs), "\nWhen trying to call the varargs overloads:\n", this.toErrorMessage(varargsEmptyRes, null)];
            }
        } else {
            argsErrorMsg = this.toErrorMessage(fixArgsEmptyRes, tmArgs);
        }
        return argsErrorMsg;
    }

    toErrorMessage(res : EmptyMemberAndArguments, tmArgs : Array<any>) : Array<any> {
        let unwrappedArgs : Array<any> = res.getUnwrappedArguments();
        return [res.getErrorDescription(), tmArgs != null?["\nThe FTL type of the argument values were: ", this.getTMActualParameterTypes(tmArgs), "."]:"", unwrappedArgs != null?["\nThe Java type of the argument values were: ", this.getUnwrappedActualParameterTypes(unwrappedArgs) + "."]:""];
    }

    memberListToString() : _DelayedConversionToString {
        return new OverloadedMethods.OverloadedMethods$0(this, null);
    }

    /**
     * Adds tip to the error message if converting a {link TemplateMarkupOutputModel} argument to {link String} might
     * allows finding a matching overload.
     * @param {_ErrorDescriptionBuilder} edb
     * @param {List} tmArgs
     * @private
     */
    addMarkupBITipAfterNoNoMarchIfApplicable(edb : _ErrorDescriptionBuilder, tmArgs : Array<any>) {
        for(let argIdx : number = 0; argIdx < /* size */(<number>tmArgs.length); argIdx++) {
            let tmArg : any = /* get */tmArgs[argIdx];
            if(tmArg != null && (tmArg["__interfaces"] != null && tmArg["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0 || tmArg.constructor != null && tmArg.constructor["__interfaces"] != null && tmArg.constructor["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0)) {
                for(let membDescs : any = this.fixArgMethods.getMemberDescriptors(); membDescs.hasNext(); ) {
                    let membDesc : CallableMemberDescriptor = <CallableMemberDescriptor>membDescs.next();
                    let paramTypes : Array<any> = membDesc.getParamTypes();
                    let paramType : any = null;
                    if(membDesc.isVarargs() && argIdx >= paramTypes.length - 1) {
                        paramType = paramTypes[paramTypes.length - 1];
                        if(paramType.isArray()) {
                            paramType = paramType.getComponentType();
                        }
                    }
                    if(paramType == null && argIdx < paramTypes.length) {
                        paramType = paramTypes[argIdx];
                    }
                    if(paramType != null) {
                        if(paramType.isAssignableFrom(String) && !paramType.isAssignableFrom((<any>tmArg.constructor))) {
                            edb.tip$java_lang_String(SimpleMethodModel.MARKUP_OUTPUT_TO_STRING_TIP);
                            return;
                        }
                    }
                }
            }
        }
    }

    getTMActualParameterTypes(__arguments : Array<any>) : _DelayedConversionToString {
        let argumentTypeDescs : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(/* size */(<number>__arguments.length));
        for(let i : number = 0; i < /* size */(<number>__arguments.length); i++) {
            argumentTypeDescs[i] = ClassUtil.getFTLTypeDescription(<TemplateModel><any>/* get */__arguments[i]);
        }
        return new OverloadedMethods.OverloadedMethods$1(this, argumentTypeDescs);
    }

    getUnwrappedActualParameterTypes(unwrappedArgs : Array) : any {
        let argumentTypes : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(unwrappedArgs.length);
        for(let i : number = 0; i < unwrappedArgs.length; i++) {
            let unwrappedArg : any = unwrappedArgs[i];
            argumentTypes[i] = unwrappedArg != null?(<any>unwrappedArg.constructor):null;
        }
        return new OverloadedMethods.OverloadedMethods$2(this, argumentTypes);
    }
}
OverloadedMethods["__class"] = "freemarker.ext.beans.OverloadedMethods";


export namespace OverloadedMethods {

    export abstract class DelayedCallSignatureToString extends _DelayedConversionToString {
        public __parent: any;
        public constructor(__parent: any, argTypeArray : Array) {
            super(argTypeArray);
            this.__parent = __parent;
        }

        /**
         * 
         * @param {Object} obj
         * @return {String}
         */
        doConversion(obj : any) : string {
            let argTypes : Array<any> = <Array>obj;
            let sb : StringBuilder = new StringBuilder("");
            for(let i : number = 0; i < argTypes.length; i++) {
                if(i !== 0) sb.append(", ");
                sb.append(this.argumentToString(argTypes[i]));
            }
            return sb.toString();
        }

        abstract argumentToString(argType : any) : string;
    }
    DelayedCallSignatureToString["__class"] = "freemarker.ext.beans.OverloadedMethods.DelayedCallSignatureToString";


    export class OverloadedMethods$0 extends _DelayedConversionToString {
        public __parent: any;
        /**
         * 
         * @param {Object} obj
         * @return {String}
         */
        doConversion(obj : any) : string {
            let fixArgMethodsIter : any = this.__parent.fixArgMethods.getMemberDescriptors();
            let varargMethodsIter : any = this.__parent.varargMethods != null?this.__parent.varargMethods.getMemberDescriptors():null;
            let hasMethods : boolean = fixArgMethodsIter.hasNext() || (varargMethodsIter != null && varargMethodsIter.hasNext());
            if(hasMethods) {
                let sb : StringBuilder = new StringBuilder("");
                let fixArgMethods : Array<any> = <any>([]);
                while((fixArgMethodsIter.hasNext())) {
                    if(sb.length() !== 0) sb.append(",\n");
                    sb.append("    ");
                    let callableMemberDesc : CallableMemberDescriptor = <CallableMemberDescriptor>fixArgMethodsIter.next();
                    /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(fixArgMethods, callableMemberDesc);
                    sb.append(callableMemberDesc.getDeclaration());
                }
                if(varargMethodsIter != null) {
                    while((varargMethodsIter.hasNext())) {
                        let callableMemberDesc : CallableMemberDescriptor = <CallableMemberDescriptor>varargMethodsIter.next();
                        if(!/* contains */(fixArgMethods.indexOf(<any>(callableMemberDesc)) >= 0)) {
                            if(sb.length() !== 0) sb.append(",\n");
                            sb.append("    ");
                            sb.append(callableMemberDesc.getDeclaration());
                        }
                    }
                }
                return sb.toString();
            } else {
                return "No members";
            }
        }

        constructor(__parent: any, __arg0: any) {
            super(__arg0);
            this.__parent = __parent;
        }
    }


    export class OverloadedMethods$1 extends OverloadedMethods.DelayedCallSignatureToString {
        public __parent: any;
        /**
         * 
         * @param {Object} argType
         * @return {String}
         */
        argumentToString(argType : any) : string {
            return <string>argType;
        }

        constructor(__parent: any, __arg0: any) {
            super(__parent, __arg0);
            this.__parent = __parent;
        }
    }


    export class OverloadedMethods$2 extends OverloadedMethods.DelayedCallSignatureToString {
        public __parent: any;
        /**
         * 
         * @param {Object} argType
         * @return {String}
         */
        argumentToString(argType : any) : string {
            return argType != null?ClassUtil.getShortClassName(<any>argType):ClassUtil.getShortClassNameOfObject(null);
        }

        constructor(__parent: any, __arg0: any) {
            super(__parent, __arg0);
            this.__parent = __parent;
        }
    }

}




