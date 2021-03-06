/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

/**
 * An interface that can be implemented by writers returned from
 * {link TemplateTransformModel#getWriter(java.io.Writer, java.util.Map)}. The
 * methods on this
 * interfaces are callbacks that will be called by the template engine and that
 * give the writer a chance to better control the evaluation of the transform
 * body. The writer can instruct the engine to skip or to repeat body
 * evaluation, and gets notified about exceptions that are thrown during the
 * body evaluation.
 * @class
 */
export interface TransformControl {
    /**
     * Called before the body is evaluated for the first time.
     * 
     * @return {number} <ul>
     * <li><tt>SKIP_BODY</tt> if the transform wants to ignore the body. In this
     * case, only {link java.io.Writer#close()} is called next and processing ends.</li>
     * <li><tt>EVALUATE_BODY</tt> to normally evaluate the body of the transform
     * and feed it to the writer</li>
     * </ul>
     */
    onStart() : number;

    /**
     * Called after the body has been evaluated.
     * 
     * @return {number} <ul>
     * <li><tt>END_EVALUATION</tt> if the transformation should be ended.</li>
     * <li><tt>REPEAT_EVALUATION</tt> to have the engine re-evaluate the
     * transform body and feed it again to the writer.</li>
     * </ul>
     */
    afterBody() : number;

    /**
     * Called if any exception occurs during the transform between the
     * {link TemplateTransformModel#getWriter(java.io.Writer, java.util.Map)} call
     * and the {link java.io.Writer#close()} call.
     * 
     * @param {Error} t the throwable that represents the exception. It can be any
     * non-checked throwable, as well as {link TemplateException} and
     * {link java.io.IOException}.
     * @throws Throwable is recommended that the methods rethrow the received
     * throwable. If the method wants to throw another throwable, it should
     * either throw a non-checked throwable, or an instance of
     * {link TemplateException} and {link java.io.IOException}. Throwing any
     * other checked exception will cause the engine to rethrow it as
     * a {link java.lang.reflect.UndeclaredThrowableException}.
     */
    onError(t : Error);
}

export namespace TransformControl {

    /**
     * Constant returned from {link #afterBody()} that tells the
     * template engine to repeat transform body evaluation and feed
     * it again to the transform.
     */
    export let REPEAT_EVALUATION : number = 0;

    /**
     * Constant returned from {link #afterBody()} that tells the
     * template engine to end the transform and close the writer.
     */
    export let END_EVALUATION : number = 1;

    /**
     * Constant returned from {link #onStart()} that tells the
     * template engine to skip evaluation of the body.
     */
    export let SKIP_BODY : number = 0;

    /**
     * Constant returned from {link #onStart()} that tells the
     * template engine to evaluate the body.
     */
    export let EVALUATE_BODY : number = 1;
}




