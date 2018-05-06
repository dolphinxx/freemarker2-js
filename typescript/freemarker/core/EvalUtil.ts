/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BeanModel} from '../ext/beans/BeanModel';
import {_BeansAPI} from '../ext/beans/_BeansAPI';
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateDateModel} from '../template/TemplateDateModel';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateNumberModel} from '../template/TemplateNumberModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {ArithmeticEngine} from './ArithmeticEngine';
import {BugException} from './BugException';
import {TemplateNumberFormat} from './TemplateNumberFormat';
import {_MessageUtil} from './_MessageUtil';
import {TemplateDateFormat} from './TemplateDateFormat';
import {TemplateMarkupOutputModel} from './TemplateMarkupOutputModel';
import {MiscUtil} from './MiscUtil';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {_DelayedJQuote} from './_DelayedJQuote';
import {MarkupOutputFormat} from './MarkupOutputFormat';
import {TemplateObject} from './TemplateObject';
import {_DelayedToString} from './_DelayedToString';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * Internally used static utilities for evaluation expressions.
 * @class
 */
export class EvalUtil {
    static CMP_OP_EQUALS : number = 1;

    static CMP_OP_NOT_EQUALS : number = 2;

    static CMP_OP_LESS_THAN : number = 3;

    static CMP_OP_GREATER_THAN : number = 4;

    static CMP_OP_LESS_THAN_EQUALS : number = 5;

    static CMP_OP_GREATER_THAN_EQUALS : number = 6;

    constructor() {
    }

    /**
     * @param {Expression} expr {@code null} is allowed, but may results in less helpful error messages
     * @param {Environment} env  {@code null} is allowed, but may results in lower performance in classic-compatible mode
     * @param {*} model
     * @return {String}
     */
    static modelToString(model : TemplateScalarModel, expr : /*Expression*/any, env : /*Environment*/any) : string {
        let value : string = model.getAsString();
        if(value == null) {
            if(env == null) env = (require('./Environment').Environment).getCurrentEnvironment();
            if(env != null && env.isClassicCompatible()) {
                return "";
            } else {
                throw EvalUtil.newModelHasStoredNullException(String, model, expr);
            }
        }
        return value;
    }

    /**
     * @param {Expression} expr {@code null} is allowed, but may results in less helpful error messages
     * @param {*} model
     * @return {Number}
     */
    static modelToNumber(model : TemplateNumberModel, expr : /*Expression*/any) : number {
        let value : number = model.getAsNumber();
        if(value == null) throw EvalUtil.newModelHasStoredNullException(Number, model, expr);
        return value;
    }

    /**
     * @param {Expression} expr {@code null} is allowed, but may results in less helpful error messages
     * @param {*} model
     * @return {Date}
     */
    static modelToDate(model : TemplateDateModel, expr : /*Expression*/any) : Date {
        let value : Date = model.getAsDate();
        if(value == null) throw EvalUtil.newModelHasStoredNullException(Date, model, expr);
        return value;
    }

    /**
     * Signals the buggy case where we have a non-null model, but it wraps a null.
     * @param {*} expected
     * @param {*} model
     * @param {Expression} expr
     * @return {TemplateModelException}
     */
    static newModelHasStoredNullException(expected : any, model : TemplateModel, expr : /*Expression*/any) : /*TemplateModelException*/any {
        const _TemplateModelException = require('./_TemplateModelException')._TemplateModelException;
        return <any>new (__Function.prototype.bind.apply(_TemplateModelException, [null, expr].concat(<any[]>_TemplateModelException.modelHasStoredNullDescription(expected, model))));
    }

    static compare$freemarker_core_Expression$int$java_lang_String$freemarker_core_Expression$freemarker_core_Expression$freemarker_core_Environment(leftExp : /*Expression*/any, operator : number, operatorString : string, rightExp : /*Expression*/any, defaultBlamed : /*Expression*/any, env : /*Environment*/any) : boolean {
        let ltm : TemplateModel = leftExp.eval(env);
        let rtm : TemplateModel = rightExp.eval(env);
        return EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(ltm, leftExp, operator, operatorString, rtm, rightExp, defaultBlamed, false, false, false, false, env);
    }

