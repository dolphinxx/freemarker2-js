/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Thrown when FreeMarker runs into a {link Number} subclass that it doesn't yet support.
 * @param {*} pClass
 * @class
 * @extends Error
 */
export class UnsupportedNumberClassException extends Error {
    /*private*/ fClass : any;

    public constructor(pClass : any) {
        super("Unsupported number class: " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(pClass)); this.message="Unsupported number class: " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(pClass);
        (<any>Object).setPrototypeOf(this, UnsupportedNumberClassException.prototype);
        if(this.fClass===undefined) this.fClass = null;
        this.fClass = pClass;
    }

    public getUnsupportedClass() : any {
        return this.fClass;
    }
}
UnsupportedNumberClassException["__class"] = "freemarker.template.utility.UnsupportedNumberClassException";
UnsupportedNumberClassException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
