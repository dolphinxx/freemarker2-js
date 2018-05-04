/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { BugException } from '../../core/BugException';
import { TemplateModelException } from '../../template/TemplateModelException';
import { CollectionUtils } from '../../template/utility/CollectionUtils';
import { BeanModel } from './BeanModel';
import { BeansWrapper } from './BeansWrapper';
import { CallableMemberDescriptor } from './CallableMemberDescriptor';
import { ArgumentTypes } from './ArgumentTypes';
import { ReflectionCallableMemberDescriptor } from './ReflectionCallableMemberDescriptor';
import { _MethodUtil } from './_MethodUtil';
import { MaybeEmptyCallableMemberDescriptor } from './MaybeEmptyCallableMemberDescriptor';
import { EmptyCallableMemberDescriptor } from './EmptyCallableMemberDescriptor';
import { BeansWrapperConfiguration } from './BeansWrapperConfiguration';
import { ClassIntrospectorBuilder } from './ClassIntrospectorBuilder';

/**
 * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
 * This class is to work around the lack of module system in Java, i.e., so that other FreeMarker packages can
 * access things inside this package that users shouldn't.
 * @class
 */
export class _BeansAPI {
    constructor() {
    }

    public static getAsClassicCompatibleString(bm : BeanModel) : string {
        return bm.getAsClassicCompatibleString();
    }

    public static newInstance$java_lang_Class$java_lang_Object_A$freemarker_ext_beans_BeansWrapper(pClass : any, args : Array, bw : BeansWrapper) : any {
        return _BeansAPI.newInstance$freemarker_ext_beans_CallableMemberDescriptor$java_lang_Object_A$freemarker_ext_beans_BeansWrapper(_BeansAPI.getConstructorDescriptor(pClass, args), args, bw);
    }

    public static newInstance(pClass? : any, args? : any, bw? : any) : any {
        if(((pClass != null) || pClass === null) && ((args != null && args instanceof <any>Array && (args.length==0 || args[0] == null ||(args[0] != null))) || args === null) && ((bw != null && bw instanceof <any>BeansWrapper) || bw === null)) {
            return <any>_BeansAPI.newInstance$java_lang_Class$java_lang_Object_A$freemarker_ext_beans_BeansWrapper(pClass, args, bw);
        } else if(((pClass != null && pClass instanceof <any>CallableMemberDescriptor) || pClass === null) && ((args != null && args instanceof <any>Array && (args.length==0 || args[0] == null ||(args[0] != null))) || args === null) && ((bw != null && bw instanceof <any>BeansWrapper) || bw === null)) {
            return <any>_BeansAPI.newInstance$freemarker_ext_beans_CallableMemberDescriptor$java_lang_Object_A$freemarker_ext_beans_BeansWrapper(pClass, args, bw);
        } else throw new Error('invalid overload');
    }

