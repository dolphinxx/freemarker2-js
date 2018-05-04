/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateElement } from './TemplateElement';
import { Expression } from './Expression';
import { TemplateElements } from './TemplateElements';
import { Environment } from './Environment';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { _CoreStringUtils } from './_CoreStringUtils';
import { ParameterRole } from './ParameterRole';

/**
 * Representation of the compile-time #escape directive.
 * @extends TemplateElement
 * @class
 */
export class EscapeBlock extends TemplateElement {
    /*private*/ variable : string;

    /*private*/ expr : Expression;

    /*private*/ escapedExpr : Expression;

    constructor(variable : string, expr : Expression, escapedExpr : Expression) {
        super();
        if(this.variable===undefined) this.variable = null;
        if(this.expr===undefined) this.expr = null;
        if(this.escapedExpr===undefined) this.escapedExpr = null;
        this.variable = variable;
        this.expr = expr;
        this.escapedExpr = escapedExpr;
    }

    setContent(children : TemplateElements) {
        this.setChildren(children);
        this.escapedExpr = null;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        return this.getChildBuffer();
    }

    doEscape(expression : Expression) : Expression {
        return this.escapedExpr.deepCloneWithIdentifierReplaced(this.variable, expression, new Expression.ReplacemenetState());
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
        sb.append(this.getNodeTypeSymbol()).append(' ').append(_CoreStringUtils.toFTLTopLevelIdentifierReference(this.variable)).append(" as ").append(this.expr.getCanonicalForm());
        if(canonical) {
            sb.append('>');
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
        return "#escape";
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
            return this.variable;
        case 1:
            return this.expr;
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
            return ParameterRole.PLACEHOLDER_VARIABLE_$LI$();
        case 1:
            return ParameterRole.EXPRESSION_TEMPLATE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isOutputCacheable() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
EscapeBlock["__class"] = "freemarker.core.EscapeBlock";



var __Function = Function;
