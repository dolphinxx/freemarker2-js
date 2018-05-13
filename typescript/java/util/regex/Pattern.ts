import {StringBuilder} from "../../lang/StringBuilder";
import {Matcher} from "./Matcher";
import {Map} from "../Map";
import {Character} from "../../lang/Character";
import {List} from "../List";
import {ASCII} from "./ASCII";
import {System} from "../../lang/System";
import {Integer} from "../../lang/Integer";
import {UnicodeProp} from "./UnicodeProp";

export class Pattern {
//     /**
//      * Regular expression modifier values.  Instead of being passed as
//      * arguments, they can also be passed as inline modifiers.
//      * For example, the following statements have the same effect.
//      * <pre>
//      * RegExp r1 = RegExp.compile("abc", Pattern.I|Pattern.M);
//      * RegExp r2 = RegExp.compile("(?im)abc", 0);
//      * </pre>
//      *
//      * The flags are duplicated so that the familiar Perl match flag
//      * names are available.
//      */
//
    /**
     * Enables Unix lines mode.
     *
     * <p> In this mode, only the <tt>'\n'</tt> line terminator is recognized
     * in the behavior of <tt>.</tt>, <tt>^</tt>, and <tt>$</tt>.
     *
     * <p> Unix lines mode can also be enabled via the embedded flag
     * expression&nbsp;<tt>(?d)</tt>.
     */
    public static UNIX_LINES: number = 0x01;

    /**
     * Enables case-insensitive matching.
     *
     * <p> By default, case-insensitive matching assumes that only characters
     * in the US-ASCII charset are being matched.  Unicode-aware
     * case-insensitive matching can be enabled by specifying the {@link
        * #UNICODE_CASE} flag in conjunction with this flag.
     *
     * <p> Case-insensitive matching can also be enabled via the embedded flag
     * expression&nbsp;<tt>(?i)</tt>.
     *
     * <p> Specifying this flag may impose a slight performance penalty.  </p>
     */
    public static CASE_INSENSITIVE: number = 0x02;

    /**
     * Permits whitespace and comments in pattern.
     *
     * <p> In this mode, whitespace is ignored, and embedded comments starting
     * with <tt>#</tt> are ignored until the end of a line.
     *
     * <p> Comments mode can also be enabled via the embedded flag
     * expression&nbsp;<tt>(?x)</tt>.
     */
    public static COMMENTS: number = 0x04;

    /**
     * Enables multiline mode.
     *
     * <p> In multiline mode the expressions <tt>^</tt> and <tt>$</tt> match
     * just after or just before, respectively, a line terminator or the end of
     * the input sequence.  By default these expressions only match at the
     * beginning and the end of the entire input sequence.
     *
     * <p> Multiline mode can also be enabled via the embedded flag
     * expression&nbsp;<tt>(?m)</tt>.  </p>
     */
    public static MULTILINE: number = 0x08;

    /**
     * Enables literal parsing of the pattern.
     *
     * <p> When this flag is specified then the input string that specifies
     * the pattern is treated as a sequence of literal characters.
     * Metacharacters or escape sequences in the input sequence will be
     * given no special meaning.
     *
     * <p>The flags CASE_INSENSITIVE and UNICODE_CASE retain their impact on
     * matching when used in conjunction with this flag. The other flags
     * become superfluous.
     *
     * <p> There is no embedded flag character for enabling literal parsing.
     * @since 1.5
     */
    public static LITERAL: number = 0x10;

    /**
     * Enables dotall mode.
     *
     * <p> In dotall mode, the expression <tt>.</tt> matches any character,
     * including a line terminator.  By default this expression does not match
     * line terminators.
     *
     * <p> Dotall mode can also be enabled via the embedded flag
     * expression&nbsp;<tt>(?s)</tt>.  (The <tt>s</tt> is a mnemonic for
     * "single-line" mode, which is what this is called in Perl.)  </p>
     */
    public static DOTALL: number = 0x20;

    /**
     * Enables Unicode-aware case folding.
     *
     * <p> When this flag is specified then case-insensitive matching, when
     * enabled by the {@link #CASE_INSENSITIVE} flag, is done in a manner
     * consistent with the Unicode Standard.  By default, case-insensitive
     * matching assumes that only characters in the US-ASCII charset are being
     * matched.
     *
     * <p> Unicode-aware case folding can also be enabled via the embedded flag
     * expression&nbsp;<tt>(?u)</tt>.
     *
     * <p> Specifying this flag may impose a performance penalty.  </p>
     */
    public static UNICODE_CASE: number = 0x40;

    /**
     * Enables canonical equivalence.
     *
     * <p> When this flag is specified then two characters will be considered
     * to match if, and only if, their full canonical decompositions match.
     * The expression <tt>"a&#92;u030A"</tt>, for example, will match the
     * string <tt>"&#92;u00E5"</tt> when this flag is specified.  By default,
     * matching does not take canonical equivalence into account.
     *
     * <p> There is no embedded flag character for enabling canonical
     * equivalence.
     *
     * <p> Specifying this flag may impose a performance penalty.  </p>
     */
    public static CANON_EQ: number = 0x80;

    /**
     * Enables the Unicode version of <i>Predefined character classes</i> and
     * <i>POSIX character classes</i>.
     *
     * <p> When this flag is specified then the (US-ASCII only)
     * <i>Predefined character classes</i> and <i>POSIX character classes</i>
     * are in conformance with
     * <a href="http://www.unicode.org/reports/tr18/"><i>Unicode Technical
     * Standard #18: Unicode Regular Expression</i></a>
     * <i>Annex C: Compatibility Properties</i>.
     * <p>
     * The UNICODE_CHARACTER_CLASS mode can also be enabled via the embedded
     * flag expression&nbsp;<tt>(?U)</tt>.
     * <p>
     * The flag implies UNICODE_CASE, that is, it enables Unicode-aware case
     * folding.
     * <p>
     * Specifying this flag may impose a performance penalty.  </p>
     * @since 1.7
     */
    public static UNICODE_CHARACTER_CLASS: number = 0x100;
    regex: RegExp;
    wholeRegex:RegExp;

    /**
     * The original regular-expression pattern string.
     *
     * @serial
     */
    private _pattern: string;

    /**
     * The original pattern flags.
     *
     * @serial
     */
    private _flags: number;

    /**
     * Boolean indicating this Pattern is compiled; this is necessary in order
     * to lazily compile deserialized Patterns.
     */
    private compiled: boolean = false;

    /**
     * The normalized pattern string.
     */
    private normalizedPattern: string;

    /**
     * The starting point of state machine for the find operation.  This allows
     * a match to start anywhere in the input.
     */
    root: Node;

    /**
     * The root of object tree for a match operation.  The pattern is matched
     * at the beginning.  This may include a find that uses BnM or a First
     * node.
     */
    matchRoot: Node;

    /**
     * Temporary storage used by parsing pattern slice.
     */
    buffer: Array<number>;

    /**
     * Map the "name" of the "named capturing group" to its group id
     * node.
     */
    _namedGroups: Map<string, number>;

    /**
     * Temporary storage used while parsing group references.
     */
    groupNodes: Pattern.GroupHead[];

    /**
     * Temporary null terminated code point array used by pattern compiling.
     */
    temp: number[];

    /**
     * The number of capturing groups in this Pattern. Used by matchers to
     * allocate storage needed to perform a match.
     */
    capturingGroupCount: number;

    /**
     * The local variable count used by parsing tree. Used by matchers to
     * allocate storage needed to perform a match.
     */
    localCount: number;

    /**
     * Index into the pattern string that keeps track of how much has been
     * parsed.
     */
    cursor: number;

    /**
     * Holds the length of the pattern string.
     */
    patternLength: number;

    /**
     * If the Start node might possibly match supplementary characters.
     * It is set to true during compiling if
     * (1) There is supplementary char in pattern, or
     * (2) There is complement node of Category or Block
     */
    hasSupplementary: boolean;

    /**
     * Compiles the given regular expression into a pattern with the given
     * flags.
     *
     * @param  regex
     *         The expression to be compiled
     *
     * @param  flags
     *         Match flags, a bit mask that may include
     *         {@link #CASE_INSENSITIVE}, {@link #MULTILINE}, {@link #DOTALL},
     *         {@link #UNICODE_CASE}, {@link #CANON_EQ}, {@link #UNIX_LINES},
     *         {@link #LITERAL}, {@link #UNICODE_CHARACTER_CLASS}
     *         and {@link #COMMENTS}
     *
     * @return the given regular expression compiled into a pattern with the given flags
     * @throws  IllegalArgumentException
     *          If bit values other than those corresponding to the defined
     *          match flags are set in <tt>flags</tt>
     *
     * @throws  PatternSyntaxException
     *          If the expression's syntax is invalid
     */
    public static compile(regex: string, flags?: number): Pattern {
        if (flags === undefined) {
            flags = 0;
        }
        return new Pattern(regex, flags);
    }

    /**
     * Returns the regular expression from which this pattern was compiled.
     *
     * @return  The source of this pattern
     */
    public pattern(): string {
        return this._pattern;
    }

    /**
     * <p>Returns the string representation of this pattern. This
     * is the regular expression from which this pattern was
     * compiled.</p>
     *
     * @return  The string representation of this pattern
     * @since 1.5
     */
    public toString(): string {
        return this._pattern;
    }

    /**
     * Creates a matcher that will match the given input against this pattern.
     *
     * @param  input
     *         The character sequence to be matched
     *
     * @return  A new matcher for this pattern
     */
    public matcher(input: string): Matcher {
        let m: Matcher = new Matcher(this, input);
        return m;
    }

    /**
     * Returns this pattern's match flags.
     *
     * @return  The match flags specified when this pattern was compiled
     */
    public flags(): number {
        return this._flags;
    }

    /**
     * Compiles the given regular expression and attempts to match the given
     * input against it.
     *
     * <p> An invocation of this convenience method of the form
     *
     * <blockquote><pre>
     * Pattern.matches(regex, input);</pre></blockquote>
     *
     * behaves in exactly the same way as the expression
     *
     * <blockquote><pre>
     * Pattern.compile(regex).matcher(input).matches()</pre></blockquote>
     *
     * <p> If a pattern is to be used multiple times, compiling it once and reusing
     * it will be more efficient than invoking this method each time.  </p>
     *
     * @param  regex
     *         The expression to be compiled
     *
     * @param  input
     *         The character sequence to be matched
     * @return whether or not the regular expression matches on the input
     * @throws  PatternSyntaxException
     *          If the expression's syntax is invalid
     */
    public static matches(regex: string, input: string): boolean {
        let p: Pattern = Pattern.compile(regex);
        let m: Matcher = p.matcher(input);
        return m.matches();
    }

    /**
     * Splits the given input sequence around matches of this pattern.
     *
     * <p> The array returned by this method contains each substring of the
     * input sequence that is terminated by another subsequence that matches
     * this pattern or is terminated by the end of the input sequence.  The
     * substrings in the array are in the order in which they occur in the
     * input. If this pattern does not match any subsequence of the input then
     * the resulting array has just one element, namely the input sequence in
     * string form.
     *
     * <p> When there is a positive-width match at the beginning of the input
     * sequence then an empty leading substring is included at the beginning
     * of the resulting array. A zero-width match at the beginning however
     * never produces such empty leading substring.
     *
     * <p> The <tt>limit</tt> parameter controls the number of times the
     * pattern is applied and therefore affects the length of the resulting
     * array.  If the limit <i>n</i> is greater than zero then the pattern
     * will be applied at most <i>n</i>&nbsp;-&nbsp;1 times, the array's
     * length will be no greater than <i>n</i>, and the array's last entry
     * will contain all input beyond the last matched delimiter.  If <i>n</i>
     * is non-positive then the pattern will be applied as many times as
     * possible and the array can have any length.  If <i>n</i> is zero then
     * the pattern will be applied as many times as possible, the array can
     * have any length, and trailing empty strings will be discarded.
     *
     * <p> The input <tt>"boo:and:foo"</tt>, for example, yields the following
     * results with these parameters:
     *
     * <blockquote><table cellpadding=1 cellspacing=0
     *              summary="Split examples showing regex, limit, and result">
     * <tr><th align="left"><i>Regex&nbsp;&nbsp;&nbsp;&nbsp;</i></th>
     *     <th align="left"><i>Limit&nbsp;&nbsp;&nbsp;&nbsp;</i></th>
     *     <th align="left"><i>Result&nbsp;&nbsp;&nbsp;&nbsp;</i></th></tr>
     * <tr><td align=center>:</td>
     *     <td align=center>2</td>
     *     <td><tt>{ "boo", "and:foo" }</tt></td></tr>
     * <tr><td align=center>:</td>
     *     <td align=center>5</td>
     *     <td><tt>{ "boo", "and", "foo" }</tt></td></tr>
     * <tr><td align=center>:</td>
     *     <td align=center>-2</td>
     *     <td><tt>{ "boo", "and", "foo" }</tt></td></tr>
     * <tr><td align=center>o</td>
     *     <td align=center>5</td>
     *     <td><tt>{ "b", "", ":and:f", "", "" }</tt></td></tr>
     * <tr><td align=center>o</td>
     *     <td align=center>-2</td>
     *     <td><tt>{ "b", "", ":and:f", "", "" }</tt></td></tr>
     * <tr><td align=center>o</td>
     *     <td align=center>0</td>
     *     <td><tt>{ "b", "", ":and:f" }</tt></td></tr>
     * </table></blockquote>
     *
     * @param  input
     *         The character sequence to be split
     *
     * @param  limit
     *         The result threshold, as described above
     *
     * @return  The array of strings computed by splitting the input
     *          around matches of this pattern
     */
    public split(input: string, limit: number): Array<string> {
        let index = 0;
        let matchLimited = limit > 0;
        let matchList: List<string> = new List<string>();
        let m: Matcher = this.matcher(input);

        // Add segments before each match found
        while (m.find()) {
            if (!matchLimited || matchList.size() < limit - 1) {
                if (index == 0 && index == m.start() && m.start() == m.end()) {
                    // no empty leading substring included for zero-width match
                    // at the beginning of the input char sequence.
                    continue;
                }
                let match: string = input.substring(index, m.start());
                matchList.add(match);
                index = m.end();
            } else if (matchList.size() == limit - 1) { // last one
                let match: string = input.substring(index,
                    input.length);
                matchList.add(match);
                index = m.end();
            }
        }

        // If no match was found, return this
        if (index == 0)
            return [input.toString()];

        // Add remaining segment
        if (!matchLimited || matchList.size() < limit)
            matchList.add(input.substring(index, input.length));

        // Construct result
        let resultSize: number = matchList.size();
        if (limit == 0)
            while (resultSize > 0 && matchList.get(resultSize - 1).equals(""))
                resultSize--;
        let result: Array<string> = new String[resultSize];
        // return matchList.subList(0, resultSize).toArray(result);
        for (let i = 0; i < resultSize; i++) {
            result.push(matchList.get(i));
        }
        return result;
    }

// /**
//  * Splits the given input sequence around matches of this pattern.
//  *
//  * <p> This method works as if by invoking the two-argument {@link
//     * #split(java.lang.CharSequence, int) split} method with the given input
//  * sequence and a limit argument of zero.  Trailing empty strings are
//  * therefore not included in the resulting array. </p>
//  *
//  * <p> The input <tt>"boo:and:foo"</tt>, for example, yields the following
//  * results with these expressions:
//  *
//  * <blockquote><table cellpadding=1 cellspacing=0
//  *              summary="Split examples showing regex and result">
//  * <tr><th align="left"><i>Regex&nbsp;&nbsp;&nbsp;&nbsp;</i></th>
//  *     <th align="left"><i>Result</i></th></tr>
//  * <tr><td align=center>:</td>
//  *     <td><tt>{ "boo", "and", "foo" }</tt></td></tr>
//  * <tr><td align=center>o</td>
//  *     <td><tt>{ "b", "", ":and:f" }</tt></td></tr>
//  * </table></blockquote>
//  *
//  *
//  * @param  input
//  *         The character sequence to be split
//  *
//  * @return  The array of strings computed by splitting the input
//  *          around matches of this pattern
//  */
// public String[] split(CharSequence input) {
//     return split(input, 0);
// }
//
    /**
     * Returns a literal pattern <code>String</code> for the specified
     * <code>String</code>.
     *
     * <p>This method produces a <code>String</code> that can be used to
     * create a <code>Pattern</code> that would match the string
     * <code>s</code> as if it were a literal pattern.</p> Metacharacters
     * or escape sequences in the input sequence will be given no special
     * meaning.
     *
     * @param  s The string to be literalized
     * @return  A literal string replacement
     * @since 1.5
     */
    public static quote(s: string): string {
        let slashEIndex: number = s.indexOf("\\E");
        if (slashEIndex == -1)
            return "\\Q" + s + "\\E";

        let sb: StringBuilder = new StringBuilder(s.length * 2);
        sb.append("\\Q");
        slashEIndex = 0;
        let current: number = 0;
        while ((slashEIndex = s.indexOf("\\E", current)) != -1) {
            sb.append(s.substring(current, slashEIndex));
            current = slashEIndex + 2;
            sb.append("\\E\\\\E\\Q");
        }
        sb.append(s.substring(current, s.length));
        sb.append("\\E");
        return sb.toString();
    }

//
// /**
//  * Recompile the Pattern instance from a stream.  The original pattern
//  * string is read in and the object tree is recompiled from it.
//  */
// private void readObject(java.io.ObjectInputStream s)
// throws java.io.IOException, ClassNotFoundException {
//
//     // Read in all fields
//     s.defaultReadObject();
//
//     // Initialize counts
//     capturingGroupCount = 1;
//     localCount = 0;
//
//     // if length > 0, the Pattern is lazily compiled
//     compiled = false;
//     if (pattern.length() == 0) {
//         root = new Start(lastAccept);
//         matchRoot = lastAccept;
//         compiled = true;
//     }
// }

