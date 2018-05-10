/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../template/Configuration';
import {StringUtil} from '../template/utility/StringUtil';
import {FMParserConstants} from './FMParserConstants';
import {FMParser} from './FMParser';
import {Token} from './Token';
import {TokenMgrError} from './TokenMgrError';
import {_CoreStringUtils} from './_CoreStringUtils';
import {_MessageUtil} from './_MessageUtil';
import {SimpleCharStream} from './SimpleCharStream';
import {System} from '../../java/lang/System';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_CoreAPI} from './_CoreAPI';
import * as bigInt from 'big-integer';
import {BigInteger} from "big-integer";
import {PrintStream} from "../../java/io/PrintStream";
import {StringTokenizer} from "../../java/util/StringTokenizer";

/**
 * Constructor.
 * @param {SimpleCharStream} stream
 * @param {number} lexState
 * @class
 */
export class FMParserTokenManager implements FMParserConstants {
    static PLANNED_DIRECTIVE_HINT : string = "(If you have seen this directive in use elsewhere, this was a planned directive, so maybe you need to upgrade FreeMarker.)";

    /**
     * The noparseTag is set when we enter a block of text that the parser more or less ignores. These are <noparse> and
     * <comment>. This variable tells us what the closing tag should be, and when we hit that, we resume parsing. Note
     * that with this scheme, <comment> and <noparse> tags cannot nest recursively, but it is not clear how important
     * that is.
     */
    noparseTag : string;

    /*private*/ parser : FMParser;

    /*private*/ postInterpolationLexState : number = -1;

    /**
     * Keeps track of how deeply nested we have the hash literals. This is necessary since we need to be able to
     * distinguish the } used to close a hash literal and the one used to close a ${
     */
    /*private*/ curlyBracketNesting : number;

    /*private*/ parenthesisNesting : number;

    /*private*/ bracketNesting : number;

    /*private*/ inFTLHeader : boolean;

    strictSyntaxMode : boolean;

    squBracTagSyntax : boolean;

    autodetectTagSyntax : boolean;

    tagSyntaxEstablished : boolean;

    inInvocation : boolean;

    interpolationSyntax : number;

    initialNamingConvention : number;

    namingConvention : number;

    namingConventionEstabilisher : Token;

    incompatibleImprovements : number;

    static toBigInt(value:number|BigInteger):BigInteger {
        return (typeof value === 'number')?bigInt(<number>value) : <BigInteger>value;
    }

    setParser(parser : FMParser) {
        this.parser = parser;
    }

