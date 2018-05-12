export abstract class DateFormat {

    /**
     * Formats a Date into a date/time string.
     * @param date the time value to be formatted into a time string.
     * @return the formatted time string.
     */
    public abstract format(date: Date): string;

    public abstract parse(text:string): Date;
}
DateFormat['__class'] = 'java.text.DateFormat';