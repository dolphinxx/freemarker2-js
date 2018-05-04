/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateSourceMatcher } from './TemplateSourceMatcher';

/**
 * Logical "not" operation on the given matcher.
 * 
 * @since 2.3.24
 * @param {TemplateSourceMatcher} matcher
 * @class
 * @extends TemplateSourceMatcher
 */
export class NotMatcher extends TemplateSourceMatcher {
    /*private*/ matcher : TemplateSourceMatcher;

    public constructor(matcher : TemplateSourceMatcher) {
        super();
        if(this.matcher===undefined) this.matcher = null;
        this.matcher = matcher;
    }

    /**
     * 
     * @param {String} sourceName
     * @param {Object} templateSource
     * @return {boolean}
     */
    public matches(sourceName : string, templateSource : any) : boolean {
        return !this.matcher.matches(sourceName, templateSource);
    }
}
NotMatcher["__class"] = "freemarker.cache.NotMatcher";



