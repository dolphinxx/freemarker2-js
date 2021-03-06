/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {Environment} from './Environment';
import {BreakOrContinueException} from './BreakOrContinueException';
import {ParameterRole} from './ParameterRole';

/**
 * Represents a &lt;break&gt; instruction to break out of a loop.
 * @extends TemplateElement
 * @class
 */
export class ContinueInstruction extends TemplateElement {
    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        throw BreakOrContinueException.CONTINUE_INSTANCE_$LI$();
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        return canonical?"<" + this.getNodeTypeSymbol() + "/>":this.getNodeTypeSymbol();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#continue";
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
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
ContinueInstruction["__class"] = "freemarker.core.ContinueInstruction";



