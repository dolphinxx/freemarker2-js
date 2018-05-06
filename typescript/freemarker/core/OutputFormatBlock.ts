/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {ParameterRole} from './ParameterRole';

/**
 * An #outputFormat element
 * @extends TemplateElement
 * @class
 */
export class OutputFormatBlock extends TemplateElement {
    /*private*/ paramExp : Expression;

    constructor(children : TemplateElements, paramExp : Expression) {
        super();
        if(this.paramExp===undefined) this.paramExp = null;
        this.paramExp = paramExp;
        this.setChildren(children);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
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
            return "<" + this.getNodeTypeSymbol() + " \"" + this.paramExp.getCanonicalForm() + "\">" + this.getChildrenCanonicalForm() + "</" + this.getNodeTypeSymbol() + ">";
        } else {
            return this.getNodeTypeSymbol();
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#outputformat";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx === 0) return this.paramExp; else throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx === 0) return ParameterRole.VALUE_$LI$(); else throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
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
OutputFormatBlock["__class"] = "freemarker.core.OutputFormatBlock";




