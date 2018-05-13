/**
 * This class represents the set of symbols (such as the decimal separator,
 * the grouping separator, and so on) needed by <code>DecimalFormat</code>
 * to format numbers. <code>DecimalFormat</code> creates for itself an instance of
 * <code>DecimalFormatSymbols</code> from its locale data.  If you need to change any
 * of these symbols, you can get the <code>DecimalFormatSymbols</code> object from
 * your <code>DecimalFormat</code> and modify it.
 *
 * @see          java.util.Locale
 * @see          DecimalFormat
 * @author       Mark Davis
 * @author       Alan Liu
 */
import {Serializable} from "../io/Serializable";
import {Locale} from "../util/Locale";
import {Currency} from "../util/Currency";
import {NullPointerException} from "../lang/NullPointerException";
import {IllegalArgumentException} from "../lang/IllegalArgumentException";
import {Map} from "../util/Map";

export class DecimalFormatSymbols implements Serializable {
    /**
     * Character used for zero.
     *
     * @serial
     * @see #getZeroDigit
     */
    private zeroDigit:string;

    /**
     * Character used for thousands separator.
     *
     * @serial
     * @see #getGroupingSeparator
     */
    private groupingSeparator:string;

    /**
     * Character used for decimal sign.
     *
     * @serial
     * @see #getDecimalSeparator
     */
    private decimalSeparator:string;

    /**
     * Character used for per mille sign.
     *
     * @serial
     * @see #getPerMill
     */
    private perMill:string;

    /**
     * Character used for percent sign.
     * @serial
     * @see #getPercent
     */
    private percent:string;

    /**
     * Character used for a digit in a pattern.
     *
     * @serial
     * @see #getDigit
     */
    private digit:string;

    /**
     * Character used to separate positive and negative subpatterns
     * in a pattern.
     *
     * @serial
     * @see #getPatternSeparator
     */
    private patternSeparator:string;

    /**
     * String used to represent infinity.
     * @serial
     * @see #getInfinity
     */
    private infinity:string;

    /**
     * String used to represent "not a number".
     * @serial
     * @see #getNaN
     */
    private NaN:string;

    /**
     * Character used to represent minus sign.
     * @serial
     * @see #getMinusSign
     */
    private minusSign:string;

    /**
     * String denoting the local currency, e.g. "$".
     * @serial
     * @see #getCurrencySymbol
     */
    private currencySymbol:string;

    /**
     * ISO 4217 currency code denoting the local currency, e.g. "USD".
     * @serial
     * @see #getInternationalCurrencySymbol
     */
    private intlCurrencySymbol:string;

    /**
     * The decimal separator used when formatting currency values.
     * @serial
     * @since JDK 1.1.6
     * @see #getMonetaryDecimalSeparator
     */
    private monetarySeparator:string; // Field new in JDK 1.1.6

    /**
     * The character used to distinguish the exponent in a number formatted
     * in exponential notation, e.g. 'E' for a number such as "1.23E45".
     * <p>
     * Note that the public API provides no way to set this field,
     * even though it is supported by the implementation and the stream format.
     * The intent is that this will be added to the API in the future.
     *
     * @serial
     * @since JDK 1.1.6
     */
    private exponential:string;       // Field new in JDK 1.1.6

    /**
     * The string used to separate the mantissa from the exponent.
     * Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.
     * <p>
     * If both <code>exponential</code> and <code>exponentialSeparator</code>
     * exist, this <code>exponentialSeparator</code> has the precedence.
     *
     * @serial
     * @since 1.6
     */
    private exponentialSeparator:string;       // Field new in JDK 1.6

