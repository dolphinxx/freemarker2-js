import {RuntimeException} from "./RuntimeException";

export class ArithmeticException extends RuntimeException {
    public constructor(message?: string) {
        if (arguments.length === 1) {
            super(arguments[0]);
            return;
        }
        super();
    }

}

ArithmeticException['__class'] = 'java.lang.ArithmeticException';