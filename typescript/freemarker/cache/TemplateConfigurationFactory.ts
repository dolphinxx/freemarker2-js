/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateConfiguration } from '../core/TemplateConfiguration';
import { Configuration } from '../template/Configuration';
import { TemplateConfigurationFactoryException } from './TemplateConfigurationFactoryException';

/**
 * Creates (or returns) {link TemplateConfiguration}-s for template sources.
 * 
 * @since 2.3.24
 * @class
 */
export abstract class TemplateConfigurationFactory {
    /*private*/ cfg : Configuration;

    /**
     * Returns (maybe creates) the {link TemplateConfiguration} for the given template source.
     * 
     * @param {String} sourceName     The name (path) that was used for {link TemplateLoader#findTemplateSource(String)}. See
     * {link Template#getSourceName()} for details.
     * @param {Object} templateSource The object returned by {link TemplateLoader#findTemplateSource(String)}.
     * @return {TemplateConfiguration} The {link TemplateConfiguration} to apply, or {@code null} if the there's no {link TemplateConfiguration} for
     * this template source.
     * @throws IOException                           Typically, if there factory needs further I/O to find out more about the template source, but that
     * fails.
     * @throws TemplateConfigurationFactoryException If there's a problem that's specific to the factory logic.
     */
    public abstract get(sourceName : string, templateSource : any) : TemplateConfiguration;

    /**
     * Binds this {link TemplateConfigurationFactory} to a {link Configuration}. Once it's bound, it can't be bound to
     * another {link Configuration} any more. This is automatically called by
     * {link Configuration#setTemplateConfigurations(TemplateConfigurationFactory)}.
     * @param {Configuration} cfg
     */
    public setConfiguration(cfg : Configuration) {
        if(this.cfg != null) {
            if(cfg !== this.cfg) {
                throw Object.defineProperty(new Error("The TemplateConfigurationFactory is already bound to another Configuration"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            }
            return;
        } else {
            this.cfg = cfg;
            this.setConfigurationOfChildren(cfg);
        }
    }

    /**
     * Returns the configuration this object belongs to, or {@code null} if it isn't yet bound to a
     * {link Configuration}.
     * @return {Configuration}
     */
    public getConfiguration() : Configuration {
        return this.cfg;
    }

    /**
     * Calls {link TemplateConfiguration#setParentConfiguration(Configuration)} on each enclosed
     * {link TemplateConfiguration} and {link TemplateConfigurationFactory#setConfiguration(Configuration)}
     * on each enclosed {link TemplateConfigurationFactory} objects. It only supposed to call these on the direct
     * "children" of this object, not on the children of the children.
     * @param {Configuration} cfg
     */
    abstract setConfigurationOfChildren(cfg : Configuration);

    constructor() {
        if(this.cfg===undefined) this.cfg = null;
    }
}
TemplateConfigurationFactory["__class"] = "freemarker.cache.TemplateConfigurationFactory";



