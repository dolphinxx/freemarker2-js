/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateException} from '../template/TemplateException';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';
import {_DelayedJQuote} from './_DelayedJQuote';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * Creates and invalid reference exception that contains no programmatically extractable information about the
 * blamed expression. As such, try to avoid this constructor, unless need to raise this expression from outside
 * the FreeMarker core.
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends TemplateException
 */
export class InvalidReferenceException extends TemplateException {
    static FAST_INSTANCE : InvalidReferenceException = new InvalidReferenceException("Invalid reference. Details are unavilable, as this should have been handled by an FTL construct. If it wasn\'t, that\'s problably a bug in FreeMarker.", null);

    static TIP : Array<any> = ["If the failing expression is known to legally refer to something that\'s sometimes null or missing, either specify a default value like myOptionalVar!myDefault, or use ", "<#if myOptionalVar??>", "when-present", "<#else>", "when-missing", "</#if>", ". (These only cover the last step of the expression; to cover the whole expression, use parenthesis: (myOptionalVar.foo)!myDefault, (myOptionalVar.foo)??"];

    static TIP_MISSING_ASSIGNMENT_TARGET : Array<any> = ["If the target variable is known to be legally null or missing sometimes, instead of something like ", "<#assign x += 1>", ", you could write ", "<#if x??>", "<#assign x += 1>", "</#if>", " or ", "<#assign x = (x!0) + 1>"];

    static TIP_NO_DOLLAR : string = "Variable references must not start with \"$\", unless the \"$\" is really part of the variable name.";

    static TIP_LAST_STEP_DOT : string = "It\'s the step after the last dot that caused this error, not those before it.";

    static TIP_LAST_STEP_SQUARE_BRACKET : string = "It\'s the final [] step that caused this error, not those before it.";

    static TIP_JSP_TAGLIBS : string = "The \"JspTaglibs\" variable isn\'t a core FreeMarker feature; it\'s only available when templates are invoked through freemarker.ext.servlet.FreemarkerServlet (or other custom FreeMarker-JSP integration solution).";

    public constructor(description? : any, env? : any, expression? : any) {
        if(((description != null && description instanceof <any>_ErrorDescriptionBuilder) || description === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((expression != null && expression instanceof <any>Expression) || expression === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(null, env, expression, description);
            (<any>Object).setPrototypeOf(this, InvalidReferenceException.prototype);
        } else if(((typeof description === 'string') || description === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && expression === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super(description, env);
            (<any>Object).setPrototypeOf(this, InvalidReferenceException.prototype);
        } else if(((ClassUtil.isInstanceOf(description, 'freemarker.core.Environment')) || description === null) && env === undefined && expression === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super("Invalid reference: The expression has evaluated to null or refers to something that doesn\'t exist.", env);
            (<any>Object).setPrototypeOf(this, InvalidReferenceException.prototype);
        } else throw new Error('invalid overload');
    }

    static getInstance$freemarker_core_Expression$freemarker_core_Environment(blamed : Expression, env : /*Environment*/any) : InvalidReferenceException {
        if(env != null && env.getFastInvalidReferenceExceptions()) {
            return InvalidReferenceException.FAST_INSTANCE;
        } else {
            if(blamed != null) {
                let errDescBuilder : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder("The following has evaluated to null or missing:").blame(blamed);
                if(InvalidReferenceException.endsWithDollarVariable(blamed)) {
                    (o => o.tips.apply(o, [InvalidReferenceException.TIP_NO_DOLLAR].concat(<any[]>InvalidReferenceException.TIP)))(errDescBuilder);
                } else if(ClassUtil.isInstanceOf(blamed, 'freemarker.core.Dot')) {
                    let rho : string = (</*Dot*/any>blamed).getRHO();
                    let nameFixTip : string = null;
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("size",rho))) {
                        nameFixTip = "To query the size of a collection or map use ?size, like myList?size";
                    } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("length",rho))) {
                        nameFixTip = "To query the length of a string use ?length, like myString?size";
                    }
                    (o => o.tips.apply(o, nameFixTip == null?[InvalidReferenceException.TIP_LAST_STEP_DOT, InvalidReferenceException.TIP]:[InvalidReferenceException.TIP_LAST_STEP_DOT, nameFixTip, InvalidReferenceException.TIP]))(errDescBuilder);
                } else if(ClassUtil.isInstanceOf(blamed, 'freemarker.core.DynamicKeyName')) {
                    (o => o.tips.apply(o, [InvalidReferenceException.TIP_LAST_STEP_SQUARE_BRACKET].concat(<any[]>InvalidReferenceException.TIP)))(errDescBuilder);
                } else if((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Identifier')) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })((</*Identifier*/any>blamed).getName(),"JspTaglibs"))) {
                    (o => o.tips.apply(o, [InvalidReferenceException.TIP_JSP_TAGLIBS].concat(<any[]>InvalidReferenceException.TIP)))(errDescBuilder);
                } else {
                    (o => o.tip.apply(o, InvalidReferenceException.TIP))(errDescBuilder);
                }
                return new InvalidReferenceException(errDescBuilder, env, blamed);
            } else {
                return new InvalidReferenceException(env);
            }
        }
    }

