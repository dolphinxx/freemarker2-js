/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Configuration } from '../template/Configuration';
import { TemplateLoader } from './TemplateLoader';

export class TemplateLoaderUtils {
    constructor() {
    }

    public static getClassNameForToString(templateLoader : TemplateLoader) : string {
        let tlClass : any = (<any>templateLoader.constructor);
        let tlPackage : Package = tlClass.getPackage();
        return tlPackage === Configuration.getPackage() || tlPackage === "freemarker.cache.TemplateLoader".getPackage()?/* getSimpleName */(c => c["__class"]?c["__class"].substring(c["__class"].lastIndexOf('.')+1):c["name"].substring(c["name"].lastIndexOf('.')+1))(tlClass):/* getName */(c => c["__class"]?c["__class"]:c["name"])(tlClass);
    }
}
TemplateLoaderUtils["__class"] = "freemarker.cache.TemplateLoaderUtils";



