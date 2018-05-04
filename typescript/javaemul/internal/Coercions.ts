/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Private implementation class for GWT. This API should not be
 * considered public or stable.
 * @class
 */
export class Coercions {
    /**
     * Coerce js int to 32 bits.
     * Trick related to JS and lack of integer rollover.
     * {@see com.google.gwt.lang.Cast#narrow_int}
     * @param {number} value
     * @return {number}
     */
    public static ensureInt(value: number): number {
        return value | 0;
    }

    constructor() {
    }
}

Coercions["__class"] = "javaemul.internal.Coercions";