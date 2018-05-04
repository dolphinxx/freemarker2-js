/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateHashModel } from '../../template/TemplateHashModel';
import { TemplateHashModelEx } from '../../template/TemplateHashModelEx';
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelAdapter } from '../../template/TemplateModelAdapter';
import { TemplateModelException } from '../../template/TemplateModelException';
import { TemplateModelIterator } from '../../template/TemplateModelIterator';
import { UndeclaredThrowableException } from '../../template/utility/UndeclaredThrowableException';
import { BeansWrapper } from './BeansWrapper';
import { TemplateCollectionModel } from '../../template/TemplateCollectionModel';

/**
 * 
 * @extends AbstractMap
 * @class
 */
export class HashAdapter implements TemplateModelAdapter {
    /*private*/ wrapper : BeansWrapper;

    /*private*/ model : TemplateHashModel;

    /*private*/ __entrySet : Array<any>;

    constructor(model : TemplateHashModel, wrapper : BeansWrapper) {
        if(this.wrapper===undefined) this.wrapper = null;
        if(this.model===undefined) this.model = null;
        if(this.__entrySet===undefined) this.__entrySet = null;
        this.model = model;
        this.wrapper = wrapper;
    }

    public getTemplateModel() : TemplateModel {
        return this.model;
    }

    /**
     * 
     * @return {boolean}
     */
    public isEmpty() : boolean {
        try {
            return this.model.isEmpty();
        } catch(e) {
            throw new UndeclaredThrowableException(e);
        };
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        try {
            return this.getModelEx().size();
        } catch(e) {
            throw new UndeclaredThrowableException(e);
        };
    }

    /**
     * 
     * @param {Object} key
     * @return {Object}
     */
    public get(key : any) : any {
        try {
            return this.wrapper.unwrap$freemarker_template_TemplateModel(this.model['get$java_lang_String'](/* valueOf */new String(key).toString()));
        } catch(e) {
            throw new UndeclaredThrowableException(e);
        };
    }

    /**
     * 
     * @param {Object} key
     * @return {boolean}
     */
    public containsKey(key : any) : boolean {
        if(this.get(key) != null) {
            return true;
        }
        return /* containsKey */super.has(key);
    }

    /**
     * 
     * @return {Set}
     */
    public entrySet() : Array<any> {
        if(this.__entrySet != null) {
            return this.__entrySet;
        }
        return this.__entrySet = new HashAdapter.HashAdapter$0(this);
    }

    /*private*/ getModelEx() : TemplateHashModelEx {
        if(this.model != null && (this.model["__interfaces"] != null && this.model["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || this.model.constructor != null && this.model.constructor["__interfaces"] != null && this.model.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0)) {
            return (<TemplateHashModelEx><any>this.model);
        }
        throw Object.defineProperty(new Error("Operation supported only on TemplateHashModelEx. " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.model.constructor)) + " does not implement it though."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
HashAdapter["__class"] = "freemarker.ext.beans.HashAdapter";
HashAdapter["__interfaces"] = ["freemarker.template.TemplateModelAdapter","java.util.Map"];



export namespace HashAdapter {

    export class HashAdapter$0 {
        public __parent: any;
        /**
         * 
         * @return {Iterator}
         */
        public iterator() : any {
            let i : TemplateModelIterator;
            try {
                i = this.__parent.getModelEx().keys().iterator();
            } catch(e) {
                throw new UndeclaredThrowableException(e);
            };
            return new HashAdapter$0.HashAdapter$0$0(this, i);
        }

        /**
         * 
         * @return {number}
         */
        public size() : number {
            try {
                return this.__parent.getModelEx().size();
            } catch(e) {
                throw new UndeclaredThrowableException(e);
            };
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    HashAdapter$0["__interfaces"] = ["java.util.Collection","java.util.Set","java.lang.Iterable"];



    export namespace HashAdapter$0 {

        export class HashAdapter$0$0 {
            public __parent: any;
            public hasNext() : boolean {
                try {
                    return this.i.hasNext();
                } catch(e) {
                    throw new UndeclaredThrowableException(e);
                };
            }

            public next() : any {
                let key : any;
                try {
                    key = this.__parent.__parent.wrapper.unwrap$freemarker_template_TemplateModel(this.i.next());
                } catch(e) {
                    throw new UndeclaredThrowableException(e);
                };
                return new HashAdapter$0$0.HashAdapter$0$0$0(this, key);
            }

            public remove() {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }

            constructor(__parent: any, private i: any) {
                this.__parent = __parent;
            }
        }
        HashAdapter$0$0["__interfaces"] = ["java.util.Iterator"];



        export namespace HashAdapter$0$0 {

            export class HashAdapter$0$0$0 {
                public __parent: any;
                public getKey() : any {
                    return this.key;
                }

                public getValue() : any {
                    return this.__parent.__parent.__parent.get(this.key);
                }

                public setValue(value : any) : any {
                    throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                }

                /**
                 * 
                 * @param {Object} o
                 * @return {boolean}
                 */
                public equals(o : any) : boolean {
                    if(!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0))) return false;
                    let e : Entry = <Entry><any>o;
                    let k1 : any = this.getKey();
                    let k2 : any = e.getKey();
                    if(k1 === k2 || (k1 != null && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(k1,k2)))) {
                        let v1 : any = this.getValue();
                        let v2 : any = e.getValue();
                        return v1 === v2 || (v1 != null && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(v1,v2)));
                    }
                    return false;
                }

                /**
                 * 
                 * @return {number}
                 */
                public hashCode() : number {
                    let value : any = this.getValue();
                    return (this.key == null?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.key))) ^ (value == null?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(value)));
                }

                constructor(__parent: any, private key: any) {
                    this.__parent = __parent;
                }
            }
            HashAdapter$0$0$0["__interfaces"] = ["java.util.Map.Entry"];


        }

    }

}



var __Function = Function;
