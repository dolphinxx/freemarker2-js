/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { KeyValuePair } from '../KeyValuePair';
import { KeyValuePairIterator } from '../KeyValuePairIterator';
import { SimpleNumber } from '../SimpleNumber';
import { TemplateBooleanModel } from '../TemplateBooleanModel';
import { TemplateCollectionModel } from '../TemplateCollectionModel';
import { TemplateHashModelEx } from '../TemplateHashModelEx';
import { TemplateHashModelEx2 } from '../TemplateHashModelEx2';
import { TemplateModel } from '../TemplateModel';
import { TemplateModelException } from '../TemplateModelException';
import { TemplateModelIterator } from '../TemplateModelIterator';
import { TemplateNumberModel } from '../TemplateNumberModel';
import { TemplateScalarModel } from '../TemplateScalarModel';
import { TemplateSequenceModel } from '../TemplateSequenceModel';

/**
 * Frequently used constant {link TemplateModel} values.
 * 
 * <p>These constants should be stored in the {link TemplateModel}
 * sub-interfaces, but for backward compatibility they are stored here instead.
 * Starting from FreeMarker 2.4 they should be copied (not moved!) into the
 * {link TemplateModel} sub-interfaces, and this class should be marked as
 * deprecated.</p>
 * @class
 */
export class Constants {
    public static TRUE : TemplateBooleanModel; public static TRUE_$LI$() : TemplateBooleanModel { if(Constants.TRUE == null) Constants.TRUE = TemplateBooleanModel.TRUE; return Constants.TRUE; };

    public static FALSE : TemplateBooleanModel; public static FALSE_$LI$() : TemplateBooleanModel { if(Constants.FALSE == null) Constants.FALSE = TemplateBooleanModel.FALSE; return Constants.FALSE; };

    public static EMPTY_STRING : TemplateScalarModel; public static EMPTY_STRING_$LI$() : TemplateScalarModel { if(Constants.EMPTY_STRING == null) Constants.EMPTY_STRING = <TemplateScalarModel><any>TemplateScalarModel.EMPTY_STRING; return Constants.EMPTY_STRING; };

    public static ZERO : TemplateNumberModel; public static ZERO_$LI$() : TemplateNumberModel { if(Constants.ZERO == null) Constants.ZERO = new SimpleNumber(0); return Constants.ZERO; };

    public static ONE : TemplateNumberModel; public static ONE_$LI$() : TemplateNumberModel { if(Constants.ONE == null) Constants.ONE = new SimpleNumber(1); return Constants.ONE; };

    public static MINUS_ONE : TemplateNumberModel; public static MINUS_ONE_$LI$() : TemplateNumberModel { if(Constants.MINUS_ONE == null) Constants.MINUS_ONE = new SimpleNumber(-1); return Constants.MINUS_ONE; };

    public static EMPTY_ITERATOR : TemplateModelIterator; public static EMPTY_ITERATOR_$LI$() : TemplateModelIterator { if(Constants.EMPTY_ITERATOR == null) Constants.EMPTY_ITERATOR = new Constants.EmptyIteratorModel(); return Constants.EMPTY_ITERATOR; };

    public static EMPTY_COLLECTION : TemplateCollectionModel; public static EMPTY_COLLECTION_$LI$() : TemplateCollectionModel { if(Constants.EMPTY_COLLECTION == null) Constants.EMPTY_COLLECTION = new Constants.EmptyCollectionModel(); return Constants.EMPTY_COLLECTION; };

    public static EMPTY_SEQUENCE : TemplateSequenceModel; public static EMPTY_SEQUENCE_$LI$() : TemplateSequenceModel { if(Constants.EMPTY_SEQUENCE == null) Constants.EMPTY_SEQUENCE = new Constants.EmptySequenceModel(); return Constants.EMPTY_SEQUENCE; };

    public static EMPTY_HASH : TemplateHashModelEx; public static EMPTY_HASH_$LI$() : TemplateHashModelEx { if(Constants.EMPTY_HASH == null) Constants.EMPTY_HASH = new Constants.EmptyHashModel(); return Constants.EMPTY_HASH; };