    public static getInstance$int$java_lang_String$java_lang_String$freemarker_core_Environment(scope : number, missingAssignedVarName : string, assignmentOperator : string, env : /*Environment*/any) : InvalidReferenceException {
        if(env != null && env.getFastInvalidReferenceExceptions()) {
            return InvalidReferenceException.FAST_INSTANCE;
        } else {
            let errDescBuilder : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(["The target variable of the assignment, ", new _DelayedJQuote(missingAssignedVarName), ", was null or missing in the " + (require('./Assignment').Assignment).scopeAsString(scope) + ", and the \"", assignmentOperator, "\" operator must get its value from there before assigning to it."]);
            if(missingAssignedVarName.startsWith("$")) {
                (o => o.tips.apply(o, [InvalidReferenceException.TIP_NO_DOLLAR].concat(<any[]>InvalidReferenceException.TIP_MISSING_ASSIGNMENT_TARGET)))(errDescBuilder);
            } else {
                (o => o.tip.apply(o, InvalidReferenceException.TIP_MISSING_ASSIGNMENT_TARGET))(errDescBuilder);
            }
            return new InvalidReferenceException(errDescBuilder, env, null);
        }
    }

    /**
     * Used for assignments that use operators like {@code +=}, when the target variable was null/missing.
     * @param {number} scope
     * @param {String} missingAssignedVarName
     * @param {String} assignmentOperator
     * @param {Environment} env
     * @return {InvalidReferenceException}
     */
    public static getInstance(scope? : any, missingAssignedVarName? : any, assignmentOperator? : any, env? : any) : any {
        if(((typeof scope === 'number') || scope === null) && ((typeof missingAssignedVarName === 'string') || missingAssignedVarName === null) && ((typeof assignmentOperator === 'string') || assignmentOperator === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            return <any>InvalidReferenceException.getInstance$int$java_lang_String$java_lang_String$freemarker_core_Environment(scope, missingAssignedVarName, assignmentOperator, env);
        } else if(((scope != null && scope instanceof <any>Expression) || scope === null) && ((ClassUtil.isInstanceOf(missingAssignedVarName, 'freemarker.core.Environment')) || missingAssignedVarName === null) && assignmentOperator === undefined && env === undefined) {
            return <any>InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(scope, missingAssignedVarName);
        } else throw new Error('invalid overload');
    }

    /*private*/ static endsWithDollarVariable(blame : Expression) : boolean {
        return (ClassUtil.isInstanceOf(blame, 'freemarker.core.Identifier')) && /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)((</*Identifier*/any>blame).getName(), "$") || (ClassUtil.isInstanceOf(blame, 'freemarker.core.Dot')) && /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)((</*Dot*/any>blame).getRHO(), "$");
    }
}
InvalidReferenceException["__class"] = "freemarker.core.InvalidReferenceException";
InvalidReferenceException["__interfaces"] = ["java.io.Serializable"];