/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {RightUnboundedRangeModel} from './RightUnboundedRangeModel';

/**
 * This exists for backward compatibly, and is used before Incompatible Improvements 2.3.21 only.
 * 
 * @since 2.3.21
 * @extends RightUnboundedRangeModel
 * @class
 */
export class NonListableRightUnboundedRangeModel extends RightUnboundedRangeModel {
    constructor(begin : number) {
        super(begin);
    }

    public size() : number {
        return 0;
    }
}
NonListableRightUnboundedRangeModel["__class"] = "freemarker.core.NonListableRightUnboundedRangeModel";
NonListableRightUnboundedRangeModel["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];





