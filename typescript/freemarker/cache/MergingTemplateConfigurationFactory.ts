/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateConfiguration } from '../core/TemplateConfiguration';
import { Configuration } from '../template/Configuration';
import { TemplateConfigurationFactory } from './TemplateConfigurationFactory';
import { TemplateConfigurationFactoryException } from './TemplateConfigurationFactoryException';

/**
 * Returns the merged results of all the child factories. The factories are merged in the order as they were added.
 * {@code null} results from the child factories will be ignored. If all child factories return {@code null}, the result
 * of this factory will be {@code null} too.
 * 
 * @since 2.3.24
 * @param {Array} templateConfigurationFactories
 * @class
 * @extends TemplateConfigurationFactory
 */
export class MergingTemplateConfigurationFactory extends TemplateConfigurationFactory {
    /*private*/ templateConfigurationFactories : TemplateConfigurationFactory[];

    public constructor(...templateConfigurationFactories : TemplateConfigurationFactory[]) {
        super();
        if(this.templateConfigurationFactories===undefined) this.templateConfigurationFactories = null;
        this.templateConfigurationFactories = templateConfigurationFactories;
    }

    /**
     * 
     * @param {String} sourceName
     * @param {Object} templateSource
     * @return {TemplateConfiguration}
     */
    public get(sourceName : string, templateSource : any) : TemplateConfiguration {
        let mergedTC : TemplateConfiguration = null;
        let resultTC : TemplateConfiguration = null;
        for(let index124=0; index124 < this.templateConfigurationFactories.length; index124++) {
            let tcf = this.templateConfigurationFactories[index124];
            {
                let tc : TemplateConfiguration = tcf.get(sourceName, templateSource);
                if(tc != null) {
                    if(resultTC == null) {
                        resultTC = tc;
                    } else {
                        if(mergedTC == null) {
                            let cfg : Configuration = this.getConfiguration();
                            if(cfg == null) {
                                throw Object.defineProperty(new Error("The TemplateConfigurationFactory wasn\'t associated to a Configuration yet."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                            }
                            mergedTC = new TemplateConfiguration();
                            mergedTC.setParentConfiguration(cfg);
                            mergedTC.merge(resultTC);
                            resultTC = mergedTC;
                        }
                        mergedTC.merge(tc);
                    }
                }
            }
        }
        return resultTC;
    }

    /**
     * 
     * @param {Configuration} cfg
     */
    setConfigurationOfChildren(cfg : Configuration) {
        for(let index125=0; index125 < this.templateConfigurationFactories.length; index125++) {
            let templateConfigurationFactory = this.templateConfigurationFactories[index125];
            {
                templateConfigurationFactory.setConfiguration(cfg);
            }
        }
    }
}
MergingTemplateConfigurationFactory["__class"] = "freemarker.cache.MergingTemplateConfigurationFactory";



