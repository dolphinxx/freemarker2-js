/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelIterator} from '../template/TemplateModelIterator';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {TemplateElement} from './TemplateElement';
import {TemplateElements} from './TemplateElements';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_CoreStringUtils} from './_CoreStringUtils';
import {Expression} from './Expression';
import {_MessageUtil} from './_MessageUtil';
import {LocalContext} from './LocalContext';
import {TemplateObject} from './TemplateObject';
import {LocalContextStack} from './LocalContextStack';
import {InvalidReferenceException} from './InvalidReferenceException';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {_DelayedJQuote} from './_DelayedJQuote';
import {ParameterRole} from './ParameterRole';
import {Map} from '../../java/util/Map';

/**
 * An element representing a macro declaration.
 * 
 * @deprecated Subject to be changed or renamed any time; no "stable" replacement exists yet.
 * @extends TemplateElement
 * @class
 */
export class Macro extends TemplateElement implements TemplateModel {
    static DO_NOTHING_MACRO : Macro; public static DO_NOTHING_MACRO_$LI$() : Macro { if(Macro.DO_NOTHING_MACRO == null) Macro.DO_NOTHING_MACRO = new Macro(".pass", [], new Map<any, any>(), null, false, TemplateElements.EMPTY_$LI$()); return Macro.DO_NOTHING_MACRO; };

    static TYPE_MACRO : number = 0;

    static TYPE_FUNCTION : number = 1;

    /*private*/ name : string;

    /*private*/ paramNames : Array<any>;

    /*private*/ paramDefaults : Map<any, any>;

    /*private*/ catchAllParamName : string;

    /*private*/ function : boolean;

    constructor(name : string, argumentNames : Array<any>, args : Map<any, any>, catchAllParamName : string, __function : boolean, children : TemplateElements) {
        super();
        if(this.name===undefined) this.name = null;
        if(this.paramNames===undefined) this.paramNames = null;
        if(this.paramDefaults===undefined) this.paramDefaults = null;
        if(this.catchAllParamName===undefined) this.catchAllParamName = null;
        if(this.function===undefined) this.function = false;
        this.name = name;
        this.paramNames = <Array<any>>/* toArray */argumentNames.slice(0);
        this.paramDefaults = args;
        this.function = __function;
        this.catchAllParamName = catchAllParamName;
        this.setChildren(children);
    }

    public getCatchAll() : string {
        return this.catchAllParamName;
    }

    public getArgumentNames() : Array<any> {
        return /* clone */this.paramNames.slice(0);
    }

    getArgumentNamesInternal() : Array<any> {
        return this.paramNames;
    }

    hasArgNamed(name : string) : boolean {
        return /* containsKey */this.paramDefaults.has(name);
    }

    public getName() : string {
        return this.name;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        env.visitMacroDef(this);
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @param {boolean} inStringLiteral
     * @return {String}
     */
    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    dump$boolean(canonical : boolean) : string {
        let sb : StringBuilder = new StringBuilder("");
        if(canonical) sb.append('<');
        sb.append(this.getNodeTypeSymbol());
        sb.append(' ');
        sb.append(_CoreStringUtils.toFTLTopLevelTragetIdentifier(this.name));
        if(this.function) sb.append('(');
        let argCnt : number = this.paramNames.length;
        for(let i : number = 0; i < argCnt; i++) {
            if(this.function) {
                if(i !== 0) {
                    sb.append(", ");
                }
            } else {
                sb.append(' ');
            }
            let argName : string = this.paramNames[i];
            sb.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(argName));
            if(this.paramDefaults != null && /* get */this.paramDefaults.get(argName) != null) {
                sb.append('=');
                let defaultExpr : Expression = <Expression>/* get */this.paramDefaults.get(argName);
                if(this.function) {
                    sb.append(defaultExpr.getCanonicalForm());
                } else {
                    _MessageUtil.appendExpressionAsUntearable(sb, defaultExpr);
                }
            }
        }
        if(this.catchAllParamName != null) {
            if(this.function) {
                if(argCnt !== 0) {
                    sb.append(", ");
                }
            } else {
                sb.append(' ');
            }
            sb.append(this.catchAllParamName);
            sb.append("...");
        }
        if(this.function) sb.append(')');
        if(canonical) {
            sb.append('>');
            sb.append(this.getChildrenCanonicalForm());
            sb.append("</").append(this.getNodeTypeSymbol()).append('>');
        }
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.function?"#function":"#macro";
    }

