/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {InputStream} from '../../../java/io/InputStream';
import {StringBuilder} from '../../../java/lang/StringBuilder';
import {Boolean} from '../../../java/lang/Boolean';
import {Map} from "../../../java/util/Map";
import * as isPlainObject from 'is-plain-object';

/**
 *
 * @class
 */
export class ClassUtil {
    constructor() {
    }

    public static getSetter(field: string): string {
        if (field == null) {
            return null;
        }
        if (field.charAt(0) === field.charAt(0).toLowerCase()) {
            return 'set' + field.charAt(0).toUpperCase() + field.substring(1);
        }
        if (field.length > 1 && field.charAt(1) === field.charAt(1).toUpperCase()) {
            return 'set' + field.charAt(0).toLowerCase() + field.substring(1);
        }
        return 'set' + field;
    }

    public static isInstanceOf(instance: any, type: any): boolean {
        if (instance === null || instance === undefined) {
            return false;
        }
        if (typeof type !== 'string') {
            return instance instanceof type;
        }
        if (typeof instance === 'string') {
            return type === 'string';
        }
        if (typeof instance === 'number') {
            return type === 'number';
        }
        if (isPlainObject(instance)) {
            return false;
        }
        if (instance.hasOwnProperty('__class') && instance['__class'] === type) {
            return true;
        }
        if (instance.__proto__ && instance.__proto__.constructor && instance.__proto__.constructor.hasOwnProperty('__class') && instance.__proto__.constructor['__class'] === type) {
            return true;
        }
        return false;
    }

    public static isAssignableFrom(instance: any, type: any): boolean {
        if (instance === null || instance === undefined) {
            return false;
        }
        if (typeof type !== 'string') {
            return instance instanceof type;
        }
        if (typeof instance === 'string') {
            return type === 'string';
        }
        if (typeof instance === 'number') {
            return type === 'number';
        }
        if (isPlainObject(instance)) {
            return false;
        }
        if (instance.hasOwnProperty('__class') && instance['__class'] === type) {
            return true;
        }
        if (instance.hasOwnProperty('__interfaces') && instance['__interfaces'].indexOf(type) !== -1) {
            return true;
        }
        const proto = instance.__proto__;
        if (proto == null) {
            return false;
        }
        const pConstructor = proto.constructor;
        if (pConstructor == null || pConstructor === instance) {
            return false;
        }
        if (pConstructor.hasOwnProperty('__classs') && pConstructor['__class'] === type) {
            return true;
        }
        if (pConstructor.hasOwnProperty('__interfaces') && pConstructor['__interfaces'].indexOf(type) !== -1) {
            return true;
        }
        return ClassUtil.isAssignableFrom(pConstructor, type);
    }

    public static isException(e: any): boolean {
        const proto = e.__proto__;
        if (proto == null) {
            return false;
        }
        const pConstructor = proto.constructor;
        if (pConstructor == null) {
            return false;
        }
        return pConstructor.hasOwnProperty('__class') && pConstructor['__class'].endsWith('Exception');
    }

    /**
     * Similar to {link Class#forName(java.lang.String)}, but attempts to load
     * through the thread context class loader. Only if thread context class
     * loader is inaccessible, or it can't find the class will it attempt to
     * fall back to the class loader that loads the FreeMarker classes.
     * @param {String} className
     * @return {*}
     */
    public static forName(className: string): any {
        if (className.indexOf('.') === -1) {
            return eval(className);
        }
        let rootRelative = '../../../';
        let shortName = ClassUtil.getClassShortName(className);
        let path = rootRelative + className.replace(/\./g, '/');
        return require(path)[shortName];
        // try {
        //     let ctcl : ClassLoader = java.lang.Thread.currentThread().getContextClassLoader();
        //     if(ctcl != null) {
        //         return /* forName */eval(className.split('.').slice(-1)[0]);
        //     }
        // } catch(__e) {
        //     if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0)) {
        //         let e : Error = <Error>__e;
        //
        //     }
        //     if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.SecurityException") >= 0)) {
        //         let e : Error = <Error>__e;
        //
        //     }
        // };
        // return /* forName */eval(className.split('.').slice(-1)[0]);
    }

