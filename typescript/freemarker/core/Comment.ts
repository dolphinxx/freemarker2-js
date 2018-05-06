/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from '../template/utility/StringUtil';
import {TemplateElement} from './TemplateElement';
import {ParameterRole} from './ParameterRole';

/**
 * <b>Internal API - subject to change:</b> A template element where the content is ignored, a Comment.
 * 
 * @deprecated This is an internal FreeMarker API with no backward compatibility guarantees, so you shouldn't depend on
 * it.
 * @extends TemplateElement
 * @class
 */
export class Comment extends TemplateElement {
    /*private*/ text : string;

    constructor(text : string) {
        super();
        if(this.text===undefined) this.text = null;
        this.text = text;
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
     * @return {String}
     */
    dump(canonical : boolean) : string {
        if(canonical) {
            return "<#--" + this.text + "-->";
        } else {
            return "comment " + StringUtil.jQuote$java_lang_Object(this.text.trim());
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#--...--";
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
        return this.text;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return ParameterRole.CONTENT_$LI$();
    }

    public getText() : string {
        return this.text;
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
Comment["__class"] = "freemarker.core.Comment";



