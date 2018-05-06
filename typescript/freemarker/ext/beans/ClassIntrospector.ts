/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ModelCache} from '../util/ModelCache';
import {Logger} from '../../log/Logger';
import {NullArgumentException} from '../../template/utility/NullArgumentException';
import {SecurityUtilities} from '../../template/utility/SecurityUtilities';
import {MethodAppearanceFineTuner} from './MethodAppearanceFineTuner';
import {MethodSorter} from './MethodSorter';
import {ClassIntrospectorBuilder} from './ClassIntrospectorBuilder';
import {BeansWrapper} from './BeansWrapper';
import {UnsafeMethods} from './UnsafeMethods';
import {ClassBasedModelFactory} from './ClassBasedModelFactory';
import {Set} from '../../../java/util/Set';
import {Entry} from "../../../java/util/Entry";
import {Map} from "../../../java/util/Map";

/**
 * Returns information about a {link Class} that's useful for FreeMarker. Encapsulates a cache for this. Thread-safe,
 * doesn't even require "proper publishing" starting from 2.3.24 or Java 5. Immutable, with the exception of the
 * internal caches.
 * <p>
 * <p>
 * Note that instances of this are cached on the level of FreeMarker's defining class loader. Hence, it must not do
 * operations that depend on the Thread Context Class Loader, such as resolving class names.
 * @class
 */
