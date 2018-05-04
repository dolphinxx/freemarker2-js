/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {Appendable} from "./Appendable";
import {AbstractStringBuilder} from "./AbstractStringBuilder";
import {CharSequence} from "./CharSequence";

/**
 * A fast way to create strings using multiple appends.
 *
 * This class is an exact clone of {@link StringBuffer} except for the name. Any
 * change made to one should be mirrored in the other.
 * @param {*} s
 * @class
 * @extends java.lang.AbstractStringBuilder
 */
export class StringBuilder extends AbstractStringBuilder implements CharSequence, Appendable {
    public constructor(s?: any) {
        if (((typeof s === 'string') || s === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(s);
        } else if (((s != null && (s["__interfaces"] != null && s["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || s.constructor != null && s.constructor["__interfaces"] != null && s.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof s === "string")) || s === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(/* valueOf */new String(s).toString());
        } else if (((typeof s === 'number') || s === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let ignoredCapacity: any = __args[0];
            super("");
        } else if (s === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super("");
        } else throw new Error('invalid overload');
    }

    public append$boolean(x: boolean): StringBuilder {
        this.string += x;
        return this;
    }

    public append$char(x: string): StringBuilder {
        this.string += x;
        return this;
    }

    public append$char_A(x: string[]): StringBuilder {
        this.string += /* valueOf */new String(x).toString();
        return this;
    }

    public append$char_A$int$int(x: string[], start: number, len: number): StringBuilder {
        this.string += /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(x, start, len);
        return this;
    }

    public append(x?: any, start?: any, len?: any): any {
        if (((x != null && x instanceof <any>Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.append$char_A$int$int(x, start, len);
        } else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof start === 'number') || start === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.append$java_lang_CharSequence$int$int(x, start, len);
        } else if (((x != null && x instanceof <any>Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && start === undefined && len === undefined) {
            return <any>this.append$char_A(x);
        } else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
            return <any>this.append$java_lang_String(x);
        } else if (((x != null && x instanceof <any>java.lang.StringBuffer) || x === null) && start === undefined && len === undefined) {
            return <any>this.append$java_lang_StringBuffer(x);
        } else if (((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && start === undefined && len === undefined) {
            return <any>this.append$java_lang_CharSequence(x);
        } else if (((typeof x === 'boolean') || x === null) && start === undefined && len === undefined) {
            return <any>this.append$boolean(x);
        } else if (((typeof x === 'string') || x === null) && start === undefined && len === undefined) {
            return <any>this.append$char(x);
        } else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
            return <any>this.append$int(x);
        } else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
            return <any>this.append$long(x);
        } else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
            return <any>this.append$float(x);
        } else if (((typeof x === 'number') || x === null) && start === undefined && len === undefined) {
            return <any>this.append$double(x);
        } else if (((x != null) || x === null) && start === undefined && len === undefined) {
            return <any>this.append$java_lang_Object(x);
        } else throw new Error('invalid overload');
    }

    public append$java_lang_CharSequence(x: any): StringBuilder {
        this.string += x;
        return this;
    }

    public append$java_lang_CharSequence$int$int(x: any, start: number, end: number): StringBuilder {
        this.append0(x, start, end);
        return this;
    }

    public append$double(x: number): StringBuilder {
        this.string += x;
        return this;
    }

    public append$float(x: number): StringBuilder {
        this.string += x;
        return this;
    }

    public append$int(x: number): StringBuilder {
        this.string += x;
        return this;
    }

    public append$long(x: number): StringBuilder {
        this.string += x;
        return this;
    }

    public append$java_lang_Object(x: any): StringBuilder {
        this.string += x;
        return this;
    }

    public append$java_lang_String(x: string): StringBuilder {
        this.string += x;
        return this;
    }

    public append$java_lang_StringBuffer(x: java.lang.StringBuffer): StringBuilder {
        this.string += x;
        return this;
    }

    public appendCodePoint(x: number): StringBuilder {
        this.appendCodePoint0(x);
        return this;
    }

    public delete(start: number, end: number): StringBuilder {
        this.replace0(start, end, "");
        return this;
    }

    public deleteCharAt(start: number): StringBuilder {
        this.replace0(start, start + 1, "");
        return this;
    }

    public insert$int$boolean(index: number, x: boolean): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */new String(x).toString());
    }

    public insert$int$char(index: number, x: string): StringBuilder {
        this.replace0(index, index, /* valueOf */new String(x).toString());
        return this;
    }

    public insert$int$char_A(index: number, x: string[]): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */new String(x).toString());
    }

    public insert$int$char_A$int$int(index: number, x: string[], offset: number, len: number): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */((str, index, len) => str.join('').substring(index, index + len))(x, offset, len));
    }

    public insert(index?: any, x?: any, offset?: any, len?: any): any {
        if (((typeof index === 'number') || index === null) && ((x != null && x instanceof <any>Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.insert$int$char_A$int$int(index, x, offset, len);
        } else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && ((typeof offset === 'number') || offset === null) && ((typeof len === 'number') || len === null)) {
            return <any>this.insert$int$java_lang_CharSequence$int$int(index, x, offset, len);
        } else if (((typeof index === 'number') || index === null) && ((x != null && x instanceof <any>Array && (x.length == 0 || x[0] == null || (typeof x[0] === 'string'))) || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$char_A(index, x);
        } else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$java_lang_String(index, x);
        } else if (((typeof index === 'number') || index === null) && ((x != null && (x["__interfaces"] != null && x["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || x.constructor != null && x.constructor["__interfaces"] != null && x.constructor["__interfaces"].indexOf("java.lang.CharSequence") >= 0 || typeof x === "string")) || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$java_lang_CharSequence(index, x);
        } else if (((typeof index === 'number') || index === null) && ((typeof x === 'boolean') || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$boolean(index, x);
        } else if (((typeof index === 'number') || index === null) && ((typeof x === 'string') || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$char(index, x);
        } else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$int(index, x);
        } else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$long(index, x);
        } else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$float(index, x);
        } else if (((typeof index === 'number') || index === null) && ((typeof x === 'number') || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$double(index, x);
        } else if (((typeof index === 'number') || index === null) && ((x != null) || x === null) && offset === undefined && len === undefined) {
            return <any>this.insert$int$java_lang_Object(index, x);
        } else throw new Error('invalid overload');
    }

    public insert$int$java_lang_CharSequence(index: number, chars: any): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, chars.toString());
    }

    public insert$int$java_lang_CharSequence$int$int(index: number, chars: any, start: number, end: number): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* subSequence */chars.substring(start, end).toString());
    }

    public insert$int$double(index: number, x: number): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */new String(x).toString());
    }

    public insert$int$float(index: number, x: number): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */new String(x).toString());
    }

    public insert$int$int(index: number, x: number): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */new String(x).toString());
    }

    public insert$int$long(index: number, x: number): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */new String(x).toString());
    }

    public insert$int$java_lang_Object(index: number, x: any): StringBuilder {
        return this.insert$int$java_lang_CharSequence(index, /* valueOf */new String(x).toString());
    }

    public insert$int$java_lang_String(index: number, x: string): StringBuilder {
        this.replace0(index, index, x);
        return this;
    }

    public replace(start: number, end: number, toInsert: string): StringBuilder {
        this.replace0(start, end, toInsert);
        return this;
    }

    public reverse(): StringBuilder {
        this.reverse0();
        return this;
    }
}

StringBuilder["__class"] = "java.lang.StringBuilder";
StringBuilder["__interfaces"] = ["java.lang.CharSequence", "java.lang.Appendable"];