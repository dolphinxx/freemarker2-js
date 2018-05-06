export class Entry<K = any, V = any> {
    hash : number;

    key : any;

    value : any;

    next : Entry<any, any>;

    constructor(hash? : any, key? : any, value? : any, next? : Entry<K, V>) {
        if(arguments.length === 0) {
            return;
        }
        if(arguments.length === 2) {
            this.key = arguments[0];
            this.value = arguments[1];
            return;
        }
        if(arguments.length === 3) {
            this.key = arguments[0];
            this.value = arguments[1];
            this.next = arguments[3];
            return;
        }
        this.hash = hash;
        this.key = key;
        this.value = value;
        this.next = next;
    }

    /**
     *
     * @return {Object}
     */
    clone() : any {
        return new Entry(this.hash, this.key, this.value, (this.next == null?null:<Entry<any, any>>/* clone *//* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this.next)));
    }

    public getKey() : any {
        return this.key;
    }

    public getValue() : any {
        return this.value;
    }

    public setValue(value : any) : any {
        let oldValue : any = this.value;
        this.value = value;
        return oldValue;
    }

    /**
     *
     * @param {Object} o
     * @return {boolean}
     */
    public equals(o : any) : boolean {
        if(!(o != null && (o["__interfaces"] != null && o["__interfaces"].indexOf("java.util.Map.Entry") >= 0 || o.constructor != null && o.constructor["__interfaces"] != null && o.constructor["__interfaces"].indexOf("java.util.Map.Entry") >= 0))) return false;
        let e : Entry<any, any> = <Entry<any, any>><any>o;
        return (this.key === e.getKey()) && (this.value == null?e.getValue() == null:/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(this.value,e.getValue())));
    }

    /**
     *
     * @return {number}
     */
    public hashCode() : number {
        return this.hash ^ (this.value == null?0:/* hashCode */(<any>((o: any) => { if(o.hashCode) { return o.hashCode(); } else { return o.toString(); } })(this.value)));
    }

    /**
     *
     * @return {String}
     */
    public toString() : string {
        return this.key + "=" + this.value;
    }
}

Entry["__class"] = "java.util.Entry";