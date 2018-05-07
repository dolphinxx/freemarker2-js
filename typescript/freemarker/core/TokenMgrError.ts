/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringBuilder} from '../../java/lang/StringBuilder';
import {ParseException} from './ParseException';

/**
 * Exception thrown on lower (lexical) level parsing errors. Shouldn't reach normal FreeMarker users, as FreeMarker
 * usually catches this and wraps it into a {link ParseException}.
 * <p>
 * This is a modified version of file generated by JavaCC from FTL.jj.
 * You can modify this class to customize the error reporting mechanisms so long as the public interface
 * remains compatible with the original.
 * <p>
 * see ParseException
 * @param {boolean} EOFSeen
 * @param {number} lexState
 * @param {number} errorLine
 * @param {number} errorColumn
 * @param {String} errorAfter
 * @param {string} curChar
 * @param {number} reason
 * @class
 * @extends Error
 */
export class TokenMgrError extends Error {
    /**
     * Lexical error occurred.
     */
    static LEXICAL_ERROR : number = 0;

    /**
     * An attempt was made to create a second instance of a static token manager.
     */
    static STATIC_LEXER_ERROR : number = 1;

    /**
     * Tried to change to an invalid lexical state.
     */
    static INVALID_LEXICAL_STATE : number = 2;

    /**
     * Detected (and bailed out of) an infinite loop in the token manager.
     */
    static LOOP_DETECTED : number = 3;

    /**
     * Indicates the reason why the exception is thrown. It will have
     * one of the above 4 values.
     */
    errorCode : number;

    /*private*/ detail : string;

    /*private*/ lineNumber : number;

    /*private*/ columnNumber : number;

    /*private*/ endLineNumber : number;

    /*private*/ endColumnNumber : number;

