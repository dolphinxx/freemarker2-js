/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateMarkupOutputModel} from './TemplateMarkupOutputModel';
import {CommonMarkupOutputFormat} from './CommonMarkupOutputFormat';

/**
 * Common superclass for implementing {link TemplateMarkupOutputModel}-s that belong to a
 * {link CommonMarkupOutputFormat} subclass format.
 * <p>
 * <p>
 * Thread-safe after proper publishing. Calculated fields (typically, the markup calculated from plain text) might will
 * be re-calculated for multiple times if accessed from multiple threads (this only affects performance, not
 * functionality).
 * 
 * @since 2.3.24
 * @class
 */
export abstract class CommonTemplateMarkupOutputModel<MO extends CommonTemplateMarkupOutputModel<MO>> implements TemplateMarkupOutputModel<MO> {
    /*private*/ plainTextContent : string;

    /*private*/ markupContet : string;

    constructor(plainTextContent : string, markupContent : string) {
        if(this.plainTextContent===undefined) this.plainTextContent = null;
        if(this.markupContet===undefined) this.markupContet = null;
        this.plainTextContent = plainTextContent;
        this.markupContet = markupContent;
    }

    public abstract getOutputFormat() : CommonMarkupOutputFormat<MO>;

    /**
     * Maybe {@code null}, but then {link #getMarkupContent()} isn't {@code null}.
     * @return {String}
     */
    getPlainTextContent() : string {
        return this.plainTextContent;
    }

    /**
     * Maybe {@code null}, but then {link #getPlainTextContent()} isn't {@code null}.
     * @return {String}
     */
    getMarkupContent() : string {
        return this.markupContet;
    }

    /**
     * Use only to set the value calculated from {link #getPlainTextContent()}, when {link #getMarkupContent()} was
     * still {@code null}!
     * @param {String} markupContet
     */
    setMarkupContet(markupContet : string) {
        this.markupContet = markupContet;
    }
}
CommonTemplateMarkupOutputModel["__class"] = "freemarker.core.CommonTemplateMarkupOutputModel";
CommonTemplateMarkupOutputModel["__interfaces"] = ["freemarker.core.TemplateMarkupOutputModel","freemarker.template.TemplateModel"];




