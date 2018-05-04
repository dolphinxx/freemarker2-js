/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateConfiguration } from '../core/TemplateConfiguration';
import { Configuration } from '../template/Configuration';
import { TemplateConfigurationFactory } from './TemplateConfigurationFactory';
import { TemplateSourceMatcher } from './TemplateSourceMatcher';
import { TemplateConfigurationFactoryException } from './TemplateConfigurationFactoryException';

/**
 * Returns the given {link TemplateConfiguration} directly, or another {link TemplateConfigurationFactory}'s result, when
 * the specified matcher matches the template source.
 * 
 * @since 2.3.24
 * @param {TemplateSourceMatcher} matcher
 * @param {TemplateConfigurationFactory} templateConfigurationFactory
 * @class
 * @extends TemplateConfigurationFactory
 */
export class ConditionalTemplateConfigurationFactory extends TemplateConfigurationFactory {
    /*private*/ matcher : TemplateSourceMatcher;

    /*private*/ templateConfiguration : TemplateConfiguration;

    /*private*/ templateConfigurationFactory : TemplateConfigurationFactory;

    public constructor(matcher? : any, templateConfigurationFactory? : any) {
        if(((matcher != null && matcher instanceof <any>TemplateSourceMatcher) || matcher === null) && ((templateConfigurationFactory != null && templateConfigurationFactory instanceof <any>TemplateConfigurationFactory) || templateConfigurationFactory === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.matcher===undefined) this.matcher = null;
            if(this.templateConfiguration===undefined) this.templateConfiguration = null;
            if(this.templateConfigurationFactory===undefined) this.templateConfigurationFactory = null;
            if(this.matcher===undefined) this.matcher = null;
            if(this.templateConfiguration===undefined) this.templateConfiguration = null;
            if(this.templateConfigurationFactory===undefined) this.templateConfigurationFactory = null;
            (() => {
                this.matcher = matcher;
                this.templateConfiguration = null;
                this.templateConfigurationFactory = templateConfigurationFactory;
            })();
        } else if(((matcher != null && matcher instanceof <any>TemplateSourceMatcher) || matcher === null) && ((templateConfigurationFactory != null && templateConfigurationFactory instanceof <any>TemplateConfiguration) || templateConfigurationFactory === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let templateConfiguration : any = __args[1];
            super();
            if(this.matcher===undefined) this.matcher = null;
            if(this.templateConfiguration===undefined) this.templateConfiguration = null;
            if(this.templateConfigurationFactory===undefined) this.templateConfigurationFactory = null;
            if(this.matcher===undefined) this.matcher = null;
            if(this.templateConfiguration===undefined) this.templateConfiguration = null;
            if(this.templateConfigurationFactory===undefined) this.templateConfigurationFactory = null;
            (() => {
                this.matcher = matcher;
                this.templateConfiguration = templateConfiguration;
                this.templateConfigurationFactory = null;
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {String} sourceName
     * @param {Object} templateSource
     * @return {TemplateConfiguration}
     */
    public get(sourceName : string, templateSource : any) : TemplateConfiguration {
        if(this.matcher.matches(sourceName, templateSource)) {
            if(this.templateConfigurationFactory != null) {
                return this.templateConfigurationFactory.get(sourceName, templateSource);
            } else {
                return this.templateConfiguration;
            }
        } else {
            return null;
        }
    }

    /**
     * 
     * @param {Configuration} cfg
     */
    setConfigurationOfChildren(cfg : Configuration) {
        if(this.templateConfiguration != null) {
            this.templateConfiguration.setParentConfiguration(cfg);
        }
        if(this.templateConfigurationFactory != null) {
            this.templateConfigurationFactory.setConfiguration(cfg);
        }
    }
}
ConditionalTemplateConfigurationFactory["__class"] = "freemarker.cache.ConditionalTemplateConfigurationFactory";



