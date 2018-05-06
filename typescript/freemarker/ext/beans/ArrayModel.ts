/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ModelFactory} from '../util/ModelFactory';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {TemplateCollectionModel} from '../../template/TemplateCollectionModel';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelIterator} from '../../template/TemplateModelIterator';
import {TemplateSequenceModel} from '../../template/TemplateSequenceModel';
import {BeanModel} from './BeanModel';
import {BeansWrapper} from './BeansWrapper';

/**
 * Creates a new model that wraps the specified array object.
 * 
 * @param {Object} array   the array object to wrap into a model.
 * @param {BeansWrapper} wrapper the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @throws IllegalArgumentException if the passed object is not a Java array.
 * @class
 * @extends BeanModel
 */
export class ArrayModel extends BeanModel implements TemplateCollectionModel, TemplateSequenceModel {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(ArrayModel.FACTORY == null) ArrayModel.FACTORY = new ArrayModel.ArrayModel$0(); return ArrayModel.FACTORY; };

    /*private*/ length : number;

    public constructor(array : any, wrapper : BeansWrapper) {
        super(array, wrapper);
        if(this.length===undefined) this.length = 0;
        let clazz : any = (<any>array.constructor);
        if(!clazz.isArray()) throw Object.defineProperty(new Error("Object is not an array, it\'s " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>array.constructor))), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        this.length = /* getLength */array.length;
    }

    public iterator() : TemplateModelIterator {
        return new ArrayModel.Iterator(this);
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            super.get(key);
        } else if(((typeof key === 'number') || key === null)) {
            return <any>this.get$int(key);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        try {
            return this.wrap(/* get */this.object[index]);
        } catch(e) {
            return null;
        }
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return this.length;
    }

    /**
     * 
     * @return {boolean}
     */
    public isEmpty() : boolean {
        return this.length === 0;
    }
}
ArrayModel["__class"] = "freemarker.ext.beans.ArrayModel";
ArrayModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace ArrayModel {

    export class Iterator implements TemplateSequenceModel, TemplateModelIterator {
        public __parent: any;
        position : number;

        public hasNext() : boolean {
            return this.position < this.__parent.length;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return this.get$int(index);
        }

        public next() : TemplateModel {
            return this.position < this.__parent.length?this.get$int(this.position++):null;
        }

        public size() : number {
            return this.size();
        }

        constructor(__parent: any) {
            this.__parent = __parent;
            this.position = 0;
        }
    }
    Iterator["__class"] = "freemarker.ext.beans.ArrayModel.Iterator";
    Iterator["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.TemplateModelIterator"];



    export class ArrayModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new ArrayModel(object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    ArrayModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





ArrayModel.FACTORY_$LI$();
