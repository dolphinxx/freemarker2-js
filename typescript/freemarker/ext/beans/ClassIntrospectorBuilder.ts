/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { Version } from '../../template/Version';
import { _TemplateAPI } from '../../template/_TemplateAPI';
import { BeansWrapper } from './BeansWrapper';
import { MethodAppearanceFineTuner } from './MethodAppearanceFineTuner';
import { MethodSorter } from './MethodSorter';
import { ClassIntrospector } from './ClassIntrospector';
import { System } from '../../../java/lang/System';
import { SingletonCustomizer } from './SingletonCustomizer';

export class ClassIntrospectorBuilder {
    /*private*/ bugfixed : boolean;

    static INSTANCE_CACHE : Map<any, any>; public static INSTANCE_CACHE_$LI$() : Map<any, any> { if(ClassIntrospectorBuilder.INSTANCE_CACHE == null) ClassIntrospectorBuilder.INSTANCE_CACHE = <any>(new Map<any, any>()); return ClassIntrospectorBuilder.INSTANCE_CACHE; };

    static INSTANCE_CACHE_REF_QUEUE : ReferenceQueue; public static INSTANCE_CACHE_REF_QUEUE_$LI$() : ReferenceQueue { if(ClassIntrospectorBuilder.INSTANCE_CACHE_REF_QUEUE == null) ClassIntrospectorBuilder.INSTANCE_CACHE_REF_QUEUE = <any>(new ReferenceQueue()); return ClassIntrospectorBuilder.INSTANCE_CACHE_REF_QUEUE; };

    /*private*/ exposureLevel : number = BeansWrapper.EXPOSE_SAFE;

    /*private*/ exposeFields : boolean;

    /*private*/ treatDefaultMethodsAsBeanMembers : boolean;

    /*private*/ methodAppearanceFineTuner : MethodAppearanceFineTuner;

    /*private*/ methodSorter : MethodSorter;

