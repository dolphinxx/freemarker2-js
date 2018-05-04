/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateSourceMatcher } from './TemplateSourceMatcher';

/**
 * Logical "or" operation among the given matchers.
 * 
 * @since 2.3.24
 * @param {Array} matchers
 * @class
 * @extends TemplateSourceMatcher
 */
export class OrMatcher extends TemplateSourceMatcher {
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
        for(let index126=0; index126 < this.matchers.length; index126++) {
            let matcher = this.matchers[index126];
            {
                if((matcher.matches(sourceName, templateSource))) return true;
            }
        }
        return false;
    }
}
OrMatcher["__class"] = "freemarker.cache.OrMatcher";



