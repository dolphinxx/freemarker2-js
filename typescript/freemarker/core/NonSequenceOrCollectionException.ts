/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {WrapperTemplateModel} from '../ext/util/WrapperTemplateModel';
import {TemplateModel} from '../template/TemplateModel';
import {CollectionUtils} from '../template/utility/CollectionUtils';
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {Environment} from './Environment';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {Expression} from './Expression';
import {ClassUtil} from "../template/utility/ClassUtil";

/**
 * Indicates that a {link TemplateSequenceModel} or {link TemplateCollectionModel} value was expected, but the value
 * had a different type.
 * 
 * @since 2.3.21
 * @param {String} description
 * @param {Environment} env
 * @class
 * @extends UnexpectedTypeException
 */
export class NonSequenceOrCollectionException extends UnexpectedTypeException {
    static EXPECTED_TYPES : Array<any>; public static EXPECTED_TYPES_$LI$() : Array<any> { if(NonSequenceOrCollectionException.EXPECTED_TYPES == null) NonSequenceOrCollectionException.EXPECTED_TYPES = ["freemarker.template.TemplateSequenceModel", "freemarker.template.TemplateCollectionModel"]; return NonSequenceOrCollectionException.EXPECTED_TYPES; };

    static ITERABLE_SUPPORT_HINT : string = "The problematic value is a java.lang.Iterable. Using DefaultObjectWrapper(..., iterableSupport=true) as the object_wrapper setting of the FreeMarker configuration should solve this.";

    public constructor(blamed? : any, model? : any, tip? : any, env? : any) {
        if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((typeof tip === 'string') || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let tips : any = [tip];
                super(blamed, model, "sequence or collection", NonSequenceOrCollectionException.EXPECTED_TYPES_$LI$(), NonSequenceOrCollectionException.extendTipsIfIterable(model, tips), env);
                (<any>Object).setPrototypeOf(this, NonSequenceOrCollectionException.prototype);
            }
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((tip != null && tip instanceof <any>Array && (tip.length==0 || tip[0] == null ||(tip[0] != null))) || tip === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let tips : any = __args[2];
            super(blamed, model, "sequence or collection", NonSequenceOrCollectionException.EXPECTED_TYPES_$LI$(), NonSequenceOrCollectionException.extendTipsIfIterable(model, tips), env);
            (<any>Object).setPrototypeOf(this, NonSequenceOrCollectionException.prototype);
        } else if(((blamed != null && blamed instanceof <any>Expression) || blamed === null) && ((model != null && ClassUtil.isAssignableFrom(model, "freemarker.template.TemplateModel")) || model === null) && ((ClassUtil.isInstanceOf(tip, 'freemarker.core.Environment')) || tip === null) && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[2];
            {
                let __args = Array.prototype.slice.call(arguments);
                let tips : any = CollectionUtils.EMPTY_OBJECT_ARRAY_$LI$();
                super(blamed, model, "sequence or collection", NonSequenceOrCollectionException.EXPECTED_TYPES_$LI$(), NonSequenceOrCollectionException.extendTipsIfIterable(model, tips), env);
                (<any>Object).setPrototypeOf(this, NonSequenceOrCollectionException.prototype);
            }
        } else if(((typeof blamed === 'string') || blamed === null) && ((ClassUtil.isInstanceOf(model, 'freemarker.core.Environment')) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description : any = __args[0];
            let env : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonSequenceOrCollectionException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && ((model != null && model instanceof <any>_ErrorDescriptionBuilder) || model === null) && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            let description : any = __args[1];
            super(env, description);
            (<any>Object).setPrototypeOf(this, NonSequenceOrCollectionException.prototype);
        } else if(((ClassUtil.isInstanceOf(blamed, 'freemarker.core.Environment')) || blamed === null) && model === undefined && tip === undefined && env === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let env : any = __args[0];
            super(env, "Expecting sequence or collection value here");
            (<any>Object).setPrototypeOf(this, NonSequenceOrCollectionException.prototype);
        } else throw new Error('invalid overload');
    }

    /*private*/ static extendTipsIfIterable(model : TemplateModel, tips : Array<any>) : Array<any> {
        if(NonSequenceOrCollectionException.isWrappedIterable(model)) {
            let tipsLen : number = tips != null?tips.length:0;
            let extendedTips : Array<any> = (s => { let a=[]; while(s-->0) a.push(null); return a; })(tipsLen + 1);
            for(let i : number = 0; i < tipsLen; i++) {
                extendedTips[i] = tips[i];
            }
            extendedTips[tipsLen] = NonSequenceOrCollectionException.ITERABLE_SUPPORT_HINT;
            return extendedTips;
        } else {
            return tips;
        }
    }

    public static isWrappedIterable(model : TemplateModel) : boolean {
        return (model != null && ClassUtil.isAssignableFrom(model, "freemarker.ext.util.WrapperTemplateModel")) && ((<WrapperTemplateModel><any>model).getWrappedObject() != null && ((<WrapperTemplateModel><any>model).getWrappedObject()["__interfaces"] != null && (<WrapperTemplateModel><any>model).getWrappedObject()["__interfaces"].indexOf("java.lang.Iterable") >= 0 || (<WrapperTemplateModel><any>model).getWrappedObject().constructor != null && (<WrapperTemplateModel><any>model).getWrappedObject().constructor["__interfaces"] != null && (<WrapperTemplateModel><any>model).getWrappedObject().constructor["__interfaces"].indexOf("java.lang.Iterable") >= 0));
    }
}
NonSequenceOrCollectionException["__class"] = "freemarker.core.NonSequenceOrCollectionException";
NonSequenceOrCollectionException["__interfaces"] = ["java.io.Serializable"];






NonSequenceOrCollectionException.EXPECTED_TYPES_$LI$();
