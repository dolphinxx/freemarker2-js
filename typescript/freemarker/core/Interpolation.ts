/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import { TemplateException } from '../template/TemplateException';
import { TemplateElement } from './TemplateElement';
import { Environment } from './Environment';

export abstract class Interpolation extends TemplateElement {
    public dump$boolean$boolean(canonical : boolean, inStringLiteral : boolean) : string { throw new Error('cannot invoke abstract overloaded method... check your argument(s) type(s)'); }

    public dump(canonical? : any, inStringLiteral? : any) : any {
        if(((typeof canonical === 'boolean') || canonical === null) && ((typeof inStringLiteral === 'boolean') || inStringLiteral === null)) {
            return <any>this.dump$boolean$boolean(canonical, inStringLiteral);
        } else if(((typeof canonical === 'boolean') || canonical === null) && inStringLiteral === undefined) {
            return <any>this.dump$boolean(canonical);
        } else throw new Error('invalid overload');
    }

    dump$boolean(canonical : boolean) : string {
        return this.dump$boolean$boolean(canonical, false);
    }

    getCanonicalFormInStringLiteral() : string {
        return this.dump$boolean$boolean(true, true);
    }

    /**
     * Returns the already type-converted value that this interpolation will insert into the output.
     * 
     * @return {Object} A {link String} or {link TemplateMarkupOutputModel}. Not {@code null}.
     * @param {Environment} env
     */
    abstract calculateInterpolatedStringOrMarkup(env : Environment) : any;

    /**
     * 
     * @return {boolean}
     */
    isShownInStackTrace() : boolean {
        return true;
    }
}
Interpolation["__class"] = "freemarker.core.Interpolation";



var __Function = Function;
