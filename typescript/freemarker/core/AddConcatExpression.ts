/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleNumber} from '../template/SimpleNumber';
import {SimpleScalar} from '../template/SimpleScalar';
import {SimpleSequence} from '../template/SimpleSequence';
import {TemplateCollectionModel} from '../template/TemplateCollectionModel';
import {TemplateHashModel} from '../template/TemplateHashModel';
import {TemplateHashModelEx} from '../template/TemplateHashModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelIterator} from '../template/TemplateModelIterator';
import {TemplateNumberModel} from '../template/TemplateNumberModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {Expression} from './Expression';
import {Environment} from './Environment';
import {TemplateObject} from './TemplateObject';
import {EvalUtil} from './EvalUtil';
import {TemplateMarkupOutputModel} from './TemplateMarkupOutputModel';
import {ArithmeticEngine} from './ArithmeticEngine';
import {ParameterRole} from './ParameterRole';
import {CollectionAndSequence} from './CollectionAndSequence';

/**
 * An operator for the + operator. Note that this is treated
 * separately from the other 4 arithmetic operators,
 * since + is overloaded to mean string concatenation.
 * @extends Expression
 * @class
 */
export class AddConcatExpression extends Expression {
    /*private*/ left : Expression;

    /*private*/ right : Expression;

    constructor(left : Expression, right : Expression) {
        super();
        if(this.left===undefined) this.left = null;
        if(this.right===undefined) this.right = null;
        this.left = left;
        this.right = right;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        return AddConcatExpression._eval(env, this, this.left, this.left.eval(env), this.right, this.right.eval(env));
    }

