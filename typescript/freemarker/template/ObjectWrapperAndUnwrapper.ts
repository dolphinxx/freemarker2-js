/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ObjectWrapper} from './ObjectWrapper';

/**
 * <b>Experimental - subject to change:</b> Adds functionality to {link ObjectWrapper} that creates a plain Java object
 * from a {link TemplateModel}. This is usually implemented by {link ObjectWrapper}-s and reverses
 * {link ObjectWrapper#wrap(Object)}. However, an implementation of this interface should make a reasonable effort to
 * "unwrap" {link TemplateModel}-s that wasn't the result of object wrapping (such as those created directly in FTL),
 * or which was created by another {link ObjectWrapper}. The author of an {link ObjectWrapperAndUnwrapper} should be
 * aware of the {link TemplateModelAdapter} and {link WrapperTemplateModel} interfaces, which should be used for
 * unwrapping if the {link TemplateModel} implements them.
 * 
 * 
 * <b>Experimental status warning:</b> This interface is subject to change on non-backward compatible ways, hence, it
 * shouldn't be implemented outside FreeMarker yet.
 * 
 * @since 2.3.22
 * @class
 */
export interface ObjectWrapperAndUnwrapper extends ObjectWrapper {
    unwrap(model? : any, targetClass? : any) : any;

    tryUnwrapTo(model? : any, targetClass? : any, typeFlags? : any, recursionStops? : any) : any;
}

export namespace ObjectWrapperAndUnwrapper {

    /**
     * Indicates that while the unwrapping is <em>maybe</em> possible, the result surely can't be the instance of the
     * desired class, nor it can be {@code null}.
     * <p>
     * see #tryUnwrapTo(TemplateModel, Class)
     * 
     * @since 2.3.22
     */
    export let CANT_UNWRAP_TO_TARGET_CLASS : any = <any>{};
}




