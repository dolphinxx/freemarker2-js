/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { WrapperTemplateModel } from '../ext/util/WrapperTemplateModel';
import { ObjectWrapperWithAPISupport } from './utility/ObjectWrapperWithAPISupport';
import { WrappingTemplateModel } from './WrappingTemplateModel';
import { TemplateCollectionModel } from './TemplateCollectionModel';
import { AdapterTemplateModel } from './AdapterTemplateModel';
import { TemplateModelWithAPISupport } from './TemplateModelWithAPISupport';
import { TemplateModelIterator } from './TemplateModelIterator';
import { IteratorToTemplateModelIteratorAdapter } from './IteratorToTemplateModelIteratorAdapter';
import { ObjectWrapper } from './ObjectWrapper';
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';
import { TemplateHashModel } from './TemplateHashModel';

/**
 * Adapts an {link Iterable} to the corresponding {link TemplateModel} interface(s), most importantly to
 * {link TemplateCollectionModel}. This should only be used if {link Collection} is not implemented by the adapted
 * object, because then {link DefaultListAdapter} and {link DefaultNonListCollectionAdapter} gives more functionality.
 * <p>
 * <p>
 * Thread safety: A {link DefaultIterableAdapter} is as thread-safe as the {link Iterable} that it wraps is. Normally
 * you only have to consider read-only access, as the FreeMarker template language doesn't provide means to call
 * {link Iterator} modifier methods (though of course, Java methods called from the template can violate this rule).
 * <p>
 * <p>
 * This adapter is used by {link DefaultObjectWrapper} if its {link DefaultObjectWrapper#setIterableSupport(boolean)
 * iterableSupport} property is {@code true}, which is not the default for backward compatibility (so you have to set it
 * explicitly).
 * 
 * @since 2.3.25
 * @extends WrappingTemplateModel
 * @class
 */
export class DefaultIterableAdapter extends WrappingTemplateModel implements TemplateCollectionModel, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    /*private*/ iterable : Iterable;

    /**
     * Factory method for creating new adapter instances.
     * 
     * @param {Iterable} iterable The collection to adapt; can't be {@code null}.
     * @param {*} wrapper  The {link ObjectWrapper} used to wrap the items in the array. Has to be
     * {link ObjectWrapperAndUnwrapper} because of planned future features.
     * @return {DefaultIterableAdapter}
     */
    public static adapt(iterable : Iterable, wrapper : ObjectWrapperWithAPISupport) : DefaultIterableAdapter {
        return new DefaultIterableAdapter(iterable, wrapper);
    }

    constructor(iterable : Iterable, wrapper : ObjectWrapperWithAPISupport) {
        super(wrapper);
        if(this.iterable===undefined) this.iterable = null;
        this.iterable = iterable;
    }

    public iterator() : TemplateModelIterator {
        return new IteratorToTemplateModelIteratorAdapter(this.iterable.iterator(), this.getObjectWrapper());
    }

    public getWrappedObject() : any {
        return this.iterable;
    }

    public getAdaptedObject(hint : any) : any {
        return this.getWrappedObject();
    }

    public getAPI() : TemplateModel {
        return (<ObjectWrapperWithAPISupport><any>this.getObjectWrapper()).wrapAsAPI(this.iterable);
    }
}
DefaultIterableAdapter["__class"] = "freemarker.template.DefaultIterableAdapter";
DefaultIterableAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];




var __Function = Function;
