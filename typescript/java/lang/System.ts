/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
import {PrintStream} from "../io/PrintStream";
import {ArrayHelper} from "../../javaemul/internal/ArrayHelper";
import {IndexOutOfBoundsException} from "./IndexOutOfBoundsException";
import {HashCodes} from "../../javaemul/internal/HashCodes";

/**
 * General-purpose low-level utility methods. GWT only supports a limited subset
 * of these methods due to browser limitations. Only the documented methods are
 * available.
 * @class
 */
export class System {
    /**
     * Does nothing in web mode. To get output in web mode, subclass PrintStream
     * and call {@link #setErr(PrintStream)}.
     */
    public static err: PrintStream;

    public static err_$LI$(): PrintStream {
        if (System.err == null) System.err = new PrintStream(null);
        return System.err;
    };

    /**
     * Does nothing in web mode. To get output in web mode, subclass
     * {@link PrintStream} and call {@link #setOut(PrintStream)}.
     */
    public static out: PrintStream;

    public static out_$LI$(): PrintStream {
        if (System.out == null) System.out = new PrintStream(null);
        return System.out;
    };

    public static arraycopy(src: any, srcOfs: number, dest: any, destOfs: number, len: number) {
        let srclen: number = ArrayHelper.getLength(src);
        let destlen: number = ArrayHelper.getLength(dest);
        if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
            throw new IndexOutOfBoundsException();
        }
        if (len > 0) {
            ArrayHelper.copy$java_lang_Object$int$java_lang_Object$int$int(src, srcOfs, dest, destOfs, len);
        }
    }

    public static currentTimeMillis(): number {
        return Math.floor((Date.now)? Date.now() : (new Date()).getTime());
    }

    /**
     * Has no effect; just here for source compatibility.
     *
     * @skip
     */
    public static gc() {
    }

    public static getProperty$java_lang_String(key: string): string {
        switch ((key)) {
            case "user.dir":
                return "";
            case "user.home":
                return "";
            case "user.name":
                return "jsweet";
            case "file.separator":
                return "/";
            case "java.home":
                return null;
            case "java.vendor":
                return "JSweet";
            case "java.vendor.url":
                return "http://www.jsweet.org";
            case "java.version":
                return "jsweet";
            case "os.arch":
                return "generic";
            case "os.name":
                return "generic";
            case "os.version":
                return "unknown";
            case "tmpdir":
                return "";
            default:
                return null;
        }
    }

    public static getProperty$java_lang_String$java_lang_String(key: string, def: string): string {
        let prop: string = System.getProperty$java_lang_String(key);
        return prop == null ? def : prop;
    }

    /**
     * The compiler replaces getProperty by the actual value of the property.
     * @param {string} key
     * @param {string} def
     * @return {string}
     */
    public static getProperty(key?: any, def?: any): any {
        if (((typeof key === 'string') || key === null) && ((typeof def === 'string') || def === null)) {
            return <any>System.getProperty$java_lang_String$java_lang_String(key, def);
        } else if (((typeof key === 'string') || key === null) && def === undefined) {
            return <any>System.getProperty$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    public static identityHashCode(o: any): number {
        return HashCodes.getIdentityHashCode(o);
    }

    public static setErr(err: PrintStream) {
        System.err = err;
    }

    public static setOut(out: PrintStream) {
        System.out = out;
    }
}

System["__class"] = "java.lang.System";

System.out_$LI$();

System.err_$LI$();