    public isFunction() : boolean {
        return this.function;
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1 + this.paramNames.length * 2 + 1 + 1;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx === 0) {
            return this.name;
        } else {
            let argDescsEnd : number = this.paramNames.length * 2 + 1;
            if(idx < argDescsEnd) {
                let paramName : string = this.paramNames[((idx - 1) / 2|0)];
                if(idx % 2 !== 0) {
                    return paramName;
                } else {
                    return /* get */this.paramDefaults.get(paramName);
                }
            } else if(idx === argDescsEnd) {
                return this.catchAllParamName;
            } else if(idx === argDescsEnd + 1) {
                return this.function?Macro.TYPE_FUNCTION:Macro.TYPE_MACRO;
            } else {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx === 0) {
            return ParameterRole.ASSIGNMENT_TARGET_$LI$();
        } else {
            let argDescsEnd : number = this.paramNames.length * 2 + 1;
            if(idx < argDescsEnd) {
                if(idx % 2 !== 0) {
                    return ParameterRole.PARAMETER_NAME_$LI$();
                } else {
                    return ParameterRole.PARAMETER_DEFAULT_$LI$();
                }
            } else if(idx === argDescsEnd) {
                return ParameterRole.CATCH_ALL_PARAMETER_NAME_$LI$();
            } else if(idx === argDescsEnd + 1) {
                return ParameterRole.AST_NODE_SUBTYPE_$LI$();
            } else {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return true;
    }
}
Macro["__class"] = "freemarker.core.Macro";
Macro["__interfaces"] = ["freemarker.template.TemplateModel"];



export namespace Macro {

    export class Context implements LocalContext {
        public __parent: any;
        localVars : /*Environment.Namespace*/any;

        callPlace : TemplateObject;

        nestedContentNamespace : /*Environment.Namespace*/any;

        nestedContentParameterNames : Array<any>;

        prevLocalContextStack : LocalContextStack;

        prevMacroContext : Macro.Context;

        constructor(__parent: any, env : /*Environment*/any, callPlace : TemplateObject, nestedContentParameterNames : Array<any>) {
            this.__parent = __parent;
            if(this.localVars===undefined) this.localVars = null;
            if(this.callPlace===undefined) this.callPlace = null;
            if(this.nestedContentNamespace===undefined) this.nestedContentNamespace = null;
            if(this.nestedContentParameterNames===undefined) this.nestedContentParameterNames = null;
            if(this.prevLocalContextStack===undefined) this.prevLocalContextStack = null;
            if(this.prevMacroContext===undefined) this.prevMacroContext = null;
            this.localVars = new (require('./Environment').Environment).Namespace(this.__parent);
            this.callPlace = callPlace;
            this.nestedContentNamespace = env.getCurrentNamespace();
            this.nestedContentParameterNames = nestedContentParameterNames;
            this.prevLocalContextStack = env.getLocalContextStack();
            this.prevMacroContext = env.getCurrentMacroContext();
        }

        getMacro() : Macro {
            return this.__parent;
        }

        sanityCheck(env : /*Environment*/any) {
            let resolvedAnArg : boolean;
            let hasUnresolvedArg : boolean;
            let firstUnresolvedExpression : Expression;
            let firstReferenceException : InvalidReferenceException;
            do {
                firstUnresolvedExpression = null;
                firstReferenceException = null;
                resolvedAnArg = hasUnresolvedArg = false;
                for(let i : number = 0; i < this.__parent.paramNames.length; ++i) {
                    let argName : string = this.__parent.paramNames[i];
                    if(this.localVars.get$java_lang_String(argName) == null) {
                        let valueExp : Expression = <Expression>/* get */this.__parent.paramDefaults.get(argName);
                        if(valueExp != null) {
                            try {
                                let tm : TemplateModel = valueExp.eval(env);
                                if(tm == null) {
                                    if(!hasUnresolvedArg) {
                                        firstUnresolvedExpression = valueExp;
                                        hasUnresolvedArg = true;
                                    }
                                } else {
                                    this.localVars.put$java_lang_String$java_lang_Object(argName, tm);
                                    resolvedAnArg = true;
                                }
                            } catch(e) {
                                if(!hasUnresolvedArg) {
                                    hasUnresolvedArg = true;
                                    firstReferenceException = e;
                                }
                            }
                        } else if(!env.isClassicCompatible()) {
                            let argWasSpecified : boolean = this.localVars.containsKey(argName);
                            throw new _MiscTemplateException(env, (o => o.tip.apply(o, argWasSpecified?["If the parameter value expression on the caller side is known to be legally null/missing, you may want to specify a default value for it with the \"!\" operator, like paramValue!defaultValue."]:["If the omission was deliberate, you may consider making the parameter optional in the macro by specifying a default value for it, like ", "<#macro macroName paramName=defaultExpr>", ")"]))(new _ErrorDescriptionBuilder(["When calling ", (this.__parent.isFunction()?"function":"macro"), " ", new _DelayedJQuote(this.__parent.name), ", required parameter ", new _DelayedJQuote(argName), " (parameter #", i + 1, ") was ", (argWasSpecified?"specified, but had null/missing value.":"not specified.")])));
                        }
                    }
                }
            } while((resolvedAnArg && hasUnresolvedArg));
            if(hasUnresolvedArg) {
                if(firstReferenceException != null) {
                    throw firstReferenceException;
                } else if(!env.isClassicCompatible()) {
                    throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(firstUnresolvedExpression, env);
                }
            }
        }

        /**
         * @return {*} the local variable of the given name
         * or null if it doesn't exist.
         * @param {String} name
         */
        public getLocalVariable(name : string) : TemplateModel {
            return this.localVars.get$java_lang_String(name);
        }

        getLocals() : /*Environment.Namespace*/any {
            return this.localVars;
        }

        /**
         * Set a local variable in this macro
         * @param {String} name
         * @param {*} var
         */
        setLocalVar(name : string, __var : TemplateModel) {
            this.localVars.put$java_lang_String$java_lang_Object(name, __var);
        }

        public getLocalVariableNames() : Array<any> {
            let result : Array<any> = <any>([]);
            for(let it : TemplateModelIterator = this.localVars.keys().iterator(); it.hasNext(); ) {
                /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(result, (<TemplateScalarModel><any>it.next()).getAsString());
            }
            return result;
        }
    }
    Context["__class"] = "freemarker.core.Macro.Context";
    Context["__interfaces"] = ["freemarker.core.LocalContext"];


}





Macro.DO_NOTHING_MACRO_$LI$();
