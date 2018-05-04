/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleNumber } from '../template/SimpleNumber';
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelIterator } from '../template/TemplateModelIterator';
import { RightUnboundedRangeModel } from './RightUnboundedRangeModel';

/**
 * This is the model used for right-unbounded ranges since Incompatible Improvements 2.3.21.
 * 
 * @since 2.3.21
 * @extends RightUnboundedRangeModel
 * @class
 */
export class ListableRightUnboundedRangeModel extends RightUnboundedRangeModel implements TemplateCollectionModel {
    constructor(begin : number) {
        super(begin);
    }

    public size() : number {
        return Number.MAX_VALUE;
    }

    public iterator() : TemplateModelIterator {
        return new ListableRightUnboundedRangeModel.ListableRightUnboundedRangeModel$0(this);
    }
}
ListableRightUnboundedRangeModel["__class"] = "freemarker.core.ListableRightUnboundedRangeModel";
ListableRightUnboundedRangeModel["__interfaces"] = ["freemarker.template.TemplateCollectionModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];



export namespace ListableRightUnboundedRangeModel {

    export class ListableRightUnboundedRangeModel$0 implements TemplateModelIterator {
        public __parent: any;
        needInc : boolean;

        nextType : number;

        nextInt : number;

        nextLong : number;

        nextBigInteger : BigInteger;

        public next() : TemplateModel {
            if(this.needInc) {
                switch((this.nextType)) {
                case 1:
                    if(this.nextInt < Number.MAX_VALUE) {
                        this.nextInt++;
                    } else {
                        this.nextType = 2;
                        this.nextLong = this.nextInt + 1;
                    }
                    break;
                case 2:
                    if(this.nextLong < Number.MAX_VALUE) {
                        this.nextLong++;
                    } else {
                        this.nextType = 3;
                        this.nextBigInteger = BigInteger.valueOf(this.nextLong);
                        this.nextBigInteger = this.nextBigInteger.add(BigInteger.ONE);
                    }
                    break;
                default:
                    this.nextBigInteger = this.nextBigInteger.add(BigInteger.ONE);
                }
            }
            this.needInc = true;
            return this.nextType === 1?new SimpleNumber(this.nextInt):(this.nextType === 2?new SimpleNumber(this.nextLong):new SimpleNumber(this.nextBigInteger));
        }

        public hasNext() : boolean {
            return true;
        }

        constructor(__parent: any) {
            this.__parent = __parent;
            if(this.needInc===undefined) this.needInc = false;
            this.nextType = 1;
            this.nextInt = this.__parent.getBegining();
            if(this.nextLong===undefined) this.nextLong = 0;
            if(this.nextBigInteger===undefined) this.nextBigInteger = null;
        }
    }
    ListableRightUnboundedRangeModel$0["__interfaces"] = ["freemarker.template.TemplateModelIterator"];


}



var __Function = Function;
