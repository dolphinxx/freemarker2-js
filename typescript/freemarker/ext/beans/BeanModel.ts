/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CollectionAndSequence} from '../../core/CollectionAndSequence';
import {_DelayedFTLTypeDescription} from '../../core/_DelayedFTLTypeDescription';
import {_DelayedJQuote} from '../../core/_DelayedJQuote';
import {_TemplateModelException} from '../../core/_TemplateModelException';
import {ModelFactory} from '../util/ModelFactory';
import {WrapperTemplateModel} from '../util/WrapperTemplateModel';
import {Logger} from '../../log/Logger';
import {AdapterTemplateModel} from '../../template/AdapterTemplateModel';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {SimpleScalar} from '../../template/SimpleScalar';
import {SimpleSequence} from '../../template/SimpleSequence';
import {TemplateCollectionModel} from '../../template/TemplateCollectionModel';
import {TemplateHashModelEx} from '../../template/TemplateHashModelEx';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelException} from '../../template/TemplateModelException';
import {TemplateModelIterator} from '../../template/TemplateModelIterator';
import {TemplateModelWithAPISupport} from '../../template/TemplateModelWithAPISupport';
import {TemplateScalarModel} from '../../template/TemplateScalarModel';
import {StringUtil} from '../../template/utility/StringUtil';
import {BeansWrapper} from './BeansWrapper';
import {ClassIntrospector} from './ClassIntrospector';
import {InvalidPropertyException} from './InvalidPropertyException';
import {Set} from '../../../java/util/Set';
import {Map} from "../../../java/util/Map";

/**
 * Creates a new model that wraps the specified object. Note that there are
 * specialized subclasses of this class for wrapping arrays, collections,
 * enumeration, iterators, and maps. Note also that the superclass can be
 * used to wrap String objects if only scalar functionality is needed. You
 * can also choose to delegate the choice over which model class is used for
 * wrapping to {link BeansWrapper#wrap(Object)}.
 * 
 * @param {Object} object  the object to wrap into a model.
 * @param {BeansWrapper} wrapper the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 */