    /**
     * The locale of these currency format symbols.
     *
     * @serial
     * @since 1.4
     */
    private locale:Locale;

// currency; only the ISO code is serialized.
    private currency:Currency;
    
    
    /**
     * Create a DecimalFormatSymbols object for the given locale.
     * This constructor can only construct instances for the locales
     * supported by the Java runtime environment, not for those
     * supported by installed
     * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
     * implementations. For full locale coverage, use the
     * {@link #getInstance(Locale) getInstance} method.
     * If the specified locale contains the {@link java.util.Locale#UNICODE_LOCALE_EXTENSION}
     * for the numbering system, the instance is initialized with the specified numbering
     * system if the JRE implementation supports it. For example,
     * <pre>
     * NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
     * </pre>
     * This may return a {@code NumberFormat} instance with the Thai numbering system,
     * instead of the Latin numbering system.
     *
     * @param locale the desired locale
     * @exception NullPointerException if <code>locale</code> is null
     */
    public constructor( locale?:Locale ) {
        if(locale === undefined) {
            locale = Locale.getDefault();
        }
        this.initialize( locale );
}
//
// /**
//  * Returns an array of all locales for which the
//  * <code>getInstance</code> methods of this class can return
//  * localized instances.
//  * The returned array represents the union of locales supported by the Java
//  * runtime and by installed
//  * {@link java.text.spi.DecimalFormatSymbolsProvider DecimalFormatSymbolsProvider}
//  * implementations.  It must contain at least a <code>Locale</code>
//  * instance equal to {@link java.util.Locale#US Locale.US}.
//  *
//  * @return an array of locales for which localized
//  *         <code>DecimalFormatSymbols</code> instances are available.
//  * @since 1.6
//  */
// public static Locale[] getAvailableLocales() {
//     LocaleServiceProviderPool pool =
//         LocaleServiceProviderPool.getPool(DecimalFormatSymbolsProvider.class);
//     return pool.getAvailableLocales();
// }

/**
 * Gets the <code>DecimalFormatSymbols</code> instance for the specified
 * locale.  This method provides access to <code>DecimalFormatSymbols</code>
 * instances for locales supported by the Java runtime itself as well
 * as for those supported by installed
 * {@link java.text.spi.DecimalFormatSymbolsProvider
     * DecimalFormatSymbolsProvider} implementations.
 * If the specified locale contains the {@link java.util.Locale#UNICODE_LOCALE_EXTENSION}
 * for the numbering system, the instance is initialized with the specified numbering
 * system if the JRE implementation supports it. For example,
 * <pre>
 * NumberFormat.getNumberInstance(Locale.forLanguageTag("th-TH-u-nu-thai"))
 * </pre>
 * This may return a {@code NumberFormat} instance with the Thai numbering system,
 * instead of the Latin numbering system.
 *
 * @param locale the desired locale.
 * @return a <code>DecimalFormatSymbols</code> instance.
 * @exception NullPointerException if <code>locale</code> is null
 * @since 1.6
 */
public static getInstance(locale?:Locale):DecimalFormatSymbols {
    return new DecimalFormatSymbols(locale);
}

/**
 * Gets the character used for zero. Different for Arabic, etc.
 *
 * @return the character used for zero
 */
public getZeroDigit():string {
    return this.zeroDigit;
}

/**
 * Sets the character used for zero. Different for Arabic, etc.
 *
 * @param zeroDigit the character used for zero
 */
public setZeroDigit(zeroDigit:string):void {
    this.zeroDigit = zeroDigit;
}

/**
 * Gets the character used for thousands separator. Different for French, etc.
 *
 * @return the grouping separator
 */
public getGroupingSeparator():string {
    return this.groupingSeparator;
}

/**
 * Sets the character used for thousands separator. Different for French, etc.
 *
 * @param groupingSeparator the grouping separator
 */
public setGroupingSeparator(groupingSeparator:string):void{
    this.groupingSeparator = groupingSeparator;
}

/**
 * Gets the character used for decimal sign. Different for French, etc.
 *
 * @return the character used for decimal sign
 */
public getDecimalSeparator():string {
    return this.decimalSeparator;
}

/**
 * Sets the character used for decimal sign. Different for French, etc.
 *
 * @param decimalSeparator the character used for decimal sign
 */
public setDecimalSeparator(decimalSeparator:string):void {
    this.decimalSeparator = decimalSeparator;
}

/**
 * Gets the character used for per mille sign. Different for Arabic, etc.
 *
 * @return the character used for per mille sign
 */
public getPerMill():string {
    return this.perMill;
}

/**
 * Sets the character used for per mille sign. Different for Arabic, etc.
 *
 * @param perMill the character used for per mille sign
 */
public setPerMill(perMill:string):void {
    this.perMill = perMill;
}

/**
 * Gets the character used for percent sign. Different for Arabic, etc.
 *
 * @return the character used for percent sign
 */
public getPercent():string {
    return this.percent;
}

/**
 * Sets the character used for percent sign. Different for Arabic, etc.
 *
 * @param percent the character used for percent sign
 */
public setPercent(percent:string):void {
    this.percent = percent;
}

/**
 * Gets the character used for a digit in a pattern.
 *
 * @return the character used for a digit in a pattern
 */
public getDigit():string {
    return this.digit;
}

/**
 * Sets the character used for a digit in a pattern.
 *
 * @param digit the character used for a digit in a pattern
 */
public setDigit(digit:string):void {
    this.digit = digit;
}

/**
 * Gets the character used to separate positive and negative subpatterns
 * in a pattern.
 *
 * @return the pattern separator
 */
public getPatternSeparator():string {
    return this.patternSeparator;
}

/**
 * Sets the character used to separate positive and negative subpatterns
 * in a pattern.
 *
 * @param patternSeparator the pattern separator
 */
public setPatternSeparator(patternSeparator:string):void {
    this.patternSeparator = patternSeparator;
}

/**
 * Gets the string used to represent infinity. Almost always left
 * unchanged.
 *
 * @return the string representing infinity
 */
public getInfinity():string {
    return this.infinity;
}

/**
 * Sets the string used to represent infinity. Almost always left
 * unchanged.
 *
 * @param infinity the string representing infinity
 */
public setInfinity(infinity:string):void {
    this.infinity = infinity;
}

/**
 * Gets the string used to represent "not a number". Almost always left
 * unchanged.
 *
 * @return the string representing "not a number"
 */
public getNaN():string {
    return this.NaN;
}

/**
 * Sets the string used to represent "not a number". Almost always left
 * unchanged.
 *
 * @param NaN the string representing "not a number"
 */
public setNaN(NaN:string):void {
    this.NaN = NaN;
}

/**
 * Gets the character used to represent minus sign. If no explicit
 * negative format is specified, one is formed by prefixing
 * minusSign to the positive format.
 *
 * @return the character representing minus sign
 */
public getMinusSign():string {
    return this.minusSign;
}

/**
 * Sets the character used to represent minus sign. If no explicit
 * negative format is specified, one is formed by prefixing
 * minusSign to the positive format.
 *
 * @param minusSign the character representing minus sign
 */
public setMinusSign(minusSign:string):void {
    this.minusSign = minusSign;
}

/**
 * Returns the currency symbol for the currency of these
 * DecimalFormatSymbols in their locale.
 *
 * @return the currency symbol
 * @since 1.2
 */
public getCurrencySymbol():string {
    return this.currencySymbol;
}

/**
 * Sets the currency symbol for the currency of these
 * DecimalFormatSymbols in their locale.
 *
 * @param currency the currency symbol
 * @since 1.2
 */
public setCurrencySymbol(currency:string):void {
    this.currencySymbol = currency;
}

/**
 * Returns the ISO 4217 currency code of the currency of these
 * DecimalFormatSymbols.
 *
 * @return the currency code
 * @since 1.2
 */
public getInternationalCurrencySymbol():string {
    return this.intlCurrencySymbol;
}

/**
 * Sets the ISO 4217 currency code of the currency of these
 * DecimalFormatSymbols.
 * If the currency code is valid (as defined by
 * {@link java.util.Currency#getInstance(java.lang.String) Currency.getInstance}),
 * this also sets the currency attribute to the corresponding Currency
 * instance and the currency symbol attribute to the currency's symbol
 * in the DecimalFormatSymbols' locale. If the currency code is not valid,
 * then the currency attribute is set to null and the currency symbol
 * attribute is not modified.
 *
 * @param currencyCode the currency code
 * @see #setCurrency
 * @see #setCurrencySymbol
 * @since 1.2
 */
public setInternationalCurrencySymbol(currencyCode:string):void {
    this.intlCurrencySymbol = currencyCode;
    this.currency = null;
    if (currencyCode != null) {
            this.currency = Currency.getInstance(currencyCode);
            this.currencySymbol = this.currency.getSymbol();
    }
}

/**
 * Gets the currency of these DecimalFormatSymbols. May be null if the
 * currency symbol attribute was previously set to a value that's not
 * a valid ISO 4217 currency code.
 *
 * @return the currency used, or null
 * @since 1.4
 */
public  getCurrency() :Currency{
    return this.currency;
}

/**
 * Sets the currency of these DecimalFormatSymbols.
 * This also sets the currency symbol attribute to the currency's symbol
 * in the DecimalFormatSymbols' locale, and the international currency
 * symbol attribute to the currency's ISO 4217 currency code.
 *
 * @param currency the new currency to be used
 * @exception NullPointerException if <code>currency</code> is null
 * @since 1.4
 * @see #setCurrencySymbol
 * @see #setInternationalCurrencySymbol
 */
public setCurrency(currency:Currency):void {
    if (currency == null) {
        throw new NullPointerException();
    }
    this.currency = currency;
    this.intlCurrencySymbol = this.currency.getCurrencyCode();
    this.currencySymbol = this.currency.getSymbol(this.locale);
}


/**
 * Returns the monetary decimal separator.
 *
 * @return the monetary decimal separator
 * @since 1.2
 */
public char():string {
    return this.monetarySeparator;
}

/**
 * Sets the monetary decimal separator.
 *
 * @param sep the monetary decimal separator
 * @since 1.2
 */
public setMonetaryDecimalSeparator(sep:string):void {
    this.monetarySeparator = sep;
}

//------------------------------------------------------------
// BEGIN   Package Private methods ... to be made public later
//------------------------------------------------------------

/**
 * Returns the character used to separate the mantissa from the exponent.
 */
 getExponentialSymbol():string
{
    return this.exponential;
}
/**
 * Returns the string used to separate the mantissa from the exponent.
 * Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.
 *
 * @return the exponent separator string
 * @see #setExponentSeparator(java.lang.String)
 * @since 1.6
 */
public getExponentSeparator():string {
    return this.exponentialSeparator;
}

/**
 * Sets the character used to separate the mantissa from the exponent.
 */
 setExponentialSymbol( exp:string):void
{
    this.exponential = exp;
}

/**
 * Sets the string used to separate the mantissa from the exponent.
 * Examples: "x10^" for 1.23x10^4, "E" for 1.23E4.
 *
 * @param exp the exponent separator string
 * @exception NullPointerException if <code>exp</code> is null
 * @see #getExponentSeparator()
 * @since 1.6
 */
public setExponentSeparator(exp:string):void {
    if (exp == null) {
        throw new NullPointerException();
    }
    this.exponentialSeparator = exp;
}


//------------------------------------------------------------
// END     Package Private methods ... to be made public later
//------------------------------------------------------------

// /**
//  * Standard override.
//  */
// @Override
// public Object clone() {
//     try {
//         return (DecimalFormatSymbols)super.clone();
//         // other fields are bit-copied
//     } catch (CloneNotSupportedException e) {
//         throw new InternalError(e);
//     }
// }

// /**
//  * Override equals.
//  */
// @Override
// public boolean equals(Object obj) {
//     if (obj == null) return false;
//     if (this == obj) return true;
//     if (getClass() != obj.getClass()) return false;
//     DecimalFormatSymbols other = (DecimalFormatSymbols) obj;
//     return (zeroDigit == other.zeroDigit &&
//         groupingSeparator == other.groupingSeparator &&
//         decimalSeparator == other.decimalSeparator &&
//         percent == other.percent &&
//         perMill == other.perMill &&
//         digit == other.digit &&
//         minusSign == other.minusSign &&
//         patternSeparator == other.patternSeparator &&
//         infinity.equals(other.infinity) &&
//         NaN.equals(other.NaN) &&
//         currencySymbol.equals(other.currencySymbol) &&
//         intlCurrencySymbol.equals(other.intlCurrencySymbol) &&
//         currency == other.currency &&
//         monetarySeparator == other.monetarySeparator &&
//         exponentialSeparator.equals(other.exponentialSeparator) &&
//         locale.equals(other.locale));
// }

// /**
//  * Override hashCode.
//  */
// @Override
// public int hashCode() {
//     int result = zeroDigit;
//     result = result * 37 + groupingSeparator;
//     result = result * 37 + decimalSeparator;
//     return result;
// }

