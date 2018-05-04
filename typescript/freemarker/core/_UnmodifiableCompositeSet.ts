/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { _UnmodifiableSet } from './_UnmodifiableSet';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * @param {Set} set1
 * @param {Set} set2
 * @class
 * @extends _UnmodifiableSet
 */
export class _UnmodifiableCompositeSet<E> extends _UnmodifiableSet<E> {
    /*private*/ set1 : Set;

    /*private*/ set2 : Set;

    public constructor(set1 : Set, set2 : Set) {
        super();
        if(this.set1===undefined) this.set1 = null;
        if(this.set2===undefined) this.set2 = null;
        this.set1 = set1;
        this.set2 = set2;
    }

    /**
     * 
     * @return {Iterator}
     */
    public iterator() : Iterator {
        return new _UnmodifiableCompositeSet.CompositeIterator(this);
    }

    /**
     * 
     * @param {Object} o
     * @return {boolean}
     */
    public contains(o : any) : boolean {
        return /* contains */(this.set1.indexOf(<any>(o)) >= 0) || /* contains */(this.set2.indexOf(<any>(o)) >= 0);
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        return /* size */(<number>this.set1.length) + /* size */(<number>this.set2.length);
    }
}
_UnmodifiableCompositeSet["__class"] = "freemarker.core._UnmodifiableCompositeSet";
_UnmodifiableCompositeSet["__interfaces"] = ["java.util.Collection","java.util.Set","java.lang.Iterable"];



export namespace _UnmodifiableCompositeSet {

    export class CompositeIterator {
        public __parent: any;
        it1 : Iterator;

        it2 : Iterator;

        it1Deplected : boolean;

        public hasNext() : boolean {
            if(!this.it1Deplected) {
                if(this.it1 == null) {
                    this.it1 = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.__parent.set1);
                }
                if(this.it1.hasNext()) {
                    return true;
                }
                this.it2 = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.__parent.set2);
                this.it1 = null;
                this.it1Deplected = true;
            }
            return this.it2.hasNext();
        }

        public next() : any {
            if(!this.it1Deplected) {
                if(this.it1 == null) {
                    this.it1 = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.__parent.set1);
                }
                if(this.it1.hasNext()) {
                    return this.it1.next();
                }
                this.it2 = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(this.__parent.set2);
                this.it1 = null;
                this.it1Deplected = true;
            }
            return this.it2.next();
        }

        public remove() {
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }

        constructor(__parent: any) {
            this.__parent = __parent;
            if(this.it1===undefined) this.it1 = null;
            if(this.it2===undefined) this.it2 = null;
            if(this.it1Deplected===undefined) this.it1Deplected = false;
        }
    }
    CompositeIterator["__class"] = "freemarker.core._UnmodifiableCompositeSet.CompositeIterator";
    CompositeIterator["__interfaces"] = ["java.util.Iterator"];


}



var __Function = Function;
