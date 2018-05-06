/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateDateModel} from './TemplateDateModel';

/**
 * Creates a new date model wrapping the specified date object and
 * having the specified type.
 * @param {Date} date
 * @param {number} type
 * @class
 */
export class SimpleDate implements TemplateDateModel {
    /*private*/ date : Date;

    /*private*/ type : number;

    public constructor(date? : any, type? : any) {
        if(((date != null && date instanceof <any>Date) || date === null) && ((typeof type === 'number') || type === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.date===undefined) this.date = null;
            if(this.type===undefined) this.type = 0;
            if(this.date===undefined) this.date = null;
            if(this.type===undefined) this.type = 0;
            (() => {
                if(date == null) {
                    throw Object.defineProperty(new Error("date == null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                }
                this.date = date;
                this.type = type;
            })();
        } else if(((date != null && date instanceof <any>Date) || date === null) && type === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let type : any = TemplateDateModel.DATE;
                if(this.date===undefined) this.date = null;
                if(this.type===undefined) this.type = 0;
                if(this.date===undefined) this.date = null;
                if(this.type===undefined) this.type = 0;
                (() => {
                    if(date == null) {
                        throw Object.defineProperty(new Error("date == null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    this.date = date;
                    this.type = type;
                })();
            }
        } else if(((date != null && date instanceof <any>Time) || date === null) && type === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let time : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let date : any = time;
                let type : any = TemplateDateModel.TIME;
                if(this.date===undefined) this.date = null;
                if(this.type===undefined) this.type = 0;
                if(this.date===undefined) this.date = null;
                if(this.type===undefined) this.type = 0;
                (() => {
                    if(date == null) {
                        throw Object.defineProperty(new Error("date == null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    this.date = date;
                    this.type = type;
                })();
            }
        } else if(((date != null && date instanceof <any>Timestamp) || date === null) && type === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let datetime : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let date : any = datetime;
                let type : any = TemplateDateModel.DATETIME;
                if(this.date===undefined) this.date = null;
                if(this.type===undefined) this.type = 0;
                if(this.date===undefined) this.date = null;
                if(this.type===undefined) this.type = 0;
                (() => {
                    if(date == null) {
                        throw Object.defineProperty(new Error("date == null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                    }
                    this.date = date;
                    this.type = type;
                })();
            }
        } else throw new Error('invalid overload');
    }

    public getAsDate() : Date {
        return this.date;
    }

    public getDateType() : number {
        return this.type;
    }

    /**
     * 
     * @return {String}
     */
    public toString() : string {
        return this.date.toString();
    }
}
SimpleDate["__class"] = "freemarker.template.SimpleDate";
SimpleDate["__interfaces"] = ["freemarker.template.TemplateDateModel","freemarker.template.TemplateModel"];





