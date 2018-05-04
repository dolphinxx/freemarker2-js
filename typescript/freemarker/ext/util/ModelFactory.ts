/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ObjectWrapper } from '../../template/ObjectWrapper';
import { TemplateModel } from '../../template/TemplateModel';

/**
 * Interface used to create various wrapper models in the {link ModelCache}.
 * @class
 */
export interface ModelFactory {
    /**
     * Create a wrapping model for the specified object that belongs to
     * the specified wrapper.
     * @param {Object} object
     * @param {*} wrapper
     * @return {*}
     */
    create(object : any, wrapper : ObjectWrapper) : TemplateModel;
}


var __Function = Function;
