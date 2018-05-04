/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _DelayedJQuote } from '../../core/_DelayedJQuote';
import { _TemplateModelException } from '../../core/_TemplateModelException';
import { TemplateHashModel } from '../../template/TemplateHashModel';
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelException } from '../../template/TemplateModelException';
import { ClassUtil } from '../../template/utility/ClassUtil';
import { BeansWrapper } from './BeansWrapper';
import { ClassIntrospector } from './ClassIntrospector';

/**
 * Base class for hash models keyed by Java class names.
 * @class
 */
export abstract class ClassBasedModelFactory implements TemplateHashModel {
    /*private*/ wrapper : BeansWrapper;

    /*private*/ cache : Map<any, any> = <any>(<Map>new Map());

    /*private*/ classIntrospectionsInProgress : Array<any> = <any>([]);

    constructor(wrapper : BeansWrapper) {
        if(this.wrapper===undefined) this.wrapper = null;
        this.wrapper = wrapper;
    }

    public get$java_lang_String(key : string) : TemplateModel {
        try {
            return this.getInternal(key);
        } catch(e) {
            if(e != null && e instanceof <any>TemplateModelException) {
                throw <TemplateModelException>e;
            } else {
                throw new _TemplateModelException(e, "Failed to get valeu for key ", new _DelayedJQuote(key), "; see cause exception.");
            }
        };
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    /*private*/ getInternal(key : string) : TemplateModel {
        {
            let model : TemplateModel = <TemplateModel><any>/* get */this.cache.get(key);
            if(model != null) return model;
        };
        let classIntrospector : ClassIntrospector;
        let classIntrospectorClearingCounter : number;
        let sharedLock : any = this.wrapper.getSharedIntrospectionLock();
        {
            let model : TemplateModel = <TemplateModel><any>/* get */this.cache.get(key);
            if(model != null) return model;
            while((model == null && /* contains */(this.classIntrospectionsInProgress.indexOf(<any>(key)) >= 0))) {
                try {
                    sharedLock.wait();
                    model = <TemplateModel><any>/* get */this.cache.get(key);
                } catch(e) {
                    throw Object.defineProperty(new Error("Class inrospection data lookup aborded: " + e), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                };
            };
            if(model != null) return model;
            /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.classIntrospectionsInProgress, key);
            classIntrospector = this.wrapper.getClassIntrospector();
            classIntrospectorClearingCounter = classIntrospector.getClearingCounter();
        };
        try {
            let clazz : any = ClassUtil.forName(key);
            classIntrospector.get(clazz);
            let model : TemplateModel = this.createModel(clazz);
            if(model != null) {
                {
                    if(classIntrospector === this.wrapper.getClassIntrospector() && classIntrospectorClearingCounter === classIntrospector.getClearingCounter()) {
                        /* put */this.cache.set(key, model);
                    }
                };
            }
            return model;
        } finally {
            {
                /* remove */(a => { let index = a.indexOf(key); if(index>=0) { a.splice(index, 1); return true; } else { return false; }})(this.classIntrospectionsInProgress);
                sharedLock.notifyAll();
            };
        };
    }

    clearCache() {
        {
            /* clear */(<any>this.cache).clear();
        };
    }

    removeFromCache(clazz : any) {
        {
            /* remove */this.cache.delete(/* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz));
        };
    }

    public isEmpty() : boolean {
        return false;
    }

    abstract createModel(clazz : any) : TemplateModel;

    getWrapper() : BeansWrapper {
        return this.wrapper;
    }
}
ClassBasedModelFactory["__class"] = "freemarker.ext.beans.ClassBasedModelFactory";
ClassBasedModelFactory["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];




var __Function = Function;
