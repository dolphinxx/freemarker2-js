/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateModel} from '../template/TemplateModel';
import {Expression} from './Expression';
import {Environment} from './Environment';
import {MiscUtil} from './MiscUtil';
import {ParameterRole} from './ParameterRole';
import {ClassUtil} from "../template/utility/ClassUtil";

export class BooleanLiteral extends Expression {
    /*private*/ val : boolean;

    public constructor(val : boolean) {
        super();
        if(this.val===undefined) this.val = false;
        this.val = val;
    }

    static getTemplateModel(b : boolean) : TemplateBooleanModel {
        return b?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
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
        return this.val;
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.val?MiscUtil.C_TRUE:MiscUtil.C_FALSE;
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
     * @return {String}
     */
    public toString() : string {
        return this.val?MiscUtil.C_TRUE:MiscUtil.C_FALSE;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        return this.val?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
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
        return new BooleanLiteral(this.val);
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
BooleanLiteral["__class"] = "freemarker.core.BooleanLiteral";



