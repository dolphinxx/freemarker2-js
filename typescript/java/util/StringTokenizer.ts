/**
 * Constructs a string tokenizer for the specified string. All
 * characters in the <code>delim</code> argument are the delimiters
 * for separating tokens.
 * <p>
 * If the <code>returnDelims</code> flag is <code>true</code>, then
 * the delimiter characters are also returned as tokens. Each
 * delimiter is returned as a string of length one. If the flag is
 * <code>false</code>, the delimiter characters are skipped and only
 * serve as separators between tokens.
 * <p>
 * Note that if <tt>delim</tt> is <tt>null</tt>, this constructor does
 * not throw an exception. However, trying to invoke other methods on the
 * resulting <tt>StringTokenizer</tt> may result in a
 * <tt>NullPointerException</tt>.
 * 
 * @param {string} str          a string to be parsed.
 * @param {string} delim        the delimiters.
 * @param {boolean} returnDelims flag indicating whether to return the delimiters
 * as tokens.
 * throws NullPointerException if str is <CODE>null</CODE>
 * @class
 * @author unascribed
 */
export class StringTokenizer {
    /*private*/ currentPosition : number;

    /*private*/ newPosition : number;

    /*private*/ maxPosition : number;

    /*private*/ str : string;

    /*private*/ delimiters : string;

    /*private*/ retDelims : boolean;

    /*private*/ delimsChanged : boolean;

    /**
     * maxDelimCodePoint stores the value of the delimiter character with the
     * highest value. It is used to optimize the detection of delimiter
     * characters.
     * <p>
     * It is unlikely to provide any optimization benefit in the
     * hasSurrogates case because most string characters will be
     * smaller than the limit, but we keep it so that the two code
     * paths remain similar.
     */
    /*private*/ maxDelimCodePoint : number;

    /**
     * If delimiters include any surrogates (including surrogate
     * pairs), hasSurrogates is true and the tokenizer uses the
     * different code path. This is because String.indexOf(int)
     * doesn't handle unpaired surrogates as a single character.
     */
    /*private*/ hasSurrogates : boolean = false;

    /**
     * When hasSurrogates is true, delimiters are converted to code
     * points and isDelimiter(int) is used to determine if the given
     * codepoint is a delimiter.
     */
    /*private*/ delimiterCodePoints : number[];

    /**
     * Set maxDelimCodePoint to the highest char in the delimiter set.
     * @private
     */
    /*private*/ setMaxDelimCodePoint() {
        if(this.delimiters == null) {
            this.maxDelimCodePoint = 0;
            return;
        }
        let m : number = 0;
        let c : number;
        let count : number = 0;
        for(let i : number = 0; i < this.delimiters.length; i += (c >= 65536?2:1)) {
            c = (this.delimiters.charAt(i)).charCodeAt(0);
            if(c >= '\ud800'.charCodeAt(0) && c <= '\udfff'.charCodeAt(0)) {
                c = /* codePointAt */this.delimiters.charCodeAt(i);
                this.hasSurrogates = true;
            }
            if(m < c) m = c;
            count++;
        };
        this.maxDelimCodePoint = m;
        if(this.hasSurrogates) {
            this.delimiterCodePoints = (s => { let a=[]; while(s-->0) a.push(0); return a; })(count);
            for(let i : number = 0, j : number = 0; i < count; i++, j += (c >= 65536?2:1)) {
                c = /* codePointAt */this.delimiters.charCodeAt(j);
                this.delimiterCodePoints[i] = c;
            };
        }
    }

