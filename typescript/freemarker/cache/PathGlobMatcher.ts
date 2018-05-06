/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from '../template/utility/StringUtil';
import {TemplateSourceMatcher} from './TemplateSourceMatcher';

/**
 * @param {String} glob Glob with the syntax defined by {link StringUtil#globToRegularExpression(String, boolean)}. Must not
 * start with {@code /}.
 * @class
 * @extends TemplateSourceMatcher
 */
export class PathGlobMatcher extends TemplateSourceMatcher {
    /*private*/ glob : string;

    /*private*/ pattern : Pattern;

    /*private*/ __caseInsensitive : boolean;

    public constructor(glob : string) {
        super();
        if(this.glob===undefined) this.glob = null;
        if(this.pattern===undefined) this.pattern = null;
        if(this.__caseInsensitive===undefined) this.__caseInsensitive = false;
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(glob, "/")) {
            throw Object.defineProperty(new Error("Absolute template paths need no inital \"/\"; remove it from: " + glob), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.glob = glob;
        this.buildPattern();
    }

    /*private*/ buildPattern() {
        this.pattern = StringUtil.globToRegularExpression$java_lang_String$boolean(this.glob, this.__caseInsensitive);
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

    public isCaseInsensitive() : boolean {
        return this.__caseInsensitive;
    }

    /**
     * Sets if the matching will be case insensitive (UNICODE compliant); default is {@code false}.
     * @param {boolean} caseInsensitive
     */
    public setCaseInsensitive(caseInsensitive : boolean) {
        let lastCaseInsensitive : boolean = this.__caseInsensitive;
        this.__caseInsensitive = caseInsensitive;
        if(lastCaseInsensitive !== caseInsensitive) {
            this.buildPattern();
        }
    }

    /**
     * Fluid API variation of {link #setCaseInsensitive(boolean)}
     * @param {boolean} caseInsensitive
     * @return {PathGlobMatcher}
     */
    public caseInsensitive(caseInsensitive : boolean) : PathGlobMatcher {
        this.setCaseInsensitive(caseInsensitive);
        return this;
    }
}
PathGlobMatcher["__class"] = "freemarker.cache.PathGlobMatcher";



