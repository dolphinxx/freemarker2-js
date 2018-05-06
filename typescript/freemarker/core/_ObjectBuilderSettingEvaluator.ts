/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BeansWrapper} from '../ext/beans/BeansWrapper';
import {StringUtil} from '../template/utility/StringUtil';
import {_SettingEvaluationEnvironment} from './_SettingEvaluationEnvironment';
import {_ObjectBuilderSettingEvaluationException} from './_ObjectBuilderSettingEvaluationException';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {Character} from '../../java/lang/Character';
import {BugException} from './BugException';
import {Map} from "../../java/util/Map";
import {List} from "../../java/util/List";

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * <p>
 * Evaluates object builder expressions used in configuration {link Properties}.
 * It should be replaced with FTL later (when it was improved to be practical for this), so the syntax should be
 * a subset of the future FTL syntax. This is also why this syntax is restrictive; it shouldn't accept anything that
 * FTL will not.
 * @class
 */
export class _ObjectBuilderSettingEvaluator {
    static INSTANCE_FIELD_NAME : string = "INSTANCE";

    static BUILD_METHOD_NAME : string = "build";

    static BUILDER_CLASS_POSTFIX : string = "Builder";

    static SHORTHANDS : Map<any, any> = null;

    static VOID : any; public static VOID_$LI$() : any { if(_ObjectBuilderSettingEvaluator.VOID == null) _ObjectBuilderSettingEvaluator.VOID = <any>new Object(); return _ObjectBuilderSettingEvaluator.VOID; };

    /*private*/ src : string;

    /*private*/ expectedClass : any;

    /*private*/ allowNull : boolean;

    /*private*/ env : _SettingEvaluationEnvironment;

    /*private*/ pos : number;

    /*private*/ modernMode : boolean = false;

    constructor(src : string, pos : number, expectedClass : any, allowNull : boolean, env : _SettingEvaluationEnvironment) {
        if(this.src===undefined) this.src = null;
        if(this.expectedClass===undefined) this.expectedClass = null;
        if(this.allowNull===undefined) this.allowNull = false;
        if(this.env===undefined) this.env = null;
        if(this.pos===undefined) this.pos = 0;
        this.src = src;
        this.pos = pos;
        this.expectedClass = expectedClass;
        this.allowNull = allowNull;
        this.env = env;
    }

    public static eval(src : string, expectedClass : any, allowNull : boolean, env : _SettingEvaluationEnvironment) : any {
        return new _ObjectBuilderSettingEvaluator(src, 0, expectedClass, allowNull, env).eval();
    }

    /**
     * Used for getting a list of setting assignments (like {@code (x=1, y=2)}) from an existing string, and apply it on
     * an existing bean.
     * 
     * @return {number} The location of the next character to process.
     * @param {String} argumentListSrc
     * @param {number} posAfterOpenParen
     * @param {Object} bean
     * @param {_SettingEvaluationEnvironment} env
     */
    public static configureBean(argumentListSrc : string, posAfterOpenParen : number, bean : any, env : _SettingEvaluationEnvironment) : number {
        return new _ObjectBuilderSettingEvaluator(argumentListSrc, posAfterOpenParen, (<any>bean.constructor), true, env).configureBean(bean);
    }

