/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * Represents a case in a switch statement.
 * @extends TemplateElement
 * @class
 */
export class Case extends TemplateElement {
    static TYPE_CASE : number = 0;

    static TYPE_DEFAULT : number = 1;

    condition : Expression;

    constructor(matchingValue : Expression, children : TemplateElements) {
        super();
        if(this.condition===undefined) this.condition = null;
        this.condition = matchingValue;
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
     * @return {String}
     */
    dump(canonical : boolean) : string {
        let sb : StringBuilder = new StringBuilder("");
        if(canonical) sb.append('<');
        sb.append(this.getNodeTypeSymbol());
        if(this.condition != null) {
            sb.append(' ');
            sb.append(this.condition.getCanonicalForm());
        }
        if(canonical) {
            sb.append('>');
            sb.append(this.getChildrenCanonicalForm());
        }
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.condition != null?"#case":"#default";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 2;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.condition;
        case 1:
            return this.condition != null?Case.TYPE_CASE:Case.TYPE_DEFAULT;
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        switch((idx)) {
        case 0:
            return ParameterRole.CONDITION_$LI$();
        case 1:
            return ParameterRole.AST_NODE_SUBTYPE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
Case["__class"] = "freemarker.core.Case";



