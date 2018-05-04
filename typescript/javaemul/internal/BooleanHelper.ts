/* Generated from Java with JSweet 2.0.0-SNAPSHOT - http://www.jsweet.org */
    import {Serializable} from "../../java/io/Serializable";

/**
     * Wraps native <code>boolean</code> as an object.
     * @param {boolean} value
     * @class
     */
    export class BooleanHelper implements Serializable {
        public static FALSE : boolean = false;

        public static TRUE : boolean = true;

        public static TYPE : any; public static TYPE_$LI$() : any { if(BooleanHelper.TYPE == null) BooleanHelper.TYPE = Boolean; return BooleanHelper.TYPE; };

        public static compare(x : boolean, y : boolean) : number {
            return (x === y)?0:(x?1:-1);
        }

        public static hashCode(value : boolean) : number {
            return value?1231:1237;
        }

        public static logicalAnd(a : boolean, b : boolean) : boolean {
            return a && b;
        }

        public static logicalOr(a : boolean, b : boolean) : boolean {
            return a || b;
        }

        public static logicalXor(a : boolean, b : boolean) : boolean {
            return (a) !== (b);
        }

        public static parseBoolean(s : string) : boolean {
            return /* equalsIgnoreCase */((o1, o2) => o1.toUpperCase() === (o2===null?o2:o2.toUpperCase()))("true", s);
        }

        public static toString(x : boolean) : string {
            return /* valueOf */new String(x).toString();
        }

        public static valueOf$boolean(b : boolean) : boolean {
            return b?BooleanHelper.TRUE:BooleanHelper.FALSE;
        }

        public static valueOf$java_lang_String(s : string) : boolean {
            return BooleanHelper.valueOf$boolean(BooleanHelper.parseBoolean(s));
        }

        public static valueOf(s? : any) : any {
            if(((typeof s === 'string') || s === null)) {
                return <any>BooleanHelper.valueOf$java_lang_String(s);
            } else if(((typeof s === 'boolean') || s === null)) {
                return <any>BooleanHelper.valueOf$boolean(s);
            } else throw new Error('invalid overload');
        }

        public booleanValue() : boolean {
            return BooleanHelper.unsafeCast(<any>(this));
        }

        /*private*/ static unsafeCast(value : any) : boolean {
            return <boolean>value;
        }

        public compareTo$javaemul_internal_BooleanHelper(b : BooleanHelper) : number {
            return BooleanHelper.compare(this.booleanValue(), b.booleanValue());
        }

        /**
         * 
         * @param {javaemul.internal.BooleanHelper} b
         * @return {number}
         */
        public compareTo(b? : any) : any {
            if(((b != null && b instanceof <any>BooleanHelper) || b === null)) {
                return <any>this.compareTo$javaemul_internal_BooleanHelper(b);
            } else throw new Error('invalid overload');
        }

        /**
         * 
         * @param {*} o
         * @return {boolean}
         */
        public equals(o : any) : boolean {
            return this === o;
        }

        /**
         * 
         * @return {number}
         */
        public hashCode() : number {
            return /* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this));
        }

        /**
         * 
         * @return {string}
         */
        public toString() : string {
            return BooleanHelper.toString(this.booleanValue());
        }

        constructor() {
        }
    }
    BooleanHelper["__class"] = "javaemul.internal.BooleanHelper";
    BooleanHelper["__interfaces"] = ["java.lang.Comparable","java.io.Serializable"];

BooleanHelper.TYPE_$LI$();
