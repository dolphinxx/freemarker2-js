/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _DelayedShortClassName } from '../core/_DelayedShortClassName';
import { _TemplateModelException } from '../core/_TemplateModelException';
import { WrapperTemplateModel } from '../ext/util/WrapperTemplateModel';
import { ObjectWrapperWithAPISupport } from './utility/ObjectWrapperWithAPISupport';
import { WrappingTemplateModel } from './WrappingTemplateModel';
import { TemplateCollectionModelEx } from './TemplateCollectionModelEx';
import { AdapterTemplateModel } from './AdapterTemplateModel';
import { TemplateModelWithAPISupport } from './TemplateModelWithAPISupport';
import { TemplateModelIterator } from './TemplateModelIterator';
import { IteratorToTemplateModelIteratorAdapter } from './IteratorToTemplateModelIteratorAdapter';
import { ObjectWrapper } from './ObjectWrapper';
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';
import { ObjectWrapperAndUnwrapper } from './ObjectWrapperAndUnwrapper';
import { TemplateHashModel } from './TemplateHashModel';

/**
 * Adapts a non-{link List} Java {link Collection} to the corresponding {link TemplateModel} interface(s), most
 * importantly to {link TemplateCollectionModelEx}. For {link List}-s, use {link DefaultListAdapter}, or else you
 * lose indexed element access.
 * <p>
 * <p>
 * Thread safety: A {link DefaultNonListCollectionAdapter} is as thread-safe as the {link Collection} that it wraps
 * is. Normally you only have to consider read-only access, as the FreeMarker template language doesn't allow writing
 * these collections (though of course, Java methods called from the template can violate this rule).
 * <p>
 * <p>
 * This adapter is used by {link DefaultObjectWrapper} if its {@code useAdaptersForCollections} property is
 * {@code true}, which is the default when its {@code incompatibleImprovements} property is 2.3.22 or higher, and its
 * {link DefaultObjectWrapper#setForceLegacyNonListCollections(boolean) forceLegacyNonListCollections} property is
 * {@code false}, which is still not the default as of 2.3.22 (so you have to set it explicitly).
 * 
 * @since 2.3.22
 * @extends WrappingTemplateModel
 * @class
 */
export class DefaultNonListCollectionAdapter extends WrappingTemplateModel implements TemplateCollectionModelEx, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    /*private*/ collection : Array<any>;

    /**
     * Factory method for creating new adapter instances.
     * 
     * @param {Collection} collection The collection to adapt; can't be {@code null}.
     * @param {*} wrapper    The {link ObjectWrapper} used to wrap the items in the collection. Has to be
     * {link ObjectWrapperAndUnwrapper} because of planned future features.
     * @return {DefaultNonListCollectionAdapter}
     */
    public static adapt(collection : Array<any>, wrapper : ObjectWrapperWithAPISupport) : DefaultNonListCollectionAdapter {
        return new DefaultNonListCollectionAdapter(collection, wrapper);
    }

    constructor(collection : Array<any>, wrapper : ObjectWrapperWithAPISupport) {
        super(wrapper);
        if(this.collection===undefined) this.collection = null;
        this.collection = collection;
    }

    public iterator() : TemplateModelIterator {
        return new IteratorToTemplateModelIteratorAdapter(/* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.collection), this.getObjectWrapper());
    }

    public size() : number {
        return /* size */(<number>this.collection.length);
    }

    public isEmpty() : boolean {
        return /* isEmpty */(this.collection.length == 0);
    }

    public getWrappedObject() : any {
        return this.collection;
    }

    public getAdaptedObject(hint : any) : any {
        return this.getWrappedObject();
    }

    public contains(item : TemplateModel) : boolean {
        let itemPojo : any = (<ObjectWrapperAndUnwrapper><any>this.getObjectWrapper())['unwrap$freemarker_template_TemplateModel'](item);
        try {
            return /* contains */(this.collection.indexOf(<any>(itemPojo)) >= 0);
        } catch(e) {
            throw new _TemplateModelException(e, "Failed to check if the collection contains the item. Probably the item\'s Java type, ", itemPojo != null?new _DelayedShortClassName((<any>itemPojo.constructor)):"Null", ", doesn\'t match the type of (some of) the collection items; see cause exception.");
        };
    }

    public getAPI() : TemplateModel {
        return (<ObjectWrapperWithAPISupport><any>this.getObjectWrapper()).wrapAsAPI(this.collection);
    }
}
DefaultNonListCollectionAdapter["__class"] = "freemarker.template.DefaultNonListCollectionAdapter";
DefaultNonListCollectionAdapter["__interfaces"] = ["freemarker.template.TemplateCollectionModelEx","freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];




var __Function = Function;