    public static getClassName(pClass: any): string {
        // if (pClass == null) {
        //     return null;
        // } else if (Array.isArray(pClass)) {
        //     return pClass + "[]";
        // } else {
        //     return (typeof pClass === 'string') ? pClass : (/* getName */(c => c["__class"] ? c["__class"] : c["name"])(pClass));
        // }
        if (pClass == null) {
            return null;
        }
        if (Array.isArray(pClass)) {
            if (pClass.length === 0) {
                return pClass + "[]";
            } else {
                return ClassUtil.getClassName(pClass[0]) + '[]';
            }
        }
        let className: string = null;
        if (typeof pClass === 'string') {
            className = pClass;
        } else if (pClass.hasOwnProperty('__class')) {
            className = pClass['__class'];
        } else if (pClass.hasOwnProperty('name')) {
            className = pClass['name'];
        }
        return className;
    }

    /**
     * get short class name, like java Class.getShortName();
     * @param pClass
     * @returns {any}
     */
    public static getClassShortName(pClass: any) {
        const className: string = ClassUtil.getClassName(pClass);
        if (className != null) {
            let lastDotIndex: number = className.lastIndexOf('.');
            if (lastDotIndex === -1) {
                return className;
            }
            return className.substring(lastDotIndex + 1);
        }
        throw new Error();
    }

    /**
     * freemarker's getShortClassName
     * @param pClass
     * @param {boolean} shortenFreeMarkerClasses
     * @returns {string}
     */
    public static getShortClassName(pClass: any, shortenFreeMarkerClasses: boolean = false): string {
        if (pClass == null) {
            return null;
        } else if (Array.isArray(pClass)) {
            return pClass + "[]";
        } else {
            let cn: string = (typeof pClass === 'string') ? pClass : (/* getName */(c => c["__class"] ? c["__class"] : c["name"])(pClass));
            if (cn == null) {
                return null;
            }
            if (cn.startsWith("java.lang.") || cn.startsWith("java.util.")) {
                return cn.substring(10);
            } else {
                if (shortenFreeMarkerClasses) {
                    if (cn.startsWith("freemarker.template.")) {
                        return "f.t" + cn.substring(19);
                    } else if (cn.startsWith("freemarker.ext.beans.")) {
                        return "f.e.b" + cn.substring(20);
                    } else if (cn.startsWith("freemarker.core.")) {
                        return "f.c" + cn.substring(15);
                    } else if (cn.startsWith("freemarker.ext.")) {
                        return "f.e" + cn.substring(14);
                    } else if (cn.startsWith("freemarker.")) {
                        return "f" + cn.substring(10);
                    }
                }
                return cn;
            }
        }
    }

    public static getShortClassNameOfObject(obj: any, shortenFreeMarkerClasses: boolean = false): string {
        if (obj == null) {
            return "Null";
        } else {
            return ClassUtil.getShortClassName((<any>obj.constructor), shortenFreeMarkerClasses);
        }
    }

    /**
     * Returns the {link TemplateModel} interface that is the most characteristic of the object, or {@code null}.
     * @param {*} tm
     * @return {*}
     * @private
     */
    static getPrimaryTemplateModelInterface(tm: /*TemplateModel*/any): any {
        const BeanModel = require('../../ext/beans/BeanModel').BeanModel;
        if (tm != null && tm instanceof <any>BeanModel) {
            if (tm != null && tm instanceof <any>(require('../../ext/beans/CollectionModel').CollectionModel)) {
                return "freemarker.template.TemplateSequenceModel";
            } else if ((tm != null && tm instanceof <any>(require('../../ext/beans/IteratorModel').IteratorModel)) || (tm != null && tm instanceof <any>(require('../../ext/beans/EnumerationModel').EnumerationModel))) {
                return "freemarker.template.TemplateCollectionModel";
            } else if (tm != null && tm instanceof <any>(require('../../ext/beans/MapModel').MapModel)) {
                return "freemarker.template.TemplateHashModelEx";
            } else if (tm != null && tm instanceof <any>(require('../../ext/beans/NumberModel').NumberModel)) {
                return "freemarker.template.TemplateNumberModel";
            } else if (tm != null && tm instanceof <any>(require('../../ext/beans/BooleanModel').BooleanModel)) {
                return "freemarker.template.TemplateBooleanModel";
            } else if (tm != null && tm instanceof <any>(require('../../ext/beans/DateModel').DateModel)) {
                return "freemarker.template.TemplateDateModel";
            } else if (tm != null && tm instanceof <any>(require('../../ext/beans/StringModel').StringModel)) {
                let wrapped: any = (<any>tm).getWrappedObject();
                return (typeof wrapped === 'string') ? "freemarker.template.TemplateScalarModel" : ((tm != null && ClassUtil.isAssignableFrom(tm, "freemarker.template.TemplateHashModelEx")) ? "freemarker.template.TemplateHashModelEx" : null);
            } else {
                return null;
            }
        } else if ((tm != null && tm instanceof <any>(require('../../ext/beans/SimpleMethodModel').SimpleMethodModel)) || (tm != null && tm instanceof <any>(require('../../ext/beans/OverloadedMethodsModel').OverloadedMethodsModel))) {
            return "freemarker.template.TemplateMethodModelEx";
        } else {
            return null;
        }
    }

