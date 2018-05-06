/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_DelayedJQuote} from './_DelayedJQuote';
import {_DelayedGetMessage} from './_DelayedGetMessage';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_CoreStringUtils} from './_CoreStringUtils';
import {ParameterRole} from './ParameterRole';

/**
 * <b>Internal API - subject to change:</b> Represents an import via {@code #import}.
 * 
 * @deprecated This is an internal FreeMarker API with no backward compatibility guarantees, so you shouldn't depend on
 * it.
 * @extends TemplateElement
 * @class
 */
export class LibraryLoad extends TemplateElement {
    /*private*/ importedTemplateNameExp : Expression;

    /*private*/ targetNsVarName : string;

    constructor(template : /*Template*/any, templateName : Expression, targetNsVarName : string) {
        super();
        if(this.importedTemplateNameExp===undefined) this.importedTemplateNameExp = null;
        if(this.targetNsVarName===undefined) this.targetNsVarName = null;
        this.targetNsVarName = targetNsVarName;
        this.importedTemplateNameExp = templateName;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let importedTemplateName : string = this.importedTemplateNameExp.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        let fullImportedTemplateName : string;
        try {
            fullImportedTemplateName = env.toFullTemplateName(this.getTemplate().getName(), importedTemplateName);
        } catch(e) {
            throw new _MiscTemplateException(e, env, "Malformed template name ", new _DelayedJQuote(e.getTemplateName()), ":\n", e.getMalformednessDescription());
        }
        try {
            env.importLib$java_lang_String$java_lang_String(fullImportedTemplateName, this.targetNsVarName);
        } catch(e) {
            throw new _MiscTemplateException(e, env, "Template importing failed (for parameter value ", new _DelayedJQuote(importedTemplateName), "):\n", new _DelayedGetMessage(e));
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
        let buf : StringBuilder = new StringBuilder("");
        if(canonical) buf.append('<');
        buf.append(this.getNodeTypeSymbol());
        buf.append(' ');
        buf.append(this.importedTemplateNameExp.getCanonicalForm());
        buf.append(" as ");
        buf.append(_CoreStringUtils.toFTLTopLevelTragetIdentifier(this.targetNsVarName));
        if(canonical) buf.append("/>");
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#import";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 2;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.importedTemplateNameExp;
        case 1:
            return this.targetNsVarName;
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
            return ParameterRole.TEMPLATE_NAME_$LI$();
        case 1:
            return ParameterRole.NAMESPACE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    public getTemplateName() : string {
        return this.importedTemplateNameExp.toString();
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }

    /**
     * 
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
        return true;
    }
}
LibraryLoad["__class"] = "freemarker.core.LibraryLoad";