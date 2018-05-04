/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleScalar } from '../template/SimpleScalar';
import { SimpleSequence } from '../template/SimpleSequence';
import { TemplateMethodModel } from '../template/TemplateMethodModel';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateNodeModel } from '../template/TemplateNodeModel';
import { TemplateNodeModelEx } from '../template/TemplateNodeModelEx';
import { BuiltInForNode } from './BuiltInForNode';
import { Environment } from './Environment';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { BuiltInForNodeEx } from './BuiltInForNodeEx';

/**
 * A holder for builtins that operate exclusively on (XML-)node left-hand value.
 * @class
 */
export class BuiltInsForNodes {
    constructor() {
    }
}
BuiltInsForNodes["__class"] = "freemarker.core.BuiltInsForNodes";


export namespace BuiltInsForNodes {

    export class ancestorsBI extends BuiltInForNode {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModel, env : Environment) : TemplateModel {
            let result : BuiltInsForNodes.AncestorSequence = new BuiltInsForNodes.AncestorSequence(env);
            let parent : TemplateNodeModel = nodeModel.getParentNode();
            while((parent != null)) {
                result.add$java_lang_Object(parent);
                parent = parent.getParentNode();
            };
            return result;
        }

        constructor() {
            super();
        }
    }
    ancestorsBI["__class"] = "freemarker.core.BuiltInsForNodes.ancestorsBI";
    ancestorsBI["__interfaces"] = ["java.lang.Cloneable"];



    export class childrenBI extends BuiltInForNode {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModel, env : Environment) : TemplateModel {
            return nodeModel.getChildNodes();
        }

        constructor() {
            super();
        }
    }
    childrenBI["__class"] = "freemarker.core.BuiltInsForNodes.childrenBI";
    childrenBI["__interfaces"] = ["java.lang.Cloneable"];



    export class node_nameBI extends BuiltInForNode {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModel, env : Environment) : TemplateModel {
            return new SimpleScalar(nodeModel.getNodeName());
        }

        constructor() {
            super();
        }
    }
    node_nameBI["__class"] = "freemarker.core.BuiltInsForNodes.node_nameBI";
    node_nameBI["__interfaces"] = ["java.lang.Cloneable"];



    export class node_namespaceBI extends BuiltInForNode {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModel, env : Environment) : TemplateModel {
            let nsURI : string = nodeModel.getNodeNamespace();
            return nsURI == null?null:new SimpleScalar(nsURI);
        }

        constructor() {
            super();
        }
    }
    node_namespaceBI["__class"] = "freemarker.core.BuiltInsForNodes.node_namespaceBI";
    node_namespaceBI["__interfaces"] = ["java.lang.Cloneable"];



    export class node_typeBI extends BuiltInForNode {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModel, env : Environment) : TemplateModel {
            return new SimpleScalar(nodeModel.getNodeType());
        }

        constructor() {
            super();
        }
    }
    node_typeBI["__class"] = "freemarker.core.BuiltInsForNodes.node_typeBI";
    node_typeBI["__interfaces"] = ["java.lang.Cloneable"];



    export class parentBI extends BuiltInForNode {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModel, env : Environment) : TemplateModel {
            return nodeModel.getParentNode();
        }

        constructor() {
            super();
        }
    }
    parentBI["__class"] = "freemarker.core.BuiltInsForNodes.parentBI";
    parentBI["__interfaces"] = ["java.lang.Cloneable"];



    export class rootBI extends BuiltInForNode {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModel, env : Environment) : TemplateModel {
            let result : TemplateNodeModel = nodeModel;
            let parent : TemplateNodeModel = nodeModel.getParentNode();
            while((parent != null)) {
                result = parent;
                parent = result.getParentNode();
            };
            return result;
        }

        constructor() {
            super();
        }
    }
    rootBI["__class"] = "freemarker.core.BuiltInsForNodes.rootBI";
    rootBI["__interfaces"] = ["java.lang.Cloneable"];



    export class previousSiblingBI extends BuiltInForNodeEx {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModelEx, env : Environment) : TemplateModel {
            return nodeModel.getPreviousSibling();
        }

        constructor() {
            super();
        }
    }
    previousSiblingBI["__class"] = "freemarker.core.BuiltInsForNodes.previousSiblingBI";
    previousSiblingBI["__interfaces"] = ["java.lang.Cloneable"];



    export class nextSiblingBI extends BuiltInForNodeEx {
        /**
         * 
         * @param {*} nodeModel
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(nodeModel : TemplateNodeModelEx, env : Environment) : TemplateModel {
            return nodeModel.getNextSibling();
        }

        constructor() {
            super();
        }
    }
    nextSiblingBI["__class"] = "freemarker.core.BuiltInsForNodes.nextSiblingBI";
    nextSiblingBI["__interfaces"] = ["java.lang.Cloneable"];



    export class AncestorSequence extends SimpleSequence implements TemplateMethodModel {
        env : Environment;

        constructor(env : Environment) {
            super();
            if(this.env===undefined) this.env = null;
            this.env = env;
        }

        public exec(names : Array<any>) : any {
            if(names == null || /* isEmpty */(names.length == 0)) {
                return this;
            }
            throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
    }
    AncestorSequence["__class"] = "freemarker.core.BuiltInsForNodes.AncestorSequence";
    AncestorSequence["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel","java.io.Serializable"];


}