    static compare$freemarker_template_TemplateModel$int$freemarker_template_TemplateModel$freemarker_core_Environment(leftValue : TemplateModel, operator : number, rightValue : TemplateModel, env : /*Environment*/any) : boolean {
        return EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(leftValue, null, operator, null, rightValue, null, null, false, false, false, false, env);
    }

    /**
     * Same as {link #compare(TemplateModel, int, TemplateModel, Environment)}, but if the two types are incompatible,
     * they are treated as non-equal instead of throwing an exception. Comparing dates of different types will
     * still throw an exception, however.
     * @param {*} leftValue
     * @param {number} operator
     * @param {*} rightValue
     * @param {Environment} env
     * @return {boolean}
     */
    static compareLenient(leftValue : TemplateModel, operator : number, rightValue : TemplateModel, env : /*Environment*/any) : boolean {
        return EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(leftValue, null, operator, null, rightValue, null, null, false, true, false, false, env);
    }

    static VALUE_OF_THE_COMPARISON_IS_UNKNOWN_DATE_LIKE : string = "value of the comparison is a date-like value where it\'s not known if it\'s a date (no time part), time, or date-time, and thus can\'t be used in a comparison.";

    public static compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(leftValue : TemplateModel, leftExp : /*Expression*/any, operator : number, operatorString : string, rightValue : TemplateModel, rightExp : /*Expression*/any, defaultBlamed : /*Expression*/any, quoteOperandsInErrors : boolean, typeMismatchMeansNotEqual : boolean, leftNullReturnsFalse : boolean, rightNullReturnsFalse : boolean, env : /*Environment*/any) : boolean {
        // if(leftValue == null) {
        //     if(env != null && env.isClassicCompatible()) {
        //         leftValue = TemplateScalarModel.EMPTY_STRING;
        //     } else {
        //         if(leftNullReturnsFalse) {
        //             return false;
        //         } else {
        //             if(leftExp != null) {
        //                 throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(leftExp, env);
        //             } else {
        //                 throw new _MiscTemplateException(defaultBlamed, env, "The left operand of the comparison was undefined or null.");
        //             }
        //         }
        //     }
        // }
        // if(rightValue == null) {
        //     if(env != null && env.isClassicCompatible()) {
        //         rightValue = TemplateScalarModel.EMPTY_STRING;
        //     } else {
        //         if(rightNullReturnsFalse) {
        //             return false;
        //         } else {
        //             if(rightExp != null) {
        //                 throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(rightExp, env);
        //             } else {
        //                 throw new _MiscTemplateException(defaultBlamed, env, "The right operand of the comparison was undefined or null.");
        //             }
        //         }
        //     }
        // }
        // let cmpResult : number;
        // if((leftValue != null && (leftValue["__interfaces"] != null && leftValue["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || leftValue.constructor != null && leftValue.constructor["__interfaces"] != null && leftValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) && (rightValue != null && (rightValue["__interfaces"] != null && rightValue["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || rightValue.constructor != null && rightValue.constructor["__interfaces"] != null && rightValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0))) {
        //     let leftNum : number = EvalUtil.modelToNumber(<TemplateNumberModel><any>leftValue, leftExp);
        //     let rightNum : number = EvalUtil.modelToNumber(<TemplateNumberModel><any>rightValue, rightExp);
        //     let ae : ArithmeticEngine = env != null?env.getArithmeticEngine():(leftExp != null?leftExp.getTemplate().getArithmeticEngine():ArithmeticEngine.BIGDECIMAL_ENGINE_$LI$());
        //     try {
        //         cmpResult = ae.compareNumbers(leftNum, rightNum);
        //     } catch(e) {
        //         throw new _MiscTemplateException(defaultBlamed, e, env, "Unexpected error while comparing two numbers: ", e);
        //     };
        // } else if((leftValue != null && (leftValue["__interfaces"] != null && leftValue["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || leftValue.constructor != null && leftValue.constructor["__interfaces"] != null && leftValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) && (rightValue != null && (rightValue["__interfaces"] != null && rightValue["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || rightValue.constructor != null && rightValue.constructor["__interfaces"] != null && rightValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0))) {
        //     let leftDateModel : TemplateDateModel = <TemplateDateModel><any>leftValue;
        //     let rightDateModel : TemplateDateModel = <TemplateDateModel><any>rightValue;
        //     let leftDateType : number = leftDateModel.getDateType();
        //     let rightDateType : number = rightDateModel.getDateType();
        //     if(leftDateType === TemplateDateModel.UNKNOWN || rightDateType === TemplateDateModel.UNKNOWN) {
        //         let sideName : string;
        //         let sideExp : Expression;
        //         if(leftDateType === TemplateDateModel.UNKNOWN) {
        //             sideName = "left";
        //             sideExp = leftExp;
        //         } else {
        //             sideName = "right";
        //             sideExp = rightExp;
        //         }
        //         throw new _MiscTemplateException(sideExp != null?sideExp:defaultBlamed, env, "The ", sideName, " ", EvalUtil.VALUE_OF_THE_COMPARISON_IS_UNKNOWN_DATE_LIKE);
        //     }
        //     if(leftDateType !== rightDateType) {
        //         throw new _MiscTemplateException(defaultBlamed, env, "Can\'t compare dates of different types. Left date type is ", /* get */TemplateDateModel.TYPE_NAMES[leftDateType], ", right date type is ", /* get */TemplateDateModel.TYPE_NAMES[rightDateType], ".");
        //     }
        //     let leftDate : Date = EvalUtil.modelToDate(leftDateModel, leftExp);
        //     let rightDate : Date = EvalUtil.modelToDate(rightDateModel, rightExp);
        //     cmpResult = leftDate.compareTo(rightDate);
        // } else if((leftValue != null && (leftValue["__interfaces"] != null && leftValue["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || leftValue.constructor != null && leftValue.constructor["__interfaces"] != null && leftValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) && (rightValue != null && (rightValue["__interfaces"] != null && rightValue["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || rightValue.constructor != null && rightValue.constructor["__interfaces"] != null && rightValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
        //     if(operator !== EvalUtil.CMP_OP_EQUALS && operator !== EvalUtil.CMP_OP_NOT_EQUALS) {
        //         throw new _MiscTemplateException(defaultBlamed, env, "Can\'t use operator \"", EvalUtil.cmpOpToString(operator, operatorString), "\" on string values.");
        //     }
        //     let leftString : string = EvalUtil.modelToString(<TemplateScalarModel><any>leftValue, leftExp, env);
        //     let rightString : string = EvalUtil.modelToString(<TemplateScalarModel><any>rightValue, rightExp, env);
        //     cmpResult = env.getCollator().compare(leftString, rightString);
        // } else if((leftValue != null && (leftValue["__interfaces"] != null && leftValue["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || leftValue.constructor != null && leftValue.constructor["__interfaces"] != null && leftValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) && (rightValue != null && (rightValue["__interfaces"] != null && rightValue["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || rightValue.constructor != null && rightValue.constructor["__interfaces"] != null && rightValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0))) {
        //     if(operator !== EvalUtil.CMP_OP_EQUALS && operator !== EvalUtil.CMP_OP_NOT_EQUALS) {
        //         throw new _MiscTemplateException(defaultBlamed, env, "Can\'t use operator \"", EvalUtil.cmpOpToString(operator, operatorString), "\" on boolean values.");
        //     }
        //     let leftBool : boolean = (<TemplateBooleanModel><any>leftValue).getAsBoolean();
        //     let rightBool : boolean = (<TemplateBooleanModel><any>rightValue).getAsBoolean();
        //     cmpResult = (leftBool?1:0) - (rightBool?1:0);
        // } else if(env.isClassicCompatible()) {
        //     let leftSting : string = leftExp.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        //     let rightString : string = rightExp.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        //     cmpResult = env.getCollator().compare(leftSting, rightString);
        // } else {
        //     if(typeMismatchMeansNotEqual) {
        //         if(operator === EvalUtil.CMP_OP_EQUALS) {
        //             return false;
        //         } else if(operator === EvalUtil.CMP_OP_NOT_EQUALS) {
        //             return true;
        //         }
        //     }
        //     throw new _MiscTemplateException(defaultBlamed, env, "Can\'t compare values of these types. ", "Allowed comparisons are between two numbers, two strings, two dates, or two booleans.\n", "Left hand operand ", (quoteOperandsInErrors && leftExp != null?["(", new _DelayedGetCanonicalForm(leftExp), ") value "]:""), "is ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(leftValue)), ".\n", "Right hand operand ", (quoteOperandsInErrors && rightExp != null?["(", new _DelayedGetCanonicalForm(rightExp), ") value "]:""), "is ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(rightValue)), ".");
        // }
        // switch((operator)) {
        // case 1 /* CMP_OP_EQUALS */:
        //     return cmpResult === 0;
        // case 2 /* CMP_OP_NOT_EQUALS */:
        //     return cmpResult !== 0;
        // case 3 /* CMP_OP_LESS_THAN */:
        //     return cmpResult < 0;
        // case 4 /* CMP_OP_GREATER_THAN */:
        //     return cmpResult > 0;
        // case 5 /* CMP_OP_LESS_THAN_EQUALS */:
        //     return cmpResult <= 0;
        // case 6 /* CMP_OP_GREATER_THAN_EQUALS */:
        //     return cmpResult >= 0;
        // default:
        //     throw new BugException("Unsupported comparator operator code: " + operator);
        // }
        throw new Error();
    }

