/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../../template/TemplateModel';

/**
 * A generic interface for template models that wrap some underlying
 * object, and wish to provide access to that wrapped object.
 * 
 * <p>You may also want to implement {link freemarker.template.AdapterTemplateModel}.
 * @class
 */
export interface WrapperTemplateModel extends TemplateModel {
    /**
     * Retrieves the original object wrapped by this model.
     * @return {Object}
     */
    getWrappedObject() : any;
}


var __Function = Function;
