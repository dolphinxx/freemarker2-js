/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

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
    private name:string;
    private description:string;
    /*private*/ templateName : string;

    /*private*/ malformednessDescription : string;

    public constructor(templateName : string, malformednessDescription : string) {
        this.description = "Malformed template name, " + (require('./utility/StringUtil').StringUtil).jQuote(templateName) + ": " + malformednessDescription;
        this.templateName = templateName;
        this.malformednessDescription = malformednessDescription;
        this.name = MalformedTemplateNameException['__class'];
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





