/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Expression } from './Expression';

/**
 * Utilities that didn't fit elsewhere.
 * @class
 */
export class MiscUtil {
    constructor() {
    }

    static C_FALSE : string = "false";

    static C_TRUE : string = "true";

    /**
     * Returns the map entries in source code order of the Expression values.
     * @param {Map} map
     * @return {List}
     */
    static sortMapOfExpressions(map : Map<any, any>) : Array<any> {
        let res : Array<any> = <any>(/* entrySet */((m) => { if(m.entries==null) m.entries=[]; return m.entries; })(<any>map).slice(0));
        /* sort */((l,c) => { if((<any>c).compare) l.sort((e1,e2)=>(<any>c).compare(e1,e2)); else l.sort(<any>c); })(res,new MiscUtil.MiscUtil$0());
        return res;
    }
}
MiscUtil["__class"] = "freemarker.core.MiscUtil";


export namespace MiscUtil {

    export class MiscUtil$0 {
        public compare(o1 : any, o2 : any) : number {
            let ent1 : Entry = <Entry><any>o1;
            let exp1 : Expression = <Expression>ent1.getValue();
            let ent2 : Entry = <Entry><any>o2;
            let exp2 : Expression = <Expression>ent2.getValue();
            let res : number = exp1.beginLine - exp2.beginLine;
            if(res !== 0) return res;
            res = exp1.beginColumn - exp2.beginColumn;
            if(res !== 0) return res;
            if(ent1 === ent2) return 0;
            return /* compareTo */(<string>ent1.getKey()).localeCompare(<string>ent1.getKey());
        }

        constructor() {
        }
    }
    MiscUtil$0["__interfaces"] = ["java.util.Comparator"];


}



var __Function = Function;