    /**
     * This private constructor is used to create all Patterns. The pattern
     * string and match flags are all that is needed to completely describe
     * a Pattern. An empty pattern string results in an object tree with
     * only a Start node and a LastNode node.
     */
    private constructor(p: string, f: number) {
        this._pattern = p;
        this._flags = f;

        // to use UNICODE_CASE if UNICODE_CHARACTER_CLASS present
        if ((this._flags & Pattern.UNICODE_CHARACTER_CLASS) != 0)
            this._flags |= Pattern.UNICODE_CASE;

        this.regex = new RegExp(p);
        this.wholeRegex = new RegExp('^' + p + '$');
        // Reset group index count
        // capturingGroupCount = 1;
        // localCount = 0;
        //
        // if (pattern.length() > 0) {
        //     compile();
        // } else {
        //     root = new Start(lastAccept);
        //     matchRoot = lastAccept;
        // }
    }


/**
 * The pattern is converted to normalizedD form and then a pure group
 * is constructed to match canonical equivalences of the characters.
 */
private normalize():void {
    let inCharClass:boolean = false;
    let lastCodePoint:number = -1;

    // Convert pattern into normalizedD form
    this.normalizedPattern = Normalizer.normalize(this.pattern, Normalizer.Form.NFD);
    this.patternLength = this.normalizedPattern.length;

    // Modify pattern to match canonical equivalences
    let newPattern:StringBuilder = new StringBuilder();
    for(let i:number=0; i<this.patternLength; ) {
        let c:number = this.normalizedPattern.charCodeAt(i);
        let sequenceBuffer:StringBuilder;
        if ((Character.getType(c) == Character.NON_SPACING_MARK)
            && (lastCodePoint != -1)) {
            sequenceBuffer = new StringBuilder();
            sequenceBuffer.appendCodePoint(lastCodePoint);
            sequenceBuffer.appendCodePoint(c);
            while(Character.getType(c) == Character.NON_SPACING_MARK) {
                i += Character.charCount(c);
                if (i >= this.patternLength)
                    break;
                c = this.normalizedPattern.charCodeAt(i);
                sequenceBuffer.appendCodePoint(c);
            }
            let ea:string = this.produceEquivalentAlternation(
                sequenceBuffer.toString());
            newPattern.setLength(newPattern.length()-Character.charCount(lastCodePoint));
            newPattern.append("(?:").append(ea).append(")");
        } else if (c == '['.charCodeAt(0) && lastCodePoint != '\\'.charCodeAt(0)) {
            i = this.normalizeCharClass(newPattern, i);
        } else {
            newPattern.appendCodePoint(c);
        }
        lastCodePoint = c;
        i += Character.charCount(c);
    }
    this.normalizedPattern = newPattern.toString();
}

/**
 * Complete the character class being parsed and add a set
 * of alternations to it that will match the canonical equivalences
 * of the characters within the class.
 */
private normalizeCharClass(newPattern:StringBuilder, i:number):number {
    let charClass:StringBuilder = new StringBuilder();
    let eq:StringBuilder = null;
    let lastCodePoint:number = -1;
    let result:string;

    i++;
    charClass.append("[");
    while(true) {
        let c:number = this.normalizedPattern.charCodeAt(i);
        let sequenceBuffer:StringBuilder;

        if (c == ']'.charCodeAt(0) && lastCodePoint != '\\'.charCodeAt(0)) {
            charClass.append(String.fromCharCode(c));
            break;
        } else if (Character.getType(c) == Character.NON_SPACING_MARK) {
            sequenceBuffer = new StringBuilder();
            sequenceBuffer.appendCodePoint(lastCodePoint);
            while(Character.getType(c) == Character.NON_SPACING_MARK) {
                sequenceBuffer.appendCodePoint(c);
                i += Character.charCount(c);
                if (i >= this.normalizedPattern.length())
                    break;
                c = this.normalizedPattern.codePointAt(i);
            }
            let ea:string = this.produceEquivalentAlternation(
                sequenceBuffer.toString());

            charClass.setLength(charClass.length()-Character.charCount(lastCodePoint));
            if (eq == null)
                eq = new StringBuilder();
            eq.append('|');
            eq.append(ea);
        } else {
            charClass.appendCodePoint(c);
            i++;
        }
        if (i == this.normalizedPattern.length)
            throw this.error("Unclosed character class");
        lastCodePoint = c;
    }

    if (eq != null) {
        result = "(?:"+charClass.toString()+eq.toString()+")";
    } else {
        result = charClass.toString();
    }

    newPattern.append(result);
    return i;
}

/**
 * Given a specific sequence composed of a regular character and
 * combining marks that follow it, produce the alternation that will
 * match all canonical equivalences of that sequence.
 */
private produceEquivalentAlternation(source:string):string {
    let len:number = Pattern.countChars(source, 0, 1);
    if (source.length == len)
    // source has one character.
        return source;

    let base:string = source.substring(0,len);
    let combiningMarks:string = source.substring(len);

    let perms:Array<string> = this.producePermutations(combiningMarks);
    let result:StringBuilder = new StringBuilder(source);

    // Add combined permutations
    for(let x:number=0; x<perms.length; x++) {
        let next:string = base + perms[x];
        if (x>0)
            result.append("|"+next);
        next = this.composeOneStep(next);
        if (next != null)
            result.append("|"+ this.produceEquivalentAlternation(next));
    }
    return result.toString();
}

/**
 * Returns an array of strings that have all the possible
 * permutations of the characters in the input string.
 * This is used to get a list of all possible orderings
 * of a set of combining marks. Note that some of the permutations
 * are invalid because of combining class collisions, and these
 * possibilities must be removed because they are not canonically
 * equivalent.
 */
private producePermutations(input:string):Array<string> {
    if (input.length == Pattern.countChars(input, 0, 1))
        return [input];

    if (input.length == Pattern.countChars(input, 0, 2)) {
        let c0:number = Character.codePointAt(input, 0);
        let c1:number = Character.codePointAt(input, Character.charCount(c0));
        if (this.getClass$int(c1) == this.getClass$int(c0)) {
            return [input];
        }
        let result:Array<string> = new Array<string>(2);
        result[0] = input;
        let sb:StringBuilder = new StringBuilder(2);
        sb.appendCodePoint(c1);
        sb.appendCodePoint(c0);
        result[1] = sb.toString();
        return result;
    }

    let length:number = 1;
    let nCodePoints:number = Pattern.countCodePoints(input);
    for(let x:number=1; x<nCodePoints; x++)
    length = length * (x+1);

    let temp:Array<string> = new String[length];

    let combClass:Array<number> = new Array<number>(nCodePoints);
    for(let x:number=0, i=0; x<nCodePoints; x++) {
        let c:number = Character.codePointAt(input, i);
        combClass[x] = this.getClass$int(c);
        i +=  Character.charCount(c);
    }

    // For each char, take it out and add the permutations
    // of the remaining chars
    let index:number = 0;
    let len:number;
    // offset maintains the index in code units.
    loop:   for(let x=0, offset=0; x<nCodePoints; x++, offset+=len) {
        len = Pattern.countChars(input, offset, 1);
        let skip:boolean = false;
        for(let y=x-1; y>=0; y--) {
            if (combClass[y] == combClass[x]) {
                continue loop;
            }
        }
        let sb:StringBuilder = new StringBuilder(input);
        let otherChars:string = sb.delete(offset, offset+len).toString();
        let subResult:Array<string> = this.producePermutations(otherChars);

        let prefix:string = input.substring(offset, offset+len);
        for(let y:number=0; y<subResult.length; y++)
        temp[index++] =  prefix + subResult[y];
    }
    let result:Array<string> = new String[index];
   for(let x:number =0; x<index; x++)
    result[x] = temp[x];
    return result;
}

private getClass$int(c:number):number {
    return sun.text.Normalizer.getCombiningClass(c);
}

/**
 * Attempts to compose input by combining the first character
 * with the first combining mark following it. Returns a String
 * that is the composition of the leading character with its first
 * combining mark followed by the remaining combining marks. Returns
 * null if the first two characters cannot be further composed.
 */
private composeOneStep(input:string):string {
    let len:number = Pattern.countChars(input, 0, 2);
    let firstTwoCharacters:string = input.substring(0, len);
    let result:string = Normalizer.normalize(firstTwoCharacters, Normalizer.Form.NFC);

    if (result === firstTwoCharacters)
        return null;
    else {
        let remainder:string = input.substring(len);
        return result + remainder;
    }
}

/**
 * Preprocess any \Q...\E sequences in `temp', meta-quoting them.
 * See the description of `quotemeta' in perlfunc(1).
 */
private RemoveQEQuoting():void {
    let pLen:number = this.patternLength;
    let i:number = 0;
    while (i < pLen-1) {
        if (this.temp[i] != '\\'.charCodeAt(0))
            i += 1;
        else if (this.temp[i + 1] != 'Q'.charCodeAt(0))
            i += 2;
        else
            break;
    }
    if (i >= pLen - 1)    // No \Q sequence found
        return;
    let j:number = i;
    i += 2;
    let newtemp:Array<number> = (size => {const __result = new Array<number>(size);for(let __i = 0;__i < size;__i++)__result.push(0);return __result;})(j + 3*(pLen-i) + 2);
    System.arraycopy(this.temp, 0, newtemp, 0, j);

    let inQuote:boolean = true;
    let beginQuote:boolean = true;
    while (i < pLen) {
        let c:number = this.temp[i++];
        if (!ASCII.isAscii(c) || ASCII.isAlpha(c)) {
            newtemp[j++] = c;
        } else if (ASCII.isDigit(c)) {
            if (beginQuote) {
                /*
                     * A unicode escape \[0xu] could be before this quote,
                     * and we don't want this numeric char to processed as
                     * part of the escape.
                     */
                newtemp[j++] = '\\'.charCodeAt(0);
                newtemp[j++] = 'x'.charCodeAt(0);
                newtemp[j++] = '3'.charCodeAt(0);
            }
            newtemp[j++] = c;
        } else if (c != '\\'.charCodeAt(0)) {
            if (inQuote) newtemp[j++] = '\\'.charCodeAt(0);
            newtemp[j++] = c;
        } else if (inQuote) {
            if (this.temp[i] == 'E'.charCodeAt(0)) {
                i++;
                inQuote = false;
            } else {
                newtemp[j++] = '\\'.charCodeAt(0);
                newtemp[j++] = '\\'.charCodeAt(0);
            }
        } else {
            if (this.temp[i] == 'Q'.charCodeAt(0)) {
                i++;
                inQuote = true;
                beginQuote = true;
                continue;
            } else {
                newtemp[j++] = c;
                if (i != pLen)
                    newtemp[j++] = this.temp[i++];
            }
        }

        beginQuote = false;
    }

    this.patternLength = j;
    this.temp = ((array:Array<number>, newLength:number) => {const __result:Array<number> = new Array<number>(newLength);for(let __i = 0;__i < Math.min(newLength, array.length);__i++) __result.push(array[__i]); return __result;})(newtemp, j + 2); // double zero termination
}

    /**
     * Copies regular expression to an int array and invokes the parsing
     * of the expression which will create the object tree.
     */
    private compile(): void {
        // Handle canonical equivalences
        if (this.has(Pattern.CANON_EQ) && !this.has(Pattern.LITERAL)) {
            this.normalize();
        } else {
            this.normalizedPattern = this._pattern;
        }
        this.patternLength = this.normalizedPattern.length;

        // Copy pattern to int array for convenience
        // Use double zero to terminate pattern
        this.temp = new Array<number>(this.patternLength + 2);

        this.hasSupplementary = false;
        let c: number, count: number = 0;
        // Convert all chars into code points
        for (let x = 0; x < this.patternLength; x += Character.charCount(c)) {
            c = this.normalizedPattern.codePointAt(x);
            if (this.isSupplementary(c)) {
                this.hasSupplementary = true;
            }
            this.temp[count++] = c;
        }

        this.patternLength = count;   // patternLength now in code points

        if (!this.has(Pattern.LITERAL))
            this.RemoveQEQuoting();

        // Allocate all temporary objects here.
        this.buffer = new int[32];
        this.groupNodes = new this.GroupHead[10];
        namedGroups = null;

        if (this.has(Pattern.LITERAL)) {
            // Literal pattern handling
            this.matchRoot = this.newSlice(this.temp, this.patternLength, this.hasSupplementary);
            this.matchRoot.next = this.lastAccept;
        } else {
            // Start recursive descent parsing
            this.matchRoot = this.expr(this.lastAccept);
            // Check extra pattern characters
            if (this.patternLength != cursor) {
                if (this.peek() == ')') {
                    throw this.error("Unmatched closing ')'");
                } else {
                    throw this.error("Unexpected internal error");
                }
            }
        }

        // Peephole optimization
        if (this.matchRoot instanceof Slice) {
            this.root = BnM.optimize(matchRoot);
            if (this.root == matchRoot) {
                this.root = hasSupplementary ? new StartS(matchRoot) : new Start(matchRoot);
            }
        } else if (matchRoot instanceof Begin || matchRoot instanceof First) {
            this.root = matchRoot;
        } else {
            this.root = hasSupplementary ? new StartS(matchRoot) : new Start(matchRoot);
        }

        // Release temporary storage
        this.temp = null;
        this.buffer = null;
        this.groupNodes = null;
        this.patternLength = 0;
        this.compiled = true;
    }

