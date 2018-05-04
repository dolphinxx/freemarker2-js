/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { KeyValuePair } from '../template/KeyValuePair';
import { KeyValuePairIterator } from '../template/KeyValuePairIterator';
import { SimpleSequence } from '../template/SimpleSequence';
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateHashModelEx2 } from '../template/TemplateHashModelEx2';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateModelIterator } from '../template/TemplateModelIterator';
import { _TemplateAPI } from '../template/_TemplateAPI';
import { Expression } from './Expression';
import { Environment } from './Environment';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { CollectionAndSequence } from './CollectionAndSequence';
import { ParameterRole } from './ParameterRole';

export class HashLiteral extends Expression {
    /*private*/ keys : Array<any>;

    /*private*/ values : Array<any>;

    /*private*/ size : number;

    constructor(keys : Array<any>, values : Array<any>) {
        super();
        if(this.keys===undefined) this.keys = null;
        if(this.values===undefined) this.values = null;
        if(this.size===undefined) this.size = 0;
        this.keys = keys;
        this.values = values;
        this.size = /* size */(<number>keys.length);
        keys.trimToSize();
        values.trimToSize();
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        return new HashLiteral.SequenceHash(this, env);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        let buf : StringBuilder = new StringBuilder("{");
        for(let i : number = 0; i < this.size; i++) {
            let key : Expression = <Expression>/* get */this.keys[i];
            let value : Expression = <Expression>/* get */this.values[i];
            buf.append(key.getCanonicalForm());
            buf.append(": ");
            buf.append(value.getCanonicalForm());
            if(i !== this.size - 1) {
                buf.append(", ");
            }
        };
        buf.append("}");
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "{...}";
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        if(this.constantValue != null) {
            return true;
        }
        for(let i : number = 0; i < this.size; i++) {
            let key : Expression = <Expression>/* get */this.keys[i];
            let value : Expression = <Expression>/* get */this.values[i];
            if(!key.isLiteral() || !value.isLiteral()) {
                return false;
            }
        };
        return true;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        let clonedKeys : Array<any> = <Array<any>>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this.keys);
        for(let iter : any = /* listIterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(clonedKeys); iter.hasNext(); ) {
            iter.set((<Expression>iter.next()).deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
        };
        let clonedValues : Array<any> = <Array<any>>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this.values);
        for(let iter : any = /* listIterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(clonedValues); iter.hasNext(); ) {
            iter.set((<Expression>iter.next()).deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
        };
        return new HashLiteral(clonedKeys, clonedValues);
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return this.size * 2;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        this.checkIndex(idx);
        return idx % 2 === 0?/* get */this.keys[(idx / 2|0)]:/* get */this.values[(idx / 2|0)];
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        this.checkIndex(idx);
        return idx % 2 === 0?ParameterRole.ITEM_KEY_$LI$():ParameterRole.ITEM_VALUE_$LI$();
    }

    checkIndex(idx : number) {
        if(idx >= this.size * 2) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
}
HashLiteral["__class"] = "freemarker.core.HashLiteral";


export namespace HashLiteral {

    export class SequenceHash implements TemplateHashModelEx2 {
        public __parent: any;
        map : Map<any, any>;

        keyCollection : TemplateCollectionModel;

        valueCollection : TemplateCollectionModel;

        constructor(__parent: any, env : Environment) {
            this.__parent = __parent;
            if(this.map===undefined) this.map = null;
            if(this.keyCollection===undefined) this.keyCollection = null;
            if(this.valueCollection===undefined) this.valueCollection = null;
            if(_TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_core_TemplateObject(__parent) >= _TemplateAPI.VERSION_INT_2_3_21_$LI$()) {
                this.map = <any>(new Map<any, any>());
                for(let i : number = 0; i < __parent.size; i++) {
                    let keyExp : Expression = <Expression>/* get */__parent.keys[i];
                    let valExp : Expression = <Expression>/* get */__parent.values[i];
                    let key : string = keyExp.evalAndCoerceToPlainText$freemarker_core_Environment(env);
                    let value : TemplateModel = valExp.eval(env);
                    if(env == null || !env.isClassicCompatible()) {
                        valExp.assertNonNull(value, env);
                    }
                    /* put */this.map.set(key, value);
                };
            } else {
                this.map = <any>(new Map<any, any>());
                let keyList : Array<any> = <any>([]);
                let valueList : Array<any> = <any>([]);
                for(let i : number = 0; i < __parent.size; i++) {
                    let keyExp : Expression = <Expression>/* get */__parent.keys[i];
                    let valExp : Expression = <Expression>/* get */__parent.values[i];
                    let key : string = keyExp.evalAndCoerceToPlainText$freemarker_core_Environment(env);
                    let value : TemplateModel = valExp.eval(env);
                    if(env == null || !env.isClassicCompatible()) {
                        valExp.assertNonNull(value, env);
                    }
                    /* put */this.map.set(key, value);
                    /* add */(keyList.push(key)>0);
                    /* add */(valueList.push(value)>0);
                };
                this.keyCollection = new CollectionAndSequence(new SimpleSequence(keyList));
                this.valueCollection = new CollectionAndSequence(new SimpleSequence(valueList));
            }
        }

        public size() : number {
            return this.__parent.size;
        }

        public keys() : TemplateCollectionModel {
            if(this.keyCollection == null) {
                this.keyCollection = new CollectionAndSequence(new SimpleSequence(/* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.map)));
            }
            return this.keyCollection;
        }

        public values() : TemplateCollectionModel {
            if(this.valueCollection == null) {
                this.valueCollection = new CollectionAndSequence(new SimpleSequence(/* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>this.map)));
            }
            return this.valueCollection;
        }

        public get$java_lang_String(key : string) : TemplateModel {
            return <TemplateModel><any>/* get */this.map.get(key);
        }

        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>this.get$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        public isEmpty() : boolean {
            return this.__parent.size === 0;
        }

        /**
         * 
         * @return {String}
         */
        public toString() : string {
            return this.__parent.getCanonicalForm();
        }

        public keyValuePairIterator() : KeyValuePairIterator {
            return new SequenceHash.SequenceHash$0(this);
        }
    }
    SequenceHash["__class"] = "freemarker.core.HashLiteral.SequenceHash";
    SequenceHash["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel"];



    export namespace SequenceHash {

        export class SequenceHash$0 implements KeyValuePairIterator {
            public __parent: any;
            keyIterator : TemplateModelIterator;

            valueIterator : TemplateModelIterator;

            public hasNext() : boolean {
                return this.keyIterator.hasNext();
            }

            public next() : KeyValuePair {
                return new SequenceHash$0.SequenceHash$0$0(this);
            }

            constructor(__parent: any) {
                this.__parent = __parent;
                this.keyIterator = this.__parent.keys().iterator();
                this.valueIterator = this.__parent.values().iterator();
            }
        }
        SequenceHash$0["__interfaces"] = ["freemarker.template.KeyValuePairIterator"];



        export namespace SequenceHash$0 {

            export class SequenceHash$0$0 implements KeyValuePair {
                public __parent: any;
                key : TemplateModel;

                value : TemplateModel;

                public getKey() : TemplateModel {
                    return this.key;
                }

                public getValue() : TemplateModel {
                    return this.value;
                }

                constructor(__parent: any) {
                    this.__parent = __parent;
                    this.key = this.__parent.keyIterator.next();
                    this.value = this.__parent.valueIterator.next();
                }
            }
            SequenceHash$0$0["__interfaces"] = ["freemarker.template.KeyValuePair"];


        }

    }

}



var __Function = Function;
