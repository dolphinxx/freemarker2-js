/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Configuration } from '../template/Configuration';
import { TemplateBooleanModel } from '../template/TemplateBooleanModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { _TemplateAPI } from '../template/_TemplateAPI';
import { StringUtil } from '../template/utility/StringUtil';
import { TemplateElement } from './TemplateElement';
import { Expression } from './Expression';
import { Configurable } from './Configurable';
import { Token } from './Token';
import { FMParserTokenManager } from './FMParserTokenManager';
import { ParseException } from './ParseException';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { _CoreStringUtils } from './_CoreStringUtils';
import { Environment } from './Environment';
import { ParameterRole } from './ParameterRole';

/**
 * An instruction that sets a property of the template rendering
 * environment.
 * @extends TemplateElement
 * @class
 */
export class PropertySetting extends TemplateElement {
    /*private*/ key : string;

    /*private*/ value : Expression;

    static SETTING_NAMES : Array<any>; public static SETTING_NAMES_$LI$() : Array { if(PropertySetting.SETTING_NAMES == null) PropertySetting.SETTING_NAMES = [Configurable.BOOLEAN_FORMAT_KEY_CAMEL_CASE, Configurable.BOOLEAN_FORMAT_KEY_SNAKE_CASE, Configurable.CLASSIC_COMPATIBLE_KEY_CAMEL_CASE, Configurable.CLASSIC_COMPATIBLE_KEY_SNAKE_CASE, Configurable.DATE_FORMAT_KEY_CAMEL_CASE, Configurable.DATE_FORMAT_KEY_SNAKE_CASE, Configurable.DATETIME_FORMAT_KEY_CAMEL_CASE, Configurable.DATETIME_FORMAT_KEY_SNAKE_CASE, Configurable.LOCALE_KEY_$LI$(), Configurable.NUMBER_FORMAT_KEY_CAMEL_CASE, Configurable.NUMBER_FORMAT_KEY_SNAKE_CASE, Configurable.OUTPUT_ENCODING_KEY_CAMEL_CASE, Configurable.OUTPUT_ENCODING_KEY_SNAKE_CASE, Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_CAMEL_CASE, Configurable.SQL_DATE_AND_TIME_TIME_ZONE_KEY_$LI$(), Configurable.TIME_FORMAT_KEY_CAMEL_CASE, Configurable.TIME_ZONE_KEY_CAMEL_CASE, Configurable.TIME_FORMAT_KEY_SNAKE_CASE, Configurable.TIME_ZONE_KEY_SNAKE_CASE, Configurable.URL_ESCAPING_CHARSET_KEY_CAMEL_CASE, Configurable.URL_ESCAPING_CHARSET_KEY_SNAKE_CASE]; return PropertySetting.SETTING_NAMES; };

    constructor(keyTk : Token, tokenManager : FMParserTokenManager, value : Expression, cfg : Configuration) {
        super();
        if(this.key===undefined) this.key = null;
        if(this.value===undefined) this.value = null;
        let key : string = keyTk.image;
        if(Arrays.binarySearch(PropertySetting.SETTING_NAMES_$LI$(), key) < 0) {
            let sb : StringBuilder = new StringBuilder("");
            if(/* contains */(_TemplateAPI.getConfigurationSettingNames(cfg, true).indexOf(<any>(key)) >= 0) || /* contains */(_TemplateAPI.getConfigurationSettingNames(cfg, false).indexOf(<any>(key)) >= 0)) {
                sb.append("The setting name is recognized, but changing this setting from inside a template isn\'t supported.");
            } else {
                sb.append("Unknown setting name: ");
                sb.append(StringUtil.jQuote$java_lang_Object(key)).append(".");
                sb.append(" The allowed setting names are: ");
                let shownNamingConvention : number;
                {
                    let namingConvention : number = tokenManager.namingConvention;
                    shownNamingConvention = namingConvention !== Configuration.AUTO_DETECT_NAMING_CONVENTION?namingConvention:Configuration.LEGACY_NAMING_CONVENTION;
                };
                let first : boolean = true;
                for(let i : number = 0; i < PropertySetting.SETTING_NAMES_$LI$().length; i++) {
                    let correctName : string = PropertySetting.SETTING_NAMES_$LI$()[i];
                    let correctNameNamingConvetion : number = _CoreStringUtils.getIdentifierNamingConvention(correctName);
                    if(shownNamingConvention === Configuration.CAMEL_CASE_NAMING_CONVENTION?correctNameNamingConvetion !== Configuration.LEGACY_NAMING_CONVENTION:correctNameNamingConvetion !== Configuration.CAMEL_CASE_NAMING_CONVENTION) {
                        if(first) {
                            first = false;
                        } else {
                            sb.append(", ");
                        }
                        sb.append(PropertySetting.SETTING_NAMES_$LI$()[i]);
                    }
                };
            }
            throw new ParseException(sb.toString(), null, keyTk);
        }
        this.key = key;
        this.value = value;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        let mval : TemplateModel = this.value.eval(env);
        let strval : string;
        if(mval != null && (mval["__interfaces"] != null && mval["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || mval.constructor != null && mval.constructor["__interfaces"] != null && mval.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
            strval = (<TemplateScalarModel><any>mval).getAsString();
        } else if(mval != null && (mval["__interfaces"] != null && mval["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || mval.constructor != null && mval.constructor["__interfaces"] != null && mval.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
            strval = (<TemplateBooleanModel><any>mval).getAsBoolean()?"true":"false";
        } else if(mval != null && (mval["__interfaces"] != null && mval["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || mval.constructor != null && mval.constructor["__interfaces"] != null && mval.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
            strval = (<TemplateNumberModel><any>mval).getAsNumber().toString();
        } else {
            strval = this.value.evalAndCoerceToStringOrUnsupportedMarkup$freemarker_core_Environment(env);
        }
        env.setSetting(this.key, strval);
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @param {boolean} inStringLiteral
     * @return {String}
     */
    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    dump$boolean(canonical : boolean) : string {
        let sb : StringBuilder = new StringBuilder("");
        if(canonical) sb.append('<');
        sb.append(this.getNodeTypeSymbol());
        sb.append(' ');
        sb.append(_CoreStringUtils.toFTLTopLevelTragetIdentifier(this.key));
        sb.append('=');
        sb.append(this.value.getCanonicalForm());
        if(canonical) sb.append("/>");
        return sb.toString();
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#setting";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 2;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.key;
        case 1:
            return this.value;
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        switch((idx)) {
        case 0:
            return ParameterRole.ITEM_KEY_$LI$();
        case 1:
            return ParameterRole.ITEM_VALUE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
    }
}
PropertySetting["__class"] = "freemarker.core.PropertySetting";



var __Function = Function;

PropertySetting.SETTING_NAMES_$LI$();
