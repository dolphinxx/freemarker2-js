/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Expression} from '../core/Expression';
import {TemplateElement} from '../core/TemplateElement';
import {TemplateObject} from '../core/TemplateObject';
import {_ErrorDescriptionBuilder} from '../core/_ErrorDescriptionBuilder';
import {CollectionUtils} from './utility/CollectionUtils';
import {PrintWriter} from '../../java/io/PrintWriter';
import {StringWriter} from '../../java/io/StringWriter';
import {PrintWriterStackTraceWriter} from './PrintWriterStackTraceWriter';
import {PrintStreamStackTraceWriter} from './PrintStreamStackTraceWriter';
import {StackTraceWriter} from './StackTraceWriter';
import {PrintStream} from "../../java/io/PrintStream";
import {Exception} from "../../java/lang/Exception";

/**
 * The same as {link #TemplateException(String, Throwable, Environment)}; it's exists only for binary
 * backward-compatibility.
 * @param {String} description
 * @param {Error} cause
 * @param {Environment} env
 * @class
 * @extends Error
 */
export class TemplateException extends Exception{
    static FTL_INSTRUCTION_STACK_TRACE_TITLE : string = "FTL stack trace (\"~\" means nesting-related):";

    /*private*/ descriptionBuilder : _ErrorDescriptionBuilder;

    /*private*/ env : /*Environment*/any;

    /*private*/ blamedExpression : Expression;

    /*private*/ ftlInstructionStackSnapshot : TemplateElement[];

    /*private*/ renderedFtlInstructionStackSnapshot : string;

    /*private*/ renderedFtlInstructionStackSnapshotTop : string;

    /*private*/ description : string;

    /*private*/ messageWithoutStackTop : string;

    /*private*/ message : string;

    /*private*/ blamedExpressionStringCalculated : boolean;

    /*private*/ blamedExpressionString : string;

    /*private*/ positionsCalculated : boolean;

    /*private*/ templateName : string;

    /*private*/ templateSourceName : string;

    /*private*/ lineNumber : number;

    /*private*/ columnNumber : number;

    /*private*/ endLineNumber : number;

    /*private*/ endColumnNumber : number;

    /*private*/ lock : any;

    /*private*/ messageWasAlreadyPrintedForThisTrace : boolean;

    cause:any;

