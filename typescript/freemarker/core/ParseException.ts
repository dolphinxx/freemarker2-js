/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SecurityUtilities} from '../template/utility/SecurityUtilities';
import {StringUtil} from '../template/utility/StringUtil';
import {FMParserConstants} from './FMParserConstants';
import {Token} from './Token';
import {TemplateObject} from './TemplateObject';
import {_MessageUtil} from './_MessageUtil';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {System} from "../../java/lang/System";

/**
 * @since 2.3.21
 * @param {String} description
 * @param {Template} template
 * @param {number} lineNumber
 * @param {number} columnNumber
 * @param {number} endLineNumber
 * @param {number} endColumnNumber
 * @param {Error} cause
 * @class
 * @extends Error
 */
export class ParseException {
    /**
     * This is the last token that has been consumed successfully.  If
     * this object has been created due to a parse error, the token
     * following this token will (therefore) be the first error token.
     */
    public currentToken: Token;

    static jbossToolsMode: boolean = null;

    /*private*/
    messageAndDescriptionRendered: boolean;

    /*private*/
    message: string;

    /*private*/
    description: string;

    public columnNumber: number;

    public lineNumber: number;

    public endColumnNumber: number;

    public endLineNumber: number;

    /**
     * Each entry in this array is an array of integers.  Each array
     * of integers represents a sequence of tokens (by their ordinal
     * values) that is expected at this point of the parse.
     */
    public expectedTokenSequences: number[][];

    /**
     * This is a reference to the "tokenImage" array of the generated
     * parser within which the parse error occurred.  This array is
     * defined in the generated ...Constants interface.
     */
    public tokenImage: Array<any>;

    /**
     * The end of line string for this machine.
     */
    eol: string = SecurityUtilities.getSystemProperty("line.separator", "\n");

    /**
     * @deprecated Will be remove without replacement in 2.4.
     */
    specialConstructor: boolean;

    /*private*/
    templateName: string;

