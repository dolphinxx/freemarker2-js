/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BooleanExpression} from './BooleanExpression';
import {Expression} from './Expression';
import {ParameterRole} from './ParameterRole';
import {ClassUtil} from "../template/utility/ClassUtil";

export class OrExpression extends BooleanExpression {
    /*private*/ lho : Expression;

    /*private*/ rho : Expression;

    constructor(lho : Expression, rho : Expression) {
        super();
        if(this.lho===undefined) this.lho = null;
        if(this.rho===undefined) this.rho = null;
        this.lho = lho;
        this.rho = rho;
    }

    public evalToBoolean(env? : any, cfg? : any) : any {
        const Configuration = require('../template/Configuration').Configuration;
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null)) {
            super.evalToBoolean(env, cfg);
        } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_core_Environment(env);
        } else if(((env != null && env instanceof <any>Configuration) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_template_Configuration(env);
        } else throw new Error('invalid overload');
    }

    evalToBoolean$freemarker_core_Environment(env : /*Environment*/any) : boolean {
        return this.lho.evalToBoolean$freemarker_core_Environment(env) || this.rho.evalToBoolean$freemarker_core_Environment(env);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.lho.getCanonicalForm() + " || " + this.rho.getCanonicalForm();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "||";
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
        return new OrExpression(this.lho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.rho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
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
            return this.lho;
        case 1:
            return this.rho;
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
        return ParameterRole.forBinaryOperatorOperand(idx);
    }
}
OrExpression["__class"] = "freemarker.core.OrExpression";




