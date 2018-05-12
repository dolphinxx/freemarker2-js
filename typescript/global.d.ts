import {Locale} from "./java/util/Locale";

declare module NodeJS {
    interface Global {
        DEFAULT_LOCALE:Locale
    }
}

interface String {
    repeat: (string) => string;
    startsWith: (string) => string;
    endsWith: (string) => string;
    includes: (string) => string;
}