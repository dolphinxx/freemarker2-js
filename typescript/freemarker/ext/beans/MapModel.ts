/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ModelFactory} from '../util/ModelFactory';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {TemplateMethodModelEx} from '../../template/TemplateMethodModelEx';
import {TemplateModel} from '../../template/TemplateModel';
import {StringModel} from './StringModel';
import {BeansWrapper} from './BeansWrapper';

/**
 * Creates a new model that wraps the specified map object.
 * 
 * @param {Map} map     the map object to wrap into a model.
 * @param {BeansWrapper} wrapper the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 * @extends StringModel
 */
export class MapModel extends StringModel implements TemplateMethodModelEx {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(MapModel.FACTORY == null) MapModel.FACTORY = new MapModel.MapModel$0(); return MapModel.FACTORY; };

    public constructor(map : Map<any, any>, wrapper : BeansWrapper) {
        super(map, wrapper);
    }

    /**
     * The first argument is used as a key to call the map's <tt>get</tt> method.
     * @param {List} arguments
     * @return {Object}
     */
    public exec(__arguments : Array<any>) : any {
        let key : any = this.unwrap(<TemplateModel><any>/* get */__arguments[0]);
        return this.wrap(/* get */(<Map<any, any>><any>this.object).get(key));
    }

    /**
     * Overridden to invoke the generic get method by casting to Map instead of
     * through reflection - should yield better performance.
     * @param {Map} keyMap
     * @param {*} clazz
     * @param {String} key
     * @return {*}
     */
    invokeGenericGet(keyMap : Map<any, any>, clazz : any, key : string) : TemplateModel {
        let map : Map<any, any> = <Map<any, any>><any>this.object;
        let val : any = /* get */map.get(key);
        if(val == null) {
            if(key.length === 1) {
                let charKey : string = key.charAt(0);
                val = /* get */map.get(charKey);
                if(val == null && !(/* containsKey */map.has(key) || /* containsKey */map.has(charKey))) {
                    return BeanModel.UNKNOWN_$LI$();
                }
            } else if(!/* containsKey */map.has(key)) {
                return BeanModel.UNKNOWN_$LI$();
            }
        }
        return this.wrap(val);
    }

    /**
     * 
     * @return {boolean}
     */
    public isEmpty() : boolean {
        return /* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>(<Map<any, any>><any>this.object)) && super.isEmpty();
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return /* size */(<number>this.keySet().length);
    }

    /**
     * 
     * @return {Set}
     */
    keySet() : Array<any> {
        let set : Array<any> = super.keySet();
        /* addAll */((l1, l2) => l1.push.apply(l1, l2))(set, /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>(<Map<any, any>><any>this.object)));
        return set;
    }
}
MapModel["__class"] = "freemarker.ext.beans.MapModel";
MapModel["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace MapModel {

    export class MapModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new MapModel(<Map<any, any>><any>object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    MapModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





MapModel.FACTORY_$LI$();
