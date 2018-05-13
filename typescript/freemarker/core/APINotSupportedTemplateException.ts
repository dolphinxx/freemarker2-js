/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {DefaultObjectWrapper} from '../template/DefaultObjectWrapper';
import {ObjectWrapper} from '../template/ObjectWrapper';
import {SimpleHash} from '../template/SimpleHash';
import {SimpleSequence} from '../template/SimpleSequence';
import {TemplateException} from '../template/TemplateException';
import {TemplateModel} from '../template/TemplateModel';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {Expression} from './Expression';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {_DelayedFTLTypeDescription} from './_DelayedFTLTypeDescription';
import {_DelayedShortClassName} from './_DelayedShortClassName';
import {_DelayedToString} from './_DelayedToString';
import {Configurable} from './Configurable';

/**
 * Thrown when {@code ?api} is not supported by a value.
 * @extends TemplateException
 * @class
 */
export class APINotSupportedTemplateException extends TemplateException {
    constructor(env : /*Environment*/any, blamedExpr : Expression, model : TemplateModel) {
        super(null, env, blamedExpr, APINotSupportedTemplateException.buildDescription(env, blamedExpr, model));
        (<any>Object).setPrototypeOf(this, APINotSupportedTemplateException.prototype);
    }

    static buildDescription(env : /*Environment*/any, blamedExpr : Expression, tm : TemplateModel) : _ErrorDescriptionBuilder {
        let desc : _ErrorDescriptionBuilder = new _ErrorDescriptionBuilder(["The value doesn\'t support ?api. See requirements in the FreeMarker Manual. (FTL type: ", new _DelayedFTLTypeDescription(tm), ", TemplateModel class: ", new _DelayedShortClassName((<any>tm.constructor)), ", ObjectWapper: ", new _DelayedToString(env.getObjectWrapper()), ")"]).blame(blamedExpr);
        if(blamedExpr.isLiteral()) {
            desc.tip$java_lang_String("Only adapted Java objects can possibly have API, not values created inside templates.");
        } else {
            let ow : ObjectWrapper = env.getObjectWrapper();
            if((ow != null && ow instanceof <any>DefaultObjectWrapper) && ((tm != null && tm instanceof <any>SimpleHash) || (tm != null && tm instanceof <any>SimpleSequence))) {
                let dow : DefaultObjectWrapper = <DefaultObjectWrapper><any>ow;
                if(!dow.getUseAdaptersForContainers()) {
                    desc.tip(["In the FreeMarker configuration, \"", Configurable.OBJECT_WRAPPER_KEY_$LI$(), "\" is a DefaultObjectWrapper with its \"useAdaptersForContainers\" property set to false. Setting it to true might solves this problem."]);
                    if(dow.getIncompatibleImprovements().intValue() < /*_TemplateAPI.VERSION_INT_2_3_22_$LI$()*/2003022) {
                        desc.tip$java_lang_String("Setting DefaultObjectWrapper\'s \"incompatibleImprovements\" to 2.3.22 or higher will change the default value of \"useAdaptersForContainers\" to true.");
                    }
                } else if((tm != null && tm instanceof <any>SimpleSequence) && dow.getForceLegacyNonListCollections()) {
                    desc.tip(["In the FreeMarker configuration, \"", Configurable.OBJECT_WRAPPER_KEY_$LI$(), "\" is a DefaultObjectWrapper with its \"forceLegacyNonListCollections\" property set to true. If you are trying to access the API of a non-List Collection, setting the \"forceLegacyNonListCollections\" property to false might solves this problem."]);
                }
            }
        }
        return desc;
    }
}
APINotSupportedTemplateException["__class"] = "freemarker.core.APINotSupportedTemplateException";
APINotSupportedTemplateException["__interfaces"] = ["java.io.Serializable"];




