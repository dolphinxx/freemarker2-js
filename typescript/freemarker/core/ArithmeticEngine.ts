/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_MiscTemplateException} from './_MiscTemplateException';
import {Map} from "../../java/util/Map";

/**
 * Used for implementing the arithmetic operations and number comparisons in the template language. The concrete
 * implementation is plugged into the configuration with the {@code arithmetical_engine} setting.
 * (See {link Configurable#setArithmeticEngine(ArithmeticEngine)}.)
 * @class
 */
export abstract class ArithmeticEngine {
    /**
     * Arithmetic engine that converts all numbers to {link BigDecimal} and
     * then operates on them, and also keeps the result as a {link BigDecimal}. This is FreeMarker's default arithmetic
     * engine.
     */
    public static BIGDECIMAL_ENGINE : ArithmeticEngine.BigDecimalEngine; public static BIGDECIMAL_ENGINE_$LI$() : ArithmeticEngine.BigDecimalEngine { if(ArithmeticEngine.BIGDECIMAL_ENGINE == null) ArithmeticEngine.BIGDECIMAL_ENGINE = new ArithmeticEngine.BigDecimalEngine(); return ArithmeticEngine.BIGDECIMAL_ENGINE; };

    /**
     * Arithmetic engine that uses (more-or-less) the widening conversions of
     * Java language to determine the type of result of operation, instead of
     * converting everything to BigDecimal up front.
     */
    public static CONSERVATIVE_ENGINE : ArithmeticEngine.ConservativeEngine; public static CONSERVATIVE_ENGINE_$LI$() : ArithmeticEngine.ConservativeEngine { if(ArithmeticEngine.CONSERVATIVE_ENGINE == null) ArithmeticEngine.CONSERVATIVE_ENGINE = new ArithmeticEngine.ConservativeEngine(); return ArithmeticEngine.CONSERVATIVE_ENGINE; };

    public abstract compareNumbers(first : number, second : number) : number;

    public abstract add(first : number, second : number) : number;

    public abstract subtract(first : number, second : number) : number;

    public abstract multiply(first : number, second : number) : number;

    public divide(left? : any, right? : any) : any {
        if(((typeof left === 'number') || left === null) && ((typeof right === 'number') || right === null)) {
            return <any>this.divide$java_lang_Number$java_lang_Number(left, right);
        } else throw new Error('invalid overload');
    }

