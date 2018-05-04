/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ClassUtil } from '../../template/utility/ClassUtil';
import { NumberUtil } from '../../template/utility/NumberUtil';
import { TypeFlags } from './TypeFlags';

/**
 * Everything related to coercion to ambiguous numerical types.
 * @class
 */
export class OverloadedNumberUtil {
    constructor() {
    }

    /**
     * The lower limit of conversion prices where there's a risk of significant mantissa loss.
     * The value comes from misc/overloadedNumberRules/prices.ods and generator.ftl.
     */
    static BIG_MANTISSA_LOSS_PRICE : number; public static BIG_MANTISSA_LOSS_PRICE_$LI$() : number { if(OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE == null) OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE = 4 * 10000; return OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE; };

    /**
     * The highest long that can be stored in double without precision loss: 2**53.
     */
    static MAX_DOUBLE_OR_LONG : number = 9007199254740992;

    /**
     * The lowest long that can be stored in double without precision loss: -(2**53).
     */
    static MIN_DOUBLE_OR_LONG : number = -9007199254740992;

    static MAX_DOUBLE_OR_LONG_LOG_2 : number = 53;

    /**
     * The highest long that can be stored in float without precision loss: 2**24.
     */
    static MAX_FLOAT_OR_INT : number = 16777216;

    /**
     * The lowest long that can be stored in float without precision loss: -(2**24).
     */
    static MIN_FLOAT_OR_INT : number = -16777216;

    static MAX_FLOAT_OR_INT_LOG_2 : number = 24;

    /**
     * Lowest number that we don't thread as possible integer 0.
     */
    static LOWEST_ABOVE_ZERO : number = 1.0E-6;

    /**
     * Highest number that we don't thread as possible integer 1.
     */
    static HIGHEST_BELOW_ONE : number = 0.999999;

