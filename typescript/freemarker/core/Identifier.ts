/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { Expression } from './Expression';
import { Environment } from './Environment';
import { _MiscTemplateException } from './_MiscTemplateException';
import { _CoreStringUtils } from './_CoreStringUtils';
import { ParameterRole } from './ParameterRole';
import { TemplateObject } from './TemplateObject';

/**
 * A reference to a top-level variable
 * @extends Expression
 * @class
 */
export class Identifier extends Expression {
    /*private*/ name : string;

    constructor(name : string) {
        super();
        if(this.name===undefined) this.name = null;
        this.name = name;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        try {
            return env.getVariable(this.name);
        } catch(e) {
            if(env == null) {
                throw new _MiscTemplateException("Variables are not available (certainly you are in a parse-time executed directive). The name of the variable you tried to read: ", this.name);
            } else {
                throw e;
            }
        };
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return _CoreStringUtils.toFTLTopLevelIdentifierReference(this.name);
    }

    /**
     * The name of the identifier without any escaping or other syntactical distortions.
     * @return {String}
     */
    getName() : string {
        return this.name;
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
        return false;
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

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.name,replacedIdentifier))) {
            if(replacementState.replacementAlreadyInUse) {
                let clone : Expression = replacement.deepCloneWithIdentifierReplaced(null, null, replacementState);
                clone.copyLocationFrom(replacement);
                return clone;
            } else {
                replacementState.replacementAlreadyInUse = true;
                return replacement;
            }
        } else {
            return new Identifier(this.name);
        }
    }
}
Identifier["__class"] = "freemarker.core.Identifier";



var __Function = Function;
