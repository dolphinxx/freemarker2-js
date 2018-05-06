/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {ParameterRole} from './ParameterRole';

/**
 * Encapsulates an array of <tt>TemplateElement</tt> objects.
 * @extends TemplateElement
 * @class
 */
export class MixedContent extends TemplateElement {
    constructor() {
        super();
    }

    addElement$freemarker_core_TemplateElement(element : TemplateElement) {
        this.addChild$freemarker_core_TemplateElement(element);
    }

    public addElement$int$freemarker_core_TemplateElement(index : number, element : TemplateElement) {
        this.addChild$int$freemarker_core_TemplateElement(index, element);
    }

    /**
     * @deprecated Use {link #addChild(int, TemplateElement)} instead.
     * @param {number} index
     * @param {TemplateElement} element
     */
    public addElement(index? : any, element? : any) : any {
        if(((typeof index === 'number') || index === null) && ((element != null && element instanceof <any>TemplateElement) || element === null)) {
            return <any>this.addElement$int$freemarker_core_TemplateElement(index, element);
        } else if(((index != null && index instanceof <any>TemplateElement) || index === null) && element === undefined) {
            return <any>this.addElement$freemarker_core_TemplateElement(index);
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {TemplateElement}
     */
    postParseCleanup(stripWhitespace : boolean) : TemplateElement {
        super.postParseCleanup(stripWhitespace);
        return this.getChildCount() === 1?this.getChild(0):this;
    }

    /**
     * Processes the contents of the internal <tt>TemplateElement</tt> list,
     * and outputs the resulting text.
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        return this.getChildBuffer();
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
        if(canonical) {
            return this.getChildrenCanonicalForm();
        } else {
            if(this.getParentElement() == null) {
                return "root";
            }
            return this.getNodeTypeSymbol();
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isOutputCacheable() : boolean {
        let ln : number = this.getChildCount();
        for(let i : number = 0; i < ln; i++) {
            if(!this.getChild(i).isOutputCacheable()) {
                return false;
            }
        }
        return true;
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#mixed_content";
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
        return this.getChildCount() === 0;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
MixedContent["__class"] = "freemarker.core.MixedContent";




