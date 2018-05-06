/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StandardCompress} from '../template/utility/StandardCompress';
import {TemplateElement} from './TemplateElement';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {ParameterRole} from './ParameterRole';

/**
 * An instruction that reduces all sequences of whitespace to a single
 * space or newline. In addition, leading and trailing whitespace is removed.
 * see freemarker.template.utility.StandardCompress
 * @extends TemplateElement
 * @class
 */
export class CompressedBlock extends TemplateElement {
    constructor(children : TemplateElements) {
        super();
        this.setChildren(children);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        let childBuffer : TemplateElement[] = this.getChildBuffer();
        if(childBuffer != null) {
            env.visitAndTransform(childBuffer, StandardCompress.INSTANCE_$LI$(), null);
        }
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        if(canonical) {
            return "<" + this.getNodeTypeSymbol() + ">" + this.getChildrenCanonicalForm() + "</" + this.getNodeTypeSymbol() + ">";
        } else {
            return this.getNodeTypeSymbol();
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#compress";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 0;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {boolean}
     */
    isIgnorable(stripWhitespace : boolean) : boolean {
        return this.getChildCount() === 0 && this.getParameterCount() === 0;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
CompressedBlock["__class"] = "freemarker.core.CompressedBlock";



