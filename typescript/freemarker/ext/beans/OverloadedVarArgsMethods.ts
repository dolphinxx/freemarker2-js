/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BugException } from '../../core/BugException';
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
import { System } from '../../../java/lang/System';

/**
 * Stores the varargs methods for a {link OverloadedMethods} object.
 * @extends OverloadedMethodsSubset
 * @class
 */
export class OverloadedVarArgsMethods extends OverloadedMethodsSubset {
    constructor(bugfixed : boolean) {
        super(bugfixed);
    }

    /**
     * Replaces the last parameter type with the array component type of it.
     * @param {CallableMemberDescriptor} memberDesc
     * @return {Array}
     */
    preprocessParameterTypes(memberDesc : CallableMemberDescriptor) : Array {
        let preprocessedParamTypes : Array<any> = /* clone */memberDesc.getParamTypes().slice(0);
        let ln : number = preprocessedParamTypes.length;
        let varArgsCompType : any = preprocessedParamTypes[ln - 1].getComponentType();
        if(varArgsCompType == null) {
            throw new BugException("Only varargs methods should be handled here");
        }
        preprocessedParamTypes[ln - 1] = varArgsCompType;
        return preprocessedParamTypes;
    }

    /**
     * 
     * @param {Array} paramTypes
     * @param {Array} paramNumericalTypes
     */
    afterWideningUnwrappingHints(paramTypes : Array, paramNumericalTypes : number[]) {
        let paramCount : number = paramTypes.length;
        let unwrappingHintsByParamCount : Array<any> = this.getUnwrappingHintsByParamCount();
        for(let i : number = paramCount - 1; i >= 0; i--) {
            let previousHints : Array<any> = unwrappingHintsByParamCount[i];
            if(previousHints != null) {
                this.widenHintsToCommonSupertypes(paramCount, previousHints, this.getTypeFlags(i));
                break;
            }
        };
        if(paramCount + 1 < unwrappingHintsByParamCount.length) {
            let oneLongerHints : Array<any> = unwrappingHintsByParamCount[paramCount + 1];
            if(oneLongerHints != null) {
                this.widenHintsToCommonSupertypes(paramCount, oneLongerHints, this.getTypeFlags(paramCount + 1));
            }
        }
        for(let i : number = paramCount + 1; i < unwrappingHintsByParamCount.length; i++) {
            this.widenHintsToCommonSupertypes(i, paramTypes, paramNumericalTypes);
        };
        if(paramCount > 0) {
            this.widenHintsToCommonSupertypes(paramCount - 1, paramTypes, paramNumericalTypes);
        }
    }