    namedGroups(): Map<string, number> {
        if (this._namedGroups == null)
            this._namedGroups = new Map();
        return this._namedGroups;
    }

// /**
//  * Used to print out a subtree of the Pattern to help with debugging.
//  */
// private static printObjectTree(node:Node):void {
//     while(node != null) {
//         if (node instanceof Prolog) {
//             System.out.println(node);
//             printObjectTree(((Prolog)node).loop);
//             System.out.println("**** end contents prolog loop");
//         } else if (node instanceof Loop) {
//             System.out.println(node);
//             printObjectTree(((Loop)node).body);
//             System.out.println("**** end contents Loop body");
//         } else if (node instanceof Curly) {
//             System.out.println(node);
//             printObjectTree(((Curly)node).atom);
//             System.out.println("**** end contents Curly body");
//         } else if (node instanceof GroupCurly) {
//             System.out.println(node);
//             printObjectTree(((GroupCurly)node).atom);
//             System.out.println("**** end contents GroupCurly body");
//         } else if (node instanceof GroupTail) {
//             System.out.println(node);
//             System.out.println("Tail next is "+node.next);
//             return;
//         } else {
//             System.out.println(node);
//         }
//         node = node.next;
//         if (node != null)
//             System.out.println("->next:");
//         if (node == Pattern.accept) {
//             System.out.println("Accept Node");
//             node = null;
//         }
//     }
// }
//


/*
     * The following private methods are mainly used to improve the
     * readability of the code. In order to let the Java compiler easily
     * inline them, we should not put many assertions or error checks in them.
     */

/**
 * Indicates whether a particular flag is set or not.
 */
private has(f:number):boolean {
    return (this._flags & f) != 0;
}
//
// /**
//  * Match next character, signal error if failed.
//  */
// private accept(ch:number, s:String):void {
//     let testChar:number = temp[cursor++];
//     if (has(COMMENTS))
//         testChar = parsePastWhitespace(testChar);
//     if (ch != testChar) {
//         throw error(s);
//     }
// }
//
// /**
//  * Mark the end of pattern with a specific character.
//  */
// private mark(c:number):void {
//     temp[patternLength] = c;
// }
//
// /**
//  * Peek the next character, and do not advance the cursor.
//  */
// private int peek() {
//     let ch:number = temp[cursor];
//     if (has(COMMENTS))
//         ch = peekPastWhitespace(ch);
//     return ch;
// }
//
// /**
//  * Read the next character, and advance the cursor by one.
//  */
// private int read() {
//     let ch:number = temp[cursor++];
//     if (has(COMMENTS))
//         ch = parsePastWhitespace(ch);
//     return ch;
// }
//
// /**
//  * Read the next character, and advance the cursor by one,
//  * ignoring the COMMENTS setting
//  */
// private int readEscaped() {
//     let ch:number = temp[cursor++];
//     return ch;
// }
//
// /**
//  * Advance the cursor by one, and peek the next character.
//  */
// private int next() {
//     let ch:number = temp[++cursor];
//     if (has(COMMENTS))
//         ch = peekPastWhitespace(ch);
//     return ch;
// }
//
// /**
//  * Advance the cursor by one, and peek the next character,
//  * ignoring the COMMENTS setting
//  */
// private int nextEscaped() {
//     let ch:number = temp[++cursor];
//     return ch;
// }
//
// /**
//  * If in xmode peek past whitespace and comments.
//  */
// private peekPastWhitespace(ch:number):number {
//     while (ASCII.isSpace(ch) || ch == '#') {
//         while (ASCII.isSpace(ch))
//             ch = temp[++cursor];
//         if (ch == '#') {
//             ch = peekPastLine();
//         }
//     }
//     return ch;
// }
//
// /**
//  * If in xmode parse past whitespace and comments.
//  */
// private parsePastWhitespace(ch:number):number {
//     while (ASCII.isSpace(ch) || ch == '#') {
//         while (ASCII.isSpace(ch))
//             ch = temp[cursor++];
//         if (ch == '#')
//             ch = parsePastLine();
//     }
//     return ch;
// }
//
// /**
//  * xmode parse past comment to end of line.
//  */
// private int parsePastLine() {
//     let ch:number = temp[cursor++];
//     while (ch != 0 && !isLineSeparator(ch))
//         ch = temp[cursor++];
//     return ch;
// }
//
// /**
//  * xmode peek past comment to end of line.
//  */
// private int peekPastLine() {
//     let ch:number = temp[++cursor];
//     while (ch != 0 && !isLineSeparator(ch))
//         ch = temp[++cursor];
//     return ch;
// }
//
// /**
//  * Determines if character is a line separator in the current mode
//  */
// private isLineSeparator(ch:number):boolean {
//     if (has(UNIX_LINES)) {
//         return ch == '\n';
//     } else {
//         return (ch == '\n' ||
//             ch == '\r' ||
//             (ch|1) == '\u2029' ||
//             ch == '\u0085');
//     }
// }
//
// /**
//  * Read the character after the next one, and advance the cursor by two.
//  */
// private int skip() {
//     let i:number = cursor;
//     let ch:number = temp[i+1];
//     cursor = i + 2;
//     return ch;
// }
//
// /**
//  * Unread one next character, and retreat cursor by one.
//  */
// private void unread() {
//     cursor--;
// }
//
// /**
//  * Internal method used for handling all syntax errors. The pattern is
//  * displayed with a pointer to aid in locating the syntax error.
//  */
// private error(s:String):PatternSyntaxException {
//     return new PatternSyntaxException(s, normalizedPattern,  cursor - 1);
// }
//
// /**
//  * Determines if there is any supplementary character or unpaired
//  * surrogate in the specified range.
//  */
// private findSupplementary(start:number, end:number):boolean {
//     for(let i:number = start; i < end; i++) {
//         if (isSupplementary(temp[i]))
//             return true;
//     }
//     return false;
// }

/**
 * Determines if the specified code point is a supplementary
 * character or unpaired surrogate.
 */
private static isSupplementary(ch:number):boolean {
    return ch >= Character.MIN_SUPPLEMENTARY_CODE_POINT ||
        Character.isSurrogate(String.fromCharCode(ch));
}
//
// /**
//  *  The following methods handle the main parsing. They are sorted
//  *  according to their precedence order, the lowest one first.
//  */
//
// /**
//  * The expression is parsed with branch nodes added for alternations.
//  * This may be called recursively to parse sub expressions that may
//  * contain alternations.
//  */
// private expr(end:Node):Node {
//     Node prev = null;
//     Node firstTail = null;
//     Branch branch = null;
//     Node branchConn = null;
//
//     for (;;) {
//         Node node = sequence(end);
//         Node nodeTail = root;      //double return
//         if (prev == null) {
//             prev = node;
//             firstTail = nodeTail;
//         } else {
//             // Branch
//             if (branchConn == null) {
//                 branchConn = new BranchConn();
//                 branchConn.next = end;
//             }
//             if (node == end) {
//                 // if the node returned from sequence() is "end"
//                 // we have an empty expr, set a null atom into
//                 // the branch to indicate to go "next" directly.
//                 node = null;
//             } else {
//                 // the "tail.next" of each atom goes to branchConn
//                 nodeTail.next = branchConn;
//             }
//             if (prev == branch) {
//                 branch.add(node);
//             } else {
//                 if (prev == end) {
//                     prev = null;
//                 } else {
//                     // replace the "end" with "branchConn" at its tail.next
//                     // when put the "prev" into the branch as the first atom.
//                     firstTail.next = branchConn;
//                 }
//                 prev = branch = new Branch(prev, node, branchConn);
//             }
//         }
//         if (peek() != '|') {
//             return prev;
//         }
//         next();
//     }
// }
//
// @SuppressWarnings("fallthrough")
// /**
//  * Parsing of sequences between alternations.
//  */
// private sequence(end:Node):Node {
//     Node head = null;
//     Node tail = null;
//     Node node = null;
//     LOOP:
//         for (;;) {
//             let ch:number = peek();
//             switch (ch) {
//                 case '(':
//                     // Because group handles its own closure,
//                     // we need to treat it differently
//                     node = group0();
//                     // Check for comment or flag group
//                     if (node == null)
//                         continue;
//                     if (head == null)
//                         head = node;
//                     else
//                         tail.next = node;
//                     // Double return: Tail was returned in root
//                     tail = root;
//                     continue;
//                 case '[':
//                     node = clazz(true);
//                     break;
//                 case '\\':
//                     ch = nextEscaped();
//                     if (ch == 'p' || ch == 'P') {
//                         let oneLetter:boolean = true;
//                         let comp:boolean = (ch == 'P');
//                         ch = next(); // Consume { if present
//                         if (ch != '{') {
//                             unread();
//                         } else {
//                             oneLetter = false;
//                         }
//                         node = family(oneLetter, comp);
//                     } else {
//                         unread();
//                         node = atom();
//                     }
//                     break;
//                 case '^':
//                     next();
//                     if (has(MULTILINE)) {
//                         if (has(UNIX_LINES))
//                             node = new UnixCaret();
//                         else
//                             node = new Caret();
//                     } else {
//                         node = new Begin();
//                     }
//                     break;
//                 case '$':
//                     next();
//                     if (has(UNIX_LINES))
//                         node = new UnixDollar(has(MULTILINE));
//                     else
//                         node = new Dollar(has(MULTILINE));
//                     break;
//                 case '.':
//                     next();
//                     if (has(DOTALL)) {
//                         node = new All();
//                     } else {
//                         if (has(UNIX_LINES))
//                             node = new UnixDot();
//                         else {
//                             node = new Dot();
//                         }
//                     }
//                     break;
//                 case '|':
//                 case ')':
//                     break LOOP;
//                 case ']': // Now interpreting dangling ] and } as literals
//                 case '}':
//                     node = atom();
//                     break;
//                 case '?':
//                 case '*':
//                 case '+':
//                     next();
//                     throw error("Dangling meta character '" + ((char)ch) + "'");
//                 case 0:
//                     if (cursor >= patternLength) {
//                         break LOOP;
//                     }
//                 // Fall through
//                 default:
//                     node = atom();
//                     break;
//             }
//
//             node = closure(node);
//
//             if (head == null) {
//                 head = tail = node;
//             } else {
//                 tail.next = node;
//                 tail = node;
//             }
//         }
//     if (head == null) {
//         return end;
//     }
//     tail.next = end;
//     root = tail;      //double return
//     return head;
// }
//
// @SuppressWarnings("fallthrough")
// /**
//  * Parse and add a new Single or Slice.
//  */
// private Node atom() {
//     let first:number = 0;
//     let prev:number = -1;
//     let hasSupplementary:boolean = false;
//     let ch:number = peek();
//     for (;;) {
//         switch (ch) {
//             case '*':
//             case '+':
//             case '?':
//             case '{':
//                 if (first > 1) {
//                     cursor = prev;    // Unwind one character
//                     first--;
//                 }
//                 break;
//             case '$':
//             case '.':
//             case '^':
//             case '(':
//             case '[':
//             case '|':
//             case ')':
//                 break;
//             case '\\':
//                 ch = nextEscaped();
//                 if (ch == 'p' || ch == 'P') { // Property
//                     if (first > 0) { // Slice is waiting; handle it first
//                         unread();
//                         break;
//                     } else { // No slice; just return the family node
//                         let comp:boolean = (ch == 'P');
//                         let oneLetter:boolean = true;
//                         ch = next(); // Consume { if present
//                         if (ch != '{')
//                             unread();
//                         else
//                             oneLetter = false;
//                         return family(oneLetter, comp);
//                     }
//                 }
//                 unread();
//                 prev = cursor;
//                 ch = escape(false, first == 0, false);
//                 if (ch >= 0) {
//                     append(ch, first);
//                     first++;
//                     if (isSupplementary(ch)) {
//                         hasSupplementary = true;
//                     }
//                     ch = peek();
//                     continue;
//                 } else if (first == 0) {
//                     return root;
//                 }
//                 // Unwind meta escape sequence
//                 cursor = prev;
//                 break;
//             case 0:
//                 if (cursor >= patternLength) {
//                     break;
//                 }
//             // Fall through
//             default:
//                 prev = cursor;
//                 append(ch, first);
//                 first++;
//                 if (isSupplementary(ch)) {
//                     hasSupplementary = true;
//                 }
//                 ch = next();
//                 continue;
//         }
//         break;
//     }
//     if (first == 1) {
//         return newSingle(this.buffer[0]);
//     } else {
//         return newSlice(this.buffer, first, hasSupplementary);
//     }
// }
//
// private append(ch:number, len:number):void {
//     if (len >= this.buffer.length) {
//         let tmp:Array<number> = new int[len+len];
//         System.arraycopy(this.buffer, 0, tmp, 0, len);
//         buffer = tmp;
//     }
//     buffer[len] = ch;
// }
//
// /**
//  * Parses a backref greedily, taking as many numbers as it
//  * can. The first digit is always treated as a backref, but
//  * multi digit numbers are only treated as a backref if at
//  * least that many backrefs exist at this point in the regex.
//  */
// private ref(refNum:number):Node {
//     let done:boolean = false;
//     while(!done) {
//         let ch:number = peek();
//         switch(ch) {
//             case '0':
//             case '1':
//             case '2':
//             case '3':
//             case '4':
//             case '5':
//             case '6':
//             case '7':
//             case '8':
//             case '9':
//                 let newRefNum:number = (refNum * 10) + (ch - '0');
//                 // Add another number if it doesn't make a group
//                 // that doesn't exist
//                 if (capturingGroupCount - 1 < newRefNum) {
//                     done = true;
//                     break;
//                 }
//                 refNum = newRefNum;
//                 read();
//                 break;
//             default:
//                 done = true;
//                 break;
//         }
//     }
//     if (has(CASE_INSENSITIVE))
//         return new CIBackRef(refNum, has(UNICODE_CASE));
//     else
//         return new BackRef(refNum);
// }
//
// /**
//  * Parses an escape sequence to determine the actual value that needs
//  * to be matched.
//  * If -1 is returned and create was true a new object was added to the tree
//  * to handle the escape sequence.
//  * If the returned value is greater than zero, it is the value that
//  * matches the escape sequence.
//  */
// private escape(inclass:boolean, create:boolean, isrange:boolean):number {
//     let ch:number = skip();
//     switch (ch) {
//         case '0':
//             return o();
//         case '1':
//         case '2':
//         case '3':
//         case '4':
//         case '5':
//         case '6':
//         case '7':
//         case '8':
//         case '9':
//             if (inclass) break;
//             if (create) {
//                 root = ref((ch - '0'));
//             }
//             return -1;
//         case 'A':
//             if (inclass) break;
//             if (create) root = new Begin();
//             return -1;
//         case 'B':
//             if (inclass) break;
//             if (create) root = new Bound(Bound.NONE, has(UNICODE_CHARACTER_CLASS));
//             return -1;
//         case 'C':
//             break;
//         case 'D':
//             if (create) root = has(UNICODE_CHARACTER_CLASS)
//                 ? new Utype(UnicodeProp.DIGIT).complement()
//                 : new Ctype(ASCII.DIGIT).complement();
//             return -1;
//         case 'E':
//         case 'F':
//             break;
//         case 'G':
//             if (inclass) break;
//             if (create) root = new LastMatch();
//             return -1;
//         case 'H':
//             if (create) root = new HorizWS().complement();
//             return -1;
//         case 'I':
//         case 'J':
//         case 'K':
//         case 'L':
//         case 'M':
//         case 'N':
//         case 'O':
//         case 'P':
//         case 'Q':
//             break;
//         case 'R':
//             if (inclass) break;
//             if (create) root = new LineEnding();
//             return -1;
//         case 'S':
//             if (create) root = has(UNICODE_CHARACTER_CLASS)
//                 ? new Utype(UnicodeProp.WHITE_SPACE).complement()
//                 : new Ctype(ASCII.SPACE).complement();
//             return -1;
//         case 'T':
//         case 'U':
//             break;
//         case 'V':
//             if (create) root = new VertWS().complement();
//             return -1;
//         case 'W':
//             if (create) root = has(UNICODE_CHARACTER_CLASS)
//                 ? new Utype(UnicodeProp.WORD).complement()
//                 : new Ctype(ASCII.WORD).complement();
//             return -1;
//         case 'X':
//         case 'Y':
//             break;
//         case 'Z':
//             if (inclass) break;
//             if (create) {
//                 if (has(UNIX_LINES))
//                     root = new UnixDollar(false);
//                 else
//                     root = new Dollar(false);
//             }
//             return -1;
//         case 'a':
//             return '\007';
//         case 'b':
//             if (inclass) break;
//             if (create) root = new Bound(Bound.BOTH, has(UNICODE_CHARACTER_CLASS));
//             return -1;
//         case 'c':
//             return c();
//         case 'd':
//             if (create) root = has(UNICODE_CHARACTER_CLASS)
//                 ? new Utype(UnicodeProp.DIGIT)
//                 : new Ctype(ASCII.DIGIT);
//             return -1;
//         case 'e':
//             return '\033';
//         case 'f':
//             return '\f';
//         case 'g':
//             break;
//         case 'h':
//             if (create) root = new HorizWS();
//             return -1;
//         case 'i':
//         case 'j':
//             break;
//         case 'k':
//             if (inclass)
//                 break;
//             if (read() != '<')
//                 throw error("\\k is not followed by '<' for named capturing group");
//             String name = groupname(read());
//             if (!namedGroups().containsKey(name))
//                 throw error("(named capturing group <"+ name+"> does not exit");
//             if (create) {
//                 if (has(CASE_INSENSITIVE))
//                     root = new CIBackRef(namedGroups().get(name), has(UNICODE_CASE));
//                 else
//                     root = new BackRef(namedGroups().get(name));
//             }
//             return -1;
//         case 'l':
//         case 'm':
//             break;
//         case 'n':
//             return '\n';
//         case 'o':
//         case 'p':
//         case 'q':
//             break;
//         case 'r':
//             return '\r';
//         case 's':
//             if (create) root = has(UNICODE_CHARACTER_CLASS)
//                 ? new Utype(UnicodeProp.WHITE_SPACE)
//                 : new Ctype(ASCII.SPACE);
//             return -1;
//         case 't':
//             return '\t';
//         case 'u':
//             return u();
//         case 'v':
//             // '\v' was implemented as VT/0x0B in releases < 1.8 (though
//             // undocumented). In JDK8 '\v' is specified as a predefined
//             // character class for all vertical whitespace characters.
//             // So [-1, root=VertWS node] pair is returned (instead of a
//             // single 0x0B). This breaks the range if '\v' is used as
//             // the start or end value, such as [\v-...] or [...-\v], in
//             // which a single definite value (0x0B) is expected. For
//             // compatibility concern '\013'/0x0B is returned if isrange.
//             if (isrange)
//                 return '\013';
//             if (create) root = new VertWS();
//             return -1;
//         case 'w':
//             if (create) root = has(UNICODE_CHARACTER_CLASS)
//                 ? new Utype(UnicodeProp.WORD)
//                 : new Ctype(ASCII.WORD);
//             return -1;
//         case 'x':
//             return x();
//         case 'y':
//             break;
//         case 'z':
//             if (inclass) break;
//             if (create) root = new End();
//             return -1;
//         default:
//             return ch;
//     }
//     throw error("Illegal/unsupported escape sequence");
// }
//
// /**
//  * Parse a character class, and return the node that matches it.
//  *
//  * Consumes a ] on the way out if consume is true. Usually consume
//  * is true except for the case of [abc&&def] where def is a separate
//  * right hand node with "understood" brackets.
//  */
// private clazz(consume:boolean):CharProperty {
//     CharProperty prev = null;
//     CharProperty node = null;
//     BitClass bits = new BitClass();
//     let include:boolean = true;
//     let firstInClass:boolean = true;
//     let ch:number = next();
//     for (;;) {
//         switch (ch) {
//             case '^':
//                 // Negates if first char in a class, otherwise literal
//                 if (firstInClass) {
//                     if (temp[cursor-1] != '[')
//                         break;
//                     ch = next();
//                     include = !include;
//                     continue;
//                 } else {
//                     // ^ not first in class, treat as literal
//                     break;
//                 }
//             case '[':
//                 firstInClass = false;
//                 node = clazz(true);
//                 if (prev == null)
//                     prev = node;
//                 else
//                     prev = union(prev, node);
//                 ch = peek();
//                 continue;
//             case '&':
//                 firstInClass = false;
//                 ch = next();
//                 if (ch == '&') {
//                     ch = next();
//                     CharProperty rightNode = null;
//                     while (ch != ']' && ch != '&') {
//                         if (ch == '[') {
//                             if (rightNode == null)
//                                 rightNode = clazz(true);
//                             else
//                                 rightNode = union(rightNode, clazz(true));
//                         } else { // abc&&def
//                             unread();
//                             rightNode = clazz(false);
//                         }
//                         ch = peek();
//                     }
//                     if (rightNode != null)
//                         node = rightNode;
//                     if (prev == null) {
//                         if (rightNode == null)
//                             throw error("Bad class syntax");
//                         else
//                             prev = rightNode;
//                     } else {
//                         prev = intersection(prev, node);
//                     }
//                 } else {
//                     // treat as a literal &
//                     unread();
//                     break;
//                 }
//                 continue;
//             case 0:
//                 firstInClass = false;
//                 if (cursor >= patternLength)
//                     throw error("Unclosed character class");
//                 break;
//             case ']':
//                 firstInClass = false;
//                 if (prev != null) {
//                     if (consume)
//                         next();
//                     return prev;
//                 }
//                 break;
//             default:
//                 firstInClass = false;
//                 break;
//         }
//         node = range(bits);
//         if (include) {
//             if (prev == null) {
//                 prev = node;
//             } else {
//                 if (prev != node)
//                     prev = union(prev, node);
//             }
//         } else {
//             if (prev == null) {
//                 prev = node.complement();
//             } else {
//                 if (prev != node)
//                     prev = setDifference(prev, node);
//             }
//         }
//         ch = peek();
//     }
// }
//
// private bitsOrSingle(bits:BitClass, ch:number):CharProperty {
//     /* Bits can only handle codepoints in [u+0000-u+00ff] range.
//            Use "single" node instead of bits when dealing with unicode
//            case folding for codepoints listed below.
//            (1)Uppercase out of range: u+00ff, u+00b5
//               toUpperCase(u+00ff) -> u+0178
//               toUpperCase(u+00b5) -> u+039c
//            (2)LatinSmallLetterLongS u+17f
//               toUpperCase(u+017f) -> u+0053
//            (3)LatinSmallLetterDotlessI u+131
//               toUpperCase(u+0131) -> u+0049
//            (4)LatinCapitalLetterIWithDotAbove u+0130
//               toLowerCase(u+0130) -> u+0069
//            (5)KelvinSign u+212a
//               toLowerCase(u+212a) ==> u+006B
//            (6)AngstromSign u+212b
//               toLowerCase(u+212b) ==> u+00e5
//         */
//     let d:number;
//     if (ch < 256 &&
//         !(has(CASE_INSENSITIVE) && has(UNICODE_CASE) &&
//             (ch == 0xff || ch == 0xb5 ||
//                 ch == 0x49 || ch == 0x69 ||  //I and i
//                 ch == 0x53 || ch == 0x73 ||  //S and s
//                 ch == 0x4b || ch == 0x6b ||  //K and k
//                 ch == 0xc5 || ch == 0xe5)))  //A+ring
//         return bits.add(ch, flags());
//     return newSingle(ch);
// }
//
// /**
//  * Parse a single character or a character range in a character class
//  * and return its representative node.
//  */
// private range(bits:BitClass):CharProperty {
//     let ch:number = peek();
//     if (ch == '\\') {
//         ch = nextEscaped();
//         if (ch == 'p' || ch == 'P') { // A property
//             let comp:boolean = (ch == 'P');
//             let oneLetter:boolean = true;
//             // Consume { if present
//             ch = next();
//             if (ch != '{')
//                 unread();
//             else
//                 oneLetter = false;
//             return family(oneLetter, comp);
//         } else { // ordinary escape
//             let isrange:boolean = temp[cursor+1] == '-';
//             unread();
//             ch = escape(true, true, isrange);
//             if (ch == -1)
//                 return (CharProperty) root;
//         }
//     } else {
//         next();
//     }
//     if (ch >= 0) {
//         if (peek() == '-') {
//             let endRange:number = temp[cursor+1];
//             if (endRange == '[') {
//                 return bitsOrSingle(bits, ch);
//             }
//             if (endRange != ']') {
//                 next();
//                 let m:number = peek();
//                 if (m == '\\') {
//                     m = escape(true, false, true);
//                 } else {
//                     next();
//                 }
//                 if (m < ch) {
//                     throw error("Illegal character range");
//                 }
//                 if (has(CASE_INSENSITIVE))
//                     return caseInsensitiveRangeFor(ch, m);
//                 else
//                     return rangeFor(ch, m);
//             }
//         }
//         return bitsOrSingle(bits, ch);
//     }
//     throw error("Unexpected character '"+((char)ch)+"'");
// }
//
// /**
//  * Parses a Unicode character family and returns its representative node.
//  */
// private CharProperty family(singleLetter:boolean,
//     boolean maybeComplement)
// {
//     next();
//     String name;
//     CharProperty node = null;
//
//     if (singleLetter) {
//         let c:number = temp[cursor];
//         if (!Character.isSupplementaryCodePoint(c)) {
//             name = String.valueOf((char)c);
//         } else {
//             name = new String(temp, cursor, 1);
//         }
//         read();
//     } else {
//         let i:number = cursor;
//         mark('}');
//         while(read() != '}') {
//         }
//         mark('\000');
//         let j:number = cursor;
//         if (j > patternLength)
//             throw error("Unclosed character family");
//         if (i + 1 >= j)
//             throw error("Empty character family");
//         name = new String(temp, i, j-i-1);
//     }
//
//     let i:number = name.indexOf('=');
//     if (i != -1) {
//         // property construct \p{name=value}
//         String value = name.substring(i + 1);
//         name = name.substring(0, i).toLowerCase(Locale.ENGLISH);
//         if ("sc".equals(name) || "script".equals(name)) {
//             node = unicodeScriptPropertyFor(value);
//         } else if ("blk".equals(name) || "block".equals(name)) {
//             node = unicodeBlockPropertyFor(value);
//         } else if ("gc".equals(name) || "general_category".equals(name)) {
//             node = charPropertyNodeFor(value);
//         } else {
//             throw error("Unknown Unicode property {name=<" + name + ">, "
//                 + "value=<" + value + ">}");
//         }
//     } else {
//         if (name.startsWith("In")) {
//             // \p{inBlockName}
//             node = unicodeBlockPropertyFor(name.substring(2));
//         } else if (name.startsWith("Is")) {
//             // \p{isGeneralCategory} and \p{isScriptName}
//             name = name.substring(2);
//             UnicodeProp uprop = UnicodeProp.forName(name);
//             if (uprop != null)
//                 node = new Utype(uprop);
//             if (node == null)
//                 node = CharPropertyNames.charPropertyFor(name);
//             if (node == null)
//                 node = unicodeScriptPropertyFor(name);
//         } else {
//             if (has(UNICODE_CHARACTER_CLASS)) {
//                 UnicodeProp uprop = UnicodeProp.forPOSIXName(name);
//                 if (uprop != null)
//                     node = new Utype(uprop);
//             }
//             if (node == null)
//                 node = charPropertyNodeFor(name);
//         }
//     }
//     if (maybeComplement) {
//         if (node instanceof Category || node instanceof Block)
//             hasSupplementary = true;
//         node = node.complement();
//     }
//     return node;
// }
//
//
// /**
//  * Returns a CharProperty matching all characters belong to
//  * a UnicodeScript.
//  */
// private unicodeScriptPropertyFor(name:String):CharProperty {
//     final Character.UnicodeScript script;
//     try {
//         script = Character.UnicodeScript.forName(name);
//     } catch (IllegalArgumentException iae) {
//         throw error("Unknown character script name {" + name + "}");
//     }
//     return new Script(script);
// }
//
// /**
//  * Returns a CharProperty matching all characters in a UnicodeBlock.
//  */
// private unicodeBlockPropertyFor(name:String):CharProperty {
//     final Character.UnicodeBlock block;
//     try {
//         block = Character.UnicodeBlock.forName(name);
//     } catch (IllegalArgumentException iae) {
//         throw error("Unknown character block name {" + name + "}");
//     }
//     return new Block(block);
// }
//
// /**
//  * Returns a CharProperty matching all characters in a named property.
//  */
// private charPropertyNodeFor(name:String):CharProperty {
//     CharProperty p = CharPropertyNames.charPropertyFor(name);
//     if (p == null)
//         throw error("Unknown character property name {" + name + "}");
//     return p;
// }
//
// /**
//  * Parses and returns the name of a "named capturing group", the trailing
//  * ">" is consumed after parsing.
//  */
// private groupname(ch:number):String {
//     StringBuilder sb = new StringBuilder();
//     sb.append(Character.toChars(ch));
//     while (ASCII.isLower(ch=read()) || ASCII.isUpper(ch) ||
//     ASCII.isDigit(ch)) {
//         sb.append(Character.toChars(ch));
//     }
//     if (sb.length() == 0)
//         throw error("named capturing group has 0 length name");
//     if (ch != '>')
//         throw error("named capturing group is missing trailing '>'");
//     return sb.toString();
// }
//
// /**
//  * Parses a group and returns the head node of a set of nodes that process
//  * the group. Sometimes a double return system is used where the tail is
//  * returned in root.
//  */
// private Node group0() {
//     let capturingGroup:boolean = false;
//     Node head = null;
//     Node tail = null;
//     let save:number = flags;
//     root = null;
//     let ch:number = next();
//     if (ch == '?') {
//         ch = skip();
//         switch (ch) {
//             case ':':   //  (?:xxx) pure group
//                 head = createGroup(true);
//                 tail = root;
//                 head.next = expr(tail);
//                 break;
//             case '=':   // (?=xxx) and (?!xxx) lookahead
//             case '!':
//                 head = createGroup(true);
//                 tail = root;
//                 head.next = expr(tail);
//                 if (ch == '=') {
//                     head = tail = new Pos(head);
//                 } else {
//                     head = tail = new Neg(head);
//                 }
//                 break;
//             case '>':   // (?>xxx)  independent group
//                 head = createGroup(true);
//                 tail = root;
//                 head.next = expr(tail);
//                 head = tail = new Ques(head, INDEPENDENT);
//                 break;
//             case '<':   // (?<xxx)  look behind
//                 ch = read();
//                 if (ASCII.isLower(ch) || ASCII.isUpper(ch)) {
//                     // named captured group
//                     String name = groupname(ch);
//                     if (namedGroups().containsKey(name))
//                         throw error("Named capturing group <" + name
//                             + "> is already defined");
//                     capturingGroup = true;
//                     head = createGroup(false);
//                     tail = root;
//                     namedGroups().put(name, capturingGroupCount-1);
//                     head.next = expr(tail);
//                     break;
//                 }
//                 let start:number = cursor;
//                 head = createGroup(true);
//                 tail = root;
//                 head.next = expr(tail);
//                 tail.next = lookbehindEnd;
//                 TreeInfo info = new TreeInfo();
//                 head.study(info);
//                 if (info.maxValid == false) {
//                     throw error("Look-behind group does not have "
//                         + "an obvious maximum length");
//                 }
//                 let hasSupplementary:boolean = findSupplementary(start, patternLength);
//                 if (ch == '=') {
//                     head = tail = (hasSupplementary ?
//                         new BehindS(head, info.maxLength,
//                             info.minLength) :
//                         new Behind(head, info.maxLength,
//                             info.minLength));
//                 } else if (ch == '!') {
//                     head = tail = (hasSupplementary ?
//                         new NotBehindS(head, info.maxLength,
//                             info.minLength) :
//                         new NotBehind(head, info.maxLength,
//                             info.minLength));
//                 } else {
//                     throw error("Unknown look-behind group");
//                 }
//                 break;
//             case '$':
//             case '@':
//                 throw error("Unknown group type");
//             default:    // (?xxx:) inlined match flags
//                 unread();
//                 addFlag();
//                 ch = read();
//                 if (ch == ')') {
//                     return null;    // Inline modifier only
//                 }
//                 if (ch != ':') {
//                     throw error("Unknown inline modifier");
//                 }
//                 head = createGroup(true);
//                 tail = root;
//                 head.next = expr(tail);
//                 break;
//         }
//     } else { // (xxx) a regular group
//         capturingGroup = true;
//         head = createGroup(false);
//         tail = root;
//         head.next = expr(tail);
//     }
//
//     accept(')', "Unclosed group");
//     flags = save;
//
//     // Check for quantifiers
//     Node node = closure(head);
//     if (node == head) { // No closure
//         root = tail;
//         return node;    // Dual return
//     }
//     if (head == tail) { // Zero length assertion
//         root = node;
//         return node;    // Dual return
//     }
//
//     if (node instanceof Ques) {
//         Ques ques = (Ques) node;
//         if (ques.type == POSSESSIVE) {
//             root = node;
//             return node;
//         }
//         tail.next = new BranchConn();
//         tail = tail.next;
//         if (ques.type == GREEDY) {
//             head = new Branch(head, null, tail);
//         } else { // Reluctant quantifier
//             head = new Branch(null, head, tail);
//         }
//         root = tail;
//         return head;
//     } else if (node instanceof Curly) {
//         Curly curly = (Curly) node;
//         if (curly.type == POSSESSIVE) {
//             root = node;
//             return node;
//         }
//         // Discover if the group is deterministic
//         TreeInfo info = new TreeInfo();
//         if (head.study(info)) { // Deterministic
//             GroupTail temp = (GroupTail) tail;
//             head = root = new GroupCurly(head.next, curly.cmin,
//                 curly.cmax, curly.type,
//                 ((GroupTail)tail).localIndex,
//                 ((GroupTail)tail).groupIndex,
//                 capturingGroup);
//             return head;
//         } else { // Non-deterministic
//             let temp:number = ((GroupHead) head).localIndex;
//             Loop loop;
//             if (curly.type == GREEDY)
//                 loop = new Loop(this.localCount, temp);
//             else  // Reluctant Curly
//                 loop = new LazyLoop(this.localCount, temp);
//             Prolog prolog = new Prolog(loop);
//             this.localCount += 1;
//             loop.cmin = curly.cmin;
//             loop.cmax = curly.cmax;
//             loop.body = head;
//             tail.next = loop;
//             root = loop;
//             return prolog; // Dual return
//         }
//     }
//     throw error("Internal logic error");
// }
//
// /**
//  * Create group head and tail nodes using double return. If the group is
//  * created with anonymous true then it is a pure group and should not
//  * affect group counting.
//  */
// private createGroup(anonymous:boolean):Node {
//     let localIndex:number = localCount++;
//     let groupIndex:number = 0;
//     if (!anonymous)
//         groupIndex = capturingGroupCount++;
//     GroupHead head = new GroupHead(localIndex);
//     root = new GroupTail(localIndex, groupIndex);
//     if (!anonymous && groupIndex < 10)
//         groupNodes[groupIndex] = head;
//     return head;
// }
//
// @SuppressWarnings("fallthrough")
// /**
//  * Parses inlined match flags and set them appropriately.
//  */
// private void addFlag() {
//     let ch:number = peek();
//     for (;;) {
//         switch (ch) {
//             case 'i':
//                 flags |= CASE_INSENSITIVE;
//                 break;
//             case 'm':
//                 flags |= MULTILINE;
//                 break;
//             case 's':
//                 flags |= DOTALL;
//                 break;
//             case 'd':
//                 flags |= UNIX_LINES;
//                 break;
//             case 'u':
//                 flags |= UNICODE_CASE;
//                 break;
//             case 'c':
//                 flags |= CANON_EQ;
//                 break;
//             case 'x':
//                 flags |= COMMENTS;
//                 break;
//             case 'U':
//                 flags |= (UNICODE_CHARACTER_CLASS | UNICODE_CASE);
//                 break;
//             case '-': // subFlag then fall through
//                 ch = next();
//                 subFlag();
//             default:
//                 return;
//         }
//         ch = next();
//     }
// }
//
// @SuppressWarnings("fallthrough")
// /**
//  * Parses the second part of inlined match flags and turns off
//  * flags appropriately.
//  */
// private void subFlag() {
//     let ch:number = peek();
//     for (;;) {
//         switch (ch) {
//             case 'i':
//                 flags &= ~CASE_INSENSITIVE;
//                 break;
//             case 'm':
//                 flags &= ~MULTILINE;
//                 break;
//             case 's':
//                 flags &= ~DOTALL;
//                 break;
//             case 'd':
//                 flags &= ~UNIX_LINES;
//                 break;
//             case 'u':
//                 flags &= ~UNICODE_CASE;
//                 break;
//             case 'c':
//                 flags &= ~CANON_EQ;
//                 break;
//             case 'x':
//                 flags &= ~COMMENTS;
//                 break;
//             case 'U':
//                 flags &= ~(UNICODE_CHARACTER_CLASS | UNICODE_CASE);
//             default:
//                 return;
//         }
//         ch = next();
//     }
// }

