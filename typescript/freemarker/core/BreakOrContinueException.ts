/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { FlowControlException } from './FlowControlException';

/**
 * Used for implementing #break and #continue.
 * @extends FlowControlException
 * @class
 */
export class BreakOrContinueException extends FlowControlException {
    static BREAK_INSTANCE : BreakOrContinueException; public static BREAK_INSTANCE_$LI$() : BreakOrContinueException { if(BreakOrContinueException.BREAK_INSTANCE == null) BreakOrContinueException.BREAK_INSTANCE = new BreakOrContinueException(); return BreakOrContinueException.BREAK_INSTANCE; };

    static CONTINUE_INSTANCE : BreakOrContinueException; public static CONTINUE_INSTANCE_$LI$() : BreakOrContinueException { if(BreakOrContinueException.CONTINUE_INSTANCE == null) BreakOrContinueException.CONTINUE_INSTANCE = new BreakOrContinueException(); return BreakOrContinueException.CONTINUE_INSTANCE; };

    constructor() {
        super();
        (<any>Object).setPrototypeOf(this, BreakOrContinueException.prototype);
    }
}
BreakOrContinueException["__class"] = "freemarker.core.BreakOrContinueException";
BreakOrContinueException["__interfaces"] = ["java.io.Serializable"];





BreakOrContinueException.CONTINUE_INSTANCE_$LI$();

BreakOrContinueException.BREAK_INSTANCE_$LI$();
