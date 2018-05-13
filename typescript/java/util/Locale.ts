const osLocale = require('os-locale');
export class Locale {
    public language: string;
    public country: string;
    private text:string;

    private static DEFAULT:Locale;

    private constructor(language: string, country?: string) {
        if(arguments.length === 1) {
            this.text = language;
            let s = language.split('_');
            language = s[0];
            country = s[1];
        }
        this.language = language;
        this.country = country;
    }

    public getCountry(): string {
        return this.country;
    }

    public getLanguage(): string {
        return this.language;
    }

    public toString():string {
        if(this.text == null) {
            this.text = this.language + '_' + this.country;
        }
        return this.text;
    }

    public getVariant():string{
        return "";
    }

    public equals(another:any):boolean {
        if(!(another instanceof Locale)) {
            return false;
        }
        return (<Locale>another).getLanguage() === this.language && (<Locale>another).getCountry() === this.country;
    }

    public static getDefault() {
        if(Locale.DEFAULT == null) {
            Locale.DEFAULT = new Locale(osLocale.sync());
        }
        return Locale.DEFAULT;
    }
}
Locale['__class'] = 'java.util.Locale';