    /**
     * Attaches the lowest alternative number type to the parameter number via {link NumberWithFallbackType}, if
     * that's useful according the possible target number types. This transformation is applied on the method call
     * argument list before overloaded method selection.
     * 
     * <p>Note that as of this writing, this method is only used when
     * {link BeansWrapper#getIncompatibleImprovements()} >= 2.3.21.
     * 
     * <p>Why's this needed, how it works: Overloaded method selection only selects methods where the <em>type</em>
     * (not the value!) of the argument is "smaller" or the same as the parameter type. This is similar to how it's in
     * the Java language. That it only decides based on the parameter type is important because this way
     * {link OverloadedMethodsSubset} can cache method lookup decisions using the types as the cache key. Problem is,
     * since you don't declare the exact numerical types in FTL, and FTL has only a single generic numeric type
     * anyway, what Java type a {link TemplateNumberModel} uses internally is often seen as a technical detail of which
     * the template author can't always keep track of. So we investigate the <em>value</em> of the number too,
     * then coerce it down without overflow to a type that will match the most overloaded methods. (This
     * is especially important as FTL often stores numbers in {link BigDecimal}-s, which will hardly ever match any
     * method parameters.) We could simply return that number, like {@code Byte(0)} for an {@code Integer(0)},
     * however, then we would lose the information about what the original type was. The original type is sometimes
     * important, as in ambiguous situations the method where there's an exact type match should be selected (like,
     * when someone wants to select an overload explicitly with {@code m(x?int)}). Also, if an overload wins where
     * the parameter type at the position of the number is {@code Number} or {@code Object} (or {@code Comparable}
     * etc.), it's expected that we pass in the original value (an {@code Integer} in this example), especially if that
     * value is the return value of another Java method. That's why we use
     * {link NumberWithFallbackType} numerical classes like {link IntegerOrByte}, which represents both the original
     * type and the coerced type, all encoded into the class of the value, which is used as the overloaded method lookup
     * cache key.
     * 
     * <p>See also: <tt>src\main\misc\overloadedNumberRules\prices.ods</tt>.
     * 
     * @param {Number} num       the number to coerce
     * @param {number} typeFlags the type flags of the target parameter position; see {link TypeFlags}
     * @return {Number} The original number or a {link NumberWithFallbackType}, depending on the actual value and the types
     * indicated in the {@code targetNumTypes} parameter.
     */
    static addFallbackType(num : number, typeFlags : number) : number {
        let numClass : any = (<any>num.constructor);
        if(numClass === BigDecimal) {
            let n : BigDecimal = <BigDecimal>num;
            if((typeFlags & TypeFlags.MASK_KNOWN_INTEGERS_$LI$()) !== 0 && (typeFlags & TypeFlags.MASK_KNOWN_NONINTEGERS_$LI$()) !== 0 && NumberUtil.isIntegerBigDecimal(n)) {
                return new OverloadedNumberUtil.IntegerBigDecimal(n);
            } else {
                return n;
            }
        } else if(numClass === Number) {
            let pn : number = /* intValue */(num|0);
            if((typeFlags & TypeFlags.BYTE) !== 0 && pn <= Number.MAX_VALUE && pn >= Number.MIN_VALUE) {
                return new OverloadedNumberUtil.IntegerOrByte(<number>num, (<number>pn|0));
            } else if((typeFlags & TypeFlags.SHORT) !== 0 && pn <= Number.MAX_VALUE && pn >= Number.MIN_VALUE) {
                return new OverloadedNumberUtil.IntegerOrShort(<number>num, (<number>pn|0));
            } else {
                return num;
            }
        } else if(numClass === Number) {
            let pn : number = /* longValue */num;
            if((typeFlags & TypeFlags.BYTE) !== 0 && pn <= Number.MAX_VALUE && pn >= Number.MIN_VALUE) {
                return new OverloadedNumberUtil.LongOrByte(<number>num, (<number>pn|0));
            } else if((typeFlags & TypeFlags.SHORT) !== 0 && pn <= Number.MAX_VALUE && pn >= Number.MIN_VALUE) {
                return new OverloadedNumberUtil.LongOrShort(<number>num, (<number>pn|0));
            } else if((typeFlags & TypeFlags.INTEGER) !== 0 && pn <= Number.MAX_VALUE && pn >= Number.MIN_VALUE) {
                return new OverloadedNumberUtil.LongOrInteger(<number>num, (<number>pn|0));
            } else {
                return num;
            }
        } else if(numClass === Number) {
            let doubleN : number = /* doubleValue */num;
            checkIfWholeNumber: do {
                if((typeFlags & TypeFlags.MASK_KNOWN_INTEGERS_$LI$()) === 0) break checkIfWholeNumber;
                if(doubleN > OverloadedNumberUtil.MAX_DOUBLE_OR_LONG || doubleN < OverloadedNumberUtil.MIN_DOUBLE_OR_LONG) break checkIfWholeNumber;
                let longN : number = /* longValue */num;
                let diff : number = doubleN - longN;
                let exact : boolean;
                if(diff === 0) {
                    exact = true;
                } else if(diff > 0) {
                    if(diff < OverloadedNumberUtil.LOWEST_ABOVE_ZERO) {
                        exact = false;
                    } else if(diff > OverloadedNumberUtil.HIGHEST_BELOW_ONE) {
                        exact = false;
                        longN++;
                    } else {
                        break checkIfWholeNumber;
                    }
                } else {
                    if(diff > -OverloadedNumberUtil.LOWEST_ABOVE_ZERO) {
                        exact = false;
                    } else if(diff < -OverloadedNumberUtil.HIGHEST_BELOW_ONE) {
                        exact = false;
                        longN--;
                    } else {
                        break checkIfWholeNumber;
                    }
                }
                if((typeFlags & TypeFlags.BYTE) !== 0 && longN <= Number.MAX_VALUE && longN >= Number.MIN_VALUE) {
                    return new OverloadedNumberUtil.DoubleOrByte(<number>num, (<number>longN|0));
                } else if((typeFlags & TypeFlags.SHORT) !== 0 && longN <= Number.MAX_VALUE && longN >= Number.MIN_VALUE) {
                    return new OverloadedNumberUtil.DoubleOrShort(<number>num, (<number>longN|0));
                } else if((typeFlags & TypeFlags.INTEGER) !== 0 && longN <= Number.MAX_VALUE && longN >= Number.MIN_VALUE) {
                    let intN : number = (<number>longN|0);
                    return (typeFlags & TypeFlags.FLOAT) !== 0 && intN >= OverloadedNumberUtil.MIN_FLOAT_OR_INT && intN <= OverloadedNumberUtil.MAX_FLOAT_OR_INT?new OverloadedNumberUtil.DoubleOrIntegerOrFloat(<number>num, intN):new OverloadedNumberUtil.DoubleOrInteger(<number>num, intN);
                } else if((typeFlags & TypeFlags.LONG) !== 0) {
                    if(exact) {
                        return new OverloadedNumberUtil.DoubleOrLong(<number>num, longN);
                    } else {
                        if(longN >= Number.MIN_VALUE && longN <= Number.MAX_VALUE) {
                            return new OverloadedNumberUtil.DoubleOrLong(<number>num, longN);
                        } else {
                            break checkIfWholeNumber;
                        }
                    }
                }
            } while((false));
            if((typeFlags & TypeFlags.FLOAT) !== 0 && doubleN >= -Number.MAX_VALUE && doubleN <= Number.MAX_VALUE) {
                return new OverloadedNumberUtil.DoubleOrFloat(<number>num);
            } else {
                return num;
            }
        } else if(numClass === Number) {
            let floatN : number = /* floatValue */num;
            checkIfWholeNumber: do {
                if((typeFlags & TypeFlags.MASK_KNOWN_INTEGERS_$LI$()) === 0) break checkIfWholeNumber;
                if(floatN > OverloadedNumberUtil.MAX_FLOAT_OR_INT || floatN < OverloadedNumberUtil.MIN_FLOAT_OR_INT) break checkIfWholeNumber;
                let intN : number = /* intValue */(num|0);
                let diff : number = (<any>Math).fround(floatN - intN);
                let exact : boolean;
                if(diff === 0) {
                    exact = true;
                } else if(intN >= Number.MIN_VALUE && intN <= Number.MAX_VALUE) {
                    if(diff > 0) {
                        if(diff < 1.0E-5) {
                            exact = false;
                        } else if(diff > 0.99999) {
                            exact = false;
                            intN++;
                        } else {
                            break checkIfWholeNumber;
                        }
                    } else {
                        if(diff > -1.0E-5) {
                            exact = false;
                        } else if(diff < -0.99999) {
                            exact = false;
                            intN--;
                        } else {
                            break checkIfWholeNumber;
                        }
                    }
                } else {
                    break checkIfWholeNumber;
                }
                if((typeFlags & TypeFlags.BYTE) !== 0 && intN <= Number.MAX_VALUE && intN >= Number.MIN_VALUE) {
                    return new OverloadedNumberUtil.FloatOrByte(<number>num, (<number>intN|0));
                } else if((typeFlags & TypeFlags.SHORT) !== 0 && intN <= Number.MAX_VALUE && intN >= Number.MIN_VALUE) {
                    return new OverloadedNumberUtil.FloatOrShort(<number>num, (<number>intN|0));
                } else if((typeFlags & TypeFlags.INTEGER) !== 0) {
                    return new OverloadedNumberUtil.FloatOrInteger(<number>num, intN);
                } else if((typeFlags & TypeFlags.LONG) !== 0) {
                    return exact?new OverloadedNumberUtil.FloatOrInteger(<number>num, intN):new OverloadedNumberUtil.FloatOrByte(<number>num, (<number>intN|0));
                }
            } while((false));
            return num;
        } else if(numClass === Number) {
            return num;
        } else if(numClass === Number) {
            let pn : number = /* shortValue */(num|0);
            if((typeFlags & TypeFlags.BYTE) !== 0 && pn <= Number.MAX_VALUE && pn >= Number.MIN_VALUE) {
                return new OverloadedNumberUtil.ShortOrByte(<number>num, (<number>pn|0));
            } else {
                return num;
            }
        } else if(numClass === BigInteger) {
            if((typeFlags & ((TypeFlags.MASK_KNOWN_INTEGERS_$LI$() | TypeFlags.MASK_KNOWN_NONINTEGERS_$LI$()) ^ (TypeFlags.BIG_INTEGER | TypeFlags.BIG_DECIMAL))) !== 0) {
                let biNum : BigInteger = <BigInteger>num;
                let bitLength : number = biNum.bitLength();
                if((typeFlags & TypeFlags.BYTE) !== 0 && bitLength <= 7) {
                    return new OverloadedNumberUtil.BigIntegerOrByte(biNum);
                } else if((typeFlags & TypeFlags.SHORT) !== 0 && bitLength <= 15) {
                    return new OverloadedNumberUtil.BigIntegerOrShort(biNum);
                } else if((typeFlags & TypeFlags.INTEGER) !== 0 && bitLength <= 31) {
                    return new OverloadedNumberUtil.BigIntegerOrInteger(biNum);
                } else if((typeFlags & TypeFlags.LONG) !== 0 && bitLength <= 63) {
                    return new OverloadedNumberUtil.BigIntegerOrLong(biNum);
                } else if((typeFlags & TypeFlags.FLOAT) !== 0 && (bitLength <= OverloadedNumberUtil.MAX_FLOAT_OR_INT_LOG_2 || bitLength === OverloadedNumberUtil.MAX_FLOAT_OR_INT_LOG_2 + 1 && biNum.getLowestSetBit() >= OverloadedNumberUtil.MAX_FLOAT_OR_INT_LOG_2)) {
                    return new OverloadedNumberUtil.BigIntegerOrFloat(biNum);
                } else if((typeFlags & TypeFlags.DOUBLE) !== 0 && (bitLength <= OverloadedNumberUtil.MAX_DOUBLE_OR_LONG_LOG_2 || bitLength === OverloadedNumberUtil.MAX_DOUBLE_OR_LONG_LOG_2 + 1 && biNum.getLowestSetBit() >= OverloadedNumberUtil.MAX_DOUBLE_OR_LONG_LOG_2)) {
                    return new OverloadedNumberUtil.BigIntegerOrDouble(biNum);
                } else {
                    return num;
                }
            } else {
                return num;
            }
        } else {
            return num;
        }
    }

