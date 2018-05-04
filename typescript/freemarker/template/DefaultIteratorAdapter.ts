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
 * Adapts an {link Iterator} to the corresponding {link TemplateModel} interface(s), most importantly to
 * {link TemplateCollectionModel}. The resulting {link TemplateCollectionModel} can only be listed (iterated) once.
 * If the user tries list the variable for a second time, an exception will be thrown instead of silently gettig an
 * empty (or partial) listing.
 * <p>
 * <p>
 * Thread safety: A {link DefaultListAdapter} is as thread-safe as the array that it wraps is. Normally you only
 * have to consider read-only access, as the FreeMarker template language doesn't allow writing these sequences (though
 * of course, Java methods called from the template can violate this rule).
 * <p>
 * <p>
 * This adapter is used by {link DefaultObjectWrapper} if its {@code useAdaptersForCollections} property is
 * {@code true}, which is the default when its {@code incompatibleImprovements} property is 2.3.22 or higher.
 * 
 * @since 2.3.22
 * @extends WrappingTemplateModel
 * @class
 */
export class DefaultIteratorAdapter extends WrappingTemplateModel implements TemplateCollectionModel, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    /*private*/ __iterator : any;

    /*private*/ iteratorOwnedBySomeone : boolean;

    /**
     * Factory method for creating new adapter instances.
     * 
     * @param {Iterator} iterator The iterator to adapt; can't be {@code null}.
     * @param {*} wrapper
     * @return {DefaultIteratorAdapter}
     */
    public static adapt(iterator : any, wrapper : ObjectWrapper) : DefaultIteratorAdapter {
        return new DefaultIteratorAdapter(iterator, wrapper);
    }

    constructor(iterator : any, wrapper : ObjectWrapper) {
        super(wrapper);
        if(this.__iterator===undefined) this.__iterator = null;
        if(this.iteratorOwnedBySomeone===undefined) this.iteratorOwnedBySomeone = false;
        this.__iterator = iterator;
    }

    public getWrappedObject() : any {
        return this.__iterator;
    }

    public getAdaptedObject(hint : any) : any {
        return this.getWrappedObject();
    }

    public iterator() : TemplateModelIterator {
        return new DefaultIteratorAdapter.SimpleTemplateModelIterator(this);
    }

    public getAPI() : TemplateModel {
        return (<ObjectWrapperWithAPISupport><any>this.getObjectWrapper()).wrapAsAPI(this.__iterator);
    }
}
DefaultIteratorAdapter["__class"] = "freemarker.template.DefaultIteratorAdapter";
DefaultIteratorAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



export namespace DefaultIteratorAdapter {

    /**
     * Not thread-safe.
     * @class
     */
    export class SimpleTemplateModelIterator implements TemplateModelIterator {
        public __parent: any;
        iteratorOwnedByMe : boolean;

        public next() : TemplateModel {
            if(!this.iteratorOwnedByMe) {
                this.checkNotOwner();
                this.__parent.iteratorOwnedBySomeone = true;
                this.iteratorOwnedByMe = true;
            }
            if(!this.__parent.__iterator.hasNext()) {
                throw new TemplateModelException("The collection has no more items.");
            }
            let value : any = this.__parent.__iterator.next();
            return (value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0))?<TemplateModel><any>value:this.__parent.wrap(value);
        }

        public hasNext() : boolean {
            if(!this.iteratorOwnedByMe) {
                this.checkNotOwner();
            }
            return this.__parent.__iterator.hasNext();
        }

        checkNotOwner() {
            if(this.__parent.iteratorOwnedBySomeone) {
                throw new TemplateModelException("This collection value wraps a java.util.Iterator, thus it can be listed only once.");
            }
        }

        constructor(__parent: any) {
            this.__parent = __parent;
            if(this.iteratorOwnedByMe===undefined) this.iteratorOwnedByMe = false;
        }
    }
    SimpleTemplateModelIterator["__class"] = "freemarker.template.DefaultIteratorAdapter.SimpleTemplateModelIterator";
    SimpleTemplateModelIterator["__interfaces"] = ["freemarker.template.TemplateModelIterator"];


}



var __Function = Function;
