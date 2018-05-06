/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateNumberModel} from './TemplateNumberModel';

/**
 * A simple implementation of the <tt>TemplateNumberModel</tt>
 * interface. Note that this class is immutable.
 * 
 * <p>This class is thread-safe.
 * @param {Number} value
 * @class
 */
export class SimpleNumber implements TemplateNumberModel {
    /**
     * @serial the value of this <tt>SimpleNumber</tt>
     */
    /*private*/ value : number;

    public constructor(val? : any) {
        if(((typeof val === 'number') || val === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.value===undefined) this.value = null;
            if(this.value===undefined) this.value = null;
            (() => {
                this.value = val;
            })();
        } else if(((typeof val === 'number') || val === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.value===undefined) this.value = null;
            if(this.value===undefined) this.value = null;
            (() => {
                this.value = val;
            })();
        } else if(((typeof val === 'number') || val === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.value===undefined) this.value = null;
            if(this.value===undefined) this.value = null;
            (() => {
                this.value = val;
            })();
        } else if(((typeof val === 'number') || val === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.value===undefined) this.value = null;
            if(this.value===undefined) this.value = null;
            (() => {
                this.value = val;
            })();
        } else if(((typeof val === 'number') || val === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.value===undefined) this.value = null;
            if(this.value===undefined) this.value = null;
            (() => {
                this.value = val;
            })();
        } else if(((typeof val === 'number') || val === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.value===undefined) this.value = null;
            if(this.value===undefined) this.value = null;
            (() => {
                this.value = val;
            })();
        } else if(((typeof val === 'number') || val === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let value : any = __args[0];
            if(this.value===undefined) this.value = null;
            if(this.value===undefined) this.value = null;
            (() => {
                this.value = value;
            })();
        } else throw new Error('invalid overload');
    }

    public getAsNumber() : number {
        return this.value;
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return this.value.toString();
    }
}
SimpleNumber["__class"] = "freemarker.template.SimpleNumber";
SimpleNumber["__interfaces"] = ["freemarker.template.TemplateNumberModel","freemarker.template.TemplateModel","java.io.Serializable"];





