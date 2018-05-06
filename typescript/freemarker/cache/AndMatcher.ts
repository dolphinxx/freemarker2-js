/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateSourceMatcher} from './TemplateSourceMatcher';

/**
 * Logical "and" operation among the given matchers.
 * 
 * @since 2.3.24
 * @param {Array} matchers
 * @class
 * @extends TemplateSourceMatcher
 */
export class AndMatcher extends TemplateSourceMatcher {
    /*private*/ matchers : TemplateSourceMatcher[];

    public constructor(...matchers : TemplateSourceMatcher[]) {
        super();
        if(this.matchers===undefined) this.matchers = null;
        if(matchers.length === 0) throw Object.defineProperty(new Error("Need at least 1 matcher, had 0."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        this.matchers = matchers;
    }

    /**
     * 
     * @param {String} sourceName
     * @param {Object} templateSource
     * @return {boolean}
     */
    public matches(sourceName : string, templateSource : any) : boolean {
        for(let index121=0; index121 < this.matchers.length; index121++) {
            let matcher = this.matchers[index121];
            {
                if(!(matcher.matches(sourceName, templateSource))) return false;
            }
        }
        return true;
    }
}
AndMatcher["__class"] = "freemarker.cache.AndMatcher";



