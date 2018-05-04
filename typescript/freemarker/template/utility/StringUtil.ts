/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ParseException } from '../../core/ParseException';
import { Version } from '../Version';
import { Writer } from '../../../java/io/Writer';
import { StringBuilder } from '../../../java/lang/StringBuilder';
import { NullArgumentException } from './NullArgumentException';
import { Character } from '../../../java/lang/Character';
import { ClassUtil } from './ClassUtil';
import { CollectionUtils } from './CollectionUtils';
import { System } from '../../../java/lang/System';

/**
 * Some text related utilities.
 * @class
 */
export class StringUtil {
    /**
     * Used to look up if the chars with low code needs to be escaped, but note that it gives bad result for '=', as
     * there the it matters if it's after '['.
     */
    static ESCAPES : string[]; public static ESCAPES_$LI$() : string[] { if(StringUtil.ESCAPES == null) StringUtil.ESCAPES = StringUtil.createEscapes(); return StringUtil.ESCAPES; };

    static LT : string[]; public static LT_$LI$() : string[] { if(StringUtil.LT == null) StringUtil.LT = ['&', 'l', 't', ';']; return StringUtil.LT; };

    static GT : string[]; public static GT_$LI$() : string[] { if(StringUtil.GT == null) StringUtil.GT = ['&', 'g', 't', ';']; return StringUtil.GT; };

    static AMP : string[]; public static AMP_$LI$() : string[] { if(StringUtil.AMP == null) StringUtil.AMP = ['&', 'a', 'm', 'p', ';']; return StringUtil.AMP; };

    static QUOT : string[]; public static QUOT_$LI$() : string[] { if(StringUtil.QUOT == null) StringUtil.QUOT = ['&', 'q', 'u', 'o', 't', ';']; return StringUtil.QUOT; };

    static HTML_APOS : string[]; public static HTML_APOS_$LI$() : string[] { if(StringUtil.HTML_APOS == null) StringUtil.HTML_APOS = ['&', '#', '3', '9', ';']; return StringUtil.HTML_APOS; };

    static XML_APOS : string[]; public static XML_APOS_$LI$() : string[] { if(StringUtil.XML_APOS == null) StringUtil.XML_APOS = ['&', 'a', 'p', 'o', 's', ';']; return StringUtil.XML_APOS; };

    /**
     * HTML encoding (does not convert line breaks and apostrophe-quote).
     * Replaces all '&gt;' '&lt;' '&amp;' and '"' with entity reference, but not "'" (apostrophe-quote).
     * The last is not escaped as back then when this was written some user agents didn't understood
     * "&amp;apos;" nor "&amp;#39;".
     * 
     * @deprecated Use {link #XHTMLEnc(String)} instead, because it escapes apostrophe-quote too.
     * @param {String} s
     * @return {String}
     */
    public static HTMLEnc(s : string) : string {
        return StringUtil.XMLEncNA(s);
    }

    public static XMLEnc$java_lang_String(s : string) : string {
        return StringUtil.XMLOrHTMLEnc$java_lang_String$boolean$boolean$char_A(s, true, true, StringUtil.XML_APOS_$LI$());
    }

    public static XMLEnc$java_lang_String$java_io_Writer(s : string, out : Writer) {
        StringUtil.XMLOrHTMLEnc$java_lang_String$char_A$java_io_Writer(s, StringUtil.XML_APOS_$LI$(), out);
    }

