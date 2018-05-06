/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {EmptyMap} from '../template/EmptyMap';
import {TemplateDirectiveModel} from '../template/TemplateDirectiveModel';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateTransformModel} from '../template/TemplateTransformModel';
import {ObjectFactory} from '../template/utility/ObjectFactory';
import {StringUtil} from '../template/utility/StringUtil';
import {TemplateElement} from './TemplateElement';
import {DirectiveCallPlace} from './DirectiveCallPlace';
import {Expression} from './Expression';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {Macro} from './Macro';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_DelayedJQuote} from './_DelayedJQuote';
import {InvalidReferenceException} from './InvalidReferenceException';
import {NonUserDefinedDirectiveLikeException} from './NonUserDefinedDirectiveLikeException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_MessageUtil} from './_MessageUtil';
import {_CoreStringUtils} from './_CoreStringUtils';
import {Identifier} from './Identifier';
import {Dot} from './Dot';
import {ParameterRole} from './ParameterRole';
import {MiscUtil} from './MiscUtil';
import {CallPlaceCustomDataInitializationException} from './CallPlaceCustomDataInitializationException';

/**
 * An element for the unified macro/transform syntax.
 * @extends TemplateElement
 * @class
 */
export class UnifiedCall extends TemplateElement implements DirectiveCallPlace {
    /*private*/ nameExp : Expression;

    /*private*/ namedArgs : Map<any, any>;

    /*private*/ positionalArgs : Array<any>;

    /*private*/ bodyParameterNames : Array<any>;

    legacySyntax : boolean;

    /*private*/ sortedNamedArgsCache : SoftReference;

    /*private*/ customDataHolder : UnifiedCall.CustomDataHolder;

