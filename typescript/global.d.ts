declare module NodeJS {
    interface Global {
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