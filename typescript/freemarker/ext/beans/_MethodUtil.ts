/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ClassUtil} from '../../template/utility/ClassUtil';
import {StringBuilder} from '../../../java/lang/StringBuilder';
import {CallableMemberDescriptor} from './CallableMemberDescriptor';
import {Character} from '../../../java/lang/Character';

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * This class is to work around the lack of module system in Java, i.e., so that other FreeMarker packages can
 * access things inside this package that users shouldn't.
 * @class
 */
export class _MethodUtil {
    constructor() {
    }

    /**
     * Determines whether the type given as the 1st argument is convertible to the type given as the 2nd argument
     * for method call argument conversion. This follows the rules of the Java reflection-based method call, except
     * that since we don't have the value here, a boxed class is never seen as convertible to a primitive type.
     * 
     * @return {number} 0 means {@code false}, non-0 means {@code true}.
     * That is, 0 is returned less specificity or incomparable specificity, also when if
     * then method was aborted because of {@code ifHigherThan}.
     * The absolute value of the returned non-0 number symbolizes how more specific it is:
     * <ul>
     * <li>1: The two classes are identical</li>
     * <li>2: The 1st type is primitive, the 2nd type is the corresponding boxing class</li>
     * <li>3: Both classes are numerical, and one is convertible into the other with widening conversion.
     * E.g., {@code int} is convertible to {@code long} and {#code double}, hence {@code int} is more
     * specific.
     * This ignores primitive VS boxed mismatches, except that a boxed class is never seen as
     * convertible to a primitive class.</li>
     * <li>4: One class is {@code instanceof} of the other, but they aren't identical.
     * But unlike in Java, primitive numerical types are {@code instanceof} {link Number} here.</li>
     * </ul>
     * @param {*} specific
     * @param {*} generic
     * @param {boolean} bugfixed
     * @param {number} ifHigherThan
     */
    public static isMoreOrSameSpecificParameterType(specific : any, generic : any, bugfixed : boolean, ifHigherThan : number) : number {
        // if(ifHigherThan >= 4) return 0;
        // if(generic.isAssignableFrom(specific)) {
        //     return generic === specific?1:4;
        // } else {
        //     let specificIsPrim : boolean = /* isPrimitive */(specific === <any>'__erasedPrimitiveType__');
        //     let genericIsPrim : boolean = /* isPrimitive */(generic === <any>'__erasedPrimitiveType__');
        //     if(specificIsPrim) {
        //         if(genericIsPrim) {
        //             if(ifHigherThan >= 3) return 0;
        //             return _MethodUtil.isWideningPrimitiveNumberConversion(specific, generic)?3:0;
        //         } else {
        //             if(bugfixed) {
        //                 let specificAsBoxed : any = ClassUtil.primitiveClassToBoxingClass(specific);
        //                 if(specificAsBoxed === generic) {
        //                     return 2;
        //                 } else if(generic.isAssignableFrom(specificAsBoxed)) {
        //                     return 4;
        //                 } else if(ifHigherThan >= 3) {
        //                     return 0;
        //                 } else if(Number.isAssignableFrom(specificAsBoxed) && Number.isAssignableFrom(generic)) {
        //                     return _MethodUtil.isWideningBoxedNumberConversion(specificAsBoxed, generic)?3:0;
        //                 } else {
        //                     return 0;
        //                 }
        //             } else {
        //                 return 0;
        //             }
        //         }
        //     } else {
        //         if(ifHigherThan >= 3) return 0;
        //         if(bugfixed && !genericIsPrim && Number.isAssignableFrom(specific) && Number.isAssignableFrom(generic)) {
        //             return _MethodUtil.isWideningBoxedNumberConversion(specific, generic)?3:0;
        //         } else {
        //             return 0;
        //         }
        //     }
        // }
        throw new Error();
    }

