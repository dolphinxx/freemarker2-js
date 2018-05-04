/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Logger } from '../log/Logger';
import { Version } from '../template/Version';
import { SecurityUtilities } from '../template/utility/SecurityUtilities';
import { _Java6 } from './_Java6';
import { _Java8 } from './_Java8';

/**
 * Used internally only, might changes without notice!
 * @class
 */
export class _JavaVersions {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!_JavaVersions.__static_initialized) { _JavaVersions.__static_initialized = true; _JavaVersions.__static_initializer_0(); _JavaVersions.__static_initializer_1(); _JavaVersions.__static_initializer_2(); _JavaVersions.__static_initializer_3(); } }

    constructor() {
    }

    static IS_AT_LEAST_6 : boolean; public static IS_AT_LEAST_6_$LI$() : boolean { _JavaVersions.__static_initialize(); return _JavaVersions.IS_AT_LEAST_6; };

    static __static_initializer_0() {
        let result : boolean = false;
        let vStr : string = SecurityUtilities.getSystemProperty("java.version", null);
        if(vStr != null) {
            try {
                let v : Version = new Version(vStr);
                result = v.getMajor() === 1 && v.getMinor() >= 6 || v.getMajor() > 1;
            } catch(e) {
            };
        }
        if(vStr == null) {
            try {
                /* forName */eval("java.util.ServiceLoader".split('.').slice(-1)[0]);
                result = true;
            } catch(e) {
            };
        }
        _JavaVersions.IS_AT_LEAST_6 = result;
    }

    public static JAVA_6 : _Java6; public static JAVA_6_$LI$() : _Java6 { _JavaVersions.__static_initialize(); return _JavaVersions.JAVA_6; };

    static __static_initializer_1() {
        let java6 : _Java6;
        if(_JavaVersions.IS_AT_LEAST_6_$LI$()) {
            try {
                java6 = <_Java6><any>/* get */null[/* getField */((c,p) => { return {owner:c,name:p}; })(/* forName */eval("freemarker.core._Java6Impl".split('.').slice(-1)[0]),"INSTANCE").name];
            } catch(e) {
                try {
                    Logger.getLogger("freemarker.runtime").error("Failed to access Java 6 functionality", e);
                } catch(e2) {
                };
                java6 = null;
            };
        } else {
            java6 = null;
        }
        _JavaVersions.JAVA_6 = java6;
    }

    static IS_AT_LEAST_8 : boolean; public static IS_AT_LEAST_8_$LI$() : boolean { _JavaVersions.__static_initialize(); return _JavaVersions.IS_AT_LEAST_8; };

    static __static_initializer_2() {
        let result : boolean = false;
        let vStr : string = SecurityUtilities.getSystemProperty("java.version", null);
        if(vStr != null) {
            try {
                let v : Version = new Version(vStr);
                result = v.getMajor() === 1 && v.getMinor() >= 8 || v.getMajor() > 1;
            } catch(e) {
            };
        } else {
            try {
                /* forName */eval("java.time.Instant".split('.').slice(-1)[0]);
                result = true;
            } catch(e) {
            };
        }
        _JavaVersions.IS_AT_LEAST_8 = result;
    }

    /**
     * {@code null} if Java 8 is not available, otherwise the object through with the Java 8 operations are available.
     */
    public static JAVA_8 : _Java8; public static JAVA_8_$LI$() : _Java8 { _JavaVersions.__static_initialize(); return _JavaVersions.JAVA_8; };

    static __static_initializer_3() {
        let java8 : _Java8;
        if(_JavaVersions.IS_AT_LEAST_8_$LI$()) {
            try {
                java8 = <_Java8><any>/* get */null[/* getField */((c,p) => { return {owner:c,name:p}; })(/* forName */eval("freemarker.core._Java8Impl".split('.').slice(-1)[0]),"INSTANCE").name];
            } catch(e) {
                try {
                    Logger.getLogger("freemarker.runtime").error("Failed to access Java 8 functionality", e);
                } catch(e2) {
                };
                java8 = null;
            };
        } else {
            java8 = null;
        }
        _JavaVersions.JAVA_8 = java8;
    }
}
_JavaVersions["__class"] = "freemarker.core._JavaVersions";



var __Function = Function;

_JavaVersions.JAVA_8_$LI$();

_JavaVersions.IS_AT_LEAST_8_$LI$();

_JavaVersions.JAVA_6_$LI$();

_JavaVersions.IS_AT_LEAST_6_$LI$();

_JavaVersions.__static_initialize();
