/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateNodeModel } from './TemplateNodeModel';
import { TemplateModelException } from './TemplateModelException';

/**
 * A {link TemplateNodeModel} that supports navigating to the previous and next sibling nodes.
 * 
 * @since 2.3.26
 * @class
 */
export interface TemplateNodeModelEx extends TemplateNodeModel {
    /**
     * @return {*} The immediate previous sibling of this node, or {@code null} if there's no such node.
     */
    getPreviousSibling() : TemplateNodeModelEx;

    /**
     * @return {*} The immediate next sibling of this node, or {@code null} if there's no such node.
     */
    getNextSibling() : TemplateNodeModelEx;
}


var __Function = Function;
