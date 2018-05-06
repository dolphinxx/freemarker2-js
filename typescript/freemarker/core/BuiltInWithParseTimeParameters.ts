/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SpecialBuiltIn} from './SpecialBuiltIn';
import {Token} from './Token';
import {ParseException} from './ParseException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {Expression} from './Expression';
import {ParameterRole} from './ParameterRole';

export abstract class BuiltInWithParseTimeParameters extends SpecialBuiltIn {
    abstract bindToParameters(parameters : Array<any>, openParen : Token, closeParen : Token);

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        let buf : StringBuilder = new StringBuilder("");
        buf.append(super.getCanonicalForm());
        buf.append("(");
        let args : Array<any> = this.getArgumentsAsList();
        let size : number = /* size */(<number>args.length);
        for(let i : number = 0; i < size; i++) {
            if(i !== 0) {
                buf.append(", ");
            }
            let arg : Expression = <Expression>/* get */args[i];
            buf.append(arg.getCanonicalForm());
        }
        buf.append(")");
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return super.getNodeTypeSymbol() + "(...)";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return super.getParameterCount() + this.getArgumentsCount();
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        let superParamCnt : number = super.getParameterCount();
        if(idx < superParamCnt) {
            return super.getParameterValue(idx);
        }
        let argIdx : number = idx - superParamCnt;
        return this.getArgumentParameterValue(argIdx);
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        let superParamCnt : number = super.getParameterCount();
        if(idx < superParamCnt) {
            return super.getParameterRole(idx);
        }
        if(idx - superParamCnt < this.getArgumentsCount()) {
            return ParameterRole.ARGUMENT_VALUE_$LI$();
        } else {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    newArgumentCountException(ordinalityDesc : string, openParen : Token, closeParen : Token) : ParseException {
        return new ParseException("?" + this.key + "(...) " + ordinalityDesc + " parameters", this.getTemplate(), openParen.beginLine, openParen.beginColumn, closeParen.endLine, closeParen.endColumn);
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        let clone : Expression = super.deepCloneWithIdentifierReplaced_inner(replacedIdentifier, replacement, replacementState);
        this.cloneArguments(clone, replacedIdentifier, replacement, replacementState);
        return clone;
    }

    abstract getArgumentsAsList() : Array<any>;

    abstract getArgumentsCount() : number;

    abstract getArgumentParameterValue(argIdx : number) : Expression;

    abstract cloneArguments(clone : Expression, replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState);

    constructor() {
        super();
    }
}
BuiltInWithParseTimeParameters["__class"] = "freemarker.core.BuiltInWithParseTimeParameters";
BuiltInWithParseTimeParameters["__interfaces"] = ["java.lang.Cloneable"];




