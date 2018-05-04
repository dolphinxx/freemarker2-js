/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleNumber } from '../template/SimpleNumber';
import { SimpleScalar } from '../template/SimpleScalar';
import { TemplateBooleanModel } from '../template/TemplateBooleanModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateMethodModelEx } from '../template/TemplateMethodModelEx';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { BuiltInForLoopVariable } from './BuiltInForLoopVariable';
import { IteratorBlock } from './IteratorBlock';
import { Environment } from './Environment';

export class BuiltInsForLoopVariables {}
BuiltInsForLoopVariables["__class"] = "freemarker.core.BuiltInsForLoopVariables";


export namespace BuiltInsForLoopVariables {

    export class indexBI extends BuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : TemplateModel {
            return new SimpleNumber(iterCtx.getIndex());
        }

        constructor() {
            super();
        }
    }
    indexBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.indexBI";
    indexBI["__interfaces"] = ["java.lang.Cloneable"];



    export class counterBI extends BuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : TemplateModel {
            return new SimpleNumber(iterCtx.getIndex() + 1);
        }

        constructor() {
            super();
        }
    }
    counterBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.counterBI";
    counterBI["__interfaces"] = ["java.lang.Cloneable"];



    export abstract class BooleanBuiltInForLoopVariable extends BuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : TemplateModel {
            return this.calculateBooleanResult(iterCtx, env)?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
        }

        abstract calculateBooleanResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : boolean;

        constructor() {
            super();
        }
    }
    BooleanBuiltInForLoopVariable["__class"] = "freemarker.core.BuiltInsForLoopVariables.BooleanBuiltInForLoopVariable";
    BooleanBuiltInForLoopVariable["__interfaces"] = ["java.lang.Cloneable"];



    export class item_parityBI extends BuiltInForLoopVariable {
        static ODD : SimpleScalar; public static ODD_$LI$() : SimpleScalar { if(item_parityBI.ODD == null) item_parityBI.ODD = new SimpleScalar("odd"); return item_parityBI.ODD; };

        static EVEN : SimpleScalar; public static EVEN_$LI$() : SimpleScalar { if(item_parityBI.EVEN == null) item_parityBI.EVEN = new SimpleScalar("even"); return item_parityBI.EVEN; };

        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : TemplateModel {
            return iterCtx.getIndex() % 2 === 0?item_parityBI.ODD_$LI$():item_parityBI.EVEN_$LI$();
        }

        constructor() {
            super();
        }
    }
    item_parityBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.item_parityBI";
    item_parityBI["__interfaces"] = ["java.lang.Cloneable"];



    export class item_parity_capBI extends BuiltInForLoopVariable {
        static ODD : SimpleScalar; public static ODD_$LI$() : SimpleScalar { if(item_parity_capBI.ODD == null) item_parity_capBI.ODD = new SimpleScalar("Odd"); return item_parity_capBI.ODD; };

        static EVEN : SimpleScalar; public static EVEN_$LI$() : SimpleScalar { if(item_parity_capBI.EVEN == null) item_parity_capBI.EVEN = new SimpleScalar("Even"); return item_parity_capBI.EVEN; };

        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : TemplateModel {
            return iterCtx.getIndex() % 2 === 0?item_parity_capBI.ODD_$LI$():item_parity_capBI.EVEN_$LI$();
        }

        constructor() {
            super();
        }
    }
    item_parity_capBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.item_parity_capBI";
    item_parity_capBI["__interfaces"] = ["java.lang.Cloneable"];



    export class item_cycleBI extends BuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : TemplateModel {
            return new item_cycleBI.BIMethod(this, iterCtx);
        }

        constructor() {
            super();
        }
    }
    item_cycleBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.item_cycleBI";
    item_cycleBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace item_cycleBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            iterCtx : IteratorBlock.IterationContext;

            constructor(__parent: any, iterCtx : IteratorBlock.IterationContext) {
                this.__parent = __parent;
                if(this.iterCtx===undefined) this.iterCtx = null;
                this.iterCtx = iterCtx;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1, Number.MAX_VALUE);
                return /* get */args[this.iterCtx.getIndex() % /* size */(<number>args.length)];
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForLoopVariables.item_cycleBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class has_nextBI extends BuiltInsForLoopVariables.BooleanBuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {boolean}
         */
        calculateBooleanResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : boolean {
            return iterCtx.hasNext();
        }

        constructor() {
            super();
        }
    }
    has_nextBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.has_nextBI";
    has_nextBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_lastBI extends BuiltInsForLoopVariables.BooleanBuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {boolean}
         */
        calculateBooleanResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : boolean {
            return !iterCtx.hasNext();
        }

        constructor() {
            super();
        }
    }
    is_lastBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.is_lastBI";
    is_lastBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_firstBI extends BuiltInsForLoopVariables.BooleanBuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {boolean}
         */
        calculateBooleanResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : boolean {
            return iterCtx.getIndex() === 0;
        }

        constructor() {
            super();
        }
    }
    is_firstBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.is_firstBI";
    is_firstBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_odd_itemBI extends BuiltInsForLoopVariables.BooleanBuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {boolean}
         */
        calculateBooleanResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : boolean {
            return iterCtx.getIndex() % 2 === 0;
        }

        constructor() {
            super();
        }
    }
    is_odd_itemBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.is_odd_itemBI";
    is_odd_itemBI["__interfaces"] = ["java.lang.Cloneable"];



    export class is_even_itemBI extends BuiltInsForLoopVariables.BooleanBuiltInForLoopVariable {
        /**
         * 
         * @param {IteratorBlock.IterationContext} iterCtx
         * @param {Environment} env
         * @return {boolean}
         */
        calculateBooleanResult(iterCtx : IteratorBlock.IterationContext, env : Environment) : boolean {
            return iterCtx.getIndex() % 2 !== 0;
        }

        constructor() {
            super();
        }
    }
    is_even_itemBI["__class"] = "freemarker.core.BuiltInsForLoopVariables.is_even_itemBI";
    is_even_itemBI["__interfaces"] = ["java.lang.Cloneable"];


}




BuiltInsForLoopVariables.item_parity_capBI.EVEN_$LI$();

BuiltInsForLoopVariables.item_parity_capBI.ODD_$LI$();

BuiltInsForLoopVariables.item_parityBI.EVEN_$LI$();

BuiltInsForLoopVariables.item_parityBI.ODD_$LI$();
