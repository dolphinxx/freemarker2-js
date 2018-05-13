/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateException} from '../template/TemplateException';
import {TemplateModel} from '../template/TemplateModel';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';
import {InvalidReferenceException} from './InvalidReferenceException';
import {_UnexpectedTypeErrorExplainerTemplateModel} from './_UnexpectedTypeErrorExplainerTemplateModel';
import {_DelayedAOrAn} from './_DelayedAOrAn';
import {_DelayedJQuote} from './_DelayedJQuote';
import {_DelayedFTLTypeDescription} from './_DelayedFTLTypeDescription';
import {ClassUtil} from "../template/utility/ClassUtil";

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
        if (typeof arguments[0] === 'string') {
            super(null, arguments[5], null, UnexpectedTypeException.newDesciptionBuilder(null, arguments[0], arguments[1], arguments[2], arguments[3], arguments[5]).tips(arguments[4]));
            return;
        }
        if (arguments[0] instanceof Expression) {
            if (arguments.length === 5) {
                super(null, arguments[4], arguments[0], UnexpectedTypeException.newDesciptionBuilder(arguments[0], null, arguments[1], arguments[2], arguments[3], arguments[4]));
                return;
            }
            if (typeof arguments[4] === 'string') {

                super(null, arguments[5], arguments[1], UnexpectedTypeException.newDesciptionBuilder(arguments[0], null, arguments[1], arguments[2], arguments[3], arguments[5]).tip(arguments[4]));
            } else {
                super(null, arguments[5], arguments[1], UnexpectedTypeException.newDesciptionBuilder(arguments[0], null, arguments[1], arguments[2], arguments[3], arguments[5]).tips(arguments[4]));

            }
            if (typeof arguments[1] === 'string') {
                super(arguments[1], arguments[0]);
                return;
            }
            super(null, arguments[0], null, arguments[1]);
            return;
        }
        // if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((typeof tip === 'string') || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     super(null, env, blamed, UnexpectedTypeException.newDesciptionBuilder(blamed, null, model, expectedTypesDesc, expectedTypes, env).tip$java_lang_String(tip));
        //     (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        // } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(tip[0] != null))) || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let tips : any = __args[4];
        //     super(null, env, blamed, (o => o.tips.apply(o, tips))(UnexpectedTypeException.newDesciptionBuilder(blamed, null, model, expectedTypesDesc, expectedTypes, env)));
        //     (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        // } else if(((typeof blamed === 'string') || blamed === null) && ((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(tip[0] != null))) || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let blamedAssignmentTargetVarName : any = __args[0];
        //     let tips : any = __args[4];
        //     super(null, env, null, (o => o.tips.apply(o, tips))(UnexpectedTypeException.newDesciptionBuilder(null, blamedAssignmentTargetVarName, model, expectedTypesDesc, expectedTypes, env)));
        //     (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        // } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((typeof expectedTypesDesc === 'string') || expectedTypesDesc === null) && ((expectedTypes != null && expectedTypes instanceof <any>Array && (expectedTypes.length==0 || expectedTypes[0] == null ||(expectedTypes[0] != null))) || expectedTypes === null) && ((ClassUtil.isInstanceOf(tip, 'freemarker.core.Environment')) || tip === null) && env === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let env : any = __args[4];
        //     super(null, env, blamed, UnexpectedTypeException.newDesciptionBuilder(blamed, null, model, expectedTypesDesc, expectedTypes, env));
        //     (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        // } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((typeof model === 'string') || model === null) && expectedTypesDesc === undefined && expectedTypes === undefined && tip === undefined && env === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let env : any = __args[0];
        //     let description : any = __args[1];
        //     super(description, env);
        //     (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        // } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && expectedTypesDesc === undefined && expectedTypes === undefined && tip === undefined && env === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let env : any = __args[0];
        //     let description : any = __args[1];
        //     super(null, env, null, description);
        //     (<any>Object).setPrototypeOf(this, UnexpectedTypeException.prototype);
        // } else throw new Error('invalid overload');
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
    /*private*/ static newDesciptionBuilder(blamed : Expression, blamedAssignmentTargetVarName : string, model : TemplateModel, expectedTypesDesc : string, expectedTypes : Array<any>, env : /*Environment*/any) : _ErrorDescriptionBuilder {
        if(model == null) throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(blamed, env);
        let errorDescBuilder : _ErrorDescriptionBuilder = <any>new (Function.prototype.bind.apply(_ErrorDescriptionBuilder, [null].concat(<any[]>UnexpectedTypeException.unexpectedTypeErrorDescription(expectedTypesDesc, blamed, blamedAssignmentTargetVarName, model)))).blame(blamed).showBlamer(true);
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.core._UnexpectedTypeErrorExplainerTemplateModel")) {
            let tip : Array<any> = (<_UnexpectedTypeErrorExplainerTemplateModel><any>model).explainTypeError(expectedTypes);
            if(tip != null) {
                (o => o.tip.apply(o, tip))(errorDescBuilder);
            }
        }
        if((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateCollectionModel")) && (/* contains */(/* asList */expectedTypes.slice(0).indexOf(<any>("freemarker.template.TemplateSequenceModel")) >= 0) || /* contains */(/* asList */expectedTypes.slice(0).indexOf(<any>("freemarker.template.TemplateCollectionModelEx")) >= 0))) {
            errorDescBuilder.tip$java_lang_String("As the problematic value contains a collection of items, you could convert it to a sequence like someValue?sequence. Be sure though that you won\'t have a large number of items, as all will be held in memory one the same time.");
        }
        return errorDescBuilder;
    }

    /*private*/ static unexpectedTypeErrorDescription(expectedTypesDesc : string, blamed : Expression, blamedAssignmentTargetVarName : string, model : TemplateModel) : Array<any> {
        return ["Expected ", new _DelayedAOrAn(expectedTypesDesc), ", but ", (blamedAssignmentTargetVarName == null?blamed != null?"this":"the expression":["assignment target variable ", new _DelayedJQuote(blamedAssignmentTargetVarName)]), " has evaluated to ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(model)), (blamed != null?":":".")];
    }
}
UnexpectedTypeException["__class"] = "freemarker.core.UnexpectedTypeException";
UnexpectedTypeException["__interfaces"] = ["java.io.Serializable"];





