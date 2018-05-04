/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateSourceMatcher } from './TemplateSourceMatcher';

/**
 * @param {String} extension The file extension (without the initial dot). Can't contain there characters:
 * {@code '/'}, {@code '*'}, {@code '?'}. May contains {@code '.'}, but can't start with it.
 * @class
 * @extends TemplateSourceMatcher
 */
export class FileExtensionMatcher extends TemplateSourceMatcher {
    /*private*/ extension : string;

    /*private*/ __caseInsensitive : boolean = true;

    public constructor(extension : string) {
        super();
        if(this.extension===undefined) this.extension = null;
        if(extension.indexOf('/') !== -1) {
            throw Object.defineProperty(new Error("A file extension can\'t contain \"/\": " + extension), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(extension.indexOf('*') !== -1) {
            throw Object.defineProperty(new Error("A file extension can\'t contain \"*\": " + extension), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(extension.indexOf('?') !== -1) {
            throw Object.defineProperty(new Error("A file extension can\'t contain \"*\": " + extension), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(extension, ".")) {
            throw Object.defineProperty(new Error("A file extension can\'t start with \".\": " + extension), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.extension = extension;
    }

    /**
     * 
     * @param {String} sourceName
     * @param {Object} templateSource
     * @return {boolean}
     */
    public matches(sourceName : string, templateSource : any) : boolean {
        let ln : number = sourceName.length;
        let extLn : number = this.extension.length;
        if(ln < extLn + 1 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(sourceName.charAt(ln - extLn - 1)) != '.'.charCodeAt(0)) {
            return false;
        }
        return sourceName.regionMatches(this.__caseInsensitive, ln - extLn, this.extension, 0, extLn);
    }

    public isCaseInsensitive() : boolean {
        return this.__caseInsensitive;
    }

    /**
     * Sets if the matching will be case insensitive (UNICODE compliant); default is {@code true}.
     * @param {boolean} caseInsensitive
     */
    public setCaseInsensitive(caseInsensitive : boolean) {
        this.__caseInsensitive = caseInsensitive;
    }

    /**
     * Fluid API variation of {link #setCaseInsensitive(boolean)}
     * @param {boolean} caseInsensitive
     * @return {FileExtensionMatcher}
     */
    public caseInsensitive(caseInsensitive : boolean) : FileExtensionMatcher {
        this.setCaseInsensitive(caseInsensitive);
        return this;
    }
}
FileExtensionMatcher["__class"] = "freemarker.cache.FileExtensionMatcher";



