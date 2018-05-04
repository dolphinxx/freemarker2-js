/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { CollectionModel } from '../ext/beans/CollectionModel';
import { SimpleNumber } from '../template/SimpleNumber';
import { SimpleScalar } from '../template/SimpleScalar';
import { SimpleSequence } from '../template/SimpleSequence';
import { TemplateBooleanModel } from '../template/TemplateBooleanModel';
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateCollectionModelEx } from '../template/TemplateCollectionModelEx';
import { TemplateDateModel } from '../template/TemplateDateModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateHashModel } from '../template/TemplateHashModel';
import { TemplateMethodModelEx } from '../template/TemplateMethodModelEx';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateModelIterator } from '../template/TemplateModelIterator';
import { TemplateModelListSequence } from '../template/TemplateModelListSequence';
import { TemplateNumberModel } from '../template/TemplateNumberModel';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { Constants } from '../template/utility/Constants';
import { StringUtil } from '../template/utility/StringUtil';
import { BuiltInForSequence } from './BuiltInForSequence';
import { _TemplateModelException } from './_TemplateModelException';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { NonSequenceOrCollectionException } from './NonSequenceOrCollectionException';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { EvalUtil } from './EvalUtil';
import { _MessageUtil } from './_MessageUtil';
import { _DelayedGetMessageWithoutStackTop } from './_DelayedGetMessageWithoutStackTop';
import { RightUnboundedRangeModel } from './RightUnboundedRangeModel';
import { CollectionAndSequence } from './CollectionAndSequence';
import { Boolean } from '../../java/lang/Boolean';
import { ArithmeticEngine } from './ArithmeticEngine';
import { _DelayedFTLTypeDescription } from './_DelayedFTLTypeDescription';
import { _DelayedJQuote } from './_DelayedJQuote';
import { BugException } from './BugException';
import { _DelayedGetMessage } from './_DelayedGetMessage';

/**
 * A holder for builtins that operate exclusively on sequence or collection left-hand value.
 * @class
 */
export class BuiltInsForSequences {
    static isBuggySeqButGoodCollection(model : TemplateModel) : boolean {
        return (model != null && model instanceof <any>CollectionModel) && !(<CollectionModel><any>model).getSupportsIndexedAccess();
    }

    static modelsEqual(seqItemIndex : number, seqItem : TemplateModel, searchedItem : TemplateModel, env : Environment) : boolean {
        try {
            return EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(seqItem, null, EvalUtil.CMP_OP_EQUALS, null, searchedItem, null, null, false, true, true, true, env);
        } catch(ex) {
            throw new _TemplateModelException(ex, "This error has occurred when comparing sequence item at 0-based index ", seqItemIndex, " to the searched item:\n", new _DelayedGetMessage(ex));
        };
    }

    constructor() {
    }
}
BuiltInsForSequences["__class"] = "freemarker.core.BuiltInsForSequences";


export namespace BuiltInsForSequences {

    export class chunkBI extends BuiltInForSequence {
        /**
         * 
         * @param {*} tsm
         * @return {*}
         */
        calculateResult(tsm : TemplateSequenceModel) : TemplateModel {
            return new chunkBI.BIMethod(this, tsm);
        }

        constructor() {
            super();
        }
    }
    chunkBI["__class"] = "freemarker.core.BuiltInsForSequences.chunkBI";
    chunkBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace chunkBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            tsm : TemplateSequenceModel;

