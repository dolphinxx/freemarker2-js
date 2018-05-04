/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateElement } from './TemplateElement';
import { Case } from './Case';
import { Expression } from './Expression';
import { MixedContent } from './MixedContent';
import { Environment } from './Environment';
import { EvalUtil } from './EvalUtil';
import { BreakOrContinueException } from './BreakOrContinueException';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { ParameterRole } from './ParameterRole';
import { ParseException } from './ParseException';

/**
 * An instruction representing a switch-case structure.
 * @extends TemplateElement
 * @class
 */
export class SwitchBlock extends TemplateElement {
    /*private*/ defaultCase : Case;

    /*private*/ searched : Expression;

    /*private*/ firstCaseIndex : number;

    constructor(searched : Expression, ignoredSectionBeforeFirstCase : MixedContent) {
        super();
        if(this.defaultCase===undefined) this.defaultCase = null;
        if(this.searched===undefined) this.searched = null;
        if(this.firstCaseIndex===undefined) this.firstCaseIndex = 0;
        this.searched = searched;
        let ignoredCnt : number = ignoredSectionBeforeFirstCase != null?ignoredSectionBeforeFirstCase.getChildCount():0;
        this.setChildBufferCapacity(ignoredCnt + 4);
        for(let i : number = 0; i < ignoredCnt; i++) {
            this.addChild$freemarker_core_TemplateElement(ignoredSectionBeforeFirstCase.getChild(i));
        };
        this.firstCaseIndex = ignoredCnt;
    }

    /**
     * @param {Case} cas a Case element.
     */
    addCase(cas : Case) {
        if(cas.condition == null) {
            this.defaultCase = cas;
        }
        this.addChild$freemarker_core_TemplateElement(cas);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let processedCase : boolean = false;
        let ln : number = this.getChildCount();
        try {
            for(let i : number = this.firstCaseIndex; i < ln; i++) {
                let cas : Case = <Case>this.getChild(i);
                let processCase : boolean = false;
                if(processedCase) {
                    processCase = true;
                } else if(cas.condition != null) {
                    processCase = EvalUtil.compare$freemarker_core_Expression$int$java_lang_String$freemarker_core_Expression$freemarker_core_Expression$freemarker_core_Environment(this.searched, EvalUtil.CMP_OP_EQUALS, "case==", cas.condition, cas.condition, env);
                }
                if(processCase) {
                    env.visit$freemarker_core_TemplateElement(cas);
                    processedCase = true;
                }
            };
            if(!processedCase && this.defaultCase != null) {
                env.visit$freemarker_core_TemplateElement(this.defaultCase);
            }
        } catch(br) {
        };
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
        let buf : StringBuilder = new StringBuilder("");
        if(canonical) buf.append('<');
        buf.append(this.getNodeTypeSymbol());
        buf.append(' ');
        buf.append(this.searched.getCanonicalForm());
        if(canonical) {
            buf.append('>');
            let ln : number = this.getChildCount();
            for(let i : number = 0; i < ln; i++) {
                buf.append(this.getChild(i).getCanonicalForm());
            };
            buf.append("</").append(this.getNodeTypeSymbol()).append('>');
        }
        return buf.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#switch";
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
        return this.searched;
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

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {TemplateElement}
     */
    postParseCleanup(stripWhitespace : boolean) : TemplateElement {
        let result : TemplateElement = super.postParseCleanup(stripWhitespace);
        let ln : number = this.getChildCount();
        let i : number = 0;
        while((i < ln && !(this.getChild(i) != null && this.getChild(i) instanceof <any>Case))) {
            i++;
        };
        this.firstCaseIndex = i;
        return result;
    }
}
SwitchBlock["__class"] = "freemarker.core.SwitchBlock";



var __Function = Function;
