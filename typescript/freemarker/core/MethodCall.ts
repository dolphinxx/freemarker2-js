/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateException} from '../template/TemplateException';
import {TemplateMethodModel} from '../template/TemplateMethodModel';
import {TemplateModel} from '../template/TemplateModel';
import {NullWriter} from '../template/utility/NullWriter';
import {Writer} from '../../java/io/Writer';
import {Expression} from './Expression';
import {ListLiteral} from './ListLiteral';
import {Environment} from './Environment';
import {Macro} from './Macro';
import {_MiscTemplateException} from './_MiscTemplateException';
import {NonMethodException} from './NonMethodException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * A unary operator that calls a TemplateMethodModel.  It associates with the
 * <tt>Identifier</tt> or <tt>Dot</tt> to its left.
 * @extends Expression
 * @class
 */
export class MethodCall extends Expression {
    /*private*/ target : Expression;

    /*private*/ arguments : ListLiteral;

    public constructor(target? : any, __arguments? : any) {
        if(((target != null && target instanceof <any>Expression) || target === null) && ((__arguments != null && (__arguments instanceof Array)) || __arguments === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let __arguments : any = new ListLiteral(__args[1]);
                super();
                if(this.target===undefined) this.target = null;
                if(this.arguments===undefined) this.arguments = null;
                if(this.target===undefined) this.target = null;
                if(this.arguments===undefined) this.arguments = null;
                (() => {
                    this.target = target;
                    this.arguments = __arguments;
                })();
            }
        } else if(((target != null && target instanceof <any>Expression) || target === null) && ((__arguments != null && __arguments instanceof <any>ListLiteral) || __arguments === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.target===undefined) this.target = null;
            if(this.arguments===undefined) this.arguments = null;
            if(this.target===undefined) this.target = null;
            if(this.arguments===undefined) this.arguments = null;
            (() => {
                this.target = target;
                this.arguments = __arguments;
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let targetModel : TemplateModel = this.target.eval(env);
        if(targetModel != null && (targetModel["__interfaces"] != null && targetModel["__interfaces"].indexOf("freemarker.template.TemplateMethodModel") >= 0 || targetModel.constructor != null && targetModel.constructor["__interfaces"] != null && targetModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateMethodModel") >= 0)) {
            let targetMethod : TemplateMethodModel = <TemplateMethodModel><any>targetModel;
            let argumentStrings : Array<any> = (targetMethod != null && (targetMethod["__interfaces"] != null && targetMethod["__interfaces"].indexOf("freemarker.template.TemplateMethodModelEx") >= 0 || targetMethod.constructor != null && targetMethod.constructor["__interfaces"] != null && targetMethod.constructor["__interfaces"].indexOf("freemarker.template.TemplateMethodModelEx") >= 0))?this.arguments.getModelList(env):this.arguments.getValueList(env);
            let result : any = targetMethod.exec(argumentStrings);
            return env.getObjectWrapper()['wrap$java_lang_Object'](result);
        } else if(targetModel != null && targetModel instanceof <any>Macro) {
            let func : Macro = <Macro><any>targetModel;
            env.setLastReturnValue(null);
            if(!func.isFunction()) {
                throw new _MiscTemplateException(env, "A macro cannot be called in an expression. (Functions can be.)");
            }
            let prevOut : Writer = env.getOut();
            try {
                env.setOut(NullWriter.INSTANCE_$LI$());
                env.invoke(func, null, this.arguments.items, null, this);
            } catch(e) {
                throw new TemplateException("Unexpected exception during function execution", e, env);
            } finally {
                env.setOut(prevOut);
            }
            return env.getLastReturnValue();
        } else {
            throw new NonMethodException(this.target, targetModel, env);
        }
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        let buf : StringBuilder = new StringBuilder("");
        buf.append(this.target.getCanonicalForm());
        buf.append("(");
        let list : string = this.arguments.getCanonicalForm();
        buf.append(list, 1, list.length - 1);
        buf.append(")");
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "...(...)";
    }

    getConstantValue() : TemplateModel {
        return null;
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return false;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        return new MethodCall(this.target.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState), <ListLiteral>this.arguments.deepCloneWithIdentifierReplaced(replacedIdentifier, replacement, replacementState));
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1 + /* size */(<number>this.arguments.items.length);
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx === 0) {
            return this.target;
        } else if(idx < this.getParameterCount()) {
            return /* get */this.arguments.items[idx - 1];
        } else {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx === 0) {
            return ParameterRole.CALLEE_$LI$();
        } else if(idx < this.getParameterCount()) {
            return ParameterRole.ARGUMENT_VALUE_$LI$();
        } else {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
}
MethodCall["__class"] = "freemarker.core.MethodCall";




