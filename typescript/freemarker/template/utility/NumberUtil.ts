/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { UnsupportedNumberClassException } from './UnsupportedNumberClassException';
import { ClassUtil } from './ClassUtil';

/**
 * Number- and math-related utilities.
 * 
 * @since 2.3.20
 * @class
 */
export class NumberUtil {
    static BIG_DECIMAL_INT_MIN : BigDecimal; public static BIG_DECIMAL_INT_MIN_$LI$() : BigDecimal { if(NumberUtil.BIG_DECIMAL_INT_MIN == null) NumberUtil.BIG_DECIMAL_INT_MIN = BigDecimal.valueOf(Number.MIN_VALUE); return NumberUtil.BIG_DECIMAL_INT_MIN; };

    static BIG_DECIMAL_INT_MAX : BigDecimal; public static BIG_DECIMAL_INT_MAX_$LI$() : BigDecimal { if(NumberUtil.BIG_DECIMAL_INT_MAX == null) NumberUtil.BIG_DECIMAL_INT_MAX = BigDecimal.valueOf(Number.MAX_VALUE); return NumberUtil.BIG_DECIMAL_INT_MAX; };

    static BIG_INTEGER_INT_MIN : BigInteger; public static BIG_INTEGER_INT_MIN_$LI$() : BigInteger { if(NumberUtil.BIG_INTEGER_INT_MIN == null) NumberUtil.BIG_INTEGER_INT_MIN = NumberUtil.BIG_DECIMAL_INT_MIN_$LI$().toBigInteger(); return NumberUtil.BIG_INTEGER_INT_MIN; };

    static BIG_INTEGER_INT_MAX : BigInteger; public static BIG_INTEGER_INT_MAX_$LI$() : BigInteger { if(NumberUtil.BIG_INTEGER_INT_MAX == null) NumberUtil.BIG_INTEGER_INT_MAX = NumberUtil.BIG_DECIMAL_INT_MAX_$LI$().toBigInteger(); return NumberUtil.BIG_INTEGER_INT_MAX; };

    constructor() {
    }

