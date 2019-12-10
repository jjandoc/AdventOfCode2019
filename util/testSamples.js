const testSamples = (func, items, expected) => items.map((item, i) => func(item) === expected[i]);
module.exports = testSamples;