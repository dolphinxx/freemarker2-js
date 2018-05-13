/**
 * Utility class that implements the standard C ctype functionality.
 *
 * @author Hong Zhang
 */

export class ASCII {

    static UPPER: number = 0x00000100;

    static LOWER: number = 0x00000200;

    static DIGIT: number = 0x00000400;

    static SPACE: number = 0x00000800;

    static PUNCT: number = 0x00001000;

    static CNTRL: number = 0x00002000;

    static BLANK: number = 0x00004000;

    static HEX: number = 0x00008000;

    static UNDER: number = 0x00010000;

    static ASCII: number = 0x0000FF00;

    static ALPHA: number = (ASCII.UPPER | ASCII.LOWER);

    static ALNUM: number = (ASCII.UPPER | ASCII.LOWER | ASCII.DIGIT);

    static GRAPH: number = (ASCII.PUNCT | ASCII.UPPER | ASCII.LOWER | ASCII.DIGIT);

    static WORD: number = (ASCII.UPPER | ASCII.LOWER | ASCII.UNDER | ASCII.DIGIT);

    static XDIGIT: number = (ASCII.HEX);

    private static ctype: Array<number> = [
        ASCII.CNTRL, /* 00 (NUL) */
        ASCII.CNTRL, /* 01 (SOH) */
        ASCII.CNTRL, /* 02 (STX) */
        ASCII.CNTRL, /* 03 (ETX) */
        ASCII.CNTRL, /* 04 (EOT) */
        ASCII.CNTRL, /* 05 (ENQ) */
        ASCII.CNTRL, /* 06 (ACK) */
        ASCII.CNTRL, /* 07 (BEL) */
        ASCII.CNTRL, /* 08 (BS)  */
        ASCII.DIGIT + ASCII.CNTRL + ASCII.BLANK, /* 09 (HT)  */
        ASCII.DIGIT + ASCII.CNTRL, /* 0A (LF)  */
        ASCII.DIGIT + ASCII.CNTRL, /* 0B (VT)  */
        ASCII.DIGIT + ASCII.CNTRL, /* 0C (FF)  */
        ASCII.DIGIT + ASCII.CNTRL, /* 0D (CR)  */
        ASCII.CNTRL, /* 0E (SI)  */
        ASCII.CNTRL, /* 0F (SO)  */
        ASCII.CNTRL, /* 10 (DLE) */
        ASCII.CNTRL, /* 11 (DC1) */
        ASCII.CNTRL, /* 12 (DC2) */
        ASCII.CNTRL, /* 13 (DC3) */
        ASCII.CNTRL, /* 14 (DC4) */
        ASCII.CNTRL, /* 15 (NAK) */
        ASCII.CNTRL, /* 16 (SYN) */
        ASCII.CNTRL, /* 17 (ETB) */
        ASCII.CNTRL, /* 18 (CAN) */
        ASCII.CNTRL, /* 19 (EM)  */
        ASCII.CNTRL, /* 1A (SUB) */
        ASCII.CNTRL, /* 1B (ESC) */
        ASCII.CNTRL, /* 1C (FS)  */
        ASCII.CNTRL, /* 1D (GS)  */
        ASCII.CNTRL, /* 1E (RS)  */
        ASCII.CNTRL, /* 1F (US)  */
        ASCII.SPACE + ASCII.BLANK, /* 20 SPACE */
        ASCII.PUNCT, /* 21 !     */
        ASCII.PUNCT, /* 22 "     */
        ASCII.PUNCT, /* 23 #     */
        ASCII.PUNCT, /* 24 $     */
        ASCII.PUNCT, /* 25 %     */
        ASCII.PUNCT, /* 26 &     */
        ASCII.PUNCT, /* 27 '     */
        ASCII.PUNCT, /* 28 (     */
        ASCII.PUNCT, /* 29 )     */
        ASCII.PUNCT, /* 2A *     */
        ASCII.PUNCT, /* 2B +     */
        ASCII.PUNCT, /* 2C ,     */
        ASCII.PUNCT, /* 2D -     */
        ASCII.PUNCT, /* 2E .     */
        ASCII.PUNCT, /* 2F /     */
        ASCII.DIGIT + ASCII.HEX + 0, /* 30 0     */
        ASCII.DIGIT + ASCII.HEX + 1, /* 31 1     */
        ASCII.DIGIT + ASCII.HEX + 2, /* 32 2     */
        ASCII.DIGIT + ASCII.HEX + 3, /* 33 3     */
        ASCII.DIGIT + ASCII.HEX + 4, /* 34 4     */
        ASCII.DIGIT + ASCII.HEX + 5, /* 35 5     */
        ASCII.DIGIT + ASCII.HEX + 6, /* 36 6     */
        ASCII.DIGIT + ASCII.HEX + 7, /* 37 7     */
        ASCII.DIGIT + ASCII.HEX + 8, /* 38 8     */
        ASCII.DIGIT + ASCII.HEX + 9, /* 39 9     */
        ASCII.PUNCT, /* 3A :     */
        ASCII.PUNCT, /* 3B ;     */
        ASCII.PUNCT, /* 3C <     */
        ASCII.PUNCT, /* 3D =     */
        ASCII.PUNCT, /* 3E >     */
        ASCII.PUNCT, /* 3F ?     */
        ASCII.PUNCT, /* 40 @     */
        ASCII.UPPER + ASCII.HEX + 10, /* 41 A     */
        ASCII.UPPER + ASCII.HEX + 11, /* 42 B     */
        ASCII.UPPER + ASCII.HEX + 12, /* 43 C     */
        ASCII.UPPER + ASCII.HEX + 13, /* 44 D     */
        ASCII.UPPER + ASCII.HEX + 14, /* 45 E     */
        ASCII.UPPER + ASCII.HEX + 15, /* 46 F     */
        ASCII.UPPER + 16, /* 47 G     */
        ASCII.UPPER + 17, /* 48 H     */
        ASCII.UPPER + 18, /* 49 I     */
        ASCII.UPPER + 19, /* 4A J     */
        ASCII.UPPER + 20, /* 4B K     */
        ASCII.UPPER + 21, /* 4C L     */
        ASCII.UPPER + 22, /* 4D M     */
        ASCII.UPPER + 23, /* 4E N     */
        ASCII.UPPER + 24, /* 4F O     */
        ASCII.UPPER + 25, /* 50 P     */
        ASCII.UPPER + 26, /* 51 Q     */
        ASCII.UPPER + 27, /* 52 R     */
        ASCII.UPPER + 28, /* 53 S     */
        ASCII.UPPER + 29, /* 54 T     */
        ASCII.UPPER + 30, /* 55 U     */
        ASCII.UPPER + 31, /* 56 V     */
        ASCII.UPPER + 32, /* 57 W     */
        ASCII.UPPER + 33, /* 58 X     */
        ASCII.UPPER + 34, /* 59 Y     */
        ASCII.UPPER + 35, /* 5A Z     */
        ASCII.PUNCT, /* 5B [     */
        ASCII.PUNCT, /* 5C \     */
        ASCII.PUNCT, /* 5D ]     */
        ASCII.PUNCT, /* 5E ^     */
        ASCII.PUNCT | ASCII.UNDER, /* 5F _     */
        ASCII.PUNCT, /* 60 `     */
        ASCII.LOWER + ASCII.HEX + 10, /* 61 a     */
        ASCII.LOWER + ASCII.HEX + 11, /* 62 b     */
        ASCII.LOWER + ASCII.HEX + 12, /* 63 c     */
        ASCII.LOWER + ASCII.HEX + 13, /* 64 d     */
        ASCII.LOWER + ASCII.HEX + 14, /* 65 e     */
        ASCII.LOWER + ASCII.HEX + 15, /* 66 f     */
        ASCII.LOWER + 16, /* 67 g     */
        ASCII.LOWER + 17, /* 68 h     */
        ASCII.LOWER + 18, /* 69 i     */
        ASCII.LOWER + 19, /* 6A j     */
        ASCII.LOWER + 20, /* 6B k     */
        ASCII.LOWER + 21, /* 6C l     */
        ASCII.LOWER + 22, /* 6D m     */
        ASCII.LOWER + 23, /* 6E n     */
        ASCII.LOWER + 24, /* 6F o     */
        ASCII.LOWER + 25, /* 70 p     */
        ASCII.LOWER + 26, /* 71 q     */
        ASCII.LOWER + 27, /* 72 r     */
        ASCII.LOWER + 28, /* 73 s     */
        ASCII.LOWER + 29, /* 74 t     */
        ASCII.LOWER + 30, /* 75 u     */
        ASCII.LOWER + 31, /* 76 v     */
        ASCII.LOWER + 32, /* 77 w     */
        ASCII.LOWER + 33, /* 78 x     */
        ASCII.LOWER + 34, /* 79 y     */
        ASCII.LOWER + 35, /* 7A z     */
        ASCII.PUNCT, /* 7B {     */
        ASCII.PUNCT, /* 7C |     */
        ASCII.PUNCT, /* 7D }     */
        ASCII.PUNCT, /* 7E ~     */
        ASCII.CNTRL, /* 7F (DEL) */
    ];

