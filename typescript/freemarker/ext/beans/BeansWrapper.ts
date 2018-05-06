/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {TemplateModel} from '../../template/TemplateModel';
import {RichObjectWrapper} from '../../template/utility/RichObjectWrapper';
import {WriteProtectable} from '../../template/utility/WriteProtectable';
import {Logger} from "../../log/Logger";
import {TemplateModelException} from "../../template/TemplateModelException";
import {ClassUtil} from "../../template/utility/ClassUtil";
import {System} from "../../../java/lang/System";

/**
 * Use {link BeansWrapperBuilder} instead of the public constructors if possible.
 * The main disadvantage of using the public constructors is that the instances won't share caches. So unless having
 * a private cache is your goal, don't use them. See
 * 
 * @param {Version} incompatibleImprovements Sets which of the non-backward-compatible improvements should be enabled. Not {@code null}. This version number
 * is the same as the FreeMarker version number with which the improvements were implemented.
 * 
 * <p>For new projects, it's recommended to set this to the FreeMarker version that's used during the development.
 * For released products that are still actively developed it's a low risk change to increase the 3rd
 * version number further as FreeMarker is updated, but of course you should always check the list of effects
 * below. Increasing the 2nd or 1st version number possibly mean substantial changes with higher risk of breaking
 * the application, but again, see the list of effects below.
 * 
 * <p>The reason it's separate from {link Configuration#setIncompatibleImprovements(Version)} is that
 * {link ObjectWrapper} objects are often shared among multiple {link Configuration}-s, so the two version
 * numbers are technically independent. But it's recommended to keep those two version numbers the same.
 * 
 * <p>The changes enabled by {@code incompatibleImprovements} are:
 * <ul>
 * <li>
 * <p>2.3.0: No changes; this is the starting point, the version used in older projects.
 * </li>
 * <li>
 * <p>2.3.21 (or higher):
 * Several glitches were fixed in <em>overloaded</em> method selection. This usually just gets
 * rid of errors (like ambiguity exceptions and numerical precision loses due to bad overloaded method
 * choices), still, as in some cases the method chosen can be a different one now (that was the point of
 * the reworking after all), it can mean a change in the behavior of the application. The most important
 * change is that the treatment of {@code null} arguments were fixed, as earlier they were only seen
 * applicable to parameters of type {@code Object}. Now {@code null}-s are seen to be applicable to any
 * non-primitive parameters, and among those the one with the most specific type will be preferred (just
 * like in Java), which is hence never the one with the {@code Object} parameter type. For more details
 * about overloaded method selection changes see the version history in the FreeMarker Manual.
 * </li>
 * <li>
 * <p>2.3.24 (or higher):
 * {link Iterator}-s were always said to be non-empty when using {@code ?has_content} and such (i.e.,
 * operators that check emptiness without reading any elements). Now an {link Iterator} counts as
 * empty exactly if it has no elements left. (Note that this bug has never affected basic functionality, like
 * {@code <#list ...>}.)
 * </li>
 * <li>
 * <p>2.3.26 (or higher):
 * The default of {link BeansWrapper#getTreatDefaultMethodsAsBeanMembers()} changes from {@code false} to
 * {@code true}. Thus, Java 8 default methods (and the bean properties they define) are exposed, despite that
 * {link java.beans.Introspector} (the official JavaBeans introspector) ignores them, at least as of Java 8.
 * </li>
 * <li>
 * <p>2.3.27 (or higher):
 * The default of the {link #setPreferIndexedReadMethod(boolean) preferIndexedReadMethod} setting changes
 * from {@code true} to {@code false}.
 * </li>
 * </ul>
 * 
 * <p>Note that the version will be normalized to the lowest version where the same incompatible
 * {link BeansWrapper} improvements were already present, so {link #getIncompatibleImprovements()} might returns
 * a lower version than what you have specified.
 * @since 2.3.21
 * @class
 */
export class BeansWrapper implements RichObjectWrapper, WriteProtectable {
    static LOG : Logger; public static LOG_$LI$() : Logger { if(BeansWrapper.LOG == null) BeansWrapper.LOG = Logger.getLogger("freemarker.beans"); return BeansWrapper.LOG; };

    /**
     * At this level of exposure, all methods and properties of the
     * wrapped objects are exposed to the template.
     */
    public static EXPOSE_ALL : number = 0;

    /**
     * At this level of exposure, all methods and properties of the wrapped
     * objects are exposed to the template except methods that are deemed
     * not safe. The not safe methods are java.lang.Object methods wait() and
     * notify(), java.lang.Class methods getClassLoader() and newInstance(),
     * java.lang.reflect.Method and java.lang.reflect.Constructor invoke() and
     * newInstance() methods, all java.lang.reflect.Field set methods, all
     * java.lang.Thread and java.lang.ThreadGroup methods that can change its
     * state, as well as the usual suspects in java.lang.System and
     * java.lang.Runtime.
     */
    public static EXPOSE_SAFE : number = 1;

    /**
     * At this level of exposure, only property getters are exposed.
     * Additionally, property getters that map to unsafe methods are not
     * exposed (i.e. Class.classLoader and Thread.contextClassLoader).
     */
    public static EXPOSE_PROPERTIES_ONLY : number = 2;

    /**
     * At this level of exposure, no bean properties and methods are exposed.
     * Only map items, resource bundle items, and objects retrieved through
     * the generic get method (on objects of classes that have a generic get
     * method) can be retrieved through the hash interface. You might want to
     * call {link #setMethodsShadowItems(boolean)} with <tt>false</tt> value to
     * speed up map item retrieval.
     */
    public static EXPOSE_NOTHING : number = 3;

    /*private*/ sharedIntrospectionLock : any;

    /**
     * {link Class} to class info cache.
     * This object is possibly shared with other {link BeansWrapper}-s!
     * 
     * <p>To write this, always use {link #replaceClassIntrospector(ClassIntrospectorBuilder)}.
     * 
     * <p>When reading this, it's good idea to synchronize on sharedInrospectionLock when it doesn't hurt overall
     * performance. In theory that's not needed, but apps might fail to keep the rules.
     */
    /*private*/ classIntrospector : any;

    /**
     * {link String} class name to {link StaticModel} cache.
     * This object only belongs to a single {link BeansWrapper}.
     * This has to be final as {link #getStaticModels()} might returns it any time and then it has to remain a good
     * reference.
     */
    /*private*/ staticModels : any;

    /**
     * {link String} class name to {link EnumerationModel} cache.
     * This object only belongs to a single {link BeansWrapper}.
     * This has to be final as {link #getStaticModels()} might returns it any time and then it has to remain a good
     * reference.
     */
    /*private*/ enumModels : any;

    /**
     * Object to wrapped object cache; not used by default.
     * This object only belongs to a single {link BeansWrapper}.
     */
    /*private*/ modelCache : any;

    /*private*/ falseModel : any;

    /*private*/ trueModel : any;

    /*private*/ writeProtected : boolean;

    /*private*/ nullModel : TemplateModel = null;

    /*private*/ defaultDateType : number;

    /*private*/ outerIdentity : any = this;

    /*private*/ methodsShadowItems : boolean = true;

    /*private*/ simpleMapWrapper : boolean;

    /*private*/ strict : boolean;

    /*private*/ preferIndexedReadMethod : boolean;

    /*private*/ incompatibleImprovements : any;

    static ftmaDeprecationWarnLogged : boolean = false;

