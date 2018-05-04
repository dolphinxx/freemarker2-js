/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { KeyValuePairIterator } from '../template/KeyValuePairIterator';
import { SimpleCollection } from '../template/SimpleCollection';
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateHashModelEx2 } from '../template/TemplateHashModelEx2';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { Constants } from '../template/utility/Constants';
import { Expression } from './Expression';
import { Environment } from './Environment';
import { ParentheticalExpression } from './ParentheticalExpression';
import { InvalidReferenceException } from './InvalidReferenceException';
import { ParameterRole } from './ParameterRole';

/**
 * {@code exp!defExp}, {@code (exp)!defExp} and the same two with {@code (exp)!}.
 * @extends Expression
 * @class
 */
export class DefaultToExpression extends Expression {
    static EMPTY_COLLECTION : TemplateCollectionModel; public static EMPTY_COLLECTION_$LI$() : TemplateCollectionModel { if(DefaultToExpression.EMPTY_COLLECTION == null) DefaultToExpression.EMPTY_COLLECTION = new SimpleCollection(<any>([])); return DefaultToExpression.EMPTY_COLLECTION; };

    static EMPTY_STRING_AND_SEQUENCE_AND_HASH : TemplateModel; public static EMPTY_STRING_AND_SEQUENCE_AND_HASH_$LI$() : TemplateModel { if(DefaultToExpression.EMPTY_STRING_AND_SEQUENCE_AND_HASH == null) DefaultToExpression.EMPTY_STRING_AND_SEQUENCE_AND_HASH = new DefaultToExpression.EmptyStringAndSequenceAndHash(); return DefaultToExpression.EMPTY_STRING_AND_SEQUENCE_AND_HASH; };

    /*private*/ lho : Expression;

    /*private*/ rho : Expression;

    constructor(lho : Expression, rho : Expression) {
        super();
        if(this.lho===undefined) this.lho = null;
        if(this.rho===undefined) this.rho = null;
        this.lho = lho;
        this.rho = rho;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        let left : TemplateModel;
        if(this.lho != null && this.lho instanceof <any>ParentheticalExpression) {
            let lastFIRE : boolean = env.setFastInvalidReferenceExceptions(true);
            try {
                left = this.lho.eval(env);
            } catch(ire) {
                left = null;
            } finally {
                env.setFastInvalidReferenceExceptions(lastFIRE);
            };
        } else {
            left = this.lho.eval(env);
        }
        if(left != null) return left; else if(this.rho == null) return DefaultToExpression.EMPTY_STRING_AND_SEQUENCE_AND_HASH_$LI$(); else return this.rho.eval(env);
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
        return new DefaultToExpression(this.lho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.rho != null?this.rho.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState):null);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        if(this.rho == null) {
            return this.lho.getCanonicalForm() + '!';
        }
        return this.lho.getCanonicalForm() + '!' + this.rho.getCanonicalForm();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "...!...";
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
DefaultToExpression["__class"] = "freemarker.core.DefaultToExpression";


export namespace DefaultToExpression {

    export class EmptyStringAndSequenceAndHash implements TemplateScalarModel, TemplateSequenceModel, TemplateHashModelEx2 {
        public getAsString() : string {
            return "";
        }

        public get$int(i : number) : TemplateModel {
            return null;
        }

        public get$java_lang_String(s : string) : TemplateModel {
            return null;
        }

        public get(s? : any) : any {
            if(((typeof s === 'string') || s === null)) {
                return <any>this.get$java_lang_String(s);
            } else if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public size() : number {
            return 0;
        }

        public isEmpty() : boolean {
            return true;
        }

        public keys() : TemplateCollectionModel {
            return DefaultToExpression.EMPTY_COLLECTION_$LI$();
        }

        public values() : TemplateCollectionModel {
            return DefaultToExpression.EMPTY_COLLECTION_$LI$();
        }

        public keyValuePairIterator() : KeyValuePairIterator {
            return Constants.EMPTY_KEY_VALUE_PAIR_ITERATOR_$LI$();
        }

        constructor() {
        }
    }
    EmptyStringAndSequenceAndHash["__class"] = "freemarker.core.DefaultToExpression.EmptyStringAndSequenceAndHash";
    EmptyStringAndSequenceAndHash["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];


}




DefaultToExpression.EMPTY_STRING_AND_SEQUENCE_AND_HASH_$LI$();

DefaultToExpression.EMPTY_COLLECTION_$LI$();
