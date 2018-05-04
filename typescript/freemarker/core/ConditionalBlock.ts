/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateElement } from './TemplateElement';
import { Expression } from './Expression';
import { TemplateElements } from './TemplateElements';
import { Environment } from './Environment';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { IfBlock } from './IfBlock';
import { BugException } from './BugException';
import { ParameterRole } from './ParameterRole';

/**
 * An element that represents a conditionally executed block: #if, #elseif or #elseif. Note that when an #if has
 * related #elseif-s or #else, an {link IfBlock} parent must be used. For a lonely #if, no such parent is needed.
 * @extends TemplateElement
 * @class
 */
export class ConditionalBlock extends TemplateElement {
    static TYPE_IF : number = 0;

    static TYPE_ELSE : number = 1;

    static TYPE_ELSE_IF : number = 2;

    condition : Expression;

    /*private*/ type : number;

    constructor(condition : Expression, children : TemplateElements, type : number) {
        super();
        if(this.condition===undefined) this.condition = null;
        if(this.type===undefined) this.type = 0;
        this.condition = condition;
        this.setChildren(children);
        this.type = type;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        if(this.condition == null || this.condition.evalToBoolean$freemarker_core_Environment(env)) {
            return this.getChildBuffer();
        }
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        let buf : StringBuilder = new StringBuilder("");
        if(canonical) buf.append('<');
        buf.append(this.getNodeTypeSymbol());
        if(this.condition != null) {
            buf.append(' ');
            buf.append(this.condition.getCanonicalForm());
        }
        if(canonical) {
            buf.append(">");
            buf.append(this.getChildrenCanonicalForm());
            if(!(this.getParentElement() != null && this.getParentElement() instanceof <any>IfBlock)) {
                buf.append("</#if>");
            }
        }
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        if(this.type === ConditionalBlock.TYPE_ELSE) {
            return "#else";
        } else if(this.type === ConditionalBlock.TYPE_IF) {
            return "#if";
        } else if(this.type === ConditionalBlock.TYPE_ELSE_IF) {
            return "#elseif";
        } else {
            throw new BugException("Unknown type");
        }
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
            return this.type;
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
ConditionalBlock["__class"] = "freemarker.core.ConditionalBlock";



