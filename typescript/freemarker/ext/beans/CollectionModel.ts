/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ModelFactory } from '../util/ModelFactory';
import { ObjectWrapper } from '../../template/ObjectWrapper';
import { TemplateCollectionModel } from '../../template/TemplateCollectionModel';
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelException } from '../../template/TemplateModelException';
import { TemplateModelIterator } from '../../template/TemplateModelIterator';
import { TemplateSequenceModel } from '../../template/TemplateSequenceModel';
import { StringModel } from './StringModel';
import { BeansWrapper } from './BeansWrapper';
import { IteratorModel } from './IteratorModel';

/**
 * Creates a new model that wraps the specified collection object.
 * 
 * @param {Collection} collection the collection object to wrap into a model.
 * @param {BeansWrapper} wrapper    the {link BeansWrapper} associated with this model.
 * Every model has to have an associated {link BeansWrapper} instance. The
 * model gains many attributes from its wrapper, including the caching
 * behavior, method exposure level, method-over-item shadowing policy etc.
 * @class
 * @extends StringModel
 */
export class CollectionModel extends StringModel implements TemplateCollectionModel, TemplateSequenceModel {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(CollectionModel.FACTORY == null) CollectionModel.FACTORY = new CollectionModel.CollectionModel$0(); return CollectionModel.FACTORY; };

    public constructor(collection : Array<any>, wrapper : BeansWrapper) {
        super(collection, wrapper);
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            super.get(key);
        } else if(((typeof key === 'number') || key === null)) {
            return <any>this.get$int(key);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        if(this.object != null && (this.object instanceof Array)) {
            try {
                return this.wrap(/* get */(<Array<any>><any>this.object)[index]);
            } catch(e) {
                return null;
            };
        } else {
            throw new TemplateModelException("Underlying collection is not a list, it\'s " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.object.constructor)));
        }
    }

    /**
     * Tells if {link #get(int)} will always fail for this object.
     * As this object implements {link TemplateSequenceModel},
     * {link #get(int)} should always work, but due to a design flaw, for
     * non-{link List} wrapped objects {link #get(int)} will always fail.
     * This method exists to ease working this problem around.
     * 
     * @since 2.3.17
     * @return {boolean}
     */
    public getSupportsIndexedAccess() : boolean {
        return (this.object != null && (this.object instanceof Array));
    }

    public iterator() : TemplateModelIterator {
        return new IteratorModel(/* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})((<Array<any>><any>this.object)), this.wrapper);
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return /* size */(<number>(<Array<any>><any>this.object).length);
    }
}
CollectionModel["__class"] = "freemarker.ext.beans.CollectionModel";
CollectionModel["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace CollectionModel {

    export class CollectionModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new CollectionModel(<Array<any>><any>object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    CollectionModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}



var __Function = Function;

CollectionModel.FACTORY_$LI$();
