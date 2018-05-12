/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {Expression} from './Expression';
import {BoundedRangeModel} from './BoundedRangeModel';
import {ListableRightUnboundedRangeModel} from './ListableRightUnboundedRangeModel';
import {NonListableRightUnboundedRangeModel} from './NonListableRightUnboundedRangeModel';
import {NonBooleanException} from './NonBooleanException';
import {BugException} from './BugException';
import {ParameterRole} from './ParameterRole';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * A class that represents a Range between two integers.
 * @extends Expression
 * @class
 */
export class Range extends Expression {
    static END_INCLUSIVE : number = 0;

    static END_EXCLUSIVE : number = 1;

    static END_UNBOUND : number = 2;

    static END_SIZE_LIMITED : number = 3;

    lho : Expression;

    rho : Expression;

    endType : number;

    constructor(lho : Expression, rho : Expression, endType : number) {
        super();
        if(this.lho===undefined) this.lho = null;
        if(this.rho===undefined) this.rho = null;
        if(this.endType===undefined) this.endType = 0;
        this.lho = lho;
        this.rho = rho;
        this.endType = endType;
    }

    getEndType() : number {
        return this.endType;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let begin : number = /* intValue */(this.lho.evalToNumber(env)|0);
        if(this.endType !== Range.END_UNBOUND) {
            let lhoValue : number = /* intValue */(this.rho.evalToNumber(env)|0);
            return new BoundedRangeModel(begin, this.endType !== Range.END_SIZE_LIMITED?lhoValue:begin + lhoValue, this.endType === Range.END_INCLUSIVE, this.endType === Range.END_SIZE_LIMITED);
        } else {
            return _TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_core_TemplateObject(this) >= /*_TemplateAPI.VERSION_INT_2_3_21_$LI$()*/2003021?new ListableRightUnboundedRangeModel(begin):new NonListableRightUnboundedRangeModel(begin);
        }
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
        throw new NonBooleanException(this, new BoundedRangeModel(0, 0, false, false), env);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        let rhs : string = this.rho != null?this.rho.getCanonicalForm():"";
        return this.lho.getCanonicalForm() + this.getNodeTypeSymbol() + rhs;
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        switch((this.endType)) {
        case 1 /* END_EXCLUSIVE */:
            return "..<";
        case 0 /* END_INCLUSIVE */:
            return "..";
        case 2 /* END_UNBOUND */:
            return "..";
        case 3 /* END_SIZE_LIMITED */:
            return "..*";
        default:
            throw new BugException(this.endType);
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        let rightIsLiteral : boolean = this.rho == null || this.rho.isLiteral();
        return this.constantValue != null || (this.lho.isLiteral() && rightIsLiteral);
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new Range(this.lho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.rho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.endType);
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
Range["__class"] = "freemarker.core.Range";




