/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModelException} from '../TemplateModelException';
import {InputStream} from '../../../java/io/InputStream';
import {InputStreamReader} from '../../../java/io/InputStreamReader';
import {Reader} from '../../../java/io/Reader';
import {StringBuilder} from '../../../java/lang/StringBuilder';
import {TemplateMethodModel} from "../TemplateMethodModel";

/**
 * <p>Gives FreeMarker the the ability to execute external commands. Will fork
 * a process, and inline anything that process sends to stdout in the template.
 * Based on a patch submitted by Peter Molettiere.</p>
 * 
 * <p>BE CAREFUL! this tag, depending on use, may allow you
 * to set something up so that users of your web
 * application could run arbitrary code on your server.
 * This can only happen if you allow unchecked GET/POST
 * submissions to be used as the command string in the
 * exec tag.</p>
 * 
 * <p>Usage:<br>
 * From java:</p>
 * <pre>
 * SimpleHash root = new SimpleHash();
 * 
 * root.put( "exec", new freemarker.template.utility.Execute() );
 * 
 * ...
 * </pre>
 * 
 * <p>From your FreeMarker template:</p>
 * <pre>
 * 
 * The following is executed:
 * ${exec( "/usr/bin/ls" )}
 * 
 * ...
 * </pre>
 * @class
 */
export class Execute implements TemplateMethodModel {
    static OUTPUT_BUFFER_SIZE : number = 1024;

    /**
     * Executes a method call.
     * 
     * @param {List} arguments a <tt>List</tt> of <tt>String</tt> objects containing the values
     * of the arguments passed to the method.
     * @return {Object} the <tt>TemplateModel</tt> produced by the method, or null.
     */
    public exec(__arguments : Array<any>) : any {
        let aExecute : string;
        let aOutputBuffer : StringBuilder = new StringBuilder("");
        if(/* size */(<number>__arguments.length) < 1) {
            throw new TemplateModelException("Need an argument to execute");
        }
        aExecute = <string>(/* get */__arguments[0]);
        try {
            let exec : Process = java.lang.Runtime.getRuntime().exec(aExecute);
            let execOut : InputStream = exec.getInputStream();
            try {
                let execReader : Reader = new InputStreamReader(execOut);
                let buffer : string[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(Execute.OUTPUT_BUFFER_SIZE);
                let bytes_read : number = execReader.read(buffer);
                while((bytes_read > 0)) {
                    aOutputBuffer.append(buffer, 0, bytes_read);
                    bytes_read = execReader.read(buffer);
                }
            } finally {
                execOut.close();
            }
        } catch(ioe) {
            throw new TemplateModelException(ioe.message);
        }
        return aOutputBuffer.toString();
    }

    constructor() {
    }
}
Execute["__class"] = "freemarker.template.utility.Execute";
Execute["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateModel"];





