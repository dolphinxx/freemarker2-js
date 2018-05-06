/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CollectionAndSequence} from '../../core/CollectionAndSequence';
import {ModelFactory} from '../util/ModelFactory';
import {WrapperTemplateModel} from '../util/WrapperTemplateModel';
import {AdapterTemplateModel} from '../../template/AdapterTemplateModel';
import {KeyValuePairIterator} from '../../template/KeyValuePairIterator';
import {MapKeyValuePairIterator} from '../../template/MapKeyValuePairIterator';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {SimpleSequence} from '../../template/SimpleSequence';
import {TemplateCollectionModel} from '../../template/TemplateCollectionModel';
import {TemplateHashModelEx2} from '../../template/TemplateHashModelEx2';
import {TemplateMethodModelEx} from '../../template/TemplateMethodModelEx';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelWithAPISupport} from '../../template/TemplateModelWithAPISupport';
import {WrappingTemplateModel} from '../../template/WrappingTemplateModel';
import {RichObjectWrapper} from '../../template/utility/RichObjectWrapper';
import {BeansWrapper} from './BeansWrapper';

/**
 * Model used by {link BeansWrapper} when <tt>simpleMapWrapper</tt>
 * mode is enabled. Provides a simple hash model interface to the
 * underlying map (does not copy like {link freemarker.template.SimpleHash}),
 * and a method interface to non-string keys.
 * @param {Map} map
 * @param {BeansWrapper} wrapper
 * @class
 * @extends WrappingTemplateModel
 */
export class SimpleMapModel extends WrappingTemplateModel implements TemplateHashModelEx2, TemplateMethodModelEx, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(SimpleMapModel.FACTORY == null) SimpleMapModel.FACTORY = new SimpleMapModel.SimpleMapModel$0(); return SimpleMapModel.FACTORY; };

    /*private*/ map : Map<any, any>;

    public constructor(map : Map<any, any>, wrapper : BeansWrapper) {
        super(wrapper);
        if(this.map===undefined) this.map = null;
        this.map = map;
    }

    public get$java_lang_String(key : string) : TemplateModel {
        let val : any = /* get */this.map.get(key);
        if(val == null) {
            if(key.length === 1) {
                let charKey : string = key.charAt(0);
                val = /* get */this.map.get(charKey);
                if(val == null && !(/* containsKey */this.map.has(key) || /* containsKey */this.map.has(charKey))) {
                    return null;
                }
            } else if(!/* containsKey */this.map.has(key)) {
                return null;
            }
        }
        return this.wrap(val);
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    public exec(args : Array<any>) : any {
        let key : any = (<BeansWrapper><any>this.getObjectWrapper()).unwrap$freemarker_template_TemplateModel(<TemplateModel><any>/* get */args[0]);
        let value : any = /* get */this.map.get(key);
        if(value == null && !/* containsKey */this.map.has(key)) {
            return null;
        }
        return this.wrap(value);
    }

    public isEmpty() : boolean {
        return /* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.map);
    }

    public size() : number {
        return /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.map);
    }

    public keys() : TemplateCollectionModel {
        return new CollectionAndSequence(new SimpleSequence(/* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.map), this.getObjectWrapper()));
    }

    public values() : TemplateCollectionModel {
        return new CollectionAndSequence(new SimpleSequence(/* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>this.map), this.getObjectWrapper()));
    }

    public keyValuePairIterator() : KeyValuePairIterator {
        return new MapKeyValuePairIterator(this.map, this.getObjectWrapper());
    }

    public getAdaptedObject(hint : any) : any {
        return this.map;
    }

    public getWrappedObject() : any {
        return this.map;
    }

    public getAPI() : TemplateModel {
        return (<RichObjectWrapper><any>this.getObjectWrapper()).wrapAsAPI(this.map);
    }
}
SimpleMapModel["__class"] = "freemarker.ext.beans.SimpleMapModel";
SimpleMapModel["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace SimpleMapModel {

    export class SimpleMapModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new SimpleMapModel(<Map<any, any>><any>object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    SimpleMapModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





SimpleMapModel.FACTORY_$LI$();
