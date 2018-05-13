/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {Token} from './Token';
import {ClassUtil} from "../template/utility/ClassUtil";
import {TemplateObject} from "./TemplateObject";

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
    abstract _eval(env : /*Environment*/any) : TemplateModel;

    abstract isLiteral() : boolean;

    constantValue : TemplateModel;

    public setLocation$freemarker_template_Template$int$int$int$int(template : /*Template*/any, beginColumn : number, beginLine : number, endColumn : number, endLine : number) {
        super.setLocation$freemarker_template_Template$int$int$int$int(template, beginColumn, beginLine, endColumn, endLine);
        if(this.isLiteral()) {
            try {
                this.constantValue = this._eval(null);
            } catch(e) {
            }
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
        const Template = require('../template/Template').Template;
        if(((template != null && template instanceof <any>Template) || template === null) && ((typeof beginColumn === 'number') || beginColumn === null) && ((typeof beginLine === 'number') || beginLine === null) && ((typeof endColumn === 'number') || endColumn === null) && ((typeof endLine === 'number') || endLine === null)) {
            return <any>this.setLocation$freemarker_template_Template$int$int$int$int(template, beginColumn, beginLine, endColumn, endLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && ((ClassUtil.isInstanceOf(endColumn, 'freemarker.core.TemplateElements')) || endColumn === null) && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(template, beginColumn, beginLine, endColumn);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((ClassUtil.isInstanceOf(beginLine, 'freemarker.core.TemplateObject')) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_TemplateObject(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((ClassUtil.isInstanceOf(beginColumn, 'freemarker.core.TemplateObject')) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((ClassUtil.isInstanceOf(beginColumn, 'freemarker.core.TemplateObject')) || beginColumn === null) && ((ClassUtil.isInstanceOf(beginLine, 'freemarker.core.TemplateObject')) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(template, beginColumn, beginLine);
        } else throw new Error('invalid overload');
    }

    /**
     * @deprecated At the moment FreeMarker has no API for this with backward-compatibility promises.
     * @param {Environment} env
     * @return {*}
     */
    public getAsTemplateModel(env : /*Environment*/any) : TemplateModel {
        return this.eval(env);
    }

    eval(env : /*Environment*/any) : TemplateModel {
        try {
            return this.constantValue != null?this.constantValue:this._eval(env);
        } catch(__e) {
            if(ClassUtil.isInstanceOf(__e, 'freemarker.core.FlowControlException')) {
                throw __e;

            }
            if(ClassUtil.isInstanceOf(__e, 'freemarker.template.TemplateException')) {
                throw __e;

            }
            let e: Error = <Error>__e;
            if (env != null && (require('./EvalUtil').EvalUtil).shouldWrapUncheckedException(e, env)) {
                throw new (require('./_MiscTemplateException')._MiscTemplateException)(this, e, env, "Expression has thrown an unchecked exception; see the cause exception.");
            } else if (e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.RuntimeException") >= 0) || e != null && e instanceof <any>Error) {
                throw <Error>e;
            } else {
                throw new (require('../template/utility/UndeclaredThrowableException').UndeclaredThrowableException)(e);
            }
        }
    }

    evalAndCoerceToPlainText$freemarker_core_Environment(env : /*Environment*/any) : string {
        return (require('./EvalUtil').EvalUtil).coerceModelToPlainText(this.eval(env), this, null, env);
    }

    public evalAndCoerceToPlainText$freemarker_core_Environment$java_lang_String(env : /*Environment*/any, seqTip : string) : string {
        return (require('./EvalUtil').EvalUtil).coerceModelToPlainText(this.eval(env), this, seqTip, env);
    }

    /**
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @param {Environment} env
     * @return {String}
     */
    public evalAndCoerceToPlainText(env? : any, seqTip? : any) : any {
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((typeof seqTip === 'string') || seqTip === null)) {
            return <any>this.evalAndCoerceToPlainText$freemarker_core_Environment$java_lang_String(env, seqTip);
        } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && seqTip === undefined) {
            return <any>this.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        } else throw new Error('invalid overload');
    }

    evalAndCoerceToStringOrMarkup$freemarker_core_Environment(env : /*Environment*/any) : any {
        return (require('./EvalUtil').EvalUtil).coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(this.eval(env), this, null, env);
    }

    public evalAndCoerceToStringOrMarkup$freemarker_core_Environment$java_lang_String(env : /*Environment*/any, seqTip : string) : any {
        return (require('./EvalUtil').EvalUtil).coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(this.eval(env), this, seqTip, env);
    }

    /**
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @param {Environment} env
     * @return {Object}
     */
    public evalAndCoerceToStringOrMarkup(env? : any, seqTip? : any) : any {
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((typeof seqTip === 'string') || seqTip === null)) {
            return <any>this.evalAndCoerceToStringOrMarkup$freemarker_core_Environment$java_lang_String(env, seqTip);
        } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && seqTip === undefined) {
            return <any>this.evalAndCoerceToStringOrMarkup$freemarker_core_Environment(env);
        } else throw new Error('invalid overload');
    }

    evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment(env : /*Environment*/any) : string {
        return (require('./EvalUtil').EvalUtil).coerceModelToStringOrUnsupportedMarkup(this.eval(env), this, null, env);
    }

    public evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment$java_lang_String(env : /*Environment*/any, seqTip : string) : string {
        return (require('./EvalUtil').EvalUtil).coerceModelToStringOrUnsupportedMarkup(this.eval(env), this, seqTip, env);
    }

    /**
     * @param {String} seqTip Tip to display if the value type is not coercable, but it's sequence or collection.
     * @param {Environment} env
     * @return {String}
     */
    public evalAndCoerceToStringOrUnsupportedMarkup(env? : any, seqTip? : any) : any {
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((typeof seqTip === 'string') || seqTip === null)) {
            return <any>this.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment$java_lang_String(env, seqTip);
        } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && seqTip === undefined) {
            return <any>this.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment(env);
        } else throw new Error('invalid overload');
    }

    evalToNumber(env : /*Environment*/any) : number {
        let model : TemplateModel = this.eval(env);
        return this.modelToNumber(model, env);
    }

    modelToNumber(model : TemplateModel, env : /*Environment*/any) : number {
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateNumberModel")) {
            return (require('./EvalUtil').EvalUtil).modelToNumber(/*<TemplateNumberModel>*/<any>model, this);
        } else {
            throw new (require('./NonNumericalException').NonNumericalException)(this, model, env);
        }
    }

    evalToBoolean$freemarker_core_Environment(env : /*Environment*/any) : boolean {
        return this.evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(env, null);
    }

    evalToBoolean$freemarker_template_Configuration(cfg : /*Configuration*/any) : boolean {
        return this.evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(null, cfg);
    }

    evalToNonMissing(env : /*Environment*/any) : TemplateModel {
        let result : TemplateModel = this.eval(env);
        this.assertNonNull(result, env);
        return result;
    }

    public evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(env : /*Environment*/any, cfg : /*Configuration*/any) : boolean {
        let model : TemplateModel = this.eval(env);
        return this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, env, cfg);
    }

    public evalToBoolean(env? : any, cfg? : any) : any {
        if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((ClassUtil.isInstanceOf(cfg, 'freemarker.template.Configuration')) || cfg === null)) {
            return <any>this.evalToBoolean$freemarker_core_Environment$freemarker_template_Configuration(env, cfg);
        } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_core_Environment(env);
        } else if(((ClassUtil.isInstanceOf(cfg, 'freemarker.template.Configuration')) || env === null) && cfg === undefined) {
            return <any>this.evalToBoolean$freemarker_template_Configuration(env);
        } else throw new Error('invalid overload');
    }

    modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment(model : TemplateModel, env : /*Environment*/any) : boolean {
        return this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, env, null);
    }

    modelToBoolean$freemarker_template_TemplateModel$freemarker_template_Configuration(model : TemplateModel, cfg : /*Configuration*/any) : boolean {
        return this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, null, cfg);
    }

    public modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model : TemplateModel|boolean, env : /*Environment*/any, cfg : /*Configuration*/any) : boolean {
        if(typeof model === 'boolean') {
            return <boolean>model;
        }
        model = <TemplateModel>model;
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateBooleanModel")) {
            return (/*<TemplateBooleanModel>*/<any>model).getAsBoolean();
        } else if(env != null?env.isClassicCompatible():cfg.isClassicCompatible()) {
            return model != null && !Expression.isEmpty(model);
        } else {
            throw new (require('./NonBooleanException').NonBooleanException)(this, model, env);
        }
    }

    public modelToBoolean(model? : any, env? : any, cfg? : any) : any {
        if(((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((ClassUtil.isInstanceOf(cfg, 'freemarker.template.Configuration')) || cfg === null)) {
            return <any>this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment$freemarker_template_Configuration(model, env, cfg);
        } else if(((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && cfg === undefined) {
            return <any>this.modelToBoolean$freemarker_template_TemplateModel$freemarker_core_Environment(model, env);
        } else if(((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.template.Configuration')) || env === null) && cfg === undefined) {
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
        if(ClassUtil.isInstanceOf(model, 'freemarker.ext.beans')) {
            return (/*<BeanModel>*/<any>model).isEmpty();
        } else if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateSequenceModel")) {
            return (/*<TemplateSequenceModel>*/<any>model).size() === 0;
        } else if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateScalarModel")) {
            let s : string = (/*<TemplateScalarModel>*/<any>model).getAsString();
            return (s == null || s.length === 0);
        } else if(model == null) {
            return true;
        } else if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.core.TemplateMarkupOutputModel")) {
            let mo : /*TemplateMarkupOutputModel<any>*/any = /*<TemplateMarkupOutputModel<any>>*/<any>model;
            return mo.getOutputFormat().isEmpty(mo);
        } else if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateCollectionModel")) {
            return !(/*<TemplateCollectionModel>*/<any>model).iterator().hasNext();
        } else if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateHashModel")) {
            return (/*<TemplateHashModel>*/<any>model).isEmpty();
        } else return !(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateNumberModel")) && !(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateDateModel")) && !(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateBooleanModel"));
    }

    assertNonNull(model : TemplateModel, env : /*Environment*/any) {
        if(model == null) throw (require('./InvalidReferenceException').InvalidReferenceException).getInstance$freemarker_core_Expression$freemarker_core_Environment(this, env);
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