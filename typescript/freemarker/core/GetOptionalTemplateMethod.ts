/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateException} from '../template/TemplateException';
import {TemplateMethodModelEx} from '../template/TemplateMethodModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelException} from '../template/TemplateModelException';
import {TemplateModelUtils} from '../template/utility/TemplateModelUtils';
import {BuiltinVariable} from './BuiltinVariable';
import {_MessageUtil} from './_MessageUtil';
import {EvalUtil} from './EvalUtil';
import {_TemplateModelException} from './_TemplateModelException';
import {_DelayedAOrAn} from './_DelayedAOrAn';
import {_DelayedFTLTypeDescription} from './_DelayedFTLTypeDescription';
import {_DelayedJQuote} from './_DelayedJQuote';
import {Map} from "../../java/util/Map";
import {SimpleHash} from "../template/SimpleHash";
import {TemplateBooleanModel} from "../template/TemplateBooleanModel";
import {TemplateScalarModel} from "../template/TemplateScalarModel";
import {TemplateDirectiveModel} from "../template/TemplateDirectiveModel";
import {TemplateDirectiveBody} from "../template/TemplateDirectiveBody";

/**
 * Implements {@code .get_optional_template(name, options)}.
 * @class
 */
export class GetOptionalTemplateMethod implements TemplateMethodModelEx {
    static INSTANCE : GetOptionalTemplateMethod; public static INSTANCE_$LI$() : GetOptionalTemplateMethod { if(GetOptionalTemplateMethod.INSTANCE == null) GetOptionalTemplateMethod.INSTANCE = new GetOptionalTemplateMethod(BuiltinVariable.GET_OPTIONAL_TEMPLATE); return GetOptionalTemplateMethod.INSTANCE; };

    static INSTANCE_CC : GetOptionalTemplateMethod; public static INSTANCE_CC_$LI$() : GetOptionalTemplateMethod { if(GetOptionalTemplateMethod.INSTANCE_CC == null) GetOptionalTemplateMethod.INSTANCE_CC = new GetOptionalTemplateMethod(BuiltinVariable.GET_OPTIONAL_TEMPLATE_CC); return GetOptionalTemplateMethod.INSTANCE_CC; };

    static OPTION_ENCODING : string = "encoding";

    static OPTION_PARSE : string = "parse";

    static RESULT_INCLUDE : string = "include";

    static RESULT_IMPORT : string = "import";

    static RESULT_EXISTS : string = "exists";

    /**
     * Used in error messages
     */
    /*private*/ methodName : string;

    constructor(builtInVarName : string) {
        if(this.methodName===undefined) this.methodName = null;
        this.methodName = "." + builtInVarName;
    }

