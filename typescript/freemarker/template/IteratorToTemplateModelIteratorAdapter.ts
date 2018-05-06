/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModelIterator} from './TemplateModelIterator';
import {ObjectWrapper} from './ObjectWrapper';
import {TemplateModel} from './TemplateModel';
import {TemplateModelException} from './TemplateModelException';

/**
 * Unlike {link DefaultIteratorAdapter}, this doesn't adapt to some {link TemplateModel}, but to {link
 * TemplateModelIterator}.
 * @class
 */
export class IteratorToTemplateModelIteratorAdapter implements TemplateModelIterator {
    /*private*/ it : Iterator;

    /*private*/ wrapper : ObjectWrapper;

    constructor(it : Iterator, wrapper : ObjectWrapper) {
        if(this.it===undefined) this.it = null;
        if(this.wrapper===undefined) this.wrapper = null;
        this.it = it;
        this.wrapper = wrapper;
    }

    public next() : TemplateModel {
        try {
            return this.wrapper['wrap$java_lang_Object'](this.it.next());
        } catch(e) {
            throw new TemplateModelException("The collection has no more items.", e);
        }
    }

    public hasNext() : boolean {
        return this.it.hasNext();
    }
}
IteratorToTemplateModelIteratorAdapter["__class"] = "freemarker.template.IteratorToTemplateModelIteratorAdapter";
IteratorToTemplateModelIteratorAdapter["__interfaces"] = ["freemarker.template.TemplateModelIterator"];





