/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BeansWrapper} from '../ext/beans/BeansWrapper';
import {TemplateModel} from './TemplateModel';
import {ClassUtil} from "./utility/ClassUtil";
import {Collection} from "../../java/util/Collection";
import {List} from "../../java/util/List";
import {Map} from "../../java/util/Map";
import {Iterator} from "../../java/util/Iterator";
import {Iterable} from "../../java/lang/Iterable";
import {Time} from "../../java/sql/Time";
import {Timestamp} from "../../java/sql/Timestamp";

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
export class DefaultObjectWrapper extends BeansWrapper {

    private useAdaptersForContainers:boolean;
    private forceLegacyNonListCollections:boolean;
    private iterableSupport:boolean;
    private useAdapterForEnumerations:boolean;

    public constructor(dowCfg?: any, writeProtected?: any) {
        if(arguments.length === 0) {
            const defaultVersion:any = (require('./Configuration').Configuration).DEFAULT_INCOMPATIBLE_IMPROVEMENTS;
            dowCfg = new (require('./DefaultObjectWrapperConfiguration').DefaultObjectWrapperConfiguration)(defaultVersion);
            writeProtected = false;
        } else if(arguments.length === 1) {
            dowCfg = new (require('./DefaultObjectWrapperConfiguration').DefaultObjectWrapperConfiguration)(dowCfg);
            writeProtected = false;
        } else {
            if(!(ClassUtil.isAssignableFrom(dowCfg, 'freemarker.template.DefaultObjectWrapperConfiguration'))) {
                dowCfg = new (require('./DefaultObjectWrapperConfiguration').DefaultObjectWrapperConfiguration)(dowCfg.getIncompaibleImprovements());
            }
        }
        super(dowCfg, writeProtected);
        this.useAdaptersForContainers = dowCfg.getUseAdaptersForContainers();
        this.useAdapterForEnumerations = this.useAdaptersForContainers && this.getIncompatibleImprovements().intValue() >= 2003026;
        this.forceLegacyNonListCollections = dowCfg.getForceLegacyNonListCollections();
        this.iterableSupport = dowCfg.getIterableSupport();
        this.finalizeConstruction(writeProtected);
    }

    public wrap(obj: any, method? : any): any {
        if(arguments.length === 2) {
            throw new Error();
        }
        return this.wrap$java_lang_Object(obj);
    }

