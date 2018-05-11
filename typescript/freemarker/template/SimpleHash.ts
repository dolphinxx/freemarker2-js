/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_DelayedJQuote} from '../core/_DelayedJQuote';
import {_TemplateModelException} from '../core/_TemplateModelException';
import {WrappingTemplateModel} from './WrappingTemplateModel';
import {TemplateHashModelEx2} from './TemplateHashModelEx2';
import {ObjectWrapper} from './ObjectWrapper';
import {TemplateBooleanModel} from './TemplateBooleanModel';
import {TemplateModel} from './TemplateModel';
import {TemplateModelException} from './TemplateModelException';
import {TemplateCollectionModel} from './TemplateCollectionModel';
import {SimpleCollection} from './SimpleCollection';
import {KeyValuePairIterator} from './KeyValuePairIterator';
import {MapKeyValuePairIterator} from './MapKeyValuePairIterator';
import {Entry} from "../../java/util/Entry";
import {Map} from "../../java/util/Map";

/**
 * Creates a new hash by shallow-coping (possibly cloning) the underlying map; in many applications you should use
 * {link DefaultMapAdapter} instead.
 * 
 * @param {Map} map     The Map to use for the key/value pairs. It makes a copy for internal use. If the map implements the
 * {link SortedMap} interface, the internal copy will be a {link TreeMap}, otherwise it will be a
 * @param {*} wrapper The object wrapper to use to wrap contained objects into {link TemplateModel} instances. Using
 * {@code null} is deprecated but allowed, in which case the deprecated default wrapper set in
 * {link WrappingTemplateModel#setDefaultObjectWrapper(ObjectWrapper)} is used.
 * @class
 * @extends WrappingTemplateModel
 */
export class SimpleHash extends WrappingTemplateModel implements TemplateHashModelEx2 {
    /*private*/ map : Map<any, any>;

    /*private*/ putFailed : boolean;

    // /*private*/ unwrappedMap : Map<any, any>;

    public constructor(map? : any, wrapper? : any) {
        super(wrapper);
        this.map = map === undefined ? new Map() : (map instanceof Map) ? <Map>map : Map.fromObject(map);
    }

    copyMap(map : Map<any, any>) : Map<any, any> {
        const result = new Map();
        map.forEach((v, k, m) => result.set(k, v));
        return result;
        // if(map != null && (map instanceof Map)) {
        //     return <Map<any, any>><any>/* clone */(m => { if(m.entries==null) m.entries=[]; let c = {entries: []}; for(let i=0;i<m.entries.length;i++) { let k = m.entries[i].key, v = m.entries[i].value; c.entries[i] = {key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}; } return c; })((<Map<any, any>><any>map));
        // }
        // if(map != null && (map["__interfaces"] != null && map["__interfaces"].indexOf("java.util.SortedMap") >= 0 || map.constructor != null && map.constructor["__interfaces"] != null && map.constructor["__interfaces"].indexOf("java.util.SortedMap") >= 0)) {
        //     if(map != null && (map instanceof Map)) {
        //         return <Map<any, any>><any>/* clone */(m => { if(m.entries==null) m.entries=[]; let c = {entries: []}; for(let i=0;i<m.entries.length;i++) { let k = m.entries[i].key, v = m.entries[i].value; c.entries[i] = {key:k,value:v,getKey: function() { return this.key }, getValue: function() { return this.value }}; } return c; })((<Map<any, any>><any>map));
        //     } else {
        //         return <any>(new Map<any, any>());
        //     }
        // }
        // return <any>(new Map<any, any>());
    }

    public put$java_lang_String$java_lang_Object(key : string, value : any) {
        /* put */this.map.set(key, value);
        // this.unwrappedMap = null;
    }

    public put$java_lang_String$boolean(key : string, b : boolean) {
        this.put$java_lang_String$java_lang_Object(key, b?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE);
    }

    /**
     * Puts a boolean in the map
     * 
     * @param {String} key the name by which the resulting <tt>TemplateModel</tt>
     * is identified in the template.
     * @param {boolean} b   the boolean to store.
     */
    public put(key? : any, b? : any) : any {
        if(((typeof key === 'string') || key === null) && ((typeof b === 'boolean') || b === null)) {
            return <any>this.put$java_lang_String$boolean(key, b);
        } else if(((typeof key === 'string') || key === null) && ((b != null) || b === null)) {
            return <any>this.put$java_lang_String$java_lang_Object(key, b);
        } else throw new Error('invalid overload');
    }