    /**
     * Returns a non-negative number that indicates how much we want to avoid a given numerical type conversion. Since
     * we only consider the types here, not the actual value, we always consider the worst case scenario. Like it will
     * say that converting int to short is not allowed, although int 1 can be converted to byte without loss. To account
     * for such situations, "Or"-ed types, like {link IntegerOrByte} has to be used.
     * 
     * @param {*} fromC the non-primitive type of the argument (with other words, the actual type).
     * Must be {link Number} or its subclass. This is possibly an {link NumberWithFallbackType} subclass.
     * @param {*} toC   the <em>non-primitive</em> type of the target parameter (with other words, the format type).
     * Must be a {link Number} subclass, not {link Number} itself.
     * Must <em>not</em> be {link NumberWithFallbackType} or its subclass.
     * @return {number} <p>The possible values are:
     * <ul>
     * <li>0: No conversion is needed
     * <li>[0, 30000): Lossless conversion
     * <li>[30000, 40000): Smaller precision loss in mantissa is possible.
     * <li>[40000, 50000): Bigger precision loss in mantissa is possible.
     * <li>{link Integer#MAX_VALUE}: Conversion not allowed due to the possibility of magnitude loss or
     * overflow</li>
     * </ul>
     * 
     * <p>At some places, we only care if the conversion is possible, i.e., whether the return value is
     * {link Integer#MAX_VALUE} or not. But when multiple overloaded methods have an argument type to which we
     * could convert to, this number will influence which of those will be chosen.
     */
    static getArgumentConversionPrice(fromC : any, toC : any) : number {
        if(toC === fromC) {
            return 0;
        } else if(toC === Number) {
            if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 31003; else if(fromC === BigDecimal) return 41003; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return 10003; else if(fromC === BigInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.LongOrInteger) return 21003; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return 22003; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return 22003; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 0; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 22003; else if(fromC === OverloadedNumberUtil.LongOrByte) return 21003; else if(fromC === Number) return 10003; else if(fromC === OverloadedNumberUtil.LongOrShort) return 21003; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 10003; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return 21003; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 21003; else if(fromC === OverloadedNumberUtil.FloatOrShort) return 21003; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return 16003; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 16003; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return 0; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return 22003; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return 16003; else return Number.MAX_VALUE;
        } else if(toC === Number) {
            if(fromC === Number) return 10004; else if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 31004; else if(fromC === BigDecimal) return 41004; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return 10004; else if(fromC === BigInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.LongOrInteger) return 0; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return 21004; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return 21004; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return 21004; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 10004; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 21004; else if(fromC === OverloadedNumberUtil.LongOrByte) return 0; else if(fromC === Number) return 10004; else if(fromC === OverloadedNumberUtil.LongOrShort) return 0; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 10004; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return 21004; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 21004; else if(fromC === OverloadedNumberUtil.FloatOrShort) return 21004; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return 15004; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return 15004; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 15004; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return 10004; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return 21004; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return 15004; else return Number.MAX_VALUE;
        } else if(toC === Number) {
            if(fromC === Number) return 20007; else if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 32007; else if(fromC === BigDecimal) return 32007; else if(fromC === Number) return 30007; else if(fromC === Number) return 10007; else if(fromC === Number) return 20007; else if(fromC === BigInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.LongOrInteger) return 21007; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return 0; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return 0; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return 0; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return 0; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 20007; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 0; else if(fromC === OverloadedNumberUtil.LongOrByte) return 21007; else if(fromC === Number) return 20007; else if(fromC === OverloadedNumberUtil.LongOrShort) return 21007; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 20007; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return 10007; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 10007; else if(fromC === OverloadedNumberUtil.FloatOrShort) return 10007; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return 20007; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return 30007; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return 20007; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return 20007; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 20007; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return 20007; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return 0; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return 20007; else return Number.MAX_VALUE;
        } else if(toC === Number) {
            if(fromC === Number) return 30006; else if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 33006; else if(fromC === BigDecimal) return 33006; else if(fromC === Number) return 40006; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return 20006; else if(fromC === BigInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.LongOrInteger) return 30006; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return 30006; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return 23006; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return 30006; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return 40006; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 24006; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 23006; else if(fromC === OverloadedNumberUtil.LongOrByte) return 24006; else if(fromC === Number) return 20006; else if(fromC === OverloadedNumberUtil.LongOrShort) return 24006; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 20006; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return 0; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 0; else if(fromC === OverloadedNumberUtil.FloatOrShort) return 0; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return 30006; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return 40006; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return 40006; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return 24006; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 24006; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return 24006; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return 23006; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return 24006; else return Number.MAX_VALUE;
        } else if(toC === Number) {
            if(fromC === Number) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 35001; else if(fromC === BigDecimal) return 45001; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === BigInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.LongOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 22001; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 25001; else if(fromC === OverloadedNumberUtil.LongOrByte) return 23001; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.LongOrShort) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 21001; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 23001; else if(fromC === OverloadedNumberUtil.FloatOrShort) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 18001; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return Number.MAX_VALUE; else return Number.MAX_VALUE;
        } else if(toC === Number) {
            if(fromC === Number) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 34002; else if(fromC === BigDecimal) return 44002; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return 10002; else if(fromC === BigInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.LongOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 21002; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 24002; else if(fromC === OverloadedNumberUtil.LongOrByte) return 22002; else if(fromC === OverloadedNumberUtil.LongOrShort) return 22002; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 0; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 22002; else if(fromC === OverloadedNumberUtil.FloatOrShort) return 22002; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 17002; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return 21002; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return 24002; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return 17002; else return Number.MAX_VALUE;
        } else if(toC === BigDecimal) {
            if(fromC === Number) return 20008; else if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 0; else if(fromC === Number) return 20008; else if(fromC === Number) return 20008; else if(fromC === Number) return 20008; else if(fromC === Number) return 20008; else if(fromC === BigInteger) return 10008; else if(fromC === OverloadedNumberUtil.LongOrInteger) return 20008; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return 20008; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return 20008; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return 20008; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return 20008; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 20008; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 20008; else if(fromC === OverloadedNumberUtil.LongOrByte) return 20008; else if(fromC === Number) return 20008; else if(fromC === OverloadedNumberUtil.LongOrShort) return 20008; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 20008; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return 20008; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 20008; else if(fromC === OverloadedNumberUtil.FloatOrShort) return 20008; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return 10008; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return 10008; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return 10008; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return 10008; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 10008; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return 20008; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return 20008; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return 10008; else return Number.MAX_VALUE;
        } else if(toC === BigInteger) {
            if(fromC === Number) return 10005; else if(fromC === OverloadedNumberUtil.IntegerBigDecimal) return 10005; else if(fromC === BigDecimal) return 40005; else if(fromC === Number) return 10005; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return Number.MAX_VALUE; else if(fromC === Number) return 10005; else if(fromC === OverloadedNumberUtil.LongOrInteger) return 10005; else if(fromC === OverloadedNumberUtil.DoubleOrFloat) return Number.MAX_VALUE; else if(fromC === OverloadedNumberUtil.DoubleOrIntegerOrFloat) return 21005; else if(fromC === OverloadedNumberUtil.DoubleOrInteger) return 21005; else if(fromC === OverloadedNumberUtil.DoubleOrLong) return 21005; else if(fromC === OverloadedNumberUtil.IntegerOrByte) return 10005; else if(fromC === OverloadedNumberUtil.DoubleOrByte) return 21005; else if(fromC === OverloadedNumberUtil.LongOrByte) return 10005; else if(fromC === Number) return 10005; else if(fromC === OverloadedNumberUtil.LongOrShort) return 10005; else if(fromC === OverloadedNumberUtil.ShortOrByte) return 10005; else if(fromC === OverloadedNumberUtil.FloatOrInteger) return 25005; else if(fromC === OverloadedNumberUtil.FloatOrByte) return 25005; else if(fromC === OverloadedNumberUtil.FloatOrShort) return 25005; else if(fromC === OverloadedNumberUtil.BigIntegerOrInteger) return 0; else if(fromC === OverloadedNumberUtil.BigIntegerOrLong) return 0; else if(fromC === OverloadedNumberUtil.BigIntegerOrDouble) return 0; else if(fromC === OverloadedNumberUtil.BigIntegerOrFloat) return 0; else if(fromC === OverloadedNumberUtil.BigIntegerOrByte) return 0; else if(fromC === OverloadedNumberUtil.IntegerOrShort) return 10005; else if(fromC === OverloadedNumberUtil.DoubleOrShort) return 21005; else if(fromC === OverloadedNumberUtil.BigIntegerOrShort) return 0; else return Number.MAX_VALUE;
        } else {
            return Number.MAX_VALUE;
        }
    }

