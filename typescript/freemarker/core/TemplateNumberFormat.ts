/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { TemplateValueFormat } from './TemplateValueFormat';
import { TemplateValueFormatException } from './TemplateValueFormatException';
import { ParsingNotSupportedException } from './ParsingNotSupportedException';

/**
 * Represents a number format; used in templates for formatting and parsing with that format. This is similar to Java's
 * {link NumberFormat}, but made to fit the requirements of FreeMarker. Also, it makes easier to define formats that
 * can't be represented with Java's existing {link NumberFormat} implementations.
 * <p>
 * <p>
 * Implementations need not be thread-safe if the {link TemplateNumberFormatFactory} doesn't recycle them among
 * different {link Environment}-s. As far as FreeMarker's concerned, instances are bound to a single
 * {link Environment}, and {link Environment}-s are thread-local objects.
 * 
 * @since 2.3.24
 * @class
 * @extends TemplateValueFormat
 */
export abstract class TemplateNumberFormat extends TemplateValueFormat {
    /**
     * @param {*} numberModel The number to format; not {@code null}. Most implementations will just work with the return value of
     * {link TemplateDateModel#getAsDate()}, but some may format differently depending on the properties of
     * a custom {link TemplateDateModel} implementation.
     * @return {String} The number as text, with no escaping (like no HTML escaping); can't be {@code null}.
     * @throws TemplateValueFormatException If any problem occurs while parsing/getting the format. Notable subclass:
     * {link UnformattableValueException}.
     * @throws TemplateModelException       Exception thrown by the {@code dateModel} object when calling its methods.
     */
    public abstract formatToPlainText(numberModel : TemplateNumberModel) : string;

    public format$freemarker_template_TemplateNumberModel(numberModel : TemplateNumberModel) : any {
        return this.formatToPlainText(numberModel);
    }

    /**
     * Formats the model to markup instead of to plain text if the result markup will be more than just plain text
     * escaped, otherwise falls back to formatting to plain text. If the markup result would be just the result of
     * {link #formatToPlainText(TemplateNumberModel)} escaped, it must return the {link String} that
     * {link #formatToPlainText(TemplateNumberModel)} does.
     * <p>
     * <p>
     * The implementation in {link TemplateNumberFormat} simply calls {link #formatToPlainText(TemplateNumberModel)}.
     * 
     * @return {Object} A {link String} or a {link TemplateMarkupOutputModel}; not {@code null}.
     * @param {*} numberModel
     */
    public format(numberModel? : any) : any {
        if(((numberModel != null && (numberModel["__interfaces"] != null && numberModel["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || numberModel.constructor != null && numberModel.constructor["__interfaces"] != null && numberModel.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) || numberModel === null)) {
            return <any>this.format$freemarker_template_TemplateNumberModel(numberModel);
        } else throw new Error('invalid overload');
    }

    /**
     * Tells if this formatter should be re-created if the locale changes.
     * @return {boolean}
     */
    public abstract isLocaleBound() : boolean;

    /**
     * This method is reserved for future purposes; currently it always throws {link ParsingNotSupportedException}. We
     * don't yet support number parsing with {link TemplateNumberFormat}-s, because currently FTL parses strings to
     * number with the {link ArithmeticEngine} ({link TemplateNumberFormat} were only introduced in 2.3.24). If it
     * will be support, it will be similar to {link TemplateDateFormat#parse(String, int)}.
     * @param {String} s
     * @return {Object}
     */
    public parse(s : string) : any {
        throw new ParsingNotSupportedException("Number formats currenly don\'t support parsing");
    }
}
TemplateNumberFormat["__class"] = "freemarker.core.TemplateNumberFormat";



var __Function = Function;
