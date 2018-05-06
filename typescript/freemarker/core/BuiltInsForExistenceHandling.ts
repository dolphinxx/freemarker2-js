/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateMethodModelEx} from '../template/TemplateMethodModelEx';
import {TemplateModel} from '../template/TemplateModel';
import {BuiltIn} from './BuiltIn';
import {Environment} from './Environment';
import {Expression} from './Expression';
import {ParentheticalExpression} from './ParentheticalExpression';
import {_MessageUtil} from './_MessageUtil';
import {Configuration} from '../template/Configuration';

/**
 * A holder for builtins that deal with null left-hand values.
 * @class
 */
export class BuiltInsForExistenceHandling {
    constructor() {
    }
}
BuiltInsForExistenceHandling["__class"] = "freemarker.core.BuiltInsForExistenceHandling";


export namespace BuiltInsForExistenceHandling {

    export abstract class ExistenceBuiltIn extends BuiltIn {
        evalMaybeNonexistentTarget(env : /*Environment*/any) : TemplateModel {
            let tm : TemplateModel;
            if(this.target != null && this.target instanceof <any>ParentheticalExpression) {
                let lastFIRE : boolean = env.setFastInvalidReferenceExceptions(true);
                try {
                    tm = this.target.eval(env);
                } catch(ire) {
                    tm = null;
                } finally {
                    env.setFastInvalidReferenceExceptions(lastFIRE);
                }
            } else {
                tm = this.target.eval(env);
            }
            return tm;
        }

        constructor() {
            super();
        }
    }
    ExistenceBuiltIn["__class"] = "freemarker.core.BuiltInsForExistenceHandling.ExistenceBuiltIn";
    ExistenceBuiltIn["__interfaces"] = ["java.lang.Cloneable"];



    export class defaultBI extends BuiltInsForExistenceHandling.ExistenceBuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.evalMaybeNonexistentTarget(env);
            return model == null?defaultBI.FIRST_NON_NULL_METHOD_$LI$():new defaultBI.ConstantMethod(model);
        }

        /**
         * A method that goes through the arguments one by one and returns
         * the first one that is non-null. If all args are null, returns null.
         */
        static FIRST_NON_NULL_METHOD : TemplateMethodModelEx; public static FIRST_NON_NULL_METHOD_$LI$() : TemplateMethodModelEx { if(defaultBI.FIRST_NON_NULL_METHOD == null) defaultBI.FIRST_NON_NULL_METHOD = new defaultBI.defaultBI$0(); return defaultBI.FIRST_NON_NULL_METHOD; };

        constructor() {
            super();
        }
    }
    defaultBI["__class"] = "freemarker.core.BuiltInsForExistenceHandling.defaultBI";
    defaultBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace defaultBI {

        export class ConstantMethod implements TemplateMethodModelEx {
            constant : TemplateModel;

            constructor(constant : TemplateModel) {
                if(this.constant===undefined) this.constant = null;
                this.constant = constant;
            }

            public exec(args : Array<any>) : any {
                return this.constant;
            }
        }
        ConstantMethod["__class"] = "freemarker.core.BuiltInsForExistenceHandling.defaultBI.ConstantMethod";
        ConstantMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];



        export class defaultBI$0 implements TemplateMethodModelEx {
            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                if(argCnt === 0) throw _MessageUtil.newArgCntError$java_lang_String$int$int$int("?default", argCnt, 1, Number.MAX_VALUE);
                for(let i : number = 0; i < argCnt; i++) {
                    let result : TemplateModel = <TemplateModel><any>/* get */args[i];
                    if(result != null) return result;
                }
                return null;
            }

            constructor() {
            }
        }
        defaultBI$0["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class existsBI extends BuiltInsForExistenceHandling.ExistenceBuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            return this.evalMaybeNonexistentTarget(env) == null?TemplateBooleanModel.FALSE:TemplateBooleanModel.TRUE;
        }

        public evalToBoolean(env? : any, cfg? : any) : any {
            if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null)) {
                super.evalToBoolean(env, cfg);
            } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && cfg === undefined) {
                return <any>this.evalToBoolean$freemarker_core_Environment(env);
            } else if(((env != null && env instanceof <any>Configuration) || env === null) && cfg === undefined) {
                return <any>this.evalToBoolean$freemarker_template_Configuration(env);
            } else throw new Error('invalid overload');
        }

        evalToBoolean$freemarker_core_Environment(env : /*Environment*/any) : boolean {
            return this._eval(env) === TemplateBooleanModel.TRUE;
        }

        constructor() {
            super();
        }
    }
    existsBI["__class"] = "freemarker.core.BuiltInsForExistenceHandling.existsBI";
    existsBI["__interfaces"] = ["java.lang.Cloneable"];



    export class has_contentBI extends BuiltInsForExistenceHandling.ExistenceBuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            return Expression.isEmpty(this.evalMaybeNonexistentTarget(env))?TemplateBooleanModel.FALSE:TemplateBooleanModel.TRUE;
        }

        public evalToBoolean(env? : any, cfg? : any) : any {
            if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((cfg != null && cfg instanceof <any>Configuration) || cfg === null)) {
                super.evalToBoolean(env, cfg);
            } else if(((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && cfg === undefined) {
                return <any>this.evalToBoolean$freemarker_core_Environment(env);
            } else if(((env != null && env instanceof <any>Configuration) || env === null) && cfg === undefined) {
                return <any>this.evalToBoolean$freemarker_template_Configuration(env);
            } else throw new Error('invalid overload');
        }

        evalToBoolean$freemarker_core_Environment(env : /*Environment*/any) : boolean {
            return this._eval(env) === TemplateBooleanModel.TRUE;
        }

        constructor() {
            super();
        }
    }
    has_contentBI["__class"] = "freemarker.core.BuiltInsForExistenceHandling.has_contentBI";
    has_contentBI["__interfaces"] = ["java.lang.Cloneable"];



    export class if_existsBI extends BuiltInsForExistenceHandling.ExistenceBuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : /*Environment*/any) : TemplateModel {
            let model : TemplateModel = this.evalMaybeNonexistentTarget(env);
            return model == null?TemplateModel.NOTHING:model;
        }

        constructor() {
            super();
        }
    }
    if_existsBI["__class"] = "freemarker.core.BuiltInsForExistenceHandling.if_existsBI";
    if_existsBI["__interfaces"] = ["java.lang.Cloneable"];


}




BuiltInsForExistenceHandling.defaultBI.FIRST_NON_NULL_METHOD_$LI$();
