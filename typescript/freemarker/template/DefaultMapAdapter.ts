/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_DelayedJQuote} from '../core/_DelayedJQuote';
import {_TemplateModelException} from '../core/_TemplateModelException';
import {WrapperTemplateModel} from '../ext/util/WrapperTemplateModel';
import {ObjectWrapperWithAPISupport} from './utility/ObjectWrapperWithAPISupport';
import {WrappingTemplateModel} from './WrappingTemplateModel';
import {TemplateHashModelEx2} from './TemplateHashModelEx2';
import {AdapterTemplateModel} from './AdapterTemplateModel';
import {TemplateModelWithAPISupport} from './TemplateModelWithAPISupport';
import {ObjectWrapper} from './ObjectWrapper';
import {TemplateModel} from './TemplateModel';
import {TemplateCollectionModel} from './TemplateCollectionModel';
import {SimpleCollection} from './SimpleCollection';
import {KeyValuePairIterator} from './KeyValuePairIterator';
import {MapKeyValuePairIterator} from './MapKeyValuePairIterator';
import {Map} from "../../java/util/Map";

/**
 * Adapts a {link Map} to the corresponding {link TemplateModel} interface(s), most importantly to
 * {link TemplateHashModelEx}. If you aren't wrapping an already existing {link Map}, but build a hash specifically to
 * be used from a template, also consider using {link SimpleHash} (see comparison there).
 * <p>
 * <p>
 * Thread safety: A {link DefaultMapAdapter} is as thread-safe as the {link Map} that it wraps is. Normally you only
 * have to consider read-only access, as the FreeMarker template language doesn't allow writing these hashes (though of
 * course, Java methods called from the template can violate this rule).
 * <p>
 * <p>
 * This adapter is used by {link DefaultObjectWrapper} if its {@code useAdaptersForCollections} property is
 * {@code true}, which is the default when its {@code incompatibleImprovements} property is 2.3.22 or higher.
 * 
 * @since 2.3.22
 * @extends WrappingTemplateModel
 * @class
 */
export class DefaultMapAdapter extends WrappingTemplateModel implements TemplateHashModelEx2, AdapterTemplateModel, WrapperTemplateModel, TemplateModelWithAPISupport {
    /*private*/ map : Map<any, any>;

    /**
     * Factory method for creating new adapter instances.
     * 
     * @param {Map} map     The map to adapt; can't be {@code null}.
     * @param {*} wrapper The {link ObjectWrapper} used to wrap the items in the array.
     * @return {DefaultMapAdapter}
     */
    public static adapt(map : Map<any, any>, wrapper : ObjectWrapperWithAPISupport) : DefaultMapAdapter {
        return new DefaultMapAdapter(map, wrapper);
    }

    constructor(map : Map<any, any>, wrapper : ObjectWrapper) {
        super(wrapper);
        if(this.map===undefined) this.map = null;
        this.map = map;
    }

    public get$java_lang_String(key : string) : TemplateModel {
        let val : any;
        try {
            val = /* get */this.map.get(key);
        } catch(__e) {
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassCastException") >= 0)) {
                let e : Error = <Error>__e;
                throw new _TemplateModelException(e, "ClassCastException while getting Map entry with String key ", new _DelayedJQuote(key));

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NullPointerException") >= 0)) {
                let e : Error = <Error>__e;
                throw new _TemplateModelException(e, "NullPointerException while getting Map entry with String key ", new _DelayedJQuote(key));

            }
        }
        if(val == null) {
            if(key.length === 1 && !(this.map != null && (this.map["__interfaces"] != null && this.map["__interfaces"].indexOf("java.util.SortedMap") >= 0 || this.map.constructor != null && this.map.constructor["__interfaces"] != null && this.map.constructor["__interfaces"].indexOf("java.util.SortedMap") >= 0))) {
                let charKey : string = key.charAt(0);
                try {
                    val = /* get */this.map.get(charKey);
                    if(val == null) {
                        let wrappedNull : TemplateModel = this.wrap(null);
                        if(wrappedNull == null || !(/* containsKey */this.map.has(key) || /* containsKey */this.map.has(charKey))) {
                            return null;
                        } else {
                            return wrappedNull;
                        }
                    }
                } catch(__e) {
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassCastException") >= 0)) {
                        let e : Error = <Error>__e;
                        throw new _TemplateModelException(e, "Class casting exception while getting Map entry with Character key ", new _DelayedJQuote(charKey));

                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NullPointerException") >= 0)) {
                        let e : Error = <Error>__e;
                        throw new _TemplateModelException(e, "NullPointerException while getting Map entry with Character key ", new _DelayedJQuote(charKey));

                    }
                }
            } else {
                let wrappedNull : TemplateModel = this.wrap(null);
                if(wrappedNull == null || !/* containsKey */this.map.has(key)) {
                    return null;
                } else {
                    return wrappedNull;
                }
            }
        }
        return this.wrap(val);
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    public isEmpty() : boolean {
        return /* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.map);
    }

    public size() : number {
        return /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.map);
    }

    public keys() : TemplateCollectionModel {
        return new SimpleCollection(/* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.map), this.getObjectWrapper());
    }

    public values() : TemplateCollectionModel {
        return new SimpleCollection(/* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>this.map), this.getObjectWrapper());
    }

    public keyValuePairIterator() : KeyValuePairIterator {
        return new MapKeyValuePairIterator(this.map, this.getObjectWrapper());
    }

    public getAdaptedObject(hint : any) : any {
        return this.map;
    }

    public getWrappedObject() : any {
        return this.map;
    }

    public getAPI() : TemplateModel {
        return (<ObjectWrapperWithAPISupport><any>this.getObjectWrapper()).wrapAsAPI(this.map);
    }
}
DefaultMapAdapter["__class"] = "freemarker.template.DefaultMapAdapter";
DefaultMapAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];





