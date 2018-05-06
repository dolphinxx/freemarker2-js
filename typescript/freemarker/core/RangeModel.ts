/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleNumber} from '../template/SimpleNumber';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {_TemplateModelException} from './_TemplateModelException';

export abstract class RangeModel implements TemplateSequenceModel {
    /*private*/ begin : number;

    public constructor(begin : number) {
        if(this.begin===undefined) this.begin = 0;
        this.begin = begin;
    }

    getBegining() : number {
        return this.begin;
    }

    public get(s? : any) : any {
        if(((typeof s === 'number') || s === null)) {
            return <any>this.get$int(s);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        if(index < 0 || index >= this.size()) {
            throw new _TemplateModelException("Range item index ", index, " is out of bounds.");
        }
        let value : number = this.begin + this.getStep() * (n => n<0?Math.ceil(n):Math.floor(n))(<number>index);
        return value <= Number.MAX_VALUE?new SimpleNumber((<number>value|0)):new SimpleNumber(value);
    }

    /**
     * @return {number} {@code 1} or {@code -1}; other return values need not be properly handled until FTL supports other steps.
     */
    abstract getStep() : number;

    abstract isRightUnbounded() : boolean;

    abstract isRightAdaptive() : boolean;

    abstract isAffactedByStringSlicingBug() : boolean;

    public abstract size(): any;}
RangeModel["__class"] = "freemarker.core.RangeModel";
RangeModel["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];





