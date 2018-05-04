/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Character } from '../../../java/lang/Character';
import { Boolean } from '../../../java/lang/Boolean';

/**
 * Flag values and masks for "type flags". "Type flags" is a set of bits that store information about the possible
 * destination types at a parameter position of overloaded methods.
 * @class
 */
export class TypeFlags {
    /**
     * Indicates that the unwrapping hint will not be a specific numerical type; it must not be set if there's no
     * numerical type at the given parameter index.
     */
    static WIDENED_NUMERICAL_UNWRAPPING_HINT : number = 1;

    static BYTE : number = 4;

    static SHORT : number = 8;

    static INTEGER : number = 16;

    static LONG : number = 32;

    static FLOAT : number = 64;

    static DOUBLE : number = 128;

    static BIG_INTEGER : number = 256;

    static BIG_DECIMAL : number = 512;

    static UNKNOWN_NUMERICAL_TYPE : number = 1024;

    static ACCEPTS_NUMBER : number = 2048;

    static ACCEPTS_DATE : number = 4096;

    static ACCEPTS_STRING : number = 8192;

    static ACCEPTS_BOOLEAN : number = 16384;

    static ACCEPTS_MAP : number = 32768;

    static ACCEPTS_LIST : number = 65536;

    static ACCEPTS_SET : number = 131072;

    static ACCEPTS_ARRAY : number = 262144;

    /**
     * Indicates the presence of the char or Character type
     */
    static CHARACTER : number = 524288;

    static ACCEPTS_ANY_OBJECT : number; public static ACCEPTS_ANY_OBJECT_$LI$() : number { if(TypeFlags.ACCEPTS_ANY_OBJECT == null) TypeFlags.ACCEPTS_ANY_OBJECT = TypeFlags.ACCEPTS_NUMBER | TypeFlags.ACCEPTS_DATE | TypeFlags.ACCEPTS_STRING | TypeFlags.ACCEPTS_BOOLEAN | TypeFlags.ACCEPTS_MAP | TypeFlags.ACCEPTS_LIST | TypeFlags.ACCEPTS_SET | TypeFlags.ACCEPTS_ARRAY; return TypeFlags.ACCEPTS_ANY_OBJECT; };

    static MASK_KNOWN_INTEGERS : number; public static MASK_KNOWN_INTEGERS_$LI$() : number { if(TypeFlags.MASK_KNOWN_INTEGERS == null) TypeFlags.MASK_KNOWN_INTEGERS = TypeFlags.BYTE | TypeFlags.SHORT | TypeFlags.INTEGER | TypeFlags.LONG | TypeFlags.BIG_INTEGER; return TypeFlags.MASK_KNOWN_INTEGERS; };

    static MASK_KNOWN_NONINTEGERS : number; public static MASK_KNOWN_NONINTEGERS_$LI$() : number { if(TypeFlags.MASK_KNOWN_NONINTEGERS == null) TypeFlags.MASK_KNOWN_NONINTEGERS = TypeFlags.FLOAT | TypeFlags.DOUBLE | TypeFlags.BIG_DECIMAL; return TypeFlags.MASK_KNOWN_NONINTEGERS; };

    static MASK_ALL_KNOWN_NUMERICALS : number; public static MASK_ALL_KNOWN_NUMERICALS_$LI$() : number { if(TypeFlags.MASK_ALL_KNOWN_NUMERICALS == null) TypeFlags.MASK_ALL_KNOWN_NUMERICALS = TypeFlags.MASK_KNOWN_INTEGERS_$LI$() | TypeFlags.MASK_KNOWN_NONINTEGERS_$LI$(); return TypeFlags.MASK_ALL_KNOWN_NUMERICALS; };

    static MASK_ALL_NUMERICALS : number; public static MASK_ALL_NUMERICALS_$LI$() : number { if(TypeFlags.MASK_ALL_NUMERICALS == null) TypeFlags.MASK_ALL_NUMERICALS = TypeFlags.MASK_ALL_KNOWN_NUMERICALS_$LI$() | TypeFlags.UNKNOWN_NUMERICAL_TYPE; return TypeFlags.MASK_ALL_NUMERICALS; };

