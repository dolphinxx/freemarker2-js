/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {RangeModel} from './RangeModel';

export abstract class RightUnboundedRangeModel extends RangeModel {
    constructor(begin : number) {
        super(begin);
    }

    /**
     * 
     * @return {number}
     */
    getStep() : number {
        return 1;
    }

    /**
     * 
     * @return {boolean}
     */
    isRightUnbounded() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    isRightAdaptive() : boolean {
        return true;
    }

    /**
     * 
     * @return {boolean}
     */
    isAffactedByStringSlicingBug() : boolean {
        return false;
    }
}
RightUnboundedRangeModel["__class"] = "freemarker.core.RightUnboundedRangeModel";
RightUnboundedRangeModel["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];





