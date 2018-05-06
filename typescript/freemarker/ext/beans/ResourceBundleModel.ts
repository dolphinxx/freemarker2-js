/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_DelayedJQuote} from '../../core/_DelayedJQuote';
import {_TemplateModelException} from '../../core/_TemplateModelException';
import {ModelFactory} from '../util/ModelFactory';
import {ObjectWrapper} from '../../template/ObjectWrapper';
import {TemplateMethodModelEx} from '../../template/TemplateMethodModelEx';
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelException} from '../../template/TemplateModelException';
import {BeanModel} from './BeanModel';
import {BeansWrapper} from './BeansWrapper';
import {StringModel} from './StringModel';

/**
 * <p>A hash model that wraps a resource bundle. Makes it convenient to store
 * localized content in the data model. It also acts as a method model that will
 * take a resource key and arbitrary number of arguments and will apply
 * {link MessageFormat} with arguments on the string represented by the key.</p>
 * 
 * <p>Typical usages:</p>
 * <ul>
 * <li><tt>bundle.resourceKey</tt> will retrieve the object from resource bundle
 * with key <tt>resourceKey</tt></li>
 * <li><tt>bundle("patternKey", arg1, arg2, arg3)</tt> will retrieve the string
 * from resource bundle with key <tt>patternKey</tt>, and will use it as a pattern
 * for MessageFormat with arguments arg1, arg2 and arg3</li>
 * </ul>
 * @param {ResourceBundle} bundle
 * @param {BeansWrapper} wrapper
 * @class
 * @extends BeanModel
 */
export class ResourceBundleModel extends BeanModel implements TemplateMethodModelEx {
    static FACTORY : ModelFactory; public static FACTORY_$LI$() : ModelFactory { if(ResourceBundleModel.FACTORY == null) ResourceBundleModel.FACTORY = new ResourceBundleModel.ResourceBundleModel$0(); return ResourceBundleModel.FACTORY; };

    /*private*/ formats : Map<any, any> = null;

    public constructor(bundle : ResourceBundle, wrapper : BeansWrapper) {
        super(bundle, wrapper);
    }

    /**
     * Overridden to invoke the getObject method of the resource bundle.
     * @param {Map} keyMap
     * @param {*} clazz
     * @param {String} key
     * @return {*}
     */
    invokeGenericGet(keyMap : Map<any, any>, clazz : any, key : string) : TemplateModel {
        try {
            return this.wrap((<ResourceBundle>this.object).getObject(key));
        } catch(e) {
            throw new _TemplateModelException(e, "No ", new _DelayedJQuote(key), " key in the ResourceBundle. Note that conforming to the ResourceBundle Java API, this is an error and not just a missing sub-variable (a null).");
        }
    }

    /**
     * Returns true if this bundle contains no objects.
     * @return {boolean}
     */
    public isEmpty() : boolean {
        return !(<ResourceBundle>this.object).getKeys().hasMoreElements() && super.isEmpty();
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return /* size */(<number>this.keySet().length);
    }

    /**
     * 
     * @return {Set}
     */
    keySet() : Array<any> {
        let set : Array<any> = super.keySet();
        let e : any = (<ResourceBundle>this.object).getKeys();
        while((e.hasMoreElements())) {
            /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(set, e.nextElement());
        }
        return set;
    }

    /**
     * Takes first argument as a resource key, looks up a string in resource bundle
     * with this key, then applies a MessageFormat.format on the string with the
     * rest of the arguments. The created MessageFormats are cached for later reuse.
     * @param {List} arguments
     * @return {Object}
     */
    public exec(__arguments : Array<any>) : any {
        if(/* size */(<number>__arguments.length) < 1) throw new TemplateModelException("No message key was specified");
        let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(__arguments);
        let key : string = this.unwrap(<TemplateModel><any>it.next()).toString();
        try {
            if(!it.hasNext()) {
                return this.wrap((<ResourceBundle>this.object).getObject(key));
            }
            let args : number = /* size */(<number>__arguments.length) - 1;
            let params : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(args);
            for(let i : number = 0; i < args; ++i) params[i] = this.unwrap(<TemplateModel><any>it.next());
            return new StringModel(this.format(key, params), this.wrapper);
        } catch(__e) {
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.util.MissingResourceException") >= 0)) {
                let e : Error = <Error>__e;
                throw new TemplateModelException("No such key: " + key);

            }
            if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
                let e : Error = <Error>__e;
                throw new TemplateModelException(e.message);

            }
        }
    }

    /**
     * Provides direct access to caching format engine from code (instead of from script).
     * @param {String} key
     * @param {Array} params
     * @return {String}
     */
    public format(key : string, params : Array) : string {
        {
            if(this.formats == null) this.formats = <any>(new Map<any, any>());
        }
        let format : MessageFormat = null;
        {
            format = <MessageFormat>/* get */this.formats.get(key);
            if(format == null) {
                format = new MessageFormat((<ResourceBundle>this.object).getString(key));
                format.setLocale(this.getBundle().getLocale());
                /* put */this.formats.set(key, format);
            }
        }
        {
            return format.format(params);
        }
    }

    public getBundle() : ResourceBundle {
        return <ResourceBundle>this.object;
    }
}
ResourceBundleModel["__class"] = "freemarker.ext.beans.ResourceBundleModel";
ResourceBundleModel["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateModelWithAPISupport","freemarker.template.TemplateHashModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel"];



export namespace ResourceBundleModel {

    export class ResourceBundleModel$0 implements ModelFactory {
        public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
            return new ResourceBundleModel(<ResourceBundle>object, <BeansWrapper><any>wrapper);
        }

        constructor() {
        }
    }
    ResourceBundleModel$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}





ResourceBundleModel.FACTORY_$LI$();
