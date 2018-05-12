import {IllegalArgumentException} from "../lang/IllegalArgumentException";
import {Locale} from "./Locale";
import {NullPointerException} from "../lang/NullPointerException";
import {StringBuilder} from "../lang/StringBuilder";
import {System} from "../lang/System";
import * as bigInt from 'big-integer';
import {Map} from "./Map";

export class Currency {
    static formatVersion: number;
    static dataVersion: number;
    static mainTable: number[];
    static scCutOverTimes: number[];
    static scOldCurrencies: string[];
    static scNewCurrencies: string[];
    static scOldCurrenciesDFD: number[];
    static scNewCurrenciesDFD: number[];
    static scOldCurrenciesNumericCode: number[];
    static scNewCurrenciesNumericCode: number[];
    static otherCurrencies: string;
    static otherCurrenciesDFD: number[];
    static otherCurrenciesNumericCode: number[];

    // handy constants - must match definitions in GenerateCurrencyData
    // magic number
    private static MAGIC_NUMBER: number = 0x43757244;
    // number of characters from A to Z
    private static A_TO_Z: number = ('Z'.charCodeAt(0) - 'A'.charCodeAt(0)) + 1;
    // entry for invalid country codes
    private static INVALID_COUNTRY_ENTRY: number = 0x007F;
    // entry for countries without currency
    private static COUNTRY_WITHOUT_CURRENCY_ENTRY: number = 0x0080;
    // mask for simple case country entries
    private static SIMPLE_CASE_COUNTRY_MASK: number = 0x0000;
    // mask for simple case country entry final character
    private static SIMPLE_CASE_COUNTRY_FINAL_CHAR_MASK: number = 0x001F;
    // mask for simple case country entry default currency digits
    private static SIMPLE_CASE_COUNTRY_DEFAULT_DIGITS_MASK: number = 0x0060;
    // shift count for simple case country entry default currency digits
    private static SIMPLE_CASE_COUNTRY_DEFAULT_DIGITS_SHIFT: number = 5;
    // mask for special case country entries
    private static SPECIAL_CASE_COUNTRY_MASK: number = 0x0080;
    // mask for special case country index
    private static SPECIAL_CASE_COUNTRY_INDEX_MASK: number = 0x001F;
    // delta from entry index component in main table to index into special case tables
    private static SPECIAL_CASE_COUNTRY_INDEX_DELTA: number = 1;
    // mask for distinguishing simple and special case countries
    private static COUNTRY_TYPE_MASK: number = Currency.SIMPLE_CASE_COUNTRY_MASK | Currency.SPECIAL_CASE_COUNTRY_MASK;
    // mask for the numeric code of the currency
    private static NUMERIC_CODE_MASK: number = 0x0003FF00;
    // shift count for the numeric code of the currency
    private static NUMERIC_CODE_SHIFT: number = 8;

    // Currency data format version
    private static VALID_FORMAT_VERSION: number = 1;

    private currencyCode: string;

    /**
     * Default fraction digits for this currency.
     * Set from currency data tables.
     */
    private defaultFractionDigits: number;

    /**
     * ISO 4217 numeric code for this currency.
     * Set from currency data tables.
     */
    private numericCode: number;

    private constructor(currencyCode: string, defaultFractionDigits: number, numericCode: number) {
        this.currencyCode = currencyCode;
        this.defaultFractionDigits = defaultFractionDigits;
        this.numericCode = numericCode;
    }

    /**
     * Returns the <code>Currency</code> instance for the given currency code.
     *
     * @param currencyCode the ISO 4217 code of the currency
     * @return the <code>Currency</code> instance for the given currency code
     * @exception NullPointerException if <code>currencyCode</code> is null
     * @exception IllegalArgumentException if <code>currencyCode</code> is not
     * a supported ISO 4217 code.
     */
    public static getInstance(currencyCode: string | Locale): Currency {
        if (typeof currencyCode === 'string') {
            return Currency.getInstance$java_lang_String$int$int(<string>currencyCode, 0x80000000, 0);
        }
        return Currency.getInstance$java_util_Locale(<Locale>currencyCode);
    }

