/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Template } from '../template/Template';
import { TemplatePostProcessorException } from './TemplatePostProcessorException';

/**
 * Note yet public; will change in 2.4 (as it has to process {@code UnboundTemplate}-s).
 * @class
 */
export abstract class TemplatePostProcessor {
    public abstract postProcess(e : Template);
}
TemplatePostProcessor["__class"] = "freemarker.core.TemplatePostProcessor";



var __Function = Function;
