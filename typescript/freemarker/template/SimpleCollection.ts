/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { WrappingTemplateModel } from './WrappingTemplateModel';
import { TemplateCollectionModel } from './TemplateCollectionModel';
import { ObjectWrapper } from './ObjectWrapper';
import { TemplateModelIterator } from './TemplateModelIterator';
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';

/**
 * Same as {link SimpleCollection#SimpleCollection(Iterable, ObjectWrapper)}; kept for binary compatibility.
 * @param {Collection} collection
 * @param {*} wrapper
 * @class
 * @extends WrappingTemplateModel
 */
export class SimpleCollection extends WrappingTemplateModel implements TemplateCollectionModel {
    /*private*/ iteratorOwned : boolean;

    /*private*/ __iterator : any;

    /*private*/ iterable : Iterable;

    public constructor(collection? : any, wrapper? : any) {
        if(((collection != null && (collection instanceof Array)) || collection === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let iterable : any = <Iterable><any>collection;
                super(wrapper);
                if(this.iteratorOwned===undefined) this.iteratorOwned = false;
                if(this.__iterator===undefined) this.__iterator = null;
                if(this.iterable===undefined) this.iterable = null;
                if(this.iteratorOwned===undefined) this.iteratorOwned = false;
                if(this.__iterator===undefined) this.__iterator = null;
                if(this.iterable===undefined) this.iterable = null;
                (() => {
                    this.iterable = iterable;
                    this.__iterator = null;
                })();
            }
        } else if(((collection != null && (collection instanceof Object)) || collection === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let iterator : any = __args[0];
            super(wrapper);
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            (() => {
                this.__iterator = iterator;
                this.iterable = null;
            })();
        } else if(((collection != null && (collection["__interfaces"] != null && collection["__interfaces"].indexOf("java.lang.Iterable") >= 0 || collection.constructor != null && collection.constructor["__interfaces"] != null && collection.constructor["__interfaces"].indexOf("java.lang.Iterable") >= 0)) || collection === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let iterable : any = __args[0];
            super(wrapper);
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            (() => {
                this.iterable = iterable;
                this.__iterator = null;
            })();
        } else if(((collection != null && (collection instanceof Object)) || collection === null) && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let iterator : any = __args[0];
            super();
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            (() => {
                this.__iterator = iterator;
                this.iterable = null;
            })();
        } else if(((collection != null && (collection instanceof Array)) || collection === null) && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let iterable : any = <Iterable><any>collection;
                super();
                if(this.iteratorOwned===undefined) this.iteratorOwned = false;
                if(this.__iterator===undefined) this.__iterator = null;
                if(this.iterable===undefined) this.iterable = null;
                if(this.iteratorOwned===undefined) this.iteratorOwned = false;
                if(this.__iterator===undefined) this.__iterator = null;
                if(this.iterable===undefined) this.iterable = null;
                (() => {
                    this.iterable = iterable;
                    this.__iterator = null;
                })();
            }
        } else if(((collection != null && (collection["__interfaces"] != null && collection["__interfaces"].indexOf("java.lang.Iterable") >= 0 || collection.constructor != null && collection.constructor["__interfaces"] != null && collection.constructor["__interfaces"].indexOf("java.lang.Iterable") >= 0)) || collection === null) && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let iterable : any = __args[0];
            super();
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            if(this.iteratorOwned===undefined) this.iteratorOwned = false;
            if(this.__iterator===undefined) this.__iterator = null;
            if(this.iterable===undefined) this.iterable = null;
            (() => {
                this.iterable = iterable;
                this.__iterator = null;
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * Retrieves a template model iterator that is used to iterate over the elements in this collection.
     * 
     * <p>When you wrap an <tt>Iterator</tt> and you get <tt>TemplateModelIterator</tt> for multiple times,
     * only on of the returned <tt>TemplateModelIterator</tt> instances can be really used. When you have called a
     * method of a <tt>TemplateModelIterator</tt> instance, all other instance will throw a
     * <tt>TemplateModelException</tt> when you try to call their methods, since the wrapped <tt>Iterator</tt>
     * can't return the first element anymore.
     * @return {*}
     */
    public iterator() : TemplateModelIterator {
        return this.__iterator != null?new SimpleCollection.SimpleTemplateModelIterator(this, this.__iterator, false):new SimpleCollection.SimpleTemplateModelIterator(this, this.iterable.iterator(), true);
    }
}
SimpleCollection["__class"] = "freemarker.template.SimpleCollection";
SimpleCollection["__interfaces"] = ["freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModel","java.io.Serializable"];



export namespace SimpleCollection {

    /**
     * Wraps an {link Iterator}; not thread-safe. The encapsulated {link Iterator} may be accessible from multiple
     * threads (as multiple {link SimpleTemplateModelIterator} instance can wrap the same {link Iterator} instance),
     * but if the {link Iterator} was marked in the constructor as shared, the first thread which uses the
     * {link Iterator} will monopolize that.
     * @class
     */
    export class SimpleTemplateModelIterator implements TemplateModelIterator {
        public __parent: any;
        iterator : any;

        iteratorOwnedByMe : boolean;

        constructor(__parent: any, iterator : any, iteratorOwnedByMe : boolean) {
            this.__parent = __parent;
            if(this.iterator===undefined) this.iterator = null;
            if(this.iteratorOwnedByMe===undefined) this.iteratorOwnedByMe = false;
            this.iterator = iterator;
            this.iteratorOwnedByMe = iteratorOwnedByMe;
        }

        public next() : TemplateModel {
            if(!this.iteratorOwnedByMe) {
                {
                    this.checkIteratorOwned();
                    this.__parent.iteratorOwned = true;
                    this.iteratorOwnedByMe = true;
                };
            }
            if(!this.iterator.hasNext()) {
                throw new TemplateModelException("The collection has no more items.");
            }
            let value : any = this.iterator.next();
            return (value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0))?<TemplateModel><any>value:this.__parent.wrap(value);
        }

        public hasNext() : boolean {
            if(!this.iteratorOwnedByMe) {
                {
                    this.checkIteratorOwned();
                };
            }
            return this.iterator.hasNext();
        }

        checkIteratorOwned() {
            if(this.__parent.iteratorOwned) {
                throw new TemplateModelException("This collection value wraps a java.util.Iterator, thus it can be listed only once.");
            }
        }
    }
    SimpleTemplateModelIterator["__class"] = "freemarker.template.SimpleCollection.SimpleTemplateModelIterator";
    SimpleTemplateModelIterator["__interfaces"] = ["freemarker.template.TemplateModelIterator"];


}



var __Function = Function;