    public constructor(bwConf? : any, writeProtected? : any, finalizeConstruction? : any) {
        // if(((bwConf != null && bwConf instanceof <any>BeansWrapperConfiguration) || bwConf === null) && ((typeof writeProtected === 'boolean') || writeProtected === null) && ((typeof finalizeConstruction === 'boolean') || finalizeConstruction === null)) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //     if(this.classIntrospector===undefined) this.classIntrospector = null;
        //     if(this.staticModels===undefined) this.staticModels = null;
        //     if(this.enumModels===undefined) this.enumModels = null;
        //     if(this.modelCache===undefined) this.modelCache = null;
        //     if(this.falseModel===undefined) this.falseModel = null;
        //     if(this.trueModel===undefined) this.trueModel = null;
        //     if(this.writeProtected===undefined) this.writeProtected = false;
        //     if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //     if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //     if(this.strict===undefined) this.strict = false;
        //     if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //     if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //     this.nullModel = null;
        //     this.outerIdentity = this;
        //     this.methodsShadowItems = true;
        //     this.BOOLEAN_FACTORY = new BeansWrapper.BeansWrapper$0(this);
        //     if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //     if(this.classIntrospector===undefined) this.classIntrospector = null;
        //     if(this.staticModels===undefined) this.staticModels = null;
        //     if(this.enumModels===undefined) this.enumModels = null;
        //     if(this.modelCache===undefined) this.modelCache = null;
        //     if(this.falseModel===undefined) this.falseModel = null;
        //     if(this.trueModel===undefined) this.trueModel = null;
        //     if(this.writeProtected===undefined) this.writeProtected = false;
        //     if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //     if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //     if(this.strict===undefined) this.strict = false;
        //     if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //     if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //     (() => {
        //         if(bwConf.getMethodAppearanceFineTuner() == null) {
        //             let thisClass : any = (<any>this.constructor);
        //             let overridden : boolean = false;
        //             let testFailed : boolean = false;
        //             try {
        //                 while((!overridden && thisClass !== DefaultObjectWrapper && thisClass !== BeansWrapper && thisClass !== SimpleObjectWrapper)) {
        //                     try {
        //                         /* getDeclaredMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })(thisClass,"finetuneMethodAppearance");
        //                         overridden = true;
        //                     } catch(e) {
        //                         thisClass = thisClass.getSuperclass();
        //                     };
        //                 };
        //             } catch(e) {
        //                 BeansWrapper.LOG_$LI$().info$java_lang_String$java_lang_Throwable("Failed to check if finetuneMethodAppearance is overidden in " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(thisClass) + "; acting like if it was, but this way it won\'t utilize the shared class introspection cache.", e);
        //                 overridden = true;
        //                 testFailed = true;
        //             };
        //             if(overridden) {
        //                 if(!testFailed && !BeansWrapper.ftmaDeprecationWarnLogged) {
        //                     BeansWrapper.LOG_$LI$().warn$java_lang_String("Overriding " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(BeansWrapper) + ".finetuneMethodAppearance is deprecated and will be banned sometimes in the future. Use setMethodAppearanceFineTuner instead.");
        //                     BeansWrapper.ftmaDeprecationWarnLogged = true;
        //                 }
        //                 bwConf = <BeansWrapperConfiguration>/* clone */bwConf.clone(false);
        //                 bwConf.setMethodAppearanceFineTuner(new BeansWrapper.BeansWrapper$1(this));
        //             }
        //         }
        //         this.incompatibleImprovements = bwConf.getIncompatibleImprovements();
        //         this.simpleMapWrapper = bwConf.isSimpleMapWrapper();
        //         this.preferIndexedReadMethod = bwConf.getPreferIndexedReadMethod();
        //         this.defaultDateType = bwConf.getDefaultDateType();
        //         this.outerIdentity = bwConf.getOuterIdentity() != null?bwConf.getOuterIdentity():this;
        //         this.strict = bwConf.isStrict();
        //         if(!writeProtected) {
        //             this.sharedIntrospectionLock = <any>new Object();
        //             this.classIntrospector = new ClassIntrospector(_BeansAPI.getClassIntrospectorBuilder(bwConf), this.sharedIntrospectionLock);
        //         } else {
        //             this.classIntrospector = _BeansAPI.getClassIntrospectorBuilder(bwConf).build();
        //             this.sharedIntrospectionLock = this.classIntrospector.getSharedLock();
        //         }
        //         this.falseModel = new BooleanModel(false, this);
        //         this.trueModel = new BooleanModel(true, this);
        //         this.staticModels = new StaticModels(this);
        //         this.enumModels = new _EnumModels(this);
        //         this.modelCache = new BeansModelCache(this);
        //         this.setUseCache(bwConf.getUseModelCache());
        //         this.finalizeConstruction(writeProtected);
        //     })();
        // } else if(((bwConf != null && bwConf instanceof <any>BeansWrapperConfiguration) || bwConf === null) && ((typeof writeProtected === 'boolean') || writeProtected === null) && finalizeConstruction === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let finalizeConstruction : any = true;
        //         if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //         if(this.classIntrospector===undefined) this.classIntrospector = null;
        //         if(this.staticModels===undefined) this.staticModels = null;
        //         if(this.enumModels===undefined) this.enumModels = null;
        //         if(this.modelCache===undefined) this.modelCache = null;
        //         if(this.falseModel===undefined) this.falseModel = null;
        //         if(this.trueModel===undefined) this.trueModel = null;
        //         if(this.writeProtected===undefined) this.writeProtected = false;
        //         if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //         if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //         if(this.strict===undefined) this.strict = false;
        //         if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //         if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //         this.nullModel = null;
        //         this.outerIdentity = this;
        //         this.methodsShadowItems = true;
        //         this.BOOLEAN_FACTORY = new BeansWrapper.BeansWrapper$0(this);
        //         if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //         if(this.classIntrospector===undefined) this.classIntrospector = null;
        //         if(this.staticModels===undefined) this.staticModels = null;
        //         if(this.enumModels===undefined) this.enumModels = null;
        //         if(this.modelCache===undefined) this.modelCache = null;
        //         if(this.falseModel===undefined) this.falseModel = null;
        //         if(this.trueModel===undefined) this.trueModel = null;
        //         if(this.writeProtected===undefined) this.writeProtected = false;
        //         if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //         if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //         if(this.strict===undefined) this.strict = false;
        //         if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //         if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //         (() => {
        //             if(bwConf.getMethodAppearanceFineTuner() == null) {
        //                 let thisClass : any = (<any>this.constructor);
        //                 let overridden : boolean = false;
        //                 let testFailed : boolean = false;
        //                 try {
        //                     while((!overridden && thisClass !== DefaultObjectWrapper && thisClass !== BeansWrapper && thisClass !== SimpleObjectWrapper)) {
        //                         try {
        //                             /* getDeclaredMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })(thisClass,"finetuneMethodAppearance");
        //                             overridden = true;
        //                         } catch(e) {
        //                             thisClass = thisClass.getSuperclass();
        //                         };
        //                     };
        //                 } catch(e) {
        //                     BeansWrapper.LOG_$LI$().info$java_lang_String$java_lang_Throwable("Failed to check if finetuneMethodAppearance is overidden in " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(thisClass) + "; acting like if it was, but this way it won\'t utilize the shared class introspection cache.", e);
        //                     overridden = true;
        //                     testFailed = true;
        //                 };
        //                 if(overridden) {
        //                     if(!testFailed && !BeansWrapper.ftmaDeprecationWarnLogged) {
        //                         BeansWrapper.LOG_$LI$().warn$java_lang_String("Overriding " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(BeansWrapper) + ".finetuneMethodAppearance is deprecated and will be banned sometimes in the future. Use setMethodAppearanceFineTuner instead.");
        //                         BeansWrapper.ftmaDeprecationWarnLogged = true;
        //                     }
        //                     bwConf = <BeansWrapperConfiguration>/* clone */bwConf.clone(false);
        //                     bwConf.setMethodAppearanceFineTuner(new BeansWrapper.BeansWrapper$1(this));
        //                 }
        //             }
        //             this.incompatibleImprovements = bwConf.getIncompatibleImprovements();
        //             this.simpleMapWrapper = bwConf.isSimpleMapWrapper();
        //             this.preferIndexedReadMethod = bwConf.getPreferIndexedReadMethod();
        //             this.defaultDateType = bwConf.getDefaultDateType();
        //             this.outerIdentity = bwConf.getOuterIdentity() != null?bwConf.getOuterIdentity():this;
        //             this.strict = bwConf.isStrict();
        //             if(!writeProtected) {
        //                 this.sharedIntrospectionLock = <any>new Object();
        //                 this.classIntrospector = new ClassIntrospector(_BeansAPI.getClassIntrospectorBuilder(bwConf), this.sharedIntrospectionLock);
        //             } else {
        //                 this.classIntrospector = _BeansAPI.getClassIntrospectorBuilder(bwConf).build();
        //                 this.sharedIntrospectionLock = this.classIntrospector.getSharedLock();
        //             }
        //             this.falseModel = new BooleanModel(false, this);
        //             this.trueModel = new BooleanModel(true, this);
        //             this.staticModels = new StaticModels(this);
        //             this.enumModels = new _EnumModels(this);
        //             this.modelCache = new BeansModelCache(this);
        //             this.setUseCache(bwConf.getUseModelCache());
        //             this.finalizeConstruction(writeProtected);
        //         })();
        //     }
        // } else if(((bwConf != null && bwConf instanceof <any>Version) || bwConf === null) && writeProtected === undefined && finalizeConstruction === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     let incompatibleImprovements : any = __args[0];
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let bwConf : any = new BeansWrapper.BeansWrapper$2(this, incompatibleImprovements);
        //         let writeProtected : any = false;
        //         {
        //             let __args = Array.prototype.slice.call(arguments);
        //             let finalizeConstruction : any = true;
        //             if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //             if(this.classIntrospector===undefined) this.classIntrospector = null;
        //             if(this.staticModels===undefined) this.staticModels = null;
        //             if(this.enumModels===undefined) this.enumModels = null;
        //             if(this.modelCache===undefined) this.modelCache = null;
        //             if(this.falseModel===undefined) this.falseModel = null;
        //             if(this.trueModel===undefined) this.trueModel = null;
        //             if(this.writeProtected===undefined) this.writeProtected = false;
        //             if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //             if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //             if(this.strict===undefined) this.strict = false;
        //             if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //             if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //             this.nullModel = null;
        //             this.outerIdentity = this;
        //             this.methodsShadowItems = true;
        //             this.BOOLEAN_FACTORY = new BeansWrapper.BeansWrapper$0(this);
        //             if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //             if(this.classIntrospector===undefined) this.classIntrospector = null;
        //             if(this.staticModels===undefined) this.staticModels = null;
        //             if(this.enumModels===undefined) this.enumModels = null;
        //             if(this.modelCache===undefined) this.modelCache = null;
        //             if(this.falseModel===undefined) this.falseModel = null;
        //             if(this.trueModel===undefined) this.trueModel = null;
        //             if(this.writeProtected===undefined) this.writeProtected = false;
        //             if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //             if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //             if(this.strict===undefined) this.strict = false;
        //             if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //             if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //             (() => {
        //                 if(bwConf.getMethodAppearanceFineTuner() == null) {
        //                     let thisClass : any = (<any>this.constructor);
        //                     let overridden : boolean = false;
        //                     let testFailed : boolean = false;
        //                     try {
        //                         while((!overridden && thisClass !== DefaultObjectWrapper && thisClass !== BeansWrapper && thisClass !== SimpleObjectWrapper)) {
        //                             try {
        //                                 /* getDeclaredMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })(thisClass,"finetuneMethodAppearance");
        //                                 overridden = true;
        //                             } catch(e) {
        //                                 thisClass = thisClass.getSuperclass();
        //                             };
        //                         };
        //                     } catch(e) {
        //                         BeansWrapper.LOG_$LI$().info$java_lang_String$java_lang_Throwable("Failed to check if finetuneMethodAppearance is overidden in " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(thisClass) + "; acting like if it was, but this way it won\'t utilize the shared class introspection cache.", e);
        //                         overridden = true;
        //                         testFailed = true;
        //                     };
        //                     if(overridden) {
        //                         if(!testFailed && !BeansWrapper.ftmaDeprecationWarnLogged) {
        //                             BeansWrapper.LOG_$LI$().warn$java_lang_String("Overriding " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(BeansWrapper) + ".finetuneMethodAppearance is deprecated and will be banned sometimes in the future. Use setMethodAppearanceFineTuner instead.");
        //                             BeansWrapper.ftmaDeprecationWarnLogged = true;
        //                         }
        //                         bwConf = <BeansWrapperConfiguration>/* clone */bwConf.clone(false);
        //                         bwConf.setMethodAppearanceFineTuner(new BeansWrapper.BeansWrapper$1(this));
        //                     }
        //                 }
        //                 this.incompatibleImprovements = bwConf.getIncompatibleImprovements();
        //                 this.simpleMapWrapper = bwConf.isSimpleMapWrapper();
        //                 this.preferIndexedReadMethod = bwConf.getPreferIndexedReadMethod();
        //                 this.defaultDateType = bwConf.getDefaultDateType();
        //                 this.outerIdentity = bwConf.getOuterIdentity() != null?bwConf.getOuterIdentity():this;
        //                 this.strict = bwConf.isStrict();
        //                 if(!writeProtected) {
        //                     this.sharedIntrospectionLock = <any>new Object();
        //                     this.classIntrospector = new ClassIntrospector(_BeansAPI.getClassIntrospectorBuilder(bwConf), this.sharedIntrospectionLock);
        //                 } else {
        //                     this.classIntrospector = _BeansAPI.getClassIntrospectorBuilder(bwConf).build();
        //                     this.sharedIntrospectionLock = this.classIntrospector.getSharedLock();
        //                 }
        //                 this.falseModel = new BooleanModel(false, this);
        //                 this.trueModel = new BooleanModel(true, this);
        //                 this.staticModels = new StaticModels(this);
        //                 this.enumModels = new _EnumModels(this);
        //                 this.modelCache = new BeansModelCache(this);
        //                 this.setUseCache(bwConf.getUseModelCache());
        //                 this.finalizeConstruction(writeProtected);
        //             })();
        //         }
        //     }
        // } else if(bwConf === undefined && writeProtected === undefined && finalizeConstruction === undefined) {
        //     let __args = Array.prototype.slice.call(arguments);
        //     {
        //         let __args = Array.prototype.slice.call(arguments);
        //         let incompatibleImprovements : any = Configuration.DEFAULT_INCOMPATIBLE_IMPROVEMENTS_$LI$();
        //         {
        //             let __args = Array.prototype.slice.call(arguments);
        //             let bwConf : any = new BeansWrapper.BeansWrapper$2(this, incompatibleImprovements);
        //             let writeProtected : any = false;
        //             {
        //                 let __args = Array.prototype.slice.call(arguments);
        //                 let finalizeConstruction : any = true;
        //                 if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //                 if(this.classIntrospector===undefined) this.classIntrospector = null;
        //                 if(this.staticModels===undefined) this.staticModels = null;
        //                 if(this.enumModels===undefined) this.enumModels = null;
        //                 if(this.modelCache===undefined) this.modelCache = null;
        //                 if(this.falseModel===undefined) this.falseModel = null;
        //                 if(this.trueModel===undefined) this.trueModel = null;
        //                 if(this.writeProtected===undefined) this.writeProtected = false;
        //                 if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //                 if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //                 if(this.strict===undefined) this.strict = false;
        //                 if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //                 if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //                 this.nullModel = null;
        //                 this.outerIdentity = this;
        //                 this.methodsShadowItems = true;
        //                 this.BOOLEAN_FACTORY = new BeansWrapper.BeansWrapper$0(this);
        //                 if(this.sharedIntrospectionLock===undefined) this.sharedIntrospectionLock = null;
        //                 if(this.classIntrospector===undefined) this.classIntrospector = null;
        //                 if(this.staticModels===undefined) this.staticModels = null;
        //                 if(this.enumModels===undefined) this.enumModels = null;
        //                 if(this.modelCache===undefined) this.modelCache = null;
        //                 if(this.falseModel===undefined) this.falseModel = null;
        //                 if(this.trueModel===undefined) this.trueModel = null;
        //                 if(this.writeProtected===undefined) this.writeProtected = false;
        //                 if(this.defaultDateType===undefined) this.defaultDateType = 0;
        //                 if(this.simpleMapWrapper===undefined) this.simpleMapWrapper = false;
        //                 if(this.strict===undefined) this.strict = false;
        //                 if(this.preferIndexedReadMethod===undefined) this.preferIndexedReadMethod = false;
        //                 if(this.incompatibleImprovements===undefined) this.incompatibleImprovements = null;
        //                 (() => {
        //                     if(bwConf.getMethodAppearanceFineTuner() == null) {
        //                         let thisClass : any = (<any>this.constructor);
        //                         let overridden : boolean = false;
        //                         let testFailed : boolean = false;
        //                         try {
        //                             while((!overridden && thisClass !== DefaultObjectWrapper && thisClass !== BeansWrapper && thisClass !== SimpleObjectWrapper)) {
        //                                 try {
        //                                     /* getDeclaredMethod */((c,p) => { if(c.prototype.hasOwnProperty(p) && typeof c.prototype[p] == 'function') return {owner:c,name:p,fn:c.prototype[p]}; else return null; })(thisClass,"finetuneMethodAppearance");
        //                                     overridden = true;
        //                                 } catch(e) {
        //                                     thisClass = thisClass.getSuperclass();
        //                                 };
        //                             };
        //                         } catch(e) {
        //                             BeansWrapper.LOG_$LI$().info$java_lang_String$java_lang_Throwable("Failed to check if finetuneMethodAppearance is overidden in " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(thisClass) + "; acting like if it was, but this way it won\'t utilize the shared class introspection cache.", e);
        //                             overridden = true;
        //                             testFailed = true;
        //                         };
        //                         if(overridden) {
        //                             if(!testFailed && !BeansWrapper.ftmaDeprecationWarnLogged) {
        //                                 BeansWrapper.LOG_$LI$().warn$java_lang_String("Overriding " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(BeansWrapper) + ".finetuneMethodAppearance is deprecated and will be banned sometimes in the future. Use setMethodAppearanceFineTuner instead.");
        //                                 BeansWrapper.ftmaDeprecationWarnLogged = true;
        //                             }
        //                             bwConf = <BeansWrapperConfiguration>/* clone */bwConf.clone(false);
        //                             bwConf.setMethodAppearanceFineTuner(new BeansWrapper.BeansWrapper$1(this));
        //                         }
        //                     }
        //                     this.incompatibleImprovements = bwConf.getIncompatibleImprovements();
        //                     this.simpleMapWrapper = bwConf.isSimpleMapWrapper();
        //                     this.preferIndexedReadMethod = bwConf.getPreferIndexedReadMethod();
        //                     this.defaultDateType = bwConf.getDefaultDateType();
        //                     this.outerIdentity = bwConf.getOuterIdentity() != null?bwConf.getOuterIdentity():this;
        //                     this.strict = bwConf.isStrict();
        //                     if(!writeProtected) {
        //                         this.sharedIntrospectionLock = <any>new Object();
        //                         this.classIntrospector = new ClassIntrospector(_BeansAPI.getClassIntrospectorBuilder(bwConf), this.sharedIntrospectionLock);
        //                     } else {
        //                         this.classIntrospector = _BeansAPI.getClassIntrospectorBuilder(bwConf).build();
        //                         this.sharedIntrospectionLock = this.classIntrospector.getSharedLock();
        //                     }
        //                     this.falseModel = new BooleanModel(false, this);
        //                     this.trueModel = new BooleanModel(true, this);
        //                     this.staticModels = new StaticModels(this);
        //                     this.enumModels = new _EnumModels(this);
        //                     this.modelCache = new BeansModelCache(this);
        //                     this.setUseCache(bwConf.getUseModelCache());
        //                     this.finalizeConstruction(writeProtected);
        //                 })();
        //             }
        //         }
        //     }
        // } else throw new Error('invalid overload');
    }

