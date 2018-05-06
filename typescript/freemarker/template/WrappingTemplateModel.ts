/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';
import {TemplateModelException} from './TemplateModelException';
import {DefaultObjectWrapper} from "./DefaultObjectWrapper";

/**
 * Convenience base-class for containers that wrap their contained arbitrary Java objects into {link TemplateModel}
 * instances.
 * @class
 */
export abstract class WrappingTemplateModel {
    /**
     * @deprecated Because it's a VM-wide modifiable field
     */
    static defaultObjectWrapper : any = new DefaultObjectWrapper();

    /*private*/ objectWrapper : any;

    /**
     * Sets the default object wrapper that is used when a wrapping template
     * model is constructed without being passed an explicit object wrapper.
     * The default value is {link ObjectWrapper#SIMPLE_WRAPPER}.
     * Note that {link Configuration#setSharedVariable(String, Object)} and
     * {link Template#process(Object, java.io.Writer)} don't use this setting,
     * they rather use whatever object wrapper their
     * {link Configuration#getObjectWrapper()} method returns.
     * 
     * @deprecated This method has VM-wide effect, which makes it unsuitable for application where multiple components
     * might use FreeMarker internally.
     * @param {*} objectWrapper
     */
    public static setDefaultObjectWrapper(objectWrapper : any) {
        WrappingTemplateModel.defaultObjectWrapper = objectWrapper;
    }

    /**
     * Returns the default object wrapper that is used when a wrapping template
     * model is constructed without being passed an explicit object wrapper.
     * Note that {link Configuration#setSharedVariable(String, Object)} and
     * {link Template#process(Object, java.io.Writer)} don't use this setting,
     * they rather use whatever object wrapper their
     * {link Configuration#getObjectWrapper()} method returns.
     * 
     * @deprecated Don't depend on this object, as it can be replace by anybody in the same JVM.
     * @return {*}
     */
    public static getDefaultObjectWrapper() : any {
        return WrappingTemplateModel.defaultObjectWrapper;
    }

    public constructor(objectWrapper? : any) {
        if(((objectWrapper != null && (objectWrapper["__interfaces"] != null && objectWrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || objectWrapper.constructor != null && objectWrapper.constructor["__interfaces"] != null && objectWrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || objectWrapper === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.objectWrapper===undefined) this.objectWrapper = null;
            if(this.objectWrapper===undefined) this.objectWrapper = null;
            (() => {
                this.objectWrapper = objectWrapper != null?objectWrapper:WrappingTemplateModel.defaultObjectWrapper;
                if(this.objectWrapper == null) {
                    this.objectWrapper = WrappingTemplateModel.defaultObjectWrapper = new (require('./DefaultObjectWrapper').DefaultObjectWrapper)();
                }
            })();
        } else if(objectWrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let objectWrapper : any = WrappingTemplateModel.defaultObjectWrapper;
                if(this.objectWrapper===undefined) this.objectWrapper = null;
                if(this.objectWrapper===undefined) this.objectWrapper = null;
                (() => {
                    this.objectWrapper = objectWrapper != null?objectWrapper:WrappingTemplateModel.defaultObjectWrapper;
                    if(this.objectWrapper == null) {
                        this.objectWrapper = WrappingTemplateModel.defaultObjectWrapper = new (require('./DefaultObjectWrapper').DefaultObjectWrapper)();
                    }
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * Returns the object wrapper instance used by this wrapping template model.
     * @return {*}
     */
    public getObjectWrapper() : any {
        return this.objectWrapper;
    }

    public setObjectWrapper(objectWrapper : any) {
        this.objectWrapper = objectWrapper;
    }

    /**
     * Wraps the passed object into a template model using this object's object
     * wrapper.
     * 
     * @param {Object} obj the object to wrap
     * @return {*} the template model that wraps the object
     * @throws TemplateModelException if the wrapper does not know how to
     * wrap the passed object.
     */
    wrap(obj : any) : TemplateModel {
        return this.objectWrapper['wrap$java_lang_Object'](obj);
    }
}
WrappingTemplateModel["__class"] = "freemarker.template.WrappingTemplateModel";