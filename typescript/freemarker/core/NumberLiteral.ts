/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleNumber } from '../template/SimpleNumber';
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { Expression } from './Expression';
import { Environment } from './Environment';
import { ParameterRole } from './ParameterRole';

/**
 * A simple implementation of the <tt>TemplateNumberModel</tt>
 * interface. Note that this class is immutable.
 * @param {Number} value
 * @class
 * @extends Expression
 */
export class NumberLiteral extends Expression implements TemplateNumberModel {
    /*private*/ value : number;

    public constructor(value : number) {
        super();
        if(this.value===undefined) this.value = null;
        this.value = value;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        return new SimpleNumber(this.value);
    }

    public evalAndCoerceToPlainText(env? : any, seqTip? : any) : any {
        if(((env != null && env instanceof <any>Environment) || env === null) && ((typeof seqTip === 'string') || seqTip === null)) {
            super.evalAndCoerceToPlainText(env, seqTip);
        } else if(((env != null && env instanceof <any>Environment) || env === null) && seqTip === undefined) {
            return <any>this.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        } else throw new Error('invalid overload');
    }

    public evalAndCoerceToPlainText$freemarker_core_Environment(env : Environment) : string {
        return env.formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_Expression$boolean(this, this, false);
    }

    public getAsNumber() : number {
        return this.value;
    }

    getName() : string {
        return "the number: \'" + this.value + "\'";
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.value.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.getCanonicalForm();
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return true;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new NumberLiteral(this.value);
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
}
NumberLiteral["__class"] = "freemarker.core.NumberLiteral";
NumberLiteral["__interfaces"] = ["freemarker.template.TemplateNumberModel","freemarker.template.TemplateModel"];




var __Function = Function;
