const test = require('ava');
const {Map} = require('../dist/java/util/Map');

test('put&containsKey', t => {
    const map = new Map();
    map.put("a", 1);
    t.truthy(map.containsKey('a'));
});

test('put&get', t => {
    const map = new Map();
    map.put('a', 1);
    t.is(map.get('a'), 1);
});