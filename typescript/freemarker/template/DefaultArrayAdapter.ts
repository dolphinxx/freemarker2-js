/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { WrapperTemplateModel } from '../ext/util/WrapperTemplateModel';
import { WrappingTemplateModel } from './WrappingTemplateModel';
import { TemplateSequenceModel } from './TemplateSequenceModel';
import { AdapterTemplateModel } from './AdapterTemplateModel';
import { ObjectWrapperAndUnwrapper } from './ObjectWrapperAndUnwrapper';
import { ObjectWrapper } from './ObjectWrapper';
import { TemplateModel } from './TemplateModel';
import { TemplateModelException } from './TemplateModelException';

/**
 * Adapts an {@code array} of a non-primitive elements to the corresponding {link TemplateModel} interface(s), most
 * importantly to {link TemplateHashModelEx}. If you aren't wrapping an already existing {@code array}, but build a
 * sequence specifically to be used from a template, also consider using {link SimpleSequence} (see comparison there).
 * <p>
 * <p>
 * Thread safety: A {link DefaultListAdapter} is as thread-safe as the array that it wraps is. Normally you only
 * have to consider read-only access, as the FreeMarker template language doesn't allow writing these sequences (though
 * of course, Java methods called from the template can violate this rule).
 * <p>
 * <p>
 * This adapter is used by {link DefaultObjectWrapper} if its {@code useAdaptersForCollections} property is
 * {@code true}, which is the default when its {@code incompatibleImprovements} property is 2.3.22 or higher.
 * <p>
 * see SimpleSequence
 * see DefaultListAdapter
 * see TemplateSequenceModel
 * 
 * @since 2.3.22
 * @extends WrappingTemplateModel
 * @class
 */
export abstract class DefaultArrayAdapter extends WrappingTemplateModel implements TemplateSequenceModel, AdapterTemplateModel, WrapperTemplateModel {
    /**
     * Factory method for creating new adapter instances.
     * 
     * @param {Object} array   The array to adapt; can't be {@code null}. Must be an array.
     * @param {*} wrapper The {link ObjectWrapper} used to wrap the items in the array. Has to be
     * {link ObjectWrapperAndUnwrapper} because of planned future features.
     * @return {DefaultArrayAdapter}
     */
    public static adapt(array : any, wrapper : ObjectWrapperAndUnwrapper) : DefaultArrayAdapter {
        let componentType : any = (<any>array.constructor).getComponentType();
        if(componentType == null) {
            throw Object.defineProperty(new Error("Not an array"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        if(/* isPrimitive */(componentType === <any>'__erasedPrimitiveType__')) {
            if(componentType === Number) {
                return new DefaultArrayAdapter.IntArrayAdapter(<number[]>array, wrapper);
            }
            if(componentType === Number) {
                return new DefaultArrayAdapter.DoubleArrayAdapter(<number[]>array, wrapper);
            }
            if(componentType === Number) {
                return new DefaultArrayAdapter.LongArrayAdapter(<number[]>array, wrapper);
            }
            if(componentType === Boolean) {
                return new DefaultArrayAdapter.BooleanArrayAdapter(<boolean[]>array, wrapper);
            }
            if(componentType === Number) {
                return new DefaultArrayAdapter.FloatArrayAdapter(<number[]>array, wrapper);
            }
            if(componentType === String) {
                return new DefaultArrayAdapter.CharArrayAdapter(<string[]>array, wrapper);
            }
            if(componentType === Number) {
                return new DefaultArrayAdapter.ShortArrayAdapter(<number[]>array, wrapper);
            }
            if(componentType === Number) {
                return new DefaultArrayAdapter.ByteArrayAdapter(<number[]>array, wrapper);
            }
            return new DefaultArrayAdapter.GenericPrimitiveArrayAdapter(array, wrapper);
        } else {
            return new DefaultArrayAdapter.ObjectArrayAdapter(<Array>array, wrapper);
        }
    }

    constructor(wrapper : ObjectWrapper) {
        super(wrapper);
    }

    public getAdaptedObject(hint : any) : any {
        return this.getWrappedObject();
    }

    public abstract getWrappedObject(): any;
    public abstract size(): any;
    public abstract get(index?: any): any;}
DefaultArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter";
DefaultArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



export namespace DefaultArrayAdapter {

    export class ObjectArrayAdapter extends DefaultArrayAdapter {
        array : Array<any>;

        constructor(array : Array, wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    ObjectArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.ObjectArrayAdapter";
    ObjectArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class ByteArrayAdapter extends DefaultArrayAdapter {
        array : number[];

        constructor(array : number[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    ByteArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.ByteArrayAdapter";
    ByteArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class ShortArrayAdapter extends DefaultArrayAdapter {
        array : number[];

        constructor(array : number[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    ShortArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.ShortArrayAdapter";
    ShortArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class IntArrayAdapter extends DefaultArrayAdapter {
        array : number[];

        constructor(array : number[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    IntArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.IntArrayAdapter";
    IntArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class LongArrayAdapter extends DefaultArrayAdapter {
        array : number[];

        constructor(array : number[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    LongArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.LongArrayAdapter";
    LongArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class FloatArrayAdapter extends DefaultArrayAdapter {
        array : number[];

        constructor(array : number[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    FloatArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.FloatArrayAdapter";
    FloatArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class DoubleArrayAdapter extends DefaultArrayAdapter {
        array : number[];

        constructor(array : number[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    DoubleArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.DoubleArrayAdapter";
    DoubleArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class CharArrayAdapter extends DefaultArrayAdapter {
        array : string[];

        constructor(array : string[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    CharArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.CharArrayAdapter";
    CharArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    export class BooleanArrayAdapter extends DefaultArrayAdapter {
        array : boolean[];

        constructor(array : boolean[], wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            this.array = array;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.array.length?this.wrap(this.array[index]):null;
        }

        public size() : number {
            return this.array.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    BooleanArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.BooleanArrayAdapter";
    BooleanArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];



    /**
     * Much slower than the specialized versions; used only as the last resort.
     * @extends DefaultArrayAdapter
     * @class
     */
    export class GenericPrimitiveArrayAdapter extends DefaultArrayAdapter {
        array : any;

        length : number;

        constructor(array : any, wrapper : ObjectWrapper) {
            super(wrapper);
            if(this.array===undefined) this.array = null;
            if(this.length===undefined) this.length = 0;
            this.array = array;
            this.length = /* getLength */array.length;
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            return index >= 0 && index < this.length?this.wrap(/* get */this.array[index]):null;
        }

        public size() : number {
            return this.length;
        }

        public getWrappedObject() : any {
            return this.array;
        }
    }
    GenericPrimitiveArrayAdapter["__class"] = "freemarker.template.DefaultArrayAdapter.GenericPrimitiveArrayAdapter";
    GenericPrimitiveArrayAdapter["__interfaces"] = ["freemarker.ext.util.WrapperTemplateModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","freemarker.template.AdapterTemplateModel","java.io.Serializable"];


}



var __Function = Function;
