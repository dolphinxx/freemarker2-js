/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Environment} from '../../core/Environment';
import {WrapperTemplateModel} from '../../ext/util/WrapperTemplateModel';
import {AdapterTemplateModel} from '../AdapterTemplateModel';
import {KeyValuePair} from '../KeyValuePair';
import {KeyValuePairIterator} from '../KeyValuePairIterator';
import {ObjectWrapper} from '../ObjectWrapper';
import {TemplateBooleanModel} from '../TemplateBooleanModel';
import {TemplateCollectionModel} from '../TemplateCollectionModel';
import {TemplateDateModel} from '../TemplateDateModel';
import {TemplateHashModelEx} from '../TemplateHashModelEx';
import {TemplateHashModelEx2} from '../TemplateHashModelEx2';
import {TemplateModel} from '../TemplateModel';
import {TemplateModelException} from '../TemplateModelException';
import {TemplateModelIterator} from '../TemplateModelIterator';
import {TemplateNumberModel} from '../TemplateNumberModel';
import {TemplateScalarModel} from '../TemplateScalarModel';
import {TemplateSequenceModel} from '../TemplateSequenceModel';
import {Map} from "../../../java/util/Map";
import {ClassUtil} from "./ClassUtil";

/**
 * Utility methods for unwrapping {link TemplateModel}-s.
 * @class
 */
export class DeepUnwrap {
    static OBJECT_CLASS : any; public static OBJECT_CLASS_$LI$() : any { if(DeepUnwrap.OBJECT_CLASS == null) DeepUnwrap.OBJECT_CLASS = Object; return DeepUnwrap.OBJECT_CLASS; };

    public static unwrap$freemarker_template_TemplateModel(model : TemplateModel) : any {
        return DeepUnwrap.unwrap$freemarker_template_TemplateModel$boolean(model, false);
    }

    /**
     * Same as {link #unwrap(TemplateModel)}, but it doesn't throw exception
     * if it doesn't know how to unwrap the model, but rather returns it as-is.
     * 
     * @since 2.3.14
     * @param {*} model
     * @return {Object}
     */
    public static permissiveUnwrap(model : TemplateModel) : any {
        return DeepUnwrap.unwrap$freemarker_template_TemplateModel$boolean(model, true);
    }

    /**
     * @deprecated the name of this method is mistyped. Use
     * {link #permissiveUnwrap(TemplateModel)} instead.
     * @param {*} model
     * @return {Object}
     */
    public static premissiveUnwrap(model : TemplateModel) : any {
        return DeepUnwrap.unwrap$freemarker_template_TemplateModel$boolean(model, true);
    }

    /*private*/ static unwrap$freemarker_template_TemplateModel$boolean(model : TemplateModel, permissive : boolean) : any {
        let env : Environment = Environment.getCurrentEnvironment();
        let nullModel : TemplateModel = null;
        if(env != null) {
            let wrapper : ObjectWrapper = env.getObjectWrapper();
            if(wrapper != null) {
                nullModel = wrapper['wrap$java_lang_Object'](null);
            }
        }
        return DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(model, nullModel, permissive);
    }

    public static unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(model : TemplateModel, nullModel : TemplateModel, permissive : boolean) : any {
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.AdapterTemplateModel")) {
            return (<AdapterTemplateModel><any>model).getAdaptedObject(DeepUnwrap.OBJECT_CLASS_$LI$());
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.ext.util.WrapperTemplateModel")) {
            return (<WrapperTemplateModel><any>model).getWrappedObject();
        }
        if(model === nullModel) {
            return null;
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateScalarModel")) {
            return (<TemplateScalarModel><any>model).getAsString();
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateNumberModel")) {
            return (<TemplateNumberModel><any>model).getAsNumber();
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateDateModel")) {
            return (<TemplateDateModel><any>model).getAsDate();
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateBooleanModel")) {
            return (<TemplateBooleanModel><any>model).getAsBoolean();
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateSequenceModel")) {
            let seq : TemplateSequenceModel = <TemplateSequenceModel><any>model;
            let size : number = seq.size();
            let list : Array<any> = <any>([]);
            for(let i : number = 0; i < size; ++i) {
                /* add */(list.push(DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(seq.get(i), nullModel, permissive))>0);
            }
            return list;
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateCollectionModel")) {
            let coll : TemplateCollectionModel = <TemplateCollectionModel><any>model;
            let list : Array<any> = <any>([]);
            let it : TemplateModelIterator = coll.iterator();
            while((it.hasNext())) {
                /* add */(list.push(DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(it.next(), nullModel, permissive))>0);
            }
            return list;
        }
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateHashModelEx")) {
            let hash : TemplateHashModelEx = <TemplateHashModelEx><any>model;
            let map : Map<any, any> = <any>(new Map<any, any>());
            if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateHashModelEx2")) {
                let kvps : KeyValuePairIterator = (<TemplateHashModelEx2><any>model).keyValuePairIterator();
                while((kvps.hasNext())) {
                    let kvp : KeyValuePair = kvps.next();
                    /* put */map.set(DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(kvp.getKey(), nullModel, permissive), DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(kvp.getValue(), nullModel, permissive));
                }
            } else {
                let keys : TemplateModelIterator = hash.keys().iterator();
                while((keys.hasNext())) {
                    let key : string = <string>DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(keys.next(), nullModel, permissive);
                    /* put */map.set(key, DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(hash.get(key), nullModel, permissive));
                }
            }
            return map;
        }
        if(permissive) {
            return model;
        }
        throw new TemplateModelException("Cannot deep-unwrap model of type " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>model.constructor)));
    }

    public static unwrap(model? : any, nullModel? : any, permissive? : any) : any {
        if(((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((nullModel != null && (nullModel["__interfaces"] != null && nullModel["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || nullModel.constructor != null && nullModel.constructor["__interfaces"] != null && nullModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || nullModel === null) && ((typeof permissive === 'boolean') || permissive === null)) {
            return <any>DeepUnwrap.unwrap$freemarker_template_TemplateModel$freemarker_template_TemplateModel$boolean(model, nullModel, permissive);
        } else if(((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((typeof nullModel === 'boolean') || nullModel === null) && permissive === undefined) {
            return <any>DeepUnwrap.unwrap$freemarker_template_TemplateModel$boolean(model, nullModel);
        } else if(((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && nullModel === undefined && permissive === undefined) {
            return <any>DeepUnwrap.unwrap$freemarker_template_TemplateModel(model);
        } else throw new Error('invalid overload');
    }
}
DeepUnwrap["__class"] = "freemarker.template.utility.DeepUnwrap";





DeepUnwrap.OBJECT_CLASS_$LI$();
