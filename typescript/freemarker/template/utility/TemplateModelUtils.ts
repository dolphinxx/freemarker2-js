/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_MessageUtil} from '../../core/_MessageUtil';
import {KeyValuePair} from '../KeyValuePair';
import {KeyValuePairIterator} from '../KeyValuePairIterator';
import {TemplateHashModelEx} from '../TemplateHashModelEx';
import {TemplateHashModelEx2} from '../TemplateHashModelEx2';
import {TemplateModel} from '../TemplateModel';
import {TemplateModelIterator} from '../TemplateModelIterator';
import {TemplateScalarModel} from '../TemplateScalarModel';

/**
 * Static utility method related to {link TemplateModel}-s that didn't fit elsewhere.
 * 
 * @since 2.3.28
 * @class
 */
export class TemplateModelUtils {
    constructor() {
    }

    /**
     * {link TemplateHashModelExKeyValuePairIterator} that even works for a non-{link TemplateHashModelEx2}
     * {link TemplateHashModelEx}. This is used to simplify code that needs to iterate through the key-value pairs of
     * {link TemplateHashModelEx}-s, as with this you don't have to handle non-{link TemplateHashModelEx2}-s
     * separately. For non-{link TemplateHashModelEx2} values the iteration will throw {link TemplateModelException}
     * if it reaches a key that's not a string ({link TemplateScalarModel}).
     * @param {*} hash
     * @return {*}
     */
    public static getKeyValuePairIterator(hash : TemplateHashModelEx) : KeyValuePairIterator {
        return (hash != null && (hash["__interfaces"] != null && hash["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx2") >= 0 || hash.constructor != null && hash.constructor["__interfaces"] != null && hash.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx2") >= 0))?(<TemplateHashModelEx2><any>hash).keyValuePairIterator():new TemplateModelUtils.TemplateHashModelExKeyValuePairIterator(hash);
    }
}
TemplateModelUtils["__class"] = "freemarker.template.utility.TemplateModelUtils";


export namespace TemplateModelUtils {

    export class TemplateHashModelExKeyValuePairIterator implements KeyValuePairIterator {
        hash : TemplateHashModelEx;

        keyIter : TemplateModelIterator;

        constructor(hash : TemplateHashModelEx) {
            if(this.hash===undefined) this.hash = null;
            if(this.keyIter===undefined) this.keyIter = null;
            this.hash = hash;
            this.keyIter = hash.keys().iterator();
        }

        public hasNext() : boolean {
            return this.keyIter.hasNext();
        }

        public next() : KeyValuePair {
            let key : TemplateModel = this.keyIter.next();
            if(!(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                throw _MessageUtil.newKeyValuePairListingNonStringKeyExceptionMessage(key, this.hash);
            }
            return new TemplateHashModelExKeyValuePairIterator.TemplateHashModelExKeyValuePairIterator$0(this, key);
        }
    }
    TemplateHashModelExKeyValuePairIterator["__class"] = "freemarker.template.utility.TemplateModelUtils.TemplateHashModelExKeyValuePairIterator";
    TemplateHashModelExKeyValuePairIterator["__interfaces"] = ["freemarker.template.KeyValuePairIterator"];



    export namespace TemplateHashModelExKeyValuePairIterator {

        export class TemplateHashModelExKeyValuePairIterator$0 implements KeyValuePair {
            public __parent: any;
            public getKey() : TemplateModel {
                return this.key;
            }

            public getValue() : TemplateModel {
                return this.__parent.hash['get$java_lang_String']((<TemplateScalarModel><any>this.key).getAsString());
            }

            constructor(__parent: any, private key: any) {
                this.__parent = __parent;
            }
        }
        TemplateHashModelExKeyValuePairIterator$0["__interfaces"] = ["freemarker.template.KeyValuePair"];


    }

}




