/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModelException } from '../../template/TemplateModelException';
import { ClassUtil } from '../../template/utility/ClassUtil';
import { NullArgumentException } from '../../template/utility/NullArgumentException';
import { ReflectionCallableMemberDescriptor } from './ReflectionCallableMemberDescriptor';
import { System } from '../../../java/lang/System';
import { TypeFlags } from './TypeFlags';
import { MaybeEmptyCallableMemberDescriptor } from './MaybeEmptyCallableMemberDescriptor';
import { ArgumentTypes } from './ArgumentTypes';
import { CallableMemberDescriptor } from './CallableMemberDescriptor';
import { MaybeEmptyMemberAndArguments } from './MaybeEmptyMemberAndArguments';
import { BeansWrapper } from './BeansWrapper';
import { Character } from '../../../java/lang/Character';
import { _MethodUtil } from './_MethodUtil';

/**
 * Encapsulates the rules and data structures (including cache) for choosing of the best matching callable member for
 * a parameter list, from a given set of callable members. There are two subclasses of this, one for non-varags methods,
 * and one for varargs methods.
 * @class
 */
export abstract class OverloadedMethodsSubset {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!OverloadedMethodsSubset.__static_initialized) { OverloadedMethodsSubset.__static_initialized = true; OverloadedMethodsSubset.__static_initializer_0(); } }

    /**
     * Used for an optimization trick to substitute an array of whatever size that contains only 0-s. Since this array
     * is 0 long, this means that the code that reads the int[] always have to check if the int[] has this value, and
     * then it has to act like if was all 0-s.
     */
    static ALL_ZEROS_ARRAY : number[]; public static ALL_ZEROS_ARRAY_$LI$() : number[] { OverloadedMethodsSubset.__static_initialize(); if(OverloadedMethodsSubset.ALL_ZEROS_ARRAY == null) OverloadedMethodsSubset.ALL_ZEROS_ARRAY = []; return OverloadedMethodsSubset.ALL_ZEROS_ARRAY; };

    static ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY : number[][]; public static ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY_$LI$() : number[][] { OverloadedMethodsSubset.__static_initialize(); if(OverloadedMethodsSubset.ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY == null) OverloadedMethodsSubset.ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY = [null]; return OverloadedMethodsSubset.ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY; };

    static __static_initializer_0() {
        OverloadedMethodsSubset.ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY_$LI$()[0] = OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$();
    }

    /*private*/ unwrappingHintsByParamCount : Array<any>;

    /**
     * Tells what types occur at a given parameter position with a bit field. See {link TypeFlags}.
     */
    /*private*/ typeFlagsByParamCount : number[][];

    /*private*/ argTypesToMemberDescCache : Map<any, any> = <any>(<Map>new Map(6, 0.75, 1));

    /*private*/ memberDescs : Array<any> = <any>([]);

    /**
     * Enables 2.3.21 {link BeansWrapper} incompatibleImprovements
     */
    bugfixed : boolean;

    constructor(bugfixed : boolean) {
        if(this.unwrappingHintsByParamCount===undefined) this.unwrappingHintsByParamCount = null;
        if(this.typeFlagsByParamCount===undefined) this.typeFlagsByParamCount = null;
        if(this.bugfixed===undefined) this.bugfixed = false;
        this.bugfixed = bugfixed;
    }

    addCallableMemberDescriptor(memberDesc : ReflectionCallableMemberDescriptor) {
        /* add */(this.memberDescs.push(memberDesc)>0);
        let prepedParamTypes : Array<any> = this.preprocessParameterTypes(memberDesc);
        let paramCount : number = prepedParamTypes.length;
        if(this.unwrappingHintsByParamCount == null) {
            this.unwrappingHintsByParamCount = (s => { let a=[]; while(s-->0) a.push(null); return a; })(paramCount + 1);
            this.unwrappingHintsByParamCount[paramCount] = /* clone */prepedParamTypes.slice(0);
        } else if(this.unwrappingHintsByParamCount.length <= paramCount) {
            let newUnwrappingHintsByParamCount : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(paramCount + 1);
            System.arraycopy(this.unwrappingHintsByParamCount, 0, newUnwrappingHintsByParamCount, 0, this.unwrappingHintsByParamCount.length);
            this.unwrappingHintsByParamCount = newUnwrappingHintsByParamCount;
            this.unwrappingHintsByParamCount[paramCount] = /* clone */prepedParamTypes.slice(0);
        } else {
            let unwrappingHints : Array<any> = this.unwrappingHintsByParamCount[paramCount];
            if(unwrappingHints == null) {
                this.unwrappingHintsByParamCount[paramCount] = /* clone */prepedParamTypes.slice(0);
            } else {
                for(let paramIdx : number = 0; paramIdx < prepedParamTypes.length; paramIdx++) {
                    unwrappingHints[paramIdx] = this.getCommonSupertypeForUnwrappingHint(unwrappingHints[paramIdx], prepedParamTypes[paramIdx]);
                };
            }
        }
        let typeFlagsByParamIdx : number[] = OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$();
        if(this.bugfixed) {
            for(let paramIdx : number = 0; paramIdx < paramCount; paramIdx++) {
                let typeFlags : number = TypeFlags.classToTypeFlags(prepedParamTypes[paramIdx]);
                if(typeFlags !== 0) {
                    if(typeFlagsByParamIdx === OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$()) {
                        typeFlagsByParamIdx = (s => { let a=[]; while(s-->0) a.push(0); return a; })(paramCount);
                    }
                    typeFlagsByParamIdx[paramIdx] = typeFlags;
                }
            };
            this.mergeInTypesFlags(paramCount, typeFlagsByParamIdx);
        }
        this.afterWideningUnwrappingHints(this.bugfixed?prepedParamTypes:this.unwrappingHintsByParamCount[paramCount], typeFlagsByParamIdx);
    }

    getUnwrappingHintsByParamCount() : Array {
        return this.unwrappingHintsByParamCount;
    }

    getMemberDescriptorForArgs(args : Array, varArg : boolean) : MaybeEmptyCallableMemberDescriptor {
        let argTypes : ArgumentTypes = new ArgumentTypes(args, this.bugfixed);
        let memberDesc : MaybeEmptyCallableMemberDescriptor = <MaybeEmptyCallableMemberDescriptor>/* get */this.argTypesToMemberDescCache.get(argTypes);
        if(memberDesc == null) {
            {
                memberDesc = <MaybeEmptyCallableMemberDescriptor>/* get */this.argTypesToMemberDescCache.get(argTypes);
                if(memberDesc == null) {
                    memberDesc = argTypes.getMostSpecific(this.memberDescs, varArg);
                    /* put */this.argTypesToMemberDescCache.set(argTypes, memberDesc);
                }
            };
        }
        return memberDesc;
    }

    getMemberDescriptors() : any {
        return /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.memberDescs);
    }

    abstract preprocessParameterTypes(memberDesc : CallableMemberDescriptor) : Array<any>;

    abstract afterWideningUnwrappingHints(paramTypes : Array, paramNumericalTypes : number[]);

    abstract getMemberAndArguments(tmArgs : Array<any>, unwrapper : BeansWrapper) : MaybeEmptyMemberAndArguments;

    /**
     * Returns the most specific common class (or interface) of two parameter types for the purpose of unwrapping.
     * This is trickier than finding the most specific overlapping superclass of two classes, because:
     * <ul>
     * <li>It considers primitive classes as the subclasses of the boxing classes.</li>
     * <li>If the only common class is {link Object}, it will try to find a common interface. If there are more
     * of them, it will start removing those that are known to be uninteresting as unwrapping hints.</li>
     * </ul>
     * 
     * @param {*} c1 Parameter type 1
     * @param {*} c2 Parameter type 2
     * @return {*}
     */
    getCommonSupertypeForUnwrappingHint(c1 : any, c2 : any) : any {
        if(c1 === c2) return c1;
        if(this.bugfixed) {
            let c1WasPrim : boolean;
            if(/* isPrimitive */(c1 === <any>'__erasedPrimitiveType__')) {
                c1 = ClassUtil.primitiveClassToBoxingClass(c1);
                c1WasPrim = true;
            } else {
                c1WasPrim = false;
            }
            let c2WasPrim : boolean;
            if(/* isPrimitive */(c2 === <any>'__erasedPrimitiveType__')) {
                c2 = ClassUtil.primitiveClassToBoxingClass(c2);
                c2WasPrim = true;
            } else {
                c2WasPrim = false;
            }
            if(c1 === c2) {
                return c1;
            } else if(Number.isAssignableFrom(c1) && Number.isAssignableFrom(c2)) {
                return Number;
            } else if(c1WasPrim || c2WasPrim) {
                return Object;
            }
        } else {
            if(/* isPrimitive */(c2 === <any>'__erasedPrimitiveType__')) {
                if(c2 === javaemul.internal.ByteHelper.TYPE) c2 = Number; else if(c2 === javaemul.internal.ShortHelper.TYPE) c2 = Number; else if(c2 === javaemul.internal.CharacterHelper.TYPE) c2 = String; else if(c2 === javaemul.internal.IntegerHelper.TYPE) c2 = Number; else if(c2 === javaemul.internal.FloatHelper.TYPE) c2 = Number; else if(c2 === javaemul.internal.LongHelper.TYPE) c2 = Number; else if(c2 === javaemul.internal.DoubleHelper.TYPE) c2 = Number;
            }
        }
        let commonTypes : Array<any> = _MethodUtil.getAssignables(c1, c2);
        /* retainAll */((a, r) => { let b=false; for(let i=0;i<a.length;i++) { let ndx=r.indexOf(a[i]); if(ndx<0) { a.splice(i, 1); i--; b=true; } } return b; })(commonTypes,_MethodUtil.getAssignables(c2, c1));
        if(/* isEmpty */(commonTypes.length == 0)) {
            return Object;
        }
        let max : Array<any> = <any>([]);
        listCommonTypes: for(let commonTypesIter : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(commonTypes); commonTypesIter.hasNext(); ) {
            let clazz : any = <any>commonTypesIter.next();
            for(let maxIter : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(max); maxIter.hasNext(); ) {
                let maxClazz : any = <any>maxIter.next();
                if(_MethodUtil.isMoreOrSameSpecificParameterType(maxClazz, clazz, false, 0) !== 0) {
                    continue listCommonTypes;
                }
                if(_MethodUtil.isMoreOrSameSpecificParameterType(clazz, maxClazz, false, 0) !== 0) {
                    maxIter.remove();
                }
            };
            /* add */(max.push(clazz)>0);
        };
        if(/* size */(<number>max.length) > 1) {
            if(this.bugfixed) {
                for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(max); it.hasNext(); ) {
                    let maxCl : any = <any>it.next();
                    if(!maxCl.isInterface()) {
                        if(maxCl !== Object) {
                            return maxCl;
                        } else {
                            it.remove();
                        }
                    }
                };
                /* remove */(a => { let index = a.indexOf("java.lang.Cloneable"); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(max);
                if(/* size */(<number>max.length) > 1) {
                    /* remove */(a => { let index = a.indexOf("java.io.Serializable"); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(max);
                    if(/* size */(<number>max.length) > 1) {
                        /* remove */(a => { let index = a.indexOf("java.lang.Comparable"); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(max);
                        if(/* size */(<number>max.length) > 1) {
                            return Object;
                        }
                    }
                }
            } else {
                return Object;
            }
        }
        return <any>/* get */max[0];
    }

    /**
     * Gets the "type flags" of each parameter positions, or {@code null} if there's no method with this parameter
     * count or if we are in pre-2.3.21 mode, or {link #ALL_ZEROS_ARRAY} if there were no parameters that turned
     * on a flag. The returned {@code int}-s are one or more {link TypeFlags} constants binary "or"-ed together.
     * @param {number} paramCount
     * @return {Array}
     */
    getTypeFlags(paramCount : number) : number[] {
        return this.typeFlagsByParamCount != null && this.typeFlagsByParamCount.length > paramCount?this.typeFlagsByParamCount[paramCount]:null;
    }

    /**
     * Updates the content of the {link #typeFlagsByParamCount} field with the parameter type flags of a method.
     * Don't call this when {link #bugfixed} is {@code false}!
     * 
     * @param {number} dstParamCount          The parameter count for which we want to merge in the type flags
     * @param {Array} srcTypeFlagsByParamIdx If shorter than {@code dstParamCount}, its last item will be repeated until
     * dstParamCount length is reached. If longer, the excessive items will be ignored.
     * Maybe {link #ALL_ZEROS_ARRAY}. Maybe a 0-length array. Can't be {@code null}.
     */
    mergeInTypesFlags(dstParamCount : number, srcTypeFlagsByParamIdx : number[]) {
        NullArgumentException.check$java_lang_String$java_lang_Object("srcTypesFlagsByParamIdx", srcTypeFlagsByParamIdx);
        if(dstParamCount === 0) {
            if(this.typeFlagsByParamCount == null) {
                this.typeFlagsByParamCount = OverloadedMethodsSubset.ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY_$LI$();
            } else if(this.typeFlagsByParamCount !== OverloadedMethodsSubset.ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY_$LI$()) {
                this.typeFlagsByParamCount[0] = OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$();
            }
            return;
        }
        if(this.typeFlagsByParamCount == null) {
            this.typeFlagsByParamCount = (s => { let a=[]; while(s-->0) a.push(null); return a; })(dstParamCount + 1);
        } else if(this.typeFlagsByParamCount.length <= dstParamCount) {
            let newTypeFlagsByParamCount : number[][] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(dstParamCount + 1);
            System.arraycopy(this.typeFlagsByParamCount, 0, newTypeFlagsByParamCount, 0, this.typeFlagsByParamCount.length);
            this.typeFlagsByParamCount = newTypeFlagsByParamCount;
        }
        let dstTypeFlagsByParamIdx : number[] = this.typeFlagsByParamCount[dstParamCount];
        if(dstTypeFlagsByParamIdx == null) {
            if(srcTypeFlagsByParamIdx !== OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$()) {
                let srcParamCount : number = srcTypeFlagsByParamIdx.length;
                dstTypeFlagsByParamIdx = (s => { let a=[]; while(s-->0) a.push(0); return a; })(dstParamCount);
                for(let paramIdx : number = 0; paramIdx < dstParamCount; paramIdx++) {
                    dstTypeFlagsByParamIdx[paramIdx] = srcTypeFlagsByParamIdx[paramIdx < srcParamCount?paramIdx:srcParamCount - 1];
                };
            } else {
                dstTypeFlagsByParamIdx = OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$();
            }
            this.typeFlagsByParamCount[dstParamCount] = dstTypeFlagsByParamIdx;
        } else {
            if(srcTypeFlagsByParamIdx === dstTypeFlagsByParamIdx) {
                return;
            }
            if(dstTypeFlagsByParamIdx === OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$() && dstParamCount > 0) {
                dstTypeFlagsByParamIdx = (s => { let a=[]; while(s-->0) a.push(0); return a; })(dstParamCount);
                this.typeFlagsByParamCount[dstParamCount] = dstTypeFlagsByParamIdx;
            }
            for(let paramIdx : number = 0; paramIdx < dstParamCount; paramIdx++) {
                let srcParamTypeFlags : number;
                if(srcTypeFlagsByParamIdx !== OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$()) {
                    let srcParamCount : number = srcTypeFlagsByParamIdx.length;
                    srcParamTypeFlags = srcTypeFlagsByParamIdx[paramIdx < srcParamCount?paramIdx:srcParamCount - 1];
                } else {
                    srcParamTypeFlags = 0;
                }
                let dstParamTypesFlags : number = dstTypeFlagsByParamIdx[paramIdx];
                if(dstParamTypesFlags !== srcParamTypeFlags) {
                    let mergedTypeFlags : number = dstParamTypesFlags | srcParamTypeFlags;
                    if((mergedTypeFlags & TypeFlags.MASK_ALL_NUMERICALS_$LI$()) !== 0) {
                        mergedTypeFlags |= TypeFlags.WIDENED_NUMERICAL_UNWRAPPING_HINT;
                    }
                    dstTypeFlagsByParamIdx[paramIdx] = mergedTypeFlags;
                }
            };
        }
    }

    forceNumberArgumentsToParameterTypes(args : Array, paramTypes : Array, typeFlagsByParamIndex : number[]) {
        let paramTypesLen : number = paramTypes.length;
        let argsLen : number = args.length;
        for(let argIdx : number = 0; argIdx < argsLen; argIdx++) {
            let paramTypeIdx : number = argIdx < paramTypesLen?argIdx:paramTypesLen - 1;
            let typeFlags : number = typeFlagsByParamIndex[paramTypeIdx];
            if((typeFlags & TypeFlags.WIDENED_NUMERICAL_UNWRAPPING_HINT) !== 0) {
                let arg : any = args[argIdx];
                if(typeof arg === 'number') {
                    let targetType : any = paramTypes[paramTypeIdx];
                    let convertedArg : number = BeansWrapper.forceUnwrappedNumberToType(<number>arg, targetType, this.bugfixed);
                    if(convertedArg != null) {
                        args[argIdx] = convertedArg;
                    }
                }
            }
        };
    }
}
OverloadedMethodsSubset["__class"] = "freemarker.ext.beans.OverloadedMethodsSubset";



var __Function = Function;

OverloadedMethodsSubset.ZERO_PARAM_COUNT_TYPE_FLAGS_ARRAY_$LI$();

OverloadedMethodsSubset.ALL_ZEROS_ARRAY_$LI$();

OverloadedMethodsSubset.__static_initialize();