            constructor(__parent: any, tsm : TemplateSequenceModel) {
                this.__parent = __parent;
                if(this.tsm===undefined) this.tsm = null;
                this.tsm = tsm;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1, 2);
                let chunkSize : number = /* intValue */(this.__parent.getNumberMethodArg(args, 0)|0);
                if(chunkSize < 1) {
                    throw new _TemplateModelException("The 1st argument to ?", this.__parent.key, " (...) must be at least 1.");
                }
                return new chunkBI.ChunkedSequence(this.tsm, chunkSize, /* size */(<number>args.length) > 1?<TemplateModel><any>/* get */args[1]:null);
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForSequences.chunkBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];



        export class ChunkedSequence implements TemplateSequenceModel {
            wrappedTsm : TemplateSequenceModel;

            chunkSize : number;

            fillerItem : TemplateModel;

            numberOfChunks : number;

            constructor(wrappedTsm : TemplateSequenceModel, chunkSize : number, fillerItem : TemplateModel) {
                if(this.wrappedTsm===undefined) this.wrappedTsm = null;
                if(this.chunkSize===undefined) this.chunkSize = 0;
                if(this.fillerItem===undefined) this.fillerItem = null;
                if(this.numberOfChunks===undefined) this.numberOfChunks = 0;
                this.wrappedTsm = wrappedTsm;
                this.chunkSize = chunkSize;
                this.fillerItem = fillerItem;
                this.numberOfChunks = ((wrappedTsm.size() + chunkSize - 1) / chunkSize|0);
            }

            public get(chunkIndex : number) : TemplateModel {
                if(chunkIndex >= this.numberOfChunks) {
                    return null;
                }
                return new ChunkedSequence.ChunkedSequence$0(this, chunkIndex);
            }

            public size() : number {
                return this.numberOfChunks;
            }
        }
        ChunkedSequence["__class"] = "freemarker.core.BuiltInsForSequences.chunkBI.ChunkedSequence";
        ChunkedSequence["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];



        export namespace ChunkedSequence {

            export class ChunkedSequence$0 implements TemplateSequenceModel {
                public __parent: any;
                baseIndex : number;

                public get(relIndex : number) : TemplateModel {
                    let absIndex : number = this.baseIndex + relIndex;
                    if(absIndex < this.__parent.wrappedTsm.size()) {
                        return this.__parent.wrappedTsm['get$int'](absIndex);
                    } else {
                        return absIndex < this.__parent.numberOfChunks * this.__parent.chunkSize?this.__parent.fillerItem:null;
                    }
                }

                public size() : number {
                    return this.__parent.fillerItem != null || this.chunkIndex + 1 < this.__parent.numberOfChunks?this.__parent.chunkSize:this.__parent.wrappedTsm.size() - this.baseIndex;
                }

                constructor(__parent: any, private chunkIndex: any) {
                    this.__parent = __parent;
                    this.baseIndex = this.chunkIndex * this.__parent.chunkSize;
                }
            }
            ChunkedSequence$0["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];


        }

    }


    export class firstBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : Environment) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) && !BuiltInsForSequences.isBuggySeqButGoodCollection(model)) {
                return this.calculateResultForSequence(<TemplateSequenceModel><any>model);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
                return this.calculateResultForColletion(<TemplateCollectionModel><any>model);
            } else {
                throw new NonSequenceOrCollectionException(this.target, model, env);
            }
        }

        calculateResultForSequence(seq : TemplateSequenceModel) : TemplateModel {
            if(seq.size() === 0) {
                return null;
            }
            return seq['get$int'](0);
        }

        calculateResultForColletion(coll : TemplateCollectionModel) : TemplateModel {
            let iter : TemplateModelIterator = coll.iterator();
            if(!iter.hasNext()) {
                return null;
            }
            return iter.next();
        }

        constructor() {
            super();
        }
    }
    firstBI["__class"] = "freemarker.core.BuiltInsForSequences.firstBI";
    firstBI["__interfaces"] = ["java.lang.Cloneable"];



    export class joinBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : Environment) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
                if(model != null && model instanceof <any>RightUnboundedRangeModel) {
                    throw new _TemplateModelException("The sequence to join was right-unbounded numerical range, thus it\'s infinitely long.");
                }
                return new joinBI.BIMethodForCollection(this, env, <TemplateCollectionModel><any>model);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
                return new joinBI.BIMethodForCollection(this, env, new CollectionAndSequence(<TemplateSequenceModel><any>model));
            } else {
                throw new NonSequenceOrCollectionException(this.target, model, env);
            }
        }

        constructor() {
            super();
        }
    }
    joinBI["__class"] = "freemarker.core.BuiltInsForSequences.joinBI";
    joinBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace joinBI {

        export class BIMethodForCollection implements TemplateMethodModelEx {
            public __parent: any;
            env : Environment;

            coll : TemplateCollectionModel;

            constructor(__parent: any, env : Environment, coll : TemplateCollectionModel) {
                this.__parent = __parent;
                if(this.env===undefined) this.env = null;
                if(this.coll===undefined) this.coll = null;
                this.env = env;
                this.coll = coll;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1, 3);
                let separator : string = this.__parent.getStringMethodArg(args, 0);
                let whenEmpty : string = this.__parent.getOptStringMethodArg(args, 1);
                let afterLast : string = this.__parent.getOptStringMethodArg(args, 2);
                let sb : StringBuilder = new StringBuilder("");
                let it : TemplateModelIterator = this.coll.iterator();
                let idx : number = 0;
                let hadItem : boolean = false;
                while((it.hasNext())) {
                    let item : TemplateModel = it.next();
                    if(item != null) {
                        if(hadItem) {
                            sb.append(separator);
                        } else {
                            hadItem = true;
                        }
                        try {
                            sb.append(EvalUtil.coerceModelToStringOrUnsupportedMarkup(item, null, null, this.env));
                        } catch(e) {
                            throw new _TemplateModelException(e, "\"?", this.__parent.key, "\" failed at index ", idx, " with this error:\n\n", _MessageUtil.EMBEDDED_MESSAGE_BEGIN, new _DelayedGetMessageWithoutStackTop(e), _MessageUtil.EMBEDDED_MESSAGE_END);
                        };
                    }
                    idx++;
                };
                if(hadItem) {
                    if(afterLast != null) sb.append(afterLast);
                } else {
                    if(whenEmpty != null) sb.append(whenEmpty);
                }
                return new SimpleScalar(sb.toString());
            }
        }
        BIMethodForCollection["__class"] = "freemarker.core.BuiltInsForSequences.joinBI.BIMethodForCollection";
        BIMethodForCollection["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class lastBI extends BuiltInForSequence {
        /**
         * 
         * @param {*} tsm
         * @return {*}
         */
        calculateResult(tsm : TemplateSequenceModel) : TemplateModel {
            let size : number = tsm.size();
            if(size === 0) {
                return null;
            }
            return tsm['get$int'](size - 1);
        }

        constructor() {
            super();
        }
    }
    lastBI["__class"] = "freemarker.core.BuiltInsForSequences.lastBI";
    lastBI["__interfaces"] = ["java.lang.Cloneable"];



    export class reverseBI extends BuiltInForSequence {
        /**
         * 
         * @param {*} tsm
         * @return {*}
         */
        calculateResult(tsm : TemplateSequenceModel) : TemplateModel {
            if(tsm != null && tsm instanceof <any>BuiltInsForSequences.reverseBI.ReverseSequence) {
                return (<reverseBI.ReverseSequence><any>tsm).seq;
            } else {
                return new reverseBI.ReverseSequence(tsm);
            }
        }

        constructor() {
            super();
        }
    }
    reverseBI["__class"] = "freemarker.core.BuiltInsForSequences.reverseBI";
    reverseBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace reverseBI {

        export class ReverseSequence implements TemplateSequenceModel {
            seq : TemplateSequenceModel;

            constructor(seq : TemplateSequenceModel) {
                if(this.seq===undefined) this.seq = null;
                this.seq = seq;
            }

            public get(index : number) : TemplateModel {
                return this.seq['get$int'](this.seq.size() - 1 - index);
            }

            public size() : number {
                return this.seq.size();
            }
        }
        ReverseSequence["__class"] = "freemarker.core.BuiltInsForSequences.reverseBI.ReverseSequence";
        ReverseSequence["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];


    }


    export class seq_containsBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : Environment) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) && !BuiltInsForSequences.isBuggySeqButGoodCollection(model)) {
                return new seq_containsBI.BIMethodForSequence(this, <TemplateSequenceModel><any>model, env);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
                return new seq_containsBI.BIMethodForCollection(this, <TemplateCollectionModel><any>model, env);
            } else {
                throw new NonSequenceOrCollectionException(this.target, model, env);
            }
        }

        constructor() {
            super();
        }
    }
    seq_containsBI["__class"] = "freemarker.core.BuiltInsForSequences.seq_containsBI";
    seq_containsBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace seq_containsBI {

        export class BIMethodForCollection implements TemplateMethodModelEx {
            public __parent: any;
            m_coll : TemplateCollectionModel;

            m_env : Environment;

            constructor(__parent: any, coll : TemplateCollectionModel, env : Environment) {
                this.__parent = __parent;
                if(this.m_coll===undefined) this.m_coll = null;
                if(this.m_env===undefined) this.m_env = null;
                this.m_coll = coll;
                this.m_env = env;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                let arg : TemplateModel = <TemplateModel><any>/* get */args[0];
                let it : TemplateModelIterator = this.m_coll.iterator();
                let idx : number = 0;
                while((it.hasNext())) {
                    if(BuiltInsForSequences.modelsEqual(idx, it.next(), arg, this.m_env)) return TemplateBooleanModel.TRUE;
                    idx++;
                };
                return TemplateBooleanModel.FALSE;
            }
        }
        BIMethodForCollection["__class"] = "freemarker.core.BuiltInsForSequences.seq_containsBI.BIMethodForCollection";
        BIMethodForCollection["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];



        export class BIMethodForSequence implements TemplateMethodModelEx {
            public __parent: any;
            m_seq : TemplateSequenceModel;

            m_env : Environment;

            constructor(__parent: any, seq : TemplateSequenceModel, env : Environment) {
                this.__parent = __parent;
                if(this.m_seq===undefined) this.m_seq = null;
                if(this.m_env===undefined) this.m_env = null;
                this.m_seq = seq;
                this.m_env = env;
            }

            public exec(args : Array<any>) : any {
                this.__parent.checkMethodArgCount(args, 1);
                let arg : TemplateModel = <TemplateModel><any>/* get */args[0];
                let size : number = this.m_seq.size();
                for(let i : number = 0; i < size; i++) {
                    if(BuiltInsForSequences.modelsEqual(i, this.m_seq['get$int'](i), arg, this.m_env)) return TemplateBooleanModel.TRUE;
                };
                return TemplateBooleanModel.FALSE;
            }
        }
        BIMethodForSequence["__class"] = "freemarker.core.BuiltInsForSequences.seq_containsBI.BIMethodForSequence";
        BIMethodForSequence["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class seq_index_ofBI extends BuiltIn {
        findFirst : boolean;

        constructor(findFirst : boolean) {
            super();
            if(this.findFirst===undefined) this.findFirst = false;
            this.findFirst = findFirst;
        }

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : Environment) : TemplateModel {
            return new seq_index_ofBI.BIMethod(this, env);
        }
    }
    seq_index_ofBI["__class"] = "freemarker.core.BuiltInsForSequences.seq_index_ofBI";
    seq_index_ofBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace seq_index_ofBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            m_seq : TemplateSequenceModel;

            m_col : TemplateCollectionModel;

            m_env : Environment;

            constructor(__parent: any, env : Environment) {
                this.__parent = __parent;
                if(this.m_seq===undefined) this.m_seq = null;
                if(this.m_col===undefined) this.m_col = null;
                if(this.m_env===undefined) this.m_env = null;
                let model : TemplateModel = __parent.target.eval(env);
                this.m_seq = (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) && !BuiltInsForSequences.isBuggySeqButGoodCollection(model)?<TemplateSequenceModel><any>model:null;
                this.m_col = this.m_seq == null && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0))?<TemplateCollectionModel><any>model:null;
                if(this.m_seq == null && this.m_col == null) {
                    throw new NonSequenceOrCollectionException(__parent.target, model, env);
                }
                this.m_env = env;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let searched : TemplateModel = <TemplateModel><any>/* get */args[0];
                let foundAtIdx : number;
                if(argCnt > 1) {
                    let startIndex : number = /* intValue */(this.__parent.getNumberMethodArg(args, 1)|0);
                    foundAtIdx = this.m_seq != null?this.findInSeq$freemarker_template_TemplateModel$int(searched, startIndex):this.findInCol$freemarker_template_TemplateModel$int(searched, startIndex);
                } else {
                    foundAtIdx = this.m_seq != null?this.findInSeq$freemarker_template_TemplateModel(searched):this.findInCol$freemarker_template_TemplateModel(searched);
                }
                return foundAtIdx === -1?Constants.MINUS_ONE_$LI$():new SimpleNumber(foundAtIdx);
            }

            findInCol$freemarker_template_TemplateModel(searched : TemplateModel) : number {
                return this.findInCol$freemarker_template_TemplateModel$int$int(searched, 0, Number.MAX_VALUE);
            }

            findInCol$freemarker_template_TemplateModel$int(searched : TemplateModel, startIndex : number) : number {
                if(this.__parent.findFirst) {
                    return this.findInCol$freemarker_template_TemplateModel$int$int(searched, startIndex, Number.MAX_VALUE);
                } else {
                    return this.findInCol$freemarker_template_TemplateModel$int$int(searched, 0, startIndex);
                }
            }

            public findInCol$freemarker_template_TemplateModel$int$int(searched : TemplateModel, allowedRangeStart : number, allowedRangeEnd : number) : number {
                if(allowedRangeEnd < 0) return -1;
                let it : TemplateModelIterator = this.m_col.iterator();
                let foundAtIdx : number = -1;
                let idx : number = 0;
                searchItem: while((it.hasNext())) {
                    if(idx > allowedRangeEnd) break searchItem;
                    let current : TemplateModel = it.next();
                    if(idx >= allowedRangeStart) {
                        if(BuiltInsForSequences.modelsEqual(idx, current, searched, this.m_env)) {
                            foundAtIdx = idx;
                            if(this.__parent.findFirst) {
                                break searchItem;
                            }
                        }
                    }
                    idx++;
                };
                return foundAtIdx;
            }

            public findInCol(searched? : any, allowedRangeStart? : any, allowedRangeEnd? : any) : any {
                if(((searched != null && (searched["__interfaces"] != null && searched["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || searched.constructor != null && searched.constructor["__interfaces"] != null && searched.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || searched === null) && ((typeof allowedRangeStart === 'number') || allowedRangeStart === null) && ((typeof allowedRangeEnd === 'number') || allowedRangeEnd === null)) {
                    return <any>this.findInCol$freemarker_template_TemplateModel$int$int(searched, allowedRangeStart, allowedRangeEnd);
                } else if(((searched != null && (searched["__interfaces"] != null && searched["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || searched.constructor != null && searched.constructor["__interfaces"] != null && searched.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || searched === null) && ((typeof allowedRangeStart === 'number') || allowedRangeStart === null) && allowedRangeEnd === undefined) {
                    return <any>this.findInCol$freemarker_template_TemplateModel$int(searched, allowedRangeStart);
                } else if(((searched != null && (searched["__interfaces"] != null && searched["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || searched.constructor != null && searched.constructor["__interfaces"] != null && searched.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || searched === null) && allowedRangeStart === undefined && allowedRangeEnd === undefined) {
                    return <any>this.findInCol$freemarker_template_TemplateModel(searched);
                } else throw new Error('invalid overload');
            }

            findInSeq$freemarker_template_TemplateModel(searched : TemplateModel) : number {
                let seqSize : number = this.m_seq.size();
                let actualStartIndex : number;
                if(this.__parent.findFirst) {
                    actualStartIndex = 0;
                } else {
                    actualStartIndex = seqSize - 1;
                }
                return this.findInSeq$freemarker_template_TemplateModel$int$int(searched, actualStartIndex, seqSize);
            }

            findInSeq$freemarker_template_TemplateModel$int(searched : TemplateModel, startIndex : number) : number {
                let seqSize : number = this.m_seq.size();
                if(this.__parent.findFirst) {
                    if(startIndex >= seqSize) {
                        return -1;
                    }
                    if(startIndex < 0) {
                        startIndex = 0;
                    }
                } else {
                    if(startIndex >= seqSize) {
                        startIndex = seqSize - 1;
                    }
                    if(startIndex < 0) {
                        return -1;
                    }
                }
                return this.findInSeq$freemarker_template_TemplateModel$int$int(searched, startIndex, seqSize);
            }

            public findInSeq$freemarker_template_TemplateModel$int$int(target : TemplateModel, scanStartIndex : number, seqSize : number) : number {
                if(this.__parent.findFirst) {
                    for(let i : number = scanStartIndex; i < seqSize; i++) {
                        if(BuiltInsForSequences.modelsEqual(i, this.m_seq['get$int'](i), target, this.m_env)) return i;
                    };
                } else {
                    for(let i : number = scanStartIndex; i >= 0; i--) {
                        if(BuiltInsForSequences.modelsEqual(i, this.m_seq['get$int'](i), target, this.m_env)) return i;
                    };
                }
                return -1;
            }

            public findInSeq(target? : any, scanStartIndex? : any, seqSize? : any) : any {
                if(((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || target === null) && ((typeof scanStartIndex === 'number') || scanStartIndex === null) && ((typeof seqSize === 'number') || seqSize === null)) {
                    return <any>this.findInSeq$freemarker_template_TemplateModel$int$int(target, scanStartIndex, seqSize);
                } else if(((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || target === null) && ((typeof scanStartIndex === 'number') || scanStartIndex === null) && seqSize === undefined) {
                    return <any>this.findInSeq$freemarker_template_TemplateModel$int(target, scanStartIndex);
                } else if(((target != null && (target["__interfaces"] != null && target["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || target.constructor != null && target.constructor["__interfaces"] != null && target.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || target === null) && scanStartIndex === undefined && seqSize === undefined) {
                    return <any>this.findInSeq$freemarker_template_TemplateModel(target);
                } else throw new Error('invalid overload');
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForSequences.seq_index_ofBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class sortBI extends BuiltInForSequence {
        static newInconsistentSortKeyTypeException(keyNamesLn : number, firstType : string, firstTypePlural : string, index : number, key : TemplateModel) : TemplateModelException {
            let valueInMsg : string;
            let valuesInMsg : string;
            if(keyNamesLn === 0) {
                valueInMsg = "value";
                valuesInMsg = "values";
            } else {
                valueInMsg = "key value";
                valuesInMsg = "key values";
            }
            return new _TemplateModelException(sortBI.startErrorMessage$int$int(keyNamesLn, index), "All ", valuesInMsg, " in the sequence must be ", firstTypePlural, ", because the first ", valueInMsg, " was that. However, the ", valueInMsg, " of the current item isn\'t a ", firstType, " but a ", new _DelayedFTLTypeDescription(key), ".");
        }

        /**
         * Sorts a sequence for the <tt>sort</tt> and <tt>sort_by</tt>
         * built-ins.
         * 
         * @param {*} seq      the sequence to sort.
         * @param {Array} keyNames the name of the subvariable whose value is used for the
         * sorting. If the sorting is done by a sub-subvaruable, then this
         * will be of length 2, and so on. If the sorting is done by the
         * sequene items directly, then this argument has to be 0 length
         * array or <code>null</code>.
         * @return {*} a new sorted sequence, or the original sequence if the
         * sequence length was 0.
         */
        static sort(seq : TemplateSequenceModel, keyNames : Array) : TemplateSequenceModel {
            let ln : number = seq.size();
            if(ln === 0) return seq;
            let res : Array<any> = <any>([]);
            let keyNamesLn : number = keyNames == null?0:keyNames.length;
            let keyType : number = sortBI.KEY_TYPE_NOT_YET_DETECTED;
            let keyComparator : any = <any>(null);
            for(let i : number = 0; i < ln; i++) {
                let item : TemplateModel = seq['get$int'](i);
                let key : TemplateModel = item;
                for(let keyNameI : number = 0; keyNameI < keyNamesLn; keyNameI++) {
                    try {
                        key = (<TemplateHashModel><any>key)['get$java_lang_String'](keyNames[keyNameI]);
                    } catch(e) {
                        if(!(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0))) {
                            throw new _TemplateModelException(sortBI.startErrorMessage$int$int(keyNamesLn, i), (keyNameI === 0?"Sequence items must be hashes when using ?sort_by. ":"The " + StringUtil.jQuote$java_lang_Object(keyNames[keyNameI - 1])), " subvariable is not a hash, so ?sort_by ", "can\'t proceed with getting the ", new _DelayedJQuote(keyNames[keyNameI]), " subvariable.");
                        } else {
                            throw e;
                        }
                    };
                    if(key == null) {
                        throw new _TemplateModelException(sortBI.startErrorMessage$int$int(keyNamesLn, i), "The " + StringUtil.jQuote$java_lang_Object(keyNames[keyNameI]), " subvariable was null or missing.");
                    }
                };
                if(keyType === sortBI.KEY_TYPE_NOT_YET_DETECTED) {
                    if(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
                        keyType = sortBI.KEY_TYPE_STRING;
                        keyComparator = (arg0, arg1) => { return new sortBI.LexicalKVPComparator(Environment.getCurrentEnvironment().getCollator()).compare(arg0, arg1); };
                    } else if(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
                        keyType = sortBI.KEY_TYPE_NUMBER;
                        keyComparator = (arg0, arg1) => { return new sortBI.NumericalKVPComparator(Environment.getCurrentEnvironment().getArithmeticEngine()).compare(arg0, arg1); };
                    } else if(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0)) {
                        keyType = sortBI.KEY_TYPE_DATE;
                        keyComparator = (arg0, arg1) => { return new sortBI.DateKVPComparator().compare(arg0, arg1); };
                    } else if(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
                        keyType = sortBI.KEY_TYPE_BOOLEAN;
                        keyComparator = (arg0, arg1) => { return new sortBI.BooleanKVPComparator().compare(arg0, arg1); };
                    } else {
                        throw new _TemplateModelException(sortBI.startErrorMessage$int$int(keyNamesLn, i), "Values used for sorting must be numbers, strings, date/times or booleans.");
                    }
                }
                switch((keyType)) {
                case 1 /* KEY_TYPE_STRING */:
                    try {
                        /* add */(res.push(new sortBI.KVP((<TemplateScalarModel><any>key).getAsString(), item))>0);
                    } catch(e) {
                        if(!(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                            throw sortBI.newInconsistentSortKeyTypeException(keyNamesLn, "string", "strings", i, key);
                        } else {
                            throw e;
                        }
                    };
                    break;
                case 2 /* KEY_TYPE_NUMBER */:
                    try {
                        /* add */(res.push(new sortBI.KVP((<TemplateNumberModel><any>key).getAsNumber(), item))>0);
                    } catch(e) {
                        if(!(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0))) {
                            throw sortBI.newInconsistentSortKeyTypeException(keyNamesLn, "number", "numbers", i, key);
                        }
                    };
                    break;
                case 3 /* KEY_TYPE_DATE */:
                    try {
                        /* add */(res.push(new sortBI.KVP((<TemplateDateModel><any>key).getAsDate(), item))>0);
                    } catch(e) {
                        if(!(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0))) {
                            throw sortBI.newInconsistentSortKeyTypeException(keyNamesLn, "date/time", "date/times", i, key);
                        }
                    };
                    break;
                case 4 /* KEY_TYPE_BOOLEAN */:
                    try {
                        /* add */(res.push(new sortBI.KVP((<TemplateBooleanModel><any>key).getAsBoolean(), item))>0);
                    } catch(e) {
                        if(!(key != null && (key["__interfaces"] != null && key["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || key.constructor != null && key.constructor["__interfaces"] != null && key.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0))) {
                            throw sortBI.newInconsistentSortKeyTypeException(keyNamesLn, "boolean", "booleans", i, key);
                        }
                    };
                    break;
                default:
                    throw new BugException("Unexpected key type");
                }
            };
            try {
                /* sort */((l,c) => { if((<any>c).compare) l.sort((e1,e2)=>(<any>c).compare(e1,e2)); else l.sort(<any>c); })(res,keyComparator);
            } catch(exc) {
                throw new _TemplateModelException(exc, sortBI.startErrorMessage$int(keyNamesLn), "Unexpected error while sorting:" + exc);
            };
            for(let i : number = 0; i < ln; i++) {
                /* set */(res[i] = (<sortBI.KVP>/* get */res[i]).value);
            };
            return new TemplateModelListSequence(res);
        }

        static startErrorMessage$int(keyNamesLn : number) : Array {
            return [(keyNamesLn === 0?"?sort":"?sort_by(...)"), " failed: "];
        }

        public static startErrorMessage$int$int(keyNamesLn : number, index : number) : Array {
            return [(keyNamesLn === 0?"?sort":"?sort_by(...)"), " failed at sequence index ", index, (index === 0?": ":" (0-based): ")];
        }

        public static startErrorMessage(keyNamesLn? : any, index? : any) : any {
            if(((typeof keyNamesLn === 'number') || keyNamesLn === null) && ((typeof index === 'number') || index === null)) {
                return <any>BuiltInsForSequences.sortBI.startErrorMessage$int$int(keyNamesLn, index);
            } else if(((typeof keyNamesLn === 'number') || keyNamesLn === null) && index === undefined) {
                return <any>BuiltInsForSequences.sortBI.startErrorMessage$int(keyNamesLn);
            } else throw new Error('invalid overload');
        }

        static KEY_TYPE_NOT_YET_DETECTED : number = 0;

        static KEY_TYPE_STRING : number = 1;

        static KEY_TYPE_NUMBER : number = 2;

        static KEY_TYPE_DATE : number = 3;

        static KEY_TYPE_BOOLEAN : number = 4;

        /**
         * 
         * @param {*} seq
         * @return {*}
         */
        calculateResult(seq : TemplateSequenceModel) : TemplateModel {
            return sortBI.sort(seq, null);
        }

        constructor() {
            super();
        }
    }
    sortBI["__class"] = "freemarker.core.BuiltInsForSequences.sortBI";
    sortBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace sortBI {

        export class BooleanKVPComparator {
            public compare(arg0 : any, arg1 : any) : number {
                let b0 : boolean = <boolean>(<sortBI.KVP>arg0).key;
                let b1 : boolean = <boolean>(<sortBI.KVP>arg1).key;
                if(b0) {
                    return b1?0:1;
                } else {
                    return b1?-1:0;
                }
            }

            constructor() {
            }
        }
        BooleanKVPComparator["__class"] = "freemarker.core.BuiltInsForSequences.sortBI.BooleanKVPComparator";
        BooleanKVPComparator["__interfaces"] = ["java.util.Comparator","java.io.Serializable"];



        export class DateKVPComparator {
            public compare(arg0 : any, arg1 : any) : number {
                return (<Date>(<sortBI.KVP>arg0).key).compareTo(<Date>(<sortBI.KVP>arg1).key);
            }

            constructor() {
            }
        }
        DateKVPComparator["__class"] = "freemarker.core.BuiltInsForSequences.sortBI.DateKVPComparator";
        DateKVPComparator["__interfaces"] = ["java.util.Comparator","java.io.Serializable"];



        /**
         * Stores a key-value pair.
         * @class
         */
        export class KVP {
            key : any;

            value : any;

            constructor(key : any, value : any) {
                if(this.key===undefined) this.key = null;
                if(this.value===undefined) this.value = null;
                this.key = key;
                this.value = value;
            }
        }
        KVP["__class"] = "freemarker.core.BuiltInsForSequences.sortBI.KVP";


        export class LexicalKVPComparator {
            collator : any;

            constructor(collator : any) {
                if(this.collator===undefined) this.collator = null;
                this.collator = collator;
            }

            public compare(arg0 : any, arg1 : any) : number {
                return this.collator.compare((<sortBI.KVP>arg0).key, (<sortBI.KVP>arg1).key);
            }
        }
        LexicalKVPComparator["__class"] = "freemarker.core.BuiltInsForSequences.sortBI.LexicalKVPComparator";
        LexicalKVPComparator["__interfaces"] = ["java.util.Comparator"];



        export class NumericalKVPComparator {
            ae : ArithmeticEngine;

            constructor(ae : ArithmeticEngine) {
                if(this.ae===undefined) this.ae = null;
                this.ae = ae;
            }

            public compare(arg0 : any, arg1 : any) : number {
                try {
                    return this.ae.compareNumbers(<number>(<sortBI.KVP>arg0).key, <number>(<sortBI.KVP>arg1).key);
                } catch(e) {
                    throw Object.defineProperty(new Error("Failed to compare numbers: " + e), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.ClassCastException','java.lang.Exception'] });
                };
            }
        }
        NumericalKVPComparator["__class"] = "freemarker.core.BuiltInsForSequences.sortBI.NumericalKVPComparator";
        NumericalKVPComparator["__interfaces"] = ["java.util.Comparator"];


    }


    export class sequenceBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : Environment) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) && !BuiltInsForSequences.isBuggySeqButGoodCollection(model)) {
                return model;
            }
            if(!(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0))) {
                throw new NonSequenceOrCollectionException(this.target, model, env);
            }
            let coll : TemplateCollectionModel = <TemplateCollectionModel><any>model;
            let seq : SimpleSequence = (coll != null && (coll["__interfaces"] != null && coll["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0 || coll.constructor != null && coll.constructor["__interfaces"] != null && coll.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModelEx") >= 0))?new SimpleSequence((<TemplateCollectionModelEx><any>coll).size()):new SimpleSequence();
            for(let iter : TemplateModelIterator = coll.iterator(); iter.hasNext(); ) {
                seq.add$java_lang_Object(iter.next());
            };
            return seq;
        }

        constructor() {
            super();
        }
    }
    sequenceBI["__class"] = "freemarker.core.BuiltInsForSequences.sequenceBI";
    sequenceBI["__interfaces"] = ["java.lang.Cloneable"];



    export abstract class MinOrMaxBI extends BuiltIn {
        comparatorOperator : number;

        constructor(comparatorOperator : number) {
            super();
            if(this.comparatorOperator===undefined) this.comparatorOperator = 0;
            this.comparatorOperator = comparatorOperator;
        }

        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : Environment) : TemplateModel {
            let model : TemplateModel = this.target.eval(env);
            if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
                return this.calculateResultForColletion(<TemplateCollectionModel><any>model, env);
            } else if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
                return this.calculateResultForSequence(<TemplateSequenceModel><any>model, env);
            } else {
                throw new NonSequenceOrCollectionException(this.target, model, env);
            }
        }

        calculateResultForColletion(coll : TemplateCollectionModel, env : Environment) : TemplateModel {
            let best : TemplateModel = null;
            let iter : TemplateModelIterator = coll.iterator();
            while((iter.hasNext())) {
                let cur : TemplateModel = iter.next();
                if(cur != null && (best == null || EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(cur, null, this.comparatorOperator, null, best, null, this, true, false, false, false, env))) {
                    best = cur;
                }
            };
            return best;
        }

        calculateResultForSequence(seq : TemplateSequenceModel, env : Environment) : TemplateModel {
            let best : TemplateModel = null;
            for(let i : number = 0; i < seq.size(); i++) {
                let cur : TemplateModel = seq['get$int'](i);
                if(cur != null && (best == null || EvalUtil.compare$freemarker_template_TemplateModel$freemarker_core_Expression$int$java_lang_String$freemarker_template_TemplateModel$freemarker_core_Expression$freemarker_core_Expression$boolean$boolean$boolean$boolean$freemarker_core_Environment(cur, null, this.comparatorOperator, null, best, null, this, true, false, false, false, env))) {
                    best = cur;
                }
            };
            return best;
        }
    }
    MinOrMaxBI["__class"] = "freemarker.core.BuiltInsForSequences.MinOrMaxBI";
    MinOrMaxBI["__interfaces"] = ["java.lang.Cloneable"];



    export class sort_byBI extends BuiltInsForSequences.sortBI {
        /**
         * 
         * @param {*} seq
         * @return {*}
         */
        calculateResult(seq : TemplateSequenceModel) : TemplateModel {
            return new sort_byBI.BIMethod(this, seq);
        }

        constructor() {
            super();
        }
    }
    sort_byBI["__class"] = "freemarker.core.BuiltInsForSequences.sort_byBI";
    sort_byBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace sort_byBI {

        export class BIMethod implements TemplateMethodModelEx {
            public __parent: any;
            seq : TemplateSequenceModel;

            constructor(__parent: any, seq : TemplateSequenceModel) {
                this.__parent = __parent;
                if(this.seq===undefined) this.seq = null;
                this.seq = seq;
            }

            public exec(args : Array<any>) : any {
                if(/* size */(<number>args.length) < 1) throw _MessageUtil.newArgCntError$java_lang_String$int$int("?" + this.__parent.key, /* size */(<number>args.length), 1);
                let subvars : Array<any>;
                let obj : any = /* get */args[0];
                if(obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
                    subvars = [(<TemplateScalarModel><any>obj).getAsString()];
                } else if(obj != null && (obj["__interfaces"] != null && obj["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || obj.constructor != null && obj.constructor["__interfaces"] != null && obj.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
                    let seq : TemplateSequenceModel = <TemplateSequenceModel><any>obj;
                    let ln : number = seq.size();
                    subvars = (s => { let a=[]; while(s-->0) a.push(null); return a; })(ln);
                    for(let i : number = 0; i < ln; i++) {
                        let item : any = seq['get$int'](i);
                        try {
                            subvars[i] = (<TemplateScalarModel><any>item).getAsString();
                        } catch(e) {
                            if(!(item != null && (item["__interfaces"] != null && item["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || item.constructor != null && item.constructor["__interfaces"] != null && item.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                                throw new _TemplateModelException("The argument to ?", this.__parent.key, "(key), when it\'s a sequence, must be a sequence of strings, but the item at index ", i, " is not a string.");
                            }
                        };
                    };
                } else {
                    throw new _TemplateModelException("The argument to ?", this.__parent.key, "(key) must be a string (the name of the subvariable), or a sequence of strings (the \"path\" to the subvariable).");
                }
                return sortBI.sort(this.seq, subvars);
            }
        }
        BIMethod["__class"] = "freemarker.core.BuiltInsForSequences.sort_byBI.BIMethod";
        BIMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];


    }


    export class maxBI extends BuiltInsForSequences.MinOrMaxBI {
        public constructor() {
            super(EvalUtil.CMP_OP_GREATER_THAN);
        }
    }
    maxBI["__class"] = "freemarker.core.BuiltInsForSequences.maxBI";
    maxBI["__interfaces"] = ["java.lang.Cloneable"];



    export class minBI extends BuiltInsForSequences.MinOrMaxBI {
        public constructor() {
            super(EvalUtil.CMP_OP_LESS_THAN);
        }
    }
    minBI["__class"] = "freemarker.core.BuiltInsForSequences.minBI";
    minBI["__interfaces"] = ["java.lang.Cloneable"];


}