    eval() : any {
        let value : any;
        this.skipWS();
        try {
            value = this.ensureEvaled(this.fetchValue(false, true, false, true));
        } catch(e) {
            e.rethrowLegacy();
            value = null;
        }
        this.skipWS();
        if(this.pos !== this.src.length) {
            throw new _ObjectBuilderSettingEvaluationException("end-of-expression", this.src, this.pos);
        }
        if(value == null && !this.allowNull) {
            throw new _ObjectBuilderSettingEvaluationException("Value can\'t be null.");
        }
        if(value != null && !/* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(this.expectedClass, value)) {
            throw new _ObjectBuilderSettingEvaluationException("The resulting object (of class " + (<any>value.constructor) + ") is not a(n) " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(this.expectedClass) + ".");
        }
        return value;
    }

    configureBean(bean : any) : number {
        let propAssignments : _ObjectBuilderSettingEvaluator.PropertyAssignmentsExpression = new _ObjectBuilderSettingEvaluator.PropertyAssignmentsExpression(this, bean);
        this.fetchParameterListInto(propAssignments);
        this.skipWS();
        propAssignments.eval();
        return this.pos;
    }

    ensureEvaled(value : any) : any {
        return (value != null && value instanceof <any>_ObjectBuilderSettingEvaluator.SettingExpression)?(<_ObjectBuilderSettingEvaluator.SettingExpression>value).eval():value;
    }

    fetchBuilderCall(optional : boolean, topLevel : boolean) : any {
        // let startPos : number = this.pos;
        // let exp : _ObjectBuilderSettingEvaluator.BuilderCallExpression = new _ObjectBuilderSettingEvaluator.BuilderCallExpression(this);
        // exp.canBeStaticField = true;
        // let fetchedClassName : string = this.fetchClassName(optional);
        // {
        //     if(fetchedClassName == null) {
        //         if(!optional) {
        //             throw new _ObjectBuilderSettingEvaluationException("class name", this.src, this.pos);
        //         }
        //         return _ObjectBuilderSettingEvaluator.VOID_$LI$();
        //     }
        //     exp.className = _ObjectBuilderSettingEvaluator.shorthandToFullQualified(fetchedClassName);
        //     if(!/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(fetchedClassName,exp.className))) {
        //         this.modernMode = true;
        //         exp.canBeStaticField = false;
        //     }
        // };
        // this.skipWS();
        // let openParen : string = this.fetchOptionalChar("(");
        // if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openParen) == 0 && !topLevel) {
        //     if(fetchedClassName.indexOf('.') !== -1) {
        //         exp.mustBeStaticField = true;
        //     } else {
        //         this.pos = startPos;
        //         return _ObjectBuilderSettingEvaluator.VOID_$LI$();
        //     }
        // }
        // if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(openParen) != 0) {
        //     this.fetchParameterListInto(exp);
        //     exp.canBeStaticField = false;
        // }
        // return exp;
        throw new Error();
    }

    fetchParameterListInto(exp : _ObjectBuilderSettingEvaluator.ExpressionWithParameters) {
        this.modernMode = true;
        this.skipWS();
        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.fetchOptionalChar(")")) != ')'.charCodeAt(0)) {
            do {
                this.skipWS();
                let paramNameOrValue : any = this.fetchValue(false, false, true, false);
                if(paramNameOrValue !== _ObjectBuilderSettingEvaluator.VOID_$LI$()) {
                    this.skipWS();
                    if(paramNameOrValue != null && paramNameOrValue instanceof <any>_ObjectBuilderSettingEvaluator.Name) {
                        /* add */(exp.namedParamNames.push((<_ObjectBuilderSettingEvaluator.Name>paramNameOrValue).name)>0);
                        this.skipWS();
                        this.fetchRequiredChar("=");
                        this.skipWS();
                        let paramValue : any = this.fetchValue(false, false, true, true);
                        /* add */(exp.namedParamValues.push(this.ensureEvaled(paramValue))>0);
                    } else {
                        if(!/* isEmpty */(exp.namedParamNames.length == 0)) {
                            throw new _ObjectBuilderSettingEvaluationException("Positional parameters must precede named parameters");
                        }
                        if(!exp.getAllowPositionalParameters()) {
                            throw new _ObjectBuilderSettingEvaluationException("Positional parameters not supported here");
                        }
                        /* add */(exp.positionalParamValues.push(this.ensureEvaled(paramNameOrValue))>0);
                    }
                    this.skipWS();
                }
            } while(((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.fetchRequiredChar(",)")) == ','.charCodeAt(0)));
        }
    }

    fetchValue(optional : boolean, topLevel : boolean, resultCoerced : boolean, resolveVariables : boolean) : any {
        if(this.pos < this.src.length) {
            let val : any = this.fetchNumberLike(true, resultCoerced);
            if(val !== _ObjectBuilderSettingEvaluator.VOID_$LI$()) {
                return val;
            }
            val = this.fetchStringLiteral(true);
            if(val !== _ObjectBuilderSettingEvaluator.VOID_$LI$()) {
                return val;
            }
            val = this.fetchListLiteral(true);
            if(val !== _ObjectBuilderSettingEvaluator.VOID_$LI$()) {
                return val;
            }
            val = this.fetchMapLiteral(true);
            if(val !== _ObjectBuilderSettingEvaluator.VOID_$LI$()) {
                return val;
            }
            val = this.fetchBuilderCall(true, topLevel);
            if(val !== _ObjectBuilderSettingEvaluator.VOID_$LI$()) {
                return val;
            }
            let name : string = this.fetchSimpleName(true);
            if(name != null) {
                val = this.keywordToValueOrVoid(name);
                if(val !== _ObjectBuilderSettingEvaluator.VOID_$LI$()) {
                    return val;
                }
                if(resolveVariables) {
                    throw new _ObjectBuilderSettingEvaluationException("Can\'t resolve variable reference: " + name);
                } else {
                    return new _ObjectBuilderSettingEvaluator.Name(name);
                }
            }
        }
        if(optional) {
            return _ObjectBuilderSettingEvaluator.VOID_$LI$();
        } else {
            throw new _ObjectBuilderSettingEvaluationException("value or name", this.src, this.pos);
        }
    }

    isKeyword(name : string) : boolean {
        return this.keywordToValueOrVoid(name) !== _ObjectBuilderSettingEvaluator.VOID_$LI$();
    }

    keywordToValueOrVoid(name : string) : any {
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"true"))) return true;
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"false"))) return false;
        if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,"null"))) return null;
        return _ObjectBuilderSettingEvaluator.VOID_$LI$();
    }

    fetchSimpleName(optional : boolean) : string {
        let c : string = this.pos < this.src.length?this.src.charAt(this.pos):String.fromCharCode(0);
        if(!this.isIdentifierStart(c)) {
            if(optional) {
                return null;
            } else {
                throw new _ObjectBuilderSettingEvaluationException("class name", this.src, this.pos);
            }
        }
        let startPos : number = this.pos;
        this.pos++;
        seekClassNameEnd: while((true)) {
            if(this.pos === this.src.length) {
                break seekClassNameEnd;
            }
            c = this.src.charAt(this.pos);
            if(!this.isIdentifierMiddle(c)) {
                break seekClassNameEnd;
            }
            this.pos++;
        }
        return this.src.substring(startPos, this.pos);
    }

    fetchClassName(optional : boolean) : string {
        let startPos : number = this.pos;
        let sb : StringBuilder = new StringBuilder("");
        do {
            let name : string = this.fetchSimpleName(true);
            if(name == null) {
                if(!optional) {
                    throw new _ObjectBuilderSettingEvaluationException("name", this.src, this.pos);
                } else {
                    this.pos = startPos;
                    return null;
                }
            }
            sb.append(name);
            this.skipWS();
            if(this.pos >= this.src.length || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.src.charAt(this.pos)) != '.'.charCodeAt(0)) {
                break;
            }
            sb.append('.');
            this.pos++;
            this.skipWS();
        } while((true));
        let className : string = sb.toString();
        if(this.isKeyword(className)) {
            this.pos = startPos;
            return null;
        }
        return className;
    }

    fetchNumberLike(optional : boolean, resultCoerced : boolean) : any {
        // let startPos : number = this.pos;
        // let isVersion : boolean = false;
        // let hasDot : boolean = false;
        // seekTokenEnd: while((true)) {
        //     if(this.pos === this.src.length) {
        //         break seekTokenEnd;
        //     }
        //     let c : string = this.src.charAt(this.pos);
        //     if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '.'.charCodeAt(0)) {
        //         if(hasDot) {
        //             isVersion = true;
        //         } else {
        //             hasDot = true;
        //         }
        //     } else if(!(this.isASCIIDigit(c) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '-'.charCodeAt(0))) {
        //         break seekTokenEnd;
        //     }
        //     this.pos++;
        // };
        // if(startPos === this.pos) {
        //     if(optional) {
        //         return _ObjectBuilderSettingEvaluator.VOID_$LI$();
        //     } else {
        //         throw new _ObjectBuilderSettingEvaluationException("number-like", this.src, this.pos);
        //     }
        // }
        // let numStr : string = this.src.substring(startPos, this.pos);
        // if(isVersion) {
        //     try {
        //         return new Version(numStr);
        //     } catch(e) {
        //         throw new _ObjectBuilderSettingEvaluationException("Malformed version number: " + numStr, e);
        //     };
        // } else {
        //     let typePostfix : string = null;
        //     seekTypePostfixEnd: while((true)) {
        //         if(this.pos === this.src.length) {
        //             break seekTypePostfixEnd;
        //         }
        //         let c : string = this.src.charAt(this.pos);
        //         if(Character.isLetter(c)) {
        //             if(typePostfix == null) {
        //                 typePostfix = /* valueOf */new String(c).toString();
        //             } else {
        //                 typePostfix += c;
        //             }
        //         } else {
        //             break seekTypePostfixEnd;
        //         }
        //         this.pos++;
        //     };
        //     try {
        //         if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(numStr, ".")) {
        //             throw Object.defineProperty(new Error("A number can\'t end with a dot"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.NumberFormatException','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        //         }
        //         if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(numStr, ".") || /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(numStr, "-.") || /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(numStr, "+.")) {
        //             throw Object.defineProperty(new Error("A number can\'t start with a dot"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.NumberFormatException','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        //         }
        //         if(typePostfix == null) {
        //             if(numStr.indexOf('.') === -1) {
        //                 let biNum : BigInteger = new BigInteger(numStr);
        //                 let bitLength : number = biNum.bitLength();
        //                 if(bitLength <= 31) {
        //                     return biNum.intValue();
        //                 } else if(bitLength <= 63) {
        //                     return biNum.longValue();
        //                 } else {
        //                     return biNum;
        //                 }
        //             } else {
        //                 if(resultCoerced) {
        //                     return new BigDecimal(numStr);
        //                 } else {
        //                     return parseFloat(numStr);
        //                 }
        //             }
        //         } else {
        //             if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(typePostfix, "l")) {
        //                 return parseFloat(numStr);
        //             } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(typePostfix, "bi")) {
        //                 return new BigInteger(numStr);
        //             } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(typePostfix, "bd")) {
        //                 return new BigDecimal(numStr);
        //             } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(typePostfix, "d")) {
        //                 return parseFloat(numStr);
        //             } else if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(typePostfix, "f")) {
        //                 return parseFloat(numStr);
        //             } else {
        //                 throw new _ObjectBuilderSettingEvaluationException("Unrecognized number type postfix: " + typePostfix);
        //             }
        //         }
        //     } catch(e) {
        //         throw new _ObjectBuilderSettingEvaluationException("Malformed number: " + numStr, e);
        //     };
        // }
        throw new Error();
    }

    fetchStringLiteral(optional : boolean) : any {
        let startPos : number = this.pos;
        let q : string = String.fromCharCode(0);
        let afterEscape : boolean = false;
        let raw : boolean = false;
        seekTokenEnd: while((true)) {
            if(this.pos === this.src.length) {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(q) != 0) {
                    throw new _ObjectBuilderSettingEvaluationException(/* valueOf */new String(q).toString(), this.src, this.pos);
                }
                break seekTokenEnd;
            }
            let c : string = this.src.charAt(this.pos);
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(q) == 0) {
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == 'r'.charCodeAt(0) && (this.pos + 1 < this.src.length)) {
                    raw = true;
                    c = this.src.charAt(this.pos + 1);
                }
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\''.charCodeAt(0)) {
                    q = '\'';
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\"'.charCodeAt(0)) {
                    q = '\"';
                } else {
                    break seekTokenEnd;
                }
                if(raw) {
                    this.pos++;
                }
            } else {
                if(!afterEscape) {
                    if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\\'.charCodeAt(0) && !raw) {
                        afterEscape = true;
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(q)) {
                        break seekTokenEnd;
                    } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '{'.charCodeAt(0)) {
                        let prevC : string = this.src.charAt(this.pos - 1);
                        if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(prevC) == '$'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(prevC) == '#'.charCodeAt(0)) {
                            throw new _ObjectBuilderSettingEvaluationException("${...} and #{...} aren\'t allowed here.");
                        }
                    }
                } else {
                    afterEscape = false;
                }
            }
            this.pos++;
        }
        if(startPos === this.pos) {
            if(optional) {
                return _ObjectBuilderSettingEvaluator.VOID_$LI$();
            } else {
                throw new _ObjectBuilderSettingEvaluationException("string literal", this.src, this.pos);
            }
        }
        let sInside : string = this.src.substring(startPos + (raw?2:1), this.pos);
        try {
            this.pos++;
            return raw?sInside:StringUtil.FTLStringLiteralDec(sInside);
        } catch(e) {
            throw new _ObjectBuilderSettingEvaluationException("Malformed string literal: " + sInside, e);
        }
    }

    fetchListLiteral(optional : boolean) : any {
        if(this.pos === this.src.length || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.src.charAt(this.pos)) != '['.charCodeAt(0)) {
            if(!optional) {
                throw new _ObjectBuilderSettingEvaluationException("[", this.src, this.pos);
            }
            return _ObjectBuilderSettingEvaluator.VOID_$LI$();
        }
        this.pos++;
        let listExp : _ObjectBuilderSettingEvaluator.ListExpression = new _ObjectBuilderSettingEvaluator.ListExpression(this);
        while((true)) {
            this.skipWS();
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.fetchOptionalChar("]")) != 0) {
                return listExp;
            }
            if(listExp.itemCount() !== 0) {
                this.fetchRequiredChar(",");
                this.skipWS();
            }
            listExp.addItem(this.fetchValue(false, false, false, true));
            this.skipWS();
        }
    }

    fetchMapLiteral(optional : boolean) : any {
        if(this.pos === this.src.length || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.src.charAt(this.pos)) != '{'.charCodeAt(0)) {
            if(!optional) {
                throw new _ObjectBuilderSettingEvaluationException("{", this.src, this.pos);
            }
            return _ObjectBuilderSettingEvaluator.VOID_$LI$();
        }
        this.pos++;
        let mapExp : _ObjectBuilderSettingEvaluator.MapExpression = new _ObjectBuilderSettingEvaluator.MapExpression(this);
        while((true)) {
            this.skipWS();
            if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(this.fetchOptionalChar("}")) != 0) {
                return mapExp;
            }
            if(mapExp.itemCount() !== 0) {
                this.fetchRequiredChar(",");
                this.skipWS();
            }
            let key : any = this.fetchValue(false, false, false, true);
            this.skipWS();
            this.fetchRequiredChar(":");
            this.skipWS();
            let value : any = this.fetchValue(false, false, false, true);
            mapExp.addItem(new _ObjectBuilderSettingEvaluator.KeyValuePair(key, value));
            this.skipWS();
        }
    }

    skipWS() {
        while((true)) {
            if(this.pos === this.src.length) {
                return;
            }
            let c : string = this.src.charAt(this.pos);
            if(!Character.isWhitespace(c)) {
                return;
            }
            this.pos++;
        }
    }

    fetchOptionalChar(expectedChars : string) : string {
        return this.fetchChar(expectedChars, true);
    }

    fetchRequiredChar(expectedChars : string) : string {
        return this.fetchChar(expectedChars, false);
    }

    fetchChar(expectedChars : string, optional : boolean) : string {
        let c : string = this.pos < this.src.length?this.src.charAt(this.pos):String.fromCharCode(0);
        if(expectedChars.indexOf(c) !== -1) {
            this.pos++;
            return c;
        } else if(optional) {
            return String.fromCharCode(0);
        } else {
            let sb : StringBuilder = new StringBuilder("");
            for(let i : number = 0; i < expectedChars.length; i++) {
                if(i !== 0) {
                    sb.append(" or ");
                }
                sb.append(StringUtil.jQuote$java_lang_Object(expectedChars.substring(i, i + 1)));
            }
            throw new _ObjectBuilderSettingEvaluationException(sb.toString(), this.src, this.pos);
        }
    }

    isASCIIDigit(c : string) : boolean {
        return (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) >= '0'.charCodeAt(0) && (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) <= '9'.charCodeAt(0);
    }

    isIdentifierStart(c : string) : boolean {
        return Character.isLetter(c) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '_'.charCodeAt(0) || (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '$'.charCodeAt(0);
    }

    isIdentifierMiddle(c : string) : boolean {
        return this.isIdentifierStart(c) || this.isASCIIDigit(c);
    }

    // static shorthandToFullQualified(className : string) : string {
    //     if(_ObjectBuilderSettingEvaluator.SHORTHANDS == null) {
    //         _ObjectBuilderSettingEvaluator.SHORTHANDS = <any>(new Map<any, any>());
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, DefaultObjectWrapper);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, BeansWrapper);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, SimpleObjectWrapper);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, TemplateConfiguration);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, PathGlobMatcher);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, FileNameGlobMatcher);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, FileExtensionMatcher);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, PathRegexMatcher);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, AndMatcher);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, OrMatcher);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, NotMatcher);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, ConditionalTemplateConfigurationFactory);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, MergingTemplateConfigurationFactory);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, FirstMatchTemplateConfigurationFactory);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, HTMLOutputFormat);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, XHTMLOutputFormat);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, XMLOutputFormat);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, RTFOutputFormat);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, PlainTextOutputFormat);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, UndefinedOutputFormat);
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, String);
    //         /* put */_ObjectBuilderSettingEvaluator.SHORTHANDS.set("TimeZone", "freemarker.core._TimeZone");
    //         _ObjectBuilderSettingEvaluator.addWithSimpleName(_ObjectBuilderSettingEvaluator.SHORTHANDS, Configuration);
    //     }
    //     let fullClassName : string = /* get */_ObjectBuilderSettingEvaluator.SHORTHANDS.get(className);
    //     return fullClassName == null?className:fullClassName;
    // }

    static addWithSimpleName(map : Map<any, any>, pClass : any) {
        /* put */map.set(/* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))(pClass), /* getName */(c => c["__class"]?c["__class"]:c["name"])(pClass));
    }

    setJavaBeanProperties(bean : any, namedParamNames : Array<any>, namedParamValues : Array<any>) {
        // if(/* isEmpty */(namedParamNames.length == 0)) {
        //     return;
        // }
        // let cl : any = (<any>bean.constructor);
        // let beanPropSetters : Map<any, any>;
        // try {
        //     let propDescs : Array<any> = Introspector.getBeanInfo(cl).getPropertyDescriptors();
        //     beanPropSetters = <any>(new Map<any, any>());
        //     for(let i : number = 0; i < propDescs.length; i++) {
        //         let propDesc : PropertyDescriptor = propDescs[i];
        //         let writeMethod : Function = propDesc.getWriteMethod();
        //         if(writeMethod != null) {
        //             /* put */beanPropSetters.set(propDesc.getName(), writeMethod);
        //         }
        //     };
        // } catch(e) {
        //     throw new _ObjectBuilderSettingEvaluationException("Failed to inspect " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " class", e);
        // };
        // let beanTM : TemplateHashModel = null;
        // for(let i : number = 0; i < /* size */(<number>namedParamNames.length); i++) {
        //     let name : string = <string>/* get */namedParamNames[i];
        //     if(!/* containsKey */beanPropSetters.has(name)) {
        //         throw new _ObjectBuilderSettingEvaluationException("The " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " class has no writeable JavaBeans property called " + StringUtil.jQuote$java_lang_Object(name) + ".");
        //     }
        //     let beanPropSetter : Function = <Function>/* put */beanPropSetters.set(name, null);
        //     if(beanPropSetter == null) {
        //         throw new _ObjectBuilderSettingEvaluationException("JavaBeans property " + StringUtil.jQuote$java_lang_Object(name) + " is set twice.");
        //     }
        //     try {
        //         if(beanTM == null) {
        //             let wrappedObj : TemplateModel = this.env.getObjectWrapper().wrap$java_lang_Object(bean);
        //             if(!(wrappedObj != null && (wrappedObj["__interfaces"] != null && wrappedObj["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || wrappedObj.constructor != null && wrappedObj.constructor["__interfaces"] != null && wrappedObj.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0))) {
        //                 throw new _ObjectBuilderSettingEvaluationException("The " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " class is not a wrapped as TemplateHashModel.");
        //             }
        //             beanTM = <TemplateHashModel><any>wrappedObj;
        //         }
        //         let m : TemplateModel = beanTM['get$java_lang_String'](/* getName */beanPropSetter.name);
        //         if(m == null) {
        //             throw new _ObjectBuilderSettingEvaluationException("Can\'t find " + beanPropSetter + " as FreeMarker method.");
        //         }
        //         if(!(m != null && (m["__interfaces"] != null && m["__interfaces"].indexOf("freemarker.template.TemplateMethodModelEx") >= 0 || m.constructor != null && m.constructor["__interfaces"] != null && m.constructor["__interfaces"].indexOf("freemarker.template.TemplateMethodModelEx") >= 0))) {
        //             throw new _ObjectBuilderSettingEvaluationException(StringUtil.jQuote$java_lang_Object(/* getName */beanPropSetter.name) + " wasn\'t a TemplateMethodModelEx.");
        //         }
        //         let args : Array<any> = <any>([]);
        //         /* add */(args.push(this.env.getObjectWrapper().wrap$java_lang_Object(/* get */namedParamValues[i]))>0);
        //         (<TemplateMethodModelEx><any>m).exec(args);
        //     } catch(e) {
        //         throw new _ObjectBuilderSettingEvaluationException("Failed to set " + StringUtil.jQuote$java_lang_Object(name), e);
        //     };
        // };
        throw new Error();
    }
}
_ObjectBuilderSettingEvaluator["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator";


export namespace _ObjectBuilderSettingEvaluator {

    export class Name {
        public constructor(name : string) {
            if(this.name===undefined) this.name = null;
            this.name = name;
        }

        name : string;
    }
    Name["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.Name";


    export abstract class SettingExpression {
        abstract eval() : any;

        constructor() {
        }
    }
    SettingExpression["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.SettingExpression";


    export class KeyValuePair {
        key : any;

        value : any;

        public constructor(key : any, value : any) {
            if(this.key===undefined) this.key = null;
            if(this.value===undefined) this.value = null;
            this.key = key;
            this.value = value;
        }
    }
    KeyValuePair["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.KeyValuePair";


    export class LegacyExceptionWrapperSettingEvaluationExpression extends _ObjectBuilderSettingEvaluationException {
        public constructor(cause : Error) {
            super("Legacy operation failed", cause);
            (<any>Object).setPrototypeOf(this, LegacyExceptionWrapperSettingEvaluationExpression.prototype);
            if(!((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0)) || (cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.InstantiationException") >= 0)) || (cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)))) {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
        }

        public rethrowLegacy() {
            let cause : Error = (<Error>null);
            if(cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0)) throw <Error>cause;
            if(cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.InstantiationException") >= 0)) throw <Error>cause;
            if(cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) throw <Error>cause;
            throw new BugException();
        }
    }
    LegacyExceptionWrapperSettingEvaluationExpression["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.LegacyExceptionWrapperSettingEvaluationExpression";
    LegacyExceptionWrapperSettingEvaluationExpression["__interfaces"] = ["java.io.Serializable"];



    export abstract class ExpressionWithParameters extends _ObjectBuilderSettingEvaluator.SettingExpression {
        public __parent: any;
        positionalParamValues : Array<any>;

        namedParamNames : Array<any>;

        namedParamValues : Array<any>;

        abstract getAllowPositionalParameters() : boolean;

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
            this.positionalParamValues = <any>([]);
            this.namedParamNames = <any>([]);
            this.namedParamValues = <any>([]);
        }
    }
    ExpressionWithParameters["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.ExpressionWithParameters";


    export class ListExpression extends _ObjectBuilderSettingEvaluator.SettingExpression {
        public __parent: any;
        items : List;

        addItem(item : any) {
            /* add */(this.items.push(item)>0);
        }

        public itemCount() : number {
            return /* size */(<number>this.items.length);
        }

        /**
         * 
         * @return {Object}
         */
        eval() : any {
            let res : Array<any> = <any>([]);
            for(let index145=0; index145 < this.items.length; index145++) {
                let item = this.items[index145];
                {
                    /* add */(res.push(this.__parent.ensureEvaled(item))>0);
                }
            }
            return res;
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
            this.items = <any>([]);
        }
    }
    ListExpression["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.ListExpression";


    export class MapExpression extends _ObjectBuilderSettingEvaluator.SettingExpression {
        public __parent: any;
        items : List;

        addItem(item : _ObjectBuilderSettingEvaluator.KeyValuePair) {
            /* add */(this.items.push(item)>0);
        }

        public itemCount() : number {
            return /* size */(<number>this.items.length);
        }

        /**
         * 
         * @return {Object}
         */
        eval() : any {
            let res : Map<any, any> = <any>(new Map<any, any>());
            for(let index146=0; index146 < this.items.length; index146++) {
                let item = this.items[index146];
                {
                    let key : any = this.__parent.ensureEvaled(item.key);
                    if(key == null) {
                        throw new _ObjectBuilderSettingEvaluationException("Map can\'t use null as key.");
                    }
                    /* put */res.set(key, this.__parent.ensureEvaled(item.value));
                }
            }
            return res;
        }

        constructor(__parent: any) {
            super();
            this.__parent = __parent;
            this.items = <any>([]);
        }
    }
    MapExpression["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.MapExpression";


    export class BuilderCallExpression extends _ObjectBuilderSettingEvaluator.ExpressionWithParameters {
        public __parent: any;
        className : string;

        canBeStaticField : boolean;

        mustBeStaticField : boolean;

        /**
         * 
         * @return {Object}
         */
        eval() : any {
            // if(this.mustBeStaticField) {
            //     if(!this.canBeStaticField) {
            //         throw new BugException();
            //     }
            //     return this.getStaticFieldValue(this.className);
            // }
            // let cl : any;
            // if(!this.__parent.modernMode) {
            //     try {
            //         try {
            //             return /* newInstance */new (ClassUtil.forName(this.className))();
            //         } catch(__e) {
            //             if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.InstantiationException") >= 0)) {
            //                 let e : Error = <Error>__e;
            //                 throw new _ObjectBuilderSettingEvaluator.LegacyExceptionWrapperSettingEvaluationExpression(e);
            //
            //             }
            //             if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.IllegalAccessException") >= 0)) {
            //                 let e : Error = <Error>__e;
            //                 throw new _ObjectBuilderSettingEvaluator.LegacyExceptionWrapperSettingEvaluationExpression(e);
            //
            //             }
            //             if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0)) {
            //                 let e : Error = <Error>__e;
            //                 throw new _ObjectBuilderSettingEvaluator.LegacyExceptionWrapperSettingEvaluationExpression(e);
            //
            //             }
            //         };
            //     } catch(e) {
            //         if(!this.canBeStaticField || this.className.indexOf('.') === -1) {
            //             throw e;
            //         }
            //         try {
            //             return this.getStaticFieldValue(this.className);
            //         } catch(e2) {
            //             throw e;
            //         };
            //     };
            // }
            // let clIsBuilderClass : boolean;
            // try {
            //     cl = ClassUtil.forName(this.className + _ObjectBuilderSettingEvaluator.BUILDER_CLASS_POSTFIX);
            //     clIsBuilderClass = true;
            // } catch(e) {
            //     clIsBuilderClass = false;
            //     try {
            //         cl = ClassUtil.forName(this.className);
            //     } catch(e2) {
            //         let failedToGetAsStaticField : boolean;
            //         if(this.canBeStaticField) {
            //             try {
            //                 return this.getStaticFieldValue(this.className);
            //             } catch(e3) {
            //                 failedToGetAsStaticField = true;
            //             };
            //         } else {
            //             failedToGetAsStaticField = false;
            //         }
            //         throw new _ObjectBuilderSettingEvaluationException("Failed to get class " + StringUtil.jQuote$java_lang_Object(this.className) + (failedToGetAsStaticField?" (also failed to resolve name as static field)":"") + ".", e2);
            //     };
            // };
            // if(!clIsBuilderClass && this.hasNoParameters()) {
            //     try {
            //         let f : Field = /* getField */((c,p) => { return {owner:c,name:p}; })(cl,_ObjectBuilderSettingEvaluator.INSTANCE_FIELD_NAME);
            //         if((f.getModifiers() & (Modifier.PUBLIC | Modifier.STATIC)) === (Modifier.PUBLIC | Modifier.STATIC)) {
            //             return /* get */null[f.name];
            //         }
            //     } catch(__e) {
            //         if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NoSuchFieldException") >= 0)) {
            //             let e : Error = <Error>__e;
            //
            //         }
            //         if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
            //             let e : Error = <Error>__e;
            //             throw new _ObjectBuilderSettingEvaluationException("Error when trying to access " + StringUtil.jQuote$java_lang_Object(this.className) + "." + _ObjectBuilderSettingEvaluator.INSTANCE_FIELD_NAME, e);
            //
            //         }
            //     };
            // }
            // let constructorResult : any = this.callConstructor(cl);
            // this.__parent.setJavaBeanProperties(constructorResult, this.namedParamNames, this.namedParamValues);
            // let result : any;
            // if(clIsBuilderClass) {
            //     result = this.callBuild(constructorResult);
            // } else {
            //     if(constructorResult != null && (constructorResult["__interfaces"] != null && constructorResult["__interfaces"].indexOf("freemarker.template.utility.WriteProtectable") >= 0 || constructorResult.constructor != null && constructorResult.constructor["__interfaces"] != null && constructorResult.constructor["__interfaces"].indexOf("freemarker.template.utility.WriteProtectable") >= 0)) {
            //         (<WriteProtectable><any>constructorResult).writeProtect();
            //     }
            //     result = constructorResult;
            // }
            // return result;
            throw new Error();
        }

        getStaticFieldValue(dottedName : string) : any {
            // let lastDotIdx : number = dottedName.lastIndexOf('.');
            // if(lastDotIdx === -1) {
            //     throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            // }
            // let className : string = _ObjectBuilderSettingEvaluator.shorthandToFullQualified(dottedName.substring(0, lastDotIdx));
            // let fieldName : string = dottedName.substring(lastDotIdx + 1);
            // let cl : any;
            // try {
            //     cl = ClassUtil.forName(className);
            // } catch(e) {
            //     throw new _ObjectBuilderSettingEvaluationException("Failed to get field\'s parent class, " + StringUtil.jQuote$java_lang_Object(className) + ".", e);
            // };
            // let field : Field;
            // try {
            //     field = /* getField */((c,p) => { return {owner:c,name:p}; })(cl,fieldName);
            // } catch(e) {
            //     throw new _ObjectBuilderSettingEvaluationException("Failed to get field " + StringUtil.jQuote$java_lang_Object(fieldName) + " from class " + StringUtil.jQuote$java_lang_Object(className) + ".", e);
            // };
            // if((field.getModifiers() & Modifier.STATIC) === 0) {
            //     throw new _ObjectBuilderSettingEvaluationException("Referred field isn\'t static: " + field);
            // }
            // if((field.getModifiers() & Modifier.PUBLIC) === 0) {
            //     throw new _ObjectBuilderSettingEvaluationException("Referred field isn\'t public: " + field);
            // }
            // if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(/* getName */field.name,_ObjectBuilderSettingEvaluator.INSTANCE_FIELD_NAME))) {
            //     throw new _ObjectBuilderSettingEvaluationException("The " + _ObjectBuilderSettingEvaluator.INSTANCE_FIELD_NAME + " field is only accessible through pseudo-constructor call: " + className + "()");
            // }
            // try {
            //     return /* get */null[field.name];
            // } catch(e) {
            //     throw new _ObjectBuilderSettingEvaluationException("Failed to get field value: " + field, e);
            // };
            throw new Error();
        }

        callConstructor(cl : any) : any {
            if(this.hasNoParameters()) {
                try {
                    return /* newInstance */new (cl)();
                } catch(e) {
                    throw new _ObjectBuilderSettingEvaluationException("Failed to call " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " 0-argument constructor", e);
                }
            } else {
                let ow : BeansWrapper = this.__parent.env.getObjectWrapper();
                let tmArgs : Array<any> = <any>([]);
                for(let i : number = 0; i < /* size */(<number>this.positionalParamValues.length); i++) {
                    try {
                        /* add */(tmArgs.push(ow.wrap$java_lang_Object(/* get */this.positionalParamValues[i]))>0);
                    } catch(e) {
                        throw new _ObjectBuilderSettingEvaluationException("Failed to wrap arg #" + (i + 1), e);
                    }
                }
                try {
                    return ow.newInstance(cl, tmArgs);
                } catch(e) {
                    throw new _ObjectBuilderSettingEvaluationException("Failed to call " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " constructor", e);
                }
            }
        }

        callBuild(constructorResult : any) : any {
            // let cl : any = (<any>constructorResult.constructor);
            // let buildMethod : Function;
            // try {
            //     buildMethod = /* getMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })((<any>constructorResult.constructor),_ObjectBuilderSettingEvaluator.BUILD_METHOD_NAME);
            // } catch(__e) {
            //     if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NoSuchMethodException") >= 0)) {
            //         let e : Error = <Error>__e;
            //         throw new _ObjectBuilderSettingEvaluationException("The " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " builder class must have a public " + _ObjectBuilderSettingEvaluator.BUILD_METHOD_NAME + "() method", e);
            //
            //     }
            //     if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
            //         let e : Error = <Error>__e;
            //         throw new _ObjectBuilderSettingEvaluationException("Failed to get the " + _ObjectBuilderSettingEvaluator.BUILD_METHOD_NAME + "() method of the " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " builder class", e);
            //
            //     }
            // };
            // try {
            //     return /* invoke */buildMethod.fn.apply(constructorResult, [<Array>null]);
            // } catch(e) {
            //     let cause : Error;
            //     if(e != null && (e["__classes"] && e["__classes"].indexOf("java.lang.reflect.InvocationTargetException") >= 0)) {
            //         cause = (<Error>e).getTargetException();
            //     } else {
            //         cause = e;
            //     }
            //     throw new _ObjectBuilderSettingEvaluationException("Failed to call " + _ObjectBuilderSettingEvaluator.BUILD_METHOD_NAME + "() method on " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(cl) + " instance", cause);
            // };
            throw new Error();
        }

        hasNoParameters() : boolean {
            return /* isEmpty */(this.positionalParamValues.length == 0) && /* isEmpty */(this.namedParamValues.length == 0);
        }

        /**
         * 
         * @return {boolean}
         */
        getAllowPositionalParameters() : boolean {
            return true;
        }

        constructor(__parent: any) {
            super(__parent);
            this.__parent = __parent;
            if(this.className===undefined) this.className = null;
            if(this.canBeStaticField===undefined) this.canBeStaticField = false;
            if(this.mustBeStaticField===undefined) this.mustBeStaticField = false;
        }
    }
    BuilderCallExpression["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.BuilderCallExpression";


    export class PropertyAssignmentsExpression extends _ObjectBuilderSettingEvaluator.ExpressionWithParameters {
        public __parent: any;
        bean : any;

        public constructor(__parent: any, bean : any) {
            super(__parent);
            this.__parent = __parent;
            if(this.bean===undefined) this.bean = null;
            this.bean = bean;
        }

        /**
         * 
         * @return {Object}
         */
        eval() : any {
            this.__parent.setJavaBeanProperties(this.bean, this.namedParamNames, this.namedParamValues);
            return this.bean;
        }

        /**
         * 
         * @return {boolean}
         */
        getAllowPositionalParameters() : boolean {
            return false;
        }
    }
    PropertyAssignmentsExpression["__class"] = "freemarker.core._ObjectBuilderSettingEvaluator.PropertyAssignmentsExpression";

}





_ObjectBuilderSettingEvaluator.VOID_$LI$();
