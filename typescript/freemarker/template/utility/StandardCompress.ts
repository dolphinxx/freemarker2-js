/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateBooleanModel } from '../TemplateBooleanModel';
import { TemplateModelException } from '../TemplateModelException';
import { TemplateNumberModel } from '../TemplateNumberModel';
import { TemplateTransformModel } from '../TemplateTransformModel';
import { Writer } from '../../../java/io/Writer';
import { Character } from '../../../java/lang/Character';

/**
 * @param {number} defaultBufferSize the default amount of characters to buffer
 * @class
 */
export class StandardCompress implements TemplateTransformModel {
    static BUFFER_SIZE_KEY : string = "buffer_size";

    static SINGLE_LINE_KEY : string = "single_line";

    /*private*/ defaultBufferSize : number;

    public static INSTANCE : StandardCompress; public static INSTANCE_$LI$() : StandardCompress { if(StandardCompress.INSTANCE == null) StandardCompress.INSTANCE = new StandardCompress(); return StandardCompress.INSTANCE; };

    public constructor(defaultBufferSize? : any) {
        if(((typeof defaultBufferSize === 'number') || defaultBufferSize === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.defaultBufferSize===undefined) this.defaultBufferSize = 0;
            if(this.defaultBufferSize===undefined) this.defaultBufferSize = 0;
            (() => {
                this.defaultBufferSize = defaultBufferSize;
            })();
        } else if(defaultBufferSize === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let defaultBufferSize : any = 2048;
                if(this.defaultBufferSize===undefined) this.defaultBufferSize = 0;
                if(this.defaultBufferSize===undefined) this.defaultBufferSize = 0;
                (() => {
                    this.defaultBufferSize = defaultBufferSize;
                })();
            }
        } else throw new Error('invalid overload');
    }

    public getWriter(out : Writer, args : Map<any, any>) : Writer {
        let bufferSize : number = this.defaultBufferSize;
        let singleLine : boolean = false;
        if(args != null) {
            try {
                let num : TemplateNumberModel = <TemplateNumberModel><any>/* get */args.get(StandardCompress.BUFFER_SIZE_KEY);
                if(num != null) bufferSize = /* intValue */(num.getAsNumber()|0);
            } catch(e) {
                throw new TemplateModelException("Expecting numerical argument to " + StandardCompress.BUFFER_SIZE_KEY);
            };
            try {
                let flag : TemplateBooleanModel = <TemplateBooleanModel><any>/* get */args.get(StandardCompress.SINGLE_LINE_KEY);
                if(flag != null) singleLine = flag.getAsBoolean();
            } catch(e) {
                throw new TemplateModelException("Expecting boolean argument to " + StandardCompress.SINGLE_LINE_KEY);
            };
        }
        return (() => { let __o : any = new StandardCompress.StandardCompressWriter(out, bufferSize, singleLine); __o.__delegate = new StandardCompress.StandardCompressWriter(out, bufferSize, singleLine); return __o; })();
    }
}
StandardCompress["__class"] = "freemarker.template.utility.StandardCompress";
StandardCompress["__interfaces"] = ["freemarker.template.TemplateTransformModel","freemarker.template.TemplateModel"];



export namespace StandardCompress {

    export class StandardCompressWriter {
        static MAX_EOL_LENGTH : number = 2;

        static AT_BEGINNING : number = 0;

        static SINGLE_LINE : number = 1;

        static INIT : number = 2;

        static SAW_CR : number = 3;

        static LINEBREAK_CR : number = 4;

        static LINEBREAK_CRLF : number = 5;

        static LINEBREAK_LF : number = 6;

        out : Writer;

        buf : string[];

        singleLine : boolean;

        pos : number = 0;

        inWhitespace : boolean = true;

        lineBreakState : number = StandardCompressWriter.AT_BEGINNING;

        public constructor(out : Writer, bufSize : number, singleLine : boolean) {
            if(this.out===undefined) this.out = null;
            if(this.buf===undefined) this.buf = null;
            if(this.singleLine===undefined) this.singleLine = false;
            this.out = out;
            this.singleLine = singleLine;
            this.buf = (s => { let a=[]; while(s-->0) a.push(null); return a; })(bufSize);
        }

        /**
         * 
         * @param {Array} cbuf
         * @param {number} off
         * @param {number} len
         */
        public write(cbuf : string[], off : number, len : number) {
            for(; ; ) {
                let room : number = this.buf.length - this.pos - StandardCompressWriter.MAX_EOL_LENGTH;
                if(room >= len) {
                    this.writeHelper(cbuf, off, len);
                    break;
                } else if(room <= 0) {
                    this.flushInternal();
                } else {
                    this.writeHelper(cbuf, off, room);
                    this.flushInternal();
                    off += room;
                    len -= room;
                }
            };
        }

        writeHelper(cbuf : string[], off : number, len : number) {
            for(let i : number = off, end : number = off + len; i < end; i++) {
                let c : string = cbuf[i];
                if(Character.isWhitespace(c)) {
                    this.inWhitespace = true;
                    this.updateLineBreakState(c);
                } else if(this.inWhitespace) {
                    this.inWhitespace = false;
                    this.writeLineBreakOrSpace();
                    this.buf[this.pos++] = c;
                } else {
                    this.buf[this.pos++] = c;
                }
            };
        }

        updateLineBreakState(c : string) {
            switch((this.lineBreakState)) {
            case 2 /* INIT */:
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\r'.charCodeAt(0)) {
                    this.lineBreakState = StandardCompressWriter.SAW_CR;
                } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                    this.lineBreakState = StandardCompressWriter.LINEBREAK_LF;
                }
                break;
            case 3 /* SAW_CR */:
                if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(c) == '\n'.charCodeAt(0)) {
                    this.lineBreakState = StandardCompressWriter.LINEBREAK_CRLF;
                } else {
                    this.lineBreakState = StandardCompressWriter.LINEBREAK_CR;
                }
            }
        }

        writeLineBreakOrSpace() {
            switch((this.lineBreakState)) {
            case 3 /* SAW_CR */:
            case 4 /* LINEBREAK_CR */:
                this.buf[this.pos++] = '\r';
                break;
            case 5 /* LINEBREAK_CRLF */:
                this.buf[this.pos++] = '\r';
            case 6 /* LINEBREAK_LF */:
                this.buf[this.pos++] = '\n';
                break;
            case 0 /* AT_BEGINNING */:
                break;
            case 2 /* INIT */:
            case 1 /* SINGLE_LINE */:
                this.buf[this.pos++] = ' ';
            }
            this.lineBreakState = (this.singleLine)?StandardCompressWriter.SINGLE_LINE:StandardCompressWriter.INIT;
        }

        flushInternal() {
            this.out.write(this.buf, 0, this.pos);
            this.pos = 0;
        }

        /**
         * 
         */
        public flush() {
            this.flushInternal();
            this.out.flush();
        }

        /**
         * 
         */
        public close() {
            this.flushInternal();
        }
    }
    StandardCompressWriter["__class"] = "freemarker.template.utility.StandardCompress.StandardCompressWriter";
    StandardCompressWriter["__interfaces"] = ["java.lang.Appendable","java.io.Closeable","java.lang.AutoCloseable","java.io.Flushable"];


}



var __Function = Function;

StandardCompress.INSTANCE_$LI$();