    static compareNumberTypeSpecificity(c1 : any, c2 : any) : number {
        c1 = ClassUtil.primitiveClassToBoxingClass(c1);
        c2 = ClassUtil.primitiveClassToBoxingClass(c2);
        if(c1 === c2) return 0;
        if(c1 === Number) {
            if(c2 === Number) return 4 - 3;
            if(c2 === Number) return 7 - 3;
            if(c2 === Number) return 6 - 3;
            if(c2 === Number) return 1 - 3;
            if(c2 === Number) return 2 - 3;
            if(c2 === BigDecimal) return 8 - 3;
            if(c2 === BigInteger) return 5 - 3;
            return 0;
        }
        if(c1 === Number) {
            if(c2 === Number) return 3 - 4;
            if(c2 === Number) return 7 - 4;
            if(c2 === Number) return 6 - 4;
            if(c2 === Number) return 1 - 4;
            if(c2 === Number) return 2 - 4;
            if(c2 === BigDecimal) return 8 - 4;
            if(c2 === BigInteger) return 5 - 4;
            return 0;
        }
        if(c1 === Number) {
            if(c2 === Number) return 3 - 7;
            if(c2 === Number) return 4 - 7;
            if(c2 === Number) return 6 - 7;
            if(c2 === Number) return 1 - 7;
            if(c2 === Number) return 2 - 7;
            if(c2 === BigDecimal) return 8 - 7;
            if(c2 === BigInteger) return 5 - 7;
            return 0;
        }
        if(c1 === Number) {
            if(c2 === Number) return 3 - 6;
            if(c2 === Number) return 4 - 6;
            if(c2 === Number) return 7 - 6;
            if(c2 === Number) return 1 - 6;
            if(c2 === Number) return 2 - 6;
            if(c2 === BigDecimal) return 8 - 6;
            if(c2 === BigInteger) return 5 - 6;
            return 0;
        }
        if(c1 === Number) {
            if(c2 === Number) return 3 - 1;
            if(c2 === Number) return 4 - 1;
            if(c2 === Number) return 7 - 1;
            if(c2 === Number) return 6 - 1;
            if(c2 === Number) return 2 - 1;
            if(c2 === BigDecimal) return 8 - 1;
            if(c2 === BigInteger) return 5 - 1;
            return 0;
        }
        if(c1 === Number) {
            if(c2 === Number) return 3 - 2;
            if(c2 === Number) return 4 - 2;
            if(c2 === Number) return 7 - 2;
            if(c2 === Number) return 6 - 2;
            if(c2 === Number) return 1 - 2;
            if(c2 === BigDecimal) return 8 - 2;
            if(c2 === BigInteger) return 5 - 2;
            return 0;
        }
        if(c1 === BigDecimal) {
            if(c2 === Number) return 3 - 8;
            if(c2 === Number) return 4 - 8;
            if(c2 === Number) return 7 - 8;
            if(c2 === Number) return 6 - 8;
            if(c2 === Number) return 1 - 8;
            if(c2 === Number) return 2 - 8;
            if(c2 === BigInteger) return 5 - 8;
            return 0;
        }
        if(c1 === BigInteger) {
            if(c2 === Number) return 3 - 5;
            if(c2 === Number) return 4 - 5;
            if(c2 === Number) return 7 - 5;
            if(c2 === Number) return 6 - 5;
            if(c2 === Number) return 1 - 5;
            if(c2 === Number) return 2 - 5;
            if(c2 === BigDecimal) return 8 - 5;
            return 0;
        }
        return 0;
    }
}
OverloadedNumberUtil["__class"] = "freemarker.ext.beans.OverloadedNumberUtil";


