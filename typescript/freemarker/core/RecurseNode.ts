/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleSequence } from '../template/SimpleSequence';
import { TemplateException } from '../template/TemplateException';
import { TemplateHashModel } from '../template/TemplateHashModel';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateNodeModel } from '../template/TemplateNodeModel';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { TemplateElement } from './TemplateElement';
import { Expression } from './Expression';
import { Environment } from './Environment';
import { NonNodeException } from './NonNodeException';
import { StringLiteral } from './StringLiteral';
import { ListLiteral } from './ListLiteral';
import { NonSequenceException } from './NonSequenceException';
import { _MiscTemplateException } from './_MiscTemplateException';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { ParameterRole } from './ParameterRole';

/**
 * An instruction to visit the children of a node.
 * @extends TemplateElement
 * @class
 */
export class RecurseNode extends TemplateElement {
    targetNode : Expression;

    namespaces : Expression;

    constructor(targetNode : Expression, namespaces : Expression) {
        super();
        if(this.targetNode===undefined) this.targetNode = null;
        if(this.namespaces===undefined) this.namespaces = null;
        this.targetNode = targetNode;
        this.namespaces = namespaces;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let node : TemplateModel = this.targetNode == null?null:this.targetNode.eval(env);
        if(node != null && !(node != null && (node["__interfaces"] != null && node["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0 || node.constructor != null && node.constructor["__interfaces"] != null && node.constructor["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0))) {
            throw new NonNodeException(this.targetNode, node, "node", env);
        }
        let nss : TemplateModel = this.namespaces == null?null:this.namespaces.eval(env);
        if(this.namespaces != null && this.namespaces instanceof <any>StringLiteral) {
            nss = env.importLib$java_lang_String$java_lang_String((<TemplateScalarModel><any>nss).getAsString(), null);
        } else if(this.namespaces != null && this.namespaces instanceof <any>ListLiteral) {
            nss = (<ListLiteral>this.namespaces).evaluateStringsToNamespaces(env);
        }
        if(nss != null) {
            if(nss != null && (nss["__interfaces"] != null && nss["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || nss.constructor != null && nss.constructor["__interfaces"] != null && nss.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) {
                let ss : SimpleSequence = new SimpleSequence(1);
                ss.add$java_lang_Object(nss);
                nss = ss;
            } else if(!(nss != null && (nss["__interfaces"] != null && nss["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || nss.constructor != null && nss.constructor["__interfaces"] != null && nss.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))) {
                if(this.namespaces != null) {
                    throw new NonSequenceException(this.namespaces, nss, env);
                } else {
                    throw new _MiscTemplateException(env, "Expecting a sequence of namespaces after \"using\"");
                }
            }
        }
        env.recurse(<TemplateNodeModel><any>node, <TemplateSequenceModel><any>nss);
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
        if(this.targetNode != null) {
            sb.append(' ');
            sb.append(this.targetNode.getCanonicalForm());
        }
        if(this.namespaces != null) {
            sb.append(" using ");
            sb.append(this.namespaces.getCanonicalForm());
        }
        if(canonical) sb.append("/>");
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#recurse";
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
            return this.targetNode;
        case 1:
            return this.namespaces;
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
            return ParameterRole.NODE_$LI$();
        case 1:
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

    /**
     * 
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
        return true;
    }
}
RecurseNode["__class"] = "freemarker.core.RecurseNode";



var __Function = Function;
