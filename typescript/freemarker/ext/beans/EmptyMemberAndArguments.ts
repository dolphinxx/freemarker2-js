/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _DelayedOrdinal } from '../../core/_DelayedOrdinal';
import { MaybeEmptyMemberAndArguments } from './MaybeEmptyMemberAndArguments';
import { EmptyCallableMemberDescriptor } from './EmptyCallableMemberDescriptor';

/**
 * Describes a failed member lookup. Instances of this must not be cached as instances may store the actual argument
 * values.
 * @extends MaybeEmptyMemberAndArguments
 * @class
 */
export class EmptyMemberAndArguments extends MaybeEmptyMemberAndArguments {
    static WRONG_NUMBER_OF_ARGUMENTS : EmptyMemberAndArguments; public static WRONG_NUMBER_OF_ARGUMENTS_$LI$() : EmptyMemberAndArguments { if(EmptyMemberAndArguments.WRONG_NUMBER_OF_ARGUMENTS == null) EmptyMemberAndArguments.WRONG_NUMBER_OF_ARGUMENTS = new EmptyMemberAndArguments("No compatible overloaded variation was found; wrong number of arguments.", true, null); return EmptyMemberAndArguments.WRONG_NUMBER_OF_ARGUMENTS; };

    /*private*/ errorDescription : any;

    /*private*/ numberOfArgumentsWrong : boolean;

    /*private*/ unwrappedArguments : Array<any>;

    constructor(errorDescription : any, numberOfArgumentsWrong : boolean, unwrappedArguments : Array) {
        super();
        if(this.errorDescription===undefined) this.errorDescription = null;
        if(this.numberOfArgumentsWrong===undefined) this.numberOfArgumentsWrong = false;
        if(this.unwrappedArguments===undefined) this.unwrappedArguments = null;
        this.errorDescription = errorDescription;
        this.numberOfArgumentsWrong = numberOfArgumentsWrong;
        this.unwrappedArguments = unwrappedArguments;
    }

    static noCompatibleOverload$int(unwrappableIndex : number) : EmptyMemberAndArguments {
        return new EmptyMemberAndArguments(["No compatible overloaded variation was found; can\'t convert (unwrap) the ", new _DelayedOrdinal(unwrappableIndex), " argument to the desired Java type."], false, null);
    }

    public static noCompatibleOverload$java_lang_Object_A(unwrappedArgs : Array) : EmptyMemberAndArguments {
        return new EmptyMemberAndArguments("No compatible overloaded variation was found; declared parameter types and argument value types mismatch.", false, unwrappedArgs);
    }

    public static noCompatibleOverload(unwrappedArgs? : any) : any {
        if(((unwrappedArgs != null && unwrappedArgs instanceof <any>Array && (unwrappedArgs.length==0 || unwrappedArgs[0] == null ||(unwrappedArgs[0] != null))) || unwrappedArgs === null)) {
            return <any>EmptyMemberAndArguments.noCompatibleOverload$java_lang_Object_A(unwrappedArgs);
        } else if(((typeof unwrappedArgs === 'number') || unwrappedArgs === null)) {
            return <any>EmptyMemberAndArguments.noCompatibleOverload$int(unwrappedArgs);
        } else throw new Error('invalid overload');
    }

    static ambiguous(unwrappedArgs : Array) : EmptyMemberAndArguments {
        return new EmptyMemberAndArguments("Multiple compatible overloaded variations were found with the same priority.", false, unwrappedArgs);
    }

    static from(emtpyMemberDesc : EmptyCallableMemberDescriptor, unwrappedArgs : Array) : MaybeEmptyMemberAndArguments {
        if(emtpyMemberDesc === EmptyCallableMemberDescriptor.NO_SUCH_METHOD_$LI$()) {
            return EmptyMemberAndArguments.noCompatibleOverload$java_lang_Object_A(unwrappedArgs);
        } else if(emtpyMemberDesc === EmptyCallableMemberDescriptor.AMBIGUOUS_METHOD_$LI$()) {
            return EmptyMemberAndArguments.ambiguous(unwrappedArgs);
        } else {
            throw Object.defineProperty(new Error("Unrecognized constant: " + emtpyMemberDesc), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
    }

    getErrorDescription() : any {
        return this.errorDescription;
    }

    /**
     * @return {Array} {@code null} if the error has occurred earlier than the full argument list was unwrapped.
     */
    getUnwrappedArguments() : Array {
        return this.unwrappedArguments;
    }

    public isNumberOfArgumentsWrong() : boolean {
        return this.numberOfArgumentsWrong;
    }
}
EmptyMemberAndArguments["__class"] = "freemarker.ext.beans.EmptyMemberAndArguments";



var __Function = Function;

EmptyMemberAndArguments.WRONG_NUMBER_OF_ARGUMENTS_$LI$();
