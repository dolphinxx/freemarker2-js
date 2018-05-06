/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleNumber} from '../template/SimpleNumber';
import {TemplateModel} from '../template/TemplateModel';
import {Expression} from './Expression';
import {TemplateObject} from './TemplateObject';
import {ArithmeticEngine} from './ArithmeticEngine';
import {EvalUtil} from './EvalUtil';
import {_MiscTemplateException} from './_MiscTemplateException';
import {ParameterRole} from './ParameterRole';

/**
 * An operator for arithmetic operations. Note that the + operator is in {link AddConcatExpression}, because its
 * overloaded (does string concatenation and more).
 * @extends Expression
 * @class
 */
export class ArithmeticExpression extends Expression {
    static TYPE_SUBSTRACTION : number = 0;

    static TYPE_MULTIPLICATION : number = 1;

    static TYPE_DIVISION : number = 2;

    static TYPE_MODULO : number = 3;

    static OPERATOR_IMAGES : string[]; public static OPERATOR_IMAGES_$LI$() : string[] { if(ArithmeticExpression.OPERATOR_IMAGES == null) ArithmeticExpression.OPERATOR_IMAGES = ['-', '*', '/', '%']; return ArithmeticExpression.OPERATOR_IMAGES; };

    /*private*/ lho : Expression;

    /*private*/ rho : Expression;

    /*private*/ operator : number;

    constructor(lho : Expression, rho : Expression, operator : number) {
        super();
        if(this.lho===undefined) this.lho = null;
        if(this.rho===undefined) this.rho = null;
        if(this.operator===undefined) this.operator = 0;
        this.lho = lho;
        this.rho = rho;
        this.operator = operator;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        return ArithmeticExpression._eval(env, this, this.lho.evalToNumber(env), this.operator, this.rho.evalToNumber(env));
    }

    static _eval(env : /*Environment*/any, parent : TemplateObject, lhoNumber : number, operator : number, rhoNumber : number) : TemplateModel {
        let ae : ArithmeticEngine = EvalUtil.getArithmeticEngine(env, parent);
        try {
            switch((operator)) {
            case 0 /* TYPE_SUBSTRACTION */:
                return new SimpleNumber(ae.subtract(lhoNumber, rhoNumber));
            case 1 /* TYPE_MULTIPLICATION */:
                return new SimpleNumber(ae.multiply(lhoNumber, rhoNumber));
            case 2 /* TYPE_DIVISION */:
                return new SimpleNumber(ae.divide$java_lang_Number$java_lang_Number(lhoNumber, rhoNumber));
            case 3 /* TYPE_MODULO */:
                return new SimpleNumber(ae.modulus(lhoNumber, rhoNumber));
            default:
                if(parent != null && parent instanceof <any>Expression) {
                    throw new _MiscTemplateException(<Expression>parent, "Unknown operation: ", operator);
                } else {
                    throw new _MiscTemplateException("Unknown operation: ", operator);
                }
            }
        } catch(e) {
            throw new _MiscTemplateException(e, env, "Arithmetic operation failed", (e.message != null?[": ", e.message]:" (see cause exception)"));
        }
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.lho.getCanonicalForm() + ' ' + ArithmeticExpression.getOperatorSymbol(this.operator) + ' ' + this.rho.getCanonicalForm();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return /* valueOf */new String(ArithmeticExpression.getOperatorSymbol(this.operator)).toString();
    }

    static getOperatorSymbol(operator : number) : string {
        return ArithmeticExpression.OPERATOR_IMAGES_$LI$()[operator];
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return this.constantValue != null || (this.lho.isLiteral() && this.rho.isLiteral());
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new ArithmeticExpression(this.lho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.rho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.operator);
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 3;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.lho;
        case 1:
            return this.rho;
        case 2:
            return this.operator;
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
            return ParameterRole.LEFT_HAND_OPERAND_$LI$();
        case 1:
            return ParameterRole.RIGHT_HAND_OPERAND_$LI$();
        case 2:
            return ParameterRole.AST_NODE_SUBTYPE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
}
ArithmeticExpression["__class"] = "freemarker.core.ArithmeticExpression";




ArithmeticExpression.OPERATOR_IMAGES_$LI$();
