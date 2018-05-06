// require('../dist/freemarker/TemplateStringBuilder');
// require('../dist/freemarker/TemplateReader');
// require('../dist/freemarker/TemplateWriter');
// require('../dist/freemarker/template/SimpleScalar');
// require('../dist/freemarker/template/utility/CaptureOutputWriter');
// require('../dist/freemarker/cache/_CacheAPI');
// require('../dist/freemarker/template/TemplateBooleanModel');
// require('../dist/freemarker/template/SimpleCollection');
// require('../dist/freemarker/template/MapKeyValuePairIterator');
// require('../dist/freemarker/template/SimpleHash');
// require('../dist/freemarker/template/SimpleSequence');
//
//
// require('../dist/freemarker/template/Configuration');
// require('../dist/freemarker/core/MixedContent');
// console.log(new (require('../dist/freemarker/core/TemplateElement')).TemplateElement());
// console.log(new (require('../dist/freemarker/template/Configuration')).Configuration());
// console.log(new (require('../dist/freemarker/core/Macro')).Macro());
// console.log(require('../dist/freemarker/core/MixedContent').MixedContent);
process.env.NODE_PATH = __dirname + '/dist/';
require('module').Module._initPaths();
const path = require('path');
const Template = require('../dist/freemarker/template/Template').Template;
const ParseException = require('../dist/freemarker/core/ParseException').ParseException;
const Configuration = require('../dist/freemarker/template/Configuration').Configuration;
const StringWriter = require('../dist/java/io/StringWriter').StringWriter;
const PrintWriter = require('../dist/java/io/PrintWriter').PrintWriter;
const StringReader = require('../dist/java/io/StringReader').StringReader;
const SimpleHash = require('../dist/freemarker/template/SimpleHash').SimpleHash;
const FileTemplateLoader = require('../dist/freemarker/cache/FileTemplateLoader').FileTemplateLoader;
const TemplateExceptionHandler = require('../dist/freemarker/template/TemplateExceptionHandler').TemplateExceptionHandler;
const config = new Configuration();
config.setTemplateLoader(new FileTemplateLoader(path.resolve(__dirname, '../ftl')));
config.setTemplateExceptionHandler(TemplateExceptionHandler.DEBUG_HANDLER)
// const reader = new StringReader('');

// const template = new Template('foo', reader, configuration);
let writer = new StringWriter();
let exception = null;
try{
    const template = config.getTemplate$java_lang_String('foo.ftl');
    template.process(new SimpleHash({"name": "Freemarker", "language": "french", "mobile": true}), writer);
} catch(e) {
    exception = e;
}
const a = new Map();
console.log('----------------------------\n');
console.log(writer.toString());
console.log('\n----------------------------');
if(exception != null) {
    setTimeout(() => {
        if(exception.getDescription) {
            console.error(exception.getDescription());
        }
        throw exception;
        }, 1000);
}