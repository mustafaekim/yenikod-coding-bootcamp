var assert = require('assert');

var User = require("../domain/user")


/*
    My Tests on User
*/
describe('User', function () {
    it('new User-s properties should be set correctly', function () {
        var aUser = new User(1, "Mustafa", "Ekim", "ekim.mustafa@gmail.com", "+90 533 357 49 19");
        assert.strictEqual(aUser.userId, 1);
        assert.strictEqual(aUser.firstName, "Mustafa");
        assert.strictEqual(aUser.lastName, "Ekim");
        assert.strictEqual(aUser.email, "ekim.mustafa@gmail.com");
        assert.strictEqual(aUser.mobile, "+90 533 357 49 19");

        assert.strictEqual(aUser.constructor, User);
    });
});

