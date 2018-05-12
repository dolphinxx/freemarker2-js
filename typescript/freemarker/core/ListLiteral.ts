/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleSequence} from '../template/SimpleSequence';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {Expression} from './Expression';
import {Environment} from './Environment';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {StringLiteral} from './StringLiteral';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_DelayedJQuote} from './_DelayedJQuote';
import {_DelayedGetMessage} from './_DelayedGetMessage';
import {ParameterRole} from './ParameterRole';

export class ListLiteral extends Expression {
    items : Array<any>;

    constructor(items : Array<any>) {
        super();
        if(this.items===undefined) this.items = null;
        this.items = items;
        // items.trimToSize();
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let list : SimpleSequence = new SimpleSequence(/* size */(<number>this.items.length));
        for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.items); it.hasNext(); ) {
            let exp : Expression = <Expression>it.next();
            let tm : TemplateModel = exp.eval(env);
            if(env == null || !env.isClassicCompatible()) {
                exp.assertNonNull(tm, env);
            }
            list.add$java_lang_Object(tm);
        }
        return list;
    }

    /**
     * For {link TemplateMethodModel} calls, but not for {link TemplateMethodModelEx}-es, returns the list of
     * arguments as {link String}-s.
     * @param {Environment} env
     * @return {List}
     */
    getValueList(env : /*Environment*/any) : Array<any> {
        let size : number = /* size */(<number>this.items.length);
        switch((size)) {
        case 0:
            {
                return []
            }
            case 1:
            {
                return /* singletonList */[(<Expression>/* get */this.items[0]).evalAndCoerceToPlainText$freemarker_core_Environment(env)];
            }
            default:
            {
                let result : Array<any> = <any>([]);
                for(let iterator : any = /* listIterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.items); iterator.hasNext(); ) {
                    let exp : Expression = <Expression>iterator.next();
                    /* add */(result.push(exp.evalAndCoerceToPlainText$freemarker_core_Environment(env))>0);
                }
                return result;
            }
        }
    }

    /**
     * For {link TemplateMethodModelEx} calls, returns the list of arguments as {link TemplateModel}-s.
     * @param {Environment} env
     * @return {List}
     */
    getModelList(env : /*Environment*/any) : Array<any> {
        let size : number = /* size */(<number>this.items.length);
        switch((size)) {
        case 0:
            {
                return [];
            }
            case 1:
            {
                return /* singletonList */[(<Expression>/* get */this.items[0]).eval(env)];
            }
            default:
            {
                let result : Array<any> = <any>([]);
                for(let iterator : any = /* listIterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.items); iterator.hasNext(); ) {
                    let exp : Expression = <Expression>iterator.next();
                    /* add */(result.push(exp.eval(env))>0);
                }
                return result;
            }
        }
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        let buf : StringBuilder = new StringBuilder("[");
        let size : number = /* size */(<number>this.items.length);
        for(let i : number = 0; i < size; i++) {
            let value : Expression = <Expression>/* get */this.items[i];
            buf.append(value.getCanonicalForm());
            if(i !== size - 1) {
                buf.append(", ");
            }
        }
        buf.append("]");
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "[...]";
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        if(this.constantValue != null) {
            return true;
        }
        for(let i : number = 0; i < /* size */(<number>this.items.length); i++) {
            let exp : Expression = <Expression>/* get */this.items[i];
            if(!exp.isLiteral()) {
                return false;
            }
        }
        return true;
    }

    evaluateStringsToNamespaces(env : /*Environment*/any) : TemplateSequenceModel {
        let val : TemplateSequenceModel = <TemplateSequenceModel><any>this.eval(env);
        let result : SimpleSequence = new SimpleSequence(val.size());
        for(let i : number = 0; i < /* size */(<number>this.items.length); i++) {
            let itemExpr : any = /* get */this.items[i];
            if(itemExpr != null && itemExpr instanceof <any>StringLiteral) {
                let s : string = (<StringLiteral>itemExpr).getAsString();
                try {
                    let ns : Environment.Namespace = env.importLib$java_lang_String$java_lang_String(s, null);
                    result.add$java_lang_Object(ns);
                } catch(ioe) {
                    throw new _MiscTemplateException((<StringLiteral>itemExpr), "Couldn\'t import library ", new _DelayedJQuote(s), ": ", new _DelayedGetMessage(ioe));
                }
            } else {
                result.add$java_lang_Object(val['get$int'](i));
            }
        }
        return result;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        let clonedValues : Array<any> = <Array<any>>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this.items);
        for(let iter : any = /* listIterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(clonedValues); iter.hasNext(); ) {
            iter.set((<Expression>iter.next()).deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
        }
        return new ListLiteral(clonedValues);
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return this.items != null?/* size */(<number>this.items.length):0;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        this.checkIndex(idx);
        return /* get */this.items[idx];
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        this.checkIndex(idx);
        return ParameterRole.ITEM_VALUE_$LI$();
    }

    /*private*/ checkIndex(idx : number) {
        if(this.items == null || idx >= /* size */(<number>this.items.length)) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
}
ListLiteral["__class"] = "freemarker.core.ListLiteral";




