/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Version } from '../template/Version';
import { ParserConfiguration } from './ParserConfiguration';
import { ArithmeticEngine } from './ArithmeticEngine';
import { OutputFormat } from './OutputFormat';
import { Boolean } from '../../java/lang/Boolean';

/**
 * Used to work around that {link FMParser} has constructors that have separate parameters for individual settings.
 * 
 * @since 2.3.24
 * @class
 */
export class LegacyConstructorParserConfiguration implements ParserConfiguration {
    /*private*/ tagSyntax : number;

    /*private*/ interpolationSyntax : number;

    /*private*/ namingConvention : number;

    /*private*/ whitespaceStripping : boolean;

    /*private*/ strictSyntaxMode : boolean;

    /*private*/ arithmeticEngine : ArithmeticEngine;

    /*private*/ autoEscapingPolicy : number;

    /*private*/ outputFormat : OutputFormat;

    /*private*/ recognizeStandardFileExtensions : boolean;

    /*private*/ tabSize : number;

    /*private*/ incompatibleImprovements : Version;

    constructor(strictSyntaxMode : boolean, whitespaceStripping : boolean, tagSyntax : number, interpolationSyntax : number, namingConvention : number, autoEscaping : number, outputFormat : OutputFormat, recognizeStandardFileExtensions : boolean, tabSize : number, incompatibleImprovements : Version, arithmeticEngine : ArithmeticEngine) {
        if(this.tagSyntax===undefined) this.tagSyntax = 0;
        if(this.interpolationSyntax===undefined) this.interpolationSyntax = 0;
        if(this.namingConvention===undefined) this.namingConvention = 0;
        if(this.whitespaceStripping===undefined) this.whitespaceStripping = false;
        if(this.strictSyntaxMode===undefined) this.strictSyntaxMode = false;
        if(this.arithmeticEngine===undefined) this.arithmeticEngine = null;
        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = null;
        if(this.outputFormat===undefined) this.outputFormat = null;
        if(this.recognizeStandardFileExtensions===undefined) this.recognizeStandardFileExtensions = null;
        if(this.tabSize===undefined) this.tabSize = null;
        if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        this.tagSyntax = tagSyntax;
        this.interpolationSyntax = interpolationSyntax;
        this.namingConvention = namingConvention;
        this.whitespaceStripping = whitespaceStripping;
        this.strictSyntaxMode = strictSyntaxMode;
        this.autoEscapingPolicy = autoEscaping;
        this.outputFormat = outputFormat;
        this.recognizeStandardFileExtensions = recognizeStandardFileExtensions;
        this.tabSize = tabSize;
        this.incompatibleImprovements = incompatibleImprovements;
        this.arithmeticEngine = arithmeticEngine;
    }

    public getTagSyntax() : number {
        return this.tagSyntax;
    }

    public getInterpolationSyntax() : number {
        return this.interpolationSyntax;
    }

    public getNamingConvention() : number {
        return this.namingConvention;
    }

    public getWhitespaceStripping() : boolean {
        return this.whitespaceStripping;
    }

    public getStrictSyntaxMode() : boolean {
        return this.strictSyntaxMode;
    }

    public getIncompatibleImprovements() : Version {
        return this.incompatibleImprovements;
    }

    public getArithmeticEngine() : ArithmeticEngine {
        if(this.arithmeticEngine == null) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return this.arithmeticEngine;
    }

    setArithmeticEngineIfNotSet(arithmeticEngine : ArithmeticEngine) {
        if(this.arithmeticEngine == null) {
            this.arithmeticEngine = arithmeticEngine;
        }
    }

    public getAutoEscapingPolicy() : number {
        if(this.autoEscapingPolicy == null) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return this.autoEscapingPolicy;
    }

    setAutoEscapingPolicyIfNotSet(autoEscapingPolicy : number) {
        if(this.autoEscapingPolicy == null) {
            this.autoEscapingPolicy = autoEscapingPolicy;
        }
    }

    public getOutputFormat() : OutputFormat {
        if(this.outputFormat == null) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return this.outputFormat;
    }

    setOutputFormatIfNotSet(outputFormat : OutputFormat) {
        if(this.outputFormat == null) {
            this.outputFormat = outputFormat;
        }
    }

    public getRecognizeStandardFileExtensions() : boolean {
        if(this.recognizeStandardFileExtensions == null) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return this.recognizeStandardFileExtensions;
    }

    setRecognizeStandardFileExtensionsIfNotSet(recognizeStandardFileExtensions : boolean) {
        if(this.recognizeStandardFileExtensions == null) {
            this.recognizeStandardFileExtensions = recognizeStandardFileExtensions;
        }
    }

    public getTabSize() : number {
        if(this.tabSize == null) {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return this.tabSize;
    }

    setTabSizeIfNotSet(tabSize : number) {
        if(this.tabSize == null) {
            this.tabSize = tabSize;
        }
    }
}
LegacyConstructorParserConfiguration["__class"] = "freemarker.core.LegacyConstructorParserConfiguration";
LegacyConstructorParserConfiguration["__interfaces"] = ["freemarker.core.ParserConfiguration"];




var __Function = Function;
