/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleNumber} from '../template/SimpleNumber';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateNumberModel} from '../template/TemplateNumberModel';
import {Expression} from './Expression';
import {Environment} from './Environment';
import {NonNumericalException} from './NonNumericalException';
import {ArithmeticEngine} from './ArithmeticEngine';
import {ParameterRole} from './ParameterRole';

export class UnaryPlusMinusExpression extends Expression {
    static TYPE_MINUS : number = 0;

    static TYPE_PLUS : number = 1;

    /*private*/ target : Expression;

    /*private*/ isMinus : boolean;

    static MINUS_ONE : number = -1;

    constructor(target : Expression, isMinus : boolean) {
        super();
        if(this.target===undefined) this.target = null;
        if(this.isMinus===undefined) this.isMinus = false;
        this.target = target;
        this.isMinus = isMinus;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let targetModel : TemplateNumberModel = null;
        let tm : TemplateModel = this.target.eval(env);
        try {
            targetModel = <TemplateNumberModel><any>tm;
        } catch(cce) {
            throw new NonNumericalException(this.target, tm, env);
        }
        if(!this.isMinus) {
            return targetModel;
        }
        this.target.assertNonNull(targetModel, env);
        let n : number = targetModel.getAsNumber();
        n = ArithmeticEngine.CONSERVATIVE_ENGINE_$LI$().multiply(UnaryPlusMinusExpression.MINUS_ONE, n);
        return new SimpleNumber(n);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        let op : string = this.isMinus?"-":"+";
        return op + this.target.getCanonicalForm();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.isMinus?"-...":"+...";
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return this.target.isLiteral();
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new UnaryPlusMinusExpression(this.target.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.isMinus);
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
            return this.target;
        case 1:
            return this.isMinus?UnaryPlusMinusExpression.TYPE_MINUS:UnaryPlusMinusExpression.TYPE_PLUS;
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
            return ParameterRole.RIGHT_HAND_OPERAND_$LI$();
        case 1:
            return ParameterRole.AST_NODE_SUBTYPE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
}
UnaryPlusMinusExpression["__class"] = "freemarker.core.UnaryPlusMinusExpression";




