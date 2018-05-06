/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleSequence} from './SimpleSequence';

/**
 * This is a trivial subclass that exists for backward compatibility
 * with the SimpleList from FreeMarker Classic.
 * 
 * <p>This class is thread-safe.
 * 
 * @deprecated Use SimpleSequence instead.
 * see SimpleSequence
 * @param {List} list
 * @class
 * @extends SimpleSequence
 */
export class SimpleList extends SimpleSequence {
    public constructor(list? : any) {
        if(((list != null && (list instanceof Array)) || list === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(list);
        } else if(list === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super();
        } else throw new Error('invalid overload');
    }
}
SimpleList["__class"] = "freemarker.template.SimpleList";
SimpleList["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];