    public constructor(ci? : any) {
        if(((ci != null && ci instanceof <any>ClassIntrospector) || ci === null)) {
            let __args = Array.prototype.slice.call(arguments);
            if(this.bugfixed===undefined) this.bugfixed = false;
            if(this.exposeFields===undefined) this.exposeFields = false;
            if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
            if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
            if(this.methodSorter===undefined) this.methodSorter = null;
            this.exposureLevel = BeansWrapper.EXPOSE_SAFE;
            if(this.bugfixed===undefined) this.bugfixed = false;
            if(this.exposeFields===undefined) this.exposeFields = false;
            if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
            if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
            if(this.methodSorter===undefined) this.methodSorter = null;
            (() => {
                this.bugfixed = ci.bugfixed;
                this.exposureLevel = ci.exposureLevel;
                this.exposeFields = ci.exposeFields;
                this.treatDefaultMethodsAsBeanMembers = ci.treatDefaultMethodsAsBeanMembers;
                this.methodAppearanceFineTuner = ci.methodAppearanceFineTuner;
                this.methodSorter = ci.methodSorter;
            })();
        } else if(((ci != null && ci instanceof <any>Version) || ci === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let incompatibleImprovements : any = __args[0];
            if(this.bugfixed===undefined) this.bugfixed = false;
            if(this.exposeFields===undefined) this.exposeFields = false;
            if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
            if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
            if(this.methodSorter===undefined) this.methodSorter = null;
            this.exposureLevel = BeansWrapper.EXPOSE_SAFE;
            if(this.bugfixed===undefined) this.bugfixed = false;
            if(this.exposeFields===undefined) this.exposeFields = false;
            if(this.treatDefaultMethodsAsBeanMembers===undefined) this.treatDefaultMethodsAsBeanMembers = false;
            if(this.methodAppearanceFineTuner===undefined) this.methodAppearanceFineTuner = null;
            if(this.methodSorter===undefined) this.methodSorter = null;
            (() => {
                this.bugfixed = BeansWrapper.is2321Bugfixed(incompatibleImprovements);
                this.treatDefaultMethodsAsBeanMembers = incompatibleImprovements.intValue() >= _TemplateAPI.VERSION_INT_2_3_26_$LI$();
            })();
        } else throw new Error('invalid overload');
    }

    /**
     * 
     * @return {Object}
     */
    clone() : any {
        try {
            return /* clone *//* clone */((o:any) => { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; })(this);
        } catch(e) {
            throw Object.defineProperty(new Error("Failed to clone ClassIntrospectorBuilder"), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        };
    }

    /**
     * 
     * @return {number}
     */
    public hashCode() : number {
        let prime : number = 31;
        let result : number = 1;
        result = prime * result + (this.bugfixed?1231:1237);
        result = prime * result + (this.exposeFields?1231:1237);
        result = prime * result + (this.treatDefaultMethodsAsBeanMembers?1231:1237);
        result = prime * result + this.exposureLevel;
        result = prime * result + java.lang.System.identityHashCode(this.methodAppearanceFineTuner);
        result = prime * result + java.lang.System.identityHashCode(this.methodSorter);
        return result;
    }

    /**
     * 
     * @param {Object} obj
     * @return {boolean}
     */
    public equals(obj : any) : boolean {
        if(this === obj) return true;
        if(obj == null) return false;
        if((<any>this.constructor) !== (<any>obj.constructor)) return false;
        let other : ClassIntrospectorBuilder = <ClassIntrospectorBuilder>obj;
        if(this.bugfixed !== other.bugfixed) return false;
        if(this.exposeFields !== other.exposeFields) return false;
        if(this.treatDefaultMethodsAsBeanMembers !== other.treatDefaultMethodsAsBeanMembers) return false;
        if(this.exposureLevel !== other.exposureLevel) return false;
        if(this.methodAppearanceFineTuner !== other.methodAppearanceFineTuner) return false;
        return this.methodSorter === other.methodSorter;
    }

    public getExposureLevel() : number {
        return this.exposureLevel;
    }

    /**
     * See {link BeansWrapper#setExposureLevel(int)}.
     * @param {number} exposureLevel
     */
    public setExposureLevel(exposureLevel : number) {
        if(exposureLevel < BeansWrapper.EXPOSE_ALL || exposureLevel > BeansWrapper.EXPOSE_NOTHING) {
            throw Object.defineProperty(new Error("Illegal exposure level: " + exposureLevel), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        this.exposureLevel = exposureLevel;
    }

    public getExposeFields() : boolean {
        return this.exposeFields;
    }

    /**
     * See {link BeansWrapper#setExposeFields(boolean)}.
     * @param {boolean} exposeFields
     */
    public setExposeFields(exposeFields : boolean) {
        this.exposeFields = exposeFields;
    }

    public getTreatDefaultMethodsAsBeanMembers() : boolean {
        return this.treatDefaultMethodsAsBeanMembers;
    }

    public setTreatDefaultMethodsAsBeanMembers(treatDefaultMethodsAsBeanMembers : boolean) {
        this.treatDefaultMethodsAsBeanMembers = treatDefaultMethodsAsBeanMembers;
    }

    public getMethodAppearanceFineTuner() : MethodAppearanceFineTuner {
        return this.methodAppearanceFineTuner;
    }

    public setMethodAppearanceFineTuner(methodAppearanceFineTuner : MethodAppearanceFineTuner) {
        this.methodAppearanceFineTuner = methodAppearanceFineTuner;
    }

    public getMethodSorter() : MethodSorter {
        return this.methodSorter;
    }

    public setMethodSorter(methodSorter : MethodSorter) {
        this.methodSorter = methodSorter;
    }

    /*private*/ static removeClearedReferencesFromInstanceCache() {
        let clearedRef : Reference;
        while(((clearedRef = ClassIntrospectorBuilder.INSTANCE_CACHE_REF_QUEUE_$LI$().poll()) != null)) {
            {
                findClearedRef: for(let it : any = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>ClassIntrospectorBuilder.INSTANCE_CACHE_$LI$())); it.hasNext(); ) {
                    if(it.next() === clearedRef) {
                        it.remove();
                        break findClearedRef;
                    }
                };
            };
        };
    }

    /**
     * For unit testing only
     */
    static clearInstanceCache() {
        {
            /* clear */(<any>ClassIntrospectorBuilder.INSTANCE_CACHE_$LI$()).clear();
        };
    }

    /**
     * For unit testing only
     * @return {Map}
     */
    static getInstanceCache() : Map<any, any> {
        return ClassIntrospectorBuilder.INSTANCE_CACHE_$LI$();
    }

    /**
     * Returns an instance that is possibly shared (singleton). Note that this comes with its own "shared lock",
     * since everyone who uses this object will have to lock with that common object.
     * @return {ClassIntrospector}
     */
    build() : ClassIntrospector {
        if((this.methodAppearanceFineTuner == null || (this.methodAppearanceFineTuner != null && (this.methodAppearanceFineTuner["__interfaces"] != null && this.methodAppearanceFineTuner["__interfaces"].indexOf("freemarker.ext.beans.SingletonCustomizer") >= 0 || this.methodAppearanceFineTuner.constructor != null && this.methodAppearanceFineTuner.constructor["__interfaces"] != null && this.methodAppearanceFineTuner.constructor["__interfaces"].indexOf("freemarker.ext.beans.SingletonCustomizer") >= 0))) && (this.methodSorter == null || (this.methodSorter != null && (this.methodSorter["__interfaces"] != null && this.methodSorter["__interfaces"].indexOf("freemarker.ext.beans.SingletonCustomizer") >= 0 || this.methodSorter.constructor != null && this.methodSorter.constructor["__interfaces"] != null && this.methodSorter.constructor["__interfaces"].indexOf("freemarker.ext.beans.SingletonCustomizer") >= 0)))) {
            let instance : ClassIntrospector;
            {
                let instanceRef : Reference = <Reference>/* get */ClassIntrospectorBuilder.INSTANCE_CACHE_$LI$().get(this);
                instance = instanceRef != null?<ClassIntrospector>instanceRef.get():null;
                if(instance == null) {
                    let thisClone : ClassIntrospectorBuilder = <ClassIntrospectorBuilder>/* clone */((o:any) => { if(o.clone!=undefined) { return (<any>o).clone(); } else { let clone = Object.create(o); for(let p in o) { if (o.hasOwnProperty(p)) clone[p] = o[p]; } return clone; } })(this);
                    instance = new ClassIntrospector(thisClone, <any>new Object(), true, true);
                    /* put */ClassIntrospectorBuilder.INSTANCE_CACHE_$LI$().set(thisClone, instance);
                }
            };
            ClassIntrospectorBuilder.removeClearedReferencesFromInstanceCache();
            return instance;
        } else {
            return new ClassIntrospector(this, <any>new Object(), true, false);
        }
    }

    public isBugfixed() : boolean {
        return this.bugfixed;
    }
}
ClassIntrospectorBuilder["__class"] = "freemarker.ext.beans.ClassIntrospectorBuilder";
ClassIntrospectorBuilder["__interfaces"] = ["java.lang.Cloneable"];




var __Function = Function;

ClassIntrospectorBuilder.INSTANCE_CACHE_REF_QUEUE_$LI$();

ClassIntrospectorBuilder.INSTANCE_CACHE_$LI$();
