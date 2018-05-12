const test = require('ava');
const {ClassUtil} = require("../../../dist/freemarker/template/utility/ClassUtil");
const {TemplateModel} = require("../../../dist/freemarker/template/TemplateModel");
const {SimpleScalar} = require("../../../dist/freemarker/template/SimpleScalar");



test('test', t => {
    const s = new SimpleScalar('Hello World!');
    t.truthy(ClassUtil.isAssignableFrom(s, 'freemarker.template.TemplateModel'));
});