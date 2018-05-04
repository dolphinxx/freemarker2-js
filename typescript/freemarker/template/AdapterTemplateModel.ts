/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from './TemplateModel';

/**
 * A {link TemplateModel} that can be unwrapped and then it considers a provided desired (hint) class. This is
 * useful when multiple languages has to communicate with each other through FreeMarker. For example, if we have a
 * model that wraps a Jython object, then we have to unwrap that differently when we pass it to plain Java method and
 * when we pass it to a Jython method.
 * 
 * <p>This is rarely implemented by applications. It is typically implemented by the model classes belonging to
 * {link ObjectWrapper}-s.
 * @class
 */
export interface AdapterTemplateModel extends TemplateModel {
    /**
     * Retrieves the underlying object, or some other object semantically
     * equivalent to its value narrowed by the class hint.
     * 
     * @param {*} hint the desired class of the returned value. An implementation
     * should make reasonable effort to retrieve an object of the requested
     * class, but if that is impossible, it must at least return the underlying
     * object as-is. As a minimal requirement, an implementation must always
     * return the exact underlying object when
     * <tt>hint.isInstance(underlyingObject)</tt> holds. When called
     * with <tt>java.lang.Object.class</tt>, it should return a generic Java
     * object (i.e. if the model is wrapping a scripting language object that is
     * further wrapping a Java object, the deepest underlying Java object should
     * be returned).
     * @return {Object} the underlying object, or its value accommodated for the hint
     * class.
     */
    getAdaptedObject(hint : any) : any;
}


var __Function = Function;
