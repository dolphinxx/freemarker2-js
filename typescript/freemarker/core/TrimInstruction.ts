/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * An instruction that indicates that that opening
 * and trailing whitespace on this line should be trimmed.
 * @extends TemplateElement
 * @class
 */
export class TrimInstruction extends TemplateElement {
    static TYPE_T : number = 0;

    static TYPE_LT : number = 1;

    static TYPE_RT : number = 2;

    static TYPE_NT : number = 3;

    left : boolean;

    right : boolean;

    constructor(left : boolean, right : boolean) {
        super();
        if(this.left===undefined) this.left = false;
        if(this.right===undefined) this.right = false;
        this.left = left;
        this.right = right;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
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
        if(canonical) sb.append("/>");
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        if(this.left && this.right) {
            return "#t";
        } else if(this.left) {
            return "#lt";
        } else if(this.right) {
            return "#rt";
        } else {
            return "#nt";
        }
    }

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {boolean}
     */
    isIgnorable(stripWhitespace : boolean) : boolean {
        return true;
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
        let type : number;
        if(this.left && this.right) {
            type = TrimInstruction.TYPE_T;
        } else if(this.left) {
            type = TrimInstruction.TYPE_LT;
        } else if(this.right) {
            type = TrimInstruction.TYPE_RT;
        } else {
            type = TrimInstruction.TYPE_NT;
        }
        return type;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return ParameterRole.AST_NODE_SUBTYPE_$LI$();
    }

    /**
     * 
     * @return {boolean}
     */
    isOutputCacheable() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
TrimInstruction["__class"] = "freemarker.core.TrimInstruction";




