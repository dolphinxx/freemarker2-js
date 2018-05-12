/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Reader } from '../../java/io/Reader';
import { NullArgumentException } from '../template/utility/NullArgumentException';
import { TemplateLoader } from './TemplateLoader';
import { StringBuilder } from '../../java/lang/StringBuilder';
import {Map} from "../../java/util/Map";

/**
 * Creates a new instance that will use the specified template loaders.
 * 
 * @param {Array} templateLoaders
 * the template loaders that are used to load templates, in the order as they will be searched
 * (except where {@linkplain #setSticky(boolean) stickiness} says otherwise).
 * @class
 */
export class MultiTemplateLoader implements TemplateLoader {
    /*private*/ templateLoaders : TemplateLoader[];

    /*private*/ lastTemplateLoaderForName : Map = <any>(<Map<string, TemplateLoader>>new Map<string, TemplateLoader>());

    /*private*/ sticky : boolean = true;

    public constructor(templateLoaders : TemplateLoader[]) {
        if(this.templateLoaders===undefined) this.templateLoaders = null;
        NullArgumentException.check$java_lang_String$java_lang_Object("templateLoaders", templateLoaders);
        this.templateLoaders = /* clone */templateLoaders.slice(0);
    }

    public findTemplateSource(name : string) : any {
        let lastTemplateLoader : TemplateLoader = null;
        if(this.sticky) {
            lastTemplateLoader = /* get */this.lastTemplateLoaderForName.get(name);
            if(lastTemplateLoader != null) {
                let source : any = lastTemplateLoader.findTemplateSource(name);
                if(source != null) {
                    return new MultiTemplateLoader.MultiSource(source, lastTemplateLoader);
                }
            }
        }
        for(let index128=0; index128 < this.templateLoaders.length; index128++) {
            let templateLoader = this.templateLoaders[index128];
            {
                if(lastTemplateLoader !== templateLoader) {
                    let source : any = templateLoader.findTemplateSource(name);
                    if(source != null) {
                        if(this.sticky) {
                            /* put */this.lastTemplateLoaderForName.set(name, templateLoader);
                        }
                        return new MultiTemplateLoader.MultiSource(source, templateLoader);
                    }
                }
            }
        }
        if(this.sticky) {
            /* remove */this.lastTemplateLoaderForName.delete(name);
        }
        return null;
    }

    public getLastModified(templateSource : any) : number {
        return (<MultiTemplateLoader.MultiSource>templateSource).getLastModified();
    }

    public getReader(templateSource : any, encoding : string) : Reader {
        return (<MultiTemplateLoader.MultiSource>templateSource).getReader(encoding);
    }

    public closeTemplateSource(templateSource : any) {
        (<MultiTemplateLoader.MultiSource>templateSource).close();
    }

    // /**
    //  * Clears the sickiness memory, also resets the state of all enclosed {@link StatefulTemplateLoader}-s.
    //  */
    // public resetState() {
    //     /* clear */(<any>this.lastTemplateLoaderForName).clear();
    //     for(let index129=0; index129 < this.templateLoaders.length; index129++) {
    //         let loader = this.templateLoaders[index129];
    //         {
    //             if(loader != null && (loader["__interfaces"] != null && loader["__interfaces"].indexOf("freemarker.cache.StatefulTemplateLoader") >= 0 || loader.constructor != null && loader.constructor["__interfaces"] != null && loader.constructor["__interfaces"].indexOf("freemarker.cache.StatefulTemplateLoader") >= 0)) {
    //                 (<StatefulTemplateLoader><any>loader).resetState();
    //             }
    //         }
    //     }
    // }

    /**
     * Show class name and some details that are useful in template-not-found errors.
     * 
     * @since 2.3.21
     * @return {String}
     */
    public toString() : string {
        let sb : StringBuilder = new StringBuilder("");
        sb.append("MultiTemplateLoader(");
        for(let i : number = 0; i < this.templateLoaders.length; i++) {
            if(i !== 0) {
                sb.append(", ");
            }
            sb.append("loader").append(i + 1).append(" = ").append(this.templateLoaders[i]);
        }
        sb.append(")");
        return sb.toString();
    }

    /**
     * Returns the number of {@link TemplateLoader}-s directly inside this {@link TemplateLoader}.
     * 
     * @since 2.3.23
     * @return {number}
     */
    public getTemplateLoaderCount() : number {
        return this.templateLoaders.length;
    }

    /**
     * Returns the {@link TemplateLoader} at the given index.
     * 
     * @param {number} index
     * Must be below {@link #getTemplateLoaderCount()}.
     * @return {*}
     */
    public getTemplateLoader(index : number) : TemplateLoader {
        return this.templateLoaders[index];
    }

    /**
     * Getter pair of {@link #setSticky(boolean)}.
     * 
     * @since 2.3.24
     * @return {boolean}
     */
    public isSticky() : boolean {
        return this.sticky;
    }

    /**
     * Sets if for a name that was already loaded earlier the same {@link TemplateLoader} will be tried first, or
     * we always try the {@link TemplateLoader}-s strictly in the order as it was specified in the constructor.
     * The default is {@code true}.
     * 
     * @since 2.3.24
     * @param {boolean} sticky
     */
    public setSticky(sticky : boolean) {
        this.sticky = sticky;
    }
}
MultiTemplateLoader["__class"] = "freemarker.cache.MultiTemplateLoader";
MultiTemplateLoader["__interfaces"] = ["freemarker.cache.StatefulTemplateLoader","freemarker.cache.TemplateLoader"];



export namespace MultiTemplateLoader {

    /**
     * Represents a template source bound to a specific template loader. It serves as the complete template source
     * descriptor used by the MultiTemplateLoader class.
     * @class
     */
    export class MultiSource {
        source : any;

        loader : TemplateLoader;

        constructor(source : any, loader : TemplateLoader) {
            if(this.source===undefined) this.source = null;
            if(this.loader===undefined) this.loader = null;
            this.source = source;
            this.loader = loader;
        }

        getLastModified() : number {
            return this.loader.getLastModified(this.source);
        }

        getReader(encoding : string) : Reader {
            return this.loader.getReader(this.source, encoding);
        }

        close() {
            this.loader.closeTemplateSource(this.source);
        }

        getWrappedSource() : any {
            return this.source;
        }

        /**
         * 
         * @param {Object} o
         * @return {boolean}
         */
        public equals(o : any) : boolean {
            if(o != null && o instanceof <any>MultiTemplateLoader.MultiSource) {
                let m : MultiTemplateLoader.MultiSource = <MultiTemplateLoader.MultiSource>o;
                return /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(m.loader,this.loader)) && /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(m.source,this.source));
            }
            return false;
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.loader)) + 31 * /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.source));
        }

        /**
         * 
         * @return {String}
         */
        public toString() : string {
            return this.source.toString();
        }
    }
    MultiSource["__class"] = "freemarker.cache.MultiTemplateLoader.MultiSource";

}



