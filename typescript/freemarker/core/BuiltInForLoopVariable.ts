/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';
import {SpecialBuiltIn} from './SpecialBuiltIn';
import {Environment} from './Environment';
import {IteratorBlock} from './IteratorBlock';
import {_MiscTemplateException} from './_MiscTemplateException';
import {_DelayedJQuote} from './_DelayedJQuote';

export abstract class BuiltInForLoopVariable extends SpecialBuiltIn {
    /*private*/ loopVarName : string;

    bindToLoopVariable(loopVarName : string) {
        this.loopVarName = loopVarName;
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        let iterCtx : IteratorBlock.IterationContext = IteratorBlock.findEnclosingIterationContext(env, this.loopVarName);
        if(iterCtx == null) {
            throw new _MiscTemplateException(this, env, "There\'s no iteration in context that uses loop variable ", new _DelayedJQuote(this.loopVarName), ".");
        }
        return this.calculateResult(iterCtx, env);
    }

    abstract calculateResult(iterCtx : IteratorBlock.IterationContext, env : /*Environment*/any) : TemplateModel;

    constructor() {
        super();
        if(this.loopVarName===undefined) this.loopVarName = null;
    }
}
BuiltInForLoopVariable["__class"] = "freemarker.core.BuiltInForLoopVariable";
BuiltInForLoopVariable["__interfaces"] = ["java.lang.Cloneable"];