    /**
     * Returns the <code>Currency</code> instance for the country of the
     * given locale. The language and variant components of the locale
     * are ignored. The result may vary over time, as countries change their
     * currencies. For example, for the original member countries of the
     * European Monetary Union, the method returns the old national currencies
     * until December 31, 2001, and the Euro from January 1, 2002, local time
     * of the respective countries.
     * <p>
     * The method returns <code>null</code> for territories that don't
     * have a currency, such as Antarctica.
     *
     * @param locale the locale for whose country a <code>Currency</code>
     * instance is needed
     * @return the <code>Currency</code> instance for the country of the given
     * locale, or {@code null}
     * @exception NullPointerException if <code>locale</code> or its country
     * code is {@code null}
     * @exception IllegalArgumentException if the country of the given {@code locale}
     * is not a supported ISO 3166 country code.
     */
    private static getInstance$java_util_Locale(locale: Locale): Currency {
        let country: string = locale.getCountry();
        if (country == null) {
            throw new NullPointerException();
        }

        if (country.length != 2) {
            throw new IllegalArgumentException();
        }

        let char1: string = country.charAt(0);
        let char2: string = country.charAt(1);
        let tableEntry: number = Currency.getMainTableEntry(char1, char2);
        if ((tableEntry & Currency.COUNTRY_TYPE_MASK) == Currency.SIMPLE_CASE_COUNTRY_MASK
            && tableEntry != Currency.INVALID_COUNTRY_ENTRY) {
            let finalChar: string = ((tableEntry & Currency.SIMPLE_CASE_COUNTRY_FINAL_CHAR_MASK) + 'A');
            let defaultFractionDigits: number = (tableEntry & Currency.SIMPLE_CASE_COUNTRY_DEFAULT_DIGITS_MASK) >> Currency.SIMPLE_CASE_COUNTRY_DEFAULT_DIGITS_SHIFT;
            let numericCode: number = (tableEntry & Currency.NUMERIC_CODE_MASK) >> Currency.NUMERIC_CODE_SHIFT;
            let sb: StringBuilder = new StringBuilder(country);
            sb.append(finalChar);
            return Currency.getInstance$java_lang_String$int$int(sb.toString(), defaultFractionDigits, numericCode);
        } else {
            // special cases
            if (tableEntry == Currency.INVALID_COUNTRY_ENTRY) {
                throw new IllegalArgumentException();
            }
            if (tableEntry == Currency.COUNTRY_WITHOUT_CURRENCY_ENTRY) {
                return null;
            } else {
                let index: number = (tableEntry & Currency.SPECIAL_CASE_COUNTRY_INDEX_MASK) - Currency.SPECIAL_CASE_COUNTRY_INDEX_DELTA;
                if (bigInt('7fffffffffffffff', 16).eq(Currency.scCutOverTimes[index]) || System.currentTimeMillis() < Currency.scCutOverTimes[index]) {
                    return Currency.getInstance$java_lang_String$int$int(Currency.scOldCurrencies[index], Currency.scOldCurrenciesDFD[index],
                        Currency.scOldCurrenciesNumericCode[index]);
                } else {
                    return Currency.getInstance$java_lang_String$int$int(Currency.scNewCurrencies[index], Currency.scNewCurrenciesDFD[index],
                        Currency.scNewCurrenciesNumericCode[index]);
                }
            }
        }
    }

    private static getInstance$java_lang_String$int$int(currencyCode: string, defaultFractionDigits: number, numericCode: number): Currency {

        if (defaultFractionDigits == 0x80000000) {
            // Currency code not internally generated, need to verify first
            // A currency code must have 3 characters and exist in the main table
            // or in the list of other currencies.
            if (currencyCode.length != 3) {
                throw new IllegalArgumentException();
            }
            let char1: string = currencyCode.charAt(0);
            let char2: string = currencyCode.charAt(1);
            let tableEntry: number = Currency.getMainTableEntry(char1, char2);
            if ((tableEntry & Currency.COUNTRY_TYPE_MASK) == Currency.SIMPLE_CASE_COUNTRY_MASK
                && tableEntry != Currency.INVALID_COUNTRY_ENTRY
                && currencyCode.charCodeAt(2) - 'A'.charCodeAt(0) == (tableEntry & Currency.SIMPLE_CASE_COUNTRY_FINAL_CHAR_MASK)) {
                defaultFractionDigits = (tableEntry & Currency.SIMPLE_CASE_COUNTRY_DEFAULT_DIGITS_MASK) >> Currency.SIMPLE_CASE_COUNTRY_DEFAULT_DIGITS_SHIFT;
                numericCode = (tableEntry & Currency.NUMERIC_CODE_MASK) >> Currency.NUMERIC_CODE_SHIFT;
            } else {
                // Check for '-' separately so we don't get false hits in the table.
                if (currencyCode.charAt(2) == '-') {
                    throw new IllegalArgumentException();
                }
                let index: number = Currency.otherCurrencies.indexOf(currencyCode);
                if (index == -1) {
                    throw new IllegalArgumentException();
                }
                defaultFractionDigits = Currency.otherCurrenciesDFD[index / 4];
                numericCode = Currency.otherCurrenciesNumericCode[index / 4];
            }
        }
        return new Currency(currencyCode, defaultFractionDigits, numericCode);
    }

