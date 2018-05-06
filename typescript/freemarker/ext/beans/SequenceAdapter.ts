/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../../template/TemplateModel';
import {TemplateModelAdapter} from '../../template/TemplateModelAdapter';
import {TemplateSequenceModel} from '../../template/TemplateSequenceModel';
import {UndeclaredThrowableException} from '../../template/utility/UndeclaredThrowableException';
import {BeansWrapper} from './BeansWrapper';

/**
 * 
 * @extends AbstractList
 * @class
 */
export class SequenceAdapter implements TemplateModelAdapter {
    /*private*/ wrapper : BeansWrapper;

    /*private*/ model : TemplateSequenceModel;

    constructor(model : TemplateSequenceModel, wrapper : BeansWrapper) {
        if(this.wrapper===undefined) this.wrapper = null;
        if(this.model===undefined) this.model = null;
        this.model = model;
        this.wrapper = wrapper;
    }

    public getTemplateModel() : TemplateModel {
        return this.model;
    }

    /**
     * 
     * @return {number}
     */
    public size() : number {
        try {
            return this.model.size();
        } catch(e) {
            throw new UndeclaredThrowableException(e);
        }
    }

    /**
     * 
     * @param {number} index
     * @return {Object}
     */
    public get(index : number) : any {
        try {
            return this.wrapper.unwrap$freemarker_template_TemplateModel(this.model['get$int'](index));
        } catch(e) {
            throw new UndeclaredThrowableException(e);
        }
    }

    public getTemplateSequenceModel() : TemplateSequenceModel {
        return this.model;
    }
}
SequenceAdapter["__class"] = "freemarker.ext.beans.SequenceAdapter";
SequenceAdapter["__interfaces"] = ["java.util.List","freemarker.template.TemplateModelAdapter","java.util.Collection","java.lang.Iterable"];





