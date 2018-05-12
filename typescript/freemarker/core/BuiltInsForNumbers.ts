/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {SimpleDate} from '../template/SimpleDate';
import {SimpleNumber} from '../template/SimpleNumber';
import {SimpleScalar} from '../template/SimpleScalar';
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateDateModel} from '../template/TemplateDateModel';
import {TemplateModel} from '../template/TemplateModel';
import {NumberUtil} from '../template/utility/NumberUtil';
import {StringUtil} from '../template/utility/StringUtil';
import {BuiltInForNumber} from './BuiltInForNumber';
import {_TemplateModelException} from './_TemplateModelException';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {EvalUtil} from './EvalUtil';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * A holder for builtins that operate exclusively on number left-hand value.
 * @class
 */
export class BuiltInsForNumbers {
    static safeToLong(num : number) : number {
        if(typeof num === 'number') {
            let d : number = Math.round(/* doubleValue */num);
            if(d > Number.MAX_VALUE || d < Number.MIN_VALUE) {
                throw new _TemplateModelException("Number doesn\'t fit into a 64 bit signed integer (long): ", d);
            } else {
                return (n => n<0?Math.ceil(n):Math.floor(n))(<number>d);
            }
        } else if(typeof num === 'number') {
            let f : number = Math.round(/* floatValue */num);
            if(f > Number.MAX_VALUE || f < Number.MIN_VALUE) {
                throw new _TemplateModelException("Number doesn\'t fit into a 64 bit signed integer (long): ", f);
            } else {
                return (n => n<0?Math.ceil(n):Math.floor(n))(<number>f);
            }
        } else if(num != null && num instanceof <any>BigDecimal) {
            let bd : BigDecimal = (<BigDecimal>num).setScale(0, BigDecimal.ROUND_HALF_UP);
            if(bd.compareTo(BuiltInsForNumbers.BIG_DECIMAL_LONG_MAX_$LI$()) > 0 || bd.compareTo(BuiltInsForNumbers.BIG_DECIMAL_LONG_MIN_$LI$()) < 0) {
                throw new _TemplateModelException("Number doesn\'t fit into a 64 bit signed integer (long): ", bd);
            } else {
                return bd.longValue();
            }
        } else if(num != null && num instanceof <any>BigInteger) {
            let bi : BigInteger = <BigInteger>num;
            if(bi.compareTo(BuiltInsForNumbers.BIG_INTEGER_LONG_MAX_$LI$()) > 0 || bi.compareTo(BuiltInsForNumbers.BIG_INTEGER_LONG_MIN_$LI$()) < 0) {
                throw new _TemplateModelException("Number doesn\'t fit into a 64 bit signed integer (long): ", bi);
            } else {
                return bi.longValue();
            }
        } else if((typeof num === 'number') || (typeof num === 'number') || (typeof num === 'number') || (typeof num === 'number')) {
            return /* longValue */num;
        } else {
            throw new _TemplateModelException("Unsupported number type: ", (<any>num.constructor));
        }
    }

    static BIG_DECIMAL_ONE : BigDecimal; public static BIG_DECIMAL_ONE_$LI$() : BigDecimal { if(BuiltInsForNumbers.BIG_DECIMAL_ONE == null) BuiltInsForNumbers.BIG_DECIMAL_ONE = new BigDecimal("1"); return BuiltInsForNumbers.BIG_DECIMAL_ONE; };

    static BIG_DECIMAL_LONG_MIN : BigDecimal; public static BIG_DECIMAL_LONG_MIN_$LI$() : BigDecimal { if(BuiltInsForNumbers.BIG_DECIMAL_LONG_MIN == null) BuiltInsForNumbers.BIG_DECIMAL_LONG_MIN = BigDecimal.valueOf(Number.MIN_VALUE); return BuiltInsForNumbers.BIG_DECIMAL_LONG_MIN; };

    static BIG_DECIMAL_LONG_MAX : BigDecimal; public static BIG_DECIMAL_LONG_MAX_$LI$() : BigDecimal { if(BuiltInsForNumbers.BIG_DECIMAL_LONG_MAX == null) BuiltInsForNumbers.BIG_DECIMAL_LONG_MAX = BigDecimal.valueOf(Number.MAX_VALUE); return BuiltInsForNumbers.BIG_DECIMAL_LONG_MAX; };

    static BIG_INTEGER_LONG_MIN : BigInteger; public static BIG_INTEGER_LONG_MIN_$LI$() : BigInteger { if(BuiltInsForNumbers.BIG_INTEGER_LONG_MIN == null) BuiltInsForNumbers.BIG_INTEGER_LONG_MIN = BigInteger.valueOf(Number.MIN_VALUE); return BuiltInsForNumbers.BIG_INTEGER_LONG_MIN; };

