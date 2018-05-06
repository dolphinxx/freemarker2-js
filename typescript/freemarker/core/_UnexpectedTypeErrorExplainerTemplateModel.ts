/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../template/TemplateModel';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * 
 * <p>Implemented by {link TemplateModel}-s that can explain why they don't implement a certain type.
 * @class
 */
export interface _UnexpectedTypeErrorExplainerTemplateModel extends TemplateModel {
    /**
     * @return {Array} A single {link _ErrorDescriptionBuilder} tip, or {@code null}.
     * @param {Array} expectedClasses
     */
    explainTypeError(expectedClasses : Array) : Array<any>;
}



