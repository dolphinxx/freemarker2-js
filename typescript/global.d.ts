declare module NodeJS {
    interface Global {
        DEFAULT_LOCALE:string
    }
}

interface String {
    repeat: (string) => string;
    startsWith: (string) => string;
    endsWith: (string) => string;
    includes: (string) => string;
}