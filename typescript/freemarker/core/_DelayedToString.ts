/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _DelayedConversionToString } from './_DelayedConversionToString';

export class _DelayedToString extends _DelayedConversionToString {
    public constructor(object? : any) {
        if(((typeof object === 'number') || object === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(object);
        } else if(((object != null) || object === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(object);
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {Object} obj
     * @return {String}
     */
    doConversion(obj : any) : string {
        return /* valueOf */new String(obj).toString();
    }
}
_DelayedToString["__class"] = "freemarker.core._DelayedToString";



var __Function = Function;
