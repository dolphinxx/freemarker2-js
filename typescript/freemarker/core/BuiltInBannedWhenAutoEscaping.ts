/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SpecialBuiltIn } from './SpecialBuiltIn';

/**
 * A string built-in whose usage is banned when auto-escaping with a markup-output format is active.
 * This is just a marker; the actual checking is in {@code FTL.jj}.
 * @extends SpecialBuiltIn
 * @class
 */
export abstract class BuiltInBannedWhenAutoEscaping extends SpecialBuiltIn {
    constructor() {
        super();
    }
}
BuiltInBannedWhenAutoEscaping["__class"] = "freemarker.core.BuiltInBannedWhenAutoEscaping";
BuiltInBannedWhenAutoEscaping["__interfaces"] = ["java.lang.Cloneable"];




