/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { MalformedTemplateNameException } from '../template/MalformedTemplateNameException';
import { TemplateNameFormat } from './TemplateNameFormat';

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * This class is to work around the lack of module system in Java, i.e., so that other FreeMarker packages can
 * access things inside this package that users shouldn't.
 * @class
 */
export class _CacheAPI {
    constructor() {
    }

    public static toRootBasedName(templateNameFormat : TemplateNameFormat, baseName : string, targetName : string) : string {
        return templateNameFormat.toRootBasedName(baseName, targetName);
    }

    public static normalizeRootBasedName(templateNameFormat : TemplateNameFormat, name : string) : string {
        return templateNameFormat.normalizeRootBasedName(name);
    }

    public static rootBasedNameToAbsoluteName(templateNameFormat : TemplateNameFormat, rootBasedName : string) : string {
        return templateNameFormat.rootBasedNameToAbsoluteName(rootBasedName);
    }
}
_CacheAPI["__class"] = "freemarker.cache._CacheAPI";



