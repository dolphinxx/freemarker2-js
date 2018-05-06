/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {RangeModel} from './RangeModel';

/**
 * A range between two integers (maybe 0 long).
 * @extends RangeModel
 * @class
 */
export class BoundedRangeModel extends RangeModel {
    /*private*/ step : number;

    /*private*/ __size : number;

    /*private*/ rightAdaptive : boolean;

    /*private*/ affectedByStringSlicingBug : boolean;

    constructor(begin : number, end : number, inclusiveEnd : boolean, rightAdaptive : boolean) {
        super(begin);
        if(this.step===undefined) this.step = 0;
        if(this.__size===undefined) this.__size = 0;
        if(this.rightAdaptive===undefined) this.rightAdaptive = false;
        if(this.affectedByStringSlicingBug===undefined) this.affectedByStringSlicingBug = false;
        this.step = begin <= end?1:-1;
        this.__size = Math.abs(end - begin) + (inclusiveEnd?1:0);
        this.rightAdaptive = rightAdaptive;
        this.affectedByStringSlicingBug = inclusiveEnd;
    }

    public size() : number {
        return this.__size;
    }

    /**
     * 
     * @return {number}
     */
    getStep() : number {
        return this.step;
    }

    /**
     * 
     * @return {boolean}
     */
    isRightUnbounded() : boolean {
        return false;
    }

    /**
     * 
     * @return {boolean}
     */
    isRightAdaptive() : boolean {
        return this.rightAdaptive;
    }

    /**
     * 
     * @return {boolean}
     */
    isAffactedByStringSlicingBug() : boolean {
        return this.affectedByStringSlicingBug;
    }
}
BoundedRangeModel["__class"] = "freemarker.core.BoundedRangeModel";
BoundedRangeModel["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];




