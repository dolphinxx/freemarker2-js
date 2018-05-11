/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleScalar} from '../SimpleScalar';
import {TemplateModel} from '../TemplateModel';
import {TemplateModelException} from '../TemplateModelException';
import {TemplateScalarModel} from '../TemplateScalarModel';
import {TemplateTransformModel} from '../TemplateTransformModel';
import {Writer} from '../../../java/io/Writer';
import {StringBuilder} from '../../../java/lang/StringBuilder';
import {Map} from "../../../java/util/Map";
import {ClassUtil} from "./ClassUtil";

/**
 * A transform that captures the output of a block of FTL code and stores that in a variable.
 * 
 * <p>As this transform is initially present in the shared variable set, you can always
 * access it from the templates:</p>
 * 
 * <pre>
 * &lt;@capture_output var="captured"&gt;
 * ...
 * &lt;/@capture_output&gt;
 * </pre>
 * 
 * <p>And later in the template you can use the captured output:</p>
 * <p>
 * ${captured}
 * 
 * <p>This transform requires one of three parameters: <code>var</code>, <code>local</code>, or <code>global</code>.
 * Each of them specifies the name of the variable that stores the captured output, but the first creates a
 * variable in a name-space (as &lt;#assign&gt;), the second creates a macro-local variable (as &lt;#local&gt;),
 * and the last creates a global variable (as &lt;#global&gt;).
 * </p>
 * <p>In the case of an assignment within a namespace, there is an optional parameter
 * <code>namespace</code> that indicates in which namespace to do the assignment.
 * if this is omitted, the current namespace is used, and this will be, by far, the most
 * common usage pattern.</p>
 * 
 * @deprecated Use block-assignments instead, like <code>&lt;assign x&gt;...&lt;/assign&gt;</code>.
 * @class
 */
export class CaptureOutput implements TemplateTransformModel {
    public getWriter(out : Writer, args : Map<any, any>) : Writer {
        let errmsg : string = "Must specify the name of the variable in which to capture the output with the \'var\' or \'local\' or \'global\' parameter.";
        if(args == null) throw new TemplateModelException(errmsg);
        let local : boolean = false;
        let global : boolean = false;
        let nsModel : TemplateModel = <TemplateModel><any>/* get */args.get("namespace");
        let varNameModel : any = /* get */args.get("var");
        if(varNameModel == null) {
            varNameModel = /* get */args.get("local");
            if(varNameModel == null) {
                varNameModel = /* get */args.get("global");
                global = true;
            } else {
                local = true;
            }
            if(varNameModel == null) {
                throw new TemplateModelException(errmsg);
            }
        }
        if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>args) === 2) {
            if(nsModel == null) {
                throw new TemplateModelException("Second parameter can only be namespace");
            }
            if(local) {
                throw new TemplateModelException("Cannot specify namespace for a local assignment");
            }
            if(global) {
                throw new TemplateModelException("Cannot specify namespace for a global assignment");
            }
            if(!(ClassUtil.isInstanceOf(nsModel, 'freemarker.core.Environment.Namespace'))) {
                throw new TemplateModelException("namespace parameter does not specify a namespace. It is a " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>nsModel.constructor)));
            }
        } else if(/* size */((m) => { let r=0; m.forEach((v, k, m) => r++); return r; })(<any>args) !== 1) throw new TemplateModelException("Bad parameters. Use only one of \'var\' or \'local\' or \'global\' parameters.");
        if(!(varNameModel != null && (varNameModel["__interfaces"] != null && varNameModel["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || varNameModel.constructor != null && varNameModel.constructor["__interfaces"] != null && varNameModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
            throw new TemplateModelException("\'var\' or \'local\' or \'global\' parameter doesn\'t evaluate to a string");
        }
        let varName : string = (<TemplateScalarModel><any>varNameModel).getAsString();
        if(varName == null) {
            throw new TemplateModelException("\'var\' or \'local\' or \'global\' parameter evaluates to null string");
        }
        let buf : StringBuilder = new StringBuilder("");
        let env : /*Environment*/any = (require('../../core/Environment').Environment).getCurrentEnvironment();
        let localVar : boolean = local;
        let globalVar : boolean = global;
        return new CaptureOutput.CaptureOutput$0(this, buf, out, localVar, env, varName, globalVar, nsModel);
    }

    constructor() {
    }
}
CaptureOutput["__class"] = "freemarker.template.utility.CaptureOutput";
CaptureOutput["__interfaces"] = ["freemarker.template.TemplateTransformModel","freemarker.template.TemplateModel"];



export namespace CaptureOutput {

    export class CaptureOutput$0 extends Writer{
        public __parent: any;
        /**
         * 
         * @param {Array} cbuf
         * @param {number} off
         * @param {number} len
         */
        public write(cbuf : string[], off : number, len : number) {
            this.buf.append(cbuf, off, len);
        }

        /**
         * 
         */
        public flush() {
            this.out.flush();
        }

        /**
         * 
         */
        public close() {
            let result : SimpleScalar = new SimpleScalar(this.buf.toString());
            try {
                if(this.localVar) {
                    this.env.setLocalVariable(this.varName, result);
                } else if(this.globalVar) {
                    this.env.setGlobalVariable(this.varName, result);
                } else {
                    if(this.nsModel == null) {
                        this.env.setVariable(this.varName, result);
                    } else {
                        (/*<Environment.Namespace>*/<any>this.nsModel).put$java_lang_String$java_lang_Object(this.varName, result);
                    }
                }
            } catch(ise) {
                throw Object.defineProperty(new Error("Could not set variable " + this.varName + ": " + ise.message), '__classes', { configurable: true, value: ['java.lang.Throwable','java.io.IOException','java.lang.Object','java.lang.Exception'] });
            }
        }

        constructor(__parent: any, private buf: any, private out: any, private localVar: any, private env: any, private varName: any, private globalVar: any, private nsModel: any) {
            super();
            this.__parent = __parent;
        }
    }
    CaptureOutput$0["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];


}