export class ClassIntrospector {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(ClassIntrospector.LOG == null) ClassIntrospector.LOG = Logger.getLogger("freemarker.beans"); return ClassIntrospector.LOG; };

    /**
     * When this property is true, some things are stricter. This is mostly to catch suspicious things in development
     * that can otherwise be valid situations.
     */
    static DEVELOPMENT_MODE : boolean; public static DEVELOPMENT_MODE_$LI$() : boolean { if(ClassIntrospector.DEVELOPMENT_MODE == null) ClassIntrospector.DEVELOPMENT_MODE = /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("true",SecurityUtilities.getSystemProperty("freemarker.development", "false"))); return ClassIntrospector.DEVELOPMENT_MODE; };

    /**
     * Key in the class info Map to the Map that maps method to argument type arrays
     */
    static ARG_TYPES_BY_METHOD_KEY : any; public static ARG_TYPES_BY_METHOD_KEY_$LI$() : any { if(ClassIntrospector.ARG_TYPES_BY_METHOD_KEY == null) ClassIntrospector.ARG_TYPES_BY_METHOD_KEY = <any>new Object(); return ClassIntrospector.ARG_TYPES_BY_METHOD_KEY; };

    /**
     * Key in the class info Map to the object that represents the constructors (one or multiple due to overloading)
     */
    static CONSTRUCTORS_KEY : any; public static CONSTRUCTORS_KEY_$LI$() : any { if(ClassIntrospector.CONSTRUCTORS_KEY == null) ClassIntrospector.CONSTRUCTORS_KEY = <any>new Object(); return ClassIntrospector.CONSTRUCTORS_KEY; };

    /**
     * Key in the class info Map to the get(String|Object) Method
     */
    static GENERIC_GET_KEY : any; public static GENERIC_GET_KEY_$LI$() : any { if(ClassIntrospector.GENERIC_GET_KEY == null) ClassIntrospector.GENERIC_GET_KEY = <any>new Object(); return ClassIntrospector.GENERIC_GET_KEY; };

    exposureLevel : number;

    exposeFields : boolean;

    methodAppearanceFineTuner : MethodAppearanceFineTuner;

    methodSorter : MethodSorter;

    treatDefaultMethodsAsBeanMembers : boolean;

    bugfixed : boolean;

    /**
     * See {link #getHasSharedInstanceRestrictons()}
     */
    /*private*/ hasSharedInstanceRestrictons : boolean;

    /**
     * See {link #isShared()}
     */
    /*private*/ shared : boolean;

    /*private*/ sharedLock : any;

    /*private*/ cache : Map<any, any> = <any>(<Map<any, Map<any, any>>>new Map<any, Map<any, any>>());

    /*private*/ cacheClassNames : Set<any> = <any>([]);

    /*private*/ classIntrospectionsInProgress : Set<any> = new Set();

    /*private*/ modelFactories : Array<any> = <any>([]);

    /*private*/ modelFactoriesRefQueue : Array<any> = <any>(new Array<any>());

    /*private*/ clearingCounter : number;

    public constructor(builder? : any, sharedLock? : any, hasSharedInstanceRestrictons? : any, shared? : any) {
        if(((builder != null && builder instanceof <any>ClassIntrospectorBuilder) || builder === null) && ((sharedLock != null) || sharedLock === null) && ((typeof hasSharedInstanceRestrictons === 'boolean') || hasSharedInstanceRestrictons === null) && ((typeof shared === 'boolean') || shared === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.exposureLevel===undefined) this.exposureLevel = 0;
            if(this.exposeFields===undefined) this.exposeFields = false;
            if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
            if(this.methodSorter===undefined) this.methodSorter = null;
            if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
            if(this.bugfixed===undefined) this.bugfixed = false;
            if(this.hasSharedInstanceRestrictons===undefined) this.hasSharedInstanceRestrictons = false;
            if(this.shared===undefined) this.shared = false;
            if(this.sharedLock===undefined) this.sharedLock = null;
            if(this.clearingCounter===undefined) this.clearingCounter = 0;
            this.cache = <any>(<Map<any, Map<any, any>>>new Map<any, Map<any, any>>());
            this.cacheClassNames = <any>([]);
            this.classIntrospectionsInProgress = <any>([]);
            this.modelFactories = <any>([]);
            this.modelFactoriesRefQueue = <any>([]);
            if(this.exposureLevel===undefined) this.exposureLevel = 0;
            if(this.exposeFields===undefined) this.exposeFields = false;
            if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
            if(this.methodSorter===undefined) this.methodSorter = null;
            if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
            if(this.bugfixed===undefined) this.bugfixed = false;
            if(this.hasSharedInstanceRestrictons===undefined) this.hasSharedInstanceRestrictons = false;
            if(this.shared===undefined) this.shared = false;
            if(this.sharedLock===undefined) this.sharedLock = null;
            if(this.clearingCounter===undefined) this.clearingCounter = 0;
            (() => {
                NullArgumentException.check$java_lang_String$java_lang_Object("sharedLock", sharedLock);
                this.exposureLevel = builder.getExposureLevel();
                this.exposeFields = builder.getExposeFields();
                this.methodAppearanceFineTuner = builder.getMethodAppearanceFineTuner();
                this.methodSorter = builder.getMethodSorter();
                this.treatDefaultMethodsAsBeanMembers = builder.getTreatDefaultMethodsAsBeanMembers();
                this.bugfixed = builder.isBugfixed();
                this.sharedLock = sharedLock;
                this.hasSharedInstanceRestrictons = hasSharedInstanceRestrictons;
                this.shared = shared;
            })();
        } else if(((builder != null && builder instanceof <any>ClassIntrospectorBuilder) || builder === null) && ((sharedLock != null) || sharedLock === null) && hasSharedInstanceRestrictons === undefined && shared === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let pa : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let builder : any = pa;
                let hasSharedInstanceRestrictons : any = false;
                let shared : any = false;
                if(this.exposureLevel===undefined) this.exposureLevel = 0;
                if(this.exposeFields===undefined) this.exposeFields = false;
                if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
                if(this.methodSorter===undefined) this.methodSorter = null;
                if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
                if(this.bugfixed===undefined) this.bugfixed = false;
                if(this.hasSharedInstanceRestrictons===undefined) this.hasSharedInstanceRestrictons = false;
                if(this.shared===undefined) this.shared = false;
                if(this.sharedLock===undefined) this.sharedLock = null;
                if(this.clearingCounter===undefined) this.clearingCounter = 0;
                this.cache = <any>(<Map<any, Map<any, any>>>new Map<any, Map<any, any>>());
                this.cacheClassNames = <any>([]);
                this.classIntrospectionsInProgress = <any>([]);
                this.modelFactories = <any>([]);
                this.modelFactoriesRefQueue = <any>(new Array<any>());
                if(this.exposureLevel===undefined) this.exposureLevel = 0;
                if(this.exposeFields===undefined) this.exposeFields = false;
                if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
                if(this.methodSorter===undefined) this.methodSorter = null;
                if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
                if(this.bugfixed===undefined) this.bugfixed = false;
                if(this.hasSharedInstanceRestrictons===undefined) this.hasSharedInstanceRestrictons = false;
                if(this.shared===undefined) this.shared = false;
                if(this.sharedLock===undefined) this.sharedLock = null;
                if(this.clearingCounter===undefined) this.clearingCounter = 0;
                (() => {
                    NullArgumentException.check$java_lang_String$java_lang_Object("sharedLock", sharedLock);
                    this.exposureLevel = builder.getExposureLevel();
                    this.exposeFields = builder.getExposeFields();
                    this.methodAppearanceFineTuner = builder.getMethodAppearanceFineTuner();
                    this.methodSorter = builder.getMethodSorter();
                    this.treatDefaultMethodsAsBeanMembers = builder.getTreatDefaultMethodsAsBeanMembers();
                    this.bugfixed = builder.isBugfixed();
                    this.sharedLock = sharedLock;
                    this.hasSharedInstanceRestrictons = hasSharedInstanceRestrictons;
                    this.shared = shared;
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * Returns a {link ClassIntrospectorBuilder}-s that could be used to create an identical {link #ClassIntrospector}
     * . The returned {link ClassIntrospectorBuilder} can be modified without interfering with anything.
     * @return {ClassIntrospectorBuilder}
     */
    createBuilder() : ClassIntrospectorBuilder {
        return new ClassIntrospectorBuilder(this);
    }

    /**
     * Gets the class introspection data from {link #cache}, automatically creating the cache entry if it's missing.
     * 
     * @return {Map} A {link Map} where each key is a property/method/field name (or a special {link Object} key like
     * {link #CONSTRUCTORS_KEY}), each value is a {link FastPropertyDescriptor} or {link Method} or
     * {link OverloadedMethods} or {link Field} (but better check the source code...).
     * @param {*} clazz
     */
    get(clazz : any) : Map<any, any> {
        // {
        //     let introspData : Map<any, any> = /* get */this.cache.get(clazz);
        //     if(introspData != null) return introspData;
        // };
        // let className : string;
        // {
        //     let introspData : Map<any, any> = /* get */this.cache.get(clazz);
        //     if(introspData != null) return introspData;
        //     className = /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz);
        //     if(/* contains */(this.cacheClassNames.indexOf(<any>(className)) >= 0)) {
        //         this.onSameNameClassesDetected(className);
        //     }
        //     while((introspData == null && /* contains */(this.classIntrospectionsInProgress.indexOf(<any>(clazz)) >= 0))) {
        //         try {
        //             this.sharedLock.wait();
        //             introspData = /* get */this.cache.get(clazz);
        //         } catch(e) {
        //             throw Object.defineProperty(new Error("Class inrospection data lookup aborded: " + e), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        //         };
        //     };
        //     if(introspData != null) return introspData;
        //     /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.classIntrospectionsInProgress, clazz);
        // };
        // try {
        //     let introspData : Map<any, any> = this.createClassIntrospectionData(clazz);
        //     {
        //         /* put */this.cache.set(clazz, introspData);
        //         /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.cacheClassNames, className);
        //     };
        //     return introspData;
        // } finally {
        //     {
        //         /* remove */(a => { let index = a.indexOf(clazz); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.classIntrospectionsInProgress);
        //         this.sharedLock.notifyAll();
        //     };
        // };
        throw new Error();
    }

    /**
     * Creates a {link Map} with the content as described for the return value of {link #get(Class)}.
     * @param {*} clazz
     * @return {Map}
     * @private
     */
    createClassIntrospectionData(clazz : any) : Map<any, any> {
        let introspData : Map<any, any> = <any>(new Map<any, any>());
        if(this.exposeFields) {
            this.addFieldsToClassIntrospectionData(introspData, clazz);
        }
        let accessibleMethods : Map<any, any> = ClassIntrospector.discoverAccessibleMethods$java_lang_Class(clazz);
        this.addGenericGetToClassIntrospectionData(introspData, accessibleMethods);
        if(this.exposureLevel !== BeansWrapper.EXPOSE_NOTHING) {
            try {
                this.addBeanInfoToClassIntrospectionData(introspData, clazz, accessibleMethods);
            } catch(e) {
                ClassIntrospector.LOG_$LI$().warn$java_lang_String$java_lang_Throwable("Couldn\'t properly perform introspection for class " + clazz, e);
                /* clear */(<any>introspData).clear();
            }
        }
        this.addConstructorsToClassIntrospectionData(introspData, clazz);
        if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>introspData) > 1) {
            return introspData;
        } else if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>introspData) === 0) {
            return /* emptyMap */new Map<any, any>();
        } else {
            let e : Entry<any, any> = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>introspData)).next();
            let result = new Map();
            result.set(e.getKey(), e.getValue());
            return result;
        }
    }

    addFieldsToClassIntrospectionData(introspData : Map<any, any>, clazz : any) {
        // let fields : Array<any> = clazz.getFields();
        // for(let i : number = 0; i < fields.length; i++) {
        //     let field : Field = fields[i];
        //     if((field.getModifiers() & Modifier.STATIC) === 0) {
        //         /* put */introspData.set(/* getName */field.name, field);
        //     }
        // };
        throw new Error();
    }

    addBeanInfoToClassIntrospectionData(introspData : Map<any, any>, clazz : any, accessibleMethods : Map<any, any>) {
        // let beanInfo : BeanInfo = Introspector.getBeanInfo(clazz);
        // let pdas : Array<any> = this.getPropertyDescriptors(beanInfo, clazz);
        // let pdasLength : number = /* size */(<number>pdas.length);
        // for(let i : number = pdasLength - 1; i >= 0; --i) {
        //     this.addPropertyDescriptorToClassIntrospectionData(introspData, /* get */pdas[i], clazz, accessibleMethods);
        // };
        // if(this.exposureLevel < BeansWrapper.EXPOSE_PROPERTIES_ONLY) {
        //     let decision : BeansWrapper.MethodAppearanceDecision = new BeansWrapper.MethodAppearanceDecision();
        //     let decisionInput : BeansWrapper.MethodAppearanceDecisionInput = null;
        //     let mds : Array<any> = this.getMethodDescriptors(beanInfo, clazz);
        //     this.sortMethodDescriptors(mds);
        //     let mdsSize : number = /* size */(<number>mds.length);
        //     let argTypesUsedByIndexerPropReaders : IdentityHashMap = null;
        //     for(let i : number = mdsSize - 1; i >= 0; --i) {
        //         let method : Function = ClassIntrospector.getMatchingAccessibleMethod(/* get */mds[i].getMethod(), accessibleMethods);
        //         if(method != null && this.isAllowedToExpose(method)) {
        //             decision.setDefaults(method);
        //             if(this.methodAppearanceFineTuner != null) {
        //                 if(decisionInput == null) {
        //                     decisionInput = new BeansWrapper.MethodAppearanceDecisionInput();
        //                 }
        //                 decisionInput.setContainingClass(clazz);
        //                 decisionInput.setMethod(method);
        //                 this.methodAppearanceFineTuner.process(decisionInput, decision);
        //             }
        //             let propDesc : PropertyDescriptor = decision.getExposeAsProperty();
        //             if(propDesc != null && (decision.getReplaceExistingProperty() || !(/* get */introspData.get(propDesc.getName()) != null && /* get */introspData.get(propDesc.getName()) instanceof <any>FastPropertyDescriptor))) {
        //                 this.addPropertyDescriptorToClassIntrospectionData(introspData, propDesc, clazz, accessibleMethods);
        //             }
        //             let methodKey : string = decision.getExposeMethodAs();
        //             if(methodKey != null) {
        //                 let previous : any = /* get */introspData.get(methodKey);
        //                 if(previous != null && (previous instanceof Function)) {
        //                     let overloadedMethods : OverloadedMethods = new OverloadedMethods(this.bugfixed);
        //                     overloadedMethods.addMethod(<Function>previous);
        //                     overloadedMethods.addMethod(method);
        //                     /* put */introspData.set(methodKey, overloadedMethods);
        //                     if(argTypesUsedByIndexerPropReaders == null || !argTypesUsedByIndexerPropReaders.containsKey(previous)) {
        //                         /* remove */ClassIntrospector.getArgTypesByMethod(introspData).delete(previous);
        //                     }
        //                 } else if(previous != null && previous instanceof <any>OverloadedMethods) {
        //                     (<OverloadedMethods>previous).addMethod(method);
        //                 } else if(decision.getMethodShadowsProperty() || !(previous != null && previous instanceof <any>FastPropertyDescriptor)) {
        //                     /* put */introspData.set(methodKey, method);
        //                     let argTypes:Map<any, any> = ClassIntrospector.getArgTypesByMethod(introspData);
        //                     let replaced : Array<any> = argTypes.get(method);
        //                     /* put */argTypes.set(method, method.getParameterTypes());
        //                     if(replaced != null) {
        //                         if(argTypesUsedByIndexerPropReaders == null) {
        //                             argTypesUsedByIndexerPropReaders = <any>(new IdentityHashMap<Function, void>());
        //                         }
        //                         argTypesUsedByIndexerPropReaders.put(method, null);
        //                     }
        //                 }
        //             }
        //         }
        //     };
        // }
        throw new Error();
    }

    /**
     * Very similar to {link BeanInfo#getPropertyDescriptors()}, but can deal with Java 8 default methods too.
     * @param {BeanInfo} beanInfo
     * @param {*} clazz
     * @return {List}
     * @private
     */
    getPropertyDescriptors(beanInfo : any/*BeanInfo*/, clazz : any) : Array<any> {
        // let introspectorPDsArray : Array<any> = beanInfo.getPropertyDescriptors();
        // let introspectorPDs : Array<any> = introspectorPDsArray != null?/* asList */introspectorPDsArray.slice(0):/* emptyList */[];
        // if(!this.treatDefaultMethodsAsBeanMembers || _JavaVersions.JAVA_8_$LI$() == null) {
        //     return introspectorPDs;
        // }
        // let mergedPRMPs : Map<any, any> = null;
        // {
        //     let array150 = /* getMethods */(c => { let m = []; for (let p in c.prototype) if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') m.push({owner:c,name:p,fn:c.prototype[p]}); return m; })(clazz);
        //     for(let index149=0; index149 < array150.length; index149++) {
        //         let method = array150[index149];
        //         {
        //             if(_JavaVersions.JAVA_8_$LI$().isDefaultMethod(method) && method.getReturnType() !== void && !method.isBridge()) {
        //                 let paramTypes : Array<any> = method.getParameterTypes();
        //                 if(paramTypes.length === 0 || paramTypes.length === 1 && paramTypes[0] === Number) {
        //                     let propName : string = _MethodUtil.getBeanPropertyNameFromReaderMethodName(/* getName */method.name, method.getReturnType());
        //                     if(propName != null) {
        //                         if(mergedPRMPs == null) {
        //                             mergedPRMPs = <any>(new Map<any, any>());
        //                         }
        //                         if(paramTypes.length === 0) {
        //                             this.mergeInPropertyReaderMethod(mergedPRMPs, propName, method);
        //                         } else {
        //                             this.mergeInPropertyReaderMethodPair(mergedPRMPs, propName, new ClassIntrospector.PropertyReaderMethodPair(null, method));
        //                         }
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        // if(mergedPRMPs == null) {
        //     return introspectorPDs;
        // }
        // for(let index151=0; index151 < introspectorPDs.length; index151++) {
        //     let introspectorPD = introspectorPDs[index151];
        //     {
        //         this.mergeInPropertyDescriptor(mergedPRMPs, introspectorPD);
        //     }
        // }
        // let mergedPDs : Array<any> = <any>([]);
        // {
        //     let array153 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(mergedPRMPs);
        //     for(let index152=0; index152 < array153.length; index152++) {
        //         let entry = array153[index152];
        //         {
        //             let propName : string = entry.getKey();
        //             let propDescObj : any = entry.getValue();
        //             if(propDescObj != null && propDescObj instanceof <any>PropertyDescriptor) {
        //                 /* add */(mergedPDs.push(<PropertyDescriptor>propDescObj)>0);
        //             } else {
        //                 let readMethod : Function;
        //                 let indexedReadMethod : Function;
        //                 if(propDescObj != null && (propDescObj instanceof Function)) {
        //                     readMethod = <Function>propDescObj;
        //                     indexedReadMethod = null;
        //                 } else if(propDescObj != null && propDescObj instanceof <any>ClassIntrospector.PropertyReaderMethodPair) {
        //                     let prmp : ClassIntrospector.PropertyReaderMethodPair = <ClassIntrospector.PropertyReaderMethodPair>propDescObj;
        //                     readMethod = prmp.readMethod;
        //                     indexedReadMethod = prmp.indexedReadMethod;
        //                     if(readMethod != null && indexedReadMethod != null && indexedReadMethod.getReturnType() !== readMethod.getReturnType().getComponentType()) {
        //                         indexedReadMethod = null;
        //                     }
        //                 } else {
        //                     throw new BugException();
        //                 }
        //                 try {
        //                     /* add */(mergedPDs.push(indexedReadMethod != null?new IndexedPropertyDescriptor(propName, readMethod, null, indexedReadMethod, null):new PropertyDescriptor(propName, readMethod, null))>0);
        //                 } catch(e) {
        //                     if(ClassIntrospector.LOG_$LI$().isWarnEnabled()) {
        //                         ClassIntrospector.LOG_$LI$().warn$java_lang_String$java_lang_Throwable("Failed creating property descriptor for " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz) + " property " + propName, e);
        //                     }
        //                 };
        //             }
        //         }
        //     }
        // }
        // return mergedPDs;
        throw new Error();
    }

    mergeInPropertyDescriptor(mergedPRMPs : Map<any, any>, pd : PropertyDescriptor) {
        // let propName : string = pd.getName();
        // let replaced : any = /* put */mergedPRMPs.set(propName, pd);
        // if(replaced != null) {
        //     let newPRMP : ClassIntrospector.PropertyReaderMethodPair = new ClassIntrospector.PropertyReaderMethodPair(pd);
        //     this.putIfMergedPropertyReaderMethodPairDiffers(mergedPRMPs, propName, replaced, newPRMP);
        // }
        throw new Error();
    }

    mergeInPropertyReaderMethodPair(mergedPRMPs : Map<any, any>, propName : string, newPRM : ClassIntrospector.PropertyReaderMethodPair) {
        let replaced : any = /* put */mergedPRMPs.set(propName, newPRM);
        if(replaced != null) {
            this.putIfMergedPropertyReaderMethodPairDiffers(mergedPRMPs, propName, replaced, newPRM);
        }
    }

    mergeInPropertyReaderMethod(mergedPRMPs : Map<any, any>, propName : string, readerMethod : Function) {
        let replaced : any = /* put */mergedPRMPs.set(propName, readerMethod);
        if(replaced != null) {
            this.putIfMergedPropertyReaderMethodPairDiffers(mergedPRMPs, propName, replaced, new ClassIntrospector.PropertyReaderMethodPair(readerMethod, null));
        }
    }

    putIfMergedPropertyReaderMethodPairDiffers(mergedPRMPs : Map<any, any>, propName : string, replaced : any, newPRMP : ClassIntrospector.PropertyReaderMethodPair) {
        let replacedPRMP : ClassIntrospector.PropertyReaderMethodPair = ClassIntrospector.PropertyReaderMethodPair.from(replaced);
        let mergedPRMP : ClassIntrospector.PropertyReaderMethodPair = ClassIntrospector.PropertyReaderMethodPair.merge(replacedPRMP, newPRMP);
        if(!mergedPRMP.equals(newPRMP)) {
            /* put */mergedPRMPs.set(propName, mergedPRMP);
        }
    }

    /**
     * Very similar to {link BeanInfo#getMethodDescriptors()}, but can deal with Java 8 default methods too.
     * @param {BeanInfo} beanInfo
     * @param {*} clazz
     * @return {List}
     * @private
     */
    getMethodDescriptors(beanInfo : any/*BeanInfo*/, clazz : any) : Array<any> {
        // let introspectorMDArray : Array<any> = beanInfo.getMethodDescriptors();
        // let introspectionMDs : Array<any> = introspectorMDArray != null && introspectorMDArray.length !== 0?/* asList */introspectorMDArray.slice(0):/* emptyList */[];
        // if(!this.treatDefaultMethodsAsBeanMembers || _JavaVersions.JAVA_8_$LI$() == null) {
        //     return introspectionMDs;
        // }
        // let defaultMethodsToAddByName : Map<any, any> = null;
        // {
        //     let array155 = /* getMethods */(c => { let m = []; for (let p in c.prototype) if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') m.push({owner:c,name:p,fn:c.prototype[p]}); return m; })(clazz);
        //     for(let index154=0; index154 < array155.length; index154++) {
        //         let method = array155[index154];
        //         {
        //             if(_JavaVersions.JAVA_8_$LI$().isDefaultMethod(method) && !method.isBridge()) {
        //                 if(defaultMethodsToAddByName == null) {
        //                     defaultMethodsToAddByName = <any>(new Map<any, any>());
        //                 }
        //                 let overloads : Array<any> = /* get */defaultMethodsToAddByName.get(/* getName */method.name);
        //                 if(overloads == null) {
        //                     overloads = <any>([]);
        //                     /* put */defaultMethodsToAddByName.set(/* getName */method.name, overloads);
        //                 }
        //                 /* add */(overloads.push(method)>0);
        //             }
        //         }
        //     }
        // }
        // if(defaultMethodsToAddByName == null) {
        //     return introspectionMDs;
        // }
        // let newIntrospectionMDs : Array<any> = <any>([]);
        // for(let index156=0; index156 < introspectionMDs.length; index156++) {
        //     let introspectorMD = introspectionMDs[index156];
        //     {
        //         let introspectorM : Function = introspectorMD.getMethod();
        //         if(!this.containsMethodWithSameParameterTypes(/* get */defaultMethodsToAddByName.get(/* getName */introspectorM.name), introspectorM)) {
        //             /* add */(newIntrospectionMDs.push(introspectorMD)>0);
        //         }
        //     }
        // }
        // introspectionMDs = newIntrospectionMDs;
        // {
        //     let array158 = /* entrySet */(o => { let s = []; for (let e in o) s.push({ k: e, v: o[e], getKey: function() { return this.k }, getValue: function() { return this.v } }); return s; })(defaultMethodsToAddByName);
        //     for(let index157=0; index157 < array158.length; index157++) {
        //         let entry = array158[index157];
        //         {
        //             {
        //                 let array160 = entry.getValue();
        //                 for(let index159=0; index159 < array160.length; index159++) {
        //                     let method = array160[index159];
        //                     {
        //                         /* add */(introspectionMDs.push(new MethodDescriptor(method))>0);
        //                     }
        //                 }
        //             }
        //         }
        //     }
        // }
        // return introspectionMDs;
        throw new Error();
    }

    containsMethodWithSameParameterTypes(overloads : Array<any>, m : Function) : boolean {
        // if(overloads == null) {
        //     return false;
        // }
        // let paramTypes : Array<any> = m.getParameterTypes();
        // for(let index161=0; index161 < overloads.length; index161++) {
        //     let overload = overloads[index161];
        //     {
        //         if(/* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(overload.getParameterTypes(), paramTypes)) {
        //             return true;
        //         }
        //     }
        // }
        // return false;
        throw new Error();
    }

    addPropertyDescriptorToClassIntrospectionData(introspData : Map<any, any>, pd : PropertyDescriptor, clazz : any, accessibleMethods : Map<any, any>) {
        // let readMethod : Function = ClassIntrospector.getMatchingAccessibleMethod(pd.getReadMethod(), accessibleMethods);
        // if(readMethod != null && !this.isAllowedToExpose(readMethod)) {
        //     readMethod = null;
        // }
        // let indexedReadMethod : Function;
        // if(pd != null && pd instanceof <any>IndexedPropertyDescriptor) {
        //     indexedReadMethod = ClassIntrospector.getMatchingAccessibleMethod((<IndexedPropertyDescriptor>pd).getIndexedReadMethod(), accessibleMethods);
        //     if(indexedReadMethod != null && !this.isAllowedToExpose(indexedReadMethod)) {
        //         indexedReadMethod = null;
        //     }
        //     if(indexedReadMethod != null) {
        //         /* put */ClassIntrospector.getArgTypesByMethod(introspData).set(indexedReadMethod, indexedReadMethod.getParameterTypes());
        //     }
        // } else {
        //     indexedReadMethod = null;
        // }
        // if(readMethod != null || indexedReadMethod != null) {
        //     /* put */introspData.set(pd.getName(), new FastPropertyDescriptor(readMethod, indexedReadMethod));
        // }
        throw new Error();
    }

    addGenericGetToClassIntrospectionData(introspData : Map<any, any>, accessibleMethods : Map<any, any>) {
        let genericGet : Function = ClassIntrospector.getFirstAccessibleMethod(ClassIntrospector.MethodSignature.GET_STRING_SIGNATURE_$LI$(), accessibleMethods);
        if(genericGet == null) {
            genericGet = ClassIntrospector.getFirstAccessibleMethod(ClassIntrospector.MethodSignature.GET_OBJECT_SIGNATURE_$LI$(), accessibleMethods);
        }
        if(genericGet != null) {
            /* put */introspData.set(ClassIntrospector.GENERIC_GET_KEY_$LI$(), genericGet);
        }
    }

    addConstructorsToClassIntrospectionData(introspData : Map<any, any>, clazz : any) {
        // try {
        //     let ctors : Array<any> = clazz.getConstructors();
        //     if(ctors.length === 1) {
        //         let ctor : Function = ctors[0];
        //         /* put */introspData.set(ClassIntrospector.CONSTRUCTORS_KEY_$LI$(), new SimpleMethod(ctor, ctor.getParameterTypes()));
        //     } else if(ctors.length > 1) {
        //         let overloadedCtors : OverloadedMethods = new OverloadedMethods(this.bugfixed);
        //         for(let i : number = 0; i < ctors.length; i++) {
        //             overloadedCtors.addConstructor(ctors[i]);
        //         };
        //         /* put */introspData.set(ClassIntrospector.CONSTRUCTORS_KEY_$LI$(), overloadedCtors);
        //     }
        // } catch(e) {
        //     ClassIntrospector.LOG_$LI$().warn$java_lang_String$java_lang_Throwable("Can\'t discover constructors for class " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz), e);
        // };
        throw new Error();
    }

    static discoverAccessibleMethods$java_lang_Class(clazz : any) : Map<any, any> {
        let accessibles : Map<any, any> = <any>(new Map<any, any>());
        ClassIntrospector.discoverAccessibleMethods$java_lang_Class$java_util_Map(clazz, accessibles);
        return accessibles;
    }

    public static discoverAccessibleMethods$java_lang_Class$java_util_Map(clazz : any, accessibles : Map<any, any>) {
        // if(Modifier.isPublic(clazz.getModifiers())) {
            try {
                let methods : Array<any> = /* getMethods */(c => { let m = []; for (let p in c.prototype) if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') m.push({owner:c,name:p,fn:c.prototype[p]}); return m; })(clazz);
                for(let i : number = 0; i < methods.length; i++) {
                    let method : Function = methods[i];
                    let sig : ClassIntrospector.MethodSignature = new ClassIntrospector.MethodSignature(method);
                    let methodList : Array<any> = /* get */accessibles.get(sig);
                    if(methodList == null) {
                        methodList = <any>([]);
                        /* put */accessibles.set(sig, methodList);
                    }
                    /* add */(methodList.push(method)>0);
                }
                return;
            } catch(e) {
                ClassIntrospector.LOG_$LI$().warn$java_lang_String$java_lang_Throwable("Could not discover accessible methods of class " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz) + ", attemping superclasses/interfaces.", e);
            }
        // }
        let interfaces : Array<any> = clazz.getInterfaces();
        for(let i : number = 0; i < interfaces.length; i++) {
            ClassIntrospector.discoverAccessibleMethods$java_lang_Class$java_util_Map(interfaces[i], accessibles);
        }
        let superclass : any = clazz.getSuperclass();
        if(superclass != null) {
            ClassIntrospector.discoverAccessibleMethods$java_lang_Class$java_util_Map(superclass, accessibles);
        }
    }

    public static discoverAccessibleMethods(clazz? : any, accessibles? : any) : any {
        if(((clazz != null) || clazz === null) && ((accessibles != null && (accessibles instanceof Map)) || accessibles === null)) {
            return <any>ClassIntrospector.discoverAccessibleMethods$java_lang_Class$java_util_Map(clazz, accessibles);
        } else if(((clazz != null) || clazz === null) && accessibles === undefined) {
            return <any>ClassIntrospector.discoverAccessibleMethods$java_lang_Class(clazz);
        } else throw new Error('invalid overload');
    }

    static getMatchingAccessibleMethod(m : Function, accessibles : Map<any, any>) : Function {
        // if(m == null) {
        //     return null;
        // }
        // let sig : ClassIntrospector.MethodSignature = new ClassIntrospector.MethodSignature(m);
        // let ams : Array<any> = /* get */accessibles.get(sig);
        // if(ams == null) {
        //     return null;
        // }
        // for(let index162=0; index162 < ams.length; index162++) {
        //     let am = ams[index162];
        //     {
        //         if(am.getReturnType() === m.getReturnType()) {
        //             return am;
        //         }
        //     }
        // }
        // return null;
        throw new Error();
    }

    static getFirstAccessibleMethod(sig : ClassIntrospector.MethodSignature, accessibles : Map<any, any>) : Function {
        let ams : Array<any> = /* get */accessibles.get(sig);
        if(ams == null || /* isEmpty */(ams.length == 0)) {
            return null;
        }
        return /* get */ams[0];
    }

    /**
     * As of this writing, this is only used for testing if method order really doesn't mater.
     * @param {List} methodDescriptors
     * @private
     */
    sortMethodDescriptors(methodDescriptors : Array<any>) {
        if(this.methodSorter != null) {
            this.methodSorter.sortMethodDescriptors(methodDescriptors);
        }
    }

    isAllowedToExpose(method : Function) : boolean {
        return this.exposureLevel < BeansWrapper.EXPOSE_SAFE || !UnsafeMethods.isUnsafeMethod(method);
    }

    static getArgTypesByMethod(classInfo : Map<any, any>) : Map<any, any> {
        let argTypes : Map<any, any> = <Map<any, any>><any>/* get */classInfo.get(ClassIntrospector.ARG_TYPES_BY_METHOD_KEY_$LI$());
        if(argTypes == null) {
            argTypes = <any>(new Map<any, any>());
            /* put */classInfo.set(ClassIntrospector.ARG_TYPES_BY_METHOD_KEY_$LI$(), argTypes);
        }
        return argTypes;
    }

    /**
     * Corresponds to {link BeansWrapper#clearClassIntrospecitonCache()}.
     * 
     * @since 2.3.20
     */
    clearCache() {
        // if(this.getHasSharedInstanceRestrictons()) {
        //     throw Object.defineProperty(new Error("It\'s not allowed to clear the whole cache in a read-only " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor)) + "instance. Use removeFromClassIntrospectionCache(String prefix) instead."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        // }
        // this.forcedClearCache();
    }

    forcedClearCache() {
        // {
        //     /* clear */(<any>this.cache).clear();
        //     /* clear */(this.cacheClassNames.clear());
        //     this.clearingCounter++;
        //     for(let index163=0; index163 < this.modelFactories.length; index163++) {
        //         let regedMfREf = this.modelFactories[index163];
        //         {
        //             let regedMf : any = /* get */regedMfREf;
        //             if(regedMf != null) {
        //                 if(regedMf != null && regedMf instanceof <any>ClassBasedModelFactory) {
        //                     (<ClassBasedModelFactory>regedMf).clearCache();
        //                 } else if(regedMf != null && regedMf instanceof <any>ModelCache) {
        //                     (<ModelCache>regedMf).clearCache();
        //                 } else {
        //                     throw new BugException();
        //                 }
        //             }
        //         }
        //     }
        //     this.removeClearedModelFactoryReferences();
        // };
    }

    /**
     * Corresponds to {link BeansWrapper#removeFromClassIntrospectionCache(Class)}.
     * 
     * @since 2.3.20
     * @param {*} clazz
     */
    remove(clazz : any) {
        // {
        //     /* remove */this.cache.delete(clazz);
        //     /* remove */(a => { let index = a.indexOf(/* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz)); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.cacheClassNames);
        //     this.clearingCounter++;
        //     for(let index164=0; index164 < this.modelFactories.length; index164++) {
        //         let regedMfREf = this.modelFactories[index164];
        //         {
        //             let regedMf : any = /* get */regedMfREf;
        //             if(regedMf != null) {
        //                 if(regedMf != null && regedMf instanceof <any>ClassBasedModelFactory) {
        //                     (<ClassBasedModelFactory>regedMf).removeFromCache(clazz);
        //                 } else if(regedMf != null && regedMf instanceof <any>ModelCache) {
        //                     (<ModelCache>regedMf).clearCache();
        //                 } else {
        //                     throw new BugException();
        //                 }
        //             }
        //         }
        //     }
        //     this.removeClearedModelFactoryReferences();
        // };
    }

    /**
     * Returns the number of events so far that could make class introspection data returned earlier outdated.
     * @return {number}
     */
    getClearingCounter() : number {
        {
            return this.clearingCounter;
        }
    }

    onSameNameClassesDetected(className : string) {
        if(ClassIntrospector.LOG_$LI$().isInfoEnabled()) {
            ClassIntrospector.LOG_$LI$().info$java_lang_String("Detected multiple classes with the same name, \"" + className + "\". Assuming it was a class-reloading. Clearing class introspection caches to release old data.");
        }
        this.forcedClearCache();
    }

    public registerModelFactory$freemarker_ext_beans_ClassBasedModelFactory(mf : ClassBasedModelFactory) {
        this.registerModelFactory$java_lang_Object(<any>mf);
    }

    public registerModelFactory(mf? : any) : any {
        if(((mf != null && mf instanceof <any>ClassBasedModelFactory) || mf === null)) {
            return <any>this.registerModelFactory$freemarker_ext_beans_ClassBasedModelFactory(mf);
        } else if(((mf != null && mf instanceof <any>ModelCache) || mf === null)) {
            return <any>this.registerModelFactory$freemarker_ext_util_ModelCache(mf);
        } else if(((mf != null) || mf === null)) {
            return <any>this.registerModelFactory$java_lang_Object(mf);
        } else throw new Error('invalid overload');
    }

    registerModelFactory$freemarker_ext_util_ModelCache(mf : ModelCache) {
        this.registerModelFactory$java_lang_Object(<any>mf);
    }

    registerModelFactory$java_lang_Object(mf : any) {
        {
            /* add */(this.modelFactories.push(mf)>0);
            this.removeClearedModelFactoryReferences();
        }
    }

    public unregisterModelFactory$freemarker_ext_beans_ClassBasedModelFactory(mf : ClassBasedModelFactory) {
        this.unregisterModelFactory$java_lang_Object(<any>mf);
    }

    public unregisterModelFactory(mf? : any) : any {
        if(((mf != null && mf instanceof <any>ClassBasedModelFactory) || mf === null)) {
            return <any>this.unregisterModelFactory$freemarker_ext_beans_ClassBasedModelFactory(mf);
        } else if(((mf != null && mf instanceof <any>ModelCache) || mf === null)) {
            return <any>this.unregisterModelFactory$freemarker_ext_util_ModelCache(mf);
        } else if(((mf != null) || mf === null)) {
            return <any>this.unregisterModelFactory$java_lang_Object(mf);
        } else throw new Error('invalid overload');
    }

    unregisterModelFactory$freemarker_ext_util_ModelCache(mf : ModelCache) {
        this.unregisterModelFactory$java_lang_Object(<any>mf);
    }

    unregisterModelFactory$java_lang_Object(mf : any) {
        // {
        //     for(let it : Iterator = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.modelFactories); it.hasNext(); ) {
        //         let regedMf : any = /* get */it.next();
        //         if(regedMf === mf) {
        //             it.remove();
        //         }
        //     };
        // };
        throw new Error();
    }

    removeClearedModelFactoryReferences() {
        // let cleardRef : Reference;
        // while(((cleardRef = this.modelFactoriesRefQueue.poll()) != null)) {
        //     {
        //         findClearedRef: for(let it : Iterator = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.modelFactories); it.hasNext(); ) {
        //             if(it.next() === cleardRef) {
        //                 it.remove();
        //                 break findClearedRef;
        //             }
        //         };
        //     };
        // };
    }

    static getArgTypes(classInfo : Map<any, any>, method : Function) : Array<any> {
        let argTypesByMethod : Map<any, any> = <Map<any, any>><any>/* get */classInfo.get(ClassIntrospector.ARG_TYPES_BY_METHOD_KEY_$LI$());
        return /* get */argTypesByMethod.get(method);
    }

    /**
     * Returns the number of introspected methods/properties that should be available via the TemplateHashModel
     * interface.
     * @param {*} clazz
     * @return {number}
     */
    keyCount(clazz : any) : number {
        let map : Map<any, any> = this.get(clazz);
        let count : number = /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>map);
        if(/* containsKey */map.has(ClassIntrospector.CONSTRUCTORS_KEY_$LI$())) count--;
        if(/* containsKey */map.has(ClassIntrospector.GENERIC_GET_KEY_$LI$())) count--;
        if(/* containsKey */map.has(ClassIntrospector.ARG_TYPES_BY_METHOD_KEY_$LI$())) count--;
        return count;
    }

    /**
     * Returns the Set of names of introspected methods/properties that should be available via the TemplateHashModel
     * interface.
     * @param {*} clazz
     * @return {Set}
     */
    keySet(clazz : any) : Set<any> {
        let set : Set<any> = this.get(clazz).keySet();
        set.remove(ClassIntrospector.CONSTRUCTORS_KEY_$LI$())
        set.remove(ClassIntrospector.GENERIC_GET_KEY_$LI$())
        set.remove(ClassIntrospector.ARG_TYPES_BY_METHOD_KEY_$LI$())
        return set;
    }

    getExposureLevel() : number {
        return this.exposureLevel;
    }

    getExposeFields() : boolean {
        return this.exposeFields;
    }

    getTreatDefaultMethodsAsBeanMembers() : boolean {
        return this.treatDefaultMethodsAsBeanMembers;
    }

    getMethodAppearanceFineTuner() : MethodAppearanceFineTuner {
        return this.methodAppearanceFineTuner;
    }

    getMethodSorter() : MethodSorter {
        return this.methodSorter;
    }

    /**
     * Returns {@code true} if this instance was created with {link ClassIntrospectorBuilder}, even if it wasn't
     * actually put into the cache (as we reserve the right to do so in later versions).
     * @return {boolean}
     */
    getHasSharedInstanceRestrictons() : boolean {
        return this.hasSharedInstanceRestrictons;
    }

    /**
     * Tells if this instance is (potentially) shared among {link BeansWrapper} instances.
     * <p>
     * see #getHasSharedInstanceRestrictons()
     * @return {boolean}
     */
    isShared() : boolean {
        return this.shared;
    }

    /**
     * Almost always, you want to use {link BeansWrapper#getSharedIntrospectionLock()}, not this! The only exception is
     * when you get this to set the field returned by {link BeansWrapper#getSharedIntrospectionLock()}.
     * @return {Object}
     */
    getSharedLock() : any {
        return this.sharedLock;
    }

    /**
     * For unit testing only
     * @return {Array}
     */
    getRegisteredModelFactoriesSnapshot() : Array<any> {
        {
            return /* toArray */this.modelFactories.slice(0);
        }
    }
}
ClassIntrospector["__class"] = "freemarker.ext.beans.ClassIntrospector";