    public constructor(str? : any, delim? : any, returnDelims? : any) {
        if(((typeof str === 'string') || str === null) && ((typeof delim === 'string') || delim === null) && ((typeof returnDelims === 'boolean') || returnDelims === null)) {
            let __args = Array.prototype.slice.call(arguments);
            this.currentPosition = 0;
            this.newPosition = 0;
            this.maxPosition = 0;
            this.str = null;
            this.delimiters = null;
            this.retDelims = false;
            this.delimsChanged = false;
            this.maxDelimCodePoint = 0;
            this.delimiterCodePoints = null;
            this.hasSurrogates = false;
            this.currentPosition = 0;
            this.newPosition = 0;
            this.maxPosition = 0;
            this.str = null;
            this.delimiters = null;
            this.retDelims = false;
            this.delimsChanged = false;
            this.maxDelimCodePoint = 0;
            this.delimiterCodePoints = null;
            (() => {
                this.currentPosition = 0;
                this.newPosition = -1;
                this.delimsChanged = false;
                this.str = str;
                this.maxPosition = str.length;
                this.delimiters = delim;
                this.retDelims = returnDelims;
                this.setMaxDelimCodePoint();
            })();
        } else if(((typeof str === 'string') || str === null) && ((typeof delim === 'string') || delim === null) && returnDelims === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let returnDelims : any = false;
                this.currentPosition = 0;
                this.newPosition = 0;
                this.maxPosition = 0;
                this.str = null;
                this.delimiters = null;
                this.retDelims = false;
                this.delimsChanged = false;
                this.maxDelimCodePoint = 0;
                this.delimiterCodePoints = null;
                this.hasSurrogates = false;
                this.currentPosition = 0;
                this.newPosition = 0;
                this.maxPosition = 0;
                this.str = null;
                this.delimiters = null;
                this.retDelims = false;
                this.delimsChanged = false;
                this.maxDelimCodePoint = 0;
                this.delimiterCodePoints = null;
                (() => {
                    this.currentPosition = 0;
                    this.newPosition = -1;
                    this.delimsChanged = false;
                    this.str = str;
                    this.maxPosition = str.length;
                    this.delimiters = delim;
                    this.retDelims = returnDelims;
                    this.setMaxDelimCodePoint();
                })();
            }
        } else if(((typeof str === 'string') || str === null) && delim === undefined && returnDelims === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let delim : any = " \t\n\r\f";
                let returnDelims : any = false;
                this.currentPosition = 0;
                this.newPosition = 0;
                this.maxPosition = 0;
                this.str = null;
                this.delimiters = null;
                this.retDelims = false;
                this.delimsChanged = false;
                this.maxDelimCodePoint = 0;
                this.delimiterCodePoints = null;
                this.hasSurrogates = false;
                this.currentPosition = 0;
                this.newPosition = 0;
                this.maxPosition = 0;
                this.str = null;
                this.delimiters = null;
                this.retDelims = false;
                this.delimsChanged = false;
                this.maxDelimCodePoint = 0;
                this.delimiterCodePoints = null;
                (() => {
                    this.currentPosition = 0;
                    this.newPosition = -1;
                    this.delimsChanged = false;
                    this.str = str;
                    this.maxPosition = str.length;
                    this.delimiters = delim;
                    this.retDelims = returnDelims;
                    this.setMaxDelimCodePoint();
                })();
            }
        } else throw new Error('invalid overload');
    }

    /**
     * Skips delimiters starting from the specified position. If retDelims
     * is false, returns the index of the first non-delimiter character at or
     * after startPos. If retDelims is true, startPos is returned.
     * @param {number} startPos
     * @return {number}
     * @private
     */
    /*private*/ skipDelimiters(startPos : number) : number {
        if(this.delimiters == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.NullPointerException','java.lang.Exception'] });
        let position : number = startPos;
        while((!this.retDelims && position < this.maxPosition)) {
            if(!this.hasSurrogates) {
                let c : string = this.str.charAt(position);
                if(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) > this.maxDelimCodePoint) || (this.delimiters.indexOf(c) < 0)) break;
                position++;
            } else {
                let c : number = /* codePointAt */this.str.charCodeAt(position);
                if((c > this.maxDelimCodePoint) || !this.isDelimiter(c)) {
                    break;
                }
                position += (c >= 65536?2:1);
            }
        };
        return position;
    }

    /**
     * Skips ahead from startPos and returns the index of the next delimiter
     * character encountered, or maxPosition if no such delimiter is found.
     * @param {number} startPos
     * @return {number}
     * @private
     */
    /*private*/ scanToken(startPos : number) : number {
        let position : number = startPos;
        while((position < this.maxPosition)) {
            if(!this.hasSurrogates) {
                let c : string = this.str.charAt(position);
                if(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= this.maxDelimCodePoint) && (this.delimiters.indexOf(c) >= 0)) break;
                position++;
            } else {
                let c : number = /* codePointAt */this.str.charCodeAt(position);
                if((c <= this.maxDelimCodePoint) && this.isDelimiter(c)) break;
                position += (c >= 65536?2:1);
            }
        };
        if(this.retDelims && (startPos === position)) {
            if(!this.hasSurrogates) {
                let c : string = this.str.charAt(position);
                if(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= this.maxDelimCodePoint) && (this.delimiters.indexOf(c) >= 0)) position++;
            } else {
                let c : number = /* codePointAt */this.str.charCodeAt(position);
                if((c <= this.maxDelimCodePoint) && this.isDelimiter(c)) position += (c >= 65536?2:1);
            }
        }
        return position;
    }

    /*private*/ isDelimiter(codePoint : number) : boolean {
        for(let i : number = 0; i < this.delimiterCodePoints.length; i++) {
            if(this.delimiterCodePoints[i] === codePoint) {
                return true;
            }
        };
        return false;
    }

    /**
     * Tests if there are more tokens available from this tokenizer's string.
     * If this method returns <tt>true</tt>, then a subsequent call to
     * <tt>nextToken</tt> with no argument will successfully return a token.
     * 
     * @return {boolean} <code>true</code> if and only if there is at least one token
     * in the string after the current position; <code>false</code>
     * otherwise.
     */
    public hasMoreTokens() : boolean {
        this.newPosition = this.skipDelimiters(this.currentPosition);
        return (this.newPosition < this.maxPosition);
    }

    public nextToken$() : string {
        this.currentPosition = (this.newPosition >= 0 && !this.delimsChanged)?this.newPosition:this.skipDelimiters(this.currentPosition);
        this.delimsChanged = false;
        this.newPosition = -1;
        if(this.currentPosition >= this.maxPosition) throw new Error();
        let start : number = this.currentPosition;
        this.currentPosition = this.scanToken(this.currentPosition);
        return this.str.substring(start, this.currentPosition);
    }

    public nextToken$java_lang_String(delim : string) : string {
        this.delimiters = delim;
        this.delimsChanged = true;
        this.setMaxDelimCodePoint();
        return this.nextToken();
    }

    /**
     * Returns the next token in this string tokenizer's string. First,
     * the set of characters considered to be delimiters by this
     * <tt>StringTokenizer</tt> object is changed to be the characters in
     * the string <tt>delim</tt>. Then the next token in the string
     * after the current position is returned. The current position is
     * advanced beyond the recognized token.  The new delimiter set
     * remains the default after this call.
     * 
     * @param {string} delim the new delimiters.
     * @return {string} the next token, after switching to the new delimiter set.
     * throws NoSuchElementException if there are no more tokens in this
     * tokenizer's string.
     * throws NullPointerException   if delim is <CODE>null</CODE>
     */
    public nextToken(delim? : any) : any {
        if(((typeof delim === 'string') || delim === null)) {
            return <any>this.nextToken$java_lang_String(delim);
        } else if(delim === undefined) {
            return <any>this.nextToken$();
        } else throw new Error('invalid overload');
    }

    /**
     * Returns the same value as the <code>hasMoreTokens</code>
     * method. It exists so that this class can implement the
     * <code>Enumeration</code> interface.
     * 
     * @return {boolean} <code>true</code> if there are more tokens;
     * <code>false</code> otherwise.
     * see java.util.Enumeration
     * see java.util.StringTokenizer#hasMoreTokens()
     */
    public hasMoreElements() : boolean {
        return this.hasMoreTokens();
    }

    /**
     * Returns the same value as the <code>nextToken</code> method,
     * except that its declared return value is <code>Object</code> rather than
     * <code>String</code>. It exists so that this class can implement the
     * <code>Enumeration</code> interface.
     * 
     * @return {*} the next token in the string.
     * throws NoSuchElementException if there are no more tokens in this
     * tokenizer's string.
     * see java.util.Enumeration
     * see java.util.StringTokenizer#nextToken()
     */
    public nextElement() : any {
        return this.nextToken();
    }

    /**
     * Calculates the number of times that this tokenizer's
     * <code>nextToken</code> method can be called before it generates an
     * exception. The current position is not advanced.
     * 
     * @return {number} the number of tokens remaining in the string using the current
     * delimiter set.
     * see java.util.StringTokenizer#nextToken()
     */
    public countTokens() : number {
        let count : number = 0;
        let currpos : number = this.currentPosition;
        while((currpos < this.maxPosition)) {
            currpos = this.skipDelimiters(currpos);
            if(currpos >= this.maxPosition) break;
            currpos = this.scanToken(currpos);
            count++;
        };
        return count;
    }
}
StringTokenizer["__class"] = "java.util.StringTokenizer";
StringTokenizer["__interfaces"] = ["java.util.Enumeration"];




