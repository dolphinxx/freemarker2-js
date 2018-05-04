/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Implemented by objects that can be made <em>permanently</em> read-only. This usually meant to freeze the
 * configuration JavaBean properties, so that the object can be safely shared among independently developed components.
 * 
 * @since 2.3.21
 * @class
 */
export interface WriteProtectable {
    /**
     * Makes this object permanently read-only.
     */
    writeProtect();

    isWriteProtected() : boolean;
}


var __Function = Function;
