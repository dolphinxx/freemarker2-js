/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateElement } from './TemplateElement';
import { TemplateElements } from './TemplateElements';
import { Environment } from './Environment';
import { ParameterRole } from './ParameterRole';

/**
 * An #autoEsc element
 * @extends TemplateElement
 * @class
 */
export class AutoEscBlock extends TemplateElement {
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
     * @return {String}
     */
    dump(canonical : boolean) : string {
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
        return "#autoesc";
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
AutoEscBlock["__class"] = "freemarker.core.AutoEscBlock";



