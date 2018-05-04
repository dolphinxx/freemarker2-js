/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { TemplateElement } from './TemplateElement';
import { Expression } from './Expression';
import { FMParserConstants } from './FMParserConstants';
import { ArithmeticExpression } from './ArithmeticExpression';
import { BugException } from './BugException';
import { Environment } from './Environment';
import { NonNamespaceException } from './NonNamespaceException';
import { InvalidReferenceException } from './InvalidReferenceException';
import { AddConcatExpression } from './AddConcatExpression';
import { EvalUtil } from './EvalUtil';
import { NonNumericalException } from './NonNumericalException';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { AssignmentInstruction } from './AssignmentInstruction';
import { _CoreStringUtils } from './_CoreStringUtils';
import { ParameterRole } from './ParameterRole';

/**
 * An instruction that makes a single assignment, like [#local x=1].
 * This is also used as the child of {link AssignmentInstruction}, if there are multiple assignments in the same tag,
 * like in [#local x=1 x=2].
 * @extends TemplateElement
 * @class
 */
export class Assignment extends TemplateElement {
    static OPERATOR_TYPE_EQUALS : number = 65536;

    static OPERATOR_TYPE_PLUS_EQUALS : number = 65537;

    static OPERATOR_TYPE_PLUS_PLUS : number = 65538;

    static OPERATOR_TYPE_MINUS_MINUS : number = 65539;

    /*private*/ scope : number;

    /*private*/ variableName : string;

    /*private*/ operatorType : number;

    /*private*/ valueExp : Expression;

    /*private*/ namespaceExp : Expression;

    static NAMESPACE : number = 1;

    static LOCAL : number = 2;

    static GLOBAL : number = 3;

    static ONE : number = 1;

    constructor(variableName : string, operator : number, valueExp : Expression, scope : number) {
        super();
        if(this.scope===undefined) this.scope = 0;
        if(this.variableName===undefined) this.variableName = null;
        if(this.operatorType===undefined) this.operatorType = 0;
        if(this.valueExp===undefined) this.valueExp = null;
        if(this.namespaceExp===undefined) this.namespaceExp = null;
        this.scope = scope;
        this.variableName = variableName;
        if(operator === FMParserConstants.EQUALS) {
            this.operatorType = Assignment.OPERATOR_TYPE_EQUALS;
        } else {
            switch((operator)) {
            case FMParserConstants.PLUS_PLUS:
                this.operatorType = Assignment.OPERATOR_TYPE_PLUS_PLUS;
                break;
            case FMParserConstants.MINUS_MINUS:
                this.operatorType = Assignment.OPERATOR_TYPE_MINUS_MINUS;
                break;
            case FMParserConstants.PLUS_EQUALS:
                this.operatorType = Assignment.OPERATOR_TYPE_PLUS_EQUALS;
                break;
            case FMParserConstants.MINUS_EQUALS:
                this.operatorType = ArithmeticExpression.TYPE_SUBSTRACTION;
                break;
            case FMParserConstants.TIMES_EQUALS:
                this.operatorType = ArithmeticExpression.TYPE_MULTIPLICATION;
                break;
            case FMParserConstants.DIV_EQUALS:
                this.operatorType = ArithmeticExpression.TYPE_DIVISION;
                break;
            case FMParserConstants.MOD_EQUALS:
                this.operatorType = ArithmeticExpression.TYPE_MODULO;
                break;
            default:
                throw new BugException();
            }
        }
        this.valueExp = valueExp;
    }

