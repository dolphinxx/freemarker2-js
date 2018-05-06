/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateModel} from '../template/TemplateModel';
import {Expression} from './Expression';
import {ParentheticalExpression} from './ParentheticalExpression';
import {ParameterRole} from './ParameterRole';

/**
 * {@code exp??} and {@code (exp)??}
 * @extends Expression
 * @class
 */
export class ExistsExpression extends Expression {
    exp : Expression;

    constructor(exp : Expression) {
        super();
        if(this.exp===undefined) this.exp = null;
        this.exp = exp;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let tm : TemplateModel;
        if(this.exp != null && this.exp instanceof <any>ParentheticalExpression) {
            let lastFIRE : boolean = env.setFastInvalidReferenceExceptions(true);
            try {
                tm = this.exp.eval(env);
            } catch(ire) {
                tm = null;
            } finally {
                env.setFastInvalidReferenceExceptions(lastFIRE);
            }
        } else {
            tm = this.exp.eval(env);
        }
        return tm == null?TemplateBooleanModel.FALSE:TemplateBooleanModel.TRUE;
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return false;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new ExistsExpression(this.exp.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.exp.getCanonicalForm() + this.getNodeTypeSymbol();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "??";
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
        return this.exp;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        return ParameterRole.LEFT_HAND_OPERAND_$LI$();
    }
}
ExistsExpression["__class"] = "freemarker.core.ExistsExpression";




