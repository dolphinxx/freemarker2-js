/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateCollectionModel} from '../../template/TemplateCollectionModel';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelAdapter} from '../../template/TemplateModelAdapter';
import {TemplateModelIterator} from '../../template/TemplateModelIterator';
import {UndeclaredThrowableException} from '../../template/utility/UndeclaredThrowableException';
import {BeansWrapper} from './BeansWrapper';

/**
 * Adapts a {link TemplateCollectionModel} to  {link Collection}.
 * @extends AbstractCollection
 * @class
 */
export class CollectionAdapter implements TemplateModelAdapter {
    /*private*/ wrapper : BeansWrapper;

    /*private*/ model : TemplateCollectionModel;

    constructor(model : TemplateCollectionModel, wrapper : BeansWrapper) {
        if(this.wrapper===undefined) this.wrapper = null;
        if(this.model===undefined) this.model = null;
        this.model = model;
        this.wrapper = wrapper;
    }

    public getTemplateModel() : TemplateModel {
        return this.model;
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @return {Iterator}
     */
    public iterator() : any {
        try {
            return new CollectionAdapter.CollectionAdapter$0(this);
        } catch(e) {
            throw new UndeclaredThrowableException(e);
        }
    }
}
CollectionAdapter["__class"] = "freemarker.ext.beans.CollectionAdapter";
CollectionAdapter["__interfaces"] = ["freemarker.template.TemplateModelAdapter","java.util.Collection","java.lang.Iterable"];



export namespace CollectionAdapter {

    export class CollectionAdapter$0 {
        public __parent: any;
        i : TemplateModelIterator;

        public hasNext() : boolean {
            try {
                return this.i.hasNext();
            } catch(e) {
                throw new UndeclaredThrowableException(e);
            }
        }

        public next() : any {
            try {
                return this.__parent.wrapper.unwrap$freemarker_template_TemplateModel(this.i.next());
            } catch(e) {
                throw new UndeclaredThrowableException(e);
            }
        }

        public remove() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        constructor(__parent: any) {
            this.__parent = __parent;
            this.i = this.__parent.model.iterator();
        }
    }
    CollectionAdapter$0["__interfaces"] = ["java.util.Iterator"];


}




