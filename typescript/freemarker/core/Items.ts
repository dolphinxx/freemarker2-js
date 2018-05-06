/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {IteratorBlock} from './IteratorBlock';
import {_MiscTemplateException} from './_MiscTemplateException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_CoreStringUtils} from './_CoreStringUtils';
import {ParameterRole} from './ParameterRole';

/**
 * An #items element.
 * @extends TemplateElement
 * @class
 */
export class Items extends TemplateElement {
    /*private*/ loopVarName : string;

    /*private*/ loopVar2Name : string;

    constructor(loopVarName : string, loopVar2Name : string, children : TemplateElements) {
        super();
        if(this.loopVarName===undefined) this.loopVarName = null;
        if(this.loopVar2Name===undefined) this.loopVar2Name = null;
        this.loopVarName = loopVarName;
        this.loopVar2Name = loopVar2Name;
        this.setChildren(children);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let iterCtx : IteratorBlock.IterationContext = IteratorBlock.findEnclosingIterationContext(env, null);
        if(iterCtx == null) {
            throw new _MiscTemplateException(env, this.getNodeTypeSymbol(), " without iteration in context");
        }
        iterCtx.loopForItemsElement(env, this.getChildBuffer(), this.loopVarName, this.loopVar2Name);
        return null;
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
        sb.append(" as ");
        sb.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(this.loopVarName));
        if(this.loopVar2Name != null) {
            sb.append(", ");
            sb.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(this.loopVar2Name));
        }
        if(canonical) {
            sb.append('>');
            sb.append(this.getChildrenCanonicalForm());
            sb.append("</");
            sb.append(this.getNodeTypeSymbol());
            sb.append('>');
        }
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#items";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return this.loopVar2Name != null?2:1;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            if(this.loopVarName == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return this.loopVarName;
        case 1:
            if(this.loopVar2Name == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return this.loopVar2Name;
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
            if(this.loopVarName == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return ParameterRole.TARGET_LOOP_VARIABLE_$LI$();
        case 1:
            if(this.loopVar2Name == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return ParameterRole.TARGET_LOOP_VARIABLE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
}
Items["__class"] = "freemarker.core.Items";




