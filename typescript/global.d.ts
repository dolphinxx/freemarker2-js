import {Locale} from "./java/util/Locale";

declare module NodeJS {
    interface Global {
        DEFAULT_LOCALE:Locale
    }
}

interface Object {
    __proto__: any;
}

interface String {
    repeat: (string) => string;
    startsWith: (string) => string;
    endsWith: (string) => string;
    includes: (string) => string;
}