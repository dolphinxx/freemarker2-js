const StringTemplateLoader = require("../../../dist/freemarker/cache/StringTemplateLoader").StringTemplateLoader;
const MultiTemplateLoader = require("../../../dist/freemarker/cache/MultiTemplateLoader").MultiTemplateLoader;
const Configuration = require("../../../dist/freemarker/template/Configuration").Configuration;
const FileTemplateLoader = require("../../../dist/freemarker/cache/FileTemplateLoader").FileTemplateLoader;
const __extends = (this && this.__extends) || (function () {
    const extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
const {TemplateTest} = require('./TemplateTest');
const {Map} = require('../../../dist/java/util/Map');
const fs = require('fs');
const path = require('path');
const ExamplesTest = /** @class */ (function (_super) {
    __extends(ExamplesTest, _super);

    function ExamplesTest() {
        const _this = _super.call(this) || this;
        return _this;
    }

    ExamplesTest.prototype.loadPropertiesFile = function (name) {
        const result = new Map();
        const file = path.resolve(__dirname, name);
        if(!fs.existsSync(file)) {
            return result;
        }
        let content = fs.readFileSync(file, 'UTF-8');
        content = content.split('\n');
        let lastLine = null;
        for(let line of content) {
            if(line.charAt(0) === '#') {
                continue;
            }
            if(line.endsWith('\r')) {
                line = line.substring(0, line.length - 1);
            }
            if(line.endsWith('\\')) {
                line = line.substring(0, line.length - 1);
                if(lastLine !== null) {
                    lastLine += line;
                    continue;
                }
                lastLine = line;
                continue;
            }
            if(lastLine !== null) {
                line = lastLine + line;
                lastLine = null;
            }else if(line.trim().length === 0){
                continue;
            }
            let index = line.indexOf('=');
            result.put(line.substring(0, index).trim(), line.substring(index + 1).trim());
        }
        return result;
    };
    ExamplesTest.prototype.createConfiguration = function () {
        const cfg = new Configuration(Configuration.getVersion());
        this.setupTemplateLoaders(cfg);
        return cfg;
    };
    ExamplesTest.prototype.setupTemplateLoaders = function (cfg) {
        cfg.setTemplateLoader(new MultiTemplateLoader([new StringTemplateLoader(), new FileTemplateLoader(__dirname, 'utf-8')]));
    };
    return ExamplesTest;
}(TemplateTest));
exports.ExamplesTest = ExamplesTest;