/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {KeyValuePairIterator} from './KeyValuePairIterator';
import {ObjectWrapper} from './ObjectWrapper';
import {KeyValuePair} from './KeyValuePair';
import {TemplateModel} from './TemplateModel';
import {Entry} from "../../java/util/Entry";
import {Iterator} from "../../java/util/Iterator";
import {Map} from "../../java/util/Map";

/**
 * Implementation of {link KeyValuePairIterator} for a {link TemplateHashModelEx2} that wraps or otherwise uses a
 * {link Map} internally.
 * 
 * @since 2.3.25
 * @param {Map} map
 * @param {*} objectWrapper
 * @class
 */
export class MapKeyValuePairIterator implements KeyValuePairIterator {
    /*private*/ entrySetIterator : Iterator<any>;

    /*private*/ objectWrapper : ObjectWrapper;

    public constructor(map : Map<any, any>, objectWrapper : /*ObjectWrapper*/any) {
        if(this.entrySetIterator===undefined) this.entrySetIterator = null;
        if(this.objectWrapper===undefined) this.objectWrapper = null;
        this.entrySetIterator = map.iterator();
        this.objectWrapper = objectWrapper;
    }

    public hasNext() : boolean {
        return this.entrySetIterator.hasNext();
    }

    public next() : KeyValuePair {
        let entry : Entry<any, any> = this.entrySetIterator.next();
        return new MapKeyValuePairIterator.MapKeyValuePairIterator$0(this, entry);
    }

    /*private*/ wrap(obj : any) : TemplateModel {
        return (obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0))?<TemplateModel><any>obj:this.objectWrapper['wrap$java_lang_Object'](obj);
    }
}
MapKeyValuePairIterator["__class"] = "freemarker.template.MapKeyValuePairIterator";
MapKeyValuePairIterator["__interfaces"] = ["freemarker.template.KeyValuePairIterator"];



export namespace MapKeyValuePairIterator {

    export class MapKeyValuePairIterator$0 implements KeyValuePair {
        public __parent: any;
        public getKey() : TemplateModel {
            return this.__parent.wrap(this.entry.getKey());
        }

        public getValue() : TemplateModel {
            return this.__parent.wrap(this.entry.getValue());
        }

        constructor(__parent: any, private entry: any) {
            this.__parent = __parent;
        }
    }
    MapKeyValuePairIterator$0["__interfaces"] = ["freemarker.template.KeyValuePair"];


}