    /**
     * @param {Expression} leftExp  Used for error messages only; can be {@code null}
     * @param {Expression} rightExp Used for error messages only; can be {@code null}
     * @param {Environment} env
     * @param {TemplateObject} parent
     * @param {*} leftModel
     * @param {*} rightModel
     * @return {*}
     */
    static _eval(env : /*Environment*/any, parent : TemplateObject, leftExp : Expression, leftModel : TemplateModel, rightExp : Expression, rightModel : TemplateModel) : TemplateModel {
        if((leftModel != null && (leftModel["__interfaces"] != null && leftModel["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || leftModel.constructor != null && leftModel.constructor["__interfaces"] != null && leftModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) && (rightModel != null && (rightModel["__interfaces"] != null && rightModel["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || rightModel.constructor != null && rightModel.constructor["__interfaces"] != null && rightModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0))) {
            let first : number = EvalUtil.modelToNumber(<TemplateNumberModel><any>leftModel, leftExp);
            let second : number = EvalUtil.modelToNumber(<TemplateNumberModel><any>rightModel, rightExp);
            return AddConcatExpression._evalOnNumbers(env, parent, first, second);
        } else if((leftModel != null && (leftModel["__interfaces"] != null && leftModel["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || leftModel.constructor != null && leftModel.constructor["__interfaces"] != null && leftModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) && (rightModel != null && (rightModel["__interfaces"] != null && rightModel["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || rightModel.constructor != null && rightModel.constructor["__interfaces"] != null && rightModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))) {
            return new AddConcatExpression.ConcatenatedSequence(<TemplateSequenceModel><any>leftModel, <TemplateSequenceModel><any>rightModel);
        } else {
            let hashConcatPossible : boolean = (leftModel != null && (leftModel["__interfaces"] != null && leftModel["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || leftModel.constructor != null && leftModel.constructor["__interfaces"] != null && leftModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) && (rightModel != null && (rightModel["__interfaces"] != null && rightModel["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || rightModel.constructor != null && rightModel.constructor["__interfaces"] != null && rightModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0));
            try {
                let leftOMOrStr : any = EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$boolean$java_lang_String$freemarker_core_Environment(leftModel, leftExp, hashConcatPossible, null, env);
                if(leftOMOrStr == null) {
                    return AddConcatExpression._eval_concatenateHashes(leftModel, rightModel);
                }
                let rightOMOrStr : any = EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$boolean$java_lang_String$freemarker_core_Environment(rightModel, rightExp, hashConcatPossible, null, env);
                if(rightOMOrStr == null) {
                    return AddConcatExpression._eval_concatenateHashes(leftModel, rightModel);
                }
                if(typeof leftOMOrStr === 'string') {
                    if(typeof rightOMOrStr === 'string') {
                        return new SimpleScalar((<string>leftOMOrStr).concat(<string>rightOMOrStr));
                    } else {
                        let rightMO : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>rightOMOrStr;
                        return EvalUtil.concatMarkupOutputs(parent, rightMO.getOutputFormat().fromPlainTextByEscaping(<string>leftOMOrStr), rightMO);
                    }
                } else {
                    let leftMO : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>leftOMOrStr;
                    if(typeof rightOMOrStr === 'string') {
                        return EvalUtil.concatMarkupOutputs(parent, leftMO, leftMO.getOutputFormat().fromPlainTextByEscaping(<string>rightOMOrStr));
                    } else {
                        return EvalUtil.concatMarkupOutputs(parent, leftMO, <TemplateMarkupOutputModel<any>><any>rightOMOrStr);
                    }
                }
            } catch(e) {
                if(hashConcatPossible) {
                    return AddConcatExpression._eval_concatenateHashes(leftModel, rightModel);
                } else {
                    throw e;
                }
            }
        }
    }

    static _eval_concatenateHashes(leftModel : TemplateModel, rightModel : TemplateModel) : TemplateModel {
        if((leftModel != null && (leftModel["__interfaces"] != null && leftModel["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || leftModel.constructor != null && leftModel.constructor["__interfaces"] != null && leftModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0)) && (rightModel != null && (rightModel["__interfaces"] != null && rightModel["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || rightModel.constructor != null && rightModel.constructor["__interfaces"] != null && rightModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0))) {
            let leftModelEx : TemplateHashModelEx = <TemplateHashModelEx><any>leftModel;
            let rightModelEx : TemplateHashModelEx = <TemplateHashModelEx><any>rightModel;
            if(leftModelEx.size() === 0) {
                return rightModelEx;
            } else if(rightModelEx.size() === 0) {
                return leftModelEx;
            } else {
                return new AddConcatExpression.ConcatenatedHashEx(leftModelEx, rightModelEx);
            }
        } else {
            return new AddConcatExpression.ConcatenatedHash(<TemplateHashModel><any>leftModel, <TemplateHashModel><any>rightModel);
        }
    }

    static _evalOnNumbers(env : /*Environment*/any, parent : TemplateObject, first : number, second : number) : TemplateModel {
        let ae : ArithmeticEngine = EvalUtil.getArithmeticEngine(env, parent);
        return new SimpleNumber(ae.add(first, second));
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return this.constantValue != null || (this.left.isLiteral() && this.right.isLiteral());
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new AddConcatExpression(this.left.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.right.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.left.getCanonicalForm() + " + " + this.right.getCanonicalForm();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "+";
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
        return idx === 0?this.left:this.right;
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
AddConcatExpression["__class"] = "freemarker.core.AddConcatExpression";


export namespace AddConcatExpression {

    export class ConcatenatedSequence implements TemplateSequenceModel {
        left : TemplateSequenceModel;

        right : TemplateSequenceModel;

        constructor(left : TemplateSequenceModel, right : TemplateSequenceModel) {
            if(this.left===undefined) this.left = null;
            if(this.right===undefined) this.right = null;
            this.left = left;
            this.right = right;
        }

        public size() : number {
            return this.left.size() + this.right.size();
        }

        public get(i : number) : TemplateModel {
            let ls : number = this.left.size();
            return i < ls?this.left.get(i):this.right.get(i - ls);
        }
    }
    ConcatenatedSequence["__class"] = "freemarker.core.AddConcatExpression.ConcatenatedSequence";
    ConcatenatedSequence["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];



    export class ConcatenatedHash implements TemplateHashModel {
        left : TemplateHashModel;

        right : TemplateHashModel;

        constructor(left : TemplateHashModel, right : TemplateHashModel) {
            if(this.left===undefined) this.left = null;
            if(this.right===undefined) this.right = null;
            this.left = left;
            this.right = right;
        }

        public get(key : string) : TemplateModel {
            let model : TemplateModel = this.right.get(key);
            return (model != null)?model:this.left.get(key);
        }

        public isEmpty() : boolean {
            return this.left.isEmpty() && this.right.isEmpty();
        }
    }
    ConcatenatedHash["__class"] = "freemarker.core.AddConcatExpression.ConcatenatedHash";
    ConcatenatedHash["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];



    export class ConcatenatedHashEx extends AddConcatExpression.ConcatenatedHash implements TemplateHashModelEx {
        __keys : CollectionAndSequence;

        __values : CollectionAndSequence;

        __size : number;

        constructor(left : TemplateHashModelEx, right : TemplateHashModelEx) {
            super(left, right);
            if(this.__keys===undefined) this.__keys = null;
            if(this.__values===undefined) this.__values = null;
            if(this.__size===undefined) this.__size = 0;
        }

        public size() : number {
            this.initKeys();
            return this.__size;
        }

        public keys() : TemplateCollectionModel {
            this.initKeys();
            return this.__keys;
        }

        public values() : TemplateCollectionModel {
            this.initValues();
            return this.__values;
        }

        initKeys() {
            if(this.__keys == null) {
                let keySet : Array<any> = <any>([]);
                let keySeq : SimpleSequence = new SimpleSequence(32);
                ConcatenatedHashEx.addKeys(keySet, keySeq, <TemplateHashModelEx><any>this.left);
                ConcatenatedHashEx.addKeys(keySet, keySeq, <TemplateHashModelEx><any>this.right);
                this.__size = /* size */(<number>keySet.length);
                this.__keys = new CollectionAndSequence(keySeq);
            }
        }

        static addKeys(set : Array<any>, keySeq : SimpleSequence, hash : TemplateHashModelEx) {
            let it : TemplateModelIterator = hash.keys().iterator();
            while((it.hasNext())) {
                let tsm : TemplateScalarModel = <TemplateScalarModel><any>it.next();
                if(/* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(set, tsm.getAsString())) {
                    keySeq.add$java_lang_Object(tsm);
                }
            }
        }

        initValues() {
            if(this.__values == null) {
                let seq : SimpleSequence = new SimpleSequence(this.size());
                let ln : number = this.__keys.size();
                for(let i : number = 0; i < ln; i++) {
                    seq.add$java_lang_Object(this.get((<TemplateScalarModel><any>this.__keys.get(i)).getAsString()));
                }
                this.__values = new CollectionAndSequence(seq);
            }
        }
    }
    ConcatenatedHashEx["__class"] = "freemarker.core.AddConcatExpression.ConcatenatedHashEx";
    ConcatenatedHashEx["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel"];


}



