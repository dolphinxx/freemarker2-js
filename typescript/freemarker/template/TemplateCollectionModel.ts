/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from './TemplateModel';
import { TemplateModelIterator } from './TemplateModelIterator';
import { TemplateModelException } from './TemplateModelException';

/**
 * "collection" template language data type: a collection of values that can be enumerated, but can't be or not meant to
 * be accessed by index or key, nor the number of elements in it is known. As such, this is very similar to Java's
 * {link Iterable} interface (but it predates that interface, hence the unfortunate class name).
 * <p>
 * <p>
 * Note that this is not a super-interface of {link TemplateSequenceModel}, and implementations of that interface
 * needn't also implement this interface just because they can. They should though, if enumeration with this interface
 * is significantly faster than enumeration by index. The {@code #list} directive will enumerate using this interface if
 * it's available.
 * <p>
 * <p>
 * The enumeration should be repeatable if that's possible with reasonable effort, otherwise a second enumeration
 * attempt is allowed to throw an {link TemplateModelException}. Generally, the interface user Java code need not
 * handle that kind of exception, as in practice only the template author can handle it, by not listing such collections
 * twice.
 * <p>
 * <p>
 * Note that to wrap Java's {link Collection}, you should implement {link TemplateCollectionModelEx}, not just this
 * interface.
 * @class
 */
export interface TemplateCollectionModel extends TemplateModel {
    /**
     * Retrieves a template model iterator that is used to iterate over the elements in this collection.
     * @return {*}
     */
    iterator() : TemplateModelIterator;
}


var __Function = Function;
