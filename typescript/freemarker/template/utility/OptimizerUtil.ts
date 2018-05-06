/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * 
 * @class
 */
export class OptimizerUtil {
    static INTEGER_MIN : BigInteger; public static INTEGER_MIN_$LI$() : BigInteger { if(OptimizerUtil.INTEGER_MIN == null) OptimizerUtil.INTEGER_MIN = new BigInteger(/* toString */(''+(Number.MIN_VALUE))); return OptimizerUtil.INTEGER_MIN; };

    static INTEGER_MAX : BigInteger; public static INTEGER_MAX_$LI$() : BigInteger { if(OptimizerUtil.INTEGER_MAX == null) OptimizerUtil.INTEGER_MAX = new BigInteger(/* toString */(''+(Number.MAX_VALUE))); return OptimizerUtil.INTEGER_MAX; };

    static LONG_MIN : BigInteger; public static LONG_MIN_$LI$() : BigInteger { if(OptimizerUtil.LONG_MIN == null) OptimizerUtil.LONG_MIN = new BigInteger(/* toString */(''+(Number.MIN_VALUE))); return OptimizerUtil.LONG_MIN; };

    static LONG_MAX : BigInteger; public static LONG_MAX_$LI$() : BigInteger { if(OptimizerUtil.LONG_MAX == null) OptimizerUtil.LONG_MAX = new BigInteger(/* toString */(''+(Number.MAX_VALUE))); return OptimizerUtil.LONG_MAX; };

    constructor() {
    }

    public static optimizeListStorage(list : Array<any>) : Array<any> {
        switch((/* size */(<number>list.length))) {
        case 0:
            {
                return Collections.EMPTY_LIST;
            }
            case 1:
            {
                return /* singletonList */[/* get */list[0]];
            }
            default:
            {
                if(list != null && (list instanceof Array)) {
                    (<Array<any>><any>list).trimToSize();
                }
                return list;
            }
        }
    }

    /**
     * This is needed to reverse the extreme conversions in arithmetic
     * operations so that numbers can be meaningfully used with models that
     * don't know what to do with a BigDecimal. Of course, this will make
     * impossible for these models (i.e. Jython) to receive a BigDecimal even if
     * it was originally placed as such in the data model. However, since
     * arithmetic operations aggressively erase the information regarding the
     * original number type, we have no other choice to ensure expected operation
     * in majority of cases.
     * @param {Number} number
     * @return {Number}
     */
    public static optimizeNumberRepresentation(number : number) : number {
        if(number != null && number instanceof <any>BigDecimal) {
            let bd : BigDecimal = <BigDecimal>number;
            if(bd.scale() === 0) {
                number = bd.unscaledValue();
            } else {
                let d : number = bd.doubleValue();
                if(d !== Number.POSITIVE_INFINITY && d !== Number.NEGATIVE_INFINITY) {
                    return d;
                }
            }
        }
        if(number != null && number instanceof <any>BigInteger) {
            let bi : BigInteger = <BigInteger>number;
            if(bi.compareTo(OptimizerUtil.INTEGER_MAX_$LI$()) <= 0 && bi.compareTo(OptimizerUtil.INTEGER_MIN_$LI$()) >= 0) {
                return bi.intValue();
            }
            if(bi.compareTo(OptimizerUtil.LONG_MAX_$LI$()) <= 0 && bi.compareTo(OptimizerUtil.LONG_MIN_$LI$()) >= 0) {
                return bi.longValue();
            }
        }
        return number;
    }
}
OptimizerUtil["__class"] = "freemarker.template.utility.OptimizerUtil";





OptimizerUtil.LONG_MAX_$LI$();

OptimizerUtil.LONG_MIN_$LI$();

OptimizerUtil.INTEGER_MAX_$LI$();

OptimizerUtil.INTEGER_MIN_$LI$();
