/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Logger } from '../log/Logger';
import { SecurityUtilities } from '../template/utility/SecurityUtilities';
import { StringUtil } from '../template/utility/StringUtil';
import { InputStreamReader } from '../../java/io/InputStreamReader';
import { Reader } from '../../java/io/Reader';
import { TemplateLoader } from './TemplateLoader';
import { MruCacheStorage } from './MruCacheStorage';
import { Boolean } from '../../java/lang/Boolean';
import { TemplateLoaderUtils } from './TemplateLoaderUtils';

/**
 * Creates a new file template loader that will use the specified directory as the base directory for loading
 * templates. See the parameters for allowing symlinks that point outside the base directory.
 * 
 * @param {File} baseDir                   the base directory for loading templates
 * @param {boolean} disableCanonicalPathCheck If {@code true}, it will not check if the file to be loaded is inside the {@code baseDir} or not,
 * according the <em>canonical</em> paths of the {@code baseDir} and the file to load. Note that
 * {link Configuration#getTemplate(String)} and (its overloads) already prevents backing out from the
 * template directory with paths like {@code /../../../etc/password}, however, that can be circumvented
 * with symbolic links or other file system features. If you really want to use symbolic links that point
 * outside the {@code baseDir}, set this parameter to {@code true}, but then be very careful with
 * template paths that are supplied by the visitor or an external system.
 * @class
 */
