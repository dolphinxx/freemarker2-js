/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Indicates that an argument that must be non-{@code null} was {@code null}.
 * 
 * @since 2.3.20
 * @param {String} argumentName
 * @param {String} details
 * @class
 * @extends Error
 */
export class NullArgumentException {
    public constructor(argumentName? : any, details? : any) {
        if(((typeof argumentName === 'string') || argumentName === null) && ((typeof details === 'string') || details === null)) {
            let __args = Array.prototype.slice.call(arguments);
            (<any>Object).setPrototypeOf(this, NullArgumentException.prototype);
        } else if(((typeof argumentName === 'string') || argumentName === null) && details === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            (<any>Object).setPrototypeOf(this, NullArgumentException.prototype);
        } else if(argumentName === undefined && details === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            (<any>Object).setPrototypeOf(this, NullArgumentException.prototype);
        } else throw new Error('invalid overload');
    }

    public static check$java_lang_String$java_lang_Object(argumentName : string, argumentValue : any) {
        if(argumentValue == null) {
            throw new NullArgumentException(argumentName);
        }
    }

    /**
     * Convenience method to protect against a {@code null} argument.
     * @param {String} argumentName
     * @param {Object} argumentValue
     */
    public static check(argumentName? : any, argumentValue? : any) : any {
        if(((typeof argumentName === 'string') || argumentName === null) && ((argumentValue != null) || argumentValue === null)) {
            return <any>NullArgumentException.check$java_lang_String$java_lang_Object(argumentName, argumentValue);
        } else if(((argumentName != null) || argumentName === null) && argumentValue === undefined) {
            return <any>NullArgumentException.check$java_lang_Object(argumentName);
        } else throw new Error('invalid overload');
    }

    public static check$java_lang_Object(argumentValue : any) {
        if(argumentValue == null) {
            throw new NullArgumentException();
        }
    }
}
NullArgumentException["__class"] = "freemarker.template.utility.NullArgumentException";
NullArgumentException["__interfaces"] = ["java.io.Serializable"];




var __Function = Function;
