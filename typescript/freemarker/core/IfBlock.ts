/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateElement } from './TemplateElement';
import { ConditionalBlock } from './ConditionalBlock';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { ParseException } from './ParseException';
import { Template } from '../template/Template';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { ParameterRole } from './ParameterRole';

/**
 * Container for a group of related #if, #elseif and #else elements.
 * Each such block is a nested {link ConditionalBlock}. Note that if an #if has no #else or #elseif,
 * {link ConditionalBlock} doesn't need this parent element.
 * @extends TemplateElement
 * @class
 */
export class IfBlock extends TemplateElement {
    constructor(block : ConditionalBlock) {
        super();
        this.setChildBufferCapacity(1);
        this.addBlock(block);
    }

    addBlock(block : ConditionalBlock) {
        this.addChild$freemarker_core_TemplateElement(block);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let ln : number = this.getChildCount();
        for(let i : number = 0; i < ln; i++) {
            let cblock : ConditionalBlock = <ConditionalBlock>this.getChild(i);
            let condition : Expression = cblock.condition;
            env.replaceElementStackTop(cblock);
            if(condition == null || condition.evalToBoolean$freemarker_core_Environment(env)) {
                return cblock.getChildBuffer();
            }
        };
        return null;
    }

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {TemplateElement}
     */
    postParseCleanup(stripWhitespace : boolean) : TemplateElement {
        if(this.getChildCount() === 1) {
            let cblock : ConditionalBlock = <ConditionalBlock>this.getChild(0);
            cblock.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(this.getTemplate(), cblock, this);
            return cblock.postParseCleanup(stripWhitespace);
        } else {
            return super.postParseCleanup(stripWhitespace);
        }
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
            let buf : StringBuilder = new StringBuilder("");
            let ln : number = this.getChildCount();
            for(let i : number = 0; i < ln; i++) {
                let cblock : ConditionalBlock = <ConditionalBlock>this.getChild(i);
                buf.append(cblock.dump(canonical));
            };
            buf.append("</#if>");
            return buf.toString();
        } else {
            return this.getNodeTypeSymbol();
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#if-#elseif-#else-container";
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
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
IfBlock["__class"] = "freemarker.core.IfBlock";



var __Function = Function;
