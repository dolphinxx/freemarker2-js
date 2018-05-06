/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ObjectWrapper} from '../ObjectWrapper';
import {TemplateHashModel} from '../TemplateHashModel';

/**
 * <b>Experimental - subject to change:</b> Implemented by {link ObjectWrapper}-s to help {link TemplateModel}-s to
 * implement the {@code someValue?api} operation.
 * 
 * 
 * <b>Experimental status warning:</b> This interface is subject to change on non-backward compatible ways, hence, it
 * shouldn't be implemented outside FreeMarker yet.
 * 
 * @since 2.3.22
 * @class
 */
export interface ObjectWrapperWithAPISupport extends ObjectWrapper {
    /**
     * Wraps an object to a {link TemplateModel} that exposes the object's "native" (usually, Java) API.
     * 
     * @param {Object} obj The object for which the API model has to be returned. Shouldn't be {@code null}.
     * @return {*} The {link TemplateModel} through which the API of the object can be accessed. Can't be {@code null}.
     * @since 2.3.22
     */
    wrapAsAPI(obj : any) : TemplateHashModel;
}