export class FileTemplateLoader implements TemplateLoader {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!FileTemplateLoader.__static_initialized) { FileTemplateLoader.__static_initialized = true; FileTemplateLoader.__static_initializer_0(); } }

    /**
     * By setting this Java system property to {@code true}, you can change the default of
     * {@code #getEmulateCaseSensitiveFileSystem()}.
     */
    public static SYSTEM_PROPERTY_NAME_EMULATE_CASE_SENSITIVE_FILE_SYSTEM : string = "org.freemarker.emulateCaseSensitiveFileSystem";

    static EMULATE_CASE_SENSITIVE_FILE_SYSTEM_DEFAULT : boolean; public static EMULATE_CASE_SENSITIVE_FILE_SYSTEM_DEFAULT_$LI$() : boolean { FileTemplateLoader.__static_initialize(); return FileTemplateLoader.EMULATE_CASE_SENSITIVE_FILE_SYSTEM_DEFAULT; };

    static __static_initializer_0() {
        let s : string = SecurityUtilities.getSystemProperty(FileTemplateLoader.SYSTEM_PROPERTY_NAME_EMULATE_CASE_SENSITIVE_FILE_SYSTEM, "false");
        let emuCaseSensFS : boolean;
        try {
            emuCaseSensFS = StringUtil.getYesNo(s);
        } catch(e) {
            emuCaseSensFS = false;
        };
        FileTemplateLoader.EMULATE_CASE_SENSITIVE_FILE_SYSTEM_DEFAULT = emuCaseSensFS;
    }

    static CASE_CHECH_CACHE_HARD_SIZE : number = 50;

    static CASE_CHECK_CACHE__SOFT_SIZE : number = 1000;

    static SEP_IS_SLASH : boolean; public static SEP_IS_SLASH_$LI$() : boolean { FileTemplateLoader.__static_initialize(); if(FileTemplateLoader.SEP_IS_SLASH == null) FileTemplateLoader.SEP_IS_SLASH = (c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(File.separatorChar) == '/'.charCodeAt(0); return FileTemplateLoader.SEP_IS_SLASH; };

    static LOG : Logger; public static LOG_$LI$() : Logger { FileTemplateLoader.__static_initialize(); if(FileTemplateLoader.LOG == null) FileTemplateLoader.LOG = Logger.getLogger("freemarker.cache"); return FileTemplateLoader.LOG; };

    public baseDir : File;

    /*private*/ canonicalBasePath : string;

    /*private*/ emulateCaseSensitiveFileSystem : boolean;

    /*private*/ correctCasePaths : MruCacheStorage;

    public constructor(baseDir? : any, disableCanonicalPathCheck? : any) {
        if(((baseDir != null && baseDir instanceof <any>File) || baseDir === null) && ((typeof disableCanonicalPathCheck === 'boolean') || disableCanonicalPathCheck === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.baseDir===undefined) this.baseDir = null;
            if(this.canonicalBasePath===undefined) this.canonicalBasePath = null;
            if(this.emulateCaseSensitiveFileSystem===undefined) this.emulateCaseSensitiveFileSystem = false;
            if(this.correctCasePaths===undefined) this.correctCasePaths = null;
            if(this.baseDir===undefined) this.baseDir = null;
            if(this.canonicalBasePath===undefined) this.canonicalBasePath = null;
            if(this.emulateCaseSensitiveFileSystem===undefined) this.emulateCaseSensitiveFileSystem = false;
            if(this.correctCasePaths===undefined) this.correctCasePaths = null;
            (() => {
                try {
                    let retval : Array<any> = <any>(AccessController.doPrivileged<any>(new FileTemplateLoader.FileTemplateLoader$0(this, baseDir, disableCanonicalPathCheck)));
                    this.baseDir = <File>retval[0];
                    this.canonicalBasePath = <string>retval[1];
                    this.setEmulateCaseSensitiveFileSystem(this.getEmulateCaseSensitiveFileSystemDefault());
                } catch(e) {
                    throw <Error>e.getException();
                };
            })();
        } else if(((baseDir != null && baseDir instanceof <any>File) || baseDir === null) && disableCanonicalPathCheck === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let disableCanonicalPathCheck : any = false;
                if(this.baseDir===undefined) this.baseDir = null;
                if(this.canonicalBasePath===undefined) this.canonicalBasePath = null;
                if(this.emulateCaseSensitiveFileSystem===undefined) this.emulateCaseSensitiveFileSystem = false;
                if(this.correctCasePaths===undefined) this.correctCasePaths = null;
                if(this.baseDir===undefined) this.baseDir = null;
                if(this.canonicalBasePath===undefined) this.canonicalBasePath = null;
                if(this.emulateCaseSensitiveFileSystem===undefined) this.emulateCaseSensitiveFileSystem = false;
                if(this.correctCasePaths===undefined) this.correctCasePaths = null;
                (() => {
                    try {
                        let retval : Array<any> = <any>(AccessController.doPrivileged<any>(new FileTemplateLoader.FileTemplateLoader$0(this, baseDir, disableCanonicalPathCheck)));
                        this.baseDir = <File>retval[0];
                        this.canonicalBasePath = <string>retval[1];
                        this.setEmulateCaseSensitiveFileSystem(this.getEmulateCaseSensitiveFileSystemDefault());
                    } catch(e) {
                        throw <Error>e.getException();
                    };
                })();
            }
        } else if(baseDir === undefined && disableCanonicalPathCheck === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let baseDir : any = new File(SecurityUtilities.getSystemProperty$java_lang_String("user.dir"));
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let disableCanonicalPathCheck : any = false;
                    if(this.baseDir===undefined) this.baseDir = null;
                    if(this.canonicalBasePath===undefined) this.canonicalBasePath = null;
                    if(this.emulateCaseSensitiveFileSystem===undefined) this.emulateCaseSensitiveFileSystem = false;
                    if(this.correctCasePaths===undefined) this.correctCasePaths = null;
                    if(this.baseDir===undefined) this.baseDir = null;
                    if(this.canonicalBasePath===undefined) this.canonicalBasePath = null;
                    if(this.emulateCaseSensitiveFileSystem===undefined) this.emulateCaseSensitiveFileSystem = false;
                    if(this.correctCasePaths===undefined) this.correctCasePaths = null;
                    (() => {
                        try {
                            let retval : Array<any> = <any>(AccessController.doPrivileged<any>(new FileTemplateLoader.FileTemplateLoader$0(this, baseDir, disableCanonicalPathCheck)));
                            this.baseDir = <File>retval[0];
                            this.canonicalBasePath = <string>retval[1];
                            this.setEmulateCaseSensitiveFileSystem(this.getEmulateCaseSensitiveFileSystemDefault());
                        } catch(e) {
                            throw <Error>e.getException();
                        };
                    })();
                }
            }
        } else throw new Error('invalid overload');
    }

    public findTemplateSource(name : string) : any {
        try {
            return <any>(AccessController.doPrivileged<any>(new FileTemplateLoader.FileTemplateLoader$1(this, name)));
        } catch(e) {
            throw <Error>e.getException();
        };
    }

    public getLastModified(templateSource : any) : number {
        return <any>(AccessController.doPrivileged<any>(new FileTemplateLoader.FileTemplateLoader$2(this, templateSource)));
    }

    public getReader(templateSource : any, encoding : string) : Reader {
        try {
            return <any>(AccessController.doPrivileged<any>(new FileTemplateLoader.FileTemplateLoader$3(this, templateSource, encoding)));
        } catch(e) {
            throw <Error>e.getException();
        };
    }

    /**
     * Called by {link #findTemplateSource(String)} when {link #getEmulateCaseSensitiveFileSystem()} is {@code true}.
     * @param {File} source
     * @return {boolean}
     * @private
     */
    /*private*/ isNameCaseCorrect(source : File) : boolean {
        let sourcePath : string = source.getPath();
        {
            if(this.correctCasePaths.get(sourcePath) != null) {
                return true;
            }
        };
        let parentDir : File = source.getParentFile();
        if(parentDir != null) {
            if(!this.baseDir.equals(parentDir) && !this.isNameCaseCorrect(parentDir)) {
                return false;
            }
            let listing : Array<any> = parentDir.list();
            if(listing != null) {
                let fileName : string = source.getName();
                let identicalNameFound : boolean = false;
                for(let i : number = 0; !identicalNameFound && i < listing.length; i++) {
                    if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(fileName,listing[i]))) {
                        identicalNameFound = true;
                    }
                };
                if(!identicalNameFound) {
                    for(let i : number = 0; i < listing.length; i++) {
                        let listingEntry : string = listing[i];
                        if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fileName, listingEntry)) {
                            if(FileTemplateLoader.LOG_$LI$().isDebugEnabled()) {
                                FileTemplateLoader.LOG_$LI$().debug$java_lang_String("Emulating file-not-found because of letter case differences to the real file, for: " + sourcePath);
                            }
                            return false;
                        }
                    };
                }
            }
        }
        {
            this.correctCasePaths.put(sourcePath, true);
        };
        return true;
    }

    public closeTemplateSource(templateSource : any) {
    }

    /**
     * Returns the base directory in which the templates are searched. This comes from the constructor argument, but
     * it's possibly a canonicalized version of that.
     * 
     * @since 2.3.21
     * @return {File}
     */
    public getBaseDirectory() : File {
        return this.baseDir;
    }

    /**
     * Intended for development only, checks if the template name matches the case (upper VS lower case letters) of the
     * actual file name, and if it doesn't, it emulates a file-not-found even if the file system is case insensitive.
     * This is useful when developing application on Windows, which will be later installed on Linux, OS X, etc. This
     * check can be resource intensive, as to check the file name the directories involved, up to the
     * {link #getBaseDirectory()} directory, must be listed. Positive results (matching case) will be cached without
     * expiration time.
     * 
     * <p>The default in {link FileTemplateLoader} is {@code false}, but subclasses may change they by overriding
     * {link #getEmulateCaseSensitiveFileSystemDefault()}.
     * 
     * @since 2.3.23
     * @param {boolean} nameCaseChecked
     */
    public setEmulateCaseSensitiveFileSystem(nameCaseChecked : boolean) {
        if(nameCaseChecked) {
            if(this.correctCasePaths == null) {
                this.correctCasePaths = new MruCacheStorage(FileTemplateLoader.CASE_CHECH_CACHE_HARD_SIZE, FileTemplateLoader.CASE_CHECK_CACHE__SOFT_SIZE);
            }
        } else {
            this.correctCasePaths = null;
        }
        this.emulateCaseSensitiveFileSystem = nameCaseChecked;
    }

    /**
     * Getter pair of {link #setEmulateCaseSensitiveFileSystem(boolean)}.
     * 
     * @since 2.3.23
     * @return {boolean}
     */
    public getEmulateCaseSensitiveFileSystem() : boolean {
        return this.emulateCaseSensitiveFileSystem;
    }

    /**
     * Returns the default of {link #getEmulateCaseSensitiveFileSystem()}. In {link FileTemplateLoader} it's
     * {@code false}, unless the {link #SYSTEM_PROPERTY_NAME_EMULATE_CASE_SENSITIVE_FILE_SYSTEM} system property was
     * set to {@code true}, but this can be overridden here in custom subclasses. For example, if your environment
     * defines something like developer mode, you may want to override this to return {@code true} on Windows.
     * 
     * @since 2.3.23
     * @return {boolean}
     */
    getEmulateCaseSensitiveFileSystemDefault() : boolean {
        return FileTemplateLoader.EMULATE_CASE_SENSITIVE_FILE_SYSTEM_DEFAULT_$LI$();
    }

    /**
     * Show class name and some details that are useful in template-not-found errors.
     * 
     * @since 2.3.21
     * @return {String}
     */
    public toString() : string {
        return TemplateLoaderUtils.getClassNameForToString(this) + "(baseDir=\"" + this.baseDir + "\"" + (this.canonicalBasePath != null?", canonicalBasePath=\"" + this.canonicalBasePath + "\"":"") + (this.emulateCaseSensitiveFileSystem?", emulateCaseSensitiveFileSystem=true":"") + ")";
    }
}
FileTemplateLoader["__class"] = "freemarker.cache.FileTemplateLoader";
FileTemplateLoader["__interfaces"] = ["freemarker.cache.TemplateLoader"];



