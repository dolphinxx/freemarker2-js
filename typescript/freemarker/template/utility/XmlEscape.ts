/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateTransformModel} from '../TemplateTransformModel';
import {Writer} from '../../../java/io/Writer';

/**
 * Performs an XML escaping of a given template fragment. Specifically,
 * <tt>&lt;</tt> <tt>&gt;</tt> <tt>&quot;</tt> <tt>'</tt> and <tt>&amp;</tt> are all turned into entity references.
 * 
 * <p>An instance of this transform is initially visible as shared
 * variable called <tt>xml_escape</tt>.</p>
 * @class
 */
export class XmlEscape implements TemplateTransformModel {
    static LT : string[]; public static LT_$LI$() : string[] { if(XmlEscape.LT == null) XmlEscape.LT = /* toCharArray */("&lt;").split(''); return XmlEscape.LT; };

    static GT : string[]; public static GT_$LI$() : string[] { if(XmlEscape.GT == null) XmlEscape.GT = /* toCharArray */("&gt;").split(''); return XmlEscape.GT; };

    static AMP : string[]; public static AMP_$LI$() : string[] { if(XmlEscape.AMP == null) XmlEscape.AMP = /* toCharArray */("&amp;").split(''); return XmlEscape.AMP; };

    static QUOT : string[]; public static QUOT_$LI$() : string[] { if(XmlEscape.QUOT == null) XmlEscape.QUOT = /* toCharArray */("&quot;").split(''); return XmlEscape.QUOT; };

    static APOS : string[]; public static APOS_$LI$() : string[] { if(XmlEscape.APOS == null) XmlEscape.APOS = /* toCharArray */("&apos;").split(''); return XmlEscape.APOS; };

    public getWriter(out : Writer, args : Map<any, any>) : Writer {
        return new XmlEscape.XmlEscape$0(this, out);
    }

    constructor() {
    }
}
XmlEscape["__class"] = "freemarker.template.utility.XmlEscape";
XmlEscape["__interfaces"] = ["freemarker.template.TemplateTransformModel","freemarker.template.TemplateModel"];



export namespace XmlEscape {

    export class XmlEscape$0 {
        public __parent: any;
        public write$int(c : number) {
            switch((c)) {
            case 60 /* '<' */:
                this.out.write(XmlEscape.LT_$LI$(), 0, 4);
                break;
            case 62 /* '>' */:
                this.out.write(XmlEscape.GT_$LI$(), 0, 4);
                break;
            case 38 /* '&' */:
                this.out.write(XmlEscape.AMP_$LI$(), 0, 5);
                break;
            case 34 /* '\"' */:
                this.out.write(XmlEscape.QUOT_$LI$(), 0, 6);
                break;
            case 39 /* '\'' */:
                this.out.write(XmlEscape.APOS_$LI$(), 0, 6);
                break;
            default:
                this.out.write(c);
            }
        }

        public write$char_A$int$int(cbuf : string[], off : number, len : number) {
            let lastoff : number = off;
            let lastpos : number = off + len;
            for(let i : number = off; i < lastpos; i++) {
                switch((cbuf[i]).charCodeAt(0)) {
                case 60 /* '<' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(XmlEscape.LT_$LI$(), 0, 4);
                    lastoff = i + 1;
                    break;
                case 62 /* '>' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(XmlEscape.GT_$LI$(), 0, 4);
                    lastoff = i + 1;
                    break;
                case 38 /* '&' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(XmlEscape.AMP_$LI$(), 0, 5);
                    lastoff = i + 1;
                    break;
                case 34 /* '\"' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(XmlEscape.QUOT_$LI$(), 0, 6);
                    lastoff = i + 1;
                    break;
                case 39 /* '\'' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(XmlEscape.APOS_$LI$(), 0, 6);
                    lastoff = i + 1;
                    break;
                }
            }
            let remaining : number = lastpos - lastoff;
            if(remaining > 0) {
                this.out.write(cbuf, lastoff, remaining);
            }
        }

        /**
         * 
         * @param {Array} cbuf
         * @param {number} off
         * @param {number} len
         */
        public write(cbuf? : any, off? : any, len? : any) : any {
            if(((cbuf != null && cbuf instanceof <any>Array && (cbuf.length==0 || cbuf[0] == null ||(typeof cbuf[0] === 'string'))) || cbuf === null) && ((typeof off === 'number') || off === null) && ((typeof len === 'number') || len === null)) {
                return <any>this.write$char_A$int$int(cbuf, off, len);
            } else if(((typeof cbuf === 'number') || cbuf === null) && off === undefined && len === undefined) {
                return <any>this.write$int(cbuf);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         */
        public flush() {
            this.out.flush();
        }

        /**
         * 
         */
        public close() {
        }

        constructor(__parent: any, private out: any) {
            this.__parent = __parent;
        }
    }
    XmlEscape$0["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];


}





XmlEscape.APOS_$LI$();

XmlEscape.QUOT_$LI$();

XmlEscape.AMP_$LI$();

XmlEscape.GT_$LI$();

XmlEscape.LT_$LI$();
