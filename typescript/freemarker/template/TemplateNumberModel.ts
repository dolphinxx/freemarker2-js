/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';

/**
 * "number" template language data type; an object that stores a number. There's only one numerical type as far as the
 * template language is concerned, but it can store its value using whatever Java number type. Making operations between
 * numbers (and so the coercion rules) is up to the {link ArithmeticEngine}.
 * <p>
 * <p>
 * Objects of this type should be immutable, that is, calling {link #getAsNumber()} should always return the same value
 * as for the first time.
 * @class
 */
export interface TemplateNumberModel extends TemplateModel {
    /**
     * Returns the numeric value. The return value must not be {@code null}.
     * 
     * @return {Number} the {link Number} instance associated with this number model.
     */
    getAsNumber() : number;
}