    /**
     * Meant to be called after {link BeansWrapper#BeansWrapper(BeansWrapperConfiguration, boolean, boolean)} when
     * its last argument was {@code false}; makes the instance read-only if necessary, then registers the model
     * factories in the class introspector. No further changes should be done after calling this, if
     * {@code writeProtected} was {@code true}.
     * 
     * @since 2.3.22
     * @param {boolean} writeProtected
     */
    finalizeConstruction(writeProtected : boolean) {
        if(writeProtected) {
            this.writeProtect();
        }
        this.registerModelFactories();
    }

    /**
     * Makes the configuration properties (settings) of this {link BeansWrapper} object read-only. As changing them
     * after the object has become visible to multiple threads leads to undefined behavior, it's recommended to call
     * this when you have finished configuring the object.
     * 
     * <p>Consider using {link BeansWrapperBuilder} instead, which gives an instance that's already
     * write protected and also uses some shared caches/pools.
     * 
     * @since 2.3.21
     */
    public writeProtect() {
        this.writeProtected = true;
    }

    /**
     * @since 2.3.21
     * @return {boolean}
     */
    public isWriteProtected() : boolean {
        return this.writeProtected;
    }

    getSharedIntrospectionLock() : any {
        return this.sharedIntrospectionLock;
    }

    /**
     * If this object is already read-only according to {link WriteProtectable}, throws {link IllegalStateException},
     * otherwise does nothing.
     * 
     * @since 2.3.21
     */
    checkModifiable() {
        // if(this.writeProtected) throw Object.defineProperty(new Error("Can\'t modify the " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>this.constructor)) + " object, as it was write protected."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.IllegalStateException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
    }

    /**
     * see #setStrict(boolean)
     * @return {boolean}
     */
    public isStrict() : boolean {
        return this.strict;
    }

    /**
     * Specifies if an attempt to read a bean property that doesn't exist in the
     * wrapped object should throw an {link InvalidPropertyException}.
     * 
     * <p>If this property is <tt>false</tt> (the default) then an attempt to read
     * a missing bean property is the same as reading an existing bean property whose
     * value is <tt>null</tt>. The template can't tell the difference, and thus always
     * can use <tt>?default('something')</tt> and <tt>?exists</tt> and similar built-ins
     * to handle the situation.
     * 
     * <p>If this property is <tt>true</tt> then an attempt to read a bean propertly in
     * the template (like <tt>myBean.aProperty</tt>) that doesn't exist in the bean
     * object (as opposed to just holding <tt>null</tt> value) will cause
     * {link InvalidPropertyException}, which can't be suppressed in the template
     * (not even with <tt>myBean.noSuchProperty?default('something')</tt>). This way
     * <tt>?default('something')</tt> and <tt>?exists</tt> and similar built-ins can be used to
     * handle existing properties whose value is <tt>null</tt>, without the risk of
     * hiding typos in the property names. Typos will always cause error. But mind you, it
     * goes against the basic approach of FreeMarker, so use this feature only if you really
     * know what you are doing.
     * @param {boolean} strict
     */
    public setStrict(strict : boolean) {
        this.checkModifiable();
        this.strict = strict;
    }

    /**
     * When wrapping an object, the BeansWrapper commonly needs to wrap
     * "sub-objects", for example each element in a wrapped collection.
     * Normally it wraps these objects using itself. However, this makes
     * it difficult to delegate to a BeansWrapper as part of a custom
     * aggregate ObjectWrapper. This method lets you set the ObjectWrapper
     * which will be used to wrap the sub-objects.
     * 
     * @param {*} outerIdentity the aggregate ObjectWrapper
     */
    public setOuterIdentity(outerIdentity : /*ObjectWrapper*/any) {
        this.checkModifiable();
        this.outerIdentity = outerIdentity;
    }

    /**
     * By default returns <tt>this</tt>.
     * see #setOuterIdentity(ObjectWrapper)
     * @return {*}
     */
    public getOuterIdentity() : /*ObjectWrapper*/any {
        return this.outerIdentity;
    }

    /**
     * When set to {@code true}, the keys in {link Map}-s won't mix with the method names when looking at them
     * from templates. The default is {@code false} for backward-compatibility, but is not recommended.
     * 
     * <p>When this is {@code false}, {@code myMap.foo} or {@code myMap['foo']} either returns the method {@code foo},
     * or calls {@code Map.get("foo")}. If both exists (the method and the {link Map} key), one will hide the other,
     * depending on the {link #isMethodsShadowItems()}, which default to {@code true} (the method
     * wins). Some frameworks use this so that you can call {@code myMap.get(nonStringKey)} from templates [*], but it
     * comes on the cost of polluting the key-set with the method names, and risking methods accidentally hiding
     * {link Map} entries (or the other way around). Thus, this setup is not recommended.
     * (Technical note: {link Map}-s will be wrapped into {link MapModel} in this case.)
     * 
     * <p>When this is {@code true}, {@code myMap.foo} or {@code myMap['foo']} always calls {@code Map.get("foo")}.
     * The methods of the {link Map} object aren't visible from templates in this case. This, however, spoils the
     * {@code myMap.get(nonStringKey)} workaround. But now you can use {@code myMap(nonStringKey)} instead, that is, you
     * can use the map itself as the {@code get} method.
     * (Technical note: {link Map}-s will be wrapped into {link SimpleMapModel} in this case.)
     * 
     * <p>*: For historical reasons, FreeMarker 2.3.X doesn't support non-string keys with the {@code []} operator,
     * hence the workarounds. This will be likely fixed in FreeMarker 2.4.0. Also note that the method- and
     * the "field"-namespaces aren't separate in FreeMarker, hence {@code myMap.get} can return the {@code get}
     * method.
     * @param {boolean} simpleMapWrapper
     */
    public setSimpleMapWrapper(simpleMapWrapper : boolean) {
        this.checkModifiable();
        this.simpleMapWrapper = simpleMapWrapper;
    }

    /**
     * Tells whether Maps are exposed as simple maps, without access to their
     * method. See {link #setSimpleMapWrapper(boolean)} for details.
     * 
     * @return {boolean} true if Maps are exposed as simple hashes, false if they're
     * exposed as full JavaBeans.
     */
    public isSimpleMapWrapper() : boolean {
        return this.simpleMapWrapper;
    }

    /**
     * Getter pair of {link #setPreferIndexedReadMethod(boolean)}
     * 
     * @since 2.3.27
     * @return {boolean}
     */
    public getPreferIndexedReadMethod() : boolean {
        return this.preferIndexedReadMethod;
    }

    /**
     * Sets if when a JavaBean property has both a normal read method (like {@code String[] getFoos()}) and an indexed
     * read method (like {@code String getFoos(int index)}), and the Java {link Introspector} exposes both (which only
     * happens since Java 8, apparently), which read method will be used when the property is accessed with the
     * shorthand syntax (like {@code myObj.foos}). Before {link #getIncompatibleImprovements() incompatibleImprovements}
     * 2.3.27 it defaults to {@code true} for backward compatibility (although it's actually less backward compatible if
     * you are just switching to Java 8; see later), but the recommended value and the default starting with
     * {link #getIncompatibleImprovements() incompatibleImprovements} 2.3.27 is {@code false}. This setting has no
     * effect on properties that only has normal read method, or only has indexed read method. In case a property has
     * both, using the indexed reader method is disadvantageous, as then FreeMarker can't tell what the highest allowed
     * index is, and so the property will be unlistable ({@code <#list foo as myObj.foos>} will fail).
     * <p>
     * <p>
     * Apparently, this setting only matters since Java 8, as before that {link Introspector} did not expose the
     * indexed reader method if there was also a normal reader method. As with Java 8 the behavior of
     * {link Introspector} has changed, some old templates started to break, as the property has suddenly become
     * unlistable (see earlier why). So setting this to {@code false} can be seen as a Java 8 compatibility fix.
     * 
     * @since 2.3.27
     * @param {boolean} preferIndexedReadMethod
     */
    public setPreferIndexedReadMethod(preferIndexedReadMethod : boolean) {
        this.checkModifiable();
        this.preferIndexedReadMethod = preferIndexedReadMethod;
    }

    /**
     * Sets the method exposure level. By default, set to <code>EXPOSE_SAFE</code>.
     * 
     * @param {number} exposureLevel can be any of the <code>EXPOSE_xxx</code>
     * constants.
     */
    public setExposureLevel(exposureLevel : number) {
        this.checkModifiable();
        if(this.classIntrospector.getExposureLevel() !== exposureLevel) {
            let builder : any = this.classIntrospector.createBuilder();
            builder.setExposureLevel(exposureLevel);
            this.replaceClassIntrospector(builder);
        }
    }