    public divide$java_lang_Number$java_lang_Number(first : number, second : number) : number { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    public abstract modulus(first : number, second : number) : number;

    /**
     * Should be able to parse all FTL numerical literals, Java Double toString results, and XML Schema numbers.
     * This means these should be parsed successfully, except if the arithmetical engine
     * couldn't support the resulting value anyway (such as NaN, infinite, even non-integers):
     * {@code -123.45}, {@code 1.5e3}, {@code 1.5E3}, {@code 0005}, {@code +0}, {@code -0}, {@code NaN},
     * {@code INF}, {@code -INF}, {@code Infinity}, {@code -Infinity}.
     * @param {String} s
     * @return {Number}
     */
    public abstract toNumber(s : string) : number;

    minScale : number = 12;

    maxScale : number = 12;

    roundingPolicy : number = /*BigDecimal.ROUND_HALF_UP*/4;

    /**
     * Sets the minimal scale to use when dividing BigDecimal numbers. Default
     * value is 12.
     * @param {number} minScale
     */
    public setMinScale(minScale : number) {
        if(minScale < 0) {
            throw Object.defineProperty(new Error("minScale < 0"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.minScale = minScale;
    }

    /**
     * Sets the maximal scale to use when multiplying BigDecimal numbers.
     * Default value is 100.
     * @param {number} maxScale
     */
    public setMaxScale(maxScale : number) {
        if(maxScale < this.minScale) {
            throw Object.defineProperty(new Error("maxScale < minScale"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.maxScale = maxScale;
    }

    public setRoundingPolicy(roundingPolicy : number) {
        if(roundingPolicy !== /*BigDecimal.ROUND_CEILING*/2 && roundingPolicy !== /*BigDecimal.ROUND_DOWN*/1 && roundingPolicy !== /*BigDecimal.ROUND_FLOOR*/3 && roundingPolicy !== /*BigDecimal.ROUND_HALF_DOWN*/5 && roundingPolicy !== /*BigDecimal.ROUND_HALF_EVEN*/6 && roundingPolicy !== /*BigDecimal.ROUND_HALF_UP*/4 && roundingPolicy !== /*BigDecimal.ROUND_UNNECESSARY*/7 && roundingPolicy !== /*BigDecimal.ROUND_UP*/0) {
            throw Object.defineProperty(new Error("invalid rounding policy"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.roundingPolicy = roundingPolicy;
    }

    /**
     * Convert a {@code Number} to {link BigDecimal}.
     * 
     * @throws NumberFormatException If the conversion is not possible, e.g. Infinite and NaN can't be converted to {link BigDecimal}.
     * @param {Number} num
     * @return {BigDecimal}
     * @private
     */
    static toBigDecimal(num : number) : /*BigDecimal*/any {
        // if(num != null && num instanceof <any>BigDecimal) {
        //     return <BigDecimal>num;
        // }
        // if((typeof num === 'number') || (typeof num === 'number') || (typeof num === 'number') || (typeof num === 'number')) {
        //     return BigDecimal.valueOf(/* longValue */num);
        // }
        // if(num != null && num instanceof <any>BigInteger) {
        //     return new BigDecimal(<BigInteger>num);
        // }
        // try {
        //     return new BigDecimal(num.toString());
        // } catch(e) {
        //     if(NumberUtil.isInfinite(num)) {
        //         throw Object.defineProperty(new Error("It\'s impossible to convert an infinte value (" + /* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))((<any>num.constructor)) + " " + num + ") to BigDecimal."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.NumberFormatException','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        //     }
        //     throw Object.defineProperty(new Error("Can\'t parse this as BigDecimal number: " + StringUtil.jQuote$java_lang_Object(num)), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.NumberFormatException','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        // };
        return num;
    }

    static toBigDecimalOrDouble(s : string) : number {
        // if(s.length > 2) {
        //     let c : string = s.charAt(0);
        //     if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 'I'.charCodeAt(0) && (/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"INF")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"Infinity")))) {
        //         return Number.POSITIVE_INFINITY;
        //     } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 'N'.charCodeAt(0) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"NaN"))) {
        //         return NaN;
        //     } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '-'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(s.charAt(1)) == 'I'.charCodeAt(0) && (/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"-INF")) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(s,"-Infinity")))) {
        //         return Number.NEGATIVE_INFINITY;
        //     }
        // }
        // return new BigDecimal(s);
        return parseFloat(s);
    }
}
ArithmeticEngine["__class"] = "freemarker.core.ArithmeticEngine";


export namespace ArithmeticEngine {

    /**
     * This is the default arithmetic engine in FreeMarker. It converts every
     * number it receives into {link BigDecimal}, then operates on these
     * converted {link BigDecimal}s.
     * @class
     * @extends ArithmeticEngine
     */
    export class BigDecimalEngine extends ArithmeticEngine {
        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {number}
         */
        public compareNumbers(first : number, second : number) : number {
            // let firstSignum : number = NumberUtil.getSignum(first);
            // let secondSignum : number = NumberUtil.getSignum(second);
            // if(firstSignum !== secondSignum) {
            //     return firstSignum < secondSignum?-1:(firstSignum > secondSignum?1:0);
            // } else if(firstSignum === 0 && secondSignum === 0) {
            //     return 0;
            // } else {
            //     if((<any>first.constructor) === (<any>second.constructor)) {
            //         if(first != null && first instanceof <any>BigDecimal) {
            //             return (<BigDecimal>first).compareTo(<BigDecimal>second);
            //         }
            //         if(typeof first === 'number') {
            //             return (<number>first).compareTo(<number>second);
            //         }
            //         if(typeof first === 'number') {
            //             return (<number>first).compareTo(<number>second);
            //         }
            //         if(typeof first === 'number') {
            //             return (<number>first).compareTo(<number>second);
            //         }
            //         if(typeof first === 'number') {
            //             return (<number>first).compareTo(<number>second);
            //         }
            //         if(typeof first === 'number') {
            //             return (<number>first).compareTo(<number>second);
            //         }
            //         if(typeof first === 'number') {
            //             return (<number>first).compareTo(<number>second);
            //         }
            //     }
            //     if(typeof first === 'number') {
            //         let firstD : number = /* doubleValue */first;
            //         if(/* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(firstD)) {
            //             if(NumberUtil.hasTypeThatIsKnownToNotSupportInfiniteAndNaN(second)) {
            //                 return firstD === Number.NEGATIVE_INFINITY?-1:1;
            //             }
            //             if(typeof second === 'number') {
            //                 return /* compare */(firstD - /* doubleValue */second);
            //             }
            //         }
            //     }
            //     if(typeof first === 'number') {
            //         let firstF : number = /* floatValue */first;
            //         if(/* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(firstF)) {
            //             if(NumberUtil.hasTypeThatIsKnownToNotSupportInfiniteAndNaN(second)) {
            //                 return firstF === Number.NEGATIVE_INFINITY?-1:1;
            //             }
            //             if(typeof second === 'number') {
            //                 return /* compare */(firstF - /* doubleValue */second);
            //             }
            //         }
            //     }
            //     if(typeof second === 'number') {
            //         let secondD : number = /* doubleValue */second;
            //         if(/* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(secondD)) {
            //             if(NumberUtil.hasTypeThatIsKnownToNotSupportInfiniteAndNaN(first)) {
            //                 return secondD === Number.NEGATIVE_INFINITY?1:-1;
            //             }
            //             if(typeof first === 'number') {
            //                 return /* compare */(/* doubleValue */first - secondD);
            //             }
            //         }
            //     }
            //     if(typeof second === 'number') {
            //         let secondF : number = /* floatValue */second;
            //         if(/* isInfinite */((value) => Number.NEGATIVE_INFINITY === value || Number.POSITIVE_INFINITY === value)(secondF)) {
            //             if(NumberUtil.hasTypeThatIsKnownToNotSupportInfiniteAndNaN(first)) {
            //                 return secondF === Number.NEGATIVE_INFINITY?1:-1;
            //             }
            //             if(typeof first === 'number') {
            //                 return /* compare */(/* doubleValue */first - secondF);
            //             }
            //         }
            //     }
            //     return ArithmeticEngine.toBigDecimal(first).compareTo(ArithmeticEngine.toBigDecimal(second));
            // }
            return first - second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public add(first : number, second : number) : number {
            // let left : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            // let right : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            // return left.add(right);
            return first + second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public subtract(first : number, second : number) : number {
            // let left : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            // let right : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            // return left.subtract(right);
            return first - second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public multiply(first : number, second : number) : number {
            // let left : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            // let right : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            // let result : BigDecimal = left.multiply(right);
            // if(result.scale() > this.maxScale) {
            //     result = result.setScale(this.maxScale, this.roundingPolicy);
            // }
            // return result;
            return first * second;
        }

        public divide$java_lang_Number$java_lang_Number(first : number, second : number) : number {
            // let left : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            // let right : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            // return this.divide$java_lang_Number$java_lang_Number(left, right);
            return first / second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public modulus(first : number, second : number) : number {
            let left : number = /* longValue */first;
            let right : number = /* longValue */second;
            return left % right;
        }

        /**
         * 
         * @param {String} s
         * @return {Number}
         */
        public toNumber(s : string) : number {
            return ArithmeticEngine.toBigDecimalOrDouble(s);
        }

        public divide$java_math_BigDecimal$java_math_BigDecimal(left : /*BigDecimal*/number, right : /*BigDecimal*/number) : /*BigDecimal*/number {
            // let scale1 : number = left.scale();
            // let scale2 : number = right.scale();
            // let scale : number = Math.max(scale1, scale2);
            // scale = Math.max(this.minScale, scale);
            // return left.divide(right, scale, this.roundingPolicy);
            return left / right;
        }

        public divide(left? : any, right? : any) : any {
            // if(((left != null && left instanceof <any>BigDecimal) || left === null) && ((right != null && right instanceof <any>BigDecimal) || right === null)) {
            //     return <any>this.divide$java_math_BigDecimal$java_math_BigDecimal(left, right);
            // } else if(((typeof left === 'number') || left === null) && ((typeof right === 'number') || right === null)) {
            //     return <any>this.divide$java_lang_Number$java_lang_Number(left, right);
            // } else throw new Error('invalid overload');
            return <number>left / <number>right;
        }

        constructor() {
            super();
        }
    }
    BigDecimalEngine["__class"] = "freemarker.core.ArithmeticEngine.BigDecimalEngine";


    /**
     * An arithmetic engine that conservatively widens the operation arguments
     * to extent that they can hold the result of the operation. Widening
     * conversions occur in following situations:
     * <ul>
     * <li>byte and short are always widened to int (alike to Java language).</li>
     * <li>To preserve magnitude: when operands are of different types, the
     * result type is the type of the wider operand.</li>
     * <li>to avoid overflows: if add, subtract, or multiply would overflow on
     * integer types, the result is widened from int to long, or from long to
     * BigInteger.</li>
     * <li>to preserve fractional part: if a division of integer types would
     * have a fractional part, int and long are converted to double, and
     * BigInteger is converted to BigDecimal. An operation on a float and a
     * long results in a double. An operation on a float or double and a
     * BigInteger results in a BigDecimal.</li>
     * </ul>
     * @class
     * @extends ArithmeticEngine
     */
    export class ConservativeEngine extends ArithmeticEngine {
        static INTEGER : number = 0;

        static LONG : number = 1;

        static FLOAT : number = 2;

        static DOUBLE : number = 3;

        static BIGINTEGER : number = 4;

        static BIGDECIMAL : number = 5;

        static classCodes : Map<any, any>; public static classCodes_$LI$() : Map<any, any> { if(ConservativeEngine.classCodes == null) ConservativeEngine.classCodes = ConservativeEngine.createClassCodesMap(); return ConservativeEngine.classCodes; };

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {number}
         */
        public compareNumbers(first : number, second : number) : number {
            // switch((ConservativeEngine.getCommonClassCode(first, second))) {
            // case 0 /* INTEGER */:
            //     {
            //         let n1 : number = /* intValue */(first|0);
            //         let n2 : number = /* intValue */(second|0);
            //         return n1 < n2?-1:(n1 === n2?0:1);
            //     };
            // case 1 /* LONG */:
            //     {
            //         let n1 : number = /* longValue */first;
            //         let n2 : number = /* longValue */second;
            //         return n1 < n2?-1:(n1 === n2?0:1);
            //     };
            // case 2 /* FLOAT */:
            //     {
            //         let n1 : number = /* floatValue */first;
            //         let n2 : number = /* floatValue */second;
            //         return n1 < n2?-1:(n1 === n2?0:1);
            //     };
            // case 3 /* DOUBLE */:
            //     {
            //         let n1 : number = /* doubleValue */first;
            //         let n2 : number = /* doubleValue */second;
            //         return n1 < n2?-1:(n1 === n2?0:1);
            //     };
            // case 4 /* BIGINTEGER */:
            //     {
            //         let n1 : BigInteger = ConservativeEngine.toBigInteger(first);
            //         let n2 : BigInteger = ConservativeEngine.toBigInteger(second);
            //         return n1.compareTo(n2);
            //     };
            // case 5 /* BIGDECIMAL */:
            //     {
            //         let n1 : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            //         let n2 : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            //         return n1.compareTo(n2);
            //     };
            // }
            // throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
            return first - second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public add(first : number, second : number) : number {
            // switch((ConservativeEngine.getCommonClassCode(first, second))) {
            // case 0 /* INTEGER */:
            //     {
            //         let n1 : number = /* intValue */(first|0);
            //         let n2 : number = /* intValue */(second|0);
            //         let n : number = n1 + n2;
            //         return ((n ^ n1) < 0 && (n ^ n2) < 0)?((n => n<0?Math.ceil(n):Math.floor(n))(<number>n1)) + n2:n;
            //     };
            // case 1 /* LONG */:
            //     {
            //         let n1 : number = /* longValue */first;
            //         let n2 : number = /* longValue */second;
            //         let n : number = n1 + n2;
            //         return ((n ^ n1) < 0 && (n ^ n2) < 0)?ConservativeEngine.toBigInteger(first).add(ConservativeEngine.toBigInteger(second)):n;
            //     };
            // case 2 /* FLOAT */:
            //     {
            //         return (<any>Math).fround(/* floatValue */first + /* floatValue */second);
            //     };
            // case 3 /* DOUBLE */:
            //     {
            //         return /* doubleValue */first + /* doubleValue */second;
            //     };
            // case 4 /* BIGINTEGER */:
            //     {
            //         let n1 : BigInteger = ConservativeEngine.toBigInteger(first);
            //         let n2 : BigInteger = ConservativeEngine.toBigInteger(second);
            //         return n1.add(n2);
            //     };
            // case 5 /* BIGDECIMAL */:
            //     {
            //         let n1 : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            //         let n2 : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            //         return n1.add(n2);
            //     };
            // }
            // throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
            return first + second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public subtract(first : number, second : number) : number {
            // switch((ConservativeEngine.getCommonClassCode(first, second))) {
            // case 0 /* INTEGER */:
            //     {
            //         let n1 : number = /* intValue */(first|0);
            //         let n2 : number = /* intValue */(second|0);
            //         let n : number = n1 - n2;
            //         return ((n ^ n1) < 0 && (n ^ ~n2) < 0)?((n => n<0?Math.ceil(n):Math.floor(n))(<number>n1)) - n2:n;
            //     };
            // case 1 /* LONG */:
            //     {
            //         let n1 : number = /* longValue */first;
            //         let n2 : number = /* longValue */second;
            //         let n : number = n1 - n2;
            //         return ((n ^ n1) < 0 && (n ^ ~n2) < 0)?ConservativeEngine.toBigInteger(first).subtract(ConservativeEngine.toBigInteger(second)):n;
            //     };
            // case 2 /* FLOAT */:
            //     {
            //         return (<any>Math).fround(/* floatValue */first - /* floatValue */second);
            //     };
            // case 3 /* DOUBLE */:
            //     {
            //         return /* doubleValue */first - /* doubleValue */second;
            //     };
            // case 4 /* BIGINTEGER */:
            //     {
            //         let n1 : BigInteger = ConservativeEngine.toBigInteger(first);
            //         let n2 : BigInteger = ConservativeEngine.toBigInteger(second);
            //         return n1.subtract(n2);
            //     };
            // case 5 /* BIGDECIMAL */:
            //     {
            //         let n1 : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            //         let n2 : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            //         return n1.subtract(n2);
            //     };
            // }
            // throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
            return first - second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public multiply(first : number, second : number) : number {
            // switch((ConservativeEngine.getCommonClassCode(first, second))) {
            // case 0 /* INTEGER */:
            //     {
            //         let n1 : number = /* intValue */(first|0);
            //         let n2 : number = /* intValue */(second|0);
            //         let n : number = n1 * n2;
            //         return n1 === 0 || (n / n1|0) === n2?n:((n => n<0?Math.ceil(n):Math.floor(n))(<number>n1)) * n2;
            //     };
            // case 1 /* LONG */:
            //     {
            //         let n1 : number = /* longValue */first;
            //         let n2 : number = /* longValue */second;
            //         let n : number = n1 * n2;
            //         return n1 === 0 || (n => n<0?Math.ceil(n):Math.floor(n))(n / n1) === n2?n:ConservativeEngine.toBigInteger(first).multiply(ConservativeEngine.toBigInteger(second));
            //     };
            // case 2 /* FLOAT */:
            //     {
            //         return (<any>Math).fround(/* floatValue */first * /* floatValue */second);
            //     };
            // case 3 /* DOUBLE */:
            //     {
            //         return /* doubleValue */first * /* doubleValue */second;
            //     };
            // case 4 /* BIGINTEGER */:
            //     {
            //         let n1 : BigInteger = ConservativeEngine.toBigInteger(first);
            //         let n2 : BigInteger = ConservativeEngine.toBigInteger(second);
            //         return n1.multiply(n2);
            //     };
            // case 5 /* BIGDECIMAL */:
            //     {
            //         let n1 : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            //         let n2 : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            //         let r : BigDecimal = n1.multiply(n2);
            //         return r.scale() > this.maxScale?r.setScale(this.maxScale, this.roundingPolicy):r;
            //     };
            // }
            // throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
            return first * second;
        }

        public divide(left? : any, right? : any) : any {
            // if(((typeof left === 'number') || left === null) && ((typeof right === 'number') || right === null)) {
            //     return <any>this.divide$java_lang_Number$java_lang_Number(left, right);
            // } else throw new Error('invalid overload');
            return <number>left / <number>right;
        }

        public divide$java_lang_Number$java_lang_Number(first : number, second : number) : number {
            // switch((ConservativeEngine.getCommonClassCode(first, second))) {
            // case 0 /* INTEGER */:
            //     {
            //         let n1 : number = /* intValue */(first|0);
            //         let n2 : number = /* intValue */(second|0);
            //         if(n1 % n2 === 0) {
            //             return (n1 / n2|0);
            //         }
            //         return (<number>n1) / n2;
            //     };
            // case 1 /* LONG */:
            //     {
            //         let n1 : number = /* longValue */first;
            //         let n2 : number = /* longValue */second;
            //         if(n1 % n2 === 0) {
            //             return (n => n<0?Math.ceil(n):Math.floor(n))(n1 / n2);
            //         }
            //         return (<number>n1) / n2;
            //     };
            // case 2 /* FLOAT */:
            //     {
            //         return (<any>Math).fround(/* floatValue */first / /* floatValue */second);
            //     };
            // case 3 /* DOUBLE */:
            //     {
            //         return /* doubleValue */first / /* doubleValue */second;
            //     };
            // case 4 /* BIGINTEGER */:
            //     {
            //         let n1 : BigInteger = ConservativeEngine.toBigInteger(first);
            //         let n2 : BigInteger = ConservativeEngine.toBigInteger(second);
            //         let divmod : Array<any> = n1.divideAndRemainder(n2);
            //         if(divmod[1].equals(BigInteger.ZERO)) {
            //             return divmod[0];
            //         } else {
            //             let bd1 : BigDecimal = new BigDecimal(n1);
            //             let bd2 : BigDecimal = new BigDecimal(n2);
            //             return bd1.divide(bd2, this.minScale, this.roundingPolicy);
            //         }
            //     };
            // case 5 /* BIGDECIMAL */:
            //     {
            //         let n1 : BigDecimal = ArithmeticEngine.toBigDecimal(first);
            //         let n2 : BigDecimal = ArithmeticEngine.toBigDecimal(second);
            //         let scale1 : number = n1.scale();
            //         let scale2 : number = n2.scale();
            //         let scale : number = Math.max(scale1, scale2);
            //         scale = Math.max(this.minScale, scale);
            //         return n1.divide(n2, scale, this.roundingPolicy);
            //     };
            // }
            // throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Error','java.lang.Object'] });
            return first / second;
        }

        /**
         * 
         * @param {Number} first
         * @param {Number} second
         * @return {Number}
         */
        public modulus(first : number, second : number) : number {
            // switch((ConservativeEngine.getCommonClassCode(first, second))) {
            // case 0 /* INTEGER */:
            //     {
            //         return /* intValue */(first|0) % /* intValue */(second|0);
            //     };
            // case 1 /* LONG */:
            //     {
            //         return /* longValue */first % /* longValue */second;
            //     };
            // case 2 /* FLOAT */:
            //     {
            //         return (<any>Math).fround(/* floatValue */first % /* floatValue */second);
            //     };
            // case 3 /* DOUBLE */:
            //     {
            //         return /* doubleValue */first % /* doubleValue */second;
            //     };
            // case 4 /* BIGINTEGER */:
            //     {
            //         let n1 : BigInteger = ConservativeEngine.toBigInteger(first);
            //         let n2 : BigInteger = ConservativeEngine.toBigInteger(second);
            //         return n1.mod(n2);
            //     };
            // case 5 /* BIGDECIMAL */:
            //     {
            //         throw new _MiscTemplateException("Can\'t calculate remainder on BigDecimals");
            //     };
            // }
            // throw new BugException();
            return first % second;
        }

        /**
         * 
         * @param {String} s
         * @return {Number}
         */
        public toNumber(s : string) : number {
            // let n : number = ArithmeticEngine.toBigDecimalOrDouble(s);
            // return (n != null && n instanceof <any>BigDecimal)?OptimizerUtil.optimizeNumberRepresentation(n):n;
            return s.indexOf('.') === -1? parseInt(s) : parseFloat(s);
        }

        static createClassCodesMap() : Map<any, any> {
            let map : Map<any, any> = <any>(new Map<any, any>());
            // let intcode : number = ConservativeEngine.INTEGER;
            // /* put */map.set(Number, intcode);
            // /* put */map.set(Number, intcode);
            // /* put */map.set(Number, intcode);
            // /* put */map.set(Number, ConservativeEngine.LONG);
            // /* put */map.set(Number, ConservativeEngine.FLOAT);
            // /* put */map.set(Number, ConservativeEngine.DOUBLE);
            // /* put */map.set(BigInteger, ConservativeEngine.BIGINTEGER);
            // /* put */map.set(BigDecimal, ConservativeEngine.BIGDECIMAL);
            return map;
        }

        static getClassCode(num : number) : number {
            try {
                return <number>/* get */ConservativeEngine.classCodes_$LI$().get((<any>num.constructor));
            } catch(e) {
                if(num == null) {
                    throw new _MiscTemplateException("The Number object was null.");
                } else {
                    throw new _MiscTemplateException("Unknown number type ", /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>num.constructor)));
                }
            }
        }

        static getCommonClassCode(num1 : number, num2 : number) : number {
            let c1 : number = ConservativeEngine.getClassCode(num1);
            let c2 : number = ConservativeEngine.getClassCode(num2);
            let c : number = c1 > c2?c1:c2;
            switch((c)) {
            case 2 /* FLOAT */:
                {
                    if((c1 < c2?c1:c2) === ConservativeEngine.LONG) {
                        return ConservativeEngine.DOUBLE;
                    }
                    break;
                }
                case 4 /* BIGINTEGER */:
                {
                    let min : number = c1 < c2?c1:c2;
                    if(min === ConservativeEngine.DOUBLE || min === ConservativeEngine.FLOAT) {
                        return ConservativeEngine.BIGDECIMAL;
                    }
                    break;
                }
            }
            return c;
        }

        static toBigInteger(num : number) : /*BigInteger*/number {
            // return (num != null && num instanceof <any>BigInteger)?<BigInteger>num:new BigInteger(num.toString());
            return num;
        }

        constructor() {
            super();
        }
    }
    ConservativeEngine["__class"] = "freemarker.core.ArithmeticEngine.ConservativeEngine";

}




ArithmeticEngine.ConservativeEngine.classCodes_$LI$();

ArithmeticEngine.CONSERVATIVE_ENGINE_$LI$();

ArithmeticEngine.BIGDECIMAL_ENGINE_$LI$();
