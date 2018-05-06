/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {WrappingTemplateModel} from './WrappingTemplateModel';
import {TemplateSequenceModel} from './TemplateSequenceModel';
import {TemplateModelException} from './TemplateModelException';
import {TemplateModelIterator} from './TemplateModelIterator';
import {TemplateModel} from './TemplateModel';
import {TemplateBooleanModel} from './TemplateBooleanModel';

/**
 * Constructs an empty simple sequence with preallocated capacity.
 * 
 * @param {*} wrapper See the similar parameter of {link SimpleSequence#SimpleSequence(ObjectWrapper)}.
 * @since 2.3.21
 * @param {number} capacity
 * @class
 * @extends WrappingTemplateModel
 */
export class SimpleSequence extends WrappingTemplateModel implements TemplateSequenceModel {
    /**
     * The {link List} that stored the elements of this sequence. It migth contains both {link TemplateModel} elements
     * and non-{link TemplateModel} elements.
     */
    list : Array<any>;

    /*private*/ unwrappedList : Array<any>;

    public constructor(collection? : any, wrapper? : any) {
        if(((collection != null && (collection instanceof Array)) || collection === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(wrapper);
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            (() => {
                this.list = <any>(collection.slice(0));
            })();
        } else if(((typeof collection === 'number') || collection === null) && ((wrapper != null && (wrapper["__interfaces"] != null && wrapper["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || wrapper.constructor != null && wrapper.constructor["__interfaces"] != null && wrapper.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || wrapper === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let capacity : any = __args[0];
            super(wrapper);
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            (() => {
                this.list = <any>([]);
            })();
        } else if(((collection != null && (collection instanceof Array)) || collection === null) && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let wrapper : any = null;
                super(wrapper);
                if(this.list===undefined) this.list = null;
                if(this.unwrappedList===undefined) this.unwrappedList = null;
                if(this.list===undefined) this.list = null;
                if(this.unwrappedList===undefined) this.unwrappedList = null;
                (() => {
                    this.list = <any>(collection.slice(0));
                })();
            }
        } else if(((collection != null && (collection["__interfaces"] != null && collection["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || collection.constructor != null && collection.constructor["__interfaces"] != null && collection.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) || collection === null) && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let tcm : any = __args[0];
            super();
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            (() => {
                let alist : Array<any> = <any>([]);
                for(let it : TemplateModelIterator = tcm.iterator(); it.hasNext(); ) {
                    /* add */(alist.push(it.next())>0);
                }
                this.list = alist;
            })();
        } else if(((collection != null && (collection["__interfaces"] != null && collection["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0 || collection.constructor != null && collection.constructor["__interfaces"] != null && collection.constructor["__interfaces"].indexOf("freemarker.template.ObjectWrapper") >= 0)) || collection === null) && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let wrapper : any = __args[0];
            super(wrapper);
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            (() => {
                this.list = <any>([]);
            })();
        } else if(((typeof collection === 'number') || collection === null) && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let capacity : any = __args[0];
            super();
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            if(this.list===undefined) this.list = null;
            if(this.unwrappedList===undefined) this.unwrappedList = null;
            (() => {
                this.list = <any>([]);
            })();
        } else if(collection === undefined && wrapper === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let wrapper : any = <any>null;
                super(wrapper);
                if(this.list===undefined) this.list = null;
                if(this.unwrappedList===undefined) this.unwrappedList = null;
                if(this.list===undefined) this.list = null;
                if(this.unwrappedList===undefined) this.unwrappedList = null;
                (() => {
                    this.list = <any>([]);
                })();
            }
        } else throw new Error('invalid overload');
    }

    public add$java_lang_Object(obj : any) {
        /* add */(this.list.push(obj)>0);
        this.unwrappedList = null;
    }

    public add$boolean(b : boolean) {
        this.add$java_lang_Object(b?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE);
    }

    /**
     * Adds a boolean value to the end of this sequence. The newly added boolean will be immediately converted into
     * {link TemplateBooleanModel#TRUE} or {link TemplateBooleanModel#FALSE}, without using the {link ObjectWrapper}.
     * 
     * @param {boolean} b The boolean value to be added.
     * @deprecated Use {link #add(Object)} instead, as this bypasses the {link ObjectWrapper}.
     */
    public add(b? : any) : any {
        if(((typeof b === 'boolean') || b === null)) {
            return <any>this.add$boolean(b);
        } else if(((b != null) || b === null)) {
            return <any>this.add$java_lang_Object(b);
        } else throw new Error('invalid overload');
    }

    /**
     * Builds a deep-copy of the underlying list, unwrapping any values that were already converted to
     * {link TemplateModel}-s. When called for the second time (or later), it just reuses the first result, unless the
     * sequence was modified since then.
     * 
     * @deprecated No replacement exists; not a reliable way of getting back the original list elemnts.
     * @return {List}
     */
    public toList() : Array<any> {
        if(this.unwrappedList == null) {
            let listClass : any = (<any>this.list.constructor);
            let result : Array<any> = null;
            try {
                result = <Array<any>><any>/* newInstance */new (listClass)();
            } catch(e) {
                throw new TemplateModelException("Error instantiating an object of type " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(listClass), e);
            }
            let bw : any = (require('../ext/beans/BeansWrapper').BeansWrapper).getDefaultInstance();
            for(let i : number = 0; i < /* size */(<number>this.list.length); i++) {
                let elem : any = /* get */this.list[i];
                if(elem != null && (elem["__interfaces"] != null && elem["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || elem.constructor != null && elem.constructor["__interfaces"] != null && elem.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) {
                    elem = bw.unwrap$freemarker_template_TemplateModel(<TemplateModel><any>elem);
                }
                /* add */(result.push(elem)>0);
            }
            this.unwrappedList = result;
        }
        return this.unwrappedList;
    }

    public get(s? : any) : any {
        if(((typeof s === 'number') || s === null)) {
            return <any>this.get$int(s);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        try {
            let value : any = /* get */this.list[index];
            if(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) {
                return <TemplateModel><any>value;
            }
            let tm : TemplateModel = this.wrap(value);
            /* set */(this.list[index] = tm);
            return tm;
        } catch(e) {
            return null;
        }
    }

    public size() : number {
        return /* size */(<number>this.list.length);
    }

    /**
     * @return {SimpleSequence} a synchronized wrapper for list.
     */
    public synchronizedWrapper() : SimpleSequence {
        return new SimpleSequence.SynchronizedSequence(this);
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return /* toString */('['+this.list.join(', ')+']');
    }
}
SimpleSequence["__class"] = "freemarker.template.SimpleSequence";
SimpleSequence["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];



export namespace SimpleSequence {

    export class SynchronizedSequence extends SimpleSequence {
        public __parent: any;
        /**
         * Adds a boolean value to the end of this sequence. The newly added boolean will be immediately converted into
         * {link TemplateBooleanModel#TRUE} or {link TemplateBooleanModel#FALSE}, without using the {link ObjectWrapper}.
         * 
         * @param {boolean} b The boolean value to be added.
         * @deprecated Use {link #add(Object)} instead, as this bypasses the {link ObjectWrapper}.
         */
        public add(b? : any) : any {
            if(((typeof b === 'boolean') || b === null)) {
                super.add(b);
            } else if(((b != null) || b === null)) {
                return <any>this.add$java_lang_Object(b);
            } else throw new Error('invalid overload');
        }

        public add$java_lang_Object(obj : any) {
            {
                this.add$java_lang_Object(obj);
            }
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(i : number) : TemplateModel {
            {
                return this.get$int(i);
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
         * @return {List}
         */
        public toList() : Array<any> {
            {
                return this.toList();
            }
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
        }
    }
    SynchronizedSequence["__class"] = "freemarker.template.SimpleSequence.SynchronizedSequence";
    SynchronizedSequence["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];


}




