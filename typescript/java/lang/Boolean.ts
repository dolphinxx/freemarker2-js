export class Boolean {
    public static valueOf(s: string | boolean): boolean {
        return typeof s === 'boolean' ? <boolean>s : Boolean.parseBoolean(<string>s);
    }

    public static parseBoolean(s: string): boolean {
        return s != null && s.toUpperCase() === 'TRUE';
    }
}

Boolean["__class"] = "java.lang.Boolean";