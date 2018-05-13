const test = new (require('./ExamplesTest').ExamplesTest)();

test.test('testInfoBox', () => test.assertOutputForNamed("AutoEscapingExample-infoBox.ftlh"));
test.test('testCapture', () => test.assertOutputForNamed("AutoEscapingExample-capture.ftlh"));
test.test('testMarkup', () => test.assertOutputForNamed("AutoEscapingExample-markup.ftlh"));
test.test('testConvert', () => test.assertOutputForNamed("AutoEscapingExample-convert.ftlh"));
test.test('testConvert2', () => test.assertOutputForNamed("AutoEscapingExample-convert2.ftl"));
test.test('testStringLiteral', () => test.assertOutputForNamed("AutoEscapingExample-stringLiteral.ftlh"));
test.test('testStringLiteral2', () => test.assertOutputForNamed("AutoEscapingExample-stringLiteral2.ftlh"));
test.test('testStringConcat', () => test.assertOutputForNamed("AutoEscapingExample-stringConcat.ftlh"));