    public constructor(renderedDescription? : any, cause? : any, env? : any, blamedExpression? : any, descriptionBuilder? : any) {
        if(arguments.length === 4) {
            renderedDescription = null;
            cause = arguments[0];
            env = arguments[1];
            blamedExpression = arguments[2];
            descriptionBuilder = arguments[3];
        } else if(arguments.length === 3) {
        } else if(arguments.length === 2) {
            if(typeof arguments[0] === 'string') {
                cause = null;
                env = arguments[1];
            } else {
                renderedDescription = null;
                cause = arguments[0];
                env = arguments[1];
            }
        } else {
            renderedDescription = null;
            cause = null;
            env = arguments[0];
        }
        super(renderedDescription, cause);
        // if(env == null) {
        //     env = (require('../core/Environment').Environment).getCurrentEnvironment();
        // }
        this.env= env;
        this.blamedExpression = blamedExpression;
        this.descriptionBuilder = descriptionBuilder;
        this.description = renderedDescription;
        this.cause = cause;
        if(env != null) {
            this.ftlInstructionStackSnapshot = (require('../core/_CoreAPI')._CoreAPI).getInstructionStackSnapshot(env);
        }


        // if(((typeof renderedDescription === 'string') || renderedDescription === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.template.Environment')) || env === null) && ((blamedExpression != null && blamedExpression instanceof <any>Expression) || blamedExpression === null) && ((descriptionBuilder != null && descriptionBuilder instanceof <any>_ErrorDescriptionBuilder) || descriptionBuilder === null)) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     super(cause); this.message=cause;
        //     if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //     if(this.env===undefined) this.env = null;
        //     if(this.blamedExpression===undefined) this.blamedExpression = null;
        //     if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //     if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //     if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //     if(this.description===undefined) this.description = null;
        //     if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //     if(this.message===undefined) this.message = null;
        //     if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //     if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //     if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //     if(this.templateName===undefined) this.templateName = null;
        //     if(this.templateSourceName===undefined) this.templateSourceName = null;
        //     if(this.lineNumber===undefined) this.lineNumber = null;
        //     if(this.columnNumber===undefined) this.columnNumber = null;
        //     if(this.endLineNumber===undefined) this.endLineNumber = null;
        //     if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //     if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //     this.lock = <any>new Object();
        //     (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //     if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //     if(this.env===undefined) this.env = null;
        //     if(this.blamedExpression===undefined) this.blamedExpression = null;
        //     if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //     if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //     if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //     if(this.description===undefined) this.description = null;
        //     if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //     if(this.message===undefined) this.message = null;
        //     if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //     if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //     if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //     if(this.templateName===undefined) this.templateName = null;
        //     if(this.templateSourceName===undefined) this.templateSourceName = null;
        //     if(this.lineNumber===undefined) this.lineNumber = null;
        //     if(this.columnNumber===undefined) this.columnNumber = null;
        //     if(this.endLineNumber===undefined) this.endLineNumber = null;
        //     if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //     if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //     (() => {
        //         // if(env == null) env = Environment.getCurrentEnvironment();
        //         this.env = env;
        //         this.blamedExpression = blamedExpression;
        //         this.descriptionBuilder = descriptionBuilder;
        //         this.description = renderedDescription;
        //         // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //     })();
        // } else if(((renderedDescription != null && (renderedDescription["__classes"] && renderedDescription["__classes"].indexOf("java.lang.Throwable") >= 0) || renderedDescription != null && renderedDescription instanceof <any>Error) || renderedDescription === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.template.Environment')) || cause === null) && ((env != null && env instanceof <any>Expression) || env === null) && ((blamedExpression != null && blamedExpression instanceof <any>_ErrorDescriptionBuilder) || blamedExpression === null) && descriptionBuilder === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let cause : any = __args[0];
        //     let env : any = __args[1];
        //     let blamedExpr : any = __args[2];
        //     let descriptionBuilder : any = __args[3];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let renderedDescription : any = null;
        //         let blamedExpression : any = blamedExpr;
        //         super(cause); this.message=cause;
        //         if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //         if(this.env===undefined) this.env = null;
        //         if(this.blamedExpression===undefined) this.blamedExpression = null;
        //         if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //         if(this.description===undefined) this.description = null;
        //         if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //         if(this.message===undefined) this.message = null;
        //         if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //         if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //         if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //         if(this.templateName===undefined) this.templateName = null;
        //         if(this.templateSourceName===undefined) this.templateSourceName = null;
        //         if(this.lineNumber===undefined) this.lineNumber = null;
        //         if(this.columnNumber===undefined) this.columnNumber = null;
        //         if(this.endLineNumber===undefined) this.endLineNumber = null;
        //         if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //         if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //         this.lock = <any>new Object();
        //         (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //         if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //         if(this.env===undefined) this.env = null;
        //         if(this.blamedExpression===undefined) this.blamedExpression = null;
        //         if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //         if(this.description===undefined) this.description = null;
        //         if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //         if(this.message===undefined) this.message = null;
        //         if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //         if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //         if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //         if(this.templateName===undefined) this.templateName = null;
        //         if(this.templateSourceName===undefined) this.templateSourceName = null;
        //         if(this.lineNumber===undefined) this.lineNumber = null;
        //         if(this.columnNumber===undefined) this.columnNumber = null;
        //         if(this.endLineNumber===undefined) this.endLineNumber = null;
        //         if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //         if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //         (() => {
        //             // if(env == null) env = Environment.getCurrentEnvironment();
        //             this.env = env;
        //             this.blamedExpression = blamedExpression;
        //             this.descriptionBuilder = descriptionBuilder;
        //             this.description = renderedDescription;
        //             // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //         })();
        //     }
        // } else if(((typeof renderedDescription === 'string') || renderedDescription === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Exception") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.template.Environment')) || env === null) && blamedExpression === undefined && descriptionBuilder === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let description : any = __args[0];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let renderedDescription : any = description;
        //         let blamedExpression : any = null;
        //         let descriptionBuilder : any = null;
        //         super(cause); this.message=cause;
        //         if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //         if(this.env===undefined) this.env = null;
        //         if(this.blamedExpression===undefined) this.blamedExpression = null;
        //         if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //         if(this.description===undefined) this.description = null;
        //         if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //         if(this.message===undefined) this.message = null;
        //         if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //         if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //         if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //         if(this.templateName===undefined) this.templateName = null;
        //         if(this.templateSourceName===undefined) this.templateSourceName = null;
        //         if(this.lineNumber===undefined) this.lineNumber = null;
        //         if(this.columnNumber===undefined) this.columnNumber = null;
        //         if(this.endLineNumber===undefined) this.endLineNumber = null;
        //         if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //         if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //         this.lock = <any>new Object();
        //         (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //         if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //         if(this.env===undefined) this.env = null;
        //         if(this.blamedExpression===undefined) this.blamedExpression = null;
        //         if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //         if(this.description===undefined) this.description = null;
        //         if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //         if(this.message===undefined) this.message = null;
        //         if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //         if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //         if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //         if(this.templateName===undefined) this.templateName = null;
        //         if(this.templateSourceName===undefined) this.templateSourceName = null;
        //         if(this.lineNumber===undefined) this.lineNumber = null;
        //         if(this.columnNumber===undefined) this.columnNumber = null;
        //         if(this.endLineNumber===undefined) this.endLineNumber = null;
        //         if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //         if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //         (() => {
        //             // if(env == null) env = Environment.getCurrentEnvironment();
        //             this.env = env;
        //             this.blamedExpression = blamedExpression;
        //             this.descriptionBuilder = descriptionBuilder;
        //             this.description = renderedDescription;
        //             // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //         })();
        //     }
        // } else if(((typeof renderedDescription === 'string') || renderedDescription === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.template.Environment')) || env === null) && blamedExpression === undefined && descriptionBuilder === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let description : any = __args[0];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let renderedDescription : any = description;
        //         let blamedExpression : any = null;
        //         let descriptionBuilder : any = null;
        //         super(cause); this.message=cause;
        //         if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //         if(this.env===undefined) this.env = null;
        //         if(this.blamedExpression===undefined) this.blamedExpression = null;
        //         if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //         if(this.description===undefined) this.description = null;
        //         if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //         if(this.message===undefined) this.message = null;
        //         if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //         if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //         if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //         if(this.templateName===undefined) this.templateName = null;
        //         if(this.templateSourceName===undefined) this.templateSourceName = null;
        //         if(this.lineNumber===undefined) this.lineNumber = null;
        //         if(this.columnNumber===undefined) this.columnNumber = null;
        //         if(this.endLineNumber===undefined) this.endLineNumber = null;
        //         if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //         if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //         this.lock = <any>new Object();
        //         (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //         if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //         if(this.env===undefined) this.env = null;
        //         if(this.blamedExpression===undefined) this.blamedExpression = null;
        //         if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //         if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //         if(this.description===undefined) this.description = null;
        //         if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //         if(this.message===undefined) this.message = null;
        //         if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //         if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //         if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //         if(this.templateName===undefined) this.templateName = null;
        //         if(this.templateSourceName===undefined) this.templateSourceName = null;
        //         if(this.lineNumber===undefined) this.lineNumber = null;
        //         if(this.columnNumber===undefined) this.columnNumber = null;
        //         if(this.endLineNumber===undefined) this.endLineNumber = null;
        //         if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //         if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //         (() => {
        //             // if(env == null) env = Environment.getCurrentEnvironment();
        //             this.env = env;
        //             this.blamedExpression = blamedExpression;
        //             this.descriptionBuilder = descriptionBuilder;
        //             this.description = renderedDescription;
        //             // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //         })();
        //     }
        // } else if(((typeof renderedDescription === 'string') || renderedDescription === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.template.Environment')) || cause === null) && env === undefined && blamedExpression === undefined && descriptionBuilder === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let description : any = __args[0];
        //     let env : any = __args[1];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let cause : any = null;
        //         {
        //             let __args = Array.prototype.slice.call(arguments);
        //             let renderedDescription : any = description;
        //             let blamedExpression : any = null;
        //             let descriptionBuilder : any = null;
        //             super(cause); this.message=cause;
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             this.lock = <any>new Object();
        //             (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             (() => {
        //                 // if(env == null) env = Environment.getCurrentEnvironment();
        //                 this.env = env;
        //                 this.blamedExpression = blamedExpression;
        //                 this.descriptionBuilder = descriptionBuilder;
        //                 this.description = renderedDescription;
        //                 // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //             })();
        //         }
        //     }
        // } else if(((renderedDescription != null && (renderedDescription["__classes"] && renderedDescription["__classes"].indexOf("java.lang.Exception") >= 0) || renderedDescription != null && renderedDescription instanceof <any>Error) || renderedDescription === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.template.Environment')) || cause === null) && env === undefined && blamedExpression === undefined && descriptionBuilder === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let cause : any = __args[0];
        //     let env : any = __args[1];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let description : any = null;
        //         {
        //             let __args = Array.prototype.slice.call(arguments);
        //             let renderedDescription : any = description;
        //             let blamedExpression : any = null;
        //             let descriptionBuilder : any = null;
        //             super(cause); this.message=cause;
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             this.lock = <any>new Object();
        //             (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             (() => {
        //                 // if(env == null) env = Environment.getCurrentEnvironment();
        //                 this.env = env;
        //                 this.blamedExpression = blamedExpression;
        //                 this.descriptionBuilder = descriptionBuilder;
        //                 this.description = renderedDescription;
        //                 // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //             })();
        //         }
        //     }
        // } else if(((renderedDescription != null && (renderedDescription["__classes"] && renderedDescription["__classes"].indexOf("java.lang.Throwable") >= 0) || renderedDescription != null && renderedDescription instanceof <any>Error) || renderedDescription === null) && ((ClassUtil.isInstanceOf(cause, 'freemarker.template.Environment')) || cause === null) && env === undefined && blamedExpression === undefined && descriptionBuilder === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let cause : any = __args[0];
        //     let env : any = __args[1];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let description : any = null;
        //         {
        //             let __args = Array.prototype.slice.call(arguments);
        //             let renderedDescription : any = description;
        //             let blamedExpression : any = null;
        //             let descriptionBuilder : any = null;
        //             super(cause); this.message=cause;
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             this.lock = <any>new Object();
        //             (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             (() => {
        //                 // if(env == null) env = Environment.getCurrentEnvironment();
        //                 this.env = env;
        //                 this.blamedExpression = blamedExpression;
        //                 this.descriptionBuilder = descriptionBuilder;
        //                 this.description = renderedDescription;
        //                 // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //             })();
        //         }
        //     }
        // } else if(((ClassUtil.isInstanceOf(renderedDescription, 'freemarker.template.Environment')) || renderedDescription === null) && cause === undefined && env === undefined && blamedExpression === undefined && descriptionBuilder === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let env : any = __args[0];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let description : any = null;
        //         let cause : any = null;
        //         {
        //             let __args = Array.prototype.slice.call(arguments);
        //             let renderedDescription : any = description;
        //             let blamedExpression : any = null;
        //             let descriptionBuilder : any = null;
        //             super(cause); this.message=cause;
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             this.lock = <any>new Object();
        //             (<any>Object).setPrototypeOf(this, TemplateException.prototype);
        //             if(this.descriptionBuilder===undefined) this.descriptionBuilder = null;
        //             if(this.env===undefined) this.env = null;
        //             if(this.blamedExpression===undefined) this.blamedExpression = null;
        //             if(this.ftlInstructionStackSnapshot===undefined) this.ftlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshot===undefined) this.renderedFtlInstructionStackSnapshot = null;
        //             if(this.renderedFtlInstructionStackSnapshotTop===undefined) this.renderedFtlInstructionStackSnapshotTop = null;
        //             if(this.description===undefined) this.description = null;
        //             if(this.messageWithoutStackTop===undefined) this.messageWithoutStackTop = null;
        //             if(this.message===undefined) this.message = null;
        //             if(this.blamedExpressionStringCalculated===undefined) this.blamedExpressionStringCalculated = false;
        //             if(this.blamedExpressionString===undefined) this.blamedExpressionString = null;
        //             if(this.positionsCalculated===undefined) this.positionsCalculated = false;
        //             if(this.templateName===undefined) this.templateName = null;
        //             if(this.templateSourceName===undefined) this.templateSourceName = null;
        //             if(this.lineNumber===undefined) this.lineNumber = null;
        //             if(this.columnNumber===undefined) this.columnNumber = null;
        //             if(this.endLineNumber===undefined) this.endLineNumber = null;
        //             if(this.endColumnNumber===undefined) this.endColumnNumber = null;
        //             if(this.messageWasAlreadyPrintedForThisTrace===undefined) this.messageWasAlreadyPrintedForThisTrace = false;
        //             (() => {
        //                 // if(env == null) env = Environment.getCurrentEnvironment();
        //                 this.env = env;
        //                 this.blamedExpression = blamedExpression;
        //                 this.descriptionBuilder = descriptionBuilder;
        //                 this.description = renderedDescription;
        //                 // if(env != null) this.ftlInstructionStackSnapshot = _CoreAPI.getInstructionStackSnapshot(env);
        //             })();
        //         }
        //     }
        // } else throw new Error('invalid overload');
    }

