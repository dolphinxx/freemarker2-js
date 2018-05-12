/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {KeyValuePair} from '../template/KeyValuePair';
import {KeyValuePairIterator} from '../template/KeyValuePairIterator';
import {SimpleNumber} from '../template/SimpleNumber';
import {TemplateBooleanModel} from '../template/TemplateBooleanModel';
import {TemplateCollectionModel} from '../template/TemplateCollectionModel';
import {TemplateHashModelEx} from '../template/TemplateHashModelEx';
import {TemplateHashModelEx2} from '../template/TemplateHashModelEx2';
import {TemplateModel} from '../template/TemplateModel';
import {TemplateModelIterator} from '../template/TemplateModelIterator';
import {TemplateScalarModel} from '../template/TemplateScalarModel';
import {TemplateSequenceModel} from '../template/TemplateSequenceModel';
import {Constants} from '../template/utility/Constants';
import {TemplateElement} from './TemplateElement';
import {Expression} from './Expression';
import {TemplateElements} from './TemplateElements';
import {Environment} from './Environment';
import {LocalContextStack} from './LocalContextStack';
import {LocalContext} from './LocalContext';
import {StringBuilder} from '../../java/lang/StringBuilder';
import {_CoreStringUtils} from './_CoreStringUtils';
import {ListElseContainer} from './ListElseContainer';
import {ParameterRole} from './ParameterRole';
import {_MiscTemplateException} from './_MiscTemplateException';
import {BreakOrContinueException} from './BreakOrContinueException';
import {NonSequenceOrCollectionException} from './NonSequenceOrCollectionException';
import {_ErrorDescriptionBuilder} from './_ErrorDescriptionBuilder';
import {_DelayedAOrAn} from './_DelayedAOrAn';
import {_DelayedFTLTypeDescription} from './_DelayedFTLTypeDescription';
import {_MessageUtil} from './_MessageUtil';
import {NonExtendedHashException} from './NonExtendedHashException';

/**
 * A #list (or #foreach) element, or pre-#else section of it inside a {link ListElseContainer}.
 * @extends TemplateElement
 * @class
 */
export class IteratorBlock extends TemplateElement {
    /*private*/ listedExp : Expression;

    /*private*/ loopVarName : string;

    /*private*/ loopVar2Name : string;

    /*private*/ hashListing : boolean;

    /*private*/ forEach : boolean;

    constructor(listedExp : Expression, loopVarName : string, loopVar2Name : string, childrenBeforeElse : TemplateElements, hashListing : boolean, forEach : boolean) {
        super();
        if(this.listedExp===undefined) this.listedExp = null;
        if(this.loopVarName===undefined) this.loopVarName = null;
        if(this.loopVar2Name===undefined) this.loopVar2Name = null;
        if(this.hashListing===undefined) this.hashListing = false;
        if(this.forEach===undefined) this.forEach = false;
        this.listedExp = listedExp;
        this.loopVarName = loopVarName;
        this.loopVar2Name = loopVar2Name;
        this.setChildren(childrenBeforeElse);
        this.hashListing = hashListing;
        this.forEach = forEach;
    }

    isHashListing() : boolean {
        return this.hashListing;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : /*Environment*/any) : TemplateElement[] {
        this.acceptWithResult(env);
        return null;
    }

    acceptWithResult(env : /*Environment*/any) : boolean {
        let listedValue : TemplateModel = this.listedExp.eval(env);
        if(listedValue == null) {
            if(env.isClassicCompatible()) {
                listedValue = Constants.EMPTY_SEQUENCE_$LI$();
            } else {
                this.listedExp.assertNonNull(null, env);
            }
        }
        return env.visitIteratorBlock(new IteratorBlock.IterationContext(this, listedValue, this.loopVarName, this.loopVar2Name));
    }

