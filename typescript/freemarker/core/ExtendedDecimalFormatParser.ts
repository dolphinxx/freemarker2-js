/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from '../template/utility/StringUtil';
import {Character} from '../../java/lang/Character';
import {DecimalFormat} from "../../java/text/DecimalFormat";
import {DecimalFormatSymbols} from "../../java/text/DecimalFormatSymbols";
import {Locale} from "../../java/util/Locale";

export class ExtendedDecimalFormatParser {
    // static __static_initialized : boolean = false;
    // static __static_initialize() { if(!ExtendedDecimalFormatParser.__static_initialized) { ExtendedDecimalFormatParser.__static_initialized = true; ExtendedDecimalFormatParser.__static_initializer_0(); } }

    static PARAM_ROUNDING_MODE : string = "roundingMode";

    static PARAM_MULTIPIER : string = "multipier";

    static PARAM_DECIMAL_SEPARATOR : string = "decimalSeparator";

    static PARAM_MONETARY_DECIMAL_SEPARATOR : string = "monetaryDecimalSeparator";

    static PARAM_GROUP_SEPARATOR : string = "groupingSeparator";

    static PARAM_EXPONENT_SEPARATOR : string = "exponentSeparator";

    static PARAM_MINUS_SIGN : string = "minusSign";

    static PARAM_INFINITY : string = "infinity";

    static PARAM_NAN : string = "nan";

    static PARAM_PERCENT : string = "percent";

    static PARAM_PER_MILL : string = "perMill";

    static PARAM_ZERO_DIGIT : string = "zeroDigit";

    static PARAM_CURRENCY_CODE : string = "currencyCode";

    static PARAM_CURRENCY_SYMBOL : string = "currencySymbol";

    static PARAM_VALUE_RND_UP : string = "up";

    static PARAM_VALUE_RND_DOWN : string = "down";

    static PARAM_VALUE_RND_CEILING : string = "ceiling";

    static PARAM_VALUE_RND_FLOOR : string = "floor";

    static PARAM_VALUE_RND_HALF_DOWN : string = "halfDown";

    static PARAM_VALUE_RND_HALF_EVEN : string = "halfEven";

    static PARAM_VALUE_RND_HALF_UP : string = "halfUp";

    static PARAM_VALUE_RND_UNNECESSARY : string = "unnecessary";

    // static PARAM_HANDLERS : Map; public static PARAM_HANDLERS_$LI$() : Map { ExtendedDecimalFormatParser.__static_initialize(); return ExtendedDecimalFormatParser.PARAM_HANDLERS; };

    // static __static_initializer_0() {
    //     let m : Map = <any>(new Map<any, any>());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_ROUNDING_MODE, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$0());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_MULTIPIER, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$1());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_DECIMAL_SEPARATOR, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$2());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_MONETARY_DECIMAL_SEPARATOR, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$3());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_GROUP_SEPARATOR, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$4());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_EXPONENT_SEPARATOR, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$5());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_MINUS_SIGN, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$6());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_INFINITY, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$7());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_NAN, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$8());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_PERCENT, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$9());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_PER_MILL, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$10());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_ZERO_DIGIT, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$11());
    //     /* put */m.set(ExtendedDecimalFormatParser.PARAM_CURRENCY_CODE, new ExtendedDecimalFormatParser.ExtendedDecimalFormatParser$12());
    //     ExtendedDecimalFormatParser.PARAM_HANDLERS = m;
    // }

    static SNIP_MARK : string = "[...]";

    static MAX_QUOTATION_LENGTH : number = 10;

    /*private*/ src : string;

    /*private*/ pos : number = 0;

    /*private*/ symbols : DecimalFormatSymbols;

    /*private*/ roundingMode : number;

    /*private*/ multipier : number;

    static parse(formatString : string, locale : Locale) : DecimalFormat {
        return new ExtendedDecimalFormatParser(formatString, locale).parse();
    }

    parse() : DecimalFormat {
        // let stdPattern : string = this.fetchStandardPattern();
        // this.skipWS();
        // this.parseFormatStringExtension();
        // let decimalFormat : DecimalFormat;
        // try {
        //     decimalFormat = new DecimalFormat(stdPattern, this.symbols);
        // } catch(e) {
        //     let pe : Error = Object.defineProperty(new Error(e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
        //     if((<Error>null) != null) {
        //         try {
        //             e.initCause((<Error>null));
        //         } catch(e2) {
        //         }
        //     }
        //     throw pe;
        // }
        // if(this.roundingMode != null) {
        //     if(_JavaVersions.JAVA_6_$LI$() == null) {
        //         throw Object.defineProperty(new Error("Setting rounding mode needs Java 6 or later"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
        //     }
        //     _JavaVersions.JAVA_6_$LI$().setRoundingMode(decimalFormat, this.roundingMode);
        // }
        // if(this.multipier != null) {
        //     decimalFormat.setMultiplier(this.multipier);
        // }
        // return decimalFormat;
        return new DecimalFormat();
    }

