/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _MethodUtil } from '../ext/beans/_MethodUtil';
import { Logger } from '../log/Logger';
import { Configuration } from '../template/Configuration';
import { Template } from '../template/Template';
import { ClassUtil } from '../template/utility/ClassUtil';
import { StringUtil } from '../template/utility/StringUtil';
import { Expression } from './Expression';
import { TemplateElement } from './TemplateElement';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { TemplateObject } from './TemplateObject';
import { ParameterRole } from './ParameterRole';
import { Character } from '../../java/lang/Character';
import { _CoreAPI } from './_CoreAPI';
import { StringLiteral } from './StringLiteral';

/**
 * Used internally only, might changes without notice!
 * Packs a structured from of the error description from which the error message can be rendered on-demand.
 * Note that this class isn't serializable, thus the containing exception should render the message before it's
 * serialized.
 * @param {String} description
 * @class
 */
export class _ErrorDescriptionBuilder {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(_ErrorDescriptionBuilder.LOG == null) _ErrorDescriptionBuilder.LOG = Logger.getLogger("freemarker.runtime"); return _ErrorDescriptionBuilder.LOG; };

    /*private*/ description : string;

    /*private*/ descriptionParts : Array<any>;

    /*private*/ blamed : Expression;

    /*private*/ __showBlamer : boolean;

    /*private*/ __tip : any;

    /*private*/ __tips : Array<any>;

    /*private*/ __template : Template;

    public constructor(description? : any) {
        if(((typeof description === 'string') || description === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.description===undefined) this.description = null;
            if(this.descriptionParts===undefined) this.descriptionParts = null;
            if(this.blamed===undefined) this.blamed = null;
            if(this.__showBlamer===undefined) this.__showBlamer = false;
            if(this.__tip===undefined) this.__tip = null;
            if(this.__tips===undefined) this.__tips = null;
            if(this.__template===undefined) this.__template = null;
            if(this.description===undefined) this.description = null;
            if(this.descriptionParts===undefined) this.descriptionParts = null;
            if(this.blamed===undefined) this.blamed = null;
            if(this.__showBlamer===undefined) this.__showBlamer = false;
            if(this.__tip===undefined) this.__tip = null;
            if(this.__tips===undefined) this.__tips = null;
            if(this.__template===undefined) this.__template = null;
            (() => {
                this.description = description;
                this.descriptionParts = null;
            })();
        } else if(((description != null && description instanceof <any>Array && (description.length==0 || description[0] == null ||(description[0] != null))) || description === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let descriptionParts : any[] = __args[0];
            if(this.description===undefined) this.description = null;
            if(this.descriptionParts===undefined) this.descriptionParts = null;
            if(this.blamed===undefined) this.blamed = null;
            if(this.__showBlamer===undefined) this.__showBlamer = false;
            if(this.__tip===undefined) this.__tip = null;
            if(this.__tips===undefined) this.__tips = null;
            if(this.__template===undefined) this.__template = null;
            if(this.description===undefined) this.description = null;
            if(this.descriptionParts===undefined) this.descriptionParts = null;
            if(this.blamed===undefined) this.blamed = null;
            if(this.__showBlamer===undefined) this.__showBlamer = false;
            if(this.__tip===undefined) this.__tip = null;
            if(this.__tips===undefined) this.__tips = null;
            if(this.__template===undefined) this.__template = null;
            (() => {
                this.descriptionParts = descriptionParts;
                this.description = null;
            })();
        } else throw new Error('invalid overload');
    }

    public toString$() : string {
        return this.toString$freemarker_core_TemplateElement$boolean(null, true);
    }

    public toString$freemarker_core_TemplateElement$boolean(parentElement : TemplateElement, showTips : boolean) : string {
        if(this.blamed == null && this.__tips == null && this.__tip == null && this.descriptionParts == null) return this.description;
        let sb : StringBuilder = new StringBuilder("");
        if(parentElement != null && this.blamed != null && this.__showBlamer) {
            try {
                let blaming : _ErrorDescriptionBuilder.Blaming = this.findBlaming(parentElement, this.blamed, 0);
                if(blaming != null) {
                    sb.append("For ");
                    let nss : string = blaming.blamer.getNodeTypeSymbol();
                    let q : string = nss.indexOf('\"') === -1?'\"':'`';
                    sb.append(q).append(nss).append(q);
                    sb.append(" ").append(blaming.roleOfblamed).append(": ");
                }
            } catch(e) {
                _ErrorDescriptionBuilder.LOG_$LI$().error$java_lang_String$java_lang_Throwable("Error when searching blamer for better error message.", e);
            };
        }
        if(this.description != null) {
            sb.append(this.description);
        } else {
            this.appendParts(sb, this.descriptionParts);
        }
        let extraTip : string = null;
        if(this.blamed != null) {
            for(let idx : number = sb.length() - 1; idx >= 0 && Character.isWhitespace(sb.charAt(idx)); idx--) {
                sb.deleteCharAt(idx);
            };
            let lastChar : string = sb.length() > 0?(sb.charAt(sb.length() - 1)):String.fromCharCode(0);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != 0) {
                sb.append('\n');
            }
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(lastChar) != ':'.charCodeAt(0)) {
                sb.append("The blamed expression:\n");
            }
            let lines : Array<any> = this.splitToLines(this.blamed.toString());
            for(let i : number = 0; i < lines.length; i++) {
                sb.append(i === 0?"==> ":"\n    ");
                sb.append(lines[i]);
            };
            sb.append("  [");
            sb.append(this.blamed.getStartLocation());
            sb.append(']');
            if(this.containsSingleInterpolatoinLiteral(this.blamed, 0)) {
                extraTip = "It has been noticed that you are using ${...} as the sole content of a quoted string. That does nothing but forcably converts the value inside ${...} to string (as it inserts it into the enclosing string). If that\'s not what you meant, just remove the quotation marks, ${ and }; you don\'t need them. If you indeed wanted to convert to string, use myExpression?string instead.";
            }
        }
        if(showTips) {
            let allTipsLen : number = (this.__tips != null?this.__tips.length:0) + (this.__tip != null?1:0) + (extraTip != null?1:0);
            let allTips : Array<any>;
            if(this.__tips != null && allTipsLen === this.__tips.length) {
                allTips = this.__tips;
            } else {
                allTips = (s => { let a=[]; while(s-->0) a.push(null); return a; })(allTipsLen);
                let dst : number = 0;
                if(this.__tip != null) allTips[dst++] = this.__tip;
                if(this.__tips != null) {
                    for(let i : number = 0; i < this.__tips.length; i++) {
                        allTips[dst++] = this.__tips[i];
                    };
                }
                if(extraTip != null) allTips[dst++] = extraTip;
            }
            if(allTips != null && allTips.length > 0) {
                sb.append("\n\n");
                for(let i : number = 0; i < allTips.length; i++) {
                    if(i !== 0) sb.append('\n');
                    sb.append(_CoreAPI.ERROR_MESSAGE_HR).append('\n');
                    sb.append("Tip: ");
                    let tip : any = allTips[i];
                    if(!(tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||tip[0] != null))) {
                        sb.append(allTips[i]);
                    } else {
                        this.appendParts(sb, <Array>tip);
                    }
                };
                sb.append('\n').append(_CoreAPI.ERROR_MESSAGE_HR);
            }
        }
        return sb.toString();
    }

    public toString(parentElement? : any, showTips? : any) : any {
        if(((parentElement != null && parentElement instanceof <any>TemplateElement) || parentElement === null) && ((typeof showTips === 'boolean') || showTips === null)) {
            return <any>this.toString$freemarker_core_TemplateElement$boolean(parentElement, showTips);
        } else if(parentElement === undefined && showTips === undefined) {
            return <any>this.toString$();
        } else throw new Error('invalid overload');
    }

    containsSingleInterpolatoinLiteral(exp : Expression, recursionDepth : number) : boolean {
        if(exp == null) return false;
        if(recursionDepth > 20) return false;
        if((exp != null && exp instanceof <any>StringLiteral) && (<StringLiteral>exp).isSingleInterpolationLiteral()) return true;
        let paramCnt : number = exp.getParameterCount();
        for(let i : number = 0; i < paramCnt; i++) {
            let paramValue : any = exp.getParameterValue(i);
            if(paramValue != null && paramValue instanceof <any>Expression) {
                let result : boolean = this.containsSingleInterpolatoinLiteral(<Expression>paramValue, recursionDepth + 1);
                if(result) return true;
            }
        };
        return false;
    }

    findBlaming(parent : TemplateObject, blamed : Expression, recursionDepth : number) : _ErrorDescriptionBuilder.Blaming {
        if(recursionDepth > 50) return null;
        let paramCnt : number = parent.getParameterCount();
        for(let i : number = 0; i < paramCnt; i++) {
            let paramValue : any = parent.getParameterValue(i);
            if(paramValue === blamed) {
                let blaming : _ErrorDescriptionBuilder.Blaming = new _ErrorDescriptionBuilder.Blaming();
                blaming.blamer = parent;
                blaming.roleOfblamed = parent.getParameterRole(i);
                return blaming;
            } else if(paramValue != null && paramValue instanceof <any>TemplateObject) {
                let blaming : _ErrorDescriptionBuilder.Blaming = this.findBlaming(<TemplateObject>paramValue, blamed, recursionDepth + 1);
                if(blaming != null) return blaming;
            }
        };
        return null;
    }

    appendParts(sb : StringBuilder, parts : Array) {
        let template : Template = this.__template != null?this.__template:(this.blamed != null?this.blamed.getTemplate():null);
        for(let i : number = 0; i < parts.length; i++) {
            let partObj : any = parts[i];
            if(partObj != null && partObj instanceof <any>Array && (partObj.length==0 || partObj[0] == null ||partObj[0] != null)) {
                this.appendParts(sb, <Array>partObj);
            } else {
                let partStr : string;
                partStr = _ErrorDescriptionBuilder.tryToString(partObj);
                if(partStr == null) {
                    partStr = "null";
                }
                if(template != null) {
                    if(partStr.length > 4 && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(partStr.charAt(0)) == '<'.charCodeAt(0) && (((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(partStr.charAt(1)) == '#'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(partStr.charAt(1)) == '@'.charCodeAt(0)) || ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(partStr.charAt(1)) == '/'.charCodeAt(0)) && ((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(partStr.charAt(2)) == '#'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(partStr.charAt(2)) == '@'.charCodeAt(0))) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(partStr.charAt(partStr.length - 1)) == '>'.charCodeAt(0)) {
                        if(template.getActualTagSyntax() === Configuration.SQUARE_BRACKET_TAG_SYNTAX) {
                            sb.append('[');
                            sb.append(partStr, 1, partStr.length - 1);
                            sb.append(']');
                        } else {
                            sb.append(partStr);
                        }
                    } else {
                        sb.append(partStr);
                    }
                } else {
                    sb.append(partStr);
                }
            }
        };
    }

    public static toString$java_lang_Object(partObj : any) : string {
        return _ErrorDescriptionBuilder.toString$java_lang_Object$boolean(partObj, false);
    }

    public static tryToString(partObj : any) : string {
        return _ErrorDescriptionBuilder.toString$java_lang_Object$boolean(partObj, true);
    }

    public static toString$java_lang_Object$boolean(partObj : any, suppressToStringException : boolean) : string {
        let partStr : string;
        if(partObj == null) {
            return null;
        } else if(partObj != null) {
            partStr = ClassUtil.getShortClassName(<any>partObj);
        } else if((partObj != null && (partObj instanceof Function)) || (partObj != null && partObj instanceof <any>Constructor)) {
            partStr = _MethodUtil.toString(<Member><any>partObj);
        } else {
            partStr = suppressToStringException?StringUtil.tryToString(partObj):partObj.toString();
        }
        return partStr;
    }

    public static toString(partObj? : any, suppressToStringException? : any) : any {
        if(((partObj != null) || partObj === null) && ((typeof suppressToStringException === 'boolean') || suppressToStringException === null)) {
            return <any>_ErrorDescriptionBuilder.toString$java_lang_Object$boolean(partObj, suppressToStringException);
        } else if(((partObj != null) || partObj === null) && suppressToStringException === undefined) {
            return <any>_ErrorDescriptionBuilder.toString$java_lang_Object(partObj);
        } else throw new Error('invalid overload');
    }

    splitToLines(s : string) : Array {
        s = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(s, "\r\n", "\n");
        s = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String(s, "\r", "\n");
        let lines : Array<any> = StringUtil.split$java_lang_String$char(s, '\n');
        return lines;
    }

    /**
     * Needed for description <em>parts</em> that look like an FTL tag to be converted, if there's no {link #blamed}.
     * @param {Template} template
     * @return {_ErrorDescriptionBuilder}
     */
    public template(template : Template) : _ErrorDescriptionBuilder {
        this.__template = template;
        return this;
    }

    public blame(blamedExpr : Expression) : _ErrorDescriptionBuilder {
        this.blamed = blamedExpr;
        return this;
    }

    public showBlamer(showBlamer : boolean) : _ErrorDescriptionBuilder {
        this.__showBlamer = showBlamer;
        return this;
    }

    public tip$java_lang_String(tip : string) : _ErrorDescriptionBuilder {
        this.tip$java_lang_Object(<any>tip);
        return this;
    }

    public tip(tip? : any) : any {
        if(((typeof tip === 'string') || tip === null)) {
            return <any>this.tip$java_lang_String(tip);
        } else if(((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(tip[0] != null))) || tip === null)) {
            return <any>this.tip$java_lang_Object_A(tip);
        } else if(((tip != null) || tip === null)) {
            return <any>this.tip$java_lang_Object(tip);
        } else throw new Error('invalid overload');
    }

    public tip$java_lang_Object_A(...tip : Array) : _ErrorDescriptionBuilder {
        this.tip$java_lang_Object(<any>tip);
        return this;
    }

    tip$java_lang_Object(tip : any) : _ErrorDescriptionBuilder {
        if(tip == null) {
            return this;
        }
        if(this.__tip == null) {
            this.__tip = tip;
        } else {
            if(this.__tips == null) {
                this.__tips = [tip];
            } else {
                let origTipsLen : number = this.__tips.length;
                let newTips : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(origTipsLen + 1);
                for(let i : number = 0; i < origTipsLen; i++) {
                    newTips[i] = this.__tips[i];
                };
                newTips[origTipsLen] = tip;
                this.__tips = newTips;
            }
        }
        return this;
    }

    public tips(...tips : Array) : _ErrorDescriptionBuilder {
        if(tips == null || tips.length === 0) {
            return this;
        }
        if(this.__tips == null) {
            this.__tips = tips;
        } else {
            let origTipsLen : number = this.__tips.length;
            let additionalTipsLen : number = tips.length;
            let newTips : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(origTipsLen + additionalTipsLen);
            for(let i : number = 0; i < origTipsLen; i++) {
                newTips[i] = this.__tips[i];
            };
            for(let i : number = 0; i < additionalTipsLen; i++) {
                newTips[origTipsLen + i] = tips[i];
            };
            this.__tips = newTips;
        }
        return this;
    }
}
_ErrorDescriptionBuilder["__class"] = "freemarker.core._ErrorDescriptionBuilder";


export namespace _ErrorDescriptionBuilder {

    export class Blaming {
        blamer : TemplateObject;

        roleOfblamed : ParameterRole;

        constructor() {
            if(this.blamer===undefined) this.blamer = null;
            if(this.roleOfblamed===undefined) this.roleOfblamed = null;
        }
    }
    Blaming["__class"] = "freemarker.core._ErrorDescriptionBuilder.Blaming";

}



var __Function = Function;

_ErrorDescriptionBuilder.LOG_$LI$();
