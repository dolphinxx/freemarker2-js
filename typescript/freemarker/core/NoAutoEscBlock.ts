/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateElement } from './TemplateElement';
import { TemplateElements } from './TemplateElements';
import { Environment } from './Environment';
import { ParameterRole } from './ParameterRole';

/**
 * An #noAutoEsc element
 * @extends TemplateElement
 * @class
 */
export class NoAutoEscBlock extends TemplateElement {
    constructor(children : TemplateElements) {
        super();
        this.setChildren(children);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        return this.getChildBuffer();
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
        if(canonical) {
            return "<" + this.getNodeTypeSymbol() + "\">" + this.getChildrenCanonicalForm() + "</" + this.getNodeTypeSymbol() + ">";
        } else {
            return this.getNodeTypeSymbol();
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#noautoesc";
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

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {boolean}
     */
    isIgnorable(stripWhitespace : boolean) : boolean {
        return this.getChildCount() === 0;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
NoAutoEscBlock["__class"] = "freemarker.core.NoAutoEscBlock";



var __Function = Function;