    public get$java_lang_String(key : string) : TemplateModel {
        let result : any;
        try {
            result = /* get */this.map.get(key);
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
        let putKey : any = null;
        if(result == null) {
            if(key.length === 1 && !(this.map != null && (this.map["__interfaces"] != null && this.map["__interfaces"].indexOf("java.util.SortedMap") >= 0 || this.map.constructor != null && this.map.constructor["__interfaces"] != null && this.map.constructor["__interfaces"].indexOf("java.util.SortedMap") >= 0))) {
                let charKey : string = key.charAt(0);
                try {
                    result = /* get */this.map.get(charKey);
                    if(result != null || /* containsKey */this.map.has(charKey)) {
                        putKey = charKey;
                    }
                } catch(__e) {
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassCastException") >= 0)) {
                        let e : Error = <Error>__e;
                        throw new _TemplateModelException(e, "ClassCastException while getting Map entry with Character key ", new _DelayedJQuote(key));

                    }
                    if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NullPointerException") >= 0)) {
                        let e : Error = <Error>__e;
                        throw new _TemplateModelException(e, "NullPointerException while getting Map entry with Character key ", new _DelayedJQuote(key));

                    }
                }
            }
            if(putKey == null) {
                if(!/* containsKey */this.map.has(key)) {
                    return null;
                } else {
                    putKey = key;
                }
            }
        } else {
            putKey = key;
        }
        if(result != null && (result["__interfaces"] != null && result["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || result.constructor != null && result.constructor["__interfaces"] != null && result.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) {
            return <TemplateModel><any>result;
        }
        let tm : TemplateModel = this.wrap(result);
        if(!this.putFailed) {
            try {
                /* put */this.map.set(putKey, tm);
            } catch(e) {
                this.putFailed = true;
            }
        }
        return tm;
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    /**
     * Tells if the map contains a key or not, regardless if the associated value is {@code null} or not.
     * 
     * @since 2.3.20
     * @param {String} key
     * @return {boolean}
     */
    public containsKey(key : string) : boolean {
        return /* containsKey */this.map.has(key);
    }

    /**
     * Removes the given key from the underlying map.
     * 
     * @param {String} key the key to be removed
     */
    public remove(key : string) {
        /* remove */this.map.delete(key);
    }

    /**
     * Adds all the key/value entries in the map
     * 
     * @param {Map} m the map with the entries to add, the keys are assumed to be strings.
     */
    public putAll(m : Map<any, any>) {
        for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>m)); it.hasNext(); ) {
            let entry : Entry<any, any> = <Entry<any, any>><any>it.next();
            this.put$java_lang_String$java_lang_Object(<string>entry.getKey(), entry.getValue());
        }
    }

    /**
     * Note that this method creates and returns a deep-copy of the underlying hash used
     * internally. This could be a gotcha for some people
     * at some point who want to alter something in the data model,
     * but we should maintain our immutability semantics (at least using default SimpleXXX wrappers)
     * for the data model. It will recursively unwrap the stuff in the underlying container.
     * @return {Map}
     */
    public toMap() : Map<any, any> {
        // if(this.unwrappedMap == null) {
        //     let mapClass : any = (<any>this.map.constructor);
        //     let m : Map<any, any> = null;
        //     try {
        //         m = <Map<any, any>><any>/* newInstance */new (mapClass)();
        //     } catch(e) {
        //         throw new TemplateModelException("Error instantiating map of type " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(mapClass) + "\n" + e.message);
        //     }
        //     let bw : /*BeansWrapper*/any = (require('../ext/beans/BeansWrapper').BeansWrapper).getDefaultInstance();
        //     for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>this.map)); it.hasNext(); ) {
        //         let entry : Entry<any, any> = <Entry<any, any>><any>it.next();
        //         let key : any = entry.getKey();
        //         let value : any = entry.getValue();
        //         if(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) {
        //             value = bw.unwrap$freemarker_template_TemplateModel(<TemplateModel><any>value);
        //         }
        //         /* put */m.set(key, value);
        //     }
        //     this.unwrappedMap = m;
        // }
        // return this.unwrappedMap;
        return this.map;
    }

    /**
     * Returns the {@code toString()} of the underlying {link Map}.
     * @return {String}
     */
    public toString() : string {
        return this.map.toString();
    }

    public size() : number {
        return /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.map);
    }

    public isEmpty() : boolean {
        return this.map == null || /* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.map);
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

    public synchronizedWrapper() : SimpleHash {
        return new SimpleHash.SynchronizedHash(this);
    }
}
SimpleHash["__class"] = "freemarker.template.SimpleHash";
SimpleHash["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","java.io.Serializable"];



export namespace SimpleHash {

    export class SynchronizedHash extends SimpleHash {
        public __parent: any;
        /**
         * 
         * @return {boolean}
         */
        public isEmpty() : boolean {
            {
                return this.isEmpty();
            }
        }

        /**
         * Puts a boolean in the map
         * 
         * @param {String} key the name by which the resulting <tt>TemplateModel</tt>
         * is identified in the template.
         * @param {boolean} b   the boolean to store.
         */
        public put(key? : any, b? : any) : any {
            if(((typeof key === 'string') || key === null) && ((typeof b === 'boolean') || b === null)) {
                super.put(key, b);
            } else if(((typeof key === 'string') || key === null) && ((b != null) || b === null)) {
                return <any>this.put$java_lang_String$java_lang_Object(key, b);
            } else throw new Error('invalid overload');
        }

        public put$java_lang_String$java_lang_Object(key : string, obj : any) {
            {
                this.put$java_lang_String$java_lang_Object(key, obj);
            }
        }

        public get$java_lang_String(key : string) : TemplateModel {
            {
                return this.get$java_lang_String(key);
            }
        }

        /**
         * 
         * @param {String} key
         * @return {*}
         */
        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>this.get$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {String} key
         */
        public remove(key : string) {
            {
                this.remove(key);
            }
        }

        /**
         * 
         * @return {number}
         */
        public size() : number {
            {
                return this.size();
            }
        }

        /**
         * 
         * @return {*}
         */
        public keys() : TemplateCollectionModel {
            {
                return this.keys();
            }
        }

        /**
         * 
         * @return {*}
         */
        public values() : TemplateCollectionModel {
            {
                return this.values();
            }
        }

        /**
         * 
         * @return {*}
         */
        public keyValuePairIterator() : KeyValuePairIterator {
            {
                return this.keyValuePairIterator();
            }
        }

        /**
         * 
         * @return {Map}
         */
        public toMap() : Map<any, any> {
            {
                return this.toMap();
            }
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    SynchronizedHash["__class"] = "freemarker.template.SimpleHash.SynchronizedHash";
    SynchronizedHash["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","java.io.Serializable"];


}




