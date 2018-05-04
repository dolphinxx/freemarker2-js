/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from './TemplateModel';

/**
 * Implemented by classes that serve as adapters for template model objects in
 * some other object model. Actually a functional inverse of
 * {link AdapterTemplateModel}. You will rarely implement this interface
 * directly. It is usually implemented by unwrapping adapter classes of various
 * object wrapper implementations.
 * @class
 */
export interface TemplateModelAdapter {
    /**
     * @return {*} the template model this object is wrapping.
     */
    getTemplateModel() : TemplateModel;
}


var __Function = Function;
