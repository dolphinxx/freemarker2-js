/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {Environment} from './Environment';
import {Macro} from './Macro';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {FlowControlException} from './FlowControlException';
import {ParameterRole} from './ParameterRole';

/**
 * Represents a &lt;return&gt; instruction to jump out of a macro.
 * @extends TemplateElement
 * @class
 */
export class ReturnInstruction extends TemplateElement {
    /*private*/ exp : Expression;

    constructor(exp : Expression) {
        super();
        if(this.exp===undefined) this.exp = null;
        this.exp = exp;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        if(this.exp != null) {
            env.setLastReturnValue(this.exp.eval(env));
        }
        if(this.nextSibling() == null && (this.getParentElement() != null && this.getParentElement() instanceof <any>Macro)) {
            return null;
        }
        throw ReturnInstruction.Return.INSTANCE_$LI$();
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
        if(this.exp != null) {
            sb.append(' ');
            sb.append(this.exp.getCanonicalForm());
        }
        if(canonical) sb.append("/>");
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#return";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return this.exp;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return ParameterRole.VALUE_$LI$();
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
ReturnInstruction["__class"] = "freemarker.core.ReturnInstruction";


export namespace ReturnInstruction {

    export class Return extends FlowControlException {
        static INSTANCE : ReturnInstruction.Return; public static INSTANCE_$LI$() : ReturnInstruction.Return { if(Return.INSTANCE == null) Return.INSTANCE = new ReturnInstruction.Return(); return Return.INSTANCE; };

        constructor() {
            super();
            (<any>Object).setPrototypeOf(this, Return.prototype);
        }
    }
    Return["__class"] = "freemarker.core.ReturnInstruction.Return";
    Return["__interfaces"] = ["java.io.Serializable"];


}





ReturnInstruction.Return.INSTANCE_$LI$();
