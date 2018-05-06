/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {StringUtil} from '../template/utility/StringUtil';
import {Reader} from '../../java/io/Reader';
import {StringReader} from '../../java/io/StringReader';
import {TemplateLoader} from './TemplateLoader';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {TemplateLoaderUtils} from './TemplateLoaderUtils';

/**
 * A {link TemplateLoader} that uses a {link Map} with {link String}-s as its source of
 * templates.
 * 
 * <p>In most case the regular way of loading templates from files will be fine.
 * However, there can be situations where you don't want to or can't load a
 * template from a file, e.g. if you have to deploy a single jar for
 * JavaWebStart or if they are contained within a database.
 * A single template can be created manually
 * e.g.
 * <pre>
 * String templateStr="Hello ${user}";
 * Template t = new Template("name", new StringReader(templateStr),
 * new Configuration());
 * </pre>
 * <p>If, however, you want to create templates from strings which import other
 * templates this method doesn't work.
 * 
 * <p>In that case you can create a StringTemplateLoader and add each template to
 * it:
 * <pre>
 * StringTemplateLoader stringLoader = new StringTemplateLoader();
 * stringLoader.putTemplate("greetTemplate", "&lt;#macro greet&gt;Hello&lt;/#macro&gt;");
 * stringLoader.putTemplate("myTemplate", "&lt;#include \"greetTemplate\"&gt;&lt;@greet/&gt; World!");
 * </pre>
 * <p>Then you tell your Configuration object to use it:
 * <pre>
 * cfg.setTemplateLoader(stringLoader);
 * </pre>
 * <p>After that you should be able to use the templates as usual. Often you will
 * want to combine a <tt>StringTemplateLoader</tt> with another loader. You can
 * do so using a {link freemarker.cache.MultiTemplateLoader}.
 * @class
 */
export class StringTemplateLoader implements TemplateLoader {
    /*private*/ templates : Map<any, any> = <any>(new Map<any, any>());

    public putTemplate$java_lang_String$java_lang_String(name : string, templateContent : string) {
        this.putTemplate$java_lang_String$java_lang_String$long(name, templateContent, /* currentTimeMillis */Date.now());
    }

    public putTemplate$java_lang_String$java_lang_String$long(name : string, templateContent : string, lastModified : number) {
        /* put */this.templates.set(name, new StringTemplateLoader.StringTemplateSource(name, templateContent, lastModified));
    }

    /**
     * Puts a template into the loader. The name can contain slashes to denote
     * logical directory structure, but must not start with a slash. If the
     * method is called multiple times for the same name and with different
     * last modified time, the configuration's template cache will reload the
     * template according to its own refresh settings (note that if the refresh
     * is disabled in the template cache, the template will not be reloaded).
     * Also, since the cache uses lastModified to trigger reloads, calling the
     * method with different source and identical timestamp won't trigger
     * reloading.
     * 
     * <p>Note that this method is not thread safe! Don't call it after FreeMarker has started using this template
     * loader.
     * 
     * @param {String} name            the name of the template.
     * @param {String} templateContent the source code of the template.
     * @param {number} lastModified    the time of last modification of the template in
     * terms of <tt>System.currentTimeMillis()</tt>
     */
    public putTemplate(name? : any, templateContent? : any, lastModified? : any) : any {
        if(((typeof name === 'string') || name === null) && ((typeof templateContent === 'string') || templateContent === null) && ((typeof lastModified === 'number') || lastModified === null)) {
            return <any>this.putTemplate$java_lang_String$java_lang_String$long(name, templateContent, lastModified);
        } else if(((typeof name === 'string') || name === null) && ((typeof templateContent === 'string') || templateContent === null) && lastModified === undefined) {
            return <any>this.putTemplate$java_lang_String$java_lang_String(name, templateContent);
        } else throw new Error('invalid overload');
    }

    /**
     * Removes the template with the specified name if it was added earlier.
     * 
     * <p>Note that this method is not thread safe! Don't call it after FreeMarker has started using this template
     * loader.
     * 
     * @param {String} name Exactly the key with which the template was added.
     * @return {boolean} Whether a template was found with the given key (and hence was removed now)
     * @since 2.3.24
     */
    public removeTemplate(name : string) : boolean {
        return /* remove */this.templates.delete(name) != null;
    }

    public closeTemplateSource(templateSource : any) {
    }

    public findTemplateSource(name : string) : any {
        return /* get */this.templates.get(name);
    }

    public getLastModified(templateSource : any) : number {
        return (<StringTemplateLoader.StringTemplateSource>templateSource).lastModified;
    }

    public getReader(templateSource : any, encoding : string) : Reader {
        return new StringReader((<StringTemplateLoader.StringTemplateSource>templateSource).templateContent);
    }

    /**
     * Show class name and some details that are useful in template-not-found errors.
     * 
     * @since 2.3.21
     * @return {String}
     */
    public toString() : string {
        let sb : StringBuilder = new StringBuilder("");
        sb.append(TemplateLoaderUtils.getClassNameForToString(this));
        sb.append("(Map { ");
        let cnt : number = 0;
        {
            let array128 = /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>this.templates);
            for(let index127=0; index127 < array128.length; index127++) {
                let name = array128[index127];
                {
                    cnt++;
                    if(cnt !== 1) {
                        sb.append(", ");
                    }
                    if(cnt > 10) {
                        sb.append("...");
                        break;
                    }
                    sb.append(StringUtil.jQuote$java_lang_Object(name));
                    sb.append("=...");
                }
            }
        }
        if(cnt !== 0) {
            sb.append(' ');
        }
        sb.append("})");
        return sb.toString();
    }

    constructor() {
    }
}
StringTemplateLoader["__class"] = "freemarker.cache.StringTemplateLoader";
StringTemplateLoader["__interfaces"] = ["freemarker.cache.TemplateLoader"];



export namespace StringTemplateLoader {

    export class StringTemplateSource {
        name : string;

        templateContent : string;

        lastModified : number;

        constructor(name : string, templateContent : string, lastModified : number) {
            if(this.name===undefined) this.name = null;
            if(this.templateContent===undefined) this.templateContent = null;
            if(this.lastModified===undefined) this.lastModified = 0;
            if(name == null) {
                throw Object.defineProperty(new Error("name == null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
            if(templateContent == null) {
                throw Object.defineProperty(new Error("source == null"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
            if(lastModified < -1) {
                throw Object.defineProperty(new Error("lastModified < -1L"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
            this.name = name;
            this.templateContent = templateContent;
            this.lastModified = lastModified;
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            let prime : number = 31;
            let result : number = 1;
            result = prime * result + ((this.name == null)?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.name)));
            return result;
        }

        /**
         * 
         * @param {Object} obj
         * @return {boolean}
         */
        public equals(obj : any) : boolean {
            if(this === obj) return true;
            if(obj == null) return false;
            if((<any>this.constructor) !== (<any>obj.constructor)) return false;
            let other : StringTemplateLoader.StringTemplateSource = <StringTemplateLoader.StringTemplateSource>obj;
            if(this.name == null) {
                return other.name == null;
            } else return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.name,other.name));
        }

        /**
         * 
         * @return {String}
         */
        public toString() : string {
            return this.name;
        }
    }
    StringTemplateSource["__class"] = "freemarker.cache.StringTemplateLoader.StringTemplateSource";

}