    /**
     * @param {String} loopVariableName Then name of the loop variable whose context we are looking for, or {@code null} if we simply look for
     * the innermost context.
     * @return {IteratorBlock.IterationContext} The matching context or {@code null} if no such context exists.
     * @param {Environment} env
     */
    static findEnclosingIterationContext(env : /*Environment*/any, loopVariableName : string) : IteratorBlock.IterationContext {
        let ctxStack : LocalContextStack = env.getLocalContextStack();
        if(ctxStack != null) {
            for(let i : number = ctxStack.size() - 1; i >= 0; i--) {
                let ctx : any = ctxStack.get(i);
                if((ctx != null && ctx instanceof <any>IteratorBlock.IterationContext) && (loopVariableName == null || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(loopVariableName,(<IteratorBlock.IterationContext>ctx).getLoopVariableName())) || /* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(loopVariableName,(<IteratorBlock.IterationContext>ctx).getLoopVariable2Name())))) {
                    return <IteratorBlock.IterationContext>ctx;
                }
            }
        }
        return null;
    }

    /**
     * 
     * @param {boolean} canonical
     * @param {boolean} inStringLiteral
     * @return {String}
     */
    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    dump$boolean(canonical : boolean) : string {
        let buf : StringBuilder = new StringBuilder("");
        if(canonical) buf.append('<');
        buf.append(this.getNodeTypeSymbol());
        buf.append(' ');
        if(this.forEach) {
            buf.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(this.loopVarName));
            buf.append(" in ");
            buf.append(this.listedExp.getCanonicalForm());
        } else {
            buf.append(this.listedExp.getCanonicalForm());
            if(this.loopVarName != null) {
                buf.append(" as ");
                buf.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(this.loopVarName));
                if(this.loopVar2Name != null) {
                    buf.append(", ");
                    buf.append(_CoreStringUtils.toFTLTopLevelIdentifierReference(this.loopVar2Name));
                }
            }
        }
        if(canonical) {
            buf.append(">");
            buf.append(this.getChildrenCanonicalForm());
            if(!(this.getParentElement() != null && this.getParentElement() instanceof <any>ListElseContainer)) {
                buf.append("</");
                buf.append(this.getNodeTypeSymbol());
                buf.append('>');
            }
        }
        return buf.toString();
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 1 + (this.loopVarName != null?1:0) + (this.loopVar2Name != null?1:0);
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        switch((idx)) {
        case 0:
            return this.listedExp;
        case 1:
            if(this.loopVarName == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return this.loopVarName;
        case 2:
            if(this.loopVar2Name == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return this.loopVar2Name;
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        switch((idx)) {
        case 0:
            return ParameterRole.LIST_SOURCE_$LI$();
        case 1:
            if(this.loopVarName == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return ParameterRole.TARGET_LOOP_VARIABLE_$LI$();
        case 2:
            if(this.loopVar2Name == null) throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
            return ParameterRole.TARGET_LOOP_VARIABLE_$LI$();
        default:
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return this.forEach?"#foreach":"#list";
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return this.loopVarName != null;
    }
}
IteratorBlock["__class"] = "freemarker.core.IteratorBlock";


export namespace IteratorBlock {

    /**
     * Holds the context of a #list (or #forEach) directive.
     * @param {*} listedValue
     * @param {String} loopVarName
     * @param {String} loopVar2Name
     * @class
     */
    export class IterationContext implements LocalContext {
        public __parent: any;
        static LOOP_STATE_HAS_NEXT : string = "_has_next";

        static LOOP_STATE_INDEX : string = "_index";

        openedIterator : any;

        __hasNext : boolean;

        loopVar : TemplateModel;

        loopVar2 : TemplateModel;

        index : number;

        alreadyEntered : boolean;

        localVarNames : Array<any>;

        /**
         * If the {@code #list} has nested {@code #items}, it's {@code null} outside the {@code #items}.
         */
        loopVarName : string;

        /**
         * Used if we list key-value pairs
         */
        loopVar2Name : string;

        listedValue : TemplateModel;

        public constructor(__parent: any, listedValue : TemplateModel, loopVarName : string, loopVar2Name : string) {
            this.__parent = __parent;
            if(this.openedIterator===undefined) this.openedIterator = null;
            if(this.__hasNext===undefined) this.__hasNext = false;
            if(this.loopVar===undefined) this.loopVar = null;
            if(this.loopVar2===undefined) this.loopVar2 = null;
            if(this.index===undefined) this.index = 0;
            if(this.alreadyEntered===undefined) this.alreadyEntered = false;
            this.localVarNames = null;
            if(this.loopVarName===undefined) this.loopVarName = null;
            if(this.loopVar2Name===undefined) this.loopVar2Name = null;
            if(this.listedValue===undefined) this.listedValue = null;
            this.listedValue = listedValue;
            this.loopVarName = loopVarName;
            this.loopVar2Name = loopVar2Name;
        }

        accept(env : /*Environment*/any) : boolean {
            return this.executeNestedContent(env, this.__parent.getChildBuffer());
        }

        loopForItemsElement(env : /*Environment*/any, childBuffer : TemplateElement[], loopVarName : string, loopVar2Name : string) {
            try {
                if(this.alreadyEntered) {
                    throw new _MiscTemplateException(env, "The #items directive was already entered earlier for this listing.");
                }
                this.alreadyEntered = true;
                this.loopVarName = loopVarName;
                this.loopVar2Name = loopVar2Name;
                this.executeNestedContent(env, childBuffer);
            } finally {
                this.loopVarName = null;
                this.loopVar2Name = null;
            }
        }

        /**
         * Executes the given block for the {link #listedValue}: if {link #loopVarName} is non-{@code null}, then for
         * each list item once, otherwise once if {link #listedValue} isn't empty.
         * @param {Environment} env
         * @param {Array} childBuffer
         * @return {boolean}
         * @private
         */
        executeNestedContent(env : /*Environment*/any, childBuffer : TemplateElement[]) : boolean {
            return !this.__parent.hashListing?this.executedNestedContentForCollOrSeqListing(env, childBuffer):this.executedNestedContentForHashListing(env, childBuffer);
        }

        executedNestedContentForCollOrSeqListing(env : /*Environment*/any, childBuffer : TemplateElement[]) : boolean {
            let listNotEmpty : boolean;
            if(this.listedValue != null && (this.listedValue["__interfaces"] != null && this.listedValue["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || this.listedValue.constructor != null && this.listedValue.constructor["__interfaces"] != null && this.listedValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
                let collModel : TemplateCollectionModel = <TemplateCollectionModel><any>this.listedValue;
                let iterModel : TemplateModelIterator = this.openedIterator == null?collModel.iterator():(<TemplateModelIterator><any>this.openedIterator);
                listNotEmpty = iterModel.hasNext();
                if(listNotEmpty) {
                    if(this.loopVarName != null) {
                        listLoop: do {
                            this.loopVar = iterModel.next();
                            this.__hasNext = iterModel.hasNext();
                            try {
                                env.visit$freemarker_core_TemplateElement_A(childBuffer);
                            } catch(br) {
                                if(br instanceof BreakOrContinueException) {
                                    if(br === BreakOrContinueException.BREAK_INSTANCE_$LI$()) {
                                        break listLoop;
                                    }
                                    return;
                                }
                                throw br;
                            }
                            this.index++;
                        } while((this.__hasNext));
                        this.openedIterator = null;
                    } else {
                        this.openedIterator = iterModel;
                        env.visit$freemarker_core_TemplateElement_A(childBuffer);
                    }
                }
            } else if(this.listedValue != null && (this.listedValue["__interfaces"] != null && this.listedValue["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || this.listedValue.constructor != null && this.listedValue.constructor["__interfaces"] != null && this.listedValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
                let seqModel : TemplateSequenceModel = <TemplateSequenceModel><any>this.listedValue;
                let size : number = seqModel.size();
                listNotEmpty = size !== 0;
                if(listNotEmpty) {
                    if(this.loopVarName != null) {
                        listLoop: for(this.index = 0; this.index < size; this.index++) {
                            this.loopVar = seqModel['get$int'](this.index);
                            this.__hasNext = (size > this.index + 1);
                            try {
                                env.visit$freemarker_core_TemplateElement_A(childBuffer);
                            } catch(br) {
                                if(br === BreakOrContinueException.BREAK_INSTANCE_$LI$()) {
                                    break listLoop;
                                }
                            }
                        }
                    } else {
                        env.visit$freemarker_core_TemplateElement_A(childBuffer);
                    }
                }
            } else if(env.isClassicCompatible()) {
                listNotEmpty = true;
                if(this.loopVarName != null) {
                    this.loopVar = this.listedValue;
                    this.__hasNext = false;
                }
                try {
                    env.visit$freemarker_core_TemplateElement_A(childBuffer);
                } catch(br) {
                }
            } else if((this.listedValue != null && (this.listedValue["__interfaces"] != null && this.listedValue["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || this.listedValue.constructor != null && this.listedValue.constructor["__interfaces"] != null && this.listedValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0)) && !NonSequenceOrCollectionException.isWrappedIterable(this.listedValue)) {
                throw new NonSequenceOrCollectionException(env, new _ErrorDescriptionBuilder(["The value you try to list is ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(this.listedValue)), ", thus you must specify two loop variables after the \"as\"; one for the key, and another for the value, like ", "<#... as k, v>", ")."]));
            } else {
                throw new NonSequenceOrCollectionException(this.__parent.listedExp, this.listedValue, env);
            }
            return listNotEmpty;
        }

        executedNestedContentForHashListing(env : /*Environment*/any, childBuffer : TemplateElement[]) : boolean {
            let hashNotEmpty : boolean;
            if(this.listedValue != null && (this.listedValue["__interfaces"] != null && this.listedValue["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0 || this.listedValue.constructor != null && this.listedValue.constructor["__interfaces"] != null && this.listedValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx") >= 0)) {
                let listedHash : TemplateHashModelEx = <TemplateHashModelEx><any>this.listedValue;
                if(listedHash != null && (listedHash["__interfaces"] != null && listedHash["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx2") >= 0 || listedHash.constructor != null && listedHash.constructor["__interfaces"] != null && listedHash.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModelEx2") >= 0)) {
                    let kvpIter : KeyValuePairIterator = this.openedIterator == null?(<TemplateHashModelEx2><any>listedHash).keyValuePairIterator():<KeyValuePairIterator><any>this.openedIterator;
                    hashNotEmpty = kvpIter.hasNext();
                    if(hashNotEmpty) {
                        if(this.loopVarName != null) {
                            listLoop: do {
                                let kvp : KeyValuePair = kvpIter.next();
                                this.loopVar = kvp.getKey();
                                this.loopVar2 = kvp.getValue();
                                this.__hasNext = kvpIter.hasNext();
                                try {
                                    env.visit$freemarker_core_TemplateElement_A(childBuffer);
                                } catch(br) {
                                    if(br instanceof BreakOrContinueException) {
                                        if(br === BreakOrContinueException.BREAK_INSTANCE_$LI$()) {
                                            break listLoop;
                                        }
                                    }
                                    throw br;
                                }
                                this.index++;
                            } while((this.__hasNext));
                            this.openedIterator = null;
                        } else {
                            this.openedIterator = kvpIter;
                            env.visit$freemarker_core_TemplateElement_A(childBuffer);
                        }
                    }
                } else {
                    let keysIter : TemplateModelIterator = listedHash.keys().iterator();
                    hashNotEmpty = keysIter.hasNext();
                    if(hashNotEmpty) {
                        if(this.loopVarName != null) {
                            listLoop: do {
                                this.loopVar = keysIter.next();
                                if(!(this.loopVar != null && (this.loopVar["__interfaces"] != null && this.loopVar["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || this.loopVar.constructor != null && this.loopVar.constructor["__interfaces"] != null && this.loopVar.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0))) {
                                    throw _MessageUtil.newKeyValuePairListingNonStringKeyExceptionMessage(this.loopVar, <TemplateHashModelEx><any>this.listedValue);
                                }
                                this.loopVar2 = listedHash['get$java_lang_String']((<TemplateScalarModel><any>this.loopVar).getAsString());
                                this.__hasNext = keysIter.hasNext();
                                try {
                                    env.visit$freemarker_core_TemplateElement_A(childBuffer);
                                } catch(br) {
                                    if(br === BreakOrContinueException.BREAK_INSTANCE_$LI$()) {
                                        break listLoop;
                                    }
                                }
                                this.index++;
                            } while((this.__hasNext));
                        } else {
                            env.visit$freemarker_core_TemplateElement_A(childBuffer);
                        }
                    }
                }
            } else if((this.listedValue != null && (this.listedValue["__interfaces"] != null && this.listedValue["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || this.listedValue.constructor != null && this.listedValue.constructor["__interfaces"] != null && this.listedValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) || (this.listedValue != null && (this.listedValue["__interfaces"] != null && this.listedValue["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || this.listedValue.constructor != null && this.listedValue.constructor["__interfaces"] != null && this.listedValue.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))) {
                throw new NonSequenceOrCollectionException(env, new _ErrorDescriptionBuilder(["The value you try to list is ", new _DelayedAOrAn(new _DelayedFTLTypeDescription(this.listedValue)), ", thus you must specify only one loop variable after the \"as\" (there\'s no separate key and value)."]));
            } else {
                throw new NonExtendedHashException(this.__parent.listedExp, this.listedValue, env);
            }
            return hashNotEmpty;
        }

        getLoopVariableName() : string {
            return this.loopVarName;
        }

        getLoopVariable2Name() : string {
            return this.loopVar2Name;
        }

        public getLocalVariable(name : string) : TemplateModel {
            let loopVariableName : string = this.loopVarName;
            if(loopVariableName != null && /* startsWith */((str, searchString, position = 0) => str.substr(position, searchString.length) === searchString)(name, loopVariableName)) {
                switch((name.length - loopVariableName.length)) {
                case 0:
                    return this.loopVar;
                case 6:
                    if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, IterationContext.LOOP_STATE_INDEX)) {
                        return new SimpleNumber(this.index);
                    }
                    break;
                case 9:
                    if(/* endsWith */((str, searchString) => { let pos = str.length - searchString.length; let lastIndex = str.indexOf(searchString, pos); return lastIndex !== -1 && lastIndex === pos; })(name, IterationContext.LOOP_STATE_HAS_NEXT)) {
                        return this.__hasNext?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
                    }
                    break;
                }
            }
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(name,this.loopVar2Name))) {
                return this.loopVar2;
            }
            return null;
        }

        public getLocalVariableNames() : Array<any> {
            let loopVariableName : string = this.loopVarName;
            if(loopVariableName != null) {
                if(this.localVarNames == null) {
                    this.localVarNames = <any>([]);
                    /* add */(this.localVarNames.push(loopVariableName)>0);
                    /* add */(this.localVarNames.push(loopVariableName + IterationContext.LOOP_STATE_INDEX)>0);
                    /* add */(this.localVarNames.push(loopVariableName + IterationContext.LOOP_STATE_HAS_NEXT)>0);
                }
                return this.localVarNames;
            } else {
                return [];
            }
        }

        hasNext() : boolean {
            return this.__hasNext;
        }

        getIndex() : number {
            return this.index;
        }
    }
    IterationContext["__class"] = "freemarker.core.IteratorBlock.IterationContext";
    IterationContext["__interfaces"] = ["freemarker.core.LocalContext"];


}




