/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {WrapperTemplateModel} from '../ext/util/WrapperTemplateModel';
import {ObjectWrapperWithAPISupport} from './utility/ObjectWrapperWithAPISupport';
import {RichObjectWrapper} from './utility/RichObjectWrapper';
import {WrappingTemplateModel} from './WrappingTemplateModel';
import {TemplateSequenceModel} from './TemplateSequenceModel';
import {AdapterTemplateModel} from './AdapterTemplateModel';
import {TemplateModelWithAPISupport} from './TemplateModelWithAPISupport';
import {TemplateModel} from './TemplateModel';
import {TemplateCollectionModel} from './TemplateCollectionModel';
import {TemplateModelIterator} from './TemplateModelIterator';
import {IteratorToTemplateModelIteratorAdapter} from './IteratorToTemplateModelIteratorAdapter';

/**
 * Adapts a {link List} to the corresponding {link TemplateModel} interface(s), most importantly to
 * {link TemplateSequenceModel}. If you aren't wrapping an already existing {link List}, but build a sequence
 * specifically to be used from a template, also consider using {link SimpleSequence} (see comparison there).
 * <p>
 * <p>
 * Thread safety: A {link DefaultListAdapter} is as thread-safe as the {link List} that it wraps is. Normally you only
 * have to consider read-only access, as the FreeMarker template language doesn't allow writing these sequences (though
 * of course, Java methods called from the template can violate this rule).
 * <p>
 * <p>
 * This adapter is used by {link DefaultObjectWrapper} if its {@code useAdaptersForCollections} property is
 * {@code true}, which is the default when its {@code incompatibleImprovements} property is 2.3.22 or higher.
 * <p>
 * see SimpleSequence
 * see DefaultArrayAdapter
 * see TemplateSequenceModel
 * 
 * @since 2.3.22
 * @extends WrappingTemplateModel
 * @class
 */
export class DefaultListAdapter extends WrappingTemplateModel implements TemplateSequenceModel, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    list : Array<any>;

    /**
     * Factory method for creating new adapter instances.
     * 
     * @param {List} list    The list to adapt; can't be {@code null}.
     * @param {*} wrapper The {link ObjectWrapper} used to wrap the items in the array.
     * @return {DefaultListAdapter}
     */
    public static adapt(list : Array<any>, wrapper : RichObjectWrapper) : DefaultListAdapter {
        return new DefaultListAdapter(list, wrapper);
    }

    constructor(list : Array<any>, wrapper : RichObjectWrapper) {
        super(wrapper);
        if(this.list===undefined) this.list = null;
        this.list = list;
    }

    public get(s? : any) : any {
        if(((typeof s === 'number') || s === null)) {
            return <any>this.get$int(s);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        return index >= 0 && index < /* size */(<number>this.list.length)?this.wrap(/* get */this.list[index]):null;
    }

    public size() : number {
        return /* size */(<number>this.list.length);
    }

    public getAdaptedObject(hint : any) : any {
        return this.getWrappedObject();
    }

    public getWrappedObject() : any {
        return this.list;
    }

    public getAPI() : TemplateModel {
        return (<ObjectWrapperWithAPISupport><any>this.getObjectWrapper()).wrapAsAPI(this.list);
    }
}
DefaultListAdapter["__class"] = "freemarker.template.DefaultListAdapter";
DefaultListAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



export namespace DefaultListAdapter {

    export class DefaultListAdapterWithCollectionSupport extends DefaultListAdapter implements TemplateCollectionModel {
        constructor(list : Array<any>, wrapper : RichObjectWrapper) {
            super(list, wrapper);
        }

        public iterator() : TemplateModelIterator {
            return new IteratorToTemplateModelIteratorAdapter(/* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.list), this.getObjectWrapper());
        }
    }
    DefaultListAdapterWithCollectionSupport["__class"] = "freemarker.template.DefaultListAdapter.DefaultListAdapterWithCollectionSupport";
    DefaultListAdapterWithCollectionSupport["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];


}




