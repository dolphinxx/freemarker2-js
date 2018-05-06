/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateSourceMatcher} from './TemplateSourceMatcher';

/**
 * @param {String} regex Glob with the syntax defined by {link StringUtil#globToRegularExpression(String)}. Must not
 * start with {@code /}.
 * @class
 * @extends TemplateSourceMatcher
 */
export class PathRegexMatcher extends TemplateSourceMatcher {
    /*private*/ pattern : Pattern;

    public constructor(regex : string) {
        super();
        if(this.pattern===undefined) this.pattern = null;
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(regex, "/")) {
            throw Object.defineProperty(new Error("Absolute template paths need no inital \"/\"; remove it from: " + regex), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.pattern = Pattern.compile(regex);
    }

    /**
     * 
     * @param {String} sourceName
     * @param {Object} templateSource
     * @return {boolean}
     */
    public matches(sourceName : string, templateSource : any) : boolean {
        return this.pattern.matcher(sourceName).matches();
    }
}
PathRegexMatcher["__class"] = "freemarker.cache.PathRegexMatcher";



