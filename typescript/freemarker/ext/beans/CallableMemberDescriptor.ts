/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelException } from '../../template/TemplateModelException';
import { MaybeEmptyCallableMemberDescriptor } from './MaybeEmptyCallableMemberDescriptor';
import { BeansWrapper } from './BeansWrapper';

/**
 * Packs a {link Method} or {link Constructor} together with its parameter types. The actual
 * {link Method} or {link Constructor} is not exposed by the API, because in rare cases calling them require
 * type conversion that the Java reflection API can't do, hence the developer shouldn't be tempted to call them
 * directly.
 * @extends MaybeEmptyCallableMemberDescriptor
 * @class
 */
export abstract class CallableMemberDescriptor extends MaybeEmptyCallableMemberDescriptor {
    abstract invokeMethod(bw : BeansWrapper, obj : any, args : Array) : TemplateModel;

    abstract invokeConstructor(bw : BeansWrapper, args : Array) : any;

    abstract getDeclaration() : string;

    abstract isConstructor() : boolean;

    abstract isStatic() : boolean;

    abstract isVarargs() : boolean;

    abstract getParamTypes() : Array<any>;

    abstract getName() : string;
}
CallableMemberDescriptor["__class"] = "freemarker.ext.beans.CallableMemberDescriptor";



var __Function = Function;