    /*private*/ renderMessages() {
        let description : string = this.getDescription();
        if(description != null && description.length !== 0) {
            this.messageWithoutStackTop = description;
        } else if((<Error>null) != null) {
            this.messageWithoutStackTop = "No error description was specified for this error; low-level message: " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>(<Error>null).constructor)) + ": " + (<Error>null).message;
        } else {
            this.messageWithoutStackTop = "[No error description was available.]";
        }
        let stackTopFew : string = this.getFTLInstructionStackTopFew();
        if(stackTopFew != null) {
            this.message = this.messageWithoutStackTop + "\n\n" + (require('../core/_CoreAPI')._CoreAPI).ERROR_MESSAGE_HR + "\n" + TemplateException.FTL_INSTRUCTION_STACK_TRACE_TITLE + "\n" + stackTopFew + (require('../core/_CoreAPI')._CoreAPI).ERROR_MESSAGE_HR;
            this.messageWithoutStackTop = this.message.substring(0, this.messageWithoutStackTop.length);
        } else {
            this.message = this.messageWithoutStackTop;
        }
    }

    /*private*/ calculatePosition() {
        if(!this.positionsCalculated) {
            let templateObject : TemplateObject = this.blamedExpression != null?this.blamedExpression:(this.ftlInstructionStackSnapshot != null && this.ftlInstructionStackSnapshot.length !== 0?this.ftlInstructionStackSnapshot[0]:null);
            if(templateObject != null && templateObject.getBeginLine() > 0) {
                let template : /*Template*/any = templateObject.getTemplate();
                this.templateName = template != null?template.getName():null;
                this.templateSourceName = template != null?template.getSourceName():null;
                this.lineNumber = templateObject.getBeginLine();
                this.columnNumber = templateObject.getBeginColumn();
                this.endLineNumber = templateObject.getEndLine();
                this.endColumnNumber = templateObject.getEndColumn();
            }
            this.positionsCalculated = true;
            this.deleteFTLInstructionStackSnapshotIfNotNeeded();
        }
    }

    /**
     * @deprecated Java 1.4 has introduced {link #getCause()} - use that instead, especially as this can't return
     * runtime exceptions and errors as is.
     * @return {Error}
     */
    public getCauseException() : Error {
        return ((<Error>null) != null && ((<Error>null)["__classes"] && (<Error>null)["__classes"].indexOf("java.lang.Exception") >= 0) || (<Error>null) != null && (<Error>null) instanceof <any>Error)?<Error>(<Error>null):Object.defineProperty(new Error("Wrapped to Exception: " + (<Error>null)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.Exception'] });
    }

    /**
     * Returns the snapshot of the FTL stack trace at the time this exception was created.
     * @return {String}
     */
    public getFTLInstructionStack() : string {
        if(this.ftlInstructionStackSnapshot != null || this.renderedFtlInstructionStackSnapshot != null) {
            if(this.renderedFtlInstructionStackSnapshot == null) {
                let sw : StringWriter = new StringWriter();
                let pw : PrintWriter = new PrintWriter(sw);
                (require('../core/_CoreAPI')._CoreAPI).outputInstructionStack(this.ftlInstructionStackSnapshot, false, pw);
                pw.close();
                if(this.renderedFtlInstructionStackSnapshot == null) {
                    this.renderedFtlInstructionStackSnapshot = sw.toString();
                    this.deleteFTLInstructionStackSnapshotIfNotNeeded();
                }
            }
            return this.renderedFtlInstructionStackSnapshot;
        } else {
            return null;
        }
    }

    /*private*/ getFTLInstructionStackTopFew() : string {
        if(this.ftlInstructionStackSnapshot != null || this.renderedFtlInstructionStackSnapshotTop != null) {
            if(this.renderedFtlInstructionStackSnapshotTop == null) {
                let stackSize : number = this.ftlInstructionStackSnapshot.length;
                let s : string;
                if(stackSize === 0) {
                    s = "";
                } else {
                    let sw : StringWriter = new StringWriter();
                    (require('../core/_CoreAPI')._CoreAPI).outputInstructionStack(this.ftlInstructionStackSnapshot, true, sw);
                    s = sw.toString();
                }
                if(this.renderedFtlInstructionStackSnapshotTop == null) {
                    this.renderedFtlInstructionStackSnapshotTop = s;
                    this.deleteFTLInstructionStackSnapshotIfNotNeeded();
                }
            }
            return this.renderedFtlInstructionStackSnapshotTop.length !== 0?this.renderedFtlInstructionStackSnapshotTop:null;
        } else {
            return null;
        }
    }

    /*private*/ deleteFTLInstructionStackSnapshotIfNotNeeded() {
        if(this.renderedFtlInstructionStackSnapshot != null && this.renderedFtlInstructionStackSnapshotTop != null && (this.positionsCalculated || this.blamedExpression != null)) {
            this.ftlInstructionStackSnapshot = null;
        }
    }

    /*private*/ getDescription() : string {
        if(this.description == null && this.descriptionBuilder != null) {
            this.description = this.descriptionBuilder.toString$freemarker_core_TemplateElement$boolean(this.getFailingInstruction(), this.env == null || this.env.getShowErrorTips());
            this.descriptionBuilder = null;
        }
        return this.description;
    }

    /*private*/ getFailingInstruction() : TemplateElement {
        if(this.ftlInstructionStackSnapshot != null && this.ftlInstructionStackSnapshot.length > 0) {
            return this.ftlInstructionStackSnapshot[0];
        } else {
            return null;
        }
    }

    /**
     * @return {Environment} the execution environment in which the exception occurred.
     * {@code null} if the exception was deserialized.
     */
    public getEnvironment() : /*Environment*/any {
        return this.env;
    }

    public printStackTrace$java_io_PrintStream(out : PrintStream) {
        this._printStackTrace$java_io_PrintStream$boolean$boolean$boolean(out, true, true, true);
    }

    /**
     * Overrides {link Throwable#_printStackTrace(PrintStream)} so that it will include the FTL stack trace.
     * @param {PrintStream} out
     */
    public printStackTrace(out? : any) : any {
        if(((out != null && out instanceof <any>PrintStream) || out === null)) {
            return <any>this.printStackTrace$java_io_PrintStream(out);
        } else if(((out != null && out instanceof <any>PrintWriter) || out === null)) {
            return <any>this.printStackTrace$java_io_PrintWriter(out);
        } else throw new Error('invalid overload');
    }

    public printStackTrace$java_io_PrintWriter(out : PrintWriter) {
        this._printStackTrace$java_io_PrintWriter$boolean$boolean$boolean(out, true, true, true);
    }

    public _printStackTrace$java_io_PrintWriter$boolean$boolean$boolean(out : PrintWriter, heading : boolean, ftlStackTrace : boolean, javaStackTrace : boolean) {
        this._printStackTrace$freemarker_template_StackTraceWriter$boolean$boolean$boolean(new PrintWriterStackTraceWriter(out), heading, ftlStackTrace, javaStackTrace);
    }

    /**
     * @param {boolean} heading        should the heading at the top be printed
     * @param {boolean} ftlStackTrace  should the FTL stack trace be printed
     * @param {boolean} javaStackTrace should the Java stack trace be printed
     * @since 2.3.20
     * @param {PrintWriter} out
     */
    public _printStackTrace(out? : any, heading? : any, ftlStackTrace? : any, javaStackTrace? : any) : any {
        if(((out != null && out instanceof <any>PrintWriter) || out === null) && ((typeof heading === 'boolean') || heading === null) && ((typeof ftlStackTrace === 'boolean') || ftlStackTrace === null) && ((typeof javaStackTrace === 'boolean') || javaStackTrace === null)) {
            return <any>this._printStackTrace$java_io_PrintWriter$boolean$boolean$boolean(out, heading, ftlStackTrace, javaStackTrace);
        } else if(((out != null && out instanceof <any>PrintStream) || out === null) && ((typeof heading === 'boolean') || heading === null) && ((typeof ftlStackTrace === 'boolean') || ftlStackTrace === null) && ((typeof javaStackTrace === 'boolean') || javaStackTrace === null)) {
            return <any>this._printStackTrace$java_io_PrintStream$boolean$boolean$boolean(out, heading, ftlStackTrace, javaStackTrace);
        } else if(((out != null && (out["__interfaces"] != null && out["__interfaces"].indexOf("freemarker.template.StackTraceWriter") >= 0 || out.constructor != null && out.constructor["__interfaces"] != null && out.constructor["__interfaces"].indexOf("freemarker.template.StackTraceWriter") >= 0)) || out === null) && ((typeof heading === 'boolean') || heading === null) && ((typeof ftlStackTrace === 'boolean') || ftlStackTrace === null) && ((typeof javaStackTrace === 'boolean') || javaStackTrace === null)) {
            return <any>this._printStackTrace$freemarker_template_StackTraceWriter$boolean$boolean$boolean(out, heading, ftlStackTrace, javaStackTrace);
        } else throw new Error('invalid overload');
    }

    public _printStackTrace$java_io_PrintStream$boolean$boolean$boolean(out : PrintStream, heading : boolean, ftlStackTrace : boolean, javaStackTrace : boolean) {
        this._printStackTrace$freemarker_template_StackTraceWriter$boolean$boolean$boolean(new PrintStreamStackTraceWriter(out), heading, ftlStackTrace, javaStackTrace);
    }

    /*private*/ _printStackTrace$freemarker_template_StackTraceWriter$boolean$boolean$boolean(out : StackTraceWriter, heading : boolean, ftlStackTrace : boolean, javaStackTrace : boolean) {
        if(this.message == null) {
            this.renderMessages();
        }
        if(heading) {
            out['println$java_lang_Object']("FreeMarker template error:");
        }
        if(ftlStackTrace) {
            let stackTrace : string = this.getFTLInstructionStack();
            if(stackTrace != null) {
                out['println$java_lang_Object'](this.getMessageWithoutStackTop());
                out.println();
                out['println$java_lang_Object']((require('../core/_CoreAPI')._CoreAPI).ERROR_MESSAGE_HR);
                out['println$java_lang_Object'](TemplateException.FTL_INSTRUCTION_STACK_TRACE_TITLE);
                out.print(stackTrace);
                out['println$java_lang_Object']((require('../core/_CoreAPI')._CoreAPI).ERROR_MESSAGE_HR);
            } else {
                ftlStackTrace = false;
                javaStackTrace = true;
            }
        }
        if(javaStackTrace) {
            if(ftlStackTrace) {
                out.println();
                out['println$java_lang_Object']("Java stack trace (for programmers):");
                out['println$java_lang_Object']((require('../core/_CoreAPI')._CoreAPI).ERROR_MESSAGE_HR);
                this.messageWasAlreadyPrintedForThisTrace = true;
                try {
                    out.printStandardStackTrace(this);
                } finally {
                    this.messageWasAlreadyPrintedForThisTrace = false;
                }
            } else {
                out.printStandardStackTrace(this);
            }
            if((<Error>null) != null) {
                let causeCause : Error = (<Error>null);
                if(causeCause == null) {
                    try {
                        let m : Function = /* getMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return c.prototype[p]; else return null; })((<any>(<Error>null).constructor),"getRootCause");
                        let rootCause : Error = <Error>/* invoke */m.apply((<Error>null), [CollectionUtils.EMPTY_OBJECT_ARRAY_$LI$()]);
                        if(rootCause != null) {
                            out['println$java_lang_Object']("ServletException root cause: ");
                            out.printStandardStackTrace(rootCause);
                        }
                    } catch(exc) {
                    }
                }
            }
        }
    }

    public printStandardStackTrace$java_io_PrintStream(ps : PrintStream) {
        console.error(this.message, this.cause);
    }

    /**
     * Prints the stack trace as if wasn't overridden by {link TemplateException}.
     * 
     * @since 2.3.20
     * @param {PrintStream} ps
     */
    public printStandardStackTrace(ps? : any) : any {
        if(((ps != null && ps instanceof <any>PrintStream) || ps === null)) {
            return <any>this.printStandardStackTrace$java_io_PrintStream(ps);
        } else if(((ps != null && ps instanceof <any>PrintWriter) || ps === null)) {
            return <any>this.printStandardStackTrace$java_io_PrintWriter(ps);
        } else throw new Error('invalid overload');
    }

    public printStandardStackTrace$java_io_PrintWriter(pw : PrintWriter) {
        console.error(this.message, this.cause);
    }

    /**
     * 
     * @return {String}
     */
    public getMessage() : string {
        if(this.messageWasAlreadyPrintedForThisTrace) {
            return "[... Exception message was already printed; see it above ...]";
        } else {
            if(this.message == null) this.renderMessages();
            return this.message;
        }
    }

    /**
     * Similar to {link #getMessage()}, but it doesn't contain the position of the failing instruction at then end
     * of the text. It might contains the position of the failing <em>expression</em> though as part of the expression
     * quotation, as that's the part of the description.
     * @return {String}
     */
    public getMessageWithoutStackTop() : string {
        if(this.messageWithoutStackTop == null) this.renderMessages();
        return this.messageWithoutStackTop;
    }

    /**
     * 1-based line number of the failing section, or {@code null} if the information is not available.
     * 
     * @since 2.3.21
     * @return {Integer}
     */
    public getLineNumber() : number {
        if(!this.positionsCalculated) {
            this.calculatePosition();
        }
        return this.lineNumber;
    }

    /**
     * Returns the name ({link Template#getName()}) of the template where the error has occurred, or {@code null} if
     * the information isn't available. This shouldn't be used for showing the error position; use
     * {link #getTemplateSourceName()} instead.
     * 
     * @since 2.3.21
     * @deprecated Use {link #getTemplateSourceName()} instead, unless you are really sure that this is what you want.
     * This method isn't really deprecated, it's just marked so to warn users about this.
     * @return {String}
     */
    public getTemplateName() : string {
        if(!this.positionsCalculated) {
            this.calculatePosition();
        }
        return this.templateName;
    }

    /**
     * Returns the source name ({link Template#getSourceName()}) of the template where the error has occurred, or
     * {@code null} if the information isn't available. This is what should be used for showing the error position.
     * 
     * @since 2.3.22
     * @return {String}
     */
    public getTemplateSourceName() : string {
        if(!this.positionsCalculated) {
            this.calculatePosition();
        }
        return this.templateSourceName;
    }

    /**
     * 1-based column number of the failing section, or {@code null} if the information is not available.
     * 
     * @since 2.3.21
     * @return {Integer}
     */
    public getColumnNumber() : number {
        if(!this.positionsCalculated) {
            this.calculatePosition();
        }
        return this.columnNumber;
    }

    /**
     * 1-based line number of the last line that contains the failing section, or {@code null} if the information is not
     * available.
     * 
     * @since 2.3.21
     * @return {Integer}
     */
    public getEndLineNumber() : number {
        if(!this.positionsCalculated) {
            this.calculatePosition();
        }
        return this.endLineNumber;
    }

    /**
     * 1-based column number of the last character of the failing template section, or {@code null} if the information
     * is not available. Note that unlike with Java string API-s, this column number is inclusive.
     * 
     * @since 2.3.21
     * @return {Integer}
     */
    public getEndColumnNumber() : number {
        if(!this.positionsCalculated) {
            this.calculatePosition();
        }
        return this.endColumnNumber;
    }

    /**
     * If there was a blamed expression attached to this exception, it returns its canonical form, otherwise it returns
     * {@code null}. This expression should always be inside the failing FTL instruction.
     * 
     * <p>The typical application of this is getting the undefined expression from {link InvalidReferenceException}-s.
     * 
     * @since 2.3.21
     * @return {String}
     */
    public getBlamedExpressionString() : string {
        if(!this.blamedExpressionStringCalculated) {
            if(this.blamedExpression != null) {
                this.blamedExpressionString = this.blamedExpression.getCanonicalForm();
            }
            this.blamedExpressionStringCalculated = true;
        }
        return this.blamedExpressionString;
    }

    getBlamedExpression() : Expression {
        return this.blamedExpression;
    }

    /*private*/ writeObject(out : /*ObjectOutputStream*/any) {
        this.getFTLInstructionStack();
        this.getFTLInstructionStackTopFew();
        this.getDescription();
        this.calculatePosition();
        this.getBlamedExpressionString();
        out.defaultWriteObject();
    }

    /*private*/ readObject(__in : /*ObjectInputStream*/any) {
        this.lock = <any>new Object();
        __in.defaultReadObject();
    }
}
TemplateException["__class"] = "freemarker.template.TemplateException";
TemplateException["__interfaces"] = ["java.io.Serializable"];