    public handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(tok : Token, tokenNamingConvention : number, newLexState : number) {
        let image : string = tok.image;
        if(!this.strictSyntaxMode && (tokenNamingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION) && !this.isStrictTag(image)) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
        let firstChar : string = image.charAt(0);
        if(this.autodetectTagSyntax && !this.tagSyntaxEstablished) {
            this.squBracTagSyntax = ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0));
        }
        if(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0) && !this.squBracTagSyntax) || ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '<'.charCodeAt(0) && this.squBracTagSyntax)) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
        if(!this.strictSyntaxMode) {
            this.checkNamingConvention$freemarker_core_Token$int(tok, tokenNamingConvention);
            this.SwitchTo(newLexState);
            return;
        }
        if(!this.squBracTagSyntax && !this.isStrictTag(image)) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
        this.tagSyntaxEstablished = true;
        if(this.incompatibleImprovements >= /*_TemplateAPI.VERSION_INT_2_3_28*/2003028 || this.interpolationSyntax === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX) {
            let lastChar : string = image.charAt(image.length - 1);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) == ']'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) == '>'.charCodeAt(0)) {
                if(!this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != '>'.charCodeAt(0) || this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != ']'.charCodeAt(0)) {
                    throw new TokenMgrError("The tag shouldn\'t end with \"" + lastChar + "\".", TokenMgrError.LEXICAL_ERROR, tok.beginLine, tok.beginColumn, tok.endLine, tok.endColumn);
                }
            }
        }
        this.checkNamingConvention$freemarker_core_Token$int(tok, tokenNamingConvention);
        this.SwitchTo(newLexState);
    }

    public handleTagSyntaxAndSwitch(tok? : any, tokenNamingConvention? : any, newLexState? : any) : any {
        if(((tok != null && tok instanceof <any>Token) || tok === null) && ((typeof tokenNamingConvention === 'number') || tokenNamingConvention === null) && ((typeof newLexState === 'number') || newLexState === null)) {
            return <any>this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(tok, tokenNamingConvention, newLexState);
        } else if(((tok != null && tok instanceof <any>Token) || tok === null) && ((typeof tokenNamingConvention === 'number') || tokenNamingConvention === null) && newLexState === undefined) {
            return <any>this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(tok, tokenNamingConvention);
        } else throw new Error('invalid overload');
    }

    checkNamingConvention$freemarker_core_Token(tok : Token) {
        this.checkNamingConvention$freemarker_core_Token$int(tok, _CoreStringUtils.getIdentifierNamingConvention(tok.image));
    }

    public checkNamingConvention$freemarker_core_Token$int(tok : Token, tokenNamingConvention : number) {
        if(tokenNamingConvention !== Configuration.AUTO_DETECT_NAMING_CONVENTION) {
            if(this.namingConvention === Configuration.AUTO_DETECT_NAMING_CONVENTION) {
                this.namingConvention = tokenNamingConvention;
                this.namingConventionEstabilisher = tok;
            } else if(this.namingConvention !== tokenNamingConvention) {
                throw this.newNameConventionMismatchException(tok);
            }
        }
    }

    public checkNamingConvention(tok? : any, tokenNamingConvention? : any) : any {
        if(((tok != null && tok instanceof <any>Token) || tok === null) && ((typeof tokenNamingConvention === 'number') || tokenNamingConvention === null)) {
            return <any>this.checkNamingConvention$freemarker_core_Token$int(tok, tokenNamingConvention);
        } else if(((tok != null && tok instanceof <any>Token) || tok === null) && tokenNamingConvention === undefined) {
            return <any>this.checkNamingConvention$freemarker_core_Token(tok);
        } else throw new Error('invalid overload');
    }

    /*private*/ newNameConventionMismatchException(tok : Token) : TokenMgrError {
        return new TokenMgrError("Naming convention mismatch. Identifiers that are part of the template language (not the user specified ones) " + (this.initialNamingConvention === Configuration.AUTO_DETECT_NAMING_CONVENTION?"must consistently use the same naming convention within the same template. This template uses ":"must use the configured naming convention, which is the ") + (this.namingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION?"camel case naming convention (like: exampleName) ":(this.namingConvention === Configuration.LEGACY_NAMING_CONVENTION?"legacy naming convention (directive (tag) names are like examplename, everything else is like example_name) ":"??? (internal error)")) + (this.namingConventionEstabilisher != null?"estabilished by auto-detection at " + _MessageUtil.formatPosition(this.namingConventionEstabilisher.beginLine, this.namingConventionEstabilisher.beginColumn) + " by token " + StringUtil.jQuote$java_lang_Object(this.namingConventionEstabilisher.image.trim()):"") + ", but the problematic token, " + StringUtil.jQuote$java_lang_Object(tok.image.trim()) + ", uses a different convention.", TokenMgrError.LEXICAL_ERROR, tok.beginLine, tok.beginColumn, tok.endLine, tok.endColumn);
    }

    /*private*/ handleTagSyntaxAndSwitch$freemarker_core_Token$int(tok : Token, newLexState : number) {
        this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(tok, Configuration.AUTO_DETECT_NAMING_CONVENTION, newLexState);
    }

    /*private*/ isStrictTag(image : string) : boolean {
        return image.length > 2 && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(image.charAt(1)) == '#'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(image.charAt(2)) == '#'.charCodeAt(0));
    }

    /**
     * Detects the naming convention used, both in start- and end-tag tokens.
     *
     * @param {number} charIdxInName The index of the deciding character relatively to the first letter of the name.
     * @param {Token} tok
     * @return {number}
     * @private
     */
    /*private*/ static getTagNamingConvention(tok : Token, charIdxInName : number) : number {
        return _CoreStringUtils.isUpperUSASCII(FMParserTokenManager.getTagNameCharAt(tok, charIdxInName))?Configuration.CAMEL_CASE_NAMING_CONVENTION:Configuration.LEGACY_NAMING_CONVENTION;
    }

    static getTagNameCharAt(tok : Token, charIdxInName : number) : string {
        let image : string = tok.image;
        let idx : number = 0;
        for(; ; ) {
            let c : string = image.charAt(idx);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '<'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '['.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '/'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '#'.charCodeAt(0)) {
                break;
            }
            idx++;
        }
        return image.charAt(idx + charIdxInName);
    }

    /*private*/ unifiedCall(tok : Token) {
        let firstChar : string = tok.image.charAt(0);
        if(this.autodetectTagSyntax && !this.tagSyntaxEstablished) {
            this.squBracTagSyntax = ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0));
        }
        if(this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '<'.charCodeAt(0)) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
        if(!this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0)) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
        this.tagSyntaxEstablished = true;
        this.SwitchTo(FMParserConstants.NO_SPACE_EXPRESSION);
    }

    /*private*/ unifiedCallEnd(tok : Token) {
        let firstChar : string = tok.image.charAt(0);
        if(this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '<'.charCodeAt(0)) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
        if(!this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0)) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
    }

    /*private*/ startInterpolation(tok : Token) {
        if(this.interpolationSyntax === Configuration.LEGACY_INTERPOLATION_SYNTAX && tok.kind === FMParserConstants.SQUARE_BRACKET_INTERPOLATION_OPENING || this.interpolationSyntax === Configuration.DOLLAR_INTERPOLATION_SYNTAX && tok.kind !== FMParserConstants.DOLLAR_INTERPOLATION_OPENING || this.interpolationSyntax === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX && tok.kind !== FMParserConstants.SQUARE_BRACKET_INTERPOLATION_OPENING) {
            tok.kind = FMParserConstants.STATIC_TEXT_NON_WS;
            return;
        }
        if(this.postInterpolationLexState !== -1) {
            let c : string = tok.image.charAt(0);
            throw new TokenMgrError("You can\'t start an interpolation (" + tok.image + "..." + (this.interpolationSyntax === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX?"]":"}") + ") here as you are inside another interpolation.)", TokenMgrError.LEXICAL_ERROR, tok.beginLine, tok.beginColumn, tok.endLine, tok.endColumn);
        }
        this.postInterpolationLexState = this.curLexState;
        this.SwitchTo(FMParserConstants.FM_EXPRESSION);
    }

    /*private*/ endInterpolation(closingTk : Token) {
        this.SwitchTo(this.postInterpolationLexState);
        this.postInterpolationLexState = -1;
    }

    /*private*/ newUnexpectedClosingTokenException(closingTk : Token) : TokenMgrError {
        return new TokenMgrError("You can\'t have an \"" + closingTk.image + "\" here, as there\'s nothing open that it could close.", TokenMgrError.LEXICAL_ERROR, closingTk.beginLine, closingTk.beginColumn, closingTk.endLine, closingTk.endColumn);
    }

    /*private*/ eatNewline() {
        let charsRead : number = 0;
        try {
            while((true)) {
                let c : string = this.input_stream.readChar();
                ++charsRead;
                if(!/* isWhitespace */c) {
                    this.input_stream.backup(charsRead);
                    return;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                    let next : string = this.input_stream.readChar();
                    ++charsRead;
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(next) != '\n'.charCodeAt(0)) {
                        this.input_stream.backup(1);
                    }
                    return;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                    return;
                }
            }
        } catch(ioe) {
            this.input_stream.backup(charsRead);
        }
    }

    /*private*/ ftlHeader(matchedToken : Token) {
        if(!this.tagSyntaxEstablished) {
            this.squBracTagSyntax = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(matchedToken.image.charAt(0)) == '['.charCodeAt(0);
            this.tagSyntaxEstablished = true;
            this.autodetectTagSyntax = false;
        }
        let img : string = matchedToken.image;
        let firstChar : string = img.charAt(0);
        let lastChar : string = img.charAt(img.length - 1);
        if(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0) && !this.squBracTagSyntax) || ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '<'.charCodeAt(0) && this.squBracTagSyntax)) {
            matchedToken.kind = FMParserConstants.STATIC_TEXT_NON_WS;
        }
        if(matchedToken.kind !== FMParserConstants.STATIC_TEXT_NON_WS) {
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != '>'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != ']'.charCodeAt(0)) {
                this.SwitchTo(FMParserConstants.FM_EXPRESSION);
                this.inFTLHeader = true;
            } else {
                this.eatNewline();
            }
        }
    }

    /**
     * Debug output.
     */
    public debugStream : PrintStream = System.out;

    /**
     * Set debug output.
     * @param {PrintStream} ds
     */
    public setDebugStream(ds : PrintStream) {
        this.debugStream = ds;
    }

    /*private*/ jjMoveStringLiteralDfa0_7() : number {
        return this.jjMoveNfa_7(0, 0);
    }

    static jjbitVec0 : BigInteger[] = [bigInt(-2), bigInt(-1), bigInt(-1), bigInt(-1)];

    static jjbitVec2 : BigInteger[] = [bigInt(0), bigInt(0), bigInt(-1), bigInt(-1)];

    /*private*/ jjMoveNfa_7(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 13;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 0:
                            if((!bigInt("-1152956688978935809").and(l).eq(0))) {
                                if(kind > 155) kind = 155;
                                {
                                    this.jjCheckNAdd(6);
                                }
                            } else if((!bigInt("1152956688978935808").and(l).eq(0))) {
                                if(kind > 156) kind = 156;
                            }
                            if(this.curChar === 45) {
                                this.jjAddStates(0, 1);
                            } else if(this.curChar === 60) this.jjstateSet[this.jjnewStateCnt++] = 1;
                            break;
                        case 1:
                            if(this.curChar === 47) {
                                this.jjCheckNAddTwoStates(2, 3);
                            }
                            break;
                        case 2:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(3);
                            }
                            break;
                        case 4:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(2, 3);
                            }
                            break;
                        case 5:
                            if(this.curChar === 62 && kind > 154) kind = 154;
                            break;
                        case 6:
                            if((bigInt("-1152956688978935809").and(l).eq(0))) break;
                            if(kind > 155) kind = 155;
                        {
                            this.jjCheckNAdd(6);
                        }
                            break;
                        case 7:
                            if((!bigInt("1152956688978935808").and(l).eq(0)) && kind > 156) kind = 156;
                            break;
                        case 8:
                            if(this.curChar === 45) {
                                this.jjAddStates(0, 1);
                            }
                            break;
                        case 9:
                            if(this.curChar === 62 && kind > 153) kind = 153;
                            break;
                        case 10:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 9;
                            break;
                        case 12:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 11;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 0:
                            if((-134217729 & l) !== 0) {
                                if(kind > 155) kind = 155;
                                {
                                    this.jjCheckNAdd(6);
                                }
                            } else if(this.curChar === 91) {
                                if(kind > 156) kind = 156;
                            }
                            if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 1;
                            break;
                        case 3:
                            if((!bigInt("576460743847706622").and(l).eq(0))) {
                                this.jjAddStates(4, 6);
                            }
                            break;
                        case 5:
                            if(this.curChar === 93 && kind > 154) kind = 154;
                            break;
                        case 6:
                            if((-134217729 & l) === 0) break;
                            if(kind > 155) kind = 155;
                        {
                            this.jjCheckNAdd(6);
                        }
                            break;
                        case 7:
                            if(this.curChar === 91 && kind > 156) kind = 156;
                            break;
                        case 11:
                            if(this.curChar === 93 && kind > 153) kind = 153;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 0:
                        case 6:
                            if(!FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 155) kind = 155;
                        {
                            this.jjCheckNAdd(6);
                        }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 13 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    /*private*/ jjStopStringLiteralDfa_0(pos : number, active0 : number|BigInteger, active1 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        switch((pos)) {
            case 0:
                if((!active1.and(1048576).eq(0))) {
                    this.jjmatchedKind = 81;
                    return 697;
                }
                if((!active1.and(786432).eq(0))) {
                    this.jjmatchedKind = 81;
                    return -1;
                }
                return -1;
            default:
                return -1;
        }
    }

    /*private*/ jjStartNfa_0(pos : number, active0 : number|BigInteger, active1 : number|BigInteger) : number {
        return this.jjMoveNfa_0(this.jjStopStringLiteralDfa_0(pos, active0, active1), pos + 1);
    }

    /*private*/ jjStopAtPos(pos : number, kind : number) : number {
        this.jjmatchedKind = kind;
        this.jjmatchedPos = pos;
        return pos + 1;
    }

    /*private*/ jjMoveStringLiteralDfa0_0() : number {
        switch((this.curChar)) {
            case 35:
                return this.jjMoveStringLiteralDfa1_0(524288);
            case 36:
                return this.jjMoveStringLiteralDfa1_0(262144);
            case 91:
                return this.jjMoveStringLiteralDfa1_0(1048576);
            default:
                return this.jjMoveNfa_0(2, 0);
        }
    }

    /*private*/ jjMoveStringLiteralDfa1_0(active1 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_0(0, 0, active1);
            return 1;
        }
        switch((this.curChar)) {
            case 61:
                if((!active1.and(1048576).eq(0))) return this.jjStopAtPos(1, 84);
                break;
            case 123:
                if((!active1.and(262144).eq(0))) return this.jjStopAtPos(1, 82); else if((!active1.and(524288).eq(0))) return this.jjStopAtPos(1, 83);
                break;
            default:
                break;
        }
        return this.jjStartNfa_0(0, 0, active1);
    }

    static jjbitVec3: BigInteger[] = [
        bigInt('fff00000fffffffe', 16), bigInt('ffffffffffffdfff', 16), bigInt('fffff02fffffffff', 16), bigInt('16000000007fffff', 16)
    ];
    static jjbitVec4: BigInteger[] = [
        bigInt('0', 16), bigInt('0', 16), bigInt('420040000000000', 16), bigInt('ff7fffffff7fffff', 16)
    ];
    static jjbitVec5: BigInteger[] = [
        bigInt('0', 16), bigInt('8002000000000000', 16), bigInt('1fff0000', 16), bigInt('0', 16)
    ];
    static jjbitVec6: BigInteger[] = [
        bigInt('f3ffbd503e2ffc84', 16), bigInt('43e0', 16), bigInt('18', 16), bigInt('0', 16)
    ];
    static jjbitVec7: BigInteger[] = [
        bigInt('ffff7fffffffffff', 16), bigInt('ffffffff7fffffff', 16), bigInt('ffffffffffffffff', 16), bigInt('c781fffffffff', 16)
    ];
    static jjbitVec8: BigInteger[] = [
        bigInt('ffff20bfffffffff', 16), bigInt('80ffffffffff', 16), bigInt('7f7f7f7f007fffff', 16), bigInt('7f7f7f7f', 16)
    ];
    static jjbitVec9: BigInteger[] = [
        bigInt('800000000000', 16), bigInt('0', 16), bigInt('0', 16), bigInt('0', 16)
    ];
    static jjbitVec10: BigInteger[] = [
        bigInt('183e000000000060', 16), bigInt('ffffffffffffffff', 16), bigInt('ffffffffffffffff', 16), bigInt('ffffffffffffffff', 16)
    ];
    static jjbitVec11: BigInteger[] = [
        bigInt('ffffffffffffffff', 16), bigInt('ffffffffffffffff', 16), bigInt('7ffffff0000ffff', 16), bigInt('ffff000000000000', 16)
    ];
    static jjbitVec12: BigInteger[] = [
        bigInt('ffffffffffffffff', 16), bigInt('ffffffffffffffff', 16), bigInt('0', 16), bigInt('0', 16)
    ];
    static jjbitVec13: BigInteger[] = [
        bigInt('ffffffffffffffff', 16), bigInt('ffffffffffffffff', 16), bigInt('3fffffffffffff', 16), bigInt('0', 16)
    ];
    static jjbitVec14: BigInteger[] = [
        bigInt('ffffffffffffffff', 16), bigInt('ffffffffffffffff', 16), bigInt('1fff', 16), bigInt('3fffffffffff0000', 16)
    ];
    static jjbitVec15: BigInteger[] = [
        bigInt('fffffff1fff', 16), bigInt('80007fffffffffff', 16), bigInt('ffffffff00ffffff', 16), bigInt('3fffffffff', 16)
    ];
    static jjbitVec16: BigInteger[] = [
        bigInt('fffffffcff800000', 16), bigInt('ffffffffffffffff', 16), bigInt('7ff000f79ff', 16), bigInt('ff00000000000000', 16)
    ];
    static jjbitVec17: BigInteger[] = [
        bigInt('7fffff7bb', 16), bigInt('fffffffffffff', 16), bigInt('ffffffffffffc', 16), bigInt('8fc000003ff0000', 16)
    ];
    static jjbitVec18: BigInteger[] = [
        bigInt('ffff003fffffffff', 16), bigInt('1fffffff0000007f', 16), bigInt('7fffffffffff0', 16), bigInt('3ff8000', 16)
    ];
    static jjbitVec19: BigInteger[] = [
        bigInt('1ffffffffff', 16), bigInt('47fffff03ff0ff7', 16), bigInt('3e62ffffffffffff', 16), bigInt('1c07ff38000005', 16)
    ];
    static jjbitVec20: BigInteger[] = [
        bigInt('7f7f007e7e7e', 16), bigInt('0', 16), bigInt('0', 16), bigInt('3ff0007ffffffff', 16)
    ];
    static jjbitVec21: BigInteger[] = [
        bigInt('ffffffffffffffff', 16), bigInt('ffffffffffffffff', 16), bigInt('ffff000fffffffff', 16), bigInt('ffffffffffff87f', 16)
    ];
    static jjbitVec22: BigInteger[] = [
        bigInt('5f7ffdffa0f8007f', 16), bigInt('ffffffffffffffdb', 16), bigInt('3ffffffffffff', 16), bigInt('fffffffffff80000', 16)
    ];
    static jjbitVec23: BigInteger[] = [
        bigInt('3fffffffffffffff', 16), bigInt('ffffffffffff0000', 16), bigInt('fffffffffffcffff', 16), bigInt('fff0000000000ff', 16)
    ];
    static jjbitVec24: BigInteger[] = [
        bigInt('0', 16), bigInt('ffdf000000000000', 16), bigInt('ffffffffffffffff', 16), bigInt('1fffffffffffffff', 16)
    ];
    static jjbitVec25: BigInteger[] = [
        bigInt('7fffffe03ff0000', 16), bigInt('ffffffc007fffffe', 16), bigInt('7fffffffffffffff', 16), bigInt('1cfcfcfc', 16)
    ];

    /*private*/ jjMoveNfa_0(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 713;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 697:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(663);
                            } else if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 664;
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 691; else if(this.curChar === 47) this.jjstateSet[this.jjnewStateCnt++] = 698;
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 688; else if(this.curChar === 47) {
                                this.jjCheckNAdd(649);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(367);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(635);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(357);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(607);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(350);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(596);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(339);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(582);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(331);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(569);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(321);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(550);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(314);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(538);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(305);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(521);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(296);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(511);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(291);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(498);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(286);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(487);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(278);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(476);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(277);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(466);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(269);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(454);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(262);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(442);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(253);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(430);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(242);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(422);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(234);
                            } else if(this.curChar === 47) {
                                this.jjCheckNAdd(412);
                            }
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(403);
                            } else if(this.curChar === 35) {
                                this.jjCheckNAdd(227);
                            }
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 696;
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(218);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(209);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(199);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(183);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(174);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(161);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(153);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(148);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(141);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(136);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(130);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(120);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(114);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(105);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(98);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(90);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(84);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(77);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(70);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(65);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(58);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(50);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(45);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(36);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(31);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(24);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(21);
                            }
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(12);
                            }
                            break;
                        case 2:
                            if((!bigInt("-1152921611981039105").and(l).eq(0))) {
                                if(kind > 80) kind = 80;
                                {
                                    this.jjCheckNAdd(1);
                                }
                            } else if((4294977024 & l) !== 0) {
                                if(kind > 79) kind = 79;
                                {
                                    this.jjCheckNAdd(0);
                                }
                            } else if((!bigInt("1152921607686062080").and(l).eq(0))) {
                                if(kind > 81) kind = 81;
                            }
                            if(this.curChar === 60) {
                                this.jjAddStates(7, 8);
                            }
                            if(this.curChar === 60) {
                                this.jjCheckNAddStates(9, 100);
                            }
                            if(this.curChar === 60) {
                                this.jjCheckNAddStates(101, 147);
                            }
                            break;
                        case 0:
                            if((4294977024 & l) === 0) break;
                            if(kind > 79) kind = 79;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        case 1:
                            if((bigInt("-1152921611981039105").and(l).eq(0))) break;
                            if(kind > 80) kind = 80;
                        {
                            this.jjCheckNAdd(1);
                        }
                            break;
                        case 3:
                            if(this.curChar === 60) {
                                this.jjCheckNAddStates(101, 147);
                            }
                            break;
                        case 5:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(148, 149);
                            }
                            break;
                        case 6:
                            if(this.curChar === 62 && kind > 6) kind = 6;
                            break;
                        case 14:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(150, 151);
                            }
                            break;
                        case 15:
                            if(this.curChar === 62 && kind > 7) kind = 7;
                            break;
                        case 23:
                            if((4294977024 & l) !== 0 && kind > 8) kind = 8;
                            break;
                        case 28:
                            if((4294977024 & l) !== 0 && kind > 9) kind = 9;
                            break;
                        case 33:
                            if((4294977024 & l) !== 0 && kind > 10) kind = 10;
                            break;
                        case 38:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(152, 153);
                            }
                            break;
                        case 40:
                            if((4294977024 & l) !== 0 && kind > 11) kind = 11;
                            break;
                        case 47:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(154, 155);
                            }
                            break;
                        case 48:
                            if(this.curChar === 62 && kind > 12) kind = 12;
                            break;
                        case 54:
                            if((4294977024 & l) !== 0 && kind > 13) kind = 13;
                            break;
                        case 60:
                            if((4294977024 & l) !== 0 && kind > 14) kind = 14;
                            break;
                        case 67:
                            if((4294977024 & l) !== 0 && kind > 15) kind = 15;
                            break;
                        case 72:
                            if((4294977024 & l) !== 0 && kind > 16) kind = 16;
                            break;
                        case 79:
                            if((4294977024 & l) !== 0 && kind > 17) kind = 17;
                            break;
                        case 86:
                            if((4294977024 & l) !== 0 && kind > 18) kind = 18;
                            break;
                        case 92:
                            if((4294977024 & l) !== 0 && kind > 19) kind = 19;
                            break;
                        case 100:
                            if((4294977024 & l) !== 0 && kind > 20) kind = 20;
                            break;
                        case 107:
                            if((4294977024 & l) !== 0 && kind > 21) kind = 21;
                            break;
                        case 116:
                            if((4294977024 & l) !== 0 && kind > 22) kind = 22;
                            break;
                        case 122:
                            if((4294977024 & l) !== 0 && kind > 23) kind = 23;
                            break;
                        case 132:
                            if((4294977024 & l) !== 0 && kind > 24) kind = 24;
                            break;
                        case 138:
                            if((4294977024 & l) !== 0 && kind > 25) kind = 25;
                            break;
                        case 143:
                            if((4294977024 & l) !== 0 && kind > 26) kind = 26;
                            break;
                        case 150:
                            if((4294977024 & l) !== 0 && kind > 27) kind = 27;
                            break;
                        case 155:
                            if((4294977024 & l) !== 0 && kind > 28) kind = 28;
                            break;
                        case 165:
                            if((4294977024 & l) !== 0 && kind > 29) kind = 29;
                            break;
                        case 178:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(156, 157);
                            }
                            break;
                        case 179:
                            if(this.curChar === 62 && kind > 30) kind = 30;
                            break;
                        case 187:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(158, 159);
                            }
                            break;
                        case 188:
                            if(this.curChar === 62 && kind > 31) kind = 31;
                            break;
                        case 201:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(160, 161);
                            }
                            break;
                        case 202:
                            if(this.curChar === 62 && kind > 32) kind = 32;
                            break;
                        case 211:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(162, 163);
                            }
                            break;
                        case 212:
                            if(this.curChar === 62 && kind > 33) kind = 33;
                            break;
                        case 222:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(164, 165);
                            }
                            break;
                        case 223:
                            if(this.curChar === 62 && kind > 35) kind = 35;
                            break;
                        case 229:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(166, 168);
                            }
                            break;
                        case 230:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(231);
                            }
                            break;
                        case 231:
                            if(this.curChar === 62 && kind > 54) kind = 54;
                            break;
                        case 236:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(169, 171);
                            }
                            break;
                        case 237:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(238);
                            }
                            break;
                        case 238:
                            if(this.curChar === 62 && kind > 55) kind = 55;
                            break;
                        case 244:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(172, 174);
                            }
                            break;
                        case 245:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(246);
                            }
                            break;
                        case 246:
                            if(this.curChar === 62 && kind > 56) kind = 56;
                            break;
                        case 255:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(175, 177);
                            }
                            break;
                        case 256:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(257);
                            }
                            break;
                        case 257:
                            if(this.curChar === 62 && kind > 57) kind = 57;
                            break;
                        case 264:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(178, 180);
                            }
                            break;
                        case 265:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(266);
                            }
                            break;
                        case 266:
                            if(this.curChar === 62 && kind > 58) kind = 58;
                            break;
                        case 271:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(181, 183);
                            }
                            break;
                        case 272:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(273);
                            }
                            break;
                        case 273:
                            if(this.curChar === 62 && kind > 59) kind = 59;
                            break;
                        case 279:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(184, 186);
                            }
                            break;
                        case 280:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(281);
                            }
                            break;
                        case 281:
                            if(this.curChar === 62 && kind > 60) kind = 60;
                            break;
                        case 283:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(187, 189);
                            }
                            break;
                        case 284:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(285);
                            }
                            break;
                        case 285:
                            if(this.curChar === 62 && kind > 61) kind = 61;
                            break;
                        case 288:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(190, 192);
                            }
                            break;
                        case 289:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(290);
                            }
                            break;
                        case 290:
                            if(this.curChar === 62 && kind > 62) kind = 62;
                            break;
                        case 293:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(193, 195);
                            }
                            break;
                        case 294:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(295);
                            }
                            break;
                        case 295:
                            if(this.curChar === 62 && kind > 63) kind = 63;
                            break;
                        case 298:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(196, 197);
                            }
                            break;
                        case 299:
                            if(this.curChar === 62 && kind > 64) kind = 64;
                            break;
                        case 307:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(198, 200);
                            }
                            break;
                        case 308:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(309);
                            }
                            break;
                        case 309:
                            if(this.curChar === 62 && kind > 65) kind = 65;
                            break;
                        case 316:
                            if((4294977024 & l) !== 0 && kind > 66) kind = 66;
                            break;
                        case 323:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(201, 203);
                            }
                            break;
                        case 324:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(325);
                            }
                            break;
                        case 325:
                            if(this.curChar === 62 && kind > 67) kind = 67;
                            break;
                        case 333:
                            if((4294977024 & l) !== 0 && kind > 68) kind = 68;
                            break;
                        case 341:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddStates(204, 206);
                            }
                            break;
                        case 342:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(343);
                            }
                            break;
                        case 343:
                            if(this.curChar === 62 && kind > 69) kind = 69;
                            break;
                        case 352:
                            if((4294977024 & l) !== 0 && kind > 70) kind = 70;
                            break;
                        case 361:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(207, 208);
                            }
                            break;
                        case 362:
                            if(this.curChar === 62 && kind > 72) kind = 72;
                            break;
                        case 368:
                            if(this.curChar === 60) {
                                this.jjCheckNAddStates(9, 100);
                            }
                            break;
                        case 369:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(12);
                            }
                            break;
                        case 370:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(21);
                            }
                            break;
                        case 371:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(24);
                            }
                            break;
                        case 372:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(31);
                            }
                            break;
                        case 373:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 374:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(45);
                            }
                            break;
                        case 375:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(50);
                            }
                            break;
                        case 376:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(58);
                            }
                            break;
                        case 377:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(65);
                            }
                            break;
                        case 378:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(70);
                            }
                            break;
                        case 379:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(77);
                            }
                            break;
                        case 380:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(84);
                            }
                            break;
                        case 381:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(90);
                            }
                            break;
                        case 382:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(98);
                            }
                            break;
                        case 383:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(105);
                            }
                            break;
                        case 384:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(114);
                            }
                            break;
                        case 385:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(120);
                            }
                            break;
                        case 386:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(130);
                            }
                            break;
                        case 387:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(136);
                            }
                            break;
                        case 388:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(141);
                            }
                            break;
                        case 389:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(148);
                            }
                            break;
                        case 390:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(153);
                            }
                            break;
                        case 391:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(161);
                            }
                            break;
                        case 392:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(174);
                            }
                            break;
                        case 393:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(183);
                            }
                            break;
                        case 394:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(199);
                            }
                            break;
                        case 395:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(209);
                            }
                            break;
                        case 396:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(218);
                            }
                            break;
                        case 397:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(227);
                            }
                            break;
                        case 398:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(402);
                            }
                            break;
                        case 400:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(209, 210);
                            }
                            break;
                        case 401:
                            if(this.curChar === 62 && kind > 36) kind = 36;
                            break;
                        case 403:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(402);
                            }
                            break;
                        case 404:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(403);
                            }
                            break;
                        case 405:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(411);
                            }
                            break;
                        case 407:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(211, 212);
                            }
                            break;
                        case 408:
                            if(this.curChar === 62 && kind > 37) kind = 37;
                            break;
                        case 412:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(411);
                            }
                            break;
                        case 413:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(412);
                            }
                            break;
                        case 414:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(421);
                            }
                            break;
                        case 416:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(213, 214);
                            }
                            break;
                        case 417:
                            if(this.curChar === 62 && kind > 38) kind = 38;
                            break;
                        case 422:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(421);
                            }
                            break;
                        case 423:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(422);
                            }
                            break;
                        case 424:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(429);
                            }
                            break;
                        case 426:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(215, 216);
                            }
                            break;
                        case 427:
                            if(this.curChar === 62 && kind > 39) kind = 39;
                            break;
                        case 430:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(429);
                            }
                            break;
                        case 431:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(430);
                            }
                            break;
                        case 432:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(441);
                            }
                            break;
                        case 434:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(217, 218);
                            }
                            break;
                        case 435:
                            if(this.curChar === 62 && kind > 40) kind = 40;
                            break;
                        case 442:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(441);
                            }
                            break;
                        case 443:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(442);
                            }
                            break;
                        case 444:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(453);
                            }
                            break;
                        case 446:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(219, 220);
                            }
                            break;
                        case 447:
                            if(this.curChar === 62 && kind > 41) kind = 41;
                            break;
                        case 454:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(453);
                            }
                            break;
                        case 455:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(454);
                            }
                            break;
                        case 456:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(465);
                            }
                            break;
                        case 460:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(221, 222);
                            }
                            break;
                        case 461:
                            if(this.curChar === 62 && kind > 42) kind = 42;
                            break;
                        case 466:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(465);
                            }
                            break;
                        case 467:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(466);
                            }
                            break;
                        case 468:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(475);
                            }
                            break;
                        case 470:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(223, 224);
                            }
                            break;
                        case 471:
                            if(this.curChar === 62 && kind > 43) kind = 43;
                            break;
                        case 476:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(475);
                            }
                            break;
                        case 477:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(476);
                            }
                            break;
                        case 478:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(486);
                            }
                            break;
                        case 480:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(225, 226);
                            }
                            break;
                        case 481:
                            if(this.curChar === 62 && kind > 44) kind = 44;
                            break;
                        case 487:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(486);
                            }
                            break;
                        case 488:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(487);
                            }
                            break;
                        case 489:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(497);
                            }
                            break;
                        case 491:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(227, 228);
                            }
                            break;
                        case 492:
                            if(this.curChar === 62 && kind > 45) kind = 45;
                            break;
                        case 498:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(497);
                            }
                            break;
                        case 499:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(498);
                            }
                            break;
                        case 500:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(510);
                            }
                            break;
                        case 502:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(229, 230);
                            }
                            break;
                        case 503:
                            if(this.curChar === 62 && kind > 46) kind = 46;
                            break;
                        case 511:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(510);
                            }
                            break;
                        case 512:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(511);
                            }
                            break;
                        case 513:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(520);
                            }
                            break;
                        case 515:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(231, 232);
                            }
                            break;
                        case 516:
                            if(this.curChar === 62 && kind > 47) kind = 47;
                            break;
                        case 521:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(520);
                            }
                            break;
                        case 522:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(521);
                            }
                            break;
                        case 523:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(537);
                            }
                            break;
                        case 527:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(233, 234);
                            }
                            break;
                        case 528:
                            if(this.curChar === 62 && kind > 48) kind = 48;
                            break;
                        case 538:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(537);
                            }
                            break;
                        case 539:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(538);
                            }
                            break;
                        case 540:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(549);
                            }
                            break;
                        case 544:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(235, 236);
                            }
                            break;
                        case 545:
                            if(this.curChar === 62 && kind > 49) kind = 49;
                            break;
                        case 550:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(549);
                            }
                            break;
                        case 551:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(550);
                            }
                            break;
                        case 552:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(568);
                            }
                            break;
                        case 556:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(237, 238);
                            }
                            break;
                        case 557:
                            if(this.curChar === 62 && kind > 50) kind = 50;
                            break;
                        case 569:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(568);
                            }
                            break;
                        case 570:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(569);
                            }
                            break;
                        case 571:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(581);
                            }
                            break;
                        case 573:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(239, 240);
                            }
                            break;
                        case 574:
                            if(this.curChar === 62 && kind > 51) kind = 51;
                            break;
                        case 582:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(581);
                            }
                            break;
                        case 583:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(582);
                            }
                            break;
                        case 584:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(595);
                            }
                            break;
                        case 586:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(241, 242);
                            }
                            break;
                        case 587:
                            if(this.curChar === 62 && kind > 52) kind = 52;
                            break;
                        case 596:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(595);
                            }
                            break;
                        case 597:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(596);
                            }
                            break;
                        case 598:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(606);
                            }
                            break;
                        case 600:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(243, 244);
                            }
                            break;
                        case 601:
                            if(this.curChar === 62 && kind > 53) kind = 53;
                            break;
                        case 607:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(606);
                            }
                            break;
                        case 608:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(607);
                            }
                            break;
                        case 609:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(234);
                            }
                            break;
                        case 610:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(242);
                            }
                            break;
                        case 611:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(253);
                            }
                            break;
                        case 612:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(262);
                            }
                            break;
                        case 613:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(269);
                            }
                            break;
                        case 614:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(277);
                            }
                            break;
                        case 615:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(278);
                            }
                            break;
                        case 616:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(286);
                            }
                            break;
                        case 617:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(291);
                            }
                            break;
                        case 618:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(296);
                            }
                            break;
                        case 619:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(305);
                            }
                            break;
                        case 620:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(314);
                            }
                            break;
                        case 621:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(321);
                            }
                            break;
                        case 622:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(331);
                            }
                            break;
                        case 623:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(339);
                            }
                            break;
                        case 624:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(350);
                            }
                            break;
                        case 625:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(357);
                            }
                            break;
                        case 626:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(634);
                            }
                            break;
                        case 628:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(245, 246);
                            }
                            break;
                        case 629:
                            if(this.curChar === 62 && kind > 71) kind = 71;
                            break;
                        case 635:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(634);
                            }
                            break;
                        case 636:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(635);
                            }
                            break;
                        case 637:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(367);
                            }
                            break;
                        case 638:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(648);
                            }
                            break;
                        case 642:
                            if((4294977024 & l) !== 0) {
                                this.jjAddStates(247, 248);
                            }
                            break;
                        case 643:
                            if(this.curChar === 62 && kind > 73) kind = 73;
                            break;
                        case 649:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(648);
                            }
                            break;
                        case 650:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(649);
                            }
                            break;
                        case 653:
                            if((4294977024 & l) !== 0 && kind > 76) kind = 76;
                            break;
                        case 656:
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 655;
                            break;
                        case 658:
                            if(this.curChar === 47) this.jjstateSet[this.jjnewStateCnt++] = 659;
                            break;
                        case 659:
                            if(this.curChar === 62 && kind > 77) kind = 77;
                            break;
                        case 662:
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 661;
                            break;
                        case 663:
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 664;
                            break;
                        case 665:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(663);
                            }
                            break;
                        case 667:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(403);
                            }
                            break;
                        case 668:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(412);
                            }
                            break;
                        case 669:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(422);
                            }
                            break;
                        case 670:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(430);
                            }
                            break;
                        case 671:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(442);
                            }
                            break;
                        case 672:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(454);
                            }
                            break;
                        case 673:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(466);
                            }
                            break;
                        case 674:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(476);
                            }
                            break;
                        case 675:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(487);
                            }
                            break;
                        case 676:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(498);
                            }
                            break;
                        case 677:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(511);
                            }
                            break;
                        case 678:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(521);
                            }
                            break;
                        case 679:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(538);
                            }
                            break;
                        case 680:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(550);
                            }
                            break;
                        case 681:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(569);
                            }
                            break;
                        case 682:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(582);
                            }
                            break;
                        case 683:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(596);
                            }
                            break;
                        case 684:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(607);
                            }
                            break;
                        case 685:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(635);
                            }
                            break;
                        case 686:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(649);
                            }
                            break;
                        case 689:
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 688;
                            break;
                        case 692:
                            if(this.curChar === 35) this.jjstateSet[this.jjnewStateCnt++] = 691;
                            break;
                        case 693:
                            if(this.curChar === 47) {
                                this.jjCheckNAdd(663);
                            }
                            break;
                        case 694:
                            if(this.curChar === 60) {
                                this.jjAddStates(7, 8);
                            }
                            break;
                        case 695:
                            if(this.curChar === 45 && kind > 34) kind = 34;
                            break;
                        case 696:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 695;
                            break;
                        case 699:
                            if(this.curChar === 36) {
                                this.jjCheckNAddStates(249, 253);
                            }
                            break;
                        case 700:
                            if((!bigInt("287948969894477824").and(l).eq(0))) {
                                this.jjCheckNAddStates(249, 253);
                            }
                            break;
                        case 702:
                            if((!bigInt("288335929267978240").and(l).eq(0))) {
                                this.jjCheckNAddStates(249, 253);
                            }
                            break;
                        case 703:
                            if(this.curChar === 46) {
                                this.jjAddStates(254, 255);
                            }
                            break;
                        case 704:
                            if(this.curChar === 36) {
                                this.jjCheckNAddStates(256, 260);
                            }
                            break;
                        case 705:
                            if((!bigInt("287948969894477824").and(l).eq(0))) {
                                this.jjCheckNAddStates(256, 260);
                            }
                            break;
                        case 707:
                            if((!bigInt("288335929267978240").and(l).eq(0))) {
                                this.jjCheckNAddStates(256, 260);
                            }
                            break;
                        case 708:
                            if((4294977024 & l) !== 0) {
                                this.jjCheckNAddTwoStates(708, 709);
                            }
                            break;
                        case 709:
                            if(this.curChar === 62 && kind > 75) kind = 75;
                            break;
                        case 712:
                            if(this.curChar === 47) this.jjstateSet[this.jjnewStateCnt++] = 698;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 697:
                        case 651:
                            if(this.curChar === 64 && kind > 74) kind = 74;
                            break;
                        case 2:
                            if((!bigInt("-576460752437641217").and(l).eq(0))) {
                                if(kind > 80) kind = 80;
                                {
                                    this.jjCheckNAdd(1);
                                }
                            } else if((!bigInt("576460752437641216").and(l).eq(0))) {
                                if(kind > 81) kind = 81;
                            }
                            if(this.curChar === 91) {
                                this.jjAddStates(7, 8);
                            }
                            if(this.curChar === 91) {
                                this.jjAddStates(261, 332);
                            }
                            break;
                        case 1:
                            if((bigInt("-576460752437641217").and(l).eq(0))) break;
                            if(kind > 80) kind = 80;
                        {
                            this.jjCheckNAdd(1);
                        }
                            break;
                        case 4:
                            if(this.curChar === 116) {
                                this.jjAddStates(148, 149);
                            }
                            break;
                        case 6:
                            if(this.curChar === 93 && kind > 6) kind = 6;
                            break;
                        case 7:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 4;
                            break;
                        case 8:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 7;
                            break;
                        case 9:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 8;
                            break;
                        case 10:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 9;
                            break;
                        case 11:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 10;
                            break;
                        case 12:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 11;
                            break;
                        case 13:
                            if(this.curChar === 114) {
                                this.jjAddStates(150, 151);
                            }
                            break;
                        case 15:
                            if(this.curChar === 93 && kind > 7) kind = 7;
                            break;
                        case 16:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 13;
                            break;
                        case 17:
                            if(this.curChar === 118) this.jjstateSet[this.jjnewStateCnt++] = 16;
                            break;
                        case 18:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 17;
                            break;
                        case 19:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 18;
                            break;
                        case 20:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 19;
                            break;
                        case 21:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 20;
                            break;
                        case 22:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 23;
                            break;
                        case 24:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 22;
                            break;
                        case 25:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 26;
                            break;
                        case 26:
                            if((2199023256064 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 27;
                            break;
                        case 27:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 28;
                            break;
                        case 29:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 25;
                            break;
                        case 30:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 29;
                            break;
                        case 31:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 30;
                            break;
                        case 32:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 33;
                            break;
                        case 34:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 32;
                            break;
                        case 35:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 34;
                            break;
                        case 36:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 35;
                            break;
                        case 37:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 38;
                            break;
                        case 39:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 40;
                            break;
                        case 41:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 39;
                            break;
                        case 42:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 37;
                            break;
                        case 43:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 42;
                            break;
                        case 44:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 43;
                            break;
                        case 45:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 44;
                            break;
                        case 46:
                            if(this.curChar === 112) {
                                this.jjAddStates(154, 155);
                            }
                            break;
                        case 48:
                            if(this.curChar === 93 && kind > 12) kind = 12;
                            break;
                        case 49:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 46;
                            break;
                        case 50:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 49;
                            break;
                        case 51:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 52;
                            break;
                        case 52:
                            if((137438953504 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 56;
                            break;
                        case 53:
                            if(this.curChar === 104) this.jjstateSet[this.jjnewStateCnt++] = 54;
                            break;
                        case 55:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 53;
                            break;
                        case 56:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 55;
                            break;
                        case 57:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 51;
                            break;
                        case 58:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 57;
                            break;
                        case 59:
                            if(this.curChar === 104) this.jjstateSet[this.jjnewStateCnt++] = 60;
                            break;
                        case 61:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 59;
                            break;
                        case 62:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 61;
                            break;
                        case 63:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 62;
                            break;
                        case 64:
                            if(this.curChar === 119) this.jjstateSet[this.jjnewStateCnt++] = 63;
                            break;
                        case 65:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 64;
                            break;
                        case 66:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 67;
                            break;
                        case 68:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 66;
                            break;
                        case 69:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 68;
                            break;
                        case 70:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 69;
                            break;
                        case 71:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 72;
                            break;
                        case 73:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 71;
                            break;
                        case 74:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 73;
                            break;
                        case 75:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 74;
                            break;
                        case 76:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 75;
                            break;
                        case 77:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 76;
                            break;
                        case 78:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 79;
                            break;
                        case 80:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 78;
                            break;
                        case 81:
                            if(this.curChar === 98) this.jjstateSet[this.jjnewStateCnt++] = 80;
                            break;
                        case 82:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 81;
                            break;
                        case 83:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 82;
                            break;
                        case 84:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 83;
                            break;
                        case 85:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 86;
                            break;
                        case 87:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 85;
                            break;
                        case 88:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 87;
                            break;
                        case 89:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 88;
                            break;
                        case 90:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 89;
                            break;
                        case 91:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 92;
                            break;
                        case 93:
                            if(this.curChar === 100) this.jjstateSet[this.jjnewStateCnt++] = 91;
                            break;
                        case 94:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 93;
                            break;
                        case 95:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 94;
                            break;
                        case 96:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 95;
                            break;
                        case 97:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 96;
                            break;
                        case 98:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 97;
                            break;
                        case 99:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 100;
                            break;
                        case 101:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 99;
                            break;
                        case 102:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 101;
                            break;
                        case 103:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 102;
                            break;
                        case 104:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 103;
                            break;
                        case 105:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 104;
                            break;
                        case 106:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 107;
                            break;
                        case 108:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 106;
                            break;
                        case 109:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 108;
                            break;
                        case 110:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 109;
                            break;
                        case 111:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 110;
                            break;
                        case 112:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 111;
                            break;
                        case 113:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 112;
                            break;
                        case 114:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 113;
                            break;
                        case 115:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 116;
                            break;
                        case 117:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 115;
                            break;
                        case 118:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 117;
                            break;
                        case 119:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 118;
                            break;
                        case 120:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 119;
                            break;
                        case 121:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 122;
                            break;
                        case 123:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 121;
                            break;
                        case 124:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 123;
                            break;
                        case 125:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 124;
                            break;
                        case 126:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 125;
                            break;
                        case 127:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 126;
                            break;
                        case 128:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 127;
                            break;
                        case 129:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 128;
                            break;
                        case 130:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 129;
                            break;
                        case 131:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 132;
                            break;
                        case 133:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 131;
                            break;
                        case 134:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 133;
                            break;
                        case 135:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 134;
                            break;
                        case 136:
                            if(this.curChar === 118) this.jjstateSet[this.jjnewStateCnt++] = 135;
                            break;
                        case 137:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 138;
                            break;
                        case 139:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 137;
                            break;
                        case 140:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 139;
                            break;
                        case 141:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 140;
                            break;
                        case 142:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 143;
                            break;
                        case 144:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 142;
                            break;
                        case 145:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 144;
                            break;
                        case 146:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 145;
                            break;
                        case 147:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 146;
                            break;
                        case 148:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 147;
                            break;
                        case 149:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 150;
                            break;
                        case 151:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 149;
                            break;
                        case 152:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 151;
                            break;
                        case 153:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 152;
                            break;
                        case 154:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 155;
                            break;
                        case 156:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 154;
                            break;
                        case 157:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 156;
                            break;
                        case 158:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 157;
                            break;
                        case 159:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 158;
                            break;
                        case 160:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 159;
                            break;
                        case 161:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 160;
                            break;
                        case 162:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 163;
                            break;
                        case 163:
                            if((274877907008 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 169;
                            break;
                        case 164:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 165;
                            break;
                        case 166:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 164;
                            break;
                        case 167:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 166;
                            break;
                        case 168:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 167;
                            break;
                        case 169:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 168;
                            break;
                        case 170:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 162;
                            break;
                        case 171:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 170;
                            break;
                        case 172:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 171;
                            break;
                        case 173:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 172;
                            break;
                        case 174:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 173;
                            break;
                        case 175:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 176;
                            break;
                        case 176:
                            if((137438953504 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 180;
                            break;
                        case 177:
                            if(this.curChar === 99) {
                                this.jjAddStates(156, 157);
                            }
                            break;
                        case 179:
                            if(this.curChar === 93 && kind > 30) kind = 30;
                            break;
                        case 180:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 177;
                            break;
                        case 181:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 175;
                            break;
                        case 182:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 181;
                            break;
                        case 183:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 182;
                            break;
                        case 184:
                            if(this.curChar === 111) {
                                this.jjAddStates(333, 334);
                            }
                            break;
                        case 185:
                            if(this.curChar === 101) {
                                this.jjCheckNAdd(189);
                            }
                            break;
                        case 186:
                            if(this.curChar === 99) {
                                this.jjAddStates(158, 159);
                            }
                            break;
                        case 188:
                            if(this.curChar === 93 && kind > 31) kind = 31;
                            break;
                        case 189:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 186;
                            break;
                        case 190:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 185;
                            break;
                        case 191:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 190;
                            break;
                        case 192:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 191;
                            break;
                        case 193:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 192;
                            break;
                        case 194:
                            if(this.curChar === 69) {
                                this.jjCheckNAdd(189);
                            }
                            break;
                        case 195:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 194;
                            break;
                        case 196:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 195;
                            break;
                        case 197:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 196;
                            break;
                        case 198:
                            if(this.curChar === 65) this.jjstateSet[this.jjnewStateCnt++] = 197;
                            break;
                        case 199:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 184;
                            break;
                        case 200:
                            if(this.curChar === 115) {
                                this.jjAddStates(160, 161);
                            }
                            break;
                        case 202:
                            if(this.curChar === 93 && kind > 32) kind = 32;
                            break;
                        case 203:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 200;
                            break;
                        case 204:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 203;
                            break;
                        case 205:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 204;
                            break;
                        case 206:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 205;
                            break;
                        case 207:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 206;
                            break;
                        case 208:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 207;
                            break;
                        case 209:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 208;
                            break;
                        case 210:
                            if(this.curChar === 116) {
                                this.jjAddStates(162, 163);
                            }
                            break;
                        case 212:
                            if(this.curChar === 93 && kind > 33) kind = 33;
                            break;
                        case 213:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 210;
                            break;
                        case 214:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 213;
                            break;
                        case 215:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 214;
                            break;
                        case 216:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 215;
                            break;
                        case 217:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 216;
                            break;
                        case 218:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 217;
                            break;
                        case 219:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 220;
                            break;
                        case 220:
                            if((!bigInt("281474976776192").and(l).eq(0))) this.jjstateSet[this.jjnewStateCnt++] = 226;
                            break;
                        case 221:
                            if(this.curChar === 101) {
                                this.jjAddStates(164, 165);
                            }
                            break;
                        case 223:
                            if(this.curChar === 93 && kind > 35) kind = 35;
                            break;
                        case 224:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 221;
                            break;
                        case 225:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 224;
                            break;
                        case 226:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 225;
                            break;
                        case 227:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 219;
                            break;
                        case 228:
                            if(this.curChar === 101) {
                                this.jjAddStates(166, 168);
                            }
                            break;
                        case 231:
                            if(this.curChar === 93 && kind > 54) kind = 54;
                            break;
                        case 232:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 228;
                            break;
                        case 233:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 232;
                            break;
                        case 234:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 233;
                            break;
                        case 235:
                            if(this.curChar === 107) {
                                this.jjAddStates(169, 171);
                            }
                            break;
                        case 238:
                            if(this.curChar === 93 && kind > 55) kind = 55;
                            break;
                        case 239:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 235;
                            break;
                        case 240:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 239;
                            break;
                        case 241:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 240;
                            break;
                        case 242:
                            if(this.curChar === 98) this.jjstateSet[this.jjnewStateCnt++] = 241;
                            break;
                        case 243:
                            if(this.curChar === 101) {
                                this.jjAddStates(172, 174);
                            }
                            break;
                        case 246:
                            if(this.curChar === 93 && kind > 56) kind = 56;
                            break;
                        case 247:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 243;
                            break;
                        case 248:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 247;
                            break;
                        case 249:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 248;
                            break;
                        case 250:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 249;
                            break;
                        case 251:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 250;
                            break;
                        case 252:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 251;
                            break;
                        case 253:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 252;
                            break;
                        case 254:
                            if(this.curChar === 110) {
                                this.jjAddStates(175, 177);
                            }
                            break;
                        case 257:
                            if(this.curChar === 93 && kind > 57) kind = 57;
                            break;
                        case 258:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 254;
                            break;
                        case 259:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 258;
                            break;
                        case 260:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 259;
                            break;
                        case 261:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 260;
                            break;
                        case 262:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 261;
                            break;
                        case 263:
                            if(this.curChar === 112) {
                                this.jjAddStates(178, 180);
                            }
                            break;
                        case 266:
                            if(this.curChar === 93 && kind > 58) kind = 58;
                            break;
                        case 267:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 263;
                            break;
                        case 268:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 267;
                            break;
                        case 269:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 268;
                            break;
                        case 270:
                            if(this.curChar === 104) {
                                this.jjAddStates(181, 183);
                            }
                            break;
                        case 273:
                            if(this.curChar === 93 && kind > 59) kind = 59;
                            break;
                        case 274:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 270;
                            break;
                        case 275:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 274;
                            break;
                        case 276:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 275;
                            break;
                        case 277:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 276;
                            break;
                        case 278:
                            if(this.curChar === 116) {
                                this.jjAddStates(184, 186);
                            }
                            break;
                        case 281:
                            if(this.curChar === 93 && kind > 60) kind = 60;
                            break;
                        case 282:
                            if(this.curChar === 116) {
                                this.jjAddStates(187, 189);
                            }
                            break;
                        case 285:
                            if(this.curChar === 93 && kind > 61) kind = 61;
                            break;
                        case 286:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 282;
                            break;
                        case 287:
                            if(this.curChar === 116) {
                                this.jjAddStates(190, 192);
                            }
                            break;
                        case 290:
                            if(this.curChar === 93 && kind > 62) kind = 62;
                            break;
                        case 291:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 287;
                            break;
                        case 292:
                            if(this.curChar === 116) {
                                this.jjAddStates(193, 195);
                            }
                            break;
                        case 295:
                            if(this.curChar === 93 && kind > 63) kind = 63;
                            break;
                        case 296:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 292;
                            break;
                        case 297:
                            if(this.curChar === 116) {
                                this.jjAddStates(196, 197);
                            }
                            break;
                        case 299:
                            if(this.curChar === 93 && kind > 64) kind = 64;
                            break;
                        case 300:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 297;
                            break;
                        case 301:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 300;
                            break;
                        case 302:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 301;
                            break;
                        case 303:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 302;
                            break;
                        case 304:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 303;
                            break;
                        case 305:
                            if(this.curChar === 100) this.jjstateSet[this.jjnewStateCnt++] = 304;
                            break;
                        case 306:
                            if(this.curChar === 100) {
                                this.jjAddStates(198, 200);
                            }
                            break;
                        case 309:
                            if(this.curChar === 93 && kind > 65) kind = 65;
                            break;
                        case 310:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 306;
                            break;
                        case 311:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 310;
                            break;
                        case 312:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 311;
                            break;
                        case 313:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 312;
                            break;
                        case 314:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 313;
                            break;
                        case 315:
                            if(this.curChar === 100) this.jjstateSet[this.jjnewStateCnt++] = 316;
                            break;
                        case 317:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 315;
                            break;
                        case 318:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 317;
                            break;
                        case 319:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 318;
                            break;
                        case 320:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 319;
                            break;
                        case 321:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 320;
                            break;
                        case 322:
                            if(this.curChar === 101) {
                                this.jjAddStates(201, 203);
                            }
                            break;
                        case 325:
                            if(this.curChar === 93 && kind > 67) kind = 67;
                            break;
                        case 326:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 322;
                            break;
                        case 327:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 326;
                            break;
                        case 328:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 327;
                            break;
                        case 329:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 328;
                            break;
                        case 330:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 329;
                            break;
                        case 331:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 330;
                            break;
                        case 332:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 333;
                            break;
                        case 334:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 332;
                            break;
                        case 335:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 334;
                            break;
                        case 336:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 335;
                            break;
                        case 337:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 336;
                            break;
                        case 338:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 337;
                            break;
                        case 339:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 338;
                            break;
                        case 340:
                            if(this.curChar === 107) {
                                this.jjAddStates(204, 206);
                            }
                            break;
                        case 343:
                            if(this.curChar === 93 && kind > 69) kind = 69;
                            break;
                        case 344:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 340;
                            break;
                        case 345:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 344;
                            break;
                        case 346:
                            if(this.curChar === 98) this.jjstateSet[this.jjnewStateCnt++] = 345;
                            break;
                        case 347:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 346;
                            break;
                        case 348:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 347;
                            break;
                        case 349:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 348;
                            break;
                        case 350:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 349;
                            break;
                        case 351:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 352;
                            break;
                        case 353:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 351;
                            break;
                        case 354:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 353;
                            break;
                        case 355:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 354;
                            break;
                        case 356:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 355;
                            break;
                        case 357:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 356;
                            break;
                        case 358:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 359;
                            break;
                        case 359:
                            if((137438953504 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 366;
                            break;
                        case 360:
                            if(this.curChar === 101) {
                                this.jjAddStates(207, 208);
                            }
                            break;
                        case 362:
                            if(this.curChar === 93 && kind > 72) kind = 72;
                            break;
                        case 363:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 360;
                            break;
                        case 364:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 363;
                            break;
                        case 365:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 364;
                            break;
                        case 366:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 365;
                            break;
                        case 367:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 358;
                            break;
                        case 399:
                            if(this.curChar === 102) {
                                this.jjAddStates(209, 210);
                            }
                            break;
                        case 401:
                            if(this.curChar === 93 && kind > 36) kind = 36;
                            break;
                        case 402:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 399;
                            break;
                        case 406:
                            if(this.curChar === 116) {
                                this.jjAddStates(211, 212);
                            }
                            break;
                        case 408:
                            if(this.curChar === 93 && kind > 37) kind = 37;
                            break;
                        case 409:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 406;
                            break;
                        case 410:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 409;
                            break;
                        case 411:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 410;
                            break;
                        case 415:
                            if(this.curChar === 115) {
                                this.jjAddStates(213, 214);
                            }
                            break;
                        case 417:
                            if(this.curChar === 93 && kind > 38) kind = 38;
                            break;
                        case 418:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 415;
                            break;
                        case 419:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 418;
                            break;
                        case 420:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 419;
                            break;
                        case 421:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 420;
                            break;
                        case 425:
                            if(this.curChar === 112) {
                                this.jjAddStates(215, 216);
                            }
                            break;
                        case 427:
                            if(this.curChar === 93 && kind > 39) kind = 39;
                            break;
                        case 428:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 425;
                            break;
                        case 429:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 428;
                            break;
                        case 433:
                            if(this.curChar === 114) {
                                this.jjAddStates(217, 218);
                            }
                            break;
                        case 435:
                            if(this.curChar === 93 && kind > 40) kind = 40;
                            break;
                        case 436:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 433;
                            break;
                        case 437:
                            if(this.curChar === 118) this.jjstateSet[this.jjnewStateCnt++] = 436;
                            break;
                        case 438:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 437;
                            break;
                        case 439:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 438;
                            break;
                        case 440:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 439;
                            break;
                        case 441:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 440;
                            break;
                        case 445:
                            if(this.curChar === 116) {
                                this.jjAddStates(219, 220);
                            }
                            break;
                        case 447:
                            if(this.curChar === 93 && kind > 41) kind = 41;
                            break;
                        case 448:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 445;
                            break;
                        case 449:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 448;
                            break;
                        case 450:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 449;
                            break;
                        case 451:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 450;
                            break;
                        case 452:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 451;
                            break;
                        case 453:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 452;
                            break;
                        case 457:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 458;
                            break;
                        case 458:
                            if((137438953504 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 463;
                            break;
                        case 459:
                            if(this.curChar === 104) {
                                this.jjAddStates(221, 222);
                            }
                            break;
                        case 461:
                            if(this.curChar === 93 && kind > 42) kind = 42;
                            break;
                        case 462:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 459;
                            break;
                        case 463:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 462;
                            break;
                        case 464:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 457;
                            break;
                        case 465:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 464;
                            break;
                        case 469:
                            if(this.curChar === 108) {
                                this.jjAddStates(223, 224);
                            }
                            break;
                        case 471:
                            if(this.curChar === 93 && kind > 43) kind = 43;
                            break;
                        case 472:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 469;
                            break;
                        case 473:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 472;
                            break;
                        case 474:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 473;
                            break;
                        case 475:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 474;
                            break;
                        case 479:
                            if(this.curChar === 108) {
                                this.jjAddStates(225, 226);
                            }
                            break;
                        case 481:
                            if(this.curChar === 93 && kind > 44) kind = 44;
                            break;
                        case 482:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 479;
                            break;
                        case 483:
                            if(this.curChar === 98) this.jjstateSet[this.jjnewStateCnt++] = 482;
                            break;
                        case 484:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 483;
                            break;
                        case 485:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 484;
                            break;
                        case 486:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 485;
                            break;
                        case 490:
                            if(this.curChar === 110) {
                                this.jjAddStates(227, 228);
                            }
                            break;
                        case 492:
                            if(this.curChar === 93 && kind > 45) kind = 45;
                            break;
                        case 493:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 490;
                            break;
                        case 494:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 493;
                            break;
                        case 495:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 494;
                            break;
                        case 496:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 495;
                            break;
                        case 497:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 496;
                            break;
                        case 501:
                            if(this.curChar === 110) {
                                this.jjAddStates(229, 230);
                            }
                            break;
                        case 503:
                            if(this.curChar === 93 && kind > 46) kind = 46;
                            break;
                        case 504:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 501;
                            break;
                        case 505:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 504;
                            break;
                        case 506:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 505;
                            break;
                        case 507:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 506;
                            break;
                        case 508:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 507;
                            break;
                        case 509:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 508;
                            break;
                        case 510:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 509;
                            break;
                        case 514:
                            if(this.curChar === 111) {
                                this.jjAddStates(231, 232);
                            }
                            break;
                        case 516:
                            if(this.curChar === 93 && kind > 47) kind = 47;
                            break;
                        case 517:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 514;
                            break;
                        case 518:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 517;
                            break;
                        case 519:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 518;
                            break;
                        case 520:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 519;
                            break;
                        case 524:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 525;
                            break;
                        case 525:
                            if((274877907008 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 532;
                            break;
                        case 526:
                            if(this.curChar === 116) {
                                this.jjAddStates(233, 234);
                            }
                            break;
                        case 528:
                            if(this.curChar === 93 && kind > 48) kind = 48;
                            break;
                        case 529:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 526;
                            break;
                        case 530:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 529;
                            break;
                        case 531:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 530;
                            break;
                        case 532:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 531;
                            break;
                        case 533:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 524;
                            break;
                        case 534:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 533;
                            break;
                        case 535:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 534;
                            break;
                        case 536:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 535;
                            break;
                        case 537:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 536;
                            break;
                        case 541:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 542;
                            break;
                        case 542:
                            if((137438953504 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 546;
                            break;
                        case 543:
                            if(this.curChar === 99) {
                                this.jjAddStates(235, 236);
                            }
                            break;
                        case 545:
                            if(this.curChar === 93 && kind > 49) kind = 49;
                            break;
                        case 546:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 543;
                            break;
                        case 547:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 541;
                            break;
                        case 548:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 547;
                            break;
                        case 549:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 548;
                            break;
                        case 553:
                            if(this.curChar === 111) {
                                this.jjAddStates(335, 336);
                            }
                            break;
                        case 554:
                            if(this.curChar === 101) {
                                this.jjCheckNAdd(558);
                            }
                            break;
                        case 555:
                            if(this.curChar === 99) {
                                this.jjAddStates(237, 238);
                            }
                            break;
                        case 557:
                            if(this.curChar === 93 && kind > 50) kind = 50;
                            break;
                        case 558:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 555;
                            break;
                        case 559:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 554;
                            break;
                        case 560:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 559;
                            break;
                        case 561:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 560;
                            break;
                        case 562:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 561;
                            break;
                        case 563:
                            if(this.curChar === 69) {
                                this.jjCheckNAdd(558);
                            }
                            break;
                        case 564:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 563;
                            break;
                        case 565:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 564;
                            break;
                        case 566:
                            if(this.curChar === 117) this.jjstateSet[this.jjnewStateCnt++] = 565;
                            break;
                        case 567:
                            if(this.curChar === 65) this.jjstateSet[this.jjnewStateCnt++] = 566;
                            break;
                        case 568:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 553;
                            break;
                        case 572:
                            if(this.curChar === 115) {
                                this.jjAddStates(239, 240);
                            }
                            break;
                        case 574:
                            if(this.curChar === 93 && kind > 51) kind = 51;
                            break;
                        case 575:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 572;
                            break;
                        case 576:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 575;
                            break;
                        case 577:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 576;
                            break;
                        case 578:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 577;
                            break;
                        case 579:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 578;
                            break;
                        case 580:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 579;
                            break;
                        case 581:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 580;
                            break;
                        case 585:
                            if(this.curChar === 109) {
                                this.jjAddStates(241, 242);
                            }
                            break;
                        case 587:
                            if(this.curChar === 93 && kind > 52) kind = 52;
                            break;
                        case 588:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 585;
                            break;
                        case 589:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 588;
                            break;
                        case 590:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 589;
                            break;
                        case 591:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 590;
                            break;
                        case 592:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 591;
                            break;
                        case 593:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 592;
                            break;
                        case 594:
                            if(this.curChar === 114) this.jjstateSet[this.jjnewStateCnt++] = 593;
                            break;
                        case 595:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 594;
                            break;
                        case 599:
                            if(this.curChar === 104) {
                                this.jjAddStates(243, 244);
                            }
                            break;
                        case 601:
                            if(this.curChar === 93 && kind > 53) kind = 53;
                            break;
                        case 602:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 599;
                            break;
                        case 603:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 602;
                            break;
                        case 604:
                            if(this.curChar === 105) this.jjstateSet[this.jjnewStateCnt++] = 603;
                            break;
                        case 605:
                            if(this.curChar === 119) this.jjstateSet[this.jjnewStateCnt++] = 604;
                            break;
                        case 606:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 605;
                            break;
                        case 627:
                            if(this.curChar === 101) {
                                this.jjAddStates(245, 246);
                            }
                            break;
                        case 629:
                            if(this.curChar === 93 && kind > 71) kind = 71;
                            break;
                        case 630:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 627;
                            break;
                        case 631:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 630;
                            break;
                        case 632:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 631;
                            break;
                        case 633:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 632;
                            break;
                        case 634:
                            if(this.curChar === 101) this.jjstateSet[this.jjnewStateCnt++] = 633;
                            break;
                        case 639:
                            if(this.curChar === 111) this.jjstateSet[this.jjnewStateCnt++] = 640;
                            break;
                        case 640:
                            if((137438953504 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 647;
                            break;
                        case 641:
                            if(this.curChar === 101) {
                                this.jjAddStates(247, 248);
                            }
                            break;
                        case 643:
                            if(this.curChar === 93 && kind > 73) kind = 73;
                            break;
                        case 644:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 641;
                            break;
                        case 645:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 644;
                            break;
                        case 646:
                            if(this.curChar === 99) this.jjstateSet[this.jjnewStateCnt++] = 645;
                            break;
                        case 647:
                            if(this.curChar === 115) this.jjstateSet[this.jjnewStateCnt++] = 646;
                            break;
                        case 648:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 639;
                            break;
                        case 652:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 653;
                            break;
                        case 654:
                        case 687:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(652);
                            }
                            break;
                        case 655:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 654;
                            break;
                        case 657:
                            if(this.curChar === 108) {
                                this.jjAddStates(337, 338);
                            }
                            break;
                        case 659:
                            if(this.curChar === 93 && kind > 77) kind = 77;
                            break;
                        case 660:
                        case 690:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(657);
                            }
                            break;
                        case 661:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 660;
                            break;
                        case 664:
                            if((bigInt("576460745995190270").and(l).eq(0))) break;
                            if(kind > 78) kind = 78;
                            this.jjstateSet[this.jjnewStateCnt++] = 664;
                            break;
                        case 666:
                            if(this.curChar === 91) {
                                this.jjAddStates(261, 332);
                            }
                            break;
                        case 688:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 687;
                            break;
                        case 691:
                            if(this.curChar === 102) this.jjstateSet[this.jjnewStateCnt++] = 690;
                            break;
                        case 694:
                            if(this.curChar === 91) {
                                this.jjAddStates(7, 8);
                            }
                            break;
                        case 698:
                            if(this.curChar === 64) {
                                this.jjCheckNAddStates(339, 342);
                            }
                            break;
                        case 699:
                        case 700:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                this.jjCheckNAddStates(249, 253);
                            }
                            break;
                        case 701:
                        case 711:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(702);
                            }
                            break;
                        case 704:
                        case 705:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                this.jjCheckNAddStates(256, 260);
                            }
                            break;
                        case 706:
                        case 710:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(707);
                            }
                            break;
                        case 709:
                            if(this.curChar === 93 && kind > 75) kind = 75;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 2:
                        case 1:
                            if(!FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 80) kind = 80;
                        {
                            this.jjCheckNAdd(1);
                        }
                            break;
                        case 699:
                        case 700:
                            if(FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) {
                                this.jjCheckNAddStates(249, 253);
                            }
                            break;
                        case 704:
                        case 705:
                            if(FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) {
                                this.jjCheckNAddStates(256, 260);
                            }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 713 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    /*private*/ jjStopStringLiteralDfa_2(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        // active0 = FMParserTokenManager.toBigInt(active0);
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        switch((pos)) {
            case 0:
                if((!active2.and(16).eq(0))) return 2;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(7168).eq(0))) {
                    this.jjmatchedKind = 141;
                    return 98;
                }
                if((!active1.and(bigInt("1153062242095202304")).eq(0))) return 44;
                if((!active1.and(bigInt("576461130260545536")).eq(0))) return 48;
                return -1;
            case 1:
                if((!active2.and(3072).eq(0))) return 98;
                if((!active1.and(bigInt("576461095900807168")).eq(0))) return 47;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    if(this.jjmatchedPos !== 1) {
                        this.jjmatchedKind = 141;
                        this.jjmatchedPos = 1;
                    }
                    return 98;
                }
                return -1;
            case 2:
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 2;
                    return 98;
                }
                return -1;
            case 3:
                if((!active1.and(2147483648).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 3;
                    return 98;
                }
                if((!active1.and(4294967296).eq(0))) return 98;
                return -1;
            default:
                return -1;
        }
    }

    /*private*/ jjStartNfa_2(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        return this.jjMoveNfa_2(this.jjStopStringLiteralDfa_2(pos, active0, active1, active2), pos + 1);
    }

    /*private*/ jjMoveStringLiteralDfa0_2() : number {
        switch((this.curChar)) {
            case 33:
                this.jjmatchedKind = 128;
                return this.jjMoveStringLiteralDfa1_2(8796093022208, 0);
            case 37:
                this.jjmatchedKind = 125;
                return this.jjMoveStringLiteralDfa1_2(bigInt("281474976710656"), 0);
            case 40:
                return this.jjStopAtPos(0, 134);
            case 41:
                return this.jjStopAtPos(0, 135);
            case 42:
                this.jjmatchedKind = 121;
                return this.jjMoveStringLiteralDfa1_2(bigInt("288300744895889408"), 0);
            case 43:
                this.jjmatchedKind = 119;
                return this.jjMoveStringLiteralDfa1_2(bigInt("580542139465728"), 0);
            case 44:
                return this.jjStopAtPos(0, 129);
            case 45:
                this.jjmatchedKind = 120;
                return this.jjMoveStringLiteralDfa1_2(bigInt("1161084278931456"), 0);
            case 46:
                this.jjmatchedKind = 99;
                return this.jjMoveStringLiteralDfa1_2(bigInt("576461095900807168"), 0);
            case 47:
                this.jjmatchedKind = 124;
                return this.jjMoveStringLiteralDfa1_2(bigInt("140737488355328"), 0);
            case 58:
                return this.jjStopAtPos(0, 131);
            case 59:
                return this.jjStopAtPos(0, 130);
            case 61:
                this.jjmatchedKind = 105;
                return this.jjMoveStringLiteralDfa1_2(4398046511104, 0);
            case 62:
                return this.jjStopAtPos(0, 147);
            case 63:
                this.jjmatchedKind = 103;
                return this.jjMoveStringLiteralDfa1_2(1099511627776, 0);
            case 91:
                return this.jjStartNfaWithStates_2(0, 132, 2);
            case 93:
                return this.jjStopAtPos(0, 133);
            case 97:
                return this.jjMoveStringLiteralDfa1_2(0, 2048);
            case 102:
                return this.jjMoveStringLiteralDfa1_2(2147483648, 0);
            case 105:
                return this.jjMoveStringLiteralDfa1_2(0, 1024);
            case 116:
                return this.jjMoveStringLiteralDfa1_2(4294967296, 0);
            case 117:
                return this.jjMoveStringLiteralDfa1_2(0, 4096);
            case 123:
                return this.jjStopAtPos(0, 136);
            case 125:
                return this.jjStopAtPos(0, 137);
            default:
                return this.jjMoveNfa_2(1, 0);
        }
    }

    /*private*/ jjMoveStringLiteralDfa1_2(active1 : number|BigInteger, active2 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_2(0, 0, active1, active2);
            return 1;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(bigInt("288230376151711744")).eq(0))) return this.jjStopAtPos(1, 122);
                break;
            case 43:
                if((!active1.and(bigInt("562949953421312")).eq(0))) return this.jjStopAtPos(1, 113);
                break;
            case 45:
                if((!active1.and(bigInt("1125899906842624")).eq(0))) return this.jjStopAtPos(1, 114);
                break;
            case 46:
                if((!active1.and(68719476736).eq(0))) {
                    this.jjmatchedKind = 100;
                    this.jjmatchedPos = 1;
                }
                return this.jjMoveStringLiteralDfa2_2(active1, bigInt("576461027181330432"), active2, 0);
            case 61:
                if((!active1.and(4398046511104).eq(0))) return this.jjStopAtPos(1, 106); else if((!active1.and(8796093022208).eq(0))) return this.jjStopAtPos(1, 107); else if((!active1.and(17592186044416).eq(0))) return this.jjStopAtPos(1, 108); else if((!active1.and(35184372088832).eq(0))) return this.jjStopAtPos(1, 109); else if((!active1.and(70368744177664).eq(0))) return this.jjStopAtPos(1, 110); else if((!active1.and(bigInt("140737488355328")).eq(0))) return this.jjStopAtPos(1, 111); else if((!active1.and(bigInt("281474976710656")).eq(0))) return this.jjStopAtPos(1, 112);
                break;
            case 63:
                if((!active1.and(1099511627776).eq(0))) return this.jjStopAtPos(1, 104);
                break;
            case 97:
                return this.jjMoveStringLiteralDfa2_2(active1, 2147483648, active2, 0);
            case 110:
                if((!active2.and(1024).eq(0))) return this.jjStartNfaWithStates_2(1, 138, 98);
                break;
            case 114:
                return this.jjMoveStringLiteralDfa2_2(active1, 4294967296, active2, 0);
            case 115:
                if((!active2.and(2048).eq(0))) return this.jjStartNfaWithStates_2(1, 139, 98);
                return this.jjMoveStringLiteralDfa2_2(active1, 0, active2, 4096);
            default:
                break;
        }
        return this.jjStartNfa_2(0, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa2_2(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_2(0, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_2(1, 0, active1, active2);
            return 2;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(274877906944).eq(0))) return this.jjStopAtPos(2, 102);
                break;
            case 46:
                if((!active1.and(bigInt("576460752303423488")).eq(0))) return this.jjStopAtPos(2, 123);
                break;
            case 105:
                return this.jjMoveStringLiteralDfa3_2(active1, 0, active2, 4096);
            case 108:
                return this.jjMoveStringLiteralDfa3_2(active1, 2147483648, active2, 0);
            case 117:
                return this.jjMoveStringLiteralDfa3_2(active1, 4294967296, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_2(1, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa3_2(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_2(1, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_2(2, 0, active1, active2);
            return 3;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(4294967296).eq(0))) return this.jjStartNfaWithStates_2(3, 96, 98);
                break;
            case 110:
                return this.jjMoveStringLiteralDfa4_2(active1, 0, active2, 4096);
            case 115:
                return this.jjMoveStringLiteralDfa4_2(active1, 2147483648, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_2(2, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa4_2(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_2(2, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_2(3, 0, active1, active2);
            return 4;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(2147483648).eq(0))) return this.jjStartNfaWithStates_2(4, 95, 98);
                break;
            case 103:
                if((!active2.and(4096).eq(0))) return this.jjStartNfaWithStates_2(4, 140, 98);
                break;
            default:
                break;
        }
        return this.jjStartNfa_2(3, 0, active1, active2);
    }

    /*private*/ jjStartNfaWithStates_2(pos : number, kind : number, state : number) : number {
        this.jjmatchedKind = kind;
        this.jjmatchedPos = pos;
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            return pos + 1;
        }
        return this.jjMoveNfa_2(state, pos + 1);
    }

    /*private*/ jjMoveNfa_2(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 98;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 47:
                            if(this.curChar === 33) {
                                if(kind > 101) kind = 101;
                            } else if(this.curChar === 60) {
                                if(kind > 101) kind = 101;
                            }
                            break;
                        case 1:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                if(kind > 97) kind = 97;
                                {
                                    this.jjCheckNAddStates(343, 345);
                                }
                            } else if((4294977024 & l) !== 0) {
                                if(kind > 85) kind = 85;
                                {
                                    this.jjCheckNAdd(0);
                                }
                            } else if(this.curChar === 38) {
                                this.jjAddStates(346, 351);
                            } else if(this.curChar === 46) {
                                this.jjAddStates(352, 353);
                            } else if(this.curChar === 47) {
                                this.jjAddStates(354, 355);
                            } else if(this.curChar === 35) {
                                this.jjCheckNAdd(38);
                            } else if(this.curChar === 36) {
                                this.jjCheckNAdd(38);
                            } else if(this.curChar === 60) {
                                this.jjCheckNAdd(27);
                            } else if(this.curChar === 39) {
                                this.jjCheckNAddStates(356, 358);
                            } else if(this.curChar === 34) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            if(this.curChar === 36) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 38) {
                                if(kind > 126) kind = 126;
                            } else if(this.curChar === 60) {
                                if(kind > 115) kind = 115;
                            }
                            if(this.curChar === 60) this.jjstateSet[this.jjnewStateCnt++] = 2;
                            break;
                        case 2:
                            if((42949672960 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 4; else if(this.curChar === 61) {
                                if(kind > 142) kind = 142;
                            }
                            break;
                        case 48:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 49;
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 47;
                            break;
                        case 44:
                            if(this.curChar === 62 && kind > 148) kind = 148;
                            break;
                        case 98:
                        case 34:
                            if((bigInt("287948969894477824").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 0:
                            if((4294977024 & l) === 0) break;
                            if(kind > 85) kind = 85;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        case 3:
                            if(this.curChar === 45 && kind > 86) kind = 86;
                            break;
                        case 4:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 3;
                            break;
                        case 5:
                            if(this.curChar === 34) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 6:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 9:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 10:
                            if(this.curChar === 34 && kind > 93) kind = 93;
                            break;
                        case 11:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 12:
                            if(this.curChar === 39) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 13:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 16:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 17:
                            if(this.curChar === 39 && kind > 93) kind = 93;
                            break;
                        case 18:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 20:
                            if(this.curChar === 34) {
                                this.jjCheckNAddTwoStates(21, 22);
                            }
                            break;
                        case 21:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddTwoStates(21, 22);
                            }
                            break;
                        case 22:
                            if(this.curChar === 34 && kind > 94) kind = 94;
                            break;
                        case 23:
                            if(this.curChar === 39) {
                                this.jjCheckNAddTwoStates(24, 25);
                            }
                            break;
                        case 24:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddTwoStates(24, 25);
                            }
                            break;
                        case 25:
                            if(this.curChar === 39 && kind > 94) kind = 94;
                            break;
                        case 26:
                            if(this.curChar === 60 && kind > 115) kind = 115;
                            break;
                        case 27:
                            if(this.curChar === 61 && kind > 116) kind = 116;
                            break;
                        case 28:
                            if(this.curChar === 60) {
                                this.jjCheckNAdd(27);
                            }
                            break;
                        case 29:
                        case 86:
                            if(this.curChar === 38 && kind > 126) kind = 126;
                            break;
                        case 33:
                            if(this.curChar !== 36) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 36:
                            if((bigInt("288335929267978240").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 39:
                            if(this.curChar === 36) {
                                this.jjCheckNAdd(38);
                            }
                            break;
                        case 40:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(38);
                            }
                            break;
                        case 41:
                            if(this.curChar === 61 && kind > 142) kind = 142;
                            break;
                        case 43:
                            if(this.curChar === 47) {
                                this.jjAddStates(354, 355);
                            }
                            break;
                        case 46:
                            if(this.curChar === 46) {
                                this.jjAddStates(352, 353);
                            }
                            break;
                        case 49:
                            if(this.curChar === 33 && kind > 101) kind = 101;
                            break;
                        case 50:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 49;
                            break;
                        case 51:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAddStates(343, 345);
                        }
                            break;
                        case 52:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAdd(52);
                        }
                            break;
                        case 53:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddTwoStates(53, 54);
                            }
                            break;
                        case 54:
                            if(this.curChar === 46) {
                                this.jjCheckNAdd(55);
                            }
                            break;
                        case 55:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 98) kind = 98;
                        {
                            this.jjCheckNAdd(55);
                        }
                            break;
                        case 72:
                            if(this.curChar === 38) {
                                this.jjAddStates(346, 351);
                            }
                            break;
                        case 73:
                            if(this.curChar === 59 && kind > 115) kind = 115;
                            break;
                        case 76:
                            if(this.curChar === 59) {
                                this.jjCheckNAdd(27);
                            }
                            break;
                        case 79:
                            if(this.curChar === 59 && kind > 117) kind = 117;
                            break;
                        case 82:
                            if(this.curChar === 61 && kind > 118) kind = 118;
                            break;
                        case 83:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 82;
                            break;
                        case 87:
                            if(this.curChar === 59 && kind > 126) kind = 126;
                            break;
                        case 91:
                            if(this.curChar === 38) this.jjstateSet[this.jjnewStateCnt++] = 90;
                            break;
                        case 92:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 91;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 92) {
                                this.jjAddStates(362, 366);
                            } else if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 41; else if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 31;
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(64, 97);
                            } else if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(57, 59);
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            } else if(this.curChar === 124) {
                                if(kind > 127) kind = 127;
                            } else if(this.curChar === 114) {
                                this.jjAddStates(367, 368);
                            } else if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 2;
                            break;
                        case 44:
                            if(this.curChar === 93 && kind > 148) kind = 148;
                            break;
                        case 98:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 6:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 7:
                            if(this.curChar === 92) {
                                this.jjAddStates(369, 370);
                            }
                            break;
                        case 8:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 9;
                            break;
                        case 9:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 11:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 13:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 14:
                            if(this.curChar === 92) {
                                this.jjAddStates(371, 372);
                            }
                            break;
                        case 15:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 16;
                            break;
                        case 16:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 18:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 19:
                            if(this.curChar === 114) {
                                this.jjAddStates(367, 368);
                            }
                            break;
                        case 21:
                        {
                            this.jjAddStates(373, 374);
                        }
                            break;
                        case 24:
                        {
                            this.jjAddStates(375, 376);
                        }
                            break;
                        case 30:
                        case 31:
                            if(this.curChar === 124 && kind > 127) kind = 127;
                            break;
                        case 32:
                            if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 31;
                            break;
                        case 33:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 34:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 35:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 37:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 38:
                            if(this.curChar === 123 && kind > 142) kind = 142;
                            break;
                        case 42:
                            if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 41;
                            break;
                        case 56:
                            if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(57, 59);
                            }
                            break;
                        case 57:
                            if(this.curChar === 116 && kind > 115) kind = 115;
                            break;
                        case 58:
                            if(this.curChar === 101 && kind > 116) kind = 116;
                            break;
                        case 59:
                        case 62:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(58);
                            }
                            break;
                        case 60:
                            if(this.curChar === 92) {
                                this.jjAddStates(362, 366);
                            }
                            break;
                        case 61:
                            if(this.curChar === 108) {
                                this.jjCheckNAdd(57);
                            }
                            break;
                        case 63:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 62;
                            break;
                        case 64:
                            if(this.curChar === 116 && kind > 117) kind = 117;
                            break;
                        case 65:
                            if(this.curChar === 103) {
                                this.jjCheckNAdd(64);
                            }
                            break;
                        case 66:
                            if(this.curChar === 101 && kind > 118) kind = 118;
                            break;
                        case 67:
                        case 97:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(66);
                            }
                            break;
                        case 68:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 67;
                            break;
                        case 69:
                            if(this.curChar === 100 && kind > 126) kind = 126;
                            break;
                        case 70:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 69;
                            break;
                        case 71:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 70;
                            break;
                        case 74:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 73;
                            break;
                        case 75:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 74;
                            break;
                        case 77:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 76;
                            break;
                        case 78:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 77;
                            break;
                        case 80:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 79;
                            break;
                        case 81:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 80;
                            break;
                        case 84:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 83;
                            break;
                        case 85:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 84;
                            break;
                        case 88:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 87;
                            break;
                        case 89:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 88;
                            break;
                        case 90:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 89;
                            break;
                        case 93:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 92;
                            break;
                        case 94:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 93;
                            break;
                        case 95:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 94;
                            break;
                        case 96:
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(64, 97);
                            }
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 98:
                        case 34:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 6:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(359, 361);
                            }
                            break;
                        case 13:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(356, 358);
                            }
                            break;
                        case 21:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(373, 374);
                            }
                            break;
                        case 24:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(375, 376);
                            }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 98 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    /*private*/ jjStopStringLiteralDfa_3(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        // active0 = FMParserTokenManager.toBigInt(active0);
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        switch((pos)) {
            case 0:
                if((!active2.and(16).eq(0))) return 2;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(7168).eq(0))) {
                    this.jjmatchedKind = 141;
                    return 95;
                }
                if((!active1.and(bigInt("576461130260545536")).eq(0))) return 45;
                return -1;
            case 1:
                if((!active2.and(3072).eq(0))) return 95;
                if((!active1.and(bigInt("576461095900807168")).eq(0))) return 44;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    if(this.jjmatchedPos !== 1) {
                        this.jjmatchedKind = 141;
                        this.jjmatchedPos = 1;
                    }
                    return 95;
                }
                return -1;
            case 2:
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 2;
                    return 95;
                }
                return -1;
            case 3:
                if((!active1.and(2147483648).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 3;
                    return 95;
                }
                if((!active1.and(4294967296).eq(0))) return 95;
                return -1;
            default:
                return -1;
        }
    }

    /*private*/ jjStartNfa_3(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        return this.jjMoveNfa_3(this.jjStopStringLiteralDfa_3(pos, active0, active1, active2), pos + 1);
    }

    /*private*/ jjMoveStringLiteralDfa0_3() : number {
        switch((this.curChar)) {
            case 33:
                this.jjmatchedKind = 128;
                return this.jjMoveStringLiteralDfa1_3(8796093022208, 0);
            case 37:
                this.jjmatchedKind = 125;
                return this.jjMoveStringLiteralDfa1_3(bigInt("281474976710656"), 0);
            case 40:
                return this.jjStopAtPos(0, 134);
            case 41:
                return this.jjStopAtPos(0, 135);
            case 42:
                this.jjmatchedKind = 121;
                return this.jjMoveStringLiteralDfa1_3(bigInt("288300744895889408"), 0);
            case 43:
                this.jjmatchedKind = 119;
                return this.jjMoveStringLiteralDfa1_3(bigInt("580542139465728"), 0);
            case 44:
                return this.jjStopAtPos(0, 129);
            case 45:
                this.jjmatchedKind = 120;
                return this.jjMoveStringLiteralDfa1_3(bigInt("1161084278931456"), 0);
            case 46:
                this.jjmatchedKind = 99;
                return this.jjMoveStringLiteralDfa1_3(bigInt("576461095900807168"), 0);
            case 47:
                this.jjmatchedKind = 124;
                return this.jjMoveStringLiteralDfa1_3(bigInt("140737488355328"), 0);
            case 58:
                return this.jjStopAtPos(0, 131);
            case 59:
                return this.jjStopAtPos(0, 130);
            case 61:
                this.jjmatchedKind = 105;
                return this.jjMoveStringLiteralDfa1_3(4398046511104, 0);
            case 62:
                this.jjmatchedKind = 149;
                return this.jjMoveStringLiteralDfa1_3(0, 4194304);
            case 63:
                this.jjmatchedKind = 103;
                return this.jjMoveStringLiteralDfa1_3(1099511627776, 0);
            case 91:
                return this.jjStartNfaWithStates_3(0, 132, 2);
            case 93:
                return this.jjStopAtPos(0, 133);
            case 97:
                return this.jjMoveStringLiteralDfa1_3(0, 2048);
            case 102:
                return this.jjMoveStringLiteralDfa1_3(2147483648, 0);
            case 105:
                return this.jjMoveStringLiteralDfa1_3(0, 1024);
            case 116:
                return this.jjMoveStringLiteralDfa1_3(4294967296, 0);
            case 117:
                return this.jjMoveStringLiteralDfa1_3(0, 4096);
            case 123:
                return this.jjStopAtPos(0, 136);
            case 125:
                return this.jjStopAtPos(0, 137);
            default:
                return this.jjMoveNfa_3(1, 0);
        }
    }

    /*private*/ jjMoveStringLiteralDfa1_3(active1 : number|BigInteger, active2 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_3(0, 0, active1, active2);
            return 1;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(bigInt("288230376151711744")).eq(0))) return this.jjStopAtPos(1, 122);
                break;
            case 43:
                if((!active1.and(bigInt("562949953421312")).eq(0))) return this.jjStopAtPos(1, 113);
                break;
            case 45:
                if((!active1.and(bigInt("1125899906842624")).eq(0))) return this.jjStopAtPos(1, 114);
                break;
            case 46:
                if((!active1.and(68719476736).eq(0))) {
                    this.jjmatchedKind = 100;
                    this.jjmatchedPos = 1;
                }
                return this.jjMoveStringLiteralDfa2_3(active1, bigInt("576461027181330432"), active2, 0);
            case 61:
                if((!active1.and(4398046511104).eq(0))) return this.jjStopAtPos(1, 106); else if((!active1.and(8796093022208).eq(0))) return this.jjStopAtPos(1, 107); else if((!active1.and(17592186044416).eq(0))) return this.jjStopAtPos(1, 108); else if((!active1.and(35184372088832).eq(0))) return this.jjStopAtPos(1, 109); else if((!active1.and(70368744177664).eq(0))) return this.jjStopAtPos(1, 110); else if((!active1.and(bigInt("140737488355328")).eq(0))) return this.jjStopAtPos(1, 111); else if((!active1.and(bigInt("281474976710656")).eq(0))) return this.jjStopAtPos(1, 112); else if((!active2.and(4194304).eq(0))) return this.jjStopAtPos(1, 150);
                break;
            case 63:
                if((!active1.and(1099511627776).eq(0))) return this.jjStopAtPos(1, 104);
                break;
            case 97:
                return this.jjMoveStringLiteralDfa2_3(active1, 2147483648, active2, 0);
            case 110:
                if((!active2.and(1024).eq(0))) return this.jjStartNfaWithStates_3(1, 138, 95);
                break;
            case 114:
                return this.jjMoveStringLiteralDfa2_3(active1, 4294967296, active2, 0);
            case 115:
                if((!active2.and(2048).eq(0))) return this.jjStartNfaWithStates_3(1, 139, 95);
                return this.jjMoveStringLiteralDfa2_3(active1, 0, active2, 4096);
            default:
                break;
        }
        return this.jjStartNfa_3(0, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa2_3(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_3(0, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_3(1, 0, active1, active2);
            return 2;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(274877906944).eq(0))) return this.jjStopAtPos(2, 102);
                break;
            case 46:
                if((!active1.and(bigInt("576460752303423488")).eq(0))) return this.jjStopAtPos(2, 123);
                break;
            case 105:
                return this.jjMoveStringLiteralDfa3_3(active1, 0, active2, 4096);
            case 108:
                return this.jjMoveStringLiteralDfa3_3(active1, 2147483648, active2, 0);
            case 117:
                return this.jjMoveStringLiteralDfa3_3(active1, 4294967296, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_3(1, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa3_3(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_3(1, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_3(2, 0, active1, active2);
            return 3;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(4294967296).eq(0))) return this.jjStartNfaWithStates_3(3, 96, 95);
                break;
            case 110:
                return this.jjMoveStringLiteralDfa4_3(active1, 0, active2, 4096);
            case 115:
                return this.jjMoveStringLiteralDfa4_3(active1, 2147483648, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_3(2, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa4_3(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_3(2, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_3(3, 0, active1, active2);
            return 4;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(2147483648).eq(0))) return this.jjStartNfaWithStates_3(4, 95, 95);
                break;
            case 103:
                if((!active2.and(4096).eq(0))) return this.jjStartNfaWithStates_3(4, 140, 95);
                break;
            default:
                break;
        }
        return this.jjStartNfa_3(3, 0, active1, active2);
    }

    /*private*/ jjStartNfaWithStates_3(pos : number, kind : number, state : number) : number {
        this.jjmatchedKind = kind;
        this.jjmatchedPos = pos;
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            return pos + 1;
        }
        return this.jjMoveNfa_3(state, pos + 1);
    }

    /*private*/ jjMoveNfa_3(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 95;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                if(kind > 97) kind = 97;
                                {
                                    this.jjCheckNAddStates(377, 379);
                                }
                            } else if((4294977024 & l) !== 0) {
                                if(kind > 85) kind = 85;
                                {
                                    this.jjCheckNAdd(0);
                                }
                            } else if(this.curChar === 38) {
                                this.jjAddStates(380, 385);
                            } else if(this.curChar === 46) {
                                this.jjAddStates(386, 387);
                            } else if(this.curChar === 35) {
                                this.jjCheckNAdd(38);
                            } else if(this.curChar === 36) {
                                this.jjCheckNAdd(38);
                            } else if(this.curChar === 60) {
                                this.jjCheckNAdd(27);
                            } else if(this.curChar === 39) {
                                this.jjCheckNAddStates(356, 358);
                            } else if(this.curChar === 34) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            if(this.curChar === 36) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 38) {
                                if(kind > 126) kind = 126;
                            } else if(this.curChar === 60) {
                                if(kind > 115) kind = 115;
                            }
                            if(this.curChar === 60) this.jjstateSet[this.jjnewStateCnt++] = 2;
                            break;
                        case 44:
                            if(this.curChar === 33) {
                                if(kind > 101) kind = 101;
                            } else if(this.curChar === 60) {
                                if(kind > 101) kind = 101;
                            }
                            break;
                        case 2:
                            if((42949672960 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 4; else if(this.curChar === 61) {
                                if(kind > 142) kind = 142;
                            }
                            break;
                        case 45:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 46;
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 44;
                            break;
                        case 95:
                        case 34:
                            if((bigInt("287948969894477824").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 0:
                            if((4294977024 & l) === 0) break;
                            if(kind > 85) kind = 85;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        case 3:
                            if(this.curChar === 45 && kind > 86) kind = 86;
                            break;
                        case 4:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 3;
                            break;
                        case 5:
                            if(this.curChar === 34) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 6:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 9:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 10:
                            if(this.curChar === 34 && kind > 93) kind = 93;
                            break;
                        case 11:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 12:
                            if(this.curChar === 39) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 13:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 16:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 17:
                            if(this.curChar === 39 && kind > 93) kind = 93;
                            break;
                        case 18:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 20:
                            if(this.curChar === 34) {
                                this.jjCheckNAddTwoStates(21, 22);
                            }
                            break;
                        case 21:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddTwoStates(21, 22);
                            }
                            break;
                        case 22:
                            if(this.curChar === 34 && kind > 94) kind = 94;
                            break;
                        case 23:
                            if(this.curChar === 39) {
                                this.jjCheckNAddTwoStates(24, 25);
                            }
                            break;
                        case 24:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddTwoStates(24, 25);
                            }
                            break;
                        case 25:
                            if(this.curChar === 39 && kind > 94) kind = 94;
                            break;
                        case 26:
                            if(this.curChar === 60 && kind > 115) kind = 115;
                            break;
                        case 27:
                            if(this.curChar === 61 && kind > 116) kind = 116;
                            break;
                        case 28:
                            if(this.curChar === 60) {
                                this.jjCheckNAdd(27);
                            }
                            break;
                        case 29:
                        case 83:
                            if(this.curChar === 38 && kind > 126) kind = 126;
                            break;
                        case 33:
                            if(this.curChar !== 36) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 36:
                            if((bigInt("288335929267978240").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 39:
                            if(this.curChar === 36) {
                                this.jjCheckNAdd(38);
                            }
                            break;
                        case 40:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(38);
                            }
                            break;
                        case 41:
                            if(this.curChar === 61 && kind > 142) kind = 142;
                            break;
                        case 43:
                            if(this.curChar === 46) {
                                this.jjAddStates(386, 387);
                            }
                            break;
                        case 46:
                            if(this.curChar === 33 && kind > 101) kind = 101;
                            break;
                        case 47:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 46;
                            break;
                        case 48:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAddStates(377, 379);
                        }
                            break;
                        case 49:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAdd(49);
                        }
                            break;
                        case 50:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddTwoStates(50, 51);
                            }
                            break;
                        case 51:
                            if(this.curChar === 46) {
                                this.jjCheckNAdd(52);
                            }
                            break;
                        case 52:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 98) kind = 98;
                        {
                            this.jjCheckNAdd(52);
                        }
                            break;
                        case 69:
                            if(this.curChar === 38) {
                                this.jjAddStates(380, 385);
                            }
                            break;
                        case 70:
                            if(this.curChar === 59 && kind > 115) kind = 115;
                            break;
                        case 73:
                            if(this.curChar === 59) {
                                this.jjCheckNAdd(27);
                            }
                            break;
                        case 76:
                            if(this.curChar === 59 && kind > 117) kind = 117;
                            break;
                        case 79:
                            if(this.curChar === 61 && kind > 118) kind = 118;
                            break;
                        case 80:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 79;
                            break;
                        case 84:
                            if(this.curChar === 59 && kind > 126) kind = 126;
                            break;
                        case 88:
                            if(this.curChar === 38) this.jjstateSet[this.jjnewStateCnt++] = 87;
                            break;
                        case 89:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 88;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 92) {
                                this.jjAddStates(388, 392);
                            } else if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 41; else if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 31;
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(61, 94);
                            } else if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(54, 56);
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            } else if(this.curChar === 124) {
                                if(kind > 127) kind = 127;
                            } else if(this.curChar === 114) {
                                this.jjAddStates(367, 368);
                            } else if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 2;
                            break;
                        case 95:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 6:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 7:
                            if(this.curChar === 92) {
                                this.jjAddStates(369, 370);
                            }
                            break;
                        case 8:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 9;
                            break;
                        case 9:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 11:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 13:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 14:
                            if(this.curChar === 92) {
                                this.jjAddStates(371, 372);
                            }
                            break;
                        case 15:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 16;
                            break;
                        case 16:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 18:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 19:
                            if(this.curChar === 114) {
                                this.jjAddStates(367, 368);
                            }
                            break;
                        case 21:
                        {
                            this.jjAddStates(373, 374);
                        }
                            break;
                        case 24:
                        {
                            this.jjAddStates(375, 376);
                        }
                            break;
                        case 30:
                        case 31:
                            if(this.curChar === 124 && kind > 127) kind = 127;
                            break;
                        case 32:
                            if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 31;
                            break;
                        case 33:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 34:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 35:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 37:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 38:
                            if(this.curChar === 123 && kind > 142) kind = 142;
                            break;
                        case 42:
                            if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 41;
                            break;
                        case 53:
                            if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(54, 56);
                            }
                            break;
                        case 54:
                            if(this.curChar === 116 && kind > 115) kind = 115;
                            break;
                        case 55:
                            if(this.curChar === 101 && kind > 116) kind = 116;
                            break;
                        case 56:
                        case 59:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(55);
                            }
                            break;
                        case 57:
                            if(this.curChar === 92) {
                                this.jjAddStates(388, 392);
                            }
                            break;
                        case 58:
                            if(this.curChar === 108) {
                                this.jjCheckNAdd(54);
                            }
                            break;
                        case 60:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 59;
                            break;
                        case 61:
                            if(this.curChar === 116 && kind > 117) kind = 117;
                            break;
                        case 62:
                            if(this.curChar === 103) {
                                this.jjCheckNAdd(61);
                            }
                            break;
                        case 63:
                            if(this.curChar === 101 && kind > 118) kind = 118;
                            break;
                        case 64:
                        case 94:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(63);
                            }
                            break;
                        case 65:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 64;
                            break;
                        case 66:
                            if(this.curChar === 100 && kind > 126) kind = 126;
                            break;
                        case 67:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 66;
                            break;
                        case 68:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 67;
                            break;
                        case 71:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 70;
                            break;
                        case 72:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 71;
                            break;
                        case 74:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 73;
                            break;
                        case 75:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 74;
                            break;
                        case 77:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 76;
                            break;
                        case 78:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 77;
                            break;
                        case 81:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 80;
                            break;
                        case 82:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 81;
                            break;
                        case 85:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 84;
                            break;
                        case 86:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 85;
                            break;
                        case 87:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 86;
                            break;
                        case 90:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 89;
                            break;
                        case 91:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 90;
                            break;
                        case 92:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 91;
                            break;
                        case 93:
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(61, 94);
                            }
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 95:
                        case 34:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 6:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(359, 361);
                            }
                            break;
                        case 13:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(356, 358);
                            }
                            break;
                        case 21:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(373, 374);
                            }
                            break;
                        case 24:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(375, 376);
                            }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 95 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    /*private*/ jjStopStringLiteralDfa_5(pos : number, active0 : number|BigInteger, active1 : number|BigInteger) : number {
        switch((pos)) {
            default:
                return -1;
        }
    }

    /*private*/ jjStartNfa_5(pos : number, active0 : number|BigInteger, active1 : number|BigInteger) : number {
        return this.jjMoveNfa_5(this.jjStopStringLiteralDfa_5(pos, active0, active1), pos + 1);
    }

    /*private*/ jjMoveStringLiteralDfa0_5() : number {
        switch((this.curChar)) {
            case 45:
                return this.jjStartNfaWithStates_5(0, 90, 3);
            default:
                return this.jjMoveNfa_5(1, 0);
        }
    }

    /*private*/ jjStartNfaWithStates_5(pos : number, kind : number, state : number) : number {
        this.jjmatchedKind = kind;
        this.jjmatchedPos = pos;
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            return pos + 1;
        }
        return this.jjMoveNfa_5(state, pos + 1);
    }

    /*private*/ jjMoveNfa_5(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 6;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 3:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 4;
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 2;
                            break;
                        case 1:
                            if((!bigInt("-4611721202799476737").and(l).eq(0))) {
                                if(kind > 87) kind = 87;
                                {
                                    this.jjCheckNAdd(0);
                                }
                            } else if(this.curChar === 45) {
                                this.jjAddStates(393, 394);
                            }
                            break;
                        case 0:
                            if((bigInt("-4611721202799476737").and(l).eq(0))) break;
                            kind = 87;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        case 2:
                            if(this.curChar === 62) kind = 91;
                            break;
                        case 5:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 4;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                        case 0:
                            if((-536870913 & l) === 0) break;
                            kind = 87;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        case 4:
                            if(this.curChar === 93) kind = 91;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                        case 0:
                            if(!FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 87) kind = 87;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 6 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    /*private*/ jjStopStringLiteralDfa_1(pos : number, active0 : number|BigInteger, active1 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        switch((pos)) {
            case 0:
                if((!active1.and(1835008).eq(0))) {
                    this.jjmatchedKind = 81;
                    return -1;
                }
                return -1;
            default:
                return -1;
        }
    }

    /*private*/ jjStartNfa_1(pos : number, active0 : number|BigInteger, active1 : number|BigInteger) : number {
        return this.jjMoveNfa_1(this.jjStopStringLiteralDfa_1(pos, active0, active1), pos + 1);
    }

    /*private*/ jjMoveStringLiteralDfa0_1() : number {
        switch((this.curChar)) {
            case 35:
                return this.jjMoveStringLiteralDfa1_1(524288);
            case 36:
                return this.jjMoveStringLiteralDfa1_1(262144);
            case 91:
                return this.jjMoveStringLiteralDfa1_1(1048576);
            default:
                return this.jjMoveNfa_1(2, 0);
        }
    }

    /*private*/ jjMoveStringLiteralDfa1_1(active1 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_1(0, 0, active1);
            return 1;
        }
        switch((this.curChar)) {
            case 61:
                if((!active1.and(1048576).eq(0))) return this.jjStopAtPos(1, 84);
                break;
            case 123:
                if((!active1.and(262144).eq(0))) return this.jjStopAtPos(1, 82); else if((!active1.and(524288).eq(0))) return this.jjStopAtPos(1, 83);
                break;
            default:
                break;
        }
        return this.jjStartNfa_1(0, 0, active1);
    }

    /*private*/ jjMoveNfa_1(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 3;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 2:
                            if((!bigInt("-1152921611981039105").and(l).eq(0))) {
                                if(kind > 80) kind = 80;
                                {
                                    this.jjCheckNAdd(1);
                                }
                            } else if((4294977024 & l) !== 0) {
                                if(kind > 79) kind = 79;
                                {
                                    this.jjCheckNAdd(0);
                                }
                            } else if((!bigInt("1152921607686062080").and(l).eq(0))) {
                                if(kind > 81) kind = 81;
                            }
                            break;
                        case 0:
                            if((4294977024 & l) === 0) break;
                            kind = 79;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        case 1:
                            if((bigInt("-1152921611981039105").and(l).eq(0))) break;
                            kind = 80;
                        {
                            this.jjCheckNAdd(1);
                        }
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 2:
                            if((!bigInt("-576460752437641217").and(l).eq(0))) {
                                if(kind > 80) kind = 80;
                                {
                                    this.jjCheckNAdd(1);
                                }
                            } else if((!bigInt("576460752437641216").and(l).eq(0))) {
                                if(kind > 81) kind = 81;
                            }
                            break;
                        case 1:
                            if((bigInt("-576460752437641217").and(l).eq(0))) break;
                            kind = 80;
                        {
                            this.jjCheckNAdd(1);
                        }
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 2:
                        case 1:
                            if(!FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 80) kind = 80;
                        {
                            this.jjCheckNAdd(1);
                        }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 3 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    /*private*/ jjStopStringLiteralDfa_6(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        // active0 = FMParserTokenManager.toBigInt(active0);
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        switch((pos)) {
            case 0:
                if((!active2.and(16).eq(0))) return 36;
                if((!active1.and(bigInt("1153062242095202304")).eq(0))) return 40;
                if((!active1.and(bigInt("576461130260545536")).eq(0))) return 44;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(7168).eq(0))) {
                    this.jjmatchedKind = 141;
                    return 94;
                }
                return -1;
            case 1:
                if((!active2.and(3072).eq(0))) return 94;
                if((!active1.and(bigInt("576461095900807168")).eq(0))) return 43;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    if(this.jjmatchedPos !== 1) {
                        this.jjmatchedKind = 141;
                        this.jjmatchedPos = 1;
                    }
                    return 94;
                }
                return -1;
            case 2:
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 2;
                    return 94;
                }
                return -1;
            case 3:
                if((!active1.and(4294967296).eq(0))) return 94;
                if((!active1.and(2147483648).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 3;
                    return 94;
                }
                return -1;
            default:
                return -1;
        }
    }

    /*private*/ jjStartNfa_6(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        return this.jjMoveNfa_6(this.jjStopStringLiteralDfa_6(pos, active0, active1, active2), pos + 1);
    }

    /*private*/ jjMoveStringLiteralDfa0_6() : number {
        switch((this.curChar)) {
            case 33:
                this.jjmatchedKind = 128;
                return this.jjMoveStringLiteralDfa1_6(8796093022208, 0);
            case 37:
                this.jjmatchedKind = 125;
                return this.jjMoveStringLiteralDfa1_6(bigInt("281474976710656"), 0);
            case 40:
                return this.jjStopAtPos(0, 134);
            case 41:
                return this.jjStopAtPos(0, 135);
            case 42:
                this.jjmatchedKind = 121;
                return this.jjMoveStringLiteralDfa1_6(bigInt("288300744895889408"), 0);
            case 43:
                this.jjmatchedKind = 119;
                return this.jjMoveStringLiteralDfa1_6(bigInt("580542139465728"), 0);
            case 44:
                return this.jjStopAtPos(0, 129);
            case 45:
                this.jjmatchedKind = 120;
                return this.jjMoveStringLiteralDfa1_6(bigInt("1161084278931456"), 0);
            case 46:
                this.jjmatchedKind = 99;
                return this.jjMoveStringLiteralDfa1_6(bigInt("576461095900807168"), 0);
            case 47:
                this.jjmatchedKind = 124;
                return this.jjMoveStringLiteralDfa1_6(bigInt("140737488355328"), 0);
            case 58:
                return this.jjStopAtPos(0, 131);
            case 59:
                return this.jjStopAtPos(0, 130);
            case 61:
                this.jjmatchedKind = 105;
                return this.jjMoveStringLiteralDfa1_6(4398046511104, 0);
            case 62:
                return this.jjStopAtPos(0, 147);
            case 63:
                this.jjmatchedKind = 103;
                return this.jjMoveStringLiteralDfa1_6(1099511627776, 0);
            case 91:
                return this.jjStartNfaWithStates_6(0, 132, 36);
            case 93:
                return this.jjStopAtPos(0, 133);
            case 97:
                return this.jjMoveStringLiteralDfa1_6(0, 2048);
            case 102:
                return this.jjMoveStringLiteralDfa1_6(2147483648, 0);
            case 105:
                return this.jjMoveStringLiteralDfa1_6(0, 1024);
            case 116:
                return this.jjMoveStringLiteralDfa1_6(4294967296, 0);
            case 117:
                return this.jjMoveStringLiteralDfa1_6(0, 4096);
            case 123:
                return this.jjStopAtPos(0, 136);
            case 125:
                return this.jjStopAtPos(0, 137);
            default:
                return this.jjMoveNfa_6(0, 0);
        }
    }

    /*private*/ jjMoveStringLiteralDfa1_6(active1 : number|BigInteger, active2 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_6(0, 0, active1, active2);
            return 1;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(bigInt("288230376151711744")).eq(0))) return this.jjStopAtPos(1, 122);
                break;
            case 43:
                if((!active1.and(bigInt("562949953421312")).eq(0))) return this.jjStopAtPos(1, 113);
                break;
            case 45:
                if((!active1.and(bigInt("1125899906842624")).eq(0))) return this.jjStopAtPos(1, 114);
                break;
            case 46:
                if((!active1.and(68719476736).eq(0))) {
                    this.jjmatchedKind = 100;
                    this.jjmatchedPos = 1;
                }
                return this.jjMoveStringLiteralDfa2_6(active1, bigInt("576461027181330432"), active2, 0);
            case 61:
                if((!active1.and(4398046511104).eq(0))) return this.jjStopAtPos(1, 106); else if((!active1.and(8796093022208).eq(0))) return this.jjStopAtPos(1, 107); else if((!active1.and(17592186044416).eq(0))) return this.jjStopAtPos(1, 108); else if((!active1.and(35184372088832).eq(0))) return this.jjStopAtPos(1, 109); else if((!active1.and(70368744177664).eq(0))) return this.jjStopAtPos(1, 110); else if((!active1.and(bigInt("140737488355328")).eq(0))) return this.jjStopAtPos(1, 111); else if((!active1.and(bigInt("281474976710656")).eq(0))) return this.jjStopAtPos(1, 112);
                break;
            case 63:
                if((!active1.and(1099511627776).eq(0))) return this.jjStopAtPos(1, 104);
                break;
            case 97:
                return this.jjMoveStringLiteralDfa2_6(active1, 2147483648, active2, 0);
            case 110:
                if((!active2.and(1024).eq(0))) return this.jjStartNfaWithStates_6(1, 138, 94);
                break;
            case 114:
                return this.jjMoveStringLiteralDfa2_6(active1, 4294967296, active2, 0);
            case 115:
                if((!active2.and(2048).eq(0))) return this.jjStartNfaWithStates_6(1, 139, 94);
                return this.jjMoveStringLiteralDfa2_6(active1, 0, active2, 4096);
            default:
                break;
        }
        return this.jjStartNfa_6(0, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa2_6(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_6(0, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_6(1, 0, active1, active2);
            return 2;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(274877906944).eq(0))) return this.jjStopAtPos(2, 102);
                break;
            case 46:
                if((!active1.and(bigInt("576460752303423488")).eq(0))) return this.jjStopAtPos(2, 123);
                break;
            case 105:
                return this.jjMoveStringLiteralDfa3_6(active1, 0, active2, 4096);
            case 108:
                return this.jjMoveStringLiteralDfa3_6(active1, 2147483648, active2, 0);
            case 117:
                return this.jjMoveStringLiteralDfa3_6(active1, 4294967296, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_6(1, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa3_6(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_6(1, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_6(2, 0, active1, active2);
            return 3;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(4294967296).eq(0))) return this.jjStartNfaWithStates_6(3, 96, 94);
                break;
            case 110:
                return this.jjMoveStringLiteralDfa4_6(active1, 0, active2, 4096);
            case 115:
                return this.jjMoveStringLiteralDfa4_6(active1, 2147483648, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_6(2, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa4_6(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_6(2, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_6(3, 0, active1, active2);
            return 4;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(2147483648).eq(0))) return this.jjStartNfaWithStates_6(4, 95, 94);
                break;
            case 103:
                if((!active2.and(4096).eq(0))) return this.jjStartNfaWithStates_6(4, 140, 94);
                break;
            default:
                break;
        }
        return this.jjStartNfa_6(3, 0, active1, active2);
    }

    /*private*/ jjStartNfaWithStates_6(pos : number, kind : number, state : number) : number {
        this.jjmatchedKind = kind;
        this.jjmatchedPos = pos;
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            return pos + 1;
        }
        return this.jjMoveNfa_6(state, pos + 1);
    }

    /*private*/ jjMoveNfa_6(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 94;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 43:
                            if(this.curChar === 33) {
                                if(kind > 101) kind = 101;
                            } else if(this.curChar === 60) {
                                if(kind > 101) kind = 101;
                            }
                            break;
                        case 40:
                            if(this.curChar === 62 && kind > 148) kind = 148;
                            break;
                        case 44:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 45;
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 43;
                            break;
                        case 0:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                if(kind > 97) kind = 97;
                                {
                                    this.jjCheckNAddStates(395, 397);
                                }
                            } else if((4294977024 & l) !== 0) {
                                if(kind > 151) kind = 151;
                                {
                                    this.jjCheckNAdd(38);
                                }
                            } else if(this.curChar === 38) {
                                this.jjAddStates(398, 403);
                            } else if(this.curChar === 46) {
                                this.jjAddStates(404, 405);
                            } else if(this.curChar === 47) {
                                this.jjAddStates(406, 407);
                            } else if(this.curChar === 35) {
                                this.jjCheckNAdd(33);
                            } else if(this.curChar === 36) {
                                this.jjCheckNAdd(33);
                            } else if(this.curChar === 60) {
                                this.jjCheckNAdd(22);
                            } else if(this.curChar === 39) {
                                this.jjCheckNAddStates(408, 410);
                            } else if(this.curChar === 34) {
                                this.jjCheckNAddStates(411, 413);
                            }
                            if(this.curChar === 36) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(29, 30);
                                }
                            } else if(this.curChar === 38) {
                                if(kind > 126) kind = 126;
                            } else if(this.curChar === 60) {
                                if(kind > 115) kind = 115;
                            }
                            break;
                        case 94:
                        case 29:
                            if((bigInt("287948969894477824").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(29, 30);
                        }
                            break;
                        case 1:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddStates(411, 413);
                            }
                            break;
                        case 4:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(411, 413);
                            }
                            break;
                        case 5:
                            if(this.curChar === 34 && kind > 93) kind = 93;
                            break;
                        case 6:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(411, 413);
                            }
                            break;
                        case 7:
                            if(this.curChar === 39) {
                                this.jjCheckNAddStates(408, 410);
                            }
                            break;
                        case 8:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddStates(408, 410);
                            }
                            break;
                        case 11:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(408, 410);
                            }
                            break;
                        case 12:
                            if(this.curChar === 39 && kind > 93) kind = 93;
                            break;
                        case 13:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(408, 410);
                            }
                            break;
                        case 15:
                            if(this.curChar === 34) {
                                this.jjCheckNAddTwoStates(16, 17);
                            }
                            break;
                        case 16:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddTwoStates(16, 17);
                            }
                            break;
                        case 17:
                            if(this.curChar === 34 && kind > 94) kind = 94;
                            break;
                        case 18:
                            if(this.curChar === 39) {
                                this.jjCheckNAddTwoStates(19, 20);
                            }
                            break;
                        case 19:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddTwoStates(19, 20);
                            }
                            break;
                        case 20:
                            if(this.curChar === 39 && kind > 94) kind = 94;
                            break;
                        case 21:
                            if(this.curChar === 60 && kind > 115) kind = 115;
                            break;
                        case 22:
                            if(this.curChar === 61 && kind > 116) kind = 116;
                            break;
                        case 23:
                            if(this.curChar === 60) {
                                this.jjCheckNAdd(22);
                            }
                            break;
                        case 24:
                        case 82:
                            if(this.curChar === 38 && kind > 126) kind = 126;
                            break;
                        case 28:
                            if(this.curChar !== 36) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(29, 30);
                        }
                            break;
                        case 31:
                            if((bigInt("288335929267978240").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(29, 30);
                        }
                            break;
                        case 34:
                            if(this.curChar === 36) {
                                this.jjCheckNAdd(33);
                            }
                            break;
                        case 35:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(33);
                            }
                            break;
                        case 36:
                            if(this.curChar === 61 && kind > 142) kind = 142;
                            break;
                        case 38:
                            if((4294977024 & l) === 0) break;
                            if(kind > 151) kind = 151;
                        {
                            this.jjCheckNAdd(38);
                        }
                            break;
                        case 39:
                            if(this.curChar === 47) {
                                this.jjAddStates(406, 407);
                            }
                            break;
                        case 42:
                            if(this.curChar === 46) {
                                this.jjAddStates(404, 405);
                            }
                            break;
                        case 45:
                            if(this.curChar === 33 && kind > 101) kind = 101;
                            break;
                        case 46:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 45;
                            break;
                        case 47:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAddStates(395, 397);
                        }
                            break;
                        case 48:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAdd(48);
                        }
                            break;
                        case 49:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddTwoStates(49, 50);
                            }
                            break;
                        case 50:
                            if(this.curChar === 46) {
                                this.jjCheckNAdd(51);
                            }
                            break;
                        case 51:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 98) kind = 98;
                        {
                            this.jjCheckNAdd(51);
                        }
                            break;
                        case 68:
                            if(this.curChar === 38) {
                                this.jjAddStates(398, 403);
                            }
                            break;
                        case 69:
                            if(this.curChar === 59 && kind > 115) kind = 115;
                            break;
                        case 72:
                            if(this.curChar === 59) {
                                this.jjCheckNAdd(22);
                            }
                            break;
                        case 75:
                            if(this.curChar === 59 && kind > 117) kind = 117;
                            break;
                        case 78:
                            if(this.curChar === 61 && kind > 118) kind = 118;
                            break;
                        case 79:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 78;
                            break;
                        case 83:
                            if(this.curChar === 59 && kind > 126) kind = 126;
                            break;
                        case 87:
                            if(this.curChar === 38) this.jjstateSet[this.jjnewStateCnt++] = 86;
                            break;
                        case 88:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 87;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 40:
                            if(this.curChar === 93 && kind > 148) kind = 148;
                            break;
                        case 0:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(29, 30);
                                }
                            } else if(this.curChar === 92) {
                                this.jjAddStates(414, 418);
                            } else if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 36; else if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 26;
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(60, 93);
                            } else if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(53, 55);
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(31);
                            } else if(this.curChar === 124) {
                                if(kind > 127) kind = 127;
                            } else if(this.curChar === 114) {
                                this.jjAddStates(371, 372);
                            }
                            break;
                        case 94:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(29, 30);
                                }
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(31);
                            }
                            break;
                        case 1:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(411, 413);
                            }
                            break;
                        case 2:
                            if(this.curChar === 92) {
                                this.jjAddStates(419, 420);
                            }
                            break;
                        case 3:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 4;
                            break;
                        case 4:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(411, 413);
                            }
                            break;
                        case 6:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(411, 413);
                            }
                            break;
                        case 8:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(408, 410);
                            }
                            break;
                        case 9:
                            if(this.curChar === 92) {
                                this.jjAddStates(421, 422);
                            }
                            break;
                        case 10:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 11;
                            break;
                        case 11:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(408, 410);
                            }
                            break;
                        case 13:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(408, 410);
                            }
                            break;
                        case 14:
                            if(this.curChar === 114) {
                                this.jjAddStates(371, 372);
                            }
                            break;
                        case 16:
                        {
                            this.jjAddStates(423, 424);
                        }
                            break;
                        case 19:
                        {
                            this.jjAddStates(425, 426);
                        }
                            break;
                        case 25:
                        case 26:
                            if(this.curChar === 124 && kind > 127) kind = 127;
                            break;
                        case 27:
                            if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 26;
                            break;
                        case 28:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(29, 30);
                        }
                            break;
                        case 29:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(29, 30);
                        }
                            break;
                        case 30:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(31);
                            }
                            break;
                        case 32:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(31);
                            }
                            break;
                        case 33:
                            if(this.curChar === 123 && kind > 142) kind = 142;
                            break;
                        case 37:
                            if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 36;
                            break;
                        case 52:
                            if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(53, 55);
                            }
                            break;
                        case 53:
                            if(this.curChar === 116 && kind > 115) kind = 115;
                            break;
                        case 54:
                            if(this.curChar === 101 && kind > 116) kind = 116;
                            break;
                        case 55:
                        case 58:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(54);
                            }
                            break;
                        case 56:
                            if(this.curChar === 92) {
                                this.jjAddStates(414, 418);
                            }
                            break;
                        case 57:
                            if(this.curChar === 108) {
                                this.jjCheckNAdd(53);
                            }
                            break;
                        case 59:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 58;
                            break;
                        case 60:
                            if(this.curChar === 116 && kind > 117) kind = 117;
                            break;
                        case 61:
                            if(this.curChar === 103) {
                                this.jjCheckNAdd(60);
                            }
                            break;
                        case 62:
                            if(this.curChar === 101 && kind > 118) kind = 118;
                            break;
                        case 63:
                        case 93:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(62);
                            }
                            break;
                        case 64:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 63;
                            break;
                        case 65:
                            if(this.curChar === 100 && kind > 126) kind = 126;
                            break;
                        case 66:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 65;
                            break;
                        case 67:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 66;
                            break;
                        case 70:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 69;
                            break;
                        case 71:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 70;
                            break;
                        case 73:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 72;
                            break;
                        case 74:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 73;
                            break;
                        case 76:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 75;
                            break;
                        case 77:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 76;
                            break;
                        case 80:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 79;
                            break;
                        case 81:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 80;
                            break;
                        case 84:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 83;
                            break;
                        case 85:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 84;
                            break;
                        case 86:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 85;
                            break;
                        case 89:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 88;
                            break;
                        case 90:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 89;
                            break;
                        case 91:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 90;
                            break;
                        case 92:
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(60, 93);
                            }
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 0:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(29, 30);
                        }
                            break;
                        case 94:
                        case 29:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(29, 30);
                        }
                            break;
                        case 1:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(411, 413);
                            }
                            break;
                        case 8:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(408, 410);
                            }
                            break;
                        case 16:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(423, 424);
                            }
                            break;
                        case 19:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(425, 426);
                            }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 94 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    /*private*/ jjStopStringLiteralDfa_4(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        switch((pos)) {
            case 0:
                if((!active2.and(16).eq(0))) return 2;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(7168).eq(0))) {
                    this.jjmatchedKind = 141;
                    return 100;
                }
                if((!active1.and(bigInt("1153062242095202304")).eq(0))) return 46;
                if((!active1.and(bigInt("576461130260545536")).eq(0))) return 50;
                if((!active1.and(8796093022208).eq(0)) || (!active2.and(1).eq(0))) return 44;
                return -1;
            case 1:
                if((!active2.and(3072).eq(0))) return 100;
                if((!active1.and(bigInt("576461095900807168")).eq(0))) return 49;
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    if(this.jjmatchedPos !== 1) {
                        this.jjmatchedKind = 141;
                        this.jjmatchedPos = 1;
                    }
                    return 100;
                }
                return -1;
            case 2:
                if((!active1.and(6442450944).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 2;
                    return 100;
                }
                return -1;
            case 3:
                if((!active1.and(2147483648).eq(0)) || (!active2.and(4096).eq(0))) {
                    this.jjmatchedKind = 141;
                    this.jjmatchedPos = 3;
                    return 100;
                }
                if((!active1.and(4294967296).eq(0))) return 100;
                return -1;
            default:
                return -1;
        }
    }

    /*private*/ jjStartNfa_4(pos : number, active0 : number|BigInteger, active1 : number|BigInteger, active2 : number|BigInteger) : number {
        return this.jjMoveNfa_4(this.jjStopStringLiteralDfa_4(pos, active0, active1, active2), pos + 1);
    }

    /*private*/ jjMoveStringLiteralDfa0_4() : number {
        switch((this.curChar)) {
            case 33:
                this.jjmatchedKind = 128;
                return this.jjMoveStringLiteralDfa1_4(8796093022208, 0);
            case 37:
                this.jjmatchedKind = 125;
                return this.jjMoveStringLiteralDfa1_4(bigInt("281474976710656"), 0);
            case 40:
                return this.jjStopAtPos(0, 134);
            case 41:
                return this.jjStopAtPos(0, 135);
            case 42:
                this.jjmatchedKind = 121;
                return this.jjMoveStringLiteralDfa1_4(bigInt("288300744895889408"), 0);
            case 43:
                this.jjmatchedKind = 119;
                return this.jjMoveStringLiteralDfa1_4(bigInt("580542139465728"), 0);
            case 44:
                return this.jjStopAtPos(0, 129);
            case 45:
                this.jjmatchedKind = 120;
                return this.jjMoveStringLiteralDfa1_4(bigInt("1161084278931456"), 0);
            case 46:
                this.jjmatchedKind = 99;
                return this.jjMoveStringLiteralDfa1_4(bigInt("576461095900807168"), 0);
            case 47:
                this.jjmatchedKind = 124;
                return this.jjMoveStringLiteralDfa1_4(bigInt("140737488355328"), 0);
            case 58:
                return this.jjStopAtPos(0, 131);
            case 59:
                return this.jjStopAtPos(0, 130);
            case 61:
                this.jjmatchedKind = 105;
                return this.jjMoveStringLiteralDfa1_4(4398046511104, 0);
            case 62:
                return this.jjStopAtPos(0, 147);
            case 63:
                this.jjmatchedKind = 103;
                return this.jjMoveStringLiteralDfa1_4(1099511627776, 0);
            case 91:
                return this.jjStartNfaWithStates_4(0, 132, 2);
            case 93:
                return this.jjStopAtPos(0, 133);
            case 97:
                return this.jjMoveStringLiteralDfa1_4(0, 2048);
            case 102:
                return this.jjMoveStringLiteralDfa1_4(2147483648, 0);
            case 105:
                return this.jjMoveStringLiteralDfa1_4(0, 1024);
            case 116:
                return this.jjMoveStringLiteralDfa1_4(4294967296, 0);
            case 117:
                return this.jjMoveStringLiteralDfa1_4(0, 4096);
            case 123:
                return this.jjStopAtPos(0, 136);
            case 125:
                return this.jjStopAtPos(0, 137);
            default:
                return this.jjMoveNfa_4(1, 0);
        }
    }

    /*private*/ jjMoveStringLiteralDfa1_4(active1 : number|BigInteger, active2 : number|BigInteger) : number {
        active1 = FMParserTokenManager.toBigInt(active1);
        active2 = FMParserTokenManager.toBigInt(active2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_4(0, 0, active1, active2);
            return 1;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(bigInt("288230376151711744")).eq(0))) return this.jjStopAtPos(1, 122);
                break;
            case 43:
                if((!active1.and(bigInt("562949953421312")).eq(0))) return this.jjStopAtPos(1, 113);
                break;
            case 45:
                if((!active1.and(bigInt("1125899906842624")).eq(0))) return this.jjStopAtPos(1, 114);
                break;
            case 46:
                if((!active1.and(68719476736).eq(0))) {
                    this.jjmatchedKind = 100;
                    this.jjmatchedPos = 1;
                }
                return this.jjMoveStringLiteralDfa2_4(active1, bigInt("576461027181330432"), active2, 0);
            case 61:
                if((!active1.and(4398046511104).eq(0))) return this.jjStopAtPos(1, 106); else if((!active1.and(8796093022208).eq(0))) return this.jjStopAtPos(1, 107); else if((!active1.and(17592186044416).eq(0))) return this.jjStopAtPos(1, 108); else if((!active1.and(35184372088832).eq(0))) return this.jjStopAtPos(1, 109); else if((!active1.and(70368744177664).eq(0))) return this.jjStopAtPos(1, 110); else if((!active1.and(bigInt("140737488355328")).eq(0))) return this.jjStopAtPos(1, 111); else if((!active1.and(bigInt("281474976710656")).eq(0))) return this.jjStopAtPos(1, 112);
                break;
            case 63:
                if((!active1.and(1099511627776).eq(0))) return this.jjStopAtPos(1, 104);
                break;
            case 97:
                return this.jjMoveStringLiteralDfa2_4(active1, 2147483648, active2, 0);
            case 110:
                if((!active2.and(1024).eq(0))) return this.jjStartNfaWithStates_4(1, 138, 100);
                break;
            case 114:
                return this.jjMoveStringLiteralDfa2_4(active1, 4294967296, active2, 0);
            case 115:
                if((!active2.and(2048).eq(0))) return this.jjStartNfaWithStates_4(1, 139, 100);
                return this.jjMoveStringLiteralDfa2_4(active1, 0, active2, 4096);
            default:
                break;
        }
        return this.jjStartNfa_4(0, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa2_4(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_4(0, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_4(1, 0, active1, active2);
            return 2;
        }
        switch((this.curChar)) {
            case 42:
                if((!active1.and(274877906944).eq(0))) return this.jjStopAtPos(2, 102);
                break;
            case 46:
                if((!active1.and(bigInt("576460752303423488")).eq(0))) return this.jjStopAtPos(2, 123);
                break;
            case 105:
                return this.jjMoveStringLiteralDfa3_4(active1, 0, active2, 4096);
            case 108:
                return this.jjMoveStringLiteralDfa3_4(active1, 2147483648, active2, 0);
            case 117:
                return this.jjMoveStringLiteralDfa3_4(active1, 4294967296, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_4(1, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa3_4(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_4(1, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_4(2, 0, active1, active2);
            return 3;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(4294967296).eq(0))) return this.jjStartNfaWithStates_4(3, 96, 100);
                break;
            case 110:
                return this.jjMoveStringLiteralDfa4_4(active1, 0, active2, 4096);
            case 115:
                return this.jjMoveStringLiteralDfa4_4(active1, 2147483648, active2, 0);
            default:
                break;
        }
        return this.jjStartNfa_4(2, 0, active1, active2);
    }

    /*private*/ jjMoveStringLiteralDfa4_4(old1 : number|BigInteger, active1 : number|BigInteger, old2 : number|BigInteger, active2 : number|BigInteger) : number {
        old1 = FMParserTokenManager.toBigInt(old1);
        old2 = FMParserTokenManager.toBigInt(old2);
        active1 = FMParserTokenManager.toBigInt(active1).and(old1);
        active2 = FMParserTokenManager.toBigInt(active2).and(old2);
        if(active1.or(active2).eq(0)) return this.jjStartNfa_4(2, 0, old1, old2);
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            this.jjStopStringLiteralDfa_4(3, 0, active1, active2);
            return 4;
        }
        switch((this.curChar)) {
            case 101:
                if((!active1.and(2147483648).eq(0))) return this.jjStartNfaWithStates_4(4, 95, 100);
                break;
            case 103:
                if((!active2.and(4096).eq(0))) return this.jjStartNfaWithStates_4(4, 140, 100);
                break;
            default:
                break;
        }
        return this.jjStartNfa_4(3, 0, active1, active2);
    }

    /*private*/ jjStartNfaWithStates_4(pos : number, kind : number, state : number) : number {
        this.jjmatchedKind = kind;
        this.jjmatchedPos = pos;
        try {
            this.curChar = (this.input_stream.readChar()).charCodeAt(0);
        } catch(e) {
            return pos + 1;
        }
        return this.jjMoveNfa_4(state, pos + 1);
    }

    /*private*/ jjMoveNfa_4(startState : number, curPos : number) : number {
        let startsAt : number = 0;
        this.jjnewStateCnt = 100;
        let i : number = 1;
        this.jjstateSet[0] = startState;
        let kind : number = 2147483647;
        for(; ; ) {
            if(++this.jjround === 2147483647) this.ReInitRounds();
            if(this.curChar < 64) {
                let l : number = 1 << this.curChar;
                do {
                    switch((this.jjstateSet[--i])) {
                        case 46:
                            if(this.curChar === 62 && kind > 148) kind = 148;
                            break;
                        case 49:
                            if(this.curChar === 33) {
                                if(kind > 101) kind = 101;
                            } else if(this.curChar === 60) {
                                if(kind > 101) kind = 101;
                            }
                            break;
                        case 50:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 51;
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 49;
                            break;
                        case 1:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                if(kind > 97) kind = 97;
                                {
                                    this.jjCheckNAddStates(427, 429);
                                }
                            } else if((4294977024 & l) !== 0) {
                                if(kind > 85) kind = 85;
                                {
                                    this.jjCheckNAdd(0);
                                }
                            } else if(this.curChar === 38) {
                                this.jjAddStates(430, 435);
                            } else if(this.curChar === 46) {
                                this.jjAddStates(436, 437);
                            } else if(this.curChar === 47) {
                                this.jjAddStates(438, 439);
                            } else if(this.curChar === 33) {
                                this.jjCheckNAdd(44);
                            } else if(this.curChar === 35) {
                                this.jjCheckNAdd(38);
                            } else if(this.curChar === 36) {
                                this.jjCheckNAdd(38);
                            } else if(this.curChar === 60) {
                                this.jjCheckNAdd(27);
                            } else if(this.curChar === 39) {
                                this.jjCheckNAddStates(356, 358);
                            } else if(this.curChar === 34) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            if(this.curChar === 36) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 38) {
                                if(kind > 126) kind = 126;
                            } else if(this.curChar === 60) {
                                if(kind > 115) kind = 115;
                            }
                            if(this.curChar === 60) this.jjstateSet[this.jjnewStateCnt++] = 2;
                            break;
                        case 2:
                            if((42949672960 & l) !== 0) this.jjstateSet[this.jjnewStateCnt++] = 4; else if(this.curChar === 61) {
                                if(kind > 142) kind = 142;
                            }
                            break;
                        case 100:
                        case 34:
                            if((bigInt("287948969894477824").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 0:
                            if((4294977024 & l) === 0) break;
                            if(kind > 85) kind = 85;
                        {
                            this.jjCheckNAdd(0);
                        }
                            break;
                        case 3:
                            if(this.curChar === 45 && kind > 86) kind = 86;
                            break;
                        case 4:
                            if(this.curChar === 45) this.jjstateSet[this.jjnewStateCnt++] = 3;
                            break;
                        case 5:
                            if(this.curChar === 34) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 6:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 9:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 10:
                            if(this.curChar === 34 && kind > 93) kind = 93;
                            break;
                        case 11:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 12:
                            if(this.curChar === 39) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 13:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 16:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 17:
                            if(this.curChar === 39 && kind > 93) kind = 93;
                            break;
                        case 18:
                            if((!bigInt("2305843576149377024").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 20:
                            if(this.curChar === 34) {
                                this.jjCheckNAddTwoStates(21, 22);
                            }
                            break;
                        case 21:
                            if((-17179869185 & l) !== 0) {
                                this.jjCheckNAddTwoStates(21, 22);
                            }
                            break;
                        case 22:
                            if(this.curChar === 34 && kind > 94) kind = 94;
                            break;
                        case 23:
                            if(this.curChar === 39) {
                                this.jjCheckNAddTwoStates(24, 25);
                            }
                            break;
                        case 24:
                            if((-549755813889 & l) !== 0) {
                                this.jjCheckNAddTwoStates(24, 25);
                            }
                            break;
                        case 25:
                            if(this.curChar === 39 && kind > 94) kind = 94;
                            break;
                        case 26:
                            if(this.curChar === 60 && kind > 115) kind = 115;
                            break;
                        case 27:
                            if(this.curChar === 61 && kind > 116) kind = 116;
                            break;
                        case 28:
                            if(this.curChar === 60) {
                                this.jjCheckNAdd(27);
                            }
                            break;
                        case 29:
                        case 88:
                            if(this.curChar === 38 && kind > 126) kind = 126;
                            break;
                        case 33:
                            if(this.curChar !== 36) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 36:
                            if((bigInt("288335929267978240").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 39:
                            if(this.curChar === 36) {
                                this.jjCheckNAdd(38);
                            }
                            break;
                        case 40:
                            if(this.curChar === 35) {
                                this.jjCheckNAdd(38);
                            }
                            break;
                        case 41:
                            if(this.curChar === 61 && kind > 142) kind = 142;
                            break;
                        case 43:
                            if(this.curChar === 33) {
                                this.jjCheckNAdd(44);
                            }
                            break;
                        case 44:
                            if((4294977024 & l) === 0) break;
                            if(kind > 152) kind = 152;
                        {
                            this.jjCheckNAdd(44);
                        }
                            break;
                        case 45:
                            if(this.curChar === 47) {
                                this.jjAddStates(438, 439);
                            }
                            break;
                        case 48:
                            if(this.curChar === 46) {
                                this.jjAddStates(436, 437);
                            }
                            break;
                        case 51:
                            if(this.curChar === 33 && kind > 101) kind = 101;
                            break;
                        case 52:
                            if(this.curChar === 46) this.jjstateSet[this.jjnewStateCnt++] = 51;
                            break;
                        case 53:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAddStates(427, 429);
                        }
                            break;
                        case 54:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 97) kind = 97;
                        {
                            this.jjCheckNAdd(54);
                        }
                            break;
                        case 55:
                            if((!bigInt("287948901175001088").and(l).eq(0))) {
                                this.jjCheckNAddTwoStates(55, 56);
                            }
                            break;
                        case 56:
                            if(this.curChar === 46) {
                                this.jjCheckNAdd(57);
                            }
                            break;
                        case 57:
                            if((bigInt("287948901175001088").and(l).eq(0))) break;
                            if(kind > 98) kind = 98;
                        {
                            this.jjCheckNAdd(57);
                        }
                            break;
                        case 74:
                            if(this.curChar === 38) {
                                this.jjAddStates(430, 435);
                            }
                            break;
                        case 75:
                            if(this.curChar === 59 && kind > 115) kind = 115;
                            break;
                        case 78:
                            if(this.curChar === 59) {
                                this.jjCheckNAdd(27);
                            }
                            break;
                        case 81:
                            if(this.curChar === 59 && kind > 117) kind = 117;
                            break;
                        case 84:
                            if(this.curChar === 61 && kind > 118) kind = 118;
                            break;
                        case 85:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 84;
                            break;
                        case 89:
                            if(this.curChar === 59 && kind > 126) kind = 126;
                            break;
                        case 93:
                            if(this.curChar === 38) this.jjstateSet[this.jjnewStateCnt++] = 92;
                            break;
                        case 94:
                            if(this.curChar === 59) this.jjstateSet[this.jjnewStateCnt++] = 93;
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else if(this.curChar < 128) {
                let l : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 46:
                            if(this.curChar === 93 && kind > 148) kind = 148;
                            break;
                        case 1:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 92) {
                                this.jjAddStates(440, 444);
                            } else if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 41; else if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 31;
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(66, 99);
                            } else if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(59, 61);
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            } else if(this.curChar === 124) {
                                if(kind > 127) kind = 127;
                            } else if(this.curChar === 114) {
                                this.jjAddStates(367, 368);
                            } else if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 2;
                            break;
                        case 100:
                            if((!bigInt("576460745995190271").and(l).eq(0))) {
                                if(kind > 141) kind = 141;
                                {
                                    this.jjCheckNAddTwoStates(34, 35);
                                }
                            } else if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 6:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 7:
                            if(this.curChar === 92) {
                                this.jjAddStates(369, 370);
                            }
                            break;
                        case 8:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 9;
                            break;
                        case 9:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 11:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(359, 361);
                            }
                            break;
                        case 13:
                            if((-268435457 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 14:
                            if(this.curChar === 92) {
                                this.jjAddStates(371, 372);
                            }
                            break;
                        case 15:
                            if(this.curChar === 120) this.jjstateSet[this.jjnewStateCnt++] = 16;
                            break;
                        case 16:
                            if((541165879422 & l) !== 0) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 18:
                            if((!bigInt("582179063439818752").and(l).eq(0))) {
                                this.jjCheckNAddStates(356, 358);
                            }
                            break;
                        case 19:
                            if(this.curChar === 114) {
                                this.jjAddStates(367, 368);
                            }
                            break;
                        case 21:
                        {
                            this.jjAddStates(373, 374);
                        }
                            break;
                        case 24:
                        {
                            this.jjAddStates(375, 376);
                        }
                            break;
                        case 30:
                        case 31:
                            if(this.curChar === 124 && kind > 127) kind = 127;
                            break;
                        case 32:
                            if(this.curChar === 124) this.jjstateSet[this.jjnewStateCnt++] = 31;
                            break;
                        case 33:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 34:
                            if((bigInt("576460745995190271").and(l).eq(0))) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 35:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 37:
                            if(this.curChar === 92) {
                                this.jjCheckNAdd(36);
                            }
                            break;
                        case 38:
                            if(this.curChar === 123 && kind > 142) kind = 142;
                            break;
                        case 42:
                            if(this.curChar === 91) this.jjstateSet[this.jjnewStateCnt++] = 41;
                            break;
                        case 58:
                            if(this.curChar === 108) {
                                this.jjCheckNAddTwoStates(59, 61);
                            }
                            break;
                        case 59:
                            if(this.curChar === 116 && kind > 115) kind = 115;
                            break;
                        case 60:
                            if(this.curChar === 101 && kind > 116) kind = 116;
                            break;
                        case 61:
                        case 64:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(60);
                            }
                            break;
                        case 62:
                            if(this.curChar === 92) {
                                this.jjAddStates(440, 444);
                            }
                            break;
                        case 63:
                            if(this.curChar === 108) {
                                this.jjCheckNAdd(59);
                            }
                            break;
                        case 65:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 64;
                            break;
                        case 66:
                            if(this.curChar === 116 && kind > 117) kind = 117;
                            break;
                        case 67:
                            if(this.curChar === 103) {
                                this.jjCheckNAdd(66);
                            }
                            break;
                        case 68:
                            if(this.curChar === 101 && kind > 118) kind = 118;
                            break;
                        case 69:
                        case 99:
                            if(this.curChar === 116) {
                                this.jjCheckNAdd(68);
                            }
                            break;
                        case 70:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 69;
                            break;
                        case 71:
                            if(this.curChar === 100 && kind > 126) kind = 126;
                            break;
                        case 72:
                            if(this.curChar === 110) this.jjstateSet[this.jjnewStateCnt++] = 71;
                            break;
                        case 73:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 72;
                            break;
                        case 76:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 75;
                            break;
                        case 77:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 76;
                            break;
                        case 79:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 78;
                            break;
                        case 80:
                            if(this.curChar === 108) this.jjstateSet[this.jjnewStateCnt++] = 79;
                            break;
                        case 82:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 81;
                            break;
                        case 83:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 82;
                            break;
                        case 86:
                            if(this.curChar === 116) this.jjstateSet[this.jjnewStateCnt++] = 85;
                            break;
                        case 87:
                            if(this.curChar === 103) this.jjstateSet[this.jjnewStateCnt++] = 86;
                            break;
                        case 90:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 89;
                            break;
                        case 91:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 90;
                            break;
                        case 92:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 91;
                            break;
                        case 95:
                            if(this.curChar === 112) this.jjstateSet[this.jjnewStateCnt++] = 94;
                            break;
                        case 96:
                            if(this.curChar === 109) this.jjstateSet[this.jjnewStateCnt++] = 95;
                            break;
                        case 97:
                            if(this.curChar === 97) this.jjstateSet[this.jjnewStateCnt++] = 96;
                            break;
                        case 98:
                            if(this.curChar === 103) {
                                this.jjCheckNAddTwoStates(66, 99);
                            }
                            break;
                        default:
                            break;
                    }
                } while((i !== startsAt));
            } else {
                let hiByte : number = (this.curChar >> 8);
                let i1 : number = hiByte >> 6;
                let l1 : number = 1 << (hiByte & 63);
                let i2 : number = (this.curChar & 255) >> 6;
                let l2 : number = 1 << (this.curChar & 63);
                do {
                    switch((this.jjstateSet[--i])) {
                        case 1:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 100:
                        case 34:
                            if(!FMParserTokenManager.jjCanMove_1(hiByte, i1, i2, l1, l2)) break;
                            if(kind > 141) kind = 141;
                        {
                            this.jjCheckNAddTwoStates(34, 35);
                        }
                            break;
                        case 6:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(359, 361);
                            }
                            break;
                        case 13:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(356, 358);
                            }
                            break;
                        case 21:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(373, 374);
                            }
                            break;
                        case 24:
                            if(FMParserTokenManager.jjCanMove_0(hiByte, i1, i2, l1, l2)) {
                                this.jjAddStates(375, 376);
                            }
                            break;
                        default:
                            if(i1 === 0 || l1 === 0 || i2 === 0 || l2 === 0) break; else break;
                    }
                } while((i !== startsAt));
            }
            if(kind !== 2147483647) {
                this.jjmatchedKind = kind;
                this.jjmatchedPos = curPos;
                kind = 2147483647;
            }
            ++curPos;
            if((i = this.jjnewStateCnt) === (startsAt = 100 - (this.jjnewStateCnt = startsAt))) return curPos;
            try {
                this.curChar = (this.input_stream.readChar()).charCodeAt(0);
            } catch(e) {
                return curPos;
            }
        }
    }

    static jjnextStates : number[] = [10, 12, 4, 5, 3, 4, 5, 697, 712, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 404, 405, 413, 414, 423, 424, 431, 432, 443, 444, 455, 456, 467, 468, 477, 478, 488, 489, 499, 500, 512, 513, 522, 523, 539, 540, 551, 552, 570, 571, 583, 584, 597, 598, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 636, 637, 638, 650, 651, 656, 662, 663, 665, 12, 21, 24, 31, 36, 45, 50, 58, 65, 70, 77, 84, 90, 98, 105, 114, 120, 130, 136, 141, 148, 153, 161, 174, 183, 199, 209, 218, 227, 234, 242, 253, 262, 269, 277, 278, 286, 291, 296, 305, 314, 321, 331, 339, 350, 357, 367, 5, 6, 14, 15, 38, 41, 47, 48, 178, 179, 187, 188, 201, 202, 211, 212, 222, 223, 229, 230, 231, 236, 237, 238, 244, 245, 246, 255, 256, 257, 264, 265, 266, 271, 272, 273, 279, 280, 281, 283, 284, 285, 288, 289, 290, 293, 294, 295, 298, 299, 307, 308, 309, 323, 324, 325, 341, 342, 343, 361, 362, 400, 401, 407, 408, 416, 417, 426, 427, 434, 435, 446, 447, 460, 461, 470, 471, 480, 481, 491, 492, 502, 503, 515, 516, 527, 528, 544, 545, 556, 557, 573, 574, 586, 587, 600, 601, 628, 629, 642, 643, 700, 701, 703, 708, 709, 704, 710, 703, 705, 706, 708, 709, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 685, 637, 686, 651, 689, 692, 663, 693, 193, 198, 562, 567, 658, 659, 699, 711, 708, 709, 52, 53, 54, 75, 78, 81, 85, 86, 95, 48, 50, 44, 45, 13, 14, 17, 6, 7, 10, 61, 63, 65, 68, 71, 20, 23, 8, 11, 15, 18, 21, 22, 24, 25, 49, 50, 51, 72, 75, 78, 82, 83, 92, 45, 47, 58, 60, 62, 65, 68, 3, 5, 48, 49, 50, 71, 74, 77, 81, 82, 91, 44, 46, 40, 41, 8, 9, 12, 1, 2, 5, 57, 59, 61, 64, 67, 3, 6, 10, 13, 16, 17, 19, 20, 54, 55, 56, 77, 80, 83, 87, 88, 97, 50, 52, 46, 47, 63, 65, 67, 70, 73];

    /*private*/ static jjCanMove_0(hiByte : number, i1 : number, i2 : number, l1 : number, l2 : number) : boolean {
        switch((hiByte)) {
            case 0:
                return ((!FMParserTokenManager.jjbitVec2[i2].and(l2).eq(0)));
            default:
                return (!FMParserTokenManager.jjbitVec0[i1].and(l1).eq(0));
        }
    }

    /*private*/ static jjCanMove_1(hiByte : number, i1 : number, i2 : number, l1 : number, l2 : number) : boolean {
        switch((hiByte)) {
            case 0:
                return ((!FMParserTokenManager.jjbitVec4[i2].and(l2).eq(0)));
            case 32:
                return ((!FMParserTokenManager.jjbitVec5[i2].and(l2).eq(0)));
            case 33:
                return ((!FMParserTokenManager.jjbitVec6[i2].and(l2).eq(0)));
            case 44:
                return ((!FMParserTokenManager.jjbitVec7[i2].and(l2).eq(0)));
            case 45:
                return ((!FMParserTokenManager.jjbitVec8[i2].and(l2).eq(0)));
            case 46:
                return ((!FMParserTokenManager.jjbitVec9[i2].and(l2).eq(0)));
            case 48:
                return ((!FMParserTokenManager.jjbitVec10[i2].and(l2).eq(0)));
            case 49:
                return ((!FMParserTokenManager.jjbitVec11[i2].and(l2).eq(0)));
            case 51:
                return ((!FMParserTokenManager.jjbitVec12[i2].and(l2).eq(0)));
            case 77:
                return ((!FMParserTokenManager.jjbitVec13[i2].and(l2).eq(0)));
            case 164:
                return ((!FMParserTokenManager.jjbitVec14[i2].and(l2).eq(0)));
            case 166:
                return ((!FMParserTokenManager.jjbitVec15[i2].and(l2).eq(0)));
            case 167:
                return ((!FMParserTokenManager.jjbitVec16[i2].and(l2).eq(0)));
            case 168:
                return ((!FMParserTokenManager.jjbitVec17[i2].and(l2).eq(0)));
            case 169:
                return ((!FMParserTokenManager.jjbitVec18[i2].and(l2).eq(0)));
            case 170:
                return ((!FMParserTokenManager.jjbitVec19[i2].and(l2).eq(0)));
            case 171:
                return ((!FMParserTokenManager.jjbitVec20[i2].and(l2).eq(0)));
            case 215:
                return ((!FMParserTokenManager.jjbitVec21[i2].and(l2).eq(0)));
            case 251:
                return ((!FMParserTokenManager.jjbitVec22[i2].and(l2).eq(0)));
            case 253:
                return ((!FMParserTokenManager.jjbitVec23[i2].and(l2).eq(0)));
            case 254:
                return ((!FMParserTokenManager.jjbitVec24[i2].and(l2).eq(0)));
            case 255:
                return ((!FMParserTokenManager.jjbitVec25[i2].and(l2).eq(0)));
            default:
                return (!FMParserTokenManager.jjbitVec3[i1].and(l1).eq(0));
        }
    }

    /**
     * Token literal values.
     */
    public static jjstrLiteralImages : Array<string> = ["", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "${", "#{", "[=", null, null, null, null, null, null, null, null, null, null, "false", "true", null, null, ".", "..", null, "..*", "?", "??", "=", "==", "!=", "+=", "-=", "*=", "/=", "%=", "++", "--", null, null, null, null, "+", "-", "*", "**", "...", "/", "%", null, null, "!", ",", ";", ":", "[", "]", "(", ")", "{", "}", "in", "as", "using", null, null, null, null, null, null, ">", null, ">", ">=", null, null, null, null, null, null];

    jjFillToken() : Token {
        let t : Token;
        let curTokenImage : string;
        let beginLine : number;
        let endLine : number;
        let beginColumn : number;
        let endColumn : number;
        let im : string = FMParserTokenManager.jjstrLiteralImages[this.jjmatchedKind];
        curTokenImage = (im == null)?this.input_stream.GetImage():im;
        beginLine = this.input_stream.getBeginLine();
        beginColumn = this.input_stream.getBeginColumn();
        endLine = this.input_stream.getEndLine();
        endColumn = this.input_stream.getEndColumn();
        t = Token.newToken(this.jjmatchedKind, curTokenImage);
        t.beginLine = beginLine;
        t.endLine = endLine;
        t.beginColumn = beginColumn;
        t.endColumn = endColumn;
        return t;
    }

    curLexState : number = 0;

    defaultLexState : number = 0;

    jjnewStateCnt : number;

    jjround : number;

    jjmatchedPos : number;

    jjmatchedKind : number;

    /**
     * Get the next Token.
     * @return {Token}
     */
    public getNextToken() : Token {
        let matchedToken : Token;
        let curPos : number = 0;
        EOFLoop: for(; ; ) {
            try {
                this.curChar = (this.input_stream.BeginToken()).charCodeAt(0);
            } catch(e) {
                this.jjmatchedKind = 0;
                this.jjmatchedPos = -1;
                matchedToken = this.jjFillToken();
                return matchedToken;
            }
            this.image = this.jjimage;
            this.image.setLength(0);
            this.jjimageLen = 0;
            switch((this.curLexState)) {
                case 0:
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_0();
                    break;
                case 1:
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_1();
                    break;
                case 2:
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_2();
                    break;
                case 3:
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_3();
                    break;
                case 4:
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_4();
                    break;
                case 5:
                    try {
                        this.input_stream.backup(0);
                        while(((this.curChar < 64 && (!bigInt("4611686018427387904").and(1 << this.curChar).eq(0))) || (this.curChar >> 6) === 1 && (536870912 & (1 << (this.curChar & 63))) !== 0)) this.curChar = (this.input_stream.BeginToken()).charCodeAt(0);
                    } catch(e1) {
                        continue EOFLoop;
                    }
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_5();
                    break;
                case 6:
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_6();
                    break;
                case 7:
                    this.jjmatchedKind = 2147483647;
                    this.jjmatchedPos = 0;
                    curPos = this.jjMoveStringLiteralDfa0_7();
                    break;
            }
            if(this.jjmatchedKind !== 2147483647) {
                if(this.jjmatchedPos + 1 < curPos) this.input_stream.backup(curPos - this.jjmatchedPos - 1);
                if((FMParserTokenManager.jjtoToken[this.jjmatchedKind >> 6] & (1 << (this.jjmatchedKind & 63))) !== 0) {
                    matchedToken = this.jjFillToken();
                    this.TokenLexicalActions(matchedToken);
                    if(FMParserTokenManager.jjnewLexState[this.jjmatchedKind] !== -1) this.curLexState = FMParserTokenManager.jjnewLexState[this.jjmatchedKind];
                    return matchedToken;
                } else {
                    this.SkipLexicalActions(null);
                    if(FMParserTokenManager.jjnewLexState[this.jjmatchedKind] !== -1) this.curLexState = FMParserTokenManager.jjnewLexState[this.jjmatchedKind];
                    continue EOFLoop;
                }
            }
            let error_line : number = this.input_stream.getEndLine();
            let error_column : number = this.input_stream.getEndColumn();
            let error_after : string = null;
            let EOFSeen : boolean = false;
            try {
                this.input_stream.readChar();
                this.input_stream.backup(1);
            } catch(e1) {
                EOFSeen = true;
                error_after = curPos <= 1?"":this.input_stream.GetImage();
                if(this.curChar == '\n'.charCodeAt(0) || this.curChar == '\r'.charCodeAt(0)) {
                    error_line++;
                    error_column = 0;
                } else error_column++;
            }
            if(!EOFSeen) {
                this.input_stream.backup(1);
                error_after = curPos <= 1?"":this.input_stream.GetImage();
            }
            throw new TokenMgrError(EOFSeen, this.curLexState, error_line, error_column, error_after, String.fromCharCode(this.curChar), TokenMgrError.LEXICAL_ERROR);
        }
    }

    SkipLexicalActions(matchedToken : Token) {
        switch((this.jjmatchedKind)) {
            case 91:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                if(this.parenthesisNesting > 0) this.SwitchTo(FMParserConstants.IN_PAREN); else if(this.inInvocation) this.SwitchTo(FMParserConstants.NAMED_PARAMETER_EXPRESSION); else this.SwitchTo(FMParserConstants.FM_EXPRESSION);
                break;
            default:
                break;
        }
    }

    TokenLexicalActions(matchedToken : Token) {
        switch((this.jjmatchedKind)) {
            case 6:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 7:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 8:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 9:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 4), FMParserConstants.FM_EXPRESSION);
                break;
            case 10:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 11:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 13:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 3), FMParserConstants.FM_EXPRESSION);
                break;
            case 14:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 15:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 16:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 17:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 18:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 19:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 20:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 21:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 22:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 23:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 24:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 25:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 26:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 27:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 28:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 29:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 6), FMParserConstants.FM_EXPRESSION);
                break;
            case 30:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 4), FMParserConstants.DEFAULT);
                break;
            case 31:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 2), FMParserConstants.DEFAULT);
                break;
            case 32:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 33:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.NO_PARSE);
                this.noparseTag = "comment";
                break;
            case 34:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.noparseTag = "-->";
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.NO_PARSE);
                break;
            case 35:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                let tagNamingConvention : number = FMParserTokenManager.getTagNamingConvention(matchedToken, 2);
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, tagNamingConvention, FMParserConstants.NO_PARSE);
                this.noparseTag = tagNamingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION?"noParse":"noparse";
                break;
            case 36:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 37:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 38:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 39:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 40:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 41:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 42:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 3), FMParserConstants.DEFAULT);
                break;
            case 43:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 44:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 45:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 46:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 47:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 48:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 6), FMParserConstants.DEFAULT);
                break;
            case 49:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 4), FMParserConstants.DEFAULT);
                break;
            case 50:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 2), FMParserConstants.DEFAULT);
                break;
            case 51:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 52:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 53:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 54:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 55:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 56:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 57:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 58:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 59:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 60:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 61:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 62:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 63:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 64:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 65:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 66:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 67:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 68:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 69:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 70:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.FM_EXPRESSION);
                break;
            case 71:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int(matchedToken, FMParserConstants.DEFAULT);
                break;
            case 72:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 2), FMParserConstants.DEFAULT);
                break;
            case 73:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.handleTagSyntaxAndSwitch$freemarker_core_Token$int$int(matchedToken, FMParserTokenManager.getTagNamingConvention(matchedToken, 2), FMParserConstants.DEFAULT);
                break;
            case 74:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.unifiedCall(matchedToken);
                break;
            case 75:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.unifiedCallEnd(matchedToken);
                break;
            case 76:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.ftlHeader(matchedToken);
                break;
            case 77:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                this.ftlHeader(matchedToken);
                break;
            case 78:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                if(!this.tagSyntaxEstablished && this.incompatibleImprovements < /*_TemplateAPI.VERSION_INT_2_3_19*/2003019) {
                    matchedToken.kind = FMParserConstants.STATIC_TEXT_NON_WS;
                } else {
                    let firstChar : string = matchedToken.image.charAt(0);
                    if(!this.tagSyntaxEstablished && this.autodetectTagSyntax) {
                        this.squBracTagSyntax = ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0));
                        this.tagSyntaxEstablished = true;
                    }
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '<'.charCodeAt(0) && this.squBracTagSyntax) {
                        matchedToken.kind = FMParserConstants.STATIC_TEXT_NON_WS;
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '['.charCodeAt(0) && !this.squBracTagSyntax) {
                        matchedToken.kind = FMParserConstants.STATIC_TEXT_NON_WS;
                    } else if(this.strictSyntaxMode) {
                        let dn : string = matchedToken.image;
                        let index : number = dn.indexOf('#');
                        dn = dn.substring(index + 1);
                        if(/* contains */(_CoreAPI.ALL_BUILT_IN_DIRECTIVE_NAMES.contains(<any>(dn)))) {
                            throw new TokenMgrError("#" + dn + " is an existing directive, but the tag is malformed.  (See FreeMarker Manual / Directive Reference.)", TokenMgrError.LEXICAL_ERROR, matchedToken.beginLine, matchedToken.beginColumn + 1, matchedToken.endLine, matchedToken.endColumn);
                        }
                        let tip : string = null;
                        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"set")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"var"))) {
                            tip = "Use #assign or #local or #global, depending on the intented scope (#assign is template-scope). " + FMParserTokenManager.PLANNED_DIRECTIVE_HINT;
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"else_if")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"elif"))) {
                            tip = "Use #elseif.";
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"no_escape"))) {
                            tip = "Use #noescape instead.";
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"method"))) {
                            tip = "Use #function instead.";
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"head")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"template")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"fm"))) {
                            tip = "You may meant #ftl.";
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"try")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"atempt"))) {
                            tip = "You may meant #attempt.";
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"for")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"each")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"iterate")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"iterator"))) {
                            tip = "You may meant #list (http://freemarker.org/docs/ref_directive_list.html).";
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"prefix"))) {
                            tip = "You may meant #import. " + FMParserTokenManager.PLANNED_DIRECTIVE_HINT;
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"item")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"row")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"rows"))) {
                            tip = "You may meant #items.";
                        } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"separator")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"separate")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(dn,"separ"))) {
                            tip = "You may meant #sep.";
                        } else {
                            tip = "Help (latest version): http://freemarker.org/docs/ref_directive_alphaidx.html; you\'re using FreeMarker " + Configuration.getVersion() + ".";
                        }
                        throw new TokenMgrError("Unknown directive: #" + dn + (tip != null?". " + tip:""), TokenMgrError.LEXICAL_ERROR, matchedToken.beginLine, matchedToken.beginColumn + 1, matchedToken.endLine, matchedToken.endColumn);
                    }
                }
                break;
            case 82:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[82]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[82].length;
                this.startInterpolation(matchedToken);
                break;
            case 83:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[83]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[83].length;
                this.startInterpolation(matchedToken);
                break;
            case 84:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[84]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[84].length;
                this.startInterpolation(matchedToken);
                break;
            case 132:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[132]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[132].length;
                ++this.bracketNesting;
                break;
            case 133:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[133]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[133].length;
                if(this.bracketNesting > 0) {
                    --this.bracketNesting;
                } else if(this.interpolationSyntax === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX && this.postInterpolationLexState !== -1) {
                    this.endInterpolation(matchedToken);
                } else {
                    if(!this.squBracTagSyntax && (this.incompatibleImprovements >= /*_TemplateAPI.VERSION_INT_2_3_28*/200328 || this.interpolationSyntax === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX) || this.postInterpolationLexState !== -1) {
                        throw this.newUnexpectedClosingTokenException(matchedToken);
                    }
                    matchedToken.kind = FMParserConstants.DIRECTIVE_END;
                    if(this.inFTLHeader) {
                        this.eatNewline();
                        this.inFTLHeader = false;
                    }
                    this.SwitchTo(FMParserConstants.DEFAULT);
                }
                break;
            case 134:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[134]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[134].length;
                ++this.parenthesisNesting;
                if(this.parenthesisNesting === 1) this.SwitchTo(FMParserConstants.IN_PAREN);
                break;
            case 135:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[135]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[135].length;
                --this.parenthesisNesting;
                if(this.parenthesisNesting === 0) {
                    if(this.inInvocation) this.SwitchTo(FMParserConstants.NAMED_PARAMETER_EXPRESSION); else this.SwitchTo(FMParserConstants.FM_EXPRESSION);
                }
                break;
            case 136:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[136]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[136].length;
                ++this.curlyBracketNesting;
                break;
            case 137:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[137]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[137].length;
                if(this.curlyBracketNesting > 0) {
                    --this.curlyBracketNesting;
                } else if(this.interpolationSyntax !== Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX && this.postInterpolationLexState !== -1) {
                    this.endInterpolation(matchedToken);
                } else {
                    throw this.newUnexpectedClosingTokenException(matchedToken);
                }
                break;
            case 141:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                let s : string = matchedToken.image;
                if(s.indexOf('\\') !== -1) {
                    let srcLn : number = s.length;
                    let newS : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(srcLn - 1);
                    let dstIdx : number = 0;
                    for(let srcIdx : number = 0; srcIdx < srcLn; srcIdx++) {
                        let c : string = s.charAt(srcIdx);
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '\\'.charCodeAt(0)) {
                            newS[dstIdx++] = c;
                        }
                    }
                    matchedToken.image = newS.join('').substr(0, dstIdx);
                }
                break;
            case 142:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                if("".length === 0) {
                    let closerC : string = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(matchedToken.image.charAt(0)) != '['.charCodeAt(0)?'}':']';
                    throw new TokenMgrError("You can\'t use " + matchedToken.image + "..." + closerC + " (an interpolation) here as you are already in FreeMarker-expression-mode. Thus, instead of " + matchedToken.image + "myExpression" + closerC + ", just write myExpression. (" + matchedToken.image + "..." + closerC + " is only used where otherwise static text is expected, i.e., outside FreeMarker tags and interpolations, or inside string literals.)", TokenMgrError.LEXICAL_ERROR, matchedToken.beginLine, matchedToken.beginColumn, matchedToken.endLine, matchedToken.endColumn);
                }
                break;
            case 147:
                this.image.append(FMParserTokenManager.jjstrLiteralImages[147]);
                this.lengthOfMatch = FMParserTokenManager.jjstrLiteralImages[147].length;
                if(this.inFTLHeader) {
                    this.eatNewline();
                    this.inFTLHeader = false;
                }
                if(this.squBracTagSyntax || this.postInterpolationLexState !== -1) {
                    matchedToken.kind = FMParserConstants.NATURAL_GT;
                } else {
                    this.SwitchTo(FMParserConstants.DEFAULT);
                }
                break;
            case 148:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                if(this.tagSyntaxEstablished && (this.incompatibleImprovements >= /*_TemplateAPI.VERSION_INT_2_3_28*/2003028 || this.interpolationSyntax === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX)) {
                    let image : string = matchedToken.image;
                    let lastChar : string = image.charAt(image.length - 1);
                    if(!this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != '>'.charCodeAt(0) || this.squBracTagSyntax && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != ']'.charCodeAt(0)) {
                        throw new TokenMgrError("The tag shouldn\'t end with \"" + lastChar + "\".", TokenMgrError.LEXICAL_ERROR, matchedToken.beginLine, matchedToken.beginColumn, matchedToken.endLine, matchedToken.endColumn);
                    }
                }
                if(this.inFTLHeader) {
                    this.eatNewline();
                    this.inFTLHeader = false;
                }
                this.SwitchTo(FMParserConstants.DEFAULT);
                break;
            case 153:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.noparseTag,"-->"))) {
                    let squareBracket : boolean = /* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(matchedToken.image, "]");
                    if((this.squBracTagSyntax && squareBracket) || (!this.squBracTagSyntax && !squareBracket)) {
                        matchedToken.image = matchedToken.image + ";";
                        this.SwitchTo(FMParserConstants.DEFAULT);
                    }
                }
                break;
            case 154:
                this.image.append(this.input_stream.GetSuffix(this.jjimageLen + (this.lengthOfMatch = this.jjmatchedPos + 1)));
                let st : StringTokenizer = new StringTokenizer(this.image.toString(), " \t\n\r<>[]/#", false);
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(st.nextToken(),this.noparseTag))) {
                    matchedToken.image = matchedToken.image + ";";
                    this.SwitchTo(FMParserConstants.DEFAULT);
                }
                break;
            default:
                break;
        }
    }

    /*private*/ jjCheckNAdd(state : number) {
        if(this.jjrounds[state] !== this.jjround) {
            this.jjstateSet[this.jjnewStateCnt++] = state;
            this.jjrounds[state] = this.jjround;
        }
    }

    /*private*/ jjAddStates(start : number, end : number) {
        do {
            this.jjstateSet[this.jjnewStateCnt++] = FMParserTokenManager.jjnextStates[start];
        } while((start++ !== end));
    }

    /*private*/ jjCheckNAddTwoStates(state1 : number, state2 : number) {
        this.jjCheckNAdd(state1);
        this.jjCheckNAdd(state2);
    }

    /*private*/ jjCheckNAddStates(start : number, end : number) {
        do {
            this.jjCheckNAdd(FMParserTokenManager.jjnextStates[start]);
        } while((start++ !== end));
    }

    public constructor(stream? : any, lexState? : any) {
        if(((stream != null && stream instanceof <any>SimpleCharStream) || stream === null) && ((typeof lexState === 'number') || lexState === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.noparseTag===undefined) this.noparseTag = null;
            if(this.parser===undefined) this.parser = null;
            if(this.curlyBracketNesting===undefined) this.curlyBracketNesting = 0;
            if(this.parenthesisNesting===undefined) this.parenthesisNesting = 0;
            if(this.bracketNesting===undefined) this.bracketNesting = 0;
            if(this.inFTLHeader===undefined) this.inFTLHeader = false;
            if(this.strictSyntaxMode===undefined) this.strictSyntaxMode = false;
            if(this.squBracTagSyntax===undefined) this.squBracTagSyntax = false;
            if(this.autodetectTagSyntax===undefined) this.autodetectTagSyntax = false;
            if(this.tagSyntaxEstablished===undefined) this.tagSyntaxEstablished = false;
            if(this.inInvocation===undefined) this.inInvocation = false;
            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
            if(this.initialNamingConvention===undefined) this.initialNamingConvention = 0;
            if(this.namingConvention===undefined) this.namingConvention = 0;
            if(this.namingConventionEstabilisher===undefined) this.namingConventionEstabilisher = null;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.jjnewStateCnt===undefined) this.jjnewStateCnt = 0;
            if(this.jjround===undefined) this.jjround = 0;
            if(this.jjmatchedPos===undefined) this.jjmatchedPos = 0;
            if(this.jjmatchedKind===undefined) this.jjmatchedKind = 0;
            if(this.input_stream===undefined) this.input_stream = null;
            if(this.jjimageLen===undefined) this.jjimageLen = 0;
            if(this.lengthOfMatch===undefined) this.lengthOfMatch = 0;
            if(this.curChar===undefined) this.curChar = 0;
            this.postInterpolationLexState = -1;
            this.debugStream = System.out;
            this.curLexState = 0;
            this.defaultLexState = 0;
            this.jjrounds = (s => { let a=[]; while(s-->0) a.push(0); return a; })(713);
            this.jjstateSet = (s => { let a=[]; while(s-->0) a.push(0); return a; })(2 * 713);
            this.jjimage = new StringBuilder("");
            this.image = this.jjimage;
            if(this.noparseTag===undefined) this.noparseTag = null;
            if(this.parser===undefined) this.parser = null;
            if(this.curlyBracketNesting===undefined) this.curlyBracketNesting = 0;
            if(this.parenthesisNesting===undefined) this.parenthesisNesting = 0;
            if(this.bracketNesting===undefined) this.bracketNesting = 0;
            if(this.inFTLHeader===undefined) this.inFTLHeader = false;
            if(this.strictSyntaxMode===undefined) this.strictSyntaxMode = false;
            if(this.squBracTagSyntax===undefined) this.squBracTagSyntax = false;
            if(this.autodetectTagSyntax===undefined) this.autodetectTagSyntax = false;
            if(this.tagSyntaxEstablished===undefined) this.tagSyntaxEstablished = false;
            if(this.inInvocation===undefined) this.inInvocation = false;
            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
            if(this.initialNamingConvention===undefined) this.initialNamingConvention = 0;
            if(this.namingConvention===undefined) this.namingConvention = 0;
            if(this.namingConventionEstabilisher===undefined) this.namingConventionEstabilisher = null;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.jjnewStateCnt===undefined) this.jjnewStateCnt = 0;
            if(this.jjround===undefined) this.jjround = 0;
            if(this.jjmatchedPos===undefined) this.jjmatchedPos = 0;
            if(this.jjmatchedKind===undefined) this.jjmatchedKind = 0;
            if(this.input_stream===undefined) this.input_stream = null;
            if(this.jjimageLen===undefined) this.jjimageLen = 0;
            if(this.lengthOfMatch===undefined) this.lengthOfMatch = 0;
            if(this.curChar===undefined) this.curChar = 0;
            (() => {
                this.ReInit$freemarker_core_SimpleCharStream(stream);
                this.SwitchTo(lexState);
            })();
        } else if(((stream != null && stream instanceof <any>SimpleCharStream) || stream === null) && lexState === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.noparseTag===undefined) this.noparseTag = null;
            if(this.parser===undefined) this.parser = null;
            if(this.curlyBracketNesting===undefined) this.curlyBracketNesting = 0;
            if(this.parenthesisNesting===undefined) this.parenthesisNesting = 0;
            if(this.bracketNesting===undefined) this.bracketNesting = 0;
            if(this.inFTLHeader===undefined) this.inFTLHeader = false;
            if(this.strictSyntaxMode===undefined) this.strictSyntaxMode = false;
            if(this.squBracTagSyntax===undefined) this.squBracTagSyntax = false;
            if(this.autodetectTagSyntax===undefined) this.autodetectTagSyntax = false;
            if(this.tagSyntaxEstablished===undefined) this.tagSyntaxEstablished = false;
            if(this.inInvocation===undefined) this.inInvocation = false;
            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
            if(this.initialNamingConvention===undefined) this.initialNamingConvention = 0;
            if(this.namingConvention===undefined) this.namingConvention = 0;
            if(this.namingConventionEstabilisher===undefined) this.namingConventionEstabilisher = null;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.jjnewStateCnt===undefined) this.jjnewStateCnt = 0;
            if(this.jjround===undefined) this.jjround = 0;
            if(this.jjmatchedPos===undefined) this.jjmatchedPos = 0;
            if(this.jjmatchedKind===undefined) this.jjmatchedKind = 0;
            if(this.input_stream===undefined) this.input_stream = null;
            if(this.jjimageLen===undefined) this.jjimageLen = 0;
            if(this.lengthOfMatch===undefined) this.lengthOfMatch = 0;
            if(this.curChar===undefined) this.curChar = 0;
            this.postInterpolationLexState = -1;
            this.debugStream = System.out;
            this.curLexState = 0;
            this.defaultLexState = 0;
            this.jjrounds = (s => { let a=[]; while(s-->0) a.push(0); return a; })(713);
            this.jjstateSet = (s => { let a=[]; while(s-->0) a.push(0); return a; })(2 * 713);
            this.jjimage = new StringBuilder("");
            this.image = this.jjimage;
            if(this.noparseTag===undefined) this.noparseTag = null;
            if(this.parser===undefined) this.parser = null;
            if(this.curlyBracketNesting===undefined) this.curlyBracketNesting = 0;
            if(this.parenthesisNesting===undefined) this.parenthesisNesting = 0;
            if(this.bracketNesting===undefined) this.bracketNesting = 0;
            if(this.inFTLHeader===undefined) this.inFTLHeader = false;
            if(this.strictSyntaxMode===undefined) this.strictSyntaxMode = false;
            if(this.squBracTagSyntax===undefined) this.squBracTagSyntax = false;
            if(this.autodetectTagSyntax===undefined) this.autodetectTagSyntax = false;
            if(this.tagSyntaxEstablished===undefined) this.tagSyntaxEstablished = false;
            if(this.inInvocation===undefined) this.inInvocation = false;
            if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
            if(this.initialNamingConvention===undefined) this.initialNamingConvention = 0;
            if(this.namingConvention===undefined) this.namingConvention = 0;
            if(this.namingConventionEstabilisher===undefined) this.namingConventionEstabilisher = null;
            if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = 0;
            if(this.jjnewStateCnt===undefined) this.jjnewStateCnt = 0;
            if(this.jjround===undefined) this.jjround = 0;
            if(this.jjmatchedPos===undefined) this.jjmatchedPos = 0;
            if(this.jjmatchedKind===undefined) this.jjmatchedKind = 0;
            if(this.input_stream===undefined) this.input_stream = null;
            if(this.jjimageLen===undefined) this.jjimageLen = 0;
            if(this.lengthOfMatch===undefined) this.lengthOfMatch = 0;
            if(this.curChar===undefined) this.curChar = 0;
            (() => {
                if(SimpleCharStream.staticFlag) throw Object.defineProperty(new Error("ERROR: Cannot use a static CharStream class with a non-static lexical analyzer."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
                this.input_stream = stream;
            })();
        } else throw new Error('invalid overload');
    }

    public ReInit$freemarker_core_SimpleCharStream(stream : SimpleCharStream) {
        this.jjmatchedPos = this.jjnewStateCnt = 0;
        this.curLexState = this.defaultLexState;
        this.input_stream = stream;
        this.ReInitRounds();
    }

    /*private*/ ReInitRounds() {
        let i : number;
        this.jjround = -2147483647;
        for(i = 713; i-- > 0; ) this.jjrounds[i] = -2147483648;
    }

    public ReInit$freemarker_core_SimpleCharStream$int(stream : SimpleCharStream, lexState : number) {
        this.ReInit$freemarker_core_SimpleCharStream(stream);
        this.SwitchTo(lexState);
    }

    /**
     * Reinitialise parser.
     * @param {SimpleCharStream} stream
     * @param {number} lexState
     */
    public ReInit(stream? : any, lexState? : any) : any {
        if(((stream != null && stream instanceof <any>SimpleCharStream) || stream === null) && ((typeof lexState === 'number') || lexState === null)) {
            return <any>this.ReInit$freemarker_core_SimpleCharStream$int(stream, lexState);
        } else if(((stream != null && stream instanceof <any>SimpleCharStream) || stream === null) && lexState === undefined) {
            return <any>this.ReInit$freemarker_core_SimpleCharStream(stream);
        } else throw new Error('invalid overload');
    }

    /**
     * Switch to specified lex state.
     * @param {number} lexState
     */
    public SwitchTo(lexState : number) {
        if(lexState >= 8 || lexState < 0) throw new TokenMgrError("Error: Ignoring invalid lexical state : " + lexState + ". State unchanged.", TokenMgrError.INVALID_LEXICAL_STATE); else this.curLexState = lexState;
    }

    /**
     * Lexer state names.
     */
    public static lexStateNames : Array<string> = ["DEFAULT", "NO_DIRECTIVE", "FM_EXPRESSION", "IN_PAREN", "NAMED_PARAMETER_EXPRESSION", "EXPRESSION_COMMENT", "NO_SPACE_EXPRESSION", "NO_PARSE"];

    /**
     * Lex State array.
     */
    public static jjnewLexState : number[] = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 5, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, 2, -1, -1, -1, -1];

    static jjtoToken : number[] = [-63, -534773761, 536379391];

    static jjtoSkip : number[] = [0, 266338304, 0];

    input_stream : SimpleCharStream;

    /*private*/ jjrounds : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(713);

    /*private*/ jjstateSet : number[] = (s => { let a=[]; while(s-->0) a.push(0); return a; })(2 * 713);

    /*private*/ jjimage : StringBuilder = new StringBuilder("");

    /*private*/ image : StringBuilder = this.jjimage;

    /*private*/ jjimageLen : number;

    /*private*/ lengthOfMatch : number;

    curChar : number;
}
FMParserTokenManager["__class"] = "freemarker.core.FMParserTokenManager";
FMParserTokenManager["__interfaces"] = ["freemarker.core.FMParserConstants"];