export namespace OverloadedNumberUtil {

    export interface ByteSource {
        byteValue() : number;
    }

    export interface ShortSource {
        shortValue() : number;
    }

    export interface IntegerSource {
        integerValue() : number;
    }

    export interface LongSource {
        longValue() : number;
    }

    export interface FloatSource {
        floatValue() : number;
    }

    export interface DoubleSource {
        doubleValue() : number;
    }

    export interface BigIntegerSource {
        bigIntegerValue() : BigInteger;
    }

    export interface BigDecimalSource {
        bigDecimalValue() : BigDecimal;
    }

    /**
     * Superclass of "Or"-ed numerical types. With an example, a {@code int} 1 has the fallback type {@code byte}, as
     * that's the smallest type that can store the value, so it can be represented as an {link IntegerOrByte}.
     * This is useful as overloaded method selection only examines the type of the arguments, not the value of them,
     * but with "Or"-ed types we can encode this value-related information into the argument type, hence influencing the
     * method selection.
     * @extends Number
     * @class
     */
    export abstract class NumberWithFallbackType {
        abstract getSourceNumber() : number;

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return /* intValue */(this.getSourceNumber()|0);
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return /* longValue */this.getSourceNumber();
        }

        /**
         * 
         * @return {number}
         */
        public floatValue() : number {
            return /* floatValue */this.getSourceNumber();
        }

