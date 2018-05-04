/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Version } from '../template/Version';
import { ParserConfiguration } from './ParserConfiguration';
import { OutputFormat } from './OutputFormat';
import { ArithmeticEngine } from './ArithmeticEngine';

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * @param {*} wrappedPCfg
 * @param {OutputFormat} outputFormat
 * @param {Integer} autoEscapingPolicy
 * @class
 */
export class _ParserConfigurationWithInheritedFormat implements ParserConfiguration {
    /*private*/ outputFormat : OutputFormat;

    /*private*/ autoEscapingPolicy : number;

    /*private*/ wrappedPCfg : ParserConfiguration;

    public constructor(wrappedPCfg : ParserConfiguration, outputFormat : OutputFormat, autoEscapingPolicy : number) {
        if(this.outputFormat===undefined) this.outputFormat = null;
        if(this.autoEscapingPolicy===undefined) this.autoEscapingPolicy = null;
        if(this.wrappedPCfg===undefined) this.wrappedPCfg = null;
        this.outputFormat = outputFormat;
        this.autoEscapingPolicy = autoEscapingPolicy;
        this.wrappedPCfg = wrappedPCfg;
    }

    public getWhitespaceStripping() : boolean {
        return this.wrappedPCfg.getWhitespaceStripping();
    }

    public getTagSyntax() : number {
        return this.wrappedPCfg.getTagSyntax();
    }

    public getInterpolationSyntax() : number {
        return this.wrappedPCfg.getInterpolationSyntax();
    }

    public getStrictSyntaxMode() : boolean {
        return this.wrappedPCfg.getStrictSyntaxMode();
    }

    public getOutputFormat() : OutputFormat {
        return this.outputFormat != null?this.outputFormat:this.wrappedPCfg.getOutputFormat();
    }

    public getRecognizeStandardFileExtensions() : boolean {
        return false;
    }

    public getNamingConvention() : number {
        return this.wrappedPCfg.getNamingConvention();
    }

    public getIncompatibleImprovements() : Version {
        return this.wrappedPCfg.getIncompatibleImprovements();
    }

    public getAutoEscapingPolicy() : number {
        return this.autoEscapingPolicy != null?this.autoEscapingPolicy:this.wrappedPCfg.getAutoEscapingPolicy();
    }

    public getArithmeticEngine() : ArithmeticEngine {
        return this.wrappedPCfg.getArithmeticEngine();
    }

    public getTabSize() : number {
        return this.wrappedPCfg.getTabSize();
    }
}
_ParserConfigurationWithInheritedFormat["__class"] = "freemarker.core._ParserConfigurationWithInheritedFormat";
_ParserConfigurationWithInheritedFormat["__interfaces"] = ["freemarker.core.ParserConfiguration"];




var __Function = Function;
