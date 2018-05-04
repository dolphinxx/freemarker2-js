/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateElement } from './TemplateElement';

/**
 * Used as the return value of {link TemplateElement#accept(Environment)} when the invoked element has nested elements
 * to invoke. It would be more natural to invoke child elements before returning from
 * {link TemplateElement#accept(Environment)}, however, if there's nothing to do after the child elements were invoked,
 * that would mean wasting stack space.
 * 
 * @since 2.3.24
 * @class
 */
export class TemplateElementsToVisit {
    /*private*/ templateElements : Collection;

    public constructor(templateElements? : any) {
        if(((templateElements != null && (templateElements instanceof Array)) || templateElements === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.templateElements===undefined) this.templateElements = null;
            if(this.templateElements===undefined) this.templateElements = null;
            (() => {
                this.templateElements = null != templateElements?templateElements:/* emptyList */[];
            })();
        } else if(((templateElements != null && templateElements instanceof <any>TemplateElement) || templateElements === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let nestedBlock : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateElements : any = /* singleton */[nestedBlock];
                if(this.templateElements===undefined) this.templateElements = null;
                if(this.templateElements===undefined) this.templateElements = null;
                (() => {
                    this.templateElements = null != templateElements?templateElements:/* emptyList */[];
                })();
            }
        } else throw new Error('invalid overload');
    }

    getTemplateElements() : Collection {
        return this.templateElements;
    }
}
TemplateElementsToVisit["__class"] = "freemarker.core.TemplateElementsToVisit";



var __Function = Function;
