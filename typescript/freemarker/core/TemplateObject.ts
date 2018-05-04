/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Template } from '../template/Template';
import { Token } from './Token';
import { TemplateElements } from './TemplateElements';
import { TemplateElement } from './TemplateElement';
import { _MessageUtil } from './_MessageUtil';
import { ParameterRole } from './ParameterRole';

/**
 * <b>Internal API - subject to change:</b> Represent a node in the parsed template (either a {link Expression} or a
 * {link TemplateElement}).
 * <p>
 * see TemplateElement
 * see Expression
 * 
 * @deprecated This is an internal FreeMarker API with no backward compatibility guarantees, so you shouldn't depend on
 * it.
 * @class
 */
export abstract class TemplateObject {
    /*private*/ template : Template;

    beginColumn : number;

    beginLine : number;

    endColumn : number;

    endLine : number;

    /**
     * This is needed for an ?eval hack; the expression AST nodes will be the descendants of the template, however,
     * we can't give their position in the template, only in the dynamic string that's evaluated. That's signaled
     * by a negative line numbers, starting from this constant as line 1.
     */
    static RUNTIME_EVAL_LINE_DISPLACEMENT : number = -1000000000;

    setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(template : Template, begin : Token, end : Token) {
        this.setLocation$freemarker_template_Template$int$int$int$int(template, begin.beginColumn, begin.beginLine, end.endColumn, end.endLine);
    }

    setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(template : Template, tagBegin : Token, tagEnd : Token, children : TemplateElements) {
        let lastChild : TemplateElement = children.getLast();
        if(lastChild != null) {
            this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_TemplateObject(template, tagBegin, lastChild);
        } else {
            this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(template, tagBegin, tagEnd);
        }
    }

    setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_TemplateObject(template : Template, begin : Token, end : TemplateObject) {
        this.setLocation$freemarker_template_Template$int$int$int$int(template, begin.beginColumn, begin.beginLine, end.endColumn, end.endLine);
    }

    setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(template : Template, begin : TemplateObject, end : Token) {
        this.setLocation$freemarker_template_Template$int$int$int$int(template, begin.beginColumn, begin.beginLine, end.endColumn, end.endLine);
    }

    setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(template : Template, begin : TemplateObject, end : TemplateObject) {
        this.setLocation$freemarker_template_Template$int$int$int$int(template, begin.beginColumn, begin.beginLine, end.endColumn, end.endLine);
    }

    public setLocation$freemarker_template_Template$int$int$int$int(template : Template, beginColumn : number, beginLine : number, endColumn : number, endLine : number) {
        this.template = template;
        this.beginColumn = beginColumn;
        this.beginLine = beginLine;
        this.endColumn = endColumn;
        this.endLine = endLine;
    }

