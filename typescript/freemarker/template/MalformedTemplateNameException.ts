/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { StringUtil } from './utility/StringUtil';

/**
 * Indicates that the template name given was malformed according the {link TemplateNameFormat} in use. Note that for
 * backward compatibility, {link TemplateNameFormat#DEFAULT_2_3_0} doesn't throw this exception,
 * {link TemplateNameFormat#DEFAULT_2_4_0} does. This exception extends {link IOException} for backward compatibility.
 * 
 * @since 2.3.22
 * <p>
 * see TemplateNotFoundException
 * see Configuration#getTemplate(String)
 * @param {String} templateName
 * @param {String} malformednessDescription
 * @class
 * @extends Error
 */
export class MalformedTemplateNameException {
    /*private*/ templateName : string;

    /*private*/ malformednessDescription : string;

    public constructor(templateName : string, malformednessDescription : string) {
        (<any>Object).setPrototypeOf(this, MalformedTemplateNameException.prototype);
        if(this.templateName===undefined) this.templateName = null;
        if(this.malformednessDescription===undefined) this.malformednessDescription = null;
        this.templateName = templateName;
        this.malformednessDescription = malformednessDescription;
    }

    public getTemplateName() : string {
        return this.templateName;
    }

    public getMalformednessDescription() : string {
        return this.malformednessDescription;
    }
}
MalformedTemplateNameException["__class"] = "freemarker.template.MalformedTemplateNameException";
MalformedTemplateNameException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
