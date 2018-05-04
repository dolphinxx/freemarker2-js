/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Environment } from '../core/Environment';
import { StringUtil } from './utility/StringUtil';
import { PrintWriter } from '../../java/io/PrintWriter';
import { StringWriter } from '../../java/io/StringWriter';
import { Writer } from '../../java/io/Writer';
import { TemplateException } from './TemplateException';

/**
 * Used for the {link Configurable#setTemplateExceptionHandler(TemplateExceptionHandler) template_exception_handler}
 * configuration setting.
 * @class
 */
export interface TemplateExceptionHandler {
    /**
     * Method called after a {link TemplateException} was raised inside a template. The exception should be re-thrown
     * unless you want to suppress the exception.
     * 
     * <p>Note that you can check with {link Environment#isInAttemptBlock()} if you are inside a {@code #attempt}
     * block, which then will handle this exception and roll back the output generated inside it.
     * 
     * <p>Note that {link StopException}-s (raised by {@code #stop}) won't be captured here.
     * 
     * <p>Note that you shouldn't log the exception in this method unless you suppress it. If there's a concern that the
     * exception might won't be logged after it bubbles up from {link Template#process(Object, Writer)}, simply
     * ensure that {link Configuration#getLogTemplateExceptions()} is {@code true}.
     * 
     * @param {TemplateException} te  The exception that occurred; don't forget to re-throw it unless you want to suppress it
     * @param {Environment} env The runtime environment of the template
     * @param {Writer} out This is where the output of the template is written
     */
    handleTemplateException(te : TemplateException, env : Environment, out : Writer);
}

export namespace TemplateExceptionHandler {

    /**
     * {link TemplateExceptionHandler} that simply skips the failing instructions, letting the template continue
     * executing. It does nothing to handle the event. Note that the exception is still logged, as with all
     * other {link TemplateExceptionHandler}-s.
     */
    export let IGNORE_HANDLER : TemplateExceptionHandler = new TemplateExceptionHandler.TemplateExceptionHandler$0();

    /**
     * {link TemplateExceptionHandler} that simply re-throws the exception; this should be used in most production
     * systems.
     */
    export let RETHROW_HANDLER : TemplateExceptionHandler = new TemplateExceptionHandler.TemplateExceptionHandler$1();

    /**
     * {link TemplateExceptionHandler} useful when you developing non-HTML templates. This handler
     * outputs the stack trace information to the client and then re-throws the exception.
     */
    export let DEBUG_HANDLER : TemplateExceptionHandler = new TemplateExceptionHandler.TemplateExceptionHandler$2();

    /**
     * {link TemplateExceptionHandler} useful when you developing HTML templates. This handler
     * outputs the stack trace information to the client, formatting it so that it will be usually well readable
     * in the browser, and then re-throws the exception.
     */
    export let HTML_DEBUG_HANDLER : TemplateExceptionHandler = new TemplateExceptionHandler.TemplateExceptionHandler$3();
}


export namespace TemplateExceptionHandler {

    export class TemplateExceptionHandler$0 implements TemplateExceptionHandler {
        public handleTemplateException(te : TemplateException, env : Environment, out : Writer) {
        }

        constructor() {
        }
    }
    TemplateExceptionHandler$0["__interfaces"] = ["freemarker.template.TemplateExceptionHandler"];



    export class TemplateExceptionHandler$1 implements TemplateExceptionHandler {
        public handleTemplateException(te : TemplateException, env : Environment, out : Writer) {
            throw te;
        }

        constructor() {
        }
    }
    TemplateExceptionHandler$1["__interfaces"] = ["freemarker.template.TemplateExceptionHandler"];



    export class TemplateExceptionHandler$2 implements TemplateExceptionHandler {
        public handleTemplateException(te : TemplateException, env : Environment, out : Writer) {
            if(!env.isInAttemptBlock()) {
                let pw : PrintWriter = (out != null && out instanceof <any>PrintWriter)?<PrintWriter>out:new PrintWriter(out);
                pw.print("FreeMarker template error (DEBUG mode; use RETHROW in production!):\n");
                te._printStackTrace$java_io_PrintWriter$boolean$boolean$boolean(pw, false, true, true);
                pw.flush();
            }
            throw te;
        }

        constructor() {
        }
    }
    TemplateExceptionHandler$2["__interfaces"] = ["freemarker.template.TemplateExceptionHandler"];



    export class TemplateExceptionHandler$3 implements TemplateExceptionHandler {
        public handleTemplateException(te : TemplateException, env : Environment, out : Writer) {
            if(!env.isInAttemptBlock()) {
                let externalPw : boolean = (out != null && out instanceof <any>PrintWriter);
                let pw : PrintWriter = externalPw?<PrintWriter>out:new PrintWriter(out);
                try {
                    pw.print("<!-- FREEMARKER ERROR MESSAGE STARTS HERE --><!-- ]]> --><script language=javascript>//\"></script><script language=javascript>//\'></script><script language=javascript>//\"></script><script language=javascript>//\'></script></title></xmp></script></noscript></style></object></head></pre></table></form></table></table></table></a></u></i></b><div align=\'left\' style=\'background-color:#FFFF7C; display:block; border-top:double; padding:4px; margin:0; font-family:Arial,sans-serif; ");
                    pw.print(.FONT_RESET_CSS);
                    pw.print("\'><b style=\'font-size:12px; font-style:normal; font-weight:bold; text-decoration:none; text-transform: none;\'>FreeMarker template error  (HTML_DEBUG mode; use RETHROW in production!)</b><pre style=\'display:block; background: none; border: 0; margin:0; padding: 0;font-family:monospace; ");
                    pw.print(.FONT_RESET_CSS);
                    pw.println("; white-space: pre-wrap; white-space: -moz-pre-wrap; white-space: -pre-wrap; white-space: -o-pre-wrap; word-wrap: break-word;\'>");
                    let stackTraceSW : StringWriter = new StringWriter();
                    let stackPW : PrintWriter = new PrintWriter(stackTraceSW);
                    te._printStackTrace$java_io_PrintWriter$boolean$boolean$boolean(stackPW, false, true, true);
                    stackPW.close();
                    pw.println();
                    pw.println(StringUtil.XMLEncNQG(stackTraceSW.toString()));
                    pw.println("</pre></div></html>");
                    pw.flush();
                } finally {
                    if(!externalPw) pw.close();
                };
            }
            throw te;
        }

        static FONT_RESET_CSS : string = "color:#A80000; font-size:12px; font-style:normal; font-variant:normal; font-weight:normal; text-decoration:none; text-transform: none";

        constructor() {
        }
    }
    TemplateExceptionHandler$3["__interfaces"] = ["freemarker.template.TemplateExceptionHandler"];


}



var __Function = Function;
