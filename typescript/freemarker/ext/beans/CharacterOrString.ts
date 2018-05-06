/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Represents value unwrapped both to {link Character} and {link String}. This is needed for unwrapped overloaded
 * method parameters where both {link Character} and {link String} occurs on the same parameter position when the
 * {link TemplateScalarModel} to unwrapp contains a {link String} of length 1.
 * @class
 */
export class CharacterOrString {
    /*private*/ stringValue : string;

    constructor(stringValue : string) {
        if(this.stringValue===undefined) this.stringValue = null;
        this.stringValue = stringValue;
    }

    getAsString() : string {
        return this.stringValue;
    }

    getAsChar() : string {
        return this.stringValue.charAt(0);
    }
}
CharacterOrString["__class"] = "freemarker.ext.beans.CharacterOrString";