    static MAX_REPS: number = 0x7FFFFFFF;

    static GREEDY: number = 0;

    static LAZY: number = 1;

    static POSSESSIVE: number = 2;

    static INDEPENDENT: number = 3;

// /**
//  * Processes repetition. If the next character peeked is a quantifier
//  * then new nodes must be appended to handle the repetition.
//  * Prev could be a single or a group, so it could be a chain of nodes.
//  */
// private closure(prev:Node):Node {
//     let atom:Node;
//     let ch:number = peek();
//     switch (ch) {
//         case '?':
//             ch = next();
//             if (ch == '?') {
//                 next();
//                 return new Ques(prev, LAZY);
//             } else if (ch == '+') {
//                 next();
//                 return new Ques(prev, POSSESSIVE);
//             }
//             return new Ques(prev, GREEDY);
//         case '*':
//             ch = next();
//             if (ch == '?') {
//                 next();
//                 return new Curly(prev, 0, MAX_REPS, LAZY);
//             } else if (ch == '+') {
//                 next();
//                 return new Curly(prev, 0, MAX_REPS, POSSESSIVE);
//             }
//             return new Curly(prev, 0, MAX_REPS, GREEDY);
//         case '+':
//             ch = next();
//             if (ch == '?') {
//                 next();
//                 return new Curly(prev, 1, MAX_REPS, LAZY);
//             } else if (ch == '+') {
//                 next();
//                 return new Curly(prev, 1, MAX_REPS, POSSESSIVE);
//             }
//             return new Curly(prev, 1, MAX_REPS, GREEDY);
//         case '{':
//             ch = temp[cursor+1];
//             if (ASCII.isDigit(ch)) {
//                 skip();
//                 let cmin:number = 0;
//                 do {
//                     cmin = cmin * 10 + (ch - '0');
//                 } while (ASCII.isDigit(ch = read()));
//                 let cmax:number = cmin;
//                 if (ch == ',') {
//                     ch = read();
//                     cmax = MAX_REPS;
//                     if (ch != '}') {
//                         cmax = 0;
//                         while (ASCII.isDigit(ch)) {
//                             cmax = cmax * 10 + (ch - '0');
//                             ch = read();
//                         }
//                     }
//                 }
//                 if (ch != '}')
//                     throw error("Unclosed counted closure");
//                 if (((cmin) | (cmax) | (cmax - cmin)) < 0)
//                     throw error("Illegal repetition range");
//                 Curly curly;
//                 ch = peek();
//                 if (ch == '?') {
//                     next();
//                     curly = new Curly(prev, cmin, cmax, LAZY);
//                 } else if (ch == '+') {
//                     next();
//                     curly = new Curly(prev, cmin, cmax, POSSESSIVE);
//                 } else {
//                     curly = new Curly(prev, cmin, cmax, GREEDY);
//                 }
//                 return curly;
//             } else {
//                 throw error("Illegal repetition");
//             }
//         default:
//             return prev;
//     }
// }
//
// /**
//  *  Utility method for parsing control escape sequences.
//  */
// private int c() {
//     if (cursor < patternLength) {
//         return read() ^ 64;
//     }
//     throw error("Illegal control escape sequence");
// }
//
// /**
//  *  Utility method for parsing octal escape sequences.
//  */
// private int o() {
//     let n:number = read();
//     if (((n-'0')|('7'-n)) >= 0) {
//         let m:number = read();
//         if (((m-'0')|('7'-m)) >= 0) {
//             let o:number = read();
//             if ((((o-'0')|('7'-o)) >= 0) && (((n-'0')|('3'-n)) >= 0)) {
//                 return (n - '0') * 64 + (m - '0') * 8 + (o - '0');
//             }
//             unread();
//             return (n - '0') * 8 + (m - '0');
//         }
//         unread();
//         return (n - '0');
//     }
//     throw error("Illegal octal escape sequence");
// }
//
// /**
//  *  Utility method for parsing hexadecimal escape sequences.
//  */
// private int x() {
//     let n:number = read();
//     if (ASCII.isHexDigit(n)) {
//         let m:number = read();
//         if (ASCII.isHexDigit(m)) {
//             return ASCII.toDigit(n) * 16 + ASCII.toDigit(m);
//         }
//     } else if (n == '{' && ASCII.isHexDigit(peek())) {
//         let ch:number = 0;
//         while (ASCII.isHexDigit(n = read())) {
//             ch = (ch << 4) + ASCII.toDigit(n);
//             if (ch > Character.MAX_CODE_POINT)
//                 throw error("Hexadecimal codepoint is too big");
//         }
//         if (n != '}')
//             throw error("Unclosed hexadecimal escape sequence");
//         return ch;
//     }
//     throw error("Illegal hexadecimal escape sequence");
// }
//
// /**
//  *  Utility method for parsing unicode escape sequences.
//  */
// private int cursor() {
//     return cursor;
// }
//
// private setcursor(pos:number):void {
//     cursor = pos;
// }
//
// private int uxxxx() {
//     let n:number = 0;
//     for(let i:number = 0; i < 4; i++) {
//         let ch:number = read();
//         if (!ASCII.isHexDigit(ch)) {
//             throw error("Illegal Unicode escape sequence");
//         }
//         n = n * 16 + ASCII.toDigit(ch);
//     }
//     return n;
// }
//
// private int u() {
//     let n:number = uxxxx();
//     if (Character.isHighSurrogate((char)n)) {
//         let cur:number = cursor();
//         if (read() == '\\' && read() == 'u') {
//             let n2:number = uxxxx();
//             if (Character.isLowSurrogate((char)n2))
//             return Character.toCodePoint((char)n, (char)n2);
//         }
//         setcursor(cur);
//     }
//     return n;
// }

//
// Utility methods for code point support
//

static countChars(seq:string, index:number, lengthInCodePoints:number):number {
    // optimization
    if (lengthInCodePoints == 1 && !Character.isHighSurrogate(seq.charAt(index))) {
        if(!(index >= 0 && index < seq.length)) {
            throw new Error();
        }
        return 1;
    }
    let length:number = seq.length;
    let x:number = index;
    if (lengthInCodePoints >= 0) {
        if(!(index >= 0 && index < length)) {
            throw new Error();
        }
        for(let i:number = 0; x < length && i < lengthInCodePoints; i++) {
            if (Character.isHighSurrogate(seq.charAt(x++))) {
                if (x < length && Character.isLowSurrogate(seq.charAt(x))) {
                    x++;
                }
            }
        }
        return x - index;
    }

    if(!(index >= 0 && index <= length)) {
        throw new Error();
    }
    if (index == 0) {
        return 0;
    }
    let len:number = -lengthInCodePoints;
    for(let i:number = 0; x > 0 && i < len; i++) {
        if (Character.isLowSurrogate(seq.charAt(--x))) {
            if (x > 0 && Character.isHighSurrogate(seq.charAt(x-1))) {
                x--;
            }
        }
    }
    return index - x;
}

private static countCodePoints(seq:string):number {
    let length:number = seq.length;
    let n:number = 0;
    for(let i:number = 0; i < length; ) {
        n++;
        if (Character.isHighSurrogate(seq.charAt(i++))) {
            if (i < length && Character.isLowSurrogate(seq.charAt(i))) {
                i++;
            }
        }
    }
    return n;
}

// /**
//  *  Creates a bit vector for matching Latin-1 values. A normal BitClass
//  *  never matches values above Latin-1, and a complemented BitClass always
//  *  matches values above Latin-1.
//  */
// private export class BitClass extends BmpCharProperty {
//     final boolean[] bits;
//     BitClass() { bits = new boolean[256]; }
//     private BitClass(boolean[] bits) { this.bits = bits; }
// add(c:number, flags:number):BitClass {
//     assert c >= 0 && c <= 255;
//     if ((flags & CASE_INSENSITIVE) != 0) {
//         if (ASCII.isAscii(c)) {
//             bits[ASCII.toUpper(c)] = true;
//             bits[ASCII.toLower(c)] = true;
//         } else if ((flags & UNICODE_CASE) != 0) {
//             bits[Character.toLowerCase(c)] = true;
//             bits[Character.toUpperCase(c)] = true;
//         }
//     }
//     bits[c] = true;
//     return this;
// }
// isSatisfiedBy(ch:number):boolean {
//     return ch < 256 && bits[ch];
// }
// }
//
// /**
//  *  Returns a suitably optimized, single character matcher.
//  */
// private CharProperty newSingle(final int ch) {
//     if (has(CASE_INSENSITIVE)) {
//         int lower, upper;
//         if (has(UNICODE_CASE)) {
//             upper = Character.toUpperCase(ch);
//             lower = Character.toLowerCase(upper);
//             if (upper != lower)
//                 return new SingleU(lower);
//         } else if (ASCII.isAscii(ch)) {
//             lower = ASCII.toLower(ch);
//             upper = ASCII.toUpper(ch);
//             if (lower != upper)
//                 return new SingleI(lower, upper);
//         }
//     }
//     if (isSupplementary(ch))
//         return new SingleS(ch);    // Match a given Unicode character
//     return new Single(ch);         // Match a given BMP character
// }
//
// /**
//  *  Utility method for creating a string slice matcher.
//  */
// private Node newSlice(buf:Array<number>, count:number, boolean hasSupplementary) {
//     let tmp:Array<number> = new int[count];
//     if (has(CASE_INSENSITIVE)) {
//         if (has(UNICODE_CASE)) {
//             for(let i:number = 0; i < count; i++) {
//                 tmp[i] = Character.toLowerCase(
//                     Character.toUpperCase(buf[i]));
//             }
//             return hasSupplementary? new SliceUS(tmp) : new SliceU(tmp);
//         }
//         for(let i:number = 0; i < count; i++) {
//             tmp[i] = ASCII.toLower(buf[i]);
//         }
//         return hasSupplementary? new SliceIS(tmp) : new SliceI(tmp);
//     }
//     for(let i:number = 0; i < count; i++) {
//         tmp[i] = buf[i];
//     }
//     return hasSupplementary ? new SliceS(tmp) : new Slice(tmp);
// }
//

//
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
//
// /**
//  *  This must be the very first initializer.
//  */
// static Node accept = new Node();
//
// static Node lastAccept = new LastNode();
//
// private export class CharPropertyNames {
//
//     static charPropertyFor(name:String):CharProperty {
//     CharPropertyFactory m = map.get(name);
//     return m == null ? null : m.make();
// }
//
// export abstract class CharPropertyFactory {
//     abstract CharProperty make();
// }
//
// private static void defCategory(name:String,
//     final int typeMask) {
//     map.put(name, new CharPropertyFactory() {
//         CharProperty make() { return new Category(typeMask);}});
// }
//
// private static void defRange(name:String,
//     final int lower, final int upper) {
//     map.put(name, new CharPropertyFactory() {
//         CharProperty make() { return rangeFor(lower, upper);}});
// }
//
// private static void defCtype(name:String,
//     final int ctype) {
//     map.put(name, new CharPropertyFactory() {
//         CharProperty make() { return new Ctype(ctype);}});
// }
//
// export abstract class CloneableProperty
//     extends CharProperty implements Cloneable
// {
//     public CloneableProperty clone() {
//     try {
//         return (CloneableProperty) super.clone();
//     } catch (CloneNotSupportedException e) {
//         throw new AssertionError(e);
//     }
// }
// }
//
// private static void defClone(name:String,
//     final CloneableProperty p) {
//     map.put(name, new CharPropertyFactory() {
//         CharProperty make() { return p.clone();}});
// }
//
// private static final HashMap<String, CharPropertyFactory> map
//     = new HashMap<>();
//
// static {
//     // Unicode character property aliases, defined in
//     // http://www.unicode.org/Public/UNIDATA/PropertyValueAliases.txt
//     defCategory("Cn", 1<<Character.UNASSIGNED);
//     defCategory("Lu", 1<<Character.UPPERCASE_LETTER);
//     defCategory("Ll", 1<<Character.LOWERCASE_LETTER);
//     defCategory("Lt", 1<<Character.TITLECASE_LETTER);
//     defCategory("Lm", 1<<Character.MODIFIER_LETTER);
//     defCategory("Lo", 1<<Character.OTHER_LETTER);
//     defCategory("Mn", 1<<Character.NON_SPACING_MARK);
//     defCategory("Me", 1<<Character.ENCLOSING_MARK);
//     defCategory("Mc", 1<<Character.COMBINING_SPACING_MARK);
//     defCategory("Nd", 1<<Character.DECIMAL_DIGIT_NUMBER);
//     defCategory("Nl", 1<<Character.LETTER_NUMBER);
//     defCategory("No", 1<<Character.OTHER_NUMBER);
//     defCategory("Zs", 1<<Character.SPACE_SEPARATOR);
//     defCategory("Zl", 1<<Character.LINE_SEPARATOR);
//     defCategory("Zp", 1<<Character.PARAGRAPH_SEPARATOR);
//     defCategory("Cc", 1<<Character.CONTROL);
//     defCategory("Cf", 1<<Character.FORMAT);
//     defCategory("Co", 1<<Character.PRIVATE_USE);
//     defCategory("Cs", 1<<Character.SURROGATE);
//     defCategory("Pd", 1<<Character.DASH_PUNCTUATION);
//     defCategory("Ps", 1<<Character.START_PUNCTUATION);
//     defCategory("Pe", 1<<Character.END_PUNCTUATION);
//     defCategory("Pc", 1<<Character.CONNECTOR_PUNCTUATION);
//     defCategory("Po", 1<<Character.OTHER_PUNCTUATION);
//     defCategory("Sm", 1<<Character.MATH_SYMBOL);
//     defCategory("Sc", 1<<Character.CURRENCY_SYMBOL);
//     defCategory("Sk", 1<<Character.MODIFIER_SYMBOL);
//     defCategory("So", 1<<Character.OTHER_SYMBOL);
//     defCategory("Pi", 1<<Character.INITIAL_QUOTE_PUNCTUATION);
//     defCategory("Pf", 1<<Character.FINAL_QUOTE_PUNCTUATION);
//     defCategory("L", ((1<<Character.UPPERCASE_LETTER) |
//         (1<<Character.LOWERCASE_LETTER) |
//         (1<<Character.TITLECASE_LETTER) |
//         (1<<Character.MODIFIER_LETTER)  |
//         (1<<Character.OTHER_LETTER)));
//     defCategory("M", ((1<<Character.NON_SPACING_MARK) |
//         (1<<Character.ENCLOSING_MARK)   |
//         (1<<Character.COMBINING_SPACING_MARK)));
//     defCategory("N", ((1<<Character.DECIMAL_DIGIT_NUMBER) |
//         (1<<Character.LETTER_NUMBER)        |
//         (1<<Character.OTHER_NUMBER)));
//     defCategory("Z", ((1<<Character.SPACE_SEPARATOR) |
//         (1<<Character.LINE_SEPARATOR)  |
//         (1<<Character.PARAGRAPH_SEPARATOR)));
//     defCategory("C", ((1<<Character.CONTROL)     |
//         (1<<Character.FORMAT)      |
//         (1<<Character.PRIVATE_USE) |
//         (1<<Character.SURROGATE))); // Other
//     defCategory("P", ((1<<Character.DASH_PUNCTUATION)      |
//         (1<<Character.START_PUNCTUATION)     |
//         (1<<Character.END_PUNCTUATION)       |
//         (1<<Character.CONNECTOR_PUNCTUATION) |
//         (1<<Character.OTHER_PUNCTUATION)     |
//         (1<<Character.INITIAL_QUOTE_PUNCTUATION) |
//         (1<<Character.FINAL_QUOTE_PUNCTUATION)));
//     defCategory("S", ((1<<Character.MATH_SYMBOL)     |
//         (1<<Character.CURRENCY_SYMBOL) |
//         (1<<Character.MODIFIER_SYMBOL) |
//         (1<<Character.OTHER_SYMBOL)));
//     defCategory("LC", ((1<<Character.UPPERCASE_LETTER) |
//         (1<<Character.LOWERCASE_LETTER) |
//         (1<<Character.TITLECASE_LETTER)));
//     defCategory("LD", ((1<<Character.UPPERCASE_LETTER) |
//         (1<<Character.LOWERCASE_LETTER) |
//         (1<<Character.TITLECASE_LETTER) |
//         (1<<Character.MODIFIER_LETTER)  |
//         (1<<Character.OTHER_LETTER)     |
//         (1<<Character.DECIMAL_DIGIT_NUMBER)));
//     defRange("L1", 0x00, 0xFF); // Latin-1
//     map.put("all", new CharPropertyFactory() {
//     CharProperty make() { return new All(); }});
//
//     // Posix regular expression character classes, defined in
//     // http://www.unix.org/onlinepubs/009695399/basedefs/xbd_chap09.html
//     defRange("ASCII", 0x00, 0x7F);   // ASCII
//     defCtype("Alnum", ASCII.ALNUM);  // Alphanumeric characters
//     defCtype("Alpha", ASCII.ALPHA);  // Alphabetic characters
//     defCtype("Blank", ASCII.BLANK);  // Space and tab characters
//     defCtype("Cntrl", ASCII.CNTRL);  // Control characters
//     defRange("Digit", '0', '9');     // Numeric characters
//     defCtype("Graph", ASCII.GRAPH);  // printable and visible
//     defRange("Lower", 'a', 'z');     // Lower-case alphabetic
//     defRange("Print", 0x20, 0x7E);   // Printable characters
//     defCtype("Punct", ASCII.PUNCT);  // Punctuation characters
//     defCtype("Space", ASCII.SPACE);  // Space characters
//     defRange("Upper", 'A', 'Z');     // Upper-case alphabetic
//     defCtype("XDigit",ASCII.XDIGIT); // hexadecimal digits
//
//     // Java character properties, defined by methods in Character.java
//     defClone("javaLowerCase", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isLowerCase(ch);}});
//     defClone("javaUpperCase", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isUpperCase(ch);}});
//     defClone("javaAlphabetic", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isAlphabetic(ch);}});
//     defClone("javaIdeographic", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isIdeographic(ch);}});
//     defClone("javaTitleCase", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isTitleCase(ch);}});
//     defClone("javaDigit", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isDigit(ch);}});
//     defClone("javaDefined", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isDefined(ch);}});
//     defClone("javaLetter", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isLetter(ch);}});
//     defClone("javaLetterOrDigit", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isLetterOrDigit(ch);}});
//     defClone("javaJavaIdentifierStart", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isJavaIdentifierStart(ch);}});
//     defClone("javaJavaIdentifierPart", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isJavaIdentifierPart(ch);}});
//     defClone("javaUnicodeIdentifierStart", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isUnicodeIdentifierStart(ch);}});
//     defClone("javaUnicodeIdentifierPart", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isUnicodeIdentifierPart(ch);}});
//     defClone("javaIdentifierIgnorable", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isIdentifierIgnorable(ch);}});
//     defClone("javaSpaceChar", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isSpaceChar(ch);}});
//     defClone("javaWhitespace", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isWhitespace(ch);}});
//     defClone("javaISOControl", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isISOControl(ch);}});
//     defClone("javaMirrored", new CloneableProperty() {
//     isSatisfiedBy(ch:number):boolean {
//         return Character.isMirrored(ch);}});
// }
// }
//
// /**
//  * Creates a predicate which can be used to match a string.
//  *
//  * @return  The predicate which can be used for matching on a string
//  * @since   1.8
//  */
// public Predicate<String> asPredicate() {
//     return s -> matcher(s).find();
// }
//
// /**
//  * Creates a stream from the given input sequence around matches of this
//  * pattern.
//  *
//  * <p> The stream returned by this method contains each substring of the
//  * input sequence that is terminated by another subsequence that matches
//  * this pattern or is terminated by the end of the input sequence.  The
//  * substrings in the stream are in the order in which they occur in the
//  * input. Trailing empty strings will be discarded and not encountered in
//  * the stream.
//  *
//  * <p> If this pattern does not match any subsequence of the input then
//  * the resulting stream has just one element, namely the input sequence in
//  * string form.
//  *
//  * <p> When there is a positive-width match at the beginning of the input
//  * sequence then an empty leading substring is included at the beginning
//  * of the stream. A zero-width match at the beginning however never produces
//  * such empty leading substring.
//  *
//  * <p> If the input sequence is mutable, it must remain constant during the
//  * execution of the terminal stream operation.  Otherwise, the result of the
//  * terminal stream operation is undefined.
//  *
//  * @param   input
//  *          The character sequence to be split
//  *
//  * @return  The stream of strings computed by splitting the input
//  *          around matches of this pattern
//  * @see     #split(CharSequence)
//  * @since   1.8
//  */
// public Stream<String> splitAsStream(final CharSequence input) {
//     class MatcherIterator implements Iterator<String> {
//         private final Matcher matcher;
//         // The start position of the next sub-sequence of input
//         // when current == input.length there are no more elements
//         private current:number;
//         // null if the next element, if any, needs to obtained
//         private String nextElement;
//         // > 0 if there are N next empty elements
//         private emptyElementCount:number;
//
//         MatcherIterator() {
//             this.matcher = matcher(input);
//         }
//
//         public String next() {
//             if (!hasNext())
//                 throw new NoSuchElementException();
//
//             if (emptyElementCount == 0) {
//                 String n = nextElement;
//                 nextElement = null;
//                 return n;
//             } else {
//                 emptyElementCount--;
//                 return "";
//             }
//         }
//
//         public boolean hasNext() {
//             if (nextElement != null || emptyElementCount > 0)
//                 return true;
//
//             if (current == input.length())
//                 return false;
//
//             // Consume the next matching element
//             // Count sequence of matching empty elements
//             while (matcher.find()) {
//                 nextElement = input.subSequence(current, matcher.start()).toString();
//                 current = matcher.end();
//                 if (!nextElement.isEmpty()) {
//                     return true;
//                 } else if (current > 0) { // no empty leading substring for zero-width
//                     // match at the beginning of the input
//                     emptyElementCount++;
//                 }
//             }
//
//             // Consume last matching element
//             nextElement = input.subSequence(current, input.length()).toString();
//             current = input.length();
//             if (!nextElement.isEmpty()) {
//                 return true;
//             } else {
//                 // Ignore a terminal sequence of matching empty elements
//                 emptyElementCount = 0;
//                 nextElement = null;
//                 return false;
//             }
//         }
//     }
//     return StreamSupport.stream(Spliterators.spliteratorUnknownSize(
//         new MatcherIterator(), Spliterator.ORDERED | Spliterator.NONNULL), false);
// }

