/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CommonTemplateMarkupOutputModel} from './CommonTemplateMarkupOutputModel';
import {RTFOutputFormat} from './RTFOutputFormat';

/**
 * Stores RTF markup to be printed; used with {link RTFOutputFormat}.
 * 
 * @since 2.3.24
 * @extends CommonTemplateMarkupOutputModel
 * @class
 */
export class TemplateRTFOutputModel extends CommonTemplateMarkupOutputModel<TemplateRTFOutputModel> {
    constructor(plainTextContent : string, markupContent : string) {
        super(plainTextContent, markupContent);
    }

    /**
     * 
     * @return {RTFOutputFormat}
     */
    public getOutputFormat() : RTFOutputFormat {
        return RTFOutputFormat.INSTANCE_$LI$();
    }
}
TemplateRTFOutputModel["__class"] = "freemarker.core.TemplateRTFOutputModel";
TemplateRTFOutputModel["__interfaces"] = ["freemarker.core.TemplateMarkupOutputModel","freemarker.template.TemplateModel"];





