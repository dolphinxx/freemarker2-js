/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { CommonTemplateMarkupOutputModel } from './CommonTemplateMarkupOutputModel';
import { CombinedMarkupOutputFormat } from './CombinedMarkupOutputFormat';

/**
 * Stores combined markup to be printed; used with {link CombinedMarkupOutputFormat}.
 * 
 * @since 2.3.24
 * @extends CommonTemplateMarkupOutputModel
 * @class
 */
export class TemplateCombinedMarkupOutputModel extends CommonTemplateMarkupOutputModel<TemplateCombinedMarkupOutputModel> {
    /*private*/ outputFormat : CombinedMarkupOutputFormat;

    constructor(plainTextContent : string, markupContent : string, outputFormat : CombinedMarkupOutputFormat) {
        super(plainTextContent, markupContent);
        if(this.outputFormat===undefined) this.outputFormat = null;
        this.outputFormat = outputFormat;
    }

    /**
     * 
     * @return {CombinedMarkupOutputFormat}
     */
    public getOutputFormat() : CombinedMarkupOutputFormat {
        return this.outputFormat;
    }
}
TemplateCombinedMarkupOutputModel["__class"] = "freemarker.core.TemplateCombinedMarkupOutputModel";
TemplateCombinedMarkupOutputModel["__interfaces"] = ["freemarker.core.TemplateMarkupOutputModel","freemarker.template.TemplateModel"];




var __Function = Function;
