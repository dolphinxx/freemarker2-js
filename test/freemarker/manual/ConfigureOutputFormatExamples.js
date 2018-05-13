const OrMatcher = require("../../../dist/freemarker/cache/OrMatcher").OrMatcher;
const FileExtensionMatcher = require("../../../dist/freemarker/cache/FileExtensionMatcher").FileExtensionMatcher;
const PathGlobMatcher = require("../../../dist/freemarker/cache/PathGlobMatcher").PathGlobMatcher;
const ConditionalTemplateConfigurationFactory = require("../../../dist/freemarker/cache/ConditionalTemplateConfigurationFactory").ConditionalTemplateConfigurationFactory;
const TemplateConfiguration = require("../../../dist/freemarker/core/TemplateConfiguration").TemplateConfiguration;
const HTMLOutputFormat = require("../../../dist/freemarker/core/HTMLOutputFormat").HTMLOutputFormat;
const XMLOutputFormat = require("../../../dist/freemarker/core/XMLOutputFormat").XMLOutputFormat;
const RTFOutputFormat = require("../../../dist/freemarker/core/RTFOutputFormat").RTFOutputFormat;
const FirstMatchTemplateConfigurationFactory = require("../../../dist/freemarker/cache/FirstMatchTemplateConfigurationFactory").FirstMatchTemplateConfigurationFactory;
const test = new (require('./ExamplesTest').ExamplesTest)();

test.test("ConfigureOutputFormatExample", () => {
    const cfg = test.getConfiguration();
    test.addTemplate("mail/t.ftl", "");
    test.addTemplate("t.html", "");
    test.addTemplate("t.htm", "");
    test.addTemplate("t.xml", "");
    test.addTemplate("t.rtf", "");
    // Example 2/a:
    {
        const tcHTML = new TemplateConfiguration();
        tcHTML.setOutputFormat(HTMLOutputFormat.INSTANCE);

        cfg.setTemplateConfigurations(
            new ConditionalTemplateConfigurationFactory(
                new PathGlobMatcher("mail/**"),
                tcHTML));

        test.assertEquals(HTMLOutputFormat.INSTANCE, cfg.getTemplate("mail/t.ftl").getOutputFormat());
    }
    // Example 2/b:
    {
        cfg.setTemplateConfigurations(null); // Just to be sure...

        cfg.setSettings(test.loadPropertiesFile("ConfigureOutputFormatExamples1.properties"));

        test.assertEquals(HTMLOutputFormat.INSTANCE, cfg.getTemplate("mail/t.ftl").getOutputFormat());
    }

// Example 3/a:
    {
        const tcHTML = new TemplateConfiguration();
        tcHTML.setOutputFormat(HTMLOutputFormat.INSTANCE);

        const tcXML = new TemplateConfiguration();
        tcXML.setOutputFormat(XMLOutputFormat.INSTANCE);

        const tcRTF = new TemplateConfiguration();
        tcRTF.setOutputFormat(RTFOutputFormat.INSTANCE);

        cfg.setTemplateConfigurations(
            new FirstMatchTemplateConfigurationFactory(
                new ConditionalTemplateConfigurationFactory(
                    new FileExtensionMatcher("xml"),
                    tcXML),
                new ConditionalTemplateConfigurationFactory(
                    new OrMatcher(
                        new FileExtensionMatcher("html"),
                        new FileExtensionMatcher("htm")),
                    tcHTML),
                new ConditionalTemplateConfigurationFactory(
                    new FileExtensionMatcher("rtf"),
                    tcRTF)
            ).allowNoMatch(true)
        );

        test.assertEquals(HTMLOutputFormat.INSTANCE, cfg.getTemplate("t.html").getOutputFormat());
        test.assertEquals(HTMLOutputFormat.INSTANCE, cfg.getTemplate("t.htm").getOutputFormat());
        test.assertEquals(XMLOutputFormat.INSTANCE, cfg.getTemplate("t.xml").getOutputFormat());
        test.assertEquals(RTFOutputFormat.INSTANCE, cfg.getTemplate("t.rtf").getOutputFormat());
    }

// Example 3/b:
    {
        cfg.setTemplateConfigurations(null); // Just to be sure...

        cfg.setSettings(test.loadPropertiesFile("ConfigureOutputFormatExamples2.properties"));

        test.assertEquals(HTMLOutputFormat.INSTANCE, cfg.getTemplate("t.html").getOutputFormat());
        test.assertEquals(HTMLOutputFormat.INSTANCE, cfg.getTemplate("t.htm").getOutputFormat());
        test.assertEquals(XMLOutputFormat.INSTANCE, cfg.getTemplate("t.xml").getOutputFormat());
        test.assertEquals(RTFOutputFormat.INSTANCE, cfg.getTemplate("t.rtf").getOutputFormat());
    }
});