/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateElement } from './TemplateElement';
import { TemplateElements } from './TemplateElements';
import { Environment } from './Environment';
import { IteratorBlock } from './IteratorBlock';
import { _MiscTemplateException } from './_MiscTemplateException';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { ParameterRole } from './ParameterRole';

/**
 * A #sep element.
 * @param {TemplateElements} children
 * @class
 * @extends TemplateElement
 */
export class Sep extends TemplateElement {
    public constructor(children : TemplateElements) {
        super();
        this.setChildren(children);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let iterCtx : IteratorBlock.IterationContext = IteratorBlock.findEnclosingIterationContext(env, null);
        if(iterCtx == null) {
            throw new _MiscTemplateException(env, this.getNodeTypeSymbol(), " without iteration in context");
        }
        if(iterCtx.hasNext()) {
            return this.getChildBuffer();
        }
        return null;
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
        if(canonical) {
            sb.append('>');
            sb.append(this.getChildrenCanonicalForm());
            sb.append("</");
            sb.append(this.getNodeTypeSymbol());
            sb.append('>');
        }
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#sep";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 0;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
Sep["__class"] = "freemarker.core.Sep";



var __Function = Function;