export namespace FileTemplateLoader {

    export class FileTemplateLoader$0 {
        public __parent: any;
        public run() : Array {
            if(!this.baseDir.exists()) {
                throw Object.defineProperty(new Error(this.baseDir + " does not exist."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.io.IOException','java.lang.Object','java.io.FileNotFoundException','java.lang.Exception'] });
            }
            if(!this.baseDir.isDirectory()) {
                throw Object.defineProperty(new Error(this.baseDir + " is not a directory."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.io.IOException','java.lang.Object','java.lang.Exception'] });
            }
            let retval : Array<any> = [null, null];
            if(this.disableCanonicalPathCheck) {
                retval[0] = this.baseDir;
                retval[1] = null;
            } else {
                retval[0] = this.baseDir.getCanonicalFile();
                let basePath : string = (<File>retval[0]).getPath();
                if(!/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(basePath, File.separator)) {
                    basePath += File.separatorChar;
                }
                retval[1] = basePath;
            }
            return retval;
        }

        constructor(__parent: any, private baseDir: any, private disableCanonicalPathCheck: any) {
            this.__parent = __parent;
        }
    }
    FileTemplateLoader$0["__interfaces"] = ["java.security.PrivilegedExceptionAction"];



    export class FileTemplateLoader$1 {
        public __parent: any;
        public run() : File {
            let source : File = new File(this.__parent.baseDir, FileTemplateLoader.SEP_IS_SLASH_$LI$()?this.name:/* replace */this.name.split('/').join(File.separatorChar));
            if(!source.isFile()) {
                return null;
            }
            if(this.__parent.canonicalBasePath != null) {
                let normalized : string = source.getCanonicalPath();
                if(!/* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(normalized, this.__parent.canonicalBasePath)) {
                    throw Object.defineProperty(new Error(source.getAbsolutePath() + " resolves to " + normalized + " which  doesn\'t start with " + this.__parent.canonicalBasePath), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.SecurityException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
                }
            }
            if(this.__parent.emulateCaseSensitiveFileSystem && !this.__parent.isNameCaseCorrect(source)) {
                return null;
            }
            return source;
        }

        constructor(__parent: any, private name: any) {
            this.__parent = __parent;
        }
    }
    FileTemplateLoader$1["__interfaces"] = ["java.security.PrivilegedExceptionAction"];



    export class FileTemplateLoader$2 {
        public __parent: any;
        public run() : number {
            return (<File>this.templateSource).lastModified();
        }

        constructor(__parent: any, private templateSource: any) {
            this.__parent = __parent;
        }
    }
    FileTemplateLoader$2["__interfaces"] = ["java.security.PrivilegedAction"];



    export class FileTemplateLoader$3 {
        public __parent: any;
        public run() : Reader {
            if(!(this.templateSource != null && this.templateSource instanceof <any>File)) {
                throw Object.defineProperty(new Error("templateSource wasn\'t a File, but a: " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.templateSource.constructor))), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
            }
            return new InputStreamReader(new FileInputStream(<File>this.templateSource), this.encoding);
        }

        constructor(__parent: any, private templateSource: any, private encoding: any) {
            this.__parent = __parent;
        }
    }
    FileTemplateLoader$3["__interfaces"] = ["java.security.PrivilegedExceptionAction"];


}




FileTemplateLoader.LOG_$LI$();

FileTemplateLoader.SEP_IS_SLASH_$LI$();

FileTemplateLoader.EMULATE_CASE_SENSITIVE_FILE_SYSTEM_DEFAULT_$LI$();

FileTemplateLoader.__static_initialize();
