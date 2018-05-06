/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleScalar} from '../template/SimpleScalar';
import {SimpleSequence} from '../template/SimpleSequence';
import {TemplateHashModel} from '../template/TemplateHashModel';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {Constants} from '../template/utility/Constants';
import {Expression} from './Expression';
import {InvalidReferenceException} from './InvalidReferenceException';
import {EvalUtil} from './EvalUtil';
import {RangeModel} from './RangeModel';
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {Range} from './Range';
import {NonStringException} from './NonStringException';
import {_MiscTemplateException} from './_MiscTemplateException';
import {NonHashException} from './NonHashException';
import {ParameterRole} from './ParameterRole';
import {List} from "../../java/util/List";

/**
 * {@code target[keyExpression]}, where, in FM 2.3, {@code keyExpression} can be string, a number or a range,
 * and {@code target} can be a hash or a sequence.
 * @extends Expression
 * @class
 */
export class DynamicKeyName extends Expression {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!DynamicKeyName.__static_initialized) { DynamicKeyName.__static_initialized = true; DynamicKeyName.__static_initializer_0(); } }

    /*private*/ keyExpression : Expression;

    /*private*/ target : Expression;

    constructor(target : Expression, keyExpression : Expression) {
        super();
        if(this.keyExpression===undefined) this.keyExpression = null;
        if(this.target===undefined) this.target = null;
        this.target = target;
        this.keyExpression = keyExpression;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let targetModel : TemplateModel = this.target.eval(env);
        if(targetModel == null) {
            if(env.isClassicCompatible()) {
                return null;
            } else {
                throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(this.target, env);
            }
        }
        let keyModel : TemplateModel = this.keyExpression.eval(env);
        if(keyModel == null) {
            if(env.isClassicCompatible()) {
                keyModel = TemplateScalarModel.EMPTY_STRING;
            } else {
                this.keyExpression.assertNonNull(null, env);
            }
        }
        if(keyModel != null && (keyModel["__interfaces"] != null && keyModel["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || keyModel.constructor != null && keyModel.constructor["__interfaces"] != null && keyModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
            let index : number = /* intValue */(this.keyExpression.modelToNumber(keyModel, env)|0);
            return this.dealWithNumericalKey(targetModel, index, env);
        }
        if(keyModel != null && (keyModel["__interfaces"] != null && keyModel["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || keyModel.constructor != null && keyModel.constructor["__interfaces"] != null && keyModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
            let key : string = EvalUtil.modelToString(<TemplateScalarModel><any>keyModel, this.keyExpression, env);
            return this.dealWithStringKey(targetModel, key, env);
        }
        if(keyModel != null && keyModel instanceof <any>RangeModel) {
            return this.dealWithRangeKey(targetModel, <RangeModel><any>keyModel, env);
        }
        throw new UnexpectedTypeException(this.keyExpression, keyModel, "number, range, or string", ["freemarker.template.TemplateNumberModel", "freemarker.template.TemplateScalarModel", Range], env);
    }

    static NUMERICAL_KEY_LHO_EXPECTED_TYPES : Array<any>; public static NUMERICAL_KEY_LHO_EXPECTED_TYPES_$LI$() : Array<any> { DynamicKeyName.__static_initialize(); return DynamicKeyName.NUMERICAL_KEY_LHO_EXPECTED_TYPES; };

    static __static_initializer_0() {
        DynamicKeyName.NUMERICAL_KEY_LHO_EXPECTED_TYPES = (s => { let a=[]; while(s-->0) a.push(null); return a; })(1 + NonStringException.STRING_COERCABLE_TYPES.length);
        DynamicKeyName.NUMERICAL_KEY_LHO_EXPECTED_TYPES_$LI$()[0] = "freemarker.template.TemplateSequenceModel";
        for(let i : number = 0; i < NonStringException.STRING_COERCABLE_TYPES_$LI$().length; i++) {
            DynamicKeyName.NUMERICAL_KEY_LHO_EXPECTED_TYPES_$LI$()[i + 1] = NonStringException.STRING_COERCABLE_TYPES_$LI$()[i];
        }
    }

    /*private*/ dealWithNumericalKey(targetModel : TemplateModel, index : number, env : /*Environment*/any) : TemplateModel {
        if(targetModel != null && (targetModel["__interfaces"] != null && targetModel["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || targetModel.constructor != null && targetModel.constructor["__interfaces"] != null && targetModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
            let tsm : TemplateSequenceModel = <TemplateSequenceModel><any>targetModel;
            let size : number;
            try {
                size = tsm.size();
            } catch(e) {
                size = Number.MAX_VALUE;
            }
            return index < size?tsm['get$int'](index):null;
        }
        try {
            let s : string = this.target.evalAndCoerceToPlainText$freemarker_core_Environment(env);
            try {
                return new SimpleScalar(s.substring(index, index + 1));
            } catch(e) {
                if(index < 0) {
                    throw new _MiscTemplateException("Negative index not allowed: ", index);
                }
                if(index >= s.length) {
                    throw new _MiscTemplateException("String index out of range: The index was ", index, " (0-based), but the length of the string is only ", s.length, ".");
                }
                throw Object.defineProperty(new Error("Can\'t explain exception"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        } catch(e) {
            throw new UnexpectedTypeException(this.target, targetModel, "sequence or " + NonStringException.STRING_COERCABLE_TYPES_DESC, DynamicKeyName.NUMERICAL_KEY_LHO_EXPECTED_TYPES_$LI$(), ((targetModel != null && (targetModel["__interfaces"] != null && targetModel["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || targetModel.constructor != null && targetModel.constructor["__interfaces"] != null && targetModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0))?"You had a numberical value inside the []. Currently that\'s only supported for sequences (lists) and strings. To get a Map item with a non-string key, use myMap?api.get(myKey).":null), env);
        }
    }

    /*private*/ dealWithStringKey(targetModel : TemplateModel, key : string, env : /*Environment*/any) : TemplateModel {
        if(targetModel != null && (targetModel["__interfaces"] != null && targetModel["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || targetModel.constructor != null && targetModel.constructor["__interfaces"] != null && targetModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) {
            return (<TemplateHashModel><any>targetModel)['get$java_lang_String'](key);
        }
        throw new NonHashException(this.target, targetModel, env);
    }

    /*private*/ dealWithRangeKey(targetModel : TemplateModel, range : RangeModel, env : /*Environment*/any) : TemplateModel {
        let targetSeq : TemplateSequenceModel;
        let targetStr : string;
        if(targetModel != null && (targetModel["__interfaces"] != null && targetModel["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || targetModel.constructor != null && targetModel.constructor["__interfaces"] != null && targetModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
            targetSeq = <TemplateSequenceModel><any>targetModel;
            targetStr = null;
        } else {
            targetSeq = null;
            try {
                targetStr = this.target.evalAndCoerceToPlainText$freemarker_core_Environment(env);
            } catch(e) {
                throw new UnexpectedTypeException(this.target, this.target.eval(env), "sequence or " + NonStringException.STRING_COERCABLE_TYPES_DESC, DynamicKeyName.NUMERICAL_KEY_LHO_EXPECTED_TYPES_$LI$(), env);
            }
        }
        let size : number = range.size();
        let rightUnbounded : boolean = range.isRightUnbounded();
        let rightAdaptive : boolean = range.isRightAdaptive();
        if(!rightUnbounded && size === 0) {
            return this.emptyResult(targetSeq != null);
        }
        let firstIdx : number = range.getBegining();
        if(firstIdx < 0) {
            throw new _MiscTemplateException(this.keyExpression, "Negative range start index (", firstIdx, ") isn\'t allowed for a range used for slicing.");
        }
        let targetSize : number = targetStr != null?targetStr.length:targetSeq.size();
        let step : number = range.getStep();
        if(rightAdaptive && step === 1?firstIdx > targetSize:firstIdx >= targetSize) {
            throw new _MiscTemplateException(this.keyExpression, "Range start index ", firstIdx, " is out of bounds, because the sliced ", (targetStr != null?"string":"sequence"), " has only ", targetSize, " ", (targetStr != null?"character(s)":"element(s)"), ". ", "(Note that indices are 0-based).");
        }
        let resultSize : number;
        if(!rightUnbounded) {
            let lastIdx : number = firstIdx + (size - 1) * step;
            if(lastIdx < 0) {
                if(!rightAdaptive) {
                    throw new _MiscTemplateException(this.keyExpression, "Negative range end index (", lastIdx, ") isn\'t allowed for a range used for slicing.");
                } else {
                    resultSize = firstIdx + 1;
                }
            } else if(lastIdx >= targetSize) {
                if(!rightAdaptive) {
                    throw new _MiscTemplateException(this.keyExpression, "Range end index ", lastIdx, " is out of bounds, because the sliced ", (targetStr != null?"string":"sequence"), " has only ", targetSize, " ", (targetStr != null?"character(s)":"element(s)"), ". (Note that indices are 0-based).");
                } else {
                    resultSize = Math.abs(targetSize - firstIdx);
                }
            } else {
                resultSize = size;
            }
        } else {
            resultSize = targetSize - firstIdx;
        }
        if(resultSize === 0) {
            return this.emptyResult(targetSeq != null);
        }
        if(targetSeq != null) {
            let list : Array<any> = <any>([]);
            let srcIdx : number = firstIdx;
            for(let i : number = 0; i < resultSize; i++) {
                /* add */(list.push(targetSeq['get$int'](srcIdx))>0);
                srcIdx += step;
            }
            return new SimpleSequence(list, null);
        } else {
            let exclEndIdx : number;
            if(step < 0 && resultSize > 1) {
                if(!(range.isAffactedByStringSlicingBug() && resultSize === 2)) {
                    throw new _MiscTemplateException(this.keyExpression, "Decreasing ranges aren\'t allowed for slicing strings (as it would give reversed text). The index range was: first = ", firstIdx, ", last = ", firstIdx + (resultSize - 1) * step);
                } else {
                    exclEndIdx = firstIdx;
                }
            } else {
                exclEndIdx = firstIdx + resultSize;
            }
            return new SimpleScalar(targetStr.substring(firstIdx, exclEndIdx));
        }
    }

    /*private*/ emptyResult(seq : boolean) : TemplateModel {
        return seq?(_TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_core_TemplateObject(this) < /*_TemplateAPI.VERSION_INT_2_3_21_$LI$()*/2003021?new SimpleSequence(new List(), null):Constants.EMPTY_SEQUENCE_$LI$()):TemplateScalarModel.EMPTY_STRING;
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.target.getCanonicalForm() + "[" + this.keyExpression.getCanonicalForm() + "]";
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "...[...]";
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return this.constantValue != null || (this.target.isLiteral() && this.keyExpression.isLiteral());
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
        return idx === 0?this.target:this.keyExpression;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        return idx === 0?ParameterRole.LEFT_HAND_OPERAND_$LI$():ParameterRole.ENCLOSED_OPERAND_$LI$();
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new DynamicKeyName(this.target.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), this.keyExpression.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
    }
}
DynamicKeyName["__class"] = "freemarker.core.DynamicKeyName";




DynamicKeyName.NUMERICAL_KEY_LHO_EXPECTED_TYPES_$LI$();

DynamicKeyName.__static_initialize();
