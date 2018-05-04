/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../../template/TemplateModel';
import { ClassBasedModelFactory } from './ClassBasedModelFactory';
import { BeansWrapper } from './BeansWrapper';
import { SimpleMapModel } from './SimpleMapModel';

/**
 * Don't use this class; it's only public to work around Google App Engine Java
 * compliance issues. FreeMarker developers only: treat this class as package-visible.
 * @param {BeansWrapper} wrapper
 * @class
 * @extends ClassBasedModelFactory
 */
export class _EnumModels extends ClassBasedModelFactory {
    public constructor(wrapper : BeansWrapper) {
        super(wrapper);
    }

    /**
     * 
     * @param {*} clazz
     * @return {*}
     */
    createModel(clazz : any) : TemplateModel {
        let obj : Array<any> = clazz.getEnumConstants();
        if(obj == null) {
            return null;
        }
        let map : Map<any, any> = <any>(new Map<any, any>());
        for(let i : number = 0; i < obj.length; i++) {
            let value : Enum = <Enum>obj[i];
            /* put */map.set(value.name(), value);
        };
        return new SimpleMapModel(map, this.getWrapper());
    }
}
_EnumModels["__class"] = "freemarker.ext.beans._EnumModels";
_EnumModels["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];




var __Function = Function;
