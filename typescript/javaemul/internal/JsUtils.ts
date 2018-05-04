/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Provides an interface for simple JavaScript idioms that can not be expressed in Java.
 * @class
 */
export class JsUtils {
    public static getInfinity(): number {
        return Infinity;
    }

    public static isUndefined(value: any): boolean {
        return value == null;
    }

    public static unsafeCastToString(string: any): string {
        return <string>string;
    }

    public static setPropertySafe(map: any, key: string, value: any) {
        try {
            (map)[key] = value;
        } catch (e) {
        }
        ;
    }

    public static getIntProperty(map: any, key: string): number {
        return <any>((map)[key]);
    }

    public static setIntProperty(map: any, key: string, value: number) {
        (map)[key] = value;
    }

    public static typeOf(o: any): string {
        return typeof o;
    }
}

JsUtils["__class"] = "javaemul.internal.JsUtils";