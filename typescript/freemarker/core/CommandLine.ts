/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Configuration } from '../template/Configuration';
import { Version } from '../template/Version';
import { DateUtil } from '../template/utility/DateUtil';
import { System } from '../../java/lang/System';
import { Boolean } from '../../java/lang/Boolean';

/**
 * FreeMarker command-line utility, the Main-Class of <tt>freemarker.jar</tt>.
 * Currently it just prints the version number.
 * 
 * @deprecated Will be removed (main method in a library, often classified as CWE-489 "Leftover Debug Code").
 * @class
 */
export class CommandLine {
    public static main(args : Array) {
        let ver : Version = Configuration.getVersion();
        console.info();
        java.lang.System.out.print("Apache FreeMarker version ");
        java.lang.System.out.print(ver);
        if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(ver.toString(), "Z") && ver.getBuildDate() != null) {
            java.lang.System.out.print(" (built on ");
            java.lang.System.out.print(DateUtil.dateToISO8601String(ver.getBuildDate(), true, true, true, DateUtil.ACCURACY_SECONDS, DateUtil.UTC_$LI$(), new DateUtil.TrivialDateToISO8601CalendarFactory()));
            java.lang.System.out.print(")");
        }
        console.info();
        if(ver.isGAECompliant() != null) {
            java.lang.System.out.print("Google App Engine complian variant: ");
            console.info(ver.isGAECompliant()?"Yes":"No");
        }
    }
}
CommandLine["__class"] = "freemarker.core.CommandLine";




CommandLine.main(null);
