/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { DefaultObjectWrapper } from './DefaultObjectWrapper';
import { Version } from './Version';
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';
import { TemplateHashModel } from './TemplateHashModel';

/**
 * @param {Version} incompatibleImprovements see in {link BeansWrapper#BeansWrapper(Version)}.
 * @since 2.3.21
 * @class
 * @extends DefaultObjectWrapper
 */
export class SimpleObjectWrapper extends DefaultObjectWrapper {
    static instance : SimpleObjectWrapper; public static instance_$LI$() : SimpleObjectWrapper { if(SimpleObjectWrapper.instance == null) SimpleObjectWrapper.instance = new SimpleObjectWrapper(); return SimpleObjectWrapper.instance; };

    public constructor(incompatibleImprovements? : any) {
        if(((incompatibleImprovements != null && incompatibleImprovements instanceof <any>Version) || incompatibleImprovements === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(incompatibleImprovements);
        } else if(incompatibleImprovements === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super();
        } else throw new Error('invalid overload');
    }

    /**
     * Called if a type other than the simple ones we know about is passed in.
     * In this implementation, this just throws an exception.
     * @param {Object} obj
     * @return {*}
     */
    handleUnknownType(obj : any) : TemplateModel {
        throw new TemplateModelException("SimpleObjectWrapper deliberately won\'t wrap this type: " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>obj.constructor)));
    }

    /**
     * 
     * @param {Object} obj
     * @return {*}
     */
    public wrapAsAPI(obj : any) : TemplateHashModel {
        throw new TemplateModelException("SimpleObjectWrapper deliberately doesn\'t allow ?api.");
    }
}
SimpleObjectWrapper["__class"] = "freemarker.template.SimpleObjectWrapper";
SimpleObjectWrapper["__interfaces"] = ["freemarker.template.utility.WriteProtectable","freemarker.template.utility.RichObjectWrapper","freemarker.template.utility.ObjectWrapperWithAPISupport","freemarker.template.ObjectWrapperAndUnwrapper","freemarker.template.ObjectWrapper"];




var __Function = Function;

SimpleObjectWrapper.instance_$LI$();