    static inRange(lower: number, ch: number, upper: number): boolean {
        return lower <= ch && ch <= upper;
    }

    /**
     * Returns node for matching characters within an explicit value range.
     */
    private static rangeFor(lower: number, upper: number): Pattern.CharProperty {
        return new Pattern.CharProperty$rangeFor(lower, upper);
    }

    /**
     * Returns node for matching characters within an explicit value
     * range in a case insensitive manner.
     */
    private caseInsensitiveRangeFor(lower: number, upper: number): Pattern.CharProperty {
        if (this.has(Pattern.UNICODE_CASE))
            return new Pattern.CharProperty$caseInsensitiveRangeFor$1(lower, upper);
        return new Pattern.CharProperty$caseInsensitiveRangeFor$2(lower, upper);
    }

    /**
     * Returns the set union of two CharProperty nodes.
     */
    private static union(lhs: Pattern.CharProperty, rhs: Pattern.CharProperty): Pattern.CharProperty {
        return new Pattern.CharProperty$union(lhs, rhs);
    }

    /**
     * Returns the set intersection of two CharProperty nodes.
     */
    private static intersection(lhs: Pattern.CharProperty, rhs: Pattern.CharProperty): Pattern.CharProperty {
        return new Pattern.CharProperty$intersection(lhs, rhs);
    }

    /**
     * Returns the set difference of two CharProperty nodes.
     */
    private static setDifference(lhs: Pattern.CharProperty, rhs: Pattern.CharProperty): Pattern.CharProperty {
        return new Pattern.CharProperty$setDifference(lhs, rhs);
    }

    /**
     * Non spacing marks only count as word characters in bounds calculations
     * if they have a base character.
     */
    static hasBaseCharacter(matcher: Matcher, i: number, seq: string): boolean {
        let start: number = (!matcher.transparentBounds) ?
            matcher.from : 0;
        for (let x: number = i; x >= start; x--) {
            let ch: number = Character.codePointAt(seq, x);
            if (Character.isLetterOrDigit(String.fromCharCode(ch)))
                return true;
            if (Character.getType(ch) == Character.NON_SPACING_MARK)
                continue;
            return false;
        }
        return false;
    }

    static _lookbehindEnd: Pattern.Node = null;

    /**
     * For use with lookbehinds; matches the position where the lookbehind
     * was encountered.
     */
    static lookbehindEnd(): Pattern.Node {
        if (Pattern._lookbehindEnd === null) {
            Pattern._lookbehindEnd = new Pattern.Node$lookbehindEnd();
        }
        return Pattern._lookbehindEnd;
    };
}

export namespace Pattern {

    /**
     * Used to accumulate information about a subtree of the object graph
     * so that optimizations can be applied to the subtree.
     */
    export class TreeInfo {
        minLength: number;
        maxLength: number;
        maxValid: boolean;
        deterministic: boolean;

        constructor() {
            this.reset();
        }

        reset(): void {
            this.minLength = 0;
            this.maxLength = 0;
            this.maxValid = true;
            this.deterministic = true;
        }
    }

    /**
     * The following classes are the building components of the object
     * tree that represents a compiled regular expression. The object tree
     * is made of individual elements that handle constructs in the Pattern.
     * Each type of object knows how to match its equivalent construct with
     * the match() method.
     */

    /**
     * Base class for all node classes. Subclasses should override the match()
     * method as appropriate. This class is an accepting node, so its match()
     * always returns true.
     */
    export class Node {
        next: Node;

        constructor() {
            this.next = Pattern.accept;
        }

        /**
         * This method implements the classic accept node.
         */
        match(matcher: Matcher, i: number, seq: string): boolean {
            matcher.last = i;
            matcher.groups[0] = matcher.first;
            matcher.groups[1] = matcher.last;
            return true;
        }

        /**
         * This method is good for all zero length assertions.
         */
        study(info: TreeInfo): boolean {
            if (this.next != null) {
                return this.next.study(info);
            } else {
                return info.deterministic;
            }
        }
    }

    export class Node$lookbehindEnd extends Node {
        constructor() {
            super();
        }

        match(matcher: Matcher, i: number, seq: string) {
            return i == matcher.lookbehindTo;
        }
    }

    export class LastNode extends Node {
        /**
         * This method implements the classic accept node with
         * the addition of a check to see if the match occurred
         * using all of the input.
         */
        match(matcher: Matcher, i: number, seq: string): boolean {
            if (matcher.acceptMode == Matcher.ENDANCHOR && i != matcher.to)
                return false;
            matcher.last = i;
            matcher.groups[0] = matcher.first;
            matcher.groups[1] = matcher.last;
            return true;
        }
    }

    /**
     * Used for REs that can start anywhere within the input string.
     * This basically tries to match repeatedly at each spot in the
     * input string, moving forward after each try. An anchored search
     * or a BnM will bypass this node completely.
     */
    export class Start extends Node {
        minLength: number;

        constructor(node: Node) {
            super()
            this.next = node;
            let info: TreeInfo = new TreeInfo();
            this.next.study(info);
            this.minLength = info.minLength;
        }

        match(matcher: Matcher, i: number, seq: string): boolean {
            if (i > matcher.to - this.minLength) {
                matcher.hitEnd = true;
                return false;
            }
            let guard: number = matcher.to - this.minLength;
            for (; i <= guard; i++) {
                if (this.next.match(matcher, i, seq)) {
                    matcher.first = i;
                    matcher.groups[0] = matcher.first;
                    matcher.groups[1] = matcher.last;
                    return true;
                }
            }
            matcher.hitEnd = true;
            return false;
        }

        study(info: TreeInfo): boolean {
            this.next.study(info);
            info.maxValid = false;
            info.deterministic = false;
            return false;
        }
    }

    /*
         * StartS supports supplementary characters, including unpaired surrogates.
         */
    export class StartS extends Start {
        constructor(node: Node) {
            super(node);
        }

        match(matcher: Matcher, i: number, seq: string): boolean {
            if (i > matcher.to - this.minLength) {
                matcher.hitEnd = true;
                return false;
            }
            let guard: number = matcher.to - this.minLength;
            while (i <= guard) {
                //if ((ret = this.next.match(matcher, i, seq)) || i == guard)
                if (this.next.match(matcher, i, seq)) {
                    matcher.first = i;
                    matcher.groups[0] = matcher.first;
                    matcher.groups[1] = matcher.last;
                    return true;
                }
                if (i == guard)
                    break;
                // Optimization to move to the next character. This is
                // faster than countChars(seq, i, 1).
                if (Character.isHighSurrogate(seq.charAt(i++))) {
                    if (i < seq.length &&
                        Character.isLowSurrogate(seq.charAt(i))) {
                        i++;
                    }
                }
            }
            matcher.hitEnd = true;
            return false;
        }
    }

    /**
     * Node to anchor at the beginning of input. This object implements the
     * match for a \A sequence, and the caret anchor will use this if not in
     * multiline mode.
     */
    export class Begin extends Node {
        match(matcher: Matcher, i: number, seq: string): boolean {
            let fromIndex: number = (matcher.anchoringBounds) ?
                matcher.from : 0;
            if (i == fromIndex && this.next.match(matcher, i, seq)) {
                matcher.first = i;
                matcher.groups[0] = i;
                matcher.groups[1] = matcher.last;
                return true;
            } else {
                return false;
            }
        }
    }

    /**
     * Node to anchor at the end of input. This is the absolute end, so this
     * should not match at the last newline before the end as $ will.
     */
    export class End extends Node {
        match(matcher: Matcher, i: number, seq: string): boolean {
            let endIndex: number = (matcher.anchoringBounds) ?
                matcher.to : matcher.getTextLength();
            if (i == endIndex) {
                matcher.hitEnd = true;
                return this.next.match(matcher, i, seq);
            }
            return false;
        }
    }

