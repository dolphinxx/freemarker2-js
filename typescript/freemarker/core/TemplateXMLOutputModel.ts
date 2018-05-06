/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CommonTemplateMarkupOutputModel} from './CommonTemplateMarkupOutputModel';
import {XMLOutputFormat} from './XMLOutputFormat';

/**
 * Stores XML markup to be printed; used with {link XMLOutputFormat}.
 * 
 * @since 2.3.24
 * @extends CommonTemplateMarkupOutputModel
 * @class
 */
export class TemplateXMLOutputModel extends CommonTemplateMarkupOutputModel<TemplateXMLOutputModel> {
    constructor(plainTextContent : string, markupContent : string) {
        super(plainTextContent, markupContent);
    }

    /**
     * 
     * @return {XMLOutputFormat}
     */
    public getOutputFormat() : XMLOutputFormat {
        return XMLOutputFormat.INSTANCE_$LI$();
    }
}
TemplateXMLOutputModel["__class"] = "freemarker.core.TemplateXMLOutputModel";
TemplateXMLOutputModel["__interfaces"] = ["freemarker.core.TemplateMarkupOutputModel","freemarker.template.TemplateModel"];





