/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {TemplateDateModel} from '../../template/TemplateDateModel';
import {Version} from '../../template/Version';
import {_TemplateAPI} from '../../template/_TemplateAPI';
import {ClassIntrospectorBuilder} from './ClassIntrospectorBuilder';
import {BeansWrapper} from './BeansWrapper';
import {MethodAppearanceFineTuner} from './MethodAppearanceFineTuner';
import {MethodSorter} from './MethodSorter';

/**
 * Holds {link BeansWrapper} configuration settings and defines their defaults.
 * You will not use this abstract class directly, but concrete subclasses like {link BeansWrapperBuilder} and
 * {link DefaultObjectWrapperBuilder}. Unless, you are developing a builder for a custom {link BeansWrapper} subclass.
 * 
 * <p>This class is designed so that its instances can be used as lookup keys in a singleton cache. This is also why
 * this class defines the configuration setting defaults for {link BeansWrapper}, instead of leaving that to
 * {link BeansWrapper} itself. (Because, the default values influence the lookup key, and the singleton needs to be
 * looked up without creating a {link BeansWrapper} instance.) However, because instances are mutable, you should
 * deep-clone it with {link #clone(boolean)} before using it as cache key.
 * 
 * @since 2.3.21
 * @class
 */
export abstract class BeansWrapperConfiguration {
    /*private*/ incompatibleImprovements : Version;

    /*private*/ classIntrospectorBuilder : ClassIntrospectorBuilder;

    /*private*/ simpleMapWrapper : boolean = false;

    /*private*/ preferIndexedReadMethod : boolean;

    /*private*/ defaultDateType : number = TemplateDateModel.UNKNOWN;

    /*private*/ outerIdentity : ObjectWrapper = null;

    /*private*/ strict : boolean = false;

    /*private*/ useModelCache : boolean = false;

