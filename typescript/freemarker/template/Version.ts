/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from './utility/StringUtil';
import {Boolean} from '../../java/lang/Boolean';

/**
 * Represents a version number plus the further qualifiers and build info. This is
 * mostly used for representing a FreeMarker version number, but should also be able
 * to parse the version strings of 3rd party libraries.
 * <p>
 * see Configuration#getVersion()
 * 
 * @since 2.3.20
 * @param {number} major
 * @param {number} minor
 * @param {number} micro
 * @param {String} extraInfo
 * @param {Boolean} gaeCompatible
 * @param {Date} buildDate
 * @class
 */
export class Version {
    /*private*/ major : number;

    /*private*/ minor : number;

    /*private*/ micro : number;

    /*private*/ extraInfo : string;

    /*private*/ originalStringValue : string;

    /*private*/ gaeCompliant : boolean;

    /*private*/ buildDate : Date;

    /*private*/ __intValue : number;

    /*private*/ calculatedStringValue : string;

    /*private*/ __hashCode : number;

    /*private*/ isNumber(c : string) : boolean {
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= '0'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= '9'.charCodeAt(0);
    }

    public constructor(major? : any, minor? : any, micro? : any, extraInfo? : any, gaeCompatible? : any, buildDate? : any) {
        if(arguments.length === 6) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.major===undefined) this.major = 0;
            if(this.minor===undefined) this.minor = 0;
            if(this.micro===undefined) this.micro = 0;
            if(this.extraInfo===undefined) this.extraInfo = null;
            if(this.originalStringValue===undefined) this.originalStringValue = null;
            if(this.gaeCompliant===undefined) this.gaeCompliant = null;
            if(this.buildDate===undefined) this.buildDate = null;
            if(this.__intValue===undefined) this.__intValue = 0;
            if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
            if(this.__hashCode===undefined) this.__hashCode = 0;
            if(this.major===undefined) this.major = 0;
            if(this.minor===undefined) this.minor = 0;
            if(this.micro===undefined) this.micro = 0;
            if(this.extraInfo===undefined) this.extraInfo = null;
            if(this.originalStringValue===undefined) this.originalStringValue = null;
            if(this.gaeCompliant===undefined) this.gaeCompliant = null;
            if(this.buildDate===undefined) this.buildDate = null;
            if(this.__intValue===undefined) this.__intValue = 0;
            if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
            if(this.__hashCode===undefined) this.__hashCode = 0;
            (() => {
                this.major = major;
                this.minor = minor;
                this.micro = micro;
                this.extraInfo = extraInfo;
                this.gaeCompliant = gaeCompatible;
                this.buildDate = buildDate;
                this.__intValue = this.calculateIntValue();
                this.originalStringValue = null;
            })();
        } else if(arguments.length === 3 && typeof arguments[0] === 'string') {
            let __args = Array.prototype.slice.call(arguments);
            let stringValue : any = __args[0];
            let gaeCompliant : any = __args[1];
            let buildDate : any = __args[2];
            if(this.major===undefined) this.major = 0;
            if(this.minor===undefined) this.minor = 0;
            if(this.micro===undefined) this.micro = 0;
            if(this.extraInfo===undefined) this.extraInfo = null;
            if(this.originalStringValue===undefined) this.originalStringValue = null;
            if(this.gaeCompliant===undefined) this.gaeCompliant = null;
            if(this.buildDate===undefined) this.buildDate = null;
            if(this.__intValue===undefined) this.__intValue = 0;
            if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
            if(this.__hashCode===undefined) this.__hashCode = 0;
            if(this.major===undefined) this.major = 0;
            if(this.minor===undefined) this.minor = 0;
            if(this.micro===undefined) this.micro = 0;
            if(this.extraInfo===undefined) this.extraInfo = null;
            if(this.originalStringValue===undefined) this.originalStringValue = null;
            if(this.gaeCompliant===undefined) this.gaeCompliant = null;
            if(this.buildDate===undefined) this.buildDate = null;
            if(this.__intValue===undefined) this.__intValue = 0;
            if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
            if(this.__hashCode===undefined) this.__hashCode = 0;
            (() => {
                stringValue = stringValue.trim();
                this.originalStringValue = stringValue;
                let parts : number[] = [0, 0, 0];
                let extraInfoTmp : string = null;
                {
                    let partIdx : number = 0;
                    for(let i : number = 0; i < stringValue.length; i++) {
                        let c : string = stringValue.charAt(i);
                        if(this.isNumber(c)) {
                            parts[partIdx] = parts[partIdx] * 10 + ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) - '0'.charCodeAt(0));
                        } else {
                            if(i === 0) {
                                throw Object.defineProperty(new Error("The version number string " + StringUtil.jQuote$java_lang_Object(stringValue) + " doesn\'t start with a number."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                            }
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '.'.charCodeAt(0)) {
                                let nextC : string = i + 1 >= stringValue.length?String.fromCharCode(0):stringValue.charAt(i + 1);
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(nextC) == '.'.charCodeAt(0)) {
                                    throw Object.defineProperty(new Error("The version number string " + StringUtil.jQuote$java_lang_Object(stringValue) + " contains multiple dots after a number."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                }
                                if(partIdx === 2 || !this.isNumber(nextC)) {
                                    extraInfoTmp = stringValue.substring(i);
                                    break;
                                } else {
                                    partIdx++;
                                }
                            } else {
                                extraInfoTmp = stringValue.substring(i);
                                break;
                            }
                        }
                    }
                    if(extraInfoTmp != null) {
                        let firstChar : string = extraInfoTmp.charAt(0);
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '.'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '-'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '_'.charCodeAt(0)) {
                            extraInfoTmp = extraInfoTmp.substring(1);
                            if(extraInfoTmp.length === 0) {
                                throw Object.defineProperty(new Error("The version number string " + StringUtil.jQuote$java_lang_Object(stringValue) + " has an extra info section opened with \"" + firstChar + "\", but it\'s empty."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                            }
                        }
                    }
                }
                this.extraInfo = extraInfoTmp;
                this.major = parts[0];
                this.minor = parts[1];
                this.micro = parts[2];
                this.__intValue = this.calculateIntValue();
                this.gaeCompliant = gaeCompliant;
                this.buildDate = buildDate;
            })();
        } else if(arguments.length === 3 && typeof arguments[0] === 'number') {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let extraInfo : any = null;
                let gaeCompatible : any = null;
                let buildDate : any = null;
                if(this.major===undefined) this.major = 0;
                if(this.minor===undefined) this.minor = 0;
                if(this.micro===undefined) this.micro = 0;
                if(this.extraInfo===undefined) this.extraInfo = null;
                if(this.originalStringValue===undefined) this.originalStringValue = null;
                if(this.gaeCompliant===undefined) this.gaeCompliant = null;
                if(this.buildDate===undefined) this.buildDate = null;
                if(this.__intValue===undefined) this.__intValue = 0;
                if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
                if(this.__hashCode===undefined) this.__hashCode = 0;
                if(this.major===undefined) this.major = 0;
                if(this.minor===undefined) this.minor = 0;
                if(this.micro===undefined) this.micro = 0;
                if(this.extraInfo===undefined) this.extraInfo = null;
                if(this.originalStringValue===undefined) this.originalStringValue = null;
                if(this.gaeCompliant===undefined) this.gaeCompliant = null;
                if(this.buildDate===undefined) this.buildDate = null;
                if(this.__intValue===undefined) this.__intValue = 0;
                if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
                if(this.__hashCode===undefined) this.__hashCode = 0;
                (() => {
                    this.major = major;
                    this.minor = minor;
                    this.micro = micro;
                    this.extraInfo = extraInfo;
                    this.gaeCompliant = gaeCompatible;
                    this.buildDate = buildDate;
                    this.__intValue = this.calculateIntValue();
                    this.originalStringValue = null;
                })();
            }
        } else if(arguments.length === 1 && typeof arguments[0] === 'string') {
            let __args = Array.prototype.slice.call(arguments);
            let stringValue : any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let gaeCompliant : any = null;
                let buildDate : any = null;
                if(this.major===undefined) this.major = 0;
                if(this.minor===undefined) this.minor = 0;
                if(this.micro===undefined) this.micro = 0;
                if(this.extraInfo===undefined) this.extraInfo = null;
                if(this.originalStringValue===undefined) this.originalStringValue = null;
                if(this.gaeCompliant===undefined) this.gaeCompliant = null;
                if(this.buildDate===undefined) this.buildDate = null;
                if(this.__intValue===undefined) this.__intValue = 0;
                if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
                if(this.__hashCode===undefined) this.__hashCode = 0;
                if(this.major===undefined) this.major = 0;
                if(this.minor===undefined) this.minor = 0;
                if(this.micro===undefined) this.micro = 0;
                if(this.extraInfo===undefined) this.extraInfo = null;
                if(this.originalStringValue===undefined) this.originalStringValue = null;
                if(this.gaeCompliant===undefined) this.gaeCompliant = null;
                if(this.buildDate===undefined) this.buildDate = null;
                if(this.__intValue===undefined) this.__intValue = 0;
                if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
                if(this.__hashCode===undefined) this.__hashCode = 0;
                (() => {
                    stringValue = stringValue.trim();
                    this.originalStringValue = stringValue;
                    let parts : number[] = [0, 0, 0];
                    let extraInfoTmp : string = null;
                    {
                        let partIdx : number = 0;
                        for(let i : number = 0; i < stringValue.length; i++) {
                            let c : string = stringValue.charAt(i);
                            if(this.isNumber(c)) {
                                parts[partIdx] = parts[partIdx] * 10 + ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) - '0'.charCodeAt(0));
                            } else {
                                if(i === 0) {
                                    throw Object.defineProperty(new Error("The version number string " + StringUtil.jQuote$java_lang_Object(stringValue) + " doesn\'t start with a number."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                }
                                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '.'.charCodeAt(0)) {
                                    let nextC : string = i + 1 >= stringValue.length?String.fromCharCode(0):stringValue.charAt(i + 1);
                                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(nextC) == '.'.charCodeAt(0)) {
                                        throw Object.defineProperty(new Error("The version number string " + StringUtil.jQuote$java_lang_Object(stringValue) + " contains multiple dots after a number."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                    }
                                    if(partIdx === 2 || !this.isNumber(nextC)) {
                                        extraInfoTmp = stringValue.substring(i);
                                        break;
                                    } else {
                                        partIdx++;
                                    }
                                } else {
                                    extraInfoTmp = stringValue.substring(i);
                                    break;
                                }
                            }
                        }
                        if(extraInfoTmp != null) {
                            let firstChar : string = extraInfoTmp.charAt(0);
                            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '.'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '-'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(firstChar) == '_'.charCodeAt(0)) {
                                extraInfoTmp = extraInfoTmp.substring(1);
                                if(extraInfoTmp.length === 0) {
                                    throw Object.defineProperty(new Error("The version number string " + StringUtil.jQuote$java_lang_Object(stringValue) + " has an extra info section opened with \"" + firstChar + "\", but it\'s empty."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
                                }
                            }
                        }
                    }
                    this.extraInfo = extraInfoTmp;
                    this.major = parts[0];
                    this.minor = parts[1];
                    this.micro = parts[2];
                    this.__intValue = this.calculateIntValue();
                    this.gaeCompliant = gaeCompliant;
                    this.buildDate = buildDate;
                })();
            }
        } else if(arguments.length === 1 && typeof arguments[0] === 'number') {
            let __args = Array.prototype.slice.call(arguments);
            let intValue : any = __args[0];
            if(this.major===undefined) this.major = 0;
            if(this.minor===undefined) this.minor = 0;
            if(this.micro===undefined) this.micro = 0;
            if(this.extraInfo===undefined) this.extraInfo = null;
            if(this.originalStringValue===undefined) this.originalStringValue = null;
            if(this.gaeCompliant===undefined) this.gaeCompliant = null;
            if(this.buildDate===undefined) this.buildDate = null;
            if(this.__intValue===undefined) this.__intValue = 0;
            if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
            if(this.__hashCode===undefined) this.__hashCode = 0;
            if(this.major===undefined) this.major = 0;
            if(this.minor===undefined) this.minor = 0;
            if(this.micro===undefined) this.micro = 0;
            if(this.extraInfo===undefined) this.extraInfo = null;
            if(this.originalStringValue===undefined) this.originalStringValue = null;
            if(this.gaeCompliant===undefined) this.gaeCompliant = null;
            if(this.buildDate===undefined) this.buildDate = null;
            if(this.__intValue===undefined) this.__intValue = 0;
            if(this.calculatedStringValue===undefined) this.calculatedStringValue = null;
            if(this.__hashCode===undefined) this.__hashCode = 0;
            (() => {
                this.__intValue = intValue;
                this.micro = intValue % 1000;
                this.minor = ((intValue / 1000|0)) % 1000;
                this.major = (intValue / 1000000|0);
                this.extraInfo = null;
                this.gaeCompliant = null;
                this.buildDate = null;
                this.originalStringValue = null;
            })();
        } else throw new Error('invalid overload');
    }

    /*private*/ calculateIntValue() : number {
        return Version.intValueFor(this.major, this.minor, this.micro);
    }

    public static intValueFor(major : number, minor : number, micro : number) : number {
        return major * 1000000 + minor * 1000 + micro;
    }

    /*private*/ getStringValue() : string {
        if(this.originalStringValue != null) return this.originalStringValue;
        let calculatedStringValue : string = this.calculatedStringValue;
        if(calculatedStringValue == null) {
            {
                calculatedStringValue = this.calculatedStringValue;
                if(calculatedStringValue == null) {
                    calculatedStringValue = this.major + "." + this.minor + "." + this.micro;
                    if(this.extraInfo != null) calculatedStringValue += "-" + this.extraInfo;
                    this.calculatedStringValue = calculatedStringValue;
                }
            }
        }
        return calculatedStringValue;
    }

    /**
     * Contains the major.minor.micor numbers and the extraInfo part, not the other information.
     * @return {String}
     */
    public toString() : string {
        return this.getStringValue();
    }

    /**
     * The 1st version number, like 1 in "1.2.3".
     * @return {number}
     */
    public getMajor() : number {
        return this.major;
    }

    /**
     * The 2nd version number, like 2 in "1.2.3".
     * @return {number}
     */
    public getMinor() : number {
        return this.minor;
    }

    /**
     * The 3rd version number, like 3 in "1.2.3".
     * @return {number}
     */
    public getMicro() : number {
        return this.micro;
    }

    /**
     * The arbitrary string after the micro version number without leading dot, dash or underscore,
     * like "RC03" in "2.4.0-RC03".
     * This is usually a qualifier (RC, SNAPHOST, nightly, beta, etc) and sometimes build info (like
     * date).
     * @return {String}
     */
    public getExtraInfo() : string {
        return this.extraInfo;
    }

    /**
     * @return {Boolean} The Google App Engine compliance, or {@code null}.
     */
    public isGAECompliant() : boolean {
        return this.gaeCompliant;
    }

    /**
     * @return {Date} The build date if known, or {@code null}.
     */
    public getBuildDate() : Date {
        return this.buildDate;
    }

    /**
     * @return {number} major * 1000000 + minor * 1000 + micro.
     */
    public intValue() : number {
        return this.__intValue;
    }

    /**
     * 
     * @return {number}
     */
    public hashCode() : number {
        // let r : number = this.__hashCode;
        // if(r !== 0) return r;
        // {
        //     if(this.__hashCode === 0) {
        //         let prime : number = 31;
        //         let result : number = 1;
        //         result = prime * result + (this.buildDate == null?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.buildDate)));
        //         result = prime * result + (this.extraInfo == null?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.extraInfo)));
        //         result = prime * result + (this.gaeCompliant == null?0:Boolean.hashCode());
        //         result = prime * result + this.__intValue;
        //         if(result === 0) result = -1;
        //         this.__hashCode = result;
        //     }
        //     return this.__hashCode;
        // };
        throw new Error();
    }

    /**
     * 
     * @param {Object} obj
     * @return {boolean}
     */
    public equals(obj : any) : boolean {
        if(this === obj) return true;
        if(obj == null) return false;
        if((<any>this.constructor) !== (<any>obj.constructor)) return false;
        let other : Version = <Version>obj;
        if(this.__intValue !== other.__intValue) return false;
        if(/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(other)) !== /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this))) return false;
        if(this.buildDate == null) {
            if(other.buildDate != null) return false;
        } else if(this.buildDate !== other.buildDate) {
            return false;
        }
        if(this.extraInfo == null) {
            if(other.extraInfo != null) return false;
        } else if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.extraInfo,other.extraInfo))) {
            return false;
        }
        if(this.gaeCompliant == null) {
            return other.gaeCompliant == null;
        } else return this.gaeCompliant === other.gaeCompliant;
    }
}
Version["__class"] = "freemarker.template.Version";
Version["__interfaces"] = ["java.io.Serializable"];





