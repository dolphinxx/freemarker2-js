/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ModelCache } from '../util/ModelCache';
import { ModelFactory } from '../util/ModelFactory';
import { TemplateModel } from '../../template/TemplateModel';
import { BeansWrapper } from './BeansWrapper';
import { Boolean } from '../../../java/lang/Boolean';

export class BeansModelCache extends ModelCache {
    /*private*/ classToFactory : Map<any, any> = <any>(<Map>new Map());

    /*private*/ mappedClassNames : Array<any> = <any>([]);

    /*private*/ wrapper : BeansWrapper;

    constructor(wrapper : BeansWrapper) {
        super();
        if(this.wrapper===undefined) this.wrapper = null;
        this.wrapper = wrapper;
    }

    /**
     * 
     * @param {Object} object
     * @return {boolean}
     */
    isCacheable(object : any) : boolean {
        return (<any>object.constructor) !== Boolean;
    }

    /**
     * 
     * @param {Object} object
     * @return {*}
     */
    create(object : any) : TemplateModel {
        let clazz : any = (<any>object.constructor);
        let factory : ModelFactory = <ModelFactory><any>/* get */this.classToFactory.get(clazz);
        if(factory == null) {
            {
                factory = <ModelFactory><any>/* get */this.classToFactory.get(clazz);
                if(factory == null) {
                    let className : string = /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz);
                    if(!/* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.mappedClassNames, className)) {
                        /* clear */(<any>this.classToFactory).clear();
                        /* clear */(this.mappedClassNames.length = 0);
                        /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.mappedClassNames, className);
                    }
                    factory = this.wrapper.getModelFactory(clazz);
                    /* put */this.classToFactory.set(clazz, factory);
                }
            };
        }
        return factory.create(object, this.wrapper);
    }
}
BeansModelCache["__class"] = "freemarker.ext.beans.BeansModelCache";



var __Function = Function;