    public constructor(nameExp? : any, namedArgs? : any, children? : any, bodyParameterNames? : any) {
        if(((nameExp != null && nameExp instanceof <any>Expression) || nameExp === null) && ((namedArgs != null && (namedArgs instanceof Map)) || namedArgs === null) && ((children != null && children instanceof <any>TemplateElements) || children === null) && ((bodyParameterNames != null && (bodyParameterNames instanceof Array)) || bodyParameterNames === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.nameExp===undefined) this.nameExp = null;
            if(this.namedArgs===undefined) this.namedArgs = null;
            if(this.positionalArgs===undefined) this.positionalArgs = null;
            if(this.bodyParameterNames===undefined) this.bodyParameterNames = null;
            if(this.legacySyntax===undefined) this.legacySyntax = false;
            if(this.sortedNamedArgsCache===undefined) this.sortedNamedArgsCache = null;
            if(this.customDataHolder===undefined) this.customDataHolder = null;
            if(this.nameExp===undefined) this.nameExp = null;
            if(this.namedArgs===undefined) this.namedArgs = null;
            if(this.positionalArgs===undefined) this.positionalArgs = null;
            if(this.bodyParameterNames===undefined) this.bodyParameterNames = null;
            if(this.legacySyntax===undefined) this.legacySyntax = false;
            if(this.sortedNamedArgsCache===undefined) this.sortedNamedArgsCache = null;
            if(this.customDataHolder===undefined) this.customDataHolder = null;
            (() => {
                this.nameExp = nameExp;
                this.namedArgs = namedArgs;
                this.setChildren(children);
                this.bodyParameterNames = bodyParameterNames;
            })();
        } else if(((nameExp != null && nameExp instanceof <any>Expression) || nameExp === null) && ((namedArgs != null && (namedArgs instanceof Array)) || namedArgs === null) && ((children != null && children instanceof <any>TemplateElements) || children === null) && ((bodyParameterNames != null && (bodyParameterNames instanceof Array)) || bodyParameterNames === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let positionalArgs : any = __args[1];
            super();
            if(this.nameExp===undefined) this.nameExp = null;
            if(this.namedArgs===undefined) this.namedArgs = null;
            if(this.positionalArgs===undefined) this.positionalArgs = null;
            if(this.bodyParameterNames===undefined) this.bodyParameterNames = null;
            if(this.legacySyntax===undefined) this.legacySyntax = false;
            if(this.sortedNamedArgsCache===undefined) this.sortedNamedArgsCache = null;
            if(this.customDataHolder===undefined) this.customDataHolder = null;
            if(this.nameExp===undefined) this.nameExp = null;
            if(this.namedArgs===undefined) this.namedArgs = null;
            if(this.positionalArgs===undefined) this.positionalArgs = null;
            if(this.bodyParameterNames===undefined) this.bodyParameterNames = null;
            if(this.legacySyntax===undefined) this.legacySyntax = false;
            if(this.sortedNamedArgsCache===undefined) this.sortedNamedArgsCache = null;
            if(this.customDataHolder===undefined) this.customDataHolder = null;
            (() => {
                this.nameExp = nameExp;
                this.positionalArgs = positionalArgs;
                this.setChildren(children);
                this.bodyParameterNames = bodyParameterNames;
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let tm : TemplateModel = this.nameExp.eval(env);
        if(tm === Macro.DO_NOTHING_MACRO_$LI$()) return null;
        if(tm != null && tm instanceof <any>Macro) {
            let macro : Macro = <Macro><any>tm;
            if(macro.isFunction() && !this.legacySyntax) {
                throw new _MiscTemplateException(env, "Routine ", new _DelayedJQuote(macro.getName()), " is a function, not a directive. Functions can only be called from expressions, like in ${f()}, ${x + f()} or ", "<@someDirective someParam=f() />", ".");
            }
            env.invoke(macro, this.namedArgs, this.positionalArgs, this.bodyParameterNames, this);
        } else {
            let isDirectiveModel : boolean = (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0));
            if(isDirectiveModel || (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0))) {
                let args : Map<any, any>;
                if(this.namedArgs != null && !/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>this.namedArgs)) {
                    args = <any>(new Map<any, any>());
                    for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>this.namedArgs)); it.hasNext(); ) {
                        let entry : Entry = <Entry><any>it.next();
                        let key : string = <string>entry.getKey();
                        let valueExp : Expression = <Expression>entry.getValue();
                        let value : TemplateModel = valueExp.eval(env);
                        /* put */args.set(key, value);
                    }
                } else {
                    args = EmptyMap.instance_$LI$();
                }
                if(isDirectiveModel) {
                    env.visit$freemarker_core_TemplateElement_A$freemarker_template_TemplateDirectiveModel$java_util_Map$java_util_List(this.getChildBuffer(), <TemplateDirectiveModel><any>tm, args, this.bodyParameterNames);
                } else {
                    env.visitAndTransform(this.getChildBuffer(), <TemplateTransformModel><any>tm, args);
                }
            } else if(tm == null) {
                throw InvalidReferenceException.getInstance$freemarker_core_Expression$freemarker_core_Environment(this.nameExp, env);
            } else {
                throw new NonUserDefinedDirectiveLikeException(this.nameExp, tm, env);
            }
        }
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
        sb.append('@');
        _MessageUtil.appendExpressionAsUntearable(sb, this.nameExp);
        let nameIsInParen : boolean = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sb.charAt(sb.length() - 1)) == ')'.charCodeAt(0);
        if(this.positionalArgs != null) {
            for(let i : number = 0; i < /* size */(<number>this.positionalArgs.length); i++) {
                let argExp : Expression = <Expression>/* get */this.positionalArgs[i];
                if(i !== 0) {
                    sb.append(',');
                }
                sb.append(' ');
                sb.append(argExp.getCanonicalForm());
            }
        } else {
            let entries : Array<any> = this.getSortedNamedArgs();
            for(let i : number = 0; i < /* size */(<number>entries.length); i++) {
                let entry : Entry = <Entry><any>/* get */entries[i];
                let argExp : Expression = <Expression>entry.getValue();
                sb.append(' ');
                sb.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(<string>entry.getKey()));
                sb.append('=');
                _MessageUtil.appendExpressionAsUntearable(sb, argExp);
            }
        }
        if(this.bodyParameterNames != null && !/* isEmpty */(this.bodyParameterNames.length == 0)) {
            sb.append("; ");
            for(let i : number = 0; i < /* size */(<number>this.bodyParameterNames.length); i++) {
                if(i !== 0) {
                    sb.append(", ");
                }
                sb.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(<string>/* get */this.bodyParameterNames[i]));
            }
        }
        if(canonical) {
            if(this.getChildCount() === 0) {
                sb.append("/>");
            } else {
                sb.append('>');
                sb.append(this.getChildrenCanonicalForm());
                sb.append("</@");
                if(!nameIsInParen && ((this.nameExp != null && this.nameExp instanceof <any>Identifier) || ((this.nameExp != null && this.nameExp instanceof <any>Dot) && (<Dot>this.nameExp).onlyHasIdentifiers()))) {
                    sb.append(this.nameExp.getCanonicalForm());
                }
                sb.append('>');
            }
        }
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "@";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1 + (this.positionalArgs != null?/* size */(<number>this.positionalArgs.length):0) + (this.namedArgs != null?/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.namedArgs) * 2:0) + (this.bodyParameterNames != null?/* size */(<number>this.bodyParameterNames.length):0);
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx === 0) {
            return this.nameExp;
        } else {
            let base : number = 1;
            let positionalArgsSize : number = this.positionalArgs != null?/* size */(<number>this.positionalArgs.length):0;
            if(idx - base < positionalArgsSize) {
                return /* get */this.positionalArgs[idx - base];
            } else {
                base += positionalArgsSize;
                let namedArgsSize : number = this.namedArgs != null?/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.namedArgs):0;
                if(idx - base < namedArgsSize * 2) {
                    let namedArg : Entry = <Entry><any>/* get */this.getSortedNamedArgs()[((idx - base) / 2|0)];
                    return (idx - base) % 2 === 0?namedArg.getKey():namedArg.getValue();
                } else {
                    base += namedArgsSize * 2;
                    let bodyParameterNamesSize : number = this.bodyParameterNames != null?/* size */(<number>this.bodyParameterNames.length):0;
                    if(idx - base < bodyParameterNamesSize) {
                        return /* get */this.bodyParameterNames[idx - base];
                    } else {
                        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                    }
                }
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
            return ParameterRole.CALLEE_$LI$();
        } else {
            let base : number = 1;
            let positionalArgsSize : number = this.positionalArgs != null?/* size */(<number>this.positionalArgs.length):0;
            if(idx - base < positionalArgsSize) {
                return ParameterRole.ARGUMENT_VALUE_$LI$();
            } else {
                base += positionalArgsSize;
                let namedArgsSize : number = this.namedArgs != null?/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>this.namedArgs):0;
                if(idx - base < namedArgsSize * 2) {
                    return (idx - base) % 2 === 0?ParameterRole.ARGUMENT_NAME_$LI$():ParameterRole.ARGUMENT_VALUE_$LI$();
                } else {
                    base += namedArgsSize * 2;
                    let bodyParameterNamesSize : number = this.bodyParameterNames != null?/* size */(<number>this.bodyParameterNames.length):0;
                    if(idx - base < bodyParameterNamesSize) {
                        return ParameterRole.TARGET_LOOP_VARIABLE_$LI$();
                    } else {
                        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                    }
                }
            }
        }
    }

    /**
     * Returns the named args by source-code order; it's not meant to be used during template execution, too slow for
     * that!
     * @return {List}
     * @private
     */
    getSortedNamedArgs() : Array<any> {
        let ref : Reference = this.sortedNamedArgsCache;
        if(ref != null) {
            let res : Array<any> = <Array<any>><any>ref.get();
            if(res != null) return res;
        }
        let res : Array<any> = MiscUtil.sortMapOfExpressions(this.namedArgs);
        this.sortedNamedArgsCache = <any>(new SoftReference(res));
        return res;
    }

    public getOrCreateCustomData(providerIdentity : any, objectFactory : ObjectFactory<any>) : any {
        let customDataHolder : UnifiedCall.CustomDataHolder = this.customDataHolder;
        if(customDataHolder == null) {
            {
                customDataHolder = this.customDataHolder;
                if(customDataHolder == null || customDataHolder.providerIdentity !== providerIdentity) {
                    customDataHolder = this.createNewCustomData(providerIdentity, objectFactory);
                    this.customDataHolder = customDataHolder;
                }
            }
        }
        if(customDataHolder.providerIdentity !== providerIdentity) {
            {
                customDataHolder = this.customDataHolder;
                if(customDataHolder == null || customDataHolder.providerIdentity !== providerIdentity) {
                    customDataHolder = this.createNewCustomData(providerIdentity, objectFactory);
                    this.customDataHolder = customDataHolder;
                }
            }
        }
        return customDataHolder.customData;
    }

    createNewCustomData(provierIdentity : any, objectFactory : ObjectFactory<any>) : UnifiedCall.CustomDataHolder {
        let customDataHolder : UnifiedCall.CustomDataHolder;
        let customData : any;
        try {
            customData = objectFactory.createObject();
        } catch(e) {
            throw new CallPlaceCustomDataInitializationException("Failed to initialize custom data for provider identity " + StringUtil.tryToString(provierIdentity) + " via factory " + StringUtil.tryToString(objectFactory), e);
        }
        if(customData == null) {
            throw Object.defineProperty(new Error("ObjectFactory.createObject() has returned null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
        }
        customDataHolder = new UnifiedCall.CustomDataHolder(provierIdentity, customData);
        return customDataHolder;
    }

    public isNestedOutputCacheable() : boolean {
        return this.isChildrenOutputCacheable();
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
        return true;
    }
}
UnifiedCall["__class"] = "freemarker.core.UnifiedCall";
UnifiedCall["__interfaces"] = ["freemarker.core.DirectiveCallPlace"];



export namespace UnifiedCall {

    /**
     * Used for implementing double check locking in implementing the
     * {link DirectiveCallPlace#getOrCreateCustomData(Object, ObjectFactory)}.
     * @param {Object} providerIdentity
     * @param {Object} customData
     * @class
     */
    export class CustomDataHolder {
        providerIdentity : any;

        customData : any;

        public constructor(providerIdentity : any, customData : any) {
            if(this.providerIdentity===undefined) this.providerIdentity = null;
            if(this.customData===undefined) this.customData = null;
            this.providerIdentity = providerIdentity;
            this.customData = customData;
        }
    }
    CustomDataHolder["__class"] = "freemarker.core.UnifiedCall.CustomDataHolder";

}




