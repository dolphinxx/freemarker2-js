/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BooleanExpression} from './BooleanExpression';
import {Expression} from './Expression';
import {EvalUtil} from './EvalUtil';
import {BugException} from './BugException';
import {ParameterRole} from './ParameterRole';
import {Configuration} from '../template/Configuration';

/**
 * A class that handles comparisons.
 * @extends BooleanExpression
 * @class
 */
export class ComparisonExpression extends BooleanExpression {
    /*private*/ left : Expression;

    /*private*/ right : Expression;

    /*private*/ operation : number;

    /*private*/ opString : string;

    constructor(left : Expression, right : Expression, opString : string) {
        super();
        if(this.left===undefined) this.left = null;
        if(this.right===undefined) this.right = null;
        if(this.operation===undefined) this.operation = 0;
        if(this.opString===undefined) this.opString = null;
        this.left = left;
        this.right = right;
        this.opString = opString;
        if(opString === "==" || opString === "=") {
            this.operation = EvalUtil.CMP_OP_EQUALS;
        } else if(opString === "!=") {
            this.operation = EvalUtil.CMP_OP_NOT_EQUALS;
        } else if(opString === "gt" || opString === "\\gt" || opString === ">" || opString === "&gt;") {
            this.operation = EvalUtil.CMP_OP_GREATER_THAN;
        } else if(opString === "gte" || opString === "\\gte" || opString === ">=" || opString === "&gt;=") {
            this.operation = EvalUtil.CMP_OP_GREATER_THAN_EQUALS;
        } else if(opString === "lt" || opString === "\\lt" || opString === "<" || opString === "&lt;") {
            this.operation = EvalUtil.CMP_OP_LESS_THAN;
        } else if(opString === "lte" || opString === "\\lte" || opString === "<=" || opString === "&lt;=") {
            this.operation = EvalUtil.CMP_OP_LESS_THAN_EQUALS;
        } else {
            throw new BugException("Unknown comparison operator " + opString);
        }
    }

    public evalToBoolean(env? : any, cfg? : any) : any {
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null)) {
            super.evalToBoolean(env, cfg);
        } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_core_Environment(env);
        } else if(((env != null && env instanceof <any>Configuration) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_template_Configuration(env);
        } else throw new Error('invalid overload');
    }

    evalToBoolean$freemarker_core_Environment(env : /*Environment*/any) : boolean {
        return EvalUtil.compare$freemarker_core_Expression$int$java_lang_String$freemarker_core_Expression$freemarker_core_Expression$freemarker_core_Environment(this.left, this.operation, this.opString, this.right, this, env);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.left.getCanonicalForm() + ' ' + this.opString + ' ' + this.right.getCanonicalForm();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.opString;
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return this.constantValue != null || (this.left.isLiteral() && this.right.isLiteral());
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new ComparisonExpression(this.left.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.right.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.opString);
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
        return idx === 0?this.left:this.right;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        return ParameterRole.forBinaryOperatorOperand(idx);
    }
}
ComparisonExpression["__class"] = "freemarker.core.ComparisonExpression";



