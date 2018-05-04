/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateMethodModel } from './TemplateMethodModel';
import { TemplateModelException } from './TemplateModelException';

/**
 * "extended method" template language data type: Objects that act like functions. Their main application is calling
 * Java methods via {link freemarker.ext.beans.BeansWrapper}, but you can implement this interface to create
 * top-level functions too. They are "extended" compared to the deprecated {link TemplateMethodModel}, which could only
 * accept string parameters.
 * 
 * <p>In templates they are used like {@code myMethod(1, "foo")} or {@code myJavaObject.myJavaMethod(1, "foo")}.
 * @class
 */
export interface TemplateMethodModelEx extends TemplateMethodModel {
    /**
     * Executes the method call.
     * 
     * @param {List} arguments a {link List} of {link TemplateModel}-s,
     * containing the arguments passed to the method. If the implementation absolutely wants
     * to operate on POJOs, it can use the static utility methods in the {link DeepUnwrap}
     * class to easily obtain them. However, unwrapping is not always possible (or not perfectly), and isn't always
     * efficient, so it's recommended to use the original {link TemplateModel} value as much as possible.
     * @return {Object} the return value of the method, or {@code null}. If the returned value
     * does not implement {link TemplateModel}, it will be automatically
     * wrapped using the {link Environment#getObjectWrapper() environment's
     * object wrapper}.
     */
    exec(__arguments : Array<any>) : any;
}


var __Function = Function;
