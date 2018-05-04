/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * @param {String} timeZoneId
 * @class
 */
export class _TimeZoneBuilder {
    /*private*/ timeZoneId : string;

    public constructor(timeZoneId : string) {
        if(this.timeZoneId===undefined) this.timeZoneId = null;
        this.timeZoneId = timeZoneId;
    }

    public build() : string {
        let timeZone : string = /* getTimeZone */this.timeZoneId;
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* getID */timeZone,"GMT")) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.timeZoneId,"GMT")) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.timeZoneId,"UTC")) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.timeZoneId,"GMT+00")) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.timeZoneId,"GMT+00:00")) && !/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.timeZoneId,"GMT+0000"))) {
            throw Object.defineProperty(new Error("Unrecognized time zone: " + this.timeZoneId), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        return timeZone;
    }
}
_TimeZoneBuilder["__class"] = "freemarker.core._TimeZoneBuilder";



var __Function = Function;
