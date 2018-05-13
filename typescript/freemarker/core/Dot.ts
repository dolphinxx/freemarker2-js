/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateHashModel} from '../template/TemplateHashModel';
import {TemplateModel} from '../template/TemplateModel';
import {Expression} from './Expression';
import {NonHashException} from './NonHashException';
import {_CoreStringUtils} from './_CoreStringUtils';
import {ParameterRole} from './ParameterRole';
import {Identifier} from './Identifier';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * The dot operator. Used to reference items inside a
 * <code>TemplateHashModel</code>.
 * @extends Expression
 * @class
 */
export class Dot extends Expression {
    /*private*/ target : Expression;

    /*private*/ key : string;

    constructor(target : Expression, key : string) {
        super();
        if(this.target===undefined) this.target = null;
        if(this.key===undefined) this.key = null;
        this.target = target;
        this.key = key;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let leftModel : TemplateModel = this.target.eval(env);
        if(leftModel != null && ClassUtil.isAssignableFrom(leftModel, "freemarker.template.TemplateHashModel")/*(leftModel["__interfaces"] != null && leftModel["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || leftModel.constructor != null && leftModel.constructor["__interfaces"] != null && leftModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)*/) {
            return (<TemplateHashModel><any>leftModel).get(this.key);
        }
        if(leftModel == null && env.isClassicCompatible()) {
            return null;
        }
        throw new NonHashException(this.target, leftModel, env);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.target.getCanonicalForm() + this.getNodeTypeSymbol() + _CoreStringUtils.toFTLIdentifierReferenceAfterDot(this.key);
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return ".";
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
        return new Dot(this.target.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.key);
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
        return idx === 0?this.target:this.key;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        return ParameterRole.forBinaryOperatorOperand(idx);
    }

    getRHO() : string {
        return this.key;
    }

    onlyHasIdentifiers() : boolean {
        return (this.target != null && this.target instanceof <any>Identifier) || ((this.target != null && this.target instanceof <any>Dot) && (<Dot>this.target).onlyHasIdentifiers());
    }
}
Dot["__class"] = "freemarker.core.Dot";



