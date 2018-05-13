import {Character} from "../../lang/Character";
import {Map} from "../Map";

export class UnicodeProp {
    public name: string;
    private tester: Function;

    private static values: Map<string, UnicodeProp> = new Map();

    constructor(name: string, tester: Function) {
        this.name = name;
        this.tester = tester;
        UnicodeProp.values.put(name, this);
    }

    public is(ch: number): boolean {
        return this.tester.call(ch);
    }

    public static ALPHABETIC: UnicodeProp = new UnicodeProp('ALPHABETIC', ch => Character.isAlphabetic(ch));

    public static LETTER: UnicodeProp = new UnicodeProp('LETTER', ch => Character.isLetter(ch));

    public static IDEOGRAPHIC: UnicodeProp = new UnicodeProp('IDEOGRAPHIC', ch => Character.isIdeographic(ch));

    public static LOWERCASE: UnicodeProp = new UnicodeProp('LOWERCASE', ch => Character.isLowerCase(ch));

    public static UPPERCASE: UnicodeProp = new UnicodeProp('UPPERCASE', ch => Character.isUpperCase(ch));

    public static TITLECASE: UnicodeProp = new UnicodeProp('TITLECASE', ch => Character.isTitleCase(ch));

    public static WHITE_SPACE: UnicodeProp = new UnicodeProp('WHITE_SPACE', ch => {
        // \p{Whitespace}
        return ((((1 << Character.SPACE_SEPARATOR) |
            (1 << Character.LINE_SEPARATOR) |
            (1 << Character.PARAGRAPH_SEPARATOR)) >> Character.getType(ch)) & 1)
            != 0 || (ch >= 0x9 && ch <= 0xd) || (ch == 0x85)
    });


    public static CONTROL: UnicodeProp = new UnicodeProp('CONTROL', ch => {
        // \p{gc=Control}
        return Character.getType(ch) == Character.CONTROL
    });


    public static PUNCTUATION: UnicodeProp = new UnicodeProp('PUNCTUATION', ch => {
        // \p{gc=Punctuation}
        return ((((1 << Character.CONNECTOR_PUNCTUATION) |
            (1 << Character.DASH_PUNCTUATION) |
            (1 << Character.START_PUNCTUATION) |
            (1 << Character.END_PUNCTUATION) |
            (1 << Character.OTHER_PUNCTUATION) |
            (1 << Character.INITIAL_QUOTE_PUNCTUATION) |
            (1 << Character.FINAL_QUOTE_PUNCTUATION)) >> Character.getType(ch)) & 1)
            != 0
    });


    public static HEX_DIGIT: UnicodeProp = new UnicodeProp('HEX_DIGIT', ch => {
        // \p{gc=Decimal_Number}
        // \p{Hex_Digit}    -> PropList.txt: Hex_Digit
        return UnicodeProp.DIGIT.is(ch) ||
            (ch >= 0x0030 && ch <= 0x0039) ||
            (ch >= 0x0041 && ch <= 0x0046) ||
            (ch >= 0x0061 && ch <= 0x0066) ||
            (ch >= 0xFF10 && ch <= 0xFF19) ||
            (ch >= 0xFF21 && ch <= 0xFF26) ||
            (ch >= 0xFF41 && ch <= 0xFF46)
    });


    public static ASSIGNED: UnicodeProp = new UnicodeProp('ASSIGNED', ch => Character.getType(ch) != Character.UNASSIGNED);

    public static NONCHARACTER_CODE_POINT: UnicodeProp = new UnicodeProp('NONCHARACTER_CODE_POINT', ch => {
        // PropList.txt:Noncharacter_Code_Point
        return (ch & 0xfffe) == 0xfffe || (ch >= 0xfdd0 && ch <= 0xfdef)
    });


    public static DIGIT: UnicodeProp = new UnicodeProp('DIGIT', ch => Character.isDigit(ch));// \p{gc=Decimal_Number}


    public static ALNUM: UnicodeProp = new UnicodeProp('ALNUM', ch => {
        // \p{alpha}
        // \p{digit}
        return UnicodeProp.ALPHABETIC.is(ch) || UnicodeProp.DIGIT.is(ch)
    });