    /*private*/ static isWideningPrimitiveNumberConversion(source : any, target : any) : boolean {
        // if(target === javaemul.internal.ShortHelper.TYPE && (source === javaemul.internal.ByteHelper.TYPE)) {
        //     return true;
        // } else if(target === javaemul.internal.IntegerHelper.TYPE && (source === javaemul.internal.ShortHelper.TYPE || source === javaemul.internal.ByteHelper.TYPE)) {
        //     return true;
        // } else if(target === javaemul.internal.LongHelper.TYPE && (source === javaemul.internal.IntegerHelper.TYPE || source === javaemul.internal.ShortHelper.TYPE || source === javaemul.internal.ByteHelper.TYPE)) {
        //     return true;
        // } else if(target === javaemul.internal.FloatHelper.TYPE && (source === javaemul.internal.LongHelper.TYPE || source === javaemul.internal.IntegerHelper.TYPE || source === javaemul.internal.ShortHelper.TYPE || source === javaemul.internal.ByteHelper.TYPE)) {
        //     return true;
        // } else return target === javaemul.internal.DoubleHelper.TYPE && (source === javaemul.internal.FloatHelper.TYPE || source === javaemul.internal.LongHelper.TYPE || source === javaemul.internal.IntegerHelper.TYPE || source === javaemul.internal.ShortHelper.TYPE || source === javaemul.internal.ByteHelper.TYPE);
        throw new Error();
    }

    /*private*/ static isWideningBoxedNumberConversion(source : any, target : any) : boolean {
        // if(target === Number && source === Number) {
        //     return true;
        // } else if(target === Number && (source === Number || source === Number)) {
        //     return true;
        // } else if(target === Number && (source === Number || source === Number || source === Number)) {
        //     return true;
        // } else if(target === Number && (source === Number || source === Number || source === Number || source === Number)) {
        //     return true;
        // } else return target === Number && (source === Number || source === Number || source === Number || source === Number || source === Number);
        throw new Error();
    }

    /**
     * Attention, this doesn't handle primitive classes correctly, nor numerical conversions.
     * @param {*} c1
     * @param {*} c2
     * @return {Set}
     */
    public static getAssignables(c1 : any, c2 : any) : Array<any> {
        let s : Array<any> = <any>([]);
        _MethodUtil.collectAssignables(c1, c2, s);
        return s;
    }

    /*private*/ static collectAssignables(c1 : any, c2 : any, s : Array<any>) {
        if(c1.isAssignableFrom(c2)) {
            /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(s, c1);
        }
        let sc : any = c1.getSuperclass();
        if(sc != null) {
            _MethodUtil.collectAssignables(sc, c2, s);
        }
        let itf : Array<any> = c1.getInterfaces();
        for(let i : number = 0; i < itf.length; ++i) {
            _MethodUtil.collectAssignables(itf[i], c2, s);
        }
    }

    public static getParameterTypes(member : /*Member*/any) : Array<any> {
        // if(member != null && (member instanceof Function)) {
        //     return (<Function><any>member).getParameterTypes();
        // }
        // if(member != null && member instanceof <any>Constructor) {
        //     return (<Constructor><any>member).getParameterTypes();
        // }
        // throw Object.defineProperty(new Error("\"member\" must be Method or Constructor"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        throw new Error();
    }

    public static isVarargs(member : /*Member*/any) : boolean {
        // if(member != null && (member instanceof Function)) {
        //     return (<Function><any>member).isVarArgs();
        // }
        // if(member != null && member instanceof <any>Constructor) {
        //     return (<Constructor><any>member).isVarArgs();
        // }
        // throw new BugException();
        throw new Error();
    }

