/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';

/**
 * <b>Experimental - subject to change:</b> A {link TemplateModel} on which the {@code ?api} operation can be applied.
 * 
 * 
 * <b>Experimental status warning:</b> This interface is subject to change on non-backward compatible ways, hence, it
 * shouldn't be implemented outside FreeMarker yet.
 * 
 * @since 2.3.22
 * @class
 */
export interface TemplateModelWithAPISupport extends TemplateModel {
    /**
     * Returns the model that exposes the (Java) API of the value. This is usually implemented by delegating to
     * {link ObjectWrapperWithAPISupport#wrapAsAPI(Object)}.
     * @return {*}
     */
    getAPI() : TemplateModel;
}


var __Function = Function;
