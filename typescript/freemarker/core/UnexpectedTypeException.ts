/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateCollectionModelEx } from '../template/TemplateCollectionModelEx';
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { Environment } from './Environment';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';
import { Expression } from './Expression';
import { InvalidReferenceException } from './InvalidReferenceException';
import { _UnexpectedTypeErrorExplainerTemplateModel } from './_UnexpectedTypeErrorExplainerTemplateModel';
import { _DelayedAOrAn } from './_DelayedAOrAn';
import { _DelayedJQuote } from './_DelayedJQuote';
import { _DelayedFTLTypeDescription } from './_DelayedFTLTypeDescription';

/**
 * The type of a value differs from what was expected.
 * 
 * @since 2.3.20
 * @param {Environment} env
 * @param {String} description
 * @class
 * @extends TemplateException
 */
export class UnexpectedTypeException extends TemplateException {
    public constructor(blamed? : any, model? : any, expectedTypesDesc? : any, expectedTypes? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((typeof tip === 'string') || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(null, env, blamed, UnexpectedTypeException.newDesciptionBuilder(blamed, null, model, expectedTypesDesc, expectedTypes, env).tip$java_lang_String(tip));
            (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(tip[0] != null))) || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[4];
            super(null, env, blamed, (o => o.tips.apply(o, tips))(UnexpectedTypeException.newDesciptionBuilder(blamed, null, model, expectedTypesDesc, expectedTypes, env)));
            (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        } else if(((typeof blamed === 'string') || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(tip[0] != null))) || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let blamedAssignmentTargetVarName : any = __args[0];
            let tips : any = __args[4];
            super(null, env, null, (o => o.tips.apply(o, tips))(UnexpectedTypeException.newDesciptionBuilder(null, blamedAssignmentTargetVarName, model, expectedTypesDesc, expectedTypes, env)));
            (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((tip != null && tip instanceof <any>Environment) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[4];
            super(null, env, blamed, UnexpectedTypeException.newDesciptionBuilder(blamed, null, model, expectedTypesDesc, expectedTypes, env));
            (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && ((typeof model === 'string') || model === null) && expectedTypesDesc === undefined && expectedTypes === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(description, env);
            (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && expectedTypesDesc === undefined && expectedTypes === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(null, env, null, description);
            (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        } else throw new Error('invalid overload');
    }

    /**
     * @param {String} blamedAssignmentTargetVarName Used for assignments that use {@code +=} and such, in which case the {@code blamed} expression
     * parameter will be null {@code null} and this parameter will be non-{null}.
     * @param {Expression} blamed
     * @param {*} model
     * @param {String} expectedTypesDesc
     * @param {Array} expectedTypes
     * @param {Environment} env
     * @return {_ErrorDescriptionBuilder}
     * @private
     */
    /*private*/ static newDesciptionBuilder(blamed : Expression, blamedAssignmentTargetVarName : string, model : TemplateModel, expectedTypesDesc : string, expectedTypes : Array, env : Environment) : _ErrorDescriptionBuilder {
        if(model == null) throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(blamed, env);
        let errorDescBuilder : _ErrorDescriptionBuilder = <any>new (__Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>UnexpectedTypeException.unexpectedTypeErrorDescription(expectedTypesDesc, blamed, blamedAssignmentTargetVarName, model)))).blame(blamed).showBlamer(true);
        if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.core._UnexpectedTypeErrorExplainerTemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.core._UnexpectedTypeErrorExplainerTemplateModel") >= 0)) {
            let tip : Array<any> = (<_UnexpectedTypeErrorExplainerTemplateModel><any>model).explainTypeError(expectedTypes);
            if(tip != null) {
                (o => o.tip.apply(o, tip))(errorDescBuilder);
            }
        }
        if((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) && (/* contains */(/* asList */expectedTypes.slice(0).indexOf(<any>("freemarker.template.TemplateSequenceModel")) >= 0) || /* contains */(/* asList */expectedTypes.slice(0).indexOf(<any>("freemarker.template.TemplateCollectionModelEx")) >= 0))) {
            errorDescBuilder.tip$java_lang_String("As the problematic value contains a collection of items, you could convert it to a sequence like someValue?sequence. Be sure though that you won\'t have a large number of items, as all will be held in memory one the same time.");
        }
        return errorDescBuilder;
    }

    /*private*/ static unexpectedTypeErrorDescription(expectedTypesDesc : string, blamed : Expression, blamedAssignmentTargetVarName : string, model : TemplateModel) : Array {
        return ["Expected ", new _DelayedAOrAn(expectedTypesDesc), ", but ", (blamedAssignmentTargetVarName == null?blamed != null?"this":"the expression":["assignment target variable ", new _DelayedJQuote(blamedAssignmentTargetVarName)]), " has evaluated to ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(model)), (blamed != null?":":".")];
    }
}
UnexpectedTypeException["__class"] = "freemarker.core.UnexpectedTypeException";
UnexpectedTypeException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