    static classToTypeFlags(pClass : any) : number {
        if(pClass === Object) {
            return TypeFlags.ACCEPTS_ANY_OBJECT_$LI$();
        } else if(pClass === String) {
            return TypeFlags.ACCEPTS_STRING;
        } else if(/* isPrimitive */(pClass === <any>'__erasedPrimitiveType__')) {
            if(pClass === javaemul.internal.IntegerHelper.TYPE) return TypeFlags.INTEGER | TypeFlags.ACCEPTS_NUMBER; else if(pClass === javaemul.internal.LongHelper.TYPE) return TypeFlags.LONG | TypeFlags.ACCEPTS_NUMBER; else if(pClass === javaemul.internal.DoubleHelper.TYPE) return TypeFlags.DOUBLE | TypeFlags.ACCEPTS_NUMBER; else if(pClass === javaemul.internal.FloatHelper.TYPE) return TypeFlags.FLOAT | TypeFlags.ACCEPTS_NUMBER; else if(pClass === javaemul.internal.ByteHelper.TYPE) return TypeFlags.BYTE | TypeFlags.ACCEPTS_NUMBER; else if(pClass === javaemul.internal.ShortHelper.TYPE) return TypeFlags.SHORT | TypeFlags.ACCEPTS_NUMBER; else if(pClass === javaemul.internal.CharacterHelper.TYPE) return TypeFlags.CHARACTER; else if(pClass === javaemul.internal.BooleanHelper.TYPE) return TypeFlags.ACCEPTS_BOOLEAN; else return 0;
        } else if(Number.isAssignableFrom(pClass)) {
            if(pClass === Number) return TypeFlags.INTEGER | TypeFlags.ACCEPTS_NUMBER; else if(pClass === Number) return TypeFlags.LONG | TypeFlags.ACCEPTS_NUMBER; else if(pClass === Number) return TypeFlags.DOUBLE | TypeFlags.ACCEPTS_NUMBER; else if(pClass === Number) return TypeFlags.FLOAT | TypeFlags.ACCEPTS_NUMBER; else if(pClass === Number) return TypeFlags.BYTE | TypeFlags.ACCEPTS_NUMBER; else if(pClass === Number) return TypeFlags.SHORT | TypeFlags.ACCEPTS_NUMBER; else if(BigDecimal.isAssignableFrom(pClass)) return TypeFlags.BIG_DECIMAL | TypeFlags.ACCEPTS_NUMBER; else if(BigInteger.isAssignableFrom(pClass)) return TypeFlags.BIG_INTEGER | TypeFlags.ACCEPTS_NUMBER; else return TypeFlags.UNKNOWN_NUMERICAL_TYPE | TypeFlags.ACCEPTS_NUMBER;
        } else if(pClass.isArray()) {
            return TypeFlags.ACCEPTS_ARRAY;
        } else {
            let flags : number = 0;
            if(pClass.isAssignableFrom(String)) {
                flags |= TypeFlags.ACCEPTS_STRING;
            }
            if(pClass.isAssignableFrom(Date)) {
                flags |= TypeFlags.ACCEPTS_DATE;
            }
            if(pClass.isAssignableFrom(Boolean)) {
                flags |= TypeFlags.ACCEPTS_BOOLEAN;
            }
            if(pClass.isAssignableFrom("java.util.Map")) {
                flags |= TypeFlags.ACCEPTS_MAP;
            }
            if(pClass.isAssignableFrom("java.util.List")) {
                flags |= TypeFlags.ACCEPTS_LIST;
            }
            if(pClass.isAssignableFrom("java.util.Set")) {
                flags |= TypeFlags.ACCEPTS_SET;
            }
            if(pClass === String) {
                flags |= TypeFlags.CHARACTER;
            }
            return flags;
        }
    }
}
TypeFlags["__class"] = "freemarker.ext.beans.TypeFlags";



var __Function = Function;

TypeFlags.MASK_ALL_NUMERICALS_$LI$();

TypeFlags.MASK_ALL_KNOWN_NUMERICALS_$LI$();

TypeFlags.MASK_KNOWN_NONINTEGERS_$LI$();

TypeFlags.MASK_KNOWN_INTEGERS_$LI$();

TypeFlags.ACCEPTS_ANY_OBJECT_$LI$();
