export abstract class NumberFormat {
    /**
     * Sole constructor.  (For invocation by subclass constructors, typically
     * implicit.)
     */
    protected constructor() {
    }

    /**
     * Specialization of format.
     *
     * @param number the long number to format
     * @return the formatted String
     * @exception        ArithmeticException if rounding is needed with rounding
     *                   mode being set to RoundingMode.UNNECESSARY
     * @see java.text.Format#format
     */
    public abstract format(number: number): string;
}

NumberFormat['__class'] = 'java.text.NumberFormat';