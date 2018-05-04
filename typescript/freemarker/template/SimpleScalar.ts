/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateScalarModel } from './TemplateScalarModel';

/**
 * Constructs a <tt>SimpleScalar</tt> containing a string value.
 * 
 * @param {String} value the string value. If this is {@code null}, its value in FTL will be {@code ""}.
 * @class
 */
export class SimpleScalar implements TemplateScalarModel {
    /**
     * @serial the value of this <tt>SimpleScalar</tt> if it wraps a
     * <tt>String</tt>.
     */
    /*private*/ value : string;

    public constructor(value : string) {
        if(this.value===undefined) this.value = null;
        this.value = value;
    }

    public getAsString() : string {
        return (this.value == null)?"":this.value;
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return this.value;
    }

    /**
     * Same as calling the constructor, except that for a {@code null} parameter it returns null.
     * 
     * @since 2.3.23
     * @param {String} s
     * @return {SimpleScalar}
     */
    public static newInstanceOrNull(s : string) : SimpleScalar {
        return s != null?new SimpleScalar(s):null;
    }
}
SimpleScalar["__class"] = "freemarker.template.SimpleScalar";
SimpleScalar["__interfaces"] = ["freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel","java.io.Serializable"];




var __Function = Function;
