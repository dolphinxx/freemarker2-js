/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from './TemplateModel';
import {TemplateSequenceModel} from './TemplateSequenceModel';

/**
 * "node" template language data type: an object that is a node in a tree.
 * A tree of nodes can be recursively <em>visited</em> using the &lt;#visit...&gt; and &lt;#recurse...&gt;
 * directives. This API is largely based on the W3C Document Object Model
 * (DOM) API. However, it's meant to be generally useful for describing
 * any tree of objects that you wish to navigate using a recursive visitor
 * design pattern (or simply through being able to get the parent
 * and child nodes).
 * 
 * <p>See the <a href="https://freemarker.apache.org/docs/xgui.html" target="_blank">XML
 * Processing Guide</a> for a concrete application.
 * 
 * @since FreeMarker 2.3
 * @class
 */
export interface TemplateNodeModel extends TemplateModel {
    /**
     * @return {*} the parent of this node or null, in which case
     * this node is the root of the tree.
     */
    getParentNode() : TemplateNodeModel;

    /**
     * @return {*} a sequence containing this node's children.
     * If the returned value is null or empty, this is essentially
     * a leaf node.
     */
    getChildNodes() : TemplateSequenceModel;

    /**
     * @return {String} a String that is used to determine the processing
     * routine to use. In the XML implementation, if the node
     * is an element, it returns the element's tag name.  If it
     * is an attribute, it returns the attribute's name. It
     * returns "@text" for text nodes, "@pi" for processing instructions,
     * and so on.
     */
    getNodeName() : string;

    /**
     * @return {String} a String describing the <em>type</em> of node this is.
     * In the W3C DOM, this should be "element", "text", "attribute", etc.
     * A TemplateNodeModel implementation that models other kinds of
     * trees could return whatever it appropriate for that application. It
     * can be null, if you don't want to use node-types.
     */
    getNodeType() : string;

    /**
     * @return {String} the XML namespace URI with which this node is
     * associated. If this TemplateNodeModel implementation is
     * not XML-related, it will almost certainly be null. Even
     * for XML nodes, this will often be null.
     */
    getNodeNamespace() : string;
}



