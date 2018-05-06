/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleScalar} from '../template/SimpleScalar';
import {TemplateModel} from '../template/TemplateModel';
import {StringWriter} from '../../java/io/StringWriter';
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {MarkupOutputFormat} from './MarkupOutputFormat';
import {TemplateElements} from './TemplateElements';
import {Assignment} from './Assignment';
import {BugException} from './BugException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * Like [#local x]...[/#local].
 * @extends TemplateElement
 * @class
 */
export class BlockAssignment extends TemplateElement {
    /*private*/ varName : string;

    /*private*/ namespaceExp : Expression;

    /*private*/ scope : number;

    /*private*/ markupOutputFormat : MarkupOutputFormat<any>;

    constructor(children : TemplateElements, varName : string, scope : number, namespaceExp : Expression, markupOutputFormat : MarkupOutputFormat<any>) {
        super();
        if(this.varName===undefined) this.varName = null;
        if(this.namespaceExp===undefined) this.namespaceExp = null;
        if(this.scope===undefined) this.scope = 0;
        if(this.markupOutputFormat===undefined) this.markupOutputFormat = null;
        this.setChildren(children);
        this.varName = varName;
        this.namespaceExp = namespaceExp;
        this.scope = scope;
        this.markupOutputFormat = markupOutputFormat;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let children : TemplateElement[] = this.getChildBuffer();
        let value : TemplateModel;
        if(children != null) {
            let out : StringWriter = new StringWriter();
            env.visit$freemarker_core_TemplateElement_A$java_io_Writer(children, out);
            value = this.capturedStringToModel(out.toString());
        } else {
            value = this.capturedStringToModel("");
        }
        if(this.namespaceExp != null) {
            (/*<Environment.Namespace>*/<any>this.namespaceExp.eval(env)).put$java_lang_String$java_lang_Object(this.varName, value);
        } else if(this.scope === Assignment.NAMESPACE) {
            env.setVariable(this.varName, value);
        } else if(this.scope === Assignment.GLOBAL) {
            env.setGlobalVariable(this.varName, value);
        } else if(this.scope === Assignment.LOCAL) {
            env.setLocalVariable(this.varName, value);
        } else {
            throw new BugException("Unhandled scope");
        }
        return null;
    }

    /*private*/ capturedStringToModel(s : string) : TemplateModel {
        return this.markupOutputFormat == null?new SimpleScalar(s):this.markupOutputFormat.fromMarkup(s);
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        let sb : StringBuilder = new StringBuilder("");
        if(canonical) sb.append("<");
        sb.append(this.getNodeTypeSymbol());
        sb.append(' ');
        sb.append(this.varName);
        if(this.namespaceExp != null) {
            sb.append(" in ");
            sb.append(this.namespaceExp.getCanonicalForm());
        }
        if(canonical) {
            sb.append('>');
            sb.append(this.getChildrenCanonicalForm());
            sb.append("</");
            sb.append(this.getNodeTypeSymbol());
            sb.append('>');
        } else {
            sb.append(" = .nested_output");
        }
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return Assignment.getDirectiveName(this.scope);
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 3;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.varName;
        case 1:
            return this.scope;
        case 2:
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
            return ParameterRole.VARIABLE_SCOPE_$LI$();
        case 2:
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
}
BlockAssignment["__class"] = "freemarker.core.BlockAssignment";



