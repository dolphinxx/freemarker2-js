/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * An object that has another older version that's used below a certain
 * {link Configuration#setIncompatibleImprovements(Version) InCompatible Improvements} version.
 * @class
 */
export interface ICIChainMember {
    /**
     * The minimum ICE version after which this object can be used.
     * @return {number}
     */
    getMinimumICIVersion() : number;

    /**
     * The closest object used for ICE lower than {link #getMinimumICIVersion()}.
     * @return {Object}
     */
    getPreviousICIChainMember() : any;
}


var __Function = Function;