    public setLocation(template? : any, beginColumn? : any, beginLine? : any, endColumn? : any, endLine? : any) : any {
        if(((template != null && template instanceof <any>Template) || template === null) && ((typeof beginColumn === 'number') || beginColumn === null) && ((typeof beginLine === 'number') || beginLine === null) && ((typeof endColumn === 'number') || endColumn === null) && ((typeof endLine === 'number') || endLine === null)) {
            return <any>this.setLocation$freemarker_template_Template$int$int$int$int(template, beginColumn, beginLine, endColumn, endLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && ((endColumn != null && endColumn instanceof <any>TemplateElements) || endColumn === null) && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token$freemarker_core_TemplateElements(template, beginColumn, beginLine, endColumn);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_Token(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>Token) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>TemplateObject) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_Token$freemarker_core_TemplateObject(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>TemplateObject) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>Token) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_Token(template, beginColumn, beginLine);
        } else if(((template != null && template instanceof <any>Template) || template === null) && ((beginColumn != null && beginColumn instanceof <any>TemplateObject) || beginColumn === null) && ((beginLine != null && beginLine instanceof <any>TemplateObject) || beginLine === null) && endColumn === undefined && endLine === undefined) {
            return <any>this.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(template, beginColumn, beginLine);
        } else throw new Error('invalid overload');
    }

    public getBeginColumn() : number {
        return this.beginColumn;
    }

    public getBeginLine() : number {
        return this.beginLine;
    }

    public getEndColumn() : number {
        return this.endColumn;
    }

    public getEndLine() : number {
        return this.endLine;
    }

    /**
     * Returns a string that indicates
     * where in the template source, this object is.
     * @return {String}
     */
    public getStartLocation() : string {
        return _MessageUtil.formatLocationForEvaluationError$freemarker_template_Template$int$int(this.template, this.beginLine, this.beginColumn);
    }

    /**
     * As of 2.3.20. the same as {link #getStartLocation}. Meant to be used where there's a risk of XSS
     * when viewing error messages.
     * @return {String}
     */
    public getStartLocationQuoted() : string {
        return this.getStartLocation();
    }

    public getEndLocation() : string {
        return _MessageUtil.formatLocationForEvaluationError$freemarker_template_Template$int$int(this.template, this.endLine, this.endColumn);
    }

    /**
     * As of 2.3.20. the same as {link #getEndLocation}. Meant to be used where there's a risk of XSS
     * when viewing error messages.
     * @return {String}
     */
    public getEndLocationQuoted() : string {
        return this.getEndLocation();
    }

    public getSource() : string {
        let s : string;
        if(this.template != null) {
            s = this.template.getSource(this.beginColumn, this.beginLine, this.endColumn, this.endLine);
        } else {
            s = null;
        }
        return s != null?s:this.getCanonicalForm();
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        let s : string;
        try {
            s = this.getSource();
        } catch(e) {
            s = null;
        };
        return s != null?s:this.getCanonicalForm();
    }

    /**
     * @return {boolean} whether the point in the template file specified by the
     * column and line numbers is contained within this template object.
     * @param {number} column
     * @param {number} line
     */
    public contains(column : number, line : number) : boolean {
        if(line < this.beginLine || line > this.endLine) {
            return false;
        }
        if(line === this.beginLine) {
            if(column < this.beginColumn) {
                return false;
            }
        }
        if(line === this.endLine) {
            return column <= this.endColumn;
        }
        return true;
    }

    public getTemplate() : Template {
        return this.template;
    }

    copyLocationFrom(from : TemplateObject) : TemplateObject {
        this.template = from.template;
        this.beginColumn = from.beginColumn;
        this.beginLine = from.beginLine;
        this.endColumn = from.endColumn;
        this.endLine = from.endLine;
        return this;
    }

    /**
     * FTL generated from the AST of the node, which must be parseable to an AST that does the same as the original
     * source, assuming we turn off automatic white-space removal when parsing the canonical form.
     * <p>
     * see TemplateElement#getDescription()
     * see #getNodeTypeSymbol()
     * @return {String}
     */
    public abstract getCanonicalForm() : string;

    /**
     * A very sort single-line string that describes what kind of AST node this is, without describing any
     * embedded expression or child element. Examples: {@code "#if"}, {@code "+"}, <tt>"${...}</tt>. These values should
     * be suitable as tree node labels in a tree view. Yet, they should be consistent and complete enough so that an AST
     * that is equivalent with the original could be reconstructed from the tree view. Thus, for literal values that are
     * leaf nodes the symbols should be the canonical form of value.
     * <p>
     * see #getCanonicalForm()
     * see TemplateElement#getDescription()
     * @return {String}
     */
    abstract getNodeTypeSymbol() : string;

    /**
     * Returns highest valid parameter index + 1. So one should scan indexes with {link #getParameterValue(int)}
     * starting from 0 up until but excluding this. For example, for the binary "+" operator this will give 2, so the
     * legal indexes are 0 and 1. Note that if a parameter is optional in a template-object-type and happens to be
     * omitted in an instance, this will still return the same value and the value of that parameter will be
     * {@code null}.
     * @return {number}
     */
    abstract getParameterCount() : number;

    /**
     * Returns the value of the parameter identified by the index. For example, the binary "+" operator will have an
     * LHO {link Expression} at index 0, and and RHO {link Expression} at index 1. Or, the binary "." operator will
     * have an LHO {link Expression} at index 0, and an RHO {link String}(!) at index 1. Or, the {@code #include}
     * directive will have a path {link Expression} at index 0, a "parse" {link Expression} at index 1, etc.
     * 
     * <p>The index value doesn't correspond to the source-code location in general. It's an arbitrary identifier
     * that corresponds to the role of the parameter instead. This also means that when a parameter is omitted, the
     * index of the other parameters won't shift.
     * 
     * @return {Object} {@code null} or any kind of {link Object}, very often an {link Expression}. However, if there's
     * a {link TemplateObject} stored inside the returned value, it must itself be be a {link TemplateObject}
     * too, otherwise the AST couldn't be (easily) fully traversed. That is, non-{link TemplateObject} values
     * can only be used for leafs.
     * @throws IndexOutOfBoundsException if {@code idx} is less than 0 or not less than {link #getParameterCount()}.
     * @param {number} idx
     */
    abstract getParameterValue(idx : number) : any;

    /**
     * Returns the role of the parameter at the given index, like {link ParameterRole#LEFT_HAND_OPERAND}.
     * <p>
     * As of this writing (2013-06-17), for directive parameters it will always give {link ParameterRole#UNKNOWN},
     * because there was no need to be more specific so far. This should be improved as need.
     * 
     * @throws IndexOutOfBoundsException if {@code idx} is less than 0 or not less than {link #getParameterCount()}.
     * @param {number} idx
     * @return {ParameterRole}
     */
    abstract getParameterRole(idx : number) : ParameterRole;

    constructor() {
        if(this.template===undefined) this.template = null;
        if(this.beginColumn===undefined) this.beginColumn = 0;
        if(this.beginLine===undefined) this.beginLine = 0;
        if(this.endColumn===undefined) this.endColumn = 0;
        if(this.endLine===undefined) this.endLine = 0;
    }
}
TemplateObject["__class"] = "freemarker.core.TemplateObject";



var __Function = Function;
