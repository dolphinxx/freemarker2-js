/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../../template/TemplateModel';
import {MaybeEmptyCallableMemberDescriptor} from './MaybeEmptyCallableMemberDescriptor';

/**
 * Packs a {link Method} or {link Constructor} together with its parameter types. The actual
 * {link Method} or {link Constructor} is not exposed by the API, because in rare cases calling them require
 * type conversion that the Java reflection API can't do, hence the developer shouldn't be tempted to call them
 * directly.
 * @extends MaybeEmptyCallableMemberDescriptor
 * @class
 */
export abstract class CallableMemberDescriptor extends MaybeEmptyCallableMemberDescriptor {
    abstract invokeMethod(bw: /*BeansWrapper*/any, obj: any, args: Array<any>): TemplateModel;

    abstract invokeConstructor(bw: /*BeansWrapper*/any, args: Array<any>): any;

    abstract getDeclaration(): string;

    abstract isConstructor(): boolean;

    abstract isStatic(): boolean;

    abstract isVarargs(): boolean;

    abstract getParamTypes(): Array<any>;

    abstract getName(): string;
}

CallableMemberDescriptor["__class"] = "freemarker.ext.beans.CallableMemberDescriptor";