    static BIG_INTEGER_LONG_MAX : BigInteger; public static BIG_INTEGER_LONG_MAX_$LI$() : BigInteger { if(BuiltInsForNumbers.BIG_INTEGER_LONG_MAX == null) BuiltInsForNumbers.BIG_INTEGER_LONG_MAX = BigInteger.valueOf(Number.MAX_VALUE); return BuiltInsForNumbers.BIG_INTEGER_LONG_MAX; };

    constructor() {
    }
}
BuiltInsForNumbers["__class"] = "freemarker.core.BuiltInsForNumbers";


export namespace BuiltInsForNumbers {

    export abstract class abcBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            let n : number;
            try {
                n = NumberUtil.toIntExact(num);
            } catch(e) {
                throw new _TemplateModelException(this.target, "The left side operand value isn\'t compatible with ?", this.key, ": ", e.message);
            }
            if(n <= 0) {
                throw new _TemplateModelException(this.target, "The left side operand of to ?", this.key, " must be at least 1, but was ", n, ".");
            }
            return new SimpleScalar(this.toABC(n));
        }

        abstract toABC(n : number) : string;

        constructor() {
            super();
        }
    }
    abcBI["__class"] = "freemarker.core.BuiltInsForNumbers.abcBI";
    abcBI["__interfaces"] = ["java.lang.Cloneable"];



    export class absBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            if(typeof num === 'number') {
                let n : number = /* intValue */(num|0);
                if(n < 0) {
                    return new SimpleNumber(-n);
                } else {
                    return model;
                }
            } else if(num != null && num instanceof <any>BigDecimal) {
                let n : BigDecimal = <BigDecimal>num;
                if(n.signum() < 0) {
                    return new SimpleNumber(n.negate());
                } else {
                    return model;
                }
            } else if(typeof num === 'number') {
                let n : number = /* doubleValue */num;
                if(n < 0) {
                    return new SimpleNumber(-n);
                } else {
                    return model;
                }
            } else if(typeof num === 'number') {
                let n : number = /* floatValue */num;
                if(n < 0) {
                    return new SimpleNumber(-n);
                } else {
                    return model;
                }
            } else if(typeof num === 'number') {
                let n : number = /* longValue */num;
                if(n < 0) {
                    return new SimpleNumber(-n);
                } else {
                    return model;
                }
            } else if(typeof num === 'number') {
                let n : number = /* shortValue */(num|0);
                if(n < 0) {
                    return new SimpleNumber(-n);
                } else {
                    return model;
                }
            } else if(typeof num === 'number') {
                let n : number = /* byteValue */(num|0);
                if(n < 0) {
                    return new SimpleNumber(-n);
                } else {
                    return model;
                }
            } else if(num != null && num instanceof <any>BigInteger) {
                let n : BigInteger = <BigInteger>num;
                if(n.signum() < 0) {
                    return new SimpleNumber(n.negate());
                } else {
                    return model;
                }
            } else {
                throw new _TemplateModelException("Unsupported number class: ", (<any>num.constructor));
            }
        }

        constructor() {
            super();
        }
    }
    absBI["__class"] = "freemarker.core.BuiltInsForNumbers.absBI";
    absBI["__interfaces"] = ["java.lang.Cloneable"];



    export class byteBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            if(typeof num === 'number') {
                return model;
            }
            return new SimpleNumber(/* byteValue */(num|0));
        }

        constructor() {
            super();
        }
    }
    byteBI["__class"] = "freemarker.core.BuiltInsForNumbers.byteBI";
    byteBI["__interfaces"] = ["java.lang.Cloneable"];



    export class ceilingBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            return new SimpleNumber(new BigDecimal(/* doubleValue */num).divide(BuiltInsForNumbers.BIG_DECIMAL_ONE_$LI$(), 0, BigDecimal.ROUND_CEILING));
        }

        constructor() {
            super();
        }
    }
    ceilingBI["__class"] = "freemarker.core.BuiltInsForNumbers.ceilingBI";
    ceilingBI["__interfaces"] = ["java.lang.Cloneable"];



    export class doubleBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            if(typeof num === 'number') {
                return model;
            }
            return new SimpleNumber(/* doubleValue */num);
        }

        constructor() {
            super();
        }
    }
    doubleBI["__class"] = "freemarker.core.BuiltInsForNumbers.doubleBI";
    doubleBI["__interfaces"] = ["java.lang.Cloneable"];



    export class floatBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            if(typeof num === 'number') {
                return model;
            }
            return new SimpleNumber(/* floatValue */num);
        }

        constructor() {
            super();
        }
    }
    floatBI["__class"] = "freemarker.core.BuiltInsForNumbers.floatBI";
    floatBI["__interfaces"] = ["java.lang.Cloneable"];



    export class floorBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            return new SimpleNumber(new BigDecimal(/* doubleValue */num).divide(BuiltInsForNumbers.BIG_DECIMAL_ONE_$LI$(), 0, BigDecimal.ROUND_FLOOR));
        }

        constructor() {
            super();
        }
    }
    floorBI["__class"] = "freemarker.core.BuiltInsForNumbers.floorBI";
    floorBI["__interfaces"] = ["java.lang.Cloneable"];



    export class intBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            if(typeof num === 'number') {
                return model;
            }
            return new SimpleNumber(/* intValue */(num|0));
        }

        constructor() {
            super();
        }
    }
    intBI["__class"] = "freemarker.core.BuiltInsForNumbers.intBI";
    intBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_infiniteBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            return NumberUtil.isInfinite(num)?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_infiniteBI["__class"] = "freemarker.core.BuiltInsForNumbers.is_infiniteBI";
    is_infiniteBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_nanBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            return NumberUtil.isNaN(num)?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_nanBI["__class"] = "freemarker.core.BuiltInsForNumbers.is_nanBI";
    is_nanBI["__interfaces"] = ["java.lang.Cloneable"];



    export class longBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(!(model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateNumberModel")) && (model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateDateModel"))) {
                let date : Date = EvalUtil.modelToDate(<TemplateDateModel><any>model, this.target);
                return new SimpleNumber(date.getTime());
            } else {
                let num : number = this.target.modelToNumber(model, env);
                if(typeof num === 'number') {
                    return model;
                }
                return new SimpleNumber(/* longValue */num);
            }
        }

        constructor() {
            super();
        }
    }
    longBI["__class"] = "freemarker.core.BuiltInsForNumbers.longBI";
    longBI["__interfaces"] = ["java.lang.Cloneable"];



    export class number_to_dateBI extends BuiltInForNumber {
        dateType : number;

        constructor(dateType : number) {
            super();
            if(this.dateType===undefined) this.dateType = 0;
            this.dateType = dateType;
        }

        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            return new SimpleDate(new Date(BuiltInsForNumbers.safeToLong(num)), this.dateType);
        }
    }
    number_to_dateBI["__class"] = "freemarker.core.BuiltInsForNumbers.number_to_dateBI";
    number_to_dateBI["__interfaces"] = ["java.lang.Cloneable"];



    export class roundBI extends BuiltInForNumber {
        static half : BigDecimal; public static half_$LI$() : BigDecimal { if(roundBI.half == null) roundBI.half = new BigDecimal("0.5"); return roundBI.half; };

        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            return new SimpleNumber(new BigDecimal(/* doubleValue */num).add(roundBI.half_$LI$()).divide(BuiltInsForNumbers.BIG_DECIMAL_ONE_$LI$(), 0, BigDecimal.ROUND_FLOOR));
        }

        constructor() {
            super();
        }
    }
    roundBI["__class"] = "freemarker.core.BuiltInsForNumbers.roundBI";
    roundBI["__interfaces"] = ["java.lang.Cloneable"];



    export class shortBI extends BuiltInForNumber {
        /**
         * 
         * @param {Number} num
         * @param {*} model
         * @return {*}
         */
        calculateResult(num : number, model : TemplateModel) : TemplateModel {
            if(typeof num === 'number') {
                return model;
            }
            return new SimpleNumber(/* shortValue */(num|0));
        }

        constructor() {
            super();
        }
    }
    shortBI["__class"] = "freemarker.core.BuiltInsForNumbers.shortBI";
    shortBI["__interfaces"] = ["java.lang.Cloneable"];



    export class lower_abcBI extends BuiltInsForNumbers.abcBI {
        /**
         * 
         * @param {number} n
         * @return {String}
         */
        toABC(n : number) : string {
            return StringUtil.toLowerABC(n);
        }

        constructor() {
            super();
        }
    }
    lower_abcBI["__class"] = "freemarker.core.BuiltInsForNumbers.lower_abcBI";
    lower_abcBI["__interfaces"] = ["java.lang.Cloneable"];



    export class upper_abcBI extends BuiltInsForNumbers.abcBI {
        /**
         * 
         * @param {number} n
         * @return {String}
         */
        toABC(n : number) : string {
            return StringUtil.toUpperABC(n);
        }

        constructor() {
            super();
        }
    }
    upper_abcBI["__class"] = "freemarker.core.BuiltInsForNumbers.upper_abcBI";
    upper_abcBI["__interfaces"] = ["java.lang.Cloneable"];


}




BuiltInsForNumbers.roundBI.half_$LI$();

BuiltInsForNumbers.BIG_INTEGER_LONG_MAX_$LI$();

BuiltInsForNumbers.BIG_INTEGER_LONG_MIN_$LI$();

BuiltInsForNumbers.BIG_DECIMAL_LONG_MAX_$LI$();

BuiltInsForNumbers.BIG_DECIMAL_LONG_MIN_$LI$();

BuiltInsForNumbers.BIG_DECIMAL_ONE_$LI$();
