/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {ClassUtil} from '../template/utility/ClassUtil';
import {_DelayedConversionToString} from './_DelayedConversionToString';

export class _DelayedShortClassName extends _DelayedConversionToString {
    public constructor(pClass : any) {
        super(pClass);
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        return ClassUtil.getShortClassName(<any>obj, true);
    }
}
_DelayedShortClassName["__class"] = "freemarker.core._DelayedShortClassName";