    public constructor(incompatibleImprovements? : any, isIncompImprsAlreadyNormalized? : any) {
        if(((incompatibleImprovements != null && incompatibleImprovements instanceof <any>Version) || incompatibleImprovements === null) && ((typeof isIncompImprsAlreadyNormalized === 'boolean') || isIncompImprsAlreadyNormalized === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
            if(this.classIntrospectorBuilder===undefined) this.classIntrospectorBuilder = null;
            if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
            this.simpleMapWrapper = false;
            this.defaultDateType = TemplateDateModel.UNKNOWN;
            this.outerIdentity = null;
            this.strict = false;
            this.useModelCache = false;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
            if(this.classIntrospectorBuilder===undefined) this.classIntrospectorBuilder = null;
            if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
            (() => {
                _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
                incompatibleImprovements = isIncompImprsAlreadyNormalized?incompatibleImprovements:BeansWrapper.normalizeIncompatibleImprovementsVersion(incompatibleImprovements);
                this.incompatibleImprovements = incompatibleImprovements;
                this.preferIndexedReadMethod = incompatibleImprovements.intValue() < /*_TemplateAPI.VERSION_INT_2_3_27*/2003027;
                this.classIntrospectorBuilder = new ClassIntrospectorBuilder(incompatibleImprovements);
            })();
        } else if(((incompatibleImprovements != null && incompatibleImprovements instanceof <any>Version) || incompatibleImprovements === null) && isIncompImprsAlreadyNormalized === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let isIncompImprsAlreadyNormalized : any = false;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
                if(this.classIntrospectorBuilder===undefined) this.classIntrospectorBuilder = null;
                if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
                this.simpleMapWrapper = false;
                this.defaultDateType = TemplateDateModel.UNKNOWN;
                this.outerIdentity = null;
                this.strict = false;
                this.useModelCache = false;
                if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
                if(this.classIntrospectorBuilder===undefined) this.classIntrospectorBuilder = null;
                if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
                (() => {
                    _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
                    incompatibleImprovements = isIncompImprsAlreadyNormalized?incompatibleImprovements:BeansWrapper.normalizeIncompatibleImprovementsVersion(incompatibleImprovements);
                    this.incompatibleImprovements = incompatibleImprovements;
                    this.preferIndexedReadMethod = incompatibleImprovements.intValue() < /*_TemplateAPI.VERSION_INT_2_3_27*/2003027;
                    this.classIntrospectorBuilder = new ClassIntrospectorBuilder(incompatibleImprovements);
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @return {number}
     */
    public hashCode() : number {
        let prime : number = 31;
        let result : number = 1;
        result = prime * result + /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.incompatibleImprovements));
        result = prime * result + (this.simpleMapWrapper?1231:1237);
        result = prime * result + (this.preferIndexedReadMethod?1231:1237);
        result = prime * result + this.defaultDateType;
        result = prime * result + (this.outerIdentity != null?/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.outerIdentity)):0);
        result = prime * result + (this.strict?1231:1237);
        result = prime * result + (this.useModelCache?1231:1237);
        result = prime * result + /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.classIntrospectorBuilder));
        return result;
    }

    /**
     * Two {link BeansWrapperConfiguration}-s are equal exactly if their classes are identical ({@code ==}), and their
     * field values are equal.
     * @param {Object} obj
     * @return {boolean}
     */
    public equals(obj : any) : boolean {
        if(this === obj) return true;
        if(obj == null) return false;
        if((<any>this.constructor) !== (<any>obj.constructor)) return false;
        let other : BeansWrapperConfiguration = <BeansWrapperConfiguration>obj;
        if(!this.incompatibleImprovements.equals(other.incompatibleImprovements)) return false;
        if(this.simpleMapWrapper !== other.simpleMapWrapper) return false;
        if(this.preferIndexedReadMethod !== other.preferIndexedReadMethod) return false;
        if(this.defaultDateType !== other.defaultDateType) return false;
        if(this.outerIdentity !== other.outerIdentity) return false;
        if(this.strict !== other.strict) return false;
        if(this.useModelCache !== other.useModelCache) return false;
        return this.classIntrospectorBuilder.equals(other.classIntrospectorBuilder);
    }

    clone(deepCloneKey : boolean) : any {
        try {
            let clone : BeansWrapperConfiguration = <BeansWrapperConfiguration>/* clone *//* clone */((o:any) => { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; })(this);
            if(deepCloneKey) {
                clone.classIntrospectorBuilder = <ClassIntrospectorBuilder>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this.classIntrospectorBuilder);
            }
            return clone;
        } catch(e) {
            throw Object.defineProperty(new Error("Failed to clone BeansWrapperConfiguration"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    public isSimpleMapWrapper() : boolean {
        return this.simpleMapWrapper;
    }

    /**
     * See {link BeansWrapper#setSimpleMapWrapper(boolean)}.
     * @param {boolean} simpleMapWrapper
     */
    public setSimpleMapWrapper(simpleMapWrapper : boolean) {
        this.simpleMapWrapper = simpleMapWrapper;
    }

    /**
     * @since 2.3.27
     * @return {boolean}
     */
    public getPreferIndexedReadMethod() : boolean {
        return this.preferIndexedReadMethod;
    }

    /**
     * See {link BeansWrapper#setPreferIndexedReadMethod(boolean)}. @since 2.3.27
     * @param {boolean} preferIndexedReadMethod
     */
    public setPreferIndexedReadMethod(preferIndexedReadMethod : boolean) {
        this.preferIndexedReadMethod = preferIndexedReadMethod;
    }

    public getDefaultDateType() : number {
        return this.defaultDateType;
    }

    /**
     * See {link BeansWrapper#setDefaultDateType(int)}.
     * @param {number} defaultDateType
     */
    public setDefaultDateType(defaultDateType : number) {
        this.defaultDateType = defaultDateType;
    }

    public getOuterIdentity() : ObjectWrapper {
        return this.outerIdentity;
    }

    /**
     * See {link BeansWrapper#setOuterIdentity(ObjectWrapper)}, except here the default is {@code null} that means
     * the {link ObjectWrapper} that you will set up with this {link BeansWrapperBuilder} object.
     * @param {*} outerIdentity
     */
    public setOuterIdentity(outerIdentity : ObjectWrapper) {
        this.outerIdentity = outerIdentity;
    }

    public isStrict() : boolean {
        return this.strict;
    }

    /**
     * See {link BeansWrapper#setStrict(boolean)}.
     * @param {boolean} strict
     */
    public setStrict(strict : boolean) {
        this.strict = strict;
    }

    public getUseModelCache() : boolean {
        return this.useModelCache;
    }

    /**
     * See {link BeansWrapper#setUseCache(boolean)} (it means the same).
     * @param {boolean} useModelCache
     */
    public setUseModelCache(useModelCache : boolean) {
        this.useModelCache = useModelCache;
    }

    public getIncompatibleImprovements() : Version {
        return this.incompatibleImprovements;
    }

    public getExposureLevel() : number {
        return this.classIntrospectorBuilder.getExposureLevel();
    }

    /**
     * See {link BeansWrapper#setExposureLevel(int)}.
     * @param {number} exposureLevel
     */
    public setExposureLevel(exposureLevel : number) {
        this.classIntrospectorBuilder.setExposureLevel(exposureLevel);
    }

    public getExposeFields() : boolean {
        return this.classIntrospectorBuilder.getExposeFields();
    }

    /**
     * See {link BeansWrapper#setExposeFields(boolean)}.
     * @param {boolean} exposeFields
     */
    public setExposeFields(exposeFields : boolean) {
        this.classIntrospectorBuilder.setExposeFields(exposeFields);
    }

    public getTreatDefaultMethodsAsBeanMembers() : boolean {
        return this.classIntrospectorBuilder.getTreatDefaultMethodsAsBeanMembers();
    }

    /**
     * See {link BeansWrapper#setTreatDefaultMethodsAsBeanMembers(boolean)}
     * @param {boolean} treatDefaultMethodsAsBeanMembers
     */
    public setTreatDefaultMethodsAsBeanMembers(treatDefaultMethodsAsBeanMembers : boolean) {
        this.classIntrospectorBuilder.setTreatDefaultMethodsAsBeanMembers(treatDefaultMethodsAsBeanMembers);
    }

    public getMethodAppearanceFineTuner() : MethodAppearanceFineTuner {
        return this.classIntrospectorBuilder.getMethodAppearanceFineTuner();
    }

    /**
     * See {link BeansWrapper#setMethodAppearanceFineTuner(MethodAppearanceFineTuner)}; additionally,
     * note that currently setting this to non-{@code null} will disable class introspection cache sharing, unless
     * the value implements {link SingletonCustomizer}.
     * @param {*} methodAppearanceFineTuner
     */
    public setMethodAppearanceFineTuner(methodAppearanceFineTuner : MethodAppearanceFineTuner) {
        this.classIntrospectorBuilder.setMethodAppearanceFineTuner(methodAppearanceFineTuner);
    }

    getMethodSorter() : MethodSorter {
        return this.classIntrospectorBuilder.getMethodSorter();
    }

    setMethodSorter(methodSorter : MethodSorter) {
        this.classIntrospectorBuilder.setMethodSorter(methodSorter);
    }

    getClassIntrospectorBuilder() : ClassIntrospectorBuilder {
        return this.classIntrospectorBuilder;
    }
}
BeansWrapperConfiguration["__class"] = "freemarker.ext.beans.BeansWrapperConfiguration";
BeansWrapperConfiguration["__interfaces"] = ["java.lang.Cloneable"];





