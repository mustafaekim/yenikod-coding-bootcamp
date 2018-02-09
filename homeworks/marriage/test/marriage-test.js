var assert = require('assert');
var { Marriage } = require('../model/marriage.js')
var { User } = require("../model/user.js");

describe('Marriage', function () {


    describe('new Marriage()', function () {
        it('should create a new marriage between 2 users', function () {
            var user1 = new User("Mustafa")
            var user2 = new User("Boriana")


            var mar1 = new Marriage(user1, user2);

            assert.equal(mar1.hasMember(user1), true);
            assert.equal(mar1.hasMember(user2), true);
            assert.equal(mar1.hasMember(new User("Hasan")), false);
        });
    });


});