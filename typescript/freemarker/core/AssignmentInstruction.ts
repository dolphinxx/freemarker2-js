/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {Assignment} from './Assignment';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * An instruction that does multiple assignments, like [#local x=1 x=2].
 * Each assignment is represented by a {link Assignment} child element.
 * If there's only one assignment, its usually just a {link Assignment} without parent {link AssignmentInstruction}.
 * @extends TemplateElement
 * @class
 */
export class AssignmentInstruction extends TemplateElement {
    /*private*/ scope : number;

    /*private*/ namespaceExp : Expression;

    constructor(scope : number) {
        super();
        if(this.scope===undefined) this.scope = 0;
        if(this.namespaceExp===undefined) this.namespaceExp = null;
        this.scope = scope;
        this.setChildBufferCapacity(1);
    }

    addAssignment(assignment : Assignment) {
        this.addChild$freemarker_core_TemplateElement(assignment);
    }

    setNamespaceExp(namespaceExp : Expression) {
        this.namespaceExp = namespaceExp;
        let ln : number = this.getChildCount();
        for(let i : number = 0; i < ln; i++) {
            (<Assignment>this.getChild(i)).setNamespaceExp(namespaceExp);
        }
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        return this.getChildBuffer();
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        let buf : StringBuilder = new StringBuilder("");
        if(canonical) buf.append('<');
        buf.append(Assignment.getDirectiveName(this.scope));
        if(canonical) {
            buf.append(' ');
            let ln : number = this.getChildCount();
            for(let i : number = 0; i < ln; i++) {
                if(i !== 0) {
                    buf.append(", ");
                }
                let assignment : Assignment = <Assignment>this.getChild(i);
                buf.append(assignment.getCanonicalForm());
            }
        } else {
            buf.append("-container");
        }
        if(this.namespaceExp != null) {
            buf.append(" in ");
            buf.append(this.namespaceExp.getCanonicalForm());
        }
        if(canonical) buf.append(">");
        return buf.toString();
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
            return this.scope;
        case 1:
            return this.namespaceExp;
        default:
            return null;
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
            return ParameterRole.VARIABLE_SCOPE_$LI$();
        case 1:
            return ParameterRole.NAMESPACE_$LI$();
        default:
            return null;
        }
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
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
AssignmentInstruction["__class"] = "freemarker.core.AssignmentInstruction";



