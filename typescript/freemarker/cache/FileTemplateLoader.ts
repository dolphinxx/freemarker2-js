/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Reader} from '../../java/io/Reader';
import {TemplateLoader} from './TemplateLoader';
import {TemplateLoaderUtils} from './TemplateLoaderUtils';
import {StringReader} from "../../java/io/StringReader";

const fs = require('fs');
const path = require('path');

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
    static DEFAULT_CHARSET: string = 'utf-8';

    public baseDir: string;

    public charset: string;

    public constructor(baseDir: string, charset?: string) {
        if (!fs.existsSync(baseDir)) {
            throw new Error(baseDir + " does not exist.");
        }
        if (!fs.statSync(baseDir).isDirectory()) {
            throw new Error(baseDir + " is not a directory.");
        }
        this.baseDir = baseDir;
        this.charset = charset || FileTemplateLoader.DEFAULT_CHARSET;
    }

    public findTemplateSource(name: string): string {
        let templateSource: string = path.resolve(this.baseDir, name);
        if (!fs.existsSync(templateSource)) {
            return null;
        }
        return templateSource;
    }

    public getLastModified(templateSource: any): number {
        if (!fs.existsSync(templateSource)) {
            return -1;
        }
        return fs.statSync(templateSource).mtimeMs;
    }

    public getReader(templateSource: any, encoding: string): Reader {
        // try {
        //     return <any>(AccessController.doPrivileged<any>(new FileTemplateLoader.FileTemplateLoader$3(this, templateSource, encoding)));
        // } catch(e) {
        //     throw <Error>e.getException();
        // };
        return new StringReader(fs.readFileSync(templateSource, {encoding: this.charset}));
    }

    /**
     * Called by {link #findTemplateSource(String)} when {link #getEmulateCaseSensitiveFileSystem()} is {@code true}.
     * @param {File} source
     * @return {boolean}
     * @private
     */

    /*private*/
    isNameCaseCorrect(source: File): boolean {
        // let sourcePath : string = source.getPath();
        // {
        //     if(this.correctCasePaths.get(sourcePath) != null) {
        //         return true;
        //     }
        // };
        // let parentDir : File = source.getParentFile();
        // if(parentDir != null) {
        //     if(!this.baseDir.equals(parentDir) && !this.isNameCaseCorrect(parentDir)) {
        //         return false;
        //     }
        //     let listing : Array<any> = parentDir.list();
        //     if(listing != null) {
        //         let fileName : string = source.getName();
        //         let identicalNameFound : boolean = false;
        //         for(let i : number = 0; !identicalNameFound && i < listing.length; i++) {
        //             if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(fileName,listing[i]))) {
        //                 identicalNameFound = true;
        //             }
        //         };
        //         if(!identicalNameFound) {
        //             for(let i : number = 0; i < listing.length; i++) {
        //                 let listingEntry : string = listing[i];
        //                 if(/* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))(fileName, listingEntry)) {
        //                     if(FileTemplateLoader.LOG_$LI$().isDebugEnabled()) {
        //                         FileTemplateLoader.LOG_$LI$().debug$java_lang_String("Emulating file-not-found because of letter case differences to the real file, for: " + sourcePath);
        //                     }
        //                     return false;
        //                 }
        //             };
        //         }
        //     }
        // }
        // {
        //     this.correctCasePaths.put(sourcePath, true);
        // };
        // return true;
        throw new Error();
    }

    public closeTemplateSource(templateSource: any) {
    }

    /**
     * Returns the base directory in which the templates are searched. This comes from the constructor argument, but
     * it's possibly a canonicalized version of that.
     *
     * @since 2.3.21
     * @return {File}
     */
    public getBaseDirectory(): string {
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
    public setEmulateCaseSensitiveFileSystem(nameCaseChecked: boolean) {
        // if(nameCaseChecked) {
        //     if(this.correctCasePaths == null) {
        //         this.correctCasePaths = new MruCacheStorage(FileTemplateLoader.CASE_CHECH_CACHE_HARD_SIZE, FileTemplateLoader.CASE_CHECK_CACHE__SOFT_SIZE);
        //     }
        // } else {
        //     this.correctCasePaths = null;
        // }
        // this.emulateCaseSensitiveFileSystem = nameCaseChecked;
    }

    /**
     * Getter pair of {link #setEmulateCaseSensitiveFileSystem(boolean)}.
     *
     * @since 2.3.23
     * @return {boolean}
     */
    public getEmulateCaseSensitiveFileSystem(): boolean {
        // return this.emulateCaseSensitiveFileSystem;
        return false;
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
    getEmulateCaseSensitiveFileSystemDefault(): boolean {
        // return FileTemplateLoader.EMULATE_CASE_SENSITIVE_FILE_SYSTEM_DEFAULT_$LI$();
        return false;
    }

    /**
     * Show class name and some details that are useful in template-not-found errors.
     *
     * @since 2.3.21
     * @return {String}
     */
    public toString(): string {
        return TemplateLoaderUtils.getClassNameForToString(this) + "(baseDir=\"" + this.baseDir + "\"" + ")";
    }
}

FileTemplateLoader["__class"] = "freemarker.cache.FileTemplateLoader";
FileTemplateLoader["__interfaces"] = ["freemarker.cache.TemplateLoader"];


export namespace FileTemplateLoader {
}