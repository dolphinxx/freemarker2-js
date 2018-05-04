/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BeansWrapper } from '../ext/beans/BeansWrapper';
import { Configuration } from '../template/Configuration';
import { Version } from '../template/Version';

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * The runtime environment used during the evaluation of configuration {link Properties}.
 * @class
 */
export class _SettingEvaluationEnvironment {
    static CURRENT : ThreadLocal; public static CURRENT_$LI$() : ThreadLocal { if(_SettingEvaluationEnvironment.CURRENT == null) _SettingEvaluationEnvironment.CURRENT = <any>(new java.lang.ThreadLocal()); return _SettingEvaluationEnvironment.CURRENT; };

    /*private*/ objectWrapper : BeansWrapper;

    public static getCurrent() : _SettingEvaluationEnvironment {
        let r : any = _SettingEvaluationEnvironment.CURRENT_$LI$().get();
        if(r != null) {
            return <_SettingEvaluationEnvironment>r;
        }
        return new _SettingEvaluationEnvironment();
    }

    public static startScope() : _SettingEvaluationEnvironment {
        let previous : any = _SettingEvaluationEnvironment.CURRENT_$LI$().get();
        _SettingEvaluationEnvironment.CURRENT_$LI$().set(new _SettingEvaluationEnvironment());
        return <_SettingEvaluationEnvironment>previous;
    }

    public static endScope(previous : _SettingEvaluationEnvironment) {
        _SettingEvaluationEnvironment.CURRENT_$LI$().set(previous);
    }

    public getObjectWrapper() : BeansWrapper {
        if(this.objectWrapper == null) {
            this.objectWrapper = new BeansWrapper(Configuration.VERSION_2_3_21_$LI$());
        }
        return this.objectWrapper;
    }

    constructor() {
        if(this.objectWrapper===undefined) this.objectWrapper = null;
    }
}
_SettingEvaluationEnvironment["__class"] = "freemarker.core._SettingEvaluationEnvironment";



var __Function = Function;

_SettingEvaluationEnvironment.CURRENT_$LI$();