    /**
     * Replaces unprintable characters by their espaced (or unicode escaped)
     * equivalents in the given string
     * @param {String} str
     * @return {String}
     */
    static addEscapes(str : string) : string {
        let retval : StringBuilder = new StringBuilder("");
        let ch : string;
        for(let i : number = 0; i < str.length; i++) {
            switch((str.charAt(i)).charCodeAt(0)) {
            case 0:
                continue;
            case 8 /* '\b' */:
                retval.append("\\b");
                continue;
            case 9 /* '\t' */:
                retval.append("\\t");
                continue;
            case 10 /* '\n' */:
                retval.append("\\n");
                continue;
            case 12 /* '\f' */:
                retval.append("\\f");
                continue;
            case 13 /* '\r' */:
                retval.append("\\r");
                continue;
            case 34 /* '\"' */:
                retval.append("\\\"");
                continue;
            case 39 /* '\'' */:
                retval.append("\\\'");
                continue;
            case 92 /* '\\' */:
                retval.append("\\\\");
                continue;
            default:
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))((ch = str.charAt(i))) < 32 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(ch) > 126) {
                    let s : string = "0000" + /* toString */(''+(ch));
                    retval.append("\\u" + s.substring(s.length - 4, s.length));
                } else {
                    retval.append(ch);
                }
                continue;
            }
        }
        return retval.toString();
    }

    /**
     * Returns a detailed message for the Error when it's thrown by the
     * token manager to indicate a lexical error.
     * Parameters :
     * EOFSeen     : indicates if EOF caused the lexicl error
     * curLexState : lexical state in which this error occurred
     * errorLine   : line number when the error occurred
     * errorColumn : column number when the error occurred
     * errorAfter  : prefix that was seen before this error occurred
     * curchar     : the offending character
     * Note: You can customize the lexical error message by modifying this method.
     * @param {boolean} EOFSeen
     * @param {number} lexState
     * @param {number} errorLine
     * @param {number} errorColumn
     * @param {String} errorAfter
     * @param {string} curChar
     * @return {String}
     */
    static LexicalError(EOFSeen : boolean, lexState : number, errorLine : number, errorColumn : number, errorAfter : string, curChar : string) : string {
        return ("Lexical error: encountered " + (EOFSeen?"<EOF> ":("\"" + TokenMgrError.addEscapes(/* valueOf */new String(curChar).toString()) + "\"") + " (" + curChar + "), ") + "after \"" + TokenMgrError.addEscapes(errorAfter) + "\".");
    }

    public constructor(EOFSeen? : any, lexState? : any, errorLine? : any, errorColumn? : any, errorAfter? : any, curChar? : any, reason? : any) {
        if(((typeof EOFSeen === 'boolean') || EOFSeen === null) && ((typeof lexState === 'number') || lexState === null) && ((typeof errorLine === 'number') || errorLine === null) && ((typeof errorColumn === 'number') || errorColumn === null) && ((typeof errorAfter === 'string') || errorAfter === null) && ((typeof curChar === 'string') || curChar === null) && ((typeof reason === 'number') || reason === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let detail : any = TokenMgrError.LexicalError(EOFSeen, lexState, errorLine, errorColumn, errorAfter, curChar);
                super(detail); this.message=detail;
                if(this.errorCode===undefined) this.errorCode = 0;
                if(this.detail===undefined) this.detail = null;
                if(this.lineNumber===undefined) this.lineNumber = null;
                if(this.columnNumber===undefined) this.columnNumber = null;
                if(this.endLineNumber===undefined) this.endLineNumber = null;
                if(this.endColumnNumber===undefined) this.endColumnNumber = null;
                (<any>Object).setPrototypeOf(this, TokenMgrError.prototype);
                if(this.errorCode===undefined) this.errorCode = 0;
                if(this.detail===undefined) this.detail = null;
                if(this.lineNumber===undefined) this.lineNumber = null;
                if(this.columnNumber===undefined) this.columnNumber = null;
                if(this.endLineNumber===undefined) this.endLineNumber = null;
                if(this.endColumnNumber===undefined) this.endColumnNumber = null;
                (() => {
                    this.detail = detail;
                    this.errorCode = reason;
                })();
            }
            (() => {
                this.lineNumber = errorLine;
                this.columnNumber = errorColumn;
                this.endLineNumber = this.lineNumber;
                this.endColumnNumber = this.columnNumber;
            })();
        } else if(((typeof EOFSeen === 'string') || EOFSeen === null) && ((typeof lexState === 'number') || lexState === null) && ((typeof errorLine === 'number') || errorLine === null) && ((typeof errorColumn === 'number') || errorColumn === null) && ((typeof errorAfter === 'number') || errorAfter === null) && ((typeof curChar === 'number') || curChar === null) && reason === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let detail : any = __args[0];
            let reason : any = __args[1];
            let endLineNumber : any = __args[4];
            let endColumnNumber : any = __args[5];
            super(detail); this.message=detail;
            if(this.errorCode===undefined) this.errorCode = 0;
            if(this.detail===undefined) this.detail = null;
            if(this.lineNumber===undefined) this.lineNumber = null;
            if(this.columnNumber===undefined) this.columnNumber = null;
            if(this.endLineNumber===undefined) this.endLineNumber = null;
            if(this.endColumnNumber===undefined) this.endColumnNumber = null;
            (<any>Object).setPrototypeOf(this, TokenMgrError.prototype);
            if(this.errorCode===undefined) this.errorCode = 0;
            if(this.detail===undefined) this.detail = null;
            if(this.lineNumber===undefined) this.lineNumber = null;
            if(this.columnNumber===undefined) this.columnNumber = null;
            if(this.endLineNumber===undefined) this.endLineNumber = null;
            if(this.endColumnNumber===undefined) this.endColumnNumber = null;
            (() => {
                this.detail = detail;
                this.errorCode = reason;
                this.lineNumber = errorLine;
                this.columnNumber = errorColumn;
                this.endLineNumber = endLineNumber;
                this.endColumnNumber = endColumnNumber;
            })();
        } else if(((typeof EOFSeen === 'string') || EOFSeen === null) && ((typeof lexState === 'number') || lexState === null) && ((typeof errorLine === 'number') || errorLine === null) && ((typeof errorColumn === 'number') || errorColumn === null) && errorAfter === undefined && curChar === undefined && reason === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let detail : any = __args[0];
            let reason : any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let endLineNumber : any = 0;
                let endColumnNumber : any = 0;
                super(detail); this.message=detail;
                if(this.errorCode===undefined) this.errorCode = 0;
                if(this.detail===undefined) this.detail = null;
                if(this.lineNumber===undefined) this.lineNumber = null;
                if(this.columnNumber===undefined) this.columnNumber = null;
                if(this.endLineNumber===undefined) this.endLineNumber = null;
                if(this.endColumnNumber===undefined) this.endColumnNumber = null;
                (<any>Object).setPrototypeOf(this, TokenMgrError.prototype);
                if(this.errorCode===undefined) this.errorCode = 0;
                if(this.detail===undefined) this.detail = null;
                if(this.lineNumber===undefined) this.lineNumber = null;
                if(this.columnNumber===undefined) this.columnNumber = null;
                if(this.endLineNumber===undefined) this.endLineNumber = null;
                if(this.endColumnNumber===undefined) this.endColumnNumber = null;
                (() => {
                    this.detail = detail;
                    this.errorCode = reason;
                    this.lineNumber = errorLine;
                    this.columnNumber = errorColumn;
                    this.endLineNumber = endLineNumber;
                    this.endColumnNumber = endColumnNumber;
                })();
            }
            (() => {
                this.endLineNumber = null;
                this.endColumnNumber = null;
            })();
        } else if(((typeof EOFSeen === 'string') || EOFSeen === null) && ((typeof lexState === 'number') || lexState === null) && errorLine === undefined && errorColumn === undefined && errorAfter === undefined && curChar === undefined && reason === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let detail : any = __args[0];
            let reason : any = __args[1];
            super(detail); this.message=detail;
            if(this.errorCode===undefined) this.errorCode = 0;
            if(this.detail===undefined) this.detail = null;
            if(this.lineNumber===undefined) this.lineNumber = null;
            if(this.columnNumber===undefined) this.columnNumber = null;
            if(this.endLineNumber===undefined) this.endLineNumber = null;
            if(this.endColumnNumber===undefined) this.endColumnNumber = null;
            (<any>Object).setPrototypeOf(this, TokenMgrError.prototype);
            if(this.errorCode===undefined) this.errorCode = 0;
            if(this.detail===undefined) this.detail = null;
            if(this.lineNumber===undefined) this.lineNumber = null;
            if(this.columnNumber===undefined) this.columnNumber = null;
            if(this.endLineNumber===undefined) this.endLineNumber = null;
            if(this.endColumnNumber===undefined) this.endColumnNumber = null;
            (() => {
                this.detail = detail;
                this.errorCode = reason;
            })();
        } else if(EOFSeen === undefined && lexState === undefined && errorLine === undefined && errorColumn === undefined && errorAfter === undefined && curChar === undefined && reason === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.errorCode===undefined) this.errorCode = 0;
            if(this.detail===undefined) this.detail = null;
            if(this.lineNumber===undefined) this.lineNumber = null;
            if(this.columnNumber===undefined) this.columnNumber = null;
            if(this.endLineNumber===undefined) this.endLineNumber = null;
            if(this.endColumnNumber===undefined) this.endColumnNumber = null;
            (<any>Object).setPrototypeOf(this, TokenMgrError.prototype);
            if(this.errorCode===undefined) this.errorCode = 0;
            if(this.detail===undefined) this.detail = null;
            if(this.lineNumber===undefined) this.lineNumber = null;
            if(this.columnNumber===undefined) this.columnNumber = null;
            if(this.endLineNumber===undefined) this.endLineNumber = null;
            if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        } else throw new Error('invalid overload');
    }

    /**
     * 1-based line number of the unexpected character(s).
     * 
     * @since 2.3.20
     * @return {Integer}
     */
    public getLineNumber() : number {
        return this.lineNumber;
    }

    /**
     * 1-based column number of the unexpected character(s).
     * 
     * @since 2.3.20
     * @return {Integer}
     */
    public getColumnNumber() : number {
        return this.columnNumber;
    }

    /**
     * Returns the 1-based line at which the last character of the wrong section is. This will be usually (but not
     * always) the same as {link #getLineNumber()} because the lexer can only point to the single character that
     * doesn't match any patterns.
     * 
     * @since 2.3.21
     * @return {Integer}
     */
    public getEndLineNumber() : number {
        return this.endLineNumber;
    }

    /**
     * Returns the 1-based column at which the last character of the wrong section is. This will be usually (but not
     * always) the same as {link #getColumnNumber()} because the lexer can only point to the single character that
     * doesn't match any patterns.
     * 
     * @since 2.3.21
     * @return {Integer}
     */
    public getEndColumnNumber() : number {
        return this.endColumnNumber;
    }

    public getDetail() : string {
        return this.detail;
    }

    public toParseException(template : /*Template*/any) : ParseException {
        return new ParseException(this.getDetail(), template, this.getLineNumber() != null?this.getLineNumber():0, this.getColumnNumber() != null?this.getColumnNumber():0, this.getEndLineNumber() != null?this.getEndLineNumber():0, this.getEndColumnNumber() != null?this.getEndColumnNumber():0);
    }
}
TokenMgrError["__class"] = "freemarker.core.TokenMgrError";
TokenMgrError["__interfaces"] = ["java.io.Serializable"];




