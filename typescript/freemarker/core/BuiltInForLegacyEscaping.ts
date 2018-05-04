/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { BuiltInBannedWhenAutoEscaping } from './BuiltInBannedWhenAutoEscaping';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { EvalUtil } from './EvalUtil';
import { TemplateMarkupOutputModel } from './TemplateMarkupOutputModel';
import { MarkupOutputFormat } from './MarkupOutputFormat';
import { NonStringException } from './NonStringException';

/**
 * A string built-in whose usage is banned when auto-escaping with a markup-output format is active.
 * This is just a marker; the actual checking is in {@code FTL.jj}.
 * @extends BuiltInBannedWhenAutoEscaping
 * @class
 */
export abstract class BuiltInForLegacyEscaping extends BuiltInBannedWhenAutoEscaping {
    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : Environment) : TemplateModel {
        let tm : TemplateModel = this.target.eval(env);
        let moOrStr : any = EvalUtil.coerceModelToStringOrMarkup$freemarker_template_TemplateModel$freemarker_core_Expression$java_lang_String$freemarker_core_Environment(tm, this.target, null, env);
        if(typeof moOrStr === 'string') {
            return this.calculateResult(<string>moOrStr, env);
        } else {
            let mo : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>moOrStr;
            if(mo.getOutputFormat().isLegacyBuiltInBypassed(this.key)) {
                return mo;
            }
            throw new NonStringException(this.target, tm, env);
        }
    }

    abstract calculateResult(s : string, env : Environment) : TemplateModel;

    constructor() {
        super();
    }
}
BuiltInForLegacyEscaping["__class"] = "freemarker.core.BuiltInForLegacyEscaping";
BuiltInForLegacyEscaping["__interfaces"] = ["java.lang.Cloneable"];




