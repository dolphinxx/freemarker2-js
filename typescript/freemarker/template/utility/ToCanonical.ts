/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Configuration} from '../Configuration';
import {Template} from '../Template';

/**
 * Read in a template and convert it to a canonical format.
 * 
 * @deprecated Will be removed (main method in a library, often classified as CWE-489 "Leftover Debug Code").
 * @class
 */
export class ToCanonical {
    static config : Configuration; public static config_$LI$() : Configuration { if(ToCanonical.config == null) ToCanonical.config = Configuration.getDefaultConfiguration(); return ToCanonical.config; };

    /**
     * @deprecated Will be removed (main method in a library, often classified as CWE-489 "Leftover Debug Code").
     * @param {Array} args
     */
    public static main(args : Array<any>) {
        ToCanonical.config_$LI$().setWhitespaceStripping(false);
        if(args.length === 0) {
            ToCanonical.usage();
        }
        for(let i : number = 0; i < args.length; i++) {
            let f : File = new File(args[i]);
            if(!f.exists()) {
                console.error("File " + f + " doesn\'t exist.");
            }
            try {
                ToCanonical.convertFile(f);
            } catch(e) {
                console.error("Error converting file: " + f);
                console.error(e.message, e);
            }
        }
    }

    static convertFile(f : File) {
        let fullPath : File = f.getAbsoluteFile();
        let dir : File = fullPath.getParentFile();
        let filename : string = fullPath.getName();
        let convertedFile : File = new File(dir, filename + ".canonical");
        ToCanonical.config_$LI$().setDirectoryForTemplateLoading(dir);
        let template : Template = ToCanonical.config_$LI$().getTemplate$java_lang_String(filename);
        let output : FileWriter = new FileWriter(convertedFile);
        try {
            template.dump$java_io_Writer(output);
        } finally {
            output.close();
        }
    }

    static usage() {
        console.error("Usage: java freemarker.template.utility.ToCanonical <filename(s)>");
    }
}
ToCanonical["__class"] = "freemarker.template.utility.ToCanonical";





ToCanonical.config_$LI$();

ToCanonical.main(null);
