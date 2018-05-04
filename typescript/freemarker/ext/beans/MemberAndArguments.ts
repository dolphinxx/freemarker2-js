/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateModel } from '../../template/TemplateModel';
import { TemplateModelException } from '../../template/TemplateModelException';
import { MaybeEmptyMemberAndArguments } from './MaybeEmptyMemberAndArguments';
import { CallableMemberDescriptor } from './CallableMemberDescriptor';
import { BeansWrapper } from './BeansWrapper';

/**
 * 
 * @extends MaybeEmptyMemberAndArguments
 * @class
 */
export class MemberAndArguments extends MaybeEmptyMemberAndArguments {
    /*private*/ callableMemberDesc : CallableMemberDescriptor;

    /*private*/ args : Array<any>;

    constructor(memberDesc : CallableMemberDescriptor, args : Array) {
        super();
        if(this.callableMemberDesc===undefined) this.callableMemberDesc = null;
        if(this.args===undefined) this.args = null;
        this.callableMemberDesc = memberDesc;
        this.args = args;
    }

    /**
     * The already unwrapped arguments.
     * @return {Array}
     */
    getArgs() : Array {
        return this.args;
    }

    invokeMethod(bw : BeansWrapper, obj : any) : TemplateModel {
        return this.callableMemberDesc.invokeMethod(bw, obj, this.args);
    }

    invokeConstructor(bw : BeansWrapper) : any {
        return this.callableMemberDesc.invokeConstructor(bw, this.args);
    }

    getCallableMemberDescriptor() : CallableMemberDescriptor {
        return this.callableMemberDesc;
    }
}
MemberAndArguments["__class"] = "freemarker.ext.beans.MemberAndArguments";



var __Function = Function;