    /**
     * Node to anchor at the beginning of a line. This is essentially the
     * object to match for the multiline ^.
     */
    export class Caret extends Node {
        match(matcher: Matcher, i: number, seq: string): boolean {
            let startIndex: number = matcher.from;
            let endIndex: number = matcher.to;
            if (!matcher.anchoringBounds) {
                startIndex = 0;
                endIndex = matcher.getTextLength();
            }
// Perl does not match ^ at end of input even after newline
            if (i == endIndex) {
                matcher.hitEnd = true;
                return false;
            }
            if (i > startIndex) {
                let ch: string = seq.charAt(i - 1);
                if (ch != '\n' && ch != '\r'
                    && (ch.charCodeAt(0) | 1) != '\u2029'.charCodeAt(0)
                    && ch != '\u0085') {
                    return false;
                }
                // Should treat /r/n as one newline
                if (ch == '\r' && seq.charAt(i) == '\n')
                    return false;
            }
            return this.next.match(matcher, i, seq);
        }
    }

    /**
     * Node to anchor at the beginning of a line when in unixdot mode.
     */
    export class UnixCaret extends Node {
        match(matcher: Matcher, i: number, seq: string): boolean {
            let startIndex: number = matcher.from;
            let endIndex: number = matcher.to;
            if (!matcher.anchoringBounds) {
                startIndex = 0;
                endIndex = matcher.getTextLength();
            }
// Perl does not match ^ at end of input even after newline
            if (i == endIndex) {
                matcher.hitEnd = true;
                return false;
            }
            if (i > startIndex) {
                let ch: string = seq.charAt(i - 1);
                if (ch != '\n') {
                    return false;
                }
            }
            return this.next.match(matcher, i, seq);
        }
    }

    /**
     * Node to match the location where the last match ended.
     * This is used for the \G construct.
     */
    export class LastMatch extends Node {
        match(matcher: Matcher, i: number, seq: string): boolean {
            if (i != matcher.oldLast)
                return false;
            return this.next.match(matcher, i, seq);
        }
    }

    /**
     * Node to anchor at the end of a line or the end of input based on the
     * multiline mode.
     *
     * When not in multiline mode, the $ can only match at the very end
     * of the input, unless the input ends in a line terminator in which
     * it matches right before the last line terminator.
     *
     * Note that \r\n is considered an atomic line terminator.
     *
     * Like ^ the $ operator matches at a position, it does not match the
     * line terminators themselves.
     */
    export class Dollar extends Node {
        multiline: boolean;

        constructor(mul: boolean) {
            super();
            this.multiline = mul;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let endIndex: number = (matcher.anchoringBounds) ?
                matcher.to : matcher.getTextLength();
            if (!this.multiline) {
                if (i < endIndex - 2)
                    return false;
                if (i == endIndex - 2) {
                    let ch: string = seq.charAt(i);
                    if (ch != '\r')
                        return false;
                    ch = seq.charAt(i + 1);
                    if (ch != '\n')
                        return false;
                }
            }
            // Matches before any line terminator; also matches at the
            // end of input
            // Before line terminator:
            // If multiline, we match here no matter what
            // If not multiline, fall through so that the end
            // is marked as hit; this must be a /r/n or a /n
            // at the very end so the end was hit; more input
            // could make this not match here
            if (i < endIndex) {
                let ch: string = seq.charAt(i);
                if (ch == '\n') {
                    // No match between \r\n
                    if (i > 0 && seq.charAt(i - 1) == '\r')
                        return false;
                    if (this.multiline)
                        return this.next.match(matcher, i, seq);
                } else if (ch == '\r' || ch == '\u0085' ||
                    (ch.charCodeAt(0) | 1) == '\u2029'.charCodeAt(0)) {
                    if (this.multiline)
                        return this.next.match(matcher, i, seq);
                } else { // No line terminator, no match
                    return false;
                }
            }
            // Matched at current end so hit end
            matcher.hitEnd = true;
            // If a $ matches because of end of input, then more input
            // could cause it to fail!
            matcher.requireEnd = true;
            return this.next.match(matcher, i, seq);
        }

        study(info: TreeInfo): boolean {
            this.next.study(info);
            return info.deterministic;
        }
    }

    /**
     * Node to anchor at the end of a line or the end of input based on the
     * multiline mode when in unix lines mode.
     */
    export class UnixDollar extends Node {
        multiline: boolean;

        constructor(mul: boolean) {
            super();
            this.multiline = mul;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let endIndex: number = (matcher.anchoringBounds) ?
                matcher.to : matcher.getTextLength();
            if (i < endIndex) {
                let ch: string = seq.charAt(i);
                if (ch == '\n') {
                    // If not multiline, then only possible to
                    // match at very end or one before end
                    if (this.multiline == false && i != endIndex - 1)
                        return false;
                    // If multiline return this.next.match without setting
                    // matcher.hitEnd
                    if (this.multiline)
                        return this.next.match(matcher, i, seq);
                } else {
                    return false;
                }
            }
            // Matching because at the end or 1 before the end;
            // more input could change this so set hitEnd
            matcher.hitEnd = true;
            // If a $ matches because of end of input, then more input
            // could cause it to fail!
            matcher.requireEnd = true;
            return this.next.match(matcher, i, seq);
        }

        study(info: TreeInfo): boolean {
            this.next.study(info);
            return info.deterministic;
        }
    }

    /**
     * Node class that matches a Unicode line ending '\R'
     */
    export class LineEnding extends Node {
        match(matcher: Matcher, i: number, seq: string) {
            // (u+000Du+000A|[u+000Au+000Bu+000Cu+000Du+0085u+2028u+2029])
            if (i < matcher.to) {
                let ch: number = seq.charCodeAt(i);
                if (ch == 0x0A || ch == 0x0B || ch == 0x0C ||
                    ch == 0x85 || ch == 0x2028 || ch == 0x2029)
                    return this.next.match(matcher, i + 1, seq);
                if (ch == 0x0D) {
                    i++;
                    if (i < matcher.to && seq.charCodeAt(i) == 0x0A)
                        i++;
                    return this.next.match(matcher, i, seq);
                }
            } else {
                matcher.hitEnd = true;
            }
            return false;
        }

        study(info: TreeInfo): boolean {
            info.minLength++;
            info.maxLength += 2;
            return this.next.study(info);
        }
    }

    /**
     * Abstract node class to match one character satisfying some
     * boolean property.
     */
    export abstract class CharProperty extends Node {
        abstract isSatisfiedBy(ch: number): boolean;

        complement(): CharProperty {
            return new CharProperty$complement(this);
        }

        match(matcher: Matcher, i: number, seq: string) {
            if (i < matcher.to) {
                let ch: number = Character.codePointAt(seq, i);
                return this.isSatisfiedBy(ch)
                    && this.next.match(matcher, i + Character.charCount(ch), seq);
            } else {
                matcher.hitEnd = true;
                return false;
            }
        }

        study(info: TreeInfo): boolean {
            info.minLength++;
            info.maxLength++;
            return this.next.study(info);
        }
    }

    export class CharProperty$complement extends CharProperty {
        __parent: CharProperty;

        constructor(__parent: CharProperty) {
            super();
            this.__parent = __parent;
        }

        isSatisfiedBy(ch: number): boolean {
            return !this.__parent.isSatisfiedBy(ch);
        }
    }

    export class CharProperty$rangeFor extends CharProperty {
        private lower: number;
        private upper: number;

        constructor(lower: number, upper: number) {
            super();
            this.lower = lower;
            this.upper = upper;
        }

        isSatisfiedBy(ch: number): boolean {
            return Pattern.inRange(this.lower, ch, this.upper);
        }
    }

    export class CharProperty$caseInsensitiveRangeFor$1 extends CharProperty {
        private lower: number;
        private upper: number;

        constructor(lower: number, upper: number) {
            super();
            this.lower = lower;
            this.upper = upper;
        }

        isSatisfiedBy(ch: number): boolean {
            if (Pattern.inRange(this.lower, ch, this.upper))
                return true;
            let up: number = Character.toUpperCase(ch);
            return Pattern.inRange(this.lower, up, this.upper) ||
                Pattern.inRange(this.lower, Character.toLowerCase(up), this.upper);
        }
    }

    export class CharProperty$caseInsensitiveRangeFor$2 extends CharProperty {
        private lower: number;
        private upper: number;

        constructor(lower: number, upper: number) {
            super();
            this.lower = lower;
            this.upper = upper;
        }

        isSatisfiedBy(ch: number): boolean {
            return Pattern.inRange(this.lower, ch, this.upper) ||
                ASCII.isAscii(ch) &&
                (Pattern.inRange(this.lower, ASCII.toUpper(ch), this.upper) ||
                    Pattern.inRange(this.lower, ASCII.toLower(ch), this.upper));
        }
    }


    export class CharProperty$union extends CharProperty {
        lhs: CharProperty;
        rhs: CharProperty

        constructor(lhs: CharProperty, rhs: CharProperty) {
            super();
            this.lhs = lhs;
            this.rhs = rhs;
        }

        isSatisfiedBy(ch: number): boolean {
            return this.lhs.isSatisfiedBy(ch) || this.rhs.isSatisfiedBy(ch);
        }
    }

    export class CharProperty$intersection extends CharProperty {
        lhs: CharProperty;
        rhs: CharProperty

        constructor(lhs: CharProperty, rhs: CharProperty) {
            super();
            this.lhs = lhs;
            this.rhs = rhs;
        }

        isSatisfiedBy(ch: number): boolean {
            return this.lhs.isSatisfiedBy(ch) && this.rhs.isSatisfiedBy(ch);
        }
    }

    export class CharProperty$setDifference extends CharProperty {
        lhs: CharProperty;
        rhs: CharProperty

        constructor(lhs: CharProperty, rhs: CharProperty) {
            super();
            this.lhs = lhs;
            this.rhs = rhs;
        }

        isSatisfiedBy(ch: number): boolean {
            return !this.rhs.isSatisfiedBy(ch) && this.lhs.isSatisfiedBy(ch);
        }
    }

    /**
     * Optimized version of CharProperty that works only for
     * properties never satisfied by Supplementary characters.
     */
    export abstract class BmpCharProperty extends CharProperty {
        match(matcher: Matcher, i: number, seq: string) {
            if (i < matcher.to) {
                return this.isSatisfiedBy(seq.charCodeAt(i))
                    && this.next.match(matcher, i + 1, seq);
            } else {
                matcher.hitEnd = true;
                return false;
            }
        }
    }

    /**
     * Node class that matches a Supplementary Unicode character
     */
    export class SingleS extends CharProperty {
        c: number;

        constructor(c: number) {
            super();
            this.c = c;
        }

        isSatisfiedBy(ch: number): boolean {
            return ch == this.c;
        }
    }

    /**
     * Optimization -- matches a given BMP character
     */
    export class Single extends BmpCharProperty {
        c: number;

        constructor(c: number) {
            super();
            this.c = c;
        }

        isSatisfiedBy(ch: number): boolean {
            return ch == this.c;
        }
    }

    /**
     * Case insensitive matches a given BMP character
     */
    export class SingleI extends BmpCharProperty {
        lower: number;
        upper: number;

        constructor(lower: number, upper: number) {
            super();
            this.lower = lower;
            this.upper = upper;
        }

        isSatisfiedBy(ch: number): boolean {
            return ch == this.lower || ch == this.upper;
        }
    }

    /**
     * Unicode case insensitive matches a given Unicode character
     */
    export class SingleU extends CharProperty {
        lower: number;

        constructor(lower: number) {
            super();
            this.lower = lower;
        }

        isSatisfiedBy(ch: number): boolean {
            return this.lower == ch ||
                this.lower == Character.toLowerCase(Character.toUpperCase(ch));
        }
    }

    /**
     * Node class that matches a Unicode block.
     */
    export class Block extends CharProperty {
        block: Character.UnicodeBlock;

        constructor(block: Character.UnicodeBlock) {
            super();
            this.block = block;
        }

        isSatisfiedBy(ch: number): boolean {
            return this.block == Character.UnicodeBlock.of(ch);
        }
    }

    /**
     * Node class that matches a Unicode script
     */
    export class Script extends CharProperty {
        script: Character.UnicodeScript;

        constructor(script: Character.UnicodeScript) {
            super();
            this.script = script;
        }

        isSatisfiedBy(ch: number): boolean {
            return this.script == Character.UnicodeScript.of(ch);
        }
    }

    /**
     * Node class that matches a Unicode category.
     */
    export class Category extends CharProperty {
        typeMask: number;

        constructor(typeMask: number) {
            super();
            this.typeMask = typeMask;
        }

        isSatisfiedBy(ch: number): boolean {
            return (this.typeMask & (1 << Character.getType(ch))) != 0;
        }
    }

    /**
     * Node class that matches a Unicode "type"
     */
    export class Utype extends CharProperty {
        uprop: UnicodeProp;

        constructor(uprop: UnicodeProp) {
            super();
            this.uprop = uprop;
        }

        isSatisfiedBy(ch: number): boolean {
            return this.uprop.is(ch);
        }
    }

    /**
     * Node class that matches a POSIX type.
     */
    export class Ctype extends BmpCharProperty {
        ctype: number;

        constructor(ctype: number) {
            super();
            this.ctype = ctype;
        }

        isSatisfiedBy(ch: number): boolean {
            return ch < 128 && ASCII.isType(ch, this.ctype);
        }
    }

    /**
     * Node class that matches a Perl vertical whitespace
     */
    export class VertWS extends BmpCharProperty {
        isSatisfiedBy(cp: number): boolean {
            return (cp >= 0x0A && cp <= 0x0D) ||
                cp == 0x85 || cp == 0x2028 || cp == 0x2029;
        }
    }

    /**
     * Node class that matches a Perl horizontal whitespace
     */
    export class HorizWS extends BmpCharProperty {
        isSatisfiedBy(cp: number): boolean {
            return cp == 0x09 || cp == 0x20 || cp == 0xa0 ||
                cp == 0x1680 || cp == 0x180e ||
                cp >= 0x2000 && cp <= 0x200a ||
                cp == 0x202f || cp == 0x205f || cp == 0x3000;
        }
    }

    /**
     * Base class for all Slice nodes
     */
    export class SliceNode extends Node {
        buffer: Array<number>;

        constructor(buf: Array<number>) {
            super();
            this.buffer = buf;
        }

        study(info: TreeInfo): boolean {
            info.minLength += this.buffer.length;
            info.maxLength += this.buffer.length;
            return this.next.study(info);
        }
    }

    /**
     * Node class for a case sensitive/BMP-only sequence of literal
     * characters.
     */
    export class Slice extends SliceNode {
        constructor(buf: Array<number>) {
            super(buf);
        }

        match(matcher: Matcher, i: number, seq: string) {
            let buf: Array<number> = this.buffer;
            let len: number = buf.length;
            for (let j: number = 0; j < len; j++) {
                if ((i + j) >= matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
                if (buf[j] != seq.charCodeAt(i + j))
                    return false;
            }
            return this.next.match(matcher, i + len, seq);
        }
    }

    /**
     * Node class for a case_insensitive/BMP-only sequence of literal
     * characters.
     */
    export class SliceI extends SliceNode {
        constructor(buf: Array<number>) {
            super(buf);
        }

        match(matcher: Matcher, i: number, seq: string) {
            let buf: Array<number> = this.buffer;
            let len: number = buf.length;
            for (let j: number = 0; j < len; j++) {
                if ((i + j) >= matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
                let c: number = seq.charCodeAt(i + j);
                if (buf[j] != c &&
                    buf[j] != ASCII.toLower(c))
                    return false;
            }
            return this.next.match(matcher, i + len, seq);
        }
    }

    /**
     * Node class for a unicode_case_insensitive/BMP-only sequence of
     * literal characters. Uses unicode case folding.
     */
    export class SliceU extends SliceNode {
        constructor(buf: Array<number>) {
            super(buf);
        }

        match(matcher: Matcher, i: number, seq: string) {
            let buf: Array<number> = this.buffer;
            let len: number = buf.length;
            for (let j: number = 0; j < len; j++) {
                if ((i + j) >= matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
                let c: number = seq.charCodeAt(i + j);
                if (buf[j] != c &&
                    buf[j] != Character.toLowerCase(Character.toUpperCase(c)))
                    return false;
            }
            return this.next.match(matcher, i + len, seq);
        }
    }

    /**
     * Node class for a case sensitive sequence of literal characters
     * including supplementary characters.
     */
    export class SliceS extends SliceNode {
        constructor(buf: Array<number>) {
            super(buf);
        }