export class BeanModel implements TemplateHashModelEx, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(BeanModel.LOG == null) BeanModel.LOG = Logger.getLogger("freemarker.beans"); return BeanModel.LOG; };

    object : any;

    wrapper : BeansWrapper;

    static UNKNOWN : TemplateModel; public static UNKNOWN_$LI$() : TemplateModel { if(BeanModel.UNKNOWN == null) BeanModel.UNKNOWN = new SimpleScalar("UNKNOWN"); return BeanModel.UNKNOWN; };

    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(BeanModel.FACTORY == null) BeanModel.FACTORY = new BeanModel.BeanModel$0(); return BeanModel.FACTORY; };

    /*private*/ memberCache : Map<any, any>;

    public constructor(object : any, wrapper : any, introspectNow? : any) {
        if(introspectNow === undefined) {
            introspectNow = true;
        }
        this.object = object;
        this.wrapper = wrapper;
        // if(introspectNow && object != null) {
        //     this.wrapper.getClassIntrospector().get(object.constructor);
        // }
    }

    public get$java_lang_String(key : string) : TemplateModel {
        if(this.object.hasOwnProperty(key)) {
            const value = this.object[key];
            if(typeof value === 'function') {
                return new (require('./SimpleMethodModel').SimpleMethodModel)(this.object, value, null, this.wrapper)
            }
            return this.wrapper.wrap(value);
        }
        // let clazz : any = (<any>this.object.constructor);
        // let classInfo : Map<any, any> = this.wrapper.getClassIntrospector().get(clazz);
        // let retval : TemplateModel = null;
        // try {
        //     if(this.wrapper.isMethodsShadowItems()) {
        //         let fd : any = /* get */classInfo.get(key);
        //         if(fd != null) {
        //             retval = this.invokeThroughDescriptor(fd, classInfo);
        //         } else {
        //             retval = this.invokeGenericGet(classInfo, clazz, key);
        //         }
        //     } else {
        //         let model : TemplateModel = this.invokeGenericGet(classInfo, clazz, key);
        //         let nullModel : TemplateModel = this.wrapper.wrap$java_lang_Object(null);
        //         if(model !== nullModel && model !== BeanModel.UNKNOWN_$LI$()) {
        //             return model;
        //         }
        //         let fd : any = /* get */classInfo.get(key);
        //         if(fd != null) {
        //             retval = this.invokeThroughDescriptor(fd, classInfo);
        //             if(retval === BeanModel.UNKNOWN_$LI$() && model === nullModel) {
        //                 retval = nullModel;
        //             }
        //         }
        //     }
        //     if(retval === BeanModel.UNKNOWN_$LI$()) {
        //         if(this.wrapper.isStrict()) {
        //             throw new InvalidPropertyException("No such bean property: " + key);
        //         } else if(BeanModel.LOG_$LI$().isDebugEnabled()) {
        //             this.logNoSuchKey(key, classInfo);
        //         }
        //         retval = this.wrapper.wrap$java_lang_Object(null);
        //     }
        //     return retval;
        // } catch(__e) {
        //     if(__e != null && __e instanceof <any>TemplateModelException) {
        //         let e : TemplateModelException = <TemplateModelException>__e;
        //         throw e;
        //
        //     }
        //     if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
        //         let e : Error = <Error>__e;
        //         throw new _TemplateModelException(e, "An error has occurred when reading existing sub-variable ", new _DelayedJQuote(key), "; see cause exception! The type of the containing value was: ", new _DelayedFTLTypeDescription(this));
        //
        //     }
        // }
    }

    /**
     * Uses Beans introspection to locate a property or method with name
     * matching the key name. If a method or property is found, it's wrapped
     * into {link freemarker.template.TemplateMethodModelEx} (for a method or
     * indexed property), or evaluated on-the-fly and the return value wrapped
     * into appropriate model (for a non-indexed property) Models for various
     * properties and methods are cached on a per-class basis, so the costly
     * introspection is performed only once per property or method of a class.
     * (Side-note: this also implies that any class whose method has been called
     * will be strongly referred to by the framework and will not become
     * unloadable until this class has been unloaded first. Normally this is not
     * an issue, but can be in a rare scenario where you create many classes on-
     * the-fly. Also, as the cache grows with new classes and methods introduced
     * to the framework, it may appear as if it were leaking memory. The
     * framework does, however detect class reloads (if you happen to be in an
     * environment that does this kind of things--servlet containers do it when
     * they reload a web application) and flushes the cache. If no method or
     * property matching the key is found, the framework will try to invoke
     * methods with signature
     * <tt>non-void-return-type get(java.lang.String)</tt>,
     * then <tt>non-void-return-type get(java.lang.Object)</tt>, or
     * alternatively (if the wrapped object is a resource bundle)
     * <tt>Object getObject(java.lang.String)</tt>.
     * 
     * @throws TemplateModelException if there was no property nor method nor
     * a generic <tt>get</tt> method to invoke.
     * @param {String} key
     * @return {*}
     */
    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    /*private*/ logNoSuchKey(key : string, keyMap : Map<any, any>) {
        BeanModel.LOG_$LI$().debug$java_lang_String("Key " + StringUtil.jQuoteNoXSS$java_lang_Object(key) + " was not found on instance of " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.object.constructor)) + ". Introspection information for the class is: " + keyMap);
    }

    /**
     * Whether the model has a plain get(String) or get(Object) method
     * @return {boolean}
     */
    hasPlainGetMethod() : boolean {
        return /* get */this.wrapper.getClassIntrospector().get((<any>this.object.constructor)).get(ClassIntrospector.GENERIC_GET_KEY_$LI$()) != null;
    }

    /*private*/ invokeThroughDescriptor(desc : any, classInfo : any) : TemplateModel {
        // let cachedModel : TemplateModel;
        // {
        //     cachedModel = this.memberCache != null?/* get */this.memberCache.get(desc):null;
        // }
        // if(cachedModel != null) {
        //     return cachedModel;
        // }
        // let resultModel : TemplateModel = BeanModel.UNKNOWN_$LI$();
        // if(desc != null && desc instanceof <any>FastPropertyDescriptor) {
        //     let pd : FastPropertyDescriptor = <FastPropertyDescriptor>desc;
        //     let indexedReadMethod : Function = pd.getIndexedReadMethod();
        //     if(indexedReadMethod != null) {
        //         if(!this.wrapper.getPreferIndexedReadMethod() && (pd.getReadMethod()) != null) {
        //             resultModel = this.wrapper.invokeMethod(this.object, pd.getReadMethod(), null);
        //         } else {
        //             resultModel = cachedModel = new SimpleMethodModel(this.object, indexedReadMethod, ClassIntrospector.getArgTypes(classInfo, indexedReadMethod), this.wrapper);
        //         }
        //     } else {
        //         resultModel = this.wrapper.invokeMethod(this.object, pd.getReadMethod(), null);
        //     }
        // } else if(desc != null && desc instanceof <any>Field) {
        //     resultModel = this.wrapper.wrap$java_lang_Object(/* get */this.object[(<Field>desc).name]);
        // } else if(desc != null && (desc instanceof Function)) {
        //     let method : Function = <Function>desc;
        //     resultModel = cachedModel = new SimpleMethodModel(this.object, method, ClassIntrospector.getArgTypes(classInfo, method), this.wrapper);
        // } else if(desc != null && desc instanceof <any>OverloadedMethods) {
        //     resultModel = cachedModel = new OverloadedMethodsModel(this.object, <OverloadedMethods>desc, this.wrapper);
        // }
        // if(cachedModel != null) {
        //     {
        //         if(this.memberCache == null) {
        //             this.memberCache = <any>(new Map<any, any>());
        //         }
        //         /* put */this.memberCache.set(desc, cachedModel);
        //     }
        // }
        // return resultModel;
        throw new Error();
    }

    clearMemberCache() {
        {
            this.memberCache = null;
        }
    }

    invokeGenericGet(classInfo : Map<any, any>, clazz : any, key : string) : TemplateModel {
        let genericGet : Function = <Function>/* get */classInfo.get(ClassIntrospector.GENERIC_GET_KEY_$LI$());
        if(genericGet == null) {
            return BeanModel.UNKNOWN_$LI$();
        }
        return this.wrapper.invokeMethod(this.object, genericGet, [key]);
    }

    wrap(obj : any) : TemplateModel {
        return this.wrapper.getOuterIdentity()['wrap$java_lang_Object'](obj);
    }

    unwrap(model : TemplateModel) : any {
        return this.wrapper.unwrap$freemarker_template_TemplateModel(model);
    }

    /**
     * Tells whether the model is empty. It is empty if either the wrapped
     * object is null, or it's a Boolean with false value.
     * @return {boolean}
     */
    public isEmpty() : boolean {
        if(typeof this.object === 'string') {
            return (<string>this.object).length === 0;
        }
        if(this.object != null && (this.object instanceof Array)) {
            return /* isEmpty */((<any>this.object).length == 0);
        }
        // if((this.object != null && (this.object instanceof Object)) && this.wrapper.is2324Bugfixed()) {
        //     return !(<Iterator><any>this.object).hasNext();
        // }
        if(this.object != null && (this.object instanceof Map)) {
            return /* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>(<Map<any, any>><any>this.object));
        }
        return this.object == null || this.object === false;
    }

    /**
     * Returns the same as {link #getWrappedObject()}; to ensure that, this method will be final starting from 2.4.
     * This behavior of {link BeanModel} is assumed by some FreeMarker code.
     * @param {*} hint
     * @return {Object}
     */
    public getAdaptedObject(hint : any) : any {
        return this.object;
    }

    public getWrappedObject() : any {
        return this.object;
    }

    public size() : number {
        return this.wrapper.getClassIntrospector().keyCount((<any>this.object.constructor));
    }

    public keys() : TemplateCollectionModel {
        return new CollectionAndSequence(new SimpleSequence(this.keySet(), this.wrapper));
    }

    public values() : TemplateCollectionModel {
        let values : Array<any> = <any>([]);
        let it : TemplateModelIterator = this.keys().iterator();
        while((it.hasNext())) {
            let key : string = (<TemplateScalarModel><any>it.next()).getAsString();
            /* add */values.push(this.get$java_lang_String(key));
        }
        return new CollectionAndSequence(new SimpleSequence(values, this.wrapper));
    }

    /**
     * Used for {@code classic_compatbile} mode; don't use it for anything else.
     * In FreeMarker 1.7 (and also at least in 2.1) {link BeanModel} was a {link TemplateScalarModel}. Some internal
     * FreeMarker code tries to emulate FreeMarker classic by calling this method when a {link TemplateScalarModel} is
     * expected.
     * 
     * @return {String} Never {@code null}
     */
    getAsClassicCompatibleString() : string {
        if(this.object == null) {
            return "null";
        }
        let s : string = this.object.toString();
        return s != null?s:"null";
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return this.object.toString();
    }

    /**
     * Helper method to support TemplateHashModelEx. Returns the Set of
     * Strings which are available via the TemplateHashModel
     * interface. Subclasses that override <tt>invokeGenericGet</tt> to
     * provide additional hash keys should also override this method.
     * @return {Set}
     */
    keySet() : Set<any> {
        return this.wrapper.getClassIntrospector().keySet((<any>this.object.constructor));
    }

    public getAPI() : TemplateModel {
        return this.wrapper.wrapAsAPI(this.object);
    }
}
BeanModel["__class"] = "freemarker.ext.beans.BeanModel";
BeanModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace BeanModel {

    export class BeanModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new BeanModel(object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    BeanModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





BeanModel.FACTORY_$LI$();

BeanModel.UNKNOWN_$LI$();

BeanModel.LOG_$LI$();
