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
const ExamplesTest = /** @class */ (function (_super) {
    __extends(ExamplesTest, _super);

    function ExamplesTest() {
        const _this = _super.call(this) || this;
        return _this;
    }

    ExamplesTest.prototype.loadPropertiesFile = function (name) {
        throw new Error();
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