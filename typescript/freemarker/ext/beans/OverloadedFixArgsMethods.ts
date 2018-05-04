/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ObjectWrapperAndUnwrapper } from '../../template/ObjectWrapperAndUnwrapper';
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelException } from '../../template/TemplateModelException';
import { OverloadedMethodsSubset } from './OverloadedMethodsSubset';
import { CallableMemberDescriptor } from './CallableMemberDescriptor';
import { MaybeEmptyMemberAndArguments } from './MaybeEmptyMemberAndArguments';
import { BeansWrapper } from './BeansWrapper';
import { EmptyMemberAndArguments } from './EmptyMemberAndArguments';
import { MaybeEmptyCallableMemberDescriptor } from './MaybeEmptyCallableMemberDescriptor';
import { MemberAndArguments } from './MemberAndArguments';
import { EmptyCallableMemberDescriptor } from './EmptyCallableMemberDescriptor';

/**
 * Stores the non-varargs methods for a {link OverloadedMethods} object.
 * @extends OverloadedMethodsSubset
 * @class
 */
export class OverloadedFixArgsMethods extends OverloadedMethodsSubset {
    constructor(bugfixed : boolean) {
        super(bugfixed);
    }

    /**
     * 
     * @param {CallableMemberDescriptor} memberDesc
     * @return {Array}
     */
    preprocessParameterTypes(memberDesc : CallableMemberDescriptor) : Array {
        return memberDesc.getParamTypes();
    }

    /**
     * 
     * @param {Array} paramTypes
     * @param {Array} paramNumericalTypes
     */
    afterWideningUnwrappingHints(paramTypes : Array, paramNumericalTypes : number[]) {
    }

    /**
     * 
     * @param {List} tmArgs
     * @param {BeansWrapper} unwrapper
     * @return {MaybeEmptyMemberAndArguments}
     */
    getMemberAndArguments(tmArgs : Array<any>, unwrapper : BeansWrapper) : MaybeEmptyMemberAndArguments {
        if(tmArgs == null) {
            tmArgs = Collections.EMPTY_LIST;
        }
        let argCount : number = /* size */(<number>tmArgs.length);
        let unwrappingHintsByParamCount : Array<any> = this.getUnwrappingHintsByParamCount();
        if(unwrappingHintsByParamCount.length <= argCount) {
            return EmptyMemberAndArguments.WRONG_NUMBER_OF_ARGUMENTS_$LI$();
        }
        let unwarppingHints : Array<any> = unwrappingHintsByParamCount[argCount];
        if(unwarppingHints == null) {
            return EmptyMemberAndArguments.WRONG_NUMBER_OF_ARGUMENTS_$LI$();
        }
        let pojoArgs : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(argCount);
        let typeFlags : number[] = this.getTypeFlags(argCount);
        if(typeFlags === OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$()) {
            typeFlags = null;
        }
        let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(tmArgs);
        for(let i : number = 0; i < argCount; ++i) {
            let pojo : any = unwrapper.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int(<TemplateModel><any>it.next(), unwarppingHints[i], typeFlags != null?typeFlags[i]:0);
            if(pojo === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
                return EmptyMemberAndArguments.noCompatibleOverload$int(i + 1);
            }
            pojoArgs[i] = pojo;
        };
        let maybeEmtpyMemberDesc : MaybeEmptyCallableMemberDescriptor = this.getMemberDescriptorForArgs(pojoArgs, false);
        if(maybeEmtpyMemberDesc != null && maybeEmtpyMemberDesc instanceof <any>CallableMemberDescriptor) {
            let memberDesc : CallableMemberDescriptor = <CallableMemberDescriptor>maybeEmtpyMemberDesc;
            if(this.bugfixed) {
                if(typeFlags != null) {
                    this.forceNumberArgumentsToParameterTypes(pojoArgs, memberDesc.getParamTypes(), typeFlags);
                }
            } else {
                BeansWrapper.coerceBigDecimals$java_lang_Class_A$java_lang_Object_A(memberDesc.getParamTypes(), pojoArgs);
            }
            return new MemberAndArguments(memberDesc, pojoArgs);
        } else {
            return EmptyMemberAndArguments.from(<EmptyCallableMemberDescriptor>maybeEmtpyMemberDesc, pojoArgs);
        }
    }
}
OverloadedFixArgsMethods["__class"] = "freemarker.ext.beans.OverloadedFixArgsMethods";



var __Function = Function;
