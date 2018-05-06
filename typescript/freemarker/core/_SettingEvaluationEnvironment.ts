/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */

/**
 * Don't use this; used internally by FreeMarker, might changes without notice.
 * The runtime environment used during the evaluation of configuration {link Properties}.
 * @class
 */
export class _SettingEvaluationEnvironment {
    static CURRENT: _SettingEvaluationEnvironment;

    /*private*/
    objectWrapper: /*BeansWrapper*/any;

    public static getCurrent(): _SettingEvaluationEnvironment {
        let r: any = _SettingEvaluationEnvironment.CURRENT;
        if (r != null) {
            return <_SettingEvaluationEnvironment>r;
        }
        return new _SettingEvaluationEnvironment();
    }

    public static startScope(): _SettingEvaluationEnvironment {
        let previous: any = _SettingEvaluationEnvironment.CURRENT;
        _SettingEvaluationEnvironment.CURRENT = new _SettingEvaluationEnvironment();
        return <_SettingEvaluationEnvironment>previous;
    }

    public static endScope(previous: _SettingEvaluationEnvironment) {
        _SettingEvaluationEnvironment.CURRENT = previous;
    }

    public getObjectWrapper(): /*BeansWrapper*/any {
        if (this.objectWrapper == null) {
            this.objectWrapper = new (require('../ext/beans/BeansWrapper').BeansWrapper)(require('../template/Configuration').Configuration.VERSION_2_3_21_$LI$());
        }
        return this.objectWrapper;
    }

    constructor() {
        if (this.objectWrapper === undefined) this.objectWrapper = null;
    }
}

_SettingEvaluationEnvironment["__class"] = "freemarker.core._SettingEvaluationEnvironment";