/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateCollectionModelEx } from '../template/TemplateCollectionModelEx';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateModelIterator } from '../template/TemplateModelIterator';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';

/**
 * Add sequence capabilities to an existing collection, or
 * vice versa. Used by the ?keys and ?values built-ins.
 * @param {*} collection
 * @class
 */
export class CollectionAndSequence implements TemplateCollectionModel, TemplateSequenceModel {
    /*private*/ collection : TemplateCollectionModel;

    /*private*/ sequence : TemplateSequenceModel;

    /*private*/ data : ArrayList;

    public constructor(collection? : any) {
        if(((collection != null && (collection["__interfaces"] != null && collection["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || collection.constructor != null && collection.constructor["__interfaces"] != null && collection.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) || collection === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.collection===undefined) this.collection = null;
            if(this.sequence===undefined) this.sequence = null;
            if(this.data===undefined) this.data = null;
            if(this.collection===undefined) this.collection = null;
            if(this.sequence===undefined) this.sequence = null;
            if(this.data===undefined) this.data = null;
            (() => {
                this.collection = collection;
            })();
        } else if(((collection != null && (collection["__interfaces"] != null && collection["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || collection.constructor != null && collection.constructor["__interfaces"] != null && collection.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) || collection === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let sequence : any = __args[0];
            if(this.collection===undefined) this.collection = null;
            if(this.sequence===undefined) this.sequence = null;
            if(this.data===undefined) this.data = null;
            if(this.collection===undefined) this.collection = null;
            if(this.sequence===undefined) this.sequence = null;
            if(this.data===undefined) this.data = null;
            (() => {
                this.sequence = sequence;
            })();
        } else throw new Error('invalid overload');
    }

    public iterator() : TemplateModelIterator {
        if(this.collection != null) {
            return this.collection.iterator();
        } else {
            return new CollectionAndSequence.SequenceIterator(this.sequence);
        }
    }

    public get(i : number) : TemplateModel {
        if(this.sequence != null) {
            return this.sequence['get$int'](i);
        } else {
            this.initSequence();
            return /* get */this.data[i];
        }
    }

    public size() : number {
        if(this.sequence != null) {
            return this.sequence.size();
        }
        if(this.collection != null && (this.collection["__interfaces"] != null && this.collection["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0 || this.collection.constructor != null && this.collection.constructor["__interfaces"] != null && this.collection.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0)) {
            return (<TemplateCollectionModelEx><any>this.collection).size();
        } else {
            this.initSequence();
            return /* size */(<number>this.data.length);
        }
    }

    initSequence() {
        if(this.data == null) {
            this.data = <any>([]);
            let it : TemplateModelIterator = this.collection.iterator();
            while((it.hasNext())) {
                /* add */(this.data.push(it.next())>0);
            };
        }
    }
}
CollectionAndSequence["__class"] = "freemarker.core.CollectionAndSequence";
CollectionAndSequence["__interfaces"] = ["freemarker.template.TemplateCollectionModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];



export namespace CollectionAndSequence {

    export class SequenceIterator implements TemplateModelIterator {
        sequence : TemplateSequenceModel;

        size : number;

        index : number = 0;

        constructor(sequence : TemplateSequenceModel) {
            if(this.sequence===undefined) this.sequence = null;
            if(this.size===undefined) this.size = 0;
            this.sequence = sequence;
            this.size = sequence.size();
        }

        public next() : TemplateModel {
            return this.sequence['get$int'](this.index++);
        }

        public hasNext() : boolean {
            return this.index < this.size;
        }
    }
    SequenceIterator["__class"] = "freemarker.core.CollectionAndSequence.SequenceIterator";
    SequenceIterator["__interfaces"] = ["freemarker.template.TemplateModelIterator"];


}



