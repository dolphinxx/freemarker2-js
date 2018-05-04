/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { MaybeEmptyCallableMemberDescriptor } from './MaybeEmptyCallableMemberDescriptor';

/**
 * Represents that no member was chosen. Why it wasn't is represented by the two singleton instances,
 * {link #NO_SUCH_METHOD} and {link #AMBIGUOUS_METHOD}. (Note that instances of these are cached associated with the
 * argument types, thus it shouldn't store details that are specific to the actual argument values. In fact, it better
 * remains a set of singletons.)
 * @extends MaybeEmptyCallableMemberDescriptor
 * @class
 */
export class EmptyCallableMemberDescriptor extends MaybeEmptyCallableMemberDescriptor {
    static NO_SUCH_METHOD : EmptyCallableMemberDescriptor; public static NO_SUCH_METHOD_$LI$() : EmptyCallableMemberDescriptor { if(EmptyCallableMemberDescriptor.NO_SUCH_METHOD == null) EmptyCallableMemberDescriptor.NO_SUCH_METHOD = new EmptyCallableMemberDescriptor(); return EmptyCallableMemberDescriptor.NO_SUCH_METHOD; };

    static AMBIGUOUS_METHOD : EmptyCallableMemberDescriptor; public static AMBIGUOUS_METHOD_$LI$() : EmptyCallableMemberDescriptor { if(EmptyCallableMemberDescriptor.AMBIGUOUS_METHOD == null) EmptyCallableMemberDescriptor.AMBIGUOUS_METHOD = new EmptyCallableMemberDescriptor(); return EmptyCallableMemberDescriptor.AMBIGUOUS_METHOD; };

    constructor() {
        super();
    }
}
EmptyCallableMemberDescriptor["__class"] = "freemarker.ext.beans.EmptyCallableMemberDescriptor";



var __Function = Function;

EmptyCallableMemberDescriptor.AMBIGUOUS_METHOD_$LI$();

EmptyCallableMemberDescriptor.NO_SUCH_METHOD_$LI$();
