/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_Java8} from './_Java8';

/**
 * Used internally only, might changes without notice!
 * Used for accessing functionality that's only present in Java 8 or later.
 * @class
 */
export class _Java8Impl implements _Java8 {
    public static INSTANCE : _Java8; public static INSTANCE_$LI$() : _Java8 { if(_Java8Impl.INSTANCE == null) _Java8Impl.INSTANCE = new _Java8Impl(); return _Java8Impl.INSTANCE; };

    constructor() {
    }

    public isDefaultMethod(method : Function) : boolean {
        return method.isDefault();
    }
}
_Java8Impl["__class"] = "freemarker.core._Java8Impl";
_Java8Impl["__interfaces"] = ["freemarker.core._Java8"];






_Java8Impl.INSTANCE_$LI$();
