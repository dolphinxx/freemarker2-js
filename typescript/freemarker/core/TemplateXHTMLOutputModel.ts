/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CommonTemplateMarkupOutputModel} from './CommonTemplateMarkupOutputModel';
import {XHTMLOutputFormat} from './XHTMLOutputFormat';

/**
 * Stores HTML markup to be printed; used with {link HTMLOutputFormat}.
 * 
 * @since 2.3.24
 * @extends CommonTemplateMarkupOutputModel
 * @class
 */
export class TemplateXHTMLOutputModel extends CommonTemplateMarkupOutputModel<TemplateXHTMLOutputModel> {
    constructor(plainTextContent : string, markupContent : string) {
        super(plainTextContent, markupContent);
    }

    /**
     * 
     * @return {XHTMLOutputFormat}
     */
    public getOutputFormat() : XHTMLOutputFormat {
        return XHTMLOutputFormat.INSTANCE_$LI$();
    }
}
TemplateXHTMLOutputModel["__class"] = "freemarker.core.TemplateXHTMLOutputModel";
TemplateXHTMLOutputModel["__interfaces"] = ["freemarker.core.TemplateMarkupOutputModel","freemarker.template.TemplateModel"];





