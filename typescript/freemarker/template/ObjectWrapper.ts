/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

/**
 * Maps Java objects to the type-system of FreeMarker Template Language (see the {link TemplateModel}
 * interfaces). Thus this is what decides what parts of the Java objects will be accessible in the templates and how.
 * 
 * <p>For example, with a {link BeansWrapper} both the items of {link Map} and the JavaBean properties (the getters)
 * of an object are accessible in template uniformly with the {@code myObject.foo} syntax, where "foo" is the map key or
 * the property name. This is because both kind of object is wrapped by {link BeansWrapper} into a
 * {link TemplateHashModel} implementation that will call {link Map#get(Object)} or the getter method, transparently
 * to the template language.
 * <p>
 * see Configuration#setObjectWrapper(ObjectWrapper)
 * @class
 */
export interface ObjectWrapper {
    wrap(object? : any, method? : any) : any;
}

export namespace ObjectWrapper {

    // /**
    //  * An {link ObjectWrapper} that exposes the object methods and JavaBeans properties as hash elements, and has
    //  * custom handling for Java {link Map}-s, {link ResourceBundle}-s, etc. It doesn't treat
    //  * {link org.w3c.dom.Node}-s and Jython objects specially, however. As of 2.3.22, using
    //  * {link DefaultObjectWrapper} with its {@code incompatibleImprovements} property set to 2.3.22 (or higher) is
    //  * recommended instead.
    //  *
    //  * @deprecated Use {link BeansWrapperBuilder#build()} instead; this instance isn't read-only
    //  * and thus can't be trusted.
    //  */
    // export let BEANS_WRAPPER : ObjectWrapper = BeansWrapper.getDefaultInstance();
    //
    // /**
    //  * The legacy default object wrapper implementation, focusing on backward compatibility and out-of-the W3C DOM
    //  * wrapping box extra features. See {link DefaultObjectWrapper} for more information.
    //  *
    //  * @deprecated Use {link DefaultObjectWrapperBuilder#build()} instead; this instance isn't read-only and thus can't
    //  * be trusted.
    //  */
    // export let DEFAULT_WRAPPER : ObjectWrapper = DefaultObjectWrapper.instance_$LI$();
    //
    // /**
    //  * Object wrapper that uses {@code SimpleXXX} wrappers only.
    //  * It behaves like the {link #DEFAULT_WRAPPER}, but for objects
    //  * that it does not know how to wrap as a {@code SimpleXXX} it
    //  * throws an exception. It makes no use of reflection-based
    //  * exposure of anything, which may makes it a good candidate for security-restricted applications.
    //  *
    //  * @deprecated No replacement as it was seldom if ever used by anyone; this instance isn't
    //  * read-only and thus can't be trusted.
    //  */
    // export let SIMPLE_WRAPPER : ObjectWrapper = SimpleObjectWrapper.instance_$LI$();
}




