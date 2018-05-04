/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Logger } from '../../log/Logger';
import { TemplateCollectionModel } from '../../template/TemplateCollectionModel';
import { TemplateHashModelEx } from '../../template/TemplateHashModelEx';
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelException } from '../../template/TemplateModelException';
import { BeansWrapper } from './BeansWrapper';
import { ObjectWrapper } from '../../template/ObjectWrapper';
import { ClassIntrospector } from './ClassIntrospector';
import { OverloadedMethods } from './OverloadedMethods';
import { SimpleMethodModel } from './SimpleMethodModel';
import { OverloadedMethodsModel } from './OverloadedMethodsModel';

/**
 * Wraps the static fields and methods of a class in a
 * {link freemarker.template.TemplateHashModel}.
 * Fields are wrapped using {link BeansWrapper#wrap(Object)}, and
 * methods are wrapped into an appropriate {link freemarker.template.TemplateMethodModelEx} instance.
 * Unfortunately, there is currently no support for bean property-style
 * calls of static methods, similar to that in {link BeanModel}.
 * @class
 */
export class StaticModel implements TemplateHashModelEx {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(StaticModel.LOG == null) StaticModel.LOG = Logger.getLogger("freemarker.beans"); return StaticModel.LOG; };

    /*private*/ clazz : any;

    /*private*/ wrapper : BeansWrapper;

    /*private*/ map : Map<any, any> = <any>(new Map<any, any>());

    constructor(clazz : any, wrapper : BeansWrapper) {
        if(this.clazz===undefined) this.clazz = null;
        if(this.wrapper===undefined) this.wrapper = null;
        this.clazz = clazz;
        this.wrapper = wrapper;
        this.populate();
    }

    public get$java_lang_String(key : string) : TemplateModel {
        let model : any = /* get */this.map.get(key);
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) return <TemplateModel><any>model;
        if(model != null && model instanceof <any>Field) {
            try {
                return this.wrapper.getOuterIdentity()['wrap$java_lang_Object'](/* get */null[(<Field>model).name]);
            } catch(e) {
                throw new TemplateModelException("Illegal access for field " + key + " of class " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(this.clazz));
            };
        }
        throw new TemplateModelException("No such key: " + key + " in class " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(this.clazz));
    }

    /**
     * Returns the field or method named by the <tt>key</tt>
     * parameter.
     * @param {String} key
     * @return {*}
     */
    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    /**
     * Returns true if there is at least one public static
     * field or method in the underlying class.
     * @return {boolean}
     */
    public isEmpty() : boolean {
        return /* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.map);
    }

    public size() : number {
        return /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.map);
    }

    public keys() : TemplateCollectionModel {
        return <TemplateCollectionModel><any>this.wrapper.getOuterIdentity()['wrap$java_lang_Object'](/* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.map));
    }

    public values() : TemplateCollectionModel {
        return <TemplateCollectionModel><any>this.wrapper.getOuterIdentity()['wrap$java_lang_Object'](/* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>this.map));
    }

    /*private*/ populate() {
        if(!Modifier.isPublic(this.clazz.getModifiers())) {
            throw new TemplateModelException("Can\'t wrap the non-public class " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(this.clazz));
        }
        if(this.wrapper.getExposureLevel() === BeansWrapper.EXPOSE_NOTHING) {
            return;
        }
        let fields : Array<any> = this.clazz.getFields();
        for(let i : number = 0; i < fields.length; ++i) {
            let field : Field = fields[i];
            let mod : number = field.getModifiers();
            if(Modifier.isPublic(mod) && Modifier.isStatic(mod)) {
                if(Modifier.isFinal(mod)) try {
                    /* put */this.map.set(/* getName */field.name, this.wrapper.getOuterIdentity()['wrap$java_lang_Object'](/* get */null[field.name]));
                } catch(e) {
                }; else /* put */this.map.set(/* getName */field.name, field);
            }
        };
        if(this.wrapper.getExposureLevel() < BeansWrapper.EXPOSE_PROPERTIES_ONLY) {
            let methods : Array<any> = /* getMethods */(c => { let m = []; for (let p in c.prototype) if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') m.push({owner:c,name:p,fn:c.prototype[p]}); return m; })(this.clazz);
            for(let i : number = 0; i < methods.length; ++i) {
                let method : Function = methods[i];
                let mod : number = method.getModifiers();
                if(Modifier.isPublic(mod) && Modifier.isStatic(mod) && this.wrapper.getClassIntrospector().isAllowedToExpose(method)) {
                    let name : string = /* getName */method.name;
                    let obj : any = /* get */this.map.get(name);
                    if(obj != null && (obj instanceof Function)) {
                        let overloadedMethods : OverloadedMethods = new OverloadedMethods(this.wrapper.is2321Bugfixed());
                        overloadedMethods.addMethod(<Function>obj);
                        overloadedMethods.addMethod(method);
                        /* put */this.map.set(name, overloadedMethods);
                    } else if(obj != null && obj instanceof <any>OverloadedMethods) {
                        let overloadedMethods : OverloadedMethods = <OverloadedMethods>obj;
                        overloadedMethods.addMethod(method);
                    } else {
                        if(obj != null) {
                            if(StaticModel.LOG_$LI$().isInfoEnabled()) {
                                StaticModel.LOG_$LI$().info$java_lang_String("Overwriting value [" + obj + "] for  key \'" + name + "\' with [" + method + "] in static model for " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(this.clazz));
                            }
                        }
                        /* put */this.map.set(name, method);
                    }
                }
            };
            for(let entries : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>this.map)); entries.hasNext(); ) {
                let entry : Entry = <Entry><any>entries.next();
                let value : any = entry.getValue();
                if(value != null && (value instanceof Function)) {
                    let method : Function = <Function>value;
                    entry.setValue(new SimpleMethodModel(null, method, method.getParameterTypes(), this.wrapper));
                } else if(value != null && value instanceof <any>OverloadedMethods) {
                    entry.setValue(new OverloadedMethodsModel(null, <OverloadedMethods>value, this.wrapper));
                }
            };
        }
    }
}
StaticModel["__class"] = "freemarker.ext.beans.StaticModel";
StaticModel["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel"];




var __Function = Function;

StaticModel.LOG_$LI$();