        /**
         * 
         * @return {number}
         */
        public doubleValue() : number {
            return /* doubleValue */this.getSourceNumber();
        }

        /**
         * 
         * @return {number}
         */
        public byteValue() : number {
            return /* byteValue */(this.getSourceNumber()|0);
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return /* shortValue */(this.getSourceNumber()|0);
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.getSourceNumber()));
        }

        /**
         * 
         * @param {Object} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean {
            if(obj != null && (<any>this.constructor) === (<any>obj.constructor)) {
                return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.getSourceNumber(),(<OverloadedNumberUtil.NumberWithFallbackType>obj).getSourceNumber()));
            } else {
                return false;
            }
        }

        /**
         * 
         * @return {String}
         */
        public toString() : string {
            return this.getSourceNumber().toString();
        }

        public compareTo(o : any) : number {
            let n : number = this.getSourceNumber();
            if(n != null && (n["__interfaces"] != null && n["__interfaces"].indexOf("java.lang.Comparable") >= 0 || n.constructor != null && n.constructor["__interfaces"] != null && n.constructor["__interfaces"].indexOf("java.lang.Comparable") >= 0)) {
                return (<Comparable><any>n).compareTo(o);
            } else {
                throw Object.defineProperty(new Error(/* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>n.constructor)) + " is not Comparable."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.ClassCastException','java.lang.Exception'] });
            }
        }

        constructor() {
        }
    }
    NumberWithFallbackType["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.NumberWithFallbackType";
    NumberWithFallbackType["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    /**
     * Holds a {link BigDecimal} that stores a whole number. When selecting a overloaded method, FreeMarker tries to
     * associate {link BigDecimal} values to parameters of types that can hold non-whole numbers, unless the
     * {link BigDecimal} is wrapped into this class, in which case it does the opposite. This mechanism is, however,
     * too rough to prevent roll overs or magnitude losses. Those are not yet handled for backward compatibility (they
     * were suppressed earlier too).
     * @extends OverloadedNumberUtil.NumberWithFallbackType
     * @class
     */
    export class IntegerBigDecimal extends OverloadedNumberUtil.NumberWithFallbackType {
        n : BigDecimal;

        constructor(n : BigDecimal) {
            super();
            if(this.n===undefined) this.n = null;
            this.n = n;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }

        public bigIntegerValue() : BigInteger {
            return this.n.toBigInteger();
        }
    }
    IntegerBigDecimal["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.IntegerBigDecimal";
    IntegerBigDecimal["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export abstract class LongOrSmallerInteger extends OverloadedNumberUtil.NumberWithFallbackType {
        n : number;

        constructor(n : number) {
            super();
            if(this.n===undefined) this.n = null;
            this.n = n;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.n;
        }
    }
    LongOrSmallerInteger["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.LongOrSmallerInteger";
    LongOrSmallerInteger["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export abstract class IntegerOrSmallerInteger extends OverloadedNumberUtil.NumberWithFallbackType {
        n : number;

        constructor(n : number) {
            super();
            if(this.n===undefined) this.n = null;
            this.n = n;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.n;
        }
    }
    IntegerOrSmallerInteger["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.IntegerOrSmallerInteger";
    IntegerOrSmallerInteger["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class ShortOrByte extends OverloadedNumberUtil.NumberWithFallbackType {
        n : number;

        w : number;

        constructor(n : number, w : number) {
            super();
            if(this.n===undefined) this.n = null;
            if(this.w===undefined) this.w = 0;
            this.n = n;
            this.w = w;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return this.n;
        }

        /**
         * 
         * @return {number}
         */
        public byteValue() : number {
            return this.w;
        }
    }
    ShortOrByte["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.ShortOrByte";
    ShortOrByte["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export abstract class DoubleOrWholeNumber extends OverloadedNumberUtil.NumberWithFallbackType {
        n : number;

        constructor(n : number) {
            super();
            if(this.n===undefined) this.n = null;
            this.n = n;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }

        /**
         * 
         * @return {number}
         */
        public doubleValue() : number {
            return this.n;
        }
    }
    DoubleOrWholeNumber["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.DoubleOrWholeNumber";
    DoubleOrWholeNumber["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class DoubleOrFloat extends OverloadedNumberUtil.NumberWithFallbackType {
        n : number;

        constructor(n : number) {
            super();
            if(this.n===undefined) this.n = null;
            this.n = n;
        }

        /**
         * 
         * @return {number}
         */
        public floatValue() : number {
            return /* floatValue */this.n;
        }

        /**
         * 
         * @return {number}
         */
        public doubleValue() : number {
            return this.n;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }
    }
    DoubleOrFloat["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.DoubleOrFloat";
    DoubleOrFloat["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export abstract class FloatOrWholeNumber extends OverloadedNumberUtil.NumberWithFallbackType {
        n : number;

        constructor(n : number) {
            super();
            if(this.n===undefined) this.n = null;
            this.n = n;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }

        /**
         * 
         * @return {number}
         */
        public floatValue() : number {
            return this.n;
        }
    }
    FloatOrWholeNumber["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.FloatOrWholeNumber";
    FloatOrWholeNumber["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export abstract class BigIntegerOrPrimitive extends OverloadedNumberUtil.NumberWithFallbackType {
        n : BigInteger;

        constructor(n : BigInteger) {
            super();
            if(this.n===undefined) this.n = null;
            this.n = n;
        }

        /**
         * 
         * @return {Number}
         */
        getSourceNumber() : number {
            return this.n;
        }
    }
    BigIntegerOrPrimitive["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrPrimitive";
    BigIntegerOrPrimitive["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class LongOrByte extends OverloadedNumberUtil.LongOrSmallerInteger {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public byteValue() : number {
            return this.w;
        }
    }
    LongOrByte["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.LongOrByte";
    LongOrByte["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class LongOrShort extends OverloadedNumberUtil.LongOrSmallerInteger {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return this.w;
        }
    }
    LongOrShort["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.LongOrShort";
    LongOrShort["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class LongOrInteger extends OverloadedNumberUtil.LongOrSmallerInteger {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }
    }
    LongOrInteger["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.LongOrInteger";
    LongOrInteger["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class IntegerOrByte extends OverloadedNumberUtil.IntegerOrSmallerInteger {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public byteValue() : number {
            return this.w;
        }
    }
    IntegerOrByte["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.IntegerOrByte";
    IntegerOrByte["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class IntegerOrShort extends OverloadedNumberUtil.IntegerOrSmallerInteger {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return this.w;
        }
    }
    IntegerOrShort["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.IntegerOrShort";
    IntegerOrShort["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class DoubleOrByte extends OverloadedNumberUtil.DoubleOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public byteValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    DoubleOrByte["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.DoubleOrByte";
    DoubleOrByte["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class DoubleOrShort extends OverloadedNumberUtil.DoubleOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    DoubleOrShort["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.DoubleOrShort";
    DoubleOrShort["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class DoubleOrIntegerOrFloat extends OverloadedNumberUtil.DoubleOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    DoubleOrIntegerOrFloat["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.DoubleOrIntegerOrFloat";
    DoubleOrIntegerOrFloat["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class DoubleOrInteger extends OverloadedNumberUtil.DoubleOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    DoubleOrInteger["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.DoubleOrInteger";
    DoubleOrInteger["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class DoubleOrLong extends OverloadedNumberUtil.DoubleOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    DoubleOrLong["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.DoubleOrLong";
    DoubleOrLong["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class FloatOrByte extends OverloadedNumberUtil.FloatOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public byteValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    FloatOrByte["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.FloatOrByte";
    FloatOrByte["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class FloatOrShort extends OverloadedNumberUtil.FloatOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public shortValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    FloatOrShort["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.FloatOrShort";
    FloatOrShort["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class FloatOrInteger extends OverloadedNumberUtil.FloatOrWholeNumber {
        w : number;

        constructor(n : number, w : number) {
            super(n);
            if(this.w===undefined) this.w = 0;
            this.w = w;
        }

        /**
         * 
         * @return {number}
         */
        public intValue() : number {
            return this.w;
        }

        /**
         * 
         * @return {number}
         */
        public longValue() : number {
            return this.w;
        }
    }
    FloatOrInteger["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.FloatOrInteger";
    FloatOrInteger["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class BigIntegerOrByte extends OverloadedNumberUtil.BigIntegerOrPrimitive {
        constructor(n : BigInteger) {
            super(n);
        }
    }
    BigIntegerOrByte["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrByte";
    BigIntegerOrByte["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class BigIntegerOrShort extends OverloadedNumberUtil.BigIntegerOrPrimitive {
        constructor(n : BigInteger) {
            super(n);
        }
    }
    BigIntegerOrShort["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrShort";
    BigIntegerOrShort["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class BigIntegerOrInteger extends OverloadedNumberUtil.BigIntegerOrPrimitive {
        constructor(n : BigInteger) {
            super(n);
        }
    }
    BigIntegerOrInteger["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrInteger";
    BigIntegerOrInteger["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class BigIntegerOrLong extends OverloadedNumberUtil.BigIntegerOrPrimitive {
        constructor(n : BigInteger) {
            super(n);
        }
    }
    BigIntegerOrLong["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrLong";
    BigIntegerOrLong["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export abstract class BigIntegerOrFPPrimitive extends OverloadedNumberUtil.BigIntegerOrPrimitive {
        constructor(n : BigInteger) {
            super(n);
        }

        /**
         * Faster version of {link BigDecimal#floatValue()}, utilizes that the number known to fit into a long.
         * @return {number}
         */
        public floatValue() : number {
            return this.n.longValue();
        }

        /**
         * Faster version of {link BigDecimal#doubleValue()}, utilizes that the number known to fit into a long.
         * @return {number}
         */
        public doubleValue() : number {
            return this.n.longValue();
        }
    }
    BigIntegerOrFPPrimitive["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrFPPrimitive";
    BigIntegerOrFPPrimitive["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class BigIntegerOrFloat extends OverloadedNumberUtil.BigIntegerOrFPPrimitive {
        constructor(n : BigInteger) {
            super(n);
        }
    }
    BigIntegerOrFloat["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrFloat";
    BigIntegerOrFloat["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];



    export class BigIntegerOrDouble extends OverloadedNumberUtil.BigIntegerOrFPPrimitive {
        constructor(n : BigInteger) {
            super(n);
        }
    }
    BigIntegerOrDouble["__class"] = "freemarker.ext.beans.OverloadedNumberUtil.BigIntegerOrDouble";
    BigIntegerOrDouble["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];


}



var __Function = Function;

OverloadedNumberUtil.BIG_MANTISSA_LOSS_PRICE_$LI$();