    /**
     * Like {link #XMLEnc(String)}, but writes the result into a {link Writer}.
     * 
     * @since 2.3.24
     * @param {String} s
     * @param {Writer} out
     */
    public static XMLEnc(s? : any, out? : any) : any {
        if(((typeof s === 'string') || s === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>StringUtil.XMLEnc$java_lang_String$java_io_Writer(s, out);
        } else if(((typeof s === 'string') || s === null) && out === undefined) {
            return <any>StringUtil.XMLEnc$java_lang_String(s);
        } else throw new Error('invalid overload');
    }

    public static XHTMLEnc$java_lang_String(s : string) : string {
        return StringUtil.XMLOrHTMLEnc$java_lang_String$boolean$boolean$char_A(s, true, true, StringUtil.HTML_APOS_$LI$());
    }

    public static XHTMLEnc$java_lang_String$java_io_Writer(s : string, out : Writer) {
        StringUtil.XMLOrHTMLEnc$java_lang_String$char_A$java_io_Writer(s, StringUtil.HTML_APOS_$LI$(), out);
    }

    /**
     * Like {link #XHTMLEnc(String)}, but writes the result into a {link Writer}.
     * 
     * @since 2.3.24
     * @param {String} s
     * @param {Writer} out
     */
    public static XHTMLEnc(s? : any, out? : any) : any {
        if(((typeof s === 'string') || s === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>StringUtil.XHTMLEnc$java_lang_String$java_io_Writer(s, out);
        } else if(((typeof s === 'string') || s === null) && out === undefined) {
            return <any>StringUtil.XHTMLEnc$java_lang_String(s);
        } else throw new Error('invalid overload');
    }

    public static XMLOrHTMLEnc$java_lang_String$boolean$boolean$char_A(s : string, escGT : boolean, escQuot : boolean, apos : string[]) : string {
        let ln : number = s.length;
        let firstEscIdx : number = -1;
        let lastEscIdx : number = 0;
        let plusOutLn : number = 0;
        for(let i : number = 0; i < ln; i++) {
            escape: do {
                let c : string = s.charAt(i);
                switch((c).charCodeAt(0)) {
                case 60 /* '<' */:
                    plusOutLn += StringUtil.LT_$LI$().length - 1;
                    break;
                case 62 /* '>' */:
                    if(!(escGT || StringUtil.maybeCDataEndGT(s, i))) {
                        break escape;
                    }
                    plusOutLn += StringUtil.GT_$LI$().length - 1;
                    break;
                case 38 /* '&' */:
                    plusOutLn += StringUtil.AMP_$LI$().length - 1;
                    break;
                case 34 /* '\"' */:
                    if(!escQuot) {
                        break escape;
                    }
                    plusOutLn += StringUtil.QUOT_$LI$().length - 1;
                    break;
                case 39 /* '\'' */:
                    if(apos == null) {
                        break escape;
                    }
                    plusOutLn += apos.length - 1;
                    break;
                default:
                    break escape;
                }
                if(firstEscIdx === -1) {
                    firstEscIdx = i;
                }
                lastEscIdx = i;
            } while((false));
        };
        if(firstEscIdx === -1) {
            return s;
        } else {
            let esced : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(ln + plusOutLn);
            if(firstEscIdx !== 0) {
                /* getChars */((a, s, e, d, l) => { d.splice.apply(d, [l, e-s].concat(<any>a.substring(s, e).split(''))); })(s, 0, firstEscIdx, esced, 0);
            }
            let dst : number = firstEscIdx;
            scan: for(let i : number = firstEscIdx; i <= lastEscIdx; i++) {
                let c : string = s.charAt(i);
                switch((c).charCodeAt(0)) {
                case 60 /* '<' */:
                    dst = StringUtil.shortArrayCopy(StringUtil.LT_$LI$(), esced, dst);
                    continue scan;
                case 62 /* '>' */:
                    if(!(escGT || StringUtil.maybeCDataEndGT(s, i))) {
                        break;
                    }
                    dst = StringUtil.shortArrayCopy(StringUtil.GT_$LI$(), esced, dst);
                    continue scan;
                case 38 /* '&' */:
                    dst = StringUtil.shortArrayCopy(StringUtil.AMP_$LI$(), esced, dst);
                    continue scan;
                case 34 /* '\"' */:
                    if(!escQuot) {
                        break;
                    }
                    dst = StringUtil.shortArrayCopy(StringUtil.QUOT_$LI$(), esced, dst);
                    continue scan;
                case 39 /* '\'' */:
                    if(apos == null) {
                        break;
                    }
                    dst = StringUtil.shortArrayCopy(apos, esced, dst);
                    continue scan;
                }
                esced[dst++] = c;
            };
            if(lastEscIdx !== ln - 1) {
                /* getChars */((a, s, e, d, l) => { d.splice.apply(d, [l, e-s].concat(<any>a.substring(s, e).split(''))); })(s, lastEscIdx + 1, ln, esced, dst);
            }
            return /* valueOf */new String(esced).toString();
        }
    }

    public static XMLOrHTMLEnc(s? : any, escGT? : any, escQuot? : any, apos? : any) : any {
        if(((typeof s === 'string') || s === null) && ((typeof escGT === 'boolean') || escGT === null) && ((typeof escQuot === 'boolean') || escQuot === null) && ((apos != null && apos instanceof <any>Array && (apos.length==0 || apos[0] == null ||(typeof apos[0] === 'string'))) || apos === null)) {
            return <any>StringUtil.XMLOrHTMLEnc$java_lang_String$boolean$boolean$char_A(s, escGT, escQuot, apos);
        } else if(((typeof s === 'string') || s === null) && ((escGT != null && escGT instanceof <any>Array && (escGT.length==0 || escGT[0] == null ||(typeof escGT[0] === 'string'))) || escGT === null) && ((escQuot != null && escQuot instanceof <any>Writer) || escQuot === null) && apos === undefined) {
            return <any>StringUtil.XMLOrHTMLEnc$java_lang_String$char_A$java_io_Writer(s, escGT, escQuot);
        } else throw new Error('invalid overload');
    }

    /*private*/ static maybeCDataEndGT(s : string, i : number) : boolean {
        if(i === 0) return true;
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(i - 1)) != ']'.charCodeAt(0)) return false;
        return i === 1 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(i - 2)) == ']'.charCodeAt(0);
    }

    /*private*/ static XMLOrHTMLEnc$java_lang_String$char_A$java_io_Writer(s : string, apos : string[], out : Writer) {
        let writtenEnd : number = 0;
        let ln : number = s.length;
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '<'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '>'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '&'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\''.charCodeAt(0)) {
                let flushLn : number = i - writtenEnd;
                if(flushLn !== 0) {
                    out.write(s, writtenEnd, flushLn);
                }
                writtenEnd = i + 1;
                switch((c).charCodeAt(0)) {
                case 60 /* '<' */:
                    out.write(StringUtil.LT_$LI$());
                    break;
                case 62 /* '>' */:
                    out.write(StringUtil.GT_$LI$());
                    break;
                case 38 /* '&' */:
                    out.write(StringUtil.AMP_$LI$());
                    break;
                case 34 /* '\"' */:
                    out.write(StringUtil.QUOT_$LI$());
                    break;
                default:
                    out.write(apos);
                    break;
                }
            }
        };
        if(writtenEnd < ln) {
            out.write(s, writtenEnd, ln - writtenEnd);
        }
    }

    /**
     * For efficiently copying very short char arrays.
     * @param {Array} src
     * @param {Array} dst
     * @param {number} dstOffset
     * @return {number}
     * @private
     */
    /*private*/ static shortArrayCopy(src : string[], dst : string[], dstOffset : number) : number {
        let ln : number = src.length;
        for(let i : number = 0; i < ln; i++) {
            dst[dstOffset++] = src[i];
        };
        return dstOffset;
    }

    /**
     * XML encoding without replacing apostrophes.
     * 
     * @see #XMLEnc(String)
     * @param {String} s
     * @return {String}
     */
    public static XMLEncNA(s : string) : string {
        return StringUtil.XMLOrHTMLEnc$java_lang_String$boolean$boolean$char_A(s, true, true, null);
    }

    /**
     * XML encoding for attribute values quoted with <tt>"</tt> (not with <tt>'</tt>!).
     * Also can be used for HTML attributes that are quoted with <tt>"</tt>.
     * 
     * @see #XMLEnc(String)
     * @param {String} s
     * @return {String}
     */
    public static XMLEncQAttr(s : string) : string {
        return StringUtil.XMLOrHTMLEnc$java_lang_String$boolean$boolean$char_A(s, false, true, null);
    }

    /**
     * XML encoding without replacing apostrophes and quotation marks and
     * greater-thans (except in {@code ]]>}).
     * 
     * @see #XMLEnc(String)
     * @param {String} s
     * @return {String}
     */
    public static XMLEncNQG(s : string) : string {
        return StringUtil.XMLOrHTMLEnc$java_lang_String$boolean$boolean$char_A(s, false, false, null);
    }

    public static RTFEnc$java_lang_String(s : string) : string {
        let ln : number = s.length;
        let firstEscIdx : number = -1;
        let lastEscIdx : number = 0;
        let plusOutLn : number = 0;
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '{'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '}'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                if(firstEscIdx === -1) {
                    firstEscIdx = i;
                }
                lastEscIdx = i;
                plusOutLn++;
            }
        };
        if(firstEscIdx === -1) {
            return s;
        } else {
            let esced : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(ln + plusOutLn);
            if(firstEscIdx !== 0) {
                /* getChars */((a, s, e, d, l) => { d.splice.apply(d, [l, e-s].concat(<any>a.substring(s, e).split(''))); })(s, 0, firstEscIdx, esced, 0);
            }
            let dst : number = firstEscIdx;
            for(let i : number = firstEscIdx; i <= lastEscIdx; i++) {
                let c : string = s.charAt(i);
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '{'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '}'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                    esced[dst++] = '\\';
                }
                esced[dst++] = c;
            };
            if(lastEscIdx !== ln - 1) {
                /* getChars */((a, s, e, d, l) => { d.splice.apply(d, [l, e-s].concat(<any>a.substring(s, e).split(''))); })(s, lastEscIdx + 1, ln, esced, dst);
            }
            return /* valueOf */new String(esced).toString();
        }
    }

    public static RTFEnc$java_lang_String$java_io_Writer(s : string, out : Writer) {
        let writtenEnd : number = 0;
        let ln : number = s.length;
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '{'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '}'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                let flushLn : number = i - writtenEnd;
                if(flushLn !== 0) {
                    out.write(s, writtenEnd, flushLn);
                }
                out.write('\\');
                writtenEnd = i;
            }
        };
        if(writtenEnd < ln) {
            out.write(s, writtenEnd, ln - writtenEnd);
        }
    }

    /**
     * Like {link #RTFEnc(String)}, but writes the result into a {link Writer}.
     * 
     * @since 2.3.24
     * @param {String} s
     * @param {Writer} out
     */
    public static RTFEnc(s? : any, out? : any) : any {
        if(((typeof s === 'string') || s === null) && ((out != null && out instanceof <any>Writer) || out === null)) {
            return <any>StringUtil.RTFEnc$java_lang_String$java_io_Writer(s, out);
        } else if(((typeof s === 'string') || s === null) && out === undefined) {
            return <any>StringUtil.RTFEnc$java_lang_String(s);
        } else throw new Error('invalid overload');
    }

    public static URLEnc$java_lang_String$java_lang_String(s : string, charset : string) : string {
        return StringUtil.URLEnc$java_lang_String$java_lang_String$boolean(s, charset, false);
    }

    /**
     * Like {link #URLEnc(String, String)} but doesn't escape the slash character ({@code /}).
     * This can be used to encode a path only if you know that no folder or file name will contain {@code /}
     * character (not in the path, but in the name itself), which usually stands, as the commonly used OS-es don't
     * allow that.
     * 
     * @since 2.3.21
     * @param {String} s
     * @param {String} charset
     * @return {String}
     */
    public static URLPathEnc(s : string, charset : string) : string {
        return StringUtil.URLEnc$java_lang_String$java_lang_String$boolean(s, charset, true);
    }

    public static URLEnc$java_lang_String$java_lang_String$boolean(s : string, charset : string, keepSlash : boolean) : string {
        let ln : number = s.length;
        let i : number;
        for(i = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            if(!StringUtil.safeInURL(c, keepSlash)) {
                break;
            }
        };
        if(i === ln) {
            return s;
        }
        let b : StringBuilder = new StringBuilder("");
        b.append(s, 0, i);
        let encStart : number = i;
        for(i++; i < ln; i++) {
            let c : string = s.charAt(i);
            if(StringUtil.safeInURL(c, keepSlash)) {
                if(encStart !== -1) {
                    let o : number[] = /* getBytes */(s.substring(encStart, i)).split('').map(s => s.charCodeAt(0));
                    for(let j : number = 0; j < o.length; j++) {
                        b.append('%');
                        let bc : number = o[j];
                        let c1 : number = bc & 15;
                        let c2 : number = (bc >> 4) & 15;
                        b.append(String.fromCharCode((c2 < 10?c2 + '0'.charCodeAt(0):c2 - 10 + 'A'.charCodeAt(0))));
                        b.append(String.fromCharCode((c1 < 10?c1 + '0'.charCodeAt(0):c1 - 10 + 'A'.charCodeAt(0))));
                    };
                    encStart = -1;
                }
                b.append(c);
            } else {
                if(encStart === -1) {
                    encStart = i;
                }
            }
        };
        if(encStart !== -1) {
            let o : number[] = /* getBytes */(s.substring(encStart, i)).split('').map(s => s.charCodeAt(0));
            for(let j : number = 0; j < o.length; j++) {
                b.append('%');
                let bc : number = o[j];
                let c1 : number = bc & 15;
                let c2 : number = (bc >> 4) & 15;
                b.append(String.fromCharCode((c2 < 10?c2 + '0'.charCodeAt(0):c2 - 10 + 'A'.charCodeAt(0))));
                b.append(String.fromCharCode((c1 < 10?c1 + '0'.charCodeAt(0):c1 - 10 + 'A'.charCodeAt(0))));
            };
        }
        return b.toString();
    }

    public static URLEnc(s? : any, charset? : any, keepSlash? : any) : any {
        if(((typeof s === 'string') || s === null) && ((typeof charset === 'string') || charset === null) && ((typeof keepSlash === 'boolean') || keepSlash === null)) {
            return <any>StringUtil.URLEnc$java_lang_String$java_lang_String$boolean(s, charset, keepSlash);
        } else if(((typeof s === 'string') || s === null) && ((typeof charset === 'string') || charset === null) && keepSlash === undefined) {
            return <any>StringUtil.URLEnc$java_lang_String$java_lang_String(s, charset);
        } else throw new Error('invalid overload');
    }

    /*private*/ static safeInURL(c : string, keepSlash : boolean) : boolean {
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 'a'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 'z'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 'A'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 'Z'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= '0'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= '9'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '-'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '.'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '!'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '~'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= '\''.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= '*'.charCodeAt(0) || keepSlash && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '/'.charCodeAt(0);
    }

    /*private*/ static createEscapes() : string[] {
        let escapes : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })('\\'.charCodeAt(0) + 1);
        for(let i : number = 0; i < 32; ++i) {
            escapes[i] = String.fromCharCode(1);
        };
        escapes[('\\').charCodeAt(0)] = '\\';
        escapes[('\'').charCodeAt(0)] = '\'';
        escapes[('\"').charCodeAt(0)] = '\"';
        escapes[('<').charCodeAt(0)] = 'l';
        escapes[('>').charCodeAt(0)] = 'g';
        escapes[('&').charCodeAt(0)] = 'a';
        escapes[('\b').charCodeAt(0)] = 'b';
        escapes[('\t').charCodeAt(0)] = 't';
        escapes[('\n').charCodeAt(0)] = 'n';
        escapes[('\f').charCodeAt(0)] = 'f';
        escapes[('\r').charCodeAt(0)] = 'r';
        return escapes;
    }

    public static FTLStringLiteralEnc$java_lang_String$char(s : string, quotation : string) : string {
        return StringUtil.FTLStringLiteralEnc$java_lang_String$char$boolean(s, quotation, false);
    }

    public static FTLStringLiteralEnc$java_lang_String(s : string) : string {
        return StringUtil.FTLStringLiteralEnc$java_lang_String$char$boolean(s, String.fromCharCode(0), false);
    }

    public static FTLStringLiteralEnc$java_lang_String$char$boolean(s : string, quotation : string, addQuotation : boolean) : string {
        let ln : number = s.length;
        let otherQuotation : string;
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(quotation) == 0) {
            otherQuotation = String.fromCharCode(0);
        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(quotation) == '\"'.charCodeAt(0)) {
            otherQuotation = '\'';
        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(quotation) == '\''.charCodeAt(0)) {
            otherQuotation = '\"';
        } else {
            throw Object.defineProperty(new Error("Unsupported quotation character: " + quotation), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        let escLn : number = StringUtil.ESCAPES_$LI$().length;
        let buf : StringBuilder = null;
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            let escape : string;
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '='.charCodeAt(0)) {
                escape = i > 0 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(i - 1)) == '['.charCodeAt(0)?'=':String.fromCharCode(0);
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < escLn) {
                escape = StringUtil.ESCAPES_$LI$()[(c).charCodeAt(0)];
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '{'.charCodeAt(0) && i > 0 && StringUtil.isInterpolationStart(s.charAt(i - 1))) {
                escape = '{';
            } else {
                escape = String.fromCharCode(0);
            }
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(escape) == 0 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(escape) == (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(otherQuotation)) {
                if(buf != null) {
                    buf.append(c);
                }
            } else {
                if(buf == null) {
                    buf = new StringBuilder("");
                    if(addQuotation) {
                        buf.append(quotation);
                    }
                    buf.append(s, 0, i);
                }
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(escape) == 1) {
                    buf.append("\\x00");
                    let c2 : number = (c >> 4) & 15;
                    c = String.fromCharCode(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) & 15));
                    buf.append(String.fromCharCode((c2 < 10?c2 + '0'.charCodeAt(0):c2 - 10 + 'A'.charCodeAt(0))));
                    buf.append(String.fromCharCode(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 10?(c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) + '0'.charCodeAt(0):(c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) - 10 + 'A'.charCodeAt(0))));
                } else {
                    buf.append('\\');
                    buf.append(escape);
                }
            }
        };
        if(buf == null) {
            return addQuotation?quotation + s + quotation:s;
        } else {
            if(addQuotation) {
                buf.append(quotation);
            }
            return buf.toString();
        }
    }

    public static FTLStringLiteralEnc(s? : any, quotation? : any, addQuotation? : any) : any {
        if(((typeof s === 'string') || s === null) && ((typeof quotation === 'string') || quotation === null) && ((typeof addQuotation === 'boolean') || addQuotation === null)) {
            return <any>StringUtil.FTLStringLiteralEnc$java_lang_String$char$boolean(s, quotation, addQuotation);
        } else if(((typeof s === 'string') || s === null) && ((typeof quotation === 'string') || quotation === null) && addQuotation === undefined) {
            return <any>StringUtil.FTLStringLiteralEnc$java_lang_String$char(s, quotation);
        } else if(((typeof s === 'string') || s === null) && quotation === undefined && addQuotation === undefined) {
            return <any>StringUtil.FTLStringLiteralEnc$java_lang_String(s);
        } else throw new Error('invalid overload');
    }

    /*private*/ static isInterpolationStart(c : string) : boolean {
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '$'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '#'.charCodeAt(0);
    }

    /**
     * FTL string literal decoding.
     * <p>
     * \\, \", \', \n, \t, \r, \b and \f will be replaced according to
     * Java rules. In additional, it knows \g, \l, \a and \{ which are
     * replaced with &lt;, &gt;, &amp; and { respectively.
     * \x works as hexadecimal character code escape. The character
     * codes are interpreted according to UCS basic plane (Unicode).
     * "f\x006Fo", "f\x06Fo" and "f\x6Fo" will be "foo".
     * "f\x006F123" will be "foo123" as the maximum number of digits is 4.
     * <p>
     * All other \X (where X is any character not mentioned above or End-of-string)
     * will cause a ParseException.
     * 
     * @param {String} s String literal <em>without</em> the surrounding quotation marks
     * @return {String} String with all escape sequences resolved
     * @throws ParseException if there string contains illegal escapes
     */
    public static FTLStringLiteralDec(s : string) : string {
        let idx : number = s.indexOf('\\');
        if(idx === -1) {
            return s;
        }
        let lidx : number = s.length - 1;
        let bidx : number = 0;
        let buf : StringBuilder = new StringBuilder("");
        do {
            buf.append(s, bidx, idx);
            if(idx >= lidx) {
                throw new ParseException("The last character of string literal is backslash", 0, 0);
            }
            let c : string = s.charAt(idx + 1);
            switch((c).charCodeAt(0)) {
            case 34 /* '\"' */:
                buf.append('\"');
                bidx = idx + 2;
                break;
            case 39 /* '\'' */:
                buf.append('\'');
                bidx = idx + 2;
                break;
            case 92 /* '\\' */:
                buf.append('\\');
                bidx = idx + 2;
                break;
            case 110 /* 'n' */:
                buf.append('\n');
                bidx = idx + 2;
                break;
            case 114 /* 'r' */:
                buf.append('\r');
                bidx = idx + 2;
                break;
            case 116 /* 't' */:
                buf.append('\t');
                bidx = idx + 2;
                break;
            case 102 /* 'f' */:
                buf.append('\f');
                bidx = idx + 2;
                break;
            case 98 /* 'b' */:
                buf.append('\b');
                bidx = idx + 2;
                break;
            case 103 /* 'g' */:
                buf.append('>');
                bidx = idx + 2;
                break;
            case 108 /* 'l' */:
                buf.append('<');
                bidx = idx + 2;
                break;
            case 97 /* 'a' */:
                buf.append('&');
                bidx = idx + 2;
                break;
            case 123 /* '{' */:
            case 61 /* '=' */:
                buf.append(c);
                bidx = idx + 2;
                break;
            case 120 /* 'x' */:
                {
                    idx += 2;
                    let x : number = idx;
                    let y : number = 0;
                    let z : number = lidx > idx + 3?idx + 3:lidx;
                    while((idx <= z)) {
                        let b : string = s.charAt(idx);
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) >= '0'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) <= '9'.charCodeAt(0)) {
                            y <<= 4;
                            y += (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) - '0'.charCodeAt(0);
                        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) >= 'a'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) <= 'f'.charCodeAt(0)) {
                            y <<= 4;
                            y += (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) - 'a'.charCodeAt(0) + 10;
                        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) >= 'A'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) <= 'F'.charCodeAt(0)) {
                            y <<= 4;
                            y += (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(b) - 'A'.charCodeAt(0) + 10;
                        } else {
                            break;
                        }
                        idx++;
                    };
                    if(x < idx) {
                        buf.append(String.fromCharCode(y));
                    } else {
                        throw new ParseException("Invalid \\x escape in a string literal", 0, 0);
                    }
                    bidx = idx;
                    break;
                };
            default:
                throw new ParseException("Invalid escape sequence (\\" + c + ") in a string literal", 0, 0);
            }
            idx = s.indexOf('\\', bidx);
        } while((idx !== -1));
        buf.append(s.substring(bidx));
        return buf.toString();
    }

    public static deduceLocale(input : string) : string {
        if(input == null) return null;
        let locale : string = /* getDefault */(globals.DEFAULT_LOCALE);
        if(input.length > 0 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(input.charAt(0)) == '\"'.charCodeAt(0)) input = input.substring(1, input.length - 1);
        let st : StringTokenizer = new StringTokenizer(input, ",_ ");
        let lang : string = "";
        let country : string = "";
        if(st.hasMoreTokens()) {
            lang = st.nextToken();
        }
        if(st.hasMoreTokens()) {
            country = st.nextToken();
        }
        if(!st.hasMoreTokens()) {
            locale = <string>new String(lang, country);
        } else {
            locale = <string>new String(lang, country, st.nextToken());
        }
        return locale;
    }

    public static capitalize(s : string) : string {
        let st : StringTokenizer = new StringTokenizer(s, " \t\r\n", true);
        let buf : StringBuilder = new StringBuilder("");
        while((st.hasMoreTokens())) {
            let tok : string = st.nextToken();
            buf.append(tok.substring(0, 1).toUpperCase());
            buf.append(tok.substring(1).toLowerCase());
        };
        return buf.toString();
    }

    public static getYesNo(s : string) : boolean {
        if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(s, "\"")) {
            s = s.substring(1, s.length - 1);
        }
        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "n") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "no") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "f") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "false")) {
            return false;
        } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "y") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "yes") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "t") || /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(s, "true")) {
            return true;
        }
        throw Object.defineProperty(new Error("Illegal boolean value: " + s), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
    }

    public static split$java_lang_String$char(s : string, c : string) : Array {
        let i : number;
        let b : number;
        let e : number;
        let cnt : number;
        let res : Array<any>;
        let ln : number = s.length;
        i = 0;
        cnt = 1;
        while(((i = s.indexOf(c, i)) !== -1)) {
            cnt++;
            i++;
        };
        res = (s => { let a=[]; while(s-->0) a.push(null); return a; })(cnt);
        i = 0;
        b = 0;
        while((b <= ln)) {
            e = s.indexOf(c, b);
            if(e === -1) e = ln;
            res[i++] = s.substring(b, e);
            b = e + 1;
        };
        return res;
    }

    public static split$java_lang_String$java_lang_String$boolean(s : string, sep : string, caseInsensitive : boolean) : Array {
        let sepLn : number = sep.length;
        let convertedS : string = caseInsensitive?s.toLowerCase():s;
        let sLn : number = s.length;
        if(sepLn === 0) {
            let res : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(sLn);
            for(let i : number = 0; i < sLn; i++) {
                res[i] = /* valueOf */new String(s.charAt(i)).toString();
            };
            return res;
        }
        let splitString : string = caseInsensitive?sep.toLowerCase():sep;
        let res : Array<any>;
        {
            let next : number = 0;
            let count : number = 1;
            while(((next = convertedS.indexOf(splitString, next)) !== -1)) {
                count++;
                next += sepLn;
            };
            res = (s => { let a=[]; while(s-->0) a.push(null); return a; })(count);
        };
        let dst : number = 0;
        let next : number = 0;
        while((next <= sLn)) {
            let end : number = convertedS.indexOf(splitString, next);
            if(end === -1) end = sLn;
            res[dst++] = s.substring(next, end);
            next = end + sepLn;
        };
        return res;
    }

    /**
     * Splits a string at the specified string.
     * 
     * @param {String} sep The string that separates the items of the resulting array. Since 2.3.28, if this is 0 length, then
     * each character will be a separate item in the array.
     * @param {String} s
     * @param {boolean} caseInsensitive
     * @return {Array}
     */
    public static split(s? : any, sep? : any, caseInsensitive? : any) : any {
        if(((typeof s === 'string') || s === null) && ((typeof sep === 'string') || sep === null) && ((typeof caseInsensitive === 'boolean') || caseInsensitive === null)) {
            return <any>StringUtil.split$java_lang_String$java_lang_String$boolean(s, sep, caseInsensitive);
        } else if(((typeof s === 'string') || s === null) && ((typeof sep === 'string') || sep === null) && caseInsensitive === undefined) {
            return <any>StringUtil.split$java_lang_String$char(s, sep);
        } else throw new Error('invalid overload');
    }

    public static replace$java_lang_String$java_lang_String$java_lang_String(text : string, oldSub : string, newSub : string) : string {
        return StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(text, oldSub, newSub, false, false);
    }

    public static replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(text : string, oldsub : string, newsub : string, caseInsensitive : boolean, firstOnly : boolean) : string {
        let buf : StringBuilder;
        let tln : number;
        let oln : number = oldsub.length;
        if(oln === 0) {
            let nln : number = newsub.length;
            if(nln === 0) {
                return text;
            } else {
                if(firstOnly) {
                    return newsub + text;
                } else {
                    tln = text.length;
                    buf = new StringBuilder("");
                    buf.append(newsub);
                    for(let i : number = 0; i < tln; i++) {
                        buf.append(text.charAt(i));
                        buf.append(newsub);
                    };
                    return buf.toString();
                }
            }
        } else {
            oldsub = caseInsensitive?oldsub.toLowerCase():oldsub;
            let input : string = caseInsensitive?text.toLowerCase():text;
            let e : number = input.indexOf(oldsub);
            if(e === -1) {
                return text;
            }
            let b : number = 0;
            tln = text.length;
            buf = new StringBuilder("");
            do {
                buf.append(text, b, e);
                buf.append(newsub);
                b = e + oln;
                e = input.indexOf(oldsub, b);
            } while((e !== -1 && !firstOnly));
            buf.append(text.substring(b));
            return buf.toString();
        }
    }

    /**
     * Replaces all occurrences of a sub-string in a string.
     * 
     * @param {String} text The string where it will replace <code>oldsub</code> with
     * <code>newsub</code>.
     * @return {String} String The string after the replacements.
     * @param {String} oldsub
     * @param {String} newsub
     * @param {boolean} caseInsensitive
     * @param {boolean} firstOnly
     */
    public static replace(text? : any, oldsub? : any, newsub? : any, caseInsensitive? : any, firstOnly? : any) : any {
        if(((typeof text === 'string') || text === null) && ((typeof oldsub === 'string') || oldsub === null) && ((typeof newsub === 'string') || newsub === null) && ((typeof caseInsensitive === 'boolean') || caseInsensitive === null) && ((typeof firstOnly === 'boolean') || firstOnly === null)) {
            return <any>StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(text, oldsub, newsub, caseInsensitive, firstOnly);
        } else if(((typeof text === 'string') || text === null) && ((typeof oldsub === 'string') || oldsub === null) && ((typeof newsub === 'string') || newsub === null) && caseInsensitive === undefined && firstOnly === undefined) {
            return <any>StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(text, oldsub, newsub);
        } else throw new Error('invalid overload');
    }

    /**
     * Removes a line-break from the end of the string (if there's any).
     * @param {String} s
     * @return {String}
     */
    public static chomp(s : string) : string {
        if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, "\r\n")) return s.substring(0, s.length - 2);
        if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, "\r") || /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(s, "\n")) return s.substring(0, s.length - 1);
        return s;
    }

    /**
     * Converts a 0-length string to null, leaves the string as is otherwise.
     * 
     * @param {String} s maybe {@code null}.
     * @return {String}
     */
    public static emptyToNull(s : string) : string {
        if(s == null) return null;
        return s.length === 0?null:s;
    }

    public static jQuote$java_lang_Object(obj : any) : string {
        return StringUtil.jQuote$java_lang_Object(obj != null?obj.toString():null);
    }

    public static jQuote$java_lang_String(s : string) : string {
        if(s == null) {
            return "null";
        }
        let ln : number = s.length;
        let b : StringBuilder = new StringBuilder("");
        b.append('\"');
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0)) {
                b.append("\\\"");
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                b.append("\\\\");
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 32) {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                    b.append("\\n");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                    b.append("\\r");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\f'.charCodeAt(0)) {
                    b.append("\\f");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\b'.charCodeAt(0)) {
                    b.append("\\b");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\t'.charCodeAt(0)) {
                    b.append("\\t");
                } else {
                    b.append("\\u00");
                    let x : number = ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) / 16|0);
                    b.append(StringUtil.toHexDigit(x));
                    x = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) & 15;
                    b.append(StringUtil.toHexDigit(x));
                }
            } else {
                b.append(c);
            }
        };
        b.append('\"');
        return b.toString();
    }

    /**
     * Quotes string as Java Language string literal.
     * Returns string <code>"null"</code> if <code>s</code>
     * is <code>null</code>.
     * @param {String} s
     * @return {String}
     */
    public static jQuote(s? : any) : any {
        if(((typeof s === 'string') || s === null)) {
            return <any>StringUtil.jQuote$java_lang_String(s);
        } else if(((s != null) || s === null)) {
            return <any>StringUtil.jQuote$java_lang_Object(s);
        } else throw new Error('invalid overload');
    }

    public static jQuoteNoXSS$java_lang_Object(obj : any) : string {
        return StringUtil.jQuoteNoXSS$java_lang_Object(obj != null?obj.toString():null);
    }

    public static jQuoteNoXSS$java_lang_String(s : string) : string {
        if(s == null) {
            return "null";
        }
        let ln : number = s.length;
        let b : StringBuilder = new StringBuilder("");
        b.append('\"');
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0)) {
                b.append("\\\"");
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                b.append("\\\\");
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '<'.charCodeAt(0)) {
                b.append("\\u003C");
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 32) {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                    b.append("\\n");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                    b.append("\\r");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\f'.charCodeAt(0)) {
                    b.append("\\f");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\b'.charCodeAt(0)) {
                    b.append("\\b");
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\t'.charCodeAt(0)) {
                    b.append("\\t");
                } else {
                    b.append("\\u00");
                    let x : number = ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) / 16|0);
                    b.append(StringUtil.toHexDigit(x));
                    x = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) & 15;
                    b.append(StringUtil.toHexDigit(x));
                }
            } else {
                b.append(c);
            }
        };
        b.append('\"');
        return b.toString();
    }

    /**
     * Same as {link #jQuoteNoXSS(String)} but also escapes <code>'&lt;'</code>
     * as <code>\</code><code>u003C</code>. This is used for log messages to prevent XSS
     * on poorly written Web-based log viewers.
     * @param {String} s
     * @return {String}
     */
    public static jQuoteNoXSS(s? : any) : any {
        if(((typeof s === 'string') || s === null)) {
            return <any>StringUtil.jQuoteNoXSS$java_lang_String(s);
        } else if(((s != null) || s === null)) {
            return <any>StringUtil.jQuoteNoXSS$java_lang_Object(s);
        } else throw new Error('invalid overload');
    }

    /**
     * Creates a <em>quoted</em> FTL string literal from a string, using escaping where necessary. The result either
     * uses regular quotation marks (UCS 0x22) or apostrophe-quotes (UCS 0x27), depending on the string content.
     * (Currently, apostrophe-quotes will be chosen exactly when the string contains regular quotation character and
     * doesn't contain apostrophe-quote character.)
     * 
     * @param {String} s The value that should be converted to an FTL string literal whose evaluated value equals to {@code s}
     * @since 2.3.22
     * @return {String}
     */
    public static ftlQuote(s : string) : string {
        let quotation : string;
        if(s.indexOf('\"') !== -1 && s.indexOf('\'') === -1) {
            quotation = '\'';
        } else {
            quotation = '\"';
        }
        return StringUtil.FTLStringLiteralEnc$java_lang_String$char$boolean(s, quotation, true);
    }

    /**
     * Tells if a character can occur on the beginning of an FTL identifier expression (without escaping).
     * 
     * @since 2.3.22
     * @param {string} c
     * @return {boolean}
     */
    public static isFTLIdentifierStart(c : string) : boolean {
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 170) {
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 'a'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 'z'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= '@'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 'Z'.charCodeAt(0)) {
                return true;
            } else {
                return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '$'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0);
            }
        } else {
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43000) {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11631) {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8488) {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8336) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 216) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 186) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 170 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 181;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 186 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 192 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 214;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8305) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 216 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 246 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 248 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8191;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8305 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8319;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8469) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8455) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8336 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8348 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8450;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8455 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8458 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8467;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8484) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8469 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8473 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8477;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8484 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8486;
                                }
                            }
                        }
                    } else {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11312) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8517) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8495) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8488 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8490 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8493;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8495 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8505 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8508 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8511;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8579) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8517 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8521 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8526;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 8579 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 8580 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11264 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11310;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11520) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11499) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11312 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11358 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11360 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11492;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11499 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11502 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11506 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11507;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11565) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11520 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11557 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 11559;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 11565 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11568 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11623;
                                }
                            }
                        }
                    }
                } else {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 12784) {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11728) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11696) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11680) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 11631 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11648 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11670;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11680 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11686 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11688 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11694;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11712) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11696 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11702 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11704 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11710;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11712 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11718 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11720 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11726;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 12337) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 11823) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11728 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11734 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 11736 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 11742;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 11823 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 12293 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 12294;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 12352) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 12337 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 12341 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 12347 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 12348;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 12352 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 12687 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 12704 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 12730;
                                }
                            }
                        }
                    } else {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 42623) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 42192) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 13312) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 12784 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 12799 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 13056 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 13183;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 13312 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 19893 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 19968 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42124;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 42512) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42192 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42237 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42240 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42508;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42512 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42539 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42560 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42606;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 42891) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 42775) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42623 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42647 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42656 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42725;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42775 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42783 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42786 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42888;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 42912) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42891 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42894 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42896 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42899;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 42912 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 42922;
                                }
                            }
                        }
                    }
                }
            } else {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43808) {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43588) {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43259) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43072) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43015) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43000 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43009 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43011 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43013;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43015 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43018 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43020 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43042;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43216) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43072 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43123 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43138 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43187;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43216 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43225 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43250 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43255;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43396) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43312) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 43259 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43264 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43301;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43312 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43334 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43360 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43388;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43520) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43396 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43442 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43471 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43481;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43520 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43560 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43584 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43586;
                                }
                            }
                        }
                    } else {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43712) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43648) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43616) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43588 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43595 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43600 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43609;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43616 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43638 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 43642;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43701) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43648 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43695 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 43697;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43701 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43702 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43705 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43709;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43762) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43739) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 43712 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 43714;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43739 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43741 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43744 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43754;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43785) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43762 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43764 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43777 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43782;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43785 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43790 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43793 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43798;
                                }
                            }
                        }
                    }
                } else {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 64326) {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 64275) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 44032) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 43968) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43808 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43814 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43816 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 43822;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 43968 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 44002 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 44016 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 44025;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 55243) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 44032 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 55203 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 55216 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 55238;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 55243 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 55291 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 63744 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64262;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 64312) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 64287) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64275 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64279 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 64285;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64287 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64296 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64298 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64310;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 64320) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64312 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64316 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 64318;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64320 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64321 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64323 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64324;
                                }
                            }
                        }
                    } else {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 65313) {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 65008) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 64848) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64326 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64433 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64467 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64829;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64848 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64911 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 64914 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 64967;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 65142) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65008 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65019 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65136 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65140;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65142 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65276 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65296 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65305;
                                }
                            }
                        } else {
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 65482) {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 65382) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65313 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65338 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65345 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65370;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65382 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65470 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65474 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65479;
                                }
                            } else {
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 65498) {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65482 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65487 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65490 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65495;
                                } else {
                                    return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 65498 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 65500;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    /**
     * Tells if a character can occur in an FTL identifier expression (without escaping) as other than the first
     * character.
     * 
     * @since 2.3.22
     * @param {string} c
     * @return {boolean}
     */
    public static isFTLIdentifierPart(c : string) : boolean {
        return StringUtil.isFTLIdentifierStart(c) || ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= '0'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= '9'.charCodeAt(0));
    }

    /**
     * Escapes the <code>String</code> with the escaping rules of Java language
     * string literals, so it's safe to insert the value into a string literal.
     * The resulting string will not be quoted.
     * 
     * <p>All characters under UCS code point 0x20 will be escaped.
     * Where they have no dedicated escape sequence in Java, they will
     * be replaced with hexadecimal escape (<tt>\</tt><tt>u<i>XXXX</i></tt>).
     * <p>
     * see #jQuote(String)
     * @param {String} s
     * @return {String}
     */
    public static javaStringEnc(s : string) : string {
        let ln : number = s.length;
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 32) {
                let b : StringBuilder = new StringBuilder("");
                b.append(s, 0, i);
                while((true)) {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0)) {
                        b.append("\\\"");
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                        b.append("\\\\");
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 32) {
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                            b.append("\\n");
                        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                            b.append("\\r");
                        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\f'.charCodeAt(0)) {
                            b.append("\\f");
                        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\b'.charCodeAt(0)) {
                            b.append("\\b");
                        } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\t'.charCodeAt(0)) {
                            b.append("\\t");
                        } else {
                            b.append("\\u00");
                            let x : number = ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) / 16|0);
                            b.append(String.fromCharCode((x < 10?x + '0'.charCodeAt(0):x - 10 + 'a'.charCodeAt(0))));
                            x = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) & 15;
                            b.append(String.fromCharCode((x < 10?x + '0'.charCodeAt(0):x - 10 + 'a'.charCodeAt(0))));
                        }
                    } else {
                        b.append(c);
                    }
                    i++;
                    if(i >= ln) {
                        return b.toString();
                    }
                    c = s.charAt(i);
                };
            }
        };
        return s;
    }

    /**
     * Escapes a {link String} to be safely insertable into a JavaScript string literal; for more see
     * {link #jsStringEnc(String, boolean) jsStringEnc(s, false)}.
     * @param {String} s
     * @return {String}
     */
    public static javaScriptStringEnc(s : string) : string {
        return StringUtil.jsStringEnc(s, false);
    }

    /**
     * Escapes a {link String} to be safely insertable into a JSON string literal; for more see
     * {link #jsStringEnc(String, boolean) jsStringEnc(s, true)}.
     * @param {String} s
     * @return {String}
     */
    public static jsonStringEnc(s : string) : string {
        return StringUtil.jsStringEnc(s, true);
    }

    static NO_ESC : number = 0;

    static ESC_HEXA : number = 1;

    static ESC_BACKSLASH : number = 3;

    /**
     * Escapes a {link String} to be safely insertable into a JavaScript or a JSON string literal.
     * The resulting string will <em>not</em> be quoted; the caller must ensure that they are there in the final
     * output. Note that for JSON, the quotation marks must be {@code "}, not {@code '}, because JSON doesn't escape
     * {@code '}.
     * 
     * <p>The escaping rules guarantee that if the inside of the JavaScript/JSON string literal is from one or more
     * touching pieces that were escaped with this, no character sequence can occur that closes the
     * JavaScript/JSON string literal, or has a meaning in HTML/XML that causes the HTML script section to be closed.
     * (If, however, the escaped section is preceded by or followed by strings from other sources, this can't be
     * guaranteed in some rare cases. Like <tt>x = "&lt;/${a?js_string}"</tt> might closes the "script"
     * element if {@code a} is {@code "script>"}.)
     * <p>
     * The escaped characters are:
     * 
     * <table style="width: auto; border-collapse: collapse" border="1" summary="Characters escaped by jsStringEnc">
     * <tr>
     * <th>Input
     * <th>Output
     * <tr>
     * <td><tt>"</tt>
     * <td><tt>\"</tt>
     * <tr>
     * <td><tt>'</tt> if not in JSON-mode
     * <td><tt>\'</tt>
     * <tr>
     * <td><tt>\</tt>
     * <td><tt>\\</tt>
     * <tr>
     * <td><tt>/</tt> if the method can't know that it won't be directly after <tt>&lt;</tt>
     * <td><tt>\/</tt>
     * <tr>
     * <td><tt>&gt;</tt> if the method can't know that it won't be directly after <tt>]]</tt> or <tt>--</tt>
     * <td>JavaScript: <tt>\&gt;</tt>; JSON: <tt>\</tt><tt>u003E</tt>
     * <tr>
     * <td><tt>&lt;</tt> if the method can't know that it won't be directly followed by <tt>!</tt> or <tt>?</tt>
     * <td><tt><tt>\</tt>u003C</tt>
     * <tr>
     * <td>
     * u0000-u001f (UNICODE control characters - disallowed by JSON)<br>
     * u007f-u009f (UNICODE control characters - disallowed by JSON)
     * <td><tt>\n</tt>, <tt>\r</tt> and such, or if there's no such dedicated escape:
     * JavaScript: <tt>\x<i>XX</i></tt>, JSON: <tt>\<tt>u</tt><i>XXXX</i></tt>
     * <tr>
     * <td>
     * u2028 (Line separator - source code line-break in ECMAScript)<br>
     * u2029 (Paragraph separator - source code line-break in ECMAScript)<br>
     * <td><tt>\<tt>u</tt><i>XXXX</i></tt>
     * </table>
     * 
     * @since 2.3.20
     * @param {String} s
     * @param {boolean} json
     * @return {String}
     */
    public static jsStringEnc(s : string, json : boolean) : string {
        NullArgumentException.check$java_lang_String$java_lang_Object("s", s);
        let ln : number = s.length;
        let sb : StringBuilder = null;
        for(let i : number = 0; i < ln; i++) {
            let c : string = s.charAt(i);
            let escapeType : number;
            if(!((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) > '>'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 127 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '\\'.charCodeAt(0)) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ' '.charCodeAt(0) && !((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 160 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 8232)) {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 31) {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                        escapeType = ('n').charCodeAt(0);
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                        escapeType = ('r').charCodeAt(0);
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\f'.charCodeAt(0)) {
                        escapeType = ('f').charCodeAt(0);
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\b'.charCodeAt(0)) {
                        escapeType = ('b').charCodeAt(0);
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\t'.charCodeAt(0)) {
                        escapeType = ('t').charCodeAt(0);
                    } else {
                        escapeType = StringUtil.ESC_HEXA;
                    }
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0)) {
                    escapeType = StringUtil.ESC_BACKSLASH;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\''.charCodeAt(0)) {
                    escapeType = json?StringUtil.NO_ESC:StringUtil.ESC_BACKSLASH;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                    escapeType = StringUtil.ESC_BACKSLASH;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '/'.charCodeAt(0) && (i === 0 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(i - 1)) == '<'.charCodeAt(0))) {
                    escapeType = StringUtil.ESC_BACKSLASH;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '>'.charCodeAt(0)) {
                    let dangerous : boolean;
                    if(i === 0) {
                        dangerous = true;
                    } else {
                        let prevC : string = s.charAt(i - 1);
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(prevC) == ']'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(prevC) == '-'.charCodeAt(0)) {
                            if(i === 1) {
                                dangerous = true;
                            } else {
                                let prevPrevC : string = s.charAt(i - 2);
                                dangerous = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(prevPrevC) == (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(prevC);
                            }
                        } else {
                            dangerous = false;
                        }
                    }
                    escapeType = dangerous?(json?StringUtil.ESC_HEXA:StringUtil.ESC_BACKSLASH):StringUtil.NO_ESC;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '<'.charCodeAt(0)) {
                    let dangerous : boolean;
                    if(i === ln - 1) {
                        dangerous = true;
                    } else {
                        let nextC : string = s.charAt(i + 1);
                        dangerous = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(nextC) == '!'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(nextC) == '?'.charCodeAt(0);
                    }
                    escapeType = dangerous?StringUtil.ESC_HEXA:StringUtil.NO_ESC;
                } else if(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 127 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 159) || ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8232 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 8233)) {
                    escapeType = StringUtil.ESC_HEXA;
                } else {
                    escapeType = StringUtil.NO_ESC;
                }
                if(escapeType !== StringUtil.NO_ESC) {
                    if(sb == null) {
                        sb = new StringBuilder("");
                        sb.append(s, 0, i);
                    }
                    sb.append('\\');
                    if(escapeType > 32) {
                        sb.append(String.fromCharCode(escapeType));
                    } else if(escapeType === StringUtil.ESC_HEXA) {
                        if(!json && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) < 256) {
                            sb.append('x');
                            sb.append(StringUtil.toHexDigit(c >> 4));
                            sb.append(StringUtil.toHexDigit((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) & 15));
                        } else {
                            sb.append('u');
                            let cp : number = (c).charCodeAt(0);
                            sb.append(StringUtil.toHexDigit((cp >> 12) & 15));
                            sb.append(StringUtil.toHexDigit((cp >> 8) & 15));
                            sb.append(StringUtil.toHexDigit((cp >> 4) & 15));
                            sb.append(StringUtil.toHexDigit(cp & 15));
                        }
                    } else {
                        sb.append(c);
                    }
                    continue;
                }
            }
            if(sb != null) sb.append(c);
        };
        return sb == null?s:sb.toString();
    }

    /*private*/ static toHexDigit(d : number) : string {
        return String.fromCharCode((d < 10?d + '0'.charCodeAt(0):d - 10 + 'A'.charCodeAt(0)));
    }

    /**
     * Parses a name-value pair list, where the pairs are separated with comma,
     * and the name and value is separated with colon.
     * The keys and values can contain only letters, digits and <tt>_</tt>. They
     * can't be quoted. White-space around the keys and values are ignored. The
     * value can be omitted if <code>defaultValue</code> is not null. When a
     * value is omitted, then the colon after the key must be omitted as well.
     * The same key can't be used for multiple times.
     * 
     * @param {String} s            the string to parse.
     * For example: <code>"strong:100, soft:900"</code>.
     * @param {String} defaultValue the value used when the value is omitted in a
     * key-value pair.
     * @return {Map} the map that contains the name-value pairs.
     * @throws java.text.ParseException if the string is not a valid name-value
     * pair list.
     */
    public static parseNameValuePairList(s : string, defaultValue : string) : Map<any, any> {
        let map : Map<any, any> = <any>(new Map<any, any>());
        let c : string = ' ';
        let ln : number = s.length;
        let p : number = 0;
        let keyStart : number;
        let valueStart : number;
        let key : string;
        let value : string;
        fetchLoop: while((true)) {
            while((p < ln)) {
                c = s.charAt(p);
                if(!Character.isWhitespace(c)) {
                    break;
                }
                p++;
            };
            if(p === ln) {
                break fetchLoop;
            }
            keyStart = p;
            while((p < ln)) {
                c = s.charAt(p);
                if(!(Character.isLetterOrDigit(c) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0))) {
                    break;
                }
                p++;
            };
            if(keyStart === p) {
                throw Object.defineProperty(new Error("Expecting letter, digit or \"_\" here, (the first character of the key) but found " + StringUtil.jQuote$java_lang_Object(/* valueOf */new String(c).toString()) + " at position " + p + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
            }
            key = s.substring(keyStart, p);
            while((p < ln)) {
                c = s.charAt(p);
                if(!Character.isWhitespace(c)) {
                    break;
                }
                p++;
            };
            if(p === ln) {
                if(defaultValue == null) {
                    throw Object.defineProperty(new Error("Expecting \":\", but reached the end of the string  at position " + p + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
                }
                value = defaultValue;
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ':'.charCodeAt(0)) {
                if(defaultValue == null || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ','.charCodeAt(0)) {
                    throw Object.defineProperty(new Error("Expecting \":\" here, but found " + StringUtil.jQuote$java_lang_Object(/* valueOf */new String(c).toString()) + " at position " + p + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
                }
                p++;
                value = defaultValue;
            } else {
                p++;
                while((p < ln)) {
                    c = s.charAt(p);
                    if(!Character.isWhitespace(c)) {
                        break;
                    }
                    p++;
                };
                if(p === ln) {
                    throw Object.defineProperty(new Error("Expecting the value of the key here, but reached the end of the string  at position " + p + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
                }
                valueStart = p;
                while((p < ln)) {
                    c = s.charAt(p);
                    if(!(Character.isLetterOrDigit(c) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0))) {
                        break;
                    }
                    p++;
                };
                if(valueStart === p) {
                    throw Object.defineProperty(new Error("Expecting letter, digit or \"_\" here, (the first character of the value) but found " + StringUtil.jQuote$java_lang_Object(/* valueOf */new String(c).toString()) + " at position " + p + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
                }
                value = s.substring(valueStart, p);
                while((p < ln)) {
                    c = s.charAt(p);
                    if(!Character.isWhitespace(c)) {
                        break;
                    }
                    p++;
                };
                if(p < ln) {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != ','.charCodeAt(0)) {
                        throw Object.defineProperty(new Error("Excpecting \",\" or the end of the string here, but found " + StringUtil.jQuote$java_lang_Object(/* valueOf */new String(c).toString()) + " at position " + p + "."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
                    } else {
                        p++;
                    }
                }
            }
            if(/* put */map.set(key, value) != null) {
                throw Object.defineProperty(new Error("Dublicated key: " + StringUtil.jQuote$java_lang_Object(key)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
            }
        };
        return map;
    }

    public static leftPad$java_lang_String$int(s : string, minLength : number) : string {
        return StringUtil.leftPad$java_lang_String$int$char(s, minLength, ' ');
    }

    public static leftPad$java_lang_String$int$char(s : string, minLength : number, filling : string) : string {
        let ln : number = s.length;
        if(minLength <= ln) {
            return s;
        }
        let res : StringBuilder = new StringBuilder("");
        let dif : number = minLength - ln;
        for(let i : number = 0; i < dif; i++) {
            res.append(filling);
        };
        res.append(s);
        return res.toString();
    }

    public static leftPad$java_lang_String$int$java_lang_String(s : string, minLength : number, filling : string) : string {
        let ln : number = s.length;
        if(minLength <= ln) {
            return s;
        }
        let res : StringBuilder = new StringBuilder("");
        let dif : number = minLength - ln;
        let fln : number = filling.length;
        if(fln === 0) {
            throw Object.defineProperty(new Error("The \"filling\" argument can\'t be 0 length string."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        let cnt : number = (dif / fln|0);
        for(let i : number = 0; i < cnt; i++) {
            res.append(filling);
        };
        cnt = dif % fln;
        for(let i : number = 0; i < cnt; i++) {
            res.append(filling.charAt(i));
        };
        res.append(s);
        return res.toString();
    }

    /**
     * Pads the string at the left with a filling pattern until it reaches the
     * desired length. If the string is longer than this length, then it returns
     * the unchanged string. For example: <code>leftPad('ABC', 9, '1234')</code>
     * returns <code>"123412ABC"</code>.
     * 
     * @param {String} s         the string that will be padded.
     * @param {number} minLength the length to reach.
     * @param {String} filling   the filling pattern. Must be at least 1 characters long.
     * Can't be <code>null</code>.
     * @return {String}
     */
    public static leftPad(s? : any, minLength? : any, filling? : any) : any {
        if(((typeof s === 'string') || s === null) && ((typeof minLength === 'number') || minLength === null) && ((typeof filling === 'string') || filling === null)) {
            return <any>StringUtil.leftPad$java_lang_String$int$java_lang_String(s, minLength, filling);
        } else if(((typeof s === 'string') || s === null) && ((typeof minLength === 'number') || minLength === null) && ((typeof filling === 'string') || filling === null)) {
            return <any>StringUtil.leftPad$java_lang_String$int$char(s, minLength, filling);
        } else if(((typeof s === 'string') || s === null) && ((typeof minLength === 'number') || minLength === null) && filling === undefined) {
            return <any>StringUtil.leftPad$java_lang_String$int(s, minLength);
        } else throw new Error('invalid overload');
    }

    public static rightPad$java_lang_String$int(s : string, minLength : number) : string {
        return StringUtil.rightPad$java_lang_String$int$char(s, minLength, ' ');
    }

    public static rightPad$java_lang_String$int$char(s : string, minLength : number, filling : string) : string {
        let ln : number = s.length;
        if(minLength <= ln) {
            return s;
        }
        let res : StringBuilder = new StringBuilder("");
        res.append(s);
        let dif : number = minLength - ln;
        for(let i : number = 0; i < dif; i++) {
            res.append(filling);
        };
        return res.toString();
    }

    public static rightPad$java_lang_String$int$java_lang_String(s : string, minLength : number, filling : string) : string {
        let ln : number = s.length;
        if(minLength <= ln) {
            return s;
        }
        let res : StringBuilder = new StringBuilder("");
        res.append(s);
        let dif : number = minLength - ln;
        let fln : number = filling.length;
        if(fln === 0) {
            throw Object.defineProperty(new Error("The \"filling\" argument can\'t be 0 length string."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        let start : number = ln % fln;
        let end : number = fln - start <= dif?fln:start + dif;
        for(let i : number = start; i < end; i++) {
            res.append(filling.charAt(i));
        };
        dif -= end - start;
        let cnt : number = (dif / fln|0);
        for(let i : number = 0; i < cnt; i++) {
            res.append(filling);
        };
        cnt = dif % fln;
        for(let i : number = 0; i < cnt; i++) {
            res.append(filling.charAt(i));
        };
        return res.toString();
    }

    /**
     * Pads the string at the right with a filling pattern until it reaches the
     * desired length. If the string is longer than this length, then it returns
     * the unchanged string. For example: <code>rightPad('ABC', 9, '1234')</code>
     * returns <code>"ABC412341"</code>. Note that the filling pattern is
     * started as if you overlay <code>"123412341"</code> with the left-aligned
     * <code>"ABC"</code>, so it starts with <code>"4"</code>.
     * 
     * @param {String} s         the string that will be padded.
     * @param {number} minLength the length to reach.
     * @param {String} filling   the filling pattern. Must be at least 1 characters long.
     * Can't be <code>null</code>.
     * @return {String}
     */
    public static rightPad(s? : any, minLength? : any, filling? : any) : any {
        if(((typeof s === 'string') || s === null) && ((typeof minLength === 'number') || minLength === null) && ((typeof filling === 'string') || filling === null)) {
            return <any>StringUtil.rightPad$java_lang_String$int$java_lang_String(s, minLength, filling);
        } else if(((typeof s === 'string') || s === null) && ((typeof minLength === 'number') || minLength === null) && ((typeof filling === 'string') || filling === null)) {
            return <any>StringUtil.rightPad$java_lang_String$int$char(s, minLength, filling);
        } else if(((typeof s === 'string') || s === null) && ((typeof minLength === 'number') || minLength === null) && filling === undefined) {
            return <any>StringUtil.rightPad$java_lang_String$int(s, minLength);
        } else throw new Error('invalid overload');
    }

    /**
     * Converts a version number string to an integer for easy comparison.
     * The version number must start with numbers separated with
     * dots. There can be any number of such dot-separated numbers, but only
     * the first three will be considered. After the numbers arbitrary text can
     * follow, and will be ignored.
     * <p>
     * The string will be trimmed before interpretation.
     * 
     * @return {number} major * 1000000 + minor * 1000 + micro
     * @param {String} version
     */
    public static versionStringToInt(version : string) : number {
        return new Version(version).intValue();
    }

    /**
     * Tries to run {@code toString()}, but if that fails, returns a
     * {@code "[com.example.SomeClass.toString() failed: " + e + "]"} instead. Also, it returns {@code null} for
     * {@code null} parameter.
     * 
     * @since 2.3.20
     * @param {Object} object
     * @return {String}
     */
    public static tryToString(object : any) : string {
        if(object == null) return null;
        try {
            return object.toString();
        } catch(e) {
            return StringUtil.failedToStringSubstitute(object, e);
        };
    }

    /*private*/ static failedToStringSubstitute(object : any, e : Error) : string {
        let eStr : string;
        try {
            eStr = e.toString();
        } catch(e2) {
            eStr = ClassUtil.getShortClassNameOfObject(e);
        };
        return "[" + ClassUtil.getShortClassNameOfObject(object) + ".toString() failed: " + eStr + "]";
    }

    /**
     * Converts {@code 1}, {@code 2}, {@code 3} and so forth to {@code "A"}, {@code "B"}, {@code "C"} and so fort. When
     * reaching {@code "Z"}, it continues like {@code "AA"}, {@code "AB"}, etc. The lowest supported number is 1, but
     * there's no upper limit.
     * 
     * @throws IllegalArgumentException If the argument is 0 or less.
     * @since 2.3.22
     * @param {number} n
     * @return {String}
     */
    public static toUpperABC(n : number) : string {
        return StringUtil.toABC(n, 'A');
    }

    /**
     * Same as {link #toUpperABC(int)}, but produces lower case result, like {@code "ab"}.
     * 
     * @since 2.3.22
     * @param {number} n
     * @return {String}
     */
    public static toLowerABC(n : number) : string {
        return StringUtil.toABC(n, 'a');
    }

    /**
     * @param {string} oneDigit The character that stands for the value 1.
     * @param {number} n
     * @return {String}
     * @private
     */
    /*private*/ static toABC(n : number, oneDigit : string) : string {
        if(n < 1) {
            throw Object.defineProperty(new Error("Can\'t convert 0 or negative numbers to latin-number: " + n), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        let reached : number = 1;
        let weight : number = 1;
        while((true)) {
            let nextWeight : number = weight * 26;
            let nextReached : number = reached + nextWeight;
            if(nextReached <= n) {
                weight = nextWeight;
                reached = nextReached;
            } else {
                break;
            }
        };
        let sb : StringBuilder = new StringBuilder("");
        while((weight !== 0)) {
            let digitIncrease : number = ((n - reached) / weight|0);
            sb.append(String.fromCharCode(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(oneDigit) + digitIncrease)));
            reached += digitIncrease * weight;
            weight /= 26;
        };
        return sb.toString();
    }

    /**
     * Behaves exactly like {link String#trim()}, but works on arrays. If the resulting array would have the same
     * content after trimming, it returns the original array instance. Otherwise it returns a new array instance (or
     * {link CollectionUtils#EMPTY_CHAR_ARRAY}).
     * 
     * @since 2.3.22
     * @param {Array} cs
     * @return {Array}
     */
    public static trim(cs : string[]) : string[] {
        if(cs.length === 0) {
            return cs;
        }
        let start : number = 0;
        let end : number = cs.length;
        while((start < end && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(cs[start]) <= ' '.charCodeAt(0))) {
            start++;
        };
        while((start < end && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(cs[end - 1]) <= ' '.charCodeAt(0))) {
            end--;
        };
        if(start === 0 && end === cs.length) {
            return cs;
        }
        if(start === end) {
            return CollectionUtils.EMPTY_CHAR_ARRAY_$LI$();
        }
        let newCs : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(end - start);
        System.arraycopy(cs, start, newCs, 0, end - start);
        return newCs;
    }

    public static isTrimmableToEmpty$char_A(text : string[]) : boolean {
        return StringUtil.isTrimmableToEmpty$char_A$int$int(text, 0, text.length);
    }

    public static isTrimmableToEmpty$char_A$int(text : string[], start : number) : boolean {
        return StringUtil.isTrimmableToEmpty$char_A$int$int(text, start, text.length);
    }

    public static isTrimmableToEmpty$char_A$int$int(text : string[], start : number, end : number) : boolean {
        for(let i : number = start; i < end; i++) {
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(text[i]) > ' '.charCodeAt(0)) {
                return false;
            }
        };
        return true;
    }

    /**
     * Like {link #isTrimmableToEmpty(char[])}, but acts on a sub-array that starts at {@code start} (inclusive index)
     * and ends at {@code end} (exclusive index).
     * 
     * @since 2.3.23
     * @param {Array} text
     * @param {number} start
     * @param {number} end
     * @return {boolean}
     */
    public static isTrimmableToEmpty(text? : any, start? : any, end? : any) : any {
        if(((text != null && text instanceof <any>Array && (text.length==0 || text[0] == null ||(typeof text[0] === 'string'))) || text === null) && ((typeof start === 'number') || start === null) && ((typeof end === 'number') || end === null)) {
            return <any>StringUtil.isTrimmableToEmpty$char_A$int$int(text, start, end);
        } else if(((text != null && text instanceof <any>Array && (text.length==0 || text[0] == null ||(typeof text[0] === 'string'))) || text === null) && ((typeof start === 'number') || start === null) && end === undefined) {
            return <any>StringUtil.isTrimmableToEmpty$char_A$int(text, start);
        } else if(((text != null && text instanceof <any>Array && (text.length==0 || text[0] == null ||(typeof text[0] === 'string'))) || text === null) && start === undefined && end === undefined) {
            return <any>StringUtil.isTrimmableToEmpty$char_A(text);
        } else throw new Error('invalid overload');
    }

    public static globToRegularExpression$java_lang_String(glob : string) : Pattern {
        return StringUtil.globToRegularExpression$java_lang_String$boolean(glob, false);
    }

    public static globToRegularExpression$java_lang_String$boolean(glob : string, caseInsensitive : boolean) : Pattern {
        let regex : StringBuilder = new StringBuilder("");
        let nextStart : number = 0;
        let escaped : boolean = false;
        let ln : number = glob.length;
        for(let idx : number = 0; idx < ln; idx++) {
            let c : string = glob.charAt(idx);
            if(!escaped) {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '?'.charCodeAt(0)) {
                    StringUtil.appendLiteralGlobSection(regex, glob, nextStart, idx);
                    regex.append("[^/]");
                    nextStart = idx + 1;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '*'.charCodeAt(0)) {
                    StringUtil.appendLiteralGlobSection(regex, glob, nextStart, idx);
                    if(idx + 1 < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(glob.charAt(idx + 1)) == '*'.charCodeAt(0)) {
                        if(!(idx === 0 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(glob.charAt(idx - 1)) == '/'.charCodeAt(0))) {
                            throw Object.defineProperty(new Error("The \"**\" wildcard must be directly after a \"/\" or it must be at the beginning, in this glob: " + glob), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                        }
                        if(idx + 2 === ln) {
                            regex.append(".*");
                            idx++;
                        } else {
                            if(!(idx + 2 < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(glob.charAt(idx + 2)) == '/'.charCodeAt(0))) {
                                throw Object.defineProperty(new Error("The \"**\" wildcard must be followed by \"/\", or must be at tehe end, in this glob: " + glob), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                            }
                            regex.append("(.*?/)*");
                            idx += 2;
                        }
                    } else {
                        regex.append("[^/]*");
                    }
                    nextStart = idx + 1;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0)) {
                    escaped = true;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '['.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '{'.charCodeAt(0)) {
                    throw Object.defineProperty(new Error("The \"" + c + "\" glob operator is currently unsupported (precede it with \\ for literal matching), in this glob: " + glob), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
            } else {
                escaped = false;
            }
        };
        StringUtil.appendLiteralGlobSection(regex, glob, nextStart, glob.length);
        return Pattern.compile(regex.toString(), caseInsensitive?Pattern.CASE_INSENSITIVE | Pattern.UNICODE_CASE:0);
    }

    /**
     * Creates a regular expression from a glob. The glob must use {@code /} for as file separator, not {@code \}
     * (backslash), and is always case sensitive.
     * 
     * <p>This glob implementation recognizes these special characters:
     * <ul>
     * <li>{@code ?}: Wildcard that matches exactly one character, other than {@code /}
     * <li>{@code *}: Wildcard that matches zero, one or multiple characters, other than {@code /}
     * <li>{@code **}: Wildcard that matches zero, one or multiple directories. For example, {@code **}{@code /head.ftl}
     * matches {@code foo/bar/head.ftl}, {@code foo/head.ftl} and {@code head.ftl} too. {@code **} must be either
     * preceded by {@code /} or be at the beginning of the glob. {@code **} must be either followed by {@code /} or be
     * at the end of the glob. When {@code **} is at the end of the glob, it also matches file names, like
     * {@code a/**} matches {@code a/b/c.ftl}. If the glob only consist of a {@code **}, it will be a match for
     * everything.
     * <li>{@code \} (backslash): Makes the next character non-special (a literal). For example {@code How\?.ftl} will
     * match {@code How?.ftl}, but not {@code HowX.ftl}. Naturally, two backslashes produce one literal backslash.
     * <li>{@code [}: Reserved for future purposes; can't be used
     * <li><code>{</code>: Reserved for future purposes; can't be used
     * </ul>
     * 
     * @since 2.3.24
     * @param {String} glob
     * @param {boolean} caseInsensitive
     * @return {Pattern}
     */
    public static globToRegularExpression(glob? : any, caseInsensitive? : any) : any {
        if(((typeof glob === 'string') || glob === null) && ((typeof caseInsensitive === 'boolean') || caseInsensitive === null)) {
            return <any>StringUtil.globToRegularExpression$java_lang_String$boolean(glob, caseInsensitive);
        } else if(((typeof glob === 'string') || glob === null) && caseInsensitive === undefined) {
            return <any>StringUtil.globToRegularExpression$java_lang_String(glob);
        } else throw new Error('invalid overload');
    }

    /*private*/ static appendLiteralGlobSection(regex : StringBuilder, glob : string, start : number, end : number) {
        if(start === end) return;
        let part : string = StringUtil.unescapeLiteralGlobSection(glob.substring(start, end));
        regex.append(Pattern.quote(part));
    }

    /*private*/ static unescapeLiteralGlobSection(s : string) : string {
        let backslashIdx : number = s.indexOf('\\');
        if(backslashIdx === -1) {
            return s;
        }
        let ln : number = s.length;
        let sb : StringBuilder = new StringBuilder("");
        let nextStart : number = 0;
        do {
            sb.append(s, nextStart, backslashIdx);
            nextStart = backslashIdx + 1;
        } while(((backslashIdx = s.indexOf('\\', nextStart + 1)) !== -1));
        if(nextStart < ln) {
            sb.append(s, nextStart, ln);
        }
        return sb.toString();
    }
}
StringUtil["__class"] = "freemarker.template.utility.StringUtil";



var __Function = Function;

StringUtil.XML_APOS_$LI$();

StringUtil.HTML_APOS_$LI$();

StringUtil.QUOT_$LI$();

StringUtil.AMP_$LI$();

StringUtil.GT_$LI$();

StringUtil.LT_$LI$();

StringUtil.ESCAPES_$LI$();
