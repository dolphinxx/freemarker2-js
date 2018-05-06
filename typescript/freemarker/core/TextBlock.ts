/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CollectionUtils} from '../template/utility/CollectionUtils';
import {StringUtil} from '../template/utility/StringUtil';
import {TemplateElement} from './TemplateElement';
import {ParameterRole} from './ParameterRole';
import {TrimInstruction} from './TrimInstruction';
import {Character} from '../../java/lang/Character';
import {MixedContent} from './MixedContent';
import {Macro} from './Macro';
import {Assignment} from './Assignment';
import {AssignmentInstruction} from './AssignmentInstruction';
import {PropertySetting} from './PropertySetting';
import {LibraryLoad} from './LibraryLoad';
import {Comment} from './Comment';
import {System} from '../../java/lang/System';

/**
 * A TemplateElement representing a block of plain text.
 * 
 * @deprected This is an internal API; don't use it.
 * @param {String} text
 * @param {boolean} unparsed
 * @class
 * @extends TemplateElement
 */
export class TextBlock extends TemplateElement {
    /*private*/ text : string[];

    /*private*/ unparsed : boolean;

    public constructor(text? : any, unparsed? : any) {
        if(((typeof text === 'string') || text === null) && ((typeof unparsed === 'boolean') || unparsed === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let text : any = /* toCharArray */(__args[0]).split('');
                super();
                if(this.text===undefined) this.text = null;
                if(this.unparsed===undefined) this.unparsed = false;
                if(this.text===undefined) this.text = null;
                if(this.unparsed===undefined) this.unparsed = false;
                (() => {
                    this.text = text;
                    this.unparsed = unparsed;
                })();
            }
        } else if(((text != null && text instanceof <any>Array && (text.length==0 || text[0] == null ||(typeof text[0] === 'string'))) || text === null) && ((typeof unparsed === 'boolean') || unparsed === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.text===undefined) this.text = null;
            if(this.unparsed===undefined) this.unparsed = false;
            if(this.text===undefined) this.text = null;
            if(this.unparsed===undefined) this.unparsed = false;
            (() => {
                this.text = text;
                this.unparsed = unparsed;
            })();
        } else if(((typeof text === 'string') || text === null) && unparsed === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let unparsed : any = false;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let text : any = /* toCharArray */(__args[0]).split('');
                    super();
                    if(this.text===undefined) this.text = null;
                    if(this.unparsed===undefined) this.unparsed = false;
                    if(this.text===undefined) this.text = null;
                    if(this.unparsed===undefined) this.unparsed = false;
                    (() => {
                        this.text = text;
                        this.unparsed = unparsed;
                    })();
                }
            }
        } else throw new Error('invalid overload');
    }

    replaceText(text : string) {
        this.text = /* toCharArray */(text).split('');
    }

    /**
     * Simply outputs the text.
     * 
     * @deprected This is an internal API; don't call or override it.
     * @param {Environment} env
     * @return {Array}
     */
    public accept(env : /*Environment*/any) : TemplateElement[] {
        env.getOut().write(this.text);
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @param {boolean} inStringLiteral
     * @return {String}
     */
    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    dump$boolean(canonical : boolean) : string {
        if(canonical) {
            let text : string = this.text.join('');
            if(this.unparsed) {
                return "<#noparse>" + text + "</#noparse>";
            }
            return text;
        } else {
            return "text " + StringUtil.jQuote$java_lang_Object(this.text.join(''));
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#text";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return this.text.join('');
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        if(idx !== 0) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        return ParameterRole.CONTENT_$LI$();
    }

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {TemplateElement}
     */
    postParseCleanup(stripWhitespace : boolean) : TemplateElement {
        if(this.text.length === 0) return this;
        let openingCharsToStrip : number = 0;
        let trailingCharsToStrip : number = 0;
        let deliberateLeftTrim : boolean = this.deliberateLeftTrim();
        let deliberateRightTrim : boolean = this.deliberateRightTrim();
        if(!stripWhitespace || this.text.length === 0) {
            return this;
        }
        let parentElement : TemplateElement = this.getParentElement();
        if(this.isTopLevelTextIfParentIs(parentElement) && this.previousSibling() == null) {
            return this;
        }
        if(!deliberateLeftTrim) {
            trailingCharsToStrip = this.trailingCharsToStrip();
        }
        if(!deliberateRightTrim) {
            openingCharsToStrip = this.openingCharsToStrip();
        }
        if(openingCharsToStrip === 0 && trailingCharsToStrip === 0) {
            return this;
        }
        this.text = TextBlock.substring$char_A$int$int(this.text, openingCharsToStrip, this.text.length - trailingCharsToStrip);
        if(openingCharsToStrip > 0) {
            this.beginLine++;
            this.beginColumn = 1;
        }
        if(trailingCharsToStrip > 0) {
            this.endColumn = 0;
        }
        return this;
    }

    /**
     * Scans forward the nodes on the same line to see whether there is a
     * deliberate left trim in effect. Returns true if the left trim was present.
     * @return {boolean}
     * @private
     */
    /*private*/ deliberateLeftTrim() : boolean {
        let result : boolean = false;
        for(let elem : TemplateElement = this.nextTerminalNode(); elem != null && elem.beginLine === this.endLine; elem = elem.nextTerminalNode()) {
            if(elem != null && elem instanceof <any>TrimInstruction) {
                let ti : TrimInstruction = <TrimInstruction>elem;
                if(!ti.left && !ti.right) {
                    result = true;
                }
                if(ti.left) {
                    result = true;
                    let lastNewLineIndex : number = this.lastNewLineIndex();
                    if(lastNewLineIndex >= 0 || this.beginColumn === 1) {
                        let firstPart : string[] = TextBlock.substring$char_A$int$int(this.text, 0, lastNewLineIndex + 1);
                        let lastLine : string[] = TextBlock.substring$char_A$int(this.text, 1 + lastNewLineIndex);
                        if(StringUtil.isTrimmableToEmpty$char_A(lastLine)) {
                            this.text = firstPart;
                            this.endColumn = 0;
                        } else {
                            let i : number = 0;
                            while((Character.isWhitespace(lastLine[i]))) {
                                i++;
                            }
                            let printablePart : string[] = TextBlock.substring$char_A$int(lastLine, i);
                            this.text = TextBlock.concat(firstPart, printablePart);
                        }
                    }
                }
            }
        }
        return result;
    }

    /**
     * Checks for the presence of a t or rt directive on the
     * same line. Returns true if the right trim directive was present.
     * @return {boolean}
     * @private
     */
    /*private*/ deliberateRightTrim() : boolean {
        let result : boolean = false;
        for(let elem : TemplateElement = this.prevTerminalNode(); elem != null && elem.endLine === this.beginLine; elem = elem.prevTerminalNode()) {
            if(elem != null && elem instanceof <any>TrimInstruction) {
                let ti : TrimInstruction = <TrimInstruction>elem;
                if(!ti.left && !ti.right) {
                    result = true;
                }
                if(ti.right) {
                    result = true;
                    let firstLineIndex : number = this.firstNewLineIndex() + 1;
                    if(firstLineIndex === 0) {
                        return false;
                    }
                    if(this.text.length > firstLineIndex && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.text[firstLineIndex - 1]) == '\r'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.text[firstLineIndex]) == '\n'.charCodeAt(0)) {
                        firstLineIndex++;
                    }
                    let trailingPart : string[] = TextBlock.substring$char_A$int(this.text, firstLineIndex);
                    let openingPart : string[] = TextBlock.substring$char_A$int$int(this.text, 0, firstLineIndex);
                    if(StringUtil.isTrimmableToEmpty$char_A(openingPart)) {
                        this.text = trailingPart;
                        this.beginLine++;
                        this.beginColumn = 1;
                    } else {
                        let lastNonWS : number = openingPart.length - 1;
                        while((Character.isWhitespace(this.text[lastNonWS]))) {
                            lastNonWS--;
                        }
                        let printablePart : string[] = TextBlock.substring$char_A$int$int(this.text, 0, lastNonWS + 1);
                        if(StringUtil.isTrimmableToEmpty$char_A(trailingPart)) {
                            let trimTrailingPart : boolean = true;
                            for(let te : TemplateElement = this.nextTerminalNode(); te != null && te.beginLine === this.endLine; te = te.nextTerminalNode()) {
                                if(te.heedsOpeningWhitespace()) {
                                    trimTrailingPart = false;
                                }
                                if((te != null && te instanceof <any>TrimInstruction) && (<TrimInstruction>te).left) {
                                    trimTrailingPart = true;
                                    break;
                                }
                            }
                            if(trimTrailingPart) trailingPart = CollectionUtils.EMPTY_CHAR_ARRAY_$LI$();
                        }
                        this.text = TextBlock.concat(printablePart, trailingPart);
                    }
                }
            }
        }
        return result;
    }

    /*private*/ firstNewLineIndex() : number {
        let text : string[] = this.text;
        for(let i : number = 0; i < text.length; i++) {
            let c : string = text[i];
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                return i;
            }
        }
        return -1;
    }

    /*private*/ lastNewLineIndex() : number {
        let text : string[] = this.text;
        for(let i : number = text.length - 1; i >= 0; i--) {
            let c : string = text[i];
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                return i;
            }
        }
        return -1;
    }

    /**
     * figures out how many opening whitespace characters to strip
     * in the post-parse cleanup phase.
     * @return {number}
     * @private
     */
    /*private*/ openingCharsToStrip() : number {
        let newlineIndex : number = this.firstNewLineIndex();
        if(newlineIndex === -1 && this.beginColumn !== 1) {
            return 0;
        }
        ++newlineIndex;
        if(this.text.length > newlineIndex) {
            if(newlineIndex > 0 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.text[newlineIndex - 1]) == '\r'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.text[newlineIndex]) == '\n'.charCodeAt(0)) {
                ++newlineIndex;
            }
        }
        if(!StringUtil.isTrimmableToEmpty$char_A$int$int(this.text, 0, newlineIndex)) {
            return 0;
        }
        for(let elem : TemplateElement = this.prevTerminalNode(); elem != null && elem.endLine === this.beginLine; elem = elem.prevTerminalNode()) {
            if(elem.heedsOpeningWhitespace()) {
                return 0;
            }
        }
        return newlineIndex;
    }

    /**
     * figures out how many trailing whitespace characters to strip
     * in the post-parse cleanup phase.
     * @return {number}
     * @private
     */
    /*private*/ trailingCharsToStrip() : number {
        let lastNewlineIndex : number = this.lastNewLineIndex();
        if(lastNewlineIndex === -1 && this.beginColumn !== 1) {
            return 0;
        }
        if(!StringUtil.isTrimmableToEmpty$char_A$int(this.text, lastNewlineIndex + 1)) {
            return 0;
        }
        for(let elem : TemplateElement = this.nextTerminalNode(); elem != null && elem.beginLine === this.endLine; elem = elem.nextTerminalNode()) {
            if(elem.heedsTrailingWhitespace()) {
                return 0;
            }
        }
        return this.text.length - (lastNewlineIndex + 1);
    }

    /**
     * 
     * @return {boolean}
     */
    heedsTrailingWhitespace() : boolean {
        if(this.isIgnorable(true)) {
            return false;
        }
        for(let i : number = 0; i < this.text.length; i++) {
            let c : string = this.text[i];
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                return false;
            }
            if(!Character.isWhitespace(c)) {
                return true;
            }
        }
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    heedsOpeningWhitespace() : boolean {
        if(this.isIgnorable(true)) {
            return false;
        }
        for(let i : number = this.text.length - 1; i >= 0; i--) {
            let c : string = this.text[i];
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                return false;
            }
            if(!Character.isWhitespace(c)) {
                return true;
            }
        }
        return true;
    }

    /**
     * 
     * @param {boolean} stripWhitespace
     * @return {boolean}
     */
    isIgnorable(stripWhitespace : boolean) : boolean {
        if(this.text == null || this.text.length === 0) {
            return true;
        }
        if(stripWhitespace) {
            if(!StringUtil.isTrimmableToEmpty$char_A(this.text)) {
                return false;
            }
            let parentElement : TemplateElement = this.getParentElement();
            let atTopLevel : boolean = this.isTopLevelTextIfParentIs(parentElement);
            let prevSibling : TemplateElement = this.previousSibling();
            let nextSibling : TemplateElement = this.nextSibling();
            return ((prevSibling == null && atTopLevel) || this.nonOutputtingType(prevSibling)) && ((nextSibling == null && atTopLevel) || this.nonOutputtingType(nextSibling));
        } else {
            return false;
        }
    }

    /*private*/ isTopLevelTextIfParentIs(parentElement : TemplateElement) : boolean {
        return parentElement == null || parentElement.getParentElement() == null && (parentElement != null && parentElement instanceof <any>MixedContent);
    }

    /*private*/ nonOutputtingType(element : TemplateElement) : boolean {
        return ((element != null && element instanceof <any>Macro) || (element != null && element instanceof <any>Assignment) || (element != null && element instanceof <any>AssignmentInstruction) || (element != null && element instanceof <any>PropertySetting) || (element != null && element instanceof <any>LibraryLoad) || (element != null && element instanceof <any>Comment));
    }

    public static substring$char_A$int$int(c : string[], from : number, to : number) : string[] {
        let c2 : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(to - from);
        System.arraycopy(c, from, c2, 0, c2.length);
        return c2;
    }

    public static substring(c? : any, from? : any, to? : any) : any {
        if(((c != null && c instanceof <any>Array && (c.length==0 || c[0] == null ||(typeof c[0] === 'string'))) || c === null) && ((typeof from === 'number') || from === null) && ((typeof to === 'number') || to === null)) {
            return <any>TextBlock.substring$char_A$int$int(c, from, to);
        } else if(((c != null && c instanceof <any>Array && (c.length==0 || c[0] == null ||(typeof c[0] === 'string'))) || c === null) && ((typeof from === 'number') || from === null) && to === undefined) {
            return <any>TextBlock.substring$char_A$int(c, from);
        } else throw new Error('invalid overload');
    }

    /*private*/ static substring$char_A$int(c : string[], from : number) : string[] {
        return TextBlock.substring$char_A$int$int(c, from, c.length);
    }

    /*private*/ static concat(c1 : string[], c2 : string[]) : string[] {
        let c : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(c1.length + c2.length);
        System.arraycopy(c1, 0, c, 0, c1.length);
        System.arraycopy(c2, 0, c, c1.length, c2.length);
        return c;
    }

    /**
     * 
     * @return {boolean}
     */
    isOutputCacheable() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
TextBlock["__class"] = "freemarker.core.TextBlock";




