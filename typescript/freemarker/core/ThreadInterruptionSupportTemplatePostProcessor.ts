/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Template} from '../template/Template';
import {TemplatePostProcessor} from './TemplatePostProcessor';
import {TemplatePostProcessorException} from './TemplatePostProcessorException';
import {TemplateElement} from './TemplateElement';
import {Environment} from './Environment';
import {ParameterRole} from './ParameterRole';
import {FlowControlException} from './FlowControlException';

/**
 * Not yet public; subject to change.
 * <p>
 * <p>
 * Known compatibility risks when using this post-processor:
 * <ul>
 * <li>{link TemplateDateModel}-s that care to explicitly check if their nested content is {@code null} might start to
 * complain that you have specified a body despite that the directive doesn't support that. Directives should use
 * {link NestedContentNotSupportedException#check(freemarker.template.TemplateDirectiveBody)} instead of a simple
 * {@code null}-check to avoid this problem.</li>
 * <li>
 * Software that uses {link DirectiveCallPlace#isNestedOutputCacheable()} will always get {@code false}, because
 * interruption checks ({link ThreadInterruptionCheck} elements) are, obviously, not cacheable. This should only
 * impact the performance.
 * <li>
 * Software that investigates the AST will see the injected {link ThreadInterruptionCheck} elements. As of this
 * writing the AST API-s aren't published, also such software need to be able to deal with new kind of elements
 * anyway, so this shouldn't be a problem.
 * </ul>
 * @extends TemplatePostProcessor
 * @class
 */
export class ThreadInterruptionSupportTemplatePostProcessor extends TemplatePostProcessor {
    /**
     * 
     * @param {Template} t
     */
    public postProcess(t : Template) {
        let te : TemplateElement = t.getRootTreeNode();
        this.addInterruptionChecks(te);
    }

    addInterruptionChecks(te : TemplateElement) {
        if(te == null) {
            return;
        }
        let childCount : number = te.getChildCount();
        for(let i : number = 0; i < childCount; i++) {
            this.addInterruptionChecks(te.getChild(i));
        }
        if(te.isNestedBlockRepeater()) {
            try {
                te.addChild$int$freemarker_core_TemplateElement(0, new ThreadInterruptionSupportTemplatePostProcessor.ThreadInterruptionCheck(te));
            } catch(e) {
                throw new TemplatePostProcessorException("Unexpected error; see cause", e);
            }
        }
    }
}
ThreadInterruptionSupportTemplatePostProcessor["__class"] = "freemarker.core.ThreadInterruptionSupportTemplatePostProcessor";


export namespace ThreadInterruptionSupportTemplatePostProcessor {

    /**
     * Check if the current thread's "interrupted" flag is set, and throws
     * {link TemplateProcessingThreadInterruptedException} if it is. We inject this to some points in the AST.
     * @extends TemplateElement
     * @class
     */
    export class ThreadInterruptionCheck extends TemplateElement {
        constructor(te : TemplateElement) {
            super();
            this.setLocation$freemarker_template_Template$int$int$int$int(te.getTemplate(), te.beginColumn, te.beginLine, te.beginColumn, te.beginLine);
        }

        /**
         * 
         * @param {Environment} env
         * @return {Array}
         */
        accept(env : /*Environment*/any) : TemplateElement[] {
            if(java.lang.Thread.currentThread().isInterrupted()) {
                throw new ThreadInterruptionSupportTemplatePostProcessor.TemplateProcessingThreadInterruptedException();
            }
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
            return canonical?"":"<#--" + this.getNodeTypeSymbol() + "--#>";
        }

        /**
         * 
         * @return {String}
         */
        getNodeTypeSymbol() : string {
            return "##threadInterruptionCheck";
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
    ThreadInterruptionCheck["__class"] = "freemarker.core.ThreadInterruptionSupportTemplatePostProcessor.ThreadInterruptionCheck";


    /**
     * Indicates that the template processing thread's "interrupted" flag was found to be set.
     * 
     * <p>ATTENTION: This is used by https://github.com/kenshoo/freemarker-online. Don't break backward
     * compatibility without updating that project too!
     * @extends FlowControlException
     * @class
     */
    export class TemplateProcessingThreadInterruptedException extends FlowControlException {
        constructor() {
            super("Template processing thread \"interrupted\" flag was set.");
            (<any>Object).setPrototypeOf(this, TemplateProcessingThreadInterruptedException.prototype);
        }
    }
    TemplateProcessingThreadInterruptedException["__class"] = "freemarker.core.ThreadInterruptionSupportTemplatePostProcessor.TemplateProcessingThreadInterruptedException";
    TemplateProcessingThreadInterruptedException["__interfaces"] = ["java.io.Serializable"];


}




