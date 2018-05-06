/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Logger} from '../log/Logger';
import {AttemptExceptionReporter} from './AttemptExceptionReporter';
import {TemplateException} from './TemplateException';

/**
 * Default {link AttemptExceptionReporter} implementation, factored out from {link AttemptExceptionReporter} so that
 * we can have static field.
 * @param {boolean} logAsWarn
 * @class
 */
export class LoggingAttemptExceptionReporter implements AttemptExceptionReporter {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(LoggingAttemptExceptionReporter.LOG == null) LoggingAttemptExceptionReporter.LOG = Logger.getLogger("freemarker.runtime"); return LoggingAttemptExceptionReporter.LOG; };

    /*private*/ logAsWarn : boolean;

    public constructor(logAsWarn : boolean) {
        if(this.logAsWarn===undefined) this.logAsWarn = false;
        this.logAsWarn = logAsWarn;
    }

    public report(te : TemplateException, env : /*Environment*/any) {
        let message : string = "Error executing FreeMarker template part in the #attempt block";
        if(!this.logAsWarn) {
            LoggingAttemptExceptionReporter.LOG_$LI$().error$java_lang_String$java_lang_Throwable(message, te);
        } else {
            LoggingAttemptExceptionReporter.LOG_$LI$().warn$java_lang_String$java_lang_Throwable(message, te);
        }
    }
}
LoggingAttemptExceptionReporter["__class"] = "freemarker.template.LoggingAttemptExceptionReporter";
LoggingAttemptExceptionReporter["__interfaces"] = ["freemarker.template.AttemptExceptionReporter"];






LoggingAttemptExceptionReporter.LOG_$LI$();
