/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BeansWrapperConfiguration} from '../ext/beans/BeansWrapperConfiguration';
import {Version} from './Version';
import {DefaultObjectWrapper} from './DefaultObjectWrapper';

/**
 * Holds {link DefaultObjectWrapper} configuration settings and defines their defaults.
 * You will not use this abstract class directly, but concrete subclasses like {link DefaultObjectWrapperBuilder}.
 * Unless, you are developing a builder for a custom {link DefaultObjectWrapper} subclass. In that case, note that
 * overriding the {link #equals} and {link #hashCode} is important, as these objects are used as {link ObjectWrapper}
 * singleton lookup keys.
 * 
 * @since 2.3.22
 * @extends BeansWrapperConfiguration
 * @class
 */
export abstract class DefaultObjectWrapperConfiguration extends BeansWrapperConfiguration {
    /*private*/ useAdaptersForContainers : boolean;

    /*private*/ forceLegacyNonListCollections : boolean;

    /*private*/ iterableSupport : boolean;

    constructor(incompatibleImprovements : Version) {
        super(DefaultObjectWrapper.normalizeIncompatibleImprovementsVersion(incompatibleImprovements), true);
        if(this.useAdaptersForContainers===undefined) this.useAdaptersForContainers = false;
        if(this.forceLegacyNonListCollections===undefined) this.forceLegacyNonListCollections = false;
        if(this.iterableSupport===undefined) this.iterableSupport = false;
        this.useAdaptersForContainers = this.getIncompatibleImprovements().intValue() >= /*_TemplateAPI.VERSION_INT_2_3_22*/2003022;
        this.forceLegacyNonListCollections = true;
    }

    /**
     * See {link DefaultObjectWrapper#getUseAdaptersForContainers()}.
     * @return {boolean}
     */
    public getUseAdaptersForContainers() : boolean {
        return this.useAdaptersForContainers;
    }

    /**
     * See {link DefaultObjectWrapper#setUseAdaptersForContainers(boolean)}.
     * @param {boolean} useAdaptersForContainers
     */
    public setUseAdaptersForContainers(useAdaptersForContainers : boolean) {
        this.useAdaptersForContainers = useAdaptersForContainers;
    }

    /**
     * See {link DefaultObjectWrapper#getForceLegacyNonListCollections()}.
     * @return {boolean}
     */
    public getForceLegacyNonListCollections() : boolean {
        return this.forceLegacyNonListCollections;
    }

    /**
     * See {link DefaultObjectWrapper#setForceLegacyNonListCollections(boolean)}.
     * @param {boolean} legacyNonListCollectionWrapping
     */
    public setForceLegacyNonListCollections(legacyNonListCollectionWrapping : boolean) {
        this.forceLegacyNonListCollections = legacyNonListCollectionWrapping;
    }

    /**
     * See {link DefaultObjectWrapper#getIterableSupport()}.
     * 
     * @since 2.3.25
     * @return {boolean}
     */
    public getIterableSupport() : boolean {
        return this.iterableSupport;
    }

    /**
     * See {link DefaultObjectWrapper#setIterableSupport(boolean)}.
     * 
     * @since 2.3.25
     * @param {boolean} iterableSupport
     */
    public setIterableSupport(iterableSupport : boolean) {
        this.iterableSupport = iterableSupport;
    }

    /**
     * 
     * @return {number}
     */
    public hashCode() : number {
        let result : number = /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this));
        let prime : number = 31;
        result = result * prime + (this.useAdaptersForContainers?1231:1237);
        result = result * prime + (this.forceLegacyNonListCollections?1231:1237);
        result = result * prime + (this.iterableSupport?1231:1237);
        return result;
    }

    /**
     * 
     * @param {Object} that
     * @return {boolean}
     */
    public equals(that : any) : boolean {
        if(!super.equals(that)) return false;
        let thatDowCfg : DefaultObjectWrapperConfiguration = <DefaultObjectWrapperConfiguration>that;
        return this.useAdaptersForContainers === thatDowCfg.getUseAdaptersForContainers() && this.forceLegacyNonListCollections === thatDowCfg.forceLegacyNonListCollections && this.iterableSupport === thatDowCfg.iterableSupport;
    }
}
DefaultObjectWrapperConfiguration["__class"] = "freemarker.template.DefaultObjectWrapperConfiguration";
DefaultObjectWrapperConfiguration["__interfaces"] = ["java.lang.Cloneable"];





