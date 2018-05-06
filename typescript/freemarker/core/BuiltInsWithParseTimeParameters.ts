/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {BuiltInWithParseTimeParameters} from './BuiltInWithParseTimeParameters';
import {Expression} from './Expression';
import {Environment} from './Environment';
import {Token} from './Token';
import {EvalUtil} from './EvalUtil';
import {_MiscTemplateException} from './_MiscTemplateException';

export class BuiltInsWithParseTimeParameters {
    constructor() {
    }
}
BuiltInsWithParseTimeParameters["__class"] = "freemarker.core.BuiltInsWithParseTimeParameters";


export namespace BuiltInsWithParseTimeParameters {

    /**
     * Behaves similarly to the ternary operator of Java.
     * @extends BuiltInWithParseTimeParameters
     * @class
     */
    export class then_BI extends BuiltInWithParseTimeParameters {
        whenTrueExp : Expression;

        whenFalseExp : Expression;

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let lho : boolean = this.target.evalToBoolean$freemarker_core_Environment(env);
            return (lho?this.whenTrueExp:this.whenFalseExp).evalToNonMissing(env);
        }

        /**
         * 
         * @param {List} parameters
         * @param {Token} openParen
         * @param {Token} closeParen
         */
        bindToParameters(parameters : Array<any>, openParen : Token, closeParen : Token) {
            if(/* size */(<number>parameters.length) !== 2) {
                throw this.newArgumentCountException("requires exactly 2", openParen, closeParen);
            }
            this.whenTrueExp = <Expression>/* get */parameters[0];
            this.whenFalseExp = <Expression>/* get */parameters[1];
        }

        /**
         * 
         * @param {number} argIdx
         * @return {Expression}
         */
        getArgumentParameterValue(argIdx : number) : Expression {
            switch((argIdx)) {
            case 0:
                return this.whenTrueExp;
            case 1:
                return this.whenFalseExp;
            default:
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }

        /**
         * 
         * @return {number}
         */
        getArgumentsCount() : number {
            return 2;
        }

        /**
         * 
         * @return {List}
         */
        getArgumentsAsList() : Array<any> {
            let args : Array<any> = <any>([]);
            /* add */(args.push(this.whenTrueExp)>0);
            /* add */(args.push(this.whenFalseExp)>0);
            return args;
        }

        /**
         * 
         * @param {Expression} cloneExp
         * @param {String} replacedIdentifier
         * @param {Expression} replacement
         * @param {Expression.ReplacemenetState} replacementState
         */
        cloneArguments(cloneExp : Expression, replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) {
            let clone : BuiltInsWithParseTimeParameters.then_BI = <BuiltInsWithParseTimeParameters.then_BI>cloneExp;
            clone.whenTrueExp = this.whenTrueExp.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState);
            clone.whenFalseExp = this.whenFalseExp.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState);
        }

        constructor() {
            super();
            if(this.whenTrueExp===undefined) this.whenTrueExp = null;
            if(this.whenFalseExp===undefined) this.whenFalseExp = null;
        }
    }
    then_BI["__class"] = "freemarker.core.BuiltInsWithParseTimeParameters.then_BI";
    then_BI["__interfaces"] = ["java.lang.Cloneable"];



    export class switch_BI extends BuiltInWithParseTimeParameters {
        parameters : Array<any>;

        /**
         * 
         * @param {List} parameters
         * @param {Token} openParen
         * @param {Token} closeParen
         */
        bindToParameters(parameters : Array<any>, openParen : Token, closeParen : Token) {
            if(/* size */(<number>parameters.length) < 2) {
                throw this.newArgumentCountException("must have at least 2", openParen, closeParen);
            }
            this.parameters = parameters;
        }

        /**
         * 
         * @return {List}
         */
        getArgumentsAsList() : Array<any> {
            return this.parameters;
        }

        /**
         * 
         * @return {number}
         */
        getArgumentsCount() : number {
            return /* size */(<number>this.parameters.length);
        }

        /**
         * 
         * @param {number} argIdx
         * @return {Expression}
         */
        getArgumentParameterValue(argIdx : number) : Expression {
            return <Expression>/* get */this.parameters[argIdx];
        }

        /**
         * 
         * @param {Expression} clone
         * @param {String} replacedIdentifier
         * @param {Expression} replacement
         * @param {Expression.ReplacemenetState} replacementState
         */
        cloneArguments(clone : Expression, replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) {
            let parametersClone : Array<any> = <any>([]);
            for(let i : number = 0; i < /* size */(<number>this.parameters.length); i++) {
                /* add */(parametersClone.push((<Expression>/* get */this.parameters[i]).deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState))>0);
            }
            (<BuiltInsWithParseTimeParameters.switch_BI>clone).parameters = parametersClone;
        }

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let targetValue : TemplateModel = this.target.evalToNonMissing(env);
            let parameters : Array<any> = this.parameters;
            let paramCnt : number = /* size */(<number>parameters.length);
            for(let i : number = 0; i + 1 < paramCnt; i += 2) {
                let caseExp : Expression = <Expression>/* get */parameters[i];
                let caseValue : TemplateModel = caseExp.evalToNonMissing(env);
                if(EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(targetValue, this.target, EvalUtil.CMP_OP_EQUALS, "==", caseValue, caseExp, this, true, false, false, false, env)) {
                    return (<Expression>/* get */parameters[i + 1]).evalToNonMissing(env);
                }
            }
            if(paramCnt % 2 === 0) {
                throw new _MiscTemplateException(this.target, "The value before ?", this.key, "(case1, value1, case2, value2, ...) didn\'t match any of the case parameters, and there was no default value parameter (an additional last parameter) eithter. ");
            }
            return (<Expression>/* get */parameters[paramCnt - 1]).evalToNonMissing(env);
        }

        constructor() {
            super();
            if(this.parameters===undefined) this.parameters = null;
        }
    }
    switch_BI["__class"] = "freemarker.core.BuiltInsWithParseTimeParameters.switch_BI";
    switch_BI["__interfaces"] = ["java.lang.Cloneable"];


}