    /*private*/ widenHintsToCommonSupertypes(paramCountOfWidened : number, wideningTypes : Array, wideningTypeFlags : number[]) {
        let typesToWiden : Array<any> = this.getUnwrappingHintsByParamCount()[paramCountOfWidened];
        if(typesToWiden == null) {
            return;
        }
        let typesToWidenLen : number = typesToWiden.length;
        let wideningTypesLen : number = wideningTypes.length;
        let min : number = Math.min(wideningTypesLen, typesToWidenLen);
        for(let i : number = 0; i < min; ++i) {
            typesToWiden[i] = this.getCommonSupertypeForUnwrappingHint(typesToWiden[i], wideningTypes[i]);
        };
        if(typesToWidenLen > wideningTypesLen) {
            let varargsComponentType : any = wideningTypes[wideningTypesLen - 1];
            for(let i : number = wideningTypesLen; i < typesToWidenLen; ++i) {
                typesToWiden[i] = this.getCommonSupertypeForUnwrappingHint(typesToWiden[i], varargsComponentType);
            };
        }
        if(this.bugfixed) {
            this.mergeInTypesFlags(paramCountOfWidened, wideningTypeFlags);
        }
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
        let argsLen : number = /* size */(<number>tmArgs.length);
        let unwrappingHintsByParamCount : Array<any> = this.getUnwrappingHintsByParamCount();
        let pojoArgs : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(argsLen);
        let typesFlags : number[] = null;
        outer: for(let paramCount : number = Math.min(argsLen + 1, unwrappingHintsByParamCount.length - 1); paramCount >= 0; --paramCount) {
            let unwarappingHints : Array<any> = unwrappingHintsByParamCount[paramCount];
            if(unwarappingHints == null) {
                if(paramCount === 0) {
                    return EmptyMemberAndArguments.WRONG_NUMBER_OF_ARGUMENTS_$LI$();
                }
                continue;
            }
            typesFlags = this.getTypeFlags(paramCount);
            if(typesFlags === OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$()) {
                typesFlags = null;
            }
            let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(tmArgs);
            for(let i : number = 0; i < argsLen; ++i) {
                let paramIdx : number = i < paramCount?i:paramCount - 1;
                let pojo : any = unwrapper.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int(<TemplateModel><any>it.next(), unwarappingHints[paramIdx], typesFlags != null?typesFlags[paramIdx]:0);
                if(pojo === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
                    continue outer;
                }
                pojoArgs[i] = pojo;
            };
            break outer;
        };
        let maybeEmtpyMemberDesc : MaybeEmptyCallableMemberDescriptor = this.getMemberDescriptorForArgs(pojoArgs, true);
        if(maybeEmtpyMemberDesc != null && maybeEmtpyMemberDesc instanceof <any>CallableMemberDescriptor) {
            let memberDesc : CallableMemberDescriptor = <CallableMemberDescriptor>maybeEmtpyMemberDesc;
            let pojoArgsWithArray : Array<any>;
            let argsOrErrorIdx : any = this.replaceVarargsSectionWithArray(pojoArgs, tmArgs, memberDesc, unwrapper);
            if(argsOrErrorIdx != null && argsOrErrorIdx instanceof <any>Array && (argsOrErrorIdx.length==0 || argsOrErrorIdx[0] == null ||argsOrErrorIdx[0] != null)) {
                pojoArgsWithArray = <Array>argsOrErrorIdx;
            } else {
                return EmptyMemberAndArguments.noCompatibleOverload$int(<number>argsOrErrorIdx);
            }
            if(this.bugfixed) {
                if(typesFlags != null) {
                    this.forceNumberArgumentsToParameterTypes(pojoArgsWithArray, memberDesc.getParamTypes(), typesFlags);
                }
            } else {
                BeansWrapper.coerceBigDecimals$java_lang_Class_A$java_lang_Object_A(memberDesc.getParamTypes(), pojoArgsWithArray);
            }
            return new MemberAndArguments(memberDesc, pojoArgsWithArray);
        } else {
            return EmptyMemberAndArguments.from(<EmptyCallableMemberDescriptor>maybeEmtpyMemberDesc, pojoArgs);
        }
    }

    /**
     * Converts a flat argument list to one where the last argument is an array that collects the varargs, also
     * re-unwraps the varargs to the component type. Note that this couldn't be done until we had the concrete
     * member selected.
     * 
     * @return {Object} An {@code Object[]} if everything went well, or an {@code Integer} the
     * order (1-based index) of the argument that couldn't be unwrapped.
     * @param {Array} args
     * @param {List} modelArgs
     * @param {CallableMemberDescriptor} memberDesc
     * @param {BeansWrapper} unwrapper
     * @private
     */
    /*private*/ replaceVarargsSectionWithArray(args : Array, modelArgs : Array<any>, memberDesc : CallableMemberDescriptor, unwrapper : BeansWrapper) : any {
        let paramTypes : Array<any> = memberDesc.getParamTypes();
        let paramCount : number = paramTypes.length;
        let varArgsCompType : any = paramTypes[paramCount - 1].getComponentType();
        let totalArgCount : number = args.length;
        let fixArgCount : number = paramCount - 1;
        if(args.length !== paramCount) {
            let packedArgs : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(paramCount);
            System.arraycopy(args, 0, packedArgs, 0, fixArgCount);
            let varargs : any = /* newInstance */new Array<any>(totalArgCount - fixArgCount);
            for(let i : number = fixArgCount; i < totalArgCount; ++i) {
                let val : any = unwrapper.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(<TemplateModel><any>/* get */modelArgs[i], varArgsCompType);
                if(val === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
                    return i + 1;
                }
                /* set */(varargs[i - fixArgCount]=i - fixArgCount);
            };
            packedArgs[fixArgCount] = varargs;
            return packedArgs;
        } else {
            let val : any = unwrapper.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(<TemplateModel><any>/* get */modelArgs[fixArgCount], varArgsCompType);
            if(val === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
                return fixArgCount + 1;
            }
            let array : any = /* newInstance */new Array<any>(1);
            /* set */(array[0]=0);
            args[fixArgCount] = array;
            return args;
        }
    }
}
OverloadedVarArgsMethods["__class"] = "freemarker.ext.beans.OverloadedVarArgsMethods";



var __Function = Function;
