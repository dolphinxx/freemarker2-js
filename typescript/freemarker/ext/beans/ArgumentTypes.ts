/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BugException} from '../../core/BugException';
import {TemplateModel} from '../../template/TemplateModel';
import {ClassUtil} from '../../template/utility/ClassUtil';
import {MaybeEmptyCallableMemberDescriptor} from './MaybeEmptyCallableMemberDescriptor';
import {ReflectionCallableMemberDescriptor} from './ReflectionCallableMemberDescriptor';
import {CallableMemberDescriptor} from './CallableMemberDescriptor';
import {EmptyCallableMemberDescriptor} from './EmptyCallableMemberDescriptor';
import {OverloadedNumberUtil} from './OverloadedNumberUtil';
import {_MethodUtil} from './_MethodUtil';
import {CharacterOrString} from './CharacterOrString';
import {Boolean} from '../../../java/lang/Boolean';
import {BeansWrapper} from './BeansWrapper';
import {List} from "../../../java/util/List";
import {BooleanHelper} from "../../../javaemul/internal/BooleanHelper";

/**
 * The argument types of a method call; usable as cache key.
 * @class
 */
export class ArgumentTypes {
    /**
     * Conversion difficulty: Lowest; Java Reflection will do it automatically.
     */
    static CONVERSION_DIFFICULTY_REFLECTION : number = 0;

    /**
     * Conversion difficulty: Java reflection API will won't convert it, FreeMarker has to do it.
     */
    static CONVERSION_DIFFICULTY_FREEMARKER : number = 1;

    /**
     * Conversion difficulty: Highest; conversion is not possible.
     */
    static CONVERSION_DIFFICULTY_IMPOSSIBLE : number = 2;

    /**
     * The types of the arguments; for varags this contains the exploded list (not the array).
     */
    /*private*/ types : Array<any>;

    /*private*/ bugfixed : boolean;

    constructor(args : Array<any>, bugfixed : boolean) {
        if(this.types===undefined) this.types = null;
        if(this.bugfixed===undefined) this.bugfixed = false;
        let ln : number = args.length;
        let typesTmp : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(ln);
        for(let i : number = 0; i < ln; ++i) {
            let arg : any = args[i];
            typesTmp[i] = arg == null?(bugfixed?ArgumentTypes.Null:Object):(<any>arg.constructor);
        }
        this.types = typesTmp;
        this.bugfixed = bugfixed;
    }

