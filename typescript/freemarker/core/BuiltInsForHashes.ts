/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateHashModelEx } from '../template/TemplateHashModelEx';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { BuiltInForHashEx } from './BuiltInForHashEx';
import { Environment } from './Environment';
import { InvalidReferenceException } from './InvalidReferenceException';
import { CollectionAndSequence } from './CollectionAndSequence';

/**
 * A holder for builtins that operate exclusively on hash left-hand value.
 * @class
 */
export class BuiltInsForHashes {
    constructor() {
    }
}
BuiltInsForHashes["__class"] = "freemarker.core.BuiltInsForHashes";


export namespace BuiltInsForHashes {

    export class keysBI extends BuiltInForHashEx {
        /**
         * 
         * @param {*} hashExModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(hashExModel : TemplateHashModelEx, env : Environment) : TemplateModel {
            let keys : TemplateCollectionModel = hashExModel.keys();
            if(keys == null) throw this.newNullPropertyException("keys", hashExModel, env);
            return (keys != null && (keys["__interfaces"] != null && keys["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || keys.constructor != null && keys.constructor["__interfaces"] != null && keys.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))?keys:new CollectionAndSequence(keys);
        }

        constructor() {
            super();
        }
    }
    keysBI["__class"] = "freemarker.core.BuiltInsForHashes.keysBI";
    keysBI["__interfaces"] = ["java.lang.Cloneable"];



    export class valuesBI extends BuiltInForHashEx {
        /**
         * 
         * @param {*} hashExModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(hashExModel : TemplateHashModelEx, env : Environment) : TemplateModel {
            let values : TemplateCollectionModel = hashExModel.values();
            if(values == null) throw this.newNullPropertyException("values", hashExModel, env);
            return (values != null && (values["__interfaces"] != null && values["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || values.constructor != null && values.constructor["__interfaces"] != null && values.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))?values:new CollectionAndSequence(values);
        }

        constructor() {
            super();
        }
    }
    valuesBI["__class"] = "freemarker.core.BuiltInsForHashes.valuesBI";
    valuesBI["__interfaces"] = ["java.lang.Cloneable"];


}



