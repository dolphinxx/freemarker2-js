/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_BeansAPI} from '../ext/beans/_BeansAPI';
import {DefaultObjectWrapperConfiguration} from './DefaultObjectWrapperConfiguration';
import {DefaultObjectWrapper} from './DefaultObjectWrapper';
import {Version} from './Version';
import {Map} from "../../java/util/Map";

/**
 * Creates a builder that creates a {link DefaultObjectWrapper} with the given {@code incompatibleImprovements};
 * using at least 2.3.22 is highly recommended. See {link DefaultObjectWrapper#DefaultObjectWrapper(Version)} for
 * more information about the impact of {@code incompatibleImprovements} values.
 * @param {Version} incompatibleImprovements
 * @class
 * @extends DefaultObjectWrapperConfiguration
 */
export class DefaultObjectWrapperBuilder extends DefaultObjectWrapperConfiguration {
    static INSTANCE_CACHE : Map<any, any>; public static INSTANCE_CACHE_$LI$() : Map<any, any> { if(DefaultObjectWrapperBuilder.INSTANCE_CACHE == null) DefaultObjectWrapperBuilder.INSTANCE_CACHE = <any>(new Map<any, any>()); return DefaultObjectWrapperBuilder.INSTANCE_CACHE; };

    static INSTANCE_CACHE_REF_QUEUE : any[] = [];

    public constructor(incompatibleImprovements : Version) {
        super(incompatibleImprovements);
    }

    /**
     * For unit testing only
     */
    static clearInstanceCache() {
        {
            /* clear */(<any>DefaultObjectWrapperBuilder.INSTANCE_CACHE_$LI$()).clear();
        }
    }

    /**
     * Returns a {link DefaultObjectWrapper} instance that matches the settings of this builder. This will be possibly
     * a singleton that is also in use elsewhere.
     * @return {DefaultObjectWrapper}
     */
    public build() : DefaultObjectWrapper {
        return <any>(_BeansAPI.getBeansWrapperSubclassSingleton<any, any>(this, DefaultObjectWrapperBuilder.INSTANCE_CACHE_$LI$(), DefaultObjectWrapperBuilder.INSTANCE_CACHE_REF_QUEUE, DefaultObjectWrapperBuilder.DefaultObjectWrapperFactory.INSTANCE_$LI$()));
    }
}
DefaultObjectWrapperBuilder["__class"] = "freemarker.template.DefaultObjectWrapperBuilder";
DefaultObjectWrapperBuilder["__interfaces"] = ["java.lang.Cloneable"];



export namespace DefaultObjectWrapperBuilder {

    export class DefaultObjectWrapperFactory implements _BeansAPI._BeansWrapperSubclassFactory<DefaultObjectWrapper, DefaultObjectWrapperConfiguration> {
        static INSTANCE : DefaultObjectWrapperBuilder.DefaultObjectWrapperFactory; public static INSTANCE_$LI$() : DefaultObjectWrapperBuilder.DefaultObjectWrapperFactory { if(DefaultObjectWrapperFactory.INSTANCE == null) DefaultObjectWrapperFactory.INSTANCE = new DefaultObjectWrapperBuilder.DefaultObjectWrapperFactory(); return DefaultObjectWrapperFactory.INSTANCE; };

        public create$freemarker_template_DefaultObjectWrapperConfiguration(bwConf : DefaultObjectWrapperConfiguration) : DefaultObjectWrapper {
            return new DefaultObjectWrapper(bwConf, true);
        }

        public create(bwConf? : any) : any {
            if(((bwConf != null && bwConf instanceof <any>DefaultObjectWrapperConfiguration) || bwConf === null)) {
                return <any>this.create$freemarker_template_DefaultObjectWrapperConfiguration(bwConf);
            } else throw new Error('invalid overload');
        }

        constructor() {
        }
    }
    DefaultObjectWrapperFactory["__class"] = "freemarker.template.DefaultObjectWrapperBuilder.DefaultObjectWrapperFactory";
    DefaultObjectWrapperFactory["__interfaces"] = ["freemarker.ext.beans._BeansAPI._BeansWrapperSubclassFactory"];


}





DefaultObjectWrapperBuilder.DefaultObjectWrapperFactory.INSTANCE_$LI$();

DefaultObjectWrapperBuilder.INSTANCE_CACHE_$LI$();
