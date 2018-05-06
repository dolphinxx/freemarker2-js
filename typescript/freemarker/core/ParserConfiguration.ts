/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Version} from '../template/Version';
import {ArithmeticEngine} from './ArithmeticEngine';

/**
 * <b>Don't implement this interface yourself</b>; use the existing implementation(s). This interface is implemented by
 * classes that hold settings that affect parsing. New parser settings can be added in new FreeMarker versions, which
 * will break your implementation.
 * 
 * @since 2.3.24
 * @class
 */
export interface ParserConfiguration {
    /**
     * See {link Configuration#getTagSyntax()}.
     * @return {number}
     */
    getTagSyntax() : number;

    /**
     * See {link Configuration#getInterpolationSyntax()}.
     * 
     * @since 2.3.28
     * @return {number}
     */
    getInterpolationSyntax() : number;

    /**
     * See {link Configuration#getNamingConvention()}.
     * @return {number}
     */
    getNamingConvention() : number;

    /**
     * See {link Configuration#getWhitespaceStripping()}.
     * @return {boolean}
     */
    getWhitespaceStripping() : boolean;

    /**
     * Overlaps with {link Configurable#getArithmeticEngine()}; the parser needs this for creating numerical literals.
     * @return {ArithmeticEngine}
     */
    getArithmeticEngine() : ArithmeticEngine;

    /**
     * See {link Configuration#getStrictSyntaxMode()}.
     * @return {boolean}
     */
    getStrictSyntaxMode() : boolean;

    /**
     * See {link Configuration#getAutoEscapingPolicy()}.
     * @return {number}
     */
    getAutoEscapingPolicy() : number;

    getOutputFormat(name? : any) : any;

    /**
     * See {link Configuration#getRecognizeStandardFileExtensions()}.
     * @return {boolean}
     */
    getRecognizeStandardFileExtensions() : boolean;

    /**
     * See {link Configuration#getIncompatibleImprovements()}.
     * @return {Version}
     */
    getIncompatibleImprovements() : Version;

    /**
     * See {link Configuration#getTabSize()}.
     * 
     * @since 2.3.25
     * @return {number}
     */
    getTabSize() : number;
}



