/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BeanModel} from '../ext/beans/BeanModel';
import {OverloadedMethodsModel} from '../ext/beans/OverloadedMethodsModel';
import {SimpleMethodModel} from '../ext/beans/SimpleMethodModel';
import {_BeansAPI} from '../ext/beans/_BeansAPI';
import {SimpleDate} from '../template/SimpleDate';
import {SimpleNumber} from '../template/SimpleNumber';
import {SimpleScalar} from '../template/SimpleScalar';
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateCollectionModelEx} from '../template/TemplateCollectionModelEx';
import {TemplateDateModel} from '../template/TemplateDateModel';
import {TemplateHashModel} from '../template/TemplateHashModel';
import {TemplateHashModelEx} from '../template/TemplateHashModelEx';
import {TemplateMethodModel} from '../template/TemplateMethodModel';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelException} from '../template/TemplateModelException';
import {TemplateModelWithAPISupport} from '../template/TemplateModelWithAPISupport';
import {TemplateNumberModel} from '../template/TemplateNumberModel';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {_TemplateAPI} from '../template/_TemplateAPI';
import {ICIChainMember} from './ICIChainMember';
import {Environment} from './Environment';
import {EvalUtil} from './EvalUtil';
import {MiscUtil} from './MiscUtil';
import {UnexpectedTypeException} from './UnexpectedTypeException';
import {BuiltIn} from './BuiltIn';
import {TemplateDateFormat} from './TemplateDateFormat';
import {_CoreAPI} from './_CoreAPI';
import {_TemplateModelException} from './_TemplateModelException';
import {_DelayedJQuote} from './_DelayedJQuote';
import {_MiscTemplateException} from './_MiscTemplateException';
import {Configurable} from './Configurable';
import {APINotSupportedTemplateException} from './APINotSupportedTemplateException';
import {Macro} from './Macro';
import {_MessageUtil} from './_MessageUtil';
import {BugException} from './BugException';
import {TemplateNumberFormat} from './TemplateNumberFormat';
import {BackwardCompatibleTemplateNumberFormat} from './BackwardCompatibleTemplateNumberFormat';

/**
 * A holder for builtins that didn't fit into any other category.
 * @class
 */
export class BuiltInsForMultipleTypes {
    constructor() {
    }
}
BuiltInsForMultipleTypes["__class"] = "freemarker.core.BuiltInsForMultipleTypes";


export namespace BuiltInsForMultipleTypes {

    export class dateBI extends BuiltIn {
        dateType : number;

