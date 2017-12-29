
var assert = require("assert");

var cmd = require("../class-manager-domain-bundle.js");

/*
    My Tests on Balance
*/
describe('Class Manager Domain Bundle', function () {
    it('Create a new User', function () {
        var aUser = new cmd.User(1);
        assert.strictEqual(aUser.userId, 1);
    });

    it('Create a new Balance', function () {
        var aBalance = new cmd.Balance(1, 2, 10);
        assert.strictEqual(aBalance.current, 10);
    });
});