    /**
     * Gets the main table entry for the country whose country code consists
     * of char1 and char2.
     */
    private static getMainTableEntry(char1: string, char2: string): number {
        if (char1 < 'A' || char1 > 'Z' || char2 < 'A' || char2 > 'Z') {
            throw new IllegalArgumentException();
        }
        return Currency.mainTable[(char1.charCodeAt(0) - 'A'.charCodeAt(0)) * Currency.A_TO_Z + (char2.charCodeAt(0) - 'A'.charCodeAt(0))];
    }

    public getSymbol(locale?: Locale): string {
        if(locale === undefined) {
            locale = new Locale(global.DEFAULT_LOCALE);
        }
        if (Currency.SYMBOL_POOL == null) {
            Currency.initSymbolPool();
        }
        return Currency.SYMBOL_POOL.get(locale.toString())[this.currencyCode] || this.currencyCode;
    }

    public getCurrencyCode(): string {
        return this.currencyCode;
    }

    private static SYMBOL_POOL: Map<string, Object>;

    private static Currency_Names_zh_CN = {"CNY": "￥", "adp": "安道尔比塞塔", "aed": "阿联酋迪拉姆", "afa": "阿富汗尼 (1927-2002)", "afn": "阿富汗尼", "all": "阿尔巴尼亚列克", "amd": "亚美尼亚德拉姆", "ang": "荷兰安替兰盾", "aoa": "安哥拉宽扎", "ars": "阿根廷比索", "ats": "奥地利先令", "aud": "澳大利亚元", "awg": "阿鲁巴基尔德元", "azm": "阿塞拜疆马纳特 (1993-2006)", "azn": "阿塞拜疆马纳特", "bam": "波士尼亚-赫塞哥维纳兑换券", "bbd": "巴巴多斯元", "bdt": "孟加拉塔卡", "bef": "比利时法郎", "bgl": "保加利亚硬列弗", "bgn": "保加利亚新列弗", "bhd": "巴林第纳尔", "bif": "布隆迪法郎", "bmd": "百慕大元", "bnd": "文莱元", "bob": "玻利维亚诺", "bov": "玻利维亚 Mvdol（资金）", "brl": "巴西雷亚尔", "bsd": "巴哈马元", "btn": "不丹努扎姆", "bwp": "博茨瓦纳普拉", "byb": "白俄罗斯新卢布 (1994-1999)", "byr": "白俄罗斯卢布", "bzd": "伯利兹元", "cad": "加拿大元", "cdf": "刚果法郎", "chf": "瑞士法郎", "clf": "智利 Unidades de Fomento（资金）", "clp": "智利比索", "cny": "人民币", "cop": "哥伦比亚比索", "crc": "哥斯达黎加科朗", "csd": "旧塞尔维亚第纳尔", "cuc": "古巴可兑换比索", "cup": "古巴比索", "cve": "佛得角埃斯库多", "cyp": "塞浦路斯镑", "czk": "捷克克郎", "dem": "德国马克", "djf": "吉布提法郎", "dkk": "丹麦克朗", "dop": "多米尼加比索", "dzd": "阿尔及利亚第纳尔", "eek": "爱沙尼亚克朗", "egp": "埃及镑", "ern": "厄立特里亚纳克法", "esp": "西班牙比塞塔", "etb": "埃塞俄比亚比尔", "eur": "欧元", "fim": "芬兰马克", "fjd": "斐济元", "fkp": "福克兰镑", "frf": "法国法郎", "gbp": "英镑", "gel": "乔治亚拉瑞", "ghc": "加纳塞第", "ghs": "加纳塞地", "gip": "直布罗陀镑", "gmd": "冈比亚达拉西", "gnf": "几内亚法郎", "grd": "希腊德拉克马", "gtq": "危地马拉格查尔", "gwp": "几内亚比绍比索", "gyd": "圭亚那元", "hkd": "港元", "hnl": "洪都拉斯拉伦皮拉", "hrk": "克罗地亚库纳", "htg": "海地古德", "huf": "匈牙利福林", "idr": "印度尼西亚盾", "iep": "爱尔兰镑", "ils": "以色列新谢克尔", "inr": "印度卢比", "iqd": "伊拉克第纳尔", "irr": "伊朗里亚尔", "isk": "冰岛克朗", "itl": "意大利里拉", "jmd": "牙买加元", "jod": "约旦第纳尔", "jpy": "日元", "kes": "肯尼亚先令", "kgs": "吉尔吉斯斯坦索姆", "khr": "柬埔寨瑞尔", "kmf": "科摩罗法郎", "kpw": "朝鲜圆", "krw": "韩圆", "kwd": "科威特第纳尔", "kyd": "开曼元", "kzt": "哈萨克斯坦坚戈", "lak": "老挝基普", "lbp": "黎巴嫩镑", "lkr": "斯里兰卡卢比", "lrd": "利比亚元", "lsl": "莱索托洛蒂", "ltl": "立陶宛立特", "luf": "卢森堡法郎", "lvl": "拉脱维亚拉特", "lyd": "利比亚第纳尔", "mad": "摩洛哥迪拉姆", "mdl": "摩尔多瓦列伊", "mga": "马达加斯加阿里亚里", "mgf": "马达加斯加法郎", "mkd": "马其顿戴代纳尔", "mmk": "缅甸开亚特", "mnt": "蒙古图格里克", "mop": "澳门元", "mro": "毛里塔尼亚乌吉亚", "mtl": "马耳他里拉", "mur": "毛里求斯卢比", "mvr": "马尔代夫拉菲亚", "mwk": "马拉维克瓦查", "mxn": "墨西哥比索", "mxv": "墨西哥 Unidad de Inversion (UDI)（资金）", "myr": "马来西亚林吉特", "mzm": "旧莫桑比克美提卡", "mzn": "莫桑比克美提卡", "nad": "纳米比亚元", "ngn": "尼日利亚奈拉", "nio": "尼加拉瓜金科多巴", "nlg": "荷兰盾", "nok": "挪威克朗", "npr": "尼泊尔卢比", "nzd": "新西兰元", "omr": "阿曼里亚尔", "pab": "巴拿马巴波亚", "pen": "秘鲁新索尔", "pgk": "巴布亚新几内亚基那", "php": "菲律宾比索", "pkr": "巴基斯坦卢比", "pln": "波兰兹罗提", "pte": "葡萄牙埃斯库多", "pyg": "巴拉圭瓜拉尼", "qar": "卡塔尔里亚尔", "rol": "旧罗马尼亚列伊", "ron": "罗马尼亚列伊", "rsd": "塞尔维亚第纳尔", "rub": "俄国卢布", "rur": "俄国卢布 (1991-1998)", "rwf": "卢旺达法郎", "sar": "沙特里亚尔", "sbd": "所罗门群岛元", "scr": "塞舌尔卢比", "sdd": "苏丹第纳尔", "sek": "瑞典克朗", "sgd": "新加坡元", "shp": "圣赫勒拿群岛磅", "sit": "斯洛文尼亚托拉尔", "skk": "斯洛伐克克朗", "sll": "塞拉利昂利昂", "sos": "索马里先令", "srd": "苏里南元", "srg": "苏里南盾", "std": "圣多美和普林西比多布拉", "svc": "萨尔瓦多科朗", "syp": "叙利亚镑", "szl": "斯威士兰里兰吉尼", "thb": "泰铢", "tjs": "塔吉克斯坦索莫尼", "tmm": "土库曼斯坦马纳特", "tmt": "土库曼斯坦新马纳特", "tnd": "突尼斯第纳尔", "top": "汤加潘加", "tpe": "帝汶埃斯库多", "trl": "土耳其里拉", "try": "新土耳其里拉", "ttd": "特立尼达和多巴哥元", "twd": "新台币", "tzs": "坦桑尼亚先令", "uah": "乌克兰格里夫尼亚", "ugx": "乌干达先令", "usd": "美元", "usn": "美元（次日）", "uss": "美元（当日）", "uyu": "乌拉圭比索", "uzs": "乌兹别克斯苏姆", "veb": "委内瑞拉博利瓦", "vef": "委内瑞拉强势玻利瓦", "vnd": "越南盾", "vuv": "瓦努阿图瓦图", "wst": "西萨摩亚塔拉", "xaf": "中非金融合作法郎", "xag": "银", "xau": "黄金", "xba": "欧洲复合单位", "xbb": "欧洲货币联盟", "xbc": "欧洲计算单位 (XBC)", "xbd": "欧洲计算单位 (XBD)", "xcd": "东加勒比元", "xdr": "特别提款权", "xfo": "法国金法郎", "xfu": "法国 UIC 法郎", "xof": "非洲金融共同体法郎", "xpd": "钯", "xpf": "太平洋法郎", "xpt": "铂", "xts": "为测试保留的代码", "xxx": "货币未知或无效", "yer": "也门里亚尔", "yum": "南斯拉夫偌威第纳尔", "zar": "南非兰特", "zmk": "赞比亚克瓦查", "zwd": "津巴布韦元", "zwl": "津巴布韦元 (2009)"};
    private static Currency_Names_en_US = {"USD": "$"};

    private static initSymbolPool(): void {
        const pool: Map<string, Object> = new Map();
        pool.put("zh_CN", Currency.Currency_Names_zh_CN);
        pool.put("en_US", Currency.Currency_Names_en_US);
        Currency.SYMBOL_POOL = pool;
    }

    /**
     * add custom currency symbol
     * @param {Locale} locale the locale of the currency
     * @param {string} symbol the currency symbol to add
     */
    public static addSymbol(locale: Locale, symbol: string): void {
        Currency.SYMBOL_POOL.put(locale.toString(), symbol);
    }
}