        constructor(dateType : number) {
            super();
            if(this.dateType===undefined) this.dateType = 0;
            this.dateType = dateType;
        }

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) {
                let dmodel : TemplateDateModel = <TemplateDateModel><any>model;
                let dtype : number = dmodel.getDateType();
                if(this.dateType === dtype) {
                    return model;
                }
                if(dtype === TemplateDateModel.UNKNOWN || dtype === TemplateDateModel.DATETIME) {
                    return new SimpleDate(dmodel.getAsDate(), this.dateType);
                }
                throw new _MiscTemplateException(this, "Cannot convert ", /* get */TemplateDateModel.TYPE_NAMES[dtype], " to ", /* get */TemplateDateModel.TYPE_NAMES[this.dateType]);
            }
            let s : string = this.target.evalAndCoerceToPlainText$freemarker_core_Environment(env);
            return new dateBI.DateParser(this, s, env);
        }
    }
    dateBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.dateBI";
    dateBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace dateBI {

        export class DateParser implements TemplateDateModel, TemplateMethodModel, TemplateHashModel {
            public __parent: any;
            text : string;

            env : Environment;

            defaultFormat : TemplateDateFormat;

            cachedValue : TemplateDateModel;

            constructor(__parent: any, text : string, env : /*Environment*/any) {
                this.__parent = __parent;
                if(this.text===undefined) this.text = null;
                if(this.env===undefined) this.env = null;
                if(this.defaultFormat===undefined) this.defaultFormat = null;
                if(this.cachedValue===undefined) this.cachedValue = null;
                this.text = text;
                this.env = env;
                this.defaultFormat = env.getTemplateDateFormat$int$java_lang_Class$freemarker_core_Expression$boolean(__parent.dateType, Date, __parent.target, false);
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 0, 1);
                return /* size */(<number>args.length) === 0?this.getAsDateModel():this.get(<string>/* get */args[0]);
            }

            public get(pattern : string) : TemplateModel {
                let format : TemplateDateFormat;
                try {
                    format = this.env.getTemplateDateFormat$java_lang_String$int$java_lang_Class$freemarker_core_Expression$freemarker_core_Expression$boolean(pattern, this.__parent.dateType, Date, this.__parent.target, this.__parent, true);
                } catch(e) {
                    throw _CoreAPI.ensureIsTemplateModelException("Failed to get format", e);
                }
                return this.toTemplateDateModel(this.parse(format));
            }

            toTemplateDateModel(date : any) : TemplateDateModel {
                if(date != null && date instanceof <any>Date) {
                    return new SimpleDate(<Date>date, this.__parent.dateType);
                } else {
                    let tm : TemplateDateModel = <TemplateDateModel><any>date;
                    if(tm.getDateType() !== this.__parent.dateType) {
                        throw new _TemplateModelException("The result of the parsing was of the wrong date type.");
                    }
                    return tm;
                }
            }

            getAsDateModel() : TemplateDateModel {
                if(this.cachedValue == null) {
                    this.cachedValue = this.toTemplateDateModel(this.parse(this.defaultFormat));
                }
                return this.cachedValue;
            }

            public getAsDate() : Date {
                return this.getAsDateModel().getAsDate();
            }

            public getDateType() : number {
                return this.__parent.dateType;
            }

            public isEmpty() : boolean {
                return false;
            }

            parse(df : TemplateDateFormat) : any {
                try {
                    return df.parse(this.text, this.__parent.dateType);
                } catch(e) {
                    throw new _TemplateModelException(e, "The string doesn\'t match the expected date/time/date-time format. The string to parse was: ", new _DelayedJQuote(this.text), ". ", "The expected format was: ", new _DelayedJQuote(df.getDescription()), ".", e.message != null?"\nThe nested reason given follows:\n":"", e.message != null?e.message:"");
                }
            }
        }
        DateParser["__class"] = "freemarker.core.BuiltInsForMultipleTypes.dateBI.DateParser";
        DateParser["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateHashModel","freemarker.template.TemplateDateModel","freemarker.template.TemplateModel"];


    }


    export class apiBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            if(!env.isAPIBuiltinEnabled()) {
                throw new _MiscTemplateException(this, "Can\'t use ?api, because the \"", Configurable.API_BUILTIN_ENABLED_KEY_$LI$(), "\" configuration setting is false. Think twice before you set it to true though. Especially, it shouldn\'t abused for modifying Map-s and Collection-s.");
            }
            let tm : TemplateModel = this.target.eval(env);
            if(!(tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateModelWithAPISupport") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateModelWithAPISupport") >= 0))) {
                this.target.assertNonNull(tm, env);
                throw new APINotSupportedTemplateException(env, this.target, tm);
            }
            return (<TemplateModelWithAPISupport><any>tm).getAPI();
        }

        constructor() {
            super();
        }
    }
    apiBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.apiBI";
    apiBI["__interfaces"] = ["java.lang.Cloneable"];



    export class has_apiBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateModelWithAPISupport") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateModelWithAPISupport") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    has_apiBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.has_apiBI";
    has_apiBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_booleanBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_booleanBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_booleanBI";
    is_booleanBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_collectionBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_collectionBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_collectionBI";
    is_collectionBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_collection_exBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_collection_exBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_collection_exBI";
    is_collection_exBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_dateLikeBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_dateLikeBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_dateLikeBI";
    is_dateLikeBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_dateOfTypeBI extends BuiltIn {
        dateType : number;

        constructor(dateType : number) {
            super();
            if(this.dateType===undefined) this.dateType = 0;
            this.dateType = dateType;
        }

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) && (<TemplateDateModel><any>tm).getDateType() === this.dateType?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }
    }
    is_dateOfTypeBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_dateOfTypeBI";
    is_dateOfTypeBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_directiveBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return ((tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0)) || (tm != null && tm instanceof <any>Macro) || (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateDirectiveModel") >= 0)))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_directiveBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_directiveBI";
    is_directiveBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_enumerableBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return ((tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) || (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0))) && (_TemplateAPI.getTemplateLanguageVersionAsInt$freemarker_core_TemplateObject(this) < _TemplateAPI.VERSION_INT_2_3_21_$LI$() || !((tm != null && tm instanceof <any>SimpleMethodModel) || (tm != null && tm instanceof <any>OverloadedMethodsModel)))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_enumerableBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_enumerableBI";
    is_enumerableBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_hash_exBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_hash_exBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_hash_exBI";
    is_hash_exBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_hashBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_hashBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_hashBI";
    is_hashBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_indexableBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_indexableBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_indexableBI";
    is_indexableBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_macroBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && tm instanceof <any>Macro)?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_macroBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_macroBI";
    is_macroBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_markup_outputBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.core.TemplateMarkupOutputModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_markup_outputBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_markup_outputBI";
    is_markup_outputBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_methodBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateMethodModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateMethodModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_methodBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_methodBI";
    is_methodBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_nodeBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateNodeModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_nodeBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_nodeBI";
    is_nodeBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_numberBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_numberBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_numberBI";
    is_numberBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_sequenceBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return ((tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) && (!((tm != null && tm instanceof <any>OverloadedMethodsModel) || (tm != null && tm instanceof <any>SimpleMethodModel)) || !env.isIcI2324OrLater()))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_sequenceBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_sequenceBI";
    is_sequenceBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_stringBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_stringBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_stringBI";
    is_stringBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_transformBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            this.target.assertNonNull(tm, env);
            return (tm != null && (tm["__interfaces"] != null && tm["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0 || tm.constructor != null && tm.constructor["__interfaces"] != null && tm.constructor["__interfaces"].indexOf("freemarker.template.TemplateTransformModel") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        constructor() {
            super();
        }
    }
    is_transformBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.is_transformBI";
    is_transformBI["__interfaces"] = ["java.lang.Cloneable"];



    export class namespaceBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel = this.target.eval(env);
            if(!(tm != null && tm instanceof <any>Macro)) {
                throw new UnexpectedTypeException(this.target, tm, "macro or function", [Macro], env);
            } else {
                return env.getMacroNamespace(<Macro><any>tm);
            }
        }

        constructor() {
            super();
        }
    }
    namespaceBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.namespaceBI";
    namespaceBI["__interfaces"] = ["java.lang.Cloneable"];



    export class sizeBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            let size : number;
            if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
                size = (<TemplateSequenceModel><any>model).size();
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0)) {
                size = (<TemplateCollectionModelEx><any>model).size();
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0)) {
                size = (<TemplateHashModelEx><any>model).size();
            } else {
                throw new UnexpectedTypeException(this.target, model, "extended-hash or sequence or extended collection", ["freemarker.template.TemplateHashModelEx", "freemarker.template.TemplateSequenceModel", "freemarker.template.TemplateCollectionModelEx"], env);
            }
            return new SimpleNumber(size);
        }

        constructor() {
            super();
        }
    }
    sizeBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.sizeBI";
    sizeBI["__interfaces"] = ["java.lang.Cloneable"];



    export class stringBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
                return new stringBI.NumberFormatter(this, <TemplateNumberModel><any>model, env);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) {
                let dm : TemplateDateModel = <TemplateDateModel><any>model;
                return new stringBI.DateFormatter(this, dm, env);
            } else if(model != null && model instanceof <any>SimpleScalar) {
                return model;
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
                return new stringBI.BooleanFormatter(this, <TemplateBooleanModel><any>model, env);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
                return new SimpleScalar((<TemplateScalarModel><any>model).getAsString());
            } else if(env.isClassicCompatible() && (model != null && model instanceof <any>BeanModel)) {
                return new SimpleScalar(_BeansAPI.getAsClassicCompatibleString(<BeanModel><any>model));
            } else {
                throw new UnexpectedTypeException(this.target, model, "number, date, boolean or string", ["freemarker.template.TemplateNumberModel", "freemarker.template.TemplateDateModel", "freemarker.template.TemplateBooleanModel", "freemarker.template.TemplateScalarModel"], env);
            }
        }

        constructor() {
            super();
        }
    }
    stringBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.stringBI";
    stringBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace stringBI {

        export class BooleanFormatter implements TemplateScalarModel, TemplateMethodModel {
            public __parent: any;
            bool : TemplateBooleanModel;

            env : Environment;

            constructor(__parent: any, bool : TemplateBooleanModel, env : /*Environment*/any) {
                this.__parent = __parent;
                if(this.bool===undefined) this.bool = null;
                if(this.env===undefined) this.env = null;
                this.bool = bool;
                this.env = env;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 2);
                return new SimpleScalar(<string>/* get */args[this.bool.getAsBoolean()?0:1]);
            }

            public getAsString() : string {
                if(this.bool != null && (this.bool["__interfaces"] != null && this.bool["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || this.bool.constructor != null && this.bool.constructor["__interfaces"] != null && this.bool.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
                    return (<TemplateScalarModel><any>this.bool).getAsString();
                } else {
                    try {
                        return this.env.formatBoolean(this.bool.getAsBoolean(), true);
                    } catch(e) {
                        throw new TemplateModelException(e);
                    }
                }
            }
        }
        BooleanFormatter["__class"] = "freemarker.core.BuiltInsForMultipleTypes.stringBI.BooleanFormatter";
        BooleanFormatter["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];



        export class DateFormatter implements TemplateScalarModel, TemplateHashModel, TemplateMethodModel {
            public __parent: any;
            dateModel : TemplateDateModel;

            env : Environment;

            defaultFormat : TemplateDateFormat;

            cachedValue : string;

            constructor(__parent: any, dateModel : TemplateDateModel, env : /*Environment*/any) {
                this.__parent = __parent;
                if(this.dateModel===undefined) this.dateModel = null;
                if(this.env===undefined) this.env = null;
                if(this.defaultFormat===undefined) this.defaultFormat = null;
                if(this.cachedValue===undefined) this.cachedValue = null;
                this.dateModel = dateModel;
                this.env = env;
                let dateType : number = dateModel.getDateType();
                this.defaultFormat = dateType === TemplateDateModel.UNKNOWN?null:env.getTemplateDateFormat$int$java_lang_Class$freemarker_core_Expression$boolean(dateType, (<any>EvalUtil.modelToDate(dateModel, __parent.target).constructor), __parent.target, true);
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                return this.formatWith(<string>/* get */args[0]);
            }

            public get(key : string) : TemplateModel {
                return this.formatWith(key);
            }

            formatWith(key : string) : TemplateModel {
                try {
                    return new SimpleScalar(this.env.formatDateToPlainText$freemarker_template_TemplateDateModel$java_lang_String$freemarker_core_Expression$freemarker_core_Expression$boolean(this.dateModel, key, this.__parent.target, this.__parent, true));
                } catch(e) {
                    throw _CoreAPI.ensureIsTemplateModelException("Failed to format value", e);
                }
            }

            public getAsString() : string {
                if(this.cachedValue == null) {
                    if(this.defaultFormat == null) {
                        if(this.dateModel.getDateType() === TemplateDateModel.UNKNOWN) {
                            throw _MessageUtil.newCantFormatUnknownTypeDateException(this.__parent.target, null);
                        } else {
                            throw new BugException();
                        }
                    }
                    try {
                        this.cachedValue = EvalUtil.assertFormatResultNotNull$java_lang_String(this.defaultFormat.formatToPlainText(this.dateModel));
                    } catch(e) {
                        try {
                            throw _MessageUtil.newCantFormatDateException(this.defaultFormat, this.__parent.target, e, true);
                        } catch(e2) {
                            throw _CoreAPI.ensureIsTemplateModelException("Failed to format date/time/datetime", e2);
                        }
                    }
                }
                return this.cachedValue;
            }

            public isEmpty() : boolean {
                return false;
            }
        }
        DateFormatter["__class"] = "freemarker.core.BuiltInsForMultipleTypes.stringBI.DateFormatter";
        DateFormatter["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateHashModel","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];



        export class NumberFormatter implements TemplateScalarModel, TemplateHashModel, TemplateMethodModel {
            public __parent: any;
            numberModel : TemplateNumberModel;

            number : number;

            env : Environment;

            defaultFormat : TemplateNumberFormat;

            cachedValue : string;

            constructor(__parent: any, numberModel : TemplateNumberModel, env : /*Environment*/any) {
                this.__parent = __parent;
                if(this.numberModel===undefined) this.numberModel = null;
                if(this.number===undefined) this.number = null;
                if(this.env===undefined) this.env = null;
                if(this.defaultFormat===undefined) this.defaultFormat = null;
                if(this.cachedValue===undefined) this.cachedValue = null;
                this.env = env;
                this.numberModel = numberModel;
                this.number = EvalUtil.modelToNumber(numberModel, __parent.target);
                try {
                    this.defaultFormat = env.getTemplateNumberFormat$freemarker_core_Expression$boolean(__parent, true);
                } catch(e) {
                    throw _CoreAPI.ensureIsTemplateModelException("Failed to get default number format", e);
                }
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                return this.get(<string>/* get */args[0]);
            }

            public get(key : string) : TemplateModel {
                let format : TemplateNumberFormat;
                try {
                    format = this.env.getTemplateNumberFormat$java_lang_String$freemarker_core_Expression$boolean(key, this.__parent, true);
                } catch(e) {
                    throw _CoreAPI.ensureIsTemplateModelException("Failed to get number format", e);
                }
                let result : string;
                try {
                    if(format != null && format instanceof <any>BackwardCompatibleTemplateNumberFormat) {
                        result = this.env.formatNumberToPlainText$java_lang_Number$freemarker_core_BackwardCompatibleTemplateNumberFormat$freemarker_core_Expression(this.number, <BackwardCompatibleTemplateNumberFormat>format, this.__parent.target);
                    } else {
                        result = this.env.formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_TemplateNumberFormat$freemarker_core_Expression$boolean(this.numberModel, format, this.__parent.target, true);
                    }
                } catch(e) {
                    throw _CoreAPI.ensureIsTemplateModelException("Failed to format number", e);
                }
                return new SimpleScalar(result);
            }

            public getAsString() : string {
                if(this.cachedValue == null) {
                    try {
                        if(this.defaultFormat != null && this.defaultFormat instanceof <any>BackwardCompatibleTemplateNumberFormat) {
                            this.cachedValue = this.env.formatNumberToPlainText$java_lang_Number$freemarker_core_BackwardCompatibleTemplateNumberFormat$freemarker_core_Expression(this.number, <BackwardCompatibleTemplateNumberFormat>this.defaultFormat, this.__parent.target);
                        } else {
                            this.cachedValue = this.env.formatNumberToPlainText$freemarker_template_TemplateNumberModel$freemarker_core_TemplateNumberFormat$freemarker_core_Expression$boolean(this.numberModel, this.defaultFormat, this.__parent.target, true);
                        }
                    } catch(e) {
                        throw _CoreAPI.ensureIsTemplateModelException("Failed to format number", e);
                    }
                }
                return this.cachedValue;
            }

            public isEmpty() : boolean {
                return false;
            }
        }
        NumberFormatter["__class"] = "freemarker.core.BuiltInsForMultipleTypes.stringBI.NumberFormatter";
        NumberFormatter["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateHashModel","freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];


    }


    export abstract class AbstractCBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
                return this.formatNumber(env, model);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
                return new SimpleScalar((<TemplateBooleanModel><any>model).getAsBoolean()?MiscUtil.C_TRUE:MiscUtil.C_FALSE);
            } else {
                throw new UnexpectedTypeException(this.target, model, "number or boolean", ["freemarker.template.TemplateNumberModel", "freemarker.template.TemplateBooleanModel"], env);
            }
        }

        abstract formatNumber(env : /*Environment*/any, model : TemplateModel) : TemplateModel;

        constructor() {
            super();
        }
    }
    AbstractCBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.AbstractCBI";
    AbstractCBI["__interfaces"] = ["java.lang.Cloneable"];



    export class cBI extends BuiltInsForMultipleTypes.AbstractCBI implements ICIChainMember {
        prevICIObj : cBI.BIBeforeICE2d3d21 = new cBI.BIBeforeICE2d3d21();

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
                return this.formatNumber(env, model);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
                return new SimpleScalar((<TemplateBooleanModel><any>model).getAsBoolean()?MiscUtil.C_TRUE:MiscUtil.C_FALSE);
            } else {
                throw new UnexpectedTypeException(this.target, model, "number or boolean", ["freemarker.template.TemplateNumberModel", "freemarker.template.TemplateBooleanModel"], env);
            }
        }

        /**
         * 
         * @param {Environment} env
         * @param {*} model
         * @return {*}
         */
        formatNumber(env : /*Environment*/any, model : TemplateModel) : TemplateModel {
            let num : number = EvalUtil.modelToNumber(<TemplateNumberModel><any>model, this.target);
            if((typeof num === 'number') || (typeof num === 'number')) {
                return new SimpleScalar(num.toString());
            } else if(typeof num === 'number') {
                let n : number = /* doubleValue */num;
                if(n === Number.POSITIVE_INFINITY) {
                    return new SimpleScalar("INF");
                }
                if(n === Number.NEGATIVE_INFINITY) {
                    return new SimpleScalar("-INF");
                }
                if(/* isNaN */isNaN(n)) {
                    return new SimpleScalar("NaN");
                }
            } else if(typeof num === 'number') {
                let n : number = /* floatValue */num;
                if(n === Number.POSITIVE_INFINITY) {
                    return new SimpleScalar("INF");
                }
                if(n === Number.NEGATIVE_INFINITY) {
                    return new SimpleScalar("-INF");
                }
                if(/* isNaN */isNaN(n)) {
                    return new SimpleScalar("NaN");
                }
            }
            return new SimpleScalar(env.getCNumberFormat().format(num));
        }

        public getMinimumICIVersion() : number {
            return _TemplateAPI.VERSION_INT_2_3_21_$LI$();
        }

        public getPreviousICIChainMember() : any {
            return this.prevICIObj;
        }

        constructor() {
            super();
        }
    }
    cBI["__class"] = "freemarker.core.BuiltInsForMultipleTypes.cBI";
    cBI["__interfaces"] = ["java.lang.Cloneable","freemarker.core.ICIChainMember"];



    export namespace cBI {

        export class BIBeforeICE2d3d21 extends BuiltInsForMultipleTypes.AbstractCBI {
            /**
             * 
             * @param {Environment} env
             * @param {*} model
             * @return {*}
             */
            formatNumber(env : /*Environment*/any, model : TemplateModel) : TemplateModel {
                let num : number = EvalUtil.modelToNumber(<TemplateNumberModel><any>model, this.target);
                if((typeof num === 'number') || (typeof num === 'number')) {
                    return new SimpleScalar(num.toString());
                } else {
                    return new SimpleScalar(env.getCNumberFormat().format(num));
                }
            }

            constructor() {
                super();
            }
        }
        BIBeforeICE2d3d21["__class"] = "freemarker.core.BuiltInsForMultipleTypes.cBI.BIBeforeICE2d3d21";
        BIBeforeICE2d3d21["__interfaces"] = ["java.lang.Cloneable"];


    }

}



