/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateSequenceModel} from './TemplateSequenceModel';
import {TemplateModel} from './TemplateModel';

/**
 * A sequence that wraps a {link List} of {link TemplateModel}-s. It does not copy the original
 * list. It's mostly useful when implementing {link TemplateMethodModelEx}-es that collect items from other
 * {link TemplateModel}-s.
 * @param {List} list
 * @class
 */
export class TemplateModelListSequence implements TemplateSequenceModel {
    /*private*/ list : Array<any>;

    public constructor(list : Array<any>) {
        if(this.list===undefined) this.list = null;
        this.list = list;
    }

    public get(s? : any) : any {
        if(((typeof s === 'number') || s === null)) {
            return <any>this.get$int(s);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        return <TemplateModel><any>/* get */this.list[index];
    }

    public size() : number {
        return /* size */(<number>this.list.length);
    }

    /**
     * Returns the original {link List} of {link TemplateModel}-s, so it's not a fully unwrapped value.
     * @return {Object}
     */
    public getWrappedObject() : any {
        return this.list;
    }
}
TemplateModelListSequence["__class"] = "freemarker.template.TemplateModelListSequence";
TemplateModelListSequence["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];





