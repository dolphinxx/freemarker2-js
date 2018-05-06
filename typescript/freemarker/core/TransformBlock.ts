/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {EmptyMap} from '../template/EmptyMap';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateTransformModel} from '../template/TemplateTransformModel';
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_MessageUtil} from './_MessageUtil';
import {ParameterRole} from './ParameterRole';
import {MiscUtil} from './MiscUtil';

/**
 * A template element that contains a nested block
 * that is transformed according to an instance of T
 * TemplateTransformModel
 * @extends TemplateElement
 * @class
 */
export class TransformBlock extends TemplateElement {
    /*private*/ transformExpression : Expression;

    namedArgs : Map<any, any>;

    /*private*/ sortedNamedArgsCache : SoftReference;

    constructor(transformExpression : Expression, namedArgs : Map<any, any>, children : TemplateElements) {
        super();
        if(this.transformExpression===undefined) this.transformExpression = null;
        if(this.namedArgs===undefined) this.namedArgs = null;
        if(this.sortedNamedArgsCache===undefined) this.sortedNamedArgsCache = null;
        this.transformExpression = transformExpression;
        this.namedArgs = namedArgs;
        this.setChildren(children);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let ttm : TemplateTransformModel = env.getTransform(this.transformExpression);
        if(ttm != null) {
            let args : Map<any, any>;
            if(this.namedArgs != null && !/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.namedArgs)) {
                args = <any>(new Map<any, any>());
                for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>this.namedArgs)); it.hasNext(); ) {
                    let entry : Entry = <Entry><any>it.next();
                    let key : string = <string>entry.getKey();
                    let valueExp : Expression = <Expression>entry.getValue();
                    let value : TemplateModel = valueExp.eval(env);
                    /* put */args.set(key, value);
                }
            } else {
                args = EmptyMap.instance_$LI$();
            }
            env.visitAndTransform(this.getChildBuffer(), ttm, args);
        } else {
            let tm : TemplateModel = this.transformExpression.eval(env);
            throw new UnexpectedTypeException(this.transformExpression, tm, "transform", ["freemarker.template.TemplateTransformModel"], env);
        }
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @param {boolean} inStringLiteral
     * @return {String}
     */
    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    dump$boolean(canonical : boolean) : string {
        let sb : StringBuilder = new StringBuilder("");
        if(canonical) sb.append('<');
        sb.append(this.getNodeTypeSymbol());
        sb.append(' ');
        sb.append(this.transformExpression);
        if(this.namedArgs != null) {
            for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.getSortedNamedArgs()); it.hasNext(); ) {
                let entry : Entry = <Entry><any>it.next();
                sb.append(' ');
                sb.append(entry.getKey());
                sb.append('=');
                _MessageUtil.appendExpressionAsUntearable(sb, <Expression>entry.getValue());
            }
        }
        if(canonical) {
            sb.append(">");
            sb.append(this.getChildrenCanonicalForm());
            sb.append("</").append(this.getNodeTypeSymbol()).append('>');
        }
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#transform";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1 + (this.namedArgs != null?/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.namedArgs) * 2:0);
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx === 0) {
            return this.transformExpression;
        } else if(this.namedArgs != null && idx - 1 < /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.namedArgs) * 2) {
            let namedArg : Entry = <Entry><any>/* get */this.getSortedNamedArgs()[((idx - 1) / 2|0)];
            return (idx - 1) % 2 === 0?namedArg.getKey():namedArg.getValue();
        } else {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx === 0) {
            return ParameterRole.CALLEE_$LI$();
        } else if(idx - 1 < /* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.namedArgs) * 2) {
            return (idx - 1) % 2 === 0?ParameterRole.ARGUMENT_NAME_$LI$():ParameterRole.ARGUMENT_VALUE_$LI$();
        } else {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * Returns the named args by source-code order; it's not meant to be used during template execution, too slow for
     * that!
     * @return {List}
     * @private
     */
    /*private*/ getSortedNamedArgs() : Array<any> {
        let ref : Reference = this.sortedNamedArgsCache;
        if(ref != null) {
            let res : Array<any> = <Array<any>><any>ref.get();
            if(res != null) return res;
        }
        let res : Array<any> = MiscUtil.sortMapOfExpressions(this.namedArgs);
        this.sortedNamedArgsCache = <any>(new SoftReference(res));
        return res;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }

    /**
     * 
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
        return true;
    }
}
TransformBlock["__class"] = "freemarker.core.TransformBlock";