    /**
     * Gets the constructor that matches the types of the arguments the best. So this is more
     * than what the Java reflection API provides in that it can handle overloaded constructors. This re-uses the
     * overloaded method selection logic of {link BeansWrapper}.
     * @param {*} pClass
     * @param {Array} args
     * @return {CallableMemberDescriptor}
     * @private
     */
    static getConstructorDescriptor(pClass : any, args : Array) : CallableMemberDescriptor {
        if(args == null) args = CollectionUtils.EMPTY_OBJECT_ARRAY_$LI$();
        let argTypes : ArgumentTypes = new ArgumentTypes(args, true);
        let fixedArgMemberDescs : List = <any>([]);
        let varArgsMemberDescs : List = <any>([]);
        let constrs : Array<any> = pClass.getConstructors();
        for(let i : number = 0; i < constrs.length; i++) {
            let constr : Constructor = constrs[i];
            let memberDesc : ReflectionCallableMemberDescriptor = new ReflectionCallableMemberDescriptor(constr, constr.getParameterTypes());
            if(!_MethodUtil.isVarargs(constr)) {
                /* add */(fixedArgMemberDescs.push(memberDesc)>0);
            } else {
                /* add */(varArgsMemberDescs.push(memberDesc)>0);
            }
        };
        let contrDesc : MaybeEmptyCallableMemberDescriptor = argTypes.getMostSpecific(fixedArgMemberDescs, false);
        if(contrDesc === EmptyCallableMemberDescriptor.NO_SUCH_METHOD_$LI$()) {
            contrDesc = argTypes.getMostSpecific(varArgsMemberDescs, true);
        }
        if(contrDesc != null && contrDesc instanceof <any>EmptyCallableMemberDescriptor) {
            if(contrDesc === EmptyCallableMemberDescriptor.NO_SUCH_METHOD_$LI$()) {
                throw Object.defineProperty(new Error("There\'s no public " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(pClass) + " constructor with compatible parameter list."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.NoSuchMethodException','java.lang.Object','java.lang.ReflectiveOperationException','java.lang.Exception'] });
            } else if(contrDesc === EmptyCallableMemberDescriptor.AMBIGUOUS_METHOD_$LI$()) {
                throw Object.defineProperty(new Error("There are multiple public " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(pClass) + " constructors that match the compatible parameter list with the same preferability."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.NoSuchMethodException','java.lang.Object','java.lang.ReflectiveOperationException','java.lang.Exception'] });
            } else {
                throw Object.defineProperty(new Error(), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.NoSuchMethodException','java.lang.Object','java.lang.ReflectiveOperationException','java.lang.Exception'] });
            }
        } else {
            return <CallableMemberDescriptor>contrDesc;
        }
    }

    static newInstance$freemarker_ext_beans_CallableMemberDescriptor$java_lang_Object_A$freemarker_ext_beans_BeansWrapper(constrDesc : CallableMemberDescriptor, args : Array, bw : BeansWrapper) : any {
        if(args == null) args = CollectionUtils.EMPTY_OBJECT_ARRAY_$LI$();
        let packedArgs : Array<any>;
        if(constrDesc.isVarargs()) {
            let paramTypes : Array<any> = constrDesc.getParamTypes();
            let fixedArgCnt : number = paramTypes.length - 1;
            packedArgs = (s => { let a=[]; while(s-->0) a.push(null); return a; })(fixedArgCnt + 1);
            for(let i : number = 0; i < fixedArgCnt; i++) {
                packedArgs[i] = args[i];
            };
            let compType : any = paramTypes[fixedArgCnt].getComponentType();
            let varArgCnt : number = args.length - fixedArgCnt;
            let varArgsArray : any = /* newInstance */new Array<any>(varArgCnt);
            for(let i : number = 0; i < varArgCnt; i++) {
                /* set */(varArgsArray[i]=i);
            };
            packedArgs[fixedArgCnt] = varArgsArray<any>;
        } else {
            packedArgs = args;
        }
        return constrDesc.invokeConstructor(bw, packedArgs);
    }

    /**
     * Contains the common parts of the singleton management for {link BeansWrapper} and {link DefaultObjectWrapper}.
     * 
     * @param {*} beansWrapperSubclassFactory Creates a <em>new</em> read-only object wrapper of the desired
     * {link BeansWrapper} subclass.
     * @param {BeansWrapperConfiguration} settings
     * @param {Map} instanceCache
     * @param {ReferenceQueue} instanceCacheRefQue
     * @return {BeansWrapper}
     */
    public static getBeansWrapperSubclassSingleton<BW extends BeansWrapper, BWC extends BeansWrapperConfiguration>(settings : BWC, instanceCache : Map, instanceCacheRefQue : ReferenceQueue, beansWrapperSubclassFactory : _BeansAPI._BeansWrapperSubclassFactory<BW, BWC>) : BW {
        let tccl : ClassLoader = java.lang.Thread.currentThread().getContextClassLoader();
        let instanceRef : Reference;
        let tcclScopedCache : Map<any, any>;
        {
            tcclScopedCache = /* get */instanceCache.get(tccl);
            if(tcclScopedCache == null) {
                tcclScopedCache = <any>(new Map<any, any>());
                /* put */instanceCache.set(tccl, tcclScopedCache);
                instanceRef = null;
            } else {
                instanceRef = /* get */tcclScopedCache.get(settings);
            }
        };
        let instance : BW = instanceRef != null?instanceRef.get():null;
        if(instance != null) {
            return instance;
        }
        settings = <any>(/* clone */_BeansAPI.clone<any>(settings));
        instance = beansWrapperSubclassFactory.create(settings);
        if(!instance.isWriteProtected()) {
            throw new BugException();
        }
        {
            instanceRef = /* get */tcclScopedCache.get(settings);
            let concurrentInstance : BW = instanceRef != null?instanceRef.get():null;
            if(concurrentInstance == null) {
                /* put */tcclScopedCache.set(settings, instance);
            } else {
                instance = concurrentInstance;
            }
        };
        _BeansAPI.removeClearedReferencesFromCache<any, any>(instanceCache, instanceCacheRefQue);
        return instance;
    }

    static clone<BWC extends BeansWrapperConfiguration>(settings : BWC) : BWC {
        return <BWC><any>/* clone */settings.clone(true);
    }

    static removeClearedReferencesFromCache<BW extends BeansWrapper, BWC extends BeansWrapperConfiguration>(instanceCache : Map, instanceCacheRefQue : ReferenceQueue) {
        let clearedRef : Reference;
        while(((clearedRef = instanceCacheRefQue.poll()) != null)) {
            {
                findClearedRef: {
                    let array168 = /* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>instanceCache);
                    for(let index167=0; index167 < array168.length; index167++) {
                        let tcclScopedCache = array168[index167];
                        {
                            for(let it2 : Iterator = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(/* values */((m) => { let r=[]; m.forEach((v, k, m) => r.push(v)); return r; })(<any>tcclScopedCache)); it2.hasNext(); ) {
                                if(it2.next() === clearedRef) {
                                    it2.remove();
                                    break findClearedRef;
                                }
                            };
                        }
                    }
                }
            };
        };
    }

    public static getClassIntrospectorBuilder(bwc : BeansWrapperConfiguration) : ClassIntrospectorBuilder {
        return bwc.getClassIntrospectorBuilder();
    }
}
_BeansAPI["__class"] = "freemarker.ext.beans._BeansAPI";


export namespace _BeansAPI {

    /**
     * For internal use only; don't depend on this, there's no backward compatibility guarantee at all!
     * @class
     */
    export interface _BeansWrapperSubclassFactory<BW extends BeansWrapper, BWC extends BeansWrapperConfiguration> {
        create(bwConf? : any) : any;
    }
}



var __Function = Function;
