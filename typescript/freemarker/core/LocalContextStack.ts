/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {LocalContext} from './LocalContext';

/**
 * Class that's a little bit more efficient than using an {@code ArrayList<LocalContext>}.
 * 
 * @since 2.3.24
 * @class
 */
export class LocalContextStack {
    /*private*/ buffer : LocalContext[] = [null, null, null, null, null, null, null, null];

    /*private*/ __size : number;

    push(localContext : LocalContext) {
        let newSize : number = ++this.__size;
        let buffer : LocalContext[] = this.buffer;
        if(buffer.length < newSize) {
            let newBuffer : LocalContext[] = (s => { let a=[]; while(s-->0) a.push(null); return a; })(newSize * 2);
            for(let i : number = 0; i < buffer.length; i++) {
                newBuffer[i] = buffer[i];
            }
            buffer = newBuffer;
            this.buffer = newBuffer;
        }
        buffer[newSize - 1] = localContext;
    }

    pop() {
        this.buffer[--this.__size] = null;
    }

    public get(index : number) : LocalContext {
        return this.buffer[index];
    }

    public size() : number {
        return this.__size;
    }

    constructor() {
        if(this.__size===undefined) this.__size = 0;
    }
}
LocalContextStack["__class"] = "freemarker.core.LocalContextStack";




