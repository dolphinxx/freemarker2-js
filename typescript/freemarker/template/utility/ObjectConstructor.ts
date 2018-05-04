/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BeansWrapper } from '../../ext/beans/BeansWrapper';
import { TemplateMethodModelEx } from '../TemplateMethodModelEx';
import { TemplateModelException } from '../TemplateModelException';
import { ClassUtil } from './ClassUtil';
import { TemplateModel } from '../TemplateModel';

/**
 * An object that you can make available in a template
 * to instantiate arbitrary beans-wrapped objects in a template.
 * Beware of this class's security implications. It allows
 * the instantiation of arbitrary objects and invoking
 * methods on them. Usage is something like:
 * <br>
 * <br>myDataModel.put("objectConstructor", new ObjectConstructor());
 * <br>
 * <br>And then from your FTL code:
 * <br>
 * <br>&lt;#assign aList = objectConstructor("java.util.ArrayList", 100)&gt;
 * @class
 */
export class ObjectConstructor implements TemplateMethodModelEx {
    public exec(args : Array<any>) : any {
        if(/* isEmpty */(args.length == 0)) {
            throw new TemplateModelException("This method must have at least one argument, the name of the class to instantiate.");
        }
        let classname : string = /* get */args[0].toString();
        let cl : any = null;
        try {
            cl = ClassUtil.forName(classname);
        } catch(e) {
            throw new TemplateModelException(e.message);
        };
        let bw : BeansWrapper = BeansWrapper.getDefaultInstance();
        let obj : any = bw.newInstance(cl, /* subList */args.slice(1, /* size */(<number>args.length)));
        return bw.wrap$java_lang_Object(obj);
    }

    constructor() {
    }
}
ObjectConstructor["__class"] = "freemarker.template.utility.ObjectConstructor";
ObjectConstructor["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateMethodModelEx","freemarker.template.TemplateModel"];




var __Function = Function;
