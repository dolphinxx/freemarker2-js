/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ClassUtil } from '../template/utility/ClassUtil';
import { StringUtil } from '../template/utility/StringUtil';

/**
 * Represents an output format. If you need auto-escaping, see its subclass, {link MarkupOutputFormat}.
 * <p>
 * see Configuration#setOutputFormat(OutputFormat)
 * see Configuration#setRegisteredCustomOutputFormats(java.util.Collection)
 * see MarkupOutputFormat
 * 
 * @since 2.3.24
 * @class
 */
export abstract class OutputFormat {
    /**
     * The short name used to refer to this format (like in the {@code #ftl} header).
     * @return {String}
     */
    public abstract getName() : string;

    /**
     * Returns the MIME type of the output format. This might comes handy when generating a HTTP response. {@code null}
     * {@code null} if this output format doesn't clearly corresponds to a specific MIME type.
     * @return {String}
     */
    public abstract getMimeType() : string;

    /**
     * Tells if this output format allows inserting {link TemplateMarkupOutputModel}-s of another output formats into
     * it. If {@code true}, the foreign {link TemplateMarkupOutputModel} will be inserted into the output as is (like
     * if the surrounding output format was the same). This is usually a bad idea to allow, as such an event could
     * indicate application bugs. If this method returns {@code false} (recommended), then FreeMarker will try to
     * assimilate the inserted value by converting its format to this format, which will currently (2.3.24) cause
     * exception, unless the inserted value is made by escaping plain text and the target format is non-escaping, in
     * which case format conversion is trivially possible. (It's not impossible that conversions will be extended beyond
     * this, if there will be demand for that.)
     * <p>
     * <p>
     * {@code true} value is used by {link UndefinedOutputFormat}.
     * @return {boolean}
     */
    public abstract isOutputFormatMixingAllowed() : boolean;

    /**
     * Returns the short description of this format, to be used in error messages.
     * Override {link #toStringExtraProperties()} to customize this.
     * @return {String}
     */
    public toString() : string {
        let extras : string = this.toStringExtraProperties();
        return this.getName() + "(mimeType=" + StringUtil.jQuote$java_lang_Object(this.getMimeType()) + ", class=" + ClassUtil.getShortClassNameOfObject(this, true) + (extras.length !== 0?", ":"") + extras + ")";
    }

    /**
     * Should be like {@code "foo=\"something\", bar=123"}; this will be inserted inside the parentheses in
     * {link #toString()}. Shouldn't return {@code null}; should return {@code ""} if there are no extra properties.
     * @return {String}
     */
    toStringExtraProperties() : string {
        return "";
    }
}
OutputFormat["__class"] = "freemarker.core.OutputFormat";



var __Function = Function;
