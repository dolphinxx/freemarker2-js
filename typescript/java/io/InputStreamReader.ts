import {Reader} from "./Reader";
import {InputStream} from "./InputStream";

export class InputStreamReader extends Reader {
    private is:InputStream;
    public constructor(is:InputStream) {
        super();
        this.is = is;
    }

    close() {
        this.is.close();
    }

}