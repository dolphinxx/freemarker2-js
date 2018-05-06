/* Generated from Java with JSweet 2.2.0-SNAPSHOT - http://www.jsweet.org */
import {_ErrorDescriptionBuilder} from '../core/_ErrorDescriptionBuilder';
import {TemplateException} from './TemplateException';
import {ClassUtil} from './utility/ClassUtil';

/**
 * Constructs a TemplateModelException with both a description of the error
 * that occurred and the underlying Exception that caused this exception
 * to be raised.
 *
 * @param {String} description      the description of the error that occurred
 * @param {boolean} replaceWithCause See {link #getReplaceWithCause()}; usually {@code false}, unless you are forced to wrap
 * {link TemplateException} into a {link TemplateModelException} merely due to API constraints.
 * @param {Error} cause            the underlying {link Exception} that caused this
 * exception to be raised
 * @since 2.3.28
 * @class
 * @extends TemplateException
 */
export class TemplateModelException extends TemplateException {
    /*private*/
    replaceWithCause: boolean;

    public constructor(cause?: any, env?: any, description?: any, preventAmbiguity?: any) {
        if (((ClassUtil.isInstanceOf(cause, "java.lang.Throwable") || cause != null && cause instanceof <any>Error) || cause === null) && (ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')|| env === null) && ((typeof description === 'string') || description === null) && ((typeof preventAmbiguity === 'boolean') || preventAmbiguity === null)) {
            let __args = Array.prototype.slice.call(arguments);
            super(description, cause, env);
            if (this.replaceWithCause === undefined) this.replaceWithCause = false;
            (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
            if (this.replaceWithCause === undefined) this.replaceWithCause = false;
            (() => {
                this.replaceWithCause = false;
            })();
        } else if (((ClassUtil.isInstanceOf(cause, "java.lang.Throwable") || cause != null && cause instanceof <any>Error) || cause === null) && ((ClassUtil.isInstanceOf(env, 'freemarker.core.Environment')) || env === null) && ((description != null && description instanceof <any>_ErrorDescriptionBuilder) || description === null) && ((typeof preventAmbiguity === 'boolean') || preventAmbiguity === null)) {
            let __args = Array.prototype.slice.call(arguments);
            let descriptionBuilder: any = __args[2];
            super(cause, env, null, descriptionBuilder);
            if (this.replaceWithCause === undefined) this.replaceWithCause = false;
            (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
            if (this.replaceWithCause === undefined) this.replaceWithCause = false;
            (() => {
                this.replaceWithCause = false;
            })();
        } else if (((typeof cause === 'string') || cause === null) && ((typeof env === 'boolean') || env === null) && ((ClassUtil.isInstanceOf(description, "java.lang.Throwable") || description != null && description instanceof <any>Error) || description === null) && preventAmbiguity === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description: any = __args[0];
            let replaceWithCause: any = __args[1];
            let cause: any = __args[2];
            super(description, cause, null);
            if (this.replaceWithCause === undefined) this.replaceWithCause = false;
            (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
            if (this.replaceWithCause === undefined) this.replaceWithCause = false;
            (() => {
                this.replaceWithCause = replaceWithCause;
            })();
        } else if (((typeof cause === 'string') || cause === null) && ((ClassUtil.isInstanceOf(env, "java.lang.Exception") || env != null && env instanceof <any>Error) || env === null) && description === undefined && preventAmbiguity === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description: any = __args[0];
            let cause: any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause: any = <Error>__args[1];
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let replaceWithCause: any = false;
                    super(description, cause, null);
                    if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                    (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
                    if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                    (() => {
                        this.replaceWithCause = replaceWithCause;
                    })();
                }
            }
        } else if (((typeof cause === 'string') || cause === null) && ((env != null && (env["__classes"] && env["__classes"].indexOf("java.lang.Throwable") >= 0) || env != null && env instanceof <any>Error) || env === null) && description === undefined && preventAmbiguity === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description: any = __args[0];
            let cause: any = __args[1];
            {
                let __args = Array.prototype.slice.call(arguments);
                let replaceWithCause: any = false;
                super(description, cause, null);
                if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
                if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                (() => {
                    this.replaceWithCause = replaceWithCause;
                })();
            }
        } else if (((typeof cause === 'string') || cause === null) && env === undefined && description === undefined && preventAmbiguity === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            let description: any = __args[0];
            {
                let __args = Array.prototype.slice.call(arguments);
                let cause: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause: any = <Error>__args[1];
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let replaceWithCause: any = false;
                        super(description, cause, null);
                        if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                        (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
                        if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                        (() => {
                            this.replaceWithCause = replaceWithCause;
                        })();
                    }
                }
            }
        } else if (((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Exception") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && env === undefined && description === undefined && preventAmbiguity === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let description: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause: any = <Error>__args[1];
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let replaceWithCause: any = false;
                        super(description, cause, null);
                        if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                        (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
                        if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                        (() => {
                            this.replaceWithCause = replaceWithCause;
                        })();
                    }
                }
            }
        } else if (((cause != null && (cause["__classes"] && cause["__classes"].indexOf("java.lang.Throwable") >= 0) || cause != null && cause instanceof <any>Error) || cause === null) && env === undefined && description === undefined && preventAmbiguity === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let description: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let replaceWithCause: any = false;
                    super(description, cause, null);
                    if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                    (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
                    if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                    (() => {
                        this.replaceWithCause = replaceWithCause;
                    })();
                }
            }
        } else if (cause === undefined && env === undefined && description === undefined && preventAmbiguity === undefined) {
            let __args = Array.prototype.slice.call(arguments);
            {
                let __args = Array.prototype.slice.call(arguments);
                let description: any = null;
                let cause: any = null;
                {
                    let __args = Array.prototype.slice.call(arguments);
                    let cause: any = <Error>__args[1];
                    {
                        let __args = Array.prototype.slice.call(arguments);
                        let replaceWithCause: any = false;
                        super(description, cause, null);
                        if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                        (<any>Object).setPrototypeOf(this, TemplateModelException.prototype);
                        if (this.replaceWithCause === undefined) this.replaceWithCause = false;
                        (() => {
                            this.replaceWithCause = replaceWithCause;
                        })();
                    }
                }
            }
        } else throw new Error('invalid overload');
    }

    /**
     * Indicates that the cause exception should be thrown instead of this exception; it was only wrapped into this
     * exception due to API constraints. Such unwanted wrapping typically occurs when you are only allowed to throw
     * {link TemplateModelException}, but the exception to propagate is a more generic {link TemplateException}.
     * The error handler mechanism of FreeMarker will replace the exception with its {link #getCause()} when it has
     * bubbled up to a place where that constraint doesn't apply anymore.
     *
     * @since 2.3.28
     * @return {boolean}
     */
    public getReplaceWithCause(): boolean {
        return this.replaceWithCause;
    }
}

TemplateModelException["__class"] = "freemarker.template.TemplateModelException";
TemplateModelException["__interfaces"] = ["java.io.Serializable"];



