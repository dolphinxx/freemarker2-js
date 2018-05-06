/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateElement} from './TemplateElement';
import {RecoveryBlock} from './RecoveryBlock';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParameterRole} from './ParameterRole';

/**
 * Holder for the attempted section of the #attempt element and of the nested #recover element ({link RecoveryBlock}).
 * @extends TemplateElement
 * @class
 */
export class AttemptBlock extends TemplateElement {
    /*private*/ attemptedSection : TemplateElement;

    /*private*/ recoverySection : RecoveryBlock;

    constructor(attemptedSectionChildren : TemplateElements, recoverySection : RecoveryBlock) {
        super();
        if(this.attemptedSection===undefined) this.attemptedSection = null;
        if(this.recoverySection===undefined) this.recoverySection = null;
        let attemptedSection : TemplateElement = attemptedSectionChildren.asSingleElement();
        this.attemptedSection = attemptedSection;
        this.recoverySection = recoverySection;
        this.setChildBufferCapacity(2);
        this.addChild$freemarker_core_TemplateElement(attemptedSection);
        this.addChild$freemarker_core_TemplateElement(recoverySection);
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        env.visitAttemptRecover(this, this.attemptedSection, this.recoverySection);
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        if(!canonical) {
            return this.getNodeTypeSymbol();
        } else {
            let buf : StringBuilder = new StringBuilder("");
            buf.append("<").append(this.getNodeTypeSymbol()).append(">");
            buf.append(this.getChildrenCanonicalForm());
            buf.append("</").append(this.getNodeTypeSymbol()).append(">");
            return buf.toString();
        }
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
        return this.recoverySection;
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return ParameterRole.ERROR_HANDLER_$LI$();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#attempt";
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
AttemptBlock["__class"] = "freemarker.core.AttemptBlock";



