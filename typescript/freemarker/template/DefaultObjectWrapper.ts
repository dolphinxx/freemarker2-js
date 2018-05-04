/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BeansWrapper } from '../ext/beans/BeansWrapper';
import { BeansWrapperConfiguration } from '../ext/beans/BeansWrapperConfiguration';
import { Logger } from '../log/Logger';
import { ObjectWrapper } from './ObjectWrapper';
import { Version } from './Version';
import { Configuration } from './Configuration';
import { DefaultObjectWrapperConfiguration } from './DefaultObjectWrapperConfiguration';
import { _TemplateAPI } from './_TemplateAPI';
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';
import { SimpleScalar } from './SimpleScalar';
import { SimpleNumber } from './SimpleNumber';
import { SimpleDate } from './SimpleDate';
import { DefaultArrayAdapter } from './DefaultArrayAdapter';
import { DefaultListAdapter } from './DefaultListAdapter';
import { SimpleSequence } from './SimpleSequence';
import { DefaultNonListCollectionAdapter } from './DefaultNonListCollectionAdapter';
import { DefaultMapAdapter } from './DefaultMapAdapter';
import { SimpleHash } from './SimpleHash';
import { Boolean } from '../../java/lang/Boolean';
import { TemplateBooleanModel } from './TemplateBooleanModel';
import { DefaultIteratorAdapter } from './DefaultIteratorAdapter';
import { SimpleCollection } from './SimpleCollection';
import { DefaultEnumerationAdapter } from './DefaultEnumerationAdapter';
import { DefaultIterableAdapter } from './DefaultIterableAdapter';

/**
 * Use {link DefaultObjectWrapperBuilder} instead if possible. Instances created with this constructor won't share
 * the class introspection caches with other instances. See {link BeansWrapper#BeansWrapper(Version)} (the
 * superclass constructor) for more details.
 * 
 * @param {Version} incompatibleImprovements It's the same as in {link BeansWrapper#BeansWrapper(Version)}, plus these  changes:
 * <ul>
 * <li>2.3.22 (or higher): The default value of
 * {link #setUseAdaptersForContainers(boolean) useAdaptersForContainers} changes to
 * {@code true}.</li>
 * <li>2.3.24 (or higher): When wrapping an {link Iterator}, operations on it that only check if the
 * collection is empty without reading an element from it, such as {@code ?has_content},
 * won't cause the a later iteration (or further emptiness check) to fail anymore. Earlier, in
 * certain situations, the second operation has failed saying that the iterator "can be listed only
 * once".
 * <li>2.3.26 (or higher): {link Enumeration}-s are wrapped into {link DefaultEnumerationAdapter}
 * instead of into {link EnumerationModel} (as far as
 * {link #setUseAdaptersForContainers(boolean) useAdaptersForContainers} is {@code true}, which is
 * the default). This adapter is cleaner than {link EnumerationModel} as it only implements the
 * minimally required FTL type, which avoids some ambiguous situations. (Note that Java API methods
 * aren't exposed anymore as subvariables; if you really need them, you can use {@code ?api}).
 * </li>
 * </ul>
 * @since 2.3.21
 * @class
 * @extends BeansWrapper
 */
