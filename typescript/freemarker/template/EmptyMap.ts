/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
/**
 * Read-only empty map. {link #remove(Object)}, {link #clear()} and
 * {link #putAll(Map)} with an empty {link Map} as parameter are supported
 * operations (and do nothing) since FreeMarker 2.3.20.
 * 
 * @deprecated Use {link Collections#EMPTY_MAP} on J2SE 1.3 or later.
 * @class
 */
export class EmptyMap {
    public static instance : EmptyMap; public static instance_$LI$() : EmptyMap { if(EmptyMap.instance == null) EmptyMap.instance = new EmptyMap(); return EmptyMap.instance; };

    public clear() {
    }

    public containsKey(arg0 : any) : boolean {
        return false;
    }

    public containsValue(arg0 : any) : boolean {
        return false;
    }

    public entrySet() : Array<any> {
        return Collections.EMPTY_SET;
    }

    public get(arg0 : any) : any {
        return null;
    }

    public isEmpty() : boolean {
        return true;
    }

    public keySet() : Array<any> {
        return Collections.EMPTY_SET;
    }

    public put(arg0 : any, arg1 : any) : any {
        throw Object.defineProperty(new Error("This Map is read-only."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    public putAll(arg0 : Map<any, any>) {
        if(/* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>arg0)).hasNext()) {
            throw Object.defineProperty(new Error("This Map is read-only."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    public remove(arg0 : any) : any {
        return null;
    }

    public size() : number {
        return 0;
    }

    public values() : Array<any> {
        return Collections.EMPTY_LIST;
    }

    constructor() {
    }
}
EmptyMap["__class"] = "freemarker.template.EmptyMap";
EmptyMap["__interfaces"] = ["java.lang.Cloneable","java.util.Map"];




var __Function = Function;

EmptyMap.instance_$LI$();
