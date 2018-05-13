const OutputStreamWriter = require("../../../dist/java/io/OutputStreamWriter").OutputStreamWriter;
const Product = require("./Product").Product;
const Configuration = require("../../../dist/freemarker/template/Configuration").Configuration;
const TemplateExceptionHandler = require("../../../dist/freemarker/template/TemplateExceptionHandler").TemplateExceptionHandler;
const FileTemplateLoader = require('../../../dist/freemarker/cache/FileTemplateLoader').FileTemplateLoader;
const Map = require('../../../dist/java/util/Map').Map;
const System = require('../../../dist/java/lang/System').System;
const test = new (require('./ExamplesTest').ExamplesTest)();

test.test('main', () => {
    /* ------------------------------------------------------------------------ */
    /* You should do this ONLY ONCE in the whole application life-cycle:        */

    /* Create and adjust the configuration singleton */
    const cfg = new Configuration(Configuration.VERSION_2_3_24);
//        cfg.setClassForTemplateLoading(GettingStartedExample.class, "");
    cfg.setDefaultEncoding("UTF-8");
    cfg.setTemplateExceptionHandler(TemplateExceptionHandler.RETHROW_HANDLER);
    cfg.setLogTemplateExceptions(false);
    cfg.setTemplateLoader(new FileTemplateLoader(__dirname, 'utf-8'));

    /* ------------------------------------------------------------------------ */
    /* You usually do these for MULTIPLE TIMES in the application life-cycle:   */

    /* Create a data-model */
    let root = new Map();
    root.put("user", "Big Joe");
    let latest = new Product();
    latest.setUrl("products/greenmouse.html");
    latest.setName("green mouse");
    root.put("latestProduct", latest);

    /* Get the template (uses cache internally) */
    let temp = cfg.getTemplate("test.ftlh");

    /* Merge data-model with template */
    let out = new OutputStreamWriter(System.out);
    temp.process(root, out);
    // Note: Depending on what `out` is, you may need to call `out.close()`.
    // This is usually the case for file output, but not for servlet output.
});