export namespace ClassIntrospector {

    export class PropertyReaderMethodPair {
        readMethod : Function;

        indexedReadMethod : Function;

        public constructor(readerMethod? : any, indexedReaderMethod? : any) {
            // if(((readerMethod != null && (readerMethod instanceof Function)) || readerMethod === null) && ((indexedReaderMethod != null && (indexedReaderMethod instanceof Function)) || indexedReaderMethod === null)) {
            //     let __args = Array.prototype.slice.call(arguments);
            //     if(this.readMethod===undefined) this.readMethod = null;
            //     if(this.indexedReadMethod===undefined) this.indexedReadMethod = null;
            //     if(this.readMethod===undefined) this.readMethod = null;
            //     if(this.indexedReadMethod===undefined) this.indexedReadMethod = null;
            //     (() => {
            //         this.readMethod = readerMethod;
            //         this.indexedReadMethod = indexedReaderMethod;
            //     })();
            // } else if(((readerMethod != null && readerMethod instanceof <any>PropertyDescriptor) || readerMethod === null) && indexedReaderMethod === undefined) {
            //     let __args = Array.prototype.slice.call(arguments);
            //     let pd : any = __args[0];
            //     {
            //         let __args = Array.prototype.slice.call(arguments);
            //         let readerMethod : any = pd.getReadMethod();
            //         let indexedReaderMethod : any = (pd != null && pd instanceof <any>IndexedPropertyDescriptor)?(<IndexedPropertyDescriptor>pd).getIndexedReadMethod():null;
            //         if(this.readMethod===undefined) this.readMethod = null;
            //         if(this.indexedReadMethod===undefined) this.indexedReadMethod = null;
            //         if(this.readMethod===undefined) this.readMethod = null;
            //         if(this.indexedReadMethod===undefined) this.indexedReadMethod = null;
            //         (() => {
            //             this.readMethod = readerMethod;
            //             this.indexedReadMethod = indexedReaderMethod;
            //         })();
            //     }
            // } else throw new Error('invalid overload');
            throw new Error();
        }