    /**
     * @param {Expression} leftExp                   {@code null} is allowed, but may results in less helpful error messages
     * @param {number} operator                  one of the {@code COMP_OP_...} constants, like {link #CMP_OP_EQUALS}.
     * @param {String} operatorString            can be null {@code null}; the actual operator used, used for more accurate error message.
     * @param {Expression} rightExp                  {@code null} is allowed, but may results in less helpful error messages
     * @param {Expression} defaultBlamed             {@code null} allowed; the expression to which the error will point to if something goes
     * wrong that is not specific to the left or right side expression, or if that expression is {@code null}.
     * @param {boolean} typeMismatchMeansNotEqual If the two types are incompatible, they are treated as non-equal instead
     * of throwing an exception. Comparing dates of different types will still throw an exception, however.
     * @param {boolean} leftNullReturnsFalse      if {@code true}, a {@code null} left value will not cause exception, but make the
     * expression {@code false}.
     * @param {boolean} rightNullReturnsFalse     if {@code true}, a {@code null} right value will not cause exception, but make the
     * expression {@code false}.
     * @param {*} leftValue
     * @param {*} rightValue
     * @param {boolean} quoteOperandsInErrors
     * @param {Environment} env
     * @return {boolean}
     */
    public static compare(leftValue? : any, leftExp? : any, operator? : any, operatorString? : any, rightValue? : any, rightExp? : any, defaultBlamed? : any, quoteOperandsInErrors? : any, typeMismatchMeansNotEqual? : any, leftNullReturnsFalse? : any, rightNullReturnsFalse? : any, env? : any) : any {
        // if(((leftValue != null && (leftValue["__interfaces"] != null && leftValue["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || leftValue.constructor != null && leftValue.constructor["__interfaces"] != null && leftValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || leftValue === null) && ((leftExp != null && leftExp instanceof <any>Expression) || leftExp === null) && ((typeof operator === 'number') || operator === null) && ((typeof operatorString === 'string') || operatorString === null) && ((rightValue != null && (rightValue["__interfaces"] != null && rightValue["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || rightValue.constructor != null && rightValue.constructor["__interfaces"] != null && rightValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || rightValue === null) && ((rightExp != null && rightExp instanceof <any>Expression) || rightExp === null) && ((defaultBlamed != null && defaultBlamed instanceof <any>Expression) || defaultBlamed === null) && ((typeof quoteOperandsInErrors === 'boolean') || quoteOperandsInErrors === null) && ((typeof typeMismatchMeansNotEqual === 'boolean') || typeMismatchMeansNotEqual === null) && ((typeof leftNullReturnsFalse === 'boolean') || leftNullReturnsFalse === null) && ((typeof rightNullReturnsFalse === 'boolean') || rightNullReturnsFalse === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
        //     return <any>EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(leftValue, leftExp, operator, operatorString, rightValue, rightExp, defaultBlamed, quoteOperandsInErrors, typeMismatchMeansNotEqual, leftNullReturnsFalse, rightNullReturnsFalse, env);
        // } else if(((leftValue != null && leftValue instanceof <any>Expression) || leftValue === null) && ((typeof leftExp === 'number') || leftExp === null) && ((typeof operator === 'string') || operator === null) && ((operatorString != null && operatorString instanceof <any>Expression) || operatorString === null) && ((rightValue != null && rightValue instanceof <any>Expression) || rightValue === null) && ((ClassUtil.isInstanceOf(rightExp, 'freemarker.core.Environment')) || rightExp === null) && defaultBlamed === undefined && quoteOperandsInErrors === undefined && typeMismatchMeansNotEqual === undefined && leftNullReturnsFalse === undefined && rightNullReturnsFalse === undefined && env === undefined) {
        //     return <any>EvalUtil.compare$freemarker_core_Expression$int$java_lang_String$freemarker_core_Expression$freemarker_core_Expression$freemarker_core_Environment(leftValue, leftExp, operator, operatorString, rightValue, rightExp);
        // } else if(((leftValue != null && (leftValue["__interfaces"] != null && leftValue["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || leftValue.constructor != null && leftValue.constructor["__interfaces"] != null && leftValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || leftValue === null) && ((typeof leftExp === 'number') || leftExp === null) && ((operator != null && (operator["__interfaces"] != null && operator["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || operator.constructor != null && operator.constructor["__interfaces"] != null && operator.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || operator === null) && ((ClassUtil.isInstanceOf(operatorString, 'freemarker.core.Environment')) || operatorString === null) && rightValue === undefined && rightExp === undefined && defaultBlamed === undefined && quoteOperandsInErrors === undefined && typeMismatchMeansNotEqual === undefined && leftNullReturnsFalse === undefined && rightNullReturnsFalse === undefined && env === undefined) {
        //     return <any>EvalUtil.compare$freemarker_template_TemplateModel$int$freemarker_template_TemplateModel$freemarker_core_Environment(leftValue, leftExp, operator, operatorString);
        // } else throw new Error('invalid overload');
        throw new Error();
    }