    /**
     * Returns a more streamlined method or constructor description than {@code Member.toString()} does.
     * @param {Member} member
     * @return {String}
     */
    public static toString(member : /*Member*/any) : string {
        if(!((member != null && (member instanceof Function)) /*|| (member != null && member instanceof <any>Constructor)*/)) {
            throw Object.defineProperty(new Error("\"member\" must be a Method or Constructor"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        let sb : StringBuilder = new StringBuilder("");
        /*if((member.getModifiers() & Modifier.STATIC) !== 0) {
            sb.append("static ");
        }*/
        let className : string = ClassUtil.getShortClassName(member.getDeclaringClass());
        if(className != null) {
            sb.append(className);
            sb.append('.');
        }
        sb.append(member.getName());
        sb.append('(');
        let paramTypes : Array<any> = _MethodUtil.getParameterTypes(member);
        for(let i : number = 0; i < paramTypes.length; i++) {
            if(i !== 0) sb.append(", ");
            let paramTypeDecl : string = ClassUtil.getShortClassName(paramTypes[i]);
            if(i === paramTypes.length - 1 && /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(paramTypeDecl, "[]") && _MethodUtil.isVarargs(member)) {
                sb.append(paramTypeDecl, 0, paramTypeDecl.length - 2);
                sb.append("...");
            } else {
                sb.append(paramTypeDecl);
            }
        }
        sb.append(')');
        return sb.toString();
    }

    public static invocationErrorMessageStart$java_lang_reflect_Member(member : /*Member*/any) : Array<any> {
        // return _MethodUtil.invocationErrorMessageStart$java_lang_Object$boolean(member, (member != null && member instanceof <any>Constructor));
        throw new Error();
    }

    public static invocationErrorMessageStart$java_lang_Object$boolean(member : any, isConstructor : boolean) : Array<any> {
        return ["Java ", isConstructor?"constructor ":"method ", new (require('../../core/_DelayedJQuote')._DelayedJQuote)(member)];
    }

    public static invocationErrorMessageStart(member? : any, isConstructor? : any) : any {
        if(((member != null) || member === null) && ((typeof isConstructor === 'boolean') || isConstructor === null)) {
            return <any>_MethodUtil.invocationErrorMessageStart$java_lang_Object$boolean(member, isConstructor);
        } else if(((member != null && (member["__interfaces"] != null && member["__interfaces"].indexOf("java.lang.reflect.Member") >= 0 || member.constructor != null && member.constructor["__interfaces"] != null && member.constructor["__interfaces"].indexOf("java.lang.reflect.Member") >= 0)) || member === null) && isConstructor === undefined) {
            return <any>_MethodUtil.invocationErrorMessageStart$java_lang_reflect_Member(member);
        } else throw new Error('invalid overload');
    }

    public static newInvocationTemplateModelException$java_lang_Object$java_lang_reflect_Member$java_lang_Throwable(object : any, member : /*Member*/any, e : Error) : /*TemplateModelException*/any {
        // return _MethodUtil.newInvocationTemplateModelException$java_lang_Object$java_lang_Object$boolean$boolean$java_lang_Throwable(object, member, (member.getModifiers() & Modifier.STATIC) !== 0, (member != null && member instanceof <any>Constructor), e);
        throw new Error();
    }

    public static newInvocationTemplateModelException$java_lang_Object$freemarker_ext_beans_CallableMemberDescriptor$java_lang_Throwable(object : any, callableMemberDescriptor : CallableMemberDescriptor, e : Error) : /*TemplateModelException*/any {
        // return _MethodUtil.newInvocationTemplateModelException$java_lang_Object$java_lang_Object$boolean$boolean$java_lang_Throwable(object, new _MethodUtil._MethodUtil$0(callableMemberDescriptor), callableMemberDescriptor.isStatic(), callableMemberDescriptor.isConstructor(), e);
        throw new Error();
    }

    public static newInvocationTemplateModelException$java_lang_Object$java_lang_Object$boolean$boolean$java_lang_Throwable(parentObject : any, member : any, isStatic : boolean, isConstructor : boolean, e : Error) : /*TemplateModelException*/any {
        // while((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.reflect.InvocationTargetException") >= 0))) {
        //     let cause : Error = (<Error>e).getTargetException();
        //     if(cause != null) {
        //         e = cause;
        //     } else {
        //         break;
        //     }
        // };
        // return new _TemplateModelException(e, _MethodUtil.invocationErrorMessageStart$java_lang_Object$boolean(member, isConstructor), " threw an exception", isStatic || isConstructor?"":[" when invoked on ", (<any>parentObject.constructor), " object ", new _DelayedJQuote(parentObject)], "; see cause exception in the Java stack trace.");
        throw new Error();
    }

    public static newInvocationTemplateModelException(parentObject? : any, member? : any, isStatic? : any, isConstructor? : any, e? : any) : any {
        // if(((parentObject != null) || parentObject === null) && ((member != null) || member === null) && ((typeof isStatic === 'boolean') || isStatic === null) && ((typeof isConstructor === 'boolean') || isConstructor === null) && ((e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.Throwable") >= 0) || e != null && e instanceof <any>Error) || e === null)) {
        //     return <any>_MethodUtil.newInvocationTemplateModelException$java_lang_Object$java_lang_Object$boolean$boolean$java_lang_Throwable(parentObject, member, isStatic, isConstructor, e);
        // } else if(((parentObject != null) || parentObject === null) && ((member != null && (member["__interfaces"] != null && member["__interfaces"].indexOf("java.lang.reflect.Member") >= 0 || member.constructor != null && member.constructor["__interfaces"] != null && member.constructor["__interfaces"].indexOf("java.lang.reflect.Member") >= 0)) || member === null) && ((isStatic != null && (isStatic["__classes"] && isStatic["__classes"].indexOf("java.lang.Throwable") >= 0) || isStatic != null && isStatic instanceof <any>Error) || isStatic === null) && isConstructor === undefined && e === undefined) {
        //     return <any>_MethodUtil.newInvocationTemplateModelException$java_lang_Object$java_lang_reflect_Member$java_lang_Throwable(parentObject, member, isStatic);
        // } else if(((parentObject != null) || parentObject === null) && ((member != null && member instanceof <any>CallableMemberDescriptor) || member === null) && ((isStatic != null && (isStatic["__classes"] && isStatic["__classes"].indexOf("java.lang.Throwable") >= 0) || isStatic != null && isStatic instanceof <any>Error) || isStatic === null) && isConstructor === undefined && e === undefined) {
        //     return <any>_MethodUtil.newInvocationTemplateModelException$java_lang_Object$freemarker_ext_beans_CallableMemberDescriptor$java_lang_Throwable(parentObject, member, isStatic);
        // } else throw new Error('invalid overload');
        throw new Error();
    }

    /**
     * Extracts the JavaBeans property from a reader method name, or returns {@code null} if the method name doesn't
     * look like a reader method name.
     * @param {String} name
     * @param {*} returnType
     * @return {String}
     */
    public static getBeanPropertyNameFromReaderMethodName(name : string, returnType : any) : string {
        let start : number;
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(name, "get")) {
            start = 3;
        } else if(returnType === Boolean && /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(name, "is")) {
            start = 2;
        } else {
            return null;
        }
        let ln : number = name.length;
        if(start === ln) {
            return null;
        }
        let c1 : string = name.charAt(start);
        return start + 1 < ln && Character.isUpperCase(name.charAt(start + 1)) && Character.isUpperCase(c1)?name.substring(start):new StringBuilder("").append(Character.toLowerCase(c1)).append(name, start + 1, ln).toString();
    }
}
_MethodUtil["__class"] = "freemarker.ext.beans._MethodUtil";


export namespace _MethodUtil {

    // export class _MethodUtil$0 extends _DelayedConversionToString {
    //     /**
    //      *
    //      * @param {Object} callableMemberDescriptor
    //      * @return {String}
    //      */
    //     doConversion(callableMemberDescriptor : any) : string {
    //         return (<CallableMemberDescriptor>callableMemberDescriptor).getDeclaration();
    //     }
    //
    //     constructor(__arg0: any) {
    //         super(__arg0);
    //     }
    // }

}




