/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_Java6} from './_Java6';

/**
 * Used internally only, might changes without notice!
 * Used for accessing functionality that's only present in Java 6 or later.
 * @class
 */
export class _Java6Impl implements _Java6 {
    public static INSTANCE : _Java6; public static INSTANCE_$LI$() : _Java6 { if(_Java6Impl.INSTANCE == null) _Java6Impl.INSTANCE = new _Java6Impl(); return _Java6Impl.INSTANCE; };

    constructor() {
    }

    public setRoundingMode(df : DecimalFormat, roundingMode : RoundingMode) {
        df.setRoundingMode(roundingMode);
    }

    public setExponentSeparator(dfs : DecimalFormatSymbols, exponentSeparator : string) {
        dfs.setExponentSeparator(exponentSeparator);
    }
}
_Java6Impl["__class"] = "freemarker.core._Java6Impl";
_Java6Impl["__interfaces"] = ["freemarker.core._Java6"];






_Java6Impl.INSTANCE_$LI$();