    static appendTemplateModelTypeName(sb: StringBuilder, typeNamesAppended: Array<any>, cl: any) {
        // const Environment = require('../../core/Environment');
        // let initalLength : number = sb.length();
        // if("freemarker.template.TemplateNodeModelEx".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "extended node");
        // } else if("freemarker.template.TemplateNodeModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "node");
        // }
        // if("freemarker.template.TemplateDirectiveModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "directive");
        // } else if("freemarker.template.TemplateTransformModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "transform");
        // }
        // if("freemarker.template.TemplateSequenceModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "sequence");
        // } else if("freemarker.template.TemplateCollectionModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "freemarker.template.TemplateCollectionModelEx".isAssignableFrom(cl)?"extended_collection":"collection");
        // } else if("freemarker.template.TemplateModelIterator".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "iterator");
        // }
        // if("freemarker.template.TemplateMethodModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "method");
        // }
        // if(Environment.Namespace.isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "namespace");
        // } else if("freemarker.template.TemplateHashModelEx".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "extended_hash");
        // } else if("freemarker.template.TemplateHashModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "hash");
        // }
        // if("freemarker.template.TemplateNumberModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "number");
        // }
        // if("freemarker.template.TemplateDateModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "date_or_time_or_datetime");
        // }
        // if("freemarker.template.TemplateBooleanModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "boolean");
        // }
        // if("freemarker.template.TemplateScalarModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "string");
        // }
        // if("freemarker.core.TemplateMarkupOutputModel".isAssignableFrom(cl)) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "markup_output");
        // }
        // if(sb.length() === initalLength) {
        //     ClassUtil.appendTypeName(sb, typeNamesAppended, "misc_template_model");
        // }
        throw new Error();
    }

    static getUnwrappedClass(tm: /*TemplateModel*/any): any {
        let unwrapped: any;
        try {
            if (tm != null && ClassUtil.isAssignableFrom(tm, "freemarker.ext.util.WrapperTemplateModel")) {
                unwrapped = (<any>tm).getWrappedObject();
            } else if (tm != null && ClassUtil.isAssignableFrom(tm, "freemarker.template.AdapterTemplateModel")) {
                unwrapped = (<any>tm).getAdaptedObject(Object);
            } else {
                unwrapped = null;
            }
        } catch (e) {
            unwrapped = null;
        }
        return unwrapped != null ? (<any>unwrapped.constructor) : null;
    }

    static appendTypeName(sb: StringBuilder, typeNamesAppended: Array<any>, name: string) {
        if (!/* contains */(typeNamesAppended.indexOf(<any>(name)) >= 0)) {
            if (sb.length() !== 0) sb.append("+");
            sb.append(name);
            /* add */
            ((s, e) => {
                if (s.indexOf(e) == -1) {
                    s.push(e);
                    return true;
                } else {
                    return false;
                }
            })(typeNamesAppended, name);
        }
    }