    /*private*/ static cmpOpToString(operator : number, operatorString : string) : string {
        if(operatorString != null) {
            return operatorString;
        } else {
            switch((operator)) {
            case 1 /* CMP_OP_EQUALS */:
                return "equals";
            case 2 /* CMP_OP_NOT_EQUALS */:
                return "not-equals";
            case 3 /* CMP_OP_LESS_THAN */:
                return "less-than";
            case 4 /* CMP_OP_GREATER_THAN */:
                return "greater-than";
            case 5 /* CMP_OP_LESS_THAN_EQUALS */:
                return "less-than-equals";
            case 6 /* CMP_OP_GREATER_THAN_EQUALS */:
                return "greater-than-equals";
            default:
                return "???";
            }
        }
    }

    static coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(tm : TemplateModel, exp : /*Expression*/any, seqTip : string, env : /*Environment*/any) : any {
        return EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$boolean$java_lang_String$freemarker_core_Environment(tm, exp, false, seqTip, env);
    }

    public static coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$boolean$java_lang_String$freemarker_core_Environment(tm : TemplateModel, exp : /*Expression*/any, returnNullOnNonCoercableType : boolean, seqTip : string, env : /*Environment*/any) : any {
        if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
            let tnm : TemplateNumberModel = <TemplateNumberModel><any>tm;
            let format : TemplateNumberFormat = env.getTemplateNumberFormat$freemarker_core_Expression$boolean(exp, false);
            try {
                return EvalUtil.assertFormatResultNotNull$java_lang_Object(format.format$freemarker_template_TemplateNumberModel(tnm));
            } catch(e) {
                throw _MessageUtil.newCantFormatNumberException(format, exp, e, false);
            }
        } else if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) {
            let tdm : TemplateDateModel = <TemplateDateModel><any>tm;
            let format : TemplateDateFormat = env.getTemplateDateFormat$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(tdm, exp, false);
            try {
                return EvalUtil.assertFormatResultNotNull$java_lang_Object(format.format$freemarker_template_TemplateDateModel(tdm));
            } catch(e) {
                throw _MessageUtil.newCantFormatDateException(format, exp, e, false);
            }
        } else if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0)) {
            return tm;
        } else {
            return EvalUtil.coerceModelToTextualCommon(tm, exp, seqTip, true, returnNullOnNonCoercableType, env);
        }
    }

    /**
     * @return {Object} {@code null} if the {@code returnNullOnNonCoercableType} parameter is {@code true}, and the coercion is
     * not possible, because of the type is not right for it.
     * <p>
     * see #coerceModelToStringOrMarkup(TemplateModel, Expression, String, Environment)
     * @param {*} tm
     * @param {Expression} exp
     * @param {boolean} returnNullOnNonCoercableType
     * @param {String} seqTip
     * @param {Environment} env
     */
    public static coerceModelToStringOrMarkup(tm? : any, exp? : any, returnNullOnNonCoercableType? : any, seqTip? : any, env? : any) : any {
        if(((tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || tm === null) && ((ClassUtil.isInstanceOf(exp, 'freemarker.core.Expression')) || exp === null) && ((typeof returnNullOnNonCoercableType === 'boolean') || returnNullOnNonCoercableType === null) && ((typeof seqTip === 'string') || seqTip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            return <any>EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$boolean$java_lang_String$freemarker_core_Environment(tm, exp, returnNullOnNonCoercableType, seqTip, env);
        } else if(((tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || tm === null) && ((ClassUtil.isInstanceOf(exp, 'freemarker.core.Expression')) || exp === null) && ((typeof returnNullOnNonCoercableType === 'string') || returnNullOnNonCoercableType === null) && ((ClassUtil.isInstanceOf(seqTip, 'freemarker.core.Environment')) || seqTip === null) && env === undefined) {
            return <any>EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(tm, exp, returnNullOnNonCoercableType, seqTip);
        } else throw new Error('invalid overload');
    }

    /**
     * Like {link #coerceModelToStringOrMarkup(TemplateModel, Expression, String, Environment)}, but gives error
     * if the result is markup. This is what you normally use where markup results can't be used.
     * 
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @return {String} Never {@code null}
     * @param {*} tm
     * @param {Expression} exp
     * @param {Environment} env
     */
    static coerceModelToStringOrUnsupportedMarkup(tm : TemplateModel, exp : /*Expression*/any, seqTip : string, env : /*Environment*/any) : string {
        if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
            let tnm : TemplateNumberModel = <TemplateNumberModel><any>tm;
            let format : TemplateNumberFormat = env.getTemplateNumberFormat$freemarker_core_Expression$boolean(exp, false);
            try {
                return EvalUtil.ensureFormatResultString(format.format$freemarker_template_TemplateNumberModel(tnm), exp, env);
            } catch(e) {
                throw _MessageUtil.newCantFormatNumberException(format, exp, e, false);
            }
        } else if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) {
            let tdm : TemplateDateModel = <TemplateDateModel><any>tm;
            let format : TemplateDateFormat = env.getTemplateDateFormat$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(tdm, exp, false);
            try {
                return EvalUtil.ensureFormatResultString(format.format$freemarker_template_TemplateDateModel(tdm), exp, env);
            } catch(e) {
                throw _MessageUtil.newCantFormatDateException(format, exp, e, false);
            }
        } else {
            return EvalUtil.coerceModelToTextualCommon(tm, exp, seqTip, false, false, env);
        }
    }

    /**
     * Converts a value to plain text {link String}, even if the {link TemplateValueFormat} involved normally produces
     * markup. This should be used rarely, where the user clearly intend to use the plain text variant of the format.
     * 
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @return {String} Never {@code null}
     * @param {*} tm
     * @param {Expression} exp
     * @param {Environment} env
     */
    static coerceModelToPlainText(tm : TemplateModel, exp : /*Expression*/any, seqTip : string, env : /*Environment*/any) : string {
        if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
            return EvalUtil.assertFormatResultNotNull$java_lang_String(env.formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_Expression$boolean(<TemplateNumberModel><any>tm, exp, false));
        } else if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) {
            return EvalUtil.assertFormatResultNotNull$java_lang_String(env.formatDateToPlainText$freemarker_template_TemplateDateModel$freemarker_core_Expression$boolean(<TemplateDateModel><any>tm, exp, false));
        } else {
            return EvalUtil.coerceModelToTextualCommon(tm, exp, seqTip, false, false, env);
        }
    }

    /**
     * @param {*} tm          If {@code null} that's an exception, unless we are in classic compatible mode.
     * @param {boolean} supportsTOM Whether the caller {@code coerceModelTo...} method could handle a {link TemplateMarkupOutputModel}.
     * @return {String} Never {@code null}
     * @param {Expression} exp
     * @param {String} seqHint
     * @param {boolean} returnNullOnNonCoercableType
     * @param {Environment} env
     * @private
     */
    /*private*/ static coerceModelToTextualCommon(tm : TemplateModel, exp : /*Expression*/any, seqHint : string, supportsTOM : boolean, returnNullOnNonCoercableType : boolean, env : /*Environment*/any) : string {
        if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
            return EvalUtil.modelToString(<TemplateScalarModel><any>tm, exp, env);
        } else if(tm == null) {
            if(env.isClassicCompatible()) {
                return "";
            } else {
                const InvalidReferenceException = require('./InvalidReferenceException').InvalidReferenceException;
                if(exp != null) {
                    throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(exp, env);
                } else {
                    throw new InvalidReferenceException("Null/missing value (no more informatoin avilable)", env);
                }
            }
        } else if(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
            let booleanValue : boolean = (<TemplateBooleanModel><any>tm).getAsBoolean();
            let compatMode : number = env.getClassicCompatibleAsInt();
            if(compatMode === 0) {
                return env.formatBoolean(booleanValue, false);
            } else {
                if(compatMode === 1) {
                    return booleanValue?MiscUtil.C_TRUE:"";
                } else if(compatMode === 2) {
                    if(tm != null && tm instanceof <any>BeanModel) {
                        return _BeansAPI.getAsClassicCompatibleString(<BeanModel><any>tm);
                    } else {
                        return booleanValue?MiscUtil.C_TRUE:"";
                    }
                } else {
                    throw new BugException("Unsupported classic_compatible variation: " + compatMode);
                }
            }
        } else {
            if(env.isClassicCompatible() && (tm != null && tm instanceof <any>BeanModel)) {
                return _BeansAPI.getAsClassicCompatibleString(<BeanModel><any>tm);
            }
            if(returnNullOnNonCoercableType) {
                return null;
            }
            const NonStringOrTemplateOutputException = require('./NonStringOrTemplateOutputException').NonStringOrTemplateOutputException;
            const NonStringException = require('./NonStringException').NonStringException;
            if(seqHint != null && ((tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) || (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)))) {
                if(supportsTOM) {
                    throw new NonStringOrTemplateOutputException(exp, tm, seqHint, env);
                } else {
                    throw new NonStringException(exp, tm, seqHint, env);
                }
            } else {
                if(supportsTOM) {
                    throw new NonStringOrTemplateOutputException(exp, tm, env);
                } else {
                    throw new NonStringException(exp, tm, env);
                }
            }
        }
    }

    /*private*/ static ensureFormatResultString(formatResult : any, exp : /*Expression*/any, env : /*Environment*/any) : string {
        if(typeof formatResult === 'string') {
            return <string>formatResult;
        }
        EvalUtil.assertFormatResultNotNull$java_lang_Object(formatResult);
        let mo : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>formatResult;
        let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(["Value was formatted to convert it to string, but the result was markup of ouput format ", new _DelayedJQuote(mo.getOutputFormat()), "."]).tip$java_lang_String("Use value?string to force formatting to plain text.").blame(exp);
        throw new (require('./NonStringException').NonStringException)(null, desc);
    }

    public static assertFormatResultNotNull$java_lang_String(r : string) : string {
        if(r != null) {
            return r;
        }
        throw Object.defineProperty(new Error("TemplateValueFormatter result can\'t be null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
    }

    public static assertFormatResultNotNull(r? : any) : any {
        if(((typeof r === 'string') || r === null)) {
            return <any>EvalUtil.assertFormatResultNotNull$java_lang_String(r);
        } else if(((r != null) || r === null)) {
            return <any>EvalUtil.assertFormatResultNotNull$java_lang_Object(r);
        } else throw new Error('invalid overload');
    }

    static assertFormatResultNotNull$java_lang_Object(r : any) : any {
        if(r != null) {
            return r;
        }
        throw Object.defineProperty(new Error("TemplateValueFormatter result can\'t be null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
    }

    static concatMarkupOutputs(parent : TemplateObject, leftMO : TemplateMarkupOutputModel<any>, rightMO : TemplateMarkupOutputModel<any>) : TemplateMarkupOutputModel<any> {
        let leftOF : MarkupOutputFormat<any> = leftMO.getOutputFormat();
        let rightOF : MarkupOutputFormat<any> = rightMO.getOutputFormat();
        if(rightOF !== leftOF) {
            let rightPT : string;
            let leftPT : string;
            if((rightPT = rightOF.getSourcePlainText(rightMO)) != null) {
                return leftOF.concat(leftMO, leftOF.fromPlainTextByEscaping(rightPT));
            } else if((leftPT = leftOF.getSourcePlainText(leftMO)) != null) {
                return rightOF.concat(rightOF.fromPlainTextByEscaping(leftPT), rightMO);
            } else {
                const _MiscTemplateException = require('./_MiscTemplateException')._MiscTemplateException;
                let message : Array<any> = ["Concatenation left hand operand is in ", new _DelayedToString(leftOF), " format, while the right hand operand is in ", new _DelayedToString(rightOF), ". Conversion to common format wasn\'t possible."];
                if(ClassUtil.isInstanceOf(parent, 'freemarker.core.Expression')) {
                    throw <any>new (__Function.prototype.bind.apply(_MiscTemplateException, [null, </*Expression*/any>parent].concat(<any[]>message)));
                } else {
                    throw <any>new (__Function.prototype.bind.apply(_MiscTemplateException, [null].concat(<any[]>message)));
                }
            }
        } else {
            return leftOF.concat(leftMO, rightMO);
        }
    }

    /**
     * Returns an {link ArithmeticEngine} even if {@code env} is {@code null}, because we are in parsing phase.
     * @param {Environment} env
     * @param {TemplateObject} tObj
     * @return {ArithmeticEngine}
     */
    static getArithmeticEngine(env : /*Environment*/any, tObj : TemplateObject) : ArithmeticEngine {
        return env != null?env.getArithmeticEngine():tObj.getTemplate().getParserConfiguration().getArithmeticEngine();
    }

    static shouldWrapUncheckedException(e : Error, env : /*Environment*/any) : boolean {
        // if(/* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(FlowControlException, e)) {
        //     return false;
        // }
        // if(env.getWrapUncheckedExceptions()) {
        //     return true;
        // } else if(env.getConfiguration().getIncompatibleImprovements().intValue() >= _TemplateAPI.VERSION_INT_2_3_27_$LI$()) {
        //     let c : any = (<any>e.constructor);
        //     return c === NullPointerException || c ===ClassCastException || c === java.lang.IndexOutOfBoundsException || c === InvocationTargetException;
        // } else {
        //     return false;
        // }
        return false;
    }
}
EvalUtil["__class"] = "freemarker.core.EvalUtil";




