/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleNumber} from '../template/SimpleNumber';
import {Template} from '../template/Template';
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateMethodModelEx} from '../template/TemplateMethodModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {StringReader} from '../../java/io/StringReader';
import {BuiltInForString} from './BuiltInForString';
import {Environment} from './Environment';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_DelayedJQuote} from './_DelayedJQuote';
import {OutputFormatBoundBuiltIn} from './OutputFormatBoundBuiltIn';
import {Expression} from './Expression';
import {ParserConfiguration} from './ParserConfiguration';
import {SimpleCharStream} from './SimpleCharStream';
import {FMParserTokenManager} from './FMParserTokenManager';
import {FMParserConstants} from './FMParserConstants';
import {_ParserConfigurationWithInheritedFormat} from './_ParserConfigurationWithInheritedFormat';
import {FMParser} from './FMParser';
import {_MessageUtil} from './_MessageUtil';
import {_DelayedGetMessage} from './_DelayedGetMessage';
import {_DelayedGetMessageWithoutStackTop} from './_DelayedGetMessageWithoutStackTop';
import {NonNumericalException} from './NonNumericalException';
import {_TemplateModelException} from './_TemplateModelException';

export class BuiltInsForStringsMisc {
    constructor() {
    }
}
BuiltInsForStringsMisc["__class"] = "freemarker.core.BuiltInsForStringsMisc";


export namespace BuiltInsForStringsMisc {

    export class booleanBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            let b : boolean;
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"true"))) {
                b = true;
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"false"))) {
                b = false;
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,env.getTrueStringValue()))) {
                b = true;
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,env.getFalseStringValue()))) {
                b = false;
            } else {
                throw new _MiscTemplateException(this, env, "Can\'t convert this string to boolean: ", new _DelayedJQuote(s));
            }
            return b?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    booleanBI["__class"] = "freemarker.core.BuiltInsForStringsMisc.booleanBI";
    booleanBI["__interfaces"] = ["java.lang.Cloneable"];



    export class evalBI extends OutputFormatBoundBuiltIn {
        calculateResult$freemarker_core_Environment(env : /*Environment*/any) : TemplateModel {
            return this.calculateResult$java_lang_String$freemarker_core_Environment(BuiltInForString.getTargetString(this.target, env), env);
        }

        public calculateResult$java_lang_String$freemarker_core_Environment(s : string, env : /*Environment*/any) : TemplateModel {
            let parentTemplate : Template = this.getTemplate();
            let exp : Expression = null;
            try {
                try {
                    let pCfg : ParserConfiguration = parentTemplate.getParserConfiguration();
                    let simpleCharStream : SimpleCharStream = new SimpleCharStream(new StringReader("(" + s + ")"), TemplateObject.RUNTIME_EVAL_LINE_DISPLACEMENT, 1, s.length + 2);
                    simpleCharStream.setTabSize(pCfg.getTabSize());
                    let tkMan : FMParserTokenManager = new FMParserTokenManager(simpleCharStream);
                    tkMan.SwitchTo(FMParserConstants.FM_EXPRESSION);
                    if(pCfg.getOutputFormat() !== this.outputFormat) {
                        pCfg = new _ParserConfigurationWithInheritedFormat(pCfg, this.outputFormat, this.autoEscapingPolicy);
                    }
                    let parser : FMParser = new FMParser(parentTemplate, false, tkMan, pCfg);
                    exp = parser.Expression();
                } catch(e) {
                    throw e.toParseException(parentTemplate);
                }
            } catch(e) {
                throw new _MiscTemplateException(this, env, "Failed to \"?", this.key, "\" string with this error:\n\n", _MessageUtil.EMBEDDED_MESSAGE_BEGIN, new _DelayedGetMessage(e), _MessageUtil.EMBEDDED_MESSAGE_END, "\n\nThe failing expression:");
            }
            try {
                return exp.eval(env);
            } catch(e) {
                throw new _MiscTemplateException(e, this, env, "Failed to \"?", this.key, "\" string with this error:\n\n", _MessageUtil.EMBEDDED_MESSAGE_BEGIN, new _DelayedGetMessageWithoutStackTop(e), _MessageUtil.EMBEDDED_MESSAGE_END, "\n\nThe failing expression:");
            }
        }

        public calculateResult(s? : any, env? : any) : any {
            if(((typeof s === 'string') || s === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
                return <any>this.calculateResult$java_lang_String$freemarker_core_Environment(s, env);
            } else if(((ClassUtil.isInstanceOf(s, 'freemarker.core.Environment')) || s === null) && env === undefined) {
                return <any>this.calculateResult$freemarker_core_Environment(s);
            } else throw new Error('invalid overload');
        }

        constructor() {
            super();
        }
    }
    evalBI["__class"] = "freemarker.core.BuiltInsForStringsMisc.evalBI";
    evalBI["__interfaces"] = ["java.lang.Cloneable"];



    export class numberBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            try {
                return new SimpleNumber(env.getArithmeticEngine().toNumber(s));
            } catch(nfe) {
                throw NonNumericalException.newMalformedNumberException(this, s, env);
            }
        }

        constructor() {
            super();
        }
    }
    numberBI["__class"] = "freemarker.core.BuiltInsForStringsMisc.numberBI";
    numberBI["__interfaces"] = ["java.lang.Cloneable"];



    export class absolute_template_nameBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : /*Environment*/any) : TemplateModel {
            return new absolute_template_nameBI.AbsoluteTemplateNameResult(this, s, env);
        }

        constructor() {
            super();
        }
    }
    absolute_template_nameBI["__class"] = "freemarker.core.BuiltInsForStringsMisc.absolute_template_nameBI";
    absolute_template_nameBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace absolute_template_nameBI {

        export class AbsoluteTemplateNameResult implements TemplateScalarModel, TemplateMethodModelEx {
            public __parent: any;
            pathToResolve : string;

            env : Environment;

            public constructor(__parent: any, pathToResolve : string, env : /*Environment*/any) {
                this.__parent = __parent;
                if(this.pathToResolve===undefined) this.pathToResolve = null;
                if(this.env===undefined) this.env = null;
                this.pathToResolve = pathToResolve;
                this.env = env;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                return this.resolvePath(this.__parent.getStringMethodArg(args, 0));
            }

            public getAsString() : string {
                return this.resolvePath(this.__parent.getTemplate().getName());
            }

            /**
             * @param {String} basePath Maybe {@code null}
             * @return {String}
             * @private
             */
            resolvePath(basePath : string) : string {
                try {
                    return this.env.rootBasedToAbsoluteTemplateName(this.env.toFullTemplateName(basePath, this.pathToResolve));
                } catch(e) {
                    throw new _TemplateModelException(e, "Can\'t resolve ", new _DelayedJQuote(this.pathToResolve), "to absolute template name using base ", new _DelayedJQuote(basePath), "; see cause exception");
                }
            }
        }
        AbsoluteTemplateNameResult["__class"] = "freemarker.core.BuiltInsForStringsMisc.absolute_template_nameBI.AbsoluteTemplateNameResult";
        AbsoluteTemplateNameResult["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];


    }

}