    /**
     * Returns the type description of a value with FTL terms (not plain class name), as it should be used in
     * type-related error messages and for debugging purposes. The exact format is not specified and might change over
     * time, but currently it's something like {@code "string (wrapper: f.t.SimpleScalar)"} or
     * {@code "sequence+hash+string (ArrayList wrapped into f.e.b.CollectionModel)"}.
     *
     * @since 2.3.20
     * @param {*} tm
     * @return {String}
     */
    public static getFTLTypeDescription(tm: /*TemplateModel*/any): string {
        const Macro = require('../../core/Macro').Macro;
        if (tm == null) {
            return "Null";
        } else {
            let typeNamesAppended: Array<any> = <any>([]);
            let sb: StringBuilder = new StringBuilder("");
            let primaryInterface: any = ClassUtil.getPrimaryTemplateModelInterface(tm);
            if (primaryInterface != null) {
                ClassUtil.appendTemplateModelTypeName(sb, typeNamesAppended, primaryInterface);
            }
            if (tm != null && tm instanceof <any>Macro) {
                ClassUtil.appendTypeName(sb, typeNamesAppended, (<any>tm).isFunction() ? "function" : "macro");
            }
            ClassUtil.appendTemplateModelTypeName(sb, typeNamesAppended, (<any>tm.constructor));
            let javaClassName: string;
            let unwrappedClass: any = ClassUtil.getUnwrappedClass(tm);
            if (unwrappedClass != null) {
                javaClassName = ClassUtil.getShortClassName(unwrappedClass, true);
            } else {
                javaClassName = null;
            }
            sb.append(" (");
            let modelClassName: string = ClassUtil.getShortClassName((<any>tm.constructor), true);
            if (javaClassName == null) {
                sb.append("wrapper: ");
                sb.append(modelClassName);
            } else {
                sb.append(javaClassName);
                sb.append(" wrapped into ");
                sb.append(modelClassName);
            }
            sb.append(")");
            return sb.toString();
        }
    }

    /**
     * Gets the wrapper class for a primitive class, like {link Integer} for {@code int}, also returns {link Void}
     * for {@code void}.
     *
     * @param {*} primitiveClass A {link Class} like {@code int.type}, {@code boolean.type}, etc. If it's not a primitive
     * class, or it's {@code null}, then the parameter value is returned as is. Note that performance-wise the
     * method assumes that it's a primitive class.
     * @since 2.3.21
     * @return {*}
     */
    public static primitiveClassToBoxingClass(primitiveClass: any): any {
        if (primitiveClass === Number) return Number;
        if (primitiveClass === Boolean) return Boolean;
        if (primitiveClass === Number) return Number;
        if (primitiveClass === Number) return Number;
        if (primitiveClass === String) return String;
        if (primitiveClass === Number) return Number;
        if (primitiveClass === Number) return Number;
        if (primitiveClass === Number) return Number;
        if (primitiveClass === undefined/*void*/) return "java.lang.Void";
        return primitiveClass;
    }

    /**
     * The exact reverse of {link #primitiveClassToBoxingClass}.
     *
     * @since 2.3.21
     * @param {*} boxingClass
     * @return {*}
     */
    public static boxingClassToPrimitiveClass(boxingClass: any): any {
        if (boxingClass === Number) return Number;
        if (boxingClass === Boolean) return Boolean;
        if (boxingClass === Number) return Number;
        if (boxingClass === Number) return Number;
        if (boxingClass === String) return String;
        if (boxingClass === Number) return Number;
        if (boxingClass === Number) return Number;
        if (boxingClass === Number) return Number;
        if (boxingClass === "java.lang.Void") return undefined;
        return boxingClass;
    }

    /**
     * Tells if a type is numerical; works both for primitive types and classes.
     *
     * @param {*} type can't be {@code null}
     * @since 2.3.21
     * @return {boolean}
     */
    public static isNumerical(type: any): boolean {
        return !isNaN(type);
        // return Number.isAssignableFrom(type) || /* isPrimitive */(type === <any>'__erasedPrimitiveType__') && type !== 'boolean' && type !== 'string' && type !== undefined;
    }

    public static getReasourceAsStream$java_lang_Class$java_lang_String$boolean(baseClass: any, resource: string, optional: boolean): InputStream {
        // let ins : InputStream;
        // try {
        //     ins = baseClass.getResourceAsStream(resource);
        // } catch(e) {
        //     let url : URL = baseClass.getResource(resource);
        //     ins = url != null?url.openStream():null;
        // };
        // if(!optional) {
        //     ClassUtil.checkInputStreamNotNull(ins, baseClass, resource);
        // }
        // return ins;
        throw new Error();
    }

