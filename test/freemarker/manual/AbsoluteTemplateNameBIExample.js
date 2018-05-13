const test = new (require('./ExamplesTest').ExamplesTest)();

test.test('AbsoluteTemplateNameBIExample', () => {
    test.assertOutputForNamed("dir/AbsoluteTemplateNameBIExample-main.ftl");
});