/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateObject} from './TemplateObject';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_ArrayEnumeration} from './_ArrayEnumeration';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * <b>Internal API - subject to change:</b> Represent directive call, interpolation, text block, or other such
 * non-expression node in the parsed template. Some information that can be found here can be accessed through the
 * {link Environment#getCurrentDirectiveCallPlace()}, which a published API, and thus promises backward compatibility.
 * 
 * @deprecated This is an internal FreeMarker API with no backward compatibility guarantees, so you shouldn't depend on
 * it.
 * @class
 * @extends TemplateObject
 */
export abstract class TemplateElement extends TemplateObject {
    static INITIAL_REGULATED_CHILD_BUFFER_CAPACITY : number = 6;

    /*private*/ parent : TemplateElement;

    /**
     * Contains 1 or more nested elements with optional trailing {@code null}-s, or is {@code null} exactly if there are
     * no nested elements.
     */
    /*private*/ childBuffer : TemplateElement[];

    /**
     * Contains the number of elements in the {link #childBuffer}, not counting the trailing {@code null}-s. If this is
     * 0, then and only then {link #childBuffer} must be {@code null}.
     */
    /*private*/ childCount : number;

    /**
     * The index of the element in the parent's {link #childBuffer} array.
     * 
     * @since 2.3.23
     */
    /*private*/ index : number;

    /**
     * Executes this {link TemplateElement}. Usually should not be called directly, but through
     * {link Environment#visit(TemplateElement)} or a similar {link Environment} method.
     * 
     * @param {Environment} env The runtime environment
     * @return {Array} The template elements to execute (meant to be used for nested elements), or {@code null}. Can have
     * <em>trailing</em> {@code null}-s (unused buffer capacity). Returning the nested elements instead of
     * executing them inside this method is a trick used for decreasing stack usage when there's nothing to do
     * after the children was processed anyway.
     */
    abstract accept(env : /*Environment*/any) : TemplateElement[];

    /**
     * One-line description of the element, that contains all the information that is used in
     * {link #getCanonicalForm()}, except the nested content (elements) of the element. The expressions inside the
     * element (the parameters) has to be shown. Meant to be used for stack traces, also for tree views that don't go
     * down to the expression-level. There are no backward-compatibility guarantees regarding the format used ATM, but
     * it must be regular enough to be machine-parseable, and it must contain all information necessary for restoring an
     * AST equivalent to the original.
     * <p>
     * This final implementation calls {link #dump(boolean) dump(false)}.
     * <p>
     * see #getCanonicalForm()
     * see #getNodeTypeSymbol()
     * @return {String}
     */
    public getDescription() : string {
        return this.dump$boolean(false);
    }

    /**
     * This final implementation calls {link #dump(boolean) dump(false)}.
     * @return {String}
     */
    public getCanonicalForm() : string {
        return this.dump$boolean(true);
    }

    getChildrenCanonicalForm() : string {
        return TemplateElement.getChildrenCanonicalForm(this.childBuffer);
    }

    static getChildrenCanonicalForm(children : TemplateElement[]) : string {
        if(children == null) {
            return "";
        }
        let sb : StringBuilder = new StringBuilder("");
        for(let index143=0; index143 < children.length; index143++) {
            let child = children[index143];
            {
                if(child == null) {
                    break;
                }
                sb.append(child.getCanonicalForm());
            }
        }
        return sb.toString();
    }

    /**
     * Tells if the element should show up in error stack traces. Note that this will be ignored for the top (current)
     * element of a stack trace, as that's always shown.
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
        return false;
    }

    /**
     * Tells if this element possibly executes its nested content for many times. This flag is useful when a template
     * AST is modified for running time limiting (see {link ThreadInterruptionSupportTemplatePostProcessor}). Elements
     * that use {link #childBuffer} should not need this, as the insertion of the timeout checks is impossible there,
     * given their rigid nested element schema.
     * @return {boolean}
     */
    abstract isNestedBlockRepeater() : boolean;

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

    dump$boolean(canonical : boolean) : string { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    public getParentNode() : /*TemplateNodeModel*/any {
        return null;
    }

    public getNodeNamespace() : string {
        return null;
    }

    public getNodeType() : string {
        return "element";
    }

    public getChildNodes() : /*TemplateSequenceModel*/any {
        const SimpleSequence = require('../template/SimpleSequence').SimpleSequence;
        if(this.childBuffer != null) {
            let seq : /*SimpleSequence*/any = new SimpleSequence(this.childCount);
            for(let i : number = 0; i < this.childCount; i++) {
                seq.add$java_lang_Object(this.childBuffer[i]);
            }
            return seq;
        } else {
            return new SimpleSequence(0);
        }
    }

    public getNodeName() : string {
        let classname : string = /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor));
        let shortNameOffset : number = classname.lastIndexOf('.') + 1;
        return classname.substring(shortNameOffset);
    }

    public isLeaf() : boolean {
        return this.childCount === 0;
    }

    /**
     * @deprecated Meaningless; simply returns if the node currently has any child nodes.
     * @return {boolean}
     */
    public getAllowsChildren() : boolean {
        return !this.isLeaf();
    }

    public getIndex$freemarker_core_TemplateElement(node : TemplateElement) : number {
        for(let i : number = 0; i < this.childCount; i++) {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.childBuffer[i],node))) {
                return i;
            }
        }
        return -1;
    }

    public getIndex(node? : any) : any {
        if(((node != null && node instanceof <any>TemplateElement) || node === null)) {
            return <any>this.getIndex$freemarker_core_TemplateElement(node);
        } else if(node === undefined) {
            return <any>this.getIndex$();
        } else throw new Error('invalid overload');
    }

    public getChildCount() : number {
        return this.childCount;
    }

    /**
     * Note: For element with {@code #nestedBlock}, this will hide the {@code #nestedBlock} when that's a
     * {link MixedContent}.
     * @return {Enumeration}
     */
    public children() : any {
        return this.childBuffer != null?new _ArrayEnumeration(this.childBuffer, this.childCount):[];
    }

    /**
     * @deprecated Internal API - even internally, use {link #getChild(int)} instead.
     * @param {number} index
     * @return {TemplateElement}
     */
    public getChildAt(index : number) : TemplateElement {
        if(this.childCount === 0) {
            throw Object.defineProperty(new Error("Template element has no children"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        try {
            return this.childBuffer[index];
        } catch(e) {
            throw Object.defineProperty(new Error("Index: " + index + ", Size: " + this.childCount), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    public setChildAt(index : number, element : TemplateElement) {
        if(index < this.childCount && index >= 0) {
            this.childBuffer[index] = element;
            element.index = index;
            element.parent = this;
        } else {
            throw Object.defineProperty(new Error("Index: " + index + ", Size: " + this.childCount), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * The element whose child this element is, or {@code null} if this is the root node.
     * 
     * @deprecated Don't use in internal code either; use {link #getParentElement()} there.
     * @return {TemplateElement}
     */
    public getParent() : TemplateElement {
        return this.parent;
    }

    /**
     * The element whose child this element is, or {@code null} if this is the root node.
     * @return {TemplateElement}
     */
    getParentElement() : TemplateElement {
        return this.parent;
    }

    setChildBufferCapacity(capacity : number) {
        let ln : number = this.childCount;
        let newChildBuffer : TemplateElement[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(capacity);
        for(let i : number = 0; i < ln; i++) {
            newChildBuffer[i] = this.childBuffer[i];
        }
        this.childBuffer = newChildBuffer;
    }

    addChild$freemarker_core_TemplateElement(nestedElement : TemplateElement) {
        this.addChild$int$freemarker_core_TemplateElement(this.childCount, nestedElement);
    }

    public addChild$int$freemarker_core_TemplateElement(index : number, nestedElement : TemplateElement) {
        let childCount : number = this.childCount;
        let childBuffer : TemplateElement[] = this.childBuffer;
        if(childBuffer == null) {
            childBuffer = (s => { let a=[]; while(s-->0) a.push(null); return a; })(TemplateElement.INITIAL_REGULATED_CHILD_BUFFER_CAPACITY);
            this.childBuffer = childBuffer;
        } else if(childCount === childBuffer.length) {
            this.setChildBufferCapacity(childCount !== 0?childCount * 2:1);
            childBuffer = this.childBuffer;
        }
        for(let i : number = childCount; i > index; i--) {
            let movedElement : TemplateElement = childBuffer[i - 1];
            movedElement.index = i;
            childBuffer[i] = movedElement;
        }
        nestedElement.index = index;
        nestedElement.parent = this;
        childBuffer[index] = nestedElement;
        this.childCount = childCount + 1;
    }

    /**
     * Inserts a new nested element at the given index, which can also be one higher than the current highest index.
     * @param {number} index
     * @param {TemplateElement} nestedElement
     */
    public addChild(index? : any, nestedElement? : any) : any {
        if(((typeof index === 'number') || index === null) && ((nestedElement != null && nestedElement instanceof <any>TemplateElement) || nestedElement === null)) {
            return <any>this.addChild$int$freemarker_core_TemplateElement(index, nestedElement);
        } else if(((index != null && index instanceof <any>TemplateElement) || index === null) && nestedElement === undefined) {
            return <any>this.addChild$freemarker_core_TemplateElement(index);
        } else throw new Error('invalid overload');
    }

    getChild(index : number) : TemplateElement {
        return this.childBuffer[index];
    }

    /**
     * @return {Array} Array containing 1 or more nested elements with optional trailing {@code null}-s, or is {@code null}
     * exactly if there are no nested elements.
     */
    getChildBuffer() : TemplateElement[] {
        return this.childBuffer;
    }

    /**
     * @param {TemplateElements} buffWithCnt Maybe {@code null}
     * @since 2.3.24
     */
    setChildren(buffWithCnt : /*TemplateElements*/any) {
        let childBuffer : TemplateElement[] = buffWithCnt.getBuffer();
        let childCount : number = buffWithCnt.getCount();
        for(let i : number = 0; i < childCount; i++) {
            let child : TemplateElement = childBuffer[i];
            child.index = i;
            child.parent = this;
        }
        this.childBuffer = childBuffer;
        this.childCount = childCount;
    }

    getIndex$() : number {
        return this.index;
    }

    /**
     * This is a special case, because a root element is not contained in another element, so we couldn't set the
     * private fields.
     */
    setFieldsForRootElement() {
        this.index = 0;
        this.parent = null;
    }

    /**
     * Walk the AST subtree rooted by this element, and do simplifications where possible, also removes superfluous
     * whitespace.
     * 
     * @param {boolean} stripWhitespace whether to remove superfluous whitespace
     * @return {TemplateElement} The element this element should be replaced with in the parent. If it's the same as this element, no
     * actual replacement will happen. Note that adjusting the {link #parent} and {link #index} of the result
     * is the duty of the caller, not of this method.
     */
    postParseCleanup(stripWhitespace : boolean) : TemplateElement {
        let childCount : number = this.childCount;
        if(childCount !== 0) {
            for(let i : number = 0; i < childCount; i++) {
                let te : TemplateElement = this.childBuffer[i];
                te = te.postParseCleanup(stripWhitespace);
                this.childBuffer[i] = te;
                te.parent = this;
                te.index = i;
            }
            for(let i : number = 0; i < childCount; i++) {
                let te : TemplateElement = this.childBuffer[i];
                if(te.isIgnorable(stripWhitespace)) {
                    childCount--;
                    for(let j : number = i; j < childCount; j++) {
                        let te2 : TemplateElement = this.childBuffer[j + 1];
                        this.childBuffer[j] = te2;
                        te2.index = j;
                    }
                    this.childBuffer[childCount] = null;
                    this.childCount = childCount;
                    i--;
                }
            }
            if(childCount === 0) {
                this.childBuffer = null;
            } else if(childCount < this.childBuffer.length && childCount <= (this.childBuffer.length * 3 / 4|0)) {
                let trimmedChildBuffer : TemplateElement[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(childCount);
                for(let i : number = 0; i < childCount; i++) {
                    trimmedChildBuffer[i] = this.childBuffer[i];
                }
                this.childBuffer = trimmedChildBuffer;
            }
        }
        return this;
    }

    isIgnorable(stripWhitespace : boolean) : boolean {
        return false;
    }

    prevTerminalNode() : TemplateElement {
        let prev : TemplateElement = this.previousSibling();
        if(prev != null) {
            return prev.getLastLeaf();
        } else if(this.parent != null) {
            return this.parent.prevTerminalNode();
        }
        return null;
    }

    nextTerminalNode() : TemplateElement {
        let next : TemplateElement = this.nextSibling();
        if(next != null) {
            return next.getFirstLeaf();
        } else if(this.parent != null) {
            return this.parent.nextTerminalNode();
        }
        return null;
    }

    previousSibling() : TemplateElement {
        if(this.parent == null) {
            return null;
        }
        return this.index > 0?this.parent.childBuffer[this.index - 1]:null;
    }

    nextSibling() : TemplateElement {
        if(this.parent == null) {
            return null;
        }
        return this.index + 1 < this.parent.childCount?this.parent.childBuffer[this.index + 1]:null;
    }

    /*private*/ getFirstChild() : TemplateElement {
        return this.childCount === 0?null:this.childBuffer[0];
    }

    /*private*/ getLastChild() : TemplateElement {
        let childCount : number = this.childCount;
        return childCount === 0?null:this.childBuffer[childCount - 1];
    }

    /*private*/ getFirstLeaf() : TemplateElement {
        let te : TemplateElement = this;
        while((!te.isLeaf() && !(te != null && te instanceof <any>(require('./Macro').Macro)) && !(ClassUtil.isInstanceOf(te, 'freemarker.core.BlockAssignment')))) {
            te = te.getFirstChild();
        }
        return te;
    }

    /*private*/ getLastLeaf() : TemplateElement {
        let te : TemplateElement = this;
        while((!te.isLeaf() && !(te != null && te instanceof <any>(require('./Macro').Macro)) && !(ClassUtil.isInstanceOf(te, 'freemarker.core.BlockAssignment')))) {
            te = te.getLastChild();
        }
        return te;
    }

    /**
     * Tells if executing this element has output that only depends on the template content and that has no side
     * effects.
     * @return {boolean}
     */
    isOutputCacheable() : boolean {
        return false;
    }

    isChildrenOutputCacheable() : boolean {
        let ln : number = this.childCount;
        for(let i : number = 0; i < ln; i++) {
            if(!this.childBuffer[i].isOutputCacheable()) {
                return false;
            }
        }
        return true;
    }

    /**
     * determines whether this element's presence on a line indicates that we should not strip opening whitespace in the
     * post-parse whitespace gobbling step.
     * @return {boolean}
     */
    heedsOpeningWhitespace() : boolean {
        return false;
    }

    /**
     * determines whether this element's presence on a line indicates that we should not strip trailing whitespace in
     * the post-parse whitespace gobbling step.
     * @return {boolean}
     */
    heedsTrailingWhitespace() : boolean {
        return false;
    }

    constructor() {
        super();
        if(this.parent===undefined) this.parent = null;
        if(this.childBuffer===undefined) this.childBuffer = null;
        if(this.childCount===undefined) this.childCount = 0;
        if(this.index===undefined) this.index = 0;
    }
}
TemplateElement["__class"] = "freemarker.core.TemplateElement";