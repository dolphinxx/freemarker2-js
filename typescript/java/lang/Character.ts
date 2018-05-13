/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {Serializable} from "../../java/io/Serializable";

/**
 * Wraps a native <code>char</code> as an object.
 *
 * TODO(jat): many of the classification methods implemented here are not
 * correct in that they only handle ASCII characters, and many other methods are
 * not currently implemented. I think the proper approach is to introduce * a
 * deferred binding parameter which substitutes an implementation using a
 * fully-correct Unicode character database, at the expense of additional data
 * being downloaded. That way developers that need the functionality can get it
 * without those who don't need it paying for it.
 *
 * <pre>
 * The following methods are still not implemented -- most would require Unicode
 * character db to be useful:
 * - digit / is* / to*(int codePoint)
 * - isDefined(char)
 * - isIdentifierIgnorable(char)
 * - isJavaIdentifierPart(char)
 * - isJavaIdentifierStart(char)
 * - isJavaLetter(char) -- deprecated, so probably not
 * - isJavaLetterOrDigit(char) -- deprecated, so probably not
 * - isISOControl(char)
 * - isMirrored(char)
 * - isSpaceChar(char)
 * - isTitleCase(char)
 * - isUnicodeIdentifierPart(char)
 * - isUnicodeIdentifierStart(char)
 * - getDirectionality(*)
 * - getNumericValue(*)
 * - getType(*)
 * - reverseBytes(char) -- any use for this at all in the browser?
 * - toTitleCase(*)
 * - all the category constants for classification
 *
 * The following do not properly handle characters outside of ASCII:
 * - digit(char c, int radix)
 * - isDigit(char c)
 * - isLetter(char c)
 * - isLetterOrDigit(char c)
 * - isLowerCase(char c)
 * - isUpperCase(char c)
 * </pre>
 * @param {string} value
 * @class
 */
export class Character implements Serializable {
    public static TYPE: any;

    public static TYPE_$LI$(): any {
        if (Character.TYPE == null) Character.TYPE = String;
        return Character.TYPE;
    };

    public static MIN_RADIX: number = 2;

    public static MAX_RADIX: number = 36;

    public static MIN_VALUE: string = '\u0000';

    public static MAX_VALUE: string = '\uffff';

    public static MIN_SURROGATE: string = '\ud800';

    public static MAX_SURROGATE: string = '\udfff';

    public static MIN_LOW_SURROGATE: string = '\udc00';

    public static MAX_LOW_SURROGATE: string = '\udfff';

    public static MIN_HIGH_SURROGATE: string = '\ud800';

    public static MAX_HIGH_SURROGATE: string = '\udbff';

    public static MIN_SUPPLEMENTARY_CODE_POINT: number = 65536;

    public static MIN_CODE_POINT: number = 0;

    public static MAX_CODE_POINT: number = 1114111;

    public static SIZE: number = 16;

    public static charCount(codePoint: number): number {
        return codePoint >= Character.MIN_SUPPLEMENTARY_CODE_POINT ? 2 : 1;
    }

    public static codePointAt$char_A$int(a: string[], index: number): number {
        return Character.codePointAt$java_lang_CharSequence$int$int(<string>new String(a), index, a.length);
    }

    public static codePointAt$char_A$int$int(a: string[], index: number, limit: number): number {
        return Character.codePointAt$java_lang_CharSequence$int$int(<string>new String(a), index, limit);
    }

    public static codePointAt(a?: any, index?: any, limit?: any): any {
        if (((a != null && a instanceof <any>Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
            return <any>Character.codePointAt$char_A$int$int(a, index, limit);
        } else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof limit === 'number') || limit === null)) {
            return <any>Character.codePointAt$java_lang_CharSequence$int$int(a, index, limit);
        } else if (((a != null && a instanceof <any>Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
            return <any>Character.codePointAt$char_A$int(a, index);
        } else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && limit === undefined) {
            return <any>Character.codePointAt$java_lang_CharSequence$int(a, index);
        } else throw new Error('invalid overload');
    }

    public static codePointAt$java_lang_CharSequence$int(seq: any, index: number): number {
        return Character.codePointAt$java_lang_CharSequence$int$int(seq, index, seq.length);
    }

    public static codePointBefore$char_A$int(a: string[], index: number): number {
        return Character.codePointBefore$java_lang_CharSequence$int$int(<string>new String(a), index, 0);
    }