    /**
     * Very similar to {link Class#getResourceAsStream(String)}, but throws {link IOException} instead of returning
     * {@code null} if {@code optional} is {@code false}, and attempts to work around "IllegalStateException: zip file
     * closed" and similar {@code sun.net.www.protocol.jar.JarURLConnection}-related glitches. These are caused by bugs
     * outside of FreeMarker. Note that in cases where the JAR resource becomes broken concurrently, similar errors can
     * still occur later when the {link InputStream} is read ({link #loadProperties(Class, String)} works that
     * around as well).
     *
     * @return {InputStream} If {@code optional} is {@code false}, it's never {@code null}, otherwise {@code null} indicates that the
     * resource doesn't exist.
     * @throws IOException If the resource wasn't found, or other {link IOException} occurs.
     * @since 2.3.27
     * @param {*} baseClass
     * @param {String} resource
     * @param {boolean} optional
     */
    public static getReasourceAsStream(baseClass?: any, resource?: any, optional?: any): any {
        // if(((baseClass != null) || baseClass === null) && ((typeof resource === 'string') || resource === null) && ((typeof optional === 'boolean') || optional === null)) {
        //     return <any>ClassUtil.getReasourceAsStream$java_lang_Class$java_lang_String$boolean(baseClass, resource, optional);
        // } else if(((baseClass != null && baseClass instanceof <any>ClassLoader) || baseClass === null) && ((typeof resource === 'string') || resource === null) && ((typeof optional === 'boolean') || optional === null)) {
        //     return <any>ClassUtil.getReasourceAsStream$java_lang_ClassLoader$java_lang_String$boolean(baseClass, resource, optional);
        // } else throw new Error('invalid overload');
        throw new Error();
    }

    public static getReasourceAsStream$java_lang_ClassLoader$java_lang_String$boolean(classLoader: any/*ClassLoader*/, resource: string, optional: boolean): InputStream {
        // let ins : InputStream;
        // try {
        //     ins = classLoader.getResourceAsStream(resource);
        // } catch(e) {
        //     let url : URL = classLoader.getResource(resource);
        //     ins = url != null?url.openStream():null;
        // };
        // if(ins == null && !optional) {
        //     throw Object.defineProperty(new Error("Class-loader resource not found (shown quoted): " + StringUtil.jQuote$java_lang_Object(resource) + ". The base ClassLoader was: " + classLoader), '__classes', { configurable: true, value: ['java.lang.Throwable','java.io.IOException','java.lang.Object','java.lang.Exception'] });
        // }
        // return ins;
        throw new Error();
    }

    /**
     * Loads a class loader resource into a {link Properties}; tries to work around "zip file closed" and related
     * {@code sun.net.www.protocol.jar.JarURLConnection} glitches.
     *
     * @since 2.3.27
     * @param {*} baseClass
     * @param {String} resource
     * @return {Properties}
     */
    public static loadProperties(baseClass: any, resource: string): Map<any, any> {
        // let props : Map<any, any> = new Map();
        // let ins : InputStream = null;
        // try {
        //     try {
        //         ins = baseClass.getResourceAsStream(resource);
        //     } catch(e) {
        //         throw new ClassUtil.MaybeZipFileClosedException();
        //     };
        //     ClassUtil.checkInputStreamNotNull(ins, baseClass, resource);
        //     try {
        //         props.load(ins);
        //     } catch(e) {
        //         throw new ClassUtil.MaybeZipFileClosedException();
        //     } finally {
        //         try {
        //             ins.close();
        //         } catch(e) {
        //         };
        //         ins = null;
        //     };
        // } catch(e) {
        //     let url : URL = baseClass.getResource(resource);
        //     ins = url != null?url.openStream():null;
        //     ClassUtil.checkInputStreamNotNull(ins, baseClass, resource);
        //     props.load(ins);
        // } finally {
        //     if(ins != null) {
        //         try {
        //             ins.close();
        //         } catch(e) {
        //         };
        //     }
        // };
        // return props;
        throw new Error();
    }

    static checkInputStreamNotNull(ins: InputStream, baseClass: any, resource: string) {
        if (ins == null) {
            throw Object.defineProperty(new Error("Class-loader resource not found (shown quoted): " + (require('./StringUtil').StringUtil).jQuote$java_lang_Object(resource) + ". The base class was " + /* getName */(c => c["__class"] ? c["__class"] : c["name"])(baseClass) + "."), '__classes', {
                configurable: true,
                value: ['java.lang.Throwable', 'java.io.IOException', 'java.lang.Object', 'java.lang.Exception']
            });
        }
    }
}

ClassUtil["__class"] = "freemarker.template.utility.ClassUtil";


export namespace ClassUtil {

    /**
     * Used internally to work around some JarURLConnection glitches
     * @extends Error
     * @class
     */
    export class MaybeZipFileClosedException extends Error {
        constructor() {
            super();
            (<any>Object).setPrototypeOf(this, MaybeZipFileClosedException.prototype);
        }
    }

    MaybeZipFileClosedException["__class"] = "freemarker.template.utility.ClassUtil.MaybeZipFileClosedException";
    MaybeZipFileClosedException["__interfaces"] = ["java.io.Serializable"];


}