    /**
     * 
     * @return {number}
     */
    public hashCode() : number {
        let hash : number = 0;
        for(let i : number = 0; i < this.types.length; ++i) {
            hash ^= /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.types[i]));
        }
        return hash;
    }

    /**
     * 
     * @param {Object} o
     * @return {boolean}
     */
    public equals(o : any) : boolean {
        if(o != null && o instanceof <any>ArgumentTypes) {
            let cs : ArgumentTypes = <ArgumentTypes>o;
            if(cs.types.length !== this.types.length) {
                return false;
            }
            for(let i : number = 0; i < this.types.length; ++i) {
                if(cs.types[i] !== this.types[i]) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    /**
     * @return {MaybeEmptyCallableMemberDescriptor} Possibly {link EmptyCallableMemberDescriptor#NO_SUCH_METHOD} or
     * {link EmptyCallableMemberDescriptor#AMBIGUOUS_METHOD}.
     * @param {List} memberDescs
     * @param {boolean} varArg
     */
    getMostSpecific(memberDescs : List, varArg : boolean) : MaybeEmptyCallableMemberDescriptor {
        let applicables : List = this.getApplicables(memberDescs, varArg);
        if(/* isEmpty */(applicables.length == 0)) {
            return EmptyCallableMemberDescriptor.NO_SUCH_METHOD_$LI$();
        }
        if(/* size */(<number>applicables.length) === 1) {
            return applicables.get(0);
        }
        let maximals : List = <any>([]);
        for(let index147=0; index147 < applicables.length; index147++) {
            let applicable = applicables[index147];
            {
                let lessSpecific : boolean = false;
                for(let maximalsIter : Iterator = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(maximals); maximalsIter.hasNext(); ) {
                    let maximal : CallableMemberDescriptor = maximalsIter.next();
                    let cmpRes : number = this.compareParameterListPreferability(applicable.getParamTypes(), maximal.getParamTypes(), varArg);
                    if(cmpRes > 0) {
                        maximalsIter.remove();
                    } else if(cmpRes < 0) {
                        lessSpecific = true;
                    }
                }
                if(!lessSpecific) {
                    /* addLast */(maximals.push(applicable)>0);
                }
            }
        }
        if(/* size */(<number>maximals.length) > 1) {
            return EmptyCallableMemberDescriptor.AMBIGUOUS_METHOD_$LI$();
        }
        return maximals.get(0);
    }

    /**
     * Tells if among the parameter list of two methods, which one fits this argument list better.
     * This method assumes that the parameter lists are applicable to this argument lists; if that's not ensured,
     * what the result will be is undefined.
     * 
     * <p>This method behaves differently in {@code bugfixed}-mode (used when a {link BeansWrapper} is created with
     * incompatible improvements set to 2.3.21 or higher). Below we describe the bugfixed behavior only.
     * 
     * <p>The decision is made by comparing the preferability of each parameter types of the same position in a loop.
     * At the end, the parameter list with the more preferred parameters will be the preferred one. If both parameter
     * lists has the same amount of preferred parameters, the one that has the first (lower index) preferred parameter
     * is the preferred one. Otherwise the two parameter list are considered to be equal in terms of preferability.
     * 
     * <p>If there's no numerical conversion involved, the preferability of two parameter types is decided on how
     * specific their types are. For example, {@code String} is more specific than {link Object} (because
     * {@code Object.class.isAssignableFrom(String.class)}-s), and so {@code String} is preferred. Primitive
     * types are considered to be more specific than the corresponding boxing class (like {@code boolean} is more
     * specific than {@code Boolean}, because the former can't store {@code null}). The preferability decision gets
     * trickier when there's a possibility of numerical conversion from the actual argument type to the type of some of
     * the parameters. If such conversion is only possible for one of the competing parameter types, that parameter
     * automatically wins. If it's possible for both, {link OverloadedNumberUtil#getArgumentConversionPrice} will
     * be used to calculate the conversion "price", and the parameter type with lowest price wins. There are also
     * a twist with array-to-list and list-to-array conversions; we try to avoid those, so the parameter where such
     * conversion isn't needed will always win.
     * 
     * @param {Array} paramTypes1 The parameter types of one of the competing methods
     * @param {Array} paramTypes2 The parameter types of the other competing method
     * @param {boolean} varArg      Whether these competing methods are varargs methods.
     * @return {number} More than 0 if the first parameter list is preferred, less then 0 if the other is preferred,
     * 0 if there's no decision
     */
    compareParameterListPreferability(paramTypes1 : Array<any>, paramTypes2 : Array<any>, varArg : boolean) : number {
        let argTypesLen : number = this.types.length;
        let paramTypes1Len : number = paramTypes1.length;
        let paramTypes2Len : number = paramTypes2.length;
        if(this.bugfixed) {
            let paramList1WeakWinCnt : number = 0;
            let paramList2WeakWinCnt : number = 0;
            let paramList1WinCnt : number = 0;
            let paramList2WinCnt : number = 0;
            let paramList1StrongWinCnt : number = 0;
            let paramList2StrongWinCnt : number = 0;
            let paramList1VeryStrongWinCnt : number = 0;
            let paramList2VeryStrongWinCnt : number = 0;
            let firstWinerParamList : number = 0;
            for(let i : number = 0; i < argTypesLen; i++) {
                let paramType1 : any = ArgumentTypes.getParamType(paramTypes1, paramTypes1Len, i, varArg);
                let paramType2 : any = ArgumentTypes.getParamType(paramTypes2, paramTypes2Len, i, varArg);
                let winerParam : number;
                if(paramType1 === paramType2) {
                    winerParam = 0;
                } else {
                    let argType : any = this.types[i];
                    let argIsNum : boolean = !isNaN(argType);
                    let numConvPrice1 : number;
                    if(argIsNum && ClassUtil.isNumerical(paramType1)) {
                        let nonPrimParamType1 : any = /* isPrimitive */(paramType1 === <any>'__erasedPrimitiveType__')?ClassUtil.primitiveClassToBoxingClass(paramType1):paramType1;
                        numConvPrice1 = OverloadedNumberUtil.getArgumentConversionPrice(argType, nonPrimParamType1);
                    } else {
                        numConvPrice1 = Number.MAX_VALUE;
                    }
                    let numConvPrice2 : number;
                    if(argIsNum && ClassUtil.isNumerical(paramType2)) {
                        let nonPrimParamType2 : any = /* isPrimitive */(paramType2 === <any>'__erasedPrimitiveType__')?ClassUtil.primitiveClassToBoxingClass(paramType2):paramType2;
                        numConvPrice2 = OverloadedNumberUtil.getArgumentConversionPrice(argType, nonPrimParamType2);
                    } else {
                        numConvPrice2 = Number.MAX_VALUE;
                    }
                    if(numConvPrice1 === Number.MAX_VALUE) {
                        if(numConvPrice2 === Number.MAX_VALUE) {
                            if(ClassUtil.isAssignableFrom(argType, "java.util.List") && (paramType1.isArray() || paramType2.isArray())) {
                                if(paramType1.isArray()) {
                                    if(paramType2.isArray()) {
                                        let r : number = this.compareParameterListPreferability_cmpTypeSpecificty(paramType1.getComponentType(), paramType2.getComponentType());
                                        if(r > 0) {
                                            winerParam = 2;
                                            paramList2StrongWinCnt++;
                                        } else if(r < 0) {
                                            winerParam = 1;
                                            paramList1StrongWinCnt++;
                                        } else {
                                            winerParam = 0;
                                        }
                                    } else {
                                        if(ClassUtil.isAssignableFrom(paramType2, "java.util.Collection")) {
                                            winerParam = 2;
                                            paramList2StrongWinCnt++;
                                        } else {
                                            winerParam = 1;
                                            paramList1WeakWinCnt++;
                                        }
                                    }
                                } else {
                                    if(ClassUtil.isAssignableFrom(paramType1, "java.util.Collection")) {
                                        winerParam = 1;
                                        paramList1StrongWinCnt++;
                                    } else {
                                        winerParam = 2;
                                        paramList2WeakWinCnt++;
                                    }
                                }
                            } else if(argType.isArray() && (ClassUtil.isAssignableFrom(paramType1, "java.util.List") || ClassUtil.isAssignableFrom(paramType2, "java.util.List"))) {
                                if(ClassUtil.isAssignableFrom(paramType1, "java.util.List")) {
                                    if(ClassUtil.isAssignableFrom(paramType2, "java.util.List")) {
                                        winerParam = 0;
                                    } else {
                                        winerParam = 2;
                                        paramList2VeryStrongWinCnt++;
                                    }
                                } else {
                                    winerParam = 1;
                                    paramList1VeryStrongWinCnt++;
                                }
                            } else {
                                let r : number = this.compareParameterListPreferability_cmpTypeSpecificty(paramType1, paramType2);
                                if(r > 0) {
                                    winerParam = 1;
                                    if(r > 1) {
                                        paramList1WinCnt++;
                                    } else {
                                        paramList1WeakWinCnt++;
                                    }
                                } else if(r < 0) {
                                    winerParam = -1;
                                    if(r < -1) {
                                        paramList2WinCnt++;
                                    } else {
                                        paramList2WeakWinCnt++;
                                    }
                                } else {
                                    winerParam = 0;
                                }
                            }
                        } else {
                            winerParam = -1;
                            paramList2WinCnt++;
                        }
                    } else if(numConvPrice2 === Number.MAX_VALUE) {
                        winerParam = 1;
                        paramList1WinCnt++;
                    } else {
                        if(numConvPrice1 !== numConvPrice2) {
                            if(numConvPrice1 < numConvPrice2) {
                                winerParam = 1;
                                if(numConvPrice1 < OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE_$LI$() && numConvPrice2 > OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE_$LI$()) {
                                    paramList1StrongWinCnt++;
                                } else {
                                    paramList1WinCnt++;
                                }
                            } else {
                                winerParam = -1;
                                if(numConvPrice2 < OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE_$LI$() && numConvPrice1 > OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE_$LI$()) {
                                    paramList2StrongWinCnt++;
                                } else {
                                    paramList2WinCnt++;
                                }
                            }
                        } else {
                            winerParam = (/* isPrimitive */(paramType1 === <any>'__erasedPrimitiveType__')?1:0) - (/* isPrimitive */(paramType2 === <any>'__erasedPrimitiveType__')?1:0);
                            if(winerParam === 1) paramList1WeakWinCnt++; else if(winerParam === -1) paramList2WeakWinCnt++;
                        }
                    }
                }
                if(firstWinerParamList === 0 && winerParam !== 0) {
                    firstWinerParamList = winerParam;
                }
            }
            if(paramList1VeryStrongWinCnt !== paramList2VeryStrongWinCnt) {
                return paramList1VeryStrongWinCnt - paramList2VeryStrongWinCnt;
            } else if(paramList1StrongWinCnt !== paramList2StrongWinCnt) {
                return paramList1StrongWinCnt - paramList2StrongWinCnt;
            } else if(paramList1WinCnt !== paramList2WinCnt) {
                return paramList1WinCnt - paramList2WinCnt;
            } else if(paramList1WeakWinCnt !== paramList2WeakWinCnt) {
                return paramList1WeakWinCnt - paramList2WeakWinCnt;
            } else if(firstWinerParamList !== 0) {
                return firstWinerParamList;
            } else {
                if(varArg) {
                    if(paramTypes1Len === paramTypes2Len) {
                        if(argTypesLen === paramTypes1Len - 1) {
                            let paramType1 : any = ArgumentTypes.getParamType(paramTypes1, paramTypes1Len, argTypesLen, true);
                            let paramType2 : any = ArgumentTypes.getParamType(paramTypes2, paramTypes2Len, argTypesLen, true);
                            if(ClassUtil.isNumerical(paramType1) && ClassUtil.isNumerical(paramType2)) {
                                let r : number = OverloadedNumberUtil.compareNumberTypeSpecificity(paramType1, paramType2);
                                if(r !== 0) return r;
                            }
                            return this.compareParameterListPreferability_cmpTypeSpecificty(paramType1, paramType2);
                        } else {
                            return 0;
                        }
                    } else {
                        return paramTypes1Len - paramTypes2Len;
                    }
                } else {
                    return 0;
                }
            }
        } else {
            let paramTypes1HasAMoreSpecific : boolean = false;
            let paramTypes2HasAMoreSpecific : boolean = false;
            for(let i : number = 0; i < paramTypes1Len; ++i) {
                let paramType1 : any = ArgumentTypes.getParamType(paramTypes1, paramTypes1Len, i, varArg);
                let paramType2 : any = ArgumentTypes.getParamType(paramTypes2, paramTypes2Len, i, varArg);
                if(paramType1 !== paramType2) {
                    paramTypes1HasAMoreSpecific = paramTypes1HasAMoreSpecific || _MethodUtil.isMoreOrSameSpecificParameterType(paramType1, paramType2, false, 0) !== 0;
                    paramTypes2HasAMoreSpecific = paramTypes2HasAMoreSpecific || _MethodUtil.isMoreOrSameSpecificParameterType(paramType2, paramType1, false, 0) !== 0;
                }
            }
            if(paramTypes1HasAMoreSpecific) {
                return paramTypes2HasAMoreSpecific?0:1;
            } else if(paramTypes2HasAMoreSpecific) {
                return -1;
            } else {
                return 0;
            }
        }
    }

    /**
     * Trivial comparison of type specificities; unaware of numerical conversions.
     * 
     * @return {number} Less-than-0, 0, or more-than-0 depending on which side is more specific. The absolute value is 1 if
     * the difference is only in primitive VS non-primitive, more otherwise.
     * @param {*} paramType1
     * @param {*} paramType2
     * @private
     */
    compareParameterListPreferability_cmpTypeSpecificty(paramType1 : any, paramType2 : any) : number {
        let nonPrimParamType1 : any = /* isPrimitive */(paramType1 === <any>'__erasedPrimitiveType__')?ClassUtil.primitiveClassToBoxingClass(paramType1):paramType1;
        let nonPrimParamType2 : any = /* isPrimitive */(paramType2 === <any>'__erasedPrimitiveType__')?ClassUtil.primitiveClassToBoxingClass(paramType2):paramType2;
        if(nonPrimParamType1 === nonPrimParamType2) {
            if(nonPrimParamType1 !== paramType1) {
                if(nonPrimParamType2 !== paramType2) {
                    return 0;
                } else {
                    return 1;
                }
            } else if(nonPrimParamType2 !== paramType2) {
                return -1;
            } else {
                return 0;
            }
        } else if(nonPrimParamType2.isAssignableFrom(nonPrimParamType1)) {
            return 2;
        } else if(nonPrimParamType1.isAssignableFrom(nonPrimParamType2)) {
            return -2;
        }
        if(nonPrimParamType1 === String && nonPrimParamType2.isAssignableFrom(String)) {
            return 2;
        }
        if(nonPrimParamType2 === String && nonPrimParamType1.isAssignableFrom(String)) {
            return -2;
        } else {
            return 0;
        }
    }

    static getParamType(paramTypes : Array<any>, paramTypesLen : number, i : number, varArg : boolean) : any {
        return varArg && i >= paramTypesLen - 1?paramTypes[paramTypesLen - 1].getComponentType():paramTypes[i];
    }

    /**
     * Returns all methods that are applicable to actual
     * parameter types represented by this ArgumentTypes object.
     * @param {List} memberDescs
     * @param {boolean} varArg
     * @return {LinkedList}
     */
    getApplicables(memberDescs : List, varArg : boolean) : List {
        let applicables : List = <any>([]);
        for(let index148=0; index148 < memberDescs.length; index148++) {
            let memberDesc = memberDescs[index148];
            {
                let difficulty : number = this.isApplicable(memberDesc, varArg);
                if(difficulty !== ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE) {
                    if(difficulty === ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION) {
                        /* add */(applicables.push(memberDesc)>0);
                    } else if(difficulty === ArgumentTypes.CONVERSION_DIFFICULTY_FREEMARKER) {
                        /* add */(applicables.push(new ArgumentTypes.SpecialConversionCallableMemberDescriptor(memberDesc))>0);
                    } else {
                        throw new BugException();
                    }
                }
            }
        }
        return applicables;
    }

    /**
     * Returns if the supplied method is applicable to actual
     * parameter types represented by this ArgumentTypes object, also tells
     * how difficult that conversion is.
     * 
     * @return {number} One of the <tt>CONVERSION_DIFFICULTY_...</tt> constants.
     * @param {ReflectionCallableMemberDescriptor} memberDesc
     * @param {boolean} varArg
     * @private
     */
    isApplicable(memberDesc : ReflectionCallableMemberDescriptor, varArg : boolean) : number {
        let paramTypes : Array<any> = memberDesc.getParamTypes();
        let cl : number = this.types.length;
        let fl : number = paramTypes.length - (varArg?1:0);
        if(varArg) {
            if(cl < fl) {
                return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
            }
        } else {
            if(cl !== fl) {
                return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
            }
        }
        let maxDifficulty : number = 0;
        for(let i : number = 0; i < fl; ++i) {
            let difficulty : number = this.isMethodInvocationConvertible(paramTypes[i], this.types[i]);
            if(difficulty === ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE) {
                return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
            }
            if(maxDifficulty < difficulty) {
                maxDifficulty = difficulty;
            }
        }
        if(varArg) {
            let varArgParamType : any = paramTypes[fl].getComponentType();
            for(let i : number = fl; i < cl; ++i) {
                let difficulty : number = this.isMethodInvocationConvertible(varArgParamType, this.types[i]);
                if(difficulty === ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
                }
                if(maxDifficulty < difficulty) {
                    maxDifficulty = difficulty;
                }
            }
        }
        return maxDifficulty;
    }

    /**
     * Determines whether a type is convertible to another type via
     * method invocation conversion, and if so, what kind of conversion is needed.
     * It treates the object type counterpart of primitive types as if they were the primitive types
     * (that is, a Boolean actual parameter type matches boolean primitive formal type). This behavior
     * is because this method is used to determine applicable methods for
     * an actual parameter list, and primitive types are represented by
     * their object duals in reflective method calls.
     * 
     * @param {*} formal the parameter type to which the actual
     * parameter type should be convertible; possibly a primitive type
     * @param {*} actual the argument type; not a primitive type, maybe {link Null}.
     * @return {number} One of the <tt>CONVERSION_DIFFICULTY_...</tt> constants.
     * @private
     */
    isMethodInvocationConvertible(formal : any, actual : any) : number {
        if(formal.isAssignableFrom(actual) && actual !== CharacterOrString) {
            return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
        } else if(this.bugfixed) {
            let formalNP : any;
            if(/* isPrimitive */(formal === <any>'__erasedPrimitiveType__')) {
                if(actual === ArgumentTypes.Null) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
                }
                formalNP = ClassUtil.primitiveClassToBoxingClass(formal);
                if(actual === formalNP) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                }
            } else {
                if(actual === ArgumentTypes.Null) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                }
                formalNP = formal;
            }
            if(!isNaN(actual) && !isNaN(formalNP)) {
                return OverloadedNumberUtil.getArgumentConversionPrice(actual, formalNP) === Number.MAX_VALUE?ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE:ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
            } else if(formal.isArray()) {
                return ClassUtil.isAssignableFrom(actual, "java.util.List")?ArgumentTypes.CONVERSION_DIFFICULTY_FREEMARKER:ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
            } else if(actual.isArray() && ClassUtil.isAssignableFrom(formal, "java.util.List")) {
                return ArgumentTypes.CONVERSION_DIFFICULTY_FREEMARKER;
            } else if(actual === CharacterOrString && (typeof formal === 'string')) {
                return ArgumentTypes.CONVERSION_DIFFICULTY_FREEMARKER;
            } else {
                return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
            }
        } else {
            if(/* isPrimitive */(formal === <any>'__erasedPrimitiveType__')) {
                if(formal === BooleanHelper.TYPE) {
                    return actual === Boolean?ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION:ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
                } else if(formal === DoubleHelper.TYPE && (actual === Number || actual === Number || actual === Number || actual === Number || actual === Number || actual === Number)) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                } else if(formal === IntegerHelper.TYPE && (actual === Number || actual === Number || actual === Number)) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                } else if(formal === LongHelper.TYPE && (actual === Number || actual === Number || actual === Number || actual === Number)) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                } else if(formal === FloatHelper.TYPE && (actual === Number || actual === Number || actual === Number || actual === Number || actual === Number)) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                } else if(formal === CharacterHelper.TYPE) {
                    return actual === String?ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION:ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
                } else if(formal === ByteHelper.TYPE && actual === Number) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                } else if(formal === ShortHelper.TYPE && (actual === Number || actual === Number)) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                } else if(BigDecimal.isAssignableFrom(actual) && ClassUtil.isNumerical(formal)) {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_REFLECTION;
                } else {
                    return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
                }
            } else {
                return ArgumentTypes.CONVERSION_DIFFICULTY_IMPOSSIBLE;
            }
        }
    }
}
ArgumentTypes["__class"] = "freemarker.ext.beans.ArgumentTypes";