    public exec(args : Array<any>) : any {
        let argCnt : number = /* size */(<number>args.length);
        if(argCnt < 1 || argCnt > 2) {
            throw _MessageUtil.newArgCntError$java_lang_String$int$int$int(this.methodName, argCnt, 1, 2);
        }
        let env : /*Environment*/any = (require('./Environment').Environment).getCurrentEnvironment();
        if(env == null) {
            throw Object.defineProperty(new Error("No freemarer.core.Environment is associated to the current thread."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        let absTemplateName : string;
        {
            let arg : TemplateModel = <TemplateModel><any>/* get */args[0];
            if(!(arg != null && (arg["__interfaces"] != null && arg["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || arg.constructor != null && arg.constructor["__interfaces"] != null && arg.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                throw _MessageUtil.newMethodArgMustBeStringException(this.methodName, 0, arg);
            }
            let templateName : string = EvalUtil.modelToString(/*<TemplateScalarModel>*/<any>arg, null, env);
            try {
                absTemplateName = env.toFullTemplateName(env.getCurrentTemplate().getName(), templateName);
            } catch(e) {
                throw new _TemplateModelException(e, "Failed to convert template path to full path; see cause exception.");
            }
        }
        let options : /*TemplateHashModelEx*/any;
        if(argCnt > 1) {
            let arg : TemplateModel = <TemplateModel><any>/* get */args[1];
            if(!(arg != null && (arg["__interfaces"] != null && arg["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || arg.constructor != null && arg.constructor["__interfaces"] != null && arg.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0))) {
                throw _MessageUtil.newMethodArgMustBeExtendedHashException(this.methodName, 1, arg);
            }
            options = /*<TemplateHashModelEx>*/<any>arg;
        } else {
            options = null;
        }
        let encoding : string = null;
        let parse : boolean = true;
        if(options != null) {
            let kvpi : /*KeyValuePairIterator*/any = TemplateModelUtils.getKeyValuePairIterator(options);
            while((kvpi.hasNext())) {
                let kvp : /*KeyValuePair*/any = kvpi.next();
                let optName : string;
                {
                    let optNameTM : TemplateModel = kvp.getKey();
                    if(!(optNameTM != null && (optNameTM["__interfaces"] != null && optNameTM["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || optNameTM.constructor != null && optNameTM.constructor["__interfaces"] != null && optNameTM.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                        throw _MessageUtil.newMethodArgInvalidValueException(this.methodName, 1, "All keys in the options hash must be strings, but found ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(optNameTM)));
                    }
                    optName = (/*<TemplateScalarModel>*/<any>optNameTM).getAsString();
                }
                let optValue : TemplateModel = kvp.getValue();
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(GetOptionalTemplateMethod.OPTION_ENCODING,optName))) {
                    encoding = this.getStringOption(GetOptionalTemplateMethod.OPTION_ENCODING, optValue);
                } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(GetOptionalTemplateMethod.OPTION_PARSE,optName))) {
                    parse = this.getBooleanOption(GetOptionalTemplateMethod.OPTION_PARSE, optValue);
                } else {
                    throw _MessageUtil.newMethodArgInvalidValueException(this.methodName, 1, "Unsupported option ", new _DelayedJQuote(optName), "; valid names are: ", new _DelayedJQuote(GetOptionalTemplateMethod.OPTION_ENCODING), ", ", new _DelayedJQuote(GetOptionalTemplateMethod.OPTION_PARSE), ".");
                }
            }
        }
        let template : /*Template*/any;
        try {
            template = env.getTemplateForInclusion(absTemplateName, encoding, parse, true);
        } catch(e) {
            throw new _TemplateModelException(e, "I/O error when trying to load optional template ", new _DelayedJQuote(absTemplateName), "; see cause exception");
        }
        let result : SimpleHash = new SimpleHash(env.getObjectWrapper());
        result.put$java_lang_String$java_lang_Object(GetOptionalTemplateMethod.RESULT_EXISTS, template != null);
        if(template != null) {
            result.put$java_lang_String$java_lang_Object(GetOptionalTemplateMethod.RESULT_INCLUDE, new GetOptionalTemplateMethod.GetOptionalTemplateMethod$0(this, template));
            result.put$java_lang_String$java_lang_Object(GetOptionalTemplateMethod.RESULT_IMPORT, new GetOptionalTemplateMethod.GetOptionalTemplateMethod$1(this, env, template));
        }
        return result;
    }

    /*private*/ getBooleanOption(optionName : string, value : TemplateModel) : boolean {
        if(!(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0))) {
            throw _MessageUtil.newMethodArgInvalidValueException(this.methodName, 1, "The value of the ", new _DelayedJQuote(optionName), " option must be a boolean, but it was ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(value)), ".");
        }
        return (<TemplateBooleanModel><any>value).getAsBoolean();
    }

    /*private*/ getStringOption(optionName : string, value : TemplateModel) : string {
        if(!(value != null && (value["__interfaces"] != null && value["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || value.constructor != null && value.constructor["__interfaces"] != null && value.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
            throw _MessageUtil.newMethodArgInvalidValueException(this.methodName, 1, "The value of the ", new _DelayedJQuote(optionName), " option must be a string, but it was ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(value)), ".");
        }
        return EvalUtil.modelToString(<TemplateScalarModel><any>value, null, null);
    }
}
GetOptionalTemplateMethod["__class"] = "freemarker.core.GetOptionalTemplateMethod";
GetOptionalTemplateMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];



export namespace GetOptionalTemplateMethod {

    export class GetOptionalTemplateMethod$0 implements TemplateDirectiveModel {
        public __parent: any;
        public execute(env : /*Environment*/any, params : Map<any, any>, loopVars : TemplateModel[], body : TemplateDirectiveBody) {
            if(!/* isEmpty */((m) => { if(m.entries==null) m.entries=[]; return m.entries.length == 0; })(<any>params)) {
                throw new TemplateException("This directive supports no parameters.", env);
            }
            if(loopVars.length !== 0) {
                throw new TemplateException("This directive supports no loop variables.", env);
            }
            if(body != null) {
                throw new TemplateException("This directive supports no nested content.", env);
            }
            env.include$freemarker_template_Template(this.template);
        }

        constructor(__parent: any, private template: any) {
            this.__parent = __parent;
        }
    }
    GetOptionalTemplateMethod$0["__interfaces"] = ["freemarker.template.TemplateDirectiveModel","freemarker.template.TemplateModel"];



    export class GetOptionalTemplateMethod$1 implements TemplateMethodModelEx {
        public __parent: any;
        public exec(args : Array<any>) : any {
            if(!/* isEmpty */(args.length == 0)) {
                throw new TemplateModelException("This method supports no parameters.");
            }
            try {
                return this.env.importLib$freemarker_template_Template$java_lang_String(this.template, null);
            } catch(__e) {
                if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.io.IOException") >= 0)) {
                    let e : Error = <Error>__e;
                    throw new _TemplateModelException(e, "Failed to import loaded template; see cause exception");

                }
                if(__e != null && __e instanceof <any>TemplateException) {
                    let e : TemplateException = <TemplateException>__e;
                    throw new _TemplateModelException(e, "Failed to import loaded template; see cause exception");

                }
            }
        }

        constructor(__parent: any, private env: any, private template: any) {
            this.__parent = __parent;
        }
    }
    GetOptionalTemplateMethod$1["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


}





GetOptionalTemplateMethod.INSTANCE_CC_$LI$();

GetOptionalTemplateMethod.INSTANCE_$LI$();