    // parseFormatStringExtension() {
    //     let ln : number = this.src.length;
    //     if(this.pos === ln) {
    //         return;
    //     }
    //     let currencySymbol : string = null;
    //     fetchParamters: do {
    //         let namePos : number = this.pos;
    //         let name : string = this.fetchName();
    //         if(name == null) {
    //             throw this.newExpectedSgParseException("name");
    //         }
    //         this.skipWS();
    //         if(!this.fetchChar('=')) {
    //             throw this.newExpectedSgParseException("\"=\"");
    //         }
    //         this.skipWS();
    //         let valuePos : number = this.pos;
    //         let value : string = this.fetchValue();
    //         if(value == null) {
    //             throw this.newExpectedSgParseException("value");
    //         }
    //         let paramEndPos : number = this.pos;
    //         let handler : ExtendedDecimalFormatParser.ParameterHandler = /* get */ExtendedDecimalFormatParser.PARAM_HANDLERS_$LI$().get(name);
    //         if(handler == null) {
    //             if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,ExtendedDecimalFormatParser.PARAM_CURRENCY_SYMBOL))) {
    //                 currencySymbol = value;
    //             } else {
    //                 throw this.newUnknownParameterException(name, namePos);
    //             }
    //         } else {
    //             try {
    //                 handler.handle(this, value);
    //             } catch(e) {
    //                 throw this.newInvalidParameterValueException(name, value, valuePos, e);
    //             }
    //         }
    //         this.skipWS();
    //         if(this.fetchChar(',')) {
    //             this.skipWS();
    //         } else {
    //             if(this.pos === ln) {
    //                 break fetchParamters;
    //             }
    //             if(this.pos === paramEndPos) {
    //                 throw this.newExpectedSgParseException("parameter separator whitespace or comma");
    //             }
    //         }
    //     } while((true));
    //     if(currencySymbol != null) {
    //         this.symbols.setCurrencySymbol(currencySymbol);
    //     }
    // }

    // newInvalidParameterValueException(name : string, value : string, valuePos : number, e : ExtendedDecimalFormatParser.InvalidParameterValueException) : Error {
    //     return Object.defineProperty(new Error(StringUtil.jQuote$java_lang_Object(value) + " is an invalid value for the \"" + name + "\" parameter: " + e.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
    // }
    //
    // newUnknownParameterException(name : string, namePos : number) : Error {
    //     let sb : StringBuilder = new StringBuilder("");
    //     sb.append("Unsupported parameter name, ").append(StringUtil.jQuote$java_lang_Object(name));
    //     sb.append(". The supported names are: ");
    //     let legalNames : Set = ExtendedDecimalFormatParser.PARAM_HANDLERS_$LI$().keySet();
    //     let legalNameArr : Array<any> = legalNames.toArray();
    //     for(let i : number = 0; i < legalNameArr.length; i++) {
    //         if(i !== 0) {
    //             sb.append(", ");
    //         }
    //         sb.append(legalNameArr[i]);
    //     }
    //     return Object.defineProperty(new Error(sb.toString()), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
    // }

    skipWS() {
        let ln : number = this.src.length;
        while((this.pos < ln && this.isWS(this.src.charAt(this.pos)))) {
            this.pos++;
        }
    }

    fetchChar(fetchedChar : string) : boolean {
        if(this.pos < this.src.length && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.src.charAt(this.pos)) == (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(fetchedChar)) {
            this.pos++;
            return true;
        } else {
            return false;
        }
    }

    isWS(c : string) : boolean {
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ' '.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\t'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\u00a0'.charCodeAt(0);
    }

    // fetchName() : string {
    //     let ln : number = this.src.length;
    //     let startPos : number = this.pos;
    //     let firstChar : boolean = true;
    //     scanUntilEnd: while((this.pos < ln)) {
    //         let c : string = this.src.charAt(this.pos);
    //         if(firstChar) {
    //             if(!Character.isJavaIdentifierStart(c)) {
    //                 break scanUntilEnd;
    //             }
    //             firstChar = false;
    //         } else if(!Character.isJavaIdentifierPart(c)) {
    //             break scanUntilEnd;
    //         }
    //         this.pos++;
    //     }
    //     return !firstChar?this.src.substring(startPos, this.pos):null;
    // }