    setNamespaceExp(namespaceExp : Expression) {
        if(this.scope !== Assignment.NAMESPACE && namespaceExp != null) throw new BugException();
        this.namespaceExp = namespaceExp;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let namespace : Environment.Namespace;
        if(this.namespaceExp == null) {
            switch((this.scope)) {
            case 2 /* LOCAL */:
                namespace = null;
                break;
            case 3 /* GLOBAL */:
                namespace = env.getGlobalNamespace();
                break;
            case 1 /* NAMESPACE */:
                namespace = env.getCurrentNamespace();
                break;
            default:
                throw new BugException("Unexpected scope type: " + this.scope);
            }
        } else {
            let namespaceTM : TemplateModel = this.namespaceExp.eval(env);
            try {
                namespace = <Environment.Namespace><any>namespaceTM;
            } catch(e) {
                throw new NonNamespaceException(this.namespaceExp, namespaceTM, env);
            };
            if(namespace == null) {
                throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(this.namespaceExp, env);
            }
        }
        let value : TemplateModel;
        if(this.operatorType === Assignment.OPERATOR_TYPE_EQUALS) {
            value = this.valueExp.eval(env);
            if(value == null) {
                if(env.isClassicCompatible()) {
                    value = TemplateScalarModel.EMPTY_STRING;
                } else {
                    throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(this.valueExp, env);
                }
            }
        } else {
            let lhoValue : TemplateModel;
            if(namespace == null) {
                lhoValue = env.getLocalVariable(this.variableName);
            } else {
                lhoValue = namespace.get$java_lang_String(this.variableName);
            }
            if(this.operatorType === Assignment.OPERATOR_TYPE_PLUS_EQUALS) {
                if(lhoValue == null) {
                    if(env.isClassicCompatible()) {
                        lhoValue = TemplateScalarModel.EMPTY_STRING;
                    } else {
                        throw InvalidReferenceException.getInstance$int$java_lang_String$java_lang_String$freemarker_core_Environment(this.scope, this.variableName, this.getOperatorTypeAsString(), env);
                    }
                }
                value = this.valueExp.eval(env);
                if(value == null) {
                    if(env.isClassicCompatible()) {
                        value = TemplateScalarModel.EMPTY_STRING;
                    } else {
                        throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(this.valueExp, env);
                    }
                }
                value = AddConcatExpression._eval(env, this.namespaceExp, null, lhoValue, this.valueExp, value);
            } else {
                let lhoNumber : number;
                if(lhoValue != null && (lhoValue["__interfaces"] != null && lhoValue["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || lhoValue.constructor != null && lhoValue.constructor["__interfaces"] != null && lhoValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
                    lhoNumber = EvalUtil.modelToNumber(<TemplateNumberModel><any>lhoValue, null);
                } else if(lhoValue == null) {
                    throw InvalidReferenceException.getInstance$int$java_lang_String$java_lang_String$freemarker_core_Environment(this.scope, this.variableName, this.getOperatorTypeAsString(), env);
                } else {
                    throw new NonNumericalException(this.variableName, lhoValue, null, env);
                }
                if(this.operatorType === Assignment.OPERATOR_TYPE_PLUS_PLUS) {
                    value = AddConcatExpression._evalOnNumbers(env, this.getParentElement(), lhoNumber, Assignment.ONE);
                } else if(this.operatorType === Assignment.OPERATOR_TYPE_MINUS_MINUS) {
                    value = ArithmeticExpression._eval(env, this.getParentElement(), lhoNumber, ArithmeticExpression.TYPE_SUBSTRACTION, Assignment.ONE);
                } else {
                    let rhoNumber : number = this.valueExp.evalToNumber(env);
                    value = ArithmeticExpression._eval(env, this, lhoNumber, this.operatorType, rhoNumber);
                }
            }
        }
        if(namespace == null) {
            env.setLocalVariable(this.variableName, value);
        } else {
            namespace.put$java_lang_String$java_lang_Object(this.variableName, value);
        }
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        let buf : StringBuilder = new StringBuilder("");
        let dn : string = (this.getParentElement() != null && this.getParentElement() instanceof <any>AssignmentInstruction)?null:this.getNodeTypeSymbol();
        if(dn != null) {
            if(canonical) buf.append("<");
            buf.append(dn);
            buf.append(' ');
        }
        buf.append(_CoreStringUtils.toFTLTopLevelTragetIdentifier(this.variableName));
        if(this.valueExp != null) {
            buf.append(' ');
        }
        buf.append(this.getOperatorTypeAsString());
        if(this.valueExp != null) {
            buf.append(' ');
            buf.append(this.valueExp.getCanonicalForm());
        }
        if(dn != null) {
            if(this.namespaceExp != null) {
                buf.append(" in ");
                buf.append(this.namespaceExp.getCanonicalForm());
            }
            if(canonical) buf.append(">");
        }
        let result : string = buf.toString();
        return result;
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return Assignment.getDirectiveName(this.scope);
    }

    static getDirectiveName(scope : number) : string {
        if(scope === Assignment.LOCAL) {
            return "#local";
        } else if(scope === Assignment.GLOBAL) {
            return "#global";
        } else if(scope === Assignment.NAMESPACE) {
            return "#assign";
        } else {
            return "#{unknown_assignment_type}";
        }
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 5;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.variableName;
        case 1:
            return this.getOperatorTypeAsString();
        case 2:
            return this.valueExp;
        case 3:
            return this.scope;
        case 4:
            return this.namespaceExp;
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
        switch((idx)) {
        case 0:
            return ParameterRole.ASSIGNMENT_TARGET_$LI$();
        case 1:
            return ParameterRole.ASSIGNMENT_OPERATOR_$LI$();
        case 2:
            return ParameterRole.ASSIGNMENT_SOURCE_$LI$();
        case 3:
            return ParameterRole.VARIABLE_SCOPE_$LI$();
        case 4:
            return ParameterRole.NAMESPACE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }

    /*private*/ getOperatorTypeAsString() : string {
        if(this.operatorType === Assignment.OPERATOR_TYPE_EQUALS) {
            return "=";
        } else if(this.operatorType === Assignment.OPERATOR_TYPE_PLUS_EQUALS) {
            return "+=";
        } else if(this.operatorType === Assignment.OPERATOR_TYPE_PLUS_PLUS) {
            return "++";
        } else if(this.operatorType === Assignment.OPERATOR_TYPE_MINUS_MINUS) {
            return "--";
        } else {
            return ArithmeticExpression.getOperatorSymbol(this.operatorType) + "=";
        }
    }

    static scopeAsString(scope : number) : string {
        switch((scope)) {
        case 1 /* NAMESPACE */:
            return "template namespace";
        case 2 /* LOCAL */:
            return "local scope";
        case 3 /* GLOBAL */:
            return "global scope";
        default:
            throw Object.defineProperty(new Error("Unsupported scope: " + scope), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object','java.lang.AssertionError'] });
        }
    }
}
Assignment["__class"] = "freemarker.core.Assignment";



