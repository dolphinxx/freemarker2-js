const {ClassUtil} = require("../dist/freemarker/template/utility/ClassUtil");
const {TemplateModel} = require("../dist/freemarker/template/TemplateModel");
const {SimpleScalar} = require("../dist/freemarker/template/SimpleScalar");


const s = new SimpleScalar('Hello World!');
console.log(ClassUtil.isAssignableFrom(s,  'freemarker.template.TemplateModel'));