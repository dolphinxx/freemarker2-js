/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Object} object
 * @class
 */
export abstract class _DelayedConversionToString {
    static NOT_SET : string = "";

    /*private*/ object : any;

    /*private*/ stringValue : string = _DelayedConversionToString.NOT_SET;

    public constructor(object : any) {
        if(this.object===undefined) this.object = null;
        this.object = object;
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        let stringValue : string = this.stringValue;
        if(stringValue === _DelayedConversionToString.NOT_SET) {
            {
                stringValue = this.stringValue;
                if(stringValue === _DelayedConversionToString.NOT_SET) {
                    stringValue = this.doConversion(this.object);
                    this.stringValue = stringValue;
                    this.object = null;
                }
            }
        }
        return stringValue;
    }

    abstract doConversion(obj : any) : string;
}
_DelayedConversionToString["__class"] = "freemarker.core._DelayedConversionToString";




