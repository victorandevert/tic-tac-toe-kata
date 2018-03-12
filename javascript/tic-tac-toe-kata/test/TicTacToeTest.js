let TicTacToe = require('../src/TicTacToe.js');
let assert = require('assert');

describe('Hello world greetings', function () {
    it('says hello', function () {
        assert.equal('Hello world!',TicTacToe.greetings());
    });
});