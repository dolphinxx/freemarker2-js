/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';

/**
 * An interface that represents a local context. This is used as the abstraction for
 * the context of a Macro invocation, a loop, or the nested block call from within
 * a macro.
 * <a href="mailto:jon@revusky.com">Jonathan Revusky</a>
 * @class
 */
export interface LocalContext {
    getLocalVariable(name : string) : TemplateModel;

    getLocalVariableNames() : Array<any>;
}


var __Function = Function;
