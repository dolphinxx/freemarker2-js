/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { WrapperTemplateModel } from '../ext/util/WrapperTemplateModel';
import { ObjectWrapperWithAPISupport } from './utility/ObjectWrapperWithAPISupport';
import { WrappingTemplateModel } from './WrappingTemplateModel';
import { TemplateCollectionModel } from './TemplateCollectionModel';
import { AdapterTemplateModel } from './AdapterTemplateModel';
import { TemplateModelWithAPISupport } from './TemplateModelWithAPISupport';
import { ObjectWrapper } from './ObjectWrapper';
import { TemplateModelIterator } from './TemplateModelIterator';
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';
import { TemplateHashModel } from './TemplateHashModel';

/**
 * Adapts an {link Enumeration} to the corresponding {link TemplateModel} interface(s), most importantly to
 * {link TemplateCollectionModel}. Putting aside that it wraps an {link Enumeration} instead of an {link Iterator},
 * this is identical to {link DefaultIteratorAdapter}, so see further details there.
 * 
 * @since 2.3.26
 * @extends WrappingTemplateModel
 * @class
 */
export class DefaultEnumerationAdapter extends WrappingTemplateModel implements TemplateCollectionModel, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    /*private*/ enumeration : Enumeration;

    /*private*/ enumerationOwnedBySomeone : boolean;

    /**
     * Factory method for creating new adapter instances.
     * 
     * @param {Enumeration} enumeration The enumeration to adapt; can't be {@code null}.
     * @param {*} wrapper
     * @return {DefaultEnumerationAdapter}
     */
    public static adapt(enumeration : Enumeration, wrapper : ObjectWrapper) : DefaultEnumerationAdapter {
        return new DefaultEnumerationAdapter(enumeration, wrapper);
    }

    constructor(enumeration : Enumeration, wrapper : ObjectWrapper) {
        super(wrapper);
        if(this.enumeration===undefined) this.enumeration = null;
        if(this.enumerationOwnedBySomeone===undefined) this.enumerationOwnedBySomeone = false;
        this.enumeration = enumeration;
    }

    public getWrappedObject() : any {
        return this.enumeration;
    }

    public getAdaptedObject(hint : any) : any {
        return this.getWrappedObject();
    }

    public iterator() : TemplateModelIterator {
        return new DefaultEnumerationAdapter.SimpleTemplateModelIterator(this);
    }

    public getAPI() : TemplateModel {
        return (<ObjectWrapperWithAPISupport><any>this.getObjectWrapper()).wrapAsAPI(this.enumeration);
    }
}
DefaultEnumerationAdapter["__class"] = "freemarker.template.DefaultEnumerationAdapter";
DefaultEnumerationAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



export namespace DefaultEnumerationAdapter {

    /**
     * Not thread-safe.
     * @class
     */
    export class SimpleTemplateModelIterator implements TemplateModelIterator {
        public __parent: any;
        enumerationOwnedByMe : boolean;

        public next() : TemplateModel {
            if(!this.enumerationOwnedByMe) {
                this.checkNotOwner();
                this.__parent.enumerationOwnedBySomeone = true;
                this.enumerationOwnedByMe = true;
            }
            if(!this.__parent.enumeration.hasMoreElements()) {
                throw new TemplateModelException("The collection has no more items.");
            }
            let value : any = this.__parent.enumeration.nextElement();
            return (value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0))?<TemplateModel><any>value:this.__parent.wrap(value);
        }

        public hasNext() : boolean {
            if(!this.enumerationOwnedByMe) {
                this.checkNotOwner();
            }
            return this.__parent.enumeration.hasMoreElements();
        }

        checkNotOwner() {
            if(this.__parent.enumerationOwnedBySomeone) {
                throw new TemplateModelException("This collection value wraps a java.util.Enumeration, thus it can be listed only once.");
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
            if(this.enumerationOwnedByMe===undefined) this.enumerationOwnedByMe = false;
        }
    }
    SimpleTemplateModelIterator["__class"] = "freemarker.template.DefaultEnumerationAdapter.SimpleTemplateModelIterator";
    SimpleTemplateModelIterator["__interfaces"] = ["freemarker.template.TemplateModelIterator"];


}



var __Function = Function;
