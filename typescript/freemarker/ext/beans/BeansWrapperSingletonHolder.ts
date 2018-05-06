/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {BeansWrapper} from './BeansWrapper';

/**
 * Hack to prevent creating the default ObjectWrapper before BeansWrapper is fully initialized.
 * @class
 */
export class BeansWrapperSingletonHolder {
    /**
     * Used in {link BeansWrapper#getDefaultInstance()}.
     * 
     * @deprecated Use {link BeansWrapperBuilder#build()} to get or create singletons.
     */
    static INSTANCE : BeansWrapper; public static INSTANCE_$LI$() : BeansWrapper { if(BeansWrapperSingletonHolder.INSTANCE == null) BeansWrapperSingletonHolder.INSTANCE = new BeansWrapper(); return BeansWrapperSingletonHolder.INSTANCE; };
}
BeansWrapperSingletonHolder["__class"] = "freemarker.ext.beans.BeansWrapperSingletonHolder";





BeansWrapperSingletonHolder.INSTANCE_$LI$();
