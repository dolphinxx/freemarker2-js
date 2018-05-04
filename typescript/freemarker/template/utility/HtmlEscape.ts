/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateTransformModel } from '../TemplateTransformModel';
import { Writer } from '../../../java/io/Writer';

/**
 * Performs an HTML escape of a given template fragment. Specifically,
 * &lt; &gt; &quot; and &amp; are all turned into entities.
 * 
 * <p>Usage:<br>
 * From java:</p>
 * <pre>
 * SimpleHash root = new SimpleHash();
 * 
 * root.put( "htmlEscape", new freemarker.template.utility.HtmlEscape() );
 * 
 * ...
 * </pre>
 * 
 * <p>From your FreeMarker template:</p>
 * <pre>
 * 
 * The following is HTML-escaped:
 * &lt;transform htmlEscape&gt;
 * &lt;p&gt;This paragraph has all HTML special characters escaped.&lt;/p&gt;
 * &lt;/transform&gt;
 * 
 * ...
 * </pre>
 * <p>
 * see freemarker.template.utility.XmlEscape
 * @class
 */
export class HtmlEscape implements TemplateTransformModel {
    static LT : string[]; public static LT_$LI$() : string[] { if(HtmlEscape.LT == null) HtmlEscape.LT = /* toCharArray */("&lt;").split(''); return HtmlEscape.LT; };

    static GT : string[]; public static GT_$LI$() : string[] { if(HtmlEscape.GT == null) HtmlEscape.GT = /* toCharArray */("&gt;").split(''); return HtmlEscape.GT; };

    static AMP : string[]; public static AMP_$LI$() : string[] { if(HtmlEscape.AMP == null) HtmlEscape.AMP = /* toCharArray */("&amp;").split(''); return HtmlEscape.AMP; };

    static QUOT : string[]; public static QUOT_$LI$() : string[] { if(HtmlEscape.QUOT == null) HtmlEscape.QUOT = /* toCharArray */("&quot;").split(''); return HtmlEscape.QUOT; };

    public getWriter(out : Writer, args : Map<any, any>) : Writer {
        return new HtmlEscape.HtmlEscape$0(this, out);
    }

    constructor() {
    }
}
HtmlEscape["__class"] = "freemarker.template.utility.HtmlEscape";
HtmlEscape["__interfaces"] = ["freemarker.template.TemplateTransformModel","freemarker.template.TemplateModel"];



export namespace HtmlEscape {

    export class HtmlEscape$0 {
        public __parent: any;
        public write$int(c : number) {
            switch((c)) {
            case 60 /* '<' */:
                this.out.write(HtmlEscape.LT_$LI$(), 0, 4);
                break;
            case 62 /* '>' */:
                this.out.write(HtmlEscape.GT_$LI$(), 0, 4);
                break;
            case 38 /* '&' */:
                this.out.write(HtmlEscape.AMP_$LI$(), 0, 5);
                break;
            case 34 /* '\"' */:
                this.out.write(HtmlEscape.QUOT_$LI$(), 0, 6);
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
                    this.out.write(HtmlEscape.LT_$LI$(), 0, 4);
                    lastoff = i + 1;
                    break;
                case 62 /* '>' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(HtmlEscape.GT_$LI$(), 0, 4);
                    lastoff = i + 1;
                    break;
                case 38 /* '&' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(HtmlEscape.AMP_$LI$(), 0, 5);
                    lastoff = i + 1;
                    break;
                case 34 /* '\"' */:
                    this.out.write(cbuf, lastoff, i - lastoff);
                    this.out.write(HtmlEscape.QUOT_$LI$(), 0, 6);
                    lastoff = i + 1;
                    break;
                }
            };
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
    HtmlEscape$0["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];


}



var __Function = Function;

HtmlEscape.QUOT_$LI$();

HtmlEscape.AMP_$LI$();

HtmlEscape.GT_$LI$();

HtmlEscape.LT_$LI$();