    // fetchValue() : string {
    //     let ln : number = this.src.length;
    //     let startPos : number = this.pos;
    //     let openedQuot : string = String.fromCharCode(0);
    //     let needsUnescaping : boolean = false;
    //     scanUntilEnd: while((this.pos < ln)) {
    //         let c : string = this.src.charAt(this.pos);
    //         if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\''.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0)) {
    //             if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openedQuot) == 0) {
    //                 if(startPos !== this.pos) {
    //                     throw Object.defineProperty(new Error("The " + c + " character can only be used for quoting values, but it was in the middle of an non-quoted value."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
    //                 }
    //                 openedQuot = c;
    //             } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openedQuot)) {
    //                 if(this.pos + 1 < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.src.charAt(this.pos + 1)) == (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openedQuot)) {
    //                     this.pos++;
    //                     needsUnescaping = true;
    //                 } else {
    //                     let str : string = this.src.substring(startPos + 1, this.pos);
    //                     this.pos++;
    //                     return needsUnescaping?this.unescape(str, openedQuot):str;
    //                 }
    //             }
    //         } else {
    //             if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openedQuot) == 0 && !Character.isJavaIdentifierPart(c)) {
    //                 break scanUntilEnd;
    //             }
    //         }
    //         this.pos++;
    //     }
    //     if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openedQuot) != 0) {
    //         throw Object.defineProperty(new Error("The " + openedQuot + " quotation wasn\'t closed when the end of the source was reached."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
    //     }
    //     return startPos === this.pos?null:this.src.substring(startPos, this.pos);
    // }

