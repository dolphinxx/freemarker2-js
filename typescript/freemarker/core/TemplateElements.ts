/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {CollectionUtils} from '../template/utility/CollectionUtils';
import {TemplateElement} from './TemplateElement';
import {TextBlock} from './TextBlock';
import {MixedContent} from './MixedContent';

/**
 * Holds an buffer (array) of {link TemplateElement}-s with the count of the utilized items in it. The un-utilized tail
 * of the array must only contain {@code null}-s.
 * 
 * @since 2.3.24
 * @class
 */
export class TemplateElements {
    static EMPTY : TemplateElements; public static EMPTY_$LI$() : TemplateElements { if(TemplateElements.EMPTY == null) TemplateElements.EMPTY = new TemplateElements(null, 0); return TemplateElements.EMPTY; };

    /*private*/ buffer : TemplateElement[];

    /*private*/ count : number;

    constructor(buffer : TemplateElement[], count : number) {
        if(this.buffer===undefined) this.buffer = null;
        if(this.count===undefined) this.count = 0;
        this.buffer = buffer;
        this.count = count;
    }

    getBuffer() : TemplateElement[] {
        return this.buffer;
    }

    getCount() : number {
        return this.count;
    }

    getFirst() : TemplateElement {
        return this.buffer != null?this.buffer[0]:null;
    }

    getLast() : TemplateElement {
        return this.buffer != null?this.buffer[this.count - 1]:null;
    }

    /**
     * Used for some backward compatibility hacks.
     * @return {TemplateElement}
     */
    asSingleElement() : TemplateElement {
        if(this.count === 0) {
            return new TextBlock(CollectionUtils.EMPTY_CHAR_ARRAY_$LI$(), false);
        } else {
            let first : TemplateElement = this.buffer[0];
            if(this.count === 1) {
                return first;
            } else {
                let mixedContent : MixedContent = new MixedContent();
                mixedContent.setChildren(this);
                mixedContent.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(first.getTemplate(), first, this.getLast());
                return mixedContent;
            }
        }
    }

    /**
     * Used for some backward compatibility hacks.
     * @return {MixedContent}
     */
    asMixedContent() : MixedContent {
        let mixedContent : MixedContent = new MixedContent();
        if(this.count !== 0) {
            let first : TemplateElement = this.buffer[0];
            mixedContent.setChildren(this);
            mixedContent.setLocation$freemarker_template_Template$freemarker_core_TemplateObject$freemarker_core_TemplateObject(first.getTemplate(), first, this.getLast());
        }
        return mixedContent;
    }
}
TemplateElements["__class"] = "freemarker.core.TemplateElements";





TemplateElements.EMPTY_$LI$();
