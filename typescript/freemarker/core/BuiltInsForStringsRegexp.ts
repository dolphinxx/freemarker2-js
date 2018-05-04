/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { SimpleScalar } from '../template/SimpleScalar';
import { SimpleSequence } from '../template/SimpleSequence';
import { TemplateBooleanModel } from '../template/TemplateBooleanModel';
import { TemplateCollectionModel } from '../template/TemplateCollectionModel';
import { TemplateException } from '../template/TemplateException';
import { TemplateMethodModel } from '../template/TemplateMethodModel';
import { TemplateModel } from '../template/TemplateModel';
import { TemplateModelException } from '../template/TemplateModelException';
import { TemplateModelIterator } from '../template/TemplateModelIterator';
import { TemplateScalarModel } from '../template/TemplateScalarModel';
import { TemplateSequenceModel } from '../template/TemplateSequenceModel';
import { StringUtil } from '../template/utility/StringUtil';
import { BuiltIn } from './BuiltIn';
import { Environment } from './Environment';
import { Expression } from './Expression';
import { UnexpectedTypeException } from './UnexpectedTypeException';
import { BuiltInForString } from './BuiltInForString';
import { RegexpHelper } from './RegexpHelper';
import { Boolean } from '../../java/lang/Boolean';
import { _TemplateModelException } from './_TemplateModelException';

/**
 * Contains the string built-ins that correspond to basic regular expressions operations.
 * @class
 */
export class BuiltInsForStringsRegexp {
    constructor() {
    }
}
BuiltInsForStringsRegexp["__class"] = "freemarker.core.BuiltInsForStringsRegexp";


export namespace BuiltInsForStringsRegexp {

    export class groupsBI extends BuiltIn {
        /**
         * 
         * @param {Environment} env
         * @return {*}
         */
        _eval(env : Environment) : TemplateModel {
            let targetModel : TemplateModel = this.target.eval(env);
            this.assertNonNull(targetModel, env);
            if(targetModel != null && targetModel instanceof <any>BuiltInsForStringsRegexp.RegexMatchModel) {
                return (<BuiltInsForStringsRegexp.RegexMatchModel><any>targetModel).getGroups();
            } else if(targetModel != null && targetModel instanceof <any>BuiltInsForStringsRegexp.RegexMatchModel.MatchWithGroups) {
                return (<BuiltInsForStringsRegexp.RegexMatchModel.MatchWithGroups><any>targetModel).groupsSeq;
            } else {
                throw new UnexpectedTypeException(this.target, targetModel, "regular expression matcher", [BuiltInsForStringsRegexp.RegexMatchModel, BuiltInsForStringsRegexp.RegexMatchModel.MatchWithGroups], env);
            }
        }

        constructor() {
            super();
        }
    }
    groupsBI["__class"] = "freemarker.core.BuiltInsForStringsRegexp.groupsBI";
    groupsBI["__interfaces"] = ["java.lang.Cloneable"];



