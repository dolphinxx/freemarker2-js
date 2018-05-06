/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Writer} from '../../java/io/Writer';
import {TemplateModel} from './TemplateModel';
import {TemplateModelException} from './TemplateModelException';
import {Map} from '../../java/util/Map';

/**
 * "transform" template language data type: user-defined directives
 * (much like macros) specialized on filtering output; you should rather use the newer {link TemplateDirectiveModel}
 * instead. This interface will certainly be deprecated in FreeMarker 2.4.
 * @class
 */
export interface TemplateTransformModel extends TemplateModel {
    /**
     * Returns a writer that will be used by the engine to feed the transformation input to the transform. Each call to
     * this method must return a new instance of the writer so that the transformation is thread-safe.
     * <p>
     * This method should not throw {link RuntimeException}, nor {link IOException} that wasn't caused by writing to
     * the output. Such exceptions should be catched inside the method and wrapped inside a
     * {link TemplateModelException}. (Note that setting {link Configuration#setWrapUncheckedExceptions(boolean)} to
     * {@code true} can mitigate the negative effects of implementations that throw {link RuntimeException}-s.)
     * 
     * @param {Writer} out  the character stream to which to write the transformed output
     * @param {Map} args the arguments (if any) passed to the transformation as a map of key/value pairs where the keys are
     * strings and the arguments are {link TemplateModel} instances. This is never {@code null}. (If you
     * need to convert the template models to POJOs, you can use the utility methods in the
     * {link DeepUnwrap} class. Though it's recommended to work with {link TemplateModel}-s directly.)
     * @return {Writer} The {link Writer} to which the engine will write the content to transform, or {@code null} if the
     * transform does not support nested content (body). The returned {link Writer} may implements the
     * {link TransformControl} interface if it needs advanced control over the evaluation of the nested
     * content. FreeMarker will call {link Writer#close()} after the transform end-tag. {link Writer#close()}
     * must not close the {link Writer} received as the {@code out} parameter (so if you are using a
     * {link FilterWriter}, you must override {link FilterWriter#close()}, as by default that closes the
     * wrapped {link Writer}). Since 2.3.27 its also allowed to return the {@code out} writer as is, in which
     * case it won't be closed.
     * @throws TemplateModelException If any problem occurs that's not an {link IOException} during writing the template output.
     * @throws IOException            When writing to {@code out} (the parameter) fails. Other {link IOException}-s should be catched in
     * this method and wrapped into {link TemplateModelException}.
     */
    getWriter(out : Writer, args : Map<any, any>) : Writer;
}