/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Configuration } from '../template/Configuration';
import { StringUtil } from '../template/utility/StringUtil';
import { BugException } from './BugException';
import { Character } from '../../java/lang/Character';
import { StringBuilder } from '../../java/lang/StringBuilder';

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * This class is to work around the lack of module system in Java, i.e., so that other FreeMarker packages can
 * access things inside this package that users shouldn't.
 * @class
 */
export class _CoreStringUtils {
    constructor() {
    }

    public static toFTLIdentifierReferenceAfterDot(name : string) : string {
        return _CoreStringUtils.backslashEscapeIdentifier(name);
    }

    public static toFTLTopLevelIdentifierReference(name : string) : string {
        return _CoreStringUtils.backslashEscapeIdentifier(name);
    }

    public static toFTLTopLevelTragetIdentifier(name : string) : string {
        let quotationType : string = String.fromCharCode(0);
        scanForQuotationType: for(let i : number = 0; i < name.length; i++) {
            let c : string = name.charAt(i);
            if(!(i === 0?StringUtil.isFTLIdentifierStart(c):StringUtil.isFTLIdentifierPart(c)) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) != '@'.charCodeAt(0)) {
                if(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(quotationType) == 0 || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(quotationType) == '\\'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '-'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '.'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == ':'.charCodeAt(0))) {
                    quotationType = '\\';
                } else {
                    quotationType = '\"';
                    break scanForQuotationType;
                }
            }
        };
        switch((quotationType).charCodeAt(0)) {
        case 0:
            return name;
        case 34 /* '\"' */:
            return StringUtil.ftlQuote(name);
        case 92 /* '\\' */:
            return _CoreStringUtils.backslashEscapeIdentifier(name);
        default:
            throw new BugException();
        }
    }

    /*private*/ static backslashEscapeIdentifier(name : string) : string {
        return StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(name, "-", "\\-"), ".", "\\."), ":", "\\:");
    }

    /**
     * @return {number} {link Configuration#CAMEL_CASE_NAMING_CONVENTION}, or {link Configuration#LEGACY_NAMING_CONVENTION}
     * or, {link Configuration#AUTO_DETECT_NAMING_CONVENTION} when undecidable.
     * @param {String} name
     */
    public static getIdentifierNamingConvention(name : string) : number {
        let ln : number = name.length;
        for(let i : number = 0; i < ln; i++) {
            let c : string = name.charAt(i);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0)) {
                return Configuration.LEGACY_NAMING_CONVENTION;
            }
            if(_CoreStringUtils.isUpperUSASCII(c)) {
                return Configuration.CAMEL_CASE_NAMING_CONVENTION;
            }
        };
        return Configuration.AUTO_DETECT_NAMING_CONVENTION;
    }

    /**
     * A deliberately very inflexible camel case to underscored converter; it must not convert improper camel case
     * names to a proper underscored name.
     * @param {String} camelCaseName
     * @return {String}
     */
    public static camelCaseToUnderscored(camelCaseName : string) : string {
        let i : number = 0;
        while((i < camelCaseName.length && Character.isLowerCase(camelCaseName.charAt(i)))) {
            i++;
        };
        if(i === camelCaseName.length) {
            return camelCaseName;
        }
        let sb : StringBuilder = new StringBuilder("");
        sb.append(camelCaseName, 0, i);
        while((i < camelCaseName.length)) {
            let c : string = camelCaseName.charAt(i);
            if(_CoreStringUtils.isUpperUSASCII(c)) {
                sb.append('_');
                sb.append(Character.toLowerCase(c));
            } else {
                sb.append(c);
            }
            i++;
        };
        return sb.toString();
    }

    public static isUpperUSASCII(c : string) : boolean {
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= 'A'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= 'Z'.charCodeAt(0);
    }
}
_CoreStringUtils["__class"] = "freemarker.core._CoreStringUtils";



var __Function = Function;