    unescape(s : string, openedQuot : string) : string {
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openedQuot) == '\''.charCodeAt(0)?StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(s, "\'\'", "\'"):StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(s, "\"\"", "\"");
    }

    fetchStandardPattern() : string {
        let pos : number = this.pos;
        let ln : number = this.src.length;
        let semicolonCnt : number = 0;
        let quotedMode : boolean = false;
        findStdPartEnd: while((pos < ln)) {
            let c : string = this.src.charAt(pos);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ';'.charCodeAt(0) && !quotedMode) {
                semicolonCnt++;
                if(semicolonCnt === 2) {
                    break findStdPartEnd;
                }
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\''.charCodeAt(0)) {
                if(quotedMode) {
                    if(pos + 1 < ln && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.src.charAt(pos + 1)) == '\''.charCodeAt(0)) {
                        pos++;
                    } else {
                        quotedMode = false;
                    }
                } else {
                    quotedMode = true;
                }
            }
            pos++;
        }
        let stdFormatStr : string;
        if(semicolonCnt < 2) {
            stdFormatStr = this.src;
        } else {
            let stdEndPos : number = pos;
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.src.charAt(pos - 1)) == ';'.charCodeAt(0)) {
                stdEndPos--;
            }
            stdFormatStr = this.src.substring(0, stdEndPos);
        }
        if(pos < ln) {
            pos++;
        }
        this.pos = pos;
        return stdFormatStr;
    }

    constructor(formatString : string, locale : Locale) {
        if(this.src===undefined) this.src = null;
        if(this.symbols===undefined) this.symbols = null;
        if(this.roundingMode===undefined) this.roundingMode = null;
        if(this.multipier===undefined) this.multipier = null;
        this.src = formatString;
        this.symbols = new DecimalFormatSymbols(locale);
    }

    newExpectedSgParseException(expectedThing : string) : Error {
        let quotation : string;
        let i : number = this.src.length - 1;
        while((i >= 0 && Character.isWhitespace(this.src.charAt(i)))) {
            i--;
        }
        let ln : number = i + 1;
        if(this.pos < ln) {
            let qEndPos : number = this.pos + ExtendedDecimalFormatParser.MAX_QUOTATION_LENGTH;
            if(qEndPos >= ln) {
                quotation = this.src.substring(this.pos, ln);
            } else {
                quotation = this.src.substring(this.pos, qEndPos - ExtendedDecimalFormatParser.SNIP_MARK.length) + ExtendedDecimalFormatParser.SNIP_MARK;
            }
        } else {
            quotation = null;
        }
        return Object.defineProperty(new Error("Expected a(n) " + expectedThing + " at position " + this.pos + " (0-based), but " + (quotation == null?"reached the end of the input.":"found: " + quotation)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.text.ParseException','java.lang.Exception'] });
    }
}
ExtendedDecimalFormatParser["__class"] = "freemarker.core.ExtendedDecimalFormatParser";


export namespace ExtendedDecimalFormatParser {

    // export interface ParameterHandler {
    //     handle(parser : ExtendedDecimalFormatParser, value : string);
    // }
    //
    // export class InvalidParameterValueException extends Error {
    //     message : string;
    //
    //     public constructor(message : string) {
    //         super();
    //         (<any>Object).setPrototypeOf(this, InvalidParameterValueException.prototype);
    //         if(this.message===undefined) this.message = null;
    //         this.message = message;
    //     }
    // }
    // InvalidParameterValueException["__class"] = "freemarker.core.ExtendedDecimalFormatParser.InvalidParameterValueException";
    // InvalidParameterValueException["__interfaces"] = ["java.io.Serializable"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$0 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         let parsedValue : RoundingMode;
    //         if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_UP))) {
    //             parsedValue = RoundingMode.UP;
    //         } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_DOWN))) {
    //             parsedValue = RoundingMode.DOWN;
    //         } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_CEILING))) {
    //             parsedValue = RoundingMode.CEILING;
    //         } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_FLOOR))) {
    //             parsedValue = RoundingMode.FLOOR;
    //         } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_HALF_DOWN))) {
    //             parsedValue = RoundingMode.HALF_DOWN;
    //         } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_HALF_EVEN))) {
    //             parsedValue = RoundingMode.HALF_EVEN;
    //         } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_HALF_UP))) {
    //             parsedValue = RoundingMode.HALF_UP;
    //         } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(value,ExtendedDecimalFormatParser.PARAM_VALUE_RND_UNNECESSARY))) {
    //             parsedValue = RoundingMode.UNNECESSARY;
    //         } else {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Should be one of: " + ExtendedDecimalFormatParser.PARAM_VALUE_RND_UP + ", " + ExtendedDecimalFormatParser.PARAM_VALUE_RND_DOWN + ", " + ExtendedDecimalFormatParser.PARAM_VALUE_RND_CEILING + ", " + ExtendedDecimalFormatParser.PARAM_VALUE_RND_FLOOR + ", " + ExtendedDecimalFormatParser.PARAM_VALUE_RND_HALF_DOWN + ", " + ExtendedDecimalFormatParser.PARAM_VALUE_RND_HALF_EVEN + ", " + ExtendedDecimalFormatParser.PARAM_VALUE_RND_UNNECESSARY);
    //         }
    //         if(_JavaVersions.JAVA_6_$LI$() == null) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("For setting the rounding mode you need Java 6 or later.");
    //         }
    //         parser.roundingMode = parsedValue;
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$0["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];



    // export class ExtendedDecimalFormatParser$1 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         try {
    //             parser.multipier = parseFloat(value);
    //         } catch(e) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Malformed integer.");
    //         }
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$1["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$2 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(value.length !== 1) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Must contain exactly 1 character.");
    //         }
    //         parser.symbols.setDecimalSeparator(value.charAt(0));
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$2["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$3 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(value.length !== 1) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Must contain exactly 1 character.");
    //         }
    //         parser.symbols.setMonetaryDecimalSeparator(value.charAt(0));
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$3["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$4 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(value.length !== 1) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Must contain exactly 1 character.");
    //         }
    //         parser.symbols.setGroupingSeparator(value.charAt(0));
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$4["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$5 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(_JavaVersions.JAVA_6_$LI$() == null) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("For setting the exponent separator you need Java 6 or later.");
    //         }
    //         _JavaVersions.JAVA_6_$LI$().setExponentSeparator(parser.symbols, value);
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$5["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$6 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(value.length !== 1) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Must contain exactly 1 character.");
    //         }
    //         parser.symbols.setMinusSign(value.charAt(0));
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$6["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$7 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         parser.symbols.setInfinity(value);
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$7["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$8 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         parser.symbols.setNaN(value);
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$8["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$9 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(value.length !== 1) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Must contain exactly 1 character.");
    //         }
    //         parser.symbols.setPercent(value.charAt(0));
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$9["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$10 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(value.length !== 1) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Must contain exactly 1 character.");
    //         }
    //         parser.symbols.setPerMill(value.charAt(0));
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$10["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$11 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         if(value.length !== 1) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Must contain exactly 1 character.");
    //         }
    //         parser.symbols.setZeroDigit(value.charAt(0));
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$11["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];
    //
    //
    //
    // export class ExtendedDecimalFormatParser$12 implements ExtendedDecimalFormatParser.ParameterHandler {
    //     public handle(parser : ExtendedDecimalFormatParser, value : string) {
    //         let currency : Currency;
    //         try {
    //             currency = Currency.getInstance(value);
    //         } catch(e) {
    //             throw new ExtendedDecimalFormatParser.InvalidParameterValueException("Not a known ISO 4217 code.");
    //         }
    //         parser.symbols.setCurrency(currency);
    //     }
    //
    //     constructor() {
    //     }
    // }
    // ExtendedDecimalFormatParser$12["__interfaces"] = ["freemarker.core.ExtendedDecimalFormatParser.ParameterHandler"];


}





// ExtendedDecimalFormatParser.PARAM_HANDLERS_$LI$();
//
// ExtendedDecimalFormatParser.__static_initialize();