    /**
     * @since 2.3.21
     * @return {number}
     */
    public getExposureLevel() : number {
        return this.classIntrospector.getExposureLevel();
    }

    /**
     * Controls whether public instance fields of classes are exposed to
     * templates.
     * 
     * @param {boolean} exposeFields if set to true, public instance fields of classes
     * that do not have a property getter defined can be accessed directly by
     * their name. If there is a property getter for a property of the same
     * name as the field (i.e. getter "getFoo()" and field "foo"), then
     * referring to "foo" in template invokes the getter. If set to false, no
     * access to public instance fields of classes is given. Default is false.
     */
    public setExposeFields(exposeFields : boolean) {
        this.checkModifiable();
        if(this.classIntrospector.getExposeFields() !== exposeFields) {
            let builder : any = this.classIntrospector.createBuilder();
            builder.setExposeFields(exposeFields);
            this.replaceClassIntrospector(builder);
        }
    }

    /**
     * Controls whether Java 8 default methods that weren't overridden in a class will be recognized as bean property
     * accessors and/or bean actions, and thus will be visible from templates. (We expose bean properties and bean
     * actions, not methods in general.) Before {link #getIncompatibleImprovements incompatibleImprovements} 2.3.26
     * this defaults to {@code false} for backward compatibility. Starting with {link #getIncompatibleImprovements
     * incompatibleImprovements} 2.3.26 it defaults to {@code true}.
     * <p>
     * Some explanation: FreeMarker uses {link java.beans.Introspector} to discover the bean properties and actions of
     * classes, for maximum conformance to the JavaBeans specification. But for some reason (perhaps just a bug in the
     * Oracle/OpenJDK Java 8 implementation) that ignores the Java 8 default methods coming from the interfaces. When
     * this setting is {@code true}, we search for non-overridden default methods ourselves, and add them to the set of
     * discovered bean members.
     * 
     * @since 2.3.26
     * @param {boolean} treatDefaultMethodsAsBeanMembers
     */
    public setTreatDefaultMethodsAsBeanMembers(treatDefaultMethodsAsBeanMembers : boolean) {
        this.checkModifiable();
        if(this.classIntrospector.getTreatDefaultMethodsAsBeanMembers() !== treatDefaultMethodsAsBeanMembers) {
            let builder : any = this.classIntrospector.createBuilder();
            builder.setTreatDefaultMethodsAsBeanMembers(treatDefaultMethodsAsBeanMembers);
            this.replaceClassIntrospector(builder);
        }
    }

    /**
     * Returns whether exposure of public instance fields of classes is
     * enabled. See {link #setExposeFields(boolean)} for details.
     * 
     * @return {boolean} true if public instance fields are exposed, false otherwise.
     * @since 2.3.26
     */
    public isExposeFields() : boolean {
        return this.classIntrospector.getExposeFields();
    }

    /**
     * See {link #setTreatDefaultMethodsAsBeanMembers(boolean)}.
     * @return {boolean}
     */
    public getTreatDefaultMethodsAsBeanMembers() : boolean {
        return this.classIntrospector.getTreatDefaultMethodsAsBeanMembers();
    }

    public getMethodAppearanceFineTuner() : /*MethodAppearanceFineTuner*/any {
        return this.classIntrospector.getMethodAppearanceFineTuner();
    }

    /**
     * Used to tweak certain aspects of how methods appear in the data-model;
     * see {link MethodAppearanceFineTuner} for more.
     * @param {*} methodAppearanceFineTuner
     */
    public setMethodAppearanceFineTuner(methodAppearanceFineTuner : /*MethodAppearanceFineTuner*/any) {
        this.checkModifiable();
        if(this.classIntrospector.getMethodAppearanceFineTuner() !== methodAppearanceFineTuner) {
            let builder : any = this.classIntrospector.createBuilder();
            builder.setMethodAppearanceFineTuner(methodAppearanceFineTuner);
            this.replaceClassIntrospector(builder);
        }
    }

    getMethodSorter() : /*MethodSorter*/any {
        return this.classIntrospector.getMethodSorter();
    }

    setMethodSorter(methodSorter : /*MethodSorter*/any) {
        this.checkModifiable();
        if(this.classIntrospector.getMethodSorter() !== methodSorter) {
            let builder : /*ClassIntrospectorBuilder*/any = this.classIntrospector.createBuilder();
            builder.setMethodSorter(methodSorter);
            this.replaceClassIntrospector(builder);
        }
    }

    /**
     * Tells if this instance acts like if its class introspection cache is sharable with other {link BeansWrapper}-s.
     * A restricted cache denies certain too "antisocial" operations, like {link #clearClassIntrospecitonCache()}.
     * The value depends on how the instance
     * was created; with a public constructor (then this is {@code false}), or with {link BeansWrapperBuilder}
     * (then it's {@code true}). Note that in the last case it's possible that the introspection cache
     * will not be actually shared because there's no one to share with, but this will {@code true} even then.
     * 
     * @since 2.3.21
     * @return {boolean}
     */
    public isClassIntrospectionCacheRestricted() : boolean {
        return this.classIntrospector.getHasSharedInstanceRestrictons();
    }

    /**
     * Replaces the value of {link #classIntrospector}, but first it unregisters
     * the model factories in the old {link #classIntrospector}.
     * @param {ClassIntrospectorBuilder} builder
     * @private
     */
    replaceClassIntrospector(builder : /*ClassIntrospectorBuilder*/any) {
        // this.checkModifiable();
        // let newCI : ClassIntrospector = new ClassIntrospector(builder, this.sharedIntrospectionLock);
        // let oldCI : ClassIntrospector;
        // {
        //     oldCI = this.classIntrospector;
        //     if(oldCI != null) {
        //         if(this.staticModels != null) {
        //             oldCI.unregisterModelFactory$freemarker_ext_beans_ClassBasedModelFactory(this.staticModels);
        //             this.staticModels.clearCache();
        //         }
        //         if(this.enumModels != null) {
        //             oldCI.unregisterModelFactory$freemarker_ext_beans_ClassBasedModelFactory(this.enumModels);
        //             this.enumModels.clearCache();
        //         }
        //         if(this.modelCache != null) {
        //             oldCI.unregisterModelFactory$freemarker_ext_util_ModelCache(this.modelCache);
        //             this.modelCache.clearCache();
        //         }
        //         if(this.trueModel != null) {
        //             this.trueModel.clearMemberCache();
        //         }
        //         if(this.falseModel != null) {
        //             this.falseModel.clearMemberCache();
        //         }
        //     }
        //     this.classIntrospector = newCI;
        //     this.registerModelFactories();
        // };
        throw new Error();
    }

    registerModelFactories() {
        if(this.staticModels != null) {
            this.classIntrospector.registerModelFactory$freemarker_ext_beans_ClassBasedModelFactory(this.staticModels);
        }
        if(this.enumModels != null) {
            this.classIntrospector.registerModelFactory$freemarker_ext_beans_ClassBasedModelFactory(this.enumModels);
        }
        if(this.modelCache != null) {
            this.classIntrospector.registerModelFactory$freemarker_ext_util_ModelCache(this.modelCache);
        }
    }

    /**
     * Sets whether methods shadow items in beans. When true (this is the
     * default value), <code>${object.name}</code> will first try to locate
     * a bean method or property with the specified name on the object, and
     * only if it doesn't find it will it try to call
     * <code>object.get(name)</code>, the so-called "generic get method" that
     * is usually used to access items of a container (i.e. elements of a map).
     * When set to false, the lookup order is reversed and generic get method
     * is called first, and only if it returns null is method lookup attempted.
     * @param {boolean} methodsShadowItems
     */
    public setMethodsShadowItems(methodsShadowItems : boolean) {
        {
            this.checkModifiable();
            this.methodsShadowItems = methodsShadowItems;
        }
    }

    isMethodsShadowItems() : boolean {
        return this.methodsShadowItems;
    }

    /**
     * Sets the default date type to use for date models that result from
     * a plain <tt>java.util.Date</tt> instead of <tt>java.sql.Date</tt> or
     * <tt>java.sql.Time</tt> or <tt>java.sql.Timestamp</tt>. Default value is
     * {link TemplateDateModel#UNKNOWN}.
     * 
     * @param {number} defaultDateType the new default date type.
     */
    public setDefaultDateType(defaultDateType : number) {
        {
            this.checkModifiable();
            this.defaultDateType = defaultDateType;
        }
    }

    /**
     * Returns the default date type. See {link #setDefaultDateType(int)} for
     * details.
     * 
     * @return {number} the default date type
     */
    public getDefaultDateType() : number {
        return this.defaultDateType;
    }

    /**
     * Sets whether this wrapper caches the {link TemplateModel}-s created for the Java objects that has wrapped with
     * this object wrapper. Default is {@code false}.
     * When set to {@code true}, calling {link #wrap(Object)} multiple times for
     * the same object will likely return the same model (although there is
     * no guarantee as the cache items can be cleared any time).
     * @param {boolean} useCache
     */
    public setUseCache(useCache : boolean) {
        this.checkModifiable();
        this.modelCache.setUseCache(useCache);
    }

    /**
     * @since 2.3.21
     * @return {boolean}
     */
    public getUseCache() : boolean {
        return this.modelCache.getUseCache();
    }

    /**
     * Sets the null model. This model is returned from the {link #wrap(Object)} method whenever the wrapped object is
     * {@code null}. It defaults to {@code null}, which is dealt with quite strictly on engine level, however you can
     * substitute an arbitrary (perhaps more lenient) model, like an empty string. For proper working, the
     * {@code nullModel} should be an {link AdapterTemplateModel} that returns {@code null} for
     * {link AdapterTemplateModel#getAdaptedObject(Class)}.
     * 
     * @deprecated Changing the {@code null} model can cause a lot of confusion; don't do it.
     * @param {*} nullModel
     */
    public setNullModel(nullModel : TemplateModel) {
        this.checkModifiable();
        this.nullModel = nullModel;
    }

    /**
     * Returns the version given with {link #BeansWrapper(Version)}, normalized to the lowest version where a change
     * has occurred. Thus, this is not necessarily the same version than that was given to the constructor.
     * 
     * @since 2.3.21
     * @return {Version}
     */
    public getIncompatibleImprovements() : /*Version*/any {
        return this.incompatibleImprovements;
    }

    is2321Bugfixed() : boolean {
        return BeansWrapper.is2321Bugfixed(this.getIncompatibleImprovements());
    }

    static is2321Bugfixed(version : /*Version*/any) : boolean {
        return version.intValue() >= (require('../../template/_TemplateAPI')._TemplateAPI).VERSION_INT_2_3_21_$LI$();
    }

    is2324Bugfixed() : boolean {
        return BeansWrapper.is2324Bugfixed(this.getIncompatibleImprovements());
    }

    static is2324Bugfixed(version : /*Version*/any) : boolean {
        return version.intValue() >= (require('../../template/_TemplateAPI')._TemplateAPI).VERSION_INT_2_3_24_$LI$();
    }

