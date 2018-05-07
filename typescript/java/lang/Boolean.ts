export class Boolean {
    private value:boolean;
    public constructor(value?:boolean) {
        this.value = value === undefined ? false: value;
    }

    public static valueOf(s: string | boolean): boolean {
        return typeof s === 'boolean' ? <boolean>s : Boolean.parseBoolean(<string>s);
    }

    public static parseBoolean(s: string): boolean {
        return s != null && s.toUpperCase() === 'TRUE';
    }

    public hashCode():number {
        return this.value ? 1231 : 1237;
    }
}

Boolean["__class"] = "java.lang.Boolean";