/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {Constants} from './utility/Constants';
import {TemplateBooleanModel} from './TemplateBooleanModel';
import {TemplateScalarModel} from './TemplateScalarModel';
import {TemplateSequenceModel} from './TemplateSequenceModel';
import {TemplateHashModelEx2} from './TemplateHashModelEx2';
import {TemplateMethodModelEx} from './TemplateMethodModelEx';
import {TemplateModel} from './TemplateModel';
import {TemplateModelException} from './TemplateModelException';
import {TemplateCollectionModel} from './TemplateCollectionModel';
import {KeyValuePairIterator} from './KeyValuePairIterator';

/**
 * Singleton object representing nothing, used by ?if_exists built-in.
 * It is meant to be interpreted in the most sensible way possible in various contexts.
 * This can be returned to avoid exceptions.
 * @class
 */
export class GeneralPurposeNothing implements TemplateBooleanModel, TemplateScalarModel, TemplateSequenceModel, TemplateHashModelEx2, TemplateMethodModelEx {
    static instance : TemplateModel; public static instance_$LI$() : TemplateModel { if(GeneralPurposeNothing.instance == null) GeneralPurposeNothing.instance = new GeneralPurposeNothing(); return GeneralPurposeNothing.instance; };

    constructor() {
    }

    static getInstance() : TemplateModel {
        return GeneralPurposeNothing.instance_$LI$();
    }

    public getAsString() : string {
        return "";
    }

    public getAsBoolean() : boolean {
        return false;
    }

    public isEmpty() : boolean {
        return true;
    }

    public size() : number {
        return 0;
    }

    public get$int(i : number) : TemplateModel {
        throw new TemplateModelException("Can\'t get item from an empty sequence.");
    }

    public get$java_lang_String(key : string) : TemplateModel {
        return null;
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else if(((typeof key === 'number') || key === null)) {
            return <any>this.get$int(key);
        } else throw new Error('invalid overload');
    }

    public exec(args : Array<any>) : any {
        return null;
    }

    public keys() : TemplateCollectionModel {
        return Constants.EMPTY_COLLECTION_$LI$();
    }

    public values() : TemplateCollectionModel {
        return Constants.EMPTY_COLLECTION_$LI$();
    }

    public keyValuePairIterator() : KeyValuePairIterator {
        return Constants.EMPTY_KEY_VALUE_PAIR_ITERATOR_$LI$();
    }
}
GeneralPurposeNothing["__class"] = "freemarker.template.GeneralPurposeNothing";
GeneralPurposeNothing["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateHashModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateHashModelEx2","freemarker.template.TemplateHashModelEx","freemarker.template.TemplateScalarModel","freemarker.template.TemplateBooleanModel","freemarker.template.TemplateModel"];






GeneralPurposeNothing.instance_$LI$();