    private getSymbolsByLocale(locale:Locale):Array<string> {
        switch(locale.toString()) {
            case 'en_US': {

                return;
            }
            case 'zh_CN': {

            }
        }
    }

    private static SymbolBundle:Map<String, Array<String>>;
    private static initSymbolBundle():void {
        DecimalFormatSymbols.SymbolBundle = new Map();
        DecimalFormatSymbols.SymbolBundle.put("zh_CN", ['.',',',';','%','0','#','-','E','‰','∞','�']);
        DecimalFormatSymbols.SymbolBundle.put("en_US", ['.',',',';','%','0','#','-','E','‰','∞','�']);
    }

/**
 * Initializes the symbols from the FormatData resource bundle.
 */
private initialize( locale :Locale):void {
    this.locale = locale;
    const data:Array<string> = this.getSymbolsByLocale(locale);

    this.decimalSeparator = '.';
    this.groupingSeparator = ',';
    this.patternSeparator = ';';
    this.percent = '%';
    this.zeroDigit = '0';
    this.digit = '#';
    this.minusSign = '-';
    this.exponential = 'E';
    this.exponentialSeparator = 'E'; //string representation new since 1.6
    this.perMill = '‰';
    this.infinity  = '∞';
    this.NaN = '�';
    // Try to obtain the currency used in the locale's country.
    // Check for empty country string separately because it's a valid
    // country ID for Locale (and used for the C locale), but not a valid
    // ISO 3166 country code, and exceptions are expensive.
    if (locale.getCountry().length > 0) {
        try {
            this.currency = Currency.getInstance(locale);
        } catch (e) {
            // use default values below for compatibility
            if(!(e instanceof IllegalArgumentException)) {
                throw e;
            }
        }
    }
    if (this.currency != null) {
        this.intlCurrencySymbol = this.currency.getCurrencyCode();
            this.currencySymbol = this.currency.getSymbol(locale);
    } else {
        // default values
        this.intlCurrencySymbol = "XXX";
        try {
            this.currency = Currency.getInstance(this.intlCurrencySymbol);
        } catch ( e) {
            if(!(e instanceof IllegalArgumentException)) {
                throw e;
            }
        }
        this.currencySymbol = "\u00A4";
    }
    // Currently the monetary decimal separator is the same as the
    // standard decimal separator for all locales that we support.
    // If that changes, add a new entry to NumberElements.
    this.monetarySeparator = this.decimalSeparator;
}
//
// /**
//  * Reads the default serializable fields, provides default values for objects
//  * in older serial versions, and initializes non-serializable fields.
//  * If <code>serialVersionOnStream</code>
//  * is less than 1, initializes <code>monetarySeparator</code> to be
//  * the same as <code>decimalSeparator</code> and <code>exponential</code>
//  * to be 'E'.
//  * If <code>serialVersionOnStream</code> is less than 2,
//  * initializes <code>locale</code>to the root locale, and initializes
//  * If <code>serialVersionOnStream</code> is less than 3, it initializes
//  * <code>exponentialSeparator</code> using <code>exponential</code>.
//  * Sets <code>serialVersionOnStream</code> back to the maximum allowed value so that
//  * default serialization will work properly if this object is streamed out again.
//  * Initializes the currency from the intlCurrencySymbol field.
//  *
//  * @since JDK 1.1.6
//  */
// private void readObject(ObjectInputStream stream)
// throws IOException, ClassNotFoundException {
//     stream.defaultReadObject();
//     if (serialVersionOnStream < 1) {
//         // Didn't have monetarySeparator or exponential field;
//         // use defaults.
//         monetarySeparator = decimalSeparator;
//         exponential       = 'E';
//     }
//     if (serialVersionOnStream < 2) {
//         // didn't have locale; use root locale
//         locale = Locale.ROOT;
//     }
//     if (serialVersionOnStream < 3) {
//         // didn't have exponentialSeparator. Create one using exponential
//         exponentialSeparator = Character.toString(exponential);
//     }
//     serialVersionOnStream = currentSerialVersion;
//
//     if (intlCurrencySymbol != null) {
//         try {
//             currency = Currency.getInstance(intlCurrencySymbol);
//         } catch (IllegalArgumentException e) {
//         }
//     }
// }

}