    public static BLANK: UnicodeProp = new UnicodeProp('BLANK', ch => {
        // \p{Whitespace} --
        // [\N{LF} \N{VT} \N{FF} \N{CR} \N{NEL}  -> 0xa, 0xb, 0xc, 0xd, 0x85
        //  \p{gc=Line_Separator}
        //  \p{gc=Paragraph_Separator}]
        return Character.getType(ch) == Character.SPACE_SEPARATOR ||
            ch == 0x9; // \N{HT}
    });

    public static GRAPH: UnicodeProp = new UnicodeProp('GRAPH', ch => {
        // [^
        //  \p{space}
        //  \p{gc=Control}
        //  \p{gc=Surrogate}
        //  \p{gc=Unassigned}]
        return ((((1 << Character.SPACE_SEPARATOR) |
            (1 << Character.LINE_SEPARATOR) |
            (1 << Character.PARAGRAPH_SEPARATOR) |
            (1 << Character.CONTROL) |
            (1 << Character.SURROGATE) |
            (1 << Character.UNASSIGNED)) >> Character.getType(ch)) & 1)
            == 0;
    });

    public static PRINT: UnicodeProp = new UnicodeProp('PRINT', ch => {
        // \p{graph}
        // \p{blank}
        // -- \p{cntrl}
        return (UnicodeProp.GRAPH.is(ch) || UnicodeProp.BLANK.is(ch)) && !UnicodeProp.CONTROL.is(ch);
    });

    public static WORD: UnicodeProp = new UnicodeProp('WORD', ch => {
            //  \p{alpha}
            //  \p{gc=Mark}
            //  \p{digit}
            //  \p{gc=Connector_Punctuation}
            //  \p{Join_Control}    200C..200D

            return UnicodeProp.ALPHABETIC.is(ch) ||
                ((((1 << Character.NON_SPACING_MARK) |
                    (1 << Character.ENCLOSING_MARK) |
                    (1 << Character.COMBINING_SPACING_MARK) |
                    (1 << Character.DECIMAL_DIGIT_NUMBER) |
                    (1 << Character.CONNECTOR_PUNCTUATION)) >> Character.getType(ch)) & 1)
                != 0 ||
                UnicodeProp.JOIN_CONTROL.is(ch);
        }
    );
    public static JOIN_CONTROL: UnicodeProp = new UnicodeProp('JOIN_CONTROL', ch => {
            //  200C..200D    PropList.txt:Join_Control
            return (ch == 0x200C || ch == 0x200D);
        }
    );
    private static posix: Map<string, string> = (posix => {
        posix.put("ALPHA", "ALPHABETIC");
        posix.put("LOWER", "LOWERCASE");
        posix.put("UPPER", "UPPERCASE");
        posix.put("SPACE", "WHITE_SPACE");
        posix.put("PUNCT", "PUNCTUATION");
        posix.put("XDIGIT", "HEX_DIGIT");
        posix.put("ALNUM", "ALNUM");
        posix.put("CNTRL", "CONTROL");
        posix.put("DIGIT", "DIGIT");
        posix.put("BLANK", "BLANK");
        posix.put("GRAPH", "GRAPH");
        posix.put("PRINT", "PRINT");
        return posix;
    })(new Map());
    private static aliases: Map<string, string> = (aliases => {
        aliases.put("WHITESPACE", "WHITE_SPACE");
        aliases.put("HEXDIGIT", "HEX_DIGIT");
        aliases.put("NONCHARACTERCODEPOINT", "NONCHARACTER_CODE_POINT");
        aliases.put("JOINCONTROL", "JOIN_CONTROL");
        return aliases;
    })(new Map());

    public static forName(propName: string): UnicodeProp {
        propName = propName.toUpperCase();
        let alias: string = UnicodeProp.aliases.get(propName);
        if (alias != null)
            propName = alias;
        try {
            return UnicodeProp.valueOf(propName);
        } catch (x) {
        }
        return null;
    }

    public static valueOf(name: string): UnicodeProp {
        return UnicodeProp.values.get(name);
    }

    public static forPOSIXName(propName: string): UnicodeProp {
        propName = UnicodeProp.posix.get(propName.toUpperCase());
        if (propName == null)
            return null;
        return UnicodeProp.valueOf(propName);
    }
}
