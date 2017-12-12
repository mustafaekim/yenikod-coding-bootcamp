var assert = require('assert');

var Balance = require("../domain/balance").Balance;
var Transaction = require("../domain/balance").Transaction;

/*
    My Tests on Balance
*/
describe('Balance', function () {
    it('Start a balance, add transactions', function () {
        var aBalance = new Balance(1, 2, 0);
        aBalance.addTransaction(new Date(), 10, "test desc", Transaction.TYPES.IN, {hop: "bop"});
        assert.strictEqual(aBalance.current, 10);

        aBalance.addTransaction(new Date(), 15, "test desc", Transaction.TYPES.IN, {hop: "zop"});        
        assert.strictEqual(aBalance.current, 25);

        console.dir(aBalance)
    });
});