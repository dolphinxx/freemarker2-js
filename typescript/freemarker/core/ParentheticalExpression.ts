/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {Expression} from './Expression';
import {Environment} from './Environment';
import {ParameterRole} from './ParameterRole';
import {ClassUtil} from "../template/utility/ClassUtil";

export class ParentheticalExpression extends Expression {
    /*private*/ nested : Expression;

    constructor(nested : Expression) {
        super();
        if(this.nested===undefined) this.nested = null;
        this.nested = nested;
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
        return this.nested.evalToBoolean$freemarker_core_Environment(env);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return "(" + this.nested.getCanonicalForm() + ")";
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "(...)";
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        return this.nested.eval(env);
    }

    /**
     * 
     * @return {boolean}
     */
    public isLiteral() : boolean {
        return this.nested.isLiteral();
    }

    getNestedExpression() : Expression {
        return this.nested;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new ParentheticalExpression(this.nested.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
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
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return this.nested;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return ParameterRole.ENCLOSED_OPERAND_$LI$();
    }
}
ParentheticalExpression["__class"] = "freemarker.core.ParentheticalExpression";




