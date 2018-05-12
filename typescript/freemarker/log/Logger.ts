/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Delegates logger creation to an actual logging library. By default it looks for logger libraries in this order (in
 * FreeMarker 2.3.x): Log4J, Avalon LogKit, JUL (i.e., <tt>java.util.logging</tt>). Prior to FreeMarker 2.4, SLF4J and
 * Apache Commons Logging aren't searched automatically due to backward compatibility constraints. But if you have
 * {@code log4j-over-slf4j} properly installed (means, you have no real Log4j in your class path, and SLF4J has a
 * backing implementation like {@code logback-classic}), then FreeMarker will use SLF4J directly instead of Log4j (since
 * FreeMarker 2.3.22).
 * <p>
 * <p>
 * If the auto detection sequence describet above doesn't give you the result that you want, see
 * {link #SYSTEM_PROPERTY_NAME_LOGGER_LIBRARY}.
 * @param {String} category
 * @class
 */
export class Logger {
    static categoryPrefix : string = "";

    /*private*/ category : string;

    /**
     * Sets a category prefix. This prefix is prepended to any logger category name. This makes it possible to have
     * different FreeMarker logger categories on a per-application basis (better said, per-classloader basis). By
     * default the category prefix is the empty string. If you set a non-empty category prefix, be sure to include the
     * trailing separator dot (i.e. "MyApp.") If you want to change the default setting, do it early in application
     * initialization phase, before calling any other FreeMarker API since once various parts of the FreeMarker library
     * bind to the logging subsystem, the change in this value will have no effect on them.
     * 
     * @deprecated This wasn't reliable, unless you can somehow ensure that you access the FreeMarker classes first. As
     * it's not known to be useful for users, consider it removed.
     * @param {String} prefix
     */
    public static setCategoryPrefix(prefix : string) {
        if(prefix == null) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        Logger.categoryPrefix = prefix;
    }

    public constructor(category : string) {
        if(this.category===undefined) this.category = null;
        this.category = category + ':';
    }

    public debug$java_lang_String(message : string) {
    }

    public debug$java_lang_String$java_lang_Throwable(message : string, t : any) {
    }

    /**
     * Logs a debugging message with accompanying throwable.
     * @param {String} message
     * @param {Error} t
     */
    public debug(message? : any, t? : any) : any {
        if(((typeof message === 'string') || message === null) && ((t != null && (t["__classes"] && t["__classes"].indexOf("java.lang.Throwable") >= 0) || t != null && t instanceof <any>Error) || t === null)) {
            return <any>this.debug$java_lang_String$java_lang_Throwable(message, t);
        } else if(((typeof message === 'string') || message === null) && t === undefined) {
            return <any>this.debug$java_lang_String(message);
        } else throw new Error('invalid overload');
    }

    public info$java_lang_String(message : string) {
    }

    public info$java_lang_String$java_lang_Throwable(message : string, t : Error) {
    }

    /**
     * Logs an informational message with accompanying throwable.
     * @param {String} message
     * @param {Error} t
     */
    public info(message? : any, t? : any) : any {
        if(((typeof message === 'string') || message === null) && ((t != null && (t["__classes"] && t["__classes"].indexOf("java.lang.Throwable") >= 0) || t != null && t instanceof <any>Error) || t === null)) {
            return <any>this.info$java_lang_String$java_lang_Throwable(message, t);
        } else if(((typeof message === 'string') || message === null) && t === undefined) {
            return <any>this.info$java_lang_String(message);
        } else throw new Error('invalid overload');
    }

    public warn$java_lang_String(message : string) {
    }

    public warn$java_lang_String$java_lang_Throwable(message : string, t : Error) {
    }

    /**
     * Logs a warning message with accompanying throwable.
     * @param {String} message
     * @param {Error} t
     */
    public warn(message? : any, t? : any) : any {
        if(((typeof message === 'string') || message === null) && ((t != null && (t["__classes"] && t["__classes"].indexOf("java.lang.Throwable") >= 0) || t != null && t instanceof <any>Error) || t === null)) {
            return <any>this.warn$java_lang_String$java_lang_Throwable(message, t);
        } else if(((typeof message === 'string') || message === null) && t === undefined) {
            return <any>this.warn$java_lang_String(message);
        } else throw new Error('invalid overload');
    }

    public error$java_lang_String(message : string) {
    }

    public error$java_lang_String$java_lang_Throwable(message : string, t : any) {
    }

    /**
     * Logs an error message with accompanying throwable.
     * @param {String} message
     * @param {Error} t
     */
    public error(message? : any, t? : any) : any {
        if(((typeof message === 'string') || message === null) && ((t != null && (t["__classes"] && t["__classes"].indexOf("java.lang.Throwable") >= 0) || t != null && t instanceof <any>Error) || t === null)) {
            return <any>this.error$java_lang_String$java_lang_Throwable(message, t);
        } else if(((typeof message === 'string') || message === null) && t === undefined) {
            return <any>this.error$java_lang_String(message);
        } else throw new Error('invalid overload');
    }

    /**
     * Returns true if this logger will log debug messages.
     * @return {boolean}
     */
    public isDebugEnabled() : boolean {
        return true;
    }

    /**
     * Returns true if this logger will log informational messages.
     * @return {boolean}
     */
    public isInfoEnabled() : boolean {
        return true;
    }

    /**
     * Returns true if this logger will log warning messages.
     * @return {boolean}
     */
    public isWarnEnabled() : boolean {
        return true;
    }

    /**
     * Returns true if this logger will log error messages.
     * @return {boolean}
     */
    public isErrorEnabled() : boolean {
        return true;
    }

    /**
     * Returns true if this logger will log fatal error messages.
     * @return {boolean}
     */
    public isFatalEnabled() : boolean {
        return true;
    }

    /**
     * Returns a logger for the specified category.
     * 
     * @param {String} category a dot separated hierarchical category name. If a category prefix is in effect, it's prepended to the
     * category name.
     * @return {Logger}
     */
    public static getLogger(category : string) : Logger {
        if(Logger.categoryPrefix.length !== 0) {
            category = Logger.categoryPrefix + category;
        }
        return new Logger(category);
    }
}
Logger["__class"] = "freemarker.log.Logger";




