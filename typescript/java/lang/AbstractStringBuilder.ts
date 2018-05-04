/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
/**
 * A base class to share implementation between {@link StringBuffer} and {@link StringBuilder}.
 * <p>
 * Most methods will give expected performance results. Exception is {@link #setCharAt(int, char)},
 * which is O(n), and thus should not be used many times on the same <code>StringBuffer</code>.
 * @param {string} string
 * @class
 */
export abstract class AbstractStringBuilder {
    string: string;

    public constructor(string: string) {
        this.string = null;
        this.string = string;
    }

    public length(): number {
        return this.string.length;
    }

    public setLength(newLength: number) {
        let oldLength: number = this.length();
        if (newLength < oldLength) {
            this.string = this.string.substring(0, newLength);
        } else if (newLength > oldLength) {
            this.string += /* valueOf */new String(new Array(newLength - oldLength)).toString();
        }
    }

    public capacity(): number {
        return javaemul.internal.IntegerHelper.MAX_VALUE;
    }

    public ensureCapacity(ignoredCapacity: number) {
    }

    public trimToSize() {
    }

    public charAt(index: number): string {
        return this.string.charAt(index);
    }

    public getChars(srcStart: number, srcEnd: number, dst: string[], dstStart: number) {
        javaemul.internal.InternalPreconditions.checkStringBounds(srcStart, srcEnd, this.length());
        javaemul.internal.InternalPreconditions.checkStringBounds(dstStart, dstStart + (srcEnd - srcStart), dst.length);
        while ((srcStart < srcEnd)) {
            dst[dstStart++] = this.string.charAt(srcStart++);
        }
        ;
    }

    /**
     * Warning! This method is <b>much</b> slower than the JRE implementation. If you need to do
     * character level manipulation, you are strongly advised to use a char[] directly.
     * @param {number} index
     * @param {string} x
     */
    public setCharAt(index: number, x: string) {
        this.replace0(index, index + 1, /* valueOf */new String(x).toString());
    }

    public subSequence(start: number, end: number): any {
        return this.string.substring(start, end);
    }

    public substring$int(begin: number): string {
        return this.string.substring(begin);
    }

    public substring$int$int(begin: number, end: number): string {
        return this.string.substring(begin, end);
    }

    public substring(begin?: any, end?: any): any {
        if (((typeof begin === 'number') || begin === null) && ((typeof end === 'number') || end === null)) {
            return <any>this.substring$int$int(begin, end);
        } else if (((typeof begin === 'number') || begin === null) && end === undefined) {
            return <any>this.substring$int(begin);
        } else throw new Error('invalid overload');
    }

    public indexOf$java_lang_String(x: string): number {
        return this.string.indexOf(x);
    }

    public indexOf$java_lang_String$int(x: string, start: number): number {
        return this.string.indexOf(x, start);
    }

    public indexOf(x?: any, start?: any): any {
        if (((typeof x === 'string') || x === null) && ((typeof start === 'number') || start === null)) {
            return <any>this.indexOf$java_lang_String$int(x, start);
        } else if (((typeof x === 'string') || x === null) && start === undefined) {
            return <any>this.indexOf$java_lang_String(x);
        } else throw new Error('invalid overload');
    }

    public lastIndexOf$java_lang_String(s: string): number {
        return this.string.lastIndexOf(s);
    }

    public lastIndexOf$java_lang_String$int(s: string, start: number): number {
        return this.string.lastIndexOf(s, start);
    }

    public lastIndexOf(s?: any, start?: any): any {
        if (((typeof s === 'string') || s === null) && ((typeof start === 'number') || start === null)) {
            return <any>this.lastIndexOf$java_lang_String$int(s, start);
        } else if (((typeof s === 'string') || s === null) && start === undefined) {
            return <any>this.lastIndexOf$java_lang_String(s);
        } else throw new Error('invalid overload');
    }

    /**
     *
     * @return {string}
     */
    public toString(): string {
        return this.string;
    }

    append0(x: any, start: number, end: number) {
        if (x == null) {
            x = "null";
        }
        this.string += /* subSequence */x.substring(start, end);
    }

    appendCodePoint0(x: number) {
        this.string += /* valueOf */new String(/* toChars */String.fromCharCode(x)).toString();
    }

    replace0(start: number, end: number, toInsert: string) {
        this.string = this.string.substring(0, start) + toInsert + this.string.substring(end);
    }

    reverse0() {
        let length: number = this.string.length;
        if (length <= 1) {
            return;
        }
        let buffer: string[] = new Array(length);
        buffer[0] = this.string.charAt(length - 1);
        for (let i: number = 1; i < length; i++) {
            buffer[i] = this.string.charAt(length - 1 - i);
            if (javaemul.internal.CharacterHelper.isSurrogatePair(buffer[i], buffer[i - 1])) {
                AbstractStringBuilder.swap(buffer, i - 1, i);
            }
        }
        ;
        this.string = <string>new String(buffer);
    }

    /*private*/
    static swap(buffer: string[], f: number, s: number) {
        let tmp: string = buffer[f];
        buffer[f] = buffer[s];
        buffer[s] = tmp;
    }
}

AbstractStringBuilder["__class"] = "java.lang.AbstractStringBuilder";
