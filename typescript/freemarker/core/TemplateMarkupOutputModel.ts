/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../template/TemplateModel';
import { MarkupOutputFormat } from './MarkupOutputFormat';

/**
 * "markup output" template language data-type; stores markup (some kind of "rich text" / structured format, as opposed
 * to plain text) that meant to be printed as template output. This type is related to the {link OutputFormat}
 * mechanism. Values of this kind are exempt from {link OutputFormat}-based automatic escaping.
 * <p>
 * <p>
 * Each implementation of this type has a {link OutputFormat} subclass pair, whose singleton instance is returned by
 * {link #getOutputFormat()}. See more about how markup output values work at {link OutputFormat}.
 * <p>
 * <p>
 * Note that {link TemplateMarkupOutputModel}-s are by design not treated like {link TemplateScalarModel}-s, and so
 * the implementations of this interface usually shouldn't implement {link TemplateScalarModel}. (Because, operations
 * applicable on plain strings, like converting to upper case, substringing, etc., can corrupt markup.) If the template
 * author wants to pass in the "source" of the markup as string somewhere, he should use {@code ?markup_string}.
 * 
 * @param <MO> Refers to the interface's own type, which is useful in interfaces that extend
 * {link TemplateMarkupOutputModel} (Java Generics trick).
 * @since 2.3.24
 * @class
 */
export interface TemplateMarkupOutputModel<MO extends TemplateMarkupOutputModel<MO>> extends TemplateModel {
    /**
     * Returns the singleton {link OutputFormat} object that implements the operations for the "markup output" value.
     * @return {MarkupOutputFormat}
     */
    getOutputFormat() : MarkupOutputFormat<MO>;
}


var __Function = Function;
