/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleScalar} from '../template/SimpleScalar';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';

/**
 * Warning: Does not copy the argument array!
 * @param {Array} stringArray
 * @class
 */
export class StringArraySequence implements TemplateSequenceModel {
    /*private*/ stringArray : Array<any>;

    /*private*/ array : TemplateScalarModel[];

    public constructor(stringArray : Array<any>) {
        if(this.stringArray===undefined) this.stringArray = null;
        if(this.array===undefined) this.array = null;
        this.stringArray = stringArray;
    }

    public get(s? : any) : any {
        if(((typeof s === 'number') || s === null)) {
            return <any>this.get$int(s);
        } else throw new Error('invalid overload');
    }

    public get$int(index : number) : TemplateModel {
        if(this.array == null) {
            this.array = (s => { let a=[]; while(s-->0) a.push(null); return a; })(this.stringArray.length);
        }
        let result : TemplateScalarModel = this.array[index];
        if(result == null) {
            result = new SimpleScalar(this.stringArray[index]);
            this.array[index] = result;
        }
        return result;
    }

    public size() : number {
        return this.stringArray.length;
    }
}
StringArraySequence["__class"] = "freemarker.core.StringArraySequence";
StringArraySequence["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];





