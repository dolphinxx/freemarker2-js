import {Collection} from "./Collection";
import {Iterator as _Iterator} from "./Iterator";
import {HashCodes} from "../../javaemul/internal/HashCodes";

export class Set<T = any> implements Collection<T> {
    items: Array<T>;

    public constructor(collection?: Array<T>) {
        if (collection !== undefined) {
            this.items = collection;
        } else {
            this.items = [];
        }
    }

    public add(item): boolean {
        if (this.items.indexOf(item) !== -1) {
            return false;
        }
        this.items.push(item);
        return true;
    }

    public toArray(): Array<T> {
        return this.items.slice(0);
    }

    public size(): number {
        return this.items.length;
    }

    public clear(): void {
        this.items = [];
    }

    public remove(item: T): boolean {
        let index = this.items.indexOf(item);
        if (index === -1) {
            return false;
        }
        this.items.splice(index, 1);
        return true;
    }

    addAll(c: Collection<any>): boolean {
        for (let i = 0; i < c.size(); i++) {
            this.add(c[i]);
        }
        return true;
    }

    contains(o: any): boolean {
        return this.items.indexOf(o) !== -1;
    }

    containsAll(c: Collection<any>): boolean {
        for (let i = 0; i < c.size(); i++) {
            if (this.items.indexOf(c[i]) === -1) {
                return false;
            }
        }
        return true;
    }

    equals(o: any): boolean {
        if (o === null || o === undefined) {
            return false;
        }
        if (!(o instanceof Set)) {
            return false;
        }
        if (this.size() !== o.size()) {
            return false;
        }
        for (let i = 0; i < o.size(); i++) {
            if (this.items[i] !== o.items[i]) {
                return false;
            }
        }
        return true;
    }

    hashCode(): number {
        return HashCodes.getObjectIdentityHashCode(this);
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    iterator(): _Iterator<T> {
        return new Set.SetIterator(this);
    }

    removeAll(c: Collection<any>): boolean {
        let changed: boolean = false;
        for (let i = 0; i < c.size(); i++) {
            let index = this.items.indexOf(c[i]);
            if (index === -1) {
                continue;
            }
            changed = true;
            this.items.splice(index, 1);
        }
        return changed;
    }

    forEach(action: Function): void {
        for (let i = 0; i < this.items.length; i++) {
            action.call(this.items[i]);
        }
    }


}

export namespace Set {
    export class SetIterator<E> implements _Iterator<E> {
        cursor: number;
        list: Set<E>;

        public constructor(list: Set<E>) {
            this.list = list;
            this.cursor = 0;
        }

        hasNext() {
            return this.cursor + 1 < this.list.size();
        }

        next(): E {
            return this[++this.cursor];
        }

        remove(): E {
            const item = this[this.cursor];
            this.list.items.splice(this.cursor, 1);
            return item;
        }

        forEachRemaining(action: Function): void {
            while (this.hasNext())
                action.call(this.next());
        }

        [Symbol.iterator]() {
            return {
                next: () => {
                    if (this.hasNext()) {
                        return {value: this.next(), done: false};
                    } else {
                        this.cursor = 0;
                        return {value: null, done: true};
                    }
                }
            }
        }
    }
}
Set["__class"] = "java.util.Set";