/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateElement } from './TemplateElement';
import { IteratorBlock } from './IteratorBlock';
import { ElseOfList } from './ElseOfList';
import { Environment } from './Environment';
import { StringBuilder } from '../../java/lang/StringBuilder';
import { ParameterRole } from './ParameterRole';

export class ListElseContainer extends TemplateElement {
    /*private*/ listPart : IteratorBlock;

    /*private*/ elsePart : ElseOfList;

    public constructor(listPart : IteratorBlock, elsePart : ElseOfList) {
        super();
        if(this.listPart===undefined) this.listPart = null;
        if(this.elsePart===undefined) this.elsePart = null;
        this.setChildBufferCapacity(2);
        this.addChild$freemarker_core_TemplateElement(listPart);
        this.addChild$freemarker_core_TemplateElement(elsePart);
        this.listPart = listPart;
        this.elsePart = elsePart;
    }

    /**
     * 
     * @param {Environment} env
     * @return {Array}
     */
    accept(env : Environment) : TemplateElement[] {
        if(!this.listPart.acceptWithResult(env)) {
            return this.elsePart.accept(env);
        }
        return null;
    }

    /**
     * 
     * @return {boolean}
     */
    isNestedBlockRepeater() : boolean {
        return false;
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
        if(canonical) {
            let buf : StringBuilder = new StringBuilder("");
            let ln : number = this.getChildCount();
            for(let i : number = 0; i < ln; i++) {
                let element : TemplateElement = this.getChild(i);
                buf.append(element.dump$boolean(canonical));
            };
            buf.append("</#list>");
            return buf.toString();
        } else {
            return this.getNodeTypeSymbol();
        }
    }

    /**
     * 
     * @return {String}
     */
    getNodeTypeSymbol() : string {
        return "#list-#else-container";
    }

    /**
     * 
     * @return {number}
     */
    getParameterCount() : number {
        return 0;
    }

    /**
     * 
     * @param {number} idx
     * @return {Object}
     */
    getParameterValue(idx : number) : any {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * 
     * @param {number} idx
     * @return {ParameterRole}
     */
    getParameterRole(idx : number) : ParameterRole {
        throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IndexOutOfBoundsException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }
}
ListElseContainer["__class"] = "freemarker.core.ListElseContainer";



var __Function = Function;
