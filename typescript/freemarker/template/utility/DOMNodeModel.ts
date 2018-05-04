/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleHash } from '../SimpleHash';
import { SimpleScalar } from '../SimpleScalar';
import { TemplateBooleanModel } from '../TemplateBooleanModel';
import { TemplateHashModel } from '../TemplateHashModel';
import { TemplateMethodModel } from '../TemplateMethodModel';
import { TemplateModel } from '../TemplateModel';
import { TemplateModelException } from '../TemplateModelException';
import { TemplateSequenceModel } from '../TemplateSequenceModel';

/**
 * A convenient wrapper class for wrapping a Node in the W3C DOM API.
 * @param {*} node
 * @class
 */
export class DOMNodeModel implements TemplateHashModel {
    static __static_initialized : boolean = false;
    static __static_initialize() { if(!DOMNodeModel.__static_initialized) { DOMNodeModel.__static_initialized = true; DOMNodeModel.__static_initializer_0(); } }

    static equivalenceTable : Map<any, any>; public static equivalenceTable_$LI$() : Map<any, any> { DOMNodeModel.__static_initialize(); if(DOMNodeModel.equivalenceTable == null) DOMNodeModel.equivalenceTable = <any>(new Map<any, any>()); return DOMNodeModel.equivalenceTable; };

    static __static_initializer_0() {
        /* put */DOMNodeModel.equivalenceTable_$LI$().set("*", "children");
        /* put */DOMNodeModel.equivalenceTable_$LI$().set("@*", "attributes");
    }

    /*private*/ node : Node;

    /*private*/ cache : Map<any, any> = <any>(new Map<any, any>());

    public constructor(node : Node) {
        if(this.node===undefined) this.node = null;
        this.node = node;
    }