        static from(obj : any) : ClassIntrospector.PropertyReaderMethodPair {
            // if(obj != null && obj instanceof <any>ClassIntrospector.PropertyReaderMethodPair) {
            //     return <ClassIntrospector.PropertyReaderMethodPair>obj;
            // } else if(obj != null && obj instanceof <any>PropertyDescriptor) {
            //     return new ClassIntrospector.PropertyReaderMethodPair(<PropertyDescriptor>obj);
            // } else if(obj != null && (obj instanceof Function)) {
            //     return new ClassIntrospector.PropertyReaderMethodPair(<Function>obj, null);
            // } else {
            //     throw new BugException("Unexpected obj type: " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>obj.constructor)));
            // }
            throw new Error();
        }

        static merge(oldMethods : ClassIntrospector.PropertyReaderMethodPair, newMethods : ClassIntrospector.PropertyReaderMethodPair) : ClassIntrospector.PropertyReaderMethodPair {
            return new ClassIntrospector.PropertyReaderMethodPair(newMethods.readMethod != null?newMethods.readMethod:oldMethods.readMethod, newMethods.indexedReadMethod != null?newMethods.indexedReadMethod:oldMethods.indexedReadMethod);
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            let prime : number = 31;
            let result : number = 1;
            result = prime * result + ((this.indexedReadMethod == null)?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.indexedReadMethod)));
            result = prime * result + ((this.readMethod == null)?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.readMethod)));
            return result;
        }

        /**
         * 
         * @param {Object} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean {
            if(this === obj) return true;
            if(obj == null) return false;
            if((<any>this.constructor) !== (<any>obj.constructor)) return false;
            let other : ClassIntrospector.PropertyReaderMethodPair = <ClassIntrospector.PropertyReaderMethodPair>obj;
            return other.readMethod === this.readMethod && other.indexedReadMethod === this.indexedReadMethod;
        }
    }
    PropertyReaderMethodPair["__class"] = "freemarker.ext.beans.ClassIntrospector.PropertyReaderMethodPair";


    export class MethodSignature {
        static GET_STRING_SIGNATURE : ClassIntrospector.MethodSignature; public static GET_STRING_SIGNATURE_$LI$() : ClassIntrospector.MethodSignature { if(MethodSignature.GET_STRING_SIGNATURE == null) MethodSignature.GET_STRING_SIGNATURE = new ClassIntrospector.MethodSignature("get", [String]); return MethodSignature.GET_STRING_SIGNATURE; };

        static GET_OBJECT_SIGNATURE : ClassIntrospector.MethodSignature; public static GET_OBJECT_SIGNATURE_$LI$() : ClassIntrospector.MethodSignature { if(MethodSignature.GET_OBJECT_SIGNATURE == null) MethodSignature.GET_OBJECT_SIGNATURE = new ClassIntrospector.MethodSignature("get", [Object]); return MethodSignature.GET_OBJECT_SIGNATURE; };

        name : string;

        args : Array<any>;

        public constructor(name? : any, args? : any) {
            if(((typeof name === 'string') || name === null) && ((args != null && args instanceof <any>Array && (args.length==0 || args[0] == null ||(args[0] != null))) || args === null)) {
                let __args = Array.prototype.slice.call(arguments);
                if(this.name===undefined) this.name = null;
                if(this.args===undefined) this.args = null;
                if(this.name===undefined) this.name = null;
                if(this.args===undefined) this.args = null;
                (() => {
                    this.name = name;
                    this.args = args;
                })();
            } else if(((name != null && (name instanceof Function)) || name === null) && args === undefined) {
                let __args = Array.prototype.slice.call(arguments);
                let method : any = __args[0];
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let name : any = /* getName */method.name;
                    let args : any = method.getParameterTypes();
                    if(this.name===undefined) this.name = null;
                    if(this.args===undefined) this.args = null;
                    if(this.name===undefined) this.name = null;
                    if(this.args===undefined) this.args = null;
                    (() => {
                        this.name = name;
                        this.args = args;
                    })();
                }
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public equals(o : any) : boolean {
            if(o != null && o instanceof <any>ClassIntrospector.MethodSignature) {
                let ms : ClassIntrospector.MethodSignature = <ClassIntrospector.MethodSignature>o;
                return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(ms.name,this.name)) && /* equals */((a1, a2) => { if(a1==null && a2==null) return true; if(a1==null || a2==null) return false; if(a1.length != a2.length) return false; for(let i = 0; i < a1.length; i++) { if(<any>a1[i] != <any>a2[i]) return false; } return true; })(this.args, ms.args);
            }
            return false;
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.name)) ^ this.args.length;
        }
    }
    MethodSignature["__class"] = "freemarker.ext.beans.ClassIntrospector.MethodSignature";

}





ClassIntrospector.MethodSignature.GET_OBJECT_SIGNATURE_$LI$();

ClassIntrospector.MethodSignature.GET_STRING_SIGNATURE_$LI$();

ClassIntrospector.GENERIC_GET_KEY_$LI$();

ClassIntrospector.CONSTRUCTORS_KEY_$LI$();

ClassIntrospector.ARG_TYPES_BY_METHOD_KEY_$LI$();

ClassIntrospector.DEVELOPMENT_MODE_$LI$();

ClassIntrospector.LOG_$LI$();
