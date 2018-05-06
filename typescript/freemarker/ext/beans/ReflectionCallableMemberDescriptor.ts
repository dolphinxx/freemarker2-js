/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../../template/TemplateModel';
import {CallableMemberDescriptor} from './CallableMemberDescriptor';
import {BeansWrapper} from './BeansWrapper';
import {_MethodUtil} from './_MethodUtil';

/**
 * The most commonly used {link CallableMemberDescriptor} implementation.
 * @extends CallableMemberDescriptor
 * @class
 */
export class ReflectionCallableMemberDescriptor extends CallableMemberDescriptor {
    /*private*/ member : Member;

    /**
     * Don't modify this array!
     */
    paramTypes : Array<any>;

    public constructor(member? : any, paramTypes? : any) {
        if(((member != null && (member instanceof Function)) || member === null) && ((paramTypes != null && paramTypes instanceof <any>Array && (paramTypes.length==0 || paramTypes[0] == null ||(paramTypes[0] != null))) || paramTypes === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.member===undefined) this.member = null;
            if(this.paramTypes===undefined) this.paramTypes = null;
            if(this.member===undefined) this.member = null;
            if(this.paramTypes===undefined) this.paramTypes = null;
            (() => {
                this.member = member;
                this.paramTypes = paramTypes;
            })();
        } else if(((member != null && member instanceof <any>Constructor) || member === null) && ((paramTypes != null && paramTypes instanceof <any>Array && (paramTypes.length==0 || paramTypes[0] == null ||(paramTypes[0] != null))) || paramTypes === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super();
            if(this.member===undefined) this.member = null;
            if(this.paramTypes===undefined) this.paramTypes = null;
            if(this.member===undefined) this.member = null;
            if(this.paramTypes===undefined) this.paramTypes = null;
            (() => {
                this.member = member;
                this.paramTypes = paramTypes;
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @param {BeansWrapper} bw
     * @param {Object} obj
     * @param {Array} args
     * @return {*}
     */
    invokeMethod(bw : BeansWrapper, obj : any, args : Array) : TemplateModel {
        return bw.invokeMethod(obj, <Function><any>this.member, args);
    }

    /**
     * 
     * @param {BeansWrapper} bw
     * @param {Array} args
     * @return {Object}
     */
    invokeConstructor(bw : BeansWrapper, args : Array) : any {
        return (o => o.newInstance.apply(o, args))((<Constructor><any>this.member));
    }

    /**
     * 
     * @return {String}
     */
    getDeclaration() : string {
        return _MethodUtil.toString(this.member);
    }

    /**
     * 
     * @return {boolean}
     */
    isConstructor() : boolean {
        return (this.member != null && this.member instanceof <any>Constructor);
    }

    /**
     * 
     * @return {boolean}
     */
    isStatic() : boolean {
        return (this.member.getModifiers() & Modifier.STATIC) !== 0;
    }

    /**
     * 
     * @return {boolean}
     */
    isVarargs() : boolean {
        return _MethodUtil.isVarargs(this.member);
    }

    /**
     * 
     * @return {Array}
     */
    getParamTypes() : Array<any> {
        return this.paramTypes;
    }

    /**
     * 
     * @return {String}
     */
    getName() : string {
        return this.member.getName();
    }
}
ReflectionCallableMemberDescriptor["__class"] = "freemarker.ext.beans.ReflectionCallableMemberDescriptor";




