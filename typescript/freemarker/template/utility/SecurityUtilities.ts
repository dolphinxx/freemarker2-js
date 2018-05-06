/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Logger} from '../../log/Logger';
import {StringUtil} from './StringUtil';

/**
 * 
 * @class
 */
export class SecurityUtilities {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(SecurityUtilities.LOG == null) SecurityUtilities.LOG = Logger.getLogger("freemarker.security"); return SecurityUtilities.LOG; };

    constructor() {
    }

    public static getSystemProperty$java_lang_String(key : string) : string {
        return <any>(AccessController.doPrivileged<any>(new SecurityUtilities.SecurityUtilities$0(key)));
    }

    public static getSystemProperty$java_lang_String$java_lang_String(key : string, defValue : string) : string {
        try {
            return <any>(AccessController.doPrivileged<any>(new SecurityUtilities.SecurityUtilities$1(key, defValue)));
        } catch(e) {
            SecurityUtilities.LOG_$LI$().warn$java_lang_String("Insufficient permissions to read system property " + StringUtil.jQuoteNoXSS$java_lang_Object(key) + ", using default value " + StringUtil.jQuoteNoXSS$java_lang_Object(defValue));
            return defValue;
        }
    }

    public static getSystemProperty(key? : any, defValue? : any) : any {
        if(((typeof key === 'string') || key === null) && ((typeof defValue === 'string') || defValue === null)) {
            return <any>SecurityUtilities.getSystemProperty$java_lang_String$java_lang_String(key, defValue);
        } else if(((typeof key === 'string') || key === null) && ((typeof defValue === 'number') || defValue === null)) {
            return <any>SecurityUtilities.getSystemProperty$java_lang_String$int(key, defValue);
        } else if(((typeof key === 'string') || key === null) && defValue === undefined) {
            return <any>SecurityUtilities.getSystemProperty$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    public static getSystemProperty$java_lang_String$int(key : string, defValue : number) : number {
        try {
            return <any>(AccessController.doPrivileged<any>(new SecurityUtilities.SecurityUtilities$2(key, defValue)));
        } catch(e) {
            SecurityUtilities.LOG_$LI$().warn$java_lang_String("Insufficient permissions to read system property " + StringUtil.jQuote$java_lang_Object(key) + ", using default value " + defValue);
            return defValue;
        }
    }
}
SecurityUtilities["__class"] = "freemarker.template.utility.SecurityUtilities";


export namespace SecurityUtilities {

    export class SecurityUtilities$0 {
        public run() : any {
            return java.lang.System.getProperty(this.key);
        }

        constructor(private key: any) {
        }
    }
    SecurityUtilities$0["__interfaces"] = ["java.security.PrivilegedAction"];



    export class SecurityUtilities$1 {
        public run() : any {
            return java.lang.System.getProperty(this.key, this.defValue);
        }

        constructor(private key: any, private defValue: any) {
        }
    }
    SecurityUtilities$1["__interfaces"] = ["java.security.PrivilegedAction"];



    export class SecurityUtilities$2 {
        public run() : any {
            return javaemul.internal.IntegerHelper.getInteger(this.key, this.defValue);
        }

        constructor(private key: any, private defValue: any) {
        }
    }
    SecurityUtilities$2["__interfaces"] = ["java.security.PrivilegedAction"];


}





SecurityUtilities.LOG_$LI$();
