/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';

/**
 * "method" template language data type: Objects that act like functions. The name comes from that their original
 * application was calling Java methods via {link freemarker.ext.beans.BeansWrapper}.
 * 
 * <p>In templates they are used like {@code myMethod("foo", "bar")} or {@code myJavaObject.myJavaMethod("foo", "bar")}.
 * 
 * @deprecated Use {link TemplateMethodModelEx} instead. This interface is from the old times when the only kind of
 * value you could pass in was string.
 * @class
 */
export interface TemplateMethodModel extends TemplateModel {
    /**
     * Executes the method call. All arguments passed to the method call are
     * coerced to strings before being passed, if the FreeMarker rules allow
     * the coercion. If some of the passed arguments can not be coerced to a
     * string, an exception will be raised in the engine and the method will
     * not be called. If your method would like to act on actual data model
     * objects instead of on their string representations, implement the
     * {link TemplateMethodModelEx} instead.
     * 
     * @param {List} arguments a <tt>List</tt> of <tt>String</tt> objects
     * containing the values of the arguments passed to the method.
     * @return {Object} the return value of the method, or {@code null}. If the returned value
     * does not implement {link TemplateModel}, it will be automatically
     * wrapped using the {link Environment#getObjectWrapper() environment
     * object wrapper}.
     */
    exec(__arguments : Array<any>) : any;
}



