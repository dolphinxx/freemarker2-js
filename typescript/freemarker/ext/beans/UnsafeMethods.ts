/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

export class UnsafeMethods {
    static UNSAFE_METHODS_PROPERTIES: string = "unsafeMethods.properties";

    static UNSAFE_METHODS: Array<any> = []; //public static UNSAFE_METHODS_$LI$() : Array<any> { if(UnsafeMethods.UNSAFE_METHODS == null) UnsafeMethods.UNSAFE_METHODS = UnsafeMethods.createUnsafeMethodsSet(); return UnsafeMethods.UNSAFE_METHODS; };

    constructor() {
    }

    static isUnsafeMethod(method: Function): boolean {
        // return /* contains */(UnsafeMethods.UNSAFE_METHODS_$LI$().indexOf(<any>(method)) >= 0);
        return false;
    }

    // /*private*/ static createUnsafeMethodsSet() : Array<any> {
    //     try {
    //         let props : Map<any, any> = ClassUtil.loadProperties(BeansWrapper, UnsafeMethods.UNSAFE_METHODS_PROPERTIES);
    //         let set : Array<any> = <any>([]);
    //         let primClasses : Map<any, any> = UnsafeMethods.createPrimitiveClassesMap();
    //         {
    //             let array166 = /* keySet */((m) => { let r=[]; m.forEach((v, k, m) => r.push(k)); return r; })(<any>props);
    //             for(let index165=0; index165 < array166.length; index165++) {
    //                 let key = array166[index165];
    //                 {
    //                     try {
    //                         /* add */((s, e) => { if(s.indexOf(e)==-1) { s.push(e); return true; } else { return false; } })(set, UnsafeMethods.parseMethodSpec(<string>key, primClasses));
    //                     } catch(__e) {
    //                         if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.ClassNotFoundException") >= 0)) {
    //                             let e : Error = <Error>__e;
    //                             if(ClassIntrospector.DEVELOPMENT_MODE_$LI$()) {
    //                                 throw e;
    //                             }
    //
    //                         }
    //                         if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.NoSuchMethodException") >= 0)) {
    //                             let e : Error = <Error>__e;
    //                             if(ClassIntrospector.DEVELOPMENT_MODE_$LI$()) {
    //                                 throw e;
    //                             }
    //
    //                         }
    //                     };
    //                 }
    //             }
    //         }
    //         return set;
    //     } catch(e) {
    //         throw Object.defineProperty(new Error("Could not load unsafe method set"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    //     };
    // }
    //
    // /*private*/ static parseMethodSpec(methodSpec : string, primClasses : Map<any, any>) : Function {
    //     let brace : number = methodSpec.indexOf('(');
    //     let dot : number = methodSpec.lastIndexOf('.', brace);
    //     let clazz : any = ClassUtil.forName(methodSpec.substring(0, dot));
    //     let methodName : string = methodSpec.substring(dot + 1, brace);
    //     let argSpec : string = methodSpec.substring(brace + 1, methodSpec.length - 1);
    //     let tok : StringTokenizer = new StringTokenizer(argSpec, ",");
    //     let argcount : number = tok.countTokens();
    //     let argTypes : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(argcount);
    //     for(let i : number = 0; i < argcount; i++) {
    //         let argClassName : string = tok.nextToken();
    //         argTypes[i] = <any>/* get */primClasses.get(argClassName);
    //         if(argTypes[i] == null) {
    //             argTypes[i] = ClassUtil.forName(argClassName);
    //         }
    //     };
    //     return /* getMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })(clazz,methodName);
    // }
    //
    // /*private*/ static createPrimitiveClassesMap() : Map<any, any> {
    //     let map : Map<any, any> = <any>(new Map<any, any>());
    //     /* put */map.set("boolean", javaemul.internal.BooleanHelper.TYPE);
    //     /* put */map.set("byte", javaemul.internal.ByteHelper.TYPE);
    //     /* put */map.set("char", javaemul.internal.CharacterHelper.TYPE);
    //     /* put */map.set("short", javaemul.internal.ShortHelper.TYPE);
    //     /* put */map.set("int", javaemul.internal.IntegerHelper.TYPE);
    //     /* put */map.set("long", javaemul.internal.LongHelper.TYPE);
    //     /* put */map.set("float", javaemul.internal.FloatHelper.TYPE);
    //     /* put */map.set("double", javaemul.internal.DoubleHelper.TYPE);
    //     return map;
    // }
}

UnsafeMethods["__class"] = "freemarker.ext.beans.UnsafeMethods";