/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelAdapter} from '../../template/TemplateModelAdapter';
import {IdentityHashMap} from "./IdentityHashMap";

/**
 * Internally used by various wrapper implementations to implement model
 * caching.
 * @class
 */
export abstract class ModelCache {
    /*private*/
    useCache: boolean = false;

    /*private*/
    modelCache: Map<any, any> = null;

    /*private*/
    refQueue: Array<any> = null;

    constructor() {
    }

    /**
     * Sets whether this wrapper caches model instances. Default is false.
     * When set to true, calling {link #getInstance(Object)}
     * multiple times for the same object will return the same model.
     * @param {boolean} useCache
     */
    public setUseCache(useCache: boolean) {
        this.useCache = useCache;
        if (useCache) {
            this.modelCache = <any>(new IdentityHashMap());
            this.refQueue = <any>([]);
        } else {
            this.modelCache = null;
            this.refQueue = null;
        }
    }

    /**
     * @since 2.3.21
     * @return {boolean}
     */
    public getUseCache(): boolean {
        return this.useCache;
    }

    public getInstance(object: any): TemplateModel {
        if (object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) {
            return <TemplateModel><any>object;
        }
        if (object != null && (object["__interfaces"] != null && object["__interfaces"].indexOf("freemarker.template.TemplateModelAdapter") >= 0 || object.constructor != null && object.constructor["__interfaces"] != null && object.constructor["__interfaces"].indexOf("freemarker.template.TemplateModelAdapter") >= 0)) {
            return (<TemplateModelAdapter><any>object).getTemplateModel();
        }
        if (this.useCache && this.isCacheable(object)) {
            let model: TemplateModel = this.lookup(object);
            if (model == null) {
                model = this.create(object);
                this.register(model, object);
            }
            return model;
        } else {
            return this.create(object);
        }
    }

    abstract create(object: any): TemplateModel;

    abstract isCacheable(object: any): boolean;

    public clearCache() {
        if (this.modelCache != null) {
            {
                /* clear */
                (<any>this.modelCache).clear();
            }
        }
    }

    lookup(object: any): TemplateModel {
        let ref: ModelCache.ModelReference = null;
        {
            ref = /* get */this.modelCache.get(object);
        }
        if (ref != null) return ref.getModel();
        return null;
    }

    register(model: TemplateModel, object: any) {
        {
            for (; ;) {
                let queuedRef: ModelCache.ModelReference = <ModelCache.ModelReference>this.refQueue.shift();
                if (queuedRef == null) {
                    break;
                }
                /* remove */
                this.modelCache.delete(queuedRef.object);
            }
            /* put */
            this.modelCache.set(object, (() => {
                let __o: any = new ModelCache.ModelReference(model, object, this.refQueue);
                __o.__delegate = new ModelCache.ModelReference(model, object, this.refQueue);
                return __o;
            })());
        }
    }
}

ModelCache["__class"] = "freemarker.ext.util.ModelCache";


export namespace ModelCache {

    /**
     * A special soft reference that is registered in the modelCache.
     * When it gets cleared (that is, the model became unreachable)
     * it will remove itself from the model cache.
     * @extends SoftReference
     * @class
     */
    export class ModelReference {
        object: any;

        constructor(ref: TemplateModel, object: any, refQueue: Array<any>) {
            if (this.object === undefined) this.object = null;
            this.object = object;
        }

        getModel(): TemplateModel {
            return this.object;
        }
    }

    ModelReference["__class"] = "freemarker.ext.util.ModelCache.ModelReference";

}