    public get$java_lang_String(key : string) : TemplateModel {
        let result : TemplateModel = null;
        if(/* containsKey */DOMNodeModel.equivalenceTable_$LI$().has(key)) {
            key = <string>/* get */DOMNodeModel.equivalenceTable_$LI$().get(key);
        }
        if(/* containsKey */this.cache.has(key)) {
            result = <TemplateModel><any>/* get */this.cache.get(key);
        }
        if(result == null) {
            if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("attributes",key))) {
                let attributes : NamedNodeMap = this.node.getAttributes();
                if(attributes != null) {
                    let hash : SimpleHash = new SimpleHash();
                    for(let i : number = 0; i < attributes.getLength(); i++) {
                        let att : Attr = <Attr><any>attributes.item(i);
                        hash.put$java_lang_String$java_lang_Object(att.getName(), att.getValue());
                    };
                    result = hash;
                }
            } else if((c => c.charCodeAt==null?<any>c:c.charCodeAt(0))(key.charAt(0)) == '@'.charCodeAt(0)) {
                if(this.node != null && (this.node["__interfaces"] != null && this.node["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || this.node.constructor != null && this.node.constructor["__interfaces"] != null && this.node.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0)) {
                    let attValue : string = (<Element><any>this.node).getAttribute(key.substring(1));
                    result = new SimpleScalar(attValue);
                } else {
                    throw new TemplateModelException("Trying to get an attribute value for a non-element node");
                }
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("is_element",key))) {
                result = (this.node != null && (this.node["__interfaces"] != null && this.node["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || this.node.constructor != null && this.node.constructor["__interfaces"] != null && this.node.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("is_text",key))) {
                result = (this.node != null && (this.node["__interfaces"] != null && this.node["__interfaces"].indexOf("org.w3c.dom.Text") >= 0 || this.node.constructor != null && this.node.constructor["__interfaces"] != null && this.node.constructor["__interfaces"].indexOf("org.w3c.dom.Text") >= 0))?TemplateBooleanModel.TRUE:TemplateBooleanModel.FALSE;
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("name",key))) {
                result = new SimpleScalar(this.node.getNodeName());
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("children",key))) {
                result = new DOMNodeModel.NodeListTM(this, this.node.getChildNodes());
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("parent",key))) {
                let parent : Node = this.node.getParentNode();
                result = (parent == null)?null:new DOMNodeModel(parent);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("ancestorByName",key))) {
                result = new DOMNodeModel.AncestorByName(this);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("nextSibling",key))) {
                let next : Node = this.node.getNextSibling();
                result = (next == null)?null:new DOMNodeModel(next);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("previousSibling",key))) {
                let previous : Node = this.node.getPreviousSibling();
                result = (previous == null)?null:new DOMNodeModel(previous);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("nextSiblingElement",key))) {
                let next : Node = DOMNodeModel.nextSiblingElement(this.node);
                result = (next == null)?null:new DOMNodeModel(next);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("previousSiblingElement",key))) {
                let previous : Node = DOMNodeModel.previousSiblingElement(this.node);
                result = (previous == null)?null:new DOMNodeModel(previous);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("nextElement",key))) {
                let next : Node = DOMNodeModel.nextElement(this.node);
                result = (next == null)?null:new DOMNodeModel(next);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("previousElement",key))) {
                let previous : Node = DOMNodeModel.previousElement(this.node);
                result = (previous == null)?null:new DOMNodeModel(previous);
            } else if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })("text",key))) {
                result = new SimpleScalar(DOMNodeModel.getText(this.node));
            }
            /* put */this.cache.set(key, result);
        }
        return result;
    }

    public get(key? : any) : any {
        if(((typeof key === 'string') || key === null)) {
            return <any>this.get$java_lang_String(key);
        } else throw new Error('invalid overload');
    }

    public isEmpty() : boolean {
        return false;
    }

    static getText(node : Node) : string {
        let result : string = "";
        if(node != null && (node["__interfaces"] != null && node["__interfaces"].indexOf("org.w3c.dom.Text") >= 0 || node.constructor != null && node.constructor["__interfaces"] != null && node.constructor["__interfaces"].indexOf("org.w3c.dom.Text") >= 0)) {
            result = (<Text><any>node).getData();
        } else if(node != null && (node["__interfaces"] != null && node["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || node.constructor != null && node.constructor["__interfaces"] != null && node.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0)) {
            let children : NodeList = node.getChildNodes();
            for(let i : number = 0; i < children.getLength(); i++) {
                result += DOMNodeModel.getText(children.item(i));
            };
        }
        return result;
    }

    static nextSiblingElement(node : Node) : Element {
        let next : Node = node;
        while((next != null)) {
            next = next.getNextSibling();
            if(next != null && (next["__interfaces"] != null && next["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || next.constructor != null && next.constructor["__interfaces"] != null && next.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0)) {
                return <Element><any>next;
            }
        };
        return null;
    }

    static previousSiblingElement(node : Node) : Element {
        let previous : Node = node;
        while((previous != null)) {
            previous = previous.getPreviousSibling();
            if(previous != null && (previous["__interfaces"] != null && previous["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || previous.constructor != null && previous.constructor["__interfaces"] != null && previous.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0)) {
                return <Element><any>previous;
            }
        };
        return null;
    }

    static nextElement(node : Node) : Element {
        if(node.hasChildNodes()) {
            let children : NodeList = node.getChildNodes();
            for(let i : number = 0; i < children.getLength(); i++) {
                let child : Node = children.item(i);
                if(child != null && (child["__interfaces"] != null && child["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || child.constructor != null && child.constructor["__interfaces"] != null && child.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0)) {
                    return <Element><any>child;
                }
            };
        }
        let nextSiblingElement : Element = DOMNodeModel.nextSiblingElement(node);
        if(nextSiblingElement != null) {
            return nextSiblingElement;
        }
        let parent : Node = node.getParentNode();
        while((parent != null && (parent["__interfaces"] != null && parent["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || parent.constructor != null && parent.constructor["__interfaces"] != null && parent.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0))) {
            let next : Element = DOMNodeModel.nextSiblingElement(parent);
            if(next != null) {
                return next;
            }
            parent = parent.getParentNode();
        };
        return null;
    }

    static previousElement(node : Node) : Element {
        let result : Element = DOMNodeModel.previousSiblingElement(node);
        if(result != null) {
            return result;
        }
        let parent : Node = node.getParentNode();
        if(parent != null && (parent["__interfaces"] != null && parent["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || parent.constructor != null && parent.constructor["__interfaces"] != null && parent.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0)) {
            return <Element><any>parent;
        }
        return null;
    }

    setParent(parent : DOMNodeModel) {
        if(parent != null) {
            /* put */this.cache.set("parent", parent);
        }
    }

    getNodeName() : string {
        return this.node.getNodeName();
    }
}
DOMNodeModel["__class"] = "freemarker.template.utility.DOMNodeModel";
DOMNodeModel["__interfaces"] = ["freemarker.template.TemplateHashModel","freemarker.template.TemplateModel"];



export namespace DOMNodeModel {

    export class AncestorByName implements TemplateMethodModel {
        public __parent: any;
        public exec(__arguments : Array<any>) : any {
            if(/* size */(<number>__arguments.length) !== 1) {
                throw new TemplateModelException("Expecting exactly one string argument here");
            }
            let nodeName : string = <string>/* get */__arguments[0];
            let ancestor : DOMNodeModel = <DOMNodeModel><any>this.__parent.get$java_lang_String("parent");
            while((ancestor != null)) {
                if(/* equals */(<any>((o1: any, o2: any) => { if(o1 && o1.equals) { return o1.equals(o2); } else { return o1 === o2; } })(nodeName,ancestor.getNodeName()))) {
                    return ancestor;
                }
                ancestor = <DOMNodeModel><any>ancestor.get$java_lang_String("parent");
            };
            return null;
        }

        constructor(__parent: any) {
            this.__parent = __parent;
        }
    }
    AncestorByName["__class"] = "freemarker.template.utility.DOMNodeModel.AncestorByName";
    AncestorByName["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateModel"];



    export class NodeListTM implements TemplateSequenceModel, TemplateMethodModel {
        public __parent: any;
        nodeList : NodeList;

        nodes : TemplateModel[];

        constructor(__parent: any, nodeList : NodeList) {
            this.__parent = __parent;
            if(this.nodeList===undefined) this.nodeList = null;
            if(this.nodes===undefined) this.nodes = null;
            this.nodeList = nodeList;
            this.nodes = (s => { let a=[]; while(s-->0) a.push(null); return a; })(nodeList.getLength());
        }

        public get(s? : any) : any {
            if(((typeof s === 'number') || s === null)) {
                return <any>this.get$int(s);
            } else throw new Error('invalid overload');
        }

        public get$int(index : number) : TemplateModel {
            let result : DOMNodeModel = <DOMNodeModel><any>this.nodes[index];
            if(result == null) {
                result = new DOMNodeModel(this.nodeList.item(index));
                this.nodes[index] = result;
                result.setParent(this.__parent);
            }
            return result;
        }

        public size() : number {
            return this.nodes.length;
        }

        public exec(__arguments : Array<any>) : any {
            if(/* size */(<number>__arguments.length) !== 1) {
                throw new TemplateModelException("Expecting exactly one string argument here");
            }
            if(!(this.__parent.node != null && (this.__parent.node["__interfaces"] != null && this.__parent.node["__interfaces"].indexOf("org.w3c.dom.Element") >= 0 || this.__parent.node.constructor != null && this.__parent.node.constructor["__interfaces"] != null && this.__parent.node.constructor["__interfaces"].indexOf("org.w3c.dom.Element") >= 0))) {
                throw new TemplateModelException("Expecting element here.");
            }
            let elem : Element = <Element><any>this.__parent.node;
            return new DOMNodeModel.NodeListTM(this.__parent, elem.getElementsByTagName(<string>/* get */__arguments[0]));
        }
    }
    NodeListTM["__class"] = "freemarker.template.utility.DOMNodeModel.NodeListTM";
    NodeListTM["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];


}



var __Function = Function;

DOMNodeModel.equivalenceTable_$LI$();

DOMNodeModel.__static_initialize();