    public constructor(description?: any, template?: any, lineNumber?: any, columnNumber?: any, endLineNumber?: any, endColumnNumber?: any, cause?: any) {
        if (((typeof description === 'string') || description === null) && ((template != null && template['__class'].indexOf('freemarker.template.Template') !== -1) || template === null) && ((typeof lineNumber === 'number') || lineNumber === null) && ((typeof columnNumber === 'number') || columnNumber === null) && ((typeof endLineNumber === 'number') || endLineNumber === null) && ((typeof endColumnNumber === 'number') || endColumnNumber === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateName: any = template == null ? null : template.getSourceName();
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                this.eol = System.getProperty("line.separator", "\n");
                (<any>Object).setPrototypeOf(this, ParseException.prototype);
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                (() => {
                    this.description = description;
                    this.templateName = templateName;
                    this.lineNumber = lineNumber;
                    this.columnNumber = columnNumber;
                    this.endLineNumber = endLineNumber;
                    this.endColumnNumber = endColumnNumber;
                })();
            }
        } else if (((typeof description === 'string') || description === null) && ((typeof template === 'string') || template === null) && ((typeof lineNumber === 'number') || lineNumber === null) && ((typeof columnNumber === 'number') || columnNumber === null) && ((typeof endLineNumber === 'number') || endLineNumber === null) && ((typeof endColumnNumber === 'number') || endColumnNumber === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let templateName: any = __args[1];
            if (this.currentToken === undefined) this.currentToken = null;
            if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
            if (this.message === undefined) this.message = null;
            if (this.description === undefined) this.description = null;
            if (this.columnNumber === undefined) this.columnNumber = 0;
            if (this.lineNumber === undefined) this.lineNumber = 0;
            if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
            if (this.endLineNumber === undefined) this.endLineNumber = 0;
            if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
            if (this.tokenImage === undefined) this.tokenImage = null;
            if (this.specialConstructor === undefined) this.specialConstructor = false;
            if (this.templateName === undefined) this.templateName = null;
            this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
            (<any>Object).setPrototypeOf(this, ParseException.prototype);
            if (this.currentToken === undefined) this.currentToken = null;
            if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
            if (this.message === undefined) this.message = null;
            if (this.description === undefined) this.description = null;
            if (this.columnNumber === undefined) this.columnNumber = 0;
            if (this.lineNumber === undefined) this.lineNumber = 0;
            if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
            if (this.endLineNumber === undefined) this.endLineNumber = 0;
            if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
            if (this.tokenImage === undefined) this.tokenImage = null;
            if (this.specialConstructor === undefined) this.specialConstructor = false;
            if (this.templateName === undefined) this.templateName = null;
            (() => {
                this.description = description;
                this.templateName = templateName;
                this.lineNumber = lineNumber;
                this.columnNumber = columnNumber;
                this.endLineNumber = endLineNumber;
                this.endColumnNumber = endColumnNumber;
            })();
        } else if (((typeof description === 'string') || description === null) && ((template != null && template['__class'].indexOf('freemarker.template.Template') !== -1) || template === null) && ((typeof lineNumber === 'number') || lineNumber === null) && ((typeof columnNumber === 'number') || columnNumber === null) && ((typeof endLineNumber === 'number') || endLineNumber === null) && ((typeof endColumnNumber === 'number') || endColumnNumber === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateName: any = template == null ? null : template.getSourceName();
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                    (<any>Object).setPrototypeOf(this, ParseException.prototype);
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    (() => {
                        this.description = description;
                        this.templateName = templateName;
                        this.lineNumber = lineNumber;
                        this.columnNumber = columnNumber;
                        this.endLineNumber = endLineNumber;
                        this.endColumnNumber = endColumnNumber;
                    })();
                }
            }
        } else if (((typeof description === 'string') || description === null) && ((template != null && template['__class'].indexOf('freemarker.template.Template') !== -1) || template === null) && ((typeof lineNumber === 'number') || lineNumber === null) && ((typeof columnNumber === 'number') || columnNumber === null) && ((endLineNumber != null && (endLineNumber["__classes"] && endLineNumber["__classes"].indexOf("java.lang.Throwable") >= 0) || endLineNumber != null && endLineNumber instanceof <any>Error) || endLineNumber === null) && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let cause: any = __args[4];
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateName: any = template == null ? null : template.getSourceName();
                let endLineNumber: any = 0;
                let endColumnNumber: any = 0;
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                (<any>Object).setPrototypeOf(this, ParseException.prototype);
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                (() => {
                    this.description = description;
                    this.templateName = templateName;
                    this.lineNumber = lineNumber;
                    this.columnNumber = columnNumber;
                    this.endLineNumber = endLineNumber;
                    this.endColumnNumber = endColumnNumber;
                })();
            }
        } else if (((typeof description === 'string') || description === null) && ((template != null && template['__class'].indexOf('freemarker.template.Template') !== -1) || template === null) && ((lineNumber != null && lineNumber instanceof <any>Token) || lineNumber === null) && ((columnNumber != null && (columnNumber["__classes"] && columnNumber["__classes"].indexOf("java.lang.Throwable") >= 0) || columnNumber != null && columnNumber instanceof <any>Error) || columnNumber === null) && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let tk: any = __args[2];
            let cause: any = __args[3];
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateName: any = template == null ? null : template.getSourceName();
                let lineNumber: any = tk.beginLine;
                let columnNumber: any = tk.beginColumn;
                let endLineNumber: any = tk.endLine;
                let endColumnNumber: any = tk.endColumn;
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                (<any>Object).setPrototypeOf(this, ParseException.prototype);
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                (() => {
                    this.description = description;
                    this.templateName = templateName;
                    this.lineNumber = lineNumber;
                    this.columnNumber = columnNumber;
                    this.endLineNumber = endLineNumber;
                    this.endColumnNumber = endColumnNumber;
                })();
            }
        } else if (((typeof description === 'string') || description === null) && ((template != null && template['__class'].indexOf('freemarker.template.Template') !== -1) || template === null) && ((typeof lineNumber === 'number') || lineNumber === null) && ((typeof columnNumber === 'number') || columnNumber === null) && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateName: any = template == null ? null : template.getSourceName();
                    let endLineNumber: any = 0;
                    let endColumnNumber: any = 0;
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                    (<any>Object).setPrototypeOf(this, ParseException.prototype);
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    (() => {
                        this.description = description;
                        this.templateName = templateName;
                        this.lineNumber = lineNumber;
                        this.columnNumber = columnNumber;
                        this.endLineNumber = endLineNumber;
                        this.endColumnNumber = endColumnNumber;
                    })();
                }
            }
        } else if (((description != null && description instanceof <any>Token) || description === null) && ((template != null && template instanceof <any>Array && (template.length == 0 || template[0] == null || template[0] instanceof Array)) || template === null) && ((lineNumber != null && lineNumber instanceof <any>Array && (lineNumber.length == 0 || lineNumber[0] == null || (typeof lineNumber[0] === 'string'))) || lineNumber === null) && columnNumber === undefined && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let currentTokenVal: any = __args[0];
            let expectedTokenSequencesVal: any = __args[1];
            let tokenImageVal: any = __args[2];
            if (this.currentToken === undefined) this.currentToken = null;
            if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
            if (this.message === undefined) this.message = null;
            if (this.description === undefined) this.description = null;
            if (this.columnNumber === undefined) this.columnNumber = 0;
            if (this.lineNumber === undefined) this.lineNumber = 0;
            if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
            if (this.endLineNumber === undefined) this.endLineNumber = 0;
            if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
            if (this.tokenImage === undefined) this.tokenImage = null;
            if (this.specialConstructor === undefined) this.specialConstructor = false;
            if (this.templateName === undefined) this.templateName = null;
            this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
            (<any>Object).setPrototypeOf(this, ParseException.prototype);
            if (this.currentToken === undefined) this.currentToken = null;
            if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
            if (this.message === undefined) this.message = null;
            if (this.description === undefined) this.description = null;
            if (this.columnNumber === undefined) this.columnNumber = 0;
            if (this.lineNumber === undefined) this.lineNumber = 0;
            if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
            if (this.endLineNumber === undefined) this.endLineNumber = 0;
            if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
            if (this.tokenImage === undefined) this.tokenImage = null;
            if (this.specialConstructor === undefined) this.specialConstructor = false;
            if (this.templateName === undefined) this.templateName = null;
            (() => {
                this.currentToken = currentTokenVal;
                this.specialConstructor = true;
                this.expectedTokenSequences = expectedTokenSequencesVal;
                this.tokenImage = tokenImageVal;
                this.lineNumber = this.currentToken.next.beginLine;
                this.columnNumber = this.currentToken.next.beginColumn;
                this.endLineNumber = this.currentToken.next.endLine;
                this.endColumnNumber = this.currentToken.next.endColumn;
            })();
        } else if (((typeof description === 'string') || description === null) && ((template != null && template['__class'].indexOf('freemarker.template.Template') !== -1) || template === null) && ((lineNumber != null && lineNumber instanceof <any>Token) || lineNumber === null) && columnNumber === undefined && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let tk: any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateName: any = template == null ? null : template.getSourceName();
                    let lineNumber: any = tk.beginLine;
                    let columnNumber: any = tk.beginColumn;
                    let endLineNumber: any = tk.endLine;
                    let endColumnNumber: any = tk.endColumn;
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                    (<any>Object).setPrototypeOf(this, ParseException.prototype);
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    (() => {
                        this.description = description;
                        this.templateName = templateName;
                        this.lineNumber = lineNumber;
                        this.columnNumber = columnNumber;
                        this.endLineNumber = endLineNumber;
                        this.endColumnNumber = endColumnNumber;
                    })();
                }
            }
        } else if (((typeof description === 'string') || description === null) && ((template != null && template instanceof <any>TemplateObject) || template === null) && ((lineNumber != null && (lineNumber["__classes"] && lineNumber["__classes"].indexOf("java.lang.Throwable") >= 0) || lineNumber != null && lineNumber instanceof <any>Error) || lineNumber === null) && columnNumber === undefined && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let tobj: any = __args[1];
            let cause: any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let templateName: any = tobj.getTemplate() == null ? null : tobj.getTemplate().getSourceName();
                let lineNumber: any = tobj.beginLine;
                let columnNumber: any = tobj.beginColumn;
                let endLineNumber: any = tobj.endLine;
                let endColumnNumber: any = tobj.endColumn;
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                (<any>Object).setPrototypeOf(this, ParseException.prototype);
                if (this.currentToken === undefined) this.currentToken = null;
                if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                if (this.message === undefined) this.message = null;
                if (this.description === undefined) this.description = null;
                if (this.columnNumber === undefined) this.columnNumber = 0;
                if (this.lineNumber === undefined) this.lineNumber = 0;
                if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                if (this.endLineNumber === undefined) this.endLineNumber = 0;
                if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                if (this.tokenImage === undefined) this.tokenImage = null;
                if (this.specialConstructor === undefined) this.specialConstructor = false;
                if (this.templateName === undefined) this.templateName = null;
                (() => {
                    this.description = description;
                    this.templateName = templateName;
                    this.lineNumber = lineNumber;
                    this.columnNumber = columnNumber;
                    this.endLineNumber = endLineNumber;
                    this.endColumnNumber = endColumnNumber;
                })();
            }
        } else if (((typeof description === 'string') || description === null) && ((typeof template === 'number') || template === null) && ((typeof lineNumber === 'number') || lineNumber === null) && columnNumber === undefined && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let lineNumber: any = __args[1];
            let columnNumber: any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let template: any = null;
                let cause: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateName: any = template == null ? null : template.getSourceName();
                    let endLineNumber: any = 0;
                    let endColumnNumber: any = 0;
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                    (<any>Object).setPrototypeOf(this, ParseException.prototype);
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    (() => {
                        this.description = description;
                        this.templateName = templateName;
                        this.lineNumber = lineNumber;
                        this.columnNumber = columnNumber;
                        this.endLineNumber = endLineNumber;
                        this.endColumnNumber = endColumnNumber;
                    })();
                }
            }
        } else if (((typeof description === 'string') || description === null) && ((template != null && template instanceof <any>TemplateObject) || template === null) && lineNumber === undefined && columnNumber === undefined && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let tobj: any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let templateName: any = tobj.getTemplate() == null ? null : tobj.getTemplate().getSourceName();
                    let lineNumber: any = tobj.beginLine;
                    let columnNumber: any = tobj.beginColumn;
                    let endLineNumber: any = tobj.endLine;
                    let endColumnNumber: any = tobj.endColumn;
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
                    (<any>Object).setPrototypeOf(this, ParseException.prototype);
                    if (this.currentToken === undefined) this.currentToken = null;
                    if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
                    if (this.message === undefined) this.message = null;
                    if (this.description === undefined) this.description = null;
                    if (this.columnNumber === undefined) this.columnNumber = 0;
                    if (this.lineNumber === undefined) this.lineNumber = 0;
                    if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
                    if (this.endLineNumber === undefined) this.endLineNumber = 0;
                    if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
                    if (this.tokenImage === undefined) this.tokenImage = null;
                    if (this.specialConstructor === undefined) this.specialConstructor = false;
                    if (this.templateName === undefined) this.templateName = null;
                    (() => {
                        this.description = description;
                        this.templateName = templateName;
                        this.lineNumber = lineNumber;
                        this.columnNumber = columnNumber;
                        this.endLineNumber = endLineNumber;
                        this.endColumnNumber = endColumnNumber;
                    })();
                }
            }
        } else if (description === undefined && template === undefined && lineNumber === undefined && columnNumber === undefined && endLineNumber === undefined && endColumnNumber === undefined && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            if (this.currentToken === undefined) this.currentToken = null;
            if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
            if (this.message === undefined) this.message = null;
            if (this.description === undefined) this.description = null;
            if (this.columnNumber === undefined) this.columnNumber = 0;
            if (this.lineNumber === undefined) this.lineNumber = 0;
            if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
            if (this.endLineNumber === undefined) this.endLineNumber = 0;
            if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
            if (this.tokenImage === undefined) this.tokenImage = null;
            if (this.specialConstructor === undefined) this.specialConstructor = false;
            if (this.templateName === undefined) this.templateName = null;
            this.eol = SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String("line.separator", "\n");
            (<any>Object).setPrototypeOf(this, ParseException.prototype);
            if (this.currentToken === undefined) this.currentToken = null;
            if (this.messageAndDescriptionRendered === undefined) this.messageAndDescriptionRendered = false;
            if (this.message === undefined) this.message = null;
            if (this.description === undefined) this.description = null;
            if (this.columnNumber === undefined) this.columnNumber = 0;
            if (this.lineNumber === undefined) this.lineNumber = 0;
            if (this.endColumnNumber === undefined) this.endColumnNumber = 0;
            if (this.endLineNumber === undefined) this.endLineNumber = 0;
            if (this.expectedTokenSequences === undefined) this.expectedTokenSequences = null;
            if (this.tokenImage === undefined) this.tokenImage = null;
            if (this.specialConstructor === undefined) this.specialConstructor = false;
            if (this.templateName === undefined) this.templateName = null;
        } else throw new Error('invalid overload');
    }

    /**
     * Should be used internally only; sets the name of the template that contains the error.
     * This is needed as the constructor that JavaCC automatically calls doesn't pass in the template, so we
     * set it somewhere later in an exception handler.
     * @param {String} templateName
     */
    public setTemplateName(templateName: string) {
        this.templateName = templateName;
        {
            this.messageAndDescriptionRendered = false;
            this.message = null;
        }
    }

    /**
     * Returns the error location plus the error description.
     * <p>
     * see #getDescription()
     * see #getTemplateName()
     * see #getLineNumber()
     * see #getColumnNumber()
     * @return {String}
     */
    public getMessage(): string {
        {
            if (this.messageAndDescriptionRendered) return this.message;
        }
        this.renderMessageAndDescription();
        {
            return this.message;
        }
    }

    /*private*/
    getDescription(): string {
        {
            if (this.messageAndDescriptionRendered) return this.description;
        }
        this.renderMessageAndDescription();
        {
            return this.description;
        }
    }

    /**
     * Returns the description of the error without error location or source quotations, or {@code null} if there's no
     * description available. This is useful in editors (IDE-s) where the error markers and the editor window itself
     * already carry this information, so it's redundant the repeat in the error dialog.
     * @return {String}
     */
    public getEditorMessage(): string {
        return this.getDescription();
    }

    /**
     * Returns the name (template-root relative path) of the template whose parsing was failed.
     * Maybe {@code null} if this is a non-stored template.
     *
     * @since 2.3.20
     * @return {String}
     */
    public getTemplateName(): string {
        return this.templateName;
    }

    /**
     * 1-based line number of the failing section, or 0 is the information is not available.
     * @return {number}
     */
    public getLineNumber(): number {
        return this.lineNumber;
    }

    /**
     * 1-based column number of the failing section, or 0 is the information is not available.
     * @return {number}
     */
    public getColumnNumber(): number {
        return this.columnNumber;
    }

    /**
     * 1-based line number of the last line that contains the failing section, or 0 if the information is not available.
     *
     * @since 2.3.21
     * @return {number}
     */
    public getEndLineNumber(): number {
        return this.endLineNumber;
    }

    /**
     * 1-based column number of the last character of the failing section, or 0 if the information is not available.
     * Note that unlike with Java string API-s, this column number is inclusive.
     *
     * @since 2.3.21
     * @return {number}
     */
    public getEndColumnNumber(): number {
        return this.endColumnNumber;
    }

    /*private*/
    renderMessageAndDescription() {
        let desc: string = this.getOrRenderDescription();
        let prefix: string;
        if (!this.isInJBossToolsMode()) {
            prefix = "Syntax error " + _MessageUtil.formatLocationForSimpleParsingError$java_lang_String$int$int(this.templateName, this.lineNumber, this.columnNumber) + ":\n";
        } else {
            prefix = "[col. " + this.columnNumber + "] ";
        }
        let msg: string = prefix + desc;
        desc = msg.substring(prefix.length);
        {
            this.message = msg;
            this.description = desc;
            this.messageAndDescriptionRendered = true;
        }
    }

    /*private*/
    isInJBossToolsMode(): boolean {
        // if (ParseException.jbossToolsMode == null) {
        //     try {
        //         ParseException.jbossToolsMode = ParseException.getClassLoader().toString().indexOf("[org.jboss.ide.eclipse.freemarker:") !== -1;
        //     } catch (e) {
        //         ParseException.jbossToolsMode = false;
        //     }
        //     ;
        // }
        // return ParseException.jbossToolsMode;
        return false;
    }

    /**
     * Returns the description of the error without the error location, or {@code null} if there's no description
     * available.
     * @return {String}
     * @private
     */

    /*private*/
    getOrRenderDescription(): string {
        {
            if (this.description != null) return this.description;
        }
        let tokenErrDesc: string;
        if (this.currentToken != null) {
            tokenErrDesc = this.getCustomTokenErrorDescription();
            if (tokenErrDesc == null) {
                let expected: StringBuilder = new StringBuilder("");
                let maxSize: number = 0;
                for (let i: number = 0; i < this.expectedTokenSequences.length; i++) {
                    if (i !== 0) {
                        expected.append(this.eol);
                    }
                    expected.append("    ");
                    if (maxSize < this.expectedTokenSequences[i].length) {
                        maxSize = this.expectedTokenSequences[i].length;
                    }
                    for (let j: number = 0; j < this.expectedTokenSequences[i].length; j++) {
                        if (j !== 0) expected.append(' ');
                        expected.append(this.tokenImage[this.expectedTokenSequences[i][j]]);
                    }
                }
                tokenErrDesc = "Encountered \"";
                let tok: Token = this.currentToken.next;
                for (let i: number = 0; i < maxSize; i++) {
                    if (i !== 0) tokenErrDesc += " ";
                    if (tok.kind === 0) {
                        tokenErrDesc += this.tokenImage[0];
                        break;
                    }
                    tokenErrDesc += this.add_escapes(tok.image);
                    tok = tok.next;
                }
                tokenErrDesc += "\", but ";
                if (this.expectedTokenSequences.length === 1) {
                    tokenErrDesc += "was expecting:" + this.eol;
                } else {
                    tokenErrDesc += "was expecting one of:" + this.eol;
                }
                tokenErrDesc += expected;
            }
        } else {
            tokenErrDesc = null;
        }
        return tokenErrDesc;
    }

    /*private*/
    getCustomTokenErrorDescription(): string {
        let nextToken: Token = this.currentToken.next;
        let kind: number = nextToken.kind;
        if (kind === FMParserConstants.EOF) {
            let endNames: Array<any> = <any>([]);
            for (let i: number = 0; i < this.expectedTokenSequences.length; i++) {
                let sequence: number[] = this.expectedTokenSequences[i];
                for (let j: number = 0; j < sequence.length; j++) {
                    switch ((sequence[j])) {
                        case 42 /* END_FOREACH */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#foreach");
                            break;
                        case 37 /* END_LIST */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#list");
                            break;
                        case 53 /* END_SWITCH */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#switch");
                            break;
                        case 36 /* END_IF */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#if");
                            break;
                        case 51 /* END_COMPRESS */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#compress");
                            break;
                        case 47 /* END_MACRO */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#macro");
                        case 46 /* END_FUNCTION */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#function");
                            break;
                        case 52 /* END_TRANSFORM */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#transform");
                            break;
                        case 71 /* END_ESCAPE */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#escape");
                            break;
                        case 73 /* END_NOESCAPE */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#noescape");
                            break;
                        case 45 /* END_ASSIGN */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#assign");
                            break;
                        case 43 /* END_LOCAL */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#local");
                            break;
                        case 44 /* END_GLOBAL */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#global");
                            break;
                        case 41 /* END_ATTEMPT */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "#attempt");
                            break;
                        case 137 /* CLOSING_CURLY_BRACKET */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "\"{\"");
                            break;
                        case 133 /* CLOSE_BRACKET */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "\"[\"");
                            break;
                        case 135 /* CLOSE_PAREN */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "\"(\"");
                            break;
                        case 75 /* UNIFIED_CALL_END */
                        :
                            /* add */
                            ((s, e) => {
                                if (s.indexOf(e) == -1) {
                                    s.push(e);
                                    return true;
                                } else {
                                    return false;
                                }
                            })(endNames, "@...");
                            break;
                    }
                }
            }
            return "Unexpected end of file reached." + (/* size */(<number>endNames.length) === 0 ? "" : " You have an unclosed " + this.concatWithOrs(endNames) + ".");
        } else if (kind === FMParserConstants.ELSE) {
            return "Unexpected directive, \"#else\". Check if you have a valid #if-#elseif-#else or #list-#else structure.";
        } else if (kind === FMParserConstants.END_IF || kind === FMParserConstants.ELSE_IF) {
            return "Unexpected directive, " + StringUtil.jQuote$java_lang_Object(nextToken) + ". Check if you have a valid #if-#elseif-#else structure.";
        }
        return null;
    }

    /*private*/
    concatWithOrs(endNames: Array<any>): string {
        let sb: StringBuilder = new StringBuilder("");
        for (let it: any = /* iterator */((a) => {
            var i = 0;
            return {
                next: function () {
                    return i < a.length ? a[i++] : null;
                }, hasNext: function () {
                    return i < a.length;
                }
            }
        })(endNames); it.hasNext();) {
            let endName: string = <string>it.next();
            if (sb.length() !== 0) {
                sb.append(" or ");
            }
            sb.append(endName);
        }
        return sb.toString();
    }

    /**
     * Used to convert raw characters to their escaped version
     * when these raw version cannot be used as part of an ASCII
     * string literal.
     * @param {String} str
     * @return {String}
     */
    add_escapes(str: string): string {
        let retval: StringBuilder = new StringBuilder("");
        let ch: string;
        for (let i: number = 0; i < str.length; i++) {
            switch ((str.charAt(i)).charCodeAt(0)) {
                case 0:
                    continue;
                case 8 /* '\b' */
                :
                    retval.append("\\b");
                    continue;
                case 9 /* '\t' */
                :
                    retval.append("\\t");
                    continue;
                case 10 /* '\n' */
                :
                    retval.append("\\n");
                    continue;
                case 12 /* '\f' */
                :
                    retval.append("\\f");
                    continue;
                case 13 /* '\r' */
                :
                    retval.append("\\r");
                    continue;
                case 34 /* '\"' */
                :
                    retval.append("\\\"");
                    continue;
                case 39 /* '\'' */
                :
                    retval.append("\\\'");
                    continue;
                case 92 /* '\\' */
                :
                    retval.append("\\\\");
                    continue;
                default:
                    if ((c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))((ch = str.charAt(i))) < 32 || (c => c.charCodeAt == null ? <any>c : c.charCodeAt(0))(ch) > 126) {
                        let s: string = "0000" + /* toString */('' + (ch));
                        retval.append("\\u" + s.substring(s.length - 4, s.length));
                    } else {
                        retval.append(ch);
                    }
                    continue;
            }
        }
        return retval.toString();
    }
}

ParseException["__class"] = "freemarker.core.ParseException";
ParseException["__interfaces"] = ["freemarker.core.FMParserConstants", "java.io.Serializable"];