export namespace ArgumentTypes {

    /**
     * Symbolizes the class of null (it's missing from Java).
     * @class
     */
    export class Null {
        constructor() {
        }
    }
    Null["__class"] = "freemarker.ext.beans.ArgumentTypes.Null";


    /**
     * Used instead of {link ReflectionCallableMemberDescriptor} when the method is only applicable
     * ({link #isApplicable}) with conversion that Java reflection won't do. It delegates to a
     * {link ReflectionCallableMemberDescriptor}, but it adds the necessary conversions to the invocation methods.
     * @extends CallableMemberDescriptor
     * @class
     */
    export class SpecialConversionCallableMemberDescriptor extends CallableMemberDescriptor {
        callableMemberDesc : ReflectionCallableMemberDescriptor;

        constructor(callableMemberDesc : ReflectionCallableMemberDescriptor) {
            super();
            if(this.callableMemberDesc===undefined) this.callableMemberDesc = null;
            this.callableMemberDesc = callableMemberDesc;
        }

        /**
         * 
         * @param {BeansWrapper} bw
         * @param {Object} obj
         * @param {Array} args
         * @return {*}
         */
        invokeMethod(bw : BeansWrapper, obj : any, args : Array<any>) : TemplateModel {
            this.convertArgsToReflectionCompatible(bw, args);
            return this.callableMemberDesc.invokeMethod(bw, obj, args);
        }