    static getType(ch: number): number {
        return ((ch & 0xFFFFFF80) == 0 ? ASCII.ctype[ch] : 0);
    }

    static isType(ch: number, type: number): boolean {
        return (ASCII.getType(ch) & type) != 0;
    }

    static isAscii(ch: number): boolean {
        return ((ch & 0xFFFFFF80) == 0);
    }

    static isAlpha(ch: number): boolean {
        return ASCII.isType(ch, ASCII.ALPHA);
    }

    static isDigit(ch: number): boolean {
        return ((ch - '0'.charCodeAt(0)) | ('9'.charCodeAt(0) - ch)) >= 0;
    }

    static isAlnum(ch: number): boolean {
        return ASCII.isType(ch, ASCII.ALNUM);
    }

    static isGraph(ch: number): boolean {
        return ASCII.isType(ch, ASCII.GRAPH);
    }

    static isPrint(ch: number): boolean {
        return ((ch - 0x20) | (0x7E - ch)) >= 0;
    }

    static isPunct(ch: number): boolean {
        return ASCII.isType(ch, ASCII.PUNCT);
    }

    static isSpace(ch: number): boolean {
        return ASCII.isType(ch, ASCII.SPACE);
    }

    static isHexDigit(ch: number): boolean {
        return ASCII.isType(ch, ASCII.HEX);
    }

    static isOctDigit(ch: number): boolean {
        return ((ch - '0'.charCodeAt(0)) | ('7'.charCodeAt(0) - ch)) >= 0;
    }

    static isCntrl(ch: number): boolean {
        return ASCII.isType(ch, ASCII.CNTRL);
    }

    static isLower(ch: number): boolean {
        return ((ch - 'a'.charCodeAt(0)) | ('z'.charCodeAt(0) - ch)) >= 0;
    }

    static isUpper(ch: number): boolean {
        return ((ch - 'A'.charCodeAt(0)) | ('Z'.charCodeAt(0) - ch)) >= 0;
    }

    static isWord(ch: number): boolean {
        return ASCII.isType(ch, ASCII.WORD);
    }

    static toDigit(ch: number): number {
        return (ASCII.ctype[ch & 0x7F] & 0x3F);
    }

    static toLower(ch: number): number {
        return ASCII.isUpper(ch) ? (ch + 0x20) : ch;
    }

    static toUpper(ch: number): number {
        return ASCII.isLower(ch) ? (ch - 0x20) : ch;
    }

}
ASCII['__class'] = 'java.util.regex.ASCII';