    export class matchesBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new matchesBI.MatcherBuilder(this, s);
        }

        constructor() {
            super();
        }
    }
    matchesBI["__class"] = "freemarker.core.BuiltInsForStringsRegexp.matchesBI";
    matchesBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace matchesBI {

        export class MatcherBuilder implements TemplateMethodModel {
            public __parent: any;
            matchString : string;

            constructor(__parent: any, matchString : string) {
                this.__parent = __parent;
                if(this.matchString===undefined) this.matchString = null;
                this.matchString = matchString;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 1, 2);
                let patternString : string = <string>/* get */args[0];
                let flags : number = argCnt > 1?RegexpHelper.parseFlagString(<string>/* get */args[1]):0;
                if((flags & RegexpHelper.RE_FLAG_FIRST_ONLY) !== 0) {
                    RegexpHelper.logFlagWarning("?" + this.__parent.key + " doesn\'t support the \"f\" flag.");
                }
                let pattern : Pattern = RegexpHelper.getPattern(patternString, (<number>flags|0));
                return new BuiltInsForStringsRegexp.RegexMatchModel(pattern, this.matchString);
            }
        }
        MatcherBuilder["__class"] = "freemarker.core.BuiltInsForStringsRegexp.matchesBI.MatcherBuilder";
        MatcherBuilder["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateModel"];


    }


    export class replace_reBI extends BuiltInForString {
        /**
         * 
         * @param {String} s
         * @param {Environment} env
         * @return {*}
         */
        calculateResult(s : string, env : Environment) : TemplateModel {
            return new replace_reBI.ReplaceMethod(this, s);
        }

        constructor() {
            super();
        }
    }
    replace_reBI["__class"] = "freemarker.core.BuiltInsForStringsRegexp.replace_reBI";
    replace_reBI["__interfaces"] = ["java.lang.Cloneable"];



    export namespace replace_reBI {

        export class ReplaceMethod implements TemplateMethodModel {
            public __parent: any;
            s : string;

            constructor(__parent: any, s : string) {
                this.__parent = __parent;
                if(this.s===undefined) this.s = null;
                this.s = s;
            }

            public exec(args : Array<any>) : any {
                let argCnt : number = /* size */(<number>args.length);
                this.__parent.checkMethodArgCount(argCnt, 2, 3);
                let arg1 : string = <string>/* get */args[0];
                let arg2 : string = <string>/* get */args[1];
                let flags : number = argCnt > 2?RegexpHelper.parseFlagString(<string>/* get */args[2]):0;
                let result : string;
                if((flags & RegexpHelper.RE_FLAG_REGEXP) === 0) {
                    RegexpHelper.checkNonRegexpFlags("replace", flags);
                    result = StringUtil.replace$java_lang_String$java_lang_String$java_lang_String$boolean$boolean(this.s, arg1, arg2, (flags & RegexpHelper.RE_FLAG_CASE_INSENSITIVE_$LI$()) !== 0, (flags & RegexpHelper.RE_FLAG_FIRST_ONLY) !== 0);
                } else {
                    let pattern : Pattern = RegexpHelper.getPattern(arg1, (<number>flags|0));
                    let matcher : Matcher = pattern.matcher(this.s);
                    result = (flags & RegexpHelper.RE_FLAG_FIRST_ONLY) !== 0?matcher.replaceFirst(arg2):matcher.replaceAll(arg2);
                }
                return new SimpleScalar(result);
            }
        }
        ReplaceMethod["__class"] = "freemarker.core.BuiltInsForStringsRegexp.replace_reBI.ReplaceMethod";
        ReplaceMethod["__interfaces"] = ["freemarker.template.TemplateMethodModel","freemarker.template.TemplateModel"];


    }


    export class RegexMatchModel implements TemplateBooleanModel, TemplateCollectionModel, TemplateSequenceModel {
        pattern : Pattern;

        input : string;

        firedEntireInputMatcher : Matcher;

        entireInputMatched : boolean;

        entireInputMatchGroups : TemplateSequenceModel;

        matchingInputParts : Array<any>;

        constructor(pattern : Pattern, input : string) {
            if(this.pattern===undefined) this.pattern = null;
            if(this.input===undefined) this.input = null;
            if(this.firedEntireInputMatcher===undefined) this.firedEntireInputMatcher = null;
            if(this.entireInputMatched===undefined) this.entireInputMatched = null;
            if(this.entireInputMatchGroups===undefined) this.entireInputMatchGroups = null;
            if(this.matchingInputParts===undefined) this.matchingInputParts = null;
            this.pattern = pattern;
            this.input = input;
        }

        public get(i : number) : TemplateModel {
            let matchingInputParts : Array<any> = this.matchingInputParts;
            if(matchingInputParts == null) {
                matchingInputParts = this.getMatchingInputPartsAndStoreResults();
            }
            return <TemplateModel><any>/* get */matchingInputParts[i];
        }

        public getAsBoolean() : boolean {
            let result : boolean = this.entireInputMatched;
            return result != null?result:this.isEntrieInputMatchesAndStoreResults();
        }

        getGroups() : TemplateModel {
            let entireInputMatchGroups : TemplateSequenceModel = this.entireInputMatchGroups;
            if(entireInputMatchGroups == null) {
                let t : Matcher = this.firedEntireInputMatcher;
                if(t == null) {
                    this.isEntrieInputMatchesAndStoreResults();
                    t = this.firedEntireInputMatcher;
                }
                let firedEntireInputMatcher : Matcher = t;
                entireInputMatchGroups = new RegexMatchModel.RegexMatchModel$0(this, firedEntireInputMatcher);
                this.entireInputMatchGroups = entireInputMatchGroups;
            }
            return entireInputMatchGroups;
        }

        getMatchingInputPartsAndStoreResults() : Array<any> {
            let matchingInputParts : Array<any> = <any>([]);
            let matcher : Matcher = this.pattern.matcher(this.input);
            while((matcher.find())) {
                /* add */(matchingInputParts.push(new RegexMatchModel.MatchWithGroups(this.input, matcher))>0);
            };
            this.matchingInputParts = matchingInputParts;
            return matchingInputParts;
        }

        isEntrieInputMatchesAndStoreResults() : boolean {
            let matcher : Matcher = this.pattern.matcher(this.input);
            let matches : boolean = matcher.matches();
            this.firedEntireInputMatcher = matcher;
            this.entireInputMatched = matches;
            return matches;
        }

        public iterator() : TemplateModelIterator {
            let matchingInputParts : Array<any> = this.matchingInputParts;
            if(matchingInputParts == null) {
                let matcher : Matcher = this.pattern.matcher(this.input);
                return new RegexMatchModel.RegexMatchModel$1(this, matcher);
            } else {
                return new RegexMatchModel.RegexMatchModel$2(this, matchingInputParts);
            }
        }

        public size() : number {
            let matchingInputParts : Array<any> = this.matchingInputParts;
            if(matchingInputParts == null) {
                matchingInputParts = this.getMatchingInputPartsAndStoreResults();
            }
            return /* size */(<number>matchingInputParts.length);
        }
    }
    RegexMatchModel["__class"] = "freemarker.core.BuiltInsForStringsRegexp.RegexMatchModel";
    RegexMatchModel["__interfaces"] = ["freemarker.template.TemplateCollectionModel","freemarker.template.TemplateSequenceModel","freemarker.template.TemplateBooleanModel","freemarker.template.TemplateModel"];



    export namespace RegexMatchModel {

        export class MatchWithGroups implements TemplateScalarModel {
            matchedInputPart : string;

            groupsSeq : SimpleSequence;

            constructor(input : string, matcher : Matcher) {
                if(this.matchedInputPart===undefined) this.matchedInputPart = null;
                if(this.groupsSeq===undefined) this.groupsSeq = null;
                this.matchedInputPart = input.substring(matcher.start(), matcher.end());
                let grpCount : number = matcher.groupCount() + 1;
                this.groupsSeq = new SimpleSequence(grpCount);
                for(let i : number = 0; i < grpCount; i++) {
                    this.groupsSeq.add$java_lang_Object(matcher.group(i));
                };
            }

            public getAsString() : string {
                return this.matchedInputPart;
            }
        }
        MatchWithGroups["__class"] = "freemarker.core.BuiltInsForStringsRegexp.RegexMatchModel.MatchWithGroups";
        MatchWithGroups["__interfaces"] = ["freemarker.template.TemplateScalarModel","freemarker.template.TemplateModel"];



        export class RegexMatchModel$0 implements TemplateSequenceModel {
            public __parent: any;
            public get(i : number) : TemplateModel {
                try {
                    return new SimpleScalar(this.firedEntireInputMatcher.group(i));
                } catch(e) {
                    throw new _TemplateModelException(e, "Failed to read regular expression match group");
                };
            }

            public size() : number {
                try {
                    return this.firedEntireInputMatcher.groupCount() + 1;
                } catch(e) {
                    throw new _TemplateModelException(e, "Failed to get regular expression match group count");
                };
            }

            constructor(__parent: any, private firedEntireInputMatcher: any) {
                this.__parent = __parent;
            }
        }
        RegexMatchModel$0["__interfaces"] = ["freemarker.template.TemplateSequenceModel","freemarker.template.TemplateModel"];



        export class RegexMatchModel$1 implements TemplateModelIterator {
            public __parent: any;
            nextIdx : number;

            hasFindInfo : boolean;

            public hasNext() : boolean {
                let matchingInputParts : Array<any> = this.__parent.matchingInputParts;
                if(matchingInputParts == null) {
                    return this.hasFindInfo;
                } else {
                    return this.nextIdx < /* size */(<number>matchingInputParts.length);
                }
            }

            public next() : TemplateModel {
                let matchingInputParts : Array<any> = this.__parent.matchingInputParts;
                if(matchingInputParts == null) {
                    if(!this.hasFindInfo) {
                        throw new _TemplateModelException("There were no more regular expression matches");
                    }
                    let result : RegexMatchModel.MatchWithGroups = new RegexMatchModel.MatchWithGroups(this.__parent.input, this.matcher);
                    this.nextIdx++;
                    this.hasFindInfo = this.matcher.find();
                    return result;
                } else {
                    try {
                        return <TemplateModel><any>/* get */matchingInputParts[this.nextIdx++];
                    } catch(e) {
                        throw new _TemplateModelException(e, "There were no more regular expression matches");
                    };
                }
            }

            constructor(__parent: any, private matcher: any) {
                this.__parent = __parent;
                this.nextIdx = 0;
                this.hasFindInfo = this.matcher.find();
            }
        }
        RegexMatchModel$1["__interfaces"] = ["freemarker.template.TemplateModelIterator"];



        export class RegexMatchModel$2 implements TemplateModelIterator {
            public __parent: any;
            nextIdx : number;

            public hasNext() : boolean {
                return this.nextIdx < /* size */(<number>this.matchingInputParts.length);
            }

            public next() : TemplateModel {
                try {
                    return <TemplateModel><any>/* get */this.matchingInputParts[this.nextIdx++];
                } catch(e) {
                    throw new _TemplateModelException(e, "There were no more regular expression matches");
                };
            }

            constructor(__parent: any, private matchingInputParts: any) {
                this.__parent = __parent;
                this.nextIdx = 0;
            }
        }
        RegexMatchModel$2["__interfaces"] = ["freemarker.template.TemplateModelIterator"];


    }

}