export class DefaultObjectWrapper extends freemarker.ext.beans.BeansWrapper {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!DefaultObjectWrapper.__static_initialized) { DefaultObjectWrapper.__static_initialized = true; DefaultObjectWrapper.__static_initializer_0(); } }

    /**
     * @deprecated Use {link DefaultObjectWrapperBuilder} instead, but mind its performance
     */
    static instance : DefaultObjectWrapper; public static instance_$LI$() : DefaultObjectWrapper { DefaultObjectWrapper.__static_initialize(); if(DefaultObjectWrapper.instance == null) DefaultObjectWrapper.instance = new DefaultObjectWrapper(); return DefaultObjectWrapper.instance; };

    static JYTHON_OBJ_CLASS : any; public static JYTHON_OBJ_CLASS_$LI$() : any { DefaultObjectWrapper.__static_initialize(); return DefaultObjectWrapper.JYTHON_OBJ_CLASS; };

    static JYTHON_WRAPPER : ObjectWrapper; public static JYTHON_WRAPPER_$LI$() : ObjectWrapper { DefaultObjectWrapper.__static_initialize(); return DefaultObjectWrapper.JYTHON_WRAPPER; };

    /*private*/ useAdaptersForContainers : boolean;

    /*private*/ forceLegacyNonListCollections : boolean;

    /*private*/ iterableSupport : boolean;

    /*private*/ useAdapterForEnumerations : boolean;

    public constructor(dowCfg? : any, writeProtected? : any) {
        if(((dowCfg != null && dowCfg instanceof <any>DefaultObjectWrapperConfiguration) || dowCfg === null) && ((typeof writeProtected === 'boolean') || writeProtected === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let bwCfg : any = <BeansWrapperConfiguration>dowCfg;
                super(bwCfg, writeProtected, false);
                if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
                if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
                if(this.iterableSupport===undefined) this.iterableSupport = false;
                if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
                if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
                if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
                if(this.iterableSupport===undefined) this.iterableSupport = false;
                if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
                (() => {
                    let dowDowCfg : DefaultObjectWrapperConfiguration = (bwCfg != null && bwCfg instanceof <any>DefaultObjectWrapperConfiguration)?<DefaultObjectWrapperConfiguration>bwCfg:new DefaultObjectWrapper.DefaultObjectWrapper$0(this, bwCfg.getIncompatibleImprovements());
                    this.useAdaptersForContainers = dowDowCfg.getUseAdaptersForContainers();
                    this.useAdapterForEnumerations = this.useAdaptersForContainers && this.getIncompatibleImprovements().intValue() >= _TemplateAPI.VERSION_INT_2_3_26_$LI$();
                    this.forceLegacyNonListCollections = dowDowCfg.getForceLegacyNonListCollections();
                    this.iterableSupport = dowDowCfg.getIterableSupport();
                    this.finalizeConstruction(writeProtected);
                })();
            }
        } else if(((dowCfg != null && dowCfg instanceof <any>BeansWrapperConfiguration) || dowCfg === null) && ((typeof writeProtected === 'boolean') || writeProtected === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let bwCfg : any = __args[0];
            super(bwCfg, writeProtected, false);
            if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
            if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
            if(this.iterableSupport===undefined) this.iterableSupport = false;
            if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
            if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
            if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
            if(this.iterableSupport===undefined) this.iterableSupport = false;
            if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
            (() => {
                let dowDowCfg : DefaultObjectWrapperConfiguration = (bwCfg != null && bwCfg instanceof <any>DefaultObjectWrapperConfiguration)?<DefaultObjectWrapperConfiguration>bwCfg:new DefaultObjectWrapper.DefaultObjectWrapper$0(this, bwCfg.getIncompatibleImprovements());
                this.useAdaptersForContainers = dowDowCfg.getUseAdaptersForContainers();
                this.useAdapterForEnumerations = this.useAdaptersForContainers && this.getIncompatibleImprovements().intValue() >= _TemplateAPI.VERSION_INT_2_3_26_$LI$();
                this.forceLegacyNonListCollections = dowDowCfg.getForceLegacyNonListCollections();
                this.iterableSupport = dowDowCfg.getIterableSupport();
                this.finalizeConstruction(writeProtected);
            })();
        } else if(((dowCfg != null && dowCfg instanceof <any>Version) || dowCfg === null) && writeProtected === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let incompatibleImprovements : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let bwCfg : any = new DefaultObjectWrapper.DefaultObjectWrapper$1(this, incompatibleImprovements);
                let writeProtected : any = false;
                super(bwCfg, writeProtected, false);
                if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
                if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
                if(this.iterableSupport===undefined) this.iterableSupport = false;
                if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
                if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
                if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
                if(this.iterableSupport===undefined) this.iterableSupport = false;
                if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
                (() => {
                    let dowDowCfg : DefaultObjectWrapperConfiguration = (bwCfg != null && bwCfg instanceof <any>DefaultObjectWrapperConfiguration)?<DefaultObjectWrapperConfiguration>bwCfg:new DefaultObjectWrapper.DefaultObjectWrapper$0(this, bwCfg.getIncompatibleImprovements());
                    this.useAdaptersForContainers = dowDowCfg.getUseAdaptersForContainers();
                    this.useAdapterForEnumerations = this.useAdaptersForContainers && this.getIncompatibleImprovements().intValue() >= _TemplateAPI.VERSION_INT_2_3_26_$LI$();
                    this.forceLegacyNonListCollections = dowDowCfg.getForceLegacyNonListCollections();
                    this.iterableSupport = dowDowCfg.getIterableSupport();
                    this.finalizeConstruction(writeProtected);
                })();
            }
        } else if(dowCfg === undefined && writeProtected === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let incompatibleImprovements : any = Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$();
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let bwCfg : any = new DefaultObjectWrapper.DefaultObjectWrapper$1(this, incompatibleImprovements);
                    let writeProtected : any = false;
                    super(bwCfg, writeProtected, false);
                    if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
                    if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
                    if(this.iterableSupport===undefined) this.iterableSupport = false;
                    if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
                    if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
                    if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
                    if(this.iterableSupport===undefined) this.iterableSupport = false;
                    if(this.useAdapterForEnumerations===undefined) this.useAdapterForEnumerations = false;
                    (() => {
                        let dowDowCfg : DefaultObjectWrapperConfiguration = (bwCfg != null && bwCfg instanceof <any>DefaultObjectWrapperConfiguration)?<DefaultObjectWrapperConfiguration>bwCfg:new DefaultObjectWrapper.DefaultObjectWrapper$0(this, bwCfg.getIncompatibleImprovements());
                        this.useAdaptersForContainers = dowDowCfg.getUseAdaptersForContainers();
                        this.useAdapterForEnumerations = this.useAdaptersForContainers && this.getIncompatibleImprovements().intValue() >= _TemplateAPI.VERSION_INT_2_3_26_$LI$();
                        this.forceLegacyNonListCollections = dowDowCfg.getForceLegacyNonListCollections();
                        this.iterableSupport = dowDowCfg.getIterableSupport();
                        this.finalizeConstruction(writeProtected);
                    })();
                }
            }
        } else throw new Error('invalid overload');
    }

    static __static_initializer_0() {
        let cl : any;
        let ow : ObjectWrapper;
        try {
            cl = /* forName */eval("org.python.core.PyObject".split('.').slice(-1)[0]);
            ow = <ObjectWrapper><any>/* get */null[/* getField */((c,p) => { return {owner:c,name:p}; })(/* forName */eval("freemarker.ext.jython.JythonWrapper".split('.').slice(-1)[0]),"INSTANCE").name];
        } catch(e) {
            cl = null;
            ow = null;
            if(!(e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0))) {
                try {
                    Logger.getLogger("freemarker.template.DefaultObjectWrapper").error("Failed to init Jython support, so it was disabled.", e);
                } catch(e2) {
                };
            }
        };
        DefaultObjectWrapper.JYTHON_OBJ_CLASS = cl;
        DefaultObjectWrapper.JYTHON_WRAPPER = ow;
    }

    public wrap(object? : any, method? : any) : any {
        if(((object != null) || object === null) && ((method != null && (method instanceof Function)) || method === null)) {
            super.wrap(object, method);
        } else if(((object != null) || object === null) && method === undefined) {
            return <any>this.wrap$java_lang_Object(object);
        } else throw new Error('invalid overload');
    }

    public wrap$java_lang_Object(obj : any) : TemplateModel {
        if(obj == null) {
            return super.wrap$java_lang_Object(null);
        }
        if(obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) {
            return <TemplateModel><any>obj;
        }
        if(typeof obj === 'string') {
            return new SimpleScalar(<string>obj);
        }
        if(typeof obj === 'number') {
            return new SimpleNumber(<number>obj);
        }
        if(obj != null && obj instanceof <any>Date) {
            if(obj != null && obj instanceof <any>Date) {
                return new SimpleDate(<Date>obj);
            }
            if(obj != null && obj instanceof <any>Time) {
                return new SimpleDate(<Time>obj);
            }
            if(obj != null && obj instanceof <any>Timestamp) {
                return new SimpleDate(<Timestamp>obj);
            }
            return new SimpleDate(<Date>obj, this.getDefaultDateType());
        }
        let objClass : any = (<any>obj.constructor);
        if(objClass.isArray()) {
            if(this.useAdaptersForContainers) {
                return DefaultArrayAdapter.adapt(obj, this);
            } else {
                obj = this.convertArray(obj);
            }
        }
        if(obj != null && (obj instanceof Array)) {
            if(this.useAdaptersForContainers) {
                if(obj != null && (obj instanceof Array)) {
                    return DefaultListAdapter.adapt(<List><any>obj, this);
                } else {
                    return this.forceLegacyNonListCollections?new SimpleSequence(<Collection><any>obj, this):DefaultNonListCollectionAdapter.adapt(<Collection><any>obj, this);
                }
            } else {
                return new SimpleSequence(<Collection><any>obj, this);
            }
        }
        if(obj != null && (obj instanceof Map)) {
            return this.useAdaptersForContainers?DefaultMapAdapter.adapt(<Map><any>obj, this):new SimpleHash(<Map><any>obj, this);
        }
        if(typeof obj === 'boolean') {
            return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(obj,true))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }
        if(obj != null && (obj instanceof Object)) {
            return this.useAdaptersForContainers?DefaultIteratorAdapter.adapt(<Iterator><any>obj, this):new SimpleCollection(<Iterator><any>obj, this);
        }
        if(this.useAdapterForEnumerations && (obj != null && (obj instanceof Object))) {
            return DefaultEnumerationAdapter.adapt(<Enumeration><any>obj, this);
        }
        if(this.iterableSupport && (obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("java.lang.Iterable") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("java.lang.Iterable") >= 0))) {
            return DefaultIterableAdapter.adapt(<Iterable><any>obj, this);
        }
        return this.handleUnknownType(obj);
    }

    /**
     * Called for an object that isn't considered to be of a "basic" Java type, like for an application specific type,
     * or for a W3C DOM node. In its default implementation, W3C {link Node}-s will be wrapped as {link NodeModel}-s
     * (allows DOM tree traversal), Jython objects will be delegated to the {@code JythonWrapper}, others will be
     * wrapped using {link BeansWrapper#wrap(Object)}.
     * <p>
     * <p>
     * When you override this method, you should first decide if you want to wrap the object in a custom way (and if so
     * then do it and return with the result), and if not, then you should call the super method (assuming the default
     * behavior is fine with you).
     * @param {Object} obj
     * @return {*}
     */
    handleUnknownType(obj : any) : TemplateModel {
        return super.wrap$java_lang_Object(obj);
    }

    /**
     * Converts an array to a java.util.List.
     * @param {Object} arr
     * @return {Object}
     */
    convertArray(arr : any) : any {
        let size : number = /* getLength */arr.length;
        let list : Array<any> = <any>([]);
        for(let i : number = 0; i < size; i++) {
            /* add */(list.push(/* get */arr[i])>0);
        };
        return list;
    }

    /**
     * The getter pair of {link #setUseAdaptersForContainers(boolean)}.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public getUseAdaptersForContainers() : boolean {
        return this.useAdaptersForContainers;
    }

    /**
     * Sets if to wrap container objects ({link Map}-s, {link List}-s, arrays and such) the legacy copying approach or
     * the newer adapter approach should be used. {@code true} is recommended, which is also the default when the
     * {@code incompatible_improvements} of this instance was set to {link Configuration#VERSION_2_3_22} or higher. To
     * understand the difference, check some of the classes that implement the two approaches:
     * <ul>
     * <li>Copying approach: {link SimpleHash}, {link SimpleSequence}</li>
     * <li>Adapter approach: {link DefaultMapAdapter}, {link DefaultListAdapter}, {link DefaultArrayAdapter},
     * {link DefaultIteratorAdapter}</li>
     * </ul>
     * <p>
     * <p>
     * See also the related Version History entry under 2.3.22 in the FreeMarker Manual, which gives a breakdown of
     * the consequences.
     * 
     * 
     * <b>Attention:</b> For backward compatibility, currently, non-{link List} collections (like {link Set}-s) will
     * only be wrapped with adapter approach (with {link DefaultNonListCollectionAdapter}) if
     * {link #setForceLegacyNonListCollections(boolean) forceLegacyNonListCollections} was set to {@code false}.
     * Currently the default is {@code true}, but in new projects you should set it to {@code false}. See
     * {link #setForceLegacyNonListCollections(boolean)} for more.
     * <p>
     * see #setForceLegacyNonListCollections(boolean)
     * 
     * @since 2.3.22
     * @param {boolean} useAdaptersForContainers
     */
    public setUseAdaptersForContainers(useAdaptersForContainers : boolean) {
        this.checkModifiable();
        this.useAdaptersForContainers = useAdaptersForContainers;
    }

    /**
     * Getter pair of {link #setForceLegacyNonListCollections(boolean)}; see there.
     * 
     * @since 2.3.22
     * @return {boolean}
     */
    public getForceLegacyNonListCollections() : boolean {
        return this.forceLegacyNonListCollections;
    }

    /**
     * Specifies whether non-{link List} {link Collection}-s (like {link Set}-s) must be wrapped by pre-fetching into
     * a {link SimpleSequence}. The modern approach is wrapping into a {link DefaultNonListCollectionAdapter}. This
     * setting only has effect when {link #getUseAdaptersForContainers()} is also {@code true}, as otherwise
     * {link SimpleSequence} will be used regardless of this. In new projects you should set this to {@code false}. At
     * least before {@code incompatible_improvements} 2.4.0 it defaults to {@code true}, because of backward
     * compatibility concerns: with {link TemplateSequenceModel} templates could access the items by index if they
     * wanted to (the index values were defined by the iteration order). This was not very useful, or was even
     * confusing, and it conflicts with the adapter approach.
     * <p>
     * see #setUseAdaptersForContainers(boolean)
     * 
     * @since 2.3.22
     * @param {boolean} forceLegacyNonListCollections
     */
    public setForceLegacyNonListCollections(forceLegacyNonListCollections : boolean) {
        this.checkModifiable();
        this.forceLegacyNonListCollections = forceLegacyNonListCollections;
    }

    /**
     * Getter pair of {link #setIterableSupport(boolean)}; see there.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public getIterableSupport() : boolean {
        return this.iterableSupport;
    }

    /**
     * Specifies whether {link Iterable}-s (not to be confused with {link Iterator}-s) that don't implement any other
     * recognized Java interfaces (most notably {link Collection}) will be recognized as listable objects
     * ({link TemplateCollectionModel}-s), or they will be just seen as generic objects (JavaBean-s). Defaults to
     * {@code false} for backward compatibility, but in new projects you should set this to {@code true}. Before setting
     * this to {@code true} in older projects, check if you have called {@code myIterable.iterator()} directly from any
     * templates, because the Java API is only exposed to the templates if the {link Iterable} is wrapped as generic
     * object.
     * 
     * @since 2.3.25
     * @param {boolean} iterableSupport
     */
    public setIterableSupport(iterableSupport : boolean) {
        this.checkModifiable();
        this.iterableSupport = iterableSupport;
    }

    /**
     * Returns the lowest version number that is equivalent with the parameter version.
     * 
     * @since 2.3.22
     * @param {Version} incompatibleImprovements
     * @return {Version}
     */
    static normalizeIncompatibleImprovementsVersion(incompatibleImprovements : Version) : Version {
        _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
        let bwIcI : Version = BeansWrapper.normalizeIncompatibleImprovementsVersion(incompatibleImprovements);
        return incompatibleImprovements.intValue() < _TemplateAPI.VERSION_INT_2_3_22_$LI$() || bwIcI.intValue() >= _TemplateAPI.VERSION_INT_2_3_22_$LI$()?bwIcI:Configuration.VERSION_2_3_22_$LI$();
    }

    /**
     * @since 2.3.22
     * @return {String}
     */
    toPropertiesString() : string {
        let bwProps : string = super.toPropertiesString();
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(bwProps, "simpleMapWrapper")) {
            let smwEnd : number = bwProps.indexOf(',');
            if(smwEnd !== -1) {
                bwProps = bwProps.substring(smwEnd + 1).trim();
            }
        }
        return "useAdaptersForContainers=" + this.useAdaptersForContainers + ", forceLegacyNonListCollections=" + this.forceLegacyNonListCollections + ", iterableSupport=" + this.iterableSupport + bwProps;
    }
}
DefaultObjectWrapper["__class"] = "freemarker.template.DefaultObjectWrapper";
DefaultObjectWrapper["__interfaces"] = ["freemarker.template.utility.WriteProtectable","freemarker.template.utility.RichObjectWrapper","freemarker.template.utility.ObjectWrapperWithAPISupport","freemarker.template.ObjectWrapperAndUnwrapper","freemarker.template.ObjectWrapper"];



export namespace DefaultObjectWrapper {

    export class DefaultObjectWrapper$0 extends DefaultObjectWrapperConfiguration {
        public __parent: any;
        constructor(__parent: any, __arg0: any) {
            super(__arg0);
            this.__parent = __parent;
        }
    }
    DefaultObjectWrapper$0["__interfaces"] = ["java.lang.Cloneable"];



    export class DefaultObjectWrapper$1 extends DefaultObjectWrapperConfiguration {
        public __parent: any;
        constructor(__parent: any, __arg0: any) {
            super(__arg0);
            this.__parent = __parent;
        }
    }
    DefaultObjectWrapper$1["__interfaces"] = ["java.lang.Cloneable"];


}



var __Function = Function;

DefaultObjectWrapper.JYTHON_WRAPPER_$LI$();

DefaultObjectWrapper.JYTHON_OBJ_CLASS_$LI$();

DefaultObjectWrapper.instance_$LI$();

DefaultObjectWrapper.__static_initialize();
