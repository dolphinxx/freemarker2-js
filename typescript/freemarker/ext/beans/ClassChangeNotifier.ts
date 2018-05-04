/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { ClassIntrospector } from './ClassIntrospector';

/**
 * Reports when the non-private interface of a class was changed to the subscribers.
 * @class
 */
export interface ClassChangeNotifier {
    /**
     * @param {ClassIntrospector} classIntrospector Should only be weak-referenced from the monitor object.
     */
    subscribe(classIntrospector : ClassIntrospector);
}


var __Function = Function;
