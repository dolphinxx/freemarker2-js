/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Environment} from '../core/Environment';
import {LoggingAttemptExceptionReporter} from './LoggingAttemptExceptionReporter';
import {TemplateException} from './TemplateException';

/**
 * Used for the {link Configurable#setAttemptExceptionReporter(AttemptExceptionReporter) attempt_exception_reported}
 * configuration setting.
 * @class
 */
export interface AttemptExceptionReporter {
    /**
     * Called to log or otherwise report the error that has occurred inside an {@code #attempt} block.
     * @param {TemplateException} te
     * @param {Environment} env
     */
    report(te : TemplateException, env : /*Environment*/any);
}

export namespace AttemptExceptionReporter {

    /**
     * Logs the exception into the "freemarker.runtime" log category with "error" log level. This is the default
     * {link AttemptExceptionReporter}. The error message will explain that the error was handled by an
     * {@code #attempt} block.
     */
    export let LOG_ERROR_REPORTER : AttemptExceptionReporter = new LoggingAttemptExceptionReporter(false);

    /**
     * Like {link #LOG_ERROR_REPORTER}, but it logs with "warn" log level.
     */
    export let LOG_WARN_REPORTER : AttemptExceptionReporter = new LoggingAttemptExceptionReporter(true);
}




