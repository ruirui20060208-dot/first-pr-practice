const { test } = require('node:test');
const assert = require('node:assert');
const { greet } = require('../greet');

test('greets someone by name', () => {
  assert.strictEqual(greet('Ada'), 'Hello, Ada!');
});

test('falls back to "world" when no name is given', () => {
  assert.strictEqual(greet(), 'Hello, world!');
  assert.strictEqual(greet(''), 'Hello, world!');
});
