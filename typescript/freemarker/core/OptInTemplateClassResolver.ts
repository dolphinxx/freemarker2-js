/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Template } from '../template/Template';
import { TemplateException } from '../template/TemplateException';
import { ClassUtil } from '../template/utility/ClassUtil';
import { StringUtil } from '../template/utility/StringUtil';
import { TemplateClassResolver } from './TemplateClassResolver';
import { Environment } from './Environment';
import { _MiscTemplateException } from './_MiscTemplateException';
import { Configurable } from './Configurable';

/**
 * Creates a new instance.
 * 
 * @param {Set} allowedClasses   the {link Set} of {link String}-s that contains
 * the full-qualified names of the allowed classes.
 * Can be <code>null</code> (means not class is allowed).
 * @param {List} trustedTemplates the {link List} of {link String}-s that contains
 * template names (i.e., template root directory relative paths)
 * and prefix patterns (like <code>"include/*"</code>) of templates
 * for which {link TemplateClassResolver#SAFER_RESOLVER} will be
 * used (which is not as safe as {link OptInTemplateClassResolver}).
 * The list items need not start with <code>"/"</code> (if they are, it
 * will be removed). List items ending with <code>"*"</code> are treated
 * as prefixes (i.e. <code>"foo*"</code> matches <code>"foobar"</code>,
 * <code>"foo/bar/baaz"</code>, <code>"foowhatever/bar/baaz"</code>,
 * etc.). The <code>"*"</code> has no special meaning anywhere else.
 * The matched template name is the name (template root directory
 * relative path) of the template that directly (lexically) contains the
 * operation (like <code>?new</code>) that wants to get the class. Thus,
 * if a trusted template includes a non-trusted template, the
 * <code>allowedClasses</code> restriction will apply in the included
 * template.
 * This parameter can be <code>null</code> (means no trusted templates).
 * @class
 */
export class OptInTemplateClassResolver implements TemplateClassResolver {
    /*private*/ allowedClasses : Array<any>;

    /*private*/ trustedTemplatePrefixes : Array<any>;

    /*private*/ trustedTemplateNames : Array<any>;

    public constructor(allowedClasses : Array<any>, trustedTemplates : Array<any>) {
        if(this.allowedClasses===undefined) this.allowedClasses = null;
        if(this.trustedTemplatePrefixes===undefined) this.trustedTemplatePrefixes = null;
        if(this.trustedTemplateNames===undefined) this.trustedTemplateNames = null;
        this.allowedClasses = allowedClasses != null?allowedClasses:Collections.EMPTY_SET;
        if(trustedTemplates != null) {
            this.trustedTemplateNames = <any>([]);
            this.trustedTemplatePrefixes = <any>([]);
            let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(trustedTemplates);
            while((it.hasNext())) {
                let li : string = <string>it.next();
                if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(li, "/")) li = li.substring(1);
                if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(li, "*")) {
                    /* add */(this.trustedTemplatePrefixes.push(li.substring(0, li.length - 1))>0);
                } else {
                    /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(this.trustedTemplateNames, li);
                }
            };
        } else {
            this.trustedTemplateNames = Collections.EMPTY_SET;
            this.trustedTemplatePrefixes = Collections.EMPTY_LIST;
        }
    }

    public resolve(className : string, env : Environment, template : Template) : any {
        let templateName : string = this.safeGetTemplateName(template);
        if(templateName != null && (/* contains */(this.trustedTemplateNames.indexOf(<any>(templateName)) >= 0) || this.hasMatchingPrefix(templateName))) {
            return TemplateClassResolver.SAFER_RESOLVER.resolve(className, env, template);
        } else {
            if(!/* contains */(this.allowedClasses.indexOf(<any>(className)) >= 0)) {
                throw new _MiscTemplateException(env, "Instantiating ", className, " is not allowed in the template for security reasons. (If you run into this problem when using ?new in a template, you may want to check the \"", Configurable.NEW_BUILTIN_CLASS_RESOLVER_KEY_$LI$(), "\" setting in the FreeMarker configuration.)");
            } else {
                try {
                    return ClassUtil.forName(className);
                } catch(e) {
                    throw new _MiscTemplateException(e, env);
                };
            }
        }
    }

    /**
     * Extract the template name from the template object which will be matched
     * against the trusted template names and pattern.
     * @param {Template} template
     * @return {String}
     */
    safeGetTemplateName(template : Template) : string {
        if(template == null) return null;
        let name : string = template.getName();
        if(name == null) return null;
        let decodedName : string = name;
        if(decodedName.indexOf('%') !== -1) {
            decodedName = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(decodedName, "%2e", ".", false, false);
            decodedName = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(decodedName, "%2E", ".", false, false);
            decodedName = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(decodedName, "%2f", "/", false, false);
            decodedName = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(decodedName, "%2F", "/", false, false);
            decodedName = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(decodedName, "%5c", "\\", false, false);
            decodedName = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(decodedName, "%5C", "\\", false, false);
        }
        let dotDotIdx : number = decodedName.indexOf("..");
        if(dotDotIdx !== -1) {
            let before : number = dotDotIdx - 1 >= 0?(decodedName.charAt(dotDotIdx - 1)).charCodeAt(0):-1;
            let after : number = dotDotIdx + 2 < decodedName.length?(decodedName.charAt(dotDotIdx + 2)).charCodeAt(0):-1;
            if((before === -1 || before == '/'.charCodeAt(0) || before == '\\'.charCodeAt(0)) && (after === -1 || after == '/'.charCodeAt(0) || after == '\\'.charCodeAt(0))) {
                return null;
            }
        }
        return /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(name, "/")?name.substring(1):name;
    }

    /*private*/ hasMatchingPrefix(name : string) : boolean {
        for(let i : number = 0; i < /* size */(<number>this.trustedTemplatePrefixes.length); i++) {
            let prefix : string = <string>/* get */this.trustedTemplatePrefixes[i];
            if(/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(name, prefix)) return true;
        };
        return false;
    }
}
OptInTemplateClassResolver["__class"] = "freemarker.core.OptInTemplateClassResolver";
OptInTemplateClassResolver["__interfaces"] = ["freemarker.core.TemplateClassResolver"];




var __Function = Function;
