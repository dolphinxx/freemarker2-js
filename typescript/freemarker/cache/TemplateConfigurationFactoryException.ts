/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Non-I/O exception thrown by {link TemplateConfigurationFactory}-s.
 * 
 * @since 2.3.24
 * @param {String} message
 * @param {Error} cause
 * @class
 * @extends Error
 */
export class TemplateConfigurationFactoryException extends Error {
    public constructor(message? : any, cause? : any) {
        if(((typeof message === 'string') || message === null) && ((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, TemplateConfigurationFactoryException.prototype);
        } else if(((typeof message === 'string') || message === null) && cause === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            super(message); this.message=message;
            (<any>Object).setPrototypeOf(this, TemplateConfigurationFactoryException.prototype);
        } else throw new Error('invalid overload');
    }
}
TemplateConfigurationFactoryException["__class"] = "freemarker.cache.TemplateConfigurationFactoryException";
TemplateConfigurationFactoryException["__interfaces"] = ["java.io.Serializable"];