        match(matcher: Matcher, i: number, seq: string) {
            let buf: Array<number> = this.buffer;
            let x: number = i;
            for (let j: number = 0; j < buf.length; j++) {
                if (x >= matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
                let c: number = Character.codePointAt(seq, x);
                if (buf[j] != c)
                    return false;
                x += Character.charCount(c);
                if (x > matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
            }
            return this.next.match(matcher, x, seq);
        }
    }

    /**
     * Node class for a case insensitive sequence of literal characters
     * including supplementary characters.
     */
    export class SliceIS extends SliceNode {
        constructor(buf: Array<number>) {
            super(buf);
        }

        toLower(c: number): number {
            return ASCII.toLower(c);
        }

        match(matcher: Matcher, i: number, seq: string) {
            let buf: Array<number> = this.buffer;
            let x: number = i;
            for (let j: number = 0; j < buf.length; j++) {
                if (x >= matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
                let c: number = Character.codePointAt(seq, x);
                if (buf[j] != c && buf[j] != this.toLower(c))
                    return false;
                x += Character.charCount(c);
                if (x > matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
            }
            return this.next.match(matcher, x, seq);
        }
    }

    /**
     * Node class for a case insensitive sequence of literal characters.
     * Uses unicode case folding.
     */
    export class SliceUS extends SliceIS {
        constructor(buf: Array<number>) {
            super(buf);
        }

        toLower(c: number): number {
            return Character.toLowerCase(Character.toUpperCase(c));
        }
    }

    /**
     * Implements the Unicode category ALL and the dot metacharacter when
     * in dotall mode.
     */
    export class All extends CharProperty {
        isSatisfiedBy(ch: number): boolean {
            return true;
        }
    }

    /**
     * Node class for the dot metacharacter when dotall is not enabled.
     */
    export class Dot extends CharProperty {
        isSatisfiedBy(ch: number): boolean {
            return (ch != '\n'.charCodeAt(0) && ch != '\r'.charCodeAt(0)
                && (ch | 1) != '\u2029'.charCodeAt(0)
                && ch != '\u0085'.charCodeAt(0));
        }
    }

    /**
     * Node class for the dot metacharacter when dotall is not enabled
     * but UNIX_LINES is enabled.
     */
    export class UnixDot extends CharProperty {
        isSatisfiedBy(ch: number): boolean {
            return ch != '\n'.charCodeAt(0);
        }
    }

    /**
     * The 0 or 1 quantifier. This one class implements all three types.
     */
    export class Ques extends Node {
        atom: Node;
        type: number;

        constructor(node: Node, type: number) {
            super()
            this.atom = node;
            this.type = type;
        }

        match(matcher: Matcher, i: number, seq: string) {
            switch (this.type) {
                case Pattern.GREEDY:
                    return (this.atom.match(matcher, i, seq) && this.next.match(matcher, matcher.last, seq))
                        || this.next.match(matcher, i, seq);
                case Pattern.LAZY:
                    return this.next.match(matcher, i, seq)
                        || (this.atom.match(matcher, i, seq) && this.next.match(matcher, matcher.last, seq));
                case Pattern.POSSESSIVE:
                    if (this.atom.match(matcher, i, seq)) i = matcher.last;
                    return this.next.match(matcher, i, seq);
                default:
                    return this.atom.match(matcher, i, seq) && this.next.match(matcher, matcher.last, seq);
            }
        }

        study(info: TreeInfo): boolean {
            if (this.type != Pattern.INDEPENDENT) {
                let minL: number = info.minLength;
                this.atom.study(info);
                info.minLength = minL;
                info.deterministic = false;
                return this.next.study(info);
            } else {
                this.atom.study(info);
                return this.next.study(info);
            }
        }
    }

    /**
     * Handles the curly-brace style repetition with a specified minimum and
     * maximum occurrences. The * quantifier is handled as a special case.
     * This class handles the three types.
     */
    export class Curly extends Node {
        atom: Node;
        type: number;
        cmin: number;
        cmax: number;

        constructor(node: Node, cmin: number, cmax: number, type: number) {
            super();
            this.atom = node;
            this.type = type;
            this.cmin = cmin;
            this.cmax = cmax;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let j: number;
            for (j = 0; j < this.cmin; j++) {
                if (this.atom.match(matcher, i, seq)) {
                    i = matcher.last;
                    continue;
                }
                return false;
            }
            if (this.type == Pattern.GREEDY)
                return this.match0(matcher, i, j, seq);
            else if (this.type == Pattern.LAZY)
                return this.match1(matcher, i, j, seq);
            else
                return this.match2(matcher, i, j, seq);
        }

// Greedy match.
// i is the index to start matching at
// j is the number of atoms that have matched
        match0(matcher: Matcher, i: number, j: number, seq: string): boolean {
            if (j >= this.cmax) {
                // We have matched the maximum... continue with the rest of
                // the regular expression
                return this.next.match(matcher, i, seq);
            }
            let backLimit: number = j;
            while (this.atom.match(matcher, i, seq)) {
                // k is the length of this match
                let k: number = matcher.last - i;
                if (k == 0) // Zero length match
                    break;
                // Move up index and number matched
                i = matcher.last;
                j++;
                // We are greedy so match as many as we can
                while (j < this.cmax) {
                    if (!this.atom.match(matcher, i, seq))
                        break;
                    if (i + k != matcher.last) {
                        if (this.match0(matcher, matcher.last, j + 1, seq))
                            return true;
                        break;
                    }
                    i += k;
                    j++;
                }
                // Handle backing off if match fails
                while (j >= backLimit) {
                    if (this.next.match(matcher, i, seq))
                        return true;
                    i -= k;
                    j--;
                }
                return false;
            }
            return this.next.match(matcher, i, seq);
        }

// Reluctant match. At this point, the minimum has been satisfied.
// i is the index to start matching at
// j is the number of atoms that have matched
        match1(matcher: Matcher, i: number, j: number, seq: string): boolean {
            for (; ;) {
                // Try finishing match without consuming any more
                if (this.next.match(matcher, i, seq))
                    return true;
                // At the maximum, no match found
                if (j >= this.cmax)
                    return false;
                // Okay, must try one more atom
                if (!this.atom.match(matcher, i, seq))
                    return false;
                // If we haven't moved forward then must break out
                if (i == matcher.last)
                    return false;
                // Move up index and number matched
                i = matcher.last;
                j++;
            }
        }

        match2(matcher: Matcher, i: number, j: number, seq: string): boolean {
            for (; j < this.cmax; j++) {
                if (!this.atom.match(matcher, i, seq))
                    break;
                if (i == matcher.last)
                    break;
                i = matcher.last;
            }
            return this.next.match(matcher, i, seq);
        }

        study(info: TreeInfo): boolean {
            // Save original info
            let minL: number = info.minLength;
            let maxL: number = info.maxLength;
            let maxV: boolean = info.maxValid;
            let detm: boolean = info.deterministic;
            info.reset();

            this.atom.study(info);

            let temp: number = info.minLength * this.cmin + minL;
            if (temp < minL) {
                temp = 0xFFFFFFF; // arbitrary large number
            }
            info.minLength = temp;

            if (maxV && info.maxValid) {
                temp = info.maxLength * this.cmax + maxL;
                info.maxLength = temp;
                if (temp < maxL) {
                    info.maxValid = false;
                }
            } else {
                info.maxValid = false;
            }

            if (info.deterministic && this.cmin == this.cmax)
                info.deterministic = detm;
            else
                info.deterministic = false;
            return this.next.study(info);
        }
    }

    /**
     * Handles the curly-brace style repetition with a specified minimum and
     * maximum occurrences in deterministic cases. This is an iterative
     * optimization over the Prolog and Loop system which would handle this
     * in a recursive way. The * quantifier is handled as a special case.
     * If capture is true then this class saves group settings and ensures
     * that groups are unset when backing off of a group match.
     */
    export class GroupCurly extends Node {
        atom: Node;
        type: number;
        cmin: number;
        cmax: number;
        localIndex: number;
        groupIndex: number;
        capture: boolean;

        constructor(node: Node, cmin: number, cmax: number, type: number, local: number, group: number, capture: boolean) {
            super();
            this.atom = node;
            this.type = type;
            this.cmin = cmin;
            this.cmax = cmax;
            this.localIndex = local;
            this.groupIndex = group;
            this.capture = capture;
        }

        match(matcher: Matcher, i: number, seq: string): boolean {
            let groups: Array<number> = matcher.groups;
            let locals: Array<number> = matcher.locals;
            let save0: number = locals[this.localIndex];
            let save1: number = 0;
            let save2: number = 0;

            if (this.capture) {
                save1 = groups[this.groupIndex];
                save2 = groups[this.groupIndex + 1];
            }

            // Notify GroupTail there is no need to setup group info
            // because it will be set here
            locals[this.localIndex] = -1;

            let ret: boolean = true;
            for (let j: number = 0; j < this.cmin; j++) {
                if (this.atom.match(matcher, i, seq)) {
                    if (this.capture) {
                        groups[this.groupIndex] = i;
                        groups[this.groupIndex + 1] = matcher.last;
                    }
                    i = matcher.last;
                } else {
                    ret = false;
                    break;
                }
            }
            if (ret) {
                if (this.type == Pattern.GREEDY) {
                    ret = this.match0(matcher, i, this.cmin, seq);
                } else if (this.type == Pattern.LAZY) {
                    ret = this.match1(matcher, i, this.cmin, seq);
                } else {
                    ret = this.match2(matcher, i, this.cmin, seq);
                }
            }
            if (!ret) {
                locals[this.localIndex] = save0;
                if (this.capture) {
                    groups[this.groupIndex] = save1;
                    groups[this.groupIndex + 1] = save2;
                }
            }
            return ret;
        }

// Aggressive group match
        match0(matcher: Matcher, i: number, j: number, seq: string): boolean {
            // don't back off passing the starting "j"
            let min: number = j;
            let groups: Array<number> = matcher.groups;
            let save0: number = 0;
            let save1: number = 0;
            if (this.capture) {
                save0 = groups[this.groupIndex];
                save1 = groups[this.groupIndex + 1];
            }
            for (; ;) {
                if (j >= this.cmax)
                    break;
                if (!this.atom.match(matcher, i, seq))
                    break;
                let k: number = matcher.last - i;
                if (k <= 0) {
                    if (this.capture) {
                        groups[this.groupIndex] = i;
                        groups[this.groupIndex + 1] = i + k;
                    }
                    i = i + k;
                    break;
                }
                for (; ;) {
                    if (this.capture) {
                        groups[this.groupIndex] = i;
                        groups[this.groupIndex + 1] = i + k;
                    }
                    i = i + k;
                    if (++j >= this.cmax)
                        break;
                    if (!this.atom.match(matcher, i, seq))
                        break;
                    if (i + k != matcher.last) {
                        if (this.match0(matcher, i, j, seq))
                            return true;
                        break;
                    }
                }
                while (j > min) {
                    if (this.next.match(matcher, i, seq)) {
                        if (this.capture) {
                            groups[this.groupIndex + 1] = i;
                            groups[this.groupIndex] = i - k;
                        }
                        return true;
                    }
                    // backing off
                    i = i - k;
                    if (this.capture) {
                        groups[this.groupIndex + 1] = i;
                        groups[this.groupIndex] = i - k;
                    }
                    j--;

                }
                break;
            }
            if (this.capture) {
                groups[this.groupIndex] = save0;
                groups[this.groupIndex + 1] = save1;
            }
            return this.next.match(matcher, i, seq);
        }

// Reluctant matching
        match1(matcher: Matcher, i: number, j: number, seq: string): boolean {
            for (; ;) {
                if (this.next.match(matcher, i, seq))
                    return true;
                if (j >= this.cmax)
                    return false;
                if (!this.atom.match(matcher, i, seq))
                    return false;
                if (i == matcher.last)
                    return false;
                if (this.capture) {
                    matcher.groups[this.groupIndex] = i;
                    matcher.groups[this.groupIndex + 1] = matcher.last;
                }
                i = matcher.last;
                j++;
            }
        }

// Possessive matching
        match2(matcher: Matcher, i: number, j: number, seq: string): boolean {
            for (; j < this.cmax; j++) {
                if (!this.atom.match(matcher, i, seq)) {
                    break;
                }
                if (this.capture) {
                    matcher.groups[this.groupIndex] = i;
                    matcher.groups[this.groupIndex + 1] = matcher.last;
                }
                if (i == matcher.last) {
                    break;
                }
                i = matcher.last;
            }
            return this.next.match(matcher, i, seq);
        }

        study(info: TreeInfo): boolean {
            // Save original info
            let minL: number = info.minLength;
            let maxL: number = info.maxLength;
            let maxV: boolean = info.maxValid;
            let detm: boolean = info.deterministic;
            info.reset();

            this.atom.study(info);

            let temp: number = info.minLength * this.cmin + minL;
            if (temp < minL) {
                temp = 0xFFFFFFF; // Arbitrary large number
            }
            info.minLength = temp;

            if (maxV && info.maxValid) {
                temp = info.maxLength * this.cmax + maxL;
                info.maxLength = temp;
                if (temp < maxL) {
                    info.maxValid = false;
                }
            } else {
                info.maxValid = false;
            }

            if (info.deterministic && this.cmin == this.cmax) {
                info.deterministic = detm;
            } else {
                info.deterministic = false;
            }
            return this.next.study(info);
        }
    }

    /**
     * A Guard node at the end of each atom node in a Branch. It
     * serves the purpose of chaining the "match" operation to
     * "next" but not the "study", so we can collect the TreeInfo
     * of each atom node without including the TreeInfo of the
     * "next".
     */
    export class BranchConn extends Node {
        BranchConn() {
        };

        match(matcher: Matcher, i: number, seq: string) {
            return this.next.match(matcher, i, seq);
        }

        study(info: TreeInfo): boolean {
            return info.deterministic;
        }
    }

    /**
     * Handles the branching of alternations. Note this is also used for
     * the ? quantifier to branch between the case where it matches once
     * and where it does not occur.
     */
    export class Branch extends Node {
        atoms: Array<Node> = new Array<Node>(2);
        size: number = 2;
        conn: Node;

        constructor(first: Node, second: Node, branchConn: Node) {
            super();
            this.conn = branchConn;
            this.atoms[0] = first;
            this.atoms[1] = second;
        }

        add(node: Node): void {
            if (this.size >= this.atoms.length) {
                let tmp: Array<Node> = new Array<Node>(this.atoms.length * 2);
                System.arraycopy(this.atoms, 0, tmp, 0, this.atoms.length);
                this.atoms = tmp;
            }
            this.atoms[this.size++] = node;
        }

        match(matcher: Matcher, i: number, seq: string) {
            for (let n: number = 0; n < this.size; n++) {
                if (this.atoms[n] == null) {
                    if (this.conn.next.match(matcher, i, seq))
                        return true;
                } else if (this.atoms[n].match(matcher, i, seq)) {
                    return true;
                }
            }
            return false;
        }

        study(info: TreeInfo): boolean {
            let minL: number = info.minLength;
            let maxL: number = info.maxLength;
            let maxV: boolean = info.maxValid;

            let minL2: number = Integer.MAX_VALUE; //arbitrary large enough num
            let maxL2: number = -1;
            for (let n: number = 0; n < this.size; n++) {
                info.reset();
                if (this.atoms[n] != null)
                    this.atoms[n].study(info);
                minL2 = Math.min(minL2, info.minLength);
                maxL2 = Math.max(maxL2, info.maxLength);
                maxV = (maxV && info.maxValid);
            }

            minL += minL2;
            maxL += maxL2;

            info.reset();
            this.conn.next.study(info);

            info.minLength += minL;
            info.maxLength += maxL;
            info.maxValid = info.maxValid && maxV;
            info.deterministic = false;
            return false;
        }
    }

    /**
     * The GroupHead saves the location where the group begins in the locals
     * and restores them when the match is done.
     *
     * The matchRef is used when a reference to this group is accessed later
     * in the expression. The locals will have a negative value in them to
     * indicate that we do not want to unset the group if the reference
     * doesn't match.
     */
    export class GroupHead extends Node {
        localIndex: number;

        constructor(localCount: number) {
            super();
            this.localIndex = localCount;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let save: number = matcher.locals[this.localIndex];
            matcher.locals[this.localIndex] = i;
            let ret: boolean = this.next.match(matcher, i, seq);
            matcher.locals[this.localIndex] = save;
            return ret;
        }

        matchRef(matcher: Matcher, i: number, seq: string): boolean {
            let save: number = matcher.locals[this.localIndex];
            matcher.locals[this.localIndex] = ~i; // HACK
            let ret: boolean = this.next.match(matcher, i, seq);
            matcher.locals[this.localIndex] = save;
            return ret;
        }
    }

    /**
     * Recursive reference to a group in the regular expression. It calls
     * matchRef because if the reference fails to match we would not unset
     * the group.
     */
    export class GroupRef extends Node {
        head: GroupHead;

        constructor(head: GroupHead) {
            super();
            this.head = head;
        }

        match(matcher: Matcher, i: number, seq: string) {
            return this.head.matchRef(matcher, i, seq)
                && this.next.match(matcher, matcher.last, seq);
        }

        study(info: TreeInfo): boolean {
            info.maxValid = false;
            info.deterministic = false;
            return this.next.study(info);
        }
    }

    /**
     * The GroupTail handles the setting of group beginning and ending
     * locations when groups are successfully matched. It must also be able to
     * unset groups that have to be backed off of.
     *
     * The GroupTail node is also used when a previous group is referenced,
     * and in that case no group information needs to be set.
     */
    export class GroupTail extends Node {
        localIndex: number;
        groupIndex: number;

        constructor(localCount: number, groupCount: number) {
            super();
            this.localIndex = localCount;
            this.groupIndex = groupCount + groupCount;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let tmp: number = matcher.locals[this.localIndex];
            if (tmp >= 0) { // This is the normal group case.
                // Save the group so we can unset it if it
                // backs off of a match.
                let groupStart: number = matcher.groups[this.groupIndex];
                let groupEnd: number = matcher.groups[this.groupIndex + 1];

                matcher.groups[this.groupIndex] = tmp;
                matcher.groups[this.groupIndex + 1] = i;
                if (this.next.match(matcher, i, seq)) {
                    return true;
                }
                matcher.groups[this.groupIndex] = groupStart;
                matcher.groups[this.groupIndex + 1] = groupEnd;
                return false;
            } else {
                // This is a group reference case. We don't need to save any
                // group info because it isn't really a group.
                matcher.last = i;
                return true;
            }
        }
    }

    /**
     * This sets up a loop to handle a recursive quantifier structure.
     */
    export class Prolog extends Node {
        loop: Loop;

        constructor(loop: Loop) {
            super();
            this.loop = loop;
        }

        match(matcher: Matcher, i: number, seq: string) {
            return this.loop.matchInit(matcher, i, seq);
        }

        study(info: TreeInfo): boolean {
            return this.loop.study(info);
        }
    }

    /**
     * Handles the repetition count for a greedy Curly. The matchInit
     * is called from the Prolog to save the index of where the group
     * beginning is stored. A zero length group check occurs in the
     * normal match but is skipped in the matchInit.
     */
    export class Loop extends Node {
        body: Node;
        countIndex: number; // local count index in matcher locals
        beginIndex: number; // group beginning index
        cmin: number;
        cmax: number;

        constructor(countIndex: number, beginIndex: number) {
            super();
            this.countIndex = countIndex;
            this.beginIndex = beginIndex;
        }

        match(matcher: Matcher, i: number, seq: string) {
            // Avoid infinite loop in zero-length case.
            if (i > matcher.locals[this.beginIndex]) {
                let count: number = matcher.locals[this.countIndex];

                // This block is for before we reach the minimum
                // iterations required for the loop to match
                if (count < this.cmin) {
                    matcher.locals[this.countIndex] = count + 1;
                    let b: boolean = this.body.match(matcher, i, seq);
                    // If match failed we must backtrack, so
                    // the loop count should NOT be incremented
                    if (!b)
                        matcher.locals[this.countIndex] = count;
                    // Return success or failure since we are under
                    // minimum
                    return b;
                }
                // This block is for after we have the minimum
                // iterations required for the loop to match
                if (count < this.cmax) {
                    matcher.locals[this.countIndex] = count + 1;
                    let b: boolean = this.body.match(matcher, i, seq);
                    // If match failed we must backtrack, so
                    // the loop count should NOT be incremented
                    if (!b)
                        matcher.locals[this.countIndex] = count;
                    else
                        return true;
                }
            }
            return this.next.match(matcher, i, seq);
        }

        matchInit(matcher: Matcher, i: number, seq: string): boolean {
            let save: number = matcher.locals[this.countIndex];
            let ret: boolean = false;
            if (0 < this.cmin) {
                matcher.locals[this.countIndex] = 1;
                ret = this.body.match(matcher, i, seq);
            } else if (0 < this.cmax) {
                matcher.locals[this.countIndex] = 1;
                ret = this.body.match(matcher, i, seq);
                if (ret == false)
                    ret = this.next.match(matcher, i, seq);
            } else {
                ret = this.next.match(matcher, i, seq);
            }
            matcher.locals[this.countIndex] = save;
            return ret;
        }

        study(info: TreeInfo): boolean {
            info.maxValid = false;
            info.deterministic = false;
            return false;
        }
    }

    /**
     * Handles the repetition count for a reluctant Curly. The matchInit
     * is called from the Prolog to save the index of where the group
     * beginning is stored. A zero length group check occurs in the
     * normal match but is skipped in the matchInit.
     */
    export class LazyLoop extends Loop {
        constructor(countIndex: number, beginIndex: number) {
            super(countIndex, beginIndex);
        }

        match(matcher: Matcher, i: number, seq: string) {
            // Check for zero length group
            if (i > matcher.locals[this.beginIndex]) {
                let count: number = matcher.locals[this.countIndex];
                if (count < this.cmin) {
                    matcher.locals[this.countIndex] = count + 1;
                    let result: boolean = this.body.match(matcher, i, seq);
                    // If match failed we must backtrack, so
                    // the loop count should NOT be incremented
                    if (!result)
                        matcher.locals[this.countIndex] = count;
                    return result;
                }
                if (this.next.match(matcher, i, seq))
                    return true;
                if (count < this.cmax) {
                    matcher.locals[this.countIndex] = count + 1;
                    let result: boolean = this.body.match(matcher, i, seq);
                    // If match failed we must backtrack, so
                    // the loop count should NOT be incremented
                    if (!result)
                        matcher.locals[this.countIndex] = count;
                    return result;
                }
                return false;
            }
            return this.next.match(matcher, i, seq);
        }

        matchInit(matcher: Matcher, i: number, seq: string): boolean {
            let save: number = matcher.locals[this.countIndex];
            let ret: boolean = false;
            if (0 < this.cmin) {
                matcher.locals[this.countIndex] = 1;
                ret = this.body.match(matcher, i, seq);
            } else if (this.next.match(matcher, i, seq)) {
                ret = true;
            } else if (0 < this.cmax) {
                matcher.locals[this.countIndex] = 1;
                ret = this.body.match(matcher, i, seq);
            }
            matcher.locals[this.countIndex] = save;
            return ret;
        }

        study(info: TreeInfo): boolean {
            info.maxValid = false;
            info.deterministic = false;
            return false;
        }
    }

    /**
     * Refers to a group in the regular expression. Attempts to match
     * whatever the group referred to last matched.
     */
    export class BackRef extends Node {
        groupIndex: number;

        constructor(groupCount: number) {
            super();
            this.groupIndex = groupCount + groupCount;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let j: number = matcher.groups[this.groupIndex];
            let k: number = matcher.groups[this.groupIndex + 1];

            let groupSize: number = k - j;
            // If the referenced group didn't match, neither can this
            if (j < 0)
                return false;

            // If there isn't enough input left no match
            if (i + groupSize > matcher.to) {
                matcher.hitEnd = true;
                return false;
            }
            // Check each new char to make sure it matches what the group
            // referenced matched last time around
            for (let index: number = 0; index < groupSize; index++)
                if (seq.charAt(i + index) != seq.charAt(j + index))
                    return false;

            return this.next.match(matcher, i + groupSize, seq);
        }

        study(info: TreeInfo): boolean {
            info.maxValid = false;
            return this.next.study(info);
        }
    }

    export class CIBackRef extends Node {
        groupIndex: number;
        doUnicodeCase: boolean;

        constructor(groupCount: number, doUnicodeCase: boolean) {
            super();
            this.groupIndex = groupCount + groupCount;
            this.doUnicodeCase = doUnicodeCase;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let j: number = matcher.groups[this.groupIndex];
            let k: number = matcher.groups[this.groupIndex + 1];

            let groupSize: number = k - j;

            // If the referenced group didn't match, neither can this
            if (j < 0)
                return false;

            // If there isn't enough input left no match
            if (i + groupSize > matcher.to) {
                matcher.hitEnd = true;
                return false;
            }

            // Check each new char to make sure it matches what the group
            // referenced matched last time around
            let x: number = i;
            for (let index: number = 0; index < groupSize; index++) {
                let c1: number = Character.codePointAt(seq, x);
                let c2: number = Character.codePointAt(seq, j);
                if (c1 != c2) {
                    if (this.doUnicodeCase) {
                        let cc1: number = Character.toUpperCase(c1);
                        let cc2: number = Character.toUpperCase(c2);
                        if (cc1 != cc2 &&
                            Character.toLowerCase(cc1) !=
                            Character.toLowerCase(cc2))
                            return false;
                    } else {
                        if (ASCII.toLower(c1) != ASCII.toLower(c2))
                            return false;
                    }
                }
                x += Character.charCount(c1);
                j += Character.charCount(c2);
            }

            return this.next.match(matcher, i + groupSize, seq);
        }

        study(info: TreeInfo): boolean {
            info.maxValid = false;
            return this.next.study(info);
        }
    }

    /**
     * Searches until the next instance of its atom. This is useful for
     * finding the atom efficiently without passing an instance of it
     * (greedy problem) and without a lot of wasted search time (reluctant
     * problem).
     */
    export class First extends Node {
        atom: Node;

        constructor(node: Node) {
            super();
            this.atom = BnM.optimize(node);
        }

        match(matcher: Matcher, i: number, seq: string) {
            if (this.atom instanceof BnM) {
                return this.atom.match(matcher, i, seq)
                    && this.next.match(matcher, matcher.last, seq);
            }
            for (; ;) {
                if (i > matcher.to) {
                    matcher.hitEnd = true;
                    return false;
                }
                if (this.atom.match(matcher, i, seq)) {
                    return this.next.match(matcher, matcher.last, seq);
                }
                i += Pattern.countChars(seq, i, 1);
                matcher.first++;
            }
        }

        study(info: TreeInfo): boolean {
            this.atom.study(info);
            info.maxValid = false;
            info.deterministic = false;
            return this.next.study(info);
        }
    }

    export class Conditional extends Node {
        cond: Node;
        yes: Node;
        not: Node;

        constructor(cond: Node, yes: Node, not: Node) {
            super();
            this.cond = cond;
            this.yes = yes;
            this.not = not;
        }

        match(matcher: Matcher, i: number, seq: string) {
            if (this.cond.match(matcher, i, seq)) {
                return this.yes.match(matcher, i, seq);
            } else {
                return this.not.match(matcher, i, seq);
            }
        }

        study(info: TreeInfo): boolean {
            let minL: number = info.minLength;
            let maxL: number = info.maxLength;
            let maxV: boolean = info.maxValid;
            info.reset();
            this.yes.study(info);

            let minL2: number = info.minLength;
            let maxL2: number = info.maxLength;
            let maxV2: boolean = info.maxValid;
            info.reset();
            this.not.study(info);

            info.minLength = minL + Math.min(minL2, info.minLength);
            info.maxLength = maxL + Math.max(maxL2, info.maxLength);
            info.maxValid = (maxV && maxV2 && info.maxValid);
            info.deterministic = false;
            return this.next.study(info);
        }
    }

    /**
     * Zero width positive lookahead.
     */
    export class Pos extends Node {
        cond: Node;

        constructor(cond: Node) {
            super();
            this.cond = cond;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let savedTo: number = matcher.to;
            let conditionMatched: boolean = false;

            // Relax transparent region boundaries for lookahead
            if (matcher.transparentBounds)
                matcher.to = matcher.getTextLength();
            try {
                conditionMatched = this.cond.match(matcher, i, seq);
            } finally {
                // Reinstate region boundaries
                matcher.to = savedTo;
            }
            return conditionMatched && this.next.match(matcher, i, seq);
        }
    }

    /**
     * Zero width negative lookahead.
     */
    export class Neg extends Node {
        cond: Node;

        constructor(cond: Node) {
            super();
            this.cond = cond;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let savedTo: number = matcher.to;
            let conditionMatched: boolean = false;

            // Relax transparent region boundaries for lookahead
            if (matcher.transparentBounds)
                matcher.to = matcher.getTextLength();
            try {
                if (i < matcher.to) {
                    conditionMatched = !this.cond.match(matcher, i, seq);
                } else {
                    // If a negative lookahead succeeds then more input
                    // could cause it to fail!
                    matcher.requireEnd = true;
                    conditionMatched = !this.cond.match(matcher, i, seq);
                }
            } finally {
                // Reinstate region boundaries
                matcher.to = savedTo;
            }
            return conditionMatched && this.next.match(matcher, i, seq);
        }
    }

    /**
     * Zero width positive lookbehind.
     */
    export class Behind extends Node {
        cond: Node;
        rmax: number;
        rmin: number;

        constructor(cond: Node, rmax: number, rmin: number) {
            super();
            this.cond = cond;
            this.rmax = rmax;
            this.rmin = rmin;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let savedFrom: number = matcher.from;
            let conditionMatched: boolean = false;
            let startIndex: number = (!matcher.transparentBounds) ?
                matcher.from : 0;
            let from: number = Math.max(i - this.rmax, startIndex);
            // Set end boundary
            let savedLBT: number = matcher.lookbehindTo;
            matcher.lookbehindTo = i;
            // Relax transparent region boundaries for lookbehind
            if (matcher.transparentBounds)
                matcher.from = 0;
            for (let j: number = i - this.rmin; !conditionMatched && j >= from; j--) {
                conditionMatched = this.cond.match(matcher, j, seq);
            }
            matcher.from = savedFrom;
            matcher.lookbehindTo = savedLBT;
            return conditionMatched && this.next.match(matcher, i, seq);
        }
    }

    /**
     * Zero width positive lookbehind, including supplementary
     * characters or unpaired surrogates.
     */
    export class BehindS extends Behind {
        constructor(cond: Node, rmax: number, rmin: number) {
            super(cond, rmax, rmin);
        }

        match(matcher: Matcher, i: number, seq: string) {
            let rmaxChars: number = Pattern.countChars(seq, i, -this.rmax);
            let rminChars: number = Pattern.countChars(seq, i, -this.rmin);
            let savedFrom: number = matcher.from;
            let startIndex: number = (!matcher.transparentBounds) ?
                matcher.from : 0;
            let conditionMatched: boolean = false;
            let from: number = Math.max(i - rmaxChars, startIndex);
            // Set end boundary
            let savedLBT: number = matcher.lookbehindTo;
            matcher.lookbehindTo = i;
            // Relax transparent region boundaries for lookbehind
            if (matcher.transparentBounds)
                matcher.from = 0;

            for (let j: number = i - rminChars;
                 !conditionMatched && j >= from;
                 j -= j > from ? Pattern.countChars(seq, j, -1) : 1) {
                conditionMatched = this.cond.match(matcher, j, seq);
            }
            matcher.from = savedFrom;
            matcher.lookbehindTo = savedLBT;
            return conditionMatched && this.next.match(matcher, i, seq);
        }
    }

    /**
     * Zero width negative lookbehind.
     */
    export class NotBehind extends Node {
        cond: Node;
        rmax: number;
        rmin: number;

        constructor(cond: Node, rmax: number, rmin: number) {
            super();
            this.cond = cond;
            this.rmax = rmax;
            this.rmin = rmin;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let savedLBT: number = matcher.lookbehindTo;
            let savedFrom: number = matcher.from;
            let conditionMatched: boolean = false;
            let startIndex: number = (!matcher.transparentBounds) ?
                matcher.from : 0;
            let from: number = Math.max(i - this.rmax, startIndex);
            matcher.lookbehindTo = i;
            // Relax transparent region boundaries for lookbehind
            if (matcher.transparentBounds)
                matcher.from = 0;
            for (let j: number = i - this.rmin; !conditionMatched && j >= from; j--) {
                conditionMatched = this.cond.match(matcher, j, seq);
            }
            // Reinstate region boundaries
            matcher.from = savedFrom;
            matcher.lookbehindTo = savedLBT;
            return !conditionMatched && this.next.match(matcher, i, seq);
        }
    }

    /**
     * Zero width negative lookbehind, including supplementary
     * characters or unpaired surrogates.
     */
    export class NotBehindS extends NotBehind {
        constructor(cond: Node, rmax: number, rmin: number) {
            super(cond, rmax, rmin);
        }

        match(matcher: Matcher, i: number, seq: string) {
            let rmaxChars: number = Pattern.countChars(seq, i, -this.rmax);
            let rminChars: number = Pattern.countChars(seq, i, -this.rmin);
            let savedFrom: number = matcher.from;
            let savedLBT: number = matcher.lookbehindTo;
            let conditionMatched: boolean = false;
            let startIndex: number = (!matcher.transparentBounds) ?
                matcher.from : 0;
            let from: number = Math.max(i - rmaxChars, startIndex);
            matcher.lookbehindTo = i;
            // Relax transparent region boundaries for lookbehind
            if (matcher.transparentBounds)
                matcher.from = 0;
            for (let j: number = i - rminChars;
                 !conditionMatched && j >= from;
                 j -= j > from ? Pattern.countChars(seq, j, -1) : 1) {
                conditionMatched = this.cond.match(matcher, j, seq);
            }
            //Reinstate region boundaries
            matcher.from = savedFrom;
            matcher.lookbehindTo = savedLBT;
            return !conditionMatched && this.next.match(matcher, i, seq);
        }
    }

    /**
     * Handles word boundaries. Includes a field to allow this one class to
     * deal with the different types of word boundaries we can match. The word
     * characters include underscores, letters, and digits. Non spacing marks
     * can are also part of a word if they have a base character, otherwise
     * they are ignored for purposes of finding word boundaries.
     */
    export class Bound extends Node {
        static LEFT: number = 0x1;
        static RIGHT: number = 0x2;
        static BOTH: number = 0x3;
        static NONE: number = 0x4;
        type: number;
        useUWORD: boolean;

        constructor(n: number, useUWORD: boolean) {
            super();
            this.type = n;
            this.useUWORD = useUWORD;
        }

        isWord(ch: number): boolean {
            return this.useUWORD ? UnicodeProp.WORD.is(ch)
                : (ch == '_'.charCodeAt(0) || Character.isLetterOrDigit(String.fromCharCode(ch)));
        }

        check(matcher: Matcher, i: number, seq: string): number {
            let ch: number;
            let left: boolean = false;
            let startIndex: number = matcher.from;
            let endIndex: number = matcher.to;
            if (matcher.transparentBounds) {
                startIndex = 0;
                endIndex = matcher.getTextLength();
            }
            if (i > startIndex) {
                ch = Character.codePointBefore(seq, i);
                left = (this.isWord(ch) ||
                    ((Character.getType(ch) == Character.NON_SPACING_MARK)
                        && Pattern.hasBaseCharacter(matcher, i - 1, seq)));
            }
            let right: boolean = false;
            if (i < endIndex) {
                ch = Character.codePointAt(seq, i);
                right = (this.isWord(ch) ||
                    ((Character.getType(String.fromCharCode(ch)) == Character.NON_SPACING_MARK)
                        && Pattern.hasBaseCharacter(matcher, i, seq)));
            } else {
                // Tried to access char past the end
                matcher.hitEnd = true;
                // The addition of another char could wreck a boundary
                matcher.requireEnd = true;
            }
            return ((left !== right) ? (right ? Bound.LEFT : Bound.RIGHT) : Bound.NONE);
        }

        match(matcher: Matcher, i: number, seq: string) {
            return (this.check(matcher, i, seq) & this.type) > 0
                && this.next.match(matcher, i, seq);
        }
    }

    /**
     * Attempts to match a slice in the input using the Boyer-Moore string
     * matching algorithm. The algorithm is based on the idea that the
     * pattern can be shifted farther ahead in the search text if it is
     * matched right to left.
     * <p>
     * The pattern is compared to the input one character at a time, from
     * the rightmost character in the pattern to the left. If the characters
     * all match the pattern has been found. If a character does not match,
     * the pattern is shifted right a distance that is the maximum of two
     * functions, the bad character shift and the good suffix shift. This
     * shift moves the attempted match position through the input more
     * quickly than a naive one position at a time check.
     * <p>
     * The bad character shift is based on the character from the text that
     * did not match. If the character does not appear in the pattern, the
     * pattern can be shifted completely beyond the bad character. If the
     * character does occur in the pattern, the pattern can be shifted to
     * line the pattern up with the next occurrence of that character.
     * <p>
     * The good suffix shift is based on the idea that some subset on the right
     * side of the pattern has matched. When a bad character is found, the
     * pattern can be shifted right by the pattern length if the subset does
     * not occur again in pattern, or by the amount of distance to the
     * next occurrence of the subset in the pattern.
     *
     * Boyer-Moore search methods adapted from code by Amy Yu.
     */
    export class BnM extends Node {
        buffer: Array<number>;
        lastOcc: Array<number>;
        optoSft: Array<number>;

        /**
         * Pre calculates arrays needed to generate the bad character
         * shift and the good suffix shift. Only the last seven bits
         * are used to see if chars match; This keeps the tables small
         * and covers the heavily used ASCII range, but occasionally
         * results in an aliased match for the bad character shift.
         */
        static optimize(node: Node): Node {
            if (!(node instanceof Slice)) {
                return node;
            }

            let src: Array<number> = (<Slice> node).buffer;
            let patternLength: number = src.length;
// The BM algorithm requires a bit of overhead;
// If the pattern is short don't use it, since
// a shift larger than the pattern length cannot
// be used anyway.
            if (patternLength < 4) {
                return node;
            }
            let i: number, j: number, k: number;
            let lastOcc: Array<number> = ((size) => {
                const result = new Array<number>(size);
                for (let ii = 0; ii < size; ii++) result.push(0);
                return result;
            })(128);
            let optoSft: Array<number> = ((size) => {
                const result = new Array<number>(size);
                for (let ii = 0; ii < size; ii++) result.push(0);
                return result;
            })(patternLength);
// Precalculate part of the bad character shift
// It is a table for where in the pattern each
// lower 7-bit value occurs
            for (i = 0; i < patternLength; i++) {
                lastOcc[src[i] & 0x7F] = i + 1;
            }
// Precalculate the good suffix shift
// i is the shift amount being considered
            NEXT:       for (i = patternLength; i > 0; i--) {
                // j is the beginning index of suffix being considered
                for (j = patternLength - 1; j >= i; j--) {
                    // Testing for good suffix
                    if (src[j] == src[j - i]) {
                        // src[j..len] is a good suffix
                        optoSft[j - 1] = i;
                    } else {
                        // No match. The array has already been
                        // filled up with correct values before.
                        continue NEXT;
                    }
                }
                // This fills up the remaining of optoSft
                // any suffix can not have larger shift amount
                // then its sub-suffix. Why???
                while (j > 0) {
                    optoSft[--j] = i;
                }
            }
// Set the guard value because of unicode compression
            optoSft[patternLength - 1] = 1;
            if (node instanceof SliceS)
                return new BnMS(src, lastOcc, optoSft, node.next);
            return new BnM(src, lastOcc, optoSft, node.next);
        }

        constructor(src: Array<number>, lastOcc: Array<number>, optoSft: Array<number>, next: Node) {
            super();
            this.buffer = src;
            this.lastOcc = lastOcc;
            this.optoSft = optoSft;
            this.next = next;
        }

        match(matcher: Matcher, i: number, seq: string) {
            let src: Array<number> = this.buffer;
            let patternLength: number = src.length;
            let last: number = matcher.to - patternLength;

            // Loop over all possible match positions in text
            NEXT:       while (i <= last) {
                // Loop over pattern from right to left
                for (let j: number = patternLength - 1; j >= 0; j--) {
                    let ch: number = seq.charCodeAt(i + j);
                    if (ch != src[j]) {
                        // Shift search to the right by the maximum of the
                        // bad character shift and the good suffix shift
                        i += Math.max(j + 1 - this.lastOcc[ch & 0x7F], this.optoSft[j]);
                        continue NEXT;
                    }
                }
                // Entire pattern matched starting at i
                matcher.first = i;
                let ret: boolean = this.next.match(matcher, i + patternLength, seq);
                if (ret) {
                    matcher.first = i;
                    matcher.groups[0] = matcher.first;
                    matcher.groups[1] = matcher.last;
                    return true;
                }
                i++;
            }
            // BnM is only used as the leading node in the unanchored case,
            // and it replaced its Start() which always searches to the end
            // if it doesn't find what it's looking for, so hitEnd is true.
            matcher.hitEnd = true;
            return false;
        }

        study(info: TreeInfo): boolean {
            info.minLength += this.buffer.length;
            info.maxValid = false;
            return this.next.study(info);
        }
    }

    /**
     * Supplementary support version of BnM(). Unpaired surrogates are
     * also handled by this class.
     */
    export class BnMS extends BnM {
        lengthInChars: number;

        constructor(src: Array<number>, lastOcc: Array<number>, optoSft: Array<number>, next: Node) {
            super(src, lastOcc, optoSft, next);
            for (let x: number = 0; x < this.buffer.length; x++) {
                this.lengthInChars += Character.charCount(this.buffer[x]);
            }
        }

        match(matcher: Matcher, i: number, seq: string) {
            let src: Array<number> = this.buffer;
            let patternLength: number = src.length;
            let last: number = matcher.to - this.lengthInChars;

            // Loop over all possible match positions in text
            NEXT:       while (i <= last) {
                // Loop over pattern from right to left
                let ch: number;
                for (let j: number = Pattern.countChars(seq, i, patternLength), x = patternLength - 1;
                     j > 0; j -= Character.charCount(ch), x--) {
                    ch = Character.codePointBefore(seq, i + j);
                    if (ch != src[x]) {
                        // Shift search to the right by the maximum of the
                        // bad character shift and the good suffix shift
                        let n: number = Math.max(x + 1 - this.lastOcc[ch & 0x7F], this.optoSft[x]);
                        i += Pattern.countChars(seq, i, n);
                        continue NEXT;
                    }
                }
                // Entire pattern matched starting at i
                matcher.first = i;
                let ret: boolean = this.next.match(matcher, i + this.lengthInChars, seq);
                if (ret) {
                    matcher.first = i;
                    matcher.groups[0] = matcher.first;
                    matcher.groups[1] = matcher.last;
                    return true;
                }
                i += Pattern.countChars(seq, i, 1);
            }
            matcher.hitEnd = true;
            return false;
        }
    }
}