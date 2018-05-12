const Configuration = require("../../../dist/freemarker/template/Configuration").Configuration;
const List = require("../../../dist/java/util/List").List;
const Map = require("../../../dist/java/util/Map").Map;
const StringTemplateLoader = require("../../../dist/freemarker/cache/StringTemplateLoader").StringTemplateLoader;
const {MultiTemplateLoader} = require("../../../dist/freemarker/cache/MultiTemplateLoader");
const StringWriter = require("../../../dist/java/io/StringWriter").StringWriter;
const RuntimeException = require("../../../dist/java/lang/RuntimeException").RuntimeException;
const ParseException = require("../../../dist/freemarker/core/ParseException").ParseException;
const TemplateException = require("../../../dist/freemarker/template/TemplateException").TemplateException;
const Locale = require("../../../dist/java/util/Locale").Locale;
const Template = require("../../../dist/freemarker/template/Template").Template;
const {StringUtil} = require('../../../dist/freemarker/template/utility/StringUtil');
const {TestUtil} = require('../test/utility/TestUtil');
const path = require('path');
const fs = require('fs');
exports.__esModule = true;
const TemplateTest = /** @class */ (function () {
    function TemplateTest() {
    }

    TemplateTest.prototype.getConfiguration = function () {
        if (this.configuration == null) {
            try {
                this.configuration = this.createConfiguration();
                this.addCommonTemplates();
                this.applyEnvironmentIndependentDefaults();
            } catch (e) {
                throw new RuntimeException("Failed to set up configuration for the test", e);
            }
        }
        return this.configuration;
    };

    /**
     * Ensure that the configuration settings don't depend on the machine that runs the test.
     */
    TemplateTest.prototype.applyEnvironmentIndependentDefaults = function () {
        if (!this.configuration.isLocaleExplicitlySet()) {
            this.configuration.setLocale(new Locale('en', 'US'));
        }
        if (!this.configuration.isDefaultEncodingExplicitlySet()) {
            this.configuration.setDefaultEncoding('UTF-8');
        }
        if (!this.configuration.isTimeZoneExplicitlySet()) {
            this.configuration.setTimeZone("GMT+1");
        }
    };

    TemplateTest.prototype.setConfiguration = function (configuration) {
        this.configuration = configuration;
    };

    TemplateTest.prototype.dropConfiguration = function () {
        this.configuration = null;
    };

    TemplateTest.prototype.assertOutput = function (ftl, expectedOut) {
        this.assertOutput(this.createTemplate(ftl), expectedOut, false);
    };

    TemplateTest.prototype.createTemplate = function (ftl) {
        return new Template(null, ftl, getConfiguration());
    };

    TemplateTest.prototype.assertOutputForNamed = function (name, expectedOut) {
        let normalizeNewLines = false;
        if (expectedOut === undefined) {
            let resName = name + ".out";
            const file = path.resolve(__dirname, resName);
            if (!fs.existsSync(file)) {
                throw new Error("Reference output resource not found: " + file + ", " + resName);
            }
            expectedOut = TestUtil.removeTxtCopyrightComment(fs.readFileSync(file, {encoding: 'UTF-8'}));
            normalizeNewLines = true;
        }
        this.assertOutput(this.getConfiguration().getTemplate(name), expectedOut, normalizeNewLines);
    };

    TemplateTest.prototype.assertOutput = function (t, expectedOut, normalizeNewlines) {
        if (normalizeNewlines === undefined) {
            normalizeNewlines = false;
        }
        let actualOut = this.getOutput(t);

        if (normalizeNewlines) {
            expectedOut = this.normalizeNewLines(expectedOut);
            actualOut = this.normalizeNewLines(actualOut);
        }
        this.assertEquals(expectedOut, actualOut);
    };

    TemplateTest.prototype.getOutput = function (ftl) {
        if (typeof ftl === 'string') {
            ftl = this.createTemplate(ftl);
        }
        let out = new StringWriter();
        ftl.process(this.getDataModel(), out);
        return out.toString();
    };

    TemplateTest.prototype.createConfiguration = function () {
        return new Configuration(Configuration.VERSION_2_3_0);
    };

    TemplateTest.prototype.addCommonTemplates = function () {
        //
    };

    TemplateTest.prototype.getDataModel = function () {
        if (!this.dataModelCreated) {
            this.dataModel = this.createDataModel();
            this.dataModelCreated = true;
        }
        return this.dataModel;
    };

    TemplateTest.prototype.createDataModel = function () {
        return null;
    };

    TemplateTest.prototype.createCommonTestValuesDataModel = function () {
        let dataModel = new Map();
        dataModel.put("map", new Map("key", "value"));
        dataModel.put("list", new List("item"));
        dataModel.put("s", "text");
        dataModel.put("n", 1);
        dataModel.put("b", true);
        // dataModel.put("bean", new TestBean());
        return dataModel;
    };

    TemplateTest.prototype.addTemplate = function (name, content) {
        let cfg = this.getConfiguration();
        let tl = cfg.getTemplateLoader();
        let stl;
        if (tl != null) {
            stl = this.extractStringTemplateLoader(tl);
        } else {
            stl = new StringTemplateLoader();
            cfg.setTemplateLoader(stl);
        }
        stl.putTemplate(name, content);
    };

    TemplateTest.prototype.extractStringTemplateLoader = function (tl) {
        if (tl instanceof MultiTemplateLoader) {
            let mtl = tl;
            for (let i = 0; i < mtl.getTemplateLoaderCount(); i++) {
                let tli = mtl.getTemplateLoader(i);
                if (tli instanceof StringTemplateLoader) {
                    return tli;
                }
            }
            throw new Error(
                "The template loader was a MultiTemplateLoader that didn't contain StringTemplateLoader: "
                + tl);
        } else if (tl instanceof StringTemplateLoader) {
            return tl;
        } else {
            throw new Error(
                "The template loader was already set to a non-StringTemplateLoader non-MultiTemplateLoader: "
                + tl);
        }
    };

    TemplateTest.prototype.addToDataModel = function (name, value) {
        let dm = this.getDataModel();
        if (dm == null) {
            dm = new Map();
            this.dataModel = dm;
        }
        if (dm instanceof Map) {
            dm.put(name, value);
        } else {
            throw new Error("Can't add to non-Map data-model: " + dm);
        }
    };

    TemplateTest.prototype.assertErrorContains = function (ftl, ...expectedSubstrings) {
        return this.assertErrorContains(null, ftl, null, expectedSubstrings);
    };

    TemplateTest.prototype.assertErrorContains = function (ftl, exceptionClass, ...expectedSubstrings) {
        return this.assertErrorContains(null, ftl, exceptionClass, expectedSubstrings);
    };

    TemplateTest.prototype.assertErrorContainsForNamed = function (name, ...expectedSubstrings) {
        this.assertErrorContains(name, null, null, expectedSubstrings);
    };

    TemplateTest.prototype.assertErrorContainsForNamed = function (name, exceptionClass, ...expectedSubstrings) {
        this.assertErrorContains(name, null, exceptionClass, expectedSubstrings);
    };

    TemplateTest.prototype.assertErrorContains = function (name, ftl, exceptionClass, ...expectedSubstrings) {
        try {
            let t;
            if (ftl == null) {
                t = this.getConfiguration().getTemplate(name);
            } else {
                t = new Template("adhoc", ftl, this.getConfiguration());
            }
            t.process(this.getDataModel(), new StringWriter());
            this.fail("The tempalte had to fail");
            return null;
        } catch (e) {
            if (e instanceof TemplateException) {
                if (exceptionClass != null) {
                    this.assertInstanceOf(e, exceptionClass);
                }
                this.assertContainsAll(e.getMessageWithoutStackTop(), expectedSubstrings);
                return e;
            } else if (e instanceof ParseException) {
                if (exceptionClass != null) {
                    this.assertInstanceOf(e, exceptionClass);
                }
                this.assertContainsAll(e.getEditorMessage(), expectedSubstrings);
                return e;
            } else {
                if (exceptionClass != null) {
                    this.assertInstanceOf(e, exceptionClass);
                    return e;
                } else {
                    throw new RuntimeException("Unexpected exception class: " + e, e);
                }
            }

        }
    };

    TemplateTest.prototype.assertContainsAll = function (msg, ...expectedSubstrings) {
        for (let needle of expectedSubstrings) {
            if (needle.startsWith("\\!")) {
                let netNeedle = needle.substring(2);
                if (msg.contains(netNeedle)) {
                    this.fail("The message shouldn't contain substring " + StringUtil.jQuote(netNeedle) + ":\n" + msg);
                }
            } else if (!msg.contains(needle)) {
                this.fail("The message didn't contain substring " + StringUtil.jQuote(needle) + ":\n" + msg);
            }
        }
    };

    TemplateTest.prototype.normalizeNewLines = function (s) {
        return StringUtil.replace(s, "\r\n", "\n").replace('\r', '\n');
    };

    TemplateTest.prototype.assertInstanceOf = function (instance, type) {
        if (!(instance instanceof type)) {
            throw new Error(`${instance} is not instanceof ${type}`);
        }
    };

    TemplateTest.prototype.assertEquals = function (description, expected, actual) {
        if (arguments.length === 2) {
            description = '';
            expected = arguments[0];
            actual = arguments[1];
        }
        if (expected !== actual) {
            throw new Error(`${description} in ${this.getScriptFileName()} expected:\n${expected}\nactual:\n${actual}`);
        }
    };

    TemplateTest.prototype.getScriptFileName = function () {
        if (this.filename !== undefined) {
            return this.filename;
        }
        let _filename = __filename.replace(/\\/g, '/');
        this.filename = _filename.substring(_filename.lastIndexOf('/') + 1);
        return this.filename;
    };

    TemplateTest.prototype.test = function(description, test) {
        try{
            test();
        }catch(e) {
            console.log('\x1b[31m%s\x1b[0m', `${description} in ${this.getScriptFileName()} failed!`);
            throw e;
        }
        console.log('\x1b[32m%s\x1b[0m', `${description} in ${this.getScriptFileName()} passed!`);
    };

    return TemplateTest;
}());
exports.TemplateTest = TemplateTest;