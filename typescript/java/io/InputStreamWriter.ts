import {Writer} from "./Writer";
import {InputStream} from "./InputStream";

export class InputStreamWriter extends Writer {
    private is: InputStream;

    public constructor(is: InputStream) {
        super();
        this.is = is;
    }

    close() {
        this.is.close();
    }

    flush() {
    }

}

InputStreamWriter["__class"] = "java.io.InputStreamWriter";