    public static isInfinite(num : number) : boolean {
        if(typeof num === 'number') {
            return /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)((<number>num));
        } else if(typeof num === 'number') {
            return /* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)((<number>num));
        } else if(NumberUtil.hasTypeThatIsKnownToNotSupportInfiniteAndNaN(num)) {
            return false;
        } else {
            throw new UnsupportedNumberClassException((<any>num.constructor));
        }
    }

    public static isNaN(num : number) : boolean {
        if(typeof num === 'number') {
            return /* isNaN */isNaN((<number>num));
        } else if(typeof num === 'number') {
            return /* isNaN */isNaN((<number>num));
        } else if(NumberUtil.hasTypeThatIsKnownToNotSupportInfiniteAndNaN(num)) {
            return false;
        } else {
            throw new UnsupportedNumberClassException((<any>num.constructor));
        }
    }

    /**
     * @return {number} -1 for negative, 0 for zero, 1 for positive.
     * @throws ArithmeticException if the number is NaN
     * @param {Number} num
     */
    public static getSignum(num : number) : number {
        if(typeof num === 'number') {
            let n : number = /* intValue */(num|0);
            return n > 0?1:(n === 0?0:-1);
        } else if(num != null && num instanceof <any>BigDecimal) {
            let n : BigDecimal = <BigDecimal>num;
            return n.signum();
        } else if(typeof num === 'number') {
            let n : number = /* doubleValue */num;
            if(n > 0) return 1; else if(n === 0) return 0; else if(n < 0) return -1; else throw Object.defineProperty(new Error("The signum of " + n + " is not defined."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.ArithmeticException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        } else if(typeof num === 'number') {
            let n : number = /* floatValue */num;
            if(n > 0) return 1; else if(n === 0) return 0; else if(n < 0) return -1; else throw Object.defineProperty(new Error("The signum of " + n + " is not defined."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.ArithmeticException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        } else if(typeof num === 'number') {
            let n : number = /* longValue */num;
            return n > 0?1:(n === 0?0:-1);
        } else if(typeof num === 'number') {
            let n : number = /* shortValue */(num|0);
            return n > 0?1:(n === 0?0:-1);
        } else if(typeof num === 'number') {
            let n : number = /* byteValue */(num|0);
            return n > 0?1:(n === 0?0:-1);
        } else if(num != null && num instanceof <any>BigInteger) {
            let n : BigInteger = <BigInteger>num;
            return n.signum();
        } else {
            throw new UnsupportedNumberClassException((<any>num.constructor));
        }
    }

    /**
     * Tells if a {link BigDecimal} stores a whole number. For example, it returns {@code true} for {@code 1.0000},
     * but {@code false} for {@code 1.0001}.
     * 
     * @since 2.3.21
     * @param {BigDecimal} bd
     * @return {boolean}
     */
    public static isIntegerBigDecimal(bd : BigDecimal) : boolean {
        return bd.scale() <= 0 || bd.setScale(0, BigDecimal.ROUND_DOWN).compareTo(bd) === 0;
    }

    /**
     * Tells if the type of the parameter number is known to not be able to represent infinite (positive or negative)
     * and NaN. If this returns {@code false}, that doesn't mean that it can do that, because it's maybe just that this
     * utility doesn't know that type.
     * 
     * @since 2.3.28
     * @param {Number} num
     * @return {boolean}
     */
    public static hasTypeThatIsKnownToNotSupportInfiniteAndNaN(num : number) : boolean {
        return (typeof num === 'number') || (num != null && num instanceof <any>BigDecimal) || (typeof num === 'number') || (typeof num === 'number') || (typeof num === 'number') || (num != null && num instanceof <any>BigInteger);
    }

    /**
     * Converts a {link Number} to {@code int} whose mathematical value is exactly the same as of the original number.
     * 
     * @throws ArithmeticException if the conversion to {@code int} is not possible without losing precision or overflow/underflow.
     * @since 2.3.22
     * @param {Number} num
     * @return {number}
     */
    public static toIntExact(num : number) : number {
        if((typeof num === 'number') || (typeof num === 'number') || (typeof num === 'number')) {
            return /* intValue */(num|0);
        } else if(typeof num === 'number') {
            let n : number = /* longValue */num;
            let result : number = (<number>n|0);
            if(n !== result) {
                throw NumberUtil.newLossyConverionException(num, Number);
            }
            return result;
        } else if((typeof num === 'number') || (typeof num === 'number')) {
            let n : number = /* doubleValue */num;
            if(n % 1 !== 0 || n < Number.MIN_VALUE || n > Number.MAX_VALUE) {
                throw NumberUtil.newLossyConverionException(num, Number);
            }
            return (<number>n|0);
        } else if(num != null && num instanceof <any>BigDecimal) {
            let n : BigDecimal = <BigDecimal>num;
            if(!NumberUtil.isIntegerBigDecimal(n) || n.compareTo(NumberUtil.BIG_DECIMAL_INT_MAX_$LI$()) > 0 || n.compareTo(NumberUtil.BIG_DECIMAL_INT_MIN_$LI$()) < 0) {
                throw NumberUtil.newLossyConverionException(num, Number);
            }
            return n.intValue();
        } else if(num != null && num instanceof <any>BigInteger) {
            let n : BigInteger = <BigInteger>num;
            if(n.compareTo(NumberUtil.BIG_INTEGER_INT_MAX_$LI$()) > 0 || n.compareTo(NumberUtil.BIG_INTEGER_INT_MIN_$LI$()) < 0) {
                throw NumberUtil.newLossyConverionException(num, Number);
            }
            return n.intValue();
        } else {
            throw new UnsupportedNumberClassException((<any>num.constructor));
        }
    }

    /*private*/ static newLossyConverionException(fromValue : number, toType : any) : Error {
        return Object.defineProperty(new Error("Can\'t convert " + fromValue + " to type " + ClassUtil.getShortClassName(toType) + " without loss."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.ArithmeticException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
NumberUtil["__class"] = "freemarker.template.utility.NumberUtil";



var __Function = Function;

NumberUtil.BIG_INTEGER_INT_MAX_$LI$();

NumberUtil.BIG_INTEGER_INT_MIN_$LI$();

NumberUtil.BIG_DECIMAL_INT_MAX_$LI$();

NumberUtil.BIG_DECIMAL_INT_MIN_$LI$();
