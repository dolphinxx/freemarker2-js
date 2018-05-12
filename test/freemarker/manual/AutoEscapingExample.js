// const test = require('ava');


const fs = require('fs');
const path = require('path');
const HTMLOutputFormat = require("../../../dist/freemarker/core/HTMLOutputFormat").HTMLOutputFormat;
const FileTemplateLoader = require("../../../dist/freemarker/cache/FileTemplateLoader").FileTemplateLoader;
const Locale = require("../../../dist/java/util/Locale").Locale;
const Configuration = require("../../../dist/freemarker/template/Configuration").Configuration;
const StringWriter = require("../../../dist/java/io/StringWriter").StringWriter;

let configuration = null;

function getConfiguration() {
    if(configuration === null) {
        configuration =  new Configuration(Configuration.VERSION_2_3_29);
        configuration.setTemplateLoader(new FileTemplateLoader(__dirname, 'utf-8'));
        // configuration.setOutputFormat(new HTMLOutputFormat());
        applyEnvironmentIndependentDefaults();
    }
    return configuration;
}

/**
 * Ensure that the configuration settings don't depend on the machine that runs the test.
 */
function applyEnvironmentIndependentDefaults() {
    if (!configuration.isLocaleExplicitlySet()) {
        configuration.setLocale(new Locale("en", "US"));
    }
    if (!configuration.isDefaultEncodingExplicitlySet()) {
        configuration.setDefaultEncoding("UTF-8");
    }
    if (!configuration.isTimeZoneExplicitlySet()) {
        configuration.setTimeZone("GMT+1");
    }
}

function assertOutputForNamed(description, name) {
    let expectedOut;
    {
        let resName = name + ".out";
        const file = path.resolve(__dirname, resName);
        ;
        if (!fs.existsSync(file)) {
            throw new Error("Reference output resource not found: " + file + ", " + resName);
        }
        expectedOut = removeTxtCopyrightComment(fs.readFileSync(file, {encoding: 'UTF-8'}));
    }
    assertOutput(description, getConfiguration().getTemplate(name), expectedOut, true);
}

function assertOutput(description, t, expectedOut, normalizeNewlines) {
    let actualOut = getOutput(t);

    if (normalizeNewlines) {
        expectedOut = normalizeNewLines(expectedOut);
        actualOut = normalizeNewLines(actualOut);
    }
    assertEquals(description, expectedOut, actualOut);
}

function assertEquals(description, expected, actual) {
    if(expected !== actual) {
        throw new Error(`${description} in ${getScriptFileName()} expected:\n${expected}\nactual:\n${actual}`);
    }
    console.info(`${description} in ${getScriptFileName()} passed!`);
}
let filename = null;
function getScriptFileName() {
    if(filename !== null) {
        return filename;
    }
    let _filename = __filename.replace(/\\/g, '/');
    filename = _filename.substring(_filename.lastIndexOf('/') + 1);
    return filename;
}

function getOutput(t) {
    const out = new StringWriter();
    t.process(null, out);
    return out.toString();
}

function normalizeNewLines(s) {
    return s.replace("\r\n", "\n").replace('\r', '\n');
}

function removeTxtCopyrightComment(s) {
    if (!s.startsWith("/*")) {
        return s;
    }

    let commentEnd = s.indexOf("*/");
    if (commentEnd === -1) {
        return s;
    }
    commentEnd += 2;
    if (commentEnd < s.length) {
        let c = s.charAt(commentEnd);
        if (c === '\n' || c === '\r') {
            commentEnd++;
            if (c === '\r' && commentEnd < s.length) {
                if (s.charAt(commentEnd) === '\n') {
                    commentEnd++;
                }
            }
        }
    }

    let comment = s.substring(0, commentEnd);
    let copyrightIdx = comment.indexOf("copyright");
    if (copyrightIdx === -1) {
        copyrightIdx = comment.indexOf("Copyright");
    }
    if (copyrightIdx === -1) {
        return s;
    }

    return s.substring(commentEnd);
}

assertOutputForNamed("testInfoBox", "AutoEscapingExample-infoBox.ftlh");
assertOutputForNamed("testCapture", "AutoEscapingExample-capture.ftlh");
assertOutputForNamed("testMarkup", "AutoEscapingExample-markup.ftlh");
assertOutputForNamed("testConvert", "AutoEscapingExample-convert.ftlh");
assertOutputForNamed("testConvert2", "AutoEscapingExample-convert2.ftl");
assertOutputForNamed("testStringLiteral", "AutoEscapingExample-stringLiteral.ftlh");
assertOutputForNamed("testStringLiteral2", "AutoEscapingExample-stringLiteral2.ftlh");
assertOutputForNamed("testStringConcat", "AutoEscapingExample-stringConcat.ftlh");