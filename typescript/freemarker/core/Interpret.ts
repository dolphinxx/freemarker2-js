/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {TemplateTransformModel} from '../template/TemplateTransformModel';
import {StringReader} from '../../java/io/StringReader';
import {Writer} from '../../java/io/Writer';
import {OutputFormatBoundBuiltIn} from './OutputFormatBoundBuiltIn';
import {Expression} from './Expression';
import {DynamicKeyName} from './DynamicKeyName';
import {NumberLiteral} from './NumberLiteral';
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {ParserConfiguration} from './ParserConfiguration';
import {_ParserConfigurationWithInheritedFormat} from './_ParserConfigurationWithInheritedFormat';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_MessageUtil} from './_MessageUtil';
import {_DelayedGetMessage} from './_DelayedGetMessage';
import {_TemplateModelException} from './_TemplateModelException';
import {ClassUtil} from "../template/utility/ClassUtil";
import {Map} from '../../java/util/Map';

/**
 * A method that takes a parameter and evaluates it as a scalar,
 * then treats that scalar as template source code and returns a
 * transform model that evaluates the template in place.
 * The template inherits the configuration and environment of the executing
 * template. By default, its name will be equal to
 * <tt>executingTemplate.getName() + "$anonymous_interpreted"</tt>. You can
 * specify another parameter to the method call in which case the
 * template name suffix is the specified id instead of "anonymous_interpreted".
 * @extends OutputFormatBoundBuiltIn
 * @class
 */
export class Interpret extends OutputFormatBoundBuiltIn {
    public calculateResult(s? : any, env? : any) : any {
        if(((ClassUtil.isInstanceOf(s, 'freemarker.core.Environment')) || s === null) && env === undefined) {
            return <any>this.calculateResult$freemarker_core_Environment(s);
        } else throw new Error('invalid overload');
    }

    calculateResult$freemarker_core_Environment(env : /*Environment*/any) : TemplateModel {
        let model : TemplateModel = this.target.eval(env);
        let sourceExpr : Expression = null;
        let id : string = "anonymous_interpreted";
        if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateSequenceModel")) {
            sourceExpr = (<Expression>new DynamicKeyName(this.target, new NumberLiteral(0)).copyLocationFrom(this.target));
            if((<TemplateSequenceModel><any>model).size() > 1) {
                id = (<Expression>new DynamicKeyName(this.target, new NumberLiteral(1)).copyLocationFrom(this.target)).evalAndCoerceToPlainText$freemarker_core_Environment(env);
            }
        } else if(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateScalarModel")) {
            sourceExpr = this.target;
        } else {
            throw new UnexpectedTypeException(this.target, model, "sequence or string", ["freemarker.template.TemplateSequenceModel", "freemarker.template.TemplateScalarModel"], env);
        }
        let templateSource : string = sourceExpr.evalAndCoerceToPlainText$freemarker_core_Environment(env);
        let parentTemplate : /*Template*/any = env.getConfiguration().getIncompatibleImprovements().intValue() >= /*_TemplateAPI.VERSION_INT_2_3_26_$LI$()*/2003026?env.getCurrentTemplate():env.getTemplate();
        let interpretedTemplate : /*Template*/any;
        try {
            let pCfg : ParserConfiguration = parentTemplate.getParserConfiguration();
            if(pCfg.getOutputFormat() !== this.outputFormat) {
                pCfg = new _ParserConfigurationWithInheritedFormat(pCfg, this.outputFormat, this.autoEscapingPolicy);
            }
            interpretedTemplate = new (require('../template/Template').Template)((parentTemplate.getName() != null?parentTemplate.getName():"nameless_template") + "->" + id, null, new StringReader(templateSource), parentTemplate.getConfiguration(), pCfg, null);
        } catch(e) {
            throw new _MiscTemplateException(this, e, env, "Template parsing with \"?", this.key, "\" has failed with this error:\n\n", _MessageUtil.EMBEDDED_MESSAGE_BEGIN, new _DelayedGetMessage(e), _MessageUtil.EMBEDDED_MESSAGE_END, "\n\nThe failed expression:");
        }
        interpretedTemplate.setLocale(env.getLocale());
        return new Interpret.TemplateProcessorModel(this, interpretedTemplate);
    }

    constructor() {
        super();
    }
}
Interpret["__class"] = "freemarker.core.Interpret";
Interpret["__interfaces"] = ["java.lang.Cloneable"];



export namespace Interpret {

    export class TemplateProcessorModel implements TemplateTransformModel {
        public __parent: any;
        template : /*Template*/any;

        constructor(__parent: any, template : /*Template*/any) {
            this.__parent = __parent;
            if(this.template===undefined) this.template = null;
            this.template = template;
        }

        public getWriter(out : Writer, args : Map<any, any>) : Writer {
            try {
                let env : /*Environment*/any = (require('./Environment').Environment).getCurrentEnvironment();
                let lastFIRE : boolean = env.setFastInvalidReferenceExceptions(false);
                try {
                    env.include$freemarker_template_Template(this.template);
                } finally {
                    env.setFastInvalidReferenceExceptions(lastFIRE);
                }
            } catch(e) {
                throw new _TemplateModelException(e, "Template created with \"?", this.__parent.key, "\" has stopped with this error:\n\n", _MessageUtil.EMBEDDED_MESSAGE_BEGIN, new _DelayedGetMessage(e), _MessageUtil.EMBEDDED_MESSAGE_END);
            }
            return new TemplateProcessorModel.TemplateProcessorModel$0(this, out, out);
        }
    }
    TemplateProcessorModel["__class"] = "freemarker.core.Interpret.TemplateProcessorModel";
    TemplateProcessorModel["__interfaces"] = ["freemarker.template.TemplateTransformModel","freemarker.template.TemplateModel"];



    export namespace TemplateProcessorModel {

        export class TemplateProcessorModel$0 extends Writer{
            public __parent: TemplateProcessorModel;
            /**
             * 
             */
            public close() {
            }

            /**
             * 
             */
            public flush() {
                this.out.flush();
            }

            /**
             * 
             * @param {Array} cbuf
             * @param {number} off
             * @param {number} len
             */
            public write(cbuf : string[], off : number, len : number) {
                this.out.write(cbuf, off, len);
            }

            constructor(__parent: TemplateProcessorModel, __arg0: any, private out: any) {
                super();
                this.__parent = __parent;
            }
        }
        TemplateProcessorModel$0["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];


    }

}