    /**
     * @since 2.3.27
     */
    public static EMPTY_KEY_VALUE_PAIR_ITERATOR : KeyValuePairIterator; public static EMPTY_KEY_VALUE_PAIR_ITERATOR_$LI$() : KeyValuePairIterator { if(Constants.EMPTY_KEY_VALUE_PAIR_ITERATOR == null) Constants.EMPTY_KEY_VALUE_PAIR_ITERATOR = new Constants.EmptyKeyValuePairIterator(); return Constants.EMPTY_KEY_VALUE_PAIR_ITERATOR; };
}
Constants["__class"] = "freemarker.template.utility.Constants";


export namespace Constants {

    export class EmptyIteratorModel implements TemplateModelIterator {
        public next() : TemplateModel {
            throw new TemplateModelException("The collection has no more elements.");
        }

        public hasNext() : boolean {
            return false;
        }

        constructor() {
        }
    }
    EmptyIteratorModel["__class"] = "freemarker.template.utility.Constants.EmptyIteratorModel";
    EmptyIteratorModel["__interfaces"] = ["freemarker.template.TemplateModelIterator","java.io.Serializable"];



    export class EmptyCollectionModel implements TemplateCollectionModel {
        public iterator() : TemplateModelIterator {
            return Constants.EMPTY_ITERATOR_$LI$();
        }

        constructor() {
        }
    }
    EmptyCollectionModel["__class"] = "freemarker.template.utility.Constants.EmptyCollectionModel";
    EmptyCollectionModel["__interfaces"] = ["freemarker.template.TemplateCollectionModel","freemarker.template.TemplateModel","java.io.Serializable"];



    export class EmptySequenceModel implements TemplateSequenceModel {
        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return null;
        }

        public size() : number {
            return 0;
        }

        constructor() {
        }
    }
    EmptySequenceModel["__class"] = "freemarker.template.utility.Constants.EmptySequenceModel";
    EmptySequenceModel["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];



    /**
     * An empty hash. Since 2.3.27, it implements {link TemplateHashModelEx2}, before that it was only
     * {link TemplateHashModelEx}.
     * @class
     */
    export class EmptyHashModel implements TemplateHashModelEx2 {
        public size() : number {
            return 0;
        }

        public keys() : TemplateCollectionModel {
            return Constants.EMPTY_COLLECTION_$LI$();
        }

        public values() : TemplateCollectionModel {
            return Constants.EMPTY_COLLECTION_$LI$();
        }

        public get$java_lang_String(key : string) : TemplateModel {
            return null;
        }

        public get(key? : any) : any {
            if(((typeof key === 'string') || key === null)) {
                return <any>this.get$java_lang_String(key);
            } else throw new Error('invalid overload');
        }

        public isEmpty() : boolean {
            return true;
        }

        public keyValuePairIterator() : KeyValuePairIterator {
            return Constants.EMPTY_KEY_VALUE_PAIR_ITERATOR_$LI$();
        }

        constructor() {
        }
    }
    EmptyHashModel["__class"] = "freemarker.template.utility.Constants.EmptyHashModel";
    EmptyHashModel["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateModel","java.io.Serializable"];



    export class EmptyKeyValuePairIterator implements KeyValuePairIterator {
        constructor() {
        }

        public hasNext() : boolean {
            return false;
        }

        public next() : KeyValuePair {
            throw Object.defineProperty(new Error("Can\'t retrieve element from empty key-value pair iterator."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.util.NoSuchElementException','java.lang.Exception'] });
        }
    }
    EmptyKeyValuePairIterator["__class"] = "freemarker.template.utility.Constants.EmptyKeyValuePairIterator";
    EmptyKeyValuePairIterator["__interfaces"] = ["freemarker.template.KeyValuePairIterator"];


}



var __Function = Function;

Constants.EMPTY_KEY_VALUE_PAIR_ITERATOR_$LI$();

Constants.EMPTY_HASH_$LI$();

Constants.EMPTY_SEQUENCE_$LI$();

Constants.EMPTY_COLLECTION_$LI$();

Constants.EMPTY_ITERATOR_$LI$();

Constants.MINUS_ONE_$LI$();

Constants.ONE_$LI$();

Constants.ZERO_$LI$();

Constants.EMPTY_STRING_$LI$();

Constants.FALSE_$LI$();

Constants.TRUE_$LI$();
