/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateConfiguration } from '../core/TemplateConfiguration';
import { Configuration } from '../template/Configuration';
import { StringUtil } from '../template/utility/StringUtil';
import { TemplateConfigurationFactory } from './TemplateConfigurationFactory';
import { TemplateConfigurationFactoryException } from './TemplateConfigurationFactoryException';

/**
 * Returns the first non-{@code null} result of the child factories, ignoring all further child factories. The child
 * factories are called in the order as they were added.
 * @param {Array} templateConfigurationFactories
 * @class
 * @extends TemplateConfigurationFactory
 */
export class FirstMatchTemplateConfigurationFactory extends TemplateConfigurationFactory {
    /*private*/ templateConfigurationFactories : TemplateConfigurationFactory[];

    /*private*/ __allowNoMatch : boolean;

    /*private*/ __noMatchErrorDetails : string;

    public constructor(...templateConfigurationFactories : TemplateConfigurationFactory[]) {
        super();
        if(this.templateConfigurationFactories===undefined) this.templateConfigurationFactories = null;
        if(this.__allowNoMatch===undefined) this.__allowNoMatch = false;
        if(this.__noMatchErrorDetails===undefined) this.__noMatchErrorDetails = null;
        this.templateConfigurationFactories = templateConfigurationFactories;
    }

    /**
     * 
     * @param {String} sourceName
     * @param {Object} templateSource
     * @return {TemplateConfiguration}
     */
    public get(sourceName : string, templateSource : any) : TemplateConfiguration {
        for(let index122=0; index122 < this.templateConfigurationFactories.length; index122++) {
            let tcf = this.templateConfigurationFactories[index122];
            {
                let tc : TemplateConfiguration = tcf.get(sourceName, templateSource);
                if(tc != null) {
                    return tc;
                }
            }
        }
        if(!this.__allowNoMatch) {
            throw new TemplateConfigurationFactoryException(/* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))(FirstMatchTemplateConfigurationFactory) + " has found no matching choice for source name " + StringUtil.jQuote$java_lang_Object(sourceName) + ". " + (this.__noMatchErrorDetails != null?"Error details: " + this.__noMatchErrorDetails:"(Set the noMatchErrorDetails property of the factory bean to give a more specific error message. Set allowNoMatch to true if this shouldn\'t be an error.)"));
        }
        return null;
    }

    /**
     * Getter pair of {link #setAllowNoMatch(boolean)}.
     * @return {boolean}
     */
    public getAllowNoMatch() : boolean {
        return this.__allowNoMatch;
    }

    /**
     * Use this to specify if having no matching choice is an error. The default is {@code false}, that is, it's an
     * error if there was no matching choice.
     * <p>
     * see #setNoMatchErrorDetails(String)
     * @param {boolean} allowNoMatch
     */
    public setAllowNoMatch(allowNoMatch : boolean) {
        this.__allowNoMatch = allowNoMatch;
    }

    /**
     * Use this to specify the text added to the exception error message when there was no matching choice.
     * The default is {@code null} (no error details).
     * <p>
     * see #setAllowNoMatch(boolean)
     * @return {String}
     */
    public getNoMatchErrorDetails() : string {
        return this.__noMatchErrorDetails;
    }

    public setNoMatchErrorDetails(noMatchErrorDetails : string) {
        this.__noMatchErrorDetails = noMatchErrorDetails;
    }

    /**
     * Same as {link #setAllowNoMatch(boolean)}, but return this object to support "fluent API" style.
     * @param {boolean} allow
     * @return {FirstMatchTemplateConfigurationFactory}
     */
    public allowNoMatch(allow : boolean) : FirstMatchTemplateConfigurationFactory {
        this.setAllowNoMatch(allow);
        return this;
    }

    /**
     * Same as {link #setNoMatchErrorDetails(String)}, but return this object to support "fluent API" style.
     * @param {String} message
     * @return {FirstMatchTemplateConfigurationFactory}
     */
    public noMatchErrorDetails(message : string) : FirstMatchTemplateConfigurationFactory {
        this.setNoMatchErrorDetails(message);
        return this;
    }

    /**
     * 
     * @param {Configuration} cfg
     */
    setConfigurationOfChildren(cfg : Configuration) {
        for(let index123=0; index123 < this.templateConfigurationFactories.length; index123++) {
            let templateConfigurationFactory = this.templateConfigurationFactories[index123];
            {
                templateConfigurationFactory.setConfiguration(cfg);
            }
        }
    }
}
FirstMatchTemplateConfigurationFactory["__class"] = "freemarker.cache.FirstMatchTemplateConfigurationFactory";



