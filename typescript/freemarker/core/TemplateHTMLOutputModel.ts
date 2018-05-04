/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { CommonTemplateMarkupOutputModel } from './CommonTemplateMarkupOutputModel';
import { HTMLOutputFormat } from './HTMLOutputFormat';

/**
 * Stores HTML markup to be printed; used with {link HTMLOutputFormat}.
 * 
 * @since 2.3.24
 * @extends CommonTemplateMarkupOutputModel
 * @class
 */
export class TemplateHTMLOutputModel extends CommonTemplateMarkupOutputModel<TemplateHTMLOutputModel> {
    constructor(plainTextContent : string, markupContent : string) {
        super(plainTextContent, markupContent);
    }

    /**
     * 
     * @return {HTMLOutputFormat}
     */
    public getOutputFormat() : HTMLOutputFormat {
        return HTMLOutputFormat.INSTANCE_$LI$();
    }
}
TemplateHTMLOutputModel["__class"] = "freemarker.core.TemplateHTMLOutputModel";
TemplateHTMLOutputModel["__interfaces"] = ["freemarker.core.TemplateMarkupOutputModel","freemarker.template.TemplateModel"];




var __Function = Function;