    /**
     * Returns the lowest version number that is equivalent with the parameter version.
     * 
     * @since 2.3.21
     * @param {Version} incompatibleImprovements
     * @return {Version}
     */
    static normalizeIncompatibleImprovementsVersion(incompatibleImprovements : /*Version*/any) : /*Version*/any {
        const _TemplateAPI = require('../../template/_TemplateAPI')._TemplateAPI;
        const Configuration = require('../../template/Configuration').Configuration;
        _TemplateAPI.checkVersionNotNullAndSupported(incompatibleImprovements);
        if(incompatibleImprovements.intValue() < _TemplateAPI.VERSION_INT_2_3_0_$LI$()) {
            throw Object.defineProperty(new Error("Version must be at least 2.3.0."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        }
        return incompatibleImprovements.intValue() >= _TemplateAPI.VERSION_INT_2_3_27_$LI$()?(require('../../template/Configuration').Configuration).VERSION_2_3_27_$LI$():incompatibleImprovements.intValue() === _TemplateAPI.VERSION_INT_2_3_26_$LI$()?Configuration.VERSION_2_3_26_$LI$():BeansWrapper.is2324Bugfixed(incompatibleImprovements)?Configuration.VERSION_2_3_24_$LI$():BeansWrapper.is2321Bugfixed(incompatibleImprovements)?Configuration.VERSION_2_3_21_$LI$():Configuration.VERSION_2_3_0_$LI$();
    }

    /**
     * Returns the default instance of the wrapper. This instance is used
     * when you construct various bean models without explicitly specifying
     * a wrapper. It is also returned by
     * {link freemarker.template.ObjectWrapper#BEANS_WRAPPER}
     * and this is the sole instance that is used by the JSP adapter.
     * You can modify the properties of the default instance (caching,
     * exposure level, null model) to affect its operation. By default, the
     * default instance is not caching, uses the <code>EXPOSE_SAFE</code>
     * exposure level, and uses null reference as the null model.
     * 
     * @deprecated Use {link BeansWrapperBuilder} instead. The instance returned here is not read-only, so it's
     * dangerous to use.
     * @return {BeansWrapper}
     */
    public static getDefaultInstance() : BeansWrapper {
        return require("./BeansWrapperSingletonHolder").BeansWrapperSingletonHolder.INSTANCE_$LI$();
    }

    public wrap$java_lang_Object(object : any) : TemplateModel {
        if(object == null) return this.nullModel;
        return this.modelCache.getInstance(object);
    }

    public wrap$java_lang_Object$java_lang_reflect_Method(object : any, method : Function) : any/*TemplateMethodModelEx*/ {
        // return new SimpleMethodModel(object, method, method.getParameterTypes(), this);
        throw new Error();
    }

    /**
     * Wraps a Java method so that it can be called from templates, without wrapping its parent ("this") object. The
     * result is almost the same as that you would get by wrapping the parent object then getting the method from the
     * resulting {link TemplateHashModel} by name. Except, if the wrapped method is overloaded, with this method you
     * explicitly select an overload, while otherwise you would get a {link TemplateMethodModelEx} that selects an
     * overload each time it's called based on the argument values.
     * 
     * @param {Object} object The object whose method will be called, or {@code null} if {@code method} is a static method.
     * This object will be used "as is", like without unwrapping it if it's a {link TemplateModelAdapter}.
     * @param {Method} method The method to call, which must be an (inherited) member of the class of {@code object}, as
     * described by {link Method#invoke(Object, Object...)}
     * @since 2.3.22
     * @return {*}
     */
    public wrap(object? : any, method? : any) : any {
        // if(((object != null) || object === null) && ((method != null && (method instanceof Function)) || method === null)) {
        //     return <any>this.wrap$java_lang_Object$java_lang_reflect_Method(object, method);
        // } else if(((object != null) || object === null) && method === undefined) {
        //     return <any>this.wrap$java_lang_Object(object);
        // } else throw new Error('invalid overload');
        return object;
    }

    /**
     * @since 2.3.22
     * @param {Object} obj
     * @return {*}
     */
    public wrapAsAPI(obj : any) : /*TemplateHashModel*/any {
        return new (require('APIModel').APIModel)(obj, this);
    }

    /**
     * @param {Object} object  The object to wrap
     * @param {*} factory The factory that wraps the object
     * @deprecated override {link #getModelFactory(Class)} instead. Using this
     * method will now bypass wrapper caching (if it's enabled) and always
     * result in creation of a new wrapper. This method will be removed in 2.4
     * @return {*}
     */
    getInstance(object : any, factory : /*ModelFactory*/any) : TemplateModel {
        return factory.create(object, this);
    }

    // /*private*/ BOOLEAN_FACTORY : /*ModelFactory*/any = new BeansWrapper.BeansWrapper$0(this);

    // static ITERATOR_FACTORY : /*ModelFactory*/any; public static ITERATOR_FACTORY_$LI$() : /*ModelFactory*/any { if(BeansWrapper.ITERATOR_FACTORY == null) BeansWrapper.ITERATOR_FACTORY = new BeansWrapper.BeansWrapper$3(); return BeansWrapper.ITERATOR_FACTORY; };

    // static ENUMERATION_FACTORY : /*ModelFactory*/any; public static ENUMERATION_FACTORY_$LI$() : /*ModelFactory*/any { if(BeansWrapper.ENUMERATION_FACTORY == null) BeansWrapper.ENUMERATION_FACTORY = new BeansWrapper.BeansWrapper$4(); return BeansWrapper.ENUMERATION_FACTORY; };

    getModelFactory(clazz : any) : /*ModelFactory*/any {
    //     if("java.util.Map".isAssignableFrom(clazz)) {
    //         return this.simpleMapWrapper?SimpleMapModel.FACTORY_$LI$():MapModel.FACTORY_$LI$();
    //     }
    //     if("java.util.Collection".isAssignableFrom(clazz)) {
    //         return CollectionModel.FACTORY_$LI$();
    //     }
    //     if(Number.isAssignableFrom(clazz)) {
    //         return NumberModel.FACTORY_$LI$();
    //     }
    //     if(Date.isAssignableFrom(clazz)) {
    //         return DateModel.FACTORY_$LI$();
    //     }
    //     if(Boolean === clazz) {
    //         return this.BOOLEAN_FACTORY;
    //     }
    //     if(ResourceBundle.isAssignableFrom(clazz)) {
    //         return ResourceBundleModel.FACTORY_$LI$();
    //     }
    //     if("java.util.Iterator".isAssignableFrom(clazz)) {
    //         return BeansWrapper.ITERATOR_FACTORY_$LI$();
    //     }
    //     if("java.util.Enumeration".isAssignableFrom(clazz)) {
    //         return BeansWrapper.ENUMERATION_FACTORY_$LI$();
    //     }
    //     if(clazz.isArray()) {
    //         return ArrayModel.FACTORY_$LI$();
    //     }
    //     return StringModel.FACTORY_$LI$();
    throw new Error();
    }

    public unwrap$freemarker_template_TemplateModel(model : TemplateModel) : any {
        return this.unwrap$freemarker_template_TemplateModel$java_lang_Class(model, Object);
    }

    public unwrap$freemarker_template_TemplateModel$java_lang_Class(model : TemplateModel, targetClass : any) : any {
        // let obj : any = this.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(model, targetClass);
        // if(obj === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
        //     throw new TemplateModelException("Can not unwrap model of type " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>model.constructor)) + " to type " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(targetClass));
        // }
        // return obj;
        return model;
    }

    /**
     * Attempts to unwrap a model into an object of the desired class.
     * Generally, this method is the inverse of the {link #wrap(Object)}
     * method. It recognizes a wide range of target classes - all Java built-in
     * primitives, primitive wrappers, numbers, dates, sets, lists, maps, and
     * native arrays.
     * 
     * @param {*} model       the model to unwrap
     * @param {*} targetClass the class of the unwrapped result; {@code Object.class} of we don't know what the expected type is.
     * @return {Object} the unwrapped result of the desired class
     * @throws TemplateModelException if an attempted unwrapping fails.
     * <p>
     * see #tryUnwrapTo(TemplateModel, Class)
     */
    public unwrap(model? : any, targetClass? : any) : any {
        // if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((targetClass != null) || targetClass === null)) {
        //     return <any>this.unwrap$freemarker_template_TemplateModel$java_lang_Class(model, targetClass);
        // } else if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && targetClass === undefined) {
        //     return <any>this.unwrap$freemarker_template_TemplateModel(model);
        // } else throw new Error('invalid overload');
        return model;
    }

    public tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(model : TemplateModel, targetClass : any) : any {
        return this.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int(model, targetClass, 0);
    }

    tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int(model : TemplateModel, targetClass : any, typeFlags : number) : any {
        // let res : any = this.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int$java_util_Map(model, targetClass, typeFlags, null);
        // if((typeFlags & TypeFlags.WIDENED_NUMERICAL_UNWRAPPING_HINT) !== 0 && (typeof res === 'number')) {
        //     return OverloadedNumberUtil.addFallbackType(<number>res, typeFlags);
        // } else {
        //     return res;
        // }
        return model;
    }

    public tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int$java_util_Map(model : TemplateModel, targetClass : any, typeFlags : number, recursionStops : Map<any, any>) : any {
        // if(model == null || model === this.nullModel) {
        //     return null;
        // }
        // let is2321Bugfixed : boolean = this.is2321Bugfixed();
        // if(is2321Bugfixed && /* isPrimitive */(targetClass === <any>'__erasedPrimitiveType__')) {
        //     targetClass = ClassUtil.primitiveClassToBoxingClass(targetClass);
        // }
        // if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.AdapterTemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.AdapterTemplateModel") >= 0)) {
        //     let wrapped : any = (<AdapterTemplateModel><any>model).getAdaptedObject(targetClass);
        //     if(targetClass === Object || /* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(targetClass, wrapped)) {
        //         return wrapped;
        //     }
        //     if(targetClass !== Object && ((typeof wrapped === 'number') && ClassUtil.isNumerical(targetClass))) {
        //         let number : number = BeansWrapper.forceUnwrappedNumberToType(<number>wrapped, targetClass, is2321Bugfixed);
        //         if(number != null) return number;
        //     }
        // }
        // if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.ext.util.WrapperTemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.ext.util.WrapperTemplateModel") >= 0)) {
        //     let wrapped : any = (<WrapperTemplateModel><any>model).getWrappedObject();
        //     if(targetClass === Object || /* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(targetClass, wrapped)) {
        //         return wrapped;
        //     }
        //     if(targetClass !== Object && ((typeof wrapped === 'number') && ClassUtil.isNumerical(targetClass))) {
        //         let number : number = BeansWrapper.forceUnwrappedNumberToType(<number>wrapped, targetClass, is2321Bugfixed);
        //         if(number != null) {
        //             return number;
        //         }
        //     }
        // }
        // if(targetClass !== Object) {
        //     if(String === targetClass) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
        //             return (<TemplateScalarModel><any>model).getAsString();
        //         }
        //         return ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS;
        //     }
        //     if(ClassUtil.isNumerical(targetClass)) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0)) {
        //             let number : number = BeansWrapper.forceUnwrappedNumberToType((<TemplateNumberModel><any>model).getAsNumber(), targetClass, is2321Bugfixed);
        //             if(number != null) {
        //                 return number;
        //             }
        //         }
        //     }
        //     if(Boolean === targetClass || Boolean === targetClass) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) {
        //             return (<TemplateBooleanModel><any>model).getAsBoolean();
        //         }
        //         return ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS;
        //     }
        //     if("java.util.Map" === targetClass) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) {
        //             return (() => { let __o : any = new HashAdapter(<TemplateHashModel><any>model, this); __o.__delegate = new HashAdapter(<TemplateHashModel><any>model, this); return __o; })();
        //         }
        //     }
        //     if("java.util.List" === targetClass) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
        //             return (() => { let __o : any = new SequenceAdapter(<TemplateSequenceModel><any>model, this); __o.__delegate = <TemplateSequenceModel><any>model.slice(0); return __o; })();
        //         }
        //     }
        //     if("java.util.Set" === targetClass) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
        //             return new SetAdapter(<TemplateCollectionModel><any>model, this);
        //         }
        //     }
        //     if("java.util.Collection" === targetClass || "java.lang.Iterable" === targetClass) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) {
        //             return (() => { let __o : any = new CollectionAdapter(<TemplateCollectionModel><any>model, this); __o.__delegate = <TemplateCollectionModel><any>model.slice(0); return __o; })();
        //         }
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
        //             return (() => { let __o : any = new SequenceAdapter(<TemplateSequenceModel><any>model, this); __o.__delegate = <TemplateSequenceModel><any>model.slice(0); return __o; })();
        //         }
        //     }
        //     if(targetClass.isArray()) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
        //             return this.unwrapSequenceToArray(<TemplateSequenceModel><any>model, targetClass, true, recursionStops);
        //         }
        //         return ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS;
        //     }
        //     if(String === targetClass || targetClass === String) {
        //         if(model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) {
        //             let s : string = (<TemplateScalarModel><any>model).getAsString();
        //             if(s.length === 1) {
        //                 return s.charAt(0);
        //             }
        //         }
        //         return ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS;
        //     }
        //     if(Date.isAssignableFrom(targetClass) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0))) {
        //         let date : Date = (<TemplateDateModel><any>model).getAsDate();
        //         if(/* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(targetClass, date)) {
        //             return date;
        //         }
        //     }
        // }
        // let itf : number = typeFlags;
        // do {
        //     if((itf === 0 || (itf & TypeFlags.ACCEPTS_NUMBER) !== 0) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateNumberModel") >= 0))) {
        //         let number : number = (<TemplateNumberModel><any>model).getAsNumber();
        //         if(itf !== 0 || /* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(targetClass, number)) {
        //             return number;
        //         }
        //     }
        //     if((itf === 0 || (itf & TypeFlags.ACCEPTS_DATE) !== 0) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateDateModel") >= 0))) {
        //         let date : Date = (<TemplateDateModel><any>model).getAsDate();
        //         if(itf !== 0 || /* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(targetClass, date)) {
        //             return date;
        //         }
        //     }
        //     if((itf === 0 || (itf & (TypeFlags.ACCEPTS_STRING | TypeFlags.CHARACTER)) !== 0) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateScalarModel") >= 0)) && (itf !== 0 || targetClass.isAssignableFrom(String))) {
        //         let strVal : string = (<TemplateScalarModel><any>model).getAsString();
        //         if(itf === 0 || (itf & TypeFlags.CHARACTER) === 0) {
        //             return strVal;
        //         } else {
        //             if(strVal.length === 1) {
        //                 if((itf & TypeFlags.ACCEPTS_STRING) !== 0) {
        //                     return new CharacterOrString(strVal);
        //                 } else {
        //                     return strVal.charAt(0);
        //                 }
        //             } else if((itf & TypeFlags.ACCEPTS_STRING) !== 0) {
        //                 return strVal;
        //             }
        //         }
        //     }
        //     if((itf === 0 || (itf & TypeFlags.ACCEPTS_BOOLEAN) !== 0) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateBooleanModel") >= 0)) && (itf !== 0 || targetClass.isAssignableFrom(Boolean))) {
        //         return (<TemplateBooleanModel><any>model).getAsBoolean();
        //     }
        //     if((itf === 0 || (itf & TypeFlags.ACCEPTS_MAP) !== 0) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateHashModel") >= 0)) && (itf !== 0 || targetClass.isAssignableFrom(HashAdapter))) {
        //         return (() => { let __o : any = new HashAdapter(<TemplateHashModel><any>model, this); __o.__delegate = new HashAdapter(<TemplateHashModel><any>model, this); return __o; })();
        //     }
        //     if((itf === 0 || (itf & TypeFlags.ACCEPTS_LIST) !== 0) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) && (itf !== 0 || targetClass.isAssignableFrom(SequenceAdapter))) {
        //         return (() => { let __o : any = new SequenceAdapter(<TemplateSequenceModel><any>model, this); __o.__delegate = <TemplateSequenceModel><any>model.slice(0); return __o; })();
        //     }
        //     if((itf === 0 || (itf & TypeFlags.ACCEPTS_SET) !== 0) && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateCollectionModel") >= 0)) && (itf !== 0 || targetClass.isAssignableFrom(SetAdapter))) {
        //         return new SetAdapter(<TemplateCollectionModel><any>model, this);
        //     }
        //     if((itf & TypeFlags.ACCEPTS_ARRAY) !== 0 && (model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0))) {
        //         return (() => { let __o : any = new SequenceAdapter(<TemplateSequenceModel><any>model, this); __o.__delegate = <TemplateSequenceModel><any>model.slice(0); return __o; })();
        //     }
        //     if(itf === 0) {
        //         break;
        //     }
        //     itf = 0;
        // } while((true));
        // if(/* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(targetClass, model)) {
        //     return model;
        // }
        // return ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS;
        return model;
    }

    /**
     * See {link #tryUnwrapTo(TemplateModel, Class, int)}.
     * @param {*} model
     * @param {*} targetClass
     * @param {number} typeFlags
     * @param {Map} recursionStops
     * @return {Object}
     * @private
     */
    public tryUnwrapTo(model? : any, targetClass? : any, typeFlags? : any, recursionStops? : any) : any {
        // if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((targetClass != null) || targetClass === null) && ((typeof typeFlags === 'number') || typeFlags === null) && ((recursionStops != null && (recursionStops instanceof Map)) || recursionStops === null)) {
        //     return <any>this.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int$java_util_Map(model, targetClass, typeFlags, recursionStops);
        // } else if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((targetClass != null) || targetClass === null) && ((typeof typeFlags === 'number') || typeFlags === null) && recursionStops === undefined) {
        //     return <any>this.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int(model, targetClass, typeFlags);
        // } else if(((model != null && (model["__interfaces"] != null && model["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0 || model.constructor != null && model.constructor["__interfaces"] != null && model.constructor["__interfaces"].indexOf("freemarker.template.TemplateModel") >= 0)) || model === null) && ((targetClass != null) || targetClass === null) && typeFlags === undefined && recursionStops === undefined) {
        //     return <any>this.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class(model, targetClass);
        // } else throw new Error('invalid overload');
        return model;
    }

    /**
     * @param {boolean} tryOnly If {@code true}, if the conversion of an item to the component type isn't possible, the method returns
     * {link ObjectWrapperAndUnwrapper#CANT_UNWRAP_TO_TARGET_CLASS} instead of throwing a
     * {link TemplateModelException}.
     * @param {*} seq
     * @param {*} arrayClass
     * @param {Map} recursionStops
     * @return {Object}
     */
    unwrapSequenceToArray(seq : /*TemplateSequenceModel*/ any, arrayClass : any, tryOnly : boolean, recursionStops : Map<any, any>) : any {
        // if(recursionStops != null) {
        //     let retval : any = /* get */recursionStops.get(seq);
        //     if(retval != null) {
        //         return retval;
        //     }
        // } else {
        //     recursionStops = <any>(new IdentityHashMap<any, any>());
        // }
        // let componentType : any = arrayClass.getComponentType();
        // let size : number = seq.size();
        // let array : any = /* newInstance */new Array<any>(size);
        // /* put */recursionStops.set(seq, array);
        // try {
        //     for(let i : number = 0; i < size; i++) {
        //         let seqItem : TemplateModel = seq['get$int'](i);
        //         let val : any = this.tryUnwrapTo$freemarker_template_TemplateModel$java_lang_Class$int$java_util_Map(seqItem, componentType, 0, recursionStops);
        //         if(val === ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS) {
        //             if(tryOnly) {
        //                 return ObjectWrapperAndUnwrapper.CANT_UNWRAP_TO_TARGET_CLASS;
        //             } else {
        //                 throw new _TemplateModelException("Failed to convert ", new _DelayedFTLTypeDescription(seq), " object to ", new _DelayedShortClassName((<any>array.constructor)), ": Problematic sequence item at index ", i, " with value type: ", new _DelayedFTLTypeDescription(seqItem));
        //             }
        //         }
        //         /* set */(array[i]=i);
        //     };
        // } finally {
        //     /* remove */recursionStops.delete(seq);
        // };
        // return array;
        return seq;
    }

    listToArray(list : any, arrayClass : any, recursionStops : Map<any, any>) : any {
        // if(list != null && list instanceof <any>SequenceAdapter) {
        //     return this.unwrapSequenceToArray((<SequenceAdapter><any>list).getTemplateSequenceModel(), arrayClass, false, recursionStops);
        // }
        // if(recursionStops != null) {
        //     let retval : any = /* get */recursionStops.get(list);
        //     if(retval != null) {
        //         return retval;
        //     }
        // } else {
        //     recursionStops = <any>(new IdentityHashMap());
        // }
        // let componentType : any = arrayClass.getComponentType();
        // let array : any = /* newInstance */new Array<any>(/* size */(<number>list.length));
        // /* put */recursionStops.set(list, array);
        // try {
        //     let isComponentTypeExamined : boolean = false;
        //     let isComponentTypeNumerical : boolean = false;
        //     let isComponentTypeList : boolean = false;
        //     let i : number = 0;
        //     for(let it : Iterator = /* iterator */((a) => { var i = 0; return { next: function() { return i<a.length?a[i++]:null; }, hasNext: function() { return i<a.length; }}})(list); it.hasNext(); ) {
        //         let listItem : any = it.next();
        //         if(listItem != null && !/* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(componentType, listItem)) {
        //             if(!isComponentTypeExamined) {
        //                 isComponentTypeNumerical = ClassUtil.isNumerical(componentType);
        //                 isComponentTypeList = "java.util.List".isAssignableFrom(componentType);
        //                 isComponentTypeExamined = true;
        //             }
        //             if(isComponentTypeNumerical && (typeof listItem === 'number')) {
        //                 listItem = BeansWrapper.forceUnwrappedNumberToType(<number>listItem, componentType, true);
        //             } else if(componentType === String && (typeof listItem === 'string')) {
        //                 listItem = /* valueOf */listItem;
        //             } else if((componentType === String || componentType === String) && (typeof listItem === 'string')) {
        //                 let listItemStr : string = <string>listItem;
        //                 if(listItemStr.length === 1) {
        //                     listItem = listItemStr.charAt(0);
        //                 }
        //             } else if(componentType.isArray()) {
        //                 if(listItem != null && (listItem instanceof Array)) {
        //                     listItem = this.listToArray(<List><any>listItem, componentType, recursionStops);
        //                 } else if(listItem != null && (listItem["__interfaces"] != null && listItem["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0 || listItem.constructor != null && listItem.constructor["__interfaces"] != null && listItem.constructor["__interfaces"].indexOf("freemarker.template.TemplateSequenceModel") >= 0)) {
        //                     listItem = this.unwrapSequenceToArray(<TemplateSequenceModel><any>listItem, componentType, false, recursionStops);
        //                 }
        //             } else if(isComponentTypeList && (<any>listItem.constructor).isArray()) {
        //                 listItem = this.arrayToList(listItem);
        //             }
        //         }
        //         try {
        //             /* set */(array[i]=i);
        //         } catch(e) {
        //             throw new TemplateModelException("Failed to convert " + ClassUtil.getShortClassNameOfObject(list) + " object to " + ClassUtil.getShortClassNameOfObject(array) + ": Problematic List item at index " + i + " with value type: " + ClassUtil.getShortClassNameOfObject(listItem), e);
        //         };
        //         i++;
        //     };
        // } finally {
        //     /* remove */recursionStops.delete(list);
        // };
        // return array;
        return list;
    }

    /**
     * @param {Object} array Must be an array (of either a reference or primitive type)
     * @return {List}
     */
    arrayToList(array : any) : any {
        // if(array != null && array instanceof <any>Array && (array.length==0 || array[0] == null ||array[0] != null)) {
        //     let objArray : Array<any> = <Array>array;
        //     return objArray.length === 0?Collections.EMPTY_LIST:(() => { let __o : any = new NonPrimitiveArrayBackedReadOnlyList(objArray); __o.__delegate = objArray.slice(0); return __o; })();
        // } else {
        //     return /* getLength */array.length === 0?Collections.EMPTY_LIST:(() => { let __o : any = new PrimtiveArrayBackedReadOnlyList(array); __o.__delegate = array.slice(0); return __o; })();
        // }
        return array;
    }

    /**
     * Converts a number to the target type aggressively (possibly with overflow or significant loss of precision).
     * 
     * @param {Number} n Non-{@code null}
     * @return {Number} {@code null} if the conversion has failed.
     * @param {*} targetType
     * @param {boolean} bugfixed
     */
    static forceUnwrappedNumberToType(n : number, targetType : any, bugfixed : boolean) : number {
        // if(targetType === (<any>n.constructor)) {
        //     return n;
        // } else if(targetType === Number || targetType === Number) {
        //     return (typeof n === 'number')?<number>n:/* intValue */(n|0);
        // } else if(targetType === Number || targetType === Number) {
        //     return (typeof n === 'number')?<number>n:/* longValue */n;
        // } else if(targetType === Number || targetType === Number) {
        //     return (typeof n === 'number')?<number>n:/* doubleValue */n;
        // } else if(targetType === BigDecimal) {
        //     if(n != null && n instanceof <any>BigDecimal) {
        //         return n;
        //     } else if(n != null && n instanceof <any>BigInteger) {
        //         return new BigDecimal(<BigInteger>n);
        //     } else if(typeof n === 'number') {
        //         return BigDecimal.valueOf(/* longValue */n);
        //     } else {
        //         return new BigDecimal(/* doubleValue */n);
        //     }
        // } else if(targetType === Number || targetType === Number) {
        //     return (typeof n === 'number')?<number>n:/* floatValue */n;
        // } else if(targetType === Number || targetType === Number) {
        //     return (typeof n === 'number')?<number>n:/* byteValue */(n|0);
        // } else if(targetType === Number || targetType === Number) {
        //     return (typeof n === 'number')?<number>n:/* shortValue */(n|0);
        // } else if(targetType === BigInteger) {
        //     if(n != null && n instanceof <any>BigInteger) {
        //         return n;
        //     } else if(bugfixed) {
        //         if(n != null && n instanceof <any>OverloadedNumberUtil.IntegerBigDecimal) {
        //             return (<OverloadedNumberUtil.IntegerBigDecimal>n).bigIntegerValue();
        //         } else if(n != null && n instanceof <any>BigDecimal) {
        //             return (<BigDecimal>n).toBigInteger();
        //         } else {
        //             return BigInteger.valueOf(/* longValue */n);
        //         }
        //     } else {
        //         return new BigInteger(n.toString());
        //     }
        // } else {
        //     let oriN : number = (n != null && n instanceof <any>OverloadedNumberUtil.NumberWithFallbackType)?(<OverloadedNumberUtil.NumberWithFallbackType>n).getSourceNumber():n;
        //     if(/* isInstance */((c:any,o:any) => { if(typeof c === 'string') return (o.constructor && o.constructor["__interfaces"] && o.constructor["__interfaces"].indexOf(c) >= 0) || (o["__interfaces"] && o["__interfaces"].indexOf(c) >= 0); else if(typeof c === 'function') return (o instanceof c) || (o.constructor && o.constructor === c); })(targetType, oriN)) {
        //         return oriN;
        //     } else {
        //         return null;
        //     }
        // }
        return n;
    }

    /**
     * Invokes the specified method, wrapping the return value. The specialty
     * of this method is that if the return value is null, and the return type
     * of the invoked method is void, {link TemplateModel#NOTHING} is returned.
     * 
     * @param {Object} object the object to invoke the method on
     * @param {Method} method the method to invoke
     * @param {Array} args   the arguments to the method
     * @return {*} the wrapped return value of the method.
     * @throws InvocationTargetException if the invoked method threw an exception
     * @throws IllegalAccessException    if the method can't be invoked due to an
     * access restriction.
     * @throws TemplateModelException    if the return value couldn't be wrapped
     * (this can happen if the wrapper has an outer identity or is subclassed,
     * and the outer identity or the subclass throws an exception. Plain
     * BeansWrapper never throws TemplateModelException).
     */
    invokeMethod(object : any, method : Function, args : Array<any>) : TemplateModel {
        let retval : any = /* invoke */method.apply(object, [args]);
        return retval === undefined?TemplateModel.NOTHING:this.getOuterIdentity()['wrap$java_lang_Object'](retval);
    }

    /**
     * Returns a hash model that represents the so-called class static models.
     * Every class static model is itself a hash through which you can call
     * static methods on the specified class. To obtain a static model for a
     * class, get the element of this hash with the fully qualified class name.
     * For example, if you place this hash model inside the root data model
     * under name "statics", you can use i.e. <code>statics["java.lang.
     * System"]. currentTimeMillis()</code> to call the {link
     * java.lang.System#currentTimeMillis()} method.
     * 
     * @return {*} a hash model whose keys are fully qualified class names, and
     * that returns hash models whose elements are the static models of the
     * classes.
     */
    public getStaticModels() : any {
        return this.staticModels;
    }

    /**
     * Returns a hash model that represents the so-called class enum models.
     * Every class' enum model is itself a hash through which you can access
     * enum value declared by the specified class, assuming that class is an
     * enumeration. To obtain an enum model for a class, get the element of this
     * hash with the fully qualified class name. For example, if you place this
     * hash model inside the root data model under name "enums", you can use
     * i.e. <code>enums["java.math.RoundingMode"].UP</code> to access the
     * {link java.math.RoundingMode#UP} value.
     * 
     * @return {*} a hash model whose keys are fully qualified class names, and
     * that returns hash models whose elements are the enum models of the
     * classes.
     * @throws UnsupportedOperationException if this method is invoked on a
     * pre-1.5 JRE, as Java enums aren't supported there.
     */
    public getEnumModels() : any {
        if(this.enumModels == null) {
            throw Object.defineProperty(new Error("Enums not supported before J2SE 5."), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.UnsupportedOperationException','java.lang.Object','java.lang.RuntimeException','java.lang.Exception'] });
        }
        return this.enumModels;
    }

    /**
     * For Unit tests only
     * @return {ModelCache}
     */
    getModelCache() : any {
        return this.modelCache;
    }

    /**
     * Creates a new instance of the specified class using the method call logic of this object wrapper for calling the
     * constructor. Overloaded constructors and varargs are supported. Only public constructors will be called.
     * 
     * @param {*} clazz     The class whose constructor we will call.
     * @param {List} arguments The list of {link TemplateModel}-s to pass to the constructor after unwrapping them
     * @return {Object} The instance created; it's not wrapped into {link TemplateModel}.
     */
    public newInstance(clazz : any, __arguments : Array<any>) : any {
        // try {
        //     let ctors : any = /* get */this.classIntrospector.get(clazz).get(ClassIntrospector.CONSTRUCTORS_KEY_$LI$());
        //     if(ctors == null) {
        //         throw new TemplateModelException("Class " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz) + " has no public constructors.");
        //     }
        //     let ctor : Constructor = null;
        //     let objargs : Array<any>;
        //     if(ctors != null && ctors instanceof <any>SimpleMethod) {
        //         let sm : SimpleMethod = <SimpleMethod>ctors;
        //         ctor = <Constructor><any>sm.getMember();
        //         objargs = sm.unwrapArguments$java_util_List$freemarker_ext_beans_BeansWrapper(__arguments, this);
        //         try {
        //             return (o => o.newInstance.apply(o, objargs))(ctor);
        //         } catch(e) {
        //             if(e != null && e instanceof <any>TemplateModelException) throw <TemplateModelException>e;
        //             throw _MethodUtil.newInvocationTemplateModelException$java_lang_Object$java_lang_reflect_Member$java_lang_Throwable(null, ctor, e);
        //         };
        //     } else if(ctors != null && ctors instanceof <any>OverloadedMethods) {
        //         let mma : MemberAndArguments = (<OverloadedMethods>ctors).getMemberAndArguments(__arguments, this);
        //         try {
        //             return mma.invokeConstructor(this);
        //         } catch(e) {
        //             if(e != null && e instanceof <any>TemplateModelException) throw <TemplateModelException>e;
        //             throw _MethodUtil.newInvocationTemplateModelException$java_lang_Object$freemarker_ext_beans_CallableMemberDescriptor$java_lang_Throwable(null, mma.getCallableMemberDescriptor(), e);
        //         };
        //     } else {
        //         throw new BugException();
        //     }
        // } catch(__e) {
        //     if(__e != null && __e instanceof <any>TemplateModelException) {
        //         let e : TemplateModelException = <TemplateModelException>__e;
        //         throw e;
        //
        //     }
        //     if(__e != null && (__e["__classes"] && __e["__classes"].indexOf("java.lang.Exception") >= 0) || __e != null && __e instanceof <any>Error) {
        //         let e : Error = <Error>__e;
        //         throw new TemplateModelException("Error while creating new instance of class " + /* getName */(c => c["__class"]?c["__class"]:c["name"])(clazz) + "; see cause exception", e);
        //
        //     }
        // };
        throw new Error();
    }

    /**
     * Removes the introspection data for a class from the cache.
     * Use this if you know that a class is not used anymore in templates.
     * If the class will be still used, the cache entry will be silently
     * re-created, so this isn't a dangerous operation.
     * 
     * @since 2.3.20
     * @param {*} clazz
     */
    public removeFromClassIntrospectionCache(clazz : any) {
        this.classIntrospector.remove(clazz);
    }

    /**
     * Removes all class introspection data from the cache.
     * 
     * <p>Use this if you want to free up memory on the expense of recreating
     * the cache entries for the classes that will be used later in templates.
     * 
     * @throws IllegalStateException if {link #isClassIntrospectionCacheRestricted()} is {@code true}.
     * @since 2.3.20
     */
    public clearClassIntrospecitonCache() {
        this.classIntrospector.clearCache();
    }

    getClassIntrospector() : /*ClassIntrospector*/any {
        return this.classIntrospector;
    }

    /**
     * @deprecated Use {link #setMethodAppearanceFineTuner(MethodAppearanceFineTuner)};
     * no need to extend this class anymore.
     * Soon this method will be final, so trying to override it will break your app.
     * Note that if the {@code methodAppearanceFineTuner} property is set to non-{@code null}, this method is not
     * called anymore.
     * @param {*} clazz
     * @param {Method} m
     * @param {BeansWrapper.MethodAppearanceDecision} decision
     */
    finetuneMethodAppearance(clazz : any, m : Function, decision : /*BeansWrapper.MethodAppearanceDecision*/ any) {
    }

    public static coerceBigDecimals$java_lang_reflect_AccessibleObject$java_lang_Object_A(callable : any, args : Array<any>) {
        // let formalTypes : Array<any> = null;
        // for(let i : number = 0; i < args.length; ++i) {
        //     let arg : any = args[i];
        //     if(arg != null && arg instanceof <any>BigDecimal) {
        //         if(formalTypes == null) {
        //             if(callable != null && (callable instanceof Function)) {
        //                 formalTypes = (<Function>callable).getParameterTypes();
        //             } else if(callable != null && callable instanceof <any>Constructor) {
        //                 formalTypes = (<Constructor>callable).getParameterTypes();
        //             } else {
        //                 throw Object.defineProperty(new Error("Expected method or  constructor; callable is " + /* getName */(c => c["__class"]?c["__class"]:c["name"])((<any>callable.constructor))), '__classes', { configurable: true, value: ['java.lang.Throwable','java.lang.Object','java.lang.RuntimeException','java.lang.IllegalArgumentException','java.lang.Exception'] });
        //             }
        //         }
        //         args[i] = BeansWrapper.coerceBigDecimal(<BigDecimal>arg, formalTypes[i]);
        //     }
        // };
        throw new Error();
    }

    /**
     * Converts any {link BigDecimal}s in the passed array to the type of
     * the corresponding formal argument of the method.
     * @param {AccessibleObject} callable
     * @param {Array} args
     */
    public static coerceBigDecimals(callable : any, args : any) : any {
        // if(((callable != null && callable instanceof <any>AccessibleObject) || callable === null) && ((args != null && args instanceof <any>Array && (args.length==0 || args[0] == null ||(args[0] != null))) || args === null)) {
        //     return <any>BeansWrapper.coerceBigDecimals$java_lang_reflect_AccessibleObject$java_lang_Object_A(callable, args);
        // } else if(((callable != null && callable instanceof <any>Array && (callable.length==0 || callable[0] == null ||(callable[0] != null))) || callable === null) && ((args != null && args instanceof <any>Array && (args.length==0 || args[0] == null ||(args[0] != null))) || args === null)) {
        //     return <any>BeansWrapper.coerceBigDecimals$java_lang_Class_A$java_lang_Object_A(callable, args);
        // } else throw new Error('invalid overload');
        return args;
    }

    public static coerceBigDecimals$java_lang_Class_A$java_lang_Object_A(formalTypes : Array<any>, args : Array<any>) {
        // let typeLen : number = formalTypes.length;
        // let argsLen : number = args.length;
        // let min : number = Math.min(typeLen, argsLen);
        // for(let i : number = 0; i < min; ++i) {
        //     let arg : any = args[i];
        //     if(arg != null && arg instanceof <any>BigDecimal) {
        //         args[i] = BeansWrapper.coerceBigDecimal(<BigDecimal>arg, formalTypes[i]);
        //     }
        // };
        // if(argsLen > typeLen) {
        //     let varArgType : any = formalTypes[typeLen - 1];
        //     for(let i : number = typeLen; i < argsLen; ++i) {
        //         let arg : any = args[i];
        //         if(arg != null && arg instanceof <any>BigDecimal) {
        //             args[i] = BeansWrapper.coerceBigDecimal(<BigDecimal>arg, varArgType);
        //         }
        //     };
        // }
        return args;
    }

    /**
     * Converts {link BigDecimal} to the class given in the {@code formalType} argument if that's a known numerical
     * type, returns the {link BigDecimal} as is otherwise. Overflow and precision loss are possible, similarly as
     * with casting in Java.
     * @param {BigDecimal} bd
     * @param {*} formalType
     * @return {Object}
     */
    public static coerceBigDecimal(bd : number, formalType : any) : any {
        return bd;
        // if(formalType === Number || formalType === Number) {
        //     return bd.intValue();
        // } else if(formalType === Number || formalType === Number) {
        //     return bd.doubleValue();
        // } else if(formalType === Number || formalType === Number) {
        //     return bd.longValue();
        // } else if(formalType === Number || formalType === Number) {
        //     return bd.floatValue();
        // } else if(formalType === Number || formalType === Number) {
        //     return bd.shortValue();
        // } else if(formalType === Number || formalType === Number) {
        //     return bd.byteValue();
        // } else if(BigInteger.isAssignableFrom(formalType)) {
        //     return bd.toBigInteger();
        // } else {
        //     return bd;
        // }
    }

    /**
     * Returns the exact class name and the identity hash, also the values of the most often used {link BeansWrapper}
     * configuration properties, also if which (if any) shared class introspection cache it uses.
     * 
     * @since 2.3.21
     * @return {String}
     */
    public toString() : string {
        let propsStr : string = this.toPropertiesString();
        return ClassUtil.getShortClassNameOfObject(this) + "@" + System.identityHashCode(this) + "(" + this.incompatibleImprovements + ", " + (propsStr.length !== 0?propsStr + ", ...":"") + ")";
    }

    /**
     * Returns the name-value pairs that describe the configuration of this {link BeansWrapper}; called from
     * {link #toString()}. The expected format is like {@code "foo=bar, baaz=wombat"}. When overriding this, you should
     * call the super method, and then insert the content before it with a following {@code ", "}, or after it with a
     * preceding {@code ", "}.
     * 
     * @since 2.3.22
     * @return {String}
     */
    toPropertiesString() : string {
        return "simpleMapWrapper=" + this.simpleMapWrapper + ", exposureLevel=" + this.classIntrospector.getExposureLevel() + ", exposeFields=" + this.classIntrospector.getExposeFields() + ", preferIndexedReadMethod=" + this.preferIndexedReadMethod + ", treatDefaultMethodsAsBeanMembers=" + this.classIntrospector.getTreatDefaultMethodsAsBeanMembers() + ", sharedClassIntrospCache=" + (this.classIntrospector.isShared()?"@" + System.identityHashCode(this.classIntrospector):"none");
    }
}
BeansWrapper["__class"] = "freemarker.ext.beans.BeansWrapper";
BeansWrapper["__interfaces"] = ["freemarker.template.utility.WriteProtectable","freemarker.template.utility.RichObjectWrapper","freemarker.template.utility.ObjectWrapperWithAPISupport","freemarker.template.ObjectWrapperAndUnwrapper","freemarker.template.ObjectWrapper"];



export namespace BeansWrapper {

    // /**
    //  * Used for
    //  * {link MethodAppearanceFineTuner#process}
    //  * to store the results; see there.
    //  * @class
    //  */
    // export class MethodAppearanceDecision {
    //     exposeAsProperty : PropertyDescriptor;
    //
    //     replaceExistingProperty : boolean;
    //
    //     exposeMethodAs : string;
    //
    //     methodShadowsProperty : boolean;
    //
    //     setDefaults(m : Function) {
    //         this.exposeAsProperty = null;
    //         this.replaceExistingProperty = false;
    //         this.exposeMethodAs = /* getName */m.name;
    //         this.methodShadowsProperty = true;
    //     }
    //
    //     /**
    //      * See in the documentation of {link MethodAppearanceFineTuner#process}.
    //      * @return {PropertyDescriptor}
    //      */
    //     public getExposeAsProperty() : PropertyDescriptor {
    //         return this.exposeAsProperty;
    //     }
    //
    //     /**
    //      * See in the documentation of {link MethodAppearanceFineTuner#process}.
    //      * Note that you may also want to call
    //      * {link #setMethodShadowsProperty(boolean) setMethodShadowsProperty(false)} when you call this.
    //      * @param {PropertyDescriptor} exposeAsProperty
    //      */
    //     public setExposeAsProperty(exposeAsProperty : PropertyDescriptor) {
    //         this.exposeAsProperty = exposeAsProperty;
    //     }
    //
    //     /**
    //      * Getter pair of {link #setReplaceExistingProperty(boolean)}.
    //      *
    //      * @since 2.3.28
    //      * @return {boolean}
    //      */
    //     public getReplaceExistingProperty() : boolean {
    //         return this.replaceExistingProperty;
    //     }
    //
    //     /**
    //      * If {link #getExposeAsProperty()} is non-{@code null}, and a {link PropertyDescriptor} with the same
    //      * property name was already added to the class introspection data, this decides if that will be replaced
    //      * with the {link PropertyDescriptor} returned by {link #getExposeAsProperty()}. The default is {@code false},
    //      * that is, the old {link PropertyDescriptor} is kept, and the new one is ignored.
    //      * JavaBean properties discovered with the standard (non-{link MethodAppearanceFineTuner}) mechanism
    //      * are added before those created by the {link MethodAppearanceFineTuner}, so with this you can decide if a
    //      * real JavaBeans property can be replaced by the "fake" one created with
    //      * {link #setExposeAsProperty(PropertyDescriptor)}.
    //      *
    //      * @since 2.3.28
    //      * @param {boolean} overrideExistingProperty
    //      */
    //     public setReplaceExistingProperty(overrideExistingProperty : boolean) {
    //         this.replaceExistingProperty = overrideExistingProperty;
    //     }
    //
    //     /**
    //      * See in the documentation of {link MethodAppearanceFineTuner#process}.
    //      * @return {String}
    //      */
    //     public getExposeMethodAs() : string {
    //         return this.exposeMethodAs;
    //     }
    //
    //     /**
    //      * See in the documentation of {link MethodAppearanceFineTuner#process}.
    //      * @param {String} exposeAsMethod
    //      */
    //     public setExposeMethodAs(exposeAsMethod : string) {
    //         this.exposeMethodAs = exposeAsMethod;
    //     }
    //
    //     /**
    //      * See in the documentation of {link MethodAppearanceFineTuner#process}.
    //      * @return {boolean}
    //      */
    //     public getMethodShadowsProperty() : boolean {
    //         return this.methodShadowsProperty;
    //     }
    //
    //     /**
    //      * See in the documentation of {link MethodAppearanceFineTuner#process}.
    //      * @param {boolean} shadowEarlierProperty
    //      */
    //     public setMethodShadowsProperty(shadowEarlierProperty : boolean) {
    //         this.methodShadowsProperty = shadowEarlierProperty;
    //     }
    //
    //     constructor() {
    //         if(this.exposeAsProperty===undefined) this.exposeAsProperty = null;
    //         if(this.replaceExistingProperty===undefined) this.replaceExistingProperty = false;
    //         if(this.exposeMethodAs===undefined) this.exposeMethodAs = null;
    //         if(this.methodShadowsProperty===undefined) this.methodShadowsProperty = false;
    //     }
    // }
    // MethodAppearanceDecision["__class"] = "freemarker.ext.beans.BeansWrapper.MethodAppearanceDecision";
    //
    //
    // /**
    //  * Used for {link MethodAppearanceFineTuner#process} as input parameter; see there.
    //  * @class
    //  */
    // export class MethodAppearanceDecisionInput {
    //     method : Function;
    //
    //     containingClass : any;
    //
    //     setMethod(method : Function) {
    //         this.method = method;
    //     }
    //
    //     setContainingClass(containingClass : any) {
    //         this.containingClass = containingClass;
    //     }
    //
    //     public getMethod() : Function {
    //         return this.method;
    //     }
    //
    //     public getContainingClass() : any {
    //         return this.containingClass;
    //     }
    //
    //     constructor() {
    //         if(this.method===undefined) this.method = null;
    //         if(this.containingClass===undefined) this.containingClass = null;
    //     }
    // }
    // MethodAppearanceDecisionInput["__class"] = "freemarker.ext.beans.BeansWrapper.MethodAppearanceDecisionInput";
    //
    //
    // export class BeansWrapper$0 implements ModelFactory {
    //     public __parent: any;
    //     public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
    //         return <boolean>object?this.__parent.trueModel:this.__parent.falseModel;
    //     }
    //
    //     constructor(__parent: any) {
    //         this.__parent = __parent;
    //     }
    // }
    // BeansWrapper$0["__interfaces"] = ["freemarker.ext.util.ModelFactory"];
    //
    //
    //
    // export class BeansWrapper$1 implements MethodAppearanceFineTuner {
    //     public __parent: any;
    //     public process(__in : BeansWrapper.MethodAppearanceDecisionInput, out : BeansWrapper.MethodAppearanceDecision) {
    //         this.__parent.finetuneMethodAppearance(__in.getContainingClass(), __in.getMethod(), out);
    //     }
    //
    //     constructor(__parent: any) {
    //         this.__parent = __parent;
    //     }
    // }
    // BeansWrapper$1["__interfaces"] = ["freemarker.ext.beans.MethodAppearanceFineTuner"];
    //
    //
    //
    // export class BeansWrapper$2 extends BeansWrapperConfiguration {
    //     public __parent: any;
    //     constructor(__parent: any, __arg0: any) {
    //         super(__arg0);
    //         this.__parent = __parent;
    //     }
    // }
    // BeansWrapper$2["__interfaces"] = ["java.lang.Cloneable"];
    //
    //
    //
    // export class BeansWrapper$3 implements ModelFactory {
    //     public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
    //         return new IteratorModel(<Iterator><any>object, <BeansWrapper><any>wrapper);
    //     }
    //
    //     constructor() {
    //     }
    // }
    // BeansWrapper$3["__interfaces"] = ["freemarker.ext.util.ModelFactory"];
    //
    //
    //
    // export class BeansWrapper$4 implements ModelFactory {
    //     public create(object : any, wrapper : ObjectWrapper) : TemplateModel {
    //         return new EnumerationModel(<Enumeration><any>object, <BeansWrapper><any>wrapper);
    //     }
    //
    //     constructor() {
    //     }
    // }
    // BeansWrapper$4["__interfaces"] = ["freemarker.ext.util.ModelFactory"];


}




//
// BeansWrapper.ENUMERATION_FACTORY_$LI$();
//
// BeansWrapper.ITERATOR_FACTORY_$LI$();

// BeansWrapper.CAN_NOT_UNWRAP_$LI$();

BeansWrapper.LOG_$LI$();