    public wrap$java_lang_Object(obj: any): any {
        if (obj == null) {
            return super.wrap(null);
        }
        if (ClassUtil.isAssignableFrom(obj, 'freemarker.template.TemplateModel')) {
            return <TemplateModel> obj;
        }
        if (typeof obj === 'string') {
            return new (require('./SimpleScalar').SimpleScalar)(<string> obj);
        }
        if (typeof obj === 'number') {
            return new (require('./SimpleNumber').SimpleNumber)(<number> obj);
        }
        if(obj instanceof Date) {
            return new (require('./SimpleDate').SimpleDate)(obj);
        }
        if (obj instanceof Date) {
            if (obj instanceof Time) {
                return new (require('./SimpleDate').SimpleDate)(<Time> obj);
            }
            if (obj instanceof Timestamp) {
                return new (require('./SimpleDate').SimpleDate)(<Timestamp> obj);
            }
            if (obj instanceof Date) {
                return new (require('./SimpleDate').SimpleDate)(<Date> obj);
            }
            return new (require('./SimpleDate').SimpleDate)(<Date> obj, this.getDefaultDateType());
        }
        if (Array.isArray(obj)) {
            if (this.useAdaptersForContainers) {
                return (require('./DefaultArrayAdapter').DefaultArrayAdapter).adapt(obj, this);
            } else {
                obj = this.convertArray(obj);
                // Falls through (a strange legacy...)
            }
        }
        if (ClassUtil.isAssignableFrom(obj, 'java.util.Collection')) {
            if (this.useAdaptersForContainers) {
                if (obj instanceof List) {
                    return (require('./DefaultListAdapter').DefaultListAdapter).adapt(<List> obj, this);
                } else {
                    return this.forceLegacyNonListCollections
                        ? new (require('./SimpleSequence').SimpleSequence)(<Collection> obj, this)
                        : (require('./DefaultNonListCollectionAdapter').DefaultNonListCollectionAdapter).adapt(<Collection> obj, this);
                }
            } else {
                return new (require('./SimpleSequence').SimpleSequence)(<Collection> obj, this);
            }
        }
        if (obj instanceof Map) {
            return this.useAdaptersForContainers
                ? (require('./DefaultMapAdapter').DefaultMapAdapter).adapt(<Map> obj, this)
                : new (require('./SimpleHash').SimpleHash)(<Map> obj, this);
        }
        if (typeof obj === 'boolean') {
            return <boolean>obj ? (require('./TemplateBooleanModel').TemplateBooleanModel).TRUE : (require('./TemplateBooleanModel').TemplateBooleanModel).FALSE;
        }
        if (ClassUtil.isAssignableFrom(obj, 'java.util.Iterator')) {
            return this.useAdaptersForContainers
                ? (require('./DefaultIteratorAdapter').DefaultIteratorAdapter).adapt(<Iterator> obj, this)
                : new (require('./SimpleCollection').SimpleCollection)(<Iterator> obj, this);
        }
        // if (this.useAdapterForEnumerations && obj instanceof Enumeration) {
        //     return DefaultEnumerationAdapter.adapt((Enumeration<?>) obj, this);
        // }
        if (this.iterableSupport && ClassUtil.isAssignableFrom(obj, 'java.lang.Iterable')) {
            return (require('./DefaultIterableAdapter').DefaultIterableAdapter).adapt(<Iterable> obj, this);
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
    handleUnknownType(obj: any): TemplateModel {
        return super.wrap$java_lang_Object(obj);
    }

    /**
     * Converts an array to a java.util.List.
     * @param {Object} arr
     * @return {Object}
     */
    convertArray(arr: any): any {
        let size: number = /* getLength */arr.length;
        let list: Array<any> = <any>([]);
        for (let i: number = 0; i < size; i++) {
            /* add */
            (list.push(/* get */arr[i]) > 0);
        }
        return list;
    }

    /**
     * The getter pair of {link #setUseAdaptersForContainers(boolean)}.
     *
     * @since 2.3.22
     * @return {boolean}
     */
    public getUseAdaptersForContainers(): boolean {
        return false;
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
    public setUseAdaptersForContainers(useAdaptersForContainers: boolean) {
        // this.checkModifiable();
        // this.useAdaptersForContainers = useAdaptersForContainers;
    }

    /**
     * Getter pair of {link #setForceLegacyNonListCollections(boolean)}; see there.
     *
     * @since 2.3.22
     * @return {boolean}
     */
    public getForceLegacyNonListCollections(): boolean {
        return false;
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
    public setForceLegacyNonListCollections(forceLegacyNonListCollections: boolean) {
        // this.checkModifiable();
        // this.forceLegacyNonListCollections = forceLegacyNonListCollections;
    }

    /**
     * Getter pair of {link #setIterableSupport(boolean)}; see there.
     *
     * @since 2.3.25
     * @return {boolean}
     */
    public getIterableSupport(): boolean {
        return true;
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
    public setIterableSupport(iterableSupport: boolean) {
        // this.checkModifiable();
        // this.iterableSupport = iterableSupport;
    }

    /**
     * Returns the lowest version number that is equivalent with the parameter version.
     *
     * @since 2.3.22
     * @param {Version} incompatibleImprovements
     * @return {Version}
     */
    static normalizeIncompatibleImprovementsVersion(incompatibleImprovements: any): any {
        // _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
        // let bwIcI: Version = BeansWrapper.normalizeIncompatibleImprovementsVersion(incompatibleImprovements);
        // return incompatibleImprovements.intValue() < _TemplateAPI.VERSION_INT_2_3_22_$LI$() || bwIcI.intValue() >= _TemplateAPI.VERSION_INT_2_3_22_$LI$() ? bwIcI : Configuration.VERSION_2_3_22_$LI$();
        return incompatibleImprovements;
    }

    /**
     * @since 2.3.22
     * @return {String}
     */
    toPropertiesString(): string {
        let bwProps: string = super.toPropertiesString();
        if (/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(bwProps, "simpleMapWrapper")) {
            let smwEnd: number = bwProps.indexOf(',');
            if (smwEnd !== -1) {
                bwProps = bwProps.substring(smwEnd + 1).trim();
            }
        }
        return "useAdaptersForContainers=" + false + ", forceLegacyNonListCollections=" + false + ", iterableSupport=" + true + bwProps;
    }
}

DefaultObjectWrapper["__class"] = "freemarker.template.DefaultObjectWrapper";
DefaultObjectWrapper["__interfaces"] = ["freemarker.template.utility.WriteProtectable", "freemarker.template.utility.RichObjectWrapper", "freemarker.template.utility.ObjectWrapperWithAPISupport", "freemarker.template.ObjectWrapperAndUnwrapper", "freemarker.template.ObjectWrapper"];


export namespace DefaultObjectWrapper {

    // export class DefaultObjectWrapper$0 extends DefaultObjectWrapperConfiguration {
    //     public __parent: any;
    //
    //     constructor(__parent: any, __arg0: any) {
    //         super(__arg0);
    //         this.__parent = __parent;
    //     }
    // }
    //
    // DefaultObjectWrapper$0["__interfaces"] = ["java.lang.Cloneable"];
    //
    //
    // export class DefaultObjectWrapper$1 extends DefaultObjectWrapperConfiguration {
    //     public __parent: any;
    //
    //     constructor(__parent: any, __arg0: any) {
    //         super(__arg0);
    //         this.__parent = __parent;
    //     }
    // }
    //
    // DefaultObjectWrapper$1["__interfaces"] = ["java.lang.Cloneable"];


}