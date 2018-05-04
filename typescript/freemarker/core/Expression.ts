/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BeanModel } from '../ext/beans/BeanModel';
import { Configuration } from '../template/Configuration';
import { Template } from '../template/Template';
import { TemplateBooleanModel } from '../template/TemplateBooleanModel';
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateHashModel } from '../template/TemplateHashModel';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { UndeclaredThrowableException } from '../template/utility/UndeclaredThrowableException';
import { TemplateObject } from './TemplateObject';
import { Environment } from './Environment';
import { FlowControlException } from './FlowControlException';
import { EvalUtil } from './EvalUtil';
import { _MiscTemplateException } from './_MiscTemplateException';
import { NonNumericalException } from './NonNumericalException';
import { NonBooleanException } from './NonBooleanException';
import { TemplateMarkupOutputModel } from './TemplateMarkupOutputModel';
import { MarkupOutputFormat } from './MarkupOutputFormat';
import { TemplateModelIterator } from '../template/TemplateModelIterator';
import { InvalidReferenceException } from './InvalidReferenceException';
import { Token } from './Token';
import { TemplateElements } from './TemplateElements';

/**
 * <b>Internal API - subject to change:</b> Represent expression nodes in the parsed template.
 * 
 * @deprecated This is an internal FreeMarker API with no backward compatibility guarantees, so you shouldn't depend on
 * it.
 * @class
 * @extends TemplateObject
 */
export abstract class Expression extends TemplateObject {
    /**
     * @param {Environment} env might be {@code null}, if this kind of expression can be evaluated during parsing (as opposed to
     * during template execution).
     * @return {*}
     */
    abstract _eval(env : Environment) : TemplateModel;

    abstract isLiteral() : boolean;

    constantValue : TemplateModel;

    public setLocation$freemarker_template_Template$int$int$int$int(template : Template, beginColumn : number, beginLine : number, endColumn : number, endLine : number) {
        super.setLocation$freemarker_template_Template$int$int$int$int(template, beginColumn, beginLine, endColumn, endLine);
        if(this.isLiteral()) {
            try {
                this.constantValue = this._eval(null);
            } catch(e) {
            };
        }
    }

    /**
     * 
     * @param {Template} template
     * @param {number} beginColumn
     * @param {number} beginLine
     * @param {number} endColumn
     * @param {number} endLine
     */
    public setLocation(template? : any, beginColumn? : any, beginLine? : any, endColumn? : any, endLine? : any) : any {
        if(((template != null && template instanceof <any>Template) || template === null) && ((typeof beginColumn === 'number') || beginColumn === null) && ((typeof beginLine === 'number') || beginLine === null) && ((typeof endColumn === 'number') || endColumn === null) && ((typeof endLine === 'number') || endLine === null)) {
            return <any>this.setLocation$freemarker_template_Template$int$int$int$int(template, beginColumn, beginLine, endColumn, endLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && ((endColumn != null && endColumn instanceof <any>TemplateElements) || endColumn === null) && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(template, beginColumn, beginLine, endColumn);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>TemplateObject) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_TemplateObject(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>TemplateObject) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>TemplateObject) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>TemplateObject) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(template, beginColumn, beginLine);
        } else throw new Error('invalid overload');
    }

    /**
     * @deprecated At the moment FreeMarker has no API for this with backward-compatibility promises.
     * @param {Environment} env
     * @return {*}
     */
    public getAsTemplateModel(env : Environment) : TemplateModel {
        return this.eval(env);
    }

    eval(env : Environment) : TemplateModel {
        try {
            return this.constantValue != null?this.constantValue:this._eval(env);
        } catch(__e) {
            if(__e != null && __e instanceof <any>FlowControlException) {
                let e : FlowControlException = <FlowControlException>__e;
                throw e;

            }
            if(__e != null && __e instanceof <any>TemplateException) {
                let e : TemplateException = <TemplateException>__e;
                throw e;

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                let e : Error = <Error>__e;
                if(env != null && EvalUtil.shouldWrapUncheckedException(e, env)) {
                    throw new _MiscTemplateException(this, e, env, "Expression has thrown an unchecked exception; see the cause exception.");
                } else if(e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.RuntimeException") >= 0) || e != null && e instanceof <any>Error) {
                    throw <Error>e;
                } else {
                    throw new UndeclaredThrowableException(e);
                }

            }
        };
    }

    evalAndCoerceToPlainText$freemarker_core_Environment(env : Environment) : string {
        return EvalUtil.coerceModelToPlainText(this.eval(env), this, null, env);
    }

    public evalAndCoerceToPlainText$freemarker_core_Environment$java_lang_String(env : Environment, seqTip : string) : string {
        return EvalUtil.coerceModelToPlainText(this.eval(env), this, seqTip, env);
    }

    /**
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @param {Environment} env
     * @return {String}
     */
    public evalAndCoerceToPlainText(env? : any, seqTip? : any) : any {
        if(((env != null && env instanceof <any>Environment) || env === null) && ((typeof seqTip === 'string') || seqTip === null)) {
            return <any>this.evalAndCoerceToPlainText$freemarker_core_Environment$java_lang_String(env, seqTip);
        } else if(((env != null && env instanceof <any>Environment) || env === null) && seqTip === undefined) {
            return <any>this.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        } else throw new Error('invalid overload');
    }

    evalAndCoerceToStringOrMarkup$freemarker_core_Environment(env : Environment) : any {
        return EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(this.eval(env), this, null, env);
    }

    public evalAndCoerceToStringOrMarkup$freemarker_core_Environment$java_lang_String(env : Environment, seqTip : string) : any {
        return EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(this.eval(env), this, seqTip, env);
    }

    /**
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @param {Environment} env
     * @return {Object}
     */
    public evalAndCoerceToStringOrMarkup(env? : any, seqTip? : any) : any {
        if(((env != null && env instanceof <any>Environment) || env === null) && ((typeof seqTip === 'string') || seqTip === null)) {
            return <any>this.evalAndCoerceToStringOrMarkup$freemarker_core_Environment$java_lang_String(env, seqTip);
        } else if(((env != null && env instanceof <any>Environment) || env === null) && seqTip === undefined) {
            return <any>this.evalAndCoerceToStringOrMarkup$freemarker_core_Environment(env);
        } else throw new Error('invalid overload');
    }

    evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment(env : Environment) : string {
        return EvalUtil.coerceModelToStringOrUnsupportedMarkup(this.eval(env), this, null, env);
    }

    public evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment$java_lang_String(env : Environment, seqTip : string) : string {
        return EvalUtil.coerceModelToStringOrUnsupportedMarkup(this.eval(env), this, seqTip, env);
    }

    /**
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @param {Environment} env
     * @return {String}
     */
    public evalAndCoerceToStringOrUnsupportedMarkup(env? : any, seqTip? : any) : any {
        if(((env != null && env instanceof <any>Environment) || env === null) && ((typeof seqTip === 'string') || seqTip === null)) {
            return <any>this.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment$java_lang_String(env, seqTip);
        } else if(((env != null && env instanceof <any>Environment) || env === null) && seqTip === undefined) {
            return <any>this.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment(env);
        } else throw new Error('invalid overload');
    }

    evalToNumber(env : Environment) : number {
        let model : TemplateModel = this.eval(env);
        return this.modelToNumber(model, env);
    }

    modelToNumber(model : TemplateModel, env : Environment) : number {
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
            return EvalUtil.modelToNumber(<TemplateNumberModel><any>model, this);
        } else {
            throw new NonNumericalException(this, model, env);
        }
    }

    evalToBoolean$freemarker_core_Environment(env : Environment) : boolean {
        return this.evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(env, null);
    }

    evalToBoolean$freemarker_template_Configuration(cfg : Configuration) : boolean {
        return this.evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(null, cfg);
    }

    evalToNonMissing(env : Environment) : TemplateModel {
        let result : TemplateModel = this.eval(env);
        this.assertNonNull(result, env);
        return result;
    }

    public evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(env : Environment, cfg : Configuration) : boolean {
        let model : TemplateModel = this.eval(env);
        return this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, env, cfg);
    }

    public evalToBoolean(env? : any, cfg? : any) : any {
        if(((env != null && env instanceof <any>Environment) || env === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null)) {
            return <any>this.evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(env, cfg);
        } else if(((env != null && env instanceof <any>Environment) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_core_Environment(env);
        } else if(((env != null && env instanceof <any>Configuration) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_template_Configuration(env);
        } else throw new Error('invalid overload');
    }

    modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment(model : TemplateModel, env : Environment) : boolean {
        return this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, env, null);
    }

    modelToBoolean$freemarker_template_TemplateModel$freemarker_template_Configuration(model : TemplateModel, cfg : Configuration) : boolean {
        return this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, null, cfg);
    }

    public modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model : TemplateModel, env : Environment, cfg : Configuration) : boolean {
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
            return (<TemplateBooleanModel><any>model).getAsBoolean();
        } else if(env != null?env.isClassicCompatible():cfg.isClassicCompatible()) {
            return model != null && !Expression.isEmpty(model);
        } else {
            throw new NonBooleanException(this, model, env);
        }
    }

    public modelToBoolean(model? : any, env? : any, cfg? : any) : any {
        if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((env != null && env instanceof <any>Environment) || env === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null)) {
            return <any>this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, env, cfg);
        } else if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((env != null && env instanceof <any>Environment) || env === null) && cfg === undefined) {
            return <any>this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment(model, env);
        } else if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((env != null && env instanceof <any>Configuration) || env === null) && cfg === undefined) {
            return <any>this.modelToBoolean$freemarker_template_TemplateModel$freemarker_template_Configuration(model, env);
        } else throw new Error('invalid overload');
    }

    deepCloneWithIdentifierReplaced(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        let clone : Expression = this.deepCloneWithIdentifierReplaced_inner(replacedIdentifier, replacement, replacementState);
        if(clone.beginLine === 0) {
            clone.copyLocationFrom(this);
        }
        return clone;
    }

    /**
     * This should return an equivalent new expression object (or an identifier replacement expression).
     * The position need not be filled, unless it will be different from the position of what we were cloning.
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    abstract deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression;

    static isEmpty(model : TemplateModel) : boolean {
        if(model != null && model instanceof <any>BeanModel) {
            return (<BeanModel><any>model).isEmpty();
        } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
            return (<TemplateSequenceModel><any>model).size() === 0;
        } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
            let s : string = (<TemplateScalarModel><any>model).getAsString();
            return (s == null || s.length === 0);
        } else if(model == null) {
            return true;
        } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0)) {
            let mo : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>model;
            return mo.getOutputFormat().isEmpty(mo);
        } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
            return !(<TemplateCollectionModel><any>model).iterator().hasNext();
        } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) {
            return (<TemplateHashModel><any>model).isEmpty();
        } else return !(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) && !(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) && !(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0));
    }

    assertNonNull(model : TemplateModel, env : Environment) {
        if(model == null) throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(this, env);
    }

    constructor() {
        super();
        if(this.constantValue===undefined) this.constantValue = null;
    }
}
Expression["__class"] = "freemarker.core.Expression";


export namespace Expression {

    export class ReplacemenetState {
        /**
         * If the replacement expression is not in use yet, we don't have to clone it.
         */
        replacementAlreadyInUse : boolean;

        constructor() {
            if(this.replacementAlreadyInUse===undefined) this.replacementAlreadyInUse = false;
        }
    }
    ReplacemenetState["__class"] = "freemarker.core.Expression.ReplacemenetState";

}



var __Function = Function;
