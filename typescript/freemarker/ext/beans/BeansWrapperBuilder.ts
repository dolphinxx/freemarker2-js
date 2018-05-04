/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Version } from '../../template/Version';
import { BeansWrapperConfiguration } from './BeansWrapperConfiguration';
import { BeansWrapper } from './BeansWrapper';
import { _BeansAPI } from './_BeansAPI';

/**
 * See {link BeansWrapperConfiguration#BeansWrapperConfiguration(Version)}.
 * @param {Version} incompatibleImprovements
 * @class
 * @extends BeansWrapperConfiguration
 */
export class BeansWrapperBuilder extends BeansWrapperConfiguration {
    static INSTANCE_CACHE : Map<any, any>; public static INSTANCE_CACHE_$LI$() : Map { if(BeansWrapperBuilder.INSTANCE_CACHE == null) BeansWrapperBuilder.INSTANCE_CACHE = <any>(new Map<any, any>()); return BeansWrapperBuilder.INSTANCE_CACHE; };

    static INSTANCE_CACHE_REF_QUEUE : ReferenceQueue; public static INSTANCE_CACHE_REF_QUEUE_$LI$() : ReferenceQueue { if(BeansWrapperBuilder.INSTANCE_CACHE_REF_QUEUE == null) BeansWrapperBuilder.INSTANCE_CACHE_REF_QUEUE = <any>(new ReferenceQueue<BeansWrapper>()); return BeansWrapperBuilder.INSTANCE_CACHE_REF_QUEUE; };

    public constructor(incompatibleImprovements : Version) {
        super(incompatibleImprovements);
    }

    /**
     * For unit testing only
     */
    static clearInstanceCache() {
        {
            /* clear */(<any>BeansWrapperBuilder.INSTANCE_CACHE_$LI$()).clear();
        };
    }

    /**
     * For unit testing only
     * @return {Map}
     */
    static getInstanceCache() : Map {
        return BeansWrapperBuilder.INSTANCE_CACHE_$LI$();
    }

    /**
     * Returns a {link BeansWrapper} instance that matches the settings of this builder. This will be possibly a
     * singleton that is also in use elsewhere, not necessarily a new object.
     * @return {BeansWrapper}
     */
    public build() : BeansWrapper {
        return <any>(_BeansAPI.getBeansWrapperSubclassSingleton<any, any>(this, BeansWrapperBuilder.INSTANCE_CACHE_$LI$(), BeansWrapperBuilder.INSTANCE_CACHE_REF_QUEUE_$LI$(), BeansWrapperBuilder.BeansWrapperFactory.INSTANCE_$LI$()));
    }
}
BeansWrapperBuilder["__class"] = "freemarker.ext.beans.BeansWrapperBuilder";
BeansWrapperBuilder["__interfaces"] = ["java.lang.Cloneable"];



export namespace BeansWrapperBuilder {

    export class BeansWrapperFactory implements _BeansAPI._BeansWrapperSubclassFactory<BeansWrapper, BeansWrapperConfiguration> {
        static INSTANCE : BeansWrapperBuilder.BeansWrapperFactory; public static INSTANCE_$LI$() : BeansWrapperBuilder.BeansWrapperFactory { if(BeansWrapperFactory.INSTANCE == null) BeansWrapperFactory.INSTANCE = new BeansWrapperBuilder.BeansWrapperFactory(); return BeansWrapperFactory.INSTANCE; };

        public create(bwConf : BeansWrapperConfiguration) : BeansWrapper {
            return new BeansWrapper(bwConf, true);
        }

        constructor() {
        }
    }
    BeansWrapperFactory["__class"] = "freemarker.ext.beans.BeansWrapperBuilder.BeansWrapperFactory";
    BeansWrapperFactory["__interfaces"] = ["freemarker.ext.beans._BeansAPI._BeansWrapperSubclassFactory"];


}



var __Function = Function;

BeansWrapperBuilder.BeansWrapperFactory.INSTANCE_$LI$();

BeansWrapperBuilder.INSTANCE_CACHE_REF_QUEUE_$LI$();

BeansWrapperBuilder.INSTANCE_CACHE_$LI$();