    public static codePointBefore$char_A$int$int(a: string[], index: number, start: number): number {
        return Character.codePointBefore$java_lang_CharSequence$int$int(<string>new String(a), index, start);
    }

    public static codePointBefore(a?: any, index?: any, start?: any): any {
        if (((a != null && a instanceof <any>Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
            return <any>Character.codePointBefore$char_A$int$int(a, index, start);
        } else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && ((typeof start === 'number') || start === null)) {
            return <any>Character.codePointBefore$java_lang_CharSequence$int$int(a, index, start);
        } else if (((a != null && a instanceof <any>Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
            return <any>Character.codePointBefore$char_A$int(a, index);
        } else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof index === 'number') || index === null) && start === undefined) {
            return <any>Character.codePointBefore$java_lang_CharSequence$int(a, index);
        } else throw new Error('invalid overload');
    }

    public static codePointBefore$java_lang_CharSequence$int(cs: any, index: number): number {
        return Character.codePointBefore$java_lang_CharSequence$int$int(cs, index, 0);
    }

    public static codePointCount$char_A$int$int(a: string[], offset: number, count: number): number {
        return Character.codePointCount$java_lang_CharSequence$int$int(<string>new String(a), offset, offset + count);
    }

    public static codePointCount(a?: any, offset?: any, count?: any): any {
        if (((a != null && a instanceof <any>Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
            return <any>Character.codePointCount$char_A$int$int(a, offset, count);
        } else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof offset === 'number') || offset === null) && ((typeof count === 'number') || count === null)) {
            return <any>Character.codePointCount$java_lang_CharSequence$int$int(a, offset, count);
        } else throw new Error('invalid overload');
    }

    public static codePointCount$java_lang_CharSequence$int$int(seq: any, beginIndex: number, endIndex: number): number {
        let count: number = 0;
        for (let idx: number = beginIndex; idx < endIndex;) {
            let ch: string = seq.charAt(idx++);
            if (Character.isHighSurrogate(ch) && idx < endIndex && (Character.isLowSurrogate(seq.charAt(idx)))) {
                ++idx;
            }
            ++count;
        }
        ;
        return count;
    }

    public static compare(x: string, y: string): number {
        return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(x) - (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(y);
    }

    public static digit(c: string, radix: number): number {
        if (radix < Character.MIN_RADIX || radix > Character.MAX_RADIX) {
            return -1;
        }
        if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) >= '0'.charCodeAt(0) && (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) < '0'.charCodeAt(0) + Math.min(radix, 10)) {
            return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) - '0'.charCodeAt(0);
        }
        if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) >= 'a'.charCodeAt(0) && (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) < (radix + 'a'.charCodeAt(0) - 10)) {
            return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) - 'a'.charCodeAt(0) + 10;
        }
        if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) >= 'A'.charCodeAt(0) && (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) < (radix + 'A'.charCodeAt(0) - 10)) {
            return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) - 'A'.charCodeAt(0) + 10;
        }
        return -1;
    }

    public static getNumericValue(ch: string): number {
        return (<number>(<any>((<any>ch))).charCodeAt(0) | 0);
    }

    public static forDigit$int$int(digit: number, radix: number): string {
        if (radix < Character.MIN_RADIX || radix > Character.MAX_RADIX) {
            return String.fromCharCode(0);
        }
        if (digit < 0 || digit >= radix) {
            return String.fromCharCode(0);
        }
        return Character.forDigit$int(digit);
    }

    public static forDigit(digit?: any, radix?: any): any {
        if (((typeof digit === 'number') || digit === null) && ((typeof radix === 'number') || radix === null)) {
            return <any>Character.forDigit$int$int(digit, radix);
        } else if (((typeof digit === 'number') || digit === null) && radix === undefined) {
            return <any>Character.forDigit$int(digit);
        } else throw new Error('invalid overload');
    }

    /**
     * @skip
     *
     * public for shared implementation with Arrays.hashCode
     * @param {string} c
     * @return {number}
     */
    public static hashCode(c: string): number {
        return (c).charCodeAt(0);
    }

    public static isDigit(c: string): boolean {
        const matchResult:RegExpMatchArray = c.match(Character.digitRegex());
        return matchResult != null && matchResult.length > 0;
    }

    static digitRegex(): RegExp {
        return new RegExp("\\d");
    }

    public static isHighSurrogate(ch: string): boolean {
        return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(ch) >= (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.MIN_HIGH_SURROGATE) && (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(ch) <= (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.MAX_HIGH_SURROGATE);
    }

    public static isLetter(c: string): boolean {
        const matchResult:RegExpMatchArray = c.match(Character.leterRegex());
        return matchResult != null && matchResult.length > 0;
    }

    static leterRegex(): RegExp {
        return new RegExp("[A-Z]", "i");
    }

    public static isLetterOrDigit(c: string): boolean {
        const matchResult:RegExpMatchArray = c.match(Character.leterOrDigitRegex());
        return matchResult != null && matchResult.length > 0;
    }

    static leterOrDigitRegex(): RegExp {
        return new RegExp("[A-Z\\d]", "i");
    }

    public static isLowerCase(c: string): boolean {
        return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.toLowerCase$char(c)) == (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) && Character.isLetter(c);
    }

    public static isLowSurrogate(ch: string): boolean {
        return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(ch) >= (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.MIN_LOW_SURROGATE) && (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(ch) <= (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.MAX_LOW_SURROGATE);
    }

    /**
     * Deprecated - see isWhitespace(char).
     * @param {string} c
     * @return {boolean}
     */
    public static isSpace(c: string): boolean {
        switch ((c).charCodeAt(0)) {
            case 32 /* ' ' */
            :
                return true;
            case 10 /* '\n' */
            :
                return true;
            case 9 /* '\t' */
            :
                return true;
            case 12 /* '\f' */
            :
                return true;
            case 13 /* '\r' */
            :
                return true;
            default:
                return false;
        }
    }

    public static isWhitespace$char(ch: string): boolean {
        return Character.whitespaceRegex().test(ch);
    }

    public static isWhitespace(ch?: any): any {
        if (((typeof ch === 'string') || ch === null)) {
            return <any>Character.isWhitespace$char(ch);
        } else if (((typeof ch === 'number') || ch === null)) {
            return <any>Character.isWhitespace$int(ch);
        } else throw new Error('invalid overload');
    }

    public static isWhitespace$int(codePoint: number): boolean {
        return Character.whitespaceRegex().test(String.fromCharCode(codePoint));
    }

    static whitespaceRegex(): RegExp {
        return new RegExp("[\\t-\\r \\u1680\\u180E\\u2000-\\u2006\\u2008-\\u200A\\u2028\\u2029\\u205F\\u3000\\uFEFF]|[\\x1C-\\x1F]");
    }

    public static isSupplementaryCodePoint(codePoint: number): boolean {
        return codePoint >= Character.MIN_SUPPLEMENTARY_CODE_POINT && codePoint <= Character.MAX_CODE_POINT;
    }

    public static isSurrogatePair(highSurrogate: string, lowSurrogate: string): boolean {
        return Character.isHighSurrogate(highSurrogate) && Character.isLowSurrogate(lowSurrogate);
    }

    public static isUpperCase(c: string): boolean {
        return (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.toUpperCase$char(c)) == (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) && Character.isLetter(c);
    }

    public static isValidCodePoint(codePoint: number): boolean {
        return codePoint >= Character.MIN_CODE_POINT && codePoint <= Character.MAX_CODE_POINT;
    }

    public static offsetByCodePoints$char_A$int$int$int$int(a: string[], start: number, count: number, index: number, codePointOffset: number): number {
        return Character.offsetByCodePoints$java_lang_CharSequence$int$int(<string>((str, index, len) => str.substring(index, index + len))((a).join(''), start, count), index, codePointOffset);
    }

    public static offsetByCodePoints(a?: any, start?: any, count?: any, index?: any, codePointOffset?: any): any {
        if (((a != null && a instanceof <any>Array && (a.length == 0 || a[0] == null || (typeof a[0] === 'string'))) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && ((typeof index === 'number') || index === null) && ((typeof codePointOffset === 'number') || codePointOffset === null)) {
            return <any>Character.offsetByCodePoints$char_A$int$int$int$int(a, start, count, index, codePointOffset);
        } else if (((a != null && (a["__interfaces"] != null && a["__interfaces"].indexOf("CharSequence") >= 0 || a.constructor != null && a.constructor["__interfaces"] != null && a.constructor["__interfaces"].indexOf("CharSequence") >= 0 || typeof a === "string")) || a === null) && ((typeof start === 'number') || start === null) && ((typeof count === 'number') || count === null) && index === undefined && codePointOffset === undefined) {
            return <any>Character.offsetByCodePoints$java_lang_CharSequence$int$int(a, start, count);
        } else throw new Error('invalid overload');
    }

    public static offsetByCodePoints$java_lang_CharSequence$int$int(seq: any, index: number, codePointOffset: number): number {
        if (codePointOffset < 0) {
            while ((codePointOffset < 0)) {
                --index;
                if (Character.isLowSurrogate(seq.charAt(index)) && Character.isHighSurrogate(seq.charAt(index - 1))) {
                    --index;
                }
                ++codePointOffset;
            }
            ;
        } else {
            while ((codePointOffset > 0)) {
                if (Character.isHighSurrogate(seq.charAt(index)) && Character.isLowSurrogate(seq.charAt(index + 1))) {
                    ++index;
                }
                ++index;
                --codePointOffset;
            }
            ;
        }
        return index;
    }

    public static toChars$int(codePoint: number): string[] {
        // InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= Character.MAX_CODE_POINT);
        if (codePoint >= Character.MIN_SUPPLEMENTARY_CODE_POINT) {
            return [Character.getHighSurrogate(codePoint), Character.getLowSurrogate(codePoint)];
        } else {
            return [String.fromCharCode(codePoint)];
        }
    }

    public static toChars$int$char_A$int(codePoint: number, dst: string[], dstIndex: number): number {
        // InternalPreconditions.checkCriticalArgument(codePoint >= 0 && codePoint <= Character.MAX_CODE_POINT);
        if (codePoint >= Character.MIN_SUPPLEMENTARY_CODE_POINT) {
            dst[dstIndex++] = Character.getHighSurrogate(codePoint);
            dst[dstIndex] = Character.getLowSurrogate(codePoint);
            return 2;
        } else {
            dst[dstIndex] = String.fromCharCode(codePoint);
            return 1;
        }
    }

    public static toChars(codePoint?: any, dst?: any, dstIndex?: any): any {
        if (((typeof codePoint === 'number') || codePoint === null) && ((dst != null && dst instanceof <any>Array && (dst.length == 0 || dst[0] == null || (typeof dst[0] === 'string'))) || dst === null) && ((typeof dstIndex === 'number') || dstIndex === null)) {
            return <any>Character.toChars$int$char_A$int(codePoint, dst, dstIndex);
        } else if (((typeof codePoint === 'number') || codePoint === null) && dst === undefined && dstIndex === undefined) {
            return <any>Character.toChars$int(codePoint);
        } else throw new Error('invalid overload');
    }

    public static toCodePoint(highSurrogate: string, lowSurrogate: string): number {
        return Character.MIN_SUPPLEMENTARY_CODE_POINT + (((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(highSurrogate) & 1023) << 10) + ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(lowSurrogate) & 1023);
    }

    public static toLowerCase$char(c: string): string {
        return /* valueOf */new String(c).toString().toLowerCase().charAt(0);
    }

    public static toLowerCase(c?: any): any {
        if (((typeof c === 'string') || c === null)) {
            return <any>Character.toLowerCase$char(c);
        } else if (((typeof c === 'number') || c === null)) {
            return <any>Character.toLowerCase$int(c);
        } else throw new Error('invalid overload');
    }

    public static toLowerCase$int(c: number): number {
        return (/* valueOf */new String(String.fromCharCode(c)).toString().toLowerCase().charAt(0)).charCodeAt(0);
    }

    public static toString(x: string): string {
        return /* valueOf */new String(x).toString();
    }

    public static toUpperCase$char(c: string): string {
        return /* valueOf */new String(c).toString().toUpperCase().charAt(0);
    }

    public static toUpperCase(c?: any): any {
        if (((typeof c === 'string') || c === null)) {
            return <any>Character.toUpperCase$char(c);
        } else if (((typeof c === 'number') || c === null)) {
            return <any>Character.toUpperCase$int(c);
        } else throw new Error('invalid overload');
    }

    public static toUpperCase$int(c: number): string {
        return /* valueOf */new String(String.fromCharCode(c)).toString().toUpperCase().charAt(0);
    }

    public static valueOf(c: string): string {
        if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(c) < 128) {
            let result: string = Character.BoxedValues.boxedValues_$LI$()[(c).charCodeAt(0)];
            if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(result) == null) {
                result = Character.BoxedValues.boxedValues_$LI$()[(c).charCodeAt(0)] = <string>new String(c);
            }
            return result;
        }
        return <string>new String(c);
    }

    static codePointAt$java_lang_CharSequence$int$int(cs: any, index: number, limit: number): number {
        let hiSurrogate: string = cs.charAt(index++);
        let loSurrogate: string;
        if (Character.isHighSurrogate(hiSurrogate) && index < limit && Character.isLowSurrogate(loSurrogate = cs.charAt(index))) {
            return Character.toCodePoint(hiSurrogate, loSurrogate);
        }
        return (hiSurrogate).charCodeAt(0);
    }

    static codePointBefore$java_lang_CharSequence$int$int(cs: any, index: number, start: number): number {
        let loSurrogate: string = cs.charAt(--index);
        let highSurrogate: string;
        if (Character.isLowSurrogate(loSurrogate) && index > start && Character.isHighSurrogate(highSurrogate = cs.charAt(index - 1))) {
            return Character.toCodePoint(highSurrogate, loSurrogate);
        }
        return (loSurrogate).charCodeAt(0);
    }

    static forDigit$int(digit: number): string {
        let overBaseTen: number = digit - 10;
        return String.fromCharCode((overBaseTen < 0 ? '0'.charCodeAt(0) + digit : 'a'.charCodeAt(0) + overBaseTen));
    }

    /**
     * Computes the high surrogate character of the UTF16 representation of a
     * non-BMP code point. See {@link getLowSurrogate}.
     *
     * @param {number} codePoint
     * requested codePoint, required to be >=
     * MIN_SUPPLEMENTARY_CODE_POINT
     * @return {string} high surrogate character
     */
    static getHighSurrogate(codePoint: number): string {
        return String.fromCharCode(((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.MIN_HIGH_SURROGATE) + (((codePoint - Character.MIN_SUPPLEMENTARY_CODE_POINT) >> 10) & 1023)));
    }

    /**
     * Computes the low surrogate character of the UTF16 representation of a
     * non-BMP code point. See {@link getHighSurrogate}.
     *
     * @param {number} codePoint
     * requested codePoint, required to be >=
     * MIN_SUPPLEMENTARY_CODE_POINT
     * @return {string} low surrogate character
     */
    static getLowSurrogate(codePoint: number): string {
        return String.fromCharCode(((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(Character.MIN_LOW_SURROGATE) + ((codePoint - Character.MIN_SUPPLEMENTARY_CODE_POINT) & 1023)));
    }

    /*private*/
    value: string;

    public constructor(value: string) {
        this.value = null;
        this.value = value;
    }

    public charValue(): string {
        return this.value;
    }

    public compareTo$javaemul_internal_Character(c: Character): number {
        return Character.compare(this.value, c.value);
    }

    /**
     *
     * @param {javaemul.internal.Character} c
     * @return {number}
     */
    public compareTo(c?: any): any {
        if (((c != null && c instanceof <any>Character) || c === null)) {
            return <any>this.compareTo$javaemul_internal_Character(c);
        } else throw new Error('invalid overload');
    }

    /**
     *
     * @param {*} o
     * @return {boolean}
     */
    public equals(o: any): boolean {
        return (o != null && o instanceof <any>Character) && ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))((<Character>o).value) == (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(this.value));
    }

    /**
     *
     * @return {number}
     */
    public hashCode(): number {
        return /* hashCode */(<any>((o: any) => {
            if (o.hashCode) {
                return o.hashCode();
            } else {
                return o.toString();
            }
        })(this));
    }

    /**
     *
     * @return {string}
     */
    public toString(): string {
        return /* valueOf */new String(this.value).toString();
    }
}

Character["__class"] = "javaemul.internal.Character";
Character["__interfaces"] = ["Comparable", "java.io.Serializable"];


export namespace Character {

    /**
     * Use nested class to avoid clinit on outer.
     * @class
     */
    export class BoxedValues {
        static boxedValues: string[];

        public static boxedValues_$LI$(): string[] {
            if (BoxedValues.boxedValues == null) BoxedValues.boxedValues = new Array(128);
            return BoxedValues.boxedValues;
        };

        constructor() {
        }
    }

    BoxedValues["__class"] = "javaemul.internal.Character.BoxedValues";

}


Character.BoxedValues.boxedValues_$LI$();

Character.TYPE_$LI$();
