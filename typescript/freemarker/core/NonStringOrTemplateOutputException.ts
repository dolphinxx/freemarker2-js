/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../template/TemplateModel';
import { UnexpectedTypeException } from './UnexpectedTypeException';
import { NonStringException } from './NonStringException';
import { TemplateMarkupOutputModel } from './TemplateMarkupOutputModel';
import { Environment } from './Environment';
import { _ErrorDescriptionBuilder } from './_ErrorDescriptionBuilder';
import { Expression } from './Expression';
import { InvalidReferenceException } from './InvalidReferenceException';

/**
 * Indicates that a {link TemplateScalarModel} (or maybe something that can be automatically coerced
 * to that) or {link TemplateMarkupOutputModel} value was expected, but the value had a different type.
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonStringOrTemplateOutputException extends UnexpectedTypeException {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!NonStringOrTemplateOutputException.__static_initialized) { NonStringOrTemplateOutputException.__static_initialized = true; NonStringOrTemplateOutputException.__static_initializer_0(); } }

    static STRING_COERCABLE_TYPES_OR_TOM_DESC : string; public static STRING_COERCABLE_TYPES_OR_TOM_DESC_$LI$() : string { NonStringOrTemplateOutputException.__static_initialize(); if(NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC == null) NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC = NonStringException.STRING_COERCABLE_TYPES_DESC + ", or \"template output\" "; return NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC; };

    static STRING_COERCABLE_TYPES_AND_TOM : Array<any>; public static STRING_COERCABLE_TYPES_AND_TOM_$LI$() : Array { NonStringOrTemplateOutputException.__static_initialize(); return NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM; };

    static __static_initializer_0() {
        NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM = (s => { let a=[]; while(s-->0) a.push(null); return a; })(NonStringException.STRING_COERCABLE_TYPES.length + 1);
        let i : number;
        for(i = 0; i < NonStringException.STRING_COERCABLE_TYPES_$LI$().length; i++) {
            NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM_$LI$()[i] = NonStringException.STRING_COERCABLE_TYPES_$LI$()[i];
        };
        NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM_$LI$()[i] = "freemarker.core.TemplateMarkupOutputModel";
    }

    static DEFAULT_DESCRIPTION : string; public static DEFAULT_DESCRIPTION_$LI$() : string { NonStringOrTemplateOutputException.__static_initialize(); if(NonStringOrTemplateOutputException.DEFAULT_DESCRIPTION == null) NonStringOrTemplateOutputException.DEFAULT_DESCRIPTION = "Expecting " + NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC_$LI$() + " value here"; return NonStringOrTemplateOutputException.DEFAULT_DESCRIPTION; };

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((typeof tip === 'string') || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(blamed, model, NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC_$LI$(), NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM_$LI$(), tip, env);
            (<any>Object).setPrototypeOf(this, NonStringOrTemplateOutputException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(typeof tip[0] === 'string'))) || tip === null) && ((env != null && env instanceof <any>Environment) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC_$LI$(), NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM_$LI$(), tips, env);
            (<any>Object).setPrototypeOf(this, NonStringOrTemplateOutputException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((tip != null && tip instanceof <any>Environment) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            super(blamed, model, NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC_$LI$(), NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM_$LI$(), env);
            (<any>Object).setPrototypeOf(this, NonStringOrTemplateOutputException.prototype);
        } else if(((typeof blamed === 'string') || blamed === null) && ((model != null && model instanceof <any>Environment) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonStringOrTemplateOutputException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonStringOrTemplateOutputException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Environment) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, NonStringOrTemplateOutputException.DEFAULT_DESCRIPTION_$LI$());
            (<any>Object).setPrototypeOf(this, NonStringOrTemplateOutputException.prototype);
        } else throw new Error('invalid overload');
    }
}
NonStringOrTemplateOutputException["__class"] = "freemarker.core.NonStringOrTemplateOutputException";
NonStringOrTemplateOutputException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;

NonStringOrTemplateOutputException.DEFAULT_DESCRIPTION_$LI$();

NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_AND_TOM_$LI$();

NonStringOrTemplateOutputException.STRING_COERCABLE_TYPES_OR_TOM_DESC_$LI$();

NonStringOrTemplateOutputException.__static_initialize();
