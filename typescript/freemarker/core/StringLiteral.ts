/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../template/Configuration';
import {SimpleScalar} from '../template/SimpleScalar';
import {Template} from '../template/Template';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {StringUtil} from '../template/utility/StringUtil';
import {StringReader} from '../../java/io/StringReader';
import {Expression} from './Expression';
import {FMParser} from './FMParser';
import {OutputFormat} from './OutputFormat';
import {ParserConfiguration} from './ParserConfiguration';
import {SimpleCharStream} from './SimpleCharStream';
import {FMParserTokenManager} from './FMParserTokenManager';
import {Environment} from './Environment';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {TemplateMarkupOutputModel} from './TemplateMarkupOutputModel';
import {Interpolation} from './Interpolation';
import {EvalUtil} from './EvalUtil';
import {ParameterRole} from './ParameterRole';

export class StringLiteral extends Expression implements TemplateScalarModel {
    /*private*/ value : string;

    /**
     * {link List} of {link String}-s and {link Interpolation}-s.
     */
    /*private*/ dynamicValue : List;

    constructor(value : string) {
        super();
        if(this.value===undefined) this.value = null;
        if(this.dynamicValue===undefined) this.dynamicValue = null;
        this.value = value;
    }

    /**
     * @param {FMParser} parentParser The parser of the template that contains this string literal.
     * @param {OutputFormat} outputFormat
     */
    parseValue(parentParser : FMParser, outputFormat : OutputFormat) {
        let parentTemplate : Template = this.getTemplate();
        let pcfg : ParserConfiguration = parentTemplate.getParserConfiguration();
        let intSyn : number = pcfg.getInterpolationSyntax();
        if(this.value.length > 3 && ((intSyn === Configuration.LEGACY_INTERPOLATION_SYNTAX || intSyn === Configuration.DOLLAR_INTERPOLATION_SYNTAX) && (this.value.indexOf("${") !== -1 || intSyn === Configuration.LEGACY_INTERPOLATION_SYNTAX && this.value.indexOf("#{") !== -1) || intSyn === Configuration.SQUARE_BRACKET_INTERPOLATION_SYNTAX && this.value.indexOf("[=") !== -1)) {
            try {
                let simpleCharacterStream : SimpleCharStream = new SimpleCharStream(new StringReader(this.value), this.beginLine, this.beginColumn + 1, this.value.length);
                simpleCharacterStream.setTabSize(pcfg.getTabSize());
                let tkMan : FMParserTokenManager = new FMParserTokenManager(simpleCharacterStream);
                let parser : FMParser = new FMParser(parentTemplate, false, tkMan, pcfg);
                parser.setupStringLiteralMode(parentParser, outputFormat);
                try {
                    this.dynamicValue = parser.StaticTextAndInterpolations();
                } finally {
                    parser.tearDownStringLiteralMode(parentParser);
                }
            } catch(e) {
                e.setTemplateName(parentTemplate.getSourceName());
                throw e;
            }
            this.constantValue = null;
        }
    }

    /**
     * 
     * @param {Environment} env
     * @return {*}
     */
    _eval(env : /*Environment*/any) : TemplateModel {
        if(this.dynamicValue == null) {
            return new SimpleScalar(this.value);
        } else {
            let plainTextResult : StringBuilder = null;
            let markupResult : TemplateMarkupOutputModel<any> = null;
            for(let index139=0; index139 < this.dynamicValue.length; index139++) {
                let part = this.dynamicValue[index139];
                {
                    let calcedPart : any = (typeof part === 'string')?part:(<Interpolation>part).calculateInterpolatedStringOrMarkup(env);
                    if(markupResult != null) {
                        let partMO : TemplateMarkupOutputModel<any> = (typeof calcedPart === 'string')?markupResult.getOutputFormat().fromPlainTextByEscaping(<string>calcedPart):<TemplateMarkupOutputModel<any>><any>calcedPart;
                        markupResult = EvalUtil.concatMarkupOutputs(this, markupResult, partMO);
                    } else {
                        if(typeof calcedPart === 'string') {
                            let partStr : string = <string>calcedPart;
                            if(plainTextResult == null) {
                                plainTextResult = new StringBuilder(partStr);
                            } else {
                                plainTextResult.append(partStr);
                            }
                        } else {
                            let moPart : TemplateMarkupOutputModel<any> = <TemplateMarkupOutputModel<any>><any>calcedPart;
                            if(plainTextResult != null) {
                                let leftHandMO : TemplateMarkupOutputModel<any> = moPart.getOutputFormat().fromPlainTextByEscaping(plainTextResult.toString());
                                markupResult = EvalUtil.concatMarkupOutputs(this, leftHandMO, moPart);
                                plainTextResult = null;
                            } else {
                                markupResult = moPart;
                            }
                        }
                    }
                }
            }
            return markupResult != null?markupResult:plainTextResult != null?new SimpleScalar(plainTextResult.toString()):TemplateScalarModel.EMPTY_STRING;
        }
    }

    public getAsString() : string {
        return this.value;
    }

    /**
     * Tells if this is something like <tt>"${foo}"</tt>, which is usually a user mistake.
     * @return {boolean}
     */
    isSingleInterpolationLiteral() : boolean {
        return this.dynamicValue != null && /* size */(<number>this.dynamicValue.length) === 1 && (/* get */this.dynamicValue[0] != null && /* get */this.dynamicValue[0] instanceof <any>Interpolation);
    }

    /**
     * 
     * @return {String}
     */
    public getCanonicalForm() : string {
        if(this.dynamicValue == null) {
            return StringUtil.ftlQuote(this.value);
        } else {
            let sb : StringBuilder = new StringBuilder("");
            sb.append('\"');
            for(let index140=0; index140 < this.dynamicValue.length; index140++) {
                let child = this.dynamicValue[index140];
                {
                    if(child != null && child instanceof <any>Interpolation) {
                        sb.append((<Interpolation>child).getCanonicalFormInStringLiteral());
                    } else {
                        sb.append(StringUtil.FTLStringLiteralEnc$java_lang_String$char(<string>child, '\"'));
                    }
                }
            }
            sb.append('\"');
            return sb.toString();
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.dynamicValue == null?this.getCanonicalForm():"dynamic \"...\"";
    }

    /**
     * 
     * @return {boolean}
     */
    isLiteral() : boolean {
        return this.dynamicValue == null;
    }

    /**
     * 
     * @param {String} replacedIdentifier
     * @param {Expression} replacement
     * @param {Expression.ReplacemenetState} replacementState
     * @return {Expression}
     */
    deepCloneWithIdentifierReplaced_inner(replacedIdentifier : string, replacement : Expression, replacementState : Expression.ReplacemenetState) : Expression {
        let cloned : StringLiteral = new StringLiteral(this.value);
        cloned.dynamicValue = this.dynamicValue;
        return cloned;
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return this.dynamicValue == null?0:/* size */(<number>this.dynamicValue.length);
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        this.checkIndex(idx);
        return /* get */this.dynamicValue[idx];
    }

    /*private*/ checkIndex(idx : number) {
        if(this.dynamicValue == null || idx >= /* size */(<number>this.dynamicValue.length)) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        this.checkIndex(idx);
        return ParameterRole.VALUE_PART_$LI$();
    }
}
StringLiteral["__class"] = "freemarker.core.StringLiteral";
StringLiteral["__interfaces"] = ["freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];





