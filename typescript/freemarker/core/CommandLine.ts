/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Version} from '../template/Version';
import {DateUtil} from '../template/utility/DateUtil';
import {System} from "../../java/lang/System";

/**
 * FreeMarker command-line utility, the Main-Class of <tt>freemarker.jar</tt>.
 * Currently it just prints the version number.
 * 
 * @deprecated Will be removed (main method in a library, often classified as CWE-489 "Leftover Debug Code").
 * @class
 */
export class CommandLine {
    public static main(args : Array<any>) {
        const Configuration = require('../template/Configuration').Configuration;
        let ver : Version = Configuration.getVersion();
        console.info();
        System.out.print("Apache FreeMarker version ");
        System.out.print(ver);
        if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(ver.toString(), "Z") && ver.getBuildDate() != null) {
            System.out.print(" (built on ");
            System.out.print(DateUtil.dateToISO8601String(ver.getBuildDate(), true, true, true, DateUtil.ACCURACY_SECONDS, DateUtil.UTC_$LI$(), new DateUtil.TrivialDateToISO8601CalendarFactory()));
            System.out.print(")");
        }
        console.info();
        if(ver.isGAECompliant() != null) {
            System.out.print("Google App Engine complian variant: ");
            console.info(ver.isGAECompliant()?"Yes":"No");
        }
    }
}
CommandLine["__class"] = "freemarker.core.CommandLine";




CommandLine.main(null);
