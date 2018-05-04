/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateElement } from './TemplateElement';
import { Environment } from './Environment';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { Expression } from './Expression';
import { ParameterRole } from './ParameterRole';
import { LocalContext } from './LocalContext';
import { Macro } from './Macro';

/**
 * An instruction that processes the nested block within a macro instruction.
 * @extends TemplateElement
 * @class
 */
export class BodyInstruction extends TemplateElement {
    /*private*/ bodyParameters : Array<any>;

    constructor(bodyParameters : Array<any>) {
        super();
        if(this.bodyParameters===undefined) this.bodyParameters = null;
        this.bodyParameters = bodyParameters;
    }

    getBodyParameters() : Array<any> {
        return this.bodyParameters;
    }

    /**
     * There is actually a subtle but essential point in the code below.
     * A macro operates in the context in which it's defined. However,
     * a nested block within a macro instruction is defined in the
     * context in which the macro was invoked. So, we actually need to
     * temporarily switch the namespace and macro context back to
     * what it was before macro invocation to implement this properly.
     * I (JR) realized this thanks to some incisive comments from Daniel Dekany.
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let bodyContext : BodyInstruction.Context = new BodyInstruction.Context(this, env);
        env.invokeNestedContent(bodyContext);
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @return {String}
     */
    dump(canonical : boolean) : string {
        let sb : StringBuilder = new StringBuilder("");
        if(canonical) sb.append('<');
        sb.append(this.getNodeTypeSymbol());
        if(this.bodyParameters != null) {
            for(let i : number = 0; i < /* size */(<number>this.bodyParameters.length); i++) {
                sb.append(' ');
                sb.append((<Expression>/* get */this.bodyParameters[i]).getCanonicalForm());
            };
        }
        if(canonical) sb.append('>');
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#nested";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return this.bodyParameters != null?/* size */(<number>this.bodyParameters.length):0;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        this.checkIndex(idx);
        return /* get */this.bodyParameters[idx];
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        this.checkIndex(idx);
        return ParameterRole.PASSED_VALUE_$LI$();
    }

    checkIndex(idx : number) {
        if(this.bodyParameters == null || idx >= /* size */(<number>this.bodyParameters.length)) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
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
BodyInstruction["__class"] = "freemarker.core.BodyInstruction";


export namespace BodyInstruction {

    export class Context implements LocalContext {
        public __parent: any;
        invokingMacroContext : Macro.Context;

        bodyVars : Environment.Namespace;

        constructor(__parent: any, env : Environment) {
            this.__parent = __parent;
            if(this.invokingMacroContext===undefined) this.invokingMacroContext = null;
            if(this.bodyVars===undefined) this.bodyVars = null;
            this.invokingMacroContext = env.getCurrentMacroContext();
            let bodyParameterNames : Array<any> = this.invokingMacroContext.nestedContentParameterNames;
            if(__parent.bodyParameters != null) {
                for(let i : number = 0; i < /* size */(<number>__parent.bodyParameters.length); i++) {
                    let exp : Expression = <Expression>/* get */__parent.bodyParameters[i];
                    let tm : TemplateModel = exp.eval(env);
                    if(bodyParameterNames != null && i < /* size */(<number>bodyParameterNames.length)) {
                        let bodyParameterName : string = <string>/* get */bodyParameterNames[i];
                        if(this.bodyVars == null) {
                            this.bodyVars = new Environment.Namespace(this.__parent);
                        }
                        this.bodyVars.put$java_lang_String$java_lang_Object(bodyParameterName, tm);
                    }
                };
            }
        }

        public getLocalVariable(name : string) : TemplateModel {
            return this.bodyVars == null?null:this.bodyVars.get$java_lang_String(name);
        }

        public getLocalVariableNames() : Array<any> {
            let bodyParameterNames : Array<any> = this.invokingMacroContext.nestedContentParameterNames;
            return bodyParameterNames == null?Collections.EMPTY_LIST:bodyParameterNames;
        }
    }
    Context["__class"] = "freemarker.core.BodyInstruction.Context";
    Context["__interfaces"] = ["freemarker.core.LocalContext"];


}