        /**
         * 
         * @param {BeansWrapper} bw
         * @param {Array} args
         * @return {Object}
         */
        invokeConstructor(bw : BeansWrapper, args : Array) : any {
            this.convertArgsToReflectionCompatible(bw, args);
            return this.callableMemberDesc.invokeConstructor(bw, args);
        }

        /**
         * 
         * @return {String}
         */
        getDeclaration() : string {
            return this.callableMemberDesc.getDeclaration();
        }

        /**
         * 
         * @return {boolean}
         */
        isConstructor() : boolean {
            return this.callableMemberDesc.isConstructor();
        }

        /**
         * 
         * @return {boolean}
         */
        isStatic() : boolean {
            return this.callableMemberDesc.isStatic();
        }

        /**
         * 
         * @return {boolean}
         */
        isVarargs() : boolean {
            return this.callableMemberDesc.isVarargs();
        }

        /**
         * 
         * @return {Array}
         */
        getParamTypes() : Array<any> {
            return this.callableMemberDesc.getParamTypes();
        }

        /**
         * 
         * @return {String}
         */
        getName() : string {
            return this.callableMemberDesc.getName();
        }

        convertArgsToReflectionCompatible(bw : BeansWrapper, args : Array<any>) {
            let paramTypes : Array<any> = this.callableMemberDesc.getParamTypes();
            let ln : number = paramTypes.length;
            for(let i : number = 0; i < ln; i++) {
                let paramType : any = paramTypes[i];
                let arg : any = args[i];
                if(arg == null) continue;
                if(paramType.isArray() && (arg != null && (arg instanceof Array))) {
                    args[i] = bw.listToArray(<List><any>arg, paramType, null);
                }
                if((<any>arg.constructor).isArray() && paramType.isAssignableFrom("java.util.List")) {
                    args[i] = bw.arrayToList(arg);
                }
                if(arg != null && arg instanceof <any>CharacterOrString) {
                    if(paramType === String || paramType === String || (!paramType.isAssignableFrom(String) && paramType.isAssignableFrom(String))) {
                        args[i] = (<CharacterOrString>arg).getAsChar();
                    } else {
                        args[i] = (<CharacterOrString>arg).getAsString();
                    }
                }
            }
        }
    }
    SpecialConversionCallableMemberDescriptor["__class"] = "freemarker.ext.beans.ArgumentTypes.SpecialConversionCallableMemberDescriptor";

}




