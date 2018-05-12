const test = require('ava');
const {FMParserTokenManager} = require('../dist/freemarker/core/FMParserTokenManager');

test('85>>6 = ' + (86 >> 6), t => t.is(FMParserTokenManager.shiftRight(85, 